# R17-B-Bericht — Zitat-Wächter Ausbaustufe 3

Datum: 2026-08-17  
Arbeitsstrang: R17-B (Codex)  
Prüfgegenstand: eingefrorener Stand `926ca3c74a2a1e9225cc3602f5d50e779a2426a0`  
Start-HEAD der Arbeitskopie: `90254e1`  
HEAD bei der A–F-Erfassung: `1804b1ca8c8a1c86ba160c91ebbca6d68acd8c7c` (Parallelzustand, kein Messstand)  
HEAD bei finaler Scope-Kontrolle: `af92adbba56c5043ec9710253ee84d42f358eb63` (Parallelzustand, kein Messstand)  
Scratch außerhalb des Repos: `%TEMP%\codex-r17b-4bb9429f516c4405be836a3b0423300a`

## Ergebnis

Das maschinelle Fertig-Kriterium ist am vorgeschriebenen Prüfstand erfüllt:

- Hauptlauf: Exit 0, `27/27` Zieldateien, `1.972` geprüfte Zitate, `0 NEU`.
- `handel/kanal-rechtsmatrix.md`: vorher `51 NEU`, danach `0 NEU`.
- Aufteilung der 51: `12` als neue begründete R17-EIGEN-Fundstellen, `31` durch den lokalen Rohbeleg-Pool bestätigt und `8` als namentlich gelisteter R17-Aufnahmebefund „Rohbeleg bestätigt nicht“. Die Gleichung ist `12 + 31 + 8 = 51`; es gibt keinen unbenannten Rest.
- EIGEN-Bestand insgesamt: `28/28` Einträge vorhanden, `28/28` begründet, `30` Fundstellen als EIGEN klassifiziert. Der Text „Rechtskraft nicht geprüft“ kommt zusätzlich an einer bereits von R15 getragenen Fundstelle vor; diese bleibt Baseline und wird nicht umetikettiert.
- Lokaler Rohbeleg-Pool: `8` Wurzeln, `696` `.txt`/`.md`-Dateien, `9.228.861` Bytes. PDF und HTML werden nicht gelesen.
- Bestandsnenner: R15 `863/863`, R16-Zielaufnahme `43/43`, R17-Zielaufnahme `447/447` mit 19 Einzelnennern; Summe `1.353`.
- Selbsttest: Exit 0, `27/27` Testzitate, EIGEN/Verwaisung, Rohbeleg-Treffer/falsches Rn.-Zitat, leerer Pool, sichtbare Auslassung in beide Richtungen, Dateigrenze und Selbstausschluss `27/27` bestanden.
- Positivkontrollen im Hauptlauf: `33/33`; Gegenproben: `3/3`.
- Kandidatenscan nach Zielerweiterung: nur `akquise/selbsttest-zitate.md`; die Datei bleibt absichtlich außerhalb von ZIEL.

Es wurde keine Belegstufen-, Quellenqualitäts- oder Rechtsbewertung vorgenommen. „Rohbeleg bestätigt“ bezeichnet ausschließlich das technische Trefferergebnis des Wächters.

## Implementierung und Zählweg

### 1. Zwölf R17-EIGEN-Ausnahmen

Der Nenner wurde an der alten NEU-Liste gegen `926ca3c` geprüft: alle zwölf Kandidaten haben dort je eine als EIGEN zu klassifizierende Fundstelle. Ein gleichlautender zusätzlicher Treffer von „Rechtskraft nicht geprüft“ wird vorher durch die bestehende Baseline verbraucht. Deshalb werden 12 der 51 Meldungen EIGEN, ohne einen Eintrag der alten Nenner `863 + 43` umzuwidmen.

| Nr. | Byte-genauer Eintrag | Begründung |
|---:|---|---|
| 1 | `LG Düsseldorf, Urt. v. 06.02.2026 – 38 O 243/23 … hat eine > Briefpost-Werbesendung untersagt — gestützt ausschließlich auf > Art. 6 Abs. 1 lit. f und die Art. 12–14, 21 DSGVO.` | Selbstzitat der eigenen A7-Vorfassung im sichtbaren Reparatur-Kasten |
| 2 | `Rechtskraft nicht geprüft` | zitierte eigene Vorfassung; die Fundstelle bleibt wegen vorhandenen R15-Baseline-Treffers Baseline |
| 3 | `Datenherkunft je Adresse dokumentieren — Art. 14 Abs. 2 lit. f verlangt die Quellenangabe im Brief` | Selbstzitat des eigenen Satzes aus derselben Datei |
| 4 | `Was das für unsere Zielkundenliste heißt` | Selbstzitat der eigenen Zwischenüberschrift aus derselben Datei |
| 5 | `Belegkraft des Belegs selbst` | Selbstzitat der eigenen Zwischenüberschrift aus derselben Datei |
| 6 | `das OLG Stuttgart liegt falsch` | eigene, bewusst gesperrte Lesart |
| 7 | `bei B2B greift keine der beiden Schienen` | eigene, bewusst gesperrte Lesart |
| 8 | `bei B2B greift § 3a erst recht` | eigene, bewusst gesperrte Lesart |
| 9 | `trägt § 3a UWG auch ohne Verbraucherbezug?` | eigene Formulierung der offenen Rechtsfrage |
| 10 | `… kann über § 3a UWG ODER über § 3 Abs. 2 UWG abgemahnt werden` | eigene Überschrift-Neufassung |
| 11 | `hätte sie angegeben …, hätte das den Eindruck zerstört` | eigene Paraphrase des Urteilswortlauts |
| 12 | `Rn. 115: Herkunftsangabe wird zum Irreführungsargument` | eigene Kurzparaphrase aus dem R16-Nachtrag |

### 2. Lokaler Rohbeleg-Pool

Der Wächter liest rekursiv ausschließlich `.txt` und `.md` aus `SCRIPT_REPO/sensibel/rohbelege-*`. `--rohbelege <pfad>` ersetzt diese Wurzel für Tests und fremde Ablagen. Treffer werden in der separaten Spalte „bestätigt (Rohbeleg, lokal)“ geführt und nicht mit dem versionierten Pool verschmolzen.

Die technische Rohbeleg-Normalisierung entfernt Markdown-Zitatpräfixe und einfache Kursivmarker symmetrisch. Sichtbar markierte Auslassungen (`…` und `[…]`) verlangen alle erhaltenen Segmente in richtiger Reihenfolge innerhalb derselben Rohbeleg-Datei; ein Treffer darf nicht über Dateigrenzen zusammengesetzt werden. Unmarkierte Fuzzy-Suche findet nicht statt.

Fehlt der Pool oder ist die Override-Wurzel leer, werden die davon abhängigen Fundstellen pro Datei als „nicht prüfbar“ ausgewiesen: weder NEU noch bestätigt, Exit 0. Lauf F weist `162` solche Fundstellen und `0` Rohbeleg-Bestätigungen aus.

Im vorhandenen Pool bestätigt der Hauptlauf insgesamt `500` Fundstellen. Davon bauen `346` R15-Altlast-Fundstellen technisch ab:

| R15-Datei | Nenner | noch offen | Rohbeleg-bestätigt |
|---|---:|---:|---:|
| `akquise/interessenabwaegung-o8.md` | 113 | 63 | 50 |
| `fund/wettbewerbsbild.md` | 467 | 228 | 239 |
| `handel/kanal-rechtsmatrix.md` | 144 | 87 | 57 |
| `handel/angebotsarchitektur.md` | 139 | 139 | 0 |
| **Summe** | **863** | **517** | **346** |

Für die 51 alten NEU-Meldungen der Rechtsmatrix bestätigt der Rohbeleg `31`. Die dort insgesamt ausgewiesenen `88` Rohbeleg-Treffer enthalten zusätzlich die `57` technisch abgebauten R15-Baseline-Fundstellen.

### 3. Acht ausdrücklich nicht bestätigte Aufnahmebefunde

Diese acht Fundstellen bestätigt der vorhandene lokale Rohbeleg-Pool nicht. Sie werden weder als bestätigt noch als EIGEN oder Baseline ausgegeben, sondern als sichtbarer, fest abgegrenzter R17-Aufnahmebefund. Jeder andere unbestätigte Treffer bleibt NEU.

| Nr. | Fundstelle am Prüfstand | Text | Technischer Zählgrund |
|---:|---|---|---|
| 1 | `handel/kanal-rechtsmatrix.md:691` | `der Tenor untersagt unter Nr. 4 die unterlassene Art.-14-Information` | verkürzte Bestandszusammenfassung; kein byte-treuer Rohbeleg-Treffer |
| 2 | `handel/kanal-rechtsmatrix.md:696` | `bei einem Dritten erhoben` | verkürzte Bestandsformulierung; kein byte-treuer Rohbeleg-Treffer |
| 3 | `handel/kanal-rechtsmatrix.md:731` | `der HTML-Abzug derselben Beschaffung liefert dieselben Werte` | Bestandsaussage über den Beschaffungsweg; kein Rohbeleg-Treffer |
| 4 | `handel/kanal-rechtsmatrix.md:815` | `zu genau diesem Werbeschreiben` | verkürzte Bestandsformulierung; kein byte-treuer Rohbeleg-Treffer |
| 5 | `handel/kanal-rechtsmatrix.md:816` | `vorläufigen Beratungsergebnis` | Flexionsabweichung zum Rohbeleg „vorläufiges Beratungsergebnis“ |
| 6 | `handel/kanal-rechtsmatrix.md:834` | `*Es ist ein erstinstanzliches Urteil, dessen Berufungsgericht > in derselben Sache erkennbar zu einer anderen Beurteilung > neigt*` | eigene Bestandszusammenfassung; kein byte-treuer Rohbeleg-Treffer |
| 7 | `handel/kanal-rechtsmatrix.md:843` | `*und dasselbe LG weicht von der ständigen Rechtsprechung > desselben OLG auch an anderer Stelle ausdrücklich ab > (Rn. 43, TKG/UWG)*` | eigene Bestandszusammenfassung; kein byte-treuer Rohbeleg-Treffer |
| 8 | `handel/kanal-rechtsmatrix.md:1173` | `je Schiene getrennt … und die Antworten zeigen in entgegengesetzte Richtungen` | eigene Bestandszusammenfassung; kein byte-treuer Rohbeleg-Treffer |

Die Liste ist eine technische Klassifikation zur vollständigen Differenzzählung, keine Entwarnung und keine Aussage darüber, ob eine Fundstelle inhaltlich trägt.

### 4. ZIEL-Erweiterung und R17-Baseline

ZIEL umfasst jetzt die acht bisherigen und diese 19 neuen Dateien. Der R17-Nenner wurde gegen `926ca3c` erst nach versioniertem Pool, lokalem Rohbeleg-Pool und EIGEN-Ausnahmen gebildet:

| Datei | R17-Nenner |
|---|---:|
| `beleg/baseline-messplan.md` | 9 |
| `beleg/vorlagen/interviewleitfaden-baseline.md` | 38 |
| `beleg/vorlagen/referenzvereinbarung-pilotobjekte.md` | 12 |
| `beleg/vorlagen/tagesblatt-firzlaffs.md` | 3 |
| `beleg/vorlagen/tagesblatt-hostel-boninstrasse.md` | 0 |
| `fund/erhebung/brandnamic-partner-vollerhebung.md` | 38 |
| `fund/erhebung/entwurf-anfrage-dehoga-sh.md` | 2 |
| `fund/erhebung/entwurf-anfrage-ihk-sh.md` | 1 |
| `fund/erhebung/regionalstatistik-groessenklassen.md` | 18 |
| `fund/erhebung/strang2-strukturdaten.md` | 17 |
| `fund/erhebung/verbund-vollerhebung.md` | 12 |
| `fund/persona-validierungsplan.md` | 7 |
| `fund/positionierungspapier.md` | 24 |
| `handel/anwalts-briefing-2026-08.md` | 36 |
| `handel/entwurf-anfrage-ifb-hamburg.md` | 4 |
| `handel/entwurf-anfrage-wtsh.md` | 8 |
| `handel/foerderarchitektur-beraterrolle.md` | 54 |
| `handel/preisliste-vorlaeufig.md` | 51 |
| `handel/preismodell-optionen.md` | 113 |
| **Summe** | **447** |

Die Baseline hat Schema 2, trägt den vollständigen R17-Prüfstand und besitzt den fest verdrahteten Nutzdaten-Hash `5bc7e84c4cfa20a67efa529cfdc3ece2efc6753162b1ec156e888d9a5ab93bdb`. Ein neuer Entwurf aus dem Scratch-Export war byteidentisch zur aktiven Datei:

- aktiver Datei-SHA-256: `7845792e329630876afade7b7c2690ebb25c043afc741d64b8e6d11342284fcc`
- reproduzierter Datei-SHA-256: `7845792e329630876afade7b7c2690ebb25c043afc741d64b8e6d11342284fcc`
- Dateigröße jeweils: `135.480` Bytes

Der Selbstausschluss (`poolTextFuer`) gilt für alle `27/27` Zieldateien. Die 19 neuen Klassen besitzen je einen stabilen Positivkontroll-Anker.

## Laufzeiten und Exitcodes

Die Laufzeit ist die Wall-Clock-Zeit eines jeweils neuen Node-Prozesses auf demselben Rechner. A nutzt das alte Skript aus dem Export, B–F die finale Arbeitskopie.

| Ausgabe | Modus | Exit | Laufzeit |
|---|---|---:|---:|
| A | alter Hauptlauf gegen `926ca3c` | 1 (erwartet) | 305 ms |
| B | finaler Hauptlauf gegen `926ca3c` | 0 | 5.437 ms |
| C | `--selbsttest` | 0 | 152 ms |
| D | `--altlast` gegen `926ca3c` | 0 | 5.197 ms |
| E | `--zielkandidaten` gegen `926ca3c` | 0 | 55 ms |
| F | Hauptlauf gegen `926ca3c`, `--rohbelege <leer>` | 0 | 502 ms |

## O-12-Satzvorschlag für § 10

Nur Vorschlag; `akquise/listenbau-regelwerk.md` wurde in diesem Strang nicht bearbeitet:

> Der Zitat-Wächter prüft 27 operative Dateien; lokale Rohbelege aus `sensibel/rohbelege-*` bilden eine getrennte Bestätigungsstufe. Fehlt der lokale Rohbeleg-Pool, weist der Lauf die betroffenen Fundstellen als „nicht prüfbar“ aus; er bestätigt sie nicht und meldet sie nicht als neue Verstöße.

## Nicht erhoben / nicht prüfbar

- Nicht erhoben wurde, ob ein technischer Rohbeleg-Treffer die zitierte Aussage rechtlich, semantisch oder als Belegstufe trägt.
- Nicht erhoben wurden Authentizität, Vollständigkeit und richtige Auswahl des git-ignorierten Rohbeleg-Bestands. Dokumentiert sind nur Wurzeln, Dateizahl, Bytezahl und ein normalisierter Korpus-Hash in der Baseline.
- PDF- und HTML-Dateien sind absichtlich nicht Teil des Rohbeleg-Pools und daher durch diesen Prüfschritt nicht prüfbar.
- Die acht ausdrücklich gelisteten Aufnahmebefunde sind mit dem vorhandenen Rohbeleg-Pool nicht bestätigt. Ihre inhaltliche Einordnung bleibt der Leitsession vorbehalten.
- Der Wächter extrahiert nur deutsche Anführungszeichen mit mindestens 25 Zeichen. Unmarkierte oder kürzere Aussagen werden nicht erhoben.
- Der lebende Arbeitsbaum ist wegen der Parallel-Sessions kein Messstand. Ein zusätzlicher Live-Lauf war mit 16 neuen Fundstellen rot (`akquise/interessenabwaegung-o8.md` 2, `handel/kanal-rechtsmatrix.md` 9, `handel/angebotsarchitektur.md` 2, `beleg/baseline-messplan.md` 1, `handel/preismodell-optionen.md` 2); diese fremden Änderungen wurden nicht bearbeitet oder bewertet.
- Laufzeiten sind Einzelmessungen ohne Wiederholungsreihe; sie sind Größenordnungen, kein Benchmark.

## Welcher meiner Prüfschritte hätte einen vorhandenen Fehler NICHT finden können?

- Ein sachlich oder rechtlich falscher Satz außerhalb des Extraktionsmusters (keine deutschen Anführungszeichen oder kürzer als 25 Zeichen) bleibt für alle Wächter-Modi unsichtbar.
- Ein byte-treuer Texttreffer beweist nicht, dass die Quelle authentisch, die Randnummer richtig zugeordnet oder der zitierte Ausschnitt im Kontext tragend ist. Weder Hauptlauf noch `--altlast` finden diesen Fehler.
- Der Auslassungs-Matcher prüft nur die exakte Reihenfolge der sichtbaren Segmente innerhalb einer Datei. Er erkennt nicht, ob die ausgelassene Passage die Bedeutung umkehrt; seine falschen Gegenproben und die Dateigrenzen-Sperre verhindern andere Fehlerklassen, aber nicht diesen Kontextfehler.
- Der Baseline-Hash entdeckt Manipulation oder Reproduktionsabweichungen der Nutzdaten, nicht die inhaltliche Richtigkeit eines Baseline-Eintrags.
- Dateizahl, Bytezahl und Korpus-Hash des lokalen Rohbeleg-Pools entdecken keine systematische Auslassung einer nie eingesammelten Quelle.
- Positivkontrollen beweisen, dass bekannte Anker noch gefunden werden. Sie beweisen nicht, dass jede neu formulierte Passage durch den richtigen Pool oder die richtige Ausnahme klassifiziert wird.

## Arbeitsbaum- und Encoding-Kontrollen

`git diff --check` über die vier R17-B-Pfade endete bei der Schlussprüfung mit Exit 0. `git ls-files --eol` meldete für Skript, Selbsttest und Baseline jeweils `i/lf w/lf`; der Selbsttest bestätigt zusätzlich die LF/CRLF-Invarianz. Die Statusangaben sind wegen paralleler Sessions nur Indikationen und müssen von der Leitsession gegengemessen werden.

Geänderte R17-B-Pfade bei der Zwischenmessung:

```text
 M akquise/pruefe-zitate.js
 M akquise/selbsttest-zitate.md
 M akquise/zitat-baseline-2026-08-17.md
?? protokolle/R17-B-bericht.md
```

Fremder, nicht bearbeiteter Parallelpfad bei dieser Kontrolle: `?? protokolle/R17-C-abschluss.md`.

Umlaut meint die Zeichenklasse `[äöüÄÖÜß]`:

| Datei | vorher Umlaut | nachher Umlaut | vorher U+00AD | nachher U+00AD | vorher NBSP | nachher NBSP |
|---|---:|---:|---:|---:|---:|---:|
| `akquise/selbsttest-zitate.md` | 31 | 61 | 0 | 0 | 0 | 0 |
| `akquise/zitat-baseline-2026-08-17.md` | 1006 | 1506 | 0 | 0 | 0 | 0 |
| `protokolle/R17-B-bericht.md` | nicht vorhanden | 1711 | nicht vorhanden | 0 | nicht vorhanden | 0 |

Es wurde weder committed noch gepusht. Die benannte offene STATUS-Fundstelle aus R16 („Wächter 51 NEW + 20 Kandidaten“) ist im R17-B-Arbeitsergebnis technisch erfüllt; Trägerwahrheit, Abnahme und Commit bleiben bei der Leitsession.

## Rohausgaben A–F

### A — alter Hauptlauf gegen `926ca3c`

```text
=== Zitatabgleich: neue Verstoesse gegen festgeschriebenen Bestand ===
Pruefwurzel: C:\Users\QWAFA_~1\AppData\Local\Temp\codex-r17b-4bb9429f516c4405be836a3b0423300a\stand-926ca3c
Baseline-Pruefstand: 0c4692f873f179917b28f4c210ae2e7be76cd653
ZIEL: 8 / 8 Dateien | POOL: 11 Dateien
Geprueft: 1260 Zitate (>=25 Zeichen, deutsche Anfuehrungszeichen)
Quellenzitate bestaetigt: 285
Eigene Formulierungen: 16 / 16 Eintraege belegt (18 Fundstellen)

--- Laufzahlen je Zieldatei ---
akquise/akquiseplan.md: 30 geprueft | 26 bestaetigt | 4 eigene | 0 Bestand (-) | 0 NEU
akquise/listenbau-regelwerk.md: 115 geprueft | 102 bestaetigt | 13 eigene | 0 Bestand (-) | 0 NEU
akquise/interessenabwaegung-o8.md: 147 geprueft | 34 bestaetigt | 0 eigene | 113 Bestand (r15-altlast=113) | 0 NEU
fund/wettbewerbsbild.md: 494 geprueft | 27 bestaetigt | 0 eigene | 467 Bestand (r15-altlast=467) | 0 NEU
handel/kanal-rechtsmatrix.md: 227 geprueft | 32 bestaetigt | 0 eigene | 144 Bestand (r15-altlast=144) | 51 NEU
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
Neu: 51
[handel/kanal-rechtsmatrix.md:576] Rn. 115: Herkunftsangabe wird zum Irreführungsargument
[handel/kanal-rechtsmatrix.md:580] Das auf Verschleierung angelegte Bestreben der Beklagten tritt außer in der Aufmachung des Anschreibens und den darin gewählten Formulierungen in weiteren Umständen zu Tage.
[handel/kanal-rechtsmatrix.md:586] Diese liegen zunächst darin, dass die Beklagte … ihre > datenschutzrechtlichen Pflichten missachtet hat. Hätte sie (wie > es gemäß Art. 14 Abs. 1 Abs. 2 Buchst. f und Abs. 3 Buchst. b DSGVO > erforderlich gewesen wäre) in dem Schreiben angegeben, die Daten > des Adressaten aus öffentlichen Quellen entnommen oder von > einem Adresshändler erworben zu haben, hätte das den aufgebauten > Eindruck … zerstört und dem Adressaten einen Hinweis darauf > gegeben, dass es sich um das Werbeschreiben eines mit dem > Adressaten nicht verbundenen Unternehmens handelt.
[handel/kanal-rechtsmatrix.md:597] aus öffentlichen Quellen entnommen
[handel/kanal-rechtsmatrix.md:606] hätte sie angegeben …, hätte das den Eindruck zerstört
[handel/kanal-rechtsmatrix.md:613] Was das für unsere Zielkundenliste heißt
[handel/kanal-rechtsmatrix.md:614] Datenherkunft je Adresse dokumentieren — Art. 14 Abs. 2 lit. f verlangt die Quellenangabe im Brief
[handel/kanal-rechtsmatrix.md:670] LG Düsseldorf, Urt. v. 06.02.2026 – 38 O 243/23 … hat eine > Briefpost-Werbesendung untersagt — gestützt ausschließlich auf > Art. 6 Abs. 1 lit. f und die Art. 12–14, 21 DSGVO.
[handel/kanal-rechtsmatrix.md:691] der Tenor untersagt unter Nr. 4 die unterlassene Art.-14-Information
[handel/kanal-rechtsmatrix.md:694] nicht innerhalb einer angemessenen Frist, spätestens innerhalb eines Monats
[handel/kanal-rechtsmatrix.md:696] bei einem Dritten erhoben
[handel/kanal-rechtsmatrix.md:724] Verstößen gegen Artt. 12,14 und 21 DSGVO
[handel/kanal-rechtsmatrix.md:724] in der gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden und deshalb rechtswidrigen Verarbeitung der Daten des Verbrauchers
[handel/kanal-rechtsmatrix.md:725] Darüber hinaus liegen die Voraussetzungen von Art. 6 Abs. 1 Unterabs. 1 Buchstabe f DSGVO deshalb nicht vor, weil das … verfolgte Interesse nicht rechtmäßig ist. Die … Werbung ist gemäß § 3 Abs. 1 UWG unzulässig, weil sie gemäß §§ 5 Abs. 1 und Abs. 2, 5a Abs. 1 bis Abs. 3 UWG unlauter ist
[handel/kanal-rechtsmatrix.md:726] Es kann offenbleiben, ob im Allgemeinen in erster Linie § 3a UWG … heranzuziehen ist, oder § 3 Abs. 2 UWG, der auf einer unionsrechtlichen Grundlage beruht. Bezogen auf die von dem Kläger mit seinem Antrag I angegriffenen Verstöße liegen sowohl die Voraussetzungen von § 3a UWG vor (dazu aa) als auch diejenigen von § 3 Abs. 2 UWG (dazu bb).
[handel/kanal-rechtsmatrix.md:731] der HTML-Abzug derselben Beschaffung liefert dieselben Werte
[handel/kanal-rechtsmatrix.md:766] Belegkraft des Belegs selbst
[handel/kanal-rechtsmatrix.md:783] Im Übrigen wird die Klage abgewiesen
[handel/kanal-rechtsmatrix.md:784] der Kläger zu einem Fünftel und die Beklagte zu vier Fünfteln
[handel/kanal-rechtsmatrix.md:800] (2) An dieser Beurteilung des Werbeschreibens der Beklagten hält > die Kammer weiterhin fest, und zwar auch in Ansehung der > abweichenden Auffassung, die nach den Angaben der Beklagten von > dem Oberlandesgericht in mehreren mündlichen Verhandlungen als > vorläufiges Beratungsergebnis mitgeteilt worden sein soll und die > in dem (von der Beklagten als Anlage B9 vorgelegten) Beschluss > vom 19. Dezember 2024 -20 W 37/24 (= Landgericht Düsseldorf > 38 O 17/22) beiläufig in einer die dort getroffene Entscheidung > nicht tragenden Erwägung geäußert worden ist. …
[handel/kanal-rechtsmatrix.md:815] zu genau diesem Werbeschreiben
[handel/kanal-rechtsmatrix.md:815] auch in Ansehung der abweichenden Auffassung
[handel/kanal-rechtsmatrix.md:816] beiläufig … nicht tragenden Erwägung
[handel/kanal-rechtsmatrix.md:816] vorläufigen Beratungsergebnis
[handel/kanal-rechtsmatrix.md:817] von dem Oberlandesgericht
[handel/kanal-rechtsmatrix.md:817] Landgericht Düsseldorf 38 O 245/23 = Oberlandesgericht Düsseldorf 20 W 87/23
[handel/kanal-rechtsmatrix.md:817] den von der Beklagten in ihrem Schriftsatz vom 5. November 2025 angeführten Äußerungen des Oberlandesgerichts Düsseldorf
[handel/kanal-rechtsmatrix.md:834] *Es ist ein erstinstanzliches Urteil, dessen Berufungsgericht > in derselben Sache erkennbar zu einer anderen Beurteilung > neigt*
[handel/kanal-rechtsmatrix.md:837] (= Landgericht > Düsseldorf 38 O 17/22)
[handel/kanal-rechtsmatrix.md:841] mitgeteilt worden sein soll
[handel/kanal-rechtsmatrix.md:843] *und dasselbe LG weicht von der ständigen Rechtsprechung > desselben OLG auch an anderer Stelle ausdrücklich ab > (Rn. 43, TKG/UWG)*
[handel/kanal-rechtsmatrix.md:846] Bei dieser Sichtweise verbleibt die Kammer auch in > Ansehung der von der Beklagten angeführten ständigen > Rechtsprechung des Oberlandesgerichts Düsseldorf, der zufolge > das TKG lex specialis zum UWG sei.
[handel/kanal-rechtsmatrix.md:921] Sollten demgegenüber die Ausführungen unter B I der Gründe des > von der Beklagten angeführten Beschlusses des Oberlandesgerichts > Stuttgarts … dahin zu verstehen sein, dass an die Zulässigkeit > einer zum Zwecke der Direktwerbung vorgenommenen Datenverarbeitung > weniger strenge Anforderungen zu stellen sind …, könnte dem … > nicht gefolgt werden …
[handel/kanal-rechtsmatrix.md:935] das OLG Stuttgart liegt falsch
[handel/kanal-rechtsmatrix.md:1061] … kann über § 3a UWG ODER über § 3 Abs. 2 UWG abgemahnt werden
[handel/kanal-rechtsmatrix.md:1091] Es kann offenbleiben, ob im Allgemeinen in erster Linie § 3a UWG als nach dem nationalen Recht speziellere Norm heranzuziehen ist, oder § 3 Abs. 2 UWG, der auf einer unionsrechtlichen Grundlage beruht. Bezogen auf die von dem Kläger mit seinem Antrag I angegriffenen Verstöße liegen sowohl die Voraussetzungen von § 3a UWG vor (dazu aa) als auch diejenigen von § 3 Abs. 2 UWG (dazu bb).
[handel/kanal-rechtsmatrix.md:1093] Die gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden geschäftlichen Handlungen sind außerdem gemäß § 3 Abs. 2 UWG unlauter.
[handel/kanal-rechtsmatrix.md:1094] Nach § 3 Abs. 2 UWG sind geschäftliche Handlungen, die sich an Verbraucher richten oder diese erreichen, unlauter, wenn sie nicht der unternehmerischen Sorgfalt entsprechen und dazu geeignet sind, das wirtschaftliche Verhalten des Verbrauchers wesentlich zu beeinflussen.
[handel/kanal-rechtsmatrix.md:1105] Der Kläger ist in die Liste qualifizierter Einrichtungen nach § 4 UKlaG eingetragen.
[handel/kanal-rechtsmatrix.md:1125] von einer Mitbewerberin der Beklagten gegen die Beklagte geführten einstweiligen Verfügungsverfahren 38 O 88/23
[handel/kanal-rechtsmatrix.md:1128] mehreren gegen die Beklagte geführten Verfügungsverfahren
[handel/kanal-rechtsmatrix.md:1146] Rechtskraft nicht geprüft
[handel/kanal-rechtsmatrix.md:1156] trägt § 3a UWG auch ohne Verbraucherbezug?
[handel/kanal-rechtsmatrix.md:1162] geschäftliche Handlungen, die sich an Verbraucher richten oder diese erreichen
[handel/kanal-rechtsmatrix.md:1163] auch Verbraucher erreichende
[handel/kanal-rechtsmatrix.md:1163] allein das Verhältnis zwischen Mittbewerbern betreffende[…] Regelungen
[handel/kanal-rechtsmatrix.md:1164] bezwecken … auch den Schutz der betroffenen Person in ihrer Stellung als Marktteilnehmer
[handel/kanal-rechtsmatrix.md:1165] eine massenhaft verbreitete Werbeaussendung betroffen ist
[handel/kanal-rechtsmatrix.md:1167] bei B2B greift keine der beiden Schienen
[handel/kanal-rechtsmatrix.md:1168] bei B2B greift § 3a erst recht
[handel/kanal-rechtsmatrix.md:1173] je Schiene getrennt … und die Antworten zeigen in entgegengesetzte Richtungen

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

### B — finaler Hauptlauf gegen `926ca3c`

```text
=== Zitatabgleich: neue Verstoesse gegen festgeschriebenen Bestand ===
Pruefwurzel: C:\Users\QWAFA_~1\AppData\Local\Temp\codex-r17b-4bb9429f516c4405be836a3b0423300a\stand-926ca3c
Baseline-Pruefstand: 0c4692f873f179917b28f4c210ae2e7be76cd653
R17-Pruefstand: 926ca3c74a2a1e9225cc3602f5d50e779a2426a0
ZIEL: 27 / 27 Dateien | versionierter POOL: 11 Dateien
Rohbeleg-Pool: verfuegbar (8 Wurzeln, 696 Textdateien, 9228861 Bytes; SCRIPT_REPO/sensibel/rohbelege-*)
Geprueft: 1972 Zitate (>=25 Zeichen, deutsche Anfuehrungszeichen)
Quellenzitate bestaetigt (versionierter Pool): 427
Bestaetigt (Rohbeleg, lokal): 500
Eigene Formulierungen: 28 / 28 Eintraege im Bestand vorhanden (30 als EIGEN klassifizierte Fundstellen)
EIGEN-Eintraege mit Begruendung: 28 / 28
Nicht pruefbar (Rohbeleg-Pool nicht verfuegbar): 0
Rohbeleg bestaetigt nicht (R17-Aufnahmebefund): 8

--- Laufzahlen je Zieldatei ---
akquise/akquiseplan.md: 30 geprueft | 26 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 4 eigene | 0 Bestand (-) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
akquise/listenbau-regelwerk.md: 115 geprueft | 102 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 13 eigene | 0 Bestand (-) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
akquise/interessenabwaegung-o8.md: 147 geprueft | 34 bestaetigt (Pool) | 50 bestaetigt (Rohbeleg, lokal) | 0 eigene | 63 Bestand (r15-altlast=63) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/wettbewerbsbild.md: 494 geprueft | 27 bestaetigt (Pool) | 239 bestaetigt (Rohbeleg, lokal) | 0 eigene | 228 Bestand (r15-altlast=228) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/kanal-rechtsmatrix.md: 227 geprueft | 32 bestaetigt (Pool) | 88 bestaetigt (Rohbeleg, lokal) | 12 eigene | 87 Bestand (r15-altlast=87) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 8 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/angebotsarchitektur.md: 172 geprueft | 33 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 139 Bestand (r15-altlast=139) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
akquise/sperrdatei-struktur.md: 31 geprueft | 12 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 19 Bestand (r16-zielaufnahme=19) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
akquise/wellenprotokoll-vorlage.md: 44 geprueft | 19 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 1 eigene | 24 Bestand (r16-zielaufnahme=24) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
beleg/baseline-messplan.md: 14 geprueft | 5 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 9 Bestand (r17-zielaufnahme=9) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
beleg/vorlagen/interviewleitfaden-baseline.md: 39 geprueft | 1 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 38 Bestand (r17-zielaufnahme=38) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
beleg/vorlagen/referenzvereinbarung-pilotobjekte.md: 17 geprueft | 5 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 12 Bestand (r17-zielaufnahme=12) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
beleg/vorlagen/tagesblatt-firzlaffs.md: 5 geprueft | 2 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 3 Bestand (r17-zielaufnahme=3) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
beleg/vorlagen/tagesblatt-hostel-boninstrasse.md: 1 geprueft | 1 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 0 Bestand (-) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/erhebung/brandnamic-partner-vollerhebung.md: 73 geprueft | 7 bestaetigt (Pool) | 28 bestaetigt (Rohbeleg, lokal) | 0 eigene | 38 Bestand (r17-zielaufnahme=38) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/erhebung/entwurf-anfrage-dehoga-sh.md: 2 geprueft | 0 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 2 Bestand (r17-zielaufnahme=2) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/erhebung/entwurf-anfrage-ihk-sh.md: 1 geprueft | 0 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 1 Bestand (r17-zielaufnahme=1) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/erhebung/regionalstatistik-groessenklassen.md: 18 geprueft | 0 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 18 Bestand (r17-zielaufnahme=18) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/erhebung/strang2-strukturdaten.md: 19 geprueft | 1 bestaetigt (Pool) | 1 bestaetigt (Rohbeleg, lokal) | 0 eigene | 17 Bestand (r17-zielaufnahme=17) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/erhebung/verbund-vollerhebung.md: 13 geprueft | 1 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 12 Bestand (r17-zielaufnahme=12) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/persona-validierungsplan.md: 14 geprueft | 7 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 7 Bestand (r17-zielaufnahme=7) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/positionierungspapier.md: 30 geprueft | 6 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 24 Bestand (r17-zielaufnahme=24) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/anwalts-briefing-2026-08.md: 125 geprueft | 50 bestaetigt (Pool) | 39 bestaetigt (Rohbeleg, lokal) | 0 eigene | 36 Bestand (r17-zielaufnahme=36) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/entwurf-anfrage-ifb-hamburg.md: 12 geprueft | 3 bestaetigt (Pool) | 5 bestaetigt (Rohbeleg, lokal) | 0 eigene | 4 Bestand (r17-zielaufnahme=4) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/entwurf-anfrage-wtsh.md: 14 geprueft | 2 bestaetigt (Pool) | 4 bestaetigt (Rohbeleg, lokal) | 0 eigene | 8 Bestand (r17-zielaufnahme=8) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/foerderarchitektur-beraterrolle.md: 97 geprueft | 10 bestaetigt (Pool) | 33 bestaetigt (Rohbeleg, lokal) | 0 eigene | 54 Bestand (r17-zielaufnahme=54) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/preisliste-vorlaeufig.md: 79 geprueft | 27 bestaetigt (Pool) | 1 bestaetigt (Rohbeleg, lokal) | 0 eigene | 51 Bestand (r17-zielaufnahme=51) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/preismodell-optionen.md: 139 geprueft | 14 bestaetigt (Pool) | 12 bestaetigt (Rohbeleg, lokal) | 0 eigene | 113 Bestand (r17-zielaufnahme=113) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU

--- Bestand mit Nenner ---
R15-Altlast: 517 von 863 noch offen | 346 seit Baseline/Einbezug abgebaut | davon Rohbeleg-bestaetigt: 346
  akquise/interessenabwaegung-o8.md: 63 von 113 noch offen | davon Rohbeleg-bestaetigt: 50
  fund/wettbewerbsbild.md: 228 von 467 noch offen | davon Rohbeleg-bestaetigt: 239
  handel/kanal-rechtsmatrix.md: 87 von 144 noch offen | davon Rohbeleg-bestaetigt: 57
  handel/angebotsarchitektur.md: 139 von 139 noch offen | davon Rohbeleg-bestaetigt: 0
R16-Aufnahmebestand der zwei neuen Zieldateien: 43 von 43 noch offen | 0 seit Baseline/Einbezug abgebaut | davon Rohbeleg-bestaetigt: 0
  akquise/sperrdatei-struktur.md: 19 von 19 noch offen | davon Rohbeleg-bestaetigt: 0
  akquise/wellenprotokoll-vorlage.md: 24 von 24 noch offen | davon Rohbeleg-bestaetigt: 0
R17-Aufnahmebestand der 19 neuen Zieldateien: 447 von 447 noch offen | 0 seit Baseline/Einbezug abgebaut | davon Rohbeleg-bestaetigt: 0
  beleg/baseline-messplan.md: 9 von 9 noch offen | davon Rohbeleg-bestaetigt: 0
  beleg/vorlagen/interviewleitfaden-baseline.md: 38 von 38 noch offen | davon Rohbeleg-bestaetigt: 0
  beleg/vorlagen/referenzvereinbarung-pilotobjekte.md: 12 von 12 noch offen | davon Rohbeleg-bestaetigt: 0
  beleg/vorlagen/tagesblatt-firzlaffs.md: 3 von 3 noch offen | davon Rohbeleg-bestaetigt: 0
  beleg/vorlagen/tagesblatt-hostel-boninstrasse.md: 0 von 0 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/erhebung/brandnamic-partner-vollerhebung.md: 38 von 38 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/erhebung/entwurf-anfrage-dehoga-sh.md: 2 von 2 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/erhebung/entwurf-anfrage-ihk-sh.md: 1 von 1 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/erhebung/regionalstatistik-groessenklassen.md: 18 von 18 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/erhebung/strang2-strukturdaten.md: 17 von 17 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/erhebung/verbund-vollerhebung.md: 12 von 12 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/persona-validierungsplan.md: 7 von 7 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/positionierungspapier.md: 24 von 24 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/anwalts-briefing-2026-08.md: 36 von 36 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/entwurf-anfrage-ifb-hamburg.md: 4 von 4 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/entwurf-anfrage-wtsh.md: 8 von 8 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/foerderarchitektur-beraterrolle.md: 54 von 54 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/preisliste-vorlaeufig.md: 51 von 51 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/preismodell-optionen.md: 113 von 113 noch offen | davon Rohbeleg-bestaetigt: 0

--- ROHBELEG BESTAETIGT NICHT (R17-AUFNAHMEBEFUND) ---
[handel/kanal-rechtsmatrix.md:691] der Tenor untersagt unter Nr. 4 die unterlassene Art.-14-Information
[handel/kanal-rechtsmatrix.md:696] bei einem Dritten erhoben
[handel/kanal-rechtsmatrix.md:731] der HTML-Abzug derselben Beschaffung liefert dieselben Werte
[handel/kanal-rechtsmatrix.md:815] zu genau diesem Werbeschreiben
[handel/kanal-rechtsmatrix.md:816] vorläufigen Beratungsergebnis
[handel/kanal-rechtsmatrix.md:834] *Es ist ein erstinstanzliches Urteil, dessen Berufungsgericht > in derselben Sache erkennbar zu einer anderen Beurteilung > neigt*
[handel/kanal-rechtsmatrix.md:843] *und dasselbe LG weicht von der ständigen Rechtsprechung > desselben OLG auch an anderer Stelle ausdrücklich ab > (Rn. 43, TKG/UWG)*
[handel/kanal-rechtsmatrix.md:1173] je Schiene getrennt … und die Antworten zeigen in entgegengesetzte Richtungen

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
OK   R17 ZIEL baseline-messplan [beleg/baseline-messplan.md]
OK   R17 ZIEL interviewleitfaden [beleg/vorlagen/interviewleitfaden-baseline.md]
OK   R17 ZIEL referenzvereinbarung [beleg/vorlagen/referenzvereinbarung-pilotobjekte.md]
OK   R17 ZIEL tagesblatt-firzlaffs [beleg/vorlagen/tagesblatt-firzlaffs.md]
OK   R17 ZIEL tagesblatt-boninstrasse [beleg/vorlagen/tagesblatt-hostel-boninstrasse.md]
OK   R17 ZIEL brandnamic [fund/erhebung/brandnamic-partner-vollerhebung.md]
OK   R17 ZIEL dehoga-entwurf [fund/erhebung/entwurf-anfrage-dehoga-sh.md]
OK   R17 ZIEL ihk-entwurf [fund/erhebung/entwurf-anfrage-ihk-sh.md]
OK   R17 ZIEL regionalstatistik [fund/erhebung/regionalstatistik-groessenklassen.md]
OK   R17 ZIEL strukturdaten [fund/erhebung/strang2-strukturdaten.md]
OK   R17 ZIEL verbund [fund/erhebung/verbund-vollerhebung.md]
OK   R17 ZIEL persona [fund/persona-validierungsplan.md]
OK   R17 ZIEL positionierung [fund/positionierungspapier.md]
OK   R17 ZIEL anwalts-briefing [handel/anwalts-briefing-2026-08.md]
OK   R17 ZIEL ifb-entwurf [handel/entwurf-anfrage-ifb-hamburg.md]
OK   R17 ZIEL wtsh-entwurf [handel/entwurf-anfrage-wtsh.md]
OK   R17 ZIEL foerderarchitektur [handel/foerderarchitektur-beraterrolle.md]
OK   R17 ZIEL preisliste [handel/preisliste-vorlaeufig.md]
OK   R17 ZIEL preismodell [handel/preismodell-optionen.md]
Positivkontrolle: 33 / 33

--- Gegenprobe (darf NICHT treffen) ---
OK   verfaelschte Zahl
OK   verfaelschte Frist
OK   erfundener Satz
Gegenprobe: 3 / 3

ERGEBNIS: GRUEN — 0 neue Verstoesse; Bestand bleibt sichtbar.
```

### C — `--selbsttest`

```text
=== SELBSTTEST: dieselben Funktionen wie der Produktivpfad ===
Zitate extrahiert                 : 27 / 27
Muster (a) NEU                   : 9 / 9
TREFFEN-NICHT-Zeilen             : 9 / 9
Muster (b) BASELINE, nicht rot   : 1 / 1
Muster (c) POOL bestaetigt       : 8 / 8
Muster (d) nur eigene Datei      : 1 / 1 nicht bestaetigt
Muster (d) zusaetzlich Fremdpool : 1 / 1 bestaetigt
Muster (e) EIGEN                 : 1 / 1
Muster (e) verwaiste Ausnahme    : 1 / 1
Muster (f) Rohbeleg bestaetigt   : 1 / 1
Muster (f) falsches Rn.-Zitat NEU: 1 / 1
Muster (g) nicht pruefbar        : 1 / 1 | NEU 0 | bestaetigt 0
Muster (h) Rohbeleg bestaetigt nicht: 1 / 1
Muster (h) verwaister Eintrag    : 1 / 1
Muster (i) Auslassung bestaetigt : 2 / 2
Muster (i) Auslassung bleibt NEU : 2 / 2
Muster (i) keine Dateigrenze     : JA
Selbstausschluss ZIEL            : 27 / 27
LF/CRLF invariant                : JA
SELBSTTEST BESTANDEN
```

### D — `--altlast` gegen `926ca3c`

```text
=== ALTLAST / AUFNAHMEBESTAND — VOLLSTAENDIGE BASELINE ===
Pruefstand: 0c4692f873f179917b28f4c210ae2e7be76cd653
Nutzdaten-SHA-256: 5bc7e84c4cfa20a67efa529cfdc3ece2efc6753162b1ec156e888d9a5ab93bdb
Rohbeleg-Pool: 696 Textdateien, 9228861 Bytes

--- R15-Altlast ---
Offen: 517 von 863 | seit Baseline/Einbezug abgebaut: 346 | davon Rohbeleg-bestaetigt: 346
akquise/interessenabwaegung-o8.md: 63 von 113 offen | 50 abgebaut | davon Rohbeleg-bestaetigt: 50
[OFFEN] akquise/interessenabwaegung-o8.md :: Wenn für den werbenden Verantwortlichen ein bestimmter Kontaktweg zu einer betroffenen Person danach nicht erlaubt ist, fehlt es bereits an einem berechtigten Interesse.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: it requires that the alleged legitimate interest be lawful
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Diese Vorschrift verlangt zwar nicht, dass ein solches Interesse gesetzlich bestimmt wird, sie erfordert jedoch, dass das geltend gemachte berechtigte Interesse rechtmäßig ist.
[OFFEN] akquise/interessenabwaegung-o8.md :: Die DS-GVO verlangt eine Abwägung im konkreten Einzelfall zwischen den Interessen des Verantwortlichen bzw. Dritten und der betroffenen Person. Ein bloßes Abstellen auf abstrakte oder auf vergleichbare Fälle ohne Beachtung der Besonderheiten des Einzelfalls (das konkrete Werbevorhaben) genügt den Anforderungen der DS-GVO nicht.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: das konkrete Werbevorhaben
[OFFEN] akquise/interessenabwaegung-o8.md :: Abstellen auf abstrakte oder auf vergleichbare Fälle
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: konkrete juristische Person bzw. Firma mit ladungsfähiger Anschrift einschließlich E-Mail-Adresse
[OFFEN] akquise/interessenabwaegung-o8.md :: Kurzbezeichnungen (wie XY-Group) oder Postfachanschriften genügen den Transparenzanforderungen von Art. 12 Abs. 1 S. 1, Art. 13 Abs. 1 lit. a und Art. 14 Abs. 1 lit. a DS-GVO nicht.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: that provision lays down three cumulative conditions so that the processing of personal data is lawful, namely, first, the pursuit of a legitimate interest by the data controller or by a third party; second, the need to process personal data for the purposes of the legitimate interests pursued; and, third, that the interests or fundamental freedoms and rights of the person concerned by the data protection do not take precedence over the legitimate interest of the controller or of a third party
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: a wide range of interests is, in principle, capable of being regarded as legitimate
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: the Court has not ruled out the possibility that a commercial interest of the controller which consists in the promotion and sale of advertising space for marketing purposes may be regarded as a legitimate interest
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: a commercial interest of the controller … could constitute a legitimate interest, within the meaning of point (f) …, provided that it is not contrary to the law. It is, however, for the referring court to assess, on a case-by-case basis, whether such an interest exists, taking into account the applicable legal framework and all the circumstances of the case.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: the justifications provided for in that latter provision … must be interpreted restrictively
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Die Verarbeitung personenbezogener Daten zum Zwecke der Direktwerbung kann als eine einem berechtigten Interesse dienende Verarbeitung betrachtet werden.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Dass bei Direktwerbung Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO grundsätzlich als Rechtsgrundlage in Frage kommt, ist dem Erwägungsgrund (ErwGr.) 47 DS-GVO zu entnehmen
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: grundsätzlich … in Frage kommt
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Damit wird nicht festgestellt, dass die Direktwerbung ein berechtigtes Interesse sei, sondern es wird die Möglichkeit aufgezeigt, dass es sich dabei um ein berechtigtes Interesse handeln könnte.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Entgegen der Auffassung der Beklagten handelt es sich bei Erwägungsgrund 47 zur DSGVO nicht um einen acte claire
[OFFEN] akquise/interessenabwaegung-o8.md :: Direktwerbung ist ein berechtigtes Interesse
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: that condition requires the referring court to ascertain that the legitimate data processing interests pursued cannot reasonably be achieved just as effectively by other means less restrictive of the fundamental rights and freedoms of data subjects
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: … nur dann als im Sinne dieser Vorschrift zur Wahrung der berechtigten Interessen dieses Verantwortlichen erforderlich angesehen werden kann, wenn die Verarbeitung zur Verwirklichung des in Rede stehenden berechtigten Interesses absolut notwendig ist und sofern in Anbetracht aller relevanten Umstände die Interessen oder Grundrechte und Grundfreiheiten dieser Mitglieder gegenüber dem berechtigten Interesse nicht überwiegen.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: eine Verarbeitung personenbezogener Daten, die darin besteht, personenbezogene Daten der Mitglieder eines Sportverbands in Verfolgung des wirtschaftlichen Interesses des Verantwortlichen gegen Entgelt offenzulegen
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: in an equally efficient manner, … which it is however for the referring court to ascertain
[OFFEN] akquise/interessenabwaegung-o8.md :: beim ersten echten Listenbau nochmals gegen den dann konkreten Zweck zu prüfen
[OFFEN] akquise/interessenabwaegung-o8.md :: in der Menge der Kontaktzeile
[OFFEN] akquise/interessenabwaegung-o8.md :: Sofern es anhand eines Selektionskriteriums zu einer Einteilung in Werbegruppen kommt (z. B. anhand Postleitzahlen oder Alphabet), sich aber kein zusätzlicher Erkenntnisgewinn durch Individualisierung (Profiling) aus der Selektion ergibt, wird die Interessenabwägung in der Regel ebenfalls zugunsten des Verantwortlichen ausfallen.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: wegen der besonderen Auswirkungen dieser Werbeform (stärkere Belästigung/Störung)
[OFFEN] akquise/interessenabwaegung-o8.md :: Im B2B-Bereich stehen deshalb bei einem Nutzen von Telefonnummern für Werbeanrufe nicht von vorneherein überwiegende schutzwürdige Interessen der telefonisch anzusprechenden Gewerbetreibenden nach Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO entgegen.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Nutzen von Telefonnummern
[OFFEN] akquise/interessenabwaegung-o8.md :: auch … was objektiv vernünftigerweise erwartet werden kann und darf. Entscheidend ist daher auch, ob die Verarbeitung personenbezogener Daten für Zwecke der Direktwerbung in bestimmten Bereichen der Sozialsphäre typischerweise akzeptiert oder abgelehnt wird.
[OFFEN] akquise/interessenabwaegung-o8.md :: wird typischerweise hingenommen
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: the scale of the processing at issue and its impact on that person
[OFFEN] akquise/interessenabwaegung-o8.md :: Unsere Wellen sind klein und ausgewertet … es gibt keinen Millionenversand
[OFFEN] akquise/interessenabwaegung-o8.md :: Eine Welle von 300 gleichartigen Briefen mit demselben Fehler ist nicht 300 × 500 €, aber auch nicht 1 × 500 €
[OFFEN] akquise/interessenabwaegung-o8.md :: Nicht zulässig ist hingegen das Auslesen der Daten aus einem Online-Impressum zum Zweck der werblichen Nutzung. Zwar sind diese Daten allgemein zugänglich, sie werden jedoch nicht freiwillig, sondern aufgrund der gesetzlichen Verpflichtung zur Anbieterkennzeichnung gem. § 5 TMG bzw. § 18 MStV veröffentlicht. Mangels Freiwilligkeit der Veröffentlichung führt die Interessenabwägung gem. Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO regelmäßig dazu, dass die werbliche Nutzung so erhobener Daten unzulässig ist.
[OFFEN] akquise/interessenabwaegung-o8.md :: wir schreiben ja nur Briefe
[OFFEN] akquise/interessenabwaegung-o8.md :: gemeint sind nur Privatpersonen
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: dabei sind die vernünftigen Erwartungen der betroffenen Person, die auf ihrer Beziehung zu dem Verantwortlichen beruhen, zu berücksichtigen. Ein berechtigtes Interesse könnte beispielsweise vorliegen, wenn eine maßgebliche und angemessene Beziehung zwischen der betroffenen Person und dem Verantwortlichen besteht, z. B. wenn die betroffene Person ein Kunde des Verantwortlichen ist oder in seinen Diensten steht.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: ob eine betroffene Person zum Zeitpunkt der Erhebung der personenbezogenen Daten und angesichts der Umstände, unter denen sie erfolgt, vernünftigerweise absehen kann, dass möglicherweise eine Verarbeitung für diesen Zweck erfolgen wird.
[OFFEN] akquise/interessenabwaegung-o8.md :: stehen regelmäßig die Grundsätze einer fairen und transparenten Verarbeitung personenbezogener Daten nach Art. 5 Abs. 1 lit. a und Art. 12 Abs. 1 DS-GVO entgegen.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: im Nachgang zu einer Bestellung
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Zusendung von Werbung nach Bestellung und Selektion
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: the justifications … must be interpreted restrictively
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Insbesondere dann, wenn personenbezogene Daten in Situationen verarbeitet werden, in denen eine betroffene Person vernünftigerweise nicht mit einer weiteren Verarbeitung rechnen muss, könnten die Interessen und Grundrechte der betroffenen Person das Interesse des Verantwortlichen überwiegen.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: the interests and fundamental rights of the data subject may in particular override the interest of the data controller where personal data are processed in circumstances where data subjects do not reasonably expect such processing
[OFFEN] akquise/interessenabwaegung-o8.md :: Sofern personenbezogene Daten für Werbezwecke verwendet werden sollen, die ursprünglich nicht (auch) zu Zwecken der Werbung erhoben worden sind, sind zusätzlich die Regelungen des Art. 6 Abs. 4 DS-GVO (Zweckänderung) zu beachten. Um herauszufinden, ob der Werbezweck mit der ursprünglichen Zweckbestimmung vereinbar ist, müssen Verantwortliche eine sog. Kompatibilitätsprüfung durchführen, es sei denn, es liegt eine Einwilligung in die zweckändernde Nutzung vor
[OFFEN] akquise/interessenabwaegung-o8.md :: Wir informieren doch vorbildlich nach Art. 14.
[OFFEN] akquise/interessenabwaegung-o8.md :: Die Erwartungen der betroffenen Person können dabei nicht durch die nach der DS-GVO vorgesehenen Pflichtinformationen (Art. 13, 14 DS-GVO) erweitert werden. Während die Nicht-oder Schlechterfüllung der Informationspflicht das Abwägungsergebnis also aus Sicht des Verantwortlichen negativ beeinflusst, hat die ordnungsgemäße Erfüllung der Informationspflichten keine Auswirkung auf die Abwägung der Interessen.
[OFFEN] akquise/interessenabwaegung-o8.md :: Es hat ja niemand widersprochen.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Drittens schließlich kann eine grundsätzliche Zulässigkeit der Direktwerbung per Briefpost keinesfalls aus einem fehlenden Widerspruch der betroffenen Person abgeleitet werden. Das etwaige Bestehen eines Widerspruchsrechts setzt nämlich das Vorliegen einer rechtmäßigen Verarbeitung voraus
[OFFEN] akquise/interessenabwaegung-o8.md :: Die Aufsicht sagt doch, B2B sei unproblematisch.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Nutzen von Telefonnummern
[OFFEN] akquise/interessenabwaegung-o8.md :: Eine bloße Sachbezogenheit (z. B. Werbung für Büroartikel, Telefon-und Stromanbieter oder auch die entgeltliche Vermittlung von Aufträgen) genügt jedoch nicht, um von einem Einverständnis des angerufenen Unternehmers auszugehen
[OFFEN] akquise/interessenabwaegung-o8.md :: für den Anruf ein konkreter und aus dem Interessenbereich des Anzurufenden herzuleitender Grund vorliegt
[OFFEN] akquise/interessenabwaegung-o8.md :: der zuständigen Aufsichtsbehörden
[OFFEN] akquise/interessenabwaegung-o8.md :: 0 Treffer in beiden Dokumenten
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO sind Marktverhaltensregelungen in diesem Sinn, weil und soweit sie die Zulässigkeit der Datenverarbeitung zum Zwecke der Werbung regeln
[OFFEN] akquise/interessenabwaegung-o8.md :: schließt seine Befugnis ein, Verstöße gegen die [DSGVO] wettbewerbsrechtlich zu verfolgen
[OFFEN] akquise/interessenabwaegung-o8.md :: keiner der beiden Wege dazu [führt], dass im Sinne eines Automatismus jeder Verstoß gegen die DSGVO eine unlautere Handlung darstellt
[OFFEN] akquise/interessenabwaegung-o8.md :: Der gesamte UWG-Unlauterkeitsteil — der Grund 2 trug — beruht auf dem Verbraucherleitbild und ist auf einen gewerblichen Adressaten nicht übertragbar.
[OFFEN] akquise/interessenabwaegung-o8.md :: Aufmachung ist kein Thema für uns
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: § 3 Abs. 1 UWG … §§ 5 Abs. 1 und Abs. 2, 5a Abs. 1 bis Abs. 3 UWG
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: it is also necessary … that the controller comply with all its other obligations under that regulation
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: falls die personenbezogenen Daten zur Kommunikation mit der betroffenen Person verwendet werden sollen, spätestens zum Zeitpunkt der ersten Mitteilung an sie
[OFFEN] akquise/interessenabwaegung-o8.md :: Es kommt also darauf an, welche Bedingung zuerst eintritt.
[OFFEN] akquise/interessenabwaegung-o8.md :: — insoweit von der DSGVO nicht vorgesehene — Karenzfrist für eine Nachlieferung der geschuldeten Informationen
[OFFEN] akquise/interessenabwaegung-o8.md :: ausdrückliches Verwerfen
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: aus welcher Quelle die personenbezogenen Daten stammen und gegebenenfalls ob sie aus öffentlich zugänglichen Quellen stammen
[OFFEN] akquise/interessenabwaegung-o8.md :: Erfolgt die Information in Verbindung mit der ersten Werbezusendung, sind beide Bestandteile (Information und Werbetext) klar voneinander zu trennen und die Information (einschließlich des Hinweises auf das Werbewiderspruchsrecht) entsprechend deutlich herauszustellen.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Werden personenbezogene Daten verarbeitet, um Direktwerbung zu betreiben, so hat die betroffene Person das Recht, jederzeit Widerspruch gegen die Verarbeitung sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Die betroffene Person muss spätestens zum Zeitpunkt der ersten Kommunikation mit ihr ausdrücklich auf das in den Absätzen 1 und 2 genannte Recht hingewiesen werden; dieser Hinweis hat in einer verständlichen und von anderen Informationen getrennten Form zu erfolgen.
[OFFEN] akquise/interessenabwaegung-o8.md :: Es ist nur dann von einer wirksamen Information im Sinne des Gesetzes auszugehen, wenn eine betroffene Person beim üblichen Umgang mit der Werbebotschaft … von dem Hinweis auf das Widerspruchsrecht Kenntnis erlangt.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: muss deutlich abgesetzt werden, beispielsweise durch unterschiedliche Überschriften
[OFFEN] akquise/interessenabwaegung-o8.md :: Insbesondere müssen eine unverzügliche Bearbeitung auch von formlos eingehenden Widersprüchen gewährleistet und für Werbemaßnahmen jederzeit aktuelle Datenbestände verwendet werden.
[OFFEN] akquise/interessenabwaegung-o8.md :: Wenn konkrete Werbeaktionen angelaufen sind …, kann es im Einzelfall für das Unternehmen unzumutbar sein, einen zwischenzeitlich eingegangenen Werbewiderspruch noch mit erheblichem Aufwand umzusetzen, z. B. einen bestimmten bereits adressierten Brief aus einer großen Menge heraus zu sortieren.
[OFFEN] akquise/interessenabwaegung-o8.md :: Auch im Fall von postalischer Werbung ist zu beachten, dass keine neuen Verarbeitungen (wie z. B. neue Druckaufträge) gestartet werden dürfen.
[OFFEN] akquise/interessenabwaegung-o8.md :: Für den Brief gilt die einzige Erleichterung der ganzen Handreichung — ein bereits adressierter Brief muss nicht aus dem Stapel gezogen werden
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: aus einer großen Menge
[OFFEN] akquise/interessenabwaegung-o8.md :: die einzige Erleichterung der ganzen Handreichung
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: die dortigen Erleichterungen
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: in jedem Fall innerhalb eines Monats nach Eingang des Antrags zurückzumelden
[OFFEN] akquise/interessenabwaegung-o8.md :: ⚠️ OFFEN — O-2 … VVT-Eintrag unvollständig
[OFFEN] akquise/interessenabwaegung-o8.md :: nie angeschriebene Datensätze früher löschen?
[OFFEN] akquise/interessenabwaegung-o8.md :: nur wenn vergewissert ist das es follow ups gab was nie passieren > darf ist das leads aus unserem Raster fallen, ohne das diese > Anständig bearbeitet wurden und ein Vertragsabschluss ausgeschlossen > sit
[OFFEN] akquise/interessenabwaegung-o8.md :: Abschluss ausgeschlossen, weil …
[OFFEN] akquise/interessenabwaegung-o8.md :: Die Entscheidung trifft der User. Diese Session entscheidet sie nicht.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: die Dauer, für die die personenbezogenen Daten gespeichert werden oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer
[OFFEN] akquise/interessenabwaegung-o8.md :: Der Zeitablauf entscheidet daher mit über die Frage, ab wann die anfänglich nach Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO überwiegenden Werbeinteressen hinter die Interessen der betroffenen Person am Ausschluss einer werblichen Nutzung zurücktreten.
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Die Erfüllung dieser Verpflichtung erfordert letztlich Vorkehrungen, die bereits vor dem ersten Verarbeitungsschritt in die Wege geleitet sein müssen. Ansonsten bestünde nämlich die Gefahr, dass mit der Datenverarbeitung begonnen wird, obwohl nach den objektiven Umständen die Voraussetzungen einer rechtmäßigen Datenverarbeitung nicht vorliegen. … Bloße Absichten des Verantwortlichen können, wie sich aus Art. 5 Abs. 2 DSGVO ergibt, eine Datenverarbeitung nicht rechtfertigen.
[OFFEN] akquise/interessenabwaegung-o8.md :: Die Frist läuft ab LISTENAUFBAU
[OFFEN] akquise/interessenabwaegung-o8.md :: wir entscheiden die Frist, bevor wir losschicken
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Bei dieser Prüfung sind grundsätzlich alle Umstände des Einzelfalls zu berücksichtigen, weshalb eine Datenverarbeitung auch für rechtmäßige Werbemaßnahmen unzulässig sein kann
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Für zulässigerweise beim Betroffenen erhobene Kontaktdaten
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: keine explizite Befristung
[OFFEN] akquise/interessenabwaegung-o8.md :: Die Entscheidung trifft der User. Diese Session entscheidet sie nicht … Bis dahin bleibt § 8 lit. f offen und der erste Versand gesperrt.
[OFFEN] akquise/interessenabwaegung-o8.md :: Im Sinne des Erleichterungsgebots nach Art. 12 Abs. 2 S. 1 DS-GVO ist für die Einlegung des Werbewiderspruchs auch eine elektronische Kommunikationsmöglichkeit anzubieten.
[OFFEN] akquise/interessenabwaegung-o8.md :: Wer eine E-Mail-Adresse bereitstellt, muss durch technisch-organisatorische Maßnahmen gewährleisten, dass E-Mails, die sich auf Betroffenenrechte beziehen, entweder nicht im Spam-Ordner landen oder dort jedenfalls dennoch umgehend zur Kenntnis genommen werden (Art. 24 DS-GVO).
[OFFEN] akquise/interessenabwaegung-o8.md :: möglichst genau zu benennenden kurzen Zeitraum[s]
[OFFEN] akquise/interessenabwaegung-o8.md :: ausdrücklich und allein eine Löschung aller Daten aus der Werbesperrdatei
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: eventuell wieder Werbung erhalten kann
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: revisionsfeste Dokumentation der tatsächlich genutzten Texte mit Versionsnummer
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: das konkrete Werbevorhaben
[OFFEN] akquise/interessenabwaegung-o8.md :: kostenloses Abwägungsargument
[OFFEN] akquise/interessenabwaegung-o8.md :: um das UWG-Merkmal erkennbar, hier um einen DSGVO-Abwägungsfaktor
[OFFEN] akquise/interessenabwaegung-o8.md :: beide Aussagen gelten nebeneinander
[OFFEN] akquise/interessenabwaegung-o8.md :: das klären wir, bevor wir losschicken
[OFFEN] akquise/interessenabwaegung-o8.md :: maßgebliche[n] und angemessene[n] Beziehung
[OFFEN] akquise/interessenabwaegung-o8.md :: die Rechtsmatrix führt curia noch als nutzbare amtliche Quelle
[OFFEN] akquise/interessenabwaegung-o8.md :: Mindestumfang, der zusätzlich IN das Anschreiben gehört
[ABGEBAUT ROHBELEG] akquise/interessenabwaegung-o8.md :: Diese Orientierungshilfe thematisiert nicht das Thema Adresshandel
[OFFEN] akquise/interessenabwaegung-o8.md :: die Größenordnung des Akquiseplans
[OFFEN] akquise/interessenabwaegung-o8.md :: Alle tragenden Zitate
[OFFEN] akquise/interessenabwaegung-o8.md :: stichprobenhaft, folgende Stellen
fund/wettbewerbsbild.md: 228 von 467 offen | 239 abgebaut | davon Rohbeleg-bestaetigt: 239
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
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Über 3.400 zufriedene Hotels in 30 Ländern
[OFFEN] fund/wettbewerbsbild.md :: Currently, more than 3,400 hotels across 30 countries rely on this advanced solution. And also more than 500 apaleo installs happened already.
[OFFEN] fund/wettbewerbsbild.md :: Derzeit werden von Straiv folgende Lösungen angeboten: Online Check-in & -out /Guest Messaging /Digital Concierge /Upselling
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Variante 1: Der Tabletop Kiosk
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Variante 2: Der Indoor Kiosk
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Variante 3: Der Outdoor Kiosk … Wetterfestes Terminal für digitale Gästeregistrierung und Keycard-Ausgabe im Außenbereich.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Walk-in-Funktion (für ausgewählte PMS)
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Integrierte Zahlungsabwicklung
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Die Anschaffungskosten schrecken dich ab? Wir bieten dir einfache Finanzierungsmöglichkeiten.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: spezialisierten Hardware-Partnern wie Kiosk Embedded Systems (an Acer Group Company)
[OFFEN] fund/wettbewerbsbild.md :: Straivs Kiosk-Angebot läuft außerhalb des Store-Listings
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: keyBoy ist ein automatisches Schlüsselausgabesystem für Hotels. Gäste checken rund um die Uhr flexibel ein und erhalten ihren Schlüssel kontaktlos per Code über einen Schlüsselsafe.
[OFFEN] fund/wettbewerbsbild.md :: Die neue Integration von Straiv und keyBoy schließt genau diese Lücke. Sie ermöglicht einen vollautomatisierten Online Check-in, während der physische Schlüssel weiterhin das vertraute Element der Türöffnung bleibt
[OFFEN] fund/wettbewerbsbild.md :: ohne direkt in eine komplett neue Schließinfrastruktur investieren zu müssen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: 100% rechtskonform & vollautomatisch mit dem PMS synchronisiert
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Datenerfassung via Gast-Smartphone, Rezeptions-Tablet oder Kiosk-Terminal
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Ermögliche deinen Gästen eine vollautonome Anreise über dein Kiosk-Terminal in der Lobby. Auch hier wird der digitale Meldeschein nahtlos ausgefüllt, unterschrieben und direkt im PMS hinterlegt.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Durch Verfahren wie die einfache digitale Unterschrift oder erweiterte SCA-Verfahren (Strong Customer Authentication) wird der Meldeschein gesetzeskonform unterzeichnet.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Seit dem 1. Januar 2025 gilt in Deutschland der Wegfall der allgemeinen Meldepflicht im Hotel für Gäste mit deutscher Staatsangehörigkeit.
[OFFEN] fund/wettbewerbsbild.md :: Anspruch, Mechanik ungeprüft
[OFFEN] fund/wettbewerbsbild.md :: WhatsApp, text message, or email
[OFFEN] fund/wettbewerbsbild.md :: Straivs customer support processes havent yet been verified by Hotel Tech Report
[OFFEN] fund/wettbewerbsbild.md :: This vendor has not met the minimum criteria for the Certificate of Excellence
[OFFEN] fund/wettbewerbsbild.md :: Backend: Touchpoint/Module selection is often confusing; the setup was very time-consuming because if I change something in the backend in German, I also have to change it in English (no automatic translation).
[OFFEN] fund/wettbewerbsbild.md :: The product has a good basic approach, but unfortunately it is far from mature and after only 3 months of operation, numerous individual components have failed.
[OFFEN] fund/wettbewerbsbild.md :: Instead of putting all their effort into the sales team, they should be focusing much more on their hotel partners.
[OFFEN] fund/wettbewerbsbild.md :: * Very easy setup. * Services are always online. * Backend is user friendly … * Support is amazing.
[OFFEN] fund/wettbewerbsbild.md :: unter zwei geratenen Slugs nicht gefunden
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: die Anzahl seiner Zimmer die bei Vertragsabschluss vereinbarte Anzahl von Zimmern … überschreitet
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Eine Rückerstattung bei eventuell sinkender Zimmeranzahl ist bei einer Mindestlaufzeit ausgeschlossen.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: einen einmaligen und/oder wiederkehrenden Betrag in Abhängigkeit vom gewählten Paket und dem vereinbarten Zahlungsturnus. Soweit nicht abweichend vereinbart, zahlt der Kunde die jeweilige Vergütung jährlich im Voraus.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: stellt Straiv dem Kunden mögliche einmalige Gebühren für das Onboarding und die Einrichtung der Software in Rechnung. Die Höhe … ist in der aktuell gültigen Paketübersicht aufrufbar.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: die jeweils vereinbarte prozentuale Provision pro Transaktion
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Sämtliche Preise verstehen sich zuzüglich der gesetzlich gültigen Mehrwertsteuer.
[OFFEN] fund/wettbewerbsbild.md :: Alle Straiv-Beträge sind damit netto
[OFFEN] fund/wettbewerbsbild.md :: Wettbewerbsmodell milder als es ist
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Straiv ist berechtigt, die vereinbarte Vergütung der Leistungen mit einer Ankündigung per E-Mail von drei Monaten zum Monatsende zu erhöhen. Der Kunde hat … das Recht, den jeweiligen Einzelauftrag innerhalb einer Frist von sechs Wochen zum Wirksamwerden der Preisanpassung zu kündigen.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Im Fall einer gewählten Mindestlaufzeit sind Preiserhöhungen erst 12 Monate nach Vertragsbeginn möglich
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: mit einer Frist von drei Monaten zum Ende der jeweiligen Laufzeit
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Frist von vier Wochen zum Monatsende
[OFFEN] fund/wettbewerbsbild.md :: 5 % Kommission auf vermitteltes Upselling
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Es fällt eine Kommission von 5 % ausschließlich auf tatsächlich über das System verkaufte Zusatzleistungen und Upgrades an.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: möglicherweise eine Gebühr … und … eine Provision
[OFFEN] fund/wettbewerbsbild.md :: Stuttgart, 26. Februar 2026
[OFFEN] fund/wettbewerbsbild.md :: da wir 2026 verstärkt expandieren und internationalisieren. Wir fokussieren uns aktuell stark auf Frankreich und die Benelux-Region. Sowohl in diesen neuen Märkten als auch in unseren Kernmärkten Deutschland, Österreich und Schweiz…
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Vom Pioniergeist zum Marktführer
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
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Digital Registration Form
[OFFEN] fund/wettbewerbsbild.md :: Hotels, Pensionen & Apartmenthäuser
[OFFEN] fund/wettbewerbsbild.md :: automatisch an die Meldebehörde übermittelt
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Von der Einführung bis zum laufenden Betrieb begleiten wir Sie zuverlässig und persönlich
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: 24/7 Support direkt aus Hannover
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
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: All the services you need. Through a provider.
[OFFEN] fund/wettbewerbsbild.md :: Montage und Schulung — Aufbau vor Ort und Einweisung Ihres Teams sind Teil des Preises
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Von der Einführung bis zum laufenden Betrieb begleiten wir Sie zuverlässig und persönlich
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: 24/7 Support direkt aus Hannover
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Hardware & Hosting als Service
[OFFEN] fund/wettbewerbsbild.md :: genau die Grenze, auf der unsere USP-Säule 2 steht
[OFFEN] fund/wettbewerbsbild.md :: genau unser Betreibermodell-Feld
[OFFEN] fund/wettbewerbsbild.md :: Straiv ist mit 18 Leuten verwundbar
[OFFEN] fund/wettbewerbsbild.md :: Hotels use voice kiosks for check-in, concierge services, and wayfinding. Guests can say Im checking in or Where is the fitness centre? and receive immediate assistance. This is especially valuable for international travellers who may not be comfortable with English text on a screen.
[OFFEN] fund/wettbewerbsbild.md :: Self-Service Kiosks at … hospitality … by using voice interaction
[OFFEN] fund/wettbewerbsbild.md :: Our on-premise kiosk solution places conversational digital humans into the real world … from airports and hotels
[OFFEN] fund/wettbewerbsbild.md :: voice-enabled kiosks offer guests access to always-available concierge services
[OFFEN] fund/wettbewerbsbild.md :: Kein Hotel-Check-in-Anbieter mit belegtem Einsatz einer Sprachbedienung am Gerät (Stand 09.08.2026; Suchraum: DACH-Hotelsoftware + englischsprachiger Kiosk-/Digital-Human-Markt).
[OFFEN] fund/wettbewerbsbild.md :: Der Automat gibt mechanische Schlüssel und Chips aus und nimmt sie zurück. An den Türen muss dafür nichts geändert werden. Alternativ schaltet er Smartlocks direkt frei, dann bekommt der Gast einen Code oder den Schlüssel aufs Handy. Beides läuft auch parallel.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: keyBoy ist ein automatisches Schlüsselausgabesystem für Hotels. Gäste checken rund um die Uhr flexibel ein und erhalten ihren Schlüssel kontaktlos per Code über einen Schlüsselsafe.
[OFFEN] fund/wettbewerbsbild.md :: ohne direkt in eine komplett neue Schließinfrastruktur investieren zu müssen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: No full hardware replacement required … compatible with leading lock brands, including Vingcard (ASSA ABLOY), dormakaba, Salto, and more.
[OFFEN] fund/wettbewerbsbild.md :: die Pension behält ihr bestehendes Schlüssel-/Transpondersystem und bekommt nur eine günstige Ausgabe-Schicht obendrauf — kein neues Schließsystem
[OFFEN] fund/wettbewerbsbild.md :: Premium 60 /Große Hotels
[OFFEN] fund/wettbewerbsbild.md :: Je größer das Haus, desto günstiger das Zimmer
[OFFEN] fund/wettbewerbsbild.md :: nicht gefunden, nicht gezielt gesucht
[OFFEN] fund/wettbewerbsbild.md :: Mitarbeiter-Angaben … nur für Kunden unseres Premium Service
[OFFEN] fund/wettbewerbsbild.md :: Uns liegen keine Informationen über den Umsatz vor.
[OFFEN] fund/wettbewerbsbild.md :: unter zwei geratenen Slugs nicht gefunden
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Kiosk Embedded Systems (an Acer Group Company)
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: einfache digitale Unterschrift oder erweiterte SCA-Verfahren
[OFFEN] fund/wettbewerbsbild.md :: Straiv: 2.500+ Hotels in 29 Ländern
[OFFEN] fund/wettbewerbsbild.md :: Straivs Kiosk-Angebot läuft außerhalb des Store-Listings
[OFFEN] fund/wettbewerbsbild.md :: Kiosk & self-service check-in
[OFFEN] fund/wettbewerbsbild.md :: Kiosk-Feld im Store: 9 Anbieter, kein deutscher
[OFFEN] fund/wettbewerbsbild.md :: Auf dem Terminal-Pfad bietet im Store niemand eine deutsche Meldeschein-Strecke
[OFFEN] fund/wettbewerbsbild.md :: Voice am Gerät bietet niemand
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Finanzierungsmöglichkeiten
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: mehr als 50 % des Gesamtumsatzes
[OFFEN] fund/wettbewerbsbild.md :: In begründeten Fällen kann die Bewilligungsbehörde … eine befristete Ausnahmegenehmigung erteilen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: through our Certified Partners
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Hotel-Operations, Prozessoptimierung und Guest Journey … Remote-Lösungen für das Hotelmanagement
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Die führende Guest-App für Hotels
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Arbeitskreises ITK und Digitalisierung
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
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Einführung von Buchungsmaschinen & PMS Systemen
[OFFEN] fund/wettbewerbsbild.md :: Ist-Analyse aller Abteilungen, Direktbuchungs-/Vertriebsoptimierung
[OFFEN] fund/wettbewerbsbild.md :: Buchungsstrecke/Website-Distribution
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Hotelberatung und Hotelvertrieb für Privathotels
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Hotel Online-Marketing
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Optimierung Ihres Hotelvertriebs und Online-Marketings
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Ich analysiere die Ist-Situation, entwickle mit Ihnen die passende Vertriebsstrategie
[OFFEN] fund/wettbewerbsbild.md :: fast alle sind Wettbewerber
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: System-Audit & IST-Analyse
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Anforderungsanalyse & Empfehlung
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Ausschreibung & Anbietervergleich
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Implementierungsbegleitung & Training
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Wir beraten neutral, ohne Provision, ohne Produktbindung
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Wir erhalten keine Provision von Systemanbietern.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Hotelmarketing-Beratung … ab etwa 1.500 Euro monatlich für ein begleitendes Retainer-Modell mit wöchentlicher Abstimmung, monatlichem Besuch und laufender Koordination
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: ab 3 Sterne und ca. 1 Mio. Euro Jahresumsatz … bis zu Hotelketten
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Mit neuen Schnittstellen zum PMS ändern wir das Spiel: Wir pushen die echten Verfügbarkeiten, Zimmerpreise und Raten Ihres Hotels direkt und sicher in die führenden KI-Plattformen
[OFFEN] fund/wettbewerbsbild.md :: eine geschützte und moderne Verbindung über das Model Context Protocol (MCP)
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Ihre tagesaktuellen Raten und freien Zimmer direkt aus Ihrer Buchungsmaschine
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Technische Verknüpfung der Hotel IBE
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Einführung und Weiterentwicklung von CRM-und Loyalty-Prozessen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Wir helfen Privathotels, mehr Direktbuchungen zu generieren, unabhängiger von OTAs zu werden
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Privathotels, Ferienhotels, Boutiquehotels, Wellnesshotels und Landhotels
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: betreuen nur maximal 5 Hotels zeitgleich
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Einführung von Buchungsmaschinen & PMS Systemen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Wir arbeiten mit Mews, OnePageBooking und HubSpot
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Seit 2022 … bereits über 8.000 Direktbuchungen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Software, Marketing, Consulting
[OFFEN] fund/wettbewerbsbild.md :: Keine Überschneidung mit unserem Produkt
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Mit der Privacy App erspart ihr euch den Datenschutz-Papierkram beim Check-in, die Einwilligung holt ihr euch einfach digital ein.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Online-Zahlungsaufforderung für Check-out vor der Abreise
[OFFEN] fund/wettbewerbsbild.md :: nahtloser PMS-& Kassensystem-Integration
[OFFEN] fund/wettbewerbsbild.md :: nativ an eure Buchungsstrecke an, um Preise und Verfügbarkeiten in Echtzeit darzustellen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Agentic Revenue Management System
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Property Management Systems oder Channel Manager
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Sofern nichts anderes vereinbart, gilt ein Stundensatz in Höhe von 115,00 €, zuzüglich Nebenkosten und MwSt., vereinbart
[OFFEN] fund/wettbewerbsbild.md :: in Einheiten von je 15 Minuten und aufgerundet
[OFFEN] fund/wettbewerbsbild.md :: ~70 Partner in sechs Kategorien
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Zahlungsanbieter Schnittstellen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: through our Certified Partners
[OFFEN] fund/wettbewerbsbild.md :: ~70 Partner in sechs Kategorien
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Storno-& Buchungsbedingungen
[OFFEN] fund/wettbewerbsbild.md :: ~70 Partner in sechs Kategorien
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Gemeinsam mit der … Consulting-Firma Kohl & Partner hat Brandnamic die Leitung und Verwaltung von zwei Kooperationsgruppen inne: Belvita Leading Wellnesshotels Südtirol und Familienhotels Südtirol
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: ab etwa 1.500 Euro monatlich
[OFFEN] fund/wettbewerbsbild.md :: 3–6 % des Umsatzes für Vertrieb und Marketing … in der Ferienhotellerie
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: 10 € zurück pro investiertem Euro
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Erfahrungswerte, nicht … garantierte Ergebnisse
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: speziell für größere 4-und 5-Sterne-Hotels
[OFFEN] fund/wettbewerbsbild.md :: eigene Software/unsere eigene/selbst entwickelt
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Digitalisierungsberatung für Hotels … von PMS über Kassensysteme bis zur digitalen Gästereise
[OFFEN] fund/wettbewerbsbild.md :: kleine Hotels, Pensionen und Gasthöfe
[OFFEN] fund/wettbewerbsbild.md :: Auswahl, Integration, Setup und laufende Steuerung der Systeme
[OFFEN] fund/wettbewerbsbild.md :: Das ist ein schwaches Negativ: Danach wurde in dieser Runde nicht gezielt gesucht; es ist ein Nebenbefund der Seitenlektüre.
[OFFEN] fund/wettbewerbsbild.md :: Für das Technik-Segment stimmt das weiterhin
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Digitaler Checkin-und Checkout-Prozess (… NFC Zimmerschlüssel oder Zahlenschlösser …)
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: BAFA-Beratung Hotel & Gastronomie: 50-70 % Förderung sichern
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: … Eingetragen in die KfW-Beraterdatenbank, bei der BAFA für Unternehmensberatungen (ID: 130986) Akkreditiert vom Bundesministerium für Arbeit und Soziales für systemisches Coaching im Programm INQA (Initiative neue Qualität der Arbeit) …
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Zertifizierter Sachverständiger für das Hotel-, Tourismus-& Gaststättengewerbe (DGuSV, Hospitality Consulting);
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: ; Zulassung als Unternehmensberater in Österreich gemäß § 373a Abs. 5 Z1 GewO, Hospitality Consulting
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Systemisches Coaching (INQA)
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Akkreditiert vom Bundesministerium für Arbeit und Soziales als systemischer Coach im Programm INQA (IC2336101) mit 80 % Zuschuss.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Initiative neue Qualität der Arbeit
[OFFEN] fund/wettbewerbsbild.md :: 11.600 Zeichen und 35 Blockelemente
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: für systemisches Coaching
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Digitalisierung & Prozesse: Systemlandschaft, Schnittstellen, Standards, Prozesszeiten, operative Qualität.
[OFFEN] fund/wettbewerbsbild.md :: max. 3.500 Euro (max. 5 Beratungstage) /50 % oder 80 %
[OFFEN] fund/wettbewerbsbild.md :: max. 14.400 Euro (12 Beratungstage) /80 %
[OFFEN] fund/wettbewerbsbild.md :: Förderzuschüssen bis zu 80 %
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Die Beratung darf erst nach Erhalt des BAFA-Informationsschreibens beginnen; als Beginn gilt bereits der Abschluss eines Beratungsvertrags.
[OFFEN] fund/wettbewerbsbild.md :: Antragsteller ist immer das Unternehmen des Kunden, nicht heyPensio
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: inhabergeführte Privathotels, Boutique-Hotels und kleine Hotelgruppen in Deutschland, Österreich und der Schweiz – typischerweise zwischen 30 und 300 Zimmern
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Bei weniger als 30 Zimmern fehlt die Projektgrundlage. Ab 300 Zimmern beginnen Konzernstrukturen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Prozessoptimierung, Hotelcontrolling nach USALI-Standard, Digitalisierung und Systemintegration
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Mein Ansatz: Beratung, die vor Ort stattfindet
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Ich arbeite allein. Das ist eine Entscheidung, keine Verlegenheit.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Wer mich beauftragt, arbeitet mit mir, nicht mit einem Büro.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Was hier steht, steht nicht auf der Hauptseite.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Ich arbeite allein – bewusst.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Ich berate herstellerunabhängig. Ich empfehle keine Systeme, an deren Verkauf ich verdiene
[OFFEN] fund/wettbewerbsbild.md :: familiengeführte Betriebe, Gastgeber und Erlebnisanbieter
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Digitalisierungs-beratung für Hotels – seit über 30 Jahren …
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: … Ihr zuverlässiger Partner
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: … wir kooperieren mit führenden Spezialisten wie ASA Hotelsoftware, Guestline, HotelNetSolutions, Straiv, Matrix POS, Kiosk.eu, Brandnamic, moreProfit und vielen weiteren, die in ihren Bereichen unschlagbar sind.
[OFFEN] fund/wettbewerbsbild.md :: Unterstützung Softwareauswahl · Begleitung Softwareimplementierung · Vertragsverhandlungen
[OFFEN] fund/wettbewerbsbild.md :: laufend (Monatsspalte)
[OFFEN] fund/wettbewerbsbild.md :: ob sie neu sind, ist nicht feststellbar — der Bestand führt sie nur nicht
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Erstellung neuer Website-Texte
[OFFEN] fund/wettbewerbsbild.md :: 7 Wertproben je 1 Treffer
[OFFEN] fund/wettbewerbsbild.md :: Cookie-Banner /10€ /10€ /10€ /Anfrageformular /Integration Buchungsmaschine /10€
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Römerweg 9, 78564 Reichenbach
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: melevo Sebastian Mauch, Römerweg 9, 78564 Reichenbach
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Hauptstraße 6, 78564 Reichenbach
[OFFEN] fund/wettbewerbsbild.md :: Anschriften für Außendokumente über MEHRERE unabhängige Stellen belegen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: endet nicht mit einem 40-seitigen Bericht, der ungelesen im Regal steht
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: keine Präsentationen die in der Schublade landen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Beraten die TH-Experts unabhängig von Softwareanbietern?
[OFFEN] fund/wettbewerbsbild.md :: kein Anbieter nennt Zahlen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Es handelt sich hier um reale annäherungsweise Preisbeispiele – für ein individuelles Angebot kontaktiert uns.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Inhabergeführtes Hotel mit 20 Zimmern, 3 Sterne
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: einer einmaligen Einrichtungsgebühr und einer monatlichen Nutzungspauschale
[OFFEN] fund/wettbewerbsbild.md :: im geprüften Seitenbestand nicht gefunden
[OFFEN] fund/wettbewerbsbild.md :: Das #1 Hotel-CRM in DACH\*
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: ihre Daten in Stammgäste zu verwandeln
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Updates und Weiterentwicklungen eurer Module? Inklusive. Euer persönlicher Betreuer? Auch inklusive.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Wenn du möchtest, dass Smart Host dir Handgriffe in Smart Host selber abnimmt, haben wir dafür das Service Plus Paket.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Eure erste Kampagne erstellen wir gemeinsam
[OFFEN] fund/wettbewerbsbild.md :: Es fehlt eine wichtige Integration? Sprechen Sie mit unserem Team.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: auch ohne eigene RMS-Software
[OFFEN] fund/wettbewerbsbild.md :: dediziertem Revenue Manager
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Monatspauschalen ab EUR /CHF 879 plus einmalige Setup-Gebühr von EUR /CHF 1.000
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Mindestlaufzeit 3 Monate
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: und initialen Kosten für Analyse
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Preise in CHF pro Monat exkl. MWST und initialen Kosten für Analyse
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Preis: von 792 € bis 990 € zzgl. 19% MwSt.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: von 842 € bis 990 € zzgl. MwSt.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: von 792 € bis 990 € zzgl. MwSt.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Mit Jahreskosten ab 60.000 € – zuzüglich Benefits, Schulungen und Systemlizenzen – ist das eine erhebliche Investition für privat geführte Hotels.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: kostet eine interne Revenue-Manager-Stelle inklusive Lohnnebenkosten und Tools EUR /CHF 90.000–130.000 pro Jahr.
[OFFEN] fund/wettbewerbsbild.md :: sie weichen um mehr als das Doppelte voneinander ab
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Inhouse vs. RevenueRise
[OFFEN] fund/wettbewerbsbild.md :: betreuter Betrieb statt eigenes Personal
[OFFEN] fund/wettbewerbsbild.md :: Expertenpartnerschaft … dedizierter Revenue Manager
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: persönlicher Betreuer … inklusive
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Während andere Tools verkaufen, arbeiten bei uns echte Senior Revenue Management Experten
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: ab etwa 15 Zimmern
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Dienstleistungs-und Beratungsunternehmen für die Privat-Hotellerie und Gastronomie, gegründet 1996
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Kennzahlen der Deutschen Privathotellerie
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Revenue-& Profit-Management für Boutique-und inhabergeführte Hotels
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: wir beraten neutral ohne Provisionsinteresse
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
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: All the services you need. Through a provider.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Full operational responsibility
[OFFEN] fund/wettbewerbsbild.md :: Analysis of the hotel tech stack /Evaluation of software /Project management /Implementation /Readjustment and support
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: This is based on the size of the properties (number of rooms) or the number of hotels for groups.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Certified Mews Deployment Partner
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Exklusives Angebot für Mitglieder von HotellerieSuisse
[OFFEN] fund/wettbewerbsbild.md :: 360-Grad IT-Service für die Hotellerie — … Beratung zur Verbesserung Ihrer digitalen Infrastruktur und Abläufe … Umsetzung und Einführung neuer IT-Lösungen und stehen Ihnen mit unserem Support-Team während des laufenden Betriebs zur Verfügung.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Training vor Ort & remote
[OFFEN] fund/wettbewerbsbild.md :: Support & Managed Services — 1st Level Support, 2nd Level Support
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: All-in-One ist die größte Illusion der Hotelsoftware-Branche. … Die Zukunft der Hotellerie ist nicht All-in-One, Sie ist All-in-Partners.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Umsetzungsbegleitung ist optional
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Die Umsetzungsbegleitung ist optional
[OFFEN] fund/wettbewerbsbild.md :: im geprüften Suchraum nicht gefunden
[OFFEN] fund/wettbewerbsbild.md :: Drei unabhängige Schwellen
[OFFEN] fund/wettbewerbsbild.md :: genau ein Anbieter nennt eine beidseitige Zimmergrenze …, einer eine Umsatzschwelle … Zwölf beschreiben qualitativ oder gar nicht
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Bei weniger als 30 Zimmern fehlt die Projektgrundlage.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: typischerweise 30 bis 300 Zimmer
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Für welche Hotelgrößen arbeiten Sie?
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Bei weniger als 30 Zimmern fehlt häufig die Grundlage für strukturierte Beratungsprojekte.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: strukturierte Beratungsprojekte
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Hotels ab etwa 1 Mio. Euro Jahresumsatz
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: This is based on the size of the properties (number of rooms) or the number of hotels for groups.
[OFFEN] fund/wettbewerbsbild.md :: Eignet sich die Beratung auch für kleine Hotels und Pensionen? — Ja.
[OFFEN] fund/wettbewerbsbild.md :: Kleine Hotels, Pensionen und Gasthöfe benötigen häufig andere Funktionen und Abläufe als größere Häuser
[OFFEN] fund/wettbewerbsbild.md :: ein AI-nativer Betrieb senkt genau diesen Aufwand
[OFFEN] fund/wettbewerbsbild.md :: bestätigt die MKT-R3-Messung
[OFFEN] fund/wettbewerbsbild.md :: collaboration with implementation partners
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Mews Preferred Consultant
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Certified Deployment Partner
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Regions served: Germany, Switzerland, and Austria
[OFFEN] fund/wettbewerbsbild.md :: wer im DACH-Raum heute Self-Check-in/Guest-Journey einführt, verkauft in aller Regel straiv mit
[OFFEN] fund/wettbewerbsbild.md :: De-facto-Standard im Portfolio der Einführungs-Dienstleister
[OFFEN] fund/wettbewerbsbild.md :: wer im DACH-Raum Self-Check-in einführt
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: integrierten Modulen wie … einer digitalen Guest Journey und modernstem Payment
[OFFEN] fund/wettbewerbsbild.md :: kommt im gesamten Rohbeleg-Archiv genau 1× vor
[OFFEN] fund/wettbewerbsbild.md :: Guest-Journey-Prozesse — Digitaler Checkin-und Checkout-Prozess (Online-oder Terminal-Checkin, NFC Zimmerschlüssel oder Zahlenschlösser, keine Meldescheine, …), digitaler Concierge … Gästegeräte
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Wir erledigen für Sie die Umsetzung Ihrer Idee aus einer Hand
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: bis zu 80% förderfähig
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: beim Qualitätssicherer Ellipsis
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: sämtliche IT-Herausforderungen und Sorgen abnehmen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: no partners matching your search criteria
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Die DEHOGA Beratung steht Ihnen bundesweit zur Verfügung und bietet geförderte Konditionen in allen Bundesländern an. In Hessen und im Saarland erfolgt die Beratung in Abstimmung mit dem jeweiligen DEHOGA-Landesverband.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: oft bis zu 100 Prozent gefördert
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: GEO-und SEO-Optimierung
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Wie werde ich bei ChatGPT, Perplexity, Gemini und Co. überhaupt gefunden?
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Beispielrechnung einer geförderten Beratung zur Existenzgründung
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Beispielrechnung einer KMU-Beratung (geförderte Kurzberatung für kleine und mittlere Unternehmen)
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Weitere Beratungspakete und Konditionen können auf den individuellen Bedarf zugeschnitten werden.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Nettotagessatz (8 Stunden)
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Für eine umfassende Begleitung und Unterstützung in der Gründungsphase sind 15 Tage förderfähig
[OFFEN] fund/wettbewerbsbild.md :: die volle Maßnahme kostet den Gründer also rund 3.750 €
[OFFEN] fund/wettbewerbsbild.md :: der geförderte Eigenanteil ist zugleich eine Preisuntergrenze, die ein ungeförderter Anbieter nicht unterbietet
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Kostenlose Beratung in arbeitsrechtlichen Angelegenheiten
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Informationen über Förder-oder Investitionsmöglichkeiten
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Nutzungsrecht der Wortmarke DEHOGA Hamburg Partner
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: keine Kooperationen mit direkten Marktbegleitern
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Es gelten ab 1. Januar 2026 folgende Monatsbeiträge
[OFFEN] fund/wettbewerbsbild.md :: alle Zeilen mit €-Zeichen im ganzen Dokument
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: agiert bundesweit und unabhängig von einer Verbandsmitgliedschaft
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Die Liste erhebt keinen Anspruch auf Vollständigkeit.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: In diesem Sinne kann sich jedes in Frage kommende Unternehmen in die Liste aufnehmen lassen.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Kontaktdaten von Designern, Inneneinrichtern, Einrichtungshäusern, Architekten, Handwerkern und anderen Dienstleistern, die Ihnen dabei behilflich sein können, die Wohlfühlatmosphäre in Beherbergungsbetrieben zu verbessern.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Easy Online-Marketing für Fewos
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Schleswig-holsteinische Architekten/Innenarchitekten führen eine professionelle Vor-Ort-Beratung im Beherbergungsbetrieb durch. Diese Leistung wird zu einem sehr günstigen Preis (250,-Euro zuzüglich gesetzlicher Mehrwertsteuer und gegebenenfalls Fahrtkosten) im Rahmen einer Mustervereinbarung angeboten.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: empfehlen wir, einen Beratungsdreiklang einzusetzen, also auf einem ausführlichen dreiteiligen Konzept aus Einrichtungs-, Marketing-und betriebswirtschaftlichen Überlegungen aufzubauen.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: zu marktüblichen Preisen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Experten für die intensive Begleitung spezieller Teilprojekte
[OFFEN] fund/wettbewerbsbild.md :: wurde bis Januar 2025 gefördert
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Im Rahmen von individuellen Einzelberatungen haben Sie die Chance kostenfrei mit IT-Experten in den Dialog zu treten … in der Regel jeden Dienstag
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Die Beratung erfolgt kostenfrei durch Mitglieder des Arbeitskreises ITK und Digitalisierung der IHK zu Lübeck.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Beratungsangebot MEET THE EXPERTS des Arbeitskreises ITK & Digitalisierung
[OFFEN] fund/wettbewerbsbild.md :: Partnerprogramm, öffentliches Verzeichnis, Mitgliederkanal, Store/Ökosystem
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Ein strukturiertes bundesweites Angebot fehlt zur Zeit
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: wurde zum 31.12.2019 eingestellt
[OFFEN] fund/wettbewerbsbild.md :: kostenfreie Analyse Ihrer Online Marketing Kanäle
[OFFEN] fund/wettbewerbsbild.md :: niedrigste Hürde aller geprüften Programme
[OFFEN] fund/wettbewerbsbild.md :: im den letzten drei Jahren mindesten drei Referenzprojekte mit direktem Bezug
[OFFEN] fund/wettbewerbsbild.md :: niedrigste Hürde aller geprüften Programme
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: deren überwiegender Geschäftszweck auf die entgeltliche Unternehmensberatung (mehr als 50 % des Gesamtumsatzes) gerichtet ist
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: zu den gewöhnlichen Betriebskosten des Unternehmens gehören wie laufende Steuerberatung, regelmäßige Rechtsberatung oder Werbung
[OFFEN] fund/wettbewerbsbild.md :: gängige Online-Marketing-Maßnahmen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: In begründeten Fällen kann die Bewilligungsbehörde hierzu eine auf den Zeitraum der Förderrichtlinie befristete Ausnahmegenehmigung erteilen.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Das Förderprogramm go-digital ist am 31.12.2024 ausgelaufen. Es können keine Förderanträge mehr gestellt werden.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Das Budget … ist vollständig ausgeschöpft
[OFFEN] fund/wettbewerbsbild.md :: Die WTSH-Programmseite verlinkt als Richtlinie weiterhin die veraltete Fassung vom 20.04.2023 … Wer nur diesem Link folgt, hält sich fälschlich für ausgeschlossen.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Krankenhäuser, Kliniken, Medizinische Versorgungszentren, Sanatorien oder ähnliche Einrichtungen
[OFFEN] fund/wettbewerbsbild.md :: weder benannt noch ausgeschlossen
[OFFEN] fund/wettbewerbsbild.md :: so ist der Partnerkreis gegliedert
[OFFEN] fund/wettbewerbsbild.md :: ~70 Partner in sechs Kategorien (… Branchen-/institutionelle Partner)
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Zahlungsanbieter Schnittstellen
[OFFEN] fund/wettbewerbsbild.md :: straiv, flexipass, hoteldoor und iiq check — Namen, die genau auf Check-in, digitalen Schlüssel, Türzugang und Identitätsprüfung deuten.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Online Check-in & Check-out
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: vom Online Check-in über die digitale Türöffnung bis hin zum Payment
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: FlexiPass enables Web Keys, Wallet Keys, and Mobile Keys in a single platform, with seamless integration into your existing hotel infrastructure
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: No full hardware replacement required. FlexiPass is compatible with leading lock brands, including Vingcard (ASSA ABLOY), dormakaba, Salto, and more.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Integrates with 100+ PMS platforms
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Hoteldoor® è il CRM utilizzato dalle principali strutture alberghiere per curare la relazione con il cliente
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Bewertungsmanagement für Hotellerie & Camping
[OFFEN] fund/wettbewerbsbild.md :: Check-In services are provided through our Certified Partners.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Check-In services are provided through our
[OFFEN] fund/wettbewerbsbild.md :: Online Check-In · Upsell · Payments · Chat · Guest Surveys · Anything you want
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Più di 500 hotel in tutta Italia
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Network Portali Adrias Online
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Unabhängig von der Zimmer-oder Stellplatzanzahl – Du zahlst immer denselben fairen Preis
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Preisgarantie für bis zu 5 Jahre
[OFFEN] fund/wettbewerbsbild.md :: im geprüften Suchraum nicht gefunden
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Contact us for the full list of PMS providers!
[OFFEN] fund/wettbewerbsbild.md :: FLEXIPASS KEYLESS MOBILE ACCESS SRLS, Via Mainardo 162
[OFFEN] fund/wettbewerbsbild.md :: FLEXIPASS MOBILE ACCESS GMBH mit Sitz in I-39012 – Meran – Goethestrasse Nr. 7
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: VISION SRL, Via Venosta 3, 39012 Merano
[OFFEN] fund/wettbewerbsbild.md :: Vorstandsvorsitzenden des AKZENT Hotels e.V.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Contact us for the full list
[OFFEN] fund/wettbewerbsbild.md :: welche Verbünde gibt es im DACH-Raum?
[OFFEN] fund/wettbewerbsbild.md :: Als Hotelkooperation im Sinne dieser Beitragsordnung gelten freiwillige Zusammenschlüsse von mindestens zehn rechtlich selbständigen Hotels im Bundesgebiet unter einer gemeinsamen Marke zum Zweck der überbetrieblichen Zusammenarbeit im Marketing oder Vertrieb. Mitglieder führen den Namen der Kooperation in ihrem Hotelnamen. Eine Kooperationszentrale mit mehreren Mitarbeitern und signifikantem Budget für die Aufgaben der Hotelkooperation wird unterhalten.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Unternehmen mit mehreren, mindestens aber fünf Hotels …, die eine wirtschaftliche Einheit bilden
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Mitglieder führen den Namen der Kooperation in ihrem Hotelnamen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: bemisst sich nicht nach der Zahl der zur Kooperation, sondern der jeweils … zum Verband gehörenden Hotels
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: individuell und persönlich geführte Privat-/Familien-Hotels (mit und ohne Restaurantbetrieb)
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: mindestens den gehobenen Standard eines 3-Sterne Hotels
[OFFEN] fund/wettbewerbsbild.md :: bekannte Hotelkooperationen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Der Service kostet natürlich Geld (ab ca. 10.000 €)
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Reiseveranstalter, Expedienten und MICE Planer
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Die STRAFINGER TOURISMUSWERKSTATT ist die betreuende Agentur und hat seit der Gründung die Geschäftsführung inne
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: ein dynamischer Verbund erfolgreicher Privathotels im deutschsprachigen Europa
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Seit 2004 haben sich über 60 historische Hotels und Gasthäuser in der Schweiz zur Marketing-Kooperation … zusammengeschlossen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Die STRAFINGER TOURISMUSWERKSTATT ist die betreuende Agentur und hat seit der Gründung die Geschäftsführung inne
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: verfügt über jahrzehntelange Erfahrung in der Führung von touristischen Angebotsgruppen und Hotelkooperationen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Marketingberatung und -betreuung
[OFFEN] fund/wettbewerbsbild.md :: überwiegend kein neutraler Kanal
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Partner des AKZENT Hotels e.V.
[OFFEN] fund/wettbewerbsbild.md :: Mario Peschke — Vorstandsvorsitzender des AKZENT Hotels e.V.
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Der iiQ-Check ist für uns seit Jahren ein unentbehrliches Werkzeug zur konsequenten Qualitätssicherung in allen Mitgliedsbetrieben.
[OFFEN] fund/wettbewerbsbild.md :: wer für alle drei zeichnet
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: halbjährliche Marketing-Analysen und -Optimierungen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: periodisch individueller Beratungstag (alle 3 Jahre)
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: kostenfreies Qualitäts-und Bewertungsmanager-Tool
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: aktive Beratung und Unterstützung in allen Bereichen des Marketings und Verkaufs
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Durchführung von anerkannten Mystery Checks im Rahmen der deutschen Hotelklassifizierung
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Presse-und Öffentlichkeitsarbeit
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: kostenfreie IBE (Internet Booking Engine) für die eigene Hotelwebsite
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: kostenfreier Channelmanager
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: kosten-und provisionsfreie Buchungen über die Kooperationswebsite und die IBE
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: kostenfreie Anbindung an die GDS
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: Präsenz auf nationalen und internationalen Messen
[ABGEBAUT ROHBELEG] fund/wettbewerbsbild.md :: über 60 historische Hotels und Gasthäuser
[OFFEN] fund/wettbewerbsbild.md :: Keine Mitgliederzahlen außer den beiden zitierten
[OFFEN] fund/wettbewerbsbild.md :: BYTE, SELBST, `straiv.io/de/tech-partner`, 09.08.2026, wörtlich:
handel/kanal-rechtsmatrix.md: 87 von 144 offen | 57 abgebaut | davon Rohbeleg-bestaetigt: 57
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Abweichend von Absatz 2 Nummer 2
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: hartnäckiges und unerwünschtes Ansprechen des Verbrauchers mittels Telefonanrufen, unter Verwendung eines Faxgerätes, elektronischer Post oder sonstiger für den Fernabsatz geeigneter Mittel der kommerziellen Kommunikation
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: vorherige ausdrückliche Einwilligung des Adressaten
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: zumindest mutmaßliche Einwilligung
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: vorherige ausdrückliche Einwilligung des Adressaten
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: gegenüber einem Verbraucher ohne dessen vorherige ausdrückliche Einwilligung oder gegenüber einem sonstigen Marktteilnehmer ohne dessen zumindest mutmaßliche Einwilligung
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
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: zumindest mutmaßliche Einwilligung
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: gegenüber einem Verbraucher ohne dessen vorherige ausdrückliche Einwilligung oder gegenüber einem sonstigen Marktteilnehmer ohne dessen zumindest mutmaßliche Einwilligung
[OFFEN] handel/kanal-rechtsmatrix.md :: sonstiger Marktteilnehmer
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: jede weitere Person, die als Anbieter oder Nachfrager von Waren oder Dienstleistungen tätig ist
[OFFEN] handel/kanal-rechtsmatrix.md :: ist ein Hotel, wir verkaufen Hotel-Software
[OFFEN] handel/kanal-rechtsmatrix.md :: Der allgemeine Sachbezug mit den von dem angerufenen Unternehmen angebotenen Dienstleistungen reichte für die Annahme einer mutmaßlichen Einwilligung nicht aus. Anderenfalls wäre Telefonwerbung gegenüber Gewerbetreibenden mit seinen belästigenden und deshalb nicht generell hinnehmbaren Folgen nahezu unbeschränkt zulässig.
[OFFEN] handel/kanal-rechtsmatrix.md :: aufgrund konkreter tatsächlicher Umstände … sachliches Interesse des Anzurufenden
[OFFEN] handel/kanal-rechtsmatrix.md :: der Anzurufende erwarte einen solchen Anruf oder werde ihm jedenfalls positiv gegenüberstehen
[OFFEN] handel/kanal-rechtsmatrix.md :: ausschließlich dazu, die Erreichbarkeit für Patienten zu gewährleisten
[OFFEN] handel/kanal-rechtsmatrix.md :: sind die Wertungen des § 7 Abs. 2 Nr. 1 UWG … zu berücksichtigen
[OFFEN] handel/kanal-rechtsmatrix.md :: besagt dieser Umstand nichts darüber, ob der Durchschnittsmarktteilnehmer mit dieser Werbemethode einverstanden ist. Das Gegenteil dürfte vielmehr anzunehmen sein.
[OFFEN] handel/kanal-rechtsmatrix.md :: Die bereits bestehende Geschäftsbeziehung stellt lediglich einen Beispielsfall dar … Der persönliche Kontakt … deutet ebenso wie die bereits bestehende Geschäftsbeziehung darauf hin, dass diese Kunden gegen einen Telefonanruf nichts einzuwenden haben.
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: mit einem Telefonanruf oder unter Verwendung einer automatischen Anrufmaschine gegenüber einem Verbraucher
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: gegenüber einem Verbraucher
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
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: jede Information, die zwischen einer endlichen Zahl von Beteiligten über einen öffentlich zugänglichen elektronischen Kommunikationsdienst ausgetauscht oder weitergeleitet wird
[OFFEN] handel/kanal-rechtsmatrix.md :: gültigen Adresse …, an die der Empfänger eine Aufforderung zur Einstellung solcher Nachrichten richten kann
[OFFEN] handel/kanal-rechtsmatrix.md :: Do not use our invitation feature to send promotional messages to people you dont know or to otherwise spam people.
[OFFEN] handel/kanal-rechtsmatrix.md :: Effective on November 3, 2025
[OFFEN] handel/kanal-rechtsmatrix.md :: bots or other unauthorized automated methods to access the Services, add or download contacts, send or redirect messages
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: im Zusammenhang mit dem Verkauf … von dem Kunden
[OFFEN] handel/kanal-rechtsmatrix.md :: schicken Sie mir Unterlagen
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: muss der Verantwortliche nachweisen können
[OFFEN] handel/kanal-rechtsmatrix.md :: Das ist keine Werbung, das sind nur die angefragten Unterlagen
[OFFEN] handel/kanal-rechtsmatrix.md :: jede Äußerung bei der Ausübung eines Handels, Gewerbes, Handwerks oder freien Berufs mit dem Ziel, den Absatz von Waren oder die Erbringung von Dienstleistungen … zu fördern
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: so teilt der Verantwortliche der betroffenen Person zum Zeitpunkt der Erhebung dieser Daten Folgendes mit
[OFFEN] handel/kanal-rechtsmatrix.md :: eine Werbung unter Verwendung elektronischer Post
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: im Zusammenhang mit dem Verkauf … von dem Kunden
[OFFEN] handel/kanal-rechtsmatrix.md :: Ein Verkauf kam unstreitig nicht zustande. Die Bestellung wurde storniert.
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: für eigene ähnliche Waren oder Dienstleistungen
[OFFEN] handel/kanal-rechtsmatrix.md :: dies gilt jedoch nur für dasselbe Unternehmen
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: bei Erhebung der Adresse und bei jeder Verwendung
[OFFEN] handel/kanal-rechtsmatrix.md :: setzt jedoch voraus, dass bereits bei der Erhebung der E-Mail-Adresse des Kunden (und bei jeder weiteren Verwendung) ein klarer und deutlicher Hinweis darauf erfolgt ist, dass er der Verwendung jederzeit widersprechen kann
[OFFEN] handel/kanal-rechtsmatrix.md :: auch bei Telefonwerbung, anders als bei E-Mail-Werbung, für sich allein keine Beweiserleichterung zugunsten des Werbenden begründen.
[OFFEN] handel/kanal-rechtsmatrix.md :: in der Kopf-und in der Betreffzeile weder … verschleiert oder verheimlicht werden
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: so einfach wie die Erteilung
[OFFEN] handel/kanal-rechtsmatrix.md :: die leicht erkennbar und unmittelbar erreichbar sein müssen, ständig verfügbar zu halten
[OFFEN] handel/kanal-rechtsmatrix.md :: die Speicherung von Informationen in der Endeinrichtung des Endnutzers oder den Zugriff auf Informationen, die bereits in der Endeinrichtung gespeichert sind
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: so arbeitet dieser nur mit Auftragsverarbeitern, die hinreichend Garantien dafür bieten
[OFFEN] handel/kanal-rechtsmatrix.md :: Data Privacy Framework List
[OFFEN] handel/kanal-rechtsmatrix.md :: welche Produkte oder Dienstleistungen welcher Unternehmen
[OFFEN] handel/kanal-rechtsmatrix.md :: Eine vorformulierte Einwilligungserklärung ist an den §§ 305 ff. BGB zu messen.
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Stillschweigen, bereits angekreuzte Kästchen oder Untätigkeit … sollten daher keine Einwilligung darstellen
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: über einen öffentlich zugänglichen elektronischen Kommunikationsdienst ausgetauscht oder weitergeleitet wird
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: hartnäckiges und unerwünschtes Ansprechen … mittels Telefonanrufen, unter Verwendung eines Faxgerätes, elektronischer Post oder sonstiger für den Fernabsatz geeigneter Mittel
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Die im Anhang dieses Gesetzes aufgeführten geschäftlichen Handlungen gegenüber Verbrauchern sind stets unzulässig.
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: § 7 Absatz 1 Satz 1 in Verbindung mit Absatz 2 Nummer 1 oder 2
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Eine geschäftliche Handlung, durch die ein Marktteilnehmer in unzumutbarer Weise belästigt wird, ist unzulässig. Dies gilt insbesondere für Werbung, obwohl erkennbar ist, dass der angesprochene Marktteilnehmer diese Werbung nicht wünscht.
[OFFEN] handel/kanal-rechtsmatrix.md :: Der Grad der Belästigung ist bei einer Werbung per Post jedoch gering. Diese Belästigung kann gegenüber den Interessen der werbenden Wirtschaft an einer gezielten Individualwerbung … regelmäßig vernachlässigt werden … Dies gilt jedenfalls dann, wenn der Werbecharakter — wie im Streitfall — nach dem Öffnen des Briefs sofort und unmissverständlich erkennbar ist.
[OFFEN] handel/kanal-rechtsmatrix.md :: Bei Briefwerbungen ist indes in der Regel von einer mutmaßlichen Einwilligung auszugehen. Unerwünscht ist diese erst dann, wenn der Werbende davon ausgehen muss, dass der Empfänger damit nicht einverstanden ist
[OFFEN] handel/kanal-rechtsmatrix.md :: formularmäßig aufgemachtes Angebotsschreiben
[OFFEN] handel/kanal-rechtsmatrix.md :: Empfehlung eines Bekannten
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Die gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden geschäftlichen Handlungen sind gemäß § 3a UWG unlauter
[OFFEN] handel/kanal-rechtsmatrix.md :: Positivkontrolle Werbung = 35 im selben Lauf
[OFFEN] handel/kanal-rechtsmatrix.md :: es versäumt [hat], den Adressaten des Schreibens spätestens mit diesem Schreiben (wie es gemäß Art. 14 Abs. 3 Buchst. b DSGVO geboten war) die … Informationen … zur Verfügung zu stellen. Ferner hat sie es unterlassen, den Adressaten … spätestens mit diesem Schreiben ausdrücklich in einer verständlichen und von anderen Informationen getrennten Form darauf hinzuweisen, dass er gemäß Art. 21 Abs. 2 DSGVO das Recht hat, jederzeit Widerspruch … einzulegen.
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: gilt nur, wenn die Briefwerbung spätestens nach dem Öffnen des Briefs sofort und unmissverständlich erkennbar ist
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Verbraucher zum Zwecke des Providerwechsels … postalisch anzuschreiben
[OFFEN] handel/kanal-rechtsmatrix.md :: Stufe 1 (berechtigtes Interesse)
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Darüber hinaus liegen die Voraussetzungen von Art. 6 Abs. 1 Unterabs. 1 Buchstabe f DSGVO deshalb nicht vor, weil das von der Beklagten mit der Werbung verfolgte Interesse nicht rechtmäßig ist. Die von der Beklagten betriebene Werbung ist gemäß § 3 Abs. 1 UWG unzulässig, weil sie gemäß §§ 5 Abs. 1 und Abs. 2, 5a Abs. 1 bis Abs. 3 UWG unlauter ist.
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: OLG Stuttgart, Beschluss vom 2. Februar 2024 -2 U 63/22, GRUR-RS 2024, 3802
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: dass an die Zulässigkeit einer zum Zwecke der Direktwerbung vorgenommenen Datenverarbeitung weniger strenge Anforderungen zu stellen sind
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: die Neukundengewinnung mittels Briefpostwerbung […] grundsätzlich gerechtfertigt ist, es sei denn, die betroffene Person hat widersprochen
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Direktwerbung wurde durch Erwägungsgrund 47 […] als berechtigtes Interesse […] klargestellt
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: die datenschutzrechtlichen Vorgaben eingehalten und die Betroffenen gemäß Artt. 13,14, 21 DSGVO in der Werbesendung transparent informiert werden
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Sollten … dahin zu verstehen sein
[OFFEN] handel/kanal-rechtsmatrix.md :: Briefwerbung ist großzügig zu behandeln
[OFFEN] handel/kanal-rechtsmatrix.md :: ⭐ Und der praktische Gleichlauf beider Pole: Selbst die großzügigere Ansicht verlangt die transparente Information nach Artt. 13, 14, 21 DSGVO in der Werbesendung (Rn. 83) — an unseren Bau-Pflichten ändert der Streitstand nichts.
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: für das Lettershopverfahren
[OFFEN] handel/kanal-rechtsmatrix.md :: die Lücke ist aus `handel/kanal-rechtsmatrix.md` C4 geerbt — dort steht dieselbe Aufzählung ohne die Empfänger-Angabe
[OFFEN] handel/kanal-rechtsmatrix.md :: auf allen Geschäftsbriefen gleichviel welcher Form, die an einen bestimmten Empfänger gerichtet werden
[OFFEN] handel/kanal-rechtsmatrix.md :: Hotel Seeblick GmbH, Seestr. 1
[OFFEN] handel/kanal-rechtsmatrix.md :: Hotel Seeblick, Inh. Maria Berger e.K.
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: der Waren oder Dienstleistungen in nicht unerheblichem Maße und nicht nur gelegentlich vertreibt oder nachfragt
[OFFEN] handel/kanal-rechtsmatrix.md :: lediglich einen Kollektivschutz … Einen Individualschutz von Verbrauchern und sonstigen Marktteilnehmern sehen sie nicht vor.
[OFFEN] handel/kanal-rechtsmatrix.md :: Die ohne wirksame Einwilligung an eine geschäftliche E-Mail-Adresse versandte Werbe-E-Mail stellt einen Eingriff in das Recht am eingerichteten und ausgeübten Gewerbebetrieb dar.
[OFFEN] handel/kanal-rechtsmatrix.md :: Hier kommen die Maßstäbe des § 7 UWG zur Vermeidung von Wertungswidersprüchen auch im Rahmen der Prüfung eines Eingriffs in den eingerichteten und ausgeübten Gewerbebetrieb gemäß § 823 Abs. 1 BGB zur Anwendung
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: auf Grund dieses Gesetzes
[OFFEN] handel/kanal-rechtsmatrix.md :: § 3a UWG und DSGVO-Abmahnbarkeit — Streitstand nicht abschließend erhoben
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Unter solchen Umständen kann die Lauterkeit einer datenschutzrechtliche Vorschriften verletzenden Geschäftspraxis vom Grundsatz her gemäß § 3a UWG oder gemäß § 3 Abs. 2 UWG beurteilt werden.
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Regelmäßig wird … anhand von § 3a UWG geprüft, ob ein geschäftliches Handeln, das gegen datenschutzrechtliche Vorschriften verstößt, unlauter ist
[OFFEN] handel/kanal-rechtsmatrix.md :: Arzneimittelbestelldaten III/II
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: wie das etwa bei allein das Verhältnis zwischen Mittbewerbern betreffenden Regelungen der Fall ist
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: In Bezug auf den … gerügten Verstoß kann auf Art. 3 Abs. 4 UGPRL zurückgegriffen werden … was im Grundsatz die Beurteilung einer auch Verbraucher erreichenden Geschäftspraxis anhand von § 3a UWG ermöglicht
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: die im deutschen Recht für Mitbewerber des Verletzers und Verbraucherschutzverbände vorgesehene Möglichkeit, datenschutzrechtliche Verstöße als unlauterere Geschäftspraktik … zu ahnden, gebilligt
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: führt … keiner der beiden Wege dazu, dass im Sinne eines Automatismus jeder Verstoß gegen die DSGVO eine unlautere Handlung darstellt
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Die gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden geschäftlichen Handlungen sind gemäß § 3a UWG unlauter.
[OFFEN] handel/kanal-rechtsmatrix.md :: Rechtskraft nicht geprüft
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Verstößen nach § 13 Absatz 4
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: gegenüber einem Verbraucher
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Diese Verordnung gilt nicht für die Verarbeitung personenbezogener Daten juristischer Personen und insbesondere als juristische Person gegründeter Unternehmen, einschließlich Name, Rechtsform oder Kontaktdaten der juristischen Person.
[OFFEN] handel/kanal-rechtsmatrix.md :: Hotel Seeblick GmbH … info@hotel-seeblick.de
[OFFEN] handel/kanal-rechtsmatrix.md :: Hotel Seeblick, Inh. Maria Berger e.K.
[OFFEN] handel/kanal-rechtsmatrix.md :: Frau Berger, Direktorin, m.berger@…
[OFFEN] handel/kanal-rechtsmatrix.md :: bei juristischen Personen zusätzlich die Rechtsform, den Vertretungsberechtigten
[OFFEN] handel/kanal-rechtsmatrix.md :: die berechtigten Interessen anderer Teilnehmer als natürlicher Personen … ausreichend geschützt werden
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: vorvertragliche Maßnahmen
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: auf Anfrage der betroffenen Person
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: die Zwecke der Direktwerbung im Allgemeinen als Beispiel für berechtigte Interessen anführt
[OFFEN] handel/kanal-rechtsmatrix.md :: in zumutbarer Weise ebenso wirksam mit anderen Mitteln erreicht werden kann, die weniger stark eingreifen
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: nicht durch die … Pflichtinformationen (Art. 13, 14 DS-GVO) erweitert werden
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Keine Verwendung der Daten aus dem Impressum
[OFFEN] handel/kanal-rechtsmatrix.md :: Nicht zulässig ist hingegen das Auslesen der Daten aus einem Online-Impressum zum Zweck der werblichen Nutzung. Zwar sind diese Daten allgemein zugänglich, sie werden jedoch nicht freiwillig, sondern aufgrund der gesetzlichen Verpflichtung zur Anbieterkennzeichnung … veröffentlicht. Mangels Freiwilligkeit der Veröffentlichung führt die Interessenabwägung … regelmäßig dazu, dass die werbliche Nutzung so erhobener Daten unzulässig ist.
[OFFEN] handel/kanal-rechtsmatrix.md :: Article 6(1)(f) GDPR may not be relied on if the direct marketing at issue is unlawful.
[OFFEN] handel/kanal-rechtsmatrix.md :: Ihre öffentlich zugängliche Unternehmenswebsite
[OFFEN] handel/kanal-rechtsmatrix.md :: Mitgliederverzeichnis des Verbands X
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: Widerspricht die betroffene Person der Verarbeitung für Zwecke der Direktwerbung, so werden die personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet.
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: es sei denn, er kann zwingende schutzwürdige Gründe … nachweisen
[ABGEBAUT ROHBELEG] handel/kanal-rechtsmatrix.md :: spätestens zum Zeitpunkt der ersten Kommunikation … ausdrücklich … in einer verständlichen und von anderen Informationen getrennten Form
[OFFEN] handel/kanal-rechtsmatrix.md :: Widerspruch gegen Werbung
[OFFEN] handel/kanal-rechtsmatrix.md :: zugleich die dokumentierte Löschfrist fürs Verarbeitungsverzeichnis
[OFFEN] handel/kanal-rechtsmatrix.md :: Mindestumfang, der zusätzlich ins Anschreiben gehört
[OFFEN] handel/kanal-rechtsmatrix.md :: in der Rechtsmatrix nirgends geführt
handel/angebotsarchitektur.md: 139 von 139 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
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
Offen: 43 von 43 | seit Baseline/Einbezug abgebaut: 0 | davon Rohbeleg-bestaetigt: 0
akquise/sperrdatei-struktur.md: 19 von 19 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
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
akquise/wellenprotokoll-vorlage.md: 24 von 24 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
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

--- R17-Aufnahmebestand der 19 neuen Zieldateien ---
Offen: 447 von 447 | seit Baseline/Einbezug abgebaut: 0 | davon Rohbeleg-bestaetigt: 0
beleg/baseline-messplan.md: 9 von 9 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] beleg/baseline-messplan.md :: ich will ehrlich zu dir sein. Ich kenn Kayhan und Husnia sehr gut und sie werden das tracking nicht konsequent durchziehen wahrscheinlich nicht mal halbgarig wir werden da mit schätzwerten arbeiten müssen können diese aber als von ihnen getätigte Angaben verbuchen das ist von deren Seite so freigegeben
[OFFEN] beleg/baseline-messplan.md :: als von den Betreibern getätigte Angaben
[OFFEN] beleg/baseline-messplan.md :: und dennoch ich bleibe dabei … im Gespräch kann ich sehr wohl darauf antworten wie gemessen wurde
[OFFEN] beleg/baseline-messplan.md :: Kayhan ist faktisch an die Rezeption gefesselt
[OFFEN] beleg/baseline-messplan.md :: alle im Fenster anfallenden
[OFFEN] beleg/baseline-messplan.md :: gefesselt an die Rezeption
[OFFEN] beleg/baseline-messplan.md :: No-Show = Buchung mit Anreisedatum X, Gast ohne Stornierung nicht erschienen
[OFFEN] beleg/baseline-messplan.md :: weiterhin kein Tagesdatum, Frist verstrichen
[OFFEN] beleg/baseline-messplan.md :: n=34 Check-ins, 24.08.–20.09.
beleg/vorlagen/interviewleitfaden-baseline.md: 38 von 38 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Und an einem ruhigen Tag? An einem vollen?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: gilt für alle drei Häuser
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wir haben notiert: … — stimmt das noch?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: No-Show = Buchung mit Anreisedatum X, Gast ist ohne Stornierung nicht erschienen.
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wie lange dauert ein normaler Check-in — von Gast steht vor dir bis Gast geht Richtung Zimmer, mit Meldeschein? Wie kurz, wenn alles glatt läuft? Wie lang, wenn es hakt?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Was macht einen Check-in bei euch lang? (Sprache, Portal-Sonderfälle, Technik, Zahlung?)
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wie viele Check-ins habt ihr in einer normalen Woche? Und in einer vollen Sommerwoche?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Gibt es einen Dienst-oder Besetzungsplan, den wir bekommen können?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wie viele Stunden pro Woche ist die Rezeption besetzt?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wir haben notiert: Rezeption ist bis 21 Uhr besetzt — stimmt das noch?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wie viel von dieser besetzten Zeit braucht wirklich jemanden VOR ORT — und wie oft am Tag kommt tatsächlich jemand mit einem Anliegen?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wie läuft das heute: ist da jemand vor Ort, geht es ganz ohne, oder wird es aus der Ferne gelöst (Telefon)?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wie viele No-Shows habt ihr in einem normalen Monat? Im schlechtesten Monat, den du erinnerst? Im besten?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Ist das im Sommer anders als im Winter?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wer merkt einen No-Show — und wann? Was passiert dann Schritt für Schritt (Portal melden? Rechnung? Zimmer neu verkaufen?)
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wie viel Arbeitszeit kostet ein No-Show-Fall insgesamt?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Was kostet euch ein No-Show in Euro — bleibt die Übernachtung ganz offen, gibt es Anzahlungen, wie läuft das bei Portal-Buchungen mit hinterlegter Karte?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wie lange dauert der Papier-Meldeschein je Gast — ausfüllen, prüfen, ablegen?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wie viel Zeit pro Woche kostet das Drumherum — sortieren, aufbewahren, suchen, wenn einer gebraucht wird?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wie viele Anrufe und Anfragen kommen an einem normalen Tag rein, die jemanden an der Rezeption binden? An einem vollen Tag?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Was wird am häufigsten gefragt? (Reservierung, Preise, Anfahrt, Sonstiges)
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wer besetzt bei Rabes die Rezeption, und zu welchen Zeiten?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wie viele Zimmer/Einheiten sind es exakt?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wer könnte dort im Messzeitraum täglich das Tagesblatt führen?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wer betreut im Hostel die Check-ins der Langzeitgäste — und ist diese Person regelmäßig vor Ort?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wie viele neue Check-ins gibt es dort überhaupt pro Monat?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Kommen No-Shows dort vor — kann das bei Langzeitgästen überhaupt passieren?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Welche Systeme nutzt DIESES Haus heute: HS/3? DIRS21? Welche Portale?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Zeigt eines davon rückwirkend No-Shows oder Belegung an — als Report, Export oder wenigstens Bildschirmansicht?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wer hat den Zugang — und zwar je Handlung: Wer kann sich einloggen? Wer kann exportieren? Darf Qays das mit euch zusammen am Bildschirm ziehen?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wir haben notiert: Nach 21 Uhr gibt es den Schlüssel aus dem Schlüsselkasten — aber nur nach telefonischer Absprache und nur, wenn der Gast am Telefon in Ordnung wirkt; nachts grundsätzlich kein Check-in, Ausnahme nach telefonischer Einschätzung. Stimmt das noch so?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wie oft kommt das vor — Anreisen, wenn niemand (mehr) da ist?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Was passiert heute, wenn ein Gast außerhalb der besetzten Zeiten ankommt?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Über welchen Kanal schickst du mir samstags die Zettel-Fotos — WhatsApp, Signal, Mail?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: erst stoppen, dann schreiben
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Heute keine Vorgänge
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: Wir haben notiert … stimmt das noch?
[OFFEN] beleg/vorlagen/interviewleitfaden-baseline.md :: keine Fragen doppelt stellen
beleg/vorlagen/referenzvereinbarung-pilotobjekte.md: 12 von 12 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] beleg/vorlagen/referenzvereinbarung-pilotobjekte.md :: Referenzvereinbarungen aller 3 Pilotobjekte (Namensnennung, Fotos, Zahlen, Besichtigungen, Testimonials) … Fertig: 3 unterschriebene Vereinbarungen
[OFFEN] beleg/vorlagen/referenzvereinbarung-pilotobjekte.md :: ausdrücklich NICHT Teil dieses Interviews
[OFFEN] beleg/vorlagen/referenzvereinbarung-pilotobjekte.md :: Hotel Firzlaff /HANSE Hotelbetriebsgesellschaft mbH /GF: Kayhan Rasuly
[OFFEN] beleg/vorlagen/referenzvereinbarung-pilotobjekte.md :: Rabes Hotel Kiel am Hauptbahnhof /Inhaber: Kayhan Rasuly
[OFFEN] beleg/vorlagen/referenzvereinbarung-pilotobjekte.md :: via LEANE (Leane Mardanzai)
[OFFEN] beleg/vorlagen/referenzvereinbarung-pilotobjekte.md :: Rabes Hotel Kiel am Hauptbahnhof /Inhaber: Kayhan Rasuly /Ringstraße 30 /24103 Kiel /USt-IdNr.: DE314335437
[OFFEN] beleg/vorlagen/referenzvereinbarung-pilotobjekte.md :: Im Einsatz bei: {{Firzlaffs Hotel, Neumünster}}
[OFFEN] beleg/vorlagen/referenzvereinbarung-pilotobjekte.md :: zwischen 8 und 15 Minuten, meistens etwa 10
[OFFEN] beleg/vorlagen/referenzvereinbarung-pilotobjekte.md :: Vor der Umstellung dauerte ein Check-in nach Angaben des Hauses typischerweise {{X}} Minuten; nach der Umstellung sind es {{Y}} Minuten (gemessen im Zeitraum {{Zeitraum}}).
[OFFEN] beleg/vorlagen/referenzvereinbarung-pilotobjekte.md :: {{Zitat, wird gemeinsam erarbeitet}}
[OFFEN] beleg/vorlagen/referenzvereinbarung-pilotobjekte.md :: ein Hotel in Schleswig-Holstein
[OFFEN] beleg/vorlagen/referenzvereinbarung-pilotobjekte.md :: ein Hotel in Schleswig-Holstein
beleg/vorlagen/tagesblatt-firzlaffs.md: 3 von 3 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] beleg/vorlagen/tagesblatt-firzlaffs.md :: Ende stoppen, BEVOR die Notiz geschrieben wird
[OFFEN] beleg/vorlagen/tagesblatt-firzlaffs.md :: nichts aus dem Gedächtnis nachtragen
[OFFEN] beleg/vorlagen/tagesblatt-firzlaffs.md :: den leeren Zustand GETRENNT behandeln
beleg/vorlagen/tagesblatt-hostel-boninstrasse.md: 0 von 0 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
fund/erhebung/brandnamic-partner-vollerhebung.md: 38 von 38 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: 74 der 78 Einträge sind ungeprüft
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: 78 Logo-Einträge /76 Domains (2 Doppelnennungen)
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: 74 Einträge, aber 72 Domains
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: PCS GmbH, Bahnhofstraße 10, I-39046 St. Ulrich, UST.-IdNr. 01713460218
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: *enter xenus hotelsoftware … xenus wurde von Grund auf neu entwickelt*
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: 70 eindeutige Logo-Dateinamen
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Digitale Guest Journey: Check-in/out, Mobile Key & Gästeservices
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: GMS Smart Check In … 4-in-1-Lösung … GMS Online Meldeschein, GMS Mail Assistent, GMS Check in App und Schnittstelle zum Meldewesen
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Digitaler Meldeschein, Gäste-App, Checkin-Kiosk
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: vollautomatisierter Check-in/Check-out
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Payments eingebettet in PMS und POS
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: end-to-end hospitality technology … over 91.000 hotels
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Ihr Hotel Vertriebspartner … individuelle Beratung, proprietäre Software, spezialisiert auf gehobene Klein-und Mittelständische Hotels
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Internetagentur Südtirol \| Online Marketing & Webdesign
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: ein Ansprechpartner, eine Rechnung, kostenlose Beratung
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: über 3000 Gastronomiebetriebe
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: fortschrittliches CRM für Hotels, das die Gästekommunikation über den gesamten Aufenthalt optimiert
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Guestnet — Guest Experience Platform
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Wir unterstützen über 2.500 Hotels in 4 Ländern
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: deckt den gesamten digitalen Gästekontakt vom Check-in bis zum letzten Drink ab
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Hotel CRM für Angebotserstellung, Gästekommunikation und Verkauf
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Crqlar Hotel Software \| Hotel Restaurant Software
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: MTS Austria GmbH — Marketing Tourismus Synergie
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: professionelle Beratung und zeitgemäße Serviceleistung … schaffen einen Vorteil für dein Unternehmen
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: HGJ-Bezirksausschüsse
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Mitglied werden /Deine Vorteile
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Giovani Albergatori — Chi siamo? /Diventa membro
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: die Funktion ist besetzt, die Kategorie existiert nicht
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Kanal — Partnerprogramm mit 78 Einträgen
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Internetagentur Südtirol — Online Marketing (SEO, SEA), Webdesign, Urlaubsportale
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Hotel Vertriebspartner … individuelle Beratung … spezialisiert auf gehobene Klein-und Mittelständische Hotels
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: zentraler Einkauf … ein Ansprechpartner, eine Rechnung, kostenlose Beratung
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Die Funktion ist besetzt, die Kategorie existiert nicht.
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: nicht auf der Startseite gefunden
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Hoteliers-und Gastwirtejugend Südtirol
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Moderner Luxusrolex Daytona Chronograph
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Frau trägt schwarzen glänzenden Rock
[OFFEN] fund/erhebung/brandnamic-partner-vollerhebung.md :: Qualitätsniveau der eigenen Website
fund/erhebung/entwurf-anfrage-dehoga-sh.md: 2 von 2 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] fund/erhebung/entwurf-anfrage-dehoga-sh.md :: Versand immer durch den User
[OFFEN] fund/erhebung/entwurf-anfrage-dehoga-sh.md :: Pilotbetriebe in Schleswig-Holstein
fund/erhebung/entwurf-anfrage-ihk-sh.md: 1 von 1 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] fund/erhebung/entwurf-anfrage-ihk-sh.md :: Versand immer durch den User
fund/erhebung/regionalstatistik-groessenklassen.md: 18 von 18 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Größenklassen × SH amtlich nicht in den Kanälen Q1–Q8
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Ø 63,9 Schlafgelegenheiten je Betrieb
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Sie sind nicht berechtigt diesen Service aufzurufen
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Wegen einer technischen Störung ist unser Angebot vorübergehend nicht erreichbar
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Folgende Begriffe sind in der Regionaldatenbank Deutschland nicht vorhanden: Gästezimmer
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Es gibt keine Objekte zum angegebenen Selektionskriterium
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Monatserhebung im Tourismus
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Beherbergungsbetriebe, Schlafgelegenheiten, Gästeankünfte, Gästeübernachtungen nach Betriebsarten — Jahressumme — regionale Ebenen (ab 2018)
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Ausgewiesen werden die im Juli geöffneten Beherbergungsbetriebe.
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Als Schlafgelegenheiten wird die Anzahl der angebotenen Gästebetten in den geöffneten Beherbergungsbetrieben ausgewiesen. Es zählen Doppelbetten als zwei Schlafgelegenheiten, ein Campingstellplatz wird wie vier Schlafgelegenheiten gerechnet. […] Das Angebot an Schlafgelegenheiten bezieht sich, sofern nicht anders angegeben, auf die Beherbergungsmöglichkeiten nach dem Stand von Ende Juli.
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Beherbergungsstätten insgesamt (inkl. Camping)
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Hotels, Hotels garnis, Gasthöfe, Pensionen
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Kreise und kreisfreie Städte
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Ø 63,9 Schlafgelegenheiten je Betrieb
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Ø 63,9 ⇒ Kernsegment in SH ist kleiner/größer als bundesweit
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Erholungs-u. Ferienheime usw.
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Monatserhebung im Tourismus
[OFFEN] fund/erhebung/regionalstatistik-groessenklassen.md :: Kernsegment real, aber unter Konsolidierungsdruck
fund/erhebung/strang2-strukturdaten.md: 17 von 17 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: Sonstige tourismusrelevante Unterkünfte
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: Beherbergung im Reiseverkehr in Schleswig-Holstein 2025
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: kleiner inhabergeführter Beherbergungsbetrieb
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: das Kernsegment ist real und groß, aber strukturell unter Druck
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: Trotz Pleiten und Abmeldungen…
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: steuerpflichtige Betriebe 2023
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: steuerpflichtige Betriebe
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: rund 5.200 Betriebe, mehr als 80.000 Beschäftigte
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: In der IHK-Beratung befinden sich fast dreieinhalbmal so viele Hotel-und Gastronomie-Unternehmen, wie sich Nachfragende dafür finden würden.
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: Anzahl der Betriebsneugründungen und -aufgaben im Beherbergungsgewerbe
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: Größenklasse × Inhaberführung × Region
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: Wirtschaftsfaktor Tourismus
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: Sonstige Dienstleistungen
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: statistischer-bericht-monatserhebung-tourismus-2060710251075
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: Beherbergung im Reiseverkehr in Schleswig-Holstein 2025
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: Wirtschaftsfaktor Tourismus
[OFFEN] fund/erhebung/strang2-strukturdaten.md :: Nachfolge-Monitoring Mittelstand 2025
fund/erhebung/verbund-vollerhebung.md: 12 von 12 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] fund/erhebung/verbund-vollerhebung.md :: nur wenn Kapazität bleibt
[OFFEN] fund/erhebung/verbund-vollerhebung.md :: CPH Hotels bei Ringhotels entdecken | Privat geführte Hotels -Ringhotels
[OFFEN] fund/erhebung/verbund-vollerhebung.md :: CPH Hotels — Seit dem 1. Juli 2026 entdecken Sie die CPH Hotels auch bei Ringhotels – mit noch mehr Auswahl, persönlicher Gastlichkeit und Ringen für Ihre HeimatGenuss Card in teilnehmenden Häusern.
[OFFEN] fund/erhebung/verbund-vollerhebung.md :: CPH ist in Ringhotels aufgegangen
[OFFEN] fund/erhebung/verbund-vollerhebung.md :: Der Verband der Privatvermieter Südtirols
[OFFEN] fund/erhebung/verbund-vollerhebung.md :: vps-verband-der-privatvermieter
[OFFEN] fund/erhebung/verbund-vollerhebung.md :: Urlaub auf dem Bauernhof in Südtirol
[OFFEN] fund/erhebung/verbund-vollerhebung.md :: SBB-Weiterbildungsgenossenschaft Roter Hahn Kochschule, K.-M.-Gamper-Str. 5, I-39100 Bozen
[OFFEN] fund/erhebung/verbund-vollerhebung.md :: Trägerschaft nicht auffindbar
[OFFEN] fund/erhebung/verbund-vollerhebung.md :: auf zwei abgerufenen Seiten nicht enthalten
[OFFEN] fund/erhebung/verbund-vollerhebung.md :: für die Schweiz existiert keine Verbundliste; GastroSuisse liefert nur eine Systematik
[OFFEN] fund/erhebung/verbund-vollerhebung.md :: Stand 2021, mindestens ein Eintrag überholt
fund/persona-validierungsplan.md: 7 von 7 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] fund/persona-validierungsplan.md :: Der 58-jährige Betreiber einer 15-Zimmer-Pension in Schleswig-Holstein ist [auf LinkedIn] nicht, oder nur mit Karteileiche-Profil
[OFFEN] fund/persona-validierungsplan.md :: Die 58-jährige-Pensionswirte-Annahme … ist selbst unvalidiert
[OFFEN] fund/persona-validierungsplan.md :: Was war der Auslöser der letzten Technik-Investition?
[OFFEN] fund/persona-validierungsplan.md :: Existiert der Schmerz dort überhaupt — und in welcher Form?
[OFFEN] fund/persona-validierungsplan.md :: Direktoren erreichbar, aber Problem-Fit schwach
[OFFEN] fund/persona-validierungsplan.md :: Quelle existiert, enthält die Schneidung aber nicht
[OFFEN] fund/persona-validierungsplan.md :: Was sagen die Erhebungen, wonach niemand gefragt hat?
fund/positionierungspapier.md: 24 von 24 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] fund/positionierungspapier.md :: ich will schon bei inhabergeführten Häusern bleiben, aber gerne auch größere.
[OFFEN] fund/positionierungspapier.md :: heyPensio ist keine einzelne Check-in-Lösung. Wir digitalisieren inhabergeführte Häuser einmal komplett, entlang der gesamten Guest Journey. Das beginnt bei der Apaleo-Einführung selbst, also PMS-Implementierung, Property-Setup, Raten und Rollout, genau das machen wir gerade für drei Objekte. Darauf bauen Self-Check-in am Terminal per Touch und Sprache, Pre-Check-in, digitaler Meldeschein, Payment und Zutrittsübergabe auf, und darüber KI-Agenten für die Gästekommunikation und die Automatisierung im Hintergrund, mit Eskalation an den Gastgeber, wenn es menschlich werden muss. Der Gastgeber bekommt das als betreuten Betrieb, nicht als Software zum Selbstzusammenbauen. Ein Werkzeug wie der Copilot fällt damit mitten in unser Feld: Wir erproben Use Cases nicht als einzelnes Hotel, sondern als Partner, der sie danach in jedes weitere Haus trägt, das wir auf Apaleo bringen.
[OFFEN] fund/positionierungspapier.md :: heyPensio zu flach dargestellt
[OFFEN] fund/positionierungspapier.md :: Jeffrey ersetzt nicht den Gastgeber, sondern entlastet ihn. Automation first, Betreiber-Fallback second, Vor-Ort-Einsatz nur wenn nötig.
[OFFEN] fund/positionierungspapier.md :: Zwei gleichwertige Ziele (keine Rangordnung): Betreiber-Entlastung UND Gästeerlebnis.
[OFFEN] fund/positionierungspapier.md :: inhabergeführte Pensionen und kleine Hotels
[OFFEN] fund/positionierungspapier.md :: Die Empfehlung ist nicht neutral — Verkaufsgespräch für ein 8.400-€-Programm … Die Nische inhabergeführte kleine Häuser wurde gewählt, weil dort das Prozesswissen des Users trägt und der Wettbewerb schwächer ist. Das heißt nicht, dass sie falsch ist — aber sie gehört geprüft, nicht übernommen.
[OFFEN] fund/positionierungspapier.md :: Voice am Gerät, Betreibermodell (Straiv-Reviews klagen über Setup und Support!), individuelle Zutrittswege (alte Schlüssel + Fächertresor statt Kartensystem-Investition), Förder-Begleitung (WTSH).
[OFFEN] fund/positionierungspapier.md :: verwundbar bei genau dem, was unser Modell verspricht: persönliche Betreuung im Kleinstsegment
[OFFEN] fund/positionierungspapier.md :: heyPensio ist die niedrige Investitionshürde, weil die Pension ihr bestehendes Schlüssel-/Transpondersystem BEHÄLT und nur eine günstige Ausgabe-Schicht obendrauf bekommt — kein neues Schließsystem. […] Die Investitionssumme AN SICH muss niedrig sein. Firzlaff ist REPRÄSENTATIV, kein Sonderfall: 20–30 Zimmer mit bestehenden Schlüsseln sind die Realität der Zielgruppe.
[OFFEN] fund/positionierungspapier.md :: niedrige Investitionshürde
[OFFEN] fund/positionierungspapier.md :: bei Kunden außerhalb SH je Land neu zu erheben
[OFFEN] fund/positionierungspapier.md :: Terminal im Produktivbetrieb beim Kunden
[OFFEN] fund/positionierungspapier.md :: Zutrittslösungen aktiv anbieten
[OFFEN] fund/positionierungspapier.md :: erst nach Vertragslektüre so verkaufen
[OFFEN] fund/positionierungspapier.md :: größere Häuser buchen mehr Checkpoints
[OFFEN] fund/positionierungspapier.md :: Hardware & Plattform teilen, Daten & Laufzeit pro Kunde isolieren
[OFFEN] fund/positionierungspapier.md :: pro Modul, pro Monat, pro Zimmer
[OFFEN] fund/positionierungspapier.md :: Auf Rechnung, kein Gesellschafter … Ausgestaltung offen (Konditionen, Vertrag, steuerliche Seite → StB-Termin-Kandidat)
[OFFEN] fund/positionierungspapier.md :: 301-Weiterleitungs-Map … gehört trotzdem zum Lieferumfang
[OFFEN] fund/positionierungspapier.md :: Außendarstellungs-Regel Kayhan
[OFFEN] fund/positionierungspapier.md :: tritt IMMER als Teil des Unternehmens auf … intern extern, kein Gesellschafter, keine Freigabe-Instanz
[OFFEN] fund/positionierungspapier.md :: ggf. in der Zusammenarbeit entstanden
[OFFEN] fund/positionierungspapier.md :: vor Beginn entstanden = nicht erfasst
handel/anwalts-briefing-2026-08.md: 36 von 36 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] handel/anwalts-briefing-2026-08.md :: ohne Personennamen und ohne jede weitere Angabe
[OFFEN] handel/anwalts-briefing-2026-08.md :: wir haben uns nach Abwägung für die Nutzung entschieden
[OFFEN] handel/anwalts-briefing-2026-08.md :: rechtlich nicht abschließend geklärt … eine offene Rechtsfrage mit Restrisiko, nicht ein grüner Kanal
[OFFEN] handel/anwalts-briefing-2026-08.md :: letztlich nur rechtmäßig sein, wenn die zu verhindernde Verarbeitung zu Werbezwecken auf Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO beruht
[OFFEN] handel/anwalts-briefing-2026-08.md :: Sofern personenbezogene Daten für Werbezwecke verwendet werden sollen, die ursprünglich nicht (auch) zu Zwecken der Werbung erhoben worden sind, sind zusätzlich die Regelungen des Art. 6 Abs. 4 DS-GVO (Zweckänderung) zu beachten. Um herauszufinden, ob der Werbezweck mit der ursprünglichen Zweckbestimmung vereinbar ist, müssen Verantwortliche eine sog. Kompatibilitätsprüfung durchführen, es sei denn, es liegt eine Einwilligung in die zweckändernde Nutzung vor.
[OFFEN] handel/anwalts-briefing-2026-08.md :: Nicht zulässig ist hingegen das Auslesen der Daten aus einem Online-Impressum zum Zweck der werblichen Nutzung. Zwar sind diese Daten allgemein zugänglich, sie werden jedoch nicht freiwillig, sondern aufgrund der gesetzlichen Verpflichtung zur Anbieterkennzeichnung gem. § 5 TMG bzw. § 18 MStV veröffentlicht. Mangels Freiwilligkeit der Veröffentlichung führt die Interessenabwägung gem. Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO regelmäßig dazu, dass die werbliche Nutzung so erhobener Daten unzulässig ist. Zur Vermeidung einer werblichen Ansprache mit diesen Daten kann ein Anbieter einer Internetseite vorsorglich einen Werbewiderspruch in sein Impressum aufnehmen.
[OFFEN] handel/anwalts-briefing-2026-08.md :: Eine Verarbeitung von Postadressdaten für Zwecke der eigenen Direktwerbung aus der Durchführung von Preisausschreiben und Gewinnspielen sowie aufgrund von Katalog-und Prospektanforderungen ist nach Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO zulässig. Spätestens bei der Datenerhebung ist über die werbliche Datenverarbeitung zu informieren; eine Einwilligung der betroffenen Personen ist bei solchen Sachverhalten sodann nicht erforderlich. Die Anforderungen aus Ziffer 2.1 sind zu beachten.
[OFFEN] handel/anwalts-briefing-2026-08.md :: spätestens bei der Datenerhebung
[OFFEN] handel/anwalts-briefing-2026-08.md :: Eine unverzügliche Information fordert das Gesetz nicht. Die Information muss jedoch innerhalb einer angemessenen Frist, jedenfalls zum Zeitpunkt der ersten Kommunikation (Aussendung einer Werbung), spätestens aber innerhalb eines Monats nach Erhalt der Daten erfolgen. Es kommt also darauf an, welche Bedingung zuerst eintritt. Erfolgt die Information in Verbindung mit der ersten Werbezusendung, sind beide Bestandteile (Information und Werbetext) klar voneinander zu trennen und die Information (einschließlich des Hinweises auf das Werbewiderspruchsrecht) entsprechend deutlich herauszustellen.
[OFFEN] handel/anwalts-briefing-2026-08.md :: Solange sie offen ist, steht neben der Impressums-Fallgruppe ein zweiter ungeklärter Rechtsgrund — das verschärft das Risikobild, es entlastet nicht.
[OFFEN] handel/anwalts-briefing-2026-08.md :: Drittens schließlich kann eine grundsätzliche Zulässigkeit der Direktwerbung per Briefpost keinesfalls aus einem fehlenden Widerspruch der betroffenen Person abgeleitet werden. Das etwaige Bestehen eines Widerspruchsrechts setzt nämlich das Vorliegen einer rechtmäßigen Verarbeitung voraus.
[OFFEN] handel/anwalts-briefing-2026-08.md :: Die Aufsicht hält B2B ohnehin für unproblematisch.
[OFFEN] handel/anwalts-briefing-2026-08.md :: Briefwerbung ist lauterkeitsrechtlich der offenste Kanal, das Risiko liegt auf der DSGVO-Seite
[OFFEN] handel/anwalts-briefing-2026-08.md :: LG Düsseldorf, Urt. v. 06.02.2026 – 38 O 243/23 … hat eine Briefpost-Werbesendung untersagt — gestützt ausschließlich auf Art. 6 Abs. 1 lit. f und die Art. 12–14, 21 DSGVO.
[OFFEN] handel/anwalts-briefing-2026-08.md :: das LG stützt sich auf § 3a UWG
[OFFEN] handel/anwalts-briefing-2026-08.md :: auf § 3a UWG und § 3 Abs. 2 UWG, nebeneinander
[OFFEN] handel/anwalts-briefing-2026-08.md :: Sollten demgegenüber die Ausführungen unter B I der Gründe des … Beschlusses des Oberlandesgerichts Stuttgarts … dahin zu verstehen sein, dass an die Zulässigkeit einer zum Zwecke der Direktwerbung vorgenommenen Datenverarbeitung weniger strenge Anforderungen zu stellen sind …, könnte dem mit Blick auf die … Vorgaben zur Auslegung der DSGVO nicht gefolgt werden.
[OFFEN] handel/anwalts-briefing-2026-08.md :: Das LG weicht vom OLG Stuttgart ab
[OFFEN] handel/anwalts-briefing-2026-08.md :: Art. 5 Abs. 1 Buchstabe a
[OFFEN] handel/anwalts-briefing-2026-08.md :: Untersagt wurde eine Briefwerbung an Verbraucher wegen Verstoßes gegen Art. 6 Abs. 1 lit. f DSGVO; die Absage stützt sich auf Informations-und Hinweispflichten sowie darauf, dass das verfolgte Interesse lauterkeitsrechtlich nicht rechtmäßig war.
[OFFEN] handel/anwalts-briefing-2026-08.md :: Ein DSGVO-Verstoß bei Briefwerbung ist zugleich lauterkeitsrechtlich angreifbar; die Anspruchsberechtigung folgt dann § 8 Abs. 3 UWG.
[OFFEN] handel/anwalts-briefing-2026-08.md :: sonstigen Verstößen gegen die [DSGVO] und das Bundesdatenschutzgesetz durch Unternehmen …, sofern sie in der Regel weniger als 250 Mitarbeiter beschäftigen
[OFFEN] handel/anwalts-briefing-2026-08.md :: Verstöße nach § 13 Absatz 4
[OFFEN] handel/anwalts-briefing-2026-08.md :: zugleich die Voraussetzungen von Art. 3 Abs. 3 der [UGPRL] erfüllt
[OFFEN] handel/anwalts-briefing-2026-08.md :: Die vorliegende Richtlinie sollte insbesondere Artikel 13 Absatz 3 der Richtlinie 2002/58/EG des Europäischen Parlaments und des Rates vom 12. Juli 2002 über die Verarbeitung personenbezogener Daten und den Schutz der Privatsphäre in der elektronischen Kommunikation unberührt lassen.
[OFFEN] handel/anwalts-briefing-2026-08.md :: Bei Werbung mit einem Telefonanruf gegenüber einem sonstigen Marktteilnehmer (B2B) kommt es für die Interessenabwägung nach Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO ebenso auf die wettbewerbsrechtliche Zulässigkeit gemäß § 7 Abs. 2 Nr. 2 UWG und somit darauf an, dass von dessen zumindest mutmaßlicher Einwilligung ausgegangen werden kann. Im B2B-Bereich stehen deshalb bei einem Nutzen von Telefonnummern für Werbeanrufe nicht von vorneherein überwiegende schutzwürdige Interessen der telefonisch anzusprechenden Gewerbetreibenden nach Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO entgegen. Eine bloße Sachbezogenheit (z. B. Werbung für Büroartikel, Telefon-und Stromanbieter oder auch die entgeltliche Vermittlung von Aufträgen) genügt jedoch nicht, um von einem Einverständnis des angerufenen Unternehmers auszugehen (vgl. BGH, Urteil vom 16.11.2006 – I ZR 191/03). Vielmehr ist es jedenfalls notwendig, dass für den Anruf ein konkreter und aus dem Interessenbereich des Anzurufenden herzuleitender Grund vorliegt (dies kann z. B. ein geschäftlicher Vorkontakt sein).
[OFFEN] handel/anwalts-briefing-2026-08.md :: nicht entscheiden [müssen], ob der deutsche Rechtsbruchtatbestand unter diesen Umständen angewandt werden kann
[OFFEN] handel/anwalts-briefing-2026-08.md :: To access Business or Enterprise features on your self-hosted instance, you receive a license key that must ping our license server daily to stay active. This ping includes data like the number of production executions, which helps us track usage. We also collect telemetry data by default, though you can choose to disable it.
[OFFEN] handel/anwalts-briefing-2026-08.md :: Business or Enterprise features
[OFFEN] handel/anwalts-briefing-2026-08.md :: How does n8n monitor my usage on a self-hosted instance?
[OFFEN] handel/anwalts-briefing-2026-08.md :: Ob der Eintrag eines fremden Impressumsvermerks in einen eigenen Sperrbestand seinerseits eine zulässige Verarbeitung ist, ist nicht erhoben.
[OFFEN] handel/anwalts-briefing-2026-08.md :: nur rechtmäßig …, wenn die zu verhindernde Verarbeitung zu Werbezwecken auf Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO beruht
[OFFEN] handel/anwalts-briefing-2026-08.md :: Die betroffenen Personen müssen im Zusammenhang mit der Unterrichtung (Art. 12 Abs. 3 DS-GVO) über die Beachtung ihres Werbewiderspruchs auch über den Sinn und Zweck der Aufnahme ihrer Daten in eine Sperrdatei unterrichtet werden.
[OFFEN] handel/anwalts-briefing-2026-08.md :: zuletzt geändert durch Art. 6 G v. 12.05.2026
[OFFEN] handel/anwalts-briefing-2026-08.md :: keine Entscheidung gefunden, die …
[OFFEN] handel/anwalts-briefing-2026-08.md :: § 7 UWG kommt im Urteil nicht vor
handel/entwurf-anfrage-ifb-hamburg.md: 4 von 4 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] handel/entwurf-anfrage-ifb-hamburg.md :: und werden Projekte anerkannt, die die handelnden Personen vor Gründung des Beratungsunternehmens durchgeführt haben?
[OFFEN] handel/entwurf-anfrage-ifb-hamburg.md :: wir sehen folgende Absicherungen vor — genügen diese?
[OFFEN] handel/entwurf-anfrage-ifb-hamburg.md :: mit direktem Bezug zu dem nun geplanten Projekt
[OFFEN] handel/entwurf-anfrage-ifb-hamburg.md :: vor Gründung des Beratungsunternehmens
handel/entwurf-anfrage-wtsh.md: 8 von 8 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] handel/entwurf-anfrage-wtsh.md :: zur reinen Unternehmens-oder Produktdarstellung
[OFFEN] handel/entwurf-anfrage-wtsh.md :: aktive Mitwirkung bei der Antragstellung
[OFFEN] handel/entwurf-anfrage-wtsh.md :: was sagt die Richtlinie zu verbundenen Unternehmen?
[OFFEN] handel/entwurf-anfrage-wtsh.md :: Negativliste nicht-förderwürdiger Vorhaben
[OFFEN] handel/entwurf-anfrage-wtsh.md :: Nicht förderfähige Ausgaben
[OFFEN] handel/entwurf-anfrage-wtsh.md :: nicht förderfähige Ausgaben
[OFFEN] handel/entwurf-anfrage-wtsh.md :: Es gibt derzeit keinen konkreten Fall und keinen erteilten Auftrag
[OFFEN] handel/entwurf-anfrage-wtsh.md :: Diese Anfrage betrifft die Auslegung der Richtlinie, nicht einen Einzelfall
handel/foerderarchitektur-beraterrolle.md: 54 von 54 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Welche geförderte Beratung können wir unseren Kunden ermöglichen, und was muss dafür an UNS wahr sein?
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Die Beratung muss sich auf die Hamburger Betriebsstätte beziehen und die Umsetzung … muss für die Hamburger Betriebsstätte geplant sein.
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Amtsblatt 2026/190 vom 5. Juni 2026
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Zugleich tritt die Richtlinie … vom 20. April 2023 außer Kraft.
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Quellenkonflikt, der uns fast zum Falschschluss geführt hätte
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Richtlinie Digitalisierungsmaßnahmen kleine Unternehmen (DKU) → herunterladen
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Bekanntmachung … vom 20. April 2023 /Geändert durch Verwaltungsvorschrift vom 30.11.2023 … /Geändert durch Verwaltungsvorschrift vom 14.02.2024
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: der verlinkte Richtlinien-Text
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: hält sich fälschlich für berechtigt
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Es können nur solche Vorhaben gefördert werden, die noch nicht begonnen wurden. Ein Vorhaben gilt als begonnen, sobald entsprechende Lieferungs-oder Leistungsverträge abgeschlossen wurden.
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Wird zur weiteren Finanzierung der Beratung ein Förderdarlehen aufgenommen, gilt, dass die Höhe des Förderdarlehens die Gesamtprojektkosten abzüglich des Förderzuschusses durch Hamburg Digital Check nicht übersteigen darf.
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: soll im Ergebnis mit einem konkreten Realisierungskonzept … enden
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Kassensysteme inkl. Barcodescanner und Bondrucker
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: fällt Marketing darunter?
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Selbsterklärung Digitalisierungsberatung — keine Akkreditierung, niedrigste Hürde aller geprüften Programme
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: die fachliche Expertise für das geplante Beratungsprojekt zu besitzen. Ich habe zudem im den letzten drei Jahren mindesten drei Referenzprojekte mit direktem Bezug zu dem nun geplanten Projekt durchgeführt
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: eine wettbewerbsneutrale Beratung zu gewährleisten. Den Kunden die beste und günstigste Lösung zu empfehlen und über Vor-und Nachteile zu unterrichten. Es müssen auch mögliche Alternativen aufgezeigt werden. Eventuelle Provisionen sind offenzulegen.
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: meine Arbeit auf die Bedürfnisse von KMU auszurichten
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: einschlägige Qualitätsstandards und Normen (z.B. BSI IT-Grundschutz, ISO 27001) anzuerkennen, mich fortwährend daran zu orientieren und die Einhaltung sicherzustellen
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: subventionserhebliche Tatsachen gemäß § 264 StGB
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: die durch Scheingeschäfte oder Scheinhandlungen verdeckt werden
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: heyPensio erscheint in keinem Förderantrag, Verflechtungen werden offengelegt (WTSH-Leitplanke, § 264 StGB); ein Förderantrags-Service als Angebot ist GEPARKT
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: im Repo bisher nirgends dokumentiert
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Bei Begünstigten, die … zum Vorsteuerabzug nach § 15 UStG berechtigt sind, sind nur die Nettoausgaben zuwendungsfähig
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: insbesondere Artikel 18 KMU-Beihilfen für die Inanspruchnahme von Beratungsdiensten für das Modul Beratung
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: im Amtsblatt nicht wiedergefunden
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Jede geförderte Beratung muss einen Abschnitt zur Bewertung und Stärkung der IT-und Informationssicherheit enthalten, einschließlich einer Risikoanalyse und konkreter Handlungsempfehlungen zur Umsetzung technischer und organisatorischer Schutzmaßnahmen.
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Gefördert werden Vorhaben gemäß Ziffer 2.1, die in einem schriftlichen Beratungsbericht individuelle Lösungen und Handlungsempfehlungen zur konkreten Umsetzung von Digitalisierungsprozessen einschließlich der hierfür erforderlichen Hard-und Software erarbeiten …
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: die Angabe von Daten anderer Unternehmen — insbesondere von Beratungs-oder Dienstleistungsunternehmen in den Antragsfeldern — ist unzulässig
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: auf das Programm hinweisen
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Beide Angebote dienen als Anlage zu Förderanträgen bei der WTSH.
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: aktive Mitwirkung bei der Antragstellung
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Marketing hat keinen Fehler gemacht
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Namensnennung und Werbung mit Ihrer Referenz
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Kosten für die Erstellung oder Optimierung einer Website (inkl. Social Media Kanäle) zur reinen Unternehmens-oder Produktdarstellung (also ohne Verknüpfung mit den betrieblichen Abläufen)
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Kosten für gängige Online-Marketing-Maßnahmen (wie zum Beispiel Suchmaschinenoptimierung und -anzeigen (SEO/SEA), Display-Advertising, Content Marketing, E-Mail-Marketing)
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: gewöhnlichen Betriebskosten des Unternehmens, wie laufende Steuerberatung, regelmäßige Rechtsberatung oder Werbung
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Anfertigung von Fotos, Audio-oder Videoaufnahmen
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Einführung neuer, digitaler Vertriebskanäle inklusive Aufbau des elektronischen Handels …
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Einführung professioneller Webshops
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Einführung eines Customer Relationship Management Systems (CRM) oder auch Content Management System (CMS) …
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Einführung digitaler 3D-Visualisierungen (z.B. Messestände, virtueller Rundgang, Panorama-oder 360°-Ansichten)
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Kassensysteme inkl. Barcodescanner und Bondrucker
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Verknüpfung mit den betrieblichen Abläufen
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Negativliste nicht-förderwürdiger Vorhaben
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Nicht förderfähige Ausgaben
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: 11. BAFA-Beraterförderung — Umsatzstruktur (NEU 10.08. …)
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: BAFA-Frage in die StB-Liste: JA → als Frage 11 aufgenommen
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Ergebnis zu Frage 11 → Postkorb-Rückmeldung an MKT
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Mit dem Vorhaben darf vor Erteilung eines Zuwendungsbescheides beziehungsweise einer Zustimmung zum vorzeitigen Maßnahmebeginn nicht begonnen werden.
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: Wer unterschreibt, bevor der Bescheid da ist, hat die Förderung des Kunden vernichtet
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: mind. 2.500 € netto Beraterkosten
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: SH-spezifisch, bei Kunden außerhalb SH je Land neu zu erheben
[OFFEN] handel/foerderarchitektur-beraterrolle.md :: mind. 2.500 € Beraterkosten
handel/preisliste-vorlaeufig.md: 51 von 51 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] handel/preisliste-vorlaeufig.md :: der Rabatt wirkt nicht auf S4
[OFFEN] handel/preisliste-vorlaeufig.md :: Z-6 ungeklärt, die W-B/A3-Rechenbasis kann weiterhin > kippen
[OFFEN] handel/preisliste-vorlaeufig.md :: Vertrags-, Rechts-und Steuerfragen (Z-1…Z-7, Zulieferung an die Zentrale — bislang nicht übergeben)
[OFFEN] handel/preisliste-vorlaeufig.md :: Ohne Deckel, Prüfposten nach E-6
[OFFEN] handel/preisliste-vorlaeufig.md :: Je Haus (Recommended)
[OFFEN] handel/preisliste-vorlaeufig.md :: Ab dem 2. Haus > (Recommended)
[OFFEN] handel/preisliste-vorlaeufig.md :: Fester Prozentsatz (Recommended)
[OFFEN] handel/preisliste-vorlaeufig.md :: Ohne > Deckel, Prüfposten nach E-6 (Recommended)
[OFFEN] handel/preisliste-vorlaeufig.md :: zu S2 und den § 2-Zeilen schweigt > das Protokoll
[OFFEN] handel/preisliste-vorlaeufig.md :: Leistungspakete und die ausgearbeitete Mehrhaus-Rabatt-Mechanik … Diese Liste benennt den Rabatt nur als Stellschraube.
[OFFEN] handel/preisliste-vorlaeufig.md :: *der Kopfkasten darunter bleibt unverändert stehen*
[OFFEN] handel/preisliste-vorlaeufig.md :: die vier Vorbehalte unten/oben
[OFFEN] handel/preisliste-vorlaeufig.md :: Kippt Z-6, > kippt der Aufbau dieser Liste
[OFFEN] handel/preisliste-vorlaeufig.md :: K04-/Z-5-Vorbehalt (kann die Rechenbasis kippen)
[OFFEN] handel/preisliste-vorlaeufig.md :: in der Fassung mit den ✅-Nachträgen
[OFFEN] handel/preisliste-vorlaeufig.md :: die Lizenz-Argumentation ruht auf dem > fehlenden Zugang
[OFFEN] handel/preisliste-vorlaeufig.md :: 📮 Nachtrag 4 — Entscheide-Protokoll 2: S4 + AA-1…AA-8
[OFFEN] handel/preisliste-vorlaeufig.md :: je Objekt/Haus (Ableitung aus E-2a, ④ — der Entscheid sagt es für die Startgebühr nicht ausdrücklich)
[OFFEN] handel/preisliste-vorlaeufig.md :: die ④-Ableitung der Preisliste ist damit ENTSCHIEDEN, nicht mehr abgeleitet
[OFFEN] handel/preisliste-vorlaeufig.md :: der Mehrhaus-Rabatt wirkt nach E-2 auf S1 — und damit nicht auf die Startgebühr S4. Ob er es sollte, ist offen
[OFFEN] handel/preisliste-vorlaeufig.md :: später entscheiden, nach E-6
[OFFEN] handel/preisliste-vorlaeufig.md :: ⬜ offen — Mechanik § 4, Ausarbeitung R12-B
[OFFEN] handel/preisliste-vorlaeufig.md :: ab dem 2. Haus desselben Betreibers
[OFFEN] handel/preisliste-vorlaeufig.md :: 📮 Nachtrag 4 — Entscheide-Protokoll 2
[OFFEN] handel/preisliste-vorlaeufig.md :: die HÖHE beider Rabatte bleibt bis zur E-6-Messung Hypothese
[OFFEN] handel/preisliste-vorlaeufig.md :: Wann gelten mehrere Häuser verschiedener Firmierungen als EIN Betreiber (Gesellschafter-Identität? Familienverbund? faktische Geschäftsführung?) — der Rabatt braucht eine missbrauchsfeste, prüfbare Klammer.
[OFFEN] handel/preisliste-vorlaeufig.md :: weniger Einarbeitung je Haus
[OFFEN] handel/preisliste-vorlaeufig.md :: Das ist eine Zuordnungs-und keine Preisfrage
[OFFEN] handel/preisliste-vorlaeufig.md :: Was verlangen andere für eine Einrichtung?
[OFFEN] handel/preisliste-vorlaeufig.md :: Was ist unser Einführungsaufwand wert?
[OFFEN] handel/preisliste-vorlaeufig.md :: Was zahlen unsere Zielkunden?
[OFFEN] handel/preisliste-vorlaeufig.md :: 10 von 13 Ankern mit belegter Einmalzahlung
[OFFEN] handel/preisliste-vorlaeufig.md :: kein anderes 400-€-Fenster enthält mehr als drei Werte
[OFFEN] handel/preisliste-vorlaeufig.md :: zweitdichteste (mit Betriebsbezug)
[OFFEN] handel/preisliste-vorlaeufig.md :: genau einmal … als das, was sie ist
[OFFEN] handel/preisliste-vorlaeufig.md :: die Marktanalyse kommt auf dasselbe wie die KI
[OFFEN] handel/preisliste-vorlaeufig.md :: genau die Anbieter mit Betriebsbezug
[OFFEN] handel/preisliste-vorlaeufig.md :: Im ersten Jahr Startgebühr verstärkt
[OFFEN] handel/preisliste-vorlaeufig.md :: für ein Haus der Pilot-Größenklasse
[OFFEN] handel/preisliste-vorlaeufig.md :: hängt von Anzahl und Komplexität der Workflows ab
[OFFEN] handel/preisliste-vorlaeufig.md :: ganz > überwiegend je Kunde/Projekt erhoben, nicht je Objekt
[OFFEN] handel/preisliste-vorlaeufig.md :: unsere 2.000 € gegen > deren 1.920 €
[OFFEN] handel/preisliste-vorlaeufig.md :: ein plausibel aussehender > Beispielbetrag würde beim nächsten Weiterverwenden als Preis > gelesen
[OFFEN] handel/preisliste-vorlaeufig.md :: Obere Orientierung … bis rund 4.200 €
[OFFEN] handel/preisliste-vorlaeufig.md :: zuerst die Zuordnungsfrage
[OFFEN] handel/preisliste-vorlaeufig.md :: NEU 13.08., MKT-R12-Postkorb
[OFFEN] handel/preisliste-vorlaeufig.md :: NEU 13.08. nachmittags, AA-1-Entscheid je Betreiber
[OFFEN] handel/preisliste-vorlaeufig.md :: von R13-A selbst gelesen 13.08.2026
[OFFEN] handel/preisliste-vorlaeufig.md :: ungeklärt — kann die W-B-Rechenbasis kippen
[OFFEN] handel/preisliste-vorlaeufig.md :: Unverändert: … Z-6 ungeklärt
[OFFEN] handel/preisliste-vorlaeufig.md :: passt zu dem, was die Lizenz erlaubt ist bewusst nicht von der Lizenz gedeckt … ob eine FAQ im Streitfall bindet, ist offen
handel/preismodell-optionen.md: 113 von 113 offen | 0 abgebaut | davon Rohbeleg-bestaetigt: 0
[OFFEN] handel/preismodell-optionen.md :: der gesamte Text unterhalb
[OFFEN] handel/preismodell-optionen.md :: ⭐ Entscheide-Protokoll 13.08.2026
[OFFEN] handel/preismodell-optionen.md :: kein Satz dieses Papiers darf einen Entscheid als > wörtliche Äußerung des Users ausgeben
[OFFEN] handel/preismodell-optionen.md :: der Wortlaut ist nicht archiviert
[OFFEN] handel/preismodell-optionen.md :: 0 gelöschte > Zeilen bei 1.078 hinzugefügten
[OFFEN] handel/preismodell-optionen.md :: 15 weitere > Nachtragskästen
[OFFEN] handel/preismodell-optionen.md :: Status: ÜBERLEGUNGEN, KEINE ENTSCHEIDE
[OFFEN] handel/preismodell-optionen.md :: Pricing möglicherweise komplett monatlich, ohne feste Verträge
[OFFEN] handel/preismodell-optionen.md :: Modul A kostet X Euro pro Zimmer pro Monat
[OFFEN] handel/preismodell-optionen.md :: Witzigerweise macht die Übergabefähigkeit es abhängig machend
[OFFEN] handel/preismodell-optionen.md :: Hypothesen und PRÜF-Aufträge, keine Anker
[OFFEN] handel/preismodell-optionen.md :: Einführung nie kostenlos vorfinanzieren
[OFFEN] handel/preismodell-optionen.md :: nicht unter ~1.500 € netto/Monat
[OFFEN] handel/preismodell-optionen.md :: als Marktanker unbrauchbar
[OFFEN] handel/preismodell-optionen.md :: Pro-Zimmer-Preis nur für gästenahe Module; was nicht mit Zimmerzahl wächst → Fixpauschale je Haus + Grundgebühr Betreuung/Verantwortung; Hardware, Zahlungsgebühren, Fremdlizenzen separat und direkt beim Kunden.
[OFFEN] handel/preismodell-optionen.md :: Hardware, Zahlungsgebühren, Fremdlizenzen direkt beim Kunden
[OFFEN] handel/preismodell-optionen.md :: Pilotleistungen NMS + Kiel
[OFFEN] handel/preismodell-optionen.md :: From $ 25 /month First project included. Additional projects from $10/mo.
[OFFEN] handel/preismodell-optionen.md :: 25,00 $ pro Monat pro Projekt
[OFFEN] handel/preismodell-optionen.md :: Alle Calls sind TEST-Läufe (Abnahmetest, E2E) — echte Gastgespräche können länger ausfallen
[OFFEN] handel/preismodell-optionen.md :: ein Pages-Projekt pro Kunde
[OFFEN] handel/preismodell-optionen.md :: unlimited number of instances
[OFFEN] handel/preismodell-optionen.md :: eigener Server je Kunde
[OFFEN] handel/preismodell-optionen.md :: rund 50–70 € pro Monat und Kunde
[OFFEN] handel/preismodell-optionen.md :: Kein gebauter Command gefunden ist enger als ein solcher Command existiert nirgends
[OFFEN] handel/preismodell-optionen.md :: Einspielen (einmalig je Kunde)
[OFFEN] handel/preismodell-optionen.md :: separat und direkt beim Kunden
[OFFEN] handel/preismodell-optionen.md :: Hardware & Betriebsplattform teilen, Daten & Laufzeit pro Kunde isolieren.
[OFFEN] handel/preismodell-optionen.md :: Managed Service — Kunde pflegt nie ein Vapi-Konto
[OFFEN] handel/preismodell-optionen.md :: eine n8n-Instanz ≈ 300 MB RAM → ein 8-GB-Server trägt 10–20 Kunden
[OFFEN] handel/preismodell-optionen.md :: Alles pro Kunde (eigener Server + eigenes Coolify je Kunde): ~15–20 €/Monat Fixkosten + komplettes Server-Management pro Kunde — bei Pensionsgrößen unnötig. Bleibt Option für einen Großkunden mit Anforderung dedizierte Infrastruktur.
[OFFEN] handel/preismodell-optionen.md :: + komplettes Server-Management pro Kunde
[OFFEN] handel/preismodell-optionen.md :: n8n Sustainable Use License: erlaubt internen Geschäftsbetrieb, verbietet n8n als Service anzubieten. Kunden bekommen nie n8n-Zugang (heyPensio betreibt die Workflows als eigenes Werkzeug) → spricht für erlaubt, aber vor Kunde 2 schriftlich absichern (n8n-Sales/FAQ).
[OFFEN] handel/preismodell-optionen.md :: Kunde bekommt nie n8n-Zugang
[OFFEN] handel/preismodell-optionen.md :: der Kunde ist Eigentümer seiner Umgebung und hält den Zugang
[OFFEN] handel/preismodell-optionen.md :: Kunde erhält keinen n8n-Zugang
[OFFEN] handel/preismodell-optionen.md :: direkter Eigentums-/Zugangswiderspruch
[OFFEN] handel/preismodell-optionen.md :: ein Vapi-Konto; Kunde pflegt nie ein Vapi-Konto
[OFFEN] handel/preismodell-optionen.md :: direkter Konten-/Vertragswiderspruch, sofern Vapi zur Eigentumsumgebung zählt
[OFFEN] handel/preismodell-optionen.md :: Architektur verlangt vor Kunde 2 noch Lizenzprüfung für n8n und Multi-Org-Prüfung für Vapi
[OFFEN] handel/preismodell-optionen.md :: for your own internal business purposes
[OFFEN] handel/preismodell-optionen.md :: Die Architektur-Weiche kann die Lizenz-Argumentation entwerten
[OFFEN] handel/preismodell-optionen.md :: möglicher K.-o.-Punkt für A3
[OFFEN] handel/preismodell-optionen.md :: als Service anzubieten
[OFFEN] handel/preismodell-optionen.md :: a regular Enterprise license
[OFFEN] handel/preismodell-optionen.md :: Wir rechnen vorläufig W-B
[OFFEN] handel/preismodell-optionen.md :: Klärweg + Auflagen AU-1…AU-3
[OFFEN] handel/preismodell-optionen.md :: Keine Rechtsberatung. Die Auslegung ist Stufe E. Für einen Preisentscheid, der Geld bindet, ist der Klärweg in § 5 zu gehen.
[OFFEN] handel/preismodell-optionen.md :: passt zu dem, was die Lizenz erlaubt ist bewusst nicht von der Lizenz gedeckt. Der Kern der Erlaubnis steht in einer FAQ, nicht im Vertragstext — und ob eine FAQ im Streitfall bindet, ist offen.
[OFFEN] handel/preismodell-optionen.md :: solange der Kunde n8n nicht seinerseits seinen Gästen öffnet
[OFFEN] handel/preismodell-optionen.md :: komplettes Server-Management pro Kunde
[OFFEN] handel/preismodell-optionen.md :: Wir rechnen vorläufig W-B
[OFFEN] handel/preismodell-optionen.md :: ⚠️ Erst nach Klärung § 5.3
[OFFEN] handel/preismodell-optionen.md :: alles unter Z-6-Vorbehalt
[OFFEN] handel/preismodell-optionen.md :: einzigen belegten Bestand-Anker
[OFFEN] handel/preismodell-optionen.md :: betriebene Automatisierung mit eigener Infrastruktur je Kunde
[OFFEN] handel/preismodell-optionen.md :: betriebene Automatisierung
[OFFEN] handel/preismodell-optionen.md :: bis 1 /3 /6 Stunden pro Monat
[OFFEN] handel/preismodell-optionen.md :: drei unabhängige Quellen … 130–160
[OFFEN] handel/preismodell-optionen.md :: verlangt 1.920 € Einrichtung
[OFFEN] handel/preismodell-optionen.md :: nimmt 1.920 € Einrichtung
[OFFEN] handel/preismodell-optionen.md :: bei Widerspruch gewinnt `preismodell-optionen.md`
[OFFEN] handel/preismodell-optionen.md :: kein Versäumnis dieser Runde: Die Erhebung ist nie beauftragt worden.
[OFFEN] handel/preismodell-optionen.md :: durch belegte Anker ersetzen (Wettbewerbspreise, Zahlungsbereitschaft Pilotumfeld, Kostenrechnung)
[OFFEN] handel/preismodell-optionen.md :: die Übergabefähigkeit macht abhängig
[OFFEN] handel/preismodell-optionen.md :: Standard klar begrenzen, sonst zieht das Modell in individuelle Dauerarbeit
[OFFEN] handel/preismodell-optionen.md :: höchste Einstiegshürde beim allerersten Kunden
[OFFEN] handel/preismodell-optionen.md :: Startgebühr deckt den Einführungsaufwand
[OFFEN] handel/preismodell-optionen.md :: es wird günstiger, wenn es läuft
[OFFEN] handel/preismodell-optionen.md :: nie kostenlos vorfinanzieren
[OFFEN] handel/preismodell-optionen.md :: Monatspreis − laufende Kosten je Kunde
[OFFEN] handel/preismodell-optionen.md :: Servicegebühr − unsere Arbeitszeit
[OFFEN] handel/preismodell-optionen.md :: Der Aufbau in einem Satz
[OFFEN] handel/preismodell-optionen.md :: erklärungsbedürftiger; braucht eine saubere Angebotsdarstellung
[OFFEN] handel/preismodell-optionen.md :: unabhängig von der Zimmer-oder Stellplatzanzahl
[OFFEN] handel/preismodell-optionen.md :: Modul A kostet X pro Zimmer
[OFFEN] handel/preismodell-optionen.md :: Bei vierwöchiger Baudauer muss der Name am selben Tag stehen, an dem der Bau beginnt — es gibt zwischen beiden null Tage Puffer.
[OFFEN] handel/preismodell-optionen.md :: Preismodell/Angebotsarchitektur fehlt und sperrt S1 (Angebot bis 23.10.)
[OFFEN] handel/preismodell-optionen.md :: Preismodell/Angebotsarchitektur fehlt
[OFFEN] handel/preismodell-optionen.md :: spätestens Fr 14.08.2026 — übermorgen
[OFFEN] handel/preismodell-optionen.md :: Monatlich kündbar + Startgebühr + Lizenzhaltung beim Hotel hat Vertrags-und ggf. StB-Relevanz — bei Bedarf als Zusatzpunkt zur StB-Fragenliste, KEIN Pflichtposten vor dem Termin (Liste ist final, 11 Fragen).
[OFFEN] handel/preismodell-optionen.md :: erstes Jahr Startgebühr verstärkt
[OFFEN] handel/preismodell-optionen.md :: übergeben ist nicht beantwortet
[OFFEN] handel/preismodell-optionen.md :: INHALTLICH bleiben ALLE Z-Punkte > offen
[OFFEN] handel/preismodell-optionen.md :: ⭐ Entscheide-Protokoll 13.08.2026
[OFFEN] handel/preismodell-optionen.md :: Wortlaut archiviert (sensibel, 13.08.)
[OFFEN] handel/preismodell-optionen.md :: vollständig > protokolliert
[OFFEN] handel/preismodell-optionen.md :: Empfehlung der Zentrale, vom User bestätigt
[OFFEN] handel/preismodell-optionen.md :: pro Haus macht schon Sinn außer der Betreiber > ist sehr preissensibel dann könnte man da schon was machen.
[OFFEN] handel/preismodell-optionen.md :: Zugänge > und alles gehören ihm.
[OFFEN] handel/preismodell-optionen.md :: oder man legt die Kosten gleich auf ihn um … bin mir nicht > schlüssig
[OFFEN] handel/preismodell-optionen.md :: Man könnte es aber auch pro Zimmer > kalkulieren was sagst du dazu?
[OFFEN] handel/preismodell-optionen.md :: von welcher geteilten > Plattform ist hier die Rede?
[OFFEN] handel/preismodell-optionen.md :: kein > Kalenderdatum genannt
[OFFEN] handel/preismodell-optionen.md :: Offene User-Entscheide (Rest nach dem heutigen Abarbeiten)
[OFFEN] handel/preismodell-optionen.md :: Startgebühr-HÖHE (nach MKT-Schätzung + E-6)
[OFFEN] handel/preismodell-optionen.md :: Startgebühr — Herleitung der Hypothesen-Spanne
[OFFEN] handel/preismodell-optionen.md :: ⭐ Entscheide-Protokoll 13.08.2026
[OFFEN] handel/preismodell-optionen.md :: je Kunde ist als technische Zähleinheit nicht gegen Objekt/Firma abgegrenzt
[OFFEN] handel/preismodell-optionen.md :: bei Widerspruch gewinnen die Quellen
[OFFEN] handel/preismodell-optionen.md :: eine vierte Frage, Paket vs. Baukasten
[OFFEN] handel/preismodell-optionen.md :: Dürfen wir vorläufig von W-A (geteilte Plattform) ausgehen?
[OFFEN] handel/preismodell-optionen.md :: Nicht Teil dieser Vorlage
[OFFEN] handel/preismodell-optionen.md :: wir rechnen vorläufig W-B
[OFFEN] handel/preismodell-optionen.md :: Alles unter Z-6-Vorbehalt … kann A3 kippen. > Kippt sie, kippt die Rechenbasis dieser Preisliste mit
[OFFEN] handel/preismodell-optionen.md :: Vorbehalt ohne Ablaufdatum
[OFFEN] handel/preismodell-optionen.md :: Nicht Teil dieser Vorlage
[OFFEN] handel/preismodell-optionen.md :: braucht E-6 und möglichst E-7
[OFFEN] handel/preismodell-optionen.md :: Z-6 hat mit E-4 einen Träger
[OFFEN] handel/preismodell-optionen.md :: Wenn der Einführungsaufwand (E-6) klein ist, ist (i) die bessere Wahl
[OFFEN] handel/preismodell-optionen.md :: Wer sie ohne E-6 umsetzt, entscheidet auf derselben Beleggrundlage wie die ChatGPT-These
[OFFEN] handel/preismodell-optionen.md :: Preishöhe bewusst nicht beziffert
[OFFEN] handel/preismodell-optionen.md :: Wer aus diesem Papier eine Zahl zitiert, zitiert keinen Preis von uns

Baseline-Eintraege gelistet: 1353 / 1353
```

### E — `--zielkandidaten` gegen `926ca3c`

```text
=== ZIEL-Kandidaten (generischer .md-Scan) ===
Suchraum: akquise/, handel/, fund/, beleg/
ZIEL: 27 / 27 Dateien
akquise/selbsttest-zitate.md: 18 Zitate
Kandidaten: 1 Dateien
Zitate in Kandidaten: 18
```

### F — Hauptlauf gegen `926ca3c` mit leerem Rohbeleg-Pool

```text
=== Zitatabgleich: neue Verstoesse gegen festgeschriebenen Bestand ===
Pruefwurzel: C:\Users\QWAFA_~1\AppData\Local\Temp\codex-r17b-4bb9429f516c4405be836a3b0423300a\stand-926ca3c
Baseline-Pruefstand: 0c4692f873f179917b28f4c210ae2e7be76cd653
R17-Pruefstand: 926ca3c74a2a1e9225cc3602f5d50e779a2426a0
ZIEL: 27 / 27 Dateien | versionierter POOL: 11 Dateien
Rohbeleg-Pool: NICHT VERFUEGBAR (Argument --rohbelege)
Geprueft: 1972 Zitate (>=25 Zeichen, deutsche Anfuehrungszeichen)
Quellenzitate bestaetigt (versionierter Pool): 427
Bestaetigt (Rohbeleg, lokal): 0
Eigene Formulierungen: 28 / 28 Eintraege im Bestand vorhanden (30 als EIGEN klassifizierte Fundstellen)
EIGEN-Eintraege mit Begruendung: 28 / 28
Nicht pruefbar (Rohbeleg-Pool nicht verfuegbar): 162
Rohbeleg bestaetigt nicht (R17-Aufnahmebefund): 0

--- Laufzahlen je Zieldatei ---
akquise/akquiseplan.md: 30 geprueft | 26 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 4 eigene | 0 Bestand (-) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
akquise/listenbau-regelwerk.md: 115 geprueft | 102 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 13 eigene | 0 Bestand (-) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
akquise/interessenabwaegung-o8.md: 147 geprueft | 34 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 113 Bestand (r15-altlast=113) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/wettbewerbsbild.md: 494 geprueft | 27 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 467 Bestand (r15-altlast=467) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/kanal-rechtsmatrix.md: 227 geprueft | 32 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 12 eigene | 144 Bestand (r15-altlast=144) | 39 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/angebotsarchitektur.md: 172 geprueft | 33 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 139 Bestand (r15-altlast=139) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
akquise/sperrdatei-struktur.md: 31 geprueft | 12 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 19 Bestand (r16-zielaufnahme=19) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
akquise/wellenprotokoll-vorlage.md: 44 geprueft | 19 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 1 eigene | 24 Bestand (r16-zielaufnahme=24) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
beleg/baseline-messplan.md: 14 geprueft | 5 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 9 Bestand (r17-zielaufnahme=9) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
beleg/vorlagen/interviewleitfaden-baseline.md: 39 geprueft | 1 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 38 Bestand (r17-zielaufnahme=38) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
beleg/vorlagen/referenzvereinbarung-pilotobjekte.md: 17 geprueft | 5 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 12 Bestand (r17-zielaufnahme=12) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
beleg/vorlagen/tagesblatt-firzlaffs.md: 5 geprueft | 2 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 3 Bestand (r17-zielaufnahme=3) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
beleg/vorlagen/tagesblatt-hostel-boninstrasse.md: 1 geprueft | 1 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 0 Bestand (-) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/erhebung/brandnamic-partner-vollerhebung.md: 73 geprueft | 7 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 38 Bestand (r17-zielaufnahme=38) | 28 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/erhebung/entwurf-anfrage-dehoga-sh.md: 2 geprueft | 0 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 2 Bestand (r17-zielaufnahme=2) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/erhebung/entwurf-anfrage-ihk-sh.md: 1 geprueft | 0 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 1 Bestand (r17-zielaufnahme=1) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/erhebung/regionalstatistik-groessenklassen.md: 18 geprueft | 0 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 18 Bestand (r17-zielaufnahme=18) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/erhebung/strang2-strukturdaten.md: 19 geprueft | 1 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 17 Bestand (r17-zielaufnahme=17) | 1 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/erhebung/verbund-vollerhebung.md: 13 geprueft | 1 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 12 Bestand (r17-zielaufnahme=12) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/persona-validierungsplan.md: 14 geprueft | 7 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 7 Bestand (r17-zielaufnahme=7) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
fund/positionierungspapier.md: 30 geprueft | 6 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 24 Bestand (r17-zielaufnahme=24) | 0 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/anwalts-briefing-2026-08.md: 125 geprueft | 50 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 36 Bestand (r17-zielaufnahme=36) | 39 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/entwurf-anfrage-ifb-hamburg.md: 12 geprueft | 3 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 4 Bestand (r17-zielaufnahme=4) | 5 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/entwurf-anfrage-wtsh.md: 14 geprueft | 2 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 8 Bestand (r17-zielaufnahme=8) | 4 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/foerderarchitektur-beraterrolle.md: 97 geprueft | 10 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 54 Bestand (r17-zielaufnahme=54) | 33 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/preisliste-vorlaeufig.md: 79 geprueft | 27 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 51 Bestand (r17-zielaufnahme=51) | 1 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU
handel/preismodell-optionen.md: 139 geprueft | 14 bestaetigt (Pool) | 0 bestaetigt (Rohbeleg, lokal) | 0 eigene | 113 Bestand (r17-zielaufnahme=113) | 12 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar) | 0 Rohbeleg bestaetigt nicht (R17-Aufnahmebefund) | 0 NEU

--- Bestand mit Nenner ---
R15-Altlast: 863 von 863 noch offen | 0 seit Baseline/Einbezug abgebaut | davon Rohbeleg-bestaetigt: 0
  akquise/interessenabwaegung-o8.md: 113 von 113 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/wettbewerbsbild.md: 467 von 467 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/kanal-rechtsmatrix.md: 144 von 144 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/angebotsarchitektur.md: 139 von 139 noch offen | davon Rohbeleg-bestaetigt: 0
R16-Aufnahmebestand der zwei neuen Zieldateien: 43 von 43 noch offen | 0 seit Baseline/Einbezug abgebaut | davon Rohbeleg-bestaetigt: 0
  akquise/sperrdatei-struktur.md: 19 von 19 noch offen | davon Rohbeleg-bestaetigt: 0
  akquise/wellenprotokoll-vorlage.md: 24 von 24 noch offen | davon Rohbeleg-bestaetigt: 0
R17-Aufnahmebestand der 19 neuen Zieldateien: 447 von 447 noch offen | 0 seit Baseline/Einbezug abgebaut | davon Rohbeleg-bestaetigt: 0
  beleg/baseline-messplan.md: 9 von 9 noch offen | davon Rohbeleg-bestaetigt: 0
  beleg/vorlagen/interviewleitfaden-baseline.md: 38 von 38 noch offen | davon Rohbeleg-bestaetigt: 0
  beleg/vorlagen/referenzvereinbarung-pilotobjekte.md: 12 von 12 noch offen | davon Rohbeleg-bestaetigt: 0
  beleg/vorlagen/tagesblatt-firzlaffs.md: 3 von 3 noch offen | davon Rohbeleg-bestaetigt: 0
  beleg/vorlagen/tagesblatt-hostel-boninstrasse.md: 0 von 0 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/erhebung/brandnamic-partner-vollerhebung.md: 38 von 38 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/erhebung/entwurf-anfrage-dehoga-sh.md: 2 von 2 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/erhebung/entwurf-anfrage-ihk-sh.md: 1 von 1 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/erhebung/regionalstatistik-groessenklassen.md: 18 von 18 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/erhebung/strang2-strukturdaten.md: 17 von 17 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/erhebung/verbund-vollerhebung.md: 12 von 12 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/persona-validierungsplan.md: 7 von 7 noch offen | davon Rohbeleg-bestaetigt: 0
  fund/positionierungspapier.md: 24 von 24 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/anwalts-briefing-2026-08.md: 36 von 36 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/entwurf-anfrage-ifb-hamburg.md: 4 von 4 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/entwurf-anfrage-wtsh.md: 8 von 8 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/foerderarchitektur-beraterrolle.md: 54 von 54 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/preisliste-vorlaeufig.md: 51 von 51 noch offen | davon Rohbeleg-bestaetigt: 0
  handel/preismodell-optionen.md: 113 von 113 noch offen | davon Rohbeleg-bestaetigt: 0

--- NICHT PRUEFBAR ---
handel/kanal-rechtsmatrix.md: 39 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar)
fund/erhebung/brandnamic-partner-vollerhebung.md: 28 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar)
fund/erhebung/strang2-strukturdaten.md: 1 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar)
handel/anwalts-briefing-2026-08.md: 39 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar)
handel/entwurf-anfrage-ifb-hamburg.md: 5 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar)
handel/entwurf-anfrage-wtsh.md: 4 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar)
handel/foerderarchitektur-beraterrolle.md: 33 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar)
handel/preisliste-vorlaeufig.md: 1 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar)
handel/preismodell-optionen.md: 12 nicht pruefbar (Rohbeleg-Pool nicht verfuegbar)

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
OK   R17 ZIEL baseline-messplan [beleg/baseline-messplan.md]
OK   R17 ZIEL interviewleitfaden [beleg/vorlagen/interviewleitfaden-baseline.md]
OK   R17 ZIEL referenzvereinbarung [beleg/vorlagen/referenzvereinbarung-pilotobjekte.md]
OK   R17 ZIEL tagesblatt-firzlaffs [beleg/vorlagen/tagesblatt-firzlaffs.md]
OK   R17 ZIEL tagesblatt-boninstrasse [beleg/vorlagen/tagesblatt-hostel-boninstrasse.md]
OK   R17 ZIEL brandnamic [fund/erhebung/brandnamic-partner-vollerhebung.md]
OK   R17 ZIEL dehoga-entwurf [fund/erhebung/entwurf-anfrage-dehoga-sh.md]
OK   R17 ZIEL ihk-entwurf [fund/erhebung/entwurf-anfrage-ihk-sh.md]
OK   R17 ZIEL regionalstatistik [fund/erhebung/regionalstatistik-groessenklassen.md]
OK   R17 ZIEL strukturdaten [fund/erhebung/strang2-strukturdaten.md]
OK   R17 ZIEL verbund [fund/erhebung/verbund-vollerhebung.md]
OK   R17 ZIEL persona [fund/persona-validierungsplan.md]
OK   R17 ZIEL positionierung [fund/positionierungspapier.md]
OK   R17 ZIEL anwalts-briefing [handel/anwalts-briefing-2026-08.md]
OK   R17 ZIEL ifb-entwurf [handel/entwurf-anfrage-ifb-hamburg.md]
OK   R17 ZIEL wtsh-entwurf [handel/entwurf-anfrage-wtsh.md]
OK   R17 ZIEL foerderarchitektur [handel/foerderarchitektur-beraterrolle.md]
OK   R17 ZIEL preisliste [handel/preisliste-vorlaeufig.md]
OK   R17 ZIEL preismodell [handel/preismodell-optionen.md]
Positivkontrolle: 33 / 33

--- Gegenprobe (darf NICHT treffen) ---
OK   verfaelschte Zahl
OK   verfaelschte Frist
OK   erfundener Satz
Gegenprobe: 3 / 3

ERGEBNIS: GRUEN — 0 neue Verstoesse; Bestand bleibt sichtbar.
```
