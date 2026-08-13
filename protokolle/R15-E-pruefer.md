# R15-E — Unabhängiges Prüfprotokoll (Sperrdatei-Struktur + Wellenprotokoll-Vorlage)

**Prüfer:** unabhängige Prüf-Session (kein Bau-Anteil an R15-E) ·
**Datum:** 14.08.2026 · **Sprache:** Deutsch

---

## 1. Prüfstand und Methode

### 1.1 Eingefrorener Prüfstand

| Größe | Wert |
|---|---|
| **Prüfstand (verbindlich)** | Commit **`5f9930b`** (`5f9930bbdf7c204a27f9a271df24ee8708112f87`) |
| HEAD zum Zeitpunkt des Protokollschlusses | `5630bbf` (ROCKSTAR, R15-D) — **zwei fremde Commits über dem Prüfstand** (`40d76fb` ROUX/R15-C, `5630bbf`) |
| Drift-Kontrolle der drei Prüflinge | `git diff --stat 5f9930b..HEAD -- <die drei Dateien>` = **leer**; `git diff --stat 5f9930b -- <die drei Dateien>` (Arbeitsbaum) = **leer** → die Prüflinge sind am Prüfstand und am Messzeitpunkt **byte-identisch**; alle Messungen unten gelten für `5f9930b` |
| Fremde uncommittete Arbeit im Baum | `?? handel/anwalts-briefing-2026-08.md`, `?? protokolle/R15-C-abschluss.md` — **nicht angefasst** |
| Schreibrecht dieser Session | ausschließlich diese Datei; kein Commit |

**Umfangs-Gegenprobe zum Bau-Anspruch** (`git diff --numstat 5f9930b~1 5f9930b`):
`42 / 0` Regelwerk · `432 / 0` Sperrdatei · `486 / 0` Wellenprotokoll.
Löschungszählung im Regelwerk (`grep -c '^-[^-]'` auf den Diff) = **0**;
Positivkontrolle im selben Lauf (`grep -c '^+[^+]'`) = **39** (+ 3
eingefügte Leerzeilen = 42). **Die Behauptung „42 Zeilen ergänzt, 0
Löschungen" ist unabhängig bestätigt.**

### 1.2 Leseumfang MIT Zeilenspannen

| Datei | Gelesene Zeilenspanne | Anmerkung |
|---|---|---|
| `akquise/sperrdatei-struktur.md` | **1–432 (vollständig)** | Prüfling |
| `akquise/wellenprotokoll-vorlage.md` | **1–486 (vollständig)** | Prüfling |
| `akquise/listenbau-regelwerk.md` | **1–340, 340–739, 739–1068, 1069–1345 → 1–1345 (vollständig)** | Quelle; Leseraum bewusst das GANZE Dokument |
| `akquise/interessenabwaegung-o8.md` | **1–420, 420–839, 840–1239 → 1–1239 (vollständig)** | Quelle; Leseraum bewusst das GANZE Dokument |
| `akquise/pruefe-zitate.js` | **16–30** (`ZIEL`/`POOL`), am HEAD **und** am zitierten Stand `3067361` | für P-5 |
| Diff `5f9930b` auf `listenbau-regelwerk.md` | vollständig (3 Hunks) | die drei Zeiger-Kästen |

### 1.3 Methode

- **Richtung A rückwärts:** B-1…B-7 (`interessenabwaegung-o8.md` § 10),
  R-B1…R-B11 (§ 7.2/§ 7.3), § 6.1 (R-F1/B-6-Nachtrag), § 7.1 (B-1),
  § 7.4, § 5.1–5.3, § 9, § 11.3 wurden **einzeln** daraufhin gelesen, ob
  sie in den Werkzeugen ankommen — nicht umgekehrt.
- **Jede Negativ-Suche mit Positivkontrolle im selben Lauf** (je
  angegeben).
- **Befund und Ursachen-Diagnose getrennt** ausgewiesen.
- **Zitate am Rohbeleg**, nicht am Verdichtungsbericht; die vier Punkte
  aus Wellenprotokoll § 10 am Stück in der Quelle gelesen, nicht
  gegreppt.
- Verweise ohne Zeilennummern; wo Zeilen nötig waren, mit Commit-Bezug.

### 1.4 Was NICHT geprüft wurde („nicht prüfbar" ist ein eigenes Ergebnis)

1. **Die Rechtsfragen selbst.** Ob die Werkzeuge die DSGVO-/UWG-Pflichten
   materiell erfüllen, ist ohne den anwaltlichen Rat (O-9) nicht
   feststellbar und war nicht Prüfgegenstand.
2. **Der Start-Prompt von R15-E.** Ob der Scope „§ 10 des Regelwerks
   nicht anfassen" vom Prompt gesetzt war, ist mir nicht zugänglich —
   geprüft wurde nur die im Dokument **genannte Begründung** (PE-22).
3. **Vollständigkeit der Fallgruppen-Partition** FG-1…FG-6 für Kanal K1:
   nach `o8` § 5.4 plausibel, aber von mir **nicht an einer Primärquelle
   verifiziert**; die Vorlage weist die Erschöpfungs-Annahme nicht aus
   (s. PE-18, zweiter Absatz).
4. **Ob die Sperrdatei-Struktur betrieblich handhabbar ist** — kein
   Praxistest möglich, es existiert kein Bestand.

---

## 2. Kategorie A — „Was aus der Quelle ist gar nicht erst angekommen?"

*(Gelesen von B-1…B-7, § 7.3, § 6.1, § 7.1, § 7.2, § 7.4, § 11.3
rückwärts.)*

### PE-1 · SCHWER — Die dritte FG-2-Pflicht der Quelle ist nicht angekommen, und das Zitat bricht genau davor ab

**Befund.** `interessenabwaegung-o8.md` § 5.4, Zeile FG-2, Spalte „Folge
für den Listenbau", lautet vollständig:

> „Zulässig nur mit derselben Vorsicht wie FG-4: Q-2 = `Impressum`
> protokollieren, **Anteil im Wellenprotokoll ausweisen** (B-6), **und
> die Einstufung „kein Personenbezug" muss je Datensatz belegbar sein**"

`wellenprotokoll-vorlage.md` § 10 Nr. 2 zitiert davon:

> „Zulässig nur mit derselben Vorsicht wie FG-4: Q-2 = `Impressum`
> protokollieren, **Anteil im Wellenprotokoll ausweisen** (B-6)"

— **Ende des Zitats, ohne Auslassungszeichen.** Der Regelwerks-Zeiger
(§ 6.1, Buchstabe (a)) kürzt noch stärker („Anteil im Wellenprotokoll
ausweisen (B-6)").

Die weggefallene dritte Pflicht kommt in **keinem** der beiden Werkzeuge
an. Messung: `grep -n 'belegbar\|je Datensatz'` über beide neuen Dateien
→ vier Treffer, **keiner** betrifft die FG-2-Einstufung (zwei sind das
R-B6-Zitat „später nicht belegbar", einer der B-4-Vorgangsnachweis, einer
das R-F1-Zitat). **Positivkontrolle im selben Lauf:** `Personenbezug` im
Wellenprotokoll = **4 Treffer** (der Suchraum antwortet, der Begriff
fehlt nicht am Werkzeug).

**Warum das schwer wiegt:** WP-19 verlangt den FG-2-**Anteil**. Der
Anteil setzt die Einstufung voraus; die Quelle verlangt die Einstufung
**je Datensatz belegbar** — und genau diese Belegbarkeit ist das, was den
FG-2-Fall von FG-4 trennt (FG-2 lebt davon, dass kein Personenname in der
Liste steht, während o8 im Q-13-Nachtrag ausdrücklich offenlässt, ob das
**Auslesen** schon Verarbeitung ist). Ohne Nachweisfeld ist WP-19 eine
Zahl ohne prüfbare Grundlage.

**Ursachen-Diagnose (getrennt vom Befund).** Klassische
Verdichtungs-Drift zugunsten der eigenen Aussage: Der zitierte Teil
**stützt** den eigenen Befund („FG-2 gehört auch ins Protokoll"), der
weggefallene Teil erzeugt **zusätzliche Arbeit**. Der Zitat-Abbruch fiel
mit der Grenze der eigenen Umsetzung zusammen — das ist der Marker.

---

### PE-2 · SCHWER — Die Neu-Führungs-Trigger aus o8 § 11.3 haben im Wellenprotokoll kein Feld

**Befund.** `interessenabwaegung-o8.md` § 11.3 nennt sechs Trigger, bei
denen die Abwägung **neu zu führen** ist. Drei davon sind genau auf
Wellenebene beobachtbar:

1. „**Vor dem ersten realen Wellenbau** (Abgleich gegen die dann
   konkrete Listenlogik, § 1.3/§ 4.3)";
2. „Wenn die **Menge je Welle 300 Stück überschreitet** (Skalenfaktor
   P-7 / R-K1 …)" — ein Trigger **mit Schwellenwert**, 12.08. eigens
   eingesetzt (Q-10), weil „ein Trigger ohne Schwellenwert nicht
   bedienbar ist";
3. „Wenn eine **neue Adressquelle** hinzukommt".

Messung über beide neuen Dateien: `grep -n '300\|11\.3\|neu zu
führen\|Abwägung neu'` → **genau ein Treffer**, WP-04 („abweicht er, ist
die Abwägung neu zu führen (o8 § 11.3)") — das ist der **Zweck**-Trigger.
**Positivkontrolle im selben Lauf:** `Welle` im Wellenprotokoll = **40
Treffer**.

Weder WP-10 (geplante Wellengröße) noch WP-17 (Ist-Menge) tragen die
300er-Schwelle; die Gate-Tabelle kennt keinen Erst-Wellen-Abgleich; WP-09
(Quellenarten) kennt keinen „neue Quelle → Abwägung neu"-Schritt; die
Freigabe-Checkliste (WP-32, 11 Zeilen) enthält keine dieser Prüfungen.

**Warum das schwer wiegt:** Die Vorlage begründet ihre eigene Existenz im
Kopf-Kasten damit, dass sie die **Gegenmaßnahme** gegen den
Einzelfall-Einwand der Aufsicht ist. Die Welle, die die Abwägung sprengt,
ist genau die, die die Vorlage protokolliert — und sie protokolliert sie
ohne Alarm. Die Schwelle 300 liegt zudem **unterhalb** der eigenen
Planzahlen (Akquiseplan ≈ 337–1.600 Briefe je Abschluss, o8 P-7), der
Trigger ist also kein Randfall, sondern der Regelfall.

**Ursachen-Diagnose.** Der Bau ist entlang **B-6** und § 6.1 gelaufen
(die Pflicht-Aufzählung), nicht entlang der **Wirkungs**-Kette der
Abwägung. § 11.3 steht in o8 in einem anderen Kapitel als B-6 — der
präzise Quellverweis („§ 5.1 P-7", „§ 5.4") hat den Leseraum verengt;
genau die L-34-Klasse („ein Quellverweis benennt, wo man ANFÄNGT").

---

### PE-3 · MITTEL — WP-13 zählt Aussteuerungen, belegt aber nicht, dass die B-1-Prüfung überhaupt lief

**Befund.** `wellenprotokoll-vorlage.md` § 10 Nr. 1 begründet WP-13
wörtlich damit: „ohne die Zahl geht die Summenprobe nicht auf, und **eine
ausgesteuerte Adresse wäre von einer nie geprüften nicht
unterscheidbar**." Das Feld leistet das aber nur für die **getroffenen**
Fälle. Eine Welle, in der niemand ein Impressum auf einen Werbewiderspruch
geprüft hat, trägt `WP-13 = 0`, die Summenprobe 1 geht auf, die
Freigabe-Checkliste kennt keine B-1-Zeile — **`0` ist weiterhin
ununterscheidbar von „nicht geprüft"**.

Die Gegenprobe im eigenen Haus zeigt, dass das Muster bekannt war: Für
den Sperrdatei-Abgleich löst Block D genau dieses Problem („**Ein
Abgleich mit null Treffern wird genauso eingetragen** … Eine fehlende
Zeile ist ununterscheidbar von einem unterlassenen Abgleich"). Für B-1
wurde dieselbe Logik nicht angewandt.

Zusätzlich nicht angekommen: die **Lesart** des Regelwerks § 7.1 („‚Jedes
Ziel-Impressum' hängt nicht an der Adressquelle — die Prüfung läuft auch,
wenn die Adresse aus einem Verzeichnis stammt, nicht nur bei Q-2 =
`Impressum`"). Kein Feld und keine Zeile der Vorlage bindet die
B-1-Prüfmenge an die **Kandidaten**menge.

**Ursachen-Diagnose.** Anwesenheit ≠ Wirksamkeit: Das Feld wurde als
Summanden-Lieferant für Probe 1 gebaut (Mengenlogik), nicht als
Nachweisfeld (Belegstufenlogik). Billiger Fix: „B-1 geprüft: n von
WP-11" als zweite Zahl neben WP-13 plus eine Checklistenzeile.

---

### PE-4 · HINWEIS — Das erste Element von B-3 („Bestätigung der Beachtung") hat kein Nachweisfeld

**Befund.** `o8` § 10 B-3 nennt **drei** Elemente: „mit **Bestätigung der
Beachtung** und Nennung eines ‚möglichst genau zu benennenden kurzen
Zeitraum[s]' …; dazu **Unterrichtung über die Aufnahme in die
Sperrdatei**". Die Sperrdatei bildet Element 2 (SP-12) und Element 3
(SP-13) mit je eigenem Feld ab — Element 1 hat nur das Sammelfeld SP-11
(„Antwortschreiben versandt am").

Die Datei begründet SP-13 selbst damit, dieser Teil „fällt beim
Verdichten regelmäßig weg und bekommt deshalb ein eigenes Feld". Für
Element 1 gilt dasselbe Argument, es wurde nur nicht angewandt.

**Warum nur HINWEIS:** Element 1 ist ein Inhalt des **Textes**, der nach
F-7 ohnehin gesperrt ist; der Nachweis kann beim Textbau nachgezogen
werden. Er gehört aber in die Übergabe an den Textträger.

---

## 3. Kategorie B — „Welches Feld setzt eine Angabe voraus, die heute nicht feststeht?"

*(Geprüft: SP-01…SP-15 inkl. SP-14.1–.6, WP-01…WP-33 inkl. WP-20a/20b —
je gegen F-7, O-9, O-6, B-2-Weg, Beileger-Text.)*

**Gut gelöst und ausdrücklich anerkannt:** SP-06 (Wert `E-Mail` an B-2
gebunden), SP-11/SP-12/SP-13 (als Nachweisfelder deklariert, Text an F-7
gebunden), WP-21/WP-22 (sprechende Platzhalter **und** Checklistenzeile
„keine Platzhalter"), WP-03 (Stopp statt Feldwert), WP-20a (Sollwert 0
mit Stopp-Folge). Die Gate-Tabelle deckt F-7, O-9, B-2, O-6 und die vier
wellenspezifischen Gates je mit Begründung ab. **Das ist die stärkste
Seite beider Dateien.**

Drei Felder fallen trotzdem durch:

### PE-5 · SCHWER — § 9 „Tabellenform (für den laufenden Bestand)" legt personenbezogene Sperrdaten in eine Repo-Datei

**Befund.** `sperrdatei-struktur.md` § 9 stellt unter der Überschrift
**„Tabellenform (für den laufenden Bestand)"** eine Markdown-Tabelle mit
den Spalten SP-01 · SP-02 Firma · SP-03 Anschrift · SP-05 · SP-06 ·
SP-07 · SP-08 · SP-09 · SP-11 · SP-13 · SP-15 bereit; die Ausfüll-Vorlage
darüber führt zusätzlich SP-04 **Personenname**. Die Gate-Zeile O-6 sagt
dazu ausdrücklich: „**Die Markdown-Tabelle in § 9 ist die tragfähige
Erstform, bis ein Werkzeug steht**", § 9 ergänzt „Bei mehr als wenigen
Einträgen wird die Tabelle unhandlich — dann greift P-3".

Beide Quellen verbieten das:

- `interessenabwaegung-o8.md` § 8 **lit. g (TOM)**: „Mindestens:
  Zugriffsbeschränkung, **Ablage außerhalb des Repos** (Projektquelle
  § 2 AKQ2), Sperrdatei-Abgleich als technischer Schritt …" — und lit. g
  ist eine **Art.-24-Pflicht**, kein Ordnungsvorschlag.
- `listenbau-regelwerk.md` § 11: „⚠️ **Ablageregel:** Die Liste selbst
  gehört **nicht** ins Repo" (Projektquelle § 2 AKQ2: „personenbezogene
  Daten nur in `sensibel/`/CRM").

Dass die Sperrdatei keine Zielkundenliste ist, hilft nicht: Sie trägt
nach eigenem Feldschnitt Firma + Anschrift und **kann** SP-04 tragen —
und bei inhabergeführten Häusern sind Firma + Anschrift nach
Rechtsmatrix C1 (über beide Quellen zitiert) regelmäßig personenbezogen.

Messung: `grep -in 'sensibel\|ins Repo\|außerhalb des Repos\|Ablage'`
über beide neuen Dateien → **kein einziger** Treffer zur Ablageregel (die
vier Treffer sind SP-10 Beleg-Ablageort, SP-14.2, WP-25, Ausfüll-Zeile).
**Positivkontrolle im selben Lauf:** `Repo` in der Sperrdatei = **2
Treffer** (beide zum Prüfmittel P-5). **Gegenprobe an den Quellen:**
„Ablage außerhalb des Repos" trifft in o8 (§ 8 lit. g), „Die Liste selbst
gehört" trifft im Regelwerk (§ 11) — die Regel existiert und ist
auffindbar.

**Warum das schwer wiegt:** Der einzige Punkt, an dem eine Struktur-Datei
in diesem Zustand echten Schaden anrichten kann, ist die Frage, **wo der
Bestand entsteht**. Ein Betrieb, der § 9 wörtlich befolgt, committet
personenbezogene Daten unwiderruflich in die Git-Historie — und die Gates
verhindern das nicht, weil ein Sperrfall (anders als eine Welle) auch
ohne Versand entstehen kann, sobald jemand widerspricht.

**Ursachen-Diagnose.** § 8 lit. g wurde als **VVT-Zulieferung** gelesen
(Zielort MKT-OPS), nicht als Vorgabe an das eigene Werkzeug; die
Quellentabelle § 11 der Sperrdatei führt aus o8 § 8 nur „lit. f" auf.
Erneut die verengte Leseraum-Klasse (L-34).

### PE-6 · MITTEL — SP-10 setzt eine „Belegablage" voraus, die es nicht gibt und die in keinem Gate steht

**Befund.** SP-10 ist ✅-Pflichtfeld: „Ablageort des Originals (Mail-ID,
Scan-Dateiname, Telefonnotiz-ID) — **nicht** der Volltext … Der Volltext
gehört in die **Belegablage**". Eine Belegablage existiert nicht: Das
Datenschutz-Postfach hängt an B-2/F-7 (Gate), der Scan-/Notizort an O-6
(P-3 nennt nur die Form der Sperrdatei selbst, nicht die des Belegs).
Weder die Gate-Tabelle noch § 8 führen die Belegablage als offenen Posten.

**Wirkung:** Ein Pflichtfeld, dessen Wertebereich heute leer ist, ohne
Platzhalter-Regelung — im Gegensatz zu SP-06/SP-11, die genau dafür
Gates bekommen haben. Das ist inkonsistente Anwendung des eigenen
Prinzips, nicht nur eine Lücke.

### PE-7 · MITTEL — Die „Vorher"-Reihenfolge, der tragende Anspruch des Wellenprotokolls, ist mit den eigenen Feldern nicht belegbar

**Befund.** § 1 macht die Vorher-Entstehung zur tragenden Regel („Ein
Wellenprotokoll, das erst nach dem Versand entsteht, ist kein
Wellenprotokoll"), WP-02 behauptet den Beleg: „Belegt zusammen mit
`WP-31` die Vorher-Reihenfolge aus § 1", und die Checkliste prüft
„[ ] Block B vor der Auswahl geschrieben (**WP-02 < Auswahldatum**)".

Ein **Auswahldatum** ist in der ganzen Vorlage kein Feld (Block C hat
Mengen, kein Datum). WP-02 < WP-31 belegt nur, dass die Welle vor ihrer
Freigabe angelegt wurde — nicht, dass Block B vor der Auswahl
geschrieben wurde. Ein Ist-Versanddatum gibt es ebenfalls nicht (WP-27
ist das **geplante**; das Ist-Datum taucht nur als Journal-Zeile
„Versand \<n\>" auf).

**Wirkung:** Die Checklistenzeile ist aus dem Protokoll heraus nicht
ausführbar, und die Zusage in der WP-02-Zeile ist eine **Entwarnung ohne
Träger** — genau die Klasse, gegen die die Datei sonst sorgfältig
arbeitet.

**Ursachen-Diagnose / billigster Fix.** Das Repo hat einen unbestechlichen
Zeitstempel: Ein Feld „Commit-Hash Block A/B" (oder das Auswahldatum als
eigenes Feld) macht die Reihenfolge prüfbar. Selbstdeklarierte Daten
können es nie.

---

## 4. Kategorie C — „Wo behauptet die Vorlage Rechtssicherheit, die erst der anwaltliche Rat liefert?"

**Vorbemerkung — was hier gut ist:** Beide Dateien führen einen
Belegstufen-Kasten „zweite Hand durchgehend", nehmen die ①-A-Stufen
ausdrücklich **nicht** für sich in Anspruch, markieren ANL-3 als Setzung,
weisen P-1 als anwaltlich zu klären aus, und der Reparaturvermerk in § 11
(P-5-Begründung) ist ein echter, unbequemer Selbstfang. Die Zuordnung
7/7 trägt den richtigen Vorbehalt („zählt die Zuordnung, nicht die
Erfüllung; erfüllt ist heute keine"). Das ist überdurchschnittlich.
Sechs Stellen halten trotzdem nicht.

### PE-8 · MITTEL — Beide Dateien tragen die Geltungsgrenze der Quellen NICHT mit

**Befund.** `grep -in 'rechtsberatung\|geltungsgrenze'` über beide neuen
Dateien → **0 Treffer**. **Positivkontrolle im selben Lauf:**
`listenbau-regelwerk.md` = 2, `interessenabwaegung-o8.md` = 1.

Das Regelwerk verpflichtet dazu ausdrücklich: „Alle Rechtsaussagen
stammen aus `handel/kanal-rechtsmatrix.md` und **tragen deren
Geltungsgrenze mit**: ‚Dieses Dokument ist eine eigene Recherche zur
betrieblichen Orientierung. Es ist KEINE Rechtsberatung'". o8 tut
dasselbe im Kopf („Geltungsgrenze — bitte zuerst lesen").

Die Sperrdatei setzt an diese Stelle den schwächeren Satz „**Was es
NICHT ist:** keine Rechtsprüfung und keine neue Regel" — das ist eine
Aussage über die **Arbeitsweise**, keine Geltungsgrenze gegenüber dem
Leser. Das Wellenprotokoll hat an dieser Stelle **gar nichts**; sein
einziger Vorbehalt („zweite Hand") steht in § 14, also am **Ende** einer
486-Zeilen-Datei — nicht dort, wo der Leser ankommt.

**Wirkung.** Beide Dateien sind ausfüllbare Betriebsformulare mit
Normzitaten, Rechtsfolgen und Stopp-Regeln. Genau solche Dokumente
werden ohne ihre Quellen gelesen. Ohne die geerbte Geltungsgrenze liest
sich die Sammlung wie eine Compliance-Freigabe.

### PE-9 · MITTEL — „Rechtsgrundlage der Aufbewahrung — bereits belegt" wertet eine Setzung zur belegten Norm auf

**Befund.** `sperrdatei-struktur.md` § 1 Nr. 3: „Rechtsgrundlage der
Aufbewahrung — **bereits belegt, hier nur zitiert**: ‚Der Eintrag in der
**Werbesperrdatei** wird nicht gelöscht (Art. 21 Abs. 3 / Art. 17 Abs. 3
lit. b)' (`interessenabwaegung-o8.md` § 8, VVT-Block lit. f)."

Das Zitat ist **wortgetreu** (am Rohbeleg geprüft). Aber die Fundstelle
ist der **VVT-Eintrags-Vorschlag** in o8 § 8 lit. f — ein zur Übernahme
gebauter Textblock. An dieser Stelle steht **keine Belegstufe**; die
beiden Normen sind dort ohne ① A geführt, und o8 § 9.2 formuliert
dieselbe Aussage als betriebliche Begründung („sonst steht ein
Widersprechender bei der nächsten Runde wieder im Verteiler"). „Bereits
belegt" ist damit unbelegt.

**Warum das zählt:** „bereits belegt … hier nur zitiert" ist die
Formulierung, die jeden weiteren Prüfer beruhigt. Die Reparatur ist
Streichen des Belegstufen-Anspruchs, nicht Abschwächen — die
Aufbewahrung selbst ist an anderer Stelle (Regelwerk § 7.4,
Fristenausnahme) betrieblich getragen.

### PE-10 · MITTEL — Die Art.-15-Monatsfrist wird zur Frist des Art.-17-Falls umgewidmet

**Befund.** `sperrdatei-struktur.md` § 6.3: „⚠️ **Ein regulärer
Art.-17-Fall ist parallel weiter fristgebunden** (**Regelwerk § 7.4:**
Antwort binnen eines Monats, Verlängerung nur, wenn sie innerhalb des
ersten Monats mitgeteilt und begründet wird)."

Regelwerk § 7.4 sagt an dieser Stelle: „**Auskunftsprozess (Art. 15):**
Antwort binnen eines Monats, unentgeltlich; ‚eine Fristverlängerung ist
**nicht stillschweigend** möglich …' (C6)". Die Fundstelle ist **auf
Art. 15 gescopet**; über Löschverlangen sagt der Löschkonzept-Absatz
daneben nichts zu Antwortfristen.

Dass die Monatsfrist des Art. 12 Abs. 3 auch Art.-17-Anträge erfasst,
mag zutreffen — es ist aber eine **eigene Rechtsaussage** der Session,
und dieselbe Datei erklärt in § 11 ausdrücklich „**Diese Datei erhebt
keine eigenen Primärquellen**" und führt dieselbe Stelle dort korrekt als
„**Art.-15-Frist**". Die Datei widerspricht sich also selbst über die
Reichweite ihrer eigenen Fundstelle.

### PE-11 · MITTEL — „keine neue Regel" im Kopf, mehrere neue Regeln im Text

**Befund.** Kopf-Kasten Sperrdatei: „**Was es NICHT ist:** keine
Rechtsprüfung und **keine neue Regel**. Alle materiellen Vorgaben stammen
aus …". Neue Regeln im selben Dokument, aus den Quellen nicht ableitbar:

| Stelle | Neue Regel | Als Setzung markiert? |
|---|---|---|
| § 3, `ANL-3` | Impressumsvermerk wird **in der Sperrdatei geführt** | **Ja** (eigener Kasten + P-1) |
| § 3, `ANL-2` | Nicht als Widerspruch bezeichnete Ablehnung wird wie ANL-1 behandelt, **inkl. B-3-Antwortschreibenpflicht** | **Nein** — Spalte „Grundlage" nennt R-B7/R-B8, als wäre es Quellenaussage |
| § 3, `ANL-4` | Rückläufer mit Vermerk = Sperrfall | **Nein** — „Grundlage: R-B7 (formloser Eingang)" |
| § 2, `SP-09` | Abweichung von „alle Kanäle" zulässig (s. PE-12) | **Nein** |
| § 4 | Meldeschwelle „mehr als ein Werktag" | **Ja** (§ 8 P-2) |

**Wirkung.** Die Markierungsdisziplin ist da — sie ist nur nicht
vollständig angewandt, und die Kopf-Zusage „keine neue Regel" macht aus
der Lücke eine aktive Fehlinformation. ANL-2/ANL-4 wirken in die
**sichere** Richtung (mehr Pflichten), das mindert die Schwere; die
Belegstufen-Frage bleibt.

### PE-12 · MITTEL — SP-09 baut eine Ausnahme von der kanalübergreifenden Bindung, unmittelbar neben dem Zitat, das sie trägt

**Befund.** SP-09 „Reichweite der Sperre": „Standardwert `alle Kanäle`;
**ein abweichender Wert ist nur mit ausdrücklicher Erklärung des Betriebs
zulässig** und braucht `SP-15`" — begründet mit dem Zitat „Ein erklärter
Widerspruch bindet uns **kanalübergreifend**" (Regelwerk § 3 Pflicht 2,
nach A7) und dem Zusatz, das Feld existiere, „damit die
Kanalübergreifendheit **sichtbar** ist, nicht damit sie verhandelbar
wird".

Genau das tut die Zeile aber: Sie schafft einen zulässigen Weg zu einer
Teil-Sperre. Ob eine betroffene Person ihren Widerspruch wirksam auf
einen Kanal begrenzen kann, ist eine Rechtsfrage — sie ist in keiner der
Quellen behandelt, in § 8 nicht als offener Punkt geführt und nicht als
Setzung markiert. Das Zitat daneben sagt inhaltlich das Gegenteil der
Zeile, in der es steht.

**Wirkung.** Das einzige Feld des Werkzeugs, das eine **Schutzwirkung
verkleinern** kann, ist zugleich das einzige mit unmarkierter
Rechts-Setzung. Sicherer Zustand wäre: Abweichung nur als
`SP-15`-Vermerk **ohne** Wirkung auf die Sperrreichweite, bis geklärt.

### PE-13 · HINWEIS — „genau der Impressums-Anteil ist das Maß des getragenen Risikos" dehnt eine FG-4-Aussage auf FG-2 aus

**Befund.** Quelle (o8 § 5.4 FG-4): „**Der Anteil dieser Fallgruppe** an
einer Welle ist zu protokollieren (§ 10, B-6) — er ist das Maß des
getragenen Risikos." Vorlage § 10 Nr. 2: „und genau **der
Impressums-Anteil** ist das Maß des getragenen Risikos."

FG-2 und FG-4 tragen unterschiedliche Risiken (FG-2 argumentiert mit
ErwG 14 S. 2, FG-4 mit dem bewusst getragenen Weg-(b)-Restrisiko). Die
Zusammenfassung zu „der Impressums-Anteil" ist eine Verdichtung, die die
Quelle nicht deckt. WP-18 selbst zitiert korrekt („o8 § 5.4, FG-4").

---

## 5. Die vier ausdrücklich beauftragten Zusatzprüfungen

### 5.1 Ist der Beileger-TEXT wirklich nicht geschrieben? — **JA, positiv am Objekt geprüft**

Vier unabhängige Messungen, nicht eine Abwesenheitsvermutung:

1. **Dateiliste** `akquise/` (`ls -la`): sieben Dateien — Akquiseplan,
   o8, Regelwerk, `pruefe-zitate.js`, `selbsttest-zitate.md`, die beiden
   neuen Werkzeuge. **Keine Beileger-/Anschreiben-Datei.**
2. **Volltreffer-Liste** `grep -rn --include="*.md" -o 'Beileger[^ ]*'`
   über das ganze Repo: 19 Fundstellen in 7 Dateien — **sämtlich
   Meta-Verweise** (Feld WP-21, Gate-Zeile, § 10 Nr. 4, § 11 B-7-Zeile,
   Ausfüll-Platzhalter, Quell-/Protokoll-Erwähnungen). Kein Textkörper.
3. **Textkörper-Marker** (`Sehr geehrte`, `Ihre Daten haben wir`, `Sie
   können der Verarbeitung`) über `akquise/`, `handel/`, `fund/`: vier
   Treffer, **alle in Anbieter-/Behörden-Anfragen**
   (`entwurf-anfrage-ifb-hamburg.md`, `-wtsh.md`, `-dehoga-sh.md`,
   `-ihk-sh.md`) — keiner im Akquise-Kontext.
   **Positivkontrolle im selben Lauf:** `Widerspruch` in `akquise/` =
   2/12/22/0/16/14 Treffer je Datei (Suchraum antwortet).
4. **Im Werkzeug selbst** trägt WP-21 den sprechenden Platzhalter
   `<<BEILEGER-VERSION — TEXT NICHT GEBAUT>>`, und die Freigabe-Checkliste
   sperrt darauf („WP-21 und WP-22 tragen echte Versionen, keine
   Platzhalter").

**Ergebnis: Die Untersagung ist eingehalten.** Zusätzlich positiv: Die
Vorlage hat der Versuchung widerstanden, **vorab eine Versionsnummer** zu
vergeben, und begründet das ausdrücklich („Eine Version bezeichnet einen
existierenden Text, sonst belegt das Protokoll etwas, das es nicht
gibt"). Das ist die richtige Härte.

### 5.2 Zuordnungstabelle B-1…B-7 (Wellenprotokoll § 11) — Nenner bestätigt, ZWEI Zuordnungsfehler

**Nenner unabhängig reproduziert** (am Prüfstand, eigener Lauf):
`grep -c '^| \*\*B-[1-8]\*\*' akquise/interessenabwaegung-o8.md` = **8**;
`grep -o` derselben Muster listet lückenlos **B-1 · B-2 · B-3 · B-4 ·
B-5 · B-6 · B-7 · B-8**; Positivkontrolle `^| \*\*B-8\*\* | ⛔
\*\*GESTRICHEN` = **1**; Gegenrichtung `B-9`/`B-1[0-9]` = **0**. Der
Nenner **7** und der Zählweg der Vorlage sind korrekt; die Behauptung
„wie auch der Index-Kasten in Regelwerk § 3 zählt" ist ebenfalls korrekt
(§ 3-Nachtrag: „übernommen sind die sieben aktiven Pflichten B-1…B-7").

**Zeilenweise Prüfung der ZUORDNUNG** (nicht der Zahl):

| Zeile | Einstufung der Vorlage | Prüfergebnis |
|---|---|---|
| B-1 | teilweise, Träger Regelwerk § 7.1 + P-1 | **trägt** (Einschränkung PE-3 betrifft die Vollständigkeit des Feldes, nicht die Einstufung) |
| B-2 | teilweise, Träger F-7 + MKT-OPS | **trägt** |
| B-3 | teilweise, „der **Text** ist nicht hier: Träger F-7" | **trägt** |
| B-4 | ✅ **vollständig** | **PE-14 — trägt nicht** |
| B-5 | teilweise, Texte + erste Versionsnummern nicht hier | **trägt** |
| B-6 | ✅ vollständig | **trägt** (alle fünf B-6-Elemente sind abgebildet: WP-06…09 · WP-10/11/17 · WP-18 · Block D · WP-21/22) — mit den Einschränkungen PE-2 und PE-16 |
| B-7 | ⛔ ausdrücklich nicht hier | **trägt** |

#### PE-14 · MITTEL — B-4 „✅ vollständig" nach einem Kriterium, das bei B-3 zu „teilweise" führt

**Befund.** B-4 verlangt in der Quelle eine **Mitteilung an die
betroffene Person**: Wer die Löschung aus der Sperrdatei verlangt, „wird
darauf hingewiesen, dass er ‚eventuell wieder Werbung erhalten kann'".
Dieser **Hinweistext** ist ebenso wenig geschrieben wie das
Antwortschreiben aus B-3 und hängt an derselben Firmierung (F-7) — die
Sperrdatei bildet nur den **Ablauf** und das **Nachweisfeld** SP-14.4 ab.

Bei B-3 führt genau diese Lage zu „**teilweise** — Nachweisfelder und
Ablauf stehen. Der **Text** ist nicht hier". Bei B-4 wird dieselbe Lage
zu „✅ **vollständig**". Das Kriterium wird zwischen zwei Zeilen derselben
Tabelle gewechselt — und der Wechsel geht in Richtung der eigenen
Leistung (B-4 ist die im Commit-Betreff gefeierte Pflicht).

**Folgewirkung:** Korrekt eingestuft lautet die Summe nicht „2
vollständig / 4 teilweise / 1 nicht hier", sondern „**1 / 5 / 1**".

#### PE-15 · MITTEL — Die „Summenprobe der Zuordnung" (2+4+1=7) kann per Konstruktion nicht anders ausfallen

**Befund.** Die Probe zählt sieben Tabellenzeilen in drei Kategorien und
prüft, ob die Summe sieben ergibt. Da jede Zeile genau eine Kategorie
trägt, ist das Ergebnis **immer** 7 — unabhängig davon, **welche**
Kategorie eine Zeile bekommt. Die Probe fängt eine vergessene oder
doppelt gezählte Zeile; eine **Fehleinstufung** (PE-14) kann sie
strukturell nicht sehen. Der ausgewiesene Vorbehalt („zählt die
Zuordnung, nicht die Erfüllung") adressiert eine **andere** Frage und
liest sich, als sei damit die Grenze der Probe benannt.

**Prüffrage nach L-30 angewandt:** „Könnte das Ergebnis überhaupt anders
ausfallen?" — für die Einstufungsachse: **nein**. Die Probe ist an dieser
Achse eine Positivliste in Verkleidung.

### 5.3 Die drei Summenproben in § 6 — eine trägt, eine trägt mit Einschränkung, eine ist teils Tautologie

#### Probe 1 (Mengen, ohne Rest)

Formal korrekt und **fehlschlagfähig**: WP-17 ist unabhängig definiert
(„die tatsächlich angeschriebenen Adressen"), die fünf Abzüge sind
eigenständig erhoben. Eine Fehlbuchung erzeugt einen Rest ≠ 0. **Aber:**

#### PE-16 · SCHWER — Der zweite R-B6-Anlass (jeder VERSAND) fällt aus Probe 3 und aus der Freigabe-Checkliste heraus

**Befund.** R-B6 (Regelwerk § 7.3) verlangt den Abgleich „**Vor jedem
Versand** und **vor jedem Druckauftrag**" — die Vorlage macht daraus
ihren eigenen Hauptbefund (§ 10 Nr. 3: „R-B6 nennt **zwei** Anlässe").
Die daraus gebaute Kontrolle kennt aber nur **einen**:

- Probe 3, zweite Zeile: „Zahl der Zeilen in Block D **≥ Zahl der
  Druckaufträge + 1**".
- Checkliste WP-32: „[ ] Sperrdatei-Abgleich für **JEDEN Druckauftrag**
  im Journal (Block D)".

Block D kennt selbst **drei** Anlass-Typen (`Wellenfreigabe` /
`Druckauftrag <n>` / `Versand <n>`, jeweils nummeriert, also
mehrfach möglich). Eine Welle mit 1 Freigabe + 2 Druckaufträgen + 2
Versänden braucht **5** Zeilen; die Probe verlangt ≥ 3 und meldet grün.
Das „+1" bildet erkennbar die Wellenfreigabe ab — der Versand-Anlass
kommt in **keiner** der beiden Kontrollen vor.

**Warum das schwer wiegt:** Es ist der einzige Fall, in dem eine
Kontrolle des Dokuments **genau die Regel verfehlt, deren Verschärfung
das Dokument als eigene Leistung ausweist**. Und es ist die Kontrolle vor
einer Freigabe: Ein fehlender Abgleich vor dem Versand ist ein Verstoß
gegen rote Linie 9 des Regelwerks („Kein Versand ohne vorherigen
Sperrdatei-Abgleich"), den die Freigabe-Checkliste durchwinkt.

**Fix (mechanisch):** „Zeilen in Block D ≥ 1 + Druckaufträge + Versände"
und Checklistenzeile auf „für JEDEN Druckauftrag **und jeden Versand**".

#### PE-17 · MITTEL — Zählschlüssel-Bruch in Probe 1: Betriebe minus Aussteuerungen = Adressen

**Befund.** WP-11 = „Kandidatenmenge (**geprüfte Betriebe**)", WP-17 =
„Versandmenge (Ist) — die tatsächlich **angeschriebenen Adressen**". Die
Probe subtrahiert in einer Kette über zwei verschiedene Zählschlüssel.
Ebenso mischt die Abzugsreihe zwei Lebensphasen: WP-12 (Quelle ⛔) und
WP-13 (B-1) fallen nach Regelwerk § 7.1 Schritt 2 **vor** der
Datensatzanlage an, WP-14/WP-15 betreffen **bestehende Datensätze**.

**Wirkung.** Trägt ein Betrieb zwei versandfähige Adressen, geht die
Probe bei völlig korrekter Welle **nicht** auf — oder sie wird
„passend gemacht", was § 6 selbst als den zu findenden Fehler
bezeichnet. Umgekehrt kann eine Doppelzählung einen echten Fehler
maskieren. CLAUDE.md verlangt den Zählschlüssel **an jeder Zahl**; hier
fehlt er an beiden Enden derselben Gleichung.

#### PE-18 · HINWEIS — Überschießende Formulierung und eine Doppel-ID in Probe 2/3

Drei kleinere Punkte:

1. § 6 behauptet: „Die Probe ist so gebaut, dass ein Fehler ein
   **unmögliches** Ergebnis liefert, nicht ein knapp danebenliegendes."
   Ein Rest von 1 ist knapp danebenliegend und erkennbar — die Probe ist
   gut, die Formulierung ist eine Nummer zu groß.
2. **Probe 3, erste Zeile** („Summe der Treffer-Spalte in Block D =
   WP-14") prüft WP-14 gegen seine **eigene Felddefinition** („WP-14 |
   Ausgesteuert · Sperrdatei-Treffer | **Summe aus Block D**"). Das ist
   ein Übertragungsfehler-Schutz, keine unabhängige Kontrolle — sie kann
   nur fehlschlagen, wenn jemand die Definition verletzt. Als solche
   ausweisen.
3. **WP-20 trägt zwei Werte unter einer ID** („Anteile FG-1 **und**
   FG-3") und erscheint in Probe 2 zweimal in derselben Summe
   („WP-20 (FG-1) + … + WP-20 (FG-3)"). Als einziges Feld der Vorlage
   bricht es die Ein-ID-ein-Feld-Konvention; WP-20a/WP-20b zeigen, dass
   der saubere Weg im selben Block verfügbar war.

*Zur Erschöpfung der Partition:* Probe 2 setzt voraus, dass FG-1…FG-6 die
Versandmenge lückenlos partitionieren. Das ist nach o8 § 5.4 plausibel,
**von mir aber nicht an einer Primärquelle verifiziert** und in der
Vorlage nicht als Annahme ausgewiesen (s. 1.4 Nr. 3).

### 5.4 Die vier Punkte in § 10 — am Rohbeleg, am Stück gelesen

| Punkt | Behauptung | Prüfung am Rohbeleg | Ergebnis |
|---|---|---|---|
| **1** (WP-13) | Regelwerk § 7.1 lässt die Frage offen | § 7.1-Nachtrag, Absatz am Stück gelesen: „Ob das Prüfergebnis als eigenes Protokollfeld geführt wird, ist Umsetzungsfrage beim ersten Wellenbau." | **belegt**, wörtlich |
| **2** (FG-2) | o8 § 5.4 verlangt den FG-2-Anteil wörtlich; § 6.1-Nachtrag nennt nur FG-4 | FG-2-Zeile am Stück gelesen: „**Anteil im Wellenprotokoll ausweisen** (B-6)" steht dort ✓; § 6.1-Nachtrag nennt „Anteil FG-4 (Impressumsquelle)" ✓ | **belegt — aber das Zitat bricht vor einer dritten, nicht umgesetzten Pflicht ab (PE-1), und die Risiko-Aussage wird gedehnt (PE-13)** |
| **3** (mehrzeilig) | R-B6 nennt zwei Anlässe; § 6.1-Nachtrag verkürzt auf „**Datum** des Sperrdatei-Abgleichs" (Singular) | Beide Stellen am Stück gelesen ✓ | **belegt** — aber die eigene Kontrolle setzt es nicht um (PE-16) |
| **4** (zwei Textversionen) | B-5 nennt „Der Art.-14-Beileger **und** der Widerspruchs-Kasten"; § 6.1-Nachtrag führt nur „Textversion" (Singular) | o8 § 10 B-5 am Stück gelesen: „Der Art.-14-Beileger und der Widerspruchs-Kasten bekommen eine Versionsnummer; je Welle wird protokolliert, welche Version an welche Adressen ging (‚revisionsfeste Dokumentation …')" ✓; § 6.1-Nachtrag: „… **Textversion** (B-5, § 3 Pflicht 1)" ✓ Singular | **belegt**, beide Hälften |

**Zusatzbefund zum Belegstufen-Anhang von Punkt 4:** Das B-5-Zitat in
Block F trägt die Angabe „(DSK Ziff. 2.1, ① A — zitiert nach Regelwerk
§ 3 Pflicht 1, dieses nach o8 § 10 B-5)". Von dem zitierten Satz stammt
nur der **innere** Teil („revisionsfeste Dokumentation der tatsächlich
genutzten Texte mit Versionsnummer") aus der DSK; der äußere Satz ist die
Formulierung des Regelwerks/o8. Die Kette ist offengelegt und § 14 nimmt
① A ausdrücklich nicht in Anspruch — deshalb **kein eigener Befund**,
aber der ① A steht syntaktisch am ganzen Block.

---

## 6. Dubletten, Querverweise, Kurz-IDs

### PE-19 · MITTEL — Zwei Dubletten zwischen den neuen Dateien ohne Wächter und ohne wirksame Vorrangklausel

**Befund.**

1. Die **Null-Treffer-Regel** steht praktisch wortgleich in
   `sperrdatei-struktur.md` § 5 („Ein Abgleich mit null Treffern wird
   genauso protokolliert wie einer mit Treffern. Ein fehlender
   Journal-Eintrag ist ununterscheidbar von einem unterlassenen
   Abgleich") **und** in `wellenprotokoll-vorlage.md` § 5 („Ein Abgleich
   mit null Treffern wird genauso eingetragen … Eine fehlende Zeile ist
   ununterscheidbar von einem unterlassenen Abgleich").
2. Die **Zuordnungstabelle**: `sperrdatei-struktur.md` § 10 sagt
   „Vollständige Zuordnung siehe … — dort steht sie **einmal** für beide
   Werkzeuge" — und wiederholt darunter die Einstufungen für B-1, B-2,
   B-3 und B-4. Inhaltlich stimmen die beiden Fassungen **heute**
   überein (zeilenweise geprüft); die Behauptung „einmal" stimmt nicht.

**Warum die vorhandenen Vorrangklauseln nicht greifen:** Beide Dateien
tragen die Klausel „bei Widerspruch gewinnt das **Regelwerk**". Keine der
beiden duplizierten Aussagen steht im Regelwerk — es sind Setzungen von
R15-E. Zwischen den beiden neuen Dateien gibt es **keine** Rangfolge und
keinen Kopien-Wächter; beide liegen zudem außerhalb des Prüfraums von
`pruefe-zitate.js` (P-5). Doku-Hygiene-Prüffrage: „Wer merkt es, wenn die
beiden auseinanderlaufen?" — **niemand.**

Positiv gegenzuhalten: Das **Abgleich-Journal selbst** wurde korrekt
genau **einmal** angelegt, mit ausdrücklichem Vermerk in beiden Dateien
und im Regelwerks-Zeiger. Das ist die richtige Lösung — sie wurde nur
nicht auf die Begleitregeln angewandt.

### PE-20 · MITTEL — Kurz-ID-Kollision: P-1…P-5 gegen o8 § 5.1 P-1…P-8

**Messung** (`grep -rn --include="*.md" -oE '\bP-(0?[1-9]|1[0-9]|2[0-9])\b'`,
ganzes Repo, je Datei aggregiert):

| Datei | Serie | Bedeutung |
|---|---|---|
| `interessenabwaegung-o8.md` | **P-1 … P-8** | Abwägungs-**Pro-Faktoren** (§ 5.1) |
| `sperrdatei-struktur.md` | **P-1 … P-5** | **offene Punkte** dieser Datei (§ 8) |
| `wellenprotokoll-vorlage.md` | **P-1, P-5** (= Sperrdatei) **und P-7** (= o8-Faktor) | **beide Serien in einer Datei** |
| `listenbau-regelwerk.md`, `akquiseplan.md`, `angebotsarchitektur.md`, `preisliste-vorlaeufig.md`, `CLAUDE.md` u. a. | P-01 … P-27 | Prüferbefunde (zweistellig, dadurch unterscheidbar) |

Die Kollision ist **einstellig gegen einstellig** und damit nicht
formal auflösbar. Sie schlägt bereits durch: `sperrdatei-struktur.md`
§ 3 schreibt unqualifiziert „Der Punkt ist als **P-1** in § 8 geführt",
während in der Schwesterquelle P-1 „Ausschließlich berufliche Sphäre"
bedeutet; `wellenprotokoll-vorlage.md` § 1 verweist auf „§ 5.1, **P-7**"
(o8) und § 11/§ 14 auf „Sperrdatei **P-1**/**P-5**" — dieselbe
Zeichenkette, zwei Namensräume, unterschieden nur durch das
danebenstehende Dokument.

CLAUDE.md verlangt vor der Vergabe neuer Kurz-IDs das Greppen der
Nachbardokumente; `interessenabwaegung-o8.md` ist die **direkt zitierte**
Nachbarquelle. **Fix:** Präfix (`SPD-P-1…`) oder Weiterzählung.

**Gegenprobe, sauber:** `SP-`, `WP-` und `ANL-` sind **kollisionsfrei** —
alle Fundstellen außerhalb der jeweils definierenden Datei sind gewollte
Querverweise (Regelwerks-Zeiger, Wellenprotokoll → SP-01/SP-06/SP-11/
SP-13/SP-14, Wellenprotokoll → ANL-3). `WP-` hat außerhalb seiner Datei
**null** Treffer. **Positivkontrolle im selben Lauf:** `SP-01` = 5
Treffer (Sperrdatei) / 3 (Wellenprotokoll).

### PE-21 · MITTEL — Fundstellen-Drift: Verweis auf „Wellenprotokoll § 8" trifft „Block G — Fristen"

**Befund.** `sperrdatei-struktur.md` § 10, erster Satz: „Vollständige
Zuordnung siehe `akquise/wellenprotokoll-vorlage.md` **§ 8** — dort steht
sie einmal für beide Werkzeuge, mit Zählweg."

Überschriften-Erhebung am Prüfstand (`grep -n '^## '`): § 8 =
„**Block G — Fristen**"; die Zuordnung steht in **§ 11** („Zuordnung der
Bau-Pflichten B-1…B-7 zu den beiden Werkzeugen"). Die Gegenrichtung ist
korrekt: `wellenprotokoll-vorlage.md` § 14 verweist richtig auf
„`sperrdatei-struktur.md` § 8 (P-5)".

**Ursachen-Diagnose.** Zahlendreher zwischen zwei Dateien mit je eigener
§-Zählung; die Ziffer 8 ist in der **anderen** Datei die richtige. Genau
die Klasse, für die CLAUDE.md „Aussage und Fundstelle getrennt prüfen"
verlangt.

*Kleiner Nachbarfall, gleiche Klasse:* Sperrdatei § 7 Nr. 4 schreibt
„(§ 7.4: von allen Fristen ausgenommen)" ohne Dokumentnamen, in einer
Liste, in der Nr. 1 und Nr. 6 „Regelwerk § …" ausschreiben. Die
Sperrdatei hat kein § 7.4.

### PE-22 · MITTEL — Vorwärtsverweis fehlt an zwei Ankunftsstellen; die genannte Begründung trägt nicht

**Befund.** Die drei Zeiger-Kästen sitzen in Regelwerk § 3 Pflicht 2,
§ 6.1 und § 7.3. **Ohne Zeiger blieben:**

- **§ 7.1** — die Stelle, an der die Umsetzungsfrage steht, die WP-13
  beantwortet („Ob das Prüfergebnis als eigenes Protokollfeld geführt
  wird, ist Umsetzungsfrage beim ersten Wellenbau"). Der Leser, der dort
  ankommt, erfährt nicht, dass sie beantwortet ist.
- **§ 10** — O-3 („offen bleibt allein der Bau"; durch die Vorlage
  erledigt, wie der § 6.1-Zeiger selbst feststellt) und O-12 („Das
  Skript prüft nur Akquiseplan und dieses Regelwerk"; von R15-E im
  eigenen Reparaturvermerk als **überholt** erkannt und belegt).

**Die genannte Begründung.** Sperrdatei § 11: „Die Nachführung von O-12
im Regelwerk liegt bei der Leitsession (**Wahrheits-Kanal-nah**, R15-E
fasst § 10 nicht an)"; Regelwerks-Zeiger § 6.1: „liegt bei der
Leitsession (**Wahrheits-Kanal-Regel**)". CLAUDE.md definiert den
Wahrheits-Kanal abschließend als **Projektquelle, STATUS.md, CLAUDE.md
und Skills/Commands**. `akquise/listenbau-regelwerk.md` gehört nicht
dazu — und dieselbe Session hat **drei andere Abschnitte derselben
Datei** geändert. Die Regel deckt die Selbstbeschränkung nicht.

**Getrennt davon (nicht prüfbar):** Ob der Start-Prompt den Scope so
gesetzt hat, kann ich nicht feststellen (s. 1.4 Nr. 2). Der **Befund**
betrifft die im Dokument genannte Begründung und die zwei stehen
gebliebenen Ankunftsstellen, nicht die Scope-Entscheidung als solche.

*Nebenbeobachtung, kein eigener Befund:* Der Regelwerks-Zeiger zählt
**drei** Über-den-Nachtrag-hinaus-Stellen, die Vorlage **vier** (der
Zeiger klammert Punkt 1 aus, weil er § 7.1 statt § 6.1 betrifft — sachlich
konsistent, für den Leser aber ohne Erklärung).

### PE-23 · MITTEL — Drei einander widersprechende Fassungen der SP-11-Pflicht bei ANL-4

**Befund.** Dieselbe Datei sagt an drei Stellen Verschiedenes:

| Stelle | Aussage zu `ANL-4` |
|---|---|
| § 2, Zeile SP-11 | „Pflicht bei `ANL-1` und `ANL-2`, bei `ANL-3`/**`ANL-4`** **leer**" |
| § 3, Zeile ANL-4 | „✅ **Nur, wenn ein Absender erreichbar ist**; sonst `SP-11` leer" |
| § 9, Ausfüll-Vorlage | „SP-11 Antwortschreiben am … **[bei ANL-3: leer]**" (ANL-4 also gefüllt) |

Die SP-11-Zeile ist die **pflichtenärmste** Fassung — sie streicht das
Antwortschreiben für einen Fall, in dem § 3 es ausdrücklich verlangt.

*Gleiche Stelle, zweiter Punkt:* § 4 Schritt 5 formuliert „Antwortschreiben
nach B-3, sofern `ANL-1`/`ANL-2`/`ANL-4` **mit erreichbarem Absender**" —
die Bedingung ist grammatisch auf alle drei beziehbar und relativiert
damit auch die unbedingte Pflicht bei ANL-1/ANL-2.

---

## 7. Was gut ist (damit die Befundliste nicht in die Irre führt)

Diese Punkte sind ausdrücklich geprüft und halten:

1. **Der Beileger-Text ist nicht geschrieben** — vierfach positiv belegt
   (5.1), inklusive der Enthaltsamkeit bei der Versionsnummer.
2. **Der Nenner 7** und sein Zählweg sind unabhängig reproduzierbar,
   inklusive Positivkontrolle und Gegenrichtung (5.2).
3. **Das Abgleich-Journal existiert genau einmal**, an der sachlich
   richtigen Stelle (dort, wo die Menge steht), mit Vermerk in beiden
   Dateien und im Regelwerk.
4. **Der Reparaturvermerk zu P-5** (§ 11 Sperrdatei) ist ein echter
   Selbstfang gegen die eigene Leistung: Die Begründung war aus zweiter
   Hand übernommen, das Ergebnis blieb gleich — und beides steht
   sichtbar da, statt still geglättet zu werden. Die P-5-Aussage selbst
   ist am Skript **verifiziert**: `ZIEL` enthält am zitierten Stand
   `3067361` **und** am HEAD genau die sechs genannten Dateien, die
   beiden neuen sind nicht darunter (Positivkontrolle:
   `listenbau-regelwerk` = 4 Treffer im Skript).
5. **Die Gate-Kästen** sind das Beste an beiden Dateien: je Gate eine
   benannte Abhängigkeit, eine Wirkung und ein Träger — und die
   Platzhalter-Regel („nie durch eine plausible Erfindung ersetzt").
6. **Alle stichprobenhaft am Rohbeleg gegengelesenen Zitate sind
   wortgetreu** (geprüft: Betriebsform § 3 Pflicht 2 · R-B6 · R-B1 ·
   R-B2 „ein dritter Weg" · R-B3 · R-B4 · R-B11/B-4 · R-F1 ·
   „unverzüglich"/A5 · „kanalübergreifend"/A7 · „keine neuen
   Druckaufträge" · DSK-OH 1.3.1 · P-7 „Auflage, kein Ist-Zustand" ·
   B-5). Die einzige Zitat-Beanstandung ist der **Abbruch ohne
   Auslassungszeichen** in PE-1.
7. **Die Leerzeilen-Kästen** („Die Leerzeile ist ein Befund, kein
   Formfehler" / „Wer hier später nichts findet, prüft zuerst die
   Gates") sind genau die Vorsorge, die einen späteren Fehlschluss
   verhindert.

---

## 8. Zusammenfassung mit Nenner

**23 Befunde, davon 4 schwer, 16 mittel, 3 Hinweise.**

| Kategorie | Nenner | Schwer | Mittel | Hinweis |
|---|---|---|---|---|
| **A** — nicht angekommen | **4** | 2 (PE-1, PE-2) | 1 (PE-3) | 1 (PE-4) |
| **B** — nicht ausfüllbar / Voraussetzung fehlt | **3** | 1 (PE-5) | 2 (PE-6, PE-7) | 0 |
| **C** — behauptete Rechtssicherheit / Belegstufe | **6** | 0 | 5 (PE-8…PE-12) | 1 (PE-13) |
| **Zusatzauftrag** Zuordnungstabelle | **2** | 0 | 2 (PE-14, PE-15) | 0 |
| **Zusatzauftrag** Summenproben | **3** | 1 (PE-16) | 1 (PE-17) | 1 (PE-18) |
| **Zusatzauftrag** Dubletten / IDs / Verweise | **5** | 0 | 5 (PE-19…PE-23) | 0 |
| **Summe** | **23** | **4** | **16** | **3** | 

**Die vier schweren Befunde in einem Satz:**

- **PE-1** — eine Pflicht der Quelle (FG-2-Einstufung je Datensatz
  belegbar) ist nicht angekommen, und das Zitat endet ohne
  Auslassungszeichen genau davor.
- **PE-2** — die Trigger aus o8 § 11.3, insbesondere die
  **300er-Wellenschwelle**, haben im Wellenprotokoll kein Feld; die
  eigenen Planzahlen liegen darüber.
- **PE-5** — § 9 der Sperrdatei stellt eine **Repo-Tabelle** als
  „tragfähige Erstform" für einen personenbezogenen Bestand bereit, gegen
  die Ablageregel beider Quellen (o8 § 8 lit. g, Regelwerk § 11).
- **PE-16** — Probe 3 und die Freigabe-Checkliste kontrollieren nur den
  Druckauftrags-Anlass; der **Versand**-Anlass des R-B6 fällt heraus —
  ausgerechnet in dem Dokument, das die Zweizahl der Anlässe als eigenen
  Befund ausweist.

**Bewertung im Ganzen.** Beide Werkzeuge sind handwerklich deutlich
über dem Durchschnitt: Gates statt Platzhalter-Erfindungen, Setzungen
überwiegend markiert, Zitate wortgetreu, ein echter Selbstfang, ein
korrekt einmalig angelegtes Journal. Die Befunde sitzen fast durchweg an
derselben Stelle — dort, wo eine **Kontrolle** oder eine **Belegstufe**
etwas verspricht, das sie nicht halten kann (PE-2, PE-3, PE-7, PE-9,
PE-15, PE-16, PE-18). Keiner der Befunde erzeugt heute einen realen
Schaden, weil alle Gates offen sind; **PE-5 ist der einzige, der auch bei
geschlossenen Gates sofort wirkt**, weil ein Sperrfall ohne Versand
entstehen kann.

---

## 9. Die zwei Pflichtfragen zum Schluss

### 9.1 „Welche Verfälschung hätte mein Verfahren NICHT gefangen?"

Vier Klassen, ehrlich benannt:

1. **Eine sachlich falsche, aber wortgetreue Rechtsaussage.** Ich habe
   Zitate gegen die **Repo-Quellen** geprüft, nicht gegen die
   Primärquellen (DSK-Orientierungshilfe, EuGH, LG Düsseldorf liegen in
   `sensibel/`, außerhalb meines Zugriffs). Hätte bereits o8 oder das
   Regelwerk eine Norm falsch wiedergegeben und die neuen Dateien geben
   sie korrekt weiter, sähe das bei mir wie ein sauberer Beleg aus. Mein
   Prüfweg ist **zweite Hand** — dieselbe Grenze, die die Prüflinge für
   sich ausweisen.
2. **Eine erfundene Zahl in einem noch leeren Feld.** Es gibt keinen
   Bestand: kein Sperrfall, keine Welle. Alles, was ich über die
   Ausfüllbarkeit sage, ist eine Aussage über die **Form**, nie über
   Werte. Eine Vorlage, die im Betrieb systematisch falsch ausgefüllt
   wird, kann ich nicht sehen.
3. **Eine Verfälschung in der Gegenrichtung der Kategorien.** Ich habe
   Kategorie A von den **mir genannten** Ankern rückwärts gelesen
   (B-1…B-7, § 7.3, § 6.1, § 7.1, § 7.2, § 7.4, § 5.1–5.3, § 9, § 11.3).
   Eine Pflicht, die in einem Kapitel steht, das ich nicht als Anker
   hatte — etwa in `handel/kanal-rechtsmatrix.md`, die ich **nicht
   gelesen** habe, obwohl beide Prüflinge sie als vorrangige Quelle
   nennen —, wäre mir entgangen. Das ist die **größte** Lücke dieses
   Protokolls: Die Vorrangklausel der Prüflinge zeigt auf ein Dokument,
   das ich nicht geprüft habe.
4. **Semantisch verschobene Feldbezeichnungen.** Bei rund 50 Feldern habe
   ich Wertebereiche und Pflichtangaben gelesen, aber nicht jedes Feld
   gegen jedes andere auf Konsistenz gepaart (bei 48 Feldern wären das
   über 1.100 Paare). PE-23 habe ich gefunden, weil die drei Fassungen
   dicht beieinander standen; eine gleichartige Kollision zwischen
   Block C und Block G hätte ich vermutlich übersehen.

### 9.2 „Hätte ich diese Funde auch ohne die Kategorien-Hinweise oben gefunden?"

**Teils — und die Aufteilung ist unbequem.**

- **Ohne Hinweis gefunden hätte ich** (sie fallen beim normalen
  Rückwärtslesen auf): PE-1 (das Zitat bricht sichtbar mitten in einer
  Aufzählung ab), PE-14/PE-15 (die Kriterienbruchstelle steht in
  benachbarten Tabellenzeilen), PE-16 (die Formel widerspricht dem
  eigenen § 10 Nr. 3 zwei Seiten weiter), PE-21, PE-23.
- **Nur wegen der Kategorie-B-Frage gefunden:** PE-5. Ich hätte § 9 als
  harmlose Kopiervorlage gelesen; erst die Frage „**welches Feld setzt
  etwas voraus, das nicht feststeht?**" hat mich zur Frage „wo lebt der
  Bestand eigentlich?" gebracht — und damit zu o8 § 8 lit. g. Das ist
  der schwerste Befund des Protokolls, und er verdankt sich dem
  Auftrags-Raster.
- **Nur wegen der Kategorie-C-Frage gefunden:** PE-8, PE-9, PE-10,
  PE-12. Entwarnungen lesen sich beim normalen Durchgang wie
  Nicht-Aussagen — „bereits belegt, hier nur zitiert" und „keine neue
  Regel" hätte ich ohne die ausdrückliche Suche nach Entwarnungen
  überlesen.
- **Wahrscheinlich gar nicht gefunden, mit oder ohne Hinweis, wenn nicht
  die Rückwärts-Auflage bestanden hätte:** PE-2. Die 300er-Schwelle
  steht in o8 § 11.3 — einem Kapitel, das keiner der Quellverweise der
  Prüflinge nennt. Ich bin nur darauf gestoßen, weil die Auflage lautete,
  **das ganze Dokument** als Leseraum zu nehmen. Ohne diese Auflage hätte
  ich nach § 5.1/§ 5.4/§ 10 aufgehört — also genau dort, wo die Prüflinge
  aufgehört haben.

**Konsequenz für den nächsten Prüfauftrag:** Der Zusatz „der genannte
Abschnitt ist nur der Einstieg" hat hier einen schweren Befund
freigelegt, den die Kategorien allein nicht gefunden hätten. Die drei
Kategorien haben fünf weitere Befunde erzeugt, die ein freier Durchgang
nicht produziert hätte. Beide Vorgaben haben getragen — und sie haben
**unterschiedliche** Befunde erzeugt, nicht dieselben.

---

*Prüfstand `5f9930b`, Drift-Kontrolle gegen HEAD `5630bbf` durchgeführt
(Prüflinge unverändert). Alle Messungen dieses Protokolls sind mit dem
angegebenen Kommando reproduzierbar. Geschrieben wurde ausschließlich
diese Datei; kein Commit.*
