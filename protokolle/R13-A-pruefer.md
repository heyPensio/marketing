# R13-A — Unabhängige Prüfung (frischer Kontext) der Einarbeitung des Entscheide-Protokolls 2

**Prüfer:** unabhängige Session mit frischem Kontext, ohne Kenntnis des
R13-A-Arbeitsverlaufs
**Datum:** 13.08.2026
**Prüfstand (eingefroren):** Commit **`d90edb3`**
(„R13-A: Entscheide-Protokoll 2 eingearbeitet (S4 + AA-1..AA-8) …")
**Vorher-Stand für den Vergleich:** `d90edb3~1` (= `989e632`)
**Prüfgegenstand:** `handel/angebotsarchitektur.md` ·
`handel/preisliste-vorlaeufig.md`, je in der Fassung `d90edb3`

⚠️ **Leseweg:** ausschließlich `git show <hash>:<pfad>` — der
Arbeitsbaum wurde nicht gelesen, `git diff` gegen den Arbeitsbaum
bewusst NICHT ausgeführt (parallele Session R13-B). Alle Aussagen
gelten für die Fassung `d90edb3` und für keinen späteren Stand.

---

## 1. Gelesene Quellen (mit Positivkontrolle je Suchlauf)

| Quelle | Umfang | Positivkontrolle / Ergebnis |
|---|---|---|
| `d90edb3:handel/angebotsarchitektur.md` | **vollständig**, 1133 Z. | — (Volltext) |
| `d90edb3:handel/preisliste-vorlaeufig.md` | **vollständig**, 849 Z. | — (Volltext) |
| `d90edb3~1:` beide Dateien | **vollständig**, 628 / 652 Z. | — (Volltext) |
| `git diff --numstat d90edb3~1 d90edb3` | vollständig | 516/11 (AA) · 198/1 (PL) — **alle 12 Löschungen einzeln im Kontext gelesen** |
| `zentrale\briefings\briefing-2026-08-13.md` | **vollständig**, 423 Z. (nicht nur Nachtrag 4) | — (Volltext); gelesen: Entscheide-Protokoll 1 (E-1…E-8), Terminposten, Marketing-Lagebild, Prompts, Nachtrag 2, Nachtrag 3, Nachtrag 4 |
| `zentrale\stb-termin-fragenliste-2026-08.md`, Frage 13 (a)–(f) + „Nach dem Termin" | vollständig für Frage 13 | Suchlauf `-i "Z-3\|Z-4"`: **Kontrollbegriff „Z-4" trifft (Z. 197)** → der Nulltreffer für „Z-3" ist ein Sachbefund, kein Werkzeugbefund |
| `d90edb3:handel/preismodell-optionen.md` | **gezielt**: § 8 A2-Hinweis, § 10 vollständig inkl. 🟢-Nachtrag, § 11 E-2/E-2a/E-3-Kopf | Suchlauf „Höhe des Rabatts\|Prozentsatz oder Staffel\|Modulfrage (A2)": **alle drei treffen** (Z. 1330/1330/1336) |
| `d90edb3:fund/positionierungspapier.md` | **gezielt**: § 6-Kopf, Reifegrad-Zeilen, Formulierungs-Leitplanke | Suchlauf „concierge\|telefonassistent\|aftersales": **alle drei treffen** (Z. 322/304/340) → Reifegrad-Abgleich belastbar |
| `d90edb3:protokolle/R13-A-selbstwiderspruchsprobe.md` | vollständig (Selbstauskunft der geprüften Session, als solche gewertet) | — |

**Weitere Positivkontrollen:**
- Suchlauf `-i "vier Vorbehalte\|bitte zuerst lesen"` über **beide**
  Preislisten-Fassungen: Kontrollbegriff „vier Vorbehalte" trifft in
  **beiden** Dateien (alt Z. 3 · neu Z. 25/682) → der Nulltreffer für
  die **Überschrift** in der neuen Fassung ist ein Sachbefund (P-02).
- Suchlauf `-i "übergeben"`: 12 Treffer (AA) / 5 Treffer (PL) → Muster
  lebt in beiden Dateien.
- Suchlauf `"P-B"`: 19 Treffer (AA) / 1 Treffer (PL) → Muster lebt.
- **Gegenkontrolle (musste 0 ergeben):** `-i "AA-9\|Lesart C\|Option
  P-D"` → **0/0** in beiden Dateien ✔ (die Suche kann also scheitern).
- Alle Textsuchen liefen **case-insensitiv** (`-i`), außer der
  strukturellen Tabellenzeilen-Extraktion `^| \*\*☐ AA-` (Anker ist die
  Zeilenform, nicht ein Wort).

---

## 2. Lauf-Status — was vollständig lief und was NICHT

**Vollständig durchlaufen:**
1. Volltext-Lesung beider Prüfgegenstände in `d90edb3`.
2. Volltext-Lesung des Briefings (423 Z.) — Prüfraum, nicht nur der
   Einstieg „Nachtrag 4".
3. Vollständiger Vorher-/Nachher-Vergleich über `git diff` **zwischen
   den Commits** inkl. Einzelsichtung **aller 12 gelöschten Zeilen**.
4. Punkt-für-Punkt-Abgleich der 9 Entscheide (S4 + AA-1…AA-8) gegen den
   Protokollwortlaut.
5. Rückwärtsprüfung vom Protokoll ins Dokument (Kategorie 2), inkl. der
   sechs benannten Begründungen/Vorbehalte.
6. Frage 13 der StB-Fragenliste am Original.

**NICHT vollständig durchlaufen (offene Prüfschritte, ausdrücklich
nicht zu „keine Auffälligkeit" geglättet):**
- **`preismodell-optionen.md` wurde NICHT am Stück gelesen** (>1400 Z.).
  Geprüft sind § 8-A2-Hinweis, § 10 und § 11 E-2/E-2a. **§ 4.2 (B1/B2/B3)
  und § 11 E-1 habe ich nur über die Zitate im Prüfgegenstand geprüft,
  nicht am Volltext** — Zitattreue dieser Stellen ist damit **nicht
  erhoben**, nicht „unauffällig".
- **`fund/positionierungspapier.md` § 6 wurde nur gezielt gegrept**, nicht
  am Stück gelesen. Die **Vollzähligkeit** der Leistungstabelle in
  Angebotsarchitektur § 3 gegen § 6 ist damit **nicht geprüft** (sie ist
  auch nicht Gegenstand dieser Runde — die Tabelle wurde nicht geändert).
- **Rohbelege** (`sensibel/rohbelege-R12-A/`, git-ignoriert) wurden
  **nicht** eingesehen; die Zählwege der 15 Einzelwerte in Preisliste
  § 5.3 sind **nicht nachgerechnet** (nicht Gegenstand dieser Runde, aber
  offen).
- **Die Belegstufe selbst ist NICHT PRÜFBAR.** Alle neun Entscheide
  tragen „Briefing-Dialog, Dropdown + Freitext, **sinngemäß — Wortlaut
  nicht archiviert**". Ich konnte ausschließlich gegen das
  **Briefing-Protokoll** messen, nicht gegen die Erhebung. Eine
  Abweichung zwischen User-Äußerung und Protokoll wäre für mich
  **strukturell unsichtbar** (s. Zusatzfrage 1).
- **Arbeitsbaum-Diff bewusst nicht angesehen** (Auftragsvorgabe). Ob
  nach `d90edb3` weitergearbeitet wurde, ist von hier aus **nicht
  feststellbar**.

---

## 3. Befunde je Pflicht-Kategorie

### Kategorie 1 — Weicht ein ✅-Vermerk vom Protokoll ab? (Nenner 9)

Abgeglichen wurden alle neun Punkte einzeln gegen Briefing
„📮 Nachtrag 4 (13.08. nachmittags) — AN SHANKS: Entscheide-Protokoll 2".

| Punkt | Protokoll (Kern) | Dokument | Ergebnis |
|---|---|---|---|
| **S4-Klärfrage** | „Startgebühr je HAUS (konsistent zu E-2a; die ④-Ableitung der Preisliste ist damit ENTSCHIEDEN, nicht mehr abgeleitet)" | PL § 3-Nachtrag Pkt. 1 · PL § 5-Nachtrag Pkt. 1 · AA § 5 ✅-AA-8 · AA § 7 | **deckungsgleich** |
| **AA-1** | „Lesart A: Rabatt-Zuordnung je BETREIBER … Folge laut Dokument: Verbund-Definition … erledigt, s. Frage 13 (f)" | AA § 2 ✅-Kasten · PL § 4-Nachtrag | **deckungsgleich** |
| **AA-2** | „P-B (Basis + Module) als ZIELBILD, endgültige Festlegung erst nach E-7" | AA § 4 ✅-Kasten · PL § 6-Nachtrag | **deckungsgleich** |
| **AA-3** | „Auch GEPLANTE / in Entwicklung befindliche Module dürfen angeboten werden … Leitplanke bleibt bindend" | AA § 4 ✅-Kasten · AA § 3-Nachtrag | **deckungsgleich** (Randfrage ausgewiesen, s. Kat. 7) |
| **AA-4** | „OFFEN — User hat Kayhan gefragt, Antwort steht aus" | AA § 4 ⬜-Kasten | **deckungsgleich** |
| **AA-5** | „Rabatt ab dem 2. Haus" | AA § 5 ✅-Kasten · PL § 4-Nachtrag | **deckungsgleich** |
| **AA-6** | „fester Prozentsatz (Staffel bleibt spätere Option — Wechsel vor dem ersten Bestandskunden frei, danach Z-4-Fall)" | AA § 5 ✅-Kasten · PL § 4-Nachtrag | **Entscheid deckungsgleich — Kasten trägt zwei überschießende Zusätze** (**P-01**, **P-05**) |
| **AA-7** | „ohne Deckel; Prüfposten nach der E-6-Messung" | AA § 5 ✅-Kasten · PL § 4-Nachtrag | **deckungsgleich** (Zeiger-Zelle in § 7: **P-10**) |
| **AA-8** | „JA … ab dem 2. Haus desselben Betreibers. Bewusst GEGEN die Session-Empfehlung (unternehmerische Abwägung …); Höhe beider Rabatte bleibt bis E-6 Hypothese" | AA § 5 ✅-Kasten · PL § 3-/§ 5-Nachtrag | **deckungsgleich** |

**Ergebnis: 9 von 9 Entscheid-KERNEN korrekt übernommen; 0 verfälscht.
Bei 1 von 9 (AA-6) trägt der ✅-Kasten Zusätze, die das Protokoll nicht
deckt** — einen sachlich falschen (P-01) und einen neu erfundenen
Terminanker (P-05). Kein Entscheid wurde abgeschwächt, keiner erweitert,
keiner erfunden.

### Kategorie 2 — Was aus dem Protokoll ist gar nicht angekommen? (vom Protokoll rückwärts)

Ich habe **das Protokoll zeilenweise abgearbeitet** und für jeden
Bestandteil die Ankunftsstelle gesucht (nicht umgekehrt).

**Entscheide: 9 von 9 angekommen.**
**Ausdrücklich mitgeprüfte Begründungen/Vorbehalte: 6 von 6 angekommen —**

| Protokoll-Bestandteil | Ankunftsstelle |
|---|---|
| „Bewusst GEGEN die Session-Empfehlung" (AA-8) | AA § 5 ✅-AA-8 (⭐-Absatz) **und** PL § 3-Nachtrag Pkt. 2 |
| „unternehmerische Abwägung: Mehrhaus-Abschluss wiegt hier schwerer als maximale Erstjahres-Liquidität" (AA-8) | AA § 5 ✅-AA-8 · PL § 3-Nachtrag Pkt. 2 · PL § 5-Nachtrag Pkt. 3 |
| E-7-Vorbehalt (AA-2) | AA Kopf-Nachtrag · AA § 4 ✅-AA-2 · AA § 7-Tabelle · PL § 6-Nachtrag — **an allen vier P-B-Nennungen mitgeführt** |
| Reifegrad-Leitplanke (AA-3) | AA § 4 ✅-AA-3 · AA § 3-Nachtrag („NICHT geändert — die Leitplanke darüber") |
| Wechselfenster / Z-4-Klausel (AA-6) | AA § 5 ✅-AA-6 · AA § 7-Tabelle · AA § 7-Nachtrag Pkt. 4 · PL § 4-Nachtrag |
| Prüfposten nach E-6 (AA-7) | AA § 5 ✅-AA-7 · AA § 7-Tabelle · PL § 4-Nachtrag |

**Ebenfalls angekommen (über Nachtrag 4 hinaus, aus dem weiteren
Briefing-Leseraum):** Nachtrag 3 Pkt. 1 (Z-5/K04 im E-4-Bündel → AA § 6-
und § 7-Nachtrag, PL § 6-Nachtrag) · Nachtrag 3 Pkt. 2 (E-6 je Objekt
getrennt → AA § 7-Nachtrag) · Nachtrag 3 Pkt. 3 (Termin-Anker erbeten,
nicht gesetzt → AA § 5 ✅-AA-7 und § 7-Nachtrag) · „Offene
User-Entscheide: Startgebühr-HÖHE (nach MKT-Schätzung + E-6)" (beide
Dokumente).

**Nicht angekommen — eine Richtung:** Der Nachzieh-Bedarf **in die
Quelle** ist nur zur Hälfte gemeldet (**P-08**). Kein Protokoll-Inhalt
fehlt im Dokument.

### Kategorie 3 — Wirkt eine Hypothese wie ein Beleg?

**Rabatt-Höhen: keine Auffälligkeit.** Alle vier Rabatt-Kästen und beide
Übersichtstabellen führen die Höhe konsequent als F-III/„bis E-6
Hypothese"; **kein Prozentsatz, kein Staffelwert, kein Deckelbetrag ist
irgendwo genannt**; für den S4-Rabatt wurde bewusst **kein** Platzhalter
erfunden und dieser Verzicht begründet (PL § 3-Nachtrag Pkt. 3). Das ist
die richtige Behandlung.

**Startgebühr-Spanne: die Spanne selbst ist unangetastet** — 1.500–2.500 €
bleibt ④, alle vier Vorbehalte, der ⑤-Offenlegungskasten und der
unbequeme Befund (399–799 €) werden im Nachtrag ausdrücklich als
fortgeltend benannt. **Zwei Befunde im neu geschriebenen Text:**
**P-06** (Mengenaussage ohne Zählweg, von der eigenen Scope-Spalte nicht
gedeckt) und **P-07** (plausibler eigener Beispielbetrag „unsere
2.000 €" in einem Preisdokument, dessen eigene Regel genau das verbietet).

### Kategorie 4 — Vorbehaltsverlust (5 Vorbehalte einzeln geprüft)

| Vorbehalt | Ergebnis |
|---|---|
| **Firmierungs-Vorbehalt** | **gehalten** — AA Kopf-Nachtrag nennt ihn ausdrücklich als unverändert, PL Kopf-Nachtrag ebenso; beide Nachträge enden auf „Status bleibt ENTWURF"/„weiterhin VORLÄUFIG und INTERN". ⚠️ Strukturell geschwächt durch **P-02** (die Überschrift, die zum Lesen des Vorbehaltskastens auffordert, ist gelöscht) |
| **Z-6 / Architektur** | **gehalten** — beide Kopf-Nachträge und AA § 6-Nachtrag führen Z-6 als unverändert ungeklärt, Träger E-4, ohne Kalendertermin |
| **„Höhe erst nach E-6"** | **gehalten** — in jedem der sieben ✅-Kästen als eigener Absatz („Was NICHT mitentschieden ist"), zusätzlich in beiden Kopf-Nachträgen und beiden Übersichtstabellen |
| **AA-4 offen** | **gehalten** — eigener ⬜-Kasten, ☐ unangetastet, drei „offen — AA-4"-Zeilen der § 3-Tabelle ausdrücklich nicht vorsorglich zugeordnet, „kein Zeitanker" benannt |
| **K04 / Vertragspartner** | **teilweise** — in der Angebotsarchitektur vollständig gehalten (Kopf-Nachtrag nennt „Z-6-/K04-Vorbehalt (3)", § 6-Nachtrag führt K04 als ungeklärt). **In der Preisliste nennt der neue Kopf-Nachtrag nur Z-6, nicht K04** — obwohl § 2 derselben Datei die Gleichrangigkeit ausdrücklich festgestellt hat (**P-16**) |

### Kategorie 5 — Stille Neufassung statt markiertem Nachtrag?

**Gesamtzahl der Löschungen im Commit: 12** (11 in der
Angebotsarchitektur, 1 in der Preisliste) gegen 714 eingefügte Zeilen.
Alle 12 einzeln gesichtet:

| Datei | Löschungen | Was |
|---|---|---|
| `preisliste-vorlaeufig.md` | **1** | **Die Kopfkasten-Überschrift** „⚠️ Status und vier Vorbehalte (bitte zuerst lesen)" → **P-02** |
| `angebotsarchitektur.md` | **11** | § 7-Tabellenkopf (2 Z.) + 8 AA-Zeilen, ersetzt durch dieselbe Tabelle mit zusätzlicher Spalte „Stand"; 1 Satzzeile in § 1, die um einen 📌-Zusatz erweitert wurde |

**Die beiden ausdrücklich benannten Prüfstellen sind SAUBER:**
- **(a) S4-Einordnungs-Kasten Preisliste § 3 (P-18):** wortgleich
  erhalten, Nachtrag steht **darunter** — verifiziert über die
  Löschungszählung (die einzige PL-Löschung ist die Kopfüberschrift).
- **(b) AA-8-Empfehlungspassagen Angebotsarchitektur § 5:** wortgleich
  erhalten (0 Löschungen im gesamten § 5), einschließlich des Satzes
  „später entscheiden", gegen den entschieden wurde. Der ✅-Kasten sagt
  das ausdrücklich und hält es ein. **Vorbildlich.**

**Ein Rest:** In der neuen § 7-Tabelle wurde die AA-1-Vorbedingungszelle
über die sichtbare Durchstreichung hinaus umformuliert (**P-13**),
während der Nachtrag darüber „kein Punkt wurde still umgeschrieben"
behauptet.

### Kategorie 6 — Widerspruch in einem oder zwischen beiden Dokumenten

| Befund | Art |
|---|---|
| **P-01** | Neu geschriebener ✅-AA-6-Kasten sagt „Z-4 … **nicht übergeben**"; derselbe Commit sagt an drei Stellen das Gegenteil (AA Kopf-Nachtrag (b), AA § 7-Nachtrag, PL § 6-Nachtrag: „Z-4 (b)"). **Der Parallel-Nachtrag der Preisliste (§ 4) trägt den Zusatz nicht** → die beiden Dokumente sagen zu AA-6 dasselbe **verschieden** |
| **P-03** | AA Kopf-Nachtrag behauptet, **genau zwei** Formulierungen seien überholt; eine dritte (§ 2, Lesart-A-Zelle „Konsequenz Terminpfad") trägt den überholten Übergabestand ohne Vorwärtsverweis |
| **P-04** | Derselbe Vorgang (Lesen der StB-Fragenliste am 13.08.) trägt in einem Commit **zwei verschiedene Belegstufen**: ② (AA § 2) gegen ① (AA § 7, PL § 4, PL § 6) |
| **P-08** | Die Quelle `preismodell-optionen.md` § 11 (✅-E-2) sagt weiterhin „Höhe des Rabatts (**Prozentsatz oder Staffel**) ist offen" — durch AA-6 überholt; beide Ableitungen tragen eine Vorrangklausel zugunsten der Quelle, die den Entscheid für jeden Leser wieder umkehrt |
| **P-16** | Kopf-Vorbehalte der beiden Dokumente laufen bei K04 auseinander |

**Geprüft und in Ordnung:** Alle vom Prüfgegenstand selbst gemeldeten
Selbstwiderspruchs-Stellen (SW-1…SW-4 der
`R13-A-selbstwiderspruchsprobe.md`) sind im Dokument tatsächlich
geschlossen; ich habe jede einzeln am Text nachgelesen. Ebenso in
Ordnung: die ④-Ableitung „nicht auf S2 / nicht auf § 2-Zeilen" ist in
**beiden** Dokumenten mit identischer Belegstufe und identischer
Begründung geführt („Protokoll schweigt dazu"), die drei AA-8-Randfragen
sind in beiden Dokumenten wortgleich in der Sache, und der
Zielbild-Vorbehalt zu P-B wandert an **allen** vier P-B-Nennungen mit.

### Kategorie 7 — AA-3-Optionszuordnung: deckt der Vermerk nur, was das Protokoll trägt?

**Keine Über-Zuordnung.** Die Zuordnungstabelle im ✅-AA-3-Kasten misst
die drei ☐-Optionen einzeln:
- „nur gebaut/E2E-belegt" → **nein** (korrekt: das Protokoll sagt „auch …").
- „plus ‚in Arbeit' mit Kennzeichnung" → **ja** (korrekt: „in Entwicklung
  befindlich" deckt „in Arbeit"; die Kennzeichnungspflicht steht im
  Protokoll selbst).
- „plus geparkte Module als ‚auf Anfrage'" → **„nicht gedeckt — und
  nicht ausdrücklich verworfen"** (korrekt und ehrlich: das Protokoll
  sagt zu geparkten Modulen nichts).

**Die Unschärfe ist ausgewiesen, nicht zugedeckt** — mit drei
gegenläufigen Befunden (Freitext-Konjunktion · Schrägstrich der
Kopfzeile · gebündelte § 3-Zeile) und der ausdrücklichen Feststellung
„Das ist die vorsichtige, nicht die entschiedene Lesart — die Randfrage
gehört dem User vorgelegt". Die Reifegrade, auf die sich der Nachtrag
stützt, habe ich am Positionierungspapier § 6 gegengeprüft: „Mobiler
Concierge … — in Arbeit" (Z. 322), „KI-Telefonassistent … vorgemerkt
(fonio.ai), nicht [gebaut]" (Z. 304), „Aftersales-Versand — Konzept
vorhanden (C2), nicht gebaut" (Z. 340) — **alle drei Zitate treffen**.

**Ein Rest in der Gegenrichtung (P-14):** Die gewählte vorsichtige
Lesart setzt den Katalog **enger**, als der Protokollwortlaut ihn zieht
(„auch GEPLANTE … dürfen angeboten werden"), und die Randfrage hat
keinen Wiedervorlage-Ort — dieselbe Lücke, die die Session bei AA-4
selbst benennt („wer AA-4 braucht, muss ihn setzen"), bleibt hier
unbenannt.

---

## 4. Befunde im Einzelnen

### P-01 — schwer — Falsche Bestandsaussage im neu geschriebenen ✅-AA-6-Kasten

**Fundstelle:** `handel/angebotsarchitektur.md`, § 5, ✅-Kasten
„AA-6 ENTSCHIEDEN — fester Prozentsatz", Absatz „⚠️ Ausdrücklich
mitentschieden ist das Wechsel-FENSTER".

**Wortlaut:** „… danach ist er ein **Z-4-Fall** (Preisänderung im
laufenden Vertrag, `preismodell-optionen.md` § 10; **Z-4 liegt bei der
Zentrale/StB und ist nicht übergeben**)."

**Gemessen gegen:** `zentrale\stb-termin-fragenliste-2026-08.md`,
Frage 13: „(b) **Z-4 Preisänderung im laufenden Vertrag** — die in E-1
ausdrücklich mitentschiedene spätere Verschiebung … IST eine solche
Preisänderung, sobald sie den ersten Bestandskunden trifft".

**Warum schwer — drei Ebenen:**
1. **Die Aussage ist falsch.** Z-4 steht seit dem 13.08. als Frage 13 (b)
   in der StB-Fragenliste. Dieselbe Session stellt das an drei anderen
   Stellen selbst fest (AA Kopf-Nachtrag „(b) die Aussage … sie ist
   **teilübergeben**"; AA § 7-Nachtrag „**Z-2 (a) · Z-4 (b) · Z-1 (c) ·
   Z-7 (d)**"; PL § 6-Nachtrag ebenso). Der Kasten widerspricht dem
   eigenen Kopf-Nachtrag desselben Dokuments.
2. **Die genannte Fundstelle trägt die Aussage nicht.** In
   `preismodell-optionen.md` § 10 (🟢-Nachtrag 13.08.) steht zu Z-4:
   „**Z-3 … und Z-4 … hängen an den nicht gewählten Optionen (iii)/(iv)
   und sind damit vorerst nachrangig — nicht erledigt, aber ohne
   Auslöser**". „Nicht übergeben" sagt die Quelle nur über **Z-1, Z-5,
   Z-7**. Aussage und Fundstelle sind **beide** falsch.
3. **Das Wort ist im Dokument belegt.** Beide Dokumente unterscheiden
   durchgehend „übergeben" (= Zulieferung erfolgt) von „beantwortet" —
   „übergeben ist nicht beantwortet" steht dreimal wörtlich da. Ein
   „nicht übergeben" ist also nicht als „unbeantwortet" lesbar.

**Wirkung:** Der Satz begründet die praktische Dringlichkeit des
Wechselfensters mit einer nicht existierenden Lücke in der
Zentrale-Zulieferung. Wer ihn liest, setzt einen Zulieferungs-Posten neu
an, der bereits läuft.

**Gegenprobe:** Der **inhaltsgleiche** Nachtrag der Preisliste (§ 4,
Zeile „Prozent oder Staffel?") formuliert denselben Entscheid **ohne**
diesen Zusatz und ist damit richtig — der Fehler sitzt nur in der
Angebotsarchitektur.

### P-02 — mittel — Gelöschte Kopfkasten-Überschrift der Preisliste; der Nachtrag behauptet das Gegenteil

**Fundstelle:** `handel/preisliste-vorlaeufig.md`, Kopf.

**Befund:** Die **einzige** Löschung der ganzen Datei (1 von 199
geänderten Zeilen) ist die Überschrift
`> ## ⚠️ Status und vier Vorbehalte (bitte zuerst lesen)`. Sie wurde
durch `> ## 📌 NACHTRAG 13.08.2026 nachmittags (R13-A) …` **ersetzt**
und nicht darunter wiederhergestellt.

**Folgen:**
- Die Punkte **1.–4.** und der Abschnitt **„Nicht Teil dieser Datei"**
  hängen jetzt im selben Blockquote **unter der NACHTRAG-Überschrift**.
  Der Leser kann nicht mehr erkennen, wo der Nachtrag endet und der
  Kopfkasten vom Vormittag beginnt.
- Die **Leseanweisung** „bitte zuerst lesen" ist ersatzlos entfallen.
- Zwei Stellen verweisen weiter auf einen so nicht mehr benannten Kasten:
  „die **vier Vorbehalte unten**" (Kopf-Nachtrag) und „**Alle vier
  Vorbehalte oben** gelten unverändert" (§ 5-Nachtrag).
- **Der Nachtrag behauptet im selben Absatz das Gegenteil:** „*(Markierter
  Nachtrag an der Stelle, an der der Leser ankommt. **Der Kopfkasten
  darunter bleibt unverändert stehen** — er beschreibt den Stand vom
  Vormittag.)*" Das ist eine Aussage über die eigene Änderung, die die
  Änderung nicht deckt.

**Positivkontrolle:** Suchlauf `-i "vier Vorbehalte\|bitte zuerst lesen"`
über beide Fassungen — Kontrollbegriff trifft in beiden Dateien; nur die
Überschrift fehlt in der neuen. Werkzeugfehler ausgeschlossen.

**Gegenprobe:** Die Angebotsarchitektur macht es an derselben Stelle
richtig — dort steht der neue Kasten **über** dem unverändert
erhaltenen `> ## ⚠️ Status und Vorbehalte (bitte zuerst lesen)`.

### P-03 — mittel — „Nur diese beiden Formulierungen sind überholt" ist ein Vollständigkeitsanspruch, der nicht hält

**Fundstelle:** `handel/angebotsarchitektur.md`, Kopf-Nachtrag, Absatz
„**Nur diese beiden Formulierungen unten sind überholt:**".

**Befund:** Genannt sind (a) „nichts entschieden" in Punkt 1 und (b)
„Z-1…Z-7 bislang nicht übergeben" im Kasten „Nicht Teil dieses
Dokuments". **Eine dritte Stelle trägt denselben überholten Stand ohne
Vorwärtsverweis:** § 2, Lesart-A-Tabelle, Zeile „Konsequenz Terminpfad":
„Braucht die Z-1-Definition VOR dem ersten Angebot mit Rabatt — die
**Zentrale-Zulieferung (bisher nicht übergeben)** wird dringlicher."
Z-1 ist seit dem 13.08. Frage 13 **(c)**, die Verbund-Definition Frage 13
**(f)** — beides stellt derselbe Commit fest.

**Warum das zählt:** Die Zeile steht in der Tabelle der **gewählten**
Lesart und beschreibt deren Terminfolge; der ✅-Kasten darunter sagt
für denselben Sachverhalt „**bereits ERLEDIGT**". Das Wort „Nur" macht
aus einer unvollständigen Liste eine Vollständigkeitsaussage — genau die
Klasse, gegen die das Dokument an anderer Stelle selbst warnt („eine
Referenz-Tabelle, die nur einen Teil trägt, liest sich als vollständige
Wiedergabe").

### P-04 — mittel — Derselbe Lesevorgang trägt in einem Commit zwei Belegstufen

**Fundstellen:** ② in `angebotsarchitektur.md` § 2, ✅-AA-1-Kasten
(„② BESTAND, gelesen 13.08.2026 durch R13-A"). ① in
`angebotsarchitektur.md` § 7-Nachtrag, in `preisliste-vorlaeufig.md`
§ 4-Nachtrag und in `preisliste-vorlaeufig.md` § 6-Nachtrag (je „① selbst
gelesen 13.08.2026").

**Gemessen gegen:** die Belegstufen-Legende **beider** Dokumente:
① = „An der Primärquelle selbst erhoben, Zählweg an der Zahl";
② = „Aus einem **eigenen, geprüften Repo-Dokument** übernommen — mit
Fundstelle und dem Stand SEINES Datums". Die StB-Fragenliste ist ein
Repo-Dokument des Nachbar-Repos → **②**. Dreimal ist die höhere Stufe
vergeben.

**Klasse:** Der **Leseweg** („selbst gelesen") wird als **Quellenart**
notiert — die zweiachsige Führung, die der Baustein
`quellen-beschaffung` verlangt, ist hier zusammengefallen. Belegstufe ist
angehoben, nicht abgeleitet.

### P-05 — mittel — Neu erfundener Terminanker in einem ✅-Entscheid-Kasten

**Fundstelle:** `handel/angebotsarchitektur.md`, § 5, ✅-AA-6-Kasten.

**Wortlaut:** „Praktische Folge: Wer die Staffel je will, entscheidet sie
**vor dem ersten Abschluss** — nicht ‚irgendwann später'. **Der
November-Anker (erster zahlender Kunde) ist damit zugleich die Frist
dieses Fensters.**"

**Gemessen gegen:** Protokoll AA-6: „(Staffel bleibt spätere Option —
Wechsel vor dem ersten Bestandskunden frei, danach Z-4-Fall)." Mehr sagt
das Protokoll nicht.

**Warum Befund:** Der November-Anker ist ein **Ziel**, kein Zeitpunkt, zu
dem der erste Bestandskunde feststeht (Briefing, Terminposten:
„Fr 13.11. November-Anker erster zahlender Kunde
(**Rückwärtsrechnung** MKT R08-A)"; CLAUDE.md: „erster zahlender Kunde
**bis** Mitte November"). Wird das Ziel verfehlt, bleibt das Fenster
länger offen; wird es übertroffen, schließt es früher. Die Gleichsetzung
„November-Anker = Frist" ist eine **④-Folgerung dieser Session**, steht
aber ohne Belegstufe, in Fettschrift, in einem Kasten, der ansonsten nur
User-Entscheide führt.

**Zweiter, kleinerer Teil desselben Befunds:** „⚠️ **Ausdrücklich
mitentschieden** ist das Wechsel-FENSTER" hebt eine Protokoll-Klammer
zum ausdrücklichen Mitentscheid des Users. Ob der Klammerinhalt
User-Äußerung oder Anmerkung der Briefing-Session ist, ist am Protokoll
**nicht unterscheidbar** — „ausdrücklich mitentschieden" behauptet mehr,
als die Quelle hergibt.

### P-06 — mittel — Mengenaussage ohne Zählweg, von der eigenen Scope-Spalte nicht gedeckt

**Fundstelle:** `handel/preisliste-vorlaeufig.md`, § 5-Nachtrag, Punkt 2.

**Wortlaut:** „Die Marktanker der Tabelle § 5.1 sind **ganz überwiegend
je Kunde/Projekt** erhoben, **nicht je Objekt** …"

**Gemessen an der eigenen Tabelle § 5.1, Spalte „Scope":**

| ausdrücklich je Projekt/Kunde | ausdrücklich objektbezogen | ohne Bezugsangabe |
|---|---|---|
| W1 („Preis hängt von Anzahl und Komplexität der Workflows ab") · **W4** · **W6** (beide „Projektbau") | **M4** „je Website" · **M3** „je Haus" | W2 („je einzelnem Workflow") · W3 · W5 · M2 („zimmerunabhängig") · M6 · Straiv · M1 |

**Befund:** „Ganz überwiegend" ist eine Mengenaussage **ohne Zählweg**.
Ausdrücklich je Projekt sind **drei von zwölf** Zeilen — und **zwei
davon (W4, W6) gehören zur Klasse B, die § 5.2 aus der Kernmenge
ausschließt**. Zwei Zeilen sagen ausdrücklich das Gegenteil. Der Rest
sagt nichts. Die Aussage ist **unbelegt**; sie ist Prämisse des
nachfolgenden ×n-Arguments.

Die Richtung ist **nicht** eigennützig (das Argument spricht gegen die
eigene Spanne) — die Klasse ist es trotzdem: eine Bestandsaussage über
die eigene Tabelle, die die Tabelle nicht trägt, und die ④-Marke steht
nur an der **Folgerung**, nicht an der **Prämisse**.

### P-07 — mittel — Plausibler eigener Beispielbetrag in einem Dokument, dessen eigene Regel ihn verbietet

**Fundstelle:** `handel/preisliste-vorlaeufig.md`, § 5-Nachtrag, Punkt 2.

**Wortlaut:** „… **ein Vergleich ‚unsere 2.000 € gegen deren 1.920 €'**
ist für einen Drei-Haus-Interessenten also nicht der Vergleich, den er
anstellt."

**Gemessen gegen die eigene Regel derselben Datei (§ 3):** „**Die
Platzhalter sind absichtlich sprechend und nicht befüllt.** Ein plausibel
aussehender Beispielbetrag in dieser Tabelle würde beim nächsten
Weiterverwenden als Preis gelesen — genau der Weg, auf dem in diesem
Projekt schon einmal eine unbelegte Zahl zum Anker wurde."

**Befund:** „Unsere 2.000 €" ist der **erste konkrete eigene
Preisbetrag** in der Datei. Er steht zwar in Anführungszeichen und im
Konjunktiv eines Gesprächsbeispiels, trägt aber **keine ④-Marke an der
Zahl selbst** (das ④ steht am Satzende und bezieht sich auf die
Einordnung), er liegt genau in der Mitte der Arbeitshypothese und ist
damit zitierfähig plausibel. Die Regel ist an eine Tabelle adressiert —
die Gefahr, vor der sie warnt, ist im Fließtext dieselbe.

### P-08 — mittel — Nachzieh-Bedarf in der Quelle nur zur Hälfte gemeldet (Vorrangklausel kehrt den Entscheid um)

**Fundstellen:** `handel/angebotsarchitektur.md` § 7-Nachtrag und
`handel/preisliste-vorlaeufig.md` § 6-Nachtrag melden **einen**
Nebenbefund an die Leitsession: den Z-1…Z-7-Übergabestand in
`preismodell-optionen.md` § 10.

**Nicht gemeldet:** `preismodell-optionen.md` § 11, ✅-Kasten zu E-2:
„**Die Höhe des Rabatts (Prozentsatz oder Staffel) ist offen.** Das
Entscheide-Protokoll schweigt dazu; es ist damit **kein** Vorschlag
dieser Session, sondern ein offener Punkt."

**Warum das zählt:** **AA-6 hat die Form entschieden** („fester
Prozentsatz"). Die Quelle führt die Form weiterhin unter „offen" — und
**beide** Prüfgegenstände tragen eine ausdrückliche Vorrangklausel:
„`preismodell-optionen.md` … ist die Quelle, dieses Dokument die
Ableitung — **bei Widerspruch gewinnen die Quellen**". Für jeden Leser,
der die Klausel anwendet, ist AA-6 damit wieder offen. Das ist exakt die
Spiegelrichtung, die die eigene CLAUDE.md als L-25/MKT-R12-P-04-Klasse
führt („Wer beim Arbeiten in einer ABLEITUNG … zieht die QUELLE im selben
Zug nach — sonst kehrt die Vorrangklausel die Präzisierung wieder um").

**Nachbarstelle derselben Klasse (schwächer, weil AA-2 nur Zielbild ist):**
§ 11 ✅-E-2 „Die **Modulfrage (A2)** bleibt unberührt … ist mit E-2
**nicht** mitentschieden" und § 8 „⚠️ Hinweis zur Modulfrage (A2)".

**Nicht vorwerfbar** ist das Unterlassen des Edits (die Quelle liegt
außerhalb des R13-A-Scopes) — vorwerfbar ist, dass **nur einer von
mindestens zwei** Nachzieh-Bedarfen als Nebenbefund gemeldet wurde,
während die Meldung selbst wie eine vollständige Liste gelesen wird.

### P-09 — mittel — Entwarnung „diese Session hat nichts entschieden", die zwei eigene Stellen einschränken

**Fundstelle:** `handel/angebotsarchitektur.md`, § 7, zweiter Nachtrag,
Tabellenzeile 2: „✅ **bestätigt** — alle sieben Antworten kamen vom
User; **diese Session hat nichts entschieden, auch nicht dort, wo das
Protokoll schweigt**."

**Eingeschränkt durch die eigenen Kästen:**
- ✅-AA-3: „**Konsequenz bis zur Klärung:** Der Katalog wird um ‚in
  Arbeit'-Module … erweitert … die § 3-Zeile bleibt **geschlossen** …
  Das ist die **vorsichtige, nicht die entschiedene Lesart**." Das ist
  eine gesetzte Arbeitsregel, wo das Protokoll schweigt — richtig
  gekennzeichnet, aber es ist eine Festlegung.
- ✅-AA-6: der November-Anker als „Frist dieses Fensters" (**P-05**).

**Zusatz — Nenner-Unschärfe im selben Block:** „alle **sieben**
Antworten" steht sieben Zeilen unter „Zusammen: **8 von 9** Fragen der
Erhebung beantwortet". Beide Zahlen sind für sich richtig (7 AA-Punkte /
8 inkl. S4), im selben Nachtrag nebeneinander lesen sie sich als
Widerspruch.

### P-10 — Hinweis — Aus einem fehlenden Träger wird in der Zeiger-Tabelle ein benannter

**Fundstelle:** `handel/angebotsarchitektur.md`, § 7, Übersichtstabelle,
Zeile AA-7: „✅ ohne Deckel, mit **Prüfposten nach der E-6-Messung**
(**Träger des Aufrufs: E-6-Rücklauf**, ohne Termin)".

**Gegen den eigenen ✅-Kasten (§ 5):** „⚠️ **Der Prüfposten braucht einen
Träger, sonst verfällt er.** **Auslöser** ist der Rücklauf von E-6 …"
Der Kasten unterscheidet Auslöser und Träger und stellt fest, dass der
**Träger fehlt**; die Tabelle setzt den Auslöser als Träger ein und
lässt den Posten versorgt aussehen.

**Gemildert** durch die Vorrangklausel unmittelbar über der Tabelle
(„verbindlich ist der ✅-Kasten am jeweiligen Punkt, nie diese Zeile") —
deshalb Hinweis, nicht mittel.

### P-11 — Hinweis — Als wörtlich gesetztes Zitat mit veränderter Interpunktion

**Fundstelle:** `handel/angebotsarchitektur.md`, § 2, ✅-AA-1-Kasten
(gleichlautend `handel/preisliste-vorlaeufig.md` § 4-Nachtrag).

**Zitiert:** „Wann gelten mehrere Häuser verschiedener Firmierungen als
EIN Betreiber **—** Gesellschafter-Identität? Familienverbund? faktische
Geschäftsführung? **…** der Rabatt braucht eine missbrauchsfeste,
prüfbare Klammer"

**Original (StB-Fragenliste, Frage 13 (f)):** „Wann gelten mehrere Häuser
verschiedener Firmierungen als EIN Betreiber **(**Gesellschafter-Identität?
Familienverbund? faktische Geschäftsführung?**)** — der Rabatt braucht
eine missbrauchsfeste, prüfbare Klammer."

**Befund:** Klammern zu Gedankenstrich/Auslassungszeichen umgeformt; das
„…" suggeriert eine Auslassung, wo keine ist. Inhaltlich identisch, aber
für einen mechanischen Zitatabgleich ein Treffer-Ausfall — und die
Projektregel verlangt für wörtlich gesetzte Zitate den Anker an der
Rohquelle in ihrer Form.

### P-12 — Hinweis — Herkunftsvermerk auf einen Punkt bezogen, der einen eigenen trägt

**Fundstelle:** `handel/angebotsarchitektur.md` § 7-Nachtrag und
`handel/preisliste-vorlaeufig.md` § 6-Nachtrag: „… Z-2 (a) · Z-4 (b) ·
Z-1 (c) · Z-7 (d) · E-5a (e) · **Verbund-Definition (f)**,
Herkunftsvermerk **dort** ‚NEU 13.08., MKT-R12-Postkorb'".

**Original:** Der Vermerk „NEU 13.08., MKT-R12-Postkorb" steht im **Kopf**
von Frage 13 und deckt (a)–(e). Buchstabe **(f)** trägt einen **eigenen,
anderen** Vermerk: „**NEU 13.08. nachmittags, AA-1-Entscheid ‚je
Betreiber'**". Die Zusammenfassung zieht (f) unter eine fremde Herkunft
— sachlich folgenlos, aber es verwischt, dass (f) **nach** dem
AA-1-Entscheid entstanden ist (was den „erledigt"-Vermerk sogar stützt).

### P-13 — Hinweis — Eine Tabellenzelle wurde über die Durchstreichung hinaus umformuliert

**Fundstelle:** `handel/angebotsarchitektur.md`, § 7, Zeile AA-1,
Spalte „Vorbedingung".

**Vorher (`d90edb3~1`):** „**zuerst beantworten** — vor AA-5…AA-8"
**Nachher:** „~~zuerst beantworten~~ ✅ erfüllt — **AA-5…AA-8 konnten
folgen**"

**Befund:** Der zweite Halbsatz wurde ersetzt, nicht durchgestrichen,
während der Nachtrag darüber behauptet: „die ☐-Marker bleiben sichtbar
stehen — **kein Punkt wurde still umgeschrieben**". Die übrigen sieben
Zeilen sind Zeichen für Zeichen unverändert (einzeln verglichen).

### P-14 — Hinweis — Vorsichtige Lesart setzt den Katalog enger als der Entscheid; Randfrage ohne Wiedervorlage-Ort

**Fundstelle:** `handel/angebotsarchitektur.md`, § 4, ✅-AA-3-Kasten,
Absatz „Konsequenz bis zur Klärung"; § 3-Nachtrag, Absatz „⚠️ Die
Sammelzeile … bleibt geschlossen".

**Befund:** Das Protokoll sagt „auch **GEPLANTE** / in Entwicklung
befindliche Module dürfen angeboten werden"; die geltende Arbeitsregel
des Dokuments lässt nur „in Arbeit" zu und hält die Zeile
„geparkt/geplant" geschlossen. Das ist **enger** als der Entscheid — mit
guter Begründung (die Quelle trennt die beiden Zustände nicht) und
ausdrücklich als vorsichtige Lesart gekennzeichnet, also **keine
Verfälschung**. Offen bleibt: Die Randfrage „gehört dem User vorgelegt
(kein Träger außerhalb)" hat **keinen Wiedervorlage-Ort** — dieselbe
Lücke, die die Session bei AA-4 selbst ausdrücklich benennt („wer AA-4
braucht, muss ihn setzen"), bleibt hier unbenannt.

### P-15 — Hinweis — „Drei Zeilen dieser Tabelle" ist eine Zeile zu wenig

**Fundstelle:** `handel/preisliste-vorlaeufig.md`, § 6-Nachtrag,
Überschrift „… **drei Zeilen** dieser Tabelle haben einen neuen Stand".

**Befund:** Auch die Zeile „**Steuerbasis unserer eigenen Preisangaben**
… Z-7, Zulieferung an die Zentrale — **noch nicht übergeben**" hat einen
neuen Stand (Z-7 = Frage 13 **(d)**). Sie ist durch den Sammelsatz
(„Die Formulierungen … **in dieser Tabelle** … sind insoweit überholt")
mit abgedeckt, wird aber im „**Unverändert:**"-Absatz desselben
Nachtrags als „Steuerbasis Z-7 offen" geführt — richtig für die
Beantwortung, missverständlich für den Übergabestand.

### P-16 — Hinweis — K04-Vorbehalt fehlt im neuen Kopf-Nachtrag der Preisliste

**Fundstelle:** `handel/preisliste-vorlaeufig.md`, Kopf-Nachtrag, Absatz
„⚠️ Was sich NICHT geändert hat — die vier Vorbehalte unten gelten
unverändert und ausnahmslos".

**Befund:** Aufgezählt wird „**Z-6 ungeklärt**, die W-B/A3-Rechenbasis
kann weiterhin kippen" — **K04 (Vapi) fehlt**, obwohl § 2 derselben
Datei ausdrücklich feststellt: „Der Kopfkasten dieser Datei nennt als
Strukturvorbehalt nur Z-6/n8n. Das ist **eine** Kollision von zweien —
die Vapi-Kollision (K04) ist **gleichrangig** und ebenfalls ungeklärt."
Der Kopf-Nachtrag war die Gelegenheit, genau diese in R12 gefundene
Lücke an der Ankunftsstelle zu schließen; die Angebotsarchitektur tut es
in ihrem Kopf-Nachtrag („der **Z-6-/K04-Vorbehalt (3)**"), die Preisliste
nicht. **Die beiden Dokumente sagen denselben Vorbehalt verschieden.**

---

## 5. Die zwei Zusatzfragen

### „Welche Verfälschung hätte mein Verfahren NICHT gefangen?"

**Die entscheidende: eine Abweichung zwischen dem, was der User gesagt
hat, und dem, was im Briefing-Protokoll steht.** Mein einziger Maßstab
war das Protokoll in `briefing-2026-08-13.md`. Die Belegstufe lautet
selbst „sinngemäß — **Wortlaut nicht archiviert**". Hätte die
Briefing-Session (Garp) beim Protokollieren AA-7 zu „ohne Deckel"
verdichtet, während der User „erstmal ohne, aber schau nochmal" sagte,
wäre die Einarbeitung **perfekt protokolltreu und trotzdem falsch** —
und für mich unsichtbar. Dasselbe gilt für jede Nuance der Begründungen.
Diese Lücke lässt sich mit keinem Prüfverfahren im Repo schließen, nur
durch Archivierung des Erhebungs-Wortlauts (`sensibel/`).

**Zweitens: Zahlen und Zählwege, die ich nicht nachgerechnet habe.** Die
15 Einzelwerte, die Fensterränge und die „20 von 20"-Gegenprobe in
Preisliste § 5 stammen aus einem git-ignorierten Rohbeleg-Protokoll, das
ich nicht gelesen habe. Wäre dort in diesem Commit still eine Zahl
gedreht worden, hätte ich es nicht bemerkt — ich habe nur geprüft, dass
§ 5 **inhaltlich unangetastet** blieb (was der Diff belegt), nicht, dass
seine Zahlen stimmen.

**Drittens: eine falsche Aussage über die Nachbardokumente, die ich nur
gezielt gegrept habe.** `preismodell-optionen.md` habe ich nicht am
Stück gelesen; die Zitate aus § 4.2 und § 11 E-1, die beide
Prüfgegenstände tragen, habe ich **nicht** am Volltext verifiziert. Eine
Verfälschung dort hätte ich übernommen — genau die Klasse, gegen die die
eigene Regel „Aussage und Fundstelle sind zwei Prüfungen" gerichtet ist.

**Viertens: eine Auslassung, für die kein Suchwort existiert.** Meine
Rückwärtsprüfung lief über den Protokolltext — sie fängt, was im
Protokoll steht. Hätte der User im Dialog etwas gesagt, das **weder** im
Protokoll **noch** im Dokument steht, gäbe es für mich keinen Anker.

### „Hätte ich meine Funde auch OHNE die Kategorien-Hinweise oben gefunden?"

**Teils ja, teils nachweislich nein.**

- **P-01** (Z-4 „nicht übergeben") hätte ich gefunden — er fiel beim
  Volltext-Lesen auf, weil derselbe Text zwei Bildschirmseiten weiter das
  Gegenteil sagt. Kategorie 6 hat ihn nicht ausgelöst, nur eingeordnet.
  **Bemerkenswert:** Die Selbstwiderspruchsprobe der geprüften Session
  hat ihn **nicht** gefunden — ihre acht Muster (`S4`, `rabatt`,
  `startgebühr`, `paket`, `P-B`, `reifegrad`, `staffel`, `deckel`)
  enthalten kein Muster für den **Übergabe-Status**, und ihre eigene
  Geltungsgrenze („eine Abweichung, die **keines** dieser acht Wörter
  enthält, findet sie nicht") beschreibt exakt diesen Fall.
- **P-02** (gelöschte Überschrift) hätte ich **ohne** den Hinweis
  „Zähle Löschungen" mit hoher Wahrscheinlichkeit **verpasst**. Bei 714
  eingefügten gegen 12 gelöschte Zeilen liest man die Einfügungen. Erst
  `--numstat` plus die gezielte Frage „was genau ist weg?" hat die eine
  Zeile sichtbar gemacht. **Der Kategorien-Hinweis hat hier gearbeitet,
  nicht ich.**
- **P-04** (①/② für denselben Vorgang) hätte ich vermutlich gefunden,
  aber später — er entstand aus dem Nebeneinanderlegen von vier
  Fundstellen desselben Sachverhalts, was ich ohnehin für Kategorie 6
  tat.
- **P-06/P-07** (Marktanker-Bezug, „unsere 2.000 €") verdanke ich dem
  Hinweis auf Kategorie 3. Ohne die Aufforderung, die
  Startgebühr-Passagen besonders zu prüfen, hätte ich den § 5-Nachtrag
  als „Spanne unverändert, alles gut" abgehakt — er sagt das selbst und
  sagt es überzeugend.
- **P-08** (halber Nachzieh-Bedarf) hätte ich ohne den ausdrücklichen
  Hinweis „der Prüfraum ist größer als der Prüfgegenstand" **nicht**
  gefunden — er liegt vollständig außerhalb beider Dateien.
- Die Hinweise **P-10…P-16** sind Nebenprodukte des Zeile-für-Zeile-
  Lesens und wären auch ohne Kategorien angefallen.

**Ehrliche Bilanz:** Von den sieben mittel-/schweren Befunden hätte ich
ohne die Kategorien-Hinweise vermutlich **vier** gefunden (P-01, P-03,
P-04, P-09) und **drei** verfehlt (P-02, P-06/P-07-Cluster, P-08). Die
Hinweise „Zähle Löschungen" und „der Prüfraum ist größer" waren die
produktivsten.

---

## 6. Schluss-Tabelle aller Befunde

| ID | Schwere | Befund in einem Satz | Fundstelle (Abschnitt, keine Zeilennummern) |
|---|---|---|---|
| **P-01** | **schwer** | Der neu geschriebene ✅-AA-6-Kasten behauptet „Z-4 … ist nicht übergeben" — falsch (StB-Frage 13 (b)), von der zitierten Fundstelle § 10 nicht gedeckt und im Widerspruch zum eigenen Kopf-Nachtrag und § 7-Nachtrag desselben Commits | `handel/angebotsarchitektur.md` § 5, ✅-Kasten „AA-6 ENTSCHIEDEN", Absatz „Ausdrücklich mitentschieden ist das Wechsel-FENSTER" |
| **P-02** | mittel | Die Kopfkasten-Überschrift „⚠️ Status und vier Vorbehalte (bitte zuerst lesen)" wurde gelöscht (einzige Löschung der Datei), während der neue Nachtrag im selben Absatz behauptet, der Kopfkasten bleibe unverändert stehen | `handel/preisliste-vorlaeufig.md`, Kopf (📌-NACHTRAG-Kasten + Vorbehalte 1–4) |
| **P-03** | mittel | „Nur diese beiden Formulierungen unten sind überholt" — mindestens eine dritte Stelle trägt den überholten Übergabestand ohne Vorwärtsverweis | `handel/angebotsarchitektur.md`, Kopf-Nachtrag; betroffene Stelle: § 2, Lesart-A-Tabelle, Zeile „Konsequenz Terminpfad" |
| **P-04** | mittel | Derselbe Lesevorgang (StB-Fragenliste, 13.08.) trägt in einem Commit ② und dreimal ① — nach der eigenen Legende ist ② richtig; der Leseweg wurde als Quellenart notiert | `handel/angebotsarchitektur.md` § 2 (②) gegen § 7-Nachtrag (①); `handel/preisliste-vorlaeufig.md` § 4- und § 6-Nachtrag (①) |
| **P-05** | mittel | Neuer Terminanker „Der November-Anker ist zugleich die Frist dieses Fensters" ohne Belegstufe in einem ✅-Entscheid-Kasten; das Protokoll sagt nur „vor dem ersten Bestandskunden" | `handel/angebotsarchitektur.md` § 5, ✅-Kasten „AA-6 ENTSCHIEDEN" |
| **P-06** | mittel | „Die Marktanker … sind ganz überwiegend je Kunde/Projekt erhoben, nicht je Objekt" — Mengenaussage ohne Zählweg; die eigene Scope-Spalte trägt sie nicht (M4 „je Website", M3 „je Haus"; nur 3 von 12 Zeilen ausdrücklich je Projekt, zwei davon aus der ausgeschlossenen Klasse B) | `handel/preisliste-vorlaeufig.md` § 5, 📌-Nachtrag, Punkt 2 |
| **P-07** | mittel | „unsere 2.000 €" — erster konkreter eigener Preisbetrag der Datei, ohne ④-Marke an der Zahl, in einem Dokument, dessen § 3 plausible Beispielbeträge ausdrücklich verbietet | `handel/preisliste-vorlaeufig.md` § 5, 📌-Nachtrag, Punkt 2 |
| **P-08** | mittel | Nur **ein** Nachzieh-Bedarf in der Quelle gemeldet (Z-1…Z-7); nicht gemeldet: `preismodell-optionen.md` § 11 ✅-E-2 führt „Prozentsatz oder Staffel" weiter als offen — die Vorrangklausel kehrt AA-6 damit für jeden Leser um | `handel/angebotsarchitektur.md` § 7-Nachtrag und `handel/preisliste-vorlaeufig.md` § 6-Nachtrag (Nebenbefund-Absätze) |
| **P-09** | mittel | Entwarnung „diese Session hat nichts entschieden, auch nicht dort, wo das Protokoll schweigt" — eingeschränkt durch die eigene AA-3-Arbeitsregel und P-05; dazu Nenner 7 gegen 8 im selben Nachtrag | `handel/angebotsarchitektur.md` § 7, zweiter 📌-Nachtrag, Tabellenzeile 2 |
| **P-10** | Hinweis | Der ✅-Kasten sagt „der Prüfposten braucht einen Träger, sonst verfällt er"; die Übersichtstabelle setzt den Auslöser als „Träger des Aufrufs" ein | `handel/angebotsarchitektur.md` § 7, Übersichtstabelle, Zeile AA-7 |
| **P-11** | Hinweis | Als wörtlich gesetztes Zitat der StB-Frage 13 (f) mit veränderter Interpunktion; „…" suggeriert eine Auslassung, wo keine ist | `handel/angebotsarchitektur.md` § 2 ✅-AA-1 und `handel/preisliste-vorlaeufig.md` § 4-Nachtrag |
| **P-12** | Hinweis | Herkunftsvermerk „NEU 13.08., MKT-R12-Postkorb" auch auf (f) bezogen; (f) trägt in der Quelle einen eigenen, anderen Vermerk | `handel/angebotsarchitektur.md` § 7-Nachtrag; `handel/preisliste-vorlaeufig.md` § 6-Nachtrag |
| **P-13** | Hinweis | AA-1-Vorbedingungszelle über die Durchstreichung hinaus umformuliert, während der Nachtrag „kein Punkt wurde still umgeschrieben" behauptet | `handel/angebotsarchitektur.md` § 7, Übersichtstabelle, Zeile AA-1 |
| **P-14** | Hinweis | Die vorsichtige AA-3-Lesart setzt den Katalog enger als der Entscheid (ausgewiesen, keine Verfälschung); die Randfrage an den User hat keinen Wiedervorlage-Ort | `handel/angebotsarchitektur.md` § 4, ✅-AA-3-Kasten; § 3-Nachtrag |
| **P-15** | Hinweis | „Drei Zeilen dieser Tabelle haben einen neuen Stand" — auch die Z-7-Zeile hat einen (Frage 13 (d)); im „Unverändert"-Absatz steht sie als unverändert | `handel/preisliste-vorlaeufig.md` § 6-Nachtrag |
| **P-16** | Hinweis | Der neue Kopf-Nachtrag nennt als Strukturvorbehalt nur Z-6, nicht K04 — obwohl § 2 derselben Datei die Gleichrangigkeit feststellt und die Angebotsarchitektur K04 im Kopf führt | `handel/preisliste-vorlaeufig.md`, Kopf-Nachtrag, Absatz „Was sich NICHT geändert hat" |

**Zusammenfassung nach Schwere:** 1 schwer · 8 mittel · 7 Hinweis
(**16 Befunde**).

**Gesamturteil (mit ausgewiesener Reichweite):** Die Einarbeitung ist in
der Sache **korrekt** — 9 von 9 Entscheiden protokolltreu, 6 von 6
Begründungen/Vorbehalten angekommen, keine stille Neufassung an den
beiden kritischen Stellen (S4-Kasten, AA-8-Empfehlung), keine erfundene
Höhe, kein Entscheid dort, wo das Protokoll schweigt. Die Befunde
betreffen **Ränder**: eine falsche Bestandsaussage (P-01), eine
Löschung, die dem eigenen Nachtragstext widerspricht (P-02), zwei
Vollständigkeitsansprüche, die nicht halten (P-03, P-08), und drei
unbelegte Zusätze in neu geschriebenem Text (P-05, P-06, P-07). Diese
Reichweite gilt **nur** für die in Abschnitt 2 als vollständig
ausgewiesenen Prüfschritte; die dort offen ausgewiesenen Schritte sind
**nicht erhoben**, nicht „unauffällig".
