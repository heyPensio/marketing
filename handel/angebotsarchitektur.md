# Angebotsarchitektur (MKT-HANDEL, E-8) — INTERN, ENTWURF

> ## ⚠️ Status und Vorbehalte (bitte zuerst lesen)
>
> **1. Status: ENTWURF — nichts entschieden, nichts geht nach außen.**
> Dieses Dokument ist eine **Struktur-Vorlage mit Entscheidungspunkten**
> (AA-1…AA-8), kein Preisdokument und kein Angebot. Es setzt den
> Entscheid **E-8** vom 13.08.2026 um („Angebotsarchitektur bauen —
> intern, unter Firmierungs-Vorbehalt, ohne Außenversand";
> `handel/preismodell-optionen.md` § 11 E-8).
>
> **2. Firmierungs-Vorbehalt.** Der Namensentscheid ist offen (Strang
> MKT-MARKE). **Nichts aus dieser Datei geht nach außen** — kein
> Wording für Außentexte, kein Angebotsdokument, keine Nennung
> gegenüber Interessenten.
>
> **3. Z-6-/Architektur-Vorbehalt (geerbt aus der Preisliste, kann die
> Grundlage kippen).** Alle Strukturen hier stehen auf der
> **W-B/A3-Rechenbasis** aus E-3 (Kunde = Eigentümer, Infrastruktur
> durchgereicht, Servicegebühr getrennt). Der **Architektur-Entscheid
> ist NICHT gefallen** (heypensio/Gesellschafter), und die
> **n8n-Lizenzfrage Z-6 ist ungeklärt** (Träger E-4, Ruffy/heypensio,
> ohne Kalendertermin). **Gleichrangig ungeklärt ist die
> Vapi-Kollision K04** („Kunde pflegt nie ein Vapi-Konto" ↔
> Durchreichung an den Kunden; `handel/preisliste-vorlaeufig.md` § 2,
> Kasten „Wer ist eigentlich Vertragspartner?"). Kippt eine dieser
> Fragen, kippen die Teile dieses Dokuments, die auf der
> Übergabe-Erzählung ruhen (§ 6) — nicht nur einzelne Sätze.
>
> **4. Beträge kommen hier nicht vor — mit Absicht.** Wo eine Höhe
> berührt wird, verweist dieses Dokument auf die **Platzhalter und
> ④-Hypothesen** in `handel/preisliste-vorlaeufig.md` (S1–S4) und
> lässt sie genau das bleiben. Belastbar wird jede Höhe erst nach
> **E-6** (Aufwandsmessung, Träger Ruffy/heypensio) und **E-7**
> (Zahlungsbereitschaft, FUND2-Gespräch ~23.08.2026).
>
> ### Nicht Teil dieses Dokuments (ausdrücklich)
>
> - **Preishöhen (F-III).** ⭐ **Entscheider ist der USER** — das
>   Briefing 13.08.2026 führt die Startgebühr-HÖHE unter „Offene
>   User-Entscheide" („nach MKT-Schätzung + E-6"). E-6/E-7 sind
>   Zulieferer, keine Entscheider.
> - **Angebots-WORDING und alle Außentexte.** Sie warten auf die
>   Firmierung (MKT-MARKE). Dieses Dokument legt Strukturen vor,
>   keine Formulierungen für Kunden.
> - **Das Vertragswerk** (Kündigungsregeln, Rechtsnatur der
>   Startgebühr, Verbund-/Rabattklauseln, AVV-Rollen): **Z-1…Z-7**,
>   Zulieferung an die Zentrale/StB — bislang **nicht übergeben**
>   (`preismodell-optionen.md` § 10).
> - **Der Pilot.** Pilotleistungen sind kostenlos (E-5, inkl. Hostel
>   Boninstraße/LEANE, E-5a). Wo der Pilot hier vorkommt, ist er
>   **Illustration einer Struktur**, nie Anwendungsfall.
> - **Der Architektur-Entscheid** (s. Vorbehalt 3).
>
> **Erstellt:** Runde **R12-B**, 13.08.2026 · **Lesestand beim Bau:**
> Repo-HEAD `5df3f83` · **Quellen:** `handel/preismodell-optionen.md`
> (§ 2.4, § 4.2, § 5.3, § 8, § 10, § 11 mit ✅-Vermerken E-1…E-8) ·
> `handel/preisliste-vorlaeufig.md` (vollständig) ·
> `fund/positionierungspapier.md` (§ 3, § 6 inkl. Nachtrag E11/E13) ·
> `<FIRMENWURZEL>\zentrale\briefings\briefing-2026-08-13.md`
> (vollständig; Entscheide-Belegstufe: Briefing-Dialog, Dropdown +
> Freitext, **sinngemäß — Wortlaut nicht archiviert**).
>
> **Vorrang bei Widerspruch:** `preismodell-optionen.md` und
> `preisliste-vorlaeufig.md` sind die Quellen, dieses Dokument die
> Ableitung — **bei Widerspruch gewinnen die Quellen.**

---

## Belegstufen-Legende

Identisch mit `handel/preismodell-optionen.md` (bei Abweichung gewinnt
die dortige Fassung):

| Marke | Bedeutung |
|---|---|
| **① GEMESSEN** | An der Primärquelle selbst erhoben, Zählweg an der Zahl |
| **② BESTAND** | Aus einem eigenen, geprüften Repo-Dokument übernommen — mit Fundstelle und dem Stand SEINES Datums |
| **③ SELBSTAUSKUNFT** | Angabe eines Anbieters über sich selbst. Kein geprüfter Fakt |
| **④ ANNAHME / HYPOTHESE** | Eigene Annahme oder Ableitung. Nicht gemessen |
| **⑤ HYPOTHESE (extern, unbelegt)** | Aus dem ChatGPT-Teil des Rohstoff-Papiers. Nie Anker |

---

## 1. Was dieses Dokument leisten soll — und worauf es aufsetzt

Die Entscheide vom 13.08.2026 haben die **Preisstruktur** gesetzt
(drei getrennte Positionen: durchgereichte Infrastruktur ·
Servicegebühr S1+S2 · Startgebühr S4; `preisliste-vorlaeufig.md` § 1).
**Offen geblieben sind zwei Strukturfragen, die vor jeder Höhe
(F-III) beantwortet gehören:**

1. **Leistungspakete (A2):** Welche Leistungen gehören in welches
   Paket — ein Gesamtpaket, Basis + Module oder gestufte Bündel? Die
   Frage ist ausdrücklich **nicht** mit E-2 mitentschieden
   (`preismodell-optionen.md` § 8, Hinweis A2) und ausdrücklich die
   Aufgabe dieses Dokuments (ebd. § 8-Nachtrag: die „Dagegen"-Spalte
   zu (c) — „erklärungsbedürftiger; braucht eine saubere
   Angebotsdarstellung" — „benennt die Aufgabe, die R12-B/E-8 jetzt
   zu lösen hat").
2. **Mehrhaus-Rabatt-Mechanik:** ab wann · Prozent oder Staffel ·
   Deckelung · Wirkung auf die Startgebühr (`preisliste-vorlaeufig.md`
   § 4 — dort sämtlich als offen geführt).

**Und vor beiden steht eine Zuordnungsfrage**, die bisher in keinem
Dokument entschieden ist und ohne die keine Rabatt-Mechanik trägt —
sie kommt deshalb zuerst (§ 2).

**Was bereits festliegt und hier nur referenziert wird (alle
✅-Vermerke: § 11 der Vorlage; Belegstufe einheitlich sinngemäß,
Wortlaut nicht archiviert):**

| Festlegung | Entscheid | Fundstelle |
|---|---|---|
| Vertragsform: monatlich kündbar + Startgebühr; erstes Jahr Startgebühr VERSTÄRKT, Monatsgebühr GERINGER | **E-1** | § 11 E-1 |
| Bemessung: Grundgebühr + zimmerabhängiger Anteil | **E-2** | § 11 E-2 |
| Bezugseinheit: **je Objekt/Haus** (nicht je Kunde/Betreiber, nicht je Firmierung) | **E-2a** | § 11 E-2a |
| Mehrhaus-Rabatt **auf die Grundgebühr S1** als Stellschraube | **E-2** (Zusatz) | § 11 E-2; `preisliste-vorlaeufig.md` § 4 |
| Rechenbasis W-B/A3 mit Durchreichung, unter Z-6-Vorbehalt | **E-3** | § 11 E-3 |
| Angebotsarchitektur intern bauen | **E-8** | § 11 E-8 |

---

## 2. ☐ AA-1 — Die Zuordnungsfrage ZUERST: Wessen Häuser zählen — die des Betreibers oder die der Firmierung?

**Warum diese Frage vor allen Mechanik- und Höhen-Fragen kommt:** Der
Mehrhaus-Rabatt setzt voraus, dass mehrere Häuser **jemandem**
zugerechnet werden. E-2a hat nur die **Bemessung** entschieden (der
Preis gilt je Objekt/Haus — drei Häuser, drei Grundgebühren). **Wem**
die Häuser für den Rabatt zugerechnet werden, hat E-2a **nicht**
mitentschieden — der ✅-Wortlaut sagt „je Objekt/Haus" für den Preis
und verwirft „je Firmierung" nur als **Bemessungseinheit**, nicht als
Rabatt-Zuordnung. Die Preisliste führt die Frage ausdrücklich als
„**ungeklärt und folgenreich**" (§ 4: „Gilt er je Betreiber oder je
Firmierung?") und verlangt ihre Klärung, „**bevor eine Höhe
festgelegt wird**".

**Der Fall, an dem es sich entscheidet (② BESTAND):** Der eigene
Pilot ist **ein Kunde mit drei Objekten in drei Firmierungen**
(`preismodell-optionen.md` § 11 E-2a, dort nach Codex-Bericht K11).
Er ist als Pilot kostenlos (E-5/E-5a) und hier **nur Illustration** —
aber er belegt, dass die Konstellation im Zielmarkt real ist: Läuft
der Rabatt über die **Firmierung**, bekäme ein so strukturierter
Folgekunde **keinen** Rabatt; läuft er über den **Betreiber**, bekäme
er ihn. *(Randbeleg derselben Konstellation: Für den Piloten ist am
12.08. „EIN Apaleo-Account für alle Standorte" entschieden worden —
Briefing 13.08.2026, Entscheide-Protokoll Punkt 2, sinngemäß. Die
technische Kontoführung folgt dort also der wirtschaftlichen Einheit,
nicht den Rechtsträgern.)*

### Lesart A — Rabatt je BETREIBER (wirtschaftliche Einheit)

Mehrere Häuser zählen zusammen, wenn derselbe Betreiber sie führt —
unabhängig davon, wie viele Rechtsträger (Firmierungen) dahinterstehen.
Die Firmierung bleibt Rechnungsempfänger, der Rabatt rechnet über die
Verbund-Klammer.

| | |
|---|---|
| **Dafür** | Bildet den Zweck des Rabatts ab: E-2 nennt ihn „Stellschraube für **preissensible Mehrhaus-Betreiber**" (✅-Vermerk, sinngemäß) — die Zielfigur ist der Betreiber, nicht der Rechtsträger. Und sie bildet die Kostenseite ab: Mehrere Häuser desselben Betreibers bedeuten für uns **mutmaßlich** weniger Einarbeitung je Haus (gleiche Ansprechpartner, gleiche Prozesse) — **④ Hypothese: genau das misst E-6 erst noch**, belegt ist es nicht. Die Konstellation „ein Inhaber, je Haus eine eigene Objektgesellschaft" ist im Zielmarkt real (Belegfall: der eigene Pilot, s. o.) |
| **Dagegen (der unbequeme Pol)** | „Betreiber" ist **keine selbsterklärende Größe**: Es braucht eine vertragsfeste Definition (identischer Inhaber? gemeinsame Verwaltung? wirtschaftlich Berechtigter?) — das ist Vertragsarbeit und gehört zu **Z-1** (Zentrale/StB), die es heute nicht gibt. Prüfaufwand je Interessent (wer gehört zu wem?). Missbrauchskante: Die Verbund-Behauptung ist für uns schwer prüfbar. Und die Rechnungslegung läuft je Firmierung — **welche der drei Rechnungen trägt den Rabatt?** Das ist auch eine steuerliche Frage (Z-7-Nachbarschaft) |
| **Konsequenz Verkaufsgespräch** | Das stärkste Zugeständnis gegenüber genau der Zielgruppe, für die der Rabatt gebaut wurde (§ 2.4 der Vorlage: Mehr-Objekt-Betriebe ausdrücklich eingeschlossen) — der Satz „Ihre Häuser zählen zusammen, egal wie Ihre Gesellschaften geschnitten sind" ist ein Verkaufsargument |
| **Konsequenz Terminpfad** | Braucht die Z-1-Definition VOR dem ersten Angebot mit Rabatt — die Zentrale-Zulieferung (bisher nicht übergeben) wird dringlicher |

### Lesart B — Rabatt je FIRMIERUNG (Vertragspartner)

Nur Häuser desselben Rechtsträgers zählen zusammen. Wer je Haus eine
eigene Gesellschaft führt, bekommt keinen Rabatt.

| | |
|---|---|
| **Dafür** | Eindeutig und prüffrei: Rechtsträger = Vertragspartner = Rechnungsempfänger, keine Definitionsarbeit, keine Missbrauchskante, keine Verbundprüfung. Vertraglich die einfachste Form — Z-1 wird nicht zusätzlich belastet |
| **Dagegen (der unbequeme Pol)** | Verfehlt den Zweck: Genau der Fall, für den die Stellschraube gebaut wurde (preissensibler Mehrhaus-Betreiber mit Objektgesellschaften), geht leer aus — der Rabatt liefe im **wichtigsten** Anwendungsfall ins Leere (④ Einschätzung; wie verbreitet die Objektgesellschafts-Struktur im Zielmarkt ist, ist **nicht erhoben** — der Belegfall ist n=1, der eigene Pilot). Erzeugt einen Anreiz zu künstlicher Vertragsbündelung auf einen Rechtsträger, den der Kunde oft gar nicht stellen kann |
| **Konsequenz Verkaufsgespräch** | Erklärungsbedürftig in die unangenehme Richtung: „Ihre drei Häuser sind drei Firmen — der Rabatt gilt nicht." Der Rabatt taucht im Gespräch auf und wird dann zurückgenommen |
| **Konsequenz Terminpfad** | Keine zusätzliche Vorarbeit — sofort angebotsfähig, sobald Höhen stehen |

### ☐ AA-1 — Entscheidungspunkt (VOR AA-5…AA-8 zu beantworten)

**Klartext:** Wenn ein Interessent mehrere Häuser hat, die auf
verschiedene Firmen laufen — zählen die Häuser für den Mehrhaus-Rabatt
zusammen?

&nbsp;&nbsp;☐ **Lesart A** — ja, der Betreiber zählt (Verbund-Klammer;
Definition wird als Z-1-Punkt an die Zentrale/StB gegeben)
&nbsp;&nbsp;☐ **Lesart B** — nein, nur Häuser derselben Firmierung
zählen
&nbsp;&nbsp;☐ anders: _____

*Empfehlung dieser Session (begründet, nicht bindend): **Lesart A** —
sie ist die einzige, unter der der Rabatt seinen in E-2 benannten
Zweck erfüllt; die Definitionsarbeit ist real, aber einmalig und
gehört ohnehin ins Vertragswerk (Z-1). Die Vorrunde hat dieselbe
Richtung als ausdrücklichen Nur-Vorschlag notiert
(`preisliste-vorlaeufig.md` § 4: Betreiber-Bindung, Firmierung nur
für die Rechnungslegung). **Lesart B ist gleichwertig ausgearbeitet
und die richtige Wahl, wenn Vertragseinfachheit und sofortige
Angebotsfähigkeit schwerer wiegen als die Reichweite des Rabatts.***

---

## 3. Leistungs-Bestand — was überhaupt paketierbar ist

**Quelle des Katalogs:** `fund/positionierungspapier.md` § 6
(② BESTAND; Ordnungsprinzip Guest Journey mit vier Checkpoints plus
Fundament und Querschnitt) samt Nachtrag E11/E13
(Beratungs-/Agentur-Achse). ⚠️ **Der dortige Vollständigkeits-Vermerk
gilt hier mit:** Die Quell-Liste (A11) endet mit „u. a." und ist
**nicht abschließend** — weitere Module sind an der Projektquelle des
heypensio-Repos zu erheben, nicht hier zu erraten.

**Der Reifegrad steht an jeder Position, weil er die Paketierung
begrenzt:** Die Formulierungs-Leitplanke des Positionierungspapiers
(§ 6-Nachtrag) gilt unverändert — **Leistungen ohne Träger bekommen in
Kundentexten keine Präsens-Zusage.** Ein Paket, das geparkte Module
als verfügbar führt, verstößt dagegen strukturell, nicht erst im
Wording.

| Leistung | Klasse | Reifegrad (② aus § 6, Stand der Quelle) | Bemessungsachse (④ Zuordnung dieser Session nach § 8-Logik) |
|---|---|---|---|
| PMS-Einführung Apaleo (Implementierung, Property-Setup, Raten, Rollout) | Fundament | real erbracht (drei Objekte) | Einführungsleistung → **S4-Sphäre** (B1-Aufgabenkatalog, § 4.2) |
| Betreuter Betrieb mit Gastgeber-Eskalation | Querschnitt | Kern des Betreibermodells | hausfix → **S1-Sphäre** |
| Kunden-Onboarding als definierter Prozess | Querschnitt | vorhanden | Einführungsleistung → **S4-Sphäre** |
| Pre-Check-in per Handy-Link (Zwei-Mail-Modell) | Check-in | zugesagt; Strecke freigegeben | gästenah → **S2-Sphäre** |
| Digitaler Meldeschein | Check-in | Strecke komplett | gästenah → **S2-Sphäre** |
| Self-Check-in-Terminal (Touch + Sprache) | Check-in | gebaut, E2E; **Kundeneinsatz-Vorbehalt** (§ 5 des Positionierungspapiers) | gästenah → **S2-Sphäre**; Hardware läuft beim Kunden (§ 4.3 der Vorlage) |
| Payment (Bestandteil der Journey-Strecke) | Check-in | Bestandteil Fassung 6; Vorbehalt „erst nach Vertragslektüre so verkaufen" | gästenah; **Gebühren-Zuordnung offen → Z-5** |
| Zutritt (Linien A–F, „der Kunde wählt"; masunt/keyota als Partner) | Check-in | Portfolio-Prinzip | gästenah; Hardware-/Partnerkosten beim Kunden (§ 4.3) |
| Mobiler Concierge (QR/Chat) | Aufenthalt | **in Arbeit** | gästenah → **S2-Sphäre** |
| Room-Rack-App | Aufenthalt | gebaut, E2E | Betriebswerkzeug → **S1-Sphäre** (④ — dient dem Haus, nicht dem einzelnen Gast) |
| KI-Telefonassistent (Reservierung) | Reservierung | **vorgemerkt, nicht gebaut** | gästenah → **S2-Sphäre** |
| Aftersales-Versand | Nachbetreuung | Konzept vorhanden, **nicht gebaut** | gästenah → **S2-Sphäre** |
| Bewertungs-Modul · Lost&Found · Rezeptions-Tablet · Pre-Stay · Betreiber-Cockpit · Preis-Empfehlungs-Agent · Gastprofil-Merge | verschiedene | **geparkt / geplant** (je Quelle) | — nicht paketierbar, solange geparkt |
| Förder-Begleitung | Querschnitt | aktiv gelebt; Geltungs-Vorbehalte (§ 4.5 des Positionierungspapiers) | Beratungsachse (s. u.) |
| Beratungs-/Agentur-Achse: Beschaffungs-Management · Website-Übernahme/-Betrieb · Raten-/Preis-/Stornostruktur · Compliance-BEGLEITUNG · StB-Koordination · Einweisung/Übergabe | E11/E13 | **real erbracht** (Belegstufe A der R04-Erhebung — überwiegend am Piloten, teils unentgeltlich) | **offen — AA-4** |
| Beratungs-Achse über Kayhan (operative Prozesse, Personalführung, Revenue Management) | E11/E13 | **vereinbart, Ausgestaltung OFFEN** (kein Vertrag, keine Konditionen, kein Leistungskatalog — StB-Posten) | **offen — AA-4**; ohne Vertragsgrundlage nicht zusagefähig |
| Agentur-Leistungen (Social, Ads, Bewertungsmanagement; Ausnahme: technisches Onpage-SEO ist dokumentiert) | E11/E13 | **„im Aufbau"** — ohne Substanz und ohne Träger (Negativbefund R04, für Onpage-SEO überholt) | **offen — AA-4** |

**Zwei Leitplanken, die bereits entschieden sind und jede Paketform
binden:**

1. **EIN Produkt, Modul-Ausbau nach Hausgröße, keine getrennten
   Produktlinien** (E10, User 09.08.2026, unter
   FUND2-Problem-Fit-Vorbehalt; Positionierungspapier § 6). Die
   Portfolio-These dazu: „größere Häuser buchen mehr Checkpoints".
2. **Die Beratungs-/Agentur-Achse wird als EIN Angebot mitvermarktet**
   — keine nach außen sichtbare Stufen-Trennung nach Reifegrad
   (E11/E13a, User 09.08.2026). Reifegrad-Vermerke sind interne
   Doku-Pflicht, keine Angebotsstruktur.

---

## 4. Paketstruktur — der Optionenraum (A2: Paket vs. Baukasten vs. Stufen)

Alle drei Optionen setzen die entschiedene Preisstruktur voraus
(S1 je Haus + S2 je Zimmer + S4 einmalig + Durchreichungsblock;
`preisliste-vorlaeufig.md` § 1–§ 3) — sie unterscheiden sich darin,
**was für S1/S2 geliefert wird und wie Zubuchbares organisiert ist**.
Keine Option trägt hier Beträge.

### Option P-A — Ein Gesamtpaket („alles drin")

Jeder Kunde erhält denselben Leistungsumfang: alle gebauten Module
plus betreuter Betrieb. Es gibt nichts zu konfigurieren; S1+S2 sind
die einzigen laufenden Preisstellen.

| | |
|---|---|
| **Annahmen** | Der gebaute Modulbestand passt für jedes Haus der Zielgruppe (**④ Hypothese** — die Zielgruppe hat keine Größen-Obergrenze, § 2.4; ob ein 100-Zimmer-Haus denselben Zuschnitt will wie ein 10-Zimmer-Haus, ist nicht erhoben, E-7 offen) |
| **Dafür** | Einfachste Kommunikation — das direkte Gegenmittel gegen das benannte Risiko der Bemessung (c): „wirkt sonst wie eine Mobilfunkrechnung" (§ 8 der Vorlage, Dagegen-Spalte). Kein Konfigurationsaufwand im Erstgespräch. Passt zum Betreibermodell: Wir betreiben ohnehin die ganze Strecke |
| **Dagegen (der unbequeme Pol)** | **Widerspricht der Portfolio-These E10** („größere Häuser buchen mehr Checkpoints" — hier bucht jeder alles; der Ausbau-Pfad entfällt, das Portfolio skaliert nur noch über die Zimmerzahl S2). Der Kunde zahlt strukturell für Module mit, die er nicht nutzt (z. B. Voice-Terminal ohne Terminal-Hardware). Und: Ein Gesamtpaket setzt die eine Grundgebühr hoch an — genau dort, wo wir über die Zahlungsbereitschaft **nichts Belegtes** wissen (§ 6.4 der Vorlage, unverändert offen) |
| **Verkaufsgespräch** | Kürzestes Gespräch, eine Preisfrage. Aber die Antwort auf „ich brauche X nicht — wird es billiger?" ist strukturell „nein" |
| **Terminpfad** | Schnellste Option: F-III bleibt EINE Höhenfrage je S1/S2/S4 |

### Option P-B — Basis + zubuchbare Module (Baukasten)

Eine definierte Basis (④ Vorschlag eines Zuschnitts, selbst
entscheidungsbedürftig: PMS-Betrieb + betreuter Betrieb +
Pre-Check-in/Meldeschein-Strecke), darüber einzeln zubuchbare Module
(Terminal, Telefonassistent, Concierge, …) — gästenahe Module über den
Zimmeranteil S2, hausfixe über S1 (§ 8-Bemessungsachse).

| | |
|---|---|
| **Annahmen** | Kunden wollen und können auf Modulebene entscheiden (**④ Hypothese**, nicht erhoben); der Basis-Zuschnitt ist definierbar, ohne dass die Basis unverkäuflich schmal wird (**④**) |
| **Dafür** | Bildet die Portfolio-These E10 exakt ab (Modul-Ausbau nach Hausgröße; der Modul-Nachverkauf an Bestandskunden ist der eingebaute Wachstumspfad). Der Kunde zahlt, was er nutzt — das stützt das Fairness-Argument, an das der Markt gewöhnt ist (§ 8 der Vorlage zu (a), ②/③-Anker). Passt zur Bemessungsachse: „gästenahe Module je Zimmer, Grundleistungen je Haus" ist mit E-2 (c) bereits strukturell angelegt |
| **Dagegen (der unbequeme Pol)** | **Maximale Erklärungslast:** Die Rechnung hat dann vier Blöcke (Durchreichung + S1 + S2 je Modul + S4) — das „Mobilfunkrechnungs"-Risiko aus § 8 tritt in seiner stärksten Form ein. **F-III multipliziert sich:** Statt einer S2-Höhe braucht jedes Modul eine Preisfindung — und JEDE dieser Zahlen ist heute ungedeckt (E-6/E-7 offen). Der Baukasten macht außerdem sichtbar, wie schmal der heute gebaute Modulbestand ist (§ 3: ein großer Teil ist geparkt/nicht gebaut) |
| **Verkaufsgespräch** | Längstes Gespräch; braucht eine saubere Angebotsdarstellung (genau die Aufgabe, die § 8 benennt) — dafür die beste Antwort auf Preissensibilität („starten Sie schmal") |
| **Terminpfad** | Langsamste Option bis zur Angebotsfähigkeit (viele Höhenfragen). ⚠️ Terminanker der Kette: Angebot bis 23.10.2026 (S1-Stufe der Rückwärtsrechnung, ② `preismodell-optionen.md` § 9 nach `akquise/akquiseplan.md`; Dauerannahmen dort ④) |

### Option P-C — Gestufte Pakete (zwei bis drei vordefinierte Bündel)

Vordefinierte Bündel entlang der Checkpoints (④ Illustration eines
Zuschnitts: „Kern" = Basis wie P-B · „Kern + Gast" = plus
gästenahe Module · „Voll" = plus Voice/Telefonie), keine freie
Modulwahl.

| | |
|---|---|
| **Annahmen** | Es gibt zwei bis drei Bündel-Zuschnitte, die die realen Bedarfe treffen (**④ Hypothese — und zwar die riskanteste dieser Option:** welche Kombinationen Kunden wollen, ist nicht erhoben; der Zuschnitt wäre heute Ratearbeit vor E-7) |
| **Dafür** | Mittelweg: einfacher kommunizierbar als der Baukasten, skaliert trotzdem entlang der E10-These (Stufen = mehr Checkpoints). **Stufenpreise sind die häufigste Form im erhobenen Markt** (② aus `preisliste-vorlaeufig.md` § 5.1: M2 vier Stufen · M4 drei · W5 drei · W3 zwei — Zählweg: die dortige Tabelle; ⚠️ Belegstufe der Quellen dort ③ Selbstauskunft) |
| **Dagegen (der unbequeme Pol)** | Der Bündel-Zuschnitt ist eine zusätzliche Festlegung ohne Beleg (E-7 offen) und erzeugt den bekannten Vergleichsdruck („warum ist X erst im Top-Paket?"). Falsch geschnittene Bündel sind später schwer korrigierbar, weil Bestandskunden auf ihnen sitzen (Z-4-Nachbarschaft: Änderung im laufenden Vertrag) |
| **Verkaufsgespräch** | Kurz („welches der drei passt zu Ihnen?"), aber die Stufe zwingt Kunden in Bündel, die nicht passen — dann beginnt doch die Modul-Diskussion |
| **Terminpfad** | Mittel: zwei bis drei Höhenfragen je Stufe statt einer bzw. vieler |

⚠️ **Für alle drei Optionen gilt:** Der **Durchreichungsblock** (§ 2
der Preisliste) steht AUSSERHALB der Pakete — er ist kein
Leistungsbestandteil, sondern durchlaufender Posten (E-3). Eine
Paketdarstellung, die Infrastruktur „inklusive" erscheinen lässt,
widerspräche dem Entscheid. Und: Ob wir überhaupt „durchreichen" oder
der Kunde direkt Vertragspartner der Anbieter wird, ist die
**ungeklärte Vertragspartner-Frage** (Preisliste § 2, Kasten;
K03/K04) — **die Darstellung des Durchreichungsblocks in jedem
Angebot hängt an dieser Antwort** (s. § 6).

### ☐ AA-2 — Entscheidungspunkt Paketform

**Klartext:** In welcher Form werden die Leistungen angeboten — alles
in einem, Basis plus Zubuchbares, oder feste Stufen?

&nbsp;&nbsp;☐ **P-A** ein Gesamtpaket &nbsp;&nbsp;☐ **P-B** Basis +
Module &nbsp;&nbsp;☐ **P-C** gestufte Pakete &nbsp;&nbsp;☐ anders /
Mischform: _____

*Empfehlung dieser Session (begründet, nicht bindend): **P-B als
Zielbild, aber erst nach E-7; bis dahin keine Festlegung.** P-B ist
die einzige Option, die die bereits entschiedene Bemessungsachse
(E-2 c: Sockel + Zimmeranteil) und die bestätigte Portfolio-These
(E10: Modul-Ausbau) strukturell fortschreibt. Ihr Hauptrisiko
(Erklärungslast, multiplizierte Höhenfragen) ist real — deshalb ist
**P-A als Startform mit späterem Modul-Ausbau** die gleichwertige
Gegenposition, wenn der erste Abschluss (Terminpfad, Angebot bis
23.10.) schwerer wiegt als die Struktur-Kontinuität. Wer heute
entscheiden muss, entscheidet zwischen diesen beiden; P-C setzt am
meisten ungemessenes Kundenwissen voraus.*

### ☐ AA-3 — Entscheidungspunkt Katalog-Grenze (Reifegrad)

**Klartext:** Welche Module dürfen in den Erstverkaufs-Katalog — nur
Gebautes, oder auch Angekündigtes mit Kennzeichnung?

&nbsp;&nbsp;☐ **nur gebaut/E2E-belegt** (Terminal, Meldeschein,
Room-Rack; Pre-Check-in nach Freigabestand) — der Katalog ist schmal,
aber jede Zusage ist gedeckt
&nbsp;&nbsp;☐ **plus „in Arbeit"-Module mit sichtbarer Kennzeichnung**
(Concierge) — größeres Bild, aber jede Kennzeichnung muss den
Reifegrad tragen (Leitplanke § 3; keine Präsens-Zusage)
&nbsp;&nbsp;☐ **plus geparkte Module als „auf Anfrage"** —
ausdrücklich NICHT empfohlen: „geparkt" heißt bewusst nicht gebaut
(§ 6 des Positionierungspapiers); eine Auf-Anfrage-Zeile erzeugt
Erwartungen ohne Träger
&nbsp;&nbsp;☐ anders: _____

*Hinweis: Das ist eine Struktur-, keine Wording-Frage — die
Wording-Ebene (wie eine Kennzeichnung formuliert wird) wartet auf die
Firmierung und die Freigabe-Regeln für Außentexte.*

### ☐ AA-4 — Entscheidungspunkt Beratungs-/Agentur-Achse

**Klartext:** Die Beratungsleistungen (E11/E13: Beschaffung,
Website-Betrieb, Ratenstruktur, Compliance-Begleitung,
StB-Koordination; dazu die Kayhan-Achse mit offener Ausgestaltung)
sind Teil des EINEN Angebots — aber wo hängen sie preislich?

&nbsp;&nbsp;☐ **in der Grundgebühr S1 enthalten** (definierter
Umfang) — stärkt das Betreuungs-Versprechen, macht S1 aber schwerer
kalkulierbar (B2 nicht erhoben) und zieht unbegrenzte
Beratungs-Erwartung in eine Pauschale
&nbsp;&nbsp;☐ **separat nach Aufwand** (Stundensatz-Verweis:
Marktband 125–160 €/h, ② `preismodell-optionen.md` § 4.2 B3 — dort
ausdrücklich Marktorientierung, kein eigener Satz) — sauber
abgrenzbar, aber im Gespräch die unbequemere Botschaft
&nbsp;&nbsp;☐ **Mischform:** definiertes Grundkontingent in S1,
darüber nach Aufwand
&nbsp;&nbsp;☐ anders: _____

*Zwei Grenzen, die jede Antwort einhalten muss: (1) **E13a** verbietet
die nach außen sichtbare Stufen-Trennung — ein separates
„Beratungspaket" neben dem Technikpaket wäre genau das; die Trennung
darf preislich sein, nicht angebotsstrukturell. (2) Die
**Kayhan-Achse** hat keinen Vertrag und keine Konditionen (§ 6-Nachtrag
des Positionierungspapiers, StB-Posten) — sie ist heute nicht
zusagefähig, egal welche Option gewählt wird.*

---

## 5. Mehrhaus-Rabatt-Mechanik — die offenen Fragen als Optionen

**Was festliegt (referenziert, nicht neu gefragt):** Der Rabatt wirkt
**auf die Grundgebühr S1** — ausdrücklich entschieden (E-2-✅;
`preisliste-vorlaeufig.md` § 4). **Was die Vorrunde als ④-Ableitung
dazugestellt hat und hier mit GENAU dieser Belegstufe übernommen
wird:** dass er **nicht** auf den Zimmeranteil S2 und **nicht** auf
die durchgereichten § 2-Zeilen wirkt — Begründung dort: durchgereichte
Kosten fallen je Objekt real an, ein Rabatt darauf wäre eine
Subvention aus unserer Marge. **Das ist eine Ableitung der Preisliste
(④), kein Entscheid** — wer sie kippen will, kippt eine Begründung,
keinen Beschluss.

⚠️ **Alle vier Punkte unten sind Struktur-Entscheide. KEINER legt eine
Höhe fest** — jede Zahl (Prozentsatz, Staffelwerte, Deckel) ist
F-III und braucht E-6/E-7; Platzhalter dafür führt die Preisliste
(S3: `<RABATT-AUF-GRUNDGEBUEHR — HOEHE NICHT ENTSCHIEDEN>`).

### ☐ AA-5 — Ab wann greift der Rabatt?

&nbsp;&nbsp;☐ **ab dem 2. Haus** — der naheliegende Schnitt (so schon
als Nicht-Entscheid notiert, Preisliste § 4): wirkt beim häufigsten
Mehrhaus-Fall sofort und macht die Stellschraube im Gespräch früh
sichtbar. Unbequemer Pol: Er rabattiert dort, wo der
Skaleneffekt am kleinsten ist (**④ — ob es überhaupt einen gibt,
misst erst E-6**)
&nbsp;&nbsp;☐ **ab dem 3. Haus** — Rabatt erst, wo der Verbund-Effekt
plausibel deutlich wird (④). Unbequemer Pol: Der 2-Haus-Betreiber —
mutmaßlich der häufigste Mehrhaus-Fall der Zielgruppe (**④, nicht
erhoben**) — geht leer aus; die Stellschraube verfehlt ihn
&nbsp;&nbsp;☐ anders: _____

*Wechselwirkung mit AA-1: „Haus Nr. 2" zählt je nach Zuordnung
verschieden — unter Lesart B beginnt die Zählung je Firmierung neu.
Deshalb steht AA-1 vor diesem Punkt.*

### ☐ AA-6 — Prozentsatz oder Staffel?

&nbsp;&nbsp;☐ **fester Prozentsatz** auf die S1 jedes weiteren
Hauses — eine Zahl, ein Satz im Angebot, am leichtesten erklärbar;
bildet aber einen wachsenden Verbund-Effekt nicht ab
&nbsp;&nbsp;☐ **steigende Staffel** (Haus 2: x % · Haus 3 und
folgende: y %) — bildet den wachsenden Effekt ab (**④ — denselben
ungemessenen**), kostet aber eine zweite Höhenfrage und
Erklärungslast; verstärkt das „Mobilfunkrechnungs"-Risiko (§ 8)
&nbsp;&nbsp;☐ anders (z. B. „erstes Haus voll, jedes weitere
pauschal reduziert" — dieselbe Mechanik wie der feste Satz in
anderer Darstellung): _____

### ☐ AA-7 — Deckelung?

&nbsp;&nbsp;☐ **ohne Deckel** — einfachste Form; der Rabatt gilt für
jedes weitere Haus gleich
&nbsp;&nbsp;☐ **mit Deckel** (Maximal-Prozentsatz bzw. Rabatt-Ende ab
Haus n) — schützt die S1-Substanz gegen große Verbünde. ⚠️ **Ein
Deckel ist heute nur strukturell entscheidbar, nicht bezifferbar:**
Die Untergrenze, die er schützen soll (hausfixe Betreuungskosten B2),
ist **nicht erhoben** (`preismodell-optionen.md` § 4.2) — es gibt
keine belegbare Zahl, unter die S1 nicht fallen darf
&nbsp;&nbsp;☐ anders: _____

### ☐ AA-8 — Wirkt der Rabatt auch auf die Startgebühr S4?

**Klartext der Ausgangslage** (Preisliste § 3,
S4-Einordnungs-Kasten): Nach E-2 wirkt der Rabatt auf S1 — **nicht**
auf die Startgebühr. **Ob er es sollte, ist offen und gehört genau
hierher.**

&nbsp;&nbsp;☐ **nein — S4 bleibt rabattfrei** (Status der heutigen
Ableitung). Dafür spricht die E-1-Gewichtung: Im ersten Jahr soll die
Startgebühr **verstärkt** sein (Liquiditätsentscheid des Users,
✅ E-1) — ein Rabatt auf S4 arbeitet dem direkt entgegen
&nbsp;&nbsp;☐ **ja — Rabatt auf S4 ab dem zweiten Haus desselben
Kunden.** Dafür spricht die Kostenlogik in der Gegenrichtung: Anders
als die § 2-Zeilen ist S4 **unsere Arbeitszeit, keine durchgereichte
Fremdkosten** — das Argument, das den Rabatt auf § 2 verbietet,
verbietet ihn auf S4 gerade NICHT. Die Einführung des zweiten Hauses
desselben Betreibers ist **mutmaßlich** günstiger als die erste
(gleiche Prozesse, gleiche Ansprechpartner — **④ Hypothese; genau
diese Größe misst E-6 erst noch**). Und im Gespräch ist die
Startgebühr ×n der Betrag, den ein Mehrhaus-Interessent zuerst sieht
— ein S4-Nachlass ist dort das sichtbarste Zugeständnis
&nbsp;&nbsp;☐ **später entscheiden** — erst nach E-6, wenn belegt
ist, ob Haus 2 real weniger Einführungsaufwand kostet
&nbsp;&nbsp;☐ anders: _____

*Empfehlung dieser Session (begründet, nicht bindend): **„später
entscheiden"** — beide inhaltlichen Optionen stützen sich auf
dieselbe ungemessene Größe (Einführungsaufwand je Folgehaus), und
E-6 ist bereits beauftragt. Wer heute festlegen muss: „nein" ist die
Option, die den E-1-Liquiditätsentscheid nicht unterläuft; „ja" ist
die richtige Wahl, wenn der Mehrhaus-Abschluss das knappere Gut ist
als die Liquidität — das ist eine unternehmerische Abwägung, keine
Beleglage.*

---

## 6. Übergabefähigkeit als roter Faden (E-3/A5) — und wo die Paketierung ihr widerspricht

**Die Erzählung, die jedes Paket tragen muss (E-3, ✅):** Der Kunde
ist **Eigentümer seiner Umgebung**, die Zugänge gehören ihm, es gibt
**keinen Lock-in** beim Dienstleisterwechsel — und die
**Übergabedoku ist fester Bestandteil der Einführung** (sie steht im
B1-Aufgabenkatalog, `preismodell-optionen.md` § 4.2: „…, Schulung,
Übergabedoku").

**Struktur-Folge (④ Ableitung dieser Session aus E-3):** Die
Übergabedoku darf in **keiner** Paketoption ein kostenpflichtiges
Zusatzmodul sein — sie ist Bestandteil der S4-Leistung. Ein Paket,
das „Übergabefähigkeit" als Upgrade verkauft, macht das
Kern-Verkaufsargument (A5) zur Option und widerspricht dem Entscheid.

**Wo die Erzählung heute bricht — benannt, nicht geglättet:**

| # | Widerspruch | Stand / Träger |
|---|---|---|
| 1 | **K03 (n8n):** Der Bestand hält fest „Kunde erhält keinen n8n-Zugang" — und die Lizenz-Argumentation des heutigen Betriebs **ruht** auf genau diesem fehlenden Zugang (`preismodell-optionen.md` § 5.3, ② BESTAND). Solange Z-6 offen ist, ist die Kernleistung „Workflow-Betrieb" **nicht** in dem Sinn übergabefähig, den E-3 erzählt (Zugang beim Kunden) | **ungeklärt** — Träger E-4 (Ruffy/heypensio), ohne Kalendertermin. Jedes Paket erbt diesen Vorbehalt |
| 2 | **K04 (Vapi):** „Kunde pflegt nie ein Vapi-Konto" ↔ Durchreichung/Eigentumsumgebung — gleichrangig zur n8n-Frage, sofern Vapi zur Eigentumsumgebung zählt (② BESTAND via Preisliste § 2) | **ungeklärt** — dieselbe Klärung (E-4) und die Z-5-Zulieferung |
| 3 | **Vertragspartner-Frage (Preisliste § 2, Kasten):** Ist der **Kunde** Vertragspartner von Hetzner/Supabase/Vapi, gibt es nichts durchzureichen — der Durchreichungsblock jedes Angebots sähe anders aus. Sind **wir** es, ist der Kunde nicht vollständig Eigentümer — das E-3-Argument wird schwächer | **ungeklärt** — Z-5 (Zentrale), nicht übergeben. **Pakete/Angebotsdarstellungen, die den Durchreichungsblock beschreiben, hängen an dieser Antwort** und weisen das aus |
| 4 | **Betreuter Betrieb:** Die Leistung „wir betreiben und eskalieren" liegt naturgemäß bei uns — das ist **kein** Widerspruch zur Übergabefähigkeit, aber eine Abgrenzung, die sauber gehalten werden muss: **Übergabefähig ist die UMGEBUNG (Server, Konten, Workflows, Doku), nicht die Dienstleistung Betrieb.** „Kein Lock-in" heißt: Der Kunde kann mit seiner Umgebung zu einem anderen Betreiber — nicht: Der Betrieb funktioniert ohne Betreiber (④ Klarstellung dieser Session) | Abgrenzung gehört später ins Angebots-Wording (nach Firmierung); hier nur als Struktur-Feststellung |

**Konsequenz für die Paketoptionen (§ 4):** Keine der drei Optionen
ist von den Widersprüchen 1–3 ausgenommen — sie betreffen die
**Grundlage** (W-B-Erzählung), nicht den Zuschnitt. Ein Angebot darf
erst dann mit der Übergabe-Erzählung verkaufen, wenn Z-6/K04
(Träger E-4) geklärt sind — bis dahin ist die Erzählung eine
**Rechenbasis mit Vorbehalt**, kein Verkaufsargument. *(Das ist die
Angebots-Seite desselben Vorbehalts, den die Preisliste im Kopfkasten
trägt.)*

---

## 7. Entscheidungspunkte im Überblick — und wie es weitergeht

**Die acht Punkte (Volltext je Punkt in § 2, § 4, § 5 — diese Tabelle
ist nur der Zeiger, keine Zweitfassung):**

| Punkt | Frage (Kurzform) | Steht in | Vorbedingung |
|---|---|---|---|
| **☐ AA-1** | Rabatt-Zuordnung: Betreiber oder Firmierung? | § 2 | **zuerst beantworten** — vor AA-5…AA-8 |
| **☐ AA-2** | Paketform: Gesamtpaket / Basis+Module / Stufen | § 4 | — |
| **☐ AA-3** | Katalog-Grenze: nur Gebautes oder mit Kennzeichnung? | § 4 | — |
| **☐ AA-4** | Beratungsachse: in S1, nach Aufwand oder Kontingent? | § 4 | Kayhan-Achse bleibt bis Vertrag nicht zusagefähig |
| **☐ AA-5** | Rabatt ab Haus 2 oder Haus 3? | § 5 | AA-1 |
| **☐ AA-6** | Prozentsatz oder Staffel? | § 5 | AA-1 |
| **☐ AA-7** | Deckel ja/nein (Höhe erst nach E-6 bezifferbar) | § 5 | AA-1 |
| **☐ AA-8** | Rabatt auch auf die Startgebühr S4? | § 5 | AA-1; inhaltlich sinnvoll erst nach E-6 |

### So läuft es weiter

1. **Antworten formlos** (Chat, Zuruf, Notiz) — sie werden danach
   schriftlich im Repo festgehalten, mit Quelle, Datum und Form der
   Erhebung (dieselbe Mechanik wie bei E-1…E-8).
2. **Entscheider ist der User** — dieselbe Instanz wie bei den
   E-Punkten; dieses Dokument entscheidet nichts und empfiehlt nur
   mit ausgearbeiteten Alternativen.
3. **AA-1 zuerst** — ohne die Zuordnung trägt keine Antwort auf
   AA-5…AA-8. AA-8 und jeder Deckel-Betrag (AA-7) werden inhaltlich
   erst nach **E-6** belastbar.
4. **Textänderungen sind JETZT am billigsten** — sobald aus dieser
   Struktur ein Angebotsdokument gebaut wird (nach Firmierung), hängt
   an jeder Festlegung eine Kette.
5. **Was aus diesem Dokument an andere Träger geht:** die
   Verbund-Definition (bei Lesart A) als Z-1-Punkt und die
   Vertragspartner-Frage als Z-5-Punkt in die Zentrale-Zulieferung
   (`preismodell-optionen.md` § 10 — Übergabe steht weiterhin aus);
   die Aufwands-Frage „Haus 2 billiger als Haus 1?" als
   Präzisierungs-Wunsch an die laufende **E-6**-Messung
   (Ruffy/heypensio): wenn dort ohnehin gestoppt wird, die Blöcke je
   Objekt getrennt notieren.

---

## 8. Zugehörige Dokumente

- `handel/preismodell-optionen.md` — Entscheidungsvorlage mit den
  ✅-Vermerken E-1…E-8 (§ 11); **Quelle, gewinnt bei Widerspruch.**
- `handel/preisliste-vorlaeufig.md` — Preisstruktur mit Platzhaltern
  S1–S4 und den vier Vorbehalten; **Quelle der Beträge/Platzhalter,
  gewinnt bei Widerspruch.**
- `fund/positionierungspapier.md` — Leistungskatalog (§ 6) und
  Zielgruppe (§ 3); Quelle des Modul-Bestands.
- `<FIRMENWURZEL>\zentrale\briefings\briefing-2026-08-13.md` —
  Entscheide-Protokoll 13.08.2026 (Erhebungsform der E-Punkte).
