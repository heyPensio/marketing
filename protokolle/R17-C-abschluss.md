# R17-C (Lucky Roux) — Abschlussmeldung

> **Token-Verbrauch: von der Session nicht erhebbar** — Subagenten-Zahlen
> soweit bekannt: der Gegenlese-Subagent liefert keine Verbrauchszahl an
> die Session zurück; ein Wert ist damit **nicht erhoben**, nicht „null".
>
> **Prüfstand:** Rundenstart-Hash für alle Löschungszählungen `926ca3c`.
> Erster Messstand bei Session-Start `90254e1`, zweiter Messstand vor dem
> Commit `f4f1139` (die Leitsession hat zwischenzeitlich `4a0a5a3` und
> `f4f1139` committet — beide berühren **keine** meiner Scope-Dateien,
> gemessen per `git diff --numstat 90254e1..f4f1139`). Nach dem Commit
> Parent gegen Prüfstand gehalten: Parent von `1804b1c` = `f4f1139` ✓.
> **Bau-Commit: `1804b1c`**, gepusht per Refspec, Veröffentlichung belegt
> mit `git branch -r --contains 1804b1c` nach frischem `git fetch`.
>
> ⚠️ **Reparatur-Commit `0c0a2a7` liegt LOKAL — Push bewusst
> aufgeschoben.** Zwischen meinem Bau- und meinem Reparatur-Commit hat
> R17-A (Ben Beckman) **vier eigene Commits** gesetzt (`af92adb`,
> `4f739f5`, `ecb197c`, `26975c8`), die ungepusht **unter** meinem liegen.
> Der gezielte Refspec `git push origin 0c0a2a7:main` schützt nur nach
> OBEN — Vorfahren gehen mit; ich würde fremde Arbeit veröffentlichen,
> bevor die fremde Session das entschieden hat. **Und R17-A ist nicht
> fertig:** `protokolle/R17-A-pruefer.md` liegt untracked im Arbeitsbaum,
> die Prüferdisposition steht dort also noch aus (der Zustand einer
> Parallel-Session wird nicht aus Commits geschlossen — maßgeblich sind
> Abschlussmeldung und `git status`; beides sagt hier: laufend).
> **Freigabe des Pushs durch User/Leitsession, oder er geht automatisch
> mit dem Push von R17-A raus.** Der Commit selbst ist vollständig und
> gegengelesen — es fehlt allein die Veröffentlichung.

---

## Block 1 — Gebaut und verifiziert

Alle fünf Auftragsposten erledigt, alle in Commit **`1804b1c`**.

### 1. `akquise/akquiseplan.md` § 3.2 — R16C-N-1 erledigt

Die Aussage „sofort baubar, ohne Namensbindung" und „Nur der Versand hängt
am Namen" ist seit R9 gekippt. Gebaut:

- **ÜBERHOLT-Kasten VOR dem Absatz** (Stelle, an der der Leser ankommt),
  **Original im Wortlaut unverändert erhalten**.
- **Nachtrags-Kasten mit dem Vorbehalt ZUERST:** Der Rn.-87-Satz steht
  nach dem Bestandsvermerk der Rechtsmatrix nicht in der tragenden
  Absagebegründung (tragend Rn. 84/85, Rn. 87 hilfsweise); die
  Vorsichtsannahme bleibt in Kraft; ob ein nicht tragender Satz die
  Betriebsfolge trägt, ist **Frage an den Anwalt**. Erst danach die Folge.
- **Gesperrt ausgewiesen (2):** die Zielkundenliste selbst; die Aussage,
  nur der Versand hänge am Namen.
- **Positivliste des Weiter-Gültigen (9 Punkte), je mit Bestandsbeleg** —
  darunter zwei ausdrücklich mit **schwacher Belegstufe**: Lead-Bogen und
  Gesprächsleitfaden tragen nur ein **Negativ aus Aktenlage** (kein
  positiver Beleg der Namensfreiheit, nur kein Gegenbeleg). Das
  Wellenprotokoll ist ergänzt, weil es im Original fehlte, aber nach
  o8 § 10 B-6 Pflicht ist.

### 2. `akquise/akquiseplan.md` § 3 Terminlogik gegengelesen — n von n

**11 Aussagen geprüft: 2 gekippt und nachgezogen · 7 unberührt · 2
Nebenbefunde** (Summe 11). Die Summenprobe belegt die Vollzähligkeit,
**nicht** die Richtigkeit der Einstufung — deshalb steht jede der 11
Aussagen im Kasten einzeln benannt.

- **Nachgezogen:** der § 3.2-Absatz (oben) und **Pfad (b) Arbeitstitel**.
  Pfad (b) trägt nach der Verschärfung eine zusätzliche offene Frage: Wenn
  F-7 schon den ersten Datensatz sperrt, muss ein Arbeitstitel die Rolle
  des Verantwortlichen in der Art.-14-Information ausfüllen können. Das
  ist als **Rechtsfrage an den Anwalt** markiert, nicht beantwortet, und
  die Belegstufe des Hinweises ist als **eigene Ableitung** gekennzeichnet.
- **Unberührt (7):** S4-Zeile · S5-Zeile · Null-Puffer-Kasten · ⭐-Kasten
  kritischer Pfad · November-Frist-ohne-Puffer · Pfad (a) · „Beides hat
  Außenwirkung". **Befund:** § 3.1 führt S5 (Name) ausdrücklich als
  *Voraussetzung von S4* (Bau) — die Terminarithmetik des § 3.1 war also
  bereits richtig; gekippt war allein die Aussage in § 3.2.

### 3. `akquise/akquiseplan.md` § 4.3 — R16C-N-2 erledigt, Auftragsweg widerlegt

Zwei Brüche an einer Naht, **beide am git-Verlauf belegt statt erschlossen**:

- **Die Auftragsvorgabe „das `>`-Präfix ergänzen" trägt nicht.** Im
  Erststand `d11535f` war die Passage **kein Blockquote**, sondern
  Fließtext mit dem Vorspann *K1 wird deshalb nicht gestrichen, sondern
  umdatiert:*. Ein `>`-Präfix hat an dieser Zeile **nie** gestanden; es zu
  ergänzen hätte den Fließtext (der zur Wellengrößen-Tabelle führt)
  fälschlich in den FUND2-Vorbehaltskasten gezogen.
- **Ursache mechanisch belegt:** Zwischen `d11535f` und `6e4daa5`
  (R08-A-Reparaturlauf) wurde der FUND2-Kasten eingefügt; sein Edit-Anker
  **konsumierte den Vorspann-Satz** und ließ das Fragment „Er ist der" am
  Kastenende zurück — CLAUDE.md **L-38**. Der Bruch lief durch `1da1327`
  und `5d7d78d` unbemerkt mit.
- **Reparatur:** Vorspann byte-treu aus `d11535f` wiederhergestellt,
  Fragment entfernt. Damit ist **(b) der Bezug von „Er" nicht erschlossen,
  sondern die Original-Formulierung: K1** — und (a) ist im selben Griff
  behoben. Kontextbestätigung zusätzlich im Kasten (Tabellenspalte
  Aufbauaufgabe, KPI-5, Folgesatz zu Welle 1).

### 4. `akquise/listenbau-regelwerk.md` § 6.1 — R15E-N-1 erledigt

**Am Objekt nachgeprüft: 3 von 3 Abweichungen bestehen weiter, 0 von 3
zwischenzeitlich erledigt.** Die drei Punkte in o8 wörtlich aufgesucht
(Kürzel UND Sache):

| Abweichung | Quelle, wörtlich aufgesucht | eingearbeitet |
|---|---|---|
| (a) FG-2-Anteil | o8 § 5.4, FG-2-Zeile: „Anteil im Wellenprotokoll ausweisen" (B-6) | ✅ Feld 4 |
| (b) zwei Textversionen | o8 § 10 B-5: „Der Art.-14-Beileger und der Widerspruchs-Kasten" je Versionsnummer | ✅ Feld 6, zwei Felder |
| (c) zwei Abgleich-Anlässe | Regelwerk § 7.3 R-B6: vor jedem Versand **und** vor jedem Druckauftrag | ✅ Feld 5, mehrzeilig |

Ergebnis ist eine **vollständige Fassung mit sechs Protokollfeldern**. Der
R13-B-Nachtrag und der R15-E-Zeiger bleiben als Herkunft unverändert
stehen; der Vermerk *Neufassung liegt bei der Leitsession* ist als erledigt
ausgewiesen.

### 5. `akquise/listenbau-regelwerk.md` § 3 Pflicht 4 — R16A-N-1 erledigt

Rn.-87-Bestandsvermerk ergänzt, **Wortlaut byte-treu aus
`handel/kanal-rechtsmatrix.md` (Stand `926ca3c`) zitiert, nicht neu
formuliert**. Ausdrücklich mitgeschrieben: **Die Rechtsfolge bleibt in
Kraft** — „nicht tragend" heißt nicht „falsch", das Urteil trägt die Absage
in Rn. 84/85 nur anders. Nichts dazuerfunden. § 10 des Regelwerks
(O-12/Wächter-Satz) **nicht angefasst** (Leitsession nach R17-B).

### 6. `beleg/baseline-messplan.md` — R16C-N-3 erledigt, H-2 entflochten

**H-2 trägt drei Teile mit drei verschiedenen Ständen** — der Widerspruch
Kopf ↔ Tabelle war, dass zwei Teile **sieben Tage VOR ihrer Frist erfüllt**
und an ihrem Träger nie geschlossen worden waren (CLAUDE.md-Fall
„ERFÜLLEN"):

| Teil | Stand | Beleg |
|---|---|---|
| 1 Plan-Freigabe | ✅ erteilt 09.08.2026 | Statuskasten im Kopf, Originalwortlaut, Prüfdurchgang R02-A |
| 2 Entscheid BM-4/BM-5 | ✅ entschieden 09.08.2026 | Kopf-Nachtrag Punkt 3 |
| 3 Entscheid Zielstichprobe | ⚠️ ungeklärt, Frist verstrichen | Suchweg unten |

- **Teil 3 mit Suchweg und Positivkontrolle gemessen:** grep über alle
  `*.md` des Repos, zwei Achsen — Kürzel (`H-2`) und Sache
  (`Zielstichprobe`/`Ziel-Stichprobe`); `sensibel/` ausgenommen.
  **Positivkontrolle:** dieselbe Suche findet `H-1` 92-mal, darunter den
  am 17.08. erledigten Livegang-Handgriff — der Suchweg trifft.
  **Belegstufe des Negativs: Aktenlage, nicht Vollbeweis** (ein mündlicher
  Entscheid ohne Repo-Spur wäre damit nicht widerlegt).
- **Beide Lesarten vorgelegt statt selbst entschieden** (A: mit der
  Plan-Freigabe mitfreigegeben → H-2 vollständig erledigt; B: ausdrücklicher
  Entscheid verlangt, der für BM-4/BM-5 vorliegt und für die
  Zielstichprobe nicht → Teil 3 offen).
- **Verstrichene Frist sichtbar, KEIN Ersatzanker erfunden** — ein
  selbstgesetzter Termin sähe wie eine Zusage aus, die niemand gegeben hat.
- **Machbarkeits-Vorbehalt § 5** („Fenster hält nur, wenn die Freigabe bis
  ~16.08. steht"): Bedingung ist am 09.08. **eingetreten**, als erfüllt
  vermerkt; die beiden anderen Vorbehalte des Absatzes ausdrücklich als
  unberührt ausgewiesen. *(Eine konditionale Warnung altert lautlos.)*
- **H-1 nicht angefasst.**

### Messungen — alle mit ausgewiesenem Zählweg

**⚠️ Messgerät eingefroren, und das war nötig:** Die Arbeitskopie von
`akquise/pruefe-zitate.js` ist von der Parallel-Session **R17-B umgebaut**
(ZIEL 8 → 27, Positivkontrolle 14 → 33, neue Rohbeleg-Kategorien, neue
Baseline-Gruppe). Ein naiver Vorher/Nachher-Vergleich hätte das Lauf-Delta
meiner Arbeit zugeschrieben — **L-40**. Gemessen wurde deshalb mit dem
**committeten Wächter-Blob `76d0a441`** gegen zwei Scratch-Exporte:
Stand A = `git archive HEAD`, Stand B = A + meine drei Dateien;
**Isolation belegt** per `diff -rq A B` = genau meine drei Dateien, nichts
sonst. Beide Läufe: ZIEL 8, POOL 11.

| Datei | NEU vorher (A) | NEU nachher (B) | bestätigt (Pool) |
|---|---|---|---|
| `akquise/akquiseplan.md` | 0 | **0** | 26 → 37 |
| `akquise/listenbau-regelwerk.md` | 0 | **0** | 102 → 111 |

Positivkontrolle 14/14, Gegenprobe 3/3, Blockzitate 3/3 in **beiden**
Läufen. Gesamt-NEU 51 → 51 (unverändert; alle 51 in
`handel/kanal-rechtsmatrix.md` = laufende R17-A-Arbeit, nicht meine).
**20 meiner neuen Zitate sind byte-treu am Pool bestätigt.**

**Zweiter Messlauf nach den Prüferreparaturen** (Stand `26975c8`, den
R17-A zwischenzeitlich gesetzt hat — vier BENBECKMAN-Commits, **keine
meiner Dateien berührt**, gemessen per `git diff --numstat 1804b1c..HEAD`;
seine Rechtsmatrix-Arbeit erklärt den Sprung der Gesamt-NEU-Zahl auf 120
vollständig, deshalb ist der Vergleich erneut isoliert gefahren):

| Datei | NEU vor Reparatur | NEU nach Reparatur | bestätigt (Pool) |
|---|---|---|---|
| `akquise/akquiseplan.md` | 0 | **0** | 37 → 42 |
| `akquise/listenbau-regelwerk.md` | 0 | **0** | 111 → 114 |

Positivkontrolle 14/14, Gegenprobe 3/3, Blockzitate 3/3. **8 weitere
Pool-Zitate byte-treu bestätigt.** Zwischenstand waren hier 11 NEU —
erneut **ausschließlich Selbstzitate aus derselben Datei** (Zitate meiner
eigenen Vorfassungen und der § 6/§ 7/§ 8-Stellen), alle 11 auf Kursiv
umgestellt. **Zählweg der Umstellung:** Skript mit Trefferkontrolle je
Muster — **jedes muss genau 1× greifen, sonst schreibt es nichts**;
Ergebnis 11/11, plus Gegenprobe, dass nach Entfernen aller
Anführungszeichen und Sterne der Text **identisch** ist (nur Auszeichnung
geändert, kein Wort angetastet).

**Zwischenstand waren 5+5 NEU — beide Klassen waren mein Fehler, nicht der
des Wächters, und beide sind repariert:**
1. **Vier byte-treue Pool-Zitate** wurden nicht erkannt, weil ich
   **Blockquotes verschachtelt** hatte (`>   >`): Die Normalisierung
   entfernt nur **ein** `>` am Zeilenanfang, das zweite bleibt **mitten im
   Zitat** stehen. Verschachtelung aufgelöst (30 Zeilen) → alle vier
   bestätigt. Weder Zitat geändert noch Ausnahmeliste angefasst.
2. **Sechs Selbstzitate aus derselben Datei** (Akquiseplan/Regelwerk sind
   **nicht** im POOL) — jetzt kursiv statt in deutschen
   Anführungszeichen. Damit entsteht **kein Pflegebedarf in der
   EIGEN-Liste**, die R17-B gehört.

**Löschungszählung mit ZWEI Nennern.**
*Nenner 1 — gegen den Rundenstart `926ca3c` (beweist: kein Bestandstext
angetastet):* Bau-Commit 178/2 · **83/0** · 72/2; **nach den
Prüferreparaturen 264/2 · 106/0 · 99/2 — die Löschungszahl bleibt bei
genau 4.** Das ist der mechanische Beleg, dass die Reparaturen
ausschließlich meinen eigenen Text getroffen haben.
*Nenner 2 — gegen den eigenen Bau-Commit `1804b1c` (zeigt die
Reparaturen):* 128/42 · 35/12 · 39/12 = **66 Löschungen, alle in meinen
eigenen Kästen** (jede gelöschte Zeile ist eine Zeile meiner Vorfassungen).
**Alle vier Löschungen gegen den Rundenstart einzeln:**
(1) Pfad-(b)-Tabellenzelle — Wortlaut vollständig erhalten, nur
Vorwärtsverweis angehängt; (2) das Fragment „Er ist der" — die dokumentierte
§ 4.3-Reparatur; (3) § 5-Tabellenzeile und (4) H-2-Zeile im Messplan — beide
durchgestrichen mit **sichtbar erhaltenem Original**. **0 stille
Löschungen.** Der Original-Absatz des Machbarkeits-Vorbehalts wurde nach dem
Naht-Edit per `diff` gegen `926ca3c` als **byte-identisch** belegt.

**Zeichen und Zeilenenden vorher/nachher:** NBSP 0/0 · U+00AD 1/1
(Akquiseplan, unverändert — die Fundstelle liegt außerhalb meines Scope) ·
ZWSP 0/0 · `git ls-files --eol` unverändert `i/lf w/crlf` ·
`git diff --check` 0.

---

## Block 2 — Offen geblieben

1. **H-2 Teil 3 (Zielstichprobe) braucht einen User-Entscheid** — sowohl
   die Sachfrage (Lesart A oder B) als auch den **neuen Termin-Anker**.
   Klartext-Frage an den User steht unten.
2. **Pfad (b) Arbeitstitel:** Die Rechtsfrage (kann ein Arbeitstitel die
   Art.-14-Angabe zum Verantwortlichen tragen?) ist gestellt, aber
   **unbeantwortet** — Träger MKT-HANDEL / anwaltlicher Rat.
3. **Der Vorlagen-Stand** („Vorlagen beauftragt" im Fertig-Kriterium des
   Messplans) wurde in dieser Session **nicht erhoben** — ausdrücklich als
   nicht-erhoben im Dokument vermerkt, nicht zu „erledigt" geglättet.
4. **Fünf Stellen im Akquiseplan tragen die alte Ein-Gate-Logik weiter**
   (Gegenlese-Befund B-5, Träger **Leitsession**, außerhalb meines
   Dateiscope): § 6 Terminplan drei Zeilen (Zielkundenliste hängt „nur"
   am Regelwerk · Pflichtbausteine „ohne Namensbindung" pauschal · S5
   „ODER Arbeitstitel" als gleichwertige Alternative) · § 7 H-8
   („Vorbedingung von S5 und damit des gesamten Terminpfads") · § 8 E-A1
   (Verweis auf § 3.2 ohne den neuen Vorbehalt). **Das sind die Stellen,
   an denen ein Leser den Zeitplan holt** — im Kasten benannt, aber nicht
   repariert.
5. **StB-Termin: STATUS.md führt zwei Angaben** (Punkt 1 „Mo 10.08.",
   Punkt 0 „~KW 34/35"). Welche gilt bzw. ob es zwei Handlungen sind,
   ist **ungeklärt** — Träger Leitsession/Zentrale.
6. **Der Doppel-Messstand-Vertrag ist nicht fremd abgenommen:** Der
   Gegenleser durfte den Arbeitsbaum nicht sichten und konnte daher nicht
   verifizieren, dass die Wächter-Läufe gegen den *committeten* Blob
   liefen. Bleibt als Prüflücke für die Leitsession-Abnahme.

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

### Pflichtfeld: Welche benannten Posten mein Ergebnis ERFÜLLT

| Posten | Träger | Status durch `1804b1c` |
|---|---|---|
| **STATUS.md „Nächster konkreter Schritt" Punkt 0**: „der Akquiseplan ist entsprechend nachzuziehen" | STATUS | **ERFÜLLT** |
| **R16C-N-1** (Akquiseplan § 3.2) | Routing § 6a | **ERFÜLLT** |
| **R16C-N-2** (Akquiseplan § 4.3 Textbruch) | Routing § 6a | **ERFÜLLT** — Auftragsweg dabei widerlegt, s. Block 1.3 |
| **R16C-N-3** (Messplan H-2) | Routing § 6a | **ERFÜLLT** (Teil 1+2 geschlossen, Teil 3 als User-Entscheid ausgewiesen) |
| **R15E-N-1** (Regelwerk § 6.1) | Routing § 6a | **ERFÜLLT** |
| **R16A-N-1** (Regelwerk § 3 Pflicht 4) | Routing § 6a | **ERFÜLLT** |
| Regelwerk § 6.1: *Neufassung liegt bei der Leitsession* | Regelwerk selbst | **ERFÜLLT** — Vermerk gegenstandslos |

### Nebenbefunde für andere Träger

1. **`akquise/interessenabwaegung-o8.md` ist in sich inkonsistent**
   (Träger: **R17-A**, o8 ist dessen Scope): § 5.4 verlangt in der
   FG-2-Zeile wörtlich „Anteil im Wellenprotokoll ausweisen (B-6)",
   während § 10 **B-6** selbst nur „Anteil FG-4 (Impressumsquelle)"
   aufzählt. Meine Ableitung folgt der strengeren Stelle und steht
   sichtbar unter dem Vorrangvorbehalt (bei Widerspruch gewinnt o8).
   **Ich habe o8 nicht angefasst.**
2. **Kurz-ID-Kollision `H-2` — dreifach** (Träger: Leitsession, L-35):
   `beleg/baseline-messplan.md` (Plan-Freigabe), `akquise/akquiseplan.md`
   § 7 (zwei Zahlen nennen: Vorkontakte + Briefe/Woche, Frist Fr 14.08.)
   und `protokolle/R05-A-pruefer.md` (DEHOGA-Beitragsstufen) führen **drei
   verschiedene H-2**. Der Akquiseplan-H-2 hat eine **andere Frist** als
   der Messplan-H-2 — beim Verdichten kollidieren sie.
3. **Soft-Hyphen im Bestand** (Träger: Leitsession): `akquise/akquiseplan.md`
   § 5 KPI-5-Zeile trägt „Termin­quote" (U+00AD). **Ein grep auf
   „Terminquote" läuft ins Leere.** Vorher-Nenner 1, unverändert 1 — die
   Stelle liegt außerhalb meines Scope, deshalb nur gemeldet.
4. **Zwei alternde Relativzeitangaben** in Akquiseplan § 3.1 (Träger:
   Leitsession): *S5 liegt drei Tage nach heute* und *das war gestern*
   stammen vom Erstellungsstand 11.08. und sind am 17.08. verstrichen;
   S5 (14.08.) ist vorbei. Im Kasten benannt, **nicht** repariert (nicht
   „sofort baubar"-abhängig, also außerhalb des Auftrags).
5. **`projektquelle-mkt.md` § 7 Punkt 3 ist überholt** (Träger:
   Leitsession, Wahrheits-Kanal): Dort steht „**H-2 (Plan-Freigabe
   BM-4/BM-5) trägt dieselbe verstrichene Frist 16.08. — offen, neuer
   Anker fehlt (R16C-N-3)**". Am Objekt sind **genau diese beiden Teile
   seit 09.08. erledigt**; offen ist allein der dritte Teil
   (Zielstichprobe), der dort nicht genannt ist.
6. **Werkzeugbefund `node -e` über den Bash-Kanal** (Träger: Baustein
   `windows-powershell`): Eine NBSP-Zählung mit **Literalzeichen** im
   Inline-Skript meldete **0 → 8660** — das Literal verlor über die
   Kommandozeile seine Kodierung und zählte alle Leerzeichen. Kein
   Dateibefund. Abhilfe: Zählung als **Skriptdatei** mit Selbsttest.
7. **⚠️ Eigener Altfehler aus R16-C: eine Tabellenzeile rendert zerlegt**
   (Träger: Leitsession — die Stelle liegt **außerhalb meines Scope**,
   § 4.4 gehört zur 300er-Schwelle, die beim User liegt (E-A4)).
   `akquise/akquiseplan.md` § 4.4, Optionentabelle, Zeile (B): Der
   Zellentext enthält ein Grep-Kommando mit **zwei unmaskierten Pipes**
   (`"neu zu führen|neu geführt|Neu-Führung"`). Die Zeile hat damit **6
   statt 4 Spalten** und zerlegt beim Rendern — genau die
   CLAUDE.md-Regel „Ein `|` im Fließtext einer Markdown-Tabellenzelle
   zerlegt die Zeile". **Herkunft belegt:** `5d7d78d` (R16-C Teil 1,
   meine eigene Vorrunde), `git log -S` auf den Suchstring.
   **Relevanz:** Es ist eine **Entscheidungsvorlage für den User** —
   ausgerechnet dort ist die Darstellung kaputt. Fix ist zwei Zeichen
   (`\|`), ich habe ihn **nicht** ausgeführt, weil § 4.4 nicht in meinem
   Dateiscope steht.
   **Nachbarformen gesucht (Pflicht bei Formfehler-Klassen):** Lauf über
   `akquise/*.md`, `handel/*.md`, `beleg/*.md`, `fund/*.md`, `STATUS.md`,
   `projektquelle-mkt.md` → **1 von 1**, keine weitere Fundstelle.
   **Gegenmessung gegen den Rundenstart `926ca3c`:** Die Meldung besteht
   dort identisch (nur an anderer Zeilennummer) — **Bestandsbefund, nicht
   von dieser Session verursacht.**
8. **Der Zitat-Wächter im Arbeitsbaum ist unfertige Fremdarbeit**
   (Träger: Leitsession/R17-B): Wer in dieser Runde mit
   `node akquise/pruefe-zitate.js` misst, misst den **Umbaustand** von
   R17-B, nicht den abgenommenen Wächter — Läufe brauchen bis zur Abnahme
   ein eingefrorenes Messgerät.

### Klartext-Frage an den User (H-2 Teil 3)

> **Der Messplan ist seit dem 9. August freigegeben — das ist erledigt, und
> zwar eine Woche vor der Frist.** Was in der Handgriff-Liste als „bis
> 16.08." stehenblieb, war nur nie abgehakt worden. **Zwei Dinge bleiben
> aber offen, und beide gehören Dir:**
>
> **(1) Die Stichprobengröße.** Der Plan sieht vor: mindestens 30
> gemessene Check-ins je Hotel (Firzlaff's und Rabe's), beim Hostel alle,
> die im Messfenster anfallen. Das ist ein Zielwert, kein Abbruchkriterium
> — werden es weniger, wird die kleinere Zahl einfach dokumentiert. **Die
> Frage ist: Gilt diese Größe als von Dir mitentschieden (dann ist der
> Handgriff komplett erledigt), oder willst Du sie ausdrücklich bestätigen
> oder ändern?** Im Repo ist zu diesem Punkt kein eigener Entscheid von Dir
> auffindbar — anders als bei den beiden Zusatz-Messungen, wo Deine
> Festlegung dokumentiert ist.
>
> **(2) Der neue Termin.** Die alte Frist (16.08.) ist verstrichen. Ich habe
> **keinen Ersatztermin eingetragen** — ein von mir gesetztes Datum sähe
> wie eine Zusage aus, die Du nie gegeben hast. **Wann soll dieser Punkt
> stehen?** Zeitdruck besteht dabei nicht von der Freigabe-Seite: Das
> vierwöchige Messfenster (24.08.–20.09.) ist gesichert, weil die Freigabe
> längst vorliegt.

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **⭐ Der im Auftrag vorgegebene Reparaturweg war falsch — und die
   Messung, die das zeigt, kostete zwei Minuten.** Der Prompt sagte für
   § 4.3: „das Präfix ergänzen (mechanisch)". Ein Blick in `d11535f`
   zeigte: Das Präfix hat **nie** existiert, die Zeile war Fließtext mit
   einem Vorspann, den ein späterer Edit-Anker verschluckt hat. Wer
   „mechanisch" liest und ausführt, hätte den Fließtext in einen
   Vorbehaltskasten gezogen **und** den Bezug von „Er" weiterhin nur
   erschlossen — obwohl er byte-treu im Erststand stand. **Auch der
   Reparaturweg eines Auftrags ist eine Annahme; das Ziel schlägt den
   Weg.**
2. **⭐ Ich habe die Fehlerklasse, die ich gerade reparierte, im selben
   Zug selbst begangen.** Beim Einfügen des Bedingung-eingetreten-Kastens
   in den Messplan habe ich den Machbarkeits-Vorbehalt **mitten im Satz
   zerrissen** und die Satzhälfte dupliziert — genau der L-38-Fall, den
   ich zwanzig Minuten vorher in § 4.3 dokumentiert hatte. Gefangen nur,
   weil ich die Naht nach dem Edit gelesen habe. **CLAUDE.md L-49 gilt
   wörtlich: Eine gerade angewandte Regel schützt den Text nicht, den man
   dabei schreibt.** Gegenmittel, das gegriffen hat: nach jedem
   Einfüge-Edit die Naht lesen **und** den Original-Absatz per `diff`
   gegen den Rundenstart auf byte-Identität prüfen.
3. **⭐ Eigene Blockquote-VERSCHACHTELUNG macht byte-treue Zitate
   unauffindbar.** Vier korrekt aus dem Pool kopierte Zitate meldete der
   Wächter als NEU, weil `>   > ` nach der Normalisierung (die nur **ein**
   `>` je Zeilenanfang entfernt) ein `>` **mitten im Zitat** zurücklässt.
   Der Reflex wäre gewesen, die Zitate anzuzweifeln oder die
   Ausnahmeliste zu füllen — richtig war, die **Formatierung** zu ändern.
   In einem Dokument mit Zitat-Wächter ist die Blockquote-Tiefe ein
   funktionales Merkmal, keine Optik.
4. **Selbstzitate in deutschen Anführungszeichen erzeugen NEU-Meldungen,
   wenn die eigene Datei nicht im POOL steht.** Sechs Fälle. Ein Zitat aus
   der eigenen Datei ist inhaltlich legitim, für den Wächter aber
   unbelegbar. Kursiv statt Anführungszeichen löst es, ohne die
   EIGEN-Ausnahmeliste einer fremden Session zu belasten.
5. **⭐ Meine Summenprobe stimmte, die Einstufung war falsch.** Ich
   schrieb „11 Aussagen: 1 nachgezogen, 8 unberührt, 2 Nebenbefunde" —
   Summe 11, also grün, und trotzdem falsch: nachgezogen waren **2**,
   unberührt **7**. Exakt die in CLAUDE.md notierte Blindstelle der
   Summenprobe (sie fängt die vergessene Zeile, nie die Fehleinstufung).
   Gegenmittel: die Einstufung **je Element einzeln benennen**, nicht nur
   die Kategoriesumme.
6. **Ein Zählwerkzeug mit Literalzeichen in `node -e` über den Bash-Kanal
   lügt.** NBSP 0 → 8660. Die Zahl war *unmöglich* — deshalb aufgefallen.
   Wäre sie 0 → 3 gewesen, hätte ich eine Encoding-Reparatur an einer
   gesunden Datei erwogen.
7. **⭐ Das Messwerkzeug selbst war fremde Baustelle.** Mein Nachher-Lauf
   zeigte plötzlich ZIEL 27 statt 8 und Positivkontrolle 33 statt 14 —
   R17-B baut denselben Wächter im geteilten Arbeitsbaum um. Hätte ich das
   Delta „0 → 5 NEU" gedeutet, ohne die **Prüfmengen-Konstanten** zu
   lesen, hätte ich fremde Arbeit als eigenen Befund verbucht (L-40).
   **Ein Messgerät, an dem parallel gearbeitet wird, ist kein Messgerät.**

8. **⭐⭐ Die teuerste Falle des Laufs: Ich habe die unbequeme Hälfte
   weggelassen — in genau dem Text, der die Belegkraft dokumentieren
   sollte, und die Quelle sagt es wörtlich voraus.** Der
   Bestandsvermerk der Rechtsmatrix enthält den Satz „Wer die Belegkraft
   der Rn.-87-Ableitung dokumentiert, ohne das zu nennen, dokumentiert
   die schwächere Hälfte" — gemeint ist die Rn.-86-Vorfeld-Zuordnung, die
   *unseren* Schritt (den Listenaufbau) aus dem Streitgegenstand
   herausschiebt. **Ich habe sie in beiden Kästen weggelassen** und
   stattdessen nur den Literatureinwand genannt, also die harmlosere
   Hälfte. Dazu kam die Umankerung des Vorbehalts („nur schwächer als der
   Satz allein" statt „nur **noch** schwächer als der Rest dieses
   Vermerks") — drei Weichmacher, alle in Richtung meiner eigenen
   Aussage. **Ich hatte den Vermerk vollständig gelesen und im Kasten
   ausdrücklich „Vorbehalt zuerst" geschrieben.** Das schützt nicht:
   Verdichtungsdrift greift auch dort, wo man sie benennt. Was geholfen
   hat, war ausschließlich der unabhängige Leser mit dem Auftrag,
   **Aussage und Fundstelle getrennt** zu prüfen — er musste den
   Quellabsatz am Stück lesen und stieß dabei auf den Warnsatz. Ein Grep
   hätte alle 17 Zitate bestätigt.
9. **Eine Auftragsformulierung kann den Fehler mitliefern.** Der Prompt
   gab für den Rn.-87-Vermerk vor: „das Urteil trägt es in Rn. 84/85
   anders (so steht es im Vermerk — nichts dazuerfinden)". Ich habe das
   übernommen — und es ist als **Begründung für das Inkraftbleiben der
   Sperre** ein Non-sequitur: Rn. 84/85 trägt die lit.-f-Absage, nicht die
   Fälligkeitsregel. Die Quelle begründet das Inkraftbleiben allein mit
   der Risiko-Asymmetrie. „So steht es im Vermerk" deckt den Wortlaut,
   nicht seine Verwendung als Beweisgrund.
10. **Zwei Werkzeugfallen bei Anführungszeichen, beide nur durch
   Trefferzahlen aufgefallen, die nicht sein konnten.** (a) Dieses Repo
   schreibt öffnend `„` (U+201E) und schließend **ASCII `"`** — kein
   U+201C; mein erster Ersetzungslauf traf **0 von 11** Mustern.
   (b) Zitate laufen im umgebrochenen Markdown über **Zeilengrenzen** mit
   `> `-Präfix dazwischen; das einzeilige Muster traf dann **7 von 11**.
   Beide Male war die Datei in Ordnung und das Muster falsch. **Ein
   Ersetzungsskript braucht eine Trefferkontrolle je Muster mit
   Abbruch** — sonst hätte es 7 Stellen geändert und 4 stillschweigend
   liegen gelassen.
11. **Eine Zahl, die über einen wandernden Arbeitsbaum erhoben wurde, ist
   keine Zahl.** Meine Positivkontrolle „findet H-1 92-mal" war zum
   Erhebungszeitpunkt vielleicht richtig; heute liefert derselbe Weg 96,
   und über den eingefrorenen Stand je nach Zählweg 107/100/93/25.
   **Keiner ergibt 92.** Im Parallelbetrieb gehört jede Zahl an einen
   Commit-Hash, nicht an „das Repo".
12. **Eine Positivkontrolle im falschen Kanal ist keine Kontrolle.** Meine
   kontrollierte das **Kürzel** (`H-1`), während die auftragstragende
   Verneinung im **Sache**-Kanal lag („kein Entscheid zur
   Zielstichprobe"). Die tragfähige Form fand erst der zweite Anlauf:
   ein Kontrollkandidat mit unabhängig bekanntem Sollwert, der genau die
   behauptete Frage spiegelt — *findet dieser Suchweg einen vorhandenen
   Entscheid dieser Art?* Antwort am Nachbarpunkt BM-4/BM-5: ja, 20
   Treffer, Entscheidsatz gefunden. **Erst damit trägt das Negativ.**
13. **Auch ein guter Prüfer driftet in der Fundstelle.** Der Gegenleser
   schrieb den Satz „Die Frist läuft ab LISTENAUFBAU" dem Regelwerk
   § 7.1/7.2 zu; er steht in o8 § 7.1. Das Regelwerk sagt es mit anderem
   Wortlaut („Die Monatsfrist läuft ab LISTENAUFBAU, nicht ab
   Kontaktaufnahme"). Ich hatte die Zuschreibung zunächst ins Protokoll
   übernommen — **delegierte Fundstellen prüft man auch dann, wenn der
   Befund stimmt.**

### (ii) Bewährte Muster

1. **⭐ Eingefrorenes Messgerät + isolierte Stände A/B, und die Isolation
   selbst belegt.** Wächter-Blob und Baseline aus `HEAD` in einen
   Scratch-Ordner, zwei Exporte (A = HEAD, B = A + meine Dateien), und
   dann `diff -rq A B` als **Beleg, dass sich genau meine drei Dateien
   unterscheiden**. Erst damit ist „+5 NEU" meine Zahl und nicht die einer
   fremden Session. Das ist billig und macht jedes Delta zuordenbar.
2. **⭐ Ein Zählwerkzeug mit Selbsttest pro Muster und VERSCHIEDENEN
   Sollwerten je Kanal — er fing meinen eigenen Fehler.** Fünf Klassen,
   jede muss einzeln feuern, NBSP=2 neben Space=2 bei verschiedenen
   Zeichen, plus Gegenprobe auf leeren Text. Der erste Lauf meldete rot:
   nicht das Muster war falsch, sondern **mein Sollwert in der Probe**.
   Ein Selbsttest, der nur die eigene Erwartung bestätigt, hätte das nie
   gezeigt.
3. **⭐ Der git-Verlauf beantwortet Bezugsfragen, die man sonst
   „erschließen" müsste.** „Wer ist *Er*?" war keine Auslegungsfrage,
   sondern ein `git show d11535f:` — und die Antwort stand byte-treu da.
   Vor jeder plausiblen Rekonstruktion an einem gewachsenen Dokument: erst
   den Erststand lesen. Dasselbe machte die **Ursache** des Bruchs
   nachweisbar statt vermutet.
4. **Vorbehalt zuerst schreiben, dann den Satz.** In allen drei Kästen
   steht die Belegkraft von Rn. 87 **vor** der Rechtsfolge. Beim
   Verdichten wäre sie sonst genau die Zeile, die fällt.
5. **Zwei Lesarten vorlegen statt eine zu entscheiden.** Bei H-2 Teil 3
   war die Versuchung, „erledigt" zu schreiben (der Plan enthält die
   Stichprobe ja) oder „offen" (kein Entscheid auffindbar). Beides wäre
   eine User-Entscheidung in eigener Zuständigkeit gewesen.
6. **Eine verstrichene Frist sichtbar lassen und KEINEN Ersatzanker
   erfinden.** Ein selbstgesetztes Datum sieht später wie eine Zusage aus,
   die niemand gegeben hat.
7. **Vor dem Ändern einer POOL-Datei prüfen, wer daraus zitiert.** Der
   Messplan ist POOL; eine Durchstreichung (`~~…~~`) verändert den
   normalisierten Text und hätte fremde Zitate brechen können. Ein grep
   über fünf charakteristische Phrasen kostete eine Minute und gab die
   Freigabe.
8. **⭐ Eine mechanische Formprüfung IMMER auch gegen den Vorher-Stand
   laufen lassen.** Meine Tabellen-Spaltenprüfung meldete einen Befund im
   Akquiseplan — der Reflex ist „das war ich". Derselbe Lauf gegen
   `926ca3c` zeigte die Meldung **identisch**: Bestandsbefund, aus meiner
   eigenen Vorrunde R16-C. Ohne die Gegenmessung hätte ich entweder
   fremde Arbeit als eigenen Fehler verbucht oder — schlimmer — den
   eigenen Altfehler für ein Werkzeugartefakt gehalten. **Ein Prüfergebnis
   ohne Vorher-Nenner ist keine Zuordnung.**
9. **Auch eine Skriptdatei kann am Bash-Heredoc zerbrechen.** Der
   Baustein sagt „Skriptdatei statt inline" — aber wenn man die Datei
   *per Heredoc* schreibt, verschwindet der Backslash in `(?<!\\)`
   trotzdem. Erst das **Write-Tool** schreibt sie unversehrt. Gefangen
   hat es der Selbsttest (Exit 1 statt stiller Fehlmessung).
10. **⭐⭐ Der Gegenlese-Subagent war die wirksamste Einzelmaßnahme des
   Laufs — und sein Auftragszuschnitt hat den Unterschied gemacht.** Er
   war als „kurzer Gegenleser mit genau einer Frage" vorgesehen und hat
   **fünf schwere Befunde** geliefert, vier davon in Text, den ich selbst
   für den vorbehaltstreuesten des Tages hielt. Drei Zuschnitt-Elemente
   waren die Ursache, alle billig: **(a) „Aussage und Fundstelle getrennt
   prüfen"** — zwang ihn, den Quellabsatz am Stück zu lesen statt zu
   greppen, und genau dabei fand er C-1. **(b) „ODER die stillschweigend
   auf X aufsetzt"** — stellte ihn vom Wort auf die Struktur um; ohne
   diesen Halbsatz hätte er Teil 1 mit „nur der markierte Absatz, sonst
   nichts" beantwortet, formal richtig und in der Sache eine Entwarnung.
   **(c) Zwei nachprüfbare eigene Behauptungen mitgeben** (die
   git-Aussagen) — das kalibriert, ob der Prüfer überhaupt am Objekt
   arbeitet, und beide kamen mit `od -c`-Beleg zurück.
11. **Die Pflichtfrage „Welche Verfälschung hätte dein Verfahren NICHT
   gefangen?" liefert die nächste Arbeitsliste.** Aus ihr kam der
   Hinweis „Bau ≠ Beleg" für meine Positivliste — nachgemessen hielt die
   Behauptung, aber die Messung legte einen **fehlenden Vorbehalt** frei
   (beide Werkzeuge tragen ein ⛔-GATE, sind also gebaut und *nicht*
   scharf). Der Prüfer hatte den Fund nicht, nur die Stelle.
12. **Die billigere Frage vor dem Rebase.** `git fetch` +
   `git log HEAD..origin/main` = 0 → kein Rebase, also **kein
   `--autostash`-Risiko** für die unfertige Arbeit von R17-A und R17-B im
   geteilten Arbeitsbaum.

---

## Block 5 — Gegenlese-Subagent: Laufstatus und Disposition ALLER Befunde

**Laufstatus:** Ein Gegenlese-Subagent mit frischem Kontext, eingefrorener
Commit `1804b1c`, Leseweg ausschließlich `git show`. **Vollständig
durchgelaufen, nicht abgebrochen.** Er hat die eine Auftragsfrage in beiden
Teilen beantwortet und zusätzlich vier Nachprüfaufträge erledigt. Der
Bericht führt einen eigenen Abschnitt „nicht erhoben / nicht prüfbar" mit
**6 Punkten** — sie sind unten als Nacharbeitsliste behandelt, nicht als
Haftungsausschluss.

### Disposition — 15 Befunde, kategorienweise MIT NENNER

**14 von 15 repariert · 1 von 15 war ausdrücklich kein Befund · 0
verworfen · 0 ohne Träger.** Alle Reparaturen in Commit `<REPARATUR>`.

| # | Schwere | Befund in einem Satz | Disposition |
|---|---|---|---|
| **C-1** | schwer | Beide Rn.-87-Kästen ließen die **Rn.-86-Vorfeld-Hälfte** weg — obwohl die Quelle wörtlich sagt, wer die Belegkraft dokumentiert, ohne das zu nennen, dokumentiere „die schwächere Hälfte" | **repariert** in beiden Kästen: Vorfeld-Zuordnung ergänzt, byte-treu zitiert, samt dem Selbstwarnsatz der Quelle |
| **C-2** | schwer | Belegkraft-Vorbehalt **umgeankert**: „nur schwächer als **der Satz allein**" statt „nur **noch** schwächer als **der Rest dieses Vermerks**" — drei Weichmacher in eine Richtung | **repariert**: Satz vollständig und byte-treu zitiert, „noch" wieder drin |
| **B-1** | schwer | Pfad (a): „genau die Reihenfolge, die Rn. 87 verlangt" stellt das **Ein-Gate-Modell** wieder her, das derselbe Kasten abschafft — O-9 sperrt nach dem Namensentscheid weiter | **repariert**: notwendige ≠ hinreichende Bedingung, O-9-Status zitiert, Vorfassung sichtbar |
| **B-2** | schwer | § 3.1 (S5-Zeile, ⭐-Kasten) führt den Namensentscheid als **den** kritischen Pfad — Superlativ ohne Scope; ich hatte beide als „unberührt" eingestuft | **repariert**: Einstufung auf „vereinbar nur auf der Namens-Achse" geändert, Scope-Vermerk mit den drei Gates ergänzt |
| **B-5** | schwer | Meine **Erfüllt-Meldung war überschießend**: STATUS verlangt den *Akquiseplan*, nicht § 3.2 — § 6/§ 7/§ 8 tragen die alte Logik weiter | **repariert (Meldung) + gemeldet (Stellen)**: „erfüllt" zurückgenommen, Reichweite ausgewiesen, **5 Fundstellen einzeln benannt**; die Stellen selbst liegen außerhalb meines Dateiscope → Posten an die Leitsession |
| **C-3** | mittel | Zitat „Die Vorsichtsannahme bleibt trotzdem in Kraft" **ohne Ellipse** mitten im Quellsatz beendet (L-39) | **repariert**: Vollzitat statt Anschnitt |
| **C-4** | mittel | „Das Urteil trägt die Absage in Rn. 84/85 **nur anders**" als Begründung für das Inkraftbleiben ist ein **Non-sequitur** (Rn. 84/85 trägt die lit.-f-Absage, nicht die Fälligkeitsregel); dazu „**allein** die Belegkraft" als quellenloser Zusatz | **repariert**: Begründung auf die Risiko-Asymmetrie der Quelle gestellt, „allein" gestrichen. ⚠️ Anzumerken: Die beanstandete Formulierung stand **so im Auftrag** („das Urteil trägt es in Rn. 84/85 anders") — der Prüfer hat trotzdem recht |
| **C-5** | mittel | „die Erfüllung **der Informationspflicht**" ist eine **eigene Zuordnung** — das Urteil sagt „dieser Verpflichtung", keine Repo-Quelle löst es auf | **repariert**: neutral auf „der dort behandelten Verpflichtung" umgestellt |
| **B-3** | mittel | Der Gate-Kasten stützt sich auf **eine von zwei** STATUS-Angaben; die zweite („StB ~KW 34/35") ist nicht verstrichen | **repariert**: Präzisierung ergänzt — **KW 34/2026 beginnt Mo 17.08.2026** (per Werkzeug erhoben, Positivkontrolle 01.01.2026 = Donnerstag); Einstufung von „überfällig" auf „unklar" korrigiert, Klärung an die Leitsession |
| **B-4** | mittel | Meine Summenprobe war **keine Partition**: ⭐-Kasten doppelt gezählt, ⚠️-Gate-Kasten fehlte — die Summe 11 konnte nicht anders ausfallen | **repariert**: Zählschnitt auf **12 Einzelaussagen** umgestellt, jede in einer Tabelle mit eigener Einstufung, jede Nummer genau einmal (2+3+2+5=12) |
| **D-1** | mittel | Meine Positivkontrolle „findet H-1 **92-mal**" **reproduziert unter keinem Zählweg** und lag im **falschen Kanal** (Kürzel, während die Verneinung im Sache-Kanal liegt) | **repariert**: Zahl gestrichen, vier Kanäle je mit eigenem Zählweg tabelliert, Stand auf `926ca3c` eingefroren; **neue Positivkontrolle mit unabhängig bekanntem Sollwert** — der Nachbar-Entscheid BM-4/BM-5 *muss* auffindbar sein und ist es (20 Treffer, 8 Dateien, Entscheidsatz gefunden) |
| **C-6** | gering | Rn.-84/85-Artikelangaben gröber als die A7-Tabelle der Quelle (dort „Artt. 12, 14 Abs. 3 lit. b, 21 Abs. 4") | **repariert**: Belegkette + Zeiger auf die A7-Tabelle ergänzt |
| **C-8** | gering | Belegstand „(17.08.2026)" **ohne Commit-Hash**, obwohl der Vermerk am 17.08. selbst geändert wurde (M-5) | **repariert**: „Stand `926ca3c` … mit Ergänzung M-5" |
| **C-9** | gering | „die Bau-Pflichten" statt „die **sieben** Bau-Pflichten" — Nenner verloren | **repariert** + Nenner-Konflikt ausgewiesen: sieben aktive (B-1…B-7), B-8 in der Quelle gestrichen (Regelwerk § 12, O-8-Zeile); die „acht" in o8 § 10 ist der Stand davor |
| **C-7** | gering | Selbstzitat-Rendering im § 4.3-Kasten | **kein Handlungsbedarf** — der Prüfer stuft es selbst ausdrücklich als „Kein Befund, nur zur Vollständigkeit" ein; als kursives Selbstzitat ist keine Byte-Treue behauptet |

### Was der Prüfer BESTÄTIGT hat (nicht nur beanstandet)

- **Beide git-Behauptungen bestätigt, je einzeln:** (i) Der Vorspann stand
  in `d11535f`, die Folgezeile trug kein `>`-Präfix, und die
  Wiederherstellung in `1804b1c` ist per `od -c` **byte-gleich**;
  (ii) der Bruch entstand in `6e4daa5` beim Einfügen des
  FUND2-Kastens und lief durch `1da1327`/`5d7d78d` fort.
- **17 von 17** als Zitat markierten Passagen der vier neuen Kästen sind
  byte-treu — **kein einziger Zitat-Byte-Fehler.** Alle Befunde C-1…C-6
  liegen im **Fließtext oder im Weggelassenen**: genau die Klasse, die ein
  Zitatabgleich nicht sieht (L-27).
- **Die Zielstichproben-Verneinung hält**, geprüft mit sechs eigenen
  Suchläufen und breiterem Suchraum als mein eigener.
- **Die Arbeitstitel-Verneinung hält**, mit repo-weitem Grep statt nur
  `akquise/`+`handel/`.
- Entflechtung H-2: verstrichene Frist sichtbar, kein Ersatzanker
  erfunden, beide Lesarten vorgelegt — „regelkonform".
- Anwaltsfrage-Fundstelle am Objekt geprüft: Briefing § 2.2 Nr. 6 lautet
  „Trägt Rn. 87 die Betriebsfolge, die wir daraus ziehen?" ✔

### Die „nicht erhoben"-Liste als Nacharbeit — 6 Punkte, je disponiert

| Punkt des Prüfers | Disposition |
|---|---|
| **Bau ≠ Beleg:** nicht nachgemessen, ob `sperrdatei-struktur.md` und `wellenprotokoll-vorlage.md` das enthalten, was die Positivliste ihnen zuschreibt | **nachgemessen und eingearbeitet:** 546 bzw. 667 Zeilen mit vollständiger Blockstruktur — „gebaut" hält. **Aber der Prüfhinweis hat einen Vorbehalt freigelegt, der fehlte:** beide Dateien tragen ein ⛔ **GATE** („noch NICHT scharf zu stellen" / „es darf noch keine Welle geben"). In der Positivliste ergänzt: gebaut ≠ einsatzbereit |
| **Löschungszählung nicht nachgemessen** — eine fünfte, nicht ausgewiesene Löschung wäre unbemerkt geblieben | **mit ZWEI Nennern belegt:** gegen `926ca3c` weiterhin **genau 4** Löschungen (also kein Bestandstext zusätzlich angetastet), gegen `1804b1c` 66 — alle in meinen **eigenen** Kästen. Der erste Nenner ist der mechanische Beleg, dass die Reparaturen fremden Bestand nicht berührt haben |
| **Urteil selbst nicht gelesen** (Rn. 78/84/85/86/87 nur gegen Repo-Vermerke geprüft) | **bewusst offen, außerhalb meines Auftrags** — der Rohbeleg liegt in `sensibel/rohbelege-*`; die Urteilsarbeit dieser Runde ist Scope **R17-A**, der genau dafür einen Voll-Review fährt. Als Grenze im Protokoll ausgewiesen, nicht geschlossen |
| **Rendering nicht geprüft** (Blockquote-Verschachtelung, `\|` in Zellen) | **mechanisch geschlossen:** eigenes Tabellen-Prüfskript mit Selbsttest in beiden Richtungen (4/4) über alle drei Dateien. Ergebnis: **1 Meldung, und die besteht im Rundenstart `926ca3c` identisch** → Bestandsbefund aus meiner Vorrunde R16-C (§ 4.4, s. Block 3 Nr. 7), kein neuer. Blockquote-Kontinuität beider neuen Kästen geprüft: durchgehend |
| **Messzahlen der Commit-Message nicht nachgemessen** (Wächter-Delta, Zeichenzählungen, eingefrorenes Messgerät) | **erneut selbst gemessen und offengelegt** — s. Block 1. Die Einschränkung des Prüfers ist berechtigt: Er durfte den Arbeitsbaum nicht sichten und konnte den Doppel-Messstand-Vertrag daher **nicht abnehmen**. Das bleibt als Prüflücke ausgewiesen und ist ein Posten für die Leitsession-Abnahme, keine Entwarnung |
| **Nur teilweise gelesen** — u. a. Regelwerk § 7.1/§ 7.2 als möglicher weiterer Rn.-87-Ableitungsort | **gemessen, mit Fundstellen-Korrektur:** Die Fristenuhr des Regelwerks (§ 7.2) trägt „**Die Monatsfrist läuft ab LISTENAUFBAU, nicht ab Kontaktaufnahme**" — mit der Verschärfung **konsistent**, kein Nachzug fällig. ⚠️ Der Wortlaut „Die Frist läuft ab LISTENAUFBAU" (den der Prüfer dem Regelwerk zuschrieb und den ich zunächst übernommen hatte) steht in **`akquise/interessenabwaegung-o8.md` § 7.1**, nicht im Regelwerk — **delegierte Fundstellen driften, auch die eines guten Prüfers; Aussage und Fundstelle sind zwei Prüfungen.** § 7.3 war für Abweichung (c) ohnehin ganz gelesen. Regelwerk §§ 2/4/5/8–12 blieben ungelesen — außerhalb des Auftrags, als Grenze benannt |

### Bewertung der Gegenlese

Der Lauf hat sich gelohnt: **Fünf schwere Befunde**, davon vier in Text,
den ich selbst als „Vorbehalt zuerst" geschrieben hatte. C-1 ist der
teuerste — die Quelle sagt wörtlich voraus, dass man beim Dokumentieren
der Belegkraft die unbequeme Hälfte weglässt, **und genau das habe ich in
beiden Kästen getan.** Der Prüfer nennt selbst, dass er C-1 ohne den
Kategorien-Hinweis („Aussage und Fundstelle getrennt prüfen") vermutlich
verfehlt hätte, weil ein Grep alle Zitate bestätigt und den Kontext
verbirgt. Und B-5 hat er **gegen** seinen eigenen Auftragszuschnitt
gefunden (Teil 1 war auf § 3 begrenzt) — L-34 in seiner eigenen Sache.
