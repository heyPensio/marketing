# STATUS — Marketingabteilung (Kurz-Einstieg)

> **Zweck:** Garantiert lesbarer Sitzungsstart-Einstieg. Die Projektquelle
> (`projektquelle-mkt.md`) **bleibt der Wahrheits-Kanal** —
> diese Datei ist nur der Kurzabriss.
>
> **Lese-Regel (verbindlich):**
> 1. Diese STATUS.md immer zuerst lesen — **danach**
>    `<FIRMENWURZEL>\zentrale\STATUS.md` (Firmen-Ebene, s.
>    CLAUDE.md Abschnitt „Firmen-Ebene"; Firmenwurzel = Elternordner
>    dieser Repo-Wurzel).
> 2. Für Details/Historie die Projektquelle **gezielt** lesen (grep bzw.
>    Read mit offset auf „AKTUELLER STAND", „NÄCHSTER KONKRETER SCHRITT",
>    Changelog-Header). Nie einen gescheiterten Voll-Read stillschweigend
>    übergehen, nie auf ein veraltetes Seiten-Dokument aufsetzen.
> 3. Vor jeder Statusaussage über einen benannten Anbieter/Sachverhalt:
>    erst `grep -rin "<name>"` übers Repo.
> 4. Bei Widerspruch STATUS.md ↔ Projektquelle: **Projektquelle gewinnt.**
>
> **Pflege:** Nur die drei Blöcke unten, kurz halten; wird beim Debrief
> zusammen mit der Projektquelle aktualisiert (Vier-Stellen-Sync).
> Runden-Stände älter als das 2-Runden-Fenster rotieren VERBATIM nach
> `STATUS-archiv.md` (Datei entsteht bei der ersten Rotation); ein hier fehlender Alt-Stand heißt „rotiert", nie
> „nichts passiert".

---

## Letzte Aktualisierung
**12.08.2026 abends (R11, Shanks + R11-A/Yasopp — Preismodell-Runde)** —
⭐⭐ **Die Preismodell-ENTSCHEIDUNGSVORLAGE steht:**
`handel/preismodell-optionen.md` (R11-A, Ausführung der R09-B-Planung
nach Freeze-Aufhebung, Briefing Slot 3) — Optionenraum (i) monatlich
ohne Bindung · (ii) + Startgebühr · (iii) + Mindestlaufzeit · (iv)
sinkender Staffelpreis, quer dazu Bemessungsachse und
Bezugseinheit-Vorfrage E-2a; Kostenbasis selbst belegt
(Hetzner/Supabase/Vapi, 138 Rohbelege, Summenprobe ohne Rest); 13
Marktanker (u. a. Marktstundensatz 125–160 €/h); A3-Architektur-Weiche
OFFEN geführt; acht ☐-Entscheidungspunkte nach `freigabe-vorlagen`.
**Nichts entschieden — die Preishöhe braucht E-6 (Einführungsaufwand
messen) + E-7 (Zahlungsbereitschaft, überfällig lt. Rohstoff-Routing);
E-1 kann auf E-6 warten, der Engpass bleibt der Namensentscheid.**
Prüfer **28/28 disponiert** (4 schwere — alle in der Verdichtung,
alle Richtung eigener Empfehlung), 0 offene Prüfschritte ·
Leitsession-Review beidseitig (P-01 am Rohbeleg nachgemessen; 10
Nebenbefunde mit Zielort disponiert) · **Debrief-Gegenprobe: 1
verlorenes Muster gefunden und nachgezogen** (Baustein-Fallen an
Recherche-Agenten, `4fa4453`), 3 Grenzfälle geschlossen · Methodik:
**6 Lehren → Blueprint** (L-30…L-32 + 3 Vorlagen-Schärfungen), fremde
Deltas `a49bf8e` + `30ba699` (heyPensio R39, permissions.deny)
disponiert, Stempel `4fa4453`, Wächter SYNCHRON 12 / 0 DRIFT.
⚠️ **Push-Befund:**
`b04c264`/`a49bf8e` lagen unveröffentlicht im Blueprint — beim
R11-Push als Vorfahren mitveröffentlicht (Postkorb-Meldung);
zentrale-Push ZURÜCKGESTELLT (9 fremde ungepushte Commits). ⚠️
R11-A-Modell: Umgebungsangabe „Opus 5", Statuszeilen-Bestätigung =
User-Handgriff. *(Details: Projektquelle-Changelog R11.)*

**Vorheriger Stand — 12.08.2026 nachmittags (R10, Umbau-Runde — nur Leitsession)** —
Kleine Werkzeug-Runde nach dem Slot-2-Briefing der Zentrale
(Architektur-Umbau-Tag; Inhalts-Stränge ruhen bis zur Abnahme):
✅ **F10** `settings.local.json` git-ignoriert — Sichtung VOR dem
Eintrag: keine Secrets (`acb9556`) · ✅ **Gerüst-Nachzug** 2 Deltas
einzeln disponiert (Duplikat-Grundsatz → „Doku-Hygiene" ·
`debrief.md` 3d), Stempel `bb3b32c`, Wächter SYNCHRON 12 / 0 DRIFT
(`6aa2dd9`) · ✅ **F13 NACHGEREICHT** (Nachtrag 14:49 MESZ:
C2-Rücklauf 14:32 eingetroffen, User-Entsperrung — Command-Kopien vom
Master `b04c264` gezogen, CLAUDE.md/AGENTS.md/STATUS-Kopf auf
`<FIRMENWURZEL>`-Platzhalter entkoppelt, Wächter 0 DRIFT; um 14:13
lag der Rücklauf noch nicht vor) ·
**R09-B (Preismodell) wartet auf die Umbau-Abnahme der Zentrale.**
⚠️ Nach dem Nachzug gilt Neustart-Pflicht der Leitsession (Tagesplan,
Blockwechsel-Handgriff). *(Details: Projektquelle-Changelog R10.)*

*(Davor: R9 — O-8 gebaut/geprüft, O-2 entschieden, Rn.-87-Verschärfung
Listenaufbau; rotiert 12.08.2026 (R11) → `STATUS-archiv.md`. Davor R8 —
MKT-AKQ-Start, kritischer Pfad = Namensentscheid; rotiert 12.08.2026
(R10). Ältere Stände: `STATUS-archiv.md`.)*

## Aktueller Stand
- Projektstruktur angelegt: MKT-FUND (Positionierung) · MKT-MARKE
  (Name/CI; Rebrand GESETZT, 51/49-Freigabe laut GF-Auskunft erteilt —
  Datum/Form-Dokumentation offen, E9) · MKT-BELEG (Pilot-Doku) ·
  MKT-HANDEL (Pricing/Vertrieb) · MKT-WEB (Website, nach
  Namensentscheid) · MKT-AKQ (Akquise) · MKT-OPS (Betrieb flach).
- **Zieltermine (E4 präzisiert):** Abteilung komplett Mitte September
  2026 (angedacht) · erster zahlender Kunde bis Mitte November 2026.
- Schwester-Repo `zentrale` (Firmen-Ebene) im selben Zug angelegt —
  trägt Namensentscheid-Vorprüfung und Rollen-Charta.
- *(R7-Block rotiert 12.08.2026 → `STATUS-archiv.md`. Weiterhin offen
  daraus: Telkon-Logo · **F-7 Firmierung** · U-1…U-9/O-1…O-7 der
  Referenzvereinbarungs-Vorlage · W-17-/V-1-Rest.)*
- *(R8-Block rotiert 12.08.2026 (R10) → `STATUS-archiv.md`. Weiterhin
  offen daraus: Z-3 Teil-B-Einstufungen (4 Fälle) · P21-Rest · N-8
  fremde Verteiler. Modell-Statuszeilen R08-A/B ENTFALLEN — User
  12.08.: Fenster zu, endgültig nicht erhebbar. Kategorie-4-Rest durch
  Codex-C1 in R9 geschlossen. R5+R6 ebenfalls im Archiv.)*
- **R10 (12.08. nachmittags, Umbau-Runde — nur Leitsession):** ✅ F10
  (`settings.local.json` git-ignoriert, Sichtung: keine Secrets,
  `acb9556`) · ✅ Gerüst-Nachzug 2 Deltas (Duplikat-Grundsatz →
  „Doku-Hygiene" · `debrief.md` 3d), Stempel `bb3b32c`, Wächter
  0 DRIFT (`6aa2dd9`) · ✅ F13 nachgereicht (C2-Rücklauf 14:32;
  Kopien + CLAUDE.md/AGENTS.md/STATUS-Kopf entkoppelt, Stempel
  `b04c264`) · R09-B wartet auf die Umbau-Abnahme der Zentrale.
  *(R8 rotiert → `STATUS-archiv.md`.)*
- **R11 (12.08. abends, Preismodell-Runde):** ✅ **HANDEL1-Vorlage
  gebaut und geprüft** (`handel/preismodell-optionen.md`; Prüfer 28/28
  disponiert, 0 offene Prüfschritte; = R09-B-Planung ausgeführt) ·
  ✅ Methodik: 6 Lehren → Blueprint (L-30…L-32 + 3
  Vorlagen-Schärfungen inkl. Gegenprobe-Nachtrag), fremde Deltas
  `a49bf8e` + `30ba699` disponiert, Stempel `4fa4453`, Wächter
  SYNCHRON 12 / 0 DRIFT · ⚠️ Push-Befund projektgeruest
  (Postkorb-Meldung; zentrale-Push zurückgestellt).
  **Offen aus R11:** User-Entscheidungspunkte **E-1…E-8** der Vorlage
  (E-6 Einführungsaufwand-Messung + E-7 Zahlungsbereitschaft sind die
  zwei fehlenden Zahlen) · Rechtsmatrix-Pflege N-9…N-14 + FUND-Pflege
  N-3…N-6 · **N-10 Marktstundensatz 125–160 €/h in
  `handel/foerderarchitektur-beraterrolle.md` nachziehen** (Wert
  belegt, Zielort-Eintrag steht aus) · N-8 Payment/Fremdlizenzen als
  Z-5-Zulieferung im Deliverable getragen · n8n-Lizenz↔A3-Übergabe an
  heypensio (Projektquelle § 5) · Chrome-Kanal war nicht verbunden
  (N-9, vor Browser-Zuteilungen messen) · Modell-Statuszeile R11-A
  (User-Ablesung). *(Offen aus R9 weiterhin: O-9 · O-10 · sieben
  Bau-Pflichten · R-2; R9 rotiert → `STATUS-archiv.md`.)*

## Nächster konkreter Schritt
0. **⭐⭐ Der kritische Pfad zur November-Frist ist der NAMENSENTSCHEID
   (StB ~KW 34/35) — eskaliert an die Zentrale (`8d71def`).**
   ⭐⭐ **NEU AUS R9 — der Engpass ist FRÜHER als gedacht:** Nach LG
   Düsseldorf Rn. 87 müssen die Vorkehrungen vor dem ersten
   Verarbeitungsschritt stehen, und das ist der **Listenaufbau**, nicht
   der Versand. **F-7 (Firmierung), O-9 und die sieben Bau-Pflichten
   sperren damit schon den ersten Datensatz** — die Annahme „Liste sofort
   baubar, nur der Versand hängt am Namen" trägt nicht mehr; der
   Akquiseplan ist entsprechend nachzuziehen. ~~O-8~~ ✅ erledigt (R9),
   ~~O-2~~ ✅ entschieden (12 Monate + O-2b). ~~Preismodell/HANDEL1~~
   ✅ **Vorlage liegt vor (R11, 12.08. abends)** — der Sperr-Posten
   ist entschärft, SOLANGE die E-Punkte zügig beantwortet werden:
   Spitzenposten jetzt: **User-Handgriff E-1…E-8 beantworten**
   (`handel/preismodell-optionen.md` § 11; E-6/E-7 sind die zwei
   fehlenden Zahlen, E-1 kann auf E-6 warten) · **die sieben
   Bau-Pflichten** ins Regelwerk · **O-9** (Kompatibilitätsprüfung
   Art. 6 Abs. 4) · Kanalmix-Festzurrung erst nach FUND2-Persona-
   Befund. Details: Projektquelle § 7 Punkt 0 + R11-Changelog.
   ~~⏸️ R09-B wartet auf Umbau-Abnahme~~ ✅ Freeze aufgehoben
   (User-Entscheid 12.08. abends, Briefing Slot 3), als R11-A
   ausgeführt; ~~F13 wartet auf C2-Rücklauf~~ ✅ nachgereicht 14:49
   (Stempel `b04c264`).
1. **⚠️ TERMINKRITISCH (Zentrale, User-Handgriff Mo 10.08.):** StB-Anruf —
   GbR-Namensführung VOR Gewerbeanmeldung ~Mitte August; Träger
   `zentrale\stb-termin-fragenliste-2026-08.md`. **Jetzt DOPPELTER
   Kayhan-Posten:** Marken-Inhaberschaft (Postkorb R3) + Beratervertrag/
   Konditionen nach E13b-Pauschalzuschnitt (Postkorb R4,
   `zentrale\eingang\2026-08-09-mkt-kayhan-rollenzuschnitt.md`) —
   **und NEU (R5) der BAFA-Kandidat:** Umsatzstruktur-Frage mit
   Formulierungsvorschlag im Postkorb (`2026-08-09-mkt-bafa-
   umsatzstruktur-stb.md`); VOR dem Anruf entscheiden, ob sie in die
   Liste kommt. MKT-MARKE2 (Namensentscheid) wartet darauf,
   FUND/BELEG nicht.
2. **User-Handgriffe MARKE1 (aus R4):** Shortlist-Gesamtschau
   (10 Kandidaten, `marke/naming-sprint-2026-08.md` § 5.4) ·
   K4-Diktat-Test (Testbogen § 6 dort) · EN-Muttersprachler-Check ·
   Entscheid über 4 K1-Blockierte (Getrost/Verlass/Obenauf/Obhut).
   Danach: **zweite Recherche-Welle E-V4** (eigene Session, Chrome;
   Prompt-Pflichten in Projektquelle § 7 4b).
3. **User-Handgriffe (Messplan-Kette):** H-1 Livegang-Tagesdatum (bis
   16.08.) · Anfrage-Entwürfe DEHOGA/IHK versenden (werktags, vorher
   IHK-Zuständigkeit klären) · **A5-Probedruck der Vorlagen**
   („tatsächliche Größe") · Betreiber-Briefing bis 23.08., **gekoppelt
   mit dem FUND2-Kayhan-Gespräch** · H-4 Altdaten-Sicherung anstoßen
   (bis 07.09.) · Modell-Statuszeilen R3-A/B/D + R04-A bestätigen.
4. **R7-Kandidaten:** (a) ⭐ **Nacharbeit der 24 offenen
   R05-A-Prüferbefunde** — Träger `protokolle/R06-nacharbeit-R05A-
   befunde.md`, zuerst die zitatkritischen (W-16/H-3/H-4/H-10), weil
   sie Risiko in außenwirksame Texte tragen; (b) E-V4-Welle (nach den
   Shortlist-Handgriffen); (c) FUND2-Rest (Kayhan-Gespräch;
   Apaleo-Teil erst nach dem Trigger ~14.08.); (d)
   HANDEL-Einarbeitung der R5/R6-Preisanker + IFB-Vorabklärung
   Hamburg Digital Check (Frist 16.11., B9.4); (e) P21/P22
   (Verbund-Vollerhebung · 74 ungeprüfte Brandnamic-Partner).
   *(~~FUND3~~ ✅ und ~~Blueprint-Auftrag~~ ✅ in R5, ~~P15/P19~~ ✅
   in R6 erledigt.)*
5. **Kleinposten:** Domain-Inventur (Cloudflare-/Registrar-Dashboard
   mit dem User) · Byte-Vergleich Fassung-6-Kanon · RDB-Konto nur bei
   Bedarf.
6. ~~Kapazitätsdeckel-Entscheid~~ ✅ ENTSCHIEDEN 09.08. (E8): kein
   fester Deckel — Parallelbetrieb Marketing + Pilot, Regler ist das
   Wochen-Nutzungslimit; Priorisierung situativ über das
   Firmen-`/briefing` (Terminposten zuerst).
