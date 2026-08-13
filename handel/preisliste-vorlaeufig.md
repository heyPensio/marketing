# Vorläufige Preisliste (MKT-HANDEL, Stufe F-III) — INTERN

> ## ⚠️ Status und vier Vorbehalte (bitte zuerst lesen)
>
> **1. Status: VORLÄUFIG und INTERN.** Diese Datei setzt die
> Entscheide E-1, E-2, E-2a und E-3 vom 13.08.2026
> (`handel/preismodell-optionen.md` § 11) in eine Preisstruktur um.
> Sie ist **kein Angebot, keine Preisliste für Kunden und keine
> Preiszusage.** Kein Betrag hier ist beschlossen.
>
> **2. Firmierungs-Vorbehalt.** Der Namensentscheid ist offen (Strang
> MKT-MARKE, GbR-Namensführungsfrage am StB-Termin). **Nichts aus
> dieser Datei geht nach außen** — kein Versand, keine Nennung
> gegenüber Interessenten, keine Website-Preisseite.
>
> **3. Z-6-Vorbehalt (kann die Rechenbasis kippen).** Diese Liste
> rechnet nach E-3 **vorläufig auf der W-B/A3-Struktur** (Kunde =
> Eigentümer, Infrastruktur durchgereicht). Ob die **n8n Sustainable
> Use License** ein Modell trägt, in dem der Kunde Eigentümer der
> Umgebung ist und Zugang hält, ist **ungeklärt**
> (`preismodell-optionen.md` § 5.3, § 10 Z-6). Träger der Klärung:
> Ruffy/heypensio (E-4), **ohne Kalendertermin**. Kippt Z-6, kippt der
> Aufbau dieser Liste — nicht nur einzelne Zahlen.
>
> **4. Alle Beträge sind Hypothesen oder Platzhalter — belastbar erst
> nach E-6.** Der **Einführungsaufwand (B1) ist nicht erhoben**
> (`preismodell-optionen.md` § 4.2). Solange er fehlt, lässt sich
> weder belegen, dass eine Startgebühr ihn deckt, noch, ab welchem
> Monat ein Kunde profitabel ist. **E-7** (Zahlungsbereitschaft,
> ~23.08.2026) steht ebenfalls aus.
>
> ### Nicht Teil dieser Datei (ausdrücklich)
>
> - **Die Preis-HÖHE.** Sie ist durch die Entscheide vom 13.08. **nicht**
>   gefallen. Was hier steht, sind Strukturen, Platzhalter und **eine
>   Hypothesen-Spanne aus Marktanalogie** — kein Preis von uns.
> - **Der Architektur-Entscheid.** Er liegt bei heypensio/den
>   Gesellschaftern und ist NICHT gefallen. E-3 hat nur die
>   **Rechenbasis** dieser Liste gesetzt. „Wir rechnen vorläufig W-B"
>   ist nicht „wir bauen W-B".
> - **Leistungspakete und die ausgearbeitete Mehrhaus-Rabatt-Mechanik.**
>   Sie gehören in `handel/angebotsarchitektur.md` (E-8, Runde R12-B).
>   Diese Liste benennt den Rabatt nur als Stellschraube.
> - **Das Angebotsdokument** und jede Form von Außenkommunikation.
> - **Der Pilot.** Pilotleistungen sind kostenlos (E-5), **einschließlich
>   Hostel Boninstraße/LEANE** (E-5a). Diese Liste gilt ausschließlich
>   für **Folgekunden ab Kunde 1**.
> - **Vertrags-, Rechts- und Steuerfragen** (Z-1…Z-7, Zulieferung an die
>   Zentrale — bislang **nicht übergeben**).
>
> **Erstellt:** Runde **R12-A**, 13.08.2026 · **Lesestand beim Bau:**
> Repo-HEAD `e112845` (Tagesstart) — zu diesem Stand trug
> `handel/preismodell-optionen.md` die ✅-Nachträge **noch nicht**.
> **Entstanden ist beides gemeinsam in Commit `9a0b0bd`**, die Nachträge
> und diese Datei. *(Korrigiert nach Prüferbefund P-11: Die Erstfassung
> nannte `e112845` und im selben Satz „in der Fassung mit den
> ✅-Nachträgen" — ein Hash und eine Fassung, die nicht zusammengehören.
> Genau die Alterung, die ein Verifikationsvermerk durch den eigenen
> späteren Nachtrag erfährt.)* · **Entscheid-Quelle:**
> `<FIRMENWURZEL>\zentrale\briefings\briefing-2026-08-13.md`,
> „⭐ Entscheide-Protokoll 13.08.2026" (Briefing-Dialog, Dropdown +
> Freitext, **sinngemäß — Wortlaut nicht archiviert**).
> **Rohbelege dieser Runde:** `sensibel/rohbelege-R12-A/` (git-ignoriert).

---

## Belegstufen-Legende

Identisch mit `handel/preismodell-optionen.md`, damit beim Übernehmen
zwischen den Dokumenten keine Stufe verlorengeht:

| Marke | Bedeutung |
|---|---|
| **① GEMESSEN** | An der Primärquelle selbst erhoben, Zählweg steht an der Zahl |
| **② BESTAND** | Aus einem eigenen, geprüften Repo-Dokument übernommen — mit Fundstelle und dem Stand SEINES Datums |
| **③ SELBSTAUSKUNFT** | Angabe eines Anbieters über sich selbst. Kein geprüfter Fakt |
| **④ ANNAHME / HYPOTHESE** | Eigene Annahme oder Ableitung dieser Session. Nicht gemessen |
| **⑤ HYPOTHESE (extern, unbelegt)** | Aus dem ChatGPT-Teil des Rohstoff-Papiers. Nie Anker |

---

## 1. Der Aufbau in einem Satz — und warum er so aussieht

Ein Kunde zahlt nach den Entscheiden vom 13.08.2026 **drei getrennte
Dinge**: (1) seine **Infrastruktur zum Selbstkostenpreis**
durchgereicht, (2) unsere **Servicegebühr** je Objekt/Haus, (3) einmalig
eine **Startgebühr**.

| Baustein | Woher der Entscheid kommt | Steht in |
|---|---|---|
| Trennung Infrastruktur ↔ Service, Durchreichung zum Selbstkostenpreis | **E-3** (Neufassung durch den User, Richtung Übergabefähigkeit) | § 2 |
| Servicegebühr = Grundgebühr **je Objekt/Haus** + zimmerabhängiger Anteil | **E-2** (Bemessung c) + **E-2a** (Bezugseinheit) | § 3 |
| Mehrhaus-Rabatt auf die Grundgebühr | **E-2**, Zusatz (Zentrale-Empfehlung, User bestätigt) | § 4 |
| Einmalige Startgebühr, im ersten Jahr **verstärkt** | **E-1** (Option ii + Gewichtungsvorgabe) | § 5 |

⭐ **Eine Folge der Durchreichung, die man leicht übersieht — sie ändert
die Kalkulationslogik des Vorgängerdokuments:** Solange wir die
Systemkosten selbst trugen, war der monatliche Deckungsbeitrag
„Monatspreis − laufende Kosten" (`preismodell-optionen.md` § 7.5).
**Werden Hetzner/Supabase/Vapi durchgereicht, tragen wir diese Kosten
nicht mehr** — der Deckungsbeitrag der Servicegebühr ist dann
„Servicegebühr − unsere Arbeitszeit". Zwei Wirkungen, in
entgegengesetzte Richtungen, und beide gehören genannt:

- **Für uns günstig:** Der Break-even nach § 7.5 wird kürzer, weil der
  Nenner nicht mehr um 38–58 € gemindert ist. ⚠️ **Nur unter einer
  Prämisse, die genannt gehört** (P-17): Das gilt, **wenn die
  Servicegebühr betraglich dem bisherigen Monatspreis entspricht**.
  Bleibt stattdessen das **Budget des Kunden** gleich — was der zweite
  Spiegelstrich selbst nahelegt —, sinkt die durchsetzbare
  Servicegebühr um eben diese 38–58 €, und der Deckungsbeitrag bleibt
  unverändert. **Welche der beiden Lagen eintritt, ist nicht erhoben.**
- **Für uns ungünstig:** Der Kunde sieht seine Infrastrukturkosten
  **zusätzlich** zur Servicegebühr auf der Rechnung. Was er insgesamt
  zahlt, steigt optisch — und das drückt auf die Zahlungsbereitschaft
  für die Servicegebühr, über die wir **nichts Belegtes** wissen
  (§ 6.4 des Vorgängerdokuments, unverändert offen).

**Belegstufe dieser Folgerung: ④** — sie ist gerechnet, nicht gemessen.
Sie ersetzt E-6 nicht.

---

## 2. Kostenzeilen: durchgereichte Infrastruktur (E-3)

**Regel nach E-3:** Diese Positionen laufen **zum Selbstkostenpreis**
durch — **kein Aufschlag, keine Marge, keine Bündelung** in die
Servicegebühr. Sie sind für uns ein durchlaufender Posten, für den
Kunden ein eigener Rechnungsblock.

⚠️ **Alle Werte sind aus `preismodell-optionen.md` § 4.1 übernommen
(② BESTAND), nicht neu erhoben.** Ihre dortige Belegstufe steht in der
letzten Spalte und wird hier **nicht** angehoben.

| Schlüssel | Position | Betrag | Einheit / Scope | Steuerbasis | Belegstufe (Stand der Quelle) |
|---|---|---|---|---|---|
| **K1** | Hetzner Cloud CX33 (4 vCPU, 8 GB RAM, 80 GB) inkl. primärer IPv4 | **8,99 €** | pro Monat, Standort DE, Preisobergrenze („max.") | **netto** (abgeleitet, s. Steuervermerk unten) | ① GEMESSEN 12.08.2026 (§ 4.1 K1) |
| **K2** | Hetzner Cloud CX43 (8 vCPU, 16 GB, 160 GB) inkl. IPv4 — größere Stufe | **16,49 €** | pro Monat, DE | netto (ebenso abgeleitet) | ① GEMESSEN 12.08.2026 (§ 4.1 K2) |
| **K3** | Supabase Pro | **ab 25,00 $** erstes Projekt der Organisation, **ab 10,00 $** je weiteres | pro Monat; **der Plan hängt an der Organisation, nicht am Projekt** | **unbekannt** — die Preisseite nennt keine Steuerbasis | ① GEMESSEN 12.08.2026 (§ 4.1 K3). Währung **USD**, kein Kurs umgerechnet |
| **K4** | Vapi (Sprachkanal Check-in) | **20–40 €** | pro Monat und **Haus der Pilot-Größenklasse (23 Zimmer)**; Spanne 10–80 € über vier Auslastungs-Szenarien. **Skaliert mit der Check-in-Zahl; für größere Häuser NICHT erhoben** | ohne Steuervermerk; Umrechnung mit **④ 0,90 €/$** | ② BESTAND, Stand **28.07.2026**, gemessen an 62 Calls — **sämtlich Testläufe** (§ 4.1 K4) |
| **K5** | Cloudflare Pages (Terminal-WebUI je Kunde) | **nicht erhoben** | — | — | **offen** — im Bestand ohne Kostenangabe geführt. **Nicht 0 €** |
| **K6** | Domain/DNS je Kunde | **nicht erhoben** | — | — | **offen** — dito |
| **K7** | n8n (Workflow-Laufzeit) | **0 € Lizenzkosten unterstellt** | self-hosted | — | ④ ANNAHME **mit offener Rechtsfrage** → Z-6/E-4 |

**⚠️ K5 und K6 bleiben hier sichtbar offen.** Wer eine
Durchreichungsliste baut, hat den Reflex, die Lücken mit 0 € zu füllen,
weil eine Tabelle mit Leerzellen unfertig aussieht. **Beide Positionen
fallen real an** (ein Pages-Projekt und eine Domain je Kunde stehen im
Architektur-Bestand) — ihre Höhe ist nur nicht gemessen. Eine
Durchreichung, die sie verschweigt, reicht sie auch nicht durch.
Dasselbe gilt für **B1/B2** (Einführungs- und Betreuungsaufwand, § 3).

**⚠️ Vapi-Zeile — Nutzungsrisiko:** Nach E-3 bleibt das
**Vapi-Nutzungsrisiko beim Verursacher**: Wer telefoniert, zahlt. K4 ist
**kein Pauschalbetrag**, sondern eine nutzungsabhängige Position; die
Spanne 20–40 € gilt für ein Haus der Pilot-Größenklasse bei den
Auslastungs-Szenarien der Quelle. **Für ein größeres Haus ist die
Position nicht erhoben** — sie darf dort nicht mit 20–40 € angesetzt
werden.

> ### ⚠️ Ungeklärt: Wer ist eigentlich Vertragspartner der Anbieter?
> *(ergänzt nach Prüferbefund P-06 — die Erstfassung hat diese Frage
> nicht gestellt, obwohl sie über den Aufbau dieses Abschnitts
> entscheidet.)*
>
> „Durchreichen" setzt voraus, dass **wir** Vertragspartner von
> Hetzner/Supabase/Vapi sind und dem Kunden weiterberechnen. E-3 will
> aber zugleich, dass **der Kunde Eigentümer seiner Umgebung ist und
> die Zugänge hält**. Beides zusammen ist nicht selbstverständlich:
> - Ist der **Kunde** Vertragspartner, gibt es **nichts durchzureichen**
>   — die Positionen K1–K7 wären dann gar keine Zeilen unserer
>   Preisliste, sondern Rechnungen, die direkt bei ihm eingehen.
> - Sind **wir** Vertragspartner, ist der Kunde nicht vollständig
>   Eigentümer seiner Umgebung — der Kern des E-3-Arguments („kein
>   Lock-in beim Dienstleisterwechsel") wird schwächer.
>
> **Der eigene Bestand führt dazu einen zweiten, bisher hier fehlenden
> Widerspruch:** Neben **K03** („Kunde erhält keinen n8n-Zugang" —
> Eigentums-/Zugangswiderspruch, im Kopfkasten als Z-6 abgedeckt) steht
> **K04**: „ein Vapi-Konto; **Kunde pflegt nie ein Vapi-Konto**" —
> Klassifikation dort: „direkter Konten-/**Vertrags**widerspruch,
> **sofern Vapi zur Eigentumsumgebung zählt**"
> (`preismodell-optionen.md` § 5.3, ② BESTAND). **Genau diese Bedingung
> erfüllt die Vapi-Zeile oben**, indem sie Vapi an den Kunden
> durchreicht.
>
> **Folge:** Der Kopfkasten dieser Datei nennt als Strukturvorbehalt nur
> **Z-6/n8n**. Das ist **eine** Kollision von zweien — die Vapi-Kollision
> (K04) ist gleichrangig und **ebenfalls ungeklärt**. Sie gehört in
> dieselbe Klärung wie Z-6 (Träger **E-4**, Ruffy/heypensio) und in die
> Zentrale-Zulieferung **Z-5** („Wer schließt die Verträge mit
> Hetzner/Supabase/Vapi/Cloudflare — wir oder der Kunde?"), die genau
> diese Frage bereits führt.

**⚠️ Steuervermerk (nicht quellenübergreifend ergänzen):** Bei K1/K2 ist
„netto" eine **begründete Ableitung** (die Hetzner-Website lädt eine
eigene Steuertabelle und rechnet sie auf die Beträge auf), kein zitierter
Netto-Vermerk. Bei **K3 ist die Steuerbasis unbekannt** und bei **K4
nicht angegeben** — diese Lücken werden hier **nicht** aus K1
mitgefüllt. Vor jeder Rechnungsstellung ist die Steuerbasis je Anbieter
am Vertrag zu klären (Z-7).

**Keine Summenzeile — mit Absicht.** Die Positionen tragen zwei
Währungen, zwei Steuerbasen (eine unbekannt) und zwei Bezugsgrößen (je
Kunde vs. je Haus). Als **Größenordnung** nennt § 4.1 für die
W-B-Weichenstellung **rund 38–58 € je Kunde und Monat** (④ auf ①
gemessenen Einzelposten, ein Ein-Objekt-Haus) — **ohne K5/K6**, die
darin gar nicht enthalten sind.

---

## 3. Servicegebühr (getrennt ausgewiesen) — E-2 / E-2a

**Struktur steht, Beträge nicht.** Nach E-2 ist die Bemessung
(c) Grundgebühr + zimmerabhängiger Anteil; nach E-2a ist die
Bezugseinheit **das Objekt/Haus**.

| Schlüssel | Position | Betrag | Bezugseinheit | Status |
|---|---|---|---|---|
| **S1** | Grundgebühr Betrieb & Betreuung | `<GRUNDGEBUEHR-JE-HAUS — NICHT FESTGELEGT>` | **je Objekt/Haus** (E-2a) | ⬜ **offen** — belastbar erst nach E-6 (Aufwand) und E-7 (Zahlungsbereitschaft) |
| **S2** | Zimmerabhängiger Anteil | `<BETRAG-JE-EINHEIT-UND-MONAT — NICHT FESTGELEGT>` | je Einheit/Zimmer und Monat | ⬜ **offen** — dieselbe Lage |
| **S3** | Mehrhaus-Rabatt auf S1 | `<RABATT-AUF-GRUNDGEBUEHR — HOEHE NICHT ENTSCHIEDEN>` | ab dem 2. Haus desselben Betreibers | ⬜ **offen** — Mechanik § 4, Ausarbeitung R12-B |
| **S4** | Startgebühr (einmalig) — ⚠️ **eigenständige Position, hier nur zur Übersicht mitgeführt** | Hypothesen-Spanne, s. § 5 | je Objekt/Haus (Ableitung aus E-2a, **④** — der Entscheid sagt es für die Startgebühr nicht ausdrücklich) | ④ **Hypothese** |

⚠️ **Zur Einordnung von S4** (P-18): § 1 führt die Startgebühr als
**dritte, eigenständige Position** neben Infrastruktur und
Servicegebühr — sie steht hier nur mit in der Tabelle, damit alle
Positionen an einer Stelle sichtbar sind. **Sie ist kein Bestandteil
der Servicegebühr.** Praktische Folge, die für R12-B zählt: Der
**Mehrhaus-Rabatt wirkt nach E-2 auf S1** — und damit **nicht** auf die
Startgebühr S4. Ob er es sollte, ist offen und gehört in die
Angebotsarchitektur.

**Die Platzhalter sind absichtlich sprechend und nicht befüllt.** Ein
plausibel aussehender Beispielbetrag in dieser Tabelle würde beim
nächsten Weiterverwenden als Preis gelesen — genau der Weg, auf dem in
diesem Projekt schon einmal eine unbelegte Zahl zum Anker wurde
(`preismodell-optionen.md` § 2.2, die verworfene ⑤-Zahl).

**Was über die Beträge heute belegbar ist — und was nicht:**

- **Untergrenze aus eigenen Kosten:** Nach der Durchreichung (§ 2) deckt
  die Servicegebühr **nicht mehr** die Systemkosten, sondern **unsere
  Arbeitszeit**. Deren Höhe (**B1** Einführung, **B2** laufende
  Betreuung) ist **nicht erhoben** (`preismodell-optionen.md` § 4.2) —
  **es gibt daher heute keine belegbare Kostenuntergrenze für S1/S2.**
  Das ist kein Versäumnis dieser Datei, sondern der Grund für E-6.
- **Marktorientierung, nicht Preis:** Das erhobene Marktbild für
  *monatliche* Betreuung reicht von rund **50 € bis 999 €** mit
  Schwerpunkt **100–500 €** (③ Anbieter-Selbstauskünfte, § 6.3.2) —
  ⚠️ ausdrücklich für ein **anderes Leistungsbild**: „Keiner der sechs
  betreibt Sprach-/Telefoniestrecken oder meldepflichtige
  Fachprozesse." Im Hotelmarkt liegen die belegten Monatswerte höher
  (M1 781,67–996,77 € für 20/40/50 Zimmer ②; M6 **399 € für 20 Zi./3\*,
  849 € für 75 Zi./4\*, 1.599 € für 100 Zi./5\*** ③ — ⚠️ die Quelle
  bezeichnet diese drei ausdrücklich **nicht als Tarife, sondern als
  „reale annäherungsweise Preisbeispiele"**, zuzüglich einer
  **Einrichtungsgebühr unbekannter Höhe**).
  **Beides sind Zahlungsbereitschafts-Indizien, keine Preisschilder.**
  ⚠️ **Der Größen-Scope ändert die Aussage:** Unsere Zielgröße ist
  „10–25 Einheiten je Objekt" (§ 2.4 der Vorlage) — von den drei
  M6-Werten liegt nur der **unterste** in dieser Nähe. *(Scope und
  Charakter-Vorbehalt ergänzt nach Prüferbefund P-07: Die Erstfassung
  nannte nur die Zahlenfolge und ließ die Werte damit wie ein Marktband
  für Häuser unserer Art erscheinen — Verzerrung zugunsten einer höheren
  Servicegebühr. Bei M1 stand der Scope im selben Satz bereits korrekt.)*
- **E-1-Gewichtung wirkt hier mit:** Im ersten Jahr soll die
  Monatsgebühr **geringer** ausfallen — die spätere Verschiebung
  (Monatsanteil hoch, Startgebühr runter) ist ausdrücklich vorgesehen.
  **Wer S1/S2 später anhebt, ändert einen laufenden Vertrag** → das
  fällt unter **Z-4** (`preismodell-optionen.md` § 10) und muss von
  Anfang an sauber formuliert sein.

---

## 4. Mehrhaus-Rabatt auf die Grundgebühr — die Stellschraube (E-2)

**Warum es ihn gibt:** E-2a setzt den Regelfall „je Objekt/Haus" — ein
Betreiber mit drei Häusern zahlt drei Grundgebühren. Für preissensible
Mehrhaus-Betreiber ist der Rabatt der bewusst eingebaute Gegenhebel.
Beide Entscheide gehören zusammen gelesen.

**Mechanik (beschrieben, nicht beziffert):**

| Frage | Stand |
|---|---|
| Worauf wirkt der Rabatt? | **Auf die Grundgebühr S1 — ausdrücklich entschieden** (Entscheide-Protokoll: „Mehrhaus-Rabatt **auf die Grundgebühr** als Stellschraube"). **④ Ableitung dieser Session, nicht entschieden:** dass er **nicht** auf den zimmerabhängigen Anteil S2 und **nicht** auf die durchgereichte Infrastruktur (§ 2) wirkt. Begründung der Ableitung: Durchgereichte Kosten fallen je Objekt real an — ein Rabatt darauf wäre eine Subvention aus unserer Marge. *(Belegstufen-Trennung ergänzt nach P-12: Entscheid und Ableitung standen im selben Satz hinter dem Wort „entschieden".)* |
| Ab wann greift er? | **offen** — ab dem 2. Haus ist der naheliegende Schnitt, **entschieden ist er nicht** |
| Wie hoch? | **offen** — das Entscheide-Protokoll schweigt dazu. Diese Session macht dazu **keinen Vorschlag als Festlegung** |
| Prozent oder Staffel? | **offen** — Ausarbeitung in `handel/angebotsarchitektur.md` (E-8/R12-B) |
| Gilt er je Betreiber oder je Firmierung? | ⚠️ **ungeklärt und folgenreich** — s. Hinweis unten |

⚠️ **Der offene Punkt, der beim Bau der Mechanik zuerst gelöst werden
muss:** E-2a bemisst **je Objekt/Haus**, der Rabatt setzt aber einen
**Betreiber** voraus, dem mehrere Häuser zugerechnet werden. Der eigene
Pilot zeigt, dass das auseinanderfallen kann: **ein Kunde, drei Objekte,
drei Firmierungen** (`preismodell-optionen.md` § 11 E-2a, Codex-Bericht
K11). Läuft der Rabatt über die **Firmierung**, bekäme dieser Kunde
keinen; läuft er über den **wirtschaftlich Berechtigten**, bekäme er
ihn. **Das ist eine Zuordnungs- und keine Preisfrage** — sie gehört in
R12-B geklärt, bevor eine Höhe festgelegt wird.

*Vorschlag dieser Session — und ausdrücklich nur ein Vorschlag, kein
Eintrag in die Liste:* Den Rabatt an den **Betreiber** zu binden
(wirtschaftliche Einheit) und die Firmierung nur für die Rechnungslegung
zu verwenden, bildet den Nutzen ab, aus dem er entsteht — mehrere Häuser
bedeuten für uns weniger Einarbeitung je Haus, unabhängig davon, wie
viele Rechtsträger dahinterstehen. **Entschieden ist das nicht.**

---

## 5. Startgebühr — Herleitung der Hypothesen-Spanne (E-1)

> ### ④ HYPOTHESE AUS MARKTANALOGIE — kein Preis, kein Anker
>
> **Die Spanne unten ist eine Schätzung, keine Preisangabe.** Sie
> beantwortet die Frage „Was verlangen andere für eine Einrichtung?" —
> **nicht** die Frage „Was ist unser Einführungsaufwand wert?" und
> **nicht** die Frage „Was zahlen unsere Zielkunden?".
>
> **Belastbar erst nach E-6.** Die Marktanalogien zeigen, was andere
> **verlangen**, nicht, was unsere Zielkunden **zahlen**
> (`preismodell-optionen.md` § 6.4 und § 13, Grenze 14 — beide
> unverändert offen).

### 5.1 Datenbasis: alle belegten Einmalbeträge des Bestands

Alle Werte **kopiert** aus `preismodell-optionen.md` § 6.2/§ 6.3
(② BESTAND, dortige Belegstufe ③ Selbstauskunft), **plus** eine eigene
Gegenprobe am Rohbeleg — s. § 5.5 *(Verweis korrigiert, P-13)*.

| Schlüssel | Anbieter / Gegenstand | Einmalbetrag | Scope | Steuerbasis | Nähe-Klasse (§ 5.2) |
|---|---|---|---|---|---|
| **W1** | FoxifAI — n8n-Workflows auf deutschen Servern, laufender Betrieb, Wartung, persönlicher Ansprechpartner | **ab 1.920 €** | „Pakete starten bei"; Preis hängt „von der Anzahl und Komplexität der Workflows ab" | keine Angabe (USt-ID vorhanden) | **A** — bauformnächster Anker im ganzen Bestand. ⚠️ **schwächste Belegform der Tabelle:** Der Satz steht in einem **Ratgeber-/Vergleichs-Artikel des Anbieters über sich selbst**, nicht in einem Tarifblatt — „**eine Stufe unter einer Preisliste**" (Wortlaut der Quelle, § 6.3.2) |
| **W2** | Smartbetrieb — Hosting DE, Backups, Updates, Monitoring, Support | **490 €** SmartAudit (anrechenbar) **+ ab 300 €** Setup | je einzelnem Workflow | keine Angabe | **A** |
| **W3** | Prozessmeister — „KI-Agenten", 24/7-Support, Analytics | **ab 490 €** / **ab 1.990 €** | zwei Stufen | „Alle Preise zzgl. MwSt." → **netto** | **A** |
| **W5** | cStack Solutions — n8n-Monitoring + 1 Anpassung/Monat | **ab 900 / 1.980 / 4.050 €** | drei Stufen | **Kleinunternehmer**, umsatzsteuerbefreit | **A** ⚠️ schwacher Beleg (Placeholder-Testimonials) |
| **M2** | iiQ-Check (Hotelmarkt) | **399 / 599 / 799 / 799 €** | einmalige Einrichtung, **zimmerunabhängig** | **unbekannt** | **C** — Zielmarkt, andere Bauform |
| **M4** | melevo, Website (Hotelmarkt) | **1.495 / 2.295 / 4.195 €** | je Website | nicht angegeben | **C** |
| **M6** | Smart Host (Hotelmarkt) | **vorhanden, Höhe unbekannt** | — | — | **C** — dem Grunde nach, ohne Betrag |
| **Straiv** | Haupt-Technikwettbewerber | **„mögliche" Onboarding-Gebühr**, Höhe nicht öffentlich | Kann-Regelung des Einzelvertrags (AGB 7.2) | **netto** (AGB 7.4, belegt) | **C** — kein Betrag |
| **W4** | AngelStone Media (AT) | KI-Pilot **ab 3.000 €** / KI-System **ab 10.000 €** | Projektbau | **netto** (explizit) | **B** — Projektbau, s. § 5.2 |
| **W6** | LeanFlow Consulting | **ab 7.000 / 9.500 / 15.000 €** | Projektbau, **Microsoft-Stack, nicht n8n** | Kleinunternehmer (§ 19 UStG) | **B** |
| **M3** | melevo, Retainer | **0 € Startgebühr** — dafür **12 Monate Mindestlaufzeit** | je Haus | nicht angegeben | **Gegenfall** |
| **M1** | AKZENT Hotels e.V. | **keine Einrichtungsgebühr ausgewiesen** | Verbandsbeitrag, kein Dienstleistungsvertrag mit Einrichtungsaufwand | zzgl. MwSt. (belegt) | **Gegenfall** |

### 5.2 Auswahlregel — welche Anker zählen, und warum die anderen nicht

**Die Auswahl ist die eigentliche Aussage dieser Ableitung**, deshalb
steht sie vor der Zahl und nicht in einer Fußnote.

**Zweckbindung:** Die Startgebühr soll nach E-1 den **Einführungsaufwand
eines betriebenen Dienstes** decken. Maßgeblich ist also, was der Markt
für **Einrichtung mit anschließendem Betrieb** verlangt.

| Klasse | Kriterium | Anker | Gewertet? |
|---|---|---|---|
| **A** | Einrichtung eines **betriebenen** Automatisierungsdienstes (unsere Bauform) | W1, W2, W3, W5 | **ja — Kern** |
| **C** | **Zielmarkt Hotel**, aber andere Bauform (SaaS-Einrichtung, Website) | M2, M4 (M6/Straiv ohne Betrag) | **ja — Kern**, weil sie die Zahlungsbereitschaft **unserer** Kundenart zeigen |
| **B** | **Projektbau**: ein Werk wird erstellt, kein Betrieb aufgesetzt | W4, W6 | **nein** — nur als obere Orientierung |
| **Gegenfall** | Anbieter **ohne** Einmalzahlung | M3, M1 | **nein für die Spanne — ja für die Aussage**, s. unten |

**Warum B ausgeschlossen ist — und was der Ausschluss kostet:** W4 und
W6 bepreisen ein **Bauprojekt** (KI-Pilot/KI-System bzw. eine
Microsoft-Stack-Implementierung), nicht das Aufsetzen eines danach
betriebenen Dienstes. ⚠️ **Dieser Ausschluss senkt die Spanne
erheblich** — mit W6 (ab 7.000–15.000 €) läge die Obergrenze bei einem
Vielfachen. Er geht damit **gegen** das eigene Interesse an einer hohen
Startgebühr (E-1: „verstärkt"), und genau deshalb steht er hier
ausdrücklich: Wer die Spanne später anheben will, muss diese
Klassengrenze angreifen, nicht die Rechnung.

**Warum die Gegenfälle nicht in die Spanne, aber in die Aussage
gehören:** **M3** verlangt 0 € Startgebühr und bindet stattdessen
12 Monate — der Markt kennt also den **Tausch** Startgebühr ↔ Bindung.
**M1** weist gar keine Einrichtungsgebühr aus (allerdings als
Verbandsbeitrag, was ihn als Gegenfall schwächt). **Eine Spanne aus den
Anbietern, die eine Startgebühr verlangen, ist kein Beleg dafür, dass
eine Startgebühr üblich ist** — dieser Nachweis steht separat in
`preismodell-optionen.md` § 7.1 („10 von 13 Ankern mit belegter
Einmalzahlung", mit Zählweg und Gegenfall).

### 5.3 Die Spanne, mit Zählweg

**Kernmenge:** 15 Einzelwerte aus den Klassen A und C
(M2: 399 · 599 · 799 · 799 — M4: 1.495 · 2.295 · 4.195 — W1: 1.920 —
W2: 490 · 300 — W3: 490 · 1.990 — W5: 900 · 1.980 · 4.050).
**Zählweg der 15:** die Einzelwerte der Tabelle § 5.1, Klassen A und C,
Anbieter ohne Betrag (M6, Straiv) nicht mitgezählt.

| Größe | Wert | Zählweg |
|---|---|---|
| **Gesamtspanne der Kernmenge** | **300 – 4.195 €** | Minimum = W2-Setup „ab 300 €"; Maximum = M4-Topstufe 4.195 € |
| **Dichtestes 400-€-Fenster** | ⚠️ **399 – 799 €** | **6 der 15** Werte: M2 399 · M2 599 · M2 799 · M2 799 · W2 490 · W3 490. **Das ist NICHT das Band der Arbeitshypothese** — s. den Kasten darunter |
| **Rang 2 und 3** | **490 – 890 €** und **300 – 700 €** | je **5 der 15** Werte — beide ebenfalls unten, beide enthalten Klasse-A-Werte (W2 490/300, W3 490) |
| **Erstes Fenster oberhalb von 1.000 €** | **1.920 – 2.320 €** | **4 der 15** Werte: W1 1.920 · W5 1.980 · W3 1.990 · M4 2.295. Es ist **Rang 4**, nicht Rang 2 |
| **⭐ Arbeitshypothese für ein Haus der Pilot-Größenklasse (10–25 Einheiten)** | **rund 1.500 – 2.500 €** | Fenster 1.920–2.320 €, nach unten erweitert bis zur untersten Stufe der marktnahen Klasse C (M4 1.495 €) und nach oben gerundet |
| **Obere Orientierung für größere Häuser** | **bis rund 4.200 €** | M4 4.195 € und W5 4.050 € — die beiden Topstufen der Kernmenge |

*(Zählweg der Fenster-Angaben: Skript über die 15 Einzelwerte, je
vorhandener Wert als Fensterstart, Fensterbreite 400 €;
Ergebnisprotokoll in `sensibel/rohbelege-R12-A/`. **Nicht im Kopf
gezählt** — der erste Entwurf dieser Tabelle behauptete „kein anderes
400-€-Fenster enthält mehr als drei Werte", und genau das war falsch.
⚠️ **Zweite Korrektur an derselben Stelle, nach Prüferbefund P-01:** Die
zweite Fassung nannte das Fenster 1.920–2.320 € das
„**zweitdichteste** (mit Betriebsbezug)". Auch das war falsch — es ist
**Rang 4**; zwei 5er-Fenster liegen dazwischen, und beide enthalten
ebenfalls Klasse-A-Werte, während das 1.920er-Fenster mit M4 2.295 €
selbst einen Klasse-C-Wert enthält. Der Zusatz „mit Betriebsbezug"
rettete den Rang also nicht, er verdeckte ihn. **Beide Fehler gingen in
dieselbe Richtung: Sie ließen das Band der Arbeitshypothese dichter
belegt aussehen, als es ist.** Die Zahlen standen jeweils korrekt im
eigenen Skript-Protokoll — falsch war beide Male die von Hand
formulierte **Rangaussage** über die maschinelle Zählung.)*

> ### ⚠️ Der unbequeme Befund gehört an diese Stelle, nicht in eine Fußnote
>
> **Die häufigste Einmalzahlung im erhobenen Markt liegt bei 399–799 €
> — deutlich unter der Arbeitshypothese.** Wer nur die Häufigkeit
> abliest, landet bei rund 500 €, nicht bei 2.000 €.
>
> **Warum die Hypothese trotzdem höher liegt — und was daran ④ ist:**
> Das dichte untere Fenster besteht **vollständig** aus Angeboten mit
> schmalerem Gegenstand: die vier iiQ-Check-Tarife (M2, Einrichtung
> eines Standard-SaaS ohne eigene Infrastruktur), das
> Smartbetrieb-Setup (W2, **ein einzelner Workflow**) und die
> Prozessmeister-Einstiegsstufe (W3). **Kein einziger dieser sechs
> Werte** bepreist das Aufsetzen einer eigenen betriebenen Umgebung.
>
> **Damit ist die Arbeitshypothese eine BEGRÜNDETE, keine ABGELESENE
> Zahl.** Sie folgt dem Leistungsumfang, nicht der Häufigkeit — und der
> Umfangsvergleich ist eine **④-Wertung dieser Session**, gestützt auf
> die Aufgabenliste in `preismodell-optionen.md` § 4.2 B1, **nicht**
> auf eine Messung unseres tatsächlichen Aufwands. **Wer diese Wertung
> nicht teilt, landet legitim bei einer deutlich niedrigeren Spanne.**
> Das ist der Punkt, an dem **E-6** die Frage entscheidet und nicht die
> Marktanalogie.

> ### ⚠️ Offenlegung: die Spanne fällt zahlengleich mit einer gesperrten ⑤-Zahl zusammen
> *(ergänzt nach Prüferbefund P-02)*
>
> `preismodell-optionen.md` § 2.2 führt eine **ausdrücklich als
> unbrauchbar verworfene** ChatGPT-Zahl (**⑤**): „nicht unter
> ~1.500 € netto/Monat, **1.500–2.000** für kleines Setup,
> **2.500–4.000** bei mehreren Modulen". Sie steht dort „**genau
> einmal** … als das, was sie ist", und § 7.5 hat daraus eine eigene
> Konsequenz gezogen: Die oberste Rechengrößen-Spalte lautet **bewusst
> 1.200 € statt 1.500 €**, damit die gesperrte Zahl nicht „durch die
> Hintertür zum Anker" wird.
>
> **Die Arbeitshypothese oben lautet 1.500–2.500 € — beide Ränder
> stimmen mit Bandgrenzen dieser gesperrten Zahl überein.** Das wird
> hier offengelegt, weil es sonst der erste Eindruck jedes Lesers wäre,
> der § 2.2 kennt — und weil eine solche Koinzidenz sich leicht als
> **Bestätigung** liest („die Marktanalyse kommt auf dasselbe wie die
> KI"). **Das wäre falsch.**
>
> **Was den Zusammenfall entschärft — und was nicht:**
> - **Andere Größe:** Die ⑤-Zahl ist ein **Monatspreis**, die
>   Arbeitshypothese ein **Einmalbetrag**. Es ist keine Übernahme.
> - **Eigener Zählweg:** Die 1.500 € stammen aus M4 (1.495 €, Klasse C),
>   die 2.500 € aus der Rundung des Fensters 1.920–2.320 € — beides oben
>   nachvollziehbar hergeleitet.
> - **Nicht entschärft ist die Lesbarkeit:** Wer die Spanne
>   weiterverwendet, muss diesen Absatz mitnehmen. **Die
>   Übereinstimmung ist Zufall der Größenordnung, kein Beleg — und erst
>   recht keine gegenseitige Bestätigung.**

**Warum die Werte unter ~1.500 € nicht die Arbeitshypothese tragen:**
M2 (399–799 €), W2 (300 €), W3 (490 €) und W5 (900 €) bepreisen jeweils
ein **schmaleres** Einrichtungsbild — einen einzelnen Workflow, einen
Standardtarif ohne eigene Infrastruktur. Unser Einführungsbild umfasst
laut Bestand: Server/Instanz aufsetzen, Workflows importieren,
Credentials, Property-Setup, Raten, Tests, Schulung und Übergabedoku
(`preismodell-optionen.md` § 4.2 B1) — **und unter der W-B/A3-Struktur
zusätzlich die Übergabe der Trägermatrix** (Konten, Rollen, Domains,
Schlüssel, Backups). Das ist die **④-Begründung** der Untergrenze; sie
ist argumentiert, nicht gemessen.

**⚠️ Vier Vorbehalte, ohne die die Spanne falsch gelesen wird:**

1. **Es ist eine Untergrenzen-Spanne.** **7 der 15** Werte sind
   ausdrücklich „ab"-Preise (W1 „Pakete starten bei"; W2-Setup; W3 und
   W5 durchgehend), **8 sind feste Stufenpreise** (M2 komplett, M4
   komplett, W2-SmartAudit). Was Kunden real zahlen, liegt bei
   „ab"-Preisen **darüber**, nicht darunter. **Bezeichnend: Die
   „ab"-Werte stammen sämtlich aus Klasse A** (Betriebsbezug) — die
   Angebote, die unserem am nächsten kommen, sind auch die, die ihren
   Preis am wenigsten festlegen. ⚠️ **Die Umkehrung gilt nicht:** Nicht
   jeder Klasse-A-Wert ist ein „ab"-Wert — **W2-SmartAudit 490 €** ist
   ein Festpreis. *(Die Erstfassung schrieb „genau die Anbieter mit
   Betriebsbezug" und behauptete damit eine Äquivalenz, die der eigene
   Satz zwei Zeilen weiter widerlegt — P-19.)* *(Zählweg: dasselbe
   Skript wie oben; der erste Entwurf schrieb „9 von 15" — nachgezählt
   sind es 7.)*
2. **Die Steuerbasen sind uneinheitlich und werden hier nicht
   vereinheitlicht.** In der Kernmenge: netto belegt nur bei W3;
   **unbekannt** bei M2; **nicht angegeben** bei M4, W1, W2;
   **Kleinunternehmer** (Endpreise ohne USt) bei W5. **Die Spanne ist
   damit weder eine Netto- noch eine Bruttospanne.** Wer sie in eine
   Preisangabe überführt, muss die Steuerbasis **eigenständig** setzen
   (Z-7) — sie lässt sich aus diesen Quellen nicht ableiten.
3. **Kein Anker misst unser Leistungsbild.** Keiner der Anbieter
   betreibt Sprach-/Telefoniestrecken oder meldepflichtige Fachprozesse
   (§ 6.3.2). Ob unser Einführungsaufwand höher liegt, ist **nicht
   gemessen** — er wird nur vermutet.
   ⚠️ **Und der tragende Anker ist zugleich der schwächst belegte:**
   W1 (1.920 €) bildet die Untergrenze des Fensters, auf dem die
   Arbeitshypothese ruht, und ist der einzige Anker, der namentlich in
   die Kreuzprobe (§ 5.4) eingeht — seine Quelle ist aber ein
   **Selbstauskunfts-Artikel, kein Tarifblatt** (s. Tabellenzeile W1).
   *(Ergänzt nach Prüferbefund P-03: Dieser Vorbehalt stand in der
   Quelle in einem Fließtext-Absatz **unterhalb** der Tabelle und ging
   beim Übertragen Tabelle→Tabelle verloren, während die analoge
   W5-Schwäche — sie stand IN der Zeile — mitkam.)*
4. **Keine Zahlungsbereitschafts-Deckung.** Es gibt **keinen** Beleg,
   dass ein Zielkunde einen dieser Beträge zahlt (§ 6.4). E-7 holt das
   nach — als **n=1** aus dem eigenen Pilotumfeld, nicht als Sample.

**Wirkung der E-1-Gewichtung (Richtung, keine Zahl):** „Im ersten Jahr
Startgebühr **verstärkt**" spricht dafür, sich innerhalb der Spanne eher
am **oberen** Rand zu bewegen und den Monatsanteil entsprechend
niedriger anzusetzen. **Eine Zahl folgt daraus nicht** — und die in E-1
vorgesehene spätere Verschiebung wirkt in die Gegenrichtung.

### 5.4 Kreuzprobe gegen die eigene Kostenseite

Was deckt eine Startgebühr in dieser Größenordnung an Arbeitszeit ab?
**④ durchgehend** — die Rechnung nutzt den **Marktstundensatz**
125 €/h (unterer Rand des Bands aus `preismodell-optionen.md` § 4.2 B3)
und **8 h je Personentag** (④, gesetzt), also **1.000 € je
Personentag**.

| Startgebühr | entspricht … | Zählweg |
|---|---:|---|
| 1.500 € | **1,5 Personentage** | 1.500 ÷ 1.000 |
| 1.920 € (W1, bauformnächster Anker) | **1,9 Personentage** | 1.920 ÷ 1.000 |
| 2.500 € | **2,5 Personentage** | 2.500 ÷ 1.000 |
| 4.200 € | **4,2 Personentage** | 4.200 ÷ 1.000 |

**Was daran ablesbar ist, ohne eine einzige Zahl zu glauben:** Eine
marktübliche Startgebühr deckt **rund 1,5 bis 4 Personentage** zum
Marktsatz. Die Break-even-Tabelle in `preismodell-optionen.md` § 7.5
rechnet mit Szenarien **bis 10 Personentagen**. **Liegt unser
Einführungsaufwand am oberen Rand dieser Szenarien, deckt eine
marktübliche Startgebühr ihn nicht** — dann ist der Rest über die
Monatsgebühr zu verdienen, und genau das ist die Konstellation, vor der
§ 7.5 warnt.

⚠️ **Die Rechnung geht auch in die andere Richtung, und das gehört
dazu:** 125 €/h ist ein **Markt**preis, kein interner Kostensatz —
unser eigener Satz liegt darunter (§ 4.2 B3 ausdrücklich). Zu einem
niedrigeren internen Satz deckt derselbe Betrag **mehr** Stunden.
Beide Richtungen zusammen heißen: **Die Kreuzprobe ersetzt E-6 nicht,
sie zeigt nur, wie viel an E-6 hängt.**

⚠️ **Ein Marktbefund, der den Stundensatz relativiert** (① selbst am
Rohbeleg gelesen, 13.08.2026): Derselbe Anbieter, der den Stundensatz
„160 € netto" nennt (W4), verkauft **einen Tag als Festpreis „ab 600 €
netto"** (Rubrik „Eintrittsangebot", Tech-Check). Listen-Stundensatz und
real angebotene Tagesvergütung gehen bei ihm um **bis zu Faktor ~2**
auseinander (160 € × 8 h = 1.280 € gegen 600 €). ⚠️ **Auch die 600 €
sind ein „ab"-Wert** — der Faktor ist damit eine **Obergrenze der
Divergenz, keine gemessene Divergenz** (P-16; derselbe Vorbehalt, den
Vorbehalt 1 in § 5.3 für die Startgebühr-Anker macht). Ein
Eintrittsangebot
ist nicht repräsentativ — aber es belegt, dass ein Listen-Stundensatz
die reale Tagesvergütung nach **oben** verzerren kann. **Das macht die
Kreuzprobe oben eher optimistisch als vorsichtig.**

### 5.5 Gegenprobe der Zahlen (Positivkontrolle mit Nenner)

**Jeder einzelne Einmalbetrag wurde selbst nachgelesen**, nicht aus dem
Vorgängerdokument geglaubt. Protokoll:
`sensibel/rohbelege-R12-A/gegenprobe-einmalbetraege-2026-08-13.txt`
(git-ignoriert).

- ⭐ **Nenner ist der BETRAG, nicht der Anbieter: 20 von 20
  Einzelbeträgen** haben eine eigene Fundzeile — Klasse A/B am Rohbeleg
  (W1 1 · W2 2 · W3 2 · W4 2 · W5 3 · W6 3 = **13 von 13**), Klasse C an
  der Ur-Quelle `fund/wettbewerbsbild.md` (M2 4 · M4 3 = **7 von 7**).
  Rohbelege aus `sensibel/rohbelege-R11-A/` (Abzüge vom 12.08.2026, nur
  gelesen).
  *(Korrigiert nach Prüferbefund **P-10**: Die Erstfassung zählte „6 von
  6 **Anbietern**" — ein Nenner, der gar nicht anders ausfallen kann,
  sobald je Anbieter ein Treffer genügt, während der Satz daneben
  „jeder Einmalbetrag" behauptete. Tatsächlich fehlten die Fundzeilen zu
  **W5 4.050 €** und **M2 599/799/799 €**; beide sind nachgezogen, die
  Werte waren richtig — **der Befund betraf den Beleg, nicht die
  Zahl**. W5 4.050 € trägt die Zeile „Obere Orientierung … bis rund
  4.200 €".)*
- **Positivkontrolle je Datei:** der Anbietername musste treffen — 5 bis
  17 Zeilen je Datei ✔ (die Suche funktioniert also je Kanal, nicht nur
  im Sammellauf).
- **Gegenkontrolle:** zwei erfundene Beträge (1.921 € bei W1, 7.001 €
  bei W6) → **0 Treffer** ✔ (die Suche kann also scheitern).
- **M2 und M4** (Klasse C, Bestandsanker) wurden gegen die **Ur-Quelle**
  `fund/wettbewerbsbild.md` geprüft, nicht nur gegen
  `preismodell-optionen.md` ✔.
- **Nicht gegengeprüft:** M6 und Straiv — beide führen **keinen
  Betrag**, es gibt nichts zu prüfen. M1 (Gegenfall) wurde nicht erneut
  geprüft; er stammt aus dem geprüften Bestand (② R5/R6).

⚠️ **Was diese Gegenprobe leistet und was nicht:** Sie belegt die
**Anwesenheit** des Betrags im Rohbeleg und seine **Zuordnung** zum
Anbieter (jede Datei ist anbieterrein). Sie belegt **nicht**, dass die
Rohbelege den heutigen Live-Stand der Seiten wiedergeben — es sind
Abzüge vom 12.08.2026.

⚠️ **Ein Präzisierungsbefund gegenüber dem Vorgängerdokument:**
`preismodell-optionen.md` führt W1 in der Tabelle als „**1.920 €**" und
in § 7.1 als „verlangt 1.920 € Einrichtung". Der Rohbeleg sagt
wörtlich: „**Pakete starten bei** 1.920 Euro Einrichtung … Der genaue
Preis hängt von der Anzahl und Komplexität der Workflows ab." Es ist
also ein **„ab"-Wert**. Diese Liste führt ihn deshalb als **„ab
1.920 €"**. Die Richtung des Fehlers ist harmlos (der reale Preis liegt
eher höher), die Klasse nicht: Ein „ab"-Wert, der als Festpreis zitiert
wird, sieht in einer Spanne wie eine Obergrenze aus.

---

## 6. Was diese Liste NICHT entscheidet

| Punkt | Stand | Träger / nächster Schritt |
|---|---|---|
| **Preishöhe (F-III)** — Grundgebühr, Zimmeranteil, konkrete Startgebühr | **offen** | ⭐ **Entscheider: der USER.** Das Briefing 13.08.2026 führt „**Startgebühr-HÖHE (nach MKT-Schätzung + E-6)**" ausdrücklich unter „**Offene User-Entscheide**" — die Reihenfolge lautet also: **MKT liefert die Schätzung → E-6 liefert den Aufwand → der User entscheidet.** E-6 (Ruffy/heypensio) und E-7 (FUND2-Gespräch ~23.08.) sind **Zulieferer, keine Entscheider**; sie **ermitteln** die Höhe nicht, sie machen sie entscheidbar. *(Ergänzt nach Prüferbefund P-05 — die Erstfassung nannte nur die Zulieferer und ließ die Zeile ohne Träger.)* |
| **Architektur-Entscheid** (eigener Server je Kunde ↔ geteilte Plattform) | **NICHT gefallen** | heypensio / Gesellschafter. E-3 setzt nur die **Rechenbasis** dieser Liste |
| **n8n-Lizenzfrage Z-6** | **ungeklärt** — kann die W-B-Rechenbasis kippen | **Ruffy/heypensio** (E-4), gebündelt mit der n8n-MCP-Entscheidungsvorlage, **ohne Kalendertermin** |
| **Höhe und Mechanik des Mehrhaus-Rabatts** | **offen** | `handel/angebotsarchitektur.md` (E-8, R12-B) — **zuerst die Zuordnungsfrage Betreiber ↔ Firmierung, § 4** |
| **Leistungspakete / Paket vs. Baukasten (A2)** | **offen**, war nie mitentschieden | R12-B |
| **K5, K6** (Cloudflare Pages, Domain/DNS) | **nicht erhoben**, nicht 0 € | MKT-HANDEL — vor der ersten echten Rechnung zu beziffern |
| **B1, B2** (Einführungs-, Betreuungsaufwand) | **nicht erhoben** | E-6 |
| **Steuerbasis unserer eigenen Preisangaben** | **offen** | **Z-7**, Zulieferung an die Zentrale — **noch nicht übergeben** |
| **Pilot** (inkl. LEANE) | **kostenlos**, E-5/E-5a — diese Liste gilt für ihn **nicht** | offen bleibt, **wie** die unentgeltliche Leistung gegenüber der dritten Rechtsträgerin dokumentiert wird |
| **Vertragsfragen Z-1…Z-5** | **offen**, kein Träger benannt | Zentrale (Postkorb), Übergabe steht aus |

---

## 7. Zugehörige Dokumente

- `handel/preismodell-optionen.md` — Entscheidungsvorlage mit den
  ✅-Vermerken E-1…E-8 (§ 11), der Kostenbasis (§ 4), dem Marktbild
  (§ 6) und der Break-even-Formel (§ 7.5). **Bei Widerspruch zwischen
  beiden Dokumenten gewinnt `preismodell-optionen.md`** — es ist die
  Quelle, diese Liste die Ableitung.
- `handel/angebotsarchitektur.md` — Leistungspakete und
  Rabatt-Mechanik (E-8, Runde R12-B).
- `handel/foerderarchitektur-beraterrolle.md` — Förderprogramme und
  Beraterrolle; trägt seit dem 13.08. den Marktstundensatz-Nachtrag
  (N-10).
- `fund/wettbewerbsbild.md` — Ur-Quelle der Anker M1–M7.
