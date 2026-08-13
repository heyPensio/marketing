# Werbesperrdatei — Struktur, Feldschnitt und Betriebsregeln

> **Was das hier ist:** Das **Werkzeug** zu D2 Pflicht 2
> („Werbesperrdatei") und zu den Bau-Pflichten **B-3** und **B-4** aus
> `akquise/interessenabwaegung-o8.md` § 10. Es definiert den
> Feldschnitt, die Aufnahme-Anlässe, den Eintrags- und den
> Abgleich-Ablauf — und trennt den **engen Fall B-4** (Löschwunsch aus
> der Sperrdatei) vom regulären Löschverlangen.
>
> ## ⚠️ Geltungsgrenze — bitte zuerst lesen
>
> **Dieses Dokument ist KEINE Rechtsberatung.** Es erbt die
> Geltungsgrenze seiner Quellen und trägt sie mit: Alle Rechtsaussagen
> stammen aus `handel/kanal-rechtsmatrix.md` über
> `akquise/listenbau-regelwerk.md` und `akquise/interessenabwaegung-o8.md`
> — „*Dieses Dokument ist eine eigene Recherche zur betrieblichen
> Orientierung. Es ist KEINE Rechtsberatung*". Der anwaltliche Rat
> (**O-9** und die Punkte in § 8) steht aus. Ein ausgefülltes Formular
> nach dieser Struktur ist **kein Compliance-Nachweis**.
> *(Kasten ergänzt 14.08.2026 nach Prüferbefund PE-8: Das Regelwerk
> verpflichtet ausdrücklich dazu, seine Geltungsgrenze mitzutragen —
> die Erstfassung tat das nicht.)*
>
> **Was es NICHT ist:** keine Rechtsprüfung. Die materiellen Vorgaben
> stammen aus `akquise/listenbau-regelwerk.md` (§ 3 Pflicht 2, § 7.3,
> § 7.4) und aus `akquise/interessenabwaegung-o8.md` (§ 7.2, § 7.4,
> § 8, § 10). ⚠️ **Wo diese Datei darüber hinausgeht, ist es
> gekennzeichnet** — die Erstfassung sagte pauschal „keine neue Regel"
> und traf damit für `ANL-2`, `ANL-4` und `SP-09` nicht zu
> (Prüferbefund PE-11). Die Setzungen dieser Datei sind in § 3a
> abschließend aufgelistet.
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
| **O-6 · Werkzeugwahl** | CRM-/Werkzeugentscheid offen (MKT-OPS) | Diese Datei definiert die Struktur **werkzeugneutral**. ⚠️ **Sie ist selbst kein Ablageort** — der Bestand lebt in `sensibel/` oder im Werkzeug, **nie im Repo** (§ 9, Ablageregel; korrigiert nach Prüferbefund PE-5) |
| **Belegablage** | Ablageort für Originale von Widersprüchen (Mail, Scan, Telefonnotiz) — hängt an B-2 (Postfach) und O-6 (Scan-/Notizort) | `SP-10` ist Pflichtfeld und heute **nicht befüllbar**; bis zum Entscheid trägt es `<<BELEGABLAGE — O-6/B-2 OFFEN>>`. *(Gate ergänzt nach Prüferbefund PE-6 — das Feld hatte als einziges Pflichtfeld kein Gate, obwohl `SP-06`/`SP-11` genau dafür eines bekommen hatten.)* |

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
   ausgenommen" (Regelwerk § 7.4) — das ist die **betrieblich getragene**
   Grundlage dieser Datei. Als Normzuordnung nennt
   `interessenabwaegung-o8.md` § 8 (VVT-Block lit. f): „Der Eintrag in
   der **Werbesperrdatei** wird nicht gelöscht (Art. 21 Abs. 3 /
   Art. 17 Abs. 3 lit. b)".
   ⚠️ **Belegstufe dieser Normzuordnung: keine.** 🔧 *Repariert
   14.08.2026 (Prüferbefund PE-9, MITTEL): Hier stand „Rechtsgrundlage
   der Aufbewahrung — **bereits belegt**, hier nur zitiert". Das Zitat
   ist wortgetreu, aber die Fundstelle ist ein zur Übernahme gebauter
   **VVT-Textblock ohne Belegstufe**; o8 § 9.2 formuliert dieselbe
   Aussage als betriebliche Begründung. „Bereits belegt" war damit
   selbst unbelegt — und genau die Formulierung, die jeden weiteren
   Prüfer beruhigt. Der Anspruch ist **gestrichen, nicht abgeschwächt.***
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
| **SP-09** | Reichweite der Sperre | ✅ | **Fester Wert `alle Kanäle`. Das Feld hat keinen zweiten zulässigen Wert.** Erklärt ein Betrieb ausdrücklich, er wolle nur einen Kanal sperren, wird das als **Wortlaut in `SP-15` vermerkt** — die Sperrreichweite bleibt davon **unberührt** | „Ein erklärter Widerspruch bindet uns **kanalübergreifend**" (Regelwerk § 3 Pflicht 2, nach A7). 🔧 **Repariert 14.08.2026 (Prüferbefund PE-12, MITTEL):** Die Erstfassung ließ „einen abweichenden Wert mit ausdrücklicher Erklärung des Betriebs" zu — und baute damit unmittelbar neben dem Zitat, das die Kanalübergreifendheit trägt, einen zulässigen Weg zur **Teil**-Sperre. Ob eine betroffene Person ihren Widerspruch wirksam auf einen Kanal begrenzen kann, ist eine **ungeklärte Rechtsfrage** (keine Quelle behandelt sie) — als **PS-6** in § 8 geführt. Bis zur Klärung gilt der sichere Zustand: volle Sperre |
| **SP-10** | Beleg-Referenz | ✅ | Ablageort des Originals (Mail-ID, Scan-Dateiname, Telefonnotiz-ID) — **nicht** der Volltext | Nachweispflicht (Art. 5 Abs. 2). Der Volltext gehört in die Belegablage, nicht in die Sperrdatei (Minimalitätsgebot, § 1 Nr. 4) |
| **SP-11** | Antwortschreiben versandt am | 🔶 | Datum. **Pflicht bei `ANL-1`, `ANL-2` und `ANL-4`** — leer **nur** bei `ANL-3` (kein Erklärender) oder bei `ANL-4` ohne erreichbaren Absender, dann Grund in `SP-15` (s. § 3) | B-3 / R-B10: „Individuelles Antwortschreiben auf jeden Widerspruch". 🔧 **Repariert 14.08.2026 (Prüferbefund PE-23, MITTEL):** Diese Zeile sagte „bei `ANL-3`/`ANL-4` leer" und war damit die **pflichtenärmste** von drei einander widersprechenden Fassungen in derselben Datei — sie strich das Antwortschreiben für einen Fall, den § 3 ausdrücklich verlangt. § 2, § 3, § 4 und § 9 sind jetzt auf **eine** Fassung gebracht |
| **SP-11a** | Bestätigung der Beachtung enthalten | 🔶 | `ja` / `nein`; Pflicht, wenn `SP-11` gefüllt ist | **Erstes** der drei B-3-Elemente. *(Feld ergänzt nach Prüferbefund PE-4: `SP-12` und `SP-13` hatten je ein eigenes Nachweisfeld, Element 1 nur das Sammelfeld `SP-11` — dieselbe Begründung, die `SP-13` sein Feld gab, gilt hier.)* Der **Text** selbst hängt an F-7 |
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
| **ANL-2** | **Sonstige uns gegenüber erklärte Ablehnung weiterer Werbung**, die nicht ausdrücklich als Widerspruch bezeichnet ist („bitte nicht mehr anschreiben") | ✅ **Ja** — wird wie `ANL-1` behandelt | ⚠️ **Setzung dieser Datei** (§ 3a Nr. 2), an R-B7/R-B8 angelehnt, aber dort nicht ausgesprochen. Wirkt in die **sichere** Richtung (mehr Pflichten) |
| **ANL-3** | **Werbewiderspruch im Impressum** des Betriebs (B-1) — kein an uns gerichteter Vorgang | ⛔ **Nein** — es gibt keinen Erklärenden, dem geantwortet werden könnte, und keine an uns gerichtete Erklärung | Regelwerk § 7.1-Nachtrag (B-1) und § 9 rote Linie 13. ⚠️ **Einstufung ist eine Setzung dieser Datei**, s. Kasten unten |
| **ANL-4** | **Rückläufer mit Sperrwirkung** — z. B. ein Brief kommt mit ausdrücklichem Vermerk „keine Werbung" zurück | ✅ **Ja — außer der Absender ist nicht erreichbar**; dann `SP-11` leer **und Grund in `SP-15` Pflicht** | ⚠️ **Setzung dieser Datei** (§ 3a Nr. 3), an R-B7 (formloser Eingang) angelehnt. Ein nicht beantwortbarer Vorgang wird als solcher dokumentiert, nicht stillschweigend übergangen |

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
>    **nicht erhoben**. Der Punkt ist als **PS-1** in § 8 geführt und
>    gehört in denselben anwaltlichen Rat wie O-9.
>
> Bis zur Klärung gilt die **engere** Handhabung: `ANL-3`-Einträge
> tragen nur `SP-02`, `SP-03`, `SP-05` bis `SP-08` und `SP-10` —
> **niemals `SP-04`** (kein Personenname).

---

## 3a. Die Setzungen dieser Datei — abschließende Liste

*(Ergänzt 14.08.2026 nach Prüferbefund PE-11. Der Kopf-Kasten sagte
pauschal „keine neue Regel"; drei Stellen gingen tatsächlich über die
Quellen hinaus und waren nicht als Setzung markiert. Eine Kopf-Zusage,
die nicht stimmt, ist schlimmer als keine — sie beruhigt jeden Prüfer.)*

| # | Setzung | Quellenlage | Richtung |
|---|---|---|---|
| 1 | **`ANL-3`** — der im fremden Impressum vorgefundene Werbewiderspruch wird in der Sperrdatei geführt | Regelwerk § 7.1 verlangt die **Prüfung**, lässt die Führung ausdrücklich offen | mehr Aufwand, Zulässigkeit offen → **PS-1** |
| 2 | **`ANL-2`** — eine nicht als Widerspruch bezeichnete Ablehnung löst dieselben Pflichten aus wie ein Widerspruch, **inklusive Antwortschreiben** | R-B7/R-B8 sagen „unabhängig vom Eingangsweg" und „kein Ermessen", aber nichts über die **Bezeichnung** | **sichere** Richtung (mehr Pflichten) |
| 3 | **`ANL-4`** — ein Rückläufer mit Vermerk ist ein Sperrfall | R-B7 (formloser Eingang) trägt es sinngemäß, spricht es aber nicht aus | **sichere** Richtung |
| 4 | **Meldeschwelle** „mehr als ein Werktag" für `SP-08 − SP-07` | Die Quelle nennt nur „unverzüglich" | Schwelle ist **Meldeanlass**, keine Erlaubnis → **PS-2** |
| 5 | **Feldschnitt und ⛔-Zeilen** (kein Grund-Feld, kein Ablauf-Datum) | abgeleitet aus R-B8 und § 7.4 | **sichere** Richtung |

⚠️ **Nicht mehr in dieser Liste, weil zurückgebaut:** Die Erstfassung
ließ bei `SP-09` eine Teil-Sperre zu. Das war eine Setzung in die
**unsichere** Richtung und ist entfernt (s. `SP-09`, Prüferbefund
PE-12) — die offene Rechtsfrage wird als **PS-6** geführt, statt sie
im Feld vorwegzunehmen.

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
- **Die Null-Treffer-Regel** (ein Abgleich ohne Treffer wird genauso
  eingetragen wie einer mit Treffern) steht **einmal**, bei den
  Journal-Regeln in `akquise/wellenprotokoll-vorlage.md` § 5.
  *(🔧 Dublette entfernt 14.08.2026, Prüferbefund PE-19 — sie stand
  hier wortgleich ein zweites Mal, ohne Wächter und ohne Rangfolge
  zwischen den beiden neuen Dateien.)*

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
- ⚠️ **Ein regulärer Art.-17-Fall läuft parallel weiter** und wird
  nicht dadurch angehalten, dass wir klären.
  🔧 **Repariert 14.08.2026 (Prüferbefund PE-10, MITTEL):** Hier stand
  „ist parallel weiter fristgebunden (**Regelwerk § 7.4:** Antwort
  binnen eines Monats, Verlängerung nur, wenn sie innerhalb des ersten
  Monats mitgeteilt und begründet wird)". Die zitierte Stelle ist auf
  **Art. 15 (Auskunft)** gescopet; über Antwortfristen bei
  Löschverlangen sagt der Löschkonzept-Absatz daneben nichts. Dass die
  Monatsfrist des Art. 12 Abs. 3 auch Art.-17-Anträge erfasst, mag
  zutreffen — es wäre eine **eigene Rechtsaussage**, und diese Datei
  erhebt keine (§ 11). Die Frist des regulären Löschverlangens ist
  daher hier **nicht bestimmt**; sie gehört in den anwaltlichen Rat
  (**PS-7**, § 8). Was bleibt: **Die Klärung ist kein Grund, den
  Vorgang liegen zu lassen.**

---

## 7. Rote Linien dieser Datei

Zum Aushängen neben den roten Linien des Regelwerks (§ 9).

1. ⛔ **Kein Versand und kein Druckauftrag ohne protokollierten
   Abgleich** (Regelwerk § 9 Nr. 9, R-B6).
2. ⛔ **Keine Vollöschung eines Betriebs statt eines Sperreintrags.**
3. ⛔ **Keine Rückfrage, keine „letzte Mail", keine Reaktivierung**
   (R-B8).
4. ⛔ **Kein Ablauf-, Verfalls- oder Wiedervorlage-Datum** auf einem
   Sperreintrag (Regelwerk § 7.4: von allen Fristen ausgenommen).
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
| **PS-1** | **Zulässigkeit der `ANL-3`-Führung** — darf ein im fremden Impressum vorgefundener Werbewiderspruch in einen eigenen Sperrbestand? | Die Quelle verlangt die Prüfung und die Nicht-Aufnahme (B-1), sagt aber nichts über die Speicherung des Ergebnisses. Eigene Setzung, s. § 3 | Anwaltlicher Rat — **mit O-9 bündeln** |
| **PS-2** | **Meldeschwelle für `SP-08 − SP-07`** (hier: ein Werktag) | Setzung dieser Datei; die Quelle nennt nur „unverzüglich" (§ 4) | MKT-AKQ beim ersten Wellenbau |
| **PS-3** | **Technische Form** — Datei, Tabelle, CRM-Feld | O-6 (Werkzeugwahl) ist offen (Regelwerk § 10) | MKT-OPS |
| **PS-4** | **Abgleich-Verfahren bei abweichender Schreibweise** — `SP-02`/`SP-03` sind Freitext; ein Abgleich über Firmennamen trifft „Hotel Seeblick GmbH" und „Hotel Seeblick" nicht sicher gleich | Kein Verfahren festgelegt. Bis dahin gilt: **im Zweifel aussteuern** | MKT-OPS, mit PS-3 |
| **PS-6** | **Kann eine betroffene Person ihren Werbewiderspruch wirksam auf EINEN Kanal begrenzen?** | Von keiner Quelle behandelt. `SP-09` nahm die Antwort in der Erstfassung vorweg (Teil-Sperre zulässig) — zurückgebaut, s. Prüferbefund PE-12. **Bis zur Klärung gilt die volle Sperre** | Anwaltlicher Rat — **mit O-9 bündeln** |
| **PS-7** | **Antwortfrist bei einem regulären Löschverlangen (Art. 17)** | Regelwerk § 7.4 nennt eine Monatsfrist ausdrücklich nur für **Art. 15 (Auskunft)**. Ob Art. 12 Abs. 3 auch Art.-17-Anträge erfasst, wäre eine **eigene Rechtsaussage**; diese Datei erhebt keine (§ 11). S. § 6.3, Prüferbefund PE-10 | Anwaltlicher Rat — **mit O-9 bündeln** |
| **PS-8** | **Belegablage** — wo Originale von Widersprüchen liegen | `SP-10` ist Pflichtfeld, der Ablageort hängt an B-2 (Postfach) und O-6 (Scan-/Notizort). Als Gate ergänzt, s. Prüferbefund PE-6 | MKT-OPS, mit PS-3 |
| **PS-5** | **Diese Datei und `akquise/wellenprotokoll-vorlage.md` liegen außerhalb des Prüfraums von `akquise/pruefe-zitate.js`** | **Am Skript gemessen 14.08.2026** (Stand `3067361`): Die `ZIEL`-Liste führt `akquise/akquiseplan.md`, `akquise/listenbau-regelwerk.md`, `akquise/interessenabwaegung-o8.md`, `fund/wettbewerbsbild.md`, `handel/kanal-rechtsmatrix.md`, `handel/angebotsarchitektur.md` — die beiden neuen Dateien sind **nicht** darunter. Die hier geführten Zitate haben damit **kein dauerhaftes Prüfmittel im Repo** | Leitsession / R15-C — gleiche Klasse wie R14B-N-9 |

---

## 9. Ausfüll-Vorlage

**Kopiervorlage. Eine Zeile je Sperrfall.** Bei mehr als wenigen
Einträgen wird die Tabelle unhandlich — dann greift PS-3 (Werkzeug).

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
SP-10  Beleg-Referenz ........ <<BELEGABLAGE — O-6/B-2 OFFEN>>
SP-11  Antwortschreiben am ... ____.____.2026
       [leer NUR bei ANL-3, oder bei ANL-4 ohne erreichbaren Absender
        — dann Grund in SP-15 Pflicht]
SP-11a Bestaetigung der
       Beachtung enthalten ... ja / nein        [Pflicht, wenn SP-11 gefuellt]
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

### ⛔ Wo der Bestand NICHT lebt — Ablageregel

> 🔧 **Reparatur 14.08.2026 (Prüferbefund PE-5, SCHWER).** Hier stand
> eine ausfüllbare Markdown-**Tabellenform „für den laufenden Bestand"**
> mit den Spalten `SP-01` · Firma · Anschrift · Anlass · Weg · Eingang ·
> Eintrag · Reichweite · Antwort · `SP-13` · Bemerkung, und die
> Gate-Zeile O-6 nannte sie „die tragfähige Erstform, bis ein Werkzeug
> steht". **Das war falsch und ist ersatzlos entfernt** — beide Quellen
> verbieten es:
>
> - `interessenabwaegung-o8.md` § 8 **lit. g** (TOM, Art. 24): „Mindestens:
>   Zugriffsbeschränkung, **Ablage außerhalb des Repos** (Projektquelle
>   § 2 AKQ2), Sperrdatei-Abgleich als technischer Schritt vor jedem
>   Druckauftrag".
> - `listenbau-regelwerk.md` § 11: „⚠️ **Ablageregel:** Die Liste selbst
>   gehört **nicht** ins Repo" (Projektquelle § 2 AKQ2:
>   „personenbezogene Daten nur in `sensibel/`/CRM").
>
> Dass die Sperrdatei keine Zielkundenliste ist, entlastet nicht: Sie
> trägt nach eigenem Feldschnitt Firma und Anschrift und **kann**
> `SP-04` tragen — bei inhabergeführten Häusern sind schon Firma und
> Anschrift regelmäßig personenbezogen (Rechtsmatrix C1). Wer die
> entfernte Tabelle befolgt hätte, hätte personenbezogene Daten
> **unwiderruflich in die Git-Historie** committet. Das war der einzige
> Befund dieser Session, der auch bei geschlossenen Gates sofort
> gewirkt hätte — ein Sperrfall entsteht, sobald jemand widerspricht,
> auch ohne Versand.

**Verbindlich:**

1. ⛔ **Der Sperrbestand wird NIE in diesem Repository geführt** — weder
   als Tabelle, noch als CSV, noch als Beispielzeile mit echten Daten.
2. ✅ Zulässige Orte: `sensibel/` (git-ignoriert) oder das CRM/Werkzeug
   nach **O-6**, jeweils mit Zugriffsbeschränkung.
3. Die Ausfüll-Vorlage oben ist eine **Feldbeschreibung zum Abschreiben**
   — sie wird am Ablageort ausgefüllt, nicht hier.
4. Auch **Belege** (`SP-10`) und Klärungsvorgänge (`SP-14`) folgen dieser
   Regel; `SP-10` referenziert einen Ablageort, nie den Volltext.

> ⚠️ **Dass es hier keinen Bestand gibt, ist deshalb kein Befund über
> den Betrieb** — er gehört hier nicht hin. Wer prüfen will, ob
> Sperrfälle vorliegen, sieht am Ablageort nach, nicht in dieser Datei.
> Solange die Gates offen sind, **kann** es zusätzlich noch keinen
> Sperrfall geben: Wer später nichts findet, prüft zuerst die Gates,
> nicht die Sorgfalt.

---

## 10. Zuordnung zu den Bau-Pflichten B-1…B-7

**Die vollständige Zuordnung steht genau EINMAL:** in
`akquise/wellenprotokoll-vorlage.md` **§ 11**, mit Zählweg und
Summenprobe.

> 🔧 **Repariert 14.08.2026 (Prüferbefunde PE-21 + PE-19, MITTEL).**
> Zwei Fehler an dieser Stelle: (a) Der Verweis lautete
> „**§ 8**" — das ist in der Zieldatei „Block G — Fristen"; richtig ist
> **§ 11** (Fundstellen-Drift zwischen zwei Dateien mit je eigener
> §-Zählung). (b) Der Satz behauptete „dort steht sie **einmal**" und
> **wiederholte darunter** die Einstufungen für B-1…B-4 — eine Dublette
> ohne Wächter, zwischen zwei Dateien, für die es keine Rangfolge gibt
> (beide liegen außerhalb des Prüfraums von `pruefe-zitate.js`, PS-5).
> Die Wiederholung ist **entfernt**; „einmal" stimmt jetzt.

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
> Erstfassung von **PS-5** begründete den Prüfraum mit dem Satz „Das
> Skript prüft nach O-12 nur Akquiseplan und Regelwerk" — **aus zweiter
> Hand vom Regelwerk § 10 O-12 übernommen, nicht am Skript gemessen.**
> Der Prüfraum ist seit `3067361` (R15-C) auf **sechs** Dokumente
> erweitert; die O-12-Zeile im Regelwerk ist damit überholt. Das
> **Ergebnis** von PS-5 änderte sich nicht (beide neuen Dateien stehen
> weiterhin nicht in `ZIEL`), die **Begründung** war falsch — genau die
> Klasse, vor der CLAUDE.md warnt: eine Bestandsaussage in neu
> geschriebenem Text braucht dieselbe Messung wie eine Zahl. Aufgefallen
> beim Wächterlauf, nicht beim Redigieren.
> ➡️ **Nachgetragen 14.08.2026:** Die O-12-Zeile im Regelwerk § 10
> trägt jetzt einen Vorwärtsverweis mit dem gemessenen Stand; ihre
> inhaltliche **Neufassung** liegt bei der Leitsession bzw. R15-C —
> nicht wegen der Wahrheits-Kanal-Regel (die erfasst dieses Regelwerk
> gar nicht), sondern weil der Start-Prompt diese Datei nur für Zeiger
> freigegeben hat. *(Die Erstfassung nannte hier „Wahrheits-Kanal-nah"
> als Grund — falsche Begründung, Prüferbefund PE-22.)*
