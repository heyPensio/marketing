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

**Einstiegs-Auftrag HOLEN statt pasten lassen (seit 11.08.2026):** Liegt
ein Firmen-Briefing des angebrochenen Arbeitstags vor
(`<FIRMENWURZEL>\zentrale\briefings\` — `<FIRMENWURZEL>` = Elternordner
der eigenen Repo-Wurzel [`git rev-parse --show-toplevel`], F13
12.08.2026; neuester Slot —
Über-Mitternacht-Fenster zählen zum angebrochenen Tag), liest die
Leitsession ihren Einstiegs-Auftrag SELBST aus dessen Abschnitt
„Einstiegs-Prompts" (eigene Abteilung): Tagesrahmen-Eckwerte,
Schwerpunkte, Terminposten und Prämissen-Kasten stehen dort — der User
startet nur mit einem Einzeiler. Die Datei ist der vom User bestätigte
Stand (das `/briefing` schreibt sie erst nach seinem Entscheid); pastet
der User dennoch einen Prompt, gewinnt der gepastete Text als der
neuere. **„Als der neuere" ist wörtlich zu nehmen: Trägt die
Briefing-/Übergabe-DATEI jüngere Nachträge als der Paste
(Korrektur-Kästen, spätere Stände), gewinnt die DATEI — die Abweichung
wird gemeldet, nicht still aufgelöst** (Herkunft: heyPensio R38 — der
gepastete Zwischenruf war der Vormittags-Stand, die Datei trug bereits
eine zurückgezogene Antwort und drei geschlossene Restposten). Kippt
eine Prämisse des Kastens aus Sicht der Leitsession:
melden statt starten. (Grund: Chat-Prompts sind ein Zwischenzustand mit
Verfallsdatum — ein Block startete ohne Input, weil sein Prompt nur im
Zentrale-Chat existierte; Paste-Abschneide-Risiko entfällt mit.)
Widerruft die Zentrale einen schon ausgegebenen Auftrag, geschieht das
ausschließlich über ein KORREKTUR-Slot-Briefing
(`…-korrektur[-n].md`, kenntlich am additiven Kopf-Verweis im alten
Slot) — der neueste Slot gewinnt; alte Briefing-Texte selbst werden
nie umgeschrieben.

⚠️ **DIE HANDGRIFF-LISTE WIRD MIGRIERT, NICHT NEU ERHOBEN.** Ein neuer
Tagesplan entsteht aus dem Status-Dokument **plus der Handgriff-Liste des
VORTAGS**. Sonst fällt genau der Handgriff heraus, der nirgends sonst
geführt wird: In einem realen Fall war ein Handgriff am Vortag **dreimal**
besprochen und ausdrücklich auf „den Morgen" verortet — im neuen Plan
**null Treffer**, und er war der **einzige Auslöser für sämtliche Zugänge
eines ganzen Arbeitsstrangs**. **Operative Form: vor dem Schreiben die
Handgriff-Tabelle des Vortags öffnen und jede Zeile ausdrücklich
disponieren** (übernommen / erledigt mit Beleg / entfallen mit Grund). Ein
Handgriff ohne Disposition ist ein verlorener Handgriff — und dass sein
Erledigungsstand **nicht messbar** ist (privater Kanal), macht die
Migration wichtiger, nicht unwichtiger. *(Herkunft: heyPensio R36, von
einer Arbeits-Session gefangen.)*

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
   `git -C "<FIRMENWURZEL>\projektgeruest" log --oneline <stempel>..HEAD`.
   Liefert das Zeilen, ist die Methodik dieses Projekts VERALTET: Delta
   (mit `LEHREN-CHANGELOG.md`-Einträgen) dem User melden und
   `/projekt-init nachzug` als Tagesposten vorschlagen. Nie
   stillschweigend weiterlaufen und NIE den Stempel ohne durchgeführten
   Nachzug anheben — der Stempel ist der Beleg des Nachzugs, kein
   Beruhigungsdatum.
   **Kopie-Drift prüfen (im selben Schritt):**
   `node "<FIRMENWURZEL>\projektgeruest\tools\pruefe-kopien.js" "<REPO_ROOT>"`
   — meldet das Werkzeug DRIFT, lebt eine Methodik-Änderung nur in der
   Projekt-Kopie (Master-zuerst-Regel verletzt) oder ein Vorlagen-Update
   wurde hier nicht nachgezogen: STOPP, dem User melden, auflösen — nie
   stillschweigend weiterarbeiten. INFO-Zeilen (projektspezifische oder
   nicht aktivierte Dateien) sind Lesestoff, keine Befunde.
   **Budget-Wächter im selben Schritt (falls das Projekt einen führt;
   Herkunft: heyPensio R42):** CLAUDE.md-Größe gegen die projektweiten
   Marken messen (beide Zählwege: Bytes inkl. CRLF + Codepoints, der
   größere zählt; Arbeitsbaum UND versionierter Stand); Ergebnis-Zeile
   in den Tagesplan. Rot (≥ Hartmarke) heißt: Verdichtungs-Posten VOR
   jeder neuen Sachrunde disponieren, nie stillschweigend weiterlaufen.
   **Loader-Kanarienvogel (Herkunft: heyPensio R42) — AUSLÖSER-gebunden
   (CLI-Versionswechsel), nicht ritual-gebunden:** Der Lade-Mechanismus
   (path-rules/Skill-Trigger) ist eine Fremdsystem-Abhängigkeit und
   kann bei CLI-Updates STILL wegbrechen; einmalige Migrations-Tests
   reichen nicht. Jede `.claude/rules/*.md` trägt als erste
   Inhaltszeile eine Kanarien-Zeile; weicht die CLI-Version vom letzten
   Tagesplan-Vermerk ab: je Rules-Datei den Trigger-Test fahren (eine
   Datei im Pfad-Scope lesen — kommt die Kanarien-Zeile im Kontext an?
   PLUS Gegenrichtung: ein Read außerhalb des Scopes darf sie nicht
   laden) und EIN Skill-Invoke als Trigger-Probe; Ergebnisse mit
   CLI-Version in den Tagesplan. Klasse „Anwesenheit ist nicht
   Wirksamkeit", angewandt auf den Loader selbst.
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
   (`<FIRMENWURZEL>\zentrale\briefings\`), dessen Mail-Triage
   für die eigene Abteilung übernehmen und nur die EIGENEN Fäden
   vertieft nachladen (`get_thread`) — KEINE zweite Volldurchsicht
   (Token + Doppellektüre). **Rückfallregel:** OHNE aktuelles Briefing
   gilt die VOLLDURCHSICHT seit der letzten Runde, nicht nur bekannte
   Fäden — die Lücke „niemand hat geschaut" darf nie entstehen. Nur
   sichten, nichts beantworten. Und den User explizit
   fragen, was außerhalb passiert ist (Anrufe, Entscheide, Befunde).
   **JEDER Eingang bekommt bei der Sichtung eine DISPOSITION — Zielort +
   wer arbeitet ihn WANN in die Bestandsdokumente ein:** Ein nur im
   Tagesplan notierter Eingang ist gesichtet, nicht eingearbeitet; eine
   später aus den BESTANDSDOKUMENTEN erhobene Liste führt dieselben
   Punkte sonst als offen, während die Antwort längst im Postfach liegt
   (Herkunft: heyPensio R38 — fünf Tage gealterte „unbeantwortet"-Posten
   neben ihrer notierten Antwort).
   **⭐ Briefing-NACHTRÄGE: Ankunft am eigenen Repo-Bestand MESSEN, nie
   aus dem Gedächtnis ableiten** (Herkunft: MKT R14): Nachträge können
   WÄHREND oder Minuten nach dem eigenen Debrief eintreffen — je
   Nachtrag ein grep auf seine Kernbegriffe übers eigene Repo plus eine
   Positivkontrolle mit einem nachweislich eingearbeiteten Nachtrag;
   0 Treffer heißt „nicht disponiert", egal was die Erinnerung sagt
   (drei Nachträge lagen so unbemerkt, einer kippte einen zentralen
   Vorbehalt).
4. **Neue Runde vorschlagen:** Aus STATUS.md („Nächster konkreter
   Schritt"), Eingängen und User-Zuruf die Stränge schneiden — disjunkte
   Scopes, exklusive Systeme (je System EINE Session), Modellwahl je
   Strang (CLAUDE.md Regel 7) — und dem User als Aufteilung vorlegen.
   **Pflicht-Prüfung JE STRANG dabei: Ist das ein CODEX-Kandidat?**
   (Maßstab: hartes, maschinell prüfbares Fertig-Kriterium · kein
   Urteil über Belegstufe · kein Kerndokument-Schreibrecht nötig —
   Kriterien-Volltext `zentrale\rollen-charta.md` „Codex",
   Dispositions-Pflicht). Das Ergebnis steht sichtbar in der
   vorgelegten Aufteilung als **PFLICHTZEILE `Codex: ja/nein — <Grund>`
   je Strang** — Format-Träger statt Fließtext-Regel, damit ihr FEHLEN
   auffällt: Schweigen ist keine Prüfung, und das wird nur sichtbar,
   wenn die Zeile strukturell erwartet wird (Herkunft: Zentrale
   13.08.2026, nachdem die Fließtext-Fassung zweimal folgenlos blieb).
   Die Pflichtzeile gilt **auch für Aufträge, die fertig aus einem
   Briefing kommen** — das Pull-Modell umgeht diesen Schritt nicht.
   ⚠️ **Ein UMGESCHNITTENER Strang erbt seinen Codex-Ausweis NICHT**
   (Belegfall MKT R15, 14.08.2026: Nach der Prüfer-Disposition wurde
   ein Strang inhaltlich komplett ersetzt, die Codex-Zeile beschrieb
   weiter den alten Inhalt). Ändert sich der Inhalt eines Strangs,
   wird die Pflichtzeile **neu gestellt**, nicht mitgeschleift —
   dieselbe Klasse wie jede andere Aussage, die wahr geschrieben und
   still falsch wird. Praktische Form: Die Zeile trägt den
   Strang-Inhalt in drei Worten mit, dann fällt ihre Veraltung auf. Die WERKZEUGWAHL trifft der User (Richtungsentscheid
   10.08.2026: Werkzeug- und Kostenwahl gehören dem User) — die
   Evaluation zu liefern ist Bringschuld der Leitsession, nie erst auf
   User-Impuls. (Anlass: User-Fang 12.08.2026 — bis dahin stellte
   keine Leitsession die Frage selbst.) **⭐ GESCHÄRFT (Herkunft:
   heyPensio R40, ZWEITER User-Fang derselben Klasse): Die Prüfung
   läuft auf TEILAUFGABEN-Ebene, nie nur auf Strang-Ebene — und ein
   pauschales „nicht geeignet" aus einem Briefing/Vorlauf wird NIE
   ungeprüft übernommen.** Prüffrage je Strang: „Welcher ERHEBUNGS-Teil
   dieses Strangs hat ein hartes, maschinell prüfbares Soll?" (In R40
   steckten in drei Nein-Strängen zwei saubere Fremdagent-Erhebungen —
   herausgefragt hat sie wieder der User.)
   **⭐ Auftragsform, wenn ein Strang an Codex geht (am ersten realen
   Auftrag bewährt, MKT R9):** Zuschnitt „**Codex inventarisiert und
   misst — die Leitsession bewertet**"; der Auftrag verlangt
   ausdrücklich KEIN Belegstufen-Urteil („ob eine Quelle eine Aussage
   trägt, entscheidet die Leitsession"). Dazu vier feste Auflagen:
   **eingefrorener Commit-Hash** als Prüfstand (der Arbeitsbaum läuft
   unter dem Fremdagenten weiter) · **nur lesend, genau eine
   Berichtsdatei** · **kein Commit/Push** (die Commit-Fähigkeit eines
   Fremdagenten ist unbelegt, solange sie niemand gemessen hat) ·
   **Scratch-/Zwischendateien NUR außerhalb des Repos** (Session-
   Scratchpad — MKT R16: ein Fremdagent legte `.r16b-scratch-<hash>/`
   im Repo-Root an; im geteilten Arbeitsbaum ist das eine untracked
   Datei mehr, die keine Session zuordnen kann) ·
   Pflichtabschnitte „nicht erhoben / nicht prüfbar" und „welcher meiner
   Prüfschritte hätte einen vorhandenen Fehler NICHT finden können?".
   ⚠️ **Und die Rücklauf-Regel: Eine `git status`-Aussage eines
   Fremdagenten ist nicht ohne eigene Gegenmessung übernehmbar** — er
   sieht den Arbeitsbaum in einem anderen Benutzer-/Konfigurationskontext
   (belegt: gemeldete „untrackte" Datei war lokal global git-ignoriert).
   ⚠️ **Und die Bau-Regel: Ein von einem Fremdagenten nur GEPARSTER
   Skript-/Bau-Erfolg ist kein AUSFÜHRUNGS-Beleg** (Herkunft: Zentrale
   13.08.2026, Broker-Deployskripte: „Parser PASS" — beim ersten echten
   Lauf fielen nacheinander drei Blocker, die nur der Lauf zeigt).
   Skript-, Installations- und Migrations-Aufträge tragen deshalb einen
   **echten Ausführungslauf im Fertig-Kriterium** — sonst gilt ihr
   Ergebnis bis zum ersten realen Lauf als UNGEPRÜFT.
   ⚠️ **Das Fertig-Kriterium muss zur Auftragsart passen — sonst ist es
   unerfüllbar** (Belegfall MKT R15, 14.08.2026: ein
   Zentrale-/Leitsessions-Kriterium „Regression alt-ROT/neu-GRÜN" für
   die ERWEITERUNG eines Prüfwerkzeugs; beide Läufe kamen Exit 0, und
   „neu-GRÜN" war strukturell unerreichbar):
   - **Fehlerbehebung** → Regression **alt-ROT / neu-GRÜN**: Der Test
     muss VOR dem Fix rot sein, sonst reproduziert er den Defekt nicht.
   - **Reichweiten-Erweiterung eines Wächters/Prüfskripts** → **NICHT**
     alt-ROT/neu-GRÜN. Ein erweiterter Wächter darf hinterher
     berechtigt ROT sein (er findet jetzt echte Fundstellen); sein
     Exit-Code ist kein Erfolgsmaß. Richtiges Kriterium:
     **Positivkontrolle** (er findet eine bekannt fehlerhafte Stelle)
     **+ Negativkontrolle** (er meldet eine bekannt saubere Stelle
     nicht) **+ Nenner** (n von n neu erfassten Dateien geprüft).
   - **Werkzeug mit Schutzwirkung** → zusätzlich `--selbsttest` in
     beide Richtungen (er schlägt an, wenn der Schutz fehlt, und
     schweigt, wenn er greift). Die Pflichtabschnitte fangen das, WENN man sie liest:
   Der Bericht hatte die Grenze selbst benannt.
5. **Nach Bestätigung:** Start-Prompts nach Abschnitt 2 erzeugen und nach
   Abschnitt 4 ausgeben.

## 2. Start-Prompt bauen (`start <aufgabe(n)>`)

Vorab: Welche Sessions laufen bereits, mit welchen Scopes? Saubere Basis
(CLAUDE.md Regel 5)? Pro Session diese sieben Bausteine festlegen — fehlt
einer, beim User nachfragen statt raten:

1. **Ziel/Aufgabe** — konkret, mit Verweis auf Bauplan/Doku im Repo statt
   Nacherzählung. **⭐ Bei Einarbeitungs-/Übertragungs-Aufträgen
   (Befunde oder Entscheide aus Meldungen in Bestandsdokumente): Der
   Prompt verpflichtet die Session ausdrücklich, jeden Quell-Befund am
   ROHBELEG gegenzuprüfen statt ihn zu übertragen** — Abschlussmeldungen
   sind Quellen zweiter Hand, auch aus dem eigenen Haus (Herkunft:
   MKT R14 — 3 von 10 hielten nicht stand, alle Korrekturen in die
   unbequemere Richtung). **Pflicht davor: Ist-Stand-Prüfung des
   Auftragsgegenstands durch die Leitsession SELBST, BEVOR der Prompt
   geschnitten wird** (nie als ersten Arbeitsschritt delegieren) —
   ZWEISEITIG: (a) nach innen Repo-grep über Modulname + Synonyme (was
   existiert schon, was war geparkt? Beim ENT-PARKEN die Park-Prämissen
   neu prüfen), (b) nach außen das Angebot des Drittsystems. Ein „offen"
   im Status kann „Beleg offen" heißen — Bau-Aufträge nur nach positiver
   Ist-Stand-Prüfung als Bau formulieren. **⭐ Bestandsangaben im Prompt
   sind Prämissen mit Verfallsdatum — beim SCHÄRFEN eines geerbten
   PROGNOSE-Zuschnitts neu messen, nie übernehmen:** Eine aus der
   Vorrunden-Prognose übernommene Formulierung („einziger belegter
   Anker") unterschlug sechs geprüfte Bestandsanker; gefangen hat es
   erst der Bestands-grep der Arbeits-Session, nicht die Leitsession
   (Herkunft: MKT R11). Bei Runden mit ≥ 3 Strängen
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
   „lege an, falls nicht vorhanden". (Herkunft: MKT R7.)
   **⭐ UND: Die Scope-Grenze wird auf DATEI-Ebene gezogen, nicht auf
   Verzeichnis-Ebene, sobald zwei Stränge dasselbe Verzeichnis berühren.**
   Ein ganzes Verzeichnis an Strang 1 zu vergeben, während Strang 2 an
   einer einzelnen Datei darin arbeitet, ist kein disjunkter Scope — die
   betroffene Session hat es gemeldet und nichts angefasst, der Schaden
   blieb aus, der Zuschnitt war trotzdem falsch. Dieselbe Klasse wie
   „Datei-Scope ist kein Zeilen-Scope", eine Ebene höher. **Prüfform: vor
   der Ausgabe je Strang die konkreten DATEIEN auflisten und paarweise
   gegen die anderen Stränge schneiden** — n Stränge heißen n·(n−1)/2
   Paare. (Herkunft: heyPensio R36.) Wahrheits-Kanal
   (Projektquelle, STATUS.md, CLAUDE.md, Skills/Commands) ist NIE Teil
   eines Scopes.
5. **Exklusive Systeme** — je System immer nur EINE Session; Zuteilung
   benennen. Setzt der Auftrag System-ZUGRIFF voraus, gehört der
   ZUGANGSWEG als Vorbedingung in den Prompt — **je HANDLUNG geprüft**
   (Server-Kommando · API-Call · User-Klick in einer UI sind verschiedene
   Zugangsarten) und NIE aus einer Vorrunde als „geklärt" übernommen.
   Richtige Form: „Zugangsweg X war in R<n> gangbar — prüfe ihn als
   ERSTEN Schritt und melde eine Blockade, statt einen Ersatzkanal zu
   suchen." **⭐ Fällt DIESELBE Vorbedingung ZWEIMAL in Folge, wird der
   Zugang ein EIGENER, abgeschlossener VORGANG (mit dem User) VOR dem
   Strang — nicht erneut Schritt 1 im Strang:** Der Zuschnitt setzt
   sonst jedes Mal voraus, was jedes Mal fehlt, und jeder Anlauf
   verbrennt seinen Setup-Block, ohne dass die Sache vorankommt
   (Herkunft: heyPensio R40 — drei E2E-Anläufe an drei Tagen an
   derselben Vorbedingung). **Eine Zuteilung ist eine ERLAUBNIS, keine
   Vorgabe** — die
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
6b. **Session-Limit ist ein RUNDENRISIKO bei Fan-outs** (Herkunft: heyPensio R37): Mehrere gleichzeitig gestartete Subagenten koennen gemeinsam am Session-Limit sterben (Reset zur vollen Stunde). Auftraege so schneiden, dass die Session bei Agenten-Ausfall selbst weiterarbeiten kann (unabhaengige Teile); nach dem Reset neu starten.

7. **Subagent-Einsatz** — die Leitsession evaluiert PRO STRANG (auch für
   die eigene Aufgabe!), ob die Aufgabenform von Subagents profitiert,
   und bettet eine KONKRETE Anweisung ein — nie die Generik „prüfe, ob
   Subagents sinnvoll sind". Bewährte Muster:
   - **Verifikation mit frischem Kontext:** unabhängiger Prüfer, der die
     Erzeugung nicht gemacht hat. Der Prüfauftrag: ganze Datei lesen und
     quervergleichen (nie nur den Diff — der Schaden sitzt oft daneben);
     **dazu die LÖSCHUNGEN gesondert: `git diff --numstat
     <vorher>..<prüfstand>` ziehen und JEDE gelöschte Zeile einzeln
     sichten** — bei Hunderten Einfügungen liest niemand die wenigen
     Löschungen; eine still gelöschte Kopfkasten-Überschrift (einzige
     Löschung der Datei, der Nachtrag daneben behauptete das Gegenteil)
     fiel nur über die Zählung auf — „der Kategorien-Hinweis hat hier
     gearbeitet, nicht ich" (Prüfer-Selbstauskunft; Herkunft: MKT R13);
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
     eine Datei mit Live-Wirkung — **⭐ bewährte Pflichtform dafür
     (Herkunft: heyPensio R40): SCRATCHPAD-KOPIE des Prüfgegenstands
     als Prüfstand, und der USER pflanzt die Verfälschung per
     Direktkanal** (cp + sed-Einzeiler mit Kontrollzeile; Soll-Zahlen
     per `grep -o|wc -l`, nie `grep -c`) — die Kopie ist byte-identisch
     bis auf die eine Stelle, echte Funde übertragen sich 1:1, kein
     git-Rückbau nötig, und Sicherheits-Klassifikatoren blockieren das
     Agenten-Pflanzen in Produktiv-Spiegeldateien ohnehin zu Recht; der
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
     heyPensio, vierfach belegt). **⭐ Pflicht-Kategorie in jedem
     Prüfauftrag mit Quellenbezug: „Was aus der Quelle ist gar nicht
     erst angekommen?" — von der QUELLE RÜCKWÄRTS lesen:** Fehlende
     Vorbehalte und ausgelassene Pflichten erzeugen keine auffällige
     Textstelle im Zieldokument; drei der schwersten Befunde eines
     Laufs waren Abwesenheiten und nur über diese Leserichtung findbar
     (Herkunft: MKT R8, Prüfer-Selbstauskunft: ohne die Kategorie wäre
     der Befundtyp komplett ausgefallen). Dazu die Positivkontrollen-Zusatzfrage
     an den Prüfer: **„Hättest du diese Funde auch OHNE den
     Kategorien-Hinweis gefunden?"** — misst, ob der Katalog trägt oder
     nur bestätigt (Herkunft: heyPensio L-25).
     **⭐ Und der SUCHRAUM der Kategorie wird weit gefasst:** Die
     Rückwärts-Kategorie mit eng benanntem Quellabschnitt führt den
     Prüfer zur ENTWARNUNG („alles angekommen"), wenn der relevante
     Posten in der Nachbar-Rubrik desselben Dokuments steht —
     Pflichtform: das DOKUMENT als Leseraum nennen, den Abschnitt nur
     als Einstieg, plus die Prüfraum-Regel „der Prüfgegenstand ist das
     Dokument, der PRÜFRAUM ist alles, worauf es zeigt" (der Prüfer
     öffnet auch die referenzierten Abschnitte der Quellen).
     (Herkunft: MKT R12 — dieselbe Verengung in Bau und Prüfung
     derselben Runde; Prüfer-Selbstauskunft „Kategorie richtig,
     Suchraum zu eng".)
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
   - **⭐ Blinde Zweitmeinung:** Soll eine Empfehlung/Analyse
     UNVOREINGENOMMEN wiederholt werden, bekommt der Agent (i) einen
     **eingefrorenen Commit-Stand VOR den eigenen Arbeitsständen** als
     einzigen Quellenraum (`git show <hash>:` — die eigenen Ergebnisse
     existieren dort noch nicht), (ii) eine **Kontaminations-SPERRE MIT
     MELDEPFLICHT** (Ausschluss-Dateien benennen; Berührung wird in
     einem eigenen Berichtsabschnitt gemeldet, nie still fortgesetzt —
     die Meldepflicht ist der wirksame Teil), (iii) einen **neutralen
     Auftrag ohne Optionen-Framing.** Rückläufe im Scratchpad
     zwischenlagern, bis der LETZTE Lauf zurück ist (ein Repo-Commit
     kontaminiert laufende Läufe); Restlücke: das Session-Scratchpad ist
     agentenübergreifend sichtbar — dort fängt nur die Meldepflicht.
     Einordnung: **blind ≠ unabhängig** (gleicher Auftrag/Commit/
     Modellfamilie) — Konvergenz belegt primär die Klarheit des
     Bestands. (Herkunft: heyPensio R41, vier Läufe sauber.)
   - **Zwei Prüfer mit GETRENNTEN Fragen schlagen einen mit zwei Fragen**
     (Prüfraum teilen, nicht verdoppeln). Widersprüche zwischen Agenten
     sind ein Gewinn — sie werden am ORIGINAL aufgelöst, nie nach
     Überzeugungskraft.
   - **⭐ Gegenlese-Zuschnitt, der trägt (MKT R17: fünf schwere Befunde
     aus einem „kurzen Gegenleser mit einer Frage"):** (a) „Aussage UND
     Fundstelle getrennt prüfen" zwingt zum Lesen des Quellabsatzes am
     Stück statt zum Grep; (b) „… oder die STILLSCHWEIGEND auf X
     aufsetzt" stellt vom Wort auf die Struktur um; (c) zwei
     nachprüfbare eigene Behauptungen mitgeben kalibriert, ob der Prüfer
     am Objekt arbeitet. **Und: Prompts übergeben MESSUNGEN, keine
     Reparaturwege** — ein aus einem Subagenten-Befund übersetzter Weg
     („Präfix ergänzen, mechanisch") war falsch; das Ziel schlägt den Weg.
   - **Prüfgegenstand einfrieren** oder Commit-Stand nennen (das Dokument
     kann sich WÄHREND der Prüfung ändern). **Und die eigene Arbeit darf
     danach WEITERGEHEN:** Fällt ein Selbstfund nach dem Prüfstand, sieht
     der Prüfer ihn nicht und meldet ihn unabhängig — zwei Wege zum
     selben Befund, mit mehr Widerlegungen und der übersehenen Folgefrage
     (MKT R17); wer den Prüfauftrag nach einem Selbstfund verengt,
     verliert genau das. Scratch-Prüfstand: `git archive <hash>` in den
     Session-Scratchpad; bei Delta-Zahlen zwei Exporte (A = Stand, B = A
     + eigene Dateien) mit `diff -rq` als Beleg der Isolation. ⭐ **Pflichtform: ein
     eingefrorener Commit-Hash IM Prüfauftrag** — der
     Doppel-Messstand-Vertrag gilt auch gegenüber dem EIGENEN Prüfer. Wer
     während des Prüflaufs committet, ändert den Gegenstand unter ihm;
     der Prüfer meldet dann eine Verfahrensverletzung statt eines
     Sachbefunds. (Herkunft: MKT R7, vom Prüfer selbst gemeldet.)
     **Bewährte Ausbaustufe: der Prüfer liest Prüfgegenstand UND die
     referenzierten Quellen per `git show <hash>:<pfad>` in der
     Commit-Fassung** — Arbeitsbaum-Drift ist damit auch auf der
     Quellen-Seite ausgeschlossen, der Lauf reproduzierbar.
     (Herkunft: MKT R12.)
   - **⭐ Ein Agent je QUELLDOKUMENT schlägt einen Agenten je BEFUND**,
     mit dem Auftrag „Absatz davor und danach mitlesen": In MKT R7 fanden
     alle vier Zitat-Agenten MEHR, als der jeweilige Befund behauptete
     (ein Sektionssprung statt Absatzsprung, ein zusätzlich eingefügter
     Punkt, ein Zitat zur Hälfte aus einem geschlossenen Overlay). Wer nur
     die Behauptung prüft, findet nur die Behauptung. **Delegierte ZAHLEN
     nie ohne mitgelieferten Zählweg übernehmen.**
   - **Recherche-Fan-out** je Anbieter/Quelle bzw. je QUELLDOKUMENT ein
     Agent; getrennte Fundstellen-Nachprüfung dahinter. **⭐ Und den
     Agenten die WERKZEUGFALLEN der aktivierten Bausteine explizit in
     den Prompt geben** (Roh-HTML archivieren, Positivkontrolle je
     Lauf, Steuerbasis als eigene Prüfung, …) — Wirkungsbeleg: beide
     Recherche-Agenten meldeten daraufhin eigene Werkzeugfehler statt
     sie zu glätten (391 Teilwort-Fehlalarme; eine Meta-Description,
     die der eigenen Preistabelle widersprach). Ohne die mitgegebenen
     Fallen wären beide Funde als saubere Ergebnisse angekommen.
     (Herkunft: MKT R11.)
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
> Strang gehört, **und als PFLICHTFELD: welchen benannten Posten des
> Kurz-Einstiegs/Wahrheits-Kanals dein Ergebnis ERFÜLLT** (du darfst ihn
> nicht selbst schließen, also geht er ohne diese Zeile verloren;
> „keiner" ist eine gültige Antwort, Schweigen nicht);
> Stolpersteine/Learnings, getrennt: (i) Fallen ·
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

**Pull-Modell + Klartext-Chat (seit 11.08.2026, User-Entscheid):** Die
fertigen Prompt-VOLLTEXTE stehen NICHT im Chat, sondern im heutigen
Tagesplan (`protokolle/tagesplan-<datum>.md`, Abschnitt
„Session-Prompts"; VOR der Chat-Ausgabe committen) — die Datei ist die
Single Source, der Chat gehört dem User. Im Chat erscheint pro Session:
1. eine Zeile Name · Modell · Scope-Kurzform · exklusive Systeme;
2. ein Absatz in **EINFACHER SPRACHE** (ohne Fachbegriffe): was diese
   Session tut, was am Ende anders ist, worauf sie ruht — der User soll
   die Runde verstehen können, ohne einen Prompt zu lesen;
3. die Einzeiler-Startzeile zum Kopieren: „Du bist `R<runde>-<sess>`.
   Lies deinen Auftrag in `protokolle/tagesplan-<datum>.md`, Abschnitt
   ‚Session-Prompts', Strang <sess>, und arbeite NUR ihn ab."
Ein dennoch gepasteter Voll-Prompt gewinnt als der neuere Stand.
(Grund: Chat-Prompts sind Zwischenzustände mit Verfallsdatum und
Paste-Abschneide-Risiko; und der Chat wird als Klartext-Ebene frei.)
**Über JEDEM Prompt eine sichtbare User-Handgriff-Zeile: „Vor dem
Einfügen: NEUES Session-Fenster öffnen und DEIN Modell einstellen."** —
die Modellwahl liegt beim User (Empfehlung nur auf Nachfrage), und der
Start-Handgriff ist ihr einziger wirksamer Kanal. **„NEUES Fenster" ist
Teil des Handgriffs:** Ein altes Session-Fenster trägt den Regel-Snapshot
seines Starts (CLAUDE.md/Skills VOR dem letzten Debrief) und das Modell
der alten Runde. *(Die frühere `/cost`-Ablesepflicht je Arbeits-Session
[heyPensio R34] ist ABGESCHAFFT — User-Regel, bekräftigt 10.08.2026
abends gegenüber der Zentrale: Kostenablesungen werden nicht mehr
geführt. Kein Fenster wartet auf eine Ablesung.)*

**Session-Namen tragen die RUNDE:** `R03-A`, `R03-B` — nie nur `A`, `B`.
Buchstaben nicht überspringen; übernimmt die Leitsession einen Strang,
wird der Buchstabe frei gelassen und vermerkt. Kollidieren zwei Scopes,
das VOR der Ausgabe auflösen, nicht dem User überlassen.

**⭐ Trägt das Projekt ein Rollen-/Namensschema für Sessions, WEIST der
Zuschnitt den Namen ausdrücklich zu** — erste Zeile des Start-Prompts
„Du bist &lt;Name&gt; …" (Herkunft: User-Befund 13.08.2026: „die
Leitsessions vergessen oft, den Worker-Sessions Namen zuzuweisen").
Eine namenlose Arbeits-Session ist ein **Formfehler des Zuschnitts**,
kein Stilthema: Der Name trägt Identität, Zuständigkeit und die
Mensch/KI-Kennzeichnung im Organigramm. Erlaubt eine Rollen-Charta
Persönlichkeit, gilt sie für den INTERNEN Ton ausdrücklich als
erwünscht — Dokumente, Protokolle, Commits und alles Außenwirksame
bleiben davon unberührt sachlich, und im Zweifel schlägt Präzision die
Rolle.

**Sequenzierte Sessions: die abhängige STARTZEILE zurückhalten** und
erst nach der Abschlussmeldung der Vorgänger-Session ausgeben; steht der
Prompt schon im Tagesplan, trägt sein Abschnitt sichtbar „⛔ startet
erst nach <Vorgänger>" — ein „startet NACH X" nur im Prompttext wird im
Parallel-Alltag überlesen.

---
**Merksatz:** Der Prompt ist der Vertrag der Session — was nicht drinsteht
(Scope, Exklusivität, Fertig-Kriterium, Abschlussmeldung), kann die
Leitsession hinterher nicht einfordern. Und der Tagesstart ist der Vertrag
der Leitsession: erst die alte Runde schließen, dann die neue öffnen.
