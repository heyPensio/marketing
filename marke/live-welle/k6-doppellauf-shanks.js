// K6-Wörterbuch-Doppellauf (Groß/Klein) für die fünf Favoriten der Welle 3
// Kanäle: de/en/tr/fr/es/it Wiktionary — HTTP-Status je Lemma (200 = Eintrag, 404 = kein Eintrag)
// Positivkontrolle je Kanal: ein bekannt vorhandenes Lemma (Substantiv groß für DE, klein für die anderen)
// Negativkontrolle: Zufalls-Token. Ausgabe als Markdown auf stdout; Rohantworten in --aus
'use strict';
const fs = require('fs');
const path = require('path');
const outDir = process.argv.find(a => a.startsWith('--aus='))?.slice(6) || null;
if (outDir) fs.mkdirSync(outDir, { recursive: true });
const langs = ['de', 'en', 'tr', 'fr', 'es', 'it'];
const names = ['Hostwise', 'Staywise', 'Hostpilot', 'Cleverhost', 'Checkmate'];
const controls = { de: 'Hotel', en: 'hotel', tr: 'otel', fr: 'hôtel', es: 'hotel', it: 'albergo' };
const neg = 'qzx7r19w3' + Math.random().toString(36).slice(2, 8);
async function status(lang, lemma) {
  const url = `https://${lang}.wiktionary.org/wiki/${encodeURIComponent(lemma)}`;
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { headers: { 'user-agent': 'MKT-R19-K6-Doppellauf/1.0 (contact via repo)' }, redirect: 'follow' });
      const body = await r.text();
      if (outDir) fs.writeFileSync(path.join(outDir, `${lang}-${lemma.replace(/[^A-Za-z0-9]/g, '_')}.html`), body);
      return { code: r.status, len: body.length };
    } catch (e) { if (i === 2) return { code: 'ERR', len: 0, err: String(e).slice(0, 60) }; await new Promise(r => setTimeout(r, 1000 * (i + 1))); }
  }
}
(async () => {
  const rows = [];
  // Kontrollen
  for (const l of langs) {
    const p = await status(l, controls[l]);
    const n = await status(l, neg);
    rows.push(`| KONTROLLE ${l} | pos ${controls[l]}: ${p.code} | neg ${neg}: ${n.code} |`);
    if (p.code !== 200 || n.code !== 404) console.log(`!! Kanal ${l} Kontrolle abweichend: pos=${p.code} neg=${n.code}`);
  }
  console.log('| Kanal | Positiv | Negativ |\n|---|---|---|\n' + rows.join('\n'));
  console.log('\n| Name | ' + langs.map(l => `${l} groß / klein`).join(' | ') + ' |\n|---|' + langs.map(() => '---').join('|') + '|');
  for (const nm of names) {
    const cells = [];
    for (const l of langs) {
      const g = await status(l, nm);
      const k = await status(l, nm.toLowerCase());
      cells.push(`${g.code} / ${k.code}`);
    }
    console.log(`| ${nm} | ${cells.join(' | ')} |`);
  }
  console.log(`\nAbrufe: ${langs.length * 2 + names.length * langs.length * 2}; Negativ-Token: ${neg}; Zeit: ${new Date().toISOString()}`);
})();
