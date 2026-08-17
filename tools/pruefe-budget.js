#!/usr/bin/env node
/**
 * pruefe-budget.js — fail-closed Größen-Messgerät für CLAUDE.md.
 *
 * Vor der Aktivierung MUSS jedes Projekt die drei benannten Konstanten
 * unten selbst festlegen. Die winzigen Ausgangswerte sind absichtlich
 * unbrauchbare Aktivierungs-Platzhalter: Eine unveränderte Kopie blockiert
 * normale CLAUDE.md-Dateien, statt still mit fremden Schwellen zu arbeiten.
 *
 * Aufruf:
 *   node tools/pruefe-budget.js
 *   node tools/pruefe-budget.js <pfad-zur-CLAUDE.md>
 *   node tools/pruefe-budget.js --nur-messen [pfad-zur-CLAUDE.md]
 *   node tools/pruefe-budget.js --selbsttest
 *
 * Gemessen werden Arbeitsbaum und HEAD jeweils als Buffer-Bytes und
 * Unicode-Codepoints. Je Stand und standübergreifend zählt der größere
 * Wert. Mess-, Lese- und Git-Fehler enden fail-closed mit Exit 2.
 */
'use strict';

// AKTIVIERUNGS-PLATZHALTER — vor dem ersten Produktivlauf projektspezifisch
// ersetzen; dies sind ausdrücklich KEINE empfohlenen Schwellenwerte.
const SOLLMARKE = 80000;
const WARNSCHWELLE = 85000;
const HARTMARKE = 90000;

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const STANDARD_DATEI = path.resolve(process.cwd(), 'CLAUDE.md');

function aktuelleMarken() {
  return { SOLLMARKE, WARNSCHWELLE, HARTMARKE };
}

function validiereMarken(marken = aktuelleMarken()) {
  const werte = [marken.SOLLMARKE, marken.WARNSCHWELLE, marken.HARTMARKE];
  if (!werte.every((wert) => Number.isSafeInteger(wert) && wert > 0)) {
    throw new Error('SOLLMARKE, WARNSCHWELLE und HARTMARKE müssen positive Ganzzahlen sein');
  }
  if (!(marken.SOLLMARKE < marken.WARNSCHWELLE
      && marken.WARNSCHWELLE < marken.HARTMARKE)) {
    throw new Error('Erforderliche Reihenfolge: SOLLMARKE < WARNSCHWELLE < HARTMARKE');
  }
  return marken;
}

function messePuffer(puffer) {
  if (!Buffer.isBuffer(puffer)) throw new TypeError('messePuffer erwartet einen Buffer');
  const bytes = puffer.length;
  const codepoints = [...puffer.toString('utf8')].length;
  return { bytes, codepoints, wert: Math.max(bytes, codepoints) };
}

function messeDatei(dateipfad) {
  return messePuffer(fs.readFileSync(dateipfad));
}

function gitAusfuehren(repoWurzel, argumente, optionen = {}) {
  const lauf = spawnSync('git', ['-C', repoWurzel, ...argumente], {
    encoding: optionen.encoding === undefined ? 'utf8' : optionen.encoding,
    input: optionen.input,
    maxBuffer: 16 * 1024 * 1024,
    windowsHide: true,
    env: optionen.env || process.env,
  });
  if (lauf.error) throw lauf.error;
  if (lauf.status !== 0) {
    const stderr = Buffer.isBuffer(lauf.stderr)
      ? lauf.stderr.toString('utf8') : String(lauf.stderr || '');
    const stdout = Buffer.isBuffer(lauf.stdout)
      ? lauf.stdout.toString('utf8') : String(lauf.stdout || '');
    throw new Error((stderr || stdout || `git Exit ${lauf.status}`).trim());
  }
  return lauf.stdout;
}

function findeRepoWurzel(startpfad) {
  return String(gitAusfuehren(startpfad, ['rev-parse', '--show-toplevel'])).trim();
}

function gitPfad(repoWurzel, dateipfad) {
  const echtesRepo = fs.realpathSync.native(repoWurzel);
  let echteDatei;
  try {
    echteDatei = fs.realpathSync.native(dateipfad);
  } catch {
    echteDatei = path.join(
      fs.realpathSync.native(path.dirname(dateipfad)),
      path.basename(dateipfad),
    );
  }
  const relativ = path.relative(echtesRepo, echteDatei);
  if (!relativ || relativ === '..' || relativ.startsWith(`..${path.sep}`)
      || path.isAbsolute(relativ)) {
    throw new Error(`Datei liegt nicht innerhalb des Git-Repos: ${dateipfad}`);
  }
  return relativ.split(path.sep).join('/');
}

function messeVersioniert(repoWurzel, relativerGitPfad) {
  const puffer = gitAusfuehren(
    repoWurzel,
    ['show', `HEAD:${relativerGitPfad}`],
    { encoding: null },
  );
  return messePuffer(puffer);
}

function bewerteWert(wert, marken = aktuelleMarken()) {
  validiereMarken(marken);
  if (wert >= marken.HARTMARKE) {
    return { exitCode: 2, marke: 'HARTMARKE', grenze: marken.HARTMARKE };
  }
  if (wert >= marken.WARNSCHWELLE) {
    return { exitCode: 1, marke: 'WARNSCHWELLE', grenze: marken.WARNSCHWELLE };
  }
  if (wert >= marken.SOLLMARKE) {
    return { exitCode: 0, marke: 'SOLLMARKE', grenze: marken.SOLLMARKE };
  }
  return { exitCode: 0, marke: 'unter SOLLMARKE', grenze: marken.SOLLMARKE };
}

function pruefeBudget(dateipfad = STANDARD_DATEI, optionen = {}) {
  const absolut = path.resolve(dateipfad);
  const ergebnis = {
    dateipfad: absolut,
    repoWurzel: null,
    gitPfad: null,
    arbeitsbaum: null,
    versioniert: null,
    fehler: [],
    nurMessen: Boolean(optionen.nurMessen),
    exitCode: 2,
    marke: 'FEHLERREGEL',
    grenze: HARTMARKE,
    verwendeterWert: null,
  };

  try {
    ergebnis.arbeitsbaum = messeDatei(absolut);
  } catch (fehler) {
    ergebnis.fehler.push(`Arbeitsbaum: ${fehler.message}`);
  }

  try {
    ergebnis.repoWurzel = findeRepoWurzel(path.dirname(absolut));
    ergebnis.gitPfad = gitPfad(ergebnis.repoWurzel, absolut);
    ergebnis.versioniert = messeVersioniert(ergebnis.repoWurzel, ergebnis.gitPfad);
  } catch (fehler) {
    ergebnis.fehler.push(`Versioniert: ${fehler.message}`);
  }

  if (ergebnis.fehler.length) return ergebnis;

  ergebnis.verwendeterWert = Math.max(
    ergebnis.arbeitsbaum.wert,
    ergebnis.versioniert.wert,
  );

  if (ergebnis.nurMessen) {
    ergebnis.exitCode = 0;
    ergebnis.marke = 'NUR_MESSEN';
    ergebnis.grenze = null;
    return ergebnis;
  }

  try {
    const bewertung = bewerteWert(ergebnis.verwendeterWert, optionen.marken || aktuelleMarken());
    ergebnis.exitCode = bewertung.exitCode;
    ergebnis.marke = bewertung.marke;
    ergebnis.grenze = bewertung.grenze;
  } catch (fehler) {
    ergebnis.fehler.push(`Schwellen: ${fehler.message}`);
  }
  return ergebnis;
}

function formatiereStand(name, messung) {
  if (!messung) {
    return `${name}: Bytes NICHT ERHOBEN | Codepoints NICHT ERHOBEN | Wert NICHT ERHOBEN`;
  }
  return `${name}: Bytes ${messung.bytes} | Codepoints ${messung.codepoints} | Wert ${messung.wert}`;
}

function formatiereErgebnis(ergebnis) {
  const zeilen = [
    `Datei: ${ergebnis.dateipfad}`,
    formatiereStand('Arbeitsbaum', ergebnis.arbeitsbaum),
    formatiereStand(
      `Versioniert (HEAD:${ergebnis.gitPfad || 'NICHT ERMITTELT'})`,
      ergebnis.versioniert,
    ),
  ];

  if (ergebnis.fehler.length) {
    zeilen.push(`Verwendete Marke: FEHLERREGEL -> Exit 2 (HARTMARKE ${HARTMARKE})`);
    for (const fehler of ergebnis.fehler) zeilen.push(`FEHLER: ${fehler}`);
    return zeilen.join('\n');
  }

  if (ergebnis.nurMessen) {
    zeilen.push(`Modus: NUR_MESSEN | Ist ${ergebnis.verwendeterWert} | keine Schwellenbewertung`);
  } else {
    zeilen.push(
      `Verwendete Marke: ${ergebnis.marke} ${ergebnis.grenze} | Ist ${ergebnis.verwendeterWert}`,
    );
    if (ergebnis.verwendeterWert >= SOLLMARKE) {
      zeilen.push('Hinweis: Kompensationspflicht aktiv');
    }
  }
  zeilen.push(`Exit-Code: ${ergebnis.exitCode}`);
  return zeilen.join('\n');
}

function assert(bedingung, meldung) {
  if (!bedingung) throw new Error(meldung);
}

function baueTempRepo(repoWurzel, inhalt) {
  fs.mkdirSync(repoWurzel, { recursive: true });
  gitAusfuehren(repoWurzel, ['init', '--quiet', '-b', 'main']);
  gitAusfuehren(repoWurzel, ['config', 'core.autocrlf', 'false']);
  const datei = path.join(repoWurzel, 'CLAUDE.md');
  fs.writeFileSync(datei, inhalt);
  const blob = String(gitAusfuehren(repoWurzel, ['hash-object', '-w', '--', 'CLAUDE.md'])).trim();
  gitAusfuehren(repoWurzel, ['update-index', '--add', '--cacheinfo', `100644,${blob},CLAUDE.md`]);
  const baum = String(gitAusfuehren(repoWurzel, ['write-tree'])).trim();
  const testEnv = {
    ...process.env,
    GIT_AUTHOR_NAME: 'Regelwerk Selbsttest',
    GIT_AUTHOR_EMAIL: 'regelwerk-selbsttest@example.invalid',
    GIT_COMMITTER_NAME: 'Regelwerk Selbsttest',
    GIT_COMMITTER_EMAIL: 'regelwerk-selbsttest@example.invalid',
    GIT_AUTHOR_DATE: '2000-01-01T00:00:00+00:00',
    GIT_COMMITTER_DATE: '2000-01-01T00:00:00+00:00',
  };
  const commit = String(gitAusfuehren(
    repoWurzel,
    ['commit-tree', baum, '-m', 'Regelwerk Selbsttest'],
    { env: testEnv },
  )).trim();
  gitAusfuehren(repoWurzel, ['update-ref', 'refs/heads/main', commit]);
  return datei;
}

function selbsttest() {
  const tempWurzel = fs.mkdtempSync(path.join(os.tmpdir(), 'regelwerk-budget-'));
  const ausgabe = ['SELBSTTEST pruefe-budget.js'];
  let bestanden = 0;

  function fall(name, inhalt, pruefung, vorbereiten, optionen = {}) {
    const repo = path.join(tempWurzel, `fall-${bestanden + 1}`);
    const datei = baueTempRepo(repo, inhalt);
    if (vorbereiten) vorbereiten(datei);
    const ergebnis = pruefeBudget(datei, optionen);
    pruefung(ergebnis);
    bestanden += 1;
    ausgabe.push(`OK ${bestanden}/9 ${name}`);
  }

  try {
    validiereMarken();
    fall('unter Sollmarke -> Exit 0', 'k'.repeat(SOLLMARKE - 1), (ergebnis) => {
      assert(ergebnis.exitCode === 0, `erwartet Exit 0, erhalten ${ergebnis.exitCode}`);
    });
    fall('Sollmarke -> Exit 0', 's'.repeat(SOLLMARKE), (ergebnis) => {
      assert(ergebnis.exitCode === 0 && ergebnis.marke === 'SOLLMARKE', 'Sollmarke falsch');
    });
    fall('Warnschwelle -> Exit 1', 'w'.repeat(WARNSCHWELLE), (ergebnis) => {
      assert(ergebnis.exitCode === 1 && ergebnis.marke === 'WARNSCHWELLE', 'Warnfall falsch');
    });
    fall('Hartmarke -> Exit 2', 'h'.repeat(HARTMARKE), (ergebnis) => {
      assert(ergebnis.exitCode === 2 && ergebnis.marke === 'HARTMARKE', 'Hartfall falsch');
    });
    // Testkörper relativ zur HARTMARKE ('ä\r\n' = 4 Bytes / 3 Codepoints je Wiederholung),
    // damit der Fall auch nach dem Setzen projektspezifischer Schwellen trägt
    // (Zentrale-Fund 17.08.2026: die Erstfassung war auf die Platzhalter 100/120/140
    // verdrahtet und brach nach der Pflicht-Aktivierung).
    const crlfN = HARTMARKE;
    fall(`CRLF/UTF-8: Bytes ${4 * crlfN} > Codepoints ${3 * crlfN}, größerer Wert -> Exit 2`,
      'ä\r\n'.repeat(crlfN), (ergebnis) => {
        assert(ergebnis.arbeitsbaum.bytes === 4 * crlfN, `Bytes ${ergebnis.arbeitsbaum.bytes}`);
        assert(ergebnis.arbeitsbaum.codepoints === 3 * crlfN, `Codepoints ${ergebnis.arbeitsbaum.codepoints}`);
        assert(ergebnis.verwendeterWert === 4 * crlfN && ergebnis.exitCode === 2, 'Größerer Wert fehlt');
      });
    fall('fehlende Arbeitsbaum-Datei -> fail-closed Exit 2', 'versioniert\n', (ergebnis) => {
      assert(ergebnis.exitCode === 2 && ergebnis.arbeitsbaum === null, 'Fehlende Datei nicht rot');
      assert(ergebnis.versioniert !== null, 'HEAD-Gegenstand nicht weiter gemessen');
    }, (datei) => fs.unlinkSync(datei));
    fall('Arbeitsbaum größer als HEAD -> Arbeitsbaum entscheidet', 'klein\n', (ergebnis) => {
      assert(ergebnis.verwendeterWert === HARTMARKE + 1, 'Arbeitsbaum nicht maßgeblich');
      assert(ergebnis.exitCode === 2, 'Großer Arbeitsbaum nicht rot');
    }, (datei) => fs.writeFileSync(datei, 'a'.repeat(HARTMARKE + 1)));
    fall('HEAD größer als Arbeitsbaum -> HEAD entscheidet', 'v'.repeat(HARTMARKE + 1), (ergebnis) => {
      assert(ergebnis.verwendeterWert === HARTMARKE + 1, 'HEAD nicht maßgeblich');
      assert(ergebnis.exitCode === 2, 'Großer HEAD-Stand nicht rot');
    }, (datei) => fs.writeFileSync(datei, 'klein\n'));
    fall('Nur-Messen-Modus liefert Ist-Wert ohne Bewertung', 'm'.repeat(HARTMARKE + 1), (ergebnis) => {
      assert(ergebnis.exitCode === 0 && ergebnis.nurMessen, 'Nur-Messen nicht Exit 0');
      assert(formatiereErgebnis(ergebnis).includes('keine Schwellenbewertung'), 'Messhinweis fehlt');
    }, null, { nurMessen: true });

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
  SOLLMARKE,
  WARNSCHWELLE,
  HARTMARKE,
  aktuelleMarken,
  validiereMarken,
  messePuffer,
  messeDatei,
  messeVersioniert,
  bewerteWert,
  pruefeBudget,
  formatiereErgebnis,
};

if (require.main === module) {
  const argumente = process.argv.slice(2);
  if (argumente.includes('--selbsttest')) {
    if (argumente.length !== 1) {
      console.error('--selbsttest nimmt keine weiteren Argumente an');
      process.exit(2);
    }
    const ergebnis = selbsttest();
    console.log(ergebnis.ausgabe);
    process.exit(ergebnis.exitCode);
  }

  const nurMessen = argumente.includes('--nur-messen');
  const rest = argumente.filter((argument) => argument !== '--nur-messen');
  if (rest.some((argument) => argument.startsWith('--')) || rest.length > 1) {
    console.error('Aufruf: node pruefe-budget.js [--nur-messen] [pfad-zur-CLAUDE.md] | --selbsttest');
    process.exit(2);
  }
  const ergebnis = pruefeBudget(rest[0] || STANDARD_DATEI, { nurMessen });
  console.log(formatiereErgebnis(ergebnis));
  process.exit(ergebnis.exitCode);
}
