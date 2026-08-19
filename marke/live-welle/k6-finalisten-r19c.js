#!/usr/bin/env node
'use strict';
// R19-C, Prüferbefund P-05: K6-Wörterbuch-Doppellauf für die DREI FINALISTEN.
// Der Bestandslauf `k6-doppellauf-shanks.js` trägt die fünf Favoriten der
// Welle 3 fest verdrahtet (Hostwise/Staywise/Hostpilot/Cleverhost/Checkmate) —
// für Wisestay/Innsight/Stayahead existierte kein K6-Lauf.
// Aufbau bewusst gleich wie im Bestandslauf (Vergleichbarkeit):
//   Sprachen DE/EN/TR/FR/ES/IT (E-K4, Katalog-Nachtrag 09.08.2026)
//   Doppellauf groß/klein (Wörterbuch-Negative sind case-sensitiv)
//   Positivkontrolle je Kanal (bekanntes Lemma) + Negativkontrolle (Zufallstoken)
// Zusätzlich: die Wortbestandteile einzeln, weil die Namen zusammengesetzt sind.

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const REPO = path.resolve(__dirname, '..', '..');
const AUS = path.join(REPO, 'sensibel', 'rohbelege-R19-C', `k6-finalisten-${new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')}`);
const SPRACHEN = ['de', 'en', 'tr', 'fr', 'es', 'it'];
const KONTROLLE = { de: 'Hotel', en: 'hotel', tr: 'otel', fr: 'hôtel', es: 'hotel', it: 'albergo' };
const NAMEN = ['Wisestay', 'Innsight', 'Stayahead'];
const BESTANDTEILE = ['wise', 'stay', 'inn', 'sight', 'ahead'];
const NEG = `qzx7r19c${crypto.randomBytes(4).toString('hex')}`;

async function status(lang, lemma) {
  const url = `https://${lang}.wiktionary.org/wiki/${encodeURIComponent(lemma)}`;
  for (let i = 0; i < 3; i += 1) {
    try {
      const r = await fetch(url, { headers: { 'user-agent': 'MKT-R19-C-K6/1.0 (contact via repo)' }, redirect: 'follow' });
      const body = await r.text();
      fs.writeFileSync(path.join(AUS, `${lang}-${lemma.replace(/[^A-Za-z0-9]/g, '_')}.html`), body);
      return { code: r.status, len: body.length };
    } catch (e) {
      if (i === 2) return { code: 'ERR', len: 0 };
      await new Promise((res) => setTimeout(res, 1000 * (i + 1)));
    }
  }
  return { code: 'ERR', len: 0 };
}

(async () => {
  fs.mkdirSync(AUS, { recursive: true });
  const out = [];
  const say = (l) => { out.push(l); process.stdout.write(`${l}\n`); };
  say(`# R19-C K6-Wörterbuch-Doppellauf, drei Finalisten — ${new Date().toISOString()}`);
  say(`Rohbelege: ${AUS} · Negativ-Token: ${NEG}`);
  say('');
  say('| Kanal | Positiv (Soll 200) | Negativ (Soll 404) | Kanal gangbar |');
  say('|---|---|---|---|');
  const kanalOk = {};
  for (const l of SPRACHEN) {
    const p = await status(l, KONTROLLE[l]);
    const n = await status(l, NEG);
    kanalOk[l] = p.code === 200 && n.code === 404;
    say(`| ${l} | ${KONTROLLE[l]}: ${p.code} | ${NEG}: ${n.code} | ${kanalOk[l] ? 'JA' : '**NEIN**'} |`);
  }
  say('');
  say('| Prüfwort | ' + SPRACHEN.map((l) => `${l} groß/klein`).join(' | ') + ' |');
  say('|---|' + SPRACHEN.map(() => '---').join('|') + '|');
  for (const nm of [...NAMEN, ...BESTANDTEILE]) {
    const cells = [];
    for (const l of SPRACHEN) {
      const g = await status(l, nm.charAt(0).toUpperCase() + nm.slice(1));
      const k = await status(l, nm.toLowerCase());
      cells.push(`${g.code} / ${k.code}`);
    }
    say(`| ${nm} | ${cells.join(' | ')} |`);
  }
  say('');
  say('Lesart: 404 in BEIDEN Schreibungen = kein Wörterbucheintrag = kein Bedeutungsrisiko');
  say('aus dieser Quelle. 200 heißt: Eintrag vorhanden, Bedeutung MUSS gelesen werden.');
  say('Ein Kanal mit "NEIN" oben entwertet seine ganze Spalte.');
  say('⚠️ Wiktionary deckt Slang nur teilweise ab — ein 404 ist kein Slang-Freibrief;');
  say('der EN-Muttersprachler-Check (K6-Kanal E) bleibt davon unberührt offen.');
  fs.writeFileSync(path.join(AUS, 'k6-ausgabe.md'), `${out.join('\n')}\n`);
})();
