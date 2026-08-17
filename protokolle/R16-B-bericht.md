# R16-B — Codex-Bericht: Zitat-Wächter aus dem Dauer-Rot

**Token-Verbrauch: von der Session nicht erhebbar — Subagenten: keine.**

**Rolle:** R16-B / Codex, Auftragsträger
`protokolle/tagesplan-2026-08-17.md`, Abschnitt „Session-Prompts",
Strang R16-B. **Codex-Regel:** kein Commit, kein Push; Abnahme und Commit
durch die Leitsession.

**Prüfstand:** `0c4692f873f179917b28f4c210ae2e7be76cd653` (nach
`git pull --ff-only`: „Already up to date“). Alle Zitatläufe liefen gegen
eine `git archive`-Scratchpad-Kopie dieses Hashes. Für den Endlauf wurden
ausschließlich die vier R16-B-Dateien aus dem Arbeitsbaum in eine zweite
Kopie überlagert; die parallel veränderten Zieldateien blieben auf dem
eingefrorenen Stand. Beim Schreiben dieses Berichts war der geteilte
Arbeitsbaum bereits auf `686ff18f580d2e23a1c93a5141f5a6738458afcd`
weitergelaufen; daraus wird kein Zustand einer Parallel-Session abgeleitet.

## 1. Gebaut und verifiziert

### 1.1 Gebaut

- `akquise/pruefe-zitate.js`: Hauptlauf trennt Quellenbestätigung,
  begründete Eigenformulierungen, festgeschriebenen Bestand und **neue**
  Verstöße. Exit 1 entsteht nur bei neuen Verstößen oder einer gebrochenen
  Kontrollbedingung. ZIEL umfasst 8/8 Dateien; der bestehende
  Selbstausschluss wird weiter über dieselbe Funktion `poolTextFuer`
  ausgeführt.
- `akquise/zitat-baseline-2026-08-17.md`: lesbare, maschinengeprüfte
  Baseline mit Erzeugungsweg, Hash, Datum, Aussagegrenze, Warntext und
  vollständiger JSON-Nutzlast. Die R15-Altlast bleibt exakt
  `113 + 467 + 144 + 139 = 863`. Der bei der Reichweitenerweiterung bereits
  vorhandene Bestand der zwei neuen Zieldateien ist getrennt ausgewiesen:
  `19 + 24 = 43`. Nur für die 863 gilt die R15-Bewertung der Leitsession
  „0 Widerlegungen, alle nicht im Pool“; die 43 tragen ausdrücklich keine
  solche Bewertung.
- Baseline-Schutz: fest verdrahtete Dateimengen und Nenner sowie
  Nutzdaten-SHA-256
  `50f2a42e3552020da52077a635bc24c2956a49ab1147dd8724ef57e8a3fa42e0`.
  Der Generator schreibt nur einen ausdrücklich benannten Entwurf; er hebt
  die aktive Baseline nie automatisch an.
- `akquise/selbsttest-zitate.md`: vier erzwungene Musterklassen mit
  `TREFFEN-NICHT`-Zeilen. Der Selbsttest nutzt die Produktivfunktionen.
  Beim Selbstausschluss wird dasselbe Zitat zuerst nur in der eigenen Datei
  angeboten und danach zusätzlich in einer anderen virtuellen Pool-Datei.
- `akquise/listenbau-regelwerk.md`: ausschließlich die O-12-Wächterzeile
  neu gefasst (acht Zieldateien, Modus-Trennung, Baseline-Zeiger,
  `--altlast`-Aufruf). Keine andere Regelwerkzeile geändert.
- Zusätzlicher read-only Modus `--zielkandidaten`: generischer Scan der
  Markdown-Dateien in `akquise/`, `handel/`, `fund/` und `beleg/`; er ändert
  ZIEL nicht.

### 1.2 Verifiziert — Nenner und Exit-Codes

| Lauf | Prüfgegenstand | Ergebnis | Exit |
|---|---|---|---:|
| Hauptlauf / Negativkontrolle | eingefrorener Stand + finale R16-B-Dateien | ZIEL 8/8 · 1.196 Zitate · **0 neue Verstöße** · R15-Altlast 863/863 offen · R16-Aufnahmebestand 43/43 offen · Blockzitate 3/3 · Gegenproben 3/3 · MUSS 14/14 · Nicht-Treffen 3/3 | **0** |
| Positivkontrolle | separate Scratchpad-Kopie, ein falsches Zitat in `akquise/akquiseplan.md` | **gesetzt: 1 von 1** (Negativkopie 0, Positivkopie 1) · genau **1** neuer Verstoß · keine Veränderung der Baseline-Nenner | **1** |
| Selbsttest | finale Selbsttest-Datei + Pool des eingefrorenen Stands | extrahiert 18/18 · (a) Neu 8/8 · `TREFFEN-NICHT` 8/8 · (b) Baseline 1/1 · (c) Pool 8/8 · (d) Selbstausschluss 1/1 und Gegenrichtung 1/1 · LF/CRLF invariant | **0** |
| `--altlast` | vollständige Baseline | 906/906 Einträge gelistet; R15 863/863, Zielaufnahme 43/43; jeder Eintrag mit `OFFEN`/`ABGEBAUT` | **0** |
| `--zielkandidaten` | `.md` unter vier Fachordnern | 20 Dateien außerhalb ZIEL mit zusammen 718 passenden Zitaten gelistet | **0** |
| Syntax | finales Skript | `node --check akquise/pruefe-zitate.js` | **0** |

Die vollständigen Rohausgaben stehen in dieser Datei unter
„Rohausgabe A“ bis „Rohausgabe F“. Das sind die dauerhaften
Rohausgaben-Pfade innerhalb des erlaubten Berichtsartefakts; es bleiben
keine versionierten Scratch-Dateien zurück.

### 1.3 Selbstausschluss — Vorher/Nachher

Der Test legt die Selbsttest-Datei absichtlich zugleich in ZIEL und POOL.
Mit dem Zitat ausschließlich in der eigenen Datei lautet das Ergebnis
**1/1 nicht bestätigt**. Wird exakt derselbe Text zusätzlich unter dem
anderen Poolpfad `selbsttest/andere-pool-datei.md` angeboten, lautet das
Ergebnis **1/1 bestätigt**. Damit ist nicht nur die Existenz von
`poolTextFuer`, sondern seine Wirkung in beiden Richtungen belegt.

### 1.4 Löschungs- und Encoding-Kontrolle

- Gegen Rundenstart: `listenbau-regelwerk.md` 1 Zeile hinzugefügt / 1 Zeile
  gelöscht (exakt die O-12-Zeile); `pruefe-zitate.js` 669/202;
  `selbsttest-zitate.md` 66/42. Die neue Baseline und dieser Bericht haben
  keinen Vorbestand.
- Die hohe Löschungszahl des Skripts/Tests stammt aus dem sichtbaren Umbau
  der beiden vollständigen Dateien, nicht aus einem Breitband-Edit am
  Regelwerk. Im Regelwerk ist die einzige Löschung im Diff die alte
  O-12-Zeile.
- UTF-8-Prüfung vor dem Umbau: `pruefe-zitate.js` 27 Umlaute,
  `selbsttest-zitate.md` 36, `listenbau-regelwerk.md` 906; jeweils
  0 Mojibake-Marker. Nach dem Umbau: Skript 39, Selbsttest 31, Regelwerk
  906, Baseline 1.006 und Bericht 1.135 Umlaute; **0 Mojibake-Marker in
  5/5 Dateien**. Der Rückgang 36→31 im vollständig neu gefassten Selbsttest
  ist inhaltlich, nicht Encoding-Verlust; das Regelwerk blieb 906→906.
- Zeilenenden: Regelwerk nach dem Einzelzeilen-Edit wieder vollständig CRLF
  (`git ls-files --eol`: `w/crlf`), Skript und Selbsttest vollständig LF;
  `git diff --check` für alle Scope-Pfade Exit 0.

## 2. Offen geblieben

1. **Die Altlast ist sichtbar, nicht repariert:** 863/863 R15-Einträge sind
   am eingefrorenen Stand weiter offen. Das ist der beauftragte Moduswechsel,
   keine inhaltliche Entwarnung. Abbau erfolgt nur durch Pool-Erweiterung
   oder Reparatur am zuständigen Dokument.
2. **Die 43 Fundstellen der zwei neuen Zieldateien sind nicht inhaltlich
   bewertet.** Sie mussten getrennt als Aufnahmebestand geführt werden,
   weil ZIEL 8/8 und „0 neue Verstöße am eingefrorenen Stand“ sonst nicht
   gleichzeitig erfüllbar wären. Sie sind weder R15-Altlast noch
   Ausnahmelisteneinträge.
3. **Fehlende Pool-Quellen sind nicht vollständig 1:1 zuordenbar.** Der
   mechanische Scan fand für 352/863 Baseline-Einträge mindestens eine
   Kandidatendatei; 511/863 blieben ohne Texttreffer. 201 Dateien hatten
   mindestens einen Treffer, mit starken Überlappungen und Rohtextkopien.
4. **Kein Commit/Push:** Codex liefert Patch und Bericht; Commit und Abnahme
   gehören der Leitsession. Es wurde weder gestaged noch committet.

## 3. Nebenbefunde außerhalb des Baukerns

### 3.1 Erfüllte benannte Offen-Posten

- **Projektquelle § 6a `R15E-N-2` ERFÜLLT:** Der überholte O-12-Satz ist
  in der erlaubten Regelwerkzeile auf acht Zieldateien, Modus-Trennung und
  Baseline-Zeiger neu gefasst.
- **Projektquelle § 6a `R15E-N-3` ERFÜLLT:**
  `akquise/sperrdatei-struktur.md` und
  `akquise/wellenprotokoll-vorlage.md` stehen jetzt in ZIEL; Endstand 8/8.
- **Kurz-Einstieg / Dauer-Rot-Posten ERFÜLLT:** Der gewöhnliche Hauptlauf
  ist bei unverändertem Bestand grün, während alle 863 R15-Altlasten samt
  Nenner sichtbar bleiben; ein neues falsches Zitat macht den echten Lauf
  nachweislich rot.

Die Träger Projektquelle und STATUS.md lagen außerhalb des R16-B-Scopes und
wurden nicht geschlossen; diese drei Erfüllungen sind deshalb hier als
Pflichtfeld für die Leitsession ausgewiesen.

### 3.2 Fehlende Pool-Quellen — mechanischer Fundstellenscan

Suchraum: 926 lesbare Kandidatendateien (`.txt`/`.md`, ersatzweise HTML ohne
TXT-Nachbar) außerhalb des aktuellen Pools; versionierte Fachdateien kamen
aus dem eingefrorenen Snapshot, ignorierte Rohbelege aus ihrem am 17.08.2026
lesbaren Bestand. Ein Treffer bedeutet nur: Der normalisierte Baseline-Text
kommt in der Datei vor. Er beweist weder Primärquellenstatus noch die richtige
Fassung. Mehrfachabzüge überlappen; die Zahlen sind keine Partition.

| Quellenbereich | Baseline-Einträge mit mindestens einem Treffer | Dateien mit Treffer |
|---|---:|---:|
| `sensibel/rohbelege-R05-A/` | 146/863 | 116 |
| versionierte Nicht-Pool-Dateien | 83/863 | 10 |
| `sensibel/rohbelege-R09-A/` | 63/863 | 8 |
| `sensibel/rohbelege-R06-A/` | 42/863 | 29 |
| `sensibel/rohbelege-R11-A/` | 34/863 | 31 |
| `sensibel/rohbelege-R15-A/` | 22/863 | 1 |
| `sensibel/rohbelege-R08-B/` | 8/863 | 6 |

Abdeckung nach Baseline-Zieldatei:

| Baseline-Zieldatei | mindestens ein Quellenkandidat | ohne mechanischen Treffer |
|---|---:|---:|
| `akquise/interessenabwaegung-o8.md` | 58/113 | 55 |
| `fund/wettbewerbsbild.md` | 222/467 | 245 |
| `handel/kanal-rechtsmatrix.md` | 60/144 | 84 |
| `handel/angebotsarchitektur.md` | 12/139 | 127 |
| **Gesamt** | **352/863** | **511/863** |

Die 10 versionierten Nicht-Pool-Dateien mit Treffer (überlappende Nenner je
Datei) sind:

| Datei | Treffer in den 863 |
|---|---:|
| `handel/anwalts-briefing-2026-08.md` | 32 |
| `akquise/listenbau-regelwerk.md` | 22 |
| `handel/preisliste-vorlaeufig.md` | 12 |
| `handel/foerderarchitektur-beraterrolle.md` | 11 |
| `akquise/wellenprotokoll-vorlage.md` | 5 |
| `akquise/sperrdatei-struktur.md` | 3 |
| `fund/erhebung/brandnamic-partner-vollerhebung.md` | 3 |
| `akquise/akquiseplan.md` | 2 |
| `fund/persona-validierungsplan.md` | 2 |
| `handel/entwurf-anfrage-wtsh.md` | 1 |

Die vollständige Datei-für-Datei-Liste mit Nennern steht in
„Rohausgabe F“. Eine Pool-Erweiterung wurde nicht vorgenommen; sie wäre
Beleg- und Architekturarbeit außerhalb dieses Strangs.

### 3.3 ZIEL-Kandidaten — generischer Scan

Der Scan fand 20 Markdown-Dateien außerhalb ZIEL mit 718 Zitaten nach dem
exakten Wächter-Muster. Auftragsgemäß wurden nur die zwei benannten Vorlagen
in ZIEL aufgenommen. `akquise/selbsttest-zitate.md` ist eine Testfixture,
kein operatives Zieldokument.

| Datei | Zitate |
|---|---:|
| `akquise/selbsttest-zitate.md` | 18 |
| `beleg/baseline-messplan.md` | 13 |
| `beleg/vorlagen/interviewleitfaden-baseline.md` | 39 |
| `beleg/vorlagen/referenzvereinbarung-pilotobjekte.md` | 17 |
| `beleg/vorlagen/tagesblatt-firzlaffs.md` | 5 |
| `beleg/vorlagen/tagesblatt-hostel-boninstrasse.md` | 1 |
| `fund/erhebung/brandnamic-partner-vollerhebung.md` | 73 |
| `fund/erhebung/entwurf-anfrage-dehoga-sh.md` | 2 |
| `fund/erhebung/entwurf-anfrage-ihk-sh.md` | 1 |
| `fund/erhebung/regionalstatistik-groessenklassen.md` | 18 |
| `fund/erhebung/strang2-strukturdaten.md` | 19 |
| `fund/erhebung/verbund-vollerhebung.md` | 13 |
| `fund/persona-validierungsplan.md` | 14 |
| `fund/positionierungspapier.md` | 30 |
| `handel/anwalts-briefing-2026-08.md` | 114 |
| `handel/entwurf-anfrage-ifb-hamburg.md` | 12 |
| `handel/entwurf-anfrage-wtsh.md` | 14 |
| `handel/foerderarchitektur-beraterrolle.md` | 97 |
| `handel/preisliste-vorlaeufig.md` | 79 |
| `handel/preismodell-optionen.md` | 139 |

## 4. Stolpersteine und Learnings

### Fallen

1. **ZIEL-Erweiterung erzeugt einen eigenen Aufnahmebestand.** Die zwei
   benannten Dateien trugen am eingefrorenen Stand bereits 19 + 24
   unbestätigte Zitate. Sie als „neu“ zu behandeln hätte das
   Fertig-Kriterium unmöglich gemacht; sie in die Eigen-Ausnahmeliste zu
   schieben wäre die verbotene Ausrede. Die getrennte, sichtbar unbewertete
   Gruppe löst den Widerspruch ohne Umklassifizierung der 863.
2. **Ein Set verliert Duplikate.** Die Baseline wird als Multimenge pro Datei
   verbraucht. Ein zusätzliches Vorkommen desselben Textes kann dadurch nicht
   unter einem alten Eintrag verschwinden; ein Verschieben in eine andere
   Zieldatei wird ebenfalls neu.
3. **Der Live-Arbeitsbaum ist ein wandernder Messstand.** Während R16-B lief,
   kamen mehrere fremde Commits und Änderungen an Zieldateien hinzu. Alle
   Zahlen stammen deshalb aus dem eingefrorenen Snapshot, nicht aus einem
   pauschalen Nachher-Lauf.
4. **Ein Texttreffer ist keine Quellenzuordnung.** Der Poolquellen-Scan fand
   zahlreiche HTML/TXT-/Extrakt-Dubletten und abgeleitete Dokumente. Aus
   201 Trefferdokumenten darf keine Liste von 201 Primärquellen gemacht
   werden.

### Bewährte Muster

1. **Jeder Modus hat eine eigene Erfolgsbedingung:** Hauptlauf = keine neuen
   Verstöße; `--altlast` = Baseline vollständig und summenkonsistent
   gelistet; `--selbsttest` = alle vier Musterklassen in ihren erwarteten
   Status überführt.
2. **Baseline doppelt binden:** lesbare Nutzlast mit Dateinennern plus
   fest verdrahteter SHA-256 und fest verdrahtete Summen. Ein einzelner
   veränderbarer Nenner wäre kein Schutz gegen Anheben.
3. **Positiv- und Negativkontrolle am echten Pfad:** 0→1 gesetztes Zitat,
   Hauptlauf 0→1 neue Verstöße und Exit 0→1. Der Test prüft nicht nur einen
   Parser.
4. **Selbstausschluss durch denselben Text in zwei Zuständen:** Nur eigene
   Datei = nicht bestätigt; zusätzlich andere Pool-Datei = bestätigt. Das
   belegt Verhalten statt Funktionsanwesenheit.

### Nicht erhoben / nicht prüfbar

- Tokenverbrauch der Codex-Session ist nicht erhebbar; keine Subagenten.
- Die inhaltliche Richtigkeit der 863 R15-Altlasten wurde in R16-B nicht neu
  bewertet; übernommen wurde ausschließlich die ausdrücklich benannte
  Leitsessions-Bewertung R15. Für die 43 R16-Aufnahmeeinträge wurde überhaupt
  keine Richtigkeitsbewertung erhoben.
- 511/863 Baseline-Einträge ließen sich im mechanischen Quellenkandidaten-Scan
  keiner gelesenen Datei zuordnen. Auch bei den 352 Treffern ist die
  Quellenart/Fassung nicht automatisch prüfbar.
- Die ignorierten Rohbelege haben keinen Git-Hash. Ihr Scan ist daher auf den
  am 17.08.2026 lesbaren Bestand gebunden, nicht auf den Git-Prüfstand.
- Es wurde kein Hauptlauf über den lebenden Nachher-Arbeitsbaum als
  Entwarnungsbeleg verwendet; dort liefen R16-A/R16-C parallel.

### Welcher meiner Prüfschritte hätte einen vorhandenen Fehler NICHT finden können?

Der Zitat-Wächter — einschließlich Positivkontrolle und Selbsttest — hätte
einen **semantisch falschen Satz nicht gefunden, wenn dessen exakter Wortlaut
irgendwo im Pool vorkommt**. Ebenso unsichtbar bleiben unmarkierter Fließtext,
Zitate unter 25 Zeichen, andere Anführungszeichen, falsche Quellenfassung und
Dateien außerhalb ZIEL. Der generische Kandidatenscan macht nur die letzte
Klasse sichtbar; er macht sie nicht rot und bewertet sie nicht. Außerdem
könnte eine absichtliche gleichzeitige Änderung von Baseline-Nutzlast **und**
dem fest verdrahteten Hash/Nenner im Skript die Integritätsprüfung umgehen;
das bleibt Review-Aufgabe der Leitsession.

---

## Rohausgabe A — Hauptlauf / Negativkontrolle, finaler R16-B-Stand

```text
=== Zitatabgleich: neue Verstoesse gegen festgeschriebenen Bestand ===
Pruefwurzel: C:\Users\qwafa_2dwxzia\firma\marketing\.r16b-scratch-0c4692f\repo-final
Baseline-Pruefstand: 0c4692f873f179917b28f4c210ae2e7be76cd653
ZIEL: 8 / 8 Dateien | POOL: 11 Dateien
Geprueft: 1196 Zitate (>=25 Zeichen, deutsche Anfuehrungszeichen)
Quellenzitate bestaetigt: 272
Eigene Formulierungen: 16 / 16 Eintraege belegt (18 Fundstellen)

--- Laufzahlen je Zieldatei ---
akquise/akquiseplan.md: 29 geprueft | 25 bestaetigt | 4 eigene | 0 Bestand (-) | 0 NEU
akquise/listenbau-regelwerk.md: 115 geprueft | 102 bestaetigt | 13 eigene | 0 Bestand (-) | 0 NEU
akquise/interessenabwaegung-o8.md: 143 geprueft | 30 bestaetigt | 0 eigene | 113 Bestand (r15-altlast=113) | 0 NEU
fund/wettbewerbsbild.md: 494 geprueft | 27 bestaetigt | 0 eigene | 467 Bestand (r15-altlast=467) | 0 NEU
handel/kanal-rechtsmatrix.md: 168 geprueft | 24 bestaetigt | 0 eigene | 144 Bestand (r15-altlast=144) | 0 NEU
handel/angebotsarchitektur.md: 172 geprueft | 33 bestaetigt | 0 eigene | 139 Bestand (r15-altlast=139) | 0 NEU
akquise/sperrdatei-struktur.md: 31 geprueft | 12 bestaetigt | 0 eigene | 19 Bestand (r16-zielaufnahme=19) | 0 NEU
akquise/wellenprotokoll-vorlage.md: 44 geprueft | 19 bestaetigt | 1 eigene | 24 Bestand (r16-zielaufnahme=24) | 0 NEU

--- Bestand mit Nenner ---
R15-Altlast: 863 von 863 noch offen | 0 seit Baseline/Einbezug abgebaut
  akquise/interessenabwaegung-o8.md: 113 von 113 noch offen
  fund/wettbewerbsbild.md: 467 von 467 noch offen
  handel/kanal-rechtsmatrix.md: 144 von 144 noch offen
  handel/angebotsarchitektur.md: 139 von 139 noch offen
R16-Aufnahmebestand der zwei neuen Zieldateien: 43 von 43 noch offen | 0 seit Baseline/Einbezug abgebaut
  akquise/sperrdatei-struktur.md: 19 von 19 noch offen
  akquise/wellenprotokoll-vorlage.md: 24 von 24 noch offen

--- NEUE Verstoesse ---
Neu: 0

--- Blockzitate: Zieldokument gegen Quelle ---
OK   D3-Kasten 1 (24 Monate) (480 Zeichen verglichen)
     Gegenprobe OK (verfaelschte Fassung wird nicht bestaetigt)
OK   D3-Kasten 2 (Weg b) (1006 Zeichen verglichen)
     Gegenprobe OK (verfaelschte Fassung wird nicht bestaetigt)
OK   D2-Pflichtenliste 1-6 (757 Zeichen verglichen)
     Gegenprobe OK (verfaelschte Fassung wird nicht bestaetigt)
Blockzitate: 3 / 3 bestaetigt, Gegenproben: 3 / 3

--- Positivkontrolle (MUSS treffen) ---
OK   Rechtsmatrix D2 Pflicht 1 [handel/kanal-rechtsmatrix.md]
OK   Rechtsmatrix D3 Kasten 1 [handel/kanal-rechtsmatrix.md]
OK   Rechtsmatrix D3 Kasten 2 [handel/kanal-rechtsmatrix.md]
OK   Rechtsmatrix C3 Impressum [handel/kanal-rechtsmatrix.md]
OK   Regionalstatistik 4.4 [fund/erhebung/regionalstatistik-groessenklassen.md]
OK   R00 KPI (e) [protokolle/R00-planpruefung-2026-08-09.md]
OK   Positionierungspapier 3.3 [fund/positionierungspapier.md]
OK   Projektquelle 7 Punkt 0a [projektquelle-mkt.md]
OK   STATUS.md [STATUS.md]
OK   baseline-messplan 5 [beleg/baseline-messplan.md]
OK   CLAUDE.md [CLAUDE.md]
OK   O-8 Interessenabwaegung [akquise/interessenabwaegung-o8.md]
OK   Wettbewerbsbild Teil A [fund/wettbewerbsbild.md]
OK   Preismodell Optionen [handel/preismodell-optionen.md]
Positivkontrolle: 14 / 14

--- Gegenprobe (darf NICHT treffen) ---
OK   verfaelschte Zahl
OK   verfaelschte Frist
OK   erfundener Satz
Gegenprobe: 3 / 3

ERGEBNIS: GRUEN — 0 neue Verstoesse; Bestand bleibt sichtbar.
```

## Rohausgabe B — Positivkontrolle, gesetzt 1 von 1

```text
NEGATIV_MARKER=0
GESETZT=1 VON 1
=== Zitatabgleich: neue Verstoesse gegen festgeschriebenen Bestand ===
Pruefwurzel: C:\Users\qwafa_2dwxzia\firma\marketing\.r16b-scratch-0c4692f\repo-positive
Baseline-Pruefstand: 0c4692f873f179917b28f4c210ae2e7be76cd653
ZIEL: 8 / 8 Dateien | POOL: 11 Dateien
Geprueft: 1197 Zitate (>=25 Zeichen, deutsche Anfuehrungszeichen)
Quellenzitate bestaetigt: 272
Eigene Formulierungen: 16 / 16 Eintraege belegt (18 Fundstellen)

--- Laufzahlen je Zieldatei ---
akquise/akquiseplan.md: 30 geprueft | 25 bestaetigt | 4 eigene | 0 Bestand (-) | 1 NEU
akquise/listenbau-regelwerk.md: 115 geprueft | 102 bestaetigt | 13 eigene | 0 Bestand (-) | 0 NEU
akquise/interessenabwaegung-o8.md: 143 geprueft | 30 bestaetigt | 0 eigene | 113 Bestand (r15-altlast=113) | 0 NEU
fund/wettbewerbsbild.md: 494 geprueft | 27 bestaetigt | 0 eigene | 467 Bestand (r15-altlast=467) | 0 NEU
handel/kanal-rechtsmatrix.md: 168 geprueft | 24 bestaetigt | 0 eigene | 144 Bestand (r15-altlast=144) | 0 NEU
handel/angebotsarchitektur.md: 172 geprueft | 33 bestaetigt | 0 eigene | 139 Bestand (r15-altlast=139) | 0 NEU
akquise/sperrdatei-struktur.md: 31 geprueft | 12 bestaetigt | 0 eigene | 19 Bestand (r16-zielaufnahme=19) | 0 NEU
akquise/wellenprotokoll-vorlage.md: 44 geprueft | 19 bestaetigt | 1 eigene | 24 Bestand (r16-zielaufnahme=24) | 0 NEU

--- Bestand mit Nenner ---
R15-Altlast: 863 von 863 noch offen | 0 seit Baseline/Einbezug abgebaut
  akquise/interessenabwaegung-o8.md: 113 von 113 noch offen
  fund/wettbewerbsbild.md: 467 von 467 noch offen
  handel/kanal-rechtsmatrix.md: 144 von 144 noch offen
  handel/angebotsarchitektur.md: 139 von 139 noch offen
R16-Aufnahmebestand der zwei neuen Zieldateien: 43 von 43 noch offen | 0 seit Baseline/Einbezug abgebaut
  akquise/sperrdatei-struktur.md: 19 von 19 noch offen
  akquise/wellenprotokoll-vorlage.md: 24 von 24 noch offen

--- NEUE Verstoesse ---
Neu: 1
[akquise/akquiseplan.md:601] R16-B Positivkontrolle: Dieses absichtlich falsche neue Zitat steht in keiner Quelle.

--- Blockzitate: Zieldokument gegen Quelle ---
OK   D3-Kasten 1 (24 Monate) (480 Zeichen verglichen)
     Gegenprobe OK (verfaelschte Fassung wird nicht bestaetigt)
OK   D3-Kasten 2 (Weg b) (1006 Zeichen verglichen)
     Gegenprobe OK (verfaelschte Fassung wird nicht bestaetigt)
OK   D2-Pflichtenliste 1-6 (757 Zeichen verglichen)
     Gegenprobe OK (verfaelschte Fassung wird nicht bestaetigt)
Blockzitate: 3 / 3 bestaetigt, Gegenproben: 3 / 3

--- Positivkontrolle (MUSS treffen) ---
OK   Rechtsmatrix D2 Pflicht 1 [handel/kanal-rechtsmatrix.md]
OK   Rechtsmatrix D3 Kasten 1 [handel/kanal-rechtsmatrix.md]
OK   Rechtsmatrix D3 Kasten 2 [handel/kanal-rechtsmatrix.md]
OK   Rechtsmatrix C3 Impressum [handel/kanal-rechtsmatrix.md]
OK   Regionalstatistik 4.4 [fund/erhebung/regionalstatistik-groessenklassen.md]
OK   R00 KPI (e) [protokolle/R00-planpruefung-2026-08-09.md]
OK   Positionierungspapier 3.3 [fund/positionierungspapier.md]
OK   Projektquelle 7 Punkt 0a [projektquelle-mkt.md]
OK   STATUS.md [STATUS.md]
OK   baseline-messplan 5 [beleg/baseline-messplan.md]
OK   CLAUDE.md [CLAUDE.md]
OK   O-8 Interessenabwaegung [akquise/interessenabwaegung-o8.md]
OK   Wettbewerbsbild Teil A [fund/wettbewerbsbild.md]
OK   Preismodell Optionen [handel/preismodell-optionen.md]
Positivkontrolle: 14 / 14

--- Gegenprobe (darf NICHT treffen) ---
OK   verfaelschte Zahl
OK   verfaelschte Frist
OK   erfundener Satz
Gegenprobe: 3 / 3

ERGEBNIS: ROT — neue Verstoesse oder Kontrollfehler.
```

## Rohausgabe C — Selbsttest

```text
=== SELBSTTEST: dieselben Funktionen wie der Produktivpfad ===
Zitate extrahiert                 : 18 / 18
Muster (a) NEU                   : 8 / 8
TREFFEN-NICHT-Zeilen             : 8 / 8
Muster (b) BASELINE, nicht rot   : 1 / 1
Muster (c) POOL bestaetigt       : 8 / 8
Muster (d) nur eigene Datei      : 1 / 1 nicht bestaetigt
Muster (d) zusaetzlich Fremdpool : 1 / 1 bestaetigt
LF/CRLF invariant                : JA
SELBSTTEST BESTANDEN
```

## Rohausgabe D — `--altlast`, vollständige Liste 906/906

```text
=== ALTLAST / AUFNAHMEBESTAND — VOLLSTAENDIGE BASELINE ===
Pruefstand: 0c4692f873f179917b28f4c210ae2e7be76cd653
Nutzdaten-SHA-256: 50f2a42e3552020da52077a635bc24c2956a49ab1147dd8724ef57e8a3fa42e0

--- R15-Altlast ---
Offen: 863 von 863 | seit Baseline/Einbezug abgebaut: 0
akquise/interessenabwaegung-o8.md: 113 von 113 offen | 0 abgebaut
[OFFEN] akquise/interessenabwaegung-o8.md :: Wenn für den werbenden Verantwortlichen ein bestimmter Kontaktweg zu einer betroffenen Person danach nicht erlaubt ist, fehlt es bereits an einem berechtigten Interesse.
[OFFEN] akquise/interessenabwaegung-o8.md :: it requires that the alleged legitimate interest be lawful
[OFFEN] akquise/interessenabwaegung-o8.md :: Diese Vorschrift verlangt zwar nicht, dass ein solches Interesse gesetzlich bestimmt wird, sie erfordert jedoch, dass das geltend gemachte berechtigte Interesse rechtmäßig ist.
[OFFEN] akquise/interessenabwaegung-o8.md :: Die DS-GVO verlangt eine Abwägung im konkreten Einzelfall zwischen den Interessen des Verantwortlichen bzw. Dritten und der betroffenen Person. Ein bloßes Abstellen auf abstrakte oder auf vergleichbare Fälle ohne Beachtung der Besonderheiten des Einzelfalls (das konkrete Werbevorhaben) genügt den Anforderungen der DS-GVO nicht.
[OFFEN] akquise/interessenabwaegung-o8.md :: das konkrete Werbevorhaben
[OFFEN] akquise/interessenabwaegung-o8.md :: Abstellen auf abstrakte oder auf vergleichbare Fälle
[OFFEN] akquise/interessenabwaegung-o8.md :: konkrete juristische Person bzw. Firma mit ladungsfähiger Anschrift einschließlich E-Mail-Adresse
[OFFEN] akquise/interessenabwaegung-o8.md :: Kurzbezeichnungen (wie XY-Group) oder Postfachanschriften genügen den Transparenzanforderungen von Art. 12 Abs. 1 S. 1, Art. 13 Abs. 1 lit. a und Art. 14 Abs. 1 lit. a DS-GVO nicht.
[OFFEN] akquise/interessenabwaegung-o8.md :: that provision lays down three cumulative conditions so that the processing of personal data is lawful, namely, first, the pursuit of a legitimate interest by the data controller or by a third party; second, the need to process personal data for the purposes of the legitimate interests pursued; and, third, that the interests or fundamental freedoms and rights of the person concerned by the data protection do not take precedence over the legitimate interest of the controller or of a third party
[OFFEN] akquise/interessenabwaegung-o8.md :: a wide range of interests is, in principle, capable of being regarded as legitimate
[OFFEN] akquise/interessenabwaegung-o8.md :: the Court has not ruled out the possibility that a commercial interest of the controller which consists in the promotion and sale of advertising space for marketing purposes may be regarded as a legitimate interest
[OFFEN] akquise/interessenabwaegung-o8.md :: a commercial interest of the controller … could constitute a legitimate interest, within the meaning of point (f) …, provided that it is not contrary to the law. It is, however, for the referring court to assess, on a case-by-case basis, whether such an interest exists, taking into account the applicable legal framework and all the circumstances of the case.
[OFFEN] akquise/interessenabwaegung-o8.md :: the justifications provided for in that latter provision … must be interpreted restrictively
[OFFEN] akquise/interessenabwaegung-o8.md :: Die Verarbeitung personenbezogener Daten zum Zwecke der Direktwerbung kann als eine einem berechtigten Interesse dienende Verarbeitung betrachtet werden.
[OFFEN] akquise/interessenabwaegung-o8.md :: Dass bei Direktwerbung Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO grundsätzlich als Rechtsgrundlage in Frage kommt, ist dem Erwägungsgrund (ErwGr.) 47 DS-GVO zu entnehmen
[OFFEN] akquise/interessenabwaegung-o8.md :: grundsätzlich … in Frage kommt
[OFFEN] akquise/interessenabwaegung-o8.md :: Damit wird nicht festgestellt, dass die Direktwerbung ein berechtigtes Interesse sei, sondern es wird die Möglichkeit aufgezeigt, dass es sich dabei um ein berechtigtes Interesse handeln könnte.
[OFFEN] akquise/interessenabwaegung-o8.md :: Entgegen der Auffassung der Beklagten handelt es sich bei Erwägungsgrund 47 zur DSGVO nicht um einen acte claire
[OFFEN] akquise/interessenabwaegung-o8.md :: Direktwerbung ist ein berechtigtes Interesse
[OFFEN] akquise/interessenabwaegung-o8.md :: that condition requires the referring court to ascertain that the legitimate data processing interests pursued cannot reasonably be achieved just as effectively by other means less restrictive of the fundamental rights and freedoms of data subjects
[OFFEN] akquise/interessenabwaegung-o8.md :: … nur dann als im Sinne dieser Vorschrift zur Wahrung der berechtigten Interessen dieses Verantwortlichen erforderlich angesehen werden kann, wenn die Verarbeitung zur Verwirklichung des in Rede stehenden berechtigten Interesses absolut notwendig ist und sofern in Anbetracht aller relevanten Umstände die Interessen oder Grundrechte und Grundfreiheiten dieser Mitglieder gegenüber dem berechtigten Interesse nicht überwiegen.
[OFFEN] akquise/interessenabwaegung-o8.md :: eine Verarbeitung personenbezogener Daten, die darin besteht, personenbezogene Daten der Mitglieder eines Sportverbands in Verfolgung des wirtschaftlichen Interesses des Verantwortlichen gegen Entgelt offenzulegen
[OFFEN] akquise/interessenabwaegung-o8.md :: in an equally efficient manner, … which it is however for the referring court to ascertain
[OFFEN] akquise/interessenabwaegung-o8.md :: beim ersten echten Listenbau nochmals gegen den dann konkreten Zweck zu prüfen
[OFFEN] akquise/interessenabwaegung-o8.md :: in der Menge der Kontaktzeile
[OFFEN] akquise/interessenabwaegung-o8.md :: Sofern es anhand eines Selektionskriteriums zu einer Einteilung in Werbegruppen kommt (z. B. anhand Postleitzahlen oder Alphabet), sich aber kein zusätzlicher Erkenntnisgewinn durch Individualisierung (Profiling) aus der Selektion ergibt, wird die Interessenabwägung in der Regel ebenfalls zugunsten des Verantwortlichen ausfallen.
[OFFEN] akquise/interessenabwaegung-o8.md :: wegen der besonderen Auswirkungen dieser Werbeform (stärkere Belästigung/Störung)
[OFFEN] akquise/interessenabwaegung-o8.md :: Im B2B-Bereich stehen deshalb bei einem Nutzen von Telefonnummern für Werbeanrufe nicht von vorneherein überwiegende schutzwürdige Interessen der telefonisch anzusprechenden Gewerbetreibenden nach Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO entgegen.
[OFFEN] akquise/interessenabwaegung-o8.md :: Nutzen von Telefonnummern
[OFFEN] akquise/interessenabwaegung-o8.md :: auch … was objektiv vernünftigerweise erwartet werden kann und darf. Entscheidend ist daher auch, ob die Verarbeitung personenbezogener Daten für Zwecke der Direktwerbung in bestimmten Bereichen der Sozialsphäre typischerweise akzeptiert oder abgelehnt wird.
[OFFEN] akquise/interessenabwaegung-o8.md :: wird typischerweise hingenommen
[OFFEN] akquise/interessenabwaegung-o8.md :: the scale of the processing at issue and its impact on that person
[OFFEN] akquise/interessenabwaegung-o8.md :: Unsere Wellen sind klein und ausgewertet … es gibt keinen Millionenversand
[OFFEN] akquise/interessenabwaegung-o8.md :: Eine Welle von 300 gleichartigen Briefen mit demselben Fehler ist nicht 300 × 500 €, aber auch nicht 1 × 500 €
[OFFEN] akquise/interessenabwaegung-o8.md :: Nicht zulässig ist hingegen das Auslesen der Daten aus einem Online-Impressum zum Zweck der werblichen Nutzung. Zwar sind diese Daten allgemein zugänglich, sie werden jedoch nicht freiwillig, sondern aufgrund der gesetzlichen Verpflichtung zur Anbieterkennzeichnung gem. § 5 TMG bzw. § 18 MStV veröffentlicht. Mangels Freiwilligkeit der Veröffentlichung führt die Interessenabwägung gem. Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO regelmäßig dazu, dass die werbliche Nutzung so erhobener Daten unzulässig ist.
[OFFEN] akquise/interessenabwaegung-o8.md :: wir schreiben ja nur Briefe
[OFFEN] akquise/interessenabwaegung-o8.md :: gemeint sind nur Privatpersonen
[OFFEN] akquise/interessenabwaegung-o8.md :: dabei sind die vernünftigen Erwartungen der betroffenen Person, die auf ihrer Beziehung zu dem Verantwortlichen beruhen, zu berücksichtigen. Ein berechtigtes Interesse könnte beispielsweise vorliegen, wenn eine maßgebliche und angemessene Beziehung zwischen der betroffenen Person und dem Verantwortlichen besteht, z. B. wenn die betroffene Person ein Kunde des Verantwortlichen ist oder in seinen Diensten steht.
[OFFEN] akquise/interessenabwaegung-o8.md :: ob eine betroffene Person zum Zeitpunkt der Erhebung der personenbezogenen Daten und angesichts der Umstände, unter denen sie erfolgt, vernünftigerweise absehen kann, dass möglicherweise eine Verarbeitung für diesen Zweck erfolgen wird.
[OFFEN] akquise/interessenabwaegung-o8.md :: stehen regelmäßig die Grundsätze einer fairen und transparenten Verarbeitung personenbezogener Daten nach Art. 5 Abs. 1 lit. a und Art. 12 Abs. 1 DS-GVO entgegen.
[OFFEN] akquise/interessenabwaegung-o8.md :: im Nachgang zu einer Bestellung
[OFFEN] akquise/interessenabwaegung-o8.md :: Zusendung von Werbung nach Bestellung und Selektion
[OFFEN] akquise/interessenabwaegung-o8.md :: the justifications … must be interpreted restrictively
[OFFEN] akquise/interessenabwaegung-o8.md :: Insbesondere dann, wenn personenbezogene Daten in Situationen verarbeitet werden, in denen eine betroffene Person vernünftigerweise nicht mit einer weiteren Verarbeitung rechnen muss, könnten die Interessen und Grundrechte der betroffenen Person das Interesse des Verantwortlichen überwiegen.
[OFFEN] akquise/interessenabwaegung-o8.md :: the interests and fundamental rights of the data subject may in particular override the interest of the data controller where personal data are processed in circumstances where data subjects do not reasonably expect such processing
[OFFEN] akquise/interessenabwaegung-o8.md :: Sofern personenbezogene Daten für Werbezwecke verwendet werden sollen, die ursprünglich nicht (auch) zu Zwecken der Werbung erhoben worden sind, sind zusätzlich die Regelungen des Art. 6 Abs. 4 DS-GVO (Zweckänderung) zu beachten. Um herauszufinden, ob der Werbezweck mit der ursprünglichen Zweckbestimmung vereinbar ist, müssen Verantwortliche eine sog. Kompatibilitätsprüfung durchführen, es sei denn, es liegt eine Einwilligung in die zweckändernde Nutzung vor
[OFFEN] akquise/interessenabwaegung-o8.md :: Wir informieren doch vorbildlich nach Art. 14.
[OFFEN] akquise/interessenabwaegung-o8.md :: Die Erwartungen der betroffenen Person können dabei nicht durch die nach der DS-GVO vorgesehenen Pflichtinformationen (Art. 13, 14 DS-GVO) erweitert werden. Während die Nicht-oder Schlechterfüllung der Informationspflicht das Abwägungsergebnis also aus Sicht des Verantwortlichen negativ beeinflusst, hat die ordnungsgemäße Erfüllung der Informationspflichten keine Auswirkung auf die Abwägung der Interessen.
[OFFEN] akquise/interessenabwaegung-o8.md :: Es hat ja niemand widersprochen.
[OFFEN] akquise/interessenabwaegung-o8.md :: Drittens schließlich kann eine grundsätzliche Zulässigkeit der Direktwerbung per Briefpost keinesfalls aus einem fehlenden Widerspruch der betroffenen Person abgeleitet werden. Das etwaige Bestehen eines Widerspruchsrechts setzt nämlich das Vorliegen einer rechtmäßigen Verarbeitung voraus
[OFFEN] akquise/interessenabwaegung-o8.md :: Die Aufsicht sagt doch, B2B sei unproblematisch.
[OFFEN] akquise/interessenabwaegung-o8.md :: Nutzen von Telefonnummern
[OFFEN] akquise/interessenabwaegung-o8.md :: Eine bloße Sachbezogenheit (z. B. Werbung für Büroartikel, Telefon-und Stromanbieter oder auch die entgeltliche Vermittlung von Aufträgen) genügt jedoch nicht, um von einem Einverständnis des angerufenen Unternehmers auszugehen
[OFFEN] akquise/interessenabwaegung-o8.md :: für den Anruf ein konkreter und aus dem Interessenbereich des Anzurufenden herzuleitender Grund vorliegt
[OFFEN] akquise/interessenabwaegung-o8.md :: der zuständigen Aufsichtsbehörden
[OFFEN] akquise/interessenabwaegung-o8.md :: 0 Treffer in beiden Dokumenten
[OFFEN] akquise/interessenabwaegung-o8.md :: Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO sind Marktverhaltensregelungen in diesem Sinn, weil und soweit sie die Zulässigkeit der Datenverarbeitung zum Zwecke der Werbung regeln
[OFFEN] akquise/interessenabwaegung-o8.md :: schließt seine Befugnis ein, Verstöße gegen die [DSGVO] wettbewerbsrechtlich zu verfolgen
[OFFEN] akquise/interessenabwaegung-o8.md :: keiner der beiden Wege dazu [führt], dass im Sinne eines Automatismus jeder Verstoß gegen die DSGVO eine unlautere Handlung darstellt
[OFFEN] akquise/interessenabwaegung-o8.md :: Der gesamte UWG-Unlauterkeitsteil — der Grund 2 trug — beruht auf dem Verbraucherleitbild und ist auf einen gewerblichen Adressaten nicht übertragbar.
[OFFEN] akquise/interessenabwaegung-o8.md :: Aufmachung ist kein Thema für uns
[OFFEN] akquise/interessenabwaegung-o8.md :: § 3 Abs. 1 UWG … §§ 5 Abs. 1 und Abs. 2, 5a Abs. 1 bis Abs. 3 UWG
[OFFEN] akquise/interessenabwaegung-o8.md :: it is also necessary … that the controller comply with all its other obligations under that regulation
[OFFEN] akquise/interessenabwaegung-o8.md :: falls die personenbezogenen Daten zur Kommunikation mit der betroffenen Person verwendet werden sollen, spätestens zum Zeitpunkt der ersten Mitteilung an sie
[OFFEN] akquise/interessenabwaegung-o8.md :: Es kommt also darauf an, welche Bedingung zuerst eintritt.
[OFFEN] akquise/interessenabwaegung-o8.md :: — insoweit von der DSGVO nicht vorgesehene — Karenzfrist für eine Nachlieferung der geschuldeten Informationen
[OFFEN] akquise/interessenabwaegung-o8.md :: ausdrückliches Verwerfen
[OFFEN] akquise/interessenabwaegung-o8.md :: aus welcher Quelle die personenbezogenen Daten stammen und gegebenenfalls ob sie aus öffentlich zugänglichen Quellen stammen
[OFFEN] akquise/interessenabwaegung-o8.md :: Erfolgt die Information in Verbindung mit der ersten Werbezusendung, sind beide Bestandteile (Information und Werbetext) klar voneinander zu trennen und die Information (einschließlich des Hinweises auf das Werbewiderspruchsrecht) entsprechend deutlich herauszustellen.
[OFFEN] akquise/interessenabwaegung-o8.md :: Werden personenbezogene Daten verarbeitet, um Direktwerbung zu betreiben, so hat die betroffene Person das Recht, jederzeit Widerspruch gegen die Verarbeitung sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen
[OFFEN] akquise/interessenabwaegung-o8.md :: Die betroffene Person muss spätestens zum Zeitpunkt der ersten Kommunikation mit ihr ausdrücklich auf das in den Absätzen 1 und 2 genannte Recht hingewiesen werden; dieser Hinweis hat in einer verständlichen und von anderen Informationen getrennten Form zu erfolgen.
[OFFEN] akquise/interessenabwaegung-o8.md :: Es ist nur dann von einer wirksamen Information im Sinne des Gesetzes auszugehen, wenn eine betroffene Person beim üblichen Umgang mit der Werbebotschaft … von dem Hinweis auf das Widerspruchsrecht Kenntnis erlangt.
[OFFEN] akquise/interessenabwaegung-o8.md :: muss deutlich abgesetzt werden, beispielsweise durch unterschiedliche Überschriften
[OFFEN] akquise/interessenabwaegung-o8.md :: Insbesondere müssen eine unverzügliche Bearbeitung auch von formlos eingehenden Widersprüchen gewährleistet und für Werbemaßnahmen jederzeit aktuelle Datenbestände verwendet werden.
[OFFEN] akquise/interessenabwaegung-o8.md :: Wenn konkrete Werbeaktionen angelaufen sind …, kann es im Einzelfall für das Unternehmen unzumutbar sein, einen zwischenzeitlich eingegangenen Werbewiderspruch noch mit erheblichem Aufwand umzusetzen, z. B. einen bestimmten bereits adressierten Brief aus einer großen Menge heraus zu sortieren.
[OFFEN] akquise/interessenabwaegung-o8.md :: Auch im Fall von postalischer Werbung ist zu beachten, dass keine neuen Verarbeitungen (wie z. B. neue Druckaufträge) gestartet werden dürfen.
[OFFEN] akquise/interessenabwaegung-o8.md :: Für den Brief gilt die einzige Erleichterung der ganzen Handreichung — ein bereits adressierter Brief muss nicht aus dem Stapel gezogen werden
[OFFEN] akquise/interessenabwaegung-o8.md :: aus einer großen Menge
[OFFEN] akquise/interessenabwaegung-o8.md :: die einzige Erleichterung der ganzen Handreichung
[OFFEN] akquise/interessenabwaegung-o8.md :: die dortigen Erleichterungen
[OFFEN] akquise/interessenabwaegung-o8.md :: in jedem Fall innerhalb eines Monats nach Eingang des Antrags zurückzumelden
[OFFEN] akquise/interessenabwaegung-o8.md :: ⚠️ OFFEN — O-2 … VVT-Eintrag unvollständig
[OFFEN] akquise/interessenabwaegung-o8.md :: nie angeschriebene Datensätze früher löschen?
[OFFEN] akquise/interessenabwaegung-o8.md :: nur wenn vergewissert ist das es follow ups gab was nie passieren > darf ist das leads aus unserem Raster fallen, ohne das diese > Anständig bearbeitet wurden und ein Vertragsabschluss ausgeschlossen > sit
[OFFEN] akquise/interessenabwaegung-o8.md :: Abschluss ausgeschlossen, weil …
[OFFEN] akquise/interessenabwaegung-o8.md :: Die Entscheidung trifft der User. Diese Session entscheidet sie nicht.
[OFFEN] akquise/interessenabwaegung-o8.md :: die Dauer, für die die personenbezogenen Daten gespeichert werden oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer
[OFFEN] akquise/interessenabwaegung-o8.md :: Der Zeitablauf entscheidet daher mit über die Frage, ab wann die anfänglich nach Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO überwiegenden Werbeinteressen hinter die Interessen der betroffenen Person am Ausschluss einer werblichen Nutzung zurücktreten.
[OFFEN] akquise/interessenabwaegung-o8.md :: Die Erfüllung dieser Verpflichtung erfordert letztlich Vorkehrungen, die bereits vor dem ersten Verarbeitungsschritt in die Wege geleitet sein müssen. Ansonsten bestünde nämlich die Gefahr, dass mit der Datenverarbeitung begonnen wird, obwohl nach den objektiven Umständen die Voraussetzungen einer rechtmäßigen Datenverarbeitung nicht vorliegen. … Bloße Absichten des Verantwortlichen können, wie sich aus Art. 5 Abs. 2 DSGVO ergibt, eine Datenverarbeitung nicht rechtfertigen.
[OFFEN] akquise/interessenabwaegung-o8.md :: Die Frist läuft ab LISTENAUFBAU
[OFFEN] akquise/interessenabwaegung-o8.md :: wir entscheiden die Frist, bevor wir losschicken
[OFFEN] akquise/interessenabwaegung-o8.md :: Bei dieser Prüfung sind grundsätzlich alle Umstände des Einzelfalls zu berücksichtigen, weshalb eine Datenverarbeitung auch für rechtmäßige Werbemaßnahmen unzulässig sein kann
[OFFEN] akquise/interessenabwaegung-o8.md :: Für zulässigerweise beim Betroffenen erhobene Kontaktdaten
[OFFEN] akquise/interessenabwaegung-o8.md :: keine explizite Befristung
[OFFEN] akquise/interessenabwaegung-o8.md :: Die Entscheidung trifft der User. Diese Session entscheidet sie nicht … Bis dahin bleibt § 8 lit. f offen und der erste Versand gesperrt.
[OFFEN] akquise/interessenabwaegung-o8.md :: Im Sinne des Erleichterungsgebots nach Art. 12 Abs. 2 S. 1 DS-GVO ist für die Einlegung des Werbewiderspruchs auch eine elektronische Kommunikationsmöglichkeit anzubieten.
[OFFEN] akquise/interessenabwaegung-o8.md :: Wer eine E-Mail-Adresse bereitstellt, muss durch technisch-organisatorische Maßnahmen gewährleisten, dass E-Mails, die sich auf Betroffenenrechte beziehen, entweder nicht im Spam-Ordner landen oder dort jedenfalls dennoch umgehend zur Kenntnis genommen werden (Art. 24 DS-GVO).
[OFFEN] akquise/interessenabwaegung-o8.md :: möglichst genau zu benennenden kurzen Zeitraum[s]
[OFFEN] akquise/interessenabwaegung-o8.md :: ausdrücklich und allein eine Löschung aller Daten aus der Werbesperrdatei
[OFFEN] akquise/interessenabwaegung-o8.md :: eventuell wieder Werbung erhalten kann
[OFFEN] akquise/interessenabwaegung-o8.md :: revisionsfeste Dokumentation der tatsächlich genutzten Texte mit Versionsnummer
[OFFEN] akquise/interessenabwaegung-o8.md :: das konkrete Werbevorhaben
[OFFEN] akquise/interessenabwaegung-o8.md :: kostenloses Abwägungsargument
[OFFEN] akquise/interessenabwaegung-o8.md :: um das UWG-Merkmal erkennbar, hier um einen DSGVO-Abwägungsfaktor
[OFFEN] akquise/interessenabwaegung-o8.md :: beide Aussagen gelten nebeneinander
[OFFEN] akquise/interessenabwaegung-o8.md :: das klären wir, bevor wir losschicken
[OFFEN] akquise/interessenabwaegung-o8.md :: maßgebliche[n] und angemessene[n] Beziehung
[OFFEN] akquise/interessenabwaegung-o8.md :: die Rechtsmatrix führt curia noch als nutzbare amtliche Quelle
[OFFEN] akquise/interessenabwaegung-o8.md :: Mindestumfang, der zusätzlich IN das Anschreiben gehört
[OFFEN] akquise/interessenabwaegung-o8.md :: Diese Orientierungshilfe thematisiert nicht das Thema Adresshandel
[OFFEN] akquise/interessenabwaegung-o8.md :: die Größenordnung des Akquiseplans
[OFFEN] akquise/interessenabwaegung-o8.md :: Alle tragenden Zitate
[OFFEN] akquise/interessenabwaegung-o8.md :: stichprobenhaft, folgende Stellen
fund/wettbewerbsbild.md: 467 von 467 offen | 0 abgebaut
[OFFEN] fund/wettbewerbsbild.md :: Stand Juli 2026, nicht neu bestätigt
[OFFEN] fund/wettbewerbsbild.md :: Wer baut dieselbe Technik?
[OFFEN] fund/wettbewerbsbild.md :: Wer verkauft demselben Hotelier dieselbe Leistung?
[OFFEN] fund/wettbewerbsbild.md :: von uns im Rohtext gelesene Anbieter-Selbstauskunft
[OFFEN] fund/wettbewerbsbild.md :: Wer baut dieselbe Technik?
[OFFEN] fund/wettbewerbsbild.md :: Wer verkauft demselben Hotelier dieselbe Leistung?
[OFFEN] fund/wettbewerbsbild.md :: Kein Self-Check-in, kein Kiosk, keine Meldescheine … Keine Überschneidung mit unserem Produkt
[OFFEN] fund/wettbewerbsbild.md :: ~18 Mitarbeiter laut Hotel Tech Report
[OFFEN] fund/wettbewerbsbild.md :: von 43 auf rund 65 Mitarbeitende angewachsen
[OFFEN] fund/wettbewerbsbild.md :: Straiv ist mit 18 Leuten … verwundbar bei genau dem, was unser Modell verspricht
[OFFEN] fund/wettbewerbsbild.md :: ohne direkt in eine komplett neue Schließinfrastruktur investieren zu müssen
[OFFEN] fund/wettbewerbsbild.md :: contactless check-in & out
[OFFEN] fund/wettbewerbsbild.md :: Kiosk & self-service check-in
[OFFEN] fund/wettbewerbsbild.md :: 9 Anbieter, kein deutscher
[OFFEN] fund/wettbewerbsbild.md :: alle 63 Mitarbeiter:innen anzeigen
[OFFEN] fund/wettbewerbsbild.md :: Im letzten Jahr ist das Team von 43 auf rund 65 Mitarbeitende angewachsen.
[OFFEN] fund/wettbewerbsbild.md :: Größenordnung 50–65, Selbstauskünfte; die früher geführten 18 sind nicht mehr haltbar.
[OFFEN] fund/wettbewerbsbild.md :: Straiv hat 63 Mitarbeiter.
[OFFEN] fund/wettbewerbsbild.md :: eigenfinanziertes Softwareunternehmen
[OFFEN] fund/wettbewerbsbild.md :: Über 3.400 zufriedene Hotels in 30 Ländern
[OFFEN] fund/wettbewerbsbild.md :: Currently, more than 3,400 hotels across 30 countries rely on this advanced solution. And also more than 500 apaleo installs happened already.
[OFFEN] fund/wettbewerbsbild.md :: Derzeit werden von Straiv folgende Lösungen angeboten: Online Check-in & -out /Guest Messaging /Digital Concierge /Upselling
[OFFEN] fund/wettbewerbsbild.md :: Variante 1: Der Tabletop Kiosk
[OFFEN] fund/wettbewerbsbild.md :: Variante 2: Der Indoor Kiosk
[OFFEN] fund/wettbewerbsbild.md :: Variante 3: Der Outdoor Kiosk … Wetterfestes Terminal für digitale Gästeregistrierung und Keycard-Ausgabe im Außenbereich.
[OFFEN] fund/wettbewerbsbild.md :: Walk-in-Funktion (für ausgewählte PMS)
[OFFEN] fund/wettbewerbsbild.md :: Integrierte Zahlungsabwicklung
[OFFEN] fund/wettbewerbsbild.md :: Die Anschaffungskosten schrecken dich ab? Wir bieten dir einfache Finanzierungsmöglichkeiten.
[OFFEN] fund/wettbewerbsbild.md :: spezialisierten Hardware-Partnern wie Kiosk Embedded Systems (an Acer Group Company)
[OFFEN] fund/wettbewerbsbild.md :: Straivs Kiosk-Angebot läuft außerhalb des Store-Listings
[OFFEN] fund/wettbewerbsbild.md :: keyBoy ist ein automatisches Schlüsselausgabesystem für Hotels. Gäste checken rund um die Uhr flexibel ein und erhalten ihren Schlüssel kontaktlos per Code über einen Schlüsselsafe.
[OFFEN] fund/wettbewerbsbild.md :: Die neue Integration von Straiv und keyBoy schließt genau diese Lücke. Sie ermöglicht einen vollautomatisierten Online Check-in, während der physische Schlüssel weiterhin das vertraute Element der Türöffnung bleibt
[OFFEN] fund/wettbewerbsbild.md :: ohne direkt in eine komplett neue Schließinfrastruktur investieren zu müssen
[OFFEN] fund/wettbewerbsbild.md :: 100% rechtskonform & vollautomatisch mit dem PMS synchronisiert
[OFFEN] fund/wettbewerbsbild.md :: Datenerfassung via Gast-Smartphone, Rezeptions-Tablet oder Kiosk-Terminal
[OFFEN] fund/wettbewerbsbild.md :: Ermögliche deinen Gästen eine vollautonome Anreise über dein Kiosk-Terminal in der Lobby. Auch hier wird der digitale Meldeschein nahtlos ausgefüllt, unterschrieben und direkt im PMS hinterlegt.
[OFFEN] fund/wettbewerbsbild.md :: Durch Verfahren wie die einfache digitale Unterschrift oder erweiterte SCA-Verfahren (Strong Customer Authentication) wird der Meldeschein gesetzeskonform unterzeichnet.
[OFFEN] fund/wettbewerbsbild.md :: Seit dem 1. Januar 2025 gilt in Deutschland der Wegfall der allgemeinen Meldepflicht im Hotel für Gäste mit deutscher Staatsangehörigkeit.
[OFFEN] fund/wettbewerbsbild.md :: Anspruch, Mechanik ungeprüft
[OFFEN] fund/wettbewerbsbild.md :: WhatsApp, text message, or email
[OFFEN] fund/wettbewerbsbild.md :: Straivs customer support processes havent yet been verified by Hotel Tech Report
[OFFEN] fund/wettbewerbsbild.md :: This vendor has not met the minimum criteria for the Certificate of Excellence
[OFFEN] fund/wettbewerbsbild.md :: Backend: Touchpoint/Module selection is often confusing; the setup was very time-consuming because if I change something in the backend in German, I also have to change it in English (no automatic translation).
[OFFEN] fund/wettbewerbsbild.md :: The product has a good basic approach, but unfortunately it is far from mature and after only 3 months of operation, numerous individual components have failed.
[OFFEN] fund/wettbewerbsbild.md :: Instead of putting all their effort into the sales team, they should be focusing much more on their hotel partners.
[OFFEN] fund/wettbewerbsbild.md :: * Very easy setup. * Services are always online. * Backend is user friendly … * Support is amazing.
[OFFEN] fund/wettbewerbsbild.md :: unter zwei geratenen Slugs nicht gefunden
[OFFEN] fund/wettbewerbsbild.md :: die Anzahl seiner Zimmer die bei Vertragsabschluss vereinbarte Anzahl von Zimmern … überschreitet
[OFFEN] fund/wettbewerbsbild.md :: Eine Rückerstattung bei eventuell sinkender Zimmeranzahl ist bei einer Mindestlaufzeit ausgeschlossen.
[OFFEN] fund/wettbewerbsbild.md :: einen einmaligen und/oder wiederkehrenden Betrag in Abhängigkeit vom gewählten Paket und dem vereinbarten Zahlungsturnus. Soweit nicht abweichend vereinbart, zahlt der Kunde die jeweilige Vergütung jährlich im Voraus.
[OFFEN] fund/wettbewerbsbild.md :: stellt Straiv dem Kunden mögliche einmalige Gebühren für das Onboarding und die Einrichtung der Software in Rechnung. Die Höhe … ist in der aktuell gültigen Paketübersicht aufrufbar.
[OFFEN] fund/wettbewerbsbild.md :: die jeweils vereinbarte prozentuale Provision pro Transaktion
[OFFEN] fund/wettbewerbsbild.md :: Sämtliche Preise verstehen sich zuzüglich der gesetzlich gültigen Mehrwertsteuer.
[OFFEN] fund/wettbewerbsbild.md :: Alle Straiv-Beträge sind damit netto
[OFFEN] fund/wettbewerbsbild.md :: Wettbewerbsmodell milder als es ist
[OFFEN] fund/wettbewerbsbild.md :: Straiv ist berechtigt, die vereinbarte Vergütung der Leistungen mit einer Ankündigung per E-Mail von drei Monaten zum Monatsende zu erhöhen. Der Kunde hat … das Recht, den jeweiligen Einzelauftrag innerhalb einer Frist von sechs Wochen zum Wirksamwerden der Preisanpassung zu kündigen.
[OFFEN] fund/wettbewerbsbild.md :: Im Fall einer gewählten Mindestlaufzeit sind Preiserhöhungen erst 12 Monate nach Vertragsbeginn möglich
[OFFEN] fund/wettbewerbsbild.md :: mit einer Frist von drei Monaten zum Ende der jeweiligen Laufzeit
[OFFEN] fund/wettbewerbsbild.md :: Frist von vier Wochen zum Monatsende
[OFFEN] fund/wettbewerbsbild.md :: 5 % Kommission auf vermitteltes Upselling
[OFFEN] fund/wettbewerbsbild.md :: Es fällt eine Kommission von 5 % ausschließlich auf tatsächlich über das System verkaufte Zusatzleistungen und Upgrades an.
[OFFEN] fund/wettbewerbsbild.md :: möglicherweise eine Gebühr … und … eine Provision
[OFFEN] fund/wettbewerbsbild.md :: Stuttgart, 26. Februar 2026
[OFFEN] fund/wettbewerbsbild.md :: da wir 2026 verstärkt expandieren und internationalisieren. Wir fokussieren uns aktuell stark auf Frankreich und die Benelux-Region. Sowohl in diesen neuen Märkten als auch in unseren Kernmärkten Deutschland, Österreich und Schweiz…
[OFFEN] fund/wettbewerbsbild.md :: Vom Pioniergeist zum Marktführer
[OFFEN] fund/wettbewerbsbild.md :: Market leader in digital Journey
[OFFEN] fund/wettbewerbsbild.md :: Anbieter — Kevin Jedynak · Book Your Key · Am Bahnhof 1 · 59872 Meschede · Deutschland — Einzelunternehmen. Ein Handelsregistereintrag besteht nicht, deshalb entfallen Registergericht und Registernummer.
[OFFEN] fund/wettbewerbsbild.md :: © 2026 Book Your Key · Inhaber Kevin Jedynak
[OFFEN] fund/wettbewerbsbild.md :: Firmierung von Vertragspartnern nur per Registerauszug, nie aus Signatur/Website
[OFFEN] fund/wettbewerbsbild.md :: Die Rezeption, die keine Schicht braucht
[OFFEN] fund/wettbewerbsbild.md :: Check-in in 16 Sprachen … Ausweisdaten und Meldeschein nimmt der Automat gleich mit auf.
[OFFEN] fund/wettbewerbsbild.md :: Zahlung am Gerät. Kartenterminal direkt im Automaten.
[OFFEN] fund/wettbewerbsbild.md :: Der Automat gibt mechanische Schlüssel und Chips aus und nimmt sie zurück. An den Türen muss dafür nichts geändert werden. Alternativ schaltet er Smartlocks direkt frei
[OFFEN] fund/wettbewerbsbild.md :: Walk-in-Buchung … Der Gast bucht am Automaten, zahlt und zieht ein — auch nachts um drei.
[OFFEN] fund/wettbewerbsbild.md :: KI-Auskunft am Bildschirm. Der Assistent … kennt die Buchung des Gastes, der gerade davorsteht.
[OFFEN] fund/wettbewerbsbild.md :: Fernwartung inklusive … Ein Ausfall bleibt nicht unbemerkt.
[OFFEN] fund/wettbewerbsbild.md :: Je größer das Haus, desto günstiger das Zimmer.
[OFFEN] fund/wettbewerbsbild.md :: Kleine Hotels und Apartmenthäuser
[OFFEN] fund/wettbewerbsbild.md :: Mittlere bis große Häuser
[OFFEN] fund/wettbewerbsbild.md :: Alle Preise netto, zuzüglich 19 % Umsatzsteuer. Laufzeit drei Jahre.
[OFFEN] fund/wettbewerbsbild.md :: Guestidea inklusive — PMS und Channel Manager stecken im Monatspreis
[OFFEN] fund/wettbewerbsbild.md :: Für draußen gebaut — Wetterfest, alle vier Größen. Ein Windfang ist nicht nötig.
[OFFEN] fund/wettbewerbsbild.md :: 10,1-Zoll-Industriedisplay — kein Tablet in einem Gehäuse
[OFFEN] fund/wettbewerbsbild.md :: Montage und Schulung — Aufbau vor Ort und Einweisung Ihres Teams sind Teil des Preises
[OFFEN] fund/wettbewerbsbild.md :: Anbindung über RemoteLock, vollautomatischer PIN-Versand
[OFFEN] fund/wettbewerbsbild.md :: 100+ Häuser im Einsatz. DE · AT · PL
[OFFEN] fund/wettbewerbsbild.md :: Voice Agent — nimmt Anrufe außerhalb der Bürozeiten an
[OFFEN] fund/wettbewerbsbild.md :: Having started out as a corporate venture of the Swiss SV Group in 2021, The LIKE MAGIC AG was founded in 2023.
[OFFEN] fund/wettbewerbsbild.md :: Two packages, zero surprises
[OFFEN] fund/wettbewerbsbild.md :: Starting from 350 /month
[OFFEN] fund/wettbewerbsbild.md :: Starting from 400 /month
[OFFEN] fund/wettbewerbsbild.md :: Starting from | 350 | /month
[OFFEN] fund/wettbewerbsbild.md :: A minimum monthly fee per tenant applies: €350 for Core and €400 for Platform. For smaller properties, Core is usually the right starting point.
[OFFEN] fund/wettbewerbsbild.md :: Choose annual billing and you save 10%, and that discount applies to both your per-room price and your minimum monthly fee.
[OFFEN] fund/wettbewerbsbild.md :: Booking Engine, Digital Keys, Wallet Keys and Kiosk are add-ons available on both packages, so you only pay for what your property actually uses.
[OFFEN] fund/wettbewerbsbild.md :: hotels & serviced apartment providers
[OFFEN] fund/wettbewerbsbild.md :: Digital Registration Form
[OFFEN] fund/wettbewerbsbild.md :: Hotels, Pensionen & Apartmenthäuser
[OFFEN] fund/wettbewerbsbild.md :: automatisch an die Meldebehörde übermittelt
[OFFEN] fund/wettbewerbsbild.md :: Von der Einführung bis zum laufenden Betrieb begleiten wir Sie zuverlässig und persönlich
[OFFEN] fund/wettbewerbsbild.md :: 24/7 Support direkt aus Hannover
[OFFEN] fund/wettbewerbsbild.md :: kein Marktaustritt im Store
[OFFEN] fund/wettbewerbsbild.md :: im Alt-Dossier nicht benannt
[OFFEN] fund/wettbewerbsbild.md :: Kiosk & self-service check-in
[OFFEN] fund/wettbewerbsbild.md :: 9 Anbieter, kein deutscher, keiner mit unserem Bündel
[OFFEN] fund/wettbewerbsbild.md :: Go live in days if not hours with all the apps you need to sell your rooms on your website & OTAs, send pre-& post-stay e-mails, offer contactless check-in & out as well as encode your key cards.
[OFFEN] fund/wettbewerbsbild.md :: komplementär zu uns, nicht Konkurrenz
[OFFEN] fund/wettbewerbsbild.md :: auf dem Terminal-/Vor-Ort-Pfad bietet im Store niemand eine deutsche Meldeschein-Strecke
[OFFEN] fund/wettbewerbsbild.md :: 139–799 €/M bzw. 2–6 €/Zi/M
[OFFEN] fund/wettbewerbsbild.md :: BE-A Hotel Group Solution 3
[OFFEN] fund/wettbewerbsbild.md :: automates your hotels email channel
[OFFEN] fund/wettbewerbsbild.md :: AI voice assistant for phone calls
[OFFEN] fund/wettbewerbsbild.md :: Hotelautomatisierung aus einer Hand
[OFFEN] fund/wettbewerbsbild.md :: Vier Dinge stecken nicht im Monatspreis
[OFFEN] fund/wettbewerbsbild.md :: All the services you need. Through a provider.
[OFFEN] fund/wettbewerbsbild.md :: Montage und Schulung — Aufbau vor Ort und Einweisung Ihres Teams sind Teil des Preises
[OFFEN] fund/wettbewerbsbild.md :: Von der Einführung bis zum laufenden Betrieb begleiten wir Sie zuverlässig und persönlich
[OFFEN] fund/wettbewerbsbild.md :: 24/7 Support direkt aus Hannover
[OFFEN] fund/wettbewerbsbild.md :: Hardware & Hosting als Service
[OFFEN] fund/wettbewerbsbild.md :: genau die Grenze, auf der unsere USP-Säule 2 steht
[OFFEN] fund/wettbewerbsbild.md :: genau unser Betreibermodell-Feld
[OFFEN] fund/wettbewerbsbild.md :: Straiv ist mit 18 Leuten verwundbar
[OFFEN] fund/wettbewerbsbild.md :: Hotels use voice kiosks for check-in, concierge services, and wayfinding. Guests can say Im checking in or Where is the fitness centre? and receive immediate assistance. This is especially valuable for international travellers who may not be comfortable with English text on a screen.
[OFFEN] fund/wettbewerbsbild.md :: Self-Service Kiosks at … hospitality … by using voice interaction
[OFFEN] fund/wettbewerbsbild.md :: Our on-premise kiosk solution places conversational digital humans into the real world … from airports and hotels
[OFFEN] fund/wettbewerbsbild.md :: voice-enabled kiosks offer guests access to always-available concierge services
[OFFEN] fund/wettbewerbsbild.md :: Kein Hotel-Check-in-Anbieter mit belegtem Einsatz einer Sprachbedienung am Gerät (Stand 09.08.2026; Suchraum: DACH-Hotelsoftware + englischsprachiger Kiosk-/Digital-Human-Markt).
[OFFEN] fund/wettbewerbsbild.md :: Der Automat gibt mechanische Schlüssel und Chips aus und nimmt sie zurück. An den Türen muss dafür nichts geändert werden. Alternativ schaltet er Smartlocks direkt frei, dann bekommt der Gast einen Code oder den Schlüssel aufs Handy. Beides läuft auch parallel.
[OFFEN] fund/wettbewerbsbild.md :: keyBoy ist ein automatisches Schlüsselausgabesystem für Hotels. Gäste checken rund um die Uhr flexibel ein und erhalten ihren Schlüssel kontaktlos per Code über einen Schlüsselsafe.
[OFFEN] fund/wettbewerbsbild.md :: ohne direkt in eine komplett neue Schließinfrastruktur investieren zu müssen
[OFFEN] fund/wettbewerbsbild.md :: No full hardware replacement required … compatible with leading lock brands, including Vingcard (ASSA ABLOY), dormakaba, Salto, and more.
[OFFEN] fund/wettbewerbsbild.md :: die Pension behält ihr bestehendes Schlüssel-/Transpondersystem und bekommt nur eine günstige Ausgabe-Schicht obendrauf — kein neues Schließsystem
[OFFEN] fund/wettbewerbsbild.md :: Premium 60 /Große Hotels
[OFFEN] fund/wettbewerbsbild.md :: Je größer das Haus, desto günstiger das Zimmer
[OFFEN] fund/wettbewerbsbild.md :: nicht gefunden, nicht gezielt gesucht
[OFFEN] fund/wettbewerbsbild.md :: Mitarbeiter-Angaben … nur für Kunden unseres Premium Service
[OFFEN] fund/wettbewerbsbild.md :: Uns liegen keine Informationen über den Umsatz vor.
[OFFEN] fund/wettbewerbsbild.md :: unter zwei geratenen Slugs nicht gefunden
[OFFEN] fund/wettbewerbsbild.md :: Kiosk Embedded Systems (an Acer Group Company)
[OFFEN] fund/wettbewerbsbild.md :: einfache digitale Unterschrift oder erweiterte SCA-Verfahren
[OFFEN] fund/wettbewerbsbild.md :: Straiv: 2.500+ Hotels in 29 Ländern
[OFFEN] fund/wettbewerbsbild.md :: Straivs Kiosk-Angebot läuft außerhalb des Store-Listings
[OFFEN] fund/wettbewerbsbild.md :: Kiosk & self-service check-in
[OFFEN] fund/wettbewerbsbild.md :: Kiosk-Feld im Store: 9 Anbieter, kein deutscher
[OFFEN] fund/wettbewerbsbild.md :: Auf dem Terminal-Pfad bietet im Store niemand eine deutsche Meldeschein-Strecke
[OFFEN] fund/wettbewerbsbild.md :: Voice am Gerät bietet niemand
[OFFEN] fund/wettbewerbsbild.md :: Finanzierungsmöglichkeiten
[OFFEN] fund/wettbewerbsbild.md :: mehr als 50 % des Gesamtumsatzes
[OFFEN] fund/wettbewerbsbild.md :: In begründeten Fällen kann die Bewilligungsbehörde … eine befristete Ausnahmegenehmigung erteilen
[OFFEN] fund/wettbewerbsbild.md :: through our Certified Partners
[OFFEN] fund/wettbewerbsbild.md :: Hotel-Operations, Prozessoptimierung und Guest Journey … Remote-Lösungen für das Hotelmanagement
[OFFEN] fund/wettbewerbsbild.md :: Die führende Guest-App für Hotels
[OFFEN] fund/wettbewerbsbild.md :: Arbeitskreises ITK und Digitalisierung
[OFFEN] fund/wettbewerbsbild.md :: kein Wettbewerber in der Self-Check-in-/Meldeschein-/Zutritts-Technik
[OFFEN] fund/wettbewerbsbild.md :: bestätigt die MKT-R3-Messung
[OFFEN] fund/wettbewerbsbild.md :: fälschlich für BERECHTIGT
[OFFEN] fund/wettbewerbsbild.md :: MKT-FUND, `fund/wettbewerbsbild.md`
[OFFEN] fund/wettbewerbsbild.md :: ob neu: nicht feststellbar
[OFFEN] fund/wettbewerbsbild.md :: Teil A inhaltlich unverändert
[OFFEN] fund/wettbewerbsbild.md :: Wer baut dieselbe Technik?
[OFFEN] fund/wettbewerbsbild.md :: Wer verkauft demselben Hotelier dieselbe Leistung?
[OFFEN] fund/wettbewerbsbild.md :: und wurde nicht benötigt
[OFFEN] fund/wettbewerbsbild.md :: Verbünde werden überwiegend von unseren Leistungs-Wettbewerbern geführt
[OFFEN] fund/wettbewerbsbild.md :: CRM (Smart Host, Additive)
[OFFEN] fund/wettbewerbsbild.md :: vor der Vergabe neuer Kurz-IDs die Kurzzeichen der Nachbardokumente greppen
[OFFEN] fund/wettbewerbsbild.md :: im geprüften Suchraum nicht gefunden
[OFFEN] fund/wettbewerbsbild.md :: die kennen auch Hoteliers
[OFFEN] fund/wettbewerbsbild.md :: zuständig für alles ist, was nicht Digitalisierung/KI/Automation ist
[OFFEN] fund/wettbewerbsbild.md :: ausschließlich außerhalb DACH
[OFFEN] fund/wettbewerbsbild.md :: Dasselbe gilt sinngemäß für Everlast
[OFFEN] fund/wettbewerbsbild.md :: Wettbewerber und Kanal zugleich
[OFFEN] fund/wettbewerbsbild.md :: Everlast KI-Agentur Kickstart Pro
[OFFEN] fund/wettbewerbsbild.md :: inhabergeführte Hotels mit 40–70 Mitarbeitern, Projektvolumen 10–40 T€
[OFFEN] fund/wettbewerbsbild.md :: Einführung von Buchungsmaschinen & PMS Systemen
[OFFEN] fund/wettbewerbsbild.md :: Ist-Analyse aller Abteilungen, Direktbuchungs-/Vertriebsoptimierung
[OFFEN] fund/wettbewerbsbild.md :: Buchungsstrecke/Website-Distribution
[OFFEN] fund/wettbewerbsbild.md :: Hotelberatung und Hotelvertrieb für Privathotels
[OFFEN] fund/wettbewerbsbild.md :: Hotel Online-Marketing
[OFFEN] fund/wettbewerbsbild.md :: Optimierung Ihres Hotelvertriebs und Online-Marketings
[OFFEN] fund/wettbewerbsbild.md :: Ich analysiere die Ist-Situation, entwickle mit Ihnen die passende Vertriebsstrategie
[OFFEN] fund/wettbewerbsbild.md :: fast alle sind Wettbewerber
[OFFEN] fund/wettbewerbsbild.md :: System-Audit & IST-Analyse
[OFFEN] fund/wettbewerbsbild.md :: Anforderungsanalyse & Empfehlung
[OFFEN] fund/wettbewerbsbild.md :: Ausschreibung & Anbietervergleich
[OFFEN] fund/wettbewerbsbild.md :: Implementierungsbegleitung & Training
[OFFEN] fund/wettbewerbsbild.md :: Wir beraten neutral, ohne Provision, ohne Produktbindung
[OFFEN] fund/wettbewerbsbild.md :: Wir erhalten keine Provision von Systemanbietern.
[OFFEN] fund/wettbewerbsbild.md :: Hotelmarketing-Beratung … ab etwa 1.500 Euro monatlich für ein begleitendes Retainer-Modell mit wöchentlicher Abstimmung, monatlichem Besuch und laufender Koordination
[OFFEN] fund/wettbewerbsbild.md :: ab 3 Sterne und ca. 1 Mio. Euro Jahresumsatz … bis zu Hotelketten
[OFFEN] fund/wettbewerbsbild.md :: Mit neuen Schnittstellen zum PMS ändern wir das Spiel: Wir pushen die echten Verfügbarkeiten, Zimmerpreise und Raten Ihres Hotels direkt und sicher in die führenden KI-Plattformen
[OFFEN] fund/wettbewerbsbild.md :: eine geschützte und moderne Verbindung über das Model Context Protocol (MCP)
[OFFEN] fund/wettbewerbsbild.md :: Ihre tagesaktuellen Raten und freien Zimmer direkt aus Ihrer Buchungsmaschine
[OFFEN] fund/wettbewerbsbild.md :: Technische Verknüpfung der Hotel IBE
[OFFEN] fund/wettbewerbsbild.md :: Einführung und Weiterentwicklung von CRM-und Loyalty-Prozessen
[OFFEN] fund/wettbewerbsbild.md :: Wir helfen Privathotels, mehr Direktbuchungen zu generieren, unabhängiger von OTAs zu werden
[OFFEN] fund/wettbewerbsbild.md :: Privathotels, Ferienhotels, Boutiquehotels, Wellnesshotels und Landhotels
[OFFEN] fund/wettbewerbsbild.md :: betreuen nur maximal 5 Hotels zeitgleich
[OFFEN] fund/wettbewerbsbild.md :: Einführung von Buchungsmaschinen & PMS Systemen
[OFFEN] fund/wettbewerbsbild.md :: Wir arbeiten mit Mews, OnePageBooking und HubSpot
[OFFEN] fund/wettbewerbsbild.md :: Seit 2022 … bereits über 8.000 Direktbuchungen
[OFFEN] fund/wettbewerbsbild.md :: Software, Marketing, Consulting
[OFFEN] fund/wettbewerbsbild.md :: Keine Überschneidung mit unserem Produkt
[OFFEN] fund/wettbewerbsbild.md :: Mit der Privacy App erspart ihr euch den Datenschutz-Papierkram beim Check-in, die Einwilligung holt ihr euch einfach digital ein.
[OFFEN] fund/wettbewerbsbild.md :: Online-Zahlungsaufforderung für Check-out vor der Abreise
[OFFEN] fund/wettbewerbsbild.md :: nahtloser PMS-& Kassensystem-Integration
[OFFEN] fund/wettbewerbsbild.md :: nativ an eure Buchungsstrecke an, um Preise und Verfügbarkeiten in Echtzeit darzustellen
[OFFEN] fund/wettbewerbsbild.md :: Agentic Revenue Management System
[OFFEN] fund/wettbewerbsbild.md :: Property Management Systems oder Channel Manager
[OFFEN] fund/wettbewerbsbild.md :: Sofern nichts anderes vereinbart, gilt ein Stundensatz in Höhe von 115,00 €, zuzüglich Nebenkosten und MwSt., vereinbart
[OFFEN] fund/wettbewerbsbild.md :: in Einheiten von je 15 Minuten und aufgerundet
[OFFEN] fund/wettbewerbsbild.md :: ~70 Partner in sechs Kategorien
[OFFEN] fund/wettbewerbsbild.md :: Zahlungsanbieter Schnittstellen
[OFFEN] fund/wettbewerbsbild.md :: through our Certified Partners
[OFFEN] fund/wettbewerbsbild.md :: ~70 Partner in sechs Kategorien
[OFFEN] fund/wettbewerbsbild.md :: Storno-& Buchungsbedingungen
[OFFEN] fund/wettbewerbsbild.md :: ~70 Partner in sechs Kategorien
[OFFEN] fund/wettbewerbsbild.md :: Gemeinsam mit der … Consulting-Firma Kohl & Partner hat Brandnamic die Leitung und Verwaltung von zwei Kooperationsgruppen inne: Belvita Leading Wellnesshotels Südtirol und Familienhotels Südtirol
[OFFEN] fund/wettbewerbsbild.md :: ab etwa 1.500 Euro monatlich
[OFFEN] fund/wettbewerbsbild.md :: 3–6 % des Umsatzes für Vertrieb und Marketing … in der Ferienhotellerie
[OFFEN] fund/wettbewerbsbild.md :: 10 € zurück pro investiertem Euro
[OFFEN] fund/wettbewerbsbild.md :: Erfahrungswerte, nicht … garantierte Ergebnisse
[OFFEN] fund/wettbewerbsbild.md :: speziell für größere 4-und 5-Sterne-Hotels
[OFFEN] fund/wettbewerbsbild.md :: eigene Software/unsere eigene/selbst entwickelt
[OFFEN] fund/wettbewerbsbild.md :: Digitalisierungsberatung für Hotels … von PMS über Kassensysteme bis zur digitalen Gästereise
[OFFEN] fund/wettbewerbsbild.md :: kleine Hotels, Pensionen und Gasthöfe
[OFFEN] fund/wettbewerbsbild.md :: Auswahl, Integration, Setup und laufende Steuerung der Systeme
[OFFEN] fund/wettbewerbsbild.md :: Das ist ein schwaches Negativ: Danach wurde in dieser Runde nicht gezielt gesucht; es ist ein Nebenbefund der Seitenlektüre.
[OFFEN] fund/wettbewerbsbild.md :: Für das Technik-Segment stimmt das weiterhin
[OFFEN] fund/wettbewerbsbild.md :: Digitaler Checkin-und Checkout-Prozess (… NFC Zimmerschlüssel oder Zahlenschlösser …)
[OFFEN] fund/wettbewerbsbild.md :: BAFA-Beratung Hotel & Gastronomie: 50-70 % Förderung sichern
[OFFEN] fund/wettbewerbsbild.md :: … Eingetragen in die KfW-Beraterdatenbank, bei der BAFA für Unternehmensberatungen (ID: 130986) Akkreditiert vom Bundesministerium für Arbeit und Soziales für systemisches Coaching im Programm INQA (Initiative neue Qualität der Arbeit) …
[OFFEN] fund/wettbewerbsbild.md :: Zertifizierter Sachverständiger für das Hotel-, Tourismus-& Gaststättengewerbe (DGuSV, Hospitality Consulting);
[OFFEN] fund/wettbewerbsbild.md :: ; Zulassung als Unternehmensberater in Österreich gemäß § 373a Abs. 5 Z1 GewO, Hospitality Consulting
[OFFEN] fund/wettbewerbsbild.md :: Systemisches Coaching (INQA)
[OFFEN] fund/wettbewerbsbild.md :: Akkreditiert vom Bundesministerium für Arbeit und Soziales als systemischer Coach im Programm INQA (IC2336101) mit 80 % Zuschuss.
[OFFEN] fund/wettbewerbsbild.md :: Initiative neue Qualität der Arbeit
[OFFEN] fund/wettbewerbsbild.md :: 11.600 Zeichen und 35 Blockelemente
[OFFEN] fund/wettbewerbsbild.md :: für systemisches Coaching
[OFFEN] fund/wettbewerbsbild.md :: Digitalisierung & Prozesse: Systemlandschaft, Schnittstellen, Standards, Prozesszeiten, operative Qualität.
[OFFEN] fund/wettbewerbsbild.md :: max. 3.500 Euro (max. 5 Beratungstage) /50 % oder 80 %
[OFFEN] fund/wettbewerbsbild.md :: max. 14.400 Euro (12 Beratungstage) /80 %
[OFFEN] fund/wettbewerbsbild.md :: Förderzuschüssen bis zu 80 %
[OFFEN] fund/wettbewerbsbild.md :: Die Beratung darf erst nach Erhalt des BAFA-Informationsschreibens beginnen; als Beginn gilt bereits der Abschluss eines Beratungsvertrags.
[OFFEN] fund/wettbewerbsbild.md :: Antragsteller ist immer das Unternehmen des Kunden, nicht heyPensio
[OFFEN] fund/wettbewerbsbild.md :: inhabergeführte Privathotels, Boutique-Hotels und kleine Hotelgruppen in Deutschland, Österreich und der Schweiz – typischerweise zwischen 30 und 300 Zimmern
[OFFEN] fund/wettbewerbsbild.md :: Bei weniger als 30 Zimmern fehlt die Projektgrundlage. Ab 300 Zimmern beginnen Konzernstrukturen
[OFFEN] fund/wettbewerbsbild.md :: Prozessoptimierung, Hotelcontrolling nach USALI-Standard, Digitalisierung und Systemintegration
[OFFEN] fund/wettbewerbsbild.md :: Mein Ansatz: Beratung, die vor Ort stattfindet
[OFFEN] fund/wettbewerbsbild.md :: Ich arbeite allein. Das ist eine Entscheidung, keine Verlegenheit.
[OFFEN] fund/wettbewerbsbild.md :: Wer mich beauftragt, arbeitet mit mir, nicht mit einem Büro.
[OFFEN] fund/wettbewerbsbild.md :: Was hier steht, steht nicht auf der Hauptseite.
[OFFEN] fund/wettbewerbsbild.md :: Ich arbeite allein – bewusst.
[OFFEN] fund/wettbewerbsbild.md :: Ich berate herstellerunabhängig. Ich empfehle keine Systeme, an deren Verkauf ich verdiene
[OFFEN] fund/wettbewerbsbild.md :: familiengeführte Betriebe, Gastgeber und Erlebnisanbieter
[OFFEN] fund/wettbewerbsbild.md :: Digitalisierungs-beratung für Hotels – seit über 30 Jahren …
[OFFEN] fund/wettbewerbsbild.md :: … Ihr zuverlässiger Partner
[OFFEN] fund/wettbewerbsbild.md :: … wir kooperieren mit führenden Spezialisten wie ASA Hotelsoftware, Guestline, HotelNetSolutions, Straiv, Matrix POS, Kiosk.eu, Brandnamic, moreProfit und vielen weiteren, die in ihren Bereichen unschlagbar sind.
[OFFEN] fund/wettbewerbsbild.md :: Unterstützung Softwareauswahl · Begleitung Softwareimplementierung · Vertragsverhandlungen
[OFFEN] fund/wettbewerbsbild.md :: laufend (Monatsspalte)
[OFFEN] fund/wettbewerbsbild.md :: ob sie neu sind, ist nicht feststellbar — der Bestand führt sie nur nicht
[OFFEN] fund/wettbewerbsbild.md :: Erstellung neuer Website-Texte
[OFFEN] fund/wettbewerbsbild.md :: 7 Wertproben je 1 Treffer
[OFFEN] fund/wettbewerbsbild.md :: Cookie-Banner /10€ /10€ /10€ /Anfrageformular /Integration Buchungsmaschine /10€
[OFFEN] fund/wettbewerbsbild.md :: Römerweg 9, 78564 Reichenbach
[OFFEN] fund/wettbewerbsbild.md :: melevo Sebastian Mauch, Römerweg 9, 78564 Reichenbach
[OFFEN] fund/wettbewerbsbild.md :: Hauptstraße 6, 78564 Reichenbach
[OFFEN] fund/wettbewerbsbild.md :: Anschriften für Außendokumente über MEHRERE unabhängige Stellen belegen
[OFFEN] fund/wettbewerbsbild.md :: endet nicht mit einem 40-seitigen Bericht, der ungelesen im Regal steht
[OFFEN] fund/wettbewerbsbild.md :: keine Präsentationen die in der Schublade landen
[OFFEN] fund/wettbewerbsbild.md :: Beraten die TH-Experts unabhängig von Softwareanbietern?
[OFFEN] fund/wettbewerbsbild.md :: kein Anbieter nennt Zahlen
[OFFEN] fund/wettbewerbsbild.md :: Es handelt sich hier um reale annäherungsweise Preisbeispiele – für ein individuelles Angebot kontaktiert uns.
[OFFEN] fund/wettbewerbsbild.md :: Inhabergeführtes Hotel mit 20 Zimmern, 3 Sterne
[OFFEN] fund/wettbewerbsbild.md :: einer einmaligen Einrichtungsgebühr und einer monatlichen Nutzungspauschale
[OFFEN] fund/wettbewerbsbild.md :: im geprüften Seitenbestand nicht gefunden
[OFFEN] fund/wettbewerbsbild.md :: Das #1 Hotel-CRM in DACH\*
[OFFEN] fund/wettbewerbsbild.md :: ihre Daten in Stammgäste zu verwandeln
[OFFEN] fund/wettbewerbsbild.md :: Updates und Weiterentwicklungen eurer Module? Inklusive. Euer persönlicher Betreuer? Auch inklusive.
[OFFEN] fund/wettbewerbsbild.md :: Wenn du möchtest, dass Smart Host dir Handgriffe in Smart Host selber abnimmt, haben wir dafür das Service Plus Paket.
[OFFEN] fund/wettbewerbsbild.md :: Eure erste Kampagne erstellen wir gemeinsam
[OFFEN] fund/wettbewerbsbild.md :: Es fehlt eine wichtige Integration? Sprechen Sie mit unserem Team.
[OFFEN] fund/wettbewerbsbild.md :: auch ohne eigene RMS-Software
[OFFEN] fund/wettbewerbsbild.md :: dediziertem Revenue Manager
[OFFEN] fund/wettbewerbsbild.md :: Monatspauschalen ab EUR /CHF 879 plus einmalige Setup-Gebühr von EUR /CHF 1.000
[OFFEN] fund/wettbewerbsbild.md :: Mindestlaufzeit 3 Monate
[OFFEN] fund/wettbewerbsbild.md :: und initialen Kosten für Analyse
[OFFEN] fund/wettbewerbsbild.md :: Preise in CHF pro Monat exkl. MWST und initialen Kosten für Analyse
[OFFEN] fund/wettbewerbsbild.md :: Preis: von 792 € bis 990 € zzgl. 19% MwSt.
[OFFEN] fund/wettbewerbsbild.md :: von 842 € bis 990 € zzgl. MwSt.
[OFFEN] fund/wettbewerbsbild.md :: von 792 € bis 990 € zzgl. MwSt.
[OFFEN] fund/wettbewerbsbild.md :: Mit Jahreskosten ab 60.000 € – zuzüglich Benefits, Schulungen und Systemlizenzen – ist das eine erhebliche Investition für privat geführte Hotels.
[OFFEN] fund/wettbewerbsbild.md :: kostet eine interne Revenue-Manager-Stelle inklusive Lohnnebenkosten und Tools EUR /CHF 90.000–130.000 pro Jahr.
[OFFEN] fund/wettbewerbsbild.md :: sie weichen um mehr als das Doppelte voneinander ab
[OFFEN] fund/wettbewerbsbild.md :: Inhouse vs. RevenueRise
[OFFEN] fund/wettbewerbsbild.md :: betreuter Betrieb statt eigenes Personal
[OFFEN] fund/wettbewerbsbild.md :: Expertenpartnerschaft … dedizierter Revenue Manager
[OFFEN] fund/wettbewerbsbild.md :: persönlicher Betreuer … inklusive
[OFFEN] fund/wettbewerbsbild.md :: Während andere Tools verkaufen, arbeiten bei uns echte Senior Revenue Management Experten
[OFFEN] fund/wettbewerbsbild.md :: ab etwa 15 Zimmern
[OFFEN] fund/wettbewerbsbild.md :: Dienstleistungs-und Beratungsunternehmen für die Privat-Hotellerie und Gastronomie, gegründet 1996
[OFFEN] fund/wettbewerbsbild.md :: Kennzahlen der Deutschen Privathotellerie
[OFFEN] fund/wettbewerbsbild.md :: Revenue-& Profit-Management für Boutique-und inhabergeführte Hotels
[OFFEN] fund/wettbewerbsbild.md :: wir beraten neutral ohne Provisionsinteresse
[OFFEN] fund/wettbewerbsbild.md :: Brandnamic muss in der Nachfassrunde treffen
[OFFEN] fund/wettbewerbsbild.md :: Revenue Management muss im Alt-Dossier treffen
[OFFEN] fund/wettbewerbsbild.md :: Everlast muss in `unternehmensaufbau-heypensio.md` treffen
[OFFEN] fund/wettbewerbsbild.md :: DIRS21 muss im website-Ordner treffen
[OFFEN] fund/wettbewerbsbild.md :: verkauft der Anbieter das überhaupt als Komponente?
[OFFEN] fund/wettbewerbsbild.md :: ### Brandnamic GmbH (Brixen/Meran/München) — kein Wettbewerber, möglicher Kanal Hotel-Marketing-und Softwarehaus für die Hotellerie: Branding, Websites, SEO/SEA, Revenue Management, Newsletter-und Gutschein-Apps, Beratung. Kein Self-Check-in, kein Kiosk, keine Meldescheine. Einordnung: Keine Überschneidung mit unserem Produkt. Zwei denkbare Rollen: (a) Vertriebs-/Partnerkanal — sie sitzen bei genau unserer Zielgruppe (inhabergeführte Häuser im DACH-Raum) und ein Self-Check-in ergänzt ihr Portfolio, statt es anzugreifen; (b) Benchmark für die eigene Website …
[OFFEN] fund/wettbewerbsbild.md :: Keine Überschneidung mit unserem Produkt
[OFFEN] fund/wettbewerbsbild.md :: soll als betreuende Agentur abgelöst werden
[OFFEN] fund/wettbewerbsbild.md :: hat die bestehende rabes-hotel.de erstellt und hält Domain + Hosting + Mail
[OFFEN] fund/wettbewerbsbild.md :: behalten & reparieren oder ablösen?
[OFFEN] fund/wettbewerbsbild.md :: Indie-Platzhirsch — Partner ODER Rivale
[OFFEN] fund/wettbewerbsbild.md :: Reputation … Portfolio-Kandidat
[OFFEN] fund/wettbewerbsbild.md :: RMS-Partner-Modul … Aktivierung im Onboarding ohne IT-Projekt
[OFFEN] fund/wettbewerbsbild.md :: Gutscheine: INCERT (DACH-Marktführer)
[OFFEN] fund/wettbewerbsbild.md :: WETTBEWERBER, nicht Zulieferer
[OFFEN] fund/wettbewerbsbild.md :: ist Straivs Kiosk-Partner … könnte Interessenten Richtung Straiv orientieren
[OFFEN] fund/wettbewerbsbild.md :: Omitted long matching line
[OFFEN] fund/wettbewerbsbild.md :: All the services you need. Through a provider.
[OFFEN] fund/wettbewerbsbild.md :: Full operational responsibility
[OFFEN] fund/wettbewerbsbild.md :: Analysis of the hotel tech stack /Evaluation of software /Project management /Implementation /Readjustment and support
[OFFEN] fund/wettbewerbsbild.md :: This is based on the size of the properties (number of rooms) or the number of hotels for groups.
[OFFEN] fund/wettbewerbsbild.md :: Certified Mews Deployment Partner
[OFFEN] fund/wettbewerbsbild.md :: Exklusives Angebot für Mitglieder von HotellerieSuisse
[OFFEN] fund/wettbewerbsbild.md :: 360-Grad IT-Service für die Hotellerie — … Beratung zur Verbesserung Ihrer digitalen Infrastruktur und Abläufe … Umsetzung und Einführung neuer IT-Lösungen und stehen Ihnen mit unserem Support-Team während des laufenden Betriebs zur Verfügung.
[OFFEN] fund/wettbewerbsbild.md :: Training vor Ort & remote
[OFFEN] fund/wettbewerbsbild.md :: Support & Managed Services — 1st Level Support, 2nd Level Support
[OFFEN] fund/wettbewerbsbild.md :: All-in-One ist die größte Illusion der Hotelsoftware-Branche. … Die Zukunft der Hotellerie ist nicht All-in-One, Sie ist All-in-Partners.
[OFFEN] fund/wettbewerbsbild.md :: Umsetzungsbegleitung ist optional
[OFFEN] fund/wettbewerbsbild.md :: Die Umsetzungsbegleitung ist optional
[OFFEN] fund/wettbewerbsbild.md :: im geprüften Suchraum nicht gefunden
[OFFEN] fund/wettbewerbsbild.md :: Drei unabhängige Schwellen
[OFFEN] fund/wettbewerbsbild.md :: genau ein Anbieter nennt eine beidseitige Zimmergrenze …, einer eine Umsatzschwelle … Zwölf beschreiben qualitativ oder gar nicht
[OFFEN] fund/wettbewerbsbild.md :: Bei weniger als 30 Zimmern fehlt die Projektgrundlage.
[OFFEN] fund/wettbewerbsbild.md :: typischerweise 30 bis 300 Zimmer
[OFFEN] fund/wettbewerbsbild.md :: Für welche Hotelgrößen arbeiten Sie?
[OFFEN] fund/wettbewerbsbild.md :: Bei weniger als 30 Zimmern fehlt häufig die Grundlage für strukturierte Beratungsprojekte.
[OFFEN] fund/wettbewerbsbild.md :: strukturierte Beratungsprojekte
[OFFEN] fund/wettbewerbsbild.md :: Hotels ab etwa 1 Mio. Euro Jahresumsatz
[OFFEN] fund/wettbewerbsbild.md :: This is based on the size of the properties (number of rooms) or the number of hotels for groups.
[OFFEN] fund/wettbewerbsbild.md :: Eignet sich die Beratung auch für kleine Hotels und Pensionen? — Ja.
[OFFEN] fund/wettbewerbsbild.md :: Kleine Hotels, Pensionen und Gasthöfe benötigen häufig andere Funktionen und Abläufe als größere Häuser
[OFFEN] fund/wettbewerbsbild.md :: ein AI-nativer Betrieb senkt genau diesen Aufwand
[OFFEN] fund/wettbewerbsbild.md :: bestätigt die MKT-R3-Messung
[OFFEN] fund/wettbewerbsbild.md :: collaboration with implementation partners
[OFFEN] fund/wettbewerbsbild.md :: Mews Preferred Consultant
[OFFEN] fund/wettbewerbsbild.md :: Certified Deployment Partner
[OFFEN] fund/wettbewerbsbild.md :: Regions served: Germany, Switzerland, and Austria
[OFFEN] fund/wettbewerbsbild.md :: wer im DACH-Raum heute Self-Check-in/Guest-Journey einführt, verkauft in aller Regel straiv mit
[OFFEN] fund/wettbewerbsbild.md :: De-facto-Standard im Portfolio der Einführungs-Dienstleister
[OFFEN] fund/wettbewerbsbild.md :: wer im DACH-Raum Self-Check-in einführt
[OFFEN] fund/wettbewerbsbild.md :: integrierten Modulen wie … einer digitalen Guest Journey und modernstem Payment
[OFFEN] fund/wettbewerbsbild.md :: kommt im gesamten Rohbeleg-Archiv genau 1× vor
[OFFEN] fund/wettbewerbsbild.md :: Guest-Journey-Prozesse — Digitaler Checkin-und Checkout-Prozess (Online-oder Terminal-Checkin, NFC Zimmerschlüssel oder Zahlenschlösser, keine Meldescheine, …), digitaler Concierge … Gästegeräte
[OFFEN] fund/wettbewerbsbild.md :: Wir erledigen für Sie die Umsetzung Ihrer Idee aus einer Hand
[OFFEN] fund/wettbewerbsbild.md :: bis zu 80% förderfähig
[OFFEN] fund/wettbewerbsbild.md :: beim Qualitätssicherer Ellipsis
[OFFEN] fund/wettbewerbsbild.md :: sämtliche IT-Herausforderungen und Sorgen abnehmen
[OFFEN] fund/wettbewerbsbild.md :: no partners matching your search criteria
[OFFEN] fund/wettbewerbsbild.md :: Die DEHOGA Beratung steht Ihnen bundesweit zur Verfügung und bietet geförderte Konditionen in allen Bundesländern an. In Hessen und im Saarland erfolgt die Beratung in Abstimmung mit dem jeweiligen DEHOGA-Landesverband.
[OFFEN] fund/wettbewerbsbild.md :: oft bis zu 100 Prozent gefördert
[OFFEN] fund/wettbewerbsbild.md :: GEO-und SEO-Optimierung
[OFFEN] fund/wettbewerbsbild.md :: Wie werde ich bei ChatGPT, Perplexity, Gemini und Co. überhaupt gefunden?
[OFFEN] fund/wettbewerbsbild.md :: Beispielrechnung einer geförderten Beratung zur Existenzgründung
[OFFEN] fund/wettbewerbsbild.md :: Beispielrechnung einer KMU-Beratung (geförderte Kurzberatung für kleine und mittlere Unternehmen)
[OFFEN] fund/wettbewerbsbild.md :: Weitere Beratungspakete und Konditionen können auf den individuellen Bedarf zugeschnitten werden.
[OFFEN] fund/wettbewerbsbild.md :: Nettotagessatz (8 Stunden)
[OFFEN] fund/wettbewerbsbild.md :: Für eine umfassende Begleitung und Unterstützung in der Gründungsphase sind 15 Tage förderfähig
[OFFEN] fund/wettbewerbsbild.md :: die volle Maßnahme kostet den Gründer also rund 3.750 €
[OFFEN] fund/wettbewerbsbild.md :: der geförderte Eigenanteil ist zugleich eine Preisuntergrenze, die ein ungeförderter Anbieter nicht unterbietet
[OFFEN] fund/wettbewerbsbild.md :: Kostenlose Beratung in arbeitsrechtlichen Angelegenheiten
[OFFEN] fund/wettbewerbsbild.md :: Informationen über Förder-oder Investitionsmöglichkeiten
[OFFEN] fund/wettbewerbsbild.md :: Nutzungsrecht der Wortmarke DEHOGA Hamburg Partner
[OFFEN] fund/wettbewerbsbild.md :: keine Kooperationen mit direkten Marktbegleitern
[OFFEN] fund/wettbewerbsbild.md :: Es gelten ab 1. Januar 2026 folgende Monatsbeiträge
[OFFEN] fund/wettbewerbsbild.md :: alle Zeilen mit €-Zeichen im ganzen Dokument
[OFFEN] fund/wettbewerbsbild.md :: agiert bundesweit und unabhängig von einer Verbandsmitgliedschaft
[OFFEN] fund/wettbewerbsbild.md :: Die Liste erhebt keinen Anspruch auf Vollständigkeit.
[OFFEN] fund/wettbewerbsbild.md :: In diesem Sinne kann sich jedes in Frage kommende Unternehmen in die Liste aufnehmen lassen.
[OFFEN] fund/wettbewerbsbild.md :: Kontaktdaten von Designern, Inneneinrichtern, Einrichtungshäusern, Architekten, Handwerkern und anderen Dienstleistern, die Ihnen dabei behilflich sein können, die Wohlfühlatmosphäre in Beherbergungsbetrieben zu verbessern.
[OFFEN] fund/wettbewerbsbild.md :: Easy Online-Marketing für Fewos
[OFFEN] fund/wettbewerbsbild.md :: Schleswig-holsteinische Architekten/Innenarchitekten führen eine professionelle Vor-Ort-Beratung im Beherbergungsbetrieb durch. Diese Leistung wird zu einem sehr günstigen Preis (250,-Euro zuzüglich gesetzlicher Mehrwertsteuer und gegebenenfalls Fahrtkosten) im Rahmen einer Mustervereinbarung angeboten.
[OFFEN] fund/wettbewerbsbild.md :: empfehlen wir, einen Beratungsdreiklang einzusetzen, also auf einem ausführlichen dreiteiligen Konzept aus Einrichtungs-, Marketing-und betriebswirtschaftlichen Überlegungen aufzubauen.
[OFFEN] fund/wettbewerbsbild.md :: zu marktüblichen Preisen
[OFFEN] fund/wettbewerbsbild.md :: Experten für die intensive Begleitung spezieller Teilprojekte
[OFFEN] fund/wettbewerbsbild.md :: wurde bis Januar 2025 gefördert
[OFFEN] fund/wettbewerbsbild.md :: Im Rahmen von individuellen Einzelberatungen haben Sie die Chance kostenfrei mit IT-Experten in den Dialog zu treten … in der Regel jeden Dienstag
[OFFEN] fund/wettbewerbsbild.md :: Die Beratung erfolgt kostenfrei durch Mitglieder des Arbeitskreises ITK und Digitalisierung der IHK zu Lübeck.
[OFFEN] fund/wettbewerbsbild.md :: Beratungsangebot MEET THE EXPERTS des Arbeitskreises ITK & Digitalisierung
[OFFEN] fund/wettbewerbsbild.md :: Partnerprogramm, öffentliches Verzeichnis, Mitgliederkanal, Store/Ökosystem
[OFFEN] fund/wettbewerbsbild.md :: Ein strukturiertes bundesweites Angebot fehlt zur Zeit
[OFFEN] fund/wettbewerbsbild.md :: wurde zum 31.12.2019 eingestellt
[OFFEN] fund/wettbewerbsbild.md :: kostenfreie Analyse Ihrer Online Marketing Kanäle
[OFFEN] fund/wettbewerbsbild.md :: niedrigste Hürde aller geprüften Programme
[OFFEN] fund/wettbewerbsbild.md :: im den letzten drei Jahren mindesten drei Referenzprojekte mit direktem Bezug
[OFFEN] fund/wettbewerbsbild.md :: niedrigste Hürde aller geprüften Programme
[OFFEN] fund/wettbewerbsbild.md :: deren überwiegender Geschäftszweck auf die entgeltliche Unternehmensberatung (mehr als 50 % des Gesamtumsatzes) gerichtet ist
[OFFEN] fund/wettbewerbsbild.md :: zu den gewöhnlichen Betriebskosten des Unternehmens gehören wie laufende Steuerberatung, regelmäßige Rechtsberatung oder Werbung
[OFFEN] fund/wettbewerbsbild.md :: gängige Online-Marketing-Maßnahmen
[OFFEN] fund/wettbewerbsbild.md :: In begründeten Fällen kann die Bewilligungsbehörde hierzu eine auf den Zeitraum der Förderrichtlinie befristete Ausnahmegenehmigung erteilen.
[OFFEN] fund/wettbewerbsbild.md :: Das Förderprogramm go-digital ist am 31.12.2024 ausgelaufen. Es können keine Förderanträge mehr gestellt werden.
[OFFEN] fund/wettbewerbsbild.md :: Das Budget … ist vollständig ausgeschöpft
[OFFEN] fund/wettbewerbsbild.md :: Die WTSH-Programmseite verlinkt als Richtlinie weiterhin die veraltete Fassung vom 20.04.2023 … Wer nur diesem Link folgt, hält sich fälschlich für ausgeschlossen.
[OFFEN] fund/wettbewerbsbild.md :: Krankenhäuser, Kliniken, Medizinische Versorgungszentren, Sanatorien oder ähnliche Einrichtungen
[OFFEN] fund/wettbewerbsbild.md :: weder benannt noch ausgeschlossen
[OFFEN] fund/wettbewerbsbild.md :: so ist der Partnerkreis gegliedert
[OFFEN] fund/wettbewerbsbild.md :: ~70 Partner in sechs Kategorien (… Branchen-/institutionelle Partner)
[OFFEN] fund/wettbewerbsbild.md :: Zahlungsanbieter Schnittstellen
[OFFEN] fund/wettbewerbsbild.md :: straiv, flexipass, hoteldoor und iiq check — Namen, die genau auf Check-in, digitalen Schlüssel, Türzugang und Identitätsprüfung deuten.
[OFFEN] fund/wettbewerbsbild.md :: Online Check-in & Check-out
[OFFEN] fund/wettbewerbsbild.md :: vom Online Check-in über die digitale Türöffnung bis hin zum Payment
[OFFEN] fund/wettbewerbsbild.md :: FlexiPass enables Web Keys, Wallet Keys, and Mobile Keys in a single platform, with seamless integration into your existing hotel infrastructure
[OFFEN] fund/wettbewerbsbild.md :: No full hardware replacement required. FlexiPass is compatible with leading lock brands, including Vingcard (ASSA ABLOY), dormakaba, Salto, and more.
[OFFEN] fund/wettbewerbsbild.md :: Integrates with 100+ PMS platforms
[OFFEN] fund/wettbewerbsbild.md :: Hoteldoor® è il CRM utilizzato dalle principali strutture alberghiere per curare la relazione con il cliente
[OFFEN] fund/wettbewerbsbild.md :: Bewertungsmanagement für Hotellerie & Camping
[OFFEN] fund/wettbewerbsbild.md :: Check-In services are provided through our Certified Partners.
[OFFEN] fund/wettbewerbsbild.md :: Check-In services are provided through our
[OFFEN] fund/wettbewerbsbild.md :: Online Check-In · Upsell · Payments · Chat · Guest Surveys · Anything you want
[OFFEN] fund/wettbewerbsbild.md :: Più di 500 hotel in tutta Italia
[OFFEN] fund/wettbewerbsbild.md :: Network Portali Adrias Online
[OFFEN] fund/wettbewerbsbild.md :: Unabhängig von der Zimmer-oder Stellplatzanzahl – Du zahlst immer denselben fairen Preis
[OFFEN] fund/wettbewerbsbild.md :: Preisgarantie für bis zu 5 Jahre
[OFFEN] fund/wettbewerbsbild.md :: im geprüften Suchraum nicht gefunden
[OFFEN] fund/wettbewerbsbild.md :: Contact us for the full list of PMS providers!
[OFFEN] fund/wettbewerbsbild.md :: FLEXIPASS KEYLESS MOBILE ACCESS SRLS, Via Mainardo 162
[OFFEN] fund/wettbewerbsbild.md :: FLEXIPASS MOBILE ACCESS GMBH mit Sitz in I-39012 – Meran – Goethestrasse Nr. 7
[OFFEN] fund/wettbewerbsbild.md :: VISION SRL, Via Venosta 3, 39012 Merano
[OFFEN] fund/wettbewerbsbild.md :: Vorstandsvorsitzenden des AKZENT Hotels e.V.
[OFFEN] fund/wettbewerbsbild.md :: Contact us for the full list
[OFFEN] fund/wettbewerbsbild.md :: welche Verbünde gibt es im DACH-Raum?
[OFFEN] fund/wettbewerbsbild.md :: Als Hotelkooperation im Sinne dieser Beitragsordnung gelten freiwillige Zusammenschlüsse von mindestens zehn rechtlich selbständigen Hotels im Bundesgebiet unter einer gemeinsamen Marke zum Zweck der überbetrieblichen Zusammenarbeit im Marketing oder Vertrieb. Mitglieder führen den Namen der Kooperation in ihrem Hotelnamen. Eine Kooperationszentrale mit mehreren Mitarbeitern und signifikantem Budget für die Aufgaben der Hotelkooperation wird unterhalten.
[OFFEN] fund/wettbewerbsbild.md :: Unternehmen mit mehreren, mindestens aber fünf Hotels …, die eine wirtschaftliche Einheit bilden
[OFFEN] fund/wettbewerbsbild.md :: Mitglieder führen den Namen der Kooperation in ihrem Hotelnamen
[OFFEN] fund/wettbewerbsbild.md :: bemisst sich nicht nach der Zahl der zur Kooperation, sondern der jeweils … zum Verband gehörenden Hotels
[OFFEN] fund/wettbewerbsbild.md :: individuell und persönlich geführte Privat-/Familien-Hotels (mit und ohne Restaurantbetrieb)
[OFFEN] fund/wettbewerbsbild.md :: mindestens den gehobenen Standard eines 3-Sterne Hotels
[OFFEN] fund/wettbewerbsbild.md :: bekannte Hotelkooperationen
[OFFEN] fund/wettbewerbsbild.md :: Der Service kostet natürlich Geld (ab ca. 10.000 €)
[OFFEN] fund/wettbewerbsbild.md :: Reiseveranstalter, Expedienten und MICE Planer
[OFFEN] fund/wettbewerbsbild.md :: Die STRAFINGER TOURISMUSWERKSTATT ist die betreuende Agentur und hat seit der Gründung die Geschäftsführung inne
[OFFEN] fund/wettbewerbsbild.md :: ein dynamischer Verbund erfolgreicher Privathotels im deutschsprachigen Europa
[OFFEN] fund/wettbewerbsbild.md :: Seit 2004 haben sich über 60 historische Hotels und Gasthäuser in der Schweiz zur Marketing-Kooperation … zusammengeschlossen
[OFFEN] fund/wettbewerbsbild.md :: Die STRAFINGER TOURISMUSWERKSTATT ist die betreuende Agentur und hat seit der Gründung die Geschäftsführung inne
[OFFEN] fund/wettbewerbsbild.md :: verfügt über jahrzehntelange Erfahrung in der Führung von touristischen Angebotsgruppen und Hotelkooperationen
[OFFEN] fund/wettbewerbsbild.md :: Marketingberatung und -betreuung
[OFFEN] fund/wettbewerbsbild.md :: überwiegend kein neutraler Kanal
[OFFEN] fund/wettbewerbsbild.md :: Partner des AKZENT Hotels e.V.
[OFFEN] fund/wettbewerbsbild.md :: Mario Peschke — Vorstandsvorsitzender des AKZENT Hotels e.V.
[OFFEN] fund/wettbewerbsbild.md :: Der iiQ-Check ist für uns seit Jahren ein unentbehrliches Werkzeug zur konsequenten Qualitätssicherung in allen Mitgliedsbetrieben.
[OFFEN] fund/wettbewerbsbild.md :: wer für alle drei zeichnet
[OFFEN] fund/wettbewerbsbild.md :: halbjährliche Marketing-Analysen und -Optimierungen
[OFFEN] fund/wettbewerbsbild.md :: periodisch individueller Beratungstag (alle 3 Jahre)
[OFFEN] fund/wettbewerbsbild.md :: kostenfreies Qualitäts-und Bewertungsmanager-Tool
[OFFEN] fund/wettbewerbsbild.md :: aktive Beratung und Unterstützung in allen Bereichen des Marketings und Verkaufs
[OFFEN] fund/wettbewerbsbild.md :: Durchführung von anerkannten Mystery Checks im Rahmen der deutschen Hotelklassifizierung
[OFFEN] fund/wettbewerbsbild.md :: Presse-und Öffentlichkeitsarbeit
[OFFEN] fund/wettbewerbsbild.md :: kostenfreie IBE (Internet Booking Engine) für die eigene Hotelwebsite
[OFFEN] fund/wettbewerbsbild.md :: kostenfreier Channelmanager
[OFFEN] fund/wettbewerbsbild.md :: kosten-und provisionsfreie Buchungen über die Kooperationswebsite und die IBE
[OFFEN] fund/wettbewerbsbild.md :: kostenfreie Anbindung an die GDS
[OFFEN] fund/wettbewerbsbild.md :: Präsenz auf nationalen und internationalen Messen
[OFFEN] fund/wettbewerbsbild.md :: über 60 historische Hotels und Gasthäuser
[OFFEN] fund/wettbewerbsbild.md :: Keine Mitgliederzahlen außer den beiden zitierten
[OFFEN] fund/wettbewerbsbild.md :: BYTE, SELBST, `straiv.io/de/tech-partner`, 09.08.2026, wörtlich:
handel/kanal-rechtsmatrix.md: 144 von 144 offen | 0 abgebaut
[OFFEN] handel/kanal-rechtsmatrix.md :: Abweichend von Absatz 2 Nummer 2
[OFFEN] handel/kanal-rechtsmatrix.md :: hartnäckiges und unerwünschtes Ansprechen des Verbrauchers mittels Telefonanrufen, unter Verwendung eines Faxgerätes, elektronischer Post oder sonstiger für den Fernabsatz geeigneter Mittel der kommerziellen Kommunikation
[OFFEN] handel/kanal-rechtsmatrix.md :: vorherige ausdrückliche Einwilligung des Adressaten
[OFFEN] handel/kanal-rechtsmatrix.md :: zumindest mutmaßliche Einwilligung
[OFFEN] handel/kanal-rechtsmatrix.md :: vorherige ausdrückliche Einwilligung des Adressaten
[OFFEN] handel/kanal-rechtsmatrix.md :: gegenüber einem Verbraucher ohne dessen vorherige ausdrückliche Einwilligung oder gegenüber einem sonstigen Marktteilnehmer ohne dessen zumindest mutmaßliche Einwilligung
[OFFEN] handel/kanal-rechtsmatrix.md :: Der deutsche Gesetzgeber hat in der Regelung des § 7 Abs. 2 Nr. 3 UWG 2004 indes keinen Gebrauch von der ihm in Art. 13 Abs. 5 der Richtlinie 2002/58/EG eröffneten Möglichkeit gemacht, für den geschäftlichen Bereich ein niedrigeres Schutzniveau vorzusehen […]. Damit scheidet auch in diesem Bereich eine Interessenabwägung aus.
[OFFEN] handel/kanal-rechtsmatrix.md :: unser Angebot passt doch perfekt zu diesem Hotel
[OFFEN] handel/kanal-rechtsmatrix.md :: wir schreiben nur wenige, sorgfältig ausgewählte Betriebe an
[OFFEN] handel/kanal-rechtsmatrix.md :: die Mail ist kurz und höflich
[OFFEN] handel/kanal-rechtsmatrix.md :: Demgegenüber kann nach § 7 Abs. 2 Nr. 3 UWG E-Mail-Werbung nicht durch ein mutmaßliches, sondern nur durch ein ausdrückliches oder konkludentes Einverständnis gerechtfertigt werden.
[OFFEN] handel/kanal-rechtsmatrix.md :: das Schutzniveau für natürliche Personen und andere Marktteilnehmer einheitlich bestimmt
[OFFEN] handel/kanal-rechtsmatrix.md :: anders als nunmehr gemäß § 7 Abs. 2 Nr. 3 UWG 2008, der eine vorherige ausdrückliche Einwilligung erfordert
[OFFEN] handel/kanal-rechtsmatrix.md :: Die Angabe einer E-Mail-Adresse auf der Internetseite eines Unternehmens bringt zwar dessen konkludentes Einverständnis damit zum Ausdruck, Anfragen potentieller Kunden zu dem üblichen Waren-und Dienstleistungsangebot des Unternehmens unter dieser Adresse zu empfangen […].
[OFFEN] handel/kanal-rechtsmatrix.md :: potentielle Kunde, der nach dem Hotelangebot fragt.
[OFFEN] handel/kanal-rechtsmatrix.md :: gültigen Adresse …, an die der Empfänger eine Aufforderung zur Einstellung solcher Nachrichten richten kann
[OFFEN] handel/kanal-rechtsmatrix.md :: Sie sind Dienstleister? Schreiben Sie uns
[OFFEN] handel/kanal-rechtsmatrix.md :: zumindest mutmaßliche Einwilligung
[OFFEN] handel/kanal-rechtsmatrix.md :: gegenüber einem Verbraucher ohne dessen vorherige ausdrückliche Einwilligung oder gegenüber einem sonstigen Marktteilnehmer ohne dessen zumindest mutmaßliche Einwilligung
[OFFEN] handel/kanal-rechtsmatrix.md :: sonstiger Marktteilnehmer
[OFFEN] handel/kanal-rechtsmatrix.md :: jede weitere Person, die als Anbieter oder Nachfrager von Waren oder Dienstleistungen tätig ist
[OFFEN] handel/kanal-rechtsmatrix.md :: ist ein Hotel, wir verkaufen Hotel-Software
[OFFEN] handel/kanal-rechtsmatrix.md :: Der allgemeine Sachbezug mit den von dem angerufenen Unternehmen angebotenen Dienstleistungen reichte für die Annahme einer mutmaßlichen Einwilligung nicht aus. Anderenfalls wäre Telefonwerbung gegenüber Gewerbetreibenden mit seinen belästigenden und deshalb nicht generell hinnehmbaren Folgen nahezu unbeschränkt zulässig.
[OFFEN] handel/kanal-rechtsmatrix.md :: aufgrund konkreter tatsächlicher Umstände … sachliches Interesse des Anzurufenden
[OFFEN] handel/kanal-rechtsmatrix.md :: der Anzurufende erwarte einen solchen Anruf oder werde ihm jedenfalls positiv gegenüberstehen
[OFFEN] handel/kanal-rechtsmatrix.md :: ausschließlich dazu, die Erreichbarkeit für Patienten zu gewährleisten
[OFFEN] handel/kanal-rechtsmatrix.md :: sind die Wertungen des § 7 Abs. 2 Nr. 1 UWG … zu berücksichtigen
[OFFEN] handel/kanal-rechtsmatrix.md :: besagt dieser Umstand nichts darüber, ob der Durchschnittsmarktteilnehmer mit dieser Werbemethode einverstanden ist. Das Gegenteil dürfte vielmehr anzunehmen sein.
[OFFEN] handel/kanal-rechtsmatrix.md :: Die bereits bestehende Geschäftsbeziehung stellt lediglich einen Beispielsfall dar … Der persönliche Kontakt … deutet ebenso wie die bereits bestehende Geschäftsbeziehung darauf hin, dass diese Kunden gegen einen Telefonanruf nichts einzuwenden haben.
[OFFEN] handel/kanal-rechtsmatrix.md :: mit einem Telefonanruf oder unter Verwendung einer automatischen Anrufmaschine gegenüber einem Verbraucher
[OFFEN] handel/kanal-rechtsmatrix.md :: gegenüber einem Verbraucher
[OFFEN] handel/kanal-rechtsmatrix.md :: Telefonwerbung kostet bis zu 300.000 € Bußgeld
[OFFEN] handel/kanal-rechtsmatrix.md :: Werbeanrufe gegenüber Unternehmern, Gewerbetreibenden und Freiberuflern kann die Bundesnetzagentur hingegen nicht mit einem Bußgeld belegen.
[OFFEN] handel/kanal-rechtsmatrix.md :: sowohl für Werbung gegenüber Verbraucherinnen und Verbrauchern als auch für Werbung gegenüber anderen Personen
[OFFEN] handel/kanal-rechtsmatrix.md :: rufen Sie mich nächste Woche an
[OFFEN] handel/kanal-rechtsmatrix.md :: Ein die Wettbewerbswidrigkeit ausschließendes Einverständnis des Empfängers der E-Mail hat der Werbende darzulegen und gegebenenfalls zu beweisen
[OFFEN] handel/kanal-rechtsmatrix.md :: elektronische Post jede über ein öffentliches Kommunikationsnetz verschickte Text-, Sprach-, Ton-oder Bildnachricht, die im Netz oder im Endgerät des Empfängers gespeichert werden kann, bis sie von diesem abgerufen wird.
[OFFEN] handel/kanal-rechtsmatrix.md :: im Netz … gespeichert … bis sie … abgerufen wird
[OFFEN] handel/kanal-rechtsmatrix.md :: die Nachricht verlässt LinkedIn nie
[OFFEN] handel/kanal-rechtsmatrix.md :: Daher fallen unter den Begriff der elektronische Post im Sinne des § 7 Abs. 2 Nr. 3 UWG a.F. neben E-Mails, SMS und MMS auch sämtliche Nachrichten über Social Media-Dienste wie Xing, Facebook, LinkedIn oder WhatsApp
[OFFEN] handel/kanal-rechtsmatrix.md :: Auch hier werden Nachrichten asynchron übermittelt und auf dem Server des jeweiligen Portalbetreibers … gespeichert, bis dieser sie abruft.
[OFFEN] handel/kanal-rechtsmatrix.md :: Die Berufung der Klägerin … wird zurückgewiesen
[OFFEN] handel/kanal-rechtsmatrix.md :: Eine solche Einwilligung ist in der etwaigen Akzeptanz von Klauselwerken der Plattformbetreiber nicht zu sehen
[OFFEN] handel/kanal-rechtsmatrix.md :: wer ein LinkedIn-Profil anlegt, willigt in Nachrichten ein
[OFFEN] handel/kanal-rechtsmatrix.md :: der angerufenen Verbraucher
[OFFEN] handel/kanal-rechtsmatrix.md :: Damit fehlt es an einer in informierter Weise erklärten Einwilligung, die im Rahmen des § 7 Abs. 2 Nr. 2 UWG wegen des zu seiner Auslegung heranzuziehenden Art. 4 Nr. 11 DSGVO vorliegen muss.
[OFFEN] handel/kanal-rechtsmatrix.md :: ohne Weiteres keine ausdrückliche Einwilligung in E-Mail-Werbung abgeleitet werden
[OFFEN] handel/kanal-rechtsmatrix.md :: jede Information, die zwischen einer endlichen Zahl von Beteiligten über einen öffentlich zugänglichen elektronischen Kommunikationsdienst ausgetauscht oder weitergeleitet wird
[OFFEN] handel/kanal-rechtsmatrix.md :: gültigen Adresse …, an die der Empfänger eine Aufforderung zur Einstellung solcher Nachrichten richten kann
[OFFEN] handel/kanal-rechtsmatrix.md :: Do not use our invitation feature to send promotional messages to people you dont know or to otherwise spam people.
[OFFEN] handel/kanal-rechtsmatrix.md :: Effective on November 3, 2025
[OFFEN] handel/kanal-rechtsmatrix.md :: bots or other unauthorized automated methods to access the Services, add or download contacts, send or redirect messages
[OFFEN] handel/kanal-rechtsmatrix.md :: im Zusammenhang mit dem Verkauf … von dem Kunden
[OFFEN] handel/kanal-rechtsmatrix.md :: schicken Sie mir Unterlagen
[OFFEN] handel/kanal-rechtsmatrix.md :: muss der Verantwortliche nachweisen können
[OFFEN] handel/kanal-rechtsmatrix.md :: Das ist keine Werbung, das sind nur die angefragten Unterlagen
[OFFEN] handel/kanal-rechtsmatrix.md :: jede Äußerung bei der Ausübung eines Handels, Gewerbes, Handwerks oder freien Berufs mit dem Ziel, den Absatz von Waren oder die Erbringung von Dienstleistungen … zu fördern
[OFFEN] handel/kanal-rechtsmatrix.md :: so teilt der Verantwortliche der betroffenen Person zum Zeitpunkt der Erhebung dieser Daten Folgendes mit
[OFFEN] handel/kanal-rechtsmatrix.md :: eine Werbung unter Verwendung elektronischer Post
[OFFEN] handel/kanal-rechtsmatrix.md :: im Zusammenhang mit dem Verkauf … von dem Kunden
[OFFEN] handel/kanal-rechtsmatrix.md :: Ein Verkauf kam unstreitig nicht zustande. Die Bestellung wurde storniert.
[OFFEN] handel/kanal-rechtsmatrix.md :: für eigene ähnliche Waren oder Dienstleistungen
[OFFEN] handel/kanal-rechtsmatrix.md :: dies gilt jedoch nur für dasselbe Unternehmen
[OFFEN] handel/kanal-rechtsmatrix.md :: bei Erhebung der Adresse und bei jeder Verwendung
[OFFEN] handel/kanal-rechtsmatrix.md :: setzt jedoch voraus, dass bereits bei der Erhebung der E-Mail-Adresse des Kunden (und bei jeder weiteren Verwendung) ein klarer und deutlicher Hinweis darauf erfolgt ist, dass er der Verwendung jederzeit widersprechen kann
[OFFEN] handel/kanal-rechtsmatrix.md :: auch bei Telefonwerbung, anders als bei E-Mail-Werbung, für sich allein keine Beweiserleichterung zugunsten des Werbenden begründen.
[OFFEN] handel/kanal-rechtsmatrix.md :: in der Kopf-und in der Betreffzeile weder … verschleiert oder verheimlicht werden
[OFFEN] handel/kanal-rechtsmatrix.md :: so einfach wie die Erteilung
[OFFEN] handel/kanal-rechtsmatrix.md :: die leicht erkennbar und unmittelbar erreichbar sein müssen, ständig verfügbar zu halten
[OFFEN] handel/kanal-rechtsmatrix.md :: die Speicherung von Informationen in der Endeinrichtung des Endnutzers oder den Zugriff auf Informationen, die bereits in der Endeinrichtung gespeichert sind
[OFFEN] handel/kanal-rechtsmatrix.md :: so arbeitet dieser nur mit Auftragsverarbeitern, die hinreichend Garantien dafür bieten
[OFFEN] handel/kanal-rechtsmatrix.md :: Data Privacy Framework List
[OFFEN] handel/kanal-rechtsmatrix.md :: welche Produkte oder Dienstleistungen welcher Unternehmen
[OFFEN] handel/kanal-rechtsmatrix.md :: Eine vorformulierte Einwilligungserklärung ist an den §§ 305 ff. BGB zu messen.
[OFFEN] handel/kanal-rechtsmatrix.md :: Stillschweigen, bereits angekreuzte Kästchen oder Untätigkeit … sollten daher keine Einwilligung darstellen
[OFFEN] handel/kanal-rechtsmatrix.md :: über einen öffentlich zugänglichen elektronischen Kommunikationsdienst ausgetauscht oder weitergeleitet wird
[OFFEN] handel/kanal-rechtsmatrix.md :: hartnäckiges und unerwünschtes Ansprechen … mittels Telefonanrufen, unter Verwendung eines Faxgerätes, elektronischer Post oder sonstiger für den Fernabsatz geeigneter Mittel
[OFFEN] handel/kanal-rechtsmatrix.md :: Die im Anhang dieses Gesetzes aufgeführten geschäftlichen Handlungen gegenüber Verbrauchern sind stets unzulässig.
[OFFEN] handel/kanal-rechtsmatrix.md :: § 7 Absatz 1 Satz 1 in Verbindung mit Absatz 2 Nummer 1 oder 2
[OFFEN] handel/kanal-rechtsmatrix.md :: Eine geschäftliche Handlung, durch die ein Marktteilnehmer in unzumutbarer Weise belästigt wird, ist unzulässig. Dies gilt insbesondere für Werbung, obwohl erkennbar ist, dass der angesprochene Marktteilnehmer diese Werbung nicht wünscht.
[OFFEN] handel/kanal-rechtsmatrix.md :: Der Grad der Belästigung ist bei einer Werbung per Post jedoch gering. Diese Belästigung kann gegenüber den Interessen der werbenden Wirtschaft an einer gezielten Individualwerbung … regelmäßig vernachlässigt werden … Dies gilt jedenfalls dann, wenn der Werbecharakter — wie im Streitfall — nach dem Öffnen des Briefs sofort und unmissverständlich erkennbar ist.
[OFFEN] handel/kanal-rechtsmatrix.md :: Bei Briefwerbungen ist indes in der Regel von einer mutmaßlichen Einwilligung auszugehen. Unerwünscht ist diese erst dann, wenn der Werbende davon ausgehen muss, dass der Empfänger damit nicht einverstanden ist
[OFFEN] handel/kanal-rechtsmatrix.md :: formularmäßig aufgemachtes Angebotsschreiben
[OFFEN] handel/kanal-rechtsmatrix.md :: Empfehlung eines Bekannten
[OFFEN] handel/kanal-rechtsmatrix.md :: Die gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden geschäftlichen Handlungen sind gemäß § 3a UWG unlauter
[OFFEN] handel/kanal-rechtsmatrix.md :: Positivkontrolle Werbung = 35 im selben Lauf
[OFFEN] handel/kanal-rechtsmatrix.md :: es versäumt [hat], den Adressaten des Schreibens spätestens mit diesem Schreiben (wie es gemäß Art. 14 Abs. 3 Buchst. b DSGVO geboten war) die … Informationen … zur Verfügung zu stellen. Ferner hat sie es unterlassen, den Adressaten … spätestens mit diesem Schreiben ausdrücklich in einer verständlichen und von anderen Informationen getrennten Form darauf hinzuweisen, dass er gemäß Art. 21 Abs. 2 DSGVO das Recht hat, jederzeit Widerspruch … einzulegen.
[OFFEN] handel/kanal-rechtsmatrix.md :: gilt nur, wenn die Briefwerbung spätestens nach dem Öffnen des Briefs sofort und unmissverständlich erkennbar ist
[OFFEN] handel/kanal-rechtsmatrix.md :: Verbraucher zum Zwecke des Providerwechsels … postalisch anzuschreiben
[OFFEN] handel/kanal-rechtsmatrix.md :: Stufe 1 (berechtigtes Interesse)
[OFFEN] handel/kanal-rechtsmatrix.md :: Darüber hinaus liegen die Voraussetzungen von Art. 6 Abs. 1 Unterabs. 1 Buchstabe f DSGVO deshalb nicht vor, weil das von der Beklagten mit der Werbung verfolgte Interesse nicht rechtmäßig ist. Die von der Beklagten betriebene Werbung ist gemäß § 3 Abs. 1 UWG unzulässig, weil sie gemäß §§ 5 Abs. 1 und Abs. 2, 5a Abs. 1 bis Abs. 3 UWG unlauter ist.
[OFFEN] handel/kanal-rechtsmatrix.md :: OLG Stuttgart, Beschluss vom 2. Februar 2024 -2 U 63/22, GRUR-RS 2024, 3802
[OFFEN] handel/kanal-rechtsmatrix.md :: dass an die Zulässigkeit einer zum Zwecke der Direktwerbung vorgenommenen Datenverarbeitung weniger strenge Anforderungen zu stellen sind
[OFFEN] handel/kanal-rechtsmatrix.md :: die Neukundengewinnung mittels Briefpostwerbung […] grundsätzlich gerechtfertigt ist, es sei denn, die betroffene Person hat widersprochen
[OFFEN] handel/kanal-rechtsmatrix.md :: Direktwerbung wurde durch Erwägungsgrund 47 […] als berechtigtes Interesse […] klargestellt
[OFFEN] handel/kanal-rechtsmatrix.md :: die datenschutzrechtlichen Vorgaben eingehalten und die Betroffenen gemäß Artt. 13,14, 21 DSGVO in der Werbesendung transparent informiert werden
[OFFEN] handel/kanal-rechtsmatrix.md :: Sollten … dahin zu verstehen sein
[OFFEN] handel/kanal-rechtsmatrix.md :: Briefwerbung ist großzügig zu behandeln
[OFFEN] handel/kanal-rechtsmatrix.md :: ⭐ Und der praktische Gleichlauf beider Pole: Selbst die großzügigere Ansicht verlangt die transparente Information nach Artt. 13, 14, 21 DSGVO in der Werbesendung (Rn. 83) — an unseren Bau-Pflichten ändert der Streitstand nichts.
[OFFEN] handel/kanal-rechtsmatrix.md :: für das Lettershopverfahren
[OFFEN] handel/kanal-rechtsmatrix.md :: die Lücke ist aus `handel/kanal-rechtsmatrix.md` C4 geerbt — dort steht dieselbe Aufzählung ohne die Empfänger-Angabe
[OFFEN] handel/kanal-rechtsmatrix.md :: auf allen Geschäftsbriefen gleichviel welcher Form, die an einen bestimmten Empfänger gerichtet werden
[OFFEN] handel/kanal-rechtsmatrix.md :: Hotel Seeblick GmbH, Seestr. 1
[OFFEN] handel/kanal-rechtsmatrix.md :: Hotel Seeblick, Inh. Maria Berger e.K.
[OFFEN] handel/kanal-rechtsmatrix.md :: der Waren oder Dienstleistungen in nicht unerheblichem Maße und nicht nur gelegentlich vertreibt oder nachfragt
[OFFEN] handel/kanal-rechtsmatrix.md :: lediglich einen Kollektivschutz … Einen Individualschutz von Verbrauchern und sonstigen Marktteilnehmern sehen sie nicht vor.
[OFFEN] handel/kanal-rechtsmatrix.md :: Die ohne wirksame Einwilligung an eine geschäftliche E-Mail-Adresse versandte Werbe-E-Mail stellt einen Eingriff in das Recht am eingerichteten und ausgeübten Gewerbebetrieb dar.
[OFFEN] handel/kanal-rechtsmatrix.md :: Hier kommen die Maßstäbe des § 7 UWG zur Vermeidung von Wertungswidersprüchen auch im Rahmen der Prüfung eines Eingriffs in den eingerichteten und ausgeübten Gewerbebetrieb gemäß § 823 Abs. 1 BGB zur Anwendung
[OFFEN] handel/kanal-rechtsmatrix.md :: auf Grund dieses Gesetzes
[OFFEN] handel/kanal-rechtsmatrix.md :: § 3a UWG und DSGVO-Abmahnbarkeit — Streitstand nicht abschließend erhoben
[OFFEN] handel/kanal-rechtsmatrix.md :: Unter solchen Umständen kann die Lauterkeit einer datenschutzrechtliche Vorschriften verletzenden Geschäftspraxis vom Grundsatz her gemäß § 3a UWG oder gemäß § 3 Abs. 2 UWG beurteilt werden.
[OFFEN] handel/kanal-rechtsmatrix.md :: Regelmäßig wird … anhand von § 3a UWG geprüft, ob ein geschäftliches Handeln, das gegen datenschutzrechtliche Vorschriften verstößt, unlauter ist
[OFFEN] handel/kanal-rechtsmatrix.md :: Arzneimittelbestelldaten III/II
[OFFEN] handel/kanal-rechtsmatrix.md :: wie das etwa bei allein das Verhältnis zwischen Mittbewerbern betreffenden Regelungen der Fall ist
[OFFEN] handel/kanal-rechtsmatrix.md :: In Bezug auf den … gerügten Verstoß kann auf Art. 3 Abs. 4 UGPRL zurückgegriffen werden … was im Grundsatz die Beurteilung einer auch Verbraucher erreichenden Geschäftspraxis anhand von § 3a UWG ermöglicht
[OFFEN] handel/kanal-rechtsmatrix.md :: die im deutschen Recht für Mitbewerber des Verletzers und Verbraucherschutzverbände vorgesehene Möglichkeit, datenschutzrechtliche Verstöße als unlauterere Geschäftspraktik … zu ahnden, gebilligt
[OFFEN] handel/kanal-rechtsmatrix.md :: führt … keiner der beiden Wege dazu, dass im Sinne eines Automatismus jeder Verstoß gegen die DSGVO eine unlautere Handlung darstellt
[OFFEN] handel/kanal-rechtsmatrix.md :: Die gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden geschäftlichen Handlungen sind gemäß § 3a UWG unlauter.
[OFFEN] handel/kanal-rechtsmatrix.md :: Rechtskraft nicht geprüft
[OFFEN] handel/kanal-rechtsmatrix.md :: Verstößen nach § 13 Absatz 4
[OFFEN] handel/kanal-rechtsmatrix.md :: gegenüber einem Verbraucher
[OFFEN] handel/kanal-rechtsmatrix.md :: Diese Verordnung gilt nicht für die Verarbeitung personenbezogener Daten juristischer Personen und insbesondere als juristische Person gegründeter Unternehmen, einschließlich Name, Rechtsform oder Kontaktdaten der juristischen Person.
[OFFEN] handel/kanal-rechtsmatrix.md :: Hotel Seeblick GmbH … info@hotel-seeblick.de
[OFFEN] handel/kanal-rechtsmatrix.md :: Hotel Seeblick, Inh. Maria Berger e.K.
[OFFEN] handel/kanal-rechtsmatrix.md :: Frau Berger, Direktorin, m.berger@…
[OFFEN] handel/kanal-rechtsmatrix.md :: bei juristischen Personen zusätzlich die Rechtsform, den Vertretungsberechtigten
[OFFEN] handel/kanal-rechtsmatrix.md :: die berechtigten Interessen anderer Teilnehmer als natürlicher Personen … ausreichend geschützt werden
[OFFEN] handel/kanal-rechtsmatrix.md :: vorvertragliche Maßnahmen
[OFFEN] handel/kanal-rechtsmatrix.md :: auf Anfrage der betroffenen Person
[OFFEN] handel/kanal-rechtsmatrix.md :: die Zwecke der Direktwerbung im Allgemeinen als Beispiel für berechtigte Interessen anführt
[OFFEN] handel/kanal-rechtsmatrix.md :: in zumutbarer Weise ebenso wirksam mit anderen Mitteln erreicht werden kann, die weniger stark eingreifen
[OFFEN] handel/kanal-rechtsmatrix.md :: nicht durch die … Pflichtinformationen (Art. 13, 14 DS-GVO) erweitert werden
[OFFEN] handel/kanal-rechtsmatrix.md :: Keine Verwendung der Daten aus dem Impressum
[OFFEN] handel/kanal-rechtsmatrix.md :: Nicht zulässig ist hingegen das Auslesen der Daten aus einem Online-Impressum zum Zweck der werblichen Nutzung. Zwar sind diese Daten allgemein zugänglich, sie werden jedoch nicht freiwillig, sondern aufgrund der gesetzlichen Verpflichtung zur Anbieterkennzeichnung … veröffentlicht. Mangels Freiwilligkeit der Veröffentlichung führt die Interessenabwägung … regelmäßig dazu, dass die werbliche Nutzung so erhobener Daten unzulässig ist.
[OFFEN] handel/kanal-rechtsmatrix.md :: Article 6(1)(f) GDPR may not be relied on if the direct marketing at issue is unlawful.
[OFFEN] handel/kanal-rechtsmatrix.md :: Ihre öffentlich zugängliche Unternehmenswebsite
[OFFEN] handel/kanal-rechtsmatrix.md :: Mitgliederverzeichnis des Verbands X
[OFFEN] handel/kanal-rechtsmatrix.md :: Widerspricht die betroffene Person der Verarbeitung für Zwecke der Direktwerbung, so werden die personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.
[OFFEN] handel/kanal-rechtsmatrix.md :: es sei denn, er kann zwingende schutzwürdige Gründe … nachweisen
[OFFEN] handel/kanal-rechtsmatrix.md :: spätestens zum Zeitpunkt der ersten Kommunikation … ausdrücklich … in einer verständlichen und von anderen Informationen getrennten Form
[OFFEN] handel/kanal-rechtsmatrix.md :: Widerspruch gegen Werbung
[OFFEN] handel/kanal-rechtsmatrix.md :: zugleich die dokumentierte Löschfrist fürs Verarbeitungsverzeichnis
[OFFEN] handel/kanal-rechtsmatrix.md :: Mindestumfang, der zusätzlich ins Anschreiben gehört
[OFFEN] handel/kanal-rechtsmatrix.md :: in der Rechtsmatrix nirgends geführt
handel/angebotsarchitektur.md: 139 von 139 offen | 0 abgebaut
[OFFEN] handel/angebotsarchitektur.md :: Beträge kommen hier nicht vor — mit Absicht
[OFFEN] handel/angebotsarchitektur.md :: bislang nicht übergeben
[OFFEN] handel/angebotsarchitektur.md :: die Zentrale-Zulieferung (bisher nicht übergeben) wird dringlicher
[OFFEN] handel/angebotsarchitektur.md :: Nur diese beiden Formulierungen unten sind überholt
[OFFEN] handel/angebotsarchitektur.md :: P-B als Zielbild, fix nach E-7
[OFFEN] handel/angebotsarchitektur.md :: Ohne Deckel, Prüfposten nach E-6
[OFFEN] handel/angebotsarchitektur.md :: Habe Kayhan hierzu gefragt und warte auf seine Antwort.
[OFFEN] handel/angebotsarchitektur.md :: auch sachen die geplant aber noch in der Entwicklung sind dürfen angeboten werden.
[OFFEN] handel/angebotsarchitektur.md :: aber noch in der Entwicklung
[OFFEN] handel/angebotsarchitektur.md :: erkläre mir das bitte näher
[OFFEN] handel/angebotsarchitektur.md :: vollständig protokolliert
[OFFEN] handel/angebotsarchitektur.md :: Je Betreiber (Recommended)
[OFFEN] handel/angebotsarchitektur.md :: Ab dem 2. Haus (Recommended)
[OFFEN] handel/angebotsarchitektur.md :: Fester Prozentsatz (Recommended)
[OFFEN] handel/angebotsarchitektur.md :: der User-Wortlaut ist nicht archiviert
[OFFEN] handel/angebotsarchitektur.md :: intern, unter Firmierungs-Vorbehalt, ohne Außenversand
[OFFEN] handel/angebotsarchitektur.md :: auch sachen die geplant aber noch in der Entwicklung sind dürfen angeboten werden
[OFFEN] handel/angebotsarchitektur.md :: Tippfehler des Originals sind belassen
[OFFEN] handel/angebotsarchitektur.md :: Wer ist eigentlich Vertragspartner?
[OFFEN] handel/angebotsarchitektur.md :: Kippt eine dieser Fragen, kippt die Grundlage
[OFFEN] handel/angebotsarchitektur.md :: K04-/Architektur-Vorbehalt
[OFFEN] handel/angebotsarchitektur.md :: ob eine FAQ im Streitfall bindet, ist > offen
[OFFEN] handel/angebotsarchitektur.md :: Rechenbasis W-B/A3 … unter Z-6-Vorbehalt
[OFFEN] handel/angebotsarchitektur.md :: Mehrhaus-Rabatt auf die Grundgebühr S1
[OFFEN] handel/angebotsarchitektur.md :: ungeklärt und folgenreich
[OFFEN] handel/angebotsarchitektur.md :: Gilt er je Betreiber oder je Firmierung?
[OFFEN] handel/angebotsarchitektur.md :: bevor eine Höhe festgelegt wird
[OFFEN] handel/angebotsarchitektur.md :: EIN Apaleo-Account für alle Standorte
[OFFEN] handel/angebotsarchitektur.md :: ein Inhaber, je Haus eine eigene Objektgesellschaft
[OFFEN] handel/angebotsarchitektur.md :: Ihre Häuser zählen zusammen, egal wie Ihre Gesellschaften geschnitten sind
[OFFEN] handel/angebotsarchitektur.md :: Ihre drei Häuser sind drei Firmen — der Rabatt gilt nicht.
[OFFEN] handel/angebotsarchitektur.md :: die einzige, unter der der Rabatt seinen … Zweck erfüllt
[OFFEN] handel/angebotsarchitektur.md :: Wann gelten mehrere Häuser verschiedener Firmierungen als EIN Betreiber (Gesellschafter-Identität? Familienverbund? faktische Geschäftsführung?) — der Rabatt braucht eine missbrauchsfeste, prüfbare Klammer.
[OFFEN] handel/angebotsarchitektur.md :: 📮 Nachtrag 4 … Entscheide-Protokoll 2 — S4 + AA-1…AA-8
[OFFEN] handel/angebotsarchitektur.md :: Konzept vorhanden, nicht gebaut
[OFFEN] handel/angebotsarchitektur.md :: Leistungen ohne Träger bekommen in Kundentexten keine Präsens-Zusage
[OFFEN] handel/angebotsarchitektur.md :: geparkt /geplant (je Quelle)
[OFFEN] handel/angebotsarchitektur.md :: nicht paketierbar, solange geparkt
[OFFEN] handel/angebotsarchitektur.md :: Startgebühr verstärkt /Monatsgebühr geringer
[OFFEN] handel/angebotsarchitektur.md :: ich brauche X nicht — wird es billiger?
[OFFEN] handel/angebotsarchitektur.md :: gästenahe Module je Zimmer, Grundleistungen je Haus
[OFFEN] handel/angebotsarchitektur.md :: warum ist X erst im Top-Paket?
[OFFEN] handel/angebotsarchitektur.md :: welches der drei passt zu Ihnen?
[OFFEN] handel/angebotsarchitektur.md :: die Darstellung des Durchreichungsblocks hängt an dieser Antwort
[OFFEN] handel/angebotsarchitektur.md :: die einzige Option, die … fortschreibt
[OFFEN] handel/angebotsarchitektur.md :: Zielbild, endgültig nach E-7
[OFFEN] handel/angebotsarchitektur.md :: P-B als Zielbild, aber erst nach E-7; bis dahin keine Festlegung
[OFFEN] handel/angebotsarchitektur.md :: Auch GEPLANTE /in Entwicklung befindliche Module dürfen angeboten werden.
[OFFEN] handel/angebotsarchitektur.md :: auch Sachen, die geplant, aber noch in der Entwicklung sind, dürfen angeboten werden.
[OFFEN] handel/angebotsarchitektur.md :: in Entwicklung befindlich
[OFFEN] handel/angebotsarchitektur.md :: geplant, aber noch in der Entwicklung
[OFFEN] handel/angebotsarchitektur.md :: GEPLANTE /in Entwicklung befindliche
[OFFEN] handel/angebotsarchitektur.md :: geparkt /geplant (je Quelle)
[OFFEN] handel/angebotsarchitektur.md :: auch GEPLANTE … dürfen angeboten werden
[OFFEN] handel/angebotsarchitektur.md :: gehört dem User vorgelegt (kein Träger außerhalb)
[OFFEN] handel/angebotsarchitektur.md :: User hat Kayhan gefragt, Antwort steht aus.
[OFFEN] handel/angebotsarchitektur.md :: Alle vier Punkte unten sind Struktur-Entscheide
[OFFEN] handel/angebotsarchitektur.md :: Der Rabatt wirkt auf die Grundgebühr S1
[OFFEN] handel/angebotsarchitektur.md :: KEINER legt eine Höhe fest
[OFFEN] handel/angebotsarchitektur.md :: die offenen Fragen als Optionen
[OFFEN] handel/angebotsarchitektur.md :: erstes Haus voll, jedes weitere pauschal reduziert
[OFFEN] handel/angebotsarchitektur.md :: IST eine solche Preisänderung, sobald sie den ersten Bestandskunden trifft
[OFFEN] handel/angebotsarchitektur.md :: *Z-4 liegt bei der > Zentrale/StB und ist nicht übergeben*
[OFFEN] handel/angebotsarchitektur.md :: nachrangig — > nicht erledigt, aber ohne Auslöser
[OFFEN] handel/angebotsarchitektur.md :: *Der November-Anker (erster > zahlender Kunde) ist damit zugleich die Frist dieses > Fensters*
[OFFEN] handel/angebotsarchitektur.md :: Ausdrücklich mitentschieden ist das Wechsel-FENSTER
[OFFEN] handel/angebotsarchitektur.md :: ④ — der Entscheid sagt es für die Startgebühr nicht ausdrücklich
[OFFEN] handel/angebotsarchitektur.md :: ja ist die richtige Wahl, wenn der Mehrhaus-Abschluss das knappere Gut ist als die Liquidität — das ist eine unternehmerische Abwägung, keine Beleglage
[OFFEN] handel/angebotsarchitektur.md :: im ersten Jahr Startgebühr verstärkt
[OFFEN] handel/angebotsarchitektur.md :: 📮 Nachtrag 4 … Entscheide-Protokoll 2 — S4 + AA-1…AA-8
[OFFEN] handel/angebotsarchitektur.md :: …, Schulung, Übergabedoku
[OFFEN] handel/angebotsarchitektur.md :: wir betreiben und eskalieren
[OFFEN] handel/angebotsarchitektur.md :: Solange Z-6 offen ist, ist die Kernleistung Workflow-Betrieb nicht in dem Sinn übergabefähig, den E-3 erzählt
[OFFEN] handel/angebotsarchitektur.md :: Ein Angebot darf erst dann mit der Übergabe-Erzählung verkaufen, wenn Z-6/K04 geklärt sind
[OFFEN] handel/angebotsarchitektur.md :: wenn K04/Z-5 geklärt sind
[OFFEN] handel/angebotsarchitektur.md :: der > Kunde bekommt die Lizenzbedingungen nachweislich mit
[OFFEN] handel/angebotsarchitektur.md :: sobald die Firmierung steht
[OFFEN] handel/angebotsarchitektur.md :: ist nicht an F-7 > gebunden
[OFFEN] handel/angebotsarchitektur.md :: umsetzbar, nicht blockierend
[OFFEN] handel/angebotsarchitektur.md :: Die drei Auflagen, unter denen A3 trägt gilt
[OFFEN] handel/angebotsarchitektur.md :: unter drei Gestaltungsauflagen
[OFFEN] handel/angebotsarchitektur.md :: Die Klausel begründet eine positive Handlungspflicht, nicht nur ein Unterlassen; sie ist die einzige Auflage dieses Katalogs, die etwas zu TUN verlangt
[OFFEN] handel/angebotsarchitektur.md :: AU-2 ist die einzige, die laufende Arbeit macht
[OFFEN] handel/angebotsarchitektur.md :: Sie gilt unter drei Gestaltungsauflagen (alle Stufe E, jede an eine zitierte Klausel gebunden)
[OFFEN] handel/angebotsarchitektur.md :: Belegstufe des Rohbelegs
[OFFEN] handel/angebotsarchitektur.md :: Der Kunde ist tatsächlich Lizenznehmer — die Instanz läuft auf einem Vertrag/Konto, das ihm zurechenbar ist, und er kann sie behalten, wenn die Zusammenarbeit endet. Ein Eigentum nur im Marketingtext trägt nicht.
[OFFEN] handel/angebotsarchitektur.md :: Das Entgelt ist als Dienstleistungsentgelt ausgewiesen, nicht als Zugangs-/Nutzungsgebühr für n8n. Infrastruktur zum Selbstkostenpreis durchgereicht (so ohnehin E-3), Servicegebühr getrennt — und in Angebot, Vertrag und Rechnung auch so benannt.
[OFFEN] handel/angebotsarchitektur.md :: Hosting n8n and charging people money to access it
[OFFEN] handel/angebotsarchitektur.md :: Kein White-Labeling, keine entfernten Hinweise. n8n bleibt als n8n sichtbar, wo der Kunde es sieht.
[OFFEN] handel/angebotsarchitektur.md :: Der Kunde bekommt die Lizenzbedingungen nachweislich mit. Bei jeder Einrichtung einer Kunden-Instanz werden `LICENSE.md` und `LICENSE_EE.md` übergeben und die Übergabe im Onboarding-Protokoll vermerkt.
[OFFEN] handel/angebotsarchitektur.md :: You must ensure that anyone who gets a copy of any part of the software from you also gets a copy of these terms. If you modify the software, you must include in any modified copies of the software a prominent notice stating that you have modified the software.
[OFFEN] handel/angebotsarchitektur.md :: Ein Eigentum nur im Marketingtext trägt nicht.
[OFFEN] handel/angebotsarchitektur.md :: the individual or entity agreeing to these terms
[OFFEN] handel/angebotsarchitektur.md :: anything you do with the software requiring your license
[OFFEN] handel/angebotsarchitektur.md :: Wer die Software nutzt, ist you
[OFFEN] handel/angebotsarchitektur.md :: ist der Kunde nicht Lizenznehmer und AU-1 fällt aus
[OFFEN] handel/angebotsarchitektur.md :: Kein Rebranding der n8n-Oberfläche, kein Entfernen von Hinweisen, kein heyPensio-Automationsstudio-Etikett auf dem n8n-Editor
[OFFEN] handel/angebotsarchitektur.md :: You may not alter, remove, or obscure any licensing, copyright, or other notices of the licensor in the software. Any use of the licensors trademarks is subject to applicable law.
[OFFEN] handel/angebotsarchitektur.md :: der Kunde bekommt die Lizenzbedingungen nachweislich mit — ein Schritt im Onboarding-Teil jedes Pakets
[OFFEN] handel/angebotsarchitektur.md :: die Übergabe im Onboarding-Protokoll vermerkt
[OFFEN] handel/angebotsarchitektur.md :: Bei jeder Einrichtung einer Kunden-Instanz
[OFFEN] handel/angebotsarchitektur.md :: Betriebsregel AU-4 festhalten … Vermerk ins Onboarding-Protokoll
[OFFEN] handel/angebotsarchitektur.md :: führt das Paket den Schritt?
[OFFEN] handel/angebotsarchitektur.md :: steht die Auflage irgendwo im Dokument?
[OFFEN] handel/angebotsarchitektur.md :: ON-L in die S4-Sphäre, WP-AU2 ohne eigene Position
[OFFEN] handel/angebotsarchitektur.md :: verstößt gegen die Auflage
[OFFEN] handel/angebotsarchitektur.md :: die einzige Pflicht, die den KUNDEN trifft
[OFFEN] handel/angebotsarchitektur.md :: Es gibt genau EINE Kundenpflicht
[OFFEN] handel/angebotsarchitektur.md :: Der Kunde — und wir beim Aufsetzen — dürfen licensing, copyright, or other notices nicht entfernen oder verdecken. Kein Rebranding der n8n-Oberfläche, kein Entfernen von Hinweisen … Zwei Auflagen, die in einem Übergabemodell leicht untergehen
[OFFEN] handel/angebotsarchitektur.md :: einzige, die nach der Übergabe fortwirkt
[OFFEN] handel/angebotsarchitektur.md :: einzige, deren Verletzung wir nicht selbst verhindern können
[OFFEN] handel/angebotsarchitektur.md :: Gäste lösen über Terminal/WebUI Workflows aus, die wir gebaut haben; sie bauen nichts.
[OFFEN] handel/angebotsarchitektur.md :: Auch unter A3 ändert sich das nicht — dann besitzt der Kunde die Instanz, aber die Gäste sehen weiterhin kein n8n.
[OFFEN] handel/angebotsarchitektur.md :: ⚠️ Und das bleibt so, solange der Kunde n8n nicht seinerseits seinen Gästen öffnet. Das ist keine hypothetische Grenze, sondern die Betriebsregel O-2 (§ 7).
[OFFEN] handel/angebotsarchitektur.md :: a separate commercial agreement
[OFFEN] handel/angebotsarchitektur.md :: a separate commercial agreement
[OFFEN] handel/angebotsarchitektur.md :: Der Kunde — und wir beim Aufsetzen — dürfen licensing, copyright, or other notices nicht entfernen oder verdecken
[OFFEN] handel/angebotsarchitektur.md :: Nicht Teil dieses Dokuments
[OFFEN] handel/angebotsarchitektur.md :: fällig ist sie aber genau hier: bevor ein Kunden-Angebot mit A3-Architektur hinausgeht
[OFFEN] handel/angebotsarchitektur.md :: Was diese Liste NICHT entscheidet
[OFFEN] handel/angebotsarchitektur.md :: ein Angebot mit A3-Architektur geht hinaus
[OFFEN] handel/angebotsarchitektur.md :: Das ist eine Feststellung des Bestands, keine neue Sperre dieser Session
[OFFEN] handel/angebotsarchitektur.md :: dieses Dokument führte bisher keinen Schritt Angebot geht hinaus. Die Kette unten ist dieser Schritt
[OFFEN] handel/angebotsarchitektur.md :: Angebot mit A3-Architektur geht hinaus
[OFFEN] handel/angebotsarchitektur.md :: If you > use the software in violation of these terms, such use is not > licensed, and your license will automatically terminate. If the > licensor provides you with a notice of your violation, and you cease > all violation of this license no later than 30 days after you receive > that notice, your license will be reinstated retroactively. However, > if you violate these terms after such reinstatement, any additional > violation of these terms will cause your license to terminate > automatically and permanently.
[OFFEN] handel/angebotsarchitektur.md :: nicht, den Preisentscheid bis zur Anbieterantwort anzuhalten
[OFFEN] handel/angebotsarchitektur.md :: deckt nur die *Lizenz*-Folge. Bereicherungs-, Schadensersatz-oder Vertragsstrafenfragen regelt die Klausel nicht, und sie sagt nichts über Ansprüche Dritter oder über den Kundenvertrag. Wer daraus kein Risiko liest, liest zu viel.
[OFFEN] handel/angebotsarchitektur.md :: automatically and permanently
[OFFEN] handel/angebotsarchitektur.md :: für einen laufenden Kundenbetrieb existenziell
[OFFEN] handel/angebotsarchitektur.md :: Der Widerspruch, der den Restpunkt trägt
[OFFEN] handel/angebotsarchitektur.md :: Der Gewährleistungsausschluss der Lizenz deckt UNSEREN Dienstleistungsvertrag nicht … Verfügbarkeits-und Fehlerbehebungszusagen sollten nicht weiter reichen als das, was ein Upstream ohne Gewährleistung ermöglicht.
[OFFEN] handel/angebotsarchitektur.md :: einzige Bedingung, die nach der Übergabe fortwirkt /deren Verletzung wir nicht verhindern können
[OFFEN] handel/angebotsarchitektur.md :: kein Punkt wurde still umgeschrieben
[OFFEN] handel/angebotsarchitektur.md :: Träger des Aufrufs: E-6-Rücklauf
[OFFEN] handel/angebotsarchitektur.md :: Haus 2 billiger als Haus 1?
[OFFEN] handel/angebotsarchitektur.md :: Sammelzeile bleibt geschlossen
[OFFEN] handel/angebotsarchitektur.md :: Blöcke je Objekt getrennt
[OFFEN] handel/angebotsarchitektur.md :: bislang nicht übergeben
[OFFEN] handel/angebotsarchitektur.md :: NEU 13.08., MKT-R12-Postkorb

--- R16-Aufnahmebestand der zwei neuen Zieldateien ---
Offen: 43 von 43 | seit Baseline/Einbezug abgebaut: 0
akquise/sperrdatei-struktur.md: 19 von 19 offen | 0 abgebaut
[OFFEN] akquise/sperrdatei-struktur.md :: *Dieses Dokument ist eine eigene Recherche zur betrieblichen Orientierung. Es ist KEINE Rechtsberatung*
[OFFEN] akquise/sperrdatei-struktur.md :: Setzung dieser Session, kein Quellenzitat
[OFFEN] akquise/sperrdatei-struktur.md :: Die Sperrdatei ist eine eigene, von der Zielkundenliste getrennte Datei, die auch dann bestehen bleibt, wenn ein Listeneintrag gelöscht wird. Sie enthält nur, was zum Sperren nötig ist (Firma, Anschrift, ggf. Kanal-Kennung, Datum und Weg des Widerspruchs) — sie ist keine Zweitliste.
[OFFEN] akquise/sperrdatei-struktur.md :: Die Sperrdatei ist von allen Fristen ausgenommen
[OFFEN] akquise/sperrdatei-struktur.md :: Rechtsgrundlage der Aufbewahrung — bereits belegt, hier nur zitiert
[OFFEN] akquise/sperrdatei-struktur.md :: einen abweichenden Wert mit ausdrücklicher Erklärung des Betriebs
[OFFEN] akquise/sperrdatei-struktur.md :: bitte nicht mehr anschreiben
[OFFEN] akquise/sperrdatei-struktur.md :: Ob das Prüfergebnis als eigenes Protokollfeld geführt wird, ist Umsetzungsfrage beim ersten Wellenbau.
[OFFEN] akquise/sperrdatei-struktur.md :: unabhängig vom Eingangsweg
[OFFEN] akquise/sperrdatei-struktur.md :: Umsetzung unverzüglich — eine laufende Kampagne ist keine Ausrede, und die Monatsfrist des Art. 12 Abs. 3 DSGVO gilt hier nicht
[OFFEN] akquise/sperrdatei-struktur.md :: Vor jedem Versand und vor jedem Druckauftrag (D2 Pflicht 2 /R-A7.4). Der Abgleich wird protokolliert (Datum, Welle, Zahl der aussortierten Einträge) — ein Abgleich ohne Protokoll ist später nicht belegbar.
[OFFEN] akquise/sperrdatei-struktur.md :: er darf hier nicht erneut zum allgemeinen Fall zurückdriften
[OFFEN] akquise/sperrdatei-struktur.md :: Im Zweifel ist zu klären, was gewollt ist.
[OFFEN] akquise/sperrdatei-struktur.md :: ist parallel weiter fristgebunden (Regelwerk § 7.4: Antwort binnen eines Monats, Verlängerung nur, wenn sie innerhalb des ersten Monats mitgeteilt und begründet wird)
[OFFEN] akquise/sperrdatei-struktur.md :: für den laufenden Bestand
[OFFEN] akquise/sperrdatei-struktur.md :: die tragfähige Erstform, bis ein Werkzeug steht
[OFFEN] akquise/sperrdatei-struktur.md :: ⚠️ Ablageregel: Die Liste selbst gehört nicht ins Repo
[OFFEN] akquise/sperrdatei-struktur.md :: dort steht sie einmal
[OFFEN] akquise/sperrdatei-struktur.md :: Das Skript prüft nach O-12 nur Akquiseplan und Regelwerk
akquise/wellenprotokoll-vorlage.md: 24 von 24 offen | 0 abgebaut
[OFFEN] akquise/wellenprotokoll-vorlage.md :: Nachvollziehbarkeit der Auswahl ohne gespeicherte Auswahlmerkmale
[OFFEN] akquise/wellenprotokoll-vorlage.md :: gespeichert wird nur die Tatsache der Aufnahme
[OFFEN] akquise/wellenprotokoll-vorlage.md :: `WP-02` < Auswahldatum
[OFFEN] akquise/wellenprotokoll-vorlage.md :: auch dann, wenn er umsortiert
[OFFEN] akquise/wellenprotokoll-vorlage.md :: die Einstufung kein Personenbezug je Datensatz belegbar sein
[OFFEN] akquise/wellenprotokoll-vorlage.md :: Vor jedem Versand und vor jedem Druckauftrag … Der Abgleich wird protokolliert (Datum, Welle, Zahl der aussortierten Einträge) — ein Abgleich ohne Protokoll ist später nicht belegbar.
[OFFEN] akquise/wellenprotokoll-vorlage.md :: bei Widerspruch gewinnt das Regelwerk
[OFFEN] akquise/wellenprotokoll-vorlage.md :: ein Fehler liefert ein unmögliches Ergebnis, nicht ein knapp danebenliegendes
[OFFEN] akquise/wellenprotokoll-vorlage.md :: ≥ Zahl der Druckaufträge + 1
[OFFEN] akquise/wellenprotokoll-vorlage.md :: vor jedem Versand und vor jedem Druckauftrag
[OFFEN] akquise/wellenprotokoll-vorlage.md :: Kein Versand ohne vorherigen Sperrdatei-Abgleich
[OFFEN] akquise/wellenprotokoll-vorlage.md :: Der Art.-14-Beileger und der Widerspruchs-Kasten bekommen eine Versionsnummer; je Welle wird protokolliert, welche Version an welche Adressen ging — revisionsfeste Dokumentation der tatsächlich genutzten Texte mit Versionsnummer
[OFFEN] akquise/wellenprotokoll-vorlage.md :: von anderen Informationen getrennte Form
[OFFEN] akquise/wellenprotokoll-vorlage.md :: Es wird nicht auf Vorrat gelistet. Eine Welle wird nur angelegt, wenn ihr Versand innerhalb von vier Wochen nach dem frühesten F-09 der Welle vorgesehen ist
[OFFEN] akquise/wellenprotokoll-vorlage.md :: Ein dritter Weg — abwarten — existiert nicht
[OFFEN] akquise/wellenprotokoll-vorlage.md :: Wenn die Menge je Welle 300 Stück überschreitet (Skalenfaktor P-7 /R-K1)
[OFFEN] akquise/wellenprotokoll-vorlage.md :: ein Trigger ohne Schwellenwert nicht bedienbar ist
[OFFEN] akquise/wellenprotokoll-vorlage.md :: mit Anmerkung freigegeben
[OFFEN] akquise/wellenprotokoll-vorlage.md :: Ob das Prüfergebnis als eigenes Protokollfeld geführt wird, ist Umsetzungsfrage beim ersten Wellenbau.
[OFFEN] akquise/wellenprotokoll-vorlage.md :: und genau der Impressums-Anteil ist das Maß des getragenen Risikos
[OFFEN] akquise/wellenprotokoll-vorlage.md :: Der Anteil dieser Fallgruppe … er ist das Maß des getragenen Risikos
[OFFEN] akquise/wellenprotokoll-vorlage.md :: vor jedem Versand und vor jedem Druckauftrag
[OFFEN] akquise/wellenprotokoll-vorlage.md :: keine neuen Druckaufträge nach einem Widerspruch
[OFFEN] akquise/wellenprotokoll-vorlage.md :: Die Liste selbst gehört nicht ins Repo

Baseline-Eintraege gelistet: 906 / 906
```

## Rohausgabe E — ZIEL-Kandidaten

```text
=== ZIEL-Kandidaten (generischer .md-Scan) ===
Suchraum: akquise/, handel/, fund/, beleg/
ZIEL: 8 / 8 Dateien
akquise/selbsttest-zitate.md: 18 Zitate
beleg/baseline-messplan.md: 13 Zitate
beleg/vorlagen/interviewleitfaden-baseline.md: 39 Zitate
beleg/vorlagen/referenzvereinbarung-pilotobjekte.md: 17 Zitate
beleg/vorlagen/tagesblatt-firzlaffs.md: 5 Zitate
beleg/vorlagen/tagesblatt-hostel-boninstrasse.md: 1 Zitate
fund/erhebung/brandnamic-partner-vollerhebung.md: 73 Zitate
fund/erhebung/entwurf-anfrage-dehoga-sh.md: 2 Zitate
fund/erhebung/entwurf-anfrage-ihk-sh.md: 1 Zitate
fund/erhebung/regionalstatistik-groessenklassen.md: 18 Zitate
fund/erhebung/strang2-strukturdaten.md: 19 Zitate
fund/erhebung/verbund-vollerhebung.md: 13 Zitate
fund/persona-validierungsplan.md: 14 Zitate
fund/positionierungspapier.md: 30 Zitate
handel/anwalts-briefing-2026-08.md: 114 Zitate
handel/entwurf-anfrage-ifb-hamburg.md: 12 Zitate
handel/entwurf-anfrage-wtsh.md: 14 Zitate
handel/foerderarchitektur-beraterrolle.md: 97 Zitate
handel/preisliste-vorlaeufig.md: 79 Zitate
handel/preismodell-optionen.md: 139 Zitate
Kandidaten: 20 Dateien
Zitate in Kandidaten: 718
```

## Rohausgabe F — fehlende Pool-Quellen, Datei für Datei

```text
=== FEHLENDE POOL-QUELLEN: MECHANISCHER FUNDSTELLEN-SCAN ===
Kandidaten gelesen: 926
Quellendateien mit mindestens einem Treffer: 201
handel/anwalts-briefing-2026-08.md | Treffer 32 | akquise/interessenabwaegung-o8.md=15 | handel/kanal-rechtsmatrix.md=17
akquise/listenbau-regelwerk.md | Treffer 22 | akquise/interessenabwaegung-o8.md=10 | handel/kanal-rechtsmatrix.md=12
sensibel/rohbelege-R15-A/uwg-gii.txt | Treffer 22 | handel/kanal-rechtsmatrix.md=22
sensibel/rohbelege-R09-A/dsk-oh-werbung-2022_zweitkanal-bfdi.txt | Treffer 21 | akquise/interessenabwaegung-o8.md=17 | handel/kanal-rechtsmatrix.md=4
sensibel/rohbelege-R09-A/dsk-oh-werbung-2022.txt | Treffer 21 | akquise/interessenabwaegung-o8.md=17 | handel/kanal-rechtsmatrix.md=4
sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.txt | Treffer 19 | akquise/interessenabwaegung-o8.md=7 | handel/kanal-rechtsmatrix.md=12
sensibel/rohbelege-R05-A/a3/braeu-dach.txt | Treffer 17 | fund/wettbewerbsbild.md=17
sensibel/rohbelege-R05-A/a6/braeu-dach.txt | Treffer 17 | fund/wettbewerbsbild.md=17
sensibel/rohbelege-R09-A/dsgvo-cellar.txt | Treffer 16 | akquise/interessenabwaegung-o8.md=9 | handel/kanal-rechtsmatrix.md=7
handel/preisliste-vorlaeufig.md | Treffer 12 | handel/angebotsarchitektur.md=12
sensibel/rohbelege-R06-A/p19/akzent_kosten.txt | Treffer 12 | fund/wettbewerbsbild.md=12
handel/foerderarchitektur-beraterrolle.md | Treffer 11 | fund/wettbewerbsbild.md=11
sensibel/rohbelege-R11-A/agent1-straiv-loesungen-self-service-kiosk.txt | Treffer 9 | fund/wettbewerbsbild.md=9
sensibel/rohbelege-R09-A/bfdi-info1-dsgvo-bdsg.txt | Treffer 8 | akquise/interessenabwaegung-o8.md=3 | handel/kanal-rechtsmatrix.md=5
sensibel/rohbelege-R11-A/agent1-straiv-agb.txt | Treffer 8 | fund/wettbewerbsbild.md=8
sensibel/rohbelege-R09-A/eugh-c-621-22-EN.txt | Treffer 7 | akquise/interessenabwaegung-o8.md=7
sensibel/rohbelege-R11-A/agent1-straiv-loesungen-digitaler-meldeschein.txt | Treffer 7 | fund/wettbewerbsbild.md=7
sensibel/rohbelege-R05-A/a1/48c_start.txt | Treffer 6 | fund/wettbewerbsbild.md=6
sensibel/rohbelege-R05-A/a1/anf_system.txt | Treffer 6 | fund/wettbewerbsbild.md=6
sensibel/rohbelege-R05-A/a3/ch-impressum.txt | Treffer 6 | fund/wettbewerbsbild.md=6
sensibel/rohbelege-R05-A/a5/ihk/sh-designkontor-liste.txt | Treffer 6 | fund/wettbewerbsbild.md=6
sensibel/rohbelege-R05-A/a6/48concepts.txt | Treffer 6 | fund/wettbewerbsbild.md=6
sensibel/rohbelege-R05-A/a6/changing-impressum.txt | Treffer 6 | fund/wettbewerbsbild.md=6
akquise/wellenprotokoll-vorlage.md | Treffer 5 | akquise/interessenabwaegung-o8.md=5
sensibel/rohbelege-R05-A/a3/42gmbh-digi.txt | Treffer 5 | fund/wettbewerbsbild.md=5
sensibel/rohbelege-R05-A/a4/rrise_rm.txt | Treffer 5 | fund/wettbewerbsbild.md=5
sensibel/rohbelege-R05-A/a5/dehoga/bw-kosten-foerderung.txt | Treffer 5 | fund/wettbewerbsbild.md=5
sensibel/rohbelege-R05-A/a6/42gmbh-beratung.txt | Treffer 5 | fund/wettbewerbsbild.md=5
sensibel/rohbelege-R05-A/a1/ez_start.txt | Treffer 4 | fund/wettbewerbsbild.md=4
sensibel/rohbelege-R05-A/a1/tc_start.txt | Treffer 4 | fund/wettbewerbsbild.md=4
sensibel/rohbelege-R05-A/a4/faq_cms.txt | Treffer 4 | fund/wettbewerbsbild.md=4
sensibel/rohbelege-R05-A/a4/sh_de_wissenszentrum_faq.txt | Treffer 4 | fund/wettbewerbsbild.md=4
sensibel/rohbelege-R05-A/a5/ihk/sh-anbieterliste.txt | Treffer 4 | fund/wettbewerbsbild.md=4
sensibel/rohbelege-R11-A/agent1-melevo-agb.txt | Treffer 4 | fund/wettbewerbsbild.md=3 | handel/kanal-rechtsmatrix.md=1
akquise/sperrdatei-struktur.md | Treffer 3 | akquise/interessenabwaegung-o8.md=3
fund/erhebung/brandnamic-partner-vollerhebung.md | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R05-A/a3/braeu-impressum.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R05-A/a3/ch-bafa.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R05-A/a4/spa_home.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R05-A/a5/bafa/richtlinie.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R05-A/a5/ihk/sh-meet-experts.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R05-A/a6/braeu-impressum.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R05-A/a6/mews-consultants.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R05-A/a6/sum-hosp.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R05-A/a6/z1digital.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R06-A/p15/raw_flexipass_tech.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R06-A/p15/raw_straiv_io.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R06-A/p15/sub_flexipass_tech_online-checkin.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R06-A/p15/sub_www_iiq-check_de_preise.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R06-A/p19/akzent_start.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R06-A/p19/strafinger_angebotsgruppen.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R08-B/web/POSKTRL-straiv.io.html | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R11-A/agent1-straiv-start.txt | Treffer 3 | fund/wettbewerbsbild.md=3
sensibel/rohbelege-R11-A/agent1-straiv-tech-partner.txt | Treffer 3 | fund/wettbewerbsbild.md=3
akquise/akquiseplan.md | Treffer 2 | handel/kanal-rechtsmatrix.md=2
fund/persona-validierungsplan.md | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a1/tales_start.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a2/raw_partner.html | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a2/txt_partner.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a2/uniq_partner.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a3/42gmbh-home.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a3/ch-preise.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a3/melevo-preise.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a4/com_rm.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a4/hp_privat.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a4/sh_de_preise.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a4/un_home.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a5/dehoga/bw-beratung.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a5/dehoga/bw-marketing.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a5/dehoga/hh-partnerlevel.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a5/dehoga/sh_hotellerie_unsere-leistungen.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a5/dehoga/sh_ueber-uns_leistungen.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a5/foerder/sh-ab190.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a5/ihk/wtsh-digicheck.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a6/apaleo-store.html | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a6/sum-partner.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R05-A/a6/sum-pricing.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R06-A/p15/raw_www_hoteldoor_it.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R06-A/p15/raw_www_iiq-check_de.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R06-A/p15/sub_flexipass_tech_marketplace.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R08-B/analyse.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R08-B/kontrollen.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R08-B/web/POSKTRL-flexipass.tech.html | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R09-A/eugh-c-621-22-DE-amtsblattmitteilung.txt | Treffer 2 | akquise/interessenabwaegung-o8.md=2
sensibel/rohbelege-R11-A/agent1-melevo-preise.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R11-A/agent1-straiv-en-start.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R11-A/agent1-straiv-loesungen-upselling.txt | Treffer 2 | fund/wettbewerbsbild.md=2
sensibel/rohbelege-R11-A/agent1-straiv-ueber-uns.txt | Treffer 2 | fund/wettbewerbsbild.md=2
handel/entwurf-anfrage-wtsh.md | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a1/anf_start.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a1/tc_impressum.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/agb.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/ctx_korrespondenzmanager.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/ctx_privacy-app.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/p.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/raw_ai_grounding-page-brandnamic.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/raw_angebots-und-preis-strategie.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/raw_data-hub.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/raw_hotelberatung.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/raw_korrespondenzmanager.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/raw_privacy-app.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/txt_ai_grounding-page-brandnamic.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/txt_angebots-und-preis-strategie.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/txt_data-hub.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/txt_hotelberatung.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/txt_hotelsoftware.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/txt_korrespondenzmanager.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/txt_privacy-app.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/uniq_ai_grounding-page-brandnamic.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/uniq_angebots-und-preis-strategie.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/uniq_data-hub.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/uniq_hotelberatung.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/uniq_hotelsoftware.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/uniq_korrespondenzmanager.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a2/uniq_privacy-app.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a3/anfang-hotelberatung.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a3/hs-trusted.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a3/melevo-home.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a3/melevo-hotelsoftware.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a3/melevo-impressum.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a3/thexperts-hotelsoftware.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a4/jf_rm.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a4/rrise_preise.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a4/sh_de_ueber-uns_ueber-uns.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a4/ts_rm.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a4/un_ber.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a4/un_ct.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a4/un_impressum.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a4/un_leist.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/dehoga/d_ueber-uns_produkte-services_foerderprogramm-des-bundes.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/dehoga/hh-beitrag.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/foerder/ch-sgh-l.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/foerder/sh-dku-rl.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/foerder/sh-lotsen.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/foerder/sh-lotsen2.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/foerder/sh-unt2.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/iha/beitragsordnung.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/ihk/hh-berater.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/ihk/hh-dig-foerderung.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/ihk/hh-krisenberatung.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/ihk/kfw-beraterboerse.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/ihk/liste-body.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/ihk/mdz-sh-ueber.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a5/prog/gd-ausgelaufen.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/anfang.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/consultant4it.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/opensmjle-partner.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/planet-p.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/sum-de.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/sum-digi.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/sum-en.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/sum-imp2.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/sum-kontakt.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/sum-preise.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/sum-ueber.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/thexperts-hotelsoftware.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/workathotel-impressum.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R05-A/a6/workathotel.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p15/ctrl404_straiv_io.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p15/fp_terms.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p15/priv_hoteldoor.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p15/sub_iiq_partner.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p15/sub_www_hoteldoor_it_crm-e-data-hub.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p15/sub_www_hoteldoor_it_e-commerce.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p15/sub_www_hoteldoor_it_integrazioni.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p15/sub_www_hoteldoor_it_marketing.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p15/sub_www_hoteldoor_it_sales.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p15/sub_www_iiq-check_de_branchen.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p15/sub_www_iiq-check_de_iiq-check.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p15/sub_www_iiq-check_de_impressum.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p19/akzent_impressum.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p19/hotelier_liste.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p19/iha_beitragsordnung.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p19/pch_mitgliedschaft.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p19/shh_impressum.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p19/shh_ueberuns.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R06-A/p19/suedtirol_b2b_koop.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R08-B/analyse-nachfass.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R08-B/nachfass/nachfass-orderando.io.html | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R09-A/selbsttest-o8.md | Treffer 1 | handel/kanal-rechtsmatrix.md=1
sensibel/rohbelege-R11-A/agent1-melevo-hotel-online-marketing.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-melevo-hotelberatung.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-melevo-hotelsoftware.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-melevo-hotelwebsite.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-melevo-impressum.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-melevo-konzept.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-melevo-preise-matrix-token.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-melevo-start.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-straiv-avv.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-straiv-demo.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-straiv-faqs.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-straiv-hoteltyp-hotelketten.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-straiv-hoteltyp-individualhotels.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-straiv-hoteltyp-serviced-apartments.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-straiv-kontakt.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-straiv-loesungen-digital-concierge.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-straiv-loesungen-digitale-tueroeffnung.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-straiv-loesungen-digitales-payment.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-straiv-loesungen-guest-messaging.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-straiv-loesungen-online-check-in-hotel.txt | Treffer 1 | fund/wettbewerbsbild.md=1
sensibel/rohbelege-R11-A/agent1-straiv-white-papers.txt | Treffer 1 | fund/wettbewerbsbild.md=1

=== ABDECKUNG DER 863 BASELINE-EINTRAEGE ===
akquise/interessenabwaegung-o8.md: 58 von 113 in mindestens einer Kandidatendatei gefunden | 55 ohne Treffer
fund/wettbewerbsbild.md: 222 von 467 in mindestens einer Kandidatendatei gefunden | 245 ohne Treffer
handel/kanal-rechtsmatrix.md: 60 von 144 in mindestens einer Kandidatendatei gefunden | 84 ohne Treffer
handel/angebotsarchitektur.md: 12 von 139 in mindestens einer Kandidatendatei gefunden | 127 ohne Treffer
Gesamt: 352 von 863 gefunden | 511 ohne Treffer
HINWEIS: Quellendatei-Zahlen ueberlappen; Roh-HTML/TXT-Dubletten und wiederholte Extrakte sind keine Partition.

=== VERDICHTUNG NACH QUELLENORDNER ===
sensibel/rohbelege-R05-A: 146 von 863 Baseline-Eintraegen | 116 Quelldateien mit Treffer
versionierte Nicht-Pool-Dateien: 83 von 863 Baseline-Eintraegen | 10 Quelldateien mit Treffer
sensibel/rohbelege-R09-A: 63 von 863 Baseline-Eintraegen | 8 Quelldateien mit Treffer
sensibel/rohbelege-R06-A: 42 von 863 Baseline-Eintraegen | 29 Quelldateien mit Treffer
sensibel/rohbelege-R11-A: 34 von 863 Baseline-Eintraegen | 31 Quelldateien mit Treffer
sensibel/rohbelege-R15-A: 22 von 863 Baseline-Eintraegen | 1 Quelldateien mit Treffer
sensibel/rohbelege-R08-B: 8 von 863 Baseline-Eintraegen | 6 Quelldateien mit Treffer
```
