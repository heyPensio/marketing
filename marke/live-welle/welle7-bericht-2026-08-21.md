# Welle 7 — Neue Namensgenerierung (21.08.2026, R20, Leitsession Shanks)

> **Anlass:** User-Entscheid 21.08. ~16:45 MESZ (Dropdown): „Erst neue
> Namen finden, dann entscheiden" — das Feld wird neu aufgemacht,
> nachdem der User vier eigene Kandidaten zugerufen hatte (Thousand
> Stays · NeoHost · Roomeo · NovaLogis). ⚠️ **Zielkonflikt
> ausgewiesen:** Der User hatte im selben Gespräch gesagt, er wolle
> HEUTE zu einem Namensentscheid kommen; die Option trug den sichtbaren
> Hinweis „Entscheid heute unwahrscheinlich" und wurde trotzdem
> gewählt. Diese Welle ist darauf ausgelegt, den Entscheid ohne
> weitere Runde möglich zu machen.

## Vorgaben (User-Dropdown, GESCHLOSSENE Aufzählung — keine Familienbeschreibung, L-R19)

| Achse | Wahl |
|---|---|
| Sprachschiene | **alle drei** — englisch/international · Kunstwort/neutral · deutsch, je ~25 |
| Assoziationsfeld | **Entlastung/Zeit zurückgeben** + **Technik/Automatisierung** + **Gastfreundschaft/Ankommen** |
| *nicht gewählt* | „abstrakt — soll gar nichts bedeuten" → **diese Achse blieb zu** |
| Form | **EIN Wort, kurz** (5–9 Zeichen) |

**Kalibrierungsquelle für die Richtung:** die vier Zuruf-Namen des
Users. Ablesung der Leitsession (dem User vorgelegt und bestätigt):
kurz, international, Kunstwort-Kompositum — Gegenpol zu den
beschreibenden deutschen Innsight-Beinamen.

## Bestandsabgleich

75 Kandidaten generiert, alle gegen den Bestand der Wellen 1–6
(~200 Namen aus `naming-sprint-2026-08.md`,
`naming-sprint-2026-08-welle2.md`, `welle4/5/6-2026-08-18.txt`,
`favoriten-2026-08-18.txt`) geprüft — **keine Dublette in der Liste**.
Bewusst ausgeschieden VOR der Messung (EN-Bedeutungsfallen, die die
Leitsession selbst kennt): `Innmate` (= inmate, Häftling) · `Homely`
(AmE: unattraktiv) · `Staywell` (bestehende Hotelmarke StayWell) ·
`Freehand`/`Beihand`/`Zuhand` (Bestand Welle 1–3).

## Lauf 1 — Domain-Vorfilter (21.08., 17:17 MESZ)

Werkzeug: `schnellcheck.js --nur-domains` (neu in R20: 2 statt 4
Abrufe je Wort). Grund für den Vorfilter: 75 × 4 = 300 Abrufe wären ein
Massenlauf, der in R19 ab ~218 Abrufen ins Rate-Limit lief.
**158 Abrufe, Kontrollen Start UND Ende getroffen** (positiv REG/REG,
negativ frei/frei). Rohbelege + Status + SHA-256:
`sensibel/rohbelege-R20-leit/welle7-vorfilter/`.

**Ergebnis: 9 von 75 mit freier `.de` — 66 sind vergeben.**

| Schiene | generiert | `.de` frei | Quote |
|---|---|---|---|
| A englisch/international | 25 | 4 | 16 % |
| B Kunstwort/neutral (lat./roman.) | 25 | 2 | 8 % |
| C deutsch | 25 | **3** | 12 % |

⭐ **Kernbefund der Welle:** Der kurze Ein-Wort-Namensraum ist
**weitgehend leergeräumt** — quer über alle drei Schienen. Von den
neun Überlebenden haben nur **drei** auch die `.com` frei, und alle
drei stammen aus der **deutschen** Schiene. Die englische Schiene, die
der Zuruf des Users nahelegte, war die am dichtesten besetzte: kein
einziger englischer Kandidat hatte beide Domains frei.

## Lauf 2 — Register für die 9 Überlebenden (17:17 MESZ)

52 Abrufe, Kontrollen Start und Ende getroffen (je Kanal verschiedene
Sollwerte: REG/frei · 1/0 · 965/0). Rohbelege:
`sensibel/rohbelege-R20-leit/welle7-register/`.

| Kandidat | Schiene | `.de` | `.com` | DPMA | EUIPO | Befund |
|---|---|---|---|---|---|---|
| **Wirtsam** | deutsch | frei | **frei** | 0 | 0 | ⭐ sauber auf allen vier Kanälen |
| **Leichthand** | deutsch | frei | **frei** | 0 | 0 | ⭐ sauber; 10 Zeichen (über der Kurz-Vorgabe) |
| **Zimmerlei** | deutsch | frei | **frei** | 0 | 0 | sauber, aber ⚠️ Wortkollision (s. u.) |
| Easestay | englisch | frei | REG | 0 | 0 | wählbar unter E-K1 (`.com` Kür) |
| Lodgely | englisch | frei | REG | 0 | 0 | wählbar unter E-K1 |
| Welcomly | englisch | frei | REG | 0 | 0 | wählbar unter E-K1 |
| Hospio | Kunstwort | frei | REG | 0 | 0 | wählbar unter E-K1 |
| Portua | Kunstwort | frei | REG | 0 | 31 (25) | ⚠️ 31 = **Teilwort-Fehlalarme** („Portuaria" u. a., CONTAINS-Suche) — am Rohbeleg geprüft, **kein Identitätstreffer** |
| ~~Hostful~~ | englisch | frei | REG | 0 | **1 (1)** | 🔴 **K.-o.** — IR 1858473, **Wortmarke**, Klassen **9 + 42** (unsere Kernklassen), lebend (Schutz bis 2061). Am Rohbeleg geprüft. |

## Einordnung der drei Volltreffer (Leitsessions-Bewertung, keine Messung)

- **Wirtsam** — Kunstwort aus *Wirt* + dem produktiven Suffix *-sam*
  (wirksam, achtsam, sparsam, arbeitsam). Die Bedeutung entsteht beim
  Hören sofort und trifft beide Kernachsen: den **Wirt** als Adressaten
  und **Wirksamkeit/Achtsamkeit** als Versprechen. 7 Zeichen.
  Markenrechtlich günstig: sprechendes **Kunstwort**, kein rein
  beschreibender Begriff (anders als „Hotelsysteme"). ⚠️ Offene Fragen:
  Wird es als Tippfehler von „wirksam" gelesen? Trägt es über DACH
  hinaus (englischsprachige Kunden)?
- **Leichthand** — von *leichter Hand* = mühelos; das direkteste
  Entlastungs-Signal der Welle. ⚠️ 10 Zeichen (über der Kurz-Vorgabe
  5–9); kein etabliertes Einzelwort; Assoziationsrisiko Handwerk/
  Physiotherapie.
- **Zimmerlei** — *Zimmer* + *-lei*. ⚠️ **Klare Empfehlung: nicht
  weiterverfolgen.** „Zimmerei" ist der Holzbau-Handwerksbetrieb;
  „Zimmerlei" liest sich als dessen Verballhornung oder als Tippfehler,
  und *-lei* ist kein produktives Suffix (Bäckerei/Zimmerei bilden mit
  *-ei*). Der Name kostet bei jeder Nennung eine Erklärung.

## Geltungsgrenzen dieser Welle (Pflichtangabe)

Gemessen wurden **vier Kanäle**: RDAP `.de`/`.com`, DPMA-Smartsearch
(Identität), EUIPO eSearch (CONTAINS). **Nicht** gemessen — für ALLE
Kandidaten offen, gleicher Stand wie bei der Sechser-Auswahl:
TMview-Vollerhebung/Ähnlichkeitsraum (R19-C-Prüftiefe) ·
Handelsregister/Firmennamen · Branchenverzeichnis-/Websuche nach
Namensvettern (Katalog W9) · Social-Handles · EN-Muttersprachler-Check
(K6). **Ein Schnellcheck-Positiv ist kein Freibrief** — vor dem
finalen Entscheid braucht der gewählte Name die Vertiefung.
