# R07-A — Prüfprotokoll zur Einarbeitung der R05-A-Befunde in `fund/wettbewerbsbild.md`

> **Wer prüft:** unabhängiger Prüfer mit frischem Kontext, an Erstellung und
> Nacharbeit nicht beteiligt. Geprüft wurde der **Arbeitsbaum-Zustand** des
> Papiers gegen die archivierten Rohbelege — **nicht** gegen seine
> Versionsgeschichte.
>
> **Prüfstand:** `fund/wettbewerbsbild.md`, **262.121 Bytes**, **3.735 Zeilen**,
> MD5 `43ee79f60c912b143652d664dc23c03d`, mtime 10.08.2026 13:43.
> Prüflauf 10.08.2026 ab 13:43 MESZ.
>
> **Verfahrensauflage eingehalten:** kein `git diff`, kein `git status`, kein
> `git show`, kein Vergleich gegen HEAD oder frühere Commits. Jeder Fund unten
> ist inhaltlich begründet (Quelle · Fundstelle · Wortlaut · Rechenweg).
>
> **Womit geprüft:** `sensibel/rohbelege-R05-A/` (a1–a6) und
> `sensibel/rohbelege-R06-A/`, jeweils `.txt` **und** `.html` — bei Aussagen,
> die in der Auszeichnung stecken (Tabellenzellen, `data-gtm-label`,
> `<dialog>`, Karussell-Slides, `canonical`), wurde am Roh-HTML gemessen.
> Alle Zählungen unten sind **von mir selbst ausgeführt**, keine delegiert.
>
> **Schreibrecht:** ausschließlich diese Datei. Kein git-Kommando.

---

## 0. Ergebnis in fünf Sätzen

Die Nacharbeit ist **handwerklich deutlich besser als die Erstfassung** — von
26 handlungspflichtigen Posten habe ich 24 am Rohbeleg nachgemessen und
**23 davon bestätigt**, darunter mehrere Reparaturen (H-1, H-2, H-5, H-8,
H-9, W-7, W-16), die zeichen- und zählgenau aufgehen und einen
nachvollziehbaren Zählweg mitliefern. **Ein Befund ist jedoch falsch
repariert worden**: W-8 setzt eine **Mindestlaufzeit von „12 Monate" als
wörtliches Zitat**, wo die benannte Quellzeile **„3 Monate"** sagt — und die
darauf gebaute Einstiegsrechnung überhöht den Betrag um **Faktor 3,2**
(11.548 statt 3.637). Dazu kommen **eine neu erzeugte Zahlenkollision**
(dieselbe Datei trägt für „Hotel" an einer Stelle 11, an anderer den Bereich
13–284, weil zwei unbenannte Zählmethoden gemischt wurden), **eine falsche
Zahl im neuen Beleg-Anhang B12** (a4 „35 Dateien ohne Anker" — es sind 11),
**eine doppelt belegte Prüfpunkt-ID (P22)** und **ein neu angekündigter
Prüfpunkt P23, der im Register § 7 fehlt**. Schließlich trägt das
**Änderungsprotokoll § 8 keine einzige R7-Zeile**, obwohl „R7" 45-mal im
Text steht. **Kein erfundener Sachverhalt** wurde gefunden — der eine harte
Fehler ist ein Zahlen-/Schlüsselfehler, kein Phantasiebefund.

---

## 1. Antwort auf Prüffrage (a) — Disposition, kategorienweise MIT NENNER

**Vorbemerkung: der Nenner des Trägers stimmt nicht.** Bevor ich die
Disposition melde, muss der Bezugsrahmen richtiggestellt werden, weil sonst
jede Quote auf falscher Basis steht.

`protokolle/R06-nacharbeit-R05A-befunde.md` § 1 behauptet:
„**44 nummerierte Positionen** in fünf Kategorien: 4 KRITISCH · 17 WICHTIG ·
10 HINWEIS · 3 Verdacht · 6 ‚nicht prüfbar'" und „Über die **37
handlungspflichtigen** Befunde (K+W+H)".

Selbst nachgezählt an `protokolle/R05-A-pruefer.md`:
- K-1…K-4 = **4** · W-1…W-17 = **17** · H-1…H-10 = **10** · V-1…V-3 = **3**
  → **34 nummerierte** Positionen, plus 6 unnummerierte („nicht prüfbar") = **40**.
- **4 + 17 + 10 = 31**, nicht 37.

Beide Zahlen des Trägers sind damit zu hoch (**44 → 34** bzw. **40**;
**37 → 31**). Die Statustabelle desselben Abschnitts (7 + 6 + 24 = 37) ist
mit den eigenen Detaillisten in § 2 ebenfalls nicht deckungsgleich: § 2.1
führt 10 WICHTIG als nicht eingearbeitet, § 2.3 zehn HINWEIS — zusammen
**20**, nicht 24; § 2.2 ist mit „(4, Restposten benannt)" überschrieben,
listet aber **fünf** Zeilen (K-4, W-6, W-9, W-14, W-17), und TEIL 2 rechnet
konsequenterweise mit 5. Das ist derselbe Nenner-Verlust, den der
R05-A-Prüfer am Papier gerügt hat — hier eine Ebene höher, in der Bilanz
über die Reparatur. **Schweregrad: WICHTIG** (betrifft den Träger, nicht das
Papier).

**Meine eigene Disposition am Papier**, Nenner aus der R05-A-Liste:

| Kategorie | Nenner | vollständig repariert (von mir am Rohbeleg bestätigt) | fehlerhaft repariert | Träger benannt / Rest offen | nicht geprüft |
|---|---|---|---|---|---|
| **KRITISCH** K-1…K-4 | **4** | **3** (K-1, K-2, K-4) | 0 | **1** (K-3, Reparaturteil (c) offen) | 0 |
| **WICHTIG** W-1…W-17 | **17** | **14** | **1** (W-8) | **1** (W-17, Rest ausdrücklich benannt) | **1** (W-15, liegt in `R05-A-fundstellen.md`) |
| **HINWEIS** H-1…H-10 | **10** | **10** | 0 | 0 | 0 |
| **Verdacht** V-1…V-3 | **3** | 0 | 0 | **1** (V-1 teilweise gemessen) · **2** (V-2/V-3 ausdrücklich nicht verfolgt) | 0 |
| **Summe** | **34** | **27** | **1** | **5** | **1** |

**Kein Befund der Liste ist unbehandelt geblieben.** Jeder der 34 ist im
Papier entweder repariert, ausdrücklich als Rest benannt oder (V-2/V-3)
ausdrücklich nicht verfolgt. „Hinweis" wurde nirgends als
Erledigungs-Kategorie missbraucht — die zehn HINWEIS-Befunde sind
ausnahmslos sachlich abgearbeitet, und zwar auf demselben Qualitätsniveau
wie die KRITISCH-Befunde. Das ist die deutlichste Verbesserung gegenüber
R5 (L-13).

**Zwei Einschränkungen dieser Bilanz, nicht geglättet:**
1. **K-3 ist unvollständig repariert.** Teil (a) und (b) der Reparatur
   (L-B7 ausgeschrieben, zwei Einstufungen auf „—", drei mit
   Teilleistungs-Vermerk) sind umgesetzt und im Papier sichtbar. Teil (c) —
   „Einen Satz ergänzen, der die Verteilung offenlegt (‚55 Einstufungen,
   davon 1× N, 1× —')" — **fehlt**. Suchraum: ganzes Dokument, Muster
   `5[0-9] Einstufungen|Einstufungen, davon|Verteilung`; die vier Treffer
   auf „Verteilung" betreffen Straiv-Reviews (Z. 314/315/437), die
   DE/CH/AT-Streuung (Z. 1217) und die Brandnamic-Rubriken (Z. 3224) —
   keiner ist der verlangte Satz. Positivkontrolle desselben Laufs:
   „Verteilung" traf 5× ✔, das Muster ist nicht tot.
   ⚠️ **Verschärfend:** R7 hat die Verteilung durch W-2 **einseitiger**
   gemacht — TC Hotel Marketing war laut Papier „in B4.1 der **einzige**
   Eintrag mit ‚—'" und ist jetzt W1. Selbst nachgezählt über B4.1, B5.1,
   B6.2 und B7.2 (54 Einstufungen): **0× N**, **2× „—"** (beide in B5.1:
   Unternehmermanufaktur, HOGARAT), alles Übrige W1/W2. Genau die Zahl,
   vor der K-3 gewarnt hat, steht damit unkommentiert im Papier.
2. **W-15 habe ich nicht geprüft** — der Befund betrifft
   `protokolle/R05-A-fundstellen.md`, nicht das Papier; die Datei war nicht
   Gegenstand meines Auftrags. „Nicht geprüft", nicht „in Ordnung".

---

## 2. KRITISCH

### K-A · B6.2 Punkt 1 — „Mindestlaufzeit 12 Monate" ist als wörtliches Zitat gesetzt; die benannte Quellzeile sagt „3 Monate". Die daraus gerechnete Einstiegssumme ist um Faktor 3,2 zu hoch.

**Fundstelle im Papier:** B6.2, Feldbefund 1, der ⚠️-Kasten „Einmalkosten
und Bindung — nachgetragen R7, Prüferbefund R05-A W-8" (Z. 2347–2358).

**Wortlaut dort:**
> „RevenueRise nennt im selben Absatz ‚Monatspauschalen ab EUR / CHF 879
> **plus einmalige Setup-Gebühr von EUR / CHF 1.000**' und an zweiter Stelle
> ‚**Mindestlaufzeit 12 Monate**' (`a4/rrise_rm.txt` Z. 11 und 71)."

und daraus abgeleitet:
> „die Mindestrechnung für den Einstieg bei RevenueRise lautet
> **879 × 12 + 1.000 = 11.548 EUR/CHF**, nicht 879."

**Wortlaut am Rohbeleg** (`sensibel/rohbelege-R05-A/a4/rrise_rm.txt`,
**Z. 71**, von mir selbst gelesen):
> „RevenueRise bietet transparente Monatspakete ab EUR / CHF 879 ohne
> Provisionsmodell — die Investition richtet sich nach dem Leistungsumfang.
> Dazu kommt eine einmalige Setup-Gebühr von EUR / CHF 1.000,
> **Mindestlaufzeit 3 Monate.**"

**Vollständige Gegenprobe über den gesamten Rohbeleg-Bestand**
(`grep -rn --include="*.txt" "Mindestlaufzeit"` über a1–a6, Ausgabe
vollständig gelesen, nicht abgeschnitten): **genau drei Treffer**
- `a4/rrise_preise.txt` Z. 109: „Ja, die Mindestlaufzeit beträgt **je nach
  Paket 3 oder 6 Monate**."
- `a4/rrise_rm.txt` Z. 71: „**Mindestlaufzeit 3 Monate**."
- `a4/sh_de_agb.txt` Z. 154: Smart-Host-AGB (anderer Anbieter).

**Die Zeichenfolge „Mindestlaufzeit 12 Monate" existiert im geprüften
Suchraum (alle `.txt` unter `sensibel/rohbelege-R05-A/`) nicht.**
Positivkontrolle im selben Lauf: das Muster `Mindestlaufzeit` traf 3× ✔ —
der Nulltreffer ist echt und kein Werkzeugfehler.

**Drei Ebenen, warum das mehr ist als ein Zahlendreher:**

1. **Es steht in Anführungszeichen mit Zeilenanker.** Das ist kein
   Verdichtungsfehler, sondern ein **Pseudo-Zitat mit falschem Wert an einer
   ausdrücklich benannten Fundstelle** — die schärfste Form von L-01. Ein
   Prüfer, der Z. 71 aufschlägt, findet dort das Gegenteil.
2. **Die Folgerechnung wandert nach MKT-HANDEL.** Der Kasten begründet
   ausdrücklich die Streichung des Begriffs „Einstiegskorridor" damit, dass
   eine Preisorientierung „ohne Einmalkosten und Bindung unvollständig" sei
   — und liefert dann selbst die falsche Bindung. Richtig gerechnet nach
   Z. 71: **879 × 3 + 1.000 = 3.637 EUR/CHF**. Das Papier nennt **11.548**.
   Abweichung **+7.911 / Faktor 3,18**, und zwar in der Richtung
   „Wettbewerber ist teurer, als er ist" — also zugunsten der eigenen
   Preisposition.
3. **Der Träger sagt es richtig, das Papier falsch.**
   `R06-nacharbeit-R05A-befunde.md` TEIL 2 führt W-8 als „✅ repariert" mit
   „Setup-Gebühr 1.000 + Mindestlaufzeit **3 Monate** …
   **Mindestrechnung 3.637** genannt". Träger und Papier weichen in genau
   dieser Zahl voneinander ab. **Damit ist die Statusangabe „✅ repariert"
   für W-8 als Beleg wertlos** — sie beschreibt eine Reparatur, die im
   Papier so nicht steht.

**Zweiter, kleinerer Mangel an derselben Stelle:** Die Quelle ist in sich
nicht einheitlich — `rrise_preise.txt` Z. 109 sagt „je nach Paket 3 oder 6
Monate". Eine quellentreue Fassung müsste beide Angaben führen; das Papier
nennt nur eine (und die falsch).

**Ursachen-Diagnose — ausdrücklich VERDACHT, nicht belegt:** Die „12"
könnte aus `a4/rrise_preise.txt` Z. 112 stammen („Bei **Jahresverträgen (12
Monate)** gewähren wir einen Rabatt von 10%") — dort ist 12 Monate eine
**optionale Rabattlaufzeit**, nicht die Mindestlaufzeit. Alternative
Kandidaten im selben Bestand: melevo „Mindestlaufzeit 12 Monate" (B5.3) und
Smart Host „Ja, 12 Monate" (`a4/faq_cms.txt` Z. 71). Welche es war, ist aus
dem Bestand nicht entscheidbar; belegt ist nur der Fehler, nicht sein Weg.
Der Fehlertyp ist in jedem Fall „**Zahl vom falschen Schlüssel**" — die
Zahl trägt den Scope ihrer ZEILE.

**Schweregrad: KRITISCH.**

**Reparatur:** „12" → **„3"**; die Rechnung auf **879 × 3 + 1.000 = 3.637
EUR/CHF** korrigieren; die zweite Quellangabe („je nach Paket 3 oder 6
Monate", `a4/rrise_preise.txt` Z. 109) danebenstellen, weil die Quelle
selbst nicht einheitlich ist; den Träger TEIL 2 unberührt lassen — er ist
hier richtig. Zusätzlich: Weil dieser Fehler eine Zahl an den falschen
Schlüssel gebunden hat, gehören **alle in R7 neu eingesetzten Zahlen
desselben Abschnitts** einmal gegen ihre Zeile geprüft (B6.2 ist der
Abschnitt mit den meisten R7-Zahlen).

---

## 3. WICHTIG

### W-A · B4.1 vs. B4.4/B4.5 — Für dieselbe Datei stehen jetzt zwei verschiedene „Hotel"-Zahlen im Dokument, weil R7 eine andere, nicht benannte Zählmethode benutzt hat als der Bestand

**Fundstellen im Papier:**
- B4.1, Zeile „Die Hotelberater GmbH" (Z. 1655): „Positivkontrolle ‚Hotel'
  **11 Treffer** ✔" für `a1/dhb_start.txt`
- B4.1, L-B1b-Kasten (Z. 1677): „Positivkontrolle ‚Hotel' **50 Treffer** ✔"
  für `a1/tc_start.txt`
- B4.4 Punkt 1 (Z. 1898): „Positivkontrolle ‚Hotel' **30 Treffer** ✔"
  für `a1/pla_start.txt`
- **dagegen** B4.4 Punkt 6 (Z. 1933) und B4.5 (Z. 1952): „Positivkontrolle
  ‚Hotel' traf auf jeder Seite, **13–284 Treffer**"

**Eigene Messung** über alle 16 Anbieter-Rohtexte des Strangs
(14 `*_start.txt` + `aus_hotel.txt` + `hmg_service.txt`), vier Methoden
nebeneinander:

| Datei | `grep -o "Hotel"` | `grep -oi "hotel"` | `grep -c` (Zeilen) | `grep -ci` (Zeilen) | Papier |
|---|---|---|---|---|---|
| `dhb_start.txt` | 11 | **13** | 9 | **11** | **11** |
| `pla_start.txt` | 29 | 31 | 29 | **30** | **30** |
| `tc_start.txt` | 60 | 68 | 45 | **50** | **50** |
| `mp_start.txt` (Maximum) | 275 | **284** | 170 | 176 | — |

**Befund, dreifach eindeutig:** Die drei in R7 neu eingesetzten Zahlen
(11 · 30 · 50) sind **case-insensitive ZEILEN-Zählungen** (`grep -ci`) —
drei von drei stimmen exakt. Der im Bestand stehende Bereich **13–284** ist
dagegen eine **case-insensitive TREFFER-Zählung** (`grep -oi`) — Minimum
`dhb_start.txt` = 13, Maximum `mp_start.txt` = 284, ebenfalls exakt.

Daraus folgen zwei Mängel:

1. **Das Dokument widerspricht sich an einer Datei.** `a1/dhb_start.txt`
   trägt in B4.1 den Wert **11**, fällt aber in B4.4/B4.5 unter den Bereich
   **13–284** — und ist dort als Mitglied genau dieser 16 Rohtexte
   mitgemeint. Wer nachmisst, hält entweder die 11 oder den Bereich für
   falsch. Beide sind für sich richtig; falsch ist, dass die Methode
   nirgends dabeisteht.
2. **„Treffer" ist die falsche Bezeichnung.** Alle drei R7-Zahlen sind als
   „Treffer" ausgewiesen, sind aber Zeilen. Die tatsächlichen Trefferzahlen
   liegen um 20–36 % höher (tc: 68 statt 50; pla: 31 statt 30; dhb: 13
   statt 11). Der Baustein `windows-powershell` verlangt hier ausdrücklich:
   „`grep -c` zählt ZEILEN, nicht Treffer … Wird eine Zeilen-Zählung
   bewusst verwendet, gehört der Zählweg an die Zahl."

**Verschärfend: die Methode ist auch R7-intern uneinheitlich.** In B8.2
(Z. 2619) nennt dieselbe Session für Bräu „Positivkontrolle ‚Hotel'
**65 Treffer** ✔" — das ist `grep -o "Hotel"` **case-sensitiv** auf
`a3/braeu-dach.txt` (von mir bestätigt: 65). Innerhalb einer Runde stehen
damit **drei verschiedene unbenannte Zählmethoden** nebeneinander.

**Sachliche Folge:** gering — es sind Positivkontrollen, sie haben in allen
Fällen gefeuert, keine inhaltliche Aussage kippt. Beschädigt ist die
Nachprüfbarkeit, und zwar an genau den Stellen, die R7 neu gesetzt hat.

**Schweregrad: WICHTIG.**

**Reparatur:** An jede der vier Stellen den Zählweg schreiben (z. B.
„11 Zeilen mit Treffer, `grep -ci`"), **oder** — besser — die drei
R7-Zahlen auf dieselbe Methode wie der Bestand umstellen
(`grep -oi`: dhb 13 · pla 31 · tc 68), damit der Bereich 13–284 wieder
geschlossen ist. In B8.2 den Zählweg („`grep -o`, case-sensitiv")
ergänzen.

---

### W-B · B12 Grenze 1 — „a4 35 Dateien ohne Canonical-Anker" ist falsch; es sind 11

**Fundstelle im Papier:** B12, „⚠️ Grenzen dieses Anhangs", Punkt 1
(Z. 3710–3716).

**Wortlaut dort:** „Ohne canonical/og:url sind a1 **7** · a2 **0** ·
a3 **3** · a4 **35** · a5 **33** · a6 **20** Dateien."

**Eigene Messung** (je HTML-Datei rekursiv, Muster
`rel=["']?canonical` ODER `property=["']?og:url`, case-insensitiv):

| Strang | HTML gesamt (gemessen) | ohne Anker (gemessen) | Papier |
|---|---|---|---|
| a1 | 38 | **7** | 7 ✔ |
| a2 | 59 | **0** | 0 ✔ |
| a3 | 47 | **3** | 3 ✔ |
| **a4** | 65 | **11** | **35** ✗ |
| **a5** | 213 | **31** | **33** ✗ |
| a6 | 81 | **20** | 20 ✔ |

Für a4 habe ich die elf Dateien einzeln benannt, statt eine Vollabdeckung
zu behaupten: `hl_preise.html` · `hp_rm.html` · `jf_rm2.html` ·
`rpg_impressum.html` · `rpg_legal.html` · `rpg_legal2.html` ·
`rpg_preise.html` · `ts_home.html` · `ts_impressum.html` · `ts_rm.html` ·
`un_leist.html`. Positivkontrolle des Erkennungsmusters im selben Lauf:
`a4/rrise_rm.html` trägt `<link rel="canonical"
href="https://revenuerise.ch/revenue-management-hotels"/>` und wird korrekt
als „mit Anker" erkannt ✔. Getrennte Messung derselben Dateien: 50 mit
`canonical`, 33 mit `og:url`, 54 mit mindestens einem von beiden → 65 − 54
= **11**. Kein Teilmuster ergibt 35.

**Richtung des Fehlers:** Das Papier gibt seine Belegbasis **schwächer** an,
als sie ist — der Fehler geht also **nicht** zugunsten der eigenen Position.
Das mindert die Schwere, hebt sie aber nicht auf: Punkt 1 ist der Abschnitt,
in dem das Papier seine Belegstufe ausweist, und eine dort falsche Zahl
untergräbt genau die Funktion, die B12 erfüllen soll. Für a5 beträgt die
Abweichung nur 2 (33 vs. 31) — derselbe Mangel, geringeres Ausmaß.

**Positivbefund am selben Ort, zur Fairness:** Die **HTML-Zahlen** der
B12-Tabelle sind **alle sechs exakt** (38 · 59 · 47 · 65 · 213 · 81) und
ihre Summe **503** stimmt zeichengenau mit der Angabe „Gesamtbestand: 503
HTML-Dateien". Insbesondere ist a5 **rekursiv** gezählt (213; eine
nicht-rekursive Zählung hätte nur 9 ergeben) — die klassische
Unterverzeichnis-Falle ist hier vermieden worden.

**Schweregrad: WICHTIG.**

**Reparatur:** a4 auf **11**, a5 auf **31** korrigieren und den Zählweg an
die Zahl schreiben (Muster + „canonical ODER og:url" + rekursiv).

---

### W-C · § 7 — Prüfpunkt-ID **P22 ist doppelt belegt**, und der neu angekündigte **P23 fehlt im Register**

**Fundstellen im Papier:**
- Z. 1435 (B1 Punkt 8, **neu in R7**): ADDITIVE — „Nachtrag als Prüfpunkt
  **P22**."
- Z. 1305 (§ 7 Tabelle, aus R06-A): „**P22** | **74 der 78 Einträge des
  Brandnamic-Partnerkreises sind ungeprüft** (B10.5)"
- Z. 1298 und Z. 3374 verweisen ebenfalls auf **P22** im Sinne des
  Brandnamic-Partnerkreises.

**Befund 1 — Kollision.** R7 hat der ADDITIVE-Nachtragsliste die Nummer
**P22** gegeben, die seit R06-A bereits vergeben ist. Damit bezeichnet P22
im selben Dokument zwei verschiedene Sachverhalte. CLAUDE.md verlangt
ausdrücklich: „**Vor der Vergabe neuer Kurz-IDs die Kurzzeichen der
Nachbardokumente greppen** (Kollisionen doppelt belegt)." Ein Grep auf
„P22" im eigenen Dokument hätte die Kollision in einem Schritt gezeigt.

**Befund 2 — nicht registrierter Prüfpunkt.** Z. 3045 (B9.2, ebenfalls neu
in R7): „➡️ **Neuer Prüfpunkt P23: Aufnahmebedingungen des Arbeitskreises
ITK und Digitalisierung der IHK zu Lübeck.**" **P23 kommt im ganzen
Dokument genau einmal vor** — an dieser Stelle. Die Prüfpunkt-Tabelle in
§ 7 führt P1…P22 (von mir ausgelesen: P1, P2, P3, P4, P5, P6, P7, P8, P9,
P10, P11, P12, P13, P14, P15, P16, P20, P18, P19, P17, P21, P22) und **hat
keine P23-Zeile**. Positivkontrolle desselben Laufs: P21 kommt 8× vor und
steht in der Tabelle ✔ — das Suchverfahren findet registrierte Punkte.

Damit ist die Kanal-Hälfte von W-11 zwar im Fließtext repariert, der daraus
abgeleitete Handlungsposten aber **nur dort** vermerkt. Wer § 7 als
Arbeitsvorrat liest — und dafür ist die Tabelle da —, sieht P23 nie.
Dasselbe gilt für den ADDITIVE-Posten, der unter der kollidierenden Nummer
ebenfalls in keiner § 7-Zeile steht.

**Drittes, kleineres Element derselben Klasse:** B4.3 (Z. 1865) endet mit
„**Der IT-Lauf ist damit ein Prüfpunkt**, der genau dieses Nullergebnis
kippen könnte" — ohne Nummer und ohne § 7-Eintrag. Ebenso B4.1
(Z. 1655) für „Die Hotelberater": „**Nachtrag bei erreichbarer
Über-uns-Seite** — Prüfpunkt." Beides sind aus W-5 bzw. W-2 abgeleitete
Posten, die im Register nicht ankommen.

**Schweregrad: WICHTIG** (Handlungsposten, die im Register fehlen, sind
faktisch verloren — genau der Drift, den die Prüfpunkt-Konvention
verhindern soll).

**Reparatur:** ADDITIVE auf die nächste freie Nummer umnummerieren (**P24**,
da P23 in B9.2 bereits vergeben ist) und als § 7-Zeile anlegen; **P23** als
§ 7-Zeile anlegen; die beiden unnummerierten Prüfpunkte aus B4.1 und B4.3
nummerieren und eintragen.

---

### W-D · § 8 Änderungsprotokoll — die R7-Überarbeitung ist nicht eingetragen

**Fundstelle im Papier:** § 8 „Änderungsprotokoll", Z. 1309–1319.

**Befund:** Die Tabelle enthält sieben Zeilen — 3× R03-D (09.08.), 2× R05-A
(09.08.), 2× R06-A (10.08.). **Eine R7-Zeile existiert nicht.** Selbst
ausgelesen über das Zeilenmuster `^\| <Datum> \| <Runde>`; Positivkontrolle
im selben Lauf: „R06-A" traf 2× im Protokollbereich ✔, das Muster ist nicht
tot. Zum Vergleich: Die Zeichenfolge **„R7" bzw. „R07-A" kommt im Dokument
45× vor** — die Runde hat also breit in den Text geschrieben.

Beide vorangegangenen Prüferläufe haben je eine eigene Protokollzeile
(„Nach unabhängigem Prüferlauf überarbeitet", Z. 1317 für R05-A, Z. 1319
für R06-A). Für die umfangreichste Nacharbeit — 24 reparierte Posten, ein
komplett neuer Abschnitt **B12**, eine neue Vergabelinie **L-B1b**, ein
neuer Prüfpunkt **P23** — fehlt der Eintrag. Ein Leser, der nur § 8 liest,
nimmt mit, der letzte Stand sei R06-A.

**Schweregrad: WICHTIG** (Doku-Hygiene; § 8 ist der Änderungs-Wahrheitskanal
des Papiers).

**Reparatur:** R7-Zeile nach dem Muster der beiden Vorgängerzeilen
ergänzen, mit Nennung von B12, L-B1b, P23 und der Bilanz der reparierten
Befunde.

---

## 4. HINWEIS

### H-A · B8.5 — „‚Kiosk.eu' kommt im gesamten Rohbeleg-Archiv genau 1× vor" ist als Archiv-Aussage nicht reproduzierbar

**Fundstelle:** B8.5, zweite Einschränkung (Z. 2789–2793).

**Wortlaut dort:** „‚Kiosk.eu' kommt im **gesamten** Rohbeleg-Archiv genau
**1×** vor — in eben jenem einen Prosa-Satz."

**Eigene Messung** (`grep -roi` über alle `.txt` und `.html` in a1–a6):
**vier Treffer in vier Dateien** — `a3/42gmbh-digi.txt` Z. 164,
`a3/42gmbh-digi.html`, `a6/42gmbh-beratung.txt` Z. 112,
`a6/42gmbh-beratung.html`. Positivkontrolle im selben Lauf: „straiv" traf
31× ✔.

**Auflösung — und deshalb nur HINWEIS:** Beide Dateipaare tragen denselben
`<link rel="canonical" href="https://www.42-gmbh.de/digitalisierungsberatung-fuer-hotels/" />`.
Es ist **eine** Seite, im Archiv doppelt abgelegt (einmal im a3-, einmal im
a6-Strang) und je als `.txt` und `.html`. Der Satz ist beide Male
wortidentisch. **Die inhaltliche Aussage des Papiers hält damit
vollständig** — es ist ein Prosa-Satz, eine Fundstelle, ohne Logo,
Menüeintrag oder Produktkasten, und der Kontrast zu straiv (31 Treffer,
6 unabhängige Fundstellen) trägt klar.

Falsch ist nur der **Messbegriff**: „im gesamten Rohbeleg-Archiv genau 1×"
lädt zu einer Nachmessung ein, die 4 ergibt und wie ein Widerspruch
aussieht. Das ist dieselbe Klasse wie W-A: eine Zahl ohne Zählweg.

**Schweregrad: HINWEIS.**

**Reparatur:** „auf **einer** Seite (`42-gmbh.de/digitalisierungsberatung-fuer-hotels/`,
im Archiv doppelt abgelegt), in einem einzigen Prosa-Satz" — Zählweg
„eindeutige canonical-URL" dazu.

---

### H-B · B8.3 und B5.3 — die Bräu-Zeilenanker zeigen auf die FAQ-Frage, nicht auf den zitierten Satz

**Fundstelle:** B8.3 (Z. 2652–2653): „am Rohbeleg `a3/braeu-dach.txt`
**Z. 52/161** gefunden" für die Zweitfassung der 30-Zimmer-Aussage.

**Eigene Messung:**
- **Z. 52** = „Für welche Hotels arbeitet Maximilian Bräu?" — die
  **Frage**. Der zitierte kategorische Satz („Bei weniger als 30 Zimmern
  fehlt die Projektgrundlage.") steht in **Z. 53**.
- **Z. 161** = „Für welche Hotelgrößen arbeiten Sie?" — die **Frage**. Der
  zitierte schwächere Satz steht in **Z. 165/166**: „Bei weniger als 30
  Zimmern fehlt häufig die Grundlage für strukturierte / Beratungsprojekte."
  (der Rohtext bricht die Zeile innerhalb des Satzes um).

**Der Wortlaut des Zitats ist zeichengenau richtig** — „fehlt **häufig** die
Grundlage für **strukturierte Beratungsprojekte**" steht so in der Quelle,
und die Beobachtung des Papiers, dass die Zweitfassung deutlich schwächer
ist und in der Erstfassung zugunsten der eigenen These weggelassen wurde,
**hält vollständig**. Gegenprobe: `grep -n "weniger als 30"` liefert genau
Z. 53 und Z. 165, Positivkontrolle „30 Zimmern" = 2 ✔.

Nur der Anker greift daneben: Wer „Z. 161" aufschlägt, findet dort den
zitierten Satz nicht. Da W-17 gerade die Anker-Frage ist, zählt das.

**Schweregrad: HINWEIS.**

**Reparatur:** Anker auf **Z. 53** bzw. **Z. 165–166** setzen (oder als
„FAQ-Block Z. 161–166" ausweisen). Hinweis: Das Zitat überbrückt einen
**Zeilenumbruch der Extraktion**, keine Absatzgrenze — das ist zulässig und
muss nicht markiert werden.

---

### H-C · B12 / P20 — die Bestandszahl „2132 Dateien" ist ohne Zählweg und reproduziert sich nicht exakt

**Fundstellen:** B12 Kopf (Z. 3683) „2132 Dateien, git-ignoriert";
§ 7 P20 (Z. 1300) „robocopy 2132/2132 Dateien … Ziel-Zählung 2132 Dateien".

**Eigene Messung** unter `sensibel/rohbelege-R05-A/`:
- `find . -type f` → **2134**
- nur a1–a6 → **2128**
- a1–a6 ohne `strip.js`/`fetch.sh` → **2123**

Keine der drei Zählungen ergibt 2132; die nächstliegende weicht um 2 ab.
Da P20 die Zahl als Identitätsbeleg der Kopie führt („quellidentisch"),
gehört der Zählweg dazu — sonst ist bei jeder späteren Nachmessung
unentscheidbar, ob die Differenz eine Zählweg- oder eine Bestandsfrage ist.
Welche zwei Dateien die Differenz ausmachen, konnte ich **nicht**
entscheiden.

**Schweregrad: HINWEIS.**

**Reparatur:** Zählweg an die Zahl („`find` über a1–a6, inkl.
Hilfsskripte") oder Zahl auf die selbst gemessene Grundgesamtheit
umstellen.

---

### H-D · B5.2 — das erste Dittlmann-Zitat beginnt und endet unmarkiert mitten in der Quellzeile

**Fundstelle:** B5.2 (Z. 2037–2041), Zitat 1 mit Anker
`a3/ch-impressum.txt` Z. 149.

Das Zitat lautet „Eingetragen in die KfW-Beraterdatenbank, … im Programm
INQA (Initiative neue Qualität der Arbeit)". **Zeichengenau korrekt** — ich
habe Z. 149 gelesen. In der Quelle steht davor jedoch „Zertifizierter
Sachverständiger für das Hotel-, Tourismus- & Gaststättengewerbe (DGuSV,
Hospitality Consulting); " und dahinter „; Zulassung als
Unternehmensberater in Österreich gemäß § 373a Abs. 5 Z1 GewO, Hospitality
Consulting". Das Zitat schneidet also an beiden Enden ohne
Auslassungszeichen.

Das ist derselbe Mangel, den R7 beim 42-GmbH-Zitat **selbst gefunden und
behoben** hat („Zusätzlich begann das Zitat unmarkiert mitten im Satz",
B5.3) — hier ist er stehen geblieben. Inhaltlich unschädlich (die
Semikola trennen eigenständige Aufzählungsglieder), formal dieselbe Klasse.

**Schweregrad: HINWEIS.**

**Reparatur:** „…" an beiden Enden setzen, wie in B5.3 vorgemacht.

---

### H-E · B5.2 — „11.600 Zeichen und 35 Blockelemente" trägt keinen Zählweg und reproduziert sich nur teilweise

**Fundstelle:** B5.2 (Z. 2050–2051), Begründung der Zitat-Zerlegung.

**Eigene Messung** an `a3/ch-impressum.html`, Abstand zwischen dem Ende von
Zitat 1 („Initiative neue Qualität der Arbeit") und dem Beginn von Zitat 2
(„als systemischer Coach"):
- **11.382 Zeichen** — das Papier sagt „11.600"; als gerundete
  Größenordnung vertretbar (Abweichung 1,9 %, abhängig von den exakten
  Schnittpunkten).
- **Blockelemente: 48** öffnende Blocktags (`div` 31 · `p` 9 · `h2` 2 ·
  `section` 2 · `figure` 2 · `h5` 2), 46 schließende, 9 wenn man nur `<p>`
  zählt. **35 ergibt keine der von mir geprüften Zählweisen.**

**Die Aussage, für die die Zahlen stehen, hält deutlich** — der Sprung geht
über den kompletten Haftungsausschluss in ein Fußzeilen-Widget, und der
Wortlaut wechselt an der Nahtstelle („für systemisches Coaching" ↔ „als
systemischer Coach"). Beides habe ich am Rohbeleg bestätigt. Nur die
konkrete Zahl 35 ist nicht nachvollziehbar.

**Schweregrad: HINWEIS.**

**Reparatur:** Zählweg nennen oder auf die belegbare Formulierung
zurückgehen („rund 11.400 Zeichen und mehrere Dutzend Blockelemente").

---

## 5. Verdacht (plausibel, **nicht** verifiziert — ausdrücklich getrennt)

- **V-A · Die drei ungezählten B8-Zahlen tragen im Papier keinen Vermerk.**
  Der Träger führt V-1 als „teilweise gemessen, Träger benannt" und sagt,
  „17 betrachtete Anbieter", „genau zwei verkaufen die volle Kette" und
  „3 von 17 nennen Beträge" seien **nicht** nachgezählt. Im **Papier**
  finde ich dafür keinen Marker: Z. 1371, 2554, 2559 und 2815 nennen die
  Zahlen glatt, ohne Gegenzähl-Vorbehalt, und § 7 hat keine V-1-Zeile. Der
  Träger für V-1 lebt damit ausschließlich im Nacharbeits-Protokoll, nicht
  im Dokument, das weiterverwendet wird. **Verdacht** ist, dass diese drei
  Zahlen denselben Zählverlust tragen wie die 15 Mews-Einträge (wo R7 eine
  Versalien-Falle fand) — belegt ist das **nicht**; ich habe sie nicht
  nachgezählt (s. § 6 Punkt 1). Die **asymmetrische Behandlung** ist
  dagegen belegt: Die Nachbarzahl im selben Abschnitt bekam einen
  vollständigen Zählweg, diese drei nicht.
- **V-B · Der Zählmethoden-Mix könnte über B4 hinausreichen.** W-A belegt
  drei unbenannte Methoden in einer Runde. Ob weitere in R7 gesetzte
  Positivkontroll-Zahlen betroffen sind, habe ich nur stichprobenartig
  geprüft (B8.2 Bräu: betroffen). **Plausibel, nicht erhoben.**

---

## 6. Nicht prüfbar (eigenes Ergebnis, **nicht** zu „unauffällig" geglättet)

1. **Die Grundgesamtheit „17 betrachtete Anbieter" (B8).** Im Rohbeleg
   liegt keine Anbieterliste dieses Strangs; a6 enthält 27 Domains, darunter
   PMS-Anbieter (apaleo.com, mews.com, weareplanet.com), die keine
   „betrachteten Anbieter" im Sinne des Abschnitts sind. Ob es 17 waren,
   ist aus dem Bestand **nicht entscheidbar** — und damit auch „genau zwei"
   und „3 von 17" nicht.
2. **Ob die Reparaturen den Willen des R05-A-Prüfers treffen**, wo dieser
   Ermessen ließ (z. B. K-3 „beides ist vertretbar, das Schweigen ist es
   nicht"). Ich prüfe Belege, nicht Auslegungen.
3. **W-15** (`R05-A-fundstellen.md` N-5) — außerhalb meines Lese- und
   Prüfauftrags. Nicht geprüft, nicht bewertet.
4. **B9.4 im Volltext** und die K-2-Reparatur jenseits der § 7-Zeile P14.
   Die P14-Zeile trägt die Ausnahmeklausel wörtlich und korrekt; den
   B9.4-Fließtext samt dem Satz „Die beiden Landesprogramme sind es nicht"
   habe ich **nicht** vollständig gelesen.
5. **Alles jenseits der archivierten Selbstauskünfte.** Wie schon R05-A:
   kein Registerauszug, keine Drittquelle, kein Netzzugriff. Geprüft ist
   ausschließlich, ob das Papier die Rohbelege korrekt wiedergibt.
6. **Die zwei Dateien Differenz bei „2132"** (H-C).

**Nicht geprüfte Abschnitte** (vollständige Angabe): Teil A §§ 1, 2, 3.1–3.3,
4.1–4.5, 5.3–5.6, 6.1–6.5 · Teil B **B10** und **B11** in ihrer Substanz
(beide stammen aus R06-A und waren nicht Gegenstand der R05-A-Befundliste;
berührt habe ich nur B10.1/B10.5 über die H-1-Zahlen und die P22-Frage) ·
B3 · B7.1 · B9.3 · B9.4 (s. o.). Für diese Abschnitte sage ich **nichts** —
weder „in Ordnung" noch „auffällig".

---

## 7. Stichprobenprotokoll — 26 selbst ausgeführte Nachmessungen

Format: **Behauptung im Papier** · *Rohbeleg* · **Ergebnis**. Alle Läufe von
mir selbst ausgeführt, Ausgaben vollständig gelesen (bei einem Lauf war die
Ausgabe 286 KB groß und wurde in eine Datei umgeleitet statt abgeschnitten
gelesen).

| # | Behauptung (Abschnitt) | Rohbeleg | Ergebnis |
|---|---|---|---|
| 1 | „Mindestlaufzeit **12 Monate**" (B6.2 P1) | `a4/rrise_rm.txt` Z. 71 | **ABWEICHEND — Quelle sagt „3 Monate"** (K-A) |
| 2 | Mindestrechnung „879 × 12 + 1.000 = **11.548**" (B6.2 P1) | eigene Rechnung | **falsch abgeleitet**; korrekt 879×3+1.000 = **3.637** |
| 3 | „Mindestlaufzeit" im ganzen Archiv | a1–a6, alle `.txt` | **3 Treffer**, keiner „12 Monate"; Positivkontrolle 3× ✔ |
| 4 | Setup-Gebühr „EUR / CHF 1.000" (B6.2 P1) | `a4/rrise_rm.txt` Z. 11/71 | **deckungsgleich** |
| 5 | HotelPartner „ab 60.000 € – **zuzüglich Benefits, Schulungen und Systemlizenzen** –" (B6.2 P3) | `a4/hp_privat.txt` Z. 74 | **deckungsgleich, zeichengenau** (W-7 repariert) |
| 6 | RevenueRise „4.500–8.000" gehört zur Spalte „Eigener Revenue Manager", Z. 89–94 (B6.2 P3) | `a4/rrise_preise.txt` | **deckungsgleich**; Kopf 89–91, Werte 92–94; Schlüsselbindung korrekt ✔ |
| 7 | Hochrechnung 4.500–8.000 → **54.000–96.000** | eigene Rechnung | **korrekt** |
| 8 | Spalteholz vier Seminarzeilen, Z. 202/206/210/214, „19% MwSt." 2× (B6.2 P2) | `a4/spa_home.txt` | **deckungsgleich, alle vier Anker und alle Beträge** (H-8) |
| 9 | Apaleo-Store „**9** Kategorien" + Namensliste (B8.4) | `a6/apaleo-store-next.json` | **deckungsgleich — 9**, Namen identisch (K-1) |
| 10 | Mews „**15** Einträge", Zählweg `Mews + <Name> partnership` case-insensitiv (B8.4) | `a6/mews-consultants.txt` | **deckungsgleich — 15** |
| 11 | Versalien-Falle: „erster Lauf fand nur **7**", „**acht** in VERSALIEN" (B8.4) | ebd. | **exakt reproduziert: 7 + 8 = 15** ✔ |
| 12 | „Regions served" nur bei **8 der 15**; SUM Z. 278, Block ab Z. 265 (B8.4) | ebd. | **deckungsgleich**, Wortlaut „Germany, Switzerland, and Austria" ✔ (H-9) |
| 13 | Brandnamic **78 Einträge / 76 Domains / 7 Rubriken**, Aufteilung 25·13·18·2·12·6·2 (B4.3) | `a2/raw_partner.html`, `a2/txt_partner.txt` | **deckungsgleich in allen sieben Rubriken**; Summenprobe 78 ✔; 2 Doppeldomains → 76 ✔ (H-1) |
| 14 | „straiv steht unter Zahlungsanbieter Schnittstellen" (B4.3) | `a2/raw_partner.html` | **bestätigt** — zwischen `sparkasse.it` und `stripe.com` |
| 15 | DEHOGA HH **zehn Stufen** mit allen Beträgen (B9.1) | `a5/dehoga/hh-beitrag.txt` Z. 34–43 | **deckungsgleich, alle 10 Stufen zeichengenau** (H-2) |
| 16 | Gegenprobe „alle €-Zeilen = 11, die elfte ist die 5-€-Gebühr" (B9.1) | ebd. Z. 72 | **exakt reproduziert** ✔ |
| 17 | Designkontor **161 Datenzeilen** + 1 Kopfzeile, eine Tabelle (B9.2) | `a5/ihk/sh-anbieterliste.html` | **deckungsgleich — 161 `<tr>` mit `<td>`, 1 nur `<th>`, 1 `<table>`** (H-5) |
| 18 | Positivkontrolle an der Extraktion: „Easy Online-Marketing" und „Klute" (B9.2) | `a5/ihk/sh-anbieterliste.txt` | **beide vorhanden** ✔ |
| 19 | Designkontor 250 €/Fahrtkosten Z. 34 · Beratungsdreiklang Z. 39 · „in Frage kommende" + Vollständigkeitsvorbehalt Z. 42 (B9.2) | `a5/ihk/sh-designkontor-liste.txt` | **alle drei zeichengenau** (W-10) |
| 20 | MEET THE EXPERTS Trägersatz Z. 34, Formatnennung Z. 27 (B9.2) | `a5/ihk/sh-meet-experts.txt` | **beide zeichengenau** (W-11) |
| 21 | DEHOGA BW: beide Sätze „im **selben Absatz**", Z. 542; „100 Prozent" aus Z. 466 (B9.1) | `a5/dehoga/bw-beratung.txt` | **deckungsgleich** — Z. 542 trägt beide Sätze; Trennung korrekt ausgewiesen (H-10) |
| 22 | Dittlmann Zitat 1 Z. 149 · Zitat 2 Z. 168 · wortidentisch `ch-preise.txt` Z. 209 (B5.2) | `a3/ch-impressum.txt`, `a3/ch-preise.txt` | **alle drei Anker exakt** (W-16); Randbefund H-D |
| 23 | Bräu: `<dialog>` ohne `open`, „Was hier steht, steht nicht auf der Hauptseite", seitenweit, Vorgängersatz „Ich arbeite allein – bewusst." (B5.3) | `a3/braeu-dach.html`, `a3/braeu-impressum.html` | **alle vier Teilaussagen bestätigt** (H-4) |
| 24 | 42 GmbH: **11** Karussell-Logos (`div.wpex-carousel-slide` in `vcex-image-carousel`), 4 ohne Textnennung, Kiosk.eu ohne Logo, alle `alt=""`, Vereinigung **12** (B5.3) | `a6/42gmbh-beratung.html` | **vollständig deckungsgleich** — 11 Slides, logo-only = Flixorder/Yanovis/Kost/`bc-Logo` (nicht auflösbar), 17 `alt`, alle leer; 7+1+4 = **12** ✔ |
| 25 | „Hotels **jeder** Größe" **7 Fundstellen**; „Hotels aller Größen" **0** im ganzen Archiv (§ 5.2) | a1–a6 | **exakt: 7 bzw. 0**; Positivkontrolle „Größe" 34 ✔ |
| 26 | „begleiten **wir Sie** zuverlässig und persönlich" (§ 5.2, § 3.4) | `a3/42gmbh-digi.txt` Z. 223, `a6/42gmbh-beratung.txt` Z. 171 | **deckungsgleich, „wir" vorhanden** ✔ |

**Zusatzläufe außerhalb der Tabelle:** 16-Datei-Zählmatrix „Hotel" in vier
Methoden (W-A) · B12-HTML-Zahlen je Strang und Summe 503 (alle exakt) ·
B12-Ankerabdeckung je Strang (a4/a5 abweichend, W-B) · Dateizählung
2134/2128/2123 (H-C) · 42-GmbH-Zitat Z. 112 mit „und vielen weiteren"
(H-3, deckungsgleich) · SUM `from 400 CHF` Z. 27, `from 5’000 CHF` Z. 29,
Skalierungssatz Z. 79 (W-12, alle exakt, inkl. Schweizer Apostroph) ·
Bräu Go-Live/`live` je 0 in beiden Seiten mit Positivkontrolle 65 (B8.2,
Negativ bestätigt) · Kiosk.eu-Kanonisierung (H-A) · P22/P23-Grep mit
Positivkontrolle P21 (W-C) · § 8-Zeilenmuster mit Positivkontrolle R06-A
(W-D) · Einstufungszählung über vier Tabellen (54 Einstufungen, 0× N,
2× „—").

**Eigener Werkzeugfehler, protokolliert statt geglättet:** Mein erster
Mews-Zähllauf meldete 9 statt 15 — Ursache war eine Escape-Verzerrung des
Musters (`[^\n]` im Shell-Kontext), nicht die Quelle. Nach der Regel „ein
Negativ, das nicht passen kann, ist zuerst ein Werkzeugfehler" wiederholt;
der zweite Lauf mit `.{1,60}?` ergab 15 und deckte sich mit der
7-plus-8-Zerlegung. Ebenso lief meine erste Prüfung des
Brandnamic-Partnerkreises unscoped (96 statt 78 `data-gtm-label`) — die
Differenz sind 3 Sprachlinks, 13 Footer-/Navigationslabels und 2
Google-/Facebook-Badges; 96 − 18 = **78**, die Papierzahl rekonstruiert
sich exakt. Beide Fälle sind Belege dafür, dass eine unscoped
Roh-Zählung kein Gegenbeleg ist.

---

## 8. Positivbefunde — was ich geprüft habe und was hält

Ein Prüfprotokoll ohne Positivkontrolle ist selbst unbelegt. Folgendes ist
geprüft und **in Ordnung**:

1. **Die zehn HINWEIS-Befunde sind vollständig und sauber abgearbeitet** —
   10 von 10, alle von mir am Rohbeleg nachgemessen, keiner mit
   „Hinweis"-Vermerk beiseitegelegt. Das ist die direkte Antwort auf L-13
   und der größte Unterschied zu R5.
2. **H-2 (DEHOGA Hamburg) ist die beste Einzelreparatur des Laufs.** Alle
   zehn Stufen zeichengenau, ein generischer Zählweg (Zeilenmuster statt
   Namensliste — genau die L-11-Lehre), **und** eine funktionierende
   Gegenprobe („alle €-Zeilen = 11, die elfte ist die 5-€-Gebühr"), die
   ausschließt, dass eine Stufenzeile durchs Raster fällt. Beides exakt
   reproduziert.
3. **H-1 (Brandnamic) rechnet in jeder Rubrik auf.** 25+13+18+2+12+6+2 = 78,
   76 Domains nach Abzug der zwei Doppelnennungen (`weareplanet.com`,
   `simplify-hospitality.com`), sieben Rubriken als getrennte
   Quellüberschriften. Auch die Nebenaussage zur straiv-Kategorie ist am
   Markup bestätigt.
4. **Die Markup-Befunde sind der stärkste Teil der Runde.** Drei Aussagen,
   die eine reine Textprüfung strukturell nicht finden kann, sind korrekt
   erhoben: das 42-GmbH-Karussell (11 Logos, alle `alt=""`, Vereinigung 12),
   das Bräu-`<dialog>` ohne `open` samt seitenweiter Wiederholung, und die
   Spaltenbindung der RevenueRise-Vergleichstabelle an Kriterium ↔ Spalte
   statt an die Prosareihenfolge. Letzteres ist die Regel „Zahlen an ihren
   SCHLÜSSEL binden" korrekt angewandt — und ausgerechnet im selben
   Abschnitt, in dem K-A sie verletzt.
5. **Die vier zitatkritischen Reparaturen halten zeichengenau** (W-16, H-3,
   H-4, H-10). Bei H-10 ist die zusätzliche Aussage „beide Sätze stehen in
   der Quelle im selben Absatz" korrekt — Z. 542 trägt tatsächlich beide;
   und die zweite DEHOGA-Fundstelle (Z. 466) ist als *anderer*
   Seitenabschnitt ausgewiesen statt zur Zitatkette verschmolzen.
6. **Die selbst gefundenen Zusatzbefunde sind echt.** Das fehlende „wir" in
   § 5.2 ist am Rohbeleg belegt; „Hotels aller Größen" kommt im gesamten
   Archiv **0×** vor, „Hotels jeder Größe" exakt **7×** — beide Zahlen
   stimmen aufs Wort. Das ist ein Fund, den die R05-A-Liste nicht hatte,
   und er saß in tragender Beweisführung.
7. **Die Versalien-Falle bei Mews ist vorbildlich dokumentiert und exakt
   reproduzierbar** (7 case-sensitiv + 8 VERSALIEN = 15). Ein Zählweg, der
   den eigenen Fehlversuch mitliefert, ist die stärkste Form von
   Nachprüfbarkeit.
8. **Die H-9-Auflösung trägt.** Der R05-A-Prüfer hatte zu eng gemessen; die
   Datei führt tatsächlich 8 „Regions served"-Zeilen, und die vier Sitze
   stehen in Nachbardateien. Die Unterscheidung „bedienter Markt ≠ Sitz"
   ist sauber gezogen. Gleiches gilt für die dokumentierte Abweichung bei
   W-3/Plaschke („ein Impressum ist kein Preiskanal") — ein Prüferbefund
   wurde begründet zurückgewiesen statt still übernommen.
9. **Die B12-Grundzahlen stimmen** — sechs Strang-Zahlen exakt, Summe 503
   exakt, a5 korrekt **rekursiv** gezählt (213 statt der 9 einer
   Toplevel-Zählung). Auch die vier ausgewiesenen Grenzen des Anhangs sind
   inhaltlich richtig, einschließlich des belegten canonical-Abweichungsfalls
   bei Dittlmann.
10. **Die Nenner-Reparaturen sind fachlich richtig.** W-3 („ohne E621
    **14 von 15 gemessenen**") rechnet auf: 16 Anbieter, einer mit Preis,
    E621 als ungemessener Nicht-Veröffentlicher herausgerechnet. W-13
    („5 von 17") und W-12 („zwei Schwellen + ein Preisboden") sind gegen
    B5.4 Punkt 2 im selben Papier konsistent.
11. **Die Vorwärtsverweise aus W-14 sitzen dort, wo der Leser ankommt** —
    § 5.1, § 5.2 und die 42-GmbH-Zeile in § 3.4 tragen je einen
    ➡️-Kasten, P9 ist mit ✅ aufgelöst, P8 auf „teilweise beantwortet"
    zurückgeschnitten mit benanntem Rest (Oracle, protel/planet).
12. **Kein erfundener Sachverhalt.** Von 26 Nachmessungen war **eine**
    inhaltlich falsch (K-A) und keine einzige nicht auffindbar. Die übrigen
    Beanstandungen betreffen Zählwege, Anker und Register — nicht die
    Substanz.

---

## 9. Antworten auf die Zusatzfragen

### 9.1 „Hättest du diese Funde auch OHNE den Kategorien-Hinweis (a)–(e) gefunden — welche nicht?"

**Ohne die Kategorien gefunden hätte ich:**
- **K-A** (Mindestlaufzeit 12 vs. 3) — mit Sicherheit. Der Widerspruch
  zwischen Träger („3 Monate", „3.637") und Papier („12 Monate", „11.548")
  springt beim bloßen Nebeneinanderlegen der beiden Dokumente heraus; die
  Rohbeleg-Messung war danach nur noch Bestätigung. Diesen Fund trägt der
  Auftrag selbst, nicht das Raster.
- **W-D** (fehlende R7-Zeile im Änderungsprotokoll) — beim Lesen von § 8
  fällt die Lücke auf, weil beide Vorgängerläufe eine Zeile haben.
- **H-B, H-D** (Anker- und Zitatränder) — beim Nachschlagen jedes Ankers,
  was ich ohnehin getan hätte.

**Ohne die Kategorien vermutlich NICHT gefunden hätte ich:**
- **W-A** (Zählmethoden-Kollision 11 vs. 13–284). Der ausdrückliche
  Auftrag „Trägt **jede** Zahl ihren **Zählweg**?" (d) hat mich dazu
  gebracht, drei beiläufige Positivkontroll-Zahlen überhaupt
  nachzurechnen — Positivkontrollen liest man normalerweise als Beiwerk,
  gerade weil sie „✔" tragen. Erst die Methodenmatrix über alle 16 Dateien
  hat den Widerspruch zum Bestandsbereich sichtbar gemacht. **Das ist der
  Fund, den ich der Kategorie (d) verdanke.**
- **W-C** (P22-Kollision, fehlendes P23). Ohne die Frage nach der
  **Disposition** jedes einzelnen Befunds (a) hätte ich P23 als „W-11 ist
  repariert" abgehakt und nie geprüft, ob der daraus abgeleitete
  Prüfpunkt im Register ankommt.
- **W-B** (B12 a4 35 vs. 11). Kategorie (b) — „hat eine Reparatur einen
  NEUEN Fehler eingeführt?" — hat mich veranlasst, den **neu angelegten**
  Abschnitt B12 selbst nachzumessen, statt ihn als Beleg-Anhang
  hinzunehmen.
- **H-A, H-C, H-E** (Kiosk.eu, 2132, 11.600/35) — allesamt Kinder der
  Zählweg-Frage.

**Ehrliche Bilanz:** Der eine kritische Sachfehler wäre auch ohne Raster
gefallen. Von den zehn übrigen Funden verdanke ich **sieben** den
Kategorien (d), (b) und (a) — sie betreffen sämtlich Zahlen, die „✔"
tragen, und Register, die niemand liest.

### 9.2 „Welche Verfälschung hätte dein Verfahren NICHT gefangen?"

Fünf Klassen, nach abnehmender Wahrscheinlichkeit:

1. **Eine falsche Zahl, die im Rohbeleg genauso falsch steht.** Mein
   Maßstab ist ausschließlich `sensibel/rohbelege-R05-A/`. Hätte der
   Anbieter selbst „Mindestlaufzeit 12 Monate" geschrieben und wäre die
   Realität eine andere, hätte ich es bestätigt. Das ist dieselbe Grenze,
   die R05-A benannt hat — und sie ist **nicht** kleiner geworden, weil
   weiterhin kein Registerauszug und keine Drittquelle existiert.
2. **Ein Rohbeleg, der zwischen R5 und heute verändert wurde.** Ich habe
   die Archivdateien als gegeben genommen und ihre Integrität **nicht**
   gegen einen Hash oder ein Kopierprotokoll geprüft — P20 nennt eine
   Dateizahl, die ich nicht reproduzieren konnte (H-C), aber keine
   Prüfsumme. Eine stille Änderung an einer `.txt` würde meine Prüfung
   restlos passieren.
3. **Eine Auslassung in einem Abschnitt, den kein R05-A-Befund berührt.**
   Mein Zuschnitt war die Befundliste. Ein in R7 neu eingefügter, sachlich
   falscher Satz in B10, B11 oder in den ungeprüften Teil-A-Kapiteln wäre
   mir nur zufällig aufgefallen — die Vollständigkeit der R7-Änderungen
   habe ich mangels Diff-Sicht (Verfahrensauflage) **nicht** abgedeckt.
   Das ist die größte strukturelle Lücke dieses Laufs, und sie ist eine
   direkte Folge der Auflage: Ich kann sagen, ob die 34 Befunde behandelt
   sind, **nicht**, ob R7 sonst nichts angefasst hat.
4. **Eine korrekt zitierte, aber falsch gedeutete Quelle.** Ich habe
   Wortlaute und Zahlen gemessen. Ob „Regions served" wirklich den
   bedienten Markt meint oder ob die 78 Partner tatsächlich ein
   Partnerprogramm im Rechtssinn sind, ist Interpretation — dort prüfe ich
   nur auf innere Widerspruchsfreiheit.
5. **Ein Fehler, der sich in Träger UND Papier gleichlautend findet.**
   K-A fiel nur auf, weil Träger und Papier **auseinanderliefen**. Hätten
   beide „12 Monate" gesagt, hätte ich es trotzdem an Z. 71 gefunden — aber
   nur, weil dieser Befund auf meiner Messliste stand. Bei einer Zahl ohne
   Befundbezug wäre die Doppel-Übereinstimmung eine wirksame Tarnung
   gewesen.

---

## 10. Empfohlene Reihenfolge der Reparatur

1. **K-A** (B6.2: 12 → 3 Monate, Rechnung 11.548 → 3.637) — die Zahl ist
   als Preisorientierung für MKT-HANDEL markiert und wandert von dort in
   Angebotsentscheidungen. Im selben Zug die übrigen R7-Zahlen in B6.2
   gegen ihre Quellzeile prüfen.
2. **W-C** (P22-Kollision auflösen, P23 und die zwei unnummerierten
   Prüfpunkte in § 7 eintragen) — offene Handlungsposten, die im Register
   fehlen, gehen sonst verloren.
3. **W-A** (Zählweg an die vier „Hotel"-Zahlen oder Methode vereinheitlichen)
   — beseitigt einen sichtbaren Selbstwiderspruch des Dokuments.
4. **W-B** (B12 a4 → 11, a5 → 31, Zählweg dazu) und **W-D** (R7-Zeile in
   § 8).
5. **K-3-Rest**: den Verteilungssatz ergänzen — jetzt mit den aktuellen
   Zahlen (54 Einstufungen über B4.1/B5.1/B6.2/B7.2, davon **0× N** und
   **2× „—"**), samt Hinweis, dass B4.1 seit R7 keinen Nicht-W-Eintrag mehr
   trägt.
6. **H-A bis H-E** in beliebiger Reihenfolge.
7. **V-A**: Den V-1-Träger aus dem Nacharbeits-Protokoll **ins Papier**
   holen — die drei ungezählten B8-Zahlen brauchen dort einen sichtbaren
   Gegenzähl-Vorbehalt, sonst trägt ihn nur ein Dokument, das niemand
   mitliest.

---

*Erstellt 10.08.2026, Session R07-A-Prüfer — unabhängige Prüfung mit
frischem Kontext. Geprüfter Gegenstand: `fund/wettbewerbsbild.md`
(MD5 `43ee79f60c912b143652d664dc23c03d`, 262.121 Bytes, 3.735 Zeilen).
Befundliste: `protokolle/R05-A-pruefer.md`. Träger:
`protokolle/R06-nacharbeit-R05A-befunde.md`. Rohbelege:
`sensibel/rohbelege-R05-A/` und `sensibel/rohbelege-R06-A/`.
Alle Nachzählungen dieses Protokolls sind vom Prüfer selbst ausgeführt;
kein git-Kommando, kein Diff, kein Netzzugriff.*
