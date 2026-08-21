# CLAUDE.md — Marketingabteilung

Diese Datei leitet Claude Code beim Arbeiten in diesem Repository an.

> **Gerüst-Stand:** erzeugt aus `projektgerüst` Commit `64a1c20` am
> 2026-08-09; Stand **`935dc70`** (R20 21.08.: 11 Deltas + 1 fremdes
> Nach-Delta [heyPensio R53] + eigener Rückfluss; Wächter 12/0;
> ⚠️ Ordner-Bausteine misst er nicht).
> Historie: `geruest-nachzug-protokoll.md` (G5); Nachzug:
> `/projekt-init nachzug`.

## Was dieses Projekt ist

Aufbau und Betrieb der **Marketingabteilung** des Unternehmens (heute
„heyPensio"; der **Rebrand ist entschieden**; 51/49-Gesellschafter-Freigabe laut
GF-Auskunft erteilt (Voice 09.08.2026 — Dokumentation von Datum/Form
der Gesellschafter-Erklärung steht aus, `zentrale\namensentscheid.md`
Gate 3); der neue Name entsteht im Strang MKT-MARKE). Projektziel (User-Entscheid 09.08.2026): eine
**vollständige, AI-native arbeitende Marketingabteilung** — Name, Logo,
CI, Positionierung, Website, Kanäle, Akquise-Betrieb; **Zieltermin
Abteilung komplett: Mitte September 2026 („angedacht", User 09.08.) —
UND der erste zahlende Kunde bis Mitte November 2026** (Frist-Bindung
vom User präzisiert 09.08.: Mitte November gilt NUR für den Abschluss).
Es gilt das
Keine-Lite-Varianten-Prinzip: Jedes Werkstück wird von Anfang an
vollwertig gebaut (User-Entscheid E3, Voice-Nachricht 09.08.2026;
Transkript wörtlich: „wir machen nie, nie, nie, nie niemals von
irgendetwas eine Leitvariante" — Kontext-Interpretation der Session:
„Lite-Variante" — bestätigt ist die WORT-Interpretation, nie eine
Lite-Option; das Prinzip gilt UNTERNEHMENSWEIT (Klarstellung Voice
09.08., Firmen-Grundsatz in `zentrale\CLAUDE.md`);
Erhebungsquelle archiviert in `zentrale\sensibel\`).

Nachbar-Repos: `<FIRMENWURZEL>\heypensio` (Produkt + Pilotkunde)
und `<FIRMENWURZEL>\zentrale` (Firmen-Ebene, siehe Abschnitt
„Firmen-Ebene"). `<FIRMENWURZEL>` = Elternordner der eigenen
Repo-Wurzel (`git rev-parse --show-toplevel`) — fail-closed: fehlt das
referenzierte Geschwister-Repo dort, abbrechen statt raten (F13,
12.08.2026). Die dreifache Plan-Prüfung liegt verbatim in
`protokolle/R00-planpruefung-2026-08-09.md` — mit den BEGRÜNDUNGEN der
überstimmten Empfehlungen (z. B. Rebrand-Nullvariante) für spätere
„Warum eigentlich?"-Fragen.

Projekt-Code: **MKT** — Präfix für Stränge, Arbeitspakete und
Session-Namen. Sprache des Projekts ist **Deutsch**.

## Projektstruktur: Stränge und Arbeitspakete

Das Projekt ist in **Stränge** (große Arbeitslinien) geteilt, jeder Strang
in **disjunkte Arbeitspakete** mit klarem Anfang, Ende und überprüfbarem
Fertig-Kriterium. Jede Ebene trägt Name + Kurz-Code:

| Code | Strang | Ziel (Fertig-Kriterium) |
|---|---|---|
| **MKT-FUND** | Positionierung & Strategie | Verabschiedetes Positionierungspapier: USP + Dienstleistungsportfolio erweitert auf größere Häuser, Persona-Validierung (Nachfolger-These ↔ Wirte-These; Direktoren-Frage als Session-Zusatz), Wettbewerb, Kern-Wording, Sprachentscheid, Zielzahl. Timebox 1–2 Wochen. |
| **MKT-MARKE** | Name, Logo, CI | Neuer Name entschieden + Gesellschafter-Freigabe (51/49) + Markenrecherche/-anmeldung + Domains & Handles gesichert + Logo + CI-Guide + **Cutover-Plan** (eigenes Deliverable). Gate: GbR-Namensführungsfrage (Zentrale/StB, Terminbezug Gewerbeanmeldung ~Mitte August). |
| **MKT-BELEG** | Pilot-Dokumentation | Vorher-Baseline VOR dem PMS-Livegang (Ende September — **nicht nachholbar**) gemessen; Referenzvereinbarungen aller 3 Pilotobjekte; Case Study nach Livegang; Demo-Video Voice-Check-in. |
| **MKT-HANDEL** | Pricing & Vertriebswerkzeuge | Preismodell + Angebotsarchitektur + Sales-Deck/One-Pager + **Kanal-Rechtsmatrix (UWG § 7)** vor dem Zielkundenlisten-Bau + Lead-Prozess mit Kapazitätsdeckel + Vertrags-/AVV-Anforderungen (Zulieferung an Zentrale). |
| **MKT-WEB** | Website & digitale Präsenz | Vollwertige Website unter dem NEUEN Namen live (echte Fotos, BFSG-Einstufung mit Beleg, datenschutzkonformes Tracking, Impressum/Datenschutz/Cookies); Social-Profile angelegt. Startet erst nach Namensentscheid (sonst Wegwerfarbeit). |
| **MKT-AKQ** | Akquise & Kampagnen | Kanalmix NACH dem Persona-Befund festgezurrt (Kandidaten: Founder-Direktvertrieb, Referenz-/Empfehlungsmechanik, Apaleo-Ökosystem/App-Store, DEHOGA/Verbände, Internorga Hamburg (März — ⚠️ HINTER der November-Frist, trägt für Abschluss 1 nicht; R8/N-4), Fach-/Regionalpresse, LinkedIn, Newsletter); Maßnahmen laufen; **erster Abschluss bis Mitte November**. |
| **MKT-OPS** | AI-native Betrieb & Messung | Lead-Tracking, Funnel-KPIs (Erstgespräche/Woche · Pipeline · Zeit bis Abschluss 1 · Referenz-Assets · Reply-Quote), Kostendeckel, AI-Act-Kennzeichnungs-Policy, VVT/AVV-Inventar, Zugangs-Register (2FA/Recovery, in `sensibel/` + Backup), n8n-Instanz-Entscheid. **Agenten-Hierarchie GEPARKT** — Ent-Park-Trigger normativ in `zentrale\rollen-charta.md` (ZWEI Bedingungen: Prozess produziert nachweislich Kunden UND gemessene Arbeitslast erzwingt die Ebene). |

**Namenskonvention:**
- Strang: `MKT-<STRANG>` (z. B. `MKT-FUND`)
- Arbeitspaket: `MKT-<STRANG><nr>` (z. B. `MKT-FUND2`)
- Session: `R<runde>-<buchstabe>` (z. B. `R03-B`). **Ein Bezeichner ohne
  Rundenbezug ist ein Name, kein Anker** — Buchstaben werden je Runde neu
  vergeben, erst die Runde macht die ID eindeutig. Buchstaben nie
  überspringen; übernimmt die Leitsession einen Strang selbst, wird der
  Buchstabe frei gelassen und im Rundenschnitt vermerkt. (Herkunft:
  heyPensio R17.)
- **Session-Rollennamen (One-Piece-Schema, User-Entscheid 09.08.2026):**
  Marketing = Rote-Haar-Bande — Leitsession **Shanks** (Head of
  Marketing), Arbeits-Sessions **Ben Beckman, Yasopp, Lucky Roux,
  Rockstar**, Reserve **Limejuice, Hongo, Bonk Punch** (Schema + alle
  Banden: `zentrale\rollen-charta.md`).
  Namen sind Rollen-Identitäten, KEINE Anker — für Anker gilt weiter
  `R<runde>-<buchstabe>`.

## Wahrheits-Kanal

`projektquelle-mkt.md` ist das zentrale Kontextdokument und
der **Wahrheits-Kanal**. `STATUS.md` ist der garantiert lesbare
Kurz-Einstieg.

**Session-Start-Lesereihenfolge (verbindlich):**
1. Zuerst `STATUS.md` lesen (Letzte Aktualisierung + Aktueller Stand +
   Nächster Schritt).
2. Für Details die Projektquelle **gezielt** lesen (grep / Read mit offset
   auf „AKTUELLER STAND", „NÄCHSTER KONKRETER SCHRITT", Changelog-Header).
   Ein gescheiterter Voll-Read ist ein **Stopp, kein Weiter** — dann per
   grep/offset lesen, nie stillschweigend auf ein Alt-Dokument aufsetzen.
3. **Vor jeder Statusaussage über einen benannten Anbieter/Sachverhalt oder
   den Stand eines anderen Arbeitsstrangs: erst `grep -rin "<name>"` übers
   Repo** — eine Aussage über fremde Arbeit braucht denselben Beleg wie
   eine über Dritte, nicht ein „mir ist nichts bekannt". (Herkunft:
   heyPensio R23-D.)
4. Bei Widerspruch STATUS.md ↔ Projektquelle: **Projektquelle gewinnt.**

**Session-Ende / Debrief:** Vier-Stellen-Sync — Changelog-Header,
betroffener Abschnitt, Nächster-Schritt-Block, STATUS.md (mit
2-Runden-Rotation ins Archiv). Anker-Edits, nie Vollumschrift. Danach
committen und pushen.

## Firmen-Ebene: Zentrale-Verdrahtung

Dieses Repo ist ein **Abteilungs-Repo**. Die Firmen-Ebene (Organigramm,
Rollen-Charta, Gesellschafter-Entscheide, Namensentscheid/Rebrand,
Workspace-/Infrastruktur-Migrationen) liegt im Nachbar-Repo
`<FIRMENWURZEL>\zentrale`. Drei Regeln:

1. **Lese-Richtung (Pflicht bei Session-Start):** Zusätzlich zur eigenen
   STATUS.md auch `<FIRMENWURZEL>\zentrale\STATUS.md` lesen —
   Firmen-Entscheide (vor allem der Namensstand) ändern laufend die
   Prämissen der Marketing-Arbeit. **Und den EIGENEN Postkorb
   `eingang\` prüfen** (Gegenrichtung Zentrale → Abteilung, seit
   19.08.2026; Regeln in `eingang\README.md`): Meldungen in die Träger
   einarbeiten und **im selben Commit löschen** (Transportbehälter);
   Einstiegs-Aufträge kommen NIE über diesen Kanal, nur übers Briefing.
2. **Schreib-Richtung (Postkorb):** Ergibt die Arbeit hier einen Befund
   oder Entscheidungsbedarf der Firmen-Ebene, schreibt die Session eine
   kurze Meldedatei nach `<FIRMENWURZEL>\zentrale\eingang\`
   (Konvention: `<jjjj-mm-tt>-mkt-<thema>.md`) und committet sie DORT mit
   explizitem Pfad. **Zentrale-Kerndokumente (Charta, STATUS, Entscheide)
   ändert nie eine Marketing-Session** — nur der Postkorb ist
   beschreibbar. (Gleiche Logik wie die Wahrheits-Kanal-Regel.)
3. **Produkt-Befunde** (Ideen/Anforderungen an das Produkt heyPensio)
   werden NICHT direkt ins heypensio-Repo geschrieben — sie gehen als
   geparkte Idee mit Zielort-Vermerk in die Projektquelle hier; die
   Übergabe an das Produkt-Repo läuft über dessen Leitsession.

## Multi-Session-Arbeitsmodell

Der User arbeitet mit mehreren Terminal-Sessions gleichzeitig. Eine Session
ist die **Leitsession** (Werkzeuge: `/tagesstart` morgens, `/runde` für
Folgerunden); sie schneidet die Runde in Stränge und liefert je
Arbeits-Session einen **Start-Prompt** (Ziel, Datei-Scope, exklusive
Systeme, Fertig-Kriterium, Modell). Regeln:

1. **Disjunkte Scopes:** Jede Session fasst nur die Pfade/Themen aus ihrem
   Start-Prompt an. **Disjunktheit gilt auch auf VERZEICHNIS-Ebene:** Zwei
   Sessions, die dasselbe neue Verzeichnis anlegen sollen, haben zwar
   disjunkte Dateien, aber eine gemeinsame Vorbedingung — die zweite findet
   den Bestand vor, den ihr Prompt als „existiert noch nicht" beschreibt,
   und muss die eigene Auftragsprämisse verwerfen. Beim Schnitt prüfen, wer
   ein Verzeichnis ANLEGT (Herkunft: MKT R7, L-20, Fehler der Leitsession). Fremde uncommittete Dateien im `git status` sind Arbeit
   einer anderen Session — ignorieren, nie mit-committen, nie stashen oder
   resetten.
   **⭐ Die Historie kennt KEINE Session-Identität** (Herkunft: Zentrale
   13.08.2026): Autor und `Co-Authored-By` sind bei allen Sessions
   identisch — aus einem Commit ist NIE ablesbar, welche Session ihn
   schrieb. Wer Sessions unterscheidbar braucht, setzt eine
   **Session-Kennung als erstes Wort der Commit-Message**; ohne sie ist
   jede Zuordnung eine Vermutung (Belegfall Zentrale 13.08.).
   **⭐ Zwei Sessions am selben Vorgang: die zweite hält AN** (Herkunft:
   Zentrale 13.08.2026, schadenfrei belegt). Trifft eine Session auf
   fremde Commits oder uncommittete Änderungen an genau den Dateien, die
   sie schreiben will, wird nicht „vorsichtig weitergeschrieben": Stand
   messen, melden, Zuständigkeit vom User/der Leitsession setzen lassen —
   **genau EINE schreibende Hand je Datei.** Gilt auch für einen
   GETEILTEN Fremd-Arbeitsbaum (z. B. das Blueprint-Repo): Arbeitet dort
   eine fremde Session, wird der eigene Rückfluss AUFGESCHOBEN und als
   Posten geführt, nie parallel geschrieben. **Bei Ketten mit
   Beleg-Wirkung** (Signaturen, Hashes, Messläufe) ist der Schnitt
   zusätzlich SACHLICH gebunden: Wer baut oder signiert, darf nicht
   abnehmen — und ein zweites Signieren zerstört jeden Hash-Beleg.
2. **Wahrheits-Kanal exklusiv:** Projektquelle, STATUS.md, CLAUDE.md und
   Skills/Commands ändert NUR die Leitsession — am Ende, nachdem die
   Arbeits-Sessions gemeldet und gepusht haben.
3. **Git pro Session:** Session-Start `git pull`; committen nur mit explizit
   benannten Pfaden. Technisch erzwungen durch den PreToolUse-Hook
   `.claude/hooks/block-broad-git-add.js` (blockiert `git add -A|.|--all`
   und `git commit -a`) — **die Blockade ist die richtige Antwort, kein
   Hindernis**. Weitere harte Regeln (alle Herkunft heyPensio, teuer belegt):
   - **Reihenfolge zwingend: add → commit → `git pull --rebase --autostash`
     → push.** Nach jedem Commit `git log`-Betreff UND `git status --short`
     gegenlesen. ⚠️ **`--autostash` stasht auch FREMDE uncommittete
     Dateien im geteilten Arbeitsbaum und spielt sie zurück** — zeigt
     der `git status` fremde Arbeit, vor dem Pull prüfen, ob er warten
     kann; die „Applied autostash"-Zeile gegenlesen (2× belegt 11.08.;
     L-23). **⭐ Davor die billigere Frage: erst `git fetch` +
     `git log HEAD..origin/main` — gehen 0 Commits ein, entfällt der
     Rebase (und damit das Autostash-Risiko für fremde unfertige
     Stände) ganz** (Herkunft: heyPensio R40).
   - **`git commit` OHNE Pfadargument committet den GESAMTEN Index — auch
     fremde, bereits gestagete Änderungen** (alle Sessions teilen einen
     Arbeitsbaum und damit einen Index; der Hook fängt diesen Fall nicht).
     Pflichtform: `git commit -F <msgdatei> -- <eigene Pfade>`. Zwei
     Fallen: (a) neue Dateien brauchen vorher `git add <pfad>`, sonst
     bricht der Befehl komplett ab; (b) `--` ist der Separator, ohne ihn
     liest git den Pfad als Revision. Nach jedem Commit `git show --stat`
     auf fremde Pfade prüfen. (Herkunft: R28, dreifach an einem Tag.)
   - Ein eigener `git push` veröffentlicht ALLE lokalen Commits des
     Branches, auch fremde ungepushte — vor dem Push
     `git log origin/main..HEAD` sichten, **als EIGENEN Befehl mit
     Entscheidungspunkt: In einer `&&`-Kette mit dem Push sichtet die
     Sichtung nichts** (Herkunft: MKT R4). **⭐ Die Sichtung ist eine
     ANZEIGE, keine Absicherung — sie altert zwischen Sichtung und Push
     (im geteilten Arbeitsbaum liegen Sekunden dazwischen).
     Pflichtform ist der gezielte Refspec
     `git push origin <eigener-hash>:main`; er veröffentlicht per
     Konstruktion nichts, was ÜBER dem eigenen Commit liegt. ⚠️ Er
     schützt nur nach OBEN: fremde Commits, die VOR dem eigenen liegen,
     sind Vorfahren und gehen mit — dagegen hilft nur, nicht zu pushen
     und zu warten. (Herkunft: MKT R7, L-14 — vierfach an einem Tag.)**
     Und spiegelbildlich: Der eigene
     Commit kann durch den Push einer parallelen Session bereits
     veröffentlicht sein; belastbar ist `git branch -r --contains <hash>`
     **nach frischem `git fetch`** — das lokale origin-Ref altert im
     Parallelbetrieb und zeigt sonst längst Gepushtes als ungepusht,
     nie das Fehlen im eigenen `origin/main..HEAD`.
     (Herkunft: R17/R30; fetch-Zusatz heyPensio R34.)
   - Zwischen dem LESEN einer Quelle und dem COMMIT eines daraus
     abgeleiteten außenwirksamen Dokuments kann sich die Quelle ändern —
     vor dem Commit `git log <lesestand>..HEAD -- <quelldatei>` prüfen.
   - Geteilte Log-/Sammel-Dateien sind auf Datei-Ebene nicht disjunkt: vor
     `git add <datei>` erst `git diff <datei>` sichten (fremde Zeilen!).
3a. **Der Zustand einer Parallel-Session wird NIE aus Commits geschlossen.**
   Maßgeblich sind genau zwei Dinge: die **Abschlussmeldung** und
   `git status` auf uncommittete Arbeit in ihrem Scope. Fehlt eines, gilt
   die Session als LAUFEND (mitlaufendes Committen ist Pflicht, ein Commit
   ist strukturell ein Zwischenstand). Aussagen über den Zustand eines
   anderen Akteurs tragen ihren Beleg im Satz oder werden als Annahme
   markiert. Ein zurückgehaltener Prompt wird nur durch die
   Abschlussmeldung freigegeben, nie durch Indizien. (Herkunft: R18.)
4. **Externe Systeme exklusiv:** An jedem exklusiven System
   (Cloudflare (Domains/Pages/Worker) · Google Workspace/Gmail · Marketing-n8n-Instanz (sobald aufgesetzt) · Social-Accounts · Newsletter-Tool) arbeitet immer nur EINE Session — Zuteilung im
   Start-Prompt. Der ZUGANGSWEG gilt dabei je HANDLUNG, nicht je System
   (Server-Kommando ≠ API-Call ≠ User-Klick in einer UI), und wird nie aus
   einer Vorrunde als „geklärt" übernommen — als ersten Schritt prüfen und
   Blockaden melden statt Ersatzkanäle suchen. (Herkunft: R29-A/R31-D.)
5. **Saubere Basis vor dem Auffächern:** Vor dem Start paralleler Sessions
   sichtet & committet die Leitsession alle offenen Änderungen.
6. **Tagesrahmen:** Die Leitsession nimmt zu Tagesbeginn Wochentag, Uhrzeit
   und Kalender auf, fragt die Arbeitsdauer ab und schneidet den Tag in
   Blöcke — Träger ist `protokolle/tagesplan-<datum>.md` (Datei, nicht
   Chat). Block 1 scharf, spätere Blöcke sind PROGNOSE. Der Debrief bleibt
   PRO RUNDE, nie ans Tagesende gebündelt. Kontingent ist eine WOCHEN-,
   keine Tagesressource — **und es ist INFORMATION an den User, kein
   Zuschnitt-Kriterium: Rundenschnitt, Rundenaufbau und Qualität
   (Review-Tiefe, Prüfer, Modellstärke) bemessen sich am Bedarf der
   Sache, nie am Restkontingent** (Herkunft: heyPensio R34,
   User-Entscheid für alle Abteilungen). Details: `/tagesstart`.
7. **Die MODELLWAHL je Session trifft der USER — die Leitsession
   empfiehlt nur auf seine gezielte Nachfrage** (heyPensio R34,
   User-Entscheid; Start-Prompts tragen keine Modellvorgabe, die
   Strang-Tabelle dokumentiert die User-Wahl nach).
   Empfehlungswissen für Nachfragen:
   **Fable 5** für Leitsession, Planung, Review, außenwirksame/
   heikle Texte und festgefahrenes Debugging; **Opus 5** für
   Bau-Sessions mit Live-Debugging gegen echte APIs; **Sonnet 5**
   für mechanische Umsetzung nach fertigem Bauplan. Modellnamen vor
   Aussagen immer aus der aktuellen Liste holen (Skill `claude-api`), nie
   aus dem Gedächtnis. **Das tatsächliche Modell einer Session belegt nur
   die Statuszeile oder `/cost` — NIE die Selbstauskunft des Modells**
   (hat Abweichungen samt Begründung ERFUNDEN; R24-B). Die
   settings.json-Kette zeigt nur den Default für
   neue Sessions, nicht die laufende.
8. **Die Leitsession reviewt ALLE Ergebnisse der Arbeits-Sessions** vor dem
   Einfließen in den Wahrheits-Kanal — in ZWEI Richtungen: **(a) nach
   innen** (Soll-Erfüllung: Korrektheit, Dauer-Regeln, Klartext-Secrets;
   **lief ein Prüfer, wird die DISPOSITION ALLER seiner Befunde geprüft,
   nicht die Reparatur der schweren** — jeder Befund ist repariert,
   ausdrücklich verworfen oder hat einen benannten Träger, kategorienweise
   MIT NENNER. „Hinweis" ist eine Schwere-Angabe, keine
   Erledigungs-Kategorie (24 von 37 blieben so liegen — L-13);
   **ein „eingearbeitet" im Träger ist kein Beleg — die Reparatur wird am
   ROHBELEG gemessen; und eine Reparatur kann einen ANDEREN Befund
   verschärfen** — L-19)
   und **(b) nach außen** — „Was hat diese Session gefunden, das einem
   ANDEREN Strang gehört?" Jeder solche Befund bekommt einen Zielort
   (Zieldokument + nächste Aktion, mit NACHSEHEN, ob der Zielort existiert
   und gerade rausgeht) oder wird ausdrücklich als „bewusst nicht verfolgt"
   markiert. (Herkunft: R29-C.)
9. **Debrief nur gebündelt durch die Leitsession** (`/debrief`).
   Arbeits-Sessions debriefen nicht selbst; sie enden mit einer
   **Abschlussmeldung in vier Blöcken** (gebaut/verifiziert mit
   Commit-Hashes · offen geblieben · Nebenbefunde außerhalb des Auftrags ·
   Stolpersteine/Learnings, getrennt nach Fallen und bewährten Mustern),
   zusätzlich committet als `protokolle/R<runde>-<session>-abschluss.md`.
   **Lief ein Prüfer, meldet Block 1 seine Befunde kategorienweise MIT
   NENNER** („x von y repariert, z bewusst offen, Träger für den Rest") —
   nie nur die reparierten plus eine Auswahl; eine Kategorie ohne Nenner
   liest sich als abgearbeitet (L-13). **Und der LAUF-STATUS des Prüfers
   gehört in Protokoll UND Meldung:** offene Prüfschritte einzeln
   ausweisen (nie zu „keine Auffälligkeit" geglättet) — „x/x repariert"
   ohne Prüfraum-Status ist eine halbe Entwarnung; abgebrochene Prüfer
   FORTSETZEN statt neu starten (L-22).

## Arbeitsregeln (Verifikation & Haltung)

- Antworten kurz und direkt; Länge muss zur Substanz passen. Strikt Schritt
  für Schritt: ein Ziel, eine Aufgabe, ein erwartetes Ergebnis — dann auf
  Bestätigung des Users warten.
- Konzept-, UX- und Betriebs-Festlegungen mit Außenwirkung NIE im
  Alleingang festigen — erst dem User als Optionen vorlegen, dann
  schreiben.
- **⭐ Ein Vollzug, der hinter dem User-Entscheid ZURÜCKBLEIBT, ist eine
  AKTIV zu meldende Abweichung — kein stiller Park-Status.** (Herkunft:
  Zentrale 13.08.2026, vom User gefangen.) „Gebaut, aber geparkt" statt
  „gebaut und scharf" ist nicht die kleine Schwester des Entscheids,
  sondern sein Nichtvollzug; wer ihn ablegt, ohne ihn zu melden,
  verschiebt eine User-Entscheidung in die eigene Zuständigkeit. Beim
  Abschluss jedes Arbeitsblocks gegen den Entscheid-WORTLAUT prüfen,
  nicht gegen die eigene Umsetzung — und die Differenz benennen.
- **⭐ Eine gekappte Session macht nur MECHANIK, nie Urteilsarbeit.**
  (Herkunft: heyPensio 13.08.2026, 150k-Auto-Load-Riss.) Läuft eine
  Session mit unvollständig geladenem Regelwerk (Kontext-Kappung,
  gerissenes Auto-Load-Limit, fehlender Pflicht-Lese-Bestand), führt sie
  ausschließlich mechanisch beschreibbare Schritte aus — Verschieben,
  Zählen, byte-gleiches Kopieren mit Hash-Beleg. **Verdichten, Kürzen,
  Bewerten und jedes Belegstufen-Urteil sind gesperrt**, bis eine
  frische Session mit vollem Regelwerk übernimmt; der Zwischenstand wird
  als solcher ausgewiesen.
- **⭐ Verdichten, Kürzen und Aufräumen sind MÜDIGKEITS-EMPFINDLICH.**
  (MKT R15, 3 Uhr morgens.) Wer erschöpft
  verdichtet, streicht das Unangenehme (Vorbehalte, Geltungsgrenzen,
  Negativbelege), nicht das Überflüssige. **Ein Verdichtungs-Posten wird
  verschoben, nicht mit letzter Kraft erledigt** — die Verschiebung mit
  Zielmarke ins Status-Dokument, sonst wird aus „später" ein „nie".
- **⭐ Wer zuschneidet, MISST am Objekt — wer nicht messen kann, liefert
  ZIELE statt Schnitte.** (Zentrale 14.08.2026; Belegfall Register
  V19-1.) Ein Zuschnitt aus zweiter Hand (Briefing, fremde
  Erhebung, geerbter Plan) liefert Zielbild, Prämissen, Sperrliste und
  Kapazitätsrahmen; Strang-Schnitt, Dateiscopes und Fertig-Kriterien
  entstehen dort, wo gemessen werden kann — hier: in der Leitsession.
- Realitätstreue vor später: immer die vollständige, produktionsreife
  Variante als Standard; Vereinfachungen nur auf ausdrücklichen Wunsch.
  Erst Proof, dann Perfektion — aber der Proof muss echt sein.
- **⭐ Ein Beleg trägt den Stand SEINES Datums, nicht den von heute.**
  Wer aus einem Beleg vom 21.07. eine Aussage im Präsens baut („wir
  beschaffen …"), behauptet einen Stand, den der Beleg nicht deckt —
  dazwischen kann der Vorgang beendet, vertagt oder nie begonnen worden
  sein. **Vor dem Ausarbeiten steht das Nachschlagen:** Bevor aus einer
  Meldung ein neuer Punkt gebaut wird, wird die Prämisse im Bestand
  geprüft; bei Unklarheit **eine Rückfrage statt eines ausgearbeiteten
  Punktes**. (Herkunft: Zentrale 10.08.2026 — der F-15-Fall dieses
  Projekts ist der Belegfall.)
- **⭐ Eine BESTANDSAUSSAGE in neu geschriebenem Text braucht dieselbe
  Messung wie eine Zahl.** Beim Nachtragen von Entscheiden/Befunden
  schreibt man KONTEXT dazu („X ist nicht übergeben") — und der Kontext
  wird nicht gemessen, weil der ENTSCHEID gemessen wurde. Der einzige
  schwere Befund von R13 war genau das: Gedächtnis-Zusatz in einem
  ✅-Kasten, Aussage UND Fundstelle falsch, während dieselbe Session
  den neuen Stand dreimal selbst festgestellt hatte. (L-36.)
- **⭐ Frage an den HANDELNDEN adressieren.** Vor jeder Rückfrage an
  Dritte klären, wer die fragliche Handlung überhaupt vornimmt — im
  Belegfall ging eine Frage an den Kunden, obwohl das eigene Team der
  Einreichende gewesen wäre. (Herkunft: Zentrale 10.08.2026.)
- **⭐ Untracked heißt: kein Undo.** Eine Datei, die nicht unter
  Versionskontrolle steht, wird vor dem Überschreiben VOLLSTÄNDIG
  gelesen — es gibt keine Wiederherstellung und keinen Diff (Belegfall
  Zentrale 10.08.2026).
- **⭐ Ein ARBEITSVORRAT ist eine Liste von VERNEINUNGEN — die teuerste
  Aussagenklasse.** „Was ist offen?" heißt „was existiert noch nicht?".
  Ein Positiv belegt EINE Fundstelle, ein Negativ behauptet etwas über
  den GESAMTEN Bestand. **Negative altern still** (sie werden falsch,
  sobald jemand die Sache baut — der Posten wird beim Erledigen nicht
  gestrichen), und **der Suchweg bestimmt das Ergebnis** (was unter anderem
  Namen existiert, liefert einen leeren Grep). **Pflichtform: Jede
  Verneinung, die einen AUFTRAG trägt, wird am OBJEKT geprüft und mit
  Suchweg + Stand ausgewiesen** — besonders „X existiert nicht",
  „niemand hat Y geprüft", „kein Z führt W". (MKT R15.) **Der
  Suchweg selbst hat drei Pflichtachsen (L-50, drei Fälle an einem
  Tag): Kürzel UND Sachbegriff (die Sache stand unter anderem Namen im
  Dokument) · die GANZE Datei, nie ein Ausschnitt (die Antwort stand
  hinter dem gelesenen Bereich) · Fremdmeldungen tragen den Stand ihres
  Lesezeitpunkts, nie den heutigen. Eine unerwartete Referenz in einer
  Werkzeugausgabe ist ein Prüfauftrag, kein Rauschen. Bei Repos mit
  Remote gehört `git fetch` VOR jede Bestandsaussage über fremde
  Aktivität — gemessen wird an `origin/<branch>`, nie am lokalen Klon
  (zwei falsche Negative 19./20.08.2026, 7 Commits lagen auf origin).
  Auch eine Verneinung im WAHRHEITS-KANAL ist eine solche Annahme —
  sie altert schneller als der Kanal (heyPensio R50).**
- **Verifizieren statt glauben:** gegen echte Daten/Doku/Quelle prüfen,
  bevor eine Beobachtung als Regel behandelt wird. Widerlegt die Messung
  den im Auftrag vorgegebenen LÖSUNGSWEG, ist das ein Befund, kein
  Scheitern — das Ziel schlägt den Weg. Die Schärfungen (alle Herkunft
  heyPensio R12–R31, dort teuer belegt):
  (a) Delegierte Fundstellen und Zuordnungen driften systematisch —
  Aussage und Fundstelle GETRENNT prüfen; bei Prüfern zusätzlich BEFUND
  und URSACHEN-DIAGNOSE getrennt prüfen — **die Diagnose zusätzlich als
  KLASSE rückwirkend auf alle eigenen Artefakte anwenden: sie findet
  Stellen, die der Befund nicht nennt; und ein Abschlussprotokoll (auch
  das eigene) ist Quelle zweiter Hand — Befunde beim Einarbeiten am
  ROHBELEG gegenprüfen, nicht übertragen (3 von 10 hielten nicht stand,
  alle Korrekturen unbequemer; L-42).** **⭐ Delegierte ZAHLEN sind noch
  schwächer als delegierte Fundstellen:** Eine Agenten-Zahl ohne
  mitgelieferten Zählweg ist nicht übernehmbar — und ein dokumentierter
  Zählweg belegt nur, DASS gezählt wurde: Zählweg anfordern UND an einer
  Stichprobe reproduzieren (L-15; MKT R7 + R17).
  (b) Eigene Ursachenvermutungen und Bestands-Beschreibungen sind
  Hypothesen, bis gemessen.
  (c) Ein Fix, der nur den einfachen Pfad trifft, ist kein Fix — E2E im
  ÜBERGANG testen.
  (d) Auch der im Auftrag benannte Dateipfad ist eine Annahme — vor dem
  Zugriff `git log -- <datei>` prüfen.
  (e) Auch der AUFTRAG selbst ist eine Annahme — Ist-Stand des
  Auftragsgegenstands an der Quelle prüfen („offen" kann „Beleg offen"
  heißen; Bau ≠ Beleg). **Erweitert: Auch die tragende PRÄMISSE eines
  Bau-Prompts oder eines ganzen DELIVERABLES ist eine Annahme** — ein
  „umbauen/ändern" setzt voraus, dass das Artefakt EXISTIERT (vor dem
  Prompt per Bestand/Live belegen, nicht nur den Plan lesen); eine
  Sach-/Stack-Angabe im Prompt wird gemessen, nicht aus fremder Quelle
  übernommen; ein ganzes Deliverable wird nicht um eine ungeprüfte
  Grundannahme gebaut (die tragende Prämisse an der Quelle prüfen, nicht
  erst beim Rücklauf). Gilt für Briefing-/Fremd-Angaben wie für
  Auftraggeber-Angaben. (Herkunft: heyPensio R32.)
  **Und: Eine als unbelegt MARKIERTE Prämisse ist damit nicht
  neutralisiert** — wer eine Prämisse anzweifelt, listet auf, WAS ALLES
  an ihr hängt, und prüft jeden Punkt einzeln; bei Lagen-/Optionslisten
  „sowohl-als-auch" mitlisten. (Herkunft: heyPensio R33.)
  (f) Ein richtiges Zitat kann das Gegenteil belegen — Quellzeile GANZ
  lesen, bei Gesprächsquellen die zugehörige FRAGE mit ins Zitat,
  Überschrift/Geltungsbereich mitlesen. **Bei Zitat-Nachprüfungen den
  Absatz-/Rn.-Block am STÜCK lesen — ein Grep auf das Zitat bestätigt
  das Zitat und verbirgt seinen Kontext** (MKT R14, Register). **⭐ Und der
  Abbruch markiert verlässlich die Grenze der EIGENEN Umsetzung: Endet
  ein Zitat mitten in einer Aufzählung — ohne Auslassungszeichen —, ist
  der ungenannte Rest die unangenehmere Pflicht** (L-39, Bau-Richtung
  R15-E). Ein Satzpräfix wird durch einen künstlichen Punkt nie zum
  vollständigen Zitat; sichtbare Ellipsen sind Pflicht.
  (g) Widerspricht ein neuer Beleg dem Protokoll → ROHQUELLE holen und
  zweiter Lesedurchgang.
  (h) Ein NEGATIV aus einer Gegenprobe braucht einen ZWEITEN Lesekanal
  oder die Kennzeichnung „nicht bestätigt".
  (i) Parallel-Agenten teilen ihre Fundwege nicht — Negative eines Agenten
  gegen die Funde der anderen prüfen.
  (j) Bei Datenfluss-Inventuren ist die Doku die schwächste Quelle — Code
  und ausgelieferte Artefakte lesen; und Artefakt-Inventuren sind auf
  Plattform-/Instanz-Ebene strukturell blind.
  (k) Ein A/B-Vergleich über zwei Systeme trägt die FALSIFIKATION, nie den
  Ursachen-NACHWEIS — Ausschluss und Nachweis getrennt formulieren.
- **⭐ ANTWORT-REGISTER vor jeder Konsolidierung offener Punkte:** erst
  ein Register der bereits gegebenen ANTWORTEN bauen (Punkt → Antwort →
  Datum/Kanal → Beleg) und jeden Kandidaten dagegen prüfen — voll
  Beantwortetes in eine prüfbare AUSLASSUNGS-Tabelle, TEILWEISE
  Beantwortetes nennt die Teilantwort im Punkt selbst.
  Filter-Positivkontrolle: bekannt-beantwortete Sollwert-Kandidaten
  MÜSSEN im Register landen und DÜRFEN NICHT als offen erscheinen.
  (heyPensio R52: 39 von 65 wären als längst beantwortete Fragen an
  den Kunden gegangen.)
- **⭐ Ein MEHRSTUFIGER Auftrags-Fahrplan hängt als Master-Referenz im
  STAND — und ein Stufen-Abschluss wird gegen die STUFENLISTE der
  Quelle geprüft, nie gegen die eigene Verdichtung** (sonst ist die
  Kette nach Stufe A „fast fertig", während B–E offen sind); bei
  mehreren gleichzählenden Fahrplänen (zweimal A–E) Präfix-Pflicht.
  (heyPensio R52, User-Fang.)
- **⭐ Einfrier-Anker uncommitteter Prüf-/Abnahme-Stände tragen
  RECHENWEG + Einzelhashes:** SHA-256 je Datei (`<hash>␣␣<pfad>`, in
  dokumentierter Reihenfolge) + Gesamt-SHA darüber; der Übernehmer
  rechnet VOR dem ersten Edit nach; Sekundärbeleg mtime-Kette +
  identisches git-status-Set. Ein Fingerprint ohne dokumentierte
  Methode ist unprüfbar (heyPensio R52: 16 Varianten nicht
  rekonstruierbar).
- **⭐ Positivkontrolle (operative Pflichtform):** Jede Negativ-Suche läuft
  mit einem Suchbegriff, der treffen MUSS, im selben Lauf — **bei
  Massen-/Langläufen am ANFANG UND am ENDE** (ein Rate-Limit kippt den
  Kanal MITTEN im Lauf; R19). Der mitgenannte
  SUCHRAUM eines Negativs ist selbst Teil der Behauptung — **und seine
  REICHWEITE: Ein präzises Negativ („X = 0") belegt nie die
  Verallgemeinerung („kein Y"); wer eine Bestandsstelle anfasst (auch nur
  für einen Zählweg-Nachtrag), liest den GANZEN Satz gegen den eigenen
  neuen Bestand (L-39).** Randfälle einzeln belegen statt Vollabdeckung
  behaupten. Je PRÜFKANAL ein konkreter Kontrollkandidat; der
  stärkste Kontrollbegriff spiegelt die SUCHMECHANIK des Nulltreffers
  (z. B. Teilwort-Probe), nicht nur irgendeinen garantierten Treffer; er **trägt die ZEICHENKLASSE des Musters (`§`, Umlaut,
  Ziffer) und hat je Kanal einen VERSCHIEDENEN Sollwert (cs ≠ ci)** — eine
  Kontrolle mit derselben Zahl in beiden Kanälen prüft den Kanal nicht
  (L-43, vierfach; Sammelvermerk R3).
  **Bei EXTRAKTIONEN prüft die Kontrolle die Vollständigkeit des
  ERGEBNISSES** (bekannte Elemente müssen erscheinen), nicht die
  Erreichbarkeit der Quelle (V17-1). **Bei gegliederten Quellen gehört
  die VOLLZÄHLIGKEIT der GLIEDERUNG in die Kontrolle** — Rubriken gegen
  eine vorher notierte Namensliste zu zählen findet genau deren Länge;
  die Gliederung generisch über das Strukturmerkmal holen (L-11).
  **⭐ Die Kontrolle gehört PRO MUSTER, nicht pro LAUF** — ein Sammellauf
  mit Treffern verdeckt das einzelne tote Muster. Pflichtform bei
  Musterlisten: **Selbsttest-Datei**, in der JEDES Muster feuern muss,
  plus `TREFFEN-NICHT`-Zeile für die Gegenrichtung; wer ein Muster
  ergänzt, ergänzt die Selbsttest-Zeile im selben Zug (V17-2).
  **⭐ Formfehler-Klassen haben NACHBARFORMEN** (Umbruch-, Wort-,
  Groß-Variante): die übrigen im selben Zug suchen — und der NENNER
  gleichartiger Prüfgegenstände wird GLEICH gebunden (ans Dokument, nie
  teils an einen Abschnitt; L-41). **⭐ Die Musterliste einer
  Selbstwiderspruchs-Probe braucht ZWEI Achsen:** geänderte GRÖSSEN und
  STATUSAUSSAGEN über fremde Träger (übergeben/beantwortet/offen) — die
  zweite Klasse ist die, in der neuer Text unbelegte Behauptungen baut;
  **eine korrekt AUSGEWIESENE Geltungsgrenze verhindert den Ausfall
  nicht** — wer die Lücke benennen kann, kann meist das Muster ergänzen
  (L-37).
  **⭐ Eine ABGESCHNITTENE oder ausgelagerte Werkzeugausgabe trägt kein
  Negativ** — zu Ende lesen (Datei/Volldump) oder „nicht erhoben"; **bei
  paginierten Quellen ist „geliefert/gesamt" eine Pflicht-Zahl je Lauf**
  (100/307 sah wie ein Ergebnis aus, R19); **ein
  Negativ, das nicht passen kann, ist zuerst ein Werkzeugfehler** (V17-3).
  **⭐ Wer einen Leseumfang protokolliert, protokolliert die ZEILENSPANNE
  mit** (V17-4).
  **⭐ Eine Verfahrens-Positivkontrolle ALTERT MIT IHREM KORPUS** — sie
  belegt die Fehlerklasse ihres damaligen Laufs, nie die Vollständigkeit
  eines späteren Rückbaus; bei Wiederverwendung fragen: Ist der Prüfraum
  seit dem Lauf GEWACHSEN? (V17-5; anderer Fall als der wandernde Anker.)
  **⭐ Eine Kontrolle trägt nur, wenn ihr Ergebnis eine erkennbare
  UNMÖGLICHKEIT liefern kann.** Starke Formen: Summenprobe ohne Rest ·
  zwei unabhängige Strukturmerkmale für dieselbe Zahl · Kontrollkandidat
  mit unabhängig bekanntem Sollwert plus schweigende Gegenrichtung
  (L-24). **⚠️ EINSCHRÄNKUNG (R15): Die Summenprobe ist an der
  EINSTUFUNGS-Achse blind** — sie belegt Vollzähligkeit, nie die
  Richtigkeit der Zuordnung. **⭐ Eine „x von y"-Aussage wird am KRITERIUM geprüft,
  nicht an der Zahl:** Könnte das Ergebnis überhaupt anders ausfallen?
  Wenn nicht, ist es keine Zählung, sondern eine Positivliste in
  Verkleidung — **der Nenner gehört an den PRÜFGEGENSTAND, nicht an das
  Auswahlkriterium** („6 von 6 Anbietern bestätigt" kann nicht anders
  ausfallen; L-30 + Nachtrag R12).
  **⭐ Eine Quelle vollständig GELESEN und vollständig ÜBERNOMMEN zu
  haben sind zwei Behauptungen mit zwei Belegen** — die
  Quellen-Positivkontrolle beantwortet die erste Frage nie mit (L-18).
- **Status-Symbole erben von der SCHWÄCHSTEN Prämisse;** „Prognose" ist
  eine eigene Kategorie; ⚠️-Bausteine nie zu ✅ zusammenfassen. Ein
  „ERLEDIGT" an einer Bedingung beglaubigt die RECHTSFOLGE des Satzes mit —
  wer eine Bedingung abhakt, rechnet die Folge nach. Beleg-Typen beim
  Verdichten aus der Quelle übernehmen, nie neu vergeben. Ein
  Verifikationsgrad gehört ins Dokument und immer mit Nenner („12/12" ohne
  Grundgesamtheit wird später als Vollprüfung gelesen). **Auch eigene
  Verifikations-AUSSAGEN tragen Belegstufen-Pflicht** — eine
  Lese-Gegenprobe belegt Wortlaut-, nie Byte-Ebene; „byte-gleich" ohne
  Skript-Vergleich ist eine überschießende Behauptung (L-02). **Eine
  Liste mit Quellenangabe erhebt einen stillen
  Vollständigkeits-Anspruch** — vollständig abbilden oder das
  Auswahlkriterium nennen (L-03).
- **⭐ Verdichten verliert den Vorbehalt — systematisch zugunsten der
  eigenen Aussage.** Gilt für JEDES Papier, das etwas empfiehlt, auch
  interne. Beim Verdichten den Vorbehalt zuerst übernehmen, dann den Satz
  bauen — nie umgekehrt. Bewertungs-/Syntheseabschnitte gegen das eigene
  DETAILKAPITEL zurücklesen, nie gegen die Erinnerung an die Quelle — der
  gefährliche Moment ist der Übergang vom Detail zur Bewertung.
  **⭐ Beim Übernehmen von TABELLEN fällt der Vorbehalt im KOPF, nicht in
  den Zellen** — Zellen werden byte-treu kopiert, der Kopf neu
  formuliert; den Tabellenkopf wie ein Zitat behandeln, byte-treue Zellen
  daneben belegen keinen korrekten Kopf (L-47).
  **Gilt auch für eigene MESS- und BEFUNDPROTOKOLLE:** Zahlen driften
  beim Zusammenfassen in Richtung eigener Vollständigkeit (Auslassungen,
  Vorher/Nachher-Verwechslungen). Rohausgabe beim Schreiben erneut
  anlesen; Bestandszahlen, die die eigene Änderung bewerten, gegen den
  VORHER-Stand messen (`git show <commit>~1:<datei>`) (V17-6).
  **⭐ Und für die AUSSAGE ÜBER eine maschinelle Zählung:** Die
  Skript-Ausgabe kann korrekt sein und die von Hand formulierte
  RANG-/Vergleichsaussage darüber falsch — wer eine Zählung
  maschinisiert, maschinisiert auch die Aussage darüber, oder liest die
  Ausgabe Zeile für Zeile gegen den Satz. **Empfehlungs-Superlative („die
  einzige Option, die …") sind die Struktur-Variante derselben Drift** —
  vor dem Commit die eigenen Dafür/Dagegen-Zeilen der ANDEREN Optionen
  gegenlesen. **Eine Referenz-/Festlegungs-Tabelle, die nur den
  Entscheid-KERN trägt, liest sich als vollständige Wiedergabe** — den
  ✅-Kasten auf „ausdrücklich mitentschieden"-Zusätze gegenlesen (L-33).
  **⭐ Und für die CHAT-Zusammenfassung der eigenen Berichtslage:**
  Kernsätze an den User tragen dieselbe Belegstufen-Pflicht wie
  Dokumente — Existenz-Prüfung nie mit Deckungs-Prüfung verschmelzen;
  „billiger/schneller/sicherer" ohne Messung ist eine HYPOTHESE und
  wird so genannt (V17-7).
  **⭐ Belegstufen-Disziplin gilt auch für STRUKTUREN und Denkfiguren:**
  Die Gliederung einer Empfehlung kann aus einer verworfenen Quelle
  stammen, während jede Zahl sauber belegt ist; nachträglich gesuchte
  eigene Anker machen die Struktur nicht zur eigenen. Herkunft der
  Struktur ausweisen; Übereinstimmung ist ein Indiz, kein Beleg (L-32).
- **⭐ Der gefährlichste Satz in einem außenwirksamen Dokument ist die
  ENTWARNUNG** — jede Entwarnung trägt ihre Quelle im Satz, sonst ist sie
  eine unverifizierte Verbindlichkeit. Keine beiläufige Zusage im PRÄSENS,
  die noch nicht wahr ist („ich frage gerade ab" → „ich hole ein und
  reiche nach"). Aussagen darüber, WER etwas entschieden hat, tragen
  dieselbe Belegpflicht wie Zahlen — **auch Funktions-/Organbezeichnungen
  (Geschäftsführer, Inhaber) sind belegpflichtige Bestandsaussagen; im
  Zweifel neutral benennen („wir"), verschärft bei Firmen in Gründung**
  (L-46, Fallgeschichte im Register). Auch
  **„bestätigt"/„re-bestätigt"/„unverändert" sind Entwarnungen** mit
  voller Belegpflicht — sie fühlen sich wie Nicht-Aussagen an und
  rutschen deshalb ungeprüft durch. **⭐ Und die Belegpflicht kennt
  keine RICHTUNG: Verbots-/Unzulässigkeits-Aussagen („verstößt gegen",
  „wäre lizenzwidrig") fühlen sich sicher an, WEIL sie streng sind, und
  entgehen genau deshalb der Prüfung, die jede Entlastung durchläuft.
  Ebenso die Entwarnung über die EIGENE HANDLUNG („keine neue Sperre
  dieser Session") — sie entlastet nicht die Sache, sondern die Session,
  und wird am eigenen Delta gemessen, nie an der Erinnerung** (L-45).
  (Sammelvermerk R3.) **⭐ Die Entlastung über den eigenen AUFTRAG
  („das war nie beauftragt") verallgemeinert den eigenen Prompt zum
  Gesamtauftrag** — vor jedem „nicht beauftragt" das Routing-/
  Auftragskapitel der eigenen Quelle erneut lesen; im Belegfall
  widerlegte das Rohstoff-Papier derselben Runde den Entlastungssatz,
  und die Reparatur war Streichen, nicht Abschwächen. (L-31.)
  **⭐ Beim REPARIEREN einer Entwarnung ist der Reflex,
  sie abzuschwächen — richtig ist meist, sie zu STREICHEN:** „es gibt
  keinen Fall" durch „ein Antrag liegt derzeit nicht vor" zu ersetzen ist
  dieselbe unbelegte Behauptung in kleiner. Prüffrage: Ist der schwächere
  Satz jetzt BELEGT — oder nur leiser? (Herkunft: MKT R7, L-17.)
- **Existenz-/Fähigkeits-Negative brauchen die direkte Quelle:** „System X
  kann Y nicht" nie aus Doku-Abwesenheit behaupten — „nicht gefunden" so
  benennen, nicht als „existiert nicht". Negative altern schnell, in beide
  Richtungen. Ein Werkzeug-Negativ misst einen KANAL zu einem Zeitpunkt,
  keine Systemeigenschaft — vor dem Aufgeben eines Weges fragen: Welchen
  Kanal hat das Negativ gemessen, und hätte der Prüfweg einen vorhandenen
  Treffer überhaupt gefunden? Auch ein Negativ aus einer KATEGORIE („diese
  Bauform kann kein X") ist ein Fähigkeits-Negativ ohne Primärquelle.
- **Negativ-Ergebnisse gezielter Recherchen sofort protokollieren** (Datum,
  Methode, Suchumfang) — eine undokumentierte Negativ-Suche existiert nicht
  und muss wiederholt werden. Gilt auch für gestellte, unbeantwortete
  Fragen („gestellt am X, unbeantwortet seit Y").
- **„Nicht prüfbar" ist ein eigenes Ergebnis** und darf nicht zu „keine
  Auffälligkeiten" geglättet werden. **⭐ Und der Abschnitt „nicht
  erhoben / nicht prüfbar" eines PRÜFERS ist die erste
  Nacharbeits-Liste, kein Haftungsausschluss — er benennt Fundorte, nicht
  Grenzen** (L-48). **„Nicht von MIR geprüft" ist kein „ungeprüft"** —
  die Fremdmeldung trägt ihren Lesestand (R17).
- **Recherchen brauchen eine Gegenprobe-Achse**, die die PRÄMISSE des
  Auftrags prüft, nicht nur seine Ausführung. Ein Recherche-Auftrag, der
  bekannte Kandidaten NAMENTLICH nennt, wird zur Verifikation statt zur
  Entdeckung — Vorbefunde gehören in die Ausschlussliste, nie in den
  Suchauftrag. Spiegelfall Einarbeitung: Ein Auftrag mit namentlicher
  Zielortliste macht die Quelle zur Abarbeitung — vorher einmal umgekehrt
  greppen: „Welche Punkte der Quelle nennen MEIN Dokument als Zielort?"
  (Herkunft: R30-D/R31-C.) **⭐ Ein präziser Quellverweis benennt, wo
  man ANFÄNGT, nicht, wo man aufhört:** Quell-Aufträge nennen das
  DOKUMENT als Leseraum und den Abschnitt nur als Einstieg — die
  Nachbar-Rubrik trug den Entscheider, Bau und Prüfer verengten gleich
  (L-34; Fallgeschichte V18-1).
- **⭐ Bewertungs-/Risikodokumente: Ergebnis JE FALLGRUPPE, plus eine
  Liste ausdrücklich GESPERRTER Argumente.** Ein Pauschalurteil zieht
  entweder die tragfähigen Fälle herunter oder deckt das Risiko zu —
  Achsen bilden (hier: Personenbezug × Datenquelle) und je Fallgruppe ein
  eigenes Ergebnis ausweisen, „getragenes Restrisiko" getrennt von
  „zulässig". Dazu die drei naheliegendsten Entlastungen benennen und
  **mit Begründung sperren**: Die plausibelste Entlastung ist die
  gefährlichste, weil die Gegenseite sie mit einem Satz aus ihrer eigenen
  Quelle kippt. (L-28.)
- **Ein Bewertungskriterium gilt für ALLE Kandidaten;** wird es geändert,
  den Bestand rückwirkend prüfen (wer wurde NUR daran aussortiert?). Passt
  ein Raster strukturell nicht, ist „nicht anwendbar" die richtige
  Kategorie, nie der schlechteste Wert. **Vergabelinien je Kriterium
  EXPLIZIT ins Dokument, sobald derselbe Abzugsgrund mehr als einmal
  vergeben wird** — implizite Linien driften bei gleicher Sachlage
  auseinander, und erst das Ausformulieren macht die Inkonsistenz
  sichtbar (Herkunft: MKT R4).
- **Quellenauswertung braucht einen ZWEITEN Durchgang mit umgekehrter
  Frage** („Was sagt die Quelle, wonach niemand gefragt hat?") — durch
  einen Agenten mit frischem Kontext, der den Fragenkatalog NICHT kennt.
  Drei Fang-Kategorien benennen: Fragen des Gegenübers ·
  Prozessbeschreibungen · beiläufige Zusagen des eigenen Sprechers.
  **⭐ Der Gegen-Durchgang ist AUCH fällig, wenn die Quelle bereits
  vollständig im EIGENEN Archiv liegt — Archivierung fühlt sich wie
  Auswertung an** (heyPensio R40).
- **⭐ Zahlen an ihren SCHLÜSSEL binden — eine stimmende Summe ist KEIN
  Zuordnungsbeleg:** vier von sechs Zuordnungen paarweise vertauscht, **die
  Kontrollsumme stimmte weiter** (Register V18-4). Zahlenlisten immer als Tabelle **mit Schlüsselspalte** übernehmen, nie an
  eine Prosa-Reihenfolge gebunden; beim Verdichten aus der Quelle
  **kopieren**, nicht abschreiben. (Herkunft: heyPensio R35.)
- **Zahlen/Preise nie aus einer einzelnen Tabellenzeile übernehmen:**
  Kopfzeile/Fußnoten/Scope mitlesen (netto/brutto, Geräteklasse, Datum),
  vor Vergleichen normalisieren. **Fußnoten/Steuerbasis nie
  QUELLENÜBERGREIFEND ergänzen** — zwei Preisquellen im selben
  Arbeitsschritt vermischen ihre Fußnoten; sagt die Quelle nichts, ist
  „Steuerbasis unbekannt" der Eintrag (Sammelvermerk R6).
  Eine Zahl trägt den Scope ihrer ZEILE,
  nicht den ihres Namens — vor jedem „Widerspruch" die Positionslisten
  BEIDER Zahlen öffnen, **und die Quelldatei von oben lesen: Ein
  Widerspruch ist erst einer, wenn die Datei ihn nicht selbst auflöst**
  (Sammelvermerk R5). Superlative sofort mit Scope einschränken. **Für
  jede Zahl, die in ein Dokument geht, den Zählweg benennen** — gerade
  die plausible Zahl wird nie nachgeprüft.
- **⭐ Ein zusammengesetztes Prüfobjekt wird auch in seinen
  BESTANDTEILEN geprüft (L-53):** Ein Negativ über das GANZE ist kein
  Negativ über seine Teile — der tragende BESTANDTEIL (Kern eines
  Zeichens, Präfix einer ID, Segment eines Pfades) wird separat
  gemessen und am ROHBELEG ausgezählt. **Auch eine NIEDRIGE Trefferzahl
  ist nur eine Lesestelle:** der Kern mit 30 Treffern war belegt, der
  mit 338 frei.
- **⭐ Scheitert eine Such-/Generierungsreihe wiederholt, ist die
  BAUFORM verdächtig, nicht die Menge (L-54):** nicht die Menge
  erhöhen, sondern das funktionierende VORBILD analysieren — nach
  welchem Bildungsprinzip ist es gebaut? Das Prinzip wird zur
  Suchvorgabe, nicht das Thema. Eine Bauform kann als Ganzes
  verbraucht sein.
- **⭐ Ein TREFFER ist eine LESESTELLE, kein Befund** — der einzige
  Treffer eines Musters kann das gesuchte Wort in einer
  durchgestrichenen, aufgehobenen Zeile sein; die Trefferzahl allein
  behauptet einen Beleg. Spiegelbild: **ein Muster mit 0 Treffern sieht
  aus wie ein kaputtes Muster** — ohne Positivkontrolle PRO MUSTER ist
  „Muster stumm" von „Bestand schweigt" nicht unterscheidbar, und beides
  führt zu ENTGEGENGESETZTEN Schlüssen. (Herkunft: heyPensio R43.)
- **⭐ Ein Werkzeug kann eine Regel DOKUMENTIEREN und nur TEILWEISE
  erzwingen** — die Textzusage eines Werkzeugs über sich selbst ist
  keine Messung: prüfen, für welche TEILMENGE die Schranke greift.
  (heyPensio R43.)
- **Eine Zahl, die offensichtlich nicht passen kann, ist ein
  Werkzeugfehler, kein Befund** — erst das Werkzeug prüfen, dann die
  Sache. **Passt EINE Kontrollzahl nicht, ist der ganze LAUF tot** —
  alle Zahlen desselben Laufs verwerfen (R18). Und:
  Schlägt eine Prüfliste an, ist zuerst das PRÜFMUSTER verdächtig
  (veralteter Sollwert), dann das Dokument.
- **Beweismaßstab beidseitig anlegen;** eine Analogie (n=1 bei einem
  anderen Anbieter) ist kein Beleg — als Analogie kennzeichnen oder
  weglassen. Der Befangenheits-Maßstab rutscht systematisch asymmetrisch
  (fremde Selbstauskünfte gekennzeichnet, der eigene Kronzeuge nicht) —
  Prüffrage je eigener Quelle: **„Welchen Vermerk trüge diese Quelle,
  wäre sie ein Fremder?"** (L-04.) Widersprechen sich zwei Quellen und
  die GEWÄHLTE stützt die eigene These, ist zuerst die eigene AUSWAHL
  verdächtig — ein „fraglich"-Vermerk ohne Klärungsauftrag dokumentiert
  die Fehlwahl nur, er verhindert sie nicht (L-09).
- **⭐ Anwesenheit ist nicht Wirksamkeit** — ein Marker-Grep prüft Text,
  kein Verhalten. **Und OFFENLEGEN ist nicht ANWENDEN (L-52): Ein
  beschriebener Befund, der die Auswahl-/Entscheidungsregel nicht
  ändert, ändert nichts — je Kernbefund fragen, welche Regel/Schwelle
  ihn AUSFÜHRT.** Trefferzahl ≥ 2 für jede Konstante, die einen Vergleich
  braucht (Deklaration UND Verwendung); eine Verbotsliste, die nur
  Bekanntes kennt, ist eine Positivliste in Verkleidung; eine
  SCHUTZ-Config ist erst nach AUSSEN-Messung „aktiv" (Beleg ist die
  Wirkung von außen, nie die Config-Existenz). **Und ein Prüfwerkzeug
  kann Entwarnung über eine Datei geben, die es nie gelesen hat** — bei
  jedem Wächter fragen, WELCHEN Text er liest, welchen NICHT — und
  welchen Text der ABLAUF schreibt, den er absichern soll (V17-8). Positivkontrollen über einen
  ANDEREN Kanal (Quelle statt Zieldokument) decken die Blindstelle zu —
  **ein Selbsttest, der denselben Extraktionspfad nutzt, ERBT dessen
  Blindstellen** (L-21). **⭐ Teuerste Form: Der Wächter misst einen
  EXISTIERENDEN, PLAUSIBLEN, für den Betriebsweg aber FALSCHEN Stand**
  (Hook las den git-INDEX statt des ARBEITSBAUM-Stands, den die
  vorgeschriebene Commit-Form schreibt). **Vor der Abnahme eines Wächters den
  abzusichernden Ablauf Schritt für Schritt gegen seinen Messpunkt
  halten; gibt es zwei mögliche Stände, den schärferen nehmen** — und
  **eine fremde Grenzenliste wird VOLLZÄHLIG abgearbeitet, n von n, nie
  in Auswahl** (V17-9).
  **⭐ Ein Prüfling, der zugleich im BELEG-POOL liegt, bestätigt sich
  selbst** — Reichweiten-Erweiterung durch Anhängen an beide Listen macht
  den Kanal **grün und blind**; der Vergleich braucht den Selbstausschluss
  je Zieldatei (R15). **⭐ Eine Wächter-Entwarnung über die EIGENE
  Arbeit setzt die Lektüre seiner Prüfmengen-Konstanten (ZIEL/POOL)
  voraus; das Lauf-Delta wird je Datei zugeordnet, nie pauschal der
  eigenen Arbeit zugeschrieben** (fremde Parallel-Arbeit kann es
  erklären). **Im Parallelbetrieb misst ein
  Arbeitsbaum-Lauf einen WANDERNDEN Stand — der Doppel-Messstand-Vertrag
  gilt auch für Werkzeugläufe** (L-40).
- **Ein Test, der nichts verändert, prüft nichts** — Testaufbauten brauchen
  ihre eigene Positivkontrolle. **⭐ Auch die RÜCKBAU-Gegenprobe braucht
  sie, als ZÄHLUNG „gesetzt: n von m"** (Sammelvermerk R9) — **und ihr
  MESSKRITERIUM kann selbst ein Anwesenheits-Kriterium sein**
  (heyPensio R49-E).
  **⭐ Und sie ist erst belegt, wenn der ZIELZUSTAND eintrat und der Lauf
  durchlief** (sonst: grün trotz Defekt) — der künstliche Defekt ist der
  VOLLSTÄNDIGE Rückbau, wer Fix UND Wächter zugleich baut prüft auch
  OHNE den Wächter, und die Messbedingung gehört als eigenes Kriterium
  IN den Lauf (V20-7). **Eine grüne Testzahl belegt
  nichts — nur die Rückbau-Gegenprobe belegt, dass die Tests den Fund
  fangen** (Fix in Wegwerf-Kopie zurückdrehen, prüfen ob die Suite es
  merkt). **Und ein Selbsttest, der die zu prüfende ZUSAMMENSETZUNG
  selbst nachbaut, prüft sie nicht: Test und Produktivpfad müssen
  DIESELBE Funktion aufrufen.** (heyPensio R33.)
- **⭐ Ein Drift-Check vergleicht ERZEUGTES gegen ERZEUGTES und ist gegen
  ERZEUGUNGS-Fehler blind — jede Generator-Kette braucht zusätzlich eine
  Prüfung des ERGEBNISSES** (V19-2). Pflichtform: eine Syntax-/
  Ladeprüfung über jeden erzeugten Baustein des FERTIGEN Artefakts —
  nicht über die Quelle, nicht über den Zwischenstand. **Wo ein Werkzeug
  seinen eigenen Prüfgegenstand herstellt, ist die einzige unabhängige
  Instanz das Ergebnis.** (Herkunft: heyPensio R36.)
- **⭐ Ein Wächter wird über die GANZE Prüfmenge belegt, nicht an einem
  Exemplar — und der ERFOLGSFALL gehört vor der Auslieferung einmal
  durchgespielt** (Belegfälle V19-3). **Ein Prüfwerkzeug, das
  den Erfolgsfall nicht kennt, ist keins.** (heyPensio R36.)
  **⭐ Hat das Werkzeug mehrere MODI, hat jeder seine eigene
  Erfolgsbedingung** — ein Selbsttest, der „4 gemeldet" erwartet, ist
  unter der Hauptlauf-Bedingung „0 gemeldet" nie grün und meldet
  ausgerechnet nach geglückter Arbeit rot (Sammelvermerk R9).
- **⭐ Wer eine Reparatur DOKUMENTIERT, verändert den Prüflauf.** Der
  Reparaturvermerk zitiert die alte Fassung — und erzeugt ein „Zitat",
  das per Konstruktion nicht in der Quelle stehen kann. Nach jedem
  Reparaturvermerk das Prüfwerkzeug laufen lassen und die Ausnahmeliste
  IM SELBEN ZUG ergänzen (je Eintrag mit Begründung). Zitate aus Quellen
  AUSSERHALB des Prüfpools kann das Werkzeug nie bestätigen — sie als
  Ausnahme führen UND ausweisen, wer sie stattdessen verifiziert hat,
  sonst wird die Ausnahmeliste zur Ausrede. (L-26, drei Belege.)
  **Gilt auch für die eigene Selbstwiderspruchs-Probe: Eine Probe, die
  eine Reparatur AUSLÖST, ist danach veraltet — nach der Reparatur
  erneut laufen lassen, Zahlen mit Commit-Hash statt „nach den Edits"
  (MKT R14).**
  **⭐ Zwei Schärfungen (MKT R13): (1) Ein Dokument, das seinen eigenen
  Wächter-Stand dokumentiert, veraltet durch genau die Edits, die der
  Wächter prüft** — der Stands-Nachtrag am PRÜFGEGENSTAND gehört in
  denselben Zug wie der Edit, nicht ins Abschlussprotokoll. **(2) Die
  Wächter-BASELINE vor den Edits ziehen:** Erst der Vorher-Lauf macht
  das Nachher-Delta zuordenbar („genau n neue Meldungen, alle erklärt").
- **⭐ Ein Positivkontroll-Anker gehört in den STABILEN Teil einer Datei,
  nie in einen rotierenden Abschnitt.** Ein Anker aus einem
  Runden-Stand-Block wandert mit der vorgeschriebenen STATUS-Rotation ins
  Archiv — die Kontrolle fällt aus, ohne dass am Prüfgegenstand etwas
  kaputt ist (10/11). Erst
  das Prüfmuster verdächtigen, dann das Dokument. Ebenso: **eine
  Ausnahmeliste zählt EINTRÄGE, nicht Fundstellen** — dieselbe Vorfassung
  darf an zwei Stellen zitiert sein; die Gegenrichtung („verwaister
  Eintrag, kommt nirgends mehr vor") gehört als eigene Ausgabe dazu.
  (Sammelvermerk R9.)
- **⭐ Ein Zitatabgleich prüft, was als Zitat MARKIERT ist — nicht den
  Fließtext daneben.** Normbegriffe, Absatz-/Rn.-Angaben und
  Rechtsfolgen im Fließtext sieht
  kein Extraktor (4/5 gefangen, die fünfte war Fließtext). Wer ein solches
  Werkzeug einsetzt, schreibt ins Dokument, was es NICHT prüft — sonst
  liest sich „116/116 bestätigt" als Vollprüfung. (L-27.)
- **Vor jedem Passwortwechsel/jeder Credential-Rotation prüfen, WER das
  Credential aktiv nutzt** — fremdgenutzte Zugangsdaten nie im Alleingang
  rotieren; Automations-Secrets von vornherein in EIGENE Postfächer/
  Konten trennen (noreply-Muster). (Herkunft: heyPensio R33, User-Fang.)
- **⭐ Secret-Rotation ist eine KETTE, kein UI-Klick** (Herkunft:
  heyPensio 0s5, vier Rotationen an einem Abend): (a) Neuer Wert direkt
  in den Passwortmanager — nie Chat/Doku/Repo; auch credential-NAHE
  Werte (Hashes, URLs mit Token) zählen als Werte; landet doch einer im
  Chat, wird neu gewürfelt. (b) Config-/Workflow-Träger referenzieren
  das Secret per **Env-Ausdruck statt Rohwert**; bei Haupt-/Worker-
  Architekturen die Variable in ALLEN Containern belegen, geprüft per
  maskiertem Längenvergleich, nie per Wert-Ausgabe. (c) Die Rotation
  endet mit der **SOFORTIGEN Nachmessung „alter Wert tot"** (Umschlag am
  Objekt + Positivkontrolle mit erfundenem Wert) — **ein „Zurücksetzen"-
  Klick in einem UI-Teilformular ist erst mit dem Formular-Save
  wirksam.** (d) Die stärkste Rotation eines UNGENUTZTEN
  Zugangs ist sein Abschalten — dann gibt es nichts mehr zu verwahren.
- **Versionssprünge der EIGENEN Systeme kippen eigene
  Capability-Negative** genauso, wie Anbieter-Negative altern (Herkunft:
  heyPensio 0s5; ergänzt die „Negative altern"-Regel): Ein „Feature X
  ist unbrauchbar"-Verwurf galt einer Version — das Major-Update trug
  ein völlig neues Modell desselben Features. Vor der Wiederverwendung
  eines eigenen Verwurfs die Versionslage am System prüfen; die Antwort
  auf einen Nutzungswunsch ist dann eine Neubewertung, kein Zitat des
  Alt-Verwurfs.
- **⭐ Bei einer Schwachstelle über KANÄLE lautet die Frage nicht „ist der
  Kanal dicht?", sondern „sind es ALLE Kanäle derselben Klasse?"** Ein
  Papier kann genau die Lücke lassen, die seine eigene Erfolgsprüfung
  unsichtbar macht (Belegfall Register V18-2) — **die Erfolgsprüfung
  fragt jeden Kanal EINZELN ab.** **Schwesterregel (Werkzeug-Seite): Klärt ein
  Messwerkzeug eine Prämisse, sofort fragen, welche NACHBAR-Prämisse es
  mitklärt** (V17-12). **⭐ UND DAS GEGENMITTEL IST SELBST OFT EINE LISTE
  — dort bricht die Regel ein zweites Mal:** die wichtigste Leck-Klasse
  war ein Parameter, keine Route, für einen Namensfilter strukturell
  unauffindbar. **Wer gegen „Liste statt Zustand" baut, prüfe zuerst, ob
  sein Gegenmittel eine Liste ist** — und messe die Sammel-Schnittstellen
  einzeln (V17-13).
- **⭐ Was nur als BILD vorliegt (Fotos, Vor-Ort-Eindruck, Screenshare),
  wandert nicht von selbst in Text — und was nicht im Text steht, kann
  erfunden werden und von KEINEM Prüfer widerlegt werden.** Ein Prüfweg
  kann nur schlagen, wo eine Soll-Aussage existiert (Belegfall Register
  V18-3). **Bevor Bildwissen in einen außenwirksamen Text
  einfließt, wird es als Ist-Beschreibung im Repo festgehalten** (mit Quelle
  und Datum). (Herkunft: heyPensio R35, User-Fang.)
- **⭐ Personenbezogene Daten NIE in eine versionierte Repo-Datei** —
  die Git-Historie ist unwiderruflich, Löschen repariert sie nicht
  (`sensibel/` oder externer Träger). **Wer ein BETRIEBSWERKZEUG baut,
  liest die TOM-/Ablage-Zeile der Quelle als Anforderung an SICH SELBST,
  nicht als Zulieferung an einen anderen Strang** — genau diese
  Fehllesung stellte eine Repo-Tabelle als Erstform für einen
  Sperrbestand bereit (L-44). **Und ein Gate schützt nur den Pfad, auf
  dem es liegt:** prüfen, ob der Fall auch DAVOR entstehen kann (ein
  Sperrfall entsteht ohne Versand, also vor jedem Versand-Gate).
- **Sicherheits-Regeln:** Den leeren Zustand GETRENNT behandeln
  („Weglassen" ist der leere Zustand; „Weglassen" und „Wiederholen" sind
  dieselbe Operation). Nach jeder geschlossenen Fehlerklasse fragen, wie
  dieselbe Klasse eine Ebene höher aussieht. Schutzbausteine sortieren
  nach GRENZE (wer darf?) vor DECKEL (wie viel?) — nur Grenzen halten
  Unberechtigte auf. Ein Wächter darf seine eigene Beweisquelle nicht
  beschreibbar machen; ein Wächter, der beim gewöhnlichen Fall rot wird,
  wird abgeschaltet — Positivkontrolle IN den Wächter einbauen. **⭐
  Dauer-Rot ist ein Konstruktionsfehler, kein Befund** (MKT R15,
  Register): zulässig sind **Modus-Trennung**
  (Bestands-Altlast vs. neue Verstöße) **oder Pool-Erweiterung mit
  Nenner — unzulässig ist, die Fundmenge in die Ausnahmeliste zu
  schieben.** Bei
  gekoppelten Sicherheits-Umbauten ist die REIHENFOLGE das
  Sicherheitsmerkmal — Kriterium ist der Zwischenzustand. Nach jeder
  Alarm-Unterdrückung fragen: Woran merkt jetzt noch jemand, dass es
  läuft? (Positiv-Beleg je Lauf, nicht weicherer Alarm.)
- **⭐ Eine frisch geschriebene oder gerade angewandte Regel schützt den
  Text, auf den man sie anwendet — nicht den, den man dabei schreibt
  (L-49).** Der BESTAND wird im selben Zug rückwirkend gegen sie
  durchsucht, beginnend mit dem auslösenden Artefakt — **und der eigene
  Reparatur-/Begründungstext desselben Commits zuerst** (Belegfälle
  im Register; R17: vier weitere). Wer „n/n bestätigt" schreibt,
  schreibt dazu, was das Werkzeug NICHT prüft.
- **⭐ Wer einen Satz kippt, kippt seine FOLGESÄTZE (L-51).** Nach jeder
  Streichung, Widerlegung oder als unbelegt erkannten Prämisse ist der
  Suchraum nicht das WORT, sondern die SÄTZE, DIE AUF IHM STEHEN —
  Folgefragen, Begründungen, Zeiger, eigene Prompts. **Die Suchmuster
  kommen aus der SACHE (Folge-Logik), nie aus dem gekippten Vokabular:
  ein Muster, dessen Treffer alle in der Reparaturstelle liegen, ist ein
  Warnsignal, kein Negativ** (R18: sechste Ein-Gate-Stelle in anderen
  Worten unsichtbar). L-25 regelt die Ableitung zwischen Dateien, L-51
  die Schlussfolgerung im selben Text (Belegfälle R17/R18 im Register).
- **Ein geklonter Textbaustein transportiert die Entwarnung des Originals
  in einen Zustand, in dem sie nicht mehr gilt** — nach jedem Klonen jeden
  Satz gegen den NEUEN Zustand prüfen, nicht nur die Variablen.
- **Freigaben:** Setzt der Freigebende selbst ein Delta, ist es nicht von
  seiner Freigabe gedeckt. Zusagen im ORIGINALWORTLAUT zitieren (nie
  umformulieren, nie paraphrasieren); Änderungen als sichtbarer Nachtrag.
  **Jedes als wörtlich gesetzte Zitat trägt seinen Anker an der
  ROHQUELLE, nicht am Verdichtungsbericht** — sonst ist es für jeden
  Prüfer ein Pseudo-Zitat (L-01).
  Bei n Deltas jedes gegen jedes prüfen (n·(n−1)/2 Paare). Jeder
  ✅-Vermerk trägt Quelle + Datum + Form; die Erhebungsquelle wird
  archiviert (`sensibel/`). Erteilte/vorgelegte Freigabe-Texte nie
  nachträglich umschreiben — markierter Nachtrags-Kasten, Original bleibt
  sichtbar.
- **Ein Entscheid mit SCHUTZWIRKUNG ist erst wirksam, wenn er technisch
  umgesetzt ist** — den technischen Träger im selben Zug anlegen; ein
  Papier-Entscheid ohne Mechanismus erzeugt nur das Gefühl von Sicherheit.
  Haltungsregel des Users (wörtlich, 29.07.2026): **„Wir nehmen
  Fehlschläge nie in Kauf, wenn wir sie auch ausmerzen können."** Die
  einzig zulässige Rückfrage betrifft das WIE, nicht das OB.
- **⭐ Bei fehleranfälliger Fern-Reparatur:** Existiert ein einfacher,
  reversibler RÜCKBAU mit bekannten Kosten, steht er ab dem ERSTEN
  Fehlversuch als gleichrangige Option neben dem Reparaturweg.
- **Vor Absicherungs-Mechanismen prüfen: Ist der Vorgang bemannt,
  unbemannt oder fernbedient?** Technik gegen ein Problem, das die
  Anwesenheit eines Menschen löst, ist derselbe Fehler wie eine
  Betriebsregel gegen menschliches Verhalten. „Fernbedient" heißt
  handlungsfähig trotz Abwesenheit — trägt aber NICHT bei stromlosem
  Betriebsmodell. Fremde Best-Practice-Regeln tragen stille Prämissen —
  vor der Übernahme die Prämisse gegen die eigene Architektur prüfen.
- **Neue Modul-/Produktideen erst gegen die Projektquelle greppen**
  (geparkte Module!), bevor sie als neu behandelt werden. Die Prüfung ist
  ZWEISEITIG (eigener Bestand UND Angebot des Drittsystems); Trigger ist
  „neu ODER ent-parkt ODER beauftragt". Vor Workarounds um ein Drittsystem
  erst dessen Erweiterungspunkte an der Quelle prüfen.
- **Neue Module: Workflow-First oder Code-First?** Zählt der ABLAUF →
  Workflow-Werkzeug; zählt die LOGIK → Code, Orchestrierung außen. Wer
  eine bestehende Komponente „unverändert" wiederverwendet, liest ihre
  komplette Liste und zählt ALLE Seiteneffekte auf — „unverändert" ist
  eine Aussage über Code, nicht über Wirkungen. Gilt auch in der
  LÖSCH-Richtung (Mengenangabe im Bereinigungsauftrag ist Hypothese).
- **Eine AKTUALISIERUNG erbt nicht nur Daten, sondern den ZUSCHNITT der
  Vorgängerarbeit.** Vor „Stimmen die Werte noch?" steht die Frage
  „Stimmt der AUSSCHNITT noch?"; der geerbte Geltungsbereich gehört als
  sichtbare Geltungsgrenze ins aktualisierte Dokument (L-10).
- **Vorläufige Werte in Systemen sind sprechende Platzhalter, nie
  plausible Dummys** — und die Vorläufigkeit gehört ins System selbst
  (sichtbarer Warn-Text), nicht nur in die Doku.
- **Erhebungs-/Formulardokumente:** „Ändert die Antwort, was wir tun
  DÜRFEN — oder nur, was wir WISSEN?" Was die Rechtslage ändert
  (Einwilligung, Freigabe), braucht einen eigenen bewussten Akt und darf
  nicht zwischen Sachfragen stehen.
- **Geführte Entscheidungs-Durchsprachen:** Fachkürzel erst in einem Satz
  Klartext erklären, dann die Frage. Freitext-Antworten VOLLSTÄNDIG
  auswerten — sie tragen oft Entscheide zu anderen Punkten huckepack.
- **Verhandlungs-Informationshygiene** → Baustein `aussenkorrespondenz`;
  **AVV-/DSB-Pflichtprüfpunkt** (Newsletter-/Analytics-Tools SIND
  Auftragsverarbeiter) → Baustein `freigabe-vorlagen`. *(Zeiger seit
  R16, Dubletten-Regel.)*
- **Prüffrage vor jedem Versand an einen Entscheider:** Welcher Satz
  würde seine Antwort ändern, wenn er ihn läse — und steht er drin? Die
  unbequeme Grenze gehört in die Vorlage, nicht in Fußnoten.
- **Zeitkritisches (Deadlines, Urlaubs-/Abwesenheitsfristen von
  Ansprechpartnern) sofort als DRINGEND in mehrere Leserichtungen
  eskalieren** (Terminposten + Tagesplan + User-Zuruf), nie still
  dokumentieren.
- Automatisierte Loops nie ohne vorher definierte Abbruchbedingung und
  Kostendeckel. Browser-/Live-Aktionen nur im Rahmen des Session-Auftrags.
- Vorgefundene uncommittete Arbeit im eigenen Scope nie blind committen —
  wie eigene Arbeit gegen die Quelle verifizieren.
- Ideen für spätere Module explizit parken, nicht nebenher bauen.
  Wiederkehrende, kapselbare Muster als Skill-Kandidaten flaggen.
- Plan Mode vorschlagen, wenn der anstehende Schritt rein analytisch ist.
- **KEIN Memory-Store:** nichts ins persistente Claude-Memory schreiben —
  Regeln und Wissen gehören in CLAUDE.md, Projektquelle oder STATUS.md.

## Doku-Hygiene

- **⭐ Nach einem BAU gehört ein RÜCKFLUSS ins PLAN-Dokument:** Der Bau
  erzeugt Plan-Pflichten (im Bau entstandene Vorbedingungen, neue
  Gates), nicht nur Protokoll-Zeilen; ein vorläufig verdrahteter
  offener Entscheidungspunkt wird im Plan als „GEBAUT, NICHT
  ENTSCHIEDEN" markiert — die Verdrahtung ist keine Freigabe.
  (heyPensio R50.)
- **Vorwärtsverweis-Konvention:** Kippt ein neuer Stand eine ältere
  Festlegung, bekommt die ALTE Stelle im selben Zug einen Vorwärtsverweis
  („überholt durch X") — an der Stelle, wo der Leser ANKOMMT, nicht im
  Changelog.
  **⭐ Die dritte Kategorie neben Kippen und Ergänzen heißt ERFÜLLEN:**
  Wer einen Offen-Posten schlicht erfüllt, liest sein Ergebnis nicht als
  Änderung an fremdem Text und fasst die Stelle nie an — die Zeile bleibt
  stehen und wird von der nächsten Ebene KORREKT zitiert, die daraus
  einen gegenstandslosen Auftrag schneidet. **Pflichtform: Wer einen
  benannten OFFEN-Posten erfüllt, schließt ihn an seinem TRÄGER;** darf
  eine Session den Träger nicht anfassen (Wahrheits-Kanal), ist
  **„welchen benannten Posten erfüllt mein Ergebnis?" Pflichtfeld ihrer
  Abschlussmeldung.** Auslöser ist die Rotation des Kurz-Einstiegs, nicht
  der Kalender (V17-10). **Gegenrichtung: Eine AUFGEWORFENE Frage, die
  nicht als Entscheidungspunkt GEFÜHRT wird, existiert für die
  Folgearbeit nicht** — fünf Folgerunden schlossen die Antwort per
  Konstruktion aus (Sammelvermerk R20).
  **⭐ Und die GEGENRICHTUNG, die dabei regelmäßig ausfällt: Wer eine
  QUELLE schärft, zieht im selben Zug die daraus ABGELEITETEN Dokumente
  nach.** Der Suchraum ist dann nicht „wo steht der alte Wert?", sondern „wer hat aus dieser Datei abgeleitet?" (grep auf
  den Dateinamen übers Repo), geprüft wird die ANKUNFTSSTELLE, nicht der
  Changelog — die Klasse ist zäh, weil beide Dokumente für sich korrekt
  aussehen (L-25). **Spiegelrichtung: Wer in einer ABLEITUNG eine
  Quellen-Angabe präzisiert, zieht die QUELLE im selben Zug nach — sonst
  kehrt die Vorrangklausel („bei Widerspruch gewinnt die Quelle") die Präzisierung wieder um** (MKT R12, P-04).
  Nachtrags-Ketten auch rückwärts pflegen. Nach jeder
  Richtungsentscheidung die betroffenen Alt-Dokumente durchgehen —
  ausdrücklich auch gemeinsam genutzte KALKULATIONSZEILEN in fremden
  Rechnungen, nicht nur thematisch betroffene Dateien — **und die abhängigen Dokumente in NACHBAR-REPOS: der
  Suchraum des Nachziehens ist die FIRMA, nicht das eigene Repo**
  (V17-11). Diese Prüfung ist AUSLÖSER-gebunden (beim Entscheid selbst),
  nicht ritual-gebunden — sie darf nicht auf den nächsten Debrief warten. Nach dem Einarbeiten nach den GEKIPPTEN WERTEN
  greppen (übers ganze Repo, auch über Dokumente, die es beim Melden
  noch nicht gab), nicht nach dem Thema. Vor jedem „das wurde bisher
  nirgends gesagt" ein grep auf die EIGENE Datei. Eine
  ÜBERHOLT-Markierung ist ein Blankoscheck zum Weglassen — positiv
  auflisten, was NICHT überholt ist, und die Neufassung dagegen prüfen.
  Freigaben/„darf-bleiben"-Einstufungen tragen einen Geltungsvermerk
  (Empfängerkreis + Stand).
- **⭐ Eine Regel- oder Text-DUBLETTE über Dateigrenzen ist nur in
  genau zwei Formen zulässig** (Architektur-Prüflauf 11.08.2026,
  eingezogen 12.08.): (a) mit WÄCHTER (automatischer Kopien-Abgleich,
  wie die `.claude\rules\`-Kopien via `pruefe-kopien.js`) oder (b) mit
  ausdrücklicher VORRANGKLAUSEL im Text („bei Widerspruch gewinnt X",
  wie STATUS.md ↔ Projektquelle). Alles andere wird ZEIGER. Prüffrage
  beim Anlegen jeder zweiten Fundstelle: Wer merkt es, wenn die beiden
  auseinanderlaufen?
- **In Doku-Verweisen keine Zeilennummern**, sondern Abschnitts-/
  Überschriftsbezug — Zeilen-Anker altern, auch in Markdown-Nachbarn und
  innerhalb einer Runde. Wo nur Zeilen möglich sind: mit Commit-Stand
  (`@<hash>`). **Das gilt auch für VERIFIKATIONSVERMERKE:** „Quelle
  vollständig gelesen, 856 Zeilen" war zum Lesestand korrekt und wurde
  allein durch den eigenen späteren Nachtrag falsch — ein Belegstand
  gehört als Commit-Hash ins Dokument, nie als Zeilenzahl
  (Sammelvermerk R9).
- **Kalender-Etiketten (Wochentage zu Datumsangaben) und UHRZEITEN nie
  aus dem Kopf** — immer per Werkzeug (`Get-Date`/`date`) erheben;
  analog Modellnamen (L-07; R17).
- **Vor der Vergabe neuer Kurz-IDs die Kurzzeichen der Nachbardokumente
  greppen** (Kollisionen doppelt belegt). ID-Anker brauchen Rundenbezug.
  **⭐ Dreifach-Beleg an einem Tag (MKT R12, L-35): Auch
  NEBENBEFUND-Nummern aus Abschlussmeldungen (N-1…) und SACHSCHLÜSSEL
  (S1…) kollidieren dokumentübergreifend** — Nebenbefunde wandern nur
  MIT Rundenpräfix in den Wahrheits-Kanal (`R12A-N-1`);
  Sachschlüssel-Namensräume je Domäne trennen (Terminpfad-Stufen ≠
  Preisschlüssel); die Kollisions-Suche trägt eine Positivkontrolle mit
  einem unabhängig BEKANNTEN Kollisions-Sollwert.
- **⭐ Ein Edit-Anker, der eine Überschrift oder den ANFANG der
  Folgezeile konsumiert, löscht bzw. zerlegt sie still** (MKT R13, zwei
  Sessions unabhängig — Fälle unter L-38). Beim Einfügen VOR Bestandstext
  den Anker so schneiden, dass Überschrift/Folgezeile im Ersetzungstext
  vollständig wiederkehren, die Nahtstelle danach neu lesen. **Prüf- und
  Nachweismittel ist die LÖSCHUNGSZÄHLUNG** (`git diff --numstat`, jede
  gelöschte Zeile einzeln) — „0 Löschungen im Abschnitt" ist zugleich
  der mechanische Beleg, dass überstimmte Passagen ungeglättet stehen
  blieben. **Sie braucht ZWEI Nenner: gegen den RUNDENSTART (0 beweist
  „kein Bestandstext angetastet") und gegen den eigenen BAU-COMMIT (zeigt
  die eigenen Reparaturen)** — ein einzelner Nenner verschweigt entweder
  Arbeit oder suggeriert Löschungen an fremdem Text. **Gegen die
  EINFÜGE-Variante ist sie blind:** eine fehlende Leerzeile zieht per
  Markdown-Fortsetzung Folgetext in ein Blockzitat — die Nahtstelle
  als STRUKTUR lesen (Leerzeilen, Einrückung), nicht nur als Text.
  (L-38, R15; Einfüge-Variante R18.)
- **⭐ Eine KONDITIONALE Warnung altert lautlos.** „Wird der Termin
  verlegt, ist dieses Datum eine alte Zusage" ist korrekt formuliert und
  trotzdem wirkungslos, sobald die Bedingung eintritt — niemand prüft die
  Bedingung nach. Eine Warnung mit Bedingung braucht einen TERMIN oder
  einen PRÜFSCHRITT, sonst ist sie ein Papierzustand; die Suche nach
  ihren Folgen läuft über den gekippten WERT, nicht über das Thema.
  (Herkunft: heyPensio R43.)
- **⭐ Ein FIX kann eine VORBEDINGUNG erfinden** („gehört in den
  Team-Speicher" setzt ein Konto dort voraus). „Text nachziehen" und
  „Blocker setzen" trennen: Nach jedem Fix prüfen, ob er eine neue
  Vorbedingung erzeugt — sie zu SETZEN ist nie Teil des
  Reparaturauftrags, sondern wird mit beiden Lesarten vorgelegt.
  (Herkunft: heyPensio R43.)
- **Drift-Vorsorge bei AUSLÖSER, nicht nach Kalender:** Commit einer
  Doku-Änderung · Richtungsentscheid · neues Dokument · Freigabe.
  Baselines nie anheben, um einen Lauf grün zu bekommen.
- Ein neues Bewertungskriterium quer zum Raster erzeugt sofort
  Widersprüche im eigenen Dokument — nach dem Einbau jede vorhandene
  Aussage dagegen prüfen; das ist mehr Arbeit als das Kriterium selbst.
- Weichen zwei Messläufe voneinander ab, ist im Multi-Session-Betrieb
  zuerst das REPO verdächtig (parallele Commits während der Messung) —
  Bestand einfrieren (Commit-Hash notieren), Lauf wiederholen.
  Doppel-Messstand-Vertrag: Hash zu Beginn UND vor dem Commit erheben —
  und NACH dem Commit den Parent gegen den Prüfstand halten (R16: nur an
  der Push-Ausgabe sichtbar).
- Repo-weite Textsuchen immer mit Include-Filtern
  (`grep --include="*.md"`) — Binärbestände sprengen sonst Timeouts.
- **Rohbelege gehören in den Ordner IHRER Runde** (`sensibel/rohbelege-R<n>-<S>/`)
  — wer neue Abzüge in den Ordner einer FRÜHEREN Runde legt, lässt jede
  Bestandszahl still altern, die je über diesen Ordner erhoben wurde
  (L-20).
- **⭐ Eine Trennungs-/Unabhängigkeitsregel bestimmt den ABLAGEORT ihrer
  Belege mit** (V19-4): Wer anordnet, dass eine prüfende Instanz nicht
  ins geprüfte Repo schreibt, sagt im selben Zug, wohin ihre
  Beweisstücke gehören. **Prüfschritt je Debrief: die Ebene ÜBER den
  Repos auflisten, jeden Nicht-Repo-Ordner begründen.**
- **Kurz-ID-Kollisionen: das grep läuft ZUERST im eigenen Dokument.** Die
  Regel nennt die Nachbardokumente — vergeben wurde `P22` doppelt innerhalb
  derselben Datei. Der billigste Suchraum ist der nächste. (MKT R7.)
- **⭐ Reparaturen und Vorfassungs-Fehler SICHTBAR machen, nicht still
  glätten** (zwei Sessions unabhängig, MKT R7): Jede geänderte Stelle
  trägt, was vorher dastand und warum es fiel — als markierter Kasten,
  nicht als stille Neufassung. Das kostet Zeilen und ist der einzige
  Grund, warum ein Prüfer überhaupt findet, welcher Prüfweg gegriffen hat
  und welche Sätze ohne ihn heute falsch dort stünden. In R7 fand der
  Prüfer eine übersehene Befundlücke und eine ID-Kollision genau daran.
- **Ein `|` im Fließtext einer Markdown-Tabellenzelle zerlegt die Zeile** —
  in Tabellenzellen maskieren (`\|`) oder umformulieren (MKT R7,
  Belegfall im Register).
- **Läuft zu einem Dokument noch Recherche, trägt es einen SICHTBAREN
  Vorbehalt — oder der Commit wartet.** Ein committetes Dokument ohne
  Vorbehalt liest sich als fertig; im Multi-Session-Betrieb baut die
  nächste Session darauf auf. (MKT R7.)

## Sensibel-Ablage

`sensibel/` (git-ignoriert, in `.gitignore` ab Tag eins) für alles, was
nicht ins Repo darf, aber nicht gelöscht werden soll: Roh-Transkripte von
Gesprächen (§ 201 StGB — ins Repo kommen nur extrahierte Sachergebnisse
mit Datum + Quellenvermerk), persönliche Rahmenbedingungen Beteiligter,
Freigabe-Erhebungsquellen. **Löschen ist keine Alternative** — eine
Quelle, die man nur begrenzt vorhalten darf, verträgt keine
Einmal-Extraktion gegen einen Fragenkatalog (der zweite Lesedurchgang
braucht das Original). Bei Struktur-, Rechtsform-, Steuer- und
Finanzierungsthemen ist die ERSTE Handlung eine Rückfrage nach den
persönlichen Rahmenbedingungen ALLER Beteiligten — die Antworten gehören
hierher, nicht ins Repo.

## Werkzeug-Disziplin

- **Existiert ein Command/Skill für die anstehende Aufgabe, wird er
  INVOKED — nicht aus dem Gedächtnis nachgespielt.** Je vertrauter der
  Ablauf, desto größer die Versuchung.
- **Regeln, deren Verletzung teuer ist, gehören in den auto-geladenen
  Kanal** (CLAUDE.md) — Skills bleiben richtig für ABLÄUFE; die auslösende
  Kernregel gehört zusätzlich hierher.
- Ein Command kann gegenüber CLAUDE.md veralten — bei Widerspruch gewinnt
  CLAUDE.md, und der Command wird im selben Zug korrigiert.
- Skill/Command in DIESER Session editiert? Der Invoke zeigt bis zur
  nächsten Session die ALTE Fassung (Snapshot beim Start) — Stand auf
  Platte per grep prüfen. Dasselbe gilt für MCP-Connectors: Der Tool-Pool
  wird beim Session-Start festgelegt; fehlt ein Connector →
  `claude --continue` (bzw. bei parallelen Sessions `claude --resume`).
  ⚠️ **EINSCHRÄNKENDE settings-Änderungen wirken dagegen SOFORT auf die
  laufende Session** — deny-gelistete Tools verschwinden ohne Neustart
  aus dem Pool, und ein neu registrierter PreToolUse-Hook greift beim
  nächsten Tool-Call (Commit-Probe real geblockt). Der Snapshot gilt nur
  fürs HINZUFÜGEN, nicht für einschränkende Änderungen;
  Wirksamkeits-Beleg einer deny-Baseline ist das beobachtete
  Verschwinden aus dem Pool, nie ein Test-Call auf ein Schreibtool;
  der Baseline-Abgleich läuft NAME gegen NAME, nie über die Anzahl
  (heyPensio R49).
  (Herkunft: heyPensio R39 deny + R42 Hook-Registrierung, Nachzug
  R11/R14.)
- Multi-Agent-Workflows nach Abbruch nie neu starten, sondern resumen
  (`resumeFromRunId`) — ein Neustart verbrennt das bezahlte Ergebnis.
  Gilt auch für abgebrochene PRÜF-Subagenten: aus dem Transkript
  fortsetzen („zuerst schreiben, Unfertiges als unfertig kennzeichnen";
  L-22).
- Der Debrief arbeitet aus den ORIGINAL-Abschlussmeldungen, nie aus der
  eigenen Merkliste — und bewährte Muster zählen wie Fallen.
- Sicherheits-Klassifikator-Blockaden sind ein Betriebszustand: nie
  umgehen, sondern melden; wirksame Antwort ist, den ZUSCHNITT zu ändern
  (Secrets von vornherein serverseitig halten). Vor geplanten
  Interventionen alle Nachmessungen VORHER ziehen (ein blockierter
  Schreibcall kann den ganzen Kanal schließen). Die Blockade trifft auch
  KETTEN aus erlaubten Einzelbefehlen (vor dem Melden zerlegen) und ist
  PRIMÄR zeitpunkt-/kontextgebunden, nicht kanalgebunden — ein
  Kanal-Negativ nie als Dauer-Zustand dokumentieren; Kanalwechsel ist ein
  VERSUCH, kein Mechanismus; ein A/B über zwei Kanäle trägt die
  Falsifikation, nie den Ursachennachweis (L-05, 16 Belege — Historie
  im Register).

## Aktivierte Bausteine

- `windows-powershell` — Windows-/PowerShell-5.1-Fallen dieses Rechners.
- `aussenwirksame-texte` — Marketing produziert fast ausschließlich Außenwirksames.
- `gmail-mcp` — Mail-Recherche und Entwürfe über den Gmail-Connector.
- `browser-automation` — Registrar-/Social-/Verzeichnis-Prüfungen im Browser.
- `quellen-beschaffung` — Markt-, Rechts- und Wettbewerbsquellen sauber beschaffen.
- `aussenkorrespondenz` — Anbieter-/Partner-/Behörden-Anfragen: Kanal-/Zeitpunkt-Prüfung, Entwurf-im-Repo-Workflow.
- `freigabe-vorlagen` — Freigabedokumente für Laien-Entscheider (Gesellschafter, Kunden): Struktur, Kanon-Texte, AVV-Prüfpunkt.
- `skill-bauweise` — Skills/Commands methodisch bauen (Reverse-Engineering-Reihenfolge, Simplicity-Doktrin); aktiviert im M1-Nachzug (User-Entscheid 11.08.2026).
- `regelwerk-waechter` — **PFLICHT (Firmen-Entscheid 17.08.2026):** Größen-Messgerät `tools/pruefe-budget.js` + Commit-Türsteher `.claude/hooks/pruefe-claudemd-budget.js` (Warnung ab 85.000 B, Blockade des CLAUDE.md-Commits ab 90.000 B, fail-closed; Sollmarke 80.000 B → Kompensationspflicht je Debrief). Marken selbst erhoben (Tagesplan 17.08.), nie kopiert; Textregeln in der Rules-Kopie.

*(Bausteine sind optionale Regelmodule aus dem projektgerüst-Repo —
`vorlage/bausteine/`. Nicht aktivierte Bausteine bei Bedarf per
`/projekt-init nachzug` nachrüsten. **⭐ Ein nicht aktivierter Baustein
ist keine Schlank-Entscheidung, sondern eine offene Falle, sobald das
Projekt die Werkzeugklasse täglich benutzt** — Prüffrage bei jedem
Nachzug: „Welche Werkzeugklasse benutzt dieses Projekt täglich ohne
den zugehörigen Baustein?" [Stand 21.08.: 8/8 Rules-Bausteine + Skill
`design-dna`].)*

## Lehren-Register

Herleitungen und Fallgeschichten neuer Projekt-Lehren gehören nach
`lehren-register.md` (Anker `L-NN`); CLAUDE.md trägt nur den Handlungskern
mit Anker (Kern/Beleg-Trennung). Pflege ausschließlich über `/debrief`.
