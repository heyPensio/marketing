// Schnellcheck (Leitsession, R19 Welle 5): nur Domains .de/.com (RDAP) + DPMA-Smartsearch + EUIPO eSearch je Wort.
// Kein Handles-/Websuche-Teil (Zeit). Positiv-/Negativkontrolle je Kanal am ANFANG UND ENDE des Laufs (R20-Haertung, R19-Lehre "Kanaele kippen unter Last"); Rohantworten + Hashes in --aus.
// Aufruf: node marke/live-welle/schnellcheck.js --liste=<datei mit einem Wort je Zeile> --aus=<ordner>
// Ausgabe: Markdown-Tabelle (kein Urteil).
'use strict';
const fs = require('fs'); const path = require('path'); const crypto = require('crypto');
const arg = (k) => (process.argv.find(a => a.startsWith(`--${k}=`)) || '').split('=').slice(1).join('=');
const liste = arg('liste'), aus = arg('aus');
if (!liste || !aus) { console.error('Aufruf: --liste=<datei> --aus=<ordner>'); process.exit(2); }
fs.mkdirSync(aus, { recursive: true });
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36';
let n = 0; const hashes = [];
async function req(label, url, opt = {}) {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(url, { ...opt, headers: { 'user-agent': UA, accept: 'application/json', 'accept-language': 'de-DE,de;q=0.9,en;q=0.8', ...(opt.headers || {}) }, redirect: 'follow' });
      const text = await r.text();
      const f = `${String(++n).padStart(3, '0')}-${label}.txt`;
      fs.writeFileSync(path.join(aus, f), text);
      hashes.push(`${crypto.createHash('sha256').update(text).digest('hex')}  ${f}`);
      return { status: r.status, text };
    } catch (e) { if (i === 2) return { status: 'ERR', text: String(e) }; await new Promise(r => setTimeout(r, 1000 * (i + 1))); }
  }
}
const rdap = async (label, dom, tld) => { const u = tld === 'de' ? `https://rdap.denic.de/domain/${dom}` : `https://rdap.verisign.com/com/v1/domain/${dom}`; const r = await req(label, u); let reg = null; try { reg = Boolean(JSON.parse(r.text).ldhName); } catch (e) { reg = null; } return r.status === 200 && reg ? 'REG' : (r.status === 404 ? 'frei' : `?${r.status}`); };
const dpma = async (label, q) => { const r = await req(label, `https://register.dpma.de/DPMAregister/smartsearch?queryString=${encodeURIComponent(q)}`); try { const j = JSON.parse(r.text); return j.marErrors === '' ? Number(j.marHits) : `ERR:${j.marErrors}`; } catch (e) { return `?${r.status}`; } };
const euipoBody = (q) => new URLSearchParams({ start: '0', rows: '100', searchMode: 'basic', criterion_1: 'ApplicationNumber', term_1: q, operator_1: 'OR', condition_1: 'CONTAINS', criterion_2: 'MarkVerbalElementText', term_2: q, operator_2: 'OR', condition_2: 'CONTAINS', criterion_3: 'OppositionIdentifier', term_3: q, operator_3: 'OR', condition_3: 'CONTAINS', sortField: 'ApplicationNumber', sortOrder: 'asc' }).toString();
const euipo = async (label, q) => { const r = await req(label, 'https://euipo.europa.eu/copla/ctmsearch/json', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', origin: 'https://euipo.europa.eu', referer: 'https://euipo.europa.eu/eSearch/' }, body: euipoBody(q) }); try { const j = JSON.parse(r.text); if (!Number.isFinite(Number(j.total)) || !Array.isArray(j.items)) return `?schema`; const rel = j.items.filter(it => /(^|[^0-9])(9|35|42|43)([^0-9]|$)/.test(String(it.nice || ''))).length; return `${j.total} (9/35/42/43: ${rel})`; } catch (e) { return `?${r.status}`; } };
// Kontrollblock als Funktion: laeuft am ANFANG und am ENDE des Laufs
// (R19-Lehre: Kanaele kippen unter Last MITTEN im Lauf - 218/284 als 429
// bei gruenen Anfangs-Kontrollen; gruen nur, wenn BEIDE Durchgaenge treffen).
async function kontrollen(phase, neg) {
  console.log(`\n| Kontrolle (${phase}) | .de | .com | DPMA | EUIPO |\n|---|---|---|---|---|`);
  console.log(`| positiv (hey-pensio.de / apaleo.com / apaleo / APPLE) | ${await rdap(`ctl-de-pos-${phase}`, 'hey-pensio.de', 'de')} | ${await rdap(`ctl-com-pos-${phase}`, 'apaleo.com', 'com')} | ${await dpma(`ctl-dpma-pos-${phase}`, 'apaleo')} | ${await euipo(`ctl-euipo-pos-${phase}`, 'APPLE')} |`);
  console.log(`| negativ (${neg}) | ${await rdap(`ctl-de-neg-${phase}`, neg + '.de', 'de')} | ${await rdap(`ctl-com-neg-${phase}`, neg + '.com', 'com')} | ${await dpma(`ctl-dpma-neg-${phase}`, neg)} | ${await euipo(`ctl-euipo-neg-${phase}`, neg)} |`);
}
(async () => {
  const neg = 'qzx7w5' + Math.random().toString(36).slice(2, 8);
  await kontrollen('start', neg);
  console.log('\n| Wort | .de | .com | DPMA (marHits) | EUIPO gesamt (davon Kl. 9/35/42/43) |\n|---|---|---|---|---|');
  const words = fs.readFileSync(liste, 'utf8').split(/\r?\n/).map(s => s.trim()).filter(s => s && !s.startsWith('#'));
  for (const w of words) {
    const l = w.toLowerCase();
    console.log(`| ${w} | ${await rdap(`${l}-de`, l + '.de', 'de')} | ${await rdap(`${l}-com`, l + '.com', 'com')} | ${await dpma(`${l}-dpma`, w)} | ${await euipo(`${l}-euipo`, w)} |`);
  }
  await kontrollen('ende', neg);
  fs.writeFileSync(path.join(aus, 'hashes.txt'), hashes.join('\n') + '\n');
  console.log(`\nAbrufe: ${n}; Zeit: ${new Date().toISOString()}; Rohbelege: ${aus}`);
})();
