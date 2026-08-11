# R08-A — Abschlussmeldung (Ben Beckman, MKT-AKQ1)

**Token-Verbrauch: von der Session nicht erhebbar — Subagenten-Zahlen
soweit bekannt: Prüf-Subagent (ein Lauf, durch Session-Limit abgebrochen
und aus dem Transkript fortgesetzt) 246.938 + 274.556 Tokens,
35 + 1 Tool-Aufrufe, 647 s + 389 s.** Eigene Session-Tokens weist die
Oberfläche nicht aus; `/cost` ist in diesem Projekt abgeschafft.

**Modell dieser Session:** ⚠️ **Statuszeile von mir nicht einsehbar** —
ich kann sie aus der Session heraus nicht lesen und mache **keine
Selbstauskunft** (CLAUDE.md Regel 7: die Selbstauskunft des Modells hat
nachweislich Abweichungen samt plausibler Begründung erfunden). **Der
User trägt das tatsächliche Modell in der Strang-Tabelle nach.**

---

## Block 1 — Gebaut und verifiziert

### Deliverables

| Datei | Umfang | Commit |
|---|---|---|
| `akquise/akquiseplan.md` | Kanal-Kapazitätsplan, Rückwärtsrechnung, Annahme-Register, KPI-Vorschlag, Terminplan, 8 Handgriffe, 3 User-Entscheide, 8 Nebenbefunde | `d11535f`, überarbeitet in `6e4daa5` |
| `akquise/listenbau-regelwerk.md` | 12 Abschnitte: D3-Entscheide byte-getreu · 6 D2-Pflichten · 4 Weg-b-Pflichten · 5 kanalweise Listen-Regelblöcke · Quellen-Ampel · Feldregister (18 Felder) · Fristenuhr · Kostenrisiko · 12 rote Linien · 8 offene Punkte | `d11535f`, überarbeitet in `6e4daa5` |
| `akquise/pruefe-zitate.js` + `akquise/selbsttest-zitate.md` | Verifikationswerkzeug mit Selbsttest | `d11535f` / `616e708`, erweitert in `6e4daa5` |
| `protokolle/R08-A-zitatpruefung.md` | Protokoll des mechanischen Zitatabgleichs | `d11535f` / `616e708` |
| `protokolle/R08-A-pruefer.md` | Protokoll des unabhängigen Prüfers (712 Zeilen) | `6e4daa5` |
| `protokolle/R08-A-befund-disposition.md` | Disposition jedes einzelnen Befunds | `6e4daa5` |

**Verzeichnis `akquise/` neu angelegt** — Prämisse „existiert nicht" vor
dem Bau selbst gemessen (Platte + `git log -- akquise/` leer), nicht aus
dem Prompt übernommen.

### Prüferbefunde kategorienweise MIT NENNER

| Schweregrad | Repariert | Bewusst offen | Träger | **Nenner** |
|---|---:|---:|---:|---:|
| **KRITISCH** | 2 | 0 | 0 | **2 von 2** |
| **WICHTIG** | 15 | 0 | 0 | **15 von 15** |
| **HINWEIS** | 8 | 0 | 0 | **8 von 8** |
| **Zusatzbefund aus einer Prüfer-Pflichtfrage (P-26)** | 1 | 0 | 0 | **1 von 1** |
| **Summe** | **26** | **0** | **0** | **26 von 26** |

Einzeln nachvollziehbar in `protokolle/R08-A-befund-disposition.md`.
**Jede Reparatur ist am Rohbeleg gemessen, nicht am Prüfertext:** Zwölf
Befunde enthielten eine Zahl-, Datums- oder Zählaussage — alle zwölf habe
ich vor der Reparatur selbst nachgerechnet, **12 von 12 bestätigt** (der
Prüfer lag in keinem Fall daneben).

⚠️ **Fünf Prüfschritte hat der Prüfer selbst als nicht abgeschlossen
ausgewiesen** (sein Lauf wurde vom Session-Limit unterbrochen). Sie sind
in der Disposition einzeln disponiert: zwei bleiben offen mit Träger
(nicht zurückverfolgte Rechtsmatrix-Zahlen → MKT-HANDEL; Kategorie-4-Rest
→ nächster Prüflauf), einer ist auf anderem Weg erledigt (Gegenprobe
jetzt im Skript verankert), einer von mir selbst nachgeholt
(`beleg/baseline-messplan.md` § 5 im Volltext gelesen), einer bleibt
bewusst außerhalb des Scope (inhaltliche Richtigkeit der Rechtsmatrix).

### Verifikation

**Mechanischer Zitatabgleich** (`node akquise/pruefe-zitate.js`, Endstand):

| Prüfstrecke | Ergebnis |
|---|---|
| Zitate in Anführungszeichen (beide Dokumente, ab 25 Zeichen) | **128 geprüft, 114 / 114 Quellenzitate bestätigt**, 14 deklarierte Ausnahmen mit Einzelbegründung |
| **Blockzitate** (2 D3-Kästen + D2-Pflichtenliste) gegen die Quelle | **3 / 3**, je 480 / 1.006 / 757 Zeichen zeichenweise |
| Rückbau-Gegenprobe je Block (verfälschte Fassung muss durchfallen) | **3 / 3** |
| Positivkontrolle — ein Anker **je Pooldatei, alle 8** | **11 / 11** |
| Gegenprobe (darf nicht treffen) | **3 / 3** |
| Selbsttest des Extraktionspfades | **bestanden** (8 / 4 / 4) |
| Exit-Codes Hauptlauf / Selbsttest | **0 / 0** |

**Eigene Nachrechnungen:** Trichtertabelle (1.600 / 606 / 337), 416 von
1.038 = 40,08 %, alle 15 Kreis-Namen-Zahl-Paare zeilengenau gegen die
Quelle, Summe 1.038 = Landeszeile, 94 Kalendertage bis zum Anker,
P(0)-Rechnung für die Wellengröße, alle Wochentage per Werkzeug.

---

## Block 2 — Offen geblieben

| # | Offen | Warum | Träger |
|---|---|---|---|
| **O-8** | ⭐ **Die Interessenabwägung nach Art. 6 Abs. 1 lit. f (Stufe 3) ist nicht durchgeführt** — § 6 leistet nur die Erforderlichkeitsprüfung je Feld | Sie ist eine eigene Arbeit, nicht ein Nebenprodukt des Feldregisters. **Unter Weg (b) ist sie das risikotragende Dokument** | Marketing-Session, **vor dem ersten Versand**, zusammen mit dem VVT-Eintrag |
| **O-1** | Wortlaut des Einwilligungstextes (D3 Punkt 3) | In der Rechtsmatrix ausdrücklich als OFFEN geführt; **nicht mitzuentscheiden** (Auftragsgrenze c) | User, beim Textbau |
| **O-2** | Löschfrist für die **Kaltkontakt**-Liste | Die 24 Monate betreffen Kunden, nicht Kaltkontakte (s. N-6) | User-Entscheid vor dem VVT-Eintrag |
| **O-3** | Nachvollziehbarkeit der Auswahl ohne gespeicherte Auswahlmerkmale | Spannung zwischen Datenminimierung und Dokumentationsinteresse; Lösungsvorschlag Wellenprotokoll steht im Regelwerk | beim ersten Wellenbau |
| **O-4** | **Wie groß die Zielmenge nach Abzug der Ketten/Konzerne wirklich ist** | Keine Betreiberstruktur-Schneidung im Bestand; der amtliche Zugang dazu ist selbst ein offener Posten | MKT-FUND / AKQ2 |
| **O-5** | Nachfass-Anruf nach eigenem Brief | In der Rechtsmatrix nicht behandelt → ungeklärt, nicht erlaubt | MKT-HANDEL (= N-1) |
| **O-6** | CRM-/Werkzeugwahl | Ausdrücklich nicht Gegenstand | MKT-OPS |
| **O-7** | Hamburg | Keine Kreisstatistik im Bestand | MKT-FUND |
| — | **A-1 bis A-7** (alle Konversions- und Kapazitätsannahmen) | Es gibt **keine** gemessene Zahl — wir haben nie einen Kontakt gemacht | H-2/H-3 (User) bzw. Welle 1 |
| — | Kategorie-4-Rest des Prüfers (§ 7.4, R-A6.1/2/4/6 nur stichprobenhaft) | Lauf abgebrochen | nächster Prüflauf |

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

Alle mit Zielort; diese Session hat **keinen** davon selbst eingearbeitet
(Scope: nur `akquise/**` + `protokolle/R08-A-*`).

| # | Befund | Zielort |
|---|---|---|
| **N-1** | **Der Nachfass-Anruf nach eigenem Werbebrief ist rechtlich ungeklärt** — die Rechtsmatrix behandelt die Konstellation nicht, schließt aber jeden Kanal-Rückschluss aus. Betrifft den Kanal, den sie selbst auf Rang 1 setzt: **Der Brief hat damit keinen eingebauten Nachfasskanal** | MKT-HANDEL (A2/A7) |
| **N-2** | ⭐ **Preismodell/Angebotsarchitektur fehlt und sperrt den Terminpfad** — ohne sie kann das Angebot (S1, bis 23.10.) nicht rausgehen. In der Planprüfung als „größte Einzellücke" benannt, im `handel/`-Bestand nicht vorhanden | MKT-HANDEL (HANDEL1) |
| **N-3** | KPI-5-Schwelle „unter 10 % Antworten" stammt aus einem Online-Kanalbild und erzeugt beim Briefkanal einen Dauer-Fehlalarm | MKT-OPS (OPS1) |
| **N-4** | **Internorga liegt hinter der November-Frist** — sie ist als Akquisekanal-Kandidat *und* als Rückwärts-Anker geführt; für Abschluss 1 trägt sie nicht | Projektquelle § 2 (AKQ1) |
| **N-5** | **K2 läuft überwiegend über das Netzwerk von Kayhan Rasuly** (Entscheider bei 2 von 3 Pilotobjekten, zugleich WTSH-Antragsteller) — die R7-Offenlegungspflicht wirkt damit in die Akquise-**Ansprache** hinein, nicht nur in die Case Study | MKT-BELEG (BELEG4) + AKQ2 |
| **N-6** | **Der D3-Kasten Punkt 1 setzt die 24 Monate „zugleich" als Löschfrist des VVT-Eintrags „für die Zielkundenliste" — das trägt nicht:** Kaltkontakte haben keinen Vertragsschluss, an den die Frist anknüpfen könnte. Dazu der nicht übernommene Zusatz „danach Einwilligung einholen", der mit einer Löschung kollidiert | MKT-HANDEL (D3 Punkt 1) |
| **N-7** | **In der Rechtsmatrix selbst fehlt am A7-Bullet der Vorwärtsverweis auf den Weg-b-Entscheid** — wer A7 liest und den D3-Kasten nicht kennt, handelt nach einer überholten Anweisung | MKT-HANDEL (A7) |
| **N-8** | **Fremde Verteiler sind nie als eigener Kanal geprüft** — D1 führt sie als Rang 3, Teil A hat keinen Abschnitt. Offen: Deckt die Einwilligung der Verbandsempfänger Werbung *für uns*? (A6 verlangt die Nennung „welcher Unternehmen") | MKT-HANDEL (neuer Teil-A-Abschnitt) |

**Zur Terminlage, weil sie niemandem sonst gehört:** Der StB-Anruf steht
in STATUS.md als User-Handgriff **Mo 10.08.** — er ist verstrichen, und
ob er stattgefunden hat, steht nirgends. Er ist die Vorbedingung des
Namensentscheids und damit des gesamten Akquise-Terminpfads (H-8).

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **⭐ Ein Prüfmuster, das nicht treffen kann, sieht aus wie ein
   sauberes Negativ — und die Positivkontrolle deckt es zu, wenn sie
   über einen anderen Kanal läuft.** Mein Zitatabgleich meldete im ersten
   Lauf „0 Zitate geprüft" bei 99 vorhandenen: Das Muster erwartete `“`
   (U+201C), das Repo schließt mit `"` (U+0022) — gemessen 243 / 243 in
   der Rechtsmatrix, **0 × U+201C**. Die Positivkontrolle meldete im
   selben Lauf 7/7, weil sie den Pool direkt absuchte statt durch die
   Extraktion zu gehen. **Nur die ausgegebene Zahl 0 machte es
   auffällig** — bei 90 statt 99 Treffern wäre nichts passiert.
   *Gegenmittel, das ich eingebaut habe:* eine Selbsttest-Datei, durch die
   der Produktivpfad selbst läuft.
2. **⭐⭐ Ein Wächter kann Entwarnung über einen Text geben, den er nie
   gelesen hat — und das überlebt sogar einen Selbsttest.** Genau das
   fand der Prüfer (P-02): Mein Skript prüfte alles *außer* den beiden
   D3-Kästen und der D2-Liste, weil die als Blockzitate ohne
   Anführungszeichen dastehen. Die Anker der Positivkontrolle fragten
   dabei den **Quellenpool** ab, nicht mein Dokument. **Der Selbsttest
   aus Falle 1 hat das nicht gefangen**, weil er dieselbe Extraktion
   testete, die die Blöcke gar nicht sieht. Fragestellung, die es gefangen
   hätte: nicht „funktioniert der Wächter?", sondern „**welchen Text liest
   er, und welchen nicht?**"
3. **Ein „erfüllt" zwischen fünf „nicht gebaut" fällt auf — aber nur,
   wenn jemand den Status prüft statt die Anwesenheit.** Die
   Vollzähligkeitsprüfung ergab 6/6 und 4/4 und sah sauber aus; der
   schwerste Befund (P-01) steckte im *Status* der sechsten Pflicht.
   Anwesenheit ist nicht Wirksamkeit — auch bei Pflichtenlisten.
4. **Ein Reparaturvermerk macht die eigene Prüfung rot.** Sobald ich die
   falschen Vorfassungen sichtbar dokumentierte (Doku-Hygiene-Regel),
   zählte mein Skript sie als unbestätigte Zitate und der Lauf endete mit
   Exit 1. Richtig ist nicht, den Vermerk wegzulassen, sondern die
   Fehlerfassungen **deklariert** in die Ausnahmeliste zu nehmen — sie
   dürfen im Pool gerade nicht stehen, das ist der Beleg, dass sie falsch
   waren.
5. **Ein Exit-Code hinter einer Pipe ist der Exit-Code der Pipe.**
   `node script.js | grep …; echo $?` meldete 0, während das Skript mit 1
   endete. Ausgabe in eine Datei, Exit-Code separat lesen.
6. **Die Auslassungspunkte sind Teil des Zitats.** Ich hatte in einem
   Zitat ein „…" der Quelle stillschweigend entfernt — das Zitat wirkte
   dadurch vollständig, wo die Quelle selbst eine Auslassung ausweist.
   Maschinell gefunden, weil der Vergleich zeichenweise läuft.
7. **Ein Sonntag fällt nur auf, wo ein Wochentag steht.** Dasselbe
   Dokument begründete seinen Planungsanker damit, dass der 15.11. ein
   Sonntag ist — und terminierte vier Handgriffe auf den Sonntag 16.08.,
   weil die Handgriff-Tabelle als einzige keine Wochentags-Etiketten trug.
8. **Push-Reihenfolge im geteilten Arbeitsbaum:** Unter meinem Commit lag
   zeitweise ein noch nicht veröffentlichter Commit von R08-B. Der
   Refspec-Push schützt nur nach oben — ich habe gewartet, statt fremde
   Arbeit mitzuveröffentlichen.
9. **Die Klassifikator-Blockade traf erst die `&&`-Kette, dann den
   Einzelbefehl** — der Push lief anschließend im PowerShell-Kanal durch.
   ⚠️ Das ist **kein** Beleg für Kanalbindung: Zwischen den Versuchen lag
   Zeit, und die L-05-Korrektur im Tagesplan hält ausdrücklich fest, dass
   die Bindung primär zeitpunkt- und nicht kanalbezogen gemessen ist. Ein
   A/B über zwei Kanäle trägt die Falsifikation, nie den Ursachennachweis.

### (ii) Bewährte Muster

1. **⭐ Von der Quelle RÜCKWÄRTS lesen findet, was Vorwärtslesen nie
   findet.** Der Prüfer hat P-06, P-07 und P-16 ausschließlich deshalb
   gefunden, weil eine Kategorie ihn zwang zu fragen „was steht in
   A7/A3, das im Zieldokument **fehlt**?". Fehlende Vorbehalte erzeugen
   keine auffällige Textstelle — sie sind unsichtbar, solange man das
   Zieldokument liest. **Empfehlung an die Leitsession: eine sechste
   Pflicht-Kategorie „Was aus der Quelle ist gar nicht erst angekommen?"**
   Genau daraus wurde P-26 (Teil B der Rechtsmatrix fehlte komplett) —
   und der Prüfer bemerkte es selbst erst beim Beantworten der
   Pflichtfragen, also außerhalb seiner Kategorien.
2. **Die zwei Pflicht-Zusatzfragen an den Prüfer haben mehr gebracht als
   eine sechste Kategorie es hätte.** „Welche Verfälschung hätte dein
   Verfahren nicht gefangen?" lieferte einen eigenen Befund; „hättest du
   es auch ohne die Kategorien gefunden?" lieferte die
   Methodik-Empfehlung. **Beide gehören in jeden Prüfauftrag.**
3. **Den Prüfer nach einem Abbruch fortsetzen statt neu starten.** Der
   Lauf brach nach 247k Tokens ohne geschriebene Datei ab. Ein Neustart
   hätte das bezahlte Ergebnis verbrannt; die Fortsetzung aus dem
   Transkript lieferte das vollständige Protokoll — **mit der
   ausdrücklichen Anweisung, zuerst zu schreiben und Unfertiges als
   unfertig zu kennzeichnen.** Genau das hat er getan (§ C seines
   Protokolls), und dieser Abschnitt war für die Disposition wertvoller
   als zusätzliche Befunde.
4. **Prämissen des eigenen Auftrags an der Quelle messen, bevor man
   baut.** Drei Prompt-Angaben habe ich selbst geprüft: `akquise/`
   existiert nicht (Platte + Historie), `fund/persona-befund.md`
   existiert nicht (trägt den ganzen Vorbehalt), `beleg/baseline-messplan.md`
   § 5 ist tatsächlich die beschriebene Bauform. Alle drei bestätigt —
   der Wert liegt darin, dass der Vorbehalt jetzt einen Beleg trägt statt
   einer Behauptung.
5. **Eine Rechnung, die die eigene Planung widerlegt, ist das nützlichste
   Ergebnis.** Die Trichterrechnung zeigt, dass der rechtlich offenste
   Kanal die Frist nicht tragen kann — und die P(0)-Rechnung zeigt, dass
   eine belastbare Messwelle bereits jenseits der eigenen Kapazität
   liegt. Beides wäre durch eine „vorsichtige" Formulierung
   verschwunden. **Das Ziel schlägt den Weg: Der Befund ist die
   Terminaussage, nicht die Stückzahl.**
6. **Eine deklarierte Ausnahmeliste mit Einzelbegründung schlägt eine
   stille Toleranz.** Jede der 14 Ausnahmen wird bei jedem Lauf
   mitgedruckt — sie kann nicht unbemerkt wachsen.
7. **Vergabelinien ausformulieren macht Inkonsistenzen sofort sichtbar.**
   Erst beim Aufschreiben von „L-1 Betriebszahl · L-2 Pilotnähe" wurde
   klar, dass Kiel (39) über Pinneberg (58) stand und das Zusatzkriterium
   nur auf zwei von 15 Kandidaten angewandt worden war.

---

*R08-A, MKT-AKQ1. Kein eigener Debrief (Leitsession). Alle Kalender- und
Rechenwerte per Werkzeug erhoben.*
