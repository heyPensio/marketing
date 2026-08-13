# R12-B — Prüferprotokoll `handel/angebotsarchitektur.md`

**Prüfstand (eingefroren):** Commit `5097f37` — gelesen ausschließlich
per `git show 5097f37:handel/angebotsarchitektur.md` (569 Zeilen,
Volltext). Der Arbeitsbaum-Diff wurde auftragsgemäß **nicht**
gesichtet. · **Datum:** 13.08.2026 · **Prüfer:** unabhängiger
Prüf-Subagent mit frischem Kontext (Auftrag: Session-Prompt R12-B,
`protokolle/tagesplan-2026-08-13.md`, Abschnitt „Session-Prompt
R12-B", Prüfer-Block).

## Prüfraum mit Lese-Nachweis (Prüfraum-Regel: alles, worauf das Dokument zeigt)

Alle marketing-Quellen wurden in der Fassung des Prüfstands gelesen
(`git show 5097f37:<pfad>`), nicht im Arbeitsbaum:

| Quelle | Gelesen | Umfang/Spanne |
|---|---|---|
| `handel/angebotsarchitektur.md` @5097f37 | Volltext | 569/569 Zeilen |
| `handel/preisliste-vorlaeufig.md` @5097f37 | Volltext | 652/652 Zeilen (inkl. § 2 Vertragspartner-Kasten, § 3 S4-Einordnungs-Kasten, § 4, § 5.1–5.5, § 6) |
| `handel/preismodell-optionen.md` @5097f37 | gezielt | § 11 komplett (Z. 1172–1554 des Abzugs) · § 2.4 + § 3-🟢 (Z. 226–268) · § 4.2/§ 4.3 (Z. 345–390) · § 5.3/§ 5.4 inkl. 🟢 (Z. 474–549) · § 6.4 inkl. 🟢 (Z. 781–826) · § 8 inkl. 🟢 (Z. 1014–1052) · § 9 inkl. 🟢 (Z. 1054–1124) · § 10 inkl. 🟢 (Z. 1126–1170) · Überschriften-Inventar + 🟢-Inventar per grep (18 🟢-Kästen lokalisiert). **Nicht gelesen:** § 1, § 2.1–2.3, § 4.1, § 4.4, § 5.1–5.2, § 6.1–6.3, § 7, § 12 (nur Kopfzeilen), § 13 — s. Lauf-Status |
| `fund/positionierungspapier.md` @5097f37 | gezielt | § 3 komplett (Z. 95–149) · § 6 komplett inkl. Nachtrag E11/E13 (Z. 292–442) · Überschriften-Inventar |
| `<FIRMENWURZEL>\zentrale\briefings\briefing-2026-08-13.md` | Volltext, nur lesen | 372/372 Zeilen (fremdes Repo, nicht angefasst) |
| `protokolle/tagesplan-2026-08-13.md` (Soll-Maßstab) | gezielt | Session-Prompt R12-B komplett (Z. 440–616 im Arbeitsbaum — der Prompt ist der Auftrag, kein Prüfgegenstand) |

**Nicht geöffnet (ausgewiesen, nicht verschwiegen):**
`sensibel/rohbelege-R12-A/` (Zahlen der Preisliste § 5.1 als ②
übernommen, nicht erneut an Rohbelegen geprüft — das Dokument übernimmt
sie nur referenzierend) · `heypensio\protokolle\R38-CODEX-C-bericht.md`
(K03/K04 nur an der wörtlich zitierenden Zwischenquelle
`preismodell-optionen.md` § 5.3 geprüft) ·
`protokolle/R04-erhebung-beratungsbestand.md` (Beratungs-Reifegrade nur
gegen Positionierungspapier § 6-Nachtrag geprüft, der die R04-Erhebung
zitiert).

---

## Befunde

**Gesamtergebnis: 0 schwer · 5 mittel · 8 Hinweise.** Kein referenzierter
Entscheid ist inhaltlich falsch übernommen; die Vorbehaltsführung ist
insgesamt ungewöhnlich sauber (Firmierung, Z-6/Architektur, K03/K04,
„Höhe offen" — alle vier Achsen tragen durch). Die Befunde sitzen in
den Rändern: zwei nicht angekommene Quellen-Posten, eine unbelegte
Statusaussage, zwei Empfehlungs-Überschärfungen, mehrere Zitat-/
Auslegungs-Feinheiten.

### Kategorie 1 — Entscheid falsch übernommen

**Nenner: 13 geprüfte Entscheid-Bezüge** — E-1, E-2 (inkl. Zusatz
Mehrhaus-Rabatt), E-2a, E-3, E-4, E-5, E-5a, E-6, E-7, E-8 jeweils
gegen den ✅-Kasten in `preismodell-optionen.md` § 11; E10, E11/E13a
und die E13a-Wiedergabe in AA-4 gegen `fund/positionierungspapier.md`
§ 6 samt Nachtrag. **Ergebnis: 11 von 13 korrekt übernommen — Inhalt
UND Belegstufe** (die Belegstufe „sinngemäß, Wortlaut nicht archiviert"
steht im Kopfkasten, in § 1 vor der Festlegungs-Tabelle und am
E-2-Zitat in Lesart A). Zwei Befunde:

**PB-03 · mittel · § 7 Punkt 5:** „…als Präzisierungs-Wunsch an die
**laufende** E-6-Messung (Ruffy/heypensio)". Die Quelle sagt etwas
anderes: § 11 E-6-✅ — die Messung hängt am **nächsten
Pilot-Onboarding-Schritt**, „kein Datum genannt", dessen Zeitpunkt
„hier nicht belegt"; das Briefing führt E-6 bei heypensio unter „c) Als
Nächstes", nicht unter „b) Läuft" (dort steht: „nichts"). „Laufend" ist
eine Statusaussage über fremde Arbeit ohne Beleg (CLAUDE.md Regel 3a)
und widerspricht der eigenen, korrekten Formulierung in der
AA-8-Empfehlung („E-6 ist **bereits beauftragt**"). Wer § 7 liest,
erwartet ein laufendes Messergebnis, das niemand angestoßen hat.
**Reparaturrichtung:** „an die beauftragte E-6-Messung (Träger
Ruffy/heypensio, ohne Termin)".

**PB-06 · Hinweis · Kopfkasten Punkt 1:** Der als Zitat gesetzte
E-8-Wortlaut „Angebotsarchitektur bauen — intern, unter
Firmierungs-Vorbehalt, ohne Außenversand" steht **wörtlich im Briefing**
(Entscheide-Protokoll, letzter Punkt), die angegebene Fundstelle ist
aber `preismodell-optionen.md` § 11 E-8 — dort lautet der Satz anders
(„Die Angebotsarchitektur wird gebaut — intern, unter
Firmierungs-Vorbehalt (ohne Namen), ohne Außenversand"). Zitat und
Anker gehören zusammen (L-01-Klasse); zudem ist bei Belegstufe
„sinngemäß — Wortlaut nicht archiviert" jedes Anführungszeichen um
einen Entscheid-Text heikel, weil es Wörtlichkeit gegenüber dem USER
suggeriert, die nur gegenüber dem Briefing-PROTOKOLL besteht.

### Kategorie 2 — Was aus den Quellen ist gar nicht erst angekommen? (rückwärts gelesen)

**Nenner:** Preisliste § 2 (7 Posten: Vertragspartner-Kasten,
K03/K04, K5/K6, Vapi-Nutzungsrisiko/Skalierung, Steuervermerk,
Summenverzicht, 38–58-€-Scope), § 3 (5 Posten: S1/S2 offen,
S3-Platzhalter, S4-Einordnungs-Kasten, S4-Bezugseinheit-④,
E-1-Gewichtung/Z-4-Warnung), § 4 (5 Posten: Wirkort, ab wann, Höhe,
Form, Zuordnungsfrage + Betreiber-Vorschlag) sowie das GANZE Briefing
(8 E-Punkte, Offene User-Entscheide, Terminposten, Lagebilder) —
**zusammen 25 rückwärts geprüfte Übernahme-Kandidaten.** Die
strukturtragenden sind angekommen (Zuordnungsfrage als AA-1,
S4-Kasten als AA-8, Rabatt-④-Ableitung mit Belegstufe, K03/K04 als
Widerspruchsliste, „Entscheider Höhe = User"). **Drei Befunde:**

**PB-01 · mittel · § 5 / AA-8:** Die Preisliste führt die
S4-Bezugseinheit ausdrücklich als Hypothese: „je Objekt/Haus
(Ableitung aus E-2a, **④ — der Entscheid sagt es für die Startgebühr
nicht ausdrücklich**)" (§ 3, Zeile S4). AA-8 baut auf genau dieser
Bezugseinheit auf, ohne den ④-Vorbehalt mitzuführen: die Ja-Option
(„Rabatt auf S4 **ab dem zweiten Haus**") und das Gesprächsargument
(„die Startgebühr **×n** ist der Betrag, den ein Mehrhaus-Interessent
zuerst sieht") setzen voraus, dass die Startgebühr je Haus anfällt.
Wäre S4 je KUNDE einmalig, löste sich die AA-8-Frage auf — nichts im
Dokument warnt davor. Fehlende Vorbehalte erzeugen keine auffällige
Textstelle; das ist der Fall, für den diese Kategorie gebaut ist.
**Reparaturrichtung:** ein Satz in AA-8-Klartext: „Vorausgesetzt ist
dabei die ④-Ableitung der Preisliste, dass S4 je Objekt/Haus anfällt —
auch das ist nicht ausdrücklich entschieden."

**PB-02 · mittel · § 1-Tabelle (E-1-Zeile) und AA-8:** Der
E-1-✅-Kasten enthält als „**ausdrücklich mitentschieden**" die
**spätere Verschiebungsrichtung** (niedrigschwelliger Einstieg,
stärkerer Monatsanteil — „nicht verworfen, sondern als spätere
Verschiebung ausdrücklich vorgesehen"; ebenso Briefing E-1). Dieser
Bestandteil ist im Dokument nirgends angekommen (grep über den Abzug:
„Verschiebung" 0 Treffer). Er ist architektur-relevant: Eine
Paketstruktur, deren S1/S2/S4-Gewichte sich planmäßig verschieben
werden, muss die Verschiebung strukturell tragen (und sie fällt beim
ersten Bestandskunden unter **Z-4** — `preismodell-optionen.md` § 10,
🟢-Nachtrag, ausdrücklich). Das Dokument erwähnt Z-4 nur bei P-C aus
anderem Grund (falsch geschnittene Bündel). Die E-1-Zeile der
§ 1-Tabelle liest sich dadurch als vollständige Wiedergabe von E-1 und
ist es nicht.

**PB-12 · Hinweis · § 4 Terminpfad-Zeilen + AA-2-Empfehlung:** Die
Terminpfad-Achse (P-A „schnellste Option", AA-2-Empfehlung: „wenn der
erste Abschluss (Terminpfad, Angebot bis 23.10.) schwerer wiegt")
übernimmt den 23.10.-Anker korrekt (② § 9), aber ohne den
⭐-Vorbehalt derselben Quelle: Engpass ist der **Namensentscheid**, und
„wer sie beschleunigt, um den Termin zu retten, optimiert die falsche
Stelle" (§ 9). Wer nur dieses Dokument liest, kann den Terminpfad zum
Entscheidungsgewicht für P-A machen, obwohl die Quelle genau davor
warnt.

### Kategorie 3 — Ableitung/Hypothese wirkt wie ein Entscheid

**Nenner: 7 geprüfte Ableitungs-Stellen.** Sauber gekennzeichnet (4):
die Rabatt-Kostenlogik (§ 5: „Das ist eine Ableitung der Preisliste
(④), kein Entscheid" — wortlaut- und belegstufengetreu zur Quelle
§ 4) · die Paket-Zuschnitte (P-B-Basis „④ Vorschlag …, selbst
entscheidungsbedürftig"; P-C „④ Illustration") · die
Bemessungsachsen-Spalte in § 3 (Spaltenkopf „④ Zuordnung dieser
Session nach § 8-Logik", Einzel-④ an der Room-Rack-Zeile) · die
Struktur-Folge in § 6 („④ Ableitung dieser Session aus E-3"). **Drei
Befunde:**

**PB-04 · mittel · AA-4, Grenze (1):** „die Trennung **darf** preislich
sein, nicht angebotsstrukturell" — als bindende Grenze formuliert
(„Zwei Grenzen, die jede Antwort einhalten muss"), ist aber eine
**unmarkierte Auslegung** von E13a. E13a sagt: EIN Angebot, keine nach
außen sichtbare Stufen-Trennung (nach Reifegrad). Ob eine im Angebot
sichtbare **Preis**-Trennung („Beratung separat nach Aufwand") mit
„EIN Angebot vermarktet" vereinbar ist, hat der User nicht entschieden
— die Auslegung ist plausibel (die dokumentierte Preislogik-Vision in
§ 6 des Positionierungspapiers ist selbst modulweise), aber sie gehört
als ④-Auslegung gekennzeichnet, sonst legt sie die AA-4-Antwort
vorweg fest.

**PB-09 · Hinweis · P-C „Dafür":** „Stufenpreise sind die häufigste
Form im erhobenen Markt (② aus § 5.1: M2 vier · M4 drei · W5 drei ·
W3 zwei)". Zählung an der Quelle nachvollzogen (stimmt je Anbieter),
aber die § 5.1-Tabelle erhebt **Einmalbeträge** (Einrichtung) — die
Aussage überträgt gestufte SETUP-Preise auf die **Angebots-/Paketform**.
Das ist eine Scope-Verschiebung der Zahl (die Zahl trägt den Scope
ihrer Zeile); Zählweg und ③-Belegstufe stehen immerhin dabei.

**PB-10 · Hinweis · § 2, Randbeleg-Klammer:** „Die technische
Kontoführung folgt dort **also** der wirtschaftlichen Einheit, nicht
den Rechtsträgern" — eigene Folgerung aus dem Apaleo-Konto-Entscheid
(Briefing Punkt 2, korrekt als sinngemäß zitiert), ohne ④-Marke. Der
Entscheid ist zudem ein PMS-technischer Pilot-Entscheid (Biro-Kontext),
keine Zuordnungs- oder Preisaussage — als Stütze für Lesart A ist er
eine n=1-Analogie aus anderem Sachgebiet. Die Kennzeichnung „Randbeleg"
mildert das, ersetzt die Belegstufen-Marke aber nicht.

### Kategorie 4 — Vorbehaltsverlust (Firmierung · Z-6/Architektur · Vertragspartner · „Höhe offen")

**Nenner: 4 Achsen, je über alle Vorkommen im Dokument verfolgt.**
**Firmierung:** getragen (Kopfkasten 2, „Nicht Teil" Wording-Punkt,
AA-3-Hinweis, § 6 Zeile 4, § 7 Punkt 4) — keine Auffälligkeit.
**Vertragspartner-Frage K03/K04:** getragen (Kopfkasten 3, § 4-⚠️,
§ 6 Zeilen 1–3 mit Träger E-4/Z-5, § 7 Punkt 5) — keine Auffälligkeit.
**„Höhe offen":** getragen (Kopfkasten 4, § 5-⚠️ vor AA-5, AA-7-Kasten
„nur strukturell entscheidbar, nicht bezifferbar", § 7-Tabelle) —
keine Auffälligkeit. **Z-6/Architektur:** getragen, mit einem Befund:

**PB-08 · Hinweis · Kopfkasten Punkt 3:** „Kippt eine dieser Fragen,
kippen die Teile dieses Dokuments, **die auf der Übergabe-Erzählung
ruhen (§ 6)**". Die Preisliste formuliert für sich breiter („kippt der
**Aufbau** dieser Liste — nicht nur einzelne Zahlen"), und im eigenen
Dokument ruhen auch § 4-Bestandteile auf E-3/W-B (der
Durchreichungsblock-⚠️ und die Prämisse „alle drei Optionen setzen die
entschiedene Preisstruktur voraus" — inkl. Durchreichungsblock). § 6
selbst sagt es richtig („sie betreffen die **Grundlage**…, nicht den
Zuschnitt; keine der drei Optionen ist ausgenommen") — der Kopfkasten
verengt die Kipp-Wirkung gegenüber dem eigenen § 6 auf einen
Paragraphen-Zeiger. Verdichtungs-Abschwächung, kein Inhaltsfehler.
*(Zusätzlich unter dieser Kategorie geführt, gefunden über Kat. 2:
PB-01 — der S4-④-Vorbehalt der Preisliste geht in AA-8 verloren.)*

### Kategorie 5 — Versteckte Festlegung durch einseitig ausgearbeitete Option

**Nenner: alle 8 ☐-Punkte geprüft.** AA-1 (beide Lesarten mit je
4 Zeilen inkl. unbequemem Pol; Lesart B ausdrücklich „gleichwertig
ausgearbeitet und die richtige Wahl, wenn …") · AA-2 (drei volle
Options-Tabellen; P-A als „gleichwertige Gegenposition" benannt) ·
AA-4 (drei Optionen + Mischform) · AA-5–AA-8 (je Option Für und Wider
in derselben Zeile) — **strukturell kein Feigenblatt.** AA-3: die
dritte Option („geparkt als ‚auf Anfrage'") ist nur ablehnend
ausgearbeitet — das ist quellengedeckt (Leitplanke § 6
Positionierungspapier: „geparkt heißt bewusst nicht gebaut") und wird
hier nicht als Befund geführt. **Zwei Befunde an den EMPFEHLUNGEN,
nicht an den Optionen:**

**PB-05 · mittel · AA-1-Empfehlung:** „sie ist **die einzige**, unter
der der Rabatt seinen in E-2 benannten Zweck erfüllt". Das überschärft
die eigene Beleglage: Unter Lesart B erfüllt der Rabatt den
E-2-Zweck (preissensible Mehrhaus-Betreiber) weiterhin für jeden
Betreiber, dessen Häuser in EINER Firmierung laufen — leer geht nur
die Objektgesellschafts-Konstellation aus, deren Verbreitung das
Dokument selbst als „**nicht erhoben** — der Belegfall ist n=1"
kennzeichnet (Lesart B, Dagegen-Zeile). Aus „verfehlt den wichtigsten
Anwendungsfall (④, n=1)" wird in der Empfehlung „die einzige, unter
der der Zweck erfüllt wird" — genau die Verdichtung zugunsten der
eigenen Aussage, vor der CLAUDE.md warnt. Die Empfehlung bleibt
vertretbar; der Satz ist es in dieser Absolutheit nicht.

**PB-13 · Hinweis · AA-2-Empfehlung:** „P-B ist **die einzige**
Option, die die … Bemessungsachse … und die … Portfolio-These (E10:
Modul-Ausbau) strukturell fortschreibt" steht in Spannung zur eigenen
P-C-Dafür-Zeile („skaliert **trotzdem entlang der E10-These** (Stufen =
mehr Checkpoints)"). Auf strenger Lesart (Modul-AUSBAU als Mechanik)
verteidigbar, aber dieselbe „die einzige"-Rhetorik wie PB-05 — der
Leser der Empfehlung erfährt nicht, dass die eigene P-C-Tabelle das
halbe Gegenargument enthält.

### Kategorie 6 — ID-Kollisionen AA-1…AA-8 (grep-Beleg)

**Suchraum:** gesamtes Repo, `*.md` (deckt `handel/` + `protokolle/`
+ `fund/` + `akquise/` und alle übrigen Ordner ab), Arbeitsbaum bei
HEAD `5097f37` (per `git rev-parse HEAD` im selben Lauf belegt).

- **Kommando 1:** `grep -rn --include="*.md" -E "AA-[0-9]" .` →
  Treffer AUSSCHLIESSLICH in `handel/angebotsarchitektur.md` (der
  Prüfgegenstand selbst) und `protokolle/tagesplan-2026-08-13.md`
  Z. 530 (der Session-Prompt, der die IDs `AA-1`, `AA-2`, … VORGIBT —
  beauftragte Vergabe, keine Kollision). **Keine fremde Vergabe.**
- **Kommando 2 (Kürzel-Form):** `grep -rn --include="*.md" -o -E
  "AA-[A-Za-z0-9]+" .` → dieselben zwei Dateien, keine
  Buchstaben-Varianten (kein „AA-x" in anderem Namensraum).
- **Positivkontrolle 1 (spiegelt die Suchmechanik
  Kürzel-Bindestrich-Ziffer):** `grep -rln --include="*.md" -E
  "\bE-8\b" .` → ≥10 Dateien (u. a. `handel/preismodell-optionen.md`,
  `projektquelle-mkt.md`, beide Tagespläne) ✔ — die Suche findet
  ID-Muster repo-weit.
- **Positivkontrolle 2 (spiegelt die KOLLISIONS-Mechanik, unabhängig
  bekannter Sollwert):** `grep -rln --include="*.md" "N-10" .` →
  10 Dateien ✔ — genau die in R12-A gefundene N-10-Kollision; eine
  real existierende Kollision ist mit diesem Suchweg auffindbar.

**Ergebnis: keine Auffälligkeit für AA-1…AA-8.** Ein
Nachbarschafts-Hinweis:

**PB-11 · Hinweis · Schlüsselraum-Nachbarschaften (keine Kollision im
strengen Sinn):** (a) `S1`–`S4` sind im Dokument Preisschlüssel, in
der zitierten Rückwärtsrechnung (§ 9 der Vorlage) aber
Terminpfad-STUFEN — die P-B-Terminpfadzeile nutzt beide im selben Satz
(„Angebot bis 23.10.2026 (**S1-Stufe** der Rückwärtsrechnung…)"); dort
inline disambiguiert, aber die Doppelbelegung bleibt kollisionsträchtig,
sobald jemand „S4" ohne Kontext zitiert (Startgebühr vs.
Listenbau-Stufe). (b) Die neuen Options-IDs `P-A`/`P-B`/`P-C` (grep:
nur im Prüfgegenstand) teilen das Präfix mit den
Prüferbefund-Nummern `P-01`…`P-27`, die in DENSELBEN
`handel/`-Dateien stehen; Buchstabe vs. Ziffer trennt sie, ein
Lese-Stolperer ist es trotzdem.

### Kategorie 7 — Widerspruch zur Preisliste/Vorlage (committete Fassung)

**Nenner: 17 Zitate/Übernahmen einzeln an der Quellfassung @5097f37
gegengelesen** — u. a.: „ungeklärt und folgenreich" + „Gilt er je
Betreiber oder je Firmierung?" + „bevor eine Höhe festgelegt wird"
(Preisliste § 4 ✔ wörtlich) · das dreiteilige § 8-Nachtrag-Zitat
(„Dagegen"-Spalte / „erklärungsbedürftiger…" / „benennt die Aufgabe,
die R12-B/E-8 jetzt zu lösen hat" ✔ wörtlich) · K03-/K04-Zitate (§ 5.3
✔ inkl. der Bedingung „sofern Vapi zur Eigentumsumgebung zählt") ·
S3-Platzhalter `<RABATT-AUF-GRUNDGEBUEHR — HOEHE NICHT ENTSCHIEDEN>`
(✔ zeichengleich) · B1-Katalog „…, Schulung, Übergabedoku" (§ 4.2 ✔) ·
Marktband 125–160 €/h als Marktorientierung (§ 4.2 B3 ✔) ·
Stufen-Zählung M2 4/M4 3/W5 3/W3 2 (an Preisliste § 5.1 nachgezählt ✔)
· 23.10.-Anker mit ④-Dauerannahmen (§ 9 ✔) · § 2.4-Zielgruppenaussagen
✔ · § 6.4 „nichts Belegtes, unverändert offen" ✔ · Reifegrad-Spalte:
**16 von 16 Tabellenzeilen** in § 3 gegen Positionierungspapier § 6
samt E11/E13-Nachtrag geprüft (inkl. Onpage-SEO-Ausnahme,
Kayhan-„Ausgestaltung OFFEN", Vollständigkeits-Vermerk „u. a.") ✔.
**Kein inhaltlicher Widerspruch gefunden.** Ein Form-Befund:

**PB-07 · Hinweis · P-A „Dafür":** Als Zitat gesetzt: „wirkt sonst wie
eine Mobilfunkrechnung" — die Quelle (§ 8, Dagegen-Spalte zu (c))
schreibt „sonst wirkt es wie eine Mobilfunkrechnung". Sinn identisch,
Wortlaut nicht; ein als wörtlich gesetztes Zitat muss wortgleich sein
oder die Anführungszeichen verlieren (dieselbe Klasse, die den
Zitatabgleich-Werkzeugen dieses Projekts Fehlalarme beschert — hier in
der Gegenrichtung: ein echter Nicht-Wortlaut).

---

## Zusatzfragen

**(a) Welche Verfälschung hätte dieses Verfahren NICHT gefangen?**
1. **Eine Verfälschung im Entscheide-Protokoll selbst.** Alle
   E-Vermerke tragen die Belegstufe „sinngemäß — Wortlaut nicht
   archiviert"; gäbe das Briefing einen User-Entscheid falsch wieder,
   bestätigten Dokument, § 11 und Briefing einander und kein Prüfer
   könnte es am Text widerlegen. Nur der User selbst kann das.
2. **Auslassungen aus NICHT referenzierten Quellen.** Mein
   Rückwärtslesen lief über Preisliste, Vorlage, Positionierungspapier
   und Briefing. Hätte z. B. `akquise/akquiseplan.md`, die
   Projektquelle (geparkte Module!) oder ein heypensio-Dokument einen
   architektur-relevanten Posten, den keine dieser vier Quellen
   spiegelt, wäre sein Fehlen hier unsichtbar geblieben.
3. **Verfälschte Zahlen in den Quellen selbst.** Ich habe Übernahmen
   Dokument↔Quelle geprüft, nicht Quelle↔Rohbeleg (sensibel/-Abzüge
   nicht geöffnet). Eine in der Preisliste § 5.1 falsch stehende Zahl
   wäre als „korrekt übernommen" durchgegangen.
4. **Bildwissen/mündliche Kontexte** (Voice, Screenshare): wo keine
   Soll-Aussage im Text existiert, kann kein Textprüfer schlagen.

**(b) Hätte ich die Funde auch OHNE die Kategorien-Hinweise gefunden?**
Ehrliche Trennung: **PB-01 und PB-02 vermutlich nicht** — beide
erzeugen keine auffällige Textstelle und kamen direkt aus der
angewiesenen Rückwärts-Leserichtung (Kat. 2 ist als Anweisung das,
was sie verspricht). **PB-05/PB-13 wahrscheinlich ja** — die
„die einzige"-Rhetorik fällt beim Gegenlesen der eigenen
Dagegen-Zeilen auf (CLAUDE.md-Klasse „Verdichten verliert den
Vorbehalt"). **PB-03 ja** (Widerspruch zum eigenen „bereits
beauftragt" und zum ✅-Kasten). **PB-06/PB-07 ja** (Standard-Handwerk
Zitat↔Anker). **PB-04, PB-08–PB-12 teils** — die grep-Läufe (Kat. 6)
und die Vorbehalts-Achsen (Kat. 4) hätte ich als Prüfer dieses Repos
ohnehin gefahren, die Schärfe der Fragen („einseitig ausgearbeitete
Option", „Ableitung wirkt wie Entscheid") stammt aber aus dem Auftrag.
Netto: Die Kategorien haben zwei der fünf Mittel-Befunde erzeugt, den
Rest beschleunigt.

---

## Lauf-Status

**Abgeschlossen (9 von 11 Prüfschritten):**
1. Prüfgegenstand @5097f37 vollständig gelesen ✔
2. Soll-Maßstab (Session-Prompt R12-B) vollständig gelesen ✔
3. Kat. 1 — 13/13 Entscheid-Bezüge gegen § 11 bzw. § 6-Nachtrag ✔
4. Kat. 2 — Rückwärtslesen Preisliste § 2–§ 4 (17 Posten) + Briefing
   komplett (8 E-Punkte + Rahmen) ✔
5. Kat. 3 — 7 Ableitungs-Stellen ✔
6. Kat. 4 — 4 Vorbehalts-Achsen über alle Vorkommen ✔
7. Kat. 5 — 8/8 ☐-Punkte ✔
8. Kat. 6 — grep mit 2 Suchmustern + 2 Positivkontrollen ✔
9. Kat. 7 — 17 Übernahmen + 16 Reifegrad-Zeilen an den Quellfassungen ✔

**Offen / bewusst nicht vertieft (2 — ausgewiesen, nicht geglättet):**
10. **Zitat-im-Zitat-Kette K03/K04:** nur bis zur Zwischenquelle
    `preismodell-optionen.md` § 5.3 geprüft (die den R38-CODEX-C-Bericht
    wörtlich zitiert); der Bericht selbst (heypensio-Repo) wurde nicht
    geöffnet. Für den Prüfgegenstand ausreichend (er zitiert die
    Zwischenquelle mit korrekter ②-Kennzeichnung), für eine
    Rohquellen-Bestätigung nicht.
11. **Nicht gelesene Abschnitte der Vorlage** (§ 1, § 2.1–2.3, § 4.1,
    § 4.4, § 5.1–5.2, § 6.1–6.3, § 7, § 12-Volltext, § 13): Das
    Dokument zeigt auf keinen davon direkt (Ausnahme: § 2.2-Erwähnung
    in der Belegstufen-Legende der Preisliste, nicht des
    Prüfgegenstands); ein dort schlummernder Widerspruch zum neuen
    Dokument ist damit **nicht geprüft** — „nicht geprüft", nicht
    „keine Auffälligkeit".

**Kein Schreibzugriff außer auf diese Datei; keine Git-Operationen
durch den Prüfer.**
