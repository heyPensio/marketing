# R01-A — Prüfprotokoll des unabhängigen Zweitprüfers (frischer Kontext)

## Kopf

- **Datum:** 09.08.2026
- **Geprüfte Dateien (Prüflinge):**
  - `fund/positionierungspapier.md` (FUND1-Entwurf) — vollständig gelesen, jede Zeile (332 Zeilen)
  - `fund/persona-validierungsplan.md` (FUND2-Plan) — vollständig gelesen, jede Zeile (277 Zeilen)
- **Gelesene Quellen (vollständig, jede Zeile):**
  - Quelle A: `protokolle/R00-extraktion-projektquelle.md`
  - Quelle B: `protokolle/R00-extraktion-strategie.md`
  - Quelle C: `protokolle/R00-extraktion-lehren-delta.md`
  - Ergänzend (read-only, wo die Prüflinge sie zitieren): `projektquelle-mkt.md`,
    `referenzen-zusagen.md`, `protokolle/R00-planpruefung-2026-08-09.md` — ebenfalls
    vollständig gelesen.
- **Nicht gelesen (außerhalb des Prüf-Scopes):** Rohquellen im heypensio-Repo
  (u. a. `call-apaleo-2026-08-03.md`), `zentrale\sensibel\`-Transkripte. Folgen
  daraus stehen unter „Verfahrens-Grenzen" (c).
- **Verfahren:** Satz-für-Satz-Abgleich beider Prüflinge gegen A/B/C (Aussage und
  Fundstelle getrennt geprüft), danach Gegenfrage-Durchgang je Pflichtkategorie.
  An den Prüflingen wurde nichts geändert.

---

## Positivkontrolle (Verfahrens-Auftrag: eine bewusst verfälschte Kernaussage)

### Fund

**Positionierungspapier § 5, zweiter Spiegelpunkt, Schlusssatz:**

> „Das Touch-Terminal läuft beim Piloten seit August 2026 im
> Produktivbetrieb mit echten Gästen — der Terminal-Einsatz ist damit
> heute als Kundeneinsatz belegbar und trägt das Terminal-Kapitel der
> Case Study bereits 2026 (Quelle Extraktion A, Abschnitt d)."

### Beleg des Widerspruchs

Die als Quelle angegebene Fundstelle sagt das **Gegenteil**. Quelle A,
Abschnitt (d), wörtlich:

> „**Terminal vertagt auf ~2027** (Kayhan: erst Klimaanlagen; Übergang
> Festcode-Schlüsselkasten) — Case-Study-Zeitachse: **Terminal-Kapitel
> erst 2027**."

Drei voneinander unabhängige Widerspruchs-Ebenen:

1. **Direkte Quellen-Inversion:** A/(d) datiert das Terminal-Kapitel der
   Case Study ausdrücklich auf „erst 2027" und vermerkt den Terminal-Einsatz
   beim Piloten als „vertagt auf ~2027". Der Prüfling behauptet unter
   Berufung auf genau diese Fundstelle „bereits 2026" und „Produktivbetrieb
   mit echten Gästen seit August 2026".
2. **Widerspruch zur einzigen Terminal-Statusquelle:** A/A8 führt das
   Touch-Terminal ausschließlich als „E2E-belegte Substanz: Touch-Terminal
   live" — ein Bau-/Test-Beleg. Weder „Produktivbetrieb" noch „echte Gäste"
   noch „seit August 2026" kommen in irgendeiner der drei Quellen vor; die
   Status-Systematik des Papiers selbst („Bau ≠ Beleg ≠ Kundeneinsatz",
   § 5 Kopf) wird von dem Satz gebrochen.
3. **Innerer Widerspruch des Prüflings (Indiz für nachträgliche Änderung):**
   Derselbe § 5 nennt das Terminal einen Satz vorher „live (im
   Bau-/Testkontext)", und § 6 verweist auf einen
   „Kundeneinsatz-Vorbehalt s. § 5 (A8)" — ein Vorbehalt, den der
   verfälschte Satz gerade beseitigt. Der Querverweis läuft ins Leere;
   das ist die Naht der Verfälschung.

Sachliche Folge, wäre der Satz stehen geblieben: Ein außenwirksames
Positionierungspapier hätte eine nicht existierende Kundeneinsatz-Referenz
(Produktivbetrieb mit echten Gästen) als „heute belastbar" deklariert —
genau die Sorte unverifizierter Entwarnung/Zusage, vor der CLAUDE.md warnt.

**Im Persona-Validierungsplan wurde keine quellenwidrige Kernaussage
gefunden** — die Verfälschung liegt in Prüfling 1.

### Zusatzfrage: „Hätte ich sie ohne den Hinweis auf ihre Existenz gefunden?"

Ehrliche Antwort: **sehr wahrscheinlich ja, aber nicht mit Gewissheit.**
Dafür spricht: Der Satz trägt einen expliziten, prüfbaren Quellen-Anker
(„Extraktion A, Abschnitt d"), und der Auftrag verlangte ohnehin den
Soll-Ist-Abgleich aller Status-Angaben — beim Nachschlagen von A/(d) wäre
die Inversion aufgefallen; zusätzlich hätten der ins Leere laufende
„Kundeneinsatz-Vorbehalt"-Verweis in § 6 und der Widerspruch zum eigenen
§-5-Kopf Alarm ausgelöst. Dagegen spricht: Der Satz ist geschickt als
Detail-Anschluss hinter einem korrekt zitierten A/A8-Block platziert, und
„Terminal live" (A8) liefert eine oberflächliche Schein-Deckung — ohne den
Existenz-Hinweis wäre die Prüfschärfe an dieser Stelle geringer gewesen.
Das Restrisiko des Durchwinkens war nicht null; der Kategorienkatalog
(Status-Angaben, Entwarnungen) hätte es aber strukturell abgedeckt.

---

## (a) Befunde Soll-Ist gegen die Quellen (nummeriert, nach Schwere)

### Befund 1 — KRITISCH: Terminal-Kundeneinsatz-Behauptung (= die Verfälschung)

Siehe Positivkontrolle oben. Positionierungspapier § 5; widerspricht
A/(d) („Terminal vertagt auf ~2027 … Terminal-Kapitel erst 2027") und
überdehnt A/A8 („Touch-Terminal live" als E2E-/Bau-Beleg) zu einem
Kundeneinsatz-Beleg.

### Befund 2 — MITTEL: Umformuliertes „wörtliches" Zitat der User-Rüge

Positionierungspapier § 2: „nach der User-Rüge **„heyPensio zu flach
dargestellt"** (Fassung 5→6)". Die Quellen tragen als Wortlaut
ausschließlich: A/A2 „Nach User-Rüge (**„viel zu flach"**)" und B/F4.1
„nach User-Rüge **„zu flach"**". Die Formulierung „heyPensio zu flach
dargestellt" steht in keiner Quelle, ist aber durch Anführungszeichen als
Zitat ausgewiesen. Sachlich sinnwahrend, formal ein Verstoß gegen die
Originalwortlaut-Regel (CLAUDE.md Freigaben: „Zusagen im ORIGINALWORTLAUT
zitieren, nie umformulieren" — gilt sinngemäß für jedes als wörtlich
markierte Zitat). Gefahr: Das Pseudo-Zitat wird künftig als Kanon
weiterzitiert.

### Befund 3 — MITTEL: Portfolio-Lücken in § 6 gegenüber A/A11

Details unter Kategorie 2 (unten): Gastprofil-Merge, Rezeptions-Tablet,
Pre-Stay, Lost&Found fehlen im Dienstleistungsportfolio, obwohl § 6
beansprucht, nach A/A1+A11 geordnet zu sein.

### Befund 4 — MITTEL: Kayhans Doppelrolle fehlt als Befangenheits-Vorbehalt im FUND2-Plan

Persona-Validierungsplan § 3 Strang 1 stützt sich zentral auf das
Kayhan-Gespräch und Kayhans Empfehlungsradius, führt aber nirgends den
Beleg-Typ-Vorbehalt mit, den A/A7 liefert: „**Kayhan wird externer
BERATER von heyPensio (auf Rechnung, kein Gesellschafter)**. Cousin von
Qays". Ein künftig auf Rechnung tätiger Berater und Verwandter ist als
Primärquelle über Entscheidungswege und als Empfehlungsgeber strukturell
nicht neutral — derselbe Maßstab, den der Plan selbst an Apaleo- und
Store-Anbieter-Selbstauskünfte anlegt (§ 3 Strang 3: „interessierte
Parteien … als Selbstauskunft gekennzeichnet"), fehlt beim eigenen
Kronzeugen. Der Plan kennzeichnet zwar die n=1-Analogie-Grenze des
Pilot-Umfelds, nicht aber die Interessenlage der Person.

### Befund 5 — MITTEL: Problem-Fit-These „bemannte Rezeption" fehlt als Prüffrage in FUND2

Die Planprüfung (Bericht 1, Prämisse 3) trägt eine dokumentierte,
persona-relevante Gegenthese: „Größere Häuser HABEN eine bemannte
Rezeption; dort löst Anwesenheit das Problem, das das Produkt löst …
ein Segment mit strukturell schwächerem Problem-Fit." Der
Persona-Validierungsplan zitiert die Planprüfung als Quelle, erhebt für
H-C (Direktoren-These) aber nur die Entscheider- und Kanalfrage — die
Frage, ob im Segment größere Häuser überhaupt der dokumentierte
Kern-Schmerz existiert (Rezeptionsbindung, vgl. A/A8: „Kayhan ist
faktisch an die Rezeption gefesselt"), ist in keinem Erhebungsstrang als
Frage angelegt. Da FUND2 laut Projektquelle den AKQ-Kanalmix determiniert
und laut Positionierungspapier § 3.2/§ 7.3 auch die Größen-Obergrenze
speist, ist das eine echte Erhebungslücke, keine Stilfrage. (Die
Gegenprobe-Achse des Plans prüft „Anlass statt Person" — das ist eine
andere Achse und deckt diese These nicht.)

### Befund 6 — KLEIN: v3-Kandidat beim User wird nicht erwähnt

Positionierungspapier § 2 und § 7.5 behandeln den
Partnerschafts-Baustein-v3-Rewrite als rein künftiges Arbeitspaket. Nach
A/A2 („**Partnerschafts-Baustein v3 liegt als Kandidat beim User**") und
B/F5.1 („v3-Kandidat beim User") existiert bereits ein v3-Entwurf in
User-Prüfung. Der Ist-Stand des Auftragsgegenstands ist damit
unvollständig wiedergegeben (Verifikationsregel e: „Bau ≠ Beleg" —
hier: „offen" ist nicht „nicht begonnen"); wer § 7.5 liest, plant den
Rewrite ggf. doppelt.

### Befund 7 — KLEIN: CMO-Zitat ohne Auslassungszeichen verkürzt

Persona-Validierungsplan § 1 H-A zitiert: „Der 58-jährige Betreiber einer
15-Zimmer-Pension in Schleswig-Holstein ist [auf LinkedIn] nicht". Die
Quelle (Planprüfung, Bericht 2 (c) 1) lautet: „… ist dort nicht, **oder
nur mit Karteileiche-Profil**." Die eckige Klammer ist sauber, die
Weglassung des Halbsatzes ohne „…" nicht. Sachlich folgenlos (der
weggelassene Teil stützt die zitierte Richtung sogar), formal ein
Zitat-Treue-Mangel.

### Befund 8 — KLEIN: Everlast-§-11-Entwarnung trägt eine Session-Auslegung

Positionierungspapier § 7.7: „Dieses Papier entsteht davor" (vor Beginn
18.09.2026) als Entwarnung gegen das Everlast-Veröffentlichungsrecht.
Die Quelle B/F1.2 definiert den Geltungsbereich als „**in der
Zusammenarbeit** entstehende ‚Logos, Content und Webpräsenzen'" und warnt
selbst, die neue Marke sei „ggf. ‚in der Zusammenarbeit' entstanden". Die
Gleichsetzung „vor dem 18.09. entstanden = nicht erfasst" ist eine
zeitliche Auslegung der AGB-Klausel durch die Session, kein Quellensatz.
Die Entwarnung trägt zwar Datum und Quelle im Satz (Regel erfüllt), aber
der Auslegungscharakter ist nicht gekennzeichnet — ein Halbsatz
(„zeitliche Lesart der Session, AGB-Auslegung nicht juristisch geprüft")
würde den Vorbehalt retten. Positiv: Für spätere Assets verweist das
Papier korrekt nach MKT-MARKE.

### Befund 9 — KLEINST: Anker-Drift bei einem als Zitat gesetzten Halbsatz

Persona-Validierungsplan § 5 zitiert „vor dem Zielkundenlisten-Bau" mit
Anker „Projektquelle § 2 MKT-HANDEL"; die Projektquelle formuliert dort
„VOR dem Bau der Zielkundenliste" — der zitierte Wortlaut steht so in
CLAUDE.md (Strang-Tabelle MKT-HANDEL). Inhaltlich identisch, Fundstelle
verrutscht.

### Als korrekt verifiziert (Stichprobe der tragenden Aussagen, ohne Befund)

- Fassung-6-Wortlaut § 2 = B/F4.1 wortgleich (im Rahmen meines
  Lesekanals; Byte-Ebene s. Verfahrens-Grenzen).
- Everlast-Einordnungs-Zitat § 3.2 = B/F3.1 (Ellipse zulässig gesetzt,
  Vorbehalt „geprüft, nicht übernommen" vollständig übernommen;
  40–70-MA-Zahl korrekt als ungeprüfte Anbieter-Empfehlung markiert).
- A12-Zitat § 4.4 wortgleich inkl. des Geltungs-Vorbehalts „bewusst neu
  prüfen" — vorbildlich: Der Prüfling ERWEITERT den Quell-Vorbehalt sogar
  (Säule 4 nur Kernsegment bis FUND2/HANDEL-Prüfung).
- Vier-Säulen-Zitat § 4 = B/F6.1 wortgleich; Straiv ~18 MA/„2.500
  Hotels" mit Beleg-Typ „Fremd-/Selbstauskunft, nicht selbst geprüft"
  (A/A5, F6.1); „keiner am Gerät" (F6.1); Store-Lücke mit
  Alterungs-Vorbehalt (A/A5, F6.1).
- Pilotzahlen § 5 = A/A8 (23 = 21 + 2 · ~25 als circa · 10–11 · Summe
  ~58–59 mit Zählweg; „bestätigt" als übernommener Beleg-Typ
  gekennzeichnet).
- Kostenlos-Pilot/„echter Kunde, kein Umsatz-Beleg" = B/F2.2 + A/C3.
- masunt-Absatz § 5 deckungsgleich mit `referenzen-zusagen.md` inkl.
  Abgrenzung Partner-Listung ≠ Kundenreferenz und Vorab-Abstimmung.
- Website-Nichtverwendbarkeit = A/A10 + B/F5.2 (Weglassen von „Ursache
  beseitigt, Review-Klick beim User" wirkt in die konservative Richtung —
  kein Vorbehalts-Verlust zugunsten der eigenen Aussage).
- FUND2-Plan: HANSE-Doppel-GF (A/B7), Kayhan-Konventionen (C/E3),
  Informationshygiene/Zeitpunkt-Prüfung/Dreimal-Regel (C/A4/A3),
  GEANTWORTET ≠ REAGIERT (C/A7), Versand-macht-User (C/A6),
  HS/3-Türöffner (A/(d)), H-A/H-B-Herkunft (Planprüfung Disposition) —
  alle quellentreu, Vorbehalte mitgeführt.
- 03.08. vs. 04.08. (Fassung-6-Versanddatum): innerhalb meiner Quellen
  ein echter A↔B-Konflikt (A/A2: „versendet 04.08."; B/F4.1: „versendet
  03.08., 20:57 MESZ"). Der Prüfling folgt B und erklärt A zur Drift —
  plausibel und durch B gestützt; die behauptete Rohquellen-Gegenlesung
  selbst ist für mich **nicht prüfbar** (s. u.).

### Nicht prüfbar (eigenes Ergebnis, keine Entwarnung)

- Positionierungspapier § 2: Msg-ID `19fc8fc8ebcdd92f`, die
  „byte-gleiche" Rohquellen-Gegenlesung und die endgültige Auflösung der
  Datums-Drift — Rohquelle liegt im heypensio-Repo außerhalb des
  Prüf-Scopes.
- Wörtlichkeit der Voice-Zitate (E2-Rahmensatz, E3-Transkript) über die
  Projektquelle hinaus — Transkripte liegen in `zentrale\sensibel\`.
- referenzen-zusagen.md-Binnenbelege (Gmail-Thread-IDs) — Postfach nicht
  Teil des Prüfauftrags; geprüft wurde nur die Übereinstimmung
  Prüfling ↔ Register.

---

## (b) Kategorien-Ergebnisse (je Kategorie ein Pflicht-Ergebnis)

### Kategorie 1: Fehlende Persona-Aspekte aus den Quellen

**Zwei Funde, eine Randnotiz.**
(1) Kayhans Doppelrolle als künftiger bezahlter Berater und Cousin
(A/A7) fehlt als Befangenheits-/Beleg-Typ-Vorbehalt in Strang 1
(= Befund 4). (2) Die dokumentierte Problem-Fit-Gegenthese „bemannte
Rezeption bei größeren Häusern" (Planprüfung Bericht 1, Prämisse 3;
Anker A/A8 „an die Rezeption gefesselt" und A/A13 „fernbedient") fehlt
als Erhebungsfrage (= Befund 5). Randnotiz ohne Befund-Rang: Die dritte
Pilot-Entität (Hostel via LEANE, Leane Mardanzai — A/B4) taucht im
Strang 1 nicht als eigener Datenpunkt für Entscheider-Konstellationen
auf, obwohl der Plan die HANSE-Doppel-GF-Konstellation ausdrücklich als
„ersten realen Datenpunkt für Mischformen" nutzt — ein zweiter läge in
derselben Quelle.

### Kategorie 2: Portfolio-Module der Berichte, die in § 6 fehlen (A/A11 systematisch gegen § 6 gehalten)

**Fund (= Befund 3).** Abgleich aller A11-Positionen gegen § 6:
Preis-Empfehlungs-Agent ✓ · Betreiber-Cockpit ✓ · Pre-Check-in ✓ ·
Reservierungs-Telefonassistent ✓ · FAQ-/Concierge ✓ ·
Aftersales-Versand ✓ · Bewertungs-Modul ✓ · Revenue-Management-
Partner-Modul ✓ · Room-Rack-App ✓ · Zutritts-Linien A–F ✓ ·
Kunden-Onboarding ✓ · Multi-Kunden-Architektur ✓ · Voice-Produktkern ✓
(in § 4.3). **Fehlend: Gastprofil-Merge · Rezeptions-Tablet · Pre-Stay ·
Lost&Found** — und A11 endet mit „u. a.", d. h. die Extraktionsliste ist
selbst nicht abschließend; § 6 erhebt aber durch seine Quellenangabe
(„Quelle Extraktion A/A1, A11; Status je Modul aus der Quelle
übernommen") den stillen Anspruch der Abbildung. Entweder die vier Module
nachtragen (mit Status aus A11) oder in § 6 ausdrücklich vermerken,
dass bewusst eine Auswahl getroffen wurde und nach welchem Kriterium.
Pikant: Gerade Rezeptions-Tablet und Pre-Stay wären für die
Portfolio-These „größere Häuser buchen mehr Checkpoints" (§ 6 Schluss)
einschlägig.

### Kategorie 3: Verlorene Vorbehalte/Bedingungen beim Verdichten

**Ein kritischer Fund, zwei kleine; im Übrigen auffällig sauber.**
Kritisch: Befund 1 ist der Maximalfall des Vorbehalts-Verlusts — aus
„live (E2E/Bau)" + „vertagt auf ~2027" wurde „Produktivbetrieb mit echten
Gästen, heute belegbar". Klein: Befund 6 (existierender v3-Kandidat
verschwiegen → Ist-Stand geschönt einfach) und Befund 8
(Auslegungs-Charakter der Everlast-Entwarnung nicht gekennzeichnet).
Ausdrücklich positiv (bewährtes Muster, meldepflichtig wie Fallen): Die
Prüflinge führen Quell-Vorbehalte überwiegend mit und verschärfen sie
teils (A12-Geltungsvorbehalt, T+2-„erst nach Vertragslektüre"-Vorbehalt
B/F4.3 in § 6 Payment, Stand-/Alterungs-Vorbehalte der
Wettbewerbsbefunde, „bestätigt" als übernommener Beleg-Typ,
Analogie-Grenze n=1 in Strang 1, Proxy-Warnung in Strang 2,
Selbstauskunfts-Kennzeichnung in Strang 3, Schwellen 3/1 als
Vorschlags-Setzungen).

### Kategorie 4: Zahlen ohne Zählweg oder ohne Zeilen-Scope

**Keine Auffälligkeit.** Alle tragenden Zahlen beider Prüflinge führen
Zählweg oder Scope mit: 23 Units (21 + 2), ~25 (circa der Quelle), 10–11,
Summe ~58–59 (23 + ~25 + 10–11), ~18 MA/„2.500 Hotels" (Fremd-/
Selbstauskunft), 40–70 MA (ungeprüfte Anbieter-Empfehlung),
„10–25 Einheiten je Objekt" (abgeleitete Spanne mit Verweis auf § 5),
Erhebungs-Schwellen 3/1 und Gesprächszahlen 3–5/5–8 (als Setzungen der
Session gekennzeichnet), Timebox 1–2 Wochen (Projektquelle). Die
Preis-Benchmarks aus A/A5 wurden bewusst NICHT ins Papier übernommen
(korrekt nach MKT-HANDEL delegiert) — kein Prüffall.

### Kategorie 5: Entwarnungen ohne Quelle im Satz

**Ein kritischer Fund, ein kleiner.** Kritisch: Befund 1 ist eine
Entwarnung MIT Quelle, deren Quelle das Gegenteil sagt — die
gefährlichste Form, weil der Anker Prüfbereitschaft senkt. Klein:
Befund 8 (Quelle im Satz vorhanden, Auslegungscharakter fehlt). Sonst
keine Auffälligkeit: Die übrigen Entwarnungen tragen ihre Quelle im Satz
(masunt-Abgrenzung ← Register; Website-Sperre ← A10/F5.2;
Konzern-Abgrenzung § 3.3 und Arbeitsdefinition § 3.2 sind ausdrücklich
als unbestätigte Session-Einordnung/Vorschlag markiert; der
Entwurfs-Status beider Papiere ist je im Kopf verankert).

---

## (c) Verfahrens-Grenzen — was dieses Verfahren NICHT gefangen hätte

Mein Verfahren ist ein Abgleich Prüfling ↔ Extraktionsberichte (+ drei
zugelassene Repo-Dokumente). Daraus folgen blinde Flecken:

1. **Verfälschungen, deren Quelle außerhalb des Scopes liegt.** Aussagen
   mit Ankern ins heypensio-Repo oder nach `zentrale\sensibel\`
   (Msg-IDs, „byte-gleich gegengelesen", die 03./04.08.-Drift-Auflösung,
   Voice-Wortlaute) konnte ich nur auf Konsistenz mit A/B/C prüfen. Eine
   Verfälschung, die sich als „Rohquellen-Gegenlesung korrigiert den
   Extraktionsbericht" tarnt, hätte ich strukturell nicht falsifizieren
   können — ich hätte sie nur als „nicht prüfbar" markiert. Der echte
   Drift-Fall (04.08. → 03.08.) zeigt, dass genau diese Tarnkappe im
   Dokument bereits legitim benutzt wird.
2. **Verfälschte QUELLEN.** Ich prüfe die Prüflinge gegen A/B/C, nicht
   A/B/C gegen deren Rohbestand. Eine Kernaussage, die einen falschen
   Satz der Extraktionsberichte treu übernimmt, wäre bei mir als
   „korrekt verifiziert" durchgelaufen.
3. **Als Session-Einordnung gekennzeichnete Setzungen ohne
   Quellen-Anker** (§ 3.3 Konzern-Abgrenzung, § 3.2 Arbeitsdefinition,
   die Kanal-Konsequenz-Tabelle in FUND2 § 2, die Erhebungs-Schwellen).
   Eine dort platzierte inhaltliche Verfälschung (z. B. ein bewusst
   falsches Abgrenzungskriterium) hat kein Soll, gegen das ich messen
   kann — sie wäre nur durch Fach-Plausibilität auffindbar, nicht durch
   Quellen-Abgleich.
4. **Reine Auslassungen ohne Kategorien-Treffer.** Der
   Gegenfragen-Katalog deckt Persona, Portfolio, Vorbehalte, Zahlen,
   Entwarnungen. Eine Verfälschung durch WEGLASSEN außerhalb dieser
   Kategorien (z. B. ein verschwiegener Kanal-Befund aus A/A9) wäre nur
   gefunden worden, soweit ich beim Volllesen der Quellen aktiv
   rückwärts geprüft habe — das habe ich für A11 systematisch, für
   andere Abschnitte nur kursorisch getan.
5. **Zahlendreher innerhalb von Circa-Spannen.** Bei Quellenangaben wie
   „~25" oder „10–11" hätte eine kleine Verschiebung („~24",
   „11–12") den Abgleich nur bei exaktem Zeichenvergleich verloren; bei
   sinngemäßer Lesung wäre sie durchgerutscht.
6. **Byte-Ebene von Kanon-Texten.** Die Apostroph-/Zeichen-Falle
   (C/B3: `'` vs. `'`) kann mein Lesekanal nicht sichtbar machen; die
   Fassung-6-Wortgleichheit ist auf Wort-, nicht auf Byte-Ebene
   verifiziert. Für den Kanon-Anspruch des § 2 wäre ein Skript-Vergleich
   nötig (B3-Muster).
7. **Zukunftsgerichtete Methodenaussagen des FUND2-Plans.** Ob die
   geplanten Erhebungswege real funktionieren (Destatis-Schneidungen,
   DEHOGA-Auskünfte), prüft kein Dokumentenabgleich — der Plan
   kennzeichnet das selbst korrekt als offen; eine dort versteckte
   Unmöglichkeit hätte ich nicht erkannt.

---

*Prüfer: unabhängige Session mit frischem Kontext, 09.08.2026. Dieses
Protokoll ist der einzige Schreib-Output der Prüfung; an den Prüflingen
und Quellen wurde nichts geändert, nichts committet.*
