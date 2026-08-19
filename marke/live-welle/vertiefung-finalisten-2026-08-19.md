# R19-C — Vertiefung der drei Finalisten (19.08.2026)

> **Zweck:** Faktenbasis für den Namensentscheid des Users. Dieses Dokument
> STELLT FEST und BEWERTET getrennt (Verfahren § 9.4); es entscheidet nichts.
> Der Entscheid liegt beim User, die Entscheidungsvorlage baut die Leitsession.
>
> - **Session:** R19-C (Ben Beckman) · **Datum:** 19.08.2026, Messungen
>   11:59–12:18 MESZ (`Get-Date`) · **Prüfstand beim Start:** `729008e`,
>   beim Schreiben `d25493f`.
> - **Prüfobjekte:** N-145 Wisestay · N-159 Innsight · N-160 Stayahead.
> - **Vorarbeit:** `protokolle/R19-B-bericht.md` (Phase 0/1 + Wellen 4–6),
>   `zentrale\namensentscheid.md` Stand-Kasten 18.08., Verfahren
>   `marke/markenrecherche-verfahren.md` §§ 3–7, Katalog
>   `marke/naming-kriterienkatalog.md`.
> - **Rohbelege:** `sensibel/rohbelege-R19-C/` (git-ignoriert), fünf
>   Laufordner mit `hashes.txt` — Verzeichnis in § 10.
>
> ⚠️ **Was dieses Dokument NICHT ist:** keine Rechtsberatung und keine
> Kollisionsentscheidung. Verwechslungsgefahr und Schutzumfang sind
> Wertungsfragen; nach E-K5 (Katalog-Nachtrag 09.08.2026) läuft die
> Namensfindung **vorerst ganz ohne Anwalt**, juristische Grenzfälle bleiben
> deshalb „nicht prüfbar" und **blockieren lt. K2**, bis der User je Fall
> entscheidet. Wo die Lage streitig ist, steht hier „streitig" — nicht der
> bequemere Pol.

---

## § 1 Arbeits-IDs

| ID | Name | Herkunft der ID |
|---|---|---|
| **N-145** | Wisestay | bereits vergeben in Welle 4, `marke/live-welle/welle4-2026-08-18.txt` Zeile 11 — **nicht neu vergeben**, nachgeschlagen |
| **N-159** | Innsight | heute vergeben (Vorgabe Tagesplan/Übergabe 18.08.) |
| **N-160** | Stayahead | heute vergeben (Vorgabe Tagesplan/Übergabe 18.08.) |

**Kollisionsprüfung vor der Vergabe** (Regel: grep im eigenen Dokument UND
Nachbardokumenten): `grep -rn "N-159\|N-160"` über `marketing/**/*.md` fand
nur die drei planenden Erwähnungen (R19-B-Bericht Z. 407, Tagesplan 18.08.
Z. 837, Tagesplan 19.08. Z. 206) — keine vergebene ID. Der Bestand der
Kandidatenlisten endet bei **N-158** (`welle4-2026-08-18.txt`, 24 IDs
N-135…N-158; Welle 5/6 tragen keine IDs). N-159/N-160 schließen die Reihe
lückenlos an. Positivkontrolle des Suchlaufs: dasselbe Muster auf `N-145`
lieferte die zwei bekannten Fundstellen — der Grep trifft also.

---

## § 2 Ergebnis je Finalist × Prüfkanal (Fertig-Kriterium: 9 Kanäle × 3 Namen)

Legende: ✔ = gemessen mit bestandener Positiv- UND Negativkontrolle im selben
Lauf · ⚠️ = gemessen, Befund belastend · ❌ = nicht erhoben/nicht prüfbar (Kanal
+ Grund in § 7).

| Kanal | N-145 Wisestay | N-159 Innsight | N-160 Stayahead |
|---|---|---|---|
| **DPMA** | ✔ 0 Treffer | ⚠️ 1 Treffer: **DE 3020242492945 „INN SIGHT", eingetragen**, Kl. 9+13 | ⚠️ 4 Treffer (2 EM beendet, 1 IR abgelaufen, **1 IR eingetragen Kl. 39**) |
| **EUIPO** | ✔ 0 | ✔ 0 | ✔ 0 |
| **TMview** | ✔ 0 gesamt | ⚠️ 19 gesamt; **im Klassen-Suchraum: `Inn:Sights` DE Kl. 35/41/42 eingetragen** | ⚠️ 8 gesamt; im Suchraum nur BEENDETE Marken |
| **`.de`** | ✔ **frei** (RDAP 404, heute gemessen) | ⚠️ vergeben — aktive Firma | ⚠️ vergeben — **zum Verkauf, 820 €** |
| **`.com`** | ⚠️ vergeben — **Marktplatz, 88.000 USD** | ⚠️ vergeben — aktiver Branchen-Namensvetter | ⚠️ vergeben — aktive Firma (UK) |
| **Instagram** | ❌ nicht prüfbar | ❌ nicht prüfbar | ❌ nicht prüfbar |
| **Facebook** | ⚠️ vergeben (Gästehaus Cardiff) | ⚠️ vergeben (**Hotel-Dienstleister San Francisco**) | ⚠️ vergeben (Privatprofil) |
| **YouTube** | ⚠️ vergeben (`@wisestay` → Kanal „stay wise") | ⚠️ vergeben (`@innsight`) | ⚠️ vergeben (`@stayahead` → „Stay Ahead") |
| **LinkedIn** | ⚠️ vergeben (`/company/wisestay`, UK) | ⚠️ vergeben (`/company/innsight`) | ✔ **404** (Indiz frei, keine Freigabe) |

**Kein Feld ist leer** — jede Zelle trägt entweder ein Ergebnis mit Beleg
(§§ 3–5) oder ein ausgewiesenes „nicht prüfbar" mit Kanal und Grund (§ 7).

---

## § 3 Markenregister im Detail

**Suchraum** (Verfahren § 2.2, unverändert): Klassen 9, 35, 36, 37, 38, 41,
42 **plus 43**. Gewertet werden DE- und EU-wirksame Rechte; Treffer außerhalb
werden genannt, aber nicht als Risiko gewertet.

### 3.1 N-145 Wisestay — registerseitig frei im DE/EU-Raum

- **DPMA:** Smartsearch `Wisestay` → `marHits=0`; die aufgerufene
  **Trefferliste ist leer** (nur die Kopfzeile, 1 Tabellenzeile) —
  `006-liste-Wisestay.hop-2.body.html`.
- **EUIPO:** 0 Treffer. **TMview:** 0 Treffer gesamt.
- **Varianten-Raster** (Verfahren § 3.2, phonetisch): `Wysestay`, `Weisstay`,
  `Wisestey`, `Wisestai` → TMview je **0**.
- **Getrennte Schreibweise „Wise Stay":** DPMA 0 · EUIPO 0 · TMview 24 gesamt,
  davon im DE/EM-Raum nur **STAYWISE** (EM, Kl. 42, eingetragen, Björndal, Per
  — das ist die Marke, an der in R19-B der Kandidat *Staywise* gescheitert
  ist; **umgekehrte Wortfolge**, kein identisches Zeichen) und
  `EAT WISELY STAY HEALTHY` (EM, abgelaufen, branchenfremd).
- **Bewertung K2 Register:** frei. ⚠️ **Einschränkung, die im Satz bleibt:**
  Ob „Wisestay" gegenüber der eingetragenen Unionsmarke „STAYWISE" in
  derselben Klasse 42 verwechslungsfähig ist, ist eine **Wertungsfrage und
  hier NICHT entschieden** — dieselben zwei Wörter in umgekehrter Reihenfolge,
  gleiche Klasse, gleicher Wirtschaftsraum. Das ist der Punkt, an dem K2
  „streitig" steht.

### 3.2 N-159 Innsight — eine eingetragene DE-Marke und ein Treffer in den Kernklassen

Registerauskunft zum einzigen DPMA-Treffer (Rohbeleg
`004-detail-DE-3020242492945.body.html`, Felder verbatim):

| Feld | Inhalt |
|---|---|
| Aktenzeichen | 3020242492945 · Registernummer 302024249294 |
| Markendarstellung | *(leer — Wort-/Bildmarke; Zeichen laut TMview: **„INN SIGHT"**)* |
| Markenform | Wort-/Bildmarke, Individualmarke |
| Anmeldetag / Eintragung | 28.12.2024 / **09.01.2025** |
| Inhaber | **Zeitgeist-Geschenke GmbH**, 57271 Hilchenbach, DE |
| Klassen | **9, 13** |
| Aktenzustand | **Marke eingetragen** (Widerspruchsfrist abgelaufen 14.05.2025, ohne Widerspruch eingetragen) |
| Waren/Dienstleistungen | Kl. 9: „Optische Verstärkungsgeräte; Optische Geräte und Ausrüstung, Verstärkungsgeräte und Korrektoren" · Kl. 13: „Waffen und Munition" |
| Schutzende | 28.12.2034 |

**Zweiter, schwererer Treffer — aus dem Ähnlichkeitsraum, nicht aus der
Identitätssuche:** Der Lauf „Inn Sight" (getrennt) fand in TMview

> **`Inn:Sights` · DE 3020232350773 · Klassen 35, 41, 42 · Status
> „Eingetragen" · Inhaber Inn:Syn GmbH · angemeldet 19.09.2023**

— **Klassen 35 und 42 sind unsere Kernklassen** (Anmelde-Vorschlag Verfahren
§ 2.1). Dieser Treffer erscheint in der DPMA-Smartsearch auf „Innsight"
NICHT (sie sucht die exakte Zeichenfolge) und wäre ohne den
Getrennt-/Varianten-Lauf unsichtbar geblieben.

Weitere DE/EU-Treffer im Suchraum aus demselben Lauf (Status beachten):
`INNSITE` (DE + EM, Kl. 9/16/42 — **abgelaufen bzw. beendet**),
`INNERSIGHT3D` (DE/EM/WO, Kl. 9+42, eingetragen, Karl Storz — anderes
Zeichen), `InnerSight` (DE, Kl. 9/16/41, angemeldet 30.07.2026).

⚠️ **Die Achse, die kein Register zeigt:** „Innsight" ist gesprochen kaum von
**„Insight"** zu unterscheiden. TMview meldet für „Insight" **21.910 Treffer**
gesamt, darunter eingetragene EU-Marken in Klasse 9 und 42
(`020-variante-Innsight-Insight.body.json`). Das ist keine
Kollisionsaussage — es ist die Feststellung, dass der Name in einem sehr
dicht besetzten Zeichenfeld liegt, und zugleich ein K1-Punkt
(Unterscheidungskraft/Schutzfähigkeit).

### 3.3 N-160 Stayahead — vier Treffer, nur einer lebt, und der liegt außerhalb des Suchraums

Die vier DPMA-Treffer sind über den TMview-Rohbeleg des Laufs „Stay Ahead"
**nummerngenau zugeordnet** (`016-getrennt-tmview-Stay-Ahead.body.json`;
die DPMA-Trefferliste `010-liste-Stayahead.hop-2.body.html` nennt Nummern und
Aktenzustand, TMview liefert Zeichen, Klassen und Inhaber dazu — beide
Statusangaben stimmen überein):

| Nr. | Zeichen | Amt | Klassen | Status (DPMA / TMview) | Inhaber |
|---|---|---|---|---|---|
| IR 1100039 | „Stay ahead" | WO | 24, 16, 27, 17, 21 | gelöscht/Schutz erloschen / **Abgelaufen** | Ahlstrom Corporation |
| **IR 1779697** | **„STAY AHEAD"** | **WO** | **39** | Schutz bewilligt / **Eingetragen** | **GEOPOST** |
| EM 010385284 | „STAY AHEAD" | EM | 43 | Anmeldung zurückgewiesen / **Beendet** | HLT INTERNATIONAL IP LLC |
| EM 013604641 | „STAY AHEAD" | EM | 35, 38, 41 | Anmeldung zurückgewiesen / **Beendet** | World 50, Inc. |

- Die **einzige lebende** Marke (IR 1779697, GEOPOST, Schutz erstreckt auf DE)
  steht in **Klasse 39** (Transport/Logistik) — **außerhalb** des
  Klassen-Suchraums.
- Die beiden Marken, die IM Suchraum lagen (Kl. 43 und Kl. 35/38/41), sind
  **beendet**; beide Anmeldungen wurden zurückgewiesen. ⚠️ Dass zwei
  EU-Anmeldungen dieses Zeichens **zurückgewiesen** wurden, ist zugleich ein
  **K1-Signal**: „stay ahead" ist eine gängige englische Wendung, an der ein
  Freihaltebedürfnis/fehlende Unterscheidungskraft plausibel ist. Der Grund
  der Zurückweisung steht in diesen Belegen **nicht** und wurde nicht erhoben.
- **Zusammengeschrieben:** DPMA 4 · EUIPO **0** · TMview 8 gesamt, im DE/EM-Raum
  keine lebende Marke. Varianten (`Steyahead`, `Stayahed`, `Stayaheadt`,
  `Staiahead`): TMview je **0**.
- **Getrennt geschrieben „Stay Ahead":** DPMA 12 · EUIPO 6 · TMview 297.

⚠️ **Methodischer Befund, der für alle drei gilt:** Die EUIPO-Suche auf die
zusammengeschriebene Form findet die getrennt geschriebenen Marken NICHT —
„Stayahead" liefert dort 0, „Stay Ahead" liefert 6. **Eine Null der
zusammengeschriebenen Form belegt also nur diese Zeichenfolge, nicht den
Ähnlichkeitsraum.** Deshalb wurde das Varianten-Raster heute um die getrennte
Schreibweise erweitert; genau dieser Zusatzlauf hat den `Inn:Sights`-Treffer
in unseren Kernklassen zutage gefördert.

---

## § 4 Domains (`.de` und `.com` sind nach E-K1 **beide Pflicht**)

Alle RDAP-Werte heute neu gemessen (`lauf-20260819T095957Z-c23848`), die
Seiten-Abzüge im Lauf `domain-varianten-20260819T100704Z-185362`.

| Domain | RDAP-Status | Wer hält sie / was steht drauf | Bewertung K3 |
|---|---|---|---|
| **wisestay.de** | **HTTP 404 = nicht registriert** | — | **frei** (Stand 19.08.2026 09:59 UTC) |
| **wisestay.com** | registriert 28.10.2016, exp. 28.10.2026, NS `NS1/NS2.ATOM.COM`, Registrar Unstoppable Domains | Marktplatz Atom.com: **„WiseStay.com is for sale!" · Buy Now $88,000 one-time · VERIFIED DOMAIN** | erwerbbar, aber **88.000 USD** |
| **innsight.de** | registriert, NS `ns1099.ui-dns.*`, zuletzt geändert 12.08.2018 | **Aktive Firma:** „Inn Sight Objekteinrichtungs GmbH" — Objekteinrichtung/Innenarchitektur, im Seitentext u. a. „Gastronomie Bestuhlung Lichtkonzept" | **nicht erwerbbar** (aktiver Betrieb) |
| **innsight.com** | registriert **08.10.1997**, exp. 07.10.2026, NS `DNS1/DNS2.STABLETRANSIT.COM`, Registrar GoDaddy | Direktabruf HTTP 403 (Cloudflare-Sperre) — Halter aber über Facebook belegt: **INNsight, San Francisco, „We help #hoteliers drive more direct bookings"**, `sales@innsight.com` | **nicht erwerbbar** (aktiver Anbieter) |
| **stayahead.de** | registriert, **ohne Nameserver**, zuletzt geändert 07.07.2026 | Weiterleitung auf `domainmarkt.de/stayahead.de`: **„stayahead.de jetzt kaufen! ACHTUNG: Aktionspreis! Alter Preis: 1.290 € Neuer Preis: 820 €"** | erwerbbar, **820 €** |
| **stayahead.com** | registriert **14.06.1997**, exp. 13.06.2027, NS Cloudflare, Registrar Tucows | Weiterleitung auf `stayahead.com/uk`: **StayAhead Training** (UK-Schulungsanbieter, Telefon +44 20 7600 6116) — passt zur GB-Marke UK00002334096 (Kl. 16/41) | **nicht erwerbbar** (aktiver Betrieb) |

**Positivkontrollen dieses Kanals:** RDAP `.de` `hey-pensio.de` → 200 +
Domainobjekt, `.com` `apaleo.com` → 200 + Domainobjekt; Negativkontrollen mit
Zufallsdomain je TLD → 404. Für die Seitenabrufe: `hey-pensio.de` liefert die
eigene Platzhalterseite („Demnächst verfügbar") — der Abrufweg funktioniert.

⚠️ **Halterdaten `.de`:** DENIC-RDAP gibt **keine Halterangaben** aus
(Datenschutz) — die Zuordnung „wer hält innsight.de / stayahead.de" stammt
hier aus dem **Seiteninhalt**, nicht aus dem Registerdatensatz. Für
stayahead.de ist damit belegt, dass sie über einen Händler **angeboten** wird;
wer Inhaber ist, ist **nicht erhoben**.

**Folge für E-K1 (beide Domains Pflicht — vom User am 18.08. ausdrücklich
bestätigt):** **Kein Finalist erfüllt K3 ohne Zukauf.** Wisestay braucht
88.000 USD für die `.com`; Stayahead braucht 820 € für die `.de` **und** hat
eine `.com`, die nicht zu haben ist; Innsight hat beide bei aktiven Firmen.

---

## § 5 Handles (Kern-Plattform-Set E-K1b: LinkedIn · Instagram · Facebook · YouTube)

| Plattform | Kanal-Status heute | N-145 Wisestay | N-159 Innsight | N-160 Stayahead |
|---|---|---|---|---|
| **LinkedIn** | gangbar (HTTP; Positiv `apaleo` 200 mit Profilmarker, Negativ 404) | 200 — „WiseStay", `uk.linkedin.com/company/wisestay` | 200 — „INNsight", `/company/innsight` | **404** |
| **Instagram** | **nicht prüfbar** (HTTP und Browser, je mit Kontrollen) | ❌ | ❌ | ❌ |
| **Facebook** | gangbar (Browser; Positiv `apaleoGmbH` = Seite, Negativ = „Inhalt nicht verfügbar") | vergeben: **WiseStay – An Aaron Wise Guesthouse, Cardiff** (Seite · Hotel, 428 Follower, `wisestay.co.uk`) | vergeben: **INNsight, San Francisco (Seite · Internetmarketingservice)** — „We help #hoteliers drive more direct bookings" | vergeben: **Privatprofil „Kedrian Parks"** — kein Unternehmen |
| **YouTube** | gangbar (HTTP; Positiv `@YouTube` 200 mit Kanal-Canonical, Negativ 404) | 200 — Kanal „stay wise" | 200 — Kanal „innsight" | 200 — Kanal „Stay Ahead" |

**Ein 404 ist ein Indiz, keine Freigabe** (Verfahren § 7.2): Plattformen
reservieren und sperren Namen auch ohne sichtbares Profil. Für Stayahead auf
LinkedIn heißt das: nichts Sichtbares, nicht „gehört uns".

---

## § 6 Positivkontrollen je Prüfkanal (Nachweis)

Jede Negativ-Aussage oben steht nur, weil im selben Lauf ein Kontrollwert
getroffen hat, der treffen MUSS. Sollwerte und Ist-Werte:

| Prüfkanal | Positivkontrolle (Sollwert) | Ist | Negativkontrolle (Soll) | Ist |
|---|---|---|---|---|
| RDAP `.de` | `hey-pensio.de` → 200 + Domainobjekt | ✔ 200, `status=["active"]` | Zufallsdomain → 404 | ✔ 404 |
| RDAP `.com` | `apaleo.com` → 200 + Domainobjekt | ✔ 200 | Zufallsdomain → 404 | ✔ 404 |
| DPMA Smartsearch | `apaleo` → ≥ 1 | ✔ 1 | Zufallstoken → 0 | ✔ 0 |
| DPMA Trefferliste | `apaleo` → genau 1 lesbare Zeile mit Registernummer | ✔ 1 (DE 3020172025731) | Zufallstoken → 0 Zeilen | ✔ 0 |
| DPMA Registerauskunft | `apaleo` DE 3020172025731 → Felder lesbar, Kl. 42, „Marke nicht eingetragen" | ✔ alle Felder | — | — |
| TMview | `apaleo` → ≥ 1 | ✔ 53 | Zufallstoken → 0 | ✔ 0 |
| EUIPO eSearch | `APPLE` → ≥ 1 | ✔ 963 | Zufallstoken → 0 | ✔ 0 |
| LinkedIn (HTTP) | `apaleo` → 200 + Profilmarker | ✔ | Zufallshandle → 404 | ✔ |
| YouTube (HTTP) | `@YouTube` → 200 + Kanal-Canonical | ✔ | Zufallshandle → 404 | ✔ |
| Facebook (Browser) | `apaleoGmbH` → Seite | ✔ | Zufallshandle → „Inhalt nicht verfügbar" | ✔ |
| Instagram (HTTP + Browser) | `instagram` bzw. `apaleo` → unterscheidbar | ❌ **fällt** | Zufallshandle | ❌ identisch |
| Domain-Seitenabruf | `hey-pensio.de` → eigene Seite lädt | ✔ | — | — |

### 6.1 Zusatz-Gegenkontrolle der Register mit einem Zeichen aus DIESEM Namensraum

Ein Register kann für ein Allerwelts-Kontrollwort („APPLE") antworten und für
Kunstwörter unserer Bauart trotzdem still bleiben. Deshalb wurden zwei
Zeichen aus derselben Welle, deren Trefferzahlen aus dem R19-B-Lauf vom
18.08. **unabhängig bekannt** sind, heute erneut abgefragt
(`gegenkontrolle-20260819T100314Z-0280f2`):

| Zeichen | Kanal | Soll (R19-B, 18.08.) | Ist (19.08.) | trifft? |
|---|---|---:|---:|---|
| Staywise | DPMA | 1 | 1 | ✔ |
| Staywise | TMview | 7 | 7 | ✔ |
| Staywise | EUIPO | 1 | 1 | ✔ |
| Hostpilot | DPMA | 2 | 2 | ✔ |
| Hostpilot | TMview | 10 | 10 | ✔ |
| Hostpilot | EUIPO | 2 | 2 | ✔ |

**6 von 6.** Damit sind die Register-Nullen der Finalisten Sachbefunde, keine
Werkzeugbefunde. Zusätzlich reproduzierte der Lauf die inhaltlichen Anker:
`STAYWISE` (EM, Kl. 42, eingetragen, Björndal) und `HOSTPILOT` (EM, Kl. 9/38/42,
eingetragen, Intermedia) — beide aus R19-B bekannt.

### 6.2 TMview-Neumessung (der Kanal war am 18.08. tot)

Am 18.08. fiel die TMview-Discovery in den Wellen 4–6 aus (Discovery=false).
**Heute trägt der Kanal wieder** (Discovery=true, Positiv 53 / Negativ 0 in
allen fünf Läufen). Das bestätigt die Regel, dass ein Werkzeug-Negativ einen
Kanal zu einem Zeitpunkt misst — es wurde nicht übernommen, sondern
wiederholt.

---

## § 7 Nicht erhoben / nicht prüfbar (mit Kanal, Grund und Zeitpunkt)

1. **Instagram, alle drei Namen** — nicht prüfbar. Gemessen zweimal:
   (a) HTTP 19.08. 12:08 MESZ — Positiv- und Negativkontrolle liefern
   identische Marker (HTTP 200, Titel „Instagram", Fehlerseiten-Marker true,
   Bytes 610.928 vs. 610.942); (b) Browser 19.08. ~12:12 MESZ — beide
   Kontrollen enden auf demselben Login-Schirm
   (`/accounts/login/?next=…`). Prüfbar erst mit eingeloggtem Konto; das war
   nicht Auftrag dieser Session. **Ein „frei" gibt es hier nicht.**
2. **LinkedIn-Plattformsuche** (zweite Achse aus Verfahren § 7.2) — nicht
   erhoben: `linkedin.com` ist in der Domain-Freigabe der Chrome-Automation
   dieser Sitzung nicht enthalten („Navigation to this domain is not
   allowed"). Die Profil-URL-Achse ist gemessen. Werkzeuggrenze, keine
   Aussage über LinkedIn.
3. **Zurückweisungsgründe der beiden EM-Anmeldungen „STAY AHEAD"** — nicht
   erhoben. Die DPMA-Trefferliste nennt nur „Anmeldung zurückgewiesen".
   Relevanz: Der Grund wäre ein direktes Indiz zur K1-Schutzfähigkeit einer
   Wendung dieses Typs.
4. **DPMA-Registerauskunft für IR- und EM-Nummern** — per HTTP nicht lesbar
   (die vier Detailseiten liefern eine JavaScript-Shell statt der Felder;
   die DE-Seite dagegen vollständig). Ersatzweise über TMview belegt
   (Zeichen/Klassen/Status/Inhaber, § 3.3), Statusangaben beider Quellen
   stimmen überein. Die **Waren-/Dienstleistungstexte** dieser vier Marken
   sind damit **nicht erhoben**.
5. **Halterdaten der `.de`-Domains** — im DENIC-RDAP nicht enthalten
   (Datenschutz). Wer `innsight.de`/`stayahead.de` hält, ist aus dem
   Registerdatensatz **nicht belegt**; die Zuordnung oben stammt aus dem
   Seiteninhalt.
6. **Verhandlungsspielraum bei den Kaufdomains** — nicht erhoben. Es wurden
   **keine Halter- oder Händleranfragen versendet** (Außenkorrespondenz ist
   nicht Auftrag dieser Session, so im Prompt gesetzt). 88.000 USD und 820 €
   sind die **gelisteten** Preise, nicht notwendig die erzielbaren.
7. **Verwechslungsgefahr, Schutzumfang, Ähnlichkeit von Waren/
   Dienstleistungen** — nicht geprüft und in dieser Runde nicht prüfbar
   (E-K5: vorerst ohne Anwalt). Betroffen sind namentlich: Wisestay ↔
   „STAYWISE" (Kl. 42); Innsight ↔ „Inn:Sights" (Kl. 35/41/42) und ↔ „INN
   SIGHT" (Kl. 9); Stayahead ↔ „STAY AHEAD" (Kl. 39, lebend).
8. **K4-Diktat-Test und EN-Muttersprachler-Check** — **offen für alle drei**.
   Bogen gebaut: `marke/live-welle/k4-diktat-testbogen-2026-08-19.md`; der
   Test ist ein User-Handgriff (Katalog-Nachtrag E12).
9. **Websuche/SEO-Bild (W7)** — in dieser Session nicht neu erhoben; die
   DDG-Kandidatenzahlen aus R19-B sind bekanntlich tot (HTTP 202 im Lauf vom
   18.08.). Die Umfeldbefunde in § 3/§ 4/§ 5 sind nebenbei angefallen, sie
   ersetzen kein Suchraster.
10. **Handelsregister-Recherche** (Verfahren § 5.2) — nicht erhoben; kein
    stabiler anonymer Maschinenpfad (Befund aus R19-B Phase 0, heute nicht
    neu gemessen).

---

## § 8 Bewertung nach dem Kriterienkatalog (Feststellung ≠ Bewertung)

### N-145 Wisestay

- **K1 (Schutzfähigkeit):** plausibel — Kunstwort aus zwei englischen
  Alltagswörtern, für PMS-/Software-Dienstleistungen nicht beschreibend.
- **K2 (Kollisionsfreiheit):** **streitig.** Register DE/EU: null Treffer über
  fünf Varianten und beide Schreibweisen. Dagegen: eingetragene Unionsmarke
  **STAYWISE in Klasse 42** (identische Wortbestandteile, umgekehrte Folge)
  und ein aktives **Gastgewerbe**-Unternehmen „WiseStay" in Cardiff mit
  eigener Domain und Facebook-Seite. Ob das trägt, ist die Anwaltsfrage, die
  E-K5 gerade aussetzt — nach K2 **blockiert „nicht prüfbar" wie ein Treffer**.
- **K3 (Domains):** `.de` frei, `.com` **88.000 USD**. Ob das „realistisch
  erwerbbar" ist, entscheidet der User; als Einschätzung: für eine Firma in
  Gründung ist das keine Beschaffung, sondern eine Investitionsentscheidung.
- **W8 (Handles):** LinkedIn, Facebook und YouTube vergeben, Instagram
  unbekannt. Schwach.
- **K4/K6-EN:** offen.

### N-159 Innsight

- **K1:** ⚠️ schwächer als bei den anderen — klanglich praktisch identisch mit
  dem Allerweltswort „Insight", das in Klasse 9/42 dicht belegt ist.
- **K2:** ⚠️ **der schwerste Registerbefund der drei:** `Inn:Sights` (DE,
  **Kl. 35/41/42**, eingetragen, Inn:Syn GmbH) liegt in unseren Kernklassen;
  dazu die eingetragene DE-Marke `INN SIGHT` (Kl. 9, branchenfern:
  Optik/Waffen). **Und der Umfeldbefund wiegt schwerer als das Register:**
  `innsight.com` gehört einem **aktiven Dienstleister für Hoteliers** in San
  Francisco („We help #hoteliers drive more direct bookings") — das ist
  unsere Zielgruppe und unser Leistungsfeld; `innsight.de` gehört einer
  deutschen Objekteinrichtungs-GmbH, deren Seite ausdrücklich Gastronomie
  nennt.
- **K3:** beide Kern-Domains bei aktiven Firmen — **nicht erfüllbar** unter
  E-K1.
- **W8:** LinkedIn, Facebook, YouTube vergeben (LinkedIn/Facebook vom
  Branchen-Namensvetter), Instagram unbekannt.
- **K4/K6-EN:** offen.

### N-160 Stayahead

- **K1:** ⚠️ „stay ahead" ist eine gängige englische Wendung; zwei
  EU-Anmeldungen dieses Zeichens wurden **zurückgewiesen** (Grund nicht
  erhoben) — das ist ein Warnsignal für Unterscheidungskraft/
  Freihaltebedürfnis, kein Beweis.
- **K2:** im Klassen-Suchraum **keine lebende DE/EU-Marke**; die einzige
  lebende (GEOPOST, Kl. 39) liegt außerhalb. Das ist das sauberste
  Registerbild der drei — mit dem K1-Vorbehalt darüber.
- **K3:** `.de` für **820 €** kaufbar, `.com` bei einem aktiven UK-Anbieter
  (StayAhead Training) — unter E-K1 **nicht erfüllbar**.
- **W8:** LinkedIn 404 (Indiz frei — der einzige freie Handle-Befund
  überhaupt), Facebook von einer Privatperson belegt, YouTube vergeben,
  Instagram unbekannt.
- **K4/K6-EN:** offen.

### Was das zusammengenommen heißt (Einschätzung dieser Session, kein Entscheid)

**Unter E-K1 in seiner heutigen Fassung — `.de` UND `.com` Pflicht — überlebt
keiner der drei Finalisten K3 ohne Zukauf.** Die Lage ist damit strukturell
dieselbe wie bei Welle 5 (35 von 36 echten Wörtern doppelt vergeben): Der
Engpass ist nicht das Markenregister, sondern die `.com`.

Die drei unterscheiden sich in dem, was sie kosten und woran sie hängen:

| | Register DE/EU | Umfeld/Branche | `.de` | `.com` | Was den Namen kippen könnte |
|---|---|---|---|---|---|
| **Wisestay** | frei | Gästehaus UK (Kl. 43-nah) | **frei** | 88.000 USD | die STAYWISE-Unionsmarke in Kl. 42 |
| **Innsight** | ⚠️ Kl. 35/41/42 belegt | **direkter Branchen-Namensvetter** | vergeben | vergeben | beides zugleich |
| **Stayahead** | frei im Suchraum | UK-Schulungsanbieter | 820 € | vergeben | Schutzfähigkeit (K1) |

---

## § 9 Was der User zum Entscheiden braucht (Zusammenstellung, keine Empfehlung)

1. **E-K1 bestätigen oder lockern.** Solange `.com` Pflicht ist, ist die
   Entscheidung faktisch eine über 88.000 USD (Wisestay) oder über einen
   Verzicht. Wird `.com` zur Kür, ändert sich die Rangfolge sofort.
2. **K4-Diktat-Test** für die drei — Bogen liegt bereit; ohne ihn ist bei
   keinem Namen ein K.-o.-Kriterium abgeschlossen.
3. **E-K5-Frage neu stellen:** Drei der Namen tragen je eine Wertungsfrage,
   die nur ein Anwalt auflöst. Bleibt es beim „vorerst ganz ohne Anwalt",
   entscheidet der User bewusst mit offenem K2.
4. **Front-Running:** `wisestay.de` ist heute 09:59 UTC als frei gemessen und
   der **einzige freie `.de`-Befund** der drei. Fällt die Wahl darauf, gehört
   die Registrierung in denselben Zug (Merkposten der Zentrale,
   `zentrale\namensentscheid.md`).

---

## § 10 Rohbelege

Alle Läufe unter `sensibel/rohbelege-R19-C/`, je mit `hashes.txt`
(SHA-256 über jede Datei) und einer Ausgabedatei:

| Laufordner | Inhalt | Ausgabedatei |
|---|---|---|
| `lauf-20260819T095957Z-c23848` | RDAP `.de`/`.com`, DPMA-Zahlen, TMview, EUIPO, LinkedIn/YouTube — je mit Kontrollpaar | `lauf-ausgabe.md` |
| `gegenkontrolle-20260819T100314Z-0280f2` | Register-Gegenkontrolle Staywise/Hostpilot gegen R19-B-Sollwerte | `gegenkontrolle-ausgabe.md` |
| `dpma-treffer-20260819T100357Z-96fca3` | DPMA-**Trefferlisten** (Nummern + Aktenzustand) inkl. Kontrolle und Nulltoken | `dpma-treffer-ausgabe.md` |
| `dpma-detail-20260819T100501Z-0038fb` | DPMA-**Registerauskünfte** + Getrennt-Schreibweisen-Läufe | `dpma-detail-ausgabe.md` |
| `domain-varianten-20260819T100704Z-185362` | Domain-Seitenabzüge (Preise!), IR-Nummernklärung, Varianten-Raster | `domain-varianten-ausgabe.md` |
| `handles-20260819T100854Z-da1dc0` | Instagram/Facebook-HTTP-Neumessung mit Kontrollpaaren | `handles-ausgabe.md` |
| `browser-2026-08-19` | Browser-Protokoll (Instagram, Facebook, Atom.com) mit verbatim-Textabzügen | `browser-protokoll.md` |

**Skripte** (neu, in `marke/live-welle/`, Suffix-Regel des Auftrags):
`vertiefung-r19c.js` (Erstlauf, unverändert erhalten als Beleg des gelaufenen
Standes) · `vertiefung-r19c-kern.js` (gemeinsames Modul der Folgeläufe) ·
`gegenkontrolle-r19c.js` · `dpma-treffer-r19c.js` · `dpma-detail-r19c.js` ·
`domain-varianten-r19c.js` · `handles-r19c.js` · `tmview-auswertung-r19c.js`.
Die Bestands-Skripte (`messlauf.js`, `schnellcheck.js`, `auswertung-lauf.js`)
wurden **nicht verändert**.

**Beleg-Typen zweiachsig** (Leseweg × Quellenart): Alle Zahlen und Zitate
oben sind **selbst im Rohabzug gelesen** (kein Agent dazwischen). Quellenart:
DPMA/EUIPO/TMview = amtliche Register (DPMA-Trefferliste und -Registerauskunft
sind Primärquelle, TMview ist Sammelkanal); RDAP = Registry-Auskunft;
Facebook-/Atom.com-/Domain-Seiten = **Selbstauskunft der jeweiligen Halter
bzw. Plattform**, nicht amtlich — insbesondere die Preise und die
Firmenbeschreibungen.

*Erstellt: 19.08.2026, Session R19-C (Ben Beckman).*
