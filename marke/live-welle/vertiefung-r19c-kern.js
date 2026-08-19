#!/usr/bin/env node
'use strict';
// R19-C Kern-Modul: HTTP-Abruf mit Rohbeleg-Ablage + Register-Discovery/Queries.
// Der Code ist inhaltsgleich mit den entsprechenden Teilen von
// vertiefung-r19c.js (dem gelaufenen Erstlauf-Skript, das unveraendert bleibt);
// hier als Modul, damit Folgelaeufe (Gegenkontrolle) dieselbe Route benutzen.

const fsp = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');

const REPO = path.resolve(__dirname, '..', '..');
const ROHBELEG_ROOT = path.join(REPO, 'sensibel', 'rohbelege-R19-C');
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36';
const DEFAULT_HEADERS = Object.freeze({
  'user-agent': USER_AGENT,
  accept: 'text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.7',
  'accept-language': 'de-DE,de;q=0.9,en;q=0.8',
  'cache-control': 'no-cache',
});
const RETRY_WAITS_MS = [0, 1000, 3000];
const TIMEOUT_MS = 15000;
const MAX_REDIRECTS = 6;

const sha256 = (d) => crypto.createHash('sha256').update(d).digest('hex');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const isoNow = () => new Date().toISOString();

function berlinNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('de-DE', {
    timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short', hourCycle: 'h23',
  }).formatToParts(date);
  const g = (t) => parts.find((p) => p.type === t)?.value || '';
  return `${g('year')}-${g('month')}-${g('day')} ${g('hour')}:${g('minute')}:${g('second')} ${g('timeZoneName')}`;
}

function runId(date = new Date()) {
  return `lauf-${date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')}-${crypto.randomBytes(3).toString('hex')}`;
}

const slug = (v) => String(v).normalize('NFKD').replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 90) || 'beleg';

function htmlDecode(v) {
  return String(v).replace(/&amp;/gi, '&').replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&#([0-9]+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)));
}
const stripTags = (v) => htmlDecode(String(v).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
const extractTitle = (html) => stripTags(String(html).match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
function extractCanonical(html) {
  const m = String(html).match(/<link\b[^>]*rel=["'][^"']*canonical[^"']*["'][^>]*href=["']([^"']+)["'][^>]*>|<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["'][^"']*canonical[^"']*["'][^>]*>/i);
  return htmlDecode(m?.[1] || m?.[2] || '');
}

class CookieJar {
  constructor() { this.byOrigin = new Map(); }
  absorb(url, headers) {
    const origin = new URL(url).origin;
    const bucket = this.byOrigin.get(origin) || new Map();
    const values = typeof headers.getSetCookie === 'function' ? headers.getSetCookie() : (headers.get('set-cookie') ? [headers.get('set-cookie')] : []);
    for (const line of values) {
      const first = String(line).split(';', 1)[0];
      const idx = first.indexOf('=');
      if (idx > 0) bucket.set(first.slice(0, idx).trim(), first.slice(idx + 1).trim());
    }
    if (bucket.size) this.byOrigin.set(origin, bucket);
  }
  header(url) {
    const bucket = this.byOrigin.get(new URL(url).origin);
    return bucket ? [...bucket].map(([n, v]) => `${n}=${v}`).join('; ') : '';
  }
}

class EvidenceStore {
  constructor(directory) { this.directory = path.resolve(directory); this.sequence = 0; this.entries = []; }
  async init() { await fsp.mkdir(this.directory, { recursive: true }); }
  async write(relative, data) {
    const normalized = relative.replace(/\\/g, '/');
    const target = path.resolve(this.directory, normalized);
    if (!target.startsWith(this.directory)) throw new Error('Belegpfad ausserhalb des Laufordners');
    await fsp.mkdir(path.dirname(target), { recursive: true });
    const bytes = Buffer.isBuffer(data) ? data : Buffer.from(String(data), 'utf8');
    await fsp.writeFile(target, bytes);
    const entry = { path: normalized, sha256: sha256(bytes), bytes: bytes.length };
    this.entries = this.entries.filter((e) => e.path !== normalized);
    this.entries.push(entry);
    return entry;
  }
  async writeJson(relative, value) { return this.write(relative, `${JSON.stringify(value, null, 2)}\n`); }
  nextPrefix(label) { this.sequence += 1; return `${String(this.sequence).padStart(3, '0')}-${slug(label)}`; }
  async finalize() {
    const lines = this.entries.filter((e) => e.path !== 'hashes.txt')
      .sort((a, b) => a.path.localeCompare(b.path, 'en'))
      .map((e) => `${e.sha256}  ${e.path}`);
    return this.write('hashes.txt', `${lines.join('\n')}\n`);
  }
}

async function neuerLauf(praefix = 'lauf') {
  const directory = path.join(ROHBELEG_ROOT, `${praefix}-${runId().replace(/^lauf-/, '')}`);
  const store = new EvidenceStore(directory);
  await store.init();
  return { store, directory };
}

async function fetchOnce(url, options) {
  let currentUrl = new URL(url).href;
  let method = String(options.method || 'GET').toUpperCase();
  let body = options.body;
  const jar = options.jar || new CookieJar();
  const responses = [];
  for (let redirects = 0; redirects <= MAX_REDIRECTS; redirects += 1) {
    const headers = { ...DEFAULT_HEADERS, ...(options.headers || {}) };
    const cookie = jar.header(currentUrl);
    if (cookie) headers.cookie = cookie;
    if (method === 'GET' || method === 'HEAD') { body = undefined; delete headers['content-type']; }
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(new Error(`Timeout nach ${options.timeoutMs} ms`)), options.timeoutMs);
    let response; let responseBody;
    try {
      response = await fetch(currentUrl, { method, headers, body, redirect: 'manual', signal: controller.signal });
      responseBody = Buffer.from(await response.arrayBuffer());
    } finally { clearTimeout(timer); }
    jar.absorb(currentUrl, response.headers);
    const location = response.headers.get('location');
    const redirectTarget = location ? new URL(location, currentUrl).href : null;
    const item = { url: currentUrl, status: response.status, body: responseBody, redirectTarget, contentType: response.headers.get('content-type') || '' };
    responses.push(item);
    if (![301, 302, 303, 307, 308].includes(response.status) || !redirectTarget) return { responses, final: item };
    if (redirects === MAX_REDIRECTS) throw new Error(`Mehr als ${MAX_REDIRECTS} Redirects ab ${url}`);
    if (response.status === 303 || ((response.status === 301 || response.status === 302) && method === 'POST')) { method = 'GET'; body = undefined; }
    currentUrl = redirectTarget;
  }
  throw new Error(`Redirect-Schleife ab ${url}`);
}

function extFor(contentType) {
  const t = String(contentType || '').toLowerCase();
  if (t.includes('json')) return 'json';
  if (t.includes('html')) return 'html';
  if (t.includes('javascript')) return 'js';
  if (t.startsWith('text/')) return 'txt';
  return 'bin';
}

async function liveRequest(store, label, url, options = {}) {
  const prefix = store.nextPrefix(label);
  const errors = [];
  for (let attempt = 0; attempt < RETRY_WAITS_MS.length; attempt += 1) {
    if (RETRY_WAITS_MS[attempt]) await sleep(RETRY_WAITS_MS[attempt]);
    try {
      const exchange = await fetchOnce(url, { ...options, timeoutMs: options.timeoutMs || TIMEOUT_MS });
      const refs = [];
      for (let i = 0; i < exchange.responses.length; i += 1) {
        const r = exchange.responses[i];
        const suffix = exchange.responses.length > 1 ? `.hop-${i + 1}` : '';
        refs.push({ ...(await store.write(`${prefix}${suffix}.body.${extFor(r.contentType)}`, r.body)), status: r.status, url: r.url });
      }
      await store.writeJson(`${prefix}.meta.json`, {
        schema: 'r19-c-http-v1', capturedAtUtc: isoNow(), capturedAtBerlin: berlinNow(),
        request: { method: String(options.method || 'GET').toUpperCase(), url: new URL(url).href, attempt: attempt + 1 },
        chain: exchange.responses.map((r, i) => ({ hop: i + 1, url: r.url, status: r.status, bodyBytes: r.body.length, bodySha256: sha256(r.body), redirectTarget: r.redirectTarget })),
        finalStatus: exchange.final.status,
      });
      const final = exchange.final;
      return { transportOk: true, status: final.status, url: final.url, text: final.body.toString('utf8'), evidence: refs, attempts: attempt + 1 };
    } catch (error) {
      const detail = { attempt: attempt + 1, error: { name: error?.name, message: error?.message, code: error?.code || error?.cause?.code || null } };
      errors.push(detail);
      await store.writeJson(`${prefix}.attempt-${attempt + 1}.error.json`, { schema: 'r19-c-http-error-v1', capturedAtBerlin: berlinNow(), url, ...detail });
    }
  }
  return { transportOk: false, status: null, url, text: '', evidence: [], attempts: errors.length, errors };
}

const evidenceRef = (r) => (r?.evidence?.length ? `${r.evidence.at(-1).path} (SHA-256 ${r.evidence.at(-1).sha256})` : `kein Beleg (${r?.attempts ?? 0} Versuche fehlgeschlagen)`);
function jsonBody(r) { if (!r.transportOk) return null; try { return JSON.parse(r.text.replace(/^﻿/, '')); } catch { return null; } }

async function discoverDpma(store) {
  const jar = new CookieJar();
  const shell = await liveRequest(store, 'dpma-discovery-shell', 'https://register.dpma.de/DPMAregister/marke/basis', { jar });
  const scriptUrl = shell.transportOk
    ? [...shell.text.matchAll(/<script\b[^>]*src=["']([^"']*smartsearchInt\.js[^"']*)["']/gi)].map((m) => new URL(htmlDecode(m[1]), shell.url).href)[0]
    : null;
  const script = scriptUrl ? await liveRequest(store, 'dpma-discovery-script', scriptUrl, { jar, headers: { accept: 'application/javascript,*/*;q=0.5' } }) : null;
  const match = script?.text.match(/(["'])(\/DPMAregister\/smartsearch\?queryString=)\1/);
  return { jar, discoveryPass: shell.status === 200 && script?.status === 200 && Boolean(match), endpoint: match ? new URL(match[2], script.url).href : null };
}

async function dpmaQuery(store, discovery, label, query) {
  if (!discovery.endpoint) return { response: null, count: null };
  const r = await liveRequest(store, label, `${discovery.endpoint}${encodeURIComponent(query)}`, { jar: discovery.jar, headers: { accept: 'application/json' } });
  const parsed = jsonBody(r);
  const count = parsed && parsed.marErrors === '' && Number.isFinite(Number(parsed.marHits)) ? Number(parsed.marHits) : null;
  return { response: r, parsed, count };
}

async function discoverTmview(store) {
  const jar = new CookieJar();
  const shell = await liveRequest(store, 'tmview-discovery-shell', 'https://www.tmdn.org/tmview/', { jar });
  const scripts = shell.transportOk
    ? [...shell.text.matchAll(/<script\b[^>]*src=["']([^"']+)["']/gi)].map((m) => new URL(htmlDecode(m[1]), shell.url).href).filter((u) => /^https:\/\/www\.tmdn\.org\/tmview\//i.test(u)).slice(-3)
    : [];
  const scriptResponses = [];
  for (let i = 0; i < scripts.length; i += 1) scriptResponses.push(await liveRequest(store, `tmview-discovery-script-${i + 1}`, scripts[i], { jar, headers: { accept: 'application/javascript,*/*;q=0.5' } }));
  const corpus = scriptResponses.map((r) => r.text).join('\n');
  const apiBase = corpus.match(/baseUrl\s*:\s*["'](api\/)["']/)?.[1];
  const searchBase = corpus.match(/=["'](\/search)["']\s*,/)?.[1];
  const resultPart = corpus.match(/SEARCH\s*:\s*\{[^}]*tmview\s*:\s*["'](results)["']/)?.[1];
  const endpoint = apiBase && searchBase && resultPart
    ? `${new URL(apiBase, shell.url).href.replace(/\/$/, '')}${searchBase}/${resultPart}?translate=true`
    : null;
  return { jar, discoveryPass: shell.status === 200 && Boolean(endpoint), endpoint };
}

async function tmviewQuery(store, discovery, label, query, pageSize = '30') {
  if (!discovery.endpoint) return { response: null, count: null, rows: null };
  const r = await liveRequest(store, label, discovery.endpoint, {
    method: 'POST', jar: discovery.jar,
    headers: { accept: 'application/json', 'content-type': 'application/json', origin: 'https://www.tmdn.org', referer: 'https://www.tmdn.org/tmview/' },
    body: JSON.stringify({ page: '1', pageSize, criteria: 'C', basicSearch: query }),
  });
  const parsed = jsonBody(r);
  const ok = parsed && Number.isFinite(Number(parsed.totalResults)) && Array.isArray(parsed.tradeMarks);
  return { response: r, parsed, count: ok ? Number(parsed.totalResults) : null, rows: ok ? parsed.tradeMarks : null };
}

async function discoverEuipo(store) {
  const jar = new CookieJar();
  const shell = await liveRequest(store, 'euipo-discovery-shell', 'https://euipo.europa.eu/eSearch/', { jar });
  const urls = shell.transportOk ? [...shell.text.matchAll(/<script\b[^>]*src=["']([^"']+)["']/gi)].map((m) => new URL(htmlDecode(m[1]), shell.url).href) : [];
  const wanted = urls.filter((u) => /\/copla\/conf\/all(?:\?|$)|\/eSearch\/javascripts\/app\.js(?:\?|$)/i.test(u)).slice(0, 3);
  const scriptResponses = [];
  for (let i = 0; i < wanted.length; i += 1) scriptResponses.push(await liveRequest(store, `euipo-discovery-script-${i + 1}`, wanted[i], { jar, headers: { accept: 'application/javascript,*/*;q=0.5' } }));
  const configResponse = scriptResponses.find((r) => /\/copla\/conf\/all/i.test(r.url));
  const appResponse = scriptResponses.find((r) => /\/eSearch\/javascripts\/app\.js/i.test(r.url));
  const config = jsonBody(configResponse || { transportOk: false });
  const appBase = config?.url?.app?.base;
  const trademarkSearch = config?.url?.trademarks?.search;
  const leaf = appResponse?.text.match(/\bsearch\s*:\s*["'](json)["']/)?.[1];
  const endpoint = appBase && trademarkSearch && leaf
    ? new URL(`${String(appBase).replace(/\/$/, '')}/${String(trademarkSearch).replace(/^\//, '')}/${leaf}`, shell.url).href
    : null;
  const discoveryPass = shell.status === 200 && Boolean(endpoint) && /\[conf\.urls\.BASEURL\s*,\s*baseURL\s*,\s*urls\.search\]\.join\(["']\/["']\)/.test(appResponse?.text || '');
  return { jar, discoveryPass, endpoint };
}

function euipoBody(query) {
  return new URLSearchParams({
    start: '0', rows: '100', searchMode: 'basic',
    criterion_1: 'ApplicationNumber', term_1: query, operator_1: 'OR', condition_1: 'CONTAINS',
    criterion_2: 'MarkVerbalElementText', term_2: query, operator_2: 'OR', condition_2: 'CONTAINS',
    criterion_3: 'OppositionIdentifier', term_3: query, operator_3: 'OR', condition_3: 'CONTAINS',
    sortField: 'ApplicationNumber', sortOrder: 'asc',
  }).toString();
}

async function euipoQuery(store, discovery, label, query) {
  if (!discovery.endpoint) return { response: null, count: null, items: null };
  const r = await liveRequest(store, label, discovery.endpoint, {
    method: 'POST', jar: discovery.jar,
    headers: { accept: 'application/json', 'content-type': 'application/x-www-form-urlencoded', origin: 'https://euipo.europa.eu', referer: 'https://euipo.europa.eu/eSearch/' },
    body: euipoBody(query),
  });
  const parsed = jsonBody(r);
  const ok = parsed && Number.isFinite(Number(parsed.total)) && Array.isArray(parsed.items);
  return { response: r, parsed, count: ok ? Number(parsed.total) : null, items: ok ? parsed.items : null };
}

module.exports = {
  ROHBELEG_ROOT, CookieJar, EvidenceStore, neuerLauf, liveRequest, evidenceRef, jsonBody,
  berlinNow, runId, htmlDecode, stripTags, extractTitle, extractCanonical,
  discoverDpma, dpmaQuery, discoverTmview, tmviewQuery, discoverEuipo, euipoQuery,
};
