---
description: Runden-/Session-Abschluss — fasst zusammen, hält offene Punkte fest und schreibt die Learnings zurück ins System (CLAUDE.md, Skills, Commands, Wahrheits-Kanal, projektgerüst)
argument-hint: "(optional) Fokus/Notiz für den Debrief"
---

# /debrief — Abschluss mit Rückschreiben

Der Kern ist NICHT die Zusammenfassung, sondern das **Rückschreiben**:
Jedes Learning muss zurück ins System, sonst war der Debrief nur ein
Tagebuch. Phasen strikt der Reihe nach. Optionaler Fokus: `$ARGUMENTS`.

⚠️ **Ein Debrief versiegelt einen STAND, keine Session** (User-Fang
Zentrale 12.08.2026): Arbeitet die Session nach dem Debrief weiter
(Verlängerung, Rückläufe, neue Entscheide), ist vor dem Schließen ein
**DELTA-Debrief über die Arbeit seit dem letzten** fällig — alle
Phasen, Prüfraum = das Delta; die Gegenprobe-Pflicht gilt erneut nach
ihren normalen Kriterien. „Schon debrieft" bezieht sich nie auf die
Session als Ganzes.

Zuerst orientieren (nicht raten): `STATUS.md` lesen, Gesprächsverlauf
durchgehen, vorhandene Skills/Commands sichten (kein Duplikat bauen).

## Phase 1 — Zusammenfassung (kurz, faktentreu)
- **Gemacht:** konkrete Ergebnisse (Dateien/Commits).
- **Entscheidungen:** was festgelegt wurde und WARUM.
Fehlgeschlagenes/Verworfenes ehrlich benennen.

## Phase 2 — Offene Punkte / nächste Schritte
Unfertig · unmittelbar nächster Schritt · geparkt. Diese Liste ist der
Rohstoff für Phase 4b (Wahrheits-Kanal).

## Phase 3 — RÜCKSCHREIBEN (der eigentliche Kern)

**3-0) Quelle und Vollständigkeit — VOR dem ersten Edit:**
- **Aus den ORIGINAL-Abschlussmeldungen arbeiten** (`protokolle/R<runde>-*`),
  nie aus der eigenen Zwischennotiz — die eigene Zusammenfassung ist die
  driftende Zwischeninstanz. Beide Blöcke im Wortlaut durchgehen:
  „Stolpersteine/Learnings" UND „Nebenbefunde".
- **Jedes Learning einzeln durchnummerieren und disponieren:**
  **(a)** neue Regel/Skill-Änderung — wohin · **(b)** Zweitbeleg zu einer
  bestehenden Regel — welche, und ob sie geschärft wird · **(c)** bewusst
  nicht zurückgeschrieben — Grund · **(d) projektunabhängig →
  projektgerüst-Nachzug** (siehe 3d). Kein Learning ohne Disposition;
  „war schon klar" ist eine Disposition, Schweigen nicht.
- **Retrieval VOR dem Einsortieren (Herkunft: heyPensio R42):** Bevor
  ein Learning als „neue Regel" disponiert wird, gezielter
  Bestands-Abruf — grep über CLAUDE.md + `lehren-register.md` +
  betroffene Skills/Rules: Ist es Zweitbeleg oder Schärfung eines
  BESTEHENDEN Kerns statt Neuanlage? Die Disposition nennt den Treffer
  bzw. das Negativ (Negativ mit Positivkontrolle im selben Lauf).
- **Bewährte Muster zählen wie Fallen** — sie rutschen systematisch eher
  durch, weil die Aufmerksamkeit Fehler sucht. Getrennt durchgehen.
- Meldungen, die zugleich NACHARBEIT auslösen, zuerst auswerten, dann
  handeln.

**3a) Generelle Regel für die Arbeitsweise?** → `CLAUDE.md`.
- Gezielter Edit am Ankerstring, nie Vollumschrift. **Kern/Beleg-
  Trennung + Formregeln (Wachstums-Governance, Herkunft: heyPensio
  R42):** CLAUDE.md trägt den HANDLUNGSKERN (imperativ, mit
  Geltungsbereich) — **Zielform ≤ ~500 Zeichen inkl. `L-NN`-Anker**;
  Herleitung/Fallgeschichte wandert als datierter Eintrag ins
  `lehren-register.md`. **⛔ Das ⭐-Anbaumuster ist VERBOTEN: Eine
  SCHÄRFUNG ERSETZT den Kern an Ort und Stelle** (Alt-Kern → datierter
  Register-Nachtrag; den Alt-Wortlaut trägt der Git-Verlauf). Ein
  Zweitbeleg ist NUR ein Register-Nachtrag, keine neue CLAUDE.md-Prosa.
  **Schreibreihenfolge zwingend: Register ZUERST, Kern danach** — ein
  Budget-Wächter kann so nie eine Lehre blockieren, nur ihren Ort
  erzwingen.
- Nach dem Edit verifizieren: neuer Text per grep gefunden, Struktur
  intakt. **Messzeile je Debrief:** CLAUDE.md-Größe vorher → nachher
  (Zählweg, erreichte Marke) im Änderungsreport; ab der projektweiten
  Sollmarke gilt KOMPENSATIONSPFLICHT (+n Zeichen erfordern −n im
  SELBEN Debrief; Kürzungsauswahl mit Nenner ausweisen — sonst werden
  die unbequemen statt der toten Regeln verdichtet). Nur echte
  Dauer-Regeln.

**3b) Muss ein bestehender Skill/Command genauer werden?** → direkt
anpassen (gezielte Edits), Description mitziehen, Konsistenz prüfen.

**3c) Aufgabe zum ZWEITEN Mal vorgekommen (kapselbares Muster)?** →
Skill/Command VORSCHLAGEN und erst nach ausdrücklichem User-OK anlegen.

**3d) ⭐ PROJEKTGERÜST-RÜCKFLUSS (Pflichtschritt, eigene Frage je
Learning):** Ist das Learning **projektunabhängig** — würde es JEDEM
Projekt nach diesem Arbeitsmodell nützen? Dann gehört es zusätzlich ins
Methodik-Blueprint-Repo `projektgerüst`
(`<FIRMENWURZEL>\projektgeruest` — die Firmenwurzel ist der
Elternordner der eigenen Repo-Wurzel, F13 12.08.2026):
- Zielstelle in `vorlage/` editieren (CLAUDE-vorlage, Command-Vorlage
  oder Baustein) — projektspezifische Details dabei entfernen
  (Kundennamen, Systemnamen, Pfade), Herkunftsvermerk kurz
  („Herkunft: MKT R<n>").
- Eintrag in `LEHREN-CHANGELOG.md` (Datum · Quelle · eine Zeile Kern).
- **⭐ VOR DEM SETZEN DES STEMPELS die Delta-Liste ERNEUT messen**
  (`git fetch` + `log <alter-stempel>..HEAD`) — **nie die Liste vom
  Beginn des Debriefs verwenden.** Ein Stempel auf einen EIGENEN
  Rückfluss-Commit behauptet implizit, alle **Vorfahren** seien
  disponiert — auch fremde Deltas, die zwischen Anfangsmessung und
  Rückfluss hereinkamen; der eigene Rückfluss ist genau der Moment, in
  dem die Anfangsmessung veraltet ist. Belegfälle: ein Stempel lief über
  ein Delta hinweg, das 10 Minuten nach der Messung hereinkam; im
  Folge-Debrief fand die Nachmessung **doppelt so viele** offene Deltas
  wie die Liste vom Beginn. (Herkunft: MKT R43.)
- Dort committen (eigenes Repo, eigener Commit).
- **Werkzeug-Umbauten sind ein eigener Lehren-Typ:** Wurde in dieser
  Runde ein Command/Skill/Ablauf umbenannt, ersetzt oder strukturell
  geändert, wird das ausdrücklich geprüft — sonst trägt die Vorlage den
  alten Stand weiter (genau so wäre `/session-prompts` in der Vorlage
  gelandet, eine Woche nachdem heyPensio es ersetzt hatte).
- **⭐ Querverdrahtungs-Frage bei jedem NEUEN Werkzeug/Muster/Command
  (Herkunft: MKT-Gegentest 09.08.2026):** Welche BESTEHENDEN Vorlagen
  und Commands müssen das neue Ding KENNEN, damit es wirkt? (grep über
  `vorlage/` + `projekt-init.md` UND über die anderen Firmen-Repos —
  Suchraum per LISTING von `<FIRMENWURZEL>\` ermitteln,
  nie als feste Repo-Aufzählung: die wird still falsch, sobald ein
  Repo dazukommt (B2 11.08.2026) — nach den berührten Begriffen;
  abhängige Konzept-/Onboarding-/Schulungsdokumente leben auch
  außerhalb des Blueprints. Funde im eigenen Scope nachziehen, fremde
  als Posten an die zuständige Leitsession/den Postkorb.) Beleg-Fall: `/briefing` existierte samt
  Changelog-Merker — aber `/projekt-init` hätte neue Abteilungen weiter
  ohne Briefing-Register und Zentrale-Verdrahtung aufgesetzt; die neue
  Abteilung wäre für das Tagesbriefing unsichtbar gewesen.
- Kein Rückfluss-Kandidat? Ausdrücklich sagen („kein
  projektgerüst-Nachzug nötig") — Schweigen ist kein Report.
- **⭐ Nach JEDEM Rückfluss-Block: den Kopien-Wächter laufen lassen**
  (`node <blueprint>\tools\pruefe-kopien.js <projektpfad>`) **und im
  selben Zug die berührten Kopien vom Master ziehen + Stempel
  mitziehen.** Die Rückfluss-Vollständigkeit wird an der DRIFT-Liste
  gemessen, nie an der Erinnerung — ein unvollständiger Rückfluss fiel
  erst eine Runde später auf, als der Wächter sechs nur in den Kopien
  lebende Lehren meldete; ohne Wächter-Lauf hätte der nächste Nachzug
  sie überschrieben. (Herkunft: MKT R8/M1.)
- **⭐ Git-Disziplin gilt im Blueprint-Repo VERSCHÄRFT** (Vorfall
  12.08.2026: im Debrief-Fenster schreiben regelmäßig ZWEI
  Leitsessions gleichzeitig zurück — ein Rückfluss-Commit zog fünf
  uncommittete fremde Edits mit, die Zuordenbarkeit ist seitdem
  beschädigt, die Historie ließ sich nicht mehr korrigieren):
  Auch hier NUR `git commit -F <msg> -- <pfade>` mit explizit
  benannten Pfaden; VOR dem Commit `git status` auf fremde
  Modifikationen sichten und Fremdes ungestagt lassen; technischer
  Träger ist der `block-broad-git-add`-Hook, der seit 12.08.2026
  auch im projektgerüst verdrahtet ist.

Grundregeln: Nur zurückschreiben, was die Session wirklich belegt hat.
Ändert ein Learning etwas Bestehendes, die alte Stelle mit anpassen
(Vorwärtsverweis-Konvention). **Bestandsscan je neuer Regel:** den
Bestand im selben Zug rückwirkend gegen die Regel prüfen — beginnend mit
dem Artefakt, das sie ausgelöst hat; Ergebniszeile im Änderungsreport.
Committen und pushen nach den Repo-Regeln (add → commit →
`git pull --rebase --autostash` → push; vorher `git log origin/main..HEAD`
sichten).

## Phase 4 — Änderungsreport + Gegenprobe (Pflicht)
Explizit zeigen: CLAUDE.md-Änderungen (konkrete neue Zeilen) ·
Skill-/Command-Änderungen · **projektgerüst-Commits (3d)** ·
Dispositions-Liste aus 3-0 mit (a)/(b)/(c)/(d) je Learning · je
Prüfschicht der Runde eine Fangquoten-Zeile (Funde / davon unikal /
Schweregrad; Quelle: `protokolle/R<runde>-*`). Wenn in einem Kanal nichts
zu tun war, das ausdrücklich sagen.
**Fangquoten-Rückkopplung (Herkunft: heyPensio R42):** Die Tabelle wird
gegen die Verdichtungs-Historie gehalten — taucht eine Fehlerklasse
auf, deren Regel-Kern zuvor gekürzt/verlagert wurde, wird der Kern im
SELBEN Debrief zurückgeschärft bzw. in den Auto-Kanal zurückgeholt
(billig, das Register trägt den Volltext). Die Rückkopplung ist ein
NACHLAUFENDES Warnsignal (erkennt nur reale, entdeckte Fehler,
ursachenvermischt) — sie wird nie als Qualitätsbeweis der Verdichtung
BEHAUPTET.

**Verdichtungs-Gegenprobe (Pflicht bei jeder Kürzung des Auto-Kanals,
Herkunft: MKT R17):** Ein Subagent mit frischem Kontext zerlegt den
ALT-Text der gekürzten Stellen in atomare Aussagen (Regel · Vorbehalt ·
Beleg · Anker) und prüft je Aussage: in NEU erhalten, ins Register
ausgelagert oder VERLOREN; Diff-Hunks nur in den benannten Stellen?
Pflicht-Muster, weil dort die Verluste saßen: gestrichene „z. B."/„auch"
(Verallgemeinerung), zerlegte „nicht X, sondern Y"-Paare (nur Y bleibt),
gestrichene Verbote, NEU ABGELEITETE Zahlen („fünf" = 2 + 3, stand
nirgends). Gemessen: 8 von 140 Aussagen fielen — 5 Vorbehalte, eine
erfundene Zahl — bei frischer Session mit Prüffrage je Streichung.
**⭐ PRÜFRAUM = die RUNDE, nicht der Debrief-Commit (Herkunft: MKT R20,
81 geprüfte Aussagen in zwei Läufen):** Hat die Runde MEHRERE
Kompensationsläufe (typisch: Gerüst-Nachzug am Nachmittag + Debrief am
Abend), prüft ein Lauf-2-Prüfstand nur den letzten und **beglaubigt die
früheren stillschweigend** — der erste Lauf trug hier 14 der 25
Verluste. Drei Folgen, alle am selben Fall belegt:
**(a) Ein als Kompensation gesetzter AUSLAGERUNGS-ZEIGER ist selbst
geschützt.** Lauf 1 hatte eine Fallgeschichte lehrbuchmäßig ins
Register ausgelagert und den Wegweiser „Fallgeschichte im Register"
gesetzt; Lauf 2 hielt ihn für Füllwort und strich ihn — **damit nahm
Lauf 2 die Bezahlung von Lauf 1 zurück** (dreifach im selben Debrief).
Vor dem Streichen eines solchen Zeigers per `git log -S` prüfen, ob er
die Bezahlung einer früheren Kürzung war.
**(b) KOMBINATIONSSCHÄDEN sind für jede Byte-Bilanz unsichtbar:** Lauf 1
nahm die Zahl, Lauf 2 die Erfüllungsbedingung — übrig blieb eine
Forderung ohne Maß, bei netto gleicher Länge.
**(c) Literal-Negative des Prüfers case-insensitiv ziehen** — ein
`grep "vier Fehlerklassen"` = 0 war eine Case-Falle („**V**ier"), also
ein Fehlnegativ des Prüfers selbst.

**Gegenprobe durch einen Verifikations-Subagenten (Pflicht bei mehr als
einer Arbeits-Session):** Er bekommt die UNGEKÜRZTEN Abschlussmeldungen
plus den Debrief-Diff und prüft eine einzige Frage — *welches gemeldete
Learning ist in keinem Kanal gelandet und auch nicht begründet
verworfen?* Befunde vor dem Commit einarbeiten.

## Phase 4b — WAHRHEITS-KANAL nachziehen (Pflicht, nicht Erinnerung)
Vier-Stellen-Sync: Changelog-Header der Projektquelle · betroffener
Abschnitt · Nächster-Schritt-Block · STATUS.md (inkl. Rotation).
Einfließen MÜSSEN: die User-Entscheide der Runde und die bewusst nicht
selbst geschlossenen Gegenprobe-Befunde (namentlich als Nacharbeit).
Ausnahme nur bei reinen Werkzeug-Runden — dann ausdrücklich feststellen
(„kein Wahrheits-Kanal-Update nötig, weil …").

## Phase 5 — Bilanz (kurz)
Zwei bis vier Sätze: Was steht unterm Strich, wichtigster offener Punkt,
was hat sich am System verbessert.

---
**Merksatz:** Ohne Phase 3+4 wäre `/debrief` nur ein Tagebuch. Der Wert
entsteht, wenn die Learnings als Regeln, Skills und Commands
zurückfließen — ins Projekt UND, wo projektunabhängig, ins projektgerüst.
