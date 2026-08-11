# Brandnamic-Partnerkreis — Vollerhebung (P22)

> **Was das ist:** Die Auswertung ALLER Einträge des Brandnamic-
> Partnerprogramms. Erbe des nie gefahrenen Strangs R07-E, beauftragt
> als R08-B (Tagesplan 11.08.2026, Session-Prompts R8).
> **Erhebungssession:** R08-B, 11.08.2026.
>
> **Bezug zum Bestand:** `fund/wettbewerbsbild.md` § 7 führt **P22**
> („74 der 78 Einträge sind ungeprüft"). B10.1–B10.5 dort haben den
> Partnerkreis gezählt und vier Einträge an den Primärquellen gelesen.
> Dieses Dokument erhebt den Rest. **Es ändert `wettbewerbsbild.md`
> nicht** — die Register-Nachträge und die Einarbeitung macht die
> Leitsession (Scope-Trennung des R8-Schnitts).
>
> ⚠️ **Die Einstufungen in § 5 sind VORSCHLÄGE nach dem B2-Raster, keine
> vergebenen Einstufungen.** Die Vergabe im Wettbewerbsbild ist dem
> Bestandsdokument vorbehalten; hier steht je Anbieter die Begründung,
> damit die Leitsession sie prüfen und nicht neu herleiten muss.

---

## § 0. Belegstufen, Quelle, Geltungsgrenze

**Beleg-Typen zweiachsig** (Konvention aus `wettbewerbsbild.md` § 0 —
Leseweg getrennt von Quellenart):

| Achse | Wert in diesem Dokument |
|---|---|
| **Leseweg** | **BYTE** durchgehend — jede Seite von dieser Session selbst per `curl` geladen und im Rohtext/Roh-HTML gelesen. **Keine Subagenten, kein WebFetch-Zusammenfasser.** Rohabzüge: `sensibel\rohbelege-R08-B\web\` (74 Dateien) und `…\nachfass\` (5 Dateien). |
| **Quellenart** | **SELBST** (Anbieter-Selbstauskunft) bei allen Anbieterseiten. Fähigkeits-Positive daraus sind **Hypothesen**, keine belegten Produkteigenschaften. Abweichungen (REGISTER-nahe Impressumsangaben) sind je Zeile vermerkt. |

**Primärquelle der Liste:** `sensibel\rohbelege-R05-A\a2\raw_partner.html`
— **475.910 Bytes**, abgezogen 09.08.2026.

> ⚠️ **Korrektur einer Prompt-Angabe (sichtbar gemacht, nicht still
> geglättet):** Der Auftragstext nennt für diese Datei „430.793 Bytes".
> Gemessen (`wc -c`, 11.08.2026): **475.910 Bytes**. 430.793 ist die
> Größe von `agb.html` im selben Ordner — die Angabe gehört zu einer
> anderen Datei. **Der Pfad stimmt, die Größe nicht;** die Prämisse
> „Rohbeleg liegt vor" trägt. Kein Sachfehler, aber die Zahl darf so
> nicht weiterwandern.

**Erhebungsstand aller Web-Abrufe:** 11.08.2026. Ein Beleg trägt den
Stand seines Datums — die Aussagen unten sind Momentaufnahmen dieses
Tages, nicht der Dauerzustand der jeweiligen Anbieter.

**Geltungsgrenze — was dieses Dokument NICHT tut:**

1. **Keine Kanalbewertung.** Ob der Partnerkreis als Akquisekanal taugt,
   gehört zu MKT-AKQ (B11.7/B11.8) und ist ausdrücklich nicht Auftrag.
2. **Keine Registerauszüge.** Firmierungen stammen aus Impressen
   (Quellenart SELBST). Wo eine Firmierung tragend wird, ist ein
   Registerauszug nachzuholen (`aussenwirksame-texte`: Firmierung von
   Vertragspartnern nur per Registerauszug).
3. **Nur Startseiten** (plus 5 Nachfass-Seiten). Ein Produkt, das ein
   Anbieter führt, aber auf der Startseite nicht nennt, erscheint hier
   nicht. **Jede „nicht gefunden"-Aussage unten misst die Startseite,
   nicht das Portfolio** — sie ist als solche gekennzeichnet.
4. **Keine Preise.** Auf den Startseiten stand mit einer Ausnahme
   (orderando) keine belastbare Preisangabe; eine Preiserhebung war
   nicht beauftragt.

---

## § 1. Zählweg — drei Zahlen im Bestand, alle drei richtig

Der Bestand trug drei verschiedene Zahlen. Sie widersprechen sich
**nicht** — sie zählen verschiedene Schlüssel. Eigener Zähllauf am
Rohbeleg (Skript, Ausgabe archiviert in
`sensibel\rohbelege-R08-B\extraktion-partner.tsv`):

| Schlüssel | Zahl | Zählweg |
|---|---|---|
| **Marker-Zeilen gesamt** | **99** | `grep -c "data-gtm-label" raw_partner.html` = 99, **und** `grep -o … \| wc -l` = 99 (beide Wege genannt, weil `grep -c` Zeilen zählt, nicht Treffer — hier identisch, da ein Marker je Zeile) |
| **davon Partner-Einträge** | **78** | `class="MOD-Partner__item MOD-Partner__item--link"` |
| **davon Sprachumschalter** | 6 | `data-gtm-label="de"/"en"/"it"`, je 2× |
| **davon Footer-/Navigationslinks** | 13 | AGB, AI, Barrierefreiheit, Datenschutz, Datenschutz-Einstellungen - [UC], Gleichstellung, Home, Impressum, Lexikon, Mediakit, Partner, Sitemap, Whistleblowing |
| **davon Zertifikats-/Agenturnachweise** | 2 | Google-Partner-Verzeichnis, Facebook-Partner-Verzeichnis — **stehen außerhalb der Partnerliste** und sind keine Partner-Einträge |
| **Summenprobe** | 78 + 6 + 13 + 2 = **99** ✔ | geht ohne Rest auf |

**Und die drei Bestandszahlen lösen sich so auf:**

| Bestandsangabe | Fundort | Auflösung |
|---|---|---|
| „78 Logo-Einträge / 76 Domains (2 Doppelnennungen)" | B10.1 | **bestätigt** — unabhängig reproduziert (s. u.) |
| „74 ungeprüft" | § 7, P22-Zeile | 78 Einträge − 4 in B10.2 geprüfte = **74** ✔ |
| „74 Einträge, aber 72 Domains" | Prüferbefund R06-A/K-21 | 76 Domains − 4 geprüfte = **72** ✔ |

**Keine der drei Zahlen ist falsch.** Sie tragen nur verschiedene
Schlüssel, und keine der drei Fundstellen schreibt ihren Schlüssel
vollständig dazu. **Das ist der eigentliche Befund dieses Schritts.**

### § 1.1 ⭐ Eintrag ≠ Domain ≠ Firma — eine vierte Zahl fehlte

Der Bestand führt zwei Schlüssel (Eintrag, Domain). Es gibt einen
**dritten**, und er ist der für Wettbewerbsaussagen entscheidende:

| Schlüssel | Zahl | Differenz kommt von |
|---|---|---|
| **Einträge** (Logo-Kacheln) | **78** | — |
| **Domains** (eindeutige Hosts) | **76** | `weareplanet.com` 2× · `simplify-hospitality.com` 2× |
| **Firmen** (unterscheidbare Rechtsträger) | **74** | zusätzlich: `easisuite.com` = `yanovis.com` · `xenus.it` = `pcs-phoenix.com` |

**Die zwei neu gefundenen Firmen-Dubletten:**

1. **`easisuite.com` → `yanovis.com`** — `easisuite.com` antwortet mit
   einem **Host-Redirect** auf `www.yanovis.com`; die beiden
   Rohabzüge sind **byte-identisch** (`cmp -s` → identisch; beide
   82.985 B, Titel beide „Hotelsoftware von Yanovis").
   ⭐ **Die Firma steht damit in ZWEI Kategorien gleichzeitig:**
   `easisuite.com` unter „CM & Booking Engine Schnittstellen",
   `yanovis.com` unter „Branchenpartner". Beleg-Typ **BYTE, SELBST**.
2. **`xenus.it` = `pcs-phoenix.com`** — **kein Redirect**, zwei
   getrennt ausgelieferte Seiten. Die Identität steht nur im
   Seiteninhalt: `xenus.it` nennt im Fuß „**PCS GmbH, Bahnhofstraße 10,
   I-39046 St. Ulrich**, UST.-IdNr. 01713460218"; `pcs-phoenix.com`
   verlinkt selbst „*enter xenus hotelsoftware … xenus wurde von Grund
   auf neu entwickelt*". Es sind **zwei Produktgenerationen desselben
   Herstellers** (phoenix = Altprodukt, xenus = Nachfolger), beide in
   Kategorie 1. Beleg-Typ **BYTE, SELBST** (Impressumsangabe, kein
   Registerauszug).

> ⭐ **Methodisch der wichtigste Punkt dieses Schritts:** Dublette 1
> fand die **Redirect-Prüfung**, Dublette 2 fand sie **nicht** — dort
> gibt es keinen Redirect, nur zwei Seiten derselben Firma. **Eine
> Domain-Zählung ist keine Firmenzählung, und eine Redirect-Gegenprobe
> macht sie nicht dazu.** Wer „76 Anbieter" schreibt, überzählt um
> zwei. Ob unter den restlichen 72 Domains weitere Konzernverbünde
> stecken, ist **nicht geprüft** (§ 6, Negativ N-4).

### § 1.2 Ein dritter Firmierungsbefund, der keine Dublette ist

**`virtualpay.it` → `allitude.it`** (Host-Redirect, Titel „Allitude",
Selbstbeschreibung: IT-Dienstleister für „le nostre banche clienti").
Die Marke VirtualPay wird unter **Allitude** geführt. Keine Dublette im
Partnerkreis (Allitude selbst steht nicht in der Liste), aber die
Kategorie-3-Zeile „virtualpay.it" zeigt auf eine **andere Firmierung als
die verlinkte Marke** — bei jeder Weiterverwendung mitzuführen.
⚠️ Der Konzernbezug zu `raiffeisen.it` (ebenfalls Kategorie 3) ist
**naheliegend, aber hier nicht belegt** — nicht geprüft.

---

## § 2. Die Gliederung — sieben Kategorien, generisch belegt

**Extraktionsweg (Strukturmerkmal, KEINE Namensliste):** Die Kategorien
wurden über die CSS-Klasse `MOD-Partner__container__item` aufgeteilt und
ihre Überschriften über `MOD-Partner__title` gelesen — nicht gegen eine
vorher notierte Liste gezählt. Das ist die Gegenmaßnahme zur
Fehlerklasse aus B10.1 (dort fand ein Lauf gegen eine Sechser-Namensliste
genau sechs Kategorien und addierte die siebte still dazu).

| # | Kategorie (Wortlaut Brandnamic) | Einträge | Domains | Firmen |
|---|---|---|---|---|
| 1 | PMS Schnittstellen | 25 | 23 | 22 |
| 2 | CM & Booking Engine Schnittstellen | 13 | 13 | 13 |
| 3 | Zahlungsanbieter Schnittstellen | 18 | 18 | 18 |
| 4 | POS Schnittstellen | 2 | 2 | 2 |
| 5 | Weitere Schnittstellenpartner | 12 | 12 | 12 |
| 6 | Branchenpartner | 6 | 6 | 6 |
| 7 | Institutionelle Partner | 2 | 2 | 2 |
| | **Summe** | **78** ✔ | **76** ✔ | **74**\* |

\* Die Firmenspalte summiert sich auf 76, nicht 74 — die zwei
kategorie-übergreifenden Dubletten (`easisuite`/`yanovis` in Kat. 2+6,
`xenus`/`pcs-phoenix` beide in Kat. 1) sind **innerhalb** ihrer
Kategorien je einmal gezählt. Der Wert 74 gilt nur für den
Gesamtbestand. *(Zeile ausgeschrieben, weil eine stumme Summe hier
falsch gelesen würde.)*

**Unabhängige Bestätigung von B10.1:** Verteilung, Gesamtzahl, beide
Doppelnennungen und die Kategorie-Reihenfolge stimmen mit B10.1 exakt
überein — erhoben mit einem eigenen Skript in einer anderen Session.
Auch die dort bestätigte Einsortierung von `straiv` unter
**„Zahlungsanbieter Schnittstellen"** (zwischen `sparkasse.it` und
`stripe.com`) ist reproduziert.

---

## § 3. Positivkontrollen (Pflichtform des Auftrags)

### (a) Vollständigkeit der EXTRAKTION — bestanden

Geprüft wird das **Ergebnis**, nicht die Erreichbarkeit der Quelle.

| Pflicht-Element | Erwartung | Messung |
|---|---|---|
| `straiv` | muss erscheinen | ✔ Kategorie 3, Pos. 12 |
| `flexipass` | muss erscheinen | ✔ Kategorie 5, Pos. 4 |
| **`weareplanet`-Doppelnennung** | muss **zweimal** erscheinen | ✔ Kategorie 1, Pos. 18 + 19 (beide Logo `protel`) |
| Gegenrichtung `TREFFEN-NICHT` | Kunstbegriff `xyzzy` muss **0** Treffer haben | ✔ 0 |

**Zusätzliche mechanische Kontrollen im selben Lauf:**
`MOD-Partner__item--link` im Gesamtdokument = 78, Summe über die
Kategorieblöcke = 78 (**muss gleich sein** ✔) · Einträge **vor** dem
ersten Kategorieblock = 0 ✔ · base64-Gegenprobe: das `data-link`-Attribut
trägt die Ziel-URL base64-kodiert, sie stimmt bei **77 von 78** Einträgen
zeichengleich mit `data-gtm-label` überein. Der eine Abweicher ist
**kein Extraktionsfehler, sondern ein Datenfehler der Quelle**:
`data-gtm-label="https://www.interalp-touristik.com/ _blank"` — dort ist
das Link-Ziel-Attribut in das URL-Feld geraten.

### (b) Je PRÜFKANAL ein benannter Kontrollkandidat — bestanden

Der zweite Prüfkanal ist die **Marker-Suche im Seitentext** (Nähe zum
Feld). Ein Muster, das nicht treffen kann, sieht im Log wie ein sauberes
Negativ aus — deshalb zwei Domains mit **bekanntem** Befund aus B10.2 im
selben Lauf:

| Kontrollkandidat | Erwartung aus B10.2 | Messung |
|---|---|---|
| `straiv.io` | Check-in JA, Zutritt JA | CHECKIN **22**, ZUTRITT **4** ✔ |
| `flexipass.tech` | Zutritt JA | ZUTRITT **25** ✔ |
| **Gegenrichtung:** `unicredit.it`, `sparkasse.it`, `volksbank.it` (reine Banken) | dürfen **0** zeigen | CHECKIN 0 / ZUTRITT 0 bei allen drei ✔ |

Beide Richtungen belegt: Das Muster feuert, wo es feuern muss, und
schweigt, wo es schweigen muss.

### (c) Vollzähligkeit der GLIEDERUNG — bestanden

`MOD-Partner__container__item` = **7** und `MOD-Partner__title` = **7**
(zwei unabhängige Strukturmerkmale, gleiche Zahl), extrahiert **ohne**
Namensliste. Die Überschriften wurden erst **nach** der Extraktion mit
B10.1 verglichen — nicht davor.

### (d) Zwei Werkzeugfehler im EIGENEN Extraktionsskript (sichtbar gemacht)

Beide Fehler produzierten zunächst plausible, falsche Zahlen; beide
fielen nur auf, weil eine Kontrolle ein **unmögliches** Ergebnis
lieferte:

1. **base64-Gegenprobe meldete „0 von 78"** — das kann nicht sein, wenn
   beide Attribute dieselbe URL tragen. Ursache: Das Item-Fenster begann
   am `class`-Attribut, `data-link` steht im Markup aber **davor**.
   **HTML schreibt keine Attributreihenfolge vor** (dieselbe Fehlerklasse
   wie MKT R7 / B12-Ankerzahlen). Nach Reparatur: 77 von 78.
2. **„70 eindeutige Logo-Dateinamen" bei 78 Einträgen** — Ursache: Das
   Muster nagelte die Hash-Länge auf zehn Hex-Zeichen fest und traf die
   `.svg`-Logos der Kategorien 6/7 nicht. Nach Reparatur: 77 (die eine
   verbleibende Dublette ist `protel` = die echte
   weareplanet-Doppelnennung).

> **Beide Male galt: Eine Zahl, die offensichtlich nicht passen kann,
> ist ein Werkzeugfehler, kein Befund.** Ohne die Kontrollen hätte der
> Lauf sauber ausgesehen.

---

## § 4. Vorbefund- und Ausschlussliste (NICHT Teil des Suchauftrags)

Damit die Erhebung eine **Entdeckung** bleibt und nicht zur Verifikation
einer Namensliste wird (CLAUDE.md: Vorbefunde gehören in die
Ausschlussliste, nie in den Suchauftrag):

**Bereits an den Primärquellen geprüft (B10.2/B10.3) — hier NICHT neu
erhoben, nur in der Kategorietabelle mitgeführt:**
`straiv.io` (Kat. 3) · `flexipass.tech` (Kat. 5) · `hoteldoor.it`
(Kat. 5) · `iiq-check.de` (Kat. 5).

**Im Auftrag vorsortiert genannt** — diese fünf wurden erhoben wie alle
anderen, aber sie sind **kein Suchergebnis**, sondern eine im
Auftragstext mitgelieferte Auswahl: `chatlyn.com` ·
`customer-alliance.com` · `guest.net` · `reguest.io` ·
`mergeport.com` (alle Kategorie 5).

**Erhebungsmenge dieses Laufs:** 76 Domains − 4 bereits geprüfte =
**72 Domains**.

---

## § 5. Die Vollerhebung

**Spalten:** *Nähe* bewertet die vier im Auftrag benannten Felder
(Check-in · Zutritt · Gästekommunikation · Payment-Kopplung) am
gemessenen Seiteninhalt. *Einstufung* ist ein **Vorschlag** nach dem
B2-Raster (W1 Leistungs-Wettbewerber · W2 Anspruchs-Wettbewerber ·
K Kanal · N Raster nicht anwendbar · — keine Überschneidung).
Beleg-Typ ist überall **BYTE, SELBST**, sofern nicht anders vermerkt.

### § 5.1 Kategorie 1 — „PMS Schnittstellen" (25 Einträge / 23 Domains / 22 Firmen)

| # | Domain | Was der Anbieter laut eigener Seite tut | Nähe zum Feld | Vorschlag |
|---|---|---|---|---|
| 1 | `hotelcinquestelle.cloud` | „5stelle*", cloudbasiertes PMS für Hotels und B&B (IT) | **Check-in JA** — „Online Check-in … von seinem Mobilfunkgerät"; Payment-Gateway genannt | — (K-Kandidat) |
| 2 | `aida.software` | Modulares Software-System für Hotels, Gastronomie, Handel, Kliniken | gering; Payment-Bezüge, kein Check-in-Modul auf der Startseite | — |
| 3 | `asahotel.com` | „ASA HOTEL", webbasierte Hotelsoftware (Hotels, Camping, Ferienwohnungen) | **Check-in JA** — „**Pre Check-in** … inkl. **Ausweis-Scan**"; „Guest Journey"; Payment-Modul | — (K-Kandidat) |
| 4 | `casablanca.at` | PMS + Channel-Management + „digitale Guest Journey" (AT) | ⭐ **alle vier** — „Digitale Guest Journey: **Check-in/out, Mobile Key** & Gästeservices"; „CRM & **Gästekommunikation**"; „Payment"; Integrationsliste nennt **Schließanlagen** | — (starker K-Kandidat) |
| 5 | `elite.tirol` | „elite solutions", Software für Tourismusbetriebe | gering (Startseite sehr werblich, wenig Modulangaben) | — |
| 6 | `ericsoft.com` | „Suite 5°", Hotel-/Kettenverwaltungssoftware (IT) | keine Treffer auf der Startseite | — |
| 7 | `simplify-hospitality.com` (Marke **gastrodat**) | PMS für Hotellerie/Gastronomie | **Check-in JA** — „**Pre-Check-in**" mehrfach, Bewertungsmanager, Channel Manager | — (K-Kandidat) |
| 8 | `gms.info` | GMS Hotelsoftware, Modulsystem (AT) | ⭐ **Check-in stark** — „**GMS Smart Check In** … 4-in-1-Lösung … GMS **Online Meldeschein**, GMS Mail Assistent, GMS **Check in App** und Schnittstelle zum **Meldewesen**"; „GMS **Bezahllink**" | — (starker K-Kandidat) |
| 9 | `hotlinesoftware.de` | „hotline" Hotelsoftware (SoftTec), TSE-zertifiziert | ⭐ **Check-in + Gästekomm.** — „**Digitaler Meldeschein**, **Gäste-App**, **Checkin-Kiosk**"; Integration von **Schlüsselsystemen**; „SoftTec Payment" | — (starker K-Kandidat) |
| 10 | `hs3-hotelsoftware.de` | HS3 Hotelsoftware | keine Treffer auf der Startseite | — |
| 11 | `ibelsa.com` | Cloudbasiertes PMS | ⭐ **Check-in + Zutritt** — „vollautomatisierter **Check-in/Check-out**"; Integrationsliste „**Schließanlagen / Kiosk**"; „ibelsa.pay" | — (starker K-Kandidat) |
| 12 | `infor.com` | Enterprise-Software/Cloud-ERP (Konzern; Hospitality-Sparte nicht auf der DE-Startseite) | keine Treffer — ⚠️ Startseite ist Konzern-Landing, **kein Portfolio-Negativ** | **N** |
| 13 | `lts.it` | „LTS" — Landesverband der Tourismusorganisationen Südtirols | keine Treffer; Startseite ist eine News-Seite (1.148 Zeichen Text) | **N** (institutionell, s. § 5.8) |
| 14 | `mews.com` | Cloudnatives PMS, „über 15.000 Unterkünfte" | **Check-in JA** — „Gäste-Check-in"; „Payments eingebettet in PMS und POS", Terminals | — (K-Kandidat) |
| 15 | `oracle.com` | Konzern-Startseite (OPERA/Hospitality nicht auf der DE-Landing) | keine Treffer — ⚠️ **kein Portfolio-Negativ** | **N** |
| 16 | `passepartout.net` | Gestionale-Software für Unternehmen, Steuerberater, Hotels, Restaurants (IT) | keine Treffer auf der Startseite | — |
| 17 | `pcs-phoenix.com` | „phoenix hotelsoftware" (PCS GmbH, St. Ulrich) — **Altprodukt**, verlinkt selbst auf xenus | keine Treffer; Seite umfasst nur 1.131 Zeichen Text | — *(= Firma von Nr. 25)* |
| 18 | `weareplanet.com` | Planet PMS (**protel**) — „Zahlungsabwicklung und vieles mehr" | **Payment-Kopplung stark** (22 Treffer); Check-in nur beiläufig | — (K-Kandidat) |
| 19 | `weareplanet.com` | **Zweiter Eintrag derselben Domain** (Ziel `/de/hotel-pms`), gleiches Logo `protel` | s. Nr. 18 | *(Doppelnennung)* |
| 20 | `scidoo.com` | Cloud-PMS mit Booking Engine, Channel Manager, CRM, Zahlungen (IT) | Payment/CRM laut Description; auf der Startseite keine Check-in-Treffer | — |
| 21 | `de.shijigroup.com` | Shiji — „end-to-end hospitality technology … over 91.000 hotels" | **Payment stark** (29); „guest engagement" | — (K-Kandidat) |
| 22 | `sihot.com` | SIHOT, modulares All-in-One-PMS, 40 Jahre | ⭐ **alle vier** — Modulliste nennt **SIHOT.KIOSK**; „Online-Check-in im Hotel"; „verschlüsselte Zahlungen, **digitale Schlüssel** und sichere Authentifizierung"; „Guest Journey", Upselling | — (starker K-Kandidat) |
| 23 | `simplify-hospitality.com` (Marke **sitec**) | **Zweiter Eintrag derselben Domain** (Ziel `/de/sitec/`) | s. Nr. 7 | *(Doppelnennung)* |
| 24 | `winhotel-cdsoft.de` | „CDSoft" — Hybrid-Hotelsoftware für Individualhotels, „digitale Helfer" | keine Treffer — ⚠️ **Wildcard-Antwort, Negativ nicht belastbar** (§ 6, N-1) | — |
| 25 | `xenus.it` | „Xenus Hotelsoftware **by PCS**" (PCS GmbH, St. Ulrich) — **Nachfolgeprodukt** von Nr. 17 | ein Zutritts-Treffer, sonst gering | — *(= Firma von Nr. 17)* |

### § 5.2 Kategorie 2 — „CM & Booking Engine Schnittstellen" (13)

| # | Domain | Was der Anbieter laut eigener Seite tut | Nähe zum Feld | Vorschlag |
|---|---|---|---|---|
| 1 | `bookingexpert.com` | Channel Manager, Booking Engine, PMS (IT) | keine Treffer auf der Startseite | — |
| 2 | `easisuite.com` | **→ Redirect auf `yanovis.com`**, „Hotelsoftware von Yanovis" | gering | *(Firmen-Dublette, s. § 1.1)* |
| 3 | `hotelnetsolutions.de` | „OnePageBooking" — Buchungsmaschine + „Ökosystem für Direktvertrieb" | gering; Payment-Bezüge | — |
| 4 | `hotel-spider.com` | Distributionsplattform: Channel Manager, Booking Engine, GDS, Zahlungen | Payment-Kopplung; kein Check-in | — |
| 5 | `interalp-touristik.com` | ⭐ „**Ihr Hotel Vertriebspartner** … **individuelle Beratung**, proprietäre Software, **spezialisiert auf gehobene Klein- und Mittelständische Hotels**" | keine Feld-Treffer — **aber Beratungs-/Vertriebsleistung** | ⭐ **W-Kandidat**, s. § 5.9 |
| 6 | `iperbooking.com` | Booking Engine, Channel Manager, CRM, PMS All-in-One (IT) | gering | — |
| 7 | `krossbooking.com` | PMS + Channel Manager + Booking Engine (IT) | **Check-in + Zutritt** — „**check-in online**"; eigenes Produkt „**Kross Booking KDoor Smart lock**" | — (K-Kandidat) |
| 8 | `roomcloud.net` | Channel Manager, „sell on more than 400 portals" | Payment-Bezüge | — |
| 9 | `samera.at` | Online-Buchungssystem für die Ferienhotellerie | gering | — |
| 10 | `seekda.com` | Hotelmanagement-Software für Direktbuchungen; „Seekda Pay"; KI-Chatbot | **Gästekommunikation** (KI-Chatbot, 8 Treffer); Payment | — (K-Kandidat) |
| 11 | `simedia.com` | ⭐ „**Internetagentur Südtirol** \| **Online Marketing & Webdesign**" — SEO, SEA, Webdesign, Urlaubsportale | keine Feld-Treffer — **aber volle Agenturleistung** | ⭐ **W-Kandidat**, s. § 5.9 |
| 12 | `simplebooking.travel` | Booking Engine (IT) | keine Treffer | — |
| 13 | `verticalbooking.com` | CRS / Online Hotel Booking Software | keine Treffer | — |

### § 5.3 Kategorie 3 — „Zahlungsanbieter Schnittstellen" (18)

⚠️ **Die Kategorie ist inhaltlich heterogen** — sie enthält Banken,
Zahlungsdienstleister, **zwei Einkaufsverbünde** und **einen
Check-in-Anbieter**. Der Kategoriename beschreibt sie nicht vollständig.

| # | Domain | Was der Anbieter laut eigener Seite tut | Nähe zum Feld | Vorschlag |
|---|---|---|---|---|
| 1 | `cardcomplete.com` | Karten-Komplettanbieter Österreich (Akzeptanzgeräte, Abwicklung) | Payment | **N** |
| 2 | `firstcashsolution.de` | „Paymentlösungen … online oder stationär" | Payment (57 Treffer) — ⚠️ Wildcard-Antwort (§ 6, N-1) | **N** |
| 3 | `gastropool.it` | ⭐ **„Zentraler Einkauf mit System in Südtirol" — Einkaufsgruppe für Hotellerie**, „ein Ansprechpartner, eine Rechnung, kostenlose Beratung" | **kein Payment-Anbieter** | ⭐ **K-Kandidat**, s. § 5.9 |
| 4 | `hobex.at` | Bezahlterminals und Zahlungslösungen (AT) | Payment | **N** |
| 5 | `hogast.it` | ⭐ **„Einkaufsgenossenschaft für Gastronomie & Hotellerie"** | **kein Payment-Anbieter** | ⭐ **K-Kandidat**, s. § 5.9 |
| 6 | `nexi.it` | „PayTech" für digitale Zahlungen (IT) | Payment | **N** |
| 7 | `payone.com` | Payment online/instore/omnichannel | Payment | **N** |
| 8 | `paypal.com` | PayPal Business — Zahlungslösungen | Payment | **N** |
| 9 | `payway.com` | Kreditkarten-Processing (card-not-present, Abos) | Payment | **N** |
| 10 | `raiffeisen.it` | „Raiffeisen RGO" (Bank, Südtirol) | Bank — ⚠️ Wildcard-Antwort (§ 6, N-1) | **N** |
| 11 | `sparkasse.it` | Südtiroler Sparkasse (Privatkunden) | Bank | **N** |
| 12 | `straiv.io` | **bereits in B10.2 geprüft** — Check-in/Meldeschein/Kiosk/Türöffnung | **Check-in + Zutritt JA** | *(in B10.3 eingestuft)* |
| 13 | `stripe.com` | Zahlungsinfrastruktur | Payment | **N** |
| 14 | `unicredit.it` | UniCredit (Bank, Privatkunden) | Bank | **N** |
| 15 | `virtualpay.it` | **→ Redirect auf `allitude.it`** — IT-Dienstleister für Banken (s. § 1.2) | Payment/IT | **N** |
| 16 | `viveum.com` | Payment Service Provider | Payment | **N** |
| 17 | `volksbank.it` | Südtiroler Volksbank | Bank | **N** |
| 18 | `worldline.com` | „Europe's leading payment service provider" | Payment | **N** |

### § 5.4 Kategorie 4 — „POS Schnittstellen" (2)

| # | Domain | Was der Anbieter laut eigener Seite tut | Nähe zum Feld | Vorschlag |
|---|---|---|---|---|
| 1 | `naramis.com` | „Kassensoftware für Restaurants und Hotel in der Gastronomie" | POS/Payment | — |
| 2 | `xeno-data.de` | „Xenia NEXT" — Kassensoftware, „über 3000 Gastronomiebetriebe" | POS/Payment | — |

### § 5.5 Kategorie 5 — „Weitere Schnittstellenpartner" (12)

⭐ **Die Kategorie mit der höchsten Felddichte.** Hier stehen die
Anbieter, die unserem Feld am nächsten kommen.

| # | Domain | Was der Anbieter laut eigener Seite tut | Nähe zum Feld | Vorschlag |
|---|---|---|---|---|
| 1 | `chatlyn.com` | „Gästekommunikationsplattform für über 1.000 Hotels. Ein Posteingang für **WhatsApp**, E-Mail, Webchat … KI-gestützt, mit Ihrem PMS verbunden"; „13+ direkte PMS-Anbindungen" | ⭐ **Gästekommunikation — Kernfeld** (59 Treffer); Upselling | ⭐ **W-Kandidat**, s. § 5.9 |
| 2 | `customer-alliance.com` | Bewertungs-/Umfragemanagement; „fortschrittliches **CRM** für Hotels, das die **Gästekommunikation** über den gesamten Aufenthalt optimiert"; WhatsApp, KI | ⭐ **Gästekommunikation + Bewertungsmanagement** | ⭐ **W-Kandidat** (Aufbau-Posten → L-B1), s. § 5.9 |
| 3 | `ecogy.it` | E-Mobility, Photovoltaik, Speichertechnologie | **kein Hospitality-Bezug** | **N** |
| 4 | `flexipass.tech` | **bereits in B10.2 geprüft** — digitale Schlüssel | **Zutritt JA, Check-in NEIN** | *(in B10.3 eingestuft)* |
| 5 | `feratel.at` | Digitales **Destinationsmanagement**; „Individuelle **Gästekommunikation**. Vor, während und nach einem Aufenthalt"; Chatbot über Partner Onlim | ⭐ **Gästekommunikation** + Destinations-Zugang | **K-Kandidat** |
| 6 | `guest.net` | „Guestnet — Guest Experience Platform": **digitale Gästemappe**, Gäste-App, Zimmer-TV, Print, Widgets; „**NEU Online Check-In & Check-Out**"; „Wir unterstützen **über 2.500 Hotels in 4 Ländern**" *(Selbstauskunft, ungeprüft)* | ⭐ **Check-in + Gästekommunikation — Kernfeld** | ⭐ **W-Kandidat**, s. § 5.9 |
| 7 | `hoteldoor.it` | **bereits in B10.2 geprüft** — CRM/Marketing (Namensfalle) | **NEIN** | *(in B10.3 eingestuft)* |
| 8 | `iiq-check.de` | **bereits in B10.2 geprüft** — Bewertungsmanagement (Namensfalle) | **NEIN** | *(in B10.3 eingestuft, W2)* |
| 9 | `kunleisys.com` | „Software zur **Gästebindung** · Gäste-Club" — Treuepunkte, arbeitet mit bestehendem Hotelprogramm zusammen | **Gästebindung/CRM-nah** | **W2-Kandidat** |
| 10 | `mergeport.com` | Integriert Online-Bestellungen verschiedener Plattformen in die **POS-Software**; „tech partner of POS system manufacturers and ordering platforms" | POS-Integration — **kein Gästekommunikations-Anbieter** | **N** |
| 11 | `orderando.io` | ⭐ „**Die führende Guest-App für Hotels**" — Bestellungen, Buchungen, **Self-Payment**, digitale Gästemappe; „deckt den gesamten digitalen Gästekontakt **vom Check-in bis zum letzten Drink** ab"; **„ab 1,50 € pro Zimmer im Monat"**; nennt ReGuest und Xenus als Integrationen | ⭐ **Check-in + Gästekommunikation + Payment — Kernfeld** | ⭐ **W-Kandidat**, s. § 5.9 |
| 12 | `reguest.io` | „Hotel **CRM** für Angebotserstellung, **Gästekommunikation** und Verkauf"; Guest App, digitale Gästemappe, WhatsApp-Newsletter, AI-Chatbot | ⭐ **Gästekommunikation — Kernfeld** (37 Treffer) | ⭐ **W-Kandidat**, s. § 5.9 |

### § 5.6 Kategorie 6 — „Branchenpartner" (6)

| # | Domain | Was der Anbieter laut eigener Seite tut | Nähe zum Feld | Vorschlag |
|---|---|---|---|---|
| 1 | `alpinebits.org` | **Offener Datenaustausch-Standard** für alpinen Tourismus (Allianz) | Standard, kein Produkt | **N** |
| 2 | `crqlar.com` | „Crqlar Hotel Software \| Hotel Restaurant Software" | Hotel-/Restaurantverwaltung | — |
| 3 | `kohl-partner.at` | ⭐ **Kohl & Partner** — „individuelle Erfolgswege … 40 Jahren Erfahrung in **Tourismus und Freizeitwirtschaft**", Benchmarks, Daten | **Tourismusberatung** | ⭐ **W-Kandidat**, s. § 5.9 |
| 4 | `mts-austria.at` | ⭐ „MTS Austria GmbH — **Marketing Tourismus Synergie**" | Marketing-nah (Startseite ohne Description, wenig Text) | ⭐ **W-Kandidat (schwach belegt)**, s. § 5.9 |
| 5 | `opendatahub.com` | Offene Datenplattform (NOI Techpark, Südtirol) | Daten-Infrastruktur — ⚠️ Wildcard-Antwort (§ 6, N-1) | **N** |
| 6 | `yanovis.com` | „Hotelsoftware von Yanovis" — IT-Lösungen für mehr Buchungen | gering | *(= Firma von Kat. 2 Nr. 2)* |

### § 5.7 Kategorie 7 — „Institutionelle Partner" (2)

| # | Domain | Was die Organisation laut eigener Seite tut | Nähe zum Feld | Vorschlag |
|---|---|---|---|---|
| 1 | `hds-bz.it` | **hds — Handels- und Dienstleistungsverband Südtirol**: „professionelle Beratung und zeitgemäße Serviceleistung … schaffen einen Vorteil für dein Unternehmen" | Verband, Mitgliederkanal | **K** (Südtirol, außerhalb unseres Zielgebiets — s. § 5.8) |
| 2 | `hgj.it` | **HGJ** — Jung-Hotelier-Vereinigung Südtirol. Die Startseite trägt nur „Home" und keine Description; belegt ist die **Struktur** über die Navigation: „HGJ-**Landesleitung**", „HGJ-**Büro**", „HGJ-**Bezirksausschüsse**", „**Mitglied werden** / Deine Vorteile", „Partner", dazu die italienische Fassung „**Giovani Albergatori** — Chi siamo? / Diventa membro" | Verband mit Mitgliederstruktur, Mitgliederkanal | **K** (dito) |

### § 5.8 Vier Einträge, die keine Anbieter sind

`lts.it` (Landesverband der Tourismusorganisationen Südtirols) steht in
**Kategorie 1 „PMS Schnittstellen"**; `hds-bz.it` und `hgj.it` sind
Verbände; `alpinebits.org` ist ein Standard-Konsortium; `gastropool.it`
und `hogast.it` sind **Einkaufsgenossenschaften** in Kategorie 3
„Zahlungsanbieter". **Die Kategorienamen sind Schnittstellen-Klassen,
keine Geschäftsmodell-Klassen** — wer aus der Kategorie auf das
Geschäftsmodell schließt, liegt in mindestens **sechs von 78** Fällen
falsch. (Das ist die Fortsetzung des B10.2-Befunds „die Funktion ist
besetzt, die Kategorie existiert nicht" in die Gegenrichtung.)

### § 5.9 ⭐ Der Hauptbefund: acht Wettbewerbs-Kandidaten in einer „Technik"-Liste

Der Partnerkreis wurde im Bestand als **Technik-Partnerprogramm**
behandelt (B4.3: „Kanal — Partnerprogramm mit 78 Einträgen"). Die
Vollerhebung zeigt: **In dieser Liste stehen Anbieter, die unserem
eigenen Portfolio direkt gegenüberstehen** — sie wären über kein
Agentur-Suchraster gefunden worden, weil sie als „Schnittstellenpartner"
geführt sind.

**(A) Vier Anbieter im Gästekommunikations-/Gäste-App-Feld**
(alle Kategorie 5, alle mit eigener Guest-App oder CRM-Plattform):
`chatlyn.com` · `reguest.io` · `guest.net` · `orderando.io`.
Dazu `customer-alliance.com` (Bewertungsmanagement + „CRM für Hotels")
und `kunleisys.com` (Gästebindung).
➡️ **Direkter Bezug zu P17** („Reine Gästemappen-/Guest-App-Anbieter
sind in Teil B systematisch nicht erhoben"): Der Partnerkreis liefert
**vier weitere namentliche Kandidaten** für den P17-Suchraum, zusätzlich
zu den über 40 aus der flexipass-Marktplatzliste (B10.4).

**(B) Vier Anbieter mit Marketing-, Beratungs- oder Vertriebsleistung**
— also in **Teil-B-Gebiet**, nicht in Teil-A-Gebiet:

| Anbieter | Kategorie bei Brandnamic | Was ihn zum Teil-B-Fall macht |
|---|---|---|
| `simedia.com` | 2 (CM & Booking Engine) | „**Internetagentur Südtirol** — Online Marketing (SEO, SEA), Webdesign, Urlaubsportale" — **Vollagentur** |
| `kohl-partner.at` | 6 (Branchenpartner) | **Tourismusberatung**, 40 Jahre, Benchmarks — bereits aus B11.2 bekannt als Mit-Träger der Brandnamic-Kooperationsgruppen |
| `interalp-touristik.com` | 2 (CM & Booking Engine) | „Hotel **Vertriebspartner** … **individuelle Beratung** … spezialisiert auf gehobene Klein- und Mittelständische Hotels" |
| `mts-austria.at` | 6 (Branchenpartner) | Firmenname „**Marketing** Tourismus Synergie" — ⚠️ **nur der Name belegt es**, die Startseite trägt keine Description und wenig Text; **schwacher Beleg, eigener Prüflauf nötig** |

> ⭐ **Der Befund zu `kohl-partner.at` verschärft B11.2.** Dort ist Kohl
> & Partner als **Mit-Träger** der Brandnamic-Kooperationsgruppen
> (Belvita, Familienhotels Südtirol) belegt. Jetzt ist belegt, dass
> dieselbe Beratung **zusätzlich im Partnerprogramm** steht. Das ist
> **derselbe Akteur auf drei Wegen** zur selben Zielgruppe
> (Kooperationsgruppe · Partnerprogramm · eigene Beratung) — strukturell
> die Parallele zum **Goslar-Cluster** (AKZENT/ConsultiiQ/TMA) aus
> B11.4, hier in Südtirol.

**(C) Zwei Einkaufsgenossenschaften als Kanal:** `hogast.it`
(„Einkaufsgenossenschaft für Gastronomie & Hotellerie") und
`gastropool.it` („zentraler Einkauf … ein Ansprechpartner, eine
Rechnung, **kostenlose Beratung**"). Beide bündeln Hotels als
Mitglieder — **strukturell Kanäle**, in einer Payment-Kategorie
versteckt. ➡️ Gehört zur Verbund-/Kanalfrage (P21 bzw. MKT-AKQ), nicht
hierher.

### § 5.10 ⭐ Nebenbefund: Check-in ist bei den PMS-Anbietern Standardmodul

B10.2 stellte fest: „Die Funktion ist besetzt, die Kategorie existiert
nicht." Die Vollerhebung **quantifiziert** das jetzt:

**Mindestens 9 der 23 PMS-Domains** (Kategorie 1) führen Check-in,
Meldeschein, Kiosk oder Mobile Key **als eigenes Modul im eigenen
Produkt** — nicht als Partnerleistung:
`gms.info` (Smart Check In, Online Meldeschein, Check-in-App,
Meldewesen-Schnittstelle) · `hotlinesoftware.de` (Digitaler Meldeschein,
Gäste-App, **Checkin-Kiosk**) · `casablanca.at` (Check-in/out +
**Mobile Key**) · `ibelsa.com` (vollautomatisierter Check-in/out,
Schließanlagen/Kiosk) · `sihot.com` (**SIHOT.KIOSK**, digitale
Schlüssel) · `asahotel.com` (Pre Check-in mit Ausweis-Scan) ·
`hotelcinquestelle.cloud` (Online Check-in) ·
`simplify-hospitality.com` (Pre-Check-in) · `mews.com`
(Gäste-Check-in). Dazu aus Kategorie 2: `krossbooking.com`
(Check-in online + **KDoor Smart lock**).

⚠️ **Zählweg und Grenze:** „Mindestens 9 von 23" heißt: neun Domains
nennen es **auf ihrer Startseite**. Die übrigen 14 nennen es dort nicht
— das ist **kein Beleg, dass sie es nicht haben** (§ 0 Punkt 3).
Die Zahl ist eine **Untergrenze**, kein Anteil.

➡️ **Zielort:** Das ist ein Befund für die Positionierung (Säule
Check-in/Guest Journey) und für den Produkt-Strang heyPensio, nicht für
dieses Dokument. Als Nebenbefund gemeldet.

---

## § 6. Negative, Grenzen, nicht belastbar Erhobenes

**Pflichtform:** Jede Negativ-Aussage nennt Methode, Suchumfang und
Datum. Eine undokumentierte Negativ-Suche existiert nicht.

**N-1 — Fünf Domains liefern auf JEDEN Pfad dieselbe Seite
(Wildcard-Antwort).** Kontrollpfad
`/zzz-r08b-positivkontrolle-existiert-nicht`, 11.08.2026, je Domain im
selben Lauf wie der Hauptabruf. Byte-identisch zur Startseite bei:
`winhotel-cdsoft.de` · `raiffeisen.it` · `firstcashsolution.de` ·
`orderando.io` · `opendatahub.com`.
**Folge:** Der **Startseiteninhalt** dieser fünf ist belastbar (er wurde
geladen); jedes **Unterseiten-Negativ** wäre bei ihnen ein Artefakt.
Für diese fünf gilt „nicht auf der Startseite gefunden" — mehr nicht.
*(Die Gegenprobe lief bei 63 der 72 Domains sauber mit HTTP 404, bei
6 mit HTTP 200, bei 3 ohne Antwort.)*

**N-2 — Zwei Startseiten sind inhaltsarm.** `hgj.it` (Titel „Home",
keine Description, 3.334 Zeichen Text) und `pcs-phoenix.com` (1.131
Zeichen).
> ⚠️ **Sichtbar gemachte Korrektur an der eigenen Erstfassung:** Die
> erste Fassung dieses Dokuments löste „HGJ" aus der **Domain** zu
> „Hoteliers- und Gastwirtejugend Südtirol" auf — **das stand nirgends
> in der Quelle** und war eine Vermutung im Gewand eines Befunds. Die
> Gegenprobe am Rohbeleg (Volltext entmarkupt, 11.08.2026) fand die
> Auflösung des Kürzels **nicht**, wohl aber die Organisationsstruktur
> (Landesleitung, Bezirksausschüsse, Mitgliedschaft) und die
> italienische Bezeichnung „**Giovani Albergatori**". § 5.7 trägt jetzt
> den Beleg statt der Vermutung. **Der volle Verbandsname ist damit
> weiterhin nicht belegt** — wer ihn braucht, holt ihn am Impressum.

**N-3 — Konzern-Startseiten sagen nichts über die Hospitality-Sparte.**
`oracle.com` und `infor.com` wurden über ihre deutschen
Konzern-Landingpages erhoben. Dass dort „Check-in" nicht vorkommt, ist
**kein Portfolio-Negativ** — Oracle OPERA und Infor HMS sind bekannte
PMS-Produkte; ihr Funktionsumfang ist hier **nicht erhoben**.

**N-4 — Die Firmen-Zählung 74 ist eine Obergrenze, kein Endstand.**
Geprüft wurde auf Dubletten über (a) Host-Redirects (systematisch, alle
72) und (b) auffällige Inhaltsgleichheit (nur dort, wo sie ins Auge
fiel). **Konzernverbünde ohne Redirect und ohne gleichen Seiteninhalt
würden beide Prüfwege passieren** — genau so wurde `xenus`/`pcs-phoenix`
nur zufällig gefunden. Eine belastbare Firmenzählung bräuchte
Registerabgleiche je Domain; das ist **nicht geschehen**.

**N-5 — Ein Encoding-Hinweis, kein Datei-Befund.** `pcs-phoenix.com`
zeigt im Titel Mojibake („S�dtirol"). Die Seite liefert vermutlich
ISO-8859-1, gelesen wurde als UTF-8. **Das ist der Leseweg, nicht die
Quelle** — vor jeder Weiterverwendung eines Zitats von dieser Domain
Byte-Prüfung nachholen.

**N-6 — Nicht erhoben (bewusst, außerhalb des Auftrags):**
Partnerprogramme der Partner (K-Einstufungen sind deshalb als
„K-Kandidat" markiert, nicht vergeben) · Preise · Mitarbeiterzahlen ·
Registerauszüge · die Frage, ob Brandnamic für Partner Gebühren nimmt.

**N-7 — Die vier bereits geprüften Einträge wurden NICHT neu erhoben**
(Ausschlussliste § 4). Ihre Zeilen in § 5 verweisen auf B10.2/B10.3 und
sind **kein neuer Beleg**.

---

## § 7. Verifikationsgrad mit Nenner

| Menge | Zahl | Anmerkung |
|---|---|---|
| Einträge im Partnerkreis | **78** | eigener Zähllauf, § 1 |
| Eindeutige Domains | **76** | ebenda |
| Unterscheidbare Firmen | **74** | § 1.1, Obergrenze (N-4) |
| Bereits in B10.2 geprüft, hier nicht neu erhoben | **4** | § 4 |
| **Erhebungsmenge dieses Laufs** | **72 Domains** | 76 − 4 |
| **Davon mit belastbarem Seitenabruf ausgewertet** | **72 von 72** | 67 im Erstlauf, **5 per Nachfass** (`orderando.io`, `gastropool.it`, `pcs-phoenix.com`, `lts.it`, `paypal.com`) |
| Davon mit eingeschränkter Belegstufe | **7 von 72** | 5× Wildcard-Antwort (N-1), 2× inhaltsleer (N-2) — je einzeln ausgewiesen |
| Davon ohne jede Aussage zum Feld | **0** | jede Domain trägt mindestens eine Einordnung |
| **Kategorien vollzählig belegt** | **7 von 7** | generisch, § 2/§ 3(c) |
| **Positivkontrollen bestanden** | **(a) ✔ · (b) ✔ · (c) ✔** | § 3 |

**Ergebnis: 72 von 72 Domains ausgewertet, 0 unerhoben.** Sieben
Auswertungen tragen eine ausgewiesene Belegschwäche; keine ist
weggelassen.

---

## § 8. Was anderen Strängen gehört (Zielorte)

*(Befunde außerhalb des eigenen Auftrags bekommen einen Zielort oder
werden ausdrücklich als nicht verfolgt markiert — CLAUDE.md Regel 8b.
Die Einarbeitung macht die Leitsession; dieses Dokument fasst
`wettbewerbsbild.md` nicht an.)*

| # | Befund | Zielort | Nächste Aktion |
|---|---|---|---|
| Z-1 | **Firmenzahl 74** neben Einträgen/Domains; zwei Firmen-Dubletten (§ 1.1) | `fund/wettbewerbsbild.md` **B10.1** | dritte Spalte in die Kategorietabelle; P22-Zeile in § 7 auf erledigt |
| Z-2 | **Vier Guest-App-/Gästekommunikations-Anbieter** namentlich (chatlyn, reguest, guest.net, orderando) | **P17** (§ 7) | Suchraum von P17 um diese vier erweitern |
| Z-3 | **Vier Teil-B-Fälle in der Technikliste** (simedia, kohl-partner, interalp, mts-austria) | Teil B (B4/B5) | Einstufung nach B2 durch die Leitsession; `mts-austria.at` braucht einen eigenen Prüflauf (Beleg schwach) |
| Z-4 | **Kohl & Partner auf drei Wegen** zur selben Zielgruppe | **B11.2/B11.4** | Verschärfung des Strukturbefunds; Parallele zum Goslar-Cluster |
| Z-5 | **Zwei Einkaufsgenossenschaften** (hogast, gastropool) als Kanal | **P21** / MKT-AKQ | in die Verbund-Erhebung aufnehmen — **Kanalbewertung ausdrücklich nicht hier** |
| Z-6 | **Check-in als PMS-Standardmodul, ≥ 9 von 23** (§ 5.10) | `fund/positionierungspapier.md` (Säule Check-in) + Produkt-Strang heyPensio | Positionierungsfolge prüfen; **Produkt-Befund geht NICHT direkt ins heypensio-Repo** (CLAUDE.md Firmen-Ebene Regel 3) |
| Z-7 | **Byte-Angabe im R8-Prompt falsch** (430.793 statt 475.910) | Tagesplan / Leitsession | Korrektur, damit die Zahl nicht weiterwandert |
| Z-8 | **Datenfehler bei Brandnamic** (`… .com/ _blank` im Link-Attribut) | — | **bewusst nicht verfolgt** — ohne Wert für unsere Fragen |
| Z-9 | **Unpassende `alt`-Texte** auf der Brandnamic-Partnerseite (Logo `raiffeisen` trägt „Moderner Luxusrolex Daytona Chronograph", Logo `elite` trägt „Frau trägt schwarzen glänzenden Rock") — offenbar maschinell erzeugt und ungeprüft veröffentlicht | Teil B (Wettbewerbsbild) **oder** ausdrücklich verwerfen | **Entscheid der Leitsession.** Belegt am Rohbeleg; für eine Wettbewerbsaussage („Qualitätsniveau der eigenen Website") verwertbar, aber nicht Auftrag |

---

## § 9. Änderungsprotokoll

| Datum | Session | Änderung |
|---|---|---|
| 11.08.2026 | R08-B | **Ersterstellung.** P22 vollerhoben: 72 von 72 Domains, Leseweg durchgehend BYTE. Zählweg mit drei Schlüsseln (78/76/74) — die dritte Zahl (Firmen) ist neu und löst zwei bisher unbekannte Dubletten auf (`easisuite`=`yanovis`, `xenus`=`pcs-phoenix`). Sieben Kategorien generisch belegt. Positivkontrollen (a)(b)(c) bestanden, zwei eigene Werkzeugfehler sichtbar dokumentiert (§ 3d). Hauptbefund § 5.9: acht Wettbewerbs-/Kanal-Kandidaten in einer als Technik geführten Liste. Nebenbefund § 5.10: Check-in ist bei ≥ 9 von 23 PMS-Anbietern Standardmodul. Neun Zielort-Befunde in § 8. Belegbasis: `sensibel\rohbelege-R08-B\`. |
