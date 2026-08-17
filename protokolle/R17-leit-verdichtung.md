# R17 — Leitsession: CLAUDE.md-Verdichtung auf die Sollmarke (17.08.2026)

> **Status: ANGEWANDT 17.08. ~18:55 MESZ (s. Abschnitt „Anwendung"). Ursprünglich: VORBEREITET (Scratchpad), noch NICHT auf CLAUDE.md
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
| **Summe (vor Gegenprobe)** | | | **−5.130** | 84.713 → **79.583 B**; nach Reparaturen + Edit-Anker-Kürzung: **79.859 B** (−4.854) |

Zählweg: `wc -c` je Scratch-Datei; Gesamt `wc -c CLAUDE.neu2.md` und
`node tools/pruefe-budget.js --nur-messen <pfad>` = 79.583 (Bytes =
Wert). Reserve zur Sollmarke: 417 B — der Debrief R17 (Stempel-Kopf,
neue Kerne) muss seine Kompensation selbst mitbringen.

## Gegenprobe (Subagent, frischer Kontext, 16:50–16:55 MESZ, Laufzeit 309 s)

Prüfgegenstand `CLAUDE.neu2.md` (79.583 B) gegen ALT `926ca3c` (vom
Agenten selbst als byte-identisch zu `CLAUDE.verdichtung.md` bestätigt).

- **Diff-Hunks: 17/17 innerhalb der fünf Bullets** (`diff -U0 | grep -c
  '^@@'`; Hunk-Zeilen 447…1045 je Bullet zugeordnet), außerhalb 0
  Änderungen — mechanisch bestätigt.
- **Atomare Aussagen ALT: 140** (56 + 24 + 26 + 21 + 13); erhalten in
  NEU 111, ausgelagert nach V17/L-Register 28 (jede Auslagerung am
  echten `lehren-register.md` gegengeprüft, Zeilenangaben im
  Agenten-Bericht), **VERLOREN oder sinnverschoben: 8** —
  (a) „nicht nur irgendeinen garantierten Treffer" + „z. B." vor
  Teilwort-Probe (Verallgemeinerung) · (b) Summenproben-Beispiel
  „2+4+1=7 kann nie anders ausfallen" (weder NEU noch V17) · (c)
  L-30-Mechanismus „sobald je Anbieter ein Treffer genügt" (nirgends
  mehr voll; Register-Zeiger L-30-Nachtrag zeigt auf CLAUDE.md) · (d)
  „Scheinentwarnung, die zwei Dokumente prüfte und über vier schwieg"
  (Zahlen weg) · (e) „sie darf nicht auf den nächsten Debrief warten"
  (Verbot gestrichen) · (f) Erklärung der Vorrangklausel „bei
  Widerspruch gewinnt die Quelle" · (g) zwei Kontrast-Hälften („nicht
  ‚wo steht der alte Wert?'", „nicht nur thematisch betroffene
  Dateien") · (h) Kanäle-Bullet: **„EINEM von fünf Wegen" — „fünf" war
  neu ABGELEITET (2 + 3)**, stand nirgends in ALT.
- **Vorbehalte ALT n = 55, in NEU erhalten m = 47**, 3 ausgelagert (V17-1,
  V17-6, V17-12), 5 gestrichen ohne Auslagerung (= a, e, g, „signalisieren
  nur Sorgfalt" [Register L-47 ✓]).
- Anker V17-1…13: je genau einmal, keine Vertauschung. Hinweis: V17-5
  bündelt L-24/L-30/L-18-Fälle, hängt in NEU nur am Korpus-Satz.
- Grenzen des Agenten: Umordnungs-Wirkungen, Verluste in „nicht X,
  sondern Y"-Paaren, „z. B."/„auch"-Verallgemeinerungen — genau die
  Klassen (a)/(g) hat er trotzdem gefunden.

**Disposition (8/8, alle in `CLAUDE.neu3.md`/`neu4` repariert, keine
verworfen):** (a) wörtlich zurück · (b) → Register V17-5 (Beleg, kein
Vorbehalt — der ⚠️-Vorbehalt selbst stand mit drei Teilsätzen in NEU) ·
(c) Mechanismus wörtlich zurück in den L-30-Satz · (d) Zahlen zurück
(„zwei Dokumente prüfte und über vier schwieg") · (e) wörtlich zurück ·
(f) wörtlich zurück · (g) beide Kontrast-Hälften zurück · (h) „fünf"
gestrichen, Rohform „EINEM von zwei beschriebenen Wegen, die
Nachmessung fand drei weitere" (keine abgeleitete Zahl). Kosten der
Reparaturen: 79.583 → 80.025 B (+442) → **Sechster Bullet gekürzt**:
„Ein Edit-Anker …" — nur die Fallgeschichte (198 Einfügungen /
Tabellen-Vorbehaltssatz), die vollständig unter L-38 im Register steht,
durch „Fälle unter L-38" ersetzt; alle Handlungsregeln und beide Nenner
bleiben. **Endstand `CLAUDE.neu4.md`: 79.859 B** (`wc -c`; −4.854 B
gegen `926ca3c`).

**Lehre für den Debrief (Zweitbeleg „Verdichten verliert den
Vorbehalt", am eigenen Objekt):** 8 von 140 Aussagen fielen, davon 5
Vorbehalte und eine ERFUNDENE Zahl — bei einer frischen Session, mit
ausdrücklicher Prüffrage je Streichung. Ohne Gegenprobe wären sie
committet worden. Die Klassen (a)/(g) — „z. B." und Kontrast-Hälften
— gehören als Muster in die Verdichtungs-Gegenprobe des Debrief-Skills.

## Anwendung (17.08. ~18:55 MESZ, nach den drei Abschlussmeldungen)

- Vorbedingung gemessen: `cmp <(git show 926ca3c:CLAUDE.md) CLAUDE.md`
  = identisch (niemand hat CLAUDE.md während der Runde angefasst).
- `CLAUDE.neu4.md` → `CLAUDE.md`; `register-v17.md` (V17-1…13 inkl.
  Summenproben-Nachtrag) an `lehren-register.md` angehängt (+98 Zeilen,
  0 Löschungen).
- **Budget-Wächter:** Arbeitsbaum **79.859 B** (Codepoints 77.930) gegen
  HEAD 84.713 → −4.854 B, unter Sollmarke 80.000 (Reserve 141 B).
  Kopien-Wächter SYNCHRON 12 / 0.
- **Löschungszählung `git diff 926ca3c -- CLAUDE.md`:** 132 Einfügungen /
  **209 Löschungen in genau 6 Hunks** = die sechs verdichteten Bullets;
  jede Löschung ist Ersetzung durch die Neufassung desselben Bullets
  (Gegenprobe oben: 17/17 Hunks der Fünfer-Fassung im Scope, sechster
  Bullet nachträglich, Kern + beide Nenner erhalten).
- Commit: s. Kopfzeile des Debrief-Änderungsreports im Tagesplan
  (CLAUDE.md + `lehren-register.md` + dieses Protokoll in einem Commit).
- ⚠️ Der Kopf-Stempel der CLAUDE.md wird erst im Debrief (Blueprint-
  Rückfluss) angefasst — die Verdichtung selbst ändert keinen
  Gerüst-Stand.
