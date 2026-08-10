# Förderarchitektur und Beraterrolle — Trägerdokument

> **Strang:** MKT-HANDEL · **Erstellt:** Session R07-D (Rockstar), 10.08.2026
> **Repo-Messstand zu Beginn:** `0ea39bb`
> **Auftrag:** Die zwei seit R5 offenen fallbezogenen Rückfragen aus
> `fund/wettbewerbsbild.md` B9.4 (IFB Hamburg · WTSH) in versandfertige
> Anfragen überführen und die drei Programme mit Belegstufe je Aussage
> führen.
>
> **Zweck dieses Dokuments:** Es beantwortet die Frage „Welche geförderte
> Beratung können wir unseren Kunden ermöglichen, und was muss dafür an
> UNS wahr sein?" Es ist **kein** Kundendokument und **keine**
> Rechtsberatung.
>
> **⚠️ Geltungsgrenze:** Erhoben ist ausschließlich der Stand
> **10.08.2026** für **Hamburg** und **Schleswig-Holstein** sowie das
> Bundesprogramm BAFA. Andere Bundesländer, AT und CH sind hier **nicht**
> geführt (AT/CH sind in B9.4 als ausgeschlossen belegt). Förderrecht
> altert schnell und in beide Richtungen — jede Aussage unten trägt ihr
> Erhebungsdatum.

---

## 0. Belegstufen-Notation (zweiachsig)

Nach Baustein `quellen-beschaffung`: **Leseweg** getrennt von
**Quellenart**, weil eine sauber zitierte Selbstauskunft sonst beim
Verdichten wie ein geprüfter Fakt wirkt.

| Achse | Werte |
|---|---|
| **Leseweg** | `BYTE` = von dieser Session selbst im Rohtext/Roh-PDF gelesen · `AGENT` = durch einen Subagenten gelesen · `SEKUNDÄR` = aus einem Repo-Dokument übernommen, Rohquelle nicht selbst geöffnet |
| **Quellenart** | `AMTL` = amtliche Verkündung/Förderrichtlinie der ausgebenden Stelle · `FORM` = amtliches Antrags-/Erklärungsformular der ausgebenden Stelle · `ANBIETER-SELBST` = Selbstauskunft einer Stelle auf ihrer Website · `EIGEN` = eigene Rechnung/Ableitung |

**Rohbelege dieser Session:** Alle unten zitierten Live-Abrufe vom
10.08.2026 liegen im Session-Scratchpad und sind aus dem Repo **nicht**
nachprüfbar. Nachprüfbar sind die R05-A-Rohbelege in
`sensibel\rohbelege-R05-A\a5\foerder\` (git-ignoriert), gegen die diese
Session gehasht hat.

---

## 1. Rollenklärung — wer ist hier eigentlich wer?

**Diese Klärung entscheidet, welche Frage überhaupt unsere ist.** Sie war
in B9.4 nicht ausformuliert und ist die tragende Prämisse beider
Anfragen.

| Programm | Antragsteller / Zuwendungsempfänger | Unsere Rolle | Belegstufe |
|---|---|---|---|
| **Hamburg Digital Check** | **Der Kunde** — „rechtlich selbstständige kleine und mittlere Unternehmen (KMU gem. EU-Definition) der gewerblichen Wirtschaft … mit einer Betriebsstätte in Hamburg" (Ziffer 2) | **Beratungsdienstleister.** Wir stellen keinen Antrag. Wir unterschreiben die Anlage „Selbsterklärung Digitalisierungsberatung" (Ziffer 4) | `BYTE` / `AMTL` (Richtlinie, Stand 01.08.2025), 10.08.2026 |
| **SH-DKU Modul 1 (Beratung)** | **Der Kunde** — „kleine Unternehmen der gewerblichen Wirtschaft gemäß der KMU-Definition" (Ziffer 3.1.1). Achtung: **kleine**, nicht mittlere → < 50 Beschäftigte und ≤ 10 Mio. € Jahresumsatz/-bilanz (Fußnote 1) | **Externer Beratungsdienstleister**; unsere Ausgaben sind der Zuwendungsgegenstand (Ziffer 5.2.1) | `BYTE` / `AMTL` (Amtsbl. SH 2026/190), 10.08.2026 |
| **BAFA-Unternehmensberatung** | **Der Kunde** (das beratene KMU) — „Die Auszahlung des Zuschusses erfolgt an das beratene Unternehmen" (Ziffer 5.1) | **Beratungsunternehmen mit BAFA-Registrierung**; hier trifft uns die Registrierungsvoraussetzung selbst | `BYTE` / `AMTL` (Förderrichtlinie i. d. F. vom 12.12.2024), 10.08.2026 |

**Konsequenz für die Anfragen (Adressaten-Prüfung, Baustein
`aussenkorrespondenz`):** Weil wir in allen drei Programmen **nicht**
Antragsteller sind, ist jede Frage nach der Antragslage eines konkreten
Kunden eine Frage, die dem **Kunden** gehört — nicht uns. Zulässig sind
nur Fragen nach **Auslegung, Zuständigkeit und Verfahren** der
ausgebenden Stelle. Fragen nach unserer eigenen Umsatz-, Vertrags- oder
Qualifikationslage werden **nicht** an eine Förderstelle gerichtet: Sie
sind aus unseren Unterlagen zu beantworten, und wer eine Behörde nach der
eigenen Lage fragt, dreht die Beweislast um.

---

## 2. Geltungsstand der zitierten Fassungen — eigene Prüfung 10.08.2026

B9.4 stützt sich auf Richtlinienfassungen, die am 09.08.2026 erhoben
wurden. **Fundstelle und Geltungsstand sind zwei Prüfungen.** Diese
Session hat den Geltungsstand an der ausgebenden Stelle nachgezogen.

**Vorprüfung (Pflicht vor jedem Web-Negativ):** Redirect-Gegenprobe je
Domain mit Kontrollpfad `/zzz-r07d-kontrollpfad` am 10.08.2026 —
`www.ifbhh.de` antwortet HTTP 404 (5.748 Byte gegen 118.858 Byte
Startseite), `wtsh.de` HTTP 404 (64.252 Byte gegen 84.286 Byte
Startseite). **Kein Wildcard-Redirect** — die Befunde unten sind keine
Artefakte.

| Prüfgegenstand | Ergebnis 10.08.2026 | Belegstufe |
|---|---|---|
| **Hamburg Digital Check, Richtlinie** | **Unverändert geltend.** Das von der IFB-Programmseite verlinkte PDF ist **byte-identisch** zum R05-A-Stand vom 09.08.2026 (SHA-256 `8e11dcf0…` auf beiden Seiten). Die Richtlinie trägt „Gültig ab 1. August 2025", Ziffer 8: „befristet bis zum 31.12.2026. Anträge müssen vollständig bis 16.11.2026 bei der IFB Hamburg gestellt sein." | `BYTE` / `AMTL` |
| **Hamburg Digital Check, Programmseite** | Byte-identisch zum 09.08.-Stand (SHA-256 `cca8a79f…`) | `BYTE` / `ANBIETER-SELBST` |
| **SH-DKU, geltende Fassung** | **Amtsbl. SH 2026/190 vom 05.06.2026 ist die geltende Fassung.** Ziffer 9: „Zugleich tritt die Richtlinie … vom 20. April 2023 außer Kraft." Laufzeit bis **30.06.2027**, verlängerbar, längstens bis 31.12.2029. An der ausgebenden Stelle (Verkündungsportal SH) am 10.08.2026 abrufbar, Kopf „Amtsblatt 2026/190 vom 5. Juni 2026" | `BYTE` / `AMTL` |
| **WTSH-Programmseite** | Inhaltlich unverändert gegenüber dem 09.08.-Stand. Der Datei-Hash weicht ab, der Textvergleich zeigt als **einzigen** Unterschied einen Cache-Zeitstempel (`time: "1786298695"` → `"1786360653"`) | `BYTE` / `ANBIETER-SELBST` |

### 2.1 ⚠️ Befund gegen B9.4: die Warnung vor dem veralteten Richtlinien-Link ist an dieser Seite nicht belegt

B9.4 führt einen „Quellenkonflikt, der uns fast zum Falschschluss geführt
hätte": *„Die WTSH-Programmseite verlinkt als ‚Richtlinie' weiterhin die
veraltete Fassung vom 20.04.2023 … Wer nur diesem Link folgt, hält sich
fälschlich für ausgeschlossen."*

**Gemessen am 10.08.2026 trifft das auf diese Seite nicht zu.** Die
Download-Box „Richtlinie Digitalisierungsmaßnahmen kleine Unternehmen
(DKU) → herunterladen" auf
`wtsh.de/de/foerderung-niedrigschwelliger-innovativer-digitalisierungsmassnahmen-in-kleinen-unternehmen`
zeigt auf das Verkündungsportal-Dokument **2026/190** — die **geltende**
Fassung. Dasselbe gilt für den **R05-A-Rohbeleg vom 09.08.2026**
(`sh-dku.html`): Auch dort ist dieser Link der einzige Richtlinien-Link,
und er zeigt bereits auf 2026/190. Die Aussage war also **schon zum
Erhebungszeitpunkt** an dieser Seite nicht belegt.

**Was belegt ist:** Die 2023er konsolidierte Lesefassung existiert und
enthält die go-digital-Lizenzpflicht („Beauftragte Beratungsunternehmen
müssen für eine go-digital-Beratung des Bundes lizenziert sein") — sie
liegt als `sh-dku-rl.txt` im R05-A-Rohbelegbestand. **Nicht belegt ist,
über welchen Weg R05-A sie erreicht hat.** Die inhaltliche
Kernaussage von B9.4 — *die Lizenzpflicht ist in der geltenden Fassung
entfallen* — bleibt davon **unberührt und richtig**; falsch ist nur die
Zuschreibung des Fehlers an die WTSH-Programmseite.

→ **Zielort:** `fund/wettbewerbsbild.md` B9.4 gehört R07-A (Session
Ben Beckman). Diese Session hat dort **nur Lesezugriff** und trägt den
Befund als Nebenbefund weiter. **Träger: Leitsession Shanks im
R7-Review.** Bis dahin gilt die B9.4-Warnung als **fraglich markiert**,
nicht als widerlegt: Ein Negativ an *einer* Seite schließt nicht aus,
dass eine andere WTSH- oder Landesseite die Altfassung führt — diese
Session hat nur die Programmseite gemessen.

---

## 3. Hamburg Digital Check (IFB Hamburg)

**Ausgebende Stelle:** Hamburgische Investitions- und Förderbank,
Besenbinderhof 31, 20097 Hamburg. Richtliniengeber ist die Behörde für
Wirtschaft, Arbeit und Innovation (BWAI).
*(Anschrift: `BYTE`/`AMTL` aus der Richtlinie Ziffer 9. **Einquellig** —
Anschriften für Außendokumente sollen über mehrere unabhängige Stellen
belegt werden; für eine Mail ohne Postanschrift ist das unkritisch, vor
einem Briefversand nachzubelegen.)*

### 3.1 Konditionen (alle `BYTE`/`AMTL`, Richtlinie Stand 01.08.2025)

| Position | Wortlaut/Wert | Scope-Vermerk |
|---|---|---|
| Förderquote | „maximale Förderquote beträgt 50 %" | — |
| Fördersumme | „maximale Fördersumme 7.500 €" | Zuschuss an den **Kunden** |
| Beratertagessatz | „Maximal kann ein Beratertagessatz von 1.100 € **(ohne Umsatzsteuer)** als förderfähig anerkannt werden" | **netto**, Steuerbasis in der Quelle ausdrücklich genannt |
| Antragsfrist | „Anträge müssen vollständig bis 16.11.2026 … gestellt sein" | Richtlinie befristet bis 31.12.2026 |
| Vorhabenbeginn | „Es können nur solche Vorhaben gefördert werden, die noch nicht begonnen wurden. Ein Vorhaben gilt als begonnen, sobald entsprechende Lieferungs- oder Leistungsverträge abgeschlossen wurden." | ⚠️ **Der Vertragsschluss mit uns ist der Vorhabenbeginn** |
| Kumulierung | „Eine Kombination der Zuwendung mit anderen nicht rückzahlbaren Zuschüssen aus EU-, Bundes oder Landesprogrammen ist nicht möglich." | schließt SH-DKU und BAFA **für dasselbe Vorhaben** aus |
| Wiederholung | Innerhalb von zwei Jahren nur, soweit die 7.500 € nicht ausgeschöpft sind | — |
| Rechtsgrundlage | De-minimis-VO (EU) 2023/2831 | **nicht** Art. 18 AGVO — s. Kontrast zu SH-DKU unten |
| Ergebnispflicht | Beratung „soll im Ergebnis mit einem konkreten Realisierungskonzept … enden" mit Inhalt, Zielen, Ressourcen/Investitionen und Umsetzungszeitplan | prägt unser Beratungs-Deliverable |

**Rechnungs-Hinweis (`EIGEN`):** Bei 50 % Quote und 7.500 € Deckel ist der
Deckel bei 15.000 € förderfähigen Ausgaben erreicht; bei 1.100 €
Tagessatz-Obergrenze entspricht das rund 13,6 Beratertagen. **Der Zählweg
ist die Division 15.000 / 1.100 — die Richtlinie nennt diese Zahl nicht.**

### 3.2 Fördergegenstand — der Wortlaut, um den es geht

Ziffer 3 nennt zwei Bereiche. Der einschlägige ist **„Digitaler Wandel"**
mit genau zwei Spiegelstrichen (`BYTE`/`AMTL`, wörtlich):

> ▪ Beratungsleistungen zur konkreten Verbesserung oder Einführung von
> betrieblichen Infrastrukturen und Maßnahmen zur Digitalisierung von
> Produktionsprozessen und Verfahren.
> ▪ Beratungsleistungen zur konkreten Verbesserung oder Einführung von
> betrieblichen Infrastrukturen und Maßnahmen zur Digitalisierung von
> Geschäftsmodellen, Produkten und Dienstleistungen.

**Präzisierung gegenüber B9.4:** B9.4 fasst den Befund als „`Marketing` 0 ·
`Website` 0 — weder benannt noch ausgeschlossen" zusammen. Die
Wort-Zählung ist korrekt und von dieser Session am selben Rohbeleg
nachvollzogen. Sie unterschlägt aber, dass die Richtlinie **positiv
umgrenzt**, worum es geht: um die Digitalisierung von
**Geschäftsmodellen, Produkten und Dienstleistungen** — nicht um
Sichtbarkeit als solche. Der Unterschied entscheidet die Auslegungsfrage
und ist der Grund, warum die Anfrage nicht „fällt Marketing darunter?"
fragt, sondern den **konkreten Beratungsgegenstand** zur Einordnung
vorlegt.

### 3.3 ⭐ Neuer Befund: die Selbsterklärung ist keine niedrige Hürde

B9.4 führt den Hamburg Digital Check als „**Selbsterklärung
‚Digitalisierungsberatung'** — keine Akkreditierung, **niedrigste Hürde
aller geprüften Programme**". Diese Session hat das Formular selbst
gelesen (`selbsterklaerung-digitalisierungsberatung-data.pdf`, von der
IFB-Programmseite, abgerufen 10.08.2026, 2 Seiten — `BYTE`/`FORM`). Es
enthält Anforderungen, die im Repo bisher **nirgends** dokumentiert sind:

1. **Referenzpflicht** — wörtlich: „die fachliche Expertise für das
   geplante Beratungsprojekt zu besitzen. Ich habe zudem im den letzten
   drei Jahren mindesten drei Referenzprojekte mit direktem Bezug zu dem
   nun geplanten Projekt durchgeführt" *(Tippfehler im Original)*, mit
   drei auszufüllenden Kurzbeschreibungen.
2. **Wettbewerbsneutralität** — wörtlich: „eine wettbewerbsneutrale
   Beratung zu gewährleisten. Den Kunden die beste und günstigste Lösung
   zu empfehlen und über Vor- und Nachteile zu unterrichten. Es müssen
   auch mögliche Alternativen aufgezeigt werden. Eventuelle Provisionen
   sind offenzulegen."
3. **Qualitätsstandards** — „einschlägige Qualitätsstandards und Normen
   (z.B. BSI IT-Grundschutz, ISO 27001) anzuerkennen".
4. **⚠️ Alle drei Punkte sind mit [§] gekennzeichnet und damit
   „subventionserhebliche Tatsachen gemäß § 264 StGB"** (Subventionsbetrug),
   ausdrücklich einschließlich Tatsachen, „die durch Scheingeschäfte oder
   Scheinhandlungen verdeckt werden".

**Warum das die Förderarchitektur betrifft und nicht nur ein Detail ist:**

- Die Referenzpflicht ist für eine **im Aufbau befindliche** Abteilung die
  eigentliche Eintrittshürde — nicht die fehlende Akkreditierung. Die
  Einstufung „niedrigste Hürde aller geprüften Programme" ist damit
  **mindestens erklärungsbedürftig**.
- Die Wettbewerbsneutralität berührt direkt das Geschäftsmodell:
  Wir beraten und wollen anschließend **umsetzen**. Ob und wie die IFB das
  trägt, ist eine Auslegungsfrage an die IFB — **Frage 3 der Anfrage**.
- **Was wir NICHT tun:** Wir fragen die IFB nicht, ob *wir* die drei
  Referenzen haben. Das ist eine Tatsache aus unseren Unterlagen, und eine
  Behörde nach der eigenen Erfüllung zu fragen, ist bei einer
  strafbewehrten Erklärung der falsche Weg. Gefragt wird nur, **wie der
  „direkte Bezug" ausgelegt wird** — das ist die Frage, die die IFB
  beantworten kann und wir nicht.

→ **Offener Punkt F-1** (Träger: Leitsession/MKT-HANDEL): Referenzlage
gegen die drei Kriterien inventarisieren, **bevor** die Selbsterklärung
irgendwo unterschrieben wird. `sensibel/` ist der Ort, falls
Personen-/Vorgeschichtsdaten hineingehören.

---

## 4. SH-DKU Modul 1 „Beratung" (WTSH)

**Ausgebende Stelle / Bewilligung:** Wirtschaftsförderung und
Technologietransfer Schleswig-Holstein GmbH (WTSH), Lorentzendamm 24,
24103 Kiel (`BYTE`/`ANBIETER-SELBST`, Programmseite 10.08.2026).
Richtliniengeber ist das Ministerium für Wirtschaft, Verkehr, Arbeit,
Technologie und Tourismus.

### 4.1 Konditionen (alle `BYTE`/`AMTL`, Amtsbl. SH 2026/190)

| Position | Wortlaut/Wert | Scope-Vermerk |
|---|---|---|
| Förderquote Modul 1 | „Die Zuwendung beträgt maximal 40 Prozent der zuwendungsfähigen Ausgaben" (Ziffer 5.3.1) | — |
| Zuwendungsfähige Ausgaben | „betragen maximal 20.000 Euro" (Ziffer 5.3.1) | — |
| **max. Zuschuss 8.000 €** | ⚠️ **gerechnet** (40 % von 20.000 €). **Die Richtlinie nennt diese Zahl nicht.** Zählweg: Multiplikation | `EIGEN` |
| Steuerbasis | „Bei Begünstigten, die … zum Vorsteuerabzug nach § 15 UStG berechtigt sind, sind nur die **Nettoausgaben** zuwendungsfähig" (Ziffer 5.2) | **abhängig von der Vorsteuerlage des Kunden**, nicht pauschal netto |
| Eigenanteil | „mindestens 10 Prozent … unabdingbar" (Ziffer 5.4) | — |
| Laufzeit | bis **30.06.2027** (Ziffer 9), verlängerbar | — |
| Rechtsgrundlage Modul Beratung | „insbesondere **Artikel 18 KMU-Beihilfen für die Inanspruchnahme von Beratungsdiensten** für das Modul Beratung" (Ziffer 1.2) | ⭐ Quelle des Werbe-Ausschlusses unten |

**⚠️ Korrektur zur B9.4-Zeile „Beraterkosten mind. 2.500 € netto":** Diese
Session hat die Bagatellgrenze im Amtsblatt 2026/190 **nicht
wiedergefunden**. Der Wert wird hier **nicht bestätigt und nicht
widerlegt** — er ist „nicht geprüft", nicht „falsch". Die Suche war
gezielt (Ziffern 2.1, 4, 5.2.1, 5.3.1 gelesen), aber **keine
Volltextsuche über alle 646 Zeilen mit Positivkontrolle**, und damit kein
belastbares Negativ.
→ **Offener Punkt F-2** (Träger: Leitsession/R07-A): Herkunft der 2.500 €
klären, bevor der Wert in ein Kundendokument geht.

### 4.2 Antragsberechtigung — was die Richtlinie selbst schon sagt

Ziffer 3.1.1 wörtlich (`BYTE`/`AMTL`):

> in den Modulen 1 und 2 sind kleine Unternehmen der gewerblichen
> Wirtschaft gemäß der KMU-Definition. Nicht antragsberechtigt sind
> Unternehmen, die in der Fischerei oder der Aquakultur … tätig sind;
> Unternehmen, die in der Primärerzeugung landwirtschaftlicher Erzeugnisse
> tätig sind; Unternehmen, die in der Verarbeitung und Vermarktung
> landwirtschaftlicher Erzeugnisse tätig sind; freie Berufe nach § 18 EStG
> - Einzelnorm; Krankenhäuser, Kliniken, Medizinische Versorgungszentren,
> Sanatorien oder ähnliche Einrichtungen.

**B9.4 ist damit bestätigt:** Beherbergung fehlt auf der Ausschlussliste,
und der Umkehrschluss bleibt eine **Lesart**. Zwei Präzisierungen, die
B9.4 nicht führt:

- Es sind **kleine**, nicht mittlere Unternehmen: < 50 Beschäftigte **und**
  ≤ 10 Mio. € Jahresumsatz bzw. -bilanz (Fußnote 1). Das ist eine
  Zielgruppen-Grenze, die unmittelbar auf MKT-FUND wirkt (Portfolio-
  Erweiterung „auf größere Häuser") → **Nebenbefund an MKT-FUND**.
- „Sanatorien **oder ähnliche Einrichtungen**" ist der einzige
  Ausschlussposten, der einen Beherbergungsbetrieb mit Kur-/Gesundheits-
  profil überhaupt treffen könnte — deshalb Teil von Frage 1 der Anfrage.

### 4.3 ⭐⭐ Der Befund, der die WTSH-Frage neu zuschneidet: Werbung ist ausdrücklich ausgeschlossen

Ziffer 5.2.1 — **im Abschnitt zum Modul Beratung** — wörtlich
(`BYTE`/`AMTL`):

> Bei den betreffenden Dienstleistungen darf es sich nicht um
> Dienstleistungen handeln, die fortlaufend oder in regelmäßigen Abständen
> in Anspruch genommen werden oder die zu den gewöhnlichen Betriebskosten
> des Unternehmens gehören wie laufende Steuerberatung, regelmäßige
> Rechtsberatung oder **Werbung**.

Das ist die Umsetzung von Art. 18 Abs. 2 AGVO, den Ziffer 1.2 als
Rechtsgrundlage des Moduls Beratung nennt. **Dieser Ausschluss ist im
gesamten Repo bisher nicht dokumentiert** — Gegenprobe: `grep` über alle
`*.md` auf `Werbung`, `gewöhnliche Betriebskosten`, `Art. 18`, `Artikel 18`
am 10.08.2026 findet außerhalb von Rohbelegen genau **einen** Treffer
(`fund/wettbewerbsbild.md:2508`, dort in einem anderen Zusammenhang).

**Verstärkt wird er durch die Positiv-/Negativliste der WTSH**
(`260605-dku_positiv-negativliste-mj.pdf`, Stand 05.06.2026, 3 Seiten,
`BYTE`/`ANBIETER-SELBST` — von der Programmseite, kein Amtsblatt-Anhang).
Sie ist die in Ziffer 5.2.3 angekündigte Veröffentlichung und benennt
beide Seiten der Linie wörtlich:

| Seite | Wortlaut |
|---|---|
| **Negativ** | „Kosten für die Erstellung oder Optimierung einer **Website (inkl. Social Media Kanäle) zur reinen Unternehmens- oder Produktdarstellung** (also **ohne Verknüpfung mit den betrieblichen Abläufen**)" |
| **Negativ** | „Kosten für **gängige Online-Marketing-Maßnahmen** (wie zum Beispiel Suchmaschinenoptimierung und -anzeigen (SEO/SEA), Display-Advertising, Content Marketing, E-Mail-Marketing)" |
| **Negativ** | „gewöhnlichen Betriebskosten des Unternehmens, wie laufende Steuerberatung, regelmäßige Rechtsberatung oder Werbung" |
| **Negativ** | „Anfertigung von Fotos, Audio- oder Videoaufnahmen" |
| **Positiv** (Verbesserung digitaler Geschäftsmodelle) | „Einführung **neuer, digitaler Vertriebskanäle** inklusive Aufbau des elektronischen Handels …"· „Einführung professioneller Webshops" |
| **Positiv** (Digitalisierung von Prozessen) | „Einführung eines Customer Relationship Management Systems (**CRM**) oder auch Content Management System (**CMS**) …" |

**Die Trennlinie steht damit in der Quelle selbst: „Verknüpfung mit den
betrieblichen Abläufen".** Sichtbarkeit als Selbstzweck ist draußen;
digitale Vertriebs- und Prozessstrecken sind drinnen.

**Was daraus für uns folgt — und was ausdrücklich NICHT folgt:**

- ✅ Belegt: Ein Angebot, das als „Marketing-", „Sichtbarkeits-" oder
  „Website-Beratung" zugeschnitten ist, trifft bei SH-DKU auf einen
  **wörtlichen Ausschluss**.
- ⚠️ **Nicht** belegt: dass unsere Beratung deshalb ausgeschlossen ist. Die
  Positivliste trägt genau die Bausteine, die ein Direktbuchungs- und
  Gästekommunikations-Vorhaben ausmachen. Die Einordnung hängt am
  **Zuschnitt des Beratungsgegenstands**, und die Abgrenzung ist genau
  das, was die WTSH beantworten kann.
- ⚠️ **Ungeklärt und deshalb eigene Frage:** Ob die **Negativliste**
  („Nicht förderfähige **Ausgaben**") überhaupt für Modul 1 gilt. Ihr
  Anker in der Richtlinie (Ziffer 5.2.3) steht im Abschnitt zu **Modul 2**;
  die **Positiv**liste dagegen spiegelt in ihren Überschriften exakt die
  Modul-1-Kategorien aus Ziffer 2.1. Das ist ein echter Auslegungspunkt →
  **Frage 3 der Anfrage**.
- Der Ausschluss ist **programmspezifisch**: Der Hamburg Digital Check
  läuft unter der De-minimis-VO, **nicht** unter Art. 18 AGVO, und
  enthält keine vergleichbare Klausel. **Diese Aussage gilt nur für den
  Richtlinientext** — ob die IFB in der Praxis ähnlich abgrenzt, ist
  genau die offene Frage 1 der IFB-Anfrage.

→ **Zielort:** `fund/wettbewerbsbild.md` B9.4 (R07-A / Leitsession) — die
B9.4-Formulierung „weder benannt noch ausgeschlossen" gilt für den
Hamburg Digital Check; für SH-DKU ist Werbung **benannt und
ausgeschlossen**.

---

## 5. BAFA-Unternehmensberatung (Bund)

**Status: nicht Gegenstand einer Anfrage dieser Session.** Begründung nach
Adressaten-Prüfung: Die entscheidende Frage ist die **Umsatzstruktur des
eigenen Unternehmens** („mehr als 50 % des Gesamtumsatzes" aus entgeltlicher
Unternehmensberatung). Das ist eine Frage über **uns**, nicht über die
Gegenseite — sie wird aus eigenen Unterlagen und mit dem Steuerberater
beantwortet, nicht mit dem BAFA.

**Wo sie liegt:** Als **Frage 11** der Steuerberater-Fragenliste im
Nachbar-Repo, `zentrale\stb-termin-fragenliste-2026-08.md`, Abschnitt
„11. BAFA-Beraterförderung — Umsatzstruktur (NEU 10.08. …)".
Die Aufnahme ist ein dokumentierter User-Entscheid
(`zentrale\briefings\briefing-2026-08-10.md`: „BAFA-Frage in die StB-Liste:
**JA** → als Frage 11 aufgenommen"). Die Fragenliste sieht vor:
„Ergebnis zu Frage 11 → Postkorb-Rückmeldung an MKT".
*(Belegstufe: `BYTE`/`EIGEN` — eigene Repo-Dokumente, am 10.08.2026 gelesen.)*

**⚠️ Die Rückmeldung kommt nach dem Termin.** Bis dahin ist die
BAFA-Route **weder offen noch geschlossen**. Die richtige Aussage bleibt
die aus B9.4: *Die Regelvoraussetzung ist bei umsetzungslastigem Geschäft
nicht erfüllt; ob eine Ausnahmegenehmigung erreichbar ist, ist ungeprüft.*
Die Richtlinie kennt dafür eine Klausel — Wortlaut und Fundstelle in
Abschnitt 5.1, an der Rohquelle geprüft.

### 5.1 Konditionen und Beratervoraussetzungen an der Rohquelle

Diese Session hat die BAFA-Richtlinie selbst gelesen
(`sensibel\rohbelege-R05-A\a5\bafa\richtlinie.txt`) — alle Angaben unten
`BYTE`/`AMTL`. **Fassung laut Kopf:** „Vom 14. Dezember 2022 (BAnz AT
23.12.2022 B1) in der geänderten Fassung vom 12. Dezember 2024 (BAnz AT
23.12.2024 B1, gültig ab 1. Januar 2024)".
⚠️ **Geltungsstand der BAFA-Richtlinie an der ausgebenden Stelle ist von
dieser Session nicht geprüft** — anders als bei IFB und WTSH. Der Beleg
ist der R05-A-Abzug vom 09.08.2026, nicht ein Live-Abruf. Vor einer
BAFA-Entscheidung nachzuziehen.

| Position | Wortlaut/Wert | Scope-Vermerk |
|---|---|---|
| Zuschuss SH/HH | „im Geltungsbereich der alten Bundesländer … **50 %** der förderfähigen Beratungskosten, maximal jedoch **1 750 Euro**" (Ziffer 5.2) | alte Bundesländer; neue Länder 80 % / 2 800 € |
| Förderfähige Kosten | „Die förderfähigen Beratungskosten betragen maximal **3 500 Euro**" (Ziffer 5.2) | in der Richtlinie **genannt**, nicht gerechnet |
| **Steuerbasis** | „Zu den förderfähigen Beratungskosten gehören neben dem Honorar auch Auslagen und Reisekosten …, **nicht jedoch die Umsatzsteuer**" (Ziffer 5.2) | Bemessung **netto**. ⚠️ Zugleich: Der Zuschuss wird nur gewährt, wenn der Kunde „die in Rechnung gestellten Beratungskosten (**einschließlich Umsatzsteuer**) in voller Höhe … bezahlt hat" — **die beiden Sätze meinen Verschiedenes und dürfen nicht verkürzt werden** |
| Häufigkeit | „insgesamt nicht mehr als **zwei pro Jahr** und maximal **fünf** innerhalb dieser Richtliniendauer" (Ziffer 5.2) | je Antragsteller |
| Antragsfrist | „Die Förderrichtlinie gilt längstens für Anträge, die bis zum **31. Dezember 2026** gestellt werden" (Ziffer 8) | — |

**Ziffer 4.2.1 „Beratereigenschaft" — wörtlich an der Rohquelle
(ersetzt das bisherige Zitat nach B9.4; ein Zitat gehört an die
Rohquelle, nicht an den Verdichtungsbericht):**

> In der Auswahl der Beraterin oder des Beraters ist der bzw. die
> Antragstellende frei, sofern die Beraterin bzw. der Berater beim
> Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) registriert ist.
> Voraussetzung für die Registrierung ist, dass es sich um selbständige
> Beraterinnen oder Berater handelt, deren überwiegender Geschäftszweck
> auf die entgeltliche Unternehmensberatung (mehr als 50 % des
> Gesamtumsatzes) gerichtet ist. In begründeten Fällen kann die
> Bewilligungsbehörde hierzu eine auf den Zeitraum der Förderrichtlinie
> befristete Ausnahmegenehmigung erteilen.

**Damit ist die B9.4-Kernaussage an der Rohquelle bestätigt** — die
Ausnahmeklausel steht dort und gehört in jede Wiedergabe.

**Drei weitere Voraussetzungen aus Ziffer 4.2.1, die im Repo bisher nicht
geführt sind:**

1. „Des Weiteren müssen die Beraterinnen oder Berater die erforderlichen
   Fähigkeiten und die notwendige Zuverlässigkeit besitzen sowie über ein
   geeignetes **Qualitätssicherungsinstrument** verfügen."
2. „Eine ordnungsgemäße Geschäftsführung … ist Grundvoraussetzung."
3. ⚠️ „Die Beraterinnen und Berater dürfen **nicht schon als
   Antragstellender im Förderprogramm aufgetreten sein**." — Wer das
   Programm einmal als beratenes Unternehmen selbst nutzt, verliert damit
   die Beraterrolle darin. Das ist eine Weichenstellung, die vor einer
   eigenen Inanspruchnahme bekannt sein muss.

→ **Offener Punkt F-9** (Träger: MKT-HANDEL): Qualitätssicherungs-
instrument benennen, falls die BAFA-Route weiterverfolgt wird.
→ Punkt 3 ist zugleich ein **Nebenbefund an die Zentrale**: Eine eigene
BAFA-geförderte Beratung schlösse uns als BAFA-Berater aus.

**Zeitpunkt-Prüfung — warum jetzt keine BAFA-Anfrage:** Eine Anfrage nach
der Ausnahmegenehmigung setzt voraus, dass wir unsere Umsatzstruktur
kennen und ein „begründeter Fall" darstellbar ist. Beides steht erst nach
dem StB-Termin fest. Eine Anfrage vorher würde die Beweislast umdrehen und
aktenkundig machen, dass wir die Regelvoraussetzung vermutlich nicht
erfüllen — bei einer Stelle, die später über die Ausnahme entscheidet.
→ **Offener Punkt F-3** (Träger: Zentrale, danach MKT-HANDEL): Nach der
StB-Rückmeldung entscheiden, ob eine BAFA-Anfrage gestellt wird und mit
welcher Begründung. **Anker: 31.12.2026** (Antragsfrist laut B9.4).

---

## 6. Kumulierung — die Programme schließen sich gegenseitig aus

Der Hamburg Digital Check verbietet die Kombination mit anderen nicht
rückzahlbaren Zuschüssen aus EU-, Bundes- oder Landesprogrammen
(`BYTE`/`AMTL`, Ziffer 5). **Für dasselbe Vorhaben ist also genau ein
Programm wählbar.** Praktisch entscheidet ohnehin die Betriebsstätte:
Hamburg → IFB, Schleswig-Holstein → WTSH. BAFA wäre bundesweit die
Alternative, hängt aber an Abschnitt 5.

**⚠️ Das ist keine Entwarnung zur Kumulierung insgesamt.** Ob mehrere
De-minimis-Beihilfen desselben Kunden aus verschiedenen Quellen sich
gegenseitig aufzehren, richtet sich nach der De-minimis-VO und dem
De-minimis-Höchstbetrag des **Kunden** — das ist Sache des Kunden und
seines Beraters, nicht unsere Aussage. Diese Session hat die
De-minimis-Grenzen **nicht** erhoben.

---

## 7. Die Grundregel für unser Auftreten in geförderten Fällen

Aus den Befunden 3.3 und 4.3 folgt ein Prinzip, das vor jedem
Kundengespräch mit Förderbezug gilt:

1. **Wir stellen keine Anträge und geben keine Förderzusagen.** Wir sagen,
   dass ein Programm existiert und wer es beantragt — die
   Förderfähigkeitsprüfung macht die Bewilligungsstelle.
   *(Deckt zugleich die Regel „jede Entwarnung trägt ihre Quelle im Satz".)*
2. **Reihenfolge ist zwingend: Antrag vor Auftrag.** Beide Landesprogramme
   fördern nur nicht begonnene Vorhaben, und ein Vorhaben gilt mit dem
   Abschluss des Leistungsvertrags als begonnen. **Wer unterschreibt,
   bevor der Bescheid da ist, hat die Förderung des Kunden vernichtet.**
   → Dieser Satz gehört in die Angebotsarchitektur und in jede
   Auftragsbestätigung mit Förderbezug. **Offener Punkt F-4**
   (Träger: MKT-HANDEL, Angebots-/Vertragsbaustein).
3. **Der Beratungsgegenstand wird prozessseitig zugeschnitten**, nicht
   sichtbarkeitsseitig — bei SH-DKU zwingend (4.3), beim Hamburg Digital
   Check nach dem Wortlaut von Ziffer 3 naheliegend, aber **ungeprüft**
   (deshalb die Anfrage).
4. **Wettbewerbsneutralität und Provisionsoffenlegung sind bei geförderter
   Beratung strafbewehrte Zusagen** (3.3). Ein Modell, das Beratung als
   Vorstufe des eigenen Umsetzungsauftrags versteht, muss dazu eine
   ausformulierte Haltung haben, bevor die erste Selbsterklärung
   unterschrieben wird. **Offener Punkt F-5** (Träger: MKT-HANDEL +
   Zentrale).

---

## 8. Offene Punkte

| ID | Punkt | Träger | Anker/Frist |
|---|---|---|---|
| **F-1** | Referenzlage gegen die drei IFB-Kriterien inventarisieren, vor Unterzeichnung der Selbsterklärung | MKT-HANDEL / Leitsession | vor erstem HH-Fall, spätestens vor 16.11.2026 |
| **F-2** | Herkunft der „mind. 2.500 € netto Beraterkosten" bei SH-DKU klären (in 2026/190 nicht wiedergefunden, kein belastbares Negativ) | R07-A / Leitsession | vor Verwendung in Kundendokumenten |
| **F-3** | Nach StB-Rückmeldung zu Frage 11 über eine BAFA-Anfrage entscheiden | Zentrale → MKT-HANDEL | BAFA-Antragsfrist 31.12.2026 |
| **F-4** | „Antrag vor Auftrag" als festen Baustein in Angebot/Auftragsbestätigung verankern | MKT-HANDEL | vor erstem Angebot mit Förderbezug |
| **F-5** | Haltung zu Wettbewerbsneutralität/Provisionsoffenlegung bei Beratung + eigener Umsetzung ausformulieren | MKT-HANDEL + Zentrale | vor erster Selbsterklärung |
| **F-6** | B9.4-Korrekturen einarbeiten (2.1 Link-Warnung · 4.3 Werbe-Ausschluss · 3.3 Selbsterklärung · 4.2 „kleine" Unternehmen) | R07-A / Leitsession | R7-Review |
| **F-7** | ⚠️ **Firmierung für den Versand.** Die GbR ist in Gründung, die Gewerbeanmeldung steht (~14.08.2026 laut `zentrale\STATUS.md`), der Rebrand-Name ist nicht entschieden. Beide Entwürfe tragen deshalb Platzhalter | User / Zentrale | **vor dem Versand** |
| **F-8** | Rückläufe beider Anfragen einarbeiten — Zielort: dieses Dokument (Abschnitte 3 und 4) plus Vermerk in `fund/wettbewerbsbild.md` B9.4 | MKT-HANDEL | nach Antwort |
| **F-9** | Geeignetes Qualitätssicherungsinstrument benennen (BAFA Ziffer 4.2.1), falls die BAFA-Route weiterverfolgt wird; zugleich klären, dass wir das Programm nicht selbst als Antragsteller nutzen | MKT-HANDEL + Zentrale | vor BAFA-Registrierung |
| **F-10** | Geltungsstand der BAFA-Richtlinie an der ausgebenden Stelle nachziehen (diese Session hat nur den Abzug vom 09.08.2026) | MKT-HANDEL | vor BAFA-Entscheidung |

---

## 9. Negativ- und Nichterhebungs-Protokoll

*(Eine undokumentierte Negativ-Suche existiert nicht.)*

| Was | Methode / Suchraum | Ergebnis | Datum |
|---|---|---|---|
| „Werbung"/„Betriebskosten"/„Art. 18" im Repo | Grep-Tool über alle `*.md` im Marketing-Repo | Außerhalb von `sensibel/`-Rohbelegen 1 Treffer, sachfremd → der SH-DKU-Werbe-Ausschluss war **nicht** dokumentiert | 10.08.2026 |
| „mind. 2.500 € Beraterkosten" im Amtsbl. 2026/190 | gezieltes Lesen der Ziffern 2.1, 4, 5.2.1, 5.3.1 im Volltext (646 Zeilen) | **nicht wiedergefunden** — ⚠️ **kein belastbares Negativ**, weil keine Volltextsuche mit Positivkontrolle gelaufen ist. Status: „nicht geprüft" | 10.08.2026 |
| Wildcard-Redirect bei `ifbhh.de` / `wtsh.de` | Kontrollpfad `/zzz-r07d-kontrollpfad`, Größenvergleich gegen Startseite | Beide 404 mit abweichender Größe → **kein** Wildcard-Redirect | 10.08.2026 |
| BAFA-Richtlinie, Inhalt | Rohbeleg `a5\bafa\richtlinie.txt` selbst gelesen (Ziffern 4.2.1, 5.1, 5.2, 8) | Alle B9.4-Zahlen bestätigt. Suche „3 500" traf Ziffer 5.2 (**Positivkontrolle desselben Laufs: „1 750" trifft ebenfalls, 1 Zeile** ✔) → der 3.500-€-Deckel ist **genannt**, nicht gerechnet | 10.08.2026 |
| BAFA-Richtlinie, Geltungsstand | **nicht an der ausgebenden Stelle geprüft** — anders als IFB und WTSH. Beleg ist der Abzug vom 09.08.2026 | offen, vor BAFA-Entscheidung nachzuziehen | 10.08.2026 |
| De-minimis-Höchstbeträge / Kumulierung auf Kundenseite | **nicht erhoben** (außerhalb des Auftrags) | offen | — |
| Andere WTSH-/Landesseiten mit Altfassungs-Link | **nicht gemessen** — geprüft wurde nur die DKU-Programmseite | Der Befund 2.1 gilt nur für diese Seite | 10.08.2026 |

**Positivkontrolle der Extraktionen dieser Session:** Für die
Positiv-/Negativliste und die Selbsterklärung prüft die Kontrolle die
**Vollständigkeit des Ergebnisses**, nicht die Erreichbarkeit der Quelle:
Beide PDFs wurden über `pdf-parse` mit ausgegebener Seitenzahl gelesen
(3 bzw. 2 Seiten) und **vollständig** ausgegeben; die Seitenmarker
`-- 1 of 3 --` … `-- 3 of 3 --` bzw. `-- 1 of 2 --`/`-- 2 of 2 --`
erscheinen lückenlos, der Schlussvermerk „Stand: 05.06.2026" bzw. die
§-264-Fußzeile sind mitgelesen. Es fehlt keine Seite.

---

## 10. Zugehörige Dokumente

- `handel/entwurf-anfrage-ifb-hamburg.md` — Anfrage IFB Hamburg (Status ENTWURF)
- `handel/entwurf-anfrage-wtsh.md` — Anfrage WTSH (Status ENTWURF)
- `fund/wettbewerbsbild.md` § B9.4 — Herkunft der Fragestellung (nur lesend)
- `zentrale\stb-termin-fragenliste-2026-08.md` Frage 11 — BAFA-Umsatzstruktur
- `protokolle/R07-D-pruefer.md` — unabhängiges Prüfprotokoll zu dieser Arbeit
