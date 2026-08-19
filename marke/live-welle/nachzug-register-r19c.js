#!/usr/bin/env node
'use strict';
// R19-C Nachzug nach Prüferbefunden P-02 / P-03 / P-10:
// (A) TMview-Getrennt-Läufe VOLLSTÄNDIG holen (bisher nur Seite 1 = 100 von
//     307 bzw. 297 Zeilen) und alle DE/EM/WO-Zeilen im Klassen-Suchraum listen.
// (B) DPMA-Trefferlisten zu den Getrennt-Schreibweisen ziehen (bisher nur die
//     nackten Zahlen 12 bzw. 3 — Zeichen/Status der DE-wirksamen Treffer unbekannt).
// Kontrollen: TMview Positiv apaleo>=1 / Nulltoken=0 im selben Lauf;
// DPMA-Trefferliste Positiv apaleo = genau 1 Zeile / Nulltoken = 0 Zeilen.

const kern = require('./vertiefung-r19c-kern.js');
const crypto = require('node:crypto');

const SUCHRAUM = [9, 35, 36, 37, 38, 41, 42, 43];
const GETRENNT = ['Inn Sight', 'Stay Ahead', 'Wise Stay'];

function relevant(row) {
  const gebiete = [row.tmOffice, ...(row.tProtection || [])];
  const deEu = gebiete.some((g) => ['DE', 'EM'].includes(g));
  const kl = row.niceClass || [];
  return deEu && kl.some((k) => SUCHRAUM.includes(k));
}

function zeile(row) {
  return `${row.tmName} · Amt ${row.tmOffice} · Schutz ${(row.tProtection || []).join('/') || '-'} · Nr ${row.applicationNumber} · Kl. ${(row.niceClass || []).join(',')} · **${row.tradeMarkStatus}** · ${(row.applicantName || []).join('; ') || '-'} · ${String(row.applicationDate || '').slice(0, 10)}`;
}

async function tmviewSeite(store, discovery, label, query, page, pageSize = '100') {
  if (!discovery.endpoint) return { count: null, rows: null, response: null };
  const r = await kern.liveRequest(store, label, discovery.endpoint, {
    method: 'POST', jar: discovery.jar,
    headers: { accept: 'application/json', 'content-type': 'application/json', origin: 'https://www.tmdn.org', referer: 'https://www.tmdn.org/tmview/' },
    body: JSON.stringify({ page: String(page), pageSize, criteria: 'C', basicSearch: query }),
  });
  const p = kern.jsonBody(r);
  const ok = p && Number.isFinite(Number(p.totalResults)) && Array.isArray(p.tradeMarks);
  return { count: ok ? Number(p.totalResults) : null, pages: ok ? Number(p.totalPages) : null, rows: ok ? p.tradeMarks : null, response: r };
}

async function main() {
  const { store, directory } = await kern.neuerLauf('nachzug-register');
  const token = `qzx7r19c${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${crypto.randomBytes(4).toString('hex')}`;
  const out = [];
  const say = (l) => { out.push(l); process.stdout.write(`${l}\n`); };
  say(`# R19-C Nachzug Register (Prüferbefunde P-02/P-03/P-10) — ${kern.berlinNow()}`);
  say(`Rohbelege: ${directory} · Nulltoken: ${token}`);
  say('');

  // --- A) TMview vollständig
  say('## A) TMview-Getrennt-Läufe VOLLSTÄNDIG');
  const tmview = await kern.discoverTmview(store);
  const pos = await tmviewSeite(store, tmview, 'tmview-kontrolle-positiv', 'apaleo', 1, '30');
  const neg = await tmviewSeite(store, tmview, 'tmview-kontrolle-negativ', token, 1, '30');
  say(`- Kontrolle: apaleo=${pos.count ?? 'n.a.'} (Soll ≥1) · Nulltoken=${neg.count ?? 'n.a.'} (Soll 0) · Discovery=${tmview.discoveryPass}`);
  const kontrolleOk = (pos.count ?? 0) >= 1 && neg.count === 0;
  say(`- **Kanal gangbar: ${kontrolleOk}**`);
  say('');

  for (const q of GETRENNT) {
    const alle = [];
    let gesamt = null; let seiten = null;
    for (let page = 1; page <= 10; page += 1) {
      const s = await tmviewSeite(store, tmview, `tmview-voll-${q}-seite-${page}`, q, page);
      if (!s.rows) { say(`- ⚠️ "${q}" Seite ${page}: keine parsbare Antwort — Lauf unvollständig.`); break; }
      if (gesamt === null) { gesamt = s.count; seiten = s.pages; }
      alle.push(...s.rows);
      if (alle.length >= (gesamt ?? 0) || page >= (seiten ?? 1)) break;
    }
    const treffer = alle.filter(relevant);
    say(`### "${q}" — totalResults=${gesamt ?? 'n.a.'}, geholt=${alle.length} Zeilen (Seiten bis ${seiten ?? '?'})`);
    say(`Vollzähligkeit: ${alle.length}/${gesamt} ${alle.length === gesamt ? '✔ vollständig' : '⚠️ UNVOLLSTÄNDIG'}`);
    say(`DE/EM-wirksame Zeilen im Klassen-Suchraum (${SUCHRAUM.join('/')}): **${treffer.length}**`);
    for (const t of treffer) say(`  - ${zeile(t)}`);
    const lebend = treffer.filter((t) => /Eingetragen|Angemeldet|Registered|bewilligt/i.test(String(t.tradeMarkStatus)));
    say(`  → davon LEBEND (eingetragen/angemeldet): **${lebend.length}**`);
    say('');
  }

  // --- B) DPMA-Trefferlisten der Getrenntformen
  say('## B) DPMA-Trefferlisten der Getrennt-Schreibweisen');
  const dpma = await kern.discoverDpma(store);
  for (const q of ['apaleo', ...GETRENNT, token]) {
    const smart = await kern.dpmaQuery(store, dpma, `dpma-smart-${q}`, q);
    const marLink = smart.parsed?.marLink;
    say(`### "${q}" — marHits=${smart.count ?? 'nicht auslesbar'}${q === 'apaleo' ? ' (Positivkontrolle, Soll 1)' : ''}${q === token ? ' (Nullkontrolle, Soll 0)' : ''}`);
    if (!marLink) { say('- marLink fehlt — Trefferliste nicht abrufbar.'); continue; }
    const liste = await kern.liveRequest(store, `dpma-liste-${q}`, new URL(marLink, 'https://register.dpma.de/').href, {
      jar: dpma.jar, headers: { referer: 'https://register.dpma.de/DPMAregister/marke/basis' },
    });
    const zeilen = [...String(liste.text).matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((m) => kern.stripTags(m[1])).filter(Boolean);
    say(`- HTTP ${liste.status}; Tabellenzeilen inkl. Kopf: ${zeilen.length} · Beleg \`${kern.evidenceRef(liste)}\``);
    for (const z of zeilen.slice(1, 30)) say(`  - ${z.slice(0, 300)}`);
    say('');
  }

  await store.write('nachzug-register-ausgabe.md', `${out.join('\n')}\n`);
  await store.finalize();
}

main().catch((e) => { process.stderr.write(`R19-C NACHZUG FEHLER: ${e?.stack || e}\n`); process.exitCode = 1; });
