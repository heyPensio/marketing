#!/usr/bin/env node
'use strict';
// R19-C: holt die DPMAregister-TREFFERLISTE (nicht nur die Smartsearch-Zahl)
// je Finalist ueber den marLink der Smartsearch-Antwort und legt den Rohabzug ab.
// Positivkontrolle im selben Lauf: "apaleo" (Soll: 1 Treffer, DE 3020172025731,
// Kl. 42, Status laut TMview "Beendet") und ein Nulltoken (Soll: 0).
// Ergebnis kann eine Tapestry-/SPA-Shell sein — dann ist der Kanal
// "nicht pruefbar" und der Browser uebernimmt; das entscheidet die Kontrolle.

const kern = require('./vertiefung-r19c-kern.js');
const crypto = require('node:crypto');

const ZEICHEN = ['apaleo', 'Wisestay', 'Innsight', 'Stayahead'];

function trefferzeilen(html) {
  // DPMAregister-Trefferliste: Tabellenzeilen mit Registernummer-Link.
  const rows = [...String(html).matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((m) => kern.stripTags(m[1])).filter(Boolean);
  return rows;
}

async function main() {
  const { store, directory } = await kern.neuerLauf('dpma-treffer');
  const token = `qzx7r19c${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${crypto.randomBytes(4).toString('hex')}`;
  const out = [];
  const say = (l) => { out.push(l); process.stdout.write(`${l}\n`); };
  say(`# R19-C DPMA-Trefferlisten — ${kern.berlinNow()}`);
  say(`Rohbelege: ${directory}`);
  say('');

  const dpma = await kern.discoverDpma(store);
  say(`Discovery: ${dpma.discoveryPass}`);
  say('');

  for (const zeichen of [...ZEICHEN, token]) {
    const smart = await kern.dpmaQuery(store, dpma, `smart-${zeichen}`, zeichen);
    const marLink = smart.parsed?.marLink;
    say(`## ${zeichen} — marHits=${smart.count ?? 'nicht auslesbar'}`);
    say(`- Smartsearch-Beleg: \`${smart.response ? kern.evidenceRef(smart.response) : 'kein Abruf'}\``);
    if (!marLink) { say('- marLink fehlt — Trefferliste nicht abrufbar (nicht pruefbar).'); say(''); continue; }
    const url = new URL(marLink, 'https://register.dpma.de/').href;
    const liste = await kern.liveRequest(store, `liste-${zeichen}`, url, {
      jar: dpma.jar,
      headers: { referer: 'https://register.dpma.de/DPMAregister/marke/basis' },
    });
    const text = kern.stripTags(liste.text);
    const zeilen = trefferzeilen(liste.text);
    say(`- Trefferlisten-URL: ${url}`);
    say(`- HTTP ${liste.status}; Titel="${kern.extractTitle(liste.text) || '-'}"; Textlaenge=${text.length}; Tabellenzeilen=${zeilen.length}`);
    say(`- Beleg: \`${kern.evidenceRef(liste)}\``);
    if (zeilen.length) for (const z of zeilen.slice(0, 25)) say(`    - ${z.slice(0, 400)}`);
    else say(`    - Textauszug (erste 700 Zeichen): ${text.slice(0, 700)}`);
    say('');
  }

  say('Kontroll-Deutung: Traegt die Liste zu "apaleo" GENAU EINEN lesbaren Treffer mit Registernummer,');
  say('ist der Kanal gangbar; liefert sie fuer alle Zeichen dieselbe Shell, ist er nicht pruefbar (Browser).');
  await store.write('dpma-treffer-ausgabe.md', `${out.join('\n')}\n`);
  await store.finalize();
}

main().catch((e) => { process.stderr.write(`R19-C DPMA-TREFFER FEHLER: ${e?.stack || e}\n`); process.exitCode = 1; });
