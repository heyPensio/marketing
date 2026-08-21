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

---

# Welle 8 + 9 — Die Kontinuitäts-Schiene „hey" (21.08.2026, abends)

## ⭐ Der Befund, der die Runde gedreht hat

**User-Aussage 21.08. ~17:50 MESZ (Chat, sinngemäß — kein Wortlaut
archiviert):** „bei heyPensio war das Gefühl sofort da, aber der Name
passt einfach nicht zur Zielgruppe."

Bestandsprüfung daraufhin (grep über `marke/`, `sensibel/`, `zentrale`):
Die **Kontinuitätsfrage zum „hey"-Vorsatz steht seit Welle 2 OFFEN** —
`naming-sprint-2026-08-welle2.md` § 5.5 (a): *„Kein einziger der fünf
Findungs-Agenten hat den Alt-Vorsatz von sich aus vorgeschlagen — er war
in keinem Prompt enthalten (Kontaminationsschutz). Die Frage bleibt
trotzdem offen und gehört Ihnen, nicht der Session."* Sie ist **nicht**
als Entscheidungspunkt E-K* geführt worden und blieb dadurch unbeantwortet;
**alle 275 Kandidaten der Wellen 1–7 schließen den Vorsatz per
Konstruktion aus.** Die Schiene wurde also nie gemessen.

## ✅ Entscheid des Users (21.08. ~18:00 MESZ, Dropdown)

**Frage:** Welcher Teil von „heyPensio" passt nicht zur Zielgruppe?
**Antwort: „Das ‚Pensio' — zu klein."** Das „hey" ist richtig und
**bleibt**; der zweite Teil muss größenneutral werden (Zielgruppe auf
größere Häuser erweitert, MKT-FUND).

⚠️ **Tragweite, aktiv gemeldet:** Damit wird aus dem Voll-Rebrand ein
**TEIL-Rebrand.** Das berührt Punkte außerhalb dieses Strangs und
gehört an die Zentrale (Postkorb): Deckt die Gesellschafter-Freigabe
51/49, die „dem Rebrand" galt, auch einen Teil-Rebrand? · Der
Cutover-Plan (MARKE5) wird kleiner, weil Vorsatz und Bestandsdomain
`hey-pensio.de` teilweise mitwandern · Die Markenrecherche für den
BESTAND „heyPensio" (MARKE1) bekommt neues Gewicht, weil der Vorsatz
erhalten bleibt.

## Messungen (Kontrollen in allen vier Läufen Start UND Ende getroffen)

Welle 8: 14 Kandidaten, 72 Abrufe (`welle8-hey/`).
Welle 9: 24 Kandidaten Vorfilter 56 Abrufe + 9 Register 52 Abrufe
(`welle9-vorfilter/`, `welle9-register/`).

**Alle vier Kanäle sauber (`.de` + `.com` frei, DPMA 0, EUIPO 0):**

| Kandidat | Lesart | Einordnung (Leitsession, keine Messung) |
|---|---|---|
| **heyGast** | der Gast — jede Hausgröße | größenneutral; ⚠️ richtet die Ansprache an den GAST, während der Kunde der Hotelier ist (konzeptionell zu prüfen — trägt, wenn das Produkt als Gästekommunikation IM NAMEN des Hauses gelesen wird) |
| **heyDirekt** | Direktbuchung statt OTA-Provision | größenneutral, echtes Branchenthema; ⚠️ beschreibend → markenrechtlich schwächer, und verengt auf ein Feature |
| **heyEmpfang** | die Rezeption — jede Hausgröße | größenneutral, branchenklar, deutsch; ⚠️ 10 Zeichen |
| **heyPuls** | der Takt des Hauses | größenneutral, kurz, offen für das ganze Portfolio |
| **heyRuhe** | der Wirt bekommt Ruhe | trifft das Entlastungs-Versprechen direkt; ⚠️ „Ruhe" kann im Hotelkontext als Nachtruhe/Stillstand gelesen werden |
| ~~heyWirt~~ | | 🔴 **von der Leitsession selbst ausgeschieden**: „Wirt" trägt denselben Größen-Marker nach unten wie „Pensio" — der Entscheid des Users schließt ihn aus |

**Nur `.de` frei** (unter E-K1 gelockert wählbar): heyCheckin ·
heyWelcome · heySync · heyPilot · heyKlar · heyLobby · heyLodge ·
heyDesk · heySuite · heyInn.

**Ausgeschieden (Domains vergeben UND Registertreffer in den
Kernklassen 9/35/42/43):** heyStay · heyGuest · heyRoom · heyFlow.
**Domains vergeben:** heyHotel · heyHost · heyHaus · heyKey · heyCrew ·
heyTeam · heyStaff · heyShift · heyLink · heyPort · heyCloud.

## Geltungsgrenzen (unverändert für ALLE Kandidaten)

Vier Kanäle gemessen. Offen: TMview-Vollerhebung/Ähnlichkeitsraum ·
Handelsregister · Branchenverzeichnis-/Namensvetter-Suche (W9) ·
Handles · EN-Check (K6). **Zusätzlich neu zu prüfen, weil der Vorsatz
bleibt:** die Marken-/Namenslage zum Vorsatz „hey" selbst in Verbindung
mit Beherbergung — das war in keiner Welle Gegenstand.
