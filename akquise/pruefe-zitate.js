// Zitatabgleich R08-A/R15-C/R16-B/R17-B: Prueft jedes in deutschen
// Anfuehrungszeichen gesetzte Zitat der operativen Zieldokumente gegen den
// Quellenpool und trennt festgeschriebenen Aufnahmebestand von NEUEN
// Verstoessen.
//
// Aufrufe:
//   node akquise/pruefe-zitate.js
//       Hauptlauf: nur neue Verstoesse machen den Lauf rot.
//   node akquise/pruefe-zitate.js --altlast
//       Listet die unveraenderliche Baseline vollstaendig mit Status.
//   node akquise/pruefe-zitate.js --selbsttest
//       Prueft Neu/Baseline/Pool sowie den Selbstausschluss in beide Richtungen
//       durch dieselben Funktionen wie der Hauptlauf.
//   node akquise/pruefe-zitate.js --zielkandidaten
//       Listet Markdown-Dateien mit passenden Zitaten ausserhalb von ZIEL.
//   node akquise/pruefe-zitate.js --rohbelege <pfad>
//       Uebersteuert den lokalen, git-ignorierten Rohbeleg-Pool. Ein leerer
//       Ordner simuliert den Zustand eines frischen Klons ohne Rohbelege.
//   node akquise/pruefe-zitate.js --baseline-entwurf=<datei>
//       Erzeugt einen Baseline-ENTWURF, hebt die aktive Baseline aber nie an.
//       Fuer einen eingefrorenen Datenstand zusaetzlich:
//       --pruefwurzel=<snapshot-pfad> --pruefstand=<commit-hash>
//
// Die Baseline liegt als lesbare Markdown-Datei unter
// akquise/zitat-baseline-2026-08-17.md. Ihr Nutzdaten-Hash und ihre Nenner
// werden hier fail-closed geprueft. Ein gruener Lauf darf niemals durch
// Regeneration oder Anheben dieser Datei hergestellt werden.
//
// Dateien, die zugleich ZIEL und POOL sind, werden beim eigenen Vergleich aus
// dem Pool entfernt. Der Selbsttest belegt diese Richtung und die Gegenrichtung
// (derselbe Text zusaetzlich in einer anderen Pool-Datei).
//
// Repo-relative Pfade (CLAUDE.md/windows-powershell: keine Scratchpad-Pfade im
// versionierten Skript). --pruefwurzel ist nur ein expliziter Testeingang.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SCRIPT_REPO = path.resolve(__dirname, '..');
const argumentWert = (name) => {
  const prefix = name + '=';
  const arg = process.argv.find((wert) => wert.startsWith(prefix));
  if (arg) return arg.slice(prefix.length);
  const index = process.argv.indexOf(name);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : null;
};
const PRUEF_ROOT = path.resolve(argumentWert('--pruefwurzel') || SCRIPT_REPO);
const PRUEFSTAND = argumentWert('--pruefstand')
  || '0c4692f873f179917b28f4c210ae2e7be76cd653';
const ROHBELEG_ARGUMENT = argumentWert('--rohbelege');
const SELBSTTEST = process.argv.includes('--selbsttest');
const ALTLAST = process.argv.includes('--altlast');
const ZIELKANDIDATEN = process.argv.includes('--zielkandidaten');
const BASELINE_ENTWURF = argumentWert('--baseline-entwurf');

const BASELINE_DATEI = 'akquise/zitat-baseline-2026-08-17.md';
const BASELINE_START = '<!-- ZITAT-BASELINE-JSON-START -->';
const BASELINE_ENDE = '<!-- ZITAT-BASELINE-JSON-ENDE -->';
const BASELINE_SHA256 = '5bc7e84c4cfa20a67efa529cfdc3ece2efc6753162b1ec156e888d9a5ab93bdb';
const R17_PRUEFSTAND = '926ca3c74a2a1e9225cc3602f5d50e779a2426a0';

const ZIEL_R16 = [
  'akquise/akquiseplan.md',
  'akquise/listenbau-regelwerk.md',
  'akquise/interessenabwaegung-o8.md',
  'fund/wettbewerbsbild.md',
  'handel/kanal-rechtsmatrix.md',
  'handel/angebotsarchitektur.md',
  'akquise/sperrdatei-struktur.md',
  'akquise/wellenprotokoll-vorlage.md',
];
const ZIEL_R17_NEU = [
  'beleg/baseline-messplan.md',
  'beleg/vorlagen/interviewleitfaden-baseline.md',
  'beleg/vorlagen/referenzvereinbarung-pilotobjekte.md',
  'beleg/vorlagen/tagesblatt-firzlaffs.md',
  'beleg/vorlagen/tagesblatt-hostel-boninstrasse.md',
  'fund/erhebung/brandnamic-partner-vollerhebung.md',
  'fund/erhebung/entwurf-anfrage-dehoga-sh.md',
  'fund/erhebung/entwurf-anfrage-ihk-sh.md',
  'fund/erhebung/regionalstatistik-groessenklassen.md',
  'fund/erhebung/strang2-strukturdaten.md',
  'fund/erhebung/verbund-vollerhebung.md',
  'fund/persona-validierungsplan.md',
  'fund/positionierungspapier.md',
  'handel/anwalts-briefing-2026-08.md',
  'handel/entwurf-anfrage-ifb-hamburg.md',
  'handel/entwurf-anfrage-wtsh.md',
  'handel/foerderarchitektur-beraterrolle.md',
  'handel/preisliste-vorlaeufig.md',
  'handel/preismodell-optionen.md',
];
const ZIEL = [...ZIEL_R16, ...ZIEL_R17_NEU];
const POOL = [
  'handel/kanal-rechtsmatrix.md',
  'fund/erhebung/regionalstatistik-groessenklassen.md',
  'fund/positionierungspapier.md',
  'protokolle/R00-planpruefung-2026-08-09.md',
  'projektquelle-mkt.md',
  'STATUS.md',
  'beleg/baseline-messplan.md',
  'CLAUDE.md',
  'akquise/interessenabwaegung-o8.md',
  'fund/wettbewerbsbild.md',
  'handel/preismodell-optionen.md',
];

// Der R15-Nenner (863) und der bei der ZIEL-Erweiterung bereits vorhandene
// Aufnahmebestand (43) sind getrennte Gruppen. Nur fuer die 863 liegt die
// Leitsessions-Bewertung R15 "0 Widerlegungen, alle nicht im Pool" vor.
const BASELINE_SOLL = {
  'r15-altlast': {
    bezeichnung: 'R15-Altlast',
    dateien: {
      'akquise/interessenabwaegung-o8.md': 113,
      'fund/wettbewerbsbild.md': 467,
      'handel/kanal-rechtsmatrix.md': 144,
      'handel/angebotsarchitektur.md': 139,
    },
  },
  'r16-zielaufnahme': {
    bezeichnung: 'R16-Aufnahmebestand der zwei neuen Zieldateien',
    dateien: {
      'akquise/sperrdatei-struktur.md': 19,
      'akquise/wellenprotokoll-vorlage.md': 24,
    },
  },
  'r17-zielaufnahme': {
    bezeichnung: 'R17-Aufnahmebestand der 19 neuen Zieldateien',
    pruefstand: R17_PRUEFSTAND,
    dateien: {
      'beleg/baseline-messplan.md': 9,
      'beleg/vorlagen/interviewleitfaden-baseline.md': 38,
      'beleg/vorlagen/referenzvereinbarung-pilotobjekte.md': 12,
      'beleg/vorlagen/tagesblatt-firzlaffs.md': 3,
      'beleg/vorlagen/tagesblatt-hostel-boninstrasse.md': 0,
      'fund/erhebung/brandnamic-partner-vollerhebung.md': 38,
      'fund/erhebung/entwurf-anfrage-dehoga-sh.md': 2,
      'fund/erhebung/entwurf-anfrage-ihk-sh.md': 1,
      'fund/erhebung/regionalstatistik-groessenklassen.md': 18,
      'fund/erhebung/strang2-strukturdaten.md': 17,
      'fund/erhebung/verbund-vollerhebung.md': 12,
      'fund/persona-validierungsplan.md': 7,
      'fund/positionierungspapier.md': 24,
      'handel/anwalts-briefing-2026-08.md': 36,
      'handel/entwurf-anfrage-ifb-hamburg.md': 4,
      'handel/entwurf-anfrage-wtsh.md': 8,
      'handel/foerderarchitektur-beraterrolle.md': 54,
      'handel/preisliste-vorlaeufig.md': 51,
      'handel/preismodell-optionen.md': 113,
    },
  },
};

const liesAus = (wurzel, datei) => fs.readFileSync(path.join(wurzel, datei), 'utf8');
const liesPruefdatei = (datei) => liesAus(PRUEF_ROOT, datei);
const liesSkriptdatei = (datei) => liesAus(SCRIPT_REPO, datei);

function textdateienRekursiv(wurzel) {
  const dateien = [];
  const laufen = (ordner) => {
    for (const eintrag of fs.readdirSync(ordner, { withFileTypes: true })) {
      const absolut = path.join(ordner, eintrag.name);
      if (eintrag.isDirectory()) laufen(absolut);
      else if (eintrag.isFile() && ['.txt', '.md'].includes(path.extname(eintrag.name).toLowerCase())) {
        dateien.push(absolut);
      }
    }
  };
  laufen(wurzel);
  return dateien.sort();
}

function rohbelegPoolLesen() {
  let wurzeln = [];
  let quelle;
  if (ROHBELEG_ARGUMENT) {
    const override = path.resolve(ROHBELEG_ARGUMENT);
    quelle = 'Argument --rohbelege';
    if (fs.existsSync(override) && fs.statSync(override).isDirectory()) wurzeln = [override];
  } else {
    const sensibel = path.join(SCRIPT_REPO, 'sensibel');
    quelle = 'SCRIPT_REPO/sensibel/rohbelege-*';
    if (fs.existsSync(sensibel) && fs.statSync(sensibel).isDirectory()) {
      wurzeln = fs.readdirSync(sensibel, { withFileTypes: true })
        .filter((eintrag) => eintrag.isDirectory() && eintrag.name.startsWith('rohbelege-'))
        .map((eintrag) => path.join(sensibel, eintrag.name))
        .sort();
    }
  }
  const dateien = wurzeln.flatMap((wurzel) => textdateienRekursiv(wurzel));
  if (!dateien.length) {
    return {
      verfuegbar: false,
      quelle,
      wurzeln: wurzeln.length,
      dateien: 0,
      bytes: 0,
      texte: [],
      text: '',
    };
  }
  let bytes = 0;
  const texte = dateien.map((datei) => {
    bytes += fs.statSync(datei).size;
    return normRohbeleg(fs.readFileSync(datei, 'utf8'));
  });
  return {
    verfuegbar: true,
    quelle,
    wurzeln: wurzeln.length,
    dateien: dateien.length,
    bytes,
    texte,
    text: texte.join('\n@@@ ROHBELEG @@@\n'),
  };
}

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

// Rohbelege enthalten keine Markdown-Blockquote-/Kursiv-Auszeichnung des
// Zieldokuments. Diese zusaetzliche, auf die dritte Bestaetigungsstufe
// begrenzte Normalisierung entfernt deshalb wiederholte ">"-Praefixe und
// einzelne Sternchen symmetrisch auf Ziel- und Rohbelegseite. Baseline und
// versionierter Pool behalten ihre bisherige Normalisierung unveraendert.
function normRohbeleg(s) {
  return norm(s)
    .replace(/(^|\s)(?:>\s*)+/g, '$1')
    .replace(/\*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function rohbelegEnthaelt(rohbelege, zitat) {
  if (!rohbelege.verfuegbar) return false;
  const gesucht = normRohbeleg(zitat);
  if (rohbelege.texte.some((text) => text.includes(gesucht))) return true;

  // Sichtbar markierte Auslassungen duerfen beliebigen Quelltext ersetzen;
  // jedes verbliebene Segment muss aber byte-treu normalisiert und in der
  // richtigen Reihenfolge in EINER Rohbeleg-Datei vorkommen. Ohne sichtbare
  // Auslassung bleibt der Abgleich strikt exakt.
  if (!/(?:…|\[…\])/.test(gesucht)) return false;
  const segmente = gesucht.split(/\s*(?:…|\[…\])\s*/)
    .map((segment) => segment.trim())
    .filter(Boolean);
  if (segmente.join('').length < 25) return false;
  if (segmente.length === 1) {
    const auslassungAmRand = /^(?:…|\[…\])/.test(gesucht)
      || /(?:…|\[…\])$/.test(gesucht);
    return auslassungAmRand && rohbelege.texte.some((text) => text.includes(segmente[0]));
  }
  return rohbelege.texte.some((text) => {
    let position = 0;
    for (const segment of segmente) {
      const fund = text.indexOf(segment, position);
      if (fund < 0) return false;
      position = fund + segment.length;
    }
    return true;
  });
}

// Vier bewusste Angleichungen in norm(), damit der Vergleich AUSZEICHNUNG von
// WORTLAUT trennt - jede kann theoretisch einen echten Unterschied verdecken:
//  (1) Anfuehrungszeichen aller Formen entfallen (Typografie, kein Wortlaut).
//  (2) Bindestrich + Whitespace -> Bindestrich (Umbruch in Komposita).
//  (3) Schraegstrich + Whitespace -> Schraegstrich (gleicher Grund).
//  (4) NBSP -> Leerzeichen.

// Zitate: alles zwischen deutschen Anfuehrungszeichen, mind. 25 Zeichen.
// ACHTUNG: Das Repo schliesst mit U+0022 ("), nicht mit U+201C.
function zitate(text) {
  // Git-/Windows-Checkouts koennen denselben Blob als LF oder CRLF liefern.
  text = text.replace(/\r\n?/g, '\n');
  const out = [];
  const re = /„([^"„]{25,})"/g;
  let treffer;
  let letztePosition = 0;
  let zeile = 1;
  while ((treffer = re.exec(text)) !== null) {
    const dazwischen = text.slice(letztePosition, treffer.index);
    zeile += (dazwischen.match(/\n/g) || []).length;
    out.push({ text: treffer[1], zeile });
    letztePosition = treffer.index;
  }
  return out;
}

// Bekannte EIGENE Formulierungen in Anfuehrungszeichen - keine Quellenzitate.
// Die Baseline ist hiervon strikt getrennt; die 863 Altlasten werden NICHT zu
// Ausnahmen umetikettiert.
const EIGEN_R16 = [
  ['welcher Kanal ist ohne Einwilligung benutzbar?', 'eigene Erlaeuterung der D1-Achse'],
  ['welcher Kanal kann bis zum 13.11. noch einen Abschluss tragen?', 'eigene Erlaeuterung der Fristachse'],
  ['trägt ein vorausgegangener eigener Werbebrief die mutmaßliche Einwilligung für den Nachfass-Anruf?', 'eigene Formulierung der offenen Rechtsfrage N-1'],
  ['Impressumsdaten sind für uns erlaubt', 'bewusstes Negativbeispiel (so darf gerade NICHT formuliert werden)'],
  ['alle Hotels aus Verzeichnis X', 'eigenes Beispiel zur Rekonstruktionsgrenze'],
  ['Welle 1: inhabergeführte Hotels in NF/OH, keine Ketten', 'eigenes Beispiel fuer ein Wellenprotokoll'],
  ['langsame, aber loyale Entscheider', 'zitierte Fehlerfassung im Reparaturvermerk (Z-2)'],
  ['unser Angebot passt perfekt', 'zitierte Fehlerfassung im Reparaturvermerk (Z-5)'],
  ['mit § 6 dieses Dokuments erfüllt', 'zitierte Fehlerfassung im Reparaturvermerk (Befund P-01)'],
  ['übrige neun Kreise, zusammen 291', 'zitierte Fehlerfassung im Reparaturvermerk (Befund P-10)'],
  ['Baustart spätestens Mo 17.08.', 'zitierte Fehlerfassung im Reparaturvermerk (Befund P-12)'],
  ['nicht nur die byte-getreue Übernahme der D3-/D2-Blöcke, sondern jedes Zitat', 'zitierte Fehlerfassung im Reparaturvermerk (Befund P-02)'],
  ['bei Widerspruch gewinnt die Rechtsmatrix', 'Selbstzitat der eigenen Kollisionsregel'],
  ['je Quelldatei einer — 7/7', 'zitierte Fehlerfassung im Reparaturvermerk (Befund P-04, R08-A)'],
  ['Der erste Versand bleibt gesperrt.', 'zitierte Vorfassung im Reparaturvermerk (Befund Q-04, R9)'],
  ['Für die Kaltkontakt-Liste offen (§ 10, O-2)', 'zitierte Vorfassung im Reparaturvermerk (O-2-Entscheid 12.08.2026)'],
];
const EIGEN_R17 = [
  ['LG Düsseldorf, Urt. v. 06.02.2026 – 38 O 243/23 … hat eine > Briefpost-Werbesendung untersagt — gestützt ausschließlich auf > Art. 6 Abs. 1 lit. f und die Art. 12–14, 21 DSGVO.', 'Selbstzitat der eigenen A7-Vorfassung im sichtbaren Reparatur-Kasten'],
  ['Rechtskraft nicht geprüft', 'zitierte eigene Vorfassung; die Fundstelle bleibt wegen vorhandenen R15-Baseline-Treffers Baseline'],
  ['Datenherkunft je Adresse dokumentieren — Art. 14 Abs. 2 lit. f verlangt die Quellenangabe im Brief', 'Selbstzitat des eigenen Satzes aus derselben Datei'],
  ['Was das für unsere Zielkundenliste heißt', 'Selbstzitat der eigenen Zwischenüberschrift aus derselben Datei'],
  ['Belegkraft des Belegs selbst', 'Selbstzitat der eigenen Zwischenüberschrift aus derselben Datei'],
  ['das OLG Stuttgart liegt falsch', 'eigene, bewusst gesperrte Lesart'],
  ['bei B2B greift keine der beiden Schienen', 'eigene, bewusst gesperrte Lesart'],
  ['bei B2B greift § 3a erst recht', 'eigene, bewusst gesperrte Lesart'],
  ['trägt § 3a UWG auch ohne Verbraucherbezug?', 'eigene Formulierung der offenen Rechtsfrage'],
  ['… kann über § 3a UWG ODER über § 3 Abs. 2 UWG abgemahnt werden', 'eigene Überschrift-Neufassung'],
  ['hätte sie angegeben …, hätte das den Eindruck zerstört', 'eigene Paraphrase des Urteilswortlauts'],
  ['Rn. 115: Herkunftsangabe wird zum Irreführungsargument', 'eigene Kurzparaphrase aus dem R16-Nachtrag'],
];
const EIGEN = [...EIGEN_R16, ...EIGEN_R17];
const eigenSet = new Set(EIGEN.map(([text]) => norm(text)));

// Acht Fundstellen des eingefrorenen R17-Pruefstands, die der vorhandene
// lokale Rohbeleg-Pool weder exakt noch ueber sichtbar markierte Auslassungen
// bestaetigt. Sie werden nicht als bestaetigt, EIGEN oder Baseline ausgegeben,
// sondern als eigener, sichtbarer R17-Aufnahmebefund. Die Liste ist kein
// allgemeiner Alarm-Unterdruecker: jedes andere unbestaetigte Zitat bleibt NEU.
const ROHBELEG_OFFEN_R17 = [
  ['der Tenor untersagt unter Nr. 4 die unterlassene Art.-14-Information', 'verkürzte Bestandszusammenfassung; kein byte-treuer Rohbeleg-Treffer'],
  ['bei einem Dritten erhoben', 'verkürzte Bestandsformulierung; kein byte-treuer Rohbeleg-Treffer'],
  ['der HTML-Abzug derselben Beschaffung liefert dieselben Werte', 'Bestandsaussage über den Beschaffungsweg; kein Rohbeleg-Treffer'],
  ['zu genau diesem Werbeschreiben', 'verkürzte Bestandsformulierung; kein byte-treuer Rohbeleg-Treffer'],
  ['vorläufigen Beratungsergebnis', 'Flexionsabweichung zum Rohbeleg „vorläufiges Beratungsergebnis“'],
  ['*Es ist ein erstinstanzliches Urteil, dessen Berufungsgericht > in derselben Sache erkennbar zu einer anderen Beurteilung > neigt*', 'eigene Bestandszusammenfassung; kein byte-treuer Rohbeleg-Treffer'],
  ['*und dasselbe LG weicht von der ständigen Rechtsprechung > desselben OLG auch an anderer Stelle ausdrücklich ab > (Rn. 43, TKG/UWG)*', 'eigene Bestandszusammenfassung; kein byte-treuer Rohbeleg-Treffer'],
  ['je Schiene getrennt … und die Antworten zeigen in entgegengesetzte Richtungen', 'eigene Bestandszusammenfassung; kein byte-treuer Rohbeleg-Treffer'],
];
const rohbelegOffenSet = new Set(ROHBELEG_OFFEN_R17.map(([text]) => norm(text)));

function bauePoolTexte(poolDateien, lesen) {
  return new Map(poolDateien.map((datei) => [datei, norm(lesen(datei))]));
}

function poolTextFuer(ziel, poolTexte) {
  return [...poolTexte.entries()]
    .filter(([datei]) => datei !== ziel)
    .map(([, text]) => text)
    .join('\n@@@\n');
}

function payloadSha256(payload) {
  const lfPayload = payload.replace(/\r\n?/g, '\n');
  return crypto.createHash('sha256').update(lfPayload, 'utf8').digest('hex');
}

function baselinePayloadLesen() {
  const roh = liesSkriptdatei(BASELINE_DATEI);
  const start = roh.indexOf(BASELINE_START);
  const ende = roh.indexOf(BASELINE_ENDE);
  if (start < 0 || ende < 0 || ende <= start) {
    throw new Error('Baseline-Marker fehlen oder stehen in falscher Reihenfolge.');
  }
  const block = roh.slice(start + BASELINE_START.length, ende).trim();
  const match = block.match(/^```json\r?\n([\s\S]*?)\r?\n```$/);
  if (!match) throw new Error('Baseline-Nutzdaten sind kein einzelner JSON-Codeblock.');
  return { payload: match[1], daten: JSON.parse(match[1]) };
}

function baselineValidieren(payload, daten) {
  const fehler = [];
  const hash = payloadSha256(payload);
  if (hash !== BASELINE_SHA256) {
    fehler.push('Nutzdaten-SHA-256 abweichend: ' + hash + ' statt ' + BASELINE_SHA256);
  }
  if (daten.schema !== 2) fehler.push('Baseline-Schema ist nicht 2.');
  if (daten.pruefstand !== '0c4692f873f179917b28f4c210ae2e7be76cd653') {
    fehler.push('Baseline-Pruefstand ist nicht der eingefrorene R16-B-Hash.');
  }
  if (!daten.gruppen || typeof daten.gruppen !== 'object') {
    fehler.push('Baseline-Gruppen fehlen.');
    return fehler;
  }
  const istGruppen = Object.keys(daten.gruppen).sort();
  const sollGruppen = Object.keys(BASELINE_SOLL).sort();
  if (JSON.stringify(istGruppen) !== JSON.stringify(sollGruppen)) {
    fehler.push('Baseline-Gruppen weichen vom fest verdrahteten Soll ab.');
  }
  for (const [gruppenId, soll] of Object.entries(BASELINE_SOLL)) {
    const gruppe = daten.gruppen[gruppenId];
    if (!gruppe || !gruppe.dateien) {
      fehler.push('Baseline-Gruppe fehlt: ' + gruppenId);
      continue;
    }
    if (soll.pruefstand && gruppe.pruefstand !== soll.pruefstand) {
      fehler.push(gruppenId + ': Pruefstand ist nicht ' + soll.pruefstand + '.');
    }
    const istDateien = Object.keys(gruppe.dateien).sort();
    const sollDateien = Object.keys(soll.dateien).sort();
    if (JSON.stringify(istDateien) !== JSON.stringify(sollDateien)) {
      fehler.push('Dateimenge weicht ab in Gruppe ' + gruppenId + '.');
    }
    let gruppenSumme = 0;
    for (const [datei, sollAnzahl] of Object.entries(soll.dateien)) {
      const eintraege = gruppe.dateien[datei];
      if (!Array.isArray(eintraege)) {
        fehler.push('Keine Eintragsliste fuer ' + datei + '.');
        continue;
      }
      gruppenSumme += eintraege.length;
      if (eintraege.length !== sollAnzahl) {
        fehler.push(datei + ': ' + eintraege.length + ' statt ' + sollAnzahl + ' Baseline-Eintraege.');
      }
      for (const eintrag of eintraege) {
        if (typeof eintrag !== 'string' || !eintrag.length || norm(eintrag) !== eintrag) {
          fehler.push(datei + ': leerer oder nicht normalisierter Baseline-Eintrag.');
          break;
        }
      }
    }
    const sollSumme = Object.values(soll.dateien).reduce((summe, n) => summe + n, 0);
    if (gruppenSumme !== sollSumme || gruppe.nenner !== sollSumme) {
      fehler.push(gruppenId + ': Summenprobe ' + gruppenSumme + '/' + gruppe.nenner
        + ' statt ' + sollSumme + '.');
    }
  }
  return fehler;
}

function baueBaselineMatcher(daten) {
  const verfuegbar = new Map();
  const verbraucht = new Map();
  const gruppeJeSchluessel = new Map();
  for (const [gruppenId, gruppe] of Object.entries(daten.gruppen)) {
    for (const [datei, eintraege] of Object.entries(gruppe.dateien)) {
      for (const eintrag of eintraege) {
        const schluessel = datei + '\u0000' + eintrag;
        verfuegbar.set(schluessel, (verfuegbar.get(schluessel) || 0) + 1);
        gruppeJeSchluessel.set(schluessel, gruppenId);
      }
    }
  }
  return {
    verbraucht,
    consume(datei, zitat) {
      const schluessel = datei + '\u0000' + zitat;
      const genutzt = verbraucht.get(schluessel) || 0;
      const maximal = verfuegbar.get(schluessel) || 0;
      if (genutzt >= maximal) return null;
      verbraucht.set(schluessel, genutzt + 1);
      return gruppeJeSchluessel.get(schluessel);
    },
  };
}

function pruefeZieldateien({
  zielDateien,
  lesen,
  poolTexte,
  rohbelege,
  baselineDaten,
  ausnahmen,
  rohbelegOffen = new Set(),
}) {
  const matcher = baueBaselineMatcher(baselineDaten);
  const rohMatcher = baueBaselineMatcher(baselineDaten);
  const funde = [];
  const dateiStatistik = [];
  const ausnahmenVorkommen = new Set();
  const rohbelegOffenVorkommen = new Set();
  for (const datei of zielDateien) {
    const roh = lesen(datei);
    const vergleichsPool = poolTextFuer(datei, poolTexte);
    const statistik = {
      datei,
      gesamt: 0,
      bestaetigt: 0,
      rohbeleg: 0,
      eigen: 0,
      baseline: 0,
      nichtPruefbar: 0,
      rohbelegOffen: 0,
      neu: 0,
      baselineGruppen: {},
      rohbelegBaselineGruppen: {},
    };
    for (const fund of zitate(roh)) {
      const n = norm(fund.text);
      statistik.gesamt++;
      if (ausnahmen.has(n)) ausnahmenVorkommen.add(n);
      if (rohbelegOffen.has(n)) rohbelegOffenVorkommen.add(n);
      if (vergleichsPool.includes(n)) {
        statistik.bestaetigt++;
        funde.push({ datei, zeile: fund.zeile, zitat: n, status: 'bestaetigt' });
        continue;
      }
      if (rohbelegEnthaelt(rohbelege, fund.text)) {
        statistik.rohbeleg++;
        const rohbelegBaselineGruppe = rohMatcher.consume(datei, n);
        if (rohbelegBaselineGruppe) {
          statistik.rohbelegBaselineGruppen[rohbelegBaselineGruppe]
            = (statistik.rohbelegBaselineGruppen[rohbelegBaselineGruppe] || 0) + 1;
        }
        funde.push({
          datei,
          zeile: fund.zeile,
          zitat: n,
          status: 'rohbeleg',
          baselineGruppe: rohbelegBaselineGruppe,
        });
        continue;
      }
      const baselineGruppe = matcher.consume(datei, n);
      if (baselineGruppe) {
        statistik.baseline++;
        statistik.baselineGruppen[baselineGruppe]
          = (statistik.baselineGruppen[baselineGruppe] || 0) + 1;
        funde.push({
          datei,
          zeile: fund.zeile,
          zitat: n,
          status: 'baseline',
          baselineGruppe,
        });
        continue;
      }
      if (ausnahmen.has(n)) {
        statistik.eigen++;
        funde.push({ datei, zeile: fund.zeile, zitat: n, status: 'eigen' });
        continue;
      }
      if (!rohbelege.verfuegbar) {
        statistik.nichtPruefbar++;
        funde.push({ datei, zeile: fund.zeile, zitat: n, status: 'nicht-pruefbar' });
        continue;
      }
      if (rohbelegOffen.has(n)) {
        statistik.rohbelegOffen++;
        funde.push({ datei, zeile: fund.zeile, zitat: n, status: 'rohbeleg-offen' });
        continue;
      }
      statistik.neu++;
      funde.push({ datei, zeile: fund.zeile, zitat: n, status: 'neu' });
    }
    dateiStatistik.push(statistik);
  }
  return {
    funde,
    dateiStatistik,
    ausnahmenVorkommen,
    rohbelegOffenVorkommen,
    baselineVerbraucht: matcher.verbraucht,
    rohbelegBaselineVerbraucht: rohMatcher.verbraucht,
  };
}

function gruppenStatus(daten, baselineVerbraucht, rohbelegBaselineVerbraucht) {
  const status = {};
  for (const [gruppenId, gruppe] of Object.entries(daten.gruppen)) {
    status[gruppenId] = { offen: 0, rohbeleg: 0, nenner: gruppe.nenner, dateien: {} };
    for (const [datei, eintraege] of Object.entries(gruppe.dateien)) {
      let offen = 0;
      let rohbeleg = 0;
      const vorkommen = new Map();
      for (const eintrag of eintraege) {
        vorkommen.set(eintrag, (vorkommen.get(eintrag) || 0) + 1);
      }
      for (const [eintrag] of vorkommen) {
        offen += baselineVerbraucht.get(datei + '\u0000' + eintrag) || 0;
        rohbeleg += rohbelegBaselineVerbraucht.get(datei + '\u0000' + eintrag) || 0;
      }
      status[gruppenId].offen += offen;
      status[gruppenId].rohbeleg += rohbeleg;
      status[gruppenId].dateien[datei] = { offen, rohbeleg, nenner: eintraege.length };
    }
    status[gruppenId].abgebaut = status[gruppenId].nenner - status[gruppenId].offen;
  }
  return status;
}

function baselineEntwurfErzeugen() {
  const poolTexte = bauePoolTexte(POOL, liesPruefdatei);
  const rohbelege = rohbelegPoolLesen();
  if (!rohbelege.verfuegbar) {
    throw new Error('R17-Aufnahmebestand kann ohne lokalen Rohbeleg-Pool nicht erzeugt werden.');
  }
  const { daten: bisher } = baselinePayloadLesen();
  const gruppen = {
    'r15-altlast': bisher.gruppen['r15-altlast'],
    'r16-zielaufnahme': bisher.gruppen['r16-zielaufnahme'],
  };
  const r17Dateien = {};
  for (const datei of ZIEL_R17_NEU) {
    const vergleichsPool = poolTextFuer(datei, poolTexte);
    r17Dateien[datei] = zitate(liesPruefdatei(datei))
      .map((fund) => norm(fund.text))
      .filter((zitat) => !vergleichsPool.includes(zitat)
        && !rohbelegEnthaelt(rohbelege, zitat)
        && !eigenSet.has(zitat));
  }
  const r17Nenner = Object.values(r17Dateien)
    .reduce((summe, eintraege) => summe + eintraege.length, 0);
  gruppen['r17-zielaufnahme'] = {
    bezeichnung: BASELINE_SOLL['r17-zielaufnahme'].bezeichnung,
    pruefstand: R17_PRUEFSTAND,
    rohbeleg_pool: {
      quelle: rohbelege.quelle,
      wurzeln: rohbelege.wurzeln,
      dateien: rohbelege.dateien,
      bytes: rohbelege.bytes,
      normalisiert_sha256: payloadSha256(rohbelege.text),
    },
    nenner: r17Nenner,
    dateien: r17Dateien,
  };
  const daten = {
    schema: 2,
    pruefstand: bisher.pruefstand,
    datum: '2026-08-17',
    gruppen,
  };
  const payload = JSON.stringify(daten, null, 2);
  const hash = payloadSha256(payload);
  const kurz = R17_PRUEFSTAND.slice(0, 7);
  const markdown = `# Zitat-Baseline R16-B/R17-B — Stände ${bisher.pruefstand.slice(0, 7)} und ${kurz}\n\n`
    + `R16-Prüfstand: \`${bisher.pruefstand}\` · `
    + `R17-Prüfstand: \`${R17_PRUEFSTAND}\` · Datum: 2026-08-17 · `
    + `Nutzdaten-SHA-256: \`${hash}\`\n\n`
    + `## Aussagegrenze\n\n`
    + `Die Gruppe \`r15-altlast\` enthält die 863 am Prüfstand nicht im Pool `
    + `gefundenen Zitate mit Nenner je Datei. Sie belegt die Vollzähligkeit `
    + `dieser Fundmenge, nicht die Richtigkeit der Zitate. Die Leitsession `
    + `bewertete in R15: 0 Widerlegungen; alle 863 sind nicht im Pool.\n\n`
    + `Die getrennte Gruppe \`r16-zielaufnahme\` enthält die 43 bereits `
    + `vorhandenen Fundstellen der zwei in R16-B neu aufgenommenen `
    + `Zieldateien (19 + 24). Für diese 43 wurde keine inhaltliche `
    + `Richtigkeitsbewertung erhoben; ihre getrennte Führung verhindert, `
    + `dass die Reichweitenerweiterung selbst als neuer Verstoß erscheint.\n\n`
    + `Die Gruppe \`r17-zielaufnahme\` enthält den Aufnahmebestand der 19 `
    + `in R17-B neu aufgenommenen Zieldateien am eingefrorenen Stand `
    + `\`${R17_PRUEFSTAND}\`. Gezählt wird erst nach dem versionierten Pool, `
    + `den 28 begründeten EIGEN-Einträgen und dem lokalen Rohbeleg-Pool. `
    + `Die Gruppe trägt je Datei einen eigenen Nenner; sie bewertet keine `
    + `Belegstufe. Der Rohbeleg-Pool ist git-ignoriert und deshalb nur durch `
    + `Zahl, Byte-Summe und Hash des normalisierten Laufkorpus beschrieben.\n\n`
    + `**WARNUNG: Diese Baseline niemals anheben oder neu erzeugen, um einen `
    + `Lauf grün zu bekommen. Abbau erfolgt nur durch Pool-Erweiterung oder `
    + `Reparatur am zuständigen Dokument.**\n\n`
    + `## Erzeugungsweg\n\n`
    + `Der Entwurf wurde aus einer per \`git archive\` erzeugten `
    + `Scratchpad-Kopie des Prüfstands erstellt; die aktive Baseline wird `
    + `vom Skript nie automatisch überschrieben. Reproduktionsfolge ab `
    + `Repo-Wurzel:\n\n`
    + '```powershell\n'
    + `$scratch = Join-Path $env:TEMP 'codex-r17b-reproduktion'\n`
    + `git archive --format=zip --output="$scratch/snapshot.zip" ${R17_PRUEFSTAND}\n`
    + `Expand-Archive -LiteralPath "$scratch/snapshot.zip" -DestinationPath "$scratch/repo"\n`
    + `node akquise/pruefe-zitate.js --baseline-entwurf="$scratch/baseline-entwurf.md" --pruefwurzel="$scratch/repo" --pruefstand=${R17_PRUEFSTAND}\n`
    + '```\n\n'
    + `Summenprobe: R15 \`113 + 467 + 144 + 139 = 863\`; `
    + `R16-Zielaufnahme \`19 + 24 = 43\`; R17-Zielaufnahme `
    + `\`${Object.values(r17Dateien).map((eintraege) => eintraege.length).join(' + ')} = ${r17Nenner}\`; `
    + `Gesamt \`${906 + r17Nenner}\`.\n\n`
    + BASELINE_START + '\n```json\n' + payload + '\n```\n' + BASELINE_ENDE + '\n';

  if (BASELINE_ENTWURF) {
    const ausgabe = path.resolve(BASELINE_ENTWURF);
    fs.writeFileSync(ausgabe, markdown, 'utf8');
    console.log('Baseline-Entwurf geschrieben: ' + ausgabe);
  } else {
    process.stdout.write(markdown);
  }
  let sollOk = true;
  for (const [gruppenId, soll] of Object.entries(BASELINE_SOLL)) {
    for (const [datei, anzahl] of Object.entries(soll.dateien)) {
      const ist = gruppen[gruppenId].dateien[datei].length;
      console.log(gruppenId + ' | ' + datei + ': ' + ist + ' (Soll ' + anzahl + ')');
      if (ist !== anzahl) sollOk = false;
    }
  }
  console.log('Nutzdaten-SHA-256: ' + hash);
  return sollOk ? 0 : 1;
}

// --- Positivkontrollen fuer den Produktivlauf --------------------------------
const MUSS = [
  ['Rechtsmatrix D2 Pflicht 1', 'handel/kanal-rechtsmatrix.md', 'eigene, dauerhaft erreichbare Seite mit allen 13 Art.-14-Angaben'],
  ['Rechtsmatrix D3 Kasten 1', 'handel/kanal-rechtsmatrix.md', 'ENTSCHIEDEN (Nachtrag 11.08.2026): 24 Monate nach letztem Vertragsschluss'],
  ['Rechtsmatrix D3 Kasten 2', 'handel/kanal-rechtsmatrix.md', 'Weg (b) - Risiko bewusst tragen und dokumentieren.'.replace(/-/g, '—')],
  ['Rechtsmatrix C3 Impressum', 'handel/kanal-rechtsmatrix.md', 'Nicht zulässig ist hingegen das Auslesen der Daten aus einem Online-Impressum'],
  ['Regionalstatistik 4.4', 'fund/erhebung/regionalstatistik-groessenklassen.md', 'Summe beider Kreiszeilen ÷ Landeszeile'],
  ['R00 KPI (e)', 'protokolle/R00-planpruefung-2026-08-09.md', 'Qualifizierte Erstgespräche mit Entscheidern pro Woche'],
  ['Positionierungspapier 3.3', 'fund/positionierungspapier.md', 'Entscheidungsstruktur, nicht die Betten-Zahl'],
  ['Projektquelle 7 Punkt 0a', 'projektquelle-mkt.md', 'GbR in Gründung, Rebrand-Name offen'],
  ['STATUS.md', 'STATUS.md', 'Bei Widerspruch STATUS.md'],
  ['baseline-messplan 5', 'beleg/baseline-messplan.md', 'Rückwärtsrechnung vom Livegang'],
  ['CLAUDE.md', 'CLAUDE.md', 'Internorga Hamburg (März)'],
  ['O-8 Interessenabwaegung', 'akquise/interessenabwaegung-o8.md', 'das konkrete Werbevorhaben'],
  ['Wettbewerbsbild Teil A', 'fund/wettbewerbsbild.md', 'Wer baut dieselbe Technik?'],
  ['Preismodell Optionen', 'handel/preismodell-optionen.md', 'Eine fünfte Bedingung neben AU-1…AU-4, und sie trifft den KUNDEN'],
  ['R17 ZIEL baseline-messplan', 'beleg/baseline-messplan.md', '# BELEG1 — Baseline-Messplan: Vorher-Messung der drei Pilotobjekte'],
  ['R17 ZIEL interviewleitfaden', 'beleg/vorlagen/interviewleitfaden-baseline.md', '# Interviewleitfaden Betreiber-Briefing — BELEG1-Baseline (Schiene B)'],
  ['R17 ZIEL referenzvereinbarung', 'beleg/vorlagen/referenzvereinbarung-pilotobjekte.md', '# BELEG2 — Referenzvereinbarung mit den drei Pilotobjekten (Vorlage)'],
  ['R17 ZIEL tagesblatt-firzlaffs', 'beleg/vorlagen/tagesblatt-firzlaffs.md', "# Tagesblatt Rezeptions-Erfassung — Firzlaff's Hotel Neumünster"],
  ['R17 ZIEL tagesblatt-boninstrasse', 'beleg/vorlagen/tagesblatt-hostel-boninstrasse.md', '# Tagesblatt Rezeptions-Erfassung — Hostel Boninstraße Kiel'],
  ['R17 ZIEL brandnamic', 'fund/erhebung/brandnamic-partner-vollerhebung.md', '# Brandnamic-Partnerkreis — Vollerhebung (P22)'],
  ['R17 ZIEL dehoga-entwurf', 'fund/erhebung/entwurf-anfrage-dehoga-sh.md', '# ENTWURF — Anfrage an DEHOGA Landesverband Schleswig-Holstein'],
  ['R17 ZIEL ihk-entwurf', 'fund/erhebung/entwurf-anfrage-ihk-sh.md', '# ENTWURF — Anfrage an IHK Schleswig-Holstein (Nachfolge-/Tourismusreferat)'],
  ['R17 ZIEL regionalstatistik', 'fund/erhebung/regionalstatistik-groessenklassen.md', '# FUND2 · Strang 2 — Dritter Kanal: regionalstatistik.de (Prüf- und Erhebungsbericht)'],
  ['R17 ZIEL strukturdaten', 'fund/erhebung/strang2-strukturdaten.md', '# FUND2 · Strang 2 — Verbands- und Strukturdaten (Erhebungsbericht)'],
  ['R17 ZIEL verbund', 'fund/erhebung/verbund-vollerhebung.md', '# Hotelkooperationen und Marketing-Verbünde — Erhebung zu P21'],
  ['R17 ZIEL persona', 'fund/persona-validierungsplan.md', '# FUND2 — Persona-Validierungsplan (Methode, kein Befund)'],
  ['R17 ZIEL positionierung', 'fund/positionierungspapier.md', '# FUND1 — Positionierungspapier: USP & Dienstleistungsportfolio'],
  ['R17 ZIEL anwalts-briefing', 'handel/anwalts-briefing-2026-08.md', '# Briefing an einen Rechtsanwalt — vier Fragen zur B2B-Kaltakquise per Brief und zur n8n-Lizenzarchitektur'],
  ['R17 ZIEL ifb-entwurf', 'handel/entwurf-anfrage-ifb-hamburg.md', '# Entwurf Außenmail — IFB Hamburg, Hamburg Digital Check'],
  ['R17 ZIEL wtsh-entwurf', 'handel/entwurf-anfrage-wtsh.md', '# Entwurf Außenmail — WTSH, DKU Modul 1 (Beratung)'],
  ['R17 ZIEL foerderarchitektur', 'handel/foerderarchitektur-beraterrolle.md', '# Förderarchitektur und Beraterrolle — Trägerdokument'],
  ['R17 ZIEL preisliste', 'handel/preisliste-vorlaeufig.md', '# Vorläufige Preisliste (MKT-HANDEL, Stufe F-III) — INTERN'],
  ['R17 ZIEL preismodell', 'handel/preismodell-optionen.md', '# Preismodell-Optionen (MKT-HANDEL1) — Entscheidungsvorlage'],
];
const TREFFEN_NICHT = [
  ['verfaelschte Zahl', 'Summe beider Kreiszeilen ÷ Bundeszeile'],
  ['verfaelschte Frist', 'ENTSCHIEDEN (Nachtrag 11.08.2026): 36 Monate nach letztem Vertragsschluss'],
  ['erfundener Satz', 'Impressumsdaten dürfen für Werbung genutzt werden'],
];
const BLOECKE = [
  ['D3-Kasten 1 (24 Monate)', 'akquise/listenbau-regelwerk.md',
    'ENTSCHIEDEN (Nachtrag 11.08.2026): 24 Monate', 'Bestell-/Vertragsformular (A5).'],
  ['D3-Kasten 2 (Weg b)', 'akquise/listenbau-regelwerk.md',
    'ENTSCHIEDEN (Nachtrag 11.08.2026): Weg (b)', 'nicht die Kanalwahl.'],
  ['D2-Pflichtenliste 1-6', 'akquise/listenbau-regelwerk.md',
    '1. Datenschutzinformation für Geschäftskontakte', 'ob deren Nutzungsbedingungen Werbung erlauben.'],
];

function blockAusZiel(datei, von, bis) {
  const text = norm(liesPruefdatei(datei));
  const anfang = text.indexOf(norm(von));
  if (anfang < 0) return null;
  const ende = text.indexOf(norm(bis), anfang);
  if (ende < 0) return null;
  return text.slice(anfang, ende + norm(bis).length);
}

function produktivKontrollen(poolTexte) {
  const poolText = [...poolTexte.values()].join('\n@@@\n');
  console.log('\n--- Blockzitate: Zieldokument gegen Quelle ---');
  let blockTreffer = 0;
  let blockGegenproben = 0;
  for (const [name, datei, von, bis] of BLOECKE) {
    const block = blockAusZiel(datei, von, bis);
    if (block === null) {
      console.log('FEHL ' + name + ' (Marker im Zieldokument nicht gefunden)');
      continue;
    }
    const hit = poolText.includes(block);
    if (hit) blockTreffer++;
    console.log((hit ? 'OK   ' : 'FEHL ') + name + ' (' + block.length + ' Zeichen verglichen)');
    let kaputt = block.replace(/24 Monate/, '36 Monate').replace(/nicht zulässig/, 'zulässig')
      .replace(/13 Art\.-14-Angaben/, '14 Art.-14-Angaben').replace(/vor jedem Versand/, 'vor jeder Welle')
      .replace(/Risiko bewusst tragen/, 'Risiko ausgeschlossen')
      .replace(/bleibt unverändert gegenläufig/, 'ist damit überholt');
    if (kaputt === block) {
      const woerter = block.split(' ');
      if (woerter.length > 20) {
        woerter.splice(Math.floor(woerter.length / 2), 1);
        kaputt = woerter.join(' ');
      }
      console.log('     (Fallback-Verfaelschung: Wort aus der Blockmitte entfernt)');
    }
    if (kaputt === block) {
      console.log('     ! keine Verfaelschung anwendbar - Gegenprobe NICHT gelaufen');
    } else if (!poolText.includes(kaputt)) {
      blockGegenproben++;
      console.log('     Gegenprobe OK (verfaelschte Fassung wird nicht bestaetigt)');
    } else {
      console.log('     Gegenprobe FEHL (verfaelschte Fassung wuerde durchgehen!)');
    }
  }
  console.log('Blockzitate: ' + blockTreffer + ' / ' + BLOECKE.length
    + ' bestaetigt, Gegenproben: ' + blockGegenproben + ' / ' + BLOECKE.length);

  console.log('\n--- Positivkontrolle (MUSS treffen) ---');
  let positiv = 0;
  for (const [name, datei, text] of MUSS) {
    const hit = norm(liesPruefdatei(datei)).includes(norm(text));
    if (hit) positiv++;
    console.log((hit ? 'OK   ' : 'FEHL ') + name + ' [' + datei + ']');
  }
  console.log('Positivkontrolle: ' + positiv + ' / ' + MUSS.length);

  console.log('\n--- Gegenprobe (darf NICHT treffen) ---');
  let gegenprobe = 0;
  for (const [name, text] of TREFFEN_NICHT) {
    const hit = poolText.includes(norm(text));
    if (!hit) gegenprobe++;
    console.log((hit ? 'FEHL ' : 'OK   ') + name);
  }
  console.log('Gegenprobe: ' + gegenprobe + ' / ' + TREFFEN_NICHT.length);
  return blockTreffer === BLOECKE.length
    && blockGegenproben === BLOECKE.length
    && positiv === MUSS.length
    && gegenprobe === TREFFEN_NICHT.length;
}

function abschnittZitate(text, startMarker, endeMarker) {
  const start = text.indexOf(startMarker);
  const ende = endeMarker ? text.indexOf(endeMarker, start + startMarker.length) : text.length;
  if (start < 0 || ende < 0) throw new Error('Selbsttest-Abschnitt fehlt: ' + startMarker);
  return zitate(text.slice(start, ende)).map((fund) => norm(fund.text));
}

function statusTreffer(funde, erwarteteZitate, status) {
  const vorhanden = new Map();
  for (const fund of funde.filter((eintrag) => eintrag.status === status)) {
    vorhanden.set(fund.zitat, (vorhanden.get(fund.zitat) || 0) + 1);
  }
  let getroffen = 0;
  for (const zitat of erwarteteZitate) {
    const rest = vorhanden.get(zitat) || 0;
    if (rest > 0) {
      getroffen++;
      vorhanden.set(zitat, rest - 1);
    }
  }
  return getroffen;
}

function selbsttestLaufen() {
  const datei = 'akquise/selbsttest-zitate.md';
  const roh = liesSkriptdatei(datei);
  const aNeu = abschnittZitate(roh, '## Muster A', '## Muster B');
  const bBaseline = abschnittZitate(roh, '## Muster B', '## Muster C');
  const cPool = abschnittZitate(roh, '## Muster C', '## Muster D');
  const dSelbst = abschnittZitate(roh, '## Muster D', '## Muster E');
  const eEigen = abschnittZitate(roh, '## Muster E', '## Muster F');
  const fRohbeleg = abschnittZitate(roh, '## Muster F', '## Muster G');
  const gNichtPruefbar = abschnittZitate(roh, '## Muster G', '## Muster H');
  const hRohbelegOffen = abschnittZitate(roh, '## Muster H', '## Muster I');
  const iAuslassungen = abschnittZitate(roh, '## Muster I', null);

  const poolTexte = bauePoolTexte(POOL, liesPruefdatei);
  // Die Selbsttest-Datei wird absichtlich auch als Pool-Datei angeboten. Nur
  // poolTextFuer() darf verhindern, dass sie ihre eigenen Zitate bestaetigt.
  poolTexte.set(datei, norm(roh));
  const testBaseline = {
    gruppen: {
      selbsttest: {
        nenner: bBaseline.length,
        dateien: { [datei]: bBaseline },
      },
    },
  };
  const lesen = (pfad) => {
    if (pfad !== datei) throw new Error('Unerwartete Selbsttest-Datei: ' + pfad);
    return roh;
  };
  const verwaisteAusnahme = norm('Diese registrierte Selbsttest-Ausnahme kommt im Bestand nirgends vor und muss verwaist sein.');
  const testAusnahmen = new Set([...eEigen, verwaisteAusnahme]);
  const verwaisterRohbelegOffen = norm('Dieser registrierte Rohbeleg-Offen-Eintrag kommt im Bestand nirgends vor und muss verwaist sein.');
  const testRohbelegOffen = new Set([...hRohbelegOffen, verwaisterRohbelegOffen]);
  const iQuelltexte = [
    'Der Anfang dieser Rohbeleg-Fundstelle steht byte-treu und hier steht zusätzlicher Quelltext und am Ende geht sie ebenfalls byte-treu weiter.',
    'Diese Rohbeleg-Fundstelle beginnt byte-treu und der Rest ist sichtbar ausgelassen, während im Rohbeleg weiterer Text folgt.',
  ];
  const virtuelleRohtexte = [fRohbeleg.join('\n'), ...iQuelltexte.map(normRohbeleg)];
  const virtuellerRohbeleg = {
    verfuegbar: true,
    quelle: 'virtueller Selbsttest-Rohbeleg',
    wurzeln: 1,
    dateien: 1,
    bytes: virtuelleRohtexte.join('\n').length,
    texte: virtuelleRohtexte,
    text: virtuelleRohtexte.join('\n'),
  };
  const basis = pruefeZieldateien({
    zielDateien: [datei],
    lesen,
    poolTexte,
    rohbelege: virtuellerRohbeleg,
    baselineDaten: testBaseline,
    ausnahmen: testAusnahmen,
    rohbelegOffen: testRohbelegOffen,
  });
  const aGetroffen = statusTreffer(basis.funde, aNeu, 'neu');
  const bGetroffen = statusTreffer(basis.funde, bBaseline, 'baseline');
  const cGetroffen = statusTreffer(basis.funde, cPool, 'bestaetigt');
  const dAusgeschlossen = statusTreffer(basis.funde, dSelbst, 'neu');
  const eGetroffen = statusTreffer(basis.funde, eEigen, 'eigen');
  const fGetroffen = statusTreffer(basis.funde, fRohbeleg, 'rohbeleg');
  const hGetroffen = statusTreffer(basis.funde, hRohbelegOffen, 'rohbeleg-offen');
  const iPositiv = [iAuslassungen[0], iAuslassungen[2]];
  const iNegativ = [iAuslassungen[1], iAuslassungen[3]];
  const iRohbeleg = statusTreffer(basis.funde, iPositiv, 'rohbeleg');
  const iNeu = statusTreffer(basis.funde, iNegativ, 'neu');
  const falschesRnZitat = aNeu.filter((zitat) => zitat.startsWith('Rn. 999:'));
  const falschesRnNeu = statusTreffer(basis.funde, falschesRnZitat, 'neu');
  const verwaist = [...testAusnahmen]
    .filter((eintrag) => !basis.ausnahmenVorkommen.has(eintrag));
  const rohbelegOffenVerwaist = [...testRohbelegOffen]
    .filter((eintrag) => !basis.rohbelegOffenVorkommen.has(eintrag));
  const iSegmente = iAuslassungen[0].split(/\s*…\s*/);
  const iDateigrenze = !rohbelegEnthaelt({
    verfuegbar: true,
    texte: [iSegmente[0], iSegmente[1]],
  }, iAuslassungen[0]);

  // Gegenrichtung: exakt dasselbe D-Zitat steht zusaetzlich in einer anderen
  // virtuellen Pool-Datei. Der Produktivpfad muss es jetzt bestaetigen.
  const gegenPool = new Map(poolTexte);
  gegenPool.set('selbsttest/andere-pool-datei.md', dSelbst.join('\n'));
  const gegenrichtung = pruefeZieldateien({
    zielDateien: [datei],
    lesen,
    poolTexte: gegenPool,
    rohbelege: virtuellerRohbeleg,
    baselineDaten: testBaseline,
    ausnahmen: testAusnahmen,
    rohbelegOffen: testRohbelegOffen,
  });
  const dBestaetigt = statusTreffer(gegenrichtung.funde, dSelbst, 'bestaetigt');

  const gText = gNichtPruefbar.map((zitat) => '„' + zitat + '"').join('\n');
  const ohneRohbeleg = pruefeZieldateien({
    zielDateien: [datei],
    lesen: () => gText,
    poolTexte: new Map([[datei, norm(gText)]]),
    rohbelege: {
      verfuegbar: false,
      quelle: 'leerer Selbsttest-Ordner',
      texte: [],
      text: '',
    },
    baselineDaten: { gruppen: { leer: { nenner: 0, dateien: {} } } },
    ausnahmen: new Set(),
  });
  const gGetroffen = statusTreffer(ohneRohbeleg.funde, gNichtPruefbar, 'nicht-pruefbar');
  const gNeu = ohneRohbeleg.funde.filter((fund) => fund.status === 'neu').length;
  const gBestaetigt = ohneRohbeleg.funde
    .filter((fund) => ['bestaetigt', 'rohbeleg'].includes(fund.status)).length;

  let zielSelbstausschluss = 0;
  for (const ziel of ZIEL) {
    const zielRoh = liesPruefdatei(ziel);
    const zielZitate = zitate(zielRoh);
    if (!zielZitate.length) continue;
    const einzel = pruefeZieldateien({
      zielDateien: [ziel],
      lesen: () => zielRoh,
      poolTexte: new Map([[ziel, norm(zielRoh)]]),
      rohbelege: {
        verfuegbar: true,
        quelle: 'leerer virtueller Pool',
        texte: [],
        text: '',
      },
      baselineDaten: { gruppen: { leer: { nenner: 0, dateien: {} } } },
      ausnahmen: new Set(),
    });
    if (einzel.funde.every((fund) => fund.status !== 'bestaetigt')) zielSelbstausschluss++;
  }

  const eolLf = zitate('„123456789012\n123456789012"').map((fund) => fund.text);
  const eolCrlf = zitate('„123456789012\r\n123456789012"').map((fund) => fund.text);
  const eolOk = JSON.stringify(eolLf) === JSON.stringify(eolCrlf);
  const extrahiert = basis.funde.length;
  const erwartet = aNeu.length + bBaseline.length + cPool.length + dSelbst.length
    + eEigen.length + fRohbeleg.length + gNichtPruefbar.length
    + hRohbelegOffen.length + iAuslassungen.length;
  const ok = extrahiert === erwartet
    && aGetroffen === aNeu.length
    && bGetroffen === bBaseline.length
    && cGetroffen === cPool.length
    && dAusgeschlossen === dSelbst.length
    && dBestaetigt === dSelbst.length
    && eGetroffen === eEigen.length
    && fGetroffen === fRohbeleg.length
    && falschesRnZitat.length === 1 && falschesRnNeu === 1
    && verwaist.length === 1 && verwaist[0] === verwaisteAusnahme
    && hGetroffen === hRohbelegOffen.length
    && rohbelegOffenVerwaist.length === 1
    && rohbelegOffenVerwaist[0] === verwaisterRohbelegOffen
    && iAuslassungen.length === 4 && iRohbeleg === 2 && iNeu === 2 && iDateigrenze
    && gGetroffen === gNichtPruefbar.length && gNeu === 0 && gBestaetigt === 0
    && zielSelbstausschluss === ZIEL.length
    && aNeu.length > 0 && bBaseline.length > 0 && cPool.length > 0 && dSelbst.length > 0
    && eEigen.length > 0 && fRohbeleg.length > 0 && gNichtPruefbar.length > 0
    && hRohbelegOffen.length > 0
    && eolOk;

  console.log('=== SELBSTTEST: dieselben Funktionen wie der Produktivpfad ===');
  console.log('Zitate extrahiert                 : ' + extrahiert + ' / ' + erwartet);
  console.log('Muster (a) NEU                   : ' + aGetroffen + ' / ' + aNeu.length);
  console.log('TREFFEN-NICHT-Zeilen             : ' + aGetroffen + ' / ' + aNeu.length);
  console.log('Muster (b) BASELINE, nicht rot   : ' + bGetroffen + ' / ' + bBaseline.length);
  console.log('Muster (c) POOL bestaetigt       : ' + cGetroffen + ' / ' + cPool.length);
  console.log('Muster (d) nur eigene Datei      : ' + dAusgeschlossen + ' / ' + dSelbst.length
    + ' nicht bestaetigt');
  console.log('Muster (d) zusaetzlich Fremdpool : ' + dBestaetigt + ' / ' + dSelbst.length
    + ' bestaetigt');
  console.log('Muster (e) EIGEN                 : ' + eGetroffen + ' / ' + eEigen.length);
  console.log('Muster (e) verwaiste Ausnahme    : ' + verwaist.length + ' / 1');
  console.log('Muster (f) Rohbeleg bestaetigt   : ' + fGetroffen + ' / ' + fRohbeleg.length);
  console.log('Muster (f) falsches Rn.-Zitat NEU: ' + falschesRnNeu + ' / 1');
  console.log('Muster (g) nicht pruefbar        : ' + gGetroffen + ' / ' + gNichtPruefbar.length
    + ' | NEU ' + gNeu + ' | bestaetigt ' + gBestaetigt);
  console.log('Muster (h) Rohbeleg bestaetigt nicht: ' + hGetroffen + ' / '
    + hRohbelegOffen.length);
  console.log('Muster (h) verwaister Eintrag    : ' + rohbelegOffenVerwaist.length + ' / 1');
  console.log('Muster (i) Auslassung bestaetigt : ' + iRohbeleg + ' / 2');
  console.log('Muster (i) Auslassung bleibt NEU : ' + iNeu + ' / 2');
  console.log('Muster (i) keine Dateigrenze     : ' + (iDateigrenze ? 'JA' : 'NEIN'));
  console.log('Selbstausschluss ZIEL            : ' + zielSelbstausschluss + ' / ' + ZIEL.length);
  console.log('LF/CRLF invariant                : ' + (eolOk ? 'JA' : 'NEIN'));
  console.log(ok ? 'SELBSTTEST BESTANDEN' : 'SELBSTTEST FEHLGESCHLAGEN');
  return ok ? 0 : 1;
}

function markdownDateienUnter(wurzel) {
  const ausgabe = [];
  const laufen = (absolut, relativ) => {
    for (const eintrag of fs.readdirSync(absolut, { withFileTypes: true })) {
      const rel = path.posix.join(relativ, eintrag.name);
      const abs = path.join(absolut, eintrag.name);
      if (eintrag.isDirectory()) laufen(abs, rel);
      else if (eintrag.isFile() && eintrag.name.toLowerCase().endsWith('.md')) ausgabe.push(rel);
    }
  };
  for (const ordner of ['akquise', 'handel', 'fund', 'beleg']) {
    laufen(path.join(wurzel, ordner), ordner);
  }
  return ausgabe.sort();
}

function zielkandidatenLaufen() {
  const zielSet = new Set(ZIEL);
  const kandidaten = [];
  for (const datei of markdownDateienUnter(PRUEF_ROOT)) {
    if (zielSet.has(datei)) continue;
    const anzahl = zitate(liesAus(PRUEF_ROOT, datei)).length;
    if (anzahl > 0) kandidaten.push({ datei, anzahl });
  }
  console.log('=== ZIEL-Kandidaten (generischer .md-Scan) ===');
  console.log('Suchraum: akquise/, handel/, fund/, beleg/');
  console.log('ZIEL: ' + ZIEL.length + ' / ' + ZIEL.length + ' Dateien');
  for (const kandidat of kandidaten) {
    console.log(kandidat.datei + ': ' + kandidat.anzahl + ' Zitate');
  }
  console.log('Kandidaten: ' + kandidaten.length + ' Dateien');
  console.log('Zitate in Kandidaten: '
    + kandidaten.reduce((summe, kandidat) => summe + kandidat.anzahl, 0));
  return 0;
}

function produktivLaufen(altlastVolltext) {
  const { payload, daten } = baselinePayloadLesen();
  const baselineFehler = baselineValidieren(payload, daten);
  if (baselineFehler.length) {
    console.error('=== BASELINE UNGUELTIG — FAIL-CLOSED ===');
    for (const fehler of baselineFehler) console.error('FEHL ' + fehler);
    return 1;
  }
  const poolTexte = bauePoolTexte(POOL, liesPruefdatei);
  const rohbelege = rohbelegPoolLesen();
  const ergebnis = pruefeZieldateien({
    zielDateien: ZIEL,
    lesen: liesPruefdatei,
    poolTexte,
    rohbelege,
    baselineDaten: daten,
    ausnahmen: eigenSet,
    rohbelegOffen: rohbelegOffenSet,
  });
  const gruppen = gruppenStatus(
    daten,
    ergebnis.baselineVerbraucht,
    ergebnis.rohbelegBaselineVerbraucht,
  );

  if (altlastVolltext) {
    console.log('=== ALTLAST / AUFNAHMEBESTAND — VOLLSTAENDIGE BASELINE ===');
    console.log('Pruefstand: ' + daten.pruefstand);
    console.log('Nutzdaten-SHA-256: ' + payloadSha256(payload));
    console.log('Rohbeleg-Pool: ' + (rohbelege.verfuegbar
      ? rohbelege.dateien + ' Textdateien, ' + rohbelege.bytes + ' Bytes'
      : 'NICHT VERFUEGBAR'));
    let gelistet = 0;
    for (const [gruppenId, gruppe] of Object.entries(daten.gruppen)) {
      const gs = gruppen[gruppenId];
      console.log('\n--- ' + gruppe.bezeichnung + ' ---');
      console.log('Offen: ' + gs.offen + ' von ' + gs.nenner
        + ' | seit Baseline/Einbezug abgebaut: ' + gs.abgebaut
        + ' | davon Rohbeleg-bestaetigt: ' + gs.rohbeleg);
      for (const [datei, eintraege] of Object.entries(gruppe.dateien)) {
        const dateiStatus = gs.dateien[datei];
        console.log(datei + ': ' + dateiStatus.offen + ' von ' + dateiStatus.nenner
          + ' offen | ' + (dateiStatus.nenner - dateiStatus.offen) + ' abgebaut'
          + ' | davon Rohbeleg-bestaetigt: ' + dateiStatus.rohbeleg);
        const offenJeZitat = new Map();
        const rohbelegJeZitat = new Map();
        for (const eintrag of eintraege) {
          const schluessel = datei + '\u0000' + eintrag;
          if (!offenJeZitat.has(eintrag)) {
            offenJeZitat.set(eintrag, ergebnis.baselineVerbraucht.get(schluessel) || 0);
            rohbelegJeZitat.set(
              eintrag,
              ergebnis.rohbelegBaselineVerbraucht.get(schluessel) || 0,
            );
          }
          const rest = offenJeZitat.get(eintrag);
          const rohRest = rohbelegJeZitat.get(eintrag);
          const label = rest > 0 ? '[OFFEN] '
            : rohRest > 0 ? '[ABGEBAUT ROHBELEG] '
              : '[ABGEBAUT] ';
          console.log(label + datei + ' :: ' + eintrag);
          if (rest > 0) offenJeZitat.set(eintrag, rest - 1);
          else if (rohRest > 0) rohbelegJeZitat.set(eintrag, rohRest - 1);
          gelistet++;
        }
      }
    }
    const soll = Object.values(BASELINE_SOLL).reduce(
      (summe, gruppe) => summe + Object.values(gruppe.dateien).reduce((a, b) => a + b, 0), 0);
    console.log('\nBaseline-Eintraege gelistet: ' + gelistet + ' / ' + soll);
    return gelistet === soll ? 0 : 1;
  }

  const gesamt = ergebnis.dateiStatistik.reduce((summe, s) => summe + s.gesamt, 0);
  const bestaetigt = ergebnis.dateiStatistik.reduce((summe, s) => summe + s.bestaetigt, 0);
  const rohbelegBestaetigt = ergebnis.dateiStatistik.reduce((summe, s) => summe + s.rohbeleg, 0);
  const eigenFundstellen = ergebnis.dateiStatistik.reduce((summe, s) => summe + s.eigen, 0);
  const nichtPruefbar = ergebnis.dateiStatistik
    .reduce((summe, s) => summe + s.nichtPruefbar, 0);
  const rohbelegOffen = ergebnis.dateiStatistik
    .reduce((summe, s) => summe + s.rohbelegOffen, 0);
  const neu = ergebnis.dateiStatistik.reduce((summe, s) => summe + s.neu, 0);
  const eigenVerwaist = EIGEN.map(([text]) => norm(text))
    .filter((text) => !ergebnis.ausnahmenVorkommen.has(text));
  const eigenBegruendet = EIGEN.filter(([, begruendung]) =>
    typeof begruendung === 'string' && begruendung.trim().length > 0).length;
  const rohbelegOffenVerwaist = ROHBELEG_OFFEN_R17.map(([text]) => norm(text))
    .filter((text) => !ergebnis.rohbelegOffenVorkommen.has(text));

  console.log('=== Zitatabgleich: neue Verstoesse gegen festgeschriebenen Bestand ===');
  console.log('Pruefwurzel: ' + PRUEF_ROOT);
  console.log('Baseline-Pruefstand: ' + daten.pruefstand);
  console.log('R17-Pruefstand: ' + daten.gruppen['r17-zielaufnahme'].pruefstand);
  console.log('ZIEL: ' + ZIEL.length + ' / ' + ZIEL.length
    + ' Dateien | versionierter POOL: ' + POOL.length + ' Dateien');
  console.log('Rohbeleg-Pool: ' + (rohbelege.verfuegbar
    ? 'verfuegbar (' + rohbelege.wurzeln + ' Wurzeln, ' + rohbelege.dateien
      + ' Textdateien, ' + rohbelege.bytes + ' Bytes; ' + rohbelege.quelle + ')'
    : 'NICHT VERFUEGBAR (' + rohbelege.quelle + ')'));
  console.log('Geprueft: ' + gesamt + ' Zitate (>=25 Zeichen, deutsche Anfuehrungszeichen)');
  console.log('Quellenzitate bestaetigt (versionierter Pool): ' + bestaetigt);
  console.log('Bestaetigt (Rohbeleg, lokal): ' + rohbelegBestaetigt);
  console.log('Eigene Formulierungen: ' + ergebnis.ausnahmenVorkommen.size + ' / '
    + EIGEN.length + ' Eintraege im Bestand vorhanden (' + eigenFundstellen
    + ' als EIGEN klassifizierte Fundstellen)');
  console.log('EIGEN-Eintraege mit Begruendung: ' + eigenBegruendet + ' / ' + EIGEN.length);
  console.log('Nicht pruefbar (Rohbeleg-Pool nicht verfuegbar): ' + nichtPruefbar);
  console.log('Rohbeleg bestaetigt nicht (R17-Aufnahmebefund): ' + rohbelegOffen);
  if (eigenVerwaist.length) {
    console.log('VERWAISTE Ausnahme-Eintraege:');
    for (const eintrag of eigenVerwaist) console.log('  - ' + eintrag);
  }
  if (rohbelegOffenVerwaist.length) {
    console.log('VERWAISTE R17-Rohbeleg-Offen-Eintraege:');
    for (const eintrag of rohbelegOffenVerwaist) console.log('  - ' + eintrag);
  }
  console.log('\n--- Laufzahlen je Zieldatei ---');
  for (const s of ergebnis.dateiStatistik) {
    const gruppenText = Object.entries(s.baselineGruppen)
      .map(([id, n]) => id + '=' + n).join(', ') || '-';
    console.log(s.datei + ': ' + s.gesamt + ' geprueft | ' + s.bestaetigt
      + ' bestaetigt (Pool) | ' + s.rohbeleg + ' bestaetigt (Rohbeleg, lokal) | '
      + s.eigen + ' eigene | ' + s.baseline + ' Bestand (' + gruppenText + ') | '
      + s.nichtPruefbar + ' nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | '
      + s.rohbelegOffen + ' Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | '
      + s.neu + ' NEU');
  }
  console.log('\n--- Bestand mit Nenner ---');
  for (const [gruppenId, gruppe] of Object.entries(daten.gruppen)) {
    const gs = gruppen[gruppenId];
    console.log(gruppe.bezeichnung + ': ' + gs.offen + ' von ' + gs.nenner
      + ' noch offen | ' + gs.abgebaut + ' seit Baseline/Einbezug abgebaut'
      + ' | davon Rohbeleg-bestaetigt: ' + gs.rohbeleg);
    for (const [datei, ds] of Object.entries(gs.dateien)) {
      console.log('  ' + datei + ': ' + ds.offen + ' von ' + ds.nenner
        + ' noch offen | davon Rohbeleg-bestaetigt: ' + ds.rohbeleg);
    }
  }
  if (nichtPruefbar) {
    console.log('\n--- NICHT PRUEFBAR ---');
    for (const s of ergebnis.dateiStatistik.filter((eintrag) => eintrag.nichtPruefbar > 0)) {
      console.log(s.datei + ': ' + s.nichtPruefbar
        + ' nicht pruefbar (Rohbeleg-Pool nicht verfuegbar)');
    }
  }
  if (rohbelegOffen) {
    console.log('\n--- ROHBELEG BESTAETIGT NICHT (R17-AUFNAHMEBEFUND) ---');
    for (const fund of ergebnis.funde.filter((eintrag) => eintrag.status === 'rohbeleg-offen')) {
      console.log('[' + fund.datei + ':' + fund.zeile + '] ' + fund.zitat);
    }
  }
  console.log('\n--- NEUE Verstoesse ---');
  console.log('Neu: ' + neu);
  for (const fund of ergebnis.funde.filter((eintrag) => eintrag.status === 'neu')) {
    console.log('[' + fund.datei + ':' + fund.zeile + '] ' + fund.zitat);
  }

  const kontrollenOk = produktivKontrollen(poolTexte);
  const ok = neu === 0 && eigenVerwaist.length === 0 && eigenBegruendet === EIGEN.length
    && rohbelegOffenVerwaist.length === 0 && kontrollenOk;
  console.log('\n' + (ok
    ? 'ERGEBNIS: GRUEN — 0 neue Verstoesse; Bestand bleibt sichtbar.'
    : 'ERGEBNIS: ROT — neue Verstoesse oder Kontrollfehler.'));
  return ok ? 0 : 1;
}

let exitCode;
try {
  if (BASELINE_ENTWURF) exitCode = baselineEntwurfErzeugen();
  else if (SELBSTTEST) exitCode = selbsttestLaufen();
  else if (ZIELKANDIDATEN) exitCode = zielkandidatenLaufen();
  else exitCode = produktivLaufen(ALTLAST);
} catch (fehler) {
  console.error('FEHLER: ' + fehler.message);
  exitCode = 1;
}
process.exit(exitCode);
