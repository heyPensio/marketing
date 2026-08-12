# Preismodell-Optionen (MKT-HANDEL1) — Entscheidungsvorlage

> ## ⚠️ Status und zwei Vorbehalte (bitte zuerst lesen)
>
> **1. Status: ENTSCHEIDUNGSVORLAGE — hier ist nichts entschieden.**
> Dieses Papier stellt einen Optionenraum auf, rechnet ihn gegen die
> eigene Kostenbasis und legt die Entscheidungen einzeln zur Antwort vor.
> Es enthält eine begründete Empfehlung (§ 9), aber keinen Beschluss —
> der Entscheid liegt beim User/den Gesellschaftern. Auch die
> Empfehlung ist eine Meinung dieser Session, kein Ergebnis.
>
> **2. Firmierungs-Vorbehalt: Der Namensentscheid ist OFFEN.**
> Der Rebrand ist entschieden, der neue Name entsteht erst im Strang
> MKT-MARKE; die GbR-Namensführungsfrage hängt am StB-Termin
> (STATUS.md „Nächster konkreter Schritt" Punkt 1, Stand 12.08.2026).
> **Alles Außenwirksame, das aus diesem Papier folgt** — Preisliste,
> Angebotsvorlage, Angebots-Wording, Website-Preisseite — **wartet
> darauf.** Was hier steht, ist die INNENseite der Entscheidung: welches
> Modell wir wollen, nicht wie wir es formulieren.
>
> **Nicht Teil dieser Vorlage (ausdrücklich):**
> - **Die Überführung des Piloten in ein Preismodell.** Pilotleistungen
>   sind kostenlos (heyPensio-Entscheid R3, s. § 2.3); ob und wann der
>   Pilot je zahlt, ist ein eigener, hier ungestellter Entscheid
>   (`<FIRMENWURZEL>\zentrale\ueberlegungen-pricing-betreibermodell-2026-08-10.md`
>   Abschnitt C, „Spannung Pilot").
> - **Der Architektur-Entscheid zum Betreiber-Eigentumsmodell**
>   (eigener Server je Kunde ↔ geteilte Plattform, Eigentümerschaft der
>   Umgebung). Er liegt bei heypensio/den Gesellschaftern und ist NICHT
>   gefallen. Dieses Papier führt ihn als **offene Weiche** (§ 5) und
>   weist je Option aus, was kippt, wenn er anders ausgeht.
> - **Angebotsarchitektur, Angebotsdokument, Preisliste, Lead-Prozess,
>   Kapazitätsdeckel** — Folgearbeiten aus MKT-HANDEL, jeweils nach
>   diesem Entscheid.
> - **Listenaufbau und Versand** (MKT-AKQ, D3.3): gesperrt durch F-7,
>   O-9 und die sieben Bau-Pflichten — unberührt von diesem Papier.
> - **Rechtliche Prüfung** von Vertragsform, Kündigungsregeln,
>   Steuerfolgen. Dieses Papier liefert der Zentrale eine Zulieferung
>   (§ 10), es ersetzt keine Beratung.
>
> **Geprüft:** Ein unabhängiger Prüfer hat die Erstfassung (Commit
> `8f65e40`) gegen alle Quellen gegengelesen — **28 Befunde**
> (4 schwer, 10 mittel, 7 niedrig, 7 Hinweise), sämtlich disponiert.
> **Die vier schweren Befunde lagen alle in Richtung der eigenen
> Empfehlung** und sind repariert; die geänderten Stellen tragen
> jeweils sichtbar, was vorher dastand. Protokoll:
> `protokolle/R11-A-pruefer.md`.
>
> **Quell- und Lesestand:** Repo-Stand `f4e0c55` (12.08.2026, 16:28
> MESZ). Rohbelege dieser Runde: `sensibel/rohbelege-R11-A/`
> (git-ignoriert) — **138 Dateien, 21.263.562 Bytes** (Zählweg:
> `ls -1 | wc -l` bzw. `du -sb`, erhoben 12.08.2026 nach Abschluss der
> Recherche; davon 18 eigene Abzüge/Auswertungen, 63 aus dem
> Recherchelauf 1, 57 aus Lauf 2). Erstellt in Runde R11-A (Session
> Yasopp).

---

## Belegstufen-Legende (gilt für das ganze Dokument)

Jede Zahl und jede Aussage in diesem Papier trägt eine dieser Marken.
Sie sind nicht Dekoration — sie sind der Grund, warum man einzelnen
Sätzen unterschiedlich weit trauen darf.

| Marke | Bedeutung |
|---|---|
| **① GEMESSEN** | In dieser Runde selbst an der Primärquelle erhoben, Rohabzug liegt unter `sensibel/rohbelege-R11-A/`, Zählweg steht an der Zahl. |
| **② BESTAND** | Aus einem eigenen, bereits geprüften Repo-Dokument übernommen — mit Fundstelle und dem Stand SEINES Datums (nicht dem von heute). |
| **③ SELBSTAUSKUNFT** | Angabe eines Anbieters über sich selbst (Website, Preisliste). Kein geprüfter Fakt. |
| **④ ANNAHME** | Eigene Annahme dieser Session. Nicht gemessen. Wer sie ändert, ändert das Ergebnis — deshalb steht jede einzeln und benannt da. |
| **⑤ HYPOTHESE (extern, unbelegt)** | Aussage aus dem ChatGPT-Teil des Rohstoff-Papiers (Abschnitt B). **Nie Anker** — erscheint hier nur als Prüfauftrag oder mit eigenem Beleg daneben. |

---

## 1. Worum es geht, in fünf Sätzen

Wir bauen für Hotels eine betriebene Digitalisierung: Wir richten die
Technik ein (Buchungssystem, Check-in, Meldeschein, Telefon-/
Sprachassistent), wir betreiben sie danach dauerhaft, und wir sind der
Ansprechpartner, wenn etwas klemmt. Für den Piloten machen wir das
kostenlos — ab dem ersten zahlenden Kunden brauchen wir einen Preis.
Die Frage ist nicht nur „wie viel", sondern vor allem: **in welcher
Form** — monatlich kündbar oder mit Bindung, mit oder ohne Startgebühr,
pro Zimmer oder pauschal je Haus. Diese Form entscheidet mehr als der
Betrag: Sie bestimmt, ob wir die Einrichtungsarbeit bezahlt bekommen,
bevor ein Kunde wieder gehen kann. Und sie ist der zweite Sperr-Posten
auf dem Weg zum ersten Abschluss bis Mitte November (§ 9).

---

## 2. Ausgangslage — was schon feststeht

### 2.1 Die Positionen des Users (Primärquelle, KEIN Beschluss)

Aus dem Rohstoff-Papier
`<FIRMENWURZEL>\zentrale\ueberlegungen-pricing-betreibermodell-2026-08-10.md`,
Abschnitt A (Voice-Gespräch User ↔ ChatGPT, 10.08.2026; Roh-Transkript
im `sensibel/`-Bestand der Zentrale). **② BESTAND** — und ausdrücklich
als Ausgangslage geführt, nicht als Entscheid; das Papier selbst trägt
im Kopf „Status: ÜBERLEGUNGEN, KEINE ENTSCHEIDE".

| ID | Position (verdichtet) | Was daraus in diesem Papier wird |
|---|---|---|
| **A1** | „Pricing möglicherweise komplett monatlich, ohne feste Verträge" — Motiv: Unabhängigkeit des Kunden, niedrige Einstiegshürde | Option (i), § 7 — und der Maßstab, an dem sich alle anderen Optionen messen lassen müssen |
| **A2** | Modul-Pricing als Idee: „Modul A kostet X Euro pro Zimmer pro Monat" | Bemessungsachse, § 8 |
| **A3** | Betreiber-Eigentums-Architektur: je Kunde ein eigener Server, n8n + Web-UI auf den Inhaber aufgesetzt, Kunde ist Eigentümer seiner Umgebung und hält den Zugang | Architektur-Weiche, § 5 — **die kostenwirksamste offene Frage dieses Papiers** |
| **A4** | Übergabedoku, die einen neuen Dienstleister abholen würde, als fester Bestandteil | Kostenposten (§ 4) und Verkaufsargument (§ 7) |
| **A5** | Eigene Einsicht, wörtlich: „Witzigerweise macht die Übergabefähigkeit es abhängig machend" | Trägt die Begründung, warum (i) ohne Bindung überhaupt tragfähig sein kann (§ 7) |

⚠️ **Das Zitat in A5 ist der Wortlaut des Rohstoff-Papiers**, das
seinerseits aus dem Transkript zitiert. Diese Session hat das
Roh-Transkript **nicht** gelesen (liegt in der `sensibel/`-Ablage der
Zentrale, außerhalb des Scope) — Belegstufe daher: Zitat zweiter Hand.

### 2.2 Was die externe KI dazu gesagt hat — und warum es hier nichts trägt

Abschnitt B desselben Papiers enthält ChatGPT-Einschätzungen **ohne
jede Quelle**. Das Papier selbst markiert sie als „Hypothesen und
PRÜF-Aufträge, keine Anker". **Drei** davon sind hier einschlägig
*(die Erstfassung nannte zwei und übersah, dass die Bemessungs-Struktur
in § 8/§ 12 der dritte ist — Prüferbefund P-02)*:

- **⑤ „Einführung nie kostenlos vorfinanzieren"** (monatliches Modell
  nur mit Startgebühr ODER Mindestlaufzeit ODER anfangs höherem Preis).
  → **In § 7.5 gegen die eigene Kostenbasis gerechnet**, nicht
  übernommen. Ergebnis dort: Die These ist in der Sache plausibel, aber
  ihre Schärfe („nie") hängt an einer Zahl, die wir noch nicht kennen —
  dem Einführungsaufwand.
- **⑤ Preisrahmen „nicht unter ~1.500 € netto/Monat", 1.500–2.000 für
  kleines Setup, 2.500–4.000 bei mehreren Modulen.**
  → **Wandert in KEINEN Optionssatz dieses Papiers.** Die Zahl hat
  keine Quelle, und das eigene Rohstoff-Papier stuft sie selbst als
  „als Marktanker unbrauchbar" ein. Sie steht hier genau einmal — an
  dieser Stelle, als das, was sie ist. Das Marktbild in § 6 ist
  unabhängig davon erhoben.
- **⑤ „Pro-Zimmer-Preis nur für gästenahe Module; was nicht mit
  Zimmerzahl wächst → Fixpauschale je Haus + Grundgebühr Betreuung/
  Verantwortung; Hardware, Zahlungsgebühren, Fremdlizenzen separat und
  direkt beim Kunden."**
  → **Das ist strukturell die Bemessungs-Option (c) in § 8 und die
  Empfehlung in § 12** — die Erstfassung hat diese Herkunft nicht
  ausgewiesen (P-02). Sie wird hier offengelegt, weil ein Leser sonst
  nicht sehen kann, woher die Struktur stammt: Sie kam aus der externen
  KI, und die eigenen Anker (M1, M7, Straiv) stützen sie
  **nachträglich**. Das ist ein Indiz, kein Beleg — und der Grund,
  warum § 12 das Gegenargument für Option (b) ausdrücklich mitführt.
  Der Zusatz „Hardware, Zahlungsgebühren, Fremdlizenzen direkt beim
  Kunden" ist als eigener Punkt in § 4.3 aufgenommen.

### 2.3 Pilot-Abgrenzung (ein Satz mit Quelle)

**Pilotleistungen sind kostenlos** — **② BESTAND**, Fundstelle
`fund/positionierungspapier.md` § 5 wörtlich: „Pilotleistungen sind
kostenlos (heyPensio-Entscheid R3, Quelle Extraktion B/F2.2):
Referenz/Pilotstatus ist die Gegenleistung". Jedes Preismodell dieses
Papiers gilt ausschließlich für **Folgekunden ab Kunde 1**.

⚠️ **Wie weit der Entscheid reicht, ist NICHT vollständig belegt**
(Korrektur nach Prüferbefund P-11): Die Erstfassung zählte hier drei
Objekte auf — Neumünster, Kiel **und Hostel Boninstraße**. Belegt sind
im Bestand nur **zwei**: Das Rohstoff-Papier (Abschnitt C) nennt
„Pilotleistungen **NMS + Kiel**"; die zitierte Stelle im
Positionierungspapier nennt gar kein Objekt. Repoweit war dieses
Dokument die **einzige** Stelle, die das dritte Objekt mit „kostenlos"
verband. Das ist erheblich, weil Hostel Boninstraße über eine **eigene
Firmierung** läuft (LEANE) — es wäre eine dritte Rechtsträgerin, für
die kein Entscheid vorliegt. **E-5 entscheidet das mit.**

### 2.4 Zielgruppe (weil sie die Bemessungsachse bestimmt)

**② BESTAND**, `fund/positionierungspapier.md` § 3: inhabergeführte
Häuser, Kaufentscheidung beim Inhaber; ausdrücklich **auch größere
Häuser** (E2), Mehr-Objekt-Betriebe eingeschlossen; **keine harte
Zimmer-Obergrenze gesetzt**, solange FUND2 die Entscheiderfrage nicht
beantwortet hat. Pilot-Größenklasse zum Vergleich: „10–25 Einheiten je
Objekt" (Wortlaut ebd. **§ 3.2**; § 5 nennt die Einzelwerte 23 / ~25 /
10–11 Einheiten — die Erstfassung wies § 5 als Fundstelle des Wortlauts
aus, P-27).

⚠️ **Konsequenz, die man leicht übersieht:** Ohne Größen-Obergrenze
muss das Preismodell von ~10 Einheiten bis zu einem Haus mit 100+
Einheiten tragen. Das ist genau der Bereich, in dem eine Fixpauschale
je Haus entweder unten zu teuer oder oben zu billig wird (§ 8).

---

## 3. Die Entscheidung zerfällt in drei getrennte Fragen

Der häufigste Fehler an dieser Stelle ist, drei Dinge in einem
„Preismodell" zu verrühren. Sie werden hier getrennt vorgelegt und sind
getrennt beantwortbar:

| Frage | Worum es geht | Behandelt in |
|---|---|---|
| **F-I Vertragsform** | Monatlich kündbar? Mindestlaufzeit? Startgebühr? Sinkender Preis? | § 7 (Optionen i–iv) |
| **F-II Bemessung** | Woran hängt der Preis: Zimmerzahl, Pauschale je Haus, Grundgebühr + Module? | § 8 |
| **F-III Höhe** | Welcher Betrag? | **Bewusst offen** — § 6 liefert das Marktbild, § 4 die Kostenuntergrenze; die Höhe ist erst nach F-I/F-II sinnvoll festlegbar und braucht zusätzlich einen Zahlungsbereitschafts-Beleg aus dem Zielkundenumfeld, den wir heute NICHT haben (§ 6.4). |

F-I und F-II sind **unabhängig** voneinander: Jede Vertragsform
funktioniert mit jeder Bemessung.

---

## 4. Kostenbasis — was uns ein Kunde im Monat kostet

Der Sinn dieses Abschnitts: Eine Preisuntergrenze, die wir selbst
belegen können, statt eine Zahl zu übernehmen. **Alle Beträge mit
Schlüsselspalte, Zählweg und Steuerbasis.**

### 4.1 Direkte laufende Systemkosten je Kunde

| Schlüssel | Position | Betrag | Einheit / Scope | Steuerbasis | Belegstufe + Zählweg |
|---|---|---|---|---|---|
| **K1** | Hetzner Cloud CX33 (4 vCPU, 8 GB RAM, 80 GB) inkl. primärer IPv4 | **8,99 €** | pro Monat, Standort DE (FSN1/NBG1), Preisobergrenze („max.") | **netto** (s. Steuervermerk unten) | **① GEMESSEN** 12.08.2026 · 8,49 € (Produkt `CLOUD_133`) + 0,50 € (`CLOUD_21`, primäre IPv4) · Zählweg s. § 4.4 |
| **K2** | Hetzner Cloud CX43 (8 vCPU, 16 GB, 160 GB) inkl. IPv4 — die größere Stufe | **16,49 €** | pro Monat, DE | netto | **① GEMESSEN** · 15,99 € (`CLOUD_134`) + 0,50 € |
| **K3** | Supabase Pro (Datenhaltung Meldeschein/Gastprofile) | **ab 25,00 $** für das ERSTE Projekt, **ab 10,00 $** für jedes weitere | pro Monat; wörtlich: „From $ 25 / month **First project included. Additional projects from $10/mo.**" — der Plan hängt an der Organisation, nicht am einzelnen Projekt. Inkl. 10 $/Monat Compute-Guthaben („enough to cover one Micro instance") | **unbekannt** — Preisseite nennt keine Steuerbasis | **① GEMESSEN** 12.08.2026, `supabase-pricing-2026-08-12.html`; Währung USD, kein Kurs umgerechnet. ⚠️ **Korrektur der Erstfassung** (Prüferbefund P-01): Dort stand „25,00 $ pro Monat **pro Projekt**". Das war falsch und hat die gesamte Größenordnung nach oben gezogen. Gegenprobe am Rohbeleg: „per organization" → 0 Treffer, „per project" → 9 Treffer, sämtlich an Feature-Limits, **nie am Preis** (Positivkontrolle „Supabase" 12 ✔, Gegenkontrolle „Platinum" 0 ✔) |
| **K3-alt** | Supabase Free | **0,00 $** | pro Projekt | — | **① GEMESSEN**, ebd. — ⚠️ s. Warnung unten |
| **K4** | Vapi (Sprachkanal Check-in) | **20–40 €** | pro Monat und **Haus der Pilot-Größenklasse (23 Zimmer)**; Spanne 10–80 € über vier Auslastungs-Szenarien. ⚠️ Die Position **skaliert mit der Check-in-Zahl** — für größere Häuser ist sie **nicht erhoben** | Angabe ohne Steuervermerk; Umrechnung mit **④ 0,90 €/$** (Quelle: „kein Tageskurs geprüft") | **② BESTAND** `<FIRMENWURZEL>\heypensio\firzlaff\vapi-kostenanalyse-2026-07.md` § 1.3, Stand **28.07.2026** — gemessen an 62 Calls, **sämtlich Testläufe** (die Quelle: „Alle Calls sind TEST-Läufe (Abnahmetest, E2E) — echte Gastgespräche können länger ausfallen"); das Echtbetriebs-Profil ist eine **gekennzeichnete Annahme der Quelle**. *(Erstfassung schrieb „62 echte Calls" ohne den Vorbehalt und ohne Größen-Scope — Prüferbefund P-09.)* |
| **K5** | Cloudflare Pages (Terminal-WebUI je Kunde) | **nicht erhoben** | — | — | Nicht gemessen. Im Bestand als „ein Pages-Projekt pro Kunde" geführt, ohne Kostenangabe. Als Kostenposition **offen**, nicht als 0 € behauptet |
| **K6** | Domain/DNS je Kunde | **nicht erhoben** | — | — | dito |
| **K7** | n8n (Workflow-Laufzeit) | **0 € Lizenzkosten unterstellt** | self-hosted | — | ⚠️ **④ ANNAHME mit offener Rechtsfrage** — s. § 5.3. Der Bestand nennt die Lizenzfrage als ausdrücklichen Verifikationspunkt VOR Kunde 2 |

**Summe der belegten laufenden Systemkosten je Kunde:** K1 + K3 + K4.
Bewusst **nicht** zu einer einzigen Zahl addiert: Die Positionen tragen
zwei Währungen, zwei Steuerbasen (eine davon unbekannt) und zwei
Bezugsgrößen (je Kunde vs. je Haus) — eine Summe wäre eine erfundene
Genauigkeit.

Als **Größenordnung**, und zwar **getrennt nach der Architektur-Weiche**
(§ 5), weil sie genau hier durchschlägt — ④ ANNAHME auf ① gemessenen
Einzelposten, gerechnet mit ④ 0,90 €/$ und einem Ein-Objekt-Haus:

| Weichenstellung | Server | Supabase | Vapi | **Größenordnung je Kunde/Monat** |
|---|---|---|---|---|
| **W-A** (geteilte Plattform, heutiges Zielbild) — ab Kunde 2 | 0,45–0,90 € (8,99 € ÷ 10–20 Kunden ②) | ~9 € (10 $ Folgeprojekt) | 20–40 € | **rund 30–50 €** |
| **W-B** (eigener Server je Kunde, A3) | 8,99 € | ~9 € (bzw. 22,50 € beim ersten Kunden) | 20–40 € | **rund 38–58 €** |

⚠️ **Zwei Korrekturen der Erstfassung, sichtbar statt still**
(Prüferbefunde P-01 und P-06): Dort stand pauschal „rund 50–70 € pro
Monat und Kunde" — die Zahl beruhte auf dem falschen Supabase-Scope
(P-01) **und** setzte stillschweigend einen eigenen Server je Kunde
voraus, also die Weichenstellung W-B, obwohl § 5 ausdrücklich
verspricht, dass kein Preisentscheid dieses Papiers eine Weiche
voraussetzt. Beides ist oben aufgelöst.

⚠️ **Steuervermerk Hetzner (die Ableitung ist ausgewiesen, nicht
behauptet):** Die Preisdatei selbst enthält keinen Steuervermerk. Die
Website lädt daneben eine eigene Steuertabelle
(`live_data_vat.json`, ① gemessen: DE 19 %, AT 20 %, CH 8,1 %,
„Alle anderen" 0 %) und rechnet sie auf die Beträge auf. **Daraus
folgt: Die Beträge in der Preisdatei sind die Netto-Basis.** Das ist
eine begründete Ableitung aus zwei zusammengehörigen Dateien, kein
Zitat eines Netto-Vermerks. Brutto DE für K1 wäre 10,70 € (8,99 × 1,19,
selbst gerechnet).

⚠️ **Warnung zu K3-alt (Supabase Free):** Der eigene Architektur-Bestand
nennt „Free-Tier pro Projekt" als Zielbild
(`<FIRMENWURZEL>\heypensio\blueprint\architektur-multi-kunden.md`,
Stand 14.07.2026). Ob der Free-Tier für ein produktiv laufendes Hotel
(Meldescheine = personenbezogene Daten, tägliche Cronläufe, Backups)
trägt, ist in dieser Runde **nicht geprüft** — die Preisseite nennt für
Pro u. a. „Daily backups (7 day retention)" und „8 GB disk size per
project" ③. **Für eine Preiskalkulation ist K3 (Pro) der ehrliche
Ansatz, nicht K3-alt.** Wer mit 0 € rechnet, rechnet mit einem
ungeprüften Zustand.

### 4.2 Der Posten, der die Rechnung dominiert: Betreuung

Die Systemkosten sind **nicht** der teure Teil. Teuer ist die
Arbeitszeit — Einrichtung, Betreuung, Monitoring, Störungsbehebung,
persönliche Kontaktpunkte.

| Schlüssel | Position | Wert | Belegstufe |
|---|---|---|---|
| **B1** | Einführungsaufwand je Kunde (Einrichtung Server/Instanz, Workflows importieren, Credentials, Property-Setup, Raten, Tests, Schulung, Übergabedoku) | **nicht erhoben** | ⚠️ **④ offen** — der Bestand beschreibt den Vorgang qualitativ als **manuell** (Vorlage kopieren, Platzhalter füllen, in neue Instanz importieren, Credentials wählen, aktivieren, Webhook-URLs notieren; `blueprint/n8n-vorlagen/README.md`) und hält fest, dass **kein gebauter `/kunde-init` gefunden wurde** (`<FIRMENWURZEL>\heypensio\protokolle\R38-CODEX-C-bericht.md` § 4.3, ② BESTAND — der Bericht schränkt selbst ein: „‚Kein gebauter Command gefunden' ist enger als ‚ein solcher Command existiert nirgends'"; die Erstfassung schrieb verkürzt „existiert nicht", P-10). Der manuelle Vorgang ist in der Blueprint-README unter der Überschrift **„Einspielen (einmalig je Kunde)"** in vier Schritten beschrieben (selbst gelesen). Eine Stundenzahl steht nirgends im Bestand |
| **B2** | Laufende Betreuung/Monitoring je Kunde und Monat | **nicht erhoben** | ④ offen — dieselbe Lage |
| **B3** | Interner Stundensatz | **nicht festgelegt** — Marktband **125–160 €/h** | ④ offen als EIGENER Satz. Als **Markt**-Orientierung aus drei Quellen: melevo „ab 130 €/Stunde" ③ (§ 6.2, M5) · AngelStone „Stundensatz 160 € netto" ③ (§ 6.3.2, W4, am Rohbeleg selbst gelesen) · LeanFlow nennt Monatspreis **und** Stundendeckel, der Quotient ist **④ unsere eigene Rechnung**: 150 €/1 h, 390 €/3 h, 750 €/6 h → 150 / 130 / **125** €/h. ⚠️ **Zwei Korrekturen** (Prüferbefund P-05): (a) 750 ÷ 6 = **125**, nicht 130 — das Band beginnt bei 125; (b) weil „bis 1/3/6 Stunden" ein **Deckel** ist, ist der Quotient die **Untergrenze** des effektiven Satzes, kein Stundensatz. **Das ist ein Marktpreis, nicht unsere Kostenrechnung** — ein interner Kostensatz liegt darunter |

> ⭐ **Das ist die wichtigste Lücke dieses Papiers, und sie steht
> absichtlich hier vorn statt in einer Fußnote:** Ohne B1 und B3 lässt
> sich weder eine Startgebühr beziffern noch die Frage beantworten, ab
> welchem Monat ein Kunde profitabel ist. **Was die Vorlage stattdessen
> liefert, ist die Rechenformel (§ 7.5) — sobald zwei Zahlen feststehen,
> rechnet sie sich in fünf Minuten aus.** Ein Vorschlag, wie die Zahlen
> zu bekommen sind, steht in § 11 als Entscheidungspunkt E-6.

### 4.3 Was NICHT bei uns anfällt (sondern direkt beim Hotel)

**② BESTAND**, `<FIRMENWURZEL>\heypensio\firzlaff\vapi-kostenanalyse-2026-07.md`
§ 2 (Stand 28.07.2026, „Stand Repo-Doku"): Terminal-Hardware
~9.860 € netto (kiosk.eu-Angebot NMS), keyota laufend 115 €/Monat,
Everlast 8.400 €. Diese Positionen laufen beim Kunden — sie sind für
unser Preismodell nur insofern relevant, als sie **das Budget des
Kunden vorbelasten** und die Zahlungsbereitschaft für unsere monatliche
Rechnung mitbestimmen.

**Noch nicht zugeordnet** (ergänzt nach Prüferbefund P-12; das
Rohstoff-Papier nennt sie in B-Punkt 3, sie waren in der Erstfassung
verschwunden): **Zahlungs-/Transaktionsgebühren** (Payment ist
Bestandteil der Guest-Journey-Strecke) und **Fremdlizenzen**. Wer sie
trägt und ob sie über uns laufen, ist offen — der Rohstoff-Vorschlag
lautet „separat und direkt beim Kunden" ⑤. Aufgenommen als
Zulieferungspunkt **Z-5** (§ 10).

⚠️ Die Zahlen tragen den Stand ihres Datums (28.07.2026) und stammen
aus einer Kostenanalyse mit anderem Zweck. Vor jeder Verwendung nach
außen an der Primärquelle (Angebot) prüfen.

### 4.4 Zählweg der Hetzner-Zahlen (nachvollziehbar, nicht geglaubt)

1. Die Kategorieseiten `hetzner.com/de/cloud/{regular-performance,
   cost-optimized,general-purpose}/` wurden per `curl.exe` als Roh-HTML
   archiviert (`sensibel/rohbelege-R11-A/hetzner-de_cloud_*.html`).
2. ⚠️ **Diese Seiten enthalten KEINE Preiszahlen.** Die Tabellenzelle
   trägt nur eine Web-Komponente
   `<ho-price-container product-key="CLOUD_133+CLOUD_21">`. Ein
   Textabzug der Seite liefert „max. /Monat" ohne Betrag. **Wer hier
   „keine Preise gefunden" notiert hätte, hätte einen Werkzeugbefund
   als Sachbefund berichtet.**
3. Die Beträge liegen in der Datei, die die Seite selbst nachlädt:
   `https://www.hetzner.com/_resources/app/data/app/live_data_prices.json`
   (Fundweg: Endpoint-Konstante im Skript
   `/_resources/themes/static/dist/vendors.js`, ebenfalls archiviert).
   Abzug: `hetzner-live_data_prices.json` (263.299 Bytes).
4. Auswertung per Skript: je Matrix-Zeile Servername → `product-key`
   → Preis für `countryCode: "de"`, `monthly.EUR`; **für Produkte ohne
   Länderbindung der Eintrag `datacenter: "ALL"`** — das betrifft die
   primäre IPv4 `CLOUD_21`, die sonst still herausgefallen wäre und in
   jeder der 25 Zeilen steckt (Präzisierung nach Prüferbefund P-15; der
   Betrag war richtig, der beschriebene Zählweg unvollständig). Ausgabe:
   `hetzner-preise-auswertung-2026-08-12.txt`.
5. **Kontrollen im selben Lauf:** (a) erfundener Schlüssel
   `CLOUD_999` → `null` ✔ (die Suche kann also scheitern);
   (b) vorhandener Schlüssel `CLOUD_21` → 0,50 € ✔;
   (c) **20 von 25 Matrix-Zeilen** lieferten einen DE-Preis. Die
   **5 Nulltreffer** (CPX11/21/31/41/51) sind **erklärt, nicht
   übergangen**: Diese Produkte führen im JSON ausschließlich
   US-Standorte (ASH1/HIL1). Geprüft wurde das zunächst an **3 von 5**
   (`CLOUD_121`, `CLOUD_125`, `CLOUD_129`); die restlichen zwei
   (`CLOUD_123`, `CLOUD_127`) hat der Prüfer nachgezogen — **5 von 5
   bestätigt** (P-16). Sie sind an deutschen Standorten nicht
   angeboten, der Nulltreffer ist also der richtige Wert.

---

## 5. Die Architektur-Weiche (A3) — bleibt in diesem Papier OFFEN

### 5.1 Was der Bestand sagt

**Heutiges Zielbild** (② BESTAND,
`<FIRMENWURZEL>\heypensio\blueprint\architektur-multi-kunden.md`,
entschieden 14.07.2026, im Kopf ausdrücklich **„Status: GEPARKTES
MODUL"**, Umsetzung erst beim Onboarding von Kunde 2):

Kurzformel dort — **wörtliches Zitat**: „Hardware & Betriebsplattform
teilen, Daten & Laufzeit pro Kunde isolieren."

**Zusammenfassung des Zielbilds durch diese Session** (Paraphrase, kein
Wortlaut — die Erstfassung stellte beides in einen gemeinsamen
Zitatblock, was den ganzen Block als Wortlaut auswies; P-22): EIN
Hetzner-Server + EIN Coolify für alle; eine n8n-Instanz pro Kunde; ein
Supabase-Projekt pro Kunde; Vapi zentral. Die eingebetteten
Anführungen stammen wörtlich aus der Quelle: „Managed Service — Kunde
pflegt nie ein Vapi-Konto" und, als Begründung der Server-Teilung,
„eine n8n-Instanz ≈ 300 MB RAM → ein 8-GB-Server trägt 10–20 Kunden".

**Die User-Position A3 kippt genau diesen Punkt:** eigener Server je
Kunde, Eigentümerschaft und Zugang beim Kunden/Inhaber.

### 5.2 Was das kostet — und was der Bestand dazu wirklich sagt

Im selben Dokument steht unter der Überschrift **„Verworfene
Alternativen"**:

> „**Alles pro Kunde (eigener Server + eigenes Coolify je Kunde):**
> ~15–20 €/Monat Fixkosten **+ komplettes Server-Management pro Kunde**
> — bei Pensionsgrößen unnötig. Bleibt Option für einen Großkunden mit
> Anforderung ‚dedizierte Infrastruktur'."

⚠️ **Drei Dinge gehören zwingend an diese Zahl** (sie sind in einer
früheren Weiterverwendung im heypensio-Repo bereits einmal verloren
gegangen und dort vom Prüfer gefangen worden — R31-B-Prüferbefund 2.3):
(a) Es ist die Kostenangabe einer **ausdrücklich verworfenen**
Variante, kein Bestandspreis; (b) der zweite Kostenteil **„+ komplettes
Server-Management pro Kunde"** ist der eigentliche Grund der
Verwerfung; (c) es heißt „je **Kunde**", nicht „je Umgebung". Stand der
Quelle: **14.07.2026**, keine Steuerbasis angegeben.

**Gegenprobe mit heutigen Zahlen (① GEMESSEN, § 4.1):** Ein CX33 kostet
heute 8,99 €/Monat netto, ein CX43 16,49 €. Die Bestandsangabe
„~15–20 €/Monat" ist damit **in der Größenordnung plausibel**, aber sie
misst nicht dasselbe (dort inkl. Coolify-Betrieb, Stand vier Wochen
älter). Beide Zahlen stehen hier nebeneinander, keine ersetzt die
andere.

### 5.3 ⭐ Die Weiche hat eine RECHTLICHE Kante, nicht nur eine Kosten-Kante

Derselbe Architektur-Bestand führt als **Verifikationspunkt VOR
Kunde 2** (② BESTAND, wörtlich):

> „**n8n Sustainable Use License:** erlaubt internen Geschäftsbetrieb,
> verbietet n8n ‚als Service anzubieten'. Kunden bekommen nie
> n8n-Zugang (heyPensio betreibt die Workflows als eigenes Werkzeug) →
> spricht für ‚erlaubt', aber vor Kunde 2 schriftlich absichern
> (n8n-Sales/FAQ)."

**Das ist preismodell-relevant, und zwar unbequem:** Die Begründung,
warum die Lizenz erlaubt sein soll, lautet „**Kunde bekommt nie
n8n-Zugang**". Die User-Position A3 will dem Kunden genau diesen Zugang
geben („der Kunde ist Eigentümer seiner Umgebung und hält den Zugang").
**Die Architektur-Weiche kann also die Lizenz-Argumentation entwerten,
auf der der heutige Betrieb ruht.**

> **Belegstufe dieser Aussage, sauber getrennt:** Dass der Bestand die
> Lizenzfrage als offenen Verifikationspunkt führt und mit dem
> fehlenden Kundenzugang begründet, ist **② BESTAND (belegt)**. Dass
> ein Kundenzugang die Lizenzlage tatsächlich kippt, ist eine
> **Folgerung dieser Session (④)** — die n8n-Lizenz selbst wurde in
> dieser Runde **nicht gelesen**. Das ist kein Nebenpunkt für die
> Fußnote: Es ist ein möglicher K.-o.-Punkt für A3 und gehört vor jeden
> Preisentscheid geklärt, der A3 voraussetzt.

Zweite Kollision derselben Art (② BESTAND, R38-CODEX-C-Bericht § 7,
Kollisionen K03/K04): Der Bestand hält fest „Kunde erhält keinen
n8n-Zugang" (**K03**, Klassifikation dort: „direkter Eigentums-/
Zugangswiderspruch") und „ein Vapi-Konto; Kunde pflegt nie ein
Vapi-Konto" (**K04**, Klassifikation dort: „direkter Konten-/
Vertragswiderspruch, **sofern Vapi zur Eigentumsumgebung zählt**").
*(Erstfassung fasste beide unter eine Klassifikation und ließ die
Bedingung bei K04 weg — genau sie ist der offene Punkt; Prüferbefund
P-10.)* Der Bericht ist ausdrücklich eine **Ist-Aufnahme ohne Bewertung
und ohne Empfehlung** (② — Inventur, keine Entscheidung).

**Damit dieser Befund nicht neuer wirkt, als er ist:** Der Bestand
führt die Lizenzprüfung bereits selbst als offenen Posten (K26:
„Architektur verlangt vor Kunde 2 noch Lizenzprüfung für n8n und
Multi-Org-Prüfung für Vapi", ebenso das Offene-Punkte-Register in § 8
des Berichts). **Neu ist hier nicht die Frage, sondern ihre
Verschärfung durch A3** — und ihre Relevanz für den Preisentscheid.

### 5.4 Was das je Preisoption bedeutet

| Weichenstellung | Kostenwirkung je Kunde/Monat | Wirkung auf das Preismodell |
|---|---|---|
| **W-A: Geteilte Plattform** (heutiges Zielbild) | Server-Anteil klein (ein 8-GB-Server für 10–20 Kunden ② → rechnerisch ~0,45–0,90 €/Kunde bei K1; **④ eigene Rechnung**, nicht gemessen) | Niedrigste Kostenuntergrenze; alle vier Optionen tragfähig; Skaleneffekt ab Kunde 3–4 spürbar |
| **W-B: Eigener Server je Kunde, Eigentum beim Kunden** (A3) | Voller Server je Kunde (K1/K2: 8,99–16,49 € ①) **plus** „komplettes Server-Management pro Kunde" ② — die Arbeitszeit, nicht die Miete, ist der Kostentreiber | Hebt die Untergrenze; **stärkt aber das Verkaufsargument** (Unabhängigkeit, Übergabefähigkeit, A5) und passt zu Option (i). ⚠️ Erst nach Klärung § 5.3 |

**Die Weiche bleibt offen.** Kein Preisentscheid dieses Papiers setzt
W-A oder W-B voraus; jede Option in § 7 nennt, was sie braucht.

---

## 6. Marktbild — was Nachbaranbieter öffentlich verlangen

### 6.1 Vorbemerkung zur Vergleichbarkeit (die unbequeme zuerst)

**Es gibt für unser Leistungsbild keinen direkt vergleichbaren
veröffentlichten Preis.** Was es gibt, sind Nachbarmärkte mit teils
veröffentlichten Preisen. Jede Zahl unten misst ein ANDERES
Leistungsbild als unseres; sie taugt als **Zahlungsbereitschafts-
Indiz**, nie als Preisschild. Diese Grenze steht hier oben und nicht
unten, weil sie sonst beim Weiterverwenden verloren geht.

### 6.2 Belegte Anker aus dem eigenen Bestand (② BESTAND, R5/R6, geprüft)

⚠️ **Korrektur einer Auftragsprämisse (sichtbar, nicht still
repariert):** Der Auftrag dieser Runde nannte als „einzigen belegten
Bestand-Anker" die Verbund-Kooperationen (781,67–996,77 €/Monat).
**Das trifft nicht zu.** `fund/wettbewerbsbild.md` trägt mehrere
belegte, prüfergeprüfte Preisanker. Der Auftrag hätte hier zu einer
Recherche geführt, die vorhandene eigene Belege ignoriert. Die
vollständige Liste:

| Schlüssel | Anbieter / Gegenstand | Betrag | Scope | Steuerbasis | Fundstelle (② BESTAND) |
|---|---|---|---|---|---|
| **M1** | AKZENT Hotels e.V., Mitgliedsbeitrag | **781,67 € / 925,07 € / 996,77 €** | pro Monat, für **20 / 40 / 50 Zimmer**, „Preise gültig ab 2026" | **zzgl. MwSt.** (belegt) | `fund/wettbewerbsbild.md` § B11.5; alle drei Summen dort selbst nachgerechnet |
| **M2** | iiQ-Check (ConsultiiQ GmbH), 4 Tarife | **79 / 109 / 139 / 169 €** pro Monat **+ 399 / 599 / 799 / 799 €** einmalige Einrichtung | **unabhängig von der Zimmerzahl** („Du zahlst immer denselben fairen Preis" ③), Preisgarantie bis 5 Jahre ③ | **unbekannt** — Suchraum 5 Seiten, Muster `MwSt\|Mehrwertsteuer\|Umsatzsteuer\|netto\|brutto` → 0 Treffer, Positivkontrolle „iiQ" traf 7–14× je Datei | ebd. § B10.4, Stand 10.08.2026 |
| **M3** | melevo, Retainer „Marketing & Digitalisierung" | **603 € / 1.150 € / 2.200 €** pro Monat (5/10/20 „Arbeitspunkte"), **Startgebühr 0 €**, **Mindestlaufzeit 12 Monate** | je Haus, Leistung u. a. „Übernahme von Aufgaben in der Hotelsoftware" | **nicht angegeben** | ebd. § B5.3 |
| **M4** | melevo, Website | **95 / 145 / 275 €** pro Monat **+ einmalig 1.495 / 2.295 / 4.195 €** | je Website | nicht angegeben | ebd. |
| **M5** | melevo, Projektberatung | **ab 130 €** pro Stunde | — | nicht angegeben | ebd. |
| **M6** | Smart Host (Hotel-CRM) | **399 € / 849 € / 1.599 €** pro Monat | ⚠️ **keine Tarife, sondern „reale annäherungsweise Preisbeispiele"** ③ für 20 Zi./3\* (Base+CRM), 75 Zi./4\*, 100 Zi./5\*; **zusätzlich einmalige Einrichtungsgebühr unbekannter Höhe** | **öffentlich nicht bestimmbar** (Gegenprobe auf Preisseite + AGB: 0 Treffer, Positivkontrolle bestanden) | ebd. § B6.1 |
| **M7** | Apaleo-Store, Conversational-AI-Kategorie (14 Apps) | Mitte **139–799 €/Monat** bzw. **2–6 €/Zimmer/Monat**; Ränder **49–799 €/M** bzw. **1,99–10 €/Zi/M** | Store-Angaben je App, 09.08.2026 | nicht durchgängig angegeben | ebd. § 4.5. ⚠️ Zwei Werte dort ausdrücklich als unplausibel gesperrt (BE-A 18/30 €/Zi/M — mutmaßlich falsch getaggte Einheit) |

**Was M1–M7 zusammen zeigen** (und was nicht):
- **Zwei Preisformen dominieren:** Monatsbetrag je Haus (M1, M3, M6)
  und Monatsbetrag je Zimmer (M7, teilweise). Ein reiner
  Pro-Zimmer-Preis ist im Software-Segment üblich, im
  Agentur-/Beratungssegment praktisch nicht.
- **Einmalige Einrichtungsgebühren sind Marktstandard, wo Software
  eingerichtet wird** (M2: 399–799 €; M4: 1.495–4.195 €; M6: Betrag
  unbekannt, aber vorhanden) — **und fehlen dort, wo laufende Beratung
  verkauft wird** (M3: Startgebühr ausdrücklich 0 €, dafür 12 Monate
  Mindestlaufzeit). **Das ist der belegte Kern der Frage F-I:** Der
  Markt deckt seine Einführungskosten entweder über eine Startgebühr
  oder über eine Mindestlaufzeit — bei M3 sichtbar als Tausch.
- **Ein 20-Zimmer-Privathotel gibt belegbar rund 780 € im Monat für ein
  Marketing-/Vertriebs-/Beratungsbündel aus** (M1). Das ist eine
  Zahlungsbereitschaft für ein anderes Leistungsbild, kein Preisschild
  für uns — so steht es auch in der Quelle.
- **Was M1–M7 NICHT zeigen:** keinen einzigen Preis für „betriebene
  Automatisierung mit eigener Infrastruktur je Kunde". Das ist unser
  Feld, und dafür gibt es im erhobenen Bestand keinen Anker.

### 6.3 Ergänzende Web-Recherche dieser Runde (12.08.2026)

Zwei Recherche-Läufe, alle Seiten per `curl` selbst gezogen und im
Rohtext gelesen (kein KI-Zusammenfasser als Quelle), Roh-HTML
mitarchiviert. **Nach dem Rücklauf wurden die gemeldeten Zahlen
mechanisch gegen die Rohbelege gegengeprüft** — Protokoll:
`sensibel/rohbelege-R11-A/gegenprobe-agentenzahlen-2026-08-12.txt`:
**18 Proben über die Anker M3–M5, Straiv, W1, W3, W5, W6**, 18 wie
erwartet, davon zwei Gegenkontrollen, die NICHT treffen durften (eine
erfundene Zahl → 0 Treffer ✔; „Kleinunternehmer" bei FoxifAI →
0 Treffer ✔). **Nicht in diesen 18 Proben: W2 und W4** — W4 trägt mit
„160 €/h" eine der drei Säulen des Stundensatz-Bands; der Prüfer hat
sie nachgeholt und am Rohbeleg bestätigt ✔ (P-21). Die fünf zunächst
nicht geöffneten Einmalbeträge (melevo-Website, cStack, LeanFlow) sind
nachträglich ebenfalls einzeln am Rohbeleg gelesen worden ✔.
⚠️ **Was diese Gegenprobe leistet und was nicht:** Sie belegt die
**Anwesenheit** der Zahl im Rohbeleg, nicht ihre **Zuordnung** zum
Schlüssel („130" traf 76×). Die drei Schlüsselstellen unten (Straiv AGB
4.3 und 7.4, FoxifAI-Preissatz) wurden deshalb zusätzlich **im Wortlaut
selbst gelesen** *(die Erstfassung schrieb „vier Schlüsselstellen" und
nannte drei — P-19)*.

#### 6.3.1 ⭐ Straiv — der Haupt-Technikwettbewerber: Preisform belegt, Preishöhe nicht

Straiv GmbH, Stuttgart, ist der nächstliegende Technikwettbewerber
(Online-Check-in, Guest Messaging, Digital Concierge, Kiosk, digitaler
Meldeschein). **Straiv veröffentlicht keine Preise** — aber die AGB
(Version 1.1, Stand 01.04.2025, Dokumenten-Selbstangabe) legen die
**Preisform** offen, und die ist für unsere Fragen F-I/F-II
aufschlussreicher als jeder Betrag:

| Merkmal | Regelung (③ Anbieter-AGB, selbst im Wortlaut gelesen) | Bedeutung für uns |
|---|---|---|
| **Preisschlüssel** | Ziff. 4.3: Der Kunde meldet, wenn „die Anzahl seiner Zimmer die bei Vertragsabschluss vereinbarte Anzahl … überschreitet". **Auslösebedingung wörtlich:** „Übersteigt die Anzahl der **neu hinzugekommenen** Zimmer die bis dahin gebuchte Zimmeranzahl, so findet die Anpassung der Vergütung mit Wirkung zum darauffolgenden Monat statt"; **keine Rückerstattung bei sinkender Zimmerzahl** während einer Mindestlaufzeit | **Der nächstliegende Technikwettbewerber macht die Zimmerzahl zum vertraglichen Vergütungsparameter.** ⚠️ **Ob linear pro Zimmer oder gestaffelt, ist aus der Klausel NICHT ersichtlich** — eine Anpassung, die erst bei einer Verdopplung greift, passt zu einer Größen-Staffel mindestens so gut. Das Argument trägt für (a) **und** für (b) mit Staffel. *(Erstfassung schrieb „Marktführer" — unbelegt, und im eigenen Bestand ist eine gleichartige Steigerung schon einmal gestrichen worden; P-07/P-26.)* |
| **Einrichtungsgebühr** | Ziff. 7.2 wörtlich: „Mit einem etwaig vereinbarten Startdatum stellt Straiv dem Kunden **mögliche** einmalige Gebühren für das Onboarding und die Einrichtung der Software in Rechnung." Höhe „in der aktuell gültigen Paketübersicht" — nicht öffentlich | Eine **Kann-Regelung des Einzelvertrags**, kein belegter Modellbestandteil. Ob sie im Regelfall anfällt, ist nicht öffentlich. Die Marktpraxis-Aussage stützt sich deshalb auf M2/M4 und W1–W6, **nicht** auf Straiv. *(Erstfassung machte aus „mögliche" ein „existiert" und daraus „Marktpraxis" — zwei Verstärkungsschritte in einer Zelle; P-08.)* |
| **Laufzeit** | Ziff. 11.1/11.2: **beide** Modelle existieren (monatlich ODER jährlich+), Kündigung 3 Monate zum Laufzeitende bzw. 4 Wochen zum Monatsende | Auch der Wettbewerb legt sich nicht auf ein Laufzeitmodell fest |
| **Zahlungsturnus** | Ziff. 7.1: **jährlich im Voraus**, sofern nichts anderes vereinbart | Ein dritter Weg zur Einführungskosten-Deckung, den unser Optionenraum bisher nicht führt — s. Hinweis unten |
| **Steuerbasis** | Ziff. 7.4 wörtlich: „Sämtliche Preise verstehen sich zuzüglich der gesetzlich gültigen Mehrwertsteuer" | **netto — belegt** (einer der wenigen Anker mit klarer Steuerbasis) |
| **Preisanpassung** | Ziff. 7.7: Erhöhung mit 3 Monaten Ankündigung; bei Mindestlaufzeit frühestens 12 Monate nach Vertragsbeginn — **und gekoppelt an ein Sonderkündigungsrecht des Kunden binnen sechs Wochen** („Der Kunde hat bei einer Anpassung der Vergütung das Recht, den jeweiligen Einzelauftrag innerhalb einer Frist von sechs Wochen … zu kündigen") | Muster für Z-4 (§ 10) — **und zwar vollständig**: Genau dieser Gegenpol macht aus dem Anpassungsrecht etwas anderes als ein einseitiges Preisdiktat. *(Erstfassung referierte 7.7 ohne das Sonderkündigungsrecht — P-25.)* |
| **Erfolgsabhängig** | Upselling-Modul: **5 % Kommission** „ausschließlich auf tatsächlich über das System verkaufte Zusatzleistungen" ③ | Eine fünfte, hier nicht ausgearbeitete Preisform (s. u.) |

**Negativbefund mit Suchraum und Positivkontrolle:** Keine Paket-/
Lizenzpreise über **21 Inhaltsseiten** (DE-/EN-Start, 8 Lösungsseiten,
3 Hoteltypseiten, FAQs, Demo, Kontakt, Über uns, White Papers,
Tech-Partner, AGB, AVV), Muster `[0-9][0-9.,]*\s?(€|EUR|Euro)`.
Positivkontrolle A: Prozentwerte trafen in **8 der 21 Dateien** ✔
(⚠️ die vom Recherchelauf gemeldete Trefferzahl „13" ließ sich unter
keiner von vier Musterschreibweisen reproduzieren; die Dateizahl 8
reproduziert. Die Kontrolle greift in jeder Variante — aber eine Zahl
ohne Zählweg ist nicht prüfbar und steht deshalb hier nicht mehr;
P-20). Positivkontrolle B: „Straiv" traf in 21 von 21 Dateien ✔.
Ergebnis:
genau zwei Eurobeträge im gesamten Suchraum, beide keine Paketpreise.
Zusätzlich: **0 Treffer** auf `pric|price|plan|cost|package` in den
hrefs beider Startseiten — es gibt keine Preisseite in der Navigation.
⚠️ **Das Negativ ist ausdrücklich nicht total:** Ein Preis IST
veröffentlicht — die 5 %-Kommission. Sie ist ein Prozentwert und für
ein Geldbetrags-Muster strukturell unauffindbar; gefunden erst über
einen zweiten Lauf. Ein reiner Euro-Grep hätte hier ein falsches
Vollnegativ erzeugt.

> ⭐ **Preisform, die dieses Papier bisher nicht führt — und die der
> Wettbewerb nutzt:** (1) **Jährliche Vorauszahlung** (Straiv 7.1) deckt
> Einführungskosten aus dem Cashflow, ohne Startgebühr und ohne
> vertragliche Bindung im engeren Sinn. (2) **Erfolgsabhängige
> Komponente** (5 % auf vermittelte Zusatzumsätze). Beide sind nicht
> Teil des beauftragten Optionenraums (i)–(iv) und werden hier **nicht**
> ausgearbeitet — sie stehen als Hinweis, damit der Entscheider weiß,
> dass der Raum größer ist als die vier vorgelegten Optionen. Zielort:
> Angebotsarchitektur (E-8).

#### 6.3.2 Der Nachbarmarkt „betriebene Automatisierung" (DACH)

Anbieter, die Automatisierung als **betriebenen Dienst mit
Monatspreis** verkaufen. Alle Werte ③ **Anbieter-Selbstauskunft von der
eigenen Website**, kein Abschlussbeleg.

| Schlüssel | Anbieter | Sitz | Monatspreis | Einmalig | Laufzeit | Steuerbasis | Leistungsbild |
|---|---|---|---|---|---|---|---|
| **W1** | **FoxifAI** (Huke & Jacobi & Pistorio eGbR) | DE, Bochum | **ab 100 €** | **1.920 €** | **jährlich kündbar** (FAQ ausdrücklich: monatliche Kündigung nein) | keine Angabe (USt-ID vorhanden) | ⭐ **n8n-Workflows auf deutschen Servern, laufender Betrieb, Wartung, persönlicher Ansprechpartner** — die dichteste Entsprechung unserer Bauform im ganzen Bestand |
| **W2** | Smartbetrieb GmbH | DE, Ronnenberg | **ab 49 €** (Rabatt ab 3/5 Workflows) | SmartAudit 490 € (anrechenbar) + Setup ab 300 € | nicht genannt | keine Angabe | Hosting DE, Backups, Updates, Monitoring, Support |
| **W3** | Prozessmeister (T. Brandt) | DE, Hamburg | **ab 99 € / 199 € / 999 €** (drei Stufen) | ab 490 € / ab 1.990 € | nicht erhoben (clientseitig nachgeladen) | **„Alle Preise zzgl. MwSt."** | 3 bzw. 10 „KI-Agenten", 24/7-Support, Analytics |
| **W4** | AngelStone Media GmbH | **AT**, Wien | **ab 50 €** (Websites-Care) / **ab 500 €** (Digitalisierung & KI, „Wartung & Weiterentwicklung") | KI-Pilot ab 3.000 € / KI-System ab 10.000 € | jährlich kündbar | **netto** (explizit); Stundensatz 160 € netto | Modell-Updates, Prompt-Tuning, Monitoring, Review |
| **W5** | cStack Solutions | DE, Krefeld | 120 / 275 / **499 €** | 900 / 1.980 / 4.050 € („ab") | monatlich kündbar | „Umsatzsteuerbefreit (Kleinunternehmerregelung)" — **die Quelle nennt keine Norm** | n8n-Monitoring + 1 Anpassung/Monat bis 3 h/Monat |
| **W6** | LeanFlow Consulting | DE, Hamburg | 150 / 390 / **750 €** | 7.000 / 9.500 / 15.000 € („ab") | nicht genannt | Kleinunternehmer (§ 19 UStG) | Monitoring + 1/3/6 h Anpassung je Monat; **Microsoft-Stack, nicht n8n** |

**⭐ Der belastbarste Anker dieses Laufs ist kein Monatspreis, sondern
ein Stundensatz.** W4 nennt „Stundensatz 160 € netto" ③; M5 (melevo,
② Bestand) nennt „ab 130 €/Stunde" ③; bei W6 nennt die Quelle
Monatspreis **und** Stundendeckel („bis 1 / 3 / 6 Stunden pro Monat"),
der Quotient ist **④ unsere Rechnung**: 150 / 130 / 125 €/h — und weil
es ein Deckel ist, sind das **Untergrenzen**. **Drei Quellen landen bei
125–160 €/Stunde**, zwei davon als Anbieterangabe, eine als eigene
Ableitung. Das ist der erste belegte Anhalt für B3 (§ 4.2) — als
**Marktpreis**, nicht als unser Satz. *(Erstfassung schrieb „drei
unabhängige Quellen … 130–160" und stufte die eigene Ableitung als ③
ein — Prüferbefund P-05.)*

**Drei Einschränkungen, die die Monatspreise nach unten verzerren** —
sie gehören an jede Verwendung dieser Tabelle:
1. **W5 und W6 sind Kleinunternehmer** (per Impressum belegt — bei W6
   nennt die Quelle „§ 19 UStG" wörtlich, bei W5 nur
   „Umsatzsteuerbefreit (Kleinunternehmerregelung)"; die Erstfassung
   hatte die Norm von W6 auf W5 mitwandern lassen, P-24). Ihre Beträge
   sind Endpreise ohne USt und mit einem Netto-Preis eines
   regelbesteuerten Anbieters **nicht** direkt vergleichbar.
2. **Keiner der sechs betreibt Sprach-/Telefoniestrecken oder
   meldepflichtige Fachprozesse.** 100–500 €/Monat kaufen dort
   Monitoring plus n Stunden Anpassung — **nicht** die Verantwortung für
   einen Kanal, an dem nachts ein Gast steht. Unser Leistungsbild liegt
   erkennbar darüber; wie weit, ist nicht messbar.
3. **W5 ist als Marktbeleg schwach:** Die Testimonials der Seite lauten
   wörtlich „Placeholder: …", „Max Mustermann", „Anna Beispiel" — eine
   frisch aufgesetzte Seite ohne belegte Kundschaft. Die Zahl steht in
   der Tabelle, weil das Weglassen eines unbequemen Fundes schlechter
   wäre als das Ausweisen seiner Schwäche.
4. ⚠️ **Die Erstfassung hat die untere Kante des Marktbildes
   abgeschnitten** (P-17): Bei W3 fehlte die Einstiegsstufe „ab 99 €",
   bei W4 das Websites-Care-Paket „ab 50 €". Beide Auslassungen hoben
   das Preisbild — und zwar in dieselbe Richtung, in der Einschränkung 2
   eine Verzerrung nach *unten* behauptet. Beide sind jetzt in der
   Tabelle. **Belegstand nach Korrektur: Die Monatspreise dieses
   Nachbarmarkts reichen von rund 50 € bis 999 €**, mit einem
   Schwerpunkt zwischen 100 und 500 €.

⚠️ **Belegstufe W1 (wichtig, weil W1 der nächste Nachbar ist):** Der
Satz „Pakete starten bei 1.920 Euro Einrichtung plus ab 100 Euro
monatlich, jährlich kündbar" steht in einem **Ratgeber-/Vergleichs-
Artikel des Anbieters über sich selbst**, nicht in einem Tarifblatt
(selbst im Rohtext gelesen). Belegstufe: Selbstauskunft in eigenem
Content — eine Stufe unter einer Preisliste.

**Negativbefunde des Laufs** (je mit Suchraum und Positivkontrolle):
kein veröffentlichter Retainer bei skalator.de, remodifyai.com,
n8n-agentur.de/leistungen (0 Treffer auf `CHF|€` im **Roh-HTML**, nicht
nur im Text) · create-dot.com, pixelandprocess.de, fabianstegmaier.com
führen ausschließlich **n8n-Plattform**-Listenpreise (20/50/667 €/Monat),
keine Agenturleistung · psolutions.ch hat eine vollständige Preisliste,
aber **kein** Monatsmodell („laufende Wartung" steht dort ausdrücklich
unter „Nicht enthalten") · ki-kanzlei.at und automatisierung.at
veröffentlichen keine Preise · agorax.agency = **schwaches Negativ**
(228 KB HTML ergaben 1,6 KB Text, Unterseiten ungeprüft — als
Nicht-Ergebnis geführt, nicht als Null).

**Zwei Fehlalarme, die der Lauf selbst gefangen hat** (protokolliert
statt geglättet, weil sie die Methode belegen): (1) Eine
Suchmaschinen-Zusammenfassung nannte für W3 „ab 1.490 €/Monat" — der
Wert steht **nur in der Meta-Description** und widerspricht der eigenen
Tariftabelle derselben Seite. (2) Ein Steuerbasis-Lauf ohne
Wortgrenzen meldete 391 „Treffer" — sämtlich Teilwort-Rauschen („ust"
in „justify", „customer"). Beide Male war das Werkzeug schuld, nicht
die Quelle.

### 6.4 Was wir über die Zahlungsbereitschaft unserer ZIELKUNDEN wissen

**Nichts Belegtes.** Es gibt im Bestand keine erhobene
Zahlungsbereitschaft aus dem eigenen Zielkundenumfeld — weder aus dem
Pilotumfeld noch aus Gesprächen.

⚠️ **Korrektur einer falschen Entlastung** (Prüferbefund P-04): Die
Erstfassung schrieb hier „kein Versäumnis dieser Runde: Die Erhebung
ist nie beauftragt worden." **Das ist falsch, und die Quelle, die es
widerlegt, ist das Rohstoff-Papier dieser Runde selbst.** Abschnitt D
routet an MKT-HANDEL wörtlich: Preismodell-Optionen ausarbeiten und die
ChatGPT-Zahlen „durch belegte Anker ersetzen (Wettbewerbspreise,
**Zahlungsbereitschaft Pilotumfeld**, Kostenrechnung)". Zwei der drei
genannten Ersatz-Anker sind erhoben (§ 6, § 4), **der dritte steht
aus** — er ist beauftragt und nicht geliefert. Der richtige Umgang ist
Streichen, nicht Abschwächen: **Die Zahlungsbereitschaft ist ein
offener Posten dieser Arbeitslinie und mit E-7 nachzuholen** — das
macht E-7 vom freundlichen Vorschlag zum überfälligen Punkt.

**Suchraum und Positivkontrolle:** `grep -rin` über alle `*.md` des
marketing-Repos, Muster `€\s*(pro|/)\s*(Monat|M\b)|€/Monat|EUR/Monat` →
16 Dateien mit Treffern; alle Treffer sind **Anbieter-Preise oder
Förderbeträge**, kein Beleg einer Kundenaussage „das wäre uns X wert".
Positivkontrolle: dasselbe Muster fand die bekannten Anker M1/M2/M6 ✔
(die Suche funktioniert also).

⭐ **Konsequenz für die Entscheidung:** Die Preis-HÖHE (F-III) ruht
damit auf Marktanalogien und der eigenen Kostenrechnung — nicht auf
einem einzigen Beleg, dass ein Zielkunde diesen Betrag zahlt. Der
billigste Weg, das zu ändern, steht als Entscheidungspunkt **E-7** in
§ 11.

---

## 7. Der Optionenraum (Frage F-I: Vertragsform)

Alle vier Optionen sind mit derselben Tiefe ausgearbeitet. Sie
unterscheiden sich **nicht** in der Preishöhe (die ist F-III), sondern
darin, **wie die Einführungskosten gedeckt werden und wer das
Abbruchrisiko trägt**.

### 7.1 Option (i) — Monatlich, ohne Bindung, ohne Startgebühr

Die User-Position A1 in Reinform: Der Kunde zahlt einen Monatsbetrag
und kann jederzeit (z. B. zum Monatsende) kündigen. Keine Startgebühr,
keine Mindestlaufzeit.

| | |
|---|---|
| **Annahmen** | Einführungsaufwand wird aus dem Monatsbetrag über die Laufzeit gedeckt (**④**) · durchschnittliche Kundenbindung ≥ Break-even-Dauer (**④, ungeprüft**) · Onboarding wird so weit standardisiert, dass B1 sinkt (**④**; der Bestand hat dafür **keinen** gebauten Automatismus — `/kunde-init` existiert nicht, ② R38-C § 4.3) |
| **Deckung der Einführungskosten** | **Nicht gesichert.** Kündigt ein Kunde vor dem Break-even, ist die Einrichtungsarbeit verloren. Rechnung: § 7.5 |
| **Terminpfad** | **Bestes Ergebnis.** Niedrigste Einstiegshürde, kürzeste Verhandlung, kein Vertragswerk mit Laufzeitklausel nötig — die S1-Stufe (Angebot bis Fr 23.10.2026) ist damit am schnellsten erreichbar |
| **Dafür** | Trägt den USP „Unabhängigkeit" glaubwürdig · passt zu A5 („die Übergabefähigkeit macht abhängig" — wer jederzeit gehen darf, bleibt aus Zufriedenheit) · stärkstes Verkaufsargument gegen Wettbewerber mit 12-Monats-Bindung (M3) · **das einzige Modell, bei dem der Kunde uns monatlich neu bestätigt** — ein hartes Qualitäts-Frühwarnsystem |
| **Dagegen** | **Wir finanzieren die Einführung vor** und tragen das volle Abbruchrisiko · bei Kündigung in Monat 1–3 mit hoher Wahrscheinlichkeit Verlust auf diesem Kunden · **der Markt macht es in unserem Nachbarfeld durchgängig anders**: M2/M4 mit Einrichtungsgebühr, M3 mit 12 Monaten Bindung ② · Straiv (Haupt-Technikwettbewerber) mit Onboarding-Gebühr und wahlweise Jahresvorauszahlung ③ · **W1, der einzige gefundene Anbieter mit unserer Bauform, verlangt 1.920 € Einrichtung UND bindet auf ein Jahr** ③. **Zählweg dieser Aussage, korrigiert** (Prüferbefund P-03 — die Erstfassung nannte „10 von 10 Ankern mit vollständiger Angabe" und zählte damit ihr eigenes Auswahlkriterium; das war eine Positivliste in Verkleidung): **10 von 13** Ankern haben eine belegte Einmalzahlung (bei M6 nur dem Grunde nach, Höhe unbekannt). Zu **4 von 13** ist zusätzlich die Laufzeit belegt (M3, W1, W4, W5) — davon **binden 2** (M3: 12 Monate; W1: jährlich), **2 sind monatlich kündbar** (W4, W5 — beide mit Einmalzahlung). ⚠️ **Der wichtigste Gegenfall gehört ausdrücklich dazu und wurde in der Erstfassung ausgeschlossen: M1** (AKZENT) ist der einzige Anker mit vollständig veröffentlichter Preisliste und **weist keine Einrichtungsgebühr aus** (Gegenprobe im Bestand: kein Treffer auf `Aufnahmegebühr` oder `Eintrittsgebühr` im AKZENT-Kontext, Positivkontrolle „AKZENT" 25 Treffer ✔). Er ist allerdings ein **Verbandsbeitrag**, kein Dienstleistungsvertrag mit Einrichtungsaufwand — das schwächt ihn als Gegenfall, hebt ihn aber nicht auf · erfordert Disziplin beim Onboarding-Aufwand, sonst frisst der erste Monat den Jahresertrag · ⚠️ **Der Leistungsumfang wird zum Kostentreiber:** Monatliche Kündbarkeit **plus** unbegrenzter Leistungsumfang ist die teuerste denkbare Kombination — der Rohstoff-Punkt „Standard klar begrenzen, sonst zieht das Modell in individuelle Dauerarbeit" (⑤) trifft (i) härter als jede andere Option (in der Erstfassung verschwunden, P-12). *Einordnung der Zentrale dazu, damit sie nicht missverstanden wird: Das ist **kein** Widerspruch zum Grundsatz „Keine Lite-Varianten" — der betrifft die BAUQUALITÄT jedes Werkstücks, nicht die saubere Abgrenzung des Leistungsumfangs.* |

### 7.2 Option (ii) — Monatlich kündbar + einmalige Startgebühr

Wie (i), zusätzlich eine einmalige Einrichtungsgebühr zu Beginn.

| | |
|---|---|
| **Annahmen** | Startgebühr deckt den Einführungsaufwand ganz oder überwiegend (**④**, prüfbar erst mit B1/B3) · Zielkunden akzeptieren eine vierstellige Einmalzahlung (**④** — Marktanalogie M4: 1.495–4.195 € einmalig ③; M2: 399–799 € ③) |
| **Deckung** | **Gesichert, sobald die Gebühr ≥ Einführungsaufwand ist.** Der einzige Weg, der das Risiko am Tag 1 auflöst |
| **Terminpfad** | **Mittel.** Die Einmalsumme ist der Punkt, an dem ein Inhaber „darüber schlafe ich" sagt — sie verlängert S1 (3 Wochen Entscheidungsdauer sind bereits als ④-Annahme eingeplant, `akquise/akquiseplan.md` § 3.1) |
| **Dafür** | Kein Vorfinanzierungsrisiko · **erhält die Kündbarkeit** — der USP „Unabhängigkeit" bleibt vollständig erhalten, anders als bei (iii) · marktüblich im Software-Nachbarfeld (M2, M4, M6 ②/③) · macht den Wert der Einrichtungsarbeit sichtbar, statt ihn zu verschenken |
| **Dagegen** | Höchste Einstiegshürde beim allerersten Kunden — und genau den brauchen wir bis 13.11. · beim ersten Kunden ist die Gebühr zugleich Preis für ein Produkt ohne zahlende Referenz · psychologisch der Gegenpol zu A1 |

### 7.3 Option (iii) — Monatlich + Mindestlaufzeit (z. B. 12 Monate)

Kein Startbetrag, dafür eine Bindung, über die sich die Einführung
amortisiert. **Das ist das Modell von melevo** (M3: Startgebühr 0 €,
Mindestlaufzeit 12 Monate ③) — der einzige belegte Nachbaranbieter mit
genau diesem Tausch.

| | |
|---|---|
| **Annahmen** | Bindung ist im Zielsegment durchsetzbar (**④** — bei M3 offenbar ja ③, für unsere Zielgruppe **nicht** erhoben) · 12 Monate ≥ Break-even (**④**, s. § 7.5) |
| **Deckung** | **Rechnerisch gesichert** — solange der Kunde zahlungsfähig bleibt und die Klausel durchsetzbar ist (Vertragsfrage, § 10) |
| **Terminpfad** | **Mittel bis schlecht.** Eine Laufzeitklausel ist der Punkt, an dem ein Inhaber jemanden drüberschauen lässt. Zusätzlich brauchen wir dafür ein belastbares Vertragswerk — das ist eine eigene Zulieferung an die Zentrale und heute nicht fertig (§ 10) |
| **Dafür** | Planbarer Umsatz, der eine Kalkulation überhaupt erst erlaubt · kein Einmalbetrag, der den Einstieg blockiert · belegte Marktpraxis im nächstliegenden Vergleichsfall (M3) |
| **Dagegen** | ⭐ **Widerspricht dem eigenen USP am direktesten.** Wir verkaufen Unabhängigkeit vom Dienstleister — und binden den Kunden 12 Monate. Dieser Widerspruch ist in einem Verkaufsgespräch nicht wegzuargumentieren, und ein Interessent, der M3 kennt, sieht dann zwei Anbieter mit identischer Vertragsform · Kündigungsregeln bei Schlechtleistung müssen vertraglich sauber sein, sonst ist die Bindung ein Reputationsrisiko |

### 7.4 Option (iv) — Anfangs höherer, später sinkender Preis

Z. B. Monate 1–6 zu einem erhöhten Satz, danach dauerhaft niedriger.
Formal monatlich kündbar.

| | |
|---|---|
| **Annahmen** | Der Aufschlag deckt die Einführung innerhalb der erhöhten Phase (**④**) · Kunden empfinden den sinkenden Preis als fair statt als versteckte Startgebühr (**④, ungeprüft**) |
| **Deckung** | **Teilweise gesichert** — nur, wenn der Kunde die erhöhte Phase durchhält. Bei Kündigung in Monat 2 ist die Lage wie bei (i), nur mit etwas mehr Deckung |
| **Terminpfad** | **Mittel.** Erklärungsbedürftig; jede Erklärungsbedürftigkeit kostet im Verkaufsgespräch Zeit, und Zeit ist genau das Knappe (§ 9) |
| **Dafür** | Kein Einmalbetrag und keine Bindung — auf dem Papier das Beste beider Welten · der sinkende Preis ist ein positives Signal („es wird günstiger, wenn es läuft"), das zur Automatisierungs-Story passt |
| **Dagegen** | ⭐ **In der Sache eine Startgebühr in Raten, ohne deren Sicherheit** — sie wirkt nur, solange der Kunde bleibt · **im erhobenen Marktbild kommt diese Form bei keinem der sieben Anker vor** (M1–M7: kein einziger Anbieter mit sinkender Preisstufe; Suchraum = die in § 6.2 genannten Fundstellen) — das ist kein Gegenbeweis, aber ein Hinweis, dass sie erklärungsbedürftig ist · **Preisänderungen im laufenden Vertrag sind AGB-rechtlich heikel** und müssen von Anfang an sauber formuliert sein (④, Rechtsfrage → § 10) |

### 7.5 ⭐ Die B-These „nie kostenlos vorfinanzieren" — nachgerechnet statt übernommen

Der Auftrag verlangt ausdrücklich, die ChatGPT-These gegen die eigene
Kostenbasis zu prüfen. Ergebnis:

**Die Rechnung, die die Frage entscheidet:**

> **Break-even-Monat = Einführungsaufwand (B1 × B3) ÷ monatlicher
> Deckungsbeitrag (Monatspreis − laufende Kosten je Kunde)**

Mit den heute belegten Zahlen ist der Nenner bekannt (laufende Kosten
**rund 30–50 €/Monat** unter W-A bzw. **38–58 €** unter W-B, § 4.1
①/④) und der **Zähler nicht** (B1 ist nicht erhoben, für B3 gibt es
nur ein Marktband, § 4.2). Damit gilt:

| Wenn der Einführungsaufwand … | … dann ist Option (i) … |
|---|---|
| **klein** ist (z. B. 1 Arbeitstag, weil das Onboarding automatisiert ist) | **tragfähig** — der Break-even liegt bei wenigen Monaten, das Abbruchrisiko ist verkraftbar. Die B-These wäre in ihrer Schärfe („nie") **widerlegt** |
| **groß** ist (z. B. mehrere Personentage Einrichtung, Schulung, Übergabedoku, weil alles manuell läuft) | **riskant** — jeder Kunde, der vor dem Break-even geht, ist ein Verlust. Die B-These wäre **bestätigt** |

**Was der Bestand über den Zähler sagt** (② BESTAND): Das Onboarding
ist heute **manuell** (Vorlage kopieren, Platzhalter füllen,
importieren, Credentials wählen, aktivieren, Webhooks notieren), es
gibt **keinen gebauten `/kunde-init`**, und der Codex-Bericht listet
darüber hinaus eine ganze Trägermatrix, die bei A3 zusätzlich zu
übergeben wäre (Konten, Rollen, Domains, Schlüssel, Backups,
Übergabedoku). **Das deutet auf einen eher großen Zähler hin — deutet,
nicht belegt.**

**Rechenbeispiel mit fremden Sätzen** (④ ANNAHME durchgehend — das ist
eine Illustration der Formel, KEINE Kalkulation; sie ersetzt E-6
nicht). Angesetzt: Marktstundensatz **125 €/h** (unterer Rand des
belegten Bands, § 4.2 B3), 8 h je Personentag, monatlicher
Deckungsbeitrag = Monatspreis − **45 €** laufende Kosten (Mitte der
korrigierten Größenordnung aus § 4.1, W-A/W-B gemittelt).

| Einführungsaufwand ④ | Wert bei 125 €/h | Break-even bei 400 €/Monat | bei 800 €/Monat | bei 1.200 €/Monat |
|---|---:|---:|---:|---:|
| 1 Personentag | 1.000 € | **2,8 Monate** | 1,3 Monate | 0,9 Monate |
| 3 Personentage | 3.000 € | **8,5 Monate** | 4,0 Monate | 2,6 Monate |
| 5 Personentage | 5.000 € | **14,1 Monate** | 6,6 Monate | 4,3 Monate |
| 10 Personentage | 10.000 € | **28,2 Monate** | 13,2 Monate | 8,7 Monate |

*(Zählweg je Zelle: Aufwand ÷ (Monatspreis − 45 €); selbst gerechnet,
auf eine Nachkommastelle gerundet. Die Monatspreis-Spalten sind
**Rechengrößen**, keine Preisvorschläge — die Höhe ist Frage F-III und
in diesem Papier bewusst offen. Die oberste Spalte lautet bewusst
1.200 € und nicht 1.500 €: 1.500 € ist die in § 2.2 als unbrauchbar
verworfene ⑤-Zahl, und sie hier als Rechengröße zu führen hätte sie
durch die Hintertür zum Anker gemacht — Prüferbefund P-28.
⚠️ **Korrektur gegenüber der Erstfassung** (P-01/P-05): Dort standen
130 €/h und ein Nenner von 60 €; beide Werte waren zu hoch — der
Stundensatz um 5 €, die laufenden Kosten wegen des falschen
Supabase-Scopes. Alle zwölf Zellen sind neu gerechnet.)*

**Was man an dieser Tabelle ablesen kann, ohne eine einzige Zahl zu
glauben:** Der Break-even reagiert viel stärker auf den
Einführungsaufwand als auf den Monatspreis. Bei 1–3 Personentagen ist
Option (i) in jedem Preisszenario verkraftbar; ab etwa 5 Personentagen
liegt der Break-even in Preisszenarien unter 800 €/Monat jenseits eines
Jahres — dort trägt (i) nur noch, wenn Kunden im Schnitt deutlich
länger bleiben. **Der Marktvergleich stützt diese Lesart:** Der einzige
gefundene Anbieter mit unserer Bauform (W1, n8n auf deutschen Servern)
nimmt **1.920 € Einrichtung und bindet zusätzlich auf ein Jahr** ③ —
also die Kombination aus (ii) und (iii).

> **Ehrliches Zwischenergebnis:** Die B-These ist **plausibel, aber in
> dieser Schärfe unbelegt** — und sie ist mit heutigem Wissen weder
> übernehmbar noch widerlegbar. Was sie richtig macht: Sie benennt ein
> reales Risiko. Was sie falsch macht: Sie verkauft eine
> Vertragsform-Entscheidung als Naturgesetz („nie"), obwohl sie an
> einer einzigen, messbaren Zahl hängt. **Diese Zahl zu messen ist
> billiger als die Entscheidung zu raten** (E-6, § 11).

---

## 8. Die Bemessungs-Achse (Frage F-II) — eine eigene Entscheidung

Diese Frage ist von § 7 unabhängig und wird deshalb getrennt vorgelegt.

| Bemessung | Wie es funktioniert | Dafür | Dagegen |
|---|---|---|---|
| **(a) Pro Zimmer** | Preis = Zimmerzahl × Betrag; ggf. nur für gästenahe Module | Skaliert automatisch mit der Hausgröße — trägt von 10 bis 100+ Einheiten (unsere Zielgruppe hat **keine Obergrenze**, § 2.4) · im Software-Nachbarfeld belegt üblich (M7: 1,99–10 €/Zi/M ②) · ⭐ **der Haupt-Technikwettbewerber Straiv bemisst genau so** — seine AGB machen die Zimmerzahl zum vertraglichen Vergütungsschlüssel inkl. Anpassung bei Überschreitung ③ (§ 6.3.1). Wer gegen Straiv antritt, wird an dieser Bemessung gemessen · fühlt sich für den Inhaber fair an | Ein Teil unserer Arbeit **wächst nicht mit der Zimmerzahl** (Einrichtung, Betreuung, Monitoring, Ansprechbarkeit) — bei kleinen Häusern deckt der Betrag dann die Fixkosten nicht · ein 10-Zimmer-Haus zahlt bei 5 €/Zi/M nur 50 €/Monat, also **weniger als unsere belegten laufenden Systemkosten** (§ 4.1) |
| **(b) Fixpauschale je Haus** | Ein Betrag je Objekt, unabhängig von der Größe | Einfachste Kommunikation · deckt die größenunabhängige Arbeit · belegte Marktpraxis (M2 sogar ausdrücklich beworben: „unabhängig von der Zimmer- oder Stellplatzanzahl" ③) | Bei einem 100-Zimmer-Haus lassen wir Geld liegen; bei einem 10-Zimmer-Haus sind wir zu teuer. Ohne Größen-Obergrenze in der Zielgruppe ist das ein echtes Problem, kein theoretisches |
| **(c) Grundgebühr + zimmerabhängiger Anteil** (Kombination) — ⚠️ **Herkunft der Struktur: ⑤** (Rohstoff-Papier B, Punkt 3; s. § 2.2). Die Anker daneben stützen sie nachträglich, sie begründen sie nicht | Fester Sockel für Betreuung/Verantwortung + Zimmerkomponente für gästenahe Module | **Bildet unsere Kostenstruktur ab** (fixer Betreuungsanteil ① aus § 4.1 + variabler Nutzungsanteil) · deckt beide Enden der Größenspanne · entspricht der Struktur des einzigen belegten Verbund-Ankers (M1 ist genau so gebaut: fixe Positionen + „zusätzliche Zimmer" ②) | Erklärungsbedürftiger; braucht eine saubere Angebotsdarstellung, sonst wirkt es wie eine Mobilfunkrechnung |

⚠️ **Hinweis zur Modulfrage (A2):** Eine Aufschlüsselung nach Modulen
(„Modul A kostet X pro Zimmer") ist mit **jeder** dieser drei
Bemessungen kombinierbar. Sie ist eine **vierte** Frage
(Paket vs. Baukasten) und wird hier bewusst **nicht** mitentschieden —
sie gehört in die Angebotsarchitektur, die auf diesem Papier aufbaut.
Was sie voraussetzt: einen abgegrenzten Leistungskatalog. Der Bestand
führt das Portfolio bereits nach Guest-Journey-Checkpoints gegliedert
(`fund/positionierungspapier.md` § 6, ②) — die Vorarbeit existiert also.

---

## 9. Terminpfad-Konsequenz

**Die Ausgangslage** (② BESTAND, `akquise/akquiseplan.md` § 3.1,
Rückwärtsrechnung; alle Dauerangaben dort ausdrücklich als ④-Annahmen
markiert):

| Stufe | Was | Spätester Zeitpunkt |
|---|---|---|
| S0 | Unterschriebener Vertrag | **Fr 13.11.2026** |
| S1 | Angebot liegt vor (3 Wochen Entscheidungsdauer ④) | **Angebot raus bis Fr 23.10.2026** |
| S2 | Erstgespräch → Angebot erstellt | bis Fr 02.10.2026 |
| S3 | Erstkontakt-Welle 1 raus | bis Fr 11.09.2026 |
| **S4** | **Liste + Pflichtbausteine gebaut, Brief produktionsfertig** | **Baustart spätestens Fr 14.08.2026** (bei 4 Wochen) bzw. Fr 21.08.2026 (bei 3 Wochen) |
| **S5** | **Firmierung/Name steht** (Voraussetzung von S4) | **spätestens Fr 14.08.2026 — übermorgen** |

*(Wochentage per Werkzeug geprüft: 23.10.2026 und 13.11.2026 sind
beides Freitage ✔. **Die Erstfassung gab nur S0–S3 wieder** und ließ
ausgerechnet die beiden Stufen weg, die den Engpass tragen — eine
Tabelle mit Quellenangabe erhebt aber einen stillen
Vollständigkeitsanspruch; Prüferbefund P-18. Die Quelle vermerkt zu
S4/S5 selbst: „Bei vierwöchiger Baudauer muss der Name **am selben
Tag** stehen, an dem der Bau beginnt — es gibt zwischen beiden **null
Tage Puffer**.")*

**Das Preismodell ist der zweite Sperr-Posten dieser Kette** (② N-2,
`akquise/akquiseplan.md` § 9: „Preismodell/Angebotsarchitektur fehlt
und sperrt S1 (Angebot bis 23.10.)"). Der erste und kritischere ist der
Namensentscheid (S5, spätestens Fr 14.08.2026 — **in zwei Tagen**).

**Was jede Option für den Terminpfad bedeutet:**

- **(i) ohne Bindung** ist die schnellste Option: kein Vertragswerk mit
  Laufzeitklausel, kein Einmalbetrag zum Abwägen. Wenn der Termin das
  ausschlaggebende Kriterium ist, spricht das für (i).
- **(ii) Startgebühr** kostet Entscheidungszeit beim Inhaber. Die
  eingeplanten 3 Wochen für S1 sind eine ④-Annahme **ohne**
  Einmalbetrag — mit Einmalbetrag ist sie eher knapp.
- **(iii) Mindestlaufzeit** braucht zusätzlich ein belastbares
  Vertragswerk (§ 10). **Das ist der einzige Punkt, an dem eine
  Preisentscheidung eine weitere Vorarbeit auslöst, die heute nicht
  fertig ist** — und damit das größte Terminrisiko der vier.
- **(iv) sinkender Preis** ist erklärungsbedürftig und im Marktbild
  ohne Vorbild; im Erstgespräch kostet das Zeit.

> ⭐ **Der Satz, der die Antwort ändern könnte, und deshalb hier steht:**
> Selbst die schnellste Preisentscheidung rettet den Terminpfad nicht,
> **solange der Namensentscheid offen ist**. Nach dem R9-Befund (LG
> Düsseldorf Rn. 87, ② STATUS Punkt 0) sperren F-7/O-9 und die sieben
> Bau-Pflichten bereits den **Listenaufbau**, nicht erst den Versand.
> Ein perfektes Preismodell ohne Firmierung ist ein Angebot, das
> niemand verschicken darf. **Die Preisentscheidung ist wichtig, aber
> sie ist nicht der Engpass** — wer sie beschleunigt, um den Termin zu
> retten, optimiert die falsche Stelle.

---

## 10. Zulieferung an die Zentrale (Vertrag / StB)

Aus Abschnitt C des Rohstoff-Papiers (② BESTAND): „Monatlich kündbar +
Startgebühr + Lizenzhaltung beim Hotel hat Vertrags- und ggf.
StB-Relevanz — bei Bedarf als Zusatzpunkt zur StB-Fragenliste, **KEIN
Pflichtposten vor dem Termin** (Liste ist final, 11 Fragen)."

**Diese Vorlage erzeugt KEINEN neuen StB-Pflichtposten.** Sie meldet
der Zentrale folgende Punkte als Zulieferung — zu behandeln, wenn die
Preisentscheidung gefallen ist:

| Nr. | Punkt | Ausgelöst durch |
|---|---|---|
| **Z-1** | Vertragsform: Kündigungsfrist, Kündigungsregeln, Wirkung der Kündigung auf die betriebene Umgebung (was passiert mit Server, Daten, Zugängen?) | alle Optionen |
| **Z-2** | Startgebühr: Rechtsnatur (Werkleistung? Anzahlung?), Fälligkeit, Rückzahlbarkeit bei früher Kündigung | Option (ii) |
| **Z-3** | Mindestlaufzeit: Zulässigkeit und Ausgestaltung gegenüber gewerblichen Kunden, Sonderkündigungsrecht bei Schlechtleistung | Option (iii) |
| **Z-4** | Preisänderung im laufenden Vertrag (sinkender Preis) — Formulierung, damit sie nicht als einseitiges Preisanpassungsrecht gelesen wird | Option (iv) |
| **Z-5** | **Lizenzhaltung beim Hotel:** Wer schließt die Verträge mit Hetzner/Supabase/Vapi/Cloudflare — wir oder der Kunde? Daraus folgen AVV-Rollen (Auftragsverarbeiter vs. eigenständig Verantwortlicher) und die Frage, wer bei Zahlungsausfall den Betrieb verliert | Architektur-Weiche § 5 |
| **Z-6** | ⭐ **n8n-Lizenzfrage** (§ 5.3): Trägt die Sustainable Use License ein Modell, in dem der Kunde Eigentümer der Umgebung ist und Zugang hält? **Vor** jedem Preisentscheid zu klären, der A3 voraussetzt | Architektur-Weiche § 5.3 |
| **Z-7** | Steuerbasis der eigenen Preisangaben: Wir treten gegenüber gewerblichen Kunden auf — Preise nach außen netto mit MwSt.-Ausweis. Formal trivial, aber es muss vor dem ersten Angebot festgelegt sein, damit Angebot und Preisliste nicht auseinanderlaufen | alle Optionen |

**Adressat:** Zentrale-Postkorb `<FIRMENWURZEL>\zentrale\eingang\`.
Diese Session hat **keine** Meldedatei dort abgelegt (nicht im Scope
dieses Auftrags) — die Übergabe läuft über die Leitsession.

---

## 11. Entscheidungspunkte

Die Punkte E-1, E-2, E-2a, E-3, E-5 und E-8 sind einzeln mit
**Ja / Nein / Änderung** beantwortbar; **E-4, E-6 und E-7 sind
Angabe-Anforderungen** (wer macht was bis wann) — bei ihnen ist ein
bloßes „Ja" keine verwertbare Antwort (P-23). Formlos reicht in beiden
Fällen; die Antwort wird danach schriftlich festgehalten.

⭐ **Zur Reihenfolge, weil sie leicht falsch verstanden wird:**
**E-1 kann warten, bis E-6 beantwortet ist, ohne den Terminpfad zu
gefährden** — der Engpass ist der Namensentscheid, nicht das
Preismodell (§ 9). Wer E-1 vor E-6 entscheidet, entscheidet auf
derselben Beleggrundlage wie die verworfene ChatGPT-These. *(Die
Erstfassung stellte E-1/E-2 in „So läuft es weiter" vor E-6 und
widersprach damit ihrem eigenen Vorbehalt in § 12 — Prüferbefund
P-14.)*

**☐ E-1 — Vertragsform (Frage F-I).** Welche Option soll ausgearbeitet
werden?
&nbsp;&nbsp;☐ (i) monatlich, ohne Bindung, ohne Startgebühr
&nbsp;&nbsp;☐ (ii) monatlich kündbar + einmalige Startgebühr
&nbsp;&nbsp;☐ (iii) monatlich + Mindestlaufzeit
&nbsp;&nbsp;☐ (iv) anfangs höher, später sinkend
&nbsp;&nbsp;☐ Kombination / anders: _____
*Empfehlung dieser Session, s. § 12 — aber die Alternativen sind
gleichwertig ausgearbeitet, nicht als Feigenblatt. **Was (ii) konkret
heißt:** nach den Marktanalogien dieses Papiers eine **vierstellige**
Einmalzahlung (M4: 1.495–4.195 € ③ · W1: 1.920 € ③ · W6: ab 7.000 € ③)
— das ist die Zahl, die der Interessent zuerst sieht.*

**☐ E-2a — Bezugseinheit (Vorfrage zu E-2, ergänzt nach Prüferbefund
P-13).** Gilt der Preis je **Kunde/Betreiber**, je **Objekt/Haus** oder
je **Firmierung**?
&nbsp;&nbsp;☐ je Kunde/Betreiber &nbsp;&nbsp;☐ je Objekt/Haus
&nbsp;&nbsp;☐ je Firmierung &nbsp;&nbsp;☐ anders: _____
*Warum das vor E-2 kommt: Der eigene Pilot ist **ein Kunde mit drei
Objekten in drei Firmierungen** (Codex-Bericht K11: „‚je Kunde' ist als
technische Zähleinheit nicht gegen Objekt/Firma abgegrenzt"). Bei
Bemessung (c) entscheidet diese Frage den Preis um den Faktor drei —
zahlt ein Betreiber mit drei Häusern eine Grundgebühr oder drei?*

**☐ E-2 — Bemessung (Frage F-II).** Woran hängt der Preis?
&nbsp;&nbsp;☐ (a) pro Zimmer &nbsp;&nbsp;☐ (b) Fixpauschale je Haus
&nbsp;&nbsp;☐ (c) Grundgebühr + zimmerabhängiger Anteil
&nbsp;&nbsp;☐ anders: _____

**☐ E-3 — Architektur-Weiche: dürfen wir preisseitig VORLÄUFIG von der
geteilten Plattform (W-A) ausgehen**, solange der Architektur-Entscheid
offen ist? (Ja = wir kalkulieren mit dem heutigen Zielbild und passen
an, falls A3 kommt. Nein = wir warten mit der Kalkulation auf den
Architektur-Entscheid — dann verschiebt sich die Preisliste um dessen
Dauer.)

**☐ E-4 — Wer klärt die n8n-Lizenzfrage (Z-6), und bis wann?** Das ist
keine Preisfrage, aber sie kann A3 kippen. Konkrete Angabe erbeten:
Name + Zieltermin.

**☐ E-5 — Pilot-Abgrenzung bestätigen:** Das Preismodell gilt
ausschließlich für Folgekunden; der Pilot bleibt kostenlos, die Frage
einer späteren Überführung bleibt ausdrücklich offen und wird nicht
nebenbei mitentschieden. (Ja/Nein)
&nbsp;&nbsp;**☐ E-5a — und dazu die Teilfrage, die der Bestand nicht
beantwortet:** Der R3-Entscheid ist belegt für **NMS und Kiel**. Gilt
er auch für das **dritte Pilotobjekt (Hostel Boninstraße, eigene
Firmierung LEANE)**? (Ja / Nein / bereits anders geregelt: _____)

**☐ E-6 — Einführungsaufwand messen (§ 4.2/§ 7.5).** Vorschlag: Beim
nächsten Onboarding-Schritt im Pilotumfeld die reine Arbeitszeit
mitstoppen (grobe Blöcke genügen: Server/Instanz, Workflows,
Credentials, Property/Raten, Tests, Schulung, Doku). **Von den zwei
fehlenden Zahlen ist nach dieser Runde nur noch eine wirklich offen:**
Für den Stundensatz gibt es jetzt ein Marktband von
**125–160 €/h** aus drei Quellen (§ 4.2 B3, davon eine als eigene
Ableitung aus einem Stundendeckel) — der
Einführungsaufwand in Stunden dagegen ist nirgends erhoben. **Ohne ihn
bleibt jede Startgebühr und jede Break-even-Aussage geraten** (die
Tabelle in § 7.5 zeigt, wie stark das Ergebnis daran hängt: 1 vs. 5
Personentage verschieben den Break-even von 3 auf 15 Monate). Konkrete
Angabe erbeten: Wer misst, an welchem Vorgang, bis wann?

**☐ E-7 — Zahlungsbereitschaft erheben (§ 6.4).** Vorschlag: Im
ohnehin geplanten Kayhan-Gespräch (FUND2) die Frage unterbringen, was
ein vergleichbares Haus für einen betriebenen Digitalisierungs-Service
im Monat ansetzen würde. Kostet nichts extra und schließt die größte
Beleglücke dieses Papiers. (Ja/Nein/anders)

**☐ E-8 — Freigabe des Rahmens für die nächste Stufe:** Soll auf
Grundlage von E-1/E-2 die **Angebotsarchitektur** (Leistungspakete,
Angebotsdokument, Preisliste) gebaut werden — unter dem
Firmierungs-Vorbehalt, also ohne Namen und ohne Außenversand?
(Ja/Nein)

### So läuft es weiter

1. Antworten formlos (Chat, Zuruf, Notiz) — sie werden schriftlich im
   Repo festgehalten, mit Datum und Form der Erhebung.
2. Aus E-1/E-2 entsteht die Preistabelle mit konkreten Beträgen
   (Frage F-III) — die braucht E-6 und möglichst E-7.
3. Danach Angebotsarchitektur und Angebotsdokument (E-8), beides unter
   Firmierungs-Vorbehalt.
4. Z-1…Z-7 gehen als Zulieferung an die Zentrale.
5. **Textänderungen an dieser Vorlage sind JETZT am billigsten** —
   sobald daraus ein Angebotsdokument gebaut ist, hängt an jeder
   Formulierung eine Kette.

---

## 12. Empfehlung dieser Session (begründet, nicht bindend)

**Zur Vertragsform (E-1): Option (ii) — monatlich kündbar mit
Startgebühr**, mit einer ausdrücklichen Einschränkung.

Begründung in drei Schritten:
1. **Option (i) und (ii) unterscheiden sich nicht im USP.** Beide
   lassen den Kunden jederzeit gehen; „Unabhängigkeit" bleibt in beiden
   Fällen wahr. Der Unterschied liegt allein darin, wer die
   Einführungsarbeit vorfinanziert.
2. **Der Markt deckt seine Einführungskosten in unserem Nachbarfeld
   durchgängig** — per Einrichtungsgebühr (M2, M4, M6 ②; W1–W6 ③), per
   Bindung (M3 ③, W1 ③) oder per Jahresvorauszahlung (Straiv ③).
   **10 von 13 Ankern haben eine belegte Einmalzahlung**; zu 4 von 13
   ist zusätzlich die Laufzeit belegt (Zählweg und Gegenfall M1: § 7.1).
   Von unseren vier Optionen ist (ii) die einzige, die die
   Einführungskosten deckt, **ohne** den USP zu beschädigen.
3. **Option (iii) beschädigt ihn**, (iv) ist eine Startgebühr ohne
   deren Sicherheit und ohne Marktvorbild, (i) verschiebt das gesamte
   Risiko auf uns — in einer Phase, in der wir jeden einzelnen Kunden
   brauchen und uns keinen Verlustkunden leisten können.

**Die Einschränkung, die die Empfehlung kippen kann:** Wenn der
Einführungsaufwand (E-6) klein ist, ist (i) die bessere Wahl — sie
verkauft sich leichter, und der schnellere erste Abschluss ist im
Moment mehr wert als die Deckung einer kleinen Einmalsumme. **Die
Empfehlung steht also unter Vorbehalt einer Zahl, die wir noch nicht
haben.** Wer sie ohne E-6 umsetzt, entscheidet auf derselben
Beleggrundlage wie die ChatGPT-These — nur mit unserem Briefkopf.

**Zur Bemessung (E-2): Option (c) — Grundgebühr + zimmerabhängiger
Anteil.** Sie ist die einzige, die unsere Kostenstruktur abbildet (ein
großer fixer Betreuungsanteil, ein kleinerer nutzungsabhängiger) und
gleichzeitig die Größenspanne einer Zielgruppe ohne Obergrenze trägt.
Der belegte Verbund-Anker M1 ist genau so gebaut ②, und die
Zimmer-Komponente entspricht dem, woran der Markt in unserem Feld
gewöhnt ist (Straiv ③, M7 ②). Gegenargument, das zu (b) führen könnte:
Einfachheit verkauft — wenn der erste Abschluss zählt, kann eine
Pauschale mit einer Größen-Staffel („bis 30 Zimmer", „31–60") das
Gespräch beschleunigen; iiQ-Check bewirbt die Zimmerunabhängigkeit
sogar aktiv als Fairness-Argument ③ (M2).

**Zwei Preisformen, die diese Vorlage bewusst NICHT empfiehlt, weil sie
nicht beauftragt und nicht ausgearbeitet sind** — aber im Markt belegt
vorkommen und deshalb genannt gehören: **Jahresvorauszahlung** (deckt
Einführungskosten aus dem Cashflow, ohne Bindungsklausel) und eine
**erfolgsabhängige Komponente** auf vermittelte Zusatzumsätze (Straiv:
5 % ③). Wer sie will, sagt es bei E-1 unter „anders".

---

## 13. Grenzen dieses Papiers (was NICHT geprüft wurde)

Ehrlich und vollzählig, damit niemand die Lücken für Ergebnisse hält:

1. **Der Einführungsaufwand (B1) und der interne Stundensatz (B3) sind
   nicht erhoben.** Alle Break-even-Aussagen sind deshalb Formeln, keine
   Zahlen (§ 7.5).
2. **Es gibt keinen erhobenen Zahlungsbereitschafts-Beleg aus dem
   Zielkundenumfeld** (§ 6.4, Negativ mit Suchraum und
   Positivkontrolle).
3. **Die n8n-Lizenz wurde nicht gelesen.** Belegt ist nur, dass der
   eigene Bestand die Frage als offenen Verifikationspunkt führt
   (§ 5.3).
4. **Die Eignung des Supabase-Free-Tiers für Produktivbetrieb wurde
   nicht geprüft** (§ 4.1, K3-alt).
5. **Cloudflare-Pages- und Domain-Kosten (K5, K6) wurden nicht
   erhoben** — sie stehen als offen, nicht als 0 €.
6. **Der Browser-Kanal war in dieser Runde nicht verfügbar** (die
   Chrome-Erweiterung meldete „not connected"). Alle Web-Belege dieses
   Papiers stammen aus `curl`-Abzügen; Seiten, die ihre Inhalte
   ausschließlich clientseitig aufbauen, konnten nur über ihre
   Datenquellen ausgewertet werden (bei Hetzner gelungen, § 4.4).
7. **Keine Anbieteranfrage, kein Versand, keine Preiszusage** — nach
   außen ist aus dieser Runde nichts gegangen. Insbesondere wurde die
   nicht-öffentliche Straiv-„Paketübersicht" **nicht** beschafft (kein
   Login, kein Demo-Formular, kein Vertriebskontakt) — sie hätte den
   einzigen direkten Preisvergleich geliefert, ihre Beschaffung wäre
   aber eine Außenhandlung gewesen.
8. **Die Preishöhe (F-III) ist bewusst nicht beziffert.** Wer aus
   diesem Papier eine Zahl zitiert, zitiert einen Fremdanbieter-Preis,
   eine Kostenposition oder eine Rechengröße — **keinen Preis von uns**.
9. **Zwei im Markt belegte Preisformen sind nicht ausgearbeitet**
   (Jahresvorauszahlung, erfolgsabhängige Komponente, § 6.3.1) — sie
   waren nicht Teil des Auftrags und stehen nur als Hinweis.
10. **Reichweite der Negativbefunde:** Das Straiv-Negativ gilt für
    21 gemessene Inhaltsseiten, nicht für die ganze Website (Blog,
    Success Stories, Datenschutz nicht abgerufen); das
    melevo-Steuerbasis-Negativ für 9 Seiten. `agorax.agency` ist als
    **schwaches Negativ** geführt (Unterseiten ungeprüft).
11. **Keine Registerauszüge** — alle Firmen- und Anschriftsangaben der
    genannten Anbieter sind Impressums-Selbstauskünfte. ⚠️ Bei melevo
    weichen zwei Anschriften auf der eigenen Website voneinander ab
    (Datenschutz „Hauptstraße 6" vs. Footer „Römerweg 9", beide 78564
    Reichenbach) — für Außendokumente wäre das ein eigener Prüffall.
12. **Keine Preishistorie** — alle Anbieterwerte sind der Stand vom
    12.08.2026 (M1–M7: Stand ihres Erhebungsdatums 09./10.08.2026).
13. **Was der Prüfer selbst als seine Blindstellen benannt hat** (nicht
    weggelassen, weil es unbequem ist): Eine falsche Zahl in den fünf
    zunächst nicht geöffneten Einmalbeträgen hätte er nicht gefangen —
    **diese fünf sind inzwischen einzeln am Rohbeleg nachgelesen** ✔.
    Ebenso ungeprüft bleibt, ob die archivierten Rohbelege den
    Live-Stand der Seiten wiedergeben (sie sind Abzüge eines
    Zeitpunkts), und ob die Anbieter ihre Listenpreise real
    durchsetzen.
14. **Was in dieser Runde NICHT geprüft wurde, obwohl es die
    Empfehlung tragen würde:** ob unsere Zielkunden eine vierstellige
    Einmalzahlung akzeptieren. Die Marktanalogien zeigen, dass andere
    sie verlangen — nicht, dass unsere Interessenten sie zahlen (§ 6.4,
    E-7).
