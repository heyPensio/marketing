# Tagesplan Marketing — Montag, 10.08.2026

> **Träger des Tagesrahmens** (CLAUDE.md, Multi-Session-Arbeitsmodell
> Regel 6). Block 1 ist scharf geschnitten, Block 2 und 3 sind
> ausdrücklich **PROGNOSE** — Abbruch oder Verkürzung ist ein gültiges
> Ergebnis. Der Debrief bleibt **pro Runde**, nicht ans Tagesende
> gebündelt.
>
> Leitsession: **Shanks**. Erstellt 10.08.2026, ~13:05 MESZ.

---

## 1. Rahmen

| Feld | Wert | Quelle |
|---|---|---|
| Wochentag/Uhrzeit | **Montag**, Start 12:54 MESZ | `date` (Werkzeug, nicht aus dem Kopf — L-07) |
| Arbeitsdauer | **open end, effektiv ~10 Stunden** → bis ca. 23:00 | User-Entscheid 10.08. ~12:45, im Firmen-Briefing protokolliert |
| Kalender | **10.–16.08. kein einziger Eintrag** — keine Fremdtermine, keine Fokuszeiten. Zweitkalender `o.hamurtas@` ebenfalls leer | Zentrale-Briefing 10.08. (mit Positivkontrolle: dieselbe Abfrage über 08.–09.08. liefert drei Einträge) |
| Parallelität | **5–6 Arbeits-Sessions ausdrücklich freigegeben** | User wörtlich: *„dürfen gerne sowohl fürs Marketing als auch für heyPensio jeweils 5–6 Sessions parallel laufen"* |
| Wochen-Kontingent | Montag = Wochenanfang, Verbrauch startet frisch. **Vom User nicht abgelesen** — Sessions können ihn nicht selbst erheben | — |

⚠️ **Kontingent ist INFORMATION, kein Zuschnitt-Kriterium.** Rundenschnitt,
Rundenaufbau und Qualität (Review-Tiefe, Prüfer, Modellstärke) bemessen
sich am Bedarf der Sache (Richtungsentscheid des Users, 10.08. ~01:50).

### Engpass-Erreichbarkeit

**Montag ist ein Werktag** — das ist der beste Wochentag für alles, was
Dritte erreichen muss. Betroffen: die IFB-/WTSH-Vorabklärung (R07-D)
und die seit R3 offenen DEHOGA-/IHK-Anfragen. **Aber: Versand macht
immer der User** (Baustein `aussenkorrespondenz`) — die Sessions
erzeugen nur Entwürfe im Repo. Der Werktags-Vorteil verfällt also,
wenn die Entwürfe nicht heute vorgelegt werden.

## 2. User-Handgriffe (nichts, was eine Session übernehmen kann)

| Zeit | Handgriff |
|---|---|
| **~17:30** | ⚠️ **Blockwechsel-Schnitt: Leitsession neu starten** (`claude --resume`, diese Session wählen). Grund: Regel-Snapshot + Kontextlast. Der Nachzug von heute (`e9bccef`) wirkt in DIESER Session noch nicht — sie läuft bis zum Neustart auf dem Regelstand von 12:54. |
| laufend | Vor jedem Session-Start: **NEUES Fenster** öffnen und **das Modell einstellen** (die Modellwahl liegt beim User; der Start-Handgriff ist ihr einziger wirksamer Kanal). |
| vor `/clear` | **`/cost` je Arbeits-Session ablesen, BEVOR ein Fenster geschlossen oder gecleart wird** — ein `/clear` löscht die Ablesbarkeit endgültig. |
| heute | **H-1: Livegang-Tagesdatum festlegen** (Frist 16.08., MKT-Messplan-Kette — nicht nachholbar, weil die BELEG-Baseline VOR dem Livegang gemessen werden muss). |
| heute (werktags!) | Entscheid, ob die **DEHOGA-/IHK-Anfragen** heute rausgehen (Entwürfe liegen seit R3 in `fund/erhebung/`). |
| offen | Vier MARKE1-Handgriffe: Shortlist-Gesamtschau · K4-Diktat-Test · EN-Muttersprachler-Check · Entscheid über die 4 K1-Blockierten. **Blockieren die E-V4-Welle.** |
| offen | A5-Probedruck der Vorlagen („tatsächliche Größe") · Betreiber-Briefing bis 23.08. (gekoppelt mit dem FUND2-Kayhan-Gespräch) · H-4 Altdaten-Sicherung bis 07.09. |

## 3. Zustand bei Tagesbeginn

- **Repo sauber** (`git status` leer), `git pull` up to date, letzter
  Commit `0623d2f`. Saubere Basis vor dem Auffächern ✔ (Regel 5).
- **Keine ungereviewten Arbeits-Session-Commits**, keine ausstehende
  Abschlussmeldung, R6-Debrief gelaufen (`5c8df04`). Altlasten: keine.
- **Gerüst-Nachzug erledigt** (Commit `e9bccef`, s. § 6).

## 4. Eingänge (gesichtet vor dem Rundenschnitt)

Mail-Triage **übernommen aus dem Firmen-Briefing vom selben Tag**
(`zentrale\briefings\briefing-2026-08-10.md`) — keine zweite
Volldurchsicht (Arbeitsteilung lt. `/tagesstart` § 1.3).

| Eingang | Relevanz MKT |
|---|---|
| ⭐ **Telkon (D. Scheriau), 10.08. 11:28 MESZ** — schriftliche Referenz-/Logo-/Verlinkungs-Zusage für die Website, plus Zusage zur Zusammenarbeit bei weiteren Häusern | **Rohstoff, Träger R07-B.** Zweite dokumentierte Zusage nach masunt (07.08.) → `referenzen-zusagen.md` |
| Postkorb-Rückmeldung Zentrale | **BAFA-Umsatzstruktur = Frage 11** der StB-Liste (User-Entscheid 10.08. „ja") · **Kayhan-Vertragsfrage = Frage 10** · Rollen-Charta trägt den Pauschalzuschnitt inkl. unseres Vorbehalts · Baustein `freigabe-vorlagen` in der Zentrale aktiviert. **Alle vier MKT-Meldungen gelöscht (`3d40c90`)** — Postkorb ist leer. Rückmeldung an MKT-FUND/MKT-HANDEL kommt **nach** dem StB-Termin |
| Zentrale-Lage | MKT-MARKE2 wartet weiter auf das StB-Ergebnis. **FUND/BELEG/HANDEL warten nicht** |

## 5. Runde 7 — Strang-Tabelle

**Bestimmender Zwang:** `fund/wettbewerbsbild.md` kann nur EINE Session
anfassen. Alle anderen Stränge schreiben deshalb auf eigene Dateien.

| Session | Rolle | Strang | Kern | Scope | Exklusiv | Review-Regime | Modell |
|---|---|---|---|---|---|---|---|
| **R07-A** | Ben Beckman | MKT-FUND | Nacharbeit der **24 offenen + 4 teilweisen** R05-A-Prüferbefunde, zitatkritische zuerst | `fund/wettbewerbsbild.md` · `protokolle/R06-nacharbeit-R05A-befunde.md` · `protokolle/R07-A-*` | — | **Voll-Review** (unabhängiger Prüfer) | *User-Wahl* |
| **R07-B** | Yasopp | MKT-BELEG | Telkon-Zusage im Originalwortlaut ins Register; masunt-Offenposten; Referenzvereinbarungs-Vorlage für die 3 Pilotobjekte | `referenzen-zusagen.md` · `beleg/vorlagen/referenzvereinbarung*` · `assets/partner/` · `protokolle/R07-B-*` | **Gmail (lesend)** | Kurzraster + Positivkontrolle | *User-Wahl* |
| **R07-C** | Lucky Roux | MKT-HANDEL | **Kanal-Rechtsmatrix UWG § 7** — Pflicht VOR dem Zielkundenlisten-Bau | `handel/kanal-rechtsmatrix.md` (neu) · `protokolle/R07-C-*` | — | Kurzraster + Positivkontrolle | *User-Wahl* |
| **R07-D** | Rockstar | MKT-HANDEL | IFB-/WTSH-Vorabklärung Förderarchitektur; Anfrage-Entwürfe im Repo | `handel/foerderarchitektur-beraterrolle.md` · `handel/entwurf-anfrage-*.md` (neu) · `protokolle/R07-D-*` | — | **Voll-Review** (außenwirksam) | *User-Wahl* |
| **R07-E** | — | MKT-FUND | **P22**: die 74 ungeprüften Brandnamic-Partner am gesicherten Rohbeleg auswerten | `fund/erhebung/brandnamic-partner-vollerhebung.md` (neu) · `protokolle/R07-E-*` | — | Kurzraster + Positivkontrolle | *User-Wahl* |
| *(Leit)* | Shanks | — | Nachzug ✔ · Tagesplan · Review beider Richtungen · Debrief | Wahrheits-Kanal, `.claude/` | — | — | *User-Wahl* |

**Modellwahl:** trifft der **User** (CLAUDE.md Regel 7). Die Start-Prompts
tragen bewusst keine Modellvorgabe; diese Tabelle wird nach der Wahl
nachgetragen.

### Bewusst NICHT in Runde 7

**Die Einarbeitung der R5/R6-Preisanker in ein Preismodell.** Grund:
R07-A repariert genau die Preis-Scope-Befunde (**W-7, W-8, W-10,
W-9-Rest**) — die Preisanker im Wettbewerbsbild sind belegt fehlerhaft.
Ein Preismodell darauf wäre auf Sand gebaut. Das ist ein **Sequenz-Zwang,
kein Kapazitätsproblem** → Kandidat für Block 2, nach der
Abschlussmeldung von R07-A.

Ebenfalls nicht: die **E-V4-Namens-Recherchewelle** (blockiert durch vier
User-Handgriffe) und **MKT-MARKE2** (wartet auf das StB-Ergebnis).

## 6. Gerüst-Nachzug (erledigt, Commit `e9bccef`)

**Befund:** Der CLAUDE.md-Kopf trug `2c548fe`, der R6-Nachzug lief
tatsächlich auf `b8f7d9c` — der Kopfstempel war damals nicht mitgezogen
worden und las sich zwei Commits zu alt dennoch als aktuell.
Zusätzlich meldete `pruefe-kopien.js` **DRIFT** in
`.claude/rules/aussenkorrespondenz.md`; Ursache per diff geprüft: kein
Master-zuerst-Verstoß, sondern der fehlende Nachzug von `4d8e426`.

**Übernommen** (6 von 7 Delta-Punkten): Positivkontrolle pro Muster ·
abgeschnittene Ausgabe trägt kein Negativ · Zahlen an ihren Schlüssel
binden · alle Kanäle derselben Klasse · Bildwissen in Text überführen ·
Adressaten-Prüfung Außenkorrespondenz („Feststellung statt Frage").

**Nicht übernommen:** Integrationspunkt 9 „Zentrale debrieft mit" —
adressiert die koordinierende Ebene, nicht eine Abteilung; die
Postfach-Belegpflicht steht bereits wörtlich im Baustein `gmail-mcp`.

**Gegenprobe:** `pruefe-kopien.js` nach dem Nachzug → `SYNCHRON: 11
Kopien identisch` (vorher `1 DRIFT / 10 synchron`).

⚠️ **Wirkungsgrenze:** Der Nachzug wirkt in der laufenden Leitsession
**nicht** — sie trägt den Regel-Snapshot von 12:54. Die neu gestarteten
Arbeits-Sessions bekommen den neuen Stand. Deshalb der
Leitsession-Neustart um ~17:30 (§ 2).

## 7. Blockplan

### Block 1 — 13:15 bis ~17:30 · **SCHARF**

> **Start vollzogen: 13:28 MESZ** — alle fünf Arbeits-Sessions (R07-A bis
> R07-E) laufen (User-Meldung). **Modellwahl: vom User noch nicht
> mitgeteilt** — die Modell-Spalte der Strang-Tabelle bleibt offen, bis
> die Zuordnung vorliegt; sie wird nachgetragen, nicht geraten
> (CLAUDE.md Regel 7). Belastbar ist ohnehin nur die Statuszeile der
> jeweiligen Session, nicht deren Selbstauskunft.

Runde 7 mit fünf parallelen Arbeits-Sessions (§ 5). Leitsession:
Prompts ausgeben, Rückläufe entgegennehmen, Review in **beiden**
Richtungen (Regel 8) — bei den Sessions mit Prüfer ist Prüfgegenstand
die **Befundliste**, nicht der Reparaturbericht (L-13).

### Block 2 — ~17:30 bis ~20:30 · **PROGNOSE**

Kandidaten, Reihenfolge nach Rücklauf:
1. **Preismodell/Angebotsarchitektur** auf den von R07-A korrigierten
   Preisankern (sequenzabhängig — erst nach A's Abschlussmeldung).
2. Einarbeitung der R07-E-Erhebung ins Wettbewerbsbild (erst nach A,
   gleiche Datei).
3. Nachzug-Review: Greift die neue Regel „Zahlen an ihren Schlüssel
   binden" rückwirkend auf den Bestand? (⭐ Eine frisch geschriebene
   Regel schützt nur künftigen Code — der Bestand wird im selben Zug
   rückwirkend durchsucht.)

### Block 3 — ~20:30 bis ~23:00 · **PROGNOSE**

`/debrief` für Runde 7 · Vier-Stellen-Sync · ggf. R8-Schnitt.

## 8. Rundenvermerk R7

**Gelaufen:** vier von fünf geplanten Arbeits-Sessions (R07-A bis
R07-D) plus Leitsession. **R07-E (P22) wurde nicht gestartet** — belegt
über fehlende Commits UND fehlende Dateien bei bestandener
Positivkontrolle (R07-D: 5 Commits, 2 Protokolldateien im selben
Suchlauf), nicht aus der Vermutung geschlossen. P22 wandert nach R8.

**Review beider Richtungen gelaufen** (Regel 8). Bei den beiden
Prüfer-Strängen war Prüfgegenstand die BEFUNDLISTE, nicht der
Reparaturbericht — Zählung generisch über die Gliederung, nicht über die
Kennungsliste der Session. Beide Nenner bestätigt (A: 26 Positionen,
24 repariert; D: 30 Befunde, lückenlos P07D-01…30).

**Vier Befunde gingen nach außen, zwei davon zeitkritisch als Zuruf in
laufende Sessions** (an R07-D: WTSH-Vorbefund + Verflechtung; an R07-A:
zwei wertlose Rohbelege + vier B9.4-Korrekturen). Zwei
Postkorb-Meldungen an die Zentrale, beide vor dem StB-Termin.

**Debrief:** `/debrief` gefahren, L-14 bis L-20, Gerüst-Rückfluss
`baaac82`, Vier-Stellen-Sync (Commit `e8727e3`).

**Blockplan-Realität:** Block 1 lief statt bis ~17:30 bis in den Abend;
der angekündigte Leitsessions-Neustart um 17:30 fand nicht statt (der
Handgriff stand im Plan, wurde aber nicht ausgelöst). Blöcke 2 und 3
sind entfallen — das war als PROGNOSE markiert und ist ein zulässiges
Ergebnis. Die für Block 2 vorgesehene Preismodell-Arbeit bleibt
sequenzabhängig richtig: R07-A hat die Preis-Scope-Befunde erst jetzt
repariert.

## 9. Abend-Nachtrag (~22:28) — Abbruch vor R8

**R8 wurde NICHT gestartet.** Abbruch-Entscheid der Zentrale (Garp,
10.08. abends, als User-Zuruf in die frisch gestartete Leitsession):
Der Architektur-Block der Firma hat Vorrang (Repo-Umzug +
Gerüst-Nachzug, `zentrale\STATUS.md` „Nächster Schritt" 3–4). Die
Repo-Pfade können sich noch heute ändern — Session sauber beendet,
alles committet und gepusht.

**Codex-Nachtrag der Zentrale (.codex/ + AGENTS.md): bereits
UMGESETZT, nicht mehr offen.** Zeitfolge sichtbar gemacht (nicht
geglättet): Der Nachtrag kam als `/runde`-Zuruf; Lese-Pflicht und
Umsetzung liefen VOR Eingang des Abbruch-Entscheids, ein Rückbau hätte
verifizierte, per Firmen-Entscheid gedeckte Arbeit zerstört. Beleg:

- **Lese-Pflicht erfüllt:** Volldiff AGENTS.md ↔ CLAUDE.md in Datei
  (139 Diff-Zeilen); 20 Nur-in-AGENTS-Zeilen (Zählweg: `grep -c '^>'`
  am Volldiff), **alle mechanische Substitutionen**
  (Claude→Codex, `.claude/`→`.Codex/`, Stempel `50f00dc`) — **keine
  Codex-Eigenträge, nichts zu sichern.** Die ~117 Zeilen Differenz aus
  der Zentrale-Messung sind in Gegenrichtung erklärt: R7-Rückfluss
  `baaac82`, der nach dem Import nur in die CLAUDE.md ging.
- **Umsetzung:** AGENTS.md = Zeiger nach Muster `zentrale\AGENTS.md`,
  `.codex/` in `.gitignore` (bleibt auf Platte — Werkzeug-Konfig für
  Codex-Sessions, kein Löschkandidat). Commit `90cc378`.

**Für die nächste Runde offen:** aus dem Codex-Nachtrag nichts; der
R8-Schnitt selbst (Kandidaten unverändert: MKT-AKQ zuerst, s.
STATUS.md „Nächster konkreter Schritt"). ⚠️ Nach dem Firmen-Umzug vor
dem ersten Commit prüfen, ob die Repo-Pfade sich geändert haben.
