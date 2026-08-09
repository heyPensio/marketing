# CLAUDE.md — Marketingabteilung

Diese Datei leitet Claude Code beim Arbeiten in diesem Repository an.

> **Gerüst-Stand:** erzeugt aus `projektgerüst` Commit `41ee4a7`
> am 2026-08-09. Nachzug neuer Methodik-Lehren: `/projekt-init nachzug`.

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

Nachbar-Repos: `C:\Users\qwafa_2dwxzia\heypensio` (Produkt + Pilotkunde)
und `C:\Users\qwafa_2dwxzia\zentrale` (Firmen-Ebene, siehe Abschnitt
„Firmen-Ebene"). Die dreifache Plan-Prüfung, die diesen Zuschnitt geformt
hat, liegt verbatim in `protokolle/R00-planpruefung-2026-08-09.md` —
dort stehen auch die BEGRÜNDUNGEN der überstimmten Empfehlungen (z. B.
Rebrand-Nullvariante), damit spätere „Warum eigentlich?"-Fragen eine
Quelle haben.

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
| **MKT-AKQ** | Akquise & Kampagnen | Kanalmix NACH dem Persona-Befund festgezurrt (Kandidaten: Founder-Direktvertrieb, Referenz-/Empfehlungsmechanik, Apaleo-Ökosystem/App-Store, DEHOGA/Verbände, Internorga Hamburg (März) als Rückwärts-Anker, Fach-/Regionalpresse, LinkedIn, Newsletter); Maßnahmen laufen; **erster Abschluss bis Mitte November**. |
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
  Rockstar** (Schema + alle Banden: `zentrale\rollen-charta.md`).
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
`C:\Users\qwafa_2dwxzia\zentrale`. Drei Regeln:

1. **Lese-Richtung (Pflicht bei Session-Start):** Zusätzlich zur eigenen
   STATUS.md auch `C:\Users\qwafa_2dwxzia\zentrale\STATUS.md` lesen —
   Firmen-Entscheide (vor allem der Namensstand) ändern laufend die
   Prämissen der Marketing-Arbeit.
2. **Schreib-Richtung (Postkorb):** Ergibt die Arbeit hier einen Befund
   oder Entscheidungsbedarf der Firmen-Ebene, schreibt die Session eine
   kurze Meldedatei nach `C:\Users\qwafa_2dwxzia\zentrale\eingang\`
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
   Start-Prompt an. Fremde uncommittete Dateien im `git status` sind Arbeit
   einer anderen Session — ignorieren, nie mit-committen, nie stashen oder
   resetten.
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
     gegenlesen.
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
     `git log origin/main..HEAD` sichten. Und spiegelbildlich: Der eigene
     Commit kann durch den Push einer parallelen Session bereits
     veröffentlicht sein; belastbar ist `git branch -r --contains <hash>`,
     nie das Fehlen im eigenen `origin/main..HEAD`. (Herkunft: R17/R30.)
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
   keine Tagesressource. Details: `/tagesstart`.
7. **Modellwahl trifft die Leitsession** und nennt sie im Start-Prompt; der
   User stellt das Modell beim Session-Start ein (`/model`-Handgriff —
   eine Modellzeile im Prompt allein steuert nichts). Faustregel:
   **Fable 5** für Leitsession, Planung, Review, außenwirksame/
   heikle Texte und festgefahrenes Debugging; **Opus 5** für
   Bau-Sessions mit Live-Debugging gegen echte APIs; **Sonnet 5**
   für mechanische Umsetzung nach fertigem Bauplan. Modellnamen vor
   Aussagen immer aus der aktuellen Liste holen (Skill `claude-api`), nie
   aus dem Gedächtnis. **Das tatsächliche Modell einer Session belegt nur
   die Statuszeile oder `/cost` — NIE die Selbstauskunft des Modells**
   (die hat nachweislich Abweichungen samt plausibler Begründung ERFUNDEN;
   Herkunft: R24-B). Die settings.json-Kette zeigt nur den Default für
   neue Sessions, nicht die laufende.
8. **Die Leitsession reviewt ALLE Ergebnisse der Arbeits-Sessions** vor dem
   Einfließen in den Wahrheits-Kanal — in ZWEI Richtungen: **(a) nach
   innen** (Soll-Erfüllung: Korrektheit, Dauer-Regeln, Klartext-Secrets)
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

## Arbeitsregeln (Verifikation & Haltung)

- Antworten kurz und direkt; Länge muss zur Substanz passen. Strikt Schritt
  für Schritt: ein Ziel, eine Aufgabe, ein erwartetes Ergebnis — dann auf
  Bestätigung des Users warten.
- Konzept-, UX- und Betriebs-Festlegungen mit Außenwirkung NIE im
  Alleingang festigen — erst dem User als Optionen vorlegen, dann
  schreiben.
- Realitätstreue vor später: immer die vollständige, produktionsreife
  Variante als Standard; Vereinfachungen nur auf ausdrücklichen Wunsch.
  Erst Proof, dann Perfektion — aber der Proof muss echt sein.
- **Verifizieren statt glauben:** gegen echte Daten/Doku/Quelle prüfen,
  bevor eine Beobachtung als Regel behandelt wird. Widerlegt die Messung
  den im Auftrag vorgegebenen LÖSUNGSWEG, ist das ein Befund, kein
  Scheitern — das Ziel schlägt den Weg. Die Schärfungen (alle Herkunft
  heyPensio R12–R31, dort teuer belegt):
  (a) Delegierte Fundstellen und Zuordnungen driften systematisch —
  Aussage und Fundstelle GETRENNT prüfen; bei Prüfern zusätzlich BEFUND
  und URSACHEN-DIAGNOSE getrennt prüfen.
  (b) Eigene Ursachenvermutungen und Bestands-Beschreibungen sind
  Hypothesen, bis gemessen.
  (c) Ein Fix, der nur den einfachen Pfad trifft, ist kein Fix — E2E im
  ÜBERGANG testen.
  (d) Auch der im Auftrag benannte Dateipfad ist eine Annahme — vor dem
  Zugriff `git log -- <datei>` prüfen.
  (e) Auch der AUFTRAG selbst ist eine Annahme — Ist-Stand des
  Auftragsgegenstands an der Quelle prüfen („offen" kann „Beleg offen"
  heißen; Bau ≠ Beleg).
  (f) Ein richtiges Zitat kann das Gegenteil belegen — Quellzeile GANZ
  lesen, bei Gesprächsquellen die zugehörige FRAGE mit ins Zitat,
  Überschrift/Geltungsbereich mitlesen.
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
- **⭐ Positivkontrolle (operative Pflichtform):** Jede Negativ-Suche läuft
  mit einem Suchbegriff, der treffen MUSS, im selben Lauf. Der mitgenannte
  SUCHRAUM eines Negativs ist selbst Teil der Behauptung. Randfälle einzeln
  belegen statt Vollabdeckung behaupten.
- **Status-Symbole erben von der SCHWÄCHSTEN Prämisse;** „Prognose" ist
  eine eigene Kategorie; ⚠️-Bausteine nie zu ✅ zusammenfassen. Ein
  „ERLEDIGT" an einer Bedingung beglaubigt die RECHTSFOLGE des Satzes mit —
  wer eine Bedingung abhakt, rechnet die Folge nach. Beleg-Typen beim
  Verdichten aus der Quelle übernehmen, nie neu vergeben. Ein
  Verifikationsgrad gehört ins Dokument und immer mit Nenner („12/12" ohne
  Grundgesamtheit wird später als Vollprüfung gelesen).
- **⭐ Verdichten verliert den Vorbehalt — systematisch zugunsten der
  eigenen Aussage.** Gilt für JEDES Papier, das etwas empfiehlt, auch
  interne. Beim Verdichten den Vorbehalt zuerst übernehmen, dann den Satz
  bauen — nie umgekehrt. (Herkunft: R29-B/R31, 7 Belege.)
- **⭐ Der gefährlichste Satz in einem außenwirksamen Dokument ist die
  ENTWARNUNG** — jede Entwarnung trägt ihre Quelle im Satz, sonst ist sie
  eine unverifizierte Verbindlichkeit. Keine beiläufige Zusage im PRÄSENS,
  die noch nicht wahr ist („ich frage gerade ab" → „ich hole ein und
  reiche nach"). Aussagen darüber, WER etwas entschieden hat, tragen
  dieselbe Belegpflicht wie Zahlen.
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
  Auffälligkeiten" geglättet werden.
- **Recherchen brauchen eine Gegenprobe-Achse**, die die PRÄMISSE des
  Auftrags prüft, nicht nur seine Ausführung. Ein Recherche-Auftrag, der
  bekannte Kandidaten NAMENTLICH nennt, wird zur Verifikation statt zur
  Entdeckung — Vorbefunde gehören in die Ausschlussliste, nie in den
  Suchauftrag. Spiegelfall Einarbeitung: Ein Auftrag mit namentlicher
  Zielortliste macht die Quelle zur Abarbeitung — vorher einmal umgekehrt
  greppen: „Welche Punkte der Quelle nennen MEIN Dokument als Zielort?"
  (Herkunft: R30-D/R31-C.)
- **Ein Bewertungskriterium gilt für ALLE Kandidaten;** wird es geändert,
  den Bestand rückwirkend prüfen (wer wurde NUR daran aussortiert?). Passt
  ein Raster strukturell nicht, ist „nicht anwendbar" die richtige
  Kategorie, nie der schlechteste Wert.
- **Quellenauswertung braucht einen ZWEITEN Durchgang mit umgekehrter
  Frage** („Was sagt die Quelle, wonach niemand gefragt hat?") — durch
  einen Agenten mit frischem Kontext, der den Fragenkatalog NICHT kennt.
  Drei Fang-Kategorien benennen: Fragen des Gegenübers ·
  Prozessbeschreibungen · beiläufige Zusagen des eigenen Sprechers.
- **Zahlen/Preise nie aus einer einzelnen Tabellenzeile übernehmen:**
  Kopfzeile/Fußnoten/Scope mitlesen (netto/brutto, Geräteklasse, Datum),
  vor Vergleichen normalisieren. Eine Zahl trägt den Scope ihrer ZEILE,
  nicht den ihres Namens — vor jedem „Widerspruch" die Positionslisten
  BEIDER Zahlen öffnen. Superlative sofort mit Scope einschränken. **Für
  jede Zahl, die in ein Dokument geht, den Zählweg benennen** — die
  plausible Zahl wird nie nachgeprüft, gerade sie ist gefährlich.
- **Eine Zahl, die offensichtlich nicht passen kann, ist ein
  Werkzeugfehler, kein Befund** — erst das Werkzeug prüfen, dann die
  Sache. Und: Schlägt eine Prüfliste an, ist zuerst das PRÜFMUSTER
  verdächtig (veralteter Sollwert), dann das Dokument.
- **Beweismaßstab beidseitig anlegen;** eine Analogie (n=1 bei einem
  anderen Anbieter) ist kein Beleg — als Analogie kennzeichnen oder
  weglassen.
- **⭐ Anwesenheit ist nicht Wirksamkeit** — ein Marker-Grep prüft Text,
  kein Verhalten. Trefferzahl ≥ 2 für jede Konstante, die einen Vergleich
  braucht (Deklaration UND Verwendung); eine Verbotsliste, die nur
  Bekanntes kennt, ist eine Positivliste in Verkleidung; eine
  SCHUTZ-Config ist erst nach AUSSEN-Messung „aktiv" (Beleg ist die
  Wirkung von außen, nie die Config-Existenz).
- **Ein Test, der nichts verändert, prüft nichts** — Testaufbauten brauchen
  ihre eigene Positivkontrolle. **Eine grüne Testzahl belegt nichts — nur
  die Rückbau-Gegenprobe belegt, dass die Tests den Fund fangen** (Fix in
  Wegwerf-Kopie zurückdrehen, prüfen ob die Suite es merkt).
- **Sicherheits-Regeln:** Den leeren Zustand GETRENNT behandeln
  („Weglassen" ist der leere Zustand; „Weglassen" und „Wiederholen" sind
  dieselbe Operation). Nach jeder geschlossenen Fehlerklasse fragen, wie
  dieselbe Klasse eine Ebene höher aussieht. Schutzbausteine sortieren
  nach GRENZE (wer darf?) vor DECKEL (wie viel?) — nur Grenzen halten
  Unberechtigte auf. Ein Wächter darf seine eigene Beweisquelle nicht
  beschreibbar machen; ein Wächter, der beim gewöhnlichen Fall rot wird,
  wird abgeschaltet — Positivkontrolle IN den Wächter einbauen. Bei
  gekoppelten Sicherheits-Umbauten ist die REIHENFOLGE das
  Sicherheitsmerkmal — Kriterium ist der Zwischenzustand. Nach jeder
  Alarm-Unterdrückung fragen: Woran merkt jetzt noch jemand, dass es
  läuft? (Positiv-Beleg je Lauf, nicht weicherer Alarm.)
- **⭐ Eine frisch geschriebene Regel schützt nur künftigen Code — der
  BESTAND wird im selben Zug rückwirkend gegen sie durchsucht**, beginnend
  mit dem Artefakt, das die Regel ausgelöst hat.
- **Ein geklonter Textbaustein transportiert die Entwarnung des Originals
  in einen Zustand, in dem sie nicht mehr gilt** — nach jedem Klonen jeden
  Satz gegen den NEUEN Zustand prüfen, nicht nur die Variablen.
- **Freigaben:** Setzt der Freigebende selbst ein Delta, ist es nicht von
  seiner Freigabe gedeckt. Zusagen im ORIGINALWORTLAUT zitieren (nie
  umformulieren, nie paraphrasieren); Änderungen als sichtbarer Nachtrag.
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

- **Vorwärtsverweis-Konvention:** Kippt ein neuer Stand eine ältere
  Festlegung, bekommt die ALTE Stelle im selben Zug einen Vorwärtsverweis
  („überholt durch X") — an der Stelle, wo der Leser ANKOMMT, nicht im
  Changelog. Nachtrags-Ketten auch rückwärts pflegen. Nach jeder
  Richtungsentscheidung die betroffenen Alt-Dokumente durchgehen —
  ausdrücklich auch gemeinsam genutzte KALKULATIONSZEILEN in fremden
  Rechnungen, nicht nur thematisch betroffene Dateien. **Und seit es
  mehrere Firmen-Repos gibt: auch die abhängigen Dokumente in
  NACHBAR-REPOS** — Arbeitsmodell- und Struktur-Entscheide kippen
  Onboarding-, Konzept- und Schulungsdokumente repo-übergreifend; der
  Suchraum des Nachziehens ist die FIRMA, nicht das eigene Repo
  (Beleg: Oguz-Onboarding-Plan im heypensio-Repo kannte Zentrale,
  Briefing und Organigramm nicht — vom User gefangen, 09.08.2026).
  Diese Prüfung ist AUSLÖSER-gebunden (beim Entscheid selbst), nicht
  ritual-gebunden — sie darf nicht auf den nächsten Debrief warten. Nach dem
  Einarbeiten nach den GEKIPPTEN WERTEN greppen (übers ganze Repo, auch
  über Dokumente, die es beim Melden noch nicht gab), nicht nach dem
  Thema. Vor jedem „das wurde bisher nirgends gesagt" ein grep auf die
  EIGENE Datei. Eine ÜBERHOLT-Markierung ist ein Blankoscheck zum
  Weglassen — positiv auflisten, was NICHT überholt ist, und die
  Neufassung dagegen prüfen. Freigaben/„darf-bleiben"-Einstufungen tragen
  einen Geltungsvermerk (Empfängerkreis + Stand).
- **In Doku-Verweisen keine Zeilennummern**, sondern Abschnitts-/
  Überschriftsbezug — Zeilen-Anker altern, auch in Markdown-Nachbarn und
  innerhalb einer Runde. Wo nur Zeilen möglich sind: mit Commit-Stand
  (`@<hash>`).
- **Vor der Vergabe neuer Kurz-IDs die Kurzzeichen der Nachbardokumente
  greppen** (Kollisionen doppelt belegt). ID-Anker brauchen Rundenbezug.
- **Drift-Vorsorge bei AUSLÖSER, nicht nach Kalender:** Commit einer
  Doku-Änderung · Richtungsentscheid · neues Dokument · Freigabe.
  Baselines nie anheben, um einen Lauf grün zu bekommen.
- Ein neues Bewertungskriterium quer zum Raster erzeugt sofort
  Widersprüche im eigenen Dokument — nach dem Einbau jede vorhandene
  Aussage dagegen prüfen; das ist mehr Arbeit als das Kriterium selbst.
- Weichen zwei Messläufe voneinander ab, ist im Multi-Session-Betrieb
  zuerst das REPO verdächtig (parallele Commits während der Messung) —
  Bestand einfrieren (Commit-Hash notieren), Lauf wiederholen.
  Doppel-Messstand-Vertrag: Hash zu Beginn UND vor dem Commit erheben.
- Repo-weite Textsuchen immer mit Include-Filtern
  (`grep --include="*.md"`) — Binärbestände sprengen sonst Timeouts.

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
- Multi-Agent-Workflows nach Abbruch nie neu starten, sondern resumen
  (`resumeFromRunId`) — ein Neustart verbrennt das bezahlte Ergebnis.
- Der Debrief arbeitet aus den ORIGINAL-Abschlussmeldungen, nie aus der
  eigenen Merkliste — und bewährte Muster zählen wie Fallen.
- Sicherheits-Klassifikator-Blockaden sind ein Betriebszustand: nie
  umgehen, sondern melden; wirksame Antwort ist, den ZUSCHNITT zu ändern
  (Secrets von vornherein serverseitig halten). Vor geplanten
  Interventionen alle Nachmessungen VORHER ziehen (ein blockierter
  Schreibcall kann den ganzen Kanal schließen).

## Aktivierte Bausteine

- `windows-powershell` — Windows-/PowerShell-5.1-Fallen dieses Rechners.
- `aussenwirksame-texte` — Marketing produziert fast ausschließlich Außenwirksames.
- `gmail-mcp` — Mail-Recherche und Entwürfe über den Gmail-Connector.
- `browser-automation` — Registrar-/Social-/Verzeichnis-Prüfungen im Browser.
- `quellen-beschaffung` — Markt-, Rechts- und Wettbewerbsquellen sauber beschaffen.

*(Bausteine sind optionale Regelmodule aus dem projektgerüst-Repo —
`vorlage/bausteine/`. Nicht aktivierte Bausteine bei Bedarf per
`/projekt-init nachzug` nachrüsten.)*

## Lehren-Register

Herleitungen und Fallgeschichten neuer Projekt-Lehren gehören nach
`lehren-register.md` (Anker `L-NN`); CLAUDE.md trägt nur den Handlungskern
mit Anker (Kern/Beleg-Trennung). Pflege ausschließlich über `/debrief`.
