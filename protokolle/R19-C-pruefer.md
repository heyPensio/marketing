# R19-C — Prüfprotokoll (unabhängiger Prüfer, frischer Kontext)

> **Prüfstand:** Commit `01c98d9` (verifiziert: `git diff 01c98d9` über beide
> Prüflinge leer, HEAD = Prüfstand; Commit-Zeit 19.08.2026 12:17:47 MESZ).
> **Prüflinge:** `marke/live-welle/vertiefung-finalisten-2026-08-19.md`
> (vollständig gelesen, 445 Zeilen zum Prüfstand) und
> `marke/live-welle/k4-diktat-testbogen-2026-08-19.md` (vollständig).
> **Vorgehen:** Jede Zahl und jedes Zitat am Rohbeleg selbst nachgezählt
> (Roh-JSON per Node, absolute Pfade; HTML per grep; RDAP-Metas gelesen);
> Aussage und Fundstelle getrennt geprüft; Quellen zusätzlich RÜCKWÄRTS
> gelesen (jede Trefferliste Zeile für Zeile gegen den Bericht).
> **Datum der Prüfung:** 19.08.2026.

---

## 0. Was der Prüfer BESTÄTIGT (damit die Befunde unten den richtigen Rahmen haben)

Am Rohbeleg reproduziert und korrekt (Auswahl, je selbst nachgezählt):

- **Kernzahlen Register:** DPMA marHits Wisestay 0 / Innsight 1 / Stayahead 4
  (`015/016/017-*-dpma.body.json`); DPMA-Trefferlisten Wisestay leer (1
  Kopfzeile), Stayahead 4 Zeilen mit exakt den berichteten Nummern und
  Aktenzuständen (`006-`/`010-liste-*.hop-2.body.html`); EUIPO 0/0/0 bei
  Positiv APPLE=963 / Nulltoken=0; TMview Wisestay 0 / Innsight 19 /
  Stayahead 8 bei Positiv apaleo=53 / Nulltoken=0 — alles im selben Lauf.
- **Innsight-DE-Marke:** `004-detail-DE-3020242492945.body.html` trägt
  verbatim: Wort-/Bildmarke, Anmeldetag 28.12.2024, Eintragung 09.01.2025,
  Zeitgeist-Geschenke GmbH Hilchenbach, Kl. 9+13, „Marke eingetragen",
  Widerspruchsfrist-Ende 14.05.2025, Schutzende 28.12.2034 — die
  §-3.2-Tabelle des Berichts ist feldgetreu.
- **Stayahead-Zuordnungstabelle § 3.3:** Alle vier Nummern (1100039,
  1779697, 010385284, 013604641) stehen mit Zeichen, Klassen, Status und
  Inhabern exakt so im TMview-Rohbeleg `016-getrennt-tmview-Stay-Ahead.body.json`;
  GEOPOST IR 1779697 „Eingetragen", Kl. 39, `tProtection` enthält DE ✔;
  beide DPMA-/TMview-Statusangaben stimmen überein ✔.
- **Inn:Sights:** `019-getrennt-tmview-Inn-Sight.body.json` trägt verbatim
  DE 3020232350773, Kl. 35,41,42, „Eingetragen", Inn:Syn GmbH,
  Anmeldedatum 2023-09-19 — das Blockzitat in § 3.2 stimmt.
- **Domains:** RDAP-Metas/Bodies bestätigen alle Tabellenwerte in § 4
  (wisestay.de 404 am 19.08. 09:59:57 UTC; wisestay.com reg. 28.10.2016,
  exp. 28.10.2026, Atom-NS, Unstoppable; innsight.de ui-dns, last changed
  12.08.2018; innsight.com 08.10.1997, GoDaddy; stayahead.de ohne NS,
  07.07.2026; stayahead.com 14.06.1997, Tucows/Cloudflare). Der
  820-€-Preis steht verbatim im Seitenabzug
  (`005-web-stayahead.de-direkt.hop-2.body.html`: „Alter Preis: 1.290 € Neuer
  Preis: 820 €"); der 88.000-USD-Preis steht verbatim im Browser-Protokoll
  (dazu Befund P-19 zur Belegstufe).
- **Handles:** LinkedIn/YouTube-Titel und Canonicals wie berichtet
  (u. a. `@wisestay` → Kanal „stay wise", LinkedIn stayahead 404 bei
  Positiv apaleo 200 / Zufallshandle 404); Instagram-HTTP-Bytes 610.928 vs.
  610.942 exakt wie in § 7.1; Facebook-HTTP-Neumessung: Positiv- und
  Negativkontrolle identisch (je 400/„Error"/1542 B) — der Ausweich auf den
  Browser war geboten.
- **Gegenkontrolle § 6.1:** Alle sechs Ist-Werte am Roh-JSON reproduziert
  (Staywise 1/7/1, Hostpilot 2/10/2); Sollwerte in
  `protokolle/R19-B-bericht.md` (Abschnitt Favoriten-Messlauf) wie zitiert;
  STAYWISE- und HOSTPILOT-Anker in den Rohzeilen vorhanden.
- **ID-Vergabe § 1:** Kollisions-Grep am Vor-Session-Stand `729008e`
  unabhängig wiederholt: `N-159|N-160` → exakt die drei genannten planenden
  Fundstellen (R19-B-Bericht, Tagesplan 18.08., Tagesplan 19.08.), keine
  Vergabe; Positivkontrolle `N-145` → exakt 2 Fundstellen ✔.
  `welle4-2026-08-18.txt`: 24 IDs N-135…N-158, Zeile 11 = `N-145;Wisestay` ✔;
  Welle 5/6 tragen keine IDs ✔. **Die ID-Vergabe ist belastbar.**
- **Fertig-Kriterium-Matrix § 2:** 9 Kanäle × 3 Namen = 27 Zellen
  abgezählt; 24 mit Ergebnis + Beleg, 3 ❌ (Instagram) mit Kanal + Grund in
  § 7 — **formal erfüllt** (inhaltliche Mängel zweier Zellen: P-04, P-08).
- **Hash-Spot-Check:** 3 von ~200 Dateien nachgerechnet (SHA-256 stimmt je);
  6 Laufordner tragen `hashes.txt` (zum Prüfstand; s. P-16).

---

## 1. Befunde

### P-01 · SCHWER · K4-Bogen, Abschnitt „Vorbefunde" (Wisestay-Punkt)

- **Behauptet:** „Registerseitig sind alle drei Varianten heute ohne
  DE/EU-Treffer gemessen (Varianten-Lauf R19-C, TMview 0/0/0)" — bezogen
  auf die drei genannten Falschformen „Wise Stay" (getrennt), „Weisstay",
  „Wisestey".
- **Rohbeleg sagt:** „Wise Stay" lief NICHT im Varianten-Lauf, sondern im
  Getrennt-Lauf und lieferte **24 Treffer**
  (`022-getrennt-tmview-Wise-Stay.body.json`), darunter im DE/EM-Raum
  **STAYWISE (EM, Kl. 42, EINGETRAGEN, Björndal)**. Die 0/0/0 gehören zu
  Wysestay/Weisstay/Wisestey (`015/016/017-variante-*.body.json`).
- **Warum schwer:** Der Bogen ist das Dokument, das dem User in die Hand
  gegeben wird; der Satz ist eine falsche Entwarnung über genau die
  Falschform, an der die einzige eingetragene Kernklassen-Marke des
  Wisestay-Umfelds hängt — und er widerspricht dem eigenen Bericht § 3.1.
  (Klasse: geklonter Textbaustein transportiert eine Entwarnung in einen
  Zustand, in dem sie nicht gilt.)
- **Zu tun:** Satz ersetzen: 0/0/0 nur den drei phonetischen Varianten
  zuordnen; für „Wise Stay" die STAYWISE-Feststellung aus § 3.1 in den
  Bogen übernehmen.

### P-02 · SCHWER · § 3.2 / § 3.3 (TMview-Getrennt-Läufe) — Ausschnitts-Auswertung nicht ausgewiesen

- **Behauptet:** § 3.2 listet „Weitere DE/EU-Treffer im Suchraum aus
  demselben Lauf"; § 3.3 nennt „TMview 297" für „Stay Ahead". Der Auftrag
  verlangt „ganze Trefferliste, nie Ausschnitt".
- **Rohbeleg sagt:** `019-getrennt-tmview-Inn-Sight.body.json`:
  totalResults=**307**, geliefert **100** Zeilen (totalPages=4);
  `016-getrennt-tmview-Stay-Ahead.body.json`: totalResults=**297**,
  geliefert **100** (totalPages=3). Alle DE/EM-Aussagen über diese beiden
  Läufe (inkl. der „Weitere Treffer"-Liste) beruhen auf den ersten 100
  Zeilen; **207 bzw. 197 Zeilen wurden nie gesehen.** Der Bericht weist
  das nirgends aus — weder in § 3 noch in § 7.
- **Zu tun:** Restseiten nachziehen (oder TMview-Lauf mit Office-Filter
  DE/EM/WO wiederholen) ODER die Geltungsgrenze „ausgewertet: erste
  100/307 bzw. 100/297 Zeilen, Sortierung des Kanals unbekannt" sichtbar
  in § 3 und § 7 eintragen. Ohne eines von beidem trägt keine
  „nur …"-Aussage über diese Läufe.

### P-03 · SCHWER · § 3.2 — lebender DE/EU-wirksamer Treffer nicht angekommen (Quelle rückwärts)

- **Behauptet:** § 3.2 nennt als weitere Suchraum-Treffer INNSITE,
  INNERSIGHT3D („anderes Zeichen"), InnerSight — Liste ohne benanntes
  Auswahlkriterium, liest sich als vollständig.
- **Rohbeleg sagt:** In den GELIEFERTEN 100 Zeilen desselben Laufs steht
  zusätzlich **INNOSIGHT (WO 972657, Kl. 9, 16, 35, 41, EINGETRAGEN,
  Innosight LLC, `tProtection` enthält DE und EM)** — ein LEBENDES,
  DE/EU-wirksames Zeichen in drei Suchraum-Klassen, mit einem
  Buchstaben Abstand zu „Innsight" (näher als das genannte INNERSIGHT3D).
  Ebenfalls ungenannt aus demselben Lauf (geringere Last, aber Teil der
  impliziten Vollständigkeit): INNOSIGHT (WO 1335724, Kl. 10, eingetragen,
  Philips — außerhalb Klassen), INNOSIGHT (EM, Kl. 9/42, beendet),
  INN SIGHTJOGGING (DE, Kl. 39/41/42, abgelaufen), Winnow Foresight (EM,
  Kl. 9, eingetragen), worldfue institute … (EM, Kl. 41/42/44,
  eingetragen), InData Labs … Insightful (EM, Kl. 35/9/42, eingetragen),
  i2i INSIGHT TO INNOVATION (EM, Kl. 42, abgelaufen).
- **Zu tun:** INNOSIGHT in § 3.2 und in die K2-Bewertung Innsight (§ 8)
  aufnehmen; für die Liste ein Auswahlkriterium benennen (welche
  Zeichen-Nähe wird gelistet?) oder vollständig listen (L-03).

### P-04 · MITTEL · § 2, Zelle TMview × Stayahead — „im Suchraum nur BEENDETE Marken" ist falsch

- **Behauptet:** „⚠️ 8 gesamt; im Suchraum nur BEENDETE Marken."
- **Rohbeleg sagt** (`025-N-160-tmview.body.json`): Im Klassen-Suchraum
  (Definition § 3: Kl. 9/35/36/37/38/41/42+43) liegt **StayAhead (GB,
  Kl. 16, 41, EINGETRAGEN, StayAhead Training Ltd)** — lebend; ebenso
  eingetragen (außerhalb Klassen): IN Kl. 5, CN Kl. 20/28. Im DE/EM-Raum
  liegt **gar keine** der 8 Zeilen — auch dann wäre „nur beendete" falsch,
  richtig wäre „keine". Der Bericht kennt die GB-Marke selbst als lebend
  (§ 4: „passt zur GB-Marke UK00002334096").
- **Zu tun:** Zelle korrigieren, z. B.: „8 gesamt; keine DE/EM-Zeile;
  lebend im Klassen-Suchraum nur GB (StayAhead Training)". Die
  §-3.3-Formulierung („im DE/EM-Raum keine lebende Marke") ist die
  richtige und gehört in die Matrix — nicht umgekehrt (Verdichtungs-Drift
  in der Zusammenfassung, die in die Entscheidungsvorlage wandert).

### P-05 · SCHWER · § 8 je Finalist „K4/K6-EN: offen" — K6 ist GANZ offen, nicht nur der EN-Teil

- **Behauptet:** § 8 führt je Finalist als offen nur „K4/K6-EN"; § 7.8
  nennt K4-Diktat-Test und EN-Muttersprachler-Check; § 9 (Was der User
  braucht) nennt nur K4 und E-K5.
- **Quellenlage:** K6 ist K.-o. (Katalog § 2) und verlangt nach E-K4
  (Nachtrag E12) protokollierte Wörterbuch-/Slang-Checks in
  **DE/EN/TR/FR/ES/IT**. Der K6-Wörterbuch-Doppellauf vom 18.08.
  (Tagesplan 18.08., Nachtrag 16:43) lief nur über die fünf
  R19-B-Favoriten N-130…N-134; der 71er-Lauf der Welle 2 enthält keinen
  der drei Finalisten (grep Wisestay/Innsight/Stayahead in
  `naming-sprint-2026-08-welle2.md`: 0 Treffer; Positivkontrolle des
  Grep: „K6" trifft dort mehrfach). **Für Wisestay, Innsight und
  Stayahead existiert kein dokumentierter K6-Wörterbuch-Lauf — in keiner
  der sechs Sprachen.**
- **Warum schwer:** Ein offenes K.-o.-Kriterium, das im Bericht als „nur
  EN-Check offen" erscheint, kann morgen unbemerkt am Entscheid vorbei
  rutschen; die Formulierung ist eine unbeabsichtigte Teil-Entwarnung.
- **Zu tun:** In § 7 als eigenen Posten aufnehmen („K6-Wörterbuch-/
  Slang-Doppellauf 6 Sprachen: für alle drei nicht erhoben"), § 8 je
  Finalist auf „K4/K6 (alle Kanäle): offen" korrigieren, § 9 um den
  Punkt ergänzen. Der Lauf selbst ist mit `k6-doppellauf-shanks.js`
  mechanisch in Minuten nachholbar.

### P-06 · MITTEL · § 8 K2 Wisestay — „null Treffer über fünf Varianten und beide Schreibweisen"

- **Behauptet:** „Register DE/EU: null Treffer über fünf Varianten und
  beide Schreibweisen."
- **Rohbeleg sagt:** Für die getrennte Schreibweise „Wise Stay" ist TMview
  **24** (davon DE/EM: STAYWISE eingetragen + EAT WISELY STAY HEALTHY
  abgelaufen) — der Bericht stellt das in § 3.1 selbst fest, und der
  Folgesatz in § 8 („Dagegen: …") nennt STAYWISE. Der Zählsatz selbst ist
  trotzdem falsch; genau solche Sätze werden in die Entscheidungsvorlage
  kopiert.
- **Zu tun:** Satz präzisieren: „null IDENTISCHE Treffer; die getrennte
  Schreibweise liefert im DE/EM-Raum STAYWISE (eingetragen, Kl. 42)".

### P-07 · MITTEL · § 3.2 — INNSITE-Fundstelle falsch („aus demselben Lauf")

- **Behauptet:** INNSITE stamme „aus demselben Lauf" (dem
  Inn-Sight-Getrennt-Lauf).
- **Rohbeleg sagt:** INNSITE steht NICHT in den 100 gelieferten Zeilen von
  `019-getrennt-tmview-Inn-Sight.body.json`; die Werte (DE + EM,
  Kl. 9/16/42, abgelaufen bzw. beendet) stammen aus dem Varianten-Lauf
  `021-variante-Innsight-Innsite.body.json` (16 Treffer). Aussage
  richtig, Fundstelle falsch — nach P-02 ist zudem offen, ob INNSITE in
  den ungelesenen 207 Zeilen des Getrennt-Laufs auch vorkommt.
- **Zu tun:** Fundstelle korrigieren (Varianten-Lauf `Innsite`).

### P-08 · MITTEL · § 2, Zelle TMview × Innsight — Läufe vermischt, Sinnsight fehlt

- **Behauptet:** „⚠️ 19 gesamt; im Klassen-Suchraum: `Inn:Sights` DE
  Kl. 35/41/42 eingetragen" — liest sich, als sei Inn:Sights unter den 19.
- **Rohbeleg sagt:** Inn:Sights ist NICHT unter den 19 Zeilen des
  Identitäts-Laufs (`024-N-159-tmview.body.json`); es stammt aus dem
  Getrennt-Lauf (der Bericht sagt das in § 3.2 selbst). Die einzige
  DE-Zeile der 19 ist **Sinnsight. (DE, Kl. 41/44, Beendet)** — Kl. 41
  liegt im Suchraum; im Bericht nirgends erwähnt.
- **Zu tun:** Zelle nach Lauf trennen („19 gesamt, darin DE nur
  Sinnsight beendet; Inn:Sights aus dem Getrennt-Lauf") und Sinnsight in
  § 3.2 als geringen Treffer nachtragen.

### P-09 · MITTEL · § 6.2 — „Positiv 53 / Negativ 0 in allen fünf Läufen" ist nicht belegt

- **Behauptet:** TMview trage heute wieder, „Positiv 53 / Negativ 0 in
  allen fünf Läufen".
- **Rohbeleg sagt:** Die apaleo-53-Positivkontrolle existiert nur im
  Hauptlauf (`021-tmview-positiv.body.json`). Die Gegenkontrolle trägt
  eigene Soll/Ist-Anker (7 und 10), `dpma-detail` und `domain-varianten`
  tragen Discovery=true + Nulltoken=0 (plus De-facto-Anker durch
  Nicht-Null-Ergebnisse im selben Lauf), `dpma-treffer` hat gar kein
  TMview. Die Substanz (Kanal lebte in jedem Lauf) ist verteidigbar —
  der Satz, wie er dasteht, ist es nicht (Entwarnung ohne Quelle im
  behaupteten Umfang; auch die Zahl „fünf" passt zu keiner Ordnerzählung).
- **Zu tun:** Satz ersetzen durch die tatsächlichen Anker je Lauf.

### P-10 · MITTEL · § 3.3 / § 7 — DPMA-Getrennt-Treffer (12 und 3) und EUIPO-6 nie gesichtet, Lücke nicht deklariert

- **Behauptet:** § 3.3: „Getrennt geschrieben ‚Stay Ahead': DPMA 12 ·
  EUIPO 6 · TMview 297" — nackte Zahlen; § 7 führt diese Nicht-Erhebung
  nicht.
- **Rohbeleg sagt:** Für die 12 DPMA-Treffer „Stay Ahead" und die 3 zu
  „Inn Sight" wurde keine Trefferliste gezogen (kein Beleg im Ordner) —
  Zeichen/Klassen/Status dieser DE-wirksamen Treffer sind unbekannt. Die
  6 EUIPO-Items liegen im Rohbeleg
  (`017-getrennt-euipo-Stay-Ahead.body.json`) und wurden nie ausgewertet;
  der Prüfer hat sie gelesen: alle 6 tot oder außerhalb des Suchraums
  (u. a. THINK AHEAD.STAY AHEAD., EUTM Kl. 9/16/42, 2012 abgelaufen;
  STAY AHEAD OF THE GAME, L'ORÉAL, Kl. 3, Registered) — **entwarnend,
  aber das war ohne Lesung nicht wissbar.**
- **Zu tun:** DPMA-Trefferlisten „Stay Ahead"/„Inn Sight" nachziehen oder
  in § 7 als „nicht erhoben" mit Grund führen; die EUIPO-6-Lesung (Ergebnis
  oben) in § 3.3 nachtragen.

### P-11 · MITTEL · § 3 (alle drei) — Varianten-Raster bleibt hinter Verfahren § 3.2 zurück, ohne Ausweis

- **Behauptet:** „Varianten-Raster (Verfahren § 3.2, phonetisch)".
- **Quellenlage:** Verfahren § 3.2 verlangt zusätzlich Trunkierungs-Läufe,
  Bindestrich-Variante, Endungs-Varianten und die Einzelsuche jedes
  tragenden Bestandteils — und die SCHRIFTLICHE Festlegung des Rasters
  VOR der Suche. Gelaufen sind phonetische Varianten + getrennte
  Schreibweise. Pikant: Der eigene K4-Bogen nennt „Stay-Ahead"
  (Bindestrich) als erwartbare Falschform — registerseitig wurde genau
  diese Form nie gesucht. § 7 deklariert nichts davon.
- **Zu tun:** Fehlende Raster-Achsen nachziehen oder als „nicht erhoben"
  in § 7 ausweisen. (Hinweis: Nach dem Prüfstand liegt bereits ein
  Trunkierungs-Nachlauf im Rohbelege-Ordner — s. P-15; dort sind
  `wisesta*` und `innsigh*` „nicht auslesbar", der Nachlauf schließt die
  Lücke also nur teilweise.)

### P-12 · MITTEL · § 7 — Verfahrens-Pflichtschritt § 5.3 (Branchenverzeichnisse) fehlt als Posten

- **Behauptet:** § 7 listet zehn Nicht-Erhebungen; Branchenverzeichnisse
  stehen nicht darunter.
- **Quellenlage:** Verfahren § 5.3 (Schritt C) verlangt Sichtung Apaleo
  App Store + Hotel-Tech-Verzeichnisse auf gleichnamige/nahe Anbieter —
  für die drei Finalisten nirgends erhoben (grep „App Store"/
  „Branchenverzeichnis" über Bericht und R19-B: 0 Treffer). Ebenso ist
  der W9-Abgleich gegen `fund/wettbewerbsbild.md` weder gelaufen noch als
  offen benannt. Gerade bei Innsight (Branchen-Namensvetter INNsight.com)
  wäre § 5.3 der Kanal, der weitere Namensvettern fände.
- **Zu tun:** Als §-7-Posten aufnehmen (oder nachziehen); W9 in § 8 als
  „nicht bewertet" kennzeichnen.

### P-13 · MITTEL · § 3 Kopf — Verfahrens-Vorbehalt beim Verdichten verloren (Verkehrsgeltungs-Klausel)

- **Behauptet:** „Treffer außerhalb werden genannt, aber nicht als Risiko
  gewertet."
- **Quellenlage:** Verfahren § 2.2 wörtlich: „… werden notiert, aber
  **nur bei bekanntem Zeichen (Verkehrsgeltung)** als Risiko gewertet."
  Die Ausnahme ist im Bericht gestrichen — und genau sie wäre bei der
  einzigen lebenden Stayahead-Marke (GEOPOST „STAY AHEAD", Kl. 39;
  Konzern mit erheblicher Marktpräsenz) zu prüfen gewesen. Ob sie greift,
  ist Wertungsfrage; dass die Prüffrage nie gestellt wurde, ist der
  Befund.
- **Zu tun:** Klausel wieder in den Satz nehmen; für GEOPOST die Frage
  „bekanntes Zeichen?" ausdrücklich stellen oder als offen markieren.

### P-14 · MITTEL · § 10 / § 1 — Nacharbeit NACH dem eingefrorenen Prüfstand, außerhalb des Berichts

- **Beobachtet:** Im Rohbelege-Ordner liegen zwei Läufe von NACH dem
  Bericht-Commit (12:17:47): `trunkierung-20260819T102200Z-613ef4/`
  (12:22) und `dpma-auskunft-20260819T102552Z-941cbc/` (12:25), dazu zwei
  untracked Skripte (`trunkierung-r19c.js`, `dpma-auskunft-r19c.js`).
  Beides steht in keinem committeten Dokument.
- **Inhaltlich relevant:** Der Auskunfts-Lauf BESTÄTIGT die
  Inn:Sights-Daten des Berichts und liefert Neues mit Entscheidungswert:
  Inn:Sights ist **Wortmarke** (nicht Wort-/Bild), Schutzende 19.09.2033,
  und ihr Kl.-42-Verzeichnis umfasst wörtlich „Entwicklung, Programmierung
  und Implementierung von Software; IT-Beratungs- …dienstleistungen" —
  das ist das Kernleistungsfeld der Finalisten und verschärft den
  K2-Befund Innsight über den Berichtsstand hinaus.
- **Zu tun:** Nacharbeit disziplinieren: als markierten NACHTRAG in den
  Bericht (Original sichtbar) oder im Abschlussprotokoll ausweisen;
  Skripte committen oder verwerfen. Ein Rohbelege-Ordner, dessen Bestand
  stillschweigend über den Berichtsstand hinauswächst, lässt die
  §-10-Verzeichnisliste altern (heute schon: 8 statt 6 hashes-Ordner).

### P-15 · HINWEIS · Kopfblock — „fünf Laufordner mit hashes.txt"

Zum Prüfstand waren es **sechs** (die eigene §-10-Tabelle listet sechs
Skript-Läufe mit hashes.txt plus Browser-Ordner ohne); nach der
Nacharbeit acht. Zahl ohne Zählweg, gegen das eigene Verzeichnis prüfbar.

### P-16 · HINWEIS · § 3.2 — unbelegte Werkzeug-Eigenschafts-Aussage

„(sie sucht die exakte Zeichenfolge)" über die DPMA-Smartsearch ist eine
eigene Mechanik-Vermutung ohne Quelle (Fähigkeits-Aussage über ein
Drittsystem). Der beobachtete Fakt — marHits=1, Inn:Sights erscheint
nicht — trägt auch ohne die Klammer; der Nachlauf zeigt zudem, dass
Smartsearch Trunkierung (`*`) beherrscht, die Mechanik also reicher ist
als „exakte Zeichenfolge".

### P-17 · HINWEIS · § 3.1/§ 3.3 — Varianten-Nullen ohne ausgewiesene Kontrolle DIESES Laufs

Die 9 Varianten-Nullen (Wysestay/Weisstay/Wisestey/Wisestai,
Steyahead/Stayahed/Stayaheadt/Staiahead, Innsyght) stammen aus dem
`domain-varianten`-Lauf; die §-6-Kontrolltabelle hat für diesen Lauf
keine Zeile. Im Rohbeleg trägt er Nulltoken=0 und De-facto-Positivanker
(Innsight 19 / Insight 21910 / Innsite 16 im selben Lauf) — die Nullen
sind also gedeckt, aber der Bericht weist es nicht aus. Ebenso
unberichtet: Inzight → 2 Treffer (keine DE/EM-Zeile).

### P-18 · HINWEIS · § 3.2/§ 8 — US-Markenbestand des Branchen-Namensvetters nicht erwähnt

In den 19 TMview-Zeilen sichtbar: INNsight.com, Inc. hält u. a.
**US 90045083 (Kl. 35/42/43, Eingetragen)** und weitere US-Marken.
Außerhalb des DE/EU-Wertungsraums (per § 2.2 korrekt nicht gewertet),
aber unter der E-K1-Begründung „internationales Ökosystem" für den
Umfeld-Abschnitt Innsight entscheidungsrelevant — der Namensvetter ist
nicht nur Domain-/Social-Halter, sondern US-Markeninhaber in den
Kernklassen. Gleiches Muster klein: DPMA-Smartsearch „Innsight" meldet
neben marHits=1 auch patHits=1 und gsmHits=1 (Patent-/
Gebrauchsmuster-Namensvetter; Rohbeleg `016-N-159-dpma.body.json`) — im
Bericht unerwähnt (für die Markenlage marginal).

### P-19 · HINWEIS · Belegstufe Browser-Messungen

Die Facebook-/Atom.com-/Instagram-Browser-Befunde (u. a. 88.000 USD,
„Kedrian Parks", INNsight-Seitentext) existieren nur als verbatim-Text im
selbst geschriebenen `browser-protokoll.md` — ohne Datei-Rohabzug, ohne
Hash, nicht unabhängig reproduzierbar (das Protokoll sagt das selbst).
Das ist werkzeugbedingt in Ordnung, gehört aber als dritte
Leseweg-Kategorie in die §-10-Zweiachsigkeit („Browser-Sichtung, nur
Sitzungsprotokoll" ≠ „selbst im Rohabzug gelesen"). § 10 subsumiert
derzeit ALLE Zitate unter „selbst im Rohabzug gelesen".

### P-20 · HINWEIS · § 4 — Feststellungs-Tabelle trägt Wertungs-Spalte

Die Domain-Tabelle führt „Bewertung K3" als Spalte in der
Feststellungs-Tabelle. Die Wertung ist als solche beschriftet (deshalb
nur Hinweis), aber die saubere §-9.4-Trennung wäre: Feststellung in § 4,
K3-Urteil nur in § 8. Sonst ist die Trennung Feststellung/Bewertung im
Bericht diszipliniert eingehalten (Bewertungen ausgewiesen als solche,
Einschätzungen markiert).

### P-21 · HINWEIS · § 3.3 — drittes K1-Indiz ungenutzt

Der Getrennt-Lauf trägt zusätzlich **STAY AHEAD OF RISK (EM, Kl. 42,
Anmeldung zurückgewiesen, Apomatix)** — ein dritter
EU-Zurückweisungsfall eines „Stay-ahead"-Zeichens. Er hätte das
K1-Warnsignal in § 3.3/§ 8 GESTÜTZT; die Rückwärts-Lesung findet also
auch Material zugunsten der Berichtsthese, das liegen blieb.

---

## 2. Pflicht-Kategorien — Ergebnisse MIT NENNER

### (a) Verneinungen ohne Suchweg und/oder ohne tragende Positivkontrolle

**32 Verneinungen/Entwarnungen geprüft** (Register-Nullen 7 · Varianten-
Nullen 9 · Trefferlisten-/DE-EM-Nullen 3 · Domain-/Handle-Negative 3 ·
„nicht erhoben"-Aussagen 5 · ID-Kollisions-Negativ 1 · Sammel-Entwarnungen
und Zell-Negative 4). Ergebnis: **24 tragen** (Suchweg + Kontrolle im
selben Lauf, am Rohbeleg reproduziert — die Belegdisziplin des Berichts
ist im Kern deutlich über dem Üblichen). **8 beanstandet:**
4 sachlich falsch (P-01 K4-Bogen 0/0/0 · P-04 „nur BEENDETE" · P-06 „null
über beide Schreibweisen" · P-09 „in allen fünf Läufen"), 2 „nur"-Aussagen
auf unausgewiesenem 100-Zeilen-Ausschnitt (P-02, beide Getrennt-Läufe),
1 Kontrolle nicht ausgewiesen (P-17 Varianten-Lauf), 1 unbelegte
Werkzeug-Mechanik-Klammer (P-16).

### (b) Was in den Quellen steht und nicht im Bericht ankam (rückwärts gelesen)

**9 Laufordner rückwärts gelesen** (7 aus dem Prüfauftrag + 2 nach dem
Prüfstand entstandene), alle gelieferten Trefferzeilen der relevanten
Läufe einzeln gegen den Bericht gehalten. **10 nicht angekommene
Sachverhalte**, davon 1 schwer (P-03 INNOSIGHT WO, lebend, DE/EU-wirksam,
Kl. 9/16/35/41), 3 mittel (P-08 Sinnsight + Lauf-Vermischung · P-10
DPMA-12/3 und EUIPO-6 ungelesen · P-14 Nachlauf-Erkenntnisse Inn:Sights
Wortmarke/Kl.-42-Verzeichnis), 6 Hinweise (P-17 Inzight=2 · P-18
US-Marken + patHits/gsmHits · P-21 STAY AHEAD OF RISK · INN SIGHTJOGGING ·
Winnow/worldfue/InData-Gruppe · L'ORÉAL-Item als einziges lebendes der
EUIPO-6). Kein gelesener Rohbeleg WIDERSPRICHT einem berichteten
Einzelwert — die Widersprüche liegen in Verdichtungs- und
Zellen-Aussagen (P-01/P-04/P-06), nicht in den Detailkapitel-Zahlen.

### (c) Blindstellen des eigenen Vorgehens (was dieser Prüflauf NICHT fangen konnte)

1. **Capture-Treue:** Ich habe Bericht gegen GESPEICHERTE Rohbelege
   geprüft, nicht gegen die Live-Register. Hätte das Abruf-Skript
   systematisch falsch gespeichert (falscher Endpoint, verfälschte
   Antwort), sähen Bericht und Rohbeleg konsistent aus und wären beide
   falsch. Abmilderung: Plausibilität der JSON-Strukturen (echte
   TMview-/DPMA-/EUIPO-Formate), Kontrollpaare mit unabhängigen
   Sollwerten aus R19-B — aber kein Ausschluss.
2. **Zeilen 101+:** Für die beiden 297/307er-Läufe teile ich die
   Blindstelle des Berichts — die ungelieferten Zeilen existieren
   nirgends lokal; ich kann nur feststellen, DASS sie fehlen (P-02),
   nicht, WAS darin steht.
3. **Browser-Belege:** Facebook/Atom/Instagram-Browser-Befunde sind
   Selbstprotokoll der geprüften Session ohne unabhängiges Artefakt —
   für mich prinzipiell unprüfbar (P-19). Ein dort erfundener oder
   verlesener Wert (z. B. der 88.000-USD-Preis) wäre für mich unsichtbar.
4. **Hash-Vollabgleich:** 3 von ~200 Hashes nachgerechnet — eine
   manipulierte oder vertauschte Einzeldatei außerhalb der Stichprobe
   bliebe unentdeckt.
5. **Skript-Logik:** Ich habe Roh-JSONs direkt gelesen (nicht die
   Skript-Extraktion), aber die Skripte selbst (`vertiefung-r19c.js`
   u. a.) nicht Zeile für Zeile auditiert; Fehlklassen, die schon beim
   ABRUF entstehen (z. B. falsch gebaute Query, die still weniger findet
   als die Weboberfläche), fängt mein Abgleich nicht — die
   Gegenkontrolle § 6.1 mildert genau das, misst aber nur zwei Zeichen.
6. **R19-B-Sollwerte:** Ich habe die Gegenkontroll-Sollwerte am
   R19-B-BERICHT geprüft, nicht an dessen Rohbelegen — die Fremdmeldung
   trägt ihren Lesestand.
7. **Semantik der Register-Suchen:** Ob EUIPO-eSearch/„Innsight"
   phonetisch nahe EU-Marken (z. B. mit Sonderzeichen) genauso verfehlt
   wie DPMA „Inn:Sights", habe ich nicht unabhängig ausgemessen; die
   Ähnlichkeitsraum-Abdeckung hängt komplett an TMview.

---

## 3. Nicht ausgeführte Prüfschritte (vollständige Liste)

- Kein Live-Nachabruf bei DPMA/EUIPO/TMview/RDAP/Websites (Prüfung nur am
  gespeicherten Bestand; bewusst, um den Prüfstand nicht zu verlassen und
  keine Front-Running-Spuren zu erzeugen).
- Kein Vollabgleich aller `hashes.txt` (nur 3er-Stichprobe).
- Keine Sichtung der TMview-Zeilen 101+ der beiden Getrennt-Läufe (lokal
  nicht vorhanden — s. P-02).
- Keine unabhängige Verifikation der Browser-Textabzüge (kein Artefakt).
- Kein Zeilen-Audit der acht `-r19c`-Skripte.
- Keine Prüfung der R19-B-Rohbelege (nur dessen Berichtstext).
- Keine Bewertung von Verwechslungsgefahr/Schutzumfang (E-K5-Rahmen; wie
  im Bericht: Wertungsfragen bleiben offen).

---

## 4. Gesamturteil

Die MESSEBENE des Berichts ist solide: Alle Einzelzahlen und Zitate der
Detailkapitel (§§ 3–5) wurden am Rohbeleg wiedergefunden, die
Kontrollarchitektur (Positiv/Negativ je Kanal, Gegenkontrolle mit
unabhängigen Sollwerten, ID-Kollisionsprüfung) ist reproduzierbar und
hielt jeder Nachzählung stand. Die Fehler liegen fast ausschließlich in
der VERDICHTUNG (Matrix-Zellen, § 8-Zählsätze, K4-Bogen-Klon, § 6.2-
Entwarnung) und in NICHT DEKLARIERTEN Suchraum-Grenzen (100-Zeilen-
Ausschnitt, fehlende Raster-Achsen, K6 ganz offen) — exakt die Klassen,
vor denen CLAUDE.md warnt. **Vor der Entscheidungsvorlage sind P-01,
P-02, P-03 und P-05 zwingend zu disponieren;** P-04/P-06/P-08/P-09 sind
Textkorrekturen mit Rohbeleg in der Hand, P-10–P-14 brauchen je eine
Nachziehung oder einen ehrlichen §-7-Posten.

**Nenner der Dispositionspflicht: 21 Befunde** (4 schwer · 10 mittel ·
7 Hinweise) — jeder braucht lt. Auftrag: repariert / verworfen mit
Grund / Träger benannt.

*Prüfer-Session R19-C-Prüfer, 19.08.2026. Schreibrecht genutzt: genau
diese Datei. Nichts committet.*
