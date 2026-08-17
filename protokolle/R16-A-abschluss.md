# R16-A — Abschlussmeldung (Ben Beckman, MKT-HANDEL)

**Token-Verbrauch: von der Session nicht erhebbar — Subagenten-Zahlen
soweit bekannt: keine (der Prüf-Subagent meldet keine Zahl zurück).**

**Runde:** R16 · **Session:** R16-A · **Datum:** 17.08.2026
**Prüfstand (Sessionbeginn):** `0c4692f`
**Zweiter Messstand vor dem Commit:** `686ff18`
**Bau-Commit:** `a495a0f` · **Nachtrag:** `8e5ea42` · **Reparatur nach Prüfer:** `ed9bbdf`

> ⚠️ **Der Arbeitsbaum ist während der Arbeit gewandert.** Zwischen der
> HEAD-Messung zu Sessionbeginn (`0c4692f`) und dem Commit hat die
> Parallel-Session R16-C committet; `a495a0f` sitzt deshalb auf
> `686ff18`. **Gemessen und für diesen Scope folgenlos:**
> `git diff --numstat 0c4692f 686ff18 -- <meine drei Dateien>` liefert
> eine **leere** Ausgabe — keine meiner Dateien war betroffen. Geändert
> wurden dort `CLAUDE.md`, `akquise/akquiseplan.md`,
> `beleg/baseline-messplan.md`, `geruest-nachzug-protokoll.md`,
> `protokolle/tagesplan-2026-08-17.md`.

---

## Block 1 — Gebaut und verifiziert

### 1.1 Teil 1 — sechs Rechtsposten in `handel/kanal-rechtsmatrix.md`

**6 von 6 Posten aus `projektquelle-mkt.md` § 6a eingearbeitet**
(Nenner: die sechs Zeilen der Tabelle „🔴 Rechtslage" mit Träger
MKT-HANDEL — R15A-N-1 bis N-5 plus die A7-Kernsatz-Neufassung; die
siebte Zeile R15E-N-4 gehört zu Teil 2, die achte R15B-N-3 hat den
Träger Zentrale und ist nicht meiner).

| # | Posten | Was gebaut wurde | Beleg |
|---|---|---|---|
| 1 | **A7-Kernsatz** (PB-1 aus R14-B, seit 13.08. nur *markiert*) | **Neu gefasst.** Vorfassung wörtlich im sichtbaren 🔧-Reparatur-Kasten. Die Neufassung bildet **nur den Aufbau des Urteils** ab — Tabelle mit drei Schritten: DSGVO-Verstoß (Rn. 84–88, 125) · Doppelbegründung (Rn. 136/137/147) · Irreführung (Rn. 88–120) | `a495a0f`, A7 |
| 2 | **§ 3a-Doppelbegründung** (R15A-N-2) | Teil B um **Rn. 136** („sowohl … als auch"), **Rn. 147** (§ 3 Abs. 2 UWG bejaht) und **Rn. 148** (Adressatengrenze im Tatbestand) ergänzt; Überschrift-Präzisierung, weil „über § 3a UWG" zu eng war | `a495a0f`, Teil B |
| 3 | **Rn. 111** (20 W 37/24) | **Neu — fehlte vollständig.** Eigener Kasten mit Wortlaut und Belegstufen-Tabelle; Eintrag „streitig" **in beide Richtungen** | `a495a0f`, A7 |
| 4 | **Rn. 115** (R15A-N-5) | **Neu — fehlte vollständig.** Mit Verschleierungs-Rahmen aus Rn. 114 | `a495a0f`, A7 |
| 5 | **R15A-N-1** (Rn. 79 konditional) | 🔧-Reparatur-Kasten; „weicht ab" bleibt sichtbar, die schärfere Fassung ist als solche ausgewiesen | `a495a0f`, A7 |
| 6 | **R15A-N-3** („kein Mitbewerber") | **Gestrichen** (nicht abgeschwächt), Reparatur-Kasten mit Zählweg | `a495a0f`, Teil B |

**Zusätzlich, ungefragt, weil im selben Zug fällig:**
- **Rn.-87-Bestandsvermerk (R15A-N-4)** in `handel/kanal-rechtsmatrix.md`
  (O-9-Kasten) **und** `akquise/interessenabwaegung-o8.md` (Q-04-Stelle
  — dort die **einzige** Änderung dieser Session, wie beauftragt).
- **Zwei benannte OFFEN-Posten des Bestands erfüllt** (s. Block 3,
  Pflichtfeld): die Rechtskraft-Präzisierung in A7 und der
  o8-Vorbehalt § 11.2 Nr. 3.

### 1.2 Teil 2 — `handel/anwalts-briefing-2026-08.md`

**Statusblock bleibt ENTWURF.** Vier Eingriffe:
1. **§ 2.1 nachgezogen** — der Abschnitt beschrieb den A7-Kernsatz noch
   als „nur markiert, Neufassung versagt". Nach Teil 1 falsch.
2. **§ 3.2 Teilfrage 1a NEU** (zweite Schiene § 3 Abs. 2 UWG im
   B2B-Fall) + Fundstellen **Rn. 136/147/148** in § 3.3. **Ohne sie
   hätte die Antwort auf Frage 3 nur die Hälfte der Doppelbegründung
   erfasst** — das ist der Befund aus Prüfkategorie 5, den ich an mir
   selbst gefunden habe.
3. **ID-Zeiger** an § 4a Kandidat A (`ANL-3` / `PS-1` / `R15E-N-4`).
   **Kein zweiter Eintrag** — die Frage stand vollständig drin.
4. 🔧 **Reparatur § 4a:** „ohne Personennamen **und ohne jede weitere
   Angabe**" war eine unzutreffende Bestandsaussage.
   `akquise/sperrdatei-struktur.md` § 3 führt für `ANL-3` **sieben**
   Felder (SP-02, SP-03, SP-05 bis SP-08, SP-10) und schließt nur SP-04
   und das Grund-Feld aus.

Dazu ein **Belegstufen-Hinweis in § 2.3**: Dass „das Oberlandesgericht"
in Rn. 111 das OLG Düsseldorf ist, ist **unsere Ableitung**, keine
Aussage des Urteils.

### 1.3 Messungen und Kontrollen

> ⚠️ **Geltungsstand dieser Tabelle und von 1.4: der Bau-Commit
> `a495a0f`.** Nach dem Prüferlauf sind Zahlen hinzugekommen und zwei
> haben sich geändert — **der Endstand steht unten unter
> „Prüfer-Disposition → Nach der Reparatur neu gemessen"** (`ed9bbdf`).
> Die Tabelle hier bleibt als Stand des geprüften Commits stehen, damit
> nachvollziehbar ist, was der Prüfer vorgefunden hat.

| Messung | Ergebnis | Zählweg / Kontrolle |
|---|---|---|
| **Randnummern-Extraktion** | 273 Absätze, **lückenlos 1–273**, 0 Dubletten | Generisch über das Strukturmerkmal `class="absatzRechts"` / `class="absatzLinks"` im amtlichen NRWE-HTML, nie selbst ausgezählt. **Zwei unabhängige Strukturmerkmale liefern dieselbe Zahl** (273 Roh-Marker je Seite = 273 Paare). Entity-Kontrolle: 0 unaufgelöste `&…;`; Zeichenklassen-Kontrolle `§` = 241, `ä` = 899 |
| **Unabhängige Bestätigung eines Fremdbefunds** | „21× § 3a UWG" (R14-B) **reproduziert** | `grep -o "§ 3a UWG"` über den eigenen Extrakt = 21 |
| **Neu gesetzte Zitate** | **17 von 17** auf **beiden** Achsen bestätigt | Eigenes Skript, **Wortlaut** und **behauptete Randnummer** getrennt geprüft; Ellipsen als Teilstück-Trenner. **Erstlauf 16/17** — s. Block 4 |
| **OLG-Düsseldorf-Zählung** | **5** Fundstellen in **4** Randnummern (43 · 45×2 · 46 · 47), **keine in Rn. 111** | `grep -oE "Oberlandesgericht[a-zä]* Düsseldorf"`. Positivkontrolle gleicher Mechanik: `Oberlandesgericht[a-zä]* Stuttgart` = 1 (Genitiv trifft) · Gegenkontrolle `Oberlandesgericht Köln` = 0 · Gegenrichtung `"dem Oberlandesgericht"` = 2 |
| **„kein Mitbewerber"** | **0** | Positivkontrolle `Mitbewerber[a-zä]*` = **8**; mit der Tippfehler-Nachbarform (`Mittbewerbern`, Rn. 129) = **9** |
| **Löschungszählung** | **23** gelöschte Zeilen, **0 stille Löschungen** | `git diff --numstat` gegen **beide** Nenner — `0c4692f` und `84ce2a6` liefern **identische** Zahlen (25/0 · 74/12 · 303/11). Jede gelöschte Zeile einzeln geprüft: Inhalt kehrt im Ersetzungstext oder im Reparatur-Kasten wieder. Die einzige **inhaltliche** Streichung ist „kein Mitbewerber" (bewusst, dokumentiert) |
| **Soft-Hyphen-Probe** | vorher **0**, nach den Edits **2** (beide von mir), entfernt → **0** | Vorher-Nenner am Stand `0c4692f` gezogen. Umlaut-Zählung vor/nach dem Entfernen **identisch (1592)** |
| **Zeilenenden** | unverändert | `git ls-files --eol` = i/lf w/lf vor **und** nach den Edits |

### 1.4 Zitat-Wächter — Delta je Datei

**Baseline vor den Edits** (Stand `0c4692f`, alte Werkzeugfassung):

| Datei | geprüft | bestätigt | nicht im Pool |
|---|---:|---:|---:|
| `handel/kanal-rechtsmatrix.md` | 168 | 24 | 144 |
| `akquise/interessenabwaegung-o8.md` | 143 | 30 | 113 |

**Nach den Edits** (neue Werkzeugfassung, s. Warnung unten):

| Datei | geprüft | bestätigt | Bestand (R15-Altlast) | **NEU** |
|---|---:|---:|---:|---:|
| `handel/kanal-rechtsmatrix.md` | 205 | 28 | 144 | **33** |
| `akquise/interessenabwaegung-o8.md` | 145 | 32 | 113 | **0** |

**Mein Delta ist damit: Rechtsmatrix +33 „neu/nicht im Pool", o8 ±0.**
Die R15-Altlast (144 bzw. 113) ist **unverändert** — ich habe keine
beseitigt und keine erzeugt.

> ⚠️ **Der Lauf ist gegen ein WANDERNDES Werkzeug gemessen.** Zwischen
> Baseline und Nachlauf hat die Parallel-Session R16-B
> `akquise/pruefe-zitate.js` umgebaut (Auftragsgemäß — ich habe die
> Datei nicht angefasst); die Ausgabe hat seither zusätzliche Spalten.
> **Beleg, dass der Umbau die ZÄHLUNG nicht verändert hat, nur die
> Ausgabe:** Die Arithmetik geht in beiden Dateien exakt auf —
> Rechtsmatrix 205 − 168 = **37** neu geprüfte Zitate, davon 33 als
> „neu" markiert und 4 zusätzlich bestätigt (24 → 28), **33 + 4 = 37**;
> o8 145 − 143 = **2**, beide bestätigt (30 → 32), 0 neu — und ich habe
> in o8 **genau zwei** Zitate ergänzt. Wäre die Zählmechanik verändert
> worden, müsste diese Rechnung an mindestens einer Stelle klemmen.
> Trotzdem: **es bleibt ein Zwei-Werkzeug-Vergleich**, kein
> Ein-Werkzeug-Delta. Wer eine harte Zahl braucht, lässt die neue
> Fassung einmal gegen `git show 0c4692f:<datei>` laufen.

**Exit 1 ist Dauerzustand** (863 Altzitate ohne Pool-Deckung) — das ist
der Gegenstand von R16-B, nicht von mir.

---

## Block 2 — Offen geblieben

1. **Der Beschluss OLG Düsseldorf 20 W 37/24 ist nicht beschafft.** Sein
   Inhalt ist nur über die Wiedergabe des LG bekannt (Belegstufe ③).
   Das ist in Rechtsmatrix und Briefing ausgewiesen, aber **nicht
   erledigt** — solange er ungelesen ist, kennen wir die Gegenauffassung
   des Berufungsgerichts nur aus der Feder desjenigen, der ihr
   widerspricht.
2. **Die B2B-Frage ist nicht beantwortet, sondern geschärft.** Aus einer
   Frage („trägt § 3a UWG ohne Verbraucherbezug?") sind zwei geworden.
   Das ist Absicht — beantworten kann sie nur der anwaltliche Rat.
3. **Die A7-Einstufung „ZULÄSSIG" habe ich nicht angefasst.** Sie beruht
   auf § 7 UWG und dem BGH-Leitsatz, nicht auf dem Düsseldorfer Urteil.
   Ob der Streitstand sie berührt, ist eine Rechtsbewertung.
4. **Die drei Entscheidungen der Vorlage unten sind ungetroffen** — sie
   gehören dem User, nicht dieser Session.
5. **Kein Versand, kein Postfach-Zugriff, keine Adressen** — Sperrliste
   des Auftrags eingehalten.

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

### ⭐ Pflichtfeld: Welchen benannten OFFEN-Posten erfüllt mein Ergebnis?

**Zwei — beide in `handel/kanal-rechtsmatrix.md` selbst benannt, beide
an ihrem Träger geschlossen:**

1. **Die Rechtskraft-Präzisierung in A7.** Teil B (Nachtrag R9A-N-14,
   Anstrich „Belegkraft des Belegs selbst") vermerkte wörtlich:
   *„Dieselbe Präzisierung ist in A7 fällig, wo bisher nur ‚Rechtskraft
   nicht geprüft' steht; sie ist als Posten für MKT-HANDEL vermerkt."*
   → **erfüllt**, mit dem Zusatz, dass ein Nulltreffer im Urteilstext
   die Rechtskraft ohnehin nicht klären könnte.
2. **Der o8-Vorbehalt § 11.2 Nr. 3** („Art. 21 Abs. 4 ist im Tenor nicht
   enthalten … wer ein ‚tenoriertes Art.-21-Verbot' zitiert, zitiert zu
   weit"), im A7-Kasten seit R14-B als „dort seit R9 unerledigt"
   geführt. → **erfüllt** durch die Kernsatz-Neufassung; der
   Reparatur-Kasten nennt ihn als zweiten Streichungsgrund.

**Kein weiterer Posten** des Kurz-Einstiegs oder der § 6a-Tabelle wird
durch mein Ergebnis nebenbei erfüllt.

### N-1 · Ableitungen und Nachziehen (L-25-Klasse)

`grep -rn "kanal-rechtsmatrix" --include="*.md"` (ohne die fremde
Arbeitskopie) — **wer zitiert den A7-Kernsatz oder die A7-Einstufung?**
Ich habe die Ankunftsstellen geprüft; ändern durfte ich nur meinen
Scope:

| Dokument | Ankunftsstelle | Stand nach `a495a0f` |
|---|---|---|
| `handel/anwalts-briefing-2026-08.md` | § 2.1 | **von mir nachgezogen** (in meinem Scope) |
| `akquise/interessenabwaegung-o8.md` § 6.2 / § 11.2 | LG-Düsseldorf-Stelle | ⚠️ **Zu prüfen durch MKT-HANDEL:** Ich durfte dort nur den Rn.-87-Vermerk setzen. Ob die dortige Darstellung des Urteils die Doppelbegründung kennt, habe ich **nicht** geprüft — außerhalb des erlaubten Eingriffs |
| `akquise/listenbau-regelwerk.md` § 7.1-Nachtrag | Rn.-87-Zitat | ⚠️ **Zu prüfen:** trägt den Rn.-87-Satz ohne den neuen Bestandsvermerk. Fremder Scope (R16-C/Leitsession) |
| `handel/preismodell-optionen.md` (Rn. 87) | Terminlage-Satz | ⚠️ **Zu prüfen:** stützt die Terminlage auf Rn. 87, ohne dass dort steht, dass der Satz nicht tragend ist |
| `STATUS.md` · `projektquelle-mkt.md` | mehrere Stellen | **Leitsession** — Wahrheits-Kanal, für mich gesperrt |

### N-2 · ⚠️ Eine Verneinung im Bestand ist im Wortsinn widerlegt

Der Briefing-Statusblock und `protokolle/R15-A-abschluss.md` sagen: **„Im
Repo ist keine Kanzlei benannt."** Gemessen (`grep -ro "Kanzlei [A-ZÄÖÜ]"`,
ohne die fremde Arbeitskopie) gibt es **genau einen** Kanzlei-Eigennamen
im Repo: **`fund/wettbewerbsbild.md`** führt „Kanzlei Jacobsen +
Confurius" als **Rechtsberatungs-Partner des DEHOGA Hamburg**.

**Sachlich bleibt die Aussage richtig** (keine für uns ausgewählte oder
mandatierte Kanzlei), **im Wortlaut ist sie es nicht.** Ich habe den
Statusblock nicht umgeschrieben, weil die Aussage dort ihren Zweck
erfüllt — aber die Fundstelle gehört in die Empfängerentscheidung (s.
Vorlage unten), und zwar in **beide** Richtungen: Branchennähe ist ein
Vorteil, die Mandatsbeziehung zu einem unserer geplanten Akquisekanäle
ein möglicher Interessenkonflikt.

### N-3 · Der Auftrag nannte einen Schlüssel, den es nicht gibt

Der Start-Prompt verlangt zu prüfen, „ob § 4a inhaltlich noch zum Stand
von `sperrdatei-struktur.md` **P-1** passt". Ein Posten `P-1` existiert
dort nicht; der gemeinte Posten heißt **`PS-1`** (§ 8). `grep -o "PS-1"`
= Treffer, `grep -o "\bP-1\b"` in derselben Datei = 0. Ich habe gegen
`PS-1` geprüft. **Kleiner Befund, aber genau die Klasse, die einen
Prompt ins Leere laufen lässt.**

### N-4 · `CLAUDE.md` hat sich während der Session geändert

`git diff --numstat 0c4692f 686ff18` zeigt **44 Einfügungen / 25
Löschungen** in `CLAUDE.md`. Mein Auto-Load-Stand ist der von
Sessionbeginn. Ich habe **nicht** geprüft, ob die Änderung eine Regel
berührt, nach der ich gearbeitet habe. **Träger: Leitsession** — für
Sessions, die nach `686ff18` gestartet sind, gilt der neue Stand.

### N-6 · Positivkontroll-Wechsel gehört in den Wahrheits-Kanal (Prüferbefund H-8)

`projektquelle-mkt.md` § 6a führt für **R15A-N-3** die Positivkontrolle
**„119"** (das ist „Kläger", aus `protokolle/R15-A-abschluss.md`). Ich
habe sie durch **`Mitbewerber[a-zä]*` = 8** ersetzt, weil sie die
**Suchmechanik des Nulltreffers** spiegelt — „Kläger" tut das nicht.
**Der Wechsel ist eine Verbesserung, steht aber nur in meinem Dokument.**
Im Wahrheits-Kanal steht weiter die schwächere Zahl. **Träger:
Leitsession** (L-25, Gegenrichtung: wer eine Ableitung schärft, zieht
die Quelle nach).

### N-7 · Acht Nacharbeits-Fundorte des Prüfers sind NICHT erledigt

Der Prüfer führt einen Abschnitt „Nicht erhoben / nicht prüfbar" mit
**acht benannten Fundorten**. Sie sind mit dieser Meldung **nicht**
abgearbeitet — sie sind eine Nacharbeits-Liste, kein
Haftungsausschluss (L-48). **Träger: Rundenschnitt der Leitsession.**
Fundstelle: `protokolle/R16-A-pruefer.md`, Abschnitt 3.

### N-8 · Zwölf Randnummern des Urteils sind im Bestand nie angekommen

Gemessen nach der Reparatur: Von den 77 Randnummern des Blocks 79–155
nennt die Rechtsmatrix **65**. **Nicht genannt: 121, 122, 123, 126,
138, 139, 140, 151, 152, 153, 154, 155** — darunter die
Anwendbarkeitsprüfung des § 3a UWG (138–140) und die Anwendung des
§ 3 Abs. 2 UWG auf den Fall (151 ff.). Im Dokument als
Nacharbeits-Liste benannt. **Träger: MKT-HANDEL, nächste Runde.**

### N-5 · Zitat-Wächter: Ausnahme-Kandidaten aus meiner Arbeit

`akquise/pruefe-zitate.js` gehört R16-B, ich habe es nicht angefasst.
Von meinen **33** neu gemeldeten Fundstellen sind diese **keine**
Urteilszitate, sondern eigene Formulierungen oder Selbstzitate — sie
gehören in die **Ausnahmeliste**, nicht in den Pool:

| Fundstelle (Zeile im Commit-Stand) | Art |
|---|---|
| Vorfassung des A7-Kernsatzes im 🔧-Reparatur-Kasten | **Selbstzitat der eigenen Vorfassung** — kann per Konstruktion nie im Pool stehen (L-26-Klasse) |
| „Rechtskraft nicht geprüft" | dito (zitierte Vorfassung) |
| „Datenherkunft je Adresse dokumentieren — Art. 14 Abs. 2 lit. f verlangt die Quellenangabe im Brief" · „Was das für unsere Zielkundenliste heißt" · „Belegkraft des Belegs selbst" | **Selbstzitate aus derselben Datei** — der Selbstausschluss `poolTextFuer` verhindert die Bestätigung |
| „das OLG Stuttgart liegt falsch" · „bei B2B greift keine der beiden Schienen" · „bei B2B greift § 3a erst recht" · „trägt § 3a UWG auch ohne Verbraucherbezug?" | **eigene Formulierungen**, bewusst als *gesperrte* Lesarten gesetzt |
| „… kann über § 3a UWG ODER über § 3 Abs. 2 UWG abgemahnt werden" | eigene Überschrift-Neufassung |
| „hätte sie angegeben …, hätte das den Eindruck zerstört" · „Rn. 115: Herkunftsangabe wird zum Irreführungsargument" | **eigene Paraphrasen** (die zweite ist die Kurzfassung aus § 6a, dort mit Klammer) |

Die **übrigen** sind echte Urteilszitate. Sie stehen nur deshalb als
„nicht im Pool", weil die Rohbelege git-ignoriert und daher nicht im
POOL des Wächters sind — **das ist ein Werkzeug-, kein Beleg-Befund**,
und es ist derselbe Grund wie bei den 144 Altzitaten.

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **⭐ Ein Muster über AUSZEICHNUNG ist eine Annahme über deren FORM —
   und der Fehler sah aus wie ein sauberes Ergebnis.** Mein erster
   Randnummern-Extraktor suchte `class="absatzLinks">…</span>`.
   Tatsächlich ist `absatzLinks` ein `<p>`, kein `<span>`. Ergebnis:
   **139 statt 273 Absätze — exakt jeder zweite**, weil das Muster bis
   zur nächsten Randnummer weiterlas. Ohne die Lückenprüfung („fehlende
   Rn. 1..max") hätte ich mit einem halben Urteil gearbeitet und es
   nicht gemerkt. **Die Kontrolle, die es fing, war die, deren Ergebnis
   eine erkennbare UNMÖGLICHKEIT liefern konnte** (jede zweite Nummer
   fehlt — das kann kein echter Befund sein).
2. **⭐ `grep -c` hat mir eine falsche Zahl in ein fertiges Dokument
   geschrieben.** Ich hatte „`Oberlandesgericht Düsseldorf` = 4
   Fundstellen" behauptet, gestützt auf einen früheren `grep -c`-Lauf
   (der **1** meldete — eine Zeile). Die Nachmessung mit
   `grep -o | wc -l` ergab **1**, mit der Flexionsform **5**. Die Zahl
   stand bereits im Dokument. **Gefangen hat sie nur die Regel, jede
   frisch geschriebene Zahl nachzumessen — nicht mein Gefühl**, denn
   die Rn.-Liste (43, 45, 46, 47) war ja richtig.
3. **⭐ Die Nachbarform kostete zweimal dieselbe Zahl.** Erst der
   Genitiv (`Oberlandesgerichts Düsseldorf`, 4 von 5 Fundstellen), dann
   der Tippfehler des Originals (`Mittbewerbern`, Rn. 129). Beide Male
   hätte die Zahl plausibel danebengelegen. **Wer eine Formfehler-Klasse
   findet, sucht die übrigen im selben Zug** — hier: Flexion und
   Schreibfehler sind dieselbe Klasse.
4. **⭐ Mein eigenes Zitat trug einen künstlichen Satzabschluss.** Ich
   setzte Rn. 79 als „… nicht gefolgt werden**:**". Der Doppelpunkt
   steht im Original erst nach einem Literaturbeleg in Klammern.
   **16/17 — genau die Falle (L-39), die ich in dieser Session
   reparieren sollte.** Der Zitatabgleich fing sie, mein Lesen nicht.
5. **⭐ Der Auftragstext beschrieb einen Befund in der falschen
   Richtung.** „Rn. 115 — Herkunftsangabe im Brief wird zum
   Irreführungsargument" liest sich, als sei die Angabe das Problem. Am
   Rohbeleg ist es **ihr Fehlen**. Wer das übernimmt, baut die Pflicht
   in die falsche Richtung. **Auch die Formulierung eines Befundes ist
   eine Annahme, bis sie am Rohbeleg steht.**
6. **⭐ Zwei unsichtbare Zeichen sind durch meine Edits ins Dokument
   gekommen** (Soft-Hyphen U+00AD, aus kopiertem Text). Vorher-Nenner am
   Rundenstart: **0**. Ohne die Probe wären sie geblieben und hätten
   jeden späteren Grep auf „Mittbewerbern" ins Leere laufen lassen.
7. **⭐ Der geteilte Arbeitsbaum wanderte zwischen HEAD-Messung und
   Commit.** Mein Prüfstand war `0c4692f`, mein Commit sitzt auf
   `686ff18`. Aufgefallen ist es **nur an der Push-Ausgabe**
   (`686ff18..a495a0f`), nicht an `git status` und nicht an
   `origin/main..HEAD`. **Der Doppel-Messstand-Vertrag ist genau dafür
   da** — und er muss nach dem Commit gegen den PARENT geprüft werden,
   nicht nur zu Beginn.
8. **⭐⭐ Ich habe die Fehlerklasse, die ich reparieren sollte, im
   selben Commit erneut begangen — und zwar EINEN Absatz unter ihrer
   korrekten Reparatur.** R15A-N-1 lautet: „weicht ab" ist schärfer als
   die konditionale Quelle. Ich habe das in einem Reparatur-Kasten
   sauber gefasst — und 90 Zeilen tiefer geschrieben, das LG „weicht
   ausdrücklich ab" von der ständigen Rechtsprechung des OLG, wo die
   Quelle „**verbleibt** die Kammer" sagt und die „ständige
   Rechtsprechung" als **Vortrag der Beklagten** führt. **Die frisch
   gelernte Regel schützt den Text, auf den man sie anwendet — nicht
   den, den man dabei schreibt.** Prüffrage für künftige
   Reparatur-Sessions: *Habe ich meine eigene Reparaturbegründung gegen
   dieselbe Regel gelesen?*
9. **⭐⭐ Mein Zitat-Wächter meldete 17/17 und sah keinen der beiden
   schweren Funde.** Beide standen im **Fließtext neben** korrekt
   zitierten Zitaten, unter einer Belegstufen-Tabelle, die es richtig
   machte. **L-27 am eigenen Objekt:** Ein Zitatabgleich prüft, was als
   Zitat markiert ist. „17/17 bestätigt" liest sich als Vollprüfung und
   ist eine Aussage über 17 markierte Stellen — mehr nicht. **Wer die
   Zahl schreibt, schreibt dazu, was das Werkzeug nicht prüft.**
10. **⭐ Der HTML-Abzug derselben Quelle trägt 1.359 geschützte
   Leerzeichen — und macht damit JEDE §-Positivkontrolle still
   wirkungslos.** Im `.txt` liefert `§ 3a UWG` 21 Treffer, im `.html`
   **0**; alle Buchstaben-Zahlen (DSGVO 109, Werbung 14, Verbraucher
   187/199) stimmen dagegen in beiden Abzügen überein. Ein Bestandssatz
   behauptete seit R14-B, beide Abzüge lieferten „dieselben Werte" —
   für Buchstaben stimmt das, für die Zeichenklasse `§` nicht. **Der
   Prüfer fand es, weil ich den Satzanfang desselben Absatzes
   angefasst und die Fußnote unverändert übernommen hatte (L-39).**
   Mein eigener Extrakt war nur deshalb korrekt, weil er NBSP
   normalisiert — ein Glücksfall, keine Absicht.
11. **⭐ Auch mein Kontroll-Zählweg hatte einen blinden Fleck.** Das
   Muster `Rn\.\s*(\d+)` zählte „Rn. 141/142" als bloße 141 und meldete
   13 statt 12 fehlende Randnummern. **Eine Abdeckungs-Messung ist
   selbst ein Werkzeug und braucht Positivkontrollen mit bekanntem
   Sollwert** — vier laufen jetzt mit.
12. **Die Klassifikator-Blockade traf die KETTE, nicht den Befehl.**
   `git push … | tail -5` in einer `&&`-Kette wurde blockiert; derselbe
   `git push` als Einzelbefehl lief sofort durch. **L-05-Nachtrag real
   reproduziert** — vor dem Melden einer Blockade in Einzelbefehle
   zerlegen.

### (ii) Bewährte Muster

1. **⭐ Randnummern generisch über das Strukturmerkmal extrahieren,
   nie auszählen — und den Extrakt SELBST prüfen.** Drei Kontrollen im
   selben Lauf: Lückenprüfung 1..max · Dublettenprüfung · zwei
   unabhängige Strukturmerkmale für dieselbe Zahl. Genau diese
   Kombination fing den Werkzeugfehler. Der Extrakt machte danach den
   ganzen Rn.-Block 74–152 am Stück lesbar — die Grundlage für alles
   Weitere.
2. **⭐ Zitate maschinell prüfen, aber auf ZWEI getrennten Achsen.**
   Wortlaut („steht der Text so im Urteil?") und Fundstelle („steht er
   in der behaupteten Randnummer?"). Der Kontrollfall „richtiger Satz,
   falsche Randnummer" fällt nur auf der zweiten Achse durch — das
   belegt, dass beide Achsen wirklich getrennt messen. **Eine
   gemeinsame Prüfung hätte die Fundstellendrift nicht gefunden.**
3. **⭐ Ein Fremdbefund, der sich unabhängig reproduziert, ist mehr
   wert als einer, den man übernimmt.** Die 21 Treffer „§ 3a UWG" aus
   R14-B fielen aus meinem eigenen Extrakt heraus, ohne dass ich danach
   gesucht hatte. Das ist ein stärkerer Beleg für den Extrakt **und**
   für den Altbefund als jede Übernahme.
4. **⭐ Beim Reparieren einer Entwarnung: streichen statt abschwächen.**
   „kein Mitbewerber" ist gestrichen, nicht zu „vermutlich kein
   Mitbewerber" abgeschwächt. Und im selben Zug kam die **Gegenrichtung**
   heraus, die wichtiger ist als der reparierte Satz: Mitbewerberinnen
   sind gegen dieselbe Beklagte sehr wohl vorgegangen (Rn. 44, 89, 124).
   **Die Reparatur einer Ableitung führte zum stärkeren Befund.**
5. **⭐ Die eigene Arbeit gegen die Prüffrage des Auftrags halten,
   bevor der Prüfer läuft.** „Welcher Satz würde die Antwort des
   Anwalts ändern, wenn er ihn läse?" — angewandt auf mein eigenes
   Teil-1-Ergebnis, ergab das Teilfrage 1a. Ohne sie hätte die
   Doppelbegründung in der Rechtsmatrix gestanden und im Briefing
   gefehlt: **beide Dokumente für sich korrekt, die Kette kaputt.**
6. **⭐ Zwei Nenner für die Löschungszählung sind auch eine
   Werkzeugkontrolle.** `0c4692f` und `84ce2a6` lieferten identische
   Zahlen — das belegt zugleich, dass zwischen beiden Ständen niemand
   meine Dateien angefasst hat. Ein Nenner hätte das nicht gezeigt.
7. **⭐ Einen Prüferbefund vor der Reparatur am ROHBELEG gegenprüfen —
   auch wenn er offensichtlich richtig aussieht.** Alle 18 hielten
   stand; das weiß man aber erst danach. Bei S-2 hat die Gegenprüfung
   die Reparatur zusätzlich **geschärft**: Der Prüfer nannte
   „verbleibt ≠ weicht ab"; beim Nachmessen fiel auf, dass die
   „ständige Rechtsprechung" im Original in Anführungszeichen als
   **Parteivortrag** steht — ein zweiter Fehler im selben Satz, den der
   Befund nicht ausdrücklich benannt hatte.
8. **⭐ Ein Werkzeug-Umbau unter laufender Messung lässt sich
   arithmetisch einhegen.** Baseline und Nachlauf liefen gegen zwei
   verschiedene Wächter-Fassungen. Statt das Delta zu behaupten, geht
   die Rechnung `37 = 33 + 4` in einer Datei und `2 = 0 + 2` in der
   anderen auf — und die zweite Zahl ist unabhängig überprüfbar, weil
   ich in o8 nachweislich genau zwei Zitate gesetzt habe.

---

# ⭐ ENTSCHEIDUNGSVORLAGE FÜR DEN USER

*(Klartext, ohne Kürzel. Drei Fragen — mit einer Antwort ist alles
entschieden. Danach kann das Briefing raus.)*

**Worum es geht:** Wir haben ein fertiges Briefing an einen Rechtsanwalt
mit vier Rechtsfragen, die den Start der Zielkundenliste sperren. Es ist
inhaltlich versandbereit. Drei Dinge fehlen — und alle drei sind
Entscheidungen, die niemand außer Dir treffen kann.

---

## Frage 1 — Der selbstkritische Satz: geht er mit raus?

**Der Sachverhalt:** Im Briefing steht offen, dass wir uns am 11.08.2026
entschieden haben, Adressen aus Impressen zu nutzen — **gegen die
Empfehlung unserer eigenen Vorprüfung** und in Kenntnis der
gegenläufigen Auffassung der Datenschutzbehörden.

**Warum das heikel ist:** Es ist der ehrlichste Satz des Dokuments und
zugleich der angreifbarste. Er geht an einen Anwalt, der zu diesem
Zeitpunkt **noch nicht mandatiert** ist — also ohne
Verschwiegenheitspflicht aus einem bestehenden Mandat.

**Drei Möglichkeiten:**

| | Option | Folge |
|---|---|---|
| **a** | **So lassen** | Der Anwalt kann die Lage vollständig beurteilen. Eine unserer vier Fragen (die Zweckänderung bei Impressumsdaten) ist ohne diese Angabe **gar nicht sinnvoll beantwortbar** — er wüsste nicht, dass wir bereits entschieden haben |
| **b** | **Erst nach Mandatserteilung nachreichen** | Maximaler Schutz. Preis: Der Anwalt bekommt zuerst ein unvollständiges Bild, und die erste Antwort könnte an der Sache vorbeigehen. Außerdem zwei Runden statt einer |
| **c** | **Neutraler fassen** („wir haben uns nach Abwägung für die Nutzung entschieden") | Klingt harmloser. **Aber:** Der Anwalt erfährt dann nicht, dass wir gegen die eigene Empfehlung gehandelt haben — genau das ist für die Risikobewertung erheblich. Wir würden ihn schlechter informieren, um besser dazustehen |

**Empfehlung — mit Vorbehalt:** **(a) so lassen.** Begründung: Wer
anwaltlichen Rat einholt, um ein Risiko zu bewerten, darf das Risiko
nicht verstecken; und die Fragestellung wird sonst unbeantwortbar.
**Der Vorbehalt:** Das ist eine Abwägung zwischen Beratungsqualität und
Offenlegung gegenüber einem noch nicht Mandatierten — **keine
Rechtsauskunft.** Ob die anwaltliche Verschwiegenheit schon in der
Anbahnung greift, haben wir **nicht geprüft**; das wäre selbst eine
Rechtsfrage.

☐ **a** so lassen ☐ **b** nachreichen ☐ **c** neutraler fassen

---

## Frage 2 — An welche Kanzlei geht es?

**Stand: offen. Wir haben keine.** Im ganzen Repository ist **keine
Kanzlei für uns ausgewählt oder beauftragt** — überall steht der
Platzhalter `[KANZLEI]`.

**Wie ich gesucht habe** (damit Du das Ergebnis einordnen kannst):
Volltextsuche über alle Textdateien des Projekts nach „Kanzlei",
„Rechtsanwalt", „Rechtsanwältin", „Fachanwalt". Ergebnis: 12 · 7 · 0 · 0
Fundstellen — **alle** davon sind Formulierungen wie „diese Unterlage
stammt nicht von einem Rechtsanwalt". Kontrollsuche im selben Lauf:
„Anwalt" = 112 Treffer (der Suchweg funktioniert), erfundener
Kontrollname = 0 Treffer (er meldet nichts Falsches).

**Ein einziger Kanzleiname steht überhaupt im Bestand** — und er gehört
nicht uns: Unser Wettbewerbs-Dossier notiert, dass der **DEHOGA Hamburg**
seine Rechtsberatung an die **Kanzlei Jacobsen + Confurius** auslagert.
**Ich schlage sie nicht vor** und ich erfinde keine Alternative. Ich
nenne sie, weil sie der einzige Fund ist und weil sie in **beide**
Richtungen zeigt: Branchennähe wäre ein Vorteil — eine Mandatsbeziehung
zu einem Verband, den unsere eigene Planung als Akquisekanal führt,
könnte ein Interessenkonflikt sein.

**Was der Empfänger können muss** (aus dem Inhalt der vier Fragen
abgeleitet, damit Du die Auswahl nicht raten musst):

1. **Wettbewerbsrecht (UWG)** — der Kern von zwei der vier Fragen.
2. **Datenschutzrecht (DSGVO)**, speziell die Interessenabwägung bei
   Werbung — nicht nur Datenschutz-Compliance allgemein.
3. **Beides zusammen.** Genau an der Nahtstelle liegen unsere Fragen:
   Ein Datenschutzverstoß, der über das Wettbewerbsrecht verfolgt wird.
   Eine Kanzlei, die nur eines der beiden Gebiete führt, kann die
   Hauptfrage nicht beantworten.
4. **Bereitschaft zur schriftlichen Einschätzung.** Wir übernehmen die
   Aussagen in Betriebsunterlagen und geben die Quelle an; ein Telefonat
   trägt das nicht.
5. **Nice-to-have:** Erfahrung mit der Hotellerie oder mit
   Software-Anbietern.
6. **Nicht erforderlich:** ein Sitz in Schleswig-Holstein oder Hamburg.
   *(Relevant wird der Sitz erst für die Frage, welche
   Aufsichtsbehörde zuständig ist — und das hängt an unserem Sitz, nicht
   an seinem.)*

**Was ich brauche:** Entweder einen Namen — oder die Auskunft, dass Du
suchst, dann warte ich.

☐ Kanzlei: ______________________  ☐ Ich suche noch  ☐ Andere Quelle
für Empfehlungen: ______________________

---

## Frage 3 — Unter welchem Namen schreiben wir?

**Der Sachverhalt:** Der Rebrand ist entschieden, **der neue Name steht
noch nicht fest**, und die Gesellschaft ist in Gründung. Im Briefing
steht überall der Platzhalter „Firmierung — offen". Ein Brief ohne
Absendernamen geht aber nicht raus.

**Drei Wege — jeder mit seinem Preis:**

| | Weg | Folge |
|---|---|---|
| **a** | **Warten, bis der Name steht** | Sauber, aber es kostet Zeit — und diese Zeit fehlt am kritischen Ende: Die Antworten sperren den **ersten Datensatz** der Zielkundenliste, nicht erst den Versand. Wir schieben damit den Listenbau, nicht nur einen Brief |
| **b** | **„Firma in Gründung, Name folgt"** | Ehrlich, üblich und für eine Mandatsanbahnung unproblematisch — ein Anwalt kennt Gründungsfälle. **Preis:** Es signalisiert einen frühen Stand. Und der Auftrag müsste später auf die endgültige Firma umgeschrieben werden |
| **c** | **Unter dem heutigen Namen** | Sofort möglich. **Preis:** Wir schreiben unter einem Namen, den wir ablegen — der Anwalt bezieht sein Mandat und seine Rechnung darauf, und beides muss später umgestellt werden. Und die Frage, wer eigentlich Verantwortlicher im Sinne des Datenschutzrechts ist, steht ohnehin im Briefing als offener Punkt |

**Empfehlung — mit Vorbehalt:** **(b)**, weil der Zeitverlust bei (a)
direkt auf den kritischen Pfad schlägt und (c) einen Namen nach außen
trägt, den wir gerade ablegen. **Der Vorbehalt:** Ob und wie eine
Gesellschaft in Gründung ein Mandat erteilen kann und wer dabei
persönlich haftet, ist **eine Rechtsfrage, die wir nicht geprüft
haben** — sie gehört zur Gründung, nicht zu diesem Briefing. Wenn Du (b)
oder (c) wählst, ist das der erste Punkt, den ich vor dem Versand noch
klären lassen würde.

☐ **a** warten ☐ **b** „in Gründung, Name folgt" ☐ **c** heutiger Name

---

### Was nach Deiner Antwort passiert

1. Der interne Statusblock wird aus dem Briefing entfernt (er ist nur
   für uns).
2. Platzhalter werden durch Deine Angaben ersetzt.
3. **Eine zusätzliche Frage bleibt Dir überlassen:** Das Briefing führt
   am Ende zwei **weitere** Punkte für dieselbe Beauftragung — ob ein im
   fremden Impressum gefundener Werbewiderspruch in unsere eigene
   Sperrliste darf, und ob ein Telefonanruf als Nachfass auf unseren
   eigenen Werbebrief zulässig ist. **Gehen die beiden mit?** Dafür
   spricht, dass ein zweiter Termin sonst unvermeidlich ist; dagegen,
   dass sie die vier Hauptfragen verwässern könnten. ☐ **ja, mitgeben**
   ☐ **nein, streichen**
4. **Den Versand machst Du** — ich lege nichts ins Postfach und
   verschicke nichts.

---

## Prüfer-Disposition

**Ein unabhängiger Prüfer mit frischem Kontext, gegen den eingefrorenen
Bau-Commit `a495a0f` (Arbeitsbaum-Diff nicht gesichtet, nur
Commit-Stände). Protokoll: `protokolle/R16-A-pruefer.md`,
Reparatur-Commit `ed9bbdf`.**

**Jeder Befund wurde vor der Reparatur am ROHBELEG selbst
gegengeprüft**, nicht aus dem Protokoll übernommen (L-42). **Ergebnis
dieser Gegenprüfung: alle 18 hielten stand** — keiner war zu
verwerfen. Das ist ungewöhnlich und spricht für die Qualität des Laufs;
in R14/R15 hielten 3 von 10 übertragenen Befunden nicht.

### Disposition mit Nenner

| Kategorie | Nenner | repariert | bewusst offen | fremder Träger |
|---|---:|---:|---:|---:|
| **SCHWER** | 2 | **2** | 0 | 0 |
| **MITTEL** | 7 | **7** | 0 | 0 |
| **HINWEIS** | 9 | **8** | 0 | **1** (H-8) |
| **Summe** | **18** | **17** | **0** | **1** |

**Der eine fremde Träger:** **H-8** — `projektquelle-mkt.md` § 6a führt
für R15A-N-3 die Positivkontrolle „119" (= „Kläger"); ich habe sie
durch `Mitbewerber[a-zä]*` = 8 ersetzt, weil sie die **Suchmechanik des
Nulltreffers** spiegelt. Der Wechsel ist eine Verbesserung, aber im
Wahrheits-Kanal steht weiter die schwächere Zahl. **Die Projektquelle
darf nur die Leitsession ändern** — hiermit gemeldet.

### Die beiden schweren Funde — und was sie über die Session sagen

Beide sitzen im **Schlussabsatz des von mir neu geschriebenen
Rn.-111-Kastens**, drei Absätze unter einer Belegstufen-Tabelle, die
dieselben Aussagen **richtig** trennt:

- **S-1:** „dessen Berufungsgericht **in derselben Sache erkennbar** zu
  einer anderen Beurteilung neigt". Am Rohbeleg widerlegt: Rn. 111
  verortet die Äußerung in einem **anderen Verfahren** (20 W 37/24 =
  LG Düsseldorf **38 O 17/22**), und die Quelle schreibt „mitgeteilt
  worden sein **soll**". Eigener Zählweg: `38 O 17/22` = 1, das hiesige
  `38 O 243/23` im Fließtext = 0.
- **S-2:** „dasselbe LG **weicht** … **ausdrücklich ab** (Rn. 43)".
  Rn. 43 lautet „**verbleibt** die Kammer auch in Ansehung der **von
  der Beklagten angeführten** ‚ständigen Rechtsprechung'". Zählweg:
  `verbleibt` = 1 (genau diese Stelle), `weicht` in Rn. 43 = 0.
  **Gestrichen, nicht abgeschwächt.**

⭐ **Das ist die unangenehmste Lehre dieser Runde, und sie gehört in den
Debrief:** S-2 ist **exakt die Fehlerklasse, die diese Session als
R15A-N-1 reparieren sollte** — „weicht ab" schärfer als die Quelle. Ich
habe sie 90 Zeilen weiter oben korrekt repariert und **im selben Commit
erneut begangen**. Der Unterschied: dort stand sie in einem Zitat, hier
im Fließtext daneben. **Eine frisch gelernte Regel schützt den Text,
auf den man sie anwendet — nicht den, den man dabei schreibt.**

### ⭐ Methodischer Kernsatz für den Debrief

**Mein Zitat-Wächter meldete 17/17 und hat KEINEN der beiden schweren
Funde gesehen.** Beide stehen im Fließtext neben korrekt zitierten
Zitaten. Das ist L-27 am eigenen Objekt: *Ein Zitatabgleich prüft, was
als Zitat MARKIERT ist — nicht den Satz daneben.* Meine
Belegstufen-Tabelle war fehlerfrei, meine 17 Zitate waren byte-treu,
und der Absatz darunter behauptete zwei Dinge, die die Quelle nicht
hergibt. **Wer ein solches Werkzeug einsetzt, schreibt ins Dokument,
was es NICHT prüft** — sonst liest sich „17/17 bestätigt" als
Vollprüfung. Genau das war hier der Fall.

### Prüfer-Lauf-Status (nicht zu „keine Auffälligkeit" geglättet)

Der Prüfer hat **5 von 5** Pflicht-Kategorien ausgeführt und führt
einen eigenen Abschnitt „Nicht erhoben / nicht prüfbar" mit **8
benannten Nacharbeits-Fundorten**. **Diese acht sind mit dieser
Meldung NICHT erledigt** — sie sind eine Liste, keine Grenze (L-48).
Sie stehen im Protokoll und gehören in den Rundenschnitt.

**Was der Prüfer ausdrücklich bestätigt hat** (Gegenrichtung):
Alle **16** nachgerechneten Sessionzahlen reproduzieren exakt, je mit
Positivkontrolle im selben Lauf · Löschungszählung 11/11 disponiert,
0 still verschwunden · 36 Tabellenblöcke, 0 zerteilt · 76/76
Überschriften identisch · **16 von 17** Zitaten auf beiden Achsen
einwandfrei (seine eigene Zählung; das 17. ist eines, das er anders
schnitt) · **6 von 6** MKT-HANDEL-Posten aus § 6a angefasst — „die
Mängel sitzen in der Ausführung, nicht in der Abdeckung".

**Auf seine zwei Pflichtfragen** antwortet er, die Funde wären ihm auch
ohne den Kategorien-Hinweis aufgefallen, und benennt als Verfälschung,
die sein Verfahren **nicht** gefangen hätte, eine sachlich falsche
Aussage ohne Zitatanker im Fließtext eines Dokuments, dessen Rohbeleg
er nicht hat.

### Nach der Reparatur neu gemessen

- **11 neue Zitate** der Reparaturrunde: **11/11** auf beiden Achsen.
- **Löschungszählung gegen den Rundenstart `0c4692f`: 12 Zeilen**, jede
  einzeln geprüft, alle kehren in einem Reparatur-Kasten wieder,
  **0 still verschwunden**. Gegen den eigenen Bau-Commit `a495a0f`:
  36 Löschungen, sämtlich eigene Zeilen.
- **Soft-Hyphen:** 0 / 0 / 0.
- **Abdeckung des Urteilsblocks 79–155:** **65 von 77** Randnummern
  genannt; die **12** fehlenden sind im Dokument als
  Nacharbeits-Liste benannt (121–123, 126, 138–140, 151–155).
  ⚠️ Der Zählweg dafür brauchte selbst eine Korrektur: Die Grundform
  `Rn. N` verschluckte die Kettenform `Rn. 141/142` und meldete 13
  statt 12. Vier Positivkontrollen mit bekanntem Sollwert laufen jetzt
  mit.
- **Zitat-Wächter, Endstand:** Rechtsmatrix 227 geprüft / 32 bestätigt
  / 144 Altlast / **51 neu**; o8 147 / 34 / 113 / **0 neu**. Die
  R15-Altlast ist unverändert.
