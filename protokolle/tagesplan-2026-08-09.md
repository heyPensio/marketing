# Tagesplan Marketing — Sonntag, 09.08.2026

> Träger des MKT-Tagesrahmens (überlebt Kompaktierung; Übergabedokument
> zwischen Leitsessions). Leitsession: **Shanks** (Head of Marketing).
> Firmen-Tagesrahmen: `zentrale\briefings\briefing-2026-08-09.md`,
> Abschnitt „Tagesentscheid".

## Rahmen

| Block | Zeit | Inhalt | Detailgrad |
|---|---|---|---|
| ① Zentrale | ab ~13:00 | Postkorb + STATUS-Korrektur (**bereits gelaufen** — Postkorb leer, StB-Fragenliste angelegt; Quelle: Briefing) | erledigt |
| ② heyPensio | Hauptblock | Ruffy: R32-Start (Oguz-Stufenplan v2 + Onboarding-Nachzug) | fremder Block |
| ③ **Marketing** | **fester Block nach ②**, Startzeit offen | Shanks: R1 — MKT-FUND-Kickoff + masunt-Erfassung (Schnitt unten) | **scharf** |

Quelle Rahmen: User-Zuruf beim Session-Start 09.08. + Tagesentscheid im
Firmen-Briefing (Fokuszeit 13:00–23:45; Marketing FESTER Block, nicht nur
bei Restkontingent). Arbeitsende entscheidet der User laufend — Block
offen halten, am Blockende fragen.

**Engpass-Satz Erreichbarkeit:** Sonntag — Anbieter/Behörden nicht
erreichbar; alle R1-Stränge sind reine Repo-/Bestandsarbeit, kein
Außenkontakt nötig. Ausnahme Gmail-LESEN (masunt-Faden): jederzeit
möglich, es wird nichts beantwortet.

## User-Handgriffe (MKT)

- [ ] Wochen-Kontingent ablesen und Stand durchgeben (Sessions können das
      nicht selbst erheben).
- [ ] Bei Start der Arbeits-Session: `/model` gemäß Start-Prompt wählen
      (die Prompt-Zeile allein steuert nichts).
- [ ] Rundenschnitt R1 bestätigen (oder ändern).
- [x] **Git-Remote angelegt** ✅ (09.08., User-Handgriffe): Entscheid „wie
      im Pilotprojekt" → privates GitHub-Repo `heyPensio/marketing`;
      `origin` gesetzt, `main` gepusht mit Tracking (Beleg: Push-Ausgabe
      „[new branch] main -> main" in der Session). Vorgeschichte: der
      Sicherheits-Klassifikator blockierte Remote-/Push-Kommandos der
      Session (Betriebszustand, nicht umgangen) — daher User-Handgriffe.
      **Nebenbefund im selben Zug erledigt:** auch `zentrale` hatte kein
      Remote → per User-Handgriff auf privates `heyPensio/zentrale`
      gepusht (09.08., Beleg: Push-Ausgabe in der Session). Kein
      Postkorb-Posten mehr nötig; die nächste Zentrale-Session sieht das
      Tracking selbst.

## Strang-Tabelle R1 (bestätigt durch User 09.08.; Stand-Vermerke kursiv)

| Session | Rolle | Strang/Aufgabe | Modell | Exklusive Systeme | Scope |
|---|---|---|---|---|---|
| Leitsession (Buchstabe frei gelassen) | Shanks | masunt-Referenz-/Listungszusage (Schacht, 07.08.) erfassen; Review + Debrief R1 | Fable 5 | Gmail (lesend) | `referenzen-zusagen.md` (neu) · Wahrheits-Kanal am Rundenende |
| R01-A | Ben Beckman | MKT-FUND-Kickoff: FUND1-Entwurf + FUND2-Validierungsplan aus den drei Extraktionsberichten | Fable 5 | keine | `fund/` (neu) + `protokolle/R01-A-*.md` |

*Stand-Vermerke:* Leitsession-Strang **erledigt** (Register
`referenzen-zusagen.md` angelegt, Commit `f2fcada`, gepusht; offene
Reste: Logo-Anhang-Archivierung = User-Handgriff, Gegenfrage Schacht =
Produkt-Zuständigkeit). R01-A **gestartet** (User-Meldung 09.08.,
Prompt übergeben) — gilt als LAUFEND bis Abschlussmeldung; Leitsession
fasst `fund/` und `protokolle/R01-A-*` bis dahin nicht an. Danach:
Review in beide Richtungen (Regel 8) + gebündelter `/debrief`.

**Review-Regime (Kritikalitäts-Staffel):** MKT-FUND-Entwurf = Grundlage
außenwirksamer Texte → **Voll-Review** durch unabhängigen Prüfer mit
frischem Kontext (im Start-Prompt verankert). masunt-Erfassung = klein,
aber zitatkritisch (Original-Wortlaut-Pflicht) → Kurzraster + Gegenlesen
Zitat ↔ Gesendet-/Empfangen-Original.

## Zustand bei Tagesbeginn

- Arbeitsbaum sauber; letzter Commit `d8cf4b6` (Stempel auf `64a1c20`).
- Gerüst-Stempel = Blueprint-HEAD → **aktuell**; Kopie-Drift-Prüfung:
  SYNCHRON (9 Kopien, 09.08. ~12:05).
- ⚠️ **Kein Git-Remote konfiguriert** — `git pull`/`push` nicht möglich;
  User-Klärung angefragt (s. Handgriffe).
- Keine ungereviewten Arbeits-Session-Commits, keine ausstehenden
  Abschlussmeldungen, kein offener Debrief (noch keine Runde gelaufen).

## Eingänge (aus Firmen-Briefing 09.08. übernommen — keine zweite Volldurchsicht)

- ⭐ **masunt (Schacht) 07.08., 2 Mails:** Listungs-/Referenz-Zusage
  („Sie dürfen uns gerne listen") + Anhang; offene Gegenfrage Schachts
  (welches System setzt der Kunde ein) — Beantwortung liegt bei
  Produkt/heyPensio, NICHT bei MKT. Erfassung: Faden per `get_thread`
  voll nachladen, Zusage im ORIGINALWORTLAUT, Anhang-Status getrennt
  ausweisen (Wert belastbar ≠ Datei-Beleg vorhanden).
- Search-Console-Meldungen (noindex hey-pensio.de): Produkt-Posten,
  MKT-WEB nur informativ — kein R1-Posten.
- Sonst keine MKT-Eingänge (Briefing-Triage: „Marketing: keine direkten
  Eingänge").

## Terminposten (stehen lassen, bis erledigt)

- **MKT-BELEG-Baseline VOR PMS-Livegang (Ende September) — nicht
  nachholbar.** R1 enthält den Baseline-Messplan noch nicht → spätestens
  R2-Kandidat.
- **Everlast 18.09.:** Marken-Assets vor/außerhalb der Zusammenarbeit
  sichern (MKT-MARKE-Anker, §11-Warnung in `zentrale\namensentscheid.md`).
- **MKT-MARKE wartet auf StB-Ergebnis** (GbR-Namensführung, Träger
  `zentrale\stb-termin-fragenliste-2026-08.md`; StB-Anruf = User-Handgriff
  Mo 10.08., Zentrale). FUND/BELEG hängen NICHT daran.

## Wochen-Kontingent

Stand laut User-Ablesung (`/usage`-Screenshot, 09.08. ~12:46):
- **Woche gesamt (alle Modelle): 29 % verbraucht** · Reset Fr 14.08.,
  06:59 (Europe/Berlin).
- **Woche Fable: 41 % verbraucht** · Reset ebenfalls Fr 14.08., 06:59.
- Laufende Session: 17 % (Reset 16:39 — Session-, nicht Wochenwert).
- Aktionshinweis der Anzeige: **+50 % Wochenlimit-Promo bis 19.08.**
- Treiber laut Anzeige (unabhängige Merkmale, keine Aufschlüsselung):
  83 % der Nutzung bei >150k Kontext, 72 % aus subagent-lastigen
  Sessions.

Einschätzung Leitsession: Bei 41 % Fable-Verbrauch und Reset am
Freitagmorgen ist der heutige MKT-Block (1 Arbeits-Session + Review +
Debrief) unkritisch; kein Grund, R1 zu stauchen. Die Anzeige misst nur
DIESE Maschine — Verbräuche anderer Geräte/claude.ai kämen obendrauf.

## Fortschreibung: R2 (13:47, User-bestätigt)

**R1 geschlossen:** Abschlussmeldung R01-A · Review beide Richtungen ·
Debrief `b9a8806` · Gerüst-Nachzug `897292e` · danach **E10: FUND1
VERABSCHIEDET** (`41dec74`). Kurzcheck: Sonntag, nur Innen-Stränge;
Kontingent-Ablesung 12:46 (29 %/41 % Fable) — kein neuer Stand
durchgegeben; außerhalb nichts passiert (User-Zuruf).

| Session | Rolle | Aufgabe | Modell | Exklusiv | Scope |
|---|---|---|---|---|---|
| R02-A | Yasopp | BELEG1-Baseline-Messplan (Ist-Stand geprüft: existiert nirgends, auch nicht im heypensio-Repo — nur Methodik-Baselines) | Fable 5 | keine | `beleg/` (neu) + `protokolle/R02-A-*.md` |
| R02-B | Lucky Roux | FUND2-Erhebung Strang 2: öffentliche Struktur-/Nachfolgedaten; Anfrage-ENTWÜRFE als Dateien, KEIN Versand | Fable 5 | keine (Web lesend) | `fund/erhebung/` (neu) + `protokolle/R02-B-*.md` |

**FUND2-Vorlage-Punkte (Plan § 7) — Leitsession-Entscheid 13:47:**
Zuteilung nur Strang 2 (öffentlich/warm, Rechtsmatrix nicht nötig) ·
Kayhan-Gespräch = User-Handgriff (Terminierung offen) · Apaleo-Frage
wartet auf Faden-Stand-Prüfung (heypensio) · Kaltkontakte gesperrt bis
HANDEL-Rechtsmatrix.

**PROGNOSE spätere Blöcke:** MARKE1-Vorbereitung (Kriterienkatalog +
Recherche-Verfahren; Pflicht-Input `zentrale\namensentscheid.md`,
Everlast-§11-Anker 18.09.) — bewusst nicht dritter Parallel-Strang
(Kontingent-Schonung bei 41 % Fable-Woche).

## Übergabe-Block (gefüllt vor Leitsession-Neustart für R3, ~15:15)

**Session-Stand:** R1 und R2 vollständig geschlossen (Reviews beide
Richtungen, Debriefs gefahren, alles gepusht — marketing bis `c3ea241`,
Gerüst bis `66fbf4f` = Stempel im CLAUDE.md-Kopf). Arbeitsbaum sauber.
FUND1 VERABSCHIEDET (E10) · BELEG1-Messplan FREIGEGEBEN (H-2, mit
Zwei-Schienen-Nachtrag + dokumentiertem Dissens Außen-Formulierung —
Entscheid bei BELEG4) · FUND2-Strang 2 erhoben, Anfrage-Entwürfe
versandbereit · masunt komplett (Register + Logo-Datei-Beleg).

**Grund des Neustarts:** Kontextlast + Regel-Snapshot (CLAUDE.md,
tagesstart und 3 Bausteine wurden in der alten Session editiert — der
Neustart lädt den neuen Stand).

**Block-Programm R3 (Kandidaten, PROGNOSE — Schnitt macht die neue
Leitsession per /runde):**
1. Erhebungsvorlagen-Session: A5-Tagesblätter + Interviewleitfaden mit
   Bandbreiten-Schätzfragen BM-1–BM-5 + E-1–E-5, Druck-PDF (bis 20.08.,
   VOR dem Betreiber-Briefing; Grundlage `beleg/baseline-messplan.md`
   inkl. Nachträge).
2. MARKE1-Vorbereitung: Kriterienkatalog + Markenrecherche-Verfahren
   (Pflicht-Input `zentrale\namensentscheid.md`; Everlast-§11-Anker
   18.09.; wartet NICHT auf StB).
3. FUND2-Fortsetzung: regionalstatistik.de (dritter Kanal
   Länder-Größenklassen).

**Offene User-Handgriffe (unverändert, Träger STATUS.md/Projektquelle
§ 7):** H-1 Livegang-Datum (16.08.) · Anfragen-Versand werktags (vorher
IHK-Zuständigkeit, P6) · Betreiber-Briefing bis 23.08. gekoppelt mit
Kayhan-Gespräch · H-4 Altdaten-Sicherung (07.09.) · StB-Anruf Mo 10.08.
(Zentrale).

**Debrief-Kandidaten offen:** keine — R2-Debrief inkl.
Gegenprobe-Nachfang ist durch.

**Kontingent-Stand bei Übergabe:** letzte Ablesung 12:46 (29 % gesamt /
41 % Fable); aktuellen Stand beim R3-Start neu ablesen.

## Fortschreibung: R3 (14:46, neue Leitsession Shanks)

**Kurzcheck:** Sonntag 14:46 — nur Innen-Stränge (alle R3-Stränge sind
Repo-/Web-Lesearbeit; Anfragen-Versand bleibt Werktags-Handgriff).
Debrief-Gate ✅ (R2 geschlossen lt. Übergabe-Block, Arbeitsbaum sauber,
nichts ungepusht). Gerüst-Stempel `66fbf4f` = Blueprint-HEAD ✅.
⚠️ **User-Zuruf „was ist außerhalb passiert?" nicht durchgegeben** —
Annahme „nichts Neues" ist UNBESTÄTIGT (nachholen).

**Kontingent (User-Ablesung ~14:50):** Woche gesamt 39 % · **Fable
59 %** (12:46→14:50: +18 Punkte) · Reset Fr 14.08. ~07:00 ·
Session-Fenster **66 %**, Reset 16:40 · Promo +50 % bis 19.08. Harte
Termine (16.08./20.08./23.08.) liegen alle NACH dem Reset.
Modellwahl-Konsequenz: 2× Fable + 2× Opus. ⚠️ Session-Deckel kann vor
16:40 greifen — Sessions pausieren dann und laufen nach Reset weiter.

**Schnitt (User-Entscheid ~14:55: Basis-Schnitt bestätigt + „gerne
noch ein - 2 weitere Runden aufsetzen" → 4 Stränge parallel):**

| Session | Rolle | Aufgabe | Modell | Exklusiv | Scope |
|---|---|---|---|---|---|
| R03-A | Ben Beckman | Erhebungsvorlagen: A5-Tagesblätter + Interviewleitfaden (BM-1–BM-5, E-1–E-5) + Druck-PDF | Fable 5 | keine | `beleg/vorlagen/` (neu) + `protokolle/R03-A-*.md` |
| R03-B | Yasopp | FUND2: regionalstatistik.de als dritter Kanal Länder-Größenklassen | Opus 5 | Chrome-Automation | `fund/erhebung/regionalstatistik-groessenklassen.md` (neu) + Verweis-Nachtrag `strang2-strukturdaten.md` + `protokolle/R03-B-*.md` |
| R03-C | Lucky Roux | MARKE1-Vorbereitung: Kriterienkatalog + Markenrecherche-VERFAHREN (keine Namenskandidaten) | Fable 5 | keine | `marke/` (neu) + `protokolle/R03-C-*.md` |
| R03-D | Rockstar | FUND3: Wettbewerbsbild AKTUALISIEREN (Straiv + Segment größere Häuser) | Opus 5 | keine (Web lesend, KEIN Chrome) | `fund/wettbewerbsbild.md` (neu) + `protokolle/R03-D-*.md` |

**Ist-Stand-Prüfung (Leitsession + Prüf-Subagent über 3 Repos):**
⭐ **R03-A-Vorbestand gefunden:** `heypensio\blueprint\onboarding\`
(onboarding-formular.md, evaluierungstermin-agenda.md,
lueckenanalyse-kundenaufnahme.md — kundenneutral/wiederverwendbar;
Fragensubstanz überschneidet E-1/E-3/E-4/BM-3) + bereits erhobener
Firzlaff-Datenpunkt (verifizierungsprotokoll-2026-06-ist.md:
„Rezeption ist bis 21 Uhr besetzt", 21.06.2026) → als Pflicht-Quellen
im Prompt verankert; neu sind nur Tagesblatt-Format + PDF-Werkzeug.
MARKE1 + regionalstatistik: vorbestandsfrei (Positivkontrollen
getroffen, Protokoll in der Subagent-Meldung der Leitsession). FUND3:
Vorbestand benannt (Extraktion B/F6.1 + A5, marktrecherche-apaleo-store,
positionierungspapier-Straiv-Abschnitt) → als AKTUALISIERUNG
formuliert.

**Review-Regime R3:** R03-A **Voll-Review** (außenwirksam — Betreiber
handeln auf den Vorlagen; unabhängiger Prüfer + Verfahrens-
Positivkontrolle, im Prompt verankert) · R03-B Kurzraster, begründet:
Summenproben-Pflicht ist der harte Anker im Dokument selbst · R03-C
Kurzraster + Gegenfrage-Prüfer mit benannten Kategorien (im Prompt) ·
R03-D Kurzraster + getrennte Fundstellen-Nachprüfung (im Prompt);
positionierungspapier ist NICHT im Scope (verabschiedet, Abweichungen
nur als Befund).

**PROGNOSE spätere Blöcke:** Blueprint-Arbeitsauftrag (Bausteine
`aussenkorrespondenz` + `freigabe-vorlagen` aus firzlaff-Skills,
D1/D3–D7, E1–E3) — braucht Leitsession-Nähe (Skill-/Baustein-Kanal) ·
Domain-Inventur (nur MIT User am Dashboard) · R03-Reviews + Debrief.

**R3 GESCHLOSSEN (Debrief ~16:2x):** Alle vier Abschlussmeldungen da,
Reviews beide Richtungen gefahren (A Voll-Review-Stichprobe ✅ · B/C/D
Kurzraster ✅; Scope-Treue aller 9 Session-Commits per `git show --stat`
belegt), Debrief mit Rückfluss gelaufen (L-09/L-10, Sammelvermerk R3,
5 CLAUDE-Schärfungen, SPA-Regel ersetzt; Gerüst `2c52f99` + Stempel
`2834792` inkl. heyPensio-R32-Nachzug; Postkorb StB `db81284`).
Kontingent-Befund während R3: Session-Fenster-Deckel griff, Reset kam
(User-Zuruf ~16:1x). Offen an den User: Portfolio-Zuschnitts-Klärung ·
MARKE1-Entscheidungspunkte · A5-Probedruck · Modell-Statuszeilen ·
Zuruf „außerhalb passiert?" (bis Rundenende unbeantwortet).
**Nächster Block: erst Kontext-Säuberung der Leitsession
(`/clear` bzw. Neustart, Regel 1a), dann `/runde` für R4.**

## Fortschreibung: R4 (~17:05, Leitsession Shanks nach /clear)

**Kurzcheck:** Sonntag 17:03 (Get-Date) — weiter nur Innen-Stränge.
Debrief-Gate ✅ (R3 geschlossen lt. Vermerk oben, `git pull` ohne Delta,
Arbeitsbaum sauber). Kontext-Säuberung ✅ (Regel 1a, /clear vor diesem
Block). ✅ **Zuruf „außerhalb passiert?" BEANTWORTET (User 17:05):
Nichts Neues** — der seit R3 offene Posten ist damit geschlossen.
**Kontingent:** keine frische Ablesung (User-Entscheid 17:05, „ohne
frische Ablesung planen") — Planung konservativ auf Basis der
14:50-Ablesung (39 % gesamt / 59 % Fable); Konsequenz: schlanke Runde,
keine parallelen Fable-Arbeits-Sessions vor den Entscheiden.

**Schnitt (User-Entscheid 17:05: „Durchsprachen zuerst"):** R4 beginnt
OHNE parallele Arbeits-Sessions. Die Leitsession führt die zwei
geführten Entscheidungs-Durchsprachen:
1. **(a) Portfolio-Zuschnitt** (Projektquelle § 7 Punkt 4a) — Angebot
   breiter als Positionierungspapier § 6? Entscheid: Papier nachziehen
   ODER bewusst eng bleiben. Entsperrt die FUND3-Beratungsachse.
2. **(b) MARKE1-Verabschiedung** — 10 Entscheidungspunkte
   (`marke/naming-kriterienkatalog.md` +
   `marke/markenrecherche-verfahren.md`). Entsperrt den Naming-Sprint.

**PROGNOSE nach den Entscheiden:** je Ausgang FUND3-Beratungsachse
und/oder Naming-Sprint als Arbeits-Session(en) schneiden (Ist-Stand-
Prüfung + Prompts dann per tagesstart Abschnitt 2); Blueprint-
Arbeitsauftrag bleibt Leitsession-Kandidat für später. Arbeitsende
entscheidet der User laufend.

**Durchsprachen-Ergebnis (~17:10–17:15, beide Entscheide gefallen):**
- **E11 — Portfolio-Zuschnitt: BREIT** (User ~17:10, Option „Breit:
  Papier nachziehen"). Folgen: Positionierungspapier-Nachtrag § 6 +
  neue Teilverabschiedung (E10 deckt das Delta nicht) ·
  FUND3-Beratungsachse P12/P13 entsperrt · Wettbewerbs-Rückprüfung
  (Brandnamic/Everlast/Smart Host: Wettbewerber UND Kanal) ·
  Kayhan-Beraterrolle fachlich dokumentieren. ⚠️ Für den
  Papier-Nachtrag fehlt SUBSTANZ (Beratungs-Leistungskatalog ist
  nirgends dokumentiert — R03-D N1) → Erhebung beim User nötig,
  BEVOR die Beratungsachse einen Vergleichsmaßstab hat.
- **E12 — MARKE1 VERABSCHIEDET** (User ~17:12–17:15, geführte
  Durchsprache in drei Teilen, alle 10 Punkte). 8× Vorschlag
  bestätigt; 2 Deltas: **E-K4** Zusatzsprachen TR/FR/ES/IT ·
  **E-K5** vorerst ganz ohne Anwalt (erst MARKE3; Grenzfälle
  blockieren als „nicht prüfbar" lt. K2). Nachtrags-Kästen in
  `marke/naming-kriterienkatalog.md` + `marke/markenrecherche-
  verfahren.md` (Originale unverändert). Delta-Paare geprüft
  (E11↔E-K5: Klasse-35-Merker für MARKE3; E11↔K5/W5: Name muss
  Beratungsbreite tragen; E-K4↔übrige: keine Wechselwirkung).
  → Naming-Sprint (Findung + Schreibtisch-K.-o.) ist ENTSPERRT.
- Einarbeitung Projektquelle/STATUS (E11/E12): beim R4-Debrief
  (Vier-Stellen-Sync), nicht vorgezogen.

**Arbeitsschnitt R4 (User-bestätigt ~17:20):**

| Session | Rolle | Aufgabe | Modell | Exklusiv | Scope |
|---|---|---|---|---|---|
| Leitsession (Buchstabe frei) | Shanks | Portfolio-Substanz-Erhebung beim User (E11-Papiernachtrag-Grundlage); Review + Debrief R4 | Fable 5 | keine | Tagesplan; Erhebungsergebnis → `fund/` beim Debrief-Zug |
| R04-A | Ben Beckman | MARKE1 Naming-Sprint Phase 1: Findung + Schreibtisch-K.-o. (K1, K4–K7) + Wertung → bewertete Shortlist; KEINE Live-Recherche (K2/K3/W7/W8 = zweite Welle, E-V4) | Fable 5 | keine (Web lesend NUR Sprach-/Bedeutungs-Checks K6/W3/W4) | `marke/naming-sprint-2026-08.md` (neu) + `protokolle/R04-A-*.md` |

**Ist-Stand-Prüfung R04-A (Leitsession selbst, 17:18):** Kein
Namenskandidaten-Vorbestand in marketing + zentrale (Grep
Namenskandidat/Namensidee/Arbeitstitel/Namensvorschlag; Positivkontrolle:
„Namenskandidat" trifft in beiden marke/-Dokumenten) — Findung startet
unkontaminiert. <3 Stränge → kein Prüf-Subagent nötig.

**Review-Regime R04-A:** Kurzraster + unabhängiger Prüfer mit
Gegenfrage-Achse (benannte Kategorien, im Prompt verankert) — begründet:
Die Shortlist ist noch nicht freigabetragend (Freigabe-Schwelle kommt
erst mit Live-Recherche-Welle + User-Entscheid MARKE2); Voll-Review mit
Verfahrens-Positivkontrolle folgt dort.

**PROGNOSE:** R5 (heute offen, sonst Montag): FUND3-Beratungsachse
(nach Portfolio-Erhebung) · E-V4-Live-Recherche-Session (nach
Shortlist) · Blueprint-Arbeitsauftrag.

**Portfolio-Erhebung, User-Zuruf (~17:25, wörtlich):** „1. Lass das
mal evaluieren was wir an Beratung anbieten. 2. er tritt im Namen der
Firma auf er ist für alles zuständig was nicht digitalisierung KI
oder Automations ist. 3. nein aber auch das ist mit dir zu
evaluieren" *(Fragen dazu: 1. Beratungsleistungen real/Ziel ·
2. Kayhan-Rolle · 3. bewusste Ausschlüsse.)* Konsequenzen:
- Evaluation delegiert an Leitsession: 2 Explore-Agenten gestartet
  (~17:26; heypensio · zentrale+marketing; offene Entdeckungsfrage,
  User-Stichworte aus R3 bewusst NICHT im Suchauftrag, je Agent eine
  Suchweg-Positivkontrolle). Synthese + Vorlage an User folgt.
- ⚠️ **Klärungspunkt Kayhan-Rolle:** User-Zuruf „tritt im Namen der
  Firma auf" + Allzuständigkeit nicht-digital STEHT GEGEN
  Projektquelle-Stand „externer Berater auf Rechnung" (dort nur unter
  Befangenheits-/Offenlegungsaspekt). Auflösung gehört in die
  Vorlage; Rollen-Zuschnitt ist zudem Firmen-Ebene →
  Postkorb-Kandidat (Rollen-Charta/Organigramm, ggf. StB-Frage
  Außenauftritt Externer). Nicht stillschweigend übernehmen.
  *Nachtrag ~17:45: teilaufgelöst — Charta-White-Label-Regel deckt
  den Außenauftritt (R04-Erhebung § 6); offen blieb nur die
  Allzuständigkeits-Formel → E13b.*

**E13 — Portfolio-Nachtrag-Entscheide (User ~17:50, drei Fragen,
alle drei GEGEN die Session-Empfehlung):**
- **E13a:** EIN Angebot (keine sichtbare Belegstufen-Trennung im
  Angebot; Reifegrad-Vermerke bleiben interne Doku-Pflicht).
- **E13b:** Kayhan-Zuschnitt PAUSCHAL „alles Nicht-Digitale" →
  Postkorb-Meldung `zentrale\eingang\2026-08-09-mkt-kayhan-
  rollenzuschnitt.md` (zentrale `401cf05`, gepusht).
- **E13c:** Agentur-Leistungen (Social/SEO/Ads/Bewertungen) als „im
  Aufbau" im Portfolio — ⚠️ ohne dokumentierten Träger/Substanz
  (Reifegrad-Vermerk im Papier).
- Umsetzung: Nachtrags-Kasten § 6 im Positionierungspapier (E10-Text
  unverändert; Formulierungs-Leitplanke gegen Präsens-Zusagen ohne
  Träger). Tragende Kernaussagen (E-T7-Wortlaut, Charta-White-Label)
  von der Leitsession an der Rohquelle nachgelesen; Rest der
  R04-Erhebung bleibt Agenten-Leseweg (Vermerk dort).
- Einarbeitung Projektquelle/STATUS (E13, FUND3-Entsperrung): beim
  R4-Debrief.

**R4 GESCHLOSSEN (Debrief 19:25):** Abschlussmeldung R04-A da
(`39d8511`), Scope-Treue aller 6 Session-Commits per
`git show --stat` belegt, Review beide Richtungen (nach innen: 3
Wichtig-Befunde nachweislich repariert, Zählwege stichproben-
verifiziert · nach außen: 4 Befunde mit Zielort — Wiktionary-Baustein,
L-05-Viertbeleg, E-V4-Prompt-Pflichten, Statuszeilen-Handgriff).
Debrief mit Rückfluss: Sammelvermerk R4 · 2 CLAUDE-Schärfungen
(Push-Sichtung eigener Befehl · Vergabelinien explizit) ·
Wiktionary-Case-Regel (Baustein) · Gerüst `54439b9` = neuer Stempel,
Kopien SYNCHRON (9/9) · Vier-Stellen-Sync + R2-Rotation.
Gegenprobe-Subagent: entfällt regelkonform (nur EINE Arbeits-Session
in R4; Pflicht gilt ab zwei). Offen an den User: Shortlist-Handgriffe
(Gesamtschau/Diktat/EN/4 Blockierte) · Statuszeilen R3-A/B/D + R04-A ·
StB-Doppelposten Mo. **Nächster Block: Kontext-Säuberung der
Leitsession, dann `/runde` für R5 — oder Feierabend (Tagesplan trägt
die Übergabe).**

## Fortschreibung: R5 (~19:40, Leitsession Shanks nach /clear)

**Kurzcheck:** Sonntag 19:33 (Get-Date) — weiter nur Innen-Stränge.
Debrief-Gate ✅ (R4 geschlossen lt. Vermerk oben, `774af0d`; `git pull`
ohne Delta, Arbeitsbaum sauber). Kontext-Säuberung ✅ (Regel 1a).
Gerüst-Stempel `54439b9` beim R4-Debrief frisch gesetzt (9/9 synchron)
— kein neuer Check. **User-Zuruf „außerhalb passiert?" (19:3x):
Nichts Neues** — Shortlist-Handgriffe weiter offen → E-V4-Welle bleibt
blockiert.

**Kontingent (User-Ablesung ~19:37, als BAND durchgegeben):** Fable
**70–85 %** verbraucht (keine Exaktwerte); Reset weiter Fr 14.08.
~07:00. Konsequenz: schlanke Runde bestätigt, Arbeits-Session auf
Opus, Debrief knapp, KEINE weitere Runde heute geplant.

**Schnitt (User-bestätigt ~19:38):**

| Session | Rolle | Aufgabe | Modell | Exklusiv | Scope |
|---|---|---|---|---|---|
| Leitsession (Buchstabe frei) | Shanks | Blueprint-Arbeitsauftrag: Bausteine `aussenkorrespondenz` + `freigabe-vorlagen` (Quelle R00-Lehren-Delta A-/B-Block); danach Review + Debrief R5 | Fable 5 | keine | projektgerüst `vorlage/bausteine/` + hiesige Aktivierung `.claude/rules/`; zentrale nur per Postkorb |
| R05-A | Ben Beckman | FUND3-Beratungsachse: Wettbewerbsbild-Erweiterung Beratungs-/Agentur-Segment (P12) + P13-Bestandsrückprüfung (heypensio-Alt-Einstufungen, Fall Brandnamic) + Rückprüfung Everlast/Smart Host („Wettbewerber UND Kanal") + Fundstellen-Nachprüfung der agentengelesenen R04-Erhebungs-Kernaussagen | Opus 5 | keine (Web lesend, KEIN Chrome) | `fund/wettbewerbsbild.md` (Erweiterung) + `protokolle/R05-A-*.md` |

**Ist-Stand-Prüfung (Leitsession selbst, 19:36; <3 Stränge → kein
Prüf-Subagent):** P12/P13 sind dokumentierter OFFENER Bestand
(`fund/wettbewerbsbild.md` Punkteliste + § 0.0-Geltungsgrenze;
Entsperrungs-Vermerk im Papier-Kasten § 6) — keine Vorerhebung
existiert; Positivkontrolle: Greps auf P12/P13 treffen in beiden
Dokumenten. Blueprint-Auftrag: Quelle
`protokolle/R00-extraktion-lehren-delta.md` (A-/B-Block) vorhanden;
Zielort `projektgeruest/vorlage/bausteine/` wird vor dem Bau auf
Vorbestand gleichen Namens geprüft.

**Review-Regime R05-A (begründet):** Kurzraster + getrennte
Fundstellen-Nachprüfung durch unabhängigen Prüfer (im Prompt
verankert; wie Schwester-Strang R03-D) — das Wettbewerbsbild ist
internes Lagebild, nicht freigabetragend; die außenwirksame
Weiterverwendung (Papier-Nachtrag) trägt ihre eigene Prüfstufe.
Leitsession-Strang (Bausteine): Review durch Kopie-Drift-Werkzeug +
Selbst-Gegenlesen gegen die Quell-Skills beim Debrief.

**PROGNOSE:** Nach R5-Debrief Feierabend. Montag-Kandidaten: StB-Anruf
(Zentrale, User-Handgriff) · E-V4-Welle nach Shortlist-Handgriffen ·
Anfragen-Versand DEHOGA/IHK (werktags) · FUND2-Rest.

**R5 GESCHLOSSEN (Debrief ~23:1x):** Abschlussmeldung R05-A da
(`4f947eb`), Scope-Treue aller 6 Session-Commits per `git show --stat`
belegt, Review beide Richtungen (nach innen: Stichproben L-B7/P12/P13/
B9.4 ✅, 4 Kritisch-Reparaturen nachvollzogen · nach außen: alle
Nebenbefunde mit Zielort, zwei sofort ausgeführt — BAFA-Postkorb
zentrale `4e2ba33` ⚠️ StB-Kandidat Mo + P20-Belegbasis gesichert
`sensibel\rohbelege-R05-A\` 2132/2132). Leitsession-Strang
Blueprint-Auftrag FERTIG (projektgerüst `cf5a2f1`+`bfc7da0`, marketing
`efceeaf`, Postkorb `59bdfc3`). Debrief mit Rückfluss: Sammelvermerk
R5 · 2 CLAUDE-Schärfungen (Extraktions-Positivkontrolle ·
Widerspruch-Auflösung) · Web-Such-Negative-Block + `-c`/`-o`-Falle
(Bausteine) · heyPensio-R33-Nachzug · Stempel `bfc7da0` ·
Vier-Stellen-Sync + R3-Rotation · Papier-§ 6-Nachtrag Onpage-SEO.
Gegenprobe-Subagent: entfällt regelkonform (EINE Arbeits-Session).
Offen an den User: BAFA-Entscheid vor dem StB-Anruf Mo ·
Shortlist-Handgriffe · Statuszeilen R3-A/B/D + R04-A + R05-A ·
Kontingent nur als Band 70–85 % erhoben. ~~Feierabend~~ **überholt
durch User-Zuruf ~23:15: noch KEIN Feierabend — R6 folgt.** Nächster
Schritt: Kontext-Säuberung der Leitsession (Regel 1a; zusätzlich
Snapshot-Grund: CLAUDE.md + 3 Bausteine in dieser Session editiert),
dann `/runde` für R6. R6-Kandidaten lt. STATUS Punkt 4: E-V4 (falls
Shortlist-Handgriffe noch heute) · P15 Brandnamic-Partnerkreis + P19
Hotelkooperationen (Web-Lesearbeit, sonntagstauglich) · FUND2-Apaleo-
Faden-Prüfung. Montag-Posten (StB/BAFA, IFB, Anfragen-Versand) bleiben
werktagsgebunden. Zentrale-Briefing Montag sichtet den Postkorb
(2 neue MKT-Meldungen).

## Fortschreibung: R6 (~00:05 Mo 10.08., Leitsession Shanks nach /clear)

**Kurzcheck:** Rundenstart 23:59 (Get-Date), Schnitt nach Mitternacht —
der Kalendertag ist auf Montag gekippt; R6 läuft als Fortsetzung des
Arbeitstags 09.08. in DIESEM Tagesplan (User-Zuruf 23:15: kein
Feierabend). Weiter nur Innen-Stränge (alle R6-Stränge reine Web-/
Repo-Lesearbeit). Debrief-Gate ✅ (R5 geschlossen lt. Vermerk oben;
`git pull` ohne Delta, Arbeitsbaum sauber, `d43254d`).
Kontext-Säuberung ✅ (Regel 1a). **User-Abfrage (~00:03): außerhalb
NICHTS passiert** — Shortlist-Handgriffe weiter offen → E-V4 bleibt
blockiert. **Kontingent: keine frische Ablesung** (User-Entscheid) —
konservativ auf Basis des 19:37-Bands (Fable 70–85 %) geplant:
schlanke Runde, Arbeits-Session auf Opus.

**Schnitt (User-bestätigt ~00:03):**

| Session | Rolle | Aufgabe | Modell | Exklusiv | Scope |
|---|---|---|---|---|---|
| Leitsession (Buchstabe frei) | Shanks | FUND2-Apaleo-Faden-Stand-Prüfung (heypensio-Repo, NUR lesend); danach Review + Debrief R6 | Fable 5 | keine | Tagesplan; Befund → Projektquelle beim Debrief-Zug |
| R06-A | Ben Beckman | P15 Brandnamic-Partnerkreis (straiv/flexipass/hoteldoor/iiq check an Primärquellen) + P19 Hotelkooperationen/Marketing-Verbünde — Wettbewerbsbild-Erweiterung | Opus 5 | keine (Web lesend, KEIN Chrome) | `fund/wettbewerbsbild.md` (Erweiterung) + `protokolle/R06-A-*.md` + `sensibel/rohbelege-R06-A/` |

**Ist-Stand-Prüfung (Leitsession selbst, ~00:01; <3 Stränge → kein
Prüf-Subagent):** P15/P19 sind dokumentierter OFFENER Bestand
(`fund/wettbewerbsbild.md`, Punkteliste offene Punkte; Positivkontrolle:
Grep P15|P19 trifft dort und in Projektquelle § 7). ⭐ Vorbestand
zweiseitig geprüft: **Straiv ist als Wettbewerber bereits voll erhoben**
(R03-D; 86 Grep-Treffer der vier P15-Anbieter im Wettbewerbsbild,
Schwerpunkt Straiv) → P15 ist ERWEITERUNG (Partnerkreis-Abdeckung),
keine Neuerhebung; flexipass/hoteldoor/iiq check bisher nur
Namensnennungen aus R05-A. P19: Belvita/Familienhotels Südtirol sind
VORBEFUNDE aus R05-A → gehören in die Ausschlussliste des Prompts,
nicht in den Suchauftrag (Entdeckung offen halten). Apaleo-Posten:
Reihenfolge-Kopplung lt. `fund/persona-validierungsplan.md` § 7
(Faden-Stand im heypensio-Repo prüfen, nicht aus dem Plan ableiten).

**Review-Regime R06-A (begründet):** Kurzraster + getrennte
Fundstellen-Nachprüfung durch unabhängigen Prüfer mit Rohbeleg-Pfaden
(im Prompt verankert; wie Schwester-Stränge R03-D/R05-A) — das
Wettbewerbsbild ist internes Lagebild, nicht freigabetragend.
Rohbeleg-Sicherung nach `sensibel/rohbelege-R06-A/` (P20-Muster R5)
ist Teil des Auftrags; Extraktions-Positivkontrolle (Vollständigkeit
des ERGEBNISSES, Sammelvermerk R5) im Prüfauftrag.

**PROGNOSE:** Nach R6-Debrief Feierabend. Montag-Kandidaten
unverändert: StB-Anruf + BAFA-Entscheid (User, Zentrale) · E-V4 nach
Shortlist-Handgriffen · Anfragen-Versand DEHOGA/IHK · FUND2-Rest ·
IFB-Vorabklärung Hamburg Digital Check.
