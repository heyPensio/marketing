// Auswertung eines messlauf.js-Laufordners: je Kandidat (Variante 1) Domain-Status .de/.com,
// DPMA-Treffer, EUIPO-Treffer, TMview-Treffer gesamt und davon Ämter EM/DE/WO (mit Klassen/Status).
// Aufruf: node marke/live-welle/auswertung-lauf.js <laufordner> <kandidatendatei>
// Reine Extraktion — kein Urteil (das trifft die Leitsession im Bericht).
'use strict';
const fs = require('fs');
const path = require('path');
const [dir, kand] = process.argv.slice(2);
if (!dir || !kand) { console.error('Aufruf: node auswertung-lauf.js <laufordner> <kandidatendatei>'); process.exit(2); }
const files = fs.readdirSync(dir);
const rows = fs.readFileSync(kand, 'utf8').split(/\r?\n/).filter(l => l.trim() && !l.startsWith('#')).map(l => l.split(';'));
const pick = (id, suffix) => files.find(f => f.includes(`${id}-v01-${suffix}`));
const readJson = (f) => { try { return JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); } catch (e) { return null; } };
console.log('| ID | Name | .de | .com | DPMA | EUIPO | TMview ges. | TMview EM/DE/WO (Zeichen · Amt · Klassen · Status) |');
console.log('|---|---|---|---|---|---|---|---|');
for (const [id, name] of rows) {
  const dom = (tld) => { const f = pick(id, `domain-${tld}.body.json`); if (!f) return 'FEHLT'; const j = readJson(f); const meta = readJson(pick(id, `domain-${tld}.meta.json`)); const st = meta && meta.responseChain ? meta.responseChain.slice(-1)[0].status : (j && j.ldhName ? 200 : '?'); return (j && j.ldhName) ? 'REG' : (st === 404 || (j && j.errorCode === 404) ? 'frei' : `?${st}`); };
  const dp = readJson(pick(id, 'dpma.body.json') || ''); const dpma = dp ? dp.marHits : 'FEHLT';
  const eu = readJson(pick(id, 'euipo.body.json') || ''); const euipo = eu ? eu.total : 'FEHLT';
  const tm = readJson(pick(id, 'tmview.body.json') || '');
  let tmTotal = 'FEHLT', tmRel = '';
  if (tm) { tmTotal = tm.totalResults; tmRel = (tm.tradeMarks || []).filter(x => ['EM', 'DE', 'WO'].includes(x.tmOffice)).map(x => `${x.tmName} · ${x.tmOffice} · ${(x.niceClass || []).join('/')} · ${x.tradeMarkStatus}`).join('<br>'); }
  console.log(`| ${id} | ${name} | ${dom('de')} | ${dom('com')} | ${dpma} | ${euipo} | ${tmTotal} | ${tmRel || '—'} |`);
}
