#!/usr/bin/env node
'use strict';
// R19-C, Teil 4: Handles Instagram/Facebook per HTTP NEU messen.
// Das "nicht pruefbar" der Phase-0-Messung (18.08.) misst einen Kanal zu einem
// Zeitpunkt — es wird heute wiederholt, nicht uebernommen.
// Kontrollen je Plattform: bekanntes Profil (Soll: als vorhanden erkennbar) und
// Zufallshandle (Soll: als nicht vorhanden erkennbar). Nur wenn BEIDE
// unterscheidbar antworten, tragen die Kandidatenzeilen.

const kern = require('./vertiefung-r19c-kern.js');
const crypto = require('node:crypto');

const KANDIDATEN = ['wisestay', 'innsight', 'stayahead'];

async function probe(store, plattform, wert) {
  const url = plattform === 'Instagram'
    ? `https://www.instagram.com/${encodeURIComponent(wert)}/`
    : `https://www.facebook.com/${encodeURIComponent(wert)}`;
  const r = await kern.liveRequest(store, `${plattform}-${wert}`, url, { jar: new kern.CookieJar() });
  const text = r.text;
  const marker = {
    status: r.status,
    titel: kern.extractTitle(text) || '-',
    canonical: kern.extractCanonical(text) || '-',
    ogUrl: (text.match(/property=["']og:url["'][^>]*content=["']([^"']+)["']|content=["']([^"']+)["'][^>]*property=["']og:url["']/i) || []).slice(1).find(Boolean) || '-',
    ogTitle: (text.match(/property=["']og:title["'][^>]*content=["']([^"']+)["']/i) || [])[1] || '-',
    fehlerseite: /PolarisErrorRoot|httpErrorPage|page isn't available|Seite ist nicht verf|content isn't available|Inhalte nicht verf/i.test(text),
    bytes: text.length,
  };
  return { r, marker };
}

async function main() {
  const { store, directory } = await kern.neuerLauf('handles');
  const token = `QzX7R19c${new Date().toISOString().slice(0, 10).replace(/-/g, '')}Aa${crypto.randomBytes(3).toString('hex')}`;
  const out = [];
  const say = (l) => { out.push(l); process.stdout.write(`${l}\n`); };
  say(`# R19-C Handles Instagram/Facebook (HTTP-Neumessung) — ${kern.berlinNow()}`);
  say(`Rohbelege: ${directory}`);
  say(`Zufalls-Handle (Negativkontrolle): ${token}`);
  say('');
  say('| Plattform | Handle | Rolle | HTTP | Titel | og:title | og:url | canonical | Fehlerseiten-Marker | Bytes | Beleg |');
  say('|---|---|---|---:|---|---|---|---|---|---:|---|');

  for (const plattform of ['Instagram', 'Facebook']) {
    const positiv = plattform === 'Instagram' ? 'instagram' : 'apaleoGmbH';
    const faelle = [
      { wert: positiv, rolle: 'Positivkontrolle' },
      { wert: token, rolle: 'Negativkontrolle' },
      ...KANDIDATEN.map((k) => ({ wert: k, rolle: 'Kandidat' })),
    ];
    for (const fall of faelle) {
      const { r, marker } = await probe(store, plattform, fall.wert);
      const z = (v) => String(v).replace(/\|/g, '\\|').slice(0, 60);
      say(`| ${plattform} | ${fall.wert} | ${fall.rolle} | ${marker.status ?? 'Netzfehler'} | ${z(marker.titel)} | ${z(marker.ogTitle)} | ${z(marker.ogUrl)} | ${z(marker.canonical)} | ${marker.fehlerseite} | ${marker.bytes} | \`${kern.evidenceRef(r)}\` |`);
    }
  }

  say('');
  say('Auswertungsregel: Der Kanal ist fuer eine Plattform nur dann gangbar, wenn sich die Zeile');
  say('"Positivkontrolle" von der Zeile "Negativkontrolle" in mindestens einem Marker unterscheidet.');
  say('Sind beide gleich, sind ALLE Kandidatenzeilen dieser Plattform ohne Aussagewert (Werkzeugbefund).');
  await store.write('handles-ausgabe.md', `${out.join('\n')}\n`);
  await store.finalize();
}

main().catch((e) => { process.stderr.write(`R19-C HANDLES FEHLER: ${e?.stack || e}\n`); process.exitCode = 1; });
