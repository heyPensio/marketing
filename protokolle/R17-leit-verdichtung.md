# R17 — Leitsession: CLAUDE.md-Verdichtung auf die Sollmarke (17.08.2026)

> **Status: VORBEREITET (Scratchpad), noch NICHT auf CLAUDE.md
> angewandt.** Anwendung + Commit erst nach den drei Abschlussmeldungen
> R17-A/B/C (CLAUDE.md-Regel 2: Wahrheits-Kanal „am Ende"; die laufenden
> Sessions und ihre Prüfer-Subagenten laden bis dahin den Stand
> `926ca3c`). Dieser Abschnitt wird beim Anwenden fortgeschrieben
> (Commit-Hash, Wächter-Lauf nachher).

## Ausgangslage (gemessen)

- CLAUDE.md `926ca3c`: **84.713 B** (`tools/pruefe-budget.js`, Bytes =
  Wert; Codepoints 82.674). Sollmarke 80.000 / Warn 85.000 / Hart 90.000
  (Baustein `regelwerk-waechter`, Marken selbst erhoben 17.08.).
  Kompensationspflicht aktiv seit dem R16-Debrief (Delta +736 B).
- Zeitpunkt: 17.08. 16:44–16:50 MESZ (`date`), Leitsession frisch nach `/clear`
  (Regel „Verdichten ist müdigkeitsempfindlich": kein Müdigkeits-Zug).

## Verfahren

1. Absätze nach Größe sortiert (awk über Bullet-Anfänge); die fünf
   größten regelhaltigen Bullets gewählt: Positivkontrolle (6.619 B) ·
   Verdichten verliert den Vorbehalt (3.069 B) · Anwesenheit ist nicht
   Wirksamkeit (2.928 B) · Vorwärtsverweis-Konvention (3.095 B) ·
   Schwachstelle über Kanäle (1.598 B).
2. Je Bullet: ALT-Text vollständig gelesen; jede Handlungsregel und
   jeder Vorbehalt bleibt in CLAUDE.md; jede FALLGESCHICHTE (Zahlen,
   Belegfälle, Herkunfts-Prosa) wandert unter einen Anker `V17-nn` in
   `lehren-register.md` (neuer Abschnitt „Verdichtung R17"), sofern sie
   nicht schon unter einem genannten L-Anker steht. Prüffrage je
   Streichung: „Fällt ein Beleg oder ein Vorbehalt?" — nur Belege fallen.
3. Zusammensetzen per `sed`-Zeilenbereichen (Grenzen per grep der
   Bullet-Anfänge belegt: 441/536 · 549/595 · 733/776 · 1016/1061 ·
   817/839 in der jeweiligen Zwischenfassung), Messung mit dem
   Budget-Wächter (`--nur-messen`).
4. **Gegenprobe durch Subagenten** (frischer Kontext): Diff-Hunks nur in
   den fünf Bullets? Atomare Aussagen ALT → erhalten/ausgelagert/VERLOREN,
   Vorbehalts-Zählung, Anker-Zuordnung. Ergebnis unten.

## Ergebnis (Scratchpad-Fassung `CLAUDE.neu2.md`)

| Bullet | ALT (B) | NEU (B) | Delta | Ausgelagert nach |
|---|---|---|---|---|
| Positivkontrolle | 6.619 | 4.220 | −2.399 | V17-1…V17-5 (+ L-11/L-18/L-24/L-30/L-37/L-41/L-43 bestehend) |
| Verdichten verliert den Vorbehalt | 3.069 | 2.421 | −648 | V17-6, V17-7 (+ L-32/L-33/L-47) |
| Anwesenheit ist nicht Wirksamkeit | 2.928 | 2.209 | −719 | V17-8, V17-9 (+ L-21/L-40) |
| Vorwärtsverweis-Konvention | 3.095 | ~2.400 | ~−690 | V17-10, V17-11 (+ L-25) |
| Schwachstelle über Kanäle | 1.598 | ~920 | ~−680 | V17-12, V17-13 |
| **Summe** | | | **−5.130** | 84.713 → **79.583 B** |

Zählweg: `wc -c` je Scratch-Datei; Gesamt `wc -c CLAUDE.neu2.md` und
`node tools/pruefe-budget.js --nur-messen <pfad>` = 79.583 (Bytes =
Wert). Reserve zur Sollmarke: 417 B — der Debrief R17 (Stempel-Kopf,
neue Kerne) muss seine Kompensation selbst mitbringen.

## Gegenprobe (Subagent) — wird nachgetragen

*(offen — Ergebnis + Disposition folgen vor dem Anwenden.)*

## Anwendung — wird nachgetragen

*(Commit-Hash, `pruefe-budget.js`-Lauf am Arbeitsbaum + HEAD, Kopien-
Wächter, `git diff --numstat` gegen `926ca3c` mit Löschungszählung.)*
