# R14-A — Arbeitsprotokoll: Z-6-Auflösung + R40-N-6 + Belegstufen-Hebung

> **Session:** R14-A (Ben Beckman) · **Datum:** 13.08.2026 abends ·
> **Auftrag:** `protokolle/tagesplan-2026-08-13.md`, „Session-Prompts
> R14", Strang R14-A (Nachträge 6 + 8 des Firmen-Briefings).
> **Scope:** `handel/preismodell-optionen.md` ·
> `handel/preisliste-vorlaeufig.md` · `handel/angebotsarchitektur.md`
> (je nur markierte Nachträge) · dieses Protokoll.
> **Modell:** Statuszeile von der Session **nicht lesbar** —
> Umgebungsangabe: `claude-opus-5[1m]` (Opus 5, 1M-Kontext).
> Bestätigung bleibt User-Handgriff.
> **Diese Session hat nichts entschieden** — sie hat zwei
> Zentrale-Nachträge eingearbeitet.

---

## 0. Gelesene Quellen (mit Leseumfang und Zeilenspanne)

| Quelle | Umfang | Vermerk |
|---|---|---|
| `<FIRMENWURZEL>\zentrale\briefings\briefing-2026-08-13.md` | **vollständig, Z. 1–573** | Auftragsgemäß das GANZE Briefing, nicht nur die Nachträge (L-34) |
| `<FIRMENWURZEL>\heypensio\n8n-lizenz-z6-und-mcp-vorlage-2026-08.md` | Gliederung vollständig (34 Überschriften); **gelesen: § 0–§ 1 (Z. 1–120), § 3.6–§ 3.8 (Z. 443–732), § 5 (Z. 787–886), § 9 (Z. 1249–1310)** | Teil 2 (MCP-Entscheidungsvorlage, § 6–§ 8) **nicht** gelesen — für Z-6 nicht tragend, als Leseumfangs-Grenze hier ausgewiesen |
| `<FIRMENWURZEL>\zentrale\sensibel\entscheide-erhebungen-2026-08-13-wortlaut.md` | **vollständig, Z. 1–102** | git-ignoriert; Lesestand **13.08.2026 abends**. Kein Volltext ins Repo (D8) |
| `STATUS.md` (marketing) | vollständig | Session-Start-Lesereihenfolge |
| Eigene drei Zieldokumente | vollständig im Bereich aller Trefferstellen | s. § 1 |

**Existenzprüfung der drei fremden Quellen:** alle drei am 13.08.
abends selbst geprüft (`Test-Path`, Größen 32.370 / 87.976 / 4.988
Bytes). `<FIRMENWURZEL>` = `C:\Users\qwafa_2dwxzia\firma`, ermittelt per
`git rev-parse --show-toplevel` (fail-closed, F13).

---

## 1. Teil 1 — Z-6-Disposition: eigene Zählung, dann jede Stelle einzeln

### 1.1 Zählweg und Zählergebnis

**Zählweg:** Node-Skript über die Dateien im Ausgangsstand
(`git show HEAD:<datei>`, HEAD = `95fe3f1`), das jede Zeile mit `Z-6`
dem zuletzt gesehenen `#`/`##`/`###`-Kopf zuordnet; **zusätzlich** ein
zweiter Lauf über den *flach* gelesenen Text (Zeilenumbrüche und
Blockquote-Präfixe `> ` zu Leerzeichen normalisiert), um
zeilenübergreifend umbrochene Vorkommen zu fangen.

| Datei | Z-6: Zeilen | Z-6: Vorkommen | flach | **disponierte Fundstellen** |
|---|---|---|---|---|
| `preismodell-optionen.md` | 9 | 9 | 9 | **9** (8 mit Bezeichner + § 5.3 **ohne** Bezeichner; § 11 E-3 Punkt 4 belegt 2 Zeilen = 1 Fundstelle) |
| `preisliste-vorlaeufig.md` | 14 | 16 | 16 | **11** |
| `angebotsarchitektur.md` | 9 | 10 | 10 | **8** |

⚠️ **Zeile ≠ Vorkommen ≠ Fundstelle** — der Zählschlüssel steht an
jeder Zahl. Die Leitsessions-Messung (9/14/9 **Zeilen**) ist
**reproduziert**; die Abweichung zur heypensio-Angabe „**8**
Vorbehalts-Fundstellen im Preismodell-Papier" ist erwartbar und
aufgelöst: Die Quelle zählte selbst „8 Fundstellen der Zeichenkette
`Z-6` in 4 Abschnitten, **dazu § 5.3**, der die Sache **ohne den
Bezeichner** trägt" — also 8 + 1 = 9, exakt meine Zahl. Die Quelle
weist ihre Liste ausdrücklich als **MINDESTliste** aus; das
Erfolgskriterium ist der **Zustand** („keine Stelle behauptet mehr, die
Lizenz könne A3 kippen"), nicht die Zahl.

### 1.2 Dispositions-Tabelle — jede Trefferstelle einzeln

Kategorien: **(a)** Z-6-Vorbehalt → markierter Auflösungs-Nachtrag ·
**(b)** Stelle meint sachlich K04/Vapi/Z-5 oder den Architektur-Entscheid
→ Vorbehalt **bleibt**, präzisiert · **(c)** reine Erwähnung ohne
Vorbehaltscharakter → **dokumentierter Nicht-Edit**.

#### `handel/preismodell-optionen.md` (9)

| # | Fundstelle (Abschnitt) | Kat. | Disposition |
|---|---|---|---|
| P1 | **§ 5.3** (ohne Bezeichner — „möglicher K.-o.-Punkt für A3", Pseudo-Zitat, ④-Belegstufenkasten) | **a** | **WURZEL-Kasten** eingefügt: Auflösung, Umkehrung der Prämisse, B-1-Pseudo-Zitat ausgewiesen, drei Nicht-Aufgelöst-Punkte als Tabelle, AU-1…AU-4, Abweichung vom Formulierungsvorschlag begründet. **Alle anderen Stellen zeigen hierher** (Zeiger statt Zweitfassung) |
| P2 | **§ 5.4**, Nachtrag 13.08. („alles unter Z-6-Vorbehalt") | **a**+b | Zeiger-Nachtrag; **W-B-Zeilen-Warnung bleibt ausdrücklich stehen** (Architektur-Entscheid) |
| P3 | **§ 10**, Zulieferungstabelle Zeile Z-6 | **a** | über den § 10-Nachtrag erledigt (s. P4) |
| P4 | **§ 10**, Nachtrag „Z-6 hat einen Träger" | **a** | „Träger hat **geliefert**"; Z-6-Zeile erledigt; **K-1 und Z-5 ausdrücklich NICHT mit erledigt** |
| P5 | **§ 10**, Nachtrag „Z-5/Z-6 laufen parallel … alle Z-Punkte offen" | **a**+b | für Z-6 überholt, **für Z-5 unverändert gültig** |
| P6 | **§ 11**, ✅ E-3, Punkt 4 („kann A3 kippen") | **a** | Kern-Korrektur; **Punkte 1–3 unberührt und durch AU-2 gestützt**; Verweis auf E-4 bleibt richtig (dort läuft K04/Z-5) |
| P7 | **§ 11**, ☐ E-4-Frage („sie kann A3 kippen") | **a** | Frage bleibt im Wortlaut (sonst ist der Entscheid unlesbar), Kursiv-Nachtrag daneben |
| P8 | **§ 11**, ✅ E-4-Kasten (Belegstufen-Hinweis „Vorbehalt ohne Ablaufdatum") | **a**+b | Träger hat am selben Tag geliefert; **Satz gilt weiter für K04/Z-5**; für K-1 **Fälligkeitsregel statt Datum** nachgetragen |
| P9 | **„So läuft es weiter"**, Zeile 4 | **a** | Z-6 beantwortet; übrige Z-Punkte unverändert (teilübergeben ≠ beantwortet) |

#### `handel/preisliste-vorlaeufig.md` (11)

| # | Fundstelle | Kat. | Disposition |
|---|---|---|---|
| L1 | Kopf-Nachtrag R13-A, „**Z-6 ungeklärt**, W-B/A3-Rechenbasis kann kippen" | **a** | Auflösungs-Kasten (Zeiger auf § 5.3 der Quelle) |
| L2 | Kopf-Nachtrag, „Strukturvorbehalt ist DOPPELT" (P-16) | **b** | **halbiert**, nicht aufgehoben: n8n-Teil weg, **K04/Z-5 bleibt** |
| L3 | Kopf-Nachtrag, „Die Erstfassung nannte nur Z-6" | **c** | **Nicht-Edit** — Historie einer früheren Reparatur, kein Vorbehalt |
| L4 | Kopf-Nachtrag, „nicht als eigene StB-Frage geführt sind Z-3, Z-5, Z-6" | **c** | **Nicht-Edit** — Aussage über die StB-Fragenliste, bleibt sachlich richtig |
| L5 | **Kopfkasten Vorbehalt 3** („kann die Rechenbasis kippen") | **a**+b | Kern-Nachtrag; Überschrift zu lesen als „K04-/Z-5-Vorbehalt" |
| L6 | **§ 2, Zeile K7** („0 € Lizenzkosten, offene Rechtsfrage → Z-6/E-4") | **a** | **R40-N-6-Hauptkasten** (s. § 2 dieses Protokolls) |
| L7 | § 2, „im Kopfkasten als Z-6 abgedeckt" | **c** | **Nicht-Edit** — Querverweis innerhalb des K04-Kastens, durch L8 mit erledigt |
| L8 | § 2, Kasten „Folge: Kopfkasten nennt nur Z-6/n8n" | **b** | K04 ist jetzt der **allein verbliebene** Strukturvorbehalt |
| L9 | **§ 6-Tabelle**, Zeile „n8n-Lizenzfrage Z-6 → ungeklärt" | **a** | Nachtragstabelle „eine Zeile ist ERLEDIGT" + **zwei neu geführte Posten** (K04/Z-5 · K-1) |
| L10 | § 6-Nachtrag R13-A, „Nicht als eigene StB-Frage: Z-3, Z-5, Z-6" | **c** | **Nicht-Edit** (wie L4) |
| L11 | § 6-Nachtrag R13-A, „**Unverändert:** … Z-6 ungeklärt" | **a** | überholt; **alles Übrige der Aufzählung bleibt** (einzeln wiederholt) |

#### `handel/angebotsarchitektur.md` (8)

| # | Fundstelle | Kat. | Disposition |
|---|---|---|---|
| A1 | Kopf-Nachtrag, „Z-6-/K04-Vorbehalt (3) gilt unverändert" | **a**+b | Zeiger; Firmierung, Architektur, K04 bleiben |
| A2 | **Kopfkasten Vorbehalt 3** („Z-6-/Architektur-Vorbehalt") | **a**+b | Kern-Nachtrag: **von drei Bestandteilen fällt einer weg**; dazu **AU-2/AU-3/AU-4 als Angebots-Pflichten** eingeführt |
| A3 | § 1-Tabelle „Rechenbasis W-B/A3 … unter Z-6-Vorbehalt (E-3)" | **a** | Zeiger; Rechenbasis-Charakter unverändert |
| A4 | **§ 4**, „Vertragspartner-Frage (Preisliste § 2, Kasten; **K03/K04**)" | **b** | ⭐ **Fang der Selbstwiderspruchs-Probe** (§ 4.2): K03 ist erledigt und war nie die Vertragspartner-Frage; **K04/Z-5 trägt sie allein weiter**. Zusatz: der Absatz ist durch **AU-2** jetzt doppelt getragen |
| A5 | **§ 6**, Widerspruchstabelle Zeile 1 (K03/n8n) | **a** | Nachtrag „Widerspruch 1 aufgelöst; 2, 3, 4 bleiben" |
| A6 | § 6, „Ein Angebot darf erst … wenn Z-6/K04 geklärt sind" | **b** | Satz **bleibt in Kraft**, ab jetzt zu lesen als „wenn **K04/Z-5** geklärt sind" |
| A7 | § 6-Nachtrag R13-A, „Kippt Z-6/K04, kippt die Grundlage auch von P-B" | **b** | P-B erbt weiterhin alles — nur eine Frage weniger |
| A8 | § 7-Nachtrag, „nicht als eigene StB-Frage geführt sind Z-3, Z-5 und Z-6" | **c** | **Nicht-Edit** (wie L4/L10) |

**Summe:** **28 Fundstellen disponiert** — 13 × (a), 10 × (b),
**5 × (c) dokumentierter Nicht-Edit** (L3, L4, L7, L10, A8).

### 1.3 Die Grenze, die nicht verwischt wurde

Ausdrücklich **nicht** mit aufgelöst — an jeder betroffenen Stelle
einzeln ausgewiesen:

1. **K04/Vapi + Vertragspartner-Frage Z-5** — war nie eine Lizenzfrage,
   lief nur im selben E-4-Bündel. Träger unverändert, ohne Kalendertermin.
2. **Architektur-Entscheid W-A ↔ W-B/A3** — nicht gefallen, liegt bei
   heypensio/den Gesellschaftern. „Die Lizenz sagt, was **erlaubt** ist,
   nicht, was **gewollt** ist."
3. **Restpunkt K-1** aus der Lizenzprüfung selbst (Community-Edition als
   Backend eines entgeltlichen Produkts) — **streitig**, Belegstufe B
   gegen B. **Trifft W-A und W-B gleich stark** und darf laut Quelle
   ausdrücklich **nicht als Argument gegen A3** verbucht werden. Fällig,
   **bevor ein Kunden-Angebot mit A3-Architektur hinausgeht**.
4. **Firmierungs-Vorbehalt** und **alle Höhen (F-III, nach E-6/E-7)** —
   von dieser Runde unberührt.

---

## 2. Teil 2 — R40-N-6 nachgezogen

**Inhalt (Belegstufe B, n8n-Preis-FAQ, wörtlich zitiert in der Quelle
§ 3.7):** Ein Lizenzschlüssel gilt für eine „**unlimited number of
instances**"; die Nutzung aller Instanzen zählt **gemeinsam** auf **eine
Quota**. → „Eigener Server je Kunde" heißt **nicht** „eigene Lizenz je
Kunde"; ein Lizenz-Aufschlag skaliert mit dem **Ausführungsvolumen**.
**Damit fällt ein Kostenargument gegen W-B/A3 weg.**

**Eingearbeitet an beiden Stellen, an denen der Bestand die
n8n-Kostenannahme führt** (Suchweg: `grep` auf
`Lizenzkost|Lizenzgebühr|je Instanz|Lizenzschlüssel|unlimited` über
`handel/*.md` → genau 2 Treffer, beide K7-Zeilen):

| Ort | Form |
|---|---|
| `preisliste-vorlaeufig.md` § 2, Zeile **K7** | **Hauptkasten** mit Herkunft, Folgerung und **drei Grenzen** |
| `preismodell-optionen.md` § 4.1, Zeile **K7** | Nachtrag mit denselben zwei Grenzen, kürzer |

**Rundenpräfix `R40-N-6` durchgehend verwendet, nie nacktes „N-6"**
(L-35 — der eigene Bestand führt kollidierende N-Nummern).

⚠️ **Drei Grenzen ausdrücklich mitgeschrieben, damit aus dem Befund
keine Entwarnung wird, die die Quelle nicht deckt:**
1. Die zitierte Regel betrifft nach ihrem Wortlaut den **Business-/
   Enterprise-Schlüssel** — sie sagt etwas über den **Bedarfsfall**, nicht
   über die unterstellte kostenlose Community-Edition (**das ist genau
   K-1**).
2. Die **gemeinsame Quota** wirkt in beide Richtungen: Der Kostentreiber
   wandert von der Instanz-Zahl zur **Volumengrenze über alle Kunden**.
3. **Keine Zahl** ändert sich; K7 bleibt „0 € unterstellt". Die
   n8n-Preistabelle der Quelle trägt durchgehend „**Steuerbasis offen**"
   und einen Betriebsart-Scope im Seiten-Standardzustand — sie wurde
   deshalb **bewusst nicht** übernommen (Regel: Fußnoten/Steuerbasis nie
   quellenübergreifend ergänzen).

---

## 3. Teil 3 — Belegstufen-Hebung

**Vorgehen:** Wortlaut-Datei **zuerst vollständig gelesen** (102
Zeilen), dann je Vermerk Aussage und Fundstelle **getrennt** gegen den
Wortlaut geprüft.

### 3.1 Nenner — am PRÜFGEGENSTAND, nicht an einer Auswahl (L-30)

| Datei | Prüfgegenstand | geprüft | **gehoben** | abweichend |
|---|---|---|---|---|
| `preismodell-optionen.md` | die **9 ✅-Kästen** des § 11 (E-1 · E-2a · E-2 · E-3 · E-4 · E-5/E-5a · E-6 · E-7 · E-8) | 9 | **9** | **0** |
| `preisliste-vorlaeufig.md` | die **5 Belegstufen-Angaben** (Kopf-Nachtrag · Verifikationsvermerk · §§ 3/4/5-Nachträge) | 5 | **5** | **0** |
| `angebotsarchitektur.md` | die **11 Belegstufen-Angaben** (Kopf · Quellenliste · Sammelangabe § 1 · **AA-1…AA-8** inkl. ⬜ AA-4) | 11 | **11** | **0** |
| **Summe** | | **25** | **25** | **0** |

**Kein Vermerk war inhaltlich falsch.** Gehoben wurde **per Verweis**
auf die sensibel-Datei — **keine Volltext-Kopie ins Repo** (D8); die
wenigen wörtlichen Fetzen unten sind kurze Beleg-Zitate zu
Präzisierungs-Befunden, wie im Auftrag vorgesehen.

⚠️ **Zählweg-Befund, der den Nenner verändert hat:** Der zeilenweise
Grep fand die Phrase „Wortlaut nicht archiviert" **2 / 3 / 11** mal
(so auch die Leitsessions-Messung). Der **flache** Lauf findet
**3 / 5 / 11** — **drei Vorkommen waren durch einen Zeilenumbruch
mitten in der Phrase verdeckt** („… Wortlaut nicht\n> archiviert").
Gemessen am Ausgangsstand `95fe3f1`. **Ohne die zeilenübergreifende
Gegenprobe wären zwei Belegstufen-Angaben der Preisliste ungehoben
geblieben** — darunter der Kopf-Nachtrag, also die Stelle, an der der
Leser ankommt. *(Klasse „Phrase zeilengetrennt", Baustein
`quellen-beschaffung` Punkt 7 — hier erstmals im EIGENEN Bestand
belegt, nicht in einer Fremdquelle.)*

### 3.2 Drei Präzisierungen (Aussage gedeckt, Zusatz genauer)

1. **E-2 · Herkunft des Mehrhaus-Rabatts.** Vermerk: „Empfehlung der
   Zentrale, vom User bestätigt". Wortlaut: *„pro Haus macht schon Sinn
   außer der Betreiber ist sehr preissensibel dann könnte man da schon
   was machen."* → Der **User** brachte den Fall selbst auf. Inhalt
   unverändert, Zuschreibung war zu einseitig.
2. **E-3 · Belegstufe der Ausgestaltung.** Kern wörtlich gedeckt
   (*„Zugänge und alles gehören ihm"*), **die Form der Durchreichung
   aber ausdrücklich offen gelassen**: *„oder man legt die Kosten gleich
   auf ihn um … bin mir nicht schlüssig."* Punkte 2/3 des E-3-Entscheids
   sind damit eine **bestätigte Session-Fassung**, keine
   User-Formulierung → wer sie ändern will, ändert eine niedrigere
   Schwelle. *(Sie deckt sich mit Lizenz-Auflage AU-2.)*
3. **E-2 · zwei Rückfragen des Users blieben im Protokoll unsichtbar:**
   *„Man könnte es aber auch pro Zimmer kalkulieren was sagst du dazu?"*
   (sachlich durch Bemessung (c) aufgenommen) und *„von welcher geteilten
   Plattform ist hier die Rede?"* (zeigt: W-A/W-B waren bei der Erhebung
   nicht vorausgesetzt).

### 3.3 Was die Hebung zusätzlich BELEGT (vorher nur behauptet)

- **AA-8-Schweigen:** Der § 4-Nachtrag der Preisliste sagt, zur Wirkung
  auf **S2** und die durchgereichten § 2-Zeilen „schweigt das Protokoll".
  Wortlaut vollständig: *„Ja, Rabatt ab Haus 2."* → **am Rohbeleg
  bestätigt**, nicht mehr nur am Protokoll.
- **Die drei offenen AA-8-Randfragen** (ein Rabattsatz oder zwei? · gilt
  „ohne Deckel" auch für S4? · Rechtsnatur Z-2) beantwortet der Wortlaut
  **nicht** → sie bleiben offen, jetzt **belegt statt vermutet**.
- **E-4/E-6 ohne Terminangabe:** *„Ruffy/heypensio beides"* — der
  Belegstufen-Hinweis „kein Kalenderdatum genannt" ist am Wortlaut belegt.
- ⭐ **AA-3-Randfrage bekommt ein Indiz — zugunsten der ENGEREN Lesart.**
  Offen seit R13: Deckt „geplant" auch **GEPARKTE** Module? Wortlaut:
  *„auch sachen die geplant aber noch in der Entwicklung sind dürfen
  angeboten werden."* Die Wendung **„aber noch in der Entwicklung"**
  beschreibt Module, an denen **gearbeitet wird**. **Indiz, kein
  Entscheid** — die Frage war dem User nicht gestellt. Die engere Lesart
  bleibt Arbeitsgrundlage, jetzt mit Beleg begründet.

### 3.4 AA-4 (kein Entscheid zu heben)

Auftragsgemäß nur geprüft, **ob die Erhebung AA-4 erwähnt**: ja,
wörtlich *„Habe Kayhan hierzu gefragt und warte auf seine Antwort."*
Damit ist am Rohbeleg bestätigt, was der ⬜-Kasten führt — **kein
Entscheid, kein Zeitanker, Träger ist der User**. Gehoben wurde nur die
Belegstufe der **Nicht-Entscheidung**. Als Randnotiz im Dokument geführt.

### 3.5 Grenze der Hebung — ausdrücklich in allen drei Dokumenten

Die Belegstufe steigt von „sinngemäß" auf **„wörtlich belegt"**, nicht
auf **„vollständig protokolliert"**: Archiviert sind Antworten und
Freitexte, **nicht der Gesprächsverlauf**. Konkret einschlägig bei
**AA-6** — erste Reaktion *„erkläre mir das bitte näher"*, der Entscheid
*„Fester Prozentsatz"* fiel **nach einer Erklärung durch die Session**,
und **diese Erklärung ist nicht archiviert**.

---

## 4. Teil 4 — Wächter-Läufe und Selbstwiderspruchs-Probe

### 4.1 Wächter (L-26-Schärfung: Baseline VOR den Edits)

| Lauf | Zeitpunkt | Ergebnis | Exit |
|---|---|---|---|
| **Baseline** | vor dem ersten Edit | 144 Zitate · Ausnahmeliste **25/25** (26 Fundstellen) · Quellenzitate **118/118** · Blockzitate 3/3 + Gegenproben 3/3 · Positivkontrolle **11/11** · Gegenprobe **3/3** · Quellenpool 8 Dateien / **361.183** Zeichen | **0** |
| **Nachher (final)** | nach allen Edits | **identisch in jeder Zeile**, einzige Abweichung: Quellenpool **374.428** Zeichen (+13.245 — meine Nachträge sind Teil des Pools) | **0** |

**Neue Meldungen: 0.** Exit-Code jeweils per `$LASTEXITCODE`
unmittelbar nach dem Aufruf gelesen, **nie** über cmd-`%ERRORLEVEL%`
(Windows-Baustein). Vergleich maschinell per `Compare-Object`, nicht
per Augenschein.

⚠️ **Was dieser Wächter NICHT prüft — Blindstelle ausgewiesen:** Sein
**Prüfgegenstand** ist `akquise/`; meine drei Dokumente liegen im
**Quellenpool**. Die von mir neu eingefügten Zitate — aus der
heypensio-Vorlage (`„for your own internal business purposes"`,
`„unlimited number of instances"`, AU-Klauseln) und die kurzen
Wortlaut-Belege aus der sensibel-Datei — werden von ihm **nicht**
geprüft. **Wer sie stattdessen verifiziert hat: R14-A selbst**, jeweils
am Rohbeleg (heypensio-Papier § 1/§ 3.6/§ 3.7 bzw. Wortlaut-Datei,
Lesestand 13.08. abends). Die Wortlaut-Datei liegt zudem **außerhalb
von git** und kann von keinem Prüfwerkzeug des Repos erreicht werden.
**Ausnahmeliste nicht angefasst** — kein Eintrag war nötig, weil keine
neue Wächter-Meldung entstand.

### 4.2 Selbstwiderspruchs-Probe, ZWEI Musterachsen (L-37)

Gesucht wurde **flach** (Umbrüche normalisiert), nachdem der
zeilenweise Lauf nachweislich Vorkommen verdeckt hatte.

**Achse 1 — geänderte Größen** (Treffer nach den Edits, je Datei):
`Z-6` 21/23/16 · `n8n` 48/27/14 · `Sustainable Use|SUL` 3/4/1 ·
„A3 kippen"-Wortformen 4/2/1 · `K.-o.-Punkt` 2/0/0 ·
`Wortlaut nicht archiviert` 4/6/12 · `Belegstufe` 22/12/13 · `W-B`
34/16/9 · `Lizenzkost|Lizenzschlüssel` 3/4/0 · `AU-1…AU-4` 12/2/9 ·
`K-1` 6/3/1.

**Achse 2 — Statusaussagen über fremde Träger:** `ungeklärt` 0/11/12 ·
`offen` 39/34/33 · `nicht übergeben` 0/4/9 · `teilübergeben` 1/3/2 ·
`beantwortet` 19/9/19 · `steht aus|wartet` 5/5/6 · `E-4` 18/11/10 ·
„ohne Kalendertermin"-Formen 2/5/6 · „nicht gefallen" 4/5/2 ·
`erledigt` 10/6/1.

**Positivkontrolle je Lauf:** `Startgebühr` 41/33/21 und `Nachtrag`
49/44/52 (mussten treffen) · **Gegenprobe** `Zxx-99-erfunden` →
**0/0/0** (durfte nicht treffen).

**Einzelprüfung:** Alle Treffer der kritischen Muster (`ungeklärt` und
alle Kipp-Wortformen) wurden mit 110-Zeichen-Kontextfenstern
ausgegeben und **einzeln** gegen den neuen Stand gelesen — **19
Fenster mit n8n-/Lizenz-/Z-6-/K03-Bezug**. Ergebnis: 18 davon sind
entweder Vorfassungen mit unmittelbar folgendem R14-A-Nachtrag, mein
eigener Nachtragstext oder K04-/Z-5-Aussagen, die unverändert richtig
sind.

⭐ **Ein echter Fang (danach repariert):** `angebotsarchitektur.md` § 4
führte die Vertragspartner-Frage mit der Klammer „**K03/K04**". K03
(kein n8n-Zugang) ist mit der Auflösung erledigt **und war nie die
Vertragspartner-Frage** — die Stelle hätte einen erledigten Punkt als
lebenden Träger weitergeführt. Nachtrag gesetzt (A4), zugleich der
Absatz um die AU-2-Trägerschaft ergänzt. **Diese Stelle trägt den
Bezeichner `Z-6` nicht** — die Z-6-Zählung allein hätte sie nie
gefunden; gefunden hat sie die zweite Musterachse.

### 4.3 Löschungszählung (L-38)

`git diff --numstat` über die drei Dateien:

| Datei | + | − |
|---|---|---|
| `handel/preismodell-optionen.md` | 254 | **0** |
| `handel/preisliste-vorlaeufig.md` | 158 | **0** |
| `handel/angebotsarchitektur.md` | 166 | **0** |
| **Summe** | **578** | **0** |

**Null gelöschte Zeilen** — der mechanische Beleg, dass **keine
Vorfassung still geglättet** wurde und alle überholten Passagen
(einschließlich des Pseudo-Zitats und der „kann A3 kippen"-Sätze)
lesbar stehen geblieben sind. `handel/kanal-rechtsmatrix.md` (169/4)
im selben `git status` ist **Arbeit der Parallel-Session R14-B** —
nicht angefasst, nicht gestaget.

---

## 5. Nebenbefunde (außerhalb des Auftrags)

- **R14A-N-1 — Der Formulierungsvorschlag der Quelle ist in sich
  unvollständig.** Er endet mit „Klärweg + Auflagen **AU-1…AU-3**",
  während dasselbe Papier in § 3.6 **vier** Auflagen führt (AU-4 wurde
  dort nach Prüferbefund F3 nachgetragen und ist die **einzige, die
  etwas zu TUN verlangt**). Wer den Vorschlag wörtlich übernimmt,
  verliert AU-4. R14-A hat **AU-1…AU-4** übernommen und die Abweichung
  im Dokument ausgewiesen. → **Zielort: heypensio-Leitsession**
  (Korrektur des Vorschlags in § 3.8 B-2).
- **R14A-N-2 — Zwei Bestands-Korrekturen liegen außerhalb dieses
  Scopes und bleiben offen:** In `blueprint/architektur-multi-kunden.md`
  (heypensio-Repo) stehen das **Pseudo-Zitat** „als Service anzubieten"
  und der **falsche Adressat** „n8n-Sales" (richtig: `license@n8n.io`).
  Beide sind dort als **O-5** geführt. Solange sie stehen, kann das
  Pseudo-Zitat erneut in ein Preis- oder Angebotsdokument wandern —
  genau der Weg, den es schon einmal genommen hat.
- **R14A-N-3 — Der Lizenz-Restpunkt K-1 hat einen Fälligkeits-Anker,
  aber keinen Wiedervorlage-Punkt.** „Bevor ein Kunden-Angebot mit
  A3-Architektur hinausgeht" ist eine Regel, kein Termin; Träger sind
  **User + heypensio-Folgestrang** (dort O-4). Für MKT heißt das: Der
  Anker gehört an das erste Angebotsdokument, das nach der Firmierung
  entsteht — **heute existiert kein Träger dafür im
  MKT-Bestand**.
- **R14A-N-4 — Zwei Auflagen erzeugen ARBEIT im Angebotsstrang, nicht
  nur Vorbehalte:** **AU-2** (Entgelt in Angebot, Vertrag und Rechnung
  als Dienstleistungsentgelt benennen) und **AU-4** (Lizenzbedingungen
  bei jeder Kunden-Einrichtung nachweislich mitgeben, Vermerk ins
  Onboarding-Protokoll). Beide sind in `angebotsarchitektur.md`
  eingetragen, aber **keines der Pakete P-A/P-B/P-C führt heute einen
  Onboarding-Schritt „Lizenzbedingungen übergeben"**. → Kandidat für
  die nächste HANDEL-Runde.
- **R14A-N-5 — Der Bestand nennt zwei bekannte Nachbar-Posten der
  Quelle, die MKT betreffen könnten und dort ausdrücklich „bewusst
  nicht verfolgt" sind:** das **n8n-Expertenprogramm** als Partner-/
  Marketing-Spur (dort N-5, Zielort ausdrücklich „marketing-Repo") und
  die Regel, dass ein **Lizenzserver-Ping + Telemetrie** in die
  Betriebs-/AV-Unterlagen gehört, falls je ein Lizenzschlüssel
  eingesetzt wird — **auch der kostenlose** der Registered Community
  Edition (dort O-11). Der zweite Punkt berührt die
  DSGVO-Rollenverteilung im A3-Modell (der **Kunde** wäre
  Verantwortlicher, der tägliche Ping ginge an einen Dritten).
  **Nicht verfolgt, hier nur weitergereicht.**

---

## 6. Prüfstand

**Eingefrorener Prüfstand für den Prüf-Subagenten:** Commit-Hash s.
Abschlussmeldung (`protokolle/R14-A-abschluss.md`). Prüfgegenstand und
Quellen per `git show <hash>:<pfad>`; die **Wortlaut-Datei liegt
außerhalb von git** — Pfad
`<FIRMENWURZEL>\zentrale\sensibel\entscheide-erhebungen-2026-08-13-wortlaut.md`,
Lese-Stand **13.08.2026 abends**.
