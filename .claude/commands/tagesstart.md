---
description: Leitsession-Werkzeug — Morgen-Ritual des Tages (Tagesrahmen + erste Runde) sowie Start-/Abschlussprompts für parallele Arbeits-Sessions (Multi-Session-Modell, CLAUDE.md Regeln 1–9). Für FOLGERUNDEN mitten am Tag den kleinen Command /runde nutzen.
argument-hint: "(ohne Argument: Tagesstart) | start <aufgabe(n)> | abschluss <session>"
---

# /tagesstart — Leitsession-Werkzeug (Tagesrahmen + erste Runde + Prompts)

Werkzeug der **Leitsession** im Multi-Session-Arbeitsmodell (CLAUDE.md,
Abschnitt „Multi-Session-Arbeitsmodell"). Wer diesen Command tippt, erklärt
die laufende Session zur Leitsession. User-Wunsch: `$ARGUMENTS`.

**Modus:** Ohne Argumente → **Tagesstart** (Abschnitt 1). **Existiert für
heute schon ein `protokolle/tagesplan-<datum>.md`, ist der Tagesstart
gelaufen → auf `/runde` verweisen**, NICHT den Tagesrahmen neu erheben.
`start <aufgabe(n)>` → Start-Prompts bauen (Abschnitt 2).
`abschluss <session>` → Abschlussprompt bauen (Abschnitt 3).

*(Substanz-Regel: `/runde` dupliziert nichts — Runden-Schnitt, Prompt-Bau
und Ausgabe stehen NUR hier. Substanz-Änderungen immer in dieser Datei.)*

## 0. Tagesrahmen

**Vor Abschnitt 1**, wenn der Tag beginnt: Wochentag + Uhrzeit ziehen,
Kalender abrufen (falls angebunden) und die Arbeitsdauer erfragen. Daraus
**Blöcke** schneiden statt nur einer Runde. Träger ist
`protokolle/tagesplan-<jjjj-mm-tt>.md` — die Datei, nicht der Chat: Sie
überlebt die Auto-Kompaktierung und ist das Übergabedokument zwischen
Leitsessions.

**Inhalt des Tagesplans:** Rahmen (Blocktabelle mit Quelle) · Engpass-Satz
Erreichbarkeit (Anbieter/Behörden nur werktags tagsüber — der Wochentag
entscheidet über den Wert eines Strangs) · User-Handgriffe (nichts, was
eine Session übernehmen kann) · Strang-Tabelle mit Modell + exklusiven
Systemen · Zustand bei Tagesbeginn (Repo, ungereviewte Commits, fehlende
Meldungen) · Eingänge · Wochen-Kontingent-Feld (Stand laut User-Ablesung —
Kontingent ist eine WOCHEN-Ressource; Sessions können ihren Verbrauch
nicht selbst erheben).

**Zwei Detailgrade, verbindlich:** Block 1 **scharf** geschnitten, spätere
Blöcke ausdrücklich als **PROGNOSE** (ein detailliert geschriebener
Block-3-Plan wird später als Festlegung gelesen). Abbruch/Verkürzung ist
ein gültiges Ergebnis. **Der Debrief bleibt PRO RUNDE** — nie ans
Tagesende gebündelt.

⚠️ **Blockwechsel-Schnitt braucht einen TRÄGER:** Die Leitsession startet
je Block neu (Regel-Snapshot + Kontextlast). Der Schnitt gehört als
**Handgriff mit Uhrzeit** in die Handgriff-Liste des Tagesplans („~13:00
Leitsession neu starten — `claude --resume`, diese Session wählen"), nicht
in ein Konzeptpapier — angekündigt und ohne Träger fällt er durch
(Herkunft: heyPensio R30, vom User gefangen). Vor dem Neustart den
Übergabe-Block füllen: Session-Stand, offene Handgriffe, Block-Programm,
Debrief-Kandidaten.

⚠️ **Der Kalender liefert FENSTER, nicht das Arbeitsende:** Ein Eintrag
„Fokuszeit bis X" ist Planungsgrundlage, keine Zusage über die Länge des
Arbeitstags. Wie lange gearbeitet wird, entscheidet ausschließlich der
User, laufend — Blöcke offen halten, am Blockende fragen statt schließen.

**Review-Regime disponieren (Kritikalitäts-Staffel):** Die Review-Tiefe
wird je Strang bei der Blockplanung festgelegt, sichtbar im Tagesplan, nie
stillschweigend: Voll-Review (unabhängiger Prüfer mit frischem Kontext)
bleibt Pflicht für sicherheitsrelevante, außenwirksame und
freigabetragende Ergebnisse; kleine Stränge geringer Kritikalität können
BEGRÜNDET beim Kurzraster bleiben. Kurzraster und Voll-Review fangen
DISJUNKTE Fehlerklassen — keine ersetzt die andere. Prüfungen nicht an ein
kleineres Modell delegieren (Herkunft: heyPensio-Messung, Fangquote 1/6
vs. 3–4/6).

## 1. Tagesstart (ohne Argumente)

Fester Ablauf — **Altlasten der letzten Runde VOR neuer Runde**:

1. **Stand aufnehmen:** `git status` + `git pull`; dann `STATUS.md` lesen
   (Lesereihenfolge lt. CLAUDE.md; Details gezielt aus der Projektquelle).
   **Gerüst-Stempel prüfen (Methodik-Aktualität):** Den Stempel-Hash aus
   dem CLAUDE.md-Kopf gegen den Blueprint halten —
   `git -C C:/Users/qwafa_2dwxzia/projektgeruest log --oneline <stempel>..HEAD`.
   Liefert das Zeilen, ist die Methodik dieses Projekts VERALTET: Delta
   (mit `LEHREN-CHANGELOG.md`-Einträgen) dem User melden und
   `/projekt-init nachzug` als Tagesposten vorschlagen. Nie
   stillschweigend weiterlaufen und NIE den Stempel ohne durchgeführten
   Nachzug anheben — der Stempel ist der Beleg des Nachzugs, kein
   Beruhigungsdatum.
   **Kopie-Drift prüfen (im selben Schritt):**
   `node C:/Users/qwafa_2dwxzia/projektgeruest/tools/pruefe-kopien.js <projektpfad>`
   — meldet das Werkzeug DRIFT, lebt eine Methodik-Änderung nur in der
   Projekt-Kopie (Master-zuerst-Regel verletzt) oder ein Vorlagen-Update
   wurde hier nicht nachgezogen: STOPP, dem User melden, auflösen — nie
   stillschweigend weiterarbeiten. INFO-Zeilen (projektspezifische oder
   nicht aktivierte Dateien) sind Lesestoff, keine Befunde.
2. **Runden-Stand prüfen:**
   - Uncommittete Reste im `git status`? Klären, aus welcher Session sie
     stammen — nie blind committen.
   - Ungereviewte Arbeits-Session-Commits? `git log` seit dem letzten
     Leitsession-/Debrief-Commit sichten → Review lt. CLAUDE.md Regel 8
     (beide Richtungen!). Befunde als Nacharbeit zurückgeben oder — wenn
     klein und Session beendet — selbst fixen.
     ⭐ **Lief ein Prüfer, ist der Prüfgegenstand des Reviews seine
     BEFUNDLISTE, nicht der Reparatur-Bericht der Session:** Das
     Prüfprotokoll selbst öffnen, Befunde je Kategorie ZÄHLEN und gegen
     die Meldung halten — jeder Befund repariert, ausdrücklich verworfen
     oder mit benanntem Träger. Eine Kategorie, die in der Meldung
     nicht vorkommt, ist der Regelfall des Versickerns (nicht der
     Ausnahmefall): 24 von 37 Befunden blieben so liegen, vier
     Fehlerklassen reproduzierten sich eine Runde später und kosteten
     einen ganzen Prüfzyklus. (Herkunft: MKT R6.)
   - Ausstehende Abschlussmeldungen? Beim User erfragen. **Auch
     User-Spontan-Sessions außerhalb des Rundenmodells:** solche Commits
     als eigenen Strang nachtragen und reviewen — stillschweigend
     ungereviewt bleibt nichts.
   - Debrief der letzten Runde gelaufen? Wenn nein und alle Meldungen da →
     EINEN gebündelten `/debrief` fahren.
3. **Eingänge sichten** (VOR dem Rundenschnitt — sie können die Planung
   kippen): die Eingangs-Kanäle des Projekts durchgehen. **Postfach,
   falls angebunden — Arbeitsteilung mit dem Firmen-`/briefing`:**
   Liegt ein Briefing vom SELBEN Tag vor
   (`C:\Users\qwafa_2dwxzia\zentrale\briefings\`), dessen Mail-Triage
   für die eigene Abteilung übernehmen und nur die EIGENEN Fäden
   vertieft nachladen (`get_thread`) — KEINE zweite Volldurchsicht
   (Token + Doppellektüre). **Rückfallregel:** OHNE aktuelles Briefing
   gilt die VOLLDURCHSICHT seit der letzten Runde, nicht nur bekannte
   Fäden — die Lücke „niemand hat geschaut" darf nie entstehen. Nur
   sichten, nichts beantworten. Und den User explizit
   fragen, was außerhalb passiert ist (Anrufe, Entscheide, Befunde).
4. **Neue Runde vorschlagen:** Aus STATUS.md („Nächster konkreter
   Schritt"), Eingängen und User-Zuruf die Stränge schneiden — disjunkte
   Scopes, exklusive Systeme (je System EINE Session), Modellwahl je
   Strang (CLAUDE.md Regel 7) — und dem User als Aufteilung vorlegen.
5. **Nach Bestätigung:** Start-Prompts nach Abschnitt 2 erzeugen und nach
   Abschnitt 4 ausgeben.

## 2. Start-Prompt bauen (`start <aufgabe(n)>`)

Vorab: Welche Sessions laufen bereits, mit welchen Scopes? Saubere Basis
(CLAUDE.md Regel 5)? Pro Session diese sieben Bausteine festlegen — fehlt
einer, beim User nachfragen statt raten:

1. **Ziel/Aufgabe** — konkret, mit Verweis auf Bauplan/Doku im Repo statt
   Nacherzählung. **Pflicht davor: Ist-Stand-Prüfung des
   Auftragsgegenstands durch die Leitsession SELBST, BEVOR der Prompt
   geschnitten wird** (nie als ersten Arbeitsschritt delegieren) —
   ZWEISEITIG: (a) nach innen Repo-grep über Modulname + Synonyme (was
   existiert schon, was war geparkt? Beim ENT-PARKEN die Park-Prämissen
   neu prüfen), (b) nach außen das Angebot des Drittsystems. Ein „offen"
   im Status kann „Beleg offen" heißen — Bau-Aufträge nur nach positiver
   Ist-Stand-Prüfung als Bau formulieren. Bei Runden mit ≥ 3 Strängen
   zusätzlich EIN Prüf-Subagent mit genau einer Frage: „Welcher Strang
   behandelt etwas als neu, wozu eigener oder Dritt-Bestand existiert?"
   **Auch seine Befunde sind DELEGIERTE Aussagen: sicherheitsrelevante
   Merker daraus misst die Leitsession an der Quelle nach, BEVOR sie in
   einen Prompt wandern** — eine Zuordnungs-Drift des Subagenten wurde
   sonst zur falschen sicherheitsrelevanten Auftragsprämisse.
   (Herkunft: heyPensio R34.)
2. **Umgebung** — Terminal (baut + committet selbst).
3. **Modell** — **die Wahl trifft der USER; die Leitsession empfiehlt
   nur auf gezielte Nachfrage** (CLAUDE.md Regel 7; Herkunft: heyPensio
   R34, User-Entscheid für alle Abteilungen). Der Prompt trägt KEINE
   Modellvorgabe; die Strang-Tabelle dokumentiert die User-Wahl nach.
   Die Session verifiziert ihr TATSÄCHLICHES Modell als ersten Schritt
   NUR per Statuszeile — die Selbstauskunft des Modells ist KEIN Kanal
   (sie hat Abweichungen erfunden); der wirksame Kanal ist der
   User-Handgriff beim Start (Abschnitt 4).
4. **Datei-Scope** — explizite Pfade, **jeder vor der Prompt-Ausgabe per
   Glob existenz-geprüft** (Pfade aus dem Gedächtnis kosten die Session
   Skript-Abbrüche; Herkunft: heyPensio R34). Disjunktheit gegen ALLE
   laufenden Sessions prüfen — **⭐ auch auf VERZEICHNIS-Ebene: Wer legt
   ein neues Verzeichnis AN?** Zwei Sessions mit disjunkten Dateien im
   selben neuen Verzeichnis teilen eine Vorbedingung; die zweite findet
   vor, was ihr Prompt als „existiert noch nicht" beschreibt, und muss
   die eigene Auftragsprämisse verwerfen. Entweder eine Session legt an
   und der Prompt der anderen sagt es, oder die Formulierung lautet
   „lege an, falls nicht vorhanden". (Herkunft: MKT R7, L-20, Fehler
   der Leitsession.) Wahrheits-Kanal (Projektquelle, STATUS.md,
   CLAUDE.md, Skills/Commands) ist NIE Teil eines Scopes.
5. **Exklusive Systeme** — je System immer nur EINE Session; Zuteilung
   benennen. Setzt der Auftrag System-ZUGRIFF voraus, gehört der
   ZUGANGSWEG als Vorbedingung in den Prompt — **je HANDLUNG geprüft**
   (Server-Kommando · API-Call · User-Klick in einer UI sind verschiedene
   Zugangsarten) und NIE aus einer Vorrunde als „geklärt" übernommen.
   Richtige Form: „Zugangsweg X war in R<n> gangbar — prüfe ihn als
   ERSTEN Schritt und melde eine Blockade, statt einen Ersatzkanal zu
   suchen." **Eine Zuteilung ist eine ERLAUBNIS, keine Vorgabe** — die
   Session misst den billigsten Kanal zuerst; die Zuteilung selbst ist
   eine Annahme der Leitsession über das System. (Herkunft: MKT R3,
   zweifach: beide zugeteilten Chrome-Stränge kamen ohne Browser aus.)
6. **Fertig-Kriterium** — überprüfbar, **aber nur mit dem, was die Session
   mit ihrem Werkzeugkasten auch erreichen kann** (sonst produziert eine
   korrekt arbeitende Session ein „nicht erfülltes" Kriterium oder
   Alibi-Zeilen). Bei langen Bau-Sessions: Protokoll entsteht MITLAUFEND
   in der Scope-Doku, nicht als Schlussakt. Abschlussmeldung nennt
   Commit-HASHES — erst NACH dem Commit eingetragen, nie antizipiert.
   Token-Verbrauch kann eine Session NICHT selbst erheben (`/cost` ist
   interaktiv) — Pflichtform in der Meldung: „Token-Verbrauch: von der
   Session nicht erhebbar — Subagenten-Zahlen soweit bekannt: …"; das
   Ablesen ist ein USER-Schritt.
7. **Subagent-Einsatz** — die Leitsession evaluiert PRO STRANG (auch für
   die eigene Aufgabe!), ob die Aufgabenform von Subagents profitiert,
   und bettet eine KONKRETE Anweisung ein — nie die Generik „prüfe, ob
   Subagents sinnvoll sind". Bewährte Muster:
   - **Verifikation mit frischem Kontext:** unabhängiger Prüfer, der die
     Erzeugung nicht gemacht hat. Der Prüfauftrag: ganze Datei lesen und
     quervergleichen (nie nur den Diff — der Schaden sitzt oft daneben);
     Lese-git erlaubt; Schreibrecht auf GENAU EINE Datei (sein Protokoll:
     „lies alles, ändere nichts, schreib EIN Protokoll unter
     `protokolle/R<runde>-<session>-pruefer.md`").
     **Dem Prüfer die ROHBELEGE (heruntergeladene Quelldateien) mit Pfad
     nennen und Zitate/Zahlen selbst nachzählen lassen** — sonst bewertet
     er Plausibilität statt Fundstellen; die Vollständigkeit der
     Rohbeleg-Liste ist Teil des Prüfauftrags und selbst fehleranfällig
     (Befund und Diagnose getrennt lesen). (Herkunft: MKT R3,
     Fangquote 20 Befunde.)
     **Tatsachen-Prämissen im Prüfauftrag sind selbst Prüfgegenstand:**
     Was dem Prüfer als „heute ist X"/„Stand ist Y" mitgegeben wird,
     verbaut er als Wahrheit — Prämissen belegen oder ausdrücklich als
     Annahme kennzeichnen; der Prüfer hält sie im Grenzen-Teil dagegen
     (Beleg: falsche Kalender-Prämisse flog nur so auf; MKT R2).
   - **Verfahrens-Positivkontrolle im Prüfauftrag:** eine bewusst
     verfälschte Variante einer Kernaussage, die der Prüfweg nachweislich
     FINDET — sonst ist er nur bestätigungsfähig. Bedingungen: nach
     sauberem Commit+Push in den Arbeitsbaum einbauen (Ein-Schritt-Rückweg
     `git checkout -- <datei>`; **nach dem Rückbau die Datei vor
     weiteren Edits NEU lesen** — der Session-Kontext ist nach einem
     checkout stale, Edit-Anker können danebengreifen; MKT R2); NIE in
     eine Datei mit Live-Wirkung; der
     Prüfer begründet den Fund INHALTLICH, nicht mit „steht im Diff" —
     **und der Prüfauftrag weist ihn EXPLIZIT an, den Arbeitsbaum-Diff
     nicht zu sichten** (sonst misst die Kontrolle seine Forensik statt
     seines Inhalts-Verfahrens; ohne Anweisung ist es Zufall, ob er ihn
     zieht — beide Varianten real vorgekommen, MKT R2);
     **den User VOR dem Einbau kurz im Chat vorwarnen** (nie in der
     Datei — das würde den Prüfer kontaminieren): Eine Mid-Turn-Sichtung
     hält die beabsichtigte Verfälschung sonst für einen echten Fehler
     (Herkunft: MKT R1).
     Zusatzfrage: „Welche Verfälschung hätte dein Verfahren NICHT
     gefangen?" — der Prüfweg benennt seine eigene Blindstelle.
     **Die Verfälschung selbst muss FALSCH sein, nicht nur ungenau**
     (eine vertretbare Variante belegt nichts), **und sie setzt an einer
     KERN- oder sicherheitsrelevanten Aussage an**, nicht an einem
     Tippfehler — der Widerleg-Beleg trägt dann entsprechend mehr.
     (Herkunft: heyPensio R34, beide Sessions unabhängig.)
   - **Gegenfrage-Achse MIT benannten Kategorien:** „Welcher Aspekt fehlt
     komplett?" mit expliziten, dem GEGENSTAND angepassten Kategorien und
     Pflicht-Ergebnis je Kategorie (auch „keine Auffälligkeit") — eine
     offene „was fehlt?"-Frage findet diese Funde nicht (Herkunft:
     heyPensio, vierfach belegt). Dazu die Positivkontrollen-Zusatzfrage
     an den Prüfer: **„Hättest du diese Funde auch OHNE den
     Kategorien-Hinweis gefunden?"** — misst, ob der Katalog trägt oder
     nur bestätigt (Herkunft: heyPensio L-25).
   - **⭐ Agenten ausdrücklich auf den UNBEQUEMEN Pol verpflichten.** Der
     Satz „Wo die Rechtslage/Sachlage streitig ist, ist ‚streitig' der
     Eintrag, nicht der bequemere Pol" hat in MKT R7 sichtbar gewirkt:
     Drei Agenten widerlegten Auftrags-Prämissen, statt sie zu bestätigen
     — einer schrieb ausdrücklich, „streitig" wäre hier der bequemere Pol
     gewesen. Ohne diesen Satz tendiert ein Agent zur Bestätigung dessen,
     was der Prompt nahelegt.
   - **Nachfordern statt rekonstruieren:** Kommt von einem Agenten nur
     ein Nachtrag oder Teilbericht an, ist die gezielte Nachforderung des
     Hauptberichts billiger und belastbarer, als die fehlenden Teile aus
     dem Vorhandenen zu erschließen. (Herkunft: MKT R7, zwei Fälle.)
   - **Zwei Prüfer mit GETRENNTEN Fragen schlagen einen mit zwei Fragen**
     (Prüfraum teilen, nicht verdoppeln). Widersprüche zwischen Agenten
     sind ein Gewinn — sie werden am ORIGINAL aufgelöst, nie nach
     Überzeugungskraft.
   - **Prüfgegenstand einfrieren** oder Commit-Stand nennen (das Dokument
     kann sich WÄHREND der Prüfung ändern). ⭐ **Pflichtform: ein
     eingefrorener Commit-Hash IM Prüfauftrag** — der
     Doppel-Messstand-Vertrag gilt auch gegenüber dem EIGENEN Prüfer. Wer
     während des Prüflaufs committet, ändert den Gegenstand unter ihm;
     der Prüfer meldet dann eine Verfahrensverletzung statt eines
     Sachbefunds. (Herkunft: MKT R7, vom Prüfer selbst gemeldet.)
   - **Recherche-Fan-out** je Anbieter/Quelle bzw. je QUELLDOKUMENT ein
     Agent — **ein Agent je QUELLDOKUMENT schlägt einen Agenten je
     BEFUND**, mit dem Auftrag „Absatz davor und danach mitlesen": In
     MKT R7 fanden alle vier Zitat-Agenten MEHR, als der jeweilige Befund
     behauptete (ein Sektionssprung statt Absatzsprung, ein zusätzlich
     eingefügter Punkt, ein Zitat zur Hälfte aus einem geschlossenen
     Overlay). Wer nur die Behauptung prüft, findet nur die Behauptung.
     Getrennte Fundstellen-Nachprüfung dahinter — **und delegierte ZAHLEN
     nie ohne mitgelieferten Zählweg übernehmen** (L-15).
   - **Festgefahrenes Debugging:** ab 3 Versuchen ohne Fortschritt EIN
     read-only Subagent mit frischem Kontext; Befund an der Quelle
     verifizieren.
   KEINE Subagents für: sequentielle Live-E2E-Flows gegen exklusive
   Systeme, Git-Operationen, kleine mechanische Edits. Subagent-Befunde
   sind delegierte Aussagen — Negative wie Positive an der Quelle
   verifizieren. Mechanische Scans → kleines Modell; Prüfer, deren Funde
   Kernaussagen kippen können → Session-Modell.
   Für Multi-Agent-Workflows (ultracode, User-Opt-in): Empfehlung an den
   User mit konkretem Zuschnitt (was fächert, was verifiziert, was
   synthetisiert) und Begründung, warum ein einzelner Subagent nicht
   reicht — Completeness-Critic ist Pflicht-Bestandteil jedes
   Plan-Workflows und prüft ausdrücklich auch die AUFTRAGS-PRÄMISSEN.

### Vorlage Terminal-Session

> Modell für diese Session: **<Modell>**. Parallel-Session „R<runde>-<X>"
> (Leitsession läuft separat, Multi-Session-Modell lt. CLAUDE.md).
> Session-Start: `git pull`. Aufgabe: <Ziel — mit Doku-Verweisen>.
> Dein Scope: <explizite Pfade>. Exklusiv gehören dir: <Systeme — oder
> „keine externen Systeme">. Fremde uncommittete Dateien im `git status`
> ignorieren. Committen nur mit `git add <deine Pfade>` und
> `git commit -F <msgdatei> -- <deine Pfade>`; Reihenfolge zwingend
> add → commit → `git pull --rebase --autostash` → push (CLAUDE.md
> Regel 3). NICHT anfassen: Projektquelle, STATUS.md, CLAUDE.md,
> Skills/Commands — kein eigener Debrief. Fertig-Kriterium:
> <überprüfbares Ergebnis>, danach Abschlussmeldung in VIER Blöcken
> (gebaut/verifiziert mit Commits+Pfaden; offen geblieben; **Nebenbefunde
> außerhalb des Auftrags** — was dir begegnet ist, das einem anderen
> Strang gehört; Stolpersteine/Learnings, getrennt: (i) Fallen ·
> (ii) bewährte Muster). **Lief ein Prüfer, meldest du seine Befunde
> kategorienweise MIT NENNER** („x von y repariert, z bewusst offen mit
> Grund, Träger für den Rest") — nie nur die reparierten plus eine
> Auswahl. **Die Abschlussmeldung committest du zusätzlich
> als Datei `protokolle/R<runde>-<session>-abschluss.md`** mit Kopfzeile
> „Token-Verbrauch: von der Session nicht erhebbar — Subagenten-Zahlen
> soweit bekannt: …". Liefen unabhängige Prüfer, gehört ihr Protokoll
> (Funde + Positivkontrolle) daneben:
> `protokolle/R<runde>-<session>-pruefer.md`.

## 3. Abschlussprompt bauen (`abschluss <session>`)

Nur nötig, wenn die Session ihren Start-Prompt OHNE
Abschlussmeldungs-Teil bekommen hat oder der User explizit einen will:

> Die Session wird jetzt abgeschlossen (Multi-Session-Modell lt.
> CLAUDE.md): KEIN eigener Debrief, NICHTS an
> CLAUDE.md/Skills/Projektquelle/STATUS.md.
> 1. Alles aus deinem Scope versionieren (Reihenfolge add → commit →
> `git pull --rebase --autostash` → push).
> 2. Als letzte Antwort die Abschlussmeldung in VIER Blöcken — Struktur
> exakt wie in der Start-Prompt-Vorlage (Abschnitt 2), inklusive der
> Protokoll-Datei. Danach nichts mehr ändern.

## 4. Ausgabe

Die fertigen Prompts als Blockquotes zum Kopieren, davor eine Zeile pro
Session: Name · Modell · Scope-Kurzform · exklusive Systeme.
**Über JEDEM Prompt eine sichtbare User-Handgriff-Zeile: „Vor dem
Einfügen: NEUES Session-Fenster öffnen und DEIN Modell einstellen."** —
die Modellwahl liegt beim User (Empfehlung nur auf Nachfrage), und der
Start-Handgriff ist ihr einziger wirksamer Kanal. **„NEUES Fenster" ist
Teil des Handgriffs:** Ein altes Session-Fenster trägt den Regel-Snapshot
seines Starts (CLAUDE.md/Skills VOR dem letzten Debrief) und das Modell
der alten Runde. **Und `/cost` je Arbeits-Session wird abgelesen, BEVOR
ein Fenster geschlossen oder gecleart wird** — ein `/clear` löscht die
Ablesbarkeit endgültig. (Herkunft: heyPensio R34, User-Versehen mit
glimpflichem Ausgang.)

**Session-Namen tragen die RUNDE:** `R03-A`, `R03-B` — nie nur `A`, `B`.
Buchstaben nicht überspringen; übernimmt die Leitsession einen Strang,
wird der Buchstabe frei gelassen und vermerkt. Kollidieren zwei Scopes,
das VOR der Ausgabe auflösen, nicht dem User überlassen.

**Sequenzierte Sessions: den abhängigen Prompt ZURÜCKHALTEN** und erst
nach der Abschlussmeldung der Vorgänger-Session ausgeben — ein „startet
NACH X" im Prompttext wird im Parallel-Alltag überlesen.

---
**Merksatz:** Der Prompt ist der Vertrag der Session — was nicht drinsteht
(Scope, Exklusivität, Fertig-Kriterium, Abschlussmeldung), kann die
Leitsession hinterher nicht einfordern. Und der Tagesstart ist der Vertrag
der Leitsession: erst die alte Runde schließen, dann die neue öffnen.
