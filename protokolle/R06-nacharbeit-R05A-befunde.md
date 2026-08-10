# R6-Nacharbeit — unerledigte Prüferbefunde aus R05-A

> **Anlass:** Bestandsscan der Leitsession beim R6-Debrief (10.08.2026)
> zur neuen Lehre **L-11**. Der Scan fand, dass der Befund **H-1** des
> R05-A-Prüfers („~70 Partner in sechs Kategorien" → tatsächlich 78 in
> sieben) in R5 nicht eingearbeitet wurde und eine Runde später von
> R06-A **unabhängig neu entdeckt** wurde (dort als KRITISCH K-1) —
> ein voller Prüf- und Reparaturzyklus für einen bereits bezahlten
> Befund.
>
> **Erhebung:** Verifikations-Subagent mit frischem Kontext
> (Leitsession-Auftrag, 10.08.2026), Ergebnis von der Leitsession an
> drei Stichproben selbst nachgeprüft (s. § 3). Prüfstand des
> Dokuments: `dea722e` (3218 Zeilen).
>
> **Status:** ~~OFFEN~~ → ➡️ **ABGEARBEITET in R07-A (10.08.2026) —
> siehe TEIL 2 am Ende dieser Datei.** Bilanz dort mit Nenner:
> **24 von 26** handlungspflichtigen Posten repariert, **0** bewusst
> offen, **2** mit benanntem Träger (W-17-Rest, V-1-Rest).
> ⚠️ **Auch § 5 dieser Erhebung ist überholt**, soweit er sagt, die
> Reparaturen seien nicht am Rohbeleg gegengeprüft — für die in TEIL 2
> bearbeiteten Befunde sind sie es. **Nicht überholt** ist der Rest von
> § 5: neu eingeführte Fehler waren auch in R7 nicht Gegenstand der
> Befundliste (wohl aber des R07-A-Prüfers), und Spillover in andere
> Dateien wurde weiterhin nur für W-15 geprüft.
> Diese Datei ist der Träger; sie wird beim Abarbeiten fortgeschrieben,
> nicht ersetzt.

## 1. Bilanz mit Nenner

`protokolle/R05-A-pruefer.md` führt **44 nummerierte Positionen** in
fünf Kategorien: **4** KRITISCH (K-1…K-4) · **17** WICHTIG (W-1…W-17) ·
**10** HINWEIS (H-1…H-10) · **3** Verdacht (V-1…V-3, ausdrücklich
unverifiziert) · **6** „nicht prüfbar" (ohne Kennung).

Über die **37 handlungspflichtigen** Befunde (K+W+H):

| Status | Anzahl |
|---|---|
| EINGEARBEITET | 7 |
| TEILWEISE | 6 |
| **NICHT EINGEARBEITET** | **24** |

**Präzisierung der Ausgangsvermutung:** Die Leitsession vermutete „nur
die KRITISCH-Befunde wurden abgearbeitet". Das ist zu grob — repariert
wurden alle 4 KRITISCH **und** 7 der 17 WICHTIG (3 ganz, 4 teilweise).
Liegengeblieben sind **10 von 17 WICHTIG und 10 von 10 HINWEIS**.

**Attributionsbeleg des Subagenten:** `git diff -U0 34bbda2 629d18d --
fund/wettbewerbsbild.md` (+124/−30) berührt 14 Hunks; B5.2, B6.2, B8.3,
B8.5 und B9.2 liegen in keinem Hunk — deckungsgleich mit den
NICHT-Befunden unten.

## 2. Offene Befunde im Einzelnen

### 2.1 WICHTIG — nicht eingearbeitet (10)

| Kennung | Kern | Fundstelle (Stand `dea722e`) |
|---|---|---|
| **W-2** | „Die Hotelberater" trägt W1 auf unmessbarem Kriterium und ist nicht als vorläufig markiert; TC bekommt „—" bei gleicher Sachlage wie Hoffmann/DIRS21 (beide W1) | B4.1-Tabelle, Zeilen „Die Hotelberater GmbH" + „TC" |
| **W-3** | „15 von 16 ohne Preis" enthält den ungemessenen E621 (404) und Plaschke (403) — der Widerspruch steht unaufgelöst im selben Abschnitt | B4-Feldbefund + Kanal-Negativliste |
| **W-5** | „Vollsuchraum + Positivkontrolle" in der Brandnamic-Einstufungszeile, obwohl nur die deutsche Sprachfassung gemessen wurde; der Vorbehalt steht nur im Methodenabsatz | B4.3, Einstufungstabelle Achse 2 |
| **W-7** | „mehr als das Doppelte" vergleicht nicht scope-gleiche Zahlen (60.000 € „zuzüglich Benefits/Schulungen/Systemlizenzen" fehlt); RevenueRise-Eigenrechnung geht nicht auf (54–96 T€ ≠ 90–130 T€) | B6.2 |
| **W-8** | Einstiegskorridor nennt „879" ohne Setup-Gebühr (1.000 €) und Mindestlaufzeit (3 Monate) | B6.2 |
| **W-10** | Die 250 € gehören zur Architekten-Beratung, nicht zum Beratungsdreiklang; Fahrtkosten und Scope der Selbstaufnahme fehlen; „Eintragskanal für uns" steht als Feststellung | B9.2 |
| **W-11** | MEET THE EXPERTS ist nach L-B3 **zugleich Kanal** (Arbeitskreis ITK, IHK **zu Lübeck**) — „Arbeitskreis" und „Lübeck" haben im ganzen Dokument 0 Treffer | B9.2 |
| **W-12** | „Drei unabhängige Größenschwellen" sind zwei Schwellen + ein Preisboden | B8.3 (Überschrift + SUM-Punkt) |
| **W-13** | „in aller Regel straiv" — Generalisierung ohne Nenner (belegt sind 5 von 17); „De-facto-Standard" steht weiter | B8.5 |
| **W-16** | Dittlmann-Zitat ist über eine Absatzgrenze gespleißt und steht als EIN wörtliches Zitat (Pseudo-Zitat, **L-01**) | B5.2 |

### 2.2 WICHTIG — teilweise (4, Restposten benannt)

| Kennung | Was noch offen ist |
|---|---|
| **K-4** *(HINWEIS-Teil)* | ADDITIVE steht weiter nur als Zitat, in keiner Ausschluss-/Nachtragsliste |
| **W-6** | § 5.5-Kasten repariert, **aber B5.2 trägt unverändert „Für das Technik-Segment stimmt das weiterhin."** — beide Fundstellen waren benannt |
| **W-9** | Punkte 1–3 repariert (Beispielrechnung, „je Beratungstag (8 Stunden)", 3.750 € gerechnet); **Punkt 4 offen:** die „Preisuntergrenze" wird weiter aus dem Eigenanteil statt aus 985 € abgeleitet |
| **W-14** | P9 ✅; **offen:** § 5.1 und § 5.2 ohne ➡️-Kasten · § 3.4 behält den überholten „als Hypothesen behandeln"-Vermerk für die 42 GmbH · P8 unverändert |
| **W-17** | Belegbasis gesichert (P20, 2132/2132) ✅; **URL-Anker je Zitat nicht nachgetragen** (im Dokument selbst als „Rest offen" ausgewiesen) |

### 2.3 HINWEIS — nicht eingearbeitet (10 von 10)

| Kennung | Kern |
|---|---|
| **H-1** | „~70 Partner in sechs Kategorien" — **Originalsatz steht bis heute in B4.3**; die Korrektur existiert nur als R06-A-Nachtrag daneben und in B10.1 |
| **H-2** | DEHOGA-HH-Beitragsstufen enden bei VI, die Ordnung hat neun (bis IX, 359,40 €) — kein Auswahlkriterium genannt (**L-03**) |
| **H-3** | 42-GmbH-Partnerzitat schneidet „und vielen weiteren" ab (offene → geschlossene Liste) |
| **H-4** | Bräu-Zitat ohne Anker je Teil |
| **H-5** | „~159 Einträge" ohne Zählweg |
| **H-6** | „kein WebFetch-Zusammenfasser ist Quelle" ist eine **Agenten-Selbstauskunft**, als Fakt gesetzt (**L-04**) |
| **H-7** | B8.6 formuliert zwei Negative als Existenzaussagen (gegen die eigene Linie L-B6) |
| **H-8** | Spalteholz veröffentlicht Preise MIT Steuerbasis — Gegenbeleg zum eigenen Feldbefund, nicht eingearbeitet |
| **H-9** | Mews „vier aus dem DACH-Raum" — Herkunft der Länderzuordnung ungenannt, vom Prüfer als nicht prüfbar markiert |
| **H-10** | DEHOGA-BW-Bundesweit-Zitat ohne die unmittelbar folgende Einschränkung („In Hessen und im Saarland … in Abstimmung mit dem jeweiligen Landesverband") |

### 2.4 Verdacht (V-1–V-3) — bewusst nicht verfolgt

V-1 (Zählverlust in B8 könnte breiter sein) bleibt unverfolgt; die
B8-Zahlen tragen keinen Gegenzähl-Vermerk. V-2/V-3 sind im
R05-A-Abschluss ausdrücklich als „bewusst nicht repariert" geführt.
⚠️ **V-1 ist durch L-11 aufgewertet:** Genau diese Fehlerklasse hat sich
inzwischen zweimal reproduziert.

## 3. Eigene Verifikation der Leitsession (Stichproben)

Subagenten-Befunde sind delegierte Aussagen. Drei Stichproben selbst
gelesen, alle drei **bestätigt**:

| Stichprobe | Erwartung des Subagenten | Eigener Lesebefund |
|---|---|---|
| **W-16** (B5.2, Dittlmann) | unrepariert | ✔ Zitat läuft weiter über die Absatzgrenze als EIN wörtliches Zitat |
| **H-10** (B9.1, DEHOGA-BW) | unrepariert | ✔ „bundesweit … in allen Bundesländern" ohne Hessen-/Saarland-Klausel |
| **W-1** (B4.1, maxonline) — **Positivkontrolle** | eingearbeitet | ✔ steht auf **W1** mit sichtbarem Vermerk „*(korrigiert, R05-A-Prüferbefund …)*" |

Die Positivkontrolle belegt, dass das Prüfverfahren „eingearbeitet" von
„nicht eingearbeitet" trennt und nicht pauschal Nicht-Änderung meldet.

## 4. Nebenbefund zur Abschlussmeldung R05-A

`protokolle/R05-A-abschluss.md` § 5 ist bei den KRITISCH-Befunden
korrekt und beim „bewusst nicht repariert" ehrlich — nennt dort aber
nur „10 HINWEISE, 3 Verdacht, 6 nicht prüfbar". **Die 10 nicht
reparierten WICHTIG-Befunde erscheinen in keiner der beiden Listen**;
der Abschnitt „Weitere übernommene Befunde" zählt fünf auf, ohne
Nenner. Ein Leser nimmt daraus mit, die WICHTIG-Kategorie sei
abgearbeitet. Das ist derselbe Nenner-Verlust, den derselbe Prüfer in
W-3 und W-13 am Papier gerügt hat — nur eine Ebene höher, in der
Meldung über die Prüfung. **Das ist die Fallgeschichte zu L-13.**

## 5. Grenzen dieser Erhebung (nicht geglättet)

- Die Reparaturen wurden **nicht am Rohbeleg** gegengeprüft — eine
  sachlich falsche Reparatur zählt hier als „eingearbeitet" (R06-A K-1
  war genau so ein Fall: in R5 nicht, in R6 als „nachgezählt"
  ausgewiesen und in der Erstfassung dennoch falsch).
- Neu eingeführte Fehler sind nicht Gegenstand — gemessen wurde nur
  gegen die R05-A-Befundliste.
- Spillover in andere Dateien wurde nur für W-15 geprüft
  (`R05-A-fundstellen.md`, dort eingearbeitet).
- Eine in R5 gesetzte und in R6 wieder entfernte Reparatur erschiene
  hier als „nicht eingearbeitet".

## 6. Nächster Schritt

Eigene Arbeits-Session (Kandidat **R7**), Scope
`fund/wettbewerbsbild.md` + diese Datei. Reihenfolge-Vorschlag:
zuerst die **zitatkritischen** Befunde (W-16, H-3, H-4, H-10 — sie
tragen Pseudo-Zitat- und Geltungsbereichs-Risiko in außenwirksame
Weiterverwendung), dann die **Nenner-/Zählweg-Befunde** (W-3, W-12,
W-13, H-2, H-5, H-9), dann die **Einstufungs-/Kanal-Befunde** (W-2,
W-5, W-11, K-4-Rest) und die **Preis-Scope-Befunde** (W-7, W-8, W-10,
W-9-Rest). H-1 zuletzt: nur noch der Originalsatz in B4.3 ist
anzupassen, die Sachkorrektur steht bereits daneben.

---

# TEIL 2 — Abarbeitung in R07-A (10.08.2026)

> **Bearbeitende Session:** R07-A (Rolle Ben Beckman), Scope
> `fund/wettbewerbsbild.md`. **Verfahren:** Jede Reparatur wurde am
> Rohbeleg unter `sensibel/rohbelege-R05-A/` gemessen — nicht aus dem
> Papier heraus umformuliert. Damit ist die in § 5 benannte Grenze
> dieser Erhebung („die R5-Reparaturen wurden NICHT am Rohbeleg
> gegengeprüft") für die hier bearbeiteten Befunde geschlossen.
> **Commits:** `1c9118d` · `54f9593` · `95bc3cc`.
> Für die vier zitatkritischen Befunde lief je ein Subagent mit
> frischem Kontext auf dem jeweiligen Quelldokument.

## T2.1 Bilanz mit Nenner

| Kategorie | Nenner | repariert | bewusst offen | Träger benannt |
|---|---|---|---|---|
| WICHTIG, nicht eingearbeitet | **10** | **10** | 0 | 0 |
| HINWEIS, nicht eingearbeitet | **10** | **10** | 0 | 0 |
| Restposten aus TEILWEISE | **5** | **4** | 0 | **1** (W-17) |
| Verdacht V-1 | **1** | 0 | 0 | **1** |
| **Summe handlungspflichtig** | **26** | **24** | **0** | **2** |

V-2/V-3 bleiben wie in R05-A ausdrücklich **nicht verfolgt** (dort als
„bewusst nicht repariert" geführt); sie waren nicht Auftrag dieser
Session.

## T2.2 Status je Befund

### WICHTIG (10/10 repariert)

| Kennung | Status | Kern der Reparatur (Fundstelle + Beleg) |
|---|---|---|
| **W-2** | ✅ repariert | B4.1 — „Die Hotelberater" auf **W1 — VORLÄUFIG** (das nach L-B2 maßgebliche Zielgruppenkriterium ist unerhoben; `a1/dhb_ueber.txt` trägt „Page not found", selbst nachgeprüft). **TC Hotel Marketing** von „—" auf **W1 (Teilleistung)**; dazu die bisher implizite Vergabelinie **L-B1b** ausformuliert und der Bestand rückwirkend geprüft — TC war der einzige Eintrag mit „—" |
| **W-3** | ✅ repariert | B4.4 Punkt 1 — Kanal-Vorbehalt + belastbare Alternative „14 von 15 gemessenen"; E621-Soft-404 an `a1/e621_pakete.html` belegt. **Abweichung vom Prüfer dokumentiert** (Plaschke, s. T2.4) |
| **W-5** | ✅ repariert | B4.3 Einstufungstabelle — „Vollsuchraum der **deutschen** Fassung (476/476); IT/EN nicht erhoben" steht jetzt **in der Einstufungszeile**, plus IT-Lauf als Prüfpunkt |
| **W-7** | ✅ repariert | B6.2 Punkt 3 — beide Scope-Zusätze zurückgeholt (`a4/hp_privat.txt` Z. 74, `a4/rrise_rm.txt` Z. 11); „mehr als das Doppelte" gestrichen; RevenueRise-Selbstwiderspruch als eigener ⚠️-Vermerk, Zuordnung an der Tabellenstruktur gebunden |
| **W-8** | ✅ repariert | B6.2 Punkt 1 — Setup-Gebühr 1.000 + Mindestlaufzeit 3 Monate (`a4/rrise_rm.txt` Z. 11/71); „Einstiegskorridor" gestrichen; Mindestrechnung 3.637 genannt |
| **W-10** | ✅ repariert | B9.2 — 250 € der **Architekten-Einstiegsberatung** zugeordnet, Fahrtkosten + Mustervereinbarung ergänzt; „Beratungsdreiklang" als Empfehlung ohne Preis getrennt; „Eintragskanal" auf **Annahme mit Stützbeleg** zurückgestuft; Scope-Satz und Vollständigkeitsvorbehalt der Quelle nachgetragen (`a5/ihk/sh-designkontor-liste.txt` Z. 34/39/42) |
| **W-11** | ✅ repariert | B9.2 — Einstufung **W1 + K**, Trägersatz zitiert (`a5/ihk/sh-meet-experts.txt` Z. 34), neuer Prüfpunkt **P23** |
| **W-12** | ✅ repariert | B8.3 — Überschrift „Zwei belegte Größenschwellen — und ein Preisboden"; SUM als **abgeleitete Einschätzung**, Skalierungszitat ergänzt (`a6/sum-pricing.txt` Z. 27/29/79) |
| **W-13** | ✅ repariert | B8.5 — Nenner **5 von 17**; „in aller Regel" und „De-facto-Standard" gestrichen; zwei Einschränkungen aus derselben Quelle ergänzt |
| **W-16** | ✅ repariert | B5.2 — in **zwei Zitate mit je eigener Fundstelle** zerlegt (`a3/ch-impressum.txt` Z. 149 und Z. 168) |

### HINWEIS (10/10 repariert)

| Kennung | Status | Kern der Reparatur |
|---|---|---|
| **H-1** | ✅ repariert | Originalsatz in B4.3 ersetzt: **78 Partner / 76 Domains / sieben Rubriken** mit Aufstellung und Zählweg |
| **H-2** | ✅ repariert | DEHOGA-HH-Beitragsstaffel **vollständig, alle zehn Stufen**, mit Zählweg und Gegenprobe |
| **H-3** | ✅ repariert | 42-GmbH-Zitat bis zum Satzende; zusätzlich der eingefügte Punkt und der unmarkierte Satzanfang korrigiert |
| **H-4** | ✅ repariert | Bräu-Zitat mit Anker je Teil + Hinweis auf das geschlossene, seitenweite Overlay |
| **H-5** | ✅ repariert | Zählweg zur Designkontor-Liste: **161 Datenzeilen**, Positivkontrolle **an der Extraktion** |
| **H-6** | ✅ repariert | „laut Bericht des Recherche-Agenten" ergänzt, mit L-04-Begründung |
| **H-7** | ✅ repariert | Beide Negative in B8.6 auf „im geprüften Suchraum nicht gefunden" (L-B6) |
| **H-8** | ✅ repariert | Spalteholz als Gegenbeleg in B6.2 Punkt 2; die 4-von-12-Zahl bleibt unverändert |
| **H-9** | ✅ **aufgelöst** | Herkunft der Länderzuordnung benannt: die **Impressen der vier Anbieter**, nicht die Mews-Seite. Der Prüfer hatte den Punkt als „nicht prüfbar" geführt — zu enger Suchraum (s. T2.4) |
| **H-10** | ✅ repariert | Hessen-/Saarland-Einschränkung mitzitiert; beide Sätze stehen in der Quelle im **selben Absatz** |

### Restposten aus TEILWEISE (4 repariert, 1 mit Träger)

| Kennung | Status | Bemerkung |
|---|---|---|
| **K-4** (HINWEIS-Teil) | ✅ repariert | **Nachtragsliste** als B1 Punkt 8 angelegt, ADDITIVE eingetragen, Prüfpunkt **P22**. Die Liste ist bewusst offen gehalten |
| **W-6** | ✅ repariert | Die zweite benannte Fundstelle (B5.2 „Für das Technik-Segment stimmt das weiterhin") auf **„unverändert ungeprüft"** umgestellt; z1Digital als technik-naher Gegenbefund verlinkt |
| **W-9** | ✅ repariert | Punkt 4: Preisuntergrenze jetzt aus dem **Nettotagessatz 985,00 €**, alte Fassung als überholt markiert; wahrgenommene Zahlungsschwelle getrennt ausgewiesen |
| **W-14** | ✅ repariert | ➡️-Kästen in § 5.1 **und** § 5.2 gesetzt; Hypothesen-Vermerk der 42-GmbH-Zeile in § 3.4 aufgehoben; **P8** auf „teilweise beantwortet → B8.4/B8.6" zurückgeschnitten (P9 war bereits in R5 erledigt) |
| **W-17** | ⚠️ **teilweise — Träger benannt** | **Beleg-Anhang B12** angelegt: Rohbeleg-Ordner, HTML-Zahl und Domains je Strang, generisch aus `canonical`/`og:url` extrahiert, mit vier ausgewiesenen Grenzen. **Einzelanker je Zitat** stehen nur bei den zitatkritischen Stellen (B5.2, B5.3, B8.3, B8.4, B8.5, B9.1, B9.2). Die übrigen Zitate tragen weiter nur den Anbieternamen — **das ist der verbleibende Rest**, in B12 Punkt 4 ausdrücklich als offen benannt. **Träger: MKT-FUND, vor jeder außenwirksamen Weiterverwendung eines Teil-B-Zitats** |

### Verdacht

| Kennung | Status |
|---|---|
| **V-1** (Zählverlust in B8 könnte breiter sein) | ⚠️ **teilweise gemessen, Träger benannt.** In R7 nachgezählt und **bestätigt**: die **15** Mews-Beratereinträge (B8.4) — dabei wurde allerdings eine **Versalien-Falle** gefunden, die den ersten Zählversuch auf 7 gedrückt hätte; der Zählweg steht jetzt im Papier. **Nicht nachgezählt** wurden „17 betrachtete Anbieter", „genau zwei verkaufen die volle Kette" und „3 von 17 nennen Beträge". V-1 bleibt für **genau diese drei Zahlen** offen. Träger: MKT-FUND |

## T2.3 Neue Befunde dieser Session (in keinem R05-A-Befund enthalten)

Alle am Rohbeleg belegt und im selben Zug eingearbeitet:

1. **⭐ Zwei harte Zitatabweichungen in § 5.2** — beide in **tragender
   Beweisführung** zur USP-Säule 2: (a) „Von der Einführung bis zum
   laufenden Betrieb begleiten **Sie** zuverlässig und persönlich" — der
   Quelle nach fehlt **„wir"**; ohne es kippt der Satz vom
   Leistungsversprechen des Anbieters in eine Aussage über den Leser.
   (b) Zielgruppe „**Hotels aller Größen**" stand in Anführungszeichen,
   kommt aber im **gesamten** Rohbeleg-Archiv nicht vor (Quelle: „Hotels
   **jeder** Größe", 7 Fundstellen) — eine Paraphrase in Zitatform.
2. **Zweiter Zitat-Spleiß bei Dittlmann** (B5.2, Modul 6): zwei
   aufeinanderfolgende `<p>` zu einem Zitat zusammengezogen und
   „, operative Qualität" ohne Auslassungszeichen abgeschnitten.
3. **Bräu führt die 30-Zimmer-Aussage zweimal** — die zweite Fassung ist
   deutlich schwächer („fehlt **häufig** die Grundlage für
   **strukturierte Beratungsprojekte**"). Das Papier zitierte an beiden
   Stellen nur die kategorische Fassung, **zugunsten der eigenen These**
   von B8.3.
4. **„durchgängige Wortwahl ‚bis zum Go-Live'" (B8.2) trägt für Bräu
   nicht** — im geprüften Suchraum 0 Treffer (Positivkontrolle „Hotel"
   65 ✔). Als Suchraum-Vorbehalt eingearbeitet, nicht als Gegenbefund.
5. **Die 42-GmbH-Partnerliste ist als Bestandsaussage unvollständig:**
   Das Roh-HTML zeichnet **11 Partnerlogos** aus, Vereinigung mit der
   Prosa **12 Partner statt 8**. Vier erscheinen in keinem Text
   (`<img>` gestrippt, alle `alt=""`).
6. **B9.1 zitierte zwei Sätze aus verschiedenen Seitenabschnitten**
   („bundesweit …" und „bis zu 100 Prozent gefördert") als eine
   Zitatkette — jetzt getrennt ausgewiesen.
7. **Der Stundenbezug „(8 Stunden)" gilt nur für die KMU-Tabelle**, das
   Papier zog die Klammer über beide Beispielrechnungen.
8. **„Die volle Maßnahme kostet rund 3.750 €" war eine eigene
   Multiplikation** (15 × 250 €) ohne Quellenbeleg, die eine
   Förderobergrenze als Maßnahmenumfang las — gestrichen.

## T2.4 Wo die R05-A-Befunde selbst nicht trugen

Zwei Stellen, an denen der Prüfer über das Ziel hinausschoss oder zu eng
maß — beide am Rohbeleg gemessen und im Papier dokumentiert:

- **W-3 / Plaschke.** Der Befund zählt Plaschke zu den ungemessenen
  Anbietern, weil dessen **Impressum** 3× mit HTTP 403 antwortete. Das
  trägt nicht: Ein Impressum ist kein Preiskanal. Die
  Plaschke-**Start**seite wurde abgerufen (`a1/pla_start.txt`) und
  enthält keinen Preis; Positivkontrolle „Hotel" 30 Treffer ✔. Der
  Prüfer hat „ein Kanal fehlte" mit „der Preiskanal fehlte"
  gleichgesetzt. Das Plaschke-Preisnegativ bleibt belastbar.
- **H-9 / Mews.** Der Befund führt die Länderzuordnung als „nicht
  prüfbar", weil `mews-consultants.txt` keine **Sitzangaben** trägt. Für
  den Sitz stimmt das — für die Länderfrage war der Suchraum zu eng: Die
  Datei trägt **8 „Regions served"-Zeilen**, und die Sitze aller vier
  DACH-Anbieter stehen in **Nachbardateien desselben Rohbelegs**. Der
  Punkt ist damit **aufgelöst**, nicht offen.

Ergänzend, ohne Widerspruch zum Befund: **H-2** spricht von „neun
Beitragsstufen bis IX" — es sind **zehn**, weil Stufe 0 mitzählt;
weggelassen waren im Papier also vier Stufen, nicht drei.
