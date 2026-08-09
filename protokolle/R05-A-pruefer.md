# R05-A — Prüfprotokoll zu `fund/wettbewerbsbild.md` (Teil A + Teil B)

> **Wer prüft:** unabhängiger Prüfer mit frischem Kontext, an der Erstellung
> des Papiers nicht beteiligt. Geprüft wurde das **ganze** Dokument
> (Teil A §§ 0–8 und Teil B B1–B9.4), nicht nur der neue Teil.
>
> **Womit geprüft:** die im Auftrag benannten Repo-Quellen
> (`fund/positionierungspapier.md` Nachtrags-Kasten § 6,
> `protokolle/R04-erhebung-beratungsbestand.md`,
> `protokolle/R05-A-fundstellen.md`, `projektquelle-mkt.md`), die
> Rohquellen im heypensio- und zentrale-Repo (**nur lesend**) sowie die
> archivierten Rohabzüge der Web-Recherche im Session-Scratchpad
> (`a1`–`a6`). Alle Nachzählungen unten sind **von diesem Prüfer selbst
> ausgeführt**, nicht delegiert.
>
> **Was NICHT geprüft wurde:** kein Netzzugriff, keine Kontaktaufnahme,
> kein Browser, kein Registerauszug. Aussagen über die Realität *hinter*
> den Rohabzügen sind damit nicht prüfbar — geprüft ist ausschließlich,
> ob das Papier korrekt wiedergibt, was in den archivierten Rohbelegen
> steht.
>
> **Schreibrecht:** ausschließlich diese Datei. Weder das geprüfte
> Dokument noch STATUS/Projektquelle/Fundstellen-Protokoll wurden
> angefasst; kein git-Kommando.

---

## 1. Ergebnis in fünf Sätzen

Die **Zahlenarbeit von Teil B ist überdurchschnittlich sauber** — von
30 nachgezählten Werten stimmten 28 zeichengenau, und zwei
Positivkontrollen ließen sich **byte-genau reproduzieren**. Die Schwächen
liegen nicht in den Zahlen, sondern **eine Ebene darüber**: bei der
Verdichtung von Messung zu Aussage. Vier Befunde sind **KRITISCH** — eine
falsche Vollständigkeitsangabe mitsamt falscher Bestätigungs-Entwarnung
(B8.4), eine weggelassene Ausnahmeklausel, auf der ein „hoch"-priorisierter
Entscheid aufsetzt (B9.4/P14), ein Einstufungsraster, das seine eigene
W1-Definition nicht trägt und dadurch in B5 jede Trennschärfe verliert,
und eine **Geltungsgrenze (B1), die eine in Teil A ausdrücklich benannte
Lücke verschweigt**. Dazu kommen 17 WICHTIG-Befunde, überwiegend
Vorbehalts- und Nenner-Verluste beim Verdichten sowie zwei fehlende
Vorwärtsverweise in Teil A. **Kein einziger erfundener Wert** wurde
gefunden.

**Zahlenbild der Prüfung:** 30 Stichproben an den Rohabzügen · 28
deckungsgleich · 2 abweichend (B8.4 Kategorienzahl, Brandnamic
Partnerzahl) · 0 nicht auffindbar. 5 Prüfungen des
Fundstellen-Protokolls `R05-A-fundstellen.md` an dessen Rohquellen · 4
bestätigt · 1 widerlegt (N-5 masunt).

---

## 2. KRITISCH

### K-1 · B8.4 — „Die vollständige Kategorienliste hat 7 Einträge" ist falsch; es sind 9. Und „bestätigt die MKT-R3-Messung" ist eine Entwarnung, die das eigene Teil A widerlegt.

**Fundstelle:** B8.4, Kanal 2 (`store.apaleo.com`).

**Was das Papier sagt:** „(Next.js-Nutzlast geparst, **bestätigt die
MKT-R3-Messung**): Die **vollständige** Kategorienliste hat **7**
Einträge — Operations · Back office & administration · Distribution ·
Marketing · Guest experience · Revenue management · AI-powered. **Keine**
Kategorie Consulting/Services/Partners/Implementation. ⭐
Positivkontrolle: `__NEXT_DATA__` → 1 Treffer, JSON geparst ✔."

**Was der archivierte Rohbeleg sagt** (`a6/apaleo-store-next.json`, von
mir selbst mit `node` geparst, Feld `props.pageProps.categoriesLinks`):
**9 Einträge** — Operations · Marketing · **Restaurant & spa** ·
Guest experience · **Meetings & events** · Back office & administration ·
AI-powered · Revenue management · Distribution. Es existiert im gesamten
Payload **keine** Liste mit 7 Kategorien (geprüft: `categoriesLinks`,
`collectionsLinks` = 5, App-Ebene `subcategories` = 11 andere Namen).

**Warum das mehr ist als ein Zählfehler — drei Ebenen:**

1. **Teil A desselben Papiers widerspricht direkt.** § 4.1 nennt „Abruf
   aller **neun** Kategorieseiten" und listet die beiden fehlenden
   ausdrücklich mit Zahlen auf („Restaurant & spa 13 · Meetings &
   events 9"). Teil A und Teil B stehen im selben Dokument gegen­einander.
2. **„bestätigt die MKT-R3-Messung" ist damit eine falsche Entwarnung.**
   Sie beglaubigt eine Messung, die sie tatsächlich um zwei Einträge
   unterschreitet. Nach der CLAUDE.md-Regel („auch ‚bestätigt' ist eine
   Entwarnung mit voller Belegpflicht") ist genau dieser Satz der
   gefährlichste im Abschnitt — er fühlt sich wie eine Nicht-Aussage an.
3. **Die Positivkontrolle spiegelt die Suchmechanik des Nulltreffers
   nicht.** Der Nulltreffer lautet „keine Kategorie Consulting/Services/
   Partners/Implementation". Kontrolliert wurde aber nur, ob
   `__NEXT_DATA__` überhaupt vorhanden ist — das belegt, dass die Nutzlast
   gefunden wurde, **nicht dass die Kategorien vollständig extrahiert
   wurden**. Und genau dort ist es schiefgegangen. Eine spiegelnde
   Kontrolle wäre gewesen: „ein bekannter Kategoriename (z. B.
   `Restaurant & spa`) muss in derselben Liste treffen".

**Sachliche Folge:** Die *Schlussfolgerung* („kein Consulting-Verzeichnis
bei Apaleo") **hält auch mit 9 Kategorien** — sachlich ändert sich nichts.
Beschädigt ist die Belegkette einer ⭐-markierten, zweikanalig
ausgewiesenen Passage, also gerade der Stelle, der ein Leser am meisten
traut.

**Schweregrad: KRITISCH.**

**Reparatur:** Zahl auf 9 korrigieren, die beiden fehlenden Kategorien
ergänzen, „bestätigt die MKT-R3-Messung" streichen oder in „deckungsgleich
mit der Neun-Kategorien-Zählung in § 4.1" ändern, und die Positivkontrolle
durch einen Kategorienamen ersetzen, der in `categoriesLinks` treffen
MUSS. Zusätzlich: Weil die Zählung des Agenten hier nachweislich zwei
Einträge verloren hat, gehören **alle übrigen Zählangaben desselben
Strangs** (B8) einmal gegengezählt.

---

### K-2 · B9.4 und P14 — Der „geschäftskritische Satz" aus der BAFA-Richtlinie wird ohne seine Ausnahmeklausel zitiert; die daraus abgeleitete Feststellung „BAFA-untauglich" ist ungedeckt.

**Fundstelle:** B9.4, Absatz „⭐ Der geschäftskritische Satz steht in der
BAFA-Richtlinie" — und wortgleich in § 7, Zeile **P14**
(„wer überwiegend Umsetzung verkauft, ist untauglich").

**Was das Papier sagt:** „Ein Anbieter, der **überwiegend Umsetzung**
verkauft (Website, Kampagnen, Betrieb), erfüllt die 50-%-Umsatzschwelle
**nicht** und ist damit **BAFA-untauglich**."

**Was die Richtlinie sagt** (`a5/bafa/richtlinie.txt`, Ziffer 4.2.1,
selbst gelesen): „… deren überwiegender Geschäftszweck auf die
entgeltliche Unternehmensberatung (mehr als 50 % des Gesamtumsatzes)
gerichtet ist. **In begründeten Fällen kann die Bewilligungsbehörde
hierzu eine auf den Zeitraum der Förderrichtlinie befristete
Ausnahmegenehmigung erteilen.**"

**Was falsch ist:** Der Satz, der die Feststellung trägt, endet in der
Quelle **nicht** dort, wo das Papier ihn enden lässt. Die
Umsatzschwelle ist eine Regelvoraussetzung **mit ausdrücklicher
Ausnahmemöglichkeit**, keine Ausschlussnorm. „Untauglich" ist damit eine
Rechtsfolgen-Behauptung, die die Quelle nicht hergibt. Das Papier
verletzt hier seine eigene Regel: Wer eine Bedingung abhakt, rechnet die
Rechtsfolge nach.

**Warum kritisch:** Auf diesem einen Satz steht der gesamte
P14-Umbau — die Umwidmung von „Recherche" zu „**Entscheid** über unsere
Angebotsarchitektur", Dringlichkeit **hoch**, Zielort MKT-HANDEL/Zentrale.
Ein Entscheid, den Leistungszuschnitt umzubauen, um eine Schwelle zu
erreichen, für die eine Ausnahmegenehmigung existiert, ist ein teurer
Entscheid auf halber Quelle.

**Zweiter, gleichgelagerter Fall im selben Abschnitt:** „**Die beiden
Landesprogramme sind es nicht.**" — eine Entwarnung im gleichen Atemzug,
obwohl das Papier zwei Absätze später für **beide** Programme eine offene
Frage benennt (SH-DKU: Antragsberechtigung Beherbergung ungeklärt;
Hamburg Digital Check: Marketing-/Sichtbarkeitsberatung „weder benannt
noch ausgeschlossen"). Der Entwarnungssatz steht **vor** den Vorbehalten
und wird ohne sie zitierbar.

**Schweregrad: KRITISCH.**

**Reparatur:** Die Ausnahmeklausel wörtlich in denselben Satz aufnehmen;
„BAFA-untauglich" ersetzen durch „erfüllt die Regelvoraussetzung nicht;
eine befristete Ausnahmegenehmigung ist in der Richtlinie ausdrücklich
vorgesehen und wäre der eigentliche Prüfweg". P14 entsprechend
umformulieren — die Frage ist damit **nicht** „Architektur umbauen?",
sondern zuerst „Ausnahmegenehmigung erreichbar?". Den Satz „Die beiden
Landesprogramme sind es nicht" mit den beiden offenen Punkten aus
demselben Abschnitt verknüpfen.

---

### K-3 · B2/B5 — Die W1-Definition trägt die Vergabe nicht: In B5 bekommen **15 von 15** Anbietern W1, obwohl mehrere ausschließlich Leistungen verkaufen, die die eigene Bestandserhebung ausdrücklich als *nicht vorhanden* führt.

**Fundstellen:** B2 (Definition W1), B5.1 (Tabelle), B7.2 — gemessen
gegen `protokolle/R04-erhebung-beratungsbestand.md` § 4 und § 5 sowie
den Nachtrags-Kasten § 6 des Positionierungspapiers.

**Was die W1-Definition verlangt:** „Verkauft unserer Zielgruppe
mindestens eine Leistung, die unser Portfolio **real erbringt** oder die
dort **mit benanntem Träger und dokumentierter Zusage** geführt wird
(Papier-Kasten § 6, Belegstufen ‚real erbracht' bzw. ‚über Kayhan' —
**dort liegt mit E-T7 eine namentliche Zusage vor**)."

**Was E-T7 namentlich zusagt** (selbst gelesen,
`heypensio\firzlaff\telefonat-kayhan-2026-08-07-ergebnisse.md`, Abschnitt
E-T7): „operative Prozesse, Personalführung, Revenue Management". Mehr
nicht.

**Was die R04-Erhebung ausdrücklich als NICHT vorhanden führt** (§ 5,
selbst gelesen): „Sanierung/Restrukturierung · **Interimsmanagement** ·
**Nachfolgeberatung** · Businessplan-/Finanzierungsberatung ·
Qualitäts-/Hygieneberatung · **Coaching/Mystery-Checks** · Recruiting/
Personalvermittlung/Dienstplanung · Einkauf/F&B-Beratung". Und § 4
ausdrücklich: „Nachfolge — **Nirgends als Leistung** — nur
Zielgruppen-These". Teil A § 0.0 desselben Papiers sagt dasselbe.

**Der klarste Widerspruch — HOGARAT (B5.1):** Die im Papier selbst
angegebene Begründungsspalte lautet „Nachfolge, Gutachten,
Betreiberwechsel; Zielgruppe auch Ketten/Eigentümer" → Einstufung
**W1**. Ich habe die Leistungsseite am Rohabzug gegengelesen
(`a3/hogarat-hotelberatung.txt`): Machbarkeitsstudien ·
Schwachstellenanalysen · Betreiberwechsel · Betreiber-Akquisition ·
Businesspläne · Betriebsnachfolge · GV-Beratung · Gutachten (Miet-/
Pachtwert, Inventar, Hotel, Sanierung, Due Diligence, Schieds-) ·
MysteryCheck · DEHOGA-Sterne-Klassifizierung · Immobilien. **Keine
einzige** dieser Positionen steht auf der „real erbracht"-Liste oder in
E-T7; mehrere stehen wörtlich auf der Negativliste der R04-Erhebung.
Dasselbe gilt für **cbg GmbH** (B6.2: „breite BWL-Beratung inkl.
Nachfolge/Bewertung" → W1).

**Der strukturelle Kern:** Die 15/15-Vergabe funktioniert nur, wenn man
still **E13b** heranzieht („Kayhan-Zuschnitt PAUSCHAL: zuständig für
alles, was nicht Digitalisierung/KI/Automation ist" — User-Zuruf, im
Nachtrags-Kasten selbst als „**geht über E-T7 hinaus**" markiert). B2
erwähnt E13b mit keinem Wort. Entweder ist E13b W1-tragend — dann muss
die Definition das sagen und der Papier-Kasten-Vorbehalt („kein Vertrag,
keine Konditionen, kein Leistungskatalog") mitgeführt werden — oder er
ist es nicht, dann sind mehrere W1 zu korrigieren. Beides ist vertretbar;
**das Schweigen ist es nicht**.

**Folge für die Trennschärfe:** Über alle Tabellen von Teil B hinweg
(B4.1, B5.1, B6.2, B7.2 = rund 55 Einstufungen) wird **genau einmal
„N"** (Everlast) und **genau einmal „—"** (TC Hotel Marketing) vergeben.
Ein Raster, das praktisch jedem Kandidaten denselben Wert gibt, misst
nichts mehr — und erzeugt genau die Zahl, vor der L-B1 selbst warnt
(„eine Zahl, die beeindruckt und nichts aussagt").

**Schweregrad: KRITISCH.**

**Reparatur:** (a) In B2 ausdrücklich entscheiden und schreiben, ob E13b
W1 trägt, mit dem Vorbehalt im Satz. (b) Falls nein: HOGARAT und cbg auf
„—" bzw. W2 zurücknehmen, bei Unternehmermanufaktur/ibc/Prodinger/Cordes
Rieger in der Begründungsspalte den **tragenden** Posten nennen
(Personalführung / Preismanagement / Revenue / Prozesse), damit die
Einstufung an ihrer Begründung überprüfbar wird. (c) Einen Satz
ergänzen, der die Verteilung offenlegt („55 Einstufungen, davon 1× N,
1× —") — eine so einseitige Verteilung ist selbst ein Befund.

---

### K-4 · B1 — Die Geltungsgrenze verschweigt mindestens zwei Anbieter-Kategorien, davon eine, die Teil A namentlich als „nicht erhoben" geführt hatte.

**Fundstelle:** B1 („Was das NICHT ist", Punkte 1–7), gemessen gegen
Teil A § 0.0.

**Lücke 1 — Steuer-/betriebswirtschaftliche Beratung mit
Hotellerie-Schwerpunkt. KRITISCH, weil sie zwischen Teil A und Teil B
spurlos verschwindet.**
Teil A § 0.0 zählt neun nicht erhobene Felder auf und schließt mit:
„**Steuer-/Betriebswirtschaftsberatung mit Hotellerie-Schwerpunkt**".
Teil B erhebt fünf davon (Agenturen, Unternehmensberatung inkl.
Nachfolge/Expansion/Operations, Revenue, Bündel-Digitalisierung,
Verbände/Kammern). Die Steuer-/BWL-Achse ist **weder in der
Erhebungstabelle noch in der Nicht-enthalten-Liste von B1**. Ein Leser,
der B1 als ehrliche Grenze liest, muss annehmen, sie sei erhoben.

Dass sie einschlägig ist, belegt das eigene Material dreifach:
`R04-erhebung-beratungsbestand.md` § 1 Punkt 6 führt „**StB-/
Buchhaltungs-Koordination beim Kunden**" als **real erbracht** (also
W1-fähigen Portfolio-Posten); B5.1 beschreibt Prodinger selbst als
„**steuerberatungsnah**"; B6.2 führt unitels mit
„**Buchhaltung/Controlling/Interim für die Privat-Hotellerie**" und einer
eigenen Benchmark-Reihe. Der Hotel-Steuerberater mit BWL-Beratung sitzt
beim selben Hotelier, verkauft ihm Zahlen- und Prozessberatung — und ist
zusätzlich ein naheliegender **Kanal** (er sieht jede Investition vor uns).

**Lücke 2 — Hotelkooperationen / Vermarktungsverbünde. Belegt im
eigenen Rohbestand, nicht ausgewertet.**
Der Brandnamic-Strang hat alle 476 Seiten gesweept; im Archiv liegt die
Seite „Kooperationsgruppen" (`a2/txt_kooperationsgruppen.txt`,
`a2/raw_kooperationsgruppen.html`), deutsche Fassung, wörtlich: „Seit
mehreren Jahren schon haben wir daher **gemeinsam mit der
Beratungsagentur Kohl & Partner die Geschäftsführung von zwei
etablierten Kooperationsgruppen in Südtirol inne: Belvita Leading
Wellnesshotels Südtirol und Familienhotels Südtirol**. Die
Geschäftsführungsgruppe besteht aus den beiden Geschäftsführern Michael
Oberhofer (Brandnamic) und Alois Kronbichler (Kohl & Partner) …" und
weiter: Mitgliederbetreuung, Geschäftsberichte, Vollversammlungen,
„kostenlose Events und Veranstaltungen für die Mitgliedsbetriebe".

Daraus folgen **zwei** Befunde: (i) Hotelkooperationen sind eine eigene
Anbieterkategorie, die derselben Zielgruppe („Alle Mitgliedsbetriebe sind
**familiengeführt**") Marketing, Vertrieb und Betreuung gegen Beitrag
verkauft — sie fehlt in Teil B ganz und in B1 unerwähnt. (ii) Die
Brandnamic-Einstufung in B4.3 („**Kanal: K, nur produktseitig**") ist
dadurch zu eng: Brandnamic führt zusätzlich zwei Verbandsstrukturen mit
Mitgliederkanal — nach der eigenen Vergabelinie **L-B3** („Mitgliederkanal")
ist das ein zweiter, gerade **nicht** produktseitiger Kanal. Und die
Verbindung zu **Kohl & Partner** — den B5.4/P16 als kanalbedingt
unerhobenen Kandidaten führen — steht damit unbemerkt im eigenen Archiv.

**Dritte, kleinere Lücke (HINWEIS-Rang, hier zur Vollständigkeit):**
**ADDITIVE** wird in B4.2 im Zitat der anfang.team-Empfehlungsliste
mitgenannt („CRM (Smart Host, **Additive**)"), ist im DACH-Raum ein
großer Hotel-Marketing-Automation-Anbieter und taucht in keiner Erhebung
und keiner Ausschlussliste auf. Ein im eigenen Text namentlich zitierter
Wettbewerber ohne Einstufung ist eine sichtbare Kante.

**Schweregrad: KRITISCH** (für Lücke 1 und 2 zusammen; B1 ist der
Ehrlichkeitsvertrag des ganzen Teils).

**Reparatur:** B1 um beide Kategorien als **Punkt 8 und 9 der
Nicht-enthalten-Liste** erweitern, je mit eigenem Prüfpunkt (P18 Steuer-/
BWL-Beratung mit Hotellerie-Schwerpunkt, P19 Hotelkooperationen/
Vermarktungsverbünde inkl. der Brandnamic-↔-Kohl-&-Partner-Verbindung).
Brandnamics Kanal-Einstufung in B4.3 von „nur produktseitig" auf
„produktseitig **und** über zwei geführte Kooperationsgruppen" erweitern.
ADDITIVE in die Ausschluss-/Nachtragsliste aufnehmen.

---

## 3. WICHTIG

### W-1 · B4.1 — maxonline: W2 obwohl die eigene Zeile „Website" führt und die eigene Vergabelinie dafür W1 vorschreibt

**Fundstelle:** B4.1, Zeile maxonline®, sowie der Erläuterungsabsatz
„Warum so viele W1" unmittelbar darunter.

Der Erläuterungsabsatz legt die Linie hart fest: „**Wer
Hotel-Websites baut, ist damit Leistungs-Wettbewerber** — auch wenn er
sonst nur Kampagnen macht. **W2 bekommt nur, wer sich auf laufendes
Kampagnen-/Sichtbarkeitsmarketing beschränkt.**" Die Zeile darüber führt
für maxonline: „SEO/GEO, **Website**, Paid Ads" → **W2**. Die Tabelle
widerspricht ihrer eigenen Erläuterung auf derselben Seite.

**Am Rohabzug geprüft** (`a1/max_start.txt`): „**Websiteerstellung** —
Schnelle, conversion-starke Websites"; die Seite führt außerdem
„Webdesign-Agentur" als eigene Leistungsposition. Website-Bau ist bei
diesem Anbieter also nicht nur genannt, sondern beworbenes Kernprodukt.

**Gegenprobe an den anderen beiden W2** (damit der Befund nicht
einseitig ist): **Plaschke** bietet ausweislich `a1/pla_start.txt`
„Website-**Analyse**" und „Landingpages & Inhalte erstellen" — kein
Website-Bau, W2 trägt. **99tales** (`a1/tales_start.txt`) bietet
ausschließlich „Landingpages", ebenfalls kein Website-Bau — W2 trägt
knapp. Die Inkonsistenz betrifft also **genau maxonline**.

**Schweregrad: WICHTIG** (kippt eine Einstufung, und zwar gegen die
ausdrücklich niedergeschriebene Linie — genau der Fall, den die
Vergabelinien verhindern sollten).

**Reparatur:** maxonline auf **W1** heben, oder — falls ein weiteres,
nicht genanntes Kriterium den Ausschlag gab — dieses Kriterium in die
Vergabelinien aufnehmen und den Bestand rückwirkend dagegen prüfen.

---

### W-2 · B4.1/B7.2 — „Die Hotelberater" bekommt W1 bei nachweislich unerhobener Zielgruppe, TC Hotel Marketing bekommt „—" bei einer Leistung, die B7.2 anderswo mit W1 bewertet

**Fundstellen:** B4.1 (Zeilen „Die Hotelberater GmbH" und „TC Hotel
Marketing"), B4.5 (Kanal-Liste), B7.2 (Zeile DIRS21).

**Fall a — Einstufung auf unmessbarem Kriterium.** L-B2 macht den
**Wortlaut der Anbieterseite** zum maßgeblichen Zielgruppen-Kriterium.
B4.5 protokolliert für denselben Anbieter: „Über-uns der Hotelberater
(404 — **deren Zielgruppen-Selbstbeschreibung bleibt damit unerhoben**)".
Vergeben wird trotzdem W1 mit dem Klammervermerk „(Zielgruppe unerhoben,
s. u.)". Das ist eine Einstufung, bei der das entscheidende Kriterium
eingestandenermaßen nicht gemessen wurde — „nicht prüfbar" wäre hier die
eigene Kategorie gewesen.

**Fall b — gleiche Sachlage, verschiedene Einstufung.** TC Hotel
Marketing bekommt „**—** (kein Portfolio-Schnitt)" bei den Leistungen
„Hotelvertrieb, MICE-Sales, Hotelanalyse". Am Rohabzug
(`a1/tc_start.txt`) sind das u. a. „Hotelanalyse", „**Ist-Analyse
Hotel**", „genaue Analyse des Ist-Zustandes Ihres **Hotelvertriebs** …
welche Kanäle nutzen Sie bereits?". Dieselbe Sachlage wird an zwei
anderen Stellen als Überschneidung gewertet: **Hoffmann Hotel Consult**
erhält in B5.1 W1 u. a. für „**Ist-Analyse aller Abteilungen**,
Direktbuchungs-/**Vertriebsoptimierung**", und **DIRS21** erhält in B7.2
W1 (Teilleistung) für „**Buchungsstrecke/Website-Distribution**". Wenn
Vertriebs-/Distributionsleistung bei Hoffmann und DIRS21 W1 begründet,
begründet sie bei TC nicht „—".

**Schweregrad: WICHTIG.**

**Reparatur:** Für „Die Hotelberater" die Einstufung als **vorläufig**
kennzeichnen („Kriterium nicht messbar, Kanal 404 — Nachtrag bei
erreichbarer Über-uns-Seite"). TC entweder auf W2 heben oder in der
Begründungsspalte sagen, warum Hotelvertrieb/Ist-Analyse hier
**anders** als bei Hoffmann/DIRS21 zu lesen ist.

---

### W-3 · B4.4 — „15 von 16 Anbietern veröffentlichen keinen Preis" enthält einen Anbieter, dessen Preisseite gar nicht abrufbar war

**Fundstellen:** B4.4 Punkt 1 gegen B4.5, Absatz „Kanäle, die nicht
verfügbar waren".

B4.5 hält korrekt fest: „Seite ‚Leistungspakete' von E621 (404 — **das
Preis-Negativ gilt für diese Seite ausdrücklich nicht**)". B4.4 zählt
E621 gleichwohl in die 15 mit ein. Die beiden Sätze können nicht beide
stimmen: Entweder ist E621 ungemessen, dann lautet die Zahl „**14 von
15 gemessenen**, ein Anbieter kanalbedingt ungemessen", oder das
Kanal-Negativ gilt doch. Dasselbe betrifft Plaschke, dessen Impressum 3×
mit HTTP 403 antwortete.

**Schweregrad: WICHTIG** — die Zahl ist der meistzitierte Feldbefund des
Abschnitts und wandert erfahrungsgemäß nach MKT-HANDEL.

**Reparatur:** Nenner auf die tatsächlich gemessenen Anbieter umstellen
und die ungemessenen namentlich danebenstellen (dieselbe Form, die B5.4
mit „gilt **nur** für die abgerufenen Seiten" bereits vorbildlich nutzt).

---

### W-4 · B1 — „Kein Browser-Kanal (… **wurde nicht benötigt**)" widerspricht dem eigenen Punkt 6 sechs Zeilen später

**Fundstelle:** Kopfkasten Teil B („Erhebung") gegen B1 Punkt 6.

Der Kopfkasten entwarnt: „**Kein Browser-Kanal** (Chrome war dieser
Session nicht zugeteilt und **wurde nicht benötigt**)". B1 Punkt 6
zählt auf, was **genau deswegen** unerreichbar blieb: „alles hinter
‚Angebot anfragen', die IHA-Kategoriezuordnung (POST-Filter), Oracle- und
protel/planet-Partnerverzeichnisse (SPA), die IHK-SH-Volltextsuche (JS),
Preisangaben, die per JavaScript nachgeladen werden." Dazu kommen aus
B6.1 der ungemessene 12-vs-36-Monate-Widerspruch bei Smart Host
(„Welcher gerendert wird, wurde **nicht gemessen** (kein Browser im
Auftrag)") und aus B8.6 vier weitere SPA-Kanäle.

„Wurde nicht benötigt" ist eine Entwarnung ohne Quelle, die im selben
Abschnitt sechsfach widerlegt wird. Sie ist besonders folgenreich, weil
sie einen Leser davon abhält, den Browser-Nachlauf zu beauftragen.

**Schweregrad: WICHTIG.**

**Reparatur:** „wurde nicht benötigt" ersetzen durch „war nicht
zugeteilt; die dadurch unerreichbaren Posten stehen in B1 Punkt 6 und
sind **kein Negativbefund**".

---

### W-5 · B4.3 — „Vollsuchraum" in der Einstufungszeile, obwohl nur die deutsche Sprachfassung gelesen wurde

**Fundstelle:** B4.3, Einstufungstabelle, Achse „Self-Check-in-/
Meldeschein-/Zutritts-Technik": „**kein Wettbewerber** (belegt, Stand
09.08.2026, **Vollsuchraum** + Positivkontrolle)".

Der Methodenabsatz desselben Kapitels sagt korrekt: „gelesene
Sprachfassung **Deutsch**, IT/EN existieren laut `hreflang` und sind
**nicht** erhoben" — und B1 Punkt 7 wiederholt es. Der Begriff
„Vollsuchraum" in der Einstufungszeile trägt diesen Vorbehalt nicht mit;
er ist die Zeile, die zitiert wird. Bei einem Südtiroler Anbieter mit
italienischem Kernmarkt ist die Sprachfassung kein Randdetail: Ein
Meldeschein-/`alloggiati`-Produkt für den italienischen Markt stünde
plausibel zuerst in der IT-Fassung — und `alloggiati/ISTAT/questura`
gehörten zu den geprüften Nullmustern.

**Schweregrad: WICHTIG** (Entwarnung, die den Kern der Neu-Einstufung
trägt).

**Reparatur:** „Vollsuchraum" → „Vollsuchraum der **deutschen** Fassung
(476/476 Seiten); IT/EN nicht erhoben — siehe B1 Punkt 7". Und: den
IT-Lauf als Prüfpunkt aufnehmen, weil er genau das Nullergebnis kippen
könnte.

---

### W-6 · B5.2 und der Vorwärtsverweis in § 5.5 — aus einem ausdrücklich schwachen Negativ wird eine Bestätigung

**Fundstellen:** B5.2 („Für das Technik-Segment stimmt das weiterhin.")
und der ➡️-Kasten in § 5.5 („Die Überschrift ‚kein Gegenbefund' **gilt
weiter** für das Technik-Segment").

§ 5.5 selbst sagt im Fließtext genau das Gegenteil einer belastbaren
Aussage: „⚠️ **Das ist ein schwaches Negativ:** Danach wurde in dieser
Runde **nicht gezielt gesucht**; es ist ein Nebenbefund der
Seitenlektüre. Als ‚nicht gefunden, nicht gezielt gesucht' führen."

Teil B hat das Technik-Segment nicht neu gemessen — er durfte es
gar nicht, sein Suchraum war der Beratungsmarkt. Aus „nicht gezielt
gesucht" wird durch die Verdichtung „stimmt weiterhin" / „gilt weiter".
Das ist der Lehrbuchfall der Regel „Verdichten verliert den Vorbehalt,
systematisch zugunsten der eigenen Aussage" — und er sitzt an der
Stelle, wo der Leser ankommt.

**Verschärfend:** Das Papier liefert im selben Zug einen echten
Gegenbefund **auch für das Technik-nahe Feld** — B8.5, z1Digital
beschreibt „Digitaler Checkin- und Checkout-Prozess (… NFC
Zimmerschlüssel oder Zahlenschlösser …)" **zusammen mit** „**bis zu 80 %
förderfähig**" (am Rohabzug `a6/z1digital.txt` bestätigt). Das ist
Förder-Argument **plus** unser Produktkern in einem Angebot.

**Schweregrad: WICHTIG.**

**Reparatur:** Beide Sätze auf „unverändert **ungeprüft** für das
Technik-Segment (§ 5.5 war ein nicht gezielt gesuchtes Negativ)"
umstellen und den z1Digital-Fall in § 5.5 als ersten *technik­nahen*
Gegenbefund verlinken.

---

### W-7 · B6.2 Punkt 3 — der „Widerspruch um mehr als das Doppelte" vergleicht zwei nicht scope-gleiche Zahlen, und die Rechenprobe innerhalb einer Quelle fehlt

**Fundstelle:** B6.2, Feldbefund 3.

**Was das Papier sagt:** „HotelPartner: ‚Mit **Jahreskosten ab
60.000 €** … ist das eine erhebliche Investition für privat geführte
Hotels'; RevenueRise: ‚Eigener Revenue Manager: **EUR/CHF 4.500–8.000**'
monatlich bzw. ‚**90.000–130.000 pro Jahr**'. ⚠️ … **sie weichen um mehr
als das Doppelte voneinander ab.**"

**Was die Rohabzüge sagen:**
- `a4/hp_privat.txt`: „Mit Jahreskosten ab 60.000 € – **zuzüglich
  Benefits, Schulungen und Systemlizenzen** – ist das …". Die
  Auslassungspunkte im Papier entfernen **genau den Scope-Zusatz**, der
  die Zahl vergleichbar machen würde.
- `a4/rrise_rm.txt`: „kostet eine interne Revenue-Manager-Stelle
  **inklusive Lohnnebenkosten und Tools** EUR / CHF 90.000–130.000 pro
  Jahr."

Verglichen wird also eine **Untergrenze ohne Nebenkosten** mit einer
**Spanne inklusive Nebenkosten und Tools**. Der „Widerspruch" ist zu
einem erheblichen Teil ein Scope-Artefakt — genau das, wovor Teil A
selbst warnt („Eine Zahl trägt den Scope ihrer ZEILE … vor jedem
‚Widerspruch' die Positionslisten BEIDER Zahlen öffnen").

**Zusätzlich, und im Papier nicht bemerkt: RevenueRise widerspricht sich
selbst.** Die Vergleichstabelle (`a4/rrise_preise.txt`) führt „Kosten
**monatlich** — Eigener Revenue Manager: EUR/CHF 4.500–8.000". Das sind
hochgerechnet **54.000–96.000 pro Jahr** — nicht die 90.000–130.000, die
derselbe Anbieter im FAQ nennt. Das Papier stellt beide Zahlen mit „bzw."
nebeneinander, als wären sie dieselbe Aussage. Die Rechenprobe hätte den
Bruch in einem Schritt gefunden.

**Schweregrad: WICHTIG.**

**Reparatur:** Beide Scope-Zusätze in die Zitate zurückholen; den
Vergleichssatz auf „nicht scope-gleich, deshalb kein belastbarer
Abstand" umstellen; die interne Unstimmigkeit bei RevenueRise
(4.500–8.000 €/Monat vs. 90.000–130.000 €/Jahr) als eigenen
⚠️-Vermerk aufnehmen — sie schwächt die Belastbarkeit **beider**
RevenueRise-Zahlen.

---

### W-8 · B6.2 Punkt 1 — der „Einstiegskorridor" lässt Setup-Gebühr und Mindestlaufzeit des einzigen deutschsprachigen Ankers weg

**Fundstelle:** B6.2, Feldbefund 1.

Das Papier nennt „rund 880–1.500 pro Monat (RevenueRise ‚ab 879
EUR/CHF', COM.CIERGE …)" und weist zu Recht darauf hin, dass nur
COM.CIERGE die Steuerbasis ausweist. **Nicht genannt** wird, was
`a4/rrise_rm.txt` im selben Absatz sagt: „Monatspauschalen ab EUR / CHF
879 **plus einmalige Setup-Gebühr von EUR / CHF 1.000**" und
„**Mindestlaufzeit 3 Monate**". Bei COM.CIERGE ist der analoge Zusatz
(„und initialen Kosten für Analyse") über das MWST-Zitat immerhin
mittransportiert — bei RevenueRise fällt er ganz weg. Ein Korridor, der
für MKT-HANDEL als Preisorientierung dient, ist ohne Einmalkosten und
Bindung unvollständig.

**Schweregrad: WICHTIG.**

**Reparatur:** Setup-Gebühr und Mindestlaufzeit in den Korridor-Satz
aufnehmen; die Formulierung „Einstiegskorridor" auf „laufende
Monatspauschalen; Einmalkosten und Bindungen je Anbieter gesondert"
präzisieren.

---

### W-9 · B9.1 — DEHOGA-BW-Zahlen sind ausdrücklich **Beispielrechnungen** und Eigenanteile **je Beratungstag**; „Preise öffentlich und hart" und die abgeleitete „Preisuntergrenze" sind ungedeckt — und es ist derselbe Fehler, den B6.1 bei Smart Host zu Recht rügt

**Fundstelle:** B9.1, Absatz „Preise öffentlich und hart", inklusive der
Folgerung „→ Einstufung: W1. Das ist zugleich eine **Preisuntergrenze,
die ein ungeförderter Anbieter nicht unterbietet** — relevant für
MKT-HANDEL."

**Was der Rohabzug zeigt** (`a5/dehoga/bw-kosten-foerderung.txt`, selbst
gelesen): Die Werte stehen unter den Überschriften
„**Beispielrechnung** einer geförderten Beratung zur Existenzgründung"
und „**Beispielrechnung** einer KMU-Beratung", und sie sind
tagessatzbezogen aufgebaut:

| Posten | Existenzgründung | KMU-Mitglied | KMU-Nichtmitglied |
|---|---|---|---|
| Nettotagessatz (8 h) | 985,00 € | 985,00 € | 985,00 € |
| Förderung | 735,00 € | 350,00 € | 350,00 € |
| Mitgliederbonus | — | 136,00 € | 0,00 € |
| **Eigenanteil (netto)** | **250,00 €** | **499,00 €** | **635,00 €** |

Beide Rechnungen gehen exakt auf (985−735=250; 985−350−136=499;
985−350=635) — die **Zahlen** sind also korrekt übernommen. Falsch ist
die **Rahmung**:

1. **„hart" trifft nicht.** Die Quelle schreibt darunter selbst: „Weitere
   Beratungspakete und Konditionen können auf den individuellen Bedarf
   zugeschnitten werden."
2. **Der Bezug fehlt.** „Existenzgründung Eigenanteil 250,00 € bei 15
   förderfähigen Tagen" liest sich wie 250 € für 15 Tage. Tatsächlich ist
   250 € der Eigenanteil **je Tag**; bei 15 förderfähigen Tagen sind es
   **3.750 €**. Faktor 15 in der gefährlichen Richtung (zu billig).
   Dasselbe gilt für die 499/635 €.
3. **Doppelmaßstab im eigenen Papier.** B6.1 rügt völlig zu Recht, eine
   Dossierzeile „Smart Host: 399 €/M" ohne Zimmerzahl-, Modul- und
   Steuerbezug sei „**irreführend**", weil die Quelle sie als
   „**reale annäherungsweise Preisbeispiele**" ausweist. Bei DEHOGA BW
   liegt derselbe Sachverhalt vor — eine anbieterseitige Beispielrechnung
   — und wird als „Preise öffentlich und hart" verdichtet. Das ist genau
   die Asymmetrie, die die Prüffrage aus L-04 stellen soll: **Welchen
   Vermerk trüge diese Quelle, wäre sie ein Fremder?**
4. **Die abgeleitete Preisuntergrenze trägt nicht.** Aus einem
   **Eigenanteil** nach Zuschuss lässt sich keine Marktuntergrenze für
   ungeförderte Anbieter ableiten — die vergleichbare Größe wäre der
   Tagessatz 985 €. Der Satz „die ein ungeförderter Anbieter nicht
   unterbietet" ist die Art Entwarnung/Feststellung, die direkt in eine
   Preisentscheidung wandert.

**Kleiner Zusatzbefund am selben Ort (HINWEIS-Rang):** Das
Bundesweit-Zitat lässt die Einschränkung der Quelle weg — dort folgt
unmittelbar: „**In Hessen und im Saarland erfolgt die Beratung in
Abstimmung mit dem jeweiligen DEHOGA-Landesverband.**"

**Schweregrad: WICHTIG.**

**Reparatur:** „Beispielrechnung" als Wort übernehmen; „**je
Beratungstag**" an jede Eigenanteilszahl; die Untergrenzen-Aussage auf
den **Nettotagessatz 985 €** stützen oder streichen; das Bundesweit-Zitat
um die Hessen-/Saarland-Klausel ergänzen.

---

### W-10 · B9.2 — Die 250 € des Designkontors gehören zu einer Architekten-Beratung, nicht zum „Beratungsdreiklang"; und die „offene Selbstaufnahme" trägt eine Scope-Bedingung, die das Papier weglässt

**Fundstelle:** B9.2, erster Spiegelstrich (Designkontor
Schleswig-Holstein).

**Was das Papier sagt:** „Der beworbene ‚**Beratungsdreiklang**' umfasst
ausdrücklich ‚Einrichtungs-, **Marketing-** und betriebswirtschaftliche
Überlegungen'; **die Einstiegsberatung kostet** ‚**250,- Euro zuzüglich
gesetzlicher Mehrwertsteuer**'."

**Was der Rohabzug sagt** (`a5/ihk/sh-designkontor-liste.txt`, selbst
gelesen): Die 250 € stehen in einem **anderen** Absatz und beziehen sich
auf etwas anderes: „**Schleswig-holsteinische Architekten/
Innenarchitekten** führen eine professionelle Vor-Ort-Beratung im
Beherbergungsbetrieb durch. Diese Leistung wird zu einem sehr günstigen
Preis (250,- Euro zuzüglich gesetzlicher Mehrwertsteuer **und
gegebenenfalls Fahrtkosten**) im Rahmen einer Mustervereinbarung
angeboten." Der „Beratungsdreiklang" ist eine **Empfehlung an den
Hotelier**, drei Konzepte zu kombinieren — kein Produkt mit Preis. Durch
die Nachbarstellung im Papier entsteht der Eindruck, 250 € kauften eine
Beratung inklusive Marketing-Konzept. Zusätzlich fehlen die Fahrtkosten.

**Zweiter Punkt — die Selbstaufnahme.** Das Papier zitiert „In diesem
Sinne kann sich **jedes in Frage kommende Unternehmen** in die Liste
aufnehmen lassen" und folgert: „sie taugt als **Eintragskanal für uns**".
Der vorangehende Satz der Quelle definiert aber, wer „in Frage kommt":
„Kontaktdaten von **Designern, Inneneinrichtern, Einrichtungshäusern,
Architekten, Handwerkern und anderen Dienstleistern**, die Ihnen dabei
behilflich sein können, **die Wohlfühlatmosphäre** in
Beherbergungsbetrieben zu verbessern." Dass ein Digitalisierungs-/
Marketinganbieter darunter fällt, ist eine **Annahme** — sie wird durch
die im Papier genannten Bestandseinträge („Easy Online-Marketing für
Fewos", „Klute Kommunikation", beide von mir in
`a5/ihk/sh-anbieterliste.txt` bestätigt) gestützt, aber nicht bewiesen.
Der Zusatz der Quelle „Die Liste erhebt **keinen Anspruch auf
Vollständigkeit**" fehlt ebenfalls.

**Schweregrad: WICHTIG** (die Passage ist als konkreter Kanalvorschlag
für MKT-AKQ formuliert).

**Reparatur:** Die 250 € eindeutig der Architekten-/Innenarchitekten-
Einstiegsberatung zuordnen und „ggf. Fahrtkosten" ergänzen;
„Eintragskanal für uns" als **Annahme mit Stützbeleg** markieren
(„zwei Marketinganbieter sind gelistet — ob die Aufnahme für unser
Leistungsbild akzeptiert wird, ist beim Designkontor zu erfragen").

---

### W-11 · B9.2 — „MEET THE EXPERTS" ist nach der eigenen Vergabelinie L-B3 zugleich ein **Kanal**; das Papier führt es nur als Wettbewerber

**Fundstelle:** B9.2, Absatz „Der eine echte Wettbewerber".

Der Rohabzug (`a5/ihk/sh-meet-experts.txt`) schließt mit dem Satz, den
das Papier nicht zitiert: „Die Beratung erfolgt kostenfrei **durch
Mitglieder des Arbeitskreises ITK und Digitalisierung der IHK zu
Lübeck**."

Damit ist das Format kein reines Wettbewerbsangebot, sondern eine
**Mitwirkungsstruktur mit Mitgliederkanal** — exakt der Fall, für den
L-B3 („Partnerprogramm, öffentliches Verzeichnis, **Mitgliederkanal**,
Store/Ökosystem") K vorsieht. Wer im Arbeitskreis mitwirkt, sitzt auf der
Beraterseite dieses Formats. Das ist die operativ interessantere Hälfte
des Befunds und fehlt. Nebenbei präzisiert die Quelle auch den Träger
(IHK **zu Lübeck** innerhalb des SH-Auftritts).

**Schweregrad: WICHTIG.**

**Reparatur:** Einstufung auf **W1 + K** ändern, den Trägersatz zitieren
und einen Prüfpunkt „Aufnahmebedingungen Arbeitskreis ITK und
Digitalisierung IHK zu Lübeck" aufnehmen.

---

### W-12 · B8.3 — „Drei unabhängige Größenschwellen" sind zwei Größenschwellen und ein Preisboden

**Fundstelle:** B8.3, ⭐-Überschrift und dritter Spiegelstrich.

Bräu („weniger als 30 Zimmer") und anfang.team („ab etwa 1 Mio. Euro
Jahresumsatz") sind Größen-/Schwellenangaben — beide von mir an
`a3/braeu-dach.txt` und `a1/anf_start.txt` wörtlich bestätigt. Der dritte
Punkt lautet: „**SUM Hospitality:** Einstieg trotz Skalierung nach
Zimmerzahl bei **5.000 CHF einmalig plus 400 CHF/Monat**". Das ist ein
**Preis**, keine Schwelle: SUM nennt keine Untergrenze, sondern skaliert
ausdrücklich („This is based on the size of the properties (number of
rooms) or the number of hotels for groups.", `a6/sum-pricing.txt`). Ob
5.000 CHF für ein 15-Zimmer-Haus zu viel sind, ist eine Aussage über
**unsere** Kalkulationsannahme, nicht über SUMs Zielgruppe.

Das trägt Gewicht, weil B8.3 als „**der wichtigste Einzelbefund für die
Persona-Frage**" markiert ist: „drei unabhängige Schwellen" klingt nach
konvergenter Evidenz, tatsächlich sind es zwei Belege plus eine
Interpretation. B5.4 Punkt 2 sagt es im selben Papier übrigens richtig:
„genau ein Anbieter nennt eine beidseitige Zimmergrenze …, einer eine
Umsatzschwelle …, einer eine Sterneklasse. **Zwölf beschreiben qualitativ
oder gar nicht.**"

**Schweregrad: WICHTIG.**

**Reparatur:** Überschrift auf „Zwei belegte Größenschwellen — und ein
Preisboden, der wie eine dritte wirkt" ändern; den SUM-Punkt als
abgeleitete Einschätzung kennzeichnen.

---

### W-13 · B8.5 — „in aller Regel straiv" ist eine Generalisierung aus vier Belegen ohne Nenner

**Fundstelle:** B8.5, erster Satz: „Wer im DACH-Raum heute
Self-Check-in/Guest-Journey einführt, verkauft **in aller Regel straiv**
mit — belegt bei 42 GmbH …, Martin Becker GmbH, opensmjle … und in der
Casablanca-Schnittstellenliste. Hinzu kommt Brandnamic."

Das sind **fünf** Fundstellen aus **17 betrachteten** Anbietern — und
der Suchraum von B8 waren Bündel-/Digitalisierungsanbieter, nicht „wer im
DACH-Raum Self-Check-in einführt". Die Formulierung „in aller Regel"
verwandelt eine Häufung in eine Marktregel; der darauf gestützte Satz
„**Straiv ist … der De-facto-Standard im Portfolio der
Einführungs-Dienstleister**" erbt diesen Sprung. Der Befund selbst ist
wertvoll und der Beleg für die 42 GmbH ist stark (Partnerliste am
Rohabzug `a6/42gmbh-beratung.txt` bestätigt) — es fehlt nur der Nenner.

**Schweregrad: WICHTIG** (die Aussage ist als „der am dichtesten belegte
Einzelbefund des Laufs" markiert und damit besonders zitierfähig).

**Reparatur:** „bei 5 von 17 betrachteten Anbietern belegt; das ist die
häufigste Einzelnennung im Sample — eine Marktquote ist es nicht."

---

### W-14 · Vorwärtsverweise — § 5.1 und § 5.2 werden von Teil B materiell berührt und tragen keinen Verweis; P9 (und teilweise P8) sind durch Teil B beantwortet, stehen in § 7 aber unverändert offen

**Fundstellen:** § 5.1, § 5.2, § 3.4 sowie § 7 Zeilen P8/P9.

Das Papier setzt Vorwärtsverweise sauber in **§ 0.0** und **§ 5.5** —
beide sind gut platziert und vorbildlich formuliert. Vier weitere Stellen
fehlen:

1. **§ 5.1 „Säule 1 — Komplett-Digitalisierung aus einer Hand".** Der
   dortige Satz „Kein Wettbewerber im untersuchten Feld bündelt das
   identisch — gilt weiter" wird von B8.1 direkt berührt: SUM Hospitality
   verkauft „All the services you need. Through a provider." mit
   veröffentlichter Vier-Stufen-Preisliste, work@hotel den „360-Grad
   IT-Service", z1Digital wirbt wörtlich „aus einer Hand" (B8.5). Der
   Vorbehalt in § 5.1 („im untersuchten Feld") rettet den Satz formal —
   aber genau deshalb braucht der Leser dort den Hinweis, dass das Feld
   inzwischen größer ist.
2. **§ 5.2 „Säule 2 — Betreuter Betrieb statt Selbstbau-Software".** Teil
   B liefert dazu drei unabhängige Gegenbefunde: B6.2 Feldbefund 4 sagt
   es sogar wörtlich („**genau die Grenze, auf der unsere USP-Säule 2
   steht**"), B5.4 Punkt 4 ebenso („genau unser Betreibermodell-Feld"),
   B8.1 beschreibt mit work@hotel einen Anbieter mit vollem
   Betriebsapparat (1st/2nd Level, Notdienst). **§ 5.2 trägt keinen
   Verweis** — obwohl es die Säule ist, die Teil A selbst schon als
   „doppelt erodiert" bezeichnet.
3. **§ 3.4, Zeile 42 GmbH.** Dort steht sie als WebFetch-Selbstauskunft
   mit dem Vermerk „als Hypothesen behandeln"; B5.3/B8.1 haben sie im
   Rohtext gelesen und erheblich erweitert. Der Hypothesen-Vermerk ist
   überholt und sollte auf B5.3 zeigen.
4. **§ 7 P9 — „IHA-Preferred-Partner-Liste vollständig … Canary sitzt
   dort, wer noch?"** ist durch **B9.3 vollständig beantwortet**. Ich habe
   es nachgeprüft: `a5/slugs.txt` enthält genau **47** Slugs, darunter
   `canary-technologies`, und die Zahl 47 steht zusätzlich im Fließtext
   der Quelle („47 Unternehmen … als Preferred Partners",
   `a5/iha/mitglied-werden.txt`). P9 steht in § 7 unverändert als offen
   mit Dringlichkeit „mittel". P8 („PMS-Marktplätze außer Apaleo") ist
   durch B8.4/B8.6 **teilweise** beantwortet (Mews, Casablanca, SIHOT,
   ibelsa erhoben; Oracle und protel/planet als nicht auswertbar
   protokolliert) und ebenfalls unverändert.

**Schweregrad: WICHTIG** — P12/P13 wurden mustergültig aufgelöst; dass
P9 dabei übersehen wurde, ist genau die Drift, die die
Vorwärtsverweis-Konvention verhindern soll.

**Reparatur:** ➡️-Kästen in § 5.1 und § 5.2 setzen; § 3.4 Zeile 42 GmbH
auf B5.3 verweisen; P9 mit ✅ auflösen (→ B9.3, 47 Namen, zweikanalig);
P8 auf „teilweise beantwortet → B8.4/B8.6, Rest: Oracle und
protel/planet (SPA)" zurückschneiden.

---

### W-15 · `R05-A-fundstellen.md` N-5 — „entscheidet dieser Bestand nicht" ist widerlegt: die Quelle entscheidet es selbst, im eigenen Kopfblock

**Fundstelle:** `protokolle/R05-A-fundstellen.md`, Abschnitt N-5
(masunt-Partnerkondition).

**Was das Protokoll sagt:** „Die 15 % sind an den Angebotszeilen belegt,
die 5 % an der Telefonnotiz vom 30.06.2026. Ob es eine Nachverhandlung,
zwei Rabattarten oder ein Übertragungsfehler ist, **entscheidet dieser
Bestand nicht**."

**Was die Rohquelle sagt** (`heypensio\firzlaff\hardware\
anbieter-anfragen-schliessfach.md`, ⭐-Kopfblock „Zwei Linien im
Rennen", von mir selbst gelesen): „masunt Fächertresor-Schrank — API
bestätigt, Partner-Status **15 % Rabatt (Korrektur ggü. „5 %")** …"

Der Bestand entscheidet es also ausdrücklich — und zwar **in derselben
Datei**, aus der beide widersprüchlichen Werte zitiert wurden. Die
Prüfung hat die beiden Trefferstellen gelesen (Telefonnotiz,
Angebotszeilen), aber nicht den zusammenfassenden Kopfblock desselben
Dokuments. Das ist die klassische Falle „nur dort lesen, wo das Muster
trifft".

**Folge:** Die daraus abgeleitete Handlungsanweisung („Für das
Wettbewerbsbild wird deshalb keine Prozentzahl geführt, sondern
‚Rabattstufe im Bestand uneinheitlich'") ist unnötig defensiv, und der
Nebenbefund an das Produkt-Repo („Zielort: heypensio") meldet ein
Problem, das dort bereits gelöst und dokumentiert ist.

**Schweregrad: WICHTIG** — nicht wegen der Sache (masunt ist für Teil B
irrelevant), sondern wegen des Prüfverfahrens: Ein
Fundstellen-Protokoll, das eine Klärung übersieht, erzeugt einen falschen
offenen Punkt in einem Nachbar-Repo.

**Reparatur:** N-5 auf „✅ geklärt — die Quelle korrigiert 5 % → 15 %
im eigenen Kopfblock; belastbar sind **15 %**" umstellen und den
Nebenbefund an das Produkt-Repo zurückziehen. Verfahrens-Lehre für
künftige Nachprüfungen: **Bei Widersprüchen innerhalb einer Datei immer
zusätzlich deren Zusammenfassungs-/Kopfblock lesen**, nicht nur die
Trefferzeilen.

---

### W-16 · B5.2 — Das Dittlmann-Zitat setzt zwei getrennte Sätze aus zwei Abschnitten zu einem wörtlichen Zitat zusammen

**Fundstelle:** B5.2, erster Spiegelstrich.

**Was das Papier als wörtlich setzt:** „Eingetragen in die
KfW-Beraterdatenbank, bei der BAFA für Unternehmensberatungen (**ID:
130986**) Akkreditiert vom Bundesministerium für Arbeit und Soziales für
systemisches Coaching im Programm INQA … (**IC2336101**) mit **80 %
Zuschuss**."

**Was in den Rohabzügen steht** (`a3/ch-impressum.txt`, zwei
verschiedene Stellen):
- Stelle 1: „… bei der BAFA für Unternehmensberatungen (ID: 130986)
  Akkreditiert vom Bundesministerium für Arbeit und Soziales für
  systemisches Coaching im Programm INQA (**Initiative neue Qualität der
  Arbeit**); Zulassung als Unternehmensberater in Österreich gemäß
  § 373a Abs. 5 Z1 GewO …"
- Stelle 2 (eigener Absatz, **anderer Wortlaut**): „Akkreditiert vom
  Bundesministerium für Arbeit und Soziales **als systemischer Coach** im
  Programm INQA (IC2336101) mit 80 % Zuschuss."

Die Auslassungspunkte im Papier überbrücken keine Wortlücke innerhalb
eines Satzes, sondern **den Sprung zwischen zwei Absätzen mit
unterschiedlicher Formulierung**. Beide Kennnummern existieren und sind
korrekt — die **Sachlage stimmt**, das **Zitat als solches ist so
nirgends auffindbar**. Nach der Regel „jedes als wörtlich gesetzte Zitat
trägt seinen Anker an der Rohquelle" (L-01) ist es für einen Prüfer ein
Pseudo-Zitat.

**Gleichgelagert, schwächer:** Das Bräu-Zitat in B5.3 („Ich arbeite
allein. Das ist eine Entscheidung, keine Verlegenheit. … Wer mich
beauftragt, arbeitet mit mir, nicht mit einem Büro.") setzt sich
ebenfalls aus zwei weit auseinanderliegenden Stellen von
`a3/braeu-dach.txt` zusammen; dort ist die Auslassung aber korrekt
markiert und beide Teile sind wortgleich vorhanden — **HINWEIS-Rang**
(siehe H-4).

**Schweregrad: WICHTIG.**

**Reparatur:** In zwei getrennte Zitate mit je eigener Fundstelle
zerlegen.

---

### W-17 · Teil B insgesamt — die Zitate tragen keinen Fundstellen-Anker; die einzige Belegbasis ist ein sessiongebundenes Scratchpad

**Fundstelle:** ganz Teil B, im Kontrast zu Teil A.

Teil A verankert vorbildlich: „**BYTE, SELBST, straiv.io/de/tech-partner,
09.08.2026, wörtlich:**". Teil B nennt in aller Regel nur den
Anbieternamen. Konkret ohne Seiten-/URL-Anker sind u. a. die Zitate von
anfang.team (Preis, Zielgruppe, Neutralität), 48 concepts, Echtzeitlos,
Bräu, Dittlmann, Unternehmermanufaktur, melevo (komplette Preisliste),
HotelPartner, RevenueRise, COM.CIERGE, SUM, work@hotel, 42 GmbH,
z1Digital, DEHOGA BW/HH, IHA, Online Birds, Designkontor. Ausnahmen mit
Anker sind selten (`smart-host.com/de/preise`, `brainy-rms.com/de/`,
`apaleo.com/sitemap.xml`).

Ich konnte sämtliche dieser Zitate nur deshalb nachzählen, weil die
Rohabzüge **zufällig noch im Session-Scratchpad lagen** —
`…\4264e3d5-…\scratchpad\a1`–`a6`. Dieser Pfad ist sessiongebunden und
verschwindet; danach ist praktisch kein Zitat aus Teil B mehr
nachprüfbar. Das Papier weist außerdem selbst aus, dass **keine
Registerauszüge** und **keine Drittquellen** vorliegen — die
Nachprüfbarkeit der Selbstauskünfte ist damit die **einzige** verbliebene
Kontrollebene.

**Schweregrad: WICHTIG** (Belegarchitektur, nicht Einzelaussage).

**Reparatur:** Je Anbieter einmal die abgerufene URL + Abrufdatum
nennen (Sammel-Fußnote je Abschnitt reicht) — und die Rohabzüge aus
`a1`–`a6` an einen dauerhaften Ort sichern, bevor das Scratchpad
verfällt. Ohne diesen Schritt verliert Teil B binnen Tagen seine
Prüfbarkeit.

---

## 4. HINWEIS

| # | Fundstelle | Befund | Geprüft an | Reparatur |
|---|---|---|---|---|
| **H-1** | B4.3, Absatz „Partnerprogramm" | „~70 Partner in **sechs** Kategorien" — tatsächlich **78** eindeutige Partner in **sieben** Kategorien (PMS 25 · CM & Booking Engine 13 · Zahlungsanbieter 18 · POS 2 · Weitere Schnittstellenpartner 12 · Branchenpartner 6 · Institutionelle Partner 2). „Branchenpartner" und „Institutionelle Partner" sind in der Quelle getrennt. | `a2/raw_partner.html` (78 eindeutige `data-gtm-label`) + `a2/txt_partner.txt` (sieben Rubriken) — selbst gezählt | Zahl und Kategorienzahl korrigieren. *(Der Befund „straiv steht unter Zahlungsanbieter Schnittstellen" ist dabei **bestätigt** — straiv sitzt im Block zwischen `sparkasse.it` und `stripe.com`.)* |
| **H-2** | B9.1, DEHOGA-Hamburg-Beitragsordnung | „Stufe I (0–3 Beschäftigte) 29,60 €/Monat **bis** Stufe VI (51–100) 178,00 €/Monat" — die Ordnung hat neun Stufen bis **IX (201+) 359,40 €**. Eine Liste mit Quellenangabe erhebt einen stillen Vollständigkeitsanspruch (L-03). | `a5/dehoga/hh-beitrag.txt` § 2 — Monatsbeiträge und Beträge sonst zeichengenau bestätigt | Auswahlkriterium nennen („Stufen im Zielgruppenbereich") oder vollständig abbilden. |
| **H-3** | B5.3, 42-GmbH-Partnerzitat | Das Zitat endet mit „… Brandnamic, moreProfit." — die Quelle setzt fort: „**und vielen weiteren**, die in ihren Bereichen unschlagbar sind." Ohne Auslassungszeichen wird aus einer offenen eine geschlossene Liste. | `a6/42gmbh-beratung.txt` | Auslassungszeichen setzen oder Fortsetzung zitieren. |
| **H-4** | B5.3, Bräu-Zitat | Aus zwei weit auseinanderliegenden Stellen zusammengesetzt (Auslassung korrekt markiert, beide Teile wortgleich vorhanden) — es fehlt nur der Anker. | `a3/braeu-dach.txt` | Fundstelle je Teil ergänzen. |
| **H-5** | B9.2, Designkontor | „~159 Einträge" ohne Zählweg. Meine Gegenzählung: **162** `<tr>`-Zeilen in `sh-anbieterliste.html` (abzüglich Kopfzeilen ≈ 159) und **146** eindeutige Domains — die Zahl ist plausibel, aber die eigene Regel „für jede Zahl den Zählweg benennen" ist nicht erfüllt. | `a5/ihk/sh-anbieterliste.html/.txt` | Zählweg an die Zahl. |
| **H-6** | B4, Methodenabsatz | „**kein WebFetch-Zusammenfasser ist Quelle einer Zahl oder eines Zitats**" ist eine **Selbstauskunft des Recherche-Agenten** und wird als Fakt gesetzt. Nach L-04 („Welchen Vermerk trüge diese Quelle, wäre sie ein Fremder?") gehört ein Beleg-Vermerk daran. *(Positiv: In B8.4 wird ein WebFetch-Hinweis ausdrücklich als „nur Hypothesen-Rang" markiert — dort ist es vorbildlich gelöst.)* | Papier gegen sich selbst | „laut Agentenbericht" ergänzen. |
| **H-7** | B8.6, Zeilen 1 und 2 | Negative als Existenzaussagen formuliert: „**Nicht gefunden** — es gibt Einzelunternehmer …, aber **keinen, der sich so bezeichnet**" und „Reine ‚Hotel + KI'-Beratungshäuser: **Nicht gefunden.**" B1 verlangt für alle Negative die Form „im geprüften Suchraum nicht gefunden" (L-B6). | Papier gegen B1/L-B6 | Formulierung angleichen. |
| **H-8** | B6.2, Feldbefund 2 („4 von 12 nennen bezifferte laufende Honorare") | **Spalteholz Hotelkompetenz** veröffentlicht Preise **mit** Steuerbasis: „Preis: von 792 € bis 990 € **zzgl. 19 % MwSt.**" (vier Seminartermine). Als *laufendes Honorar* zählt das zu Recht nicht — erwähnenswert ist es trotzdem, weil das Papier den Mangel an Steuerbasis-Angaben gerade als Feldbefund führt und dies einer der wenigen Gegenbelege ist. | `a4/spa_home.txt` | Als Nebensatz aufnehmen (Seminarpreise, nicht Retainer). |
| **H-9** | B8.4, Mews-Beraterverzeichnis | „15 Einträge … davon **vier aus dem DACH-Raum**" — die **15** habe ich exakt bestätigt (15 Partnerschaftsblöcke), die **Länderzuordnung** ist in der Rohdatei nicht ausgewiesen und daher von mir **nicht prüfbar**. Sitzangaben fehlen in `mews-consultants.txt`. | `a6/mews-consultants.txt` | Herkunft der Länderzuordnung nennen (Anbieterseiten? Agenten-Einschätzung?). |
| **H-10** | B9.1, DEHOGA-BW-Bundesweit-Zitat | Die Quelle schränkt unmittelbar ein: „In Hessen und im Saarland erfolgt die Beratung **in Abstimmung mit dem jeweiligen DEHOGA-Landesverband**." | `a5/dehoga/bw-beratung.txt` | Einschränkung mitzitieren. |

---

## 5. Verdacht (plausibel, **nicht** verifiziert — ausdrücklich getrennt)

- **V-1 · Der Agenten-Zählverlust in B8 könnte breiter sein.** K-1 zeigt,
  dass derselbe Strang eine vollständig ausgelesene Liste um zwei
  Einträge verkürzt hat. Die übrigen B8-Zählangaben („17 betrachtete
  Anbieter", „genau zwei verkaufen die volle Kette", „3 von 17 nennen
  Beträge") habe ich **nicht** einzeln nachgezählt — der Verdacht ist
  plausibel, aber unbelegt.
- **V-2 · Die B7.2-Einstufungen auf AGENT-Zitaten.** Das Papier weist
  selbst aus, dass die Zitate zu detco, Roommatik, kiosk.eu, DIRS21,
  MARA, RoomPriceGenie und INCERT nicht nachgeprüft sind. Angesichts
  von K-3 (Raster ohne Trennschärfe) ist zu vermuten, dass auch dort W1
  zu großzügig sitzt — geprüft habe ich es nicht.
- **V-3 · Sample-Verzerrung über die Alpen-Schlagseite hinaus.** B4
  benennt die Alpen-/Ferienhotellerie-Schlagseite vorbildlich. Der
  Verdacht: Die vier Suchläufe haben zusätzlich systematisch
  **SEO-starke** Anbieter selektiert (wer für „Hotelmarketing Agentur"
  rankt, verkauft SEO) — was die Feldbefunde zu GEO/KI-Sichtbarkeit
  („8 von 16") nach oben verzerren würde. Nicht prüfbar: Die
  Suchprotokolle sind nicht archiviert.

---

## 6. Nicht prüfbar (eigenes Ergebnis, **nicht** zu „unauffällig" geglättet)

1. **Die Anbieterauswahl selbst.** Im Scratchpad liegen die
   Seitenabzüge, aber **keine Suchprotokolle**. Ob die 16/15/12/17
   Anbieter das Ergebnis der beschriebenen Suchläufe sind, ist nicht
   nachvollziehbar — nur, was mit den ausgewählten Anbietern gemacht
   wurde.
2. **Alles jenseits der Selbstauskünfte.** B1 Punkt 4/5 sagt es selbst:
   kein Registerauszug, keine Drittquelle. Ich konnte nur prüfen, ob das
   Papier die Selbstauskünfte korrekt wiedergibt — nicht, ob sie stimmen.
3. **Brandnamics IT-/EN-Fassungen** (siehe W-5).
4. **Die Länderzuordnung der Mews-Berater** (H-9).
5. **Die Grundgesamtheit hinter „~159 Einträgen"** beim Designkontor —
   die Liste sagt selbst „erhebt keinen Anspruch auf Vollständigkeit".
6. **Ob der bei Smart Host gefundene 36-Monate-Block gerendert wird** —
   das Papier führt es korrekt als ungemessen; ich habe keinen Browser
   und kann es ebenfalls nicht entscheiden.

---

## 7. Stichprobenprotokoll — 30 Nachzählungen an den Rohbelegen

Format: **Behauptung im Dokument** · *Fundstelle in der Rohdatei* ·
**Ergebnis**. Alle Läufe von mir selbst ausgeführt.

| # | Behauptung (Abschnitt) | Rohdatei | Ergebnis |
|---|---|---|---|
| 1 | anfang.team „ab etwa 1.500 Euro monatlich" + „mindestens 12 Monate" (B4.2) | `a1/anf_start.txt` | **deckungsgleich** (ein Satz, beide Angaben) |
| 2 | anfang.team „ab 3 Sterne und ca. 1 Mio. Euro Jahresumsatz … bis zu Hotelketten" (B4.2) | `a1/anf_start.txt` | **deckungsgleich** |
| 3 | anfang.team „ohne Provision, ohne Produktbindung" / „keine Provision von Systemanbietern" (B4.2) | `a1/anf_system.txt` | **deckungsgleich** (beide Sätze getrennt vorhanden) |
| 4 | 48 concepts „maximal 5 Hotels zeitgleich", „über 8.000 Direktbuchungen", „Einführung von Buchungsmaschinen & PMS Systemen", „Mews, OnePageBooking und HubSpot" (B4.2) | `a1/48c_start.txt` | **deckungsgleich** (alle vier) |
| 5 | Brandnamic „Stundensatz … 115,00 €, zuzüglich Nebenkosten und MwSt." + „Einheiten von je 15 Minuten" (B4.3) | `a2/agb.txt` | **deckungsgleich** |
| 6 | Brandnamic 476 Seiten Sitemap · „150+" Mitarbeitende, einkanalig (B4.3) | `a2/sitemap-pages.xml` (476 `<loc>`), `a2/txt_ai_grounding-page-brandnamic.txt` | **deckungsgleich** |
| 7 | Brandnamic „~70 Partner in sechs Kategorien"; straiv unter „Zahlungsanbieter Schnittstellen" (B4.3) | `a2/raw_partner.html`, `a2/txt_partner.txt` | **abweichend**: 78 Partner / 7 Kategorien (H-1). Straiv-Kategorie **bestätigt** |
| 8 | melevo 130 €/h · 603/1.150/2.200 €/M (5/10/20 Arbeitspunkte, 0 € Start, 12 Mon.) · Website 95/145/275 €/M + 1.495/2.295/4.195 € · Steuerbasis fehlt (B5.3) | `a3/melevo-preise.txt` | **deckungsgleich**, inkl. des Steuerbasis-Negativs (0 Treffer auf `netto|brutto|MwSt`) |
| 9 | Dittlmann BAFA-ID 130986 · INQA IC2336101 · 80 % Zuschuss · „50-70 % Förderung sichern" (B5.2) | `a3/ch-impressum.txt`, `a3/ch-bafa.txt`, `a3/ch-preise.txt` | **inhaltlich deckungsgleich**, Zitat aber gespleißt (W-16); „50-70 %" steht im Seitentitel |
| 10 | Unternehmermanufaktur: BAFA 3.500 €/50–80 % · INQA 14.400 €/80 % · NRW 3.200 €/40 % · RLP 500 €/Tag · Bayern 8.000 €/70 % (B5.2) | `a3/um-foerder.txt` | **deckungsgleich** (alle fünf Programme, alle Quoten) |
| 11 | Bräu „typischerweise zwischen 30 und 300 Zimmern" + beidseitiger Ausschluss (B5.3/B8.3) | `a3/braeu-dach.txt` | **deckungsgleich** |
| 12 | Bräu Partnerliste (Scopevisio, Hotelkit, Guestnet, SHS) + eigene Produkte (myControlling, Mail-Pilot) neben „Ich berate herstellerunabhängig" (B5.3) | `a3/braeu-dach.txt` | **deckungsgleich** — die Spannung besteht wie beschrieben |
| 13 | HOGARAT: Leistungen Nachfolge/Gutachten/Betreiberwechsel (B5.1) | `a3/hogarat-hotelberatung.txt` | **deckungsgleich** — und genau deshalb trägt W1 nicht (K-3) |
| 14 | Smart Host 399/849/1.599 €, je „reale annäherungsweise Preisbeispiele", 20 Zi./3★ · 75 Zi./4★ · 100 Zi./5★, Module Base+CRM (B6.1) | `a4/sh_de_preise.txt` | **deckungsgleich** (vorbildlich präzise) |
| 15 | Smart Host: FAQ „Ja, 12 Monate" im CMS-Text vs. „36 Monaten" im JS-Altblock (B6.1) | `a4/sh_de_wissenszentrum_faq.txt` / `.html` | **deckungsgleich** — 12 im Text, genau 1× 36 im HTML |
| 16 | Smart Host „40+ Smarties", „über 1.000 Kunden", „seit 2017", „#1 Hotel-CRM in DACH" (B6.1) | `a4/sh_de_ueber-uns…txt`, `a4/sh_de_preise.txt`, `a4/sh_de_home.txt` | **deckungsgleich** |
| 17 | RevenueRise „ab 879 EUR/CHF", „ab etwa 15 Zimmern", „20 bis 150 Zimmer" (B6.2) | `a4/rrise_preise.txt`, `a4/rrise_rm.txt` | **deckungsgleich** — aber Setup 1.000 € + Mindestlaufzeit 3 Mon. fehlen im Papier (W-8) |
| 18 | RevenueRise „4.500–8.000" monatlich **bzw.** „90.000–130.000 pro Jahr" (B6.2) | `a4/rrise_preise.txt`, `a4/rrise_rm.txt` | **Zahlen deckungsgleich, Rechenprobe scheitert**: 4.500–8.000 × 12 = 54.000–96.000 ≠ 90.000–130.000 (W-7) |
| 19 | HotelPartner „Jahreskosten ab 60.000 €" (B6.2) | `a4/hp_privat.txt` | **deckungsgleich**, aber „zuzüglich Benefits, Schulungen und Systemlizenzen" per Auslassung entfernt (W-7) |
| 20 | COM.CIERGE „ab CHF 990" / „ab CHF 1'490" / „ab CHF 2'990" + „exkl. MWST und initialen Kosten für Analyse" (B6.2) | `a4/com_rm.txt` | **deckungsgleich** |
| 21 | SUM Hospitality Preistabelle 400/5.000 · 700/9.000 · 1.500/12.000 · 4.000/18.000 CHF + Skalierungssatz (B8.1) | `a6/sum-pricing.txt` | **deckungsgleich** (alle acht Werte + Wortlaut) |
| 22 | work@hotel „40" Mitarbeitende / „184" Hotels, ausgelesen aus Zähler-Attributen, gerenderte Seite zeigt Nullen (B8.1) | `a6/workathotel.html` / `.txt` | **deckungsgleich inkl. Zählweg** — `data-value="40"`, `data-value="184"`, im Text stehen `0` |
| 23 | Mews-Beraterverzeichnis „15 Einträge", zwei Partnerstufen (B8.4) | `a6/mews-consultants.txt` | **deckungsgleich** — genau 15 Partnerschaftsblöcke; „Preferred Consultant and Certified Deployment Partner" belegt |
| 24 | Apaleo-Sitemap: 100 `<loc>`, genau 1 Treffer auf `partner\|consult\|expert\|agenc` = Event-Seite; Positivkontrolle `pricing` = 1 (B8.4) | `a6/apaleo-sitemap.xml` | **deckungsgleich, byte-genau reproduziert** (`oktoberfest-partner-2026`) |
| 25 | Apaleo-Store: „vollständige Kategorienliste hat **7** Einträge" (B8.4) | `a6/apaleo-store-next.json` | **abweichend — 9** (K-1) |
| 26 | 42 GmbH Partnerliste (Straiv, Kiosk.eu, Brandnamic …) + „All-in-One ist die größte Illusion" + „seit über 30 Jahren" (B5.3/B8.1) | `a6/42gmbh-beratung.txt` | **deckungsgleich**, Listenende gekürzt (H-3) |
| 27 | z1Digital Guest-Journey-Zitat + „bis zu 80 % förderfähig" + Qualitätssicherer Ellipsis (B8.5) | `a6/z1digital.txt` | **deckungsgleich** |
| 28 | DEHOGA BW 985,00 € Nettotagessatz · 499/635/250 € Eigenanteile · „bis zu 100 Prozent gefördert" · „bundesweit … in allen Bundesländern" (B9.1) | `a5/dehoga/bw-kosten-foerderung.txt`, `bw-beratung.txt` | **Zahlen deckungsgleich und in sich stimmig** (985−735=250; 985−350−136=499; 985−350=635) — **Rahmung falsch** (W-9) |
| 29 | DEHOGA Hamburg: Beratungsseite `Digitalisierung` 0 · `Marketing` 0 · Positivkontrolle `Beratung` 48 · `Betriebsberatung` 2 (B9.1) | `a5/dehoga/hh-beratung.html` | **deckungsgleich, reproduziert** (48 und 2 im Roh-HTML, 0/0 in HTML **und** Text) |
| 30 | IHA: Preferred Partner 8.150 €/Jahr, Hotel bis 50 Zimmer 1.370 €, 47 Partner, Kategorien „Digitales / KI" und „Sales & Marketing", Online Birds „kostenfreie Analyse Ihrer Online Marketing Kanäle" + „Hotel Digital Score" 0–100 (B9.3) | `a5/iha/beitragsordnung.txt`, `a5/slugs.txt`, `a5/iha-preferred.html`, `a5/pp/online-birds-gmbh.txt` | **deckungsgleich**; 8.150/1.370 = 5,95 → „fast das Sechsfache" **korrekt**; 47 dreifach belegt (Slugs, Dropdown, Fließtext) |

**Zusatzläufe außerhalb der Tabelle (alle deckungsgleich):** Hamburg
Digital Check 50 %/7.500 €/1.100 € netto/16.11.2026/31.12.2026 samt der
im Papier genannten Positivkontrolle — `Marketing` 0 · `Website` 0 ·
`Tagess` 1 · `7.500` 2, **exakt reproduziert** · SH-DKU 40 % auf max.
20.000 €, Beraterkosten min. 2.500 € netto, befristet bis 30.06.2027,
Ausschlussliste Ziffer 3.1.1 ohne Beherbergung, `go-digital` 0 /
`lizenziert` 0 in der Neufassung · BAFA 3.500 €/1.750 €/2.800 €,
Registrierung kostenfrei, Anträge bis 31.12.2026 · B4.4-Weißraum
(Gästemappe **0/16**, Self-Check-in **0/16**, „Hotel" in jeder Datei) ·
ROAS-Belege („⌀ 950 % ROAS", „10 € zurück pro investiertem Euro", „CPC
oft unter 0,40 €") und „**nur einer** schränkt ein" (Plaschke:
„Erfahrungswerte, nicht … garantierte Ergebnisse") · „3–6 % des Umsatzes"
und „9 Team-Mitglieder" · Registerangaben HRB 294574 / FN 659087 x /
Firmenbuch 453940i · B7-Negativ im zentrale-Repo (**0** Treffer,
Positivkontrolle Everlast **10× in 3 Dateien**) · Everlast-Eckdaten
(8.400 € netto × 1,19 = 9.996 € brutto = 6 × 1.666 €) · N-1 bis N-4 und
N-6 der Fundstellen-Nachprüfung an ihren heypensio-Rohquellen.

---

## 8. Positivbefunde — was ich geprüft habe und was hält

Ein Prüfprotokoll ohne Positivkontrolle ist selbst unbelegt. Folgendes
ist geprüft und **in Ordnung**:

1. **Die Zahlenarbeit trägt.** 28 von 30 Stichproben zeichengenau; die
   zwei Abweichungen sind Zählfehler, keine Erfindungen. **Kein einziger
   Wert war nicht auffindbar.**
2. **Zwei Positivkontrollen ließen sich byte-genau reproduzieren** —
   Hamburg Digital Check (`Marketing` 0 · `Website` 0 · `Tagess` 1 ·
   `7.500` 2) und die Apaleo-Sitemap (100 `<loc>`, 1 Treffer, `pricing`
   1). Das ist die stärkste Form von Nachprüfbarkeit, die ein Papier
   erreichen kann.
3. **Das B7-Negativ im zentrale-Repo ist exakt reproduzierbar** — „kein
   Wettbewerber"/„möglicher Kanal" 0 Treffer, Kontrolle „Everlast" 10×
   in 3 Dateien.
4. **Der B4.4-Weißraum hält vollständig** — Gästemappe 0/16,
   Self-Check-in 0/16, Positivkontrolle in jeder Datei getroffen. Auch
   die Selbst-Einschränkung („belegt ist nur die Abwesenheit in 16
   Selbstdarstellungen, nicht die Ursache") ist genau richtig gesetzt.
5. **Die abgeleiteten Zahlen rechnen auf, wo sie ausgewiesen sind.**
   BAFA 50 %/80 % von 3.500 = 1.750/2.800 ✓ · SH-DKU 40 % von 20.000 =
   8.000 ✓ **und ausdrücklich als eigene Rechnung markiert** („gerechnet,
   steht so nicht in der Richtlinie") — das ist vorbildlich · IHA
   8.150/1.370 = 5,95 → „fast das Sechsfache" ✓ · alle drei
   DEHOGA-BW-Beispielrechnungen ✓ · Everlast 8.400 × 1,19 = 9.996 =
   6 × 1.666 ✓.
6. **B6.1 (Smart Host) ist das methodisch beste Kapitel des Papiers.**
   Die Richtigstellung der „399 €/M" ist vollständig belegt, korrekt
   eingegrenzt („im geprüften Seitenbestand nicht gefunden", nicht
   „existiert nicht"), der 12-vs-36-Monate-Widerspruch wird **nicht
   geglättet**, und die eigene Messgrenze („wurde nicht gemessen, kein
   Browser") steht dabei. Alle vier Punkte an den Rohabzügen bestätigt.
7. **Die Beleg-Typen-Trennung wird gut durchgehalten** — insbesondere
   der Leseweg-Vermerk in B7.2 (BYTE-Zitate namentlich von
   AGENT-Zitaten getrennt, mit ausdrücklicher Warnung vor
   Weiterverwendung in Kundentexten) und die Brandnamic-Abgrenzung
   („anbietergenerierte KI-Zusammenfassungen … kein Zitat und keine Zahl
   unten stammt daraus"). Ich habe stichprobenartig gegengeprüft: Die
   zitierten Brandnamic-Werte stammen tatsächlich aus AGB und
   Grounding-Seite, nicht aus den `.md`-Fassungen.
8. **Der protokollierte Werkzeugfehler in B5.4** (`EUR\b` matcht „Euro"
   nicht, implausible Null als Werkzeugfehler behandelt, Lauf
   wiederholt) ist genau die Haltung, die die Regel verlangt — und er
   ist offengelegt statt geglättet.
9. **B8.4 Kanal 1, B9.4 (Quellenkonflikt WTSH-Altrichtlinie mit
   Gegenprobe an der Altfassung), B9.1 (301-Weiterleitungsfalle
   `dehoga-bundesverband.de`) und B6.2 Punkt 7 (Adressgleichheit
   RevenueRise/RoomPriceGenie, ausdrücklich als Beobachtung und nicht
   als Vorwurf)** sind vier Stellen, an denen das Papier eigene
   Fehlerquellen aktiv aufgedeckt und sauber eingegrenzt hat. Der
   `kfw-beraterboerse.de`-Befund (Casino-Affiliate auf der von der IHK
   verlinkten Altdomain) ist ein echter Schadensfund.
10. **Die Vorwärtsverweise in § 0.0 und § 5.5 sind richtig platziert** —
    dort, wo der Leser ankommt, nicht im Changelog. Die Auflösung von
    P12/P13 in § 7 mit Reststand-Vermerk ist mustergültig; sie ist der
    Maßstab, an dem P9 (W-14) gemessen fehlt.
11. **`R05-A-fundstellen.md` N-1 bis N-4 und N-6 halten** — alle an den
    heypensio-Rohquellen selbst nachgelesen. N-3 mitsamt der
    Verwechslungsfalle 2.265,76 € brutto vs. 2.265,96 € netto und N-6
    mit der zweikanaligen Präzisierung des SEO-Negativs sind gute
    Prüfarbeit. Nur N-5 fällt (W-15).
12. **Die Selbstbegrenzungen von Teil B sind überwiegend ehrlich und
    ungewöhnlich vollständig** — Alpen-Schlagseite, kein Registerauszug,
    keine Drittquellen, Sprachfassungen, die fünf unerhobenen Kandidaten
    (P16), die Vollständigkeitsgrenze des P13-Laufs. Die vier
    KRITISCH-Befunde oben ändern daran nichts: Sie betreffen Stellen, an
    denen die Selbstbegrenzung **fehlt**, nicht das Prinzip.

---

## 9. Empfohlene Reihenfolge der Reparatur

1. **K-1** (B8.4: 7 → 9, Entwarnung streichen, Kontrolle ersetzen) und
   **K-2** (BAFA-Ausnahmeklausel, P14 umformulieren) — beide betreffen
   Sätze, die bereits als Entscheidungsgrundlage markiert sind.
2. **K-3** (W1-Definition gegen E13b entscheiden) — ohne diesen Schritt
   sind alle Einstufungstabellen von Teil B nicht überprüfbar.
3. **K-4** (B1 um zwei Kategorien erweitern, Brandnamic-Kanal
   nachziehen) — die Geltungsgrenze ist der Ehrlichkeitsvertrag des
   Teils.
4. **W-17** (Rohabzüge aus dem Scratchpad sichern, Fundstellen
   nachtragen) — **zeitkritisch**: Das Scratchpad ist sessiongebunden;
   danach ist Teil B nicht mehr nachprüfbar.
5. **W-9, W-7, W-8, W-10** (Zahlen-Rahmungen mit Außenwirkung Richtung
   MKT-HANDEL).
6. Der Rest in beliebiger Reihenfolge.

---

*Erstellt 09.08.2026, Session R05-A — unabhängige Prüfung. Zugehörig:
`fund/wettbewerbsbild.md`, `protokolle/R05-A-fundstellen.md`.
Alle Nachzählungen dieses Protokolls sind vom Prüfer selbst ausgeführt;
Rohbelege im Session-Scratchpad `a1`–`a6` sowie in den heypensio-/
zentrale-Repos (nur lesend).*
