---
description: Runden-/Session-Abschluss — fasst zusammen, hält offene Punkte fest und schreibt die Learnings zurück ins System (CLAUDE.md, Skills, Commands, Wahrheits-Kanal, projektgerüst)
argument-hint: "(optional) Fokus/Notiz für den Debrief"
---

# /debrief — Abschluss mit Rückschreiben

Der Kern ist NICHT die Zusammenfassung, sondern das **Rückschreiben**:
Jedes Learning muss zurück ins System, sonst war der Debrief nur ein
Tagebuch. Phasen strikt der Reihe nach. Optionaler Fokus: `$ARGUMENTS`.

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
- **Bewährte Muster zählen wie Fallen** — sie rutschen systematisch eher
  durch, weil die Aufmerksamkeit Fehler sucht. Getrennt durchgehen.
- Meldungen, die zugleich NACHARBEIT auslösen, zuerst auswerten, dann
  handeln.

**3a) Generelle Regel für die Arbeitsweise?** → `CLAUDE.md`.
- Gezielter Edit am Ankerstring, nie Vollumschrift. Kern/Beleg-Trennung:
  CLAUDE.md trägt den HANDLUNGSKERN + Anker; Herleitung/Fallgeschichte
  wandert als datierter Eintrag ins `lehren-register.md` (`L-NN`).
  Ein Zweitbeleg ist ein Register-Nachtrag, keine neue CLAUDE.md-Prosa.
- Nach dem Edit verifizieren: neuer Text per grep gefunden, Struktur
  intakt. Nur echte Dauer-Regeln.

**3b) Muss ein bestehender Skill/Command genauer werden?** → direkt
anpassen (gezielte Edits), Description mitziehen, Konsistenz prüfen.

**3c) Aufgabe zum ZWEITEN Mal vorgekommen (kapselbares Muster)?** →
Skill/Command VORSCHLAGEN und erst nach ausdrücklichem User-OK anlegen.

**3d) ⭐ PROJEKTGERÜST-RÜCKFLUSS (Pflichtschritt, eigene Frage je
Learning):** Ist das Learning **projektunabhängig** — würde es JEDEM
Projekt nach diesem Arbeitsmodell nützen? Dann gehört es zusätzlich ins
Methodik-Blueprint-Repo `projektgerüst`
(`C:\Users\qwafa_2dwxzia\projektgeruest`):
- Zielstelle in `vorlage/` editieren (CLAUDE-vorlage, Command-Vorlage
  oder Baustein) — projektspezifische Details dabei entfernen
  (Kundennamen, Systemnamen, Pfade), Herkunftsvermerk kurz
  („Herkunft: MKT R<n>").
- Eintrag in `LEHREN-CHANGELOG.md` (Datum · Quelle · eine Zeile Kern).
- Dort committen (eigenes Repo, eigener Commit).
- **Werkzeug-Umbauten sind ein eigener Lehren-Typ:** Wurde in dieser
  Runde ein Command/Skill/Ablauf umbenannt, ersetzt oder strukturell
  geändert, wird das ausdrücklich geprüft — sonst trägt die Vorlage den
  alten Stand weiter (genau so wäre `/session-prompts` in der Vorlage
  gelandet, eine Woche nachdem heyPensio es ersetzt hatte).
- Kein Rückfluss-Kandidat? Ausdrücklich sagen („kein
  projektgerüst-Nachzug nötig") — Schweigen ist kein Report.

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
