# R17-A · Prüfprotokoll (unabhängiger Prüfer)

## Kopf

- **Prüfstand (eingefroren):** `af92adb` — „BENBECKMAN | R17-A Bau:
  OLG-Beschluss 20 W 37/24 beschafft, 14 statt 12 Randnummern nachgeholt,
  dritte Unlauterkeits-Schiene gefunden".
- **Rundenstart für Löschungszählungen:** `926ca3c`.
- **Arbeitsbaum NICHT gesichtet** (Parallel-Sessions). Prüfgegenstand
  ausschließlich über `git show af92adb:<pfad>` und
  `git diff 926ca3c..af92adb -- <pfad>`. Einzige Ausnahmen: die
  git-ignorierten Rohbelege unter `sensibel/` (auftragsgemäß am Pfad
  gelesen) und `akquise/sperrdatei-struktur.md` (auftragsgemäß; die Datei
  ist im Span `926ca3c..af92adb` unverändert — geprüft per
  `git log 926ca3c..af92adb -- akquise/sperrdatei-struktur.md` = 0 Commits).
- **Zuordnung der Änderungen:** Der Span `926ca3c..af92adb` umfasst DREI
  Commits (`1804b1c` R17-C, `f4f1139` Leitsession, `af92adb` R17-A). Für
  alle fünf Prüfgegenstands-Dateien liefert
  `git log --oneline 926ca3c..af92adb -- <datei>` **genau `af92adb`** —
  fremde Arbeit ist in der Löschungszählung also nicht enthalten. Beide
  Nenner (gegen Rundenstart `926ca3c` und gegen `af92adb~1`) sind
  identisch: 4 · 0 · 7 · 3 · 0 Löschungen.
- Prüfdatum: 17.08.2026.

### Gelesene Dateien — mit tatsächlich gelesener Zeilenspanne

| Datei | Umfang | **tatsächlich gelesen** |
|---|---|---|
| `sensibel/rohbelege-R17-A/olg-duesseldorf-20-W-37-24.txt` | 49 Z. | **1–49, vollständig am Stück** |
| `sensibel/rohbelege-R17-A/00-quellenliste.md` | 152 Z. | **1–152, vollständig am Stück** |
| `sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.txt` | 696 Z. | **am Stück:** 296–309 · 406–423 · 548–585 · 598–629. **einzeln über `grep -n`:** 286 · 350 · 370 · 380 · 404 · 424–438 · 440 · 460 · 480 · 630 · 652 · 660 · 662 · 670 · 674. **NICHT gelesen:** 1–285 · 310–349 · 351–369 · 371–403 · 441–459 · 461–479 · 481–547 · 586–597 · 631–651 · 653–659 · 663–669 · 671–673 · 675–696 |
| `sensibel/rohbelege-R17-A/eugh-c-621-22-DE-volltext.txt` | 217 Z. | 200–208 (Zeilenanfänge) + Volltext der Zeilen 105 · 187 · 205. **Rest nicht gelesen** |
| `sensibel/rohbelege-R09-A/eugh-c-621-22-EN.txt` | 1415 Z. | 1300–1312 (Zeilenanfänge) + Volltext der Zeilen 565 · 1173 · 1308. **Rest nicht gelesen** |
| `akquise/sperrdatei-struktur.md` | — | **118–197 am Stück**; darüber hinaus nur maschinelle `grep -on`-Läufe über die ganze Datei |
| `git diff 926ca3c..af92adb` der fünf Dateien | 303 + 4 Diffs | **vollständig gelesen** (jede `+`- und `-`-Zeile) |
| `git show af92adb:handel/kanal-rechtsmatrix.md` | 1848 Z. | **am Stück nur 1780–1805**; sonst Diff-Hunks + gezielte Treffer-Kontexte |
| `git show af92adb:akquise/interessenabwaegung-o8.md` | — | **am Stück nur 760–782**; sonst Diff-Hunks + gezielte greps |
| `git show af92adb:handel/preismodell-optionen.md` · `…angebotsarchitektur.md` · `…anwalts-briefing-2026-08.md` | — | nur die Diff-Hunks + gezielte greps |

**Zählweg-Konvention dieses Protokolls:** durchgehend
`grep -o <muster> <datei> | wc -l` (nie `grep -c` — das zählt Zeilen).
Wo ein Muster über einen Markdown-Zeilenumbruch läuft, wurde
normalisiert gezählt (Node-Skript, Präfixe/Auszeichnung entfernt,
Whitespace kollabiert) — das ist bei jeder Zahl vermerkt.

---

## § 1 Zusammenfassung

**19 Befunde. Nach Schwere, mit Nenner:**

| Schwere | Zahl | Anteil |
|---|---:|---|
| **schwer** | **1** | 1 von 19 |
| **mittel** | **8** | 8 von 19 |
| **Hinweis** | **10** | 10 von 19 |

**Der eine schwere Befund (S-1)** ist ein Superlativ, der am Rohbeleg
widerlegt ist, in **drei** Dokumenten steht — darunter das
**Anwalts-Briefing** — und in die entlastende Richtung wirkt: Er legt
nahe, die § 3a-UWG-Schiene habe eine Verbraucher-Adressatengrenze. Das
Urteil zitiert in Rn. 143 wörtlich das Gegenteil, und die Rechtsmatrix
selbst trägt an anderer Stelle noch einen zweiten Gegenbeleg.

**Was gut ist und ausdrücklich festgehalten gehört:**

- **Löschungszählung: 14 von 14 gelöschten Zeilen mit sichtbar
  erhaltener Vorfassung, 0 stille Löschungen.** Das ist ein sauberes
  Ergebnis (Einzelnachweis § 2, Kategorie 4).
- **Zitatprüfung: 33 von 34 neu gesetzten Zitaten mechanisch am
  Rohbeleg bestätigt**, das 34. (ein Binnenzitat aus dem eigenen
  Bestand) normalisiert bestätigt. **Kein einziges falsches Zitat, keine
  einzige falsche Randnummer.** Das ist besser als jede von mir geprüfte
  Vorrunde.
- **Die Korrektur „63 statt 65, vierzehn statt zwölf" ist mit meinem
  EIGENEN, unabhängig gebauten Zählweg exakt reproduziert** — inklusive
  der Liste der vierzehn und der Neufunde Rn. 149/150.
- **Die Sprachfassungs-Prüfung ist vorbildlich belegt:** Beide
  EuGH-Extrakte tragen die Randnummer als eigene Zeile VOR dem Absatz
  (DE Z. 204/205, EN Z. 1304/1308) — „Rn. 56" ist also **abgelesen,
  nicht ausgezählt**. Die Verbots-Regel „Randnummern nie selbst
  auszählen" ist hier eingehalten und der Beleg ist am Objekt prüfbar.
- **Alle 13 Positivkontroll-/Nullbefunde am OLG-Beschluss reproduzieren
  exakt** (§ 2, Kategorie 2).

---

## § 2 Befunde einzeln

### Kategorie 1 — Was aus den Quellen nicht angekommen ist (von der Quelle rückwärts)

**Leseraum OLG-Beschluss: Rn. 1–27, von mir vollständig gelesen
(Z. 1–49).** Vollzähligkeit der Randnummern selbst geprüft: alle 27
vorhanden (die Gliederungs-Rn. 10 · 12 · 14 · 17 · 24 · 26 stehen als
`101.` / `122.` / `142.1.` / `172.2.` / `241.` / `262.`, also Rn.-Zahl
unmittelbar gefolgt von der Gliederungsziffer). **Rn. 28 existiert
nicht** — die Behauptung „Rn. 1–27 vollständig" ist bestätigt. Ebenso
bestätigt: **8.297 Zeichen / 8.406 B** (eigener Node-Lauf, Werte
identisch mit der Quellenliste).

---

**M-7 · OLG Rn. 19 ist nicht angekommen — und sie trägt genau die zwei
Punkte, die der Bau selbst als „bleibt offen" führt.**
*(Fundstelle: `handel/kanal-rechtsmatrix.md` @`af92adb`, Nachtrag
17.08.2026, **Punkt 6** „Was der Beschluss über den Gegenstand von
38 O 17/22 sagt" — und die Belegstufen-Tabelle darüber, Zeile „Sie betraf
dasselbe Werbeschreiben")*

- **Behauptung des Baus (Punkt 6):** „**Gläubigerin ist eine andere
  Partei als der Kläger des hiesigen Verfahrens**" — begründet
  ausschließlich von der **LG-Seite** her (Rn. 2/34/64: eingetragener
  Verband; Rn. 44/89: „einer Mitbewerberin"). Und: „**Ob es um dasselbe
  Schreiben ging wie hier, bleibt damit offen**".
- **Messung am Rohbeleg:** Der Beschluss selbst beantwortet beides
  näher, als der Bau ausweist. **Rn. 19** (Z. 39) sagt: die
  beanstandete Wirkung sei, „als gehe es darin nur um den Wechsel in
  einen anderen **Tarif** (und nicht um den Wechsel zu einem anderen
  **Anbieter**)"; und weiter: „diejenigen Kunden, die über ein
  **Vertragsverhältnis zu der Gläubigerin** verfügten, nähmen deshalb
  weiter an, das Kundenanschreiben … sei von der Gläubigerin
  autorisiert bzw. stamme von einem **Vertriebspartner der
  Gläubigerin**."
  - Daraus folgt **aus dem Beschluss selbst**, dass die Gläubigerin der
    **Vertragspartner der angeschriebenen Kunden** ist, also
    Mitbewerberin und kein Verband. Das ist der stärkere, weil
    quellennähere Beleg für den Satz, den der Bau nur von der LG-Seite
    her stützt.
  - Und die **Irreführungsfigur ist identisch** mit der des hiesigen
    Urteils: LG Rn. 111 (Z. 350) wirft der Beklagten vor, „gezielt das
    zentrale Moment des **intendierten Anbieterwechsels** verschwiegen"
    zu haben. Zweimal dieselbe Figur, zwei Gerichte, dieselbe Beklagte
    (Schuldnerin) — das ist ein deutlich engerer Zusammenhang, als
    „verschiedene Anlagenkürzel, verschiedene Gegenseiten" nahelegt.
- **Warum das kein Gegenbefund zur Vorsicht des Baus ist:** Der Bau hat
  in **Punkt 7** völlig richtig festgehalten, dass die OLG-Aussage dem
  **geänderten** Schreiben (AST 4) gilt. Genau deshalb ist Rn. 19
  wichtig: Sie zeigt, was am **ursprünglichen** Schreiben beanstandet
  war — und macht damit sichtbar, dass das OLG die Figur nicht
  gebilligt, sondern ihre Beseitigung festgestellt hat. Der Befund
  **stärkt** den Bestand und ist trotzdem liegengeblieben.
- **Schwere: mittel.**
- **Vorschlag:** Punkt 6 um zwei Sätze aus Rn. 19 ergänzen (Wortlaut
  oben), Belegstufe ① A. Den Satz zur Gläubigerin auf Rn. 19 stützen
  statt allein auf die LG-Seite; die Aussage zur Identität des
  Schreibens **unverändert offen lassen** — Rn. 19 belegt die Figur,
  nicht die Identität.

---

**M-8 · OLG Rn. 27 ist nicht angekommen: Die Rechtsbeschwerde wurde
nicht zugelassen.**
*(Fundstelle: `handel/kanal-rechtsmatrix.md`, Nachtrag 17.08.2026,
Punkt 4 „Die Einordnung des Landgerichts ist am Original bestätigt")*

- **Messung:** Rn. 27 (Z. 47) lautet vollständig: „Die Voraussetzungen
  für die Zulassung der Rechtsbeschwerde gemäß § 574 Abs. 2 ZPO liegen
  nicht vor." Zählweg: `grep -o "574 Abs. 2" <olg> | wc -l` = **1**;
  Positivkontrolle im selben Lauf `§ 890` = **2**, Gegenkontrolle
  `§ 543` = **0**.
- **Warum das den Bestand ändern müsste:** Der Senat hat damit
  ausdrücklich verneint, dass die Sache grundsätzliche Bedeutung hat
  oder Rechtsfortbildung/Rechtseinheit eine Entscheidung erfordern. Das
  ist ein **von der Quelle selbst gelieferter, unabhängiger** Beleg
  dafür, dass dieser Beschluss über den Einzelfall hinaus nichts
  festschreiben will — genau die These, die Punkt 4 und Punkt 7 des
  Nachtrags mit einem Strukturargument („hätte ohne diesen Satz
  denselben Tenor") begründen müssen. Der Bau argumentiert selbst, wo
  die Quelle liefert.
- **Schwere: mittel.**
- **Vorschlag:** Punkt 4 um Rn. 27 als eigenständiges Argument ergänzen
  (① A, wörtlich). Damit trägt Punkt 7 („überdehnt den Beschluss") einen
  Quellenbeleg statt einer eigenen Herleitung — und der Satz „Das ist
  keine Bewertung, sondern die Struktur der Entscheidung" (H-5) wird
  entbehrlich.

---

**H-8 · Aus dem Leseraum Rn. 156–273 sind zwei betriebsrelevante
Feststellungen nicht angekommen (Rn. 211 und Rn. 214).**
*(Fundstelle: `handel/kanal-rechtsmatrix.md`, Nachtrag „Es gibt eine
DRITTE Unlauterkeits-Schiene", Abschnitt „Vier weitere Feststellungen
aus demselben Block")*

- **Rn. 214** (Rohbeleg Z. 556): „Mithin hat der Kläger anhand von
  **zwei Fällen exemplarisch** aufgezeigt, dass die Beklagte mit ihrer
  Werbeaussendung gegen Art. 14 … DSGVO verstoßen hat". Betriebsfolge
  für uns: **Zwei dokumentierte Einzelfälle genügten, um den Verstoß
  für die gesamte Aussendung festzustellen.** Zusammen mit Rn. 249
  (Wiederholungsvermutung, vom Bau aufgenommen) ist das die eigentliche
  Hebelwirkung — und die Hälfte davon fehlt.
- **Rn. 211** (Z. 550): „Sie den Adressaten dieser Schreiben bereits zu
  einem früheren Zeitpunkt mitgeteilt zu haben, **macht die Beklagte
  selbst nicht geltend**." Das benennt den einzigen im Urteil
  angedeuteten Entlastungsweg (frühere Information) — für unsere
  Briefgestaltung relevant, weil er dokumentierbar wäre.
- Zählweg der Verneinung: `grep -rl --include="*.md" "Rn\. 214" .` = **0
  Dateien**, ebenso `Rn. 211` = 0. Positivkontrolle desselben Laufs mit
  unabhängig bekanntem Sollwert: `Rn. 220` = **4 Dateien** (die
  Karenzfrist-Stelle, s. u.) — der Suchweg trifft.
- **Schwere: Hinweis** (beides ergänzt, keines kippt etwas).
- **Vorschlag:** Rn. 214 als fünften Spiegelstrich in die
  „Vier weitere Feststellungen"-Liste, verbunden mit der Rn.-249-Zeile.

---

> **Eine eigene Verneinung, die NICHT gehalten hat — hier offen
> ausgewiesen.** Ich hatte aus Rn. 220 („eine — insoweit von der DSGVO
> nicht vorgesehene — **Karenzfrist** für eine Nachlieferung") einen
> schweren Fehlbestand vermutet: „im Bestand nicht angekommen". Die
> Gegenprobe widerlegt das. `akquise/interessenabwaegung-o8.md`
> @`af92adb` Z. 766–782 führt den Punkt **seit Längerem, korrekt und
> sogar mit einer eigenen Korrektur** („⚠️ Korrektur 12.08.2026, Q-16":
> die Vorfassung stützte sich allein auf Rn. 220 und hatte das
> einschränkende „insoweit" aus dem Zitat entfernt). Zählweg meiner
> Fehlvermutung: `grep -rin --include="*.md" -o "Karenzfrist"` = 12
> Treffer in 7 Dateien. **Der Bestand ist hier besser als meine
> Ausgangshypothese.**

---

### Kategorie 2 — Zitatprüfung: Aussage UND Fundstelle getrennt

**Nenner: 34 neu gesetzte Zitate identifiziert · 33 mechanisch am
Rohbeleg byte-genau bestätigt · 1 (Binnenzitat aus dem eigenen Bestand)
normalisiert bestätigt · 0 falsche Zitate · 0 falsche Randnummern.**

Zählweg je Zitat: `grep -o "<vollständiger Zitatkern>" <rohbeleg> | wc -l`
gegen den jeweiligen Volltext; Sollwert je ≥ 1.

**OLG-Beschluss (6 Zitate, alle = 1):** Tenor (Volltext, 1 Satz) ·
Rn. 15 („Umstände, die außerhalb des Titels liegen … zustehen") ·
Rn. 22 Kerngleichheit („Die streitbefangene Gestaltung … zu
geschehen.") · Rn. 22 „Im Übrigen"-Passage (Volltext) · Rn. 3
(„mit dem als Anlage K 7 … zu werben", 3 Fundstellen im Beschluss) ·
Rn. 5 „125.000,- €".

**LG-Urteil, die vierzehn Randnummern (13 Zitate, alle = 1):** Rn. 121 ·
122 · 123 (Darlegungslast, Langzitat) · 138 (zwei getrennte Zitate) ·
139 · 140 · 149 · 150 · 151 (zwei Zitate) · 152 · 154 · zusätzlich
Rn. 146 („massenhaft verbreitete Werbeaussendung").

**LG-Urteil, Block 156–273 (11 Zitate, alle = 1):** Rn. 221 · 223 ·
225 · 166 („ausdrücklich nicht erschöpfend") · 243 · 244 · 176 · 234
(„keine Umstände aufgezeigt") · 249 · 250 · 267.

**Weitere (4, alle = 1):** LG Rn. 111 („beiläufig … nicht tragenden
Erwägung") · Rn. 136 (zwei Zitatteile) · Rn. 147 („sind außerdem gemäß
§ 3 Abs. 2 UWG unlauter") · Rn. 148 („die sich an Verbraucher richten
oder diese erreichen", 2 Fundstellen).

**EuGH DE Rn. 56 (1 Zitat):** Volltext byte-genau in Z. 205 des
DE-Extrakts. **Fundstelle unabhängig geprüft:** Z. 204 trägt die
alleinstehende Zahl `56`, Z. 1304 der EN-Fassung ebenso; Z. 1308 EN ist
die inhaltsgleiche Entsprechung („contrary to what follows from recital
47 … does not appear to be characterised by a relevant and appropriate
relationship" ↔ „entgegen dem 47. Erwägungsgrund … nicht durch eine
maßgebliche und angemessene Beziehung … zu sein **scheint**").
**Die Sprachfassungs-Behauptung ist damit von mir unabhängig
bestätigt.** Auch die vom Bau festgehaltene Vorsicht („‚scheint',
gerichtet an das vorlegende Gericht") ist am Objekt richtig.

**Drei Detail-Befunde innerhalb dieser Kategorie:**

- **H-10 (Hinweis) — Rn.-250-Zitat verändert innerhalb der Ellipse die
  Grammatik der Quelle.** Bau: „Haftung auch für Personen, ‚deren
  Verhalten … gemäß § 8 Abs. 2 UWG einen Unterlassungsanspruch auch
  gegen die Beklagte begründet'". Original (Z. 628): „eine Person,
  deren Verhalten der Beklagten entsprechend § 31 BGB zugerechnet wird
  **oder das** gemäß § 8 Abs. 2 UWG einen Unterlassungsanspruch auch
  gegen die Beklagte begründet". Die Auslassung ist markiert (✓), aber
  sie ersetzt das Bezugswort („das" → „deren Verhalten") und **schluckt
  die zweite Zurechnungsschiene § 31 BGB**, die für uns eigenständig
  relevant ist (Organ-/Repräsentantenhaftung ≠ Beauftragtenhaftung).
  **Vorschlag:** vollständig zitieren, § 31 BGB als zweite Schiene
  nennen.
- **H-3 (Hinweis) — Zwei selbst gesetzte Prüf-Kontaminationen (L-26).**
  (a) Der Reparaturvermerk zur Rn.-154-Zeile schreibt die Vorfassung
  „**verbleiben**" in den Text; Zählweg am Rohbeleg:
  `grep -o "verbleiben soll"` = **0**, `grep -o "verblieben soll"` =
  **1** — d. h. der Vermerk erzeugt planmäßig ein „Zitat", das in der
  Quelle nicht stehen kann. Ein Ausnahmelisten-Eintrag ist im Dokument
  nicht ausgewiesen. (b) Der neue Text schreibt die eigene
  Gegenkontrolle **als Zeichenkette ins Dokument**: `grep -o "Rn. 9999"`
  in `handel/kanal-rechtsmatrix.md` @`af92adb` = **1** (Z. 1329). Jede
  spätere Gegenkontrolle mit genau diesem Wert findet ab jetzt einen
  Treffer und meldet falsch. *(Mir selbst ist die Falle im ersten Lauf
  zugeschlagen — s. § 4.)* **Vorschlag:** Ausnahmeliste um „verbleiben"
  ergänzen (mit Begründung); Gegenkontroll-Wert im Dokument
  unkenntlich schreiben (z. B. „Rn. 9-9-9-9") oder je Lauf neu würfeln.
- **M-4 (mittel) — Rn. 243/244 stammen aus einem ANDEREN Antrags-Block
  als 221–234; die Tabelle weist das nicht aus.**
  *(Fundstelle: `handel/kanal-rechtsmatrix.md`, Nachtrag „Es gibt eine
  DRITTE Unlauterkeits-Schiene", Tabelle, Zeilen „⚠️ Die Grenze der
  Vermutungsregel" und „Und was gilt, wenn sie nicht greift"; gleichlautend
  in `akquise/interessenabwaegung-o8.md` § 6.2 Ziffer (3) und in
  `handel/anwalts-briefing-2026-08.md` § 3.2 Teilfrage 1c (b))*
  - **Zitate und Randnummern sind korrekt.** Die **Zuordnung** ist es
    nicht: Der Einleitungssatz der Tabelle bindet die Schiene an
    „**Klageantrag IV** … Rn. 221–234". Rn. 243/244 liegen außerhalb
    und gehören zum Gliederungspunkt **„13."**, der ausweislich Rn. 239
    (Z. 606) „die mit **Antrag V** angegriffene … Untätigkeit" auf das
    **Auskunftsverlangen (Artt. 12 Abs. 3, 15 Abs. 1 DSGVO)** betrifft.
    Rn. 243 begründet die Nichtanwendung von § 5b Abs. 4 UWG
    ausdrücklich damit, dass „diese Phase … bereits beendet" war, „als
    das **Auskunftsverlangen** an sie herangetragen wurde".
  - **Warum das zählt:** Für Antrag IV sagt **Rn. 224** (Z. 576) das
    Gegenteil — dort sind „die Voraussetzungen für das Eingreifen der
    Vermutungsregel des § 5b Abs. 4 UWG … **erfüllt**". Eine Tabelle,
    die unter der Überschrift „Antrag IV / Rn. 221–234" eine Zeile
    „Grenze der Vermutungsregel" führt, liest sich als Einschränkung
    **dieser** Schiene. Sie ist es nicht.
  - **Die Sachfolge des Baus bleibt richtig:** Für einen **gewerblichen**
    Empfänger greift § 5b Abs. 4 UWG nach seinem Wortlaut („dem
    Verbraucher") ebenfalls nicht, und dann sind Rn. 243/244 die
    strukturell passende Analogie. Nur muss dastehen, **dass** es eine
    Analogie aus einem anderen Antragsblock ist.
  - **Vorschlag:** In allen drei Dokumenten einen Halbsatz ergänzen:
    „Rn. 243/244 stammen aus dem Block zu Antrag V (Auskunftsverlangen,
    Art. 15 DSGVO); für Antrag IV bejaht Rn. 224 die Vermutungsregel
    gerade. Wir ziehen sie als **Analogie** für den gewerblichen
    Empfänger heran." **Rn. 224 ist dabei neu aufzunehmen** — sie fehlt
    im Bestand vollständig. Zählweg:
    `grep -rl --include="*.md" "Rn\. 224" .` **ohne dieses Protokoll** =
    **0 Dateien**; Positivkontrolle desselben Laufs `Rn. 221` = **3
    Dateien** (die drei Dokumente dieser Runde), Gegenkontrolle
    `Rn. 3333` = **0**.
    ⚠️ *Der Selbstausschluss ist nicht kosmetisch: Mein erster Lauf
    meldete `Rn. 224` = 1 Datei — den Treffer hatte ich zwei Minuten
    zuvor selbst in dieses Protokoll geschrieben. Genau die Klasse, die
    ich unter H-3 dem Bau vorhalte. S. § 4.*

**Positivkontroll-Block am OLG-Beschluss — alle 13 Werte von mir
unabhängig reproduziert** (`grep -o … | wc -l`, eigener Lauf):

| Muster | Behauptung | meine Messung |
|---|---:|---:|
| `DSGVO` · `Datenschutz` · `personenbezogen` · `Art. 6` · `Art. 14` · `3a UWG` · `§ 3 Abs. 2` · `UWG` | je 0 | **je 0** ✓ |
| `§ 890` | 2 | **2** ✓ |
| `Anlage K 7` | 6 | **6** ✓ |
| `Schuldnerin` | 13 | **13** ✓ |
| `kerngleich` | 1 | **1** ✓ |
| `Irreführung` | 1 | **1** ✓ |

Die Zeichenklassen-Argumentation des Baus trägt: `§ 3 Abs. 2` = 0 und
`§ 890` = 2 laufen über denselben `§`-Kanal, `UWG` = 0 neben
`Schuldnerin` = 13 über den reinen Buchstabenkanal. **Kein
Entity-Artefakt.**

---

### Kategorie 3 — Wo der Bestand eine Rechtsfolge behauptet, die erst der anwaltliche Rat liefert

**S-1 · SCHWER · „…und sie ist die einzige, deren Tatbestand B2B
ausdrücklich einschließt" ist am Rohbeleg widerlegt — und steht in drei
Dokumenten, darunter dem Anwalts-Briefing.**

*(Fundstellen, alle @`af92adb`:*
*(a) `handel/kanal-rechtsmatrix.md`, **Überschrift** des Nachtrags
„🔴 Nachtrag 17.08.2026 (R17-A), aus Rn. 156–273";*
*(b) `akquise/interessenabwaegung-o8.md` § 6.2, Nachtrag 17.08.2026,
**Ziffer (3)**, erster Satz;*
*(c) `handel/anwalts-briefing-2026-08.md` § 3.2, **Teilfrage 1c**, erster
Satz — sowie die Frage (a) desselben Absatzes.)*
*Zählweg: normalisiert (Markdown-Präfixe entfernt, Whitespace
kollabiert, Node) — je **1** Treffer pro Datei, **3** insgesamt. ⚠️ Ein
naiver `grep -o` liefert nur 2, weil der Satz in (b) über einen
Zeilenumbruch läuft — die dokumentierte Zeilentrennungs-Falle.*

**Behauptung.** § 5a Abs. 1 UWG sei die **einzige** der drei
Unlauterkeits-Schienen, deren **Tatbestand** „sonstige Marktteilnehmer"
/ B2B ausdrücklich einschließt.

**Messung — drei unabhängige Widerlegungen:**

1. **§ 3a UWG (die erste Schiene) — am Rohbeleg, ① A.** Rn. 143
   (Z. 414) gibt den Tatbestand wörtlich wieder: „Der Verstoß ist
   geeignet, die Interessen von Verbrauchern, **sonstigen
   Marktteilnehmern** oder Mitbewerbern spürbar zu beeinträchtigen."
   Rn. 139 (Z. 406), vom Bau selbst zitiert, ebenso: „dazu bestimmt, im
   Interesse der **Marktteilnehmer** das Marktverhalten zu regeln".
   Rn. 146 (Z. 420) bejaht die Spürbarkeit ausdrücklich „der Interessen
   **anderer Marktteilnehmer**". Zählweg:
   `grep -o "sonstigen Marktteilnehmern" <lg-rohbeleg> | wc -l` = **1**
   (Rn. 143); Positivkontrolle im selben Lauf `Marktteilnehmer` = **10**,
   Gegenkontrolle `Marktbeteiligte` = **0**.
   ⚠️ **Der Bau hat Rn. 143 gesehen** — seine eigene Rn.-138-Zeile
   führt „Spürbarkeit (143–146)" als dritte Achse auf (`grep -o
   "Spürbarkeit (143–146)"` in der Matrix = 1). Der Gegenbeleg steht
   **80 Zeilen über** dem Superlativ, im selben Dokument, aus derselben
   Runde.
2. **§ 5a Abs. 4 UWG — im selben Dokument, wörtlich.**
   `handel/kanal-rechtsmatrix.md` @`af92adb` trägt an anderer Stelle:
   „Das Verschleierungsverbot steht heute in **§ 5a Abs. 4 UWG**, und
   das gilt **ausdrücklich auch gegenüber ‚sonstigen
   Marktteilnehmern', also B2B**." Zählweg: normalisierter Kontextlauf
   über `sonstigen Marktteilnehmern` in der Matrix = **2** Treffer,
   dies ist der erste. **Dieselben drei Wörter — „ausdrücklich",
   „sonstigen Marktteilnehmern", „B2B" — die der neue Superlativ für
   sich exklusiv beansprucht.**
3. **§ 5 Abs. 1 und Abs. 2 UWG — vom Bau selbst zitiert, eine Zeile
   nach dem Superlativ.** Der Nachtrag schreibt: „`akquise/
   interessenabwaegung-o8.md` § 6.2 hält fest, die in Rn. 88 genannten
   Normen ‚§§ 5 Abs. 1 und Abs. 2, 5a Abs. 1 bis Abs. 3 UWG' seien
   ‚**nicht auf Verbraucher beschränkt**'." Rn. 88 am Rohbeleg
   bestätigt (Z. 304): „weil sie gemäß §§ 5 Abs. 1 und Abs. 2, 5a Abs. 1
   bis Abs. 3 UWG unlauter ist." Der Satz, der den Superlativ stützen
   soll, listet also **mehrere** Normen derselben Eigenschaft.

**Und der Bau widerspricht sich selbst — zweimal, in derselben Runde:**

- `akquise/interessenabwaegung-o8.md` § 6.2, **Ziffer (2)** (ca. 30
  Zeilen ÜBER Ziffer (3)): „Dass § 3 Abs. 2 UWG verbrauchergebunden
  ist, heißt **nicht**, dass der Fall für uns entschärft ist — die
  **erste** Schiene (§ 3a UWG) trägt diese Bindung **nicht**."
- `akquise/interessenabwaegung-o8.md` § 11.2 Nr. 7, Nachtrag
  17.08.2026: „Die Verbraucherbindung, die § 3 Abs. 2 UWG entschärft,
  gilt für § 3a UWG **nicht** — wer die Schienen als Alternative liest,
  hält eine Entlastung für die ganze Norm, die nur für **eine von
  dreien** trägt."

Beide Sätze sind **richtig** und beide **widerlegen den Superlativ
wörtlich**. Der Bau hat die Sache also verstanden und im Superlativ
falsch verdichtet.

**Warum das schwer ist, nicht mittel:**

- **Richtung.** Der Superlativ wirkt als **Entwarnung** für § 3a UWG.
  Wer ihn liest, hält die Rechtsbruch-Schiene für verbraucherbeschränkt
  und damit im reinen B2B-Betrieb für ungefährlich. Das Urteil sagt in
  Rn. 143/146 das Gegenteil — und § 3a UWG ist genau die Schiene, über
  die ein DSGVO-Verstoß in **unserem** B2B-Vorhaben lauterkeitsrechtlich
  angreifbar würde.
- **Adressat.** Er steht in
  `handel/anwalts-briefing-2026-08.md` — dem Dokument, das an einen
  Entscheider geht, der die Rohbelege nicht hat.
- **Er trägt eine Frage.** Direkt darunter fragt das Briefing:
  „(a) Greift diese Schiene bei einer reinen B2B-Aussendung — dort
  fehlt die Adressatengrenze, an der **die beiden anderen Schienen**
  sich reiben?" Das setzt als Tatsache voraus, dass **auch § 3a UWG**
  sich an einer Adressatengrenze reibt. Der Anwalt bekommt damit eine
  **falsche Prämisse als Fragerahmen** — und eine Antwort auf eine
  falsch gestellte Frage ist teurer als keine Antwort.
- **Ein einziger Satz, drei Dokumente, keine Vorrangklausel und kein
  Wächter** — die Dubletten-Regel greift hier nicht, weil der Satz
  jeweils neu formuliert ist.

**Vorschlag (Reparatur, nicht Abschwächung — L-17):**

- Den Superlativ an allen drei Stellen **streichen**, nicht
  relativieren. Ein „eine der wenigen, die …" wäre dieselbe unbelegte
  Behauptung in kleiner.
- Ersetzen durch die belegbare Aussage: „**Von den drei Schienen ist
  allein § 3 Abs. 2 UWG tatbestandlich an Verbraucher gebunden**
  (Rn. 148/149). § 3a UWG nennt in seiner Spürbarkeitsklausel
  ausdrücklich ‚sonstige Marktteilnehmer' (Rn. 143), § 5a Abs. 1 UWG
  ‚einen Verbraucher oder sonstigen Marktteilnehmer' (Rn. 223)."
- Die Briefing-Frage (a) neu fassen: nicht „dort fehlt die
  Adressatengrenze, an der die beiden anderen sich reiben", sondern
  „Für § 3 Abs. 2 UWG scheint uns die Verbraucherbindung zu greifen;
  für § 3a UWG und § 5a Abs. 1 UWG nicht. **Trifft das zu, und welche
  der drei trägt im reinen B2B-Fall?**"
- **Rückwirkend gegen die Klasse suchen (L-49):** Der Superlativ ist
  bereits der **zweite** dieser Klasse in derselben Runde — s. H-6.
  Vor dem Commit der Reparatur einen Lauf über alle in R17-A neu
  geschriebenen Absätze auf `einzige|einziger|nur … trägt|allein` mit
  je einer Gegenprobe an den benachbarten Optionen.

---

**M-1 · mittel · „(§ 5 UWG)" wird einem Beschluss zugeschrieben, in dem
`UWG` = 0 ist — fünf Zeilen unter der eigenen Messung.**
*(Fundstelle: `handel/kanal-rechtsmatrix.md`, Nachtrag 17.08.2026,
**Punkt 5**, ⭐-Folgesatz)*

- **Behauptung:** „⭐ **Folge: Die abweichende Auffassung betrifft die
  IRREFÜHRUNGS-Achse (§ 5 UWG), nicht die DSGVO-Achse.**"
- **Messung:** Unmittelbar davor steht — richtig — die eigene Zählung
  „und sogar `UWG` = **0**". Von mir reproduziert: `grep -o "UWG"
  <olg-rohbeleg> | wc -l` = **0**; ebenso `grep -o "§ 5" ` = **0**;
  Positivkontrolle im selben Lauf `§ 890` = 2. **Der Beschluss nennt
  keine einzige UWG-Norm.** Die einschlägigen Begriffe im Beschluss sind
  „Irreführung" (1×, Rn. 22), „irreführend" (Rn. 19) und
  „Wettbewerbsverstoß" (Rn. 20).
- **Warum das die L-27-Klasse ist:** Die Norm steht im **Fließtext**,
  nicht im Zitat. Kein Zitatabgleich fängt sie; sie liest sich plausibel
  (die Sache ist ja Irreführungsrecht) und ist trotzdem eine
  Normzuordnung, die die Quelle nicht trägt. Die **Sachaussage**
  (Irreführungs- statt DSGVO-Achse) ist richtig und aus Rn. 22 belegt —
  nur die Klammer ist es nicht.
- **Vorschlag:** Klammer streichen oder zu „(Irreführungsrecht; der
  Beschluss nennt selbst keine UWG-Norm — `UWG` = 0)" umformulieren.
  Die Fassung in `akquise/interessenabwaegung-o8.md` Ziffer (4) ist
  bereits richtig („betrifft die **Irreführungs-Achse**") und braucht
  keine Änderung — der Fehler entstand allein beim Ausformulieren in
  der Matrix.

---

**M-5 · mittel · Zwei Betriebsfolgen sprechen Recht, ohne einen
Anwaltsvorbehalt zu tragen.**
*(Fundstelle: `handel/kanal-rechtsmatrix.md`, Nachtrag „Es gibt eine
DRITTE Unlauterkeits-Schiene", Abschnitt „Vier weitere Feststellungen",
Spiegelstriche zu Rn. 249 und Rn. 250)*

- **Rn. 249:** „Betriebsfolge: Ein einzelner Fehlversand begründet die
  Vermutung für die ganze Welle; **widerlegbar praktisch nur über eine
  strafbewehrte Unterlassungserklärung**." Der zweite Halbsatz steht
  **nicht** in Rn. 249 (Z. 626, von mir vollständig gelesen: der Satz
  endet nach „kerngleicher Verstöße" mit zwei BGH-Fundstellen) und
  **nirgends** im gelesenen Urteilstext als Aussage über die
  Widerlegung der Wiederholungsvermutung.
  ⚠️ **Korrigierter Zählweg — meine erste Fassung dieses Absatzes war
  falsch belegt.** Ich hatte geschrieben:
  „`grep -o "Unterlassungserklärung" <lg> | wc -l` = **0**;
  Positivkontrolle `Wiederholung` = **3**". **Nachgemessen ist beides
  falsch:** `Unterlassungserklärung` = **1** und `Wiederholung` = **6**.
  Die eine Fundstelle steht in **Rn. 237** (Z. 602) und betrifft einen
  völlig anderen Zusammenhang — die Frage, ob es einer Fristsetzung für
  die Auskunft bedurfte („wie für die verlangte Abgabe einer
  Unterlassungserklärung"). Sie trägt **nicht** die Aussage des Baus.
  **Der Befund bleibt daher bestehen, die Verneinung ist enger zu
  fassen:** Der Urteilstext enthält an keiner von mir gelesenen Stelle
  eine Aussage darüber, **wie** die Wiederholungsvermutung widerlegt
  wird. Erweiterter Suchweg im selben Lauf (Sachbegriff-Achse):
  `strafbewehrt` = **0** · `Unterwerfung` = **0** · `Vertragsstrafe` =
  **0** · `Wegfall der Wiederholungsgefahr` = **0**; Positivkontrolle
  `Wiederholungsgefahr` = **3** (u. a. Rn. 247, „jeweils auf
  Wiederholungsgefahr gestützten … Unterlassungsansprüche" — der
  Suchweg trifft). Es ist eine zutreffende, aber **eigene** rechtliche
  Aussage — genau die Klasse, die dieses Dokument sonst konsequent an
  den Anwalt routet.
- **Rn. 250:** „Betriebsfolge: **Beauftragte** (Lettershop,
  Versanddienstleister, Freelancer) fallen darunter." Das ist eine
  **Subsumtion unserer konkreten Dienstleister** unter § 8 Abs. 2 UWG,
  ohne Vorbehalt und ohne Anwaltsfrage. Die Norm nennt „Beauftragte";
  ob ein Lettershop oder ein Freelancer Beauftragter im Sinne der Norm
  ist, hängt an Eingliederung und Einflussmöglichkeit und ist keine
  Ablesefrage.
- **Gegenprobe, die für den Bau spricht:** Die schärfste Ableitung des
  ganzen Nachtrags — die Rn.-152-Zeile („strukturell immer erfüllt") —
  ist **vorbildlich gebunden**: „Ob das ein tragfähiger allgemeiner Satz
  oder eine Einzelfallformulierung ist, entscheidet dieses Dokument
  nicht — Frage an den Anwalt". Der Maßstab ist also vorhanden, er ist
  nur nicht überall angewandt.
- **Vorschlag:** Beide Sätze auf die Quellenaussage zurückschneiden und
  je einen Halbsatz „→ Frage an den Anwalt" anhängen; die
  Beauftragten-Frage als **Teilfrage 1d** ins Briefing (sie berührt
  unmittelbar die AVV-/Dienstleisterkette und ist eine der wenigen
  Fragen, die unsere Betriebsplanung sofort ändern kann).

---

**H-4 · Hinweis · Rn.-123-Betriebsfolge überzeichnet eine Darlegungslast
zu einer Beweisregel.** Bau: „Was uns entlasten soll, muss dokumentiert
und auffindbar sein — **sonst existiert es im Prozess nicht**."
Rn. 123 sagt, es sei „Sache des Unternehmers … **von sich aus** …
vorzutragen". Vom **Vortrag** zur **Dokumentation** und von dort zur
**Nichtexistenz** sind zwei eigene Schritte. Der erste ist eine
vernünftige Betriebsfolge, der zweite eine Rechtsfolgenbehauptung.
**Vorschlag:** „…sonst trägt es im Prozess niemand vor" statt „existiert
es nicht".

**H-5 · Hinweis · „Das ist keine Bewertung, sondern die Struktur der
Entscheidung" ist selbst eine Entwarnung.** *(Punkt 4 des
OLG-Nachtrags.)* Der vorangehende Satz — „**Der Beschluss hätte ohne
diesen Satz denselben Tenor.**" — ist ein Kontrafaktisch-Urteil über
eine fremde Entscheidung, also gerade eine Bewertung. Die Sache stimmt
(LG Rn. 111 nennt die Äußerung selbst „nicht tragend", OLG Rn. 22 leitet
sie mit „Im Übrigen" ein), aber die Absicherung liefert die Quelle,
nicht der Disclaimer. **Vorschlag:** Disclaimer streichen, stattdessen
Rn. 27 als Quellenbeleg ergänzen (M-8).

---

### Kategorie 4 — Löschungszählung `git diff --numstat 926ca3c..af92adb`, jede gelöschte Zeile einzeln

**Ergebnis: 14 gelöschte Zeilen · 14 mit sichtbar erhaltener Vorfassung ·
0 stille Löschungen.**

| Datei | + | − | Befund je gelöschter Zeile |
|---|---:|---:|---|
| `handel/kanal-rechtsmatrix.md` | 257 | **4** | ✅ 4/4 |
| `akquise/interessenabwaegung-o8.md` | 98 | **0** | — (reiner Anbau) |
| `handel/preismodell-optionen.md` | 29 | **0** | — (reiner Anbau) |
| `handel/angebotsarchitektur.md` | 25 | **3** | ✅ 3/3 |
| `handel/anwalts-briefing-2026-08.md` | 119 | **7** | ✅ 7/7 |

**Einzelnachweis:**

- **kanal-rechtsmatrix, Z. 1:** Belegstufen-Zeile „Sie betraf dasselbe
  Werbeschreiben" → **ersetzt**, nicht gelöscht: der gesamte Vorlauf
  inkl. des Vermerks „*(korrigiert 17.08.2026 nach Prüferbefund M-1 —
  hier stand ‚zu genau diesem Werbeschreiben' mit Belegstufe ① A)*"
  kehrt wörtlich wieder; ergänzt wurde „**weiterhin** nicht belegt" und
  ein ⭐-Zusatz. **Verschärfung, keine Glättung.** ✅
- **kanal-rechtsmatrix, Z. 2:** „Den Beschluss … haben wir nicht
  beschafft" → in `~~Durchstreichung~~` erhalten, Belegstufe ③ → ① A mit
  sichtbarem „ÜBERHOLT". ✅
- **kanal-rechtsmatrix, Z. 3+4:** die zwei Zeilen der Abdeckungs-Lücke
  („65 von 77" / „zwölf: 121, …") → beide in `~~…~~` erhalten, Korrektur
  daneben. ✅ *(Der ungestrichene Rest des Satzes — „darunter die
  Anwendung des § 3 Abs. 2 UWG … und die Anwendbarkeitsprüfung des
  § 3a UWG (138–140)" — bleibt korrekt stehen.)*
- **angebotsarchitektur, Z. 1+2:** die beiden Superlativ-Zeilen → in
  `~~…~~` erhalten **und** zusätzlich im Reparaturkasten wörtlich
  zitiert. Doppelt gesichert. ✅
- **angebotsarchitektur, Z. 3:** Träger-Tabellenzeile → in `~~…~~`
  erhalten, inkl. der gestrichenen Träger-Zuweisung. ✅
- **anwalts-briefing, Z. 1:** „Repo-Stand"-Zeile → identisch wieder
  eingesetzt, nur um den R17-A-Nachtrag verlängert. Wortgleich geprüft:
  der gesamte R16-A-Text inkl. „⚠️ Zweiter Messstand vor dem Commit:
  `686ff18`" kehrt unverändert wieder. ✅
- **anwalts-briefing, Z. 2:** „Den Beschluss 20 W 37/24 haben wir nicht
  beschafft." → `~~…~~`. ✅
- **anwalts-briefing, Z. 3–7:** der EuGH-Absatz wurde umgebrochen. Wort
  für Wort gegengelesen: Die zwei überholten Aussagen stehen in `~~…~~`;
  der **Vorbehalt, der weiter gilt**, bleibt ungestrichen erhalten
  („Verfahrenssprache war Niederländisch; auch die englische Fassung ist
  eine Übersetzung, und eine eigene Übersetzung haben wir nicht
  angefertigt"). Einzige inhaltliche Änderung: „Rn. 56 lautet **dort**:"
  → „Rn. 56 lautet **in der englischen Fassung**:" — das ist eine
  notwendige Präzisierung, seit zwei Fassungen vorliegen, **kein
  Verlust**. ✅

**Bewertung:** Das ist der sauberste Löschungsbefund, den ich in diesem
Repo gemessen habe. Bemerkenswert insbesondere, dass der weiter
geltende Teil des EuGH-Vorbehalts (Übersetzungskette) beim Umbrechen
**nicht** mit weggestrichen wurde — genau dort geht sonst der Vorbehalt
verloren.

---

### Kategorie 5 — Fließtext neben Zitaten (L-27) und der eigene Reparaturtext (L-49)

Die drei stärksten Funde dieser Kategorie stehen oben, weil sie
schwerer wiegen: **S-1** (Superlativ im Fließtext einer Überschrift),
**M-1** („§ 5 UWG" im Fließtext), **M-5** (Rechtsfolgen im
Betriebsfolgen-Fließtext). Zusätzlich:

**M-2 · mittel · „77 von 77" ist auf einem ANDEREN Zählweg gemessen als
„63 von 77" — der deklarierte Zählweg liefert 68 von 77.**
*(Fundstelle: `handel/kanal-rechtsmatrix.md`, Kasten „🔧 KORREKTUR
17.08.2026 (R17-A)", Satz „**Neuer Stand nach dieser Runde: 77 von 77.**"
sowie die Überschrift des folgenden Abschnitts „Block 79–155 jetzt
77/77" und der Schlusssatz „Abdeckung Block 79–155 nach diesem
Nachtrag: **77 / 77**")*

- **Was ich reproduziert habe — und was bestätigt ist.** Mit einem
  eigenen, unabhängig gebauten Zähler (Node; Muster `Rn\.` + Zahlenkette,
  Expansion von `–`/`-`/`bis`, Komma-/Schrägstrich-/`und`-Ketten,
  `f.`/`ff.`) gegen `git show 926ca3c:handel/kanal-rechtsmatrix.md`:
  **63 von 77 genannt, 14 fehlend: 121, 122, 123, 126, 138, 139, 140,
  149, 150, 151, 152, 153, 154, 155.** Das ist **zeichengleich** die
  Liste des Baus, inklusive der Neufunde **149 und 150**. Summenprobe
  63 + 14 = 77. **Die Korrektur der delegierten R16-Zahl ist damit
  unabhängig bestätigt.**
  **Zweiter Lesekanal für die 14** (weil ein Negativ einen zweiten Kanal
  braucht): je `grep -o "Rn\. <n>"` = **0** und
  `grep -c "^| \*\*<n>\*\* |"` = **0** für alle vierzehn; kein
  Spannenmuster im Bereich 1xx deckt sie ab
  (`grep -o "Rn\. 1[0-5][0-9] *[-–] *1[0-9][0-9]"` = 0 Treffer).
  Stichprobe der Gegenrichtung: Rn. 124 = 1, 125 = 1, 127 = 2, 137 = 2,
  141 = 3, 147 = 2, 148 = 1 — der Zähler trifft.
- **Der Befund.** Derselbe Zähler gegen `af92adb` liefert **68 von 77**,
  nicht 77. Die restlichen **neun** (121, 122, 123, 126, 151, 152, 153,
  154, 155) erscheinen im neuen Nachtrag **ausschließlich als
  Tabellenzelle** `| **121** |`, nie als „Rn. 121". Gegenprobe im
  Klartext: `grep -o "Rn\. 121" <matrix@af92adb> | wc -l` = **0**,
  während `grep -o "Rn. 88"` = **11** und `grep -o "Rn. 111"` = **14**
  (Positivkontrolle) und `grep -o "Rn. 300"` = **0** (Gegenkontrolle).
  Erst mit dem zusätzlichen Kanal „Tabellenzelle" ergibt sich 77/77.
- **Warum das zählt.** Die „63" ist der **Vorher**-Wert, die „77" der
  **Nachher**-Wert derselben Kennzahl — gemessen mit zwei verschiedenen
  Linealen. Genau das ist die Klasse „Bestandszahlen, die die eigene
  Änderung bewerten, gegen den Vorher-Stand messen". Verschärfend: Der
  Kasten **weiß es** und sagt es sogar — „(diese Zellform existiert im
  Dokument … **und wird vom Rn.-Muster nicht erfasst**)" — und zieht
  daraus keine Konsequenz für die eigene Ergebniszahl. **Die Aussage
  ist sachlich richtig** (alle 14 sind tatsächlich behandelt); falsch
  ist nur, dass sie unter dem deklarierten Zählweg nicht herauskommt.
- **Vorschlag:** Den Zählweg-Satz um einen Halbsatz ergänzen: „Der
  Nachher-Stand zählt **zwei** Kanäle — `Rn. <n>` **und** die
  Tabellenzellform `| **<n>** |`; unter dem reinen Rn.-Muster sind es
  68 von 77, die übrigen neun stehen als Tabellenzeile im Nachtrag."
  Und: den Vorher-Wert im selben Doppel-Kanal nachmessen (bleibt 63 —
  von mir geprüft, `Zelle=0` für alle 14 bei `926ca3c`), damit
  Vorher/Nachher auf demselben Lineal stehen.

**M-3 · mittel · Die Rn.-126-Zeile macht aus „nicht geltend gemacht" ein
„erfüllt keinen" — und darauf ruht die Auffangweg-Aussage.**
*(Fundstelle: `handel/kanal-rechtsmatrix.md`, Tabelle der vierzehn
Randnummern, Zeile **126**)*

- **Bau (Spalte „Inhalt"):** „Der Verstoß **erfüllt keinen** der
  speziellen Unlauterkeitstatbestände der §§ 4a ff. UWG (nicht
  aggressiv, nicht irreführend, kein Vorenthalten)".
- **Quelle (Z. 380, Rn. 126, von mir vollständig gelesen):** „Es ist
  **weder von dem Kläger geltend gemacht noch drängt es sich auf**,
  dass die angegriffene … Geschäftspraxis … zugleich einen der
  speziellen Unlauterkeitstatbestände der §§ 4a ff. UWG verletzt …".
  Zählweg: `grep -o "weder von dem Kläger geltend gemacht noch drängt
  es sich auf"` = **1**; `grep -o "erfüllt keinen"` = **0**.
- **Der Unterschied ist tragend, nicht sprachlich.** Das Gericht hat
  **nicht** geprüft und verneint, sondern festgestellt, dass es dazu
  keinen Vortrag gab und sich nichts aufdrängte — eine Aussage über den
  Prozessstoff, nicht über die Rechtslage. Der Bau baut darauf die
  Folgeaussage: „§ 3a UWG und § 3 Abs. 2 UWG kommen im Urteil **erst zum
  Zug, nachdem die Spezialtatbestände verneint sind**. Sie sind der
  Auffangweg, nicht der erste Zugriff." Ein **Prüfungs**-Verhältnis wird
  aus einer **Vortrags**-Feststellung abgeleitet.
- ⚠️ **Und die Doppelbegründung derselben Runde spricht dagegen:** Rn. 136
  (vom Bau selbst zitiert) sagt, das Gericht lasse offen, welche Norm
  „im Allgemeinen in erster Linie … heranzuziehen ist" — es legt gerade
  **keine** Rangfolge fest.
- **Vorschlag:** Zelle wörtlich fassen („weder geltend gemacht noch
  drängt es sich auf, dass …") und die Wirkungsspalte auf „für unser
  Verständnis: Die Spezialtatbestände waren im dortigen Fall **nicht
  Streitstoff**; eine Rangfolge stellt das Urteil ausdrücklich nicht
  auf (Rn. 136)" umstellen.

**H-6 · Hinweis · Ein zweiter, ungeprüfter Superlativ derselben Klasse in
derselben Tabelle.** Rn.-138-Zeile: „Die Anwendbarkeit ist die
**einzige**, die im dortigen Fall glatt durchlief." Rn. 141 („sind
Marktverhaltensregelungen in diesem Sinn") und Rn. 146 („ist … zu
bejahen") bejahen die beiden anderen Achsen ebenfalls. Unter „glatt" =
„ohne erörterten Gegeneinwand" ist die Aussage vertretbar (Rn. 142
beginnt mit „Zwar … doch", Rn. 146 erörtert), aber das Kriterium steht
nicht im Text — und ein Superlativ ohne benanntes Kriterium ist eine
Behauptung. **Vorschlag:** „…die einzige, die das Urteil ohne erörterten
Gegeneinwand bejaht (Rn. 138 ‚liegt ebenfalls vor'; Rn. 142 und 146
erörtern Einwände)."

**H-2 · Hinweis · L-49 am eigenen Reparaturtext: nackte Zeilennummer,
acht Zeilen unter einer korrekt gesetzten.**
*(Fundstelle: `handel/angebotsarchitektur.md`, Träger-Tabelle, Zeile
„Superlative über O-2", Korrekturtext)* Dort steht „die Stelle in
**diesem** Dokument (§ 6-Nachtrag, **Z. ~251**)". Im Reparaturkasten
desselben Commits, acht Zeilen darüber, steht die richtige Form:
„Z. 394–398 @`4fa530b`". Eine Zeilennummer ohne Commit-Stand veraltet
mit dem nächsten Edit — und dieser Commit fügt der Datei 25 Zeilen zu.
**Vorschlag:** „(§ 6-Nachtrag zu O-2, Reparaturkasten 17.08.2026)" —
Abschnittsbezug statt Zeile.

**H-9 · Hinweis · Verweis ohne Abschnittsnennung.**
*(Fundstelle: `handel/preismodell-optionen.md`, Bestandsvermerk
17.08.2026, Schlusssatz)* „Die vollständige Fassung mit dem zusätzlichen
Rn.-86-Vorbehalt … **steht in der Rechtsmatrix**." Die Rechtsmatrix hat
1.848 Zeilen. **Vorschlag:** Abschnittsbezug ergänzen (Bestandsvermerk
R16-A zu Befund R15A-N-4, im A7-Block).
*(Positiv festzuhalten: Der Vermerk sagt ausdrücklich, dass die
Kurzfassung **unbequemer** ausfällt als die Langfassung und
„mitgelesen" gehört. Eine eingeräumte Unvollständigkeit, die ihren
eigenen Grund nennt — genau die richtige Form.)*

**H-7 · Hinweis · Der Bau hat die „sieben" richtig gemessen, den
Folgewiderspruch in der Quelle aber nicht adressiert.**
*(Fundstelle: `handel/anwalts-briefing-2026-08.md`, Kopf-Tabelle,
Zeile „Änderungen R17-A", Eingriff (4); Quelle:
`akquise/sperrdatei-struktur.md`)*

- **Nachgezählt, bestätigt:** `akquise/sperrdatei-struktur.md` sagt vor
  § 3a: „`ANL-3`-Einträge tragen **nur** `SP-02`, `SP-03`, `SP-05` bis
  `SP-08` und `SP-10` — **niemals `SP-04`**". Das sind SP-02, 03, 05,
  06, 07, 08, 10 = **7** ✓. Zählweg: `grep -on "SP-[0-9][0-9]"` über die
  ganze Datei, Zeile 184/185 einzeln gelesen. **Auch die Korrektur des
  Baus am R16-A-Zusatz („schließt **nur** SP-04 und das Grund-Feld aus")
  ist zutreffend** — eine abschließende Positivliste ist keine
  Ausschlussliste, und der Bau hat das exakt so begründet. Das ist
  ein sauberer Selbstfang.
- **Was offen bleibt:** Aus derselben Positivliste fallen **`SP-01`
  (Sperr-ID)** und **`SP-09` (Reichweite der Sperre)** heraus — beide
  in der Feldtabelle derselben Datei als **✅ Pflicht** geführt (SP-09
  sogar mit dem Vermerk „Fester Wert `alle Kanäle`. Das Feld hat keinen
  zweiten zulässigen Wert."). Ein `ANL-3`-Eintrag nach Zeile 184 wäre
  also ohne Sperr-ID und ohne Reichweitenangabe — die Quelle
  widerspricht sich.
- **Schwere: Hinweis** — die Datei liegt außerhalb des R17-A-Scopes und
  wurde in `af92adb` nicht angefasst.
- **Vorschlag:** Als Nebenbefund mit Zielort
  `akquise/sperrdatei-struktur.md` § 3 an die Leitsession melden; nicht
  in dieser Runde reparieren (fremder Scope).

---

### Kategorie 6 — Briefing: „Welcher Satz würde die Antwort des Anwalts ändern, wenn er ihn läse — und steht er drin?"

Geprüft wurde der gesamte R17-A-Zuwachs in
`handel/anwalts-briefing-2026-08.md` (119 neue Zeilen, vollständig
gelesen).

**Der Satz, der die Antwort ändern würde und FALSCH drinsteht:** die
Prämisse aus **S-1** — „sie ist die einzige, deren Tatbestand B2B
ausdrücklich einschließt", mitsamt der Frage „dort fehlt die
Adressatengrenze, an der die **beiden anderen** Schienen sich reiben".
Ein Anwalt, der diesen Rahmen übernimmt, prüft § 3a UWG unter einer
Verbraucherbindung, die die Norm nicht hat. **Das ist der teuerste Satz
des Dokuments.** Siehe S-1 für die Reparatur.

**M-6 · mittel · Die Ursache eines eigenen Alt-Negativs wird im
Anwaltsdokument als Tatsache behauptet, während das eigene
Beschaffungsprotokoll sie ausdrücklich als „nicht feststellbar" führt.**
*(Fundstelle: `handel/anwalts-briefing-2026-08.md`, § 2.3, Nachtrag
17.08.2026 zur deutschen EuGH-Fassung)*

- **Briefing:** „der frühere Befund ‚über den amtlichen Kanal nicht
  abrufbar' war ein **Werkzeug-**, kein Quellenbefund — der Abruf
  antwortet mit einem Redirect (HTTP 303), **dem unser damaliger Aufruf
  nicht folgte**."
- **Eigenes Beschaffungsprotokoll** (`sensibel/rohbelege-R17-A/
  00-quellenliste.md`, Abschnitt 2, von mir vollständig gelesen): „**Ein
  Werkzeug-Negativ misst einen KANAL zu einem Zeitpunkt, keine
  Systemeigenschaft** — ob der R09-A-Lauf ohne `-L` lief **oder die
  Quelle sich geändert hat**, ist von hier aus **nicht feststellbar**;
  belegt ist nur der heutige 200er. Der Alt-Befund wird deshalb **nicht
  als Fehler**, sondern als **überholt** geführt."
- **Der Beleg für „unser damaliger Aufruf folgte nicht" existiert
  nicht.** Der R09-A-Aufruf ist nicht protokolliert; die R09-A-Quellenliste
  hält nur das Ergebnis fest (404). Belegt ist der heutige 303/200 —
  das ist eine Aussage über **heute**, nicht über den damaligen Aufruf.
- **Warum die Richtung zählt:** Die Drift läuft von der korrekt
  vorsichtigen internen Quelle zum **außenwirksamen** Dokument, und sie
  entlastet die **eigene Session** („unser Werkzeug war schuld, die
  Quelle war immer da"). Genau die Klasse „Entwarnung über die eigene
  Handlung". Für den Anwalt ist der Unterschied nicht folgenlos: Ob
  eine amtliche Quelle seit 2024 stabil abrufbar war oder erst seit
  heute, ist eine Aussage über die Verlässlichkeit unserer
  Recherchekette.
- **Vorschlag:** Auf den Stand der eigenen Quellenliste zurückführen:
  „…war ein **Werkzeug-**, kein Quellenbefund: Der Abruf antwortet
  heute mit einem Redirect (HTTP 303), dem erst `curl -L` folgt. **Ob
  der damalige Lauf daran scheiterte oder die Quelle sich geändert hat,
  ist nicht mehr feststellbar** — belegt ist der heutige Abruf."

**Was im Briefing gut ist (ausdrücklich, weil es die Antwort ebenfalls
ändert — in die richtige Richtung):**

- „**Falls Ihnen über juris/beck-online der Zugriff möglich ist, wäre
  das die Stelle, an der die Gegenauffassung tragend begründet ist.**"
  — eine konkrete, für den Empfänger ausführbare Bitte statt einer
  Leerstelle. Vorbildlich.
- Der **Zitierhinweis** auf die Datumsuneinheitlichkeit des Beschlusses.
  Von mir am Objekt bestätigt: Tenor „06. Mai 2024" (Z. 19) ↔ Rn. 5
  „06. Mai 2023" (Z. 25); Tenor „27. Mai 2024" ↔ Rn. 6 „25. Mai 2024"
  (Z. 26) ↔ Rn. 22 „27. Mai 2024" (Z. 42). **Alle vier Stellen
  reproduziert.** Ein Anwalt, der ohne diesen Hinweis aus dem Beschluss
  zitiert, greift daneben — der Satz gehört genau dorthin.
- Der Absatz „*(Wir legen das als Beobachtung vor, nicht als Ergebnis.
  Uns ist aufgefallen, dass diese Schiene in unserem eigenen Bestand
  bisher fehlte …)*" — die richtige Belegstufe im Kundentext, nicht als
  interne Notation.
- Die Zeile „Änderungen R17-A" trägt die **Selbstkorrektur** des
  R16-A-Eintrags direkt darüber, offen und mit Begründung. Genau die
  geforderte Form („Reparaturen sichtbar machen, nicht still glätten").

---

## § 3 Nicht erhoben / nicht prüfbar — mit Fundorten

Dies ist die erste Nacharbeits-Liste, kein Haftungsausschluss. Jede
Zeile nennt, **wo** die ungeprüfte Stelle liegt.

1. **H-1 · Die Vollständigkeit der Auswertung Rn. 156–273 ist am
   eingefrorenen Prüfstand NICHT PRÜFBAR.**
   **Fundort:** `handel/kanal-rechtsmatrix.md` @`af92adb`, Schlusszeile
   des Nachtrags „Es gibt eine DRITTE Unlauterkeits-Schiene": „*(Vollständige
   Auswertung Rn. 156–273 mit Wirkung je Abschnitt:
   `protokolle/R17-A-abschluss.md`, Abschnitt ‚Leseraum Rn. 156–273'.)*"
   **Messung:** `git ls-tree af92adb protokolle/` enthält
   **kein** `R17-A-abschluss.md` (einziger R17-Treffer:
   `R17-leit-verdichtung.md`). Die Datei existiert im Arbeitsbaum, ist
   aber nicht Teil des Prüfstands — der Verweis wird planmäßig erst mit
   dem Abschluss-Commit eingelöst. **Folge für die Abnahme:** Der Satz
   „Der Urteilsblock ab Rn. 156 war im ganzen Bestand nie gelesen" und
   die Behauptung einer *vollständigen* Auswertung von 156–273 konnte
   ich **nicht** verifizieren. Ich habe aus diesem Block **nur** die
   vom Bau zitierten Randnummern plus 210–220 und 235–250 gelesen.
   **Nacharbeit:** Die Leitsession prüft das Abschlussprotokoll auf den
   Abschnitt und den Nenner; erst dann trägt die Klammer.
   *(Der Satz „nie gelesen" ist von mir immerhin einseitig gestützt:
   `grep -rl --include="*.md" "Rn\. 22[1-9]" .` traf vor dieser Runde
   keine Bestandsdatei — geprüft über den Alt-Stand
   `git show 926ca3c:handel/kanal-rechtsmatrix.md`, `Rn. 221` = 0.)*
2. **Der Leseraum Rn. 178–209 (Gliederungspunkt „9.", Antrag III —
   Klausel über die Verpflichtung …) ist von MIR nicht gelesen und
   kommt im Bau nirgends vor.**
   **Fundort:** `sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.txt`,
   **Zeilen 482–547**. Das ist der einzige zusammenhängende Abschnitt
   des Urteils zwischen 156 und 273, zu dem der Nachtrag **keine
   einzige** Randnummer nennt. Ob dort etwas Bestandsrelevantes steht
   (es geht um eine AGB-/Klauselfrage, also potenziell um unsere
   Vertragsgestaltung), ist **nicht erhoben** — weder von mir noch
   nachweisbar vom Bau.
   **Nacharbeit:** höchste Priorität der Kategorie-1-Liste.
3. **Rn. 156–175 und 177–209 habe ich nur punktuell gelesen** (166, 176
   im Volltext; der Rest nur über Gliederungsmarker).
   **Fundort:** LG-Rohbeleg **Z. 440–479 und 482–547**.
4. **Rn. 263–265 und 268–273 (Kostenrecht, Abmahnkosten, Zinsen)** habe
   ich nur über Rn. 266/267/271 gestreift.
   **Fundort:** LG-Rohbeleg **Z. 654–659, 664–674**. Der Bau nimmt
   266/267 auf und routet sie nach B2/B3 — ob 263–265 die
   Anspruchsgrundlage anders zuschneiden, ist nicht erhoben.
5. **Die Textextraktion des OLG-Beschlusses ist NICHT gegen ihr
   HTML-Original gegengelesen.**
   **Fundort:** `sensibel/rohbelege-R17-A/olg-duesseldorf-20-W-37-24.html`
   (17.406 B) gegen `.txt` (8.406 B). Ich habe die Rn.-Vollzähligkeit
   (1–27) und die Zeichenzahl geprüft, **nicht**, ob die Extraktion
   Inhalte ohne Textebene übersprungen hat. Bei einer NRWE-Seite ist
   das unwahrscheinlich, aber ungemessen.
6. **Die deutsche EuGH-Fassung ist nur an Rn. 56 (± Nachbarn) geprüft.**
   **Fundort:** `sensibel/rohbelege-R17-A/eugh-c-621-22-DE-volltext.txt`,
   **Z. 1–199 und 206–217 ungelesen**. Die Behauptung der Quellenliste
   „Rn. 1–58 + Tenor" habe ich **nicht** verifiziert. Die
   Sprachfassungs-Aussage des Baus ist auf Rn. 56 beschränkt und trägt
   nur dort — das sagt sie auch selbst.
7. **I-20 U 107/23 und I-20 U 117/23 sind nicht beschafft.** Der Bau
   führt das korrekt als **Posten mit Suchweg**, nicht als
   Negativbefund. Ich habe den Suchweg **nicht nachvollzogen** (keine
   eigenen Abrufe). **Fundort:** `00-quellenliste.md`, Abschnitt „Nicht
   beschafft — mit Suchweg". Aus dem Beschluss selbst (Rn. 22) ist nur
   belegt, **dass** es diese Verfahren gibt.
8. **Ob `926ca3c` der richtige Rundenstart ist und `af92adb` der
   einzige R17-A-Bau-Commit,** habe ich nur innerhalb des vorgegebenen
   Spans geprüft (Ergebnis: die fünf Dateien werden ausschließlich von
   `af92adb` berührt). Ob R17-A davor oder danach weitere Commits
   gesetzt hat, ist **nicht erhoben** — der Arbeitsbaum war
   auftragsgemäß gesperrt.
9. **Der Bestand außerhalb der geänderten Hunks ist nicht
   durchgelesen.** `handel/kanal-rechtsmatrix.md` hat 1.848 Zeilen; ich
   habe **am Stück nur Z. 1780–1805** gelesen. Ob die neuen Aussagen
   an anderen Stellen der Datei Widersprüche erzeugen, ist nur für die
   Suchbegriffe geprüft, die ich gebildet habe (`sonstigen
   Marktteilnehmern`, `einzige, deren Tatbestand`, `fortwirkt`,
   `Rn. <n>`) — **einer davon hat getroffen (S-1, Widerlegung 2).**
   Dass er getroffen hat, ist ein Grund anzunehmen, dass ein
   vollständiger Durchgang mehr fände.

---

## § 4 Drei Selbstfragen

**1. „Hättest du diese Funde auch OHNE den Kategorien-Hinweis
gefunden?"**

**Teils — und die Aufteilung ist unbequem.**

- **S-1 (der schwere Befund): ja, aber nicht so schnell.** Der Auftrag
  hat mich mit der Formulierung „Die Behauptung, § 5a Abs. 1 UWG sei
  … **die einzige**, deren Tatbestand ‚sonstige Marktteilnehmer' nennt.
  Stimmt das am Urteilstext?" direkt darauf gestoßen. Ich hätte den
  Superlativ vermutlich auch beim Lesen der Überschrift markiert —
  Superlative sind ein stehender Prüfreflex —, aber ich wäre womöglich
  bei **einer** Widerlegung stehen geblieben (Rn. 143). Die zweite
  (§ 5a Abs. 4 im selben Dokument) habe ich nur gefunden, weil ich nach
  dem Hinweis einen Kontextlauf über `sonstigen Marktteilnehmern` in
  der **ganzen Matrix** gemacht habe — nicht nur im Diff. Ohne den
  Hinweis hätte ich den Lauf wahrscheinlich auf den Diff beschränkt und
  den stärksten Beleg (Selbstwiderspruch im selben Dokument) verpasst.
- **M-2 (77/77 auf zwei Linealen): nein, wahrscheinlich nicht.** Der
  Auftrag hat mich gezwungen, den Zähler selbst zu bauen. Hätte ich nur
  die Zahl gegengelesen, hätte ich „14 Randnummern ergänzt, 63+14=77"
  für stimmig gehalten — die Summenprobe geht ja auf. Der Bruch
  erschien erst, als mein Zähler am **neuen** Stand 68 lieferte und ich
  der Differenz nachging.
- **M-4 (Rn. 243/244 aus dem Antrag-V-Block): nein.** Ich habe das nur
  gefunden, weil die Anweisung „Aussage UND Fundstelle GETRENNT prüfen"
  mich veranlasst hat, für jedes Zitat den **Gliederungspunkt** zu
  bestimmen statt nur die Randnummer zu bestätigen. Ein reiner
  Zitatabgleich hätte 34 von 34 grün gemeldet.
- **M-7/M-8 (was aus dem OLG nicht ankam): nein.** Ohne die Anweisung
  „von der QUELLE rückwärts, Leseraum ist das GANZE Dokument" hätte ich
  den Beschluss entlang der zitierten Randnummern geprüft — dann wären
  Rn. 19 und Rn. 27 nie in den Blick geraten, weil der Bau sie nicht
  nennt. Das ist genau der Mechanismus, vor dem die Regel warnt.
- **M-6 (Belegstufen-Drift im Briefing): ja.** Der Quellen-Abgleich
  Rohbeleg ↔ Kundendokument ist ein eigener Prüfschritt, den ich
  ohnehin gefahren wäre.

**2. „Welche Verfälschung hätte dein Verfahren NICHT gefangen?"**

Vier, davon zwei ernst:

- **Eine korrekte Randnummer mit korrektem Zitat, aber falscher
  WIRKUNGS-Spalte.** Mein Zitatlauf prüft Wortlaut und Fundstelle
  mechanisch; die Spalte „Wirkung auf den Bestand" der 14-Rn.-Tabelle
  habe ich nur **gelesen und beurteilt**, nicht gemessen — es gibt dort
  auch nichts zu messen. Hätte der Bau bei Rn. 151 „keine" statt
  „Bestand ergänzt" eingetragen, wäre mein Verfahren stumm geblieben.
  Ich habe die Einstufungen einzeln gegengelesen und halte 14 von 14
  für vertretbar, aber das ist ein **Urteil**, keine Messung. Das ist
  die Achse, an der die Summenprobe blind ist — und meine Prüfung ist
  es dort auch.
- **Eine Auslassung im Leseraum Rn. 178–209.** Ich habe den Block nicht
  gelesen (§ 3 Nr. 2). Läge dort ein bestandskippender Satz, hätte
  weder der Bau noch ich ihn gefunden — und mein Protokoll sähe
  trotzdem gründlich aus. Das ist die gefährlichste Lücke dieses
  Protokolls.
- **Eine Verfälschung im ungelesenen Teil der DE-EuGH-Fassung.** Ich
  habe Rn. 56 verifiziert und daraus geschlossen, die Sprachfassungs-
  Aussage halte. Sie hält **für Rn. 56**. Wäre in Rn. 40 der DE-Fassung
  eine abweichende Randnummerierung, hätte ich es nicht gemerkt.
- **Ein Fehler in den Teilen des Bestands, die af92adb nicht anfasst,
  aber die neuen Aussagen kippen.** Ich habe die Matrix nicht
  vollständig gelesen (§ 3 Nr. 9).

**Drei Werkzeugfehler in meinem eigenen Lauf, die ich offenlegen muss**
*(die vier falschen ZAHLEN stehen gesondert unter Frage 3)*:

- Mein erster Zähler meldete `Rn. 999` als „genannt" — ein **falscher
  Alarm meines eigenen Musters**: Mein `\d{1,3}` griff aus der
  Zeichenkette `Rn. 9999` die ersten drei Ziffern ab. Die Zeichenkette
  steht im Dokument, weil der Bau seine eigene Gegenkontrolle
  hineingeschrieben hat (H-3b). **Eine Zahl, die nicht sein kann, ist
  zuerst ein Werkzeugfehler** — hier hat die Regel gegriffen; ich habe
  die Gegenkontrolle auf `Rn. 300` umgestellt (= 0). Hätte ich es nicht
  bemerkt, hätte ich dem Dokument einen erfundenen Verweis vorgeworfen.
- Mein Randnummern-Vollzähligkeitslauf am OLG-Beschluss meldete
  zunächst „Rn. 10, 12, 14, 17, 24, 26 fehlen". Das war **mein**
  Muster: Es verlangte einen Buchstaben nach der Zahl, und genau diese
  sechs sind Gliederungs-Randnummern (`101.`, `122.`, `142.1.` …), auf
  die eine Ziffer folgt. Am Objekt nachgelesen: alle 27 vorhanden. Die
  Behauptung des Baus stimmt; beinahe hätte ich sie fälschlich
  bestritten.
- Ein dritter, kleinerer: Ein Node-Lauf mit
  Git-Bash-Pfad (`/tmp/pr/neu.md`) scheiterte mit `ENOENT` auf
  `C:\tmp\pr\neu.md` und lieferte danach in einer zweiten Fassung
  durchgehend `false` — eine Ausgabe, die **in allen Fällen dasselbe
  sagt, ist ein Werkzeugfehler, kein Ergebnis**. Ich habe die
  betroffenen Prüfungen auf den `grep`-Kanal umgestellt; alle in diesem
  Protokoll berichteten Zahlen stammen aus einem Lauf, dessen
  Positivkontrolle im selben Aufruf getroffen hat.

**3. „Welche deiner eigenen Verneinungen ist am schwächsten belegt?"**

**Die schwächste war M-5, Teil Rn. 249 — und sie ist beim Gegenlesen
GEPLATZT.** Ich hatte behauptet, „Unterlassungserklärung" komme im
Urteil nicht vor, und das mit `grep -o … | wc -l` = **0** belegt.
Beim abschließenden Gegenlauf über **alle** Zahlen dieses Protokolls
ergab dasselbe Muster **1** (Rn. 237), und die mitgeschriebene
„Positivkontrolle" `Wiederholung` = 3 ergab **6**. Zwei falsche Zahlen
in einem Satz, beide in die Richtung meiner eigenen These.
**Was das über mein Verfahren sagt:** Die erste Fassung von M-5 war
geschrieben, bevor der Zählweg lief — die Zahlen wurden nachträglich
dazugesetzt und nicht mehr gegengelesen. Genau der Fehler, den ich in
M-2 dem Bau vorhalte. Repariert ist die Stelle nicht durch Abschwächen,
sondern durch **Streichen der zu weiten Verneinung** und Ersetzen durch
eine enge, mit vier zusätzlichen Sachbegriffs-Läufen belegte Aussage
(§ 2, M-5). **Der Befund selbst trägt auch ohne die Verneinung**, weil
er sich auf das stützt, was in Rn. 249 **steht**.

**Die zweitschwächste ist mir im selben Gegenlauf um die Ohren
geflogen:** meine Aussage „Rn. 224 fehlt im Bestand vollständig,
`grep -rl` = 0". Der Lauf ergab **1 Datei** — `protokolle/
R17-A-pruefer.md`, also **dieses Protokoll**, in das ich Rn. 224
Minuten zuvor selbst geschrieben hatte. **Ein Prüfling, der zugleich im
Beleg-Pool liegt, bestätigt sich selbst.** Ich habe unter H-3 dem Bau
vorgehalten, seine eigene Gegenkontrolle `Rn. 9999` ins geprüfte
Dokument geschrieben zu haben — und bin derselben Klasse eine
Bildschirmseite später aufgesessen. Korrigiert mit Selbstausschluss
(`| grep -v R17-A-pruefer`), Positivkontrolle `Rn. 221` = 3 und
Gegenkontrolle `Rn. 3333` = 0.

**Am drittschwächsten: meine Behauptung in § 3 Nr. 2**, der Block
Rn. 178–209 komme „im Bau nirgends vor". Zählweg: die Randnummern
178–209 tauchen in der Nachtrags-Tabelle nicht auf — das habe ich
**gesehen, nicht gemessen** (kein Lauf über alle 32 Zahlen). Als
**Prüfauftrag** formuliert, nicht als Feststellung.

**Und eine Verneinung, die ich zurückziehe:** meine Ausgangshypothese,
die Rn.-220-Aussage zur fehlenden Karenzfrist sei im Bestand nicht
angekommen. Sie ist angekommen, korrekt und mit eigener
Vorfassungs-Korrektur (§ 2, Kategorie 1, Kasten). Ich hatte den Befund
bereits als „mittel bis schwer" notiert, bevor die Gegenprobe lief —
ein Beleg dafür, dass auch beim Prüfer die Fundthese vor der Messung
kommt.

**Bilanz der Selbstprüfung: Von den ~40 Zahlen dieses Protokolls habe
ich am Ende jede einzelne in einem gesonderten Lauf gegengelesen. Vier
waren falsch (`Marktteilnehmer` 15→10, `Unterlassungserklärung` 0→1,
`Wiederholung` 3→6, `Rn. 224` 0→1-kontaminiert). Alle vier standen in
Sätzen, die ich ohne den Gegenlauf für belegt gehalten hätte, und drei
davon stützten meine eigene Befundthese.** Wer dieses Protokoll
abnimmt, sollte die verbleibenden Zahlen nicht für sicherer halten als
diese vier es waren.

---

## § 5 Disposition — Vorschlag an die Leitsession

| # | Befund | Schwere | Vorschlag |
|---|---|---|---|
| **S-1** | Superlativ „die einzige, deren Tatbestand B2B ausdrücklich einschließt" (3 Dokumente, incl. Briefing) | **schwer** | **vor der Abnahme reparieren** — streichen, nicht abschwächen; Briefing-Frage (a) neu fassen; Klassen-Rücklauf über alle R17-A-Absätze |
| M-1 | „(§ 5 UWG)" bei `UWG` = 0 | mittel | reparieren (Klammer) |
| M-2 | 77/77 auf anderem Zählweg als 63/77 | mittel | Zählweg-Satz um den zweiten Kanal ergänzen |
| M-3 | Rn. 126 „erfüllt keinen" statt „weder geltend gemacht" | mittel | Zelle wörtlich fassen, Folgesatz umstellen |
| M-4 | Rn. 243/244 aus dem Antrag-V-Block, Rn. 224 fehlt | mittel | Halbsatz in 3 Dokumenten; Rn. 224 aufnehmen |
| M-5 | Rechtsfolgen ohne Anwaltsvorbehalt (Rn. 249/250) | mittel | zurückschneiden; Beauftragten-Frage als Teilfrage 1d ins Briefing |
| M-6 | Ursachenbehauptung zum R09-A-Negativ im Briefing | mittel | auf den Stand der eigenen Quellenliste zurückführen |
| M-7 | OLG Rn. 19 nicht angekommen | mittel | zwei Sätze ergänzen (Punkt 6) |
| M-8 | OLG Rn. 27 nicht angekommen | mittel | als Quellenbeleg in Punkt 4 |
| H-1 | Zielort `R17-A-abschluss.md` bei `af92adb` nicht vorhanden | Hinweis | mit dem Abschluss-Commit einlösen; Leitsession prüft den Nenner |
| H-2 | „Z. ~251" ohne Commit-Bezug | Hinweis | Abschnittsbezug |
| H-3 | „verbleiben" ohne Ausnahmelisten-Eintrag; `Rn. 9999` als Kontamination | Hinweis | Ausnahmeliste + Gegenkontrollwert entschärfen |
| H-4 | „existiert es im Prozess nicht" | Hinweis | umformulieren |
| H-5 | „Das ist keine Bewertung" | Hinweis | streichen, durch M-8 ersetzen |
| H-6 | zweiter Superlativ (Rn.-138-Zeile) | Hinweis | Kriterium benennen |
| H-7 | `sperrdatei-struktur.md`: SP-01/SP-09 fallen aus der ANL-3-Positivliste | Hinweis | **Nebenbefund an die Leitsession**, fremder Scope |
| H-8 | Rn. 211/214 nicht angekommen | Hinweis | Rn. 214 als fünften Spiegelstrich |
| H-9 | Verweis „steht in der Rechtsmatrix" ohne Abschnitt | Hinweis | Abschnittsbezug |
| H-10 | Rn.-250-Zitat schluckt § 31 BGB | Hinweis | vollständig zitieren |

**Summenprobe: 1 + 8 + 10 = 19.**
⚠️ Die Summenprobe belegt die Vollzähligkeit dieser Liste gegen § 2,
**nicht** die Richtigkeit der Schwere-Einstufung — diese Achse ist
einzeln nachzulesen; jeder Eintrag trägt in § 2 seinen Grund.
Zusätzlich zu disponieren sind die **neun Einträge aus § 3** (nicht
erhoben / nicht prüfbar) — sie sind keine Befunde, aber Fundorte.

---

*Prüfer R17-A · unabhängig · Prüfstand `af92adb` · 17.08.2026.
Schreibrecht dieser Session: ausschließlich diese Datei. Nichts
committet.*
