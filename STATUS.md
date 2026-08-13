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
**13.08.2026 spätabends (R14, Shanks + R14-A/Ben Beckman + R14-B/Yasopp
— Briefing-Nachträge + Pflege-Pakete, parallel)** — ⭐⭐ **Der
Z-6-Lizenzvorbehalt ist AUFGELÖST („A3 trägt"), die Belegstufe aller
Entscheide-Vermerke ist gehoben, und zwei seit Runden offene
Pflege-Pakete sind abgearbeitet.** Auslöser: drei Briefing-Nachträge
(6/7/8), die der R13-Debrief nicht mehr gesehen hatte — der
Nachtrag-8-Commit der Zentrale lag **zwei Minuten** vor dem
R13-Debrief-Commit; gefunden, weil die Leitsession die Ankunft am
Repo-Bestand gemessen hat (grep 0 Treffer bei greifender
Positivkontrolle).
**R14-A:** **Z-6 aufgelöst — 28/28 Fundstellen disponiert** (13
aufgelöst · 10 Vorbehalt bleibt · 5 dokumentierter Nicht-Edit), EINE
Fassung im Wurzel-Kasten `preismodell-optionen.md` § 5.3, sonst Zeiger
+ Vorrangklausel · R40-N-6 (ein Lizenzschlüssel, unlimited instances)
mit drei Grenzen · **Belegstufen-Hebung 27 geprüft / 26 gehoben / 0
inhaltlich falsch** (Wortlaut-Archiv der Zentrale, nur per Verweis).
⚠️ **Nicht mit aufgelöst:** K04/Z-5 · Architektur-Entscheid · **K-1**
(Community-Edition als Backend — streitig, fällig VOR dem ersten
A3-Kundenangebot) · Belegstufe **A + B, Auslegung E** (der Entgelt-Teil
trägt eine FAQ, nicht den Vertragstext). Prüfer **14/14 disponiert**
(2 schwer, beide repariert).
**R14-B:** Rechtsmatrix-Pflege R9A-N-9…N-14 **6/6** + FUND-Pflege
R11A-N-3…N-6 **4/4**; **drei Quell-Befunde am Rohbeleg widerlegt**
(u. a. „ob die melevo-Zusatzposten neu sind: nicht feststellbar" —
der Vorher-Abzug lag seit 09.08. im Rohbelege-Ordner einer früheren
Runde), alle Korrekturen in die unbequemere Richtung. Prüfer **17/17
disponiert**. 🔴 **Ein schwerer Fund mit Folgen: Der A7-Kernsatz der
Rechtsmatrix („untersagt — gestützt ausschließlich auf die DSGVO") ist
widerlegt** (148 UWG-Treffer, 21× § 3a UWG) — markiert, Neufassung an
**MKT-HANDEL zusammen mit dem O-9-Rechtsrat** (verschärft das
Abmahnrisiko, entlastet nicht).
**Leitsession-Nacharbeit (`1f7b865`):** O-8-Quellen-Nachzug nach
R14B-N-1…N-8 — sonst hätte die neue Vorrangklausel zugunsten O-8 die
frischen Präzisierungen wieder umgekehrt (zweite Runde in Folge
dieselbe Klasse). · Methodik: **4 Lehren → Blueprint** (L-39…L-42,
`ee8c468`), fremdes Delta `fe6fcaf` (heyPensio R42) disponiert, Kopien
debrief + tagesstart + quellen-beschaffung gezogen, Stempel `ee8c468`,
Wächter SYNCHRON 12 / 0 DRIFT. **Nachtrag-7-Vollzug: CLAUDE.md =
75.635 Bytes** (vor R14: 73.399; Zählweg `Get-Item .Length`) —
Formdisziplin „Schärfung ERSETZT Kern" kommt per debrief-Kopie (R42)
und gilt ab dem nächsten Debrief. ⚠️ Modell-Statuszeilen R14-A (Opus 5
1M) + R14-B (Opus 5 1M) unbestätigt (User-Handgriff).
*(Details: Projektquelle-Changelog R14.)*

**Vorheriger Stand — 13.08.2026 abends (R13, Shanks + R13-A/Ben Beckman + R13-B/Yasopp —
Entscheide-Protokoll 2 + R9-Restposten, parallel)** — ⭐⭐
**S4 + AA-1…AA-8 sind eingearbeitet (nur AA-4 offen), die sieben
Bau-Pflichten stehen im Regelwerk, O-9 ist geführt.** Quelle: Briefing
Nachtrag 4 (Dropdown + Freitext, sinngemäß — so in allen ✅-Vermerken).
**R13-A:** ✅-Vermerke in `handel/angebotsarchitektur.md` +
`handel/preisliste-vorlaeufig.md` — S4 je HAUS (nicht mehr ④) · AA-1
Lesart A (Betreiber) · AA-2 P-B-Zielbild bis E-7 · AA-3
Reifegrad-Leitplanke bindend · **AA-4 OFFEN (Kayhan)** · AA-5 ab
Haus 2 · AA-6 fester Prozentsatz · AA-7 ohne Deckel · **AA-8 Rabatt
auch auf S4, bewusst GEGEN die Session-Empfehlung** (Passagen
ungeglättet, 0 Löschungen mechanisch belegt); alle Höhen Hypothesen
bis E-6/E-7. Prüfer **16/16 disponiert** (1 schwer — Bestandsaussage
aus dem Gedächtnis, gestrichen; 5 Prüfschritte offen ausgewiesen).
**R13-B:** B-1…B-7 aus O-8 § 10 ins Listenbau-Regelwerk (Zählweg
8/1/7: B-8 gestrichen) + **O-9 in Rechtsmatrix UND Regelwerk als
OFFENER Posten geführt** (Gate anwaltlicher Rat, fällig vor dem ersten
Datensatz). Prüfer **5/5 disponiert** (2 schwere repariert).
**Leitsession-Nacharbeit (`daa50a5`):** Quellen-Nachzug
`preismodell-optionen.md` § 10/§ 11 (die Vorrangklausel hätte AA-6
sonst umgekehrt) · O-8-Messstände · **Zitat-Wächter wieder grün**
(Ausnahmeliste +7, Lauf 144 Zitate · 25/25 Einträge · 118/118, Exit
0/0). Postkorb an Zentrale: Belegstufen-Grenze der
Entscheide-Erhebungen (`c9b20f2`, gepusht). · Methodik: **5 Lehren →
Blueprint** (L-36…L-38 + L-26-Schärfung + cmd-%ERRORLEVEL%-Falle,
`5f18694`), fremde Deltas `f756e79` + `13a6659` (heyPensio R40/R41)
einzeln disponiert und übernommen, Kopien tagesstart +
windows-powershell gezogen, Stempel `5f18694`, Wächter SYNCHRON 12 /
0 DRIFT. ⚠️ Modell-Statuszeilen R13-A (Opus 5 1M) + R13-B (Fable 5)
unbestätigt (User-Handgriff). *(Details: Projektquelle-Changelog
R13.)*

*(Davor: R12 — E-1…E-8 eingearbeitet, Preisliste + Angebotsarchitektur
gebaut; rotiert 13.08.2026 (R14) → `STATUS-archiv.md`. Davor R11 —
Preismodell-Entscheidungsvorlage gebaut/geprüft; rotiert 13.08.2026
(R13). Davor R10 — Umbau-Runde F10/F13/Nachzug; rotiert 13.08.2026
(R12). Davor R9 — O-8 gebaut/geprüft, O-2 entschieden,
Rn.-87-Verschärfung Listenaufbau; rotiert 12.08.2026 (R11). Ältere
Stände: `STATUS-archiv.md`.)*

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
- *(R11-Block rotiert 13.08.2026 (R13) → `STATUS-archiv.md`.
  Weiterhin offen daraus: Rechtsmatrix-Pflege N-9…N-14 + FUND-Pflege
  N-3…N-6 · N-8 Z-5-Zulieferung im Deliverable getragen ·
  n8n-Lizenz↔A3-Übergabe an heypensio (Projektquelle § 5) ·
  Chrome-Kanal je Session neu messen (N-9) · Modell-Statuszeile R11-A.
  ~~E-1…E-8~~ ✅ R12 · ~~N-10~~ ✅ R12 · ~~sieben Bau-Pflichten/
  O-9-Führung aus R9~~ ✅ R13; O-10 weiter offen [K2-Trigger].)*
- **R12 (13.08. mittags, Entscheide-Einarbeitung, zwei Sessions
  sequenziell):** ✅ **E-1…E-8 eingearbeitet** (✅-Vermerke § 11;
  Quelle Briefing-Dialog 13.08., sinngemäß) · ✅
  **`handel/preisliste-vorlaeufig.md`** (W-B-Basis, Durchreichung,
  Startgebühr-Hypothese 1.500–2.500 €/Haus — Höhe entscheidet der
  USER nach E-6) · ✅ **`handel/angebotsarchitektur.md`** (E-8;
  **AA-1…AA-8 beim User**, AA-1 zuerst) · ✅ N-10-Marktband
  nachgezogen · Prüfer 19/19 + 13/13 disponiert (0 schwere) ·
  Postkorb-Zulieferung Z-1…Z-7 + Vertragspartner-Frage (K04) an die
  Zentrale · 6 Lehren → Blueprint (`cd45642`), Stempel `cd45642`,
  Wächter SYNCHRON 12 / 0 DRIFT. **Offen aus R12:** AA-1…AA-8 +
  S4-Bezugseinheits-Klärfrage (User) · F-III-Höhe (User, nach E-6) ·
  E-4/E-6-Kalendertermine (heypensio nachhalten) · K5/K6 nicht
  erhoben · Terminpfad-Stufen T0–T5-Umbenennung (Kandidat) ·
  Modell-Statuszeilen R11-A/R12-A. *(R10 rotiert →
  `STATUS-archiv.md`.)*
- **R13 (13.08. abends, Entscheide-Protokoll 2 + R9-Restposten,
  parallel):** ✅ **S4 + AA-1…AA-8 eingearbeitet** (AA-4 offen —
  Kayhan-Antwort aussteht; AA-8 bewusst gegen die Session-Empfehlung,
  ungeglättet) · ✅ **B-1…B-7 im Listenbau-Regelwerk + O-9 in
  Rechtsmatrix und Regelwerk geführt** (offen, Gate anwaltlicher Rat)
  · ✅ Leitsession-Nacharbeit `daa50a5` (Quellen-Nachzug § 10/§ 11 ·
  O-8-Messstände · Zitat-Wächter grün, Ausnahmeliste +7) · ✅ Prüfer
  16/16 + 5/5 disponiert (3 schwere, alle repariert) · ✅ 5 Lehren →
  Blueprint (`5f18694`), 2 fremde Deltas übernommen, Stempel
  `5f18694`, Wächter SYNCHRON 12 / 0 DRIFT · Postkorb
  Belegstufen-Grenze (`c9b20f2`). **Offen aus R13:** **AA-4 (User →
  Kayhan, kein Zeitanker)** · AA-3-Randfrage (deckt „geplant" auch
  GEPARKTE Module? — bis dahin engere Lesart) · drei AA-8-Randfragen
  (ein Rabattsatz oder zwei? · gilt „ohne Deckel" auch für S4? ·
  Z-2-Rechtsnatur → StB) · alle Höhen nach E-6/E-7 · AA-7-Prüfposten
  hängt am E-6-Rücklauf-Anker (Briefing Nachtrag 3 hat ihn erbeten) ·
  R13A-N-4 zweite Rabattposition (nach E-6) · R13A-N-5
  Marktanker-Bezugsangaben (E-7-Erhebung mitfragen) ·
  Modell-Statuszeilen R13-A (Opus 5 1M) / R13-B (Fable 5).
- **R14 (13.08. spätabends, Briefing-Nachträge + Pflege-Pakete,
  parallel):** ✅ **Z-6 aufgelöst** (28/28 Fundstellen disponiert,
  Fassung `preismodell-optionen.md` § 5.3) · ✅ **Belegstufen-Hebung**
  (27/26/0, Wortlaut-Archiv der Zentrale, nur per Verweis) · ✅
  **R40-N-6** an beiden K7-Zeilen · ✅ **Rechtsmatrix-Pflege 6/6 +
  FUND-Pflege 4/4** (drei Quell-Befunde am Rohbeleg widerlegt) · ✅
  Leitsession-Nacharbeit `1f7b865` (O-8-Quellen-Nachzug, sonst hätte
  die Vorrangklausel die Präzisierungen umgekehrt) · ✅ Prüfer 14/14 +
  17/17 disponiert (3 schwere, alle repariert bzw. mit Träger) · ✅ 4
  Lehren → Blueprint (`ee8c468`), fremdes Delta `fe6fcaf` disponiert,
  Stempel `ee8c468`, Wächter SYNCHRON 12 / 0 DRIFT.
  **Offen aus R14:** 🔴 **A7-Kernsatz-Neufassung** (Rechtsmatrix,
  „ausschließlich DSGVO" widerlegt — MKT-HANDEL zusammen mit dem
  O-9-Rechtsrat) · **K-1** (n8n-Community-Edition als Backend eines
  entgeltlichen Produkts, streitig — fällig vor dem ersten
  A3-Kundenangebot, heute ohne MKT-Träger) · **AU-2/AU-4 im
  Angebotsstrang** (kein Paket führt den Onboarding-Schritt
  „Lizenzbedingungen übergeben") · **O-2-Kunden-Pflicht** als
  Vertragsklausel (Kunde öffnet n8n nicht seinen Gästen) · EuGH-Rn.-56
  (O-8 § 11.2 Nr. 4, braucht den Volltext) · Wächter-Reichweite
  (Rechtsmatrix + Wettbewerbsbild stehen in keiner ZIEL-Liste,
  R14B-N-9) · Kurz-ID `Z-6` doppelt belegt (R14A-N-7) · **drei
  Rückmeldungen an heypensio ohne Träger** (O-5: Pseudo-Zitat +
  falscher Adressat im Blueprint; **R14A-N-1: der
  Formulierungsvorschlag des Lizenzpapiers zählt nur AU-1…AU-3 — wer
  ihn wörtlich übernimmt, verliert AU-4, die einzige Auflage mit
  Handlungspflicht**) · **die Kette Lizenz-Rohquelle → heypensio-Papier
  hat niemand geprüft** (alle Z-6-Aussagen ruhen darauf) · Rendering
  der verschachtelten Nachtrags-Kästen ungeprüft · **MKT-FUND-Posten
  aus der Pflege** (melevo 10 €: laufend oder einmalig? · acht
  unausgewertete melevo-Abzüge im R11-A-Ordner · Straiv-Preishöhen
  unbelegt — s. Projektquelle § 2 FUND3 R14-Stand) · **§ 3a-UWG-
  Streitstand** (UGPRL-Grenze B2B + Kostenfolge) gehört in denselben
  anwaltlichen Rat wie O-9/A7 · **O-11** (Lizenzserver-Ping, § 5
  geparkt) ebenfalls · Modell-Statuszeilen R14-A/R14-B (je Opus 5 1M).

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
   ~~User-Handgriff E-1…E-8 beantworten~~ ✅ **ENTSCHIEDEN 13.08.
   (Briefing-Dialog) und in R12 eingearbeitet.**
   ~~AA-1…AA-8 + S4-Klärfrage~~ ✅ **ENTSCHIEDEN 13.08. nachmittags
   (Nachtrag 4) und in R13 eingearbeitet — offen nur AA-4** ·
   ~~sieben Bau-Pflichten~~ ✅ **ins Regelwerk eingearbeitet (R13-B —
   als SOLL; der BAU der Werkzeuge [Sperrdatei, Beileger,
   Wellenprotokoll] steht aus und sperrt weiter den ersten
   Datensatz)** · O-9 seit R13 GEFÜHRT, Rechtsprüfung offen.
   ~~Z-6-Lizenzvorbehalt~~ ✅ **AUFGELÖST 13.08. spätabends (R14,
   „A3 trägt") — aber nur die Lizenzfrage; K-1, K04/Z-5 und der
   Architektur-Entscheid bleiben offen, und die Belegstufe ist A + B
   (Auslegung E).** Spitzenposten jetzt: **AA-4
   (User → Kayhan) + AA-3-/AA-8-Randfragen** · **F-III-Höhe
   entscheidet der User nach E-6** (Zulieferung heypensio,
   Kalendertermin nachhalten — trägt auch den AA-7-Prüfposten) ·
   **EIN anwaltlicher Rat mit VIER Fragen: O-9 · A7-Kernsatz-Neufassung
   · Streitstand § 3a UWG (UGPRL-Grenze B2B + Kostenfolge § 13 Abs. 4
   Nr. 2) · O-11 (Lizenzserver-Ping im A3-Modell)** — die ersten drei
   vor dem ersten Datensatz; die § 3a-UWG-Schiene aus R14-B verschärft
   das Bild, sie entlastet nicht · **K-1 vor dem ersten
   A3-Kundenangebot** · Kanalmix-Festzurrung erst nach FUND2-Persona-
   Befund. Details: Projektquelle § 7 Punkt 0 + R14-Changelog.
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
4. **R7-Kandidaten:** (a) ~~⭐ **Nacharbeit der 24 offenen
   R05-A-Prüferbefunde** — zuerst die zitatkritischen
   (W-16/H-3/H-4/H-10)~~ ✅ **ERLEDIGT in R07-A (10.08.2026) — diese
   Zeile war seit vier Tagen falsch.** Der Träger
   `protokolle/R06-nacharbeit-R05A-befunde.md` weist aus: **24 von 26**
   handlungspflichtigen Posten repariert, **0** bewusst offen, **2** mit
   benanntem Träger (**W-17-Rest, V-1-Rest** — die stehen weiter offen,
   s. R7-Block oben). Auch der Nenner war falsch: nicht 37, sondern
   **31** handlungspflichtige Befunde (der Träger korrigiert das selbst,
   Summenprobe 4+17+10 = 31 ✔). Die vier zitatkritischen sind repariert,
   je mit sichtbarem Reparatur-Kasten.
   ⚠️ **Warum das hier steht statt still korrigiert zu werden:** Aus
   genau dieser Zeile hat die Bestands-Erhebung des Nacht-Briefings am
   13.08. einen kompletten Arbeitsstrang (R15-E) gebaut — auf erledigte
   Arbeit. Gefunden vom R15-Prüf-Subagenten (Befund F-1), von der
   Leitsession am Träger nachgemessen. Historische Changelog-Einträge
   mit derselben Zahl (`projektquelle-mkt.md` R6-Changelog) bleiben
   unverändert und tragen dort einen Vorwärtsverweis — sie waren zu
   ihrem Datum korrekt. (b) E-V4-Welle (nach den
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
