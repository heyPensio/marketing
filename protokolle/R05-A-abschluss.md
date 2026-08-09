# R05-A — Abschlussmeldung (Ben Beckman, FUND3-Beratungsachse)

> **Token-Verbrauch: von der Session nicht erhebbar** — Subagenten-Zahlen
> soweit bekannt: P13-Bestandssichtung ~197k · Marketing-Agenturen ~189k ·
> Unternehmensberatung ~205k · Revenue/Smart Host ~177k · Brandnamic
> ~183k · Digitalisierungsberatung ~229k · Verbands-/Förderkanäle ~267k ·
> Prüfer (Zahl siehe § 5). Summe der sieben Recherche-Stränge rund
> **1,45 Mio** Subagenten-Token; der Verbrauch der Leitsession selbst ist
> über die verfügbaren Kanäle nicht auslesbar.
>
> **Modell:** Vorgabe der Leitsession war Opus 5. Die Statuszeile zeigte
> beim Start **Fable 5**; der User hat auf Nachfrage umgestellt
> (Bestätigung im Chat, nicht per Statuszeile gegengelesen — die
> Selbstauskunft des Modells ist kein zulässiger Kanal). **Damit bleibt
> die Modellfrage für den ersten Sessionabschnitt offen** und gehört auf
> die Statuszeilen-Sichtungsliste, die bereits für R3-A/B/D und R04-A
> geführt wird.

---

## Block 1 — Gebaut und verifiziert (mit Commits und Pfaden)

**Commits (alle gepusht, Branch `main`):**

| Hash | Inhalt |
|---|---|
| `1c33e8e` | Teil B angelegt: Raster + Vergabelinien, Everlast-Richtigstellung, B4/B5/B7, Fundstellen-Protokoll |
| `e1ed2e7` | Brandnamic-Neueinstufung (B4.3) + Revenue-Achse/Smart Host (B6) |
| `ff7f097` | Bündel-Wettbewerb (B8) + § 7 P12/P13 aufgelöst, P14–P17 neu |
| `34bbda2` | Verbands-/Förderkanäle (B9) + Geltungsgrenze B1 |
| *(Prüfer-Commit siehe § 5)* | `protokolle/R05-A-pruefer.md` + Reparaturen |

**Dateien:**
- `fund/wettbewerbsbild.md` — **Teil B angebaut** (B1–B9). Teil A
  (§§ 0–8) inhaltlich unverändert; ergänzt wurden nur der Lese-Hinweis im
  Kopf, drei Vorwärtsverweise (§ 0.0 zweimal, § 5.5 einmal), die
  P12/P13-Auflösung und vier neue Prüfpunkte in § 7 sowie eine
  Changelog-Zeile.
- `protokolle/R05-A-fundstellen.md` — **neu**, Fundstellen-Nachprüfung
  der R04-Kernaussagen (Auftragsteil 4).
- `protokolle/R05-A-pruefer.md` — **neu**, Prüferprotokoll.
- `protokolle/R05-A-abschluss.md` — diese Datei.

**Fertig-Kriterium, Punkt für Punkt:**

1. ✅ **Beratungs-/Agentur-Abschnitt mit expliziten Vergabelinien** —
   B2 führt fünf Einstufungen (W1/W2/K/N/—) und **sechs benannte
   Vergabelinien L-B1…L-B6**. Die Kategorie „—" (keine Überschneidung am
   heutigen Portfolio) wurde eingeführt, weil „N" sonst zwei verschiedene
   Sachverhalte vermischt hätte.
2. ✅ **Geltungsgrenze § 0.0 aktualisiert** — Vorwärtsverweis-Kasten
   gesetzt, plus punktgenauer Verweis am falschen Everlast-Satz. Die
   neue Geltungsgrenze für Teil B steht in **B1** (was erhoben ist, was
   ausdrücklich nicht).
3. ✅ **P12 aufgelöst** — fünf Felder erhoben: 16 Marketing-Agenturen
   (B4), 15 Unternehmensberatungen (B5), 12 Revenue-/Zahlenanalyse-
   Anbieter (B6), 17 Digitalisierungs-Dienstleister (B8), Verbands-/
   Kammer-/Förderkanäle (B9). **Rest-Stand ehrlich vermerkt:** keine
   Vollerhebung, Lücken in B1 benannt.
4. ✅ **P13 aufgelöst** — B7. Über den bekannten Brandnamic-Fall hinaus
   **elf weitere Anbieter**, die nie als Wettbewerber betrachtet wurden.
   Rest: zwei heypensio-Dateien nur per Grep berührt (in B7 vermerkt).
5. ✅ **Je Rückprüfungs-Kandidat eine belegte Einstufung** —
   Brandnamic **dreiteilig** (B4.3), Smart Host **W1 + K** (B6.1),
   Everlast **N** (B3).
6. ✅ **Fundstellen-Nachprüfung dokumentiert** —
   `protokolle/R05-A-fundstellen.md`, sechs Kernaussagen, Leseweg und
   Quellenart getrennt ausgewiesen.
7. ✅ **Prüferprotokoll liegt daneben** — § 5.

---

## Block 2 — Offen geblieben

1. **⚠️ TERMINKRITISCH, Entscheid nicht bei mir: die BAFA-Frage berührt
   den StB-Termin am Montag (10.08.).** Die BAFA-Richtlinie verlangt vom
   Berater „mehr als 50 % des Gesamtumsatzes" aus **entgeltlicher
   Unternehmensberatung**. Wer überwiegend Umsetzung verkauft, ist
   untauglich. Das ist eine Frage an die **Umsatz- und
   Angebotsarchitektur**, nicht ans Marketing — und sie steht neben den
   bereits gemeldeten Kayhan-Posten auf derselben Agenda. Ich habe
   **keine Postkorb-Meldung in `zentrale\eingang\` geschrieben**, weil
   mein Start-Prompt das Zentrale-Repo ausdrücklich auf „nur lesend"
   setzt — die Entscheidung, ob das noch vor Montag in die
   StB-Fragenliste geht, liegt bei der Leitsession. **Beleg: B9.4.**
2. **⚠️ Frist 16.11.2026 — Hamburg Digital Check.** 50 % / max. 7.500 €,
   Qualifikationsnachweis nur per Selbsterklärung, aber „Anträge müssen
   vollständig **bis 16.11.2026**" gestellt sein, dazu Kumulierungsverbot
   und Verbot des vorzeitigen Vorhabenbeginns. Ob Marketing-/
   Sichtbarkeitsberatung überhaupt unter „Digitaler Wandel" fällt, ist
   **weder benannt noch ausgeschlossen** und muss bei der IFB vorab
   geklärt werden (B9.4).
3. **P15 — was decken straiv, flexipass, hoteldoor und iiq check im
   Brandnamic-Partnerkreis ab?** Belegt ist nur die Nennung und die
   Kategoriezuordnung am Markup, **nicht** das tatsächliche Angebot
   dieser vier. Voraussetzung jeder Kanal-Entscheidung.
4. **P16 — sieben namentlich bekannte Kandidaten blieben kanalbedingt
   unerhoben** (TLS-Fehler, HTTP 500, DNS, SPA): u. a. Kirsch
   Unternehmensberatung (laut Suchtreffer Privathotellerie-Spezialist
   seit 1997), Hotel Fritz, Kohl & Partner Schweiz, 9seemeilen,
   Swiss Urban & Mountain Hospitality *(letzteres über den
   Digitalisierungs-Strang dann doch erhoben — siehe B8.1)*,
   hotel-it.ch, hotel-it-dresden.com.
5. **P17 — reine Gästemappen-/Guest-App-Anbieter** sind systematisch
   nicht erhoben; sie fielen durch alle Suchraster, sind aber für unser
   Portfolio die eigentliche Nachbarschaft.
6. **MDZ Schleswig-Holstein: Status nicht entscheidbar** — Footer sagt
   „wurde bis Januar 2025 gefördert", der Fließtext derselben Seite wirbt
   im Präsens. Als „nicht prüfbar" geführt, nicht zu „läuft nicht mehr"
   geglättet.
7. **Keine Registerauszüge, keine Drittquellen.** Teil B beruht fast
   vollständig auf Anbieter-Selbstdarstellungen (B1 Punkt 4/5).

---

## Block 3 — Nebenbefunde außerhalb des Auftrags (mit Zielort)

**An MKT-FUND / Leitsession (Positionierungspapier ist verabschiedet und
nicht mein Scope — deshalb gemeldet, nicht geändert):**

1. **Der Satz im Papier-Kasten § 6 „im Bestand OHNE Substanz und ohne
   Träger" (zu den Agentur-Aufbau-Posten) ist zu pauschal.** Meine
   Gegenprobe mit zweitem Lesekanal (18 Treffer/7 Dateien,
   Positivkontrolle „Meldeschein" 796 Treffer ✔) zeigt: **technisches
   Onpage-SEO ist im Bestand dokumentiert** — mit Maßnahmenliste,
   Aufwandsschätzung („3–5 h", „3–4 h") und einer ausdrücklichen
   Lieferumfang-Zusage („eine 301-Weiterleitungs-Map … **gehört trotzdem
   zum Lieferumfang**"). Für Social, Ads und Bewertungsmanagement hält
   das Negativ, für Onpage-SEO nicht. **Zielort:**
   `fund/positionierungspapier.md` § 6-Kasten — als markierter Nachtrag,
   das Original bleibt sichtbar. Beleg: `R05-A-fundstellen.md` N-6.
2. **Drei unabhängige Größenschwellen für die Persona-Frage** — „Bei
   weniger als 30 Zimmern fehlt die Projektgrundlage" (Bräu), „ab etwa
   1 Mio. Euro Jahresumsatz" (anfang.team), Einstieg 5.000 CHF
   Implementierung (SUM) — gegen einen einzigen Anbieter, der kleine
   Häuser ausdrücklich adressiert (TH-Experts). **Zielort:**
   `fund/persona-validierungsplan.md` bzw. Positionierungspapier § 3.3
   (Größen-Obergrenze, offener Punkt 3 dort). **Ausdrücklich nicht
   entschieden**, ob das Chance oder Warnung ist. Beleg: B8.3.
3. **Das Feld hat ein besetztes Zielgruppen-Vokabular** („Privathotels",
   „inhabergeführt", „familiengeführt", „unabhängige Hotels",
   „Ferienhotellerie"). Direkter Eingangswert für **FUND4
   (Kern-Wording)** — diese Wörter sind nicht frei. Beleg: B4.4 Punkt 3.
4. **Die Unabhängigkeitsfrage ist im Beratungsfeld ungelöst** und trifft
   uns direkt: Wir verkaufen Beratung UND eigene Technik. Drei Lager im
   Markt (erklärt unabhängig ohne Produkt · erklärt unabhängig trotz
   eigener Produkte · weicht der Frage aus). Das ist eine
   Positionierungs-, keine Formulierungsfrage. Beleg: B5.4 Punkt 5.

**An MKT-HANDEL:**

5. **Erste belastbare Preisanker des Beratungsmarkts** — DEHOGA BW
   985 € Nettotagessatz / 499 € Eigenanteil · melevo 130 €/h und
   603/1.150/2.200 € Retainer · SUM 400–4.000 CHF/Monat plus
   5.000–18.000 CHF Implementierung · COM.CIERGE 990–2.990 CHF ·
   RevenueRise ab 879 · Brandnamic 115 €/h netto (AGB) · IHA Preferred
   Partner 8.150 €/Jahr. ⚠️ **Nur bei dreien ist die Steuerbasis
   ausgewiesen** — vor jedem Vergleich normalisieren.
6. **Die BAFA-Umsatzschwelle ist eine Architekturfrage** (siehe Block 2
   Punkt 1).
7. **Preisintransparenz ist Feldnorm** (15/16 Agenturen, 14/15 Berater
   ohne Zahl) — ein veröffentlichter Preis wäre ein
   Differenzierungsmerkmal.

**An MKT-AKQ:**

8. **Drei listbare, öffentliche Kanäle mit Eintrittsweg:** die
   **IHK-Designkontor-Anbieterliste** (~159 Einträge, offene
   Selbstaufnahme, Zielgruppe Beherbergung) · das **Mews-Berater-
   verzeichnis** (15 Einträge, vier DACH) · das **DEHOGA-Hamburg-
   Partnerprogramm** (vier Level, Newsletter 1400+, ab Gold
   Kategorie-Exklusivität). ⚠️ **UWG-relevant:** Die Designkontor-Liste
   trägt „Die Daten dürfen **nicht zu Werbezwecken** genutzt werden" —
   Eintragskanal ja, Adressquelle nein. Gehört vor jeder Nutzung durch
   die Kanal-Rechtsmatrix (§ 7 UWG), die laut CLAUDE.md dem
   Zielkundenlisten-Bau vorausgeht.
9. **Die konkreteste Andockstelle im ganzen Dossier:** DEHOGA Hamburg
   delegiert Beratung an fünf externe Partner — **keiner davon deckt
   Digitalisierung oder Marketing ab** (Suchraum + Positivkontrolle in
   B9.1).
10. **Brandnamic ist auf der Internorga Hamburg präsent** — genau dem
    Messe-Kanal, den MKT-AKQ als Rückwärts-Anker führt.
11. **Online Birds besetzt beim IHA unseren Einstiegsköder** (kostenlose
    Online-Marketing-Kanalanalyse für Mitglieder). Ein IHA-Eintritt wäre
    ein Frontalangriff auf einen etablierten Partner desselben Verbands.

**An das Produkt-Repo (heypensio) — Übergabe über dessen Leitsession,
NICHT von mir geschrieben:**

12. ~~**Bestands-Widerspruch masunt-Partnerkondition**~~ ❌ **ENTFÄLLT** —
    war mein Lesefehler, nicht ein Bestandsfehler. Der Kopfblock der
    Quelle löst die Frage ausdrücklich auf („Partner-Status 15 % Rabatt
    (Korrektur ggü. ‚5 %')"). Details in § 5. **An das Produkt-Repo ist
    hier nichts zu melden.**
13. **Zwei Vorwärtsverweise fehlen im Alt-Bestand:**
    `firzlaff\hardware\nachfassrunde-2026-07-28.md` § 4 (Brandnamic
    „kein Wettbewerber") und `firzlaff\marktrecherche-apaleo-store-2026-07.md`
    brauchen den Hinweis auf die Neu-Einstufung in B4.3/B7. Der Posten
    ist in `projektquelle-mkt.md` § 5 bereits als Übergabe-Kandidat
    vermerkt.
14. **Verwechslungsfalle im Bestand:** AG269 = 2.265,76 € **brutto**
    (Website-Angebot) gegen Creone KeyBox über masunt = 2.265,96 €
    **netto**. 20 Cent Differenz, verschiedene Steuerbasis, verschiedene
    Geschäfte.

**Ohne Zielort, ausdrücklich nicht verfolgt:**

15. **Ein Content-Farm-Netzwerk** (fünf bis sechs Magazin-Domains mit
    identischem Artikeltext) dominiert die Suchergebnisse zu „Hotel +
    KI". Für uns nur als Warnung relevant: Wer dort recherchiert, hält
    Textklone für Marktbreite.
16. **Toter Verweis mit Schadenspotenzial:** Die KfW-Beraterbörse wurde
    zum 31.12.2019 eingestellt; die alte Domain liefert heute eine
    **Online-Casino-Affiliate-Seite**. Eine IHK-Seite verlinkt sie noch.
    Betrifft uns nicht direkt — wäre aber ein peinlicher Fehler in einem
    Kundentext.

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

**F-1 — Eine abgeschnittene Grep-Ausgabe erzeugt ein falsches Negativ,
das wie ein Quellenfehler aussieht.** Mein erster Suchlauf zum Zitat
„sichtbar und damit abschaltbar" lieferte nur Technik-Treffer und legte
nahe, die R04-Erhebung habe falsch zitiert. Ursache war das
`head_limit` meines eigenen Laufs, nicht die Quelle — das Zitat ist
wörtlich belegt. **Regel:** Ein Nulltreffer aus einer limitierten
Ausgabe ist kein Negativ. Suchläufe für Zitatprüfungen so eng fassen,
dass die Ausgabe vollständig ist. *(Verwandt mit der bereits
dokumentierten `grep -c`-Falle im Baustein `windows-powershell`.)*

**F-2 — Zwei Beträge mit 20 Cent Differenz in verschiedenen
Sachverhalten.** 2.265,76 € brutto (Agenturangebot) und 2.265,96 € netto
(Schlüsselkasten). Eine Zahl trägt den Scope ihrer Zeile, nicht den ihres
Namens — hier hätte jede Verwechslung plausibel ausgesehen.

**F-3 — Ein Wildcard-Redirect macht jede Unterseite byte-identisch mit
der Startseite.** `dehoga-bundesverband.de/<pfad>` liefert für **jeden**
Pfad einen 301 auf die Wurzel; mit `curl -L` sieht das aus wie „Inhalt
vorhanden, Begriff nicht gefunden". Ohne Prüfung des Redirect-Ziels wären
sämtliche DEHOGA-Negative falsch gewesen.

**F-4 — Die Musterwahl entscheidet über den Negativbefund.** Bei
Brandnamic hätten die engen Muster `self-check-in|online-check-in|
web-check-in` das vorhandene **„Pre-Check-in"** übersehen. Erst der
bewusst breite Oberbegriff `check-in` hat es sichtbar gemacht. **Ein
Negativ misst immer auch das Muster, nicht nur den Bestand.**

**F-5 — Regex-Fehler, die plausible Nullen erzeugen.** Zwei Agenten
fingen es selbst: `EUR\b` matcht „Euro" nicht (hätte „kein Anbieter nennt
Zahlen" ergeben), und `-c` zusammen mit `-o` liefert für jede Datei
dieselbe Zahl 1. **Eine Zahl, die für viele verschiedene Quellen
identisch ist, ist ein Werkzeugfehler, kein Befund.**

**F-6 — Anbietergenerierte KI-Zusammenfassungen als Falle neuer Art.**
Brandnamic liefert zu jeder Seite eine `.md`-Fassung über `llms.txt`,
teils mit explizitem Kürzungsvermerk. Wer sie als Quelle nimmt, zitiert
die Zusammenfassung des Anbieters über sich selbst — eine Stufe unter
der Selbstauskunft. Nur zur Navigation benutzt, nie als Zitatquelle.

**F-7 — Eine veraltete Richtlinien-Verlinkung kann den eigenen Ausschluss
vortäuschen.** Die WTSH verlinkt als „Richtlinie" weiter die Fassung von
2023 mit go-digital-Lizenzpflicht; die geltende Fassung vom 05.03.2026
hat diese Pflicht gestrichen. **Wer nur dem Link folgt, hält sich
fälschlich für nicht förderfähig.** Fundstelle und Geltungsstand sind
zwei verschiedene Prüfungen.

**F-8 — Die Klassifikator-Blockade beim `git push` trat erneut auf** und
ließ sich wie in L-05 dokumentiert **im Bash-Kanal** ausführen. Der
Befund altert nicht: Die Blockade ist kanalgebunden, nicht sachgebunden.

### (ii) Bewährte Muster

**M-1 — Die Fundstellen-Nachprüfung selbst machen, nicht delegieren.**
Der ganze Zweck ist das Anheben des Beleg-Typs; ein Agent hätte
„agentengelesen" nur reproduziert. Der Aufwand war klein (sechs
Kernaussagen), der Ertrag zwei echte Befunde.

**M-2 — Vergabelinien VOR den Einstufungen schreiben.** Erst beim
Ausformulieren von L-B1 fiel auf, dass „Aufbau-Posten begründen
Wettbewerb" jede DACH-Agentur automatisch zum Wettbewerber gemacht
hätte — eine beeindruckende und wertlose Zahl. Die Randschärfung
(Onpage-SEO zählt doch als real erbracht) folgte erst aus der
Nachprüfung; **die Linie musste nachträglich präzisiert werden, und das
war sichtbar, weil sie ausgeschrieben war.**

**M-3 — „Raster nicht anwendbar" als eigene Kategorie.** Everlast wäre
sonst zwangsweise auf einer Wettbewerbsskala gelandet, auf die er
sachlich nicht gehört. Und die zusätzliche Kategorie „—" (keine
Überschneidung am heutigen Portfolio) hält den Fall offen, der sich durch
eine Portfolio-Erweiterung ändern kann — genau der Fall, der dieses
ganze Teil B ausgelöst hat.

**M-4 — Recherche-Aufträge ohne Kandidatennamen formulieren.** Bekannte
Anbieter kamen in die **Ausschlussliste**, nicht in den Suchauftrag. Das
hat funktioniert: Die wertvollsten Funde (SUM Hospitality, work@hotel,
Bräu, anfang.team, DEHOGA BW) waren vorher unbekannt.

**M-5 — Einen Anbieter tief prüfen statt breit.** Der Brandnamic-Strang
mit Vollsuchraum (476 Seiten, zwei unabhängige Läufe, Positivkontrollen
476/476) hat als einziger die Alt-Begründung **belastbar bestätigt** und
zugleich ihre Schlussfolgerung gekippt. Ein Breitensweep hätte beides
nicht geleistet.

**M-6 — Negative Feldbefunde sind oft die wertvolleren.** „Apaleo hat
kein öffentliches Beraterverzeichnis, Mews schon" und „DEHOGA Hamburg
hat keinen Digital-Beratungspartner" sind beides Abwesenheiten — und
beides die konkretesten Kanalhinweise des ganzen Dossiers.

**M-7 — Die Deutung offenlassen, wenn die Daten sie nicht tragen.** Bei
den drei Größenschwellen war die Versuchung groß, „unser freies Feld" zu
schreiben. Belegt ist nur, dass etablierte Anbieter dort nicht arbeiten —
warum, ist nicht erhoben. Die Alternativdeutung („es trägt sich nicht")
steht deshalb gleichrangig im Text.

---

## § 5 — Prüferprotokoll und Reparaturen

**Protokoll:** `protokolle/R05-A-pruefer.md` (Commit `629d18d`).
**Subagenten-Token des Prüfers: ~346k.** Schreibrecht war auf diese eine
Datei begrenzt und wurde eingehalten.

**Sein Gesamturteil:** Die Zahlenarbeit ist sauber — **28 von 30 selbst
nachgezählten Werten stimmten zeichengenau, kein einziger erfundener
Wert**. Die Fehler lagen eine Ebene darüber: **beim Verdichten von
Messung zu Aussage.** Genau die Schwachstelle, vor der CLAUDE.md warnt.

**Vier KRITISCH-Befunde — alle repariert, zwei davon habe ich vor der
Reparatur selbst an der Rohquelle nachgemessen:**

1. **Apaleo-Store-Kategorien: 7 behauptet, tatsächlich 9.** ✅ **Selbst
   verifiziert** (beide Rohdateien, je 9 eindeutige Werte) — es fehlten
   „Restaurant & spa" und „Meetings & events", **beide in Teil A § 4.1
   desselben Papiers mit Zahlen geführt**. Repariert; zusätzlich die
   Fehl-Entwarnung „bestätigt die MKT-R3-Messung" gestrichen und die
   Positivkontrolle ersetzt — die alte prüfte nur, **ob** die Nutzlast
   gefunden wurde, nicht **ob die Liste vollständig extrahiert** war.
2. **BAFA-Zitat ohne seine Ausnahmeklausel.** Die Richtlinie endet nicht
   bei der 50-%-Umsatzschwelle: „In begründeten Fällen kann die
   Bewilligungsbehörde … eine befristete Ausnahmegenehmigung erteilen."
   Ich hatte daraus die Feststellung „BAFA-untauglich" gemacht und darauf
   den ganzen P14-Umbau gestützt. Repariert in B9.4 und P14.
3. **W1-Inflation: 15 von 15 Beratern bekamen W1**, obwohl Nachfolge,
   Sanierung, Interim und Gutachten in der R04-Negativliste stehen. Die
   Vergabe funktionierte nur über den **still mitlaufenden
   E13b-Pauschalzuschnitt**. Repariert durch eine neue, ausgeschriebene
   Vergabelinie **L-B7**; zwei Einstufungen auf „—" korrigiert, drei mit
   Teilleistungs-Vermerk. Zusätzlich maxonline W2 → **W1** (Verstoß gegen
   meine eigene Linie L-B1).
4. **Die Geltungsgrenze B1 verschwieg zwei Lücken** — Steuer-/
   betriebswirtschaftliche Beratung (in Teil A § 0.0 namentlich als nicht
   erhoben geführt!) und Hotelkooperationen. Letzteres kippt zugleich die
   Brandnamic-Kanaleinstufung: Brandnamic führt mit Kohl & Partner zwei
   Südtiroler Kooperationsgruppen — ein Zielgruppen-Zugang neben dem
   Technik-Partnerprogramm. Repariert; neue Punkte **P18/P19**.

**Weitere übernommene Befunde:** DEHOGA-BW-Eigenanteile ohne die Einheit
„je Beratungstag" (**derselbe Fehlertyp, den mein eigenes B6.1 bei Smart
Host als irreführend rügt** — Doppelmaßstab, jetzt beseitigt) · „Browser
… wurde nicht benötigt" als Entwarnung im Widerspruch zur eigenen
Geltungsgrenze · § 5.5-Verweis präzisiert (das Technik-Negativ bleibt so
schwach, wie Teil A es selbst markiert) · **P9 als erledigt markiert**
(47 IHA-Partner vollständig erhoben) · neuer Punkt **P20**: Teil B nennt
bei den meisten Zitaten keine URL, die Belegbasis liegt nur im
**sessiongebundenen Scratchpad** und verfällt mit der Session.

**Ein Prüferbefund traf mein eigenes Nachprüfungsprotokoll — und er hat
recht:** Meine Aussage, der masunt-Rabatt-Widerspruch (5 % vs. 15 %) sei
aus dem Bestand nicht auflösbar, ist **widerlegt**. Der Kopfblock
derselben Datei sagt wörtlich „Partner-Status **15 % Rabatt (Korrektur
ggü. ‚5 %')**". ✅ **Selbst verifiziert.** Ich hatte zwei Zahlen gefunden
und daraus einen Widerspruch gemacht, ohne den Kopfblock mitzulesen.
`R05-A-fundstellen.md` N-5 ist korrigiert; **der entsprechende
Nebenbefund an das Produkt-Repo (Block 3 Punkt 12) entfällt ersatzlos.**

**Nicht repariert (bewusst):** Der Prüfer führt 10 HINWEISE, 3 als
Verdacht markierte Punkte und 6 als „nicht prüfbar". Die Hinweise
betreffen überwiegend Formulierungsschärfe; **P20 (Belegbasis sichern)
ist der einzige davon, der zeitkritisch ist** und deshalb als
Prüfpunkt im Papier steht statt als stille Reparatur.

---

### Nachtrag zu Block 4 (i): zwei Fallen, die erst der Prüfer gefangen hat

**F-9 — Eine Positivkontrolle, die die falsche Frage stellt, ist keine.**
Bei den Apaleo-Kategorien habe ich geprüft, **ob die Nutzlast gefunden
wurde** (`__NEXT_DATA__` → 1 Treffer ✔) — die Extraktion daraus war
trotzdem unvollständig. **Die Kontrolle muss die Mechanik des Nulltreffers
spiegeln, nicht die Erreichbarkeit der Quelle.** Der stärkste
Kontrollkandidat lag greifbar: zwei Kategorienamen, die im eigenen Papier
(Teil A § 4.1) namentlich stehen.

**F-10 — Ein Widerspruch ist erst dann einer, wenn die Datei ihn nicht
selbst auflöst.** Beim masunt-Rabatt habe ich zwei Zahlen gegriffen und
den Kopfblock nicht gelesen, der die Auflösung ausdrücklich enthielt —
und daraus einen Nebenbefund an ein fremdes Repo gemacht. **Vor jedem
gemeldeten „Widerspruch" die Datei von oben lesen.**

**F-11 — Den eigenen Maßstab auf die eigenen Zahlen anwenden.** Ich habe
Smart Hosts „399 €/M" völlig zu Recht als irreführend gerügt, weil die
Bezugsgröße fehlte — und drei Abschnitte später die DEHOGA-Eigenanteile
selbst ohne ihre Einheit „je Beratungstag" geschrieben. **Der
Doppelmaßstab fällt einem nie im eigenen Text auf; dafür braucht es den
Prüfer.**
