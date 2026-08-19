#!/usr/bin/env node
'use strict';
// R19-C, Teil 3:
// (A) Domain-Marktlage der belegten Domains (Parking-/Marktplatzseite abrufen,
//     Preis nur uebernehmen, wenn er im Rohabzug steht — sonst Nachlade-Befund).
// (B) Klaerung der beiden IR-Marken aus der DPMA-Trefferliste zu "Stayahead"
//     ueber die TMview-Nummernsuche (Zeichen/Klassen/Inhaber/Status).
// (C) Varianten-Raster je Finalist ueber TMview (Sammelkanal, Fuzzy) mit
//     DE/EM-Filter — phonetische Varianten nach Verfahren § 3.2.
// Kontrollen: je Kanal ein Nulltoken (Soll 0) und ein bekannter Sollwert.

const kern = require('./vertiefung-r19c-kern.js');
const crypto = require('node:crypto');

const DOMAIN_SEITEN = [
  { label: 'wisestay.com (Atom.com-NS)', url: 'https://www.atom.com/name/wisestay' },
  { label: 'wisestay.com direkt', url: 'http://wisestay.com/' },
  { label: 'innsight.de direkt', url: 'http://innsight.de/' },
  { label: 'innsight.com direkt', url: 'http://innsight.com/' },
  { label: 'stayahead.de direkt', url: 'http://stayahead.de/' },
  { label: 'stayahead.com direkt', url: 'http://stayahead.com/' },
  { label: 'Kontrolle: hey-pensio.de (belegt eigene Domain)', url: 'http://hey-pensio.de/' },
];

const IR_NUMMERN = ['1100039', '1779697'];

const VARIANTEN = {
  Wisestay: ['Wisestay', 'Wysestay', 'Weisstay', 'Wisestey', 'Wisestai'],
  Innsight: ['Innsight', 'Insight', 'Innsite', 'Innsyght', 'Inzight'],
  Stayahead: ['Stayahead', 'Steyahead', 'Stayahed', 'Stayaheadt', 'Staiahead'],
};

const PREIS_MUSTER = /(?:USD|EUR|\$|€)\s?[\d.,]{2,}|[\d.,]{2,}\s?(?:USD|EUR|€|\$)/gi;

async function main() {
  const { store, directory } = await kern.neuerLauf('domain-varianten');
  const token = `qzx7r19c${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${crypto.randomBytes(4).toString('hex')}`;
  const out = [];
  const say = (l) => { out.push(l); process.stdout.write(`${l}\n`); };
  say(`# R19-C Domain-Marktlage · IR-Marken · Varianten-Raster — ${kern.berlinNow()}`);
  say(`Rohbelege: ${directory}`);
  say('');

  say('## A) Domain-Marktlage (was steht auf der Seite hinter der Domain?)');
  for (const seite of DOMAIN_SEITEN) {
    const r = await kern.liveRequest(store, `web-${seite.label}`, seite.url, { jar: new kern.CookieJar() });
    const text = kern.stripTags(r.text);
    const preise = [...new Set((text.match(PREIS_MUSTER) || []).slice(0, 12))];
    say(`- **${seite.label}** → HTTP ${r.status ?? 'Netzfehler'}; Endziel ${r.url}`);
    say(`  - Titel: ${kern.extractTitle(r.text) || '-'}`);
    say(`  - Textlaenge: ${text.length}; Preis-Muster im Rohabzug: ${preise.length ? preise.join(' · ') : 'KEINE'}`);
    say(`  - Textauszug: ${text.slice(0, 260).replace(/\s+/g, ' ')}`);
    say(`  - Beleg: \`${kern.evidenceRef(r)}\``);
  }
  say('');
  say('Deutung A: Ein Preis wird nur uebernommen, wenn er oben im Rohabzug steht. Fehlt er auf einer');
  say('Marktplatzseite, ist das ein NACHLADE-Befund (Werte clientseitig), kein "kein Preis".');
  say('');

  say('## B) IR-Marken aus der DPMA-Trefferliste zu "Stayahead"');
  const tmview = await kern.discoverTmview(store);
  say(`- TMview-Discovery: ${tmview.discoveryPass}`);
  for (const nr of [...IR_NUMMERN, token]) {
    const t = await kern.tmviewQuery(store, tmview, `ir-${nr}`, nr, '100');
    say(`- Nummernsuche "${nr}": Treffer=${t.count ?? 'nicht auslesbar'} · Beleg \`${t.response ? kern.evidenceRef(t.response) : '-'}\``);
    for (const row of (t.rows || []).slice(0, 10)) {
      say(`    - ${row.tmName} · Amt ${row.tmOffice} · Schutz ${(row.tProtection || []).join('/')} · Nr ${row.applicationNumber} · Kl. ${(row.niceClass || []).join(',')} · ${row.tradeMarkStatus} · ${(row.applicantName || []).join('; ')}`);
    }
  }
  say('');

  say('## C) Varianten-Raster je Finalist (TMview, DE/EM-relevante Zeilen)');
  say('| Finalist | Variante | TMview gesamt | DE/EM-Zeilen | Beleg |');
  say('|---|---|---:|---|---|');
  for (const [finalist, liste] of Object.entries(VARIANTEN)) {
    for (const v of liste) {
      const t = await kern.tmviewQuery(store, tmview, `variante-${finalist}-${v}`, v, '100');
      const deEm = (t.rows || []).filter((row) => ['EM', 'DE'].includes(row.tmOffice) || (row.tProtection || []).some((p) => ['EM', 'DE'].includes(p)))
        .map((row) => `${row.tmName} (${row.tmOffice}, Kl. ${(row.niceClass || []).join(',')}, ${row.tradeMarkStatus})`);
      say(`| ${finalist} | ${v} | ${t.count ?? 'n.a.'} | ${deEm.length ? deEm.slice(0, 8).join(' · ').replace(/\|/g, '\\|') : '—'} | \`${t.response ? kern.evidenceRef(t.response) : '-'}\` |`);
    }
  }
  const tNull = await kern.tmviewQuery(store, tmview, `variante-nullkontrolle`, token, '100');
  say(`| (Kontrolle) | ${token} | ${tNull.count ?? 'n.a.'} | — | \`${tNull.response ? kern.evidenceRef(tNull.response) : '-'}\` |`);
  say('');
  say('Deutung C: TMview sucht unscharf; die Zahl "gesamt" ist ein Aehnlichkeitsraum, keine Kollisionsaussage.');
  say('Gewertet werden nur DE/EM-Zeilen im Klassen-Suchraum (Verfahren § 2.2: 9/35/36/37/38/41/42 + 43).');

  await store.write('domain-varianten-ausgabe.md', `${out.join('\n')}\n`);
  await store.finalize();
}

main().catch((e) => { process.stderr.write(`R19-C DOMAIN/VARIANTEN FEHLER: ${e?.stack || e}\n`); process.exitCode = 1; });
