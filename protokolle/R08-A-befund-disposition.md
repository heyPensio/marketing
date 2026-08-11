# R08-A — Disposition ALLER Prüferbefunde

**Session:** R08-A (Ben Beckman) · **Datum:** 11.08.2026 ·
**Prüfprotokoll:** `protokolle/R08-A-pruefer.md` (Prüfstand `d11535f`) ·
**Disposition auf Stand:** Commits `d11535f` → `616e708` → dieser Commit

**Regel, nach der hier disponiert wird** (CLAUDE.md): Jeder Befund ist
**repariert**, **ausdrücklich verworfen mit Grund** oder hat einen
**benannten Träger**. „Hinweis" ist eine Schwere-Angabe, keine
Erledigungs-Kategorie. Jede Reparatur ist **am Rohbeleg gemessen**, nicht
am Prüfertext — wo meine Messung vom Prüferbefund abwich, steht es dabei.

---

## Zusammenzählung mit Nenner

| Kategorie | Repariert | Verworfen | Träger | Summe |
|---|---:|---:|---:|---:|
| **KRITISCH** | **2** | 0 | 0 | **2 von 2** |
| **WICHTIG** | **15** | 0 | 0 | **15 von 15** |
| **HINWEIS** | **8** | 0 | 0 | **8 von 8** |
| **Summe** | **25** | **0** | **0** | **25 von 25** |

**Zusätzlich aus der Prüferfrage F1/4 aufgenommen:** ein Befund, den der
Prüfer selbst erst beim Beantworten der Pflichtfragen bemerkte (Teil B
der Rechtsmatrix kam in keinem der Dokumente vor) — als **P-26**
geführt und repariert. **Damit 26 von 26 disponiert.**

**Nachgerechnet statt geglaubt:** Zwölf Befunde enthielten eine Zahl,
eine Datums- oder eine Zählaussage. Alle zwölf habe ich selbst gemessen,
bevor ich repariert habe (Werkzeug: `node`, `Intl.DateTimeFormat`,
Skript-Abgleich gegen die Quelltabelle). **Ergebnis: 12 von 12
bestätigt** — der Prüfer hat in keinem Fall danebengelegen. Insbesondere:
16.08.2026 = Sonntag ✓ · 11.09. − 28 Tage = Fr 14.08. ✓ · 17.08. + 28
Tage = 14.09. ✓ · SH hat 15 Kreise, 7 genannt → 8 übrige ✓ · P(0) bei
n = 100, p = 1 % = 0,366 ✓ · alle 15 Kreis-Namen-Zahl-Paare zeilengenau ✓.

---

## KRITISCH (2 von 2 repariert)

| ID | Befund | Disposition |
|---|---|---|
| **P-01** | D2-Pflicht 4 („Dokumentierte Abwägung je Datenfeld") war als **erfüllt** ausgewiesen, obwohl § 6 nur Stufe 2 (Erforderlichkeit) leistet und Stufe 3 (die Abwägung selbst) offen ist | **REPARIERT.** Status im Regelwerk § 3 Pflicht 4 auf „TEILWEISE gebaut — Stufe 2 dokumentiert, Stufe 3 OFFEN" geändert, mit sichtbarem Vermerk der Vorfassung. **Neuer offener Punkt O-8** mit Träger („Marketing-Session, VOR dem ersten Versand") und der Begründung, warum es unter Weg (b) die risikotragende Stelle ist. Nenner-Aussage in § 2.3 (W-b1) mitgezogen |
| **P-02** | § 12 behauptete eine maschinelle Prüfung der D3-/D2-Blöcke, die das Muster **strukturell nicht leisten kann** (Blockzitate ohne Anführungszeichen); die Positivkontroll-Anker prüften den **Quellenpool**, nicht das Zieldokument | **REPARIERT — und zwar am Werkzeug, nicht am Text.** `pruefe-zitate.js` hat jetzt einen eigenen **Blockzitat-Vergleich**: Text zwischen zwei Markern **im Zieldokument** wird zeichenweise gegen die Quelle geprüft (3 Blöcke, 480/1.006/757 Zeichen), **jeder mit eigener Rückbau-Gegenprobe** (verfälschte Fassung muss durchfallen — 3/3 bestanden). § 12 beschreibt jetzt beide Prüfstrecken getrennt und benennt den Befund offen |

---

## WICHTIG (15 von 15 repariert)

| ID | Kurz | Disposition |
|---|---|---|
| **P-03** | Dokumentiertes Prüfergebnis reproduzierte am Prüfstand nicht (103 / 94 von 97 / Exit 1 statt 99 / 93 von 93) | **REPARIERT, teils schon vor dem Prüfbericht** (Commit `616e708`): Selbstreferenzen in die deklarierte Ausnahmeliste, Zahlen auf den reproduzierbaren Endstand gezogen. **Endstand jetzt: 128 geprüft / 114 von 114 bestätigt / 14 deklariert / Exit 0** |
| **P-04** | „Positivkontrolle je Quelldatei einer — 7/7" deckte nur **4 von 8** Pooldateien ab | **REPARIERT.** Vier Anker ergänzt (Projektquelle, STATUS.md, baseline-messplan, CLAUDE.md) — jetzt **11/11 über alle 8 Dateien**; die falsche Nenner-Aussage in § 12 ist korrigiert und der Fehler dort sichtbar vermerkt |
| **P-05** | K3 („fremde Verteiler") trug ein ✅ mit Belegstufe ②, obwohl die Rechtsmatrix dazu **keinen geprüften Kanalabschnitt** hat | **REPARIERT.** Rechtsstand auf „⚠️ in der Rechtsmatrix nicht als eigener Kanal geprüft" geändert, mit der offenen A6-Frage (deckt die Einwilligung der Verbandsempfänger Werbung *für uns*?). **Als Nebenbefund N-8 an MKT-HANDEL** und in H-4 eingehängt |
| **P-06** | Der Vorbehalt „juris/beck-online nicht durchsucht — das Negativ kann kippen" fehlte in **beiden** Dokumenten, obwohl der ganze Plan am Briefkanal hängt | **REPARIERT in beiden.** Akquiseplan K1-Zeile und Regelwerk § 4.5 tragen ihn jetzt im Haupttext, nicht in einer Fußnote |
| **P-07** | LinkedIn: „reine Kontaktanfrage ohne Werbetext ist ungeklärt, nicht freigegeben" fehlte; rote Linie 2 lud zum Gegenschluss ein | **REPARIERT.** Rote Linie 2 trägt jetzt den ausdrücklichen Gegenschluss-Ausschluss in derselben Form wie R-A7.6 |
| **P-08** | § 8 leitete „kleinteiliger Bestand" aus Ø-Werten ab — genau die Ableitung, die die zwei Zeilen darunter zitierte Quellwarnung verbietet | **REPARIERT.** Die Ø-Werte sind als Begründung **ganz entfallen**; die Vergabelinien nennen ausdrücklich, dass die mittlere Betriebsgröße **nicht** als Kriterium verwendet wird |
| **P-09** | Priorisierung wandte ihr Kriterium nicht auf alle Kandidaten an (Kiel 39 vor Pinneberg 58) | **REPARIERT.** Zwei Vergabelinien explizit (L-1 Betriebszahl · L-2 Pilotnähe), **alle 15 Kreise einzeln in der Tabelle**, Kiels Anhebung ausdrücklich als L-2-Fall begründet |
| **P-10** | „übrige **neun** Kreise" — SH hat 15, sieben genannt → acht | **REPARIERT.** Sammelzeile ganz aufgelöst; Summenprobe über alle 15 Zeilen = 1.038 = Landeszeile, **Namen-Zahl-Zuordnung per Skript gegen die Quelle geprüft (15/15 zeilengenau)** |
| **P-11** | Vier User-Handgriffe auf **Sonntag** 16.08. terminiert, ohne Wochentags-Etikett | **REPARIERT.** Alle Handgriff-Termine tragen jetzt Wochentage; H-1/H-2/H-6/H-7 auf **Fr 14.08.** gezogen. Neuer **H-8** (StB-Stand, Do 13.08.) |
| **P-12** | „Baustart spätestens Mo 17.08." unvereinbar mit der eigenen Dauer 3–4 Wochen | **REPARIERT.** S4 nennt jetzt **Fr 14.08. (4 Wochen) bzw. Fr 21.08. (3 Wochen)** mit Zählweg — und benennt die Folge: S4 und S5 fallen konservativ auf **denselben Tag**, null Tage Puffer |
| **P-13** | N-3/KPI-5-Begründung stand an der zitierten Fundstelle nicht | **REPARIERT.** Fundstelle auf § (c) Punkt 3 korrigiert, Begründung auf den belegbaren Teil verkürzt, und die Gegenaussage der Quelle (LinkedIn = „Fehlbesetzung", Punkt 1) ausdrücklich mitgenommen |
| **P-14** | Systematisch falsche interne Verweise (Prüfkette, § 9.2/§ 9.3, sechsmal „§ 11, O-x", zwei im Akquiseplan) | **REPARIERT, alle.** Prüfkette [1]→§ 4 und [4]→§ 7; § 9.3→§ 7.3; § 9.2→§ 7.2; sechs § 11-Verweise → § 10 (fünf davon in der Form „§ 10, O-x", einer als „(§ 10)"); „§ 7 K2 dort"→„R-A2.1 in § 4.2 und Feld F-10 in § 6"; „§§ 3–4"→„§ 3 (D2) und § 2.3 (Weg b)". **Nachgemessen mit Positivkontrolle:** „§ 11, O-" jetzt 0 Treffer, „§ 10" 6 Treffer; „D3.2" 0 Treffer in beiden Dokumenten bei „D3 Punkt 2" je 1 Treffer; „beck-online" je 1 Treffer in beiden |
| **P-15** | § 4.5 gab den A7-Impressumssatz ohne Vorwärtsverweis wieder — die Kollisionsregel führte dort zum falschen Ergebnis | **REPARIERT.** § 4.5 trägt einen eigenen Kasten: Satz überholt durch den D3-Entscheid, **Vorbehalt der Aufsichtsauffassung bleibt**, und die Kollisionsregel ist für diesen Fall ausdrücklich aufgelöst. **Der fehlende Vorwärtsverweis in der Rechtsmatrix selbst ist als N-7 gemeldet** |
| **P-16** | Gleichsetzung „24 Monate = Löschfrist des VVT-Eintrags für die Zielkundenliste" ungeprüft weitergereicht | **REPARIERT.** § 3 Pflicht 3 stellt jetzt klar, dass die Frist die **Kundenliste** betrifft und für die Zielkundenliste **keine** Frist entschieden ist (D2 Pflicht 3 also nicht halb erledigt); Überschrift entsprechend geändert. **Als N-6 an MKT-HANDEL gemeldet**, samt der nicht übernommenen zweiten Hälfte des Quellvorschlags |
| **P-25** | FUND2-Vorbehalt fehlte in § 4.3/§ 6 des Akquiseplans — dort, wo Kanäle und Mengen zugeteilt werden | **REPARIERT.** Eigener Vorbehaltskasten an § 4.3, der zusätzlich benennt, **welche Zeilen** der Persona-Befund kippen kann und welche nicht |

---

## HINWEIS (8 von 8 repariert)

| ID | Kurz | Disposition |
|---|---|---|
| **P-17** | „~100 Stück" ohne Zählweg, wurde in § 6 zur harten Zielgröße | **REPARIERT — und die Aussage hat sich dabei gedreht.** Eigene Rechnung ergänzt (P(0) = (1−p)^n, Tabelle 50/100/300). Ergebnis: **erst ab ~300** ist ein Null-Ergebnis interpretierbar; die Schwelle 100 war unbegründet. Als **A-8** ins Annahme-Register mit Zählweg, im Terminplan nachgezogen — samt der unbequemen Folge, dass eine belastbare Messwelle bereits in der als unrealistisch ausgewiesenen Größenordnung liegt |
| **P-18** | Aussage über eine „Untergrenze" der Quelle untergeschoben (die Quelle spricht nur von der Obergrenze) | **REPARIERT.** § 10 sagt jetzt: Obergrenze bewusst offen (Zitat), **Untergrenze unbeschrieben — Lücke, keine Entscheidung** |
| **P-19** | Bedingung „Notfallpfad **nach 4 Wochen**" weggefallen | **REPARIERT.** § 3.2 Pfad (b) trägt die Bedingung wörtlich und nennt den Pfad ausdrücklich „gestuft, keine sofortige Entweder-oder-Wahl" |
| **P-20** | „Kontaktformular ist kein Ersatzweg" erhob ein „ungeklärt" zur Entscheidung | **REPARIERT.** R-A1.3 zitiert jetzt den Quellwortlaut und kennzeichnet die Regel ausdrücklich als **Vorsichtsregel, kein Rechtsstand** |
| **P-21** | STREITIG-Markierung beim Newsletter-Tracking verloren | **REPARIERT.** R-A6.3 nennt den Streitstand (BfDI ↔ EDSA-Einschränkung ↔ Interessenverband) — und begründet, warum die Tool-Anforderung trotzdem bleibt: Sie kostet nichts und hält beide Auslegungen offen |
| **P-22** | Notationskollision: „Stufen ①–④" gegen die Belegstufen-Legende desselben Dokuments | **REPARIERT** → „Stufen S1–S4" |
| **P-23** | Verstrichener StB-Termin (Mo 10.08.) als anstehend wiedergegeben | **REPARIERT.** § 3.1 weist ihn als **überfällig** aus („war gestern; ob er stattgefunden hat, ist im Repo nicht dokumentiert"), neuer Handgriff **H-8** als erste Frage des Tages |
| **P-24** | Uneinheitlich „D3.2" vs. „D3 Punkt 2" (die Rechtsmatrix kennt keine Ebene D3.2) | **REPARIERT.** Durchgehend „Weg-b-Pflichten aus D3 Punkt 2"; „D3.2" kommt in keinem der beiden Dokumente mehr vor (grep: 0 Treffer) |

---

## Aus den Pflichtfragen des Prüfers aufgenommen

| ID | Befund | Disposition |
|---|---|---|
| **P-26** | **Teil B der Rechtsmatrix (Rechtsfolgen: wer kann angreifen, was kostet es) war in keines der beiden Dokumente eingeflossen.** Der Prüfer bemerkte es erst beim Beantworten von Pflichtfrage 1 und ließ ausdrücklich offen, ob es Lücke oder Scope-Grenze ist | **ALS LÜCKE BEWERTET UND REPARIERT.** Begründung: Der D3-Entscheid trägt ein Risiko **bewusst** — dann gehört seine Größenordnung ins Regelwerk, sonst trägt man eine Zahl, die man nicht kennt. Neuer **§ 8a** („Was ein Verstoß kostet — und wer überhaupt angreifen kann") mit den Kernaussagen aus B1–B4 und zwei abgeleiteten Betriebsregeln: **R-K1** (Wellengröße ist auch eine Risikogröße — der Kostensprung liegt bei der Massenaussendung) und **R-K2** (keine Unterlassungserklärung ohne Prüfung gegen § 13 Abs. 2 und ohne anwaltlichen Rat) |

---

## Die vom Prüfer offen gelassenen Prüfschritte — was daraus wird

Der Prüflauf war durch ein Session-Limit abgebrochen. Diese Punkte sind
**nicht erledigt** und werden auch nicht als erledigt geführt:

| # | Offener Prüfschritt | Disposition |
|---|---|---|
| 1 | **Kategorie (3) nur teilweise** — nicht zurückverfolgt: „über 1.400 Adressaten", „~159 Einträge", „13 Art.-14-Angaben", „unter 20 Personen", „vier Jahre", alle Aktenzeichen und Randnummern | **BLEIBT OFFEN, mit Träger.** Alle genannten Zahlen stammen aus der Rechtsmatrix und wären eine Prüfung **der Rechtsmatrix** — Träger MKT-HANDEL. Die beiden Dokumente kennzeichnen die DEHOGA-Zahl bereits selbst als zweite Hand |
| 2 | **Kategorie (4) nur teilweise** — § 7.4 und R-A6.1/2/4/6 nur stichprobenhaft | **BLEIBT OFFEN.** Kandidat für den nächsten Prüflauf; nicht durch eigene Nachprüfung ersetzt, weil ein Selbstabgleich hier genau die Leserichtung hätte, die der Prüfer als wirksam beschreibt (von der Quelle rückwärts) |
| 3 | **Rückbau-Gegenprobe am Skript begonnen, Kontrollprobe fehlgeschlagen** | **ERLEDIGT — auf anderem Weg.** Die Gegenprobe ist jetzt **im Skript** verankert (je Blockzitat eine Verfälschung, die durchfallen muss, plus Fallback, damit nie eine Gegenprobe still ausfällt) und läuft bei jedem Aufruf mit: 3/3 bestanden. Damit hängt der Nachweis nicht mehr an einer manuellen Probe im Scratchpad |
| 4 | **`beleg/baseline-messplan.md` nicht gelesen** — die Aussage „§ 5 dort ist das Muster" ist nur auf Überschriftenebene bestätigt | **GEPRÜFT von dieser Session** (§ 5 dort im Volltext gelesen, 286–347): Der Abschnitt trägt tatsächlich eine Rückwärtsrechnung vom Livegang mit konservativem Planungsanker und Erfragungs-Handgriff (H-1 dort) — genau die Bauform, die dieser Plan übernimmt. **Zusätzlich ist jetzt ein Positivkontroll-Anker auf diese Datei im Prüfskript** |
| 5 | **Nicht geprüft: ob die Rechtsmatrix selbst inhaltlich richtig ist** | **AUSSERHALB DES SCOPE — bleibt so.** Beide Dokumente tragen die Geltungsgrenze der Rechtsmatrix ausdrücklich mit |

---

## Was der Prüfer über sein eigenes Verfahren gesagt hat — und was ich daraus übernehme

Seine Antwort auf „Hättest du deine Funde auch ohne die Kategorien
gefunden?" ist der nützlichste Teil des Protokolls:

- **P-06, P-07 und P-16 hat er nur gefunden, weil Kategorie (4) ihn
  gezwungen hat, VON DER QUELLE RÜCKWÄRTS zu lesen** („was steht in
  A7/A3, das im Zieldokument fehlt?") statt vorwärts. Es sind
  **Abwesenheiten** — ein fehlender Vorbehalt erzeugt keine auffällige
  Textstelle. Ohne diese Leserichtung wäre der wichtigste Befundtyp
  komplett ausgefallen.
- **Kategorie (2) allein hätte P-01 verdeckt:** Abzählen ergab 6/6 und
  4/4 — sauber. Erst die Frage nach dem **Status** statt der
  **Anwesenheit** brachte den schwersten Befund. *Anwesenheit ist nicht
  Wirksamkeit.*
- **Was keine seiner fünf Kategorien fragte:** „Was aus der Quelle ist
  gar nicht erst angekommen?" — genau daraus wurde P-26.

**Übernahme für den nächsten Prüfauftrag dieser Art:** eine sechste
Pflicht-Kategorie „**Was aus der Quelle fehlt vollständig?**", ausdrücklich
rückwärts zu lesen. Als Vorschlag an die Leitsession gemeldet
(Abschlussmeldung, Block 4).
