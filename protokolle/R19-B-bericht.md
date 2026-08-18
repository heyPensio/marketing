# R19-B — Bericht Phase 0: Live-Messschiene

- **Rolle:** Codex, Arbeits-Session R19-B
- **Datum:** 18.08.2026
- **Prüfstand:** `a3412f8`
- **Auftrag:** `protokolle/tagesplan-2026-08-18.md`, „Session-Prompts R19“, Strang R19-B
- **Maßgeblicher Rohbeleglauf:** `sensibel/rohbelege-R19-B/phase0/lauf-20260818T130117Z-34ee70/`
- **Commit/Push/Stage:** keiner; Lieferdateien bleiben ungestagt
- **Abgrenzung:** nur Phase 0; kein Kandidaten-, Kollisions-, SEO-, Erwerbbarkeits- oder Rechtsurteil

## 1. Ergebnis in einem Satz

Der echte Live-Selbsttest hat alle vier Top-Kanäle mit Positiv- und Negativkontrolle belegt: Domains, Markenregister und Websuche sind **gangbar**, Handles sind wegen Instagram und Facebook **nicht prüfbar per HTTP**; vertragsgemäß nennt der Selbsttest diesen Kanal und endet mit Exit `1`, während die Phase-0-Kontrollabdeckung vollständig ist.

## 2. Prüfaufbau und eingefrorener Stand

Der Commit `a3412f8` wurde mit `git archive` nach `C:/Users/qwafa_2dwxzia/AppData/Local/Temp/codex-r19-b-a3412f8-20260818/source` exportiert. Dieser Scratchpfad liegt außerhalb des Repos und außerhalb von `firma/`. Aus dem Export wurden insbesondere `marke/markenrecherche-verfahren.md`, `marke/naming-kriterienkatalog.md` § 5 sowie die Regeln zu Quellenbeschaffung, Browser-Automation und Windows gelesen.

Der vollständige R19-B-Phase-0-Prompt wurde aus dem aktuellen Tagesplan gelesen: Er liegt im Nachfolgecommit des eingefrorenen fachlichen Stands. Fachdateien wurden ausschließlich aus dem Export bzw. ausdrücklich als Live-Netzobjekt geprüft. Es gab keinen Checkout, keinen Worktree-Umbau und keinen Export nach `firma/`.

Gebaut wurden nur:

- `marke/live-welle/messlauf.js`
- `marke/live-welle/selbsttest.md`
- `protokolle/R19-B-bericht.md`
- Rohbelege unter `sensibel/rohbelege-R19-B/phase0/`

Das Skript verwendet nur Node-Bordmittel. Es speichert vollständige Response-Bodies, Metadaten und Redirect-Hops, hasht jeden Beleg, protokolliert keine Cookie-/Authentisierungswerte und wiederholt nur Timeout-/Netzfehler maximal dreimal mit 0/1/3 Sekunden Wartezeit. Der 12-Sekunden-Timeout umfasst auch den vollständigen Body-Download.

## 3. (a) Kanaltabelle

Alle Zeiten sind MESZ am 18.08.2026. Der Negativwert für Domains/Register war `qzx7r19b20260818088b4b45`; Handles verwendeten zur Pflicht-Zeichenklasse `QzX7R19b20260818Aa981a11`; die Web-Nullphrase ergänzte `vmp9xr3k` und wurde exakt zitiert.

| Kanal | Aufrufform | Positiv Soll / Ist | Negativ Soll / Ist | Ergebnis | Rohbeleg-Pfad + Hash | Zeit |
|---|---|---|---|---|---|---|
| Domains `.de/.com` | DENIC RDAP `/domain/<name>`; Verisign RDAP `/com/v1/domain/<name>` | `hey-pensio.de`: 200, Domainobjekt, `status=["active"]`; `apaleo.com`: 200, Domainobjekt, Statusarray | je TLD Zufallsdomain: 404; nur wegen bestandener Positivkontrolle als funktionierender Negativpfad | **gangbar** | `001–004`; Einzelhashes unten; Manifest `8d4a7f73…` | 15:01:18 |
| Handles | direkte öffentliche Profil-URLs; manuelle Redirectkette, Status + gemessener Profilmarker | LinkedIn `apaleo` und YouTube `@YouTube` treffen; Instagram liefert generische Fehlerroute; Facebook 400-Fehlerseite | gemischte Groß-/Kleinschreibung; LinkedIn/YouTube eindeutig negativ, Instagram/Facebook nicht differenzierbar | **nicht prüfbar**: Instagram und Facebook; LinkedIn/YouTube gangbar | `005–012`; Einzelhashes unten; Manifest `8d4a7f73…` | 15:01:19–15:01:22 |
| Markenregister | Endpunkte im selben Lauf aus amtlichem Frontend-Code zusammengesetzt; DPMA GET JSON, TMview JSON-POST, EUIPO form-urlencoded POST | DPMA `apaleo`: 1; TMview `apaleo`: 53; EUIPO `APPLE`: 963 | dieselbe Parserroute je Register: 0 | **gangbar** | `013–026`; Einzelhashes unten; Manifest `8d4a7f73…` | 15:01:22–15:01:29 |
| Websuche | Google Search HTML, DuckDuckGo HTML, Bing Search HTML | DDG: 10 organische Treffer inkl. `apaleo.com`; Google ohne Resultcontainer; Bing 10 inkl. Herstellerdomain | DDG: 0 organische Treffer + No-results-Marker; Google ohne belastbare Struktur; Bing 10 irrelevante Treffer | **gangbar über DDG**; Google/Bing separat nicht prüfbar | `027–032`; Einzelhashes unten; Manifest `8d4a7f73…` | 15:01:30–15:01:32 |

### 3.1 Direkte Kontrollbelege

| Teilkanal / Richtung | Datei | SHA-256 |
|---|---|---|
| DENIC positiv | `001-domains-de-positiv.body.json` | `59a321977273d6d312dc853b3a5d9c0ddea7fb0c5485fbdcfd2b3718dbac9ce1` |
| DENIC negativ | `002-domains-de-negativ.body.json` | `a07fc609c8ce092b1e7a5113e4ea0a69c48a7ac26183c88b5df5565a40f0f5f7` |
| Verisign positiv | `003-domains-com-positiv.body.json` | `7db624f29b90f48f9d59902fff26b964973f241155a30bbe2dd092e775618e4d` |
| Verisign negativ | `004-domains-com-negativ.body.json` | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` |
| LinkedIn positiv / negativ | `005…` / `006…` | `f9672964034c705d898486707ec8769c0795af012c94c3f62f1505a2f18b8a78` / `8f447ee2be2aa3e41252dfe0a24a87385e659fecc33970a39dc952dd767f6fba` |
| Instagram positiv / negativ | `007…` / `008…` | `ca4a8b898be7f1e80b691b3c59f7495983531411b31e59fa959d0b368a016920` / `d378b990980112f06b14c13bc6e5fe23834e70c1dbffc0b7a568801c04a6310b` |
| Facebook positiv / negativ | `009…` / `010…` | `7f57915e44fd443f67ac4833c55f2057efa0a9ea7f8158443dc438c295dd9c67` / `93226e4042d6976f3f9ed5cdcb8cd6b856e233be4738893e95af48820c758897` |
| YouTube positiv / negativ, finaler Hop | `011…hop-3…` / `012…hop-3…` | `5fadbd28aa65d51690a13a6e3cd7ff371f0e76b31b703926271aaa0725a86eea` / `f79c52d7870a3a87943772f80c9a4342c0baf7e6916f8b1e7a9f77be9a30aa05` |
| DPMA positiv / negativ | `015…` / `016…` | `a6f023d04978e450c1ff139386c8163f880a2e43923692c6ff28e23f269e952b` / `8eaf9528581b9e91a8ae8e75cb3f00eb67fd42c042517691320afe60f3b5b486` |
| TMview positiv / negativ | `020…` / `021…` | `a3281d267aaec04f41c3567ee20b1f14d33d2b5f7e5d3239b0a176c9ef693d0c` / `8964793853a4c8f7bf42fa76056fdd0d66dd360cd68c2c07f0de7604f0c97b56` |
| EUIPO positiv / negativ | `025…` / `026…` | `d017925cfd745f0219b7d92829563bfcb8716f1f368281801c9b676ba717e8f2` / `372c9beec28f2bb038dab1cdf0f8d9ad637a7a64fd36be6cffc2a0b5eb40d17f` |
| DuckDuckGo positiv / negativ | `027…` / `028…` | `02d733b589af49f83f75bb171e144bf47f492ef006e8d8a1fbadd5beb951f6d9` / `16da34e97bf2187a5cbb3ec3f668d3e069d44aadd177705c37a7dd64c83209fd` |
| Google positiv / negativ | `029…` / `030…` | `5ecbb83249afdf8a78bb159ea5fbd2aa873567e13109f2484394bbe7fec703e3` / `505b1fe4086b26af030faddbae3b599220ba7105217807f2c7e97fa378f1d9e7` |
| Bing positiv / negativ | `031…` / `032…` | `b971369d3a1d9203e037af5821318c888370b7052d751050b09c9afbfef117fe` / `a4062f88844b9fcf11afee2b43b4a110d37cc849cc8fe377da74c5fc0cde7289` |

Alle Dateien liegen relativ zum maßgeblichen Laufordner. `hashes.txt` enthält 70 sortierte Zeilen und hat selbst SHA-256 `8d4a7f73c0b873c5f017159929fd6963ed827047cbfad4ba58be4130ae07a958`. Der Lauf umfasst 71 Dateien und 10.756.790 Byte.

## 4. (b) Echter Selbsttest, Ausgabe verbatim und Exitcode

Tatsächlich ausgeführt, ohne Pipe:

```powershell
node marke/live-welle/messlauf.js --selbsttest
$r19bCode = $LASTEXITCODE
Write-Output "R19B_EXIT_CODE=$r19bCode"
```

Die folgende Fassung ist bytegleich mit `selbsttest-ausgabe.txt` bis auf die Markdown-Fence; Dateihash: `c9f35e5a3a87e6b63741500516c0fc7ea413347238ec7341d9095d0dcd102988`.

```text
# R19-B Phase 0 — Live-Selbsttest

- Prüfstand: `a3412f8`
- Beginn: 2026-08-18 15:01:17 MESZ (Europe/Berlin)
- Ende: 2026-08-18 15:01:32 MESZ (Europe/Berlin)
- Laufzeit: 14.102 s
- Rohbelege: `C:\Users\qwafa_2dwxzia\firma\marketing\sensibel\rohbelege-R19-B\phase0\lauf-20260818T130117Z-34ee70`

| Kanal | Positivkontrolle | Negativkontrolle | Befund |
|---|---:|---:|---|
| Domains .de/.com | belegt | belegt | **gangbar** |
| Handles | belegt | belegt | **nicht prüfbar** |
| Markenregister | belegt | belegt | **gangbar** |
| Websuche | belegt | belegt | **gangbar** |

## Teilkanäle und Rohbelege

### Domains .de/.com: gangbar

- **.de: gangbar**
  - Positiv Soll: 200 + RDAP-Domainobjekt hey-pensio.de
  - Positiv Ist: 200; objectClassName=domain; ldhName=hey-pensio.de; status=["active"]
  - Positiv Beleg: `001-domains-de-positiv.body.json (SHA-256 59a321977273d6d312dc853b3a5d9c0ddea7fb0c5485fbdcfd2b3718dbac9ce1)`
  - Negativ Soll: 404 für zufällige, nicht registrierte Kontroll-Domain qzx7r19b20260818088b4b45-de.de
  - Negativ Ist: 404
  - Negativ Beleg: `002-domains-de-negativ.body.json (SHA-256 a07fc609c8ce092b1e7a5113e4ea0a69c48a7ac26183c88b5df5565a40f0f5f7)`
  - Einordnung: 404 wird nur wegen bestandener Positivkontrolle als funktionierender RDAP-Negativpfad gewertet.
- **.com: gangbar**
  - Positiv Soll: 200 + RDAP-Domainobjekt apaleo.com
  - Positiv Ist: 200; objectClassName=domain; ldhName=APALEO.COM; status=["client transfer prohibited"]
  - Positiv Beleg: `003-domains-com-positiv.body.json (SHA-256 7db624f29b90f48f9d59902fff26b964973f241155a30bbe2dd092e775618e4d)`
  - Negativ Soll: 404 für zufällige, nicht registrierte Kontroll-Domain qzx7r19b20260818088b4b45-com.com
  - Negativ Ist: 404
  - Negativ Beleg: `004-domains-com-negativ.body.json (SHA-256 e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855)`
  - Einordnung: 404 wird nur wegen bestandener Positivkontrolle als funktionierender RDAP-Negativpfad gewertet.

### Handles: nicht prüfbar

- **LinkedIn: gangbar**
  - Positiv Soll: belegtes Profil apaleo mit plattformspezifischem Profilmarker
  - Positiv Ist: 200; Titel=Apaleo | LinkedIn; canonical=https://de.linkedin.com/company/apaleo
  - Positiv Beleg: `005-handles-LinkedIn-positiv.body.html (SHA-256 f9672964034c705d898486707ec8769c0795af012c94c3f62f1505a2f18b8a78)`
  - Negativ Soll: Zufallshandle QzX7R19b20260818Aa981a11 mit eindeutigem Nichtvorhanden-Marker
  - Negativ Ist: 404; Titel=LinkedIn; canonical=—
  - Negativ Beleg: `006-handles-LinkedIn-negativ.body.html (SHA-256 8f447ee2be2aa3e41252dfe0a24a87385e659fecc33970a39dc952dd767f6fba)`
  - Einordnung: Der HTTP-Pfad unterscheidet die Kontrollen. Ein 404 bleibt bei Kandidaten nur ein Indiz, keine Freigabe.
- **Instagram: nicht prüfbar**
  - Positiv Soll: belegtes Profil instagram mit plattformspezifischem Profilmarker
  - Positiv Ist: 200; Titel=Instagram; canonical=—
  - Positiv Beleg: `007-handles-Instagram-positiv.body.html (SHA-256 ca4a8b898be7f1e80b691b3c59f7495983531411b31e59fa959d0b368a016920)`
  - Negativ Soll: Zufallshandle QzX7R19b20260818Aa981a11 mit eindeutigem Nichtvorhanden-Marker
  - Negativ Ist: 200; Titel=Instagram; canonical=—
  - Negativ Beleg: `008-handles-Instagram-negativ.body.html (SHA-256 d378b990980112f06b14c13bc6e5fe23834e70c1dbffc0b7a568801c04a6310b)`
  - Einordnung: Generische Fehler-, Login-, Consent- oder Bot-Seiten werden nicht als Profilbefund interpretiert; Browser-/Plattformsuche bleibt nötig.
- **Facebook: nicht prüfbar**
  - Positiv Soll: belegtes Profil apaleoGmbH mit plattformspezifischem Profilmarker
  - Positiv Ist: 400; Titel=Error; canonical=—
  - Positiv Beleg: `009-handles-Facebook-positiv.body.html (SHA-256 7f57915e44fd443f67ac4833c55f2057efa0a9ea7f8158443dc438c295dd9c67)`
  - Negativ Soll: Zufallshandle QzX7R19b20260818Aa981a11 mit eindeutigem Nichtvorhanden-Marker
  - Negativ Ist: 400; Titel=Error; canonical=—
  - Negativ Beleg: `010-handles-Facebook-negativ.body.html (SHA-256 93226e4042d6976f3f9ed5cdcb8cd6b856e233be4738893e95af48820c758897)`
  - Einordnung: Generische Fehler-, Login-, Consent- oder Bot-Seiten werden nicht als Profilbefund interpretiert; Browser-/Plattformsuche bleibt nötig.
- **YouTube: gangbar**
  - Positiv Soll: belegtes Profil YouTube mit plattformspezifischem Profilmarker
  - Positiv Ist: 200; Titel=YouTube - YouTube; canonical=https://www.youtube.com/channel/UCBR8-60-B28hp2BmDPdntcQ
  - Positiv Beleg: `011-handles-YouTube-positiv.hop-3.body.html (SHA-256 5fadbd28aa65d51690a13a6e3cd7ff371f0e76b31b703926271aaa0725a86eea)`
  - Negativ Soll: Zufallshandle QzX7R19b20260818Aa981a11 mit eindeutigem Nichtvorhanden-Marker
  - Negativ Ist: 404; Titel=404 Not Found; canonical=—
  - Negativ Beleg: `012-handles-YouTube-negativ.hop-3.body.html (SHA-256 f79c52d7870a3a87943772f80c9a4342c0baf7e6916f8b1e7a9f77be9a30aa05)`
  - Einordnung: Der HTTP-Pfad unterscheidet die Kontrollen. Ein 404 bleibt bei Kandidaten nur ein Indiz, keine Freigabe.

### Markenregister: gangbar

- **DPMAregister: gangbar**
  - Positiv Soll: Smartsearch „apaleo“ liefert marErrors="" und marHits >= 1
  - Positiv Ist: Discovery=true; HTTP 200; marHits=1
  - Positiv Beleg: `015-register-dpma-positiv.body.json (SHA-256 a6f023d04978e450c1ff139386c8163f880a2e43923692c6ff28e23f269e952b)`
  - Negativ Soll: Smartsearch „qzx7r19b20260818088b4b45“ liefert über dieselbe JSON-/Parserroute marErrors="" und marHits=0
  - Negativ Ist: Discovery=true; HTTP 200; marHits=0
  - Negativ Beleg: `016-register-dpma-negativ.body.json (SHA-256 8eaf9528581b9e91a8ae8e75cb3f00eb67fd42c042517691320afe60f3b5b486)`
  - Einordnung: Der Smartsearch-Pfad wird im selben Lauf aus smartsearchInt.js der offiziellen DPMA-Basisrecherche entdeckt; ein Treffer beweist keine aktive Eintragung.
- **TMview: gangbar**
  - Positiv Soll: „apaleo“ liefert über den aus offiziellem Frontend-Code abgeleiteten JSON-Pfad mindestens 1 Treffer
  - Positiv Ist: Discovery=true; HTTP 200; Treffer=53
  - Positiv Beleg: `020-register-tmview-positiv.body.json (SHA-256 a3281d267aaec04f41c3567ee20b1f14d33d2b5f7e5d3239b0a176c9ef693d0c)`
  - Negativ Soll: „qzx7r19b20260818088b4b45“ liefert über dieselbe Route 0 Treffer
  - Negativ Ist: Discovery=true; HTTP 200; Treffer=0
  - Negativ Beleg: `021-register-tmview-negativ.body.json (SHA-256 8964793853a4c8f7bf42fa76056fdd0d66dd360cd68c2c07f0de7604f0c97b56)`
  - Einordnung: Eine SPA-Shell oder ein Transportfehler wird nicht als Registerergebnis interpretiert.
- **EUIPO eSearch: gangbar**
  - Positiv Soll: belegte EUIPO-Marke „APPLE“ liefert über den aus offiziellem Frontend-Code abgeleiteten JSON-Pfad mindestens 1 Treffer
  - Positiv Ist: Discovery=true; HTTP 200; Treffer=963
  - Positiv Beleg: `025-register-euipo-positiv.body.json (SHA-256 d017925cfd745f0219b7d92829563bfcb8716f1f368281801c9b676ba717e8f2)`
  - Negativ Soll: „qzx7r19b20260818088b4b45“ liefert über dieselbe Route 0 Treffer
  - Negativ Ist: Discovery=true; HTTP 200; Treffer=0
  - Negativ Beleg: `026-register-euipo-negativ.body.json (SHA-256 372c9beec28f2bb038dab1cdf0f8d9ad637a7a64fd36be6cffc2a0b5eb40d17f)`
  - Einordnung: Eine SPA-Shell, Bot-Sperre oder nicht parsebare Antwort bleibt ausdrücklich nicht prüfbar.
- **Handelsregister: nicht erhoben** — Phase 0: kein stabiler anonymer, offiziell dokumentierter Maschinenpfad innerhalb des Zeitdeckels; kein geratenes Negativ.

### Websuche: gangbar

- **DuckDuckGo HTML: gangbar**
  - Positiv Soll: strukturierte Ergebnisanker; Herstellerdomain apaleo.com unter den Treffern
  - Positiv Ist: HTTP 200; Ergebnisanker=10; apaleo.com=true
  - Positiv Beleg: `027-web-duckduckgo-positiv.body.html (SHA-256 02d733b589af49f83f75bb171e144bf47f492ef006e8d8a1fbadd5beb951f6d9)`
  - Negativ Soll: exakt zitierte globale Nullfolge "qzx7r19b20260818088b4b45vmp9xr3k": 0 Ergebnisanker + No-results-Marker
  - Negativ Ist: HTTP 200; Ergebnisanker=0; No-results-Marker=true
  - Negativ Beleg: `028-web-duckduckgo-negativ.body.html (SHA-256 16da34e97bf2187a5cbb3ec3f668d3e069d44aadd177705c37a7dd64c83209fd)`
  - Einordnung: DuckDuckGo-Redirectlinks werden über den uddg-Parameter dekodiert.
- **Google: nicht prüfbar**
  - Positiv Soll: echte Ergebnislinks mit apaleo.com
  - Positiv Ist: HTTP 200; extrahierte Ergebnislinks=0; apaleo.com=false
  - Positiv Beleg: `029-web-google-positiv.body.html (SHA-256 5ecbb83249afdf8a78bb159ea5fbd2aa873567e13109f2484394bbe7fec703e3)`
  - Negativ Soll: exakt zitierte Nullfolge "qzx7r19b20260818088b4b45vmp9xr3k": 0 Ergebnislinks + Nullmarker
  - Negativ Ist: HTTP 200; extrahierte Ergebnislinks=0
  - Negativ Beleg: `030-web-google-negativ.body.html (SHA-256 505b1fe4086b26af030faddbae3b599220ba7105217807f2c7e97fa378f1d9e7)`
  - Einordnung: Eine 200er Support-, Consent- oder JavaScript-Shell ohne Resultcontainer besteht die Positivkontrolle nicht.
- **Bing: nicht prüfbar**
  - Positiv Soll: li.b_algo-Ergebnisanker mit apaleo.com
  - Positiv Ist: HTTP 200; Ergebnisanker=10; apaleo.com=true
  - Positiv Beleg: `031-web-bing-positiv.body.html (SHA-256 b971369d3a1d9203e037af5821318c888370b7052d751050b09c9afbfef117fe)`
  - Negativ Soll: exakt zitierte Nullfolge "qzx7r19b20260818088b4b45vmp9xr3k": 0 Ergebnisanker + Nullmarker
  - Negativ Ist: HTTP 200; Ergebnisanker=10
  - Negativ Beleg: `032-web-bing-negativ.body.html (SHA-256 a4062f88844b9fcf11afee2b43b4a110d37cc849cc8fe377da74c5fc0cde7289)`
  - Einordnung: Irrelevante Treffer für die Nullfolge gelten nicht als bestandene Negativkontrolle.
- Aggregatregel: Aggregat gangbar, sobald mindestens eine unabhängige Suchmaschine beide Kontrollen über dieselbe Parserroute besteht; Ausfälle bleiben separat sichtbar.

## Abschluss

SELBSTTEST EXIT 1 — nicht vollständig gangbar: Handles=nicht prüfbar. Alle Kanäle bleiben ausdrücklich ausgewiesen.

Kontrollabdeckung vollständig: JA. Ein belegtes „nicht prüfbar“ erfüllt die Phase-0-Dokumentationspflicht, ist nach dem CLI-Vertrag aber kein stiller Exit 0.

Kein Ergebnis ist eine Verfügbarkeits-, Kollisions-, SEO-, Erwerbbarkeits- oder Rechtsentscheidung.
```

Direkt nach der Skriptausgabe, ohne Pipe dazwischen, meldete die Shell:

```text
R19B_EXIT_CODE=1
```

Der Exit `1` ist der vorgeschriebene Fail-closed-Ausgang für `Handles = nicht prüfbar`, nicht ein interner Testfehler. `selbsttest-ergebnis.json` trägt `coverageComplete=true`, `pass=false` und SHA-256 `09e83bfb8a49165cab11bab29f7a0f09296cd81f2ab85ea5287f1f2bf57df4e7`.

Zusätzliche lokale Prüfungen:

- `node --check marke/live-welle/messlauf.js` → Exit `0`
- `node marke/live-welle/messlauf.js --hilfe` → Exit `0`
- unabhängige Re-Review nach der Exitkorrektur: kein weiterer eindeutiger Phase-0-Blocker

## 5. (c) Nicht erhoben / nicht prüfbar

- **Handles insgesamt:** nicht prüfbar per anonymem HTTP, weil Instagram die bekannte und die unsinnige URL als generische Fehlerroute ausliefert und Facebook beide mit derselben 400-Fehlerseite beantwortet. Nicht erhoben wurden plattforminterne Suche, reservierte Handles ohne sichtbares Profil, deaktivierte/private Profile, eingeloggte Sicht und regionale Varianten.
- **LinkedIn/YouTube:** ihre Kontrollpaare sind HTTP-gangbar; bei Kandidaten bleibt eine 404 dennoch nur ein Indiz. Die zweite Pflichtachse aus Verfahren § 7, die Plattformsuche im Browser, wurde in Phase 0 nicht ausgeführt.
- **Google:** nicht prüfbar, weil der 200er Body keine echten Resultcontainer und keine Herstellerdomain trägt. **Bing:** Positivkontrolle gangbar, Negativkontrolle nicht; die exakte Nullphrase erzeugte zehn irrelevante Treffer. Beide Teilkanäle werden nicht zu Nullbefunden umgedeutet.
- **Handelsregister:** nicht erhoben. Der Portalpfad ist JSF-/ViewState- und sessiongebunden; innerhalb des Phase-0-Deckels wurde kein dauerhaft stabiler anonymer Kontrollpfad als Pflichtteil übernommen.
- **Domains:** geprüft wurde der RDAP-Registrierungszustand am Messzeitpunkt, nicht DNS-Auflösung, Registrarverkauf, Preis, Premium-/Reservierungsstatus, Transferierbarkeit oder Erwerbbarkeit.
- **Markenregister:** geprüft wurde die technische Suchroute samt Trefferzahl, nicht Ähnlichkeit, Nizza-Warenvergleich, Rechtsbestand, Inhaberidentität oder Kollisionsgefahr. Der DPMA-Positivtreffer kann insbesondere einen nicht mehr aktiven Aktenzustand tragen.
- **Websuche:** geprüft wurde die technische Extrahierbarkeit. Nicht erhoben wurden Personalisierung, vollständiger Index, regionale SERP-Varianten, SEO-Wert oder Verwechslungsgefahr.
- **Frühere Entwicklungs-Messläufe:** unter `phase0/` erhalten, aber nicht maßgeblich. Alle Aussagen dieses Berichts beziehen sich auf `lauf-20260818T130117Z-34ee70`.

## 6. (d) Welcher meiner Prüfschritte hätte einen vorhandenen Fehler NICHT finden können?

1. **Kandidatenantwort weicht vom Kontrollschema ab:** Ein Register kann Kontrollen im erwarteten JSON-Schema liefern, bei Sonderzeichen oder sehr breiten Kandidatensuchen aber ein anderes Schema ausgeben. Das Skript verlangt deshalb die exakten Top-Level-Felder (`totalResults + tradeMarks` bzw. `total + items`); eine Abweichung wird nicht als 0 gewertet. Inhaltlich falsche, aber schema-konforme Datensätze würde dieser Schritt dennoch nicht erkennen.
2. **Unsichtbare oder reservierte Handles:** Direkte Profil-URLs finden keine intern reservierten Namen ohne öffentliches Profil. Selbst ein sauberer LinkedIn-/YouTube-404 kann diesen Fehler nicht ausschließen; Phase 1 braucht die Plattform-Suche.
3. **HTML-Strukturänderung:** DuckDuckGo, LinkedIn oder YouTube könnten Marker ändern. Die Positivkontrolle macht den Teilkanal dann tot statt fälschlich frei. Eine subtil falsche, weiterhin regex-kompatible Struktur könnte jedoch unbemerkt bleiben.
4. **Suchmaschinen-Indexlücke:** Eine funktionierende DDG-Kontrolle beweist, dass die Parserroute arbeitet, nicht dass jede reale Erwähnung indexiert ist. Regional oder zeitverzögert indexierte Treffer können fehlen.
5. **Registerinhalt statt Transport:** 53 TMview- oder 963 EUIPO-Treffer beweisen den Positivpfad. Ob eine Kandidatenmarke ähnlich, erloschen, beschreibend oder in relevanten Klassen kollidierend ist, kann die technische Trefferzählung nicht entscheiden.
6. **RDAP-Rennen und Reservierung:** Ein 404 nach grüner Kontrolle beweist nur die RDAP-Antwort dieses Moments. Eine zeitgleiche Registrierung oder TLD-interne Reservierung außerhalb RDAP könnte der Schritt nicht finden.
7. **Discovery-Primärdatei ändert sich semantisch:** DPMA, TMview und EUIPO werden aus geladenem Frontend-Code zusammengesetzt; fehlt ein erwartetes Fragment, fällt die Kontrolle. Wenn ein Anbieter denselben Pfadstring behält, aber dessen Semantik ändert und weiterhin plausible Felder liefert, erkennt nur eine stärkere fachliche Stichprobe den Fehler.

## 7. (e) Übergabe an Phase 1

Phase 1 startet erst auf ausdrücklichen Zuruf mit der Favoriten-Datei.

Exakter Aufruf aus `marketing/`:

```powershell
node marke/live-welle/messlauf.js --kandidaten=marke/<favoriten-datei> --aus=sensibel/rohbelege-R19-B/phase1
```

Eingabeformat:

```text
N-01;Klarname
N-02;Klarname;variante1|variante2
```

Regeln und Ausgabe:

- ID exakt `N-XX`, eindeutig; maximal zwölf Namen/Varianten je ID.
- Beleg- und Statusdateinamen enthalten nur ID und Variantenindex, nie den Klarname.
- Vor den Kandidaten laufen dieselben echten Kontrollfunktionen wie in Phase 0.
- Je Variante: zwei RDAP-Abrufe, vier Handle-Abrufe, DPMA/TMview/EUIPO sowie Google/Bing und DuckDuckGo allein plus sechs Kontextabfragen.
- DuckDuckGo liest das echte Folgeformular und speichert bis zu 20 organische Treffer mit Titel und URL für `Hotel · Hotellerie · PMS · Check-in · Gastgewerbe · Software`.
- Erwartungswert bei antwortenden Diensten: ungefähr 2–8 Minuten je Kandidat; ein erschöpfter Dreifach-Timeout kann einzelne Abrufe um rund 40 Sekunden verlängern. Laufzeit vor Start gegen den verfügbaren Deckel planen.
- Browser-Nachzug durch die Leitsession: Instagram und Facebook zwingend; LinkedIn/YouTube zusätzlich über Plattformsuche; Google/Bing nur, wenn deren Kontrollpaare in jenem Lauf wieder nicht bestehen; Handelsregister nur bei bewusster Aufnahme.
- Jeder neue Kontrollausfall entwertet die Zahlen dieses Teilkanals. Kein Kandidat erhält durch das Skript eine Freigabe.

## 8. (f) Arbeitsbaum-Momentaufnahme

Nach Erstellung der drei sichtbaren Lieferdateien lautete die lokal gemessene R19-B-Momentaufnahme:

```text
?? marke/live-welle/
?? protokolle/R19-B-bericht.md
!! sensibel/
```

`!! sensibel/` erschien nur mit `git status --short --ignored`, weil der Rohbelegpfad absichtlich git-ignoriert ist. `git diff --cached --name-only` war leer; der Index blieb leer. Die Warnung zur nicht lesbaren globalen Ignore-Datei änderte Status und Exitcode nicht. Keine Datei wurde gestagt, committet oder gepusht.

## 9. Erfüllter benannter Posten und Nebenbefunde

Erfüllt ist **Projektquelle § 7 4b „Prompt-Pflichten E-V4: Positivkontrolle je Prüfkanal“**: Jeder Top-Kanal und jeder angekündigte Teilkanal besitzt im maßgeblichen Lauf eine positive und eine negative Richtung; Ausfälle bleiben als `nicht prüfbar` sichtbar.

Nebenbefunde ohne Erweiterung des Auftrags:

- DPMA stellt in seinem eigenen `smartsearchInt.js` einen stabileren JSON-Kontrollpfad bereit als das dynamische Tapestry-Basisformular.
- DuckDuckGo kann bei einer Nullphrase einen Anzeigenblock liefern. `result--ad` wird deshalb strukturell ausgeschlossen; organischer No-results-Marker und 0 organische Treffer müssen gemeinsam vorliegen.
- Ein 200er Body ist bei Google/Instagram kein Erfolgssignal. Erst ein gemessener Result-/Profilmarker macht den Teilkanal gangbar.
- EUIPO `apaleo` ist keine geeignete dortige Positivkontrolle; die belegte Marke `APPLE` liefert über dieselbe offizielle Route 963 Treffer. TMview und DPMA verwenden weiterhin den umfeldnahen Wert `apaleo`.

---

# § 2 — Phase 1: Messlauf über die fünf Favoriten (Leitsession Shanks, 18.08.2026 17:09–17:20 MESZ)

> ⚠️ **Abweichung vom Zuschnitt „Codex misst — Leitsession bewertet":**
> Die Codex-Startzeile für Phase 1 kam beim User nicht an (Tagesplan
> Nachtrag ~16:55); die Leitsession hat den Lauf SELBST gefahren und
> bewertet ihn auch — Messung und Bewertung in einer Hand. Beleg bleiben
> die Rohdateien mit Hashes und die Kontrollpaare des Laufs. **Werkzeug-
> befund am ersten Anlauf:** ID-Parser akzeptierte nur `N-\d{2}` —
> dreistellige IDs (ab N-100) fielen durch; Fix `\d{2,3}` (`4e371cd`),
> zweiter Anlauf = maßgeblicher Lauf.

- **Maßgeblicher Lauf:** `sensibel/rohbelege-R19-B/phase1/lauf-20260818T150921Z-3872d0/`
  (859 Dateien, `hashes.txt`, `kandidaten-ergebnis.json`); Ausgabe
  `sensibel/rohbelege-R19-B/phase1-stdout.md` (371 Zeilen). Aufruf wie § 7 (e),
  Kandidatendatei `marke/live-welle/favoriten-2026-08-18.txt` (5 IDs × 4
  Namen/Varianten). Exit 1 = vertragsgemäß (Handles nicht prüfbar).
- **(a) Kontroll-Wiederholung:** identisch zu Phase 0 — Domains `.de/.com`
  gangbar (pos/neg ✔) · Handles: LinkedIn/YouTube gangbar, Instagram/
  Facebook nicht prüfbar · Register DPMA/TMview/EUIPO gangbar (pos 1/53/963,
  neg 0/0/0) · Websuche: DDG-Kontrolle gangbar, Google/Bing nicht prüfbar.
  **⚠️ Kanal-Kippen WÄHREND des Laufs:** DDG lieferte für ALLE 20
  Kandidaten-Abfragen HTTP **202** mit „organische Treffer=0" — die
  Kontrolle traf zu Laufbeginn, die Kandidatenabfragen liefen in eine
  Rate-Limit-/Challenge-Antwort. **Alle DDG-Kandidatenzahlen sind TOT**
  (Werkzeug, nicht Sache); W7 aus diesem Lauf **nicht erhoben** — Ersatz:
  Browser-Umfeldbefunde der Leitsession (Tagesplan 16:43, YouTube-Suchen).
  LinkedIn HTTP: 999 für drei Kandidaten (Bot-Sperre nach mehreren
  Abrufen) → dort nur die Browser-/Bing-Befunde.

## (b) Ergebnistabelle Klarnamen (Variante 1; Varianten 2–4 nur als Datei)

| ID | Name | `.de` (RDAP) | `.com` (RDAP) | DPMA | TMview (gesamt) | EUIPO | Handles HTTP (LI / YT) |
|---|---|---|---|---|---|---|---|
| N-130 | Hostwise | **registriert** — NS `sl1/sl2.sedo.com` (Parking/Verkaufsplattform, zuletzt geändert 2023-01-16) | **registriert** seit 2002-06-11, Registrar Spaceship, exp. 2026-09-16 | **0** | 6 — nur NZ (Evergreen, Kl. 41/42, eingetragen) · US (Host Wise Co, Kl. 36) · NZ abgelaufen · US „HOSTWISER" beendet; **kein DE/EM/WO** | **0** | LI 999 (Bot) / YT „Host Wise" (Kanal, PT-Ferienvermieter) |
| N-131 | Staywise | **registriert** (NS kasserver.com, 2022-04-28) | **registriert** seit 1999, MarkMonitor (AT&T-Nameserver) | **1** | 7 — **EM 42 „STAYWISE" EINGETRAGEN (Björndal, Per, angemeldet 2026-01-30, Schutz alle EU-Staaten)** · US Kl. 9 angemeldet (SensorTower 2026) · GB Kl. 9/16/35/38/41 abgelaufen + GB „StayWise Saving Lives …" eingetragen · CN/MX/NZ | **1** (Kl. 42, Registered) | LI 200 „Staywise" / YT „STAY WISE" (376k) |
| N-132 | Hostpilot | **registriert** (NS cloudpit, 2020-01-08) | **registriert** seit 1999, **NS Intermedia** | **2** | 10 — **alle Intermedia.net: EM 9/38/42 EINGETRAGEN (2008), EM 35/38/42 abgelaufen, GB 9/38/42, US 9/42, CN** | **2** (Kl. 9/38/42 Registered; 35/38/42 expired) | LI 999 / YT fremd |
| N-133 | Cleverhost | **registriert** (DENIC, ohne Nameserver, zuletzt geändert **2026-06-07**) | **registriert** seit 1998, Porkbun (kanadischer Web-Hoster lt. YouTube) | **0** | 1 — CL „cleverhost" Kl. 42 beendet | **0** | LI 404 / YT 404 |
| N-134 | Checkmate | **registriert** (NS kv-gmbh.de, 2026-03-04) | **registriert** seit 1998, Microsoft-Nameserver | **53** (+14 Patente) | **836** — Auszug (30 gezeigt): EM 33 · EM 9/37/41/42 abgelaufen · EM 7/12/17/20 · DE 9 abgelaufen · CA 42 · viele US | **22** — u. a. **„CHECKMATE" Kl. 42 Registered · Kl. 9 Registered (2×) · Kl. 9/42/45 IR accepted · „Checkmate Vision" 9/35/42 published · „VAN AMEYDE CHECKMATE" 36/42/45** | LI 999 / YT fremd |

Varianten (Bindestrich/phonetisch/Endung): `.de` durchweg 404 (nicht
registriert) außer den Klarnamen; `.com` bei Hostwise-Varianten
mehrfach registriert (host-wise.com, hostwize.com, hostwyse.com —
Zeilen v02–v04); Register-Varianten überall 0 außer TMview
`host-wise` 11 (Wortmarken mit „host wise"-Bestandteil, nicht einzeln
gelesen). Details: `phase1-stdout.md`.

## (c) Bewertung K2 / K3 / W7 / W8 (Leitsession — das ist die URTEILS-Hälfte)

Suchraum K2: Verfahren § 2.2 (Klassen 9/35/36/37/38/41/42 + 43); Belegstufe:
Register-Rohtreffer selbst gelesen (Klarname, exakte Zeichenfolge; keine
Ähnlichkeitsrecherche mit Trunkierung außer TMview-Fuzzy), Umfeld aus
Browser (Tagesplan 16:43).

| Name | K2 Marken (DE/EU) | K2 Umfeld (§ 5, unregistrierte Kennzeichen) | K3 Domains | W8 Handles | Gesamturteil Schreibtisch+Live |
|---|---|---|---|---|---|
| **Hostwise** | **kein Treffer DPMA/EUIPO; TMview nur NZ/US** → registerseitig frei im DE/EU-Raum | ⚠️ Ferienwohnungs-Manager „Host Wise" (Portugal, hostwise.pt, LinkedIn `host-wise`) + „HostWise" Tbilisi — Klasse 43/35-nah, kein Software-Anbieter; PT ist EU-Mitglied (nationale Benutzungsmarke denkbar, Verkehrsgeltung in DE unwahrscheinlich) | ✗ `.de` bei **Sedo geparkt → realistisch erwerbbar (Preis unbekannt)**; `.com` vergeben (Kleinhalter?, exp. 09/2026 — Erwerbbarkeit ungeklärt) | LI/FB/YT vergeben, IG Indiz frei | **einziger Kandidat mit gangbarem Pfad** — Vorbehalte: .com, Handles, PT-Namensvetter im Nachbarfeld |
| **Cleverhost** | kein Treffer DPMA/EUIPO; TMview CL beendet → registerseitig frei | ⚠️ „CleverHost Web Hosting" (Kanada, Kl. 42 — Hosting ist DIE Verwechslungsrichtung, die der User am Host-Stamm selbst bemängelt: „klingt nach Internetanbieter"); nicht in EU registriert | ✗ `.de` vergeben, ohne Nameserver, **erst 06/2026 geändert** (jemand hält sie aktiv); `.com` beim Web-Hoster | IG/FB/LI/YT Indiz frei (404/generisch) | gangbar, aber K1 mittel–hoch + Hosting-Verwechslung; Domains beide weg |
| **Staywise** | ✗ **Unionsmarke „STAYWISE" Kl. 42, eingetragen 2026, Schutz alle EU-Staaten (Björndal)** — identisches Zeichen in unserer Kernklasse | Musik/Entertainment (branchenfremd) | ✗ beide vergeben (.com AT&T/MarkMonitor) | alle vergeben | **K.-o. (K2)** |
| **Hostpilot** | ✗ **Intermedia „HOSTPILOT" EM Kl. 9/38/42 eingetragen** (+ GB/US/CN) | Intermedia-Produkt aktiv (hostpilot.com), Short-Term-Rental-Service, Hackathon-Agent | ✗ beide vergeben (.com Intermedia) | vergeben | **K.-o. (K2)** |
| **Checkmate** | ✗ **mehrere EU-Marken „CHECKMATE" in Kl. 9 und 42 eingetragen**, weitere angemeldet (9/35/42), 53 DPMA-Treffer | Restaurant-Software „Checkmate", „Checkinmate.ai" (Hotel) | ✗ beide vergeben (.com Konzern) | vergeben | **K.-o. (K2)** |

**Nicht erhoben / nicht prüfbar (§ 2):** DDG-Kandidatenzahlen (202) · Google/
Bing · Instagram/Facebook per HTTP (Browser: Tagesplan 16:43) · Handelsregister ·
Ähnlichkeitsrecherche mit Trunkierung/Varianten-Raster im Register (nur die
vier gelisteten Varianten je Name, exakt) · Ähnlichkeit „Host Wise" vs.
„Hostwise" rechtlich (Anwalt, E-K5) · Erwerbbarkeit/Preis der Domains ·
K4-Diktat-Test · EN-Muttersprachler.

**`git status --short` nach dem Lauf (Leitsession):** nur `M protokolle/
R19-B-bericht.md` + Tagesplan; Rohbelege git-ignoriert.
