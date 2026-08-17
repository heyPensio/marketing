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
**17.08.2026 nachmittags (R16, Shanks + Ben Beckman + Codex + Lucky Roux
parallel — erste Runde nach drei arbeitsfreien Tagen)** — ⭐⭐ **Die
Rechtslage steht ehrlich im Bestand, das Anwalts-Briefing ist bis auf
fünf User-Entscheide versandfertig, der Zitat-Wächter ist aus dem
Dauer-Rot, und der Regelwerk-Wächter ist als Pflicht-Baustein scharf.**
🔴 Vor dem Start kippte der Prüf-Subagent **zwei Briefing-Prämissen** —
die ANL-3-Frage stand seit `ba5a059` als § 4a Kandidat A im Briefing
(Kürzel-Grep 0, Sache vorhanden), der Wächter-Selbstausschluss existierte
seit `3067361` (L-50: Kürzel ≠ Sache · Ausschnitt ≠ Datei · Fremdmeldung
≠ heutiger Stand).
**R16-A:** **6/6 Rechtsposten** in der Rechtsmatrix (A7-Kernsatz neu
gefasst, Doppelbegründung Rn. 136/137/147/148, Rn. 111 OLG-Gegenauffassung
[Original nicht beschafft], Rn. 115, Rn. 79 konditional, „kein
Mitbewerber" gestrichen), Rn.-87-Vermerk in Matrix + o8, Briefing
konsistent (ENTWURF); **Klartext-Entscheidungsvorlage** in
`protokolle/R16-A-abschluss.md`. Prüfer **18 = 2/7/9, 17 repariert + 1 →
Leitsession; 8 Nacharbeits-Fundorte offen.** 🔴 S-2/L-49: die zu
reparierende Klasse 90 Zeilen unter ihrer Reparatur erneut begangen —
bei 17/17 bestätigten Zitaten.
**R16-B (Codex, Abnahme `9538c3f`):** Wächter meldet nur noch NEUE
Verstöße; Altlast **863/863 + 43/43** als Baseline mit Nenner + SHA-256,
ZIEL 6→8, Selbsttest 4 Musterklassen beide Richtungen; O-12-Satz neu.
⚠️ Nach R16-A **51 NEU in der Rechtsmatrix** (Urteilszitate — Rohbeleg in
`sensibel/`, außerhalb des Pools) → R17-Posten, bis dahin berechtigt rot.
**R16-C:** Planungskonflikt 300er-Schwelle als Entscheidungsvorlage
Akquiseplan § 4.4 (**300 = eigene Setzung ohne Quellenbindung**; Entscheid
**E-A4**) · R14 per Postkorb nachgemeldet (Zentrale `7cf1761`) · **H-1 =
Di 22.09.2026** (User; Puffer zum Anker aufgebraucht).
**Leitsession:** Reserve-Namen in CLAUDE.md · Nachzug 8d80a64 → **7a0f76b**
(8 Deltas; **Regelwerk-Wächter Pflicht: Marken 80k/85k/90k, Selbsttests
9/9 + 9/9, Erstlauf 84.028 B**) · Sollmarke gesetzt · L-49/L-50 +
Sammelvermerk R16 · Blueprint-Rückfluss 5 Regeln. **User-Entscheide der
Runde:** Modell-Statuszeilen R3…R15 ENTFALLEN · fünf offene (s.
„Nächster Schritt" 0). *(Details: Projektquelle-Changelog R16, Tagesplan
17.08.)*

**Vorheriger Stand — 14.08.2026 nachts (R15, Shanks + FÜNF Arbeits-Sessions parallel —
Nacht-Slot)** — ⭐⭐ **Größte Runde des Projekts: 24 Commits, fünf
Stränge, drei schwere Funde, die je einen Bestandssatz gekippt haben.**
🔴 **Der teuerste Befund war der Rundenschnitt selbst:** Ein
Zuschnitt-Prüfer fand vor dem Start, dass **4 von 5 Strängen eine
widerlegte Prämisse trugen — jedes Mal eine VERNEINUNG** („nicht
eingearbeitet", „liegt nicht vor", „hat niemand geprüft", „kein Paket
führt"). Zwei Stränge wurden umgeschnitten, bevor eine Session lief.
Daraus die firmenweite Regel: *Ein Arbeitsvorrat ist eine Liste von
Verneinungen — der teuersten Aussagenklasse.*
**R15-A:** Anwalts-Briefing mit vier Fragen gebaut, jeder Rn.-Anker am
Rohbeleg belegt; **UWG-/UGPRL-Volltexte erstmals im Bestand** (die
Rechtsmatrix zitierte sie mit höchster Belegstufe, ohne dass ein
Volltext vorlag). Prüfer 22/22. 🔴 Schwerster Fund: **Rn. 111 enthält
die abweichende Auffassung des OLG Düsseldorf — des zuständigen
BERUFUNGSgerichts — und fehlte vollständig.**
**R15-B:** § 6a der Angebotsarchitektur — AU-1…AU-4 **4 von 4** geprüft,
AU-4-Nachweisform zurückgebaut, VK-O2 + Gate-Kette; 0 Löschungen gegen
den Rundenstart. Prüfer 18/18. Fund aus seinem „ungelesen"-Abschnitt:
**ein Auslegungsirrtum bei K-1 ist rückwirkend binnen 30 Tagen heilbar.**
**R15-C:** Zitat-Wächter **ZIEL 2→6, POOL 8→11**. **Bewertung der 806er
Fundmenge (Leitsession): NULL Widerlegungen** — alle 863 unbestätigten
Zitate sind „nicht im Pool" (Summenprobe ohne Rest). Der frühere grüne
Lauf war eine **Scheinentwarnung**.
**R15-D:** Lizenzkette erstmals selbst geprüft — **28/30 Texttreue**,
zwei Abweichungen durch ein **unmarkiert gekürztes L-1-Zitat**;
Semantik **9/13 bestätigt, 4/13 teilweise (sieben hohe Risiken)**. Die
Folgerung „trägt A3?" bewusst nicht getroffen. melevo 8/8: 10-€-Posten
**von der Quelle nicht bezeichnet**.
**R15-E:** Sperrdatei-Struktur + Wellenprotokoll-Vorlage gebaut, 7/7
Bau-Pflichten zugeordnet. Prüfer 23/23. 🔴 Schwerster Fund: **Die
Erstfassung hätte personenbezogene Daten unwiderruflich in die
Git-Historie geschrieben — die Versand-Gates hätten nicht gegriffen,
weil ein Sperrfall OHNE Versand entsteht.**
**Leitsession:** Vorlauf-Nachzug · **Transit-Verbot G5 vollzogen**
(CLAUDE.md-Historie ausgelagert, 136/136 Zeilen byte-gleich belegt) ·
Push-Freigabe für 15 Commits aus fünf Sessions · **6 Lehren → Blueprint**
(L-43…L-48), Stempel `8d80a64`, Wächter 12/0 · **Debrief-Gegenprobe fand
12 nicht disponierte Learnings + 31 ungeroutete Nebenbefunde** — alle
nachgetragen (Sammelvermerk R15 + Routing-Tabelle Projektquelle § 6a).
⚠️ Modell-Statuszeilen aller fünf Sessions unbestätigt (User-Handgriff).
*(Details: Projektquelle-Changelog R15.)*

*(Davor: R14 — Z-6 aufgelöst, Belegstufen-Hebung, § 3a-Befund;
rotiert 17.08.2026 (R16) → `STATUS-archiv.md`. Davor R13 — S4 + AA-1…AA-8 eingearbeitet, B-1…B-7 im Regelwerk,
O-9 geführt; rotiert 14.08.2026 (R15) → `STATUS-archiv.md`. Davor R12 — E-1…E-8 eingearbeitet, Preisliste + Angebotsarchitektur
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
- **R15 (14.08. nachts, Nacht-Slot, fünf Sessions parallel):** ✅
  **Anwalts-Briefing gebaut** (vier Fragen, jeder Rn.-Anker am Rohbeleg;
  UWG-/UGPRL-Volltexte erstmals im Bestand) · ✅ **§ 6a
  Angebotsarchitektur** (AU-1…AU-4 4/4, AU-4-Nachweisform, VK-O2,
  Gate-Kette GA-1…GA-4) · ✅ **Zitat-Wächter ZIEL 2→6 / POOL 8→11**
  (Bewertung: 0 Widerlegungen, 863 „nicht im Pool") · ✅
  **Lizenz-Belegkette selbst geprüft** (28/30 Texttreue, 9/13 Semantik)
  · ✅ **Sperrdatei-Struktur + Wellenprotokoll-Vorlage** (7/7
  Bau-Pflichten) · ✅ Prüfer 22+18+23 disponiert, dazu Zuschnitt-Prüfer
  (11 Befunde) und Debrief-Gegenprobe (12+31 Nachträge) · ✅ 6 Lehren →
  Blueprint (`8d80a64`), Transit-Verbot G5 vollzogen, Wächter 12/0.
  **Offen aus R15:** 🔴 **A7-Kernsatz + § 3a-Doppelbegründung + Rn. 111
  (OLG-Gegenauffassung) + Rn. 115** — alle vier an MKT-HANDEL, s.
  Routing-Tabelle Projektquelle § 6a · 🔴 **R15E-N-5
  Planungskonflikt:** die 300er-Schwelle kollidiert mit ≈ 337–1.600
  Briefen je Abschluss — **jede realistische Welle löst den
  Neu-Führungs-Trigger aus** · ~~🔴 **R15E-N-4 ANL-3-Rechtsfrage fehlt im
  Anwalts-Briefing** (vor Versand nachtragen)~~ ✅ **R16: war seit `ba5a059` als § 4a Kandidat A enthalten — offen ist nur der Entscheid „mitgeben?"** · **R15A-N-4:** die
  tragende Rn.-87-Verschärfung steht in einer Literatur-Abwehr — die
  gesamte Terminlage F-7/O-9/Bau-Pflichten ruht darauf · **Postkorb an heypensio ist ANGEKOMMEN** (`626bff0` veroeffentlicht,
  von der Zentrale eingearbeitet und an Ruffy weitergeleitet — die
  Klassifikator-Blockade bei R15-D war zeitpunktgebunden, L-05 achter
  Beleg; Stand gemessen 14.08. 03:25 per `branch -r --contains` nach
  frischem fetch) ·
  ~~**Zitat-Wächter dauerhaft rot** (863 „nicht im Pool" — Pool erweitern
  oder Modus-Trennung)~~ ✅ **R16-B Modus-Trennung** · Beileger-Text weiter gesperrt (Firmierung +
  O-9) · **Verdichtungs-Posten CLAUDE.md** (+5.642 B netto über die
  Runde trotz −6.343 Auslagerung; Sollmarke vorschlagen) ·
  ~~Modell-Statuszeilen aller fünf R15-Sessions~~ ENTFALLEN (User 17.08.).
- **R16 (17.08. nachmittags, drei Sessions parallel, erste Runde
  nach drei arbeitsfreien Tagen):** ✅ **Rechtsposten 6/6 in der
  Rechtsmatrix** (A7 neu, Doppelbegründung, Rn. 111/115, Rn. 79, „kein
  Mitbewerber" gestrichen; Rn.-87-Vermerk Matrix + o8) · ✅
  **Anwalts-Briefing konsistent + Klartext-Entscheidungsvorlage** (§ 4a
  Kandidat A = ANL-3 war schon enthalten) · ✅ **Zitat-Wächter
  Modus-Trennung** (Baseline 863 + 43 mit Nenner/SHA, ZIEL 8/8,
  Selbsttest beide Richtungen; O-12-Satz neu) · ✅ **Akquiseplan § 4.4
  Entscheidungsvorlage 300er-Schwelle** (E-A4) · ✅ R14-Postkorb
  (`7cf1761`) · ✅ **H-1 = 22.09.** · ✅ Prüfer 18/18 disponiert (2
  schwere repariert) + Prüf-Subagent 2 Prämissen gekippt · ✅ Nachzug →
  `7a0f76b`, **Regelwerk-Wächter Pflicht aktiv (80k/85k/90k)**, L-49/L-50,
  Blueprint-Rückfluss `7a0f76b`, Wächter 12/0.
  **Offen aus R16:** 🔴 **fünf User-Entscheide vor dem Versand** (Satz ·
  Kanzlei · Absender ohne Namen · § 4a A/B · E-A4) · 🔴 **Wächter 51 NEU
  in der Rechtsmatrix** (Pool um lokale Rohbelege + Ausnahmeliste
  R16A-N-5, R17) · **20 weitere ZIEL-Kandidaten mit 718 Zitaten** außerhalb
  des Wächters (Codex-Bericht Rohausgabe E; u. a. Anwalts-Briefing 114,
  Preismodell 139) — „ZIEL 8/8" gilt für acht Dateien, nicht den Bestand
  (R17) · **MKT-HANDEL R17:** Rn.-87-Vermerk in Regelwerk § 7.1
  + `preismodell-optionen.md`, o8 § 6.2/§ 11.2 gegen Doppelbegründung,
  12 nie angekommene Rn. 121–155, OLG-Beschluss 20 W 37/24 beschaffen,
  8 Prüfer-Nacharbeits-Fundorte · **AKQ:** § 3.2 „Liste sofort baubar"
  gekippt seit R9 (R16C-N-1), § 4.3-Textbruch (N-2), H-2-Frist verstrichen
  (N-3), „genau 300" (N-4) · Kanzleiname im Repo nur DEHOGA-Hamburg-Berater
  (R16A-N-2) · CLAUDE.md 84.713 B über Soll (Verdichtung, frische Session)
  · Rohbeleg-Ordner `rohbelege-R16-A`: keiner angelegt (Zitate aus
  R09-A/R15-A-Ordnern).

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
   ~~**EIN anwaltlicher Rat mit VIER Fragen**~~ ✅ **GEBAUT in R15-A
   (14.08.):** `handel/anwalts-briefing-2026-08.md` — O-9 ·
   A7-Kernsatz-Neufassung · Streitstand § 3a UWG (UGPRL-Grenze B2B +
   Kostenfolge § 13 Abs. 4 Nr. 2) · O-11, je mit Sachverhalt,
   Fragestellung, Quellenlage, **Gegenansicht** und Alternativen.
   ⚠️ **VOR dem Versand fehlen noch drei Schritte, alle beim User:**
   (a) **R15E-N-4 nachtragen** — darf ein im FREMDEN Impressum
   vorgefundener Werbewiderspruch in einen eigenen Sperrbestand? (die
   Frage entstand parallel in R15-E und ist im Briefing nicht enthalten);
   (b) **Entscheid, ob der Satz „wir tragen das Impressums-Risiko
   bewusst gegen die eigene Empfehlung" an einen noch nicht mandatierten
   Anwalt geht** (drei Optionen + Empfehlung im Statusblock des
   Dokuments); (c) **Empfänger wählen + Firmierung** (Platzhalter mit
   Gate-Vermerk, F-7 offen).
   **NEU aus R15-A, verschärft die Lage:** **Rn. 111 enthält die
   abweichende Auffassung des OLG Düsseldorf** — des zuständigen
   Berufungsgerichts —, die § 3a-Schiene ist eine **Doppelbegründung**
   (im Bestand steht nur die Hälfte), und **die tragende
   Rn.-87-Verschärfung steht in der Abwehr eines Literatureinwands**
   (R15A-N-4) — auf diesem einen Satz ruht die Fälligkeit „vor dem
   ersten Datensatz" und damit die gesamte Terminlage. · **K-1 vor dem
   ersten A3-Kundenangebot** (⭐ R15-B fand: ein Auslegungsirrtum ist
   nach der Termination-Klausel **rückwirkend binnen 30 Tagen heilbar** —
   mildert das Gate, hebt es nicht auf) · Kanalmix-Festzurrung erst nach
   FUND2-Persona-Befund. Details: Projektquelle § 6a (Routing-Tabelle) +
   § 7 Punkt 0 + R15-Changelog.
   ⭐ **R16 (17.08.): Rechtsposten im Bestand, Briefing versandfertig
   bis auf FÜNF User-Entscheide in Klartext** (`protokolle/R16-A-abschluss.md`
   Ende): (1) selbstkritischer Satz an den nicht mandatierten Anwalt —
   Empfehlung ja, mit Vorbehalt · (2) Kanzlei — keine im Repo außer dem
   DEHOGA-Hamburg-Berater (Konflikt möglich); Kriterienliste liegt bei ·
   (3) Absender ohne neuen Namen — Empfehlung „in Gründung, Name folgt",
   Mandatsfähigkeit ungeprüft · (4) § 4a Kandidaten A/B mitgeben? · (5)
   **E-A4** 300er-Schwelle (Akquiseplan § 4.4; Empfehlung: „neu führen"
   definieren, dann Option B). Danach Versand durch den User. ~~R15E-N-4
   nachtragen~~ ✅ war enthalten (§ 4a Kandidat A).
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
3. **User-Handgriffe (Messplan-Kette):** ~~H-1 Livegang-Tagesdatum (bis
   16.08.)~~ ✅ **22.09.2026 (User 17.08.)** · **H-2 (Plan-Freigabe)
   trägt dieselbe verstrichene Frist — neuer Anker fehlt** · Anfrage-Entwürfe DEHOGA/IHK versenden (werktags, vorher
   IHK-Zuständigkeit klären) · **A5-Probedruck der Vorlagen**
   („tatsächliche Größe") · Betreiber-Briefing bis 23.08., **gekoppelt
   mit dem FUND2-Kayhan-Gespräch** · H-4 Altdaten-Sicherung anstoßen
   (bis 07.09.). ~~Modell-Statuszeilen R3-A/B/D + R04-A bestätigen~~ **ENTFALLEN — alle Statuszeilen-Handgriffe R3…R15 endgültig nicht erhebbar (User-Entscheid 17.08.).**
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
