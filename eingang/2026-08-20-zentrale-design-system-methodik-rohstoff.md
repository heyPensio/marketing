# Zentrale → MKT: Methodik-Rohstoff für die CI-Arbeit — „Design-System statt Zufalls-Output" (Jack Roberts)

**Datum:** 20.08.2026, ~18:15 MESZ · **Von:** Garp (Zentrale) ·
**Quelle:** YouTube-Video „Claude Design Just Solved its #1 Problem...
I Quit" (Jack Roberts, @Itssssss_Jack, youtu.be/cM5n9priMjo) ·
**Belegstufe:** ausführlicher Bericht vom User geliefert (liegt als
Anlage bei: `2026-08-20-zentrale-anlage-bericht-design-system-jack-roberts.md`
— beide Dateien zusammen einarbeiten/löschen); Video selbst von der
Zentrale nicht gesichtet.

## Worum es geht

Kein Produkt-Review, sondern eine **Arbeitsmethodik für konsistenten
Design-Output mit Claude** — gegen „AI Slop" (hübsch, aber nicht
reproduzierbar). Kern in drei Bausteinen:

1. **Agentischer Design-Loop:** 2–3 Kritiker-Subagenten mit konträren
   Aufträgen (einer prüft Abstände/Symmetrie, einer erzwingt die
   Designregeln), plus Protokoll-Datei, was die Kritiker korrigiert
   haben. *(Das ist strukturell unser Prüfer-/Gegenlese-Muster,
   angewandt auf Design.)*
2. **Design-DNA / „Measure, don't Describe":** Ästhetik wird in
   MESSBARE Regeln kodifiziert (Proportionen z. B. Goldener Schnitt,
   60-30-10-Farbregel, exakte Eckenradien/Schatten, benannte Layouts,
   Icon-System) und als Datei gespeichert. **Validierung per
   Rebuild-Test:** Das Original muss allein aus der Regel-Datei
   reproduzierbar sein — jede Abweichung = vergessene Regel. *(Das ist
   unsere Gegenprobe-Kultur, angewandt auf CI.)*
3. **Multimodale Produktion:** Higgsfield via MCP/CLI für Bild/Video
   direkt aus der Session (⭐ die higgsfield-Skills sind in unseren
   Claude-Code-Sessions bereits verfügbar, inkl. Brandkit-Skill) ·
   Anti-Slop-Copywriting-Prinzipien („Don't make me think", „Name the
   pain") · Fish Audio für Narration (externer Dienst, bräuchte
   Konto — nur nachrichtlich).

## Warum an MKT

Der unmittelbare Anwendungsfall ist **MKT-MARKE: der CI-Bau nach dem
Namensentscheid.** Vorschlag der Zentrale (Disposition liegt bei Euch):

- Die CI von Anfang an als **„CI-DNA-Datei"** anlegen (messbare Regeln
  statt Beschreibungen), mit **Rebuild-Test als Abnahme-Kriterium** —
  das passt nahtlos an Eure bestehende Prüfer-/Kontrollzahl-Methodik
  und würde jede spätere Asset-Produktion (Website, Druck, Anzeigen)
  auf dieselbe Regelbasis stellen.
- Den Kritiker-Loop als Muster für Design-Abnahmen prüfen (Blueprint-
  Kandidat, falls es sich bewährt — Entscheid über den Kanal liegt
  beim Debrief der anwendenden Runde).
- Nachrichtlich für Querverbindung: heyPensio produziert bereits
  generative Assets (V8-Raben-Intro) und hat im Gerüst `7bc627d` die
  Lehre „Machbarkeits-Testprobe vor generativer Asset-Serie"
  hinterlegt — verwandtes Territorium, ggf. später zusammenführen.

## ⭐ Nachtrag 20.08. ~18:40 MESZ (User-Zuruf, „sehr sehr wichtig für uns"): Referenz-Plattformen Savee + Refero

Der User ergänzt aus dem Video zwei Quellen, die der schriftliche
Bericht unterschlägt (Savee nur ein Halbsatz, Refero fehlt ganz) —
**Belegstufe: User-Nennung aus dem Video, von der Zentrale nicht
selbst gesichtet:**

- **savee.it** — kuratierte visuelle Inspirations-/Moodboard-Plattform
  (Grafik, Typo, Layouts; Sammlungen/Boards).
- **refero.design** — Bibliothek ECHTER Web-/App-Designs (Screenshots
  realer Produkte, durchsuchbar nach Seitentyp/Pattern/Flow).

**Rolle in der Methode:** Das ist Schritt 1 der Kette — die VORLAGE.
Statt Claude „etwas Schönes" entwerfen zu lassen, wird auf diesen
Plattformen eine starke Referenz ausgewählt, deren Design-DNA dann
gemessen/kodifiziert wird (Abschnitt oben) und per Rebuild-Test
validiert. Die Qualität des Endergebnisses hängt damit an der
Referenz-Auswahl, nicht am Prompt-Glück. **Der User stuft diese
Referenz-Arbeit als „sehr sehr wichtig für uns" ein** — bitte bei der
CI-Arbeit als festen ersten Schritt einplanen (Referenz-Auswahl dem
User als Dropdown/Canvas vorlegen, BEVOR kodifiziert wird); gilt
sinngemäß auch für künftige Website-Gestaltung (MKT-WEB) und ist als
Hinweis für heyPensio-Designarbeit mitzudenken.

**Kein Zug vor dem Namensentscheid nötig** — der Rohstoff wartet hier,
bis MKT-MARKE ansteht.

**Nachtrag ~19:00 MESZ — die Methode ist bereits GEBAUT:** Im Gerüst
liegt seit `a481483` der neue Ordner-Baustein
`vorlage/bausteine/design-dna/` (User-Auftrag 20.08. abends):
SKILL-Dispatcher mit Referenz-Auswahl-Gate (savee/refero, User-Wahl
vor Kodifizierung) · DNA-Datei-Schema mit Rebuild-Test ·
20-Slide-/20-Web-Regelwerke (MIT-Kopien, Jack Roberts) ·
Kritiker-Loop · deutsches Anti-Slop-Copy-Modul. Für die CI-Arbeit
also nicht neu erfinden, sondern Baustein aktivieren (Ordner nach
`.claude/skills/design-dna/`) und anwenden; Lehren daraus über
learnings.md/Debrief zurück ins Gerüst.

*(Transportbehälter — nach Einarbeitung MIT der Anlage löschen.)*
