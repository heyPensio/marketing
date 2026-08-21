# Tagesplan Marketing — Freitag, 21.08.2026

> **Erstellt:** 21.08.2026 13:24–13:40 MESZ (Shanks, Leitsession;
> Wochentag/Uhrzeit per `date` erhoben, nie aus dem Kopf).
> **Einstiegs-Auftrag GEHOLT** (Pull-Modell) aus
> `zentrale\briefings\briefing-2026-08-21.md` § 10 „Einstiegs-Prompts",
> Abschnitt Marketing — kein gepasteter Prompt, kein neuerer Stand
> vorgelegt.
> **Runde:** R20 (Namenshärtung).

---

## Rahmen

| Feld | Wert | Quelle |
|---|---|---|
| Wochentag/Start | Freitag, 21.08.2026, 13:24 MESZ | `date` |
| Arbeitsdauer | voller Tag | Briefing § Tagesrahmen (User-Erhebung 21.08., Dropdown) |
| Termine | keine (Kalender 21.–28.08. am Objekt geprüft: leer) | Briefing § Tagesrahmen |
| User-Erreichbarkeit | vor Ort in Kiel (20.–25.08.), erreichbar | Briefing § Tagesrahmen |
| Wochen-Kontingent | „Spielraum" — **User-Einschätzung, kein Messweg** | Briefing § Tagesrahmen |
| CLI-Version | 2.1.238 (Vortag 2.1.235 → **Versionswechsel = Kanarien-Auslöser**) | `claude --version` |

**Engpass-Satz Erreichbarkeit (Freitagnachmittag):** Kanzleien, Verbände
und Behörden sind heute nur noch bis ca. 16:00 MESZ erreichbar; danach
schließt das Fenster bis Montag. Betroffen ist genau ein offener Posten:
der **R16-Entscheid „Kanzlei"** (Anwalts-Markenrecherche zum
K2-Vorbehalt am Kern „Innsight"). Ohne Entscheid heute liegt die
Anwalts-Achse bis Montag 24.08. — dieselbe Woche, in der auch der
StB-Faden (Steinmetz, Urlaub bis Mo) wieder aufmacht. **Jede weitere
Woche geht vom November-Fenster ab** (Briefing § 1).

## Blocktabelle

| Block | Zeit | Inhalt | Status |
|---|---|---|---|
| 1 | 13:40 → ~15:15 | **Namenshärtung** (Kern des Tages): Skript-Härtung Kontrollen Anfang+Ende · Neumessung der sechs `.de`/`.com` + Register-Schnellprobe mit Rohbeleg · Härtungs-Nachtragskasten in die Entscheidungsvorlage (Risikozeile je Kombination) · unabhängiger Prüf-Subagent auf den Kasten | **SCHARF** |
| 2 | ~15:15 → ~16:30 | **Postkorb + Design-DNA:** beide Zentrale-Meldungen in die Projektquelle (MKT-MARKE), Postkorb im selben Commit leeren (Transportbehälter) · `design-dna`-Baustein aus dem Gerüst nach `.claude/skills/` aktivieren | PROGNOSE |
| 3 | ~16:30 → ~18:00 | **Ruhiges Fenster (kein Parallelbetrieb):** Gerüst-Nachzug 11 Deltas (`/projekt-init nachzug`) inkl. der 5 DRIFT-Kopien + Kanarien-Zeilen · `.gitattributes` für dieses Repo (R36-C-Klasse, ausgeführte `.js` vorhanden) | PROGNOSE |
| 4 | offen | Nach User-Zuruf: Entscheide-Bündel (fünf R16 · Zielstichprobe · Vorlagen-Lesart/A5 · H-8/AKQ-H-2 · H-1-Delta) oder R20-Debrief | PROGNOSE |

*(Block 1 ist scharf geschnitten; 2–4 sind PROGNOSE. Abbruch oder
Verkürzung ist ein gültiges Ergebnis — wie lange gearbeitet wird,
entscheidet der User laufend.)*

**Blockwechsel-Handgriff:** Kein Fensterwechsel geplant, solange die
Kontextlast trägt. Wird ein Neustart nötig: `claude --resume`, diese
Session wählen — Übergabe-Block am Tagesende vorher füllen.

## Review-Regime (Kritikalitäts-Staffel)

| Strang | Kritikalität | Regime |
|---|---|---|
| Namenshärtung (Block 1) | **HOCH — freigabetragend** (der User entscheidet den Firmennamen auf diesem Dokument) | **Voll-Review durch unabhängigen Prüf-Subagenten mit frischem Kontext**, Schreibrecht auf genau eine Datei (`protokolle/R20-pruefer.md`), eingefrorener Commit-Hash im Auftrag. *(Ersatz für den fehlenden Zweit-Session-Blick — s. Zuschnitt-Entscheid unten.)* |
| Postkorb/Design-DNA (Block 2) | mittel (Bestandsdokument, keine Außenwirkung) | Kurzraster durch die Leitsession; Rohbeleg-Gegenprobe je übernommenem Befund (Meldungen sind Quelle zweiter Hand) |
| Gerüst-Nachzug (Block 3) | mittel (Methodik, maschinell prüfbar) | Wächter-Lauf `pruefe-kopien.js` als Vorher/Nachher-Messung mit Nenner |

## Zuschnitt-Entscheid des Users (Dropdown, 21.08. ~13:35 MESZ)

1. **Zuschnitt:** „Leitsession macht alles allein" — **keine parallele
   Arbeits-Session heute.** Folge nach Namenskonvention: Der Buchstabe
   `R20-A` wird **frei gelassen und hier vermerkt** (die Leitsession
   übernimmt den Strang selbst). Der entfallende Zweit-Session-Review
   wird durch den Prüf-Subagenten oben ersetzt — er ist damit
   **Pflicht, nicht Kür**.
2. **Vorlagen-Form:** „Nachtrags-Kasten in der alten Vorlage" — der
   Haupttext von `marke/entscheidungsvorlage-name-2026-08-19.md` bleibt
   **unverändert** (Freigabe-Regel: vorgelegte Texte werden nie
   umgeschrieben), die Härtung kommt als markierter Kasten. ⚠️ Bewusst
   getragene Folge: Der Hauptteil behandelt weiter die drei Finalisten
   Wisestay/Innsight/Stayahead, die so nicht mehr zur Wahl stehen — der
   Kasten muss das an der Stelle, wo der Leser ankommt, sichtbar
   auflösen (Vorwärtsverweis-Konvention).
3. **Design-DNA:** „Einarbeiten + `design-dna`-Baustein heute
   aktivieren" — Anwendung (Referenz-Auswahl savee/refero) bleibt
   bewusst NACH dem Namensentscheid.

## Codex-Eignung je Strang (Pflichtzeile — Schweigen ist keine Prüfung)

| Strang (Inhalt in drei Worten) | Codex |
|---|---|
| Block 1a — Skript-Härtung `schnellcheck.js` (Kontrollen ans Lauf-ENDE) | **ja** — hartes Kriterium (Selbsttest: Kontrollzeile erscheint zweimal, beide Kanäle mit verschiedenem Sollwert). *Nicht delegiert:* Änderung ist ein Zehnzeiler, Delegations-Overhead > Nutzen; die Leitsession führt ihn im selben Zug mit der Messung aus. |
| Block 1b — Domain-/Register-Neumessung sechs Kombinationen | **ja** — hartes Fertig-Kriterium (Messtabelle + Rohbelege + Hashes + Kontrollen je Kanal). *Nicht delegiert:* Laufzeit Minuten, und der Messlauf ist die Vorbedingung von 1c in derselben Hand. |
| Block 1c — Risikozeilen/Härtungskasten Entscheidungsvorlage | **nein** — Belegstufen-Urteil an einem freigabetragenden Entscheider-Dokument. |
| Block 2 — Postkorb-Einarbeitung + Baustein-Aktivierung | **nein** — Wahrheits-Kanal-Schreibrecht (Projektquelle) + Einschätzungsanteil. |
| Block 3 — Gerüst-Nachzug + `.gitattributes` | **nein** — CLAUDE.md/Skills-Schreibrecht (Wahrheits-Kanal), Kopien-Abgleich mit Urteil über Drift-Richtung. |

*(Die Block-Einschätzung des Briefings § 8 ["MKT Domain-Neumessung:
Codex-KANDIDAT ja"] ist damit auf Teilaufgaben-Ebene NEU gestellt und
im Ergebnis bestätigt — die Nicht-Delegation ist eine Wirtschaftlichkeits-
Entscheidung, kein Eignungs-Urteil. Werkzeugwahl liegt beim User: sagt
er „gib 1a/1b an Codex", ist das ohne Weiteres möglich.)*

## Prämissen-Kasten des Briefings (§ 10 Marketing) — geprüft 13:00–13:35

| # | Prämisse | Befund |
|---|---|---|
| 1 | Sechser-Auswahl (Innsight-Kombinationen, Beiname-Route) steht unverändert; Entscheid beim User, fällt heute nicht zwingend | ✅ **hält** — Nachtrags-Kasten `marke/entscheidungsvorlage-name-2026-08-19.md` ~15:00 MESZ + Tagesende-Übergabe `protokolle/tagesplan-2026-08-19.md`; Repo seit Debrief `e75c4b5` ohne Änderung an `marke/` |
| 2 | Domain-Lage zuletzt 18./19.08. gemessen; Neumessung vor dem Entscheid Pflicht | ✅ **hält** — Rohbelege `sensibel/rohbelege-R19-leit/beiname-lauf1–6` (19.08., ~11:46–11:58 UTC, RDAP); Front-Running-Ablehnung als getragenes Risiko im Kasten dokumentiert |
| 3 | K2 bewusst offen (Anwalts-Vorbehalt: Inn:Sights Kl. 42 · INNOSIGHT · US-Namensvetter) | ✅ **hält** — gleicher Kasten, plus K4-Verzicht (Widerruf ~14:30 MESZ) |
| 4 | Mail-Triage bis 21.08. ~12:20 zentral erledigt, keine eigene Volldurchsicht | ✅ **übernommen** — Briefing § 5 (15 Zeilen, Papierkorb `in:anywhere` gegengeprüft); MKT-relevant nur die Refero-Zeile (s. Eingänge) |

**Ergänzung zum Briefing (keine gekippte Prämisse, aber eine Lücke):**
Das Briefing meldet unter § 2 „Postkorb-Lage" ausschließlich den
**Zentrale**-Postkorb als leer. Der **MKT-Postkorb `eingang\` ist NICHT
leer** — dort liegen seit 20.08. zwei unbearbeitete Meldungen (s.
Eingänge). Kein Widerspruch zum Briefing, aber der MKT-Einstiegs-Prompt
erwähnt sie nicht.

## Zustand bei Tagesbeginn (gemessen 13:00–13:35 MESZ)

- **Repo:** HEAD `8b4df86`, Arbeitsbaum **sauber**, `git fetch` +
  `git log HEAD..origin/main` = **0 eingehende Commits** (Rebase
  entfällt, damit auch das Autostash-Risiko).
- **Ungereviewte Arbeits-Session-Commits: KEINE.** Seit dem
  R19-Debrief (`e75c4b5`) folgten genau vier Commits: `a7097af`
  (Leitsession, Postkorb ProVision eingearbeitet + Meldung gelöscht)
  sowie `64120bf`/`5a21e51`/`8b4df86` — das sind **Zustellungen der
  Zentrale IN unseren Postkorb**, keine Marketing-Arbeit. Keine
  ausstehende Abschlussmeldung, Debrief R19 ist gefahren.
- **Gerüst-Stempel:** CLAUDE.md-Kopf `9187d31`; Blueprint-Delta
  `9187d31..HEAD` = **11 Commits** → **Methodik VERALTET**, Nachzug als
  Tagesposten (Block 3). Inhaltlich heute schon relevant und in diesem
  Plan ANGEWANDT (ohne Kopien-Nachzug): Durchreich-Zeile ist ein Zeiger
  inkl. Rohbelege (`45a4fff`) · Machbarkeits-Testprobe vor generativer
  Asset-Serie (`7bc627d`) · Bericht ist kein Wortprotokoll (`2456ebf`)
  · `git worktree`-260-Zeichen-Falle (`e1ec1c8`).
- **Kopien-Wächter:** `pruefe-kopien.js` meldet **5 DRIFT / 7 synchron**
  (`commands/tagesstart` · `rules/browser-automation` ·
  `rules/quellen-beschaffung` · `rules/skill-bauweise` ·
  `rules/windows-powershell`). **Richtung je Datei einzeln gemessen**
  (`diff` Master↔Kopie nach `PROJEKT_CODE`-Ersetzung): in ALLEN fünf
  Fällen ist der **Master voraus**, die Kopie trägt **null**
  Eigenzeilen (`tagesstart`: 0 Zeilen nur-in-Kopie). **Kein
  Master-zuerst-Verstoß** — die Drift ist restlos die Folge des
  ausstehenden Nachzugs. INFO-Zeilen (`regelwerk-waechter`
  projektspezifisch, `design-dna` nicht aktiviert, Budget-Hook
  projektspezifisch) sind Lesestoff, keine Befunde — `design-dna` wird
  heute in Block 2 aktiviert.
- **Budget-Wächter:** CLAUDE.md **79.974 B** / 78.043 Codepoints,
  Arbeitsbaum **und** versionierter Stand identisch → **unter der
  Sollmarke 80.000**, Exit 0. Grün; kein Verdichtungs-Posten vor der
  Sachrunde.
- **Loader-Kanarienvogel:** CLI **2.1.238** (Vortag 2.1.235 →
  **Versionswechsel = Auslöser**). Kanarien-Zeilen sind in diesem
  Projekt weiterhin **nicht** eingebaut (nur der Master-Baustein
  `windows-powershell` trägt sie seit `8a4b0a7` — kommt mit dem Nachzug
  Block 3). Ersatz-Messung am Objekt wie an den Vortagen: (a)
  Rules-Loader — alle **9** `.claude/rules/*.md` sind beim
  Session-Start im Kontext angekommen (global geladen, kein
  paths-Scope; die Gegenrichtung ist damit gegenstandslos); (b)
  Skill-Trigger — `/tagesstart`-Invoke lieferte den Volltext
  (Trigger-Probe bestanden). **Belegstufe: Anwesenheit im Kontext,
  keine Verhaltens-Messung der Pfad-Auslösung.**
- **Ebene über den Repos:** 7 Ordner (`heypensio` · `marketing` ·
  `oguz-werkstatt` · `projektgeruest` · `secret-broker` · `werkzeuge` ·
  `zentrale`) — **kein fremder Nicht-Repo-Ordner**, keine
  Codex-Scratch-Reste im Repo-Root.
- **⚠️ `.gitattributes` fehlt in diesem Repo** — und das Repo führt
  ausgeführte Artefakte (`tools/pruefe-budget.js`,
  `marke/live-welle/schnellcheck.js`, `.claude/hooks/*.js`). Damit gilt
  die R36-C-Klasse (CRLF beim frischen Checkout) hier genauso wie im
  projektgeruest, wo die Zentrale sie heute geschlossen hat
  (`268465b`). **Heute IST das ruhige Fenster** (kein Parallelbetrieb,
  User-Entscheid „Leitsession allein") → Block 3.

## Eingänge (gesichtet vor dem Rundenschnitt, jeder mit DISPOSITION)

| Eingang | Disposition (Zielort · wer · wann) |
|---|---|
| **Postkorb `eingang/`, Meldung 1:** `2026-08-20-zentrale-design-system-methodik-rohstoff.md` (Zentrale → MKT, 20.08. ~18:15 MESZ, zwei Nachträge ~18:40 und ~19:00) — Design-DNA-Methodik für den CI-Bau: Kritiker-Loop · „Measure, don't Describe" mit Rebuild-Test · Referenz-Plattformen savee.it/refero.design als **Schritt 1** („sehr sehr wichtig für uns", User-Zuruf) · Baustein liegt gebaut im Gerüst (`a481483`) | **Projektquelle § MKT-MARKE** (CI-Methodik-Posten) · Shanks · **Block 2**; Meldung + Anlage im selben Commit löschen (Transportbehälter). Baustein-Aktivierung nach `.claude/skills/design-dna/` im selben Block (User-Entscheid). Anwendung erst nach dem Namensentscheid. |
| **Postkorb `eingang/`, Meldung 2 (Anlage):** `2026-08-20-zentrale-anlage-bericht-design-system-jack-roberts.md` — Volltext-Bericht zum Video (Belegstufe: **Bericht vom User geliefert, Video von der Zentrale nicht gesichtet**) | wie oben, **zusammen** einarbeiten/löschen (so von der Meldung ausdrücklich verlangt). ⚠️ Gerüst-Lehre `2456ebf`: **ein Bericht ist kein Wortprotokoll** — beim Kodifizieren nicht auf den Bericht allein stützen. |
| **Ankunfts-Messung am eigenen Bestand:** `grep -rin "design-dna\|jack.roberts\|savee\|refero\|AI.Slop" --include="*.md"` über das ganze Repo | **0 Treffer außerhalb von `eingang/`** → beide Meldungen sind **nicht disponiert**, nicht nur „nicht erwähnt". Positivkontrolle desselben Laufs: dieselben Muster treffen in `eingang/` (2 Dateien) — der Suchweg funktioniert. |
| **Mail (Briefing § 3.4 / § 5):** Refero-Abo bestätigt 21.08. 12:13 MESZ, dazu Login-Code 12:07 und Stripe-Verifizierung 12:09; Kostenhöhe aus der Mail nicht ersichtlich | **Kenntnisnahme + Querverweis**: Refero ist genau die Referenz-Plattform aus Meldung 1 — der Zugang für Schritt 1 der Design-DNA-Kette ist ab heute da. Kostenregister-Nachtrag ist **Zentrale-Posten** (Briefing), nicht MKT. Nebenbefund: der **Refero-MCP-Connector ist in dieser Session bereits verbunden** (Tool-Pool) — für die CI-Runde vermerken. |
| **Mail, restliche 14 Zeilen der Triage** (Apaleo/Biro · Firzlaff-Inkasso · Oguz · DMARC · Skool · Speechmatics · jackroberts.ai-Newsletter) | **fremd** (heyPensio/Zentrale) — Kenntnisnahme, kein MKT-Schritt. |
| **Was außerhalb passiert ist** (Anrufe/Entscheide/Befunde) | Beim User zu erfragen — im Briefing erfasst ist der StB-Anruf (erfolgt, Steinmetz Urlaub bis Mo). Offen erfragen, ob seit 12:30 MESZ etwas dazugekommen ist. |

## User-Handgriffe (MIGRIERT aus `tagesplan-2026-08-19.md` „User-Handgriffe" + Tagesende-Übergabe — jede Zeile disponiert, Objekt-Blick wo ein Artefakt existiert)

| Vortags-Handgriff (19.08.) | Disposition heute |
|---|---|
| **StB-Anruf Steinmetz** | ✅ **erledigt/fremd** — Objekt-Blick nicht möglich (Telefonkanal); User-Auskunft 21.08. (Briefing § 1 Nr. 1): heute angerufen, Steinmetz bis Montag im Urlaub → **Wiedervorlage Mo 24.08.**, Zentrale-Posten, kein MKT-Schritt |
| **Finaler Namensentscheid** (Sechser-Auswahl) | 🔴 **übernommen — bleibt beim User.** Objekt-Blick: Sechser-Auswahl steht im Nachtrags-Kasten der Entscheidungsvorlage, unverändert seit 19.08. Heute liefert die Leitsession die **gehärtete Grundlage** (Block 1), der Entscheid selbst fällt heute NICHT zwingend |
| **A5-Probedruck + Lesart „Vorlagen beauftragt"** (R18-C-Rückfrage) | ✅ **ENTFALLEN** (Probedruck) — User-Auskunft 21.08. ~14:50 MESZ im Chat: „der Probedruck entfällt, habe ich vorhin mit Garp besprochen". Quelle/Doku des Entscheids liegt bei der Zentrale (Garp); der Briefing-Stand § 1 Nr. 2 (🔴 vor So 23.08.) ist damit ÜBERHOLT. ⚠️ Offen gehalten, bis geklärt: gilt das auch für die **Lesart-Frage „Vorlagen beauftragt"** (R18-C) — oder nur für den Druck? Debrief zieht STATUS/Projektquelle nach |
| **Betreiber-Briefing bis So 23.08.** (mit FUND2-Kayhan-Gespräch) | **übernommen** — Terminposten, User-Handgriff |
| **Fünf R16-Entscheide** (Satz · **Kanzlei** · Absender · § 4a · E-A4) | **übernommen** — ⚠️ der Teilpunkt **Kanzlei** ist heute engpassrelevant (s. Engpass-Satz: Erreichbarkeit bis ~16:00, danach Montag). Kandidat für Block 4 oder sofortigen User-Zuruf |
| **Zielstichprobe ≥ 30 / neuer H-2-Anker · Anker H-8/AKQ-H-2** | **übernommen** (offen) — Block 4 |
| **H-4 Altdaten-Sicherung anstoßen** (bis 07.09.) | **übernommen** (offen, kein Druck diese Woche) |
| **Anfrage-Entwürfe DEHOGA/IHK versenden** (IHK-Zuständigkeit vorher klären) | **übernommen** (offen; ruht weiter — Fokus Name). ⚠️ Erreichbarkeits-Fenster wie beim Kanzlei-Punkt |
| **AA-4 (User → Kayhan) · AA-3/AA-8-Randfragen · Preis-Höhen nach E-6/E-7** | **übernommen** (offen; ruht) |
| **H-1-Delta** (MKT-Anker 22.09. vs. Apaleo-Vertrag Go-Live 01.10.) | **übernommen** (offen) — Klärfrage bleibt im Entscheide-Bündel Block 4. Neu dazu: laut Briefing § 3.1 ist der überarbeitete Apaleo-Vertrag seit 20.08. da, aber noch **ungeprüft und unterschrieben** — das Datum 01.10. ist damit weiter unbestätigt |
| **Gerüst-Nachzug** (19.08.: „2 neue Blueprint-Deltas nach dem Stempel") | **übernommen und VERSCHÄRFT** — Objekt-Blick 13:10: Delta jetzt **11 Commits** (`9187d31..HEAD`), Wächter meldet **5 DRIFT**, Richtung je Datei geprüft (Master voraus, kein Kopie-Alleingang) → **Block 3** |
| **`.gitattributes`** (eigener Vorgang, ruhiges Fenster) | **übernommen** — Objekt-Blick 13:33: existiert in diesem Repo **nicht**; ausgeführte `.js` sind vorhanden → heute im ruhigen Fenster, **Block 3** |
| **Budget-Hook-Posten** (Delta-Ausnahme `c034250` im projektspezifischen Hook nicht nachgebaut) | **übernommen** (offen) — Kandidat Block 3, nachrangig hinter Nachzug und `.gitattributes` |
| **Codex-Scratch löschen · Blockwechsel neues Fenster** | ✅ **erledigt** — Objekt-Blick: keine Scratch-Reste im Repo-Root; dieser Tagesstart läuft im frischen Fenster |
| **Modell-Statuszeilen** | **entfallen** (User-Entscheid 17.08., endgültig) |
| **NEU (Briefing § 1 Nr. 6):** Neumessung der sechs Domains VOR dem Entscheid | **HEUTE, Block 1** — kein User-Handgriff, sondern Leitsessions-Arbeit |
| **NEU (Briefing § 1 Nr. 4/5):** 1PW-Abo ab 26.08. · Apaleo-Angebotsbindung 11.09. | **fremd** (Zentrale/heyPensio) — Kenntnisnahme |

## Strang-Tabelle R20 (Modellwahl trifft der USER — Spalte wird nachdokumentiert)

| Strang | Session | Modell | Scope (Dateien) | Exklusive Systeme |
|---|---|---|---|---|
| **R20-A** | — | — | *(Buchstabe FREI GELASSEN: die Leitsession übernimmt den Strang selbst, User-Entscheid 21.08.)* | — |
| **Namenshärtung + Postkorb + Nachzug** | **Shanks (Leitsession)** | Opus 5 (1M) — laufende Session, User-gesetzt | `marke/live-welle/schnellcheck.js` · `marke/entscheidungsvorlage-name-2026-08-19.md` · `sensibel/rohbelege-R20-leit/` · `eingang/*` · `projektquelle-mkt.md` · `STATUS.md` · `CLAUDE.md` · `.claude/**` · `.gitattributes` · `protokolle/tagesplan-2026-08-21.md` · `protokolle/R20-*` | RDAP (denic/verisign) · DPMA-Smartsearch · EUIPO eSearch — **keine parallele Session, also keine Kollision** |
| **Prüfer** | Subagent, frischer Kontext | Session-Modell (Befunde können Kernaussagen kippen) | **liest alles, ändert nichts**; Schreibrecht auf genau `protokolle/R20-pruefer.md` | — |

*(Keine Parallel-Sessions heute → Disjunktheits-Paarprüfung entfällt
mangels zweitem Strang; die Scope-Liste steht trotzdem, damit ein
späterer Block sauber dagegen schneiden kann.)*

## Session-Prompts

*(Heute keine Arbeits-Session — die Leitsession arbeitet die Blöcke
selbst ab. Der Abschnitt bleibt als Träger stehen: Wird in Block 4 doch
eine Session aufgemacht, kommt ihr Volltext hierher, und im Chat
erscheint nur die Einzeiler-Startzeile.)*

### Prüfauftrag Block 1 (Subagent, wird bei Aufruf hier eingefroren)

Wird nach dem Härtungs-Commit gesetzt: eingefrorener Commit-Hash ·
Rohbeleg-Pfade mit Namen · Pflicht-Kategorien „Was aus der Quelle ist
gar nicht erst angekommen?" (Leseraum = das ganze Dokument, Abschnitt
nur als Einstieg) und „Welche Verfälschung hätte dein Verfahren NICHT
gefangen?" · Verpflichtung auf den unbequemen Pol · zwei nachprüfbare
eigene Behauptungen, davon **eine falsche**, als Kalibrierung.

---

## Tagesende — Übergabe für den nächsten Tagesstart

*(wird am Blockende gefüllt)*

*(Der Abschnitt oben blieb leer, weil kein Blockwechsel nötig wurde —
die Leitsession lief durchgehend in einem Fenster.)*

### Tagesende — Übergabe für den nächsten Tagesstart (21.08., ~22:15 MESZ)

- **R20 ist mit dem Debrief 21.08. GESCHLOSSEN.** Der Tag lief in
  sieben Blöcken statt der geplanten vier — nach Block 3 kam der
  User-Zuruf „ich will heute zu einem Namensentscheid kommen", der die
  Runde inhaltlich neu aufgemacht hat.
- **🔴 Der Namensentscheid ist WEITERHIN OFFEN** — aber erstmals
  entscheidungsreif vorbereitet: Vorsatz gesetzt („hey" bleibt),
  Bauform gefunden (Kunstwort im Pensio-Muster), `heyHospio` vom User
  in die engere Wahl aufgenommen (**kein** Entscheid). Träger:
  `marke/entscheidungsvorlage-name-2026-08-19.md`, oberster Kasten.
- **Unmittelbar nächster Schritt (vom User bereits freigegeben, an
  diesem Abend nicht mehr gelaufen): die VERTIEFUNG** für den/die
  Finalisten — Handelsregister · Branchenverzeichnis-/Namensvetter-
  Suche (W9) · Handles · K6-EN-Check · **Markenlage zum Vorsatz „hey"
  selbst**. Werkzeuge liegen bereit (`schnellcheck.js` mit
  `--nur-domains`, `handles-r19c.js`, Verfahren §§ 6/7).
- **Postkorb an die Zentrale ist RAUS** (Teil-Rebrand, Commit im
  zentrale-Repo) — Antwort abwarten, betrifft die
  Gesellschafter-Freigabe.
- **Offene User-Handgriffe:** finaler Name · fünf R16-Entscheide
  (darunter **Kanzlei** — Erreichbarkeitsfenster erst wieder Mo 24.08.)
  · Zielstichprobe · Anker H-8/AKQ-H-2 · H-1-Delta 22.09./01.10. ·
  **Push** (der Klassifikator hat alle `git push`-Versuche dieser
  Session geblockt — Handgriff: `! git push origin main`).
  *(A5-Probedruck ENTFALLEN, User 21.08.)*
- **Werkzeug-Merker für die nächste Session:** Der Bash-Kanal hat heute
  ZWEIMAL zugeschlagen — `node -e` mit mehrzeiligem Array legte leere
  Müll-Dateien im projektgeruest an, und Backticks in einem `node -e`
  wurden als Kommandosubstitution ausgeführt und fraßen neun Code-Spans
  aus dem frisch geschriebenen STATUS.md (am Objekt gefunden, repariert).
  **Konsequenz: mehrzeilige Texte mit Backticks/Umlauten immer per
  Write-Tool, nie über den Bash-Kanal** — die Regel stand im Baustein,
  die Session hat sie zweimal verletzt.
- Blockwechsel: nächste Runde NEUES Fenster.
