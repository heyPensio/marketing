# R14-B (Yasopp) — Abschlussmeldung: Rechtsmatrix-Pflege R9A-N-9…N-14 + FUND-Pflege R11A-N-3…N-6

**Token-Verbrauch: von der Session nicht erhebbar — Subagenten-Zahlen
soweit bekannt:** Prüfer **285.231 Tokens / 59 Tool-Aufrufe** (ein Lauf,
kein Abbruch). Das ist der einzige Subagent dieser Runde (kein Fan-out —
Bestandsarbeit). Für die Hauptsession existiert seit der
`/cost`-Abschaffung kein Messweg.

**Modell dieser Session:** ⚠️ **Nicht per Statuszeile belegt.** Die
Umgebungsangabe beim Session-Start nennt **Opus 5 (1M context)**
(`claude-opus-5[1m]`). Nach CLAUDE.md Regel 7 belegt nur die Statuszeile
oder `/cost` das tatsächliche Modell; die Selbstauskunft des Modells gilt
ausdrücklich nicht, und die Statuszeile kann eine Session über sich
selbst nicht auslesen. **Bestätigung durch den User steht aus.**

**Datum:** 13.08.2026 (Donnerstag) · **Auftrag:**
`protokolle/tagesplan-2026-08-13.md`, Abschnitt „Session-Prompts R14",
Strang R14-B.

---

## Block 1 — Gebaut und verifiziert

### Commits

| Hash | Inhalt |
|---|---|
| **`af9909f`** | Einarbeitung beider Pflege-Pakete + `protokolle/R14-B-protokoll.md`. Zugleich der **eingefrorene Prüfstand**. 587 Einfügungen / 6 Löschungen |
| **(dieser Commit)** | Disposition **aller 17** Prüferbefunde in beiden Dokumenten + Protokoll-Nachtrag § 9 + Prüferprotokoll + diese Meldung |

**Push-Lage:** `af9909f` ist auf `origin/main` — allerdings **nicht durch
meinen eigenen Push**. Zwei Versuche liefen in die
Sicherheits-Klassifikator-Blockade (Betriebszustand, nicht umgangen,
gemeldet), der dritte in ein `non-fast-forward`, weil R14-A inzwischen
darüber committet und gepusht hatte. **Mein Commit ist damit als
Vorfahre mitveröffentlicht worden** — Beleg nach frischem `git fetch`:
`git branch -r --contains af9909f` → `origin/main`, und
`git log origin/main..HEAD` ist leer. Das ist derselbe Fall wie in R13-B.

### Teil 1 — Rechtsmatrix: **6 von 6** Merker-Befunden disponiert

5 eingearbeitet, 1 als bereits erledigt vermerkt. Kein Befund ohne
Eintrag; der Merker-Kasten bleibt als Historie stehen und trägt darunter
je Zeile die Disposition.

| # | Disposition | Sachstelle |
|---|---|---|
| **N-9** | eingearbeitet — Empfänger-Angabe (Art. 14 Abs. 1 lit. e), Formulierung **aus dem O-8-Dokument übernommen** | **C4** |
| **N-10** | **erledigt durch R13-B**, bewusst **nicht gedoppelt** (Dubletten-Grundsatz); Vorbehalt „geführt ≠ entschieden" mitgeführt | Merker-Kasten |
| **N-11** | eingearbeitet — beide Absagegründe auf Stufe 1 (Rn. 84, Rn. 88), kein Abwägungstopos | **A7** |
| **N-12** | eingearbeitet — Gegenansicht OLG Stuttgart 2 U 63/22 + **beide** Eckhardt-Fundstellen, Abweichung Rn. 79–83; Eintrag ist **„streitig"**, Belegstufe ③ ausgewiesen | **A7** |
| **N-13** | eingearbeitet — Zählwege an beide Zahlen, selbst reproduziert | **A7** |
| **N-14** | eingearbeitet — § 3a UWG als dritte Schiene (Rn. 127–137); **Streitstand bleibt offen**, „nicht erhoben"-Zeile mit Vorwärtsverweis | **Teil B**, nach B1 |

### Teil 2 — Wettbewerbsbild: **4 von 4** eingearbeitet

**Und dabei drei Korrekturen an den Quell-Befunden — alle drei am
Rohbeleg gemessen, alle drei die unbequemere Fassung** (vom Prüfer
unabhängig bestätigt):

1. **Die „5 % Kommission" steht nicht in den Straiv-AGB.** Dort gibt es
   genau einen Prozentwert: „mindestens 99 %" (Verfügbarkeit, Ziff. 9.1).
   Die 5 % stehen auf der Upselling-**Produktseite** → Belegstufe auf
   Anbieter-Selbstauskunft/Werbeseite zurückgeführt.
2. **Der melevo-Anschriftenwiderspruch liegt innerhalb DERSELBEN Datei**
   (Verantwortlicher „Römerweg 9" ↔ Kontaktabschnitt „Hauptstraße 6"),
   nicht „Datenschutz vs. Footer".
3. **⭐ „Ob die Zusatzposten neu sind: nicht feststellbar" ist
   widerlegt.** Es existiert ein Abzug derselben Preisseite vom
   **09.08.2026** — dem Erhebungstag des Papiers —, den die
   Quell-Session nicht gesehen hat; alle fünf Posten stehen dort schon
   mit identischen Beträgen. **Sie sind nicht neu, sondern bei der
   Erst-Auswertung liegengeblieben.**

Dazu die Vorwärtsverweis-Pflicht: Kopf und Teil-B-Kopf sagten „Teil A
inhaltlich unverändert" — meine Nachträge stehen in Teil A; beide Stellen
sind nachgezogen, dazu ein Eintrag im Änderungsprotokoll § 8.

### Prüferbefunde — kategorienweise MIT NENNER

Prüfer: unabhängiger Subagent, frischer Kontext, eingefrorener Stand
`af9909f`, Schreibrecht nur auf `protokolle/R14-B-pruefer.md`,
Arbeitsbaum-Diff ausdrücklich nicht gesichtet.
**17 Befunde: 1 SCHWER · 8 MITTEL · 8 HINWEIS.**

> **17 von 17 disponiert — 16 repariert, 1 mit benanntem Träger
> weitergereicht (PB-7 Nr. 4 → MKT-HANDEL), 0 stillschweigend offen.**
> Jede Reparatur steht als sichtbarer Kasten im Dokument; **jeder
> tragende Befund wurde vor der Reparatur selbst am Rohbeleg
> nachgemessen**, nicht am Prüferwort. Einzelnachweis:
> `protokolle/R14-B-protokoll.md` § 9.

| Kategorie | Anzahl | Disposition |
|---|---|---|
| **SCHWER** | 1 von 1 | **PB-1** — Der A7-Kernsatz „gestützt **ausschließlich** auf … DSGVO" wird vom N-14-Nachtrag **desselben Commits** widerlegt (Rn. 137 bejaht § 3a UWG; eigene Messung: „UWG" 148 Treffer, „§ 3a UWG" 21, bei „§ 7 UWG" = 0). **Repariert** durch einen Nachtragskasten an der Ankunftsstelle. ⚠️ **Wie der Satz richtig zu fassen ist, entscheidet diese Session NICHT** — das wäre eine Rechts-Bewertung (harte Grenze b). Träger: MKT-HANDEL |
| **MITTEL** | 8 von 8 | **8 repariert**, davon PB-7 geteilt (Nr. 3 eingearbeitet, Nr. 4 weitergereicht). Kern: PB-2 Rn.-88-Zitat vervollständigt · **PB-3 Entwarnung GESTRICHEN statt abgeschwächt** · PB-4 Positivkontrolle auf den case-sensitiven Wert korrigiert · PB-5 Wächter-Reichweite ehrlich ausgewiesen · PB-6 Nebenbefund-Inventar von 2 auf 6 erweitert · PB-8 Instanz/Rechtskraft ergänzt · PB-9 unbelegte Ableitung zurückgenommen |
| **HINWEIS** | 8 von 8 | **8 repariert:** PB-10 Teilwort-Treffer + zwei ungemessene Posten nachgemessen · PB-11 Datums-Widerspruch aufgelöst · PB-12 Zitat-Setzung ausgewiesen · PB-13 eigener Klammerzusatz entfernt · **PB-14 Vorrangklausel eingezogen** · PB-15 AGB 7.7 ergänzt · PB-16 leere Netto-Aussage präzisiert · PB-17 Rn. 130 eingefügt |

**Die drei teuersten Befunde und was sie gemeinsam haben:** PB-1, PB-2
und PB-3 liegen alle am **Übergang vom Zitat zur Folgerung** — nicht in
den Zitaten selbst (die waren 16/16 byte-genau). Zweimal wirkte der
Fehler zugunsten der bequemeren Lesart: „kein § 7 UWG" wurde zu „kein
UWG", und ein Gleichlauf-Satz machte aus einem Streitstand eine
Entwarnung.

### Was der Prüfer ausdrücklich bestätigt hat

- **Zitat- und Fundstellenachse ohne Beanstandung:** 16/16 wörtliche
  Zitate byte-genau, 9/9 Rn.-Zuordnungen korrekt (am Extraktionsformat
  geprüft — die Randnummer steht **vor** ihrem Absatz).
- **Alle vier N-13-Zählungen reproduziert**, über zwei Dateiformen, mit
  Summenprobe über 16 Wortformen = 199 ohne Rest. Die Merker-Korrektur
  („109 ist **nicht** case-abhängig") ist bestätigt — **der Merker N-13
  lag falsch**.
- **Alle drei eigenen Korrekturen am Quell-Befund am Rohbeleg
  bestätigt.**
- **Löschungszählung 338/6 exakt**, alle 6 Zeilen einzeln, **keine
  Überschrift konsumiert, keine Folgezeile zerteilt** (Nahtstellen
  gelesen). Eigene Gegenprobe: Überschriften-Bestand 75→76 (der eine
  neue N-14-Unterabschnitt) bzw. 88→88.
- **O-9 nicht gedoppelt**; Konsequenz-Probe Achse 1 9/9 Muster exakt,
  Achse 2 6/6 Stichproben exakt; Pflegestand-Liste vollständig
  (gegen `git log` geprüft).

### LAUF-STATUS des Prüfers — offene Prüfschritte einzeln, nicht geglättet

Kein Session-Limit, Protokoll vollständig. **Vier ausgewiesene Grenzen:**

1. **Die Wächter-BASELINE (361.183 Zeichen) konnte er NICHT
   reproduzieren** — sie liegt vor den Edits und ist aus dem
   eingefrorenen Stand nicht rekonstruierbar, ohne den (verbotenen)
   Arbeitsbaum anzufassen. **Nicht geprüft, keine Entwarnung.** Sie
   bleibt eine Selbstauskunft meines Protokolls; belastbar ist, dass der
   Nachher-Lauf in jeder Zeile reproduziert.
2. **Der Selbsttest-Modus** (`--selbsttest`) wurde nicht gefahren.
3. **`akquise/listenbau-regelwerk.md`** nur über den Wächter-Lauf
   berührt, nicht gelesen.
4. **Achse 2 der Konsequenz-Probe: 6 von 11 Mustern** nachgezählt
   (Stichprobe); die unveränderten Teile beider Dokumente **nicht
   systematisch** gegengelesen — PB-1 stammt aus der unmittelbaren
   Umgebung, weiter außen wurde nicht gesucht.

**Nicht prüfbar (eigene Kategorie, nicht zu „unauffällig" geglättet):**
der **Inhalt** aller Sekundärquellen (EuGH C-621/22, C-21/23, C-319/20,
OLG Stuttgart 2 U 63/22, Eckhardt ZD 2024, 399 und ZD 2025, 443, die
BGH-Urteile aus Rn. 128). Geprüft ist nur ihre Wiedergabe im
LG-Volltext. Belegstufe ③ ist gesetzt; ob die Fundstellen inhaltlich
zutreffen, ist mit dem vorhandenen Bestand nicht feststellbar.

---

## Block 2 — Offen geblieben

| # | Punkt | Träger |
|---|---|---|
| **A7-Kernsatz** | **Wie „gestützt ausschließlich auf … DSGVO" richtig zu fassen ist** (PB-1). Der Satz ist als überholungsbedürftig markiert und bleibt sichtbar; die Neufassung ist eine Rechts-Bewertung und war dieser Session untersagt. Dazu gehört O-8 § 11.2 Nr. 3 (Art. 21 Abs. 4 nicht im Tenor), im selben Kasten dokumentiert | **MKT-HANDEL**, zusammen mit dem O-9-Rechtsrat |
| **PB-7 Nr. 4** | **Rechtsmatrix C2 zu EuGH Rn. 56** — die Zuspitzung „ausdrücklich als Negativfaktor" trägt laut O-8 nur teilweise. Nicht eingearbeitet: Bewertung nötig | **MKT-HANDEL** |
| **O-9** | **Kompatibilitätsprüfung Art. 6 Abs. 4 DSGVO** — unverändert **OFFEN**, Gate anwaltlicher Rat **vor dem ersten Datensatz**. Geführt heißt nicht entschieden | MKT-HANDEL / anwaltlicher Rat |
| **Streitstand § 3a UWG** | Bleibt „**nicht abschließend erhoben**" — insbesondere die **UGPRL-Grenze für B2B** und die **Kostenfolge** (§ 13 Abs. 4 Nr. 2 UWG bei einem über § 3a verfolgten DSGVO-Verstoß) sind offen | MKT-HANDEL / anwaltlicher Rat |
| **melevo 10-€-Posten** | **laufend oder einmalig?** Die Quelle bezeichnet es nicht; die Textextraktion trägt die Zuordnung nicht (PB-9). Zu klären, bevor jemand mit den Werten rechnet | MKT-FUND |
| **Straiv-Preishöhen** | Weiterhin **nicht belegt** — die „aktuell gültige Paketübersicht" ist nicht öffentlich und wurde nicht beschafft (wäre eine Außenhandlung) | MKT-FUND / MKT-HANDEL |
| **Wächter-Reichweite** | `fund/wettbewerbsbild.md` steht in **keiner** Wächter-Liste, die Rechtsmatrix nur im POOL — ob beide als ZIEL aufgenommen werden, ist eine Werkzeug-Entscheidung | **MKT-AKQ / Leitsession** |

**Nicht angefasst (auftragsgemäß):** `akquise/interessenabwaegung-o8.md`
und `akquise/listenbau-regelwerk.md` (nur gelesen) · die drei
`handel/`-Preisdokumente (R14-A) · `akquise/pruefe-zitate.js` und die
Ausnahmeliste (**kein Eingriff nötig — 0 neue Meldungen**) ·
Projektquelle, STATUS.md, CLAUDE.md, Skills/Commands. Kein eigener
Debrief, keine Außenhandlung, keine Web-Recherche, kein neuer
Rohbeleg-Ordner.

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

### An MKT-AKQ (`akquise/interessenabwaegung-o8.md`) — **sechs** Stellen sind durch diese Runde überholt

Alle im fremden Scope, deshalb gemeldet statt geändert. Vollständig
erhoben am Quellkapitel § 11.2 („Abweichungen und Ergänzungen gegenüber
der Kanal-Rechtsmatrix", **acht** nummerierte Punkte):

| # | O-8-Stelle | Aussage | Status |
|---|---|---|---|
| **R14B-N-1** | § 6.2 | „Gegenansicht, die in der Rechtsmatrix **fehlt**" | überholt |
| **R14B-N-2** | § 7.1 (Q-05-Kasten) | „die Lücke ist aus C4 **geerbt**" | überholt |
| **R14B-N-3** | § 11.2 Nr. 1 | „lässt aber offen, dass beide Absagegründe auf Stufe 1 liegen" | überholt |
| **R14B-N-4** | § 11.2 Nr. 2 | „In der Rechtsmatrix ist diese Gegenansicht nicht vermerkt" | überholt |
| **R14B-N-5** | § 11.2 Nr. 5 | „Zwei Zahlen ohne Zählweg" | überholt |
| **R14B-N-6** | § 11.2 Nr. 8 | „in der Rechtsmatrix **nachzuziehen**" | erledigt |

> ⚠️ **R14B-N-7 — ein Sachfehler, den erst die Messung dieser Runde
> erzeugt hat:** § 11.2 Nr. 5 sagt „**109 ist case-sensitiv**". Gemessen
> (und vom Prüfer unabhängig reproduziert) ist die Zahl **nicht
> case-abhängig**. Das Dokument trägt damit eine **widerlegte** Aussage.
> Zielort existiert ✔.

> ⚠️ **R14B-N-8 — Zirkel in den Quellenangaben:** O-8 leitet seine
> Art.-14-Liste ab mit „Mindestumfang im Brief **nach Rechtsmatrix C4**",
> während der neue C4-Kasten sagt, die Formulierung sei **von dort**
> übernommen. Jede Datei nennt die andere als Quelle. In der Rechtsmatrix
> ist deshalb eine **Vorrangklausel** eingezogen (bei Widerspruch gewinnt
> O-8); die Auflösung des Zirkels gehört ins O-8-Dokument.

### An die Leitsession / MKT-AKQ (Werkzeug)

> **R14B-N-9:** Der Zitat-Wächter `akquise/pruefe-zitate.js` prüft als
> `ZIEL` nur `akquise/akquiseplan.md` und `akquise/listenbau-regelwerk.md`.
> **`fund/wettbewerbsbild.md` steht in keiner der beiden Listen**, die
> Rechtsmatrix nur im `POOL` (also als Quelle, nicht als Prüfgegenstand).
> Ein grüner Lauf sagt über neu gesetzte Zitate **in** diesen beiden
> Dokumenten nichts. Beide tragen inzwischen erhebliche Zitatmengen.

### An MKT-FUND

> **R14B-N-10:** Der R11-A-Rohbeleg-Ordner enthält **acht** ungenutzte
> melevo-Seiten mehr als der Vorher-Ordner (19 vs. 8 Dateien) — beim
> Vergleich zweier Erhebungsstände ist der **ältere Ordner** die
> systematisch übersehene Quelle. Der Fund, der N-6 gekippt hat, lag
> dort seit dem 09.08.

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **⭐ „Kein X" ist nicht „kein Y" — ein präzises Negativ wird zur
   falschen Verallgemeinerung.** Der schwerste Befund der Runde (PB-1):
   Die gemessene Zahl „§ 7 UWG = 0" ist richtig, und aus ihr wurde
   „gestützt **ausschließlich** auf die DSGVO". Dasselbe Urteil enthält
   148 UWG-Treffer und bejaht § 3a UWG ausdrücklich. **Die Session hat
   genau diesen Satz angefasst** (der Zählweg-Nachtrag N-13 sitzt darin)
   und die Reichweitenaussage daneben nicht gegen den eigenen neuen
   Teil-B-Text gelesen. Merksatz: **Wer eine Stelle anfasst, liest den
   ganzen Satz gegen den eigenen neuen Bestand.**
2. **⭐ Eine Positivkontrolle muss die SUCHMECHANIK des Negativs
   spiegeln — sonst beglaubigt sie nichts.** „§ 7 UWG = 0" war
   case-sensitiv gemessen, die Kontrolle „Werbung = 35" case-insensitiv
   (case-sensitiv: 14). Die Kontrolle sah stark aus und lief über einen
   **anderen Kanal** als das Negativ. Die Regel stand wörtlich in
   CLAUDE.md — sie greift trotzdem nur, wenn man beim Schreiben prüft,
   mit welchem Schalter man gemessen hat.
3. **⭐ Ein Zitat, das am Satzpunkt endet, kann sein Gegenteil
   verbergen.** Das Rn.-88-Zitat war byte-genau und endete unmittelbar
   vor dem Satz, der die Absage **lauterkeitsrechtlich** begründet — also
   vor dem Gegenbeleg zur eigenen „ausschließlich"-Aussage. Ein
   regulärer, unauffälliger Schnitt. Der Prüfer fand ihn nur, weil er
   die Randnummern-Blöcke **am Stück** las statt gezielt auf die
   zitierten Sätze zu greppen: **ein Grep auf ein Zitat bestätigt das
   Zitat und verbirgt seinen Kontext.**
4. **⭐ Der Schlusssatz eines sonst vorbehaltstreuen Kastens ist der
   gefährlichste.** „An unseren Bau-Pflichten ändert der Streitstand
   nichts" fühlte sich wie eine Betriebsfolge an, war aber eine
   Entwarnung, eine neue Rechtsbewertung **und** durch die eigene
   Tabellenzeile drei Zeilen darüber widerlegt. Reparatur nach L-17:
   **gestrichen, nicht abgeschwächt.**
5. **⭐ Eine nicht-rekursive Suche erzeugt ein sauber aussehendes
   Negativ.** `ls */*melevo*` fand nichts im R05-A-Ordner, weil dessen
   Abzüge eine Ebene tiefer liegen (`a3/`). Daraus wäre „kein
   Vorher-Abzug vorhanden" geworden — eine Bestandsaussage, die eine
   ganze Befund-Einschränkung getragen hätte. `find -iname` fand acht
   Dateien. **Die Falle steht wörtlich im windows-powershell-Baustein**
   („eine NICHT-REKURSIVE Auflistung verliert genau die Datei im
   Unterverzeichnis") — und ist trotzdem passiert.
6. **⭐ Ein grüner Wächter beantwortet nur die halbe Frage.** Exit 0,
   Delta nur die Poolgröße — und **kein einziges** der ~20 neu gesetzten
   Zitate war überhaupt im Prüfgegenstand: `fund/wettbewerbsbild.md`
   steht in keiner Liste, die Rechtsmatrix nur im POOL. Die eigene Regel
   lautet „welchen Text liest er — und welchen NICHT?"; das Protokoll
   hatte nur die erste Hälfte beantwortet und daraus eine Entwarnung
   gebaut.
7. **Ein Umkehrschluss aus einer Abwesenheit ist keine Quellenaussage.**
   Die 10-€-Posten wurden als „laufend" ausgewiesen, weil ihnen das
   Einmalig-Sternchen fehlt. Bei einem Preisbefund ist genau diese Achse
   entscheidungsrelevant (10 €/Monat ≠ 10 € einmalig) — und die
   ausgewiesene Grenze daneben betraf eine **andere** Achse
   (Paketspalten), deckte diese also nicht ab.
8. **Teilwort-Treffer schlagen dort zu, wo man sie gerade selbst
   ausgewiesen hat.** „7 Wertproben je 1 Treffer" stimmte für „950"
   nicht (Teilwort in „1.950") — im selben Dokument, in dem die
   Teilwort-Aufschlüsselung für „Verbraucher" vorbildlich steht.

### (ii) Bewährte Muster

1. **⭐ Den Quell-Befund am Rohbeleg gegenprüfen, statt ihn zu
   übertragen.** Der Auftrag lautete „belegte Befunde übertragen" — drei
   von zehn hielten der Messung nicht stand (5 %-Zuordnung,
   Anschriften-Lage, „nicht feststellbar"). Alle drei Korrekturen waren
   die **unbequemere** Fassung. Ein Abschlussprotokoll ist eine Quelle
   zweiter Hand, auch wenn es aus dem eigenen Haus stammt.
2. **⭐ Beim Vergleich zweier Stände zuerst fragen, ob ein
   Vorher-Stand existiert.** Der Fund, der N-6 kippte, lag seit dem
   09.08. im Rohbelege-Ordner **einer früheren Runde**. Die
   Quell-Session hatte mit ihrem eigenen Abzug gearbeitet — der
   systematisch übersehene Ort beim Neu/Alt-Vergleich ist der ÄLTERE
   Ordner.
3. **⭐ Baseline VOR den Edits ziehen (L-26-Schärfung) — sie macht das
   Nachher-Delta zuordenbar.** Der Vergleich lieferte „genau eine
   geänderte Zeile", und die Poolgrößen-Änderung belegte zugleich, dass
   der Wächter die **neue** Fassung gelesen hatte. Ohne Baseline wäre
   „Exit 0" nur eine Zahl gewesen. *(Zur Ehrlichkeit gehört: Der Prüfer
   konnte die Baseline nicht reproduzieren — sie bleibt meine
   Selbstauskunft.)*
4. **⭐ Vorwärtsverweise beim Auslöser setzen, nicht beim Debrief.**
   Zwei Kopf-Aussagen („Teil A inhaltlich unverändert") wären still
   falsch geworden. Gefunden hat sie ein `grep` auf die eigene
   Behauptung, nicht auf das Thema. Dieselbe Klasse traf mich dann
   selbst an einer Stelle, an der ich sie **nicht** angewendet habe
   (PB-1) — die Regel greift nur, wo man sie ausführt.
5. **⭐ Den Prüfer mit Pflicht-Kategorien UND den zwei Selbstfragen
   beauftragen.** Seine Antwort auf „Hättest du das auch ohne die
   Kategorien gefunden?" war ehrlich: der schwerste Fund (PB-1) und die
   drei Prüfraum-Funde hingen an den Hinweisen; etwa die Hälfte war
   verfahrensrobust. Ohne die Prüfraum-Regel („ein Quellverweis nennt,
   wo du anfängst") wäre nicht aufgefallen, dass das Quellkapitel
   **acht** statt sechs Befunde trägt.
6. **Reparaturen sichtbar machen — es zahlt sich sofort aus.** Jede der
   16 Reparaturen trägt einen Kasten „hier stand X, das war falsch,
   weil…". Genau daran ließ sich die Löschungszählung führen: 26
   Löschungen nach dem Prüflauf, **alle** als Ersetzung mit sichtbarer
   Vorfassung erklärbar.

---

*R14-B, Session Yasopp. Kein eigener Debrief — die Einarbeitung in den
Wahrheits-Kanal macht die Leitsession.*
