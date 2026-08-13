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
  ['mit § 6 dieses Dokuments erfüllt', 'zitierte Fehlerfassung im Reparaturvermerk (Befund P-01)'],
  ['übrige neun Kreise, zusammen 291', 'zitierte Fehlerfassung im Reparaturvermerk (Befund P-10)'],
  ['Baustart spätestens Mo 17.08.', 'zitierte Fehlerfassung im Reparaturvermerk (Befund P-12)'],
  ['nicht nur die byte-getreue Übernahme der D3-/D2-Blöcke, sondern jedes Zitat', 'zitierte Fehlerfassung im Reparaturvermerk (Befund P-02)'],
  // Eigenzitate: das Dokument zitiert sich selbst bzw. eine eigene Setzung.
  ['bei Widerspruch gewinnt die Rechtsmatrix', 'Selbstzitat der eigenen Kollisionsregel'],
  ['entschieden unzulässig', 'eigene Formulierung einer Falschlesart, die R-A1.3 gerade ausschliesst'],
  // --- Nachtrag 12.08.2026 (Leitsession, Befund B-4) ---
  // Dieselbe Klasse, dreimal belegt: Wer eine Reparatur DOKUMENTIERT, zitiert
  // dabei die alte Fassung -- und erzeugt damit ein neues "Zitat", das per
  // Konstruktion nicht im Pool stehen kann. Der Lauf wurde dadurch rot,
  // obwohl die Dokumente korrekt sind. Wer hier eine Zeile ergaenzt, ergaenzt
  // im selben Zug den Reparaturvermerk im Zieldokument.
  ['je Quelldatei einer — 7/7', 'zitierte Fehlerfassung im Reparaturvermerk (Befund P-04, R08-A)'],
  ['Der erste Versand bleibt gesperrt.', 'zitierte Vorfassung im Reparaturvermerk (Befund Q-04, R9)'],
  ['Für die Kaltkontakt-Liste offen (§ 10, O-2)', 'zitierte Vorfassung im Reparaturvermerk (O-2-Entscheid 12.08.2026)'],
  // Zitat aus einer Primaerquelle AUSSERHALB des Pools: Der LG-Volltext liegt
  // in sensibel/rohbelege-R09-A/ (git-ignoriert) und kann nicht in den Pool.
  // ACHTUNG Strukturgrenze: Fuer solche Zitate leistet dieses Skript KEINE
  // Pruefung -- die Verifikation ist R09-A (am Rohbeleg), nicht dieser Lauf.
  ['bereits vor dem ersten Verarbeitungsschritt in die Wege geleitet sein', 'Zitat LG Duesseldorf 38 O 243/23 Rn. 87 - Primaerquelle ausserhalb des Pools, am Rohbeleg durch R09-A verifiziert'],
  // --- Nachtrag 13.08.2026 abends (Leitsession, R13-Review, PB-2-Disposition) ---
  // Die sieben Zitate der B-1..B-7-Uebernahme (R13-B) stammen aus der
  // DSK-Orientierungshilfe Direktwerbung bzw. O-8 - beide ausserhalb des Pools
  // (DSK-OH liegt in sensibel/; Pool-Erweiterung um interessenabwaegung-o8.md
  // ist laut O-12 ein eigener Zuschnitt, kein Nebenbei-Fix). Verifikation:
  // wortgleich gegen O-8 Paragraph 10 (dort DSK-Zitate mit Belegstufe ① A)
  // durch den R13-B-Pruefer maschinell bestaetigt (9/9); die Zitiert-nach-Kette
  // endet damit bei O-8 Paragraph 10, nicht an der DSK selbst - diese Grenze
  // weist das Prueferprotokoll R13-B aus.
  ['revisionsfeste Dokumentation der tatsächlich genutzten Texte mit Versionsnummer', 'DSK Ziff. 2.1 (B-5), zitiert nach O-8 Paragraph 10 - Primaerquelle ausserhalb des Pools, R13-B-Pruefer 9/9'],
  ['Wer eine E-Mail-Adresse bereitstellt, muss durch technisch-organisatorische Maßnahmen gewährleisten, dass E-Mails, die sich auf Betroffenenrechte beziehen, entweder nicht im Spam-Ordner landen oder dort jedenfalls dennoch umgehend zur Kenntnis genommen werden (Art. 24 DS-GVO)', 'DSK Ziff. 5.3 / TOM-Kopplung Q-06 (B-2), zitiert nach O-8 Paragraph 10'],
  ['Im Sinne des Erleichterungsgebots nach Art. 12 Abs. 2 S. 1 DS-GVO ist für die Einlegung des Werbewiderspruchs auch eine elektronische Kommunikationsmöglichkeit anzubieten', 'DSK Ziff. 5.3 (B-2), zitiert nach O-8 Paragraph 10'],
  ['das konkrete Werbevorhaben', 'O-8 Paragraph 1.3 (B-6-Kontext), zitiert nach O-8 - ausserhalb des Pools'],
  ['möglichst genau zu benennenden kurzen Zeitraum[s]', 'DSK Ziff. 5.4 (B-3), zitiert nach O-8 Paragraph 10'],
  ['ausdrücklich und allein eine Löschung aller Daten aus der Werbesperrdatei', 'DSK Ziff. 5.1 (B-4, enger Sperrdatei-Scope Q-07), zitiert nach O-8 Paragraph 10'],
  ['eventuell wieder Werbung erhalten kann', 'DSK Ziff. 5.1 (B-4), zitiert nach O-8 Paragraph 10'],
];
const eigenSet = new Set(EIGEN.map(([s]) => norm(s)));

let gesamt = 0;
let eigenTreffer = 0;
// Welche Ausnahme-Eintraege wurden tatsaechlich getroffen? Ein Eintrag darf
// MEHRFACH vorkommen (dieselbe Vorfassung kann an zwei Stellen zitiert sein) --
// gezaehlt werden deshalb EINTRAEGE, nicht Fundstellen. Vorher zaehlte das
// Skript Fundstellen gegen die Listenlaenge und meldete "19 / 18", also rot,
// obwohl nichts fehlte (Fehlerklasse L-26/Erfolgsbedingung; Fix 12.08.2026).
const eigenGetroffen = new Set();
const fehlend = [];
for (const datei of ZIEL) {
  const roh = lies(datei);
  for (const z of zitate(roh)) {
    gesamt++;
    const n = norm(z);
    if (poolText.includes(n)) continue;
    if (eigenSet.has(n)) { eigenTreffer++; eigenGetroffen.add(n); continue; }
    fehlend.push({ datei, zitat: n });
  }
}
// Eine deklarierte Ausnahme, die NIRGENDS mehr vorkommt, ist veraltet und
// gehoert entfernt -- das bleibt ein Befund und wird unten ausgewiesen.
const eigenVerwaist = EIGEN.map(([s]) => norm(s)).filter((n) => !eigenGetroffen.has(n));

// --- Positivkontrolle je Kanal (ein Anker, der treffen MUSS) -----------------
const MUSS = [
  ['Rechtsmatrix D2 Pflicht 1', 'eigene, dauerhaft erreichbare Seite mit allen 13 Art.-14-Angaben'],
  ['Rechtsmatrix D3 Kasten 1', 'ENTSCHIEDEN (Nachtrag 11.08.2026): 24 Monate nach letztem Vertragsschluss'],
  ['Rechtsmatrix D3 Kasten 2', 'Weg (b) - Risiko bewusst tragen und dokumentieren.'.replace(/-/g, '—')],
  ['Rechtsmatrix C3 Impressum', 'Nicht zulässig ist hingegen das Auslesen der Daten aus einem Online-Impressum'],
  ['Regionalstatistik 4.4', 'Summe beider Kreiszeilen ÷ Landeszeile'],
  ['R00 KPI (e)', 'Qualifizierte Erstgespräche mit Entscheidern pro Woche'],
  ['Positionierungspapier 3.3', 'Entscheidungsstruktur, nicht die Betten-Zahl'],
  ['Projektquelle 7 Punkt 0a', 'GbR in Gründung, Rebrand-Name offen'],
  // Anker bewusst im STABILEN Kopf der Datei, nicht in einem Runden-Stand:
  // Der alte Anker ("Offenlegung ist ab jetzt") stammte aus dem R7-Block und
  // wurde mit der planmaessigen 2-Runden-Rotation am 12.08.2026 nach
  // STATUS-archiv.md verschoben -- die Positivkontrolle fiel dadurch auf 10/11,
  // ohne dass am Pool etwas kaputt war. Ein Anker in einen ROTIERENDEN
  // Abschnitt altert per Konstruktion (Fehlerklasse: veraltetes Pruefmuster).
  ['STATUS.md', 'Bei Widerspruch STATUS.md'],
  ['baseline-messplan 5', 'Rückwärtsrechnung vom Livegang'],
  ['CLAUDE.md', 'Internorga Hamburg (März)'],
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
console.log('Davon eigene Formulierungen (Ausnahmeliste, s. u.): ' + eigenGetroffen.size + ' / ' + EIGEN.length + ' deklarierten Eintraegen belegt (' + eigenTreffer + ' Fundstellen)');
if (eigenVerwaist.length) {
  console.log('  ! VERWAISTE Ausnahme-Eintraege (kommen nirgends mehr vor, gehoeren geprueft/entfernt):');
  for (const v of eigenVerwaist) console.log('    - ' + v);
}
console.log('Quellenzitate bestaetigt: ' + (gesamt - fehlend.length - eigenTreffer) + ' / ' + (gesamt - eigenTreffer));
console.log('\n--- Ausnahmeliste: eigene Formulierungen, KEINE Quellenzitate ---');
for (const [s, grund] of EIGEN) console.log('  * "' + s + '"  -> ' + grund);
if (fehlend.length) {
  console.log('\n--- NICHT im Pool gefunden (einzeln zu bewerten) ---');
  for (const f of fehlend) console.log('[' + f.datei + '] ' + f.zitat);
}

// --- BLOCKZITATE ---------------------------------------------------------
// Die wichtigsten Uebernahmen (D3-Kaesten, D2-Pflichtenliste) stehen als
// >-Blockzitate OHNE Anfuehrungszeichen und werden von zitate() daher NICHT
// erfasst. Ohne diesen Abschnitt gaebe das Skript Entwarnung ueber Text, den
// es nie mit dem Zieldokument verglichen hat (Befund P-02 des Pruefers).
// Geprueft wird: Text ZWISCHEN zwei Markern im ZIELDOKUMENT, normalisiert,
// muss als zusammenhaengender String im Quellenpool vorkommen.
const BLOECKE = [
  ['D3-Kasten 1 (24 Monate)', 'akquise/listenbau-regelwerk.md',
    'ENTSCHIEDEN (Nachtrag 11.08.2026): 24 Monate', 'Bestell-/Vertragsformular (A5).'],
  ['D3-Kasten 2 (Weg b)', 'akquise/listenbau-regelwerk.md',
    'ENTSCHIEDEN (Nachtrag 11.08.2026): Weg (b)', 'nicht die Kanalwahl.'],
  ['D2-Pflichtenliste 1-6', 'akquise/listenbau-regelwerk.md',
    '1. Datenschutzinformation für Geschäftskontakte', 'ob deren Nutzungsbedingungen Werbung erlauben.'],
];
function blockAusZiel(datei, von, bis) {
  const t = norm(lies(datei));
  const a = t.indexOf(norm(von));
  if (a < 0) return null;
  const b = t.indexOf(norm(bis), a);
  if (b < 0) return null;
  return t.slice(a, b + norm(bis).length);
}
console.log('\n--- Blockzitate: Zieldokument gegen Quelle ---');
let bl = 0;
let blGegen = 0;
for (const [name, datei, von, bis] of BLOECKE) {
  const block = blockAusZiel(datei, von, bis);
  if (block === null) { console.log('FEHL ' + name + ' (Marker im Zieldokument nicht gefunden)'); continue; }
  const hit = poolText.includes(block);
  if (hit) bl++;
  console.log((hit ? 'OK   ' : 'FEHL ') + name + ' (' + block.length + ' Zeichen verglichen)');
  // Rueckbau-Gegenprobe je Block: eine Ziffer/ein Wort verfaelscht -> darf NICHT treffen.
  let kaputt = block.replace(/24 Monate/, '36 Monate').replace(/nicht zulässig/, 'zulässig')
    .replace(/13 Art\.-14-Angaben/, '14 Art.-14-Angaben').replace(/vor jedem Versand/, 'vor jeder Welle')
    .replace(/Risiko bewusst tragen/, 'Risiko ausgeschlossen')
    .replace(/bleibt unverändert gegenläufig/, 'ist damit überholt');
  if (kaputt === block) {
    // Fallback, damit NIE eine Gegenprobe ausfaellt: ein Wort aus der Mitte
    // entfernen. Schwaecher als eine semantische Verfaelschung, aber besser
    // als ein ungeprueftes "bestanden".
    const w = block.split(' ');
    if (w.length > 20) { w.splice(Math.floor(w.length / 2), 1); kaputt = w.join(' '); }
    console.log('     (Fallback-Verfaelschung: Wort aus der Blockmitte entfernt)');
  }
  if (kaputt === block) {
    console.log('     ! keine Verfaelschung anwendbar - Gegenprobe fuer diesen Block NICHT gelaufen');
  } else if (!poolText.includes(kaputt)) {
    blGegen++;
    console.log('     Gegenprobe OK (verfaelschte Fassung wird nicht bestaetigt)');
  } else {
    console.log('     Gegenprobe FEHL (verfaelschte Fassung wuerde durchgehen!)');
  }
}
console.log('Blockzitate: ' + bl + ' / ' + BLOECKE.length + ' bestaetigt, Gegenproben bestanden: ' + blGegen + ' / ' + BLOECKE.length);

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
