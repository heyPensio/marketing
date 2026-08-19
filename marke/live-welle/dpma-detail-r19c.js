#!/usr/bin/env node
'use strict';
// R19-C, Teil 2: (A) DPMA-Registerauskunft je Treffer (Klassen/Status/Inhaber)
// und (B) Getrennt-Schreibweisen-Laeufe ("Stay Ahead", "Inn Sight", "Wise Stay")
// ueber DPMA/TMview/EUIPO.
// Anlass fuer (B): Die DPMA-Trefferliste zu "Stayahead" enthielt zwei
// EM-Marken "STAY AHEAD" (getrennt), die die EUIPO-CONTAINS-Suche auf die
// ZUSAMMENGESCHRIEBENE Form nicht findet — eine Null der zusammengeschriebenen
// Form belegt also nur diese Zeichenfolge, nicht den Aehnlichkeitsraum.
// Positivkontrolle (A): apaleo DE 3020172025731 — unabhaengig bekannter Sollwert
// aus der Trefferliste ("Marke nicht eingetragen") und aus TMview (Kl. 42, Beendet).
// Positivkontrolle (B): "Stay Ahead" MUSS die beiden EM-Marken finden (Soll >= 2).

const kern = require('./vertiefung-r19c-kern.js');
const crypto = require('node:crypto');

const TREFFER = [
  { zeichen: 'apaleo (Kontrolle)', nr: '3020172025731', amt: 'DE' },
  { zeichen: 'Innsight', nr: '3020242492945', amt: 'DE' },
  { zeichen: 'Stayahead', nr: '1100039', amt: 'IR' },
  { zeichen: 'Stayahead', nr: '1779697', amt: 'IR' },
  { zeichen: 'Stayahead', nr: '010385284', amt: 'EM' },
  { zeichen: 'Stayahead', nr: '013604641', amt: 'EM' },
];

const GETRENNT = ['Stay Ahead', 'Inn Sight', 'Wise Stay'];

function feldwerte(html) {
  // Registerauskunft ist eine Definitionsliste/Tabelle aus Bezeichner + Wert.
  const paare = [];
  for (const m of String(html).matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const zellen = [...m[1].matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((c) => kern.stripTags(c[1]));
    if (zellen.length >= 2 && zellen[0]) paare.push(`${zellen[0]} = ${zellen.slice(1).join(' | ')}`);
  }
  return paare;
}

async function main() {
  const { store, directory } = await kern.neuerLauf('dpma-detail');
  const token = `qzx7r19c${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${crypto.randomBytes(4).toString('hex')}`;
  const out = [];
  const say = (l) => { out.push(l); process.stdout.write(`${l}\n`); };
  say(`# R19-C DPMA-Registerauskuenfte + Getrennt-Schreibweisen — ${kern.berlinNow()}`);
  say(`Rohbelege: ${directory}`);
  say('');

  say('## A) Registerauskunft je Treffer');
  const dpma = await kern.discoverDpma(store);
  say(`- DPMA-Discovery (fuer die Session-Cookies): ${dpma.discoveryPass}`);
  say('');
  for (const t of TREFFER) {
    const url = `https://register.dpma.de/DPMAregister/marke/register/${encodeURIComponent(t.nr)}/${encodeURIComponent(t.amt)}`;
    const r = await kern.liveRequest(store, `detail-${t.amt}-${t.nr}`, url, { jar: dpma.jar, headers: { referer: 'https://register.dpma.de/DPMAregister/marke/basis' } });
    say(`### ${t.zeichen} — ${t.amt} ${t.nr}`);
    say(`- URL: ${url}`);
    say(`- HTTP ${r.status}; Titel="${kern.extractTitle(r.text) || '-'}"`);
    say(`- Beleg: \`${kern.evidenceRef(r)}\``);
    const paare = feldwerte(r.text);
    if (paare.length) for (const p of paare.slice(0, 40)) say(`    - ${p.slice(0, 500)}`);
    else say(`    - Keine Feld/Wert-Paare extrahierbar; Textauszug: ${kern.stripTags(r.text).slice(0, 600)}`);
    say('');
  }

  say('## B) Getrennt-Schreibweisen (Ergaenzung des Varianten-Rasters)');
  const tmview = await kern.discoverTmview(store);
  const euipo = await kern.discoverEuipo(store);
  say(`- TMview-Discovery: ${tmview.discoveryPass} · EUIPO-Discovery: ${euipo.discoveryPass}`);
  say('');
  say('| Suchbegriff | DPMA marHits | TMview gesamt | TMview DE/EM-Zeilen | EUIPO | Belege |');
  say('|---|---:|---:|---|---:|---|');
  for (const begriff of [...GETRENNT, token]) {
    const d = await kern.dpmaQuery(store, dpma, `getrennt-dpma-${begriff}`, begriff);
    const t = await kern.tmviewQuery(store, tmview, `getrennt-tmview-${begriff}`, begriff, '100');
    const e = await kern.euipoQuery(store, euipo, `getrennt-euipo-${begriff}`, begriff);
    const deEm = (t.rows || []).filter((row) => ['EM', 'DE'].includes(row.tmOffice) || (row.tProtection || []).some((p) => ['EM', 'DE'].includes(p)))
      .map((row) => `${row.tmName} (${row.tmOffice}, Kl. ${(row.niceClass || []).join(',')}, ${row.tradeMarkStatus}, ${(row.applicantName || []).join('; ')})`);
    say(`| ${begriff} | ${d.count ?? 'n.a.'} | ${t.count ?? 'n.a.'} | ${deEm.length ? deEm.join(' · ').replace(/\|/g, '\\|') : '—'} | ${e.count ?? 'n.a.'} | \`${d.response ? kern.evidenceRef(d.response) : '-'}\`; \`${t.response ? kern.evidenceRef(t.response) : '-'}\`; \`${e.response ? kern.evidenceRef(e.response) : '-'}\` |`);
  }
  say('');
  say(`Nulltoken dieses Laufs: ${token} (Soll ueberall 0).`);
  say('Positivkontrolle B: "Stay Ahead" muss die beiden aus der DPMA-Trefferliste bekannten');
  say('EM-Marken (010385284 / 013604641) erreichen — sonst ist der Getrennt-Lauf nicht belastbar.');
  await store.write('dpma-detail-ausgabe.md', `${out.join('\n')}\n`);
  await store.finalize();
}

main().catch((e) => { process.stderr.write(`R19-C DETAIL FEHLER: ${e?.stack || e}\n`); process.exitCode = 1; });
