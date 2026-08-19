#!/usr/bin/env node
'use strict';
// R19-C Gegenkontrolle: Die EUIPO-/TMview-Nullen der drei Finalisten sind nur
// belastbar, wenn dieselbe Route bei einem Zeichen DERSELBEN Klasse (Kunstwort
// aus der Hotel-Software-Welle) einen unabhaengig bekannten Sollwert trifft.
// Sollwerte aus R19-B-Bericht § 2 (b), Lauf 18.08.2026:
//   Staywise : EUIPO 1 (Kl. 42 Registered) · TMview 7
//   Hostpilot: EUIPO 2 (Kl. 9/38/42)       · TMview 10
// Ausserdem: DPMA-Smartsearch-Gegenprobe fuer dieselben zwei Zeichen (1 / 2).
// Rohbelege: sensibel/rohbelege-R19-C/<laufordner>/

const path = require('node:path');
const kern = require('./vertiefung-r19c-kern.js');

const SOLL = [
  { name: 'Staywise', euipo: 1, tmview: 7, dpma: 1 },
  { name: 'Hostpilot', euipo: 2, tmview: 10, dpma: 2 },
];

async function main() {
  const { store, directory } = await kern.neuerLauf('gegenkontrolle');
  const out = [];
  const say = (l) => { out.push(l); process.stdout.write(`${l}\n`); };
  say(`# R19-C Gegenkontrolle Register — ${kern.berlinNow()}`);
  say(`Rohbelege: ${directory}`);
  say('Sollwerte unabhaengig bekannt aus protokolle/R19-B-bericht.md § 2 (b) (Messung 18.08.2026).');
  say('');
  say('| Zeichen | Kanal | Soll (R19-B, 18.08.) | Ist (19.08.) | trifft? | Beleg |');
  say('|---|---|---:|---:|---|---|');

  const dpma = await kern.discoverDpma(store);
  const tmview = await kern.discoverTmview(store);
  const euipo = await kern.discoverEuipo(store);

  for (const s of SOLL) {
    const d = await kern.dpmaQuery(store, dpma, `gk-${s.name}-dpma`, s.name);
    say(`| ${s.name} | DPMA | ${s.dpma} | ${d.count ?? 'nicht auslesbar'} | ${d.count === s.dpma ? 'JA' : 'NEIN'} | \`${d.response ? kern.evidenceRef(d.response) : 'kein Abruf'}\` |`);
    const t = await kern.tmviewQuery(store, tmview, `gk-${s.name}-tmview`, s.name, '100');
    say(`| ${s.name} | TMview | ${s.tmview} | ${t.count ?? 'nicht auslesbar'} | ${t.count === s.tmview ? 'JA' : 'NEIN'} | \`${t.response ? kern.evidenceRef(t.response) : 'kein Abruf'}\` |`);
    const e = await kern.euipoQuery(store, euipo, `gk-${s.name}-euipo`, s.name);
    say(`| ${s.name} | EUIPO | ${s.euipo} | ${e.count ?? 'nicht auslesbar'} | ${e.count === s.euipo ? 'JA' : 'NEIN'} | \`${e.response ? kern.evidenceRef(e.response) : 'kein Abruf'}\` |`);
    if (e.items) for (const it of e.items) say(`|  |  |  |  | EUIPO-Item | ${JSON.stringify(it).replace(/\|/g, '\\|').slice(0, 400)} |`);
    if (t.rows) {
      for (const r of t.rows.filter((row) => ['EM', 'DE', 'WO'].includes(row.tmOffice) || (row.tProtection || []).some((p) => ['EM', 'DE'].includes(p)))) {
        say(`|  |  |  |  | TMview DE/EM/WO | ${String(r.tmName).replace(/\|/g, '\\|')} · ${r.tmOffice} · Kl. ${(r.niceClass || []).join(',')} · ${r.tradeMarkStatus} · ${(r.applicantName || []).join('; ')} |`);
      }
    }
  }

  say('');
  say('Deutung: Trifft eine Zeile den Sollwert NICHT, ist der Kanal fuer den heutigen Lauf tot —');
  say('dann sind auch die Nullen der drei Finalisten in diesem Kanal Werkzeugbefunde, keine Sachbefunde.');
  await store.write('gegenkontrolle-ausgabe.md', `${out.join('\n')}\n`);
  await store.finalize();
}

main().catch((error) => { process.stderr.write(`R19-C GEGENKONTROLLE FEHLER: ${error?.stack || error}\n`); process.exitCode = 1; });
