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
