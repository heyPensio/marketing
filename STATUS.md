# STATUS — Marketingabteilung (Kurz-Einstieg)

> **Zweck:** Garantiert lesbarer Sitzungsstart-Einstieg. Die Projektquelle
> (`projektquelle-mkt.md`) **bleibt der Wahrheits-Kanal** —
> diese Datei ist nur der Kurzabriss.
>
> **Lese-Regel (verbindlich):**
> 1. Diese STATUS.md immer zuerst lesen — **danach**
>    `C:\Users\qwafa_2dwxzia\zentrale\STATUS.md` (Firmen-Ebene, s.
>    CLAUDE.md Abschnitt „Firmen-Ebene").
> 2. Für Details/Historie die Projektquelle **gezielt** lesen (grep bzw.
>    Read mit offset auf „AKTUELLER STAND", „NÄCHSTER KONKRETER SCHRITT",
>    Changelog-Header). Nie einen gescheiterten Voll-Read stillschweigend
>    übergehen, nie auf ein veraltetes Seiten-Dokument aufsetzen.
> 3. Vor jeder Statusaussage über einen benannten Anbieter/Sachverhalt:
>    erst `grep -rin "<name>"` übers Repo.
> 4. Bei Widerspruch STATUS.md ↔ Projektquelle: **Projektquelle gewinnt.**
>
> **Pflege:** Nur die drei Blöcke unten, kurz halten; wird beim Debrief
> zusammen mit der Projektquelle aktualisiert (Vier-Stellen-Sync).
> Runden-Stände älter als das 2-Runden-Fenster rotieren VERBATIM nach
> `STATUS-archiv.md` (Datei entsteht bei der ersten Rotation); ein hier fehlender Alt-Stand heißt „rotiert", nie
> „nichts passiert".

---

## Letzte Aktualisierung
**09.08.2026 (Sitzung 1, Projekt-Aufsetzung)** — Gerüst per `/projekt-init`
erzeugt; Projektplan (7 Stränge + erste Arbeitspakete) steht in der
Projektquelle. Der Plan wurde vor der Freigabe von drei unabhängigen
Prüfern evaluiert (Prämissen-Kritik, CMO-Praxis, Completeness) —
Rohberichte in `protokolle/R00-planpruefung-2026-08-09.md`; die
User-Entscheide dazu stehen in der Projektquelle § 4.

## Aktueller Stand
- Projektstruktur angelegt: MKT-FUND (Positionierung) · MKT-MARKE
  (Name/CI; Rebrand GESETZT, 51/49-Freigabe laut GF-Auskunft erteilt —
  Datum/Form-Dokumentation offen, E9) · MKT-BELEG (Pilot-Doku) ·
  MKT-HANDEL (Pricing/Vertrieb) · MKT-WEB (Website, nach
  Namensentscheid) · MKT-AKQ (Akquise) · MKT-OPS (Betrieb flach).
- **Zieltermine (E4 präzisiert):** Abteilung komplett Mitte September
  2026 (angedacht) · erster zahlender Kunde bis Mitte November 2026.
- Schwester-Repo `zentrale` (Firmen-Ebene) im selben Zug angelegt —
  trägt Namensentscheid-Vorprüfung und Rollen-Charta.
- Noch keine Arbeits-Runde gelaufen.

## Nächster konkreter Schritt
1. **⚠️ TERMINKRITISCH (Zentrale, nicht MKT — aber MKT-MARKE hängt daran):**
   GbR-Namensführungsfrage (eGbR/MoPeG) in den laufenden
   Steuerberater-Termin ziehen, VOR der Gewerbeanmeldung ~Mitte August.
   Postkorb-Meldung liegt bereits in `zentrale\eingang\`.
2. **R1-Kandidaten:** (a) MKT-FUND-Kickoff — USP/Portfolio-Erweiterung
   auf größere Häuser + Persona-Validierung (bestimmt den Kanalmix);
   (b) MKT-MARKE — Naming-Sprint vorbereiten (Kriterienkatalog,
   Markenrecherche-Verfahren; ⚠️ es existiert für KEINEN Namen eine
   Recherche; ⚠️ Everlast-§11-Warnung: Marken-Assets vor/außerhalb
   der Everlast-Zusammenarbeit ab 18.09. — `zentrale\namensentscheid.md`);
   (c) MKT-BELEG — Baseline-Messplan für die Pilotobjekte VOR dem
   PMS-Livegang (Ende September, nicht nachholbar).
   **Pflicht-Input für alle R1-Stränge: die drei Extraktionsberichte
   `protokolle\R00-extraktion-*.md`** (Positionierung/Fassung 6,
   Wettbewerb, Pricing-Benchmarks, Portfolio-Module, Kanäle,
   Case-Study-Rohstoff, Website-Ist inkl. Referenz-Zusagen-Pflicht).
5. **Blueprint-Arbeitsauftrag (aus Extraktion C):** zwei neue Bausteine
   `aussenkorrespondenz` + `freigabe-vorlagen` aus den firzlaff-Skills
   `anbieter-anfrage`/`freigabevorlage-kayhan` entkundenspezifiziert
   bauen (frischer Agent liest die QUELL-Skills, nicht die Verdichtung),
   in marketing aktivieren (`freigabe-vorlagen` auch zentrale); dazu
   Baustein-Ergänzungen D1/D3–D6 + tagesstart-Nachzug D7 + Assets
   E1–E3 (Partnerschafts-Baustein, Fassung-6-Kanon, Kayhan-Profil).
3. **Kleinposten:** Domain-Inventur (Cloudflare-/Registrar-Dashboard mit
   dem User auslesen — er weiß den Bestand nicht auswendig).
4. ~~Kapazitätsdeckel-Entscheid~~ ✅ ENTSCHIEDEN 09.08. (E8): kein
   fester Deckel — Parallelbetrieb Marketing + Pilot, Regler ist das
   Wochen-Nutzungslimit; Priorisierung situativ über das
   Firmen-`/briefing` (Terminposten zuerst).
