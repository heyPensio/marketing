---
name: design-dna
description: Systematisches Design statt Zufalls-Output ("AI Slop") fuer JEDE visuelle Gestaltung - Poster, Praesentationen/Decks, Website-Seiten, Grafiken, CI-Entwuerfe, Social-Assets. Pflicht-Trigger; Design, Gestaltung, Layout, Poster, Deck, Slides, Landingpage, CI, Marke, Grafik, "sieht nach KI aus". Abgrenzung; fuer Diagramme/Charts -> dataviz-Skill; fuer reine Textarbeit ohne Gestaltung -> Baustein aussenwirksame-texte; fuer generative Bild-/Video-ASSETS -> higgsfield-Skills (dieser Skill liefert dafuer die DNA-Vorgaben).
---

# Design-DNA — konsistentes Design nach messbaren Regeln

**Herkunft:** Methodik nach Jack Roberts (YouTube „Claude Design Just
Solved its #1 Problem", Bericht 20.08.2026, User-Übergabe) + dessen
MIT-lizenzierten Skills `power-design` und `seven-skills/art-director`
(github.com/ItsssssJack). Die zwei Regelwerke unter `references/` sind
unveränderte MIT-Kopien; dieser Dispatcher ist die Anpassung an unser
System (deutsch, User-Gates, Wahrheits-Kanal, Prüfer-Kultur).
**Nachzug 20.08. abends (Originale beschafft, User-Handgriff
Community-Login):** Der originale **design-loop-Skill** liegt verbatim
in `references/design-loop-original-2026-08-20.md` (Ursprung: „Gauntlet
Loop" von Matt Shumer); der komplette **design-teardown-Skill** (Mess-
Sonde `measure.js` + Protokoll) liegt unter `teardown/`. Schritt 1 und
3 unten sind gegen beide Originale abgeglichen.
**Aktivierung im Projekt:** Ordner nach `.claude/skills/design-dna/`
kopieren.

**Kernsatz: „Measure, don't describe."** Ästhetik wird in messbare
Regeln übersetzt (DNA-Datei), gebaut wird gegen Regeln, geprüft wird
mit Kritikern — nie „mach es modern/schön".

## Prozess (Reihenfolge zwingend)

### Schritt 0 — Referenz-Auswahl (User-Gate, nie überspringen)

**Existiert für die Marke schon eine DNA-Datei** (`design/brand-dna-
<marke>.md` im Projekt-Repo)? → Sie ist der Wahrheits-Kanal, direkt zu
Schritt 2. Bei Widerspruch Referenz ↔ DNA-Datei gewinnt die DNA-Datei;
Änderungen an ihr nur über Schritt 1 + neuen Rebuild-Test.

**Existiert keine:** 2–4 starke Referenzen beschaffen und dem User
**per Dropdown/Canvas ZUR WAHL vorlegen, BEVOR irgendetwas kodifiziert
wird** (User-Entscheid 20.08.2026 — die Richtung bestimmt der User,
nicht das Prompt-Glück). Quellen in dieser Reihenfolge:

1. **refero.design** — echte Web-/App-Designs, durchsuchbar nach
   Seitentyp/Pattern (für Websites/Produkt-UI die erste Adresse);
2. **savee.it** — kuratierte visuelle Inspiration (Poster, Typo,
   Grafik, Moodboards);
3. Bestands-Referenzen des Projekts (Konkurrenz-Analysen,
   Kunden-Vorlagen, eigene ältere Arbeiten).

Je Kandidat festhalten: Link/Screenshot + EIN Satz, was ihn stark
macht. Web-Kanäle können unter Last kippen (Gerüst-Lehre `9187d31`) —
Screenshots sichern, nicht nur Links.

### Schritt 1 — DNA kodifizieren (und je Werkstück: bar.md)

Aus der gewählten Referenz (plus ggf. echter Marken-Website) die
**DNA-Datei** nach `references/brand-dna-vorlage.md` erstellen —
ausschließlich messbare Werte: Hex-Farben mit 60-30-10-Gewichtung,
EIN Akzent, Modular-Scale-Verhältnis (1,25–1,618), exakte Radien/
Schatten/Linienstärken, benannte Layouts, Icon-System, Bildsprache
(bei wiederkehrenden Figuren: „Cast Members" mit Model-Sheet je
Figur). Dabei „mit sich selbst streiten": Welche 5–7 Merkmale machen
den Unterschied WIRKLICH? Alles andere weglassen.

**Messweg statt Augenmaß:** Bei Web-Referenzen die Mess-Sonde
`teardown/scripts/measure.js` im Browser laufen lassen (vorher
`teardown/references/measurement-protocol.md` lesen — Lazy-Load-Falle:
erst die ganze Seite einmal durchscrollen). Nie einen Wert berichten,
den die Sonde nicht geliefert hat („unknown" ist ein gültiger Wert);
3–4 Werte per Hand gegenprüfen. Für „unsere Seite vs. deren Seite"
gibt es den kompletten Teardown-Ablauf in `teardown/SKILL.md`
(Token-Diff über 9 Dimensionen, Fix-Liste nach Wirkung/Stunde).

**Zwei Prüflatten, nicht eine:** Die DNA-Datei ist die MARKEN-Latte
(gilt für alles). Zusätzlich bekommt jedes WERKSTÜCK eine **`bar.md`**
mit 5–7 Mechanismen aus seiner konkreten Referenz („Headline = 5×
Body", „nichts animiert unter 400 ms") — Mechanismen, die ein Kritiker
durch HINSEHEN prüfen kann, nie Adjektive. `bar.md` dem User zeigen,
BEVOR gebaut wird (eine vage Latte ist der häufigste Grund, warum die
Methode scheitert).

**Abnahme der DNA = Rebuild-Test:** Ein frischer Kontext (Subagent,
der NUR die DNA-Datei kennt, nicht die Referenz) baut das
Referenz-Design nach. Jede sichtbare Abweichung = eine vergessene
Regel → nachtragen, Test wiederholen. Ergebnis mit Datum in der
DNA-Datei vermerken. Ablage: DNA-Datei ins Projekt-Repo (EIN
Wahrheits-Kanal je Marke), committen.

### Schritt 2 — Bauen gegen DNA + Regelwerk

HTML als maschinenoptimiertes Zwischenformat (skill-bauweise-Regel),
Zielformat (PDF/PNG/Deck) erst am Ende. Vor dem ersten Emit BEIDE
Quellen lesen:

- die DNA-Datei der Marke;
- das passende Regelwerk: **`references/design-principles.md`** (20
  Regeln für feste 16:9-Frames — Slides, Poster, Thumbnails) oder
  **`references/web-principles.md`** (20 Regeln für fluide Seiten).
  Alle 40 tragen numerische Schwellen (Whitespace ≥ 40 %, Body
  ≥ 24 px, Safe-Zone 5 %, ≤ 7 Chunks, Kontrast WCAG 2.2 …) — sie sind
  nicht verhandelbar, die Pre-Emit-Checklisten stehen im jeweiligen
  Regelwerk.

Deutsche Außentexte mit korrekten Umlauten; der Baustein
`aussenwirksame-texte` gilt zusätzlich. Generative Assets (higgsfield-
Skills) bekommen ihre Vorgaben AUS der DNA-Datei; vor jeder Serie die
Machbarkeits-Testprobe (Gerüst-Lehre `7bc627d`: Probe-Asset +
Freigabe, dann Pipeline).

### Schritt 2b — Preflight (Prüfung, keine Frage — VOR jedem Loop)

In einem Block berichten: (a) Referenz/`bar.md`-Quelle JETZT abrufen
(Screenshot/Datei) — gesperrt/fehlend → melden, nicht stumm weiter;
(b) bestätigen, dass unser Output GERENDERT werden kann (Screenshots
für Seiten, Frame-Streifen für Animation, PDF-Render für Dokumente) —
**ohne Render gibt es keinen Craft-Kritiker**; (c) benötigte
Generierungs-Werkzeuge verbunden? (d) Eingabedateien (DNA-Datei,
`bar.md`, Texte) vorhanden? Ausdrücklich benennen, **welcher Kritiker
BLIND wäre**, falls etwas fehlt.

### Schritt 3 — Kritiker-Loop (drei feste Rollen, frischer Kontext)

Nie den eigenen Entwurf selbst freigeben — **ein Kritiker, der den
Kontext des Erbauers teilt, benotet die eigenen Hausaufgaben.** Das
Ziel in kleinste eigenständig beurteilbare Werkstücke teilen (**max.
3–4** — jedes weitere multipliziert die Kosten); je Werkstück ein
Builder + DREI Kritiker-Subagenten mit frischem Kontext, die den
Bauweg nicht kennen. Die drei Rollen sind FEST (damit sie nie zu
einer Meinung verschmelzen), ihr konkreter Prüfauftrag wird je Lauf
neu geschrieben — nie Generik wiederverwenden:

1. **Auftrags-Kritiker** („Brief"): prüft NUR gegen das erklärte Ziel
   — tut es das Ding? Ästhetik ignorieren. *(günstiges Modell reicht)*
2. **System-Kritiker:** prüft NUR gegen DNA-Datei + Regelwerk,
   mechanisch, zitiert je Befund die verletzte Regel/den Messwert.
   *(günstiges Modell reicht)*
3. **Craft-Kritiker:** prüft NUR gegen `bar.md` + GERENDERTEN Output —
   nie den Code (wer die Implementierung liest, beurteilt Absicht
   statt Ergebnis). Unseres neben die Referenz legen, Beschriftungen
   entfernt (blind), sagen welches besser ist und die EINE größte
   Lücke benennen. *(stärkstes verfügbares Modell, NIE herabstufen —
   ein billiger Craft-Kritiker winkt alles durch und der Loop stirbt
   in Runde 1)*
4. *(bei Texten im Design zusätzlich)* **Copy-Kritiker:** prüft gegen
   `references/anti-slop-copywriting.md`.

**Regeln:** Kritiker sind hart, Lob ist nutzlos · **Binär-Urteile,
keine Punktzahlen** (Scores driften jede Runde nach oben) · alle
müssen bestehen; jedes Scheitern geht mit der EINEN größten Lücke an
den Builder zurück · **keine feste Rundenzahl — das Ende ist
Gewinnen oder der User stoppt** · Fortschritts-Übersicht live führen
(Werkstück-Status, Urteile, Lücken-Historie, Rundenzahl).
**Protokoll-Pflicht:** eine Datei je Lauf — ohne Protokoll ist der
Loop nicht gelaufen. **Positivkontrolle (Pflicht beim ersten Einsatz
je Projekt):** eine absichtlich regelwidrige „Bad Copy" muss
durchfallen — ein Prüfer, der alles durchwinkt, ist kaputt, nicht
fleißig. **Kosten-Ehrlichkeit:** Token-Selbstauskünfte gibt es nicht
— Rundenzahl und Werkstücke ausweisen; der Loop ist dem Hero-Asset
vorbehalten (Landingpage, Flaggschiff), nie der ganzen Site; nennt
der User ein Limit, ist es ein Checkpoint (anhalten und fragen).

### Schritt 4 — Freigaben und Grenzen

- Design-Freigabe trifft der User (Dropdown/Canvas), nie der Skill.
- **Freigegebene Kanon-Texte sind byte-gleich tabu** (Baustein
  freigabe-vorlagen) — der Copy-Kritiker markiert sie nur, ändert nie.
- Varianten (Farb-/Formatfamilien) entstehen aus DERSELBEN DNA-Datei
  bei identischer Struktur — nie als freie Neuinterpretation.

## Pflege

`learnings.md` je Projekt führen (skill-bauweise Schritt 6): Wo hat
die DNA gefehlt, welche Kritiker-Befunde wiederholen sich, welche
Regel fehlt im Bestand? Wiederkehrende Lehren → Debrief → Gerüst.
