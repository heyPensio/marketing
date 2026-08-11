# Tagesplan — Dienstag, 11.08.2026 (Leitsession Shanks, Runde 8)

> Träger des Tagesrahmens (überlebt Auto-Kompaktierung, Übergabedokument
> zwischen Leitsession-Blöcken). Block 1 SCHARF, spätere Blöcke PROGNOSE.
> Debrief bleibt PRO RUNDE.

## Rahmen

| Quelle | Wert |
|---|---|
| Wochentag/Uhrzeit | Dienstag, 11.08.2026, 09:38 (`Get-Date`, Werkzeug) |
| Arbeitsdauer | **Ganzer Tag** (User, AskUserQuestion im Tagesstart, 11.08. vormittags) |
| Kalender | Einziger Fixpunkt der Woche: „BA" Mo 17.08. 11:00–13:00 MESZ (Quelle: Briefing 11.08. vormittags) — heute keine Termine |
| Wochen-Kontingent | **frisch** (Quelle: Briefing 11.08. 09:31, User-Ablesung dort) — Kontingent ist INFORMATION, kein Zuschnitt-Kriterium |

**Engpass-Satz Erreichbarkeit:** Dienstag, werktags — Anbieter/Behörden
erreichbar; heute ist aber KEINE Außenkorrespondenz durch Sessions
geplant (DEHOGA/IHK-Versand ist User-Handgriff; WTSH-Entwurf
gegenstandslos per F-15-Rückmeldung).

## Blocktabelle

| Block | Zeit (ca.) | Inhalt | Detailgrad |
|---|---|---|---|
| **1** | 09:45–13:30 | **M1-Nachzug** (`/projekt-init nachzug`, 18 Deltas einzeln disponieren, Fertig-Beleg Wächter 0 DRIFT + Stempel im selben Commit) · **Werkzeug-Härtung** (`git push *`-Wildcard aus Allowlist; `.codex\hooks.json` analog Z3) · **F-15-Einarbeitung** (WTSH-Entwurf gegenstandslos setzen) · **D3-Entscheide in die Rechtsmatrix nachtragen**. Leitsession SELBST, keine Parallel-Sessions (Scope ist Wahrheits-Kanal/Methodik). | **SCHARF** |
| **2** | ab ~14:00 | R8 schneiden: **MKT-AKQ erster Strang** (D3-Entscheide liegen vor) · vier B9.4-Korrekturen · P21/P22 nach Kapazität · R07-E-Rest (P22). Arbeits-Session-Prompts nach Blockwechsel. | PROGNOSE |

**Blockwechsel-Handgriff (User, ~13:30–14:00):** Leitsession NEU starten
(neues Fenster, `claude --resume`, diese Session wählen) — nach dem
Nachzug ZWINGEND, weil CLAUDE.md/Commands/Rules sich auf Platte geändert
haben und diese Session den alten Snapshot trägt. Vorher füllt die
Leitsession den Übergabe-Block unten.

## Review-Regime (Kritikalitäts-Staffel, je Strang)

- **Block 1 (Methodik-Nachzug):** begründetes **Kurzraster** — Prüfer
  sind hier die Werkzeuge selbst (`pruefe-kopien.js` 0 DRIFT +
  Blueprint-Selbst-Check B1); der Master ist die Quelle, es entsteht
  kein außenwirksamer Text. Sonderauflage Gmail-Baustein: exklusive
  MKT-Lehren VOR dem Kopie-Ziehen im Master verifizieren (Z1-Zusage).
- **Block 2 (MKT-AKQ):** außenwirksam-nah (Listenbau-Regeln,
  Kanalplanung) → **Voll-Review** durch unabhängigen Prüfer mit
  frischem Kontext einplanen (PROGNOSE, Zuschnitt beim Rundenschnitt).

## D3-Entscheide (User, 11.08.2026, per AskUserQuestion im Tagesstart)

1. **D3.1 Verfallsfrist Bestandskundeneigenschaft: 24 Monate** nach
   letztem Vertragsschluss (= zugleich Löschfrist-Anker fürs
   Verarbeitungsverzeichnis). Entspricht dem Matrix-Vorschlag.
2. **D3.2 Impressums-Sperre: Weg (b) — Risiko bewusst tragen und
   dokumentieren.** ⚠️ GEGEN die Matrix-Empfehlung (a) entschieden;
   die Aufsichtsauffassung (DSK-Orientierungshilfe Ziff. 4.2) bleibt
   ausdrücklich gegenläufig. **Konsequenz = Bau-Pflichten im
   Listenbau:** dokumentierte Interessenabwägung je Datenfeld ·
   Quellenprotokoll je Adresse · Werbesperrdatei · Restrisiko-Vermerk
   im Verarbeitungsverzeichnis. Nachtrag in
   `handel/kanal-rechtsmatrix.md` D3 mit Quelle+Datum+Form: Posten
   Block 1.
3. **D3.3 Einwilligungstext (Kanon):** offen — steht erst beim Bau der
   Messe-/Newsletter-Texte an; wird dann als Entwurf vorgelegt.

## User-Handgriffe (migriert aus STATUS.md + Briefing, nichts Neues erhoben)

- [ ] **H-1 Livegang-Tagesdatum bis 16.08.** (terminkritisch)
- [ ] Anfrage-Entwürfe DEHOGA/IHK versenden (werktags; IHK-Zuständigkeit
      vorher klären)
- [ ] A5-Probedruck der Vorlagen („tatsächliche Größe")
- [ ] Betreiber-Briefing bis 23.08., gekoppelt FUND2-Kayhan-Gespräch
- [ ] H-4 Altdaten-Sicherung anstoßen (bis 07.09.)
- [ ] Modell-Statuszeilen R3-A/B/D + R04-A + R05-A + R06-A bestätigen
- [ ] MARKE1: Shortlist-Gesamtschau · K4-Diktat-Test ·
      EN-Muttersprachler-Check · Entscheid 4 K1-Blockierte
- [ ] **~13:30–14:00 Blockwechsel:** Leitsession neu starten (s. oben)
- StB-Termin: verschoben ~KW 34/35, führt die Zentrale (kein
  MKT-Handgriff heute)

## Strang-Tabelle (Stand Tagesbeginn)

| Session | Strang/Scope | Exklusive Systeme | Modell (User-Wahl, nachdokumentiert) |
|---|---|---|---|
| Shanks (Leitsession, dieses Fenster) | Block 1: M1-Nachzug + Härtung + F-15 + D3-Nachtrag — Scope: `CLAUDE.md`, `.claude/` (commands/rules/hooks/settings), `protokolle/tagesplan-2026-08-11.md`, `handel/foerderarchitektur*` (F-15), `handel/kanal-rechtsmatrix.md` (nur D3-Nachtrag), `AGENTS.md`/`.codex/` | keine | Fable 5 (Umgebungsangabe der Session; Statuszeilen-Bestätigung = User-Handgriff) |
| R8-Arbeits-Sessions | ab Block 2 (PROGNOSE: MKT-AKQ zuerst) | Zuteilung beim Rundenschnitt | User-Wahl beim Start |

## Zustand bei Tagesbeginn (gemessen 09:38–09:45)

- Repo **clean**, `git pull` „Already up to date".
- **Methodik-Rückstand:** Stempel `baaac82` → Blueprint-HEAD `aa65f09`
  = **18 Commits** (selbst gemessen, `git log baaac82..HEAD`);
  `pruefe-kopien.js`: **8 DRIFT** (debrief.md, runde.md, tagesstart.md,
  aussenkorrespondenz.md, aussenwirksame-texte.md, gmail-mcp.md,
  quellen-beschaffung.md, block-broad-git-add.js) + 1 INFO
  (skill-bauweise.md nicht aktiviert). Zentrale-Meldung „6+" war
  untertrieben.
- **Z4-Wirksamkeits-Beleg ERBRACHT:** Tool-Inventar dieser Session
  (Sessionstart 11.08.) enthält ausschließlich lesende
  Apaleo-/Supabase-Tools (Export/Get/List bzw. get/list/search/
  generate) — kein Create/Update/Delete, kein apply_migration/
  execute_sql. (Beleg-Form: Sichtung der Session-Toolliste durch die
  Leitsession.)
- **R7-Debrief gelaufen** (`e8727e3`); danach nur dokumentierte
  Sonder-Commits (Codex-Auflösung `90cc378`/`b59f66b`, Umzug `35085c4`
  — Tagesplan-Abend-Nachtrag 10.08.; Z4 `91bb44b` — Zentrale-Session,
  zentrale-STATUS 11.08.). Keine ungereviewte Arbeits-Session-Arbeit;
  Abschlussmeldungen R7 liegen vor. **R07-E (P22) nicht gefahren** →
  R8-Kandidat.

## Eingänge (gesichtet vor dem Rundenschnitt)

- **Briefing 11.08. vormittags (09:31, zweiter Slot)** — Auftrag M1
  gezogen (Pull-Modell). **Mail-Triage übernommen: keine neuen Eingänge
  seit 10.08. 21:48 MESZ** (Briefing-Messung `after:2026/08/11
  in:anywhere` leer) — keine eigene Volldurchsicht nötig.
- **F-15-Rückmeldung der Zentrale** (zentrale-STATUS „Rückmeldung an
  MKT"): KEIN WTSH-Antrag eingereicht (User 10.08.) · Schließfachanlage
  auf Creone entschieden (~4.000 €) · WTSH-Anfrage-Entwurf
  **gegenstandslos** · Verflechtungs-Befund bleibt gültig, aber nur
  steuerlich/werblich, nicht förderrechtlich · „Marketing hat keinen
  Fehler gemacht" (Zeitbezug verlor die Zentrale). → Einarbeitung
  Block 1.
- **User-Zuruf:** außerhalb nichts Neues (AskUserQuestion 11.08.).

## Übergabe-Block (gefüllt ~10:30 — Block 1 schneller fertig als geplant)

**Session-Stand Block 1 (Shanks, ABGESCHLOSSEN):**
- ✅ **M1-Nachzug komplett:** Blueprint-Rückfluss `d2d6af7` (6 nur in
  Kopien lebende MKT-R7-Lehren in den Master; dort gepusht) · 9 Kopien
  gezogen · CLAUDE.md: 5 neue Kernregeln + Stempel **`d2d6af7`** im
  selben Commit · `skill-bauweise` AKTIVIERT (User-Entscheid) ·
  **Fertig-Beleg: Wächter „SYNCHRON: 12 Kopien", 0 DRIFT** (Lauf nach
  dem Ziehen UND vor dem Commit) · Platzhalter-grep 0 Treffer mit
  Positivkontrolle · Marketing-Commit **`2e1b8e7`**, gepusht.
  Delta war 20 Commits (18 gemessen 09:40 + `1da14f9`
  Umzugs-Prüfklasse 09:43 + eigener Rückfluss), alle disponiert.
- ✅ **Härtung (lokal, unversioniert):** `Bash(git push *)` aus
  `settings.local.json` entfernt · `.codex\hooks.json` auf die
  versionierte Hook-Kopie umgezeigt (`firma\`-Pfad, zentrale-Muster),
  redundante `.codex\hooks\`-Eigenkopie nach Diff-Sichtung entfernt.
  ⚠️ Wirksamkeits-Test des Codex-Hooks NICHT messbar (Z3-Sandbox-
  Befund) — Wiedervorlage-Trigger wie zentrale-STATUS.
- ✅ **Z4-Beleg** erbracht (s. „Zustand bei Tagesbeginn").
- ✅ **F-15 eingearbeitet:** WTSH-Entwurf GEGENSTANDSLOS-Kasten
  (`handel/entwurf-anfrage-wtsh.md`), F-15-Vermerk im Trägerdokument.
- ✅ **D3.1/D3.2 nachgetragen** (`handel/kanal-rechtsmatrix.md` D3,
  Nachtrags-Kästen mit Quelle+Datum+Form; D3.3 offen markiert).
- **Klassifikator-Befund (L-05, 2× reproduziert):** `git push` und
  `node selbstcheck` im PowerShell-Kanal blockiert, im Bash-Kanal
  durchgelaufen — Kanal-Bindung erneut bestätigt.

**Offene Handgriffe:** unverändert die Liste oben (H-1 bis 16.08. ist
der terminkritischste) — **plus JETZT: Leitsession neu starten** (neues
Fenster, `claude --resume`; der Regel-Snapshot dieser Session ist durch
den Nachzug veraltet — CLAUDE.md, tagesstart, runde, debrief auf Platte
sind neuer als der Session-Start).

**Block-2-Programm (nach Neustart, via `/runde`):** R8 schneiden —
MKT-AKQ erster Strang (D3-Entscheide liegen vor; Kanalmix D1:
Brief/Vorkontakt/fremde Verteiler; Bau-Pflichten aus D3.2-Weg-b
beachten) · vier B9.4-Korrekturen (F-6) · P21/P22 + R07-E-Rest nach
Kapazität. Prompts nach NEUEM tagesstart-Stand: Volltexte in den
Tagesplan (Abschnitt „Session-Prompts"), Chat nur Klartext + Startzeile.

**Debrief-Kandidaten aus Block 1:** unvollständiger R7-Rückfluss als
Fehlerklasse (Kopie-Edit ohne Master-Edit — Wächter fing es eine Runde
später; Lehre: Rückfluss-Vollständigkeit gegen die DRIFT-Liste prüfen,
nicht gegen die Erinnerung) · L-05-Doppelbeleg · Heredoc-Backslash-
Falle (Bash-Heredoc nach JSON verschluckt `\\` → Write-Tool nutzen).

## Block 2 — ab 14:20 · SCHARF (R8-Schnitt)

**Kurzcheck 14:20:** Dienstag-Nachmittag, Erreichbarkeitsfenster offen
(heute aber keine Außenkorrespondenz durch Sessions). Kein neues
Briefing seit dem Vormittags-Slot (Listing `zentrale\briefings\`
14:21). User-Zuruf: „mach weiter" — **Blockwechsel OHNE
Leitsession-Neustart ist User-Entscheid** (Regel-Snapshot-Risiko klein:
die Deltas hat diese Session selbst geschrieben; als Schuld vermerkt).
Repo clean, up to date.

**Mini-Nachzug 14:25 (Commit `d2de0d4`):** Blueprint war seit dem
M1-Stempel um EIN Delta weitergelaufen (`08a12c5`, skill-bauweise
Tranche 2 — betraf ausgerechnet den vormittags aktivierten Baustein,
Wächter meldete 1 DRIFT). Kopie gezogen, Stempel auf `08a12c5` im
selben Commit, Wächter wieder „SYNCHRON: 12".

**⚠️ Korrektur des Block-1-Übergabe-Vermerks (L-05):** Der R7-Debrief
trägt eine L-05-Korrektur (Projektquelle, Changelog 10.08.): Die
Klassifikator-Blockade ist **primär zeitpunkt-, nicht kanalgebunden** —
der R3-Bash-Ausweg trug damals nicht. Der Block-1-Satz „Kanal-Bindung
erneut bestätigt" war zu stark: Gemessen ist nur „2× PowerShell
blockiert → unmittelbar folgender Bash-Lauf lief durch"; ob Kanal oder
Zeitpunkt entschied, ist damit NICHT belegt (A/B über zwei Kanäle trägt
die Falsifikation, nie den Ursachen-Nachweis).

**R8-Schnitt (Strang-Tabelle, Stand 14:35):**

| Session | Rolle | Strang | Scope (Schreibrechte) | Exklusive Systeme | Review-Regime | Modell (User-Wahl, nachdok.) |
|---|---|---|---|---|---|---|
| **R08-A** | Ben Beckman | MKT-AKQ1: Akquiseplan + Listenbau-Regelwerk | `akquise/**` (NEU — legt das Verzeichnis an) · `protokolle/R08-A-*` | keine | **Voll-Review** (unabhängiger Prüfer, außenwirksam-nah) | *offen* |
| **R08-B** | Yasopp | P22 Brandnamic-Vollerhebung, dann P21 Verbünde | `fund/erhebung/brandnamic-partner-vollerhebung.md` (neu) · `fund/erhebung/verbund-vollerhebung.md` (neu, nur falls P21 erreicht) · `protokolle/R08-B-*` · `sensibel/rohbelege-R08-B/` | **Web/Chrome** | Kurzraster + Positivkontrollen im Lauf | *offen* |
| *(Leit, Buchstabe frei)* | Shanks | B9.4-Korrekturen 1–4 + R07-D-Nebenbefunde 5–7 (Nr. 6 zitatkritisch) + F-6/F-13-Vermerke · danach Reviews beider Richtungen | `fund/wettbewerbsbild.md` · `fund/positionierungspapier.md` · `handel/foerderarchitektur-beraterrolle.md` (nur F-6-Vermerk) · Tagesplan · Wahrheits-Kanal | — | — | Fable 5 (Statuszeile bestätigt User) |
| — | — | ⛔ NICHT Teil dieser Runde: Kanalbewertung P15/P19-Folge (liegt IN R08-A-Ergebnis), D3.3-Einwilligungstext, Adress-Erhebung/Listenbau | | | | |

**Disjunktheits-Prüfung (3 Paare, Datei-Ebene):** A∩B = ∅ · A∩Leit = ∅
(A liest `handel/`/`fund/` nur) · B∩Leit: beide berühren `fund/`, aber
B schreibt ausschließlich NEUE Dateien unter `fund/erhebung/`, Leit
schreibt `wettbewerbsbild.md`/`positionierungspapier.md` —
**B fasst `wettbewerbsbild.md` NICHT an** (Befunde via Abschlussmeldung,
Einarbeitung Leitsession). `fund/erhebung/` existiert bereits (kein
Verzeichnis-Anlage-Konflikt); `akquise/` legt allein R08-A an.

**Bestandsprüfungs-Subagent (gelaufen 14:25–14:30):** Kernbefunde in
die Prompts eingearbeitet — Rohbeleg-Pfad R05-A (an der Quelle
nachgemessen: Datei existiert, 99 Marker-Treffer) · FUND2-Vorbehalt
Kanalmix · R07-E-Prompt existiert nicht als Volltext (nur
Tabellen-Zuschnitt; Pfad-Konvention übernommen) · B9.4: 0 von 4
Korrekturen eingearbeitet, plus 3 ungenutzte R07-D-Nebenbefunde.

---

## Session-Prompts R8 (Single Source — Sessions lesen HIER)

### Strang R08-A (Ben Beckman) — MKT-AKQ1

> Parallel-Session „R08-A" (Leitsession läuft separat, Multi-Session-
> Modell lt. CLAUDE.md). Session-Start: `git pull`; dein tatsächliches
> Modell verifizierst du NUR per Statuszeile und nennst es in der
> Abschlussmeldung.
>
> **Aufgabe:** MKT-AKQ starten — zwei Deliverables in einem NEUEN
> Verzeichnis `akquise/` (lege es an; es existiert nicht — von der
> Leitsession geprüft 11.08. 14:20, Platte + Git-Historie):
>
> 1. **`akquise/akquiseplan.md`** — Kanal-Kapazitätsplan mit
>    Rückwärtsrechnung auf das Ziel „erster zahlender Kunde bis Mitte
>    November 2026" (Frist gilt für den ABSCHLUSS, E4). Je Kanal der
>    D1-Rangfolge (`handel/kanal-rechtsmatrix.md` D1: Brief ·
>    persönlicher Vorkontakt→Telefon · fremde Verteiler · eingehende
>    Anfragen · Newsletter): Vorlauf, Aufwand pro Kontakt, realistische
>    Taktung, was bis wann gebaut sein muss. Muster für die
>    Rückwärtsrechnung: `beleg/baseline-messplan.md` § 5 (konservativer
>    Planungsanker + Erfragungs-Handgriff; als bewährtes Muster im
>    `lehren-register.md` geführt). KPI-Vorbestand:
>    `protokolle/R00-planpruefung-2026-08-09.md` § (e) — 5 Funnel-KPIs
>    mit Zielwertvorschlägen; als VORSCHLAG übernehmen, nicht als
>    beschlossen ausgeben.
> 2. **`akquise/listenbau-regelwerk.md`** — die operative
>    Zusammenführung ALLER bestehenden Listenbau-Vorgaben zu EINEM
>    Regelwerk: die 6 D2-Bau-Pflichten + die 4 D3.2-Weg-b-Pflichten
>    (dokumentierte Abwägung je Datenfeld · Quellenprotokoll je Adresse
>    inkl. Impressum-Kennzeichnung · Werbesperrdatei vor dem ersten
>    Versand · Restrisiko-Vermerk im VVT) + die fünf kanalweisen
>    „Was das für unsere Zielkundenliste heißt"-Blöcke (A1/A2/A5/A6/A7
>    der Rechtsmatrix) + Zielkundenlisten-FELDSTRUKTUR (jedes Feld
>    besteht die Erforderlichkeitsprüfung einzeln — C2 Stufe 2) +
>    Gebietspriorisierung aus
>    `fund/erhebung/regionalstatistik-groessenklassen.md` § 4.4
>    (Nordfriesland + Ostholstein = 40,1 % der SH-Betriebe; zweimal
>    geparkt mit Vermerk „Zielort existiert noch nicht" — dieser
>    Zielort bist du).
>
> **Harte Grenzen:** (a) ⚠️ **FUND2-Sequenz-Vorbehalt:** CLAUDE.md und
> Projektquelle legen fest, dass der Kanalmix NACH dem Persona-Befund
> festgezurrt wird — `fund/persona-befund.md` existiert nicht, die
> D1-Rangfolge ist RECHTLICH hergeleitet, nicht persona-validiert.
> Beide Dokumente tragen deshalb einen SICHTBAREN Vorbehalt
> („Arbeitsgrundlage auf Rechtsmatrix-Basis; Festzurrung nach
> FUND2-Persona-Befund") — du hebst den Vorbehalt NICHT selbst auf.
> (b) KEINE Adressen erheben, kein Listenbau, keine Anbieter-/
> Dienstleister-Auswahl — erst das Regelwerk. (c) D3.3
> (Einwilligungstext) bleibt offen — nicht mitentscheiden. (d) Die
> D3-Entscheide (24 Monate · Weg b) übernimmst du BYTE-getreu aus den
> Nachtrags-Kästen der Rechtsmatrix mit Quellverweis — nicht
> paraphrasieren, Vorbehalte zuerst übernehmen, dann Sätze bauen.
> (e) Wo die Sachlage streitig oder unbelegt ist, ist „streitig"/
> „unbelegt" der Eintrag, nicht der bequemere Pol.
>
> **Dein Scope (Schreibrechte):** `akquise/**` (neu) +
> `protokolle/R08-A-*`. Alles andere nur lesen — ausdrücklich NICHT
> anfassen: `handel/`, `fund/`, Projektquelle, STATUS.md, CLAUDE.md,
> Skills/Commands. Kein eigener Debrief. Exklusive Systeme: keine.
> Fremde uncommittete Dateien im `git status` ignorieren.
>
> **Git:** Committen nur mit `git add <deine Pfade>` und
> `git commit -F <msgdatei> -- <deine Pfade>`; Reihenfolge zwingend
> add → commit → `git pull --rebase --autostash` → push als
> `git push origin <dein-hash>:main` (CLAUDE.md Regel 3).
>
> **Prüfer (Pflicht, Voll-Review):** Nach dem ersten vollständigen
> Stand beider Dokumente: committe, notiere den Commit-Hash und
> beauftrage EINEN unabhängigen Prüf-Subagenten mit frischem Kontext.
> Sein Auftrag: BEIDE Dokumente GANZ lesen und gegen
> `handel/kanal-rechtsmatrix.md` (ganze Datei) quervergleichen —
> eingefrorener Prüfstand: dein genannter Commit-Hash; Schreibrecht
> nur auf `protokolle/R08-A-pruefer.md`. Pflicht-Kategorien mit
> Ergebnis je Kategorie (auch „keine Auffälligkeit"): (1) Widerspruch
> zur Rechtsmatrix/den D3-Kästen · (2) fehlende D2-/D3.2-Pflicht ·
> (3) Zahl ohne Zählweg/Quelle · (4) Vorbehaltsverlust beim
> Verdichten (Verdichten-Regel: Abgleich Satz für Satz gegen die
> Quelle) · (5) FUND2-Vorbehalt vorhanden und unaufgeweicht? Dazu die
> Zusatzfragen: „Welche Verfälschung hätte dein Verfahren NICHT
> gefangen?" und „Hättest du deine Funde auch OHNE die Kategorien
> gefunden?". Wo streitig: „streitig" ist der Eintrag. **Danach
> disponierst du JEDEN Prüferbefund** (repariert / ausdrücklich
> verworfen mit Grund / benannter Träger).
>
> **Fertig-Kriterium:** Beide Dokumente committet + gepusht;
> Prüferprotokoll liegt vor; alle Prüferbefunde disponiert.
> **Abschlussmeldung in VIER Blöcken** (gebaut/verifiziert mit
> Commit-Hashes+Pfaden · offen geblieben · Nebenbefunde außerhalb des
> Auftrags — was einem anderen Strang gehört · Stolpersteine/Learnings
> getrennt nach (i) Fallen und (ii) bewährten Mustern), zusätzlich
> committet als `protokolle/R08-A-abschluss.md` mit Kopfzeile
> „Token-Verbrauch: von der Session nicht erhebbar —
> Subagenten-Zahlen soweit bekannt: …". **Prüferbefunde meldest du
> kategorienweise MIT NENNER** („x von y repariert, z bewusst offen
> mit Grund, Träger für den Rest") — nie nur die reparierten plus
> eine Auswahl.

### Strang R08-B (Yasopp) — P22 Brandnamic-Vollerhebung, dann P21

> **📌 Nachtrags-Kasten (16:xx, nach R08-B-Abschluss — Prompt unten
> bleibt Original):** (1) **Byte-Zahl im Prompt war falsch**
> (R08-B/Z-7): `raw_partner.html` hat **475.910** Bytes; „430.793" ist
> `agb.html` — Fehler der Leitsession beim Prompt-Bau (Zahl aus dem
> eigenen `ls`-Head dem falschen Schlüssel zugeordnet; genau die Regel
> „Zahlen an ihren Schlüssel binden"; Debrief-Kandidat). Pfad und
> Marker-Prämisse trugen. (2) **Session abgeschlossen:** Commits
> `e387249` (P22) + `7db858c` (P21-Teil + Abschlussmeldung), beide auf
> origin/main. P22 erfüllt (72/72), P21 bleibt offen. Review der
> Leitsession gelaufen, Einarbeitung in `fund/wettbewerbsbild.md`
> committet. (3) ⚠️ **Modellangabe fehlt** — Statuszeile war für die
> Session nicht einsehbar: **User-Handgriff: im R08-B-Fenster die
> Statuszeile ablesen und mir nennen, BEVOR das Fenster geschlossen
> wird** (Strang-Tabelle wird nachgetragen; danach ist es endgültig
> nicht mehr erhebbar).

> Parallel-Session „R08-B" (Leitsession läuft separat, Multi-Session-
> Modell lt. CLAUDE.md). Session-Start: `git pull`; dein tatsächliches
> Modell verifizierst du NUR per Statuszeile und nennst es in der
> Abschlussmeldung.
>
> **Aufgabe (P22 ZUERST, P21 nur nach Kapazität):** Die ungeprüften
> Brandnamic-Partner am gesicherten Rohbeleg auswerten — Erbe des nie
> gefahrenen R07-E.
>
> **Rohbeleg (Prämisse von der Leitsession nachgemessen 14:35):**
> `sensibel/rohbelege-R05-A/a2/raw_partner.html` (430.793 Bytes,
> 09.08.) — NICHT im R06-Ordner. ⚠️ **Die Partnernamen stehen NUR im
> Markup** (`data-gtm-label`-Attribute; 99 Marker-Zeilen per grep -c
> gemessen — deine eigene Zählung macht den belastbaren Zählweg): Die
> Textfassung `txt_partner.txt` trägt KEINE Namen — wer sie nimmt,
> findet nichts (Fehlerklasse B10.4/B11.7). Roh-HTML parsen,
> GENERISCH über das Strukturmerkmal (nicht über eine Namensliste).
>
> **Schritt 1 — Zählweg-Klärung (vor jeder Auswertung):** Der Bestand
> trägt drei Zahlen: B10.1 „78 Logo-Einträge/76 Domains (2
> Doppelnennungen)" · Registerzeile „74 ungeprüft" · Prüferbefund
> R06-A/K-21 „74 Einträge, aber 72 Domains". Eigene Zählung am
> Rohbeleg mit dokumentiertem Zählweg; jede Zahl an ihren SCHLÜSSEL
> gebunden (Eintrag ≠ Domain ≠ Firma). Erst wenn deine Zählung steht,
> beginnt die Auswertung.
>
> **Schritt 2 — Auswertung je Eintrag** in NEUER Datei
> `fund/erhebung/brandnamic-partner-vollerhebung.md` (Pfad-Konvention
> aus dem R07-E-Zuschnitt, Tagesplan 10.08. Strang-Tabelle): Kategorie
> (die 7 aus B10.1 mit wörtlichen Überschriften) · was der Anbieter
> tut · Nähe zu unserem Feld (Check-in/Zutritt/Gästekommunikation/
> Payment-Kopplung) · Einstufung mit Beleg-Typ ZWEIACHSIG (Leseweg ·
> Quellenart). Die 5 vorsortierten Namen (chatlyn, customer-alliance,
> guest.net, reguest.io, mergeport) gehören in deine AUSSCHLUSS-/
> Vorbefund-Liste, NICHT in den Suchauftrag (Vorbefunde machen die
> Recherche sonst zur Verifikation). Bereits geprüft und NICHT neu zu
> erheben: straiv, flexipass, hoteldoor, iiq check (B10.2/B10.3).
> Web-Recherche je Partner-Domain: **billigsten Kanal zuerst messen**
> (curl/WebFetch; `__NEXT_DATA__`-Muster prüfen) — Chrome ist dir
> exklusiv zugeteilt als ERLAUBNIS, nicht als Vorgabe. Neue Rohabzüge
> ausschließlich nach `sensibel/rohbelege-R08-B/` (NIE in den
> R05-A-Ordner — L-20: fremde Runden-Ordner lassen Bestandszahlen
> still altern).
>
> **Positivkontrollen (Pflichtform):** (a) Extraktions-Vollständigkeit:
> straiv, flexipass UND die weareplanet-Doppelnennung müssen in deiner
> Liste erscheinen, sonst ist die Extraktion unvollständig; (b) je
> Prüfkanal ein benannter Kontrollkandidat; (c) die Vollzähligkeit der
> GLIEDERUNG (7 Kategorien) generisch über das Strukturmerkmal belegen,
> nicht gegen die notierte Liste. Ein Muster, das nicht treffen KANN,
> sieht wie ein Negativ aus — bei „nicht gefunden" zuerst das Muster
> verdächtigen.
>
> **Schritt 3 — P21 (nur wenn Kapazität bleibt):** Verbund-
> Vollerhebung in NEUER Datei `fund/erhebung/verbund-vollerhebung.md`:
> die 7 offenen deutschen Kandidaten der Fachmedienliste (B11.2) ·
> Trägerschaft der 5 ungeprüften Südtiroler Verbünde (IDM-Liste) ·
> Schweiz über den fertigen Beschaffungsvorschlag (HotellerieSuisse
> statt GastroSuisse, Registerzeile P21). Institutionelle Quellen vor
> Anbieterquellen. ⚠️ Die KANALBEWERTUNG (lohnt der Verbund-Kanal?)
> ist NICHT dein Auftrag — sie gehört MKT-AKQ (B11.7/B11.8).
>
> **Dein Scope (Schreibrechte):**
> `fund/erhebung/brandnamic-partner-vollerhebung.md` (neu) ·
> `fund/erhebung/verbund-vollerhebung.md` (neu, nur falls P21) ·
> `protokolle/R08-B-*` · `sensibel/rohbelege-R08-B/`. **`fund/
> wettbewerbsbild.md` fasst du NICHT an** (dort schreibt heute die
> Leitsession) — Register-Nachträge (P21/P22-Zeilen) meldest du in
> der Abschlussmeldung, die Einarbeitung macht die Leitsession. NICHT
> anfassen: Projektquelle, STATUS.md, CLAUDE.md, Skills/Commands;
> kein eigener Debrief. Fremde uncommittete Dateien ignorieren.
>
> **Git:** Committen nur mit `git add <deine Pfade>` und
> `git commit -F <msgdatei> -- <deine Pfade>`; Reihenfolge add →
> commit → `git pull --rebase --autostash` → push als
> `git push origin <dein-hash>:main` (CLAUDE.md Regel 3). `sensibel/`
> ist git-ignoriert und wird nie committet.
>
> **Fertig-Kriterium:** Vollerhebung committet + gepusht mit
> Verifikationsgrad MIT NENNER („x von y Einträgen ausgewertet, Rest
> mit Grund"), Zählweg dokumentiert, Positivkontrollen (a)–(c)
> bestanden und im Dokument ausgewiesen. **Abschlussmeldung in VIER
> Blöcken** (gebaut/verifiziert mit Commit-Hashes+Pfaden · offen
> geblieben · Nebenbefunde außerhalb des Auftrags · Stolpersteine/
> Learnings getrennt nach (i) Fallen und (ii) bewährten Mustern),
> zusätzlich committet als `protokolle/R08-B-abschluss.md` mit
> Kopfzeile „Token-Verbrauch: von der Session nicht erhebbar —
> Subagenten-Zahlen soweit bekannt: …".

> **📌 Nachtrags-Kasten R08-A (nach Abschluss, ~17:xx):** Session
> abgeschlossen — `akquise/` mit Akquiseplan + Listenbau-Regelwerk,
> Commits `d11535f`→`616e708`→`6e4daa5`→`d0d9437`; Prüfer 26/26
> disponiert (2 K · 15 W · 8 H · 1 Zusatz; Kategorien am Protokoll
> nachgezählt ✔). **Review-Vermerk der Leitsession:** (1) ⚠️ Der
> unabhängige Prüflauf wurde durch ein Session-Limit UNTERBROCHEN —
> § C des Protokolls weist offene Prüfschritte aus (Zahlen-Kategorie
> unvollständig, `baseline-messplan.md` ungelesen, Rückbau-Gegenprobe
> nicht abgeschlossen); die Abschlussmeldung nannte das nicht. „26/26
> repariert" gilt je GEFUNDENEM Befund, der Prüfraum hat benannte
> Lücken → Erhebungsgrenze im Rundenvermerk, Rest-Prüfschritte =
> Kandidat nächste Runde. (2) P-02-Reparatur am Objekt stichgeprüft:
> Skript liest die Blockzitate jetzt im ZIELDOKUMENT inkl. eingebauter
> Gegenprobe ✔. (3) N-6/N-7 sofort nachgezogen (D3.1-Geltungsvermerk ·
> 5 Vorwärtsverweise an den vom Weg-b-Entscheid gekippten
> Rechtsmatrix-Stellen — Versäumnis der Leitsession beim D3-Nachtrag,
> Debrief-Kandidat). (4) **Kernbefund eskaliert:** Postkorb-Meldung
> `zentrale\eingang\2026-08-11-mkt-kritischer-pfad-namensentscheid.md`
> (`8d71def`, gepusht) — kritischer Pfad der November-Frist =
> Namensentscheid; zweiter Sperrposten Preismodell ab ~23.10 (N-2).
> (5) ⚠️ Modellangabe fehlt auch hier — **User-Handgriff: Statuszeile
> im R08-A-Fenster ablesen, bevor es geschlossen wird.** (6) O-8
> (Interessenabwägung Stufe 3) ist unter Weg b das risikotragende
> Dokument — Pflichtposten VOR dem ersten Versand, Träger nächste
> AKQ-Session.

### Leitsession-Strang (Shanks, Buchstabe frei gelassen)

B9.4-Durchgang in `fund/wettbewerbsbild.md`: die vier R07-D-Korrekturen
(2.1 Link-Warnung differenzieren · 4.3 SH-DKU-Werbe-Ausschluss
ergänzen · 3.3 „niedrigste Hürde" qualifizieren (3 Referenzprojekte,
§ 264 StGB) · 4.2 Größenschwelle „kleine Unternehmen") + Nebenbefund
Nr. 6 (404-Fehlerseiten-Dateien `hh-programme.html`/`hh-bcw.html` —
zitatkritisch, gleicher Durchgang) + Nr. 5 disponieren + Nr. 7/F-13
(Vorwärtsverweis `fund/positionierungspapier.md` Säule 5) +
Änderungsprotokoll-Eintrag § 8 + F-6-Erledigt-Vermerk in der
Förderarchitektur. Reparaturen SICHTBAR (Kasten, nicht stille
Neufassung). Danach: Reviews beider Richtungen nach Rücklauf A/B.

## Rundenvermerk R8 (Debrief 11.08.2026 abends)

**Gelaufen:** M1-Methodik-Block (Leitsession, Block 1) · R08-A
(MKT-AKQ1, Prüfer 26/26 mit unterbrochenem Lauf, 5 Restschritte
disponiert) · R08-B (P22 aufgelöst 72/72, P21-Teilstand) ·
Leitsession-Strang B9.4/F-6 + beide Reviews + Postkorb-Eskalation
kritischer Pfad. **Alle Abschlussmeldungen liegen als Dateien vor,
beide Reviews in beide Richtungen gefahren, Debrief mit Rückschreiben
abgeschlossen** (CLAUDE.md + Register L-21…L-24 + Blueprint `0dc102f`
+ Vier-Stellen-Sync). **Präzisierung zum R08-A-Review-Vermerk oben:**
Die Original-DATEI (`R08-A-abschluss.md`) führte den
Prüflauf-Abbruch samt Disposition der 5 Restschritte korrekt — nur
die CHAT-Verdichtung der Meldung verlor den Vorbehalt
(Zweitbeleg „Verdichten verliert den Vorbehalt", Register
Sammelvermerk R8). **Offen als User-Handgriffe:** Modell-Statuszeilen
R08-A + R08-B ablesen (vor Fenster-Schließen!) und nachmelden; H-1
bis 16.08. **R9-Kandidaten:** O-8-Interessenabwägung + O-2 (vor
erstem Versand) · Preismodell/HANDEL1 (Terminpfad ~23.10.) · Z-3
Teil-B-Einstufungen · P21-Rest · N-8 · Kategorie-4-Rest des Prüfers.
