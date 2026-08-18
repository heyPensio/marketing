# R19-A — Abschlussmeldung (Ben Beckman, 18.08.2026)

> **Token-Verbrauch: von der Session nicht erhebbar** — Subagenten-Zahlen
> soweit bekannt: Findung B1 109.542 · B2 109.539 · B3 109.564 ·
> B4 109.586 · B5 109.600 · Prüfer 345.214 (Werte aus den
> Rücklauf-Metadaten, Summe der Subagenten **893.045**); der Verbrauch
> der Hauptsession selbst ist nicht messbar.

**Strang:** R19-A — zweite Findungswelle nach der Naming-Kalibrierung,
neue Shortlist mit Klartext-Begründung.
**Auftrag:** `protokolle/tagesplan-2026-08-18.md`, „Session-Prompts R19",
Strang R19-A.
**Modell dieser Session:** User-Wahl; **nicht selbst erhoben** (die
Statuszeile ist der einzige Beleg, die Selbstauskunft des Modells ist
keiner).

---

## Block 1 — Gebaut und verifiziert (mit Commit-Hashes und Pfaden)

| Was | Pfad | Commit |
|---|---|---|
| Sprint-Dokument Welle 2 (Bau-Stand) | `marke/naming-sprint-2026-08-welle2.md` | **`dc0a452`** (gepusht) |
| Prüferprotokoll + Reparatur aller Befunde (Endstand) | `marke/naming-sprint-2026-08-welle2.md`, `protokolle/R19-A-pruefer.md` | **`37d9056`** (gepusht) |
| Diese Abschlussmeldung | `protokolle/R19-A-abschluss.md` | Folge-Commit |

**Fertig-Kriterium des Auftrags, Punkt für Punkt:**

| # | Gefordert | Stand |
|---|---|---|
| i | 5 archivierte Agenten-Prompts | ✅ § 2, **wörtlich**; maschinelle Gegenprobe gegen die Prompt-Dateien: beide Blöcke zeichengleich (3.931 + 4.598 Zeichen, 0 Abweichungen), Positivkontrolle mit einem getauschten Zeichen schlägt an (§ 7.1) |
| ii | Longlist ≥ 40 mit IDs ab N-59 | ✅ **71 eindeutige Kandidaten** aus 74 Nennungen (3 Doppelnennungen), **N-59 … N-129**, IDs lückenlos und eindeutig (maschinell geprüft) |
| iii | K.-o.-Tabelle für ALLE mit Wiktionary-Läufen, Nenner, Positivkontrolle je Kanal | ✅ **71/71** geprüft; K6-Doppellauf **284 Abrufe** (71 × 4 Kanäle), 280 × 404 / 4 × 200, 0 Timeouts, 0 × 429; **8 Kontrollen, zweimal gefahren** (Anfang **und** Ende), je Kanal ein Pflicht-Treffer und ein Pflicht-Nulltreffer mit **verschiedenem Sollwert je Kanal**. **Lauf 1 wurde als tot verworfen** (218/284 HTTP 429 = Werkzeugfehler). Der Prüfer hat den Lauf **vollständig** nachgefahren: kanalgenau identisch |
| iv | Wertungstabelle mit expliziten Vergabelinien | ✅ § 5.1/§ 5.2, **58 Zeilen**, alle sieben Kriterien mit ausformulierter Vergabelinie; jede Zeilensumme maschinell nachgerechnet (0 Abweichungen, Positivkontrolle greift) |
| v | Shortlist 8–12 mit Detailblättern in Klartext | ✅ **8 Kandidaten** in zwei benannten Gruppen + Auffang-Klausel; Detailblätter mit Klang, Bild, Aussprache, Diktat-Varianten, Signal, Facette, Störfaktor-Check, Betriebstyp-/Beschreibungs-Vermerk und offenen Prüfungen; Fachkürzel überall in Klartext |
| vi | Prüferprotokoll + Disposition aller Befunde mit Nenner und Lauf-Status | ✅ unten |

**Belegstufen-Vorbehalt zu (iii):** „K6 bestanden" gilt **nur für den
Schreibtisch-Teil**. Der EN-Muttersprachler-Check ist offen (0/71), und
die vier E-K4-Zusatzsprachen liefen über einen **Sammelkanal** statt über
je einen eigenen Abruf — beides ist im Dokument als Abweichung
ausgewiesen, nicht geglättet.

### Prüfer: Lauf-Status und Disposition ALLER Befunde

**Prüfstand:** eingefrorener Commit `dc0a452`. **Lauf vollständig
durchgeführt** — alle fünf Prüffragen beantwortet, beide Zusatzfragen
beantwortet, Abschnitte „nicht erhoben / nicht prüfbar" und „welcher
Prüfschritt hätte einen Fehler NICHT gefunden?" vorhanden. **Kein
Prüfschritt blieb offen oder wurde abgebrochen.** Die zwei mitgegebenen
Behauptungen: Der Prüfer hat die **falsche korrekt benannt**
(Behauptung 2, „20 Hotel-Stamm-Kandidaten" — es sind 17) und Behauptung 1
durch einen **vollständigen** Nachlauf statt einer Stichprobe bestätigt.

**Befundzahl: 21 (2 kritisch / 13 wichtig / 6 Hinweise).**

**Disposition kategorienweise MIT NENNER:**

| Kategorie | Zahl | Davon repariert | Verworfen mit Grund | Träger benannt |
|---|---|---|---|---|
| **kritisch** | **2 von 2** | **2** | 0 | 0 |
| **wichtig** | **13 von 13** | **11** | 0 | **2** |
| **Hinweis** | **6 von 6** | **5** | **1** | 0 |
| **Summe** | **21 von 21** | **18** | **1** | **2** |

**Einzeln (jeder Befund genau einmal):**

| # | Schwere | Befund in einem Satz | Disposition |
|---|---|---|---|
| 1 | kritisch | Die Kalibrierung (Spalte Gastgewerbe-Signal) ging in keine Auswahlbedingung ein — 8 von 10 Vorschlägen trugen ein schwaches Signal | **repariert:** Auswahlregel § 5.3 in zwei benannte Gruppen geteilt (Signal zuerst / Wertung zuerst) + Auffang-Klausel; Signal-Zahlen im Vorlagenkopf |
| 2 | kritisch | W2 gegen beide eigenen Vergabelinien inkonsistent, shortlist-wirksam | **repariert:** eine einzige Definition (vier Auslöser, § 4.5), alle 58 Werte in einem Zug neu vergeben; Verteilung 31/20/7 statt 18/33/8 |
| 3 | wichtig | K1-Linie (a) auf N-129/N-119 nicht angewandt; Linie (b) mit halber Messung entlastet | **repariert:** Linie (a) ausdrücklich auf den **vorangestellten** Zusatz begrenzt; „feste Wendungen" von Hand geprüft (**2 von 2**, 0 blockiert) |
| 4 | wichtig | Wirt-K.-o. mit falscher Auftragszuschreibung („Zutat meines Prompts") | **repariert** + **Nebenbefund an die Leitsession** (N-1 unten) |
| 5 | wichtig | K5-S gegen die Auftragsaussage „Host-/Stay-Stämme sind K5-unkritisch" eingeführt, ohne Abweichung auszuweisen | **repariert:** Abweichung im Dokument ausgewiesen |
| 6 | wichtig | Slang-Positivkontrolle nicht reproduzierbar, Zahlen falsch, kein Zählweg | **repariert:** neu gemessen am Wikitext mit Zählweg (`bae` 1, `hostel` 0); Slang als **abgeleitete** Prüfung eingeordnet, nicht als fünfter Kanal |
| 7 | wichtig | Der Wörtlichkeits-Beleg zeigte auf eine Datei, die es im Prüfstand nicht gab | **repariert:** Zahlen stehen jetzt in § 7.1 selbst |
| 8 | wichtig | Katalog § 1 Rückwirkung (verschärftes K1, ausgeweitetes K6) nicht angekommen | **Träger benannt:** § 7.3 Nr. 10 — Welle 1 darf diese Session nicht anfassen; **Debrief R19 / Leitsession** |
| 9 | wichtig | E-K4 verlangt je Zusatzsprache einen Check; gefahren wurde de/en | **repariert** (Abweichung ausgewiesen) + **Träger R19-B** (§ 7.3 Nr. 8) |
| 10 | wichtig | beschreibend-Risiko nicht nach eigener Linie vergeben | **repariert:** mechanisch nachvergeben, 16 statt 10 „hoch" |
| 11 | wichtig | Silbenzahlen delegiert und ungeprüft, 5 dokumentintern falsch | **repariert:** Zählregel festgelegt, 5 Werte korrigiert, W1/Σ nachgerechnet |
| 12 | wichtig | N-91 Hostify „faktisch Tech" im Blatt, aber nicht in der K5-T-Klasse | **repariert:** K5-T Nenner 2 |
| 13 | wichtig | K5-F unvollzählig (N-103 fehlte); Summenprobe kann das nicht bemerken | **repariert:** N-103 (und N-112) aufgenommen, **Zuordnungsprobe** neben die Summenprobe gestellt |
| 14 | wichtig | K5-K.-o.-Linie fällt bei strukturgleichen Fällen verschieden aus | **repariert:** Linie einmal formuliert, drei Fälle gemeinsam entschieden — **N-114 fällt neu** (13 Ausgeschiedene, 58 Überlebende) |
| 15 | wichtig | Laien-Vorlage: Σ unerklärt, „PMS"/„K5-H" ohne Klartext, Risiko in 5 von 10 Blättern fehlend | **repariert:** Absatz „Was die Zahl bedeutet", alle Kürzel aufgelöst, Risiko in **allen** Blättern |
| 16 | Hinweis | Doktrin-Zitat in Anführungszeichen verändert (Produktname ersetzt) | **repariert:** als sinngemäße, anonymisierte Wiedergabe gekennzeichnet (§ 5.1 W3) |
| 17 | Hinweis | „mitlaufend committet" am Objekt nicht vollzogen | **repariert:** Zusage an die Praxis angepasst (zwei Commits, benannt) |
| 18 | Hinweis | W9-Token-Zahl ohne Zählweg; Skript nicht versioniert | **repariert:** Extraktionsregel vollständig angegeben, Nicht-Versionierung und die abweichende Prüfer-Nachbildung ausgewiesen |
| 19 | Hinweis | Fundstelle „Verfahren § 3.2" existiert nicht; Auslöser sind nur eine Auswahl aus dem Raster | **repariert:** Fundstelle korrigiert (§ 3, Listenpunkt 2) + Auswahl-Charakter begründet |
| 20 | Hinweis | Signal-Skala dreiwertig, „nein" nie vergeben | **verworfen mit Grund:** kein Vergabefehler — die Findungs-Formregel erzwang ein Branchensignal, ein „nein"-Kandidat konnte nicht entstehen; die Kategorie bleibt für spätere Wellen definiert. Als Erläuterung im Dokument |
| 21 | Hinweis | Detailblätter verdichten nach oben (Hihost „mittel bis hoch", Hostara „gering") | **repariert:** Hihost ist nicht mehr auf der Liste; bei Hostara steht jetzt, warum „gering" trotz einer denkbaren Variante trägt (kein Auslöser greift) |

**Wirkung der Reparatur auf das Ergebnis — ausdrücklich, weil sie die
User-Vorlage ändert:** Aus der Shortlist gefallen sind **N-78 Hihost,
N-91 Hostify, N-98 Quartano** (W2-Reparatur); neu aufgenommen ist
**N-100 Bleibio** über die neue Signal-Gruppe. Die Liste ist damit von 10
auf **8** geschrumpft — Hallotel und Mithotel sind geblieben, Mithotel
allerdings nicht mehr über die Punktzahl, sondern über das Signal.
Ohne die Prüfung hätte der User zwei Namen als Favoriten-Vorschlag
bekommen, die nach der eigenen Regel nicht auf die Liste gehören.

---

## Block 2 — Offen geblieben

| # | Offen | Warum / Träger |
|---|---|---|
| 1 | **K2 Markenkollision · K3 Domains · W7 Google · W8 Handles — 0 von 58** | Auftragsgemäß nicht mein Scope: Live-Welle **R19-B** nach der Favoriten-Wahl |
| 2 | **K4 Diktat-Test — 0 von 71** | User-Handgriff; Testbogen § 6 vorbereitet (8 Namen, mit Vorab-Risiko je Name) |
| 3 | **K6 Kanal E (EN-Muttersprachler) — 0 von 71** | User-Handgriff; die vorrangige Frage steht im Testbogen |
| 4 | **E-K4-Zusatzsprachen je eigener Kanal** (TR/FR/ES/IT) | R19-B, 4 Sprachen × 8 Favoriten = 32 Abrufe |
| 5 | **§ 18 HGB / IHK-Firmierungs-Vorabprüfung** | R19-B bzw. MARKE2 — vor allem für Mithotel und Hallotel |
| 6 | **Katalog-§-1-Rückwirkung auf den Welle-1-Bestand** | Debrief R19 / Leitsession (ich darf Welle 1 nicht anfassen) |
| 7 | **Vorwärtsverweis in Welle 1** auf dieses Dokument | Debrief R19 (Wahrheits-Kanal) |
| 8 | **Spannung K5-T** (Tech-Facette gegen E11-Beratungsbreite) | User-Entscheid, sobald N-91 oder N-122 nachrückt |
| 9 | **Kontinuitäts-Frage „hey"** | User-Entscheid; hängt am Cutover-Plan (MARKE5) |

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

**N-1 (gehört der Leitsession, Rundenschnitt):** **Die Achsendefinition
B2 des Auftrags war gegen die Kalibrierung nicht abgeglichen.** Der
Tagesplan definiert B2 als „Präfix + Host-/Gastgeber-Stamm
(host/hosting/**wirt**/gastgeber)" — die Kalibrierung nennt den
Wirt-Stamm nicht, und Welle 1 hatte ihn bereits als K5-Fall
ausgeschieden (N-07 Wirtwohl). Folge: fünf Kandidaten wurden gebaut und
mussten sofort wieder fallen. **Zielort:** Rundenschnitt/Prompt-Bau der
Leitsession; für eine etwaige dritte Welle die Stamm-Liste **geschlossen**
aus der Kalibrierung übernehmen.

**N-2 (gehört MKT-MARKE, Katalog):** **Die W9-Geltungsgrenze, die der
Auftrag zitiert, ist überholt.** `fund/wettbewerbsbild.md` § 0.0 trägt
seit R05-A selbst den Vermerk „teilweise überholt durch TEIL B"; Teil B
erhebt fünf weitere Felder. **Dieselbe überholte Grenze steht auch im
Kriterienkatalog** (W9-Zeile: „⚠️ Geltungsgrenze § 0.0 dort: nur
Technik-Segment") **und in Welle 1** (§ 5.1). **Zielort:**
`marke/naming-kriterienkatalog.md` W9-Zeile + Welle-1-Vermerk — beides
Wahrheits-Kanal/Debrief, nicht mein Scope. Ich habe W9 in Welle 2
bereits gegen das ganze Dokument gezogen und die Abweichung ausgewiesen.

**N-3 (gehört dem Katalog / dem User):** **Zwei User-Entscheide stehen
gegeneinander** — die Kalibrierung erlaubt die Facette „Digital/Tech",
der Portfolio-Entscheid E11 verlangt, dass der Name die Beratungsbreite
trägt und **nicht** auf Technik verengt. Ich habe die Spannung sichtbar
gemacht (Klasse K5-T), nicht aufgelöst. **Zielort:** User-Entscheid;
Katalog-Nachtrag durch die Leitsession, falls er generell gelten soll.

**N-4 (gehört der Leitsession, Vorlagen-Regie):** **Der Host-Stamm
trägt das Gastgewerbe-Signal im Deutschen nur schwach.** **Alle 11
überlebenden** Host-/Gastgeber-Kandidaten (von 19 in der Longlist)
stehen bei „schwach" — kein einziger bei „ja"; „Host" heißt im
Deutschen zuerst Server. Der User hat diesen Stamm ausdrücklich gewählt;
er sollte vor der Favoriten-Wahl wissen, dass genau dieser Stamm das
Signal nicht liefert, das er sucht. Steht im Vorlagenkopf (§ 5.4).

**N-5 (Werkzeug-/Verfahrensbefund, gehört dem Debrief):**
`git push origin <hash>:main` schützt nur nach oben — mein erster Push
(`dc0a452`) hat den davorliegenden fremden Commit `a3412f8` der
Leitsession mitveröffentlicht, weil er Vorfahr war. Die Leitsession hat
das unabhängig beobachtet und im Tagesplan als L-14-Fall vermerkt
(`94b6902`). Kein Schaden — der fremde Commit war fertig und zum Push
bestimmt; die Beobachtung bestätigt die Regel am Objekt.

**PFLICHTFELD — welchen benannten Posten des Kurz-Einstiegs / des
Wahrheits-Kanals erfüllt mein Ergebnis?**
**STATUS.md „Nächster Schritt" 2 — „User-Handgriffe MARKE1"** (Shortlist-
Gesamtschau · K4-Diktat-Test · EN-Check · Entscheid über die 4
K1-Blockierten). Der Posten war durch die Verwerfung der
Welle-1-Shortlist am 18.08.2026 überholt; **mein Ergebnis liefert die
neue Vorlage, an der die Gesamtschau jetzt stattfinden kann**, samt
neuem Diktat-Testbogen (8 Namen) und neuer EN-Check-Frage. **Nicht**
erfüllt ist der vierte Teil des Postens: Der Entscheid über die vier
K1-Blockierten aus Welle 1 (Getrost, Verlass, Obenauf, Obhut) steht
unverändert offen — ihre Klasse trägt kein Branchensignal und ist damit
nicht die in Welle 2 gesuchte. **Ich schließe den Posten nicht** (Wahrheits-
Kanal ist Leitsession); die Formulierung müsste von „Shortlist (10)" auf
„Shortlist Welle 2 (8, zwei Gruppen)" umgestellt werden.

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **Ein Massenabruf gegen eine öffentliche API kann grün starten und
   tot enden.** Der erste K6-Lauf lieferte 218 von 284 Antworten als
   HTTP 429 — und die vier Positivkontrollen **am Lauf-Anfang** standen
   dabei auf grün, weil sie vor dem Rate-Limit liefen. **Konsequenz, die
   ich eingebaut habe: Kontrollen am ANFANG UND am ENDE des Laufs.** Eine
   Kontrolle, die nur den Anfangszustand misst, kann einen Kanal nicht
   freigeben, der mitten im Lauf zumacht. *(Schärfung der bestehenden
   Positivkontroll-Regel — sie sagt „im selben Lauf", nicht „zweimal".)*
2. **Ein Findungs-Prompt, der eine User-Wahl sinngemäß statt als
   geschlossene Liste wiedergibt, öffnet eine nicht gewählte Achse.**
   Mein B4-Prompt schrieb „aus der Hotel-, Gastgeber- oder
   Herberge-/Aufenthalts-Familie" — der Agent nahm daraus den
   **Gast-Stamm**, den der User ausdrücklich NICHT gewählt hatte. 13 von
   71 Kandidaten landeten außerhalb der Stamm-Wahl. Eine Kalibrierung
   gehört als **Aufzählung** in den Prompt, nicht als Familienbeschreibung.
3. **Die Geltungsgrenze, die ein Auftrag zitiert, kann im Quelldokument
   selbst schon als überholt markiert sein.** Der Auftrag nannte für das
   Wettbewerbsbild „nur Technik-Segment"; genau dieser Abschnitt trägt
   dort seit Monaten den Vermerk „teilweise überholt durch Teil B". Wer
   die Grenze übernimmt, ohne die zitierte Stelle zu öffnen, prüft gegen
   ein zu kleines Feld.
4. **Ein angenommener Kontrollwert ist keine Kontrolle.** Ich wollte für
   den de-Wiktionary-Klein-Kanal „kleingeschriebenes Substantiv → 404"
   als Nulltreffer setzen — die Messung ergab **200** (konjugierte Form
   von „herbergen"). Die Kontrolle musste selbst erst gemessen werden,
   bevor sie etwas belegen konnte.
5. **Zwei Definitionen desselben Kriteriums sind schlimmer als eine
   unscharfe.** W2 stand zweimal im Dokument (Auslöser-Liste und
   Zähl-Definition) mit dem ausdrücklichen Satz, beides sei „dasselbe
   Urteil". Der Prüfer hat gegen **beide** einzeln geprüft und gegen
   beide Widersprüche gefunden — und die Widersprüche trafen die
   Shortlist.
6. **Offenlegen ist nicht Anwenden.** Das Dokument beschrieb den
   Zielkonflikt zwischen Branchensignal und Wertung an drei Stellen
   korrekt — und wählte trotzdem nach einer Regel aus, die das Signal
   gar nicht kannte. Ein Befund, den man beschreibt, aber nicht in die
   Auswahl einbaut, ändert nichts am Ergebnis.
7. **Eine delegierte Zahl steuert unbemerkt ein Kriterium.** Die
   Silbenzahlen kamen aus den Agenten-Rückläufen und wurden mechanisch in
   W1 umgerechnet. Die Umrechnung war fehlerfrei — die Eingangszahl
   nicht. Delegierte Zahlen, die in eine Formel gehen, brauchen eine
   eigene Zählregel.

### (ii) Bewährte Muster

1. **Prompt-Dateien im Scratchpad + maschinelle Zeichengleichheits-Probe
   gegen den Archiv-Block im Dokument, mit Verfälschungs-Positivkontrolle.**
   Damit ist „wörtlich archiviert" belegt statt behauptet — und der
   Prüfer konnte den Kontaminationsschutz am Text messen, statt ihn zu
   glauben.
2. **Ein Nachrechen-Skript über das FERTIGE Dokument** (Zeilensummen,
   Zeilenzahlen, Verteilungen, Klassenzuordnung), mit einer absichtlich
   verfälschten Testzeile als Positivkontrolle. Es fängt genau die
   Fehlerklasse, die beim Schreiben von Hand entsteht — und es hat nach
   der Reparatur bestätigt, dass 58 Zeilen und alle Verteilungen stimmen.
3. **Die Zuordnungsprobe neben die Summenprobe.** Die Summenprobe
   „15 + 5 + 1 + 5 + 33 = 59 ✔" war richtig **und** die Klassen waren
   falsch besetzt — sie ist an der Einstufungs-Achse blind. Klassenlisten
   aus der Quellspalte erzeugen, nicht von Hand führen.
4. **Zwei benannte Gruppen statt einer Rangliste**, wenn zwei Kriterien
   nachweislich auseinanderlaufen. Das legt den Kompromiss dem
   Entscheider vor, statt ihn in einer Schwelle zu verstecken — und es
   nimmt der Schwelle die Zwangslage („Σ ≥ 15 war der einzige Wert, der
   in den Korridor führte" — ein Prüferbefund, der ohne die Umstellung
   stehen geblieben wäre).
5. **Dem Prüfer zwei nachprüfbare Behauptungen mitgeben, davon eine
   falsche.** Beide haben mehr Prüfwert erzeugt als ihre eigene
   Beantwortung: Um sie zu beantworten, musste er den Wörterbuchlauf
   vollständig nachfahren und die Longlist maschinell auszählen — beides
   hat weitere Befunde mitgeliefert.
6. **Der unbequeme Pol als Pflichtfeld im Agenten-Prompt.** Alle fünf
   Findungs-Agenten haben ihre eigenen Kandidaten kritisiert und
   denselben Strukturkonflikt unabhängig gemeldet; drei haben Kandidaten
   ausdrücklich als eigene Fehlleistung markiert. Das war die
   brauchbarste Spalte des ganzen Rücklaufs.

---

*Session R19-A (Ben Beckman), 18.08.2026. Bau-Stand `dc0a452` ·
Prüfstand `dc0a452` · Endstand `37d9056`. Kein eigener Debrief — die
Einarbeitung in den Wahrheits-Kanal macht die Leitsession.*
