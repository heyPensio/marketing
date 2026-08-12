# R11-A (Yasopp) — Abschlussmeldung: Preismodell-Optionen HANDEL1

**Token-Verbrauch: von der Session nicht erhebbar — Subagenten-Zahlen
soweit bekannt:** Recherche-Lauf 1 (melevo/Straiv) 187.703 Tokens /
44 Tool-Aufrufe · Recherche-Lauf 2 (DACH-Retainer) 168.883 Tokens /
38 Tool-Aufrufe · Prüfer 304.987 Tokens / 60 Tool-Aufrufe.
**Summe der drei Subagenten: 661.573 Tokens** (Zählweg: die drei
gemeldeten `subagent_tokens`-Werte addiert; der Verbrauch der
Leitsession selbst ist nicht erhebbar).

**Modell dieser Session:** Die Umgebungsangabe beim Session-Start nennt
**Opus 5 (1M context)**, `claude-opus-5[1m]`. ⚠️ Belegstufe: Das ist
die Umgebungsangabe, **nicht** die Statuszeile — die kann eine Session
über sich selbst nicht auslesen. Nach CLAUDE.md Regel 7 belegt nur die
Statuszeile oder `/cost` das tatsächliche Modell; die Selbstauskunft
des Modells gilt ausdrücklich nicht. **Bestätigung durch den User
steht damit aus.**

**Datum:** 12.08.2026 (Mittwoch, per `Get-Date` erhoben), Block 3.
**Auftrag:** Tagesplan `protokolle/tagesplan-2026-08-12.md`, Abschnitt
„Session-Prompt R11-A (Yasopp)".

---

## Block 1 — Gebaut und verifiziert

### Das Deliverable

**`handel/preismodell-optionen.md`** — Entscheidungsvorlage, 13
Abschnitte. Commits:

| Commit | Inhalt |
|---|---|
| **`8f65e40`** | Erstfassung (970 Zeilen), zugleich der eingefrorene Prüfstand |
| **`c685e15`** | Prüfer-Disposition: 350 geänderte Zeilen im Dokument + Prüferprotokoll (1.093 Zeilen) |

Beide gepusht (`git push origin <hash>:main`, Refspec-Form; vor jedem
Push `git log origin/main..HEAD` als eigener Befehl gesichtet — nie
fremde Commits im Bereich).

**Was das Dokument leistet** (gegen die neun Auftragspunkte):
1. ✅ Kopfkasten mit beiden Vorbehalten (Firmierung · Status
   „nichts entschieden") + „Nicht Teil dieser Vorlage" mit allen drei
   geforderten Ausschlüssen.
2. ✅ Optionenraum (i)–(iv) je mit Annahmen (einzeln GEMESSEN vs.
   HYPOTHESE), Einführungskosten-Deckung, Terminpfad-Folge und dem
   unbequemen Pol; Bemessungsachse als **eigene** Frage (§ 8) plus
   Bezugseinheit-Vorfrage E-2a.
3. ✅ Kostenbasis selbst belegt — s. u.
4. ✅ Wettbewerbs-Einordnung: 7 Bestandsanker (M1–M7) + Straiv-Preisform
   aus den AGB + 6 DACH-Retainer-Anbieter (W1–W6), Belegstufen
   zweiachsig.
5. ✅ Architektur-Weiche A3 als **offene Weiche** geführt, je Option
   ausgewiesen, was sie voraussetzt und was kippt.
6. ✅ Pilot-Abgrenzung mit Quelle (und mit korrigierter Reichweite,
   s. Block 1 „Prüferbefunde").
7. ✅ Terminpfad-Konsequenz je Option, mit dem Satz, dass die
   Preisentscheidung **nicht** der Engpass ist.
8. ✅ Vertrags-/StB-Zulieferung als Z-1…Z-7, ausdrücklich ohne neuen
   StB-Pflichtposten.
9. ✅ Entscheidungspunkte E-1…E-8 (+ E-2a, E-5a) nach
   `freigabe-vorlagen`, „So läuft es weiter" mit Antwortweg.

### Eigene Messungen (mit Zählweg und Kontrolle)

- **Hetzner-Cloud-Preise, DE, 12.08.2026** — CX33 **8,99 €/Monat netto**
  (8,49 € + 0,50 € primäre IPv4), CX43 16,49 €.
  ⚠️ **Werkzeugbefund, der den Zugang trug:** Die Preisseiten enthalten
  **keine Preiszahlen** — die Zelle trägt nur eine Web-Komponente
  (`<ho-price-container product-key="…">`). Ein Textabzug liefert
  „max. /Monat" ohne Betrag; **„keine Preise gefunden" wäre ein
  Werkzeugbefund als Sachbefund gewesen.** Die Beträge stehen in
  `live_data_prices.json`, die die Seite selbst nachlädt (Fundweg:
  Endpoint-Konstante im archivierten `vendors.js`).
  **Kontrollen:** erfundener Schlüssel → `null` ✔ · 20 von 25
  Matrix-Zeilen mit DE-Preis, die 5 Nulltreffer als reine US-Standorte
  erklärt (3 selbst geprüft, 2 vom Prüfer nachgezogen = 5/5) ✔.
  **Steuerbasis** über die separate `live_data_vat.json` abgeleitet
  (DE 19 / AT 20 / CH 8,1 / „Alle anderen" 0) — Ableitung als solche
  ausgewiesen, nicht als Zitat.
- **Supabase**, 12.08.2026: „From $ 25 / month. **First project
  included. Additional projects from $10/mo.**"
- **Vapi** aus dem heypensio-Bestand: 20–40 €/Monat für ein Haus der
  Pilot-Größenklasse, Stand 28.07.2026, sämtlich Testläufe.
- **Rohbelege:** 138 Dateien, 21.263.562 Bytes unter
  `sensibel/rohbelege-R11-A/` (git-ignoriert, nie committet).
  Summenprobe 63 + 57 + 18 = 138, ohne Rest.
- **Delegierte Zahlen gegengeprüft (L-15):** 18 Proben gegen die
  Rohbelege, 18 wie erwartet, davon 2 Gegenkontrollen, die nicht
  treffen durften ✔. Ausgewiesen ist auch, was diese Probe **nicht**
  leistet (Anwesenheit ≠ Zuordnung) — die drei Schlüsselstellen wurden
  zusätzlich im Wortlaut selbst gelesen.

### Prüferbefunde — kategorienweise MIT NENNER

Prüfer: unabhängiger Subagent, frischer Kontext, eingefrorener Stand
`8f65e40`, Schreibrecht nur auf `protokolle/R11-A-pruefer.md`,
Arbeitsbaum-Diff ausdrücklich nicht gesichtet.

| Kategorie | Befunde | Disposition |
|---|---|---|
| **SCHWER** | 4 | **4 von 4 repariert**, 0 verworfen |
| **MITTEL** | 10 | **10 von 10 repariert**, 0 verworfen |
| **NIEDRIG** | 7 | **7 von 7 repariert**, 0 verworfen |
| **HINWEIS** | 7 | **7 von 7 repariert**, 0 verworfen |
| **Summe** | **28** | **28 von 28 repariert, 0 verworfen, 0 mit Träger weitergereicht** |

**LAUF-STATUS des Prüfers** (nicht zu „keine Auffälligkeit" geglättet):
Der Prüfer hat **zwei Prüfschritte ausdrücklich als OFFEN
ausgewiesen** — (K5-O1) fünf Einmalbeträge nicht am Rohbeleg geöffnet,
(K4-O1) die Blueprint-README nicht als Primärquelle gelesen. **Beide
habe ich selbst nachgeholt**, bevor ich disponiert habe: alle fünf
Beträge einzeln am Rohbeleg gelesen ✔ (melevo 1.495/2.295/95/145/275 ·
cStack 1.980/4.050/900 · LeanFlow 7.000/9.500/15.000), und die
Blueprint-README bestätigt den manuellen Onboarding-Vorgang wörtlich
(Überschrift „Einspielen (einmalig je Kunde)", vier Schritte) ✔.
**Damit sind 0 Prüfschritte offen.**

**Die vier schweren Befunde — und was sie gemeinsam haben:** Alle vier
lagen an derselben Stelle (Übergang von der Erhebung zur Aussage) und
**alle vier zugunsten der eigenen Empfehlung.**

| ID | Sachverhalt | Reparatur |
|---|---|---|
| **P-01** | Supabase als „25 $ **pro Projekt**" geführt — der Plan hängt an der Organisation, jedes Folgeprojekt kostet ab 10 $ | Am Rohbeleg selbst nachgeprüft (bestätigt: „per organization" 0 Treffer, „per project" 9, keiner am Preis). Größenordnung je Kunde neu und **nach Weiche getrennt** (30–50 € unter W-A, 38–58 € unter W-B); Break-even-Tabelle komplett neu gerechnet |
| **P-02** | Die Bemessungs-Empfehlung (c) ist strukturell B-Punkt 3 des Rohstoff-Papiers — eine unbelegte KI-Hypothese, deren Herkunft nicht ausgewiesen war, während § 2.2 „nie Anker" versprach | Herkunft an drei Stellen offengelegt (§ 2.2, § 8(c), § 12); die eigenen Anker stützen die Struktur ausdrücklich nur **nachträglich** |
| **P-03** | „10 von 10 Ankern mit vollständiger Angabe" zählte sein eigenes Auswahlkriterium — Positivliste in Verkleidung; ausgerechnet der beste Gegenfall (M1, einzige vollständige Preisliste, **ohne** Einrichtungsgebühr) fiel durchs Raster | Ersetzt durch zwei ehrliche Zahlen (10 von 13 mit Einmalzahlung, 4 von 13 mit belegter Laufzeit) + M1 als ausdrücklicher Gegenfall |
| **P-04** | „Die Erhebung ist nie beauftragt worden" — widerlegt vom eigenen Rohstoff-Papier (Abschnitt D routet „Zahlungsbereitschaft Pilotumfeld" an MKT-HANDEL) | **Gestrichen statt abgeschwächt.** Der Posten steht jetzt als überfällig aus; E-7 ist kein freundlicher Vorschlag mehr |

**Eigene Nachkontrolle nach der Reparatur** (weil eine Reparatur einen
anderen Befund verschärfen kann): 12/12 Break-even-Zellen neu
nachgerechnet ✔ · 19 Markdown-Tabellenblöcke auf Spaltendrift geprüft,
0 Abweichungen, mit Positivkontrolle ✔ · Suche nach stehengebliebenen
Altwerten. **Dabei drei eigene Reparaturfehler gefunden und behoben:**
ein **unmaskiertes `|` in einer Tabellenzelle** (genau die Falle aus
MKT R7 — es stand ausgerechnet in einem frisch eingefügten
Gegenprobe-Vermerk) und zwei Altwerte, die in § 7.5 und § 11
stehengeblieben waren, während § 4.1 schon korrigiert war.

---

## Block 2 — Offen geblieben

1. **Der Einführungsaufwand (B1) ist nicht erhoben** — die zentrale
   fehlende Zahl. Ohne sie bleibt jede Startgebühr und jeder
   Break-even geraten; das Dokument liefert deshalb die Formel plus
   Szenariotabelle und macht die Messung zum Entscheidungspunkt E-6.
   *Nicht im Scope dieser Runde messbar* (sie entsteht beim nächsten
   Onboarding-Vorgang).
2. **Zahlungsbereitschaft der Zielkunden: nicht erhoben** — und laut
   Rohstoff-Papier Abschnitt D **beauftragt** (P-04). Steht aus,
   Vorschlag E-7 (Kayhan-Gespräch FUND2).
3. **Preishöhe (F-III) bewusst nicht beziffert** — sie braucht E-6 und
   möglichst E-7.
4. **n8n-Lizenzfrage ungeklärt** (§ 5.3) — die Lizenz selbst wurde
   nicht gelesen; belegt ist nur, dass der eigene Bestand die Frage als
   offenen Verifikationspunkt führt.
5. **Supabase-Free-Tier-Eignung für Produktivbetrieb** ungeprüft.
6. **Cloudflare-Pages- und Domain-Kosten** nicht erhoben (als offen
   geführt, nicht als 0 €).
7. **Straiv-„Paketübersicht"** nicht beschafft — sie ist
   nicht öffentlich, und ihre Beschaffung wäre eine Außenhandlung
   gewesen (harte Grenze (a) des Auftrags).
8. **Browser-Kanal nicht verfügbar** (s. Block 4) — alle Web-Belege
   stammen aus `curl`-Abzügen.

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

Je Befund ein Zielort; wo der Zielort existiert, ist er nachgesehen.

| Nr. | Befund | Zielort (existiert?) |
|---|---|---|
| **N-1** | ⭐ **Die Auftragsprämisse „einziger belegter Bestand-Anker: 781,67–996,77 €" trifft nicht zu.** `fund/wettbewerbsbild.md` trägt mindestens sieben geprüfte Preisanker (M1–M7). Ein Auftrag, der so formuliert ist, führt zu Neurecherche, während eigene geprüfte Belege ungenutzt liegen | **Leitsession** (Rundenschnitt/Methodik). Im Dokument sichtbar korrigiert |
| **N-2** | ⭐ **Die n8n-Sustainable-Use-Lizenz wird im Bestand damit begründet, dass der Kunde nie n8n-Zugang bekommt — die A3-Architektur will ihm genau diesen Zugang geben.** Der Bestand führt die Lizenzprüfung bereits als offenen Posten (K26); neu ist die Verschärfung durch A3 und die Preismodell-Relevanz | **heypensio-Leitsession** (Architektur). Übergabe NICHT direkt ins Produkt-Repo, sondern über die Leitsession — CLAUDE.md „Firmen-Ebene" Punkt 3. Zielort `<FIRMENWURZEL>\heypensio\blueprint\architektur-multi-kunden.md` § „Verifikationspunkte" existiert ✔ |
| **N-3** | **Straiv macht die Zimmerzahl zum vertraglichen Vergütungsparameter** (AGB 4.3), hat eine Kann-Einrichtungsgebühr (7.2), rechnet jährlich im Voraus ab (7.1), führt beide Laufzeitmodelle (11.1/11.2) und nimmt 5 % Kommission auf vermitteltes Upselling. Im Wettbewerbsbild ist Straiv bisher **ohne Preisform** geführt | **MKT-FUND**, `fund/wettbewerbsbild.md` (existiert ✔). Nicht von mir eingetragen — fremder Scope |
| **N-4** | **Straiv-AGB Ziff. 1.2 nennt vier Lösungen, die Website bewirbt acht** — die vertraglich geregelte Produktmenge ist kleiner als die beworbene | **MKT-FUND**, ebd. |
| **N-5** | **melevo führt zwei verschiedene Anschriften auf der eigenen Website** (Datenschutz „Hauptstraße 6" vs. Footer „Römerweg 9", beide 78564 Reichenbach) — Beleg für die Regel „Anschriften über mehrere Stellen belegen" | **MKT-FUND** / Baustein `aussenwirksame-texte` (Belegfall) |
| **N-6** | **melevo führt heute Website-Zusatzposten**, die der Bestandsstand vom 09.08. nicht kennt (Cookie-Banner 10 €, Buchungsmaschine 10 €, GA-Setup 260 €, Texterstellung 1.050–3.250 €, On-Site-SEO 650–1.580 €). Ob sie neu sind, ist **nicht** feststellbar — der Bestand führt sie nur nicht | **MKT-FUND**, `fund/wettbewerbsbild.md` § B5.3 |
| **N-7** | **Zwei im Markt belegte Preisformen fehlen im beauftragten Optionenraum:** Jahresvorauszahlung und erfolgsabhängige Komponente | **MKT-HANDEL**, Angebotsarchitektur (E-8). Im Dokument als Hinweis geführt, nicht ausgearbeitet |
| **N-8** | **Zahlungs-/Transaktionsgebühren und Fremdlizenzen sind niemandem zugeordnet** — Payment ist Bestandteil der Guest-Journey-Strecke | **MKT-HANDEL** / Zentrale (Z-5 im Dokument) |
| **N-9** | ⚠️ **Der Chrome-Automationskanal war nicht verfügbar** („Browser extension is not connected"). Das betrifft **andere Sessions**: Wer eine Chrome-Zuteilung im Start-Prompt bekommt, kann sie heute nicht nutzen | **Leitsession** (Rundenplanung) — relevant u. a. für die E-V4-Recherchewelle (MARKE) |
| **N-10** | **Der Bestand liefert einen belegten Marktstundensatz von 125–160 €/h** aus drei Quellen — brauchbar weit über dieses Papier hinaus (Kalkulation, Förderanträge, Beraterrolle) | **MKT-HANDEL**, `handel/foerderarchitektur-beraterrolle.md` (existiert ✔) |

**Bewusst nicht verfolgt:** Die im Straiv-AGB und in den DACH-Anbietern
sichtbaren Vertragsklauseln (Zahlungsziele, Bonitätsprüfung,
Aussetzungsrechte) — sie gehören in die Vertragsarbeit der Zentrale,
nicht in eine Preisvorlage.

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **⭐ Eine Preisseite ohne Preise sieht aus wie ein Negativbefund.**
   Die Hetzner-Kategorieseiten liefern per `curl` vollständigen Text —
   nur die Zahl fehlt, weil eine Web-Komponente sie clientseitig
   nachlädt. Ein Textabzug hätte „keine Preise auffindbar" ergeben, und
   das hätte im Protokoll wie eine saubere Messung ausgesehen. **Der
   Weg zur Zahl führte über die Datenquelle, die die Seite selbst
   lädt** (Endpoint-Konstante im ausgelieferten JS). Generalisierbar:
   Wenn eine Seite Text, aber keine Werte liefert, ist die Frage nicht
   „stehen sie da?", sondern „woher holt die Seite sie?".
2. **⭐ Der Scope einer Preisangabe steckt oft im Satz DANEBEN, nicht in
   der Zahl.** „From $ 25 / month" war korrekt gelesen — der
   entscheidende Zusatz stand als Kleingedrucktes daneben („First
   project included. Additional projects from $10/mo.") und kehrte die
   Bedeutung um. Die eigene Auswertung hatte Dollar-Beträge **ohne
   Schlüsselspalte** extrahiert; genau davor warnt die Regel „Zahlen an
   ihren Schlüssel binden". Der Fehler ist derselbe wie beim
   Zeilen-Scope, nur eine Ebene höher: **nicht die Zahl war falsch,
   sondern ihre Bezugsgröße.**
3. **⭐ Ein Zählweg kann sein eigenes Auswahlkriterium zählen.** „10 von
   10 Ankern mit vollständiger Angabe" klang wie eine Messung und war
   eine Tautologie — die Auswahl war die Aussage. Prüffrage, die ich
   künftig an jede „x von y"-Aussage anlege: **Könnte das Ergebnis
   überhaupt anders ausfallen?** Wenn nein, ist es keine Zählung.
   Verschärfend: Das Raster hatte ausgerechnet den stärksten Gegenfall
   ausgeschlossen.
4. **⭐ Eine Entlastung über den eigenen Auftrag ist besonders
   verführerisch.** „Die Erhebung ist nie beauftragt worden" fühlte
   sich beim Schreiben wie eine Präzisierung an — widerlegt hat sie
   ausgerechnet das Rohstoff-Papier derselben Runde. Muster: **Der
   eigene Prompt wird zum vermeintlichen Gesamtauftrag
   verallgemeinert.** Gegenmittel ist billig: Vor jedem „war nicht
   beauftragt" das Routing-Kapitel der eigenen Quelle noch einmal
   lesen.
5. **⭐ Die Struktur einer Empfehlung kann aus einer verworfenen Quelle
   stammen, ohne dass eine einzige Zahl von dort kommt.** Ich hatte
   die ChatGPT-ZAHLEN sauber abgewehrt und dabei die ChatGPT-STRUKTUR
   übernommen (Grundgebühr + Zimmeranteil für gästenahe Module) —
   belegt durch eigene Anker, die aber erst nachträglich gesucht
   wurden. Belegstufen-Disziplin muss auch für **Gliederungen und
   Denkfiguren** gelten, nicht nur für Werte.
6. **Reparaturen erzeugen neue Befunde.** Meine Korrekturvermerke
   brachten ein unmaskiertes `|` in eine Tabellenzelle und ließen zwei
   Altwerte an anderen Stellen stehen. Ohne den mechanischen Nachlauf
   nach der Reparatur wäre beides drin geblieben — die Regel „nach
   jedem Reparaturvermerk das Prüfwerkzeug erneut laufen lassen" hat
   sich hier dreifach bezahlt gemacht.
7. **Ein Prüfer kann eine Rechnung widerlegen, die dreimal
   nachgerechnet wurde.** Meine Break-even-Zellen waren alle korrekt —
   und trotzdem falsch, weil der **Nenner** auf einer falschen
   Bezugsgröße beruhte (P-01). Rechenkontrolle und Eingangskontrolle
   sind zwei verschiedene Prüfungen.

### (ii) Bewährte Muster

1. **⭐ Eigener Quellen-Anker VOR dem Fan-out — und der Anker macht die
   Agenten hinterher mechanisch prüfbar.** Weil die Rohbelege in meinem
   Ordner lagen, konnte ich 18 gemeldete Zahlen per Skript gegen die
   Abzüge prüfen (inkl. zweier Gegenkontrollen, die nicht treffen
   durften) statt sie einzeln nachzulesen. Ebenso wichtig: **die Grenze
   dieser Probe im selben Satz nennen** — sie belegt Anwesenheit, nicht
   Zuordnung.
2. **⭐ Vor der Web-Recherche den eigenen Bestand greppen.** Der
   Auftrag setzte einen einzigen Bestandsanker voraus; ein einziger
   `grep` über `*.md` fand sieben geprüfte. Die zwei Recherche-Agenten
   liefen dadurch auf die **Lücke** (Preisform des Wettbewerbs,
   Nachbarmarkt „betriebene Automatisierung") statt auf schon Belegtes.
3. **⭐ Agenten je QUELLE zuschneiden, nicht je Frage** — und ihnen die
   Fallen des Bausteins mitgeben (Roh-HTML archivieren, Positivkontrolle
   je Lauf, Steuerbasis als eigene Prüfung). Beide Läufe haben
   daraufhin **eigene Werkzeugfehler gemeldet statt geglättet** (391
   Teilwort-Fehlalarme; eine Meta-Description, die der eigenen
   Preistabelle widersprach) — das ist der Beleg, dass die Regel
   angekommen war.
4. **⭐ Den Prüfer mit Pflicht-Kategorien UND zwei Selbstfragen
   beauftragen.** Die Frage „Welche Verfälschung hätte dein Verfahren
   NICHT gefangen?" hat fünf konkrete Blindstellen zutage gefördert —
   zwei davon konnte ich anschließend selbst schließen. Ein Prüfer, der
   nur Befunde liefert, hätte diese zwei Prüfschritte als erledigt
   erscheinen lassen.
5. **Offene Prüfschritte des Prüfers selbst nachholen, bevor
   disponiert wird.** Die fünf ungeöffneten Einmalbeträge tragen die
   Aussage „Marktanalogie für vierstellige Einmalzahlungen", also
   direkt die Empfehlung. Sie kosteten einen einzigen Skriptlauf.
6. **Belegstufen-Legende an den Anfang, nicht in die Fußnoten.** Fünf
   Marken (① GEMESSEN … ⑤ HYPOTHESE) haben das ganze Dokument
   diszipliniert — und dem Prüfer ein Raster gegeben, an dem er die
   Verstöße überhaupt festmachen konnte. Ohne die Legende wären P-02
   und P-06 kaum benennbar gewesen.
7. **Die Entscheidung in getrennte Fragen zerlegen** (Vertragsform ·
   Bemessung · Bezugseinheit · Höhe) statt „ein Preismodell"
   vorzulegen. Erst dadurch wurde sichtbar, dass die Höhe heute gar
   nicht entscheidbar ist — und dass die Bezugseinheit den Preis um den
   Faktor drei bewegt.
