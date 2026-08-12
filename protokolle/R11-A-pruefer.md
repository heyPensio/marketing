# R11-A Prüferprotokoll — `handel/preismodell-optionen.md`

**Prüfgegenstand:** `handel/preismodell-optionen.md` im Commit **`8f65e40`**
(„R11-A HANDEL1: Preismodell-Optionen als Entscheidungsvorlage gebaut"),
**970 Zeilen**, vollständig gelesen (2 Leseläufe, Zeilen 1–609 und
609–970 — Zeilenspanne protokolliert).
**Der Arbeitsbaum-Diff wurde auftragsgemäß NICHT gesichtet.**
**Prüfdatum:** 12.08.2026 (Mittwoch, per `Get-Date` erhoben).
**Prüfer:** unabhängige Prüfsession, kein Schreibrecht außer dieser Datei.

> **Status dieses Protokolls: ABGESCHLOSSEN** für die sechs beauftragten
> Kategorien. Zwei Prüfschritte sind ausdrücklich als **OFFEN**
> ausgewiesen (K5-O1, K4-O1) — sie sind nicht zu „keine Auffälligkeit"
> geglättet.

---

## Gelesen (mit Nennern)

| Quelle | Umfang | Wie gelesen |
|---|---|---|
| `handel/preismodell-optionen.md` @ `8f65e40` | 970 / 970 Zeilen | `git show` in Datei, zwei Leseläufe |
| `zentrale/ueberlegungen-pricing-betreibermodell-2026-08-10.md` | 106 / 106 Zeilen (A–D vollständig) | Volltext |
| `heypensio/blueprint/architektur-multi-kunden.md` | Kopf + alle vier zitierten Abschnitte | Volltext Z. 1–60 + gezielte Greps |
| `heypensio/protokolle/R38-CODEX-C-bericht.md` | Kopf, § 1, § 2.1/2.2, § 4.3, § 5.1, § 6.3, § 7 (K01–K14 vollständig) | Gliederung + gezielte Abschnitte |
| `heypensio/firzlaff/vapi-kostenanalyse-2026-07.md` | Kopf, § 1 (Datengrundlage), § 1.1–1.3, § 2 | Volltext der zitierten Teile |
| `marketing/fund/wettbewerbsbild.md` | §§ 4.5, B5.3, B6.1, B10.4, B11.5 + Änderungsprotokoll | gezielte Greps |
| `marketing/akquise/akquiseplan.md` | § 3.1 (Tabelle S0–S5 vollständig), § 9 (N-1…N-8) | gezielt |
| `marketing/fund/positionierungspapier.md` | §§ 3.1/3.2, 5, 6 | gezielt |
| `sensibel/rohbelege-R11-A/` | **138 / 138 Dateien gezählt**; **10 Dateien inhaltlich geöffnet** (Hetzner-Preis-JSON, Hetzner-VAT-JSON, Hetzner-Auswertung, Supabase-HTML + Supabase-Auswertung, Gegenprobe-Protokoll, Straiv-AGB-Text, Straiv-Upselling, FoxifAI, AngelStone, cStack, LeanFlow, Smartbetrieb, Prozessmeister — s. u.); **21 Straiv-Textdateien maschinell** durchsucht | eigene Node-Skripte + Grep |

**Eigene Messläufe (Zählwege im Protokoll an der jeweiligen Zahl):**
Hetzner-Preis-JSON selbst geparst · Supabase-Roh-HTML selbst entmarkupt
und im Kontext gelesen · Straiv-Negativbefund unabhängig reproduziert
(21 Dateien, eigenes Muster) · alle 12 Zellen der Break-even-Tabelle
nachgerechnet · Ordner-Summenprobe der Rohbelege · Wochentage per
`[datetime]::ParseExact`.

---

## Kategorie 1 — Belegstufen-Trennung verletzt

**Nenner: 5 Belegstufen (①–⑤) gegen 7 Trägerstellen geprüft**
(§ 2.1/A-Tabelle · § 2.2/B-Block · § 4.1 K1–K7 · § 4.2 B1–B3 · § 5.1–5.3
Bestandszitate · § 6.2 M1–M7 · § 7/§ 12 Verdichtung).
**Ergebnis: 3 Verletzungen (P-02 SCHWER, P-05b MITTEL, P-06 MITTEL),
dazu 1 Grenzfall (P-22 HINWEIS).**

Der beauftragte Fokus — der Übergang § 4/§ 6 → § 7/§ 12 — ist **an einer
Stelle sauber und an einer Stelle gebrochen**:

- **Sauber:** § 4.1 weigert sich ausdrücklich, die Kostenpositionen zu
  einer Zahl zu addieren, und markiert die Größenordnung „50–70 €"
  selbst als ④ auf ① Einzelposten. § 7.5 trägt den ④-Vermerk der
  Rechenbeispiele durchgängig mit („Rechengrößen, keine
  Preisvorschläge"). § 5.3 trennt vorbildlich zwischen „Bestand führt
  die Lizenzfrage als offen" (②) und „ein Kundenzugang kippt die Lage"
  (④). Das ist über dem Durchschnitt vergleichbarer Papiere.
- **Gebrochen (P-02):** Die **Bemessungs-Empfehlung in § 12 ist
  wortgleich Punkt 3 des Abschnitts B** des Rohstoff-Papiers — also eine
  ⑤ HYPOTHESE —, wird dort aber nur mit ②/③-Ankern begründet und trägt
  nirgends eine ⑤-Marke. § 2.2 behauptet zusätzlich, von B seien „**zwei**
  davon hier einschlägig"; einschlägig ist auch der dritte, und zwar als
  Antwort auf die Kernfrage F-II.
- **Gebrochen (P-06):** § 8(a) nennt die laufenden Systemkosten
  „**unsere belegten** laufenden Systemkosten (§ 4.1)" — § 4.1 selbst
  stuft dieselbe Zahl als **④ ANNAHME** ein. Beim Weiterverwenden
  eine Stufe hochgerutscht, in Richtung des eigenen Arguments.
- **Gebrochen (P-05b):** Der W6-Stundensatz trägt ③ (Selbstauskunft),
  ist aber eine **Division dieser Session** aus Monatspreis und
  Stundendeckel; die Quelle nennt keinen Stundensatz.

---

## Kategorie 2 — Was aus der Quelle nicht angekommen ist

**Rückwärts gelesen D → C → B → A. Nenner: 3 Routing-Posten (D) +
4 Bestandsposten (C) + 7 Hypothesen (B) + 5 User-Positionen (A) = 19
Posten einzeln geprüft.**
**Ergebnis: 12 angekommen · 3 ausdrücklich ausgeschlossen ·
**4 still verschwunden**.**

### Still verschwunden (einzeln benannt)

1. **D1: „Zahlungsbereitschaft Pilotumfeld"** — im Routing ausdrücklich
   Teil des MKT-HANDEL-Auftrags. Das Dokument behandelt das Fehlen als
   Negativbefund und **entschuldigt es mit einem falschen Grund**
   („Die Erhebung ist nie beauftragt worden"). → **P-04 SCHWER.**
2. **B-Punkt 3, Teilsatz „Hardware, Zahlungsgebühren, Fremdlizenzen
   separat und direkt beim Kunden"** — „Hardware" kommt in § 4.3 an,
   **„Zahlungsgebühren" und „Fremdlizenzen" kommen nirgends vor.**
   Negativ-Suche im Prüfling (Zählweg `grep -c -i`, Trefferzeilen):
   `Zahlungsgebühr` 0 · `Transaktionsgeb` 0 · `Payment` 0 ·
   `Fremdlizenz` 0. **Positivkontrolle im selben Lauf:** `Startgebühr`
   23 · `Hetzner` 12 · `Supabase` 6 · `Zimmer` 22 ✔ (die Suche
   funktioniert). Relevanz: Straiv führt in Ziff. 7.3 ausdrücklich
   transaktionsbasierte Vergütung, und die Frage „wer trägt die
   Zahlungsgebühren" gehört zu Z-5 (AVV-/Vertragsrollen).
   → **P-12 MITTEL.**
3. **B-Punkt 4 „Standard klar begrenzen, sonst zieht das Modell in
   individuelle Dauerarbeit"** samt der Zentrale-Einordnung zum
   Firmen-Grundsatz „Keine Lite-Varianten". Negativ-Suche: `Standard
   klar` 0 · `Leistungsumfang` 0 · `Lite-Variante` 0 (Positivkontrolle
   wie oben ✔); `Leistungskatalog` trifft 1× in § 8, aber als
   Voraussetzung der Modulfrage, nicht als Kostenrisiko. Relevanz:
   Unbegrenzter Leistungsumfang **plus** monatliche Kündbarkeit ist
   genau die Kombination, die Option (i) trägt oder killt — in § 7.1
   ist dieses Risiko nicht aufgeführt. → **P-12 MITTEL.**
4. **B-Punkt 6, die vier benannten Kontaktpunkte** (starkes Onboarding ·
   Strategie-Check-ins · Begleitung bei Änderungen · **klare
   Eskalation**). Sammelbegriff „persönliche Kontaktpunkte" kommt in
   § 4.2 an; `Eskalation` 0 Treffer. Als Kostentreiber pauschal
   angekommen, als Leistungsbestandteil nicht. → NIEDRIG, in P-12
   mitgeführt.

### Ausdrücklich ausgeschlossen (korrekt, sichtbar)

- **B-Punkt 2 (Preisrahmen ~1.500 €)** — § 2.2, mustergültig behandelt:
  genannt, begründet verworfen, nirgends als Anker verwendet
  (eigene Gegenprobe: „1.500" erscheint im Dokument nur in § 2.2 und
  als Spaltenkopf der Rechengrößen-Tabelle § 7.5).
- **A2/Modulfrage** — § 8 schließt sie sichtbar aus. ⚠️ Sie war
  allerdings Teil des Routing-Auftrags D1 („pro-Zimmer vs. Pauschale
  **je Modultyp**"); dass hier ein Auftragsteil vertagt wird, sagt das
  Dokument nicht. HINWEIS.
- **B-Punkt 7 (Übergabedoku-Inhalt, Passwörter in den Kundentresor)** —
  außerhalb des Papierzwecks; nicht in der „Nicht Teil dieser
  Vorlage"-Liste genannt. NIEDRIG.

### Angekommen und korrekt (12)

A1–A5 vollständig und getreu (A5-Zitat wörtlich geprüft ✔, der
Vermerk „Zitat zweiter Hand" ist sachlich richtig — die Session hat das
Transkript nicht gelesen) · B1 (nachgerechnet in § 7.5) · B5
(Standardisierung → § 7.1-Annahme) · C1 (Architektur-Weiche → § 5) ·
C2 (Übergabedoku als Verkaufsargument → A4-Zeile) · C3 (Pilot → § 2.3,
mit Einschränkung P-11) · C4 (StB-Relevanz → § 10, wörtlich zitiert ✔) ·
D2 (heyPensio-Abgleich → § 5 über den Codex-Bericht) · D3.

---

## Kategorie 3 — Entwarnung oder Zusage ohne Quelle im Satz

**Nenner: 14 Sätze mit Entwarnungs-/Behauptungscharakter identifiziert
und einzeln gegen ihre Quelle gehalten.**
**Ergebnis: 3 tragen keine Quelle bzw. eine widerlegte Quelle
(P-04 SCHWER, P-07 MITTEL, P-08 MITTEL), 11 sind belegt.**

- **P-04** — „**Die Erhebung ist nie beauftragt worden**" (§ 6.4). Eine
  Entlastung über die eigene Sorgfalt, ohne Quelle im Satz, und die
  naheliegende Quelle (Abschnitt D des Rohstoff-Papiers) sagt das
  Gegenteil. Das ist genau die Klasse „Entwarnung ohne Quelle" —
  und die Reparatur ist hier nicht Abschwächen, sondern **Streichen**.
- **P-07** — „**Der Marktführer unseres Feldes** bemisst nach
  ZIMMERZAHL" (§ 6.3.1). „Marktführer" ist unbelegt und steht
  im Widerspruch zum eigenen Bestand.
- **P-08** — „Einrichtungsgebühr ist in unserem Feld **Marktpraxis,
  nicht Zumutung**" (§ 6.3.1), gestützt auf Straiv Ziff. 7.2. Die
  Quelle sagt „**mögliche** einmalige Gebühren".

**Belegte Entwarnungen (Positivbefund, damit die Kategorie nicht als
Pauschalurteil gelesen wird):** § 4.1 K5/K6 „nicht erhoben, **nicht als
0 € behauptet**" ✔ · § 4.1 K3-alt-Warnung ✔ · § 4.1 Steuervermerk
Hetzner (als Ableitung ausgewiesen, nicht als Zitat — eigene Gegenprobe:
die Preisdatei enthält **0 Treffer** auf `vat|VAT|MwSt|net|gross|tax`,
die Ableitung ist damit korrekt gekennzeichnet) ✔ · § 5.4 „④ eigene
Rechnung, nicht gemessen" ✔ · § 6.3.2 Einschränkung 3 (W5-Schwäche
offengelegt statt weggelassen) ✔ · § 13 Punkt 7 („nicht beschafft, weil
Außenhandlung") ✔ · § 10 „Diese Vorlage erzeugt KEINEN neuen
StB-Pflichtposten" ✔ (Quelle im Absatz darüber wörtlich zitiert).

---

## Kategorie 4 — Vorbehaltsverlust beim Verdichten

**Nenner: 23 Zitat-/Referatstellen Satz für Satz gegen die Quelle
gehalten** (Architektur 5 · Codex 4 · Vapi 4 · Straiv-AGB 7 ·
Rohstoff-Papier 3).
**Ergebnis: 17 sauber · 5 mit Vorbehaltsverlust (P-08, P-09, P-10,
P-25, P-26) · 1 Grenzfall (P-22) · 1 OFFEN (K4-O1).**

### Geltungsbereich „Verworfene Alternativen" / Status „GEPARKTES MODUL"

**Vorbildlich behandelt.** § 5.2 nennt alle drei Vorbehalte ausdrücklich
und begründet, warum sie dort stehen (mit Verweis auf den früheren
R31-B-Prüferbefund). Zitat wörtlich geprüft — zeichengenau ✔. Der
Status „GEPARKTES MODUL" steht in § 5.1 im Zitatkontext ✔, ebenso das
Entscheidungsdatum 14.07.2026 ✔. **Keine Auffälligkeit.**

### Codex-Bericht (Ist-Aufnahme ohne Bewertung)

Der Vorbehalt „ausdrücklich eine **Ist-Aufnahme ohne Bewertung und ohne
Empfehlung**" ist übernommen ✔ (Quelle: „Einordnung: reine
Ist-Aufnahme. Keine Architektur-, Governance-, Vertrags-, Preis- oder
Geschäftsmodellentscheidung."). **Aber:** die Klassifikation von K04 ist
verkürzt → **P-10**. Und der Bericht relativiert sein eigenes
`/kunde-init`-Negativ („‚Kein gebauter Command gefunden' ist enger als
‚ein solcher Command existiert nirgends'"); § 4.2 des Prüflings schreibt
„`/kunde-init` **nicht existiert**", § 7.5 dagegen korrekt „keinen
**gebauten** `/kunde-init`". NIEDRIG, in P-10 mitgeführt.

### Vapi (Testprofil vs. Echtbetrieb, Währungsannahme)

- **Währungsannahme:** ✔ korrekt und wörtlich mitgeführt („0,90 €/$,
  kein Tageskurs geprüft"), an zwei Stellen.
- **Testprofil:** ✗ **P-09.** Das Dokument schreibt „gemessen an
  **62 echten Calls**". Die Quelle schreibt im selben Absatz: „**Alle
  Calls sind TEST-Läufe (Abnahmetest, E2E) — echte Gastgespräche können
  länger ausfallen**". Das Wort „echt" wandert von „echte Web-Calls"
  (Abgrenzung zu simulierten Daten) zu einer Aussage, die ein Leser des
  Preispapiers als Echtbetrieb liest.
- **Fehlender Größen-Scope:** ✗ **P-09.** Die 20–40 € sind die
  Hochrechnung für **23 Zimmer** bei 50–100 % Terminal-Anteil; die
  Spanne 10–80 € entsteht aus vier Auslastungsszenarien. Das Dokument
  führt K4 als „pro Monat **pro Haus**" in einer Zielgruppe, für die
  § 2.4 ausdrücklich **keine Zimmer-Obergrenze** setzt. Ein
  100-Zimmer-Haus trägt nach derselben Rechnung ein Vielfaches.

### OFFEN

- **K4-O1 (OFFEN, nicht geglättet):** Die Aussage in § 4.2 B1, der
  Bestand beschreibe den Onboarding-Vorgang qualitativ als manuell,
  stützt sich auch auf `blueprint/n8n-vorlagen/README.md:29-43`. Diese
  Datei habe ich **nicht selbst geöffnet** — geprüft ist nur das
  Referat des Codex-Berichts darüber. Der Prüfschritt „Primärquelle
  README gegen Referat" ist damit **nicht durchgeführt**.

---

## Kategorie 5 — Zahlen: Zählweg, Scope, Schlüssel

**Nenner: 61 Zahlen bzw. Zahlengruppen im Dokument identifiziert;
davon 44 am Rohbeleg oder an der Bestandsquelle selbst nachgeprüft,
12 abgeleitete Werte selbst nachgerechnet, 5 nicht prüfbar (OFFEN).**
**Ergebnis: 1 SCHWER (P-01), 1 SCHWER (P-03), 3 MITTEL (P-05, P-06,
P-09), 5 NIEDRIG/HINWEIS, der Rest stimmt.**

### Selbst nachgerechnet — alle richtig (12 / 12)

| Rechnung | Dokument | Eigene Rechnung |
|---|---|---|
| 8,49 + 0,50 | 8,99 € | 8,99 ✔ |
| 15,99 + 0,50 | 16,49 € | 16,49 ✔ |
| 8,99 × 1,19 | 10,70 € | 10,6981 → 10,70 ✔ |
| 8,99 ÷ 20 … ÷ 10 | ~0,45–0,90 € | 0,4495 / 0,8990 ✔ |
| Break-even 1 PT (1.040 €) | 3,1 / 1,4 / 0,7 | 3,1 / 1,4 / 0,7 ✔ |
| Break-even 3 PT (3.120 €) | 9,2 / 4,2 / 2,2 | 9,2 / 4,2 / 2,2 ✔ |
| Break-even 5 PT (5.200 €) | 15,3 / 7,0 / 3,6 | 15,3 / 7,0 / 3,6 ✔ |
| Break-even 10 PT (10.400 €) | 30,6 / 14,1 / 7,2 | 30,6 / 14,1 / 7,2 ✔ |

*(Zählweg: Node, `Aufwand ÷ (Monatspreis − 60)`, eine Nachkommastelle.
**Alle 12 Zellen der § 7.5-Tabelle** einzeln geprüft, nicht
stichprobenartig.)*

### Am Rohbeleg selbst nachgeprüft — richtig

- **Hetzner:** `CLOUD_133` DE (NBG1 **und** FSN1) = **8.49 EUR/M**,
  `CLOUD_134` = **15.99 EUR/M**, `CLOUD_21` = **0.50 EUR/M** — direkt
  aus `hetzner-live_data_prices.json` geparst ✔. Dateigröße
  **263.299 Bytes** ✔ (Dokumentangabe identisch). Auswertungsdatei:
  **25 Zeilen, 5 ohne Preis** ✔.
- **Hetzner-VAT:** DE 19 · AT 20 · CH 8,1 · „Alle anderen" 0 ✔ (alle
  vier Werte einzeln aus `live_data_vat.json`).
- **Rohbelege:** **138 Dateien** (`ls -1 | wc -l`) und **21.263.562
  Bytes** (`du -sb`) ✔ — beide Zahlen exakt. **Summenprobe der
  Aufteilung:** `agent1-*` = 63, `agent2-*` = 57, übrige = 18 →
  **63 + 57 + 18 = 138** ✔ **ohne Rest**. Das ist eine Kontrolle, die
  eine Unmöglichkeit hätte liefern können — sie tut es nicht.
- **Gegenprobe-Protokoll:** 18 Zeilen, „Proben: 18 | wie erwartet: 18 |
  abweichend: 0" ✔, zwei Gegenkontrollen mit 0 Treffern ✔, „130" traf
  **76×** ✔ — alle Angaben des Dokuments wörtlich zutreffend.
- **Straiv-Negativbefund unabhängig reproduziert** (eigenes Skript,
  eigener Suchraum): 21 Inhaltsseiten (22 `.txt`-Dateien minus
  `robots.txt` — die Aufzählung im Dokument summiert auf genau 21 ✔),
  Muster `[0-9][0-9.,]*\s?(€|EUR|Euro)` → **genau 2 Treffer**:
  „10,00 EUR" (AGB 7.4, Lastschriftrückgabe-Pauschale) und „1.000 €"
  (Upselling-Seite, behaupteter Mehrumsatz) — **beide keine
  Paketpreise** ✔ exakt wie beschrieben. Positivkontrolle B: „Straiv"
  in **21 von 21** ✔. href-Negativ: `pric|price|plan|cost|package` →
  **0 von 137** bzw. **0 von 134** hrefs ✔.
- **Marktanker gegengelesen:** M1 (781,67/925,07/996,77 für 20/40/50
  Zi., „Preise gültig ab 2026", **zzgl. MwSt.**) ✔ · M2 (79/109/139/169
  + 399/599/799/799, Steuerbasis unbekannt mit dokumentierter
  Positivkontrolle) ✔ · M6 („reale annäherungsweise Preisbeispiele",
  399/849/1.599, Einrichtungsgebühr unbekannter Höhe) ✔ · M7 (Mitte
  139–799 €/M bzw. 2–6 €/Zi/M, Ränder 49–799 bzw. 1,99–10, BE-A
  gesperrt) ✔ · W1 (1.920 € + ab 100 €, FAQ „Kann ich monatlich
  kündigen? **Nein.**") ✔ · W2 (490 / ab 300 / ab 49) ✔ · W4
  („Stundensatz **160 € netto**") ✔ · W5 (Testimonials wörtlich
  „Placeholder: …", „Max Mustermann", „Anna Beispiel") ✔ ·
  Prozessmeister-Fehlalarm („ab 1.490€/Monat" steht **nur** in
  `meta name="description"`, die Tariftabelle sagt 99/199/999) ✔ exakt
  bestätigt · agorax 228.232 Bytes HTML → 1.595 Bytes Text ✔ ·
  Straiv-AGB „Stand: 01.04.2025" + „Version: 1.1" ✔ · Straiv 7.4
  („Sämtliche Preise verstehen sich zuzüglich der gesetzlich gültigen
  Mehrwertsteuer") **zeichengenau** ✔ · Straiv 11.1/11.2 (3 Monate /
  4 Wochen) ✔ · Straiv 5 %-Kommission („ausschließlich auf tatsächlich
  über das System verkaufte Zusatzleistungen") ✔ · Wochentage 23.10. und
  13.11.2026 = **Freitag**, 14.08.2026 = **Freitag**, heute
  12.08. = Mittwoch → „in zwei Tagen" ✔.

### Falsch bzw. vom Schlüssel gelöst

- **P-01 (SCHWER) — Supabase-Scope „pro Projekt" ist widerlegt.**
- **P-03 (SCHWER) — „10 von 10 Anker": das genannte Auswahlkriterium
  trifft auf 4 von 10 zu; faktisch zählt der Satz sich selbst.**
- **P-05 (MITTEL) — 750 € ÷ 6 h = 125 €/h, nicht 130 €/h.**
- **P-06 (MITTEL) — „50–70 €/Kunde" trägt eine unbenannte
  Architektur-Annahme.**
- **P-09 (MITTEL) — Vapi 20–40 € ohne 23-Zimmer-Scope.**
- **P-15/P-16/P-19/P-20/P-21 (NIEDRIG) — Zählwege.**

### OFFEN (nicht geglättet)

- **K5-O1 (OFFEN):** Fünf Zahlengruppen konnte ich **nicht** prüfen,
  weil ihre Quelle außerhalb des mir zugänglichen Rohbeleg-Bestands
  liegt: die drei melevo-Website-Preisreihen M4 (95/145/275 und
  1.495/2.295/4.195 — nur „4.195" ist in der Gegenprobe belegt), die
  cStack-Einmalbeträge 1.980/4.050 und die LeanFlow-Einmalbeträge
  7.000/9.500/15.000. Sie stehen in den Rohbelegen, ich habe sie
  **nicht** einzeln geöffnet. **Nicht geprüft heißt nicht
  unauffällig.**

---

## Kategorie 6 — Sind Architektur-Weiche, Firmierungs-Vorbehalt und Pilot-Abgrenzung sichtbar geführt?

**Nenner: 3 von 3 geprüft, jeweils an vier Orten (Kopf-Kasten ·
eigener Abschnitt · Entscheidungspunkt · Weiterverwendung im Text).**

| | Kopf-Kasten | Eigener Abschnitt | Entscheidungspunkt | Konsequent angewandt? |
|---|---|---|---|---|
| **Architektur-Weiche** | ✔ „Nicht Teil dieser Vorlage" | ✔ § 5, Überschrift trägt „bleibt OFFEN" | ✔ E-3, mit ausformulierter Folge beider Antworten | ✗ **nein — P-06** |
| **Firmierungs-Vorbehalt** | ✔ Punkt 2, fett, ganz oben | ✔ § 9 (Sperrwirkung), § 13 | ✔ E-8 nennt ihn im Fragetext | ✔ ja |
| **Pilot-Abgrenzung** | ✔ „Nicht Teil dieser Vorlage" | ✔ § 2.3 mit Quelle | ✔ E-5 | ✗ **Reichweite überdehnt — P-11** |

**Ergebnis: alle drei sind dort geführt, wo der Leser ankommt — nicht in
Fußnoten.** Das ist ein echter Positivbefund und die Stärke des
Dokuments. **Zwei von drei sind aber nicht bis ins Rechenwerk
durchgezogen:** Die Architektur-Weiche wird in § 5 offen gehalten und in
§ 4.1 stillschweigend zugunsten von W-B geschlossen (P-06); die
Pilot-Abgrenzung wird auf ein drittes Objekt ausgedehnt, das keine der
zwei zitierten Quellen nennt (P-11).

### Zusatzprüfung: Kann ein Laien-Entscheider die 8 Punkte einzeln beantworten?

**7 von 8 ja, 1 mit Einschränkung.** E-1, E-2, E-3, E-5, E-7, E-8 sind
sauber als Ja/Nein/Auswahl gebaut; E-4 und E-6 sind korrekt als
konkrete Angabe-Anforderung formuliert („Name + Zieltermin", „Wer misst,
an welchem Vorgang, bis wann?") — nur der **Einleitungssatz** „Jeder
Punkt ist einzeln mit Ja / Nein / Änderung beantwortbar" gilt für diese
zwei nicht (P-23, HINWEIS).

**E-2 ist ohne eine ungestellte Vorfrage nicht beantwortbar (P-13):**
Der Entscheider soll wählen, ob der Preis pro Zimmer, je Haus oder
kombiniert hängt — aber nirgends steht, ob ein **Kunde mit drei
Objekten** einmal oder dreimal zahlt. Der eigene Pilot ist genau so ein
Fall, und der Codex-Bericht führt die Unschärfe ausdrücklich als
Kollision K11.

### Der Satz, der seine Antwort ändern würde — und fehlt (P-14)

Das Papier weiß selbst, dass seine Empfehlung an einer nicht erhobenen
Zahl hängt (§ 12: „Die Empfehlung steht also unter Vorbehalt einer Zahl,
die wir noch nicht haben") **und** dass die Preisentscheidung nicht der
Engpass ist (§ 9: „wer sie beschleunigt, um den Termin zu retten,
optimiert die falsche Stelle"). Beide Sätze zusammen ergeben die
Empfehlung: **E-1 kann auf E-6 warten, ohne den Terminpfad zu
gefährden.** Dieser Satz steht nirgends — im Gegenteil, „So läuft es
weiter" stellt E-1/E-2 **vor** E-6. Ein Entscheider, der die Reihenfolge
befolgt, entscheidet genau das, wovor § 12 warnt.

Zweitens: § 7.2 legt in einer **Annahmen-Zelle** fest, dass Option (ii)
eine **vierstellige** Einmalzahlung bedeutet (Marktanalogie
1.495–4.195 €). Bei E-1, wo der Entscheider ankreuzt, taucht diese
Größenordnung nicht auf — obwohl sie die Antwort ändern würde.

---

## Gesamtliste der Befunde

| ID | Schwere | Fundstelle | Sachverhalt |
|---|---|---|---|
| P-01 | **SCHWER** | § 4.1 K3 | Supabase-Scope „pro Projekt" widerlegt |
| P-02 | **SCHWER** | § 12 / § 2.2 / § 8 | ⑤-Hypothese wird unmarkiert zur Empfehlung |
| P-03 | **SCHWER** | § 7.1 / § 12 | „10 von 10" zählt sein eigenes Auswahlkriterium |
| P-04 | **SCHWER** | § 6.4 | Entlastung „nie beauftragt" — Quelle sagt Gegenteil |
| P-05 | MITTEL | § 4.2 B3 · § 6.3.2 · § 11 E-6 | 125 statt 130 €/h; Belegstufe ③ statt ④ |
| P-06 | MITTEL | § 4.1 · § 7.5 · § 8(a) | Kostenbasis setzt still W-B voraus; ④ → „belegt" |
| P-07 | MITTEL | § 6.3.1 · § 8(a) | „Marktführer" unbelegt; AGB trägt „pro Zimmer" nur bedingt |
| P-08 | MITTEL | § 6.3.1 | „mögliche Gebühren" → „existiert" → „Marktpraxis" |
| P-09 | MITTEL | § 4.1 K4 | „62 echte Calls" ohne Testlauf-Vorbehalt; 23-Zi-Scope fehlt |
| P-10 | MITTEL | § 5.3 | Codex K04: Bedingung und Klassifikation verkürzt |
| P-11 | MITTEL | § 2.3 · E-5 | Pilot-Kostenlosigkeit auf drittes Objekt ausgedehnt |
| P-12 | MITTEL | Kat. 2 | Zahlungsgebühren/Fremdlizenzen und Scope-Begrenzung verschwunden |
| P-13 | MITTEL | § 8 / E-2 | „je Kunde" ≠ je Objekt ≠ je Firma ist ungeklärt |
| P-14 | MITTEL | § 11 / § 12 | Entscheidungsreihenfolge widerspricht dem eigenen Vorbehalt |
| P-15 | NIEDRIG | § 4.4 Pkt. 4/5 | Zählweg reproduziert `CLOUD_21` nicht |
| P-16 | NIEDRIG | § 4.4 Pkt. 5(c) | 5 Nulltreffer, 3 belegt — Nenner fehlt |
| P-17 | NIEDRIG | § 6.3.2 W3/W4 | Untere Marktkante abgeschnitten (99 € / 50 €) |
| P-18 | NIEDRIG | § 9 | Terminpfad-Tabelle gibt S0–S3 statt S0–S5 |
| P-19 | NIEDRIG | § 6.3 | „vier Schlüsselstellen", drei benannt |
| P-20 | NIEDRIG | § 6.3.1 | Positivkontrolle „13× über 8 Dateien" nicht reproduzierbar |
| P-21 | NIEDRIG | § 6.3 | „die tragenden Zahlen" gegengeprüft — W2/W4 fehlen |
| P-22 | HINWEIS | § 5.1 | Paraphrase im Blockquote liest sich als Wortlaut |
| P-23 | HINWEIS | § 11 Einleitung | „Ja/Nein/Änderung" gilt für E-4/E-6 nicht |
| P-24 | HINWEIS | § 6.3.2 W5 | „§ 19 UStG" bei cStack ergänzt, Quelle sagt nur „Kleinunternehmerregelung" |
| P-25 | HINWEIS | § 6.3.1 | Straiv 7.7 ohne das Sonderkündigungsrecht des Kunden |
| P-26 | HINWEIS | § 6.3.1 | Straiv 4.3 ohne die Auslösebedingung der Anpassung |
| P-27 | HINWEIS | § 2.4 | Fundstelle „ebd. § 5" — Wortlaut steht in § 3.2 |
| P-28 | HINWEIS | § 2.2 / § 7.5 | Die verworfene ⑤-Zahl 1.500 € kehrt als oberste Rechengröße wieder |

---

### P-01 — SCHWER — § 4.1, Zeile K3 (und Folgewirkung § 4.1-Summe, § 7.5, § 8(a))

**Sachverhalt.** Das Dokument führt Supabase Pro als „**25,00 $** — pro
Monat **pro Projekt**", Belegstufe **① GEMESSEN**. Der archivierte
Rohbeleg sagt an der Preiskachel wörtlich das Gegenteil.

**Beleg** (eigene Extraktion aus
`sensibel/rohbelege-R11-A/supabase-pricing-2026-08-12.html`,
Skript-entmarkupt, Kontextfenster ±220 Zeichen):

> „Pro Most Popular For production applications with the power to scale.
> Get Started **From $ 25 / month First project included. Additional
> projects from $10/mo.** See how pricing scales"

und im Preisrechner derselben Seite:

> „Monthly estimate: Plan subscription **$ 25** Total Compute **$ 10**
> Compute Credits **− $ 10** Total **$ 25** Micro Project 1 $10 … **Add
> Project Starts from $10 /month**"

und in der Vergleichstabelle: „**then $10 per month per additional
projects**". Suche nach „per organization": **0 Treffer**; „per
project": 9 Treffer — sämtlich an **Feature-Limits** („8 GB disk size
per project", „500 MB database size per project included"), nie am
Preis. **Positivkontrolle im selben Lauf:** „Supabase" 12 Treffer ✔;
**Gegenkontrolle:** „Platinum" 0 Treffer ✔ (die Suche kann scheitern).

**Drei Fehler in einer Zeile:** (a) der Scope „pro Projekt" ist
widerlegt — das Zielbild „ein Supabase-Projekt pro Kunde" bedeutet für
Kunde 2..n rund **10 $**, nicht 25 $; (b) das „**From**" fehlt (25 $ ist
eine Untergrenze); (c) der Vermerk „inkl. 10 $/Monat Compute-Guthaben"
ist richtig zitiert, wird aber als Zusatzleistung gelesen statt als das,
was er ist — das Guthaben deckt **genau ein** Micro-Projekt, danach
kostet jedes weitere.

**Fortwirkung.** Die Größenordnung „rund 50–70 € pro Monat und Kunde"
(§ 4.1) fällt bei korrektem Ansatz auf rund **37–57 €** je Folgekunde;
der Deckungsbeitrags-Nenner „− 60 €" in § 7.5 und damit **alle 12 Zellen
der Break-even-Tabelle** verschieben sich; § 8(a) („ein 10-Zimmer-Haus
zahlt bei 5 €/Zi/M nur 50 €/Monat, also weniger als unsere belegten
laufenden Systemkosten") verliert seine Grundlage.

**Richtung.** Der Fehler setzt die eigene Kostenuntergrenze **zu hoch**
an — also in Richtung der eigenen Empfehlung (Startgebühr, höherer
Preis). Das ist die Richtung, in der Verdichtungsfehler systematisch
laufen.

**Ursachen-Diagnose (VERMUTUNG, nicht gemessen).** Die eigene
Auswertungsdatei `supabase-plaene-auswertung-2026-08-12.txt` extrahiert
ausschließlich **Dollar-Beträge mit Häufigkeit** („$10×16 $0.125×7 …")
— ohne Schlüsselspalte. Der Scope wurde damit gar nicht mit erhoben, und
das „per project" der benachbarten Feature-Zeile („8 GB disk size per
project") dürfte auf den Preis übertragen worden sein. Das ist exakt die
Klasse „Zahl an ihren Schlüssel binden" — und die Kontrolle in derselben
Datei prüfte die **Erreichbarkeit** der Quelle („Supabase: 25 Treffer"),
nicht die **Vollständigkeit** der Extraktion.

**Vorschlag.** K3 neu fassen: „Supabase Pro **ab 25,00 $/Monat je
Organisation, erstes Projekt inklusive; jedes weitere Projekt ab
10,00 $/Monat** (③ Preisseite, ① abgezogen 12.08.2026)". Danach die
Größenordnung in § 4.1, den Nenner in § 7.5 und den Satz in § 8(a)
nachziehen — und den Zusammenhang „ein Projekt je Kunde" ausdrücklich
mit der Architektur-Weiche verknüpfen.

---

### P-02 — SCHWER — § 12 (Bemessung), rückwirkend § 2.2 und § 8

**Sachverhalt.** § 2.2 erklärt, Abschnitt B des Rohstoff-Papiers seien
unbelegte Hypothesen, „**Nie Anker**", und nennt „**zwei** davon" als
hier einschlägig. Die Bemessungs-Empfehlung in § 12 ist jedoch der
**dritte** B-Punkt, nahezu wörtlich.

**Beleg.** Rohstoff-Papier, Abschnitt B, Punkt 3:

> „**Pro-Zimmer-Preis nur für gästenahe Module;** was nicht mit
> Zimmerzahl wächst → Fixpauschale je Haus + Grundgebühr
> Betreuung/Verantwortung; Hardware, Zahlungsgebühren, Fremdlizenzen
> separat und direkt beim Kunden."

Prüfling § 8(c): „Fester Sockel für Betreuung/Verantwortung +
Zimmerkomponente für **gästenahe** Module". Prüfling § 8(a): „ggf. nur
für **gästenahe** Module". Prüfling § 12: „**Zur Bemessung (E-2):
Option (c) — Grundgebühr + zimmerabhängiger Anteil.**" — begründet
ausschließlich mit M1 (②), Straiv (③) und M7 (②). Das Wort „gästenah"
kommt im Prüfling 2× vor (eigener Zählweg `grep -c -i`), beide Male ohne
Herkunftsangabe; ⑤ trägt keine dieser Stellen.

**Warum das zählt.** Die Belegstufen-Legende sagt zu ⑤: „**Nie Anker** —
erscheint hier nur als Prüfauftrag oder mit eigenem Beleg daneben." Für
B-Punkt 3 gilt beides nicht: Er ist weder als Prüfauftrag geführt noch
als Herkunft der Empfehlung genannt. Die eigenen Anker daneben sind echt
— aber ein Leser kann nicht sehen, dass die **Struktur** der Empfehlung
aus der externen KI stammt und dass die eigenen Anker sie *nachträglich*
stützen. Genau davor schützt die Legende.

**Ursachen-Diagnose (VERMUTUNG).** § 2.2 wurde früh geschrieben, § 12
spät; die Auswahl „zwei einschlägige B-Punkte" wurde beim Schreiben von
§ 8/§ 12 nicht rückwärts geprüft (Spiegelfall der Regel „vor dem
Einarbeiten einmal umgekehrt greppen").

**Vorschlag.** § 2.2 um B-Punkt 3 erweitern („drei davon sind
einschlägig") und in § 8(c) sowie § 12 einen Satz ergänzen: „Diese
Struktur schlägt auch der ChatGPT-Teil des Rohstoff-Papiers vor (⑤); die
Begründung hier stützt sich nicht darauf, sondern auf M1/M7/Straiv —
die Übereinstimmung ist ein Indiz, kein Beleg."

---

### P-03 — SCHWER — § 7.1 („Dagegen", Zählweg) und § 12 (Begründung 2)

**Sachverhalt.** Das Dokument stützt die Empfehlung auf den Satz:
„Von den 13 erhobenen Ankern liegen zu **10** (M2, M3, M4, M6, W1–W6)
Angaben zu Einmalzahlung **und** Laufzeit vor; **10 von 10** haben
mindestens eines von beidem." Das genannte Auswahlkriterium trifft nach
den **eigenen Tabellen des Dokuments** nur auf 4 dieser 10 zu.

**Beleg — aus dem Prüfling selbst** (§ 6.2 und § 6.3.2):

| Anker | Einmalzahlung | Laufzeit-Angabe im Dokument |
|---|---|---|
| M2 iiQ-Check | 399–799 € | **keine** (nur „Preisgarantie bis 5 Jahre") |
| M3 melevo Retainer | 0 € | 12 Monate ✔ |
| M4 melevo Website | 1.495–4.195 € | **keine** |
| M6 Smart Host | vorhanden, **Höhe unbekannt** | **keine** |
| W1 FoxifAI | 1.920 € | jährlich kündbar ✔ |
| W2 Smartbetrieb | 490 + ab 300 € | **„nicht genannt"** |
| W3 Prozessmeister | ab 490 / ab 1.990 € | **„nicht erhoben"** |
| W4 AngelStone | ab 3.000 / ab 10.000 € | jährlich kündbar ✔ |
| W5 cStack | 900/1.980/4.050 € | monatlich kündbar ✔ |
| W6 LeanFlow | 7.000/9.500/15.000 € | **„nicht genannt"** |

**4 von 10** tragen beide Angaben, **6 von 10** nicht. Bei M2 habe ich
das an der Bestandsquelle gegengeprüft (`wettbewerbsbild.md` B10.4 nennt
Tarife, Einrichtungsgebühr und Preisgarantie — **keine
Mindestlaufzeit**) ✔.

**Der eigentliche Fehler ist nicht die 6, sondern die Zirkularität.**
Nimmt man das Kriterium, das tatsächlich angewandt wurde — „hat eine
Einmalzahlung" —, dann lautet der Befund: „10 von 10 Ankern, die eine
Einmalzahlung haben, haben eine Einmalzahlung." Die Auswahl ist die
Aussage. Das ist eine Positivliste in Verkleidung.

**Verschärfend:** Ausgeschlossen wird unter anderem **M1** — der
einzige Anker des ganzen Papiers mit **vollständig veröffentlichter
Preisliste** (Summenprobe geht auf, Steuerbasis belegt) — und M1 weist
**keine** Einrichtungsgebühr aus. Eigene Gegenprobe über
`wettbewerbsbild.md`: kein Treffer auf `Aufnahmegebühr|Eintrittsgebühr`
im AKZENT-Kontext (Positivkontrolle „AKZENT" 25 Treffer ✔). Der
belastbarste Gegenfall fällt also durch das Raster.

**Fortwirkung.** § 12 Begründung 2 formuliert daraus „Der Markt deckt
seine Einführungskosten in unserem Nachbarfeld **durchgängig**" und
„**10 von 10 Ankern mit vollständiger Angabe**" — beides trägt die
Empfehlung für Option (ii).

**Vorschlag.** Zwei getrennte, ehrliche Zahlen ausweisen: „**10 von 13**
Ankern haben eine belegte Einmalzahlung (bei M6 nur dem Grunde nach);
zu **4 von 13** ist zusätzlich die Laufzeit belegt, davon binden 2." Und
M1 als ausdrücklichen Gegenfall nennen, statt ihn auszuschließen.

---

### P-04 — SCHWER — § 6.4 (und Folgewirkung E-7, § 13 Punkt 2)

**Sachverhalt.** „Das ist ein dokumentiertes Negativ, **kein Versäumnis
dieser Runde: Die Erhebung ist nie beauftragt worden.**"

**Beleg.** Rohstoff-Papier, Abschnitt D, Routing an MKT-HANDEL —
dieselbe Datei, die der Prüfling als seinen Rohstoff führt:

> „→ **MKT-HANDEL (Shanks, nächster Einstiegs-Auftrag):** … Auftrag
> dort: Preismodell-Optionen ausarbeiten … die ChatGPT-Zahlen als
> HYPOTHESEN behandeln und durch belegte Anker ersetzen
> (Wettbewerbspreise, **Zahlungsbereitschaft Pilotumfeld**,
> Kostenrechnung)."

Zwei der drei genannten Ersatz-Anker sind erhoben (Wettbewerbspreise
§ 6, Kostenrechnung § 4), der dritte nicht — und die Nichterhebung wird
mit einem Satz entschuldigt, den die zitierte Quelle widerlegt.

**Befund und Diagnose getrennt.** **Befund:** Der Entlastungssatz ist
unbelegt und steht im Widerspruch zur eigenen Quelle. **Diagnose
(VERMUTUNG):** Der Session-Prompt dieser Runde dürfte die
Zahlungsbereitschaft nicht enthalten haben; die Session verallgemeinert
den eigenen Prompt zu „nie beauftragt". Das wäre die Standardform des
Fehlers „Kanal-Negativ als Dauerzustand".

**Vorschlag.** Streichen statt abschwächen. Ersatz: „Erhoben ist sie
nicht. Das Routing des Rohstoff-Papiers (Abschnitt D) nennt sie
ausdrücklich als einen der drei Ersatz-Anker für die ChatGPT-Zahlen —
sie steht damit **aus** und ist mit E-7 nachzuholen." Das ändert E-7 vom
freundlichen Vorschlag zum überfälligen Posten.

---

### P-05 — MITTEL — § 4.2 (B3), § 6.3.2, § 11 (E-6)

**Sachverhalt (a) — Rechnung.** „W6 macht die Rechnung selbst auf
(150 € = 1 h, 390 € = 3 h, 750 € = 6 h → **130–150 €/h**)". 750 ÷ 6 =
**125**, nicht 130. Die drei impliziten Sätze sind **150 / 130 / 125**
€/h; das Band lautet **125–150 €/h**.

**Beleg** (`agent2-leanflow-preise.txt`, Z. 131/135–137/141–143):
„Monitoring und Kontrolle 1 mal pro Monat, **bis 1 Stunde** …" ·
„Service Standard **390 €/Monat** … **bis 3 Stunden** pro Monat" ·
„Service Premium **750 €/Monat** … **bis 6 Stunden** pro Monat".

**Sachverhalt (b) — Belegstufe.** LeanFlow „rechnet seine Stufen
**selbst** in Stunden um" trifft nicht zu: Die Quelle nennt Monatspreis
und Stundenzahl, den Quotienten bildet diese Session. Das ist **④**,
nicht ③.

**Sachverhalt (c) — Scope.** „bis 1/3/6 Stunden" ist ein **Deckel**. Der
Quotient ist damit die **Untergrenze** des effektiven Stundensatzes, kein
Stundensatz.

**Fortwirkung.** „**Drei unabhängige Quellen landen bei 130–160
€/Stunde**" wird zu 125–160; § 7.5 rechnet mit „130 €/h (**unterer Rand
des belegten Bands**)" — der untere Rand liegt bei 125; E-6 verkauft das
Band als das eine der zwei fehlenden Zahlen, die jetzt vorliege.

**Prüfmuster zuerst verdächtigt:** Ich habe geprüft, ob LeanFlow selbst
einen Stundensatz nennt (Volltextsuche im Rohtext) — nein. Die Division
ist die einzige Herleitung.

**Vorschlag.** „→ mindestens 125–150 €/h (④ eigene Rechnung aus
Monatspreis ÷ Stundendeckel; der Deckel macht den Wert zur Untergrenze)"
und das Gesamtband auf „**125–160 €/h**" korrigieren — an allen drei
Fundstellen.

---

### P-06 — MITTEL — § 4.1 (Summe), § 7.5, § 8(a)

**Sachverhalt.** § 4.1 setzt K1 = **8,99 €** (ein voller CX33) als
laufende Systemkosten **je Kunde** an. Das ist die Kostenstruktur der
Weichenstellung **W-B**. Unter dem heutigen Zielbild **W-A** rechnet das
Dokument in § 5.4 selbst mit **0,45–0,90 €/Kunde**. Die Größenordnung
„rund 50–70 € pro Monat und Kunde" nennt zwei Annahmen (Kurs 0,90 €/$,
Ein-Objekt-Haus) — **die Weichenstellung nennt sie nicht.**

**Beleg (eigene Rechnung).** W-B: 8,99 + 22,50 + 20…40 = **51,49–71,49 €**
→ passt exakt auf „50–70". W-A: 0,45…0,90 + 22,50 + 20…40 =
**42,95–63,40 €**. (Mit der P-01-Korrektur auf 10 $ Supabase weiter
nach unten.)

**Zweiter Teil des Befundes.** § 8(a) nennt dieselbe Zahl „unsere
**belegten** laufenden Systemkosten" — § 4.1 stuft sie als **④ ANNAHME**
ein. Belegstufen-Aufwertung beim Weiterverwenden.

**Warum das zählt.** § 5 verspricht ausdrücklich: „**Kein
Preisentscheid dieses Papiers setzt W-A oder W-B voraus.**" Die
Kostenuntergrenze — die Grundlage jedes Preisentscheids — tut es doch.

**Vorschlag.** In § 4.1 einen dritten Annahmensatz ergänzen („… und
einen eigenen Server je Kunde, also die Weichenstellung W-B; unter W-A
liegt die Größenordnung um rund 8 € niedriger, § 5.4") und in § 8(a)
„belegten" durch „angenommenen" ersetzen.

---

### P-07 — MITTEL — § 6.3.1 (Tabellenzeile „Preisschlüssel"), § 8(a), § 12

**Sachverhalt (a).** „**Der Marktführer unseres Feldes** bemisst nach
ZIMMERZAHL." Weder die AGB noch eine andere Quelle des Papiers belegen
eine Marktführerschaft. Der eigene Bestand hat eine gleichartige
Aussage bereits einmal kassiert:

**Beleg.** `fund/wettbewerbsbild.md`, Änderungsprotokoll 10.08.2026
(R07-A): „**„in aller Regel straiv" → 5 von 17, „De-facto-Standard"
gestrichen**" — nach Prüferbefund. Der Prüfling führt Straiv im
Fließtext korrekt als „der nächstliegende Technikwettbewerber" bzw.
„Haupt-Technikwettbewerber"; nur die Tabellenzelle steigert das zum
Marktführer. **Reproduktion einer bereits geschlossenen Fehlerklasse.**

**Sachverhalt (b).** Ziff. 4.3 belegt, dass die Zimmerzahl ein
**vertraglicher Vergütungsparameter** ist — nicht, dass der Preis
linear pro Zimmer läuft. Die Klausel liest sich sogar eher nach Stufen:

> „**Übersteigt die Anzahl der neu hinzugekommenen Zimmer die bis dahin
> gebuchte Zimmeranzahl**, so findet die Anpassung der Vergütung mit
> Wirkung zum darauffolgenden Monat statt bei gleichbleibender
> Mindestlaufzeit."

Eine Anpassung, die erst greift, wenn die *neuen* Zimmer die *bisherige*
Zahl übersteigen, ist mit einer Größen-**Staffel** (Bemessung b)
mindestens so gut vereinbar wie mit einem Pro-Zimmer-Preis
(Bemessung a). § 8(a) und § 12 verbuchen Straiv aber ausschließlich für
(a) bzw. (c).

**Vorschlag.** „Marktführer" streichen (der Fließtext hat bereits die
belegte Formulierung). In § 8 ergänzen: „Die AGB belegen die Zimmerzahl
als Vergütungsschlüssel; ob linear oder gestaffelt, ist aus ihnen
**nicht** ersichtlich — das Argument trägt für (a) und für (b) mit
Staffel gleichermaßen."

---

### P-08 — MITTEL — § 6.3.1 (Zeile „Einrichtungsgebühr")

**Sachverhalt.** Dokument: „Ziff. 7.2: Onboarding-/Einrichtungsgebühr
**existiert**, Höhe ‚in der aktuell gültigen Paketübersicht'" →
Schlussfolgerung: „Einrichtungsgebühr ist in unserem Feld
**Marktpraxis**, nicht Zumutung".

**Beleg** (`agent1-straiv-agb.txt` Z. 160, wörtlich): „Mit einem etwaig
vereinbarten Startdatum stellt Straiv dem Kunden **mögliche** einmalige
Gebühren für das Onboarding und die Einrichtung der Software in
Rechnung."

„mögliche" macht die Gebühr zu einer Option des Einzelvertrags, nicht zu
einem Bestandteil des Modells. Aus einer Kann-Regelung wird eine
Existenzaussage und daraus eine Marktpraxis-Behauptung — zwei
Verstärkungsschritte in einer Zelle.

**Vorschlag.** „Ziff. 7.2 sieht **mögliche** einmalige
Onboarding-/Einrichtungsgebühren vor; ob sie im Regelfall anfallen und in
welcher Höhe, ist nicht öffentlich." Die Marktpraxis-Aussage dann auf
M2/M4/W1–W6 stützen, nicht auf Straiv.

---

### P-09 — MITTEL — § 4.1 (K4)

**Sachverhalt (a).** „**② BESTAND** … Stand 28.07.2026 — gemessen an
**62 echten Calls**, hochgerechnet auf 23 Zimmer."

**Beleg** (`vapi-kostenanalyse-2026-07.md`, § 1 Datengrundlage,
wörtlich): „62 echte Web-Calls des checkin-Assistants, 14.–28.07.2026 …
**Alle Calls sind TEST-Läufe (Abnahmetest, E2E) — echte Gastgespräche
können länger ausfallen; dafür unten das Echtbetriebs-Profil als
gekennzeichnete Annahme.**"

Die Quelle hängt an ihre eigene „echt"-Formulierung sofort den
Vorbehalt; der Prüfling übernimmt das Wort und lässt den Vorbehalt weg.

**Sachverhalt (b) — fehlender Scope.** Die Spanne entsteht aus vier
Auslastungsszenarien für **ein 23-Zimmer-Haus** (Quelle § 1.3:
„50 % Auslastung, 50 % Terminal → 11–22 €" … „90 % / 100 % → 41–78 €"),
mit dem Zusatz „Terminal ersetzt nachts/außerhalb der Rezeptionszeiten,
**nicht jeden Check-in**". Der Prüfling führt K4 als „pro Monat **pro
Haus**" — in einer Zielgruppe, für die § 2.4 ausdrücklich keine
Zimmer-Obergrenze setzt und die bis „100+ Einheiten" tragen soll. Damit
ist die einzige größenabhängige Kostenposition des Papiers auf die
Pilot-Größe eingefroren, während § 8 mit der Größenspanne argumentiert.

**Vorschlag.** Scope in die Zelle: „**pro Monat und Haus der
Pilot-Größenklasse (23 Zimmer)**; die Position skaliert mit
Check-in-Zahl, für größere Häuser nicht erhoben". Und „62 echte Calls"
→ „62 gemessene Calls, sämtlich **Testläufe**; das Echtbetriebs-Profil
ist eine gekennzeichnete Annahme der Quelle".

---

### P-10 — MITTEL — § 5.3 (letzter Absatz)

**Sachverhalt.** „Der Bestand hält fest … (K03) und … (K04) — **beides**
klassifiziert der Bericht als **direkten Eigentums-/
Zugangswiderspruch**."

**Beleg** (`R38-CODEX-C-bericht.md` § 7, Tabellenzeilen):

- K03 → Ist-Klassifikation „**direkter Eigentums-/Zugangswiderspruch**"
- K04 → Ist-Klassifikation „**direkter Konten-/Vertragswiderspruch,
  sofern Vapi zur Eigentumsumgebung zählt**"

Zwei Verluste: die abweichende Klassifikation und — schwerer — die
**Bedingung**. Ob Vapi überhaupt zur Eigentumsumgebung gehört, ist
gerade der offene Punkt; das Dokument stellt die Kollision als
unbedingt dar.

**Nebenbefund gleicher Klasse.** § 4.2 (B1) schreibt, der Bestand halte
fest, „dass **`/kunde-init` nicht existiert**". Der Bericht selbst
schränkt ein: „„Kein gebauter Command gefunden" ist enger als „ein
solcher Command existiert nirgends"". § 7.5 formuliert es korrekt
(„keinen **gebauten** `/kunde-init`") — § 4.2 nicht.

**Vorschlag.** K04 mit seiner Bedingung und seiner eigenen
Klassifikation zitieren; in § 4.2 „gebaut" ergänzen.

---

### P-11 — MITTEL — § 2.3, Folgewirkung E-5

**Sachverhalt.** „**Pilotleistungen für Firzlaff's Neumünster, Rabe's
Kiel und Hostel Boninstraße sind kostenlos** (heyPensio-Entscheid R3;
Fundstelle `fund/positionierungspapier.md` § 5 …)" — **② BESTAND**.
Keine der beiden Quellen nennt drei Objekte.

**Beleg.**
- `fund/positionierungspapier.md` § 5 (wörtlich): „**Pilotleistungen
  sind kostenlos** (heyPensio-Entscheid R3, Quelle Extraktion B/F2.2):
  Referenz/Pilotstatus ist die Gegenleistung" — **ohne Objektnennung**.
  Das Zitat im Prüfling ist zeichengenau ✔, die Objektliste steht
  daneben, nicht im Zitat.
- Rohstoff-Papier, Abschnitt C: „R3-Entscheid — Pilotleistungen
  **NMS + Kiel** sind KOSTENLOS." — **zwei** Objekte.
- Eigene Gegenprobe über das ganze marketing-Repo
  (`grep -rin "Boninstra" --include="*.md"`, gefiltert auf
  `kostenlos|Pilotleistung`): **genau eine** Fundstelle —
  `handel/preismodell-optionen.md:130`. **Positivkontrolle:**
  „Boninstra" trifft 2× in `fund/positionierungspapier.md` ✔ (die Suche
  findet den Begriff also sehr wohl). Der Prüfling ist repoweit die
  **einzige** Stelle, die das dritte Objekt mit „kostenlos" verbindet.

**Warum das zählt.** Hostel Boninstraße läuft nach
`positionierungspapier.md` § 3.1 über eine **eigene Firmierung** (LEANE)
und ist nach dem Codex-Bericht das Objekt **ohne** angelegte
Apaleo-Property. E-5 bittet den Entscheider, die Abgrenzung zu
„bestätigen" — er bestätigte damit eine Kostenlosigkeit für eine dritte
Rechtsträgerin, die kein Entscheid deckt.

**Vorschlag.** Objektliste aus dem Satz herausnehmen oder als
④ markieren: „Der R3-Entscheid ist im Bestand für **NMS und Kiel**
belegt; ob er das dritte Pilotobjekt (Hostel Boninstraße, eigene
Firmierung) mit umfasst, ist **nicht belegt** — E-5 sollte das
mitentscheiden."

---

### P-12 — MITTEL — Kategorie 2 (zwei verschwundene Quellpunkte)

Sachverhalt, Beleg und Negativ-Suche mit Positivkontrolle: s. Kategorie 2,
Punkte 2 und 3. **Vorschlag:** In § 4.3 eine Zeile „Zahlungs-/
Transaktionsgebühren und Fremdlizenzen laufen beim Kunden — noch nicht
zugeordnet" ergänzen und in Z-5 aufnehmen; in § 7.1 „Dagegen" den
Scope-Punkt ergänzen („unbegrenzter Leistungsumfang plus monatliche
Kündbarkeit ist die teuerste Kombination — B-Punkt 4, ⑤"); und die
Zentrale-Einordnung zu „Keine Lite-Varianten" übernehmen, damit niemand
das Prinzip später gegen eine saubere Leistungsabgrenzung liest.

---

### P-13 — MITTEL — § 8 / E-2 (fehlende Vorfrage)

**Sachverhalt.** Weder § 8 noch E-2 klären, ob die Bemessung auf
**Kunde**, **Objekt** oder **Firmierung** zielt. Das Dokument nennt die
Doppeldeutigkeit einmal beiläufig („zwei Bezugsgrößen — je Kunde vs. je
Haus", § 4.1) und rechnet dann mit „Ein-Objekt-Haus".

**Beleg** (`R38-CODEX-C-bericht.md`):
- § 7, K11: „ein Kundenordner umfasst drei Objekte und im Entwurf drei
  Vertrags-/Firmierungskontexte | „**je Kunde**" ist als technische
  Zähleinheit **nicht gegen Objekt/Firma abgegrenzt** |
  Begriffs-/Schnittunklarheit"
- § 1: „Die Daten- und Laufzeitarchitektur ist … primär **kundenweit**,
  nicht durchgehend **objektweit**, geschnitten."
- § 5.1: drei Rolloutobjekte, drei Firmierungen.

Der eigene Pilot ist also genau der Fall, den E-2 nicht abbildet: Zahlt
ein Betreiber mit drei Häusern eine Grundgebühr oder drei? Bei
Bemessung (c) — der Empfehlung — entscheidet das den Preis um den
Faktor drei.

**Vorschlag.** E-2 um eine Vorfrage ergänzen: „**E-2a — Bezugseinheit:**
Gilt der Preis je **Kunde/Betreiber**, je **Objekt/Haus** oder je
**Firmierung**? (Der eigene Pilot ist ein Kunde mit drei Objekten in
drei Firmierungen — Codex-Bericht K11.)"

---

### P-14 — MITTEL — § 11 „So läuft es weiter" / § 12

Sachverhalt und Beleg: s. Kategorie 6, letzter Abschnitt.
**Vorschlag.** Zwei Sätze. Bei E-1: „**Diese Frage kann warten, bis E-6
beantwortet ist** — der Terminpfad wird ohnehin vom Namensentscheid
gesperrt (§ 9), nicht vom Preismodell." Und bei E-1 Option (ii) die
Größenordnung aus § 7.2 sichtbar machen: „(ii) bedeutet nach den
Marktanalogien dieses Papiers eine **vierstellige** Einmalzahlung."

---

### P-15 bis P-21 — NIEDRIG

- **P-15 — § 4.4 Punkt 4/5.** Der beschriebene Zählweg lautet „Preis für
  `countryCode: "de"`, `monthly.EUR`". `CLOUD_21` hat im JSON **keinen
  `countryCode`**: sein einziger Standort-Eintrag lautet
  `{"active":true,"datacenter":"ALL","prices":{"monthly":{"USD":"0.60",
  "EUR":"0.50"}}}` (eigene Extraktion). Unter dem beschriebenen Weg wäre
  `CLOUD_21` = `null`; die eigene Kontrolle (b) meldet 0,50 €. **Der
  Betrag stimmt** (selbst geprüft), aber der dokumentierte Zählweg
  beschreibt nicht, was das Skript getan hat — und die 0,50 € stecken in
  K1, in K2 und in allen 25 Matrix-Zeilen. *Vorschlag:* „…, für
  Produkte ohne Länderbindung der Eintrag `datacenter: "ALL"`".
- **P-16 — § 4.4 Punkt 5(c).** Fünf Nulltreffer werden mit „geprüft an
  `CLOUD_121`, `CLOUD_125`, `CLOUD_129`" erklärt — **3 von 5**, ohne
  Nenner. *Eigene Nachprüfung:* `CLOUD_123` und `CLOUD_127` sind
  ebenfalls `us/ASH1,us/HIL1` ✔ — **die Schlussfolgerung stimmt**, nur
  der Beleg war unvollständig. *Vorschlag:* Nenner ergänzen oder alle
  fünf nennen.
- **P-17 — § 6.3.2 W3/W4.** Prozessmeister hat **drei** Tarife
  („Startklar **99 €** … Durchstarter 199 € … Effizienzprofi 999 €",
  Rohbeleg Z. 466–500); W3 führt „199 € / 999 €". AngelStone hat **zwei**
  Care-Pakete („Wartung & Hosting **ab 50 € / Monat**" und „Wartung &
  Weiterentwicklung ab 500 € / Monat", Rohbeleg Z. 113/134); W4 führt
  „ab 500 €". Beide Auslassungen heben das Marktbild — in derselben
  Richtung, in der Einschränkung 2 desselben Abschnitts eine Verzerrung
  nach **unten** behauptet. *Vorschlag:* beide Tiefpunkte aufnehmen oder
  das Auswahlkriterium nennen.
- **P-18 — § 9.** Die Tabelle „② BESTAND, `akquise/akquiseplan.md`
  § 3.1" gibt **S0–S3** wieder; die Quelle hat **S0–S5**. **S4** („Liste
  + Pflichtbausteine gebaut, Brief produktionsfertig — Baustart
  spätestens **Fr 14.08.2026**") fehlt ganz, S5 nur im Fließtext. Eine
  Tabelle mit Quellenangabe erhebt einen stillen Vollständigkeitsanspruch.
  *Vorschlag:* S4/S5 aufnehmen oder „Auszug (S0–S3)" schreiben.
- **P-19 — § 6.3.** „Die **vier** Schlüsselstellen unten (Straiv AGB 4.3
  und 7.4, FoxifAI-Preissatz)" — drei benannt.
- **P-20 — § 6.3.1.** „Positivkontrolle A: Prozentwerte trafen **13×
  über 8 Dateien**" ist **nicht reproduzierbar** und nennt kein Muster.
  Eigene Läufe über dieselben 21 `.txt`-Dateien: `[0-9][0-9.,]*\s?%` →
  36/14 · `\d+ %` → **16/8** · `\d+%` → 18/9 · Zeilenzählung → 35/14.
  Die **Dateizahl 8** reproduziert unter einer Variante, die
  **Trefferzahl 13** unter keiner von vier. Sachlich unschädlich (die
  Kontrolle greift in jeder Variante), aber die Zahl ist ohne Zählweg
  nicht prüfbar. *Prüfmuster zuerst verdächtigt:* vier Varianten
  durchgespielt, bevor der Befund notiert wurde.
- **P-21 — § 6.3.** „**Die tragenden Zahlen** wurden … mechanisch gegen
  die Rohbelege gegengeprüft" ist ein Vollständigkeitsanspruch über eine
  Teilmenge: In den 18 Proben fehlen **W2** komplett und **W4** — obwohl
  W4s „160 €/h" eine der **drei** Säulen des B3-Bands ist. *Ich habe sie
  selbst nachgeholt:* „Stundensatz **160 € netto**" ✔ (Rohbeleg Z. 64
  und Z. 87–90). *Vorschlag:* „18 Proben über die Anker M3–M5, Straiv,
  W1, W3, W5, W6" — mit Nenner, statt „die tragenden Zahlen".

---

### P-22 bis P-28 — HINWEIS

- **P-22 — § 5.1.** Der Blockquote mischt echte Zitate mit einer
  Paraphrase („EIN Hetzner-Server + EIN Coolify für alle; eine
  n8n-Instanz PRO KUNDE; ein Supabase-Projekt pro Kunde; Vapi zentral").
  Alle **eingebetteten** Zitate habe ich zeichengenau bestätigt ✔ — aber
  ein Blockquote signalisiert Wortlaut für den ganzen Block.
- **P-23 — § 11 Einleitung.** „Jeder Punkt ist einzeln mit Ja / Nein /
  Änderung beantwortbar" gilt für E-4 und E-6 nicht (die Punkte selbst
  sind richtig als Angabe-Anforderung gebaut).
- **P-24 — § 6.3.2 W5.** Steuerbasis „Kleinunternehmer (**§ 19 UStG**)";
  die Quelle (`agent2-imp-cstack-itrk.txt` Z. 9) sagt nur
  „Umsatzsteuerbefreit (Kleinunternehmerregelung)". Bei W6 steht
  „§ 19 UStG" wörtlich in der Quelle ✔ — die Norm ist von dort auf W5
  mitgewandert. Klasse: quellenübergreifend ergänzte Fußnote.
- **P-25 — § 6.3.1, Zeile „Preisanpassung".** Ziff. 7.7 koppelt das
  Erhöhungsrecht an ein **Sonderkündigungsrecht des Kunden binnen sechs
  Wochen** („Der Kunde hat bei einer Anpassung der Vergütung das Recht,
  den jeweiligen Einzelauftrag innerhalb einer Frist von sechs Wochen …
  zu kündigen"). Genau dieser Gegenpol ist es, den Z-4 sucht („damit sie
  nicht als einseitiges Preisanpassungsrecht gelesen wird") — im Referat
  fehlt er.
- **P-26 — § 6.3.1, Zeile „Preisschlüssel".** Auslösebedingung der
  Anpassung weggefallen; s. P-07(b).
- **P-27 — § 2.4.** „Pilot-Größenklasse … 10–25 Einheiten je Objekt
  (**ebd. § 5**)" — der Wortlaut „Pilot: 10–25 Einheiten je Objekt"
  steht in **§ 3.2**; § 5 nennt 23 / ~25 / 10–11 Einheiten. Die Zahl ist
  richtig, die Fundstelle um einen Abschnitt verschoben.
- **P-28 — § 2.2 / § 7.5.** § 2.2 sagt zur verworfenen ⑤-Zahl: „Sie
  steht hier **genau einmal** — an dieser Stelle." Formal zutreffend
  (eigene Gegenprobe: „1.500" erscheint in § 2.2 und einmal in § 7.5).
  Aber **1.500 €/Monat** ist zugleich die oberste Spalte der einzigen
  quantifizierten Tabelle des Papiers. Ein Leser verbindet beides. Die
  Disclaimer-Zeile darunter („Rechengrößen, keine Preisvorschläge") ist
  vorhanden ✔ — ein anderer Wert (z. B. 1.200 €) würde die Kopplung
  vermeiden.

---

## Zusatzfrage 1 — Welche Verfälschung hätte mein Verfahren NICHT gefangen?

Fünf benannte Blindstellen, nicht eine allgemeine Demutsformel:

1. **Eine falsche Zahl in den fünf Positionen, die ich nicht geöffnet
   habe** (K5-O1: melevo-Website 95/145/275 und 1.495/2.295, cStack
   1.980/4.050, LeanFlow 7.000/9.500/15.000). Diese Werte tragen die
   Aussage „Marktanalogie für vierstellige Einmalzahlungen" in § 7.2 —
   wäre einer davon um eine Größenordnung falsch, hätte ich es nicht
   bemerkt. Ich habe sie als **OFFEN** ausgewiesen, nicht als geprüft.
2. **Eine Verfälschung im Roh-HTML selbst.** Mein gesamter Zahlenteil
   misst den Prüfling gegen die **archivierten Abzüge**. Wäre ein Abzug
   unvollständig gezogen worden (abgeschnittene Seite, clientseitig
   nachgeladener Tarifblock), zeigte sich das nirgends — ich hätte
   „stimmt am Rohbeleg" gemeldet. Der Prüfling weist diese Grenze für
   W3 sogar selbst aus („nicht erhoben, clientseitig nachgeladen"), und
   genau dieser Kanal ist bei **Prozessmeisters drittem Tarif** relevant
   (P-17). **Kein Abzug meiner Prüfung ist eine Aussage über die Website
   von heute.**
3. **Eine falsche Verdichtung aus einer Quelle, die das Dokument gar
   nicht nennt.** Mein Kategorie-4-Durchgang ging vom Zitat zur Quelle.
   Hätte die Session einen Satz aus einem *ungenannten* Dokument
   übernommen und ihm eine plausible Fundstelle gegeben, wäre das nur
   aufgefallen, wenn ich die genannte Fundstelle gelesen hätte — was ich
   bei 23 von 23 getan habe, aber ohne Gegenrichtung („welche Aussagen
   dieses Papiers gehören zu KEINER genannten Quelle?"). Diese
   Rückwärtssuche habe ich **nicht** durchgeführt.
4. **Eine sachlich falsche, aber intern konsistente Rechnung.** Ich habe
   alle 12 Break-even-Zellen nachgerechnet — gegen die **Formel des
   Dokuments**. Wäre die Formel selbst falsch (z. B. wenn ein
   Deckungsbeitrag korrekterweise auch anteilige Betreuungszeit abziehen
   müsste), hätten alle 12 Zellen weiter „gestimmt". Meine Prüfung ist
   an dieser Stelle ein Drift-Check zwischen Erzeugtem und Erzeugtem.
5. **Die Straiv-Preishöhe.** Ich habe das Negativ reproduziert („keine
   Preise veröffentlicht") — aber ein Negativ über 21 archivierte Seiten
   ist kein Negativ über die Website. Der Prüfling sagt das in § 13
   Punkt 10 selbst; ich kann es nur bestätigen, nicht verschärfen.

## Zusatzfrage 2 — Hätte ich die Funde auch ohne die Kategorien-Hinweise gefunden?

**Ehrliche Antwort: teils ja, teils nein — und die Verteilung ist
aufschlussreich.**

**Hätte ich ohne Hinweis gefunden (weil sie beim schlichten Nachrechnen
am Rohbeleg auffallen):** P-01 (Supabase-Scope — ich wollte ohnehin
jede Zahl am Beleg sehen, und der Satz „First project included"
springt an), P-05 (750 ÷ 6 = 125 — reines Nachrechnen), P-15/P-16
(fielen beim Reproduzieren des Zählwegs an), P-17, P-19, P-20, P-21,
P-24 bis P-27. Das sind **überwiegend die NIEDRIG- und HINWEIS-Befunde
plus die zwei schweren Zahlenfehler** — sie brauchen keine Theorie,
nur Zeit am Beleg.

**Hätte ich ohne Hinweis wahrscheinlich NICHT gefunden:**

- **P-02** (⑤ wird zur Empfehlung) — ich hätte § 12 gegen § 6 geprüft,
  wo die Anker sauber sind, und wäre zufrieden gewesen. Erst der
  Kategorie-1-Hinweis „achte auf den Übergang nach § 12" hat mich
  gezwungen, die Empfehlung **rückwärts gegen den Rohstoff** zu lesen.
- **P-04** (falsche Entlastung) — nur die Anweisung, Abschnitt A–D
  **rückwärts von D** zu lesen, hat mich überhaupt in das Routing
  schauen lassen. Vorwärts gelesen hört ein Leser nach A–C auf; D wirkt
  wie Verwaltungstext. **Das ist die stärkste einzelne Wirkung des
  Auftrags.**
- **P-03** (Zirkularität der „10 von 10") — ich hätte die Zahl
  nachgezählt (sie stimmt: 10 Anker, 13 gesamt) und abgehakt. Erst der
  Hinweis „Zahl von ihrem Schlüssel gelöst" hat mich das **Kriterium**
  statt der Zahl prüfen lassen.
- **P-06** und **P-13** — beide sind keine Fehler *in* einem Satz,
  sondern Widersprüche zwischen zwei Abschnitten, die je für sich
  richtig aussehen. Der Kategorie-6-Auftrag („ist die Weiche wirklich
  durchgezogen?") hat sie erzeugt.
- **P-14** (der fehlende Satz) — das ist ausschließlich der
  Entscheider-Perspektive des Auftrags zu verdanken.

**Schlussfolgerung für die Methode:** Die Kategorien haben nicht die
*Zahlen*-Befunde produziert, sondern die *Struktur*-Befunde — und genau
die sind hier die schwereren. Ein Prüfer ohne diese Vorgaben hätte
vermutlich P-01 und P-05 gemeldet, die Vorlage als „rechnerisch sauber"
eingestuft und P-02/P-03/P-04 stehen lassen. Umgekehrt gilt: Die
Kategorien haben mich auch **gelenkt** — meine unter Zusatzfrage 1
Punkt 3 genannte Rückwärtssuche („welche Aussage gehört zu keiner
Quelle?") stand in keiner Kategorie und ist deshalb ausgefallen.

---

## Gesamteinschätzung

**4 SCHWER · 10 MITTEL · 7 NIEDRIG · 7 HINWEIS · 2 OFFEN.**

Das Papier ist methodisch **deutlich über dem Durchschnitt**: Die
Belegstufen-Legende wird über weite Strecken wirklich angewandt, die
Negativbefunde tragen Suchraum und Positivkontrolle (das
Straiv-Negativ habe ich unabhängig **exakt** reproduziert), die
Rohbeleg-Zahlen sind vollständig nachzählbar (138 Dateien, 21.263.562
Bytes, Aufteilung 63 + 57 + 18 — Summenprobe **ohne Rest**), die
Hetzner-Zählwegkette ist vorbildlich transparent, zwei
eigene Fehlalarme sind protokolliert statt geglättet, und die drei
Grundvorbehalte stehen dort, wo der Leser ankommt.

Die vier schweren Befunde liegen alle an derselben Stelle: **dort, wo
das Papier von der Erhebung zur Aussage übergeht.** Ein falscher Scope
(P-01), eine unmarkierte Herkunft (P-02), ein selbstbestätigender
Zählweg (P-03) und eine unbelegte Entlastung (P-04) — jeder für sich
klein, alle vier in dieselbe Richtung: zugunsten der eigenen
Empfehlung. **Keiner betrifft die Erhebung, alle vier die Verdichtung.**

**Was vor einer Entscheidervorlage repariert sein muss:** P-01
(Kostenbasis stimmt sonst nicht), P-03 und P-04 (tragen die Empfehlung
bzw. entlasten falsch), P-11 und P-13 (der Entscheider würde sonst bei
E-5 und E-2 etwas beantworten, das die Vorlage nicht sauber gestellt
hat), P-14 (die Reihenfolge der Entscheidungspunkte arbeitet gegen den
eigenen Vorbehalt). P-02, P-05 bis P-10 sind Textreparaturen von je
wenigen Zeilen.
