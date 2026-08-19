#!/usr/bin/env node
'use strict';
// R19-C: DPMA-Registerauskunft fuer beliebige DE-Aktenzeichen.
// Aufruf: node marke/live-welle/dpma-auskunft-r19c.js <AKZ> [<AKZ> ...]
// Die Positivkontrolle laeuft IMMER mit: apaleo DE 3020172025731 muss die
// bekannten Felder liefern (Kl. 42, "Marke nicht eingetragen") — sonst ist der
// Kanal fuer diesen Lauf tot und die uebrigen Auskuenfte sind ohne Aussagewert.

const kern = require('./vertiefung-r19c-kern.js');

const KONTROLLE = { akz: '3020172025731', erwartet: /Marke nicht eingetragen/ };

function feldwerte(html) {
  const paare = [];
  for (const m of String(html).matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const zellen = [...m[1].matchAll(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((c) => kern.stripTags(c[1]));
    if (zellen.length >= 2 && zellen[0]) paare.push(`${zellen[0]} = ${zellen.slice(1).join(' | ')}`);
  }
  return paare;
}

async function main() {
  const akzListe = process.argv.slice(2).filter((a) => /^\d{6,}$/.test(a));
  if (!akzListe.length) { process.stderr.write('Aufruf: node dpma-auskunft-r19c.js <AKZ> [<AKZ> ...]\n'); process.exit(1); }
  const { store, directory } = await kern.neuerLauf('dpma-auskunft');
  const out = [];
  const say = (l) => { out.push(l); process.stdout.write(`${l}\n`); };
  say(`# R19-C DPMA-Registerauskunft — ${kern.berlinNow()}`);
  say(`Rohbelege: ${directory}`);
  say('');
  const dpma = await kern.discoverDpma(store);
  say(`Discovery (Session-Cookies): ${dpma.discoveryPass}`);
  say('');

  let kontrolleOk = false;
  for (const akz of [KONTROLLE.akz, ...akzListe.filter((a) => a !== KONTROLLE.akz)]) {
    const url = `https://register.dpma.de/DPMAregister/marke/register/${encodeURIComponent(akz)}/DE`;
    const r = await kern.liveRequest(store, `auskunft-DE-${akz}`, url, { jar: dpma.jar, headers: { referer: 'https://register.dpma.de/DPMAregister/marke/basis' } });
    const istKontrolle = akz === KONTROLLE.akz;
    if (istKontrolle) kontrolleOk = KONTROLLE.erwartet.test(kern.stripTags(r.text));
    say(`## ${istKontrolle ? 'POSITIVKONTROLLE ' : ''}DE ${akz}`);
    say(`- HTTP ${r.status}; Titel="${kern.extractTitle(r.text) || '-'}"`);
    if (istKontrolle) say(`- Kontrolle bestanden (erwarteter Aktenzustand gefunden): **${kontrolleOk}**`);
    say(`- Beleg: \`${kern.evidenceRef(r)}\``);
    const paare = feldwerte(r.text);
    if (paare.length) for (const p of paare.slice(0, 30)) say(`    - ${p.slice(0, 900)}`);
    else say(`    - Keine Feld/Wert-Paare extrahierbar; Auszug: ${kern.stripTags(r.text).slice(0, 500)}`);
    say('');
  }
  if (!kontrolleOk) say('⚠️ POSITIVKONTROLLE GEFALLEN — alle Auskuenfte dieses Laufs sind ohne Aussagewert.');
  await store.write('dpma-auskunft-ausgabe.md', `${out.join('\n')}\n`);
  await store.finalize();
}

main().catch((e) => { process.stderr.write(`R19-C AUSKUNFT FEHLER: ${e?.stack || e}\n`); process.exitCode = 1; });
