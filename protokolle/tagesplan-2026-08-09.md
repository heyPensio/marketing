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

## Übergabe-Block (bei Leitsession-Neustart füllen)

*(leer — wird vor einem Blockwechsel-Neustart gefüllt: Session-Stand,
offene Handgriffe, Block-Programm, Debrief-Kandidaten)*
