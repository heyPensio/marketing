#!/usr/bin/env node
'use strict';
// R19-C Nachtrag: Trunkierungslauf (Verfahren § 3.2 verlangt neben der
// Identitaetsrecherche eine Varianten-Recherche MIT PLATZHALTERN).
// Geprueft wird zuerst, OB die DPMA-Smartsearch Platzhalter ueberhaupt
// auswertet — sonst waere jedes Ergebnis dieses Laufs bedeutungslos:
//   Positivkontrolle: "apale*" MUSS >= 1 liefern (apaleo ist dort belegt).
//   Gegenkontrolle:   "apaleo*" und "apaleo" zum Vergleich.
//   Nullkontrolle:    Zufallstoken mit Stern -> 0.
// Trifft die Positivkontrolle nicht, ist der Trunkierungs-Kanal fuer
// DPMA-Smartsearch NICHT GANGBAR und der Lauf meldet das ausdruecklich.

const kern = require('./vertiefung-r19c-kern.js');
const crypto = require('node:crypto');

const MUSTER = [
  { label: 'Kontrolle exakt', q: 'apaleo', soll: '1 (bekannt aus dem Hauptlauf)' },
  { label: 'Kontrolle Trunkierung', q: 'apale*', soll: '>= 1, sonst Kanal tot' },
  { label: 'Kontrolle Trunkierung 2', q: 'apaleo*', soll: '>= 1, sonst Kanal tot' },
  { label: 'Wisestay Stamm', q: 'wisesta*', soll: 'offen' },
  { label: 'Wisestay Stamm kurz', q: 'wise*stay', soll: 'offen' },
  { label: 'Innsight Stamm', q: 'innsigh*', soll: 'offen' },
  { label: 'Innsight Stamm kurz', q: 'innsi*', soll: 'offen' },
  { label: 'Stayahead Stamm', q: 'stayahea*', soll: 'offen' },
  { label: 'Stayahead Stamm kurz', q: 'stayah*', soll: 'offen' },
];

async function main() {
  const { store, directory } = await kern.neuerLauf('trunkierung');
  const token = `qzx7r19c${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${crypto.randomBytes(4).toString('hex')}`;
  const out = [];
  const say = (l) => { out.push(l); process.stdout.write(`${l}\n`); };
  say(`# R19-C Trunkierungslauf DPMA-Smartsearch — ${kern.berlinNow()}`);
  say(`Rohbelege: ${directory}`);
  say('');
  const dpma = await kern.discoverDpma(store);
  say(`Discovery: ${dpma.discoveryPass}`);
  say('');
  say('| Muster | Suchstring | Soll | marHits | Beleg |');
  say('|---|---|---|---:|---|');
  const ergebnisse = {};
  for (const m of [...MUSTER, { label: 'Nullkontrolle', q: `${token}*`, soll: '0' }]) {
    const r = await kern.dpmaQuery(store, dpma, `trunk-${m.q}`, m.q);
    ergebnisse[m.q] = r.count;
    say(`| ${m.label} | \`${m.q}\` | ${m.soll} | ${r.count ?? 'nicht auslesbar'} | \`${r.response ? kern.evidenceRef(r.response) : 'kein Abruf'}\` |`);
  }
  say('');
  // ⭐ FIX 19.08.2026: Vorher stand hier eine ODER-Verknuepfung
  //   (ergebnisse['apale*'] >= 1 || ergebnisse['apaleo*'] >= 1)
  // und der Lauf meldete "GANGBAR", obwohl `apale*` mit 0 antwortete.
  // `apaleo*` ist das VOLLSTAENDIGE Wort mit angehaengtem Stern und beweist
  // keine Trunkierung — nur der abgeschnittene Stamm tut das. Ein
  // Pruefwerkzeug, dessen Erfolgsbedingung zu weit ist, meldet gruen.
  const kanalLebt = (ergebnisse['apale*'] ?? 0) >= 1;
  say(`**Kanal-Urteil:** Trunkierung in der DPMA-Smartsearch ist ${kanalLebt ? 'GANGBAR' : 'NICHT GANGBAR'}.`);
  if (!kanalLebt) {
    say('Begruendung: Die Positivkontrolle mit abgeschnittenem Stamm ("apale*" / "apaleo*")');
    say('erreicht die bekannte Marke NICHT. Damit sind ALLE Trunkierungs-Zeilen dieses Laufs');
    say('ohne Aussagewert — sie belegen keine Freiheit, sondern nur, dass die Smartsearch');
    say('Platzhalter nicht auswertet. Die Varianten-Recherche nach Verfahren § 3.2 bleibt fuer');
    say('den DPMA-Kanal damit OFFEN (Weg: Erweiterte Recherche in der Weboberflaeche).');
  }
  await store.write('trunkierung-ausgabe.md', `${out.join('\n')}\n`);
  await store.finalize();
}

main().catch((e) => { process.stderr.write(`R19-C TRUNKIERUNG FEHLER: ${e?.stack || e}\n`); process.exitCode = 1; });
