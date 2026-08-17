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
**17.08.2026 abends (R17, Shanks + Ben Beckman + Codex + Lucky Roux
parallel — Folgerunde nach `/clear`)** — ⭐⭐ **Die Gegenauffassung des
Berufungsgerichts liegt im Original vor, das Urteil ist vollständig
ausgewertet, der Zitat-Wächter deckt 27 Dateien mit lokalem Rohbeleg-Pool,
und die CLAUDE.md ist unter der Sollmarke.**
🔴 Prüf-Subagent kippte **3 von 18** Verneinungen (Preismodell trug den
O-2-Superlativ NIE — R15B-N-4 halb unbelegt; Rn. 237 war vom R15-A-Prüfer
geprüft; „119" schon korrigiert).
**R17-A:** **OLG Düsseldorf 20 W 37/24 im Volltext** — Ordnungsmittel-
verfahren, „abweichende Auffassung" = „Im Übrigen"-Nebensatz zur
Irreführung, **kein Wort Datenschutz**, Rechtsbeschwerde nicht zugelassen
(Rn. 27) · **EuGH C-621/22 DE-Volltext** (nur `curl -L` fehlte — vier
Runden als „nicht abrufbar" geführt) · **14 statt 12 Rn.** nachgeholt
(77/77), Rn. 156–273 tabelliert, dritte Angriffsschiene als neue
Briefing-Frage · Ableitungen nachgezogen · Prüfer **19 = 1/8/10, 18
repariert + 1 → N-7** · 46/46 Zitate mechanisch bestätigt. 🔴 Eigener
Superlativ in drei Dokumenten selbst gefunden — der Prüfer fand die
**Folgefrage** (L-51). Push 3× vom Klassifikator blockiert, gemeldet;
Leitsession-Push durch (L-05, 10. Beleg).
**R17-B (Codex, Abnahme `8e0c551`):** 12 EIGEN · **lokaler Rohbeleg-Pool**
(„nicht prüfbar"-Modus ohne `sensibel/`) · **ZIEL 8 → 27** (Baseline
447/447) · Prüfstand `926ca3c`: **0 NEU 27/27**, Rechtsmatrix 51 → 12 +
31 + 8; Altlast 863: 346 Rohbeleg-bestätigt. Live nach A/C: **36 NEU**
(Selbstzitate, OLG-Zitate, `> >`-Normalisierung) → R18.
**R17-C:** Akquiseplan § 3.2 ÜBERHOLT + 9-Punkte-Positivliste, § 3
Terminlogik 12 Aussagen, § 4.3 (Prompt-Reparaturweg widerlegt per
`git show d11535f:`) · Regelwerk § 6.1 3/3 + Pflicht 4 · **H-2
entflochten: 2 erledigt, Teil 3 (Zielstichprobe) = User** · Gegenleser
15 → 14 + 1; 🔴 unbequeme Rn.-86-Hälfte trotz „Vorbehalt zuerst"
weggelassen (L-49, 3. Beleg).
**Leitsession:** **CLAUDE.md 84.713 → 79.935 B** (Verdichtung mit
Gegenprobe: 8/140 Aussagen gefallen — 5 Vorbehalte, 1 abgeleitete Zahl —
alle repariert) · Postkorb Zentrale `f58f1c0` (Kopien-Wächter misst
Ordner-Bausteine nicht) · O-12 § 10 + Pipe-Fix § 4.4 · **L-51 + L-07/
L-15/L-48 geschärft**, Sammelvermerk R17 (69 Posten), Blueprint
`35fd61b`, Wächter 12/0. **Beim User offen: fünf R16-Entscheide + zwei
R17-C-Fragen** (Zielstichprobe ≥ 30 · H-2-Anker). *(Details:
Projektquelle-Changelog R17, Tagesplan 17.08. Block 3.)*

**Vorheriger Stand — 17.08.2026 nachmittags (R16, Shanks + Ben Beckman + Codex + Lucky Roux
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

*(Davor: R15 — Anwalts-Briefing, § 6a Angebotsarchitektur, Wächter
ZIEL 2→6, Lizenzkette, Sperrdatei; rotiert 17.08.2026 (R17) →
`STATUS-archiv.md`. Davor R14 — Z-6 aufgelöst, Belegstufen-Hebung, § 3a-Befund;
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
- **R17 (17.08. abends, drei Sessions parallel, Folgerunde):** ✅ **OLG
  20 W 37/24 + EuGH C-621/22 DE beschafft**, 14 Rn. + Rn. 156–273
  ausgewertet, Ableitungen (o8, Preismodell, AA) nachgezogen, Prüfer
  19/19 disponiert · ✅ **Zitat-Wächter Ausbaustufe 3** (EIGEN 12,
  Rohbeleg-Pool lokal, ZIEL 27, 0 NEU am Prüfstand) · ✅ **Akquiseplan
  § 3.2/§ 4.3, Regelwerk § 6.1/Pflicht 4, H-2 entflochten** · ✅
  **CLAUDE.md unter Sollmarke** (79.935 B) · ✅ L-51 + 3 Schärfungen,
  Blueprint `35fd61b`. **Offen aus R17:** 🔴 **fünf R16-Entscheide +
  zwei R17-C-Fragen beim User** (Zielstichprobe ≥ 30 Check-ins je
  Hotel · neuer H-2-Anker) · **R18 HANDEL:** OLG-Parallelverfahren
  I-20 U 107/23 + 117/23 (Briefing fragt die Kanzlei) · Klauselblock
  Rn.-weise · Rn. 187/188 + 220 in die Rechtsmatrix (R17A-N-2/N-3) · o8
  § 5.4 ↔ § 10 B-6 (R17C-N-1) · **R18 Wächter:** 36 NEU (Selbstzitate,
  OLG-Zitate, acht EIGEN-Kandidaten R17A-N-5, `> >`-Normalisierung) ·
  **R18 AKQ:** fünf Ein-Gate-Stellen § 6/§ 7/§ 8 · Sperrdatei SP-01/SP-09
  (R17A-N-7) · Relativzeiten § 3.1 · Soft-Hyphen § 5 · **Leitsession
  R18:** `.gitattributes` statt `core.autocrlf` (R17A-N-1) · Kurz-IDs
  H-2 dreifach + R15B-N-5/N-6 · Rohbeleg-Ordner `rohbelege-R17-A/`
  angelegt (OLG, EuGH-DE, Quellenliste).

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
   ⭐ **R17 (17.08. abends): Die Gegenauffassung des Berufungsgerichts
   (OLG 20 W 37/24) ist im Original gelesen — sie betrifft die
   IRREFÜHRUNG, nicht den Datenschutzgrund unseres Risikos; das Briefing
   trägt jetzt eine dritte Frage (§ 3 Abs. 2 UWG) und bittet die Kanzlei
   um die zwei OLG-Parallelverfahren.** Die fünf Entscheide (1)–(5)
   unten bleiben der Versand-Schlüssel; dazu **zwei neue User-Fragen aus
   R17-C** (Messplan H-2 Teil 3: Zielstichprobe ≥ 30 Check-ins je Hotel
   bestätigen? · neuer Anker statt 16.08.). Zitat-Wächter: 27 Dateien,
   36 NEU aus der R17-Arbeit → R18.
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
1. **⚠️ TERMINKRITISCH (Zentrale, User-Handgriff ~~Mo 10.08.~~ → User-Zusage
   Di 18.08.; Punkt 0 „~KW 34/35" ist derselbe Vorgang, kein zweiter
   Termin — Klarstellung R17):** StB-Anruf —
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
   16.08.)~~ ✅ **22.09.2026 (User 17.08.)** · ~~**H-2 (Plan-Freigabe)
   trägt dieselbe verstrichene Frist — neuer Anker fehlt**~~ **R17-C:
   Freigabe + BM-4/BM-5 seit 09.08. erledigt; offen nur Teil 3
   (Zielstichprobe) — User-Frage + neuer Anker** · Anfrage-Entwürfe DEHOGA/IHK versenden (werktags, vorher
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
