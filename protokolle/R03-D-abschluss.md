# R03-D — Abschlussmeldung (Rockstar, FUND3 Wettbewerbsbild)

**Token-Verbrauch: von der Session nicht erhebbar — Subagenten-Zahlen
soweit bekannt:** Straiv-Erhebung 161.295 · Gegenprobe „Voice am Gerät"
88.768 · book your key + LIKE MAGIC 85.248 · Entdeckung „größere Häuser"
84.572 · Fundstellen-Prüfer (siehe Block 1, Nachtrag). Summe der vier
abgeschlossenen Recherche-Stränge: **419.883 Subagenten-Token**.

**Modell:** Opus 5 (1M context). ⚠️ **Belegstufe:** Die Session kann die
Statuszeile nicht selbst lesen. Als Beleg liegt ausschließlich die
Ausgabe des `/model`-Kommandos aus dem Session-Start vor („Set model to
Opus 5 (1M context)") — das ist eine Harness-Ausgabe, keine
Selbstauskunft des Modells, aber auch nicht die geforderte Statuszeile.
Der Nachweis nach CLAUDE.md-Regel 7 ist damit **nicht vollständig
erbracht**; die Prüfung liegt beim User.

---

## 1. Gebaut und verifiziert

**Werkstück:** `fund/wettbewerbsbild.md` (neu, ~1.100 Zeilen).

| Commit | Inhalt |
|---|---|
| `838484c` | Erstfassung: Delta-Erhebung gegen das Juli-Dossier, Apaleo Store vollständig neu erhoben, drei Anbieter aktualisiert, acht neue Anbieter, Gegenprobe gegen die fünf USP-Säulen |
| `06d2151` | Geltungsgrenze § 0.0 (Segment-Zuschnitt) nach User-Einwand; zwei eigene Zahlkorrekturen; Wavetec-Zitat selbst an der Quelle nachgelesen |

Beide Commits mit `git branch -r --contains` in `origin/main` belegt.

**Erhebungsweg:** vier parallele Stränge (zwei Anbieter-Verifikationen,
eine Entdeckung mit Ausschlussliste, eine Gegenprobe gegen die eigene
USP-Prämisse), danach getrennte Fundstellen-Nachprüfung — teils durch
die Session selbst per `curl`, teils durch einen Prüf-Agenten.

**Substanzielle Befunde:**

1. **book your key (Meschede) ist der neue nächstliegende Wettbewerber**
   und trifft drei der fünf USP-Säulen frontal — Meldescheinaufnahme am
   Automaten, Ausgabe mechanischer Schlüssel „An den Türen muss dafür
   nichts geändert werden", Montage und Schulung im Preis, eigenes PMS
   inklusive. Preise öffentlich (699–999 €/Monat, netto, 3 Jahre
   Laufzeit), Segment-Wortlaut bis „Große Hotels / 60 Einheiten".
2. **Straivs Mitarbeiterzahl „~18" ist widerlegt** (LinkedIn 63, Store
   „50+", Fachbeitrag 07/2025 „von 43 auf rund 65"). Der im
   Positionierungspapier tragende Satz „mit 18 Leuten … verwundbar"
   steht auf einer überholten Zahl.
3. **Straiv hat den Terminal-Pfad geschlossen:** Kiosk in drei Bauformen
   inkl. Outdoor, Meldeschein ausdrücklich auch am Kiosk-Terminal,
   Store-Unterkategorie „Kiosk & self-service check-in", Claim 3.400+
   Hotels in 30 Ländern und 500 Apaleo-Installationen.
4. **keyBoy-Integration bei Straiv** (Schlüsselsafe, Code-Ausgabe,
   beworben für Häuser „ohne direkt in eine komplett neue
   Schließinfrastruktur investieren zu müssen") — das ist wörtlich
   unser Fächertresor-Argument.
5. **Die Setup-/Support-Klagen sind älter, als sie klingen:** wörtlich
   belegbar, aber nur aus dem Band 22.10.–27.11.2025; keine einzige
   Review aus 2026 einsehbar; „sinkende Support-Qualität" ist als
   Richtungsaussage nicht belegbar (Teilnote Customer Support 4,7/5).
6. **Apaleo Store neu erhoben:** 267 eindeutige Apps in 350 Listungen;
   kein Marktaustritt (69 Prüflisten-Namen, 69 gefunden); die Kuration
   „For independent hotels" verspricht weiter „contactless check-in &
   out" und enthält weiter keine Check-in-App; Kiosk-Unterkategorie
   heute 10 Apps, zwei davon deutsch.
7. **Voice am Gerät hält als USP — aber nur eng formuliert.** Kein
   Hotel-Check-in-Anbieter mit belegtem Einsatz; der angrenzende
   Kiosk-Industrie-Ring bewirbt es aber ausdrücklich für Hotel-Check-in.

**Werkzeug-Befund mit Folgewert:** Der Apaleo Store ist **ohne Browser
vollständig maschinenlesbar** — die Seiten liefern ihre Daten in der
server-seitigen Next.js-Nutzlast (`__NEXT_DATA__`), abrufbar per `curl`,
inklusive Firmensitz, Firmengrößenklasse, Unterkategorien und exakter
Preispläne. Der Baustein `browser-automation` führt Store-Seiten pauschal
als SPA-Fall; für store.apaleo.com trifft das am 09.08.2026 nicht zu.

---

## 2. Offen geblieben

1. **Zweite Wettbewerbsachse „Beratung" fehlt vollständig** — auf
   User-Entscheid in dieser Session bewusst **nicht** erhoben (siehe
   Block 3, Nebenbefund N1). Als P12/P13 im Dokument geführt.
2. **Straiv-Reviews aus 2026** (P1): Die ersten 10 von 83 enden am
   27.11.2025, der Rest ist JS-paginiert — nur über den Browser-Kanal
   erreichbar. Genau dort läge der Beleg für oder gegen die
   USP-Säule 2.
3. **Nicht geprüft, weil Kanal fehlte:** G2, Trustpilot, Crunchbase,
   companyhouse, moneyhouse (je HTTP 403); LinkedIn ohne Anmeldung;
   Elenium-Produktseiten (SPA); hosbooking.com (404);
   gastmesse.at-Ausstellerdetail (Fehlercode). Alle namentlich in
   § 6.1 des Werkstücks, keiner als Negativbefund verbucht.
4. **Nicht prüfbar (eigenes Ergebnis):** Straivs tatsächliche
   Mitarbeiterzahl (keine amtliche Quelle, Paywall); Inhalt des
   Straiv-Gesellschaftervorgangs 03/2026 („Neue Besitzverhältnisse");
   welcher Rechtsträger bei book your key das operative Geschäft trägt
   (Impressum = Einzelunternehmen, Register = GmbH); aktuelle
   Gesellschafterstruktur der likeMagic AG; ob sich die
   Store-Kategoriezuordnung seit Juli geändert hat.
5. **Acht neu gefundene Anbieter sind nur selbstauskunfts-belegt**
   (Jack-In, Open New Media, Key & Card, ILOCA, AVS, Canary, 42 GmbH,
   HOSBooking) — Primärquellen-Prüfung offen (P6). Besonders dringlich:
   Key & Card nennt eine **Apaleo-Anbindung**, ist aber nicht im Store
   gelistet.

---

## 3. Nebenbefunde außerhalb des Auftrags

**N1 — Portfolio-Zuschnitt: das Positionierungspapier hinkt dem
Angebot hinterher, oder der breitere Zuschnitt ist nicht verabschiedet.**
*(Ausgelöst durch User-Einwand während der Session; Zielort:
MKT-FUND / Leitsession.)*
Der User beschreibt das Angebot als breit aufgestellte
Hotel-Unternehmensberatung — Hotelmarketing, Zahlenanalyse, Expansion,
Nachfolge, Operations, mit Kayhan als Berater — neben dem
Digitalisierungs-/KI-Portfolio. Repo-Stand dagegen (09.08.2026):
- `fund/positionierungspapier.md` § 6 führt **ausschließlich**
  Guest-Journey-Bausteine plus PMS-Einführung, Betrieb und
  Förder-Begleitung. Beratungsleistungen kommen nicht vor. Das Papier
  ist am 09.08.2026 verabschiedet (E10).
- Kayhan ist in `projektquelle-mkt.md` als **externer Berater auf
  Rechnung** dokumentiert — ausschließlich unter dem
  Befangenheits-/Offenlegungsaspekt für BELEG2/BELEG4. **Der fachliche
  Umfang seiner Beratungsrolle ist nirgends dokumentiert.**
- „Nachfolge" erscheint im Marketing-Repo bisher nur als
  **Zielgruppen-These** (der Nachfolger als Käufer, FUND2), nicht als
  eigene Leistung.
**Nächste Aktion:** Klärung durch Leitsession + User, ob die Papiere
nachzuziehen sind (Vorwärtsverweis-Fall an § 6 des
Positionierungspapiers und an den Fassung-6-Kanon) oder ob ein
Entscheid ansteht. Erst danach ist die zweite Erhebungsachse sinnvoll —
sonst wird gegen eine unbelegte Annahme recherchiert.
**Zielort geprüft:** `fund/positionierungspapier.md` existiert, ist
verabschiedet und war nicht in meinem Scope; es ist damit ein
Leitsessions-Vorgang, kein Selbstlauf.

**N2 — Eine bestehende Einstufung kippt mit dem Zuschnitt.**
`heypensio\firzlaff\hardware\nachfassrunde-2026-07-28.md` stuft
**Brandnamic GmbH** ausdrücklich als „kein Wettbewerber, möglicher
Kanal" ein, begründet mit „Kein Self-Check-in, kein Kiosk, keine
Meldescheine … Keine Überschneidung mit unserem Produkt". Gemessen an
einem Portfolio mit Hotelmarketing und Beratung ist derselbe Anbieter
Wettbewerber **und** Kanal. Gleiche Logik bei **Everlast** (eigenes
Agenturaufbau-Programm ab 18.09.2026) und **Smart Host** (399 €/M,
„From Data to Regulars"). **Zielort:** hängt an N1; im Werkstück als
P13 geführt. Zieldatei liegt im heypensio-Repo — Übergabe über dessen
Leitsession, nicht direkt (CLAUDE.md, Firmen-Ebene Regel 3 sinngemäß).

**N3 — Zwei Aussagen des verabschiedeten Positionierungspapiers stehen
auf überholten Zahlen.** § 4 Säule 2 zitiert „Straivs Struktur laut HTR
~18 MA bei ‚2.500 Hotels'-Claim". Beide Werte sind heute überholt (50–65
bzw. 3.400+/30 Länder). Das Papier führt sie korrekt mit dem Vermerk
„beides Fremd-/Selbstauskunft, nicht selbst geprüft" — der Vorbehalt war
also gesetzt, die Zahlen sind trotzdem nachzuziehen.
**Zielort:** `fund/positionierungspapier.md` § 4 (Leitsession);
Vorwärtsverweis auch im Alt-Dossier
`heypensio\firzlaff\marktrecherche-apaleo-store-2026-07.md` § 2a.
⚠️ Die R00-Extraktionsprotokolle tragen dieselben Zahlen, sind aber
laut eigenem Kopf **VERBATIM und werden nicht nachgepflegt** — sie sind
ausdrücklich **kein** Zielort.

**N4 — FUND3 hat nebenbei eine FUND2-Frage teilbeantwortet.** Der
Persona-Validierungsplan sieht in Strang 3 vor, die
Zielgruppen-Formulierungen der nächstliegenden Anbieter zu erheben
(„was sagen deren Websites über den typischen Käufer?"). book your key
liefert das in seltener Schärfe: eine Preisstaffel, die die Zielgruppe
nach Hausgröße schneidet, mit dem Wortlaut „Kleine Hotels und
Apartmenthäuser" (16) bis **„Große Hotels" (60 Einheiten)** und der
Überschrift „Je größer das Haus, desto günstiger das Zimmer". LIKE
MAGIC bewegt sich ausweislich seiner 2026er-Meldungen (TFE Hotels,
Häfele Dialock Cloud) **nach oben in Richtung Ketten**.
**Zielort:** `fund/persona-validierungsplan.md` Strang 3 (nicht mein
Scope) — Zieldatei existiert und ist noch nicht abgearbeitet.

**N5 — Ein Preis-Ausreißer im Apaleo Store.** BE-A (FLAE ROBOTICS, CZ)
ist mit „BE-A Voice 30" bei Einheit PerRoom/PerMonth hinterlegt — Faktor
5–15 über dem gesamten Marktband. Mit hoher Wahrscheinlichkeit eine
falsch getaggte Einheit des Anbieters, kein Marktbefund. Derselbe Fall
wie die NovaVoca-Preismetrik im Alt-Dossier. **Zielort:** MKT-HANDEL
(Preis-Benchmarks) — vor jeder Verwendung an der Quelle klären.

**N6 — „Blacklisting" ist kein Alleinstellungsmerkmal.** LIKE MAGIC
führt es als Standardbaustein seines Platform-Pakets (400 €/M). Wir
führen das Blacklist-/Apaleo-One-Panel beim Piloten als eigene Leistung.
**Zielort:** MKT-HANDEL/Case Study — nicht als Alleinstellung
formulieren.

---

## 4. Stolpersteine und Learnings

### (i) Fallen

**F1 — Ein Werkzeug-Negativ aus einem Baustein hätte fast einen ganzen
Auftragsteil gekostet.** Der Baustein `browser-automation` führt
Store-Seiten als SPA-Fall („per curl/WebFetch nur leere Hüllen; nur über
den Browser prüfen"). Chrome war dieser Session entzogen — nach der
Regel wäre der Apaleo-Store-Teil als „nicht prüfbar (Kanal Browser)"
abzuhaken gewesen. Der Kanal-Test kostete zwei Minuten und ergab das
Gegenteil: vollständige Nutzlast per `curl`, sauberer als die gerenderte
UI. **Lehre:** Ein Werkzeug-Negativ misst einen Kanal zu einem
Zeitpunkt. Bevor ein Weg wegen einer Bausteinregel aufgegeben wird, wird
der Kanal einmal selbst gemessen — die Regel beschreibt eine Erfahrung,
keine Systemeigenschaft.

**F2 — Meine eigene Zahl war ein Werkzeugartefakt, und sie stützte
meine These.** „26 Apps, die das Alt-Dossier nicht nennt" schwankte je
nach Strenge des Namensabgleichs zwischen 26 und 48. Fehler in beide
Richtungen: „BE-A" traf in „Repo-Freiga**be-A**udit", „Una by Polydom"
galt als neu, weil das Dossier nur „Una" schreibt. **Lehre:** Eine Zahl,
die je nach Werkzeugeinstellung um den Faktor zwei springt, ist ein
Werkzeugartefakt und darf nicht in ein Dokument — auch dann nicht, wenn
sie plausibel wirkt. Ersetzt durch eine einzeln gegengeprüfte Liste.

**F3 — Stille Vollständigkeitsbehauptung (L-03) im eigenen Text.** Ich
schrieb „Alle 36 im Alt-Dossier namentlich geführten Anbieter wurden
wiedergefunden (36/36)". Die 36 waren meine Stichprobe, nicht die
Grundgesamtheit — das Dossier nennt deutlich mehr. Korrigiert auf 69
Namen mit genanntem Auswahlkriterium. **Lehre:** Der Nenner einer
Verifikationsquote ist selbst eine Behauptung.

**F4 — Ein Agenten-Negativ, das nur den halben Suchraum gemessen
hatte.** Der Anbieter-Agent meldete „deutscher Meldeschein bei book your
key auf den geprüften Seiten nicht gefunden" — geprüft waren Startseite,
/en/ und /guestidea/. Die Seite `/automaten/` hatte er nicht geladen;
dort steht wörtlich „Ausweisdaten und Meldeschein nimmt der Automat
gleich mit auf". **Lehre:** Der mitgenannte Suchraum eines Negativs ist
Teil der Behauptung — und genau der Teil, den man beim Verdichten
verliert. Der eigene Nachgriff auf die im Suchraum fehlende Seite hat
den wichtigsten Einzelbefund der Runde gehoben.

**F5 — Die Juli-Runde hatte beide Zahlen und wählte die falsche.** Das
Alt-Dossier notiert wörtlich „laut Hotel Tech Report 18 Mitarbeiter
(Store-Klasse ‚50+' damit fraglich)" — die Store-Angabe lag vor und
wurde zugunsten der kleineren Zahl verworfen. Die kleinere Zahl stützte
die eigene These („Straiv ist verwundbar"). **Lehre:** Wenn zwei Quellen
sich widersprechen und eine davon die eigene These stützt, ist der
Verdacht gegen die eigene Auswahl zu richten, nicht gegen die
unbequeme Quelle. Der Vermerk „fraglich" hat die Fehlwahl nicht
verhindert — er hat sie dokumentiert und trotzdem durchgelassen.

**F6 — Der Auftragszuschnitt war selbst eine Annahme.** Der Auftrag
lautete „Wettbewerbsbild aktualisieren"; ich habe den Segment-Zuschnitt
des Alt-Dossiers ungeprüft geerbt und ein Papier gebaut, das sich wie
*das* Wettbewerbsbild liest, obwohl es ein Technik-Segment misst. Der
User hat es gefangen. **Lehre:** Bei einer AKTUALISIERUNG erbt man nicht
nur Daten, sondern auch den Zuschnitt der Vorgängerarbeit — und der
gehört genauso geprüft wie ihre Zahlen. Eine Aktualisierung braucht die
Frage „Stimmt der Ausschnitt noch?" vor der Frage „Stimmen die Werte
noch?".

### (ii) Bewährte Muster

**M1 — Byte-Nachgriff auf die Zahlen der Agenten.** Zwei der vier
Agenten meldeten von sich aus, ihre Werte seien durch den
WebFetch-Zusammenfasser gelaufen. Der Nachgriff per `curl` auf die vier
tragenden Seiten (book-your-key-Preise, likemagic-Preise,
book-your-key-Impressum, Wavetec) kostete wenige Minuten und hob die
wichtigsten Zahlen von „Zitat-Kandidat" auf Byte-Ebene. Er brachte
zusätzlich Substanz, die kein Agent gemeldet hatte („Für draußen
gebaut", „Montage und Schulung … Teil des Preises", RemoteLock).

**M2 — Getrennte Beleg-Kürzel für Leseweg und Quellenart.** Die
Trennung BYTE/ROH (wie gelesen) von SELBST/DRITT/REVIEW/REGISTER (wer
sagt es) verhindert den häufigsten Verdichtungsfehler: eine sauber
zitierte Anbieter-Selbstauskunft wirkt sonst wie ein geprüfter Fakt.

**M3 — Die Gegenprobe gegen die eigene Prämisse hat mehr gebracht als
die Verifikation.** Der Auftrag an den Gegenprobe-Agenten lautete
ausdrücklich „widerlege diese Behauptung", nicht „prüfe sie". Ergebnis:
Die USP-Säule hält im Kern, aber ihre Formulierung war zu weit — ein
Befund, den eine bestätigende Recherche nie geliefert hätte.

**M4 — Ausschlussliste statt Suchauftrag beim Entdeckungs-Strang.** Die
34 bekannten Anbieter standen als Ausschlussliste im Prompt. Der Agent
hat acht Anbieter gefunden, die unser Bestand nicht kannte — und
gleichzeitig die Ausschlusslisten-Treffer als Positivkontrolle benutzt
(„die Kategorie erreicht den bekannten Markt"). Das ist eine
Positivkontrolle, die sich aus dem Auftragsdesign selbst ergibt.

**M5 — Positivkontrolle als Marker-Zählung im selben Lauf.** Bei jeder
Volltextsuche in einer heruntergeladenen Seite wurde ein Begriff
mitgezählt, der treffen MUSS („Automat" 38 Treffer, „Kiosk" 12
Treffer). Das macht aus „Voice kommt nicht vor" einen belastbaren Satz
und kostet nichts.

---

*Session R03-D, 09.08.2026. Werkstück: `fund/wettbewerbsbild.md`.
Kein eigener Debrief — Wahrheits-Kanal unangetastet.*
