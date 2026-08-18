#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const { domainToASCII } = require('node:url');

const PRUEFCOMMIT = 'a3412f8';
const REPO = path.resolve(__dirname, '..', '..');
const ROHBELEG_ROOT = path.join(REPO, 'sensibel', 'rohbelege-R19-B');
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36';
const DEFAULT_HEADERS = Object.freeze({
  'user-agent': USER_AGENT,
  accept: 'text/html,application/xhtml+xml,application/json;q=0.9,*/*;q=0.7',
  'accept-language': 'de-DE,de;q=0.9,en;q=0.8',
  'cache-control': 'no-cache',
});
const RETRY_WAITS_MS = [0, 1000, 3000];
const TIMEOUT_MS = 12000;
const MAX_REDIRECTS = 6;

function sha256(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isoNow() {
  return new Date().toISOString();
}

function berlinNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat('de-DE', {
    timeZone: 'Europe/Berlin',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    timeZoneName: 'short', hourCycle: 'h23',
  }).formatToParts(date);
  const get = (type) => parts.find((part) => part.type === type)?.value || '';
  return `${get('year')}-${get('month')}-${get('day')} ${get('hour')}:${get('minute')}:${get('second')} ${get('timeZoneName')} (Europe/Berlin)`;
}

function runId(date = new Date()) {
  return `lauf-${date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')}-${crypto.randomBytes(3).toString('hex')}`;
}

function slug(value) {
  return String(value)
    .normalize('NFKD')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90) || 'beleg';
}

function displayStatus(status) {
  return status === 'nicht_pruefbar' ? 'nicht prüfbar' : status;
}

function htmlDecode(value) {
  return String(value)
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&#([0-9]+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)));
}

function stripTags(value) {
  return htmlDecode(String(value).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

function getArg(name) {
  const exact = `--${name}`;
  for (let i = 2; i < process.argv.length; i += 1) {
    const arg = process.argv[i];
    if (arg === exact) return process.argv[i + 1] && !process.argv[i + 1].startsWith('--') ? process.argv[i + 1] : '';
    if (arg.startsWith(`${exact}=`)) return arg.slice(exact.length + 1);
  }
  return undefined;
}

function usage() {
  return [
    'R19-B Live-Messlauf (Prüfstand a3412f8)',
    '',
    'Selbsttest mit realen Netzabrufen:',
    '  node marke/live-welle/messlauf.js --selbsttest',
    '',
    'Kandidatenlauf:',
    '  node marke/live-welle/messlauf.js --kandidaten=<datei> --aus=<ordner>',
    '',
    'Eingabeformat je nichtleerer Zeile:',
    '  N-XX;Klarname[;variante1|variante2]',
    '',
    'Der Selbsttest bewertet nur die Gangbarkeit der Kanäle. Er gibt keine',
    'Kollisions-, Verfügbarkeits-, SEO- oder Erwerbbarkeitsentscheidung ab.',
  ].join('\n');
}

function assertInside(child, parent, label) {
  const resolvedChild = path.resolve(child);
  const resolvedParent = path.resolve(parent);
  const relative = path.relative(resolvedParent, resolvedChild);
  if (relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative))) return resolvedChild;
  throw new Error(`${label} muss innerhalb von ${resolvedParent} liegen`);
}

function safeHeaders(headers) {
  const result = {};
  for (const [key, value] of Object.entries(headers || {})) {
    if (!/^(authorization|proxy-authorization|cookie|set-cookie)$/i.test(key)) result[key.toLowerCase()] = String(value);
  }
  return result;
}

function responseHeaders(headers) {
  const result = {};
  for (const [key, value] of headers.entries()) {
    if (!/^(set-cookie|cookie|authorization)$/i.test(key)) result[key.toLowerCase()] = value;
  }
  return result;
}

function extensionFor(contentType) {
  const type = String(contentType || '').toLowerCase();
  if (type.includes('json')) return 'json';
  if (type.includes('html') || type.includes('xhtml')) return 'html';
  if (type.includes('xml')) return 'xml';
  if (type.includes('javascript')) return 'js';
  if (type.startsWith('text/')) return 'txt';
  return 'bin';
}

function serializeError(error) {
  const cause = error && error.cause;
  return {
    name: error?.name || 'Error',
    message: error?.message || String(error),
    code: error?.code || cause?.code || null,
    causeName: cause?.name || null,
    causeMessage: cause?.message || null,
  };
}

class CookieJar {
  constructor() {
    this.byOrigin = new Map();
  }

  absorb(url, headers) {
    const origin = new URL(url).origin;
    const bucket = this.byOrigin.get(origin) || new Map();
    const values = typeof headers.getSetCookie === 'function'
      ? headers.getSetCookie()
      : (headers.get('set-cookie') ? [headers.get('set-cookie')] : []);
    for (const line of values) {
      const first = String(line).split(';', 1)[0];
      const index = first.indexOf('=');
      if (index > 0) bucket.set(first.slice(0, index).trim(), first.slice(index + 1).trim());
    }
    if (bucket.size) this.byOrigin.set(origin, bucket);
  }

  header(url) {
    const bucket = this.byOrigin.get(new URL(url).origin);
    return bucket ? [...bucket].map(([name, value]) => `${name}=${value}`).join('; ') : '';
  }

  count(url) {
    return this.byOrigin.get(new URL(url).origin)?.size || 0;
  }
}

class EvidenceStore {
  constructor(directory) {
    this.directory = path.resolve(directory);
    this.sequence = 0;
    this.entries = [];
  }

  async init() {
    await fsp.mkdir(this.directory, { recursive: true });
  }

  async write(relative, data) {
    const normalized = relative.replace(/\\/g, '/');
    const target = assertInside(path.join(this.directory, normalized), this.directory, 'Belegpfad');
    await fsp.mkdir(path.dirname(target), { recursive: true });
    const bytes = Buffer.isBuffer(data) ? data : Buffer.from(String(data), 'utf8');
    await fsp.writeFile(target, bytes);
    const entry = { path: normalized, sha256: sha256(bytes), bytes: bytes.length };
    this.entries = this.entries.filter((item) => item.path !== normalized);
    this.entries.push(entry);
    return entry;
  }

  async writeJson(relative, value) {
    return this.write(relative, `${JSON.stringify(value, null, 2)}\n`);
  }

  nextPrefix(label) {
    this.sequence += 1;
    return `${String(this.sequence).padStart(3, '0')}-${slug(label)}`;
  }

  async saveError(prefix, envelope) {
    return this.writeJson(`${prefix}.error.json`, envelope);
  }

  async saveExchange(prefix, requestMeta, exchange) {
    const refs = [];
    for (let i = 0; i < exchange.responses.length; i += 1) {
      const response = exchange.responses[i];
      const suffix = exchange.responses.length > 1 ? `.hop-${i + 1}` : '';
      const ext = extensionFor(response.headers['content-type']);
      const bodyRef = await this.write(`${prefix}${suffix}.body.${ext}`, response.body);
      refs.push({ ...bodyRef, status: response.status, url: response.url });
    }
    const meta = {
      schema: 'r19-b-http-v1',
      capturedAtUtc: isoNow(),
      capturedAtBerlin: berlinNow(),
      request: requestMeta,
      responseChain: exchange.responses.map((response, index) => ({
        hop: index + 1,
        url: response.url,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        bodyBytes: response.body.length,
        bodySha256: sha256(response.body),
        redirectTarget: response.redirectTarget,
      })),
      finalUrl: exchange.final.url,
      finalStatus: exchange.final.status,
      redirected: exchange.responses.length > 1,
      cookieCountAfterRequest: exchange.cookieCount,
      note: 'Bodies are complete decoded response bytes returned by Node fetch; authentication, Cookie and Set-Cookie values are not logged.',
    };
    const metaRef = await this.writeJson(`${prefix}.meta.json`, meta);
    return { refs, metaRef };
  }

  async finalize() {
    const lines = this.entries
      .filter((entry) => entry.path !== 'hashes.txt')
      .sort((a, b) => a.path.localeCompare(b.path, 'en'))
      .map((entry) => `${entry.sha256}  ${entry.path}`);
    return this.write('hashes.txt', `${lines.join('\n')}\n`);
  }
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
    if (method === 'GET' || method === 'HEAD') {
      body = undefined;
      delete headers['content-type'];
      delete headers['content-length'];
    }
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(new Error(`Timeout nach ${options.timeoutMs} ms`)), options.timeoutMs);
    let response;
    let responseBody;
    try {
      response = await fetch(currentUrl, {
        method,
        headers,
        body,
        redirect: 'manual',
        signal: controller.signal,
      });
      responseBody = Buffer.from(await response.arrayBuffer());
    } finally {
      clearTimeout(timer);
    }
    jar.absorb(currentUrl, response.headers);
    const location = response.headers.get('location');
    const redirectTarget = location ? new URL(location, currentUrl).href : null;
    const item = {
      url: currentUrl,
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders(response.headers),
      body: responseBody,
      redirectTarget,
    };
    responses.push(item);
    if (![301, 302, 303, 307, 308].includes(response.status) || !redirectTarget) {
      return { responses, final: item, cookieCount: jar.count(currentUrl) };
    }
    if (redirects === MAX_REDIRECTS) throw new Error(`Mehr als ${MAX_REDIRECTS} Redirects ab ${url}`);
    if (response.status === 303 || ((response.status === 301 || response.status === 302) && method === 'POST')) {
      method = 'GET';
      body = undefined;
    }
    currentUrl = redirectTarget;
  }
  throw new Error(`Redirect-Schleife ab ${url}`);
}

async function liveRequest(store, label, url, options = {}) {
  const prefix = store.nextPrefix(label);
  const method = String(options.method || 'GET').toUpperCase();
  const headers = { ...DEFAULT_HEADERS, ...(options.headers || {}) };
  const bodyBytes = options.body == null ? Buffer.alloc(0) : Buffer.from(String(options.body), 'utf8');
  const requestMeta = {
    method,
    url: new URL(url).href,
    headers: safeHeaders(headers),
    bodyBytes: bodyBytes.length,
    bodySha256: bodyBytes.length ? sha256(bodyBytes) : null,
    timeoutMs: options.timeoutMs || TIMEOUT_MS,
    retryPolicy: 'maximal 3 Versuche nur bei Timeout/Netzfehler; Wartefolge 0/1000/3000 ms',
  };
  const errors = [];
  for (let attempt = 0; attempt < RETRY_WAITS_MS.length; attempt += 1) {
    const waitMs = RETRY_WAITS_MS[attempt];
    if (waitMs) await sleep(waitMs);
    const attemptStarted = isoNow();
    try {
      const exchange = await fetchOnce(url, {
        ...options,
        timeoutMs: options.timeoutMs || TIMEOUT_MS,
      });
      const saved = await store.saveExchange(prefix, { ...requestMeta, attempt: attempt + 1, waitBeforeAttemptMs: waitMs, attemptStartedUtc: attemptStarted }, exchange);
      const final = exchange.final;
      return {
        transportOk: true,
        status: final.status,
        url: final.url,
        headers: final.headers,
        body: final.body,
        text: final.body.toString('utf8'),
        chain: exchange.responses.map((item) => ({ url: item.url, status: item.status, redirectTarget: item.redirectTarget })),
        evidence: saved,
        attempts: attempt + 1,
      };
    } catch (error) {
      const detail = { attempt: attempt + 1, waitBeforeAttemptMs: waitMs, startedAtUtc: attemptStarted, endedAtUtc: isoNow(), error: serializeError(error) };
      errors.push(detail);
      const errorRef = await store.saveError(`${prefix}.attempt-${attempt + 1}`, {
        schema: 'r19-b-http-error-v1',
        capturedAtBerlin: berlinNow(),
        request: requestMeta,
        ...detail,
      });
      detail.evidence = errorRef;
    }
  }
  return {
    transportOk: false, status: null, url: new URL(url).href, headers: {}, body: Buffer.alloc(0), text: '', chain: [], attempts: errors.length, errors,
    evidence: { refs: errors.map((item) => ({ ...item.evidence, status: null, url: new URL(url).href })), metaRef: null },
  };
}

function evidenceRef(response) {
  if (!response?.evidence?.refs?.length) return response?.transportOk === false ? `Fehlerbeleg ohne Pfad (${response.attempts} Versuche)` : 'kein Beleg';
  const final = response.evidence.refs.at(-1);
  return `${final.path} (SHA-256 ${final.sha256})`;
}

function control(expected, observed, pass, response, extra = {}) {
  return {
    attempted: true,
    expected,
    observed,
    pass: Boolean(pass),
    evidence: evidenceRef(response),
    ...extra,
  };
}

function finalStatus(parts, mode = 'all') {
  const passes = parts.map((part) => part.status === 'gangbar');
  return (mode === 'any' ? passes.some(Boolean) : passes.every(Boolean)) ? 'gangbar' : 'nicht_pruefbar';
}

function jsonBody(response) {
  if (!response.transportOk) return null;
  try { return JSON.parse(response.text.replace(/^\uFEFF/, '')); } catch { return null; }
}

async function probeDomains(store, token) {
  const specs = [
    { id: 'de', positive: 'hey-pensio.de', negative: `${token}-de.de`, endpoint: (name) => `https://rdap.denic.de/domain/${encodeURIComponent(name)}` },
    { id: 'com', positive: 'apaleo.com', negative: `${token}-com.com`, endpoint: (name) => `https://rdap.verisign.com/com/v1/domain/${encodeURIComponent(name)}` },
  ];
  const parts = [];
  for (const spec of specs) {
    const positiveResponse = await liveRequest(store, `domains-${spec.id}-positiv`, spec.endpoint(spec.positive), { headers: { accept: 'application/rdap+json,application/json;q=0.9' } });
    const negativeResponse = await liveRequest(store, `domains-${spec.id}-negativ`, spec.endpoint(spec.negative), { headers: { accept: 'application/rdap+json,application/json;q=0.9' } });
    const positiveJson = jsonBody(positiveResponse);
    const ldhName = String(positiveJson?.ldhName || positiveJson?.unicodeName || '');
    const positivePass = positiveResponse.status === 200 && positiveJson?.objectClassName === 'domain' && ldhName.toLowerCase() === spec.positive.toLowerCase();
    const negativePass = positivePass && negativeResponse.status === 404;
    const part = {
      id: `.${spec.id}`,
      status: positivePass && negativePass ? 'gangbar' : 'nicht_pruefbar',
      positive: control(`200 + RDAP-Domainobjekt ${spec.positive}`, `${positiveResponse.status ?? 'Netzfehler'}; objectClassName=${positiveJson?.objectClassName ?? '—'}; ldhName=${ldhName || '—'}; status=${JSON.stringify(positiveJson?.status ?? [])}`, positivePass, positiveResponse),
      negative: control(`404 für zufällige, nicht registrierte Kontroll-Domain ${spec.negative}`, `${negativeResponse.status ?? 'Netzfehler'}`, negativePass, negativeResponse),
      note: negativePass ? '404 wird nur wegen bestandener Positivkontrolle als funktionierender RDAP-Negativpfad gewertet.' : 'Ohne bestandene Positivkontrolle ist eine 404 kein Sachnegativ.',
    };
    parts.push(part);
  }
  return { id: 'Domains .de/.com', status: finalStatus(parts), positiveAttempted: true, negativeAttempted: true, parts };
}

function extractCanonical(html) {
  const match = String(html).match(/<link\b[^>]*rel=["'][^"']*canonical[^"']*["'][^>]*href=["']([^"']+)["'][^>]*>|<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["'][^"']*canonical[^"']*["'][^>]*>/i);
  return htmlDecode(match?.[1] || match?.[2] || '');
}

function extractTitle(html) {
  return stripTags(String(html).match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
}

async function probeHandles(store, token) {
  const specs = [
    {
      id: 'LinkedIn', positive: 'apaleo',
      url: (value) => `https://www.linkedin.com/company/${encodeURIComponent(value)}`,
      positivePass: (r) => r.status === 200 && /name=["']pageKey["']\s+content=["']d_org_guest_company_overview["']/i.test(r.text) && /\/company\/apaleo/i.test(extractCanonical(r.text)),
      negativePass: (r) => r.status === 404 && /Page not found/i.test(r.text),
    },
    {
      id: 'Instagram', positive: 'instagram',
      url: (value) => `https://www.instagram.com/${encodeURIComponent(value)}/`,
      positivePass: (r) => r.status === 200 && /(?:canonical|og:url)/i.test(r.text) && /instagram\.com\/instagram\/?/i.test(r.text) && !/PolarisErrorRoot|["']pageID["']\s*:\s*["']httpErrorPage/i.test(r.text),
      negativePass: (r) => r.status === 404 || /(?:page isn't available|page is not available|httpErrorPage)/i.test(r.text),
    },
    {
      id: 'Facebook', positive: 'apaleoGmbH',
      url: (value) => `https://www.facebook.com/${encodeURIComponent(value)}`,
      positivePass: (r) => r.status === 200 && /(?:canonical|og:url)/i.test(r.text) && /facebook\.com\/apaleoGmbH/i.test(r.text) && !/<title>Error<\/title>|Sorry, something went wrong/i.test(r.text),
      negativePass: (r) => r.status === 404 || /(?:content isn't available|page isn't available|page not found)/i.test(r.text),
    },
    {
      id: 'YouTube', positive: 'YouTube',
      url: (value) => `https://www.youtube.com/@${encodeURIComponent(value)}`,
      positivePass: (r) => r.status === 200 && /<link\b[^>]*rel=["']canonical["'][^>]*youtube\.com\/channel\//i.test(r.text) && !/404 Not Found/i.test(extractTitle(r.text)),
      negativePass: (r) => r.status === 404 && /404 Not Found/i.test(r.text),
    },
  ];
  const parts = [];
  for (const spec of specs) {
    const positiveResponse = await liveRequest(store, `handles-${spec.id}-positiv`, spec.url(spec.positive), { jar: new CookieJar() });
    const negativeResponse = await liveRequest(store, `handles-${spec.id}-negativ`, spec.url(token), { jar: new CookieJar() });
    const positivePass = spec.positivePass(positiveResponse);
    const negativePass = positivePass && spec.negativePass(negativeResponse);
    const positiveObserved = `${positiveResponse.status ?? 'Netzfehler'}; Titel=${extractTitle(positiveResponse.text) || '—'}; canonical=${extractCanonical(positiveResponse.text) || '—'}`;
    const negativeObserved = `${negativeResponse.status ?? 'Netzfehler'}; Titel=${extractTitle(negativeResponse.text) || '—'}; canonical=${extractCanonical(negativeResponse.text) || '—'}`;
    parts.push({
      id: spec.id,
      status: positivePass && negativePass ? 'gangbar' : 'nicht_pruefbar',
      positive: control(`belegtes Profil ${spec.positive} mit plattformspezifischem Profilmarker`, positiveObserved, positivePass, positiveResponse),
      negative: control(`Zufallshandle ${token} mit eindeutigem Nichtvorhanden-Marker`, negativeObserved, negativePass, negativeResponse),
      note: positivePass && negativePass
        ? 'Der HTTP-Pfad unterscheidet die Kontrollen. Ein 404 bleibt bei Kandidaten nur ein Indiz, keine Freigabe.'
        : 'Generische Fehler-, Login-, Consent- oder Bot-Seiten werden nicht als Profilbefund interpretiert; Browser-/Plattformsuche bleibt nötig.',
    });
  }
  return { id: 'Handles', status: finalStatus(parts), positiveAttempted: true, negativeAttempted: true, parts };
}

async function discoverDpma(store, label = 'register-dpma-discovery') {
  const jar = new CookieJar();
  const shell = await liveRequest(store, `${label}-shell`, 'https://register.dpma.de/DPMAregister/marke/basis', { jar });
  const scriptUrl = shell.transportOk
    ? [...shell.text.matchAll(/<script\b[^>]*src=["']([^"']*smartsearchInt\.js[^"']*)["']/gi)].map((match) => new URL(htmlDecode(match[1]), shell.url).href)[0]
    : null;
  const script = scriptUrl ? await liveRequest(store, `${label}-script`, scriptUrl, { jar, headers: { accept: 'application/javascript,text/javascript,*/*;q=0.5' } }) : null;
  const match = script?.text.match(/(["'])(\/DPMAregister\/smartsearch\?queryString=)\1/);
  return {
    jar, shell, script,
    discoveryPass: shell.status === 200 && script?.status === 200 && Boolean(match),
    endpoint: match ? new URL(match[2], script.url).href : null,
  };
}

async function dpmaQuery(store, discovery, label, query) {
  if (!discovery.endpoint) return { response: discovery.script || discovery.shell, parsed: null, count: null, discovery: false };
  const response = await liveRequest(store, label, `${discovery.endpoint}${encodeURIComponent(query)}`, {
    jar: discovery.jar,
    headers: { accept: 'application/json' },
  });
  const parsed = jsonBody(response);
  const count = parsed && parsed.marErrors === '' && Number.isFinite(Number(parsed.marHits)) ? Number(parsed.marHits) : null;
  return { response, parsed, count, discovery: discovery.discoveryPass };
}

async function discoverTmview(store) {
  const jar = new CookieJar();
  const shell = await liveRequest(store, 'register-tmview-discovery-shell', 'https://www.tmdn.org/tmview/', { jar });
  const scripts = shell.transportOk
    ? [...shell.text.matchAll(/<script\b[^>]*src=["']([^"']+)["']/gi)].map((m) => new URL(htmlDecode(m[1]), shell.url).href).filter((url) => /^https:\/\/www\.tmdn\.org\/tmview\//i.test(url)).slice(-3)
    : [];
  const scriptResponses = [];
  for (let i = 0; i < scripts.length; i += 1) scriptResponses.push(await liveRequest(store, `register-tmview-discovery-script-${i + 1}`, scripts[i], { jar, headers: { accept: 'application/javascript,text/javascript,*/*;q=0.5' } }));
  const corpus = scriptResponses.map((r) => r.text).join('\n');
  const apiBase = corpus.match(/baseUrl\s*:\s*["'](api\/)["']/)?.[1];
  const searchBase = corpus.match(/=["'](\/search)["']\s*,/)?.[1];
  const resultPart = corpus.match(/SEARCH\s*:\s*\{[^}]*tmview\s*:\s*["'](results)["']/)?.[1];
  const endpoint = apiBase && searchBase && resultPart
    ? `${new URL(apiBase, shell.url).href.replace(/\/$/, '')}${searchBase}/${resultPart}?translate=true`
    : null;
  const discoveryPass = shell.status === 200 && Boolean(endpoint);
  return { jar, shell, scriptResponses, discoveryPass, endpoint, discovered: { apiBase: apiBase || null, searchBase: searchBase || null, resultPart: resultPart || null } };
}

async function tmviewQuery(store, discovery, label, query) {
  if (!discovery.endpoint) return { response: discovery.scriptResponses.at(-1) || discovery.shell, parsed: null, count: null };
  const response = await liveRequest(store, label, discovery.endpoint, {
    method: 'POST', jar: discovery.jar,
    headers: { accept: 'application/json', 'content-type': 'application/json', origin: 'https://www.tmdn.org', referer: 'https://www.tmdn.org/tmview/' },
    body: JSON.stringify({ page: '1', pageSize: '30', criteria: 'C', basicSearch: query }),
  });
  const parsed = jsonBody(response);
  const schemaPass = parsed && Number.isFinite(Number(parsed.totalResults)) && Array.isArray(parsed.tradeMarks);
  return { response, parsed, count: schemaPass ? Number(parsed.totalResults) : null, rows: schemaPass ? parsed.tradeMarks.length : null };
}

async function discoverEuipo(store) {
  const jar = new CookieJar();
  const shell = await liveRequest(store, 'register-euipo-discovery-shell', 'https://euipo.europa.eu/eSearch/', { jar });
  const urls = shell.transportOk
    ? [...shell.text.matchAll(/<script\b[^>]*src=["']([^"']+)["']/gi)].map((m) => new URL(htmlDecode(m[1]), shell.url).href)
    : [];
  const wanted = urls.filter((url) => /\/copla\/conf\/all(?:\?|$)|\/eSearch\/javascripts\/app\.js(?:\?|$)/i.test(url)).slice(0, 3);
  const scriptResponses = [];
  for (let i = 0; i < wanted.length; i += 1) scriptResponses.push(await liveRequest(store, `register-euipo-discovery-script-${i + 1}`, wanted[i], { jar, headers: { accept: 'application/javascript,text/javascript,*/*;q=0.5' } }));
  const configResponse = scriptResponses.find((response) => /\/copla\/conf\/all/i.test(response.url));
  const appResponse = scriptResponses.find((response) => /\/eSearch\/javascripts\/app\.js/i.test(response.url));
  const config = jsonBody(configResponse || { transportOk: false });
  const appBase = config?.url?.app?.base;
  const trademarkSearch = config?.url?.trademarks?.search;
  const leaf = appResponse?.text.match(/\bsearch\s*:\s*["'](json)["']/)?.[1];
  const endpoint = appBase && trademarkSearch && leaf
    ? new URL(`${String(appBase).replace(/\/$/, '')}/${String(trademarkSearch).replace(/^\//, '')}/${leaf}`, shell.url).href
    : null;
  const discoveryPass = shell.status === 200 && Boolean(endpoint) && /\[conf\.urls\.BASEURL\s*,\s*baseURL\s*,\s*urls\.search\]\.join\(["']\/["']\)/.test(appResponse?.text || '');
  return { jar, shell, scriptResponses, discoveryPass, endpoint, discovered: { appBase: appBase || null, trademarkSearch: trademarkSearch || null, leaf: leaf || null } };
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
  if (!discovery.endpoint) return { response: discovery.scriptResponses.at(-1) || discovery.shell, parsed: null, count: null };
  const response = await liveRequest(store, label, discovery.endpoint, {
    method: 'POST', jar: discovery.jar,
    headers: { accept: 'application/json', 'content-type': 'application/x-www-form-urlencoded', origin: 'https://euipo.europa.eu', referer: 'https://euipo.europa.eu/eSearch/' },
    body: euipoBody(query),
  });
  const parsed = jsonBody(response);
  const schemaPass = parsed && Number.isFinite(Number(parsed.total)) && Array.isArray(parsed.items);
  return { response, parsed, count: schemaPass ? Number(parsed.total) : null, rows: schemaPass ? parsed.items.length : null };
}

async function probeRegisters(store, token) {
  const dpmaDiscovery = await discoverDpma(store);
  const dpmaPositive = await dpmaQuery(store, dpmaDiscovery, 'register-dpma-positiv', 'apaleo');
  const dpmaNegative = await dpmaQuery(store, dpmaDiscovery, 'register-dpma-negativ', token);
  const dpmaPosPass = dpmaDiscovery.discoveryPass && dpmaPositive.count !== null && dpmaPositive.count >= 1;
  const dpmaNegPass = dpmaPosPass && dpmaNegative.count === 0;
  const dpma = {
    id: 'DPMAregister', status: dpmaPosPass && dpmaNegPass ? 'gangbar' : 'nicht_pruefbar',
    positive: control('Smartsearch „apaleo“ liefert marErrors="" und marHits >= 1', `Discovery=${dpmaDiscovery.discoveryPass}; HTTP ${dpmaPositive.response.status ?? 'Netzfehler'}; marHits=${dpmaPositive.count ?? 'nicht auslesbar'}`, dpmaPosPass, dpmaPositive.response),
    negative: control(`Smartsearch „${token}“ liefert über dieselbe JSON-/Parserroute marErrors="" und marHits=0`, `Discovery=${dpmaDiscovery.discoveryPass}; HTTP ${dpmaNegative.response.status ?? 'Netzfehler'}; marHits=${dpmaNegative.count ?? 'nicht auslesbar'}`, dpmaNegPass, dpmaNegative.response),
    note: 'Der Smartsearch-Pfad wird im selben Lauf aus smartsearchInt.js der offiziellen DPMA-Basisrecherche entdeckt; ein Treffer beweist keine aktive Eintragung.',
  };

  const tmDiscovery = await discoverTmview(store);
  const tmPositive = await tmviewQuery(store, tmDiscovery, 'register-tmview-positiv', 'apaleo');
  const tmNegative = await tmviewQuery(store, tmDiscovery, 'register-tmview-negativ', token);
  const tmPosPass = tmDiscovery.discoveryPass && tmPositive.count !== null && tmPositive.count >= 1;
  const tmNegPass = tmPosPass && tmNegative.count === 0;
  const tmview = {
    id: 'TMview', status: tmPosPass && tmNegPass ? 'gangbar' : 'nicht_pruefbar',
    positive: control('„apaleo“ liefert über den aus offiziellem Frontend-Code abgeleiteten JSON-Pfad mindestens 1 Treffer', `Discovery=${tmDiscovery.discoveryPass}; HTTP ${tmPositive.response.status ?? 'Netzfehler'}; Treffer=${tmPositive.count ?? 'nicht auslesbar'}`, tmPosPass, tmPositive.response),
    negative: control(`„${token}“ liefert über dieselbe Route 0 Treffer`, `Discovery=${tmDiscovery.discoveryPass}; HTTP ${tmNegative.response.status ?? 'Netzfehler'}; Treffer=${tmNegative.count ?? 'nicht auslesbar'}`, tmNegPass, tmNegative.response),
    note: 'Eine SPA-Shell oder ein Transportfehler wird nicht als Registerergebnis interpretiert.',
  };

  const euDiscovery = await discoverEuipo(store);
  const euPositive = await euipoQuery(store, euDiscovery, 'register-euipo-positiv', 'APPLE');
  const euNegative = await euipoQuery(store, euDiscovery, 'register-euipo-negativ', token);
  const euPosPass = euDiscovery.discoveryPass && euPositive.count !== null && euPositive.count >= 1;
  const euNegPass = euPosPass && euNegative.count === 0;
  const euipo = {
    id: 'EUIPO eSearch', status: euPosPass && euNegPass ? 'gangbar' : 'nicht_pruefbar',
    positive: control('belegte EUIPO-Marke „APPLE“ liefert über den aus offiziellem Frontend-Code abgeleiteten JSON-Pfad mindestens 1 Treffer', `Discovery=${euDiscovery.discoveryPass}; HTTP ${euPositive.response.status ?? 'Netzfehler'}; Treffer=${euPositive.count ?? 'nicht auslesbar'}`, euPosPass, euPositive.response),
    negative: control(`„${token}“ liefert über dieselbe Route 0 Treffer`, `Discovery=${euDiscovery.discoveryPass}; HTTP ${euNegative.response.status ?? 'Netzfehler'}; Treffer=${euNegative.count ?? 'nicht auslesbar'}`, euNegPass, euNegative.response),
    note: 'Eine SPA-Shell, Bot-Sperre oder nicht parsebare Antwort bleibt ausdrücklich nicht prüfbar.',
  };

  const parts = [dpma, tmview, euipo];
  return {
    id: 'Markenregister', status: finalStatus(parts), positiveAttempted: true, negativeAttempted: true, parts,
    optional: { id: 'Handelsregister', status: 'nicht_erhoben', note: 'Phase 0: kein stabiler anonymer, offiziell dokumentierter Maschinenpfad innerhalb des Zeitdeckels; kein geratenes Negativ.' },
  };
}

function extractAnchors(html, selectorKind) {
  const result = [];
  const source = String(html);
  if (selectorKind === 'ddg') {
    // Anzeigen tragen ebenfalls result__a. Für den organischen Nulltest werden
    // ausschließlich echte Webresult-Blöcke gezählt; result--ad und der
    // result--no-result-Hinweis bleiben strukturell getrennt sichtbar.
    const blocks = source.split(/(?=<div\b[^>]*class=["'][^"']*\bresult\b)/i);
    for (const block of blocks) {
      const open = block.match(/^<div\b[^>]*class=["']([^"']*)["'][^>]*>/i);
      if (!open || /\bresult--(?:ad|no-result)\b/i.test(open[1])) continue;
      const match = block.match(/<a\b(?=[^>]*class=["'][^"']*\bresult__a\b[^"']*["'])[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
      if (match) result.push({ href: htmlDecode(match[1]), title: stripTags(match[2]) });
    }
    return result;
  }
  let regex;
  if (selectorKind === 'bing') regex = /<li\b[^>]*class=["'][^"']*\bb_algo\b[^"']*["'][^>]*>[\s\S]*?<h2\b[^>]*>\s*<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  else regex = /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  for (const match of source.matchAll(regex)) result.push({ href: htmlDecode(match[1]), title: stripTags(match[2]) });
  return result;
}

function decodeDdgUrl(href) {
  try {
    const url = new URL(href.startsWith('//') ? `https:${href}` : href, 'https://html.duckduckgo.com/');
    return url.searchParams.get('uddg') || url.href;
  } catch { return href; }
}

function decodeBingUrl(href) {
  try {
    const url = new URL(href);
    const encoded = url.searchParams.get('u');
    if (!encoded?.startsWith('a1')) return url.href;
    let body = encoded.slice(2).replace(/-/g, '+').replace(/_/g, '/');
    while (body.length % 4) body += '=';
    return Buffer.from(body, 'base64').toString('utf8');
  } catch { return href; }
}

function htmlAttr(tag, name) {
  const quoted = String(tag).match(new RegExp(`\\b${name}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, 'i'));
  if (quoted) return htmlDecode(quoted[2]);
  const bare = String(tag).match(new RegExp(`\\b${name}\\s*=\\s*([^\\s>]+)`, 'i'));
  return bare ? htmlDecode(bare[1]) : '';
}

function ddgNextRequest(html, baseUrl) {
  const forms = [...String(html).matchAll(/<form\b[^>]*>[\s\S]*?<\/form>/gi)];
  const form = forms.map((match) => match[0]).find((value) => /name=["']vqd["']/i.test(value) && /name=["']s["']/i.test(value));
  if (!form) return null;
  const open = form.match(/<form\b[^>]*>/i)?.[0] || '';
  if ((htmlAttr(open, 'method') || 'get').toLowerCase() !== 'post') return null;
  const params = new URLSearchParams();
  for (const input of form.matchAll(/<input\b[^>]*>/gi)) {
    const name = htmlAttr(input[0], 'name');
    if (name) params.append(name, htmlAttr(input[0], 'value'));
  }
  return { url: new URL(htmlAttr(open, 'action') || '/html/', baseUrl).href, body: params.toString() };
}

function googleLinks(html) {
  const links = [];
  for (const match of String(html).matchAll(/<a\b[^>]*href=["']\/url\?q=([^&"']+)[^"']*["'][^>]*>/gi)) {
    try { links.push(decodeURIComponent(htmlDecode(match[1]))); } catch { /* malformed link */ }
  }
  return links;
}

async function webEnginePair(store, id, positiveUrl, negativeUrl, parser) {
  const positiveResponse = await liveRequest(store, `web-${id}-positiv`, positiveUrl, { jar: new CookieJar() });
  const negativeResponse = await liveRequest(store, `web-${id}-negativ`, negativeUrl, { jar: new CookieJar() });
  return parser(positiveResponse, negativeResponse);
}

async function probeWeb(store, token) {
  const phrase = `"${token}vmp9xr3k"`;
  const ddg = await webEnginePair(
    store, 'duckduckgo',
    'https://html.duckduckgo.com/html/?q=apaleo',
    `https://html.duckduckgo.com/html/?q=${encodeURIComponent(phrase)}`,
    (positiveResponse, negativeResponse) => {
      const positiveLinks = extractAnchors(positiveResponse.text, 'ddg').map((item) => decodeDdgUrl(item.href));
      const negativeLinks = extractAnchors(negativeResponse.text, 'ddg').map((item) => decodeDdgUrl(item.href));
      const positivePass = positiveResponse.status === 200 && positiveLinks.some((url) => /^https?:\/\/(?:www\.)?apaleo\.com(?:\/|$)/i.test(url));
      const negativeMarker = /class=["'][^"']*no-results(?:__[-a-z]+)?/i.test(negativeResponse.text) && /No (?:more )?results found/i.test(negativeResponse.text);
      const negativePass = positivePass && negativeResponse.status === 200 && negativeLinks.length === 0 && negativeMarker;
      return {
        id: 'DuckDuckGo HTML', status: positivePass && negativePass ? 'gangbar' : 'nicht_pruefbar',
        positive: control('strukturierte Ergebnisanker; Herstellerdomain apaleo.com unter den Treffern', `HTTP ${positiveResponse.status ?? 'Netzfehler'}; Ergebnisanker=${positiveLinks.length}; apaleo.com=${positiveLinks.some((url) => /apaleo\.com/i.test(url))}`, positivePass, positiveResponse),
        negative: control(`exakt zitierte globale Nullfolge ${phrase}: 0 Ergebnisanker + No-results-Marker`, `HTTP ${negativeResponse.status ?? 'Netzfehler'}; Ergebnisanker=${negativeLinks.length}; No-results-Marker=${negativeMarker}`, negativePass, negativeResponse),
        note: 'DuckDuckGo-Redirectlinks werden über den uddg-Parameter dekodiert.',
      };
    },
  );

  const google = await webEnginePair(
    store, 'google',
    'https://www.google.com/search?q=apaleo&num=20&hl=de&filter=0',
    `https://www.google.com/search?q=${encodeURIComponent(phrase)}&num=20&hl=de&filter=0`,
    (positiveResponse, negativeResponse) => {
      const posLinks = googleLinks(positiveResponse.text);
      const negLinks = googleLinks(negativeResponse.text);
      const posPass = positiveResponse.status === 200 && posLinks.some((url) => /https?:\/\/(?:www\.)?apaleo\.com(?:\/|$)/i.test(url));
      const negPass = posPass && negativeResponse.status === 200 && negLinks.length === 0 && /(?:keine Ergebnisse|did not match any documents)/i.test(stripTags(negativeResponse.text));
      return {
        id: 'Google', status: posPass && negPass ? 'gangbar' : 'nicht_pruefbar',
        positive: control('echte Ergebnislinks mit apaleo.com', `HTTP ${positiveResponse.status ?? 'Netzfehler'}; extrahierte Ergebnislinks=${posLinks.length}; apaleo.com=${posLinks.some((u) => /apaleo\.com/i.test(u))}`, posPass, positiveResponse),
        negative: control(`exakt zitierte Nullfolge ${phrase}: 0 Ergebnislinks + Nullmarker`, `HTTP ${negativeResponse.status ?? 'Netzfehler'}; extrahierte Ergebnislinks=${negLinks.length}`, negPass, negativeResponse),
        note: 'Eine 200er Support-, Consent- oder JavaScript-Shell ohne Resultcontainer besteht die Positivkontrolle nicht.',
      };
    },
  );

  const bing = await webEnginePair(
    store, 'bing',
    'https://www.bing.com/search?q=apaleo&count=20&setlang=de-DE',
    `https://www.bing.com/search?q=${encodeURIComponent(phrase)}&count=20&setlang=de-DE`,
    (positiveResponse, negativeResponse) => {
      const posLinks = extractAnchors(positiveResponse.text, 'bing').map((item) => decodeBingUrl(item.href));
      const negLinks = extractAnchors(negativeResponse.text, 'bing').map((item) => decodeBingUrl(item.href));
      const posPass = positiveResponse.status === 200 && posLinks.some((url) => /https?:\/\/(?:www\.)?apaleo\.com(?:\/|$)/i.test(url));
      const negPass = posPass && negativeResponse.status === 200 && negLinks.length === 0 && /(?:There are no results|Keine Ergebnisse)/i.test(stripTags(negativeResponse.text));
      return {
        id: 'Bing', status: posPass && negPass ? 'gangbar' : 'nicht_pruefbar',
        positive: control('li.b_algo-Ergebnisanker mit apaleo.com', `HTTP ${positiveResponse.status ?? 'Netzfehler'}; Ergebnisanker=${posLinks.length}; apaleo.com=${posLinks.some((u) => /apaleo\.com/i.test(u))}`, posPass, positiveResponse),
        negative: control(`exakt zitierte Nullfolge ${phrase}: 0 Ergebnisanker + Nullmarker`, `HTTP ${negativeResponse.status ?? 'Netzfehler'}; Ergebnisanker=${negLinks.length}`, negPass, negativeResponse),
        note: 'Irrelevante Treffer für die Nullfolge gelten nicht als bestandene Negativkontrolle.',
      };
    },
  );

  const parts = [ddg, google, bing];
  return { id: 'Websuche', status: finalStatus(parts, 'any'), positiveAttempted: true, negativeAttempted: true, parts, note: 'Aggregat gangbar, sobald mindestens eine unabhängige Suchmaschine beide Kontrollen über dieselbe Parserroute besteht; Ausfälle bleiben separat sichtbar.' };
}

function markdownForSelftest(result) {
  const lines = [
    '# R19-B Phase 0 — Live-Selbsttest',
    '',
    `- Prüfstand: \`${result.pruefcommit}\``,
    `- Beginn: ${result.startedAtBerlin}`,
    `- Ende: ${result.endedAtBerlin}`,
    `- Laufzeit: ${(result.durationMs / 1000).toFixed(3)} s`,
    `- Rohbelege: \`${result.evidenceDirectory}\``,
    '',
    '| Kanal | Positivkontrolle | Negativkontrolle | Befund |',
    '|---|---:|---:|---|',
  ];
  for (const channel of result.channels) lines.push(`| ${channel.id} | ${channel.positiveAttempted ? 'belegt' : 'fehlt'} | ${channel.negativeAttempted ? 'belegt' : 'fehlt'} | **${displayStatus(channel.status)}** |`);
  lines.push('', '## Teilkanäle und Rohbelege', '');
  for (const channel of result.channels) {
    lines.push(`### ${channel.id}: ${displayStatus(channel.status)}`, '');
    for (const part of channel.parts) {
      lines.push(`- **${part.id}: ${displayStatus(part.status)}**`, `  - Positiv Soll: ${part.positive.expected}`, `  - Positiv Ist: ${part.positive.observed}`, `  - Positiv Beleg: \`${part.positive.evidence}\``, `  - Negativ Soll: ${part.negative.expected}`, `  - Negativ Ist: ${part.negative.observed}`, `  - Negativ Beleg: \`${part.negative.evidence}\``, `  - Einordnung: ${part.note}`);
    }
    if (channel.optional) lines.push(`- **${channel.optional.id}: nicht erhoben** — ${channel.optional.note}`);
    if (channel.note) lines.push(`- Aggregatregel: ${channel.note}`);
    lines.push('');
  }
  lines.push('## Abschluss', '');
  lines.push(result.pass
    ? 'SELBSTTEST PASS — Positiv- und Negativkontrolle treffen in allen vier Top-Kanälen das Soll; Exit 0.'
    : `SELBSTTEST EXIT 1 — nicht vollständig gangbar: ${result.channels.filter((channel) => channel.status !== 'gangbar').map((channel) => `${channel.id}=${displayStatus(channel.status)}`).join('; ')}. Alle Kanäle bleiben ausdrücklich ausgewiesen.`);
  lines.push('', `Kontrollabdeckung vollständig: ${result.coverageComplete ? 'JA' : 'NEIN'}. Ein belegtes „nicht prüfbar“ erfüllt die Phase-0-Dokumentationspflicht, ist nach dem CLI-Vertrag aber kein stiller Exit 0.`, '', 'Kein Ergebnis ist eine Verfügbarkeits-, Kollisions-, SEO-, Erwerbbarkeits- oder Rechtsentscheidung.', '');
  return lines.join('\n');
}

async function runSelftest(store) {
  const started = new Date();
  const date = started.toISOString().slice(0, 10).replace(/-/g, '');
  const token = `qzx7r19b${date}${crypto.randomBytes(4).toString('hex')}`;
  const handleToken = `QzX7R19b${date}Aa${crypto.randomBytes(3).toString('hex')}`;
  const channels = [];
  channels.push(await probeDomains(store, token));
  channels.push(await probeHandles(store, handleToken));
  channels.push(await probeRegisters(store, token));
  channels.push(await probeWeb(store, token));
  const ended = new Date();
  const classified = channels.every((channel) => ['gangbar', 'nicht_pruefbar'].includes(channel.status));
  const bothAttempted = channels.every((channel) => channel.positiveAttempted && channel.negativeAttempted);
  const coverageComplete = classified && bothAttempted && channels.length === 4;
  return {
    schema: 'r19-b-selbsttest-v1',
    pruefcommit: PRUEFCOMMIT,
    startedAtUtc: started.toISOString(), startedAtBerlin: berlinNow(started),
    endedAtUtc: ended.toISOString(), endedAtBerlin: berlinNow(ended),
    durationMs: ended - started,
    evidenceDirectory: store.directory,
    controls: { occupied: 'apaleo / hey-pensio.de / apaleo.com sowie plattformspezifisch bekannte Profile', negativeToken: token, negativeHandleToken: handleToken },
    channels,
    notPruefbarCount: channels.filter((channel) => channel.status === 'nicht_pruefbar').length,
    coverageComplete,
    pass: coverageComplete && channels.every((channel) => channel.status === 'gangbar'),
    exitSemantics: 'Exit 0 nur, wenn Positiv- und Negativkontrolle in allen vier Top-Kanälen das Soll treffen. Exit 1 nennt nicht prüfbare, unklassifizierte oder unvollständig kontrollierte Kanäle ausdrücklich.',
  };
}

function parseCandidates(text) {
  const rows = [];
  for (const [index, raw] of String(text).replace(/^\uFEFF/, '').split(/\r?\n/).entries()) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const fields = line.split(';');
    if (fields.length < 2 || fields.length > 3) throw new Error(`Kandidatenzeile ${index + 1}: erwartet N-XX;Klarname[;varianten]`);
    const id = fields[0].trim();
    const name = fields[1].trim();
    if (!/^N-\d{2}$/.test(id)) throw new Error(`Kandidatenzeile ${index + 1}: ungültige ID ${id}`);
    if (!name || /[\r\n\0]/.test(name)) throw new Error(`Kandidatenzeile ${index + 1}: ungültiger Klarname`);
    const variants = [name, ...(fields[2] ? fields[2].split('|').map((v) => v.trim()).filter(Boolean) : [])];
    if (variants.length > 12) throw new Error(`Kandidatenzeile ${index + 1}: höchstens 12 Namen/Varianten`);
    rows.push({ id, name, variants: [...new Set(variants)] });
  }
  if (!rows.length) throw new Error('Kandidatendatei enthält keine Datensätze');
  if (new Set(rows.map((row) => row.id)).size !== rows.length) throw new Error('Kandidaten-IDs müssen eindeutig sein');
  return rows;
}

async function candidateDdgQuery(store, label, query) {
  const jar = new CookieJar();
  const first = await liveRequest(store, `${label}-seite-1`, `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`, { jar });
  const results = extractAnchors(first.text, 'ddg').map((item) => ({ title: item.title, url: decodeDdgUrl(item.href) }));
  const next = ddgNextRequest(first.text, first.url);
  let second = null;
  if (next) {
    second = await liveRequest(store, `${label}-seite-2`, next.url, {
      method: 'POST', jar,
      headers: { 'content-type': 'application/x-www-form-urlencoded', referer: first.url },
      body: next.body,
    });
    results.push(...extractAnchors(second.text, 'ddg').map((item) => ({ title: item.title, url: decodeDdgUrl(item.href) })));
  }
  const unique = [...new Map(results.map((item) => [item.url, item])).values()].slice(0, 20);
  return { first, second, results: unique };
}

async function measureCandidate(store, candidate, context) {
  const measurements = [];
  for (let i = 0; i < candidate.variants.length; i += 1) {
    const value = candidate.variants[i];
    const label = `${candidate.id}-v${String(i + 1).padStart(2, '0')}`;
    const domainLabel = domainToASCII(value.toLocaleLowerCase('de-DE').replace(/\s+/g, '-').replace(/^-+|-+$/g, ''));
    const variant = { variantIndex: i + 1, query: value, checks: [] };
    if (domainLabel && /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(domainLabel)) {
      for (const tld of ['de', 'com']) {
        const endpoint = tld === 'de' ? `https://rdap.denic.de/domain/${domainLabel}.${tld}` : `https://rdap.verisign.com/com/v1/domain/${domainLabel}.${tld}`;
        const response = await liveRequest(store, `${label}-domain-${tld}`, endpoint, { headers: { accept: 'application/rdap+json,application/json' } });
        const parsed = jsonBody(response);
        variant.checks.push({ channel: `Domain .${tld}`, observed: `HTTP ${response.status ?? 'Netzfehler'}; RDAP-status=${JSON.stringify(parsed?.status ?? [])}`, evidence: evidenceRef(response) });
      }
    } else variant.checks.push({ channel: 'Domains', observed: 'Label nicht IDNA-/LDH-tauglich; nicht prüfbar', evidence: 'kein Abruf' });
    const handle = value.replace(/^@/, '').trim();
    const handleUrls = [
      ['LinkedIn', `https://www.linkedin.com/company/${encodeURIComponent(handle)}`],
      ['Instagram', `https://www.instagram.com/${encodeURIComponent(handle)}/`],
      ['Facebook', `https://www.facebook.com/${encodeURIComponent(handle)}`],
      ['YouTube', `https://www.youtube.com/@${encodeURIComponent(handle)}`],
    ];
    for (const [platform, url] of handleUrls) {
      const response = await liveRequest(store, `${label}-handle-${platform}`, url, { jar: new CookieJar() });
      variant.checks.push({ channel: `Handle ${platform}`, observed: `HTTP ${response.status ?? 'Netzfehler'}; Titel=${extractTitle(response.text) || '—'}; canonical=${extractCanonical(response.text) || '—'}`, evidence: evidenceRef(response) });
    }
    const dpma = await dpmaQuery(store, context.dpma, `${label}-dpma`, value);
    variant.checks.push({ channel: 'DPMAregister', observed: `Discovery=${context.dpma.discoveryPass}; HTTP ${dpma.response.status ?? 'Netzfehler'}; marHits=${dpma.count ?? 'nicht auslesbar'}`, evidence: evidenceRef(dpma.response) });
    const tmview = await tmviewQuery(store, context.tmview, `${label}-tmview`, value);
    variant.checks.push({ channel: 'TMview', observed: `Discovery=${context.tmview.discoveryPass}; HTTP ${tmview.response.status ?? 'Netzfehler'}; Treffer=${tmview.count ?? 'nicht auslesbar'}`, evidence: evidenceRef(tmview.response) });
    const euipo = await euipoQuery(store, context.euipo, `${label}-euipo`, value);
    variant.checks.push({ channel: 'EUIPO eSearch', observed: `Discovery=${context.euipo.discoveryPass}; HTTP ${euipo.response.status ?? 'Netzfehler'}; Treffer=${euipo.count ?? 'nicht auslesbar'}`, evidence: evidenceRef(euipo.response) });

    const contexts = ['', 'Hotel', 'Hotellerie', 'PMS', 'Check-in', 'Gastgewerbe', 'Software'];
    for (let contextIndex = 0; contextIndex < contexts.length; contextIndex += 1) {
      const contextTerm = contexts[contextIndex];
      const query = `"${value}"${contextTerm ? ` ${contextTerm}` : ''}`;
      const ddg = await candidateDdgQuery(store, `${label}-web-ddg-kontext-${String(contextIndex).padStart(2, '0')}`, query);
      variant.checks.push({
        channel: `Websuche DuckDuckGo ${contextTerm || 'allein'}`,
        observed: `HTTP Seite 1=${ddg.first.status ?? 'Netzfehler'}; Seite 2=${ddg.second?.status ?? 'nicht angeboten'}; organische Treffer=${ddg.results.length}`,
        evidence: `${evidenceRef(ddg.first)}${ddg.second ? `; ${evidenceRef(ddg.second)}` : ''}`,
        results: ddg.results,
      });
    }

    const google = await liveRequest(store, `${label}-web-google`, `https://www.google.com/search?q=${encodeURIComponent(`"${value}"`)}&num=20&hl=de&filter=0`, { jar: new CookieJar() });
    const googleResultLinks = googleLinks(google.text);
    variant.checks.push({ channel: 'Websuche Google allein', observed: `HTTP ${google.status ?? 'Netzfehler'}; extrahierte Ergebnislinks=${googleResultLinks.length}`, evidence: evidenceRef(google), results: googleResultLinks.slice(0, 20).map((url) => ({ title: null, url })) });

    const bing = await liveRequest(store, `${label}-web-bing`, `https://www.bing.com/search?q=${encodeURIComponent(`"${value}"`)}&count=20&setlang=de-DE`, { jar: new CookieJar() });
    const bingLinks = extractAnchors(bing.text, 'bing').map((item) => ({ title: item.title, url: decodeBingUrl(item.href) }));
    variant.checks.push({ channel: 'Websuche Bing allein', observed: `HTTP ${bing.status ?? 'Netzfehler'}; Ergebnisanker=${bingLinks.length}`, evidence: evidenceRef(bing), results: bingLinks.slice(0, 20) });
    measurements.push(variant);
  }
  return { id: candidate.id, measurements };
}

function markdownForCandidates(result) {
  const lines = ['# R19-B Kandidaten-Messlauf', '', `- Prüfstand: \`${PRUEFCOMMIT}\``, `- Kontrollen: ${result.controls.pass ? 'PASS' : 'FAIL'}`, `- Rohbelege: \`${result.evidenceDirectory}\``, '', '| ID | Variante | Prüfpunkt | Rohbefund | Beleg |', '|---|---:|---|---|---|'];
  for (const candidate of result.candidates) for (const variant of candidate.measurements) for (const check of variant.checks) lines.push(`| ${candidate.id} | ${variant.variantIndex} | ${check.channel} | ${String(check.observed).replace(/\|/g, '\\|')} | \`${check.evidence}\` |`);
  lines.push('', 'Keine Tabellenzeile ist eine Freigabe-, Kollisions-, SEO- oder Erwerbbarkeitsentscheidung.', '');
  return lines.join('\n');
}

async function main() {
  if (process.argv.includes('--hilfe') || process.argv.includes('--help') || process.argv.includes('-h')) {
    process.stdout.write(`${usage()}\n`);
    return;
  }
  const selftest = process.argv.includes('--selbsttest');
  const candidateFileArg = getArg('kandidaten');
  const outputArg = getArg('aus');
  if (selftest && (candidateFileArg !== undefined || outputArg !== undefined)) throw new Error('--selbsttest darf nicht mit --kandidaten/--aus kombiniert werden');
  if (!selftest && (candidateFileArg === undefined || outputArg === undefined || !candidateFileArg || !outputArg)) throw new Error(`Ungültiger Aufruf.\n\n${usage()}`);

  if (selftest) {
    const directory = path.join(ROHBELEG_ROOT, 'phase0', runId());
    const store = new EvidenceStore(directory);
    await store.init();
    const result = await runSelftest(store);
    const markdown = markdownForSelftest(result);
    await store.writeJson('selbsttest-ergebnis.json', result);
    await store.write('selbsttest-ausgabe.txt', `${markdown}\n`);
    await store.finalize();
    process.stdout.write(`${markdown}\n`);
    process.exitCode = result.pass ? 0 : 1;
    return;
  }

  const candidateFile = assertInside(path.resolve(process.cwd(), candidateFileArg), REPO, 'Kandidatendatei');
  const outputBase = assertInside(path.resolve(process.cwd(), outputArg), ROHBELEG_ROOT, 'Ausgabeordner');
  const stat = await fsp.stat(candidateFile);
  if (!stat.isFile()) throw new Error('Kandidatendatei ist keine reguläre Datei');
  const candidates = parseCandidates(await fsp.readFile(candidateFile, 'utf8'));
  const directory = path.join(outputBase, runId());
  const store = new EvidenceStore(directory);
  await store.init();
  const controls = await runSelftest(store);
  const context = {
    dpma: await discoverDpma(store, 'phase1-dpma-discovery'),
    tmview: await discoverTmview(store),
    euipo: await discoverEuipo(store),
  };
  const measured = [];
  for (const candidate of candidates) {
    const item = await measureCandidate(store, candidate, context);
    measured.push(item);
    await store.writeJson(`status/${candidate.id}.status.json`, item);
  }
  const result = { schema: 'r19-b-kandidatenlauf-v1', pruefcommit: PRUEFCOMMIT, capturedAtBerlin: berlinNow(), evidenceDirectory: directory, controls, candidates: measured };
  const markdown = markdownForCandidates(result);
  await store.writeJson('kandidaten-ergebnis.json', result);
  await store.write('kandidaten-ausgabe.md', `${markdown}\n`);
  await store.finalize();
  process.stdout.write(`${markdown}\n`);
  process.exitCode = controls.pass ? 0 : 1;
}

main().catch((error) => {
  process.stderr.write(`R19-B FEHLER: ${error?.stack || error}\n`);
  process.exitCode = 1;
});
