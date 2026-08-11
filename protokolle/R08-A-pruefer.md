# R08-A — Unabhängige Prüfung (Aussage-Achse)

**Prüfstand:** Commit `d11535f` · **Datum:** 11.08.2026 ·
**Prüfgegenstand:** `akquise/akquiseplan.md` + `akquise/listenbau-regelwerk.md`
**Rolle:** unabhängiger Prüfer, Auftrag der geprüften Session nicht bekannt.

> ⚠️ **Lauf-Status: Der Prüflauf wurde durch ein Session-Limit
> unterbrochen.** Dieses Protokoll ist der Stand zum Abbruchzeitpunkt.
> Die nicht abgeschlossenen Prüfschritte sind in § C einzeln benannt und
> **nicht** zu „keine Auffälligkeit" geglättet.

---

## A. Tatsächlicher Leseumfang (mit Zeilenspannen)

**Vollständig gelesen:**

| Datei | Zeilenspanne | Läufe |
|---|---|---|
| `akquise/akquiseplan.md` | 1–543 (Datei hat 543) | 1–200 · 200–399 · 399–543 |
| `akquise/listenbau-regelwerk.md` | 1–847 (Datei hat 846+1) | 1–220 · 220–440 · 440–659 · 659–847 |
| `handel/kanal-rechtsmatrix.md` | 1–857 (Datei hat 856+1) | 1–220 · 220–440 · 439–648 · 648–857 |
| `akquise/pruefe-zitate.js` | 1–139 (vollständig) | 1 Lauf |

**Nur ausschnittsweise gelesen** (der Rest dieser Dateien ist für dieses
Protokoll **nicht erhoben**, nicht „unauffällig"):

| Datei | Gelesen | Nicht gelesen |
|---|---|---|
| `fund/erhebung/regionalstatistik-groessenklassen.md` | 105–247 (§ 4–§ 4.5), 246–278 (§ 5), Überschriftenliste | 1–104, 278–Ende (§ 6–§ 8) |
| `fund/positionierungspapier.md` | 95–150 (§ 3.1–3.3), Überschriftenliste | alles Übrige |
| `protokolle/R00-planpruefung-2026-08-09.md` | 395–508 (§ (c) 1–4, (d), (e), Top-5), Strukturliste | Bericht 1, Bericht 3, § (a)/(b) |
| `projektquelle-mkt.md` | 584–596 (§ 7 Punkt 0/0a) + gezielte greps | alles Übrige |
| `STATUS.md` | 30–45, 60–70, 118–132 + gezielte greps | alles Übrige |
| `CLAUDE.md` | vollständig (als Projektanweisung im Kontext) | — |
| `beleg/baseline-messplan.md` | **nur die Überschriftenliste** — Inhalt **nicht gelesen** | 1–Ende |

**Zusätzlich ausgeführt:** `node akquise/pruefe-zitate.js` am Prüfstand;
Nachrechnung der Trichtertabelle, der Datums- und Wochentagsarithmetik und
der Gebietszahlen mit eigenem Node-Skript; begonnene Rückbau-Gegenprobe am
Verifikationsskript im Scratchpad (§ C.4).

**Leseweg-Hinweis in eigener Sache:** Kategorie (3) und (4) verlangen einen
vollständigen Einzeldurchgang. Ich habe ihn **nicht** vollständig
abgeschlossen — Umfang siehe § C.

---

## B. Ergebnis je Pflicht-Kategorie

### (1) Widerspruch zur Rechtsmatrix oder zu den beiden D3-Nachtrags-Kästen

**Ergebnis: Auffälligkeiten gefunden — vier davon in der gefährlichen
Richtung (mehr Erlaubnis, als die Quelle deckt).**

Suchraum: beide Prüfdokumente vollständig gegen `handel/kanal-rechtsmatrix.md`
vollständig, gezielt auf jede ✅/⛔/⚠️-Einstufung, jeden „zulässig"-Satz und
beide D3-Kästen (Rechtsmatrix Z. 794–825).

- **Beide D3-Kästen sind im Regelwerk § 2.1/§ 2.2 wörtlich und vollständig
  übernommen** — Positivkontrolle: der Vorbehaltssatz „die
  Aufsichtsauffassung … bleibt unverändert gegenläufig" ist mitgenommen und
  in § 2.2 sogar durch einen eigenen Gegen-Kasten verstärkt („Weg (b) ist
  eine bewusste Risikoübernahme, keine Zulässigkeitsfeststellung"). Das ist
  die stärkste Stelle beider Dokumente.
- **Mehr Erlaubnis als die Quelle deckt:** P-05 (K3 „✅" ohne Quelle),
  P-06 (Brief-✅ ohne den „das Negativ kann kippen"-Vorbehalt), P-07
  (LinkedIn-Kontaktanfrage), P-15 (A7-Impressumssatz ohne
  Vorwärtsverweis).
- **Widerspruch innerhalb des Regelwerks:** P-15 — § 4.5 gibt A7 wieder
  („Die Adressen dürfen nicht aus Impressen stammen"), § 5.1 erlaubt sie
  unter Weg b. Die dokumenteigene Kollisionsregel („bei Widerspruch gewinnt
  die Rechtsmatrix") führt an genau dieser Stelle zum falschen Ergebnis.
- **Zum 24-Monate-Kasten:** kein Widerspruch im Wortlaut, aber eine
  ungeprüft weitergereichte Gleichsetzung (P-16).

### (2) Vollzähligkeit der sechs D2-Pflichten und der vier D3-Weg-b-Pflichten

**Ergebnis: formal vollzählig — 6/6 und 4/4 — aber eine der sechs ist zu
Unrecht als erfüllt ausgewiesen (P-01).**

Einzelabzählung, Nenner genannt:

| D2-Pflicht (Rechtsmatrix D2 Nr. 1–6) | Im Regelwerk | Status dort |
|---|---|---|
| 1 Datenschutzinformation Geschäftskontakte | § 3 Pflicht 1 | „nicht gebaut" |
| 2 Werbesperrdatei | § 3 Pflicht 2 | „nicht gebaut" |
| 3 Verarbeitungsverzeichnis-Eintrag | § 3 Pflicht 3 | „nicht gebaut" |
| 4 Dokumentierte Abwägung je Datenfeld | § 3 Pflicht 4 | **„erfüllt" — Überklaim, s. P-01** |
| 5 Lead-Bogen für Messen | § 3 Pflicht 5 | „nicht gebaut" |
| 6 Quellenprotokoll je Adresse | § 3 Pflicht 6 | „spezifiziert, nicht gebaut" |
| **Summe** | **6 von 6 vorhanden** | 5 korrekt eingestuft, 1 falsch |

| Weg-b-Pflicht (D3-Kasten 2) | Im Regelwerk § 2.3 | Umsetzungsort | Trägt? |
|---|---|---|---|
| W-b1 Interessenabwägung je Datenfeld | vorhanden | § 6 | **nur Stufe 2, s. P-01** |
| W-b2 Quellenprotokoll inkl. „Impressum"-Kennzeichnung | vorhanden | § 5.3 (Q-2) | ja |
| W-b3 Werbesperrdatei vor dem ersten Versand | vorhanden | Verweis auf „§ 9.3" — **existiert nicht** (P-14) | inhaltlich ja (§ 7.3) |
| W-b4 Restrisiko-Vermerk im VVT-Eintrag | vorhanden | § 3 Pflicht 3, mit Textbaustein | ja |
| **Summe** | **4 von 4 vorhanden** | | 3 tragen, 1 offen |

### (3) Zahl ohne Zählweg oder ohne Quelle

**Ergebnis: teilweise geprüft — Umfang unten. Die nachgerechneten Zahlen
stimmen bis auf eine Zählung (P-10); zwei Zahlen tragen keinen Zählweg
(P-11-Umfeld, P-17).**

**Selbst nachgerechnet und BESTÄTIGT** (eigenes Node-Skript, Zählweg je
Zeile):

| Zahl | Fundstelle | Nachrechnung |
|---|---|---|
| 1.600 / ≈ 606 / ≈ 337 Briefe | Akquiseplan § 4.2 | 0,000625 → 1600,00 · 0,00165 → 606,06 · 0,00297 → 336,70 — **alle drei korrekt**, Zählweg im Dokument benannt |
| „anderthalbmal den Landesbestand" | § 4.2 | 1600 ÷ 1038 = 1,541 ✓ |
| 94 Kalendertage = 13 Wo. 3 Tage | § 1 | 11.08.→13.11. = 94; 94 = 13·7+3 ✓ |
| 15.11.2026 = Sonntag | § 1 | ✓ (per Werkzeug, nicht aus dem Kopf) |
| alle Wochentags-Etiketten in § 6 | § 6 | Fr 14.08. · Fr 21.08. · Fr 28.08. · Fr 11.09. · Sa 12.09. · Fr 02.10. · Fr 09.10. · Fr 23.10. · Fr 13.11. — **9 von 9 korrekt** |
| 416 von 1.038 = 40,1 % | Regelwerk § 8 | 40,08 % ✓ |
| Restsumme 291 | Regelwerk § 8 | 1038 − 747 = 291 ✓ |
| Ø 47,8 / 50,3 / 53,6 / 114,2 / 144,0 | Regelwerk § 8 | **5 von 5 zeilengenau** gegen `regionalstatistik…` § 4.4 ✓ |
| ~17 Betriebe/Jahr, „ebenda § 5" | Regelwerk R-G2 | steht wörtlich in § 5 der Quelle ✓ |
| „~100+ relevante Kontakte" (K5) | Akquiseplan § 2 | R00 § (c) Punkt 2: „ab grob 100+" ✓, Belegstufe ③ korrekt |
| „z. B. 3/Woche" (KPI-1) | § 5 | R00 § (e) Punkt 1 ✓, „z. B." mitgenommen |

**Nicht bestanden:** P-10 (Kreiszählung „neun" statt acht), P-11
(Sonntagstermine), P-12 (S4-Baustart), P-17 (~100 ohne Zählweg).

**Nicht geprüft** (Zahlen, die ich nicht bis zur Primärquelle
zurückverfolgt habe): „über 1.400 Adressaten" (DEHOGA-Newsletter, vom
Dokument selbst als zweite Hand markiert), „~159 Einträge"
(IHK-Designkontor), „alle 13 Art.-14-Angaben", „unter 20 Personen"
(DSB-Schwelle), „vier Jahre" (AG-Bonn-Alterung), sämtliche Aktenzeichen
und Randnummern. Alle diese stammen aus der Rechtsmatrix und wären eine
Prüfung der Rechtsmatrix, nicht der Prüfdokumente — ich habe sie bewusst
nicht gezogen, aber ich habe sie auch **nicht** bestätigt.

### (4) Vorbehaltsverlust beim Verdichten

**Ergebnis: teilweise geprüft — Satz-für-Satz-Abgleich für die Blöcke, die
die Rechtsmatrix zusammenfassen (Regelwerk § 3, § 4.1–4.5, § 5.1–5.3,
§ 6, § 7.2–7.4; Akquiseplan § 2 K1–K5). Vier Vorbehaltsverluste gefunden
(P-06, P-07, P-08, P-21), dazu zwei Verschiebungen in die andere Richtung
(P-20, P-19).**

**Positivkontrolle des Abgleichs** — Stellen, an denen der Vorbehalt
KORREKT mitgenommen wurde (sonst wäre mein Negativbefund über die
übrigen Stellen wertlos):

- R-A2.2: „normidentisch belegt ist sie nicht" mitgenommen ✓
- R-A2.3: „Rechtsgrundlage … **nicht am Wortlaut verifiziert**, ③" ✓
- R-A6.5: „③ … Amtsgericht, keine höchstrichterliche Bestätigung" ✓
- § 5.1 Zeile 1: „**Achse 3 separat prüfen**" mitgenommen ✓
- § 8: alle **drei** Grenzen aus `regionalstatistik…` § 4.5 übernommen ✓
  (und dann in derselben Tabelle verletzt — P-08)
- § 2.2: der Gegen-Kasten zum Weg-b-Entscheid ist **stärker** als die
  Quelle, nicht schwächer ✓

Der Abgleich ist damit nachweislich fähig, sowohl Treffer als auch
Nicht-Treffer zu erzeugen. **Nicht abgeschlossen:** § 7.4 und die
A6-Regeln R-A6.1/2/4/6 habe ich nur stichprobenhaft gegengelesen, nicht
Satz für Satz.

### (5) FUND2-Sequenz-Vorbehalt

**Ergebnis: in BEIDEN Dokumenten vorhanden, im Kopf unaufgeweicht — aber
im Akquiseplan an der einen Stelle nicht wiederholt, an der das Dokument
einer Mix-Entscheidung am nächsten kommt (P-25).**

- Akquiseplan Kopf (§ „Sequenz-Vorbehalt") und Geltungsgrenze: „Kein
  Kanalmix-Entscheid", plus Wiederholung in § 10. **Nicht aufgeweicht.**
- Regelwerk Kopf: zusätzlich differenziert („für die Rechtsregeln
  unschädlich, für §§ 6/8 erheblich") und in § 11 nochmals verankert.
  **Nicht aufgeweicht.**
- **Prämissen-Gegenprobe bestanden:** Die tragende Behauptung des
  Vorbehalts — `fund/persona-befund.md` existiert nicht — habe ich selbst
  gemessen: `ls fund/` zeigt nur `persona-validierungsplan.md`,
  `git log -- fund/persona-befund.md` ist leer. ✓
- **Unterlaufen:** § 4.3 („Trägt: K2 … · K1 wird umdatiert") und § 6
  (Terminplan mit Zielgröße ≥ 100 und Wellendatum) sind der Sache nach
  eine Kanal- und Mengenzuteilung. Der dortige Schutzkasten („Was dieser
  Abschnitt NICHT sagt") adressiert nur die Fristfrage, nicht den
  FUND2-Vorbehalt. → P-25.

---

## C. Nicht oder nicht vollständig durchgeführte Prüfschritte

1. **Kategorie (3) nicht vollständig:** Ich bin **nicht** jede einzelne
   Zahl beider Dokumente durchgegangen. Erhoben ist die Liste in § B(3);
   nicht erhoben sind die dort namentlich genannten aus der Rechtsmatrix
   übernommenen Zahlen sowie sämtliche Aktenzeichen/Randnummern.
2. **Kategorie (4) nicht vollständig:** § 7.4 des Regelwerks und die
   Newsletter-Regeln R-A6.1/2/4/6 nur stichprobenhaft, nicht Satz für Satz.
3. **`beleg/baseline-messplan.md` nicht gelesen** (nur Überschriften). Die
   Aussage des Akquiseplans, § 5 dort sei das Muster für die
   Rückwärtsrechnung, ist damit **nur auf Überschriftenebene** bestätigt
   („## 5. Zeitfenster — Rückwärtsrechnung vom Livegang") — der Inhalt ist
   nicht geprüft. Der Zusatz „im `lehren-register.md` als bewährtes Muster
   geführt" ist bestätigt (Register Z. 558–560).
4. **Rückbau-Gegenprobe am Verifikationsskript: BEGONNEN, NICHT
   ABGESCHLOSSEN.** Stand:
   - Basislauf am Prüfstand reproduziert, Zahlen in P-03.
   - Fälschung des D3-Kastens (24 → 36 Monate) im **Zieldokument**: Die
     Zählerzeilen des Skripts blieben **unverändert** (103 Zitate /
     94 von 97) — starkes Indiz, dass die Fälschung nicht erkannt wurde.
     Der Exit-Code ist als Nachweis **untauglich**, weil der Basislauf
     bereits mit 1 endet.
   - Fälschung der D2-Pflicht 2 („vor jedem Versand" → „vor jeder Welle"):
     nur Exit-Code erfasst (1, also nichtssagend) — Zählerzeilen **nicht**
     erfasst. **Nicht abgeschlossen.**
   - **Kontrollprobe der Gegenprobe selbst ist FEHLGESCHLAGEN:** Der von
     mir gewählte Anker („Dass der Brief zulässig war …") wurde in der
     Kopie nicht gefunden (`gefunden: false`) — mein eigener Prüfweg hatte
     an dieser Stelle also keine funktionierende Positivkontrolle. Die
     Rückbau-Gegenprobe trägt damit **kein** belastbares Negativ.
   - **Tragend ist deshalb nicht die Gegenprobe, sondern die
     Quelltext-Lektüre** (P-02): Das Extraktionsmuster
     `/„([^"„]{25,})"/g` erfasst nur Text zwischen deutschen
     Anführungszeichen; die D2-Liste (Regelwerk § 3) und beide D3-Kästen
     (§ 2.1/§ 2.2) sind `>`-Blockzitate **ohne** Anführungszeichen und
     können daher nicht extrahiert werden. Die MUSS-Anker prüfen laut
     Skriptzeile 124 `poolText`, also die **Quelle**, nicht das
     Zieldokument.
5. **Nicht geprüft:** ob die Rechtsmatrix selbst inhaltlich richtig ist
   (nicht mein Auftrag), und ob `protokolle/R08-A-zitatpruefung.md` die
   sechs Reparaturen korrekt dokumentiert — die Datei habe ich **nicht
   gelesen**.

---

## D. Befundliste

### KRITISCH

**P-01 · Eine der sechs D2-Pflichten ist zu Unrecht als erfüllt
ausgewiesen**
*Fundstelle:* `akquise/listenbau-regelwerk.md`, § 3 „Pflicht 4 ·
Dokumentierte Abwägung nach Art. 6 Abs. 1 lit. f — je Datenfeld"
(zusammen mit § 6 und § 2.3 W-b1).
*Was falsch ist:* Der Status lautet „**mit § 6 dieses Dokuments
erfüllt**". Derselbe Abschnitt führt drei Stufen auf und schreibt zu
Stufe 3: „**offen**, mit Argumenten auf beiden Seiten". § 6 dokumentiert
ausschließlich Stufe 2 (Erforderlichkeit je Feld) — sein Maßstab-Zitat
ist wörtlich das Stufe-2-Zitat aus C2. Eine Abwägung wird nirgends
durchgeführt und nirgends abgeschlossen. Verlangt sind aber
„**Dokumentierte Abwägung**" (D2 Nr. 4) bzw. „dokumentierte
**Interessenabwägung** … je Datenfeld" (D3-Kasten 2, W-b1). Verschärfend:
Unter Weg (b) ist genau diese Abwägung das risikotragende Dokument. Der
Punkt fehlt zudem in § 10 (O-1…O-7).
*Was richtig wäre:* Status „teilweise gebaut — Stufe 2 dokumentiert,
Stufe 3 offen", plus ein eigener offener Punkt in § 10 mit Träger, plus
Korrektur der Nenner-Aussage im Akquiseplan § 2 K1 Punkt 2.
*Gemessen an:* Rechtsmatrix D2 Nr. 4 und D3-Kasten 2 (Z. 786, 813–819);
Rechtsmatrix C2 Stufen 1–3 (Z. 681–683); Regelwerk § 3 Pflicht 4 und § 6
im Volltext.

**P-02 · Das Verifikationskapitel behauptet eine maschinelle Prüfung, die
die wichtigsten Blöcke strukturell nicht erfassen kann**
*Fundstelle:* `akquise/listenbau-regelwerk.md`, § 12 „Verifikation der
Zitate", erster Absatz; `akquise/pruefe-zitate.js`, Funktion `zitate()`
und MUSS-Schleife.
*Was falsch ist:* § 12 beginnt: „Geprüft wird **nicht nur** die
byte-getreue Übernahme der D3-/D2-Blöcke, sondern jedes in
Anführungszeichen gesetzte Zitat …". Genau umgekehrt: Das Muster
`/„([^"„]{25,})"/g` extrahiert ausschließlich Text zwischen deutschen
Anführungszeichen. Die D2-Liste (§ 3) und beide D3-Kästen (§ 2.1/§ 2.2)
sind `>`-Blockzitate **ohne** Anführungszeichen — sie werden nicht
extrahiert und nicht verglichen. Die vier Rechtsmatrix-Anker der
Positivkontrolle testen `poolText.includes(...)` (Skript Z. 124), also
den **Quelltext der Rechtsmatrix**, nicht die Wiedergabe im Regelwerk.
Das Werkzeug gibt damit Entwarnung über einen Text, den es nie mit dem
Zieldokument verglichen hat (CLAUDE.md: „bei jedem Wächter fragen,
WELCHEN Text er liest").
*Was richtig wäre:* Entweder die D2-/D3-Blöcke in eine Form bringen, die
das Muster erfasst, oder — besser — einen eigenen Vergleich
Zieldokument ↔ Quelle für diese Blöcke, mit einer Rückbau-Gegenprobe
**im Zieldokument**. Bis dahin muss der Satz in § 12 lauten, dass die
D2-/D3-Blöcke **nicht** maschinell geprüft sind.
*Gemessen an:* Quelltext `akquise/pruefe-zitate.js` Z. 57–63, 92–101,
121–128 (vollständig gelesen); Regelwerk § 3 Z. 160–165 und § 2.1/2.2
(Blockzitat-Form ohne Anführungszeichen).

### WICHTIG

**P-03 · Das dokumentierte Prüfergebnis reproduziert am Prüfstand nicht**
*Fundstelle:* Regelwerk § 12, Ergebnistabelle.
*Was falsch ist:* Dokumentiert sind 99 geprüfte Zitate, 6 eigene
Formulierungen, „93 / 93" bestätigt. Der Lauf am Prüfstand `d11535f`
liefert: **103 Zitate**, 6/6 eigene, „**94 / 97**", drei Einträge unter
„NICHT im Pool gefunden", **Exit-Code 1** (also Fehlschlag). Ursache:
§ 12 zitiert in seinem Reparaturbericht die **fehlerhaften Vorfassungen**
(„langsame, aber loyale Entscheider", „unser Angebot passt perfekt") und
im Werkzeugbefund ein Regex-Fragment — das Skript zählt sie als
unbestätigte Zitate. Das Dokument macht seine eigene Prüfung durch das
Dokumentieren der Reparatur rot und meldet trotzdem grün.
*Was richtig wäre:* Die drei Selbstreferenzen in die Ausnahmeliste
aufnehmen (mit Begründung) und die Tabelle mit dem tatsächlich
reproduzierbaren Ergebnis füllen; die Prüfstands-Angabe („`df52e0c` + die
Änderungen dieser Session") durch einen echten Commit ersetzen.
*Gemessen an:* eigener Lauf `node akquise/pruefe-zitate.js` am
eingefrorenen Stand.

**P-04 · „Positivkontrolle je Quelldatei einer — 7/7" ist unzutreffend**
*Fundstelle:* Regelwerk § 12, Ergebnistabelle, Zeile Positivkontrolle.
*Was falsch ist:* Der Quellenpool umfasst **acht** Dateien (Skript
Z. 13–22). Die sieben MUSS-Anker verteilen sich auf **vier**: viermal
Rechtsmatrix, je einmal Regionalstatistik, R00, Positionierungspapier.
**Ohne Anker bleiben `projektquelle-mkt.md`, `STATUS.md`,
`beleg/baseline-messplan.md`, `CLAUDE.md`** — obwohl beide Prüfdokumente
gerade aus Projektquelle und STATUS wörtlich zitieren (F-7-Zitat,
Telkon-Zitat, „Bau-Pflicht in BELEG4"). Für die Hälfte des Pools ist ein
stiller Totalausfall der Vergleichsstrecke unbemerkt möglich. „7/7" ohne
den Nenner „4 von 8 Quelldateien abgedeckt" liest sich als Vollabdeckung.
*Was richtig wäre:* Je Pooldatei ein Anker (also acht), Nenner im Text.
*Gemessen an:* Skript Z. 13–22 gegen Z. 93–101, Zuordnung einzeln
ausgezählt.

**P-05 · K3 trägt ein „✅ Rechtsstand", das die Quelle nicht ausspricht**
*Fundstelle:* `akquise/akquiseplan.md`, § 2, „K3 · Fremde Verteiler statt
eigener", Zeile „Rechtsstand".
*Was falsch ist:* Dort steht „✅ — der Verband versendet an **seine**
Einwilligungen, wir sind nicht Versender (② D1)". Die Rechtsmatrix hat zu
diesem Kanal **keinen Teil-A-Abschnitt**; D1 ist eine Rangfolge-Tabelle
mit einer Begründungsspalte, keine Zulässigkeitsprüfung. Für K1, K2, K4,
K5 verweist der Plan jeweils auf einen geprüften Kanalabschnitt (A7, A2,
A1, A6) — nur für K3 wird ein ✅ aus einer Tabellenzelle erzeugt und mit
Belegstufe ② versehen. Unbehandelt bleibt dabei die eigene A6-Regel der
Quelle: Der Einwilligungstext muss „welche Produkte oder Dienstleistungen
welcher Unternehmen" benennen (BGH VI ZR 721/15, amtl. Leitsatz 2). Ob
die Einwilligung der DEHOGA-Empfänger Werbung **für uns** deckt, ist
damit offen und nirgends gestellt.
*Was richtig wäre:* „⚠️ in der Rechtsmatrix nicht als eigener Kanal
geprüft — Fremdverteiler-Werbung ist dort nur als Rangplatz genannt;
offene Frage: Reichweite der Einwilligung des Verteilers (A6)". Plus
Nebenbefund an MKT-HANDEL analog N-1.
*Gemessen an:* Rechtsmatrix Teil A (A1–A7 vollständig — kein Abschnitt zu
fremden Verteilern), D1 Z. 769–777, A6 Z. 500.

**P-06 · Der Vorbehalt, der die Brief-Empfehlung tragen muss, fehlt in
beiden Dokumenten**
*Fundstelle:* Akquiseplan § 2 K1 („Rechtsstand ✅"); Regelwerk § 4.5,
Kopfzitat zu A7.
*Was falsch ist:* Die Rechtsmatrix stützt das Brief-✅ ausdrücklich auf
ein Negativ und markiert dessen Grenze zweimal: „**Nicht durchsucht:
juris und beck-online**, wo der Großteil der OLG-/LG-Rechtsprechung
liegt. Das Negativ kann dort kippen" (A7 und Offene-Punkte-Tabelle).
Beide Prüfdokumente übernehmen das Ergebnis und lassen die Grenze weg.
Der gesamte Kapazitäts- und Terminplan hängt an der Offenheit dieses
Kanals; der Wegfall des Vorbehalts wirkt genau zugunsten der eigenen
Planung.
*Was richtig wäre:* Der Vorbehalt gehört in die K1-Zeile und in die
A7-Wiedergabe des Regelwerks, nicht in eine Fußnote.
*Gemessen an:* Rechtsmatrix Z. 544 und Z. 834; Volltextsuche in beiden
Prüfdokumenten nach „juris", „beck-online", „kippen" — **kein Treffer**
(Positivkontrolle: „NRWE" und „Düsseldorf" treffen in beiden Dokumenten,
der Suchweg findet Rechtsmatrix-Vokabular also).

**P-07 · Der LinkedIn-Restrisiko-Vorbehalt der Quelle ist verloren, und
die rote Linie lädt zum Gegenschluss ein**
*Fundstelle:* Regelwerk § 9, rote Linie 2; Akquiseplan § 2,
Kandidaten-Tabelle, Zeile „LinkedIn".
*Was falsch ist:* Die Quelle sagt: „**Die reine Kontaktanfrage ohne
Werbetext** ist rechtlich nicht abschließend geklärt … sie bleibt als
**offene Rechtsfrage mit Restrisiko** markiert, nicht als grüner Kanal"
(A3). Rote Linie 2 verbietet „Werbetext in der Kontaktanfrage" — daraus
liest jeder Anwender, die Kontaktanfrage **ohne** Werbetext sei frei.
Genau diesen Schluss verweigert die Quelle. Der Vorbehalt kommt in
keinem der beiden Dokumente vor.
*Was richtig wäre:* Rote Linie 2 um „die reine Kontaktanfrage ohne
Werbetext ist ungeklärt (Restrisiko), nicht freigegeben" ergänzen —
dieselbe Form, die das Regelwerk bei R-A7.6 bereits richtig verwendet.
*Gemessen an:* Rechtsmatrix Z. 353; Volltext beider Prüfdokumente.

**P-08 · Das Regelwerk zitiert die Mittelwert-Warnung und verletzt sie in
derselben Tabelle**
*Fundstelle:* `akquise/listenbau-regelwerk.md`, § 8,
Priorisierungstabelle, Begründungsspalte Priorität 2 und 3 — unmittelbar
gefolgt vom Kasten „Drei Grenzen dieser Zahlen".
*Was falsch ist:* Priorität 2 wird begründet mit „kleinteiliger Bestand
(Ø 47,8 / 50,3 / 53,6 Schlafgelegenheiten)", Priorität 3 mit „größere
Häuser (Ø 114,2 / 144,0)". Der Kasten zwei Zeilen darunter zitiert die
Quelle: „**Ein Mittelwert ist keine Größenklassen-Verteilung** … Jede
Ableitung ‚Ø 63,9 ⇒ Kernsegment in SH ist kleiner/größer als bundesweit'
wäre falsch." Die Quelle selbst formuliert vorsichtiger: „**Nach
mittlerer Betriebsgröße** kleinteilig sind die binnenländischen Kreise" —
der Geltungsvorbehalt „nach mittlerer Betriebsgröße" ist beim Übernehmen
weggefallen. Zusätzlich kollidiert die Begründung mit dem
Positionierungspapier § 3.3, das die Betten-Zahl ausdrücklich als
Abgrenzungskriterium verwirft — was das Regelwerk in R-G3 selbst zitiert.
*Was richtig wäre:* Geltungsvorbehalt in die Zelle („nach mittlerer
Betriebsgröße kleinteilig — keine Aussage über die Größenklassen-
Verteilung").
*Gemessen an:* `regionalstatistik-groessenklassen.md` Z. 215–224 und
§ 4.5 Punkt 1 (Z. 230–237); Regelwerk § 8 und R-G3.

**P-09 · Die Gebietspriorisierung wendet ihr eigenes Kriterium nicht auf
alle Kandidaten an**
*Fundstelle:* Regelwerk § 8, Priorisierungstabelle.
*Was falsch ist:* Priorität 1 und 2 sind nach Betriebszahl gebildet (246,
170 | 80, 76, 71). Priorität 3 enthält Lübeck (65) und **Kiel (39)** —
während **Pinneberg (58), Herzogtum Lauenburg (52), Segeberg (45) und
Plön (43)** in der Sammelzeile „nachrangig" verschwinden, obwohl drei von
ihnen mehr Betriebe haben als Kiel. Das für Kiel/Lübeck genannte
Zusatzkriterium („Nähe zum Pilotumfeld") wird für keinen anderen
Kandidaten geprüft, und die Sammelzeile „zusammen 291" verdeckt, dass
dort größere Einzelbestände liegen als in Priorität 3. CLAUDE.md: „Ein
Bewertungskriterium gilt für ALLE Kandidaten."
*Was richtig wäre:* Die Vergabelinie je Kriterium explizit machen
(Betriebszahl **und** Pilotnähe) und die Sammelzeile aufschlüsseln.
*Gemessen an:* `regionalstatistik-groessenklassen.md` § 4.4, Z. 198–213
(alle 15 Zeilen einzeln gegengelesen).

**P-10 · Falsche Kreiszählung**
*Fundstelle:* Regelwerk § 8, Tabellenzeile „nachrangig".
*Was falsch ist:* „übrige **neun** Kreise/Städte | zusammen 291".
Schleswig-Holstein hat **15** Kreise und kreisfreie Städte (Quelle § 5,
Summenprobe C: „Summe der 15 SH-Kreise"); die Tabelle benennt sieben.
15 − 7 = **acht**. Die Summe 291 ist korrekt (18+9+52+58+43+45+27+39 =
291, acht Summanden) — die Zahl stimmt, die Zählung nicht. Genau der
Fall „stimmende Summe ist kein Zuordnungsbeleg".
*Was richtig wäre:* „übrige acht Kreise/Städte".
*Gemessen an:* Quelle § 4.4 (15 Zeilen) und § 5 Probe C; eigene
Nachrechnung.

**P-11 · Vier User-Handgriffe sind auf einen Sonntag terminiert**
*Fundstelle:* `akquise/akquiseplan.md`, § 7, Spalte „bis" — H-1, H-2,
H-6, H-7 jeweils „16.08.".
*Was falsch ist:* Der **16.08.2026 ist ein Sonntag** (per Werkzeug
erhoben, nicht aus dem Kopf). Dasselbe Dokument begründet seinen
Planungsanker ausdrücklich damit, dass ein Sonntagstermin unplausibel
ist. Anders als alle Datumsangaben in § 6 tragen die Handgriff-Termine
kein Wochentags-Etikett, wodurch der Fehler unsichtbar bleibt — und drei
der vier Handgriffe (H-1, H-2, H-6) sind Vorbedingungen des als „scharf"
gekennzeichneten S5-Termins.
*Was richtig wäre:* Fr 14.08. oder Mo 17.08., mit Wochentag im Feld.
*Gemessen an:* eigene Wochentagserhebung für 11.08./13.08./14.08./16.08./
17.08./21.08./28.08./11.09./12.09./02.10./09.10./23.10./13.11./15.11.
Positivkontrolle: alle neun Etiketten in § 6 und beide Etiketten in § 1
(Di 11.08., So 15.11.) sind korrekt — der Prüfweg bestätigt richtige
Etiketten und fängt trotzdem die vier fehlenden.

**P-12 · Der „späteste Baustart" ist mit der eigenen Dauerangabe
unvereinbar**
*Fundstelle:* Akquiseplan § 3.1, Zeile S4.
*Was falsch ist:* S4 trägt die Dauer „3–4 Wochen" und den Endpunkt S3 =
Fr 11.09.; daraus folgt als **spätester** Start bei der konservativen
(vierwöchigen) Lesart **Fr 14.08.** Das Feld nennt „Baustart spätestens
**Mo 17.08.2026**" — das sind 25 Tage bis 11.09., also 3½ Wochen; mit der
Vier-Wochen-Variante endet S4 erst am **14.09.**, drei Tage nach S3. Ein
„spätestens" muss die längste Dauer der eigenen Spanne verwenden, sonst
ist es keine Untergrenze. Kein Zählweg angegeben.
*Was richtig wäre:* „spätestens Fr 14.08. (bei 4 Wochen) bzw. Fr 21.08.
(bei 3 Wochen)" mit Zählweg — und die Folge für S5 (das dann am selben
Tag liegen müsste) benennen.
*Gemessen an:* eigene Datumsrechnung (11.09. − 28 Tage = 14.08.;
17.08. + 28 Tage = 14.09.; 17.08.→11.09. = 25 Tage).

**P-13 · Begründung von N-3 steht an der zitierten Fundstelle nicht und
wird von ihr widerlegt**
*Fundstelle:* Akquiseplan § 5, Bemerkungsspalte KPI-5, und § 9, N-3.
*Was falsch ist:* Der Plan begründet die Untauglichkeit der 10-%-Schwelle
damit, sie stamme „aus einem Bericht, der Outbound noch als E-Mail-/
LinkedIn-Betrieb dachte (§ (c) Punkt 4 dort)". § (c) **Punkt 4** sagt
etwas anderes: Er kritisiert, dass **MKT-AKQ** um Online-Kanäle herum
gebaut sei. Der Bericht selbst stuft LinkedIn in **Punkt 1** ausdrücklich
als „Fehlbesetzung" ein und setzt in **Punkt 3** den Founder-led
Direktvertrieb auf Rang 1. Die Zuschreibung „der Bericht dachte
LinkedIn-Betrieb" kehrt die Aussage der Quelle um; belastbar ist allein,
dass der Bericht E-Mail damals noch als Kanal mitführte (die Rechtsmatrix
kam später).
*Was richtig wäre:* Die Fundstelle korrigieren (§ (c) Punkt 3, „Telefon,
E-Mail, Vor-Ort") und die Begründung auf den belegbaren Teil verkürzen.
*Gemessen an:* `R00-planpruefung-2026-08-09.md` Z. 395–427, im
Zusammenhang gelesen. Positivkontrolle: die drei anderen R00-Zitate des
Plans (Empfehlungsmarkt-Satz, „100+", „z. B. 3/Woche") stehen wörtlich an
den angegebenen Stellen.

**P-14 · Systematisch fehlerhafte interne Verweise, darunter das
Navigationsbild des Regelwerks**
*Fundstelle:* Regelwerk § 1 (ASCII-Prüfkette), § 2.3 (W-b3), § 6 (F-09),
sechs Stellen mit „§ 11, O-x"; Akquiseplan § 2 (K2) und § 2/§ 3.2/§ 6
(„§§ 3–4").
*Was falsch ist:* Gemessen über die Überschriftenliste beider Dateien:
- Prüfkette [1] KANAL → „**§ 7 hier**"; der Kanal-Abschnitt ist **§ 4**.
- Prüfkette [4] BETRIEB → „**§ 9 hier**"; der Betriebs-Abschnitt ist **§ 7**
  (§ 9 sind die roten Linien).
- W-b3 → „**§ 9.3**" und F-09 → „**§ 9.2**"; existieren nicht, gemeint
  sind § 7.3 und § 7.2.
- **Sechs** Verweise „§ 11, O-1/O-2/O-3/O-4" bzw. „(§ 11)"; die offenen
  Punkte stehen in **§ 10**, § 11 ist die Dokumenten-Tabelle.
- Akquiseplan: „Was protokolliert wird und wie, steht im Regelwerk
  (**§ 7 K2 dort**)" — § 7 des Regelwerks kennt kein K2; der
  Anlassnachweis steht in § 4.2 (R-A2.1) und § 6 (F-10).
- Akquiseplan: D2- und Weg-b-Pflichten „ausgeführt in … **§§ 3–4**" (drei
  Stellen) — § 4 sind die Kanalregeln, die Weg-b-Pflichten stehen in
  § 2.3.
Das trifft ausgerechnet den Einstieg (Prüfkette) und die vier
Weg-b-Pflichten, also die Stellen mit Verweisfunktion.
*Was richtig wäre:* Verweise nachziehen; CLAUDE.md verlangt ohnehin
Abschnittsbezug statt Zeilen — hier sind die Abschnittsnummern selbst
veraltet.
*Gemessen an:* Überschriftenliste beider Dateien gegen alle
Paragraphen-Verweise, maschinell extrahiert.

**P-15 · Fehlender Vorwärtsverweis: Die A7-Wiedergabe verbietet, was § 5.1
erlaubt**
*Fundstelle:* Regelwerk § 4.5, Kopfzitat zu A7 („**Die Adressen dürfen
nicht aus Impressen stammen**") und R-A7.3 — gegen § 2.2 und § 5.1.
*Was falsch ist:* Der Weg-b-Entscheid kippt diesen Satz, aber die Stelle,
an der der Leser ankommt, trägt keinen Vorwärtsverweis. Verschärfend: Die
Kollisionsregel des Dokuments („Bei jedem Widerspruch … **gewinnt die
Rechtsmatrix**", § „Was dieses Dokument ist") führt hier zum falschen
Ergebnis, weil die Rechtsmatrix beide Stände enthält — den A7-Satz und
den späteren D3-Kasten. Auch in der Rechtsmatrix selbst fehlt am
A7-Bullet der Vorwärtsverweis; das ist ein Nebenbefund für MKT-HANDEL,
den keines der beiden Dokumente meldet.
*Was richtig wäre:* Vorwärtsverweis in § 4.5 („überholt durch den
D3-Punkt-2-Entscheid, s. § 2.2/§ 5.1 — der Vorbehalt der
Aufsichtsauffassung bleibt") und Nebenbefund an MKT-HANDEL.
*Gemessen an:* Rechtsmatrix Z. 583 gegen Z. 804–821; Regelwerk § 4.5
gegen § 2.2/§ 5.1.

**P-16 · Die Gleichsetzung „Verfallsfrist = Löschfrist des VVT-Eintrags"
wird ungeprüft weitergereicht**
*Fundstelle:* Regelwerk § 2.1 und § 3 Pflicht 3 („Zwei inhaltliche
Vorgaben stehen bereits fest"), gegen § 10 O-2.
*Was falsch ist:* Der D3-Kasten setzt die 24 Monate „zugleich" als
„dokumentierte Löschfrist fürs Verarbeitungsverzeichnis (**D2 Punkt 3**)".
D2 Punkt 3 verlangt aber den VVT-Eintrag „für die **Zielkundenliste**" —
also für die Kaltkontakte, für die das Regelwerk in O-2 selbst feststellt,
dass **keine** Frist entschieden ist. Damit ist D2 Pflicht 3 gerade nicht
zur Hälfte erledigt; die Überschrift „Zwei inhaltliche Vorgaben stehen
bereits fest" liest sich anders. Das Regelwerk erkennt die Verwechslung
(„⚠️ Nicht verwechseln"), zieht daraus aber keine Folge und meldet den
Defekt des D3-Kastens nicht als Nebenbefund an MKT-HANDEL zurück. Nicht
übernommen ist außerdem die zweite Hälfte des Quellvorschlags: „24 Monate
… **danach Einwilligung einholen**" (A5) — was mit einer Löschfrist von
24 Monaten ohnehin kollidiert.
*Was richtig wäre:* Klarstellen, dass die 24 Monate den VVT-Eintrag der
**Kundenliste** betreffen, D2 Punkt 3 (Zielkundenliste) dagegen offen
bleibt; Rückmeldung an MKT-HANDEL zur Präzisierung des D3-Kastens.
*Gemessen an:* Rechtsmatrix D2 Nr. 3 (Z. 785), D3-Kasten 1 (Z. 795–802),
A5 Z. 425; Regelwerk § 2.1, § 3 Pflicht 3, § 10 O-2.

**P-25 · Der FUND2-Vorbehalt fehlt genau dort, wo der Plan einer
Mix-Entscheidung am nächsten kommt**
*Fundstelle:* Akquiseplan § 4.3 (Tabelle „Fristaufgabe / Aufbauaufgabe")
und § 6 (Terminplan).
*Was falsch ist:* § 4.3 weist Kanäle Aufgaben zu („Trägt: K2 …, gestützt
durch K4 und K3" / „K1, K4, K5"), legt Mengen- und Messgrößen je Aufgabe
fest und datiert K1 um; § 6 setzt daraus Termine und eine Zielgröße
(„Welle 1 versandt, Zielgröße ≥ 100"). Der Schutzkasten am Ende von § 4.3
(„Was dieser Abschnitt NICHT sagt") bestreitet nur, dass die Frist
unerreichbar sei — den FUND2-Vorbehalt wiederholt er nicht. Das Regelwerk
macht es an der entsprechenden Stelle besser (Kopf: „für die Auswahl- und
Priorisierungsregeln (§§ 6, 8) ist es erheblich").
*Was richtig wäre:* Denselben Vorbehalt an § 4.3 und § 6 wiederholen —
mit der Aussage, welche Zeilen der Persona-Befund kippen kann.
*Gemessen an:* Akquiseplan Kopf-Vorbehalt und Geltungsgrenze gegen
§ 4.3/§ 6; Regelwerk Kopf-Vorbehalt als Vergleichsmaßstab.

### HINWEIS

**P-17 · Die Schwelle „~100 Stück" trägt keinen Zählweg und wird zur
harten Zielgröße.**
Akquiseplan § 4.3 („bei einer erwarteten Quote von 1–3 % ist eine Welle
unter ~100 Stück statistisch stumm") — die Klammer begründet nur den
50er-Fall. Eigene Rechnung: bei n = 100 und p = 1 % ist P(0) = 0,366,
P(1) = 0,370 — ein Nullergebnis bleibt fast gleich wahrscheinlich, die
Schwelle 100 ist damit nicht begründet. In § 6 wird daraus „Zielgröße
≥ 100" ohne Belegstufe und ohne A-Nummer im Annahme-Register.

**P-18 · Richtiges Zitat, erweiterter Geltungsbereich.**
Akquiseplan § 10: „Das Positionierungspapier setzt bewusst **keine** harte
Ober- oder **Untergrenze** (§ 3.2 dort, ‚bevor FUND2 die Entscheiderfrage
beantwortet hat')". Das Zitat ist wörtlich richtig, gehört aber zu dem
Satz „Eine harte **Obergrenze** (Zimmerzahl, MA-Zahl) wird bewusst NICHT
gesetzt". Eine Aussage über eine Untergrenze steht weder in § 3.1 noch in
§ 3.2 noch in § 3.3 (gelesen, Z. 95–150).

**P-19 · Bedingung einer übernommenen Empfehlung weggefallen.**
Akquiseplan § 3.2 Pfad (b) zitiert R00 Top-5 Punkt 2 als Vorschlag eines
Notfallpfads; die Quelle bindet ihn an eine Bedingung: „Notfallpfad
**nach 4 Wochen**: Akquise startet unter Arbeitstitel". Aus einem
gestuften Rückfallpfad wird so eine sofortige Entweder-oder-Entscheidung
(E-A1).

**P-20 · „Ungeklärt" wird zur Regel erhoben, ohne als Vorsichtsregel
gekennzeichnet zu sein.**
Regelwerk R-A1.3: „**Das Kontaktformular des Hotels ist kein
Ersatzweg.**" Die Quelle sagt: „Ein Kontaktformular des Hotels ist
rechtlich **nicht geklärt**". Richtung ist konservativ, aber die
Belegstufe kippt von „offen" auf „entschieden". Das Regelwerk macht es
bei R-A7.6 vorbildlich anders („ungeklärt, nicht als erlaubt").

**P-21 · STREITIG-Markierung beim Newsletter-Tracking verloren.**
Regelwerk R-A6.3 und Akquiseplan K5 führen „Tracking braucht eine eigene
Einwilligung" als feststehend; die Quelle markiert die Frage als
„**STREITIG**, ohne deutsche Rechtsprechung" und nennt die
Selbsteinschränkung des EDSA (Rn. 56). Folge: ein K.-o.-Kriterium für die
Werkzeugauswahl steht härter da als sein Beleg.

**P-22 · Notationskollision in der Rückwärtsrechnung.**
Akquiseplan § 3.1: „Alle Dauerangaben der Stufen **①–④** sind
④-Annahmen". Gemeint sind die Stufen S1–S4; ① und ④ sind in der
Belegstufen-Legende desselben Dokuments mit gegenteiliger Bedeutung
belegt („selbst gelesen" / „kein Beleg").

**P-23 · Ein bereits verstrichener Termin wird als anstehend
wiedergegeben.**
Akquiseplan § 3.1 zitiert den StB-Anruf als terminkritisch geführt,
lässt aber weg, dass STATUS.md ihn als „**User-Handgriff Mo 10.08.**"
führt — ein Datum vor dem Erstellungstag. Für die Aussage „S5 liegt drei
Tage nach heute" ist das erheblich (ein Beleg trägt den Stand seines
Datums).

**P-24 · Uneinheitliche Bezeichnung des Entscheids.**
Akquiseplan spricht von „D3.2-Weg-b-Pflichten", das Regelwerk von „D3
Punkt 2". Die Rechtsmatrix kennt nur „D3" mit nummerierten Punkten; eine
Gliederungsebene „D3.2" existiert dort nicht.

---

## E. Zusammenzählung

| Schweregrad | Anzahl | Nenner |
|---|---|---|
| **KRITISCH** | **2** | von 25 Befunden |
| **WICHTIG** | **15** | von 25 Befunden |
| **HINWEIS** | **8** | von 25 Befunden |
| **Summe** | **25** | |

Verteilung auf die Dokumente: Akquiseplan 10 (P-05, P-06 anteilig, P-11,
P-12, P-13, P-17, P-18, P-19, P-22, P-23, P-25), Regelwerk 13, beide
gemeinsam 2 (P-06, P-07). Verteilung auf die Kategorien: (1) 4 · (2) 1 ·
(3) 4 · (4) 6 · (5) 1 · Verifikationswerkzeug 3 · Verweise/Form 6.

**Vollständigkeits-Vorbehalt:** Diese Zahlen sind die Befunde **eines
abgebrochenen Laufs**. Sie sind keine Aussage darüber, wie viele Befunde
die Dokumente enthalten — die nicht abgeschlossenen Schritte in § C sind
mitzulesen.

---

## F. Die beiden Pflichtfragen

### „Welche Verfälschung hätte mein Verfahren NICHT gefangen?"

1. **Eine falsche Rechtsaussage, die in beiden Dokumenten UND in der
   Rechtsmatrix gleich falsch ist.** Ich habe die Prüfdokumente gegen die
   Rechtsmatrix gemessen, nicht gegen die Normen und Urteile. Wäre die
   Rechtsmatrix an einer Stelle falsch, hätte ich die getreue Übernahme
   als korrekt abgehakt. Beispiel, das ich ausdrücklich **nicht** geprüft
   habe: ob § 7 Abs. 2 Nr. 2 UWG heute wirklich die elektronische Post
   trägt (die Umnummerierung ist in der Quelle selbst nur vierfach
   indirekt belegt).
2. **Eine erfundene Zahl in einer Quelle, die ich nur ausschnittsweise
   gelesen habe.** Die Ø-Werte und Kreiszahlen habe ich zeilengenau
   gegengelesen — aber hätte die Regionalstatistik-Datei selbst einen
   Übertragungsfehler aus der CSV, wäre er unsichtbar geblieben. Ich habe
   keine einzige Zahl an der amtlichen Primärquelle nachgezogen.
3. **Eine inhaltlich falsche, aber wörtlich korrekte Feldbegründung im
   Feldregister (§ 6).** Ich habe die 18 Felder auf Vollständigkeit und
   auf den Stufen-2-Maßstab geprüft, nicht jede einzelne Begründung
   fachlich bewertet. Eine plausible, aber sachlich falsche Begründung
   (etwa zu F-02 Rechtsform) hätte ich durchgelassen.
4. **Eine Auslassung, für die es keinen Anker gibt.** Wenn die Session
   eine ganze Pflicht aus einem Rechtsmatrix-Abschnitt weggelassen hätte,
   den ich zwar gelesen, aber nicht als Pflichtenliste erkannt habe
   (z. B. B2/B3 — Abmahnkosten, Vertragsstrafen-Deckel: **kein einziger
   Satz aus Teil B ist in eines der beiden Dokumente eingeflossen, und
   ich habe das erst beim Schreiben dieser Antwort bemerkt** — ob das
   eine Lücke ist oder eine bewusste Scope-Grenze, habe ich **nicht**
   geprüft).
5. **Alles, was nur als Bild/Gespräch existiert.** Ob die
   K2-Anlassquellen („Pilot-Umfeld", „Stammtische") real tragfähig sind,
   kann kein Repo-Prüfer widerlegen.

### „Hätte ich meine Funde auch OHNE die vorgegebenen Kategorien gefunden?"

**Teils ja, teils klar nein — und die Kategorien haben mich in einem Fall
auch abgelenkt.**

- **Ohne Kategorien gefunden hätte ich:** P-10 (Kreiszählung), P-11
  (Sonntag), P-12 (Baustart), P-14 (Verweise), P-03/P-04 (Skriptlauf) —
  das sind Funde aus Nachrechnen und Werkzeuglauf, die ich reflexhaft
  mache. P-01 vermutlich auch, weil ein „erfüllt" zwischen fünf „nicht
  gebaut" auffällt.
- **Nur wegen der Kategorien gefunden habe ich:** P-06 und P-07. Beide
  sind **Abwesenheiten** — ein fehlender Vorbehalt erzeugt keine
  auffällige Textstelle. Ich habe sie nur gefunden, weil Kategorie (4)
  mich gezwungen hat, von der Quelle her rückwärts zu suchen („was steht
  in A7/A3, das im Zieldokument fehlt?") statt vorwärts zu lesen. Ohne
  diese Leserichtung wäre der wichtigste Befundtyp komplett ausgefallen.
  Dasselbe gilt für P-16.
- **Kategorie-Nebenwirkung:** Kategorie (2) hat mich zuerst nur zählen
  lassen (6/6, 4/4 — sieht sauber aus). Erst die Frage aus Kategorie (1)
  („behauptet irgendwo jemand mehr Erlaubnis?") hat mich dazu gebracht,
  den **Status** der sechsten Pflicht zu prüfen statt ihre Anwesenheit —
  daraus wurde P-01, der schwerste Befund. Eine Vollzähligkeitsfrage
  allein hätte ihn verdeckt: Anwesenheit ist nicht Wirksamkeit.
- **Was mir die Kategorien NICHT gegeben haben:** den Blick auf Teil B
  der Rechtsmatrix (s. Frage 1, Punkt 4). Keine der fünf Kategorien
  fragt „Was aus der Quelle ist gar nicht erst angekommen?" — und genau
  diese Frage ist die, die ich beim nächsten Durchgang zuerst stellen
  würde.

---

*Erstellt als unabhängiger Prüfer, Runde R08-A. Prüfstand `d11535f`.
Lauf durch Session-Limit abgebrochen — offene Prüfschritte in § C.
Kalender- und Rechenwerte per Werkzeug erhoben, nicht aus dem Gedächtnis.*
