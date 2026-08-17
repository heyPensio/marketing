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

---

## L-21 — Ein Selbsttest, der denselben Extraktionspfad nutzt, ERBT dessen Blindstellen (R8, 11.08.2026)

R08-A baute nach einer ersten Muster-Falle (U+201C vs. U+0022, „0 von
99") eine Selbsttest-Datei, durch die der Produktivpfad läuft — und
bestand sie. Der unabhängige Prüfer fand trotzdem P-02: Das Skript
prüfte alles AUSSER den beiden D3-Kästen und der D2-Liste, weil die als
`>`-Blockzitate ohne Anführungszeichen dastehen und das Muster sie
strukturell nicht erfassen kann; die Positivkontrolle fragte zudem den
QUELLENPOOL ab statt das Zieldokument. Der Selbsttest fing das nicht,
weil er dieselbe blinde Extraktion testete. Kern: Die Wächter-Frage
lautet vollständig „welchen Text liest er — und welchen NICHT?"; ein
Selbsttest im selben Pfad beglaubigt nur den Pfad, nie die Abdeckung.
Reparaturform: eigener Blockzitat-Vergleich Zieldokument↔Quelle mit
Gegenprobe im Zieldokument (von R08-A gebaut, von der Leitsession am
Objekt stichgeprüft). Quelle: `protokolle/R08-A-pruefer.md` P-02, § C.

## L-22 — Der Lauf-Status des Prüfers gehört in Protokoll UND Meldung; abgebrochene Prüfer fortsetzen (R8, 11.08.2026)

Der R08-A-Prüflauf brach nach ~247k Tokens am Session-Limit ab, OHNE
geschriebene Datei. Die Fortsetzung aus dem Transkript (Anweisung:
„zuerst schreiben, Unfertiges als unfertig kennzeichnen") lieferte das
vollständige Protokoll — dessen § C (fünf offene Prüfschritte, eine
fehlgeschlagene eigene Positivkontrolle) für die Disposition wertvoller
war als weitere Befunde. Zwei Kerne: (1) „26/26 repariert" ohne
Prüfraum-Status ist eine halbe Entwarnung — sie beglaubigt die
gefundenen Befunde, nicht die Abdeckung; die Original-DATEI führte den
Status korrekt, die CHAT-Verdichtung verlor ihn (Zweitbeleg
„Verdichten verliert den Vorbehalt"). (2) Fortsetzen statt Neustart —
ein Neustart hätte das bezahlte Ergebnis verbrannt. Quelle:
`protokolle/R08-A-abschluss.md` Block 1/4, `R08-A-pruefer.md` Kopf+§ C.

## L-23 — `--autostash` fasst fremde uncommittete Dateien an (R8, 11.08.2026, zwei Belege an einem Tag)

Im geteilten Arbeitsbaum stasht `git pull --rebase --autostash` auch
die uncommitteten Dateien PARALLELER Sessions und spielt sie zurück:
morgens traf es R08-A-Arbeit (von der Session gemeldet, mit Beleg
aufgelöst), nachmittags stashte der Pull der Leitsession
`akquise/akquiseplan.md` einer laufenden Session („Created autostash …
Applied autostash"). Beide Male glimpflich — aber der Rückspielschritt
ist ein Konflikt-Risiko ohne Wächter. Kern: Zeigt der `git status`
fremde Arbeit, vor dem Pull prüfen, ob er warten kann; die
„Applied autostash"-Zeile IMMER gegenlesen. Quelle: Session-Verlauf
Leitsession R8, User-Meldung R08-A.

## L-24 — Eine Kontrolle trägt nur, wenn ihr Ergebnis eine erkennbare UNMÖGLICHKEIT liefern kann (R8, 11.08.2026)

Zwei R08-B-Werkzeugfehler (Attributreihenfolge-Fenster; Hash-Muster auf
zehn Hex-Zeichen genagelt) fielen ausschließlich auf, weil die
Kontrollzahl nicht sein KONNTE („0 von 78", wo beide Attribute dieselbe
URL tragen; „70 eindeutige Logos" bei 78 Einträgen). Bei „90 von 99"
wäre beides sauber ausgesehen. Starke Kontrollformen: Summenprobe, die
ohne Rest aufgehen muss (78+6+13+2=99) · zwei unabhängige
Strukturmerkmale für dieselbe Zahl · Kontrollkandidat mit unabhängig
bekanntem Sollwert plus Gegenrichtung, die schweigen muss. Quelle:
`protokolle/R08-B-abschluss.md` Block 4.

## Sammelvermerk R8 (11.08.2026) — Zweitbelege und bewährte Muster

- **Zahlen an ihren Schlüssel binden (Zweitbeleg, diesmal die
  Leitsession selbst):** Im R08-B-Start-Prompt stand „430.793 Bytes"
  für `raw_partner.html` — die Zahl gehörte zu `agb.html` aus dem
  eigenen ls-Ausschnitt; `raw_partner.html` (475.910) stand gar nicht
  im angezeigten Head. Von R08-B gefangen (Z-7), als sichtbarer
  Nachtrag im Tagesplan dokumentiert. Auch Prompt-Zahlen tragen
  Schlüssel-Pflicht.
- **L-05 doppelt vermessen:** vormittags PowerShell blockiert → Bash
  lief (2×); nachmittags Bash blockiert (2×, auch Einzelbefehl) →
  PowerShell lief. Die R7-Korrektur (primär zeitpunkt-/kontextgebunden)
  ist damit beidseitig gestützt; Kanalwechsel bleibt ein legitimer
  Versuch, kein Mechanismus. CLAUDE.md-Stelle entsprechend korrigiert.
- **Rückfluss-Vollständigkeit an der DRIFT-Liste messen (M1-Fund,
  jetzt debrief-Pflichtschritt):** Der R7-Rückfluss war unvollständig —
  6 Lehren lebten nur in den Kopien; der Kopien-Wächter fand es eine
  Runde später als 8-DRIFT-Befund. Neuer debrief-Schritt: nach jedem
  Rückfluss Wächter-Lauf + Kopien + Stempel im selben Zug.
- **Ein Prüfmuster, das nicht treffen kann (Zweitbelege):** U+201C
  vs. U+0022 (R08-A, „0 Zitate geprüft" bei 99 vorhandenen — nur die
  ausgegebene 0 machte es sichtbar) und Attributreihenfolge (R08-B,
  unabhängige Reproduktion der MKT-R7-Klasse).
- **Domain ≠ Firma · 404 ist kein Sachbefund · Namenslisten altern
  lautlos:** drei Bestandslisten-Regeln aus R08-B, als Baustein-Block
  in `quellen-beschaffung` übernommen (Dubletten easisuite=yanovis und
  xenus=pcs-phoenix; orderando-404; CPH→Ringhotels, Südtirol
  Privat→Hosts).
- **Bewährt — von der Quelle RÜCKWÄRTS lesen:** drei der schwersten
  R08-A-Prüferbefunde waren Abwesenheiten; als sechste
  Pflicht-Kategorie „Was aus der Quelle ist gar nicht erst
  angekommen?" in den tagesstart übernommen. Die zwei
  Prüfer-Zusatzfragen lieferten erneut eigene Befunde (P-26 +
  Methodik-Empfehlung).
- **Bewährt — deklarierte Ausnahmeliste schlägt stille Toleranz**
  (14 Ausnahmen, bei jedem Lauf mitgedruckt) · **Reparaturvermerke
  gehören als DEKLARIERTE Ausnahmen in die Prüfung** (sie dürfen im
  Pool gerade nicht stehen) · **Wochentags-Etikett an jede
  Terminzeile** (vier Handgriffe landeten auf einem Sonntag, weil nur
  der Tabelle die Spalte fehlte) · **Auslassungspunkte sind Teil des
  Zitats** · **Vergabelinien ausformulieren** deckte Kiel/Pinneberg-
  Inkonsistenz auf (Zweitbeleg MKT R4) · **Prompt-Prämissen selbst
  messen** (3/3 bestätigt, R08-A) · **eine Rechnung, die die eigene
  Planung widerlegt, ist das nützlichste Ergebnis** (Trichter- und
  P(0)-Rechnung → kritischer Pfad Namensentscheid).

Quellen: `protokolle/R08-A-abschluss.md`, `R08-B-abschluss.md`,
`R08-A-pruefer.md`, `R08-A-befund-disposition.md`,
`tagesplan-2026-08-11.md`, Session-Verlauf Leitsession.

**Nachtrag aus der Debrief-Gegenprobe (Subagent, 11.08.2026 abends):**
Die Gegenprobe fand **8 versickerte Punkte** (5 Nebenbefunde mit
Zielort, der sie nie aufnahm; 3 Methodik-Punkte — davon 2 aus den
BEWÄHRTEN MUSTERN von R08-B, der Klasse, die laut Regel eher
durchrutscht). Alle nachgezogen: N-1/N-3/N-4/N-5/Z-5/Z-9-Entscheid →
Projektquelle; Bezeichner-ist-kein-Aussagetext + Warnkasten-Muster →
Baustein `quellen-beschaffung` (Blueprint `b8597b6`). Dazu als
Zweitbeleg vermerkt: „Anwesenheit ist nicht Wirksamkeit" gilt auch für
den STATUS von Pflichtenlisten-Einträgen (R08-A P-01: das „erfüllt"
zwischen fünf „nicht gebaut" war der schwerste Befund — die
Vollzähligkeitsprüfung 6/6 sah sauber aus). Lehre über die Lehre: Die
Gegenprobe hat ihren Pflicht-Status verdient — ohne sie wären 8 von 47
geprüften Punkten still versickert, Quote ~17 %.

---

## L-25 — Eine Schärfung erreicht die abgeleitete Stelle nicht (R9, 12.08.2026, zwei Belege an einem Tag)

**Die Vorwärtsverweis-Konvention war bisher einseitig gedacht:** Kippt ein
neuer Stand eine ältere Festlegung, bekommt die ALTE Stelle einen Verweis
(„überholt durch X"). R9 zeigt die **Gegenrichtung**, die dabei
regelmäßig ausfällt — zweimal unabhängig am selben Tag:

**Beleg 1 (B-3, Codex-Restprüfung):** Die Leitsession trug am 11.08. den
Geltungsvermerk „D3.1 gilt NUR für die Bestandskunden-Schiene" in
`handel/kanal-rechtsmatrix.md` nach (`474b95e`, Befund N-6). Das
`akquise/listenbau-regelwerk.md`, das die 24 Monate aus genau dieser
Quelle übernommen hatte, war da bereits gebaut — und wurde nicht
nachgezogen. Der Kasten in § 2.1, **die Stelle, an der der Leser
ankommt**, trug die Einschränkung bis zum 12.08. nicht; die Korrektur
lebte nur in § 3 und § 7.4.

**Beleg 2 (R-1, Review R09-A):** Prüferbefund Q-04 leitete her, dass die
Vorkehrungen nach LG Düsseldorf Rn. 87 **vor dem ersten
Verarbeitungsschritt** stehen müssen und dieser der **Listenaufbau** ist,
nicht der Versand. Die Herleitung stand in `interessenabwaegung-o8.md`
§ 9.1 — an **vier** Ankunftsstellen (§ 9.3, § 11.1, Regelwerk § 10,
Regelwerk-Nachtragskasten) stand weiter „vor dem ersten Versand".

**Handlungskern:** Nach jeder Schärfung einer Quelle lautet der Suchraum
nicht „wo steht der alte Wert?", sondern **„wer hat aus dieser Datei
abgeleitet?"** — grep auf den Dateinamen über das Repo, dann jedes
abgeleitete Dokument an der ANKUNFTSSTELLE prüfen. Die Klasse ist zäh,
weil beide Dokumente für sich korrekt aussehen: Die Quelle trägt die
Einschränkung, das abgeleitete Dokument trägt einen Satz, der ohne sie
plausibel ist.

**Beleg-Typ:** eigene Messung am Objekt (`git show` beider Commits);
beide Fälle repariert in `1da1327` mit sichtbarem Vorfassungs-Vermerk.

## L-26 — Wer eine Reparatur DOKUMENTIERT, verändert den Prüflauf (R9, 12.08.2026, drei Belege)

Ein Reparaturvermerk nach der Doku-Hygiene-Regel („was stand vorher da")
**zitiert die alte Fassung** — und erzeugt damit ein neues „Zitat", das
per Konstruktion **nicht** im Quellenpool stehen kann. Der mechanische
Zitatabgleich wird rot, während beide Dokumente korrekt sind.

- **Beleg 1 (11.08., unbemerkt):** Der Vermerk zu Befund P-04 zitierte
  „je Quelldatei einer — 7/7". Der Lauf ging von 128 auf 129 Zitate und
  von Exit 0 auf Exit 1 — **niemand merkte es**, weshalb § 12 des
  Regelwerks bis zum 12.08. einen Stand dokumentierte („114/114,
  Exit 0"), den der Lauf längst nicht mehr zeigte. Gefunden hat es erst
  die Codex-Restprüfung (B-4).
- **Belege 2+3 (12.08., beim Reparieren selbst):** Die Vorfassungs-Zitate
  der O-2- und Q-04-Nachträge reproduzierten die Klasse sofort wieder —
  116/120, Exit 1.

**Betriebsregel:** Nach jedem Reparaturvermerk das Prüfwerkzeug laufen
lassen und die Ausnahmeliste **im selben Zug** ergänzen, je Eintrag mit
Begründung. **Strukturgrenze, dabei sichtbar geworden:** Zitate aus
Primärquellen außerhalb des Prüfpools (hier LG-Volltext in `sensibel/`,
git-ignoriert) kann das Werkzeug nie bestätigen; sie stehen als
deklarierte Ausnahme drin, und ihre Verifikation liegt bei der Session,
die sie erhoben hat — **nicht** beim Lauf. Wer das nicht ausweist, baut
sich die Ausnahmeliste zur Ausrede.

**Gegenrichtung, ebenfalls belegt (bewährtes Muster R09-A):** Gerade weil
die Vorfassungen gemeldet werden, **zwingt** der Lauf dazu, sie einzeln
mit Begründung zu erfassen. Doku-Hygiene und mechanischer Prüfweg greifen
ineinander — die Meldung ist korrekt, nicht lästig.

**Beleg-Typ:** eigene Messung (drei Läufe, Zählerzeilen und Exit-Codes je
separat gelesen); Endstand Exit 0, 134 Zitate, 18/18 Ausnahmen, 116/116.

## L-27 — Der Zitatabgleich prüft, was als Zitat MARKIERT ist — nicht den Fließtext daneben (R9, 12.08.2026)

R09-A hat die Blindstelle des eigenen Prüfwegs selbst gemessen: Die
zweite Rückbau-Gegenprobe fing **4 von 5** Verfälschungen. Die fünfte —
der Tausch des Normbegriffs „Kategorien von **Empfängern**" (Art. 14
Abs. 1 lit. e) zu „Kategorien von **Adressaten**" — blieb unentdeckt,
**weil die Stelle als Fließtext steht, nicht in Anführungszeichen**. Der
Extraktor sieht sie nie.

**Die gefährlichste Klasse sitzt genau dort:** eine falsche Absatz- oder
Buchstabenangabe („Art. 14 Abs. 2 lit. f" statt „lit. b"), ein
verschobener Normbegriff, eine falsche Rechtsfolge — alles liest sich
plausibel und ist von **keinem** der eingesetzten Prüfmittel zu fangen
(der unabhängige Prüfer nennt dieselbe Klasse in seiner eigenen Antwort).
**Folge:** Wer ein Zitat-Prüfwerkzeug einsetzt, schreibt ins Dokument,
was es NICHT prüft — sonst liest sich „116/116 bestätigt" als
Vollprüfung des Textes. Normangaben im Fließtext brauchen einen eigenen
Prüfkanal (Normstellen-Liste gegen den Volltext).

**Beleg-Typ:** Selbstmessung der Session, im Abschlussprotokoll unter
„Die Blindstelle des eigenen Prüfwegs — ehrlich benannt" ausgewiesen.

## L-28 — Ergebnis JE FALLGRUPPE, plus eine Liste gesperrter Argumente (R9, 12.08.2026, bewährte Muster)

Zwei Bauformen, die sich in einem risikotragenden Bewertungsdokument
bewährt haben und auf jedes Papier übertragbar sind, das eine
Zulässigkeits-, Eignungs- oder Risikofrage beantwortet:

1. **Ergebnis je Fallgruppe statt Pauschalurteil.** Zwei Achsen
   (Personenbezug × Adressquelle) ergaben Fallgruppen mit je eigenem
   Ergebnis: FG-3 (freiwillige Quelle) trägt vertretbar, FG-4
   (Impressum) ist ein **dokumentiert getragenes Restrisiko**, keine
   Zulässigkeitsfeststellung. Ein einziges Gesamturteil hätte entweder
   die tragfähigen Fälle heruntergezogen oder das Risiko zugedeckt.
2. **Eine Liste ausdrücklich GESPERRTER Argumente.** Drei naheliegende
   Entlastungen wurden benannt und gesperrt — allen voran „wir
   informieren doch vorbildlich nach Art. 14", das die Aufsicht in ihrer
   eigenen Handreichung als **abwägungsneutral** bezeichnet. Ohne die
   Liste baut der nächste Redigierende genau das plausibelste
   Gegenargument ein, das die Quelle widerlegt — und eine Behörde kippt
   es mit einem Satz aus ihrem eigenen Papier.

**Merksatz:** Die naheliegendste Entlastung ist die gefährlichste; sie
gehört nicht weggelassen, sondern **mit Begründung gesperrt**.

## L-29 — Prüfwerkzeug-Fehlalarme sind fast alle Normalisierungsfehler (R9, 12.08.2026)

Von **37** zunächst gemeldeten „Zitatabweichungen" waren **33
Werkzeugfehler in fünf Klassen**, nur **4** echt: Blockquote-Präfixe
mitten im Zitat (die Normalisierung griff nur am Zeilenanfang) ·
PDF-Silbentrennung · PDF-Seitenmarken mitten im Satz · Umbruch an
Bindestrich/Schrägstrich („DS-⏎GVO") · deutsche
Zitat-im-Zitat-Schachtelung.

**Zwei Regeln daraus:**
- **Eine Normalisierungsstufe muss SYMMETRISCH auf beide Seiten wirken,
  und die Reihenfolge der Stufen zählt.** Silbentrennung nur auf dem Pool
  aufzuheben machte aus „Telefon- und Stromanbieter" ein „Telefonund" und
  **verlor ein zuvor gefundenes Zitat**; `dehyph` vor der nächsten Stufe
  macht aus „DS- GVO" ein „DSGVO" und entzieht ihr die Bruchstelle.
- **Eine mechanische Prüfung, die zu viel meldet, wird abgeschaltet.**
  Die Fehlalarm-Analyse ist deshalb Teil des Werkzeugbaus, nicht
  Nacharbeit: „nicht gefunden" ist bei Auszeichnungs-Parsing fast immer
  das Muster — auch bei den **eigenen** Prüfwerkzeugen.

**Dazu ein Quellen-Befund derselben Runde:** Der **Dateiname einer Quelle
ist keine Standangabe** — die BfDI-URL trägt `20181107` im Namen und
liefert inhaltlich die Fassung **Februar 2022** (beide Textextrakte
md5-identisch). Umgekehrt folgt: **Zwei Bezugsquellen sind nicht zwei
Lesewege.** Ein „Zweitkanal", der dieselbe Datei liefert, stützt die
Fassungsangabe, aber **keinen** Negativbefund über den Text.

## Sammelvermerk R9 (12.08.2026) — Zweitbelege und bewährte Muster

- **„Ein Prüfwerkzeug, das den Erfolgsfall nicht kennt, ist keins"**
  (heyPensio R36) — unabhängig reproduziert **mit Schärfung**: Der
  Selbsttest erwartet „4 bestätigt / 4 gemeldet", die Erfolgsbedingung
  des Hauptlaufs lautet „0 gemeldet" — mit ihr ist der Zielzustand des
  Selbsttests **nie erreichbar**; das Werkzeug meldete nach geglückter
  Arbeit falsch rot. **Neu: Die Erfolgsbedingung gehört JE MODUS ins
  Werkzeug**, nicht einmal global.
- **„Ein Test, der nichts verändert, prüft nichts"** — Schärfung: Die
  Rückbau-Gegenprobe braucht **ihre eigene Positivkontrolle mit
  Zählung**. Der erste Durchlauf setzte still nur **3 von 4**
  Verfälschungen (die vierte scheiterte an einem Zeilenumbruch im
  Suchmuster); ohne die Zeile „gesetzt: n von m" wäre ein wirkungsloser
  Testaufbau als bestandene Prüfung verbucht worden.
- **„Bestandszahlen gegen den VORHER-Stand messen"** — Schärfung: Eine
  Bestandsmessung, die **in der Datei steht, die sie beschreibt**, altert
  **im selben Commit** („Art. 6 Abs. 4: 0 Treffer" war nach den eigenen
  Nachträgen 4). Der Vorher-Stand gehört als `~1`-Hash an die Zahl.
- **„Delegierte Fundstellen driften"** — beidseitig belegt: Der Prüfer
  meldete eine Abweichung, die es nicht gibt (Q-01, „die Rechtsmatrix
  führt curia" — 0 Treffer), und ein Teilbeleg war falsch („Rn. 45
  nirgends genannt" — 1 Treffer), während der Kern des Befundes stimmte.
  **Eine behauptete Abweichung, die es nicht gibt, ist teurer als keine**
  — sie kostet Prüfzeit und beschädigt die übrigen Punkte derselben
  Liste.
- **Pflicht-Kategorie „Was aus der Quelle ist gar nicht erst
  angekommen?"** (R8) — stärkster Zweitbeleg bisher: ErwG 47 **Satz 4**
  fehlte, der einzige Satz mit nachteiliger Rechtsfolge, in der Quelle
  **exakt zwischen den beiden Zeilen, die das Dokument zitierte**. Kein
  Zitatabgleich hätte ihn gefunden; ein Auslassungsfehler erzeugt keine
  auffällige Textstelle.
- **L-22 (abgebrochene Prüfer FORTSETZEN)** — mit Zahl: Der Prüfer brach
  am Session-Limit unmittelbar vor dem Schreiben ab; die Fortsetzung aus
  dem Transkript lieferte das vollständige Protokoll in **56 Sekunden**,
  ein Neustart hätte **≈ 310.000 Token** verbrannt.
- **L-24 (Kontrolle mit erkennbarer Unmöglichkeit)** — Zweitbeleg:
  Vollzähligkeit der DSK-Gliederung über **zwei unabhängige
  Strukturmerkmale** (Inhaltsverzeichnis und Textteil-Überschriften):
  **29 = 29, Differenz in beide Richtungen leer**. Ein erster,
  generischer Extraktor hatte Fußnotenziffern mitgezählt — die Kreuzprobe
  machte den unbrauchbaren Nenner sofort sichtbar.
- **Eigener Quellen-Anker VOR dem Fan-out** (MKT R7) — **Erweiterung:**
  Der Anker macht auch die **Negativbefunde** der Agenten prüfbar
  (15er-Nullliste und Positivkontrollen unabhängig reproduziert, ohne die
  Quellen erneut zu beschaffen).
- **„Agenten auf den unbequemen Pol verpflichten"** (MKT R7) —
  Zweitbeleg: Ein Recherche-Agent meldete **ungefragt einen Fehler in der
  Auftrags-Prämisse** (die Interessenabwägung steht in DSK-Ziff. 1.3,
  nicht in 2.x).
- **Nenner-Pflicht bei Befundlisten** (L-13) — **Eigenbeleg der
  Leitsession:** Die eigene Dispositionsliste zur Codex-Restprüfung
  führte **11 Befunde**, tatsächlich waren es **12** (die fehlende
  R-A6.1-Normbegründung fiel erst beim Ausführen auf und wurde als B-12
  nachgetragen). Auch die reviewende Instanz zählt falsch — der Nenner
  schützt nur, wenn er selbst geprüft wird.
- **„In Doku-Verweisen keine Zeilennummern"** — Erweiterung auf
  **Verifikationsvermerke**: „Rechtsmatrix vollständig gelesen, 856
  Zeilen" war zum Lesestand `d11535f` **korrekt** und wurde allein durch
  den eigenen Nachtrag `474b95e` (+10 Zeilen) falsch. Belegstände gehören
  als **Commit-Hash** ins Dokument, nicht als Zeilenzahl.

**Werkzeug-/Kanalbefunde (an die Zentrale gemeldet, kein Regel-Rückfluss):**
`curia.europa.eu`/`infocuria` sind seit einem Relaunch eine
JavaScript-SPA ohne Nutzlast im HTML · `eur-lex.europa.eu` blockt curl
(HTTP 202, leerer Body, 6 Versuche über 3 URL-Formen) · die deutsche
Sprachfassung eines EuGH-Volltextes ist über `publications.europa.eu`
teils nicht abrufbar (404 bei `deu`/`de`/`de-DE`, 200 nur bei `eng`) —
Ausweg ist die Amtsblatt-Mitteilung (`…/celex/<Jahr>CA<Nr>`) mit dem
amtlichen deutschen Tenor.

**Zwei Werkzeug-Funde des Debriefs selbst (12.08., beim Anwenden von
L-26 — das Skript lief nach jedem Nachtrag):**
- **⭐ Ein Positivkontroll-Anker in einem ROTIERENDEN Abschnitt altert
  planmäßig.** Der STATUS.md-Anker des Zitat-Skripts („Offenlegung ist
  ab jetzt") stammte aus dem R7-Block und wanderte mit der ganz
  regulären 2-Runden-Rotation ins Archiv — die Positivkontrolle fiel auf
  **10/11**, ohne dass am Pool irgendetwas kaputt war. Erst das
  Prüfmuster verdächtigen, dann das Dokument: **Anker gehören in den
  STABILEN Teil einer Datei** (Kopf/Zweckblock), nie in einen Abschnitt,
  dessen Rotation im selben Repo vorgeschrieben ist. Neuer Anker: „Bei
  Widerspruch STATUS.md".
- **Die Ausnahmeliste zählte FUNDSTELLEN gegen EINTRÄGE.** Dieselbe
  Vorfassung an zwei Stellen zu zitieren (LG Rn. 87) ergab „19 / 18
  deklarierten" und damit Rot ohne Fehler. Umgestellt auf Einträge —
  plus einer neuen Ausgabe „VERWAISTE Ausnahme-Einträge", die die
  Gegenrichtung abdeckt (ein Eintrag, der nirgends mehr vorkommt, ist
  veraltet und gehört entfernt). Endstand: **135 Zitate · 18/18
  Einträge (19 Fundstellen) · 116/116 bestätigt · Positivkontrolle
  11/11 · Gegenprobe 3/3 · Selbsttest bestanden · Exit 0.**

**Fremdagenten-Einsatz (Codex, erster MKT-Auftrag C-1):** Der Zuschnitt
**„Codex inventarisiert und misst, die Leitsession bewertet"** hat
getragen — 11 belastbare Befunde ohne ein einziges Belegstufen-Urteil,
Blindstellen vom Bericht selbst benannt, Verhaltensauflagen (nur lesend,
eine Datei, kein Commit) eingehalten. **Aber: Eine `git status`-Aussage
von Codex ist nicht ohne eigene Gegenmessung übernehmbar** — Codex
meldete `.claude/settings.local.json` als untracked, während dieselbe
Datei hier global git-ignoriert ist (`~/.config/git/ignore`); es sieht
den Arbeitsbaum in einem anderen Benutzer-/Konfigurationskontext.

## L-30 — Eine „x von y"-Aussage wird am KRITERIUM geprüft, nicht an der Zahl (R11, 12.08.2026)

**Fall (R11-A, Prüferbefund P-03, SCHWER):** Die Preismodell-Vorlage
stützte ihre Empfehlung auf „10 von 10 Ankern mit vollständiger Angabe
haben Einmalzahlung oder Laufzeit". Das genannte Auswahlkriterium traf
nach den eigenen Tabellen nur auf 4 der 10 zu; tatsächlich angewandt
war „hat eine Einmalzahlung" — der Satz zählte sein eigenes
Auswahlkriterium („10 von 10 Ankern, die eine Einmalzahlung haben,
haben eine Einmalzahlung"). **Die Auswahl war die Aussage** — eine
Positivliste in Verkleidung, und ausgerechnet der stärkste Gegenfall
(der einzige Anker mit vollständig veröffentlichter Preisliste, OHNE
Einrichtungsgebühr) fiel durchs Raster.

**Prüffrage an jede „x von y"-Aussage: Könnte das Ergebnis überhaupt
anders ausfallen?** Wenn nein, ist es keine Zählung. Der Prüfer hätte
die Zahl selbst nachgezählt und abgehakt (sie stimmte) — erst der
Hinweis „Zahl von ihrem Schlüssel gelöst" ließ ihn das KRITERIUM
prüfen. Schwester von L-24 (Unmöglichkeits-Kontrolle) und der
Positivlisten-Regel; neu ist der Ort: nicht im Prüfwerkzeug, sondern
in der eigenen Ergebnis-Prosa.

## L-31 — Die Entlastung über den eigenen AUFTRAG verallgemeinert den Prompt zum Gesamtauftrag (R11, 12.08.2026)

**Fall (R11-A, Prüferbefund P-04, SCHWER):** „Das ist ein
dokumentiertes Negativ, kein Versäumnis dieser Runde: Die Erhebung ist
nie beauftragt worden." — Das Routing-Kapitel des EIGENEN
Rohstoff-Papiers derselben Runde nannte die Erhebung
(Zahlungsbereitschaft) ausdrücklich als einen von drei Ersatz-Ankern.
Der Session-Prompt enthielt sie nicht; die Session verallgemeinerte
den eigenen Prompt zu „nie beauftragt" — die Standardform des Fehlers
„Kanal-Negativ als Dauerzustand", angewandt auf die eigene
Beauftragungslage.

**Regel:** Vor jedem „war nicht beauftragt" das Routing-/
Auftragskapitel der eigenen Quelle erneut lesen. Die Reparatur ist
Streichen, nicht Abschwächen (L-17-Verwandtschaft): Der Posten wurde
vom „dokumentierten Negativ" zum überfälligen Auftrag. Gefunden nur
durch die Leserichtung QUELLE RÜCKWÄRTS (Kategorie 2) — vorwärts
gelesen wirkt ein Routing-Kapitel wie Verwaltungstext.

## L-32 — Belegstufen-Disziplin gilt auch für STRUKTUREN und Denkfiguren (R11, 12.08.2026)

**Fall (R11-A, Prüferbefund P-02, SCHWER):** Die Vorlage wehrte die
ChatGPT-ZAHLEN des Rohstoff-Papiers sauber ab (§ 2.2: „nie Anker",
mustergültig begründet verworfen) — und übernahm zugleich die
ChatGPT-STRUKTUR: Die Bemessungs-Empfehlung „Grundgebühr +
Zimmeranteil nur für gästenahe Module" war nahezu wörtlich der dritte
B-Punkt derselben verworfenen Quelle, ohne Herkunftsmarke; die eigenen
Anker, die sie stützten, wurden erst NACHTRÄGLICH gesucht. Ein Leser
konnte nicht sehen, dass die Denkfigur aus der externen KI stammte.

**Regel:** Die Herkunft einer STRUKTUR (Gliederung, Achsenwahl,
Denkfigur) trägt dieselbe Ausweispflicht wie eine Zahl. Nachträglich
gefundene eigene Belege machen eine fremde Struktur nicht zur eigenen
— die Übereinstimmung ist ein Indiz, kein Beleg, und wird als solche
ausgewiesen. Verwandt mit dem Spiegelfall „vor dem Einarbeiten
umgekehrt greppen" (R30-D/R31-C): Auch hier hilft nur die
Rückwärts-Frage „Welche Teile MEINES Ergebnisses stehen schon in der
verworfenen Quelle?".

## Sammelvermerk R11 (12.08.2026) — Zweitbelege, bewährte Muster, Leitsessions-Eigenbefunde

- **„Zahlen an ihren Schlüssel binden" (heyPensio R35) — Zweitbeleg
  eine Ebene höher (P-01, SCHWER):** Nicht die Zahl war falsch (25 $),
  sondern ihre BEZUGSGRÖSSE („pro Projekt" statt „je Organisation,
  erstes Projekt inklusive, weitere ab 10 $"). Die eigene
  Extraktionsdatei hatte Dollar-Beträge OHNE Schlüsselspalte gesammelt;
  die Kontrolle prüfte die Erreichbarkeit der Quelle statt der
  Vollständigkeit der Extraktion (Sammelvermerk-R5-Klasse). Folge:
  Kostenbasis und alle 12 Break-even-Zellen kippten — in Richtung der
  eigenen Empfehlung.
- **Drift-Check-Klasse (heyPensio R36) — Zweitbeleg am Rechenwerk:**
  12/12 Break-even-Zellen dreifach korrekt nachgerechnet UND falsch —
  der Nenner beruhte auf der falschen Bezugsgröße.
  **Rechenkontrolle und Eingangskontrolle sind zwei Prüfungen.**
- **L-19/L-26 — Drittbeleg |-Falle:** Die eigene Reparatur brachte ein
  unmaskiertes `|` in eine Tabellenzelle, ausgerechnet in einen frisch
  eingefügten Gegenprobe-Vermerk, plus zwei stehengebliebene Altwerte
  in Nachbar-Abschnitten. Der mechanische Nachlauf NACH der Reparatur
  (Tabellen-Scan + Altwert-grep) fing alle drei.
- **Prüfer-Selbstauskunft als Methoden-Messung:** Die
  Pflicht-Kategorien produzierten die STRUKTUR-Befunde (P-02/P-03/
  P-04/P-06/P-13/P-14 — die schwersten), das schlichte Nachrechnen die
  Zahlen-Befunde. Benannte eigene Blindstelle des Prüfers: die
  Rückwärtssuche „welche Aussage des Papiers gehört zu KEINER
  genannten Quelle?" stand in keiner Kategorie und fiel aus —
  **Kandidat** für künftige Prüfaufträge, bewusst noch nicht als
  Pflicht-Kategorie eingezogen (erst ein Beleg).
- **Bewährt (einmal, Skill-Kandidaten-Flag):** Belegstufen-Legende
  (① GEMESSEN … ⑤ HYPOTHESE) am DOKUMENTANFANG disziplinierte das
  ganze Papier und gab dem Prüfer das Raster, an dem P-02/P-06
  überhaupt benennbar waren · Entscheidung in getrennte Fragen zerlegt
  (Vertragsform · Bemessung · Bezugseinheit · Höhe) machte sichtbar,
  dass die Höhe heute nicht entscheidbar ist.
- **⭐ Recherche-Agenten die Baustein-Werkzeugfallen explizit mitgeben
  (→ tagesstart-Vorlage, `4fa4453`; Fund der Debrief-Gegenprobe —
  war zunächst in keinem Kanal gelandet):** Beide Recherche-Agenten
  meldeten daraufhin eigene Werkzeugfehler statt zu glätten (391
  Teilwort-Fehlalarme; eine Meta-Description, die der eigenen
  Preistabelle widersprach — der Prozessmeister-Fehlalarm, den der
  Prüfer exakt bestätigte).
- **Quellen-Anker-vor-Fan-out (MKT R7/R9) — Drittbeleg:** 18
  Agentenzahlen mechanisch gegen die eigenen Abzüge geprüft (2
  Gegenkontrollen, die nicht treffen durften); die Grenze „belegt
  Anwesenheit, nicht Zuordnung" stand im selben Satz — die drei
  Schlüsselstellen wurden zusätzlich im Wortlaut gelesen.
- **L-22-Erweiterung:** Offene Prüfschritte des Prüfers holt die
  Session SELBST nach, BEVOR sie disponiert (hier: fünf Einmalbeträge
  am Rohbeleg + eine Primärquelle; ein Skriptlauf) — sonst erscheinen
  sie in der Bilanz als erledigt.
- **Leitsessions-Eigenbefund (→ tagesstart-Vorlage, `44a2bfe`):** Die
  Auftragsprämisse „einziger belegter Bestand-Anker" stammte aus dem
  geerbten R09-B-PROGNOSE-Text und war beim Schärfen nicht neu
  gemessen worden — der Bestand trug sieben geprüfte Anker (M1–M7).
  Gefangen vom Bestands-grep der Arbeits-Session (N-1), nicht von der
  Leitsession.
- **Push-Lage-Befund (Firmen-Ebene, Postkorb-Meldung 12.08.):**
  „Push-Lage synchron" im Zentrale-STATUS war unbelegt —
  `b04c264`/`a49bf8e` lagen nur lokal; der bereits gepushte
  marketing-Stempel referenzierte damit einen unveröffentlichten Hash.
  L-14-Klasse auf Firmen-Ebene; belastbar ist nur
  `git branch -r --contains` nach frischem fetch.
- **Werkzeug-/Kanalbefunde:** Chrome-Automationskanal nicht verbunden
  (je Session neu zu messen, betrifft Browser-Zuteilungen künftiger
  Runden — z. B. E-V4) · Hetzner-Preisseiten liefern Text ohne Werte
  (Nachlade-Befund, jetzt Baustein-Regel `quellen-beschaffung`).

## L-33 — Wer eine Zählung maschinisiert, maschinisiert auch die AUSSAGE darüber (R12, 13.08.2026)

**Fall (R12-A, Prüferbefund P-01 + eigener Selbstfang):** Die
Fenster-Zählung der Startgebühr-Marktanker lief per Skript, das
Ergebnisprotokoll lag gesichert daneben — und die von Hand formulierte
Rangaussage DARÜBER war zweimal nacheinander falsch: erst „kein anderes
Fenster hat mehr als drei Werte" (Selbstfang), dann „zweitdichtestes
Fenster" (real Rang 4; der Zusatz „mit Betriebsbezug" rettete den Rang
nicht, er verdeckte ihn — beide Zwischenfenster trugen ebenfalls
Klasse-A-Werte). **Beide Fehler gingen in dieselbe Richtung: Sie ließen
das Band der eigenen Arbeitshypothese dichter belegt aussehen.** Die
Zeilen zwischen „Sieger" und „gesuchtem Wert" wurden schlicht nicht
gelesen.

**Struktur-Variante derselben Drift (R12-B, PB-05/PB-13):**
Empfehlungs-Superlative — „die einzige Option, unter der …" — zweimal
unabhängig im selben Dokument, obwohl die eigenen Dafür/Dagegen-Zeilen
der anderen Optionen das Gegenargument bereits trugen. Die Verdichtung
zugunsten der eigenen Empfehlung trifft also auch reine
STRUKTUR-Dokumente ohne Zahlen.

**Dritte Facette (R12-B, PB-02):** Eine Referenz-Tabelle, die nur den
Entscheid-KERN wiedergibt, liest sich als vollständige Wiedergabe — der
ausdrücklich mitentschiedene Neben-Bestandteil (E-1-Verschiebung, samt
Z-4-Kopplung) war nirgends angekommen.

**Handlungskern (CLAUDE.md, Verdichten-Block):** Rangaussagen über
Skript-Ausgaben Zeile für Zeile gegen die Ausgabe lesen oder
mit-maschinisieren · Empfehlungs-Superlative gegen die eigenen
Dafür/Dagegen-Zeilen der anderen Optionen prüfen · ✅-Kästen auf
„ausdrücklich mitentschieden"-Zusätze gegenlesen, bevor eine
Referenz-Tabelle als Wiedergabe gilt.

## L-34 — Ein präziser Quellverweis benennt, wo man anfängt, nicht, wo man aufhört (R12, 13.08.2026)

**Fall (R12-A, Prüferbefund P-05 — dieselbe Verengung in Bau UND
Prüfung):** Der Bau-Auftrag nannte als Quelle den Unterabschnitt
„Preismodell E-1…E-8" des Briefings. Die Nachbar-Rubrik „Offene
User-Entscheide" desselben Dokuments — die den ENTSCHEIDER der
Startgebühr-Höhe benennt — stand eine Bildschirmseite daneben und wurde
nicht gelesen; beide Dokumente führten den wichtigsten offenen Posten
der Arbeitslinie daraufhin ohne Träger. Der Prüfer wäre per „vom
Protokoll rückwärts lesen" im benannten Abschnitt zur ENTWARNUNG
gekommen („27 von 27 angekommen") — der Fund entstand erst, als er den
Suchraum eigenmächtig über den benannten Abschnitt hinaus erweiterte.
Seine eigene Formulierung: „Die Kategorie war richtig, ihr Suchraum zu
eng."

**Handlungskern:** Quell-Aufträge (Bau wie Prüfung) nennen das DOKUMENT
als Leseraum und den Abschnitt nur als Einstieg; Prüfaufträge mit
Quellenbezug weisen den Prüfer an, den Suchraum über den benannten
Abschnitt hinaus zu erweitern. Schwesterregel für Prüfer (R12-B-Prüfer,
wörtlich): „Der Prüfgegenstand ist das Dokument, der PRÜFRAUM ist
alles, worauf es zeigt."

## L-35 — ID-Namensräume kollidieren dokumentübergreifend: dreifach an einem Tag (R12, 13.08.2026)

**Drei unabhängige Fälle in einer Runde:** (1) „N-10" bezeichnete
zugleich den Marktstundensatz-Posten (R11-Abschlussmeldung) und einen
DSGVO-Befund (Rechtsmatrix, aus R09-A) — gefunden von R12-A beim
N-10-Nachtrag. (2) Die R12-A-Nebenbefunde hießen ihrerseits N-1…N-8 und
kollidieren mit den N-Nummern aus R9/R11, die der STATUS führt —
gefunden von der Leitsession beim Review. (3) Die Terminpfad-Stufen
S0–S5 (akquiseplan/§ 9 der Preismodell-Vorlage) kollidieren mit den
Preisschlüsseln S1–S4 der Preisliste — „S1" ist je nach Dokument eine
Terminstufe oder eine Grundgebühr (R12-B, PB-11a).

**Warum die bestehende Regel nicht reichte:** „Vor der Vergabe neuer
Kurz-IDs die Nachbardokumente greppen" zielt auf die VERGABE — die
Fälle 1–2 entstehen aber beim FÜHREN fremd vergebener IDs im
Wahrheits-Kanal (Abschlussmeldungs-Nummern sind lokal, der STATUS macht
sie global), Fall 3 zwischen SACHSCHLÜSSELN zweier Domänen.

**Handlungskern (CLAUDE.md, Doku-Hygiene):** Nebenbefund-Nummern
wandern nur MIT Rundenpräfix in den Wahrheits-Kanal (`R12A-N-1`);
Sachschlüssel-Namensräume je Domäne trennen; die Kollisions-Suche
trägt eine Positivkontrolle mit einem unabhängig bekannten
Kollisions-Sollwert (der R12-B-Prüfer nutzte die bekannte
N-10-Kollision als Sollwert — die Kontrolle konnte eine echte
Unmöglichkeit zeigen). Operativer Rest: Kandidat Umbenennung der
Terminpfad-Stufen (T0–T5) bei der nächsten akquiseplan-Pflege.

## Sammelvermerk R12 (13.08.2026) — Zweitbelege, bewährte Muster, Grenzfälle

- **L-05 — vierter Beleg, korrigierte Fassung bestätigt:** Der
  Push-Klassifikator blockierte zweimal, der dritte Versuch lief — bei
  unverändertem Kommando, Kanal und Commit (R12-A).
  Zeitpunkt-/kontextgebunden, nicht kanalgebunden.
- **L-24/L-30-Klasse — Nenner-Facette:** siehe L-30-Nachtrag in
  CLAUDE.md (Nenner an den Prüfgegenstand; R12-A-Gegenprobe „6 von 6
  Anbietern" bei behaupteten Einzelbeträgen, zwei ohne Fundzeile —
  die Werte stimmten, der Beleg fehlte).
- **L-27-Klasse — Zweitbeleg in der ÜBERNAHME-Richtung (P-03):** Bei
  Tabelle→Tabelle-Übernahme kam der Fließtext-Vorbehalt UNTER der
  Quelltabelle nicht mit, die In-Zeile-Warnung des Nachbarn schon —
  ausgerechnet beim tragenden Anker W1.
- **Verifikationsvermerk-Alterung (Sammelvermerk-R9-Klasse, neue
  Facette P-11):** Lesestand-Hash und beschriebene Fassung müssen
  zusammengehören — „Repo-HEAD `e112845` in der Fassung mit den
  ✅-Nachträgen" nannte einen Hash, zu dem es die Nachträge noch nicht
  gab (beides entstand im selben späteren Commit).
- **Edit-Falle beim Kasten-Einfügen (R12-A, Falle 5):** Ein
  Nachtrags-Kasten riss den kommentierten Satz aus dem `old_string` mit
  — nach jedem Kasten-Edit prüfen, ob der kommentierte Text noch
  dasteht; per grep sofort gefangen.
- **„beauftragt" ≠ „läuft" (R12-B, PB-03):** Statusaussagen über
  fremde Arbeit rutschen in Halbsätzen durch („laufende E-6-Messung" in
  einem So-läuft-es-weiter-Punkt) — Regel-3a-Klasse, gilt auch für
  Nebensätze.
- **Werkzeug-Zweitbelege:** `grep` case-sensitiv („Tagessatz" findet
  „Beratertagessatz" nicht — Kopf-Volldump statt drittem Muster) ·
  Kontextfenster-Muster verfehlen kurze Zeilen (0 Treffer für einen
  11-fach vorhandenen Betrag) · `Measure-Object -Line` zählt
  Leerzeilen nicht (1512 statt ~1660) — alle drei Klassen standen
  bereits in Bausteinen und wurden von den Sessions selbst gefangen,
  WEIL die Prompts die Fallen mitgaben (tagesstart-Regel `4fa4453`
  wirkt).
- **Bewährte Muster (je mit Beleg):** Rohbeleg-Anker fängt
  Vorrunden-Fehler mit (W1 „ab 1.920 €" fiel beim Zeilen-Lesen an,
  ungesucht) · `git show --numstat` mit 0 Löschungen als billigster
  Nachtrags-Disziplin-Beleg (Grenze benannt: fängt keine Umdeutung
  durch hinzugefügten Kasten) · Ausschluss-Entscheidungen sichtbar
  GEGEN das eigene Interesse begründen (W4/W6-Ausschluss senkt die
  eigene Spanne) · unbequemster Befund an der Ankunftsstelle
  (399–799-€-Kasten direkt unter der Hypothese) · sprechende
  Platzhalter (Drittbeleg) · eingefrorener Prüfstand mit
  `git show <hash>:<pfad>` AUCH für die referenzierten Quellen
  (R12-B-Prüfer; Arbeitsbaum-Drift ausgeschlossen) · offene
  Prüfschritte selbst am Rohbeleg schließen statt neu prüfen
  (L-22-Linie, Schritt 10 = ein Grep) · Zuordnungsfrage vor
  Mechanik-Fragen (AA-1 vor AA-5…AA-8; E-2a-Muster bestätigt) ·
  Selbstprüfung senkt die Befundzahl, ersetzt den Prüfer nicht (zwei
  Selbstfänge, der Prüfer fand an derselben Stelle den dritten).
- **Rückwärts-Leserichtung — DRITTBELEG der Wirksamkeit (R12-B,
  PB-01/PB-02; Fund der Debrief-Gegenprobe — war zunächst in keinem
  Kanal):** Beide Mittel-Befunde der Kategorie 2 kamen ausschließlich
  aus der RÜCKWÄRTS-Leserichtung; der Prüfer bestätigt ausdrücklich,
  er hätte sie vorwärts vermutlich nicht gefunden. Nach R08
  (Prüfer-Selbstauskunft „Befundtyp wäre komplett ausgefallen") und
  R11 (Kategorie-2-Befunde) der dritte Wirksamkeitsbeleg der
  Pflicht-Kategorie — zusammen mit der R12-Suchraum-Weitung (L-34)
  gilt: Kategorie behalten, Suchraum weiten.
- **Sichtbare Reparaturvermerke — Zweitbeleg als PRÜFER-NUTZEN (R12-B;
  Fund der Debrief-Gegenprobe):** Jede der 12 Reparaturen trug, was
  vorher dastand und warum es fiel — das R7-Muster (CLAUDE.md
  Doku-Hygiene „Reparaturen sichtbar machen") in der zweiten Runde in
  Folge fortgeführt; der Leitsession-Review konnte die Dispositionen
  dadurch ohne Rohbeleg-Neuaufriss am Text nachvollziehen.
- **Grenzfall, bewusst ohne Regel:** Prüferprotokoll-Kopf R12-A zählte
  „zwei" nicht prüfbare Schritte, der eigene Abschnitt listete drei
  (Meldung korrekt: 3) — Einzelfall der „Zahl ohne Zählweg"-Klasse,
  historisches Prüfer-Artefakt nicht editiert, hier vermerkt.
- **Grenze der Beleglage (R12-B-Prüfer, strukturell):** Ein Fehler im
  SINNGEMÄSSEN Entscheide-Protokoll selbst ist für jeden Textprüfer der
  Kette unsichtbar — Dokument, § 11 und Briefing bestätigen einander
  dann gegenseitig. Einzige Prüfinstanz ist der User; die
  ✅-Belegstufe „sinngemäß, Wortlaut nicht archiviert" trägt genau
  diese Grenze und bleibt Pflicht-Bestandteil jedes Vermerks.

## L-36 — Eine Bestandsaussage in neu geschriebenem Text braucht dieselbe Messung wie eine Zahl (R13, 13.08.2026)

**Fall (R13-A, Prüferbefund P-01 — der einzige schwere der Runde):**
Der ✅-AA-6-Kasten trug den Zusatz „Z-4 liegt bei der Zentrale/StB und
ist nicht übergeben" — aus dem Gedächtnis des Bestands geschrieben,
mit einer Fundstelle belegt, die die Aussage nicht trug (§ 10 sagt
„nachrangig — ohne Auslöser"), während **dieselbe Session an drei
anderen Stellen desselben Commits festgestellt hatte, dass genau
dieser Bestand überholt ist** (Z-4 = StB-Frage 13 (b)). Beide Achsen
falsch, in einem Satz, in einem ✅-Kasten.

**Die Klasse:** Nicht Flüchtigkeit — beim Nachtragen von Entscheiden
schreibt man KONTEXT dazu, und der Kontext wird nicht gemessen, weil
der ENTSCHEID gemessen wurde. Der Entscheid hatte Quelle, Datum, Form;
der Nebensatz daneben hatte nichts.

**Handlungskern (CLAUDE.md, Verifikations-Block):** Eine
Bestandsaussage in neu geschriebenem Text braucht dieselbe Messung wie
eine Zahl. Reparaturform war Streichen, nicht Abschwächen (L-17-Linie).

## L-37 — Musterlisten brauchen zwei Achsen; eine ausgewiesene Geltungsgrenze verhindert den Ausfall nicht (R13, 13.08.2026)

**Fall (R13-A, Selbstwiderspruchs-Probe):** Alle acht Probe-Muster
kamen aus den ENTSCHIEDENEN GRÖSSEN („was hat sich geändert?"); der
schwere Fehler saß in einer STATUSAUSSAGE über einen fremden Träger
(„übergeben") — eine Kategorie, die kein Entscheid berührt. Die Probe
schrieb ihre Grenze selbst („eine Abweichung, die keines dieser acht
Wörter enthält, findet sie nicht") und fiel exakt hinein: **ehrlich,
vollständig und nutzlos.** Fünf nachgezogene Muster kosteten einen
Lauf und fanden eine dritte Stelle, die in keinem Prüferbefund stand.

**Handlungskern (CLAUDE.md, Positivkontroll-Block):** Musterlisten von
Selbstwiderspruchs-/Konsequenz-Proben führen ZWEI Achsen (geänderte
Größen + Statusaussagen über fremde Träger); wer eine Geltungsgrenze
benennen kann, kann meist auch das Muster ergänzen — die Grenze ist
ein Arbeitsauftrag, kein Ausweis.

## L-38 — Ein Edit-Anker, der Überschrift oder Folgezeilen-Anfang konsumiert, löscht bzw. zerlegt sie still (R13, 13.08.2026)

**Zwei Sessions unabhängig am selben Tag:** (1) R13-A (P-02): Beim
Voranstellen eines Nachtrags wurde die Kopfkasten-Überschrift der
Preisliste Teil des `old_string` und im Ersetzungstext nicht
wiederhergestellt — die **einzige Löschung der Datei** unter 198
Einfügungen, während der Nachtrag daneben „der Kopfkasten bleibt
unverändert stehen" behauptete; beim selben Handgriff im
Schwesterdokument ging es gut — der Unterschied war Zufall.
(2) R13-B (PB-1): Ein Anker endete mitten in der Kennzeichnungszeile
der Folgetabelle; der Rest klebte als überzählige Tabellenzelle an der
neuen Zeile und **verschwand beim Rendern spurlos** — ein
Vorbehaltssatz, unsichtbar für jede Text-Suche am Quelltext-Muster.

**Handlungskern (CLAUDE.md, Doku-Hygiene):** Anker beim Einfügen vor
Bestandstext so schneiden, dass Überschrift/Folgezeile vollständig
wiederkehren; Nahtstelle danach neu lesen. **Prüf- und Nachweismittel
ist die Löschungszählung** (`git diff --numstat`, jede Löschung
einzeln — auch als Prüfer-Auftrag in der tagesstart-Vorlage): Bei
Hunderten Einfügungen liest niemand die Löschungen, und „0 Löschungen
im Abschnitt" belegt zugleich mechanisch, dass überstimmte Passagen
ungeglättet stehen blieben (AA-8-Empfehlung, vom Prüfer „vorbildlich").

## Sammelvermerk R13 (13.08.2026) — Zweitbelege, Nachträge, bewährte Muster

- **L-26 — zwei Schärfungen + Eigenbeleg der Leitsession:** (1) Regelwerk
  § 12 dokumentierte einen grünen Wächter, den der Prüfstand nicht mehr
  hatte (R13-B, PB-2) — der Stands-Nachtrag am PRÜFGEGENSTAND gehört in
  denselben Zug wie der Edit. (2) Wächter-Baseline VOR den Edits ziehen
  („genau 7 neue Meldungen, alle erklärt"). Eigenbeleg beim Debrief:
  Der eigene § 12-Nachtrag der Leitsession erzeugte prompt ein 145.
  „Zitat" — gefangen nur, weil der Lauf im selben Zug lief.
- **L-05 — fünfter Beleg mit neuer Facette (R13-A):** Push im
  Bash-Kanal zweimal blockiert (auch als ZERLEGTER Einzelbefehl —
  anders als im R3-Fall half das Zerlegen nicht); identischer Befehl
  lief Sekunden später im PowerShell-Kanal. A/B trägt weiter nur die
  Falsifikation; neu ist die Enge des Abstands (Sekunden statt
  Stunden). Regel unverändert: Kanalwechsel ist legitimer Versuch,
  kein Mechanismus.
- **L-35 — vierter Fall, neue Facette GEERBTE Kollision (R13-B):** Die
  Bau-Pflichten-Serie B-1…B-8 (O-8 § 10) kollidiert mit der
  Leitsession-Befundserie B-x im Regelwerk — die Kollision stammte aus
  den QUELLEN, nicht aus der Vergabe; der Kollisions-Grep vor der
  ID-Vergabe (R-B10/R-B11, Positivkontrolle „R-B1" 5 Treffer) fand sie
  mit. Namensraum-Hinweis im § 3-Index-Kasten gesetzt.
- **Bestandsangaben im Prompt — Zweitbeleg, diesmal NEU geschrieben
  (Leitsession):** Die R13-B-Prompt-Angabe „Verschärfung seit R9 in
  § 0/§ 3" war ungemessen (real nur § 3) — die R11-Lehre galt geerbten
  Prognose-Texten, der Fall zeigt: auch frisch formulierte
  Bestandsangaben im Prompt sind Messpflicht. Gefangen von der
  Arbeits-Session per grep.
- **Belegstufen-Facetten (R13-A):** ④-Marke am Satzende deckt die
  PRÄMISSE nicht (P-06 — Mengenaussage „ganz überwiegend" ohne Zählweg,
  Richtung nicht eigennützig und gerade darum unverdächtig; Klasse
  „Status erbt von der schwächsten Prämisse") · Klammern in fremden
  Protokollen sind Zitat-UMGEBUNG, nicht Zitatinhalt („ausdrücklich
  mitentschieden" behauptete mehr, als die Quelle trennt; P-05) ·
  Leseweg ≠ Quellenart erneut belegt (P-04: „selbst gelesen" hob ② auf
  ① — die Zwei-Achsen-Regel des quellen-beschaffung-Bausteins griff
  beim Disponieren).
- **Werkzeug-Zweitbelege:** case-sensitives Muster verfehlt Komposita
  („Paket" fand „Leistungspakete" nicht — heyPensio-R35-Klasse, erneut;
  aufgefallen an einer Zahl, die nicht sein KONNTE) · `Measure-Object
  -Line` (594 statt ~880, R13-B, vor der Verwendung verworfen) ·
  **NEU: `cmd /c "… %ERRORLEVEL%"` expandiert beim Parsen** und meldet
  den Exit-Code von VOR dem Lauf (Leitsession, beim Nachmessen des
  Wächters — Ausgabe zeigte 7 Fehlende, „Exit" 0; jetzt
  windows-powershell-Baustein).
- **Bewährte Muster (je mit Beleg):** ⭐ **Wo das Protokoll schweigt,
  ist „offen" der Eintrag — und die RANDFRAGE ist wertvoller als die
  Antwort** (R13-A: drei AA-8-Randfragen, AA-3-Unschärfe und der
  bewusst NICHT angelegte S4-Platzhalter machen sichtbar, was der
  Entscheid nicht mitentschieden hat; vom Prüfer als „korrekt und
  ehrlich" bestätigt — Fund der Debrief-Gegenprobe, war zunächst in
  keinem Kanal) · Reparatur-Unterkästen zahlen sich im SELBEN Lauf aus
  (R13-A: beim Nachziehen des übergeben-Musters war sofort
  unterscheidbar, welche der 10 Fundstellen Reparaturtext und welche
  ungeprüfter Bestand war — neuer Nutzen-Beleg der R7-Regel
  „Reparaturen sichtbar machen"; ebenfalls Gegenprobe-Fund) ·
  Löschungszählung als
  Prüfer-Auftrag (P-02 nur so gefunden; „der Kategorien-Hinweis hat
  gearbeitet, nicht ich") · Prüfraum > Prüfgegenstand — vierter
  Wirksamkeitsbeleg, erstmals mit Fund VOLLSTÄNDIG außerhalb beider
  Prüfdateien (P-08) · überstimmten Vorschlag stehen lassen, Beleg ist
  die Löschungszahl (AA-8, „vorbildlich") · Wächter-Baseline vorher
  (R13-B) · eigenes Gegenprobe-Skript mit Verfälschungs-Gegenproben
  fing eigenen Quellverweis-Fehler VOR dem Commit (R13-B) ·
  git-show-Prüfstand störungsfrei neben paralleler Session
  (Zweitbeleg) · fetch-vor-Rebase (heyPensio-R40-Regel) noch am
  Debrief-Abend erstmals angewendet (0 eingehend, Rebase entfiel).
- **Codex-Eignungs-Ausweis (Briefing Nachtrag 2, User-Fang — als
  Klasse geführt):** Die Regel stand im Command und griff nicht, weil
  der Auftrag fertig aus dem Briefing kam und Schritt 4 („Neue Runde
  vorschlagen") übersprungen wirkte — **Formatfrage, nicht
  Wissensfrage**: Eine Prüfpflicht ohne Format-Träger (Pflichtzeile/
  Spalte, deren FEHLEN sichtbar ist) fällt unter Last durch. R13 trug
  die Spalte je Strang; die tagesstart-Verschärfung (Prüfpflicht auch
  bei Briefing-gelieferten Aufträgen + Pflichtzeile) hat die ZENTRALE
  als Blueprint-Rückfluss angekündigt (Nachtrag 2) — beim nächsten
  Nachzug prüfen, ob sie angekommen ist, sonst selbst nachziehen.
- **Grenzfall, bewusst ohne eigenen Kanal:** Die R13-A-Prüfer-Grenze
  „Belegstufe sinngemäß strukturell nicht prüfbar" ist die bekannte
  R12-Grenze (Sammelvermerk R12, letzter Punkt) — neu ist nur ihre
  Eskalation als Nebenbefund R13A-N-6 an die Zentrale (Postkorb,
  Wortlaut-Archivierung künftiger Entscheide-Erhebungen).

## L-39 — Ein präzises Negativ wird zur falschen Verallgemeinerung (R14, 13.08.2026)

**Fall (R14-B, Prüferbefund PB-1 — der schwerste der Runde):** Die
gemessene Zahl „§ 7 UWG = 0" ist richtig; aus ihr wurde in A7 der
Rechtsmatrix „untersagt — gestützt **ausschließlich** auf die DSGVO".
Dasselbe Urteil trägt 148 UWG-Treffer (davon 21× § 3a UWG) und bejaht
die lauterkeitsrechtliche Schiene ausdrücklich (Rn. 137). Verschärfend:
Die Session hatte GENAU diesen Satz angefasst (N-13-Zählweg-Nachtrag
sitzt darin), ohne die Reichweitenaussage daneben gegen den eigenen
neuen Teil-B-Text zu lesen. Der Schnitt eines byte-genauen Zitats am
Satzpunkt (Rn. 88) verbarg zusätzlich den Gegenbeleg (PB-2) — gefunden
nur durch Lesen des Rn.-Blocks am Stück, nicht per Ziel-Grep.

**Handlungskern (CLAUDE.md, Positivkontroll-Block + (f)):** Ein
präzises Negativ („X = 0") belegt nie die Verallgemeinerung („kein Y");
wer eine Bestandsstelle anfasst, liest den ganzen Satz gegen den
eigenen neuen Bestand; Zitat-Nachprüfung liest den Absatz-/Rn.-Block am
Stück.

## L-40 — Wächter-Entwarnung über die eigene Arbeit: Konstanten lesen, Delta je Datei zuordnen, wandernder Stand (R14, 13.08.2026)

**Fall (beide Sessions unabhängig, dieselbe Halbfrage):** Der
Zitat-Wächter meldete beiden Sessions Exit 0. **R14-B (PB-5):** Von
~20 neu gesetzten Zitaten hatte der Wächter kein einziges gelesen —
`fund/wettbewerbsbild.md` steht in keiner Liste, die Rechtsmatrix nur
im POOL (Quelle, nicht Prüfgegenstand); „0 neue Meldungen" war eine
Nicht-Messung. **R14-A (PR-01, schwer):** schrieb „meine drei Dokumente
liegen im Quellenpool" ohne die Konstante je gelesen zu haben, und
erklärte das Pool-Delta (+13.847) als Wirkung der eigenen Arbeit — es
stammte VOLLSTÄNDIG aus der Datei der Parallel-Session (fremde Arbeit
als Beleg der eigenen; L-36-Klasse). Dazu: Der Wächter liest den
ARBEITSBAUM — im Parallelbetrieb ein wandernder Stand; der
„Nachher"-Wert maß einen Zwischenstand fremder Arbeit.

**Handlungskern (CLAUDE.md, Anwesenheit-ist-nicht-Wirksamkeit-Block):**
Wächter-Entwarnung über eigene Arbeit nur nach Lektüre der
ZIEL-/POOL-Konstanten; Lauf-Delta je Datei zuordnen; im Parallelbetrieb
gilt der Doppel-Messstand-Vertrag auch für Werkzeugläufe.
**Werkzeug-Folgeposten:** ZIEL-Aufnahme von Rechtsmatrix +
Wettbewerbsbild in `pruefe-zitate.js` (R14B-N-9, offen).

## L-41 — Formfehler-Klassen haben Nachbarformen; der Nenner wird gleich gebunden (R14, 13.08.2026)

**Fall (R14-A, PR-02 schwer + PR-11):** Die Hebungs-Suche fand die
UMBRUCH-Variante der Belegstufen-Phrase selbst (drei verdeckte
Vorkommen) — und verfehlte die WORT-Variante derselben Phrase („der
Wortlaut IST nicht archiviert", „der USER-Wortlaut …"): zwei Stellen,
darunter der Kopfkasten (Ankunftsstelle des Lesers) mit einem Satz, der
der eigenen Hebung widersprach. Zweite Ursache: Der Nenner hing bei
einer Datei am ABSCHNITT, bei zweien am DOKUMENT (L-30-Klasse) — genau
die inkonsistente Datei verlor ihre wichtigste Stelle. Bewährt daneben
(R14-A selbst): Die URSACHEN-DIAGNOSE des Prüferbefunds als Klasse auf
alle drei Dateien angewandt fand eine zweite Stelle, die der Befund
nicht nannte.

**Handlungskern (CLAUDE.md, Positivkontroll-Block + (a)):** Wer eine
Formfehler-Klasse findet, sucht im selben Zug die Nachbarformen
(Umbruch-, Wort-, Groß-Variante); Nenner gleichartiger Prüfgegenstände
ans Dokument binden; Prüfer-Diagnosen als Klasse rückwirkend anwenden.

## L-42 — Abschlussprotokolle sind Quellen zweiter Hand: Befunde am Rohbeleg gegenprüfen, nicht übertragen (R14, 13.08.2026)

**Fall (R14-B, Pflege-Auftrag „belegte Befunde übertragen"):** 3 von 10
Quell-Befunden aus eigenen früheren Abschlussmeldungen hielten der
Rohbeleg-Messung nicht stand — alle drei Korrekturen in die unbequemere
Richtung: die 5-%-Kommission stand NICHT in den AGB (nur auf der
Werbeseite), der melevo-Anschriften-Widerspruch lag in DERSELBEN Datei,
und „ob die Zusatzposten neu sind: nicht feststellbar" war WIDERLEGT —
der Vorher-Abzug lag seit dem 09.08. im Rohbelege-Ordner einer FRÜHEREN
Runde (`a3/`-Unterordner; die nicht-rekursive Suche hätte ihn verfehlt).
Der Prüfer bestätigte alle drei Korrekturen unabhängig.

**Handlungskern (CLAUDE.md (a) + quellen-beschaffung-Baustein +
tagesstart):** Einarbeitungs-/Übertragungs-Aufträge verpflichten auf
Rohbeleg-Gegenprüfung je Befund; beim Vergleich zweier Erhebungsstände
ist der ÄLTERE Rohbelege-Ordner die systematisch übersehene Quelle
(rekursive Vollsuche über den ganzen Bestand); ein Umkehrschluss aus
einer Abwesenheit (fehlendes Sternchen) ist eine eigene Ableitung,
keine Quellenaussage.

## Sammelvermerk R14 (13.08.2026) — Zweitbelege, Nachträge, bewährte Muster

- **L-37 — stärkster Wirksamkeitsbeleg bisher (R14-A):** Die zweite
  Musterachse (Statusaussagen über fremde Träger) lieferte den EINZIGEN
  Sachfang der Probe — die Stelle trug den Suchbegriff „Z-6" gar nicht
  („K03/K04"-Klammer); keine noch so gründliche Erstachsen-Suche hätte
  sie gefunden. Dazu PR-08 als L-37-Klassenfall: „K03 erledigt" war
  eine Statusaussage über einen fremden Träger ohne Vollzugsbeleg.
- **L-05 — sechster Beleg (R14-A):** Push in BEIDEN Kanälen blockiert,
  Minuten später unverändert in PowerShell durch. Zeitpunkt-, nicht
  kanalgebunden; Regel unverändert.
- **L-17-Zweitbeleg (R14-B, PB-3):** Die Schlusssatz-Entwarnung „an
  unseren Bau-Pflichten ändert der Streitstand nichts" wurde GESTRICHEN,
  nicht abgeschwächt — sie war zugleich neue Rechtsbewertung und vom
  eigenen Kasten widerlegt. Der gefährlichste Satz eines
  vorbehaltstreuen Kastens ist sein Schlusssatz.
- **Positivkontroll-Zweitbelege (beide „Regel stand wörtlich, griff
  nicht beim Schreiben"):** case-insensitive Kontrolle (35) beglaubigte
  ein case-sensitives Negativ nicht (PB-4 — Suchmechanik-Regel);
  nicht-rekursives `ls` hätte „kein Vorher-Abzug" erzeugt
  (windows-powershell-Regel, wörtlich im Baustein). Beide von
  Prüfer/Session selbst gefangen. Dazu Teilwort-Treffer „950" in
  „1.950" — im selben Dokument, das die Teilwort-Klasse bei
  „Verbraucher" vorbildlich auswies.
- **Prüfer-Verwerfung braucht eigene Nachmessung (R14-A, PR-05):**
  „Unter keinem Zählweg reproduzierbar" war selbst ein Negativ mit zu
  engem Suchraum — beide Zahlen reproduzierten exakt unter dem
  Session-Muster (Leitsession-Drittmessung: 39/34/33 bestätigt); der
  KERN (Zählweg fehlte an der Zahl) blieb berechtigt. Befund und
  Diagnose getrennt — auch in der Verwerfungs-Richtung.
- **Vorfahren-Regel, beide Richtungen an einem Abend, sauber:** R14-B
  hielt zwei Commits zurück (ungepushter R14-A-Commit als Vorfahre) und
  delegierte die Auflösung SCHRIFTLICH in der Abschlussmeldung; R14-A
  pushte auf dieser dokumentierten Willenserklärung (kein
  Indizienschluss, Regel-3a-konform) und veröffentlichte beide mit.
- **Bewährte Muster (je mit Beleg):** Zeiger-Modell mit Wurzel-Kasten
  bei 28 Fundstellen in drei Dokumenten (R14-A, vom Prüfer bestätigt) ·
  Grenzen im selben Satz wie die Entlastung (R40-N-6: „nirgends über
  ihren Wortlaut hinaus verwendet") · Belegstufen-Hebung belegt auch
  das SCHWEIGEN des Protokolls (S2/S4, AA-8-Randfragen — Archiv
  rückwärts lesen, R40-Regel-Zweitbeleg) · Wächter-Baseline vorher
  (R14-B; Grenze ehrlich: die Baseline bleibt Selbstauskunft, der
  Prüfer konnte sie nicht reproduzieren) · Reparatur-Kästen machten
  alle 26 Löschungen erklärbar (R14-B) · Prüfer-Selbstfragen ehrlich
  beantwortet: der jeweils schwerste Fund hing am Kategorien-Hinweis
  (beide Sessions) · **Nachtrags-Ankunft am Repo-Bestand MESSEN**
  (Leitsession beim `/runde`-Einstieg: grep auf Nachtrags-Kerne +
  Positivkontrolle fand drei nicht disponierte Briefing-Nachträge —
  der R13-Debrief-Commit lag 2 Minuten NACH dem letzten Nachtrag).
- **PowerShell-Zweitbelege (R14-A):** `Select-Object -First` hinter
  `git show` bricht die Pipe (Exit 255) · unmaskiertes `|` in
  Tabellenzelle — beide Regeln standen im Baustein, beide selbst
  gefangen.
- **Vorwärtsverweis-Konvention — Zweitbeleg mit Suchweg-Facette
  (R14-B):** Zwei Kopf-Aussagen („Teil A inhaltlich unverändert")
  wären durch die eigenen Edits still falsch geworden; gefunden hat sie
  ein grep auf die **eigene Behauptung**, nicht auf das Thema (die
  CLAUDE.md-Regel sagt „nach den GEKIPPTEN WERTEN greppen, nicht nach
  dem Thema" — der Suchweg „eigene Behauptung" ist die operative Form
  davon). Dieselbe Klasse traf die Session an einer Stelle, an der sie
  die Regel NICHT ausführte (PB-1, s. L-39): **die Regel greift nur,
  wo man sie anwendet.**
- **Debrief-Gegenprobe R14 (Subagent, 58 Positionen):** **1 volle
  Lücke + 6 Teil-Lücken gefunden und geschlossen** — R14A-N-5
  (Expertenprogramm + O-11) war in keinem Kanal (jetzt § 5 geparkt, mit
  Zielorten) · R14A-N-1 (AU-4 fehlt im Formulierungsvorschlag) hatte
  keinen Übergabe-Träger an heypensio · § 3a-UWG-Streitstand,
  melevo-10-€-Achse, acht unausgewertete melevo-Abzüge,
  Straiv-Preishöhen standen nur im Sachdokument, nicht im
  Wahrheits-Kanal · der Vorwärtsverweis-Zweitbeleg oben fehlte im
  Sammelvermerk. **Facette für die Zukunft:** Vier der sechs
  Teil-Lücken waren „im Sachdokument dokumentiert, im Wahrheits-Kanal
  unsichtbar" — der gemeldete TRÄGER (MKT-FUND, anwaltlicher Rat) wird
  aber über STATUS/Projektquelle angesteuert, nicht über das
  Sachdokument. Zusätzlich fand die Gegenprobe eine Doku-Hygiene-Lücke:
  MKT-HANDEL bekam einen R14-Stand, FUND3 nicht — nachgezogen.

---

## L-43 — Eine Positivkontrolle spiegelt die Suchmechanik nur, wenn sie dieselbe ZEICHENKLASSE und denselben KANAL prüft (R15, 14.08.2026)

**Fall 1 (R15-A, UWG-Extraktion):** Der erste Lauf dekodierte nur benannte
HTML-Entities (`&auml;`), nicht die numerischen (`&#167;`, `&#228;`,
`&#160;`), die gesetze-im-internet.de durchgängig verwendet. Ergebnis:
„§ 3a" = **0** Treffer, „§ 13" = **0** — während die Kontrollen
„Rechtsbruch" = 1 und „Marktteilnehmer" = 22 sauber durchliefen. **Die
Kontrollen bestanden aus reinen Buchstaben; das Negativ hing am
`§`-Zeichen.** Aufgefallen nur, weil die Null direkt neben der
Überschrift des gesuchten Paragraphen stand.

**Fall 2 (R15-A, DSK-Tabelle, vom Prüfer gefunden):** `Direktwerbung` = 21
unter einem als **case-insensitiv** deklarierten Zählweg — richtig sind
26 (fünf Versalien-Treffer im Inhaltsverzeichnis). Das Bittere: **keine**
der drei Positivkontrollen hätte den Fehler finden können, weil alle drei
in beiden Groß-/Kleinkanälen dieselbe Zahl liefern. Reparatur:
Kontrollpaar cs=21 / ci=26.

**Fall 3 (R15-A, eigene Klasse):** Zwei Absätze nach der eigenen Warnung
vor Tippfehler-Varianten („Artt.", „Mittbewerbern") zählte dieselbe
Session „Mitbewerber" mit einem Muster, das genau die Tippfehlerform
übersieht (8 statt 9). **Bei einem Negativ ist eine untererfassende
Stammsuche das falsche Werkzeug.**

**Fall 4 (R15-C, CRLF):** Derselbe Git-Blob lieferte im LF-Arbeitsbaum
143, im CRLF-Archiv 144 Treffer — `\r` zählte gegen die
25-Zeichen-Schwelle mit.

**Handlungskern (CLAUDE.md, Positivkontroll-Block):** Der
Kontrollkandidat trägt die **Zeichenklasse** des Musters (`§`, Umlaut,
Ziffer) und hat **je Kanal einen VERSCHIEDENEN Sollwert** (cs ≠ ci);
Kontrollen, die in beiden Kanälen dieselbe Zahl liefern, prüfen den Kanal
nicht. Erweitert die Regel „der stärkste Kontrollbegriff spiegelt die
SUCHMECHANIK" (Sammelvermerk R3) um die beiden Achsen, an denen sie in
R15 dreifach ausfiel.

---

## L-44 — Personenbezogene Daten gehören NIE in eine versionierte Repo-Datei: die Git-Historie ist unwiderruflich (R15, 14.08.2026)

**Fall (R15-E, schwerster Prüferbefund der Runde, PE-5):** Die Erstfassung
der Sperrdatei-Struktur stellte in § 9 eine **Markdown-Tabelle im Repo**
als Erstform für den Sperrbestand bereit — gegen `interessenabwaegung-o8`
§ 8 lit. g und Regelwerk § 11, die beide eine andere Ablage vorschreiben.
Wer der Anleitung gefolgt wäre, hätte **personenbezogene Daten
unwiderruflich in die Git-Historie committet**. Die vorhandenen Gates
hätten es nicht verhindert, weil ein Sperrfall **ohne Versand** entsteht
— also vor jedem Gate. Ersatzlos entfernt.

**Warum es passierte (Diagnose der Session):** Die Ablageregel stand in
der **TOM-Zeile** der Quelle und wurde als VVT-Zulieferung an MKT-OPS
gelesen — als Aussage über ein anderes Dokument, nicht als Vorgabe an das
eigene Werkzeug.

**Handlungskern (CLAUDE.md, Sicherheits-Regeln):** Wer ein
Betriebswerkzeug baut, liest die TOM-/Ablage-Zeile der Quelle als
Anforderung **an sich selbst**, nicht als Zulieferung an einen anderen
Strang. Personenbezogene Daten nie als Repo-Datei — `sensibel/` oder
externer Träger; ein Löschen repariert die Historie nicht. Und: Ein Gate
schützt nur den Pfad, auf dem es liegt — prüfen, ob der Fall auch
**davor** entstehen kann.

---

## L-45 — Die VERBOTS-Behauptung ist das Spiegelbild der Entwarnung — und die Entwarnung über die EIGENE HANDLUNG ist die unauffälligste Form (R15, 14.08.2026)

**Fall 1 (R15-B, F-10):** „verstößt gegen die Auflage" / „wäre
lizenzwidrig" fühlt sich sicher an, **weil es streng ist**, und entgeht
deshalb der Belegstufen-Prüfung, die jede entlastende Aussage durchläuft
— in einem Abschnitt, der sonst sorgfältig mit Belegstufen markiert ist.
Die Belegpflicht kennt keine Richtung: Wer ein Verbot behauptet,
behauptet eine Rechtsfolge.

**Fall 2 (R15-B, F-7):** „Das ist eine Feststellung des Bestands, keine
neue Sperre dieser Session" — während zwei Absätze darüber steht, dass
die Gate-Kette der neue Schritt ist. **Diese Form entlastet nicht die
Sache, sondern die SESSION vom Vorwurf, im Alleingang festgelegt zu
haben**, und ist deshalb schwerer zu bemerken als eine sachliche
Entwarnung.

**Handlungskern (CLAUDE.md, Entwarnungs-Block):** Die Belegpflicht der
Entwarnung gilt spiegelbildlich für **Verbots-/Unzulässigkeits-Aussagen**
(sie klingen streng und rutschen genau deshalb durch) und für
**Entwarnungen über die eigene Handlung** („war schon so", „keine neue
Festlegung") — letztere gegen das eigene Delta derselben Arbeit prüfen,
nicht gegen die Erinnerung.

---

## L-46 — Eine Rollenzuschreibung ist eine Bestandsaussage (R15, 14.08.2026)

**Fall (R15-A, Selbstfund vor dem Versand):** Im Anwalts-Briefing stand
„Der Geschäftsführer hat sich entschieden". Der Bestand sagt „der **User**
hat sich entschieden"; dass er Geschäftsführer ist, steht **nirgends
belegt** — und die Firma ist in Gründung. In einem Dokument an einen
Anwalt wäre das eine **erfundene Organstellung** gewesen. Ersetzt durch
„Wir haben uns … entschieden".

**Handlungskern (CLAUDE.md, aussenwirksame Texte / Belegpflicht):**
Funktions- und Organbezeichnungen (Geschäftsführer, Inhaber,
Bevollmächtigter) sind belegpflichtige Bestandsaussagen wie Zahlen — im
Zweifel die handelnde Person neutral benennen („wir", „der Auftraggeber").
Gilt verschärft bei Gesellschaften in Gründung.

---

## L-47 — Der Vorbehalt fällt im TABELLENKOPF, nicht in den Zellen (R15, 14.08.2026)

**Fall (R15-B, schwerer Prüferbefund F-1):** Beim Übernehmen einer
Quell-Tabelle werden die **Zellen** byte-treu kopiert und der **Kopf** neu
formuliert — genau dort ging der Vorbehalt „alle Stufe E" verloren. Die
Verdichtungs-Regel („Vorbehalt zuerst übernehmen, dann den Satz bauen")
war bisher auf Fließtext gemünzt; **im Tabellenkopf ist der Ausfall
unauffälliger, weil daneben lauter byte-treue Zellen stehen und
Sorgfalt signalisieren.**

**Handlungskern (CLAUDE.md, Verdichten-Block):** Beim Übernehmen von
Tabellen wird der KOPF wie ein Zitat behandelt (Vorbehalt/Belegstufe
zuerst übernehmen) — byte-treue Zellen sind kein Beleg für einen
korrekten Kopf.

---

## L-48 — Die „nicht prüfbar"-Liste des Prüfers ist ein ARBEITSAUFTRAG, keine Einschränkung (R15, 14.08.2026)

**Fall 1 (R15-B, produktivste Zeile der Runde):** Der Prüfer wies § 3.2
der Quelle als **ungelesen** aus und sagte voraus, dass dort weitere
Belegstufen-Differenzen liegen könnten. Genau dort lagen **drei** Funde:
die `Termination`-Klausel (mildert ein Gate — ein Auslegungsirrtum ist
rückwirkend binnen 30 Tagen heilbar), der L-3-Wortlaut (löst einen Befund
am Primärtext auf) und die `You`/`Use`-Definitionen. **Der Prüfer hat
damit mehr geliefert als seine 18 Befunde.**

**Fall 2 (R15-E):** Der Prüfer schlüsselte selbst auf, welcher Befund
welcher Auftragsvorgabe zu verdanken war: der schwerste allein der
Kategorie-B-Frage, der zweitschwerste allein der
Ganzes-Dokument-Leseraum-Auflage. **Beide Vorgaben zusammen, nicht die
eine statt der anderen.**

**Handlungskern (CLAUDE.md, Prüfer-/Subagenten-Block):** Der Abschnitt
„nicht erhoben / nicht prüfbar" des Prüfers wird als erste
Nacharbeits-Liste gelesen, nicht als Haftungsausschluss — er benennt
Fundorte, keine Grenzen. Ergänzt „‚Nicht prüfbar' ist ein eigenes
Ergebnis" um die Handlungsseite.

---

## Sammelvermerk R15 (14.08.2026) — Zweitbelege, gedeckte Muster und die Nachträge der Debrief-Gegenprobe

**Nenner:** 58 gemeldete Learnings aus fünf Arbeits-Sessions (Fallen +
bewährte Muster) · **14 als neue Lehren** zurückgeschrieben (L-43…L-48 +
L-39-Schärfung) · **32 gedeckt** durch Bestandsregeln (unten
kategorienweise, das ist ihre Disposition) · **12 waren zunächst NICHT
disponiert** — gefunden von der Debrief-Gegenprobe, hier nachgetragen.

### Gedeckte Zweitbelege (32) — keine neue Regel, aber belegte Wiederholung

- **L-40** (wandernder Messstand): R15-A F7 · R15-C F3 · R15-E M5 —
  dreifach in einer Runde. Der Arbeitsbaum bewegte sich in ALLEN
  parallelen Strängen; R15-C rekonstruierte 25 fremde Funde aus dem
  eigenen Delta heraus.
- **L-21** (Selbsttest erbt Blindstellen): R15-C F4/F5.
- **L-26** (Reparaturvermerk färbt den Wächter): R15-C M1 · R15-E F6 —
  R15-E reparierte an der EIGENEN Seite statt über die Ausnahmeliste,
  weil ein Pool-Zitat nie vorlag. Vorbildliche Anwendung.
- **L-34** (Quellverweis verengt den Leseraum): R15-E F3 — erstmals aus
  der **Bau**-Richtung belegt; der Prüfer fand die 300er-Schwelle nur
  über die Ganzes-Dokument-Auflage („sonst hätte ich dort aufgehört, wo
  die Prüflinge aufgehört haben").
- **L-35** (Kurz-ID greppen, zuerst im eigenen Dokument): R15-B F3
  (vierte Reproduktion) · R15-E M2.
- **L-42** (Quellen zweiter Hand): R15-A M3 · R15-B F2.
- **quellen-beschaffung P5/P6** (Schweigen ≠ Gegenregel · rekursiver
  Bestand): R15-D Nr. 7 + Nr. 8 — beide R14-Lehren trugen in R15 sofort.
- **Zählschlüssel** (Eintrag ≠ Datei ≠ Quelle): R15-D Nr. 6 — „19 − 8"
  wäre ein falscher Nenner gewesen.
- Ferner gedeckt: Agent je Quelldokument (R15-A M1) · eigener
  Quellen-Anker vor dem Fan-out (R15-A M2) · Prämissen-Regel (R15-B M2) ·
  Heredoc/Backslash (R15-B F7) · Doku-Hygiene sichtbare Reparaturen
  (R15-B M4) · Probe nach der Reparatur erneut (R15-B M5) · leerer
  Zustand (R15-E M7) · Platzhalter statt Erfindung (R15-E M6) ·
  Werkzeug-vor-System (R15-E F7).

### Nachträge der Gegenprobe — 8 Kerne, die zunächst durchfielen

1. **Eine Datei in ZIEL und POOL bestätigt sich selbst** (R15-C F1).
   Reichweiten-Erweiterung durch bloßes Anhängen an beide Arrays macht
   den neuen Kanal **grün und blind** — der Vergleich braucht den
   Selbstausschluss je Zieldatei. Das ist die URSACHE der
   Scheinentwarnung, die diese Runde aufgedeckt hat. → CLAUDE.md,
   Wächter-Block (neben L-21).
2. **Eine Verfahrens-Positivkontrolle altert mit ihrem KORPUS**
   (R15-D Nr. 3). Der frühere Prüflauf deckte 1.055 Zeilen, das Papier
   hat heute 1.454; seine Kontrolle belegt die Fehlerklasse „erfundene
   Einfügung", **nicht die Vollständigkeit eines späteren Rückbaus** —
   und genau dort saßen die beiden einzigen Abweichungen der Runde
   (Q13/W10). Unterscheidet sich von „Anker im stabilen Teil"
   (Sammelvermerk R9): dort wandert der Anker, hier wächst der Prüfraum.
   → CLAUDE.md, Positivkontroll-Block.
3. **Zwei Nenner bei der Löschungszählung** (R15-B M6): gegen den
   **Rundenstart** (0 = beweist „kein Bestandstext angetastet") UND gegen
   den **Bau-Commit** (45 = eigene Reparaturen). Ein einzelner Nenner
   verschweigt entweder Arbeit oder suggeriert Löschungen an fremdem
   Text. → Schärft L-38.
4. **Verwendete IDs gegen definierte IDs zählen** (R15-E M3): eine
   Kontrolle, die fehlschlagen KANN (43 = 43, lückenlos) — nach einer
   Umnummerierung über vier Blöcke der einzige belastbare Beleg, dass
   kein Verweis verwaist. → Nachsorge-Pflicht an L-35.
5. **Praktische Schutzmaßnahme ≠ Quellenwortlaut** (R15-D Nr. 5): Eigene
   Vorsichts-/Nachweisregeln können vernünftig sein — **gerade deshalb
   müssen sie als eigene Gestaltung gekennzeichnet werden statt als
   Anbieter-Wortlaut**, sonst wird eine Übergabepflicht still als
   materielle Erlaubnis gelesen („Notices ist keine Erlaubnisklausel",
   Nr. 4). Gegenrichtung zu „Selbstauskünfte kennzeichnen".
6. **Ein Parser-Erfolg ist keine visuelle Freigabe** (R15-C F6):
   Balanciertes HTML belegt die Struktur, nicht Viewer-CSS,
   Seitenumbruch, Lesbarkeit. Ergänzt die Generator-Ketten-Regel
   (heyPensio R36) um die Darstellungs-Achse.
7. **Texttreue-Nenner ≠ Auslegungs-Nenner** (R15-D Nr. 1): „28/30 Zitate
   bestätigt" neben „4/13 Auslegungen nur teilweise" sind zwei Achsen mit
   getrennter Berichtspflicht — die Zitate können fast vollständig
   stimmen und die daraus gezogenen Regeln den Wortlaut dennoch
   überdehnen. Nachbar von L-27.
8. **Der Superlativ ist die Stelle, an der die Quelle geprüft gehört —
   nicht der Anführungsstrich** (R15-B F2, Restkern): Die
   Rohbeleg-Gegenprüfung lief bei AU-1…AU-4, aber **nicht** beim Satz
   ÜBER O-2, weil er wie eine Einordnung aussah statt wie ein Zitat.
   Trigger-Schärfung zu L-33/L-42.

### Zwei Korrekturen an BESTEHENDEN Registereinträgen

- **L-24 eingeschränkt** (R15-E F5, am eigenen Objekt belegt): L-24 führt
  „Summenprobe ohne Rest" als STARKE Kontrollform. **Sie ist an der
  EINSTUFUNGS-Achse blind:** „2+4+1=7" kann bei sieben Zeilen in drei
  Kategorien nie anders ausfallen — sie fängt eine vergessene Zeile, eine
  **Fehleinstufung** nie. Die Einschränkung gehört an die Quelle L-24,
  nicht nur in L-30 (Doku-Hygiene: Quelle schärfen → Ableitung nachziehen).
- **L-38 erweitert** um den Zwei-Nenner-Kern (s. Nachtrag 3).

### Werkzeug-Nachträge (Baustein `windows-powershell`, via Master)

- **Umlaut-Zählung vor und nach jedem `sed`** — billigste Absicherung
  gegen Encoding-Schaden bei Massenersetzungen (R15-E M4, real angewandt:
  779/414 vorher = nachher).
- **`git ls-files --eol` ist der belastbare Zeilenenden-Messweg** — eine
  CRLF-Messung meldete „432 Zeilen mit CR" bei einer 432-Zeilen-Datei
  (degeneriertes Muster; Zahl, die nicht passen kann → erst das Werkzeug
  verdächtigen). R15-E F7.
- **Python ist auf diesem Rechner NICHT verfügbar** (R15-B F7).

### Prozess-Befund über den Debrief selbst

Die Gegenprobe fand **12 nicht disponierte Learnings und 31
Nebenbefunde ohne Routing-Nachweis** (Zählweg: `grep -o "R15[A-E]-N-[0-9]*"`
außerhalb der Abschlussmeldungen → 0; Positivkontrolle mit
`R14[AB]-N-[0-9]*` → 14 Dateien). **Der Ausfall lag nicht am Einzelfall,
sondern an der Reihenfolge:** Phase 3 (Lehren) lief vor Phase 4b
(Wahrheits-Kanal), und die Nebenbefunde hängen an 4b. Konsequenz für den
nächsten Debrief: **Block 3 und Block 4 in EINEM Durchgang je Meldung
abarbeiten**, nicht blockweise über alle Meldungen — sonst überlebt Block
3 die Phase, in der er hätte geroutet werden müssen.

## L-49 — Die frisch gelernte Regel schützt den Text, auf den man sie ANWENDET — nicht den, den man dabei SCHREIBT (R16, 17.08.2026)

**Fall (R16-A, Ben Beckman, vom eigenen Prüfer gefunden, S-2):** Der
Auftrag hieß, R15A-N-1 zu reparieren — „weicht ab" ist schärfer als die
konditionale Quelle (Rn. 79 „sollten … könnte nicht gefolgt werden").
Die Session reparierte das in einem Reparatur-Kasten korrekt und schrieb
**90 Zeilen tiefer im selben Commit**, das LG „weiche ausdrücklich ab"
von der „ständigen Rechtsprechung" des OLG — wo die Quelle „**verbleibt**
die Kammer" sagt und die „ständige Rechtsprechung" als **Vortrag der
Beklagten** in Anführungszeichen führt (Rn. 43). Zwei Fehler in einem
Satz, beide derselben Klasse wie der reparierte. **Der Unterschied: dort
stand die Klasse in einem Zitat, hier im Fließtext daneben — und der
Zitat-Wächter meldete 17/17.**

**Warum die Klasse zäh ist:** Wer eine Regel gerade anwendet, hält sich
für geschützt; die Aufmerksamkeit liegt auf dem reparierten Satz, nicht
auf der eigenen Begründung. Zweiter Fall derselben Runde (R16-A, F-4): das
eigene Rn.-79-Zitat trug einen künstlichen Satzabschluss (Doppelpunkt vor
dem Literaturbeleg) — genau L-39, die die Session in Teil 1 anwenden
sollte.

**Handlungskern (CLAUDE.md, ersetzt den Kern „frisch geschriebene Regel
schützt nur künftigen Code"):** Der Bestand wird gegen die neue Regel
durchsucht — **und der eigene Reparatur-/Begründungstext im selben Commit
zuerst.** Prüffrage jeder Reparatur-Session: „Habe ich meine eigene
Reparaturbegründung gegen dieselbe Regel gelesen?" Und wer „n/n
bestätigt" schreibt, schreibt dazu, was das Werkzeug NICHT prüft (L-27,
dritter Beleg: Fließtext neben markierten Zitaten).

## L-50 — Der Suchweg bestimmt das Negativ: Kürzel ≠ Sache, Ausschnitt ≠ Datei, Fremdmeldung ≠ heutiger Stand (R16, 17.08.2026)

Drei Fälle EINER Klasse an EINEM Tag, alle vor oder in der Runde:

**Fall 1 (Leitsession, Tagesstart — vom Prüf-Subagenten gefangen):**
`grep "R15E-N-4|ANL-3"` über das Anwalts-Briefing = 0 Treffer, mit
greifender Positivkontrolle. Die SACHE (darf ein im fremden Impressum
vorgefundener Werbewiderspruch in den eigenen Sperrbestand?) stand seit
`ba5a059` als „§ 4a Kandidat A" im Dokument. Der Kürzel-Grep war
korrekt und das Negativ falsch; die Briefing-Prämisse 2 („nachtragen")
hätte die Frage ein zweites Mal ins Dokument geschrieben. Zusatz: Die
R15-E-Meldung „dort heute nicht enthalten" war beim Schreiben (01:54)
20 Minuten alt gegenüber `ba5a059` (01:34) — **eine Parallelsession-
Meldung über ein fremdes Dokument trägt den Stand ihres Lesezeitpunkts**,
und die Routing-Tabelle hatte sie ohne Zeitabgleich übernommen.

**Fall 2 (R16-C, Lucky Roux):** „Kein H-1-Datum nachgetragen" gestützt
auf einen `sed`-Bereich vom Abschnitt „Nachträge" bis zum Prüfer-Kopf —
die Antwort stand in einem neuen Abschnitt am Dateiende, den der Bereich
per Konstruktion nicht erreichte. Der Auftrag hatte den Abschnitt
namentlich genannt (L-34: der Verweis sagt, wo man ANFÄNGT). Kosten: ein
veröffentlichter Commit mit falscher Aussage, 20 Minuten später sichtbar
korrigiert. Gefunden nicht durch Prüfung, sondern durch eine unerwartete
Commit-Referenz in der `git push`-Ausgabe. **Mitschuld der Leitsession:**
Sie hatte im Prompt „Abschnitt Nachträge" als Ablage benannt und dann ans
Dateiende geschrieben — wer einen Ort benennt, schreibt DORT.

**Fall 3 (Leitsession, Tagesstart):** „Kein Selbstausschluss der
Zieldatei aus dem Pool" — gelesen am Konstanten-Kopf (ZIEL/POOL), nicht
am Vergleichspfad; `poolTextFuer` (Z. 71) existierte seit `3067361`.
L-40 (Prüfmengen-Konstanten lesen) reicht nicht — den Vergleichs-PFAD
lesen.

**Handlungskern (CLAUDE.md, schärft „Arbeitsvorrat = Verneinungen"):**
Jede Verneinung, die einen Auftrag trägt, wird (1) über Kürzel UND
Sachbegriff gesucht, (2) über die GANZE Datei, nie über einen Ausschnitt
(Zeilenspanne protokollieren, MKT R7), (3) bei Fremdmeldungen mit
Zeitstempel gegen den heutigen Stand geprüft. Eine unerwartete Referenz
in einer Werkzeugausgabe ist ein Prüfauftrag, kein Rauschen.

## Sammelvermerk R16 (17.08.2026) — Zweitbelege, bewährte Muster, Werkzeug-Nachträge

*(Quellen: `protokolle/R16-A-abschluss.md` Block 3/4 · `R16-B-bericht.md`
§ 3/4 · `R16-C-abschluss.md` Block 3/4 · Tagesplan 17.08. Jedes Learning
einzeln disponiert; „Zweitbeleg" = Register-Nachtrag ohne neue
CLAUDE.md-Prosa.)*

### Zweitbelege zu bestehenden Regeln (24)

1. **L-27** (Zitatabgleich prüft nur Markiertes) — R16-A F-9: 17/17 und
   zwei schwere Fließtext-Fehler daneben. Kern in L-49 aufgenommen.
2. **L-39** (künstlicher Satzpunkt) — R16-A F-4: Rn.-79-Zitat mit
   Doppelpunkt vor dem Literaturbeleg; 16/17 vom eigenen Abgleich gefangen.
3. **L-41** (Nachbarformen) — R16-A F-3: Genitiv „Oberlandesgerichts"
   (4 von 5 Fundstellen) und der Original-Tippfehler „Mittbewerbern"
   (Rn. 129) — Flexion und Schreibfehler sind dieselbe Klasse.
4. **L-43** (Zeichenklasse) — R16-A F-10: HTML-Abzug mit 1.359 NBSP:
   `§ 3a UWG` im .txt 21, im .html 0, alle Buchstaben-Zahlen gleich; der
   Bestandssatz „beide Abzüge liefern dieselben Werte" galt nur für
   Buchstaben (M-7 repariert). R16-C M-2: `[0-9]{3}` als Kontrolle für
   ein Zahlen-Negativ, Wort-Kontrolle lieferte bei einer Datei 0.
5. **L-24** (Kontrolle mit erkennbarer Unmöglichkeit) — R16-A F-1: 139
   statt 273 Absätze = exakt jeder zweite; nur die Lückenprüfung fing den
   Extraktor-Fehler. R16-A F-11: Abdeckungs-Zählweg zählte „Rn. 141/142"
   als 141 — Messwerkzeuge brauchen eigene Positivkontrollen (vier laufen
   nun mit).
6. **Quellen-Baustein „Muster über Auszeichnung ist Annahme über die
   Form"** — R16-A F-1: `absatzLinks` ist ein `<p>`, kein `<span>`.
7. **windows-powershell `grep -c`** — R16-A F-2: eine „4 Fundstellen"-Zahl
   aus `grep -c` stand schon im Dokument; `grep -o | wc -l` ergab 1 bzw. 5.
8. **Regel (e) „Auftrag ist Annahme"** — R16-A F-5: der Auftragstext
   beschrieb Rn. 115 in der falschen Richtung (Herkunftsangabe als
   Problem — am Rohbeleg ist ihr FEHLEN das Problem).
9. **L-40 / Doppel-Messstand** — R16-A F-7 (Prüfstand `0c4692f`, Commit
   auf `686ff18`, nur an der Push-Ausgabe sichtbar → **nach dem Commit
   den PARENT prüfen**), R16-B F-3 (alle Zahlen aus dem Snapshot), R16-C
   F-3 (Auftragsdatei wuchs 694 → 730 Zeilen zwischen Lesen und Prüfen).
10. **L-05** (Klassifikator trifft Ketten) — R16-A F-12: `git push | tail`
    in `&&`-Kette blockiert, Einzelbefehl lief. Neunter Beleg.
11. **L-17** (streichen statt abschwächen) — R16-A M-4: „kein Mitbewerber"
    gestrichen; die Gegenrichtung (Mitbewerberinnen klagten, Rn. 44/89/124)
    war der stärkere Befund.
12. **L-38** (zwei Nenner) — R16-A M-6: identische Löschungszahlen gegen
    `0c4692f` und `84ce2a6` belegen zugleich, dass niemand die Dateien
    zwischen den Ständen anfasste.
13. **L-42** (Prüferbefund am Rohbeleg gegenprüfen) — R16-A M-7: 18/18
    hielten stand; bei S-2 schärfte die Gegenprüfung die Reparatur um
    einen zweiten Fehler im selben Satz (Parteivortrag als Rechtsprechung).
14. **L-11** (Gliederung generisch extrahieren) — R16-A M-1: Randnummern
    über das Strukturmerkmal, Lücken-/Dubletten-/Zweitmerkmal-Prüfung.
15. **Regel (a) Aussage/Fundstelle getrennt** — R16-A M-2: zwei Achsen
    (Wortlaut · Randnummer), Kontrollfall „richtiger Satz, falsche Rn."
    fiel nur auf der zweiten durch.
16. **„Prüffrage vor jedem Versand an einen Entscheider"** — R16-A M-5:
    auf das eigene Teil-1-Ergebnis angewandt → Teilfrage 1a; sonst wäre
    die Doppelbegründung in der Matrix und nicht im Briefing gestanden.
17. **tagesstart „Fertig-Kriterium passt zur Auftragsart"** — R16-B F-1:
    ZIEL-Erweiterung erzeugt einen eigenen Aufnahmebestand (19 + 24), der
    weder „neu" noch Ausnahmeliste ist; getrennt und unbewertet geführt.
18. **„Treffer ist Lesestelle"** — R16-B F-4: 201 Trefferdokumente sind
    keine 201 Primärquellen (HTML/TXT-Dubletten, Ableitungen).
19. **Sammelvermerk R9 „jeder Modus eigene Erfolgsbedingung"** — R16-B M-1
    (Hauptlauf/`--altlast`/`--selbsttest`).
20. **„Anwesenheit ist nicht Wirksamkeit"** — R16-B M-4: Selbstausschluss
    durch denselben Text in zwei Zuständen belegt (nur eigene Datei → nicht
    bestätigt; plus Fremdpool → bestätigt).
21. **L-33** (Empfehlungs-Drift zugunsten der eigenen These) — R16-C F-4:
    „zwei unabhängige Rechnungen ergeben 300" wäre plausibel gewesen;
    `git log -S` zeigte einen Commit.
22. **L-39-Schärfung „ganzen Satz lesen"** — R16-C F-5: der Prompt nannte
    von der M1-Zeile nur „18 Commits", die Zeile trug auch „6+ DRIFT" —
    beide Hälften gemessen.
23. **L-15** (delegierte Zahlen selbst reproduzieren) — R16-C M-3
    (148/21/0 in zwei Minuten); **aussenkorrespondenz „Vorbefunde
    sichern"** — R16-C M-4 (die Zentrale führte den § 3a-Befund schon:
    Meldung von „neu" auf „Belegstufe gehoben" gedreht).
24. **Dubletten-Regel** — R16-C M-5: Zeiger auf WP-35 statt dritter
    Fundstelle; **L-25** — R16-A N-1: fünf Ableitungen des A7-Kernsatzes
    gelistet, drei außerhalb des Scopes (o8 § 6.2/§ 11.2, Regelwerk § 7.1,
    `preismodell-optionen.md` Rn.-87-Satz) → MKT-HANDEL.

### Bewährte Muster ohne bestehenden Anker (Register-Eintrag, kein CLAUDE.md-Kern)

- **Herkunft einer Zahl über `git log -S`, nicht über den Text** (R16-C
  M-1): der Text sagt, woher eine Zahl angeblich stammt, `-S` sagt, wann
  sie entstand.
- **Werkzeug-Umbau unter laufender Messung arithmetisch einhegen**
  (R16-A M-8): `37 = 33 + 4`, `2 = 0 + 2` — die zweite Zahl unabhängig
  prüfbar.
- **Baseline doppelt binden** (R16-B M-2): lesbare Nutzlast mit Nennern
  plus fest verdrahteter SHA-256 + Summen; ein veränderbarer Nenner
  allein schützt nicht gegen Anheben. Grenze (Codex selbst): gleichzeitige
  Änderung von Nutzlast UND Hash umgeht die Prüfung — Review-Aufgabe.
- **Baseline als Multimenge je Datei** (R16-B F-2): ein Set verliert
  Duplikate — ein zweites Vorkommen desselben Zitats würde sonst unter dem
  alten Eintrag verschwinden.
- **Ein Fremdbefund, der sich unabhängig reproduziert** (R16-A M-3): die
  21 § 3a-Treffer fielen aus dem eigenen Extrakt, ohne Suche danach.

### Werkzeug-Nachträge

- **Unsichtbare Zeichen zählen wie Umlaute** (R16-A F-6): zwei Soft-Hyphen
  U+00AD kamen mit kopiertem Text ins Dokument (Vorher-Nenner 0); sie
  hätten jeden Grep auf „Mittbewerbern" ins Leere laufen lassen. →
  Baustein `windows-powershell` (Master) ergänzt.
- **Fremdagenten-Scratch gehört ins Session-Scratchpad, nicht in den
  Repo-Root** (Leitsession, R16-B): Codex legte `.r16b-scratch-<hash>/`
  im Arbeitsbaum an (untracked, später aufgeräumt) — im `git status`
  eine fremde Datei mehr, die keine Session zuordnen kann. → Auflage im
  Codex-Auftragsmuster (tagesstart-Master).
- **Wächter-Struktur (offen, R17-Posten):** Rohbelege liegen in
  `sensibel/` und damit außerhalb des Pools — jedes Rn.-Zitat ist per
  Konstruktion „nicht im Pool"; nach R16-A meldet der frisch entrotete
  Wächter 51 NEU in der Rechtsmatrix (Urteilszitate + eigene
  Formulierungen, R16A-N-5). Codex-Scan: 352/863 Altlast mit
  Kandidatendatei, 511/863 ohne Texttreffer. Entscheid nötig: Pool um
  lokale Rohbeleg-Pfade (mit Fehltoleranz für frische Klone) +
  Ausnahmeliste für Eigenformulierungen.

### Nachträge der Debrief-Gegenprobe (5 von 54 Posten waren nicht gelandet)

1. **R16-B § 3.3 — ZIEL-Kandidaten:** Der generische Scan (`--zielkandidaten`)
   fand **20 Markdown-Dateien außerhalb ZIEL mit zusammen 718 Zitaten**
   (u. a. `handel/anwalts-briefing-2026-08.md` 114 ·
   `handel/preismodell-optionen.md` 139 · `handel/foerderarchitektur-
   beraterrolle.md` 97 · `handel/preisliste-vorlaeufig.md` 79; Bericht
   Rohausgabe E). Auftragsgemäß nicht aufgenommen — **Träger: R17-Wächter-
   Posten** (Aufnahme mit eigenem Aufnahmebestand je Datei, wie 19 + 24).
   Bis dahin ist „ZIEL 8/8" eine Aussage über acht Dateien, nicht über den
   Bestand.
2. **R16-A N-3 — der Prompt nannte `P-1`, es heißt `PS-1`:** Zweitbeleg zu
   „(e) Auch der Auftrag ist eine Annahme" — Kennungen im Prompt sind
   Vermutungen der Leitsession, am Objekt zu prüfen (die Session hat es
   getan).
3. **R16-A N-4 — CLAUDE.md änderte sich während der Session (44 Zeilen
   +/25 −):** Träger Leitsession, hier geprüft: die Änderungen waren
   Namensliste + Nachzug (Müdigkeit, Ziele statt Schnitte, Dauer-Rot,
   Ablageort, Baustein-Prüffrage) — **keine davon berührt eine Regel, die
   R16-A anwandte**; die Session lief mit ihrem Start-Snapshot korrekt.
   Zweitbeleg zu „Regel-Snapshot beim Session-Start" (Werkzeug-Disziplin).
4. **R16-B M-3 — Positiv-/Negativkontrolle am ECHTEN Pfad** (0→1
   gepflanztes Zitat, 0→1 neuer Verstoß, Exit 0→1, in einer Scratchpad-
   Kopie): Zweitbeleg zu „Ein Test, der nichts verändert, prüft nichts —
   Rückbau-Gegenprobe als Zählung ‚gesetzt: n von m'".
5. **R16-C M-6 — eigene Reparatur sichtbar gemacht** (Korrektur-Kasten im
   Messplan, Vorfassung lesbar, Commit-Hash der Vorfassung): Zweitbeleg zu
   „Reparaturen und Vorfassungs-Fehler SICHTBAR machen" (MKT R7).

Gegenrichtung (Debrief-Behauptung vs. Meldung): Dispositions-Liste im
Tagesplan zählte C mit 5 Mustern, die Meldung hat 6 → **43 Learnings**;
STATUS „Offen aus R15" trug drei erledigte Posten ungestrichen (ANL-3 ·
Wächter-Dauer-Rot · Statuszeilen) → gestrichen. Zahlen der Meldungen
(18 = 2/7/9, 863 = 113+467+144+139, 43 = 19+24, 16/17, 694→730) decken
sich.

### Prozess-Befund über den Debrief selbst

Nach dem R15-Befund (Block 3 und 4 je Meldung in EINEM Durchgang) wurde
so gearbeitet: je Meldung Nebenbefunde UND Learnings vollständig gelesen,
bevor die nächste geöffnet wurde. Zusätzlich hat der Tagesplan die
Zielorte der Nebenbefunde bereits beim Review (16:00/16:40) geführt —
Phase 4b findet sie dort vor.

## Verdichtung R17 (17.08.2026) — aus CLAUDE.md ausgelagerte Belegtexte (Anker `V17-nn`)

*(Leitsession Shanks, Block 3, frische Session nach `/clear` — kein
Müdigkeits-Zug. Ausgangsstand CLAUDE.md `926ca3c` = 84.713 B, Sollmarke
80.000 B. Verfahren: fünf Bullets („Positivkontrolle", „Verdichten
verliert den Vorbehalt", „Anwesenheit ist nicht Wirksamkeit",
„Vorwärtsverweis-Konvention", „Schwachstelle über Kanäle") wurden auf
Kern + Vorbehalt + Anker gekürzt; jede entfernte FALLGESCHICHTE steht
hier byte-nah unter ihrem neuen Anker, jede Handlungsregel und jeder
Vorbehalt blieb in CLAUDE.md. Prüffrage je Streichung: „Fällt ein Beleg
oder ein Vorbehalt?" — Protokoll: `protokolle/R17-leit-verdichtung.md`.
Kerne, die schon einen L-Anker trugen, behalten ihn; die Fallgeschichten
dazu stehen bereits unter dem jeweiligen L-Eintrag bzw. Sammelvermerk.)*

- **V17-1 (Extraktions-Positivkontrolle, Sammelvermerk R5, Prüferfang):**
  Bei EXTRAKTIONEN prüft die Kontrolle die Vollständigkeit des
  ERGEBNISSES (bekannte Elemente müssen in der Extraktion erscheinen),
  nicht die Erreichbarkeit der Quelle — „Nutzlast gefunden" beglaubigt
  keine vollständige Liste.
- **V17-2 (Kontrolle PRO MUSTER, heyPensio R35):** Wortlaut des
  Alt-Kerns: „ein Sammellauf mit
  Treffern sieht aus wie ein funktionierender Prüfweg und verdeckt das
  einzelne tote Muster" — gemessen: 45 Muster schlugen in Summe an, drei
  waren wirkungslos (Tippfehler, fehlendes Muster, Versalien-Schreibweise
  nie getroffen); das dritte fand erst ein Selbsttest, nicht der Prüfer.
  Daraus die Selbsttest-Datei-Pflicht (jedes Muster feuert mindestens
  einmal, `TREFFEN-NICHT`-Zeile für die Gegenrichtung).
- **V17-3 (abgeschnittene Werkzeugausgabe, heyPensio R35):** Wer eine
  39-KB-Ausgabe auf 2 KB liest und daraus „nicht gefunden" macht, hat
  nicht gesucht. Spiegelbild: ein Negativ, das nicht passen kann, ist
  zuerst ein Werkzeugfehler — Leerzeilen als „hinter dem Dateiende"; ein
  Regex, der ein Umlaut-Zeichen als zwei zählt.
- **V17-4 (Zeilenspanne protokollieren, MKT R7):** „Ziffer 4 gelesen"
  nach einem `sed -n '135,175p'`, während die gesuchte Grenze bei Zeile
  230 stand, erzeugte zugleich einen Fehlalarm und einen übersehenen
  Pflichtabschnitt: EIN Lesefehler, ZWEI schwere Befunde — und der zu
  weite Leseumfang im Protokoll hätte jeden Prüfer beruhigt.
- **V17-5 (Verfahrens-Positivkontrolle altert mit dem Korpus,
  Sammelvermerk R9):** Der Prüflauf deckte 1.055 Zeilen, das Papier
  hatte zum Zeitpunkt der Wiederverwendung 1.454 — genau in der Differenz
  saßen die einzigen zwei Abweichungen. Belegt wird die Fehlerklasse des
  damaligen Laufs, nie die Vollständigkeit eines späteren Rückbaus.
  Ergänzend zu L-24 (Unmöglichkeits-Kriterium): zwei Werkzeugfehler
  flogen nur auf, weil die Kontrollzahl nicht sein KONNTE — bei „90 von
  99" wäre beides durchgerutscht (MKT R8, zwei unabhängige Fälle); die
  L-30-Belegfälle „10 von 10 Ankern mit vollständiger Angabe" (zählte das
  eigene Auswahlkriterium, der stärkste Gegenfall fiel durchs Raster)
  und „6 von 6 Anbietern bestätigt", während zwei EinmalBETRÄGE keine
  Fundzeile hatten (MKT R12), stehen unter L-30; die R15-Einschränkung der Summenprobe („2+4+1=7" kann bei sieben Zeilen in drei Kategorien nie anders ausfallen — am eigenen Objekt, Sammelvermerk R15) ist der Beleg der EINSTUFUNGS-Blindheit; der L-18-Fall („es
  fehlt keine Seite" übersah, dass nur 3 von 4 Pflichten des gelesenen
  Abschnitts im Dokument standen) unter L-18.
- **V17-6 (Mess-/Befundprotokolle driften, heyPensio R29-B/R31 mit 7
  Belegen + MKT R3 Sammelvermerk + Protokoll-Erweiterung heyPensio
  R34):** Zahlen driften beim Zusammenfassen in Richtung eigener
  Vollständigkeit — Auslassungen und Vorher/Nachher-Verwechslungen,
  keine Erfindungen. Zur L-33-Klasse (Aussage über eine maschinelle
  Zählung): zweimal in einer Runde, beide Male in Richtung der eigenen
  Hypothese; Empfehlungs-Superlative: zweimal trug die Erstfassung ihr
  Gegenargument selbst (MKT R12).
- **V17-7 (Chat-Zusammenfassung glättet Vorbehalte, heyPensio R41):**
  Das Plan-Dokument trug die Vorbehalte, der Chat glättete sie — 2× an
  einem Tag, beide extern gefangen.
- **V17-8 (Wächter liest den erzeugten statt den geschriebenen Text,
  heyPensio R34):** Ein Prüfwerkzeug gab Entwarnung über eine Datei, die
  es nie gelesen hatte — seine Wächter prüften den frisch ERZEUGTEN Text
  statt der GESCHRIEBENEN Datei; Ausgabe und Prüfgegenstand sehen im Log
  gleich aus. Der L-21-Fall dazu (MKT R8 P-02) überlebte einen
  bestandenen Selbsttest.
- **V17-9 (Wächter misst den falschen Stand; fremde Grenzenliste
  vollzählig, heyPensio R42):** Ein Commit-Hook las den git-INDEX,
  während die vorgeschriebene Commit-Form (`git commit -- <pfade>`) den
  ARBEITSBAUM-Stand schreibt — der Schutz wäre bei jedem regelkonformen
  Commit umgangen worden. Gefunden von der Debrief-Gegenprobe: Das
  Review hatte nur drei der vier Posten übernommen, die der Bau-Bericht
  selbst als Grenzen benannt hatte.
- **V17-10 (ERFÜLLEN-Kategorie, heyPensio R43 + MKT R15):** In R15 baute
  die Briefing-Erhebung aus einer zehn Tage überholten STATUS-Zeile einen
  ganzen Strang (R15-E) auf erledigte Arbeit; der Nachtrag der
  R16-Debrief-Gegenprobe (STATUS „Offen aus R15" trug drei erledigte
  Posten ungestrichen) ist der dritte Beleg.
- **V17-11 (Nachbar-Repos gehören zum Suchraum, User-Fang 09.08.2026):**
  Der Oguz-Onboarding-Plan im heypensio-Repo kannte Zentrale, Briefing
  und Organigramm nicht — Arbeitsmodell- und Struktur-Entscheide kippen
  Onboarding-, Konzept- und Schulungsdokumente repo-übergreifend.
- **V17-12 (alle Kanäle einer Klasse; Nachbar-Prämisse, heyPensio R35):**
  Ein Sicherheitspapier beschrieb eine Informations-Preisgabe über zwei
  Wege und schlug vor, den Fix an EINEM zu prüfen; die Nachmessung fand
  drei weitere, darunter einen Endpunkt in einem ganz anderen Namensraum,
  den eine Sperre des Hauptwegs gar nicht erfasst — nach einem
  „erfolgreichen" Fix hätte die eigene Erfolgsprüfung grün gemeldet,
  während die Lücke offen blieb. Werkzeug-Seite: dieselbe Probe, die
  „läuft Komponente X?" beantwortete, fand mit einem Aufruf eine
  komplette zweite, in keiner Bestandsliste geführte Komponente.
- **V17-13 (das Gegenmittel ist selbst eine Liste, heyPensio R36, zwei
  Sessions unabhängig):** Dasselbe Papier schrieb korrekt „jede
  Aufzählung ist eine Mindestliste" und stellte als Abhilfe einen
  Namensfilter hin — die wichtigste Leck-Klasse war ein Parameter, keine
  Route (gemessen: 20 von 24 Kanälen offen, bekannt waren 5).

## L-51 — Wer einen Satz kippt, kippt seine FOLGESÄTZE: Suchraum ist die Schlussfolgerung, nicht das Wort (R17, 17.08.2026)

**Drei Fälle an einem Tag, in drei Sessions:**

**Fall 1 (R17-A, Ben Beckman, `ecb197c` → Prüfer S-1):** Die Session
fand ihren eigenen Superlativ („die einzige, deren Tatbestand B2B
ausdrücklich einschließt") an allen drei FUNDSTELLEN und reparierte
sie vor dem Prüferlauf. Der Prüfer mit frischem Kontext fand sofort
die **Folgefrage** im Anwalts-Briefing („dort fehlt die
Adressatengrenze, an der die **beiden anderen** Schienen sich reiben"),
die die gekippte Prämisse weitertrug — Wortsuche findet den Superlativ,
nicht den Satz, der auf ihm steht.

**Fall 2 (Leitsession, Prüf-Subagent Zuschnitt, A5):** Der Nebenbefund
R15B-N-4 behauptete „O-2-Superlative in ZWEI Fremd-Dokumenten"; belegt
war eines. Die zweite Fundstelle wanderte ungemessen in die
Routing-Tabelle (Projektquelle § 6a), in `handel/angebotsarchitektur.md`
Z. 1998 und in zwei Session-Prompts (R17-A Erstfassung), bevor `git log
-S "fortwirkt"` = 0 Commits zeigte: Das Preismodell hat den Satz **nie**
getragen. Vier Ableitungen aus einer unbelegten Hälfte.

**Fall 3 (R17-C, Lucky Roux, Fallen 9 — Leitsessions-Prompt):** Der
Prompt gab „das Urteil trägt es in Rn. 84/85 anders" als Begründung für
das Inkraftbleiben der Sperre vor; die Session übernahm es. Rn. 84/85
trägt die lit.-f-Absage, nicht die Fälligkeitsregel — der Wortlaut war
gedeckt, seine VERWENDUNG als Beweisgrund nicht.

**Kern (CLAUDE.md, neben L-25):** Wer einen Satz kippt oder eine
Prämisse als unbelegt erkennt, sucht nicht nach dem WORT, sondern nach
den SÄTZEN, DIE AUF IHM STEHEN — Folgefragen, Begründungen, Zeiger,
Prompts. L-25 regelt die Ableitung zwischen DATEIEN; L-51 die
Schlussfolgerung im selben Dokument und im eigenen Auftragstext.
Verwandt: L-49 (die angewandte Regel schützt den eigenen Text nicht) —
Fall 1 ist zugleich dessen dritter Beleg.

## Sammelvermerk R17 (17.08.2026) — Zweitbelege, bewährte Muster, Werkzeug-Nachträge

*(Quellen: `protokolle/R17-A-abschluss.md` [12 Fallen, 9 Muster, 7
Nebenbefunde], `protokolle/R17-C-abschluss.md` [13 Fallen, 12 Muster,
8 Nebenbefunde], `protokolle/R17-B-bericht.md` [Grenzen-Abschnitte],
`protokolle/R17-leit-verdichtung.md` + Tagesplan Block 3 [Leitsession,
6 Eigenbefunde]. Disposition je Learning: (a) neuer Kern · (b)
Zweitbeleg · (c) bewusst nicht · (d) Blueprint. Nenner: A 12+9+7 = 28
· C 13+12+8 = 33 **+ 6 Block-2-Punkte** (Erstfassung zählte sie nicht
mit — von der Debrief-Gegenprobe gefangen; Punkt 1 → Projektquelle § 7,
2/3/6 → Nachträge unten, 4 → Zweitbeleg 32, 5 → Zweitbeleg 34) · B 2
Grenzenlisten · Leit 6 → **75 Posten**, alle disponiert; Summenprobe je
Gruppe unten.)*

### Zweitbelege zu bestehenden Regeln (b) — 34

1. **L-49 (angewandte Regel schützt den eigenen Text nicht):** A-F8
   (eigener Superlativ im selben Commit wie die Reparatur eines
   fremden) · C-F2 (L-38-Zerriss beim Einfügen zwanzig Minuten nach der
   L-38-Dokumentation) · C-F8 ⭐⭐ (unbequeme Rn.-86-Hälfte weggelassen,
   obwohl „Vorbehalt zuerst" im Kasten stand) · Leit (O-12-Satz mit
   Anführungszeichen erzeugte selbst 1 NEU, während der Wächter-Umbau
   abgenommen wurde). Vier Belege → der Kern bleibt, kein Anbau.
2. **„Verdichten verliert den Vorbehalt":** Leitsession-Verdichtung
   (Gegenprobe: 8 von 140 Aussagen gefallen — 5 Vorbehalte, 2
   Kontrast-Hälften, 1 ERFUNDENE Zahl „fünf Wege" = 2 + 3, bei frischer
   Session mit Prüffrage je Streichung) · C-F8. Muster für die
   Verdichtungs-Gegenprobe (→ Debrief-Skill, d): „z. B."/„auch"-
   Streichung, „nicht X, sondern Y"-Paare, neu abgeleitete Zahlen.
3. **L-15 (delegierte Zahlen; geschärft):** A-F2/N-6 — „65 von 77" trug
   vier Positivkontrollen und eine Gegenkontrolle im Text und war
   falsch (63/77, 14 statt 12 Rn.); der billigste Gegencheck (`grep -c
   "149"`) hätte es gefunden. **Kern geschärft:** Zählweg anfordern UND
   an einer Stichprobe reproduzieren — ein dokumentierter Zählweg belegt,
   DASS gezählt wurde.
4. **L-07 (Kalender-Etiketten; geschärft um Uhrzeiten):** Tagesplan
   Block 1/2 trug „~17:00–19:00"/„~19:15" — die Commits liegen bei
   15:36–15:57; dieselbe Leitsession schrieb um 18:33 „~18:55" ins
   Verdichtungsprotokoll. Zwei Belege an einem Tag, beide der Klasse
   „aus dem Kopf".
5. **L-48 (Prüfer-„nicht prüfbar"-Liste; geschärft):** Prüf-Subagent A8
   — der R16-A-Prüfer schrieb „Rn. 237 nicht von MIR geprüft"; die
   Leitsession machte daraus „ungeprüft"; der R15-A-Prüfer hatte sie
   am Rohbeleg geprüft (`R15-A-pruefer.md` Z. 694). **Kern geschärft:**
   „nicht von mir geprüft" ist kein „ungeprüft" — Fremdmeldung trägt
   ihren Lesestand (L-50-Nachbar).
6. **L-30 („x von y" am Kriterium):** R15B-N-4 „zwei Fremd-Dokumente"
   ohne Fundzeile für das zweite (Fall 2 zu L-51) · C-F5 (Summenprobe
   11 = 1+8+2 stimmte, Einstufung 2/7 falsch — die ⚠️-EINSCHRÄNKUNG am
   eigenen Objekt reproduziert).
7. **L-05 (Klassifikator-Blockade):** zehnter Beleg — R17-A dreimal in
   beiden Befehlsformen blockiert, Leitsession-Push derselben Commits
   Minuten später durch. Kontext-/zeitpunktgebunden, kanalunabhängig.
8. **„Ein Werkzeug-Negativ misst einen KANAL":** A-F1 — „deutsche
   EuGH-Fassung nicht abrufbar" stand vier Runden als Quellen-EIGENSCHAFT
   in der R09-A-Quellenliste; es fehlte `curl -L`. Negativ-Protokolle
   tragen den Kanal MIT Flags (→ Baustein quellen-beschaffung, d).
9. **„Ziel schlägt Weg" (Auftrags-Lösungsweg widerlegt):** C-F1 — der
   Prompt sagte „`>`-Präfix ergänzen (mechanisch)"; `git show d11535f:`
   zeigte: nie ein Präfix, ein Edit-Anker hatte den Vorspann
   verschluckt. Ursache: Die Leitsession hatte den Subagenten-Befund
   („Folgezeile ohne `>`") in einen Reparaturweg ÜBERSETZT, statt ihn
   als Messung zu übergeben. → Prompts nennen Befunde, nicht Wege.
10. **(e) Auftrag ist Annahme / L-51 Fall 3:** C-F9.
11. **L-40 (Wächter-Entwarnung, wandernder Stand):** C-F7 (ZIEL 27
    statt 8 im Nachher-Lauf = fremder Umbau) · C-F11 (Positivkontrolle
    „92-mal" über wandernden Baum: heute 96, eingefroren 107/100/93/25)
    · A-F7 (fail-closed Rot des Umbaustands ist kein Rot über die
    eigene Arbeit) · C-N8.
12. **L-50 (Kürzel ≠ Sache):** C-F12 (Positivkontrolle im Kürzel-Kanal
    `H-1`, Verneinung im Sache-Kanal „kein Entscheid zur Zielstichprobe";
    tragfähig erst mit Kontrollkandidat BM-4/BM-5 = 20 Treffer).
13. **(a) delegierte Fundstellen driften:** C-F13 (Gegenleser schrieb
    einen o8-Satz dem Regelwerk zu; Befund stimmte, Fundstelle nicht).
14. **L-26 (Reparatur-Doku verändert den Prüflauf):** A-N5 achter
    EIGEN-Kandidat („verbleiben") · A-N5 sieben weitere · Leit O-12 ·
    C-F4: Selbstzitate in Anführungszeichen erzeugen NEU, wenn die
    eigene Datei nicht POOL ist — Abhilfe kursiv statt Anführungszeichen,
    ohne die EIGEN-Liste zu belasten (zwei Reste in Akquiseplan Z. 413,
    R18).
15. **L-29 (Fehlalarme = Normalisierung):** C-F3 — `>   > `-Verschachtelung
    lässt ein `>` mitten im Zitat stehen; vier byte-treue Zitate NEU.
    Werkzeug-Nachtrag → R18-Wächter (Normalisierung aller führenden
    Präfixe je Zeile).
16. **L-38 (Edit-Anker zerlegt Folgezeile):** C-F2 (zweiter Beleg am
    Messplan-Kasten) · C-F1 (Ursache des § 4.3-Bruchs seit `d11535f`).
17. **„Gegen-Durchgang auch bei Archiv-Quellen":** A-F10 — OLG-Beschluss
    mit 27 Rn. vollständig gelesen, Rn. 19/27 (beide STÄRKEN den
    Bestand) übersehen; Auswertung lief entlang der eigenen Fragen.
    Gilt auch bei acht Seiten.
18. **„Entwarnung trägt Quelle im Satz" / Struktur-Schluss:** A-F11 —
    eigener Strukturschluss („hätte ohne diesen Satz denselben Tenor")
    plus Selbst-Entwarnung („keine Bewertung"), wo Rn. 27 den Beleg
    hält. Prüfer H-5. Muster: Wo die Quelle liefert, nicht selbst
    argumentieren.
19. **„Vorher und Nachher auf demselben Lineal":** A-F12 („63/77" per
    Rn.-Muster vs. „77/77" per Rn.-Muster + Tabellenzellen; die
    Geltungsgrenze stand im Kasten und zog keine Konsequenz).
20. **Zitat kopieren, nicht abschreiben (L-01/L-27-Nachbar):** A-F3
    (Grammatikfehler „verblieben" still geglättet; nur der mechanische
    Abgleich fing es, 29/30).
21. **Unsichtbare Zeichen (windows-powershell):** A-F4/N-4 (U+2011 aus
    dem EuGH-Text wanderte ins Briefing; 34× U+2011 + 306× NBSP im
    DE-Volltext — `C-621/22` mit ASCII-Bindestrich = 0) · C-N3
    (Soft-Hyphen in „Termin­quote", Akquiseplan § 5).
22. **Bash-Kanal-Fallen (windows-powershell):** A-F5/F6 (`node -e`
    mit Windows-Pfaden, `cd` verschiebt beide Kanäle — beide bereits im
    Baustein, trotzdem hineingelaufen) · C-F6/N6 (NBSP-Literal in
    `node -e` verliert Kodierung: 0 → 8660) · C-M9 + Leit (Backslash
    geht in Heredoc UND Inline-Skript verloren, `(?<!\\)` und `\\|`;
    Write-Tool oder `String.fromCharCode(92)`) · C-F10 (Ersetzungslauf
    traf 0/11 wegen `„…"` mit ASCII-`"`, dann 7/11 wegen
    Zeilenumbrüchen — Trefferkontrolle je Muster mit Abbruch).
23. **L-35 (Kurz-ID-Kollision):** C-N2 — `H-2` dreifach
    (Messplan-Freigabe · Akquiseplan § 7 mit anderer Frist · R05-A-
    Prüfer). Träger Leitsession, R18-Posten mit R15B-N-5/N-6.
24. **„Konditionale/relative Zeitangaben altern lautlos":** C-N4 („S5
    liegt drei Tage nach heute", „das war gestern" — Erstellungsstand
    11.08.).
25. **ERFÜLLEN-Kategorie (V17-10):** C-N5 — Projektquelle § 7 Punkt 3
    führte H-2 als „offen, neuer Anker fehlt", zwei der drei Teile waren
    seit 09.08. erledigt (Leitsession zieht nach, Debrief 4b).
26. **L-44/L-46-Nachbar (Sperrdatei):** A-N7 — abschließende
    Positivliste vor § 3a lässt SP-01/SP-09 fallen (R18-AKQ).
27. **Rechtsmatrix-Fernwirkungen (Bestand, MKT-HANDEL R18):** A-N2 Rn.
    187/188 (AGB gegenüber Verbrauchern) · A-N3 Rn. 220 (keine
    Karenzfrist Art. 14 — stärkt Rn. 85/87).
28. **Repo-Konfiguration:** A-N1 `core.autocrlf=true` lokal ohne
    `.gitattributes` — Entscheid Leitsession R18 (`* text=auto eol=lf`).
29. **Prüfer-Selbstkontamination:** A-M9 — der R17-A-Prüfer traf mit
    `Rn. 224` sein eigenes Protokoll; Kontrollbegriffe im eigenen
    Protokoll treffen sich selbst (Sammelvermerk R9 „Anker im stabilen
    Teil" — Nachbarfall).
30. **Codex-Auflagen wirken:** B — Scratch außerhalb des Repos
    (`%TEMP%\codex-r17b-…`), Prüfstand-Export, alle Modi echt
    gelaufen, Grenzen zwei Listen; keine Abweichung zwischen Bericht
    und Leitsessions-Reproduktion.
31. **Wächter-Blindfleck (Kopien):** Ordner-Bausteine ungemessen —
    Postkorb Zentrale `f58f1c0`.
32. **Zeitplan-Ableitungen (C-B2/Block 2 Punkt 4):** fünf Stellen
    Ein-Gate-Logik in Akquiseplan § 6/§ 7/§ 8 — R18-AKQ.
33. **Prüf-Subagent Zuschnitt R17:** 18 Verneinungen, 3 widerlegt (A5,
    A8, L1) — dritte Runde in Folge, in der der Zuschnitt-Prüfer
    Prämissen kippt (R15: 4, R16: 2, R17: 3).
34. **StB-Termin doppelt in STATUS** (C-Block 2 Punkt 5): Punkt 0
    „~KW 34/35" (Namensentscheid-Pfad, Zentrale-Einschätzung) vs. Punkt
    1 „Mo 10.08." (ursprünglicher Anruf-Anker) — Klärung 4b: eine
    Handlung, der Anker ist der User-Zusage 18.08. gewichen.

### Bewährte Muster (Register-Eintrag; teils Blueprint d) — 15

- **A-M1/C-M1/A-M6:** Volltexte sichern, `git archive <hash>` als
  Scratch-Prüfstand, isolierte Stände A/B mit `diff -rq` als Beleg der
  Isolation — jedes Delta zuordenbar (→ tagesstart, d).
- **A-M2/A-M3/A-M4:** Positivkontrolle im selben Lauf entscheidet, ob
  ein Nulltreffer ein Befund ist (NRWE-Maske: „Kanal misst nichts"
  statt „nicht veröffentlicht" — der Auftrag hätte die falsche Antwort
  akzeptiert) · Zeichenklasse (`§ 890` = 2 neben `§ 3 Abs. 2` = 0) ·
  zwei Lesekanäle für ein überraschendes Negativ (Rn. 149/150).
- **A-M5/C-M8:** Löschungszählung als Skript-Gegenprobe; jede
  Formprüfung AUCH gegen den Vorher-Stand (Pipe-Befund war eigener
  R16-C-Altfehler, nicht Werkzeugartefakt).
- **A-M7:** Auftrags-Prüfverdacht ergebnisoffen („nicht übertragbar"
  hielt — belegen statt der erwarteten Richtung folgen).
- **A-M8:** Prüfstand einfrieren UND die eigene Arbeit weiterlaufen
  lassen — zwei unabhängige Wege zum selben Befund (S-1), der Prüfer
  brachte zwei Widerlegungen mehr und die Folgefrage (→ tagesstart, d).
- **A-M9:** Ein Prüfer, der seine eigenen Zahlen gegenläuft (vier
  falsch, drei in Richtung eigener These, offen korrigiert), ist
  belastbarer als einer ohne Fehler.
- **C-M2:** Zählwerkzeug mit Selbsttest je Muster und verschiedenen
  Sollwerten je Kanal fing den eigenen Sollwert-Fehler.
- **C-M3:** Der git-Verlauf beantwortet Bezugsfragen („wer ist Er?" =
  `git show d11535f:`), bevor man rekonstruiert.
- **C-M4/C-M5/C-M6:** Vorbehalt vor Rechtsfolge · zwei Lesarten
  vorlegen statt entscheiden (H-2 Teil 3) · verstrichene Frist
  sichtbar lassen, keinen Ersatzanker erfinden.
- **C-M7:** Vor dem Ändern einer POOL-Datei prüfen, wer daraus zitiert
  (Durchstreichung verändert normalisierten Text).
- **C-M10 ⭐⭐:** Gegenlese-Zuschnitt: „Aussage und Fundstelle getrennt"
  + „oder die stillschweigend auf X aufsetzt" + zwei nachprüfbare
  eigene Behauptungen mitgeben — fünf schwere Befunde aus einem
  „kurzen Gegenleser" (→ tagesstart, d).
- **C-M11:** „Welche Verfälschung hätte dein Verfahren nicht gefangen?"
  liefert die nächste Arbeitsliste (Bau ≠ Beleg → fehlender Vorbehalt).
- **C-M12:** `git fetch` + `HEAD..origin/main` = 0 → kein Rebase, kein
  Autostash-Risiko.
- **Leit:** Verdichtungs-Gegenprobe durch Subagenten VOR dem Commit
  (8/140 gefangen) · Prüf-Subagent Zuschnitt (3/18) · Codex-Abnahme
  per Reproduktion aller Modi am Prüfstand.
- **Leit:** Frisch nach `/clear` verdichten — und trotzdem gegenprüfen
  lassen: Müdigkeit ist eine, nicht die einzige Drift-Ursache.

### Werkzeug-Nachträge (d, Bausteine via Master)

- `windows-powershell`: Bash-Kanal verschluckt Backslashes in Heredoc
  UND Inline-Skript (Write-Tool oder `String.fromCharCode(92)`);
  `node -e` mit Literal-Sonderzeichen verliert Kodierung (Skriptdatei
  + Selbsttest); Ersetzungsskripte mit Trefferkontrolle je Muster und
  Abbruch (Anführungszeichen-Klasse messen: `„…"` mit ASCII-`"`).
- `quellen-beschaffung`: EuGH-DE-Volltext per curia/EUR-Lex braucht
  `curl -L`; EU-Texte tragen U+2011/NBSP (Aktenzeichen-Grep
  normalisieren); Negativ-Protokolle nennen Kanal + Flags, sonst wird
  ein Werkzeug-Negativ zur Quellen-Eigenschaft.
- `debrief`: Verdichtungs-Gegenprobe-Muster (z. B./auch-Streichung,
  Kontrast-Hälften, abgeleitete Zahlen).
- `tagesstart`: Gegenlese-Zuschnitt (drei Elemente) · Prüfstand
  einfrieren + weiterarbeiten · Prompts übergeben Messungen, keine
  Reparaturwege.

### Bewusst nicht zurückgeschrieben (c) — 4

- A-N2/N-3 (Rn. 187/188, 220): Bestandsposten MKT-HANDEL R18, keine
  Methodik.
- C-N1 (o8 § 5.4 ↔ § 10 B-6 FG-2/FG-4): Sachbefund → R18-HANDEL/o8.
- B-Grenzen „Authentizität des Rohbeleg-Bestands nicht erhoben":
  bekannte Belegstufen-Grenze der lokalen Stufe — im Baseline-Kopf
  (`zitat-baseline-2026-08-17.md` Z. 5–9: „bewertet keine Belegstufe …
  nur durch Zahl, Byte-Summe, Hash beschrieben") benannt; der O-12-Satz
  nennt nur die getrennte Stufe/„nicht prüfbar" (Gegenprobe-Korrektur).
- A-F5/F6 (`node -e`-Pfade, `cd`): bereits im Baustein — Zweitbeleg
  ohne Textänderung.

**Summenprobe:** A 28 = Fallen 12 (F1→8, F2→3, F3→20, F4→21, F5/F6→22,
F7→11, F8→1, F9→L-51, F10→17, F11→18, F12→19) + Muster 9 (M1–M9 oben)
+ Nebenbefunde 7 (N1→28, N2/N3→27+c, N4→21, N5→14, N6→3, N7→26) ✔ ·
C 33 = Fallen 13 (F1→9, F2→1/16, F3→15, F4→14, F5→6, F6→22, F7→11,
F8→1/2, F9→10, F10→22, F11→11, F12→12, F13→13) + Muster 12 (M1–M12) +
Nebenbefunde 8 (N1→c, N2→23, N3→21, N4→24, N5→25, N6→22, N7→erledigt
`7ef4dcc`, N8→11) ✔ · B 2 Listen → 30 + c · Leit 6 (Zeit 4 · Verdichtung
2 · Push 7 · Bash 22 · O-12 1/14 · Postkorb 31) ✔.

### Nachträge der Debrief-Gegenprobe (4 von 88 Posten nicht gelandet, 0 verworfen)

- **C-Block-2 Nr. 2** (Arbeitstitel-Rechtsfrage Art. 14) → Projektquelle
  § 7 Punkt 0 R18 (6) · **Nr. 3** (Vorlagen-Stand nicht erhoben) → R18
  BELEG (7) · **Nr. 6** (Doppel-Messstand R17-C nicht fremd abgenommen)
  → Leitsession-Abnahme am HEAD nachgetragen (9) · **B-G4** (acht
  Aufnahmebefunde ohne Einordnung) → R18 Wächter (8). **Gegenrichtung:**
  Nenner 69 → 75 (Block 2 zählte nicht mit — Positivliste in Verkleidung,
  L-30 am eigenen Sammelvermerk) · Zweitbeleg 14 trug C-F4 als Zeiger
  ohne Inhalt · (c)-Begründung „im O-12-Satz" nur sinngemäß → korrigiert.
  Prozess-Befund wie R15/R16: Die Debrief-Gegenprobe findet in jeder
  Runde 4–5 Ausfälle — sie ist keine Formalie.

### Kompensations-Auslagerungen dieses Debriefs (Anker `V17-14`…, Fortsetzung der Verdichtung R17)

- **V17-14 (Secret-Rotation, heyPensio 0s5, vier Rotationen an einem
  Abend — Belegdetails zum CLAUDE.md-Kern):** (a) Landet ein
  credential-naher Wert im Chat, WÄHREND die Rotation ohnehin läuft, wird
  neu gewürfelt statt hingenommen. (b) Env-Ausdruck statt Rohwert hält
  Exporte secretfrei und Vorlagen generisch; der geplante Lauf führt bei
  Haupt-/Worker-Architekturen oft im WORKER aus — darum die Variable in
  ALLEN Containern belegen; Sollwert vorher lokal messen. (c) Die
  Nachmessung „alter Wert tot" fing einen Reset, der im UI erzeugt, aber
  nie persistiert war (Teilformular ohne Formular-Save).
- **L-15-Belegfall (MKT R7), aus CLAUDE.md gekürzt:** eine gemeldete
  „Positivkontrolle: 65 Treffer" reproduzierte unter KEINEM Zählweg und
  über keine Datei einzeln, während der Nulltreffer daneben stimmte —
  Volltext unter L-15.
- **L-49-Belegfall (MKT R16), aus CLAUDE.md gekürzt:** die reparierte
  Klasse 90 Zeilen unter ihrer Reparatur erneut begangen, im Fließtext
  neben 17/17 bestätigten Zitaten — Volltext unter L-49.
- **L-05-Historie (Kompensation R17):** „Zwei Messbefunde: Ketten aus
  erlaubten Einzelbefehlen; derselbe `git push` lief später in derselben
  Session; R7/R8 in beide Richtungen gemessen" — Volltext unter L-05 und
  in den Sammelvermerken R7/R8; zehnter Beleg R17 (Zweitbeleg 7 oben).

## Sammelvermerk R18 (17.08.2026, abends) — drei Schärfungen, Zweitbelege, Werkzeug-Nachträge, Wächter-Policy

*(Quellen: `protokolle/R18-A-abschluss.md` (10 Fallen · 8 Muster · 8
Nebenbefunde N-1…N-8) · `protokolle/R18-A-pruefer.md` · `protokolle/
R18-B-bericht.md` (§ 10 fünf Policy-Fragen, § 12 Blindstelle, § 13) ·
`protokolle/R18-C-abschluss.md` (7 Fallen · 6 Muster · 6 Nebenbefunde
R18C-N-1…N-6) · `protokolle/R18-C-pruefer.md` · Prüf-Subagent
Zuschnitt (Tagesplan Block 5, 20 Verneinungen + 5 Nebenfunde) ·
Leitsession 5 Posten. Nenner: A 26 · B 7 · C 19 · Prüf-Subagent 5 ·
Leit 5 = **62 Posten**, jeder unten disponiert (a/b/c/d).)*

### Schärfungen bestehender Kerne (a) — 3, ersetzen an Ort und Stelle

- **L-51 geschärft (Suchmuster aus der SACHE):** Alt-Kern (R17): „…ist
  der Suchraum nicht das WORT, sondern die SÄTZE, DIE AUF IHM STEHEN —
  Folgefragen, Begründungen, Zeiger, eigene Prompts (R17, drei Sessions:
  …). L-25 regelt die Ableitung zwischen Dateien, L-51 die
  Schlussfolgerung im selben Text." **Belegfall R18-C, Gegenleser G-1
  (schwer):** Die Session suchte die Folgestellen mit den WORTLAUTEN des
  gekippten Absatzes („ohne Namensbindung", „sofort baubar", „hängt am
  Namen") — alle neun Treffer lagen in § 3.2 und in den eigenen
  Reparaturkästen; die sechste Ein-Gate-Stelle (§ 2 K1: „3–5 Wochen nach
  dem Firmierungs-Entscheid", „bevor der erste Brief rausgeht") formuliert
  dieselbe Logik in anderen Worten und blieb unsichtbar. Der Negativsatz
  „keine sechste Stelle" war strukturell nicht falsifizierbar. **Zusatz
  im Kern:** die Suchmuster kommen aus der SACHE/Folge-Logik, nicht aus
  dem gekippten Vokabular; ein Muster, dessen Treffer ALLE in der
  Reparaturstelle liegen, ist ein Warnsignal, kein Ergebnis. Zweiter
  Beleg derselben Runde: R18-A Falle 8 (Verneinung erbte Suchraum +
  Case aus dem Akquiseplan; die Projektquelle schrieb „ARBEITSTITEL"
  groß — Wahrheits-Kanal nicht im Suchraum, obwohl R17-C den weiteren
  Raum bereits benannt hatte, L-50).
- **L-38 geschärft (Einfüge-Variante):** Alt-Kern (R13/R15): Anker-Fehler
  löscht/zerlegt Überschrift oder Folgezeile; Nachweismittel
  Löschungszählung mit zwei Nennern. **Belegfall R18-A, Prüfer M-4:**
  eine fehlende Leerzeile nach einem eingefügten Blockzitat zog per
  Markdown-*lazy continuation* einen Vorbehalt in einen internen
  Reparaturkasten, der vor dem Versand entfernt werden soll — im
  Anwalts-Briefing. Nichts gelöscht, Wirkung nur gerendert; die
  Löschungszählung ist dagegen BLIND. **Zusatz im Kern:** Nahtstelle
  nach dem Edit als STRUKTUR lesen (Leerzeile vor/nach Blockquote,
  Listen-Einrückung), nicht nur als Text; die Löschungszählung deckt
  die Einfüge-Variante nicht. Verwandt R18-A Falle 5 (verschachtelte
  `*(…)*`-Klammern zerlegen Kursiv — an der Nahtstelle gefangen).
- **Werkzeugfehler-Zahl geschärft (Lauf statt Stelle):** Alt-Kern: „Eine
  Zahl, die offensichtlich nicht passen kann, ist ein Werkzeugfehler,
  kein Befund — erst das Werkzeug prüfen, dann die Sache." **Belegfall
  R18-A Falle 1 (⭐⭐):** Zeichenzählung per `grep -o` im Byte-Modus; die
  Positivkontrolle meldete Umlaut = 2 statt 1 — als „byte-basiert, aber
  brauchbar" abgetan, die drei Nachbarzahlen desselben Laufs
  weiterverwendet: 44 Soft-Hyphen / 156 NBSP gemeldet, tatsächlich 0/0
  (`[äöüÄÖÜß]` zerfällt im Byte-Modus in UTF-8-Folgebytes, darunter `AD`
  und `A0`); aufgefallen erst am Nachher-Lauf 156 → 26.392. **Zusatz im
  Kern:** passt EINE Kontrollzahl nicht, ist der ganze LAUF tot — alle
  Zahlen desselben Laufs verworfen, Zählung als Skriptdatei mit
  Selbsttest und Abbruch.

### Zweitbelege zu bestehenden Regeln (b) — 31

1. **L-49 (dritter/vierter Beleg, R18-A Falle 7 ⭐⭐):** alle drei
   SCHWEREN Prüferbefunde (S-1 erfundene o8-Fallgruppen „Einzelunternehmer/
   Privatvermieter" = 0 Treffer; S-2 „alle drei Rn. sprechen von
   Verbrauchern" — vier zitiert, Rn. 206/207 = 0; S-3 Entwarnung „stellt
   sicher, dass … gestellt wird" bei 0 Treffern im Briefing) lagen im
   einzigen NEU gebauten Abschnitt, in den Sätzen, die den Bau
   rechtfertigen — die Reparaturen an fremdem Text hielten alle. Kern
   ungekürzt; keine Änderung. **Zugleich L-36** (S-1: Bestandsaussage im
   neuen Text unmessen) und **L-45** (S-3: Entwarnung über die eigene
   Handlung).
2. **„Verdichten verliert den Vorbehalt" (R18-C Falle 6 ⭐):** STATUS-Zitat
   „Vorlage liegt vor (R11) — Sperr-Posten entschärft" ohne die zweite
   Hälfte „SOLANGE die E-Punkte zügig beantwortet werden" — gefangen vom
   ZITAT-WÄCHTER (Pooltreffer fehlte), nicht vom Prüfer. Muster: **ein
   Wächter-NEU an einem frisch geschriebenen Fremdzitat ist zuerst ein
   Verkürzungs-Verdacht, kein Rauschen** — R18-A Muster 4 spiegelt es
   (Konventions-Anpassung senkt das Delta, das Delta bleibt Prüfliste).
3. **L-15 + Regel (e) „auch der Auftrag ist eine Annahme" (R18-C Falle 2 /
   R18C-N-1, Leitsession-Fehler):** der Prompt gab „Kollisions-Sollwert
   H-2 = 3 Dokumente" als bekannten Wert mit; am Objekt ≥ 6 (dazu
   Prüfer-Namensräume R05-A/R15-A/R16-A/R17-A). Eine Positivkontrolle mit
   falschem Sollwert ist schlechter als keine. **Herkunft: die
   Leitsession hatte die Zahl aus R17-C N-2 übernommen, ohne sie zu
   messen** (L-15: Zählweg anfordern UND Stichprobe — hier weder noch).
4. **L-40 (R18-A Falle 3, R18-C Muster 2):** Wächter-Delta im
   Parallelbetrieb — A lief mit dem von R18-B veränderten Werkzeug; erst
   zwei Snapshots mit `diff -rq` = genau 6 eigene Dateien + Werkzeug-md5
   identisch machten das Delta zuordenbar; C ordnete fünf fremde NEU
   (36 → 41) R18-A zu, statt sie als eigene Verschlechterung zu melden.
5. **L-38 Löschungszählung — eigene Pfade (R18-A Falle 4):** `git diff
   86afceb -- handel/ akquise/` fing die uncommitteten Akquiseplan-
   Löschungen von R18-C ein; Zählung auf die EIGENEN Pfade begrenzen.
6. **L-26 (R18-A Teil 3, R18-C Falle 3, R18-B ζ = 18):** 7 von 8
   „Rohbeleg bestätigt nicht"-Aufnahmebefunden waren Vorfassungs-
   Selbstzitate in Reparaturkästen; C's zwölf Korrekturvermerke wurden
   dadurch NEU; B zählt 18 von 36 NEU in dieser Klasse. **Konsequenz
   nicht als CLAUDE-Regel, sondern als Wächter-Policy** (unten:
   `REPARATURVERMERK`-Konstante statt Kursiv-Konvention — Kursiv würde
   die Vorfassung dem Zitatabgleich entziehen, L-27).
7. **L-13 + L-51 (R18-A Falle 9):** ✅-Kasten in Regelwerk § 6.1 „besteht
   nicht mehr" — erledigt 1 von 3, „3 von 3 offen" stand fünf Zeilen
   darüber im eigenen Scope (Prüfer M-7).
8. **Regel (a) Aussage/Fundstelle getrennt (R18-C Falle 5, G-6):**
   geerbte Fundstelle „o8 § 10-Nachtrag" aus § 3.2 übernommen, Wortlaut
   verifiziert, Fundstelle nicht — steht in § 11.1.
9. **L-45 Entwarnung über die eigene Handlung (R18-C Falle 4, G-4):**
   Frist H-8 auf „Di 18.08. (Stand STATUS.md)" gezogen, während der
   Kasten „kein Termin neu gesetzt" sagte und der Messplan im selben
   Commit das Gegenteil richtig machte.
10. **L-36 Kontext neben sauberem Fund (R18-C Falle 7, G-8):** „23.08.
    ist Sonntag" gemessen, „steht ohne Wochentags-Etikett" aus dem Kopf
    und falsch.
11. **V17-10 ERFÜLLEN (R18-C G-2 schwer, Muster 5):** § 3.2 behauptete
    die fünf Stellen weiter als offen, erledigt in derselben Datei im
    selben Commit — ERLEDIGT-Marke neben dem unangetasteten Original
    (Auftragssperre + ERFÜLLEN-Pflicht zugleich erfüllt).
12. **Regel (f) Nennstelle am Stück lesen (R18-A Muster 1 ⭐):** Der Fund
    zu I-20 U 107/23 kam nicht aus vier Beschaffungskanälen, sondern aus
    Rn. 22 des vorliegenden Beschlusses am Stück — „Kenntnis", nicht
    „begründet"; zwei Bestandssätze gekippt, einer an den Anwalt
    unterwegs. **Bevor man eine Quelle beschafft, liest man, was die
    vorhandene über sie sagt.**
13. **L-24 Unmöglichkeits-Kontrolle (R18-A Muster 2 ⭐):** Byte-Identität
    (SHA-256) der Antworten für gesuchtes UND Kontroll-Aktenzeichen bei
    dejure — die stärkste Form eines Kanal-Negativs.
14. **L-25 Gegenrichtung (R18-A Muster 3, Teile 6/7):** zweimal stand der
    Fehler in der QUELLE, die ABLEITUNG hatte ihn schon gemeldet
    (Wellenprotokoll/Regelwerk zu B-6; Briefing zu SP-01/09) — Prüffrage
    beim L-25-Posten zuerst: „Hat die Ableitung ihn schon gefunden?"
    (Register-Zusatz zu L-25, kein Kern-Umbau.)
15. **L-48 (R18-A Muster 6 ⭐):** Rückwärts-Kategorie produktivste Stelle:
    Rn. 205 (Übersichtsdokumente scheitern an ihrer Überschrift) und
    Rn. 189/191 (Entlastung „nie einbezogen" ausdrücklich gesperrt) lagen
    im ungelesenen Teil und STÄRKEN die eigene Position.
16. **Externer Rn.-Anker (quellen-beschaffung; R18-A Muster 5):** `Rn. 156
    = Z. 440 / Rn. 273 = Z. 674` aus R17-A byte-genau bestätigt,
    Randnummern per `grep -n "^ 220 "` ansteuerbar.
17. **Trefferkontrolle je Muster mit Abbruch (windows-powershell R17;
    R18-A Muster 7, R18-C Muster 3):** 6 von 12 Ersetzungen beim ersten
    Anlauf ROT (typografisch `„` öffnend, ASCII `"` schließend; Umbrüche;
    Fettungen) — ohne Kontrolle sechs Stellen still liegen geblieben.
18. **L-02 byte-gleich nur per Skript (R18-A Muster 8):** o8 B-6 ↔ § 5.4
    `IDENTISCH: true` skriptgeprüft.
19. **L-19 Reparatur verschärft anderen Befund (R18-A Prüfer M-4 + Falle
    10):** der Reparaturtext erzeugte die Einfüge-Klasse (→ L-38-Schärfung).
20. **Prüf-Subagent Zuschnitt (tagesstart § 2 Baustein 1; Leitsession):**
    20 Verneinungen, **4 Prompt-Prämissen gekippt VOR dem Start** (Rn. 220
    stand in o8 § 7.1 — Prämisse „nirgends" aus R17-A N-3, vom R17-A-
    Prüfer schon zurückgezogen; 7 der 8 Aufnahmebefunde L-26; Akquiseplan
    Z. 413 Kreuzzitate; `core.autocrlf` System- statt Repo-Config) + 5
    Nebenfunde (Briefing „Original nicht beschafft"-Folgesätze L-51;
    Zielort Rn. 187/188 in STATUS/Projektquelle falsch; EIGEN_R17-
    Residuum; U+00AD im Wahrheits-Kanal; R17-A § 1.3 ↔ § 5.6). Vierte
    Runde in Folge mit gekippten Prämissen — das Instrument trägt.
21. **Gegenlese-Zuschnitt mit Kalibrierung (tagesstart R17; R18-C Muster
    4):** zwei Behauptungen mitgegeben, EINE davon falsch — der Gegenleser
    widerlegte sie und machte daraus G-4. Schärfung des Musters:
    **„davon eine falsche"** (Werkzeug-Nachtrag tagesstart, unten).
22. **Kern/Beleg-Trennung — Codex-Auftragsform (tagesstart § 1.4; R18-B):**
    „inventarisiert und misst, Leitsession bewertet" hat zum dritten Mal
    getragen: 36/36 mit Summenprobe, fünf Policy-Fragen sauber an die
    Leitsession zurückgegeben statt still entschieden.
23. **Regression alt-ROT/neu-GRÜN + Rückbau-Gegenprobe (R18-B, Leit):**
    Codex lieferte Lauf 1 rot / Lauf 2 grün archiviert; die Leitsession
    drehte die Regex in einer Wegwerf-Kopie zurück — **gesetzt 1 von 1**,
    drei Muster kippten. Ohne den Rückbau wäre „46/46 bestanden" ein
    Test gewesen, der nichts verändert.
24. **V17-2 Kontrolle pro Muster (R18-B § 12):** 33 PK + 3 Gegenproben +
    3 Blockzitate hätten den `> >`-Fehler NICHT finden können — keine
    enthielt ein verschachteltes Präfix mitten im Zitat.
25. **„Ein Wächter kann Entwarnung über Text geben, den er nie liest" /
    L-27 (R18-A N-7 ⭐ struktureller Werkzeugbefund):** `handel/
    angebotsarchitektur.md` ist dem LG-Rohbeleg NICHT zugeordnet („0
    bestätigt (Rohbeleg, lokal)" seit Rundenstart) — korrekte
    Urteilszitate dort können nie grün werden. → Wächter-Policy R19.
26. **Ebene über den Repos (Zentrale 14.08.; Leitsession):** Codex legte
    `firma/r18b-scratch-86afceb` + `.tar` auf der Firmen-Ebene ab —
    Nicht-Repo-Ordner mit dem Ausgabe-Archiv der Läufe; vom User zur
    Löschung nach dem Debrief freigegeben. Der tagesstart-Auflagentext
    sagte „außerhalb des Repos", nicht „Session-Scratchpad" (Werkzeug-
    Nachtrag unten).
27. **Prompt-Prämisse „R18-B arbeitet außerhalb des Repos" (R18-A N-1):**
    unpräzise — Lieferdateien im Arbeitsbaum, Scratch außerhalb; A's
    Wächter-Läufe liefen gegen den Umbaustand (A hat es erkannt).
28. **L-35 Kurz-IDs (R18-C Block 2 Nr. 3/4, N-2; R18-A Teil 3):** `H-2`
    ≥ 6 Dokumente inkl. Prüfer-Namensräume; `H-1` dieselbe Klasse
    (Akquiseplan-Anker ≠ Messplan-Livegang); „Prüferbefund H-2" ohne
    Rundenpräfix in Rechtsmatrix (✅ R18-A → `R16A-H-2`) und AA (offen).
29. **L-25 Ableitungen nachziehen (R18-A Teil 7 + N-2):** Sperrdatei-
    Positivliste → zwei Briefing-Stellen nachgezogen; `wellenprotokoll-
    vorlage.md` Z. ~399 „nur FG-4" durch den o8-Edit überholt (Träger
    unten).
30. **L-46/L-51 Folgesätze (R18-A Teil 7a):** „Original nicht beschafft"
    zu 20 W 37/24 an vier Stellen des Briefings nach der Beschaffung
    stehen geblieben — repariert mit Vorwärtsverweis.
31. **Bash-Heredoc-Riss (Leitsession, `windows-powershell`):** ein
    quotiertes `<< 'EOF'` mit ~180 Zeilen Markdown riss („unexpected
    EOF") ohne erkennbaren Backslash; der zweite Anlauf per Write-Tool +
    `cat >>` lief. Kanal-Negativ, Ursache nicht gemessen — als (c)
    geführt, kein Regel-Nachtrag ohne Ursache.

### Werkzeug-Nachträge (d, Bausteine/Commands via Master) — 3

- **`windows-powershell` (Blueprint-Baustein):** „Bash- und PowerShell-
  Kanal teilen EIN Arbeitsverzeichnis" — **erweitert um das Grep-TOOL:**
  ein `cd` im Bash-Kanal ließ einen Grep-Tool-Aufruf ohne `path` 0 statt
  14 Treffer melden (R18-A Falle 2 ⭐) — Suchwerkzeuge immer mit
  explizitem `path`; ein Nulltreffer nach einem Bash-`cd` ist zuerst ein
  Kanalfehler.
- **`tagesstart` (Blueprint-Command), Codex-Auflagen § 1.4:** „Scratch-/
  Zwischendateien NUR außerhalb des Repos" → präzisiert: **im
  Session-Scratchpad, nie auf der Ebene über den Repos** (Nicht-Repo-
  Ordner-Regel); **Lieferdateien landen im Arbeitsbaum, ungestagt** —
  parallele Sessions messen dann den Umbaustand des Werkzeugs (Doppel-
  Messstand-Vertrag auch fürs Werkzeug).
- **`tagesstart` Gegenlese-Zuschnitt (c):** „zwei nachprüfbare eigene
  Behauptungen mitgeben" → **„davon eine FALSCHE"** (R18-C Muster 4:
  Widerlegung kalibriert und wurde zum Befund G-4).

### Wächter-Policy R18 (Leitsession-Entscheide zu R18-B § 10; Bauposten R19)

1. **δ Kreuzzitat ZIEL↔ZIEL (2):** ZIEL-Dateien werden als
   Zitat-QUELLE zugelassen, aber **getrennt ausgewiesen** („Kreuzzitat
   Ziel↔Ziel"), nicht als POOL-Bestätigung — ein Kreuzzitat belegt
   Wortlaut-Treue zur Nachbardatei, nie Richtigkeit gegenüber einer
   Primärquelle. Bau R19.
2. **ε Baseline je Vorkommen (1):** Zählweg auf VORKOMMEN umstellen
   (derselbe Text zweimal in einer Datei = zwei Prüfgegenstände);
   Baseline-Nenner mit Stand neu ausweisen. Bau R19.
3. **ζ Reparaturvermerk-Selbstzitate (18 + 7 aus `ROHBELEG_OFFEN_R17` +
   19 aus A's Delta):** eigene Konstante `REPARATURVERMERK_R<n>` mit
   Begründung + Verifizierer je Eintrag (L-26-Modus-Trennung), Selbsttest
   beide Richtungen; **keine Kursiv-Konvention** für Vorfassungen
   (würde sie dem Zitatabgleich entziehen, L-27). Bau R19 — die 8
   Einträge von `ROHBELEG_OFFEN_R17` wandern dabei in die neue Konstante.
4. **γ Fremdzitate ohne Pooltreffer (7):** Leitsession ordnet je Eintrag
   ein (Rohbeleg fehlt → Beschaffungsposten; verkürzt → Reparatur;
   Auszeichnung → Normalisierung) — offen, R19 mit A's Delta zusammen.
5. **β übrige Selbstformulierungen (4):** einzeln in R19 entscheiden
   (Kandidatenliste im Bericht § 6).
6. **Rohbeleg-Zuordnung je ZIEL-Datei (R18-A N-7):** AA dem LG-Rohbeleg
   zuordnen — Bau R19, zusammen mit 1–3.

### Bewusst nicht zurückgeschrieben (c) — 4

- Kursiv-Konvention für Reparaturvermerke (C Falle 3, A Muster 4) — s.
  Policy 3, Grund L-27.
- Bash-Heredoc-Riss (Leit) — Ursache ungemessen, kein Regel-Nachtrag.
- „Bevor man beschafft, lesen, was die vorhandene Quelle sagt" als
  eigener Kern — deckt Regel (f) + „Vor dem Ausarbeiten steht das
  Nachschlagen"; Zweitbeleg 12 genügt.
- R18-A N-6 (Datumsuneinheitlichkeit des Beschlusses) — bereits im
  Briefing § 2.3 vermerkt, nur Bestätigung.

### Träger-Liste (Projekt-Posten aus Nebenbefunden, → Projektquelle § 7 R19)

R18-A N-2 Wellenprotokoll „nur FG-4" (MKT-AKQ) · N-3/N-4 Rn. 180/194/184
(Rechtsmatrix-Pflege) · N-5 „also Art. 14 Abs. 3 lit. a" eigene
Ableitung (markiert, Register-Beleg) · N-7 (Policy 6) · N-8 = H-7
R14-B-Kasten „kein Wächter deckt sie ab" ungemessen seit R17-B
(Leitsession R19) · R18-C N-3 Sperrposten „Preismodell existiert nicht"
×3 im Akquiseplan überholt (MKT-HANDEL-Bewertung + AKQ-Nachzug) · N-5
H-3 Sonntag (User) · Block 2: Vorlagen-Lesart, Anker H-8/AKQ-H-2, H-1-
Kollision, Prüfer-Namensräume · Prüf-Subagent Nebenfund 2 (Zielort Rn.
187/188 in STATUS/Projektquelle = AA § 6a, korrigiert 4b) · Nebenfund 4
(U+00AD Projektquelle/Register, korrigiert 4b) · L1 (`core.autocrlf`
System-Config; N-1-Wortlaut korrigiert 4b; `.gitattributes` als
eigener Vorgang nach R18) · P6 Webdesign-Leitlinie (Zeiger MKT-WEB) ·
P7 n8n-Lizenz (Warten; Nachzieh-Suchraum „A3 trägt" 6× Preismodell, 3×
Projektquelle, STATUS).

### Kompensations-Auslagerungen dieses Debriefs (Anker `V18-nn`; CLAUDE.md +569 B Kerne / −567 B Belege = 79.937, plus Stempel-Kopf +23 → 79.960 B; netto +25 B unter Soll)

- **V18-1 (L-34-Fallgeschichte, MKT R12, aus CLAUDE.md gekürzt):** Der
  Auftrag nannte den Unterabschnitt — die Nachbar-Rubrik desselben
  Dokuments trug den Entscheider des wichtigsten offenen Postens und
  blieb ungelesen; dieselbe Verengung führte einen Prüfer per „vom
  Protokoll rückwärts" zur Entwarnung, bis er den Suchraum selbst
  erweiterte (P-05 in Bau und Prüfung derselben Runde). Volltext unter
  L-34.
- **V18-2 (Kanäle-Belegfall, heyPensio, aus CLAUDE.md gekürzt):** Fix an
  EINEM von zwei beschriebenen Wegen geprüft, die Nachmessung fand drei
  weitere, darunter einen Endpunkt in einem anderen Namensraum.
- **V18-3 (Bildwissen-Belegfall, heyPensio R35, aus CLAUDE.md gekürzt):**
  Ein Anleitungstext beschrieb ein Bedienelement falsch; die richtige
  Beschreibung existierte nur auf Fotos aus einer früheren Sitzung.
- **V18-4 (Schlüssel-Belegfall, heyPensio R35, aus CLAUDE.md gekürzt):**
  Sechs Werte wurden in Quellreihenfolge übernommen, die zugehörigen
  Namen daneben „natürlich" sortiert — vier von sechs paarweise
  vertauscht, die Kontrollsumme stimmte weiter und deckte den Fehler zu.
- **Alt-Kerne der drei Schärfungen** (Wortlaut trägt der Git-Verlauf,
  Stand `5fc2a39`): L-51 (Belegsatz R17 „Superlativ an drei Fundstellen
  …/zwei Fremd-Dokumente…" aus dem Kern ins Register verlagert, s. L-51
  oben) · L-38 (Alt-Kern ohne Einfüge-Variante) · Werkzeugfehler-Zahl
  (Alt-Kern ohne Lauf-Verwerfung).
