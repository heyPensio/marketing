# FUND2 · Strang 2 — Dritter Kanal: regionalstatistik.de (Prüf- und Erhebungsbericht)

> **Session:** R03-B (Yasopp) · **Erhebungsdatum:** 09.08.2026 ·
> **Auftrag:** GENESIS-Regionaldatenbank der Länder (regionalstatistik.de)
> als dritten Kanal für **Beherbergungs-Größenklassen auf Länderebene**
> prüfen und ggf. erheben, Ziel Schleswig-Holstein. Prämisse unter Test:
> Negativbefund **N1** aus `strang2-strukturdaten.md` § 4 („Größenklassen ×
> SH amtlich nicht in den Kanälen Q1–Q8").
>
> **Ergebnis in einem Satz:** Die Prämisse hält — **die Regionaldatenbank
> führt für die Beherbergungsstatistik überhaupt kein Größenklassen-Merkmal**
> (zweikanalig belegt, § 3). Der Kanal liefert dafür etwas anderes, das
> keiner der Kanäle Q1–Q8 hat: **Betriebe und Schlafgelegenheiten für
> Schleswig-Holstein auf Kreisebene und als Zeitreihe 2018–2024** — daraus
> die **mittlere Betriebsgröße** als regionaler Struktur-Proxy (§ 4).
>
> **⚠️ Zwei Vorbehalte, die für JEDE Zahl dieses Berichts gelten:**
> 1. Es gilt die **PROXY-Warnung** des Hauptberichts unverändert: Alter und
>    Rolle des ENTSCHEIDERS weist keine dieser Zahlen aus.
> 2. **Ein Mittelwert ist keine Verteilung.** „Ø 63,9 Schlafgelegenheiten
>    je Betrieb" sagt NICHTS darüber, wie viele Betriebe unter 20 Zimmern
>    liegen — die Kernsegment-Quote (53,0 % bundesweit, Hauptbericht § 1.2)
>    lässt sich daraus **nicht** ableiten (§ 4.4).

---

## 1. Ergebnis in Kürze

| Frage | Ergebnis |
|---|---|
| Gibt es Größenklassen (Zimmer/Betten) × Bundesland in der RDB? | **NEIN** — Merkmal existiert in der Statistik 45412 nicht (N6, N7; zwei Lesekanäle) |
| Gibt es sie auf tieferer Ebene (Kreis, Gemeinde)? | **NEIN** — dieselbe Merkmalsliste gilt für alle Regionalebenen (N6) |
| Ist der Kanal trotzdem verwertbar? | **JA** — Kreisebene + Zeitreihe für SH, § 4 |
| Ist damit N1 des Hauptberichts widerlegt? | **Nein, bestätigt** — der dritte Kanal schließt die Lücke nicht |

**Was daraus für FUND2 folgt:** Die SH-Größenklassen-Schneidung bleibt nur
über eine **Sonderauswertung des Statistikamts Nord** oder die
Verbands-/IHK-Anfragen erreichbar (Hauptbericht § 7 Punkte 1/2). Der
Auskunftsweg zum Statistikamt Nord ist damit nicht mehr „eine von drei
Optionen", sondern der **einzige verbliebene amtliche Weg**.

## 2. Prüfweg und Zugangswege

Geprüft wurden **zwei Zugangswege getrennt** (Regel: der Zugangsweg gilt
je HANDLUNG, nicht je System):

| Weg | Handlung | Ergebnis |
|---|---|---|
| **GENESIS-Webservice (REST/JSON)** | `helloworld/whoami`, `helloworld/logincheck` | ✅ erreichbar; Gastkennung `GAST` wird akzeptiert |
| dito | `catalogue/tables` (Katalogabruf) | ❌ **HTTP 401**, Fehlercode 15 („Sie sind nicht berechtigt diesen Service aufzurufen") — auch mit Header-Credentials. Der API-Kanal braucht ein **registriertes Konto**; die Registrierung ist kostenlos, wurde in dieser Session aber **nicht** angelegt (Zielort-Vermerk § 8). |
| **Web-Oberfläche (GENESIS-Online V5.0.4)** | Themen-/Statistik-/Merkmalsseiten, Volltextsuche, Werteabruf, CSV-Download | ✅ **vollständig anonym nutzbar**, per `curl` mit Session-Cookie — **kein Browser nötig** (die Seite ist keine SPA, sondern ein klassisches Formular-/POST-Frontend) |

**Werkzeug-Befund (gegen die eigene Erwartung):** Der Auftrag hatte die
Chrome-Automation als exklusives System zugeteilt, weil Behördenseiten oft
SPAs sind. Das trifft hier **nicht** zu — die Chrome-Automation wurde in
dieser Session **nicht benutzt**; der gesamte Abruf lief über `curl` +
Node-Parsing. Die Abrufkette steht reproduzierbar in § 7.

**Kein Timeout, kein Ausfall.** Eine einzelne Fehlseite („Wegen einer
technischen Störung ist unser Angebot vorübergehend nicht erreichbar")
trat bei einer **falsch geratenen URL-Form** auf, während parallele
Abrufe derselben Domain sauber antworteten — das war ein Werkzeugfehler
auf meiner Seite, **kein Systemausfall**; die korrekte Formularroute
lieferte die Seite anschließend.

## 3. Negativ-Protokoll (alle Läufe 09.08.2026)

| # | Negativ-Ergebnis | Methode + Suchraum | Positivkontrolle im selben Lauf |
|---|---|---|---|
| **N6 (R3-B)** | **Die Statistik 45412 der Regionaldatenbank hat kein Größenklassen-Merkmal.** Ihre vollständige Merkmalsliste enthält genau **drei sachliche Merkmale**: `BTART9` Betriebsart, `HERKG1` Herkunft der Gäste, `UOGRENZE` Unter- und Obergrenze. Größenklassen nach Zimmern oder Betten kommen darin nicht vor — und weil die Merkmalsliste für die Statistik gilt, gilt das Negativ für **alle** Regionalebenen (Deutschland, Länder, Regierungsbezirke, Kreise, Gemeinden, 10-km-Raster) gleichermaßen. `UOGRENZE` wurde **einzeln geöffnet** und ist keine Größenklasse: Ausprägungen sind `OBERGRENZE`/`UNTERGRENZE` (Streuungsband des Rasterdaten-Indikators). | Merkmalskatalog der Statistik 45412 vollständig gelesen (`operation=statistic&code=45412&option=variable`, 40 Merkmale); zusätzlich Tabellenverzeichnis derselben Statistik (15 Tabellen) gelesen — Titel führen ausschließlich Betriebsarten und Herkunft. | Im selben Katalog treffen `BTART9` (Betriebsart) und `GAST05` (Angebotene Schlafgelegenheiten) — die Merkmale, die es geben MUSS. Im Tabellenverzeichnis trifft `45412-02-02-4-B`, die anschließend erfolgreich abgerufene Tabelle. |
| **N7 (R3-B)** | **Zweiter, unabhängiger Lesekanal: Der Suchbegriff „Gästezimmer" existiert in der gesamten Regionaldatenbank nicht.** Wörtliche Antwort der Datenbank: „Folgende Begriffe sind in der Regionaldatenbank Deutschland nicht vorhanden: Gästezimmer". Der Begriff „Größenklassen" trifft zwar (19 Tabellen / 4 Statistiken / 7 Merkmale), aber **ausschließlich in fremden Bereichen**: Landwirtschaft (41120, 41141), Unternehmensdemografie (52111), Lohn-/Einkommensteuer (73111) — **keine einzige Beherbergungs-Tabelle**. | Volltextsuche der RDB (`operation=find`) über Tabellen, Statistiken und Merkmale mit den Begriffen `Gästezimmer`, `Größenklassen`, `Betriebsgröße`, `Hotellerie`, `Schlafgelegenheiten`, `Betriebsarten`, `Zimmer`. Suchraum ist die **gesamte** Datenbank, nicht nur Statistik 45412. | `Zimmer` trifft 146 Tabellen (Wohnungsstatistiken) — die Suchmechanik greift also auch bei Teilwörtern; `Schlafgelegenheiten` trifft 5 Tabellen / 1 Statistik / 1 Merkmal, `Betriebsarten` 5/2/2. Nulltreffer bei `Gästezimmer`, `Betriebsgröße`, `Hotellerie` sind damit echte Nulltreffer, keine Suchfehler. |
| **N8 (R3-B)** | **Es gibt in der RDB keine zweite Tourismus-Statistik, in der die Schneidung stecken könnte.** Neben 45412 existiert im Bereich 454xx keine weitere Statistik. | Direktabruf der Statistik-Codes 45411, 45413, 45414, 45415, 45416, 45511 und `45412K` — jeweils Antwort „Es gibt keine Objekte zum angegebenen Selektionskriterium". | Im selben Lauf liefert **45412** „Monatserhebung im Tourismus" — die Prüfmechanik trifft also. |

**Belegstufe:** N6 und N7 messen **verschiedene Kanäle** (Merkmalskatalog
der Statistik vs. Volltextindex der Gesamtdatenbank) und stimmen überein.
Das Negativ ist damit **bestätigt**, nicht „nicht bestätigt".

**Grenze des Negativs (was NICHT geprüft wurde):** Alle drei Läufe messen
den **frei zugänglichen** Bestand der Regionaldatenbank. Ob die
Statistischen Ämter die Schneidung als **kostenpflichtige
Sonderauswertung** liefern können, ist damit ausdrücklich **nicht**
beantwortet — dazu sagt eine Datenbank-Abwesenheit nichts.

## 4. Was der Kanal stattdessen liefert (Ersatz-Schneidung)

Quelle **Q9**: Regionaldatenbank Deutschland, Tabelle **45412-02-02-4-B**
„Beherbergungsbetriebe, Schlafgelegenheiten, Gästeankünfte,
Gästeübernachtungen nach Betriebsarten — Jahressumme — regionale Ebenen
(ab 2018)", abgerufen 09.08.2026.

**Zeilen-Scope (an der Merkmals-Erläuterung der Datenbank selbst
belegt, nicht abgeleitet):**

- `GAST04` **Geöffnete Beherbergungsbetriebe** — wörtlich: „Ausgewiesen
  werden die **im Juli** geöffneten Beherbergungsbetriebe."
- `GAST05` **Angebotene Schlafgelegenheiten** — wörtlich: „Als
  Schlafgelegenheiten wird die Anzahl der angebotenen Gästebetten in den
  geöffneten Beherbergungsbetrieben ausgewiesen. Es zählen Doppelbetten
  als zwei Schlafgelegenheiten, ein Campingstellplatz wird wie vier
  Schlafgelegenheiten gerechnet. […] Das Angebot an Schlafgelegenheiten
  bezieht sich, sofern nicht anders angegeben, auf die
  Beherbergungsmöglichkeiten nach dem **Stand von Ende Juli**."

**Damit sind diese Werte mit Q1 und Q3 des Hauptberichts vergleichbar** —
beide dort sind ebenfalls Juli-Stände derselben amtlichen Erhebung
(Erfassungsgrenze ≥ 10 Schlafgelegenheiten). Trotz des Tabellentitels
„Jahressumme" sind Betriebe und Schlafgelegenheiten **Stichtagswerte**,
keine Jahressummen; „Jahressumme" bezieht sich auf Ankünfte und
Übernachtungen.

**Scope-Abgrenzung Camping:** Die Betriebsart-Gliederung dieser Tabelle
kennt nur drei Ausprägungen (Hotellerie · Erholungs-/Ferienheime u. ä. ·
Vorsorge-/Reha-Einrichtungen). Die Zeile „Insgesamt" ist deren Summe und
enthält **keine Campingplätze** — sie ist deshalb NICHT mit der Zeile
„Beherbergungsstätten insgesamt (inkl. Camping)" des Hauptberichts § 1.3
(3.452 Betriebe) verrechenbar.

**Aktualität:** Neuester Jahrgang der RDB ist **2024**; der SH-Jahresbericht
Q3 des Hauptberichts hat bereits **2025**. Die RDB liegt für Jahresdaten
also **ein Jahr zurück** — sie ist der ältere, aber der tiefer gegliederte
Kanal.

### 4.1 Schleswig-Holstein — Hotellerie, Zeitreihe 2018–2024

Zeilen-Scope: im Juli geöffnete Betriebe der Betriebsart „Hotels, Hotels
garnis, Gasthöfe, Pensionen" (`BTART901`), Land Schleswig-Holstein
(`DLAND`-Code `01`); Schlafgelegenheiten Stand Ende Juli.

| Jahr | Betriebe | Schlafgelegenheiten | Ø Schlafgelegenheiten je Betrieb |
|---|---:|---:|---:|
| 2018 | 1.139 | 62.881 | 55,2 |
| 2019 | 1.126 | 64.094 | 56,9 |
| 2020 | 1.115 | 64.987 | 58,3 |
| 2021 | 1.096 | 65.956 | 60,2 |
| 2022 | 1.082 | 66.599 | 61,6 |
| 2023 | 1.065 | 66.132 | 62,1 |
| 2024 | 1.038 | 66.378 | 63,9 |

Zählweg: Betriebe und Schlafgelegenheiten unverändert aus der
Flat-File-CSV der Tabelle 45412-02-02-4-B übernommen; die Ø-Spalte ist
eigene Berechnung `GAST05 ÷ GAST04` derselben Zeile, auf eine
Nachkommastelle gerundet.

Abgeleitete Veränderungen 2018 → 2024 (eigene Berechnung, Zählweg
jeweils Endwert ÷ Anfangswert − 1):

- **Betriebe −8,9 %** (1.139 → 1.038, −101 Betriebe)
- **Schlafgelegenheiten +5,6 %** (62.881 → 66.378)
- **mittlere Betriebsgröße +15,8 %** (55,2 → 63,9 Schlafgelegenheiten)

**Der Rückgang ist monoton** — in jedem der sechs Jahresschritte sinkt die
Betriebszahl, ohne eine einzige Gegenbewegung, auch nicht in den
Corona-Jahren.

### 4.2 Schleswig-Holstein — alle drei Betriebsarten zusammen (ohne Camping)

| Jahr | Betriebe | Schlafgelegenheiten | Ø je Betrieb |
|---|---:|---:|---:|
| 2018 | 3.755 | 222.783 | 59,3 |
| 2024 | 3.241 | 246.383 | 76,0 |

Veränderung 2018 → 2024: **Betriebe −13,7 %**, **Schlafgelegenheiten
+10,6 %**, **mittlere Betriebsgröße +28,1 %**.

**Einordnung gegen den Hauptbericht § 1.4:** Dort steht dieselbe
Konsolidierungs-Richtung, aber gerechnet über **Beherbergungsstätten UND
Campingplätze** (2012 → 2025: Betriebe −19,3 %, Schlafgelegenheiten
+31,5 %). Der Zusatzwert hier ist die **Trennung**: Der Kapazitätszuwachs
ist auch **ohne** Camping vorhanden (+10,6 %), fällt ohne Camping aber
deutlich kleiner aus — die Zahl aus § 1.4 ist also stark
camping-getrieben, und die Hotellerie allein wächst mit **+5,6 %**
Kapazität am schwächsten von allen Betriebsarten.

### 4.3 Bundesvergleich Hotellerie

| Ebene | Jahr | Betriebe | Schlafgelegenheiten | Ø je Betrieb |
|---|---|---:|---:|---:|
| Deutschland (Summe der 16 Länder) | 2018 | 31.750 | 1.846.955 | 58,2 |
| Deutschland (Summe der 16 Länder) | 2024 | 28.286 | 1.941.889 | 68,7 |
| Schleswig-Holstein | 2024 | 1.038 | 66.378 | 63,9 |

Zählweg Deutschland: eigene Summe über die 16 Länderzeilen derselben
Tabelle (**nicht** die Deutschland-Zeile der Tabelle — Begründung in § 6).

**Befund:** Die SH-Hotellerie ist im Mittel **6,9 % kleiner** als der
Bundesschnitt (63,9 vs. 68,7 Schlafgelegenheiten je Betrieb), und sie
konsolidiert **langsamer**: Betriebszahl bundesweit −10,9 % gegenüber
−8,9 % in SH, mittlere Betriebsgröße bundesweit +18,0 % gegenüber
+15,8 % in SH (jeweils 2018 → 2024).

### 4.4 Schleswig-Holstein — Kreise und kreisfreie Städte, 2024

Quelle Q9, dieselbe Tabelle auf der Regionalebene „Kreise und kreisfreie
Städte" (`KREISE`). Zeilen-Scope wie § 4.1.

| Kreis / kreisfreie Stadt | Hotellerie: Betriebe | Schlafgel. | Ø | Alle 3 Betriebsarten: Betriebe | Schlafgel. | Ø |
|---|---:|---:|---:|---:|---:|---:|
| Flensburg, kreisfreie Stadt | 18 | 1.475 | 81,9 | 25 | 2.208 | 88,3 |
| Kiel, kreisfreie Stadt | 39 | 5.615 | 144,0 | 47 | 6.381 | 135,8 |
| Lübeck, kreisfreie Stadt, Hansestadt | 65 | 7.425 | 114,2 | 101 | 13.181 | 130,5 |
| Neumünster, kreisfreie Stadt | 9 | 693 | 77,0 | 13 | 1.065 | 81,9 |
| Dithmarschen | 71 | 3.808 | 53,6 | 256 | 13.816 | 54,0 |
| Herzogtum Lauenburg | 52 | 1.698 | 32,7 | 94 | 4.681 | 49,8 |
| Nordfriesland | 246 | 14.450 | 58,7 | 1.122 | 79.560 | 70,9 |
| Ostholstein | 170 | 12.060 | 70,9 | 742 | 71.489 | 96,3 |
| Pinneberg | 58 | 3.467 | 59,8 | 91 | 4.973 | 54,6 |
| Plön | 43 | 2.243 | 52,2 | 179 | 11.763 | 65,7 |
| Rendsburg-Eckernförde | 80 | 3.826 | 47,8 | 184 | 12.260 | 66,6 |
| Schleswig-Flensburg | 76 | 3.826 | 50,3 | 239 | 16.622 | 69,5 |
| Segeberg | 45 | 2.849 | 63,3 | 63 | 4.645 | 73,7 |
| Steinburg | 27 | 1.051 | 38,9 | 39 | 1.393 | 35,7 |
| Stormarn | 39 | 1.892 | 48,5 | 46 | 2.346 | 51,0 |
| **Summe / Land SH** | **1.038** | **66.378** | **63,9** | **3.241** | **246.383** | **76,0** |

**Befund Streuung:** Die mittlere Hotellerie-Betriebsgröße reicht von
**32,7** (Herzogtum Lauenburg) bis **144,0** (Kiel) Schlafgelegenheiten je
Betrieb — **Faktor 4,4**. Nach mittlerer Betriebsgröße kleinteilig sind
die **binnenländischen** Kreise (Herzogtum Lauenburg 32,7 · Steinburg 38,9 ·
Rendsburg-Eckernförde 47,8 · Stormarn 48,5 · Schleswig-Flensburg 50,3 ·
Plön 52,2 · Dithmarschen 53,6); die vier kreisfreien Städte liegen
durchweg über dem Landesmittel. Die beiden **Küsten-Tourismuskreise**
Nordfriesland (246 Hotellerie-Betriebe) und Ostholstein (170) stellen
zusammen **40,1 %** aller SH-Hotelleriebetriebe (416 von 1.038; Zählweg:
Summe beider Kreiszeilen ÷ Landeszeile).

### 4.5 ⚠️ Was diese Zahlen NICHT sind

Diese Abgrenzung ist der wichtigste Absatz des Berichts:

1. **Ein Mittelwert ist keine Größenklassen-Verteilung.** Aus „Ø 63,9
   Schlafgelegenheiten je Betrieb" folgt **kein** Anteil kleiner Betriebe.
   Bundesweit liegt die mittlere Hotellerie-Größe bei 68,7
   Schlafgelegenheiten — und trotzdem haben **53,0 %** der Betriebe unter
   20 Gästezimmer (Hauptbericht § 1.2). Ein hoher Mittelwert und ein
   kleinteiliger Bestand schließen einander nicht aus; wenige große Häuser
   heben den Mittelwert. **Jede Ableitung „Ø 63,9 ⇒ Kernsegment in SH ist
   kleiner/größer als bundesweit" wäre falsch.**
2. **Schlafgelegenheiten ≠ Gästezimmer.** Die Kernsegment-Definition des
   Hauptberichts läuft über **Gästezimmer** (< 20). Eine Umrechnung
   Betten → Zimmer ist ohne Belegungsschlüssel nicht zulässig und wird
   hier **nicht** vorgenommen.
3. **Die Ø-Werte je Kreis sind Verhältniszahlen aus zwei Stichtagswerten
   derselben Zeile** — sie tragen keinen eigenen Beleg-Typ über den der
   Ausgangswerte hinaus (amtliche Statistik).

## 5. Summenproben und Verifikationsgrad

Alle Werte stammen aus selbst heruntergeladenen **Flat-File-CSV-Dateien**
der Regionaldatenbank (Kodierung ISO-8859-1, maschinell geparst);
**0 Zahlen** aus Zusammenfassungen, Suchmaschinen oder HTML-Ablesung.

| Probe | Prüfung | Ergebnis |
|---|---|---|
| **A** | SH-Landesebene 2024: Summe der 3 Betriebsarten = Zeile „Insgesamt", für alle 4 Wertmerkmale (Betriebe, Schlafgelegenheiten, Ankünfte, Übernachtungen) | **4/4 exakt** (z. B. 1.038 + 2.150 + 53 = 3.241) |
| **B** | Zeitreihe SH 2018–2024: dieselbe Probe je Jahr für Betriebe und Schlafgelegenheiten | **14/14 exakt** (7 Jahre × 2 Merkmale) |
| **C** | Kreise → Land: Summe der 15 SH-Kreise = SH-Landeszeile, für Hotellerie und Insgesamt, Betriebe und Schlafgelegenheiten | **4/4 exakt** (1.038 / 66.378 / 3.241 / 246.383) |
| **D** | Länder → Deutschland: Summe der 16 Länderzeilen = Deutschland-Zeile derselben Tabelle | **abweichend — siehe § 6** |

**Grundgesamtheit:** Die Proben A–C decken **alle** in diesem Bericht
verwendeten SH-Werte ab. Probe D betrifft ausschließlich die
Deutschland-Zeile, die hier deshalb **nicht** verwendet wird.

**Zweitkanal-Abgleich gegen den Hauptbericht** (verschiedene Jahre, daher
Plausibilitäts-, kein Identitätsvergleich): RDB 2024 weist für die
SH-Hotellerie **1.038** geöffnete Betriebe und **66.378**
Schlafgelegenheiten aus; Q3 (Statistikamt Nord, Jahresbericht 2025) weist
für Juli 2025 **1.013** Betriebe und **66.373** Schlafgelegenheiten aus,
Q1 (Destatis) **1.014** Betriebe. Der Betriebsrückgang um 25 Betriebe von
2024 auf 2025 fügt sich in den Trend von durchschnittlich −17 Betrieben je
Jahr seit 2018; die Schlafgelegenheiten bleiben nahezu unverändert. **Kein
Widerspruch zwischen den Kanälen.**

**Nicht verifiziert / nicht prüfbar:** Die Ursache der Abweichung in
Probe D (§ 6). Ob die freie RDB-Oberfläche denselben Revisionsstand
ausliefert wie der SH-Jahresbericht, ist nicht geprüft — die Jahrgänge
unterscheiden sich ohnehin.

## 6. ⚠️ Nebenbefund: Die Deutschland-Zeile dieser Tabelle geht nicht auf

Gemessen, nicht erklärt — und deshalb hier als eigener Punkt statt als
Fußnote:

| Wertmerkmal / Betriebsart | Summe der 16 Länder | Deutschland-Zeile | Differenz |
|---|---:|---:|---:|
| Betriebe / Insgesamt | 47.475 | 47.741 | **−266** |
| Betriebe / Hotellerie | 28.286 | 28.275 | **+11** |
| Schlafgelegenheiten / Insgesamt | 3.535.932 | 3.927.244 | **−391.312** |
| Schlafgelegenheiten / Hotellerie | 1.941.889 | 1.941.784 | **+105** |
| Betriebe / Erholungs- u. Ferienheime u. ä. | 18.381 | 18.654 | −273 |
| **Schlafgelegenheiten / Erholungs- u. Ferienheime u. ä.** | **1.444.949** | **1.835.581** | **−390.632** |

Beobachtungen:

- Die Abweichung sitzt **fast vollständig in einer einzigen Betriebsart**
  („Erholungs- u. Ferienheime usw."), und dort **fast nur bei den
  Schlafgelegenheiten**: 390.632 von 391.312 Schlafgelegenheiten
  Gesamtabweichung, bei nur 273 Betrieben Differenz. 273 zusätzliche
  Betriebe können keine 390.632 Betten tragen — die Differenz kann also
  **keine fehlenden Betriebe** sein.
- **Geheimhaltung erklärt sie nicht:** Für dieses Merkmal ist **kein
  einziger** Länderwert unterdrückt (Unterdrückungen gibt es nur bei
  Vorsorge-/Reha-Einrichtungen in Bremen und Berlin, und die erklären
  lediglich −4 Betriebe / −785 Schlafgelegenheiten).
- Die Deutschland-Zeile ist **in sich** konsistent (ihre drei
  Betriebsarten summieren sich exakt auf ihre Insgesamt-Zeile), und die
  Länderzeilen sind es ebenfalls. Die beiden Ebenen sind also je für sich
  stimmig, aber **nicht miteinander**.
- Bei der Hotellerie liegt die Länder-Summe sogar **über** der
  Deutschland-Zeile (+11 Betriebe / +105 Schlafgelegenheiten) — eine
  Richtung, die Geheimhaltung ebenfalls nicht erzeugen kann.

**Konsequenz für diesen Bericht:** Der Bundeswert in § 4.3 ist bewusst als
**Summe der 16 Länderzeilen** gerechnet, nicht aus der Deutschland-Zeile.
Für die Hotellerie liegen beide Wege ohnehin nur 0,04 % auseinander
(68,65 vs. 68,68 Schlafgelegenheiten je Betrieb, gerundet beide 68,7) —
die Wahl ändert die Aussage nicht, aber der Zählweg gehört an die Zahl.

**Offen:** Ursache unbekannt. Klärungsweg wäre eine Anfrage an die
RDB-Hotline; für die SH-Aussagen dieses Berichts ist sie **nicht**
erforderlich, weil die Proben A–C exakt aufgehen.

## 7. Quellenregister und Reproduktion

| # | Quelle | Herausgeber | Stand | Erhebungsmethode | Beleg-Typ | Abruf |
|---|---|---|---|---|---|---|
| **Q9** | Regionaldatenbank Deutschland (GENESIS-Online V5.0.4), Statistik 45412 „Monatserhebung im Tourismus", Tabelle **45412-02-02-4-B**; Regionalebenen Deutschland / Bundesländer / Kreise; Jahrgänge 2018–2024 | Statistische Ämter des Bundes und der Länder | letzter verfügbarer Jahrgang **2024**; Datenbankstand der Oberfläche 2026 | Amtliche Vollerhebung mit Auskunftspflicht (Landes-/Kreisauswertung derselben Erhebung wie Q1/Q3); Erfassungsgrenze ≥ 10 Schlafgelegenheiten | Amtliche Statistik | 09.08.2026, regionalstatistik.de, Flat-File-CSV-Download ohne Anmeldung |

**Reproduktionsweg** (anonym, ohne Konto, alles GET außer dem letzten
Schritt; Abschnitts-, keine Zeilenbezüge):

1. Tabelle öffnen: `…/genesis/online?operation=table&code=45412-02-02-4-B&bypass=true&levelindex=0&levelid=<beliebig>`
   — Session-Cookie mitführen; aus dem Formular `id="abypass"` die aktuellen
   Werte `levelindex`/`levelid` entnehmen (sie wechseln je Aufruf).
2. *(optional)* Zeitraum setzen: `operation=abruftabelleBearbeiten` mit
   `auspraegungen$$$6=Zeit auswählen`, dann POST auf `/genesis/online` mit
   `operation=abruftabelleAuspraegungAuswaehlen`, `ziauswahl=zeitspannen`,
   `ZI_VON=2018`, `ZI_BIS=2024`, `auspraegungenWaehlen=übernehmen`.
3. Regionalebene setzen: `operation=abruftabelleBearbeiten&…&nummer=7&variable=7&name=DLAND`
   (bzw. `DINSG`, `REGBEZ`, `KREISE`) — Erfolg daran erkennbar, dass die
   Seite die gewählte Ebene als `<option … selected>` zurückmeldet.
4. Werte holen: `operation=werteabruf&levelindex=<i>&levelid=<d>&code=45412-02-02-4-B&option=table`.
5. Download: **POST** auf die aus der Ergebnisseite gelesene Adresse
   `operation=ergebnistabelleDownload&…&option=ffcsv` (Flat-File-CSV,
   ISO-8859-1). `option=xlsx` liefert dieselbe Auswahl als Excel-Datei.

Die Roh-CSVs dieser Session liegen im Session-Scratchpad und sind
**nicht** ins Repo übernommen — der Weg oben stellt sie in wenigen Minuten
wieder her; jeder Wert dieses Berichts ist darüber nachprüfbar.

## 8. Übergaben und offene Punkte

1. **N1 des Hauptberichts bleibt bestehen** und ist jetzt breiter belegt:
   Der dritte Kanal existiert, führt die Schneidung aber nicht. →
   Hauptbericht `strang2-strukturdaten.md` § 4 (Nicht-geprüft-Block) und
   § 7 Punkt 4 sind mit einem Verweis-Absatz nachgezogen.
2. **Entscheidung fällt jetzt auf den Auskunftsweg Statistikamt Nord**
   (Hauptbericht § 7 Punkt 2, „noch ohne Entwurf"). Er ist nach diesem
   Bericht der **einzige verbliebene amtliche Weg** zur
   SH-Größenklassen-Schneidung — die Aufwand/Nutzen-Abwägung dazu gehört
   der Leitsession, nicht dieser Session.
3. **Zielort-Vermerk Persona-Befund:** Der monotone Betriebsrückgang der
   SH-Hotellerie (−8,9 % in sechs Jahren, ohne eine einzige
   Gegenbewegung) bei gleichzeitig **wachsender** Kapazität stützt den
   Befund-Rahmen „Kernsegment real, aber unter Konsolidierungsdruck"
   (Hauptbericht § 1.4) — jetzt erstmals **ohne Camping-Verzerrung** und
   **für die Hotellerie allein**. Gehört in `fund/persona-befund.md`,
   sobald alle Stränge vorliegen.
4. **Zielort-Vermerk MKT-AKQ (außerhalb des Auftrags):** Die Kreiszahlen
   in § 4.4 sind eine unmittelbar verwendbare **Gebietspriorisierung** für
   die Zielkundenliste — Nordfriesland und Ostholstein stellen zusammen
   40,1 % der SH-Hotelleriebetriebe. Zieldokument wäre die
   Zielkundenlisten-Arbeit in MKT-HANDEL/MKT-AKQ; **die existiert noch
   nicht** (die Kanal-Rechtsmatrix nach UWG § 7 geht ihr laut CLAUDE.md
   voraus). Deshalb hier geparkt statt übergeben.
5. **Offen gelassen (bewusst):** Kein RDB-Konto angelegt. Die kostenlose
   Registrierung würde den REST-Webservice öffnen (Katalog- und
   Datenabruf per JSON statt Formular-Scraping). Für diesen Auftrag nicht
   nötig, für wiederkehrende Regionalauswertungen wäre es der bessere Weg
   — Entscheid Leitsession.
6. **Offen (Datenqualität):** Ursache der Abweichung Länder ↔ Deutschland
   (§ 6). Anfrage an die RDB-Hotline nicht gestellt.

---

*Erstellt: 09.08.2026, Session R03-B (Yasopp). Kein Prüf-Subagent
beauftragt (Auftragsvorgabe) — harter Anker sind stattdessen die
Summenproben in § 5 und der reproduzierbare Abrufweg in § 7.*
