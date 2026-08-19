#!/usr/bin/env node
'use strict';
// R19-C: liest die TMview-Rohbelege des Vertiefungslaufs und tabelliert
// je Treffer Zeichen/Amt/Schutzgebiet/Klassen/Status/Inhaber/Datum.
// Aufruf: node marke/live-welle/tmview-auswertung-r19c.js <laufordner>

const fs = require('node:fs');
const path = require('node:path');

const dir = process.argv[2];
if (!dir) { process.stderr.write('Aufruf: node tmview-auswertung-r19c.js <laufordner>\n'); process.exit(1); }

const dateien = fs.readdirSync(dir).filter((f) => /tmview.*\.body\.json$/.test(f)).sort();
for (const datei of dateien) {
  const j = JSON.parse(fs.readFileSync(path.join(dir, datei), 'utf8'));
  const rows = Array.isArray(j.tradeMarks) ? j.tradeMarks : [];
  process.stdout.write(`\n### ${datei} — totalResults=${j.totalResults}, Rows=${rows.length}\n`);
  if (!rows.length) continue;
  process.stdout.write('| Zeichen | Amt | Schutzgebiet | Nr | Klassen | Status | Inhaber | Anmeldung |\n|---|---|---|---|---|---|---|---|\n');
  for (const t of rows) {
    const zelle = (v) => String(v ?? '-').replace(/\|/g, '\\|');
    process.stdout.write(`| ${zelle(t.tmName)} | ${zelle(t.tmOffice)} | ${zelle((t.tProtection || []).join('/'))} | ${zelle(t.applicationNumber)} | ${zelle((t.niceClass || []).join(','))} | ${zelle(t.tradeMarkStatus)} | ${zelle((t.applicantName || []).join('; '))} | ${zelle(String(t.applicationDate || '-').slice(0, 10))} |\n`);
  }
  // Selbstkontrolle: Vollzaehligkeit Rows vs. totalResults
  if (rows.length !== Number(j.totalResults)) {
    process.stdout.write(`\n⚠️ Rows (${rows.length}) != totalResults (${j.totalResults}) — Seite 1 unvollstaendig, weitere Seiten nicht abgerufen.\n`);
  }
}
