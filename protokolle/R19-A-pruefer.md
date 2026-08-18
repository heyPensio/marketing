# R19-A — Unabhängiges Prüfprotokoll (Naming-Sprint Welle 2)

> **Prüfstand (eingefroren):** `dc0a45258658ff5927c5017dad7416d614799aa0`
> („BEN BECKMAN | R19-A Welle 2: Longlist N-59..N-129 (71 Kandidaten),
> K.-o.-Welle, Wertung, Shortlist (10)", 18.08.2026 14:34 +0200).
> Der Commit ändert **genau eine** Datei (1.240 Zeilen Einfügung,
> `git show --stat`).
>
> **Prüfdatum:** Dienstag, 18.08.2026, 14:35–15:0x lokal
> (per `date` erhoben, nicht geschätzt).
> **Prüfer:** unabhängiger Subagent mit frischem Kontext, kennt die
> Arbeit ausschließlich aus den Dateien. **Nur gelesen, nichts geändert**
> — einzige Schreibhandlung ist diese Datei. Kein `git add`, kein
> Commit, kein Push.

## 0. Was gelesen wurde (mit Zeilenspanne) — und was nicht

Alle Lesevorgänge über `git show dc0a452:<pfad>`, Abzüge im
Session-Scratchpad.

| Datei | Zeilen gesamt | gelesen | Anmerkung |
|---|---|---|---|
| `marke/naming-sprint-2026-08-welle2.md` | 1.240 | **1–1240, vollständig** | in vier Blöcken (1–330 · 330–669 · 670–969 · 969–1240), keine Ausgabe abgeschnitten |
| `marke/naming-kriterienkatalog.md` | 173 | **1–173, vollständig** | inkl. Nachtrags-Kasten (Z. 125–173) |
| `marke/naming-sprint-2026-08.md` (Welle 1) | 484 | **1–484, vollständig** | in zwei Blöcken (1–240 · 240–484) |
| `protokolle/tagesplan-2026-08-18.md` | 555 | **106–355** + Überschriftenliste der ganzen Datei | darin „Kalibrierung Naming" 133–175 und Prompt R19-A 178–353 **vollständig** |
| `fund/wettbewerbsbild.md` | 4.121 | **52–90** (§ 0.0 vollständig), **1447–1500** (B1 Geltungsgrenze), Überschriftenliste der ganzen Datei + gezielte Volltext-Greps über alle 4.121 Zeilen | Fließtext §§ 1–8 und B2–B11 **nicht** gelesen |
| `marke/markenrecherche-verfahren.md` | — | **§ 3 Nr. 2 (Varianten-Raster) und § 9** | Rest nicht gelesen |
| `fund/positionierungspapier.md` | — | **Z. 84–100** (Doktrin-Wortlaut) | §§ 2/3/6 im Übrigen **nicht** gelesen |

**Nicht gelesen (Fundorte, keine Ausrede):**

1. `protokolle/tagesplan-2026-08-18.md` Z. 1–105 (Rahmen, Blocktabelle,
   Review-Regime, User-Handgriffe, Prämissen-Kasten, Zustand,
   Eingänge) und Z. 356–555 (Prompts R19-B, Leitsession-Programm).
   Folge: Aussagen über den Auftrag stützen sich auf Z. 106–355; ein
   Auftragsbestandteil außerhalb dieser Spanne wäre mir entgangen.
2. `fund/wettbewerbsbild.md` im Fließtext. Meine W9-Prüfung ist
   deshalb eine **Namens-/Zeichen-Prüfung per Volltextsuche**, keine
   Lesearbeit an den Einstufungen.
3. `sensibel/kalibrierung-naming-2026-08-18-wortlaut.md` — git-ignoriert,
   für den Prüfer wie für die Bau-Session tabu. **Der Wortlaut der
   User-Kalibrierung ist damit für mich nicht prüfbar**; ich messe gegen
   die Wiedergabe im Tagesplan.
4. Scratchpad-Dateien der Bau-Session (`prompt-gemein.md`, `achsen.md`,
   `k6-lauf2.sh`, `kandidaten.txt`, `k6-ergebnis2.tsv`) — nicht
   versioniert, im Prüfstand nicht vorhanden.
5. `protokolle/R19-A-abschluss.md` — **existiert im Prüfstand nicht**
   (`git ls-tree -r dc0a452 | grep R19` liefert keine Protokolldatei).
   Siehe Befund 7.
6. Die Rückläufe der fünf Findungs-Agenten — nirgends archiviert.

---

## 1. Befunde

### KRITISCH

---

**Befund 1 — KRITISCH.** Die Shortlist-Regel enthält **kein einziges
Kalibrierungs-Kriterium**; der Kernbefund des Users („bei keinem denkt
man: die sind aufs Gastgewerbe spezialisiert") wird erhoben, tabelliert
— und bei der Auswahl nicht verwendet.

*Fundstelle:* § 5.3 (Auswahlkriterium) gegen § 5.2 (Spalte „Signal")
und Tagesplan „Kalibrierung Naming" (Kernbefund).

*Aussage:* Die Regel prüft (i) Stamm, (ii) Σ ≥ 15, (iii) schwere
Fehl-Assoziation. Die Spalte „Gastgewerbe-Signal hörbar" — die einzige
Spalte, die den Verwerfungsgrund der Welle-1-Shortlist abbildet — geht
in **keine** der drei Bedingungen ein und in kein Wertungskriterium
(W1–W6/W9 stammen aus dem Katalog und kennen das Signal nicht). Die
Folge ist messbar und läuft dem Auftragszweck entgegen.

*Beleg/Suchweg* (maschinell, Skript über die Spalten 13/3/12 der
§-5.2-Tabelle, 59/59 Zeilen erkannt):

- Signal-Verteilung über die 59 Überlebenden: **„ja" 30 · „schwach" 29
  · „nein" 0.**
- Signal-Verteilung der **10 Shortlist-Kandidaten: „ja" 2 · „schwach" 8.**
- Kandidaten mit Signal „ja" **und** einem vom User gewählten Stamm
  (H oder S, also nicht durch (i) gesperrt): **23.** Davon auf der
  Shortlist: **2** (N-61 Hallotel, N-59 Mithotel).
- Konkret an der Hürde: **vier** Kandidaten mit Signal „ja" und
  gültigem Stamm verfehlen Σ 15 um **einen** Punkt — N-63 Hotelia (14),
  N-64 Hotelio (14), N-66 Duhotel (14), N-100 Bleibio (14) —, während
  **fünf** Kandidaten mit Signal „schwach" bei Σ 15 aufgenommen werden
  (N-78, N-91, N-95, N-98, N-124).

Das Dokument ist an dieser Stelle nicht unehrlich — § 3.1 Nr. 3
beschreibt den Strukturkonflikt, § 5.4/1 nennt das schwache Signal von
Mithost „den wunden Punkt gemessen an Ihrer Kalibrierung". Aber
**Offenlegen ist nicht Anwenden**: Der User hat die erste Shortlist
genau deshalb verworfen, und die zweite legt ihm überwiegend dieselbe
Eigenschaft vor.

*Reparaturvorschlag:* Entweder (a) eine vierte Bedingung „Signal ≠
schwach" in § 5.3 aufnehmen und die Auffang-Klausel (iv) die
Rest-Bauformen füllen lassen; oder (b) — der ehrlichere Weg, weil er
den Kompromiss dem User überlässt — die Vorlage in **zwei benannte
Gruppen** teilen: „stärkstes Gastgewerbe-Signal" (Signal = ja, nach Σ
sortiert) und „stärkste Gesamtwertung" (heutige Liste), mit einem Satz,
warum beides nicht dieselbe Liste sein kann. In beiden Fällen gehört
die Zahl „8 von 10 tragen ein schwaches Signal" **in den Kopf der
Vorlage**, nicht in die Einzelblätter.

---

**Befund 2 — KRITISCH.** Die W2-Werte sind gegen **beide** eigenen
Vergabelinien inkonsistent vergeben. Bei konsequenter Anwendung fallen
mindestens **zwei Shortlist-Kandidaten unter die Σ-15-Hürde** — die
Shortlist ändert sich.

*Fundstelle:* § 4.5 (Auslöser-Linien hoch/mittel/gering) und § 5.1
(W2-Skala) gegen die W2-Spalte in § 5.2 und die Diktat-Einschätzungen
in § 5.4.

*Aussage:* Das Dokument definiert W2 **zweimal** und sagt ausdrücklich,
beide seien „dasselbe Urteil in zwei Verwendungen" (§ 4.5). Geprüft
gegen jede der beiden Definitionen einzeln ergeben sich Widersprüche —
und sie treffen die Shortlist.

*Beleg/Suchweg* (Auszählung von Hand an der § 5.2-Tabelle und den zehn
Detailblättern; jeder Einzelfall unten mit ID nachprüfbar):

**(a) Auslöser (i) „Verschleifungs-Fuge (Vokal- oder h-Naht)" —
gleiche Bauform, verschiedene Werte.** Beispiele des Dokuments für den
Auslöser sind „Nahotel", „Anhotel", „Zuhost" (→ hoch = W2 1).

| Struktur (Vorsatz auf Vokal + Stamm auf h-) | W2 |
|---|---|
| N-60 Nahotel · N-70 Anhotel · N-77 Wohost · N-84 Zuhost · N-85 Mehost | **1** ✔ linientreu |
| N-68 Sohotel · N-81 Sohost · N-83 Duhost · N-78 Hihost | **2** ✗ |
| N-66 Duhotel | **3** ✗ (Bestwert bei identischer Naht) |

**(b) Auslöser (iv) „französisches Lehnwort ('Quartier' + Fremdendung)"
→ hoch = 1.** Angewandt bei N-121 Quartierly (1) — **nicht** angewandt
bei N-97 Quartio (2, Bauform lt. § 3: „Quartier + ‚-io'") und N-98
Quartano (2, „Quart- + ‚-ano'", § 5.4: „vom Quartier bleibt der
Anfang"). Die Logis-Fälle sind dagegen durchgehend korrekt 1 (N-111,
N-118, N-122) — der Auslöser funktioniert also, er wird nur nicht
vollzählig angewandt.

**(c) Gegen die Zähl-Definition in § 5.1** („3 = keine plausible
Falschschreibung · 2 = eine milde · 1 = mehrere/starke"), gemessen an
den **selbst genannten** Falschschreibungen der Detailblätter:

| Blatt | genannte Varianten | Soll nach § 5.1 | vergeben |
|---|---|---|---|
| Hostara | 1 (*Hostarra*) | 2 | **3** |
| Mithost | 3 | 1 | 2 |
| Hallotel | 3 | 1 | 2 |
| Quartio | 3 | 1 | 2 |
| Hihost | 3 (Blatt selbst: „mittel bis **hoch**") | 1 | 2 |
| Stayora | 3 | 1 | **1** ✔ |

*Wirkung auf das Ergebnis* — und nur diese macht den Befund kritisch:

- **N-78 Hihost:** W2 2 → 1 ⇒ Σ 15 → **14** ⇒ fällt unter die Hürde
  und ist **nicht mehr auf der Shortlist**.
- **N-98 Quartano:** W2 2 → 1 ⇒ Σ 15 → **14** ⇒ ebenfalls **nicht mehr
  auf der Shortlist** — und damit fiele der Kandidat weg, den § 5.4/9
  als „markenrechtlich sichersten" der Liste ausweist.
- N-97 Quartio 16 → 15 (bleibt), N-73 Mithost 19 → 18 (bleibt),
  N-61 Hallotel 16 → 15 (bleibt), N-87 Hostara 18 → 17 (bleibt).

*Reparaturvorschlag:* W2 **einmal** definieren (die Auslöser-Liste
§ 4.5 ist die brauchbarere, weil prüfbar), die Zähl-Definition in § 5.1
streichen oder als Erläuterung kennzeichnen, dann alle 59 Werte in
einem Zug gegen die Auslöser-Liste neu vergeben und die Σ-Spalte
nachrechnen. Erst danach die Shortlist ziehen. Falls die Werte stehen
bleiben sollen: je Abweichung ein Satz, warum der Auslöser hier nicht
greift (das ist die teurere, aber zulässige Variante).

---

### WICHTIG

---

**Befund 3 — WICHTIG.** K1-Linie (a) ist auf einen Überlebenden nicht
angewandt worden, der strukturell identisch mit einem Ausgeschiedenen
ist; Linie (b) trägt eine Entwarnung, deren Beleg nur die halbe Linie
abdeckt.

*Fundstelle:* § 4.1 (K1-Linien), § 4.3 (Ausgeschiedene + Absatz
„Unterschied zu Welle 1").

*Aussage und Beleg:*

- **Linie (a)** = „generischer Wertungs-/Umfangs-Zusatz … **plus einem
  Sachwort**". Daran fiel **N-116 Gutstay** („gut" preist das Ergebnis
  an, „stay" ist der Gegenstand). **N-129 Bleibestark** ist derselbe
  Bau in umgekehrter Reihenfolge — Sachwort „Bleibe" + Anpreisung
  „stark" — und steht unbeanstandet in der Wertung (Σ 10). Die Linie
  nennt die Reihenfolge nicht als Merkmal; entweder fällt Bleibestark
  auch, oder die Linie sagt ausdrücklich, dass nur der VORangestellte
  Zusatz zählt. Randfall derselben Klasse: **N-119 Weitstay** („weit"
  als Umfangswort — vgl. N-79 Allhost, der an „all ist ein
  Umfangs-Versprechen" fiel).
- **Linie (a), zweiter Halbsatz** = „oder ist die reine Berufs-/
  Sachbezeichnung selbst" (daran fiel N-67 Hotellier). **N-122
  Logisware** ist „Ware fürs Logis" — die Bauform, die der eigene
  Findungs-Prompt als Nicht-Name ausschließt („eine bloße
  Sachbezeichnung (‚Hotelsoftware') ist kein Name"). Es steht mit
  beschreibend-Risiko „h" in der Wertung; das ist vertretbar, aber
  nirgends begründet.
- **Linie (b)** = „existierendes Wörterbuchwort **/ eine feste
  Wendung** mit Werbe- oder Anpreisungscharakter". § 4.3 begründet die
  Null-Meldung ausdrücklich als „messbar, nicht argumentativ": der
  DE-Doppellauf fand keinen Wörterbucheintrag. **Der Messwert deckt
  aber nur die erste Hälfte der Linie.** Eine „feste Wendung" ist kein
  Wiktionary-Lemma: **N-129 Bleibestark** wird laut § 4.4 „fast
  zwangsläufig als Imperativ ‚bleib stark' verstanden" — eine
  Durchhalte-Parole mit Zuspruchcharakter —, **N-83 Duhost** als „du
  host/du hast". Beide sind Linie-(b)-Kandidaten, die der
  Wörterbuchlauf per Konstruktion nicht finden kann.

*Reparaturvorschlag:* (1) In § 4.1 klarstellen, ob Linie (a) nur den
vorangestellten Zusatz erfasst — und N-129/N-119 an der geklärten Linie
neu einstufen. (2) In § 4.3 den Satz von „messbar" auf den
tatsächlichen Messraum zurückschneiden: „kein Kandidat trägt ein
**Wörterbuchwort**; die Teilmenge ‚feste Wendung' ist **nicht**
maschinell geprüft — geprüft von Hand: N-129, N-83, Ergebnis X."

---

**Befund 4 — WICHTIG.** Die K5-Entscheidung gegen den Wirt-Stamm (fünf
Ausscheidungen) trägt eine falsche Aussage über den eigenen Auftrag.

*Fundstelle:* § 4.1, letzter Spiegelstrich („⚠️ Wirt-Stamm: K.-o.").

*Aussage:* Dort heißt es, die Wirt-Kandidaten seien „eine Zutat
**meines** B2-/B3-Prompts und damit nicht von einer User-Wahl
gedeckt". Der Wirt-Stamm stammt aber aus dem **Auftrag**: Der
Session-Prompt R19-A im Tagesplan definiert Achse B2 als „**Präfix +
Host-/Gastgeber-Stamm** (host/hosting/**wirt**/gastgeber)". Die
Bau-Session hat ihn nicht hinzuerfunden, sie hat ihn übernommen.

*Beleg/Suchweg:* `git show dc0a452:protokolle/tagesplan-2026-08-18.md`,
Abschnitt „Session-Prompts R19 / Strang R19-A", Achsentabelle Zeile B2
— wörtlich gelesen, nicht gegriffen.

*Warum das zählt:* Das Ergebnis (K.-o.) bleibt sachlich tragfähig, weil
die Präzedenz N-07 aus Welle 1 (Wirtshaus-/Kleinbetriebs-Verengung =
das dokumentierte Rebrand-Motiv) selbständig trägt. Aber die
Begründung verlagert einen Auftragsinhalt in die eigene Fehlerbilanz —
und verdeckt damit den einzigen Befund, der der **Leitsession** gehört:
Der Auftrag hat einen Stamm gesät, den die Kalibrierung nicht gewählt
hatte. Genau spiegelverkehrt ist die B4-Selbstanzeige in § 3.1 Nr. 1
formuliert („Prompt-Fehler dieser Session") — dort war der Auftrag
sogar *weiter* („Branchenstamm" ohne Familienangabe) als der eigene
Prompt.

*Reparaturvorschlag:* Den Halbsatz ersetzen: „Der Wirt-Stamm kam aus
der Achsendefinition B2 des Auftrags (Tagesplan R19-A); die
Kalibrierung nennt ihn nicht. K.-o. daher aus der Sache (Präzedenz
N-07), nicht aus der Prompt-Herkunft." Und in die Abschlussmeldung als
**Nebenbefund an die Leitsession**: Achse B2 des Auftrags war gegen die
Kalibrierung nicht abgeglichen.

---

**Befund 5 — WICHTIG.** Die K5-Klasse „S" wurde gegen eine
ausdrückliche Auftragsaussage neu eingeführt, ohne die Abweichung
auszuweisen — während die W9-Abweichung im selben Dokument mustergültig
ausgewiesen ist.

*Fundstelle:* § 4.1 (Klasse **K5-S**) gegen Tagesplan „Kalibrierung
Naming / Folgen für den Zuschnitt": „**Host- und Stay-Stämme sind
K5-unkritisch.**"

*Aussage:* Das Dokument legt fünf Kandidaten (N-99, N-100, N-104,
N-128, N-129) einen K5-Vermerk „Signal nach unten (Jugendherberge/
Notunterkunft), gegen E2" auf. Der Auftrag sagt das Gegenteil. Die
Sache spricht eher für die Session — aber der Auftrag ist damit
verlassen, und das steht nirgends. Zum Vergleich: bei W9 schreibt
dieselbe Session ausdrücklich „das ist **mehr als beauftragt** und ist
hier ausgewiesen, weil die Auftrags-Prämisse damit nicht mehr stimmt"
(§ 5.1). Die Form ist also bekannt und wurde hier nur nicht angewandt —
eine asymmetrische Offenlegung.

*Reparaturvorschlag:* Ein Satz bei K5-S: „Abweichung vom Auftrag: Der
Tagesplan stuft Stay-Stämme als K5-unkritisch ein; die Herberge-/
Bleibe-Teilfamilie trägt nach Einschätzung dieser Session ein
Abwärts-Signal gegen E2. Die Einstufung ist ein Befund der Session, kein
Auftragsinhalt — der User entscheidet."

---

**Befund 6 — WICHTIG.** Die Positivkontrolle des Slang-Kanals ist
nicht reproduzierbar; die Gegenprobe ist am Objekt falsch; ein Zählweg
fehlt.

*Fundstelle:* § 4.2, Kontrolltabelle, Zeile „EN-Slang".

*Aussage:* Dort steht „`bae` → 200 mit **3** ‚slang'-Markierungen ✔ …;
Gegenprobe `hostel` → 200 mit **1** Markierung". Beide Zahlen
reproduzieren nicht, und das Dokument nennt keinen Zählweg für sie.

*Beleg/Suchweg* (18.08.2026, `curl -A …`, Quelltext und gerenderte
Seite getrennt gezählt):

| Zählweg | `bae` | `hostel` |
|---|---|---|
| Wikitext (`?action=raw`), `grep -o "slang"` | **1** (`{{lb\|en\|slang}}`, Z. 26) | **0** |
| gerenderte Seite, sichtbares Label `>slang<` | **1** | **0** |
| gerenderte Seite, `grep -oi "slang"` (inkl. Kategorien-Metadaten) | 8 | 2 — beide **Fehltreffer** aus `wgULSLanguageSelector` |

`bae` trägt genau **eine** Slang-Markierung (Struktur mit
`grep -n "^#\|{{lb" ` über den gesamten Eintrag geprüft: 10
Sprachabschnitte, ein einziges `slang`-Label), `hostel` **keine**. Die
Gegenprobe ist damit nicht „1 statt 3", sondern „0" — der behauptete
Kontrast existiert in dieser Form nicht.

*Zweiter Teil desselben Befunds:* Die Zeile „EN-Slang" trägt in der
Tabelle **keinen Pflicht-Nulltreffer** („—"), obwohl der Vorspann
„je Kanal EIN Pflicht-Treffer UND EIN Pflicht-Nulltreffer" verspricht;
sie gehört auch nicht zu den „acht Kontrollen", die zweimal gefahren
wurden (4 Kanäle × 2 = 8). Der Slang-Kanal ist damit der einzige ohne
Gegenrichtung und ohne Wiederholung.

*Reparaturvorschlag:* Zahlen streichen oder mit Zählweg ersetzen
(z. B. „`bae`: 1 Slang-Label im Wikitext, `hostel`: 0 — der Kanal führt
Slang-Markierungen nachweislich und markiert sie nicht wahllos"). Den
Slang-Kanal entweder mit Pflicht-Nulltreffer + Doppellauf gleichstellen
oder ausdrücklich als **abgeleiteten** Kanal führen (er misst denselben
Abruf).

---

**Befund 7 — WICHTIG.** Der „Beleg der Wörtlichkeit" der archivierten
Agenten-Prompts zeigt auf eine Datei, die im Prüfstand nicht existiert.

*Fundstelle:* § 2, Absatz „Beleg der Wörtlichkeit" → § 7.1.

*Aussage:* § 2 sagt „Ergebnis und Zählweg in § 7.1". § 7.1 sagt
„Ergebnis und Positivkontrolle: siehe Abschnitt ‚Gegenprobe' im
Abschlussprotokoll `protokolle/R19-A-abschluss.md`". Diese Datei
existiert im Prüfstand nicht (`git ls-tree -r dc0a452` — im Baum liegen
nur die vier `marke/`-Dateien; der Commit ändert eine einzige Datei).
Die Kette § 2 → § 7.1 → Abschlussprotokoll endet damit im Leeren: Das
committete, außenwirksame Dokument behauptet einen maschinellen Beleg
und liefert an keiner erreichbaren Stelle eine Zahl.

*Warum das zählt:* An dieser Wörtlichkeit hängt die **gesamte**
Kontaminationsschutz-Prüfung (a) — der Auftrag sagt ausdrücklich „der
Prüfer misst den Kontaminationsschutz **daran**". Ich kann den Archivtext
prüfen (Befund unten: sauber), aber nicht, dass er dem Abgeschickten
entspricht.

*Reparaturvorschlag:* Das Ergebnis (n Zeichen verglichen, 0
Abweichungen, Positiv- und Negativkontrolle) **in § 7.1 selbst**
eintragen — ein Beleg, der in einem noch nicht existierenden Dokument
liegt, ist kein Beleg. Die bereits vorhandene Geltungsgrenze („dass
dieser Text auch abgeschickt wurde, belegt der Vergleich nicht") bleibt
richtig und kann stehen bleiben.

---

**Befund 8 — WICHTIG.** Katalog § 1 verlangt bei geänderten Kriterien
die **rückwirkende** Prüfung des Kandidaten-Bestands. K1 und K6 wurden
geändert; die Rückwirkung ist im Dokument nicht angekommen — auch nicht
als offener Posten.

*Fundstelle:* Katalog § 1 Spiegelstrich 1 („wird ein Kriterium
nachträglich geändert, wird der Kandidaten-Bestand rückwirkend dagegen
geprüft — wer wurde NUR daran aussortiert?") gegen § 4.1 („die
Welle-1-Linie ist hier **verschärft**") und § 4.2 („anders als in Welle
1, wo der Volllauf nur die Shortlist traf").

*Aussage:* Beide Änderungen sind ausdrücklich als Änderungen benannt.
Die Katalogpflicht wird an genau einer Stelle bedient (§ 4.3: die vier
K1-Blockierten aus Welle 1 bleiben blockiert) — und dort nur für die
Blockierten, nicht für die **51 Überlebenden** der Welle 1. Die Frage
„Wer aus Welle 1 wurde NUR an der alten, weicheren K1-Linie
durchgelassen?" ist nicht gestellt. Für K6 gilt dasselbe in der
Gegenrichtung: Welle 1 hat den Wörterbuch-Volllauf nur über 10 von 58
Kandidaten gezogen, Welle 2 über 71 von 71 — der Welle-1-Bestand hat
damit eine nachweislich schwächere Belegstufe, ohne dass das irgendwo
als Posten steht.

*Belegte Einschränkung:* Die Bau-Session **darf** Welle 1 nicht
anfassen (Auftrag: „NICHT anfassen: `marke/naming-sprint-2026-08.md`").
Die Katalogpflicht verlangt aber keine Änderung dort, sondern eine
Prüfung — sie hätte als Feststellung in § 4.3 oder als Zeile in § 7.3
gestanden.

*Reparaturvorschlag:* Eine Zeile in § 7.3 „Offene Punkte": „Katalog § 1
Rückwirkung: Der Welle-1-Bestand (51 Überlebende) ist gegen die
verschärfte K1-Linie und den K6-Volllauf **nicht** rückgeprüft —
Träger: Debrief R19 / Leitsession (Wahrheits-Kanal-Regel)."

---

**Befund 9 — WICHTIG.** E-K4 verlangt „je Sprache ein protokollierter
Wörterbuch-/Slang-Check" für TR/FR/ES/IT. Geprüft wurden zwei
Wiktionary-Ausgaben (de/en); ein eigener Kanal je Zusatzsprache
existiert nicht.

*Fundstelle:* Katalog, Nachtrags-Kasten E-K4, gegen § 4.2
(Kanaltabelle) und die Geltungsgrenzen darunter.

*Aussage:* Das Dokument beschreibt den Sachverhalt korrekt („Für
TR/FR/ES/IT deckt en.wiktionary fremdsprachige Lemmata mit ab … aber
eine Lücke dort ist kein Beweis der Bedeutungslosigkeit") — **es
benennt aber nicht, dass damit eine Katalogvorgabe nicht erfüllt ist.**
Der Unterschied ist nicht akademisch: Welle 1 hat für einen einzigen
Kandidaten (N-55 Portino) `fr.wiktionary` **eigens nachgelesen** und
das als notwendig protokolliert; Welle 2 hat für 71 Kandidaten keinen
einzigen Abruf gegen tr./fr./es./it.wiktionary gefahren.

*Beleg/Suchweg:* Kanaltabelle § 4.2 — vier Zeilen, alle
`en.wiktionary.org` bzw. `de.wiktionary.org`; ich habe den Lauf
vollständig reproduziert (284 Abrufe, siehe Behauptung 1 unten): es
gibt keinen fünften Host.

*Reparaturvorschlag:* In § 4.2 einen Satz „**Abweichung von E-K4:** Der
Nachtrags-Kasten verlangt je Zusatzsprache einen eigenen
protokollierten Check; gefahren wurde der en-Kanal als Sammelkanal.
Nachzuholen für die Favoriten in R19-B (4 Sprachen × n Favoriten) —
Träger: R19-B." Für 10 Kandidaten sind das 40 Abrufe.

---

**Befund 10 — WICHTIG.** Die Spalte „beschreibend-Risiko" ist nicht
nach ihrer eigenen Vergabelinie vergeben.

*Fundstelle:* § 4.1 (Definition g/m/h) gegen die Risiko-Spalte in
§ 5.2.

*Aussage:* „hoch" ist definiert als „das Branchenwort steht
**unverändert vorn** und der zweite Teil ist eine **bloße Endung** oder
ein Funktionswort". Kandidaten mit exakt dieser Bauform bekommen teils
h, teils m.

*Beleg/Suchweg* (maschinell: alle Longlist-Zeilen mit Bauform-Muster
„Stamm + ‚-Endung'", Wert aus § 5.2):

| gleiche Bauform | h | m |
|---|---|---|
| **host** + Endung | N-91 Hostify | **N-87 Hostara** |
| **hotel** + Endung „-ly" | N-71 Hotelly | — |
| **Quartier** + Endung „-ly" | — | **N-121 Quartierly** |
| **stay** + Endung | — | N-95 Stayora · N-96 Stayana |
| Herberge/Logis + Endung | N-99 Herbergo · N-122 Logisware | **N-100 Bleibio** |

Das Paar **N-91 Hostify (h) / N-87 Hostara (m)** ist mit „Quartier ist
kein Branchenwort" nicht erklärbar — es ist derselbe Stamm, dieselbe
Position, dieselbe Bauform. Ebenso **N-71 Hotelly (h) / N-121
Quartierly (m)** mit identischer Endung.

*Warum das zählt:* Die Spalte ist die einzige K1-Aussage, die in die
User-Vorlage durchschlägt (§ 5.4/9 baut darauf die Aussage auf,
Quartano sei „markenrechtlich der robusteste"). Eine driftende Spalte
verschiebt eine markenrechtliche Einschätzung.

*Reparaturvorschlag:* Die drei Werte in einem Zug gegen die Definition
neu vergeben (Kandidat: alle „Stamm unverändert + bloße Endung" auf h)
oder die Definition um das unterscheidende Merkmal ergänzen, das die
Session tatsächlich benutzt hat („Endung mit eigener Bedeutung
[-ify = ‚machen zu'] zählt als Bild, nicht als bloße Endung") — und
dann die Werte gegen die ergänzte Definition durchzählen.

---

**Befund 11 — WICHTIG.** Die Silbenzahlen der Longlist sind eine
delegierte Zahl (Agenten-Rücklauf) und werden ungeprüft in W1
umgerechnet. Mindestens fünf sind — nach dem Maßstab des Dokuments
selbst — falsch.

*Fundstelle:* § 3 (Spalte „Silben") gegen § 5.1 (W1-Regel).

*Aussage:* W1 wird mechanisch aus Silbenzahl und Zeichenzahl gebildet;
die Umrechnung ist **fehlerfrei** (maschinell geprüft, 59/59, siehe
unten). Die *Eingangszahl* ist es nicht — und sie ist nirgends als
selbst gemessen ausgewiesen (§ 3 weist nur „Stories und Schwächen" als
Agenten-Übernahme aus).

*Beleg/Suchweg — rein dokumentintern, ohne fremde Autorität:* Dieselbe
Wortkomponente wird verschieden gezählt.

| Fall | Zählung im Dokument | Widerspruch im selben Dokument |
|---|---|---|
| N-124 Quartierlot **3** vs. N-121 Quartierly **4**, N-127 Quartierpuls **4**, N-117 Nahquartier **4** | „Quartier" einmal 2-silbig, dreimal 3-silbig | N-97 Quartio **3** (= Quar-ti-o) bestätigt die 2-silbige Lesart |
| N-112 Gastwende **2** | „Wende" 1-silbig | N-125 Stayrunde **3**, N-102 Gastschwelle **3**, N-128 Bleibewerk **3** — überall ist das 2-silbige Zweitwort mitgezählt |
| N-122 Logisware **3** | „Ware" 1-silbig | dieselbe Gegenprobe |

*Wirkung:* N-112 Σ 14→13 · N-117 Σ 11→12 · N-121 Σ 11→12 · N-122
Σ 12→11 · N-127 Σ 12→13. **Kein Shortlist-Effekt** — keiner der fünf
erreicht 15. Der Befund ist deshalb „wichtig", nicht „kritisch": Er
kostet Rang-Genauigkeit, nicht die Auswahl.

*Reparaturvorschlag:* Silbenzahlen an einer Stichprobe selbst
nachzählen (die Zahl steuert ein Wertungskriterium mechanisch), die
fünf korrigieren, Σ nachrechnen — und in § 3 die Spalte „Silben"
ausdrücklich der Agenten-Herkunft zuschlagen oder als selbst geprüft
ausweisen.

---

**Befund 12 — WICHTIG.** Ein Shortlist-Kandidat trägt in § 5.2
„Facette: keine" und in seinem eigenen Detailblatt „faktisch **Tech**"
— und bekommt deshalb den K5-T-Vermerk nicht, der genau für diesen
Fall gebaut wurde.

*Fundstelle:* § 5.2 (Zeile N-91) · § 4.4 (K5-T-Liste: „**1** — N-122")
· § 5.4/7 (Hostify).

*Aussage:* Das Detailblatt sagt „Facette: keine ausdrücklich, faktisch
aber **Tech** (durch die Endung)" und „Software-Anmutung: **sehr
stark**". K5-T ist die Klasse, in der das Dokument die ungelöste
Spannung zwischen der Kalibrierung (Facette Tech erlaubt) und dem
Portfolio-Entscheid E11 (Name darf nicht auf Technik verengen)
sichtbar macht — § 7.3 Nr. 4 führt sie als offenen User-Entscheid.
Hostify steht auf der Shortlist und trägt diesen Vermerk **nicht**;
N-122 Logisware trägt ihn und steht nicht auf der Shortlist. Der User
bekommt die Spannung damit ausgerechnet an dem Kandidaten nicht
gezeigt, bei dem er sie entscheiden müsste.

*Reparaturvorschlag:* Entweder N-91 in die K5-T-Klasse aufnehmen
(Nenner 2 statt 1, Summenprobe § 4.4 anpassen) oder in § 4.1 festlegen,
dass eine reine Klang-Endung nicht als Tech-Facette zählt — und den
Satz im Detailblatt entsprechend zurücknehmen. Beides ist vertretbar;
der Widerspruch ist es nicht.

---

**Befund 13 — WICHTIG.** Die K5-F-Klasse ist unvollzählig; die
Summenprobe in § 4.4 kann das nicht bemerken.

*Fundstelle:* § 4.4, Vermerkstabelle.

*Aussage:* K5-F („Verengung auf Empfang/Anreise") führt 5 IDs: N-102,
N-106, N-109, N-113, N-114. In § 5.2 tragen aber **sechs** Kandidaten
die Facette „Empfang": zusätzlich **N-103 Ankunftswerk**. Entweder
gehört N-103 in die Klasse, oder die Facette-Zuweisung in § 5.2 ist
falsch.

*Beleg/Suchweg:* maschineller Abgleich der Facette-Spalte gegen die
Klassenliste: `Facette=Empfang → N-102, N-103, N-106, N-109, N-113,
N-114` · `K5-F-Liste → N-102, N-106, N-109, N-113, N-114` · Differenz
**N-103**.

*Und die Lehre daneben:* Die Summenprobe „15 + 5 + 1 + 5 + 33 = 59 ✔"
bleibt auch bei 6 K5-F richtig (dann 15+5+1+6+32) — sie belegt
Vollzähligkeit, nie die richtige **Zuordnung**. Genau der Fall, vor dem
CLAUDE.md warnt („Die Summenprobe ist an der Einstufungs-Achse blind").

*Reparaturvorschlag:* N-103 aufnehmen (die Zeile „ohne K5-Vermerk" auf
32 setzen) und neben die Summenprobe eine **Zuordnungsprobe** stellen:
je Klasse die IDs aus der Quellspalte generieren statt von Hand listen.

---

**Befund 14 — WICHTIG.** Die K5-K.-o.-Linie „Verengung, von keiner
User-Wahl gedeckt" fällt bei zwei strukturgleichen Kandidaten
verschieden aus.

*Fundstelle:* § 4.3 (N-107 Zimmerlauf, K5 FAIL) gegen § 4.4
(N-112 Gastwende: kein K5-Vermerk, Σ 14).

*Aussage:* N-107 fiel, weil er „auf ein Einzelmodul (Zimmerbelegung)"
verengt und „‚Zimmer' weder ein vom User gewählter Stamm noch eine
gewählte Facette" ist. **N-112 Gastwende** verengt nach der eigenen
Longlist-Zeile auf „den Wechsel zwischen zwei Gästen" — ebenfalls ein
Teilvorgang —, und „Gast" ist ebenfalls kein gewählter Stamm. Er steht
in der Wertung **ohne jeden K5-Vermerk**. Randfall derselben Klasse:
**N-114 Nachtschwelle** verengt laut Longlist „aufs Nachtszenario",
bekommt aber den Vermerk **K5-F** („Verengung auf Empfang/Anreise") —
also die Einordnung in eine *gedeckte* Facette, obwohl die eigentliche
Verengung „Nacht" heißt und ungedeckt ist.

*Reparaturvorschlag:* Die Linie einmal sauber formulieren — „K.-o. bei
Verengung auf einen Teilvorgang, unabhängig vom Stamm; Vermerk statt
K.-o. nur, wenn der Teilvorgang **selbst** eine gewählte Facette ist" —
und die drei Fälle (N-107, N-112, N-114) daran gemeinsam entscheiden.
Da alle drei unterhalb der Shortlist liegen, ist das eine
Konsistenz-, keine Ergebnisfrage — aber die Linie muss halten, wenn
später jemand nachrückt.

---

**Befund 15 — WICHTIG.** Die Laien-Vorlage (§ 5.4) verletzt die
Klartext-Auflage des Auftrags an vier Stellen — und die wichtigste
Zahl der Vorlage ist nirgends erklärt.

*Fundstelle:* § 5.4, gemeinsamer Vorspann und Blattköpfe.

*Aussage und Beleg:*

1. **„Σ 19/21" ist unerklärt.** Jeder Blattkopf trägt die Zahl, die die
   Reihenfolge der Vorlage bestimmt; der Vorspann sagt kein Wort
   darüber, was gemessen wurde, aus wie vielen Kriterien die 21 besteht
   und dass zwei geplante Kriterien (Google-Konkurrenz, Handles)
   **gar nicht** eingerechnet sind. Ein Laie liest „19 von 21" als
   Gesamtnote.
2. **„PMS-Anbieter" (Blatt 6, Hihost) ist ein Fachkürzel ohne
   Klartext** — der Auftrag verlangt ausdrücklich „Kürzel in
   User-Vorlagen immer mit Klartext daneben". Zusätzlich ist der
   Wettbewerber im Blatt anonymisiert („ein bestehender PMS-Anbieter"),
   während § 5.1 ihn offen nennt (`SIHOT`). Wer nur die Vorlage liest,
   kann den Befund nicht nachsehen.
3. **„K5-H" steht nackt** in den Blättern 3 und 5 (der erklärende Satz
   daneben rettet den Inhalt, nicht das Kürzel).
4. **Das beschreibend-Risiko fehlt in 5 von 10 Blättern** — genannt
   bei Mithost, Hostara, Quartio, Hostify, Quartano; **nicht genannt**
   bei Hallotel, Mithotel, Hihost, Stayora, Quartierlot (alle „m" laut
   § 5.2). Bei Hihost fehlt zusätzlich der Betriebstyp-/
   Beschreibungs-Vermerk **ganz**. Ein Blatt, das einen Risikowert
   ausweist, neben einem, das schweigt, liest sich wie „hier gibt es
   keins" — die Einräumung wirkt wie Vollständigkeit.

*Was gut ist* (damit die Kritik einen Maßstab hat): Der gemeinsame
Vorspann übersetzt Schutzfähigkeit, Bedeutungsprüfung, technische
Tauglichkeit und die offenen Prüfungen sauber in Klartext; jedes Blatt
trägt den unbequemen Satz sichtbar (Mithost: „das ist der wunde Punkt";
Hallotel: Wortwitz-Risiko; Hihost: Wettbewerbsnähe; Stayora:
Diktat-Risiko hoch). Die Frage „welcher Satz würde die Entscheidung
ändern" ist je Blatt beantwortet — mit der Ausnahme aus Punkt 4.

*Reparaturvorschlag:* Einen Absatz „Was die Zahl bedeutet" in den
Vorspann (sieben Kriterien à 0–3, was fehlt, und der Satz „die Zahl
ordnet, sie entscheidet nicht"); „PMS" auflösen („Hotel-Verwaltungs-
software") und den Anbieternamen entweder in beiden oder in keinem
Abschnitt nennen; das beschreibend-Risiko in allen zehn Blättern
führen, auch wo es „mittel" ist.

---

### HINWEISE

**Befund 16 — Hinweis.** Das Doktrin-Zitat ist in Anführungszeichen
verändert. Quelle (`fund/positionierungspapier.md`, ausdrücklich
„wörtlich"): „**Jeffrey** ersetzt nicht den Gastgeber, sondern
entlastet ihn." Welle 2 zitiert durchgehend „Die Technik ersetzt den
Gastgeber nicht, sondern entlastet ihn" (§ 1 Prompt, § 5.1 W3,
§ 5.4/1). Die Anonymisierung war im **Findungs-Prompt** Pflicht
(Kontaminationsschutz) — in § 5.1 und § 5.4 ist sie es nicht mehr.
*Reparatur:* Klammer statt stiller Ersetzung: „‚[Das Produkt] ersetzt
nicht den Gastgeber, sondern entlastet ihn' (Positionierungspapier § 2,
Produktname für dieses Dokument ersetzt)".

**Befund 17 — Hinweis.** „Everlast-Zeitstempel … Arbeitsstände werden
**mitlaufend** committet" (§ 1 Nr. 5) ist am Objekt nicht vollzogen:
`git log dc0a452 -- marke/naming-sprint-2026-08-welle2.md` liefert
**genau einen** Commit; die Datei entstand laut Fußzeile ab ~13:56 und
wurde 14:34 in einem Stück committet. Der Zeitstempel-Zweck (Entstehung
vor dem 18.09.2026 belegbar) ist erfüllt, die Verfahrenszusage nicht.
*Reparatur:* Zusage an die Praxis anpassen oder umgekehrt.

**Befund 18 — Hinweis.** Die W9-Zahl „**1.499** Namens-Token" ist nicht
reproduzierbar, weil die Extraktionsregel unvollständig angegeben ist
(keine Trenn-, Filter- oder Mindestlängen-Regel). Meine Nachbildung
„fettgedruckte Ausdrücke + erste Tabellenspalten, unique" über
`fund/wettbewerbsbild.md` ergibt **1.720** bzw. **1.893**. Gleiche
Größenordnung, also kein Verdacht — aber die Zahl trägt ihren Zählweg
nicht. Ebenso nicht reproduzierbar: „Straiv → 11 Treffer",
„Brandnamic → 3 Treffer", „28 der 71 Kandidaten mit mindestens einem
Treffer" (Skript nicht versioniert).

**Befund 19 — Hinweis.** Fundstellen-Drift: § 4.5 und § 5.1 zitieren
das Varianten-Raster als „`marke/markenrecherche-verfahren.md`
**§ 3.2**". Das Verfahren hat keinen § 3.2; das Raster steht in § 3
als Listenpunkt 2. (Welle 1 zitiert genauso — der Fehler ist geerbt,
nicht neu.) Inhaltlich weiter: Die vier Auslöser-Linien in § 4.5 sind
**nicht** die Achsen des Rasters; die Raster-Achsen `c/k/z`, `i/y`,
`ei/ai`, Dehnungs-h kommen in Welle 2 nicht vor (spürbar z. B. bei
N-98 Quartano → *Kwartano*, einer c/k/z-Falle). *Reparatur:* Fundstelle
korrigieren und einen Satz, dass die Linien eine **Auswahl** aus dem
Raster sind, mit Grund.

**Befund 20 — Hinweis.** Die Spalte „Signal" ist dreiwertig definiert
(ja/schwach/nein), hat aber über 59 Kandidaten **null** „nein". Eine
Skala, deren unterster Wert nie fällt, ist faktisch zweiwertig —
entweder ist die Vergabelinie zu milde oder „nein" ist entbehrlich.
(Zusammenhang mit Befund 1: eine schärfere Linie hätte den Kontrast
sichtbarer gemacht.)

**Befund 21 — Hinweis.** Die Detailblätter verdichten nach oben:
Blatt 6 (Hihost) schreibt „Risiko **mittel bis hoch**", die Tabelle
vergibt „mittel"; Blatt 2 (Hostara) schreibt „Risiko gering (bester
Wert der Shortlist)" bei einer selbst genannten Falschschreibung. Die
Richtung ist jeweils die für den Kandidaten günstigere.

---

## 2. Ergebnis der fünf Prüffragen

### (a) Kontaminationsschutz — **am Archivtext gemessen: sauber**

*Prüfgegenstand:* die beiden Archiv-Blöcke in § 2 zwischen den
HTML-Markern (`ARCHIV-BLOCK GEMEIN` / `ARCHIV-BLOCK ACHSEN`), Zeilen
115–195 des Dokuments = **8.777 Zeichen / 83 Zeilen**, maschinell
ausgeschnitten.

*Suchweg 1 — Namenslisten (Substring, case-insensitiv):*

| Korpus | Suchbegriffe | Trefferstellen |
|---|---|---|
| Welle-1-Kandidaten (alle `\| N-XX \| Name \|`-Zeilen aus Welle 1, 116 Einträge = 58 Namen mit Dubletten aus Longlist/Wertung/Ausscheidungen) | 116 | **0** |
| Alt-/Bestandsnamen: `heyPensio`, `hey-pensio`, `Pensio`, `hey`, `Jeffrey`, `Firzlaff` | 6 | **0** |
| Partner-/Plattform-/Wettbewerbernamen (Handliste: Apaleo, Mews, SIHOT, protel, Oracle, Opera, Cloudbeds, Stripe, Adyen, n8n, Cloudflare, Nuki, SALTO, dormakaba, Everlast, Straiv, flexipass, hoteldoor, iiq, Brandnamic, likeMagic, book your key, Smart Host, hotelbird, Hoteligy, Hoteza, HotelFriend, hotelsuite, StayFi, U-Stay, GastroSuisse, DEHOGA, Kohl, Prodinger, unitels, Gasser, Miesch, H2O Hospitality, SUM Hospitality, iLumio, Klaviyo, Securitas u. a.) | 48 | **1 — Fehltreffer** (`Opera` in „**opera**tive Prozesse") |
| Eigennamen-Token maschinell aus `fund/wettbewerbsbild.md` (fettgedruckte Ausdrücke + erste Tabellenspalten, gefiltert auf Großbuchstaben, ≤ 4 Wörter) | 732 | 60 — **alle Gattungswörter** (Technik, Leistung, Deutsch, Produkt, Feld, Achse, Keine, Plus, Hotelkette, größere Häuser …), **kein Eigenname** |

*Suchweg 2 — Vollzählige Gegenrichtung (die stärkere Kontrolle, weil
sie eine Unmöglichkeit liefern kann):* Enumeration **aller** Tokens des
Archivblocks mit Großbuchstabe, Binnenmajuskel oder Ziffer — die
Zeichenklasse, in der jeder Firmen-, Produkt- oder Markenname liegen
müsste. Ergebnis: **276 verschiedene Tokens**, vollständig gelistet und
durchgesehen. Darunter ist **kein einziger** Firmen-, Produkt-,
Plattform- oder Wettbewerbername; die einzigen Eigennamen sind
Sprachbezeichnungen (Deutsch, Englisch, Türkisch, Französisch,
Spanisch, Italienisch) und Gattungsbegriffe mit Diakritika
(`Hôte`, `Hôtellerie`, `hospitium`, `hospitalité`, `Logis`,
`Quartier`). Die Lücke dieser Enumeration — **durchgängig
kleingeschriebene** Marken (`hotelbird`, `straiv`, `flexipass`,
`protel`, `unitels`, `apaleo`, `hey`) — ist genau durch Suchweg 1
abgedeckt; die beiden Kontrollen sind komplementär.

*Positivkontrollen im selben Lauf* (verschiedene Sollwerte, Zeichenklasse
des Musters mit abgedeckt):

| Kontrolle | Soll | Ist |
|---|---|---|
| `Gastgeber` · `hospitium` · `Hotelier` · `Quartier` · `Meldeschein` | Treffer | Treffer ✔ |
| `Hôtellerie` (Diakritikum — prüft, dass die Suche Nicht-ASCII findet) | Treffer | Treffer ✔ |
| `Freihand` (echter Welle-1-Name, der treffen WÜRDE, wäre er drin) | kein Treffer | kein Treffer ✔ |
| `Zzqwxvlop` (Kontrollstring) | kein Treffer | kein Treffer ✔ |

*Bewertung:* Der Kontaminationsschutz ist **am archivierten Text
belegt** — und zwar strenger, als der Auftrag verlangte: Der Auftrag
erlaubte die Abstraktion „Cloud-PMS", der Prompt schreibt
„Cloud-Buchungs- und -Verwaltungssystem" und vermeidet auch das Kürzel.
Der Satz „Frage nicht nach dem bisherigen Namen des Unternehmens" ist
eine sinnvolle Zusatzsicherung, die der Auftrag nicht verlangt hat.
**Zwei Vorbehalte:** (1) Dass der archivierte Text der abgeschickte ist,
ist nicht belegt — siehe Befund 7 (die Beleg-Kette endet in einer nicht
existierenden Datei), und das Dokument sagt das selbst in § 7.1.
(2) Der Schutz *gegen Wettbewerbernamen* hat funktioniert, der Schutz
*gegen ungewählte Stämme* nicht — der eigene B4-Prompt hat den
Gast-Stamm geöffnet (13 Kandidaten), der Auftrag den Wirt-Stamm
(5 Kandidaten). Ersteres meldet die Session selbst (§ 3.1 Nr. 1),
Letzteres mit falscher Zuschreibung (Befund 4).

### (b) K.-o.-Tabelle: Aussage und Fundstelle getrennt geprüft

**Reproduktion des Wörterbuchlaufs — nicht stichprobenweise, sondern
vollständig.** Der Auftrag verlangte ≥ 5 Kandidaten groß und klein; ich
habe **alle 71 Kandidaten über alle vier Kanäle** nachgefahren
(Node/https, 0,6 s Drosselung, eigener User-Agent, Statuscode je
Abruf), weil ein Volllauf hier billiger ist als die Diskussion über die
Stichprobenwahl.

| | Dokument § 4.2 | Nachlauf 18.08.2026 |
|---|---|---|
| Abrufe | 284 (71 × 4) | **284** ✔ |
| HTTP 200 | 4 | **4** ✔ |
| HTTP 404 | 280 | **280** ✔ |
| 429 / Timeouts | 0 / 0 | **0 / 0** ✔ |

Die **vier Treffer sind identisch, kanalgenau**: `hotelo` EN-klein ·
`hotelon` EN-klein · `quartano` EN-klein · `Nahost` DE-groß. Kein
fünfter Treffer, den das Dokument übersehen hätte.

**Die acht Positivkontrollen des Dokuments reproduzieren einzeln:**

| Kontrolle | Soll lt. § 4.2 | Nachlauf |
|---|---|---|
| `talora` EN-klein | 200 | 200 ✔ |
| `Talora` EN-groß | 404 | 404 ✔ |
| `einkehr` EN-klein | 404 | 404 ✔ |
| `Einkehr` EN-groß | 200 | 200 ✔ |
| `herberge` DE-klein | 200 | 200 ✔ |
| `Herberge` DE-groß | 200 | 200 ✔ |
| `herbergo` DE-klein | 404 | 404 ✔ |
| `Herbergo` DE-groß | 404 | 404 ✔ |

Die Kontrollen sind gut konstruiert: `einkehr`/`Einkehr` misst die
Case-Mechanik mit **verschiedenem Sollwert je Kanal** (404 gegen 200),
`talora` spiegelt die Nulltreffer-Mechanik (kleines fremdsprachiges
Wort). Einzige Ausnahme ist die Slang-Zeile — **Befund 6**.

**Sind die vier Treffer inhaltlich richtig wiedergegeben?** Ja, alle
vier, an der Quelle nachgelesen (`?action=raw`):

| Kandidat | Dokument sagt | Quelle sagt | Urteil |
|---|---|---|---|
| N-72 Hotelo | „hotel"; Esperanto, Ido; dazu slowenische Partizipform von *hoteti* | `==Esperanto== … # [[hotel]]` · `==Ido== … # [[hotel]]` · `==Slovene== ===Participle=== {{infl of\|sl\|hoteti\|\|n\|s\|l-participle}}` | **korrekt**, auch die Slowenisch-Nebenbemerkung |
| N-90 Hotelon | „accusative singular of *hotelo*", Esperanto | `==Esperanto== ===Noun=== {{eo-form of\|hotel\|on}}` (rendert genau so) | **korrekt** |
| N-98 Quartano | „dative/ablative … of *quārtānus*", Latein | `==Latin== ===Adjective=== {{inflection of\|la\|quārtānus\|\|dat//abl\|m//n\|s}}` | **korrekt** |
| N-80 Nahost | „nicht genau eingegrenztes Gebiet in Westasien; Naher Osten"; Herkunft „Kontraktion aus ‚der Nahe Osten'" | `{{Bedeutungen}} :[1] nicht genau eingegrenztes Gebiet in [[Westasien]]; [[Naher Osten]]` · `{{Herkunft}} :[[Kontraktion]] aus der Wortgruppe ''der Nahe Osten''` | **korrekt**, wortgenau |

Die Einordnung „Esperanto/Ido/Latein liegen außerhalb des
E-K4-Suchraums → K6 bestanden, aber ⚠️-Vermerk" ist sachlich richtig
und die ⚠️-Vermerke stehen in § 4.4 tatsächlich.

**Die W9-Fundstellen halten ebenfalls.** Alle im Dokument namentlich
genannten Zeichen existieren in `fund/wettbewerbsbild.md`
(Trefferzahlen `grep -oiF`): hotelbird 7 · Hoteligy 1 · Hoteza 1 ·
HotelFriend 1 · hotelsuite 1 · Smart Host 22 · H2O Hospitality 1 ·
SUM Hospitality 7 · SIHOT 9 · StayFi 1 · U-Stay 1 · GastroSuisse 4.
Auch die Levenshtein-Angabe stimmt: `SIHOT`↔`Sohost` = 2,
`SIHOT`↔`Hihost` = 2 (von Hand nachgerechnet). Und die **Negativseite**
hält: Für die Stämme Herberge/Bleibe/Nacht/Quartier/Logis/Empfang/
Ankunft habe ich das ganze Dokument durchsucht — Quartier 0, Logis 0,
Empfang 0, Ankunft 0; die Treffer für Herberg (7), Bleibe (5), Nacht
(28) sind **ausnahmslos Fließtext** (`Beherbergung`, `verbleibende`,
`Nachtrag`), im Kontext einzeln angesehen. Positivkontrolle desselben
Laufs: Straiv 132, Brandnamic 61, `Zzqwxvlop` 0.

**Vergabelinien gegen alle Kandidaten — die Kernfrage.** Was der Lauf
**bestätigt**:

- Die W1-Regel ist **fehlerfrei** aus Silbenzahl und Zeichenzahl
  abgeleitet: 59/59, **null** Abweichungen (Skript: Soll aus
  `{2:3, 3:2, 4:1}` minus 1 bei ≥ 10 Zeichen gegen die gedruckte
  W1-Spalte).
- Alle **59 Zeilensummen** stimmen (W1+W2+W3+W4+W5+W6+W9 = Σ).
- Die **Summenverteilung** stimmt zeichengenau mit der Zählprobe des
  Dokuments überein: 19(1) · 18(1) · 16(4) · 15(9) · 14(9) · 13(16) ·
  12(13) · 11(4) · 10(1) · 8(1) = 59.
- Die **W2-Verteilung** stimmt mit § 4.5: W2 1 → 18, W2 2 → 33,
  W2 3 → 8.
- **Stamm-Verteilung H 17 · G 19 · S 22 · A 13 = 71** — exakt wie
  § 3.1; die Teilprobe der 13 A-Kandidaten (Gast 7 · Empfang 2 ·
  Ankunft/Zimmer/Haus/Nacht 4) stimmt ebenfalls; alle 13 stammen
  tatsächlich aus B4.
- **IDs N-59…N-129 lückenlos, keine Dublette**, 71 Zeilen; die
  Achsen-Zählung (B1 14 · B2 14 · B3 17 · B4 15 · B5 14 = 74
  Nennungen − 3 Doppelnennungen = 71) reproduziert.
- Ausscheidungs-Zählweg 5 + 6 + 1 = 12, 71 − 12 = 59 ✔.

Was der Lauf **widerlegt bzw. offenlegt** — wer wurde nur an einer
Linie aussortiert, und hätte dieselbe Linie weitere treffen müssen:
**Befunde 2, 3, 10, 12, 13, 14.** Zusammengefasst: Von den zwölf
Ausgeschiedenen fiel jeder an **genau einer** Linie, und keiner davon
zu Unrecht — die Fehler liegen ausnahmslos in der **Gegenrichtung**
(Kandidaten, die dieselbe Linie hätte treffen müssen, stehen noch):
N-129 Bleibestark und N-119 Weitstay gegen K1(a) · N-129 und N-83
Duhost gegen K1(b) · N-112 Gastwende und N-114 Nachtschwelle gegen die
K5-Einzelmodul-Linie · N-103 gegen K5-F. **Keiner dieser Fälle liegt
über Σ 14**, die Shortlist bleibt davon unberührt; was die Shortlist
verändert, ist allein die W2-Vergabe (Befund 2).

### (c) Kalibrierungs-Rückwärtslese — „Was ist gar nicht erst angekommen?"

Suchraum: Tagesplan-Abschnitt „✅ Kalibrierung Naming" **vollständig**
(Z. 133–175, Kernbefund + 5 Dropdown-Zeilen + 4 „Folgen für den
Zuschnitt") und der Katalog **vollständig** (§§ 1–6 + Nachtrags-Kasten).
Pflichtergebnis je Punkt:

**Aus der Kalibrierung (Tagesplan):**

| # | Punkt | Ergebnis | Fundstelle / Feststellung |
|---|---|---|---|
| C1 | Kernbefund „Gastgewerbe-Spezialisierung muss erkennbar sein" | **teilweise** | erhoben als Spalte „Signal" (§ 5.2) und im Findungs-Prompt („muss ohne Erklärung hörbar sein"); **nicht** in Wertung und **nicht** in der Auswahlregel → **Befund 1** |
| C2 | Kernbefund „der Bereich (womit wir helfen) kommt nicht heraus" | **teilweise** | Spalte „Facette" (§ 5.2); da die Facette laut Kalibrierung „Kür" ist, ist die Nicht-Gewichtung gedeckt — 9 von 10 Shortlist-Kandidaten tragen aber „keine" Facette, was im Vorlagenkopf nicht sichtbar ist |
| C3 | „Es braucht einen Kompromiss" | **angekommen** | § 5.2.1 Kompromiss-Bilanz, 59 Sätze, je Kandidat einer — der stärkste Teil des Dokuments |
| C4 | Maßstab Altname (erahnbar + freundlich/modern; Techbezug fehlt und schadet nicht) | **angekommen** | Kopfblock, korrekt anonymisiert („der Bestandsname", „Betriebstyp zu eng" statt „Pension zu eng") |
| C5 | Störfaktoren bieder/altbacken + weich/beliebig (nicht: künstlich, nicht: deutsch) | **angekommen** | Findungs-Prompt als Negativliste mit Beispielen; „Störfaktor-Check" in allen 10 Blättern |
| C6 | Stämme Hotel · Host · Stay; **nicht** Gast/Guest | **teilweise** | B1/B2/B3/B5 tragen es; B4 hat den Gast-Stamm geöffnet (13 Kandidaten) — von der Session selbst gemeldet und diszipliniert disponiert (§ 3.1 Nr. 1). Ungemeldet: der Wirt-Stamm aus dem Auftrag → **Befund 4** |
| C7 | Facette: alle vier gewählt → Kür | **angekommen** | § 4.1 K5-F/K5-T behandeln die gewählten Facetten als gedeckt |
| C8 | Bauform: alle drei fächern | **angekommen** | B1–B5 decken alle drei; Shortlist enthält alle drei (§ 5.3, nachgerechnet ✔) |
| C9 | Folge „K1 verschärfen, beschreibend-Risiko als eigene Spalte" | **angekommen** (mit Vergabemängeln → Befund 10) | § 4.1 |
| C10 | Folge „die 4 K1-Blockierten aus Welle 1 bleiben blockiert" | **angekommen** | § 4.3, Absatz „Unterschied zu Welle 1" — nennt Getrost/Verlass/Obenauf/Obhut korrekt |
| C11 | Folge „K5-Spannung sichtbar machen, nicht auflösen; jeder Hotel-Stamm-Kandidat trägt einen Vermerk" | **angekommen** | K5-H trägt **alle 15** überlebenden Hotel-Kandidaten (nachgezählt: 17 H minus N-62/N-67 = 15 ✔) |
| C12 | Folge „**Host- und Stay-Stämme sind K5-unkritisch**" | **abgewichen, nicht ausgewiesen** | K5-S für N-99/N-100/N-104/N-128/N-129 → **Befund 5** |
| C13 | Folge „‚hey' nicht säen; schlägt ein Agent ihn vor, als eigene Frage vorlegen" | **angekommen** | § 5.5(a); die Negativaussage „kein Agent hat ihn vorgeschlagen" ist an der Longlist prüfbar (kein Kandidat enthält „hey" — Substringsuche über alle 71 Namen: 0) |

**Aus dem Katalog (vollständig, nicht nur §§ 2/3):**

| # | Punkt | Ergebnis | Fundstelle / Feststellung |
|---|---|---|---|
| K-A | § 1: „ein Kriterium gilt für ALLE gleich" | **teilweise** | im Grundsatz eingehalten (die 13 A-Kandidaten durchlaufen dieselbe K.-o.-Prüfung — ausdrücklich und richtig); in der Vergabe an mehreren Stellen nicht → Befunde 2, 3, 10, 14 |
| K-B | § 1: **rückwirkende** Bestandsprüfung bei geändertem Kriterium | **gar nicht** | K1 verschärft, K6 ausgeweitet; keine Aussage über die 51 Welle-1-Überlebenden, auch nicht als offener Posten → **Befund 8** |
| K-C | § 1: „nicht anwendbar" statt schlechtestem Wert | **angekommen** | W7/W8 als „n. a. — offen", Nenner max. 21 |
| K-D | § 1: Katalog bewertet Namen, nicht Logos | **angekommen** | W6 ausdrücklich Ersteinschätzung, Detail MARKE4 |
| K-E | § 2 K1 mit E-K5 (ohne Anwalt) | **angekommen** | § 4.1 samt ⚠️-Kasten „Was diese Einschätzung NICHT ist" |
| K-F | § 2 K4 Bestehens-Schwelle (≥ 2 Personen, Durchfall-Regel) | **angekommen** | § 6 Nr. 3 gibt die Katalogschwelle sinngemäß korrekt wieder; Nenner „0/71" sauber ausgewiesen |
| K-G | § 2 K5 trägt E2 + Portfolio-Breite | **angekommen** | § 4.1, K5-T führt die E11-Spannung ausdrücklich als ungelöst (§ 7.3 Nr. 4) — mit einer Lücke bei N-91 → Befund 12 |
| K-H | § 2 K6 „Wörterbuch-**/Slang**-Prüfung + Muttersprachler EN" | **teilweise** | Wörterbuch: vollständig und reproduzierbar (s. o.). Slang: **nur die Kanalfähigkeit** geprüft, kein Slang-Korpus; § 7.2 sagt das ehrlich, die Kontrollzahlen tragen aber nicht → Befund 6. Muttersprachler: korrekt als offen geführt (0/71), und K6 folgerichtig **nicht** ✅ |
| K-I | § 2 K7 + E-K3 (kein Bindestrich) | **angekommen** | 71/71 mit Positivkontrolle („Frühstück-2" → 4 Treffer) — vorbildlich formuliert |
| K-J | § 3 W5: „auch als künftige **eingetragene Firma** führbar (§ 18 HGB), IHK-Vorabprüfung" | **gar nicht** | Die W5-Vergabelinie in § 5.1 nennt nur Regional-/Technik-Verengung und Zielgruppen-Ausschluss; **§ 18 HGB, die Irreführungsfrage und der IHK-Prüfweg fehlen vollständig.** Das ist nicht formal: Bei N-59 Mithotel und N-61 Hallotel notiert das Dokument selbst „klingt selbst wie ein Haus" bzw. „riskiert, für ein Hotel gehalten zu werden" — genau die **Irreführung über den Geschäftsgegenstand**, die § 18 Abs. 2 HGB adressiert. Beide stehen auf der Shortlist, beide mit W5 = 2 aus reiner Betriebstyp-Betrachtung |
| K-K | § 4.1 Reihenfolge K.-o. → Wertung | **angekommen** | § 4 vor § 5 |
| K-L | § 4.2 Rangpunkte-Modell | **angekommen** | 3/2/1/0 + n. a. |
| K-M | § 4.3 Datum + Prüfweg je Bewertung, ⚠️ nicht zu ✅ verdichten | **angekommen** | Datumsangaben in allen Abschnittsüberschriften; K6-Teilbestehen sauber als „nur Schreibtisch-Teil" |
| K-N | § 4.4 Everlast-Zeitstempel (mitlaufend committen) | **teilweise** | ein Commit → Befund 17 |
| K-O | § 4.5 Ausschlussliste statt Vorgabe | **angekommen** | belegt durch (a) |
| K-P | § 5 E-K4 (TR/FR/ES/IT je Sprache ein Check) | **teilweise** | → **Befund 9** |
| K-Q | Nachtrag: W9-Liste wächst um die Beratungs-Wettbewerber, sobald FUND3-Teil B erhoben ist | **angekommen — über das Beauftragte hinaus** | § 5.1 zieht W9 gegen das **ganze** Wettbewerbsbild inkl. Teil B, weist die Abweichung vom Auftrag aus und benennt die verbliebene Lücke (P17). Ich habe § 0.0 und B1 dazu gelesen: Die Aussagen über den Überholt-Vermerk, die fünf Felder und die P17-Lücke sind **wörtlich zutreffend**. Das ist der methodisch beste Abschnitt des Dokuments |

### (d) Shortlist-Auswahlkriterium — an der eigenen Tabelle **nicht** widerlegbar, aber in einem Parameter unfrei

**Nachgerechnet, vollständig:**

- Σ ≥ 15: **15** Kandidaten (maschinell: N-73/19, N-87/18, N-61/16,
  N-97/16, N-101/16, N-110/16, N-59/15, N-78/15, N-86/15, N-91/15,
  N-94/15, N-95/15, N-98/15, N-105/15, N-124/15) — **stimmt.**
- Gesperrt durch (i) anderer Stamm: N-101, N-110, N-105 = **3** —
  stimmt (alle drei tragen „A").
- Gesperrt durch (iii): N-86, N-94 = **2** — stimmt.
- 15 − 3 − 2 = **10**, und genau diese zehn stehen in § 5.4. **Kein**
  Kandidat erfüllt die Regel und fehlt; **kein** Kandidat verfehlt sie
  und ist drin. Die Regel ist an der Tabelle **nicht widerlegbar.**
- Auffang-Klausel (iv): zu Recht nicht gebraucht — alle drei Stämme
  (H: N-59, N-61 · G: N-73, N-78, N-87, N-91 · S: N-95, N-97, N-98,
  N-124) und alle drei Bauformen (Vorsatz+Stamm: 4 · Stamm+Endung: 5 ·
  zwei Wörter: N-124) sind vertreten — nachgeprüft an der
  Bauform-Spalte der Longlist.
- „Die Regel kann anders ausfallen": **stimmt** — drei Kandidaten mit
  16/16/15 fallen tatsächlich an (i), 44 von 59 an (ii). Es ist keine
  Positivliste in Verkleidung.

**Aber — die Schwelle selbst hatte keine Freiheit.** Der Auftrag
verlangt eine Shortlist von 8–12. Ich habe alle ganzzahligen Schwellen
durchgerechnet:

| Schwelle | Kandidaten | nach (i) | nach (iii) | im Korridor 8–12? |
|---|---|---|---|---|
| Σ ≥ 14 | 24 | 19 | **17** | nein (zu viele) |
| **Σ ≥ 15** | 15 | 12 | **10** | **ja** |
| Σ ≥ 16 | 6 | 4 | **4** | nein (zu wenige) |
| Σ ≥ 17 | 2 | 2 | **2** | nein |

**Σ ≥ 15 ist die einzige Schwelle, die den Auftragskorridor trifft.**
Die Beteuerung „vor dem Anwenden formuliert, damit sie nicht zur
Beschreibung des Ergebnisses wird" ist damit inhaltlich leer: Sie ist
weder prüfbar (kein Zeitstempel, ein einziger Commit — Befund 17) noch
informativ, weil kein anderer Wert wählbar war. Die *Struktur* der
Regel sortiert nachweislich aus; ihr *entscheidender Parameter* ist
vom gewünschten Ergebnisumfang determiniert.

*Reparaturvorschlag:* Den Satz ersetzen durch die ehrliche Fassung:
„Die Schwelle Σ ≥ 15 ist die einzige, die den vom Auftrag verlangten
Umfang 8–12 trifft (14 → 17 Kandidaten, 16 → 4). Sie ist damit am
Umfang kalibriert, nicht an der Sache — was sie **trennt**, zeigen die
drei an (i) gefallenen Spitzenkandidaten." Zusammen mit Befund 2
(W2-Korrektur würde N-78 und N-98 unter die Schwelle drücken) heißt
das: Die Shortlist steht auf einer Punktgrenze, an der zwei ihrer zehn
Mitglieder um genau einen Punkt hängen.

### (e) Klartext-Vorlage für den Laien

**Was trägt:** Der gemeinsame Vorspann von § 5.4 ist gut — er
übersetzt Schutzfähigkeit, Bedeutungsprüfung in sechs Sprachen,
technische Tauglichkeit und die vier offenen Live-Prüfungen ohne ein
einziges ungeklärtes Fachwort und sagt ausdrücklich, was **nicht**
geprüft ist. Jedes der zehn Blätter trägt dieselben Rubriken (Klang ·
Bedeutung/Bild · Software-Anmutung · Aussprechbarkeit ·
Diktat-Einschätzung · Gastgewerbe-Signal · Facette · Störfaktor-Check ·
Kompromiss — maschinell geprüft: **10/10 vollständig**), und die
Diktat-Einschätzungen nennen konkrete Falschschreibungen statt
Adjektive. Der Satz, der die Entscheidung ändern würde, steht in
9 von 10 Blättern sichtbar und nicht in einer Nebenbemerkung —
besonders sauber bei Mithost („⚠️ schwach … der wunde Punkt dieses
Namens **gemessen an Ihrer Kalibrierung**"), Hallotel (Wortwitz-Risiko
gegen eine Investitionsentscheidung), Hostara (Nähe zum Störfaktor
„weich/beliebig" — „genau diese Art Klangendung hat Ihnen an der
ersten Shortlist missfallen") und Stayora (Diktat-Risiko hoch).

**Was nicht trägt:** vier Punkte, im Einzelnen in **Befund 15** —
die unerklärte Zahl „Σ x/21", das nackte „PMS", das nackte „K5-H", und
das in fünf von zehn Blättern fehlende beschreibend-Risiko (bei Hihost
fehlt der Vermerk ganz). Dazu **eine Einschränkung, die sich versteckt**:
Blatt 6 nennt die Wettbewerbsnähe von Hihost, ohne den Anbieter zu
nennen, den § 5.1 offen ausschreibt — der Leser der Vorlage kann den
schwerwiegendsten Einzelbefund der Liste nicht nachprüfen.

**Und der Satz, der in der Vorlage fehlt:** dass **8 der 10**
vorgelegten Namen auf genau der Achse „schwach" sind, wegen der der
User die erste Liste verworfen hat. Er steht in keinem Blatt und in
keinem Vorspann; er ist nur aus der Tabelle § 5.2 zusammenzählbar
(Befund 1).

---

## 3. Nicht erhoben / nicht prüfbar (Fundorte, keine Ausrede)

1. **Wörtlichkeit der archivierten Prompts** — nicht prüfbar. Die
   Vergleichsdateien (`prompt-gemein.md`, `achsen.md`) liegen im
   nicht versionierten Session-Scratchpad; das Ergebnis steht laut
   § 7.1 in `protokolle/R19-A-abschluss.md`, die im Prüfstand nicht
   existiert. **Fundort für die Nacharbeit:** § 7.1 (Befund 7).
2. **Dass die archivierten Prompts abgeschickt wurden** — strukturell
   nicht prüfbar, vom Dokument selbst so ausgewiesen (§ 7.1
   Geltungsgrenze). Kein Werkzeug der Kette kann das belegen.
3. **Die Agenten-Rückläufe** — nirgends archiviert. Damit sind
   ungeprüft: alle 71 Namen als tatsächliche Agenten-Vorschläge, die
   Silbenzahlen (→ Befund 11), die Stories, die Schwächen-Spalte, die
   Selbstkritiken, die Aussage „alle fünf Agenten melden denselben
   Strukturkonflikt" (§ 3.1 Nr. 3) und die drei Nicht-Mitzählungen
   („Hotelier", „Nachtruhig", „Gastheim"). **Fundort:** § 3, Zählweg —
   ein `sensibel/rohbelege-R19-A/` existiert nicht (der Tagesplan hat
   einen Rohbelege-Ordner nur R19-B zugewiesen).
4. **Der Wortlaut der User-Kalibrierung** — `sensibel/…-wortlaut.md`
   ist git-ignoriert und für Prüfer wie Bau-Session tabu. Meine
   Rückwärtslese (c) misst gegen die **Wiedergabe** im Tagesplan; ob
   die Wiedergabe vollständig ist, kann ich nicht sagen. **Fundort:**
   Tagesplan Z. 133–175 gegen die sensibel-Datei — prüfbar nur durch
   den User oder die Leitsession.
5. **Der W9-Maschinenteil** (1.499 Token, „Straiv → 11 Treffer",
   „28 von 71") — nicht reproduzierbar, Skript nicht versioniert,
   Extraktionsregel unvollständig (Befund 18). Nachgebildet habe ich
   nur die Größenordnung.
6. **Der Leseteil von W9** („die namentlich geführten Anbieter und Apps
   in §§ 3.1–3.4, § 4 und Teil B") — von mir **nicht** nachvollzogen;
   ich habe `fund/wettbewerbsbild.md` nur gegriffen, nicht gelesen.
   Eine klangliche oder begriffliche Nähe, die nur beim Lesen
   auffällt, hätte ich nicht gefunden. **Fundort:** wettbewerbsbild
   §§ 3.1–3.4, § 4, B4/B5/B6/B8.
7. **W3, W5, W6 und die Spalten „Signal"/„Facette"** — inhaltlich
   nicht nachgeprüft. Das sind Urteilswerte ohne maschinell prüfbares
   Soll; ich habe nur die beiden ausdrücklich begründeten W3-Nullen
   (N-85, N-120) gegen ihre Begründung gehalten (beide tragen) und
   die Vergabelinien auf innere Widersprüche gelesen. Eine
   systematische W3/W5/W6-Drift über 59 Kandidaten wäre mir entgangen.
8. **K2-Vorab-Vermerke** — der Auftrag erlaubt sie („klingt wie Marke
   X"); im Dokument gibt es außer der SIHOT-Nähe **keinen**. Ob es
   welche hätte geben müssen, ist ohne Registerkenntnis nicht
   feststellbar (das ist R19-B). Ich habe es **nicht erhoben**, nicht
   „unauffällig".
9. **Die Reproduktion meines eigenen Wiktionary-Laufs** misst den
   Stand vom **18.08.2026**. Läuft der Bau-Lauf und mein Nachlauf am
   selben Tag, ist die Übereinstimmung stark; sie belegt aber nicht,
   dass der Bau-Lauf so gefahren wurde — nur, dass sein Ergebnis heute
   reproduzierbar ist.

---

## 4. Welcher Prüfschritt hätte einen Fehler NICHT gefunden?

- **Der Volllauf über 284 Wiktionary-Abrufe** hätte einen falsch
  **eingeordneten** Treffer nicht gefunden, wenn ich nicht zusätzlich
  die vier Einträge im Quelltext gelesen hätte. Statuscodes messen
  Existenz, nie Bedeutung. Ebenso hätte er einen Kandidaten nicht
  gerettet, dessen negative Bedeutung **kein Wiktionary-Lemma** ist
  (Slang, Regionalismus, Produktname, Redewendung) — das ist die
  Bauart-Grenze des ganzen K6-Laufs, nicht meines Nachlaufs.
- **Die Summen- und Verteilungsproben** (59/59 Zeilensummen, W1-Regel,
  W2-Verteilung, Stamm-Verteilung) hätten eine falsche **Einstufung**
  nie gefunden — sie prüfen Arithmetik. Befund 13 (N-103 fehlt in
  K5-F) ist genau der Fall: Die Summenprobe des Dokuments bleibt auch
  mit dem Fehler grün. Gefunden habe ich ihn nur durch den Abgleich
  **zweier verschiedener Spalten desselben Kandidaten**.
- **Die Kontaminationssuche** hätte eine Kontamination nicht gefunden,
  die als **Umschreibung** statt als Name transportiert wird — „der
  Anbieter aus Stuttgart mit dem Vogel im Namen", eine charakteristische
  Wortbildung, ein Claim-Fragment. Meine Enumeration fängt Eigennamen,
  nicht Anspielungen. Ebenso wenig hätte sie eine Kontamination im
  **mündlichen/impliziten** Teil gefunden, wenn Prompt und Archiv
  auseinanderfallen (Befund 7).
- **Die Klartext-Prüfung (e)** ist meine eigene Einschätzung darüber,
  was ein Laie versteht — ich bin keiner. Ein Verständnisproblem, das
  nicht an einem Fachwort hängt, sondern an einer falschen Erwartung
  („Σ 19 heißt: fast perfekt"), habe ich nur deshalb gesehen, weil ich
  gezielt danach gesucht habe.
- **Am wenigsten hätte ich gefunden:** eine **erfundene
  Longlist-Zeile.** Hätte ein Name nie von einem Agenten gestammt,
  sondern von der Session selbst — Stil, Story, Schwäche und Silben
  sind vollständig plausibel, die Rückläufe sind nirgends archiviert,
  und meine Prüfung hat keinen einzigen Kanal, der das messen könnte.
  Dasselbe gilt für jede Umformulierung einer Agenten-Schwäche in die
  bequemere Richtung.

---

## 5. Die zwei nachprüfbaren Behauptungen

**Behauptung 1 — „Der K6-Wörterbuchlauf umfasst 284 Kandidaten-Abrufe
(71 Kandidaten × 4 Kanäle), davon 4 Treffer und 280 Nulltreffer."
→ RICHTIG.**

Vollständig nachgefahren (nicht stichprobenweise): 71 Kandidaten ×
{en-klein, en-groß, de-klein, de-groß} = **284 Abrufe**, davon
**4 × HTTP 200** und **280 × HTTP 404**, 0 Timeouts, 0 × 429. Die vier
Treffer stimmen kanalgenau mit § 4.2 überein (`hotelo`, `hotelon`,
`quartano` je EN-klein; `Nahost` DE-groß). Auch alle acht
Kanal-Positivkontrollen des Dokuments reproduzieren einzeln.

**Behauptung 2 — „Von den 71 Kandidaten der Longlist tragen genau 20
den Hotel-Stamm (Spalte ‚Stamm' = H)." → FALSCH. Es sind 17.**

Maschinelle Auszählung der Longlist § 3 (71/71 Zeilen erkannt):
**H 17 · G 19 · S 22 · A 13 = 71.** Die 17 H-Kandidaten sind N-59
Mithotel, N-60 Nahotel, N-61 Hallotel, N-62 Prohotel, N-63 Hotelia,
N-64 Hotelio, N-65 Perhotel, N-66 Duhotel, N-67 Hotellier, N-68
Sohotel, N-69 Wirhotel, N-70 Anhotel, N-71 Hotelly, N-72 Hotelo,
N-88 Hotellyx, N-89 Hotelika, N-90 Hotelon. Das Dokument selbst nennt
in § 3.1 ebenfalls **17** — die Behauptung widerspricht also nicht nur
der Tabelle, sondern auch dem Fließtext. (Kontrollrechnung in beide
Richtungen: 17 H minus die zwei an K1 gefallenen [N-62, N-67] = **15**
— exakt die Länge der K5-H-Liste in § 4.4.)

---

## 6. Die zwei Zusatzfragen

**„Hättest du diese Funde auch ohne den Kategorien-Hinweis gefunden —
oder hat dich die Fragenliste geführt?"**

Ehrliche Aufteilung, Fund für Fund:

- **Geführt hat mich die Fragenliste bei:** Befund 1 (Frage c
  „Was ist gar nicht angekommen?" zwang mich, die Kalibrierung Zeile
  für Zeile gegen das Dokument zu halten — ohne diese Frage hätte ich
  die Signal-Spalte gesehen und für erledigt gehalten, weil sie ja
  *da* ist), Befund 8 und Befund 9 (dieselbe Frage, angewandt auf den
  Katalog — insbesondere § 5/E-K4 und § 1, die ich ohne die
  ausdrückliche Auflage „nicht nur §§ 2/3" nicht gelesen hätte), und
  die Schwellen-Analyse in (d) (Frage „könnte sie gar nicht anders
  ausfallen?" ist die ganze Rechnung).
- **Ohne Hinweis gefunden hätte ich:** Befund 2 und Befund 10 und
  Befund 11 — die tabellarischen Widersprüche fallen beim
  mechanischen Nachrechnen von selbst an, sobald man die Vergabelinien
  überhaupt gegen die Spalten hält; Befund 13 (Spaltenabgleich);
  Befund 7 und Befund 17 (beide fallen an, sobald man den Prüfstand
  mit `git ls-tree`/`git log` ansieht — das tut man ohnehin, um zu
  wissen, was man liest); Befund 6 (ich habe die Positivkontrollen
  nachgefahren, weil der Auftrag die Wiktionary-Reproduktion verlangte
  — die Slang-Zeile war im selben Lauf).
- **Die Behauptungs-Kalibrierung hat funktioniert, aber anders als
  gedacht:** Sie hat mich gezwungen, beide Zahlen selbst zu erzeugen
  statt sie im Dokument nachzuschlagen. Das Skript, das H = 17 zählte,
  ist dasselbe, das die Achsen-, ID- und Stammverteilung geprüft hat;
  der Volllauf, der die 284 bestätigte, hat die vier Treffer
  gleich mitgeliefert. Beide Behauptungen haben also mehr Prüfwert
  erzeugt als ihre eigene Beantwortung.
- **Der Kategorien-Hinweis hat mich auch in eine Richtung *nicht*
  geführt:** Frage (b) legt den Schwerpunkt auf „wer wurde nur an
  einer Linie aussortiert". Die Ausgeschiedenen waren alle sauber. Der
  Ertrag lag in der Gegenrichtung — wer ist trotz derselben Linie
  **drin**. Diesen Dreh musste ich selbst nehmen; die Frage ist so
  formuliert, dass man sie mit einem „12 von 12 korrekt" hätte
  beantworten können.

**„Welche Verfälschung hätte dein Prüfverfahren NICHT gefangen?"**

Die teuerste zuerst: **eine erfundene oder still geschönte
Longlist-Zeile.** Wäre ein Kandidat gar nicht von einem Agenten
gekommen, oder wäre seine Schwächen-Angabe entschärft worden („Diktat
mittel" statt „hoch", „Wortwitz-Nähe" gestrichen), hätte ich es mit
**keinem** meiner Prüfschritte gemerkt: Die Rückläufe sind nirgends
archiviert, alle meine mechanischen Proben (Summen, Verteilungen,
Zählwege, IDs) laufen **innerhalb** des Dokuments und wären auch mit
der Fälschung grün, und die Sprachprüfung hätte einen plausiblen Namen
nicht als Fremdkörper erkannt.

Weiter, in absteigender Reichweite:

- **Eine falsche Vergabe in W3/W5/W6** über viele Kandidaten hinweg —
  Urteilsspalten ohne prüfbares Soll; ich habe nur die zwei begründeten
  Nullen und die Vergabelinien auf innere Widersprüche geprüft.
- **Eine falsche „Signal"- oder „Facette"-Einstufung** einzelner
  Kandidaten. Ich habe die Spalte **gezählt** (das trägt Befund 1),
  aber nicht je Kandidat bewertet. Hätte jemand vier „ja" in „schwach"
  gedreht, wäre Befund 1 sogar noch stärker geworden — in der
  Gegenrichtung hätte ich es nicht bemerkt.
- **Eine Verfälschung im nicht gelesenen Teil des Wettbewerbsbilds** —
  etwa ein namentlich geführtes Zeichen mit Stay- oder Herberge-Stamm
  in einem Fließtextabsatz, den meine Stamm-Greps zwar treffen, deren
  Kontext ich aber nur bei Herberg/Bleibe/Nacht einzeln angesehen habe
  (bei „Zimmer", 56 Treffer, habe ich es **nicht** getan, weil der
  einzige Zimmer-Kandidat ohnehin K5-ausgeschieden ist — eine bewusste
  Lücke).
- **Eine Verfälschung im Tagesplan-Teil, den ich nicht gelesen habe**
  (Z. 1–105, 356–555) — insbesondere ein Auftragsbestandteil dort, den
  das Dokument nicht erfüllt.
- **Ein Zeitstempel-Betrug** — Commit-Zeiten sind setzbar; ich habe sie
  gelesen, nicht verifiziert.

---

## 7. Befundzählung mit Nenner

**2 kritisch / 13 wichtig / 6 Hinweise — Nenner 21 Befunde.**

| Schwere | Anzahl | IDs |
|---|---|---|
| **kritisch** | **2 von 21** | 1 (Kalibrierung nicht in der Auswahlregel), 2 (W2 gegen die eigenen Linien — shortlist-wirksam) |
| **wichtig** | **13 von 21** | 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 |
| **Hinweis** | **6 von 21** | 16, 17, 18, 19, 20, 21 |

**Shortlist-wirksam** (ändern die zehn Namen, die dem User vorgelegt
werden): Befund 1 und Befund 2 — zusammen betreffen sie mindestens
N-78 Hihost und N-98 Quartano (fallen bei konsequenter W2-Vergabe unter
die Hürde) und die vier Signal-„ja"-Kandidaten N-63/N-64/N-66/N-100,
die einen Punkt darunter liegen.
**Nicht shortlist-wirksam, aber verfahrenswirksam:** 3, 4, 5, 8, 9, 10,
11, 13, 14 (Konsistenz und Auftragsdeckung — sie tragen, sobald jemand
nachrückt oder die Welle 3 auf diesen Linien aufsetzt).
**Vorlagen-wirksam** (der User liest es): 12, 15, 16, 20, 21.
**Beleg-wirksam** (ein Beleg fehlt oder trägt nicht): 6, 7, 18, 19.

**Was ausdrücklich in Ordnung ist** — damit die Zahl nicht als
Gesamturteil gelesen wird: der Wörterbuchlauf (284/284 reproduziert,
Treffer inhaltlich korrekt, Kontrollen mit verschiedenen Sollwerten je
Kanal und zweimal gefahren), der Kontaminationsschutz am Archivtext
(zwei komplementäre Suchwege, 0 Treffer, Positiv- und Negativkontrolle),
sämtliche Zählwege und Summenproben des Dokuments (Longlist 74/3/71,
IDs lückenlos, Ausscheidungen 5+6+1=12, 71−12=59, Summenverteilung,
K5-Klassen bis auf N-103), die W1-Ableitung (59/59), die
Shortlist-Anwendung (10/10 nachrechenbar), die W9-Fundstellen
(12 von 12 Zeichen belegt, Negativseite im Kontext geprüft) und die
freiwillige, ausgewiesene Auftragsüberschreitung bei W9 gegen Teil B
des Wettbewerbsbilds.

*Erstellt: 18.08.2026, unabhängiger Prüfer R19-A. Prüfstand
`dc0a4525…`. Diese Datei ist die einzige Schreibhandlung des Prüfers;
Disposition aller Befunde obliegt der Bau-Session (Nenner-Pflicht) und
dem Review der Leitsession.*
