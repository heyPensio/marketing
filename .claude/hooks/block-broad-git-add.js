#!/usr/bin/env node
/**
 * PreToolUse-Hook: blockiert flaechendeckende git-add/commit-Kommandos.
 *
 * WARUM: Im Multi-Session-Betrieb (CLAUDE.md, Abschnitt "Parallele Sessions",
 * Regel 3) committet jede Session NUR ihre eigenen Pfade. `git add -A`,
 * `git add .` und `git commit -a` nehmen die Arbeit paralleler Sessions mit —
 * im harmlosen Fall verfaelscht das nur die Commit-Zuordnung, im teuren Fall
 * veroeffentlicht es fremde, unfertige Arbeit vor deren Freigabe.
 *
 * Die Regel stand bis 29.07.2026 nur in CLAUDE.md und wurde trotzdem gebrochen
 * (R19-C, Commit 5946c34 trug zwei fremde Dateien). Ein Entscheid mit
 * Schutzwirkung ist erst wirksam, wenn er einen technischen Traeger hat —
 * das ist dieser Hook.
 *
 * Bewusster Verstoss ist weiterhin moeglich: `git commit --no-verify` hilft
 * NICHT (dieser Hook laeuft vor dem Tool, nicht in git). Wer wirklich breit
 * stagen muss, nennt die Pfade explizit oder setzt sie mit `git add -u <pfad>`.
 */

let eingabe = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (d) => { eingabe += d; });
process.stdin.on('end', () => {
  let kommando = '';
  try {
    kommando = (JSON.parse(eingabe).tool_input || {}).command || '';
  } catch {
    process.exit(0); // Kein lesbarer Input -> nicht blockieren
  }

  const befund = pruefe(kommando);
  if (!befund) process.exit(0);

  process.stdout.write(JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: 'deny',
      permissionDecisionReason:
        `Blockiert: "${befund.treffer}" stagt flaechendeckend.\n\n` +
        'Im Multi-Session-Betrieb committet jede Session NUR ihre eigenen ' +
        'Pfade (CLAUDE.md, Parallele Sessions, Regel 3). Ein breites add/commit ' +
        'nimmt die Arbeit paralleler Sessions mit und kann fremde, unfertige ' +
        'Aenderungen veroeffentlichen.\n\n' +
        'Richtig: git add <deine Pfade> — die Pfade stehen in deinem ' +
        'Start-Prompt. Vor dem Commit `git status --short` gegenlesen.'
    }
  }));
  process.exit(0);
});

/** Zerlegt die Kommandozeile und sucht flaechendeckende git-Aufrufe. */
function pruefe(zeile) {
  // Verkettungen aufteilen: ; && || | und Zeilenumbrueche
  const segmente = zeile.split(/;|&&|\|\||\||\r?\n/);

  for (const segment of segmente) {
    const t = segment.trim().split(/\s+/).filter(Boolean);
    if (!t.length) continue;

    // fuehrende Env-Zuweisungen und sudo ueberspringen
    let i = 0;
    while (i < t.length && (/^[A-Za-z_][A-Za-z0-9_]*=/.test(t[i]) || t[i] === 'sudo')) i++;
    if (t[i] !== 'git' && !/[\\/]git(\.exe)?$/i.test(t[i] || '')) continue;

    // globale git-Optionen (-C <pfad>, -c k=v) ueberspringen
    let j = i + 1;
    while (j < t.length && t[j].startsWith('-')) {
      if (t[j] === '-C' || t[j] === '-c') j += 2; else j += 1;
    }
    const unterbefehl = t[j];
    const args = t.slice(j + 1);

    if (unterbefehl === 'add') {
      // Ein --dry-run ist harmlos: es schreibt den Index nicht.
      if (args.includes('-n') || args.includes('--dry-run')) continue;
      // Intent-to-add (-N/--intent-to-add) registriert nur Pfade, staged
      // KEINE Inhalte und wird von einem spaeteren `git commit` nicht
      // mitgenommen — per CLAUDE.md ausdruecklich erlaubt, und /drift-check
      // schreibt `git add -N .` vor (Konflikt R20-A, aufgeloest 02.08.2026).
      if (args.includes('-N') || args.includes('--intent-to-add')) continue;
      for (const a of args) {
        if (a === '.' || a === '*' || a === ':/' || a === '--all' || a === '--no-ignore-removal') {
          return { treffer: `git add ${a}` };
        }
        // Kurzflag-Buendel mit A (-A, -Av) — aber NICHT -N/-u/-p
        if (/^-[A-Za-z]*A[A-Za-z]*$/.test(a)) return { treffer: `git add ${a}` };
      }
    }

    if (unterbefehl === 'commit') {
      for (const a of args) {
        if (a === '--all') return { treffer: 'git commit --all' };
        // -a, -am, -av ... ; --amend faellt nicht darunter (beginnt mit --)
        if (/^-[A-Za-z]*a[A-Za-z]*$/.test(a)) return { treffer: `git commit ${a}` };
      }
    }
  }
  return null;
}
