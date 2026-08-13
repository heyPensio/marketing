# R13-B — Prüfprotokoll des unabhängigen Prüf-Subagenten

**Prüfstand (eingefroren):** Commit `63a995e` („R13-B: Sieben Bau-Pflichten
B-1..B-7 ins Listenbau-Regelwerk + O-9 in Rechtsmatrix und Regelwerk
gefuehrt"; Diff-Basis: direkter Vorgänger `989e632`). Arbeitsbaum-Diff
und `git status` wurden auftragsgemäß **nicht** gesichtet.
**Datum:** 13.08.2026.
**Prüfgegenstand:** die R13-B-Nachträge in `akquise/listenbau-regelwerk.md`
und `handel/kanal-rechtsmatrix.md`. **Prüfraum** (Prüfraum-Regel: der
Quellverweis benennt den Anfang, nicht das Ende): die ganze
Interessenabwägung § 10/§ 11 (inkl. § 11.1-Fälligkeitskasten) und § 5.5
sowie das ganze Regelwerk, beide am Stand `63a995e`.

## Leseumfang mit Zeilenspannen (alle über `git show 63a995e:<pfad>`)

| Quelle | Umfang | Zeilenspanne(n) |
|---|---|---|
| `akquise/listenbau-regelwerk.md` (1.262 Z.) | **vollständig** | Z. 1–500, 500–939, 940–1262 (drei Reads, lückenlos) |
| `akquise/interessenabwaegung-o8.md` (1.192 Z.) | § 10 + § 11 (11.1/11.2/11.3) vollständig; § 5.5 vollständig; § 5.2 gezielt (C-8-Zeile); Gliederung komplett gegrept | Z. 940–1079 · Z. 473–505 · Z. 408 · Überschriften Z. 1–1192 |
| `handel/kanal-rechtsmatrix.md` (891 Z.) | Abschnitt „Offene Punkte und Belegstufen-Grenzen" + D3-Umgebung vollständig; Rest über Diff + gezielte Greps (Robinson Z. 532; „Art. 6 Abs. 4"-Zählungen). **Nicht vollständig gelesen** — das Ganze war nicht Pflicht-Prüfraum, wird als Grenze ausgewiesen | Z. 820–890 |
| Diff `989e632..63a995e` (beide Dateien) | **vollständig** | 266 Diff-Zeilen |
| `akquise/pruefe-zitate.js` | Pool-/Ausnahmen-/Blockzitat-Logik gezielt | Grep-Treffer (Kopf, POOL, AUSNAHMEN, Blockliste) |
| `projektquelle-mkt.md` | nur Planzielort-Beleg gegrept | Trefferzeilen 685–716, 1028 |

**Werkzeugläufe:** `node akquise/pruefe-zitate.js` an zwei aus git
rekonstruierten Ständen im Scratchpad (`63a995e` und `989e632`,
Exit-Code separat von der Pipe erhoben) · eigener Zitat-Extraktor über
die acht R13-B-Nachtragsblöcke (10 „…"-Segmente ≥15 Zeichen, normalisiert
um **fett** und Umbruch-Whitespace) mit zwei Positivkontrollen (erfundenes
Zitat trifft nicht; bekanntes Quellzitat trifft).

---

## Ergebnis je Pflicht-Kategorie (mit Nenner)

### 1. Pflicht inhaltlich verfälscht übernommen — **keine Auffälligkeit, 7/7 treu**

Jede der sieben Pflichten einzeln gegen O-8 § 10 (Z. 948–954) gelesen:

| Pflicht | Ankunft im Regelwerk | Befund |
|---|---|---|
| B-1 | § 7.1-Nachtrag (Z. 855–867) + § 9 Nr. 13 | Kernsatz wortgleich („kein Datensatz, ohne Ermessen"); Zusatz-Lesart korrekt als „Lesart dieser Übernahme, keine Quellenaussage" markiert und verschärfend, nicht entlastend |
| B-2 | § 3 Pflicht 2-Nachtrag (Z. 297–319) | beide Zitate wortgleich (s. Kat. 7); Kopplung zuerst; R-A1-Abgrenzung ist eigene, sachlich richtige Versöhnung mit dem Bestand |
| B-3 | § 7.3 R-B10 (Z. 917–921) | wortgleich inkl. „möglichst genau zu benennenden kurzen Zeitraum[s]" und Sperrdatei-Unterrichtung; Beleg „DSK Ziff. 5.4 und 5.1, ① A" quellengleich |
| B-4 | § 7.3 R-B11 (Z. 923–932) | enger Scope zuerst und doppelt abgesichert („gehört … gerade NICHT") — die Q-07-Korrektur der Quelle ist mitsamt Warnung übernommen |
| B-5 | § 3 Pflicht 1-Nachtrag (Z. 254–262) | Zitat wortgleich; `v1-<Datum>`-Bezug quellengleich |
| B-6 | § 6.1-Nachtrag (Z. 823–836) | alle 5 Elemente (s. Kat. 2); Belegangabe ohne ① A — korrekt, die Quelle vergibt für B-6 keine (Beleg-Typ übernommen, nicht neu vergeben) |
| B-7 | § 3 Pflicht 1-Nachtrag (Z. 263–270) | „Kern von § 3.2, in Kundensprache" treu; Belegkette „Art. 14 Abs. 2 lit. b (① A); DSK Ziff. 2.1" quellengleich |

DSK-Zitat-Nachzählung: **9/9** in „…" gesetzte Übernahmen gegen O-8 § 10
bestätigt (maschinell, includes-Abgleich nach Normalisierung; einzige
Abweichungen sind zulässige **fett**-Auszeichnung und Umbruch-Whitespace).
Das zehnte extrahierte Segment („das konkret verfolgte berechtigte
Interesse, ausformuliert — nicht ‚Marketingzwecke'") ist ein deklariertes
Selbstzitat der Regelwerks-Mindestumfang-Zeile (Z. 234–235) — wortgleich;
die Umstellung „…" → ‚…' ist deutsche Zitat-im-Zitat-Schachtelung.

### 2. Aus § 10/§ 11.1 nicht angekommen — **5/5 benannte Kopplungen angekommen; 2 Alt-Ankunftsstellen nicht versorgt (→ PB-3, PB-4)**

Rückwärts von der Quelle abgehakt:

- **B-2-TOM-Kopplung (Q-06):** ✅ angekommen, sogar mit dem
  Q-06-Warnvermerk („darf beim Verdichten nicht erneut abfallen").
- **B-4-Sperrdatei-Scope (Q-07):** ✅ angekommen, Scope-Warnung inklusive.
- **B-6-FG-4-Anteil:** ✅ „Anteil FG-4 (Impressumsquelle)" steht im
  § 6.1-Nachtrag; alle fünf Quell-Elemente (Auswahlkriterien aggregiert ·
  Menge · FG-4-Anteil · Abgleichsdatum · Textversion) — **5/5**.
- **B-5-Versionsschema:** ✅ `v1-<Datum>`-Bezug übernommen.
- **Rn.-87-Fälligkeitskasten § 11.1:** ✅ angekommen an: § 3-Index-Kasten,
  § 2.3-W-b3-Kasten, B-1-Nachtrag, Regelwerk-§ 10-O-9-Zeile,
  Rechtsmatrix-O-9-Zeile — **5 Ankunftsstellen**. ❌ **Nicht** versorgt:
  die Statuszeile § 3 Pflicht 2 („Sie muss VOR dem ersten Versand
  stehen", Z. 274 — PB-4) und die O-8-Zeile in § 10 („acht Bau-Pflichten
  noch nicht eingearbeitet", Z. 1135 — PB-3).

### 3. B-8 mitübernommen / Zählung falsch — **keine Auffälligkeit (0 Übernahmen; Zählweg korrekt)**

„Robinson" hat im Regelwerk @`63a995e` genau 2 Fundstellen: den
Streichungs-Vermerk im Index-Kasten (beschreibt die Streichung, keine
Pflicht) und das seit R08 bestehende R-A7.7 („Abgleich keine
Absicherung") — kein Widerspruch, keine Pflicht-Übernahme. Der Zählweg
im Index-Kasten (acht Zeilen B-1…B-8, B-8 ersatzlos gestrichen, sieben
aktiv) ist an der Quelltabelle verifiziert: 8 Zeilen, Zeile B-8 trägt
„⛔ GESTRICHEN 12.08.2026 (Prüferbefund Q-09)". Die Projektquelle zählt
ebenfalls „sieben Bau-Pflichten" (Z. 685/690/1028) — konsistent.

### 4. Vorbehaltsverlust — **1 schwerer Fund (PB-1); O-9 an 3/3 Stellen OFFEN**

- O-9 bleibt überall offen: Rechtsmatrix-Kasten („OFFEN — weder
  entschieden noch geprüft" + „Geführt heißt nicht entschieden"),
  Regelwerk § 3-Pflicht-4-Nachtrag („O-9 selbst bleibt OFFEN"),
  Regelwerk-§ 10-Zeile (Fälligkeit vorgezogen, Status unverändert offen).
  Keine Formulierung liest sich als Erledigung. ✅ **3/3**.
- Rn.-87-Fälligkeit an den neuen Ankunftsstellen konsequent „vor dem
  ERSTEN DATENSATZ". ✅
- Entwarnungen tragen ihre Quelle im Satz („das verschärft das
  Risikobild, es entlastet nicht (O-8 § 5.5)"). ✅
- ❌ **PB-1:** In der Rechtsmatrix ist der Vorbehalts-Satz „Ausdrücklich
  als **nicht erhoben** gekennzeichnet — …" zerstört worden (Details
  unten) — genau die Klasse „Vorbehalt fällt beim Bearbeiten ab".

### 5. Stille Neufassung statt markiertem Nachtrag — **Regelwerk 10/10 sauber; Rechtsmatrix 1 stille Zerstörung (PB-1)**

- Regelwerk: 8 Nachtrags-Kästen + 2 In-Zeilen-Nachträge (O-3-, O-9-Zeile)
  — **alle 10** mit „Nachtrag 13.08.2026 (R13-B)" markiert, Alt-Text
  überall lesbar.
- D3-Kästen (§ 2.1/§ 2.2) und D2-Blockzitate: vom Diff nicht berührt;
  Skriptlauf am Prüfstand bestätigt die Blockvergleiche **3/3**
  (480/1.006/757 Zeichen) samt Rückbau-Gegenproben **3/3**.
- ❌ Rechtsmatrix: **PB-1** (einzige Änderung neben dem markierten
  Kasten, und sie ist unmarkiert und zerstörend).

### 6. Widersprüche Regelwerk ↔ Abwägung ↔ Rechtsmatrix — **3 Funde (PB-3, PB-4, PB-5); Kernaussagen konsistent**

- Fälligkeits-Aussagen der Nachträge untereinander und zur Quelle
  konsistent (einheitlich „vor dem ersten Datensatz"; die
  Doppelnennung „anwaltlicher Rat vor dem ersten Massenversand" +
  „fällig vor dem ersten Datensatz" in der O-9-Zeile spiegelt exakt die
  Quelle § 11.1 und wird im selben Satz aufgelöst).
- Acht/Sieben-Zählungen: an allen neuen Stellen einheitlich
  ausgewiesen; die Alt-Stellen mit „acht" sind im Index-Kasten benannt —
  **bis auf die O-8-Zeile in § 10 (PB-3)**.
- O-9-Darstellungen: Rechtsmatrix-Kasten, Regelwerk-Nachträge und O-8
  § 5.5/§ 11.1 sind sachlich deckungsgleich; aber die Ankunftsstellen in
  O-8 selbst tragen keinen Vorwärtsverweis und ihre „Heutiger
  Stand"-Zahlen sind am Prüfstand nicht mehr reproduzierbar (**PB-5**).
- B-2 vs. R-A1 (E-Mail-Sperre): ausdrücklich versöhnt (Adresse =
  Betroffenenrechte-Weg, kein Werbekanal) — kein Widerspruch.
- B-1 vs. Weg-b-Entscheid/§ 5.1: kein Widerspruch (B-1 sperrt den
  einzelnen Betrieb mit Werbewiderspruch, unabhängig von der Quelle;
  als Lesart markiert).

### 7. Zitat-Treue / Paraphrase-Drift — **keine Auffälligkeit, 4/4 Paraphrasen treu (zusätzlich zu 9/9 + 1/1 Wortlaut aus Kat. 1)**

- **B-1-Kernsatz:** wortidentisch übernommen, obwohl nicht als Zitat
  gesetzt; rote Linie 13 verdichtet ohne Abschwächung.
- **B-5-Kernsatz:** „je Welle wird protokolliert, welche Version an
  welche Adressen ging" = Quelle.
- **B-6-Elementliste:** 5/5 Elemente, keine Auslassung, keine Zugabe.
- **B-7-Kern:** „der Kern von § 3.2 … in Kundensprache im Beileger" →
  „Der auszuformulierende Text ist der Kern von … § 3.2, in
  Kundensprache" — bedeutungsgleich.
- Driftrichtung, wo überhaupt vorhanden: **verschärfend** (B-1-Lesart
  erweitert die Prüfpflicht auf Nicht-Impressums-Quellen) und als eigene
  Lesart gekennzeichnet — nicht die gefährliche Entlastungsrichtung.

---

## Befundliste

### PB-1 · **schwer** · Rechtsmatrix: Vorbehalts-Zeile still zerstört, Fragment in die O-9-Tabellenzeile geklebt

**Fundstelle:** `handel/kanal-rechtsmatrix.md` @`63a995e`, Z. 865–867
(Abschnitt „Offene Punkte und Belegstufen-Grenzen").
**Beleg:** Am Vorgängerstand `989e632` steht als eigene Zeile:
> „Ausdrücklich als **nicht erhoben** gekennzeichnet — „nicht gefunden"
> ist hier nirgends als „existiert nicht" zu lesen:"

Am Prüfstand ist die erste Hälfte **gelöscht** („Ausdrücklich als":
1→0 Treffer, gemessen) und die zweite Hälfte als **fünfte Zelle** an die
vierspaltige O-9-Tabellenzeile im Blockquote gehängt (Z. 865 endet auf
`… (Rn.-87-Verschärfung, R9) | — „nicht gefunden" ist hier nirgends als
„existiert nicht" zu lesen:`). Drei Wirkungen: (a) **stille Neufassung**
— Alt-Text nicht mehr lesbar, kein Nachtrags-Marker; (b)
**Vorbehaltsverlust** — die nachfolgende „Punkt/Stand"-Tabelle (Z. 867 ff.,
u. a. juris/beck-online-Grenze des Briefkanal-Negativs) hat ihre
Als-nicht-erhoben-Kennzeichnung verloren; (c) **Markdown-Bruch** — GFM
verwirft überzählige Zellen, der Satz verschwindet beim Rendern
vollständig, und die Tabelle steht ohne Einleitung direkt unter dem
Blockquote.
**Fix:** Im O-9-Kasten die Zeile nach `… (Rn.-87-Verschärfung, R9) |`
sauber schließen und die Einleitungszeile im Wortlaut von `989e632` als
eigene Zeile vor der „Punkt/Stand"-Tabelle wiederherstellen; die
Reparatur als markierten Kasten ausweisen (Reparaturen sichtbar machen,
CLAUDE.md).

### PB-2 · **schwer** · Zitat-Wächter am committeten Prüfstand ROT; § 12 dokumentiert weiter grün

**Fundstelle:** `akquise/pruefe-zitate.js` + `akquise/listenbau-regelwerk.md`
§ 12 @`63a995e`.
**Beleg (eigener Lauf an aus git rekonstruierten Ständen, Exit-Code
separat erhoben):** `989e632`: Exit **0**, 134 Zitate, 116/116 bestätigt.
`63a995e`: Exit **1**, 143 Zitate, **118/125 bestätigt — 7 nicht im
Pool**, und alle 7 sind die R13-B-Neuzitate (B-2 beide DSK-Zitate, B-3,
B-4 beide, B-5, „das konkrete Werbevorhaben"). Ursache: Der Quellenpool
(8 Dateien) enthält `interessenabwaegung-o8.md` nicht, die
DSK-Orientierungshilfe liegt in `sensibel/` — das Skript kann
„zitiert nach O-8 § 10" strukturell nie bestätigen. Genau dafür verlangt
CLAUDE.md (L-26): pool-externe Zitate **als Ausnahme führen UND
ausweisen, wer sie verifiziert hat**, und nach jedem Reparaturvermerk
den Lauf **im selben Zug**. Die Ausnahmeliste wurde nicht ergänzt, § 12
trägt unverändert „Exit-Code 0 / 0" und die 12.08.-Zahlen — der
committete Stand dokumentiert einen grünen Wächter, den er nicht mehr hat.
**Fix:** Ausnahmeliste um die 7 Einträge ergänzen (je mit Begründung
„zitiert nach O-8 § 10; dort ① A, am Rohbeleg durch R09-A verifiziert" —
analog zum bestehenden Rn.-87-Eintrag), Lauf grün belegen, § 12-Zahlen
mit Datum nachziehen. (Alternative Pool-Erweiterung um O-8 ist laut
O-12 ein eigener Zuschnitt — nicht als Nebenbei-Fix.)
**Abgrenzung:** Der ebenfalls gemeldete verwaiste Ausnahme-Eintrag
„entschieden unzulässig" besteht schon am Vorgängerstand (dort Exit
trotzdem 0) — Altbestand, nicht R13-B.

### PB-3 · **mittel** · Regelwerk § 10, O-8-Zeile: „acht Bau-Pflichten noch nicht eingearbeitet" unmarkiert stehen geblieben

**Fundstelle:** `akquise/listenbau-regelwerk.md` @`63a995e` Z. 1135
(✅-Zelle der O-8-Zeile).
**Beleg:** Die Zelle zählt auf, was mit O-8 „NICHT erledigt" ist —
darunter „acht Bau-Pflichten noch nicht eingearbeitet". Beides ist seit
R13-B überholt (sieben aktiv, Einarbeitung erfolgt). In derselben Tabelle
wurden die O-3- und die O-9-Zeile mit markierten Nachträgen versorgt —
die dritte veraltete Zeile nicht; der Index-Kasten fängt nur die
„acht"-Zählung ab („u. a."), nicht das „noch nicht erfolgt". Ein Leser
der § 10-Tabelle erfährt die Erledigung nicht.
**Fix:** markierter In-Zeilen-Nachtrag analog O-3/O-9 („Einarbeitung
erfolgt 13.08.2026, R13-B — sieben aktive Pflichten, s. Index-Kasten
§ 3").

### PB-4 · **mittel** · Ankunftsstelle § 3 Pflicht 2: „VOR dem ersten Versand" ohne Fälligkeits-Vorwärtsverweis

**Fundstelle:** `akquise/listenbau-regelwerk.md` @`63a995e` Z. 274
(„**Status: nicht gebaut. Sie muss VOR dem ersten Versand stehen**
(W-b3).").
**Beleg:** Der neue Fälligkeits-Vorwärtsverweis hängt nur an der
W-b-Tabelle in § 2.3. Die zweite Alt-Ankunftsstelle desselben Wortlauts
— die Statuszeile der Sperrdatei-Pflicht selbst — blieb unversorgt; wer
dort ankommt (und der B-2-Nachtrag direkt darunter lenkt Leser genau
dorthin), liest die überholte Fälligkeit als aktuelle. Nenner: 1 von 2
Alt-Ankunftsstellen versorgt.
**Fix:** Kurzverweis in der Statuszeile („Fälligkeit überholt durch
Rn.-87-Verschärfung: vor dem ersten Datensatz — s. Kasten § 2.3").

### PB-5 · **mittel** · Ankunftsstellen in O-8 (§ 5.5 „Heutiger Stand", § 11.1 „nirgends geführt") nicht nachgezogen — Zahlen am Prüfstand nicht mehr reproduzierbar

**Fundstelle:** `akquise/interessenabwaegung-o8.md` @`63a995e` Z. 481–482
(„Heutiger Stand: Rechtsmatrix unverändert 0; im Regelwerk 4 Treffer")
und Z. 966 (O-9-Zeile „bisher nirgends geführt").
**Beleg (eigene Messung, `grep -o "Art\. 6 Abs\. 4" | wc -l`):**
@`63a995e` Rechtsmatrix **2** (davon 1 durch den R13-B-Kasten; der erste
kam schon mit N-10/R9), Regelwerk **5** (schon @`989e632` 5; zum
R9-Stand `b2cfa12` waren es die dokumentierten 4). R13-B markiert die
Überholung nur an den **Abfahrts**-Stellen (Rechtsmatrix-Kasten,
Regelwerk-Nachträge); die Vorwärtsverweis-Konvention verlangt den
Vermerk an der Stelle, wo der Leser **ankommt** — und die
Vorrangklausel-Spiegelregel (P-04/L-25) macht ungenau gelassene Quellen
gefährlich. O-8 lag außerhalb des R13-B-Datei-Scopes — der Fix ist
deshalb eine **Zielort-Meldung**, kein Vorwurf einer Scope-Verletzung.
**Fix:** kleiner markierter Nachtrag in O-8 § 5.5 und an der
§ 11.1-O-9-Zeile durch die Session mit O-8-Scope (Leitsession
disponiert); Messstand mit Commit-Hash an die neuen Zahlen.

---

## Zusatzfragen

**(a) Welche Verfälschung hätte mein Verfahren NICHT gefangen?**
1. **Gleichlaufende Verfälschung in der Zitiert-nach-Kette:** Ich habe
   die Nachträge gegen O-8 § 10 geprüft, nicht gegen die
   DSK-Orientierungshilfe selbst (liegt in `sensibel/`, außerhalb des
   git-show-Prüfstands). Zitiert O-8 § 10 die DSK bereits falsch, erbt
   der Nachtrag den Fehler und mein Abgleich meldet 9/9 OK. Meine
   Wortlaut-Bestätigungen tragen die Belegstufe „quellengleich mit O-8
   § 10", nicht „quellengleich mit der DSK".
2. **Bestandsfehler ohne R13-B-Bezug:** Das Regelwerk habe ich ganz
   gelesen, aber nicht jede Bestandszeile gegen ihre Quellen
   re-verifiziert; die Rechtsmatrix außerhalb des geänderten Abschnitts
   nur punktuell.
3. **Rendering:** Die GFM-Wirkung von PB-1 (fünfte Zelle wird verworfen)
   ist aus der Spezifikation geschlossen, nicht an einem gerenderten
   Artefakt gemessen.
4. **Nicht committete Artefakte der Session** (Abschlussmeldung,
   Arbeitsbaum) — auftragsgemäß nicht gesichtet; ob die Session den
   roten Wächter (PB-2) dort selbst ausweist, kann ich nicht sagen.

**(b) Hätte ich die Funde auch OHNE die Kategorien-Hinweise gefunden?**
- **PB-1: ja** — die zerstörte Zeile steht unübersehbar im Diff; jede
  Diff-Lektüre findet sie (Kategorie 5 hat nur die Einordnung
  geschärft).
- **PB-2: wahrscheinlich, aber nicht sicher** — keine Kategorie verlangt
  den Skriptlauf; ausgelöst hat ihn die Prüfraum-Regel (Regelwerk ganz
  lesen → § 12) plus die CLAUDE.md-Wächterregeln (L-26). Ohne das
  Voll-Lesen wäre er unterblieben. Das ist ein Argument für die
  Prüfraum-Regel, nicht für mich.
- **PB-3: halb** — gefunden über den „acht"-Grep, den Kategorie 3
  veranlasst hat.
- **PB-4/PB-5: eher nein ohne Hinweise** — beide kamen aus der
  Rückwärts-Prüfung (Kategorie 2: „von der Quelle rückwärts") bzw. dem
  Fälligkeits-Fokus der Kategorie 4/6 und den zugehörigen Greps
  („ersten Versand", Trefferzählungen). Die Kategorien haben hier
  messbar Suchraum erzeugt.

---

## Lauf-Status (offene Schritte einzeln, nicht geglättet)

| Prüfschritt | Status |
|---|---|
| Kategorien 1–7 | **vollständig gelaufen**, Ergebnisse mit Nenner oben |
| Zitat-Nachzählung maschinell (10 Segmente, 2 Positivkontrollen) | vollständig |
| Skriptlauf `pruefe-zitate.js` an beiden Ständen (rekonstruierte Bäume, Exit separat) | vollständig |
| Regelwerk-Volltext @`63a995e` | vollständig (Z. 1–1262) |
| O-8 § 10/§ 11/§ 5.5 @`63a995e` | vollständig |
| **O-8 §§ 1–9, § 12 im Volltext** | **NICHT gelesen** (außerhalb des benannten Prüfraums; § 5.2 nur C-8-Zeile) — Aussagen über diese Teile treffe ich nicht |
| **Rechtsmatrix-Volltext** | **NICHT vollständig gelesen** (Z. 820–890 + Diff + gezielte Greps); Aussagen über unveränderte Rechtsmatrix-Teile nur, soweit gegrept |
| **DSK-Original in `sensibel/`** | **NICHT geprüft** (außerhalb des git-Prüfstands) — Zitat-Treue endet bewusst bei O-8 § 10, s. Zusatzfrage (a) |
| Rendering-Probe PB-1 an gerenderter Ansicht | **NICHT durchgeführt** (aus GFM-Spez geschlossen) |

*Prüfer-Subagent R13-B, 13.08.2026. Dieses Protokoll ist ungecommittet —
Commit macht die Session.*
