# Prüfprotokoll R02-B — FUND2 Strang 2 (Strukturdaten) + Anfrage-Entwürfe

> **Datum:** 09.08.2026 · **Prüfer:** unabhängiger Agent R02-B ·
> **Auftrag:** Aussage und Fundstelle GETRENNT an den Originalquellen
> prüfen; eigene Berechnungen des Berichts nachrechnen; Kategorienkatalog
> 1–6 vollständig abarbeiten.
>
> **Geprüfte Dateien (Stand):**
> - `fund/erhebung/strang2-strukturdaten.md` — **Arbeitskopie** =
>   Commit `ee24ca4` PLUS eine uncommittete Änderung (§ 2.2, per
>   `git diff` gesichtet: „57 %" → „47 %"). Die Prüfung lief gegen die
>   Arbeitskopie; wo committeter Stand und Arbeitskopie abweichen, ist
>   das im Befund benannt (P1).
> - `fund/erhebung/entwurf-anfrage-dehoga-sh.md` — Stand `ee24ca4`
>   (laut `git status` unverändert).
> - `fund/erhebung/entwurf-anfrage-ihk-sh.md` — Stand `ee24ca4`
>   (laut `git status` unverändert).
>
> **Prüfweg:** Alle Quellen als lokale Originalkopien im
> Session-Scratchpad gelesen (2 XLSX per xlsx-Dump, 6 PDF-Textextrakte
> per pdf-parse, Q4-Grafik zusätzlich am gerenderten Seitenbild
> `dehoga-s10.png`, Q5 als Roh-HTML); keine Zahl aus
> Suchmaschinen-/WebFetch-Zusammenfassungen. Negativ-Suchen des
> Berichts wurden mit eigenen greps samt Positivkontrollen wiederholt.

---

## Kategorie 1 — Zahlen ohne Nenner oder ohne Zeilen-Scope

**P1 ist unter Kategorie 5 geführt (Zahlabweichung).** Hier verbleiben:

- **P4 · GERING · § 1.1, Tabellenzeile „Beherbergungsbetriebe
  insgesamt (inkl. Camping)".**
  Aussage im Bericht: Gesamt 48.919 / 47.398, darunter Hotellerie
  28.785 und Ferienunterkünfte 15.215.
  Befund an der Quelle (Q1, csv-45412-09): Werte korrekt; die
  Quellzeile „Gesamt" enthält aber zusätzlich Campingplätze (3.226)
  UND „Sonstige tourismusrelevante Unterkünfte" (1.693 =
  Vorsorge-/Reha-Kliniken 819 + Schulungsheime 874). Die im Bericht
  gezeigten Zeilen summieren sich auf 44.000 ≠ 48.919 — ein Leser, der
  die Tabelle aufaddiert, findet eine scheinbare Lücke; „(inkl.
  Camping)" benennt nur einen der beiden fehlenden Blöcke.
  Korrekturvorschlag: Fußnote an der Insgesamt-Zeile: „enthält zudem
  Campingplätze (3.226) und Sonstige tourismusrelevante Unterkünfte
  (1.693, u. a. Reha-Kliniken)". Hinweis derselben Art: die Zeile
  „Ferienunterkünfte u. ä." enthält auch Jugendherbergen und Hütten
  (1.764).

Sonst: **geprüft, kein Befund.** Methode: jede Zahl des Berichts gegen
Kopf-/Fußzeile ihrer Quelltabelle gelesen. Die Scope-Disziplin ist
durchgängig hoch — Stichtag 31.07.2025 (Q1-Blatttitel 45412-16:
„…am 31. Juli 2025" und Metadaten-Blatt „Gästezimmer zum Stichtag
31.07."), „im Juli geöffnete" (Q3 Tabelle 4/5, Fußnote 1 wörtlich
vorhanden), „Stand jeweils 1. Juli" (Q3 Tabelle 3, Fußnote 1 wörtlich
vorhanden), Nenner-Klarstellungen bei Q7 (92 % der IHKS, nicht
Unternehmen) und Q8 sind an den Quellen korrekt belegt.

## Kategorie 2 — Fehlende Proxy-Kennzeichnung

**Geprüft, kein Befund.** Methode: alle Hypothesen-Bezüge (§ 3) und
Abschnitts-Schlüsse gegen die Proxy-Warnung im Kopf gelesen. Die
globale PROXY-Warnung plus die Proxy-Einordnungen je Abschnitt
(§ 1.2, § 1.4, § 3) sind konsistent; § 3 erklärt ausdrücklich, dass
kein Punkt ein Persona-BEFUND ist. Keine Stelle verkauft
Strukturzahlen als direkten Entscheider-Beleg.

## Kategorie 3 — Negativ-Suchen ohne Positivkontrolle / ohne Suchraum

Alle fünf Negativ-Ergebnisse N1–N5 wurden nachvollzogen und
**reproduzieren**:

- N1: April-2026-XLSX (Q2) enthält die Blätter 45412-15/16/17 nicht
  (eigener Blattlisten-Dump: höchste Stichtagstabelle dort 45412-14);
  grep `größenklasse|groessenklasse` über Q3-Volltext: 0 Treffer,
  Positivkontrollen `Pensionen` (7 Zeilen) / `Betten` (15 Zeilen)
  treffen.
- N3: greps `nachfolge|inhaber|generation|betriebsgröße` über beide
  Q6-Texte: je 0 Treffer; Positivkontrollen treffen (s. P3).
- N4: grep `gastgewerbe` über Q8: 0 Treffer; Branchentabelle
  (Tabelle 1) führt exakt die im Bericht genannten Kategorien; die
  Fußnote „Einzel- und Großhandel wird den Sonstigen Dienstleistungen
  zugeschlagen" existiert — die Als-Annahme-Markierung der
  Gastgewerbe-Zuordnung ist korrekt.
- N5: Roh-HTML gesichtet, Zahlen im Satzumfeld ohne Datum/Methode —
  bestätigt.

Ein Befund:

- **P3 · GERING · § 4, N3-Positivkontrolle.**
  Aussage im Bericht: Positivkontrolle „`dwif` 55 Treffer" /
  „`tourismus` 56 Treffer".
  Befund an der Quelle: Das sind ZEILEN-Zählungen (`grep -c`), keine
  Treffer — Nachzählung per `grep -o | wc -l`: „dwif" 57 Treffer in
  55 Zeilen (Präsentationsfassung), „tourismus" (case-insensitiv) 56
  Zeilen im Jahresbericht. Genau die `grep -c`-Falle aus dem
  windows-powershell-Baustein. Konsequenz für das Negativ-Ergebnis:
  keine (beide Kontrollen treffen deutlich) — aber der Zählweg fehlt
  an der Zahl.
  Korrekturvorschlag: „55/56 Zeilen (grep -c)" schreiben oder
  Trefferzählung nachziehen.

Sonst: **kein weiterer Befund** — jede Negativ-Zeile trägt Methode,
Suchraum und eine Positivkontrolle im selben Lauf; der
Nicht-geprüft-Block ist sauber als eigenes Ergebnis geführt.

## Kategorie 4 — Vorbehalts-Verlust beim Verdichten

**Geprüft, kein Befund.** Methode: jede verdichtete Aussage gegen den
Quellsatz gelesen, gezielt auf abgeschwächte/verlorene Vorbehalte.
Die Vorbehalte sind durchgängig übernommen, teils verschärft:
Q7 als „Beratungsfall-Statistik, KEINE repräsentative Erhebung"
markiert (im Report selbst so nicht zugespitzt); „erwägen" (27 %),
„geplante" Stilllegungen/Übergabewege (Q8: „sofern alle Inhabenden
diese Pläne tatsächlich auch aktiv verfolgen" — im Bericht durch
„Nachfolgewünsche"/„geplante" gedeckt), Q5 als undatierte
Selbstauskunft, Q8-Kaufpreis als „Kaufpreisvorstellungen" mit
„~" (Quelle: „Abschätzung"). Wortlaut-Zitate (Q5, Q7) sind
zeichengetreu am Extrakt bestätigt (Wortlaut-, nicht Byte-Ebene —
der L-02-Vorbehalt steht im Bericht selbst).

## Kategorie 5 — Abweichungen Zahl ↔ Original-Quelle (inkl. Nachrechnung)

- **P1 · KRITISCH · § 2.2, erster Spiegelpunkt (nur Arbeitskopie).**
  Aussage im Bericht (Arbeitskopie, uncommittete Änderung): „**47 %**
  sind 55 Jahre oder älter (2025; +3 Prozentpunkte ggü. 2024 …)".
  Befund an der Quelle (Q8, Fokus Nr. 526, Abschnitt zur
  Altersstruktur, Grafik-2-Umfeld): „Im Jahr 2025 waren mit **57 %**
  bereits mehr als die Hälfte der mittelständischen Unternehmerschaft
  55 Jahre oder älter (+3 Prozentpunkte ggü. 2024)." Der committete
  Stand (`ee24ca4`) hatte die korrekten 57 %; die uncommittete
  „Korrektur" auf 47 % ist falsch. Die 47 % stehen in Q8 an anderer
  Stelle mit anderem Sinn: „Für 47 % der Unternehmen mit einer
  geplanten Geschäftsaufgabe ist [fehlendes Familieninteresse] (mit)
  entscheidend" — vermutlich die Verwechslungsquelle. Zusatzschaden:
  § 3 (H-A) sagt weiterhin „57 % der Mittelstands-Inhaber ≥ 55" — die
  Arbeitskopie widerspricht sich selbst, und schon „47 %" neben „mehr
  als die Hälfte"-Logik der Quelle kann nicht stimmen.
  Korrekturvorschlag: Änderung zurücknehmen (57 %), NICHT committen;
  falls die Änderung aus einer anderen Session stammt, an die
  Leitsession melden statt still überschreiben.

- **P2 · MITTEL · § 1.5 erster Spiegelpunkt + Quellenregister Q6.**
  Aussage im Bericht: Scope der 7.897 sei „Umsatzsteuerstatistik,
  GESAMTES Gastgewerbe inkl. Gastronomie, ohne 10-Betten-Grenze";
  Quellenregister: „u. a. Umsatzsteuerstatistik des Statistischen
  Landesamts".
  Befund an der Quelle: Die Folie sagt nur „7.897 steuerpflichtige
  Betriebe 2023 · Quelle: dwif 2025, Daten: Statistisches Landesamt".
  grep `umsatzsteuer` über BEIDE Q6-Texte: 0 Treffer
  (Positivkontrolle: `dwif` bzw. `tourismus` treffen, s. o.). Die
  Zuordnung zur Umsatzsteuerstatistik (und daraus „ohne
  10-Betten-Grenze") ist eine plausible Inferenz aus „steuerpflichtige
  Betriebe", wird aber als Quellen-Scope ausgegeben.
  Korrekturvorschlag: als Annahme kennzeichnen („Scope-Deutung: …,
  nicht auf der Folie benannt") oder beim SGVSH/dwif erfragen; die
  belastbare Kern-Aussage „anderer Zeilen-Scope als § 1.3, nicht
  verrechenbar" bleibt davon unberührt.

Sonst: **geprüft, kein weiterer Befund.** Alle übrigen Zahlwerte
stimmen mit den Originalen überein (Detail s. Prüf-Statistik);
alle eigenen Berechnungen des Berichts wurden nachgerechnet und sind
korrekt: Summenproben § 1.2 (alle 5 Spalten exakt: 27.808 / 11.929 /
6.641 / 5.020 / 4.218), abgeleitete Anteile § 1.2 (14.736→53,0 %;
17.456→62,8 %; 3.672→87,1 %; 4.072→81,1 %; 3.138→47,3 %;
3.854→32,3 %; 5.095→18,3 %), § 1.3 (1.013/3.452→29,3 %;
1.911/3.452→55,4 %; 163→4,7 %), § 1.4 (−840→−19,3 %; +83.160→+31,5 %).
Auch die Meta-Angaben (Herausgabedaten 10.04.2026 / 24.02.2026 /
09.01.2026 / 27.05.2025, Erfassungsgrenze ≥ 10, „77 Folien",
Befragungszeiträume, Autor/Nr. bei Q8) sind quellenbelegt.

## Kategorie 6 — Anfrage-Entwürfe

- **P5 · MITTEL · beide Entwürfe, Eingangssatz.**
  Aussage: „…arbeiten derzeit mit Pilotbetrieben in
  Schleswig-Holstein."
  Befund: Außenwirksame Tatsachenbehauptung ohne Beleg im geprüften
  Bestand. grep `pilotobjekt|pilotbetrieb|pilotkunde|schleswig` über
  das Marketing-Repo: die drei Pilotobjekte sind vielfach belegt, ein
  STANDORT-Beleg „Schleswig-Holstein" findet sich nicht (die
  „15-Zimmer-Pension in Schleswig-Holstein" im Persona-Plan ist ein
  Archetyp, kein Pilotobjekt-Beleg); das heypensio-Repo lag außerhalb
  meines Prüf-Scopes — **nicht prüfbar, kein Falsch-Befund**.
  Korrekturvorschlag: vor Versand am Produkt-Repo/beim User
  bestätigen; falls unklar, „mit Pilotbetrieben in Norddeutschland"
  o. ä. formulieren.

- **P6 · GERING · IHK-Entwurf, Kopfblock (interner Hinweis).**
  Aussage: „‚IHK Schleswig-Holstein' ist die Arbeitsgemeinschaft der
  drei Kammern (Kiel, Lübeck, Flensburg); für den Firmensitz ist die
  IHK zu Kiel zuständig."
  Befund: Behauptung über Dritte ohne Quellvermerk; der Kopf ordnet
  zwar eine Vor-Versand-Klärung an, die Zuständigkeits-Aussage selbst
  trägt aber keinen Beleg (Zuständigkeit hängt zudem am — hier nicht
  dokumentierten — Firmensitz).
  Korrekturvorschlag: Quellvermerk (ihk-schleswig-holstein.de bzw.
  Kammer-Website) nachtragen oder als Annahme markieren.

Sonst: **geprüft, kein weiterer Befund.**
- Entwarnungen/Zusagen: keine unbelegte Entwarnung; keine
  Präsens-Zusage, die noch nicht wahr ist („Gern nennen wir…" ist
  Angebots-, nicht Vollzugsform). Die einzige Statistik-Aussage im
  DEHOGA-Entwurf trägt den Vorbehalt „nach unserem Kenntnisstand" und
  deckt sich mit Befund N1.
- Zitierte Dritt-Zahlen: DEHOGA-Entwurf Punkt 3 (5.200 / 80.000)
  stimmt wörtlich mit der Website-Selbstauskunft überein (am Roh-HTML
  geprüft); IHK-Entwurf-Aussage zum DIHK-Report („deutlicher Überhang
  abgabewilliger Hotel- und Gastronomiebetriebe") ist am Branchen-Teil
  belegt („fast dreieinhalbmal").
- Sprache/Umlaute: beide Entwürfe Deutsch (Empfänger Sitz DE),
  korrekte Umlaute inkl. Betreff, keine ASCII-Transliteration; im
  Anschreiben-Text keine Gedankenstriche.

---

## Prüf-Statistik

- **Vollprüfung aller Zahlenwerte des Berichts:** ca. **130 von
  ca. 130** Zahlen-/Datums-Angaben an den Original-Dateien geprüft
  (Zählweg: jede Zahl, jedes Datum und jeder Anteilswert in
  Bericht + Entwürfen einzeln gegen Quelldatei gelesen; darunter
  § 1.1: 14 Tabellenwerte, § 1.2: 43 Tabellenwerte + 14 abgeleitete,
  § 1.3: 16 + 4 + 5 Zweitkanal, § 1.4: 4 + 3, § 1.5: 5, § 2.1: ~10,
  § 2.2: ~12, § 2.3: 12, Meta-/Registerangaben: ~10). Keine
  Stichprobe — Auswahlkriterium entfällt.
- **Nachgerechnet:** alle 24 eigenen Berechnungen des Berichts
  (5 Summenproben, 14 Anteile § 1.2, 3 Anteile § 1.3, 2 Deltas +
  1 Anteil § 1.4) — alle korrekt.
- **Negativ-Suchen reproduziert:** 5 von 5 (N1–N5), je mit eigener
  Positivkontrolle.
- **Nicht prüfbar** (eigenes Ergebnis): Q5-Selbstauskunft
  (Stand/Methode — im Bericht korrekt so gekennzeichnet);
  Pilotbetriebe-Standort SH (P5, Beleg läge im heypensio-Repo).
- **Ergebnis: 6 Befunde — 1 KRITISCH (P1), 2 MITTEL (P2, P5),
  3 GERING (P3, P4, P6).** Der committete Stand `ee24ca4` des
  Berichts ist zahlenseitig sauber; der einzige kritische Befund
  betrifft die UNCOMMITTETE Arbeitskopie-Änderung (57 → 47).

*Erstellt: 09.08.2026, unabhängiger Prüfer R02-B. Keine anderen
Dateien geändert, nichts committet.*
