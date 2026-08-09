# MARKE1 — Markenrecherche-Verfahren (ausführbare Anleitung)

> ## STATUS: ENTWURF — zur Verabschiedung durch den User
>
> Dieses Dokument BESCHREIBT das Recherche-Verfahren; es wurde in
> dieser Session **nicht ausgeführt** (keine Live-Zugriffe auf
> DPMA/EUIPO/Registrare/Plattformen — Session-Auftrag R03-C). Es dient
> **Gate 2** des Namensentscheids: Markenrecherche für den NEUEN Namen
> UND für den BESTAND heyPensio — für **keinen der beiden Namen
> existiert bisher eine durchgeführte Recherche** (Befund
> Bestandsextraktion 09.08.2026, Quelle `zentrale\namensentscheid.md`
> Gate 2; im Gründungs-Dossier nur als Vorhaben gelistet).
>
> **Einordnung:** Dieses Verfahren IST der Vorprüfungs-Teil des
> Arbeitspakets MARKE1 („Vorprüfung (Domain/Handles/DPMA-Grobcheck)",
> Projektquelle § 2). Der Doppel-Check beider Namen ist eine der vier
> Absicherungen, die aus der überstimmten Prüfer-Empfehlung
> „Rebrand-Nullvariante" übernommen wurden (Planprüfung R00,
> Projektquelle § 4 E1).
>
> **Prüf-Stand:** Gegenfrage-Prüfung gelaufen
> (`protokolle/R03-C-pruefer.md`, 09.08.2026, 0 kritisch / 3 wichtig /
> 11 Hinweise); alle Befunde wurden VOR der Vorlage in diesen Stand
> eingearbeitet — das Protokoll referenziert daher den Vor-Stand.
>
> **Quellen-Stand (alle 09.08.2026):** `zentrale\namensentscheid.md` ·
> `heypensio\firzlaff\gruendung-entscheidungsvorlage-2026-07.md` § 1 +
> § 5 (Handgriff-Basis: „DPMA-/EUIPO-Kurzrecherche zum Namen (Stunden,
> nicht Wochen)"; IHK-Firmierungs-Vorabprüfung) ·
> `fund/positionierungspapier.md` (Portfolio als Klassen-Basis) ·
> Baustein `browser-automation` (SPA-/Prüfweg-Fallen).
> Schwester-Dokument: `marke/naming-kriterienkatalog.md` (K2/K3/W7/W8
> verweisen hierher).

## 1. Geltungsbereich und Grundsätze

1. **Zwei Prüfobjekte:** (a) jeder Namenskandidat der
   MARKE1-Shortlist, (b) der Bestand **heyPensio** (§ 8 — die
   Übergangszeit läuft bis zum Cutover auf dem alten Namen weiter,
   `zentrale\namensentscheid.md` „Bis zum Cutover").
2. **Kurzrecherche, keine Rechtsberatung:** Ziel ist die belastbare
   Eigenrecherche im Umfang „Stunden, nicht Wochen" (Handgriff-Basis).
   **Warum Eigenrecherche Pflicht ist:** DPMA und EUIPO prüfen ältere
   Rechte (Kollisionen) NICHT von Amts wegen — eine Marke kann trotz
   Kollision eingetragen werden und wird dann per Widerspruch/Klage
   angegriffen (Fachkenntnis-Einordnung, Orientierung). Die Recherche
   findet identische und nahe Zeichen; die juristische Bewertung von
   Grenzfällen (Verwechslungsgefahr, Schutzumfang) ist Anwaltsarbeit —
   Eskalationsschwelle: Entscheidungspunkt E-K5 im Kriterienkatalog.
3. **IHK-Firmierungs-Vorabprüfung: entfällt für die GbR.** Sie ist
   laut Handgriff-Basis nur bei späterer Kapitalgesellschaft nötig
   (eingetragene Firma § 18 HGB); die GbR führt eine registerfreie
   Geschäftsbezeichnung (`zentrale\namensentscheid.md`,
   Vorgeschichte). Bei einem späteren Rechtsformwechsel lebt der
   Posten wieder auf (Vorwärtsverweis-Merker).
4. **Kontaminationsschutz:** Recherche-Aufträge an Agenten enthalten
   NUR den zu prüfenden Kandidaten und das Varianten-Raster — keine
   anderen Kandidaten, keine Wettbewerbsnamen als Suchbegriffe
   (Vorbefunde gehören in die Ausschlussliste der Bewertung, nie in
   den Suchauftrag).
5. **Jede Negativ-Suche läuft mit Positivkontrolle im selben Lauf**
   (§ 9). Ein Timeout ist kein Negativbefund (Baustein
   quellen-beschaffung).
6. **Werkzeugweg:** Die genannten Register-/Plattformseiten sind
   häufig SPAs — Prüfung über den Browser, nicht per curl/WebFetch;
   Negativ-Ergebnisse aus UI-Suchfeldern brauchen ihre eigene
   Positivkontrolle (Baustein browser-automation). Zugangsweg je
   HANDLUNG zu Beginn der Ausführungs-Session prüfen, nicht aus
   diesem Dokument als „geklärt" übernehmen (CLAUDE.md Regel 4).

## 2. Nizza-Klassen: Recherche-Suchraum und Anmelde-Vorschlag

**Grundunterscheidung:** Der RECHERCHE-Suchraum ist bewusst breiter
als die späteren ANMELDE-Klassen — Kollisionen drohen auch aus
Klassen, in denen wir nicht anmelden, wenn die Waren/Dienstleistungen
ähnlich sind.

### 2.1 Anmelde-Vorschlag (Begründung je Klasse aus dem Portfolio)

| Klasse | Vorschlag | Begründung (Quelle: Positionierungspapier §§ 2/6) |
|---|---|---|
| **42** | **Kernklasse** | SaaS/Software-Dienstleistungen, Software-Entwicklung, IT-Beratung: PMS-Implementierung, Self-Check-in-Software, KI-Agenten, Pre-Check-in/Meldeschein-Strecken — das Kerngeschäft |
| **9** | Kernklasse | Software als Produkt (Apps, Terminal-Software); der Markenauftritt läuft sichtbar auf Geräten (Terminal-UI), auch wenn Hardware vom Hersteller direkt fakturiert wird |
| **35** | Kernklasse | „Betreuter Betrieb statt Selbstbau-Software": Übernahme/Outsourcing von Geschäftsprozessen (Rezeptions-/Backoffice-Automatisierung als Dienstleistung), Beratung bei der Geschäftsorganisation |
| 36 | Prüfkandidat | Förder-BEGLEITUNG (§ 4.5 Positionierungspapier) könnte als finanznahe Beratung einzuordnen sein — Klassen-Zuordnung im Anmeldeschritt mit eKlassifikation/TMclass prüfen; beworben wird Begleitung, nicht Antragstellung |
| 37 | Prüfkandidat | Installation/Montage von Hardware (Terminals, Zutritts-Ausgabe-Schicht) — nur falls als eigene Leistung beworben |
| 38 | Prüfkandidat | Telekommunikationsnahe Dienste (Gästekommunikations-Kanäle) — vermutlich durch 42 abgedeckt, im Anmeldeschritt prüfen |
| 41 | Prüfkandidat | Schulung/Einweisung: „Kunden-Onboarding als definierter Prozess" (Positionierungspapier § 6 Querschnitt) kann als Ausbildungs-/Schulungsleistung in 41 fallen — Zuordnung wie 36/37/38 über eKlassifikation/TMclass klären |

⚠️ **Klassen-Zuordnungen oben sind Arbeitshypothesen dieser Session**
(aus dem Portfolio abgeleitet, nicht am Klassifikations-Werkzeug
verifiziert). Vor der Anmeldung: Begriffe über **DPMA eKlassifikation**
bzw. **EUIPO TMclass** auf akzeptierte Formulierungen prüfen und die
Klassenwahl mit dem Anwalt festziehen (**Entscheidungspunkt E-V1**).

### 2.2 Recherche-Suchraum (Pflicht bei jeder Kollisionsprüfung)

Klassen **9, 35, 36, 37, 38, 41, 42** (alle aus 2.1) **plus 43**
(Beherbergung/Verpflegung): Wir melden in 43 nichts an, aber unsere
Dienstleistungen richten sich an genau diese Branche — ein ähnliches
Zeichen eines Hotel-/Gastro-Anbieters in 43 kann kollidieren
(Ähnlichkeit von Dienstleistungen ist eine Wertungsfrage; Grenzfälle
→ Anwalt). Treffer außerhalb dieses Suchraums werden notiert, aber
nur bei bekanntem Zeichen (Verkehrsgeltung) als Risiko gewertet.

## 3. Schritt A — DPMA-Kurzrecherche (deutsches Register)

Werkzeug: **DPMAregister, Bereich Marken** (register.dpma.de).

1. **Identitätsrecherche (Basisrecherche):** exakter Kandidat als
   Suchbegriff, Feld Markendarstellung/Wortlaut; ohne
   Klassen-Einschränkung starten (der Suchraum-Filter kommt bei der
   Bewertung, nicht bei der Suche — sonst blendet er Treffer aus, die
   man gesehen haben will).
2. **Varianten-Recherche (Erweiterte Recherche, Trunkierung):**
   Suchläufe mit Platzhaltern (Anfangs-Stamm + Trunkierungszeichen;
   Syntax der Suchmaske vor Ort prüfen — Operatoren nie aus dem
   Gedächtnis). Pflicht-Varianten aus dem **Varianten-Raster**:
   - phonetische Ersetzungen: c/k/z · f/v/ph · i/y · ei/ai · eu/oi ·
     Doppel- vs. Einfachkonsonant · Dehnungs-h;
   - Silben-Trennung/Zusammenschreibung, Bindestrich-Variante;
   - naheliegende Endungs-Varianten des Wortstamms;
   - bei zusammengesetzten Kandidaten: jeder tragende Bestandteil
     einzeln.
   Das Raster wird je Kandidat VOR der Suche schriftlich festgelegt
   (dann ist der Suchraum Teil des Protokolls und die
   Negativ-Behauptung prüfbar).
3. **Status-Filter:** anhängige UND eingetragene Marken zählen;
   erloschene/zurückgenommene notieren, aber getrennt ausweisen.
4. **Je Treffer erfassen:** Zeichen, Registernummer, Nizza-Klassen,
   Status, Inhaber, Ähnlichkeitseinschätzung (identisch / klanglich
   nah / schriftbildlich nah / begrifflich nah / fern).

## 4. Schritt B — EUIPO und TMview (Unionsmarken + übergreifend)

1. **EUIPO eSearch plus** (euipo.europa.eu): Identitäts- und
   Varianten-Läufe wie in § 3 — Unionsmarken gelten auch in
   Deutschland, ein reiner DPMA-Lauf ist daher KEINE vollständige
   Recherche für den deutschen Markt.
2. **TMview** (tmview.euipo.europa.eu): übergreifende Suche über
   nationale Register + EUIPO + internationale Registrierungen (WIPO)
   mit Schutzerstreckung DE/EU. TMview ist der Sammel-Kanal; bei
   relevanten Treffern die Detailansicht im Ursprungsregister
   gegenlesen (Verdichtungs-Drift-Regel: Aussage und Fundstelle
   getrennt prüfen).
3. Gleiche Erfassung je Treffer wie § 3.4; gleiche Varianten-Raster
   (ein Raster je Kandidat, alle Datenbanken — sonst sind die
   Negativ-Aussagen der Kanäle nicht vergleichbar).

## 5. Schritt C — Nicht eingetragene Kennzeichen und Umfeld

Unternehmenskennzeichen entstehen in Deutschland auch OHNE Eintragung
durch Benutzung (§ 5 MarkenG — Orientierung; Detailbewertung Anwalt).
Deshalb zusätzlich:

1. **Web-Suchraster:** Kandidat + Varianten jeweils allein und mit
   Branchen-Kontextbegriffen (Hotel, Hotellerie, PMS, Check-in,
   Gastgewerbe, Software) in einer allgemeinen Websuche; erste ~2
   Ergebnisseiten sichten. Zweck zugleich: SEO-/Auffindbarkeits-Bild
   für W7 des Kriterienkatalogs.
2. **Handelsregister-Portal** (handelsregister.de,
   Firmierungs-Suche): identischer Wortlaut + engste Varianten.
3. **Branchenverzeichnisse:** Apaleo App Store und gängige
   Hotel-Tech-Verzeichnisse auf gleichnamige/nahe Anbieter sichten.
   Die bekannten Wettbewerber stehen als AUSSCHLUSSLISTE im
   Wettbewerbsbild (FUND3, Zielort lt. Tagesplan R3
   `fund/wettbewerbsbild.md`; bis dahin Extraktion B/F6.1) — sie
   werden beim BEWERTEN abgeglichen, nicht als Suchbegriffe verwendet
   (§ 1.4).
4. **Social-/Plattform-Präsenz:** fällt als Nebenprodukt des
   Handle-Prüfwegs an (§ 7) — aktive fremde Accounts unter dem
   Kandidaten-Namen sind auch dann ein Befund, wenn der Handle formal
   „frei" wäre.

## 6. Schritt D — Domain-Prüfweg

1. **`.de`:** DENIC-Webabfrage (denic.de) — die autoritative Quelle
   für Vergeben/Frei.
2. **Andere TLDs des Kern-Sets (E-K1):** RDAP-/Whois-Abfrage bzw.
   Registrar-Suche. Als Registrar-System ist Cloudflare im Bestand
   (CLAUDE.md, exklusive Systeme) — ⚠️ welche TLDs die
   Cloudflare-Verfügbarkeitssuche tatsächlich abdeckt, ist ein
   ungeprüftes Fähigkeits-Positiv und von der Ausführungs-Session an
   der Quelle zu prüfen (Zugangsweg je Handlung, CLAUDE.md Regel 4);
   nicht abgedeckte TLDs über RDAP/registry-eigene Abfrage.
3. **Positivkontrolle Pflicht:** Im selben Lauf eine bekannt
   vergebene Domain abfragen — Kontrollkandidat aus dem Bestand:
   `hey-pensio.de` (belegt vergeben, `zentrale\namensentscheid.md`
   Vorgeschichte / Positionierungspapier § 5). Erst wenn der Prüfweg
   sie als vergeben meldet, ist ein „frei"-Befund belastbar.
4. **Vorsichtsregel Front-Running:** Verfügbarkeits-Abfragen nur über
   seriöse Kanäle (DENIC, RDAP, eigener Registrar), nicht über
   beliebige „Domain-Check"-Drittseiten; zwischen Namensentscheid und
   Registrierung (MARKE3) so wenig Zeit wie möglich verstreichen
   lassen. *(Einordnung der Session: Das Abgreifen abgefragter Domains
   durch Dritte ist ein bekanntes Risiko-Muster, hier nicht mit
   Quelle belegt — die Vorsichtsregel kostet nichts.)* **Zweiter Grund
   für zügige Registrierung:** Die Mail-/Domain-Reputation der neuen
   Domain braucht Vorlauf (DMARC/SPF-Reputation als dokumentierter
   Wechselkosten-Posten, `zentrale\namensentscheid.md` Vorgeschichte)
   — ein Argument für MARKE3 unmittelbar nach MARKE2, lange vor dem
   Cutover.
5. **Vergebene Domains bewerten, nicht nur feststellen:** Wer hält
   sie, ist Inhalt aktiv, Branche? (aktiver Wettbewerber ≫ geparkte
   Domain). Erwerbbarkeit („realistisch erwerbbar", K3) ist eine
   Einschätzung — als solche kennzeichnen.

## 7. Schritt E — Handle-Prüfweg

1. Plattform-Set nach Entscheidungspunkt E-K1b (vorläufig: LinkedIn,
   Instagram, Facebook, YouTube; endgültig nach Kanalmix-Entscheid).
2. Prüfweg je Plattform: direkte Profil-URL aufrufen UND
   Plattform-Suche — beides im Browser (SPA-Falle, Baustein
   browser-automation). Ein 404 auf der Profil-URL ist ein Indiz,
   keine Freigabe (Plattformen reservieren/sperren Namen auch ohne
   sichtbares Profil — Registrierung erst in MARKE3 zeigt es
   verbindlich).
3. **Positivkontrolle:** im selben Lauf ein bekannt vergebener Handle
   (z. B. der bestehende eigene Account, falls vorhanden, oder ein
   bekannter Großanbieter) — erst wenn der Prüfweg den sicher
   vergebenen Handle als „vergeben" zeigt, ist ein „frei"-Befund
   belastbar.

## 8. Schritt F — Bestands-Kollisionscheck heyPensio

**Zweck (Gate 2, zweiter Halbsatz):** Die Übergangszeit läuft bis zum
Cutover unter „heyPensio" — geprüft wird, ob der WEITERBETRIEB unter
dem alten Namen fremde ältere Rechte verletzt (Risiko-Check), NICHT
eine Neuanmeldung des auslaufenden Namens (Einordnung der Session —
eine Markenanmeldung für heyPensio wäre Geld für einen
Auslauf-Namen; falls der User das anders will: Entscheidungspunkt
E-V3).

1. Gleiche Schritte §§ 3–5 auf: „heyPensio", „hey pensio",
   „hey-pensio", „Pensio" sowie das phonetische Varianten-Raster
   (§ 3.2) — Suchraum-Klassen wie § 2.2.
2. **Ergebnisdeutung:** Ein Treffer bedeutet nicht automatisch
   Handlungszwang — Bewertung nach Ähnlichkeit, Klassen-Nähe,
   Priorität (älter/jünger als die heyPensio-Erstbenutzung) und
   Rest-Laufzeit bis zum Cutover; Grenzfälle → Anwalt. Ergebnis fließt
   als Risiko-Posten in den Cutover-Plan (MARKE5: beschleunigt ein
   Kollisionsrisiko den Cutover-Zeitpunkt?).
3. ⚠️ Die Erstbenutzung von „heyPensio" (Datum, Form) ist für die
   Prioritätsfrage relevant und im Marketing-Repo nicht dokumentiert —
   bei Bedarf im heypensio-Repo erheben (ältester Beleg der
   Außenverwendung), nicht schätzen. Dabei mitprüfen: Ob durch die
   bisherige Benutzung überhaupt ein eigenes Unternehmenskennzeichen-
   Recht (§ 5 MarkenG) ENTSTANDEN ist, ist selbst offen — der
   dokumentierte Außenauftritt ist dünn (leerer Website-Platzhalter,
   Positionierungspapier § 5; daneben reale Anbieter-/Pilot-
   Korrespondenz unter dem Namen); Entstehung UND Umfang sind
   Anwalts-Wertungsfragen, nicht nur das Datum.

## 9. Protokoll-Pflichten (je Suchlauf)

Ablage: `marke/recherche/` — je Prüfobjekt eine Datei
(`<kandidaten-arbeits-id>.md`). **Arbeits-IDs statt Klarnamen sind
VERBINDLICH** für Dateinamen und Commit-Betreffs: „Der neue Name
bleibt intern, bis ALLE Gates erfüllt sind"
(`zentrale\namensentscheid.md`), und Commit-Logs/Dateinamen wandern
mit jedem Push zum Remote — dieselbe Logik wie die
Front-Running-Vorsicht in § 6. Die ID→Name-Zuordnung liegt im
Dateiinhalt (Repo privat), nicht im Dateinamen.

Pflichtfelder je Lauf:
1. Datum, Datenbank/Kanal, exakter Suchstring, Trefferzahl.
2. **Suchraum** (Klassen, Status-Filter, Varianten-Raster) — der
   mitgenannte Suchraum eines Negativs ist Teil der Behauptung.
3. **Positivkontrolle:** je Datenbank ein Begriff, der treffen MUSS
   (Vorgehen: vor dem Lauf einen im selben Register sicher
   eingetragenen Begriff wählen und diese Eintragung zuerst
   verifizieren — erst dann trägt die Kontrolle; ein bekannter
   Großanbieter-Markenname ist der übliche Kandidat).
4. Treffer-Erfassung nach § 3.4; Bewertung getrennt von der
   Feststellung.
5. Gesamtergebnis je Prüfobjekt als Ampel MIT Nenner: „grün (0
   relevante Treffer in X Läufen über Y Datenbanken, Suchraum Z)" —
   nie nennerlos. „Nicht prüfbar" (Datenbank down, Captcha, …) ist
   ein eigenes Ergebnis und wird nicht zu „keine Treffer" geglättet.
6. **Frische-Trigger — Negative altern:** Ein „grün" trägt sein Datum
   und gilt nicht unbegrenzt. Unmittelbar VOR der Markenanmeldung
   (MARKE3) wird der Identitätslauf (§§ 3.1/4.1) wiederholt; liegt
   der Cutover deutlich nach der Recherche, gehört ein Frische-Check
   als Posten in den Cutover-Plan (MARKE5).

## 10. Gebühren und Aufwand (Merkposten)

- Aufwand Kurzrecherche: „Stunden, nicht Wochen" je Name
  (Handgriff-Basis, dort so beziffert).
- Anmelde-Gebühren DPMA/EUIPO: **bewusst keine Zahlen aus dem
  Gedächtnis** — vor dem Budget-/Territoriums-Entscheid am
  DPMA-Gebührenverzeichnis bzw. EUIPO-Gebührenrechner erheben
  (Live-Erhebung gehört zur MARKE3-Vorbereitung, nicht zu diesem
  Dokument). Merkregel aus der Klassenzahl: Die Gebühr hängt an der
  Zahl der Klassen — die Klassenwahl (E-V1) ist damit auch eine
  Kostenfrage.
- **Inhaberschaft bei GbR** (Gate 4): Wer meldet an — die GbR (mit
  Vertretungsangaben), ein Gesellschafter, die spätere Gesellschaft?
  → StB-/Anwaltsfrage, in `zentrale\namensentscheid.md` Gate 4
  bereits so geroutet; die eGbR-Frage (Gate 1) kann hier hineinspielen.
  Dieses Verfahren setzt keine Antwort voraus — die Recherche ist
  inhaberschafts-neutral.

## 11. Zeitfenster-Anker

| Anker | Datum | Wirkung auf dieses Verfahren |
|---|---|---|
| Everlast-Beginn (§ 11 AGB) | **18.09.2026** (Programm läuft bis ~März 2027) | Name + Kern-Assets möglichst vorher festzurren bzw. Entstehung außerhalb dokumentieren — Recherche + Entscheid + Sicherung (MARKE3) sollten davor liegen; jeder Zwischenstand committet (Zeitstempel-Beleg). Die Pflicht gilt FORT für alle Marken-Assets bis Programmende (Logo MARKE4, Website MKT-WEB) |
| Everlast-Vertragsklärung | VOR gemeinsamer Marken-Arbeit | Zweite Pflicht des Warnvermerks: Schiebt sich ein Marken-Arbeitsstand über den 18.09. oder berührt Everlast-Zusammenarbeit Marken-Assets, ist § 11 (1) VORHER vertraglich zu klären (User-Handgriff, Route Anwalt/StB). Das adressiert zugleich den aus Positionierungspapier § 7.7 nach MKT-MARKE gerouteten Auftrag, die zeitliche AGB-Auslegung („vor Beginn entstanden = nicht erfasst" — juristisch ungeprüft) klären zu lassen |
| Gewerbeanmeldung | ~Mitte August 2026 | Betrifft Gate 1 (Namensführung, StB Mo 10.08.) und damit MARKE2 — die RECHERCHE wartet darauf nicht (Leitsession-Vorgabe: MARKE1 wartet nicht auf StB) |
| Widerspruchs-Restrisiko DPMA | +3 Monate ab Veröffentlichung der EINTRAGUNG (§ 42 MarkenG — Orientierung) | Widerspruch kommt erst NACH Prüfung + Eintragung — „Anmeldung eingereicht" (Gate 4) ist nicht „unangreifbar eingetragen" |
| Widerspruchs-Restrisiko EUIPO | +3 Monate ab Veröffentlichung der ANMELDUNG (Orientierung) | Widerspruch liegt VOR der Eintragung — anderes System als DPMA; welches Restrisiko-Fenster MARKE5 einplant, hängt am Territoriums-Entscheid E-V2 |

## 12. Entscheidungspunkte an den User

| # | Frage | Vorschlag der Session (zur Bestätigung/Änderung) |
|---|---|---|
| E-V1 | **Anmelde-Klassen final** (§ 2.1) | 42 + 9 + 35 als Kern; 36/37/38 nach eKlassifikation-/TMclass-Prüfung und Anwalts-Votum; Recherche-Suchraum unabhängig davon immer inkl. 43 |
| E-V2 | **Schutzterritorium:** nur DPMA (DE) oder EUIPO (Unionsmarke)? | Entscheid erst nach FUND4 (Sprachentscheid/Zielzahl) und Gebühren-Erhebung; die RECHERCHE läuft ohnehin über beide Register (§ 4) — der Territoriums-Entscheid betrifft nur die Anmeldung (MARKE3) |
| E-V3 | **heyPensio-Bestand:** nur Risiko-Check (Vorschlag § 8) oder zusätzlich defensive Anmeldung des Altnamens? | Nur Risiko-Check — Anmeldegebühren für einen Auslauf-Namen sparen; Gegenargument (Übergangszeit länger als geplant) beim MARKE5-Cutover-Plan neu bewerten |
| E-V4 | **Ausführungs-Zuteilung:** Die Live-Recherche braucht Browser-Zugriff (Chrome-Automation ist ein exklusives System) | Eigene Arbeits-Session mit Chrome-Zuteilung, NACH Verabschiedung von Katalog + Verfahren und NACH der Kandidaten-Findung; Abbruchbedingung + Kostendeckel im Start-Prompt |

*Erstellt: 09.08.2026, Session R03-C (Lucky Roux). Prüfprotokoll:
`protokolle/R03-C-pruefer.md`.*
