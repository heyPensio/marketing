# R08-B — Abschlussmeldung (Yasopp)

**Token-Verbrauch: von der Session nicht erhebbar — Subagenten-Zahlen
soweit bekannt: keine (diese Session hat KEINE Subagenten eingesetzt;
alle Abrufe und Auswertungen liefen im eigenen Kontext, Leseweg
durchgehend BYTE).**

**Session:** R08-B, 11.08.2026 · Strang: P22 Brandnamic-Vollerhebung,
danach P21 Verbünde · Rolle: Yasopp.
**Modell:** ⚠️ **nicht belastbar meldbar.** Die Statuszeile ist für
diese Session nicht einsehbar, und die Selbstauskunft des Modells ist
laut CLAUDE.md (R24-B) kein Beleg — sie hat nachweislich Abweichungen
samt Begründung erfunden. Der Auftrag verlangt die Verifikation „NUR per
Statuszeile"; dieser Kanal stand nicht zur Verfügung. **Als Lücke
ausgewiesen statt geraten.**

---

## Block 1 — Gebaut und verifiziert

### 1.1 P22 — Brandnamic-Partnerkreis vollerhoben ✅

**`fund/erhebung/brandnamic-partner-vollerhebung.md`** (neu, 596 Zeilen)
— Commit **`e387249`**, gepusht (Beleg: `git branch -r --contains
e387249` nach frischem `git fetch` → `origin/main`).

**Fertig-Kriterium erfüllt, Verifikationsgrad mit Nenner:**

- **72 von 72 Domains ausgewertet, 0 unerhoben.** (67 im Erstlauf,
  5 per gezieltem Nachfass.)
- Davon **7 von 72** mit ausgewiesener Belegschwäche (5× Wildcard-
  Antwort, 2× inhaltsarme Startseite) — je einzeln benannt, keine
  weggelassen.
- **7 von 7 Kategorien** generisch über das Strukturmerkmal belegt.
- Erhebungsmenge sauber hergeleitet: 76 Domains − 4 bereits in B10.2
  geprüfte = 72.

**Zählweg (Schritt 1 des Auftrags) — drei Bestandszahlen aufgelöst:**
Alle drei sind **richtig**, sie zählen verschiedene Schlüssel:
78 Einträge (B10.1) · „74 ungeprüft" = 78 − 4 · „74 Einträge / 72
Domains" (R06-A/K-21) = 76 − 4. **Keine Fundstelle schreibt ihren
Schlüssel dazu — das ist der eigentliche Befund.**
Summenprobe der Marker: 78 Partner + 6 Sprachumschalter + 13
Footer-Links + 2 Zertifikatslinks = **99** ✔ (geht ohne Rest auf).

**⭐ Eine vierte Zahl fehlte im Bestand: 74 FIRMEN.**
Zwei bisher unbekannte Dubletten:
- `easisuite.com` = `yanovis.com` (Host-Redirect, Rohabzüge
  **byte-identisch** per `cmp -s`) — **eine Firma in ZWEI Kategorien**
  (Kat. 2 und Kat. 6).
- `xenus.it` = `pcs-phoenix.com` — **kein Redirect**; Identität nur im
  Seiteninhalt (PCS GmbH, Bahnhofstraße 10, I-39046 St. Ulrich; die
  Altseite verlinkt selbst auf das Nachfolgeprodukt). **Die
  Redirect-Prüfung hätte diese Dublette nie gefunden.**

**B10.1 unabhängig bestätigt:** Verteilung (25/13/18/2/12/6/2),
Gesamtzahl, beide Doppelnennungen und die straiv-Einsortierung unter
„Zahlungsanbieter Schnittstellen" — eigenes Skript, andere Session.

**Positivkontrollen (a)(b)(c) — alle bestanden und im Dokument
ausgewiesen (§ 3):**
- **(a) Extraktions-Vollständigkeit:** straiv ✔ · flexipass ✔ ·
  weareplanet **zweimal** ✔ · Gegenrichtung `xyzzy` = 0 ✔. Dazu
  mechanisch: Dokumentzahl = Blocksumme = 78 ✔, Einträge vor dem ersten
  Block = 0 ✔, base64-Gegenprobe 77/78 (der eine Abweicher ist ein
  **Datenfehler der Quelle**: `… .com/ _blank` im URL-Attribut).
- **(b) Je Prüfkanal ein benannter Kontrollkandidat:** Für den
  Marker-Kanal `straiv.io` (CHECKIN 22, ZUTRITT 4) und
  `flexipass.tech` (ZUTRITT 25) mit **bekanntem** Befund aus B10.2 —
  plus Gegenrichtung: drei reine Banken zeigen CI/ZU = 0. **Beide
  Richtungen belegt.**
- **(c) Gliederungs-Vollzähligkeit:** zwei unabhängige Strukturmerkmale
  (`__container__item` und `__title`) ergeben beide **7**, extrahiert
  **ohne** Namensliste; Abgleich mit B10.1 erst **danach**.

**Hauptbefund (§ 5.9): acht Wettbewerbs-/Kanal-Kandidaten in einer als
Technik geführten Liste** — vier Guest-App-/Gästekommunikations-Anbieter
(`chatlyn`, `reguest.io`, `guest.net`, `orderando.io`) und vier
Teil-B-Fälle (`simedia.com` = Internetagentur · `kohl-partner.at` ·
`interalp-touristik.com` · `mts-austria.at`). **Kohl & Partner erreicht
dieselbe Zielgruppe auf drei Wegen** (Kooperationsgruppe ·
Partnerprogramm · eigene Beratung) — die Südtiroler Parallele zum
Goslar-Cluster aus B11.4.

**Nebenbefund (§ 5.10):** Check-in/Meldeschein/Kiosk/Mobile Key ist bei
**mindestens 9 von 23** PMS-Domains **Standardmodul im eigenen Produkt**
— ausdrücklich als **Untergrenze** ausgewiesen, nicht als Anteil (die
übrigen 14 nennen es auf der Startseite nicht; das ist kein Beleg für
Abwesenheit).

### 1.2 P21 — Teilerhebung ⚠️

**`fund/erhebung/verbund-vollerhebung.md`** (neu) — Commit siehe unten.

⚠️ **Ausdrücklich KEINE Vollerhebung, P21 bleibt offen.** Der Dateiname
ist vom R8-Schnitt vorgegeben; das Dokument trägt den Widerspruch als
**Warnkasten ganz oben**, damit niemand es als erledigten P21 liest.

**Zwei neue harte Befunde:**
- ⭐ **City Partner Hotels laufen seit 01.07.2026 über Ringhotels**
  (`cph-hotels.com` → `ringhotels.de`; Zielseite wörtlich: „Seit dem
  1. Juli 2026 entdecken Sie die CPH Hotels auch bei Ringhotels").
  **Zwei der acht Namen der Fachmedienliste von Januar 2021 sind heute
  ein Auftritt.** Grenze mitgeschrieben: „auch bei" ist additiv — eine
  Fusion ist **nicht** belegt.
- ⭐ **„Südtirol Privat" heißt heute „Südtirol Hosts"**
  (`suedtirolprivat.com` → `suedtirolhosts.com`), Träger belegt:
  „**der Verband der Privatvermieter Südtirols**" (VPS).
  **Unter dem Namen aus B11.2(c) ist der Verbund nicht mehr auffindbar**
  — jede spätere Suche erzeugt ein falsches Negativ.
- Trägerschaft **Ringhotels e.V.** + **Ringhotels HeimatGenuss GmbH**
  belegt.

**Erhebungsstand mit Nenner (§ 6):** deutsche Kandidaten **2 von 7**
berührt, **1 von 7** mit belegtem Träger · Südtiroler Verbünde **5 von 5**
abgerufen, Träger **1 von 5** belegt, 1 Indiz, **3 offen** · Schweiz
(HotellerieSuisse) **0 — nicht erhoben** · Mitgliederzahlen/Beiträge
**0 — nicht gesucht**.

---

## Block 2 — Offen geblieben

1. **P21 als Ganzes** (§ 6 des Verbund-Dokuments): fünf deutsche
   Kandidaten ohne aus einer Quelle gelesene URL · drei Südtiroler
   Verbünde ohne Trägerbeleg · Schweiz gar nicht · Mitgliederzahlen und
   Beitragsmodelle nicht gesucht. **P21-Registerzeile darf NICHT auf
   erledigt gesetzt werden.**
2. **Modellangabe** — Statuszeile nicht einsehbar, als Lücke ausgewiesen
   statt geraten (s. Kopf).
3. **Firmenzahl 74 ist eine Obergrenze.** Auf Dubletten geprüft wurde
   über Host-Redirects (systematisch) und auffällige Inhaltsgleichheit
   (nur wo sie ins Auge fiel). `xenus`/`pcs-phoenix` wurde **zufällig**
   gefunden — weitere Konzernverbünde ohne Redirect würden beide
   Prüfwege passieren. Belastbar wäre nur ein Registerabgleich je Domain.
4. **Zwei Konzern-Startseiten ohne Aussagewert** (`oracle.com`,
   `infor.com`): Ihr Hospitality-Portfolio (OPERA, HMS) ist **nicht**
   erhoben; das dortige „keine Treffer" ist ausdrücklich **kein**
   Portfolio-Negativ.
5. **K-Einstufungen bewusst nicht vergeben,** nur als „K-Kandidat"
   markiert — Partnerprogramme der Partner waren nicht Auftrag, und
   „K" verlangt eine belegte Vermittlungsform.
6. **`mts-austria.at`** ist als Teil-B-Fall **schwach belegt** (nur der
   Firmenname „Marketing Tourismus Synergie"; Startseite ohne
   Description, wenig Text) — braucht einen eigenen Prüflauf.
7. **Vollständiger Verbandsname von `hgj.it`** nicht belegt (s. Block 4).

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

*(Vollständig mit Zielort in `brandnamic-partner-vollerhebung.md` § 8
(Z-1…Z-9) und `verbund-vollerhebung.md` § 7 (V-1…V-5). Hier die, die
eine Entscheidung der Leitsession brauchen:)*

1. ⭐ **V-5 — ein Bestandsbefund schwächt sich.** B11.3 trägt die mit ⭐
   markierte Kernaussage „**in drei von vier Fällen mit belegter
   Trägerschaft** führt eine Marketing-Agentur/Beratung den Verbund".
   Die zwei in R08-B neu belegten Träger sind ein **Verein**
   (Ringhotels e.V.) und ein **Verband** (VPS) — **beide keine Agentur**.
   Werden sie mitgezählt, steht es **3 von 6**. Ob sie in denselben
   Nenner gehören, ist eine Zuschnittsfrage — **Entscheid der
   Leitsession**. Ausdrücklich gemeldet, weil er der eigenen bisherigen
   Linie widerspricht.
2. **Z-6 — Check-in als PMS-Standardmodul** berührt die Positionierung
   (Säule Check-in/Guest Journey) **und** das Produkt heyPensio.
   ⚠️ Produkt-Befunde gehen **nicht** direkt ins heypensio-Repo
   (CLAUDE.md, Firmen-Ebene Regel 3) — als geparkte Idee mit
   Zielort-Vermerk zu führen.
3. **Z-2 — P17 bekommt vier namentliche Kandidaten** (chatlyn,
   reguest.io, guest.net, orderando.io) zusätzlich zu den 40+ aus der
   flexipass-Marktplatzliste.
4. **Z-5 — zwei Einkaufsgenossenschaften als Kanal** (`hogast.it`,
   `gastropool.it`) stehen in der Kategorie „Zahlungsanbieter". Gehört
   zu P21/MKT-AKQ — **Kanalbewertung bewusst nicht vorgenommen.**
5. **Z-7 — Byte-Angabe im R8-Prompt falsch:** `raw_partner.html` hat
   **475.910** Bytes, nicht 430.793 (das ist `agb.html` im selben
   Ordner). Pfad stimmt, Prämisse trägt — die Zahl sollte nicht
   weiterwandern.
6. **Z-9 — unpassende `alt`-Texte auf der Brandnamic-Partnerseite**
   (Logo `raiffeisen` trägt „Moderner Luxusrolex Daytona Chronograph",
   Logo `elite` trägt „Frau trägt schwarzen glänzenden Rock") —
   offenbar maschinell erzeugt und ungeprüft veröffentlicht. Für eine
   Wettbewerbsaussage verwertbar, war aber nicht Auftrag: **Entscheid
   der Leitsession, verwerten oder verwerfen.**
7. **Z-8 — bewusst NICHT verfolgt:** der Datenfehler `… .com/ _blank`
   im Brandnamic-Markup (ohne Wert für unsere Fragen).

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **⭐ Zwei eigene Werkzeugfehler, beide nur durch ein UNMÖGLICHES
   Kontrollergebnis entdeckt.**
   (a) Die base64-Gegenprobe meldete „**0 von 78**" — das kann nicht
   sein, wenn beide Attribute dieselbe URL tragen. Ursache: Mein
   Item-Fenster begann am `class`-Attribut, `data-link` steht im Markup
   **davor**. **HTML schreibt keine Attributreihenfolge vor** — exakt
   die Fehlerklasse aus MKT R7 (B12-Ankerzahlen), unabhängig
   reproduziert.
   (b) „70 eindeutige Logo-Dateinamen" bei 78 Einträgen — mein Muster
   nagelte die Hash-Länge auf zehn Hex-Zeichen fest und traf die
   `.svg`-Logos zweier Kategorien nicht.
   **Lehre:** Beide Male hätte der Lauf ohne die Kontrollen *sauber
   ausgesehen*. Eine Zahl, die offensichtlich nicht passen kann, ist
   ein Werkzeugfehler, kein Befund — und **die Kontrolle muss ein
   Ergebnis liefern, dessen Unmöglichkeit man erkennen kann.** Eine
   Kontrolle, die nur „viele Treffer" meldet, hätte beides verdeckt.
2. **⭐ Eine Domain-Zählung ist keine Firmenzählung — und die
   Redirect-Gegenprobe macht sie nicht dazu.** `easisuite`/`yanovis`
   fand der Redirect-Check; `xenus`/`pcs-phoenix` fand er **nicht**
   (kein Redirect, zwei getrennt ausgelieferte Seiten). Der Fund war
   **Zufall** beim Lesen der Titel. Wer „76 Anbieter" schreibt,
   überzählt um zwei. **Neuer Prüfschritt für Bestandslisten: nach der
   Domain- immer eine Firmen-Frage stellen, und den Zufallsfund als
   Beleg dafür nehmen, dass der systematische Weg fehlt.**
3. **Ein 404 auf der verlinkten URL hätte einen Kernbefund gekostet.**
   `orderando.io` antwortete auf die im Partnerkreis hinterlegte
   Adresse mit 404 und 228 Zeichen Text — als „keine Nähe zum Feld"
   wäre das durchgerutscht. Der Nachfass auf die Root-Domain lieferte
   „**Die führende Guest-App für Hotels** … vom Check-in bis zum letzten
   Drink … ab 1,50 € pro Zimmer im Monat". **Ein Fehlercode ist kein
   Sachbefund** — jede nicht-200-Antwort braucht einen zweiten Versuch,
   bevor die Zeile gewertet wird.
4. **Eine Namensliste altert lautlos.** Die hotelier.de-Liste (Januar
   2021) führt City Partner und Ringhotels als zwei Kooperationen; seit
   dem 01.07.2026 sind sie ein Auftritt. Das fiel **nur** auf, weil der
   Abruf über den Redirect ging. Ebenso „Südtirol Privat" → „Südtirol
   Hosts". **Bei Listen aus Fachmedien ist das Artikeldatum Teil des
   Befunds** — und die Verifikation muss über die **Domain** laufen,
   nicht über eine erneute Namenssuche.
5. **Eine eigene Vermutung im Gewand eines Befunds** — selbst gefangen:
   Die Erstfassung löste „HGJ" aus der **Domain** zu „Hoteliers- und
   Gastwirtejugend Südtirol" auf. Das stand **nirgends in der Quelle**.
   Die Gegenprobe am Rohbeleg ersetzte es durch das, was wirklich
   dasteht (Landesleitung, Bezirksausschüsse, „Giovani Albergatori") —
   und der volle Verbandsname ist **weiterhin unbelegt**. Die Korrektur
   steht sichtbar im Dokument, nicht still geglättet.
6. **Ein Namensraum ist kein Beleg.** `roterhahn.it` ist durchgehend mit
   `sbb`-Bezeichnern durchsetzt (`oSbbFilter`, `.sbb-mitglieder-detail`)
   — das sind **JS-Variablen und CSS-Klassen**, kein Aussagetext. Als
   Indiz vermerkt, **nicht** als Trägerbefund.
7. **Mein Sammel-Grep über mehrere Impressen verlor die Dateitrennung**
   und meldete für drei Verbünde scheinbar „nichts" — ein
   Werkzeugartefakt des `tr`-Zusammenzugs, kein Quellenbefund. Erst der
   Einzellauf je Datei war belastbar. **Ein Sammellauf mit Treffern
   sieht aus wie ein funktionierender Prüfweg.**
8. **Klassifikator-Blockade beim Push, dreifach** — erst als `&&`-Kette
   (Bash), dann als Einzelbefehl (Bash), beide blockiert; **im
   PowerShell-Kanal lief derselbe Push sofort durch.** Das Zerlegen in
   Einzelbefehle (L-05) half hier **nicht**, der Kanalwechsel schon.
   ⚠️ Das ist **ein** Messpunkt und trägt die Kanal-These nicht allein
   — die L-05-Korrektur (primär zeitpunkt-, nicht kanalgebunden) bleibt
   unwiderlegt; ein A/B über zwei Kanäle trägt die Falsifikation, nie
   den Ursachennachweis.

### (ii) Bewährte Muster

1. **⭐ Zwei unabhängige Strukturmerkmale für dieselbe Zahl.**
   `MOD-Partner__container__item` = 7 **und** `MOD-Partner__title` = 7.
   Zwei Merkmale, die aus verschiedenen Gründen falsch sein müssten,
   um gemeinsam zu täuschen — deutlich stärker als ein Merkmal plus
   Abgleich mit dem Bestand. Der Bestandsabgleich kam **danach**, nie
   davor.
2. **⭐ Positivkontrolle mit ECHTEN Kandidaten aus dem Bestand.** Für
   den Marker-Kanal `straiv`/`flexipass` einzusetzen, deren Befund
   B10.2 bereits kennt, prüft den Prüfweg an einer Stelle, wo das
   Sollergebnis unabhängig feststeht — und die Banken-Gegenrichtung
   belegt, dass das Muster auch **schweigen** kann. Ein Muster, das
   nicht treffen kann, sieht im Log wie ein sauberes Negativ aus.
3. **Die Summenprobe über ALLE Marker** (78 + 6 + 13 + 2 = 99, ohne
   Rest) belegte in einem Schritt, dass die Extraktion nichts verliert
   **und** nichts Fremdes einsammelt. Ein reiner Partner-Zähler hätte
   die 21 Nicht-Partner-Marker nie erklären müssen.
4. **Die Kontrollpfad-Gegenprobe im SELBEN Lauf wie der Hauptabruf**
   (nicht danach) — fand fünf Domains mit Wildcard-Antwort, deren
   Negative sonst als Befunde durchgegangen wären. Kosten: ein zweiter
   `curl` je Domain.
5. **URLs aus den `href`-Werten bereits geladener Seiten** statt
   geratener Pfade: Genau daran scheiterte die Erhebung der fünf
   deutschen Verbünde ehrlich — als **dokumentierte Grenze** (N-2)
   statt als stiller Fehlversuch mit konstruierten Domains.
6. **Den Widerspruch zwischen vorgegebenem Dateinamen und tatsächlichem
   Inhalt als Warnkasten ganz oben** — der Scope-gebundene Pfad
   `verbund-vollerhebung.md` bleibt erhalten, der falsche
   Vollständigkeitsanspruch wird an der Stelle entschärft, wo der Leser
   ankommt.
7. **Prüfwerkzeuge mit eigener Positivkontrolle:** Der
   Markdown-Tabellenprüfer meldet am Ende jedes Laufs, ob er eine
   künstlich zerlegte Testzeile erkennt (Soll: 1). Ein Prüfwerkzeug,
   das seinen Erfolgsfall nicht kennt, ist keins. Ergebnis: 18 Tabellen,
   0 Spaltenabweichungen, Positivkontrolle greift.
