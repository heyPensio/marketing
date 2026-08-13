# Werbesperrdatei — Struktur, Feldschnitt und Betriebsregeln

> **Was das hier ist:** Das **Werkzeug** zu D2 Pflicht 2
> („Werbesperrdatei") und zu den Bau-Pflichten **B-3** und **B-4** aus
> `akquise/interessenabwaegung-o8.md` § 10. Es definiert den
> Feldschnitt, die Aufnahme-Anlässe, den Eintrags- und den
> Abgleich-Ablauf — und trennt den **engen Fall B-4** (Löschwunsch aus
> der Sperrdatei) vom regulären Löschverlangen.
>
> **Was es NICHT ist:** keine Rechtsprüfung und keine neue Regel. Alle
> materiellen Vorgaben stammen aus `akquise/listenbau-regelwerk.md`
> (§ 3 Pflicht 2, § 7.3, § 7.4) und aus
> `akquise/interessenabwaegung-o8.md` (§ 7.2, § 7.4, § 8, § 10).
> **Vorrangklausel: Bei Widerspruch gewinnt das Regelwerk** — und bei
> Widerspruch zwischen Regelwerk und `handel/kanal-rechtsmatrix.md`
> gewinnt die Rechtsmatrix (Regelwerk § 11). Ändert sich dort etwas,
> ist diese Datei nachzuziehen.
>
> **Erstellt:** Freitag, 14.08.2026 (R15-E / Limejuice), Stand des
> Regelwerks beim Bau: Commit `4b84693`.

---

## ⛔ GATE — diese Datei ist noch NICHT scharf zu stellen

**Die Struktur ist gebaut. Der Betrieb darf noch nicht anlaufen.**
Solange auch nur eines der folgenden Gates offen ist, wird **kein
Datensatz der Zielkundenliste angelegt** und **kein Brief versandt** —
und damit entsteht auch kein Sperrfall.

| Gate | Woran es hängt | Wirkung auf diese Datei |
|---|---|---|
| **F-7 · Firmierung** | Rebrand/Namensentscheid offen | Ohne Firmierung gibt es keine ladungsfähige Anschrift, keine Datenschutz-E-Mail-Adresse und damit **keinen Eingangsweg**, den ein Betrieb überhaupt benutzen könnte. Alle Wortlaut-Felder tragen bis dahin sprechende Platzhalter |
| **O-9 · Art. 6 Abs. 4 DSGVO** | anwaltlicher Rat, fällig **vor dem ersten Datensatz** (Regelwerk § 10) | Betrifft die Zulässigkeit des Listenbaus insgesamt, nicht diese Datei — aber ohne Liste kein Sperrbetrieb |
| **B-2 · elektronischer Widerspruchsweg + TOM** | E-Mail-Postfach für Datenschutzbelange samt Art.-24-Maßnahmen; hängt an F-7 und an MKT-OPS | Feld `SP-06` kann den Wert `E-Mail` erst führen, wenn der Weg existiert |
| **Antwortschreiben-Text (B-3)** | braucht Firmierung (F-7); Text ist **hier nicht** gebaut | `SP-11`/`SP-12` sind Nachweisfelder, nicht der Text |
| **O-6 · Werkzeugwahl** | CRM-/Werkzeugentscheid offen (MKT-OPS) | Diese Datei definiert die Struktur **werkzeugneutral**. Die Markdown-Tabelle in § 9 ist die tragfähige Erstform, bis ein Werkzeug steht |

> ⚠️ **Sprechende Platzhalter, keine Dummys.** Wo ein Wortlaut oder
> eine Angabe noch nicht feststeht, steht im Werkzeug sichtbar
> `<<FIRMIERUNG — F-7 OFFEN>>` bzw. `<<DATENSCHUTZ-E-MAIL — F-7/B-2
> OFFEN>>`. **Ein Platzhalter wird nie durch eine plausible Erfindung
> ersetzt**, sondern nur durch den entschiedenen Wert.

---

## 1. Betriebsform — die tragende Setzung

Wörtlich aus `akquise/listenbau-regelwerk.md` § 3 Pflicht 2
(dort als „Setzung dieser Session, kein Quellenzitat" gekennzeichnet):

> „Die Sperrdatei ist eine **eigene, von der Zielkundenliste getrennte**
> Datei, die auch dann bestehen bleibt, wenn ein Listeneintrag gelöscht
> wird. Sie enthält nur, was zum Sperren nötig ist (Firma, Anschrift,
> ggf. Kanal-Kennung, Datum und Weg des Widerspruchs) — sie ist keine
> Zweitliste."

Daraus folgen vier Betriebsmerkmale, die **jede** technische Umsetzung
tragen muss:

1. **Getrennt.** Eigener Bestand, eigene Lebensdauer. Ein Löschlauf auf
   der Zielkundenliste darf die Sperrdatei nicht berühren.
2. **Überlebend.** „Der Widerspruch darf nicht zur Vollöschung führen —
   sonst steht der Betrieb bei der nächsten Listenrunde wieder im
   Verteiler" (Regelwerk § 3 Pflicht 2, nach Rechtsmatrix C5).
3. **Fristfrei.** „Die **Sperrdatei** ist von allen Fristen
   ausgenommen" (Regelwerk § 7.4). Rechtsgrundlage der Aufbewahrung —
   bereits belegt, hier nur zitiert: „Der Eintrag in der
   **Werbesperrdatei** wird nicht gelöscht (Art. 21 Abs. 3 / Art. 17
   Abs. 3 lit. b)" (`interessenabwaegung-o8.md` § 8, VVT-Block lit. f).
4. **Minimal.** Sie ist keine Zweitliste. Jedes Feld, das nicht zum
   Sperren, zum Nachweis oder zur Betroffenenrechte-Kette gebraucht
   wird, gehört nicht hinein — die Datenminimierung des Feldregisters
   (§ 6 des Regelwerks) gilt hier genauso.

### Verhältnis zur Zielkundenliste

Die Zielkundenliste trägt dafür das Feld **F-13 · Sperrvermerk
(Verweis auf die Sperrdatei)** (Regelwerk § 6, Feldregister). Die
Richtung ist einseitig: **Die Sperrdatei ist der führende Bestand**,
`F-13` ist nur der Zeiger. Ist ein Listeneintrag gelöscht und der
Sperrfall besteht fort, bleibt allein der Sperrdatei-Eintrag maßgeblich
— genau dafür existiert er.

---

## 2. Der Feldschnitt

**Lesart der Spalte „Pflicht":** ✅ = Pflichtfeld, ein Eintrag ohne
diese Angabe ist unvollständig und **sperrt trotzdem** (im Zweifel gilt
die Sperre, nie die Vollständigkeit) · 🔶 = nur unter der genannten
Bedingung, sonst **leer lassen** · ⛔ = wird bewusst **nicht** geführt.

> ⚠️ **Die wichtigste Ausfüll-Regel dieser Datei:** Ein unvollständiger
> Eintrag ist ein **gültiger** Eintrag. Die Sperre wirkt ab `SP-08`
> (Eintragsdatum), nicht ab Vollständigkeit. Wer auf eine fehlende
> Angabe wartet, bevor er einträgt, verletzt die
> Unverzüglichkeitspflicht (§ 4).

| # | Feld | Pflicht | Wertebereich / Form | Warum es geführt wird |
|---|---|---|---|---|
| **SP-01** | Sperr-ID | ✅ | fortlaufend, `SPD-<jjjj>-<nnn>` | Referenz für `F-13` der Zielkundenliste und für das Abgleich-Journal |
| **SP-02** | Betriebsname / Firma | ✅ | Freitext, Schreibweise wie im Widerspruch bzw. im Impressum | Erster Abgleichschlüssel |
| **SP-03** | Postanschrift | ✅ | Straße, PLZ, Ort | **Der tragende Abgleichschlüssel im Briefkanal** — der Kanal K1 besteht aus diesem Feld (Regelwerk § 6, F-03). Ohne Anschrift ist eine Aussteuerung im Druckauftrag nicht sicher möglich |
| **SP-04** | Personenname | 🔶 | nur, wenn der Widerspruch von einer **benannten Person** stammt **und** die Zuordnung ohne den Namen nicht sicher möglich ist | Datenminimierung: Der Name macht aus einem ggf. DSGVO-freien Datensatz einen DSGVO-pflichtigen (Regelwerk § 6, F-07). Er wird nur aufgenommen, wenn er für die Sperrwirkung gebraucht wird |
| **SP-05** | Aufnahme-Anlass | ✅ | genau einer aus `ANL-1` … `ANL-4` (§ 3) | Bestimmt die **Rechtsfolgen** des Eintrags — insbesondere, ob ein Antwortschreiben nach B-3 fällig ist |
| **SP-06** | Eingangsweg | ✅ | einer aus: `Brief` · `E-Mail` · `Telefon` · `Anwaltsschreiben` · `Dritte` · `Impressumsvermerk` · `sonstiger` (dann `SP-15` ausfüllen) | B-2/R-B7: Der Widerspruch bindet unabhängig vom Eingangsweg. Das Feld belegt, dass **formlose** Eingänge tatsächlich erfasst werden |
| **SP-07** | Eingangsdatum | ✅ | Datum (bei Telefon zusätzlich Uhrzeit) | Startpunkt der Unverzüglichkeits-Messung |
| **SP-08** | Eintragsdatum in die Sperrdatei | ✅ | Datum (Uhrzeit empfohlen) | **Ab hier wirkt die Sperre.** Die Differenz `SP-08 − SP-07` ist der einzige Nachweis für „unverzüglich" (§ 4) |
| **SP-09** | Reichweite der Sperre | ✅ | Standardwert `alle Kanäle`; ein abweichender Wert ist nur mit ausdrücklicher Erklärung des Betriebs zulässig und braucht `SP-15` | „Ein erklärter Widerspruch bindet uns **kanalübergreifend**" (Regelwerk § 3 Pflicht 2, nach A7). Das Feld existiert, damit die Kanalübergreifendheit **sichtbar** ist, nicht damit sie verhandelbar wird |
| **SP-10** | Beleg-Referenz | ✅ | Ablageort des Originals (Mail-ID, Scan-Dateiname, Telefonnotiz-ID) — **nicht** der Volltext | Nachweispflicht (Art. 5 Abs. 2). Der Volltext gehört in die Belegablage, nicht in die Sperrdatei (Minimalitätsgebot, § 1 Nr. 4) |
| **SP-11** | Antwortschreiben versandt am | 🔶 | Datum; Pflicht bei `ANL-1` und `ANL-2`, bei `ANL-3`/`ANL-4` **leer** (s. § 3) | B-3 / R-B10: „Individuelles Antwortschreiben auf jeden Widerspruch" |
| **SP-12** | Genannter Rest-Zeitraum | 🔶 | konkrete Angabe, z. B. `bis 05.09.2026`; Pflicht immer dann, wenn `SP-11` gefüllt ist | B-3 verlangt die Nennung eines „möglichst genau zu benennenden kurzen Zeitraum[s]", in dem noch Werbung ankommen kann. Ein Feld ohne Wert ist hier eine offene Rechtspflicht |
| **SP-13** | Unterrichtung über die Sperrlisten-Aufnahme | 🔶 | `ja` / `nein`; Pflicht, wenn `SP-11` gefüllt ist | Zweiter, eigenständiger Teil von B-3 (DSK Ziff. 5.1) — er fällt beim Verdichten regelmäßig weg und bekommt deshalb ein eigenes Feld |
| **SP-14** | B-4-Vorgang | 🔶 | Unterblock nach § 6; nur bei einem Löschverlangen **aus der Sperrdatei** | Der enge Fall B-4 — er hat einen eigenen Ablauf und darf nicht als regulärer Art.-17-Fall behandelt werden |
| **SP-15** | Bemerkung / Klärung | 🔶 | Freitext | Trägt die Begründung abweichender Werte in `SP-06`/`SP-09` und offene Klärungen nach § 6 |
| — | Grund des Widerspruchs | ⛔ | — | **Wird nicht erhoben und nicht gespeichert.** R-B8: „Kein Ermessen, keine Abwägung, keine Begründungsmöglichkeit" — ein Feld für einen Grund suggeriert, der Grund sei erheblich. Er ist es nicht |
| — | Reaktivierungs-Datum, Wiedervorlage, Status `abgelaufen` | ⛔ | — | Die Sperrdatei ist von allen Fristen ausgenommen (Regelwerk § 7.4). Ein Ablauf-Feld wäre die technische Einladung zum Verstoß |
| — | Anreicherungsdaten jeder Art (Zimmerzahl, Umsatz, Systeme, Scores) | ⛔ | — | Regelwerk § 6, F-15 bis F-18 — hier genauso wie in der Zielkundenliste |

---

## 3. Die Aufnahme-Anlässe

Genau ein Wert je Eintrag (`SP-05`). Die Anlässe unterscheiden sich in
den **Rechtsfolgen** — das ist der Grund, warum das Feld existiert.

| Anlass | Was vorliegt | Antwortschreiben (B-3)? | Grundlage |
|---|---|---|---|
| **ANL-1** | **Werbewiderspruch nach Art. 21 Abs. 2**, uns gegenüber erklärt — über **jeden** Kanal, auch formlos, auch telefonisch, auch über einen Anwalt | ✅ **Ja, Pflicht** — mit Rest-Zeitraum (`SP-12`) und Unterrichtung (`SP-13`) | R-B7/R-B8; B-3 / R-B10 |
| **ANL-2** | **Sonstige uns gegenüber erklärte Ablehnung weiterer Werbung**, die nicht ausdrücklich als Widerspruch bezeichnet ist („bitte nicht mehr anschreiben") | ✅ **Ja** — wird wie `ANL-1` behandelt | R-B7 („unabhängig vom Eingangsweg"), R-B8 (kein Ermessen). Die Bezeichnung durch den Betrieb ist unerheblich |
| **ANL-3** | **Werbewiderspruch im Impressum** des Betriebs (B-1) — kein an uns gerichteter Vorgang | ⛔ **Nein** — es gibt keinen Erklärenden, dem geantwortet werden könnte, und keine an uns gerichtete Erklärung | Regelwerk § 7.1-Nachtrag (B-1) und § 9 rote Linie 13. ⚠️ **Einstufung ist eine Setzung dieser Datei**, s. Kasten unten |
| **ANL-4** | **Rückläufer mit Sperrwirkung** — z. B. ein Brief kommt mit ausdrücklichem Vermerk „keine Werbung" zurück | ✅ **Nur, wenn ein Absender erreichbar ist**; sonst `SP-11` leer und Grund in `SP-15` | R-B7 (formloser Eingang). Ein nicht beantwortbarer Vorgang wird als solcher dokumentiert, nicht stillschweigend übergangen |

> ⚠️ **`ANL-3` ist eine Setzung dieser Session, keine Quellenaussage.**
> Das Regelwerk (§ 7.1-Nachtrag, B-1) verlangt, jedes Ziel-Impressum
> auf einen Werbewiderspruch zu prüfen und den Betrieb bei einem Treffer
> **ohne Ermessen** nicht aufzunehmen. Es sagt **nicht**, wo dieses
> Ergebnis festzuhalten ist — dort steht ausdrücklich: „Ob das
> Prüfergebnis als eigenes Protokollfeld geführt wird, ist
> Umsetzungsfrage beim ersten Wellenbau."
>
> **Diese Datei beantwortet die Umsetzungsfrage so:** Der Fall wird in
> der Sperrdatei geführt, weil er sonst bei jeder Welle neu geprüft
> werden muss und ein einmal erkannter Widerspruch verlorengehen kann.
> **Zwei Grenzen sind dabei ausdrücklich mitzuführen:**
> 1. `ANL-3` löst **kein** Antwortschreiben aus — uns gegenüber wurde
>    nichts erklärt (Unterschied zu `ANL-1`).
> 2. Ob der Eintrag eines fremden Impressumsvermerks in einen eigenen
>    Sperrbestand seinerseits eine zulässige Verarbeitung ist, ist
>    **nicht erhoben**. Der Punkt ist als **P-1** in § 8 geführt und
>    gehört in denselben anwaltlichen Rat wie O-9.
>
> Bis zur Klärung gilt die **engere** Handhabung: `ANL-3`-Einträge
> tragen nur `SP-02`, `SP-03`, `SP-05` bis `SP-08` und `SP-10` —
> **niemals `SP-04`** (kein Personenname).

---

## 4. Der Eintrags-Ablauf

**Auslöser:** jeder Eingang nach § 3, über jeden Kanal.

1. **Eintragen — zuerst, vor jeder Klärung.** `SP-01` bis `SP-03`,
   `SP-05` bis `SP-08`. Fehlende Angaben bleiben offen; der Eintrag ist
   trotzdem wirksam.
2. **Reichweite setzen** (`SP-09`) — Standardwert `alle Kanäle`.
3. **Laufende Verarbeitungen stoppen.** „Nach einem Widerspruch dürfen
   **keine neuen Druckaufträge** mehr starten" (Regelwerk § 3
   Pflicht 2, nach A7).
4. **Beleg ablegen** und in `SP-10` referenzieren.
5. **Antwortschreiben** nach B-3, sofern `ANL-1`/`ANL-2`/`ANL-4` mit
   erreichbarem Absender — `SP-11` bis `SP-13` füllen.
6. **`F-13` in der Zielkundenliste** auf `SP-01` setzen, falls ein
   Listeneintrag existiert. **Nicht** löschen (§ 1 Nr. 2).

### Der Maßstab „unverzüglich"

> „Umsetzung unverzüglich — ‚eine laufende Kampagne ist keine Ausrede,
> und die Monatsfrist des Art. 12 Abs. 3 DSGVO gilt hier nicht'"
> *(Regelwerk § 3 Pflicht 2, nach A5 zu § 7 Abs. 3 Nr. 3 UWG)*

**Betriebsregel dieser Datei:** `SP-08 − SP-07` wird bei jedem
Sperrdatei-Abgleich (§ 5) über alle im Berichtszeitraum neu
hinzugekommenen Einträge **ausgewiesen**, nicht nur geführt. Eine
Differenz von mehr als einem Werktag ist ein **Befund**, kein
Betriebsrauschen, und gehört mit Begründung in `SP-15`.

> ⚠️ **Was hier bewusst NICHT steht:** eine Zahl in Tagen als zulässige
> Obergrenze. „Unverzüglich" ist der Maßstab der Quelle; jede eigene
> Frist wäre eine Aufweichung, die kein Beleg trägt. Der Werktag oben
> ist eine **Meldeschwelle**, keine Erlaubnis.

---

## 5. Der Abgleich — Pflicht und Journal

**R-B6 (Regelwerk § 7.3), tragende Regel:**

> „**Vor jedem Versand** und **vor jedem Druckauftrag** (D2 Pflicht 2 /
> R-A7.4). Der Abgleich wird protokolliert (Datum, Welle, Zahl der
> aussortierten Einträge) — ein Abgleich ohne Protokoll ist später
> nicht belegbar."

⭐ **Zwei Anlässe, nicht einer.** Eine Welle kann mehrere Druckaufträge
haben (Nachdruck, geteilte Auflage, korrigierte Charge). **Jeder
einzelne** braucht seinen eigenen Abgleich — ein Wellen-Abgleich am
Anfang deckt einen späteren Druckauftrag nicht. Das Journal ist deshalb
**mehrzeilig je Welle**, nicht ein Feld.

**Das Abgleich-Journal wird im Wellenprotokoll geführt**
(`akquise/wellenprotokoll-vorlage.md`, Block D) — dort, wo auch die
Menge steht, gegen die abgeglichen wird. Es gibt es **einmal**, nicht
in beiden Dateien.

**Ergebnis eines Abgleichs, verbindlich:**

- Jeder Treffer wird **ausgesteuert**, nicht markiert und mitgenommen.
- Die Zahl der Aussteuerungen geht in die Summenprobe der Welle
  (`akquise/wellenprotokoll-vorlage.md`, Block E). Geht die Probe nicht
  auf, ist die Welle **nicht freigegeben**.
- **Ein Abgleich mit null Treffern wird genauso protokolliert wie
  einer mit Treffern.** Ein fehlender Journal-Eintrag ist ununterscheidbar
  von einem unterlassenen Abgleich.

---

## 6. Der enge Fall B-4 — Löschwunsch ist NICHT Widerspruch

Das ist die Stelle, an der die Quelle schon einmal verrutscht ist: Die
Vorfassung von `interessenabwaegung-o8.md` § 10 B-4 sagte „Löschung
aller Daten" und machte damit aus dem engen Sperrdatei-Fall den
allgemeinen Art.-17-Fall (dort als Korrektur **Q-07** markiert,
12.08.2026). Das Regelwerk warnt ausdrücklich, „er darf hier nicht
erneut zum allgemeinen Fall zurückdriften" (§ 7.3, R-B11).

**Deshalb steht hier zuerst die Abgrenzung, dann der Ablauf.**

### 6.1 Die Unterscheidung in einer Frage

> **Verlangt die Person die Löschung ihrer Daten AUS DER
> WERBESPERRDATEI — ausdrücklich und allein?**

| Antwort | Fall | Ablauf |
|---|---|---|
| **Ja, ausdrücklich und allein die Sperrdatei** | **B-4-Fall** | § 6.2 — **Hinweispflicht** |
| **Nein** (allgemeines Löschverlangen, Art. 17) | **Regulärer Fall** | Regelwerk § 7.4 (Löschkonzept, Fristen). ⛔ **Der B-4-Hinweis gehört hier ausdrücklich NICHT hin** |
| **Unklar** | **Klärungsfall** | § 6.3 — nicht raten |

### 6.2 Der B-4-Ablauf

Wortlaut der Pflicht, zitiert nach Regelwerk § 7.3 R-B11 (dieses nach
`interessenabwaegung-o8.md` § 10 B-4, dieses nach DSK Ziff. 5.1,
Belegstufe ① A):

> Wer „ausdrücklich und allein eine Löschung aller Daten aus der
> Werbesperrdatei" verlangt, wird darauf hingewiesen, dass er
> „eventuell wieder Werbung erhalten kann"; im Zweifel ist zu klären,
> was gewollt ist.

**Ablauf:**

1. `SP-14` anlegen mit **Eingangsdatum des Löschverlangens**.
2. **Hinweis erteilen** — dass die Löschung aus der Sperrdatei dazu
   führen kann, wieder Werbung zu erhalten. `SP-14` trägt Datum und Weg
   des Hinweises.
3. **Rückmeldung abwarten.** Bis zu ihr bleibt der Sperreintrag
   **bestehen** — die Sperre ist der sichere Zustand.
4. **Ergebnis eintragen:** `Sperreintrag bleibt` · `Sperreintrag
   gelöscht` · `keine Rückmeldung — Sperreintrag bleibt`.
5. Bei `Sperreintrag gelöscht`: Der **Vorgangsnachweis** (dass ein
   Löschverlangen vorlag und der Hinweis erteilt wurde) bleibt erhalten
   — sonst ist die Löschung selbst nicht belegbar. Er enthält **keine
   Werbe-Sperrdaten mehr**.

**Unterblock `SP-14` — Felder:**

| Feld | Inhalt |
|---|---|
| `SP-14.1` | Eingangsdatum des Löschverlangens |
| `SP-14.2` | Wortlaut-Referenz (Beleg-Ablageort) |
| `SP-14.3` | Einstufung: `B-4-Fall` · `regulärer Art.-17-Fall` · `Klärungsfall` |
| `SP-14.4` | Hinweis erteilt am / Weg — **bei `B-4-Fall` Pflicht** |
| `SP-14.5` | Rückmeldung am / Inhalt |
| `SP-14.6` | Ergebnis (vier Werte aus Schritt 4) |

### 6.3 Der Klärungsfall

„Im Zweifel ist zu klären, was gewollt ist." Die Klärung ist eine
**Rückfrage**, keine Auslegung. Bis zur Antwort:

- Der **Sperreintrag bleibt bestehen.**
- Der Vorgang wird als `Klärungsfall` in `SP-14.3` geführt, nicht
  vorsorglich in eine der beiden Richtungen aufgelöst.
- ⚠️ **Ein regulärer Art.-17-Fall ist parallel weiter fristgebunden**
  (Regelwerk § 7.4: Antwort binnen eines Monats, Verlängerung nur, wenn
  sie innerhalb des ersten Monats mitgeteilt und begründet wird). Die
  Klärung setzt diese Frist **nicht** aus.

---

## 7. Rote Linien dieser Datei

Zum Aushängen neben den roten Linien des Regelwerks (§ 9).

1. ⛔ **Kein Versand und kein Druckauftrag ohne protokollierten
   Abgleich** (Regelwerk § 9 Nr. 9, R-B6).
2. ⛔ **Keine Vollöschung eines Betriebs statt eines Sperreintrags.**
3. ⛔ **Keine Rückfrage, keine „letzte Mail", keine Reaktivierung**
   (R-B8).
4. ⛔ **Kein Ablauf-, Verfalls- oder Wiedervorlage-Datum** auf einem
   Sperreintrag (§ 7.4: von allen Fristen ausgenommen).
5. ⛔ **Kein B-4-Hinweis auf ein reguläres Löschverlangen** (§ 6.1).
6. ⛔ **Keine Weitergabe der Sperrdatei an Dritte** — R-B9; die
   DSB-Benennungsschwelle „geschäftsmäßig zum Zweck der Übermittlung"
   hängt nicht an der Kopfzahl (Regelwerk § 7.4).
7. ⛔ **Kein Eintrag, der auf eine Klärung wartet.** Erst eintragen,
   dann klären (§ 4 Schritt 1).

---

## 8. Offene Punkte dieser Datei

| # | Punkt | Warum offen | Träger |
|---|---|---|---|
| **P-1** | **Zulässigkeit der `ANL-3`-Führung** — darf ein im fremden Impressum vorgefundener Werbewiderspruch in einen eigenen Sperrbestand? | Die Quelle verlangt die Prüfung und die Nicht-Aufnahme (B-1), sagt aber nichts über die Speicherung des Ergebnisses. Eigene Setzung, s. § 3 | Anwaltlicher Rat — **mit O-9 bündeln** |
| **P-2** | **Meldeschwelle für `SP-08 − SP-07`** (hier: ein Werktag) | Setzung dieser Datei; die Quelle nennt nur „unverzüglich" (§ 4) | MKT-AKQ beim ersten Wellenbau |
| **P-3** | **Technische Form** — Datei, Tabelle, CRM-Feld | O-6 (Werkzeugwahl) ist offen (Regelwerk § 10) | MKT-OPS |
| **P-4** | **Abgleich-Verfahren bei abweichender Schreibweise** — `SP-02`/`SP-03` sind Freitext; ein Abgleich über Firmennamen trifft „Hotel Seeblick GmbH" und „Hotel Seeblick" nicht sicher gleich | Kein Verfahren festgelegt. Bis dahin gilt: **im Zweifel aussteuern** | MKT-OPS, mit P-3 |
| **P-5** | **Diese Datei und `akquise/wellenprotokoll-vorlage.md` liegen außerhalb des Prüfraums von `akquise/pruefe-zitate.js`** | **Am Skript gemessen 14.08.2026** (Stand `3067361`): Die `ZIEL`-Liste führt `akquise/akquiseplan.md`, `akquise/listenbau-regelwerk.md`, `akquise/interessenabwaegung-o8.md`, `fund/wettbewerbsbild.md`, `handel/kanal-rechtsmatrix.md`, `handel/angebotsarchitektur.md` — die beiden neuen Dateien sind **nicht** darunter. Die hier geführten Zitate haben damit **kein dauerhaftes Prüfmittel im Repo** | Leitsession / R15-C — gleiche Klasse wie R14B-N-9 |

---

## 9. Ausfüll-Vorlage

**Kopiervorlage. Eine Zeile je Sperrfall.** Bei mehr als wenigen
Einträgen wird die Tabelle unhandlich — dann greift P-3 (Werkzeug).

```text
SP-01  Sperr-ID .............. SPD-2026-___
SP-02  Firma ................. ____________________________________
SP-03  Postanschrift ......... ____________________________________
SP-04  Personenname .......... [leer lassen, außer Bedingung erfüllt]
SP-05  Aufnahme-Anlass ....... ANL-_   (1=Widerspruch · 2=sonstige Ablehnung
                                        3=Impressumsvermerk · 4=Rückläufer)
SP-06  Eingangsweg ........... ____________________________________
SP-07  Eingangsdatum ......... ____.____.2026  (Uhrzeit bei Telefon: ______)
SP-08  Eintragsdatum ......... ____.____.2026  ______ Uhr
       → Differenz SP-08 − SP-07: ______   (> 1 Werktag: Grund in SP-15)
SP-09  Reichweite ............ alle Kanäle   [Abweichung nur mit SP-15]
SP-10  Beleg-Referenz ........ ____________________________________
SP-11  Antwortschreiben am ... ____.____.2026   [bei ANL-3: leer]
SP-12  Rest-Zeitraum genannt . bis ____.____.2026
SP-13  Sperrlisten-Aufnahme
       mitgeteilt ............ ja / nein
SP-14  B-4-Vorgang ........... [nur bei Löschverlangen aus der Sperrdatei]
       .1 Eingang ............ ____.____.2026
       .2 Beleg .............. ____________________________________
       .3 Einstufung ......... B-4-Fall / regulärer Art.-17-Fall / Klärungsfall
       .4 Hinweis erteilt am . ____.____.2026 · Weg: ______________
       .5 Rückmeldung ........ ____.____.2026 · Inhalt: ____________
       .6 Ergebnis ........... bleibt / gelöscht / keine Rückmeldung → bleibt
SP-15  Bemerkung / Klärung ... ____________________________________

Absender des Antwortschreibens: <<FIRMIERUNG — F-7 OFFEN>>
Eingangsadresse Datenschutz:    <<DATENSCHUTZ-E-MAIL — F-7/B-2 OFFEN>>
```

### Tabellenform (für den laufenden Bestand)

| SP-01 | SP-02 Firma | SP-03 Anschrift | SP-05 Anlass | SP-06 Weg | SP-07 Eingang | SP-08 Eintrag | SP-09 Reichweite | SP-11 Antwort am | SP-13 | SP-15 |
|---|---|---|---|---|---|---|---|---|---|---|
| *(leer — noch kein Sperrfall; es existiert noch kein Datensatz und kein Versand)* | | | | | | | | | | |

> ⚠️ **Die Leerzeile ist ein Befund, kein Formfehler.** Solange die
> Gates oben offen sind, **kann** es keinen Sperrfall geben. Wer hier
> später einen leeren Bestand vorfindet, prüft zuerst, ob überhaupt
> schon versandt wurde — nicht, ob jemand vergessen hat einzutragen.

---

## 10. Zuordnung zu den Bau-Pflichten B-1…B-7

Vollständige Zuordnung siehe `akquise/wellenprotokoll-vorlage.md` § 8
— dort steht sie **einmal** für beide Werkzeuge, mit Zählweg. Hier nur
der Ausschnitt dieser Datei:

| Pflicht | In dieser Datei |
|---|---|
| **B-2** | teilweise — Feld `SP-06` (Eingangsweg) belegt die Erfassung formloser Eingänge. Der **Bau** des elektronischen Wegs und der Art.-24-TOM ist **nicht hier** (F-7 / MKT-OPS, Gate oben) |
| **B-3** | ✅ Nachweisfelder `SP-11` bis `SP-13` + Ablauf § 4 Schritt 5. Der **Text** des Antwortschreibens ist **nicht hier** (F-7) |
| **B-4** | ✅ vollständig — § 6 (Abgrenzung, Ablauf, Unterblock `SP-14`) |
| **B-1** | teilweise — `ANL-3` als Aufnahme-Anlass, mit ausgewiesenem Klärvorbehalt P-1. Die **Prüfpflicht** selbst steht im Regelwerk § 7.1 und bleibt dort |

---

## 11. Quellen und Belegstufen

**Diese Datei erhebt keine eigenen Primärquellen.** Alle materiellen
Aussagen sind aus dem Repo-Bestand übernommen; die Belegkette ist
jeweils mitgeführt:

| Herkunft | Was daraus kommt |
|---|---|
| `akquise/listenbau-regelwerk.md` § 3 Pflicht 2 | Betriebsform, Kanalübergreifendheit, keine Vollöschung, Abgleichspflicht, „unverzüglich" |
| `akquise/listenbau-regelwerk.md` § 6 (Feldregister) | F-13-Verhältnis, Datenminimierung, F-07-Vorsicht bei `SP-04` |
| `akquise/listenbau-regelwerk.md` § 7.3 | R-B6 (Abgleich), R-B7, R-B8, R-B10 (B-3), R-B11 (B-4) |
| `akquise/listenbau-regelwerk.md` § 7.4 | Fristenausnahme der Sperrdatei, Art.-15-Frist, R-B9 |
| `akquise/listenbau-regelwerk.md` § 7.1-Nachtrag + § 9 Nr. 13 | B-1 und die offene Umsetzungsfrage hinter `ANL-3` |
| `akquise/interessenabwaegung-o8.md` § 8 (VVT lit. f) | Rechtsgrundlage der Aufbewahrung (Art. 21 Abs. 3 / Art. 17 Abs. 3 lit. b) |
| `akquise/interessenabwaegung-o8.md` § 10 B-2/B-3/B-4 | Wortlaut der drei hier umgesetzten Bau-Pflichten |

> ⚠️ **Belegstufe dieser Datei: zweite Hand durchgehend.** Die
> Belegstufen ① A der DSK- und Normzitate stehen an ihren
> Ursprungsstellen im Regelwerk und in O-8; **diese Datei hat sie nicht
> selbst nachgemessen** und beansprucht sie nicht. Wer aus dieser Datei
> zitiert, zitiert die Quelle, nicht sie.

> 🔧 **Reparaturvermerk 14.08.2026 (R15-E, Selbstfang).** Die
> Erstfassung von **P-5** begründete den Prüfraum mit dem Satz „Das
> Skript prüft nach O-12 nur Akquiseplan und Regelwerk" — **aus zweiter
> Hand vom Regelwerk § 10 O-12 übernommen, nicht am Skript gemessen.**
> Der Prüfraum ist seit `3067361` (R15-C) auf **sechs** Dokumente
> erweitert; die O-12-Zeile im Regelwerk ist damit überholt. Das
> **Ergebnis** von P-5 änderte sich nicht (beide neuen Dateien stehen
> weiterhin nicht in `ZIEL`), die **Begründung** war falsch — genau die
> Klasse, vor der CLAUDE.md warnt: eine Bestandsaussage in neu
> geschriebenem Text braucht dieselbe Messung wie eine Zahl. Aufgefallen
> beim Wächterlauf, nicht beim Redigieren.
> ➡️ **Die Nachführung von O-12 im Regelwerk liegt bei der
> Leitsession** (Wahrheits-Kanal-nah, R15-E fasst § 10 nicht an) — als
> Nebenbefund gemeldet.
