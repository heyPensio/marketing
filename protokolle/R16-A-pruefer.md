# R16-A — Unabhängiger Prüferlauf (17.08.2026)

**Prüfer:** eigener Kontext, nicht Verfasser der geprüften Arbeit.
**Eingefrorener Prüfstand:** Bau-Commit `a495a0f`, Nachtrag `8e5ea42`;
Rundenstart-Vergleich `0c4692f` / `84ce2a6`. Der Prüfgegenstand wurde
ausschließlich über `git show <hash>:<pfad>` gelesen; der Arbeitsbaum-Diff
wurde **nicht** gesichtet (Parallel-Sessions schreiben dort).
**Repo-HEAD zum Zeitpunkt dieses Protokolls:** `8570b9f` (Doppel-Messstand;
der Prüfstand bleibt eingefroren, HEAD ist nur als Wanderungs-Beleg notiert).
**Rohbelege:** `sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.html`
und `.txt`, `sensibel/rohbelege-R15-A/`.

---

## 0. Werkzeug-Grundlage dieses Laufs

Randnummern **generisch** über das Strukturmerkmal extrahiert
(`<span class="absatzRechts">N</span>` + folgendes `<p class="absatzLinks">`),
nicht ausgezählt. Skript: Node (Python ist auf diesem Rechner nicht
verfügbar).

| Messung | Ergebnis |
|---|---|
| Paare span+p | **273** |
| `<span class="absatzRechts">` gesamt | **273** |
| `<p class="absatzLinks">` gesamt | **273** |
| Nummernbereich | 1–273, **keine Lücke, keine Dublette** |
| unaufgelöste HTML-Entities im Extrakt | **0** |

→ Die Sessionzahl **„273 Absätze, lückenlos 1–273" ist bestätigt**, und zwar
über drei Zählwege (Paarung, Öffner-Zählung span, Öffner-Zählung p), die
unabhängig voneinander danebenliegen könnten.

**⚠️ Grenze dieses Prüfraums — und die der geprüften Session:** Die 273
Absätze umfassen **159.576** Zeichen, der Textabzug **165.772**. Die
Differenz von rund **6.200 Zeichen** ist **Rubrum, Tenor,
Ordnungsmittelandrohung und Kostenentscheidung** — sie liegen
**außerhalb** der Randnummern-Auszeichnung. Wer den Prüfraum mit „273
Absätze, lückenlos" beschreibt, hat den Tenor nicht abgedeckt. Genau dort
liegen zwei Aussagen des neuen Bestands (s. B-4 und H-2).

---

## 1. Befunde

### SCHWER

---

#### S-1 — „in derselben Sache" ist am Rohbeleg widerlegt; zwei Vorbehalte fallen in einem Satz

**Fundstelle:** `handel/kanal-rechtsmatrix.md` @`a495a0f`, Rn.-111-Kasten,
Schlussabsatz („Folge für die A7-Einstufung"):

> „Es ist ein **erstinstanzliches** Urteil, dessen **Berufungsgericht in
> derselben Sache erkennbar zu einer anderen Beurteilung neigt** …"

**Beleg am Rohbeleg (Rn. 111, generisch extrahiert, Absatz 110 und 112
mitgelesen):** Die abweichende Auffassung ist ausweislich Rn. 111 geäußert
worden „in dem (von der Beklagten als Anlage B9 vorgelegten) **Beschluss
vom 19. Dezember 2024 - 20 W 37/24 (= Landgericht Düsseldorf 38 O
17/22)**". Das vorliegende Verfahren ist **38 O 243/23**. Der Beschluss
gehört also zu einem **anderen** Landgerichts-Verfahren. „In derselben
Sache" ist damit keine Verkürzung, sondern eine falsche Bestandsaussage.

Der zweite Vorbehalt fällt im selben Satz: Rn. 111 schreibt die mündlich
mitgeteilte Auffassung ausdrücklich der Gegenseite zu — „die **nach den
Angaben der Beklagten** von dem Oberlandesgericht … mitgeteilt worden sein
**soll**". Das Wort **„erkennbar"** im Kasten macht aus einem doppelten
Konjunktiv des Parteivortrags eine Feststellung.

**Bemerkenswert:** Die Belegstufen-Tabelle **drei Absätze darüber im selben
Kasten** formuliert beides korrekt („zu genau diesem Werbeschreiben";
„teils sogar nur aus einem mündlich mitgeteilten ‚vorläufigen
Beratungsergebnis' **nach Angaben der Beklagten**"). Der Verlust tritt
genau im Übergang vom Detail zur Bewertung ein — die Klasse, vor der
CLAUDE.md („Verdichten verliert den Vorbehalt … der gefährliche Moment ist
der Übergang vom Detail zur Bewertung") warnt.

**Reparatur:** Satz ersetzen durch: „… dessen Berufungssenat sich in einem
**anderen** Verfahren derselben Kammer (Beschluss 20 W 37/24 = LG
Düsseldorf 38 O 17/22) **nach dem Vortrag der Beklagten** beiläufig
abweichend geäußert haben soll." Das Wort „erkennbar" streichen, nicht
abschwächen (L-17).

---

#### S-2 — Die Session reproduziert im neuen Text genau den Fehler, den sie reparieren sollte („weicht ab" ohne Quellendeckung)

**Fundstelle:** `handel/kanal-rechtsmatrix.md` @`a495a0f`, Rn.-111-Kasten,
unmittelbar nach S-1:

> „… und dasselbe LG **weicht** von der „ständigen Rechtsprechung"
> desselben OLG auch an anderer Stelle **ausdrücklich ab** (Rn. 43,
> TKG/UWG)."

**Beleg am Rohbeleg (Rn. 43 im Wortlaut, Rn. 42 und 44 mitgelesen):**

> „(b) Bei dieser Sichtweise **verbleibt** die Kammer **auch in Ansehung
> der von der Beklagten angeführten** „ständigen Rechtsprechung" des
> Oberlandesgerichts Düsseldorf, der zufolge „das TKG lex specialis zum
> UWG" sei."

Zwei Abweichungen:
1. **Existenz-Behauptung.** Die Quelle nennt die ständige Rechtsprechung
   nur als **von der Beklagten angeführt** und setzt sie zusätzlich in
   Anführungszeichen — sie bestätigt ihr Bestehen nicht. Der Kasten
   behauptet sie als Bestand. Das ist dieselbe Belegstufen-Klasse, die
   derselbe Kasten für Rn. 111 zutreffend ausweist — 90 Zeilen weiter
   inkonsistent angewandt.
2. **„weicht ausdrücklich ab"** gegen **„verbleibt … auch in Ansehung"**.
   Genau diese Verschärfung ist der Gegenstand von **R15A-N-1**, den die
   Session eine Bildschirmseite höher korrekt repariert hat („Ein ‚weicht
   ab' behauptet eine Divergenz, die die Quelle nur bedingt formuliert").
   Die Regel wurde geschrieben und im selben Commit gebrochen —
   CLAUDE.md: „Eine frisch geschriebene Regel schützt nur künftigen Code —
   der BESTAND wird im selben Zug rückwirkend gegen sie durchsucht",
   **einschließlich des eigenen neuen Textes.**

**Reparatur:** „… und dieselbe Kammer bleibt bei ihrer Sichtweise auch in
Ansehung einer von der Beklagten angeführten ‚ständigen Rechtsprechung'
des OLG Düsseldorf zum Verhältnis TKG/UWG (Rn. 43); ob eine solche
ständige Rechtsprechung besteht, stellt das Urteil nicht fest."
Zusätzlich: nach dem R15A-N-1-Muster den **gesamten neuen Text** dieser
Session auf Divergenz-Verben absuchen.

---

### MITTEL

---

#### M-1 — Belegstufe ① A für eine Aussage, die in Rn. 111 nicht steht

**Fundstelle:** Rn.-111-Kasten, Belegstufen-Tabelle, Zeile 1:

| Aussage | Belegstufe |
|---|---|
| „Es gibt eine abweichende Auffassung eines Obergerichts **zu genau diesem Werbeschreiben**" | „① A — steht wörtlich in Rn. 111" |

**Beleg:** Rn. 111 sagt, die Kammer halte „an dieser Beurteilung des
Werbeschreibens der Beklagten … fest, und zwar auch in Ansehung der
abweichenden Auffassung". Dass sich die abweichende Auffassung **auf
dasselbe Werbeschreiben** bezog, steht dort **nicht** — der Beschluss 20 W
37/24 gehört zum Verfahren 38 O 17/22, dessen Gegenstand das Urteil nicht
mitteilt. Die Aussage ist eine **Ableitung**, sie steht aber ausgerechnet
in der Zeile, die sie als wörtliche Quellenaussage einstuft — in einer
Tabelle, die gebaut wurde, um Beleg von Ableitung zu trennen.

**Reparatur:** Zeile aufteilen: „Es gibt eine abweichende Auffassung eines
Obergerichts, der die Kammer nicht folgt" (① A) · „Sie betraf dasselbe
Werbeschreiben" (⚠️ Ableitung, nicht belegt — der Gegenstand von 38 O
17/22 ist uns unbekannt).

---

#### M-2 — Aufbau-Tabelle: Schritt 3 kehrt die Begründungsrichtung des Urteils um

**Fundstelle:** Neufassungs-Absatz, Tabelle „Der Aufbau des Urteils in drei
Schritten", Zeile 3:

> „**3. Zusätzlich Irreführung** | Rn. 88–120 | **Unabhängig davon** ist
> der Versand des Schreibens selbst ‚gemäß § 3 Abs. 1 UWG unzulässig …'"

**Beleg (Rn. 88, Wortlaut):**

> „**cc) Darüber hinaus liegen die Voraussetzungen von Art. 6 Abs. 1
> Unterabs. 1 Buchstabe f DSGVO deshalb nicht vor, weil das von der
> Beklagten mit der Werbung verfolgte Interesse nicht rechtmäßig ist.**
> Die von der Beklagten betriebene Werbung ist gemäß § 3 Abs. 1 UWG
> unzulässig, weil sie gemäß §§ 5 Abs. 1 und Abs. 2, 5a Abs. 1 bis Abs. 3
> UWG unlauter ist."

Rn. 88 ff. ist die Gliederungsziffer **cc)** innerhalb der lit.-f-Prüfung
(bb) = Rn. 84 ff.). Die lauterkeitsrechtliche Irreführung ist dort **keine
zusätzliche, unabhängige Schiene, sondern die PRÄMISSE des zweiten
DSGVO-Absagegrundes**: unlauter → Interesse nicht rechtmäßig → lit. f
scheitert. Die Tabelle stellt sie als eigenständigen dritten Schritt „ganz
unabhängig davon" dar und listet Rn. 88 zugleich unter Schritt 1 — der
Leser kann die Abhängigkeit nicht mehr sehen.

**Warum das für uns zählt:** Trägt in einer reinen B2B-Aussendung die
§§-5/5a-Bewertung nicht, fällt damit **einer der beiden tragenden
lit.-f-Absagegründe** weg. In der Darstellung der Tabelle bliebe er
unberührt. Das Briefing (§ 2, „sie wirkt aber auf den zweiten Absagegrund
zurück, weil Rn. 88 die Rechtmäßigkeit des verfolgten Interesses gerade an
der lauterkeitsrechtlichen Zulässigkeit misst") hat es korrekt — die
Matrix nicht. Beide Dokumente sehen für sich richtig aus (L-25).

**Reparatur:** Zeile 3 umbenennen in „**2. Absagegrund innerhalb der
lit.-f-Prüfung: die Werbung selbst ist unlauter**", „Unabhängig davon"
durch „Darüber hinaus (Gliederungsziffer cc der lit.-f-Prüfung)" ersetzen
und die heutige Zeile 2 zu Schritt 3 machen.

---

#### M-3 — Die Ellipse in der Aufbau-Tabelle schluckt den Antrag-I-Vorbehalt

**Fundstelle:** Aufbau-Tabelle, Zeile 2:

> „Es kann offenbleiben, ob im Allgemeinen in erster Linie § 3a UWG …
> heranzuziehen ist, oder § 3 Abs. 2 UWG **… liegen sowohl** die
> Voraussetzungen von § 3a UWG vor (dazu aa) **als auch** diejenigen von
> § 3 Abs. 2 UWG (dazu bb)."

**Beleg (Rn. 136, vollständig):** Die zweite Ellipse überspringt eine
**Satzgrenze** und dabei den Halbsatz „**Bezogen auf die von dem Kläger
mit seinem Antrag I angegriffenen Verstöße**". Die Doppelbegründung gilt
also ausdrücklich nur für Antrag I; der Tenor umfasst **fünf** Verbote
(Nrn. 1–5, gemessen am Tenor). Die Zellen daneben schließen mit „**beide
Schienen tragen, keine ist die gewählte**" — ohne Geltungsgrenze.

Positiv anzumerken: Die **Teil-B-Tabelle** desselben Dokuments zitiert
Rn. 136 vollständig **mit** dem Antrag-I-Halbsatz. Der Verlust tritt nur in
der verdichteten Kopf-Tabelle auf — also genau dort, wo der Leser zuerst
ankommt (L-47).

**Reparatur:** Ellipse auflösen, den Halbsatz aufnehmen; die Ellipse, die
eine Satzgrenze überspringt, als „ … [Satz 2:] … " kenntlich machen.

---

#### M-4 — „Der Tenor untersagt unter Nr. 4 die unterlassene Art.-14-Information" liest nur die Artikelnummer, nicht den Verbotsinhalt

**Fundstelle:** Reparatur-Kasten 17.08.2026, Grund 2.

**Beleg — Tenor Nr. 4 im Wortlaut** (Textabzug, Zeile 111 f.; liegt
außerhalb der 273 Randnummern):

> „4. einem Verbraucher, in Bezug auf den sie personenbezogene Daten **bei
> einem Dritten** erhoben hat, … **nicht innerhalb einer angemessenen
> Frist, spätestens innerhalb eines Monats**, die in Art. 14 Abs. 1 und
> Abs. 2 DSGVO genannten Informationen zu erteilen …"

Das tenorierte Verbot ist die **Frist-Pflicht des Art. 14 Abs. 3 lit. a**
(ein Monat). Die operative Regel, auf der der Bestand aufbaut — Rn. 85
(„spätestens mit diesem Schreiben", Art. 14 Abs. 3 **lit. b**) und der
**neue** Rn.-115-Kasten („die Quellenangabe **im Brief**") — steht so nur
in den **Gründen**, nicht im Tenor. Der Kasten prüft ausdrücklich, was „zu
weit für den Tenor" ist, und lässt genau diese Divergenz stehen.

Die Sachlage selbst ist im Dokument vorhanden (Abschnitt „Weil wir die
Daten nicht bei der betroffenen Person erheben …" führt lit. a und lit. b
korrekt) — sie ist nur an der neuen Stelle nicht verknüpft.

**Reparatur:** Grund 2 ergänzen: „Der Tenor untersagt unter Nr. 4 die
Verletzung der **Monatsfrist** aus Art. 14 Abs. 3 lit. a für **bei einem
Dritten** erhobene Daten. Die im Bestand tragende Pflicht ‚spätestens mit
dem Schreiben' (Art. 14 Abs. 3 lit. b) folgt aus den **Gründen** (Rn. 85),
nicht aus dem Tenor." Und: die Frage nach dem Verhältnis lit. a/lit. b für
unseren Fall in Briefing-Frage 2 aufnehmen (dort steht bisher nur die
„bei einem Dritten"-Achse).

---

#### M-5 — Der Bestandsvermerk zu Rn. 87 lässt die substantiell wichtigste Aussage von Rn. 86 weg

**Fundstelle:** `handel/kanal-rechtsmatrix.md`, BESTANDSVERMERK am
O-9-Kasten, **und** wortgleich `akquise/interessenabwaegung-o8.md`.

Beide beschreiben Rn. 86 als „referiert einen **Literatureinwand** … und
beantwortet ihn bereits". Was Rn. 86 zusätzlich sagt und was in **keinem**
der beiden Kästen ankommt:

> „… könnten sich solche Bedenken von vorneherein nur auf die **ersten**
> von der Beklagten unternommenen Schritte der Datenverarbeitung - also
> die Entgegennahme der von ihr ‚angekauften' Adressen und ihr Speichern
> für den Einsatz bei der Erstellung der Schreiben - beziehen, **(und die
> nicht Teil des von dem Kläger angegriffenen geschäftlichen Handelns
> sind, sondern in dessen Vorfeld stattgefunden haben)**."

Das ist **genau unser Schritt** — der Listenaufbau vor jedem Versand, auf
den die Fälligkeit „vor dem ERSTEN DATENSATZ" gestützt wird. Das Gericht
schiebt ihn ausdrücklich aus dem Streitgegenstand heraus. Wer die
Belegkraft der Rn.-87-Ableitung dokumentiert, ohne das zu nennen,
dokumentiert die schwächere Hälfte.

**Entlastend:** Das **Anwalts-Briefing** trägt die Stelle samt Zitat
(§ 2.3-Umfeld, „Rn. 86: Das Gericht trennt ausdrücklich die Entgegennahme
und Speicherung der angekauften Adressen …"). Der Anwalt sieht sie also.
Die beiden **Betriebs**dokumente, aus denen künftig weiterverdichtet wird,
sehen sie nicht.

**Reparatur:** In beide Kästen einen Anstrich aufnehmen: „⚠️ **Rn. 86
verschärft die Frage:** Das Gericht ordnet Ankauf und Speicherung der
Adressen ausdrücklich dem **Vorfeld** zu und schließt sie aus dem
angegriffenen Handeln aus — das ist genau der Schritt, auf den wir die
Fälligkeit vorziehen. Die Vorsichtsannahme bleibt in Kraft, ihre Belegkraft
ist damit noch schwächer als oben beschrieben."

---

#### M-6 — Der neue B2B-Kasten listet nur EINE der beiden B2B-Abhängigkeiten der § 3a-Schiene

**Fundstelle:** Nachtrag R15A-N-2 am „nicht erhoben"-Anstrich, Tabelle
„Schiene / Was an ihr B2B-abhängig ist".

Die Zeile zu § 3a UWG nennt als B2B-Achse allein die
**UGPRL-Vollharmonisierung** (Rn. 129/130). Nicht genannt ist die zweite,
im selben Urteil ausdrücklich geprüfte Voraussetzung:

- **Rn. 141/142 — Marktverhaltensregelung.** Das Gericht bejaht sie und
  bindet sie im selben Absatz an die Verbrauchereigenschaft zurück
  („bezwecken die … Grenzen auch den Schutz **der betroffenen Person in
  ihrer Stellung als Marktteilnehmer**"). Diese Achse zeigt in dieselbe
  Richtung wie § 3 Abs. 2 UWG, nicht in die entgegengesetzte — der Kasten
  behauptet aber, die beiden Schienen zeigten „in **entgegengesetzte**
  Richtungen".
- **Rn. 143–146 — Spürbarkeit.** Ein eigenständiges Tatbestandsmerkmal des
  § 3a UWG. Das Gericht stützt es u. a. darauf, dass „**eine massenhaft
  verbreitete Werbeaussendung** betroffen ist" (Rn. 146; Rn. 110:
  „millionenfach … liegt dem Wortsinn nach bereits bei einem Versand von
  1.000.000 Briefen vor"). Unsere Planung rechnet mit Wellen im
  dreistelligen Bereich (R15E-N-5). Ob die Spürbarkeitsschwelle dort
  erreicht wird, ist eine für die Risikolage zentrale, im Bestand
  **nirgends gestellte** Frage.

**Zählweg zur Abdeckung:** Randnummern-Nennungen im Bereich 79–155 in der
Matrix @`a495a0f` — genannt: 79–89, 111, 114, 115, 120, 124, 125, 127–130,
134–137, 147, 148. **Nirgends genannt: 138–146 und 149–155**, also die
gesamte Tatbestandsprüfung beider Schienen. (Positivkontrolle des
Zählwegs: „Rn. 87" = 4 Treffer; Gegenkontrolle „Rn. 999" = 0.)

**Reparatur:** Die B2B-Tabelle um eine Zeile „§ 3a UWG,
Marktverhaltensregelung (Rn. 141/142)" ergänzen und den Satz „in
entgegengesetzte Richtungen" auf „je Schiene **und je Tatbestandsmerkmal**
getrennt" umstellen. Spürbarkeit (Rn. 143–146) als **eigene Teilfrage** in
Briefing-Frage 3 aufnehmen, mit unserer geplanten Wellengröße als Angabe.

---

#### M-7 — „der HTML-Abzug derselben Beschaffung liefert dieselben Werte" ist für die §-Muster messbar falsch

**Fundstelle:** Neufassungs-Absatz, Zählweg-Fußnote hinter „§ 7 UWG = 0".
Der Satz stammt aus R14-B, **aber R16-A hat den Satzanfang desselben
Absatzes neu geschrieben** („§ 7 UWG spielt in diesem Urteil keine Rolle —
aber ‚kein § 7 UWG' ist nicht ‚kein UWG'") und die Fußnote unverändert
übernommen. L-39: Wer eine Bestandsstelle anfasst, liest den ganzen Satz
gegen den eigenen neuen Bestand.

**Eigene Messung (beide Abzüge, gleicher Lauf):**

| Muster | `.txt` | `.html` |
|---|---|---|
| U+00A0 (NBSP) gesamt | **0** | **1.359** |
| `§ 7` (ASCII-Leerzeichen) | **1** (= „§ 709 … ZPO") | **0** |
| `§ 7 UWG` | 0 | 0 |
| Positivkontrolle `§ 3a UWG` | **21** | **0** |
| `DSGVO` | 109 | 109 |
| `Werbung` (cs) | 14 | 14 |
| `Verbraucher` cs/ci | 187 / 199 | 187 / 199 |

Im HTML steht hinter jedem `§` ein **geschütztes Leerzeichen**. Über den
HTML-Abzug liefert deshalb **jedes** §-Phrasenmuster 0 — einschließlich
der Gegenprobe „§ 7" = 1, die als einziger Beleg dafür dient, dass der
Suchweg §-Treffer überhaupt findet, und einschließlich der
§-Positivkontrolle. Das Negativ „§ 7 UWG = 0" wäre dort ein
**Werkzeugartefakt ohne greifende Positivkontrolle**. Alle
Buchstaben-Zahlen stimmen dagegen überein — genau das Muster aus L-43
(„reine Buchstaben-Kontrollen liefen sauber durch, während ‚§ 3a' = 0 ein
Entity-Artefakt war").

Das **Sachergebnis** bleibt: Am `.txt` ist das Negativ echt und mit
greifender §-Positivkontrolle belegt (`§ 3a UWG` = 21). Falsch ist nur die
Aussage über die Gleichwertigkeit der Abzüge.

**Reparatur:** Satz ersetzen durch: „Prüfgegenstand ist der **Textabzug**.
⚠️ Der HTML-Abzug trägt hinter jedem `§` ein NBSP (U+00A0) — §-Muster mit
gewöhnlichem Leerzeichen liefern dort **generell 0** und dürfen für dieses
Negativ nicht verwendet werden; Buchstaben-Zahlen (DSGVO 109, Werbung 14,
Verbraucher 187/199) stimmen in beiden Abzügen überein."

---

### HINWEIS

- **H-1 — Fundstellen-Drift in der Aufbau-Tabelle, Zeile 1.** „Rn. 84:
  Verletzung der Artt. 12, 14, 21 DSGVO". Rn. 84 nennt **keine Artikel**
  („weil die Beklagte nicht … allen anderen ihr nach der DSGVO obliegenden
  Pflichten nachkommen ist"). Die Artikel stehen in Rn. 85 (einzeln) und
  Rn. 86 („Verstößen gegen Artt. 12,14 und 21 DSGVO"). Der Bestandsvermerk
  desselben Commits macht es mit „Rn. 84/85" richtig. → Zelle auf
  „Rn. 84/85" ändern.

- **H-2 — Zwei neue Aussagen zitieren außerhalb des selbst deklarierten
  Prüfraums.** Der Rechtskraft-Kasten belegt „vorläufig vollstreckbar
  (Tenor)", der Reparatur-Kasten „Tenor Nr. 4" — beide Stellen liegen
  außerhalb der „273 Absätze, lückenlos", auf die sich der Kasten für
  seine Belegtiefe beruft. Beide Aussagen habe ich am Textabzug bestätigt;
  der **Prüfraum** ist gleichwohl falsch beschrieben. → Formulierung:
  „273 nummerierte Absätze **plus Rubrum und Tenor, die außerhalb der
  Nummerierung stehen**".

- **H-3 — Rn. 45 ist selbst ein Zitat aus einer anderen Entscheidung.**
  Der Rn.-111-Kasten schreibt „Rn. 45 **desselben Urteils** nennt …". Der
  Wortlaut ist byte-genau korrekt, aber Rn. 44 leitet ein: „Zur Begründung
  hat sie ausgeführt (vgl. **LG Düsseldorf, Urteil vom 9. Februar 2024 -
  38 O 271/23** [unter III 1]):", und Rn. 45 steht in »…«. Die
  Ableitungskette trägt trotzdem (dieselbe Kammer, derselbe 20er-Senat),
  aber der Träger ist ein Zitat, nicht das Urteil selbst. → „Rn. 45
  (Zitat aus LG Düsseldorf 38 O 271/23 im vorliegenden Urteil)".

- **H-4 — Ein deutlich stärkerer Anker für dieselbe Ableitung blieb
  ungenutzt.** Rn. 43 und Rn. 47 nennen **ausdrücklich** Äußerungen des
  **Oberlandesgerichts Düsseldorf**, auf die sich **die Beklagte** beruft
  — dieselbe Zuschreibungsfigur wie in Rn. 111 („nach den Angaben der
  Beklagten"). Rn. 47: „den von der Beklagten in ihrem Schriftsatz vom
  5. November 2025 angeführten Äußerungen des Oberlandesgerichts
  Düsseldorf". Das ist eine engere Brücke als das Aktenzeichen-Muster. →
  Als zweiten, unabhängigen Beleg in die Belegstufen-Tabelle aufnehmen;
  zwei unabhängige Merkmale für dieselbe Zuordnung (L-24).

- **H-5 — Rechtskraft-Kasten ohne eigene Positivkontrolle.** Der Suchlauf
  `berufung|rechtsmittel|rechtskräftig` = 0 wird auf
  `akquise/interessenabwaegung-o8.md` § 6.2 delegiert; eine
  Positivkontrolle steht nicht im Satz (L-15). **Ich habe ihn
  reproduziert:** berufung ci **0**, rechtsmittel ci **0**, rechtskräftig
  ci **0**, bei Positivkontrollen „Urteil" **118**, „Kammer" **18**,
  „Beschwerde" ci **6** im selben Lauf. Das Negativ hält; die
  Kontrollangabe fehlt im Dokument. → Zahlen an den Satz schreiben.

- **H-6 — Der Verzicht auf „Rechtskraft nicht geprüft" im Fließtext.** Die
  Hauptzeile endet jetzt nur noch auf „Instanzgericht."; der Vorbehalt lebt
  im unmittelbar folgenden Kasten. Vertretbar wegen der Nähe, aber die
  Zeile wird beim Weiterverdichten ohne den Kasten mitgenommen. →
  „Instanzgericht, Rechtskraft ungeklärt (s. Kasten)".

- **H-7 — Zitat-Anpassungsklammern in ungewöhnlicher Form.** „geführte[…]
  einstweilige[…]" (Rn. 89), „mehrere[…] geführte[…]" (Rn. 124): Die
  Auslassungspunkte markieren hier **Flexionsänderungen**, nicht
  ausgelassenen Text. Konventionell wären `[n]` bzw. `[…]` nur für echte
  Auslassungen. Kein Sachfehler, aber ein maschineller Zitatabgleich
  behandelt beides gleich. → Vereinheitlichen.

- **H-8 — Positivkontrolle stillschweigend gewechselt.** `projektquelle-mkt.md`
  § 6a führt für R15A-N-3 „Zählweg 0 bei Positivkontrolle **119**"
  (= „Kläger", aus `protokolle/R15-A-abschluss.md`). R16-A schreibt
  stattdessen `Mitbewerber[a-zä]*` = **8**. Der **Wechsel ist eine
  Verbesserung** — die neue Kontrolle spiegelt die Suchmechanik des
  Nulltreffers, die alte nicht —, wird aber nicht als Korrektur
  ausgewiesen; im Wahrheits-Kanal steht weiter die schwächere Zahl.
  → In § 6a nachziehen (L-25, Gegenrichtung).

- **H-9 — „Im Übrigen wird die Klage abgewiesen."** Der Tenor weist
  Klageabweisung im Übrigen und Kosten „der Kläger zu einem Fünftel" aus.
  Das Briefing führt die Kostenquote (2 Treffer „Fünftel"), die Matrix
  nicht (0 Treffer). Für die „Belegkraft des Belegs selbst" ist ein
  teilweise abgewiesener Verbandsantrag eine relevante Angabe. → In den
  Rechtskraft-Kasten aufnehmen.

---

## 2. Was ich BESTÄTIGEN kann (Gegenrichtung, ausdrücklich)

**Alle geprüften Sessionzahlen reproduzieren.** Je Muster im selben Lauf
mit Positivkontrolle, am generisch extrahierten Randnummern-Auszug bzw.
am Textabzug:

| Behauptung der Session | Mein Ergebnis |
|---|---|
| 273 Absätze, lückenlos 1–273 | **bestätigt**, drei Zählwege |
| `Oberlandesgericht[a-zä]* Düsseldorf` = 5 Fundstellen in 4 Rn. (43, 45×2, 46, 47) | **bestätigt**, Zuordnung exakt |
| keine davon in Rn. 111 | **bestätigt** |
| ohne Flexion meldet der Lauf 1 statt 5 | **bestätigt** (= 1, nur Rn. 45) |
| Positivkontrolle `Oberlandesgericht[a-zä]* Stuttgart` = 1 (Rn. 79, Genitiv) | **bestätigt** |
| Gegenkontrolle `Oberlandesgericht Köln` = 0 | **bestätigt** |
| `"dem Oberlandesgericht"` = 2, eine davon Rn. 111 | **bestätigt** (Rn. 109 und Rn. 111) |
| `kein Mitbewerber` = 0 | **bestätigt** |
| Positivkontrolle `Mitbewerber[a-zä]*` = 8, auf 8 Randnummern | **bestätigt** (Rn. 31, 42, 44, 45, 89, 124, 134, 143) |
| Tippfehlervariante `Mit+bewerber[a-zä]*` = 9 („Mittbewerbern", Rn. 129) | **bestätigt** |
| Mitbewerberin in Rn. 44, 89, 124 | **bestätigt**, genau diese drei |
| DSGVO 109 · Werbung cs 14 · § 7 0 · § 7 UWG 0 (am `.txt`) | **bestätigt** |
| UWG 148 · § 3a UWG 21 · § 3 Abs. 1 UWG 5 | **bestätigt** |
| Verbraucher ci 199 / cs 187 | **bestätigt** |
| „vorläufig vollstreckbar" (Tenor), Urteil erster Instanz | **bestätigt** |
| Rn. 111 nennt das Gericht nicht namentlich | **bestätigt** — Rn. 111 schreibt nur „von dem Oberlandesgericht", keine Ortsangabe |

**Löschungszählung `git diff --numstat 84ce2a6..a495a0f`** (Nenner
identisch gegen `0c4692f`, weil dazwischen nur `protokolle/tagesplan-…`
berührt wurde):

| Datei | + | − |
|---|---|---|
| `handel/kanal-rechtsmatrix.md` | 303 | **11** |
| `handel/anwalts-briefing-2026-08.md` | 74 | **12** (+1/−1 in `8e5ea42`) |
| `akquise/interessenabwaegung-o8.md` | 25 | **0** |

**Alle 11 gelöschten Matrix-Zeilen einzeln geprüft** (Skript: jede
gelöschte Zeile in 60-Zeichen-Fenstern gegen den neuen Volltext;
Positivkontrolle mit einer erfundenen Kontrollzeile → 0 Treffer, mit einer
garantiert vorhandenen → Treffer):

- **Zeilen 1–7** = ein umgeflossener Kasten (Tempuswechsel „hier→damals",
  „ist→war", „dieser Session→jener Session"). Inhalt kehrt vollständig
  wieder.
- **Zeile 8** (1.490 Zeichen): 21 von 24 Fenstern wiedergefunden. Die drei
  fehlenden Bereiche sind **genau** „— gestützt ausschließlich auf Art. 6
  Abs. 1 lit. f" und „rt. 12–14, 21 DSGVO." — der widerlegte Kernsatz. Er
  steht **wörtlich im Reparatur-Kasten**.
- **Zeile 9** (1.085 Zeichen): 17 von 18. Fehlend: „, Rechtskraft nicht
  gep[rüft]" — steht im neuen Rechtskraft-Kasten.
- **Zeilen 10/11**: kehren mit Ergänzung wieder; „kein Mitbewerber." steht
  wörtlich im Reparatur-Kasten.

→ **11 von 11 disponiert, 0 still verschwunden.**

**Keine zerteilten Tabellenzeilen, keine konsumierte Überschrift:**
36 Tabellenblöcke in der neuen Matrix (33 vorher), **0** mit abweichender
Pipe-Zahl oder uneinheitlichem Zeilenpräfix; Positivkontrolle des
Prüfskripts an einem künstlich zerlegten Testblock schlägt an. Briefing
13 Blöcke, 0 auffällig. Überschriften: **76 vorher / 76 nachher, Mengen
identisch** (`comm` in beide Richtungen leer) — auch in o8 und Briefing
keine Überschrift verloren oder hinzugekommen.

**Zitate — meine eigene Zählung: 17 geprüfte neu gesetzte Stellen, 16 auf
beiden Achsen einwandfrei, 1 mit Befund (M-3).** Geprüft je Wortlaut UND
behauptete Randnummer, Rn.-Blöcke am Stück mit Nachbarabsatz gelesen:
Rn. 2 · 45 · 79 · 87 (2×) · 88 · 89 · 111 · 114 · 115 · 124 · 125 ·
136 (2×) · 147 · 148 · Tenor. **Kein künstlicher Satzpunkt, keine fehlende
Ellipse** außer M-3. Die Session hat den von ihr selbst berichteten
Doppelpunkt-Fehler in Rn. 79 tatsächlich behoben, und ihr eigener
Warnhinweis dazu („Es folgen ein Literaturbeleg in Klammern und ein
Doppelpunkt, weil Rn. 80–82 die drei Gründe anschließen") ist am Rohbeleg
korrekt.

**Besonders gut gelöst** (nenne ich, weil es sonst niemand nennt):
- Der Rn.-115-Kasten stellt der eigenen Kurzfassung ausdrücklich die
  Richtungsumkehr voran („Nicht die Herkunftsangabe ist das Problem — ihr
  Fehlen") und **weigert sich, aus dem Konditionalsatz eine Entwarnung zu
  machen** („Die Umkehrung ist der Bau-Auftrag, nicht die Entwarnung").
- Der B2B-Kasten sperrt ausdrücklich **auch die für uns günstigere**
  Lesart („ausdrücklich auch nicht die bequemere") — L-28 sauber
  angewandt.
- Der Rn.-111-Kasten trennt Beleg und Ableitung in einer eigenen
  Belegstufen-Spalte (Ausführung mit den Befunden M-1/S-1/S-2 behaftet,
  die **Form** ist richtig).
- Der Rn.-87-Bestandsvermerk endet mit „eine unbelegte Verschärfung kostet
  Zeit, eine unbelegte Entwarnung kostet den Fall" und **hält die
  Vorsichtsannahme in Kraft**, statt sie mit dem neuen Befund zu lockern.

**§ 6a der Projektquelle, jede Zeile mit Träger MKT-HANDEL:** R15A-N-1
(erledigt, Reparatur-Kasten) · R15A-N-2 (erledigt, Überschrift-Präzisierung
+ Rn. 136/147/148 + B2B-Kasten) · R15A-N-3 (erledigt, Reparatur-Kasten
inkl. der Gegenrichtung „Mitbewerberinnen sind sehr wohl vorgegangen") ·
R15A-N-4 (Bestandsvermerk in Matrix **und** o8, Teilfrage im Briefing) ·
R15A-N-5 (Rn.-115-Kasten) · R15E-N-4 (ID-Zeiger im Briefing).
**6 von 6 angefasst, 0 übersprungen.** Die Mängel sitzen in der
Ausführung, nicht in der Abdeckung.

---

## 3. Nicht erhoben / nicht prüfbar

**Nacharbeits-Liste mit Fundorten, kein Haftungsausschluss.**

1. **Die Grundgesamtheit „17 Zitate" ist im eingefrorenen Prüfstand nicht
   dokumentiert.** Die Matrix behauptet „16 von 17 Zitaten trafen
   byte-treu"; ein `protokolle/R16-A-abschluss.md` liegt zum Prüfzeitpunkt
   **untracked** im Arbeitsbaum (nicht in `a495a0f`/`8e5ea42`) und nennt
   „17 von 17 auf beiden Achsen", ohne die 17 aufzulisten. Eine
   „x von y"-Aussage wird am **Kriterium** geprüft, nicht an der Zahl
   (L-30) — welche Stellen als „Zitat" gezählt wurden, ist nicht
   feststellbar. **Fundort:** Reparatur-Kasten Rn. 79 · Abschlussmeldung
   Zeile 78. **Nacharbeit:** Liste der 17 mit Datei, Randnummer und Achse
   in das Abschlussprotokoll.
2. **Beschluss OLG Düsseldorf 20 W 37/24 — nicht beschafft.** Sein Inhalt
   ist nur über die Wiedergabe des LG bekannt (Belegstufe ③). Die Session
   weist das korrekt aus. Ich habe **keinen** Beschaffungsversuch
   unternommen. **Fundort:** NRWE-Recherche zu „20 W 37/24".
   **Nacharbeit:** Beschaffungsversuch vor dem Anwaltsversand — was in
   der nicht tragenden Erwägung tatsächlich steht, ist der Kern von
   Briefing-Frage 2.
3. **Gegenstand des Verfahrens LG Düsseldorf 38 O 17/22** — unbekannt.
   Davon hängt M-1 ab (ob die abweichende Auffassung „genau dieses
   Werbeschreiben" betraf). **Fundort:** derselbe NRWE-Suchlauf.
4. **Rn. 156–273 nicht ausgewertet.** Mein Leseraum war auftragsgemäß
   Rn. 79–150 plus die für die Ableitungen nötigen Rn. 1–48. Das Briefing
   stützt eine Aussage auf **Rn. 237** (Auskunftsverlangen in einer
   Abmahnung) — **nicht von mir geprüft**. Das Urteil hat 273 Absätze;
   123 davon sind in diesem Lauf ungelesen geblieben. Der R15-A-Prüfer hat
   vorhergesagt, dass ungelesene Quellabschnitte Funde tragen (L-48) —
   das gilt hier weiter.
5. **Kein Abgleich der neuen Kästen gegen `akquise/listenbau-regelwerk.md`
   und `akquise/sperrdatei-struktur.md`.** Die Abschlussmeldung der
   geprüften Session flaggt selbst, dass der § 7.1-Nachtrag des Regelwerks
   „den Rn.-87-Satz ohne den neuen Bestandsvermerk" trägt (fremder Scope).
   **Das ist ein offener L-25-Fall** (Quelle geschärft, Ableitung nicht
   nachgezogen) und in `a495a0f` nicht behoben. **Fundort:**
   `akquise/listenbau-regelwerk.md` § 7.1.
6. **Die Briefing-Änderung (4) — Reparatur an § 4a Kandidat A — habe ich
   nicht gegen `akquise/sperrdatei-struktur.md` § 3 nachgemessen.** Die
   Zahl „sieben Felder (SP-02, SP-03, SP-05 bis SP-08, SP-10)" ist eine
   delegierte Zahl mit mitgeliefertem Schlüssel; sie liegt außerhalb
   meines Prüfgegenstands. **Nacharbeit:** einmal am Objekt zählen —
   SP-05 bis SP-08 sind vier, plus SP-02, SP-03, SP-10 sind sieben; die
   Summe ist plausibel, die Existenz der Felder ist es nicht geprüft.
7. **Die Rn.-56-Aussage zum EuGH C-621/22** (Briefing Teilfrage 7) ist
   nicht Gegenstand dieses Laufs; die dort selbst ausgewiesene
   Sprachfassungs-Annahme bleibt offen.
8. **Zeilenenden / Encoding der geänderten Dateien nicht gemessen**
   (`git ls-files --eol`, Umlaut-Zählung vor/nach). Bei einem Commit mit
   303 Einfügungen in eine Datei mit Umlauten wäre das die billigste
   Absicherung. **Nacharbeit:** vor dem nächsten Massen-Edit nachholen.

---

## 4. Lauf-Status

| Prüfschritt | Status |
|---|---|
| Randnummern generisch extrahiert, 273 verifiziert | **vollständig** |
| Rn. 75–155 am Stück gelesen (Nachbarabsätze mit) | **vollständig** |
| Rn. 1–48 gelesen (für die Ableitungsketten) | **vollständig** |
| Rn. 156–273 | **gar nicht** (s. „nicht erhoben" Nr. 4) |
| Tenor + Rubrum am Textabzug gelesen | **vollständig** |
| § 6a der Projektquelle, alle MKT-HANDEL-Zeilen | **vollständig** |
| Alle 17 neu gesetzten Zitate, Achse Wortlaut | **vollständig** |
| Alle 17 neu gesetzten Zitate, Achse Randnummer | **vollständig** |
| Löschungszählung, jede der 11 Zeilen einzeln | **vollständig**, mit Positivkontrolle |
| Tabellen-/Überschriften-Integrität, 3 Dateien | **vollständig**, mit Positivkontrolle |
| Alle genannten Sessionzahlen nachgerechnet | **vollständig**, je mit Positivkontrolle im selben Lauf |
| Briefing auf veraltete Bestandsaussagen über die Matrix | **vollständig** — § 2.1 ist korrekt nachgezogen; die übrigen 5 Matrix-Verweise (Zeilen 50, 451, 1149, 1177 und der Quell-Abgleich-Block) sind durch die Neufassung nicht berührt |
| Briefing gegen `sperrdatei-struktur.md` / `listenbau-regelwerk.md` | **gar nicht** (fremder Scope, s. Nr. 5/6) |
| Beschaffung 20 W 37/24 | **gar nicht** |
| Encoding-/EOL-Messung | **gar nicht** |

---

## 5. Die zwei Pflichtfragen

### „Hättest du diese Funde auch OHNE den Kategorien-Hinweis gefunden?"

**Teilweise — und die Aufteilung ist unangenehm.**

- **S-1, S-2, M-1** hätte ich gefunden: Sie fallen jedem auf, der Rn. 111
  und Rn. 43 am Stück liest und danach den Schlussabsatz des Kastens
  daneben legt. Das ist die gewöhnliche Zitatprüfung, kein
  Kategorien-Effekt. Kategorie 3 („welche Rechtsfolge behauptet der
  Bestand?") hat mich allerdings dazu gebracht, **den Schlussabsatz
  überhaupt gegen die Tabelle darüber zu halten** — ohne das hätte ich
  wahrscheinlich nur die Tabelle geprüft, weil dort die Zitate stehen.
- **M-5, M-6** hätte ich **nicht** gefunden. Sie sind reine
  Kategorie-1-Funde: „Was ist gar nicht erst angekommen?" ist eine Frage,
  die man nur stellt, wenn man sie gestellt bekommt. Ohne den Hinweis
  hätte ich die zitierten Randnummern geprüft und die nicht zitierten für
  irrelevant gehalten — der Prüfling bestimmt sonst den Prüfraum. Die
  Randnummern-Abdeckungsmessung (138–146, 149–155 nirgends genannt) ist
  aus dem Hinweis entstanden.
- **M-7** verdanke ich dem Prompt-Hinweis auf `&sect;` **plus** der
  Regelzeile in `quellen-beschaffung.md` zu NBSP. Ohne den Hinweis hätte
  ich am `.txt` gemessen, dort stimmt alles, und die Aussage über den
  HTML-Abzug wäre unbemerkt geblieben. **Das ist der ehrlichste Punkt
  dieses Abschnitts: Der Fund war vorgezeichnet.**
- **M-4** ist der einzige Fund, der aus einer Abweichung vom Auftrag
  entstand: Der Prüfraum war Rn. 79–150, der Tenor liegt außerhalb. Ich
  habe ihn nur gelesen, weil eine Sessionaussage ihn zitierte und meine
  Extraktion ihn nicht enthielt.

### „Welche Verfälschung hätte dein Verfahren NICHT gefangen?"

1. **Eine falsche Sachaussage in einem Randnummern-Bereich, den weder ich
   noch die Session gelesen hat.** Rn. 156–273 sind ungeprüft. Hätte die
   Session dort ein Zitat gesetzt, hätte ich es zwar am Wortlaut geprüft —
   aber eine *Auslassung* dort ist für mich unsichtbar. Genau diese Klasse
   ist der einzige SCHWER-Fund der Vorrunde gewesen.
2. **Eine erfundene oder verfälschte Aussage im FLIESSTEXT über ein
   korrekt zitiertes Zitat.** Mein maschineller Teil prüft, was als Zitat
   markiert ist (L-27). S-1 und S-2 sind genau diese Klasse — ich habe sie
   durch **Lesen** gefunden, nicht durch Messen. Wäre der Kasten dreimal
   so lang gewesen, hätte ich sie mit derselben Wahrscheinlichkeit
   übersehen wie die Session. **Der Zitatabgleich der Session hat 17 von
   17 bestätigt und keinen meiner beiden SCHWER-Funde gesehen — das ist
   kein Werkzeugfehler, sondern die Reichweite des Werkzeugs, und sie
   gehört in das Dokument, das es einsetzt.**
3. **Eine falsche Aussage über ein Nachbardokument.** Ich habe
   `listenbau-regelwerk.md`, `sperrdatei-struktur.md` und
   `akquiseplan.md` nicht geöffnet. Die Behauptung „sieben Felder für
   ANL-3" im Briefing habe ich auf Plausibilität, nicht am Objekt geprüft.
4. **Eine Verfälschung, die HTML und TXT gleichermaßen trägt.** Beide
   Abzüge stammen aus derselben Beschaffung; ein Zweitkanal ist kein
   zweiter Leseweg. Wäre der NRWE-Abzug selbst unvollständig, wäre das mit
   meinen Mitteln nicht feststellbar — 273 lückenlose Absätze belegen
   Vollzähligkeit der **Nummerierung**, nicht der **Quelle**.
5. **Eine Fehleinstufung in einer Kategorie mit Summenprobe.** Meine
   Löschungszählung belegt „11 von 11 disponiert". Sie kann nicht
   erkennen, ob eine als „wiedergekehrt" gewertete Zeile inhaltlich
   verfälscht wiedergekehrt ist — ich habe das für alle 11 gelesen, aber
   die Zahl belegt es nicht (die R15-Einschränkung zur
   Einstufungs-Blindheit der Summenprobe gilt hier genauso).

---

## 6. Kurzfassung nach Schwere

- **SCHWER: 2** — S-1 („in derselben Sache" am Rohbeleg widerlegt, zwei
  Vorbehalte fallen in einem Satz) · S-2 (die reparierte „weicht
  ab"-Klasse im neuen Text reproduziert, dazu eine ungedeckte
  Existenz-Behauptung über eine „ständige Rechtsprechung").
- **MITTEL: 7** — M-1 (① A für eine Ableitung) · M-2 (Begründungsrichtung
  von Rn. 88 umgekehrt) · M-3 (Ellipse schluckt den Antrag-I-Vorbehalt) ·
  M-4 (Tenor Nr. 4 nur nach Artikelnummer gelesen) · M-5 (Rn. 86
  Vorfeld-Trennung fehlt in beiden Betriebsdokumenten) · M-6 (zweite
  B2B-Abhängigkeit und die gesamte Spürbarkeitsprüfung Rn. 143–146 nicht
  angekommen) · M-7 (HTML-Gleichwertigkeit für §-Muster messbar falsch).
- **HINWEIS: 9** — H-1 bis H-9.
- **Bestätigt ohne Befund:** alle 16 nachgerechneten Sessionzahlen ·
  Löschungszählung 11/11 · Tabellen- und Überschriften-Integrität ·
  16 von 17 neu gesetzten Zitaten auf beiden Achsen · Abdeckung 6 von 6
  MKT-HANDEL-Posten aus § 6a.
- **Nicht erhoben / nicht prüfbar: 8 benannte Fundorte** (s. Abschnitt 3).
