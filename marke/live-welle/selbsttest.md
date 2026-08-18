# R19-B — Selbsttest der Live-Welle

- **Phase:** 0
- **Prüfstand:** `a3412f8`
- **Maßgeblicher Lauf:** `sensibel/rohbelege-R19-B/phase0/lauf-20260818T130117Z-34ee70/`
- **Beginn:** 18.08.2026, 15:01:17 MESZ
- **Ende:** 18.08.2026, 15:01:32 MESZ
- **Laufzeit:** 14,102 s
- **Exitcode:** `1`, unmittelbar nach dem ungepipelten Node-Aufruf gelesen; vertragsgemäß wegen `Handles = nicht prüfbar`

## Aufruf

```powershell
node marke/live-welle/messlauf.js --selbsttest
$LASTEXITCODE
```

Der tatsächlich ausgeführte Prüfaufruf hatte keine Pipe. Die Shell gab nach der vollständigen Skriptausgabe separat `R19B_EXIT_CODE=1` aus. Die bytegenaue Skriptausgabe liegt in `selbsttest-ausgabe.txt`; ihr SHA-256 ist `c9f35e5a3a87e6b63741500516c0fc7ea413347238ec7341d9095d0dcd102988`.

## Ergebnis

| Top-Kanal | Positivkontrolle | Negativkontrolle | Phase-0-Befund |
|---|---|---|---|
| Domains `.de` und `.com` | belegt | belegt | **gangbar** |
| Handles | belegt | belegt | **nicht prüfbar** |
| Markenregister | belegt | belegt | **gangbar** |
| Websuche | belegt | belegt | **gangbar** |

Die Kontrollabdeckung ist vollständig und erfüllt damit das Phase-0-Fertigkriterium. Der CLI-Vertrag ist strenger: Exit `0` ist nur erlaubt, wenn in allen vier Top-Kanälen beide Kontrollen das Soll treffen. Deshalb nennt der Lauf den Handle-Kanal ausdrücklich und endet mit Exit `1`; `nicht prüfbar` wird nicht still grün gerechnet. Das Ergebnis ist weder Namensfreigabe noch Kollisions-, SEO-, Erwerbbarkeits- oder Rechtsbewertung.

## Kontrollpaare und Auswertung

### Domains

| Teilkanal | Positiv | Negativ | Befund |
|---|---|---|---|
| DENIC RDAP `.de` | `hey-pensio.de`: HTTP 200, RDAP-Objekt `domain`, passender `ldhName` | Zufallsdomain: HTTP 404 | gangbar |
| Verisign RDAP `.com` | `apaleo.com`: HTTP 200, RDAP-Objekt `domain`, passender `ldhName` | Zufallsdomain: HTTP 404 | gangbar |

Eine 404 wird nur bei im selben Lauf bestandener Positivkontrolle als funktionierender Negativpfad des jeweiligen RDAP-Dienstes gewertet.

### Handles

| Plattform | Positiv | Negativ | Befund |
|---|---|---|---|
| LinkedIn | `apaleo`: HTTP 200, Organisations-PageKey und Canonical | Zufallshandle: HTTP 404 mit `Page not found` | gangbar |
| Instagram | `instagram`: HTTP 200, aber generische Fehlerroute ohne Profilmarker | Zufallshandle: dieselbe generische Fehlerroute | nicht prüfbar |
| Facebook | `apaleoGmbH`: HTTP 400, generische Fehlerseite | Zufallshandle: HTTP 400, generische Fehlerseite | nicht prüfbar |
| YouTube | `@YouTube`: Redirectkette, final HTTP 200 und Canonical-Channel | Zufallshandle: Redirectkette, final HTTP 404 | gangbar |

Der Top-Kanal bleibt `nicht prüfbar`, weil Instagram und Facebook ihre Kontrollpaare über anonymes HTTP nicht belastbar unterscheiden. Auch bei gangbaren Teilkanälen ist eine 404 bei Kandidaten nur ein Indiz; Direkt-URL und Plattformsuche im Browser bleiben der Nachzug.

### Markenregister

| Register | Positiv | Negativ | Befund |
|---|---|---|---|
| DPMAregister | aus offiziellem `smartsearchInt.js` entdeckte JSON-Route; `apaleo`: `marHits=1`, `marErrors=""` | Zufallswert: `marHits=0`, `marErrors=""` | gangbar |
| TMview | aus offiziellem Frontend-Code abgeleitete JSON-Route; `apaleo`: 53 Treffer | Zufallswert: 0 Treffer | gangbar |
| EUIPO eSearch | aus offiziellem Frontend-Code abgeleitete JSON-Route; `APPLE`: 963 Treffer | Zufallswert: 0 Treffer | gangbar |

Ein Treffer ist hier nur die bestandene technische Positivkontrolle, keine Aussage zu Schutzstatus oder Kollision. Das optionale Handelsregister wurde in Phase 0 nicht erhoben: Sein anonymer JSF-Pfad ist session- und ViewState-gebunden; ein geratenes Negativ wäre unzulässig.

### Websuche

| Suchmaschine | Positiv | Negativ | Befund |
|---|---|---|---|
| DuckDuckGo HTML | 10 organische Ergebnisanker, darunter `apaleo.com` | exakt zitierte Zufallsphrase: 0 organische Ergebnisanker und No-results-Marker | gangbar |
| Google | HTTP 200, aber keine extrahierbaren Ergebniscontainer und kein `apaleo.com` | ebenfalls keine belastbare Resultstruktur | nicht prüfbar |
| Bing | 10 Ergebnisanker, darunter `apaleo.com` | für die Zufallsphrase 1 Ergebnisanker statt 0 | nicht prüfbar |

DuckDuckGo macht den Top-Kanal gangbar. Anzeigenblöcke (`result--ad`) zählen nicht als organische Ergebnisse; Google- und Bing-Ausfälle bleiben separat sichtbar.

## Rohbeleg- und Fehlerregeln

- Jeder HTTP-Abruf speichert den vollständigen von Node empfangenen Body, Metadaten, Status, finale URL und alle Redirect-Hops.
- Body und Metadatei erhalten SHA-256-Belege. `hashes.txt` enthält 70 sortierte Belegzeilen; sein eigener SHA-256 ist `8d4a7f73c0b873c5f017159929fd6963ed827047cbfad4ba58be4130ae07a958`.
- Cookie- und `Set-Cookie`-Werte, Autorisierungsdaten und Login-Daten werden nicht protokolliert.
- Nur Timeout- und Netzfehler werden maximal dreimal wiederholt; Wartefolge: 0/1/3 Sekunden. HTTP-Fehler werden nicht blind wiederholt.
- Fehlgeschlagene Positivkontrollen entwerten die Sachauswertung des zugehörigen Teilkanals. Generische 200-, 400- oder 404-Seiten werden nicht allein als Treffer oder Nichttreffer gewertet.

Der maßgebliche Lauf umfasst 71 Dateien einschließlich `hashes.txt`, insgesamt 10.756.790 Byte. `selbsttest-ergebnis.json` hat SHA-256 `09e83bfb8a49165cab11bab29f7a0f09296cd81f2ab85ea5287f1f2bf57df4e7`.

## Kandidatenmodus

```powershell
node marke/live-welle/messlauf.js --kandidaten=<datei> --aus=<ordner>
```

Eingabeformat: `N-XX;Klarname[;variante1|variante2]`. IDs werden strikt validiert und Kandidaten-Belegnamen ausschließlich aus der ID plus Variantenindex gebildet. Der Ausgabeordner muss unter `sensibel/rohbelege-R19-B/` liegen. Vor Kandidatenabrufen laufen dieselben realen Kontrollfunktionen wie im Selbsttest. Danach misst der Modus beide Domains, vier Handles, DPMA/TMview/EUIPO und die drei Suchmaschinen; DuckDuckGo speichert bis zu 20 Titel/URLs für den Namen allein und für Hotel, Hotellerie, PMS, Check-in, Gastgewerbe und Software. Je Kandidat entsteht eine ID-only-Statusdatei. Der Kandidatenmodus wurde in Phase 0 nicht mit echten Wellenkandidaten ausgeführt; das ist der Übergabepunkt für Phase 1.
