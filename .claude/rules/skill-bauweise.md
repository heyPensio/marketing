# Baustein: Skill-/Command-Bauweise (Reverse Engineering statt Blankobau)

*(Aktivieren, wenn das Projekt eigene Skills, Commands oder
wiederkehrende Arbeitsanweisungen baut. Herkunft: Weiterbildungs-Kurs
Claude Code, User-Übergabe 10.08.2026 — Transkript-Extrakte in
`zentrale\sensibel\weiterbildung-cc-transkript-*.md`; deckt sich mit
dem Debrief-/Register-Prinzip dieses Gerüsts und hebt es auf die
Skill-Ebene.)*

- **Die Description entscheidet über das Triggern** — nur Name +
  Description sind beim Session-Start geladen, der Volltext kommt on
  demand. Jede Description trägt: (a) **Pflicht-Trigger-Schlagwörter**
  (bei welchen Begriffen/Aufgaben der Skill greifen MUSS) und (b) die
  **Abgrenzung zum nächstliegenden Nachbar-Skill** („für X → dieser,
  für Y → jener") — sonst entscheidet der Zufall zwischen zwei
  plausiblen Skills. Löst ein Skill nicht zuverlässig aus, ist die
  Description der Reparaturort, nicht der Prompt.
- **Reverse-Engineering-Reihenfolge (6 Schritte), nie Blankobau:**
  1. **Beispiele sammeln** in einem `references/`-Unterordner des
     Skills (echte Muster-Outputs schlagen jede mündliche
     Beschreibung);
  2. die **Muster ANALYSIEREN lassen** (Design-Patterns, Struktur,
     Stilregeln — als eigene Analyse-Datei);
  3. **erst den perfekten EINZEL-Output erstellen** und iterieren, bis
     er wirklich stimmt;
  4. **DANN erst den Skill gießen** (jetzt ist der Skill-Creator/die
     Best-Practice-Vorlage dran — vorher fehlt ihm der Maßstab);
  5. testen;
  6. **iterieren über eine `learnings.md` je Skill** — getrennt von der
     skill.md; sammelt laufend Feedback-Erkenntnisse („analysiere,
     warum die finale Fassung besser war als dein Vorschlag, und
     speichere das Learning"). Punktuelle Vorlieben gehören dorthin,
     nicht als Dauerrauschen in die Haupt-Anweisung.
- **Vor dem Bau die Architektur-Frage:** Was ist der INPUT, was der
  OUTPUT (Format ausdrücklich!), was der Prozess dazwischen — und ist
  ein Skill überhaupt der richtige Träger (Alternativen: einmaliges
  Skript, n8n-Workflow, Command)? Ein Skill ohne benanntes
  Output-Format erbt zufällig fremde Format-Regeln.
- **Simplicity-Doktrin:** Ein guter Skill-Bestand ist nicht möglichst
  groß, sondern möglichst klein — Ziel ist, mit der Zeit WENIGER
  Skills zu brauchen (komprimieren, bündeln), nicht mehr. Kein
  tagelanges Setup-Optimieren für Sekunden-Ersparnis; jede
  Skill-Neuanlage prüft zuerst, ob ein bestehender erweitert werden
  kann. Je mehr Skills/Workflows entstehen, desto wichtiger wird die
  ÜBERSICHT, wo was läuft (Register-Pflicht statt Wildwuchs).
- **⚠️ Fremde Skills/Plugins NIE ungeprüft installieren** — sie können
  Anweisungen, Hooks und Skripte mitbringen (Prompt-Injection,
  unkontrollierte Systembefehle). Nur eigene oder Zeile für Zeile
  geprüfte Quellen; im Zweifel nachbauen statt installieren.
