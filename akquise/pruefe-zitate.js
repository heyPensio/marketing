// Zitatabgleich R08-A: Prueft jedes in deutschen Anfuehrungszeichen gesetzte
// Zitat der beiden akquise/-Dokumente gegen den Quellenpool.
// Aufruf:  node akquise/pruefe-zitate.js
// Repo-relative Pfade (CLAUDE.md/windows-powershell: keine Scratchpad-Pfade im Repo).
const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');

// --selbsttest prueft NICHT die Projektdokumente, sondern die mitgelieferte
// Selbsttest-Datei - durch DIESELBEN Funktionen (zitate() + norm() + Pool).
// Grund: Ein Selbsttest, der die Zusammensetzung nachbaut, prueft sie nicht.
// Erwartung: 4 Zitate bestaetigt (T1-T4), 4 als fehlend gemeldet (F1-F4).
const SELBSTTEST = process.argv.includes('--selbsttest');
const ZIEL = SELBSTTEST
  ? ['akquise/selbsttest-zitate.md']
  : [
      'akquise/akquiseplan.md',
      'akquise/listenbau-regelwerk.md',
    ];
const POOL = [
  'handel/kanal-rechtsmatrix.md',
  'fund/erhebung/regionalstatistik-groessenklassen.md',
  'fund/positionierungspapier.md',
  'protokolle/R00-planpruefung-2026-08-09.md',
  'projektquelle-mkt.md',
  'STATUS.md',
  'beleg/baseline-messplan.md',
  'CLAUDE.md',
];

const lies = (p) => fs.readFileSync(path.join(REPO, p), 'utf8');

// Normalisierung: Markdown-Auszeichnung und Zitatpraefixe raus, Whitespace
// (inkl. Zeilenumbruechen und NBSP) auf ein Leerzeichen kollabieren.
function norm(s) {
  return s
    .replace(/ /g, ' ')
    .replace(/^[ \t]*>[ \t]?/gm, '')
    .replace(/\*\*/g, '')
    .replace(/[„“”‚‘’"']/g, '')
    .replace(/\s+/g, ' ')
    .replace(/-\s+/g, '-')
    .replace(/\/\s+/g, '/')
    .trim();
}
// Vier bewusste Angleichungen in norm(), damit der Vergleich AUSZEICHNUNG von
// WORTLAUT trennt - jede kann theoretisch einen echten Unterschied verdecken,
// deshalb hier einzeln benannt:
//  (1) Anfuehrungszeichen aller Formen entfallen: Verschachtelte Zitate muessen
//      beim Uebernehmen von "..." auf '...' umgestellt werden - Typografie,
//      kein Wortlaut.
//  (2) Bindestrich + Whitespace -> Bindestrich: Quelle wie Zieldokument brechen
//      Zeilen mitten in Komposita ("Bestell-/\nVertragsformular").
//  (3) Schraegstrich + Whitespace -> Schraegstrich (gleicher Grund).
//  (4) NBSP -> Leerzeichen (erste replace-Zeile).

const poolText = POOL.map((p) => norm(lies(p))).join('\n@@@\n');

// Zitate: alles zwischen deutschen Anfuehrungszeichen, mind. 25 Zeichen
// (kuerzere sind fast immer eigene Begriffe wie "streitig", keine Quellenzitate).
// ACHTUNG (gemessen 11.08.2026): Das Repo schliesst mit U+0022 ("), nicht mit
// U+201C ("). Ein Muster auf U+201C findet NULL Treffer und sieht dabei wie ein
// sauberes Negativ aus - genau die Fehlerklasse "Muster kann nicht treffen".
function zitate(text) {
  const out = [];
  const re = /„([^"„]{25,})"/g;
  let m;
  while ((m = re.exec(text)) !== null) out.push(m[1]);
  return out;
}

// Bekannte EIGENE Formulierungen in Anfuehrungszeichen - keine Quellenzitate.
// Jede einzeln begruendet; die Liste ist bewusst kurz und wird mit ausgegeben,
// damit sie nicht zur stillen Freikarte wird.
const EIGEN = [
  ['welcher Kanal ist ohne Einwilligung benutzbar?', 'eigene Erlaeuterung der D1-Achse'],
  ['welcher Kanal kann bis zum 13.11. noch einen Abschluss tragen?', 'eigene Erlaeuterung der Fristachse'],
  ['trägt ein vorausgegangener eigener Werbebrief die mutmaßliche Einwilligung für den Nachfass-Anruf?', 'eigene Formulierung der offenen Rechtsfrage N-1'],
  ['Impressumsdaten sind für uns erlaubt', 'bewusstes Negativbeispiel (so darf gerade NICHT formuliert werden)'],
  ['alle Hotels aus Verzeichnis X', 'eigenes Beispiel zur Rekonstruktionsgrenze'],
  ['Welle 1: inhabergeführte Hotels in NF/OH, keine Ketten', 'eigenes Beispiel fuer ein Wellenprotokoll'],
  // Die beiden folgenden sind die FALSCHEN Vorfassungen, die im
  // Reparaturvermerk (Regelwerk § 12) absichtlich zitiert werden. Sie duerfen
  // gerade NICHT im Pool stehen - das ist der Beleg, dass sie falsch waren.
  ['langsame, aber loyale Entscheider', 'zitierte Fehlerfassung im Reparaturvermerk (Z-2)'],
  ['unser Angebot passt perfekt', 'zitierte Fehlerfassung im Reparaturvermerk (Z-5)'],
];
const eigenSet = new Set(EIGEN.map(([s]) => norm(s)));

let gesamt = 0;
let eigenTreffer = 0;
const fehlend = [];
for (const datei of ZIEL) {
  const roh = lies(datei);
  for (const z of zitate(roh)) {
    gesamt++;
    const n = norm(z);
    if (poolText.includes(n)) continue;
    if (eigenSet.has(n)) { eigenTreffer++; continue; }
    fehlend.push({ datei, zitat: n });
  }
}

// --- Positivkontrolle je Kanal (ein Anker, der treffen MUSS) -----------------
const MUSS = [
  ['Rechtsmatrix D2 Pflicht 1', 'eigene, dauerhaft erreichbare Seite mit allen 13 Art.-14-Angaben'],
  ['Rechtsmatrix D3 Kasten 1', 'ENTSCHIEDEN (Nachtrag 11.08.2026): 24 Monate nach letztem Vertragsschluss'],
  ['Rechtsmatrix D3 Kasten 2', 'Weg (b) - Risiko bewusst tragen und dokumentieren.'.replace(/-/g, '—')],
  ['Rechtsmatrix C3 Impressum', 'Nicht zulässig ist hingegen das Auslesen der Daten aus einem Online-Impressum'],
  ['Regionalstatistik 4.4', 'Summe beider Kreiszeilen ÷ Landeszeile'],
  ['R00 KPI (e)', 'Qualifizierte Erstgespräche mit Entscheidern pro Woche'],
  ['Positionierungspapier 3.3', 'Entscheidungsstruktur, nicht die Betten-Zahl'],
];
// --- Gegenrichtung: darf NICHT treffen (sonst ist der Vergleich blind) -------
const TREFFEN_NICHT = [
  ['verfaelschte Zahl', 'Summe beider Kreiszeilen ÷ Bundeszeile'],
  ['verfaelschte Frist', 'ENTSCHIEDEN (Nachtrag 11.08.2026): 36 Monate nach letztem Vertragsschluss'],
  ['erfundener Satz', 'Impressumsdaten dürfen für Werbung genutzt werden'],
];

console.log('=== Zitatabgleich akquise/ gegen Quellenpool ===');
console.log('Quellenpool: ' + POOL.length + ' Dateien, ' + poolText.length + ' Zeichen normalisiert');
console.log('Geprueft: ' + gesamt + ' Zitate (>=25 Zeichen, deutsche Anfuehrungszeichen)');
console.log('Davon eigene Formulierungen (Ausnahmeliste, s. u.): ' + eigenTreffer + ' / ' + EIGEN.length + ' deklarierten');
console.log('Quellenzitate bestaetigt: ' + (gesamt - fehlend.length - eigenTreffer) + ' / ' + (gesamt - eigenTreffer));
console.log('\n--- Ausnahmeliste: eigene Formulierungen, KEINE Quellenzitate ---');
for (const [s, grund] of EIGEN) console.log('  * "' + s + '"  -> ' + grund);
if (fehlend.length) {
  console.log('\n--- NICHT im Pool gefunden (einzeln zu bewerten) ---');
  for (const f of fehlend) console.log('[' + f.datei + '] ' + f.zitat);
}

console.log('\n--- Positivkontrolle (MUSS treffen) ---');
let pk = 0;
for (const [name, s] of MUSS) {
  const hit = poolText.includes(norm(s));
  if (hit) pk++;
  console.log((hit ? 'OK   ' : 'FEHL ') + name);
}
console.log('Positivkontrolle: ' + pk + ' / ' + MUSS.length);

console.log('\n--- Gegenprobe (darf NICHT treffen) ---');
let gp = 0;
for (const [name, s] of TREFFEN_NICHT) {
  const hit = poolText.includes(norm(s));
  if (!hit) gp++;
  console.log((hit ? 'FEHL ' : 'OK   ') + name);
}
console.log('Gegenprobe: ' + gp + ' / ' + TREFFEN_NICHT.length);

if (SELBSTTEST) {
  // Rueckbau-Gegenprobe des EXTRAKTIONS-Pfades: Ohne sie meldet ein Muster,
  // das gar nicht treffen kann, ein sauberes "0 Abweichungen".
  const bestaetigt = gesamt - fehlend.length - eigenTreffer;
  const ok = gesamt === 8 && bestaetigt === 4 && fehlend.length === 4;
  console.log('\n=== SELBSTTEST ===');
  console.log('Zitate extrahiert : ' + gesamt + ' (erwartet 8)');
  console.log('davon bestaetigt  : ' + bestaetigt + ' (erwartet 4 - T1..T4)');
  console.log('davon gemeldet    : ' + fehlend.length + ' (erwartet 4 - F1..F4)');
  console.log(ok ? 'SELBSTTEST BESTANDEN' : 'SELBSTTEST FEHLGESCHLAGEN');
  process.exit(ok && pk === MUSS.length && gp === TREFFEN_NICHT.length ? 0 : 1);
}

process.exit(fehlend.length === 0 && pk === MUSS.length && gp === TREFFEN_NICHT.length ? 0 : 1);
