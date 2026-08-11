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

## Rundenvermerk R8

*(wird beim Debrief gefüllt)*
