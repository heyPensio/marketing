# FUND2 · Strang 2 — Verbands- und Strukturdaten (Erhebungsbericht)

> **Session:** R02-B (Lucky Roux) · **Erhebungsdatum:** 09.08.2026 ·
> **Auftrag:** `fund/persona-validierungsplan.md` § 3 Strang 2 + § 4
> (Pflichtregeln). Kernfragen: (A) Größenstruktur des Marktes (Betriebe
> nach Größenklassen, Region SH/Nord vs. bundesweit), (B) Nachfolge-Lage
> im Gastgewerbe als Trend.
>
> **⚠️ PROXY-Warnung (gilt für JEDE Zahl in diesem Bericht):** Das Alter
> und die Rolle des ENTSCHEIDERS weist keine der hier ausgewerteten
> Statistiken direkt aus. Alle Struktur- und Nachfolge-Zahlen sind
> Proxys für die Persona-Frage (H-A/H-B/H-C), keine direkten Belege.
> Eine Zahl trägt den Scope ihrer Zeile: Betriebe ≠ Betten ≠ geöffnete
> Betriebe ≠ steuerpflichtige Betriebe; Stichtage beachten.
>
> **Arbeitsweise:** Alle Zahlen aus selbst gelesenen Originaldokumenten
> (XLSX-Rohdaten, PDF-Textextraktion per pdf-parse, eine
> Grafik-Sichtprüfung am gerenderten Seitenbild); keine Zahl aus
> Suchmaschinen- oder WebFetch-Zusammenfassungen übernommen.
> Quellenregister mit Herausgeber/Stand/Erhebungsmethode in § 5,
> Negativ-Protokoll in § 4, Verifikationsgrad in § 6.

---

## 1. Kernfrage A: Größenstruktur des Marktes

### 1.1 Bundesweit — Betriebsarten (amtliche Statistik)

Quelle Q1 (Destatis, Monatserhebung im Tourismus, Berichtsmonat Juli
2025; Erfassungsgrenze: Beherbergungsbetriebe mit ≥ 10 angebotenen
Schlafgelegenheiten bzw. Campingplätze mit ≥ 10 Stellplätzen), Tabelle
45412-09; Zeilen-Scope jeweils mit angegeben:

| Betriebsart (Deutschland) | Betriebe gesamt | davon geöffnet (Juli 2025) |
|---|---:|---:|
| Beherbergungsbetriebe insgesamt (inkl. Camping) | 48.919 | 47.398 |
| Hotels, Gasthöfe, Pensionen (Hotellerie) | 28.785 | 27.808 |
| — darunter Hotels (ohne garnis) | 12.303 | 11.929 |
| — darunter Hotels garnis | 6.872 | 6.641 |
| — darunter Gasthöfe | 5.221 | 5.020 |
| — darunter Pensionen | 4.389 | 4.218 |
| Ferienunterkünfte u. ä. (inkl. Ferienhäuser/-wohnungen) | 15.215 | 14.773 |

Zählweg: Werte unverändert aus den Spalten `Anzahl_Betriebe_gesamt` /
`Anzahl_Betriebe_geoeffnet` der CSV-Tabelle 45412-09 übernommen.
Auswahl-Hinweis (Prüfbefund P4): Die Tabelle zeigt die
zielgruppennahen Betriebsarten; die Insgesamt-Zeile enthält zudem
Campingplätze (3.226 gesamt) und „Sonstige tourismusrelevante
Unterkünfte" (1.693, u. a. Reha-Kliniken und Schulungsheime) — die
gezeigten Zeilen summieren sich deshalb NICHT auf 48.919. Die Zeile
„Ferienunterkünfte u. ä." enthält auch Jugendherbergen und Hütten
(1.764).

### 1.2 Bundesweit — Größenklassen der Hotellerie (Kern-Schneidung)

Quelle Q1, Tabelle 45412-16: **geöffnete Betriebe der Hotellerie am
Stichtag 31.07.2025 nach Gästezimmergrößenklassen** (Achtung
Zeilen-Scope: GEÖFFNETE Betriebe; Größenklasse nach GÄSTEZIMMERN, nicht
Schlafgelegenheiten; nur Hotellerie, ohne Ferienwohnungen/Camping):

| Größenklasse (Gästezimmer) | Hotellerie insgesamt | Hotels | Hotels garnis | Gasthöfe | Pensionen |
|---|---:|---:|---:|---:|---:|
| unter 6 | 1.004 | 88 | 155 | 292 | 469 |
| 6–9 | 4.959 | 838 | 894 | 1.630 | 1.597 |
| 10–19 | 8.773 | 2.928 | 2.089 | 2.150 | 1.606 |
| 20–24 | 2.720 | 1.315 | 732 | 412 | 261 |
| 25–49 | 5.257 | 3.103 | 1.421 | 494 | 239 |
| 50–99 | 2.768 | 1.924 | 767 | 36 | 41 |
| 100–249 | 1.999 | 1.470 | 518 | 6 | 5 |
| 250 und mehr | 328 | 263 | 65 | – | – |
| **Insgesamt** | **27.808** | **11.929** | **6.641** | **5.020** | **4.218** |

Abgeleitete Anteile (eigene Berechnung; Zählweg: Summe der genannten
Größenklassen-Zeilen geteilt durch die Insgesamt-Zeile derselben
Spalte; Summenprobe je Spalte bestanden, s. § 6):

- **Betriebe mit unter 20 Gästezimmern: 14.736 von 27.808 geöffneten
  Hotellerie-Betrieben (53,0 %).** Mit bis 24 Zimmern: 17.456 von
  27.808 (62,8 %).
- Bei **Pensionen** liegt der Kleinbetriebs-Anteil am höchsten: 3.672
  von 4.218 (87,1 %) haben unter 20 Gästezimmer; bei **Gasthöfen**
  4.072 von 5.020 (81,1 %), bei **Hotels garnis** 3.138 von 6.641
  (47,3 %), bei **Hotels** 3.854 von 11.929 (32,3 %).
- Das Gegen-Segment „größere Häuser" (≥ 50 Gästezimmer, H-C-relevant):
  5.095 von 27.808 (18,3 %).

**Proxy-Einordnung:** Die Größenklasse sagt nichts über die
Entscheider-Person; sie quantifiziert nur, wie groß das Kernsegment
(kleine, zimmerarme Betriebe) und das H-C-Segment strukturell sind.

### 1.3 Schleswig-Holstein — Bestand und Betriebsarten

Führende Quelle Q3 (Statistikamt Nord, Jahresbericht „Beherbergung im
Reiseverkehr in Schleswig-Holstein 2025", herausgegeben 10.04.2026;
gleiche Erfassungsgrenze ≥ 10 Betten/Stellplätze). Zeilen-Scope: **im
Juli 2025 geöffnete** Beherbergungsstätten inkl. Camping (Tabellen 4/5):

| Betriebsart (SH) | Geöffnete Betriebe | Schlafgelegenheiten |
|---|---:|---:|
| Beherbergungsstätten insgesamt (inkl. Camping) | 3.452 | 334.943 |
| Hotellerie zusammen | 1.013 | 66.373 |
| — Hotels | 467 | 44.241 |
| — Hotels garni | 383 | 18.314 |
| — Gasthöfe | 76 | 1.810 |
| — Pensionen | 87 | 2.008 |
| Ferienzentren, -häuser und -wohnungen | 1.911 | 144.680 |
| Camping | 271 | 87.644 |

Abgeleitete Anteile (eigene Berechnung, Nenner 3.452 im Juli 2025
geöffnete Beherbergungsstätten SH): Hotellerie 29,3 %;
Ferienzentren/-häuser/-wohnungen 55,4 %; die klassischen
Kleinbetriebs-Betriebsarten Pensionen + Gasthöfe zusammen nur 163
Betriebe (4,7 %).

**Scope-Hinweis Betriebsarten ≠ Größenklassen:** „Pension" als
amtliche Betriebsart ist NICHT deckungsgleich mit dem Zielsegment
„kleiner inhabergeführter Beherbergungsbetrieb" — auch kleine Hotels
und Hotels garni gehören funktional dazu (bundesweit sind 53,0 % der
Hotellerie unter 20 Zimmern, § 1.2). Die SH-Schneidung nach
Größenklassen existiert in den geprüften Publikationen nicht
(Negativ-Ergebnis N1, § 4).

**Zweitkanal-Abgleich:** Destatis-Monatsbericht Juli 2025 (Q1, Tabelle
45412-17) weist für SH ab: Hotellerie 1.014 geöffnete Betriebe, Hotels
garnis 384, außerdem (Tabelle 45412-11) 3.507 Betriebe gesamt / 3.451
geöffnet, 335.073 angebotene Schlafgelegenheiten. Abweichung zum
SH-Jahresbericht je ±1 Betrieb bzw. 130 Schlafgelegenheiten —
unterschiedliche Publikations-/Revisionsstände derselben Erhebung; der
später herausgegebene Jahresbericht (10.04.2026) wird hier als führend
behandelt.

### 1.4 Schleswig-Holstein — Trend: weniger, größere Betriebe

Quelle Q3, Tabelle 3 (Zeitreihe; Zeilen-Scope: Beherbergungsstätten
UND Campingplätze ≥ 10 Betten/Stellplätze zusammen, Bestand jeweils
zum Stichtag 1. Juli):

- Betriebe: **4.356 (2012) → 3.516 (2025)**, eigene Berechnung:
  −840 Betriebe = **−19,3 %**.
- Angebotene Schlafgelegenheiten: **264.243 (2012) → 347.403 (2025)**,
  eigene Berechnung: **+31,5 %**.

Der Markt konsolidiert: Der Bestand kleiner Einheiten schrumpft,
die Kapazität wandert in größere Einheiten. **Proxy-Einordnung:** Für
die Persona-Frage stützt das den Befund-Rahmen „das Kernsegment ist
real und groß, aber strukturell unter Druck" — über die
Entscheider-Person sagt es nichts.

### 1.5 Scope-Kontrast: „Gastgewerbe SH" in anderen Zählweisen

Zwei Zahlen, die NICHT mit § 1.3 verrechnet werden dürfen (anderer
Zeilen-Scope):

- **7.897 steuerpflichtige Betriebe im Gastgewerbe SH (2023)** —
  Quelle Q6 (Sparkassen-Tourismusbarometer SH 2025, Folie „Trotz
  Pleiten und Abmeldungen…", dwif nach Daten des Statistischen
  Landesamts). Scope laut Folie nur: „steuerpflichtige Betriebe 2023",
  Gastgewerbe SH. **Scope-Deutung dieser Session (Prüfbefund P2, als
  Annahme markiert):** „steuerpflichtige Betriebe" spricht für die
  Umsatzsteuerstatistik und damit GESAMTES Gastgewerbe inkl.
  Gastronomie ohne 10-Betten-Grenze — auf der Folie selbst nicht
  benannt (grep `umsatzsteuer` über beide Q6-Texte: 0 Treffer;
  Positivkontrolle `steuerpflichtige`: 2 Treffer). Unstrittig bleibt:
  anderer Zeilen-Scope als § 1.3, nicht verrechenbar. Ebenda:
  Gewerbeanmeldungen 2024: 1.700, Gewerbeabmeldungen 2024: 1.700
  (Gastgewerbe SH).
- **„rund 5.200 Betriebe, mehr als 80.000 Beschäftigte"** — Quelle Q5
  (DEHOGA Landesverband SH, Website-Selbstauskunft, UNDATIERT, ohne
  Methodenangabe; wörtlich: „Das schleswig-holsteinische Hotel- und
  Gaststättengewerbe beschäftigt in rund 5.200 Betrieben mehr als
  80.000 Beschäftigte."). ⚠️ Beleg-Typ Verbands-Selbstauskunft; Stand
  und Zählweise unbekannt — Differenz zu den 7.897 (Q6) ist ohne
  Kenntnis beider Zählwege NICHT als Widerspruch wertbar; Klärung im
  Anfrage-Entwurf an DEHOGA SH (`entwurf-anfrage-dehoga-sh.md`).

## 2. Kernfrage B: Nachfolge-Lage im Gastgewerbe (Trend)

### 2.1 DIHK-Report Unternehmensnachfolge 2025 (Q7)

Erhebungsmethode (aus dem Report selbst): > 50.000 persönliche
IHK-Beratungskontakte im Jahr 2024 mit abgabewilligen Unternehmen und
Übernahmeinteressenten; dazu Befragung der IHK-Nachfolgeberaterinnen
und -berater der 79 IHKs vom 22.01.–28.02.2025. **⚠️ Beleg-Typ:
Beratungsfall-Statistik, KEINE repräsentative Erhebung** — es zählt,
wer zur IHK-Beratung kommt (Selektionseffekt).

- Branchenübergreifend suchten **2,4-mal mehr abgabewillige
  Unternehmen** die IHKs auf als Nachfolgeinteressenten.
- **Gastgewerbe-Schnitt (Branchen-Teil):** „In der IHK-Beratung
  befinden sich fast dreieinhalbmal so viele Hotel- und
  Gastronomie-Unternehmen, wie sich Nachfragende dafür finden würden."
  Genannte Hemmnisse: Personalmangel, Investitionsstaus, Auflagen,
  Mieten/Immobilienfinanzierung, dünne Margen.
- **27 % der im Jahr 2024 beratenen 9.636 Unternehmen** (Nenner:
  beratene abgabewillige Unternehmen, alle Branchen) erwägen die
  Schließung; 92 % der IHKs (Nenner: befragte IHKs, nicht
  Unternehmen!) nennen als Grund fehlende Nachfolger.
- **72 % der beratenen Alt-Unternehmen** wollen bzw. müssen aus
  Altersgründen abgeben (branchenübergreifend).
- Geplante Übergabewege (Nenner: beratene Senior-Unternehmen,
  branchenübergreifend): ~½ Verkauf, gut ⅓ familienintern, knapp ⅕
  an Mitarbeitende.

### 2.2 KfW Nachfolge-Monitoring Mittelstand 2025 (Q8)

Erhebungsmethode: KfW-Mittelstandspanel (repräsentative
Wiederholungsbefragung kleiner und mittlerer Unternehmen); Fokus
Volkswirtschaft Nr. 526 vom 09.01.2026. **⚠️ Scope: Mittelstand
GESAMT — ein Gastgewerbe-Schnitt existiert in dieser Publikation
nicht** (Negativ-Ergebnis N4, § 4); alle Werte hier sind
Branchen-Durchschnitte und damit nur schwache Proxys für unsere
Zielgruppe:

- Durchschnittsalter der Inhaberinnen/Inhaber: über 54 Jahre; **57 %
  sind 55 Jahre oder älter** (2025; +3 Prozentpunkte ggü. 2024; in
  absoluten Zahlen über 2 Mio.; vor 20 Jahren: 20 %).
- Jährlich bis Ende 2029: ~**109.000 Nachfolgewünsche** und ~**114.000
  geplante Stilllegungen** („jedes vierte Unternehmen" plant Aufgabe
  ohne Nachfolge).
- Kaufpreisvorstellungen: +34 % seit 2019 (Mittelstand insgesamt);
  Nachfolge binnen 5 Jahren geplant: Ø ~499.000 EUR, das 1,2-fache
  des Jahresumsatzes (Median 0,6).

### 2.3 Gründungs-/Aufgabengeschehen Beherbergungsgewerbe (Q4)

Quelle DEHOGA-Zahlenspiegel IV/2025 (Stand 24.02.2026; Datenquelle
laut Dokument: Statistisches Bundesamt, Gewerbeanzeigenstatistik;
Dezember-2025-Werte lagen bei Redaktionsschluss nicht vor). Werte aus
der Grafik „Anzahl der Betriebsneugründungen und -aufgaben im
Beherbergungsgewerbe", am gerenderten Seitenbild optisch
gegengelesen (§ 6):

| Jahr | Betriebsneugründungen | Vollst. Betriebsaufgaben |
|---|---:|---:|
| 2019 | 3.520 | 3.546 |
| 2022 | 2.956 | 3.213 |
| 2024 | 3.362 | 3.297 |
| Jan–Nov 2025 | 3.330 | 3.057 |

Scope-Hinweis: Gewerbeanzeigen zählen jede Gewerbemeldung (auch
Kleinstbetriebe ohne 10-Betten-Grenze) — der Saldo ist deshalb NICHT
mit dem sinkenden Bestand aus § 1.4 verrechenbar. Kontext-Zahlen aus
derselben Quelle: sozialversicherungspflichtig Beschäftigte
Beherbergungsgewerbe 302.838 (Stichtag 30.06.2025; −4,6 % ggü. 2019;
Datenquelle Bundesagentur für Arbeit); Übernachtungen Deutschland
2025: 497,4 Mio.

## 3. Einordnung für die Hypothesen (streng als Proxy)

Kein Punkt hier ist ein Persona-BEFUND; das Befund-Format samt
Status-Vergabe (gestützt/geschwächt/nicht prüfbar) gehört in
`fund/persona-befund.md`, wenn alle Stränge vorliegen.

- **H-A (Wirte-These, „~58-jähriger Inhaber"):** Die Altersstruktur
  der ENTSCHEIDER im Gastgewerbe weist keine geprüfte Quelle aus. Als
  Branchen-Proxy stützt Q8 (57 % der Mittelstands-Inhaber ≥ 55) die
  RICHTUNG „alternde Inhaberschaft", aber ausdrücklich ohne
  Gastgewerbe-Schnitt. Die konkrete Alterssetzung „~58" bleibt
  unbelegt.
- **H-B (Nachfolger-These):** Der Generationswechsel läuft in großem
  Umfang (Q7/Q8) — als BRANCHENTREND gestützt. Aber: Nur gut ⅓ der
  beratenen Übergaben ist familienintern geplant, ~½ ist Verkauf
  (Q7, branchenübergreifend) — „Nachfolge" heißt also häufig
  EXTERNER Käufer, nicht 2./3. Generation. Für den Kanalmix ist das
  ein eigener, bisher unbenannter Entscheidertyp-Kandidat
  („Übernehmer/Käufer") — Zielort-Vermerk: in die Hypothesen-Liste
  des Persona-Befunds aufnehmen.
- **H-C (Direktoren-These):** Das Segment „größere Häuser" (≥ 50
  Gästezimmer) umfasst bundesweit 5.095 geöffnete Hotellerie-Betriebe
  (18,3 %, § 1.2) — Segmentgröße quantifiziert; über
  Entscheidungsstrukturen darin sagen Strukturdaten nichts.
- **Anlass-Gegenprobe (Plan § 1):** Aus Sekundär-Strukturdaten nicht
  prüfbar — kein geprüfter Datensatz verknüpft Technik-Investitionen
  mit Auslösern. Die Anlass-Frage ist in beide Anfrage-Entwürfe
  aufgenommen (Nachfolge/Übergabe als möglicher Investitionsanlass).

## 4. Negativ-Protokoll (alle Läufe 09.08.2026)

| # | Negativ-Ergebnis | Methode + Suchraum | Positivkontrolle im selben Lauf |
|---|---|---|---|
| N1 | **Größenklassen-Schneidung × Bundesland/SH existiert in den geprüften amtlichen Publikationen nicht.** Größenklassen nur für Deutschland insgesamt (Q1 Tab. 45412-16; GENESIS 45412-0006). | Sichtung aller 17 Tabellen + GENESIS-Übersichtsblatt (45412-0001 bis -0026) der Q1-XLSX; Volltext-grep `größenklasse/groessenklasse` über den SH-Jahresbericht Q3 (0 Treffer); Gegenprobe Q2 (April-2026-Ausgabe): Stichtagstabellen 45412-15 bis -17 dort nicht enthalten — die Größenklassen-Schneidung erscheint nur in Juli-Ausgaben, Juli 2025 ist der aktuellste verfügbare Stichtag. | grep `Gästezimmergrößenklassen` trifft in Q1 (Tab. 45412-16); grep `Pensionen`/`Betten` trifft im Q3-Volltext (u. a. Tabelle 5). |
| N2 | **Die Plan-Wunsch-Schneidung „Größenklasse × Inhaberführung × Region" enthält keine der sechs Quellen.** Inhaber-/Entscheider-Alter für das Gastgewerbe weist keine geprüfte Quelle aus. | Volltext-greps `alter/jährig/inhaber` über Q7 (Haupt- und Branchen-Teil) und Q8; Sichtung der Branchentabellen in Q8. | Q8: `55 Jahre` trifft (Mittelstand gesamt); Q7: `Altersgründen` trifft (72-%-Aussage, branchenübergreifend). |
| N3 | **Sparkassen-Tourismusbarometer SH 2025 enthält keine Nachfolge-/Inhaberstruktur-Daten** (beide Fassungen). | Volltext-grep `nachfolge/inhaber/generation/betriebsgröße` über die Präsentationsfassung (77 Folien, 0 Treffer) und `nachfolge` über den Jahresbericht „Wirtschaftsfaktor Tourismus" (0 Treffer). | Präsentationsfassung: `dwif` 55 Treffer-Zeilen; Jahresbericht: `tourismus` 56 Treffer-Zeilen (Zählweg `grep -c` = Zeilen mit Treffer, nicht Einzeltreffer — Prüfbefund P3). |
| N4 | **KfW-Nachfolge-Monitoring 2025 hat keinen Gastgewerbe-Branchenschnitt.** Branchentabelle führt nur FuE-/Sonst. Verarbeitendes Gewerbe, Bau, wissensintensive/sonstige Dienstleistungen, Handel. Zuordnung des Gastgewerbes zu „Sonstige Dienstleistungen" ist plausibel, aber im Dokument nicht explizit belegt — als Annahme markiert. | Volltext-grep `gastgewerbe` über Q8 (0 Treffer in Sach-Aussagen); Lesen der Branchentabelle (Tabelle 1) und der Teilbranchen-Fußnoten. | grep `Branchen` trifft (Tabelle „Nach Branchen"). |
| N5 | **DEHOGA-SH-Strukturzahlen (5.200 Betriebe / 80.000 Beschäftigte) tragen keinen Stand und keine Methode** — auf der Verbandswebsite undatiert. | Lesen der Seite „Unser Landesverband" (Roh-HTML, nicht Zusammenfasser); keine Datums-/Quellenangabe im Umfeld der Zahlen gefunden. | Die Zahlen selbst wurden im Roh-HTML gefunden (Suchmechanik trifft). Klärung → Anfrage-Entwurf DEHOGA SH. |

Nicht geprüft (eigenes Ergebnis, nicht „keine Auffälligkeit"):
Sonderauswertungen des Statistikamts Nord auf Anfrage (Größenklassen ×
SH könnten als kostenpflichtige/individuelle Auswertung existieren —
Auskunftsweg offen, Kontakt im Q3-Impressum); DEHOGA-SH-interne
Mitgliederstatistik (nur per Anfrage, Entwurf liegt bei); GENESIS-
Regionaldatenbank der Länder (regionalstatistik.de) als möglicher
dritter Kanal für Länder-Größenklassen.

**Nachtrag 09.08.2026 (Session R03-B) — dritter Kanal geprüft, N1
bestätigt:** Die Regionaldatenbank (regionalstatistik.de) wurde
inzwischen erhoben; sie führt für die Beherbergungsstatistik **kein
Größenklassen-Merkmal** — auf keiner Regionalebene (Negative N6–N8,
zweikanalig belegt). Damit bleibt die SH-Größenklassen-Schneidung nur
über eine Sonderauswertung des Statistikamts Nord oder die Verbands-/
IHK-Anfragen erreichbar. Der Kanal liefert dafür SH-Daten auf
**Kreisebene** und als **Zeitreihe 2018–2024** (mittlere Betriebsgröße
als Struktur-Proxy — ausdrücklich **keine** Größenklassen-Verteilung).
Vollständiger Bericht mit Summenproben, Zeilen-Scope und Abrufweg:
`fund/erhebung/regionalstatistik-groessenklassen.md`.

## 5. Quellenregister

| # | Quelle | Herausgeber | Stand | Erhebungsmethode | Beleg-Typ | Abruf |
|---|---|---|---|---|---|---|
| Q1 | Statistischer Bericht Monatserhebung im Tourismus, Juli 2025 (EVAS 45412), XLSX | Statistisches Bundesamt (Destatis) | Berichtsmonat Juli 2025, Stichtagstabellen 31.07.2025 | Amtliche Vollerhebung mit Auskunftspflicht; Erfassungsgrenze ≥ 10 Schlafgelegenheiten/Stellplätze | Amtliche Statistik | 09.08.2026, destatis.de (Publikationsseite „statistischer-bericht-monatserhebung-tourismus-2060710251075") |
| Q2 | dito, Ausgabe April 2026 (nur Gegenprobe Tabellenumfang) | Destatis | Berichtsmonat April 2026 | wie Q1 | Amtliche Statistik | 09.08.2026, destatis.de („…2060710261045") |
| Q3 | Statistischer Bericht G IV 1 - j 25 SH „Beherbergung im Reiseverkehr in Schleswig-Holstein 2025" (PDF, 36 S.) | Statistisches Amt für Hamburg und Schleswig-Holstein | herausgegeben 10.04.2026, Berichtsjahr 2025 | wie Q1 (Landesauswertung derselben Erhebung) | Amtliche Statistik | 09.08.2026, statistik-nord.de (`fileadmin/Dokumente/G_IV_1_j25_SH.pdf`) |
| Q4 | DEHOGA-Zahlenspiegel IV/2025 (PDF, 20 S.) | DEHOGA Bundesverband | Stand 24.02.2026 | Sekundärkompilation aus Destatis- und Bundesagentur-für-Arbeit-Daten | Verbandskompilation amtlicher Daten | 09.08.2026, dehoga-bundesverband.de |
| Q5 | Website „Unser Landesverband" | DEHOGA Landesverband Schleswig-Holstein | UNDATIERT | keine Angabe | ⚠️ Verbands-Selbstauskunft | 09.08.2026, dehoga-sh.de |
| Q6 | Sparkassen-Tourismusbarometer SH 2025: Präsentationsfassung (77 Folien) + Jahresbericht „Wirtschaftsfaktor Tourismus" | Sparkassen- und Giroverband für SH / TVSH; Durchführung dwif-Consulting | Titelblatt: „Neumünster, 27. Mai 2025" | dwif-Berechnungen auf amtlichen Daten (Folien-Quellvermerk: „Statistisches Landesamt"; Deutung Umsatzsteuerstatistik s. § 1.5) + Befragungen von Tourismusorganisationen und Betrieben in SH (März/April 2025) | Verbandsstudie (Methodenmix) | 09.08.2026, sgvsh.de |
| Q7 | DIHK-Report Unternehmensnachfolge 2025 (Hauptreport 25 S. + „Blick in die Branchen" 5 S.) | Deutsche Industrie- und Handelskammer | 2025 (Befragung 22.01.–28.02.2025, Kontaktdaten 2024) | > 50.000 IHK-Beratungskontakte + Beraterbefragung der 79 IHKs | ⚠️ Beratungsfall-Statistik, nicht repräsentativ | 09.08.2026, dihk.de / ihk.de |
| Q8 | KfW Research, Fokus Volkswirtschaft Nr. 526: „Nachfolge-Monitoring Mittelstand 2025" (Autor Dr. Michael Schwartz) | KfW Bankengruppe | 09.01.2026 | KfW-Mittelstandspanel (repräsentative KMU-Wiederholungsbefragung) | Repräsentative Panelstudie (Mittelstand gesamt) | 09.08.2026, kfw.de |

## 6. Verifikationsgrad und Zählwege

- **Alle 40+ übernommenen Zahlenwerte** stammen aus selbst gelesenen
  Originaldateien (2 XLSX-Rohtabellen, 6 PDF-Textextraktionen per
  pdf-parse v2, 1 Roh-HTML); **0 Zahlen** aus Such-/Fetch-
  Zusammenfassungen.
- **Summenproben Größenklassen-Tabelle (§ 1.2): 5 von 5 Spalten**
  (Hotellerie insgesamt, Hotels, garnis, Gasthöfe, Pensionen) — Summe
  der Größenklassen-Zeilen ergibt exakt die Insgesamt-Zeile.
- **Grafik-Werte (§ 2.3): 1 von 1 Grafik** am gerenderten Seitenbild
  (Q4, Seite 10, 2-fach-Zoom) optisch gegen die Textextraktion
  gelesen; Reihen-Zuordnung (Neugründungen vs. Aufgaben) dabei
  bestätigt.
- **Nicht weiter verifiziert:** Q5-Selbstauskunft (kein Stand, keine
  Methode — als solche gekennzeichnet); Prozentwerte Dritter wurden
  nicht nachgerechnet, eigene Prozentwerte tragen den Zählweg im Satz.
- Wortlaut-Zitate (Q5, Q7) sind Wortlaut-, nicht Byte-Ebene
  (Lese-Gegenprobe am extrahierten Text; L-02-Vorbehalt).

## 7. Übergaben und offene Punkte

1. **Anfrage-Entwürfe** (KEIN Versand, Versand macht der User
   werktags): `entwurf-anfrage-dehoga-sh.md`,
   `entwurf-anfrage-ihk-sh.md` — decken N1/N2/N5 ab (Größenklassen ×
   SH, Inhaber-/Nachfolgestruktur, Stand der Verbandszahlen).
2. **Auskunftsweg Statistikamt Nord** (Sonderauswertung Größenklassen ×
   SH): noch ohne Entwurf — erst entscheiden, ob die SH-Schneidung
   den Aufwand wert ist (Leitsession).
3. **Zielort-Vermerk für den Persona-Befund:** Entscheidertyp-Kandidat
   „externer Übernehmer/Käufer" (§ 3, H-B-Absatz).
4. ~~**regionalstatistik.de** als dritter Kanal für Länder-Größenklassen
   ungeprüft~~ — ✅ GEPRÜFT 09.08.2026 (R03-B): Größenklassen dort nicht
   vorhanden, N1 bestätigt; Ersatz-Erhebung auf Kreisebene liegt vor
   (§ 4 Nachtrag · `regionalstatistik-groessenklassen.md`). Punkt 2
   dieser Liste (Auskunftsweg Statistikamt Nord) ist damit der einzige
   verbliebene amtliche Weg.

---

## Prüf-Nachtrag (09.08.2026, nach unabhängigem Prüflauf)

Unabhängige Prüfung durch Agent mit frischem Kontext, Protokoll:
`protokolle/R02-B-pruefer.md`. Ergebnis: Vollprüfung aller ~130
Zahlen-/Datumsangaben an den Originalquellen, 6 Befunde. **P1
(KRITISCH) war die bewusst eingebaute Verfahrens-Positivkontrolle**
(§ 2.2, 57 % → 47 % verfälscht, uncommitted) — vom Prüfer gefunden
inkl. korrekter Quell-Gegenstelle; zurückgebaut per `git checkout`,
der committete Stand war durchgehend korrekt. P2 (Scope-Deutung § 1.5),
P3 (Zählweg Positivkontrollen), P4 (Auswahl-Hinweis § 1.1) in diesem
Stand eingearbeitet; P5/P6 in den Anfrage-Entwürfen vermerkt.

*Erstellt: 09.08.2026, Session R02-B (Lucky Roux). Prüfprotokoll:
`protokolle/R02-B-pruefer.md`.*
