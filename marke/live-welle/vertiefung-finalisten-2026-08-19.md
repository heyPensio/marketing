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
> - **Rohbelege:** `sensibel/rohbelege-R19-C/` (git-ignoriert), **11
>   Ordner, davon 9 mit `hashes.txt`** (Zählweg: `ls -d …/*/ | wc -l` = 11
>   und `ls …/*/hashes.txt | wc -l` = 9, Stand 12:42 MESZ). Ohne Hashdatei:
>   der Browser-Ordner (das Werkzeug schreibt keine Dateien) und der
>   K6-Lauf (Skript legt die Rohantworten ab, aber keine Hashliste).
>   *(Vorher stand hier „fünf Laufordner" — eine Zahl ohne Zählweg, schon
>   zum Bericht-Commit falsch und durch die Nacharbeit weiter gealtert;
>   Prüferbefund P-15. Auch die erste Korrektur war noch geschätzt und
>   wurde erst durch die Zählung richtig.)*
>
> ⚠️ **Was dieses Dokument NICHT ist:** keine Rechtsberatung und keine
> Kollisionsentscheidung. Verwechslungsgefahr und Schutzumfang sind
> Wertungsfragen; nach E-K5 (Katalog-Nachtrag 09.08.2026) läuft die
> Namensfindung **vorerst ganz ohne Anwalt**, juristische Grenzfälle bleiben
> deshalb „nicht prüfbar" und **blockieren lt. K2**, bis der User je Fall
> entscheidet. Wo die Lage streitig ist, steht hier „streitig" — nicht der
> bequemere Pol.

---

## § 0 Prüflauf und Reparaturen (sichtbar, nicht still geglättet)

Nach dem ersten Bericht-Commit (`01c98d9`, 12:17 MESZ) lief ein
**unabhängiger Prüfer mit frischem Kontext** gegen genau diesen
eingefrorenen Stand: `protokolle/R19-C-pruefer.md`. Ergebnis: **21 Befunde
(4 schwer, 10 mittel, 7 Hinweise).** Die Messebene hielt (alle Einzelzahlen
und Zitate der §§ 3–5 wurden am Rohbeleg wiedergefunden, die
Kontrollarchitektur reproduziert); die Fehler lagen in der **Verdichtung**
und in **nicht deklarierten Suchraum-Grenzen**.

**Was daraufhin nachgemessen wurde** (Läufe nach dem Prüfstand, Rohbelege
in § 10):

1. **Die beiden TMview-Getrennt-Läufe waren nur zu je 100 von 307 bzw. 297
   Zeilen ausgewertet** — der Bericht wies das nicht aus (P-02). Beide
   Läufe sind jetzt **vollständig** geholt (307/307, 297/297, dazu 24/24
   für „Wise Stay"); §§ 3.1–3.3 tragen die Vollerhebung.
2. **Ein lebender, DE/EU-wirksamer Treffer fehlte:** INNOSIGHT (P-03) —
   jetzt in § 3.2 und § 8.
3. **Die DPMA-Trefferlisten der Getrenntformen** („Stay Ahead" 12,
   „Inn Sight" 3) waren nie gezogen worden (P-10) — jetzt gezogen und
   ausgewertet.
4. **K6 war für alle drei Finalisten überhaupt nicht gelaufen** (P-05); der
   Bericht las sich, als sei nur der EN-Muttersprachler-Teil offen. Der
   Wörterbuch-Doppellauf über sechs Sprachen ist jetzt nachgeholt (§ 5.1).
5. **Eigener Selbstfund vor dem Prüferrücklauf:** Die DPMA-Smartsearch
   liefert bei abgeschnittenen Suchstämmen **stille falsche Negative**
   (§ 3.4) — und das dafür gebaute Prüfskript hatte seine Erfolgsbedingung
   falsch verknüpft und deshalb „gangbar" gemeldet.

**Korrigierte Falschaussagen** (je an Ort und Stelle mit Reparaturvermerk):
die Matrix-Zellen zu Stayahead und Innsight (P-04, P-08), der Zählsatz „null
Treffer über beide Schreibweisen" (P-06), die INNSITE-Fundstelle (P-07), die
Kontroll-Entwarnung in § 6.2 (P-09), die Zahl der Laufordner im Kopf (P-15)
und eine unbelegte Werkzeug-Klammer (P-16). Die Disposition **aller 21
Befunde** steht in `protokolle/R19-C-abschluss.md`.

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
| **TMview** | ✔ 0 gesamt (Identität); getrennt „Wise Stay" 24, davon DE/EU-wirksam im Suchraum **1: STAYWISE, Kl. 42, eingetragen** | ⚠️ 19 gesamt (Identität), darin DE nur `Sinnsight.` (Kl. 41/44, beendet); **getrennt „Inn Sight" 307, davon DE/EU-wirksam im Suchraum 19 — 14 lebend, u. a. `Inn:Sights` Kl. 35/41/42 und `INNOSIGHT` Kl. 9/16/35/41** | ⚠️ 8 gesamt (Identität), **keine DE/EM-Zeile**; getrennt „Stay Ahead" 297, davon DE/EU-wirksam im Suchraum 10 — **nur 2 lebend, beide mehrgliedrige Zeichen** |
| **`.de`** | ✔ **frei** (RDAP 404, heute gemessen) | ⚠️ vergeben — aktive Firma | ⚠️ vergeben — **zum Verkauf, 820 €** |
| **`.com`** | ⚠️ vergeben — **Marktplatz, 88.000 USD** | ⚠️ vergeben — aktiver Branchen-Namensvetter | ⚠️ vergeben — aktive Firma (UK) |
| **Instagram** | ❌ nicht prüfbar | ❌ nicht prüfbar | ❌ nicht prüfbar |
| **Facebook** | ⚠️ vergeben (Gästehaus Cardiff) | ⚠️ vergeben (**Hotel-Dienstleister San Francisco**) | ⚠️ vergeben (Privatprofil) |
| **YouTube** | ⚠️ vergeben (`@wisestay` → Kanal „stay wise") | ⚠️ vergeben (`@innsight`) | ⚠️ vergeben (`@stayahead` → „Stay Ahead") |
| **LinkedIn** | ⚠️ vergeben (`/company/wisestay`, UK) | ⚠️ vergeben (`/company/innsight`) | ✔ **404** (Indiz frei, keine Freigabe) |

**Kein Feld ist leer** — jede Zelle trägt entweder ein Ergebnis mit Beleg
(§§ 3–5) oder ein ausgewiesenes „nicht prüfbar" mit Kanal und Grund (§ 7).

> ⭐ **REPARATUR 19.08.2026 (Prüferbefunde P-04 und P-08, mittel).** In der
> TMview-Zeile stand vorher: bei Stayahead „⚠️ 8 gesamt; **im Suchraum nur
> BEENDETE Marken**" und bei Innsight „⚠️ 19 gesamt; im Klassen-Suchraum:
> `Inn:Sights` DE Kl. 35/41/42 eingetragen". Beides war falsch verdichtet:
> (a) Von den 8 Stayahead-Zeilen liegt **gar keine** im DE/EM-Raum — „nur
> beendete" behauptet einen Bestand, den es nicht gibt; lebend im
> Klassen-Suchraum ist dort allein die **britische** Marke StayAhead
> Training (Kl. 16/41), und GB ist seit dem Brexit weder DE noch EU.
> (b) `Inn:Sights` steht **nicht** unter den 19 Identitäts-Zeilen, sondern
> stammt aus dem Getrennt-Lauf; die einzige DE-Zeile der 19 ist
> `Sinnsight.` (beendet) und fehlte ganz. Die Zellen trennen jetzt
> Identitäts- und Getrennt-Lauf und tragen die Vollerhebung.

---

## § 3 Markenregister im Detail

**Suchraum** (Verfahren § 2.2, unverändert): Klassen 9, 35, 36, 37, 38, 41,
42 **plus 43**. Gewertet werden DE- und EU-wirksame Rechte; Treffer außerhalb
dieses Suchraums werden notiert, aber — so das Verfahren wörtlich — „nur bei
bekanntem Zeichen (**Verkehrsgeltung**) als Risiko gewertet".

> ⭐ **REPARATUR 19.08.2026 (Prüferbefund P-13, mittel).** Hier stand
> verkürzt: „Treffer außerhalb werden genannt, aber nicht als Risiko
> gewertet" — die **Verkehrsgeltungs-Ausnahme des Verfahrens war beim
> Verdichten weggefallen**, also genau der Vorbehalt, der die eigene
> Aussage einschränkt. Er ist hier nicht akademisch: Die einzige lebende
> Marke im Stayahead-Umfeld gehört **GEOPOST** (Klasse 39, DPD-Konzern) —
> ein Zeichen mit erheblicher Marktpräsenz. **Die Prüffrage „bekanntes
> Zeichen?" ist damit ausdrücklich gestellt und BLEIBT OFFEN**; sie zu
> beantworten ist eine Wertungsfrage und nach E-K5 gesperrt (§ 7.7).

**Vollzähligkeit der Auswertung** (nachgezogen nach Prüferbefund P-02): Für
jeden ausgewerteten TMview-Lauf ist unten die geholte Zeilenzahl gegen
`totalResults` ausgewiesen. Die drei Getrennt-Läufe sind **vollständig**
(307/307, 297/297, 24/24); die Identitäts-Läufe liegen unter dem
Seiten-Limit und sind damit ebenfalls vollständig (0/0, 19/19, 8/8).

### 3.1 N-145 Wisestay — kein identisches Zeichen; ein lebendes Nachbarzeichen in der Kernklasse

- **DPMA:** Smartsearch `Wisestay` → `marHits=0`; die aufgerufene
  **Trefferliste ist leer** (nur die Kopfzeile, 1 Tabellenzeile) —
  `006-liste-Wisestay.hop-2.body.html`.
- **EUIPO:** 0 Treffer. **TMview:** 0 Treffer gesamt.
- **Varianten-Raster** (Verfahren § 3.2, phonetisch): `Wysestay`, `Weisstay`,
  `Wisestey`, `Wisestai` → TMview je **0**.
- **Getrennte Schreibweise „Wise Stay":** DPMA **0** (Trefferliste leer,
  nachgezogen) · EUIPO 0 · TMview **24 von 24 Zeilen ausgewertet**. Davon
  DE/EU-wirksam im Klassen-Suchraum: **genau eine** —
  **STAYWISE** (EM 019310904, Kl. 42, **eingetragen**, Björndal, Per,
  angemeldet 30.01.2026, Schutzerstreckung auf DE). Das ist die Marke, an
  der in R19-B der Kandidat *Staywise* gescheitert ist; gegenüber
  „Wisestay" **umgekehrte Wortfolge**, kein identisches Zeichen.
  Außerhalb des Suchraums: `EAT WISELY STAY HEALTHY` (EM, abgelaufen,
  branchenfremd).
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
NICHT und wäre ohne den Getrennt-/Varianten-Lauf unsichtbar geblieben.

**Nachtrag zur Registerauskunft (Lauf 12:25 MESZ, Rohbeleg
`004-auskunft-DE-3020232350773.body.html`; Positivkontrolle apaleo im selben
Lauf bestanden):** `Inn:Sights` ist eine **Wortmarke** (nicht Wort-/Bild),
Inhaber **Inn:Syn GmbH, 14055 Berlin**, eingetragen **22.11.2023**,
Schutzende 19.09.2033, Benutzungsschonfrist bis 22.03.2029. Das
Dienstleistungsverzeichnis lautet in Klasse 42 wörtlich:

> „Entwicklung, Programmierung und Implementierung von Software;
> IT-Beratungs-, -Auskunfts- und -Informationsdienstleistungen;
> IT-Sicherheits-, -Schutz- und -Instandsetzungsdienste; IT-Dienstleistungen"

und in Klasse 35 u. a. „Unternehmensberatung; … Werbung, Marketing und
Verkaufsförderung; Hilfe in Geschäftsangelegenheiten, Geschäftsführung und
administrative Dienstleistungen". **Das ist nicht die Nachbarschaft unseres
Leistungsfelds, sondern dasselbe Feld.**

**Alle weiteren DE/EU-wirksamen Treffer im Klassen-Suchraum** — aus der
**vollständigen** Auswertung des Getrennt-Laufs „Inn Sight" (307/307 Zeilen,
Lauf `nachzug-register-…`). Es sind **19 Zeilen, davon 14 lebend**;
Auswahlkriterium der Liste: DE- oder EU-Schutzwirkung **und** mindestens
eine Klasse im Suchraum — kein Zeichen-Abstandsfilter, damit die Liste
nachprüfbar vollzählig ist:

| Zeichen | Amt | Kl. | Status | Inhaber |
|---|---|---|---|---|
| **INNOSIGHT** | WO 972657 | 9, 16, 35, 41 | **Eingetragen** | Innosight, LLC |
| **Inn:Sights** | DE 3020232350773 | 35, 41, 42 | **Eingetragen** | Inn:Syn GmbH |
| **INN SIGHT** | DE 3020242492945 | 9, 13 | **Eingetragen** | Zeitgeist-Geschenke GmbH |
| INNERSIGHT3D | EM 019290736 / DE 3020251264984 | 9, 42 | Eingetragen | Karl Storz SE & Co. KG |
| InnerSight | DE 3020262416764 | 9, 16, 41 | Angemeldet (30.07.2026) | Heidel, Anette |
| EM insight yields innovative products | DE 3020232035398 | 9, 10, 42 | Eingetragen | Gao, Han |
| SIGHTLINE INNOVATION | EM 015345218 | 9, 42 | Eingetragen | Sightline Innovation Inc. |
| InData Labs … Insightful | EM 014170039 | 35, 9, 42 | Eingetragen | INDATA LABS GROUP |
| Winnow Foresight | EM 019306998 | 9 | Eingetragen | WINNOW SOLUTIONS LTD |
| Rohrbeck Heger … foresight + innovation | EM 018726429 | 35, 42 | Eingetragen | CreativeDock Holding |
| INNOVACOG SenseInsight | EM 019347216 | 9, 42 | Eingetragen | INNOVACOG |
| worldfue institute … | EM 016606758 | 41, 42, 44 | Eingetragen | World Fue Institute |
| Innovation Days … INSIGHT INNOVATION GALLERY | EM 011389319 | 9, 35, 38, 41, 42 | Eingetragen | UNIVERSAL MEDICA |
| *(nicht lebend)* INNOSIGHT | EM 018907148 | 9, 42 | Beendet | Innocap Investment Mgmt |
| *(nicht lebend)* INNOSIGHT GROWTH THROUGH INNOVATION | WO 972658 | 9, 16, 35, 41 | Beendet | Innosight, LLC |
| *(nicht lebend)* Sinnsight. | DE 3020202175892 | 41, 44 | Beendet | — |
| *(nicht lebend)* INN SIGHTJOGGING | DE 399102132 | 39, 41, 42 | Abgelaufen | Schmiedchen, Peter |
| *(nicht lebend)* i2i INSIGHT TO INNOVATION | EM 010717321 | 42 | Abgelaufen | Revvity, Inc. |

> ⭐ **REPARATUR 19.08.2026 (Prüferbefunde P-03 schwer, P-07 und P-16
> mittel/Hinweis).** Hier stand vorher nur: „Weitere DE/EU-Treffer im
> Suchraum aus demselben Lauf (Status beachten): `INNSITE` (DE + EM,
> Kl. 9/16/42 — abgelaufen bzw. beendet), `INNERSIGHT3D` …, `InnerSight`
> …". Drei Fehler in einem Satz:
> **(1)** Die Liste war eine **Auswahl ohne genanntes Kriterium** und las
> sich als vollständig — es fehlte namentlich **INNOSIGHT (WO 972657,
> eingetragen, Schutz u. a. DE und EM, Kl. 9/16/35/41)**, ein LEBENDES
> DE/EU-wirksames Zeichen in drei Suchraum-Klassen, das dem Namen näher
> steht als das genannte INNERSIGHT3D.
> **(2)** `INNSITE` stammt gar nicht „aus demselben Lauf", sondern aus dem
> Varianten-Lauf `Innsite` — Aussage richtig, **Fundstelle falsch**.
> (INNSITE ist in der vollständigen Getrennt-Auswertung nicht enthalten
> und steht deshalb jetzt beim Varianten-Raster.)
> **(3)** Die Klammer „(sie sucht die exakte Zeichenfolge)" war eine
> **eigene Vermutung über die Mechanik eines fremden Systems** ohne
> Quelle — gestrichen; was die Smartsearch tatsächlich tut und nicht tut,
> steht jetzt gemessen in § 3.4.

**Umfeld außerhalb des DE/EU-Wertungsraums, aber entscheidungsrelevant
(P-18):** Der Branchen-Namensvetter **INNsight.com, Inc.** ist nicht nur
Domain- und Social-Media-Halter, sondern **US-Markeninhaber in unseren
Kernklassen** — u. a. US 90045083 (Kl. 35/42/43, eingetragen) und
US 86861790 (Kl. 35, eingetragen). Nach Verfahren § 2.2 wird das **nicht
als DE/EU-Risiko gewertet**; unter der Begründung von E-K1 („internationales
Ökosystem", Katalog § 5) gehört es aber ins Bild. Ebenfalls notiert: Die
DPMA-Smartsearch meldet zu „Innsight" neben `marHits=1` auch `patHits=1`
und `gsmHits=1` (Patent-/Gebrauchsmuster-Namensvetter) — für die
Markenlage marginal, hier nur der Vollständigkeit halber.

**Varianten-Raster Innsight** (eigener Lauf, nicht der Getrennt-Lauf):
`Innsyght` → 0 · `Inzight` → 2 (keine DE/EM-Zeile) · `Innsite` → 16, darunter
`INNSITE` (DE + EM, Kl. 9/16/42 — **abgelaufen bzw. beendet**) ·
`Insight` → **21.910**.

⚠️ **Die Achse, die kein Register zeigt:** „Innsight" ist gesprochen kaum von
**„Insight"** zu unterscheiden. Die 21.910 Treffer enthalten eingetragene
EU-Marken in Klasse 9 und 42 (`020-variante-Innsight-Insight.body.json`).
Das ist keine Kollisionsaussage — es ist die Feststellung, dass der Name in
einem sehr dicht besetzten Zeichenfeld liegt, und zugleich ein K1-Punkt
(Unterscheidungskraft/Schutzfähigkeit). ⚠️ **Geltungsgrenze:** Von diesen
21.910 Zeilen wurden **100 gesichtet** (Seite 1); eine Aussage über den
Rest wird hier nicht getroffen und wäre bei dieser Menge auch nicht
sinnvoll — was zählt, ist die Dichte, nicht die Einzelzeile.

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
- **Zusammengeschrieben:** DPMA 4 · EUIPO **0** · TMview 8 von 8 Zeilen
  ausgewertet — **keine einzige DE/EM-Zeile** (die 8 verteilen sich auf GB,
  IN, US, CN). Varianten (`Steyahead`, `Stayahed`, `Stayaheadt`,
  `Staiahead`): TMview je **0**.
- **Getrennt geschrieben „Stay Ahead" — vollständig ausgewertet
  (297/297 Zeilen, nachgezogen):** DPMA 12 · EUIPO 6 · TMview 297. Im
  DE/EU-wirksamen Klassen-Suchraum liegen **10 Zeilen, davon nur 2 lebend**
  — und beide sind mehrgliedrige Zeichen, keine Identität:

| Zeichen | Amt | Kl. | Status | Inhaber |
|---|---|---|---|---|
| RAMBLEGARD STAY A STEP AHEAD | EM 015366198 | 9 | **Eingetragen** | Hughes, Tim/Kerry |
| DISCOVER FINANCE … Stay ahead of the Game | DE 3020242166746 | 36 | **Eingetragen** | Discover Finance GmbH |
| STAY AHEAD | EM 013604641 | 35, 38, 41 | Beendet (zurückgewiesen) | World 50, Inc. |
| STAY AHEAD | EM 010385284 | 43 | Beendet (zurückgewiesen) | HLT INTERNATIONAL IP |
| STAY AHEAD OF RISK | EM 017939761 | 42 | Beendet (zurückgewiesen) | Apomatix Limited |
| THINK AHEAD.STAY AHEAD. | EM 002788859 | 9, 16, 42 | Abgelaufen | EPICOR SOFTWARE |
| Think ahead. Go ahead. Stay ahead. | DE 3020221197731 | 35 | nicht eingetragen | — |
| Staying ahead in technology | DE 3020160210113 | 7, 9, 42 | Beendet | — |
| STAY CONNECTED, MOVE AHEAD | DE 301484813 | 35, 38, 42 | Abgelaufen | Unifi Inc. |
| fyberserv stay connected, move ahead | DE 301485283 | 35, 38, 42 | Abgelaufen | Unifi Inc. |

- **DPMA-Trefferliste „Stay Ahead" (12 Treffer, nachgezogen):** enthält die
  vier oben schon bekannten plus `THINK AHEAD . STAY AHEAD .` (EM,
  abgelaufen), `STAY AHEAD OF THE GAME` (EM 015177901, **eingetragen** —
  laut TMview L'Oréal, Klasse 3, also **außerhalb** des Suchraums),
  `STAY AHEAD OF RISK` (zurückgewiesen), zwei Unifi-Marken (gelöscht),
  `Think ahead . Go ahead . Stay ahead .` (nicht eingetragen) und die zwei
  IR-Marken. **DPMA-Trefferliste „Inn Sight" (3):** zwei Altakten mit
  Aktenzustand „Akte vernichtet" (`ÜBERSEE`, `Letters` — Zeichen ohne Bezug)
  plus die bekannte INN SIGHT.
- **EUIPO-6 zu „Stay Ahead" (gelesen, nachgezogen):** keine davon ist eine
  lebende Marke im Suchraum — es sind dieselben zurückgewiesenen/
  abgelaufenen Zeichen plus L'Oréals Klasse-3-Marke.

> ⭐ **REPARATUR/ERGÄNZUNG 19.08.2026 (Prüferbefunde P-10 mittel, P-21
> Hinweis).** Vorher standen für die Getrenntform nur die **nackten Zahlen**
> „DPMA 12 · EUIPO 6 · TMview 297" — ohne dass eine dieser Trefferlisten je
> geöffnet worden wäre. Damit war über zwölf **DE-wirksame** Treffer nichts
> bekannt, und der Bericht wies die Lücke nicht einmal aus. Alle drei Listen
> sind jetzt gezogen und ausgewertet. Das Ergebnis **entlastet** Stayahead
> (nur zwei lebende, mehrgliedrige Zeichen) — aber das war vorher nicht
> wissbar, und eine Entlastung, die man nicht gemessen hat, ist keine.
> Im selben Zug aufgenommen: `STAY AHEAD OF RISK` als **dritter**
> EU-Zurückweisungsfall, den der Bericht übersehen hatte, obwohl er die
> eigene K1-These stützt.

**Verschärftes K1-Signal:** Damit sind in den Belegen **vier** gescheiterte
Eintragungsversuche von „stay ahead"-Zeichen dokumentiert — EM 010385284,
EM 013604641 und EM 017939761 („Anmeldung zurückgewiesen") sowie
DE 3020221197731 („Marke nicht eingetragen"). Der **Grund** steht in keinem
dieser Belege und wurde nicht erhoben (§ 7.3); die Häufung ist ein Indiz für
ein Freihaltebedürfnis an dieser Wendung, kein Beweis.

### 3.4 Methodische Befunde über die Register-Kanäle (gelten für alle drei)

1. ⚠️ **Die EUIPO-Suche auf die zusammengeschriebene Form findet die
   getrennt geschriebenen Marken NICHT** — „Stayahead" liefert dort 0,
   „Stay Ahead" liefert 6. **Eine Null der zusammengeschriebenen Form belegt
   also nur diese Zeichenfolge, nicht den Ähnlichkeitsraum.** Deshalb wurde
   das Varianten-Raster um die getrennte Schreibweise erweitert; genau
   dieser Zusatzlauf hat den `Inn:Sights`-Treffer in unseren Kernklassen
   zutage gefördert.
2. ⚠️ **Die DPMA-Smartsearch liefert bei abgeschnittenen Suchstämmen stille
   falsche Negative.** Gemessen (Lauf `trunkierung-…`, 12:22 MESZ): Der
   Suchstring `apale*` liefert **0 Treffer bei leerem Fehlerfeld** — obwohl
   die Marke `apaleo` dort belegt existiert und bei exakter Suche gefunden
   wird. Andere Stämme (`wisesta*`, `innsigh*`) beantwortet das Register
   ausdrücklich mit `marErrors: "Ungültige Platzhalterverwendung"`. Das
   heißt: **Ein Nulltreffer der Smartsearch mit Platzhalter ist kein
   Befund**, und im schlimmsten Fall sieht er wie einer aus, weil kein
   Fehler gemeldet wird. Die von Verfahren § 3.2 verlangte
   **Trunkierungs-Recherche ist über diesen Kanal nicht durchführbar**
   (§ 7.11).
   > ⭐ **Eigener Werkzeugfehler, sichtbar gemacht:** Das dafür gebaute
   > Skript verknüpfte seine beiden Kontrollen mit ODER (`apale*` ≥ 1
   > **oder** `apaleo*` ≥ 1) und meldete deshalb „Kanal GANGBAR" — obwohl
   > die einzige aussagekräftige Kontrolle durchgefallen war. `apaleo*` ist
   > das vollständige Wort mit angehängtem Stern und beweist keine
   > Trunkierung. Der Fehler ist im Skript korrigiert; gefunden wurde er
   > beim Gegenlesen der eigenen Rohausgabe, nicht vom Prüfer.
3. **Das Varianten-Raster bleibt hinter Verfahren § 3.2 zurück** (§ 7.11):
   Gelaufen sind die phonetischen Varianten und die getrennte Schreibweise.
   **Nicht gelaufen** sind die Bindestrich-Variante, Endungs-Varianten und
   die Einzelsuche jedes tragenden Wortbestandteils — und das Raster wurde
   nicht, wie das Verfahren es verlangt, VOR der Suche schriftlich
   festgelegt, sondern während der Messung erweitert. Pikant und deshalb
   hier genannt: Der eigene K4-Bogen führt „Stay-Ahead" (mit Bindestrich)
   als erwartbare Falschform — registerseitig wurde genau diese Form nie
   gesucht.

---

## § 4 Domains (`.de` und `.com` sind nach E-K1 **beide Pflicht**)

Alle RDAP-Werte heute neu gemessen (`lauf-20260819T095957Z-c23848`), die
Seiten-Abzüge im Lauf `domain-varianten-20260819T100704Z-185362`.

| Domain | RDAP-Status | Wer hält sie / was steht drauf | Erwerbslage (Feststellung; das K3-URTEIL steht in § 8) |
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

### 5.1 K6 — Wörterbuch-/Slang-Doppellauf (nachgeholt)

> ⭐ **NACHTRAG 19.08.2026 (Prüferbefund P-05, schwer).** Der Bericht führte
> je Finalist „K4/**K6-EN**: offen" — das las sich, als sei bei K6 nur der
> EN-Muttersprachler-Teil offen. Tatsächlich existierte für Wisestay,
> Innsight und Stayahead **überhaupt kein K6-Lauf**: Der Doppellauf vom
> 18.08. trägt die fünf Favoriten der Welle 3 fest verdrahtet
> (`k6-doppellauf-shanks.js`), und K6 ist ein **K.-o.-Kriterium**. Ein
> offenes K.-o.-Kriterium als „Teil-offen" darzustellen, hätte am Entscheid
> vorbeirutschen können. Der Lauf ist jetzt nachgeholt.

Kanäle nach E-K4 (Katalog-Nachtrag 09.08.2026): **DE · EN · TR · FR · ES ·
IT**, je Doppellauf groß/klein (Wörterbuch-Negative sind case-sensitiv).
Kontrollen: je Sprache ein bekanntes Lemma (Soll 200) und ein Zufallstoken
(Soll 404) — **6 von 6 Kanälen gangbar**.

| Name | de | en | tr | fr | es | it |
|---|---|---|---|---|---|---|
| **Wisestay** | 404/404 | 404/404 | 404/404 | 404/404 | 404/404 | 404/404 |
| **Innsight** | 404/404 | 404/404 | 404/404 | 404/404 | 404/404 | 404/404 |
| **Stayahead** | 404/404 | 404/404 | 404/404 | 404/404 | 404/404 | 404/404 |

**Ergebnis:** Für keinen der drei Namen existiert in einer der sechs Sprachen
ein Wörterbucheintrag — aus dieser Quelle **kein Bedeutungs- oder
Lächerlichkeitsrisiko**.

⚠️ **Drei Grenzen dieses Ergebnisses, die im Satz bleiben:** (1) Wiktionary
deckt **Slang nur teilweise** ab — ein 404 ist kein Slang-Freibrief.
(2) Der **EN-Muttersprachler-Check** (K6-Kanal E) ist davon unberührt und
bleibt **offen** (§ 7.8). (3) Die **Wortbestandteile** (`wise`, `stay`,
`inn`, `sight`, `ahead`) haben erwartungsgemäß Einträge in mehreren Sprachen;
ihre Bedeutungen wurden **nicht gelesen** — geprüft wurde der Name als
Ganzes, so wie er auftritt.

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
| TMview im Varianten-Lauf (P-17) | Nicht-Null-Ergebnisse im selben Lauf (Innsight 19 · Innsite 16 · Insight 21.910) | ✔ | Nulltoken → 0 | ✔ |
| K6 Wörterbuch, je Sprache (§ 5.1) | bekanntes Lemma → 200 (6 Sprachen) | ✔ 6/6 | Zufallstoken → 404 | ✔ 6/6 |
| DPMA-Trefferliste Getrenntform | `apaleo` → genau 1 Zeile | ✔ | Nulltoken → 0 Zeilen | ✔ |
| DPMA-Trunkierung (§ 3.4) | `apale*` → ≥ 1 (apaleo existiert dort) | ❌ **fällt: 0** | Nulltoken → 0 | ✔ (ohne Aussagewert) |

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
**Heute trägt der Kanal wieder.** Anker je Lauf, einzeln benannt:

| Lauf | TMview-Anker in diesem Lauf |
|---|---|
| `lauf-…c23848` (Haupt) | Discovery=true · Positiv apaleo **53** · Nulltoken **0** |
| `gegenkontrolle-…0280f2` | Discovery=true · eigene Sollwerte getroffen: Staywise **7**, Hostpilot **10** (unabhängig aus R19-B bekannt) |
| `dpma-detail-…0038fb` | Discovery=true · Nulltoken **0** · Nicht-Null-Ergebnisse im selben Lauf (297/307/24) |
| `domain-varianten-…185362` | Discovery=true · Nulltoken **0** · Nicht-Null-Ergebnisse im selben Lauf (19/16/21.910) |
| `nachzug-register-…f6a8ec` | Discovery=true · Positiv apaleo **53** · Nulltoken **0** |

> ⭐ **REPARATUR 19.08.2026 (Prüferbefund P-09, mittel).** Hier stand:
> „Discovery=true, **Positiv 53 / Negativ 0 in allen fünf Läufen**". Das war
> eine Entwarnung über einen Umfang, den die Belege nicht decken: Die
> apaleo-53-Kontrolle lief nur im Hauptlauf (jetzt zusätzlich im
> Nachzugslauf); die anderen Läufe tragen **andere** Anker, und der
> `dpma-treffer`-Lauf enthält überhaupt kein TMview — die Zahl „fünf" passte
> zu keiner Ordnerzählung. Die Substanz (der Kanal lebte in jedem Lauf, in
> dem er benutzt wurde) bleibt richtig, steht aber jetzt mit dem
> tatsächlichen Anker je Lauf da.

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
3. **Zurückweisungsgründe der jetzt vier gescheiterten „stay ahead"-
   Eintragungen** — nicht erhoben. Die DPMA-Trefferliste nennt nur
   „Anmeldung zurückgewiesen" bzw. „Marke nicht eingetragen". Relevanz: Der
   Grund wäre ein direktes Indiz zur K1-Schutzfähigkeit einer Wendung
   dieses Typs.
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
   Bogen gebaut: `marke/live-welle/k4-diktat-testbogen-2026-08-19.md`; beide
   sind User-Handgriffe (Katalog-Nachtrag E12). Der **K6-Wörterbuchteil**
   ist dagegen seit 12:39 MESZ erledigt (§ 5.1) — er war zuvor als „offen"
   gar nicht sichtbar (P-05).
9. **Websuche/SEO-Bild (W7)** — in dieser Session nicht neu erhoben; die
   DDG-Kandidatenzahlen aus R19-B sind bekanntlich tot (HTTP 202 im Lauf vom
   18.08.). Die Umfeldbefunde in § 3/§ 4/§ 5 sind nebenbei angefallen, sie
   ersetzen kein Suchraster.
10. **Handelsregister-Recherche** (Verfahren § 5.2) — nicht erhoben; kein
    stabiler anonymer Maschinenpfad (Befund aus R19-B Phase 0, heute nicht
    neu gemessen).
11. **Trunkierungs-Recherche und drei weitere Achsen des Varianten-Rasters**
    (Verfahren § 3.2) — **nicht erhoben.** Trunkierung ist über die
    DPMA-Smartsearch nachweislich nicht durchführbar (§ 3.4 Nr. 2); nicht
    gelaufen sind außerdem Bindestrich-Variante, Endungs-Varianten und die
    Einzelsuche der tragenden Wortbestandteile. Weg für die Trunkierung
    wäre die Erweiterte Recherche in der DPMA-Weboberfläche
    (sessiongebunden, Browser). *(Prüferbefund P-11.)*
12. **Branchenverzeichnisse (Verfahren § 5.3) und der W9-Abgleich gegen
    `fund/wettbewerbsbild.md`** — **nicht erhoben.** Das Verfahren verlangt
    die Sichtung des Apaleo App Store und gängiger Hotel-Tech-Verzeichnisse
    auf gleichnamige/nahe Anbieter; für die drei Finalisten ist das nirgends
    gelaufen. Gerade bei Innsight, wo ein Branchen-Namensvetter bereits
    zufällig über den Facebook-Kanal aufgetaucht ist, wäre das der Kanal,
    der systematisch weitere fände. W9 (Abstand zum Wettbewerbsfeld) ist
    deshalb in § 8 **nicht bewertet**. *(Prüferbefund P-12.)*

---

## § 8 Bewertung nach dem Kriterienkatalog (Feststellung ≠ Bewertung)

### N-145 Wisestay

- **K1 (Schutzfähigkeit):** plausibel — Kunstwort aus zwei englischen
  Alltagswörtern, für PMS-/Software-Dienstleistungen nicht beschreibend.
- **K2 (Kollisionsfreiheit):** **streitig.** Register DE/EU: **null
  identische Treffer** — über die exakte Form (DPMA 0, EUIPO 0, TMview 0)
  und über vier phonetische Varianten (je 0). **Die getrennte Schreibweise
  „Wise Stay" liefert dagegen genau ein lebendes DE/EU-wirksames Zeichen im
  Klassen-Suchraum: die eingetragene Unionsmarke STAYWISE, Klasse 42**
  (identische Wortbestandteile, umgekehrte Folge). Dazu ein aktives
  **Gastgewerbe**-Unternehmen „WiseStay" in Cardiff mit eigener Domain und
  Facebook-Seite. Ob das trägt, ist die Anwaltsfrage, die E-K5 gerade
  aussetzt — nach K2 **blockiert „nicht prüfbar" wie ein Treffer**.
  > ⭐ **REPARATUR (Prüferbefund P-06, mittel).** Hier stand: „null Treffer
  > über fünf Varianten **und beide Schreibweisen**". Der Zählsatz war
  > falsch — die getrennte Schreibweise liefert eben nicht null, sondern
  > genau die Marke, die der Folgesatz selbst nennt. Solche Sätze werden in
  > die Entscheidungsvorlage kopiert; deshalb steht die Einschränkung jetzt
  > im Satz selbst, nicht erst dahinter.
- **K3 (Domains):** `.de` frei, `.com` **88.000 USD**. Ob das „realistisch
  erwerbbar" ist, entscheidet der User; als Einschätzung: für eine Firma in
  Gründung ist das keine Beschaffung, sondern eine Investitionsentscheidung.
- **W8 (Handles):** LinkedIn, Facebook und YouTube vergeben, Instagram
  unbekannt. Schwach.
- **K6:** Wörterbuch-Doppellauf 6/6 Sprachen ohne Eintrag (§ 5.1);
  **EN-Muttersprachler-Check offen.**
- **K4:** offen. **W9:** nicht bewertet (§ 7.12).

### N-159 Innsight

- **K1:** ⚠️ schwächer als bei den anderen — klanglich praktisch identisch mit
  dem Allerweltswort „Insight", das in Klasse 9/42 dicht belegt ist.
- **K2:** ⚠️ **der schwerste Registerbefund der drei.** Im DE/EU-wirksamen
  Klassen-Suchraum stehen **14 lebende Zeichen** (Vollerhebung, § 3.2), drei
  davon nah am Namen: `Inn:Sights` (DE, **Kl. 35/41/42**, eingetragen,
  Inn:Syn GmbH — Wortmarke, deren Klasse-42-Verzeichnis wörtlich
  Software-Entwicklung und IT-Beratung nennt, also **unser Leistungsfeld**),
  **`INNOSIGHT` (WO 972657, Kl. 9/16/35/41, eingetragen, Schutz u. a. DE und
  EM)** und die eingetragene DE-Marke `INN SIGHT` (Kl. 9, branchenfern:
  Optik/Waffen). **Und der Umfeldbefund wiegt schwerer als das Register:**
  `innsight.com` gehört einem **aktiven Dienstleister für Hoteliers** in San
  Francisco („We help #hoteliers drive more direct bookings"), der dort auch
  **US-Marken in Kl. 35/42/43** hält; `innsight.de` gehört einer deutschen
  Objekteinrichtungs-GmbH, deren Seite ausdrücklich Gastronomie nennt.
- **K3:** beide Kern-Domains bei aktiven Firmen — **nicht erfüllbar** unter
  E-K1.
- **W8:** LinkedIn, Facebook, YouTube vergeben (LinkedIn/Facebook vom
  Branchen-Namensvetter), Instagram unbekannt.
- **K6:** Wörterbuch-Doppellauf 6/6 Sprachen ohne Eintrag (§ 5.1);
  **EN-Muttersprachler-Check offen.**
- **K4:** offen. **W9:** nicht bewertet (§ 7.12).

### N-160 Stayahead

- **K1:** ⚠️ „stay ahead" ist eine gängige englische Wendung; **vier**
  Eintragungsversuche dieses Zeichentyps sind gescheitert — drei
  EU-Anmeldungen „zurückgewiesen", eine DE-Marke „nicht eingetragen"
  (Gründe nicht erhoben, § 7.3). Das ist ein Warnsignal für
  Unterscheidungskraft/Freihaltebedürfnis, kein Beweis.
- **K2:** im DE/EU-wirksamen Klassen-Suchraum **keine lebende Marke mit
  identischem Zeichen** — die Vollerhebung (297/297) findet dort nur zwei
  lebende Zeichen, beide **mehrgliedrig** (`RAMBLEGARD STAY A STEP AHEAD`,
  Kl. 9; `DISCOVER FINANCE … Stay ahead of the Game`, Kl. 36). Die einzige
  lebende Marke mit dem identischen Zeichen (GEOPOST „STAY AHEAD",
  IR 1779697, Schutz auf DE erstreckt) liegt in **Klasse 39** und damit
  außerhalb des Suchraums. **Das ist das sauberste Registerbild der drei**
  — mit zwei Vorbehalten: dem K1-Punkt darüber und der **offenen
  Verkehrsgeltungsfrage zu GEOPOST** (§ 3 Kopf), die nach Verfahren § 2.2
  gestellt werden muss, bevor „außerhalb des Suchraums" entlastet.
- **K3:** `.de` für **820 €** kaufbar, `.com` bei einem aktiven UK-Anbieter
  (StayAhead Training) — unter E-K1 **nicht erfüllbar**.
- **W8:** LinkedIn 404 (Indiz frei — der einzige freie Handle-Befund
  überhaupt), Facebook von einer Privatperson belegt, YouTube vergeben,
  Instagram unbekannt.
- **K6:** Wörterbuch-Doppellauf 6/6 Sprachen ohne Eintrag (§ 5.1);
  **EN-Muttersprachler-Check offen.**
- **K4:** offen. **W9:** nicht bewertet (§ 7.12).

### Was das zusammengenommen heißt (Einschätzung dieser Session, kein Entscheid)

**Unter E-K1 in seiner heutigen Fassung — `.de` UND `.com` Pflicht — überlebt
keiner der drei Finalisten K3 ohne Zukauf.** Die Lage ist damit strukturell
dieselbe wie bei Welle 5 (35 von 36 echten Wörtern doppelt vergeben): Der
Engpass ist nicht das Markenregister, sondern die `.com`.

Die drei unterscheiden sich in dem, was sie kosten und woran sie hängen:

| | Register DE/EU (lebend, im Suchraum) | Umfeld/Branche | `.de` | `.com` | Was den Namen kippen könnte |
|---|---|---|---|---|---|
| **Wisestay** | **1** (STAYWISE, Kl. 42, umgekehrte Wortfolge) | Gästehaus UK (Kl. 43-nah) | **frei** | 88.000 USD | die STAYWISE-Unionsmarke in Kl. 42 |
| **Innsight** | **14**, drei davon nah (Inn:Sights Kl. 35/41/42 · INNOSIGHT Kl. 9/16/35/41 · INN SIGHT Kl. 9) | **direkter Branchen-Namensvetter** mit US-Marken | vergeben | vergeben | beides zugleich |
| **Stayahead** | **2**, beide mehrgliedrig; identisches Zeichen nur in Kl. 39 (GEOPOST) | UK-Schulungsanbieter | 820 € | vergeben | Schutzfähigkeit (K1) · Verkehrsgeltung GEOPOST |

---

## § 9 Was der User zum Entscheiden braucht (Zusammenstellung, keine Empfehlung)

1. **E-K1 bestätigen oder lockern.** Solange `.com` Pflicht ist, ist die
   Entscheidung faktisch eine über 88.000 USD (Wisestay) oder über einen
   Verzicht. Wird `.com` zur Kür, ändert sich die Rangfolge sofort.
2. **K4-Diktat-Test** für die drei — Bogen liegt bereit; ohne ihn ist bei
   keinem Namen dieses K.-o.-Kriterium abgeschlossen. Der **EN-Muttersprachler-
   Check** (K6-Kanal E) ist der zweite offene User-Handgriff; der
   Wörterbuchteil von K6 ist seit heute erledigt (§ 5.1).
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
| `trunkierung-20260819T102200Z-613ef4` | Trunkierungsprobe DPMA-Smartsearch (§ 3.4 Nr. 2) | `trunkierung-ausgabe.md` |
| `dpma-auskunft-20260819T102552Z-941cbc` | Registerauskünfte `Inn:Sights` und `InnerSight` | `dpma-auskunft-ausgabe.md` |
| `nachzug-register-20260819T103757Z-f6a8ec` | **Vollerhebung** der drei Getrennt-Läufe (307/297/24) + DPMA-Trefferlisten der Getrenntformen | `nachzug-register-ausgabe.md` |
| `k6-finalisten-20260819T103904Z` | K6-Wörterbuch-Doppellauf, 6 Sprachen × 3 Namen + Bestandteile | `k6-ausgabe.md` |

*(Die letzten vier Ordner sind **nach** dem ersten Bericht-Commit entstanden —
drei davon als Nacharbeit zu Prüferbefunden, einer als eigener Selbstfund;
alle sind oben im Text an ihrer Fundstelle ausgewiesen. Prüferbefund P-14
mahnt genau das an: Ein Rohbelege-Bestand, der still über den Berichtsstand
hinauswächst, lässt jede Bestandszahl altern.)*

**Skripte** (neu, in `marke/live-welle/`, Suffix-Regel des Auftrags):
`vertiefung-r19c.js` (Erstlauf, unverändert erhalten als Beleg des gelaufenen
Standes) · `vertiefung-r19c-kern.js` (gemeinsames Modul der Folgeläufe) ·
`gegenkontrolle-r19c.js` · `dpma-treffer-r19c.js` · `dpma-detail-r19c.js` ·
`domain-varianten-r19c.js` · `handles-r19c.js` · `tmview-auswertung-r19c.js`.
Die Bestands-Skripte (`messlauf.js`, `schnellcheck.js`, `auswertung-lauf.js`)
wurden **nicht verändert**.

**Beleg-Typen zweiachsig** (Leseweg × Quellenart), korrigiert nach
Prüferbefund P-19:

- **Leseweg — zwei Kategorien, nicht eine:**
  (a) **Selbst im Rohabzug gelesen** (kein Agent dazwischen): alles aus den
  Skript-Läufen — Register, RDAP, Handles per HTTP, Domain-Seitenabzüge,
  K6. Jede Datei trägt einen SHA-256 in `hashes.txt` und ist unabhängig
  reproduzierbar.
  (b) **Browser-Sichtung, nur Sitzungsprotokoll**: die Instagram-,
  Facebook- und Atom.com-Befunde (darunter der Preis von 88.000 USD, die
  INNsight-Seitenbeschreibung und „Kedrian Parks"). Sie existieren als
  verbatim-Textabzug im selbst geschriebenen `browser-protokoll.md` —
  **ohne Datei-Rohabzug, ohne Hash, für einen Prüfer nicht unabhängig
  reproduzierbar.** Das ist werkzeugbedingt (die Browser-Automation
  schreibt keine Datei), gehört aber ausdrücklich als **schwächere
  Belegstufe** ausgewiesen. Der vorherige Stand subsumierte alle Zitate
  unter (a) — das war zu großzügig.
- **Quellenart:** DPMA/EUIPO/TMview = amtliche Register (DPMA-Trefferliste
  und -Registerauskunft sind Primärquelle, TMview ist Sammelkanal); RDAP =
  Registry-Auskunft; Facebook-/Atom.com-/Domain-Seiten = **Selbstauskunft
  der jeweiligen Halter bzw. Plattform**, nicht amtlich — insbesondere die
  Preise und die Firmenbeschreibungen; Wiktionary = Sekundärquelle mit
  bekannter Slang-Lücke.

*Erstellt: 19.08.2026, Session R19-C (Ben Beckman).*
