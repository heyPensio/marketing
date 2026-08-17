# Gerüst-Nachzugs-Protokoll — Marketingabteilung

> **Zweck:** Träger der vollständigen Nachzugs- und Stempel-Historie dieses
> Projekts. Ausgelagert aus dem `CLAUDE.md`-Kopf am 14.08.2026
> (Transit-Verbot G5, Blueprint `ae819a0`-Folge — Nachzugs-Deltas dürfen
> nicht als Sammelblock in der auto-geladenen Datei liegen bleiben).
> **CLAUDE.md trägt ab jetzt nur noch die aktuelle Stempel-Zeile und einen
> Zeiger hierher.**
>
> **Auslagerung war reine MECHANIK:** Der Text unten ist byte-gleich aus dem
> CLAUDE.md-Kopf übernommen (nur die Blockquote-Präfixe `> ` sind entfernt,
> weil dies kein Zitat mehr ist). Nichts verdichtet, nichts umformuliert,
> nichts weggelassen — Zeilenzahl und Prüfsumme im Commit belegt.
>
> **Pflege:** Bei jedem `/projekt-init nachzug` wandert der neue Stand als
> oberster Abschnitt HIERHER; in CLAUDE.md wird ausschließlich die
> Stempel-Zeile aktualisiert.

---

## Stempel-Historie (neueste zuerst)

**Gerüst-Stand:** Stand **`35fd61b`** (R17-Debrief 17.08.2026 18:46 MESZ
per `date`, Leitsession Shanks). Delta `7a0f76b..HEAD` **vor dem eigenen
Rückfluss neu gemessen** (`git fetch` + `log`): **0 fremde Commits**;
einziger neuer Commit ist der eigene Rückfluss `35fd61b` (6
Changelog-Einträge, Selbstcheck OK): L-51 „Wer einen Satz kippt, kippt
seine Folgesätze" (CLAUDE-Vorlage) · Schärfungen L-15 (Zählweg UND
Stichprobe), L-07 (Uhrzeiten), L-48 („nicht von MIR geprüft" ≠
„ungeprüft") · `debrief` Verdichtungs-Gegenprobe Pflicht mit Mustern ·
`tagesstart` Gegenlese-Zuschnitt / Messungen statt Reparaturwege /
Prüfstand einfrieren + weiterarbeiten / git-archive-Prüfstand ·
`windows-powershell` Bash-Kanal Backslash + Literal + Ersetzungs-
Trefferkontrolle · `quellen-beschaffung` Werkzeug-Negativ als
Quellen-Eigenschaft + EU-Texte U+2011/NBSP. Kopien gezogen (debrief,
tagesstart, windows-powershell, quellen-beschaffung; Platzhalter
`{{PROJEKT_CODE}}` → MKT), Wächter **SYNCHRON 12 / 0 DRIFT** (Blindfleck
Ordner-Bausteine gemeldet: Zentrale-Postkorb `f58f1c0`). CLAUDE.md nach
Verdichtung + Debrief **79.935 B** (Sollmarke 80.000; Erstlauf-Ist 84.028
am 17.08. vormittags → −4.093 netto über den Tag).

**Gerüst-Stand:** Stand **`7a0f76b`** (R16-Debrief 17.08.2026 ~18:30 MESZ,
Leitsession Shanks). Delta `5020bc2..7a0f76b` **neu gemessen vor dem
Stempel** (`git fetch` + `log`, 3 Commits):
- `e58a979` (GARP, Firmen-Entscheid 17.08.): **Regelwerk-Wächter ist
  PFLICHT-Baustein** → **aktiviert**: `tools/pruefe-budget.js` +
  `.claude/hooks/pruefe-claudemd-budget.js` kopiert, Marken selbst
  gesetzt (SOLLMARKE 80.000 / WARNSCHWELLE 85.000 / HARTMARKE 90.000 —
  Herleitung Tagesplan 17.08. „Zustand", Auto-Load-Summe-Marke 140k bleibt
  Beobachtungsgröße ohne Werkzeug), Hook-Eintrag in
  `.claude/settings.json` (PreToolUse, Matcher Edit|Write|Bash|PowerShell),
  **Selbsttests NACH dem Setzen der Marken: 9/9 + 9/9 grün**, Erstlauf
  Ist-Wert **84.028 B** (Exit 0, Kompensationspflicht aktiv), Probe-Call des
  Hooks mit stdin-JSON Exit 0. Textbaustein `regelwerk-waechter.md` als
  Rules-Kopie (Kopien-Wächter meldet ihn als INFO „keine Blueprint-Vorlage",
  weil er im Baustein-UNTERORDNER liegt — Wächter-Grenze, an die Zentrale
  gemeldet). CLAUDE-vorlage-Text (18 Z.) → Kern-Bullet in „Aktivierte
  Bausteine".
- `6aaa7ed` (GARP): Selbsttest-Defekt (CRLF-Fall auf Platzhalter
  verdrahtet) → **kommt mit der kopierten Skriptfassung**; die
  README-Auflage „Selbsttests NACH Schritt 2" befolgt.
- `7a0f76b` (SHANKS, eigener Rückfluss): L-49/L-50 standen schon in
  CLAUDE.md (`305d99f`); **Parent-Prüfung** nach dem Commit → Doku-Hygiene
  ergänzt; Kopien `commands/tagesstart.md` + `rules/windows-powershell.md`
  vom Master gezogen. Wächter danach **SYNCHRON 12 / 0 DRIFT**.
- CLAUDE.md 84.028 → 84.713 B (Pflicht-Baustein-Bullet + Stempel; unter
  Warnschwelle, über Soll → Verdichtungs-Posten R17).

**Gerüst-Stand:** Stand **`5020bc2`** (Nachzug 17.08.2026 ~15:00 MESZ,
R16-Vorlauf, Leitsession Shanks; Blueprint-Selbstcheck OK; Wächter vorher
SYNCHRON 12 / 0 DRIFT; Delta = 2 Commits, beide nur `CLAUDE-vorlage.md` +
`LEHREN-CHANGELOG.md`, keine Command-/Baustein-Änderung → keine Kopie zu
ziehen). **Je Delta-Eintrag disponiert:**
- `cfdd5db` (GARP, Zentrale-Rückflüsse aus MKT R15 — beide Herkunft
  eigenes Projekt): (1) Verdichten ist MÜDIGKEITS-EMPFINDLICH →
  **übernommen** als Kern-Bullet „Arbeitsregeln" hinter „gekappte Session
  macht nur MECHANIK". (2) Wächter im gewöhnlichen Fall rot = abgeschaltet;
  Modus-Trennung/Pool mit Nenner zulässig, Ausnahmeliste unzulässig →
  **übernommen** als Schärfung an der bestehenden Stelle
  („Sicherheits-Regeln", Satz war schon da — Ergänzung, keine Ersetzung).
  Bestand rückwirkend: R16-B setzt genau das um (heute).
- `5020bc2` (GARP, drei Zentrale-Rückflüsse): (1) Ablageort von Belegen
  einer prüfenden Instanz + Debrief-Prüfschritt „Ebene über den Repos" →
  **übernommen** in „Doku-Hygiene" hinter „Rohbelege gehören in den Ordner
  ihrer Runde"; Prüfschritt ab Debrief R16. (2) Nicht aktivierter Baustein
  = offene Falle → **übernommen** als Prüffrage im Abschnitt „Aktivierte
  Bausteine"; **am Objekt geprüft 17.08.: 8 von 8 Blueprint-Bausteine
  aktiv** (`vorlage/bausteine/` vs. `.claude/rules/`; ein untracked
  `regelwerk-waechter/` im Blueprint ist fremde laufende Arbeit, kein
  Baustein). (3) Ziele statt Schnitte → **übernommen** als Kern-Bullet
  „Arbeitsregeln"; Bestand: der heutige Tagesplan arbeitet genau so
  (Briefing liefert Zielbild/Prämissen/Sperrliste, Leitsession schneidet).
- **Kein Konflikt** mit projektspezifischen Anpassungen; Herkunft zweier
  Regeln ist MKT selbst — Rückfluss über die Zentrale, kein Doppel im
  Lehren-Register (dort L-43…L-48 andere Sachen; Kandidat für ein L-49
  „Suchweg in Kürzel-Form" folgt im Debrief R16, unabhängig davon).
- CLAUDE.md: 82.807 B vor dem Nachzug → s. Commit-Message nachher;
  Kopf auf Stempel-Zeile + Zeiger gekürzt (Transit-Verbot G5), der
  8d80a64-Kopftext steht darunter byte-treu (nur `> `-Präfix entfernt).

**Vorheriger Kopftext (8d80a64), verbatim aus CLAUDE.md übernommen
(23 Zeilen):**

**Gerüst-Stand:** erzeugt aus `projektgerüst` Commit `64a1c20` am
2026-08-09; Stand **`8d80a64`** (R15-Debrief 14.08.2026 nachts:
eigener Rückfluss von 6 Lehren — L-43 (Positivkontrolle spiegelt
Zeichenklasse UND Kanal), L-44 (Personendaten nie ins Repo /
TOM-Zeile / Gate-Pfad), L-45 (Belegpflicht kennt keine Richtung:
Verbots-Aussagen + Entwarnung über die eigene Handlung), L-46
(Rollenzuschreibung ist Bestandsaussage), L-47 (Vorbehalt fällt im
Tabellenkopf), L-48 („nicht prüfbar" des Prüfers = Nacharbeits-Liste)
+ L-39-Schärfung (Zitat-Abbruch markiert die eigene Grenze); davor
3 fremde Deltas einzeln disponiert: `6e5364c` + `6831482` (GARP —
Verallgemeinerungen AUS diesem R15-Zuschnitt: Fertig-Kriterium muss
zur Auftragsart passen · Arbeitsvorrat = Liste von VERNEINUNGEN ·
Codex-Zeile wird beim Umschnitt neu gestellt) und `3814ab5`
(heyPensio R43 — ERFÜLLEN als dritte Kategorie · konditionale Warnung
altert · Fix erfindet Vorbedingung · Treffer ist Lesestelle ·
Werkzeug erzwingt nur teilweise); Kopien `commands/tagesstart.md` +
`commands/debrief.md` vom Master gezogen, Wächter SYNCHRON 12 /
0 DRIFT. Davor Stand `ae819a0` (R15-Vorlauf-Nachzug, 2 Deltas).
**Die vollständige Nachzugs- und Stempel-Historie steht in
`geruest-nachzug-protokoll.md`** — sie gehört nicht in den
auto-geladenen Kanal (Transit-Verbot G5). Dort auch die
Stempel-Korrektur vom 10.08.2026 und die Commit-Zuordnungs-Vermerke.
Nachzug neuer Methodik-Lehren: `/projekt-init nachzug`.

**Gerüst-Stand:** erzeugt aus `projektgerüst` Commit `64a1c20`
am 2026-08-09; Stand **`ae819a0`** (R15-Vorlauf-Nachzug 13.08.2026
nachts, VOR dem Rundenschnitt — Briefing-Auflage, weil der Nachzug
genau die Regeln ändert, unter denen die R15-Stränge laufen):
**2 fremde Deltas einzeln disponiert.** `0e4d2d9` (heyPensio R42
Nachtrag): Wächter-Frage um die dritte Achse erweitert („welchen Text
schreibt der ABLAUF, den er absichern soll?") + teuerste Form
(existierender, plausibler, für den Betriebsweg FALSCHER Messpunkt —
Commit-Hook las den Index) + Grenzenlisten-Regel „n von n, nie in
Auswahl" → ersetzt die bisherige Zwei-Achsen-Fassung in
„Anwesenheit ist nicht Wirksamkeit" (L-21-Anker erhalten).
`ae819a0` (Zentrale-Nachhol-Zug, 7 Kandidaten): vier CLAUDE-Anteile
übernommen — (1) Historie kennt KEINE Session-Identität +
Session-Kennung als erstes Wort der Commit-Message, (2) zwei Sessions
am selben Vorgang → die zweite hält AN (genau EINE schreibende Hand je
Datei; geteilter Fremd-Arbeitsbaum; Beleg-Ketten sachlich gebunden)
— beide nach „Multi-Session" Regel 1 —, (3) Vollzug hinter dem
User-Entscheid = aktiv zu meldende Abweichung, (4) gekappte Session
macht nur MECHANIK — beide nach „Arbeitsregeln"; die drei
tagesstart-Anteile (Codex-PFLICHTZEILE je Strang · geparster
Fremdagent-Bau ist kein Ausführungs-Beleg · Namens-Zuweisungs-Pflicht
+ Persönlichkeit im internen Ton) via **Kopie** `commands/tagesstart.md`
vom Master (md5-gleich). Blueprint-Selbstcheck OK, Wächter vorher
1 DRIFT (genau diese Kopie) → nachher **SYNCHRON 12 / 0 DRIFT**.
**Größenmessung: 80.380 Bytes / 78.476 Codepoints** (Zählweg
`Get-Item .Length` + `[IO.File]::ReadAllText().Length` nach den
Nachzugs-Edits; vor dem Nachzug 75.635 Bytes → **+4.745**). ⚠️ Das
Wachstum ist ein Verdichtungs-Posten für den R15-Debrief — die
Formdisziplin „Schärfung ERSETZT Kern" (debrief-Kopie `fe6fcaf`)
greift dort erstmals.
Davor Stand **`ee8c468`** (R14-Debrief 13.08.2026 spätabends:
eigener Rückfluss von 4 R14-Lehren — L-39 (Negativ-Reichweite:
„X = 0" belegt nie „kein Y" + Zitat-Block am Stück lesen), L-40
(Wächter-Entwarnung über die eigene Arbeit: ZIEL/POOL-Konstanten
lesen, Lauf-Delta je Datei zuordnen, wandernder Stand im
Parallelbetrieb, Probe-nach-Reparatur), L-41 (Formfehler-Nachbarformen
+ gleiche Nenner-Bindung), L-42 (Abschlussprotokolle sind Quellen
zweiter Hand → Rohbeleg-Gegenprüfung in Prompt-Baustein 1,
Diagnose-als-Klasse) in CLAUDE-Vorlage/tagesstart-Vorlage, dazu
`quellen-beschaffung` Punkte 5+6 (Umkehrschluss aus Abwesenheit ·
älterer Rohbelege-Ordner) und die tagesstart-Eingänge-Regel
„Briefing-Nachtrags-Ankunft am Repo-Bestand messen"; fremdes Delta
einzeln disponiert: `fe6fcaf` (heyPensio R42 — Wachstums-Governance;
CLAUDE-Anteil „einschränkende settings-Änderungen wirken sofort,
inkl. Hook-Registrierung" übernommen und ersetzt die deny-only-Fassung,
debrief-/tagesstart-Anteile via Kopie); Kopien `commands/debrief.md`
+ `commands/tagesstart.md` + `rules/quellen-beschaffung.md` vom
Master gezogen; Wächter SYNCHRON 12 / 0 DRIFT.
**Größenmessung (Briefing Nachtrag 7): 75.635 Bytes** — Zählweg
`Get-Item .Length` nach den R14-Edits, Bytes ≠ Zeichen bei
UTF-8-Umlauten; Vergleichswert vor R14: 73.399.)
Davor Stand **`5f18694`** (R13-Debrief 13.08.2026 abends:
eigener Rückfluss von 5 R13-Lehren — L-36…L-38 + L-26-Schärfung
(Wächter-Stands-Doku/Baseline) in die CLAUDE-Vorlage, Löschungszählung
in den tagesstart-Prüfer-Baustein, cmd-%ERRORLEVEL%-Parse-Falle in den
windows-powershell-Baustein; fremde Deltas einzeln disponiert:
`f756e79` (heyPensio R40 — fetch-vor-Rebase + Quellen-Gegendurchgang-
auch-bei-Archiv → beide in „Arbeitsregeln"/„Multi-Session", tagesstart-
Anteile via Kopie) + `13a6659` (heyPensio R41 — Chat-Glättungs-
Schärfung der Verdichten-Regel → übernommen; Blinde-Zweitmeinung +
Auto-Load-Ankündigung via tagesstart-Kopie/Changelog); Kopien
`commands/tagesstart.md` + `rules/windows-powershell.md` vom Master
gezogen; Wächter SYNCHRON 12 / 0 DRIFT.)
Davor Stand `cd45642` (R12-Debrief 13.08.2026 mittags:
eigener Rückfluss von 6 R12-Lehren — L-33…L-35 + 3 Schärfungen in
die CLAUDE-Vorlage (Verdichten/x-von-y/Doku-Hygiene/
Gegenprobe-Achse) und die tagesstart-Vorlage
(Rückwärts-Kategorie-Suchraum + Prüfraum-Regel,
Prüfstand-git-show-Quellen), Kopie `commands/tagesstart.md` vom
Master gezogen; fremde Deltas einzeln disponiert: `3905a1c`
(Secret-Rotations-Kette + Versionssprünge-kippen-Negative → beide in
„Arbeitsregeln" übernommen) + `a7499d9` (Sandbox-NTFS-Eigentum, nur
`firmen-integration.md` — keine Vorlagen-/Kopienwirkung); Wächter
SYNCHRON 12 / 0 DRIFT; Blueprint-Push `a7499d9..cd45642` sauber,
Sichtung zeigte nur den eigenen Commit.)
Davor Stand `4fa4453` (R11-Debrief 12.08.2026 abends:
eigener Rückfluss von 6 R11-Lehren — L-30…L-32 in die
CLAUDE-Vorlage, Nachlade-Befund-Regel in den Baustein
`quellen-beschaffung`, Prompt-Bestandsangaben- +
Baustein-Fallen-mitgeben-Regel in die tagesstart-Vorlage (`44a2bfe`
+ Gegenprobe-Nachtrag `4fa4453`) —; Kopien `commands/tagesstart.md`
+ `rules/quellen-beschaffung.md` vom Master gezogen; fremde Deltas
disponiert: `a49bf8e` (Register-Update secret-broker, keine
Vorlagen-/Kopienwirkung) + `30ba699` (heyPensio R39:
permissions.deny wirkt sofort → „Werkzeug-Disziplin"); Wächter
SYNCHRON 12 / 0 DRIFT.
⚠️ Push-Befund: `b04c264`/`a49bf8e` lagen unveröffentlicht auf dem
lokalen Blueprint — beim R11-Push bewusst als Vorfahren
mitveröffentlicht, Postkorb-Meldung an die Zentrale.)
Davor Stand `b04c264` (F13-Nachzug 12.08.2026
nachmittags, R10-Nachtrag: Pfadentkopplung — Kopien
`commands/debrief.md` + `commands/tagesstart.md` vom Master gezogen
(Benutzerpfade → `<FIRMENWURZEL>`-Platzhalter), im selben Zug
CLAUDE.md/AGENTS.md/STATUS.md-Kopf nach C2-Liste § 4.3 entkoppelt;
Wächter 0 DRIFT / 12 synchron).
Davor Stand `bb3b32c` (R10-Umbau-Nachzug 12.08.2026
nachmittags: 2 fremde Deltas einzeln disponiert — `c286af0`
Duplikat-Grundsatz Wächter/Vorrangklausel/sonst-Zeiger → übernommen
nach „Doku-Hygiene" (der firmen-integration-Anteil Z. 13 betrifft nur
das Blueprint-Register, keine Projektkopie); `bb3b32c`
Git-Pfad-Pflichtform im Blueprint-Repo → `commands/debrief.md` 3d
vom Master gezogen (Hook/settings-Anteil betrifft nur das
Blueprint-Repo selbst, marketing hat beides seit Tag eins). Wächter
0 DRIFT / 12 synchron.
Davor Stand `69a8574` (R9-Debrief 12.08.2026: Rückfluss
von 8 MKT-R9-Lehren + Auftragsform für Fremdagenten; im selben Zug
**4 fremde Deltas** nachgezogen — `42cb373`, `b8e10a9`, `0267e50`,
`75cdba4` (Codex-Eignungsprüfung je Strang) —, 3 Kopien gezogen,
Wächter „SYNCHRON: 12", 0 DRIFT.
⚠️ **Commit-Zuordnung:** Die `CLAUDE-vorlage.md`-Anteile des
Rückflusses liegen in `5ef14b9` (fremde Session hat sie beim
Committen mitgezogen), der Rest in `e58ef4f`/`69a8574` — Vermerk im
`LEHREN-CHANGELOG.md`).
Davor `b8597b6` (R8-Debrief-Rückfluss 11.08.2026
abends: 7 R8-Lehren `0dc102f` + Gegenprobe-Nachzug Bezeichner-Regel
`b8597b6`, betroffene Kopien im selben Zug gezogen, Wächter 0 DRIFT). Davor `08a12c5` (Mini-Nachzug 11.08.2026
nachmittags: skill-bauweise Tranche 2 — Ansatz challengen,
HTML-Zwischenformat, Quernutzung/Assets; ein Delta, Wächter 0 DRIFT).
Davor Stand `d2d6af7` (Nachzug M1, 11.08.2026 — 20
Commits disponiert: Pull-Modell/Klartext-Chat, `/cost`-Abschaffung,
Handgriff-Migration, Datei-Ebenen-Scope, B1–B4-Wächter-Härtung,
Gmail-/Quellen-Baustein-Stände, 4 Zentrale-/R36-Kernregeln; dazu
Rückfluss von 6 nur in Kopien lebenden MKT-R7-Lehren in den Master
`d2d6af7` und Aktivierung `skill-bauweise`). Davor Stand `baaac82`
(Nachzug R7 + R7-Rückfluss, 10.08.2026) nach
Rückfluss-Nachzügen MKT R1–R6, heyPensio-R32/R33/R34/R35-Lehren und dem
Modellwahl-Richtungsentscheid (User, alle Abteilungen — ersetzt Regel 7
alt; 10.08.2026).
⚠️ *Stempel-Korrektur 10.08.2026: Dieser Kopf trug bis R7 fälschlich
`2c548fe`. Der R6-Nachzug lief tatsächlich auf `b8f7d9c` — der
Kopfstempel wurde damals nicht mitgezogen, die Angabe war also ZWEI
Commits zu alt und dennoch als aktuell lesbar. Beleg für den echten
R6-Stand: L-13 im Bestand + `pruefe-kopien.js` meldete alle Bausteine
außer `aussenkorrespondenz` synchron. Der Stempel ist der Beleg des
Nachzugs — beim nächsten Nachzug im selben Commit mitziehen.*
Nachzug neuer Methodik-Lehren: `/projekt-init nachzug`.
