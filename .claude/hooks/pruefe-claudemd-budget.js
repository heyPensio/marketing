#!/usr/bin/env node
/**
 * PreToolUse-Hook für ein projektspezifisch aktiviertes CLAUDE.md-Budget.
 *
 * - Edit/Write auf CLAUDE.md: ab WARNSCHWELLE warnen, aber Kürzen erlauben.
 * - Bash/PowerShell mit relevantem git commit: ab HARTMARKE blockieren.
 * - Mess- und Git-Fehler in relevanten Pfaden: fail-closed blockieren.
 *
 * Der Hook liest genau ein PreToolUse-JSON von stdin. Exit 0 lässt durch,
 * Exit 2 blockiert. Marken und Messlogik kommen aus pruefe-budget.js.
 */
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

function findeG1Pfad() {
  const kandidaten = [
    path.resolve(__dirname, '..', 'tools', 'pruefe-budget.js'),
    path.resolve(__dirname, '..', '..', 'tools', 'pruefe-budget.js'),
  ];
  const treffer = kandidaten.filter((kandidat) => fs.existsSync(kandidat));
  if (treffer.length !== 1) {
    throw new Error(
      `Messmodul nicht eindeutig gefunden; erwartet genau einen Treffer, erhalten ${treffer.length}`,
    );
  }
  return treffer[0];
}

function ladeG1() {
  return require(findeG1Pfad());
}

function istClaudePfad(wert) {
  if (typeof wert !== 'string' || !wert.trim()) return false;
  const normal = wert.trim().replace(/\\/g, '/').replace(/^\.\//, '').replace(/\/+$/, '');
  return /(^|\/)CLAUDE\.md$/i.test(normal);
}

function zielpfad(toolInput, cwd) {
  const roh = toolInput.file_path || toolInput.path || toolInput.target_file || toolInput.target;
  if (!istClaudePfad(roh)) return null;
  return path.isAbsolute(roh) ? path.normalize(roh) : path.resolve(cwd, roh);
}

function erlaube(warnungen = []) {
  if (!warnungen.length) return { exitCode: 0, stdout: '', stderr: '', art: 'durchlass' };
  return {
    exitCode: 0,
    stdout: JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        permissionDecision: 'allow',
        permissionDecisionReason: warnungen.join('\n\n'),
      },
    }),
    stderr: '',
    art: 'warnung',
  };
}

function blockiere(meldungen) {
  return {
    exitCode: 2,
    stdout: '',
    stderr: meldungen.join('\n\n'),
    art: 'block',
  };
}

function teileShellSegmente(zeile) {
  const segmente = [];
  let aktuell = '';
  let quote = null;
  for (let i = 0; i < zeile.length; i += 1) {
    const c = zeile[i];
    if (quote) {
      aktuell += c;
      if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'") {
      quote = c;
      aktuell += c;
      continue;
    }
    if (c === ';' || c === '\n' || c === '\r' || c === '|'
        || (c === '&' && zeile[i + 1] === '&')) {
      if (aktuell.trim()) segmente.push(aktuell.trim());
      aktuell = '';
      if ((c === '|' && zeile[i + 1] === '|') || (c === '&' && zeile[i + 1] === '&')) i += 1;
      continue;
    }
    aktuell += c;
  }
  if (aktuell.trim()) segmente.push(aktuell.trim());
  return segmente;
}

function tokenisiere(segment) {
  const tokens = [];
  let aktuell = '';
  let quote = null;
  for (let i = 0; i < segment.length; i += 1) {
    const c = segment[i];
    if (quote) {
      if (c === quote) quote = null;
      else aktuell += c;
      continue;
    }
    if (c === '"' || c === "'") {
      quote = c;
    } else if (/\s/.test(c)) {
      if (aktuell) {
        tokens.push(aktuell);
        aktuell = '';
      }
    } else {
      aktuell += c;
    }
  }
  if (aktuell) tokens.push(aktuell);
  return tokens;
}

const COMMIT_OPTIONEN_MIT_WERT = new Set([
  '-m', '--message', '-F', '--file', '--author', '--date', '--cleanup',
  '-C', '--reuse-message', '-c', '--reedit-message', '--fixup', '--squash',
  '--trailer', '--pathspec-from-file', '--untracked-files',
]);

function commitPfade(args) {
  const pfade = [];
  let nachTrenner = false;
  for (let i = 0; i < args.length; i += 1) {
    const token = args[i];
    if (nachTrenner) {
      pfade.push(token);
      continue;
    }
    if (token === '--') {
      nachTrenner = true;
      continue;
    }
    if (token.startsWith('--') && token.includes('=')) continue;
    if (COMMIT_OPTIONEN_MIT_WERT.has(token)) {
      i += 1;
      continue;
    }
    if (/^-[A-Za-z]*m$/.test(token)) {
      i += 1;
      continue;
    }
    if (token.startsWith('-')) continue;
    pfade.push(token);
  }
  return pfade;
}

function findeCommitAufrufe(kommando, basisCwd) {
  const aufrufe = [];
  for (const segment of teileShellSegmente(kommando)) {
    const tokens = tokenisiere(segment);
    let i = 0;
    while (i < tokens.length && (tokens[i] === '&' || tokens[i] === 'sudo'
      || /^[A-Za-z_][A-Za-z0-9_]*=/.test(tokens[i]))) i += 1;
    if (tokens[i] !== 'git' && !/[\\/]git(?:\.exe)?$/i.test(tokens[i] || '')) continue;
    i += 1;
    let repoCwd = basisCwd;
    while (i < tokens.length && tokens[i].startsWith('-')) {
      if (tokens[i] === '-C' && tokens[i + 1]) {
        repoCwd = path.resolve(repoCwd, tokens[i + 1]);
        i += 2;
      } else if (tokens[i] === '-c' && tokens[i + 1]) {
        i += 2;
      } else {
        i += 1;
      }
    }
    if (tokens[i] !== 'commit') continue;
    const args = tokens.slice(i + 1);
    aufrufe.push({ repoCwd, args, pfade: commitPfade(args) });
  }
  return aufrufe;
}

function gitPuffer(repoCwd, argumente) {
  const lauf = spawnSync('git', ['-C', repoCwd, ...argumente], {
    encoding: null,
    maxBuffer: 16 * 1024 * 1024,
    windowsHide: true,
  });
  if (lauf.error) throw lauf.error;
  if (lauf.status !== 0) {
    const fehler = (lauf.stderr || lauf.stdout || Buffer.from(`git Exit ${lauf.status}`))
      .toString('utf8').trim();
    throw new Error(fehler || `git Exit ${lauf.status}`);
  }
  return lauf.stdout;
}

function indexEnthaeltClaude(repoCwd) {
  const namen = gitPuffer(repoCwd, ['diff', '--cached', '--name-only', '-z'])
    .toString('utf8').split('\0').filter(Boolean);
  return namen.some((name) => name.replace(/\\/g, '/') === 'CLAUDE.md');
}

function commitIstRelevant(aufruf) {
  if (aufruf.pfade.some(istClaudePfad)) return true;
  const breitePfade = aufruf.pfade.some((p) => p === '.' || p === ':/' || p === '*');
  if (aufruf.pfade.length && !breitePfade) return false;
  return indexEnthaeltClaude(aufruf.repoCwd);
}

function findeZeigerAusserhalbKopf(puffer) {
  const zeilen = puffer.toString('utf8').split(/\r?\n/);
  const ausserhalb = zeilen.slice(50);
  for (let i = 0; i < ausserhalb.length; i += 1) {
    if (/MITZULESEN/i.test(ausserhalb[i])) return { muster: 'MITZULESEN', zeile: i + 51 };
    if (/PFLICHT-LESE/i.test(ausserhalb[i])) return { muster: 'PFLICHT-LESE', zeile: i + 51 };
  }
  const kompakt = ausserhalb.join(' ').replace(/\s+/g, ' ');
  if (/Auslagerung.{0,240}gilt.{0,240}als Teil/i.test(kompakt)) {
    return { muster: 'Auslagerung.*gilt.*als Teil', zeile: 'ab 51' };
  }
  return null;
}

function messeIndexUndArbeitsbaum(aufruf, G1) {
  const indexPuffer = gitPuffer(aufruf.repoCwd, ['show', ':CLAUDE.md']);
  const index = G1.messePuffer(indexPuffer);
  const wurzel = gitPuffer(aufruf.repoCwd, ['rev-parse', '--show-toplevel'])
    .toString('utf8').trim();
  const arbeitsbaum = G1.messeDatei(path.join(wurzel, 'CLAUDE.md'));
  return {
    index,
    arbeitsbaum,
    massgeblich: arbeitsbaum.wert > index.wert ? arbeitsbaum : index,
    quelle: arbeitsbaum.wert > index.wert ? 'Arbeitsbaum-Ist-Wert' : 'Index-Ist-Wert',
    indexPuffer,
  };
}

function verarbeiteEingabe(roheEingabe, optionen = {}) {
  let eingabe;
  try {
    eingabe = JSON.parse(roheEingabe);
  } catch (fehler) {
    return blockiere([
      'BLOCKIERT fail-closed: Das PreToolUse-JSON war nicht lesbar.',
      `JSON-Fehler: ${fehler.message}`,
    ]);
  }

  const toolName = String(eingabe.tool_name || eingabe.toolName || '');
  const toolInput = eingabe.tool_input || eingabe.toolInput || {};
  const basisCwd = path.resolve(optionen.cwd || eingabe.cwd || process.cwd());

  if (/^(Edit|Write)$/i.test(toolName)) {
    const datei = zielpfad(toolInput, basisCwd);
    if (!datei) return erlaube();
    try {
      const G1 = ladeG1();
      const messung = G1.messeDatei(datei);
      if (messung.wert >= G1.WARNSCHWELLE) {
        return erlaube([
          `WARNUNG CLAUDE.md-Budget: WARNSCHWELLE ${G1.WARNSCHWELLE}, Ist ${messung.wert} `
          + `(Bytes ${messung.bytes}, Codepoints ${messung.codepoints}). `
          + 'Kürzen ist immer erlaubt; dieser Edit/Write wird nicht blockiert.',
        ]);
      }
      return erlaube();
    } catch (fehler) {
      return blockiere([
        `BLOCKIERT fail-closed: CLAUDE.md-bezogener ${toolName}-Aufruf konnte nicht gemessen werden.`,
        `Messfehler: ${fehler.message}`,
      ]);
    }
  }

  if (!/^(Bash|PowerShell)$/i.test(toolName)) return erlaube();
  const kommando = typeof toolInput.command === 'string' ? toolInput.command : '';
  const aufrufe = findeCommitAufrufe(kommando, basisCwd);
  if (!aufrufe.length) return erlaube();

  const warnungen = [];
  for (const aufruf of aufrufe) {
    let relevant;
    try {
      relevant = commitIstRelevant(aufruf);
    } catch (fehler) {
      return blockiere([
        'BLOCKIERT fail-closed: Ob der Commit CLAUDE.md aus dem Index einschließt, war nicht prüfbar.',
        `Git-Fehler: ${fehler.message}`,
      ]);
    }
    if (!relevant) continue;

    try {
      const G1 = ladeG1();
      const messung = messeIndexUndArbeitsbaum(aufruf, G1);
      const zeiger = findeZeigerAusserhalbKopf(messung.indexPuffer);
      if (zeiger) {
        warnungen.push(
          `WARNUNG Pflicht-Lese-Zeiger: Muster ${zeiger.muster} steht außerhalb `
          + `der ersten 50 Zeilen (Zeile ${zeiger.zeile}) der Index-Fassung von CLAUDE.md.`,
        );
      }
      if (messung.massgeblich.wert >= G1.HARTMARKE) {
        return blockiere([
          `BLOCKIERT CLAUDE.md-Budget: ${messung.quelle} ${messung.massgeblich.wert} `
          + `(Bytes ${messung.massgeblich.bytes}, Codepoints ${messung.massgeblich.codepoints}) `
          + `erreicht/überschreitet die HARTMARKE ${G1.HARTMARKE}.`,
          `Gegenprobe: Index ${messung.index.wert}, Arbeitsbaum ${messung.arbeitsbaum.wert}.`,
          'Ausweg: erst kürzen, dann committen; neue Lehren zuerst im vorgesehenen Register sichern.',
          ...warnungen,
        ]);
      }
    } catch (fehler) {
      return blockiere([
        'BLOCKIERT fail-closed: Index und Arbeitsbaum von CLAUDE.md konnten nicht vollständig gemessen werden.',
        `Mess-/Git-Fehler: ${fehler.message}`,
      ]);
    }
  }
  return erlaube(warnungen);
}

function assert(bedingung, meldung) {
  if (!bedingung) throw new Error(meldung);
}

function gitTest(repoCwd, argumente) {
  const lauf = spawnSync('git', ['-C', repoCwd, ...argumente], {
    encoding: 'utf8',
    maxBuffer: 16 * 1024 * 1024,
    windowsHide: true,
  });
  if (lauf.error) throw lauf.error;
  if (lauf.status !== 0) throw new Error((lauf.stderr || lauf.stdout || `git Exit ${lauf.status}`).trim());
  return lauf.stdout.trim();
}

function baueIndexRepo(repoCwd, dateiname, inhalt) {
  fs.mkdirSync(repoCwd, { recursive: true });
  gitTest(repoCwd, ['init', '--quiet', '-b', 'main']);
  gitTest(repoCwd, ['config', 'core.autocrlf', 'false']);
  fs.writeFileSync(path.join(repoCwd, dateiname), inhalt);
  const blob = gitTest(repoCwd, ['hash-object', '-w', '--', dateiname]);
  gitTest(repoCwd, ['update-index', '--add', '--cacheinfo', `100644,${blob},${dateiname}`]);
  return path.join(repoCwd, dateiname);
}

function selbsttest() {
  const G1 = ladeG1();
  const tempWurzel = fs.mkdtempSync(path.join(os.tmpdir(), 'regelwerk-hook-'));
  const ausgabe = ['SELBSTTEST pruefe-claudemd-budget.js'];
  let bestanden = 0;

  function fall(name, eingabe, pruefung) {
    const ergebnis = verarbeiteEingabe(JSON.stringify(eingabe));
    pruefung(ergebnis);
    bestanden += 1;
    ausgabe.push(`OK ${bestanden}/9 ${name}`);
  }

  try {
    const editRepo = path.join(tempWurzel, 'edit-warnung');
    const editDatei = baueIndexRepo(editRepo, 'CLAUDE.md', 'w'.repeat(G1.WARNSCHWELLE));
    fall('Edit CLAUDE.md an Warnschwelle -> Warnung, Exit 0', {
      tool_name: 'Edit', cwd: editRepo, tool_input: { file_path: editDatei },
    }, (ergebnis) => {
      assert(ergebnis.exitCode === 0 && ergebnis.art === 'warnung', 'Edit-Warnfall falsch');
      assert(ergebnis.stdout.includes('Kürzen ist immer erlaubt'), 'Kürzen-Ausweg fehlt');
    });

    const blockRepo = path.join(tempWurzel, 'commit-block');
    baueIndexRepo(blockRepo, 'CLAUDE.md', 'x'.repeat(G1.HARTMARKE + 1));
    fall('expliziter Commit über Hartmarke -> Exit 2', {
      tool_name: 'Bash', cwd: blockRepo,
      tool_input: { command: 'git commit -m "test" -- CLAUDE.md' },
    }, (ergebnis) => {
      assert(ergebnis.exitCode === 2 && ergebnis.art === 'block', 'Commit-Blockfall falsch');
    });

    const pfadlosRepo = path.join(tempWurzel, 'commit-pfadlos-block');
    baueIndexRepo(pfadlosRepo, 'CLAUDE.md', 'p'.repeat(G1.HARTMARKE + 1));
    fall('pfadloser Commit mit CLAUDE.md im Index -> Exit 2', {
      tool_name: 'Bash', cwd: pfadlosRepo, tool_input: { command: 'git commit -m "test"' },
    }, (ergebnis) => {
      assert(ergebnis.exitCode === 2 && ergebnis.art === 'block', 'Pfadloser Commit falsch');
    });

    const fremdRepo = path.join(tempWurzel, 'commit-ohne-claude');
    baueIndexRepo(fremdRepo, 'README.md', 'nur readme\n');
    fall('Commit ohne CLAUDE.md -> Exit 0', {
      tool_name: 'PowerShell', cwd: fremdRepo, tool_input: { command: 'git commit -m test' },
    }, (ergebnis) => {
      assert(ergebnis.exitCode === 0 && ergebnis.art === 'durchlass', 'Fremd-Commit falsch');
    });

    const kleinRepo = path.join(tempWurzel, 'commit-klein');
    baueIndexRepo(kleinRepo, 'CLAUDE.md', 'klein\r\n');
    fall('Commit unter Hartmarke -> Exit 0', {
      tool_name: 'PowerShell', cwd: kleinRepo,
      tool_input: { command: 'git commit -m test -- .\\CLAUDE.md' },
    }, (ergebnis) => {
      assert(ergebnis.exitCode === 0 && ergebnis.art === 'durchlass', 'Kleiner Commit falsch');
    });

    const zeigerRepo = path.join(tempWurzel, 'commit-zeiger');
    const zeigerText = `${'\n'.repeat(50)}MITZULESEN: neue Auslagerung\n`;
    baueIndexRepo(zeigerRepo, 'CLAUDE.md', zeigerText);
    fall('Pflicht-Lese-Zeiger ab Zeile 51 -> Warnung, Exit 0', {
      tool_name: 'Bash', cwd: zeigerRepo,
      tool_input: { command: 'git commit -m test -- CLAUDE.md' },
    }, (ergebnis) => {
      assert(ergebnis.exitCode === 0 && ergebnis.art === 'warnung', 'Zeiger-Warnung falsch');
      assert(ergebnis.stdout.includes('Zeile 51'), 'Zeiger-Fundzeile fehlt');
    });

    const wbRepo = path.join(tempWurzel, 'arbeitsbaum-groesser');
    baueIndexRepo(wbRepo, 'CLAUDE.md', 'klein\n');
    fs.writeFileSync(path.join(wbRepo, 'CLAUDE.md'), 'a'.repeat(G1.HARTMARKE + 1));
    fall('Index klein, Arbeitsbaum über Hartmarke -> Exit 2', {
      tool_name: 'Bash', cwd: wbRepo,
      tool_input: { command: 'git commit -m test -- CLAUDE.md' },
    }, (ergebnis) => {
      assert(ergebnis.exitCode === 2, 'Großer Arbeitsbaum wurde nicht blockiert');
      assert(ergebnis.stderr.includes('Arbeitsbaum-Ist-Wert'), 'Arbeitsbaum-Quelle fehlt');
    });

    const indexRepo = path.join(tempWurzel, 'index-groesser');
    baueIndexRepo(indexRepo, 'CLAUDE.md', 'i'.repeat(G1.HARTMARKE + 1));
    fs.writeFileSync(path.join(indexRepo, 'CLAUDE.md'), 'klein\n');
    fall('Index über Hartmarke, Arbeitsbaum klein -> Exit 2', {
      tool_name: 'Bash', cwd: indexRepo,
      tool_input: { command: 'git commit -m test -- CLAUDE.md' },
    }, (ergebnis) => {
      assert(ergebnis.exitCode === 2, 'Großer Index wurde nicht blockiert');
      assert(ergebnis.stderr.includes('Index-Ist-Wert'), 'Index-Quelle fehlt');
    });

    const kaputt = verarbeiteEingabe('{kein json');
    assert(kaputt.exitCode === 2 && kaputt.art === 'block', 'Kaputtes JSON nicht fail-closed');
    bestanden += 1;
    ausgabe.push(`OK ${bestanden}/9 unlesbares JSON -> fail-closed Exit 2`);

    ausgabe.push(`ERGEBNIS: ${bestanden}/9 grün`);
    return { exitCode: 0, ausgabe: ausgabe.join('\n') };
  } catch (fehler) {
    ausgabe.push(`FEHLER nach ${bestanden}/9: ${fehler.message}`);
    return { exitCode: 2, ausgabe: ausgabe.join('\n') };
  } finally {
    fs.rmSync(tempWurzel, { recursive: true, force: true });
  }
}

module.exports = {
  istClaudePfad,
  findeCommitAufrufe,
  findeZeigerAusserhalbKopf,
  verarbeiteEingabe,
};

if (require.main === module) {
  if (process.argv.includes('--selbsttest')) {
    if (process.argv.slice(2).length !== 1) {
      console.error('--selbsttest nimmt keine weiteren Argumente an');
      process.exit(2);
    }
    const ergebnis = selbsttest();
    console.log(ergebnis.ausgabe);
    process.exit(ergebnis.exitCode);
  }

  let roh;
  try {
    roh = fs.readFileSync(0, 'utf8');
  } catch (fehler) {
    const ergebnis = blockiere([
      'BLOCKIERT fail-closed: stdin konnte nicht gelesen werden.',
      `Lesefehler: ${fehler.message}`,
    ]);
    process.stderr.write(`${ergebnis.stderr}\n`);
    process.exit(ergebnis.exitCode);
  }
  const ergebnis = verarbeiteEingabe(roh);
  if (ergebnis.stdout) process.stdout.write(`${ergebnis.stdout}\n`);
  if (ergebnis.stderr) process.stderr.write(`${ergebnis.stderr}\n`);
  process.exit(ergebnis.exitCode);
}
