# R08-A — Zitatprüfung der beiden akquise-Dokumente (Protokoll)

**Session:** R08-A (Ben Beckman) · **Datum:** 11.08.2026 ·
**Prüfstand:** `df52e0c` + die uncommitteten Änderungen dieser Session
· **Skript:** `akquise/pruefe-zitate.js` (im Repo, reproduzierbar mit
`node akquise/pruefe-zitate.js`)

## Was geprüft wurde

Jedes in deutschen Anführungszeichen gesetzte Zitat **ab 25 Zeichen** in
`akquise/akquiseplan.md` und `akquise/listenbau-regelwerk.md`, mechanisch
gegen einen Quellenpool aus acht Repo-Dateien:
`handel/kanal-rechtsmatrix.md` · `fund/erhebung/regionalstatistik-groessenklassen.md`
· `fund/positionierungspapier.md` · `protokolle/R00-planpruefung-2026-08-09.md`
· `projektquelle-mkt.md` · `STATUS.md` · `beleg/baseline-messplan.md` ·
`CLAUDE.md`.

**Normalisierung vor dem Vergleich** (jede Angleichung kann theoretisch
einen echten Unterschied verdecken — deshalb im Skript einzeln benannt):
Markdown-Fettung, Zitatpräfixe (`> `), NBSP, alle Anführungszeichenformen,
Whitespace-Kollaps, Bindestrich/Schrägstrich + Whitespace (Zeilenumbrüche
mitten in Komposita). **Der Vergleich läuft danach zeichenweise.**

## Ergebnis

| Größe | Wert (Endstand) |
|---|---|
| Geprüfte Zitate | **102** |
| Deklarierte eigene Formulierungen (Ausnahmeliste im Skript, je begründet) | **8** |
| **Quellenzitate wörtlich bestätigt** | **94 / 94** |
| Positivkontrolle (MUSS treffen — je Quelldatei ein Anker) | **7 / 7** |
| Gegenprobe (darf NICHT treffen) | **3 / 3** |
| Exit-Code Hauptlauf | **0** |
| Exit-Code Selbsttest (`--selbsttest`) | **0** |

*(Der erste Lauf zählte 99 Zitate / 93 bestätigt. Die Differenz sind
die Zitate, die dieses Protokoll und der Reparaturvermerk im Regelwerk
§ 12 selbst eingeführt haben — darunter zwei absichtlich zitierte
FEHLERfassungen, die im Pool gerade nicht stehen dürfen. Sie sind als
solche in der Ausnahmeliste deklariert.)*

## Selbsttest des Extraktionspfades (Rückbau-Gegenprobe)

**Warum er nötig war:** Der Hauptlauf prüft, ob Zitate mit der Quelle
übereinstimmen. Er prüft **nicht**, ob die Extraktion überhaupt
funktioniert — genau dort lag der Fehler des ersten Laufs (0 von 99).
Eine grüne Meldung des Vergleichsteils beglaubigt den Extraktionsteil
nicht.

**Form** (`akquise/selbsttest-zitate.md`, aufgerufen mit
`node akquise/pruefe-zitate.js --selbsttest`): Der Selbsttest läuft durch
**dieselben Funktionen** wie der Produktivlauf — er baut die Prüfkette
nicht nach. Acht Muster:

| Gruppe | Muster | Erwartung |
|---|---|---|
| **T1** | einfaches Quellenzitat | muss bestätigt werden |
| **T2** | Quellenzitat **über einen Zeilenumbruch** | muss bestätigt werden (prüft den Whitespace-Kollaps) |
| **T3** | Quellenzitat mit **Sonderzeichen** (÷) und Ziffern | muss bestätigt werden |
| **T4** | Quellenzitat mit **Bindestrich über Umbruch** | muss bestätigt werden |
| **F1** | **eine Ziffer geändert** (13 → 14 Art.-14-Angaben) | muss gemeldet werden |
| **F2** | **Verneinung entfernt** — der gefährlichste Fall | muss gemeldet werden |
| **F3** | plausibel klingendes **erfundenes** Zitat | muss gemeldet werden |
| **F4** | echter Satz **außerhalb des Quellenpools** | muss gemeldet werden (prüft, dass der Pool nicht zu weit gefasst ist) |

**Ergebnis 11.08.2026: 8 extrahiert, 4 bestätigt, 4 gemeldet —
BESTANDEN**, Exit-Code 0.

⚠️ **Pflege-Kopplung:** Wer das Skript ändert, ändert die Selbsttest-Datei
im selben Zug mit; wer ein Muster ergänzt, ergänzt die zugehörige
T-/F-Zeile.

## Die sechs gefundenen und reparierten Abweichungen

Alle sechs sind vor dem ersten Commit repariert worden; sie sind hier
festgehalten, weil sonst niemand sieht, welcher Prüfweg gegriffen hat und
welche Sätze ohne ihn heute falsch im Dokument stünden.

| # | Datei | Vorher (falsch) | Quelle (richtig) | Fehlerklasse |
|---|---|---|---|---|
| **Z-1** | akquiseplan | „…(GbR in Gründung, Rebrand-Name offen) — sperrt den Versand" | „…(GbR in Gründung, Rebrand-Name offen — sperrt den Versand)" | Klammergrenze verschoben — ändert, was als Klammerzusatz und was als Hauptaussage gelesen wird |
| **Z-2** | akquiseplan | „langsame, aber loyale Entscheider" | „Es ist ein Empfehlungsmarkt mit langsamen, aber loyalen Entscheidern." | Grammatisch an den eigenen Satz angepasstes Pseudo-Zitat |
| **Z-3** | Regelwerk | „was gebaut werden muss, bevor der erste Kontakt rausgeht" | „Was gebaut werden muss, bevor der erste Kontakt rausgeht" | Groß-/Kleinschreibung am Zitatanfang |
| **Z-4** | Regelwerk | „nicht durch die Pflichtinformationen (Art. 13, 14 DS-GVO) erweitert werden" | „nicht durch die **…** Pflichtinformationen (Art. 13, 14 DS-GVO) erweitert werden" | **Auslassungszeichen entfernt** — das Zitat suggerierte Vollständigkeit, wo die Quelle eine Auslassung ausweist |
| **Z-5** | Regelwerk | „unser Angebot passt perfekt" | „unser Angebot passt doch perfekt zu diesem Hotel" | Verkürzung |
| **Z-6** | Regelwerk | „die Verteilung folgt der allgemeinen Regel — …" | „Die Verteilung folgt der allgemeinen Regel — …" | Groß-/Kleinschreibung am Zitatanfang |

**Zusätzlich geglättet (kein Zitatfehler, aber Verwechslungsgefahr):** Das
Feld Q-1 des Quellenprotokolls führte zwei selbst erfundene Beispiele in
Anführungszeichen, die den Mustern der Rechtsmatrix (C4) ähnlich sahen.
Sie sind durch die Mustertexte der Quelle ersetzt und als solche
gekennzeichnet.

## Werkzeugbefund: ein Muster, das nicht treffen konnte

**Der erste Lauf meldete „Geprüft: 0 Zitate" — bei 99 vorhandenen.**
Ursache: Das Muster erwartete als schließendes Zeichen `“` (U+201C); das
Repo verwendet durchgängig `"` (U+0022).

Gemessen (Codepoint-Zählung, `node -e`):

| Datei | U+201E („) | U+0022 (") | U+201C (“) |
|---|---:|---:|---:|
| `akquise/listenbau-regelwerk.md` | 105 | 105 | 0 |
| `akquise/akquiseplan.md` | 40 | 40 | 0 |
| `handel/kanal-rechtsmatrix.md` | 243 | 243 | 0 |

**Warum das hier auffiel und sonst nicht auffallen würde:** Die
Positivkontrolle lief im selben Lauf über einen anderen Prüfkanal (direkte
Substring-Suche im Pool) und meldete 7/7 — der Pool war also erreichbar,
die Quellen lesbar, das Skript „funktionierte". Nur die Extraktion war
tot. **Ein Lauf, der an einer Stelle grün meldet, beglaubigt die andere
Stelle nicht** — die Kontrolle gehört pro Muster, nicht pro Lauf
(CLAUDE.md). Auffällig wurde es allein durch die ausgegebene **Zahl 0**;
hätte das Muster 90 statt 99 Zitate gefunden, wäre nichts aufgefallen.

**Konvention fürs Repo, damit der nächste Prüfweg nicht darüber
stolpert:** Zitate werden hier mit `„` (U+201E) geöffnet und mit `"`
(U+0022) geschlossen.

## Was diese Prüfung ausdrücklich NICHT leistet

1. **Keine Aussage über die Fundstellen-Zuordnung** — ein wörtlich
   korrektes Zitat kann am falschen Ort stehen oder eine falsche
   Abschnittsangabe tragen.
2. **Keine Aussage über die Schlussfolgerungen**, die neben den Zitaten
   stehen.
3. **Keine Vollständigkeitsaussage** — sie prüft, ob das Zitierte richtig
   zitiert ist, nicht, ob das Nötige zitiert wurde. (Eine Quelle
   vollständig gelesen zu haben und sie vollständig übernommen zu haben
   sind zwei Behauptungen mit zwei Belegen — L-18.)
4. **Keine Aussage über Zitate unter 25 Zeichen** und über solche ohne
   Anführungszeichen (paraphrasierte Übernahmen).

Für 1–4 ist der Prüf-Subagent zuständig (`protokolle/R08-A-pruefer.md`).
