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
> **Status:** OFFEN — Nacharbeit ist einer eigenen Session zuzuweisen
> (Kandidat R7). Diese Datei ist der Träger; sie wird beim Abarbeiten
> fortgeschrieben, nicht ersetzt.

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
