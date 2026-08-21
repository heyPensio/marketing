---
marke: [Name]
slug: [marke-slug]
referenz: [Link/Screenshot-Pfad der User-gewählten Referenz(en)]
referenz-freigabe: [Datum + Erhebungsform der User-Wahl (Dropdown/Canvas)]
erhoben-via: [manuell / Browser-Messung / Referenz-Analyse]
rebuild-test: [Datum + Ergebnis („bestanden, 0 Abweichungen" / offene Punkte) — ohne bestandenen Test ist die DNA ein Entwurf]
---

# [Name] — Design-DNA

*(Nur MESSBARE Werte. Jede Zeile muss ein Nachbau-Subagent ohne Blick
auf die Referenz umsetzen können — das ist der Maßstab. Prosa nur, wo
sie eine Messgröße erklärt.)*

## Atmosphäre (max. 3 Sätze)
[Hell/dunkel? Fotografisch/illustrativ? Editorial/technisch?
Premium/verspielt? — nur als Lesehilfe, bindend sind die Werte unten.]

## Farben (60-30-10)
| Rolle | Hex | Gewicht | Notiz |
|---|---|---|---|
| Grundfläche (60 %) | `#______` | 60 % | |
| Sekundär (30 %) | `#______` | 30 % | |
| Akzent (10 %) — NUR EINER | `#______` | 10 % | nie zwei Akzente |
| Text primär | `#______` | | Kontrast ≥ 4,5:1 auf Grundfläche |
| Text gedämpft | `#______` | | |
| Linien/Border | `#______` | | |

## Typografie
- **Display:** [Font] — [Lizenz/Quelle]; Fallback: [Google-Fonts-Ersatz]
- **Fließtext:** [Font]; Fallback: [Ersatz]
- **Modular Scale:** [1,25 / 1,333 / 1,5 / 1,618] — ALLE Größen aus
  dieser Reihe, keine Ad-hoc-Werte
| Rolle | Größe | Zeilenhöhe |
|---|---|---|
| H1/Display | __ px | 1,05–1,2 |
| H2 | __ px | |
| Fließtext | __ px (Web ≥ 16, Slides ≥ 24) | 1,4–1,6 |
| Caption | __ px | |

## Proportionen & Layout
- Raster: [4/8-px-Basis; Spaltenzahl]
- Schlüssel-Verhältnis: [wo gilt der Goldene Schnitt/welches Verhältnis?]
- **Benannte Layouts:** [z. B. „Hero-Split 60/40", „Karten-Raster 3×n" —
  jedes Layout bekommt einen Namen; Varianten nutzen dieselben Namen]
- Korrespondenz-Regeln: [was muss mit was in der Höhe/Breite fluchten,
  z. B. „Textblock-Höhe = Grafik-Höhe ± 4 px"]

## Geometrie & Tiefe
- Eckenradius: __ px [je Element-Klasse]
- Schatten: [exakter CSS-Wert oder „keine"]
- Linienstärken: __ px

## Icon-System
- [Set/Stil (Outline/Fill), Strichstärke, Größenraster — gemischte
  Sets sind ein Befund]

## Bildsprache
- [Foto/Illustration/3D; Farbstimmung; Motiv-Regeln]
- **Cast Members** (nur bei wiederkehrenden Figuren/Maskottchen): je
  Figur ein Model-Sheet (Proportionen, Ansichten, Farbwerte) als
  eigene Datei neben dieser — generative Serien referenzieren das
  Sheet, nie ein früheres Ergebnis.

## Stimme (Kurzform — Volltext-Regeln: anti-slop-copywriting.md)
- Ton: [sachlich/warm/direkt …] · Anrede: [Du/Sie]
- 2–3 echte Beispielsätze der Marke (Quelle nennen):
  - „…"

## Quick Reference
```css
:root {
  --bg: #______;
  --fg: #______;
  --accent: #______;
  --radius: __px;
  --scale: 1.___;
}
```
