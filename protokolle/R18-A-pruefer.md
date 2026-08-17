# R18-A · Prüferbericht (unabhängig, frischer Kontext)

**Prüfgegenstand:** Bau-Commit **`8fe60d8`**, sechs Dateien.
**Eingefrorene Stände:** Rundenstart `86afceb` · Session-Start `a7fca1c` ·
Fremd-Commits `0e94e59`, `106dc0e`.
**Leseweg:** Prüfgegenstand und Quellen ausschließlich über
`git show 8fe60d8:<pfad>` bzw. `git grep … 8fe60d8` in eine
Scratchpad-Kopie; der Arbeitsbaum wurde für **keine** Messung benutzt
(dort liegt uncommittete Arbeit von R18-B).
**Rohquellen:** `sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.txt`
(696 Zeilen) · `sensibel/rohbelege-R17-A/olg-duesseldorf-20-W-37-24.txt`
(vollständig, Rn. 1–27) · `sensibel/rohbelege-R17-A/00-quellenliste.md` ·
`sensibel/rohbelege-R18-A/` (alle fünf Abzüge gehasht).
Randnummern wurden **nie ausgezählt**, sondern per `grep -n "^ NNN "`
angesteuert; Anker Rn. 156 = Z. 440, Rn. 273 = Z. 674 stimmt.

**Ergebnis in einem Satz:** Der handwerkliche Kern der Runde
(Tenor-Reparatur, Rn.-22-Reparatur, Sperrdatei-Positivliste,
Beschaffungsprotokoll) ist **sauber und am Original bestätigt** — die
schweren Befunde liegen ausnahmslos im **neu gebauten**
`angebotsarchitektur.md` § 6a.7a, dessen tragende Bestandsaussage,
dessen Geltungsgrenze und dessen Anschluss je einzeln am Objekt
scheitern.

**Zählung:** 3 SCHWER · 9 MITTEL · 11 HINWEIS · 8 Rückwärts-Funde.

---

## A. SCHWER

### S-1 · Die tragende Bestandsaussage von `PV-1` steht auf einer Fundstelle, die sie nicht trägt

**Fundstelle:** `handel/angebotsarchitektur.md`, § 6a.7a, Kasten
„`PV-1` — Prüfposten, KEIN Gate", *Auslöser*-Satz.

**Behauptet wird:**

> „… an einen Adressaten geht, der **Verbraucher sein kann**
> (Einzelunternehmer und Privatvermieter ohne Unternehmereigenschaft
> sind der reale Fall in unserer Zielgruppe —
> `akquise/interessenabwaegung-o8.md` § 5.4 führt sie als eigene
> Fallgruppen)"

**Gemessen am Objekt (Stand `8fe60d8`, `git grep -c -i`):**

| Suchbegriff | `akquise/interessenabwaegung-o8.md` | `handel/angebotsarchitektur.md` |
|---|---:|---:|
| `Einzelunternehmer` | **0** | 1 *(nur die neue Zeile selbst)* |
| `Privatvermieter` | **0** | 1 *(nur die neue Zeile selbst)* |
| `inhabergeführt` *(Positivkontrolle)* | **3** | — |

§ 5.4 führt **FG-1 bis FG-6**; der Schnitt läuft über
*Kapitalgesellschaft / inhabergeführtes Haus / Personengesellschaft /
benannte Person* **×** *Quelle* — also über den **Personenbezug** der
Daten, nicht über die **Verbrauchereigenschaft** des Adressaten. Ein
inhabergeführtes Hotel ist im geschäftlichen Verkehr Unternehmer, kein
Verbraucher; die beiden Achsen fallen nicht zusammen.

**Warum das schwer wiegt:** Der gesamte neue Abschnitt hängt an genau
diesem Satz. Fällt die Prämisse „Verbraucher sind der reale Fall in
unserer Zielgruppe", verliert `PV-1` seinen Auslöser — und die
Geltungsgrenze („für reine B2B-Ansprache offen") würde den Posten
leerlaufen lassen. Klasse: L-36 (Bestandsaussage in neu geschriebenem
Text ohne Messung) und Verifikationsregel (a) (Aussage und Fundstelle
getrennt prüfen).

**Reparatur:** Den Klammerzusatz **streichen** und die Verbraucher-Frage
als offen ausweisen — oder eine Quelle benennen, die eine
Verbraucher-Berührung der Zielgruppe wirklich belegt. Abschwächen
(„könnten Fallgruppen sein") reicht nicht: § 5.4 sagt zur
Verbrauchereigenschaft **nichts**, der schwächere Satz wäre nur leiser.

---

### S-2 · Die Geltungsgrenze von § 6a.7a ist am Objekt falsch — und übergeht die schärfere Stelle des eigenen Bestands

**Fundstelle:** `handel/angebotsarchitektur.md`, § 6a.7a, Kasten
„⚠️ **Geltungsgrenze, die mitgehört werden muss:** Alle drei
Randnummern sprechen von **Verbrauchern**. Für eine reine B2B-Ansprache
ist die Frage offen …"

**(1) Die Zählung stimmt nicht.** Der Abschnitt zitiert Rn. 187, 188,
202 und 206–209 — das sind vier Fundstellen, nicht drei. Gemessen je
Randnummer am Rohbeleg (`grep -o "Verbraucher"` auf die einzelne
Randnummer-Zeile):

| Rn. | Treffer | Bemerkung |
|---|---:|---|
| 186 | 2 | Normtext |
| 187 | 2 | trifft zu |
| 188 | 2 | trifft zu |
| **202** | **1** | ⚠️ **Teilwort-Treffer**: „…von einer anderen **Verbraucher**zentrale geführten Verbandsklageverfahren…" — kein Verbraucher als Schutzsubjekt |
| **206** | **0** | — |
| **207** | **0** | spricht von „Vertragspartner des Verwenders" |
| 208 | 1 | trifft zu |
| 209 | 1 | trifft zu |

Der Satz „**alle** … sprechen von Verbrauchern" ist damit für Rn. 202,
206 und 207 widerlegt. § 305c Abs. 1 BGB (Rn. 206/207) ist im Wortlaut
nicht verbraucherbeschränkt — ob er im B2B gilt, ist eine Rechtsfrage,
die **ich nicht bewerte**; belegt ist nur, dass die Prämisse der
Geltungsgrenze am Objekt nicht stimmt.

**(2) Der Bestand ist schon weiter — die Quelle sagt es selbst.**
Rn. 187 beginnt: „Diese - **bereits oben unter II 6 c bb (1)** näher
umrissenen - Voraussetzungen des § 3 Abs. 2 UWG …". Genau dort steht
Rn. 148, und **die Rechtsmatrix führt sie seit R16-A wörtlich mit
Etikett** (`handel/kanal-rechtsmatrix.md`, B1-Block, Randnummern-Tabelle,
Zeile **148**):

> „Der Tatbestand der zweiten Schiene im Wortlaut — **und seine
> Adressatengrenze**: ‚Nach § 3 Abs. 2 UWG sind geschäftliche
> Handlungen, die sich **an Verbraucher richten oder diese erreichen**,
> unlauter, …'"

Dasselbe steht in **Rn. 186**, die die Session laut Commit-Message
gelesen hat („Rn. 186 bestätigt Bestand"). „**oder diese erreichen**"
ist die Hälfte des Tatbestands, die über die B2B-Frage entscheidet —
und sie kommt in § 6a.7a **nicht vor** (`305c` und
`Überraschungsverbot` je 1 Treffer im ganzen Repo, beide in der neuen
Passage; `Rn. 186` dort 0). Die Session hat die B2B-Frage als „offen"
ausgewiesen, obwohl der eigene Bestand die entscheidende Norm-Hälfte
bereits als **Adressatengrenze** führt und der Rohbeleg im selben
Satz dorthin zurückverweist.

Klasse: L-34 (ein präziser Quellverweis benennt, wo man anfängt, nicht,
wo man aufhört) — hier hat die Quelle den Rückverweis sogar
mitgeliefert.

**Reparatur:** Geltungsgrenze neu fassen: je Randnummer ausweisen, wer
Verbraucher nennt und wer nicht; Rn. 186/148 („richten **oder diese
erreichen**") aufnehmen und die Frage danach zuschneiden — nicht als
„B2B offen", sondern als „erreicht unsere Aussendung Verbraucher?".
Damit fällt sie mit dem `PV-1`-Auslöser zusammen und S-1 wird zugleich
reparierbar.

---

### S-3 · Der Anschluss von `PV-1` ist eine Entwarnung ohne Träger — das Briefing trägt die Frage nicht

**Fundstelle:** `handel/angebotsarchitektur.md`, § 6a.7a, `PV-1`-Kasten,
*Anschluss*:

> „Die Klauselprüfung selbst ist **Rechtsberatung** und gehört zu
> demselben Mandat wie die vier Briefing-Fragen — **dieser Posten stellt
> sicher, dass sie vor dem ersten Dokument gestellt wird**, nicht
> danach."

**Gemessen in `handel/anwalts-briefing-2026-08.md` (Stand `8fe60d8`,
also NACH allen R18-A-Eingriffen an derselben Datei im selben Commit):**

| Suchbegriff | Treffer |
|---|---:|
| `PV-1` | **0** |
| `305c` | **0** |
| `Überraschung` | **0** |
| `Einbeziehung` | **0** |
| `305 Abs` | **0** |
| `Rn. 187` / `Rn. 188` / `Rn. 202` / `Rn. 206` | **0 / 0 / 0 / 0** |
| `Frage 3` *(Positivkontrolle)* | **4** |

Die Klauselfrage ist im Briefing **nirgends gestellt**. Der Satz „stellt
sicher, dass sie … gestellt wird" ist damit eine Entwarnung über die
eigene Arbeit, für die nichts existiert — und das Briefing wurde in
**demselben** Commit an acht Stellen angefasst, darunter § 4a, wo ein
Kandidat D der naheliegende Ort gewesen wäre. CLAUDE.md Regel 8(b)
verlangt beim Zielort ausdrücklich das **Nachsehen, ob er existiert und
gerade rausgeht** — er ging gerade raus und wurde nicht erweitert.

**Reparatur:** Entweder Kandidat D („Einbeziehung und Platzierung
belastender Klauseln in Angebots-/Übersichtsdokumenten") in Briefing
§ 4a + § 8 aufnehmen — oder den „stellt sicher"-Satz **streichen** und
durch „ist noch kein Gegenstand des Briefings; Aufnahme ist ein offener
Posten (Träger MKT-HANDEL)" ersetzen.

---

## B. MITTEL

### M-1 · `PV-1` gibt eine Sperre als Nicht-Sperre aus

**Fundstelle:** `handel/angebotsarchitektur.md` § 6a.7a, `PV-1`-Kasten,
Absatz „⚠️ Warum ausdrücklich kein fünftes GA-Gate".

Der Kasten sagt „`PV-1` … **sperrt nichts**" und im selben Kasten:
„Eine **Sperre** daraus zu machen wäre … eine Betriebs-Festlegung mit
Außenwirkung — die trifft diese Session nicht allein." Der *Auslöser*
lautet aber „**Bevor** das **erste** Angebots-, Preis- oder
Vertragsdokument an einen Adressaten geht, der Verbraucher sein kann,
… wird geprüft", und der *Anschluss* ergänzt „stellt sicher, dass sie
**vor** dem ersten Dokument gestellt wird". Zusammen ist das eine
Vorbedingung vor dem ersten Angebot — genau die Betriebs-Festlegung, die
der Kasten sich selbst verbietet. Klasse: „Ein FIX kann eine
VORBEDINGUNG erfinden — ‚Text nachziehen' und ‚Blocker setzen' trennen".

**Reparatur:** Beide Lesarten dem User vorlegen (a: Prüfschritt ohne
Sperrwirkung, Auslöser als Wiedervorlage formuliert; b: echte
Vorbedingung, dann als solche benannt und in D3/AA-Liste geführt) und
den Auslöser bis zur Entscheidung ohne „bevor … geht" formulieren.

### M-2 · Die Rn.-202-Zeile verliert den Vorbehalt der Quelle

**Fundstelle:** `handel/angebotsarchitektur.md` § 6a.7a, Tabelle, Zeile
**Rn. 202**, Spalte „Warum sie uns treffen kann": „Genau diese
Hinweisform ist der Standard in Angebots-PDFs. **Der Verweis auf eine
Web-Adresse ersetzt die Einbeziehung nicht**".

**Original (Rn. 202, Absatz am Stück gelesen):** Der Hinweis ist
„hierzu **jedenfalls deshalb** ungeeignet, weil es sich bei ihm
(**nach den in einem von einer anderen Verbraucherzentrale gegen die
Beklagte geführten Verbandsklageverfahren getroffenen Feststellungen**)
um eine gemäß § 307 Abs. 1 S. 2 **in Verbindung mit S. 1** BGB
unwirksame Klausel handelt".

Die Unwirksamkeit der Hinweisklausel ist also aus **Feststellungen eines
anderen Verfahrens gegen dieselbe Beklagte** übernommen — es ist keine
allgemeine Aussage über die Bauform „Es gelten die AGB (abrufbar
über …)". Die Verdichtung macht daraus einen generellen Satz. Die Zellen
der Tabelle sind byte-treu, der **verallgemeinernde Satz daneben** ist
es nicht — Klasse L-47/Verdichtungs-Drift.

**Reparatur:** Vorbehalt in die Zelle übernehmen („… weil der Hinweis
**nach den Feststellungen eines anderen Verbandsklageverfahrens gegen
dieselbe Beklagte** selbst unwirksam war"), Fazit-Satz auf „Ob ein
Verweis auf eine Web-Adresse die Einbeziehung trägt, ist damit
mindestens fraglich" zurückstufen.

### M-3 · Briefing § 4a Kandidat C: Die Verneinung ist weiter als ihr Suchraum — und der Wahrheits-Kanal sagt das Gegenteil

**Fundstelle:** `handel/anwalts-briefing-2026-08.md`, § 4a Kandidat C,
Absatz „**Der Stand bei uns ist ausdrücklich offen, nicht entschieden.**"

Behauptet: „die Frage ist **in unserem gesamten Bestand an keiner Stelle
gestellt** (Suchweg 17.08.2026: `grep -rn "Arbeitstitel"` über `handel/`
und `akquise/` …)".

**Eigener Suchweg (`git grep -c -i "Arbeitstitel" 8fe60d8 -- "*.md"`,
repo-weit):**

| Datei | Treffer |
|---|---:|
| `akquise/akquiseplan.md` | 11 |
| `protokolle/tagesplan-2026-08-17.md` | 8 |
| `handel/anwalts-briefing-2026-08.md` | 7 *(die neue Passage selbst)* |
| `protokolle/R17-C-abschluss.md` | 5 |
| … | … |
| **`projektquelle-mkt.md`** | **1** |
| `lehren-register.md` | 1 |

Der eine Treffer im **Wahrheits-Kanal** (`projektquelle-mkt.md`,
Abschnitt „Nächster konkreter Schritt", Posten (6)) lautet:

> „**R18 HANDEL/Anwalt:** Rechtsfrage ‚kann ein ARBEITSTITEL die
> Art.-14-Angabe zum Verantwortlichen tragen?' (Akquiseplan § 3.2 Pfad
> (b), R17-C Block 2 Nr. 2) — **gestellt, unbeantwortet**, kein Träger
> im Briefing"

Und `akquise/akquiseplan.md` § 3.2 **stellt** die Frage im Volltext
(„Ob eine Firmierung, die kurz darauf wechselt, diese Pflichtangabe
erfüllt … ist eine **Rechtsfrage: Frage an den Anwalt**"). Der
Suchraum `handel/` + `akquise/` schließt den Wahrheits-Kanal aus, in dem
das Gegenwort steht — und die Verneinung wurde **aus dem Akquiseplan
mitsamt ihres Suchraums übernommen**, wo sie identisch formuliert ist.

Zwei Zusätze:
- **Die Fremdmeldung wurde nicht gelesen:** `protokolle/R17-C-abschluss.md`
  hält fest: „**Die Arbeitstitel-Verneinung hält**, mit **repo-weitem
  Grep** statt nur `akquise/`+`handel/`." R18-A ist hinter diesen
  Suchraum zurückgefallen, ohne die Meldung zu nennen (L-50:
  Fremdmeldungen tragen ihren Lesestand).
- **Die Zahl ist durch den eigenen Commit falsch geworden:** „null
  Treffer in `handel/`" steht in einer Datei, die in `handel/` liegt und
  im selben Commit 7 Treffer bekommen hat (L-49).

**Reparatur:** Satz auf das reduzieren, was gemessen ist: „**nirgends
beantwortet und nirgends geprüft**; gestellt ist sie im Akquiseplan
§ 3.2 und im Wahrheits-Kanal als offener Posten geführt". Suchraum
repo-weit angeben und Sachbegriffe (`F-7`, `Firmierung`) mitführen; der
Positivkontroll-Nachweis braucht je Kanal (`handel/`, `akquise/`) einen
eigenen Anker.

### M-4 · Neu erzeugte Markdown-Naht zieht einen Vorbehalt in einen internen Reparaturkasten

**Fundstelle:** `handel/anwalts-briefing-2026-08.md`, § 4a Kandidat A,
Nahtstelle zwischen dem neuen Kasten „🔧 **Nachgezogen 17.08.2026
(R18-A) — hier fehlten zwei Felder.**" und der Folgezeile
„Unser Bestand vermerkt dazu: …".

Zwischen der letzten `>`-Zeile („> … zutreffend beschreiben muss.") und
der Folgezeile steht **keine Leerzeile**. Nach CommonMark ist das *lazy
continuation*: die drei Folgezeilen werden **in das Blockzitat gezogen**.
Betroffen ist ausgerechnet der Vorbehalt, auf dem Kandidat A ruht:

> „Unser Bestand vermerkt dazu: ‚Ob der Eintrag eines fremden
> Impressumsvermerks in einen eigenen Sperrbestand seinerseits eine
> zulässige Verarbeitung ist, ist **nicht erhoben**.'"

Da Reparaturkästen interner Text sind und der Statusblock ausdrücklich
„vor dem Versand entfernen" vorsieht, würde dieser Vorbehalt beim
Entfernen des Kastens **mitgehen** — in einem Dokument, das an einen
Anwalt geht.

**Messung (eigenes Skript mit Selbsttest, alle sechs Prüfdateien,
3.774 geprüfte Blockquote-Endzeilen):** 7 Nahtstellen ohne Leerzeile,
davon 5 vor Listenmarkern (kein Lazy-Continuation-Fall) und 2 echte
Absatzfälle: **`anwalts-briefing-2026-08.md` (NEU durch `8fe60d8`)** und
`interessenabwaegung-o8.md` (Bestand, s. N-2). Selbsttest der Prüfung
feuert (`> Zitat B` → `Folgetext MUSS treffen`).

⚠️ **Die Löschungszählung der Session ist gegen diese Klasse blind** —
es wird nichts gelöscht, die Wirkung entsteht beim Rendern. L-38 nennt
nur die Löschungs-Variante des Edit-Anker-Fehlers; das ist die
Einfüge-Variante.

**Reparatur:** Eine Leerzeile zwischen `> … zutreffend beschreiben
muss.` und `Unser Bestand vermerkt dazu:`. Die Nahtstelle danach neu
lesen.

### M-5 · Der „Zeiger, kein zweiter Eintrag" ist selbst eine Dublette — und die beiden Fassungen weichen voneinander ab

**Fundstelle:** `handel/kanal-rechtsmatrix.md` C4, Kasten „⭐ Und es gibt
keine Karenzfrist zum Nachreichen".

Der Kasten sagt: „**Zeiger, kein zweiter Eintrag** — Herleitung,
Urteilszitat (**Rn. 220**) und Belegstufe stehen an **genau einer
Stelle**". Zwei Zeilen später steht ebendieses Urteilszitat ein zweites
Mal, dazu der lit.-b-Wortlaut, den `interessenabwaegung-o8.md` § 7.1
ebenfalls führt:

| | Rechtsmatrix C4 (neu) | o8 § 7.1 (Bestand) |
|---|---|---|
| Rn.-220-Zitat | „— **insoweit** von der DSGVO nicht vorgesehene**[n]** — Karenzfrist" | „— **insoweit** von der DSGVO nicht vorgesehene — Karenzfrist für eine Nachlieferung der geschuldeten Informationen" |
| lit. b | „spätestens zum Zeitpunkt der ersten Mitteilung" | „spätestens zum Zeitpunkt der ersten Mitteilung" |

Der Text existiert damit an zwei Stellen ohne Wächter und ohne
Vorrangklausel — genau der Zustand, den der Kasten zu vermeiden
beansprucht. Die `[n]`-Flexion ist zwar korrekt markiert, macht die
beiden Fassungen aber **nicht deckungsgleich**; wer eine ändert, merkt
es an der anderen nicht.

**Nicht** zu beanstanden ist dagegen die Begründung der Zeiger-Form: Die
Vorrangklausel in C4 lautet am Objekt „Bei Widerspruch zwischen **dieser
Aufzählung** und der in `akquise/interessenabwaegung-o8.md` gewinnt das
O-8-Dokument" — sie deckt tatsächlich nur die achtteilige Aufzählung.
Diese Prüfung geht **für** die Session aus.

**Reparatur:** Entweder das Rn.-220-Zitat aus C4 herausnehmen (dann ist
es wirklich ein Zeiger) — oder eine Vorrangklausel für diesen Absatz
ergänzen („bei Widerspruch gewinnt o8 § 7.1") und die Fassung
byte-gleich ziehen.

### M-6 · „Die Rechtsmatrix führt die Fristen bereits richtig (Rn. 85/87)" — Rn. 87 trägt das nicht

**Fundstelle:** `handel/kanal-rechtsmatrix.md` C4, Schlusssatz desselben
Kastens.

**Rn. 85 am Original:** „Die Beklagte hat es versäumt, den Adressaten des
Schreibens **spätestens mit diesem Schreiben** (wie es gemäß Art. 14
Abs. 3 Buchst. b DSGVO geboten war) … zu erteilen." ✔ trägt.

**Rn. 87 am Original:** behandelt **keine Frist**, sondern Art. 12 Abs. 1
und die Frage, ob Vorkehrungen bereits vor dem ersten Verarbeitungs­schritt
stehen müssen; sie beginnt mit „**Unabhängig davon** erscheinen die
Bedenken im Ausgangspunkt **allenfalls** … erwägenswert".

Im eigenen Bestand wird Rn. 87 ausschließlich für die
Vorkehrungs-Fälligkeit geführt (Rechtsmatrix D3/O-9-Block, dort
ausdrücklich mit dem Hinweis auf das „Unabhängig davon") — und sie ist
Gegenstand einer **offenen Anwaltsfrage** (Briefing Frage 2, Teilfrage 6:
„Trägt Rn. 87 die Betriebsfolge, die wir daraus ziehen? … oder
überdehnen wir sie?"). Eine Entwarnung („führt die Fristen bereits
richtig") auf eine Randnummer zu stützen, die das eigene Dokument
anderswo als möglicherweise überdehnt führt, ist die schärfste Form der
Belegstufen-Drift.

**Reparatur:** „(Rn. 85/87)" → „(Rn. 85)".

### M-7 · listenbau § 6.1: ✅ ERLEDIGT ohne Nenner, und der Folgesatz im selben Abschnitt blieb stehen

**Fundstelle:** `akquise/listenbau-regelwerk.md` § 6.1,
✅-Kasten „ERLEDIGT 17.08.2026 (R18-A) — die Quelle ist nachgezogen, die
Abweichung besteht nicht mehr."

Der Absatz **wenige Zeilen darüber** lautet unverändert:

> „**Am Objekt nachgeprüft (17.08.2026, Stand `926ca3c`):** Alle drei
> Abweichungen bestehen weiter … **3 von 3 offen, 0 von 3
> zwischenzeitlich erledigt.**"

Repariert ist genau **eine** der drei Abweichungen (a: FG-2-Anteil);
(b) Textversionen-Doppelfeld und (c) mehrzeiliges Abgleichsdatum bleiben
offen. Der ✅-Kasten trägt keinen Nenner — das ist die L-13-Klasse
(„eine Kategorie ohne Nenner liest sich als abgearbeitet"), und die
„3 von 3 offen"-Zeile ist ein L-51-Folgesatz **im selben Abschnitt, im
Scope dieser Session**.

Zusätzlich untertreibt der Kasten seine eigene Reichweite: Er sagt „Was
von ihm nicht mehr gilt, ist **genau** die Aussage ‚die Quelle ist in
sich inkonsistent'". Nicht mehr gilt außerdem „Feld 4 geht über den
Wortlaut von o8 § 10 B-6 hinaus" (Satz 1 des Absatzes) und
„`akquise/interessenabwaegung-o8.md` gehört zum Scope **R17-A**".

**Reparatur:** Kasten-Überschrift auf „**1 von 3** Abweichungen erledigt
— (b) und (c) bleiben offen"; „3 von 3 offen"-Zeile mit
Vorwärtsverweis versehen; „genau die Aussage" → Aufzählung der drei
Sätze, die fallen.

### M-8 · L-25-Gegenrichtung nur zur Hälfte gelaufen — `wellenprotokoll-vorlage.md` steht unverändert auf dem gekippten Stand

**Fundstelle:** `akquise/interessenabwaegung-o8.md` § 10, **B-6**, neuer
🔧-Text.

Der neue B-6-Text nennt **beide** Ableitungen und gibt Entwarnung:

> „`akquise/listenbau-regelwerk.md` § 6.1 (Feld 4) **und
> `akquise/wellenprotokoll-vorlage.md` (WP-19)** hatten die Lücke
> bereits gemeldet … **Mit diesem Eintrag ist die Vorrangklausel wieder
> deckungsgleich: Die Ableitungen gehen nicht mehr über die Quelle
> hinaus**"

Nachgezogen wurde nur `listenbau-regelwerk.md`. In
`akquise/wellenprotokoll-vorlage.md` (Stand `8fe60d8`, unverändert)
steht weiter:

- Überschrift § 10: „**Vier Punkte, an denen diese Vorlage über den
  Regelwerks-Nachtrag hinausgeht**"
- § 10 Nr. 2: „**B-6 und der § 6.1-Nachtrag des Regelwerks nennen nur
  FG-4.**"

Beides ist seit `8fe60d8` **doppelt falsch** (B-6 nennt FG-2, und der
§ 6.1-Nachtrag nennt ihn als Feld 4 ebenfalls). Die Datei liegt
außerhalb des Prüfgegenstands — dann ist die Meldung Pflicht; in keiner
der sechs Dateien steht sie.

**Reparatur:** In der Abschlussmeldung als Nebenbefund mit Zielort
führen; die Entwarnung in B-6 bis dahin auf die eine nachgezogene
Ableitung einschränken („listenbau § 6.1 ist nachgezogen; die
Wellenprotokoll-Vorlage steht noch auf dem alten Stand — offener
Posten").

### M-9 · „Vier Kanäle, jeder mit Positivkontrolle" — der Nenner der Rechtsmatrix ist nicht der Nenner des Protokolls

**Fundstelle:** `handel/kanal-rechtsmatrix.md`, A7/OLG-Kasten,
📌-NACHTRAG, Punkte (1)–(4); gleichlautend im Briefing § 2.3 und in der
Zeile „Änderungen R18-A".

Das Beschaffungsprotokoll (`sensibel/rohbelege-R18-A/00-quellenliste.md`)
führt **K1 NRWE-GET · K2 openJur (verworfen, geratene URL) · K3
Web-Suche mit drei Läufen · K4 dejure**. Die Rechtsmatrix zählt
stattdessen: (1) NRWE · (2) Web-Suche domänenbeschränkt · (3) Web-Suche
mit `I-`-Präfix · (4) dejure.

Zwei Folgen:
- **(2) und (3) sind derselbe Kanal** (Web-Suche), unterschieden nur
  durch den Suchbegriff. Ein Kanalbefund, der zweimal gezählt wird, macht
  den Nenner größer, als die Messung hergibt.
- **Lauf (3) hat keine eigene Positivkontrolle** — die Aussage „vier
  Kanäle, **jeder** mit Positivkontrolle" ist für diesen Lauf nicht
  gedeckt (das Protokoll führt die Kontrolle korrekt nur einmal für K3).
- **openJur fehlt im außenwirksamen Text vollständig.** Das Protokoll
  behandelt es methodisch vorbildlich (geratene URL ⇒ kein Negativ), der
  Leser der Rechtsmatrix erfährt davon nichts.

**Reparatur:** „vier Kanäle" → „**drei** Kanäle mit vier Läufen; ein
vierter Kanal (openJur) wurde verworfen, weil die URL geraten war"; bei
Lauf (3) ausweisen, dass er die Positivkontrolle von (2) teilt.

---

## C. HINWEISE

- **H-1 · Tenor-Zitat endet als Satzpräfix ohne Ellipse.**
  `kanal-rechtsmatrix.md`, A7-Kasten Punkt 3. Die Neufassung zitiert
  „in Bezug auf den sie personenbezogene Daten **bei einem Dritten** zu
  dem Zweck **erhoben hat**." — im Tenor folgt unmittelbar (nach Komma)
  die Auflösung des Zwecks („diese personenbezogenen Daten … **zur
  Anbahnung einer Geschäftsbeziehung** … zu verwenden"), die den Tenor
  zusätzlich einschränkt. Das Zitat ist byte-treu, endet aber mit einem
  künstlichen Punkt an einem Komma. → sichtbare Ellipse setzen oder den
  Zweck mitzitieren.
- **H-2 · Der Reparaturkasten widerspricht sich um eine halbe Zeile.**
  Ebenda: erst „die Beschränkung damit **von der Person auf die Daten
  verschoben**", dann „**Die Aussage des Satzes ändert sich nicht**".
  Beides zugleich ist keine saubere Disposition. → „Die Beschränkung auf
  Dritterhebung bleibt; das Bezugsobjekt war verschoben."
- **H-3 · Hervorhebungen in wörtlichen Zitaten ohne Vermerk.**
  `**Kenntnis**` (Rn. 22), `**bei einem Dritten**` (Tenor), und beim
  Zitat aus `sensibel/rohbelege-R17-A/00-quellenliste.md` ist die
  **Hervorhebung verschoben**: die Quelle hebt „**begründet**" hervor,
  die Rechtsmatrix hebt „**dürfte**" hervor. → „(Hervorhebung von uns)".
- **H-4 · Drei stille Glättungen ohne Kastenvermerk** (jede einzeln in
  der Löschungsdurchsicht gefunden):
  Briefing § 2.3 „**die** begründete Fassung" → „**eine** begründete
  Fassung" · Rechtsmatrix Punkt 8 „in ihrer tragenden Form
  **braucht**" → „**sucht**" · Sperrdatei-Reparaturkasten zitiert die
  Vorfassung nur bis „niemals `SP-04`." und lässt „(kein Personenname)"
  ohne Ellipse weg.
- **H-5 · Nackte Zeilennummer ohne Commit-Bezug — im Kasten, der genau
  diesen Befund zitiert.** `kanal-rechtsmatrix.md`, 🔖-Kasten zum
  Rundenpräfix: „`protokolle/R16-A-pruefer.md` H-2 (**dieser** Befund,
  dort **Z. 385**…)". Derselbe Kasten führt drei Zeilen weiter
  `protokolle/R17-A-pruefer.md` H-2 = „L-49 am eigenen Reparaturtext:
  **nackte Zeilennummer**". Der Beleg selbst ist korrekt: alle vier
  H-2-Fundstellen sind am Objekt bestätigt (R15-A Z. 680, R16-A Z. 385,
  R17-A Z. 734, `beleg/baseline-messplan.md` Z. 3/375). → Abschnittsbezug
  oder `@<hash>`.
- **H-6 · Das FG-2-Zitat in o8 B-6 ist nicht byte-treu.** Original
  (§ 5.4): „… **Anteil im Wellenprotokoll ausweisen** (B-6), und die
  Einstufung „kein Personenbezug" muss …". Neu in B-6: `\(B-6\)`
  (escaped) und ‚kein Personenbezug' (einfache statt deutscher
  Anführungszeichen). `akquise/wellenprotokoll-vorlage.md` zitiert
  dieselbe Zeile in der Originalform — zwei Ableitungen, zwei Fassungen.
- **H-7 · Die Dubletten-Begründung stützt sich auf eine ungemessene
  Wächter-Aussage.** Der C4-Kasten, auf den der neue Zeiger verweist,
  sagt: „Ein Wächter deckt sie nicht ab: `pruefe-zitate.js` führt weder
  das O-8-Dokument noch diese Aufzählung als Blockzitat" — eingezogen
  **13.08.2026**. Am 17.08. hat R17-B den Prüfraum um 19 Zieldateien
  erweitert, und `akquise/zitat-baseline-2026-08-17.md` führt
  `akquise/interessenabwaegung-o8.md` als Baseline-Träger. Die Aussage
  mag im Ergebnis halten (die o8-Zitate liegen in der
  `r15-altlast`-Gruppe, also „nicht im Pool"), gemessen wurde sie nicht.
- **H-8 · Toter Verweis im Bau-Commit.** `protokolle/R18-A-abschluss.md`
  existiert in `8fe60d8` **nicht** (`git ls-tree` leer), wird aber
  benannt von `kanal-rechtsmatrix.md` (1×, „Einzelheiten und **Hashes**")
  und `anwalts-briefing-2026-08.md` (2×). Erledigt sich, sobald das
  Abschlussprotokoll in derselben Runde committet wird — bis dahin zeigen
  zwei aktive Dokumente auf nichts, und die Hash-Belege liegen
  ausschließlich in einem git-ignorierten Ordner.
- **H-9 · `SP-11a` fehlt in der Vollzähligkeits-Gegenprobe.** Der
  Sperrdatei-Reparaturkasten sagt „`SP-11` bis `SP-13` bleiben bei
  `ANL-3` leer" — die Feldtabelle führt in dieser Spanne **vier**
  Feld-IDs (SP-11, **SP-11a**, SP-12, SP-13). Sachlich richtig (alle 🔶,
  alle an `SP-11` gekoppelt), aber die Gegenprobe zählt eine ID zu wenig.
- **H-10 · Zuspitzung in Kandidat C.** „Zugleich **sperrt** … bereits der
  erste Datensatz die Vorbereitung" — die eigene Ableitung lautet
  „sämtliche Vorkehrungen müssen **vor** dem ersten Datensatz stehen".
  Die Zuspitzung ist mit „nach unserer Lesart (Rn. 87, Frage 2 Teilfrage
  6)" korrekt markiert; die Formulierung selbst dreht die Richtung.
- **H-11 · Zwei kleine Normbegriff-Driften im Fließtext** (L-27-Klasse,
  von keinem Zitatabgleich zu fangen): § 6a.7a schreibt „weil solche
  **Klauseln** …" für „solche **Allgemeinen Geschäftsbedingungen**"
  (Rn. 187) und „§ 307 Abs. 1 S. 2 BGB" für „§ 307 Abs. 1 S. 2 **in
  Verbindung mit S. 1** BGB" (Rn. 202).

---

## D. Rückwärts-Kategorie — „Was aus Rn. 187/188, Rn. 220 und den acht Rohbeleg-Stellen ist NICHT angekommen?"

Leseraum: LG-Urteil Rn. 156–226 am Stück gelesen, Rn. 227–273
stichprobenweise (s. Blindstelle B-1); OLG-Beschluss Rn. 1–27
vollständig. Gegenprobe je Fund: `git grep -c` über
`kanal-rechtsmatrix.md`, `angebotsarchitektur.md`,
`interessenabwaegung-o8.md`, `anwalts-briefing-2026-08.md` im Stand
`8fe60d8`.

| # | Fundstelle | Was dort steht | Bestand |
|---|---|---|---|
| **R-1** | **Rn. 186** | Der **Normtext** des § 3 Abs. 2 UWG: geschäftliche Handlungen, „die sich an Verbraucher richten **oder diese erreichen**". Das ist die Hälfte, die über die B2B-Frage entscheidet | in `kanal-rechtsmatrix.md` (Rn. 148) vorhanden — in § 6a.7a **nicht genutzt** (s. S-2) |
| **R-2** | **Rn. 187, zweiter Satz** | Das **zweite** Tatbestandsmerkmal: „Ein solches Verhalten widerspricht regelmäßig den Erfordernissen **fachlicher Sorgfalt im Sinne von Art. 5 Abs. 2 Buchst. a UGPRL**" | `fachlicher Sorgfalt` = **0** Treffer in allen vier Dokumenten. Die `PV-1`-Prüfliste (drei Fragen) prüft nur Platzierung und Einbeziehung, nicht die Sorgfalt |
| **R-3** | **Rn. 189 + Rn. 191** | Die Haftung tritt ein „**ungeachtet der Frage, ob die Klausel wirksam ist und … einbezogen worden ist**" bzw. „**und zwar unabhängig davon**, ob die Klausel wirksam ist und ob die … Gestaltung die Voraussetzungen für eine Einbeziehung … erfüllt" | `Rn. 189` / `Rn. 191` = **0 / 0**. Das ist der Satz, der die naheliegendste Entlastung („die Klausel war ja nie einbezogen") **kippt** — und genau die, die § 6a.7a als „zweiten Weg" beschreibt |
| **R-4** | **Rn. 205** | „**Angesichts dessen ist bereits fraglich, ob die Aufnahme einer Klausel in die ‚Vertragszusammenfassung' überhaupt geeignet ist**, sie gemäß § 305 Abs. 2 BGB zum Bestandteil des Vertrages zu machen. Die ‚Vertragszusammenfassung' dient — was … **bereits durch die Überschrift signalisiert wird** — nicht dazu, Rechte und Pflichten … festzulegen" | `Rn. 205` = **0**. Die **stärkste** Stelle für die eigene These über Paketübersichten und Preisblätter — sie greift schon an der **Überschrift** des Dokuments, unabhängig von § 305c |
| **R-5** | **Rn. 208, erster Grund** | „Das gilt **schon deshalb**, weil er aufgrund der … erkennbaren Funktion dieses Dokuments **nicht erwartet, dass darin überhaupt Willenserklärungen** … enthalten sind" | § 6a.7a übernimmt nur den **engeren** zweiten Grund („im Abschnitt ‚Preis'"). Der erste Grund ist breiter: **jede** Willenserklärung in einem Übersichtsdokument |
| **R-6** | **Rn. 180 + Rn. 194** | „Die verschiedenen **Unlauterkeitstatbestände** des UWG stellen nur unterschiedliche rechtliche Gesichtspunkte … eines **einheitlichen Streitgegenstandes** dar" / „Die **Dispositionsbefugnis** des Anspruchsstellers erstreckt sich … **nicht** auf die dem Gericht obliegende rechtliche Überprüfung" | `Rn. 180` / `Rn. 194` = **0 / 0**. Risikorelevant: Das Gericht kann auf einem Tatbestand verurteilen, den der Gegner **nie geltend gemacht** hat — im entschiedenen Fall § 3 Abs. 2 UWG und das Transparenzgebot, beide vom Kläger nicht vorgetragen |
| **R-7** | **Rn. 184/185** | Der Kläger ging „**nicht im Verbandsklageverfahren** …, sondern im **Wettbewerbsprozess**" und war deshalb **nicht** den Beschränkungen der §§ 1, 2 UKlaG unterworfen — er konnte die Klausel „**umfassender**" angreifen | `UKlaG` ist im Bestand vorhanden, aber in anderem Kontext (Verbandseigenschaft nach § 4 UKlaG). Der **Reichweiten**-Punkt (UWG-Weg > Verbandsklage-Weg) fehlt in B1 |
| **R-8** | **OLG Rn. 15/16 + 22** | Kernbereichs-Dogmatik: das Charakteristische ist „**auf das beschränkt, was bereits Prüfungsgegenstand im Erkenntnisverfahren gewesen ist**"; eine geänderte Gestaltung braucht „ein (**gesondertes**) Erkenntnisverfahren" | `kerngleich` = 2 (Rechtsmatrix) / 3 (Briefing) — **im Bestand**, kein Fund. Hier ausdrücklich als geprüft und **ohne Befund** vermerkt |

**Zu Rn. 220 selbst: kein Fund.** Die Einordnung „Erwägung zur Auslegung
des Klägervortrags, keine tragende Feststellung" hält am Original —
Rn. 216–220 stehen unter „bb) Der Feststellung des Rechtsverstoßes …
steht **ferner nicht entgegen**, dass der Kläger in seinen Klageantrag
statt des Wortes ‚nicht' die Wendung … aufgenommen hat", und Rn. 218
nennt den Maßstab ausdrücklich „Auslegung von **Prozesshandlungen**".
Der Vorbehalt „**insoweit**" ist korrekt mitgeführt. Anzumerken bleibt,
dass `interessenabwaegung-o8.md` § 7.1 die Formulierung „keine tragende
Feststellung" **nicht** enthält (dort: „Bestätigend nennt das Gericht an
anderer Stelle …") — der Zeiger ist an dieser Stelle schärfer als sein
Ziel. Nicht falsch, aber als Zusatz der Session kenntlich zu machen.

---

## E. Löschungen — zwei Nenner

```
git diff --numstat 86afceb..8fe60d8 -- <6 Pfade>   →  312 +/ 32 -
git diff --numstat a7fca1c..8fe60d8 -- <6 Pfade>   →  312 +/ 32 -
```

| Datei | + | − |
|---|---:|---:|
| `akquise/interessenabwaegung-o8.md` | 1 | 1 |
| `akquise/listenbau-regelwerk.md` | 13 | 0 |
| `akquise/sperrdatei-struktur.md` | 34 | 2 |
| `handel/angebotsarchitektur.md` | 65 | 0 |
| `handel/anwalts-briefing-2026-08.md` | 107 | 19 |
| `handel/kanal-rechtsmatrix.md` | 128 | 10 |
| **Summe** | **348** | **32** |

⚠️ **Die beiden Nenner sind identisch** — weil `a7fca1c` nur den
Tagesplan berührt. Das ist korrekt gemessen, aber der zweite Nenner
trägt hier **keine** zusätzliche Aussage; die Doppel-Nenner-Regel ist
formal erfüllt und inhaltlich leer. Wer daraus „doppelt abgesichert"
liest, liest zu viel.

**Jede der 32 gelöschten Zeilen einzeln geprüft.** Ergebnis: **kein
fremder Bestandstext angetastet**, alle 32 gehören zu Stellen, die die
Session selbst ersetzt hat, und für alle Ersetzungen existiert ein
sichtbarer Reparatur-/Nachtragskasten. Kein Edit-Anker hat eine
Überschrift konsumiert (die einzige Überschriftsänderung — „Zwei weitere
Kandidaten" → „Drei weitere Kandidaten" — ist beabsichtigt und im
Folgeabsatz vermerkt). Drei Ausnahmen sind unter **H-4** geführt (stille
Wortänderungen ohne Kastenvermerk).

**Die Löschungszählung ist gegen M-4 blind** — dort entsteht der Schaden
durch eine Einfügung mit 0 Löschungen. Empfehlung für künftige Runden:
Löschungszählung um eine **Nahtstellen-Prüfung** ergänzen (Blockquote-
Ende ohne Leerzeile vor Absatztext).

---

## F. Ergebnis je Pflicht-Kategorie

**1 · Zitat-Treue — Befunde: H-1, H-3, H-4, H-6, H-11; Kernzitate ohne Befund.**
Jede zitierte Stelle wurde als Absatzblock am Stück gelesen, nie per
Grep auf das Zitat.
- **Tenor Nr. 4** (Rohbeleg Z. 106, Absatz am Stück): Die Neufassung
  „in Bezug auf den sie personenbezogene Daten **bei einem Dritten** zu
  dem Zweck erhoben hat" ist **byte-treu**. Beide von der Session
  benannten Eingriffe der Vorfassung (fehlende Ellipse zwischen
  „Dritten" und „erhoben"; Aktiv→Passiv) sind am Original bestätigt. Die
  Reparatur ist richtig. → Rest: H-1, H-2.
- **OLG Rn. 22** (Rohbeleg Z. 42, vollständig gelesen): Das
  Vier-Satz-Zitat ist **byte-treu**. Die Reparatur ist **richtig und
  nicht überkorrigiert** — der Senat sagt, woher die Parteien die
  Auffassung **kennen**, nicht, dass sie dort begründet sei. Die
  Herkunftsangabe („dort **dürfte** sie begründet stehen") stimmt
  wörtlich mit `00-quellenliste.md` überein.
- **Rn. 220** („— insoweit von der DSGVO nicht vorgesehene[n] —
  Karenzfrist"): byte-treu, Flexion korrekt geklammert.
- **Rn. 187/188** (§ 6a.7a): beide Blockzitate **byte-treu**.
- **Rn. 206** und die § 5.4-FG-2-Zeile: inhaltlich richtig, s. H-6.

**2 · Vorbehalt vollständig — Befunde: M-2 (schwerster), M-7, R-4, R-5.**
Tabellenköpfe geprüft: Die Kopfzeile der § 6a.7a-Tabelle
(„Fundstelle | Aussage | **Warum sie uns treffen kann**") ist neutral;
der Vorbehaltsverlust sitzt in der dritten **Zelle**, nicht im Kopf.
Die byte-treuen Zellen der Spalte „Aussage" decken den
verallgemeinernden Satz daneben nicht.

**3 · Ableitungen nachgezogen (L-25) — Befund: M-8; zusätzlich N-1, N-3, N-4.**
Suchraum war `grep` auf den **Dateinamen** übers Repo (103 Treffer in 13
aktiven Fremddokumenten) **plus** — weil der Dateinamen-Suchraum
nachweislich zu eng ist — eine Gegenprobe über die Sachbegriffe.
Geprüfte Ankunftsstellen: `listenbau-regelwerk.md` ✔ nachgezogen ·
`wellenprotokoll-vorlage.md` ✘ (M-8) · `anwalts-briefing-2026-08.md`
✔ nachgezogen (Kandidat A, neun statt sieben Felder) ·
`projektquelle-mkt.md` / `STATUS.md` ✘ (N-1, Wahrheits-Kanal, von der
Session als Nebenbefund angekündigt) · `akquiseplan.md` ✘ (N-3).

**4 · Folgesätze gekippter Sätze (L-51) — Befunde: M-7, M-8; Nebenbefunde N-1 bis N-4.**
Die vier gekippten Sätze wurden in beide Richtungen verfolgt. Die
**aktiven Fachdokumente im Scope** sind sauber nachgezogen — mit der
Ausnahme M-7 (Folgesatz im selben Abschnitt) und M-8. Die Nacharbeit
liegt im Wahrheits-Kanal und in zwei Dateien außerhalb des Scopes.

**5 · Entwarnungen mit Quelle — Befunde: S-3, M-6, M-9, H-7.**
Geprüft wurden auch die Entwarnungen über die **eigene** Arbeit. Zwei
davon halten der Nachmessung stand:
- „Zeichen: U+00AD/NBSP/U+2011 vorher wie nachher 0" — **unabhängig
  reproduziert** mit eigenem Skript und Selbsttest (Probe SH=1, NBSP=2,
  NH=1 muss treffen): alle sechs Dateien 0/0/0.
- „ID-Kollisions-Grep gelaufen: `PV-1` repo-weit 0, Positivkontrolle
  `GA-1` = 15, Gegenprobe `ZZ-99` = 0" — **am Rundenstart `86afceb`
  exakt reproduziert** (0 / 15 / 0).

**6 · Reparaturkästen sichtbar — ohne systematischen Befund.**
Jede der acht ersetzten Stellen trägt einen sichtbaren Kasten mit der
Vorfassung; zwei Vorfassungen sind wörtlich zitiert (Tenor, Rn.-22-Satz),
eine mit korrekt gesetzter Ellipse (Briefing § 2.3), zwei per
Durchstreichung erhalten (Quellentabelle, § 7.2). Rest: H-4 (drei
stille Wortänderungen), M-4 (Rendering).

---

## G. Der zweite Beschaffungsversuch — reproduziert

Auftragsgemäß am Objekt nachgemessen (`sha256sum` über
`sensibel/rohbelege-R18-A/*.html`):

| Datei | SHA-256 | Größe |
|---|---|---:|
| `dejure-vernetzung-ohne-datum-20U107-23.html` | `3bae1de6ec5a1f161ffec9771d8f8885d9d325349ccaf5ca26f0f2688e6e1eae` | 424.608 B |
| `dejure-vernetzung-ohne-datum-20U40-16_positivkontrolle.html` | `3bae1de6ec5a1f161ffec9771d8f8885d9d325349ccaf5ca26f0f2688e6e1eae` | 424.608 B |
| `dejure-vernetzung-mit-datum-20U40-16_positivkontrolle2.html` | `b5ba7183fb2d39825f93fcb2f82b5621ccf0be41727f5a136e43fec68f629e2e` | 45.662 B |
| `nrwe-get-suche-20U107-23.html` | `b5437a0f9f29ecac271a7ae787cd67042b0a85048275c411fdac8f27d56698b0` | 227.645 B |
| `nrwe-get-suche-20W37-24_positivkontrolle.html` | `a2072551e1cd0a06690a807d994a82d43efcb5311beb89a7c6a4f52afff97d00` | 227.644 B |

**Die dejure-Behauptung hält:** Suchlauf und Kontroll-Aktenzeichen
liefern **dieselbe Datei**, Hash und Bytezahl identisch. Alle in der
Rechtsmatrix genannten Größen (227.645 / 227.644 / 45.662 B) und der
gekürzte Hash `3bae1de6…` stimmen.

**Der NRWE-Befund hält ebenfalls** — eigene Gegenprobe an den Abzügen:
`grep -o` findet das Aktenzeichen in **beiden** Dateien genau **1×**
(im zurückgegebenen Suchfeld, `value="&quot;20 U 107/23&quot;"`), und
`Treffer` kommt in **beiden** Dateien **0×** vor. Kein Ergebnisblock,
auch nicht für das nachweislich vorhandene Dokument.

Methodisch heraushebenswert (positives Muster): Das Protokoll verwirft
den openJur-Lauf **selbst**, weil die URL geraten war — genau die Regel
des Bausteins `quellen-beschaffung`. Dass dieser Lauf im
außenwirksamen Text dann nicht mehr auftaucht, während der Nenner
trotzdem „vier" bleibt, ist der Befund M-9.

---

## H. Nebenbefunde außerhalb des Prüfgegenstands

- **N-1 · Wahrheits-Kanal steht an vier Stellen auf dem gekippten Stand.**
  `STATUS.md`, Abschnitt „Offen aus R17": „**R18 HANDEL:**
  OLG-Parallelverfahren … · Klauselblock Rn.-weise · **Rn. 187/188 + 220
  in die Rechtsmatrix** (R17A-N-2/N-3) · **o8 § 5.4 ↔ § 10 B-6**
  (R17C-N-1) … **R18 AKQ:** … **Sperrdatei SP-01/SP-09** (R17A-N-7)" —
  vier von R18-A erledigte Posten in einem Absatz.
  `projektquelle-mkt.md`, „Nächster konkreter Schritt", Punkte (2), (4)
  und (6) sowie § 6a-Zeile `R15E-N-1` dito; Punkt (6) trägt zusätzlich
  die in M-3 zitierte Gegenaussage. **Leitsession-Aufgabe**, von der
  Session korrekt als Nebenbefund angekündigt — der Vollständigkeit
  halber hier mit Fundstellen.
- **N-2 · Zweite (Bestands-)Markdown-Naht.**
  `akquise/interessenabwaegung-o8.md`, § 5.3-Umfeld: ein Blockquote endet
  mit „> … gegen den VORHER-Stand messen").*" und wird unmittelbar von
  „Weiterverwendung von zur **Anbieterkennzeichnung** veröffentlichten
  Da…" gefolgt — selbe Klasse wie M-4, aber **nicht** von R18-A erzeugt.
- **N-3 · `akquise/akquiseplan.md` § 10 führt einen überholten
  Belegstand der Rechtsmatrix:** „Quellenbasis:
  `handel/kanal-rechtsmatrix.md` (vollständig gelesen im Stand
  `@d11535f`, dort 856 Zeilen; seither auf 866 gewachsen)". Die Datei ist
  in `8fe60d8` um weitere 128 Zeilen gewachsen. Träger: MKT-AKQ.
- **N-4 · `akquise/wellenprotokoll-vorlage.md` § 11 misst gegen o8 § 10
  am Stand `4b84693`:** „`grep -c "^\| \*\*B-[1-8]\*\*"
  akquise/interessenabwaegung-o8.md` = **8**. Gemessen 14.08.2026". Die
  Zahl hält (R18-A hat keine B-Zeile hinzugefügt oder entfernt) — der
  Messstand ist aber überholt, und der **Inhalt** von B-6 hat sich
  geändert.
- **N-5 · Positiver Fund für den Bestand, nicht eingearbeitet:** Rn. 111
  des LG-Urteils belegt das Entscheidungsdatum des OLG-Beschlusses
  **aus zweiter Quelle** („Beschluss vom **19. Dezember 2024** - 20 W
  37/24") — bisher stützt sich der Bestand allein auf Kopfzeile und ECLI
  des Abzugs. Ein Zweitbeleg für eine Datumsangabe, der nichts kostet.

---

## I. MEINE BLINDSTELLE

Ausdrücklich als eigenes Ergebnis, nicht zu „keine Auffälligkeiten"
geglättet:

- **B-1 · Rn. 227–273 habe ich nicht am Stück gelesen.** Gelesen wurden
  Rn. 156–226 vollständig plus Stichproben. Der Auftrag nannte den Raum
  bis Rn. 273; die Rückwärts-Kategorie ist für Rn. 227–273 **nicht
  erhoben**. Erfahrungsgemäß trägt gerade der ungelesene Rest Funde —
  die R-1…R-8 stammen alle aus dem gelesenen Teil.
- **B-2 · Den Zitat-Wächter habe ich nicht gelesen** (ausdrücklich nicht
  mein Gegenstand). H-7 stützt sich allein auf
  `akquise/zitat-baseline-2026-08-17.md`. Ob `pruefe-zitate.js` die
  fraglichen Stellen prüft, ist von hier aus **nicht feststellbar**.
- **B-3 · Die Wächter-Delta-Zahl der Session (+12 NEU, Kontrollen 33/33,
  Gegenprobe 3/3) habe ich nicht reproduziert.** Sie steht ungeprüft.
- **B-4 · Ich habe keine Rechtsfrage entschieden.** Insbesondere zu
  S-2: Ich messe, dass Rn. 202/206/207 nicht von Verbrauchern sprechen —
  ob § 305c Abs. 1 BGB im B2B gilt, ist eine Rechtsfrage und gehört ins
  Mandat, nicht in diesen Bericht.
- **B-5 · Die vier Beschaffungskanäle habe ich nicht live nachgerufen.**
  Geprüft sind die **archivierten Abzüge** (Hash, Größe, Inhalt). Ob die
  Kanäle heute noch so antworten, ist nicht gemessen; ein Kanalbefund
  altert.
- **B-6 · Die vollständige L-51-/L-25-Liste über den Wahrheits-Kanal
  stammt aus zwei delegierten Läufen.** Selbst am Objekt nachgeprüft
  habe ich davon drei Stichproben (`projektquelle-mkt.md` Punkt (6),
  `wellenprotokoll-vorlage.md` § 10, `listenbau-regelwerk.md` § 6.1) —
  sie hielten alle drei. Die **übrigen** Zeilen von N-1, N-3 und N-4
  sind delegierte Fundstellen und von mir **nicht** einzeln verifiziert;
  sie tragen den Vermerk „delegiert" und sollten vor dem Einarbeiten
  nachgelesen werden.
- **B-7 · Die Arbeitstitel-Verneinung (M-3) habe ich repo-weit mit dem
  Wort `Arbeitstitel` und fünf Sachbegriffen geprüft**, nicht mit einer
  vollständigen Synonymliste. Dass sie sachlich („nirgends beantwortet")
  hält, ist damit **wahrscheinlich, nicht belegt** — belegt ist nur, dass
  der Suchraum der Session zu eng war und das Gegenwort im
  Wahrheits-Kanal steht.
- **B-8 · Die Nahtstellen-Prüfung (M-4) prüft Blockquotes**, nicht
  Listen-, Tabellen- oder Fußnoten-Fortsetzungen. Fünf der sieben
  Treffer meines Laufs sind False Positives (Listenmarker nach
  eingerücktem Zitat) — ich habe sie einzeln aufgelöst, aber die
  **Gegenrichtung** (Naht, die mein Muster nicht sieht) ist nicht
  gemessen.
- **B-9 · Ich habe keine Aussage zur Vollständigkeit der acht
  Aufnahmebefunde getroffen.** Geprüft ist Nr. 2 (Z. 696, „bei einem
  Dritten") am Rohbeleg; dass die übrigen sieben L-26-Selbstzitate sind,
  habe ich **nicht nachgemessen** — das setzt die Lektüre des Wächters
  voraus (B-2).

---

*Erstellt am 17.08.2026 als unabhängiger Prüferbericht zu `8fe60d8`.
Es wurde ausschließlich diese Datei geschrieben; nichts committet,
nichts gepusht.*
