# Lehren-Register — Marketingabteilung

> **Zweck (Kern/Beleg-Trennung):** CLAUDE.md trägt je Regel den
> HANDLUNGSKERN + einen Anker hierher; die Herleitungs- und
> Fallgeschichten (mit Runden-, Commit- und Zitat-Belegen) stehen VERBATIM
> in diesem Register. Es wird GEZIELT gelesen (grep auf `L-NN`), nie
> auto-geladen. **Pflege:** `/debrief` schreibt neue Herleitungen und
> Zweitbelege HIERHER (neue L-Nummer oder datierter Nachtrag am
> Eintragsende — Einträge werden nie umgeschrieben) und in CLAUDE.md nur
> den Regelkern + Anker. Beleg-Typen und Rundenbezüge aus der Quelle
> übernehmen (Verdichtungs-Regel).
>
> Die Methodik-Grundregeln der CLAUDE.md stammen aus dem
> projektgerüst-Blueprint (Herkunftsvermerke „heyPensio R<n>" dort); ihre
> vollen Herleitungen liegen im heyPensio-Repo
> (`blueprint/lehren-register.md`) und werden hier nicht dupliziert.
> Dieses Register beginnt leer und trägt die Lehren DIESES Projekts.

---

## L-01 — Als wörtlich gesetzte Zitate tragen ihren Anker an der ROHQUELLE (MKT R1, 09.08.2026)

**Fall:** FUND1-Entwurf zitierte die User-Rüge zur Fassung 5→6 als
„heyPensio zu flach dargestellt" — mit Anführungszeichen, aber mit den
Extraktionsberichten als einziger Referenz; die tragen nur „viel zu
flach" (A/A2) bzw. „zu flach" (B/F4.1). Für den unabhängigen Prüfer war
das ein Pseudo-Zitat (Befund 2), obwohl die Formulierung in der
Rohquelle tatsächlich stand — ohne präzisen Rohquellen-Anker ist das
nicht unterscheidbar. Gefahr: Das Pseudo-Zitat wird als Kanon
weiterzitiert. Kosten: 1 Prüfbefund + Nacharbeit.
Quelle: `protokolle/R01-A-pruefer.md` Befund 2,
`protokolle/R01-A-abschluss.md` Fallen (i).

## L-02 — Eigene Verifikations-Aussagen tragen Belegstufen-Pflicht (MKT R1, 09.08.2026)

**Fall:** R01-A schrieb „byte-gleich gegengelesen" über den
Fassung-6-Kanon — eine Lese-Gegenprobe belegt aber nur Wortlaut-, nie
Byte-Ebene (Apostroph-Falle, heyPensio C/B3). Die Verifikations-AUSSAGE
war damit selbst eine überschießende Behauptung derselben Klasse, die
sie ausschließen sollte. Korrektur: „auf Wortlaut-Ebene gegengelesen;
Skript-Byte-Vergleich steht aus" (Papier § 2/§ 7.8).
Quelle: `protokolle/R01-A-abschluss.md` Fallen (i).

## L-03 — Eine Liste mit Quellenangabe erhebt stillen Vollständigkeits-Anspruch (MKT R1, 09.08.2026)

**Fall:** FUND1 § 6 nannte „Quelle A/A11" und ließ vier A11-Positionen
weg (Gastprofil-Merge, Rezeptions-Tablet, Pre-Stay, Lost&Found) — wer
die Quellenangabe liest, versteht die Liste als Abbildung und die
Lücken als Nichtexistenz. Pikant: Gerade zwei der fehlenden Module
stützten die eigene Portfolio-These. Regel: vollständig abbilden ODER
das Auswahlkriterium nennen (Prüfer-Befund 3; eingearbeitet inkl.
Vollständigkeits-Vermerk zum offenen „u. a." der Quelle).
Quelle: `protokolle/R01-A-pruefer.md` Befund 3 + Kategorie 2.

## L-04 — Befangenheits-Symmetrie: „Welchen Vermerk trüge diese Quelle, wäre sie ein Fremder?" (MKT R1, 09.08.2026)

**Fall:** Der FUND2-Plan kennzeichnete Apaleo- und
Store-Anbieter-Auskünfte sauber als interessierte Selbstauskünfte —
beim eigenen Kronzeugen (Pilot-Betreiber: künftig bezahlter Berater
UND Cousin, A/A7) fehlte jeder Vermerk. Der Befangenheits-Maßstab wird
systematisch nur nach außen angelegt. Betrifft auch MKT-BELEG
(Case-Study-O-Töne desselben Zeugen → Offenlegungsfrage).
Quelle: `protokolle/R01-A-pruefer.md` Befund 4.

## L-05 — Klassifikator-Blockaden: Ketten zerlegen; Negativ ist zeitpunkt-/kontextgebunden (MKT R1, 09.08.2026)

**Fall 1 (Leitsession):** Bei der Remote-Anlage wurden
Credential-Script, `git remote add` und `git push` blockiert — später
in DERSELBEN Session lief `git push` normal durch. Ein
Blockade-Negativ misst den Moment/Kontext, keinen Dauerzustand.
**Fall 2 (R01-A):** Eine VERKETTETE Befehlszeile wurde blockiert,
deren Einzelbefehle (pull/log) erlaubt waren — vor dem Melden einmal
zerlegen. Quelle: Session-Verlauf Leitsession R1;
`protokolle/R01-A-abschluss.md` Nebenbefund 5.

## L-06 — Verfahrens-Positivkontrolle: User VOR dem Einbau im Chat vorwarnen (MKT R1, 09.08.2026)

**Fall:** Der User sah die beauftragte, bewusst verfälschte
Terminal-Kernaussage mid-turn im Arbeitsbaum und hielt sie für einen
echten Fehler. Vorwarnung gehört in den CHAT (nie in die Datei — das
würde den Prüfer kontaminieren). Träger: tagesstart-Command,
Abschnitt Verfahrens-Positivkontrolle (nachgezogen 09.08.2026).
Quelle: `protokolle/R01-A-abschluss.md` Fallen (i) + Verifikationen.

## L-07 — Kalender-Etiketten und Prüf-Prämissen: nie aus dem Kopf, und Prämissen sind Prüfgegenstand (MKT R2, 09.08.2026)

**Fall:** R02-A vergab Wochentags-Etiketten aus dem Kopf („Sa 09.08." —
der 09.08.2026 ist ein Sonntag) und gab die falsche Prämisse an den
Prüfer weiter, der sie regelkonform als Prämisse übernahm. Die Etiketten
waren teils richtig, teils falsch (24.08./21.09. stimmten,
16.08./22.09. u. a. nicht) — plausibel gemischt, dadurch schwer
auffällig. Gefangen wurde der Fehler NUR durch den Pflichtteil „Grenzen
des eigenen Verfahrens", in dem der Prüfer die bürgerliche Kalenderlage
gegen die Prämisse hielt. Zwei Kerne: (1) Kalender-Etiketten per
`Get-Date`, nie aus dem Kopf (CLAUDE.md Doku-Hygiene); (2)
Tatsachen-Prämissen im Prüfauftrag sind selbst Prüfgegenstand —
belegen oder als Annahme kennzeichnen (tagesstart, Prüfer-Muster).
Quelle: `protokolle/R02-A-abschluss.md` Block 3/4,
`R02-A-pruefer.md` G-1 + Grenzen Punkt 6.

## L-08 — Verfahrens-Positivkontrolle: Diff-Sichtung explizit verbieten (MKT R2, 09.08.2026)

**Fall:** Der R02-A-Prüfer entschied SELBST, den Arbeitsbaum-Diff nicht
zu sichten („die Prüfung sollte inhaltlich tragen, nicht forensisch")
und fing die Verfälschung über vier Quellen; der R02-B-Prüfer ZOG den
Diff (sah dadurch die Änderungsstelle) und widerlegte sie dann
inhaltlich an der Quelle. Beide fingen die Kontrolle — aber nur die
erste Variante misst das Inhalts-Verfahren. Ohne explizite Anweisung
ist es Zufall, welche Variante läuft. Kern: Der Prüfauftrag weist das
Diff-Sichtungs-Verbot ausdrücklich an (tagesstart, Positivkontrolle).
Quelle: `protokolle/R02-A-pruefer.md` Kopf + Grenzen 7,
`R02-B-pruefer.md` Kopf.

## L-09 — Quellen-Widerspruch: die these-stützende AUSWAHL ist verdächtig; ein „fraglich"-Vermerk ohne Klärungsauftrag verhindert nichts (MKT R3, 09.08.2026)

**Fall:** Das Juli-Wettbewerbs-Dossier hatte BEIDE Straiv-Zahlen („HTR
18 Mitarbeiter" und Store-Klasse „50+") und wählte die kleinere — die
die eigene These „Straiv ist verwundbar" stützte —, mit dem ehrlichen
Vermerk „damit fraglich". Der Vermerk dokumentierte die Fehlwahl,
verhinderte sie aber nicht: Der Satz „mit 18 Leuten … verwundbar"
wanderte bis ins verabschiedete Positionierungspapier § 4. R03-D
widerlegte die Zahl dreifach (LinkedIn 63, Store „50+", Fachbeitrag
07/2025 „von 43 auf rund 65"). Kern: Bei Quellen-Widerspruch richtet
sich der Verdacht gegen die eigene AUSWAHL, nicht gegen die unbequeme
Quelle; jeder „fraglich"-Vermerk braucht einen Klärungsauftrag (wer
löst auf, bis wann), sonst ist er ein Durchwink-Stempel.
Quelle: `protokolle/R03-D-abschluss.md` Falle F5 + Befund 2.

## L-10 — Eine Aktualisierung erbt den ZUSCHNITT der Vorgängerarbeit (MKT R3, 09.08.2026)

**Fall:** Der FUND3-Auftrag lautete „Wettbewerbsbild AKTUALISIEREN";
die Session erbte den Segment-Zuschnitt des Juli-Dossiers
(Apaleo-Store-Technik) ungeprüft und baute ein Papier, das sich wie
DAS Wettbewerbsbild las, obwohl es nur „Wer baut dieselbe Technik?"
misst — die Beratungs-/Agentur-Achse des real breiteren Portfolios
fehlte komplett. Vom User gefangen; Fix: Geltungsgrenze § 0.0 im
Werkstück + offene Portfolio-Klärung (N1). Kern: Bei jedem
Aktualisierungs-Auftrag zuerst „Stimmt der AUSSCHNITT noch?", dann
„Stimmen die Werte noch?" — und die geerbte Geltungsgrenze sichtbar
ins Dokument. Auch der Leitsession-Prompt hatte den Zuschnitt als
gegeben behandelt (Ist-Stand-Prüfung fand den Vorbestand, prüfte aber
nicht dessen Prämisse).
Quelle: `protokolle/R03-D-abschluss.md` Falle F6 + Nebenbefund N1;
`fund/wettbewerbsbild.md` § 0.0.

## L-11 — Die Positivkontrolle muss die GLIEDERUNG prüfen, nicht nur die Nutzlast (MKT R6, 10.08.2026)

**Fall:** R06-A zählte den Brandnamic-Partnerkreis mit einem Zähllauf,
der nach einer **vorher notierten Liste von sechs Kategorienamen**
suchte — und fand genau sechs. Die siebte Rubrik „Institutionelle
Partner" (2 Einträge) wurde still zur sechsten addiert. Die
mitgeführte Positivkontrolle war formal korrekt und griff trotzdem
nicht: Sie prüfte, ob die vier GESUCHTEN Anbieter in der Extraktion
erscheinen — also die **Nutzlast**, nicht die **Vollzähligkeit der
Gliederung**, in der die Nutzlast steht. Die Einträge-Summe (78) war in
beiden Läufen richtig, nur ihre Verteilung nicht; die Sachantwort auf
P15 blieb unverändert, aber der Satz „so ist der Partnerkreis
gegliedert" war falsch. **Das ist die ZWEITE Reproduktion derselben
Fehlerklasse in demselben Papier** — die erste war die
Apaleo-Kategorienzahl 7→9 (R05-A, B8.4). Damit ist auch die Regel
„eine frisch geschriebene Regel wird rückwirkend gegen den BESTAND
geprüft" belegt verletzt worden: Der R05-A-Fang hätte auslösen müssen,
im selben Papier nach weiteren Kategorienlisten zu suchen — genau dort
lag die nächste. Kern: Bei gegliederten Quellen gehört die Zahl der
Überschriften selbst in die Kontrolle, und die Extraktion holt die
Gliederung **generisch über das Strukturmerkmal** (CSS-Klasse,
Überschriften-Ebene), nie über eine notierte Namensliste — eine
Suchliste, die nur Bekanntes kennt, ist eine Positivliste in
Verkleidung (Schwesterformulierung der Verbotslisten-Regel unter
„Anwesenheit ist nicht Wirksamkeit").
Quelle: `protokolle/R06-A-pruefer.md` K-1, `R06-A-abschluss.md`
Fallen (i) 1; `fund/wettbewerbsbild.md` B10.1.

## L-12 — Wo eine Aussage in der AUSZEICHNUNG steckt, prüft eine Textprüfung sie nicht (MKT R6, 10.08.2026)

**Fall:** Zweimal im selben Lauf. (1) Die vier iiQ-Check-Tarifpakete
sehen im entmarkupten Text **identisch** aus — die
Ja/Nein-Unterscheidung der Leistungsmatrix steckt allein in
`class="yes"`/`"no"`. (2) Die Mitgliederzahl von PrivateCityHotels
(`<span class="hotel-count">42</span> Hotels`) ging beim Entmarkupen
verloren; daraufhin schrieb die Session das **falsche Negativ** „keine
Mitgliederzahlen außer den beiden zitierten" — und nannte im selben
Satz nur eine. Der Prüfer fand die Zahl am Rohbeleg. Kern: Bei
Matrix-/Vergleichs- und Zahlenseiten das **Roh-HTML mitarchivieren**
und die Extraktion daran gegenlesen; ein Negativ aus entmarkuptem Text
ist nur so gut wie das, was das Entmarkupen überlebt hat.
*Nachtrag Leitsession-Review (10.08.):* Dieselbe Quelle trägt eine
zweite Ebene derselben Klasse — im entmarkupten Text steht die Phrase
**zeilengetrennt** („42" / „Hotels in" / „18" / „Städten"), sodass
auch der reparierte Phrasen-Grep sie nicht findet; erst der
Zeilen-Kontext (`sed -n`) zeigt sie. Und die Zählprobe an derselben
Stelle ergab: Beide veröffentlichten Städtelisten der Quelle führen
**17** Namen gegen die Selbstauskunft „18" — Diskrepanz in der Quelle,
in B11.2(d) ausgewiesen (22 Kandidatenstädte negativ geprüft,
einziger Treffer „Zug" = Teilwort „Zugriff").
Quelle: `protokolle/R06-A-pruefer.md` W-8 + K-20-Umfeld,
`R06-A-abschluss.md` Fallen (i) 2; Leitsession-Review-Commit
`dea722e`.

## L-13 — Prüferbefunde unterhalb der Reparatur-Schwelle versickern; der Review prüft die DISPOSITION aller Befunde mit Nenner (MKT R6, 10.08.2026)

**Fall:** Der Bestandsscan zu L-11 (Pflichtschritt „eine frisch
geschriebene Regel wird rückwirkend gegen den Bestand geprüft") fand,
dass der Befund **H-1** des R05-A-Prüfers — „~70 Partner in sechs
Kategorien" ist falsch, es sind 78 in sieben, mit vollständiger
Aufschlüsselung und Rohbeleg-Pfad — in R5 **nicht eingearbeitet**
wurde. Eine Runde später hat R06-A denselben Sachverhalt an derselben
Rohdatei **unabhängig neu entdeckt** (dort als KRITISCH K-1
eingestuft); das R06-A-Prüfprotokoll enthält null Verweise auf das
R05-A-Protokoll. Kosten: ein vollständiger Prüf- und Reparaturzyklus
für einen bereits bezahlten Befund — und der unreparierte Satz in B4.3
war ausweislich des R06-A-Protokolls sogar der AUSLÖSER der
Neuentdeckung.

Die anschließende Vollprüfung (Verifikations-Subagent, drei Stichproben
von der Leitsession selbst nachgelesen) ergab das Ausmaß: Von **37
handlungspflichtigen Befunden** (4 KRITISCH · 17 WICHTIG · 10 HINWEIS)
sind **24 nicht eingearbeitet** — alle 4 KRITISCH und 7 der 17 WICHTIG
wurden repariert, **10 WICHTIG und 10 von 10 HINWEIS blieben liegen**.
Vier Fehlerklassen haben sich dadurch in R6 wiederholt (Pseudo-Zitat,
fehlender Vorwärtsverweis, unvollständige Extraktion, Nenner ohne
Kriterium) — jeweils an einer neuen Stelle, während der alte Fall
unrepariert im selben Dokument stand.

**Der eigentliche Mechanismus** steht in der Abschlussmeldung: R05-A
§ 5 ist bei den KRITISCH-Befunden korrekt und beim „bewusst nicht
repariert" ehrlich — führt dort aber nur „10 HINWEISE, 3 Verdacht, 6
nicht prüfbar" auf. **Die 10 offenen WICHTIG-Befunde erscheinen in
KEINER der beiden Listen**; ein Zwischenabschnitt zählt fünf übernommene
auf, ohne Nenner. Für den Leser (auch für die reviewende Leitsession)
sieht die Kategorie damit abgearbeitet aus. Das ist derselbe
Nenner-Verlust, den derselbe Prüfer im Papier zweimal gerügt hatte
(W-3, W-13) — nur eine Ebene höher, in der Meldung ÜBER die Prüfung.
Und es ist die Fehlerklassen-Frage der CLAUDE-Regel „Nach jeder
geschlossenen Fehlerklasse fragen, wie dieselbe Klasse eine Ebene höher
aussieht", hier praktisch beantwortet.

**Kern (zwei Teile):** (1) Eine Abschlussmeldung, die Prüferbefunde
meldet, führt sie **kategorienweise mit Nenner** — „x von y repariert,
z bewusst offen, Träger für den Rest" —, nie nur die reparierten plus
eine Auswahl. (2) Der Leitsession-Review nach innen prüft nicht die
Reparatur der SCHWEREN Befunde, sondern die **Disposition ALLER**:
Jeder Befund ist repariert, ausdrücklich verworfen (mit Grund) oder hat
einen benannten Träger — dokumentiert im Debrief-Report. „Hinweis" ist
eine Schwere-Angabe, keine Erledigungs-Kategorie.
Quelle: `protokolle/R06-nacharbeit-R05A-befunde.md` (Vollliste + eigene
Stichproben), `protokolle/R05-A-pruefer.md` § 4 H-1,
`protokolle/R06-A-pruefer.md` K-1, `fund/wettbewerbsbild.md` B4.3/B10.1.

## Zweitbelege R6 zu bestehenden Regeln (10.08.2026, Sammelvermerk)

*(Quelle aller Punkte: `protokolle/R06-A-abschluss.md` Block 4,
`protokolle/R06-A-pruefer.md`, Session-Verlauf Leitsession R6. Neue
Regeln der Runde stehen als L-11/L-12 oben sowie als CLAUDE-Schärfungen
(Gliederungs-Positivkontrolle · Fußnoten-Vermischung) und in den
Bausteinen `quellen-beschaffung` (Auszeichnungs-Falle · Web-Such-
Negative 6–7 · institutionelle Quellen) bzw. `windows-powershell`
(CWD-Teilung).)*

- **L-01 (Pseudo-Zitat), Verschmelzungs-Facette (Falle 4):** Das
  flexipass-„Zitat" („Wallet Keys, Webkeys and Mobile Keys in a single
  platform") war aus ZWEI Sätzen gefügt, mit veränderter Reihenfolge
  und Schreibweise. Neue Facette zu L-01: Nicht nur der fehlende
  Rohquellen-Anker macht ein Pseudo-Zitat — auch das Zusammenziehen
  zweier echter Sätze; für den Prüfer ist beides von einer Erfindung
  ununterscheidbar. Repariert auf den Originalsatz.
- **L-03 (stiller Vollständigkeits-Anspruch), Nenner-Facette
  (Falle 5, Prüferfang W-7):** „In drei von vier geprüften Fällen" —
  PrivateCityHotels war geprüft, hatte aber keinen Trägerbefund und
  fiel deshalb **still aus dem Nenner**, ohne dass das Auswahlkriterium
  genannt wurde. Ein leeres Tabellenfeld ist schwerer zu sehen als ein
  falsches. Repariert: Nenner ausgeschrieben (fünf betrachtet, vier mit
  Quelle, PCH als Nicht-Fund benannt).
- **Verdichten-Familie, Zweitbeleg im selben Fall:** Derselbe Satz
  verlor beim Verdichten in § 7 und ins Änderungsprotokoll zusätzlich
  seinen Vorbehalt („Verbünde werden von Wettbewerbern geführt" statt
  „im geprüften Ausschnitt"). Bestätigt die Beobachtung des Prüfers,
  dass das Änderungsprotokoll die kürzeste — und damit gefährlichste —
  Fassung im Dokument ist.
- **Bestandsscan-Regel („eine frisch geschriebene Regel schützt nur
  künftigen Code"), Zweitbeleg (Falle 6):** Die neue Vergabelinie
  **L-B8 (Geografie)** wurde eingeführt, ohne zu fragen, welche
  Bestandseinträge sie kippt. Nachgeholt: genau ein Kandidat
  (Roommatik/ES), Einstufung bleibt, Begründung dokumentiert — aber das
  musste geprüft, nicht vermutet werden. Facette zur R4-Vergabelinien-
  Regel: Die Bestandsprüfung gehört in DENSELBEN Zug wie die Linie.
- **Vorwärtsverweis-Konvention, Nachbar-Achsen-Facette (Falle 7):**
  flexipass ist ein Technik-Wettbewerber und trifft USP-Säule 4 — die
  Erhebung lief aber im Beratungsteil (Teil B), und Teil A § 5.4 („von
  zwei Seiten getroffen") wäre unverändert stehen geblieben. In einem
  ZWEITEILIGEN Papier gehört zu jedem Fund die Frage: In welchen
  ANDEREN Teil gehört das? (Repariert, Prüferbefund.)
- **Bewährt (M-1):** Die Redirect-Gegenprobe VOR den Befunden — vier
  Kontrollabrufe auf einen Unsinnspfad kosteten Sekunden und machen
  jedes spätere „steht dort nicht" belastbar. In den Baustein als
  „gehört an den ANFANG des Laufs" übernommen. Ehrliche Belegstufe
  dabei: archiviert sind die Antwortkörper, nicht die HTTP-Statuszeilen
  — als „nicht prüfbar" ausgewiesen statt geglättet.
- **Bewährt (M-2, Zweitbeleg zur R5-Regel):** Die Quelldatei von oben
  lesen, bevor man einen Widerspruch meldet — die IHA-Beitragsstaffel
  („5–10 Hotels") gegen die Definition („mindestens zehn") sah nach
  Quellenfehler aus; vier Zeilen weiter oben löst die Datei es selbst
  auf (die Staffel zählt Verbandsmitglieder, nicht
  Kooperationsmitglieder).
- **Bewährt (M-3, Facette zur „zweiter Durchgang mit umgekehrter
  Frage"-Regel):** Ein Fund aus Strang A trägt Strang B — die
  AKZENT-Spur (und damit der wertvollste Fund des Laufs, der
  Goslar-Cluster) kam nicht aus der P19-Suche, sondern aus einem
  **Testimonial in der P15-Referenzliste** von iiQ-Check. Beim Lesen
  einer Quelle lohnt der Blick auf das, wonach niemand gefragt hat —
  auch strangübergreifend.
- **Bewährt (M-4/M-5):** Summenproben bei allen zusammengesetzten
  Zahlen (drei AKZENT-Spalten à sieben Posten, alle gehen auf) ·
  Prüfer-Befunde vor der Reparatur SELBST am Rohbeleg nachgemessen —
  alle 21 bestätigten sich, aber erst die eigene Messung machte die
  URSACHE (hartcodierte Kategorienliste) sichtbar, und die Ursache ist
  der eigentliche Lehren-Kandidat (Regel a, erneut).
- **Bewährt (M-6):** Der Prüfer mit frischem Kontext UND Rohbeleg-
  Pfaden lieferte 21 Befunde, davon zwei, die sonst in andere Stränge
  weitergewandert wären (Steuerbasis → MKT-HANDEL-Preisarbeit;
  Städte-Querbefund → B4.5). Der Unterschied zum Selbst-Nachlesen: Er
  kannte den Fragenkatalog nicht und hat die **Gliederung**
  nachgezählt, nicht den Treffer.
- **(c)-Ablagen (bewusst ohne eigene Regel):** Der Firmierungs-
  Widerspruch bei flexipass (vier Rechtsträger-Varianten auf EINER
  `/terms`-Seite) ist Sach-Info im Papier und ein Anwendungsfall der
  bestehenden Regel „Firmierung nur per Registerauszug" · die
  Kanalbewertung P15/P19 bleibt auftragsgemäß bei MKT-AKQ · die
  Selbstauskunft-Kennzeichnung lief regelkonform, kein Regelbedarf.

## Zweitbelege R5 zu bestehenden Regeln (09.08.2026, Sammelvermerk)

*(Quelle aller Punkte: `protokolle/R05-A-abschluss.md` Block 4 + § 5,
`protokolle/R05-A-pruefer.md`. Neue Regeln der Runde stehen nicht hier,
sondern als CLAUDE-Schärfungen (Extraktions-Positivkontrolle F-9 ·
Widerspruch-erst-nach-Datei-von-oben F-10) und im Baustein
`quellen-beschaffung` (Web-Such-Negative-Block F-1/F-3/F-4/F-6/F-7)
bzw. `windows-powershell` (F-5 `-c`+`-o`).)*

- **Zahlen-Scope-Regel, Zweitbeleg (F-2):** 2.265,76 € brutto
  (Agenturangebot AG269) gegen 2.265,96 € netto (Creone KeyBox über
  masunt) — 20 Cent Differenz, verschiedene Steuerbasis, verschiedene
  Geschäfte; jede Verwechslung hätte plausibel ausgesehen.
- **L-05, VIERTER Beleg (F-8):** Klassifikator-Blockade beim `git push`
  erneut; wie dokumentiert im Bash-Kanal gangbar. Kanal-, nicht
  sachgebunden — Regel unverändert.
- **L-04-Familie, Doppelmaßstab-Facette (F-11, Prüferfang):** Smart
  Hosts „399 €/M" ohne Bezugsgröße gerügt, drei Abschnitte später die
  DEHOGA-Eigenanteile selbst ohne Einheit „je Beratungstag"
  geschrieben. Der Doppelmaßstab fällt im eigenen Text nie auf — dafür
  ist der Prüfer da.
- **Bewährt (M-1):** Fundstellen-Nachprüfung zum Beleg-Typ-Anheben
  SELBST machen, nicht delegieren — ein Agent hätte „agentengelesen"
  nur reproduziert; zwei echte Befunde bei sechs Kernaussagen.
- **Bewährt (M-2, Facette zur R4-Vergabelinien-Regel):** Linien VOR den
  Einstufungen ausschreiben — erst das Ausformulieren von L-B1 zeigte,
  dass die Rohform jede DACH-Agentur zum Wettbewerber gemacht hätte;
  die Prüfer-Reparatur (L-B7) war nur möglich, weil die Linien
  explizit dastanden.
- **Bewährt (M-3):** „Raster nicht anwendbar" als eigene Kategorie
  (Everlast) + Zusatzkategorie „—" für „keine Überschneidung am
  HEUTIGEN Portfolio" — hält den Fall offen, den eine
  Portfolio-Erweiterung kippen kann.
- **Bewährt (M-4):** Recherche-Aufträge ohne Kandidatennamen
  (Ausschlussliste statt Suchauftrag) — die wertvollsten Funde (SUM,
  work@hotel, Bräu, anfang.team, DEHOGA BW) waren vorher unbekannt.
- **Bewährt (M-5, Facette zu „Befund und Diagnose getrennt"):** Einen
  Anbieter TIEF prüfen (Brandnamic, 476 Seiten Vollsuchraum): Die
  Alt-BEGRÜNDUNG hielt der Nachmessung stand, ihre SCHLUSSFOLGERUNG
  („keine Überschneidung") nicht — Befund und Schlussfolgerung einer
  Alt-Einstufung sind getrennt zu prüfen.
- **Bewährt (M-6/M-7):** Negative Feldbefunde als konkreteste
  Kanalhinweise (kein Apaleo-Beraterverzeichnis, keine
  DEHOGA-HH-Digitalpartner) · Deutung offenlassen, wo die Daten sie
  nicht tragen (Größenschwellen: „freies Feld" und „trägt sich nicht"
  gleichrangig).

## Zweitbelege R4 zu bestehenden Regeln (09.08.2026, Sammelvermerk)

- **⭐ Verdichten-Familie, Meta-Aussagen-Facette (R04-A Falle 1,
  Prüfer-Fang):** Ein selbst formuliertes AUSWAHLKRITERIUM ist eine
  prüfbare Behauptung — die Erstfassung („sechs punktgleiche 18er",
  „einziger A5-Vertreter", „höchste W3-Dichte") war an der EIGENEN
  Tabelle dreifach widerlegbar. Superlative und Zählungen über die
  eigene Auswahl vor dem Hinschreiben an der Tabelle nachzählen, nie
  aus der Erinnerung an sie.
- **Status-Symbol-Regel (R04-A Falle 2):** „K6 ✅" trotz offenem
  EN-Muttersprachler-Teil — ⚠️→✅-Verdichtung trotz bekannter
  Kernregel; neue Facette: Der Teil-/Voll-Status gehört in die
  SPALTENÜBERSCHRIFT/Symbolzeile selbst, nicht in eine Fußnote
  daneben.
- **Vergabelinien-Drift (R04-A Falle 3 → CLAUDE-Schärfung + Gerüst
  `54439b9`):** Gleiche Sachlage (f/v-, c/k-Ambiguität) bekam
  ungleiche W2-Punkte, solange die Linie nur im Kopf existierte;
  materiell an der Shortlist-Grenze (Σ≥19). Erst das Ausformulieren
  fand den vierten Fall (Tektum). Bestandsscan nach der neuen Regel:
  Wertungstabelle § 5.2 war das auslösende Artefakt und ist repariert
  (`d769be1`); ältere Bewertungsraster der Runde R1–R3 tragen keine
  Mehrfach-Abzugsgründe ohne Linie (Planprüfungs-/Wettbewerbsraster
  arbeiten kriteriengebunden beschreibend, nicht punktbasiert).
- **Wiktionary case-sensitiv (R04-A Nebenbefund → Baustein
  quellen-beschaffung + Gerüst `54439b9`):** Klein-404 wäre für
  DE-Substantive ein falsches Negativ; Groß-/Klein-Doppellauf mit
  mechanik-spiegelnder Positivkontrolle je Lauf (talora/Einkehr).
- **L-05 (Klassifikator), Viertbeleg:** Push-KETTE in R04-A blockiert,
  Einzelbefehle liefen durch — Zerlegungs-Regel erneut bestätigt,
  keine neue Facette.
- **Push-Fenster-Sichtung entwertet sich in der Kette (Leitsession
  R4 → CLAUDE-Schärfung + Gerüst `54439b9`):** Zweimal lief
  `git log origin/main..HEAD && … push` als EINE Kette — die Sichtung
  zeigte fremde R04-A-Commits erst, als der Push schon durch war
  (glimpflich: Veröffentlichung dort gewollt). Eine Sichtung ohne
  Entscheidungspunkt sichtet nichts.
- **Prämissen-Stale-Facette (R04-A Nebenbefund 1):** Der Start-Prompt-
  Stand „Papier-Nachtrag steht aus" wurde 3 Minuten nach Prüfstand-
  Commit durch den Parallel-Commit der Leitsession (`8862831`)
  überholt — Zweitbeleg zur Regel „zwischen Lesen und Commit kann
  sich die Quelle ändern"; die Session fing es selbst per
  Vorwärtsverweis. Multi-Session-Zusatz: Wenn die LEITSESSION parallel
  im Themenraum eines laufenden Strangs committet, ist der
  Start-Prompt die alternde Quelle.
- **Bewährte Muster ohne Regelbedarf (dokumentiert):**
  Prüfer-Befunde vor der Reparatur getrennt an der Quelle verifiziert —
  alle drei trugen (Regel a, erneut) · mechanik-spiegelnde
  Positivkontrollen (Sammelvermerk-R3-Regel, dritter Beleg) ·
  **Kontaminationsschutz per Commit-REIHENFOLGE beweisbar gemacht**
  (Longlist-Commit VOR dem Ausschlusslisten-Read — kostenloser,
  später prüfbarer Nicht-Beeinflussungs-Beleg; neues Muster, bewusst
  ohne Regel-Träger, hier dokumentiert) · „blockiert ≠ ausgeschieden"
  als eigene Kategorie hielt das E-K5-Delta sauber durch („nicht
  prüfbar ist ein eigenes Ergebnis", operative Bestätigung) ·
  mitlaufende Everlast-Commits (5) statt Schlussakt.
- **(c)-Ablagen (bewusst ohne Handlung):** AskUserQuestion-Option
  „Weitere Sprachen" kam ohne Benennung zurück → Nachfassfrage löste
  es (Einzelfall, kein Regelbedarf) · R04-A-Modellverifikation über
  Harness-Environment sauber als „Belegstufe unter Statuszeile"
  deklariert — Statuszeilen-Handgriff bleibt der normierte Kanal ·
  Kunstwort-Robustheits-Befund (N-18/N-26) ist Sach-Info im
  Sprint-Dokument, kein Methodik-Learning.
Quellen: `protokolle/R04-A-abschluss.md`, `R04-A-pruefer.md`,
Session-Verlauf Leitsession R4 (Durchsprachen E11/E12/E13,
Erhebung `R04-erhebung-beratungsbestand.md`).

## Zweitbelege R3 zu bestehenden Regeln (09.08.2026, Sammelvermerk)

- **L-05 (Klassifikator), zwei neue Facetten:** (1) R03-A: `git push`
  auch als Einzelbefehl blockiert, ~30 min später in derselben Session
  durchgelaufen (Zeitpunktbindung erneut). (2) R03-C: zweimal im
  PowerShell-Kanal blockiert (Kette UND Einzelbefehl), unmittelbar
  danach im BASH-Kanal durchgelaufen — die Blockade ist auch
  KANAL-gebunden; Kanalwechsel gehört vor die Meldung.
- **L-03 (stiller Vollständigkeits-Anspruch):** R03-D schrieb
  „36/36 wiedergefunden" — die 36 waren die eigene Stichprobe, nicht
  die Grundgesamtheit des Dossiers; der NENNER einer
  Verifikationsquote ist selbst eine Behauptung (F3).
- **Suchraum-Regel (⭐ Positivkontrolle):** Agenten-Negativ
  „Meldeschein nicht gefunden" maß nur 3 Seiten; der wichtigste
  Einzelbefund der Runde (book your key nimmt Meldescheine am
  Automaten auf) stand auf der vierten (F4).
- **Befund/Diagnose-Trennung (Regel a):** zweimal ausgezahlt — Wavetec
  (Befund richtig, Diagnose falsch: Datei fehlte in der eigenen
  Prüfauftrags-Liste) und LIKE-MAGIC-Eurozeichen (eigene Byte-Lesung
  schlug das Prüfer-Soll) (M7).
- **Zählweg-Regel:** Marker-Zählungen ohne Etikett (Roh-HTML vs.
  gestrippter Text, wortgrenzen-gebunden oder nicht) sind nicht
  reproduzierbar und damit wertlos, auch wenn sie stimmen (F8);
  eine Zahl, die je Werkzeugeinstellung um Faktor 2 springt, ist ein
  Werkzeugartefakt (F2).
- **Preis-Zeilen-Regel:** byte-genaues Zitat schützt nicht vor
  falscher Einordnung — „ab 350 €" ohne die Frage „Preis WOFÜR?"
  (Auflösung stand im FAQ derselben Seite) (F10).
- **Klon-/Vorbestand-Regel:** R03-A übernahm Onboarding-Mechanik und
  ließ DSGVO-/Onboarding-Entwarnungen bewusst zurück (satzweise
  Klon-Prüfung); Gekippt-Abschnitt der Quelle VOR jeder Vorbelegung
  gegriffen — beide Muster trugen.
- **Verfahrens-Positivkontrolle (L-06/L-08-Mechanik):** dritter
  erfolgreicher Lauf; Zusatz-Ertrag: echte Deckungslücke M-2 (No-Show-
  Live-Protokoll ohne Träger) daneben gefunden. Der Prüfer benannte
  seine Blindstellen-Klassen (Maßstab-Manipulation · konsistente
  Doppel-Verfälschung MD+HTML · nur-PDF-Fehler) — dokumentiert als
  Kalibrierung, keine Regeländerung (Zusatzfrage existiert bereits).
- **Gegenprobe-gegen-die-Prämisse (Recherche-Regel):** „widerlege
  diese Behauptung" lieferte den Befund „USP hält, aber enger
  formulieren" — den eine bestätigende Recherche nie gefunden hätte
  (M3); Ausschlussliste als eingebaute Positivkontrolle (M4).
- **Exklusiv-Zuteilung ist Annahme (tagesstart-Nachzug):** beide
  Chrome-Zuteilungen der Runde (R03-B regionalstatistik, Baustein-
  SPA-Erwartung) blieben ungenutzt — Kanal-Messung schlägt
  Baustein-Erfahrungsregel (R03-B F1, R03-D F1).
- **Summenproben-Regel (quellen-beschaffung):** Kreuzprobe zwischen
  Ebenen fing einen echten Quellen-Datenfehler (Deutschland-Zeile ≠
  Ländersumme, −391.312), den kein Plausibilitätsblick findet
  (R03-B F4); Tabellentitel „Jahressumme" log über den Juli-Stichtags-
  Scope der Zeilen (R03-B F5).
- **Verdichten-Familie, Warnvermerk-Facette (R03-C F1-Prüferfang):**
  Zweiteilige Quellen-Pflichten halbieren sich beim Übernehmen — der
  Everlast-Warnvermerk trägt Zeitstempel- UND Vertragsklärungs-Pflicht,
  übernommen war zunächst nur die Terminschiene. Beim Übernehmen eines
  Warnvermerks die Pflichten erst ZÄHLEN, dann einarbeiten.
- **Zahlen-Zeilen-Regel, Register-Facette (R03-C A1-Prüferfang):**
  DPMA- (3 Monate ab EINTRAGUNG) und EUIPO-Widerspruchsfrist (ab
  Veröffentlichung der ANMELDUNG) in einer Tabellenzeile vermengt —
  bei Verfahrensfristen zweier Register nie eine gemeinsame Zeile,
  bevor beide Fristanker einzeln benannt sind.
- **Werkzeug-vor-System, Fehlseiten-Facette (R03-B F2):** Eine
  „technische Störung"-Fehlseite kam vom eigenen falschen
  URL-Parameter, während die Domain parallel sauber antwortete —
  Prüffrage vor jedem „Quelle nicht erreichbar": Antwortet die Domain
  PARALLEL noch? Dann ist der Fehler der eigene.
- **Negativ-Absicherung, Merkmals-Facette (R03-B M3):** Das verdächtige
  Merkmal (`UOGRENZE` — klingt nach Größenklasse, ist Streuungsband)
  EINZELN öffnen statt am Namen urteilen — ein Abruf, macht das
  Negativ unangreifbar.
- **Bewährte Muster ohne Regelbedarf (dokumentiert):**
  MD-Wahrheitsquelle + HTML-Druckfassung mit expliziter Nachzieh-Regel
  im Rollen-Kasten (macht Sync-Fehler diagnostizierbar — R03-A M4) ·
  Fassungsnummern v1/v2+Datum auf Erhebungsvorlagen (R03-A M5) ·
  Reproduktionsweg/Abrufkette ins Dokument statt Rohdaten (1,7 MB CSV)
  ins Repo (R03-B M6) · PDF-ERZEUGUNGS-Werkzeugweg etabliert:
  Chrome headless `--print-to-pdf` respektiert CSS-`@page`,
  wiederverwendbares Skript `beleg/vorlagen/druck/pdf-erzeugen.ps1`,
  Layout braucht Sichtprüfung je Iteration (R03-A F2).
- **(c)-Ablagen (bewusst ohne Handlung):** R03-A-Beobachtungen
  „fremder Commit bereits auf origin" und „fremde uncommittete Arbeit
  ignoriert" = Funktionsbestätigungen der Git-Regeln 3/3a ·
  Länder↔Deutschland-Differenz der RDB-Tabelle ist IM Bericht selbst
  als „gemessen, nicht erklärt" dokumentiert (R03-B Block 2).
Quellen: `protokolle/R03-A-abschluss.md`, `R03-B-abschluss.md`,
`R03-C-abschluss.md`, `R03-D-abschluss.md`, `R03-A-pruefer.md`,
`R03-C-pruefer.md`; Vollständigkeit gegen die Originalmeldungen
geprüft durch den Debrief-Gegenprobe-Subagenten (12 Nachfänge, alle
eingearbeitet — s. Debrief-Report R3).

## Zweitbelege R2 zu bestehenden Regeln (09.08.2026, Sammelvermerk)

- **L-05 (Klassifikator):** `git push` in R02-A auch als Einzelbefehl
  blockiert, später in derselben Session durchgelaufen —
  Zeitpunktbindung zweifach neu belegt (R02-A Block 2 Nachtrag).
- **`grep -c`-Falle (Baustein windows-powershell):** erneut real —
  Prüfbefund P3 an den eigenen Positivkontroll-Zahlen von R02-B;
  Schärfung „Zählweg an die Zahl" in den Baustein übernommen.
- **WebFetch-/Zusammenfasser-Regel (Baustein quellen-beschaffung):**
  Zusammenfasser-Zahlen erst nach Roh-Gegenlesen zitierfähig (R02-B —
  Zahlen stimmten, aber erst das Gegenlesen machte sie belastbar).
- **Regel e (Ist-Stand-Gegenprobe des Auftrags):** R02-A verifizierte
  „kein Messplan existiert" selbst mit Positivkontrolle — zwei greps
  gegen Doppelbau.
- **Grenzen-Pflichtteil als eigener Fundkanal:** lieferte in R02-A den
  einzigen Fang außerhalb des Kategorienkatalogs (Kalender-Prämisse,
  s. L-07).
- **Beleg-Typ-Dreiteilung Rohprotokoll/Systemauszug/Selbstauskunft**
  (Messplan § 1) als operative L-04-Umsetzung — bewährt, wurde durch
  den User-Entscheid „Schätzwerte" (H-2-Nachtrag) sofort tragend.
- **Push-Veröffentlichungs-Regeln (R17/R30):** R02-B korrigierte die
  eigene Fehldeutung „mein Push veröffentlicht 1a67bca mit" selbst am
  `git log origin/main..HEAD`-Beleg (Nachtrag in Block 3) — die Regel
  fing den Fehler im Meldungstext, bevor er zur Aussage wurde.
- **Konservativer Planungsanker + Erfragungs-Handgriff** bei nur
  monatsgenau belegten Terminen (R02-A, 22.09. + H-1) — bewährtes
  Muster für Termin-Rückwärtsrechnungen.
- **Rückbau-Falle `git checkout` (R02-A Falle 5, Nachfang aus der
  Debrief-Gegenprobe):** Nach einem checkout ist der Session-Kontext
  der Datei stale („modified on disk") — vor weiteren Edits neu lesen;
  in die tagesstart-Rückbau-Mechanik übernommen.

## Zweitbelege R1 zu Blueprint-Regeln (09.08.2026, Sammelvermerk)

- **Rohquelle holen bei Berichts-Widerspruch (Regel g):** löste die
  03./04.08.-Datumsdrift VOR dem Zitieren (A/A2 widerlegt durch
  Rohquelle + B/F4.1).
- **Vorbehalt-zuerst-Verdichten (⭐):** messbar wirksam — Prüfer fand
  außer der absichtlichen Verfälschung keinen mittleren/kritischen
  Vorbehalts-Verlust („Kategorie 3 auffällig sauber").
- **Kategorienkatalog mit Pflicht-Ergebnis:** erzeugte belastbare
  „keine Auffälligkeit"-Aussagen (Kategorie 4 Zahlen/Zählweg).
- **Gmail-5-Nachrichten-Falle + Volldump-Arbeitsmodus (Baustein
  gmail-mcp):** erneut bestätigt (masunt-Thread: Liste zeigte 5 von 17
  Nachrichten; Volldump + Skript-Extraktion trug).
- **Verfahrens-Positivkontrolle (tagesstart):** vom Prüfer über genau
  die beauftragte Mechanik gefunden (drei Widerspruchs-Ebenen);
  Blindstellen-Sektion dadurch kalibriert.
Quellen: `protokolle/R01-A-abschluss.md` (ii), `R01-A-pruefer.md`,
Session-Verlauf Leitsession.

---

## L-14 — Die Push-Sichtung ist eine ANZEIGE, keine Absicherung (MKT R7, 10.08.2026)

**Fall.** Vier Fälle an einem Tag, in zwei Sessions: R07-B veröffentlichte
mit einem pauschalen `git push` den Commit `54f9593` von R07-A mit; R07-A
selbst nahm dreimal fremde Commits von B/C/D mit. In BEIDEN Fällen war die
von CLAUDE.md Regel 3 verlangte Sichtung (`git log origin/main..HEAD` als
eigener Befehl) **durchgeführt und korrekt** — und beim eigentlichen Push
bereits veraltet, weil eine Parallel-Session im geteilten Arbeitsbaum in
der Zwischenzeit committet hatte. R07-B hatte den schützenden Refspec
zuerst gewählt und ihn nach einer Klassifikator-Blockade fallen gelassen,
weil die Sichtung „nur noch eigener Commit" zeigte — genau an der Stelle,
an der die Regel gebraucht worden wäre.

**Kern.** Die Sichtung misst einen ZEITPUNKT. Zwischen ihr und dem Push
liegen im Fünf-Sessions-Betrieb Sekunden, in denen der Messwert ungültig
wird. Pflichtform ist deshalb der gezielte Refspec
`git push origin <eigener-hash>:main`.

**⚠️ Präzisierung durch die Leitsession (sonst trägt die Regel eine
Entwarnung, die sie nicht hat):** Der Refspec schützt nur nach OBEN. Er
veröffentlicht den benannten Commit **samt aller Vorfahren** — fremde
Commits, die VOR dem eigenen liegen, gehen mit. Beleg aus demselben Tag:
B's Commit `2c91f6f` lag vor `131b9b3` (R07-D), ein Refspec hätte B
geschützt; der Tagesplan-Commit der Leitsession `7682728` lag NACH beiden,
dort hätte er nicht geholfen — die Leitsession hat deshalb gar nicht
gepusht und gewartet. Gegen vorangehende fremde Commits hilft nur:
nicht pushen, oder sie bewusst mitveröffentlichen.

**Wirkung.** CLAUDE.md Regel 3 (Git pro Session), Refspec als Pflichtform
samt Geltungsgrenze. Projektunabhängig → projektgerüst.

## L-15 — Delegierte ZAHLEN sind schwächer als delegierte Fundstellen (MKT R7, 10.08.2026)

**Fall.** Ein Zitat-Agent von R07-A meldete „Positivkontrolle Hotel: 65
Treffer". Der Wert reproduzierte unter **keinem** Zählweg und über **keine**
der geprüften Dateien einzeln (gemessen: 47/71/11/57/82). Der Nulltreffer,
um den es in der Prüfung eigentlich ging, war dagegen unabhängig
reproduzierbar.

**Kern.** Die bekannte Regel „delegierte Fundstellen driften" hat eine
schärfere Schwester: Fundstellen kann man nachschlagen, Zahlen nicht — eine
Agenten-Zahl ohne mitgelieferten Zählweg ist nicht übernehmbar. Entweder
Zählweg anfordern oder selbst nachzählen. Verwandt: `grep -c` zählt Zeilen,
nicht Treffer — R07-A setzte drei Positivkontrollen als Zeilenzählung,
während dasselbe Dokument sonst Treffer führte, und trug dadurch zwei
verschiedene Zahlen für dieselbe Datei. **Die Regel zu KENNEN genügt nicht;
der Zählweg muss an die Zahl.**

**Wirkung.** CLAUDE.md Verifikationsregel (a). Projektunabhängig.

## L-16 — Ein Muster über AUSZEICHNUNG ist eine Annahme über deren FORM (MKT R7, 10.08.2026)

**Fall, dreifach unabhängig.** (1) R07-A: Ein Anker-Muster erwartete
`rel="canonical"` vor `href`; HTML schreibt die Reihenfolge nicht vor — 24
von 65 Dateien trugen die umgekehrte. Das Muster meldete 35 ankerlose
Dateien statt 11 und ließ zwei Domains **ganz aus der Ergebnistabelle
fallen**, darunter `smart-host.com`, den Gegenstand eines eigenen Kapitels.
Gefunden erst durch den Prüfer. (2) R07-C: `\b` im JS-String ist ein
Backspace-Zeichen, nicht die Wortgrenze — der Selbsttest meldete
„bestanden" für ein Muster, das nie treffen konnte. (3) R07-C: NBSP
(U+00A0) in amtlichen Texten lässt Phrasensuchen ins Leere laufen.

**Kern.** Ein Prüfmuster, das nicht treffen KANN, sieht im Log aus wie ein
sauberes Negativ. Bei Auszeichnungs-Parsing ist „nicht gefunden" fast immer
das Muster, nicht der Bestand. Das ist zugleich der zweite Beleg desselben
Tages für die frisch nachgezogene Regel **Positivkontrolle pro MUSTER statt
pro Lauf** — R07-D reproduzierte sie ein drittes Mal: Ein Sammellauf über
vier Muster meldete „1 Treffer", es waren 2, und drei Muster liefen tot mit.

**Wirkung.** Baustein `quellen-beschaffung`. Projektunabhängig.

## L-17 — Beim Reparieren einer Entwarnung ist der Reflex, sie abzuschwächen (MKT R7, 10.08.2026)

**Fall.** Nach dem Leitsessions-Zuruf strich R07-D den Satz „Es gibt
derzeit keinen konkreten Fall und keinen erteilten Auftrag" nicht, sondern
ersetzte ihn zunächst durch „ein Antrag liegt bei Ihnen derzeit nicht vor"
— dieselbe unbelegte Behauptung in kleiner. Erst der zweite Durchgang
strich sie ganz.

**Kern.** Eine Entwarnung wird nicht dadurch belegt, dass sie leiser wird.
Prüffrage beim Reparieren: Ist der schwächere Satz jetzt BELEGT — oder nur
vorsichtiger formuliert? Meist ist Streichen die richtige Reparatur.
Verwandt und im selben Lauf belegt: R07-D schrieb, eine Wortzählung sei
„von dieser Session nachvollzogen" — sie war es nicht; der Satz hätte
jeden Prüfer davon abgehalten, selbst zu zählen (**eine behauptete
Nachmessung IST eine Entwarnung**).

**Wirkung.** CLAUDE.md Entwarnungs-Block. Projektunabhängig.

## L-18 — Vollständig LESEN und vollständig ÜBERNEHMEN sind zwei Behauptungen (MKT R7, 10.08.2026)

**Fall.** R07-D führte eine Positivkontrolle, die belegte „es fehlt keine
Seite der Quelle" — und übersah dabei, dass nur 3 von 4 im gelesenen
Abschnitt stehenden Paragraphen-Pflichten ins eigene Dokument gewandert
waren. Die Kontrolle prüfte die Erreichbarkeit/Vollständigkeit der QUELLE,
nicht die Vollständigkeit der ÜBERNAHME.

**Kern.** Zwei Behauptungen, zwei Belege. Die Quellen-Positivkontrolle
beantwortet die Übernahme-Frage nie mit. Schwester zu L-11 (Vollzähligkeit
der Gliederung) und zur Extraktions-Regel aus R5.

**Wirkung.** CLAUDE.md Positivkontroll-Block. Projektunabhängig.

## L-19 — Ein „eingearbeitet" im Träger ist kein Beleg; eine Reparatur kann einen anderen Befund verschärfen (MKT R7, 10.08.2026)

**Fall.** Zwei Teile. (a) R07-A stufte im Zuge von W-2 „TC" herauf und
beseitigte damit die letzte Strich-Vergabe in B4.1 — wodurch genau die
Verteilung einseitiger wurde, vor der ein früherer Prüferbefund (K-3)
gewarnt hatte. Der K-3-Restposten war zudem nie eingearbeitet worden und
stand in KEINER Auftragsliste, weil K-3 im Träger als „eingearbeitet"
geführt war. (b) Der Träger selbst rechnete falsch (44 statt 34/40, 37
statt 31, 24 statt 20): Die Detaillisten stimmten, nur die Summenzeilen
nicht — derselbe Nenner-Verlust wie L-13, eine Ebene höher. Auch die
Korrektur der Summe war im ersten Anlauf falsch zusammengesetzt.

**Kern.** Ein Status im Träger ist eine Behauptung wie jede andere; die
Reparatur wird am Rohbeleg gemessen, nicht am Vermerk. Und nach jeder
Reparatur prüfen, welchen ANDEREN Befund sie bewegt hat. Summenproben
gelten auch für die Korrektur einer Summe.

**Wirkung.** CLAUDE.md Regel 8 (Leitsession-Review). Projektunabhängig.

## L-20 — Scope-Disjunktheit gilt auch für VERZEICHNISSE und Belegordner (MKT R7, 10.08.2026)

**Fall, zwei Ausprägungen — beide Fehler der Leitsession.** (a) Der
R7-Schnitt wies `handel/` in ZWEI Start-Prompts als „neu anzulegen" aus
(R07-C und R07-D). Auf Dateiebene waren die Scopes disjunkt, auf
Verzeichnisebene nicht: R07-D legte das Verzeichnis um 13:19 an
(`131b9b3`), R07-C fand es vor und musste die eigene Auftragsprämisse
verwerfen. (b) R07-D legte neue Rohbelege in `sensibel/rohbelege-R05-A/`
ab. Dadurch wich die P20-Bestandszahl ab (dokumentiert 2132, von R07-A
gemessen 2134) und die Kopie-Identität der R5-Sicherung galt bis zur
Klärung als unbelegt — die Klärung kostete eine eigene Messung, obwohl
sachlich nichts kaputt war.

**Kern.** Beim Rundenschnitt gehört die Frage „wer LEGT AN?" neben die
Frage „wer schreibt welche Datei?". Und Rohbelege gehören in den Ordner
ihrer eigenen Runde — sonst altert jede Bestandszahl still, die je über
diesen Ordner erhoben wurde.

**Wirkung.** CLAUDE.md Multi-Session Regel 1 + Doku-Hygiene.
Projektunabhängig.

## Zweitbelege R7 zu bestehenden Regeln (10.08.2026, Sammelvermerk)

- **L-05 (Klassifikator-Blockade), dritter und vierter Beleg — mit
  KORREKTUR der bisherigen Fassung:** Der R3-Nachtrag hielt die Blockade
  für auch KANAL-gebunden (Bash-Ausweg trug). R07-C misst das Gegenteil:
  Der Push war in BEIDEN Kanälen blockiert und lief später **im selben
  Bash-Kanal** durch; R07-B berichtet dasselbe. Die Blockade ist damit
  **primär zeitpunkt-, nicht kanalgebunden** — der Bash-Ausweg ist kein
  verlässlicher Kanal, sondern war in R3 vermutlich der spätere Zeitpunkt.
  R07-A ergänzt: Die Blockade trifft auch Befehls-KETTEN, deren
  Einzelbefehle erlaubt sind (Zerlegen löste es sofort) — das bestätigt
  den R3-Befund.
- **L-01 (Pseudo-Zitat am Verdichtungsbericht):** von R07-D am eigenen
  Text gefangen — die BAFA-Ausnahmeklausel stand als wörtliches Zitat im
  Dokument, belegt war sie nur über B9.4. Der Gang an die Rohquelle
  belegte nicht nur das Zitat, sondern fand **drei weitere
  Voraussetzungen**, die im Repo fehlten (darunter die
  Antragsteller-Sperre, die als Postkorb-Meldung an die Zentrale ging).
  **Der Gang an die Rohquelle zahlt sich doppelt.**
- **L-12 (Auszeichnung mitlesen):** R07-A fand im 42-GmbH-Partnerkarussell
  **11 Logos, die in keinem Text erscheinen** (Bild-Tags gestrippt, alle
  `alt=""`) — die Partnerliste war als Bestandsaussage um ein Drittel zu
  kurz. Eine reine Textprüfung hätte das nie gefunden.
- **Verfahrens-Positivkontrolle (tagesstart, L-06/L-08):** in R07-A
  bestanden — die gepflanzte Falschaussage wurde als KRITISCH gefunden,
  **rein am Rohbeleg begründet, ohne Diff-Sichtung**; der Prüfer stellte
  zusätzlich fest, dass Träger und Papier auseinanderliefen. Damit ist
  belegt, dass der Prüfweg Widersprüche zwischen zwei Dokumenten sieht,
  nicht nur einen Text liest.
- **Rohbeleg-Pfade im Prüfauftrag (tagesstart, MKT R3):** stärkster Beleg
  bisher — bei R07-D stammen **4 von 4 schweren Befunden** aus dem
  Gegenlesen an der Quelle, keiner aus der Textlogik. Der Prüfer selbst:
  „gemeinsame Fehler, die nur der Gang an die Rohquelle findet". Und:
  **Der Kategorienkatalog hat ihn nicht dorthin geführt — die
  Rohbeleg-Pfade haben es.**
- **Zweiter Lesedurchgang durch einen kontextfremden Agenten (CLAUDE.md):**
  trägt über DOKUMENTGRENZEN. Beauftragt war die Telkon-Korrespondenz;
  gefunden wurde der Verflechtungsbefund, der die parallel entstehende
  eigene Referenzvereinbarungs-Vorlage inhaltlich kippte. Der Agent kannte
  die Vorlage nicht und konnte gar nicht danach suchen — genau deshalb
  fand er es.
- **Adressaten-Prüfung (Baustein `aussenkorrespondenz`, am selben Tag
  nachgezogen):** sofort wirksam und als SICHERHEITS-, nicht Stilmittel
  belegt — sie nahm bei R07-D drei formal zulässige Fragen aus dem
  Versand, darunter eine, die nach einer Regel gefragt hätte, gegen die
  wir möglicherweise schon verstoßen haben, bei genau der Stelle, die
  darüber entscheidet. Keine davon hätte ein Stil-Review gefunden.
- **Prüfgegenstand einfrieren (tagesstart):** von R07-D verletzt und vom
  eigenen Prüfer bemerkt (P07D-30) — zwei Commits während des Prüflaufs.
  Konsequenz: Der Doppel-Messstand-Vertrag gilt auch gegenüber dem eigenen
  Prüfer; künftige Prüfaufträge tragen einen eingefrorenen Commit-Hash.
- **Auch der AUFTRAG ist eine Annahme (Verifikationsregel e):** dreifach.
  R07-B — „Zusage zur Zusammenarbeit" war eine Freude-Bekundung, und die
  angenehmere Hälfte war die falsche. R07-C — „`handel/` gibt es noch
  nicht" (überholt) und „LinkedIn voraussichtlich streitig" (widerlegt).
  R07-C zusätzlich am eigenen Prompt: Der von der Session einem Agenten
  vorgegebene Wortlaut von Art. 7 Abs. 1 DSGVO entsprach nicht dem
  amtlichen Text — **ein im Prompt mitgeliefertes „Zitat" ist eine
  Annahme wie jede andere.**
- **Prüferbefunde sind selbst prüfbedürftig (schärft L-13):** R07-A fand
  am Rohbeleg, dass **zwei R05-A-Befunde selbst nicht trugen** (W-3
  Plaschke, H-9 Mews). Die Belegpflicht gilt in beide Richtungen — auch
  gegenüber der Befundliste, die man abarbeitet.
- **Shell-Heredoc bricht an Anführungszeichen (Baustein
  `windows-powershell`, von R07-A gemeldet):** von der Leitsession im
  Debrief SOFORT reproduziert — der Versuch, genau diesen Registereintrag
  per Heredoc anzuhängen, scheiterte am ersten Zitat. Ausweg wie
  dokumentiert: Write-Tool, dann `cat >>`. Die Regel galt bisher für
  Commit-Messages; sie gilt für **jeden** längeren Text.

Quellen: `protokolle/R07-A-abschluss.md`, `R07-B-abschluss.md`,
`R07-C-abschluss.md`, `R07-D-abschluss.md`, `R07-A-pruefer.md`,
`R07-D-pruefer.md`, Session-Verlauf Leitsession.
