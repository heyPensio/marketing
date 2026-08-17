# R17-A · Abschlussmeldung (Ben Beckman)

**Token-Verbrauch: von der Session nicht erhebbar — Subagenten-Zahlen
soweit bekannt: keine (der Prüfer meldet keinen Verbrauch zurück).**

**Prüfstand-Kette (Doppel-Messstand-Vertrag):**

| Stand | Hash | Bemerkung |
|---|---|---|
| Rundenstart (Nenner aller Löschungszählungen) | `926ca3c` | aus dem Tagesplan vorgegeben |
| Prüfstand bei Session-Start | `90254e1` | HEAD nach `git pull`; **einziger** Commit zwischen `926ca3c` und hier ist der Tagesplan der Leitsession (`git diff --numstat 926ca3c..90254e1` = 1 Datei, 701/0) |
| Zweiter Messstand unmittelbar vor dem Commit | `1804b1c` | ⚠️ **der Arbeitsbaum ist während der Arbeit gewandert:** drei fremde Commits (`4a0a5a3`, `f4f1139` Leitsession · `1804b1c` R17-C). **Gemessen und folgenlos:** `git diff --name-only 90254e1..1804b1c` berührt **0** meiner fünf Dateien |
| Bau-Commit | `af92adb` | Parent = `1804b1c`, also exakt der zweite Messstand |
| Prüfer-Commit | *(s. § 5)* | |

---

## Block 1 — Gebaut und verifiziert

### 1.1 Teil 1: Quellenbeschaffung

**Beide Beschaffungen sind gelungen** — der Auftrag hatte für beide auch
den dokumentierten Nulltreffer als zulässiges Ergebnis vorgesehen.

**(a) OLG Düsseldorf, Beschl. v. 19.12.2024 – 20 W 37/24** — Volltext,
Rn. 1–27, aus der amtlichen NRWE-Datenbank.
`sensibel/rohbelege-R17-A/olg-duesseldorf-20-W-37-24.html/.txt`,
SHA-256 `a62d3b15…` / `53b01178…`.

Kanalprotokoll (vollständig in
`sensibel/rohbelege-R17-A/00-quellenliste.md`):

| Kanal | Ergebnis | Einordnung |
|---|---|---|
| NRWE-Suchmaske, POST mit 15 Formularfeldern, mit und ohne Session-Cookie | HTTP 200, **kein Ergebnisblock** | ⚠️ **Werkzeugbefund, kein Quellen-Negativ** — die Positivkontrolle im selben Lauf (Suche nach dem sicher vorhandenen `38 O 243/23`) liefert **ebenfalls** nichts. Der Kanal misst in keiner Richtung |
| Web-Suche, zwei Läufe | 0 Treffer zur Sache | dokumentiert mit Suchbegriff und Datum |
| **Direkte NRWE-Dokument-URL** nach dem Muster des LG-Abzugs | **HTTP 200, 17.406 B** | ⚠️ Eine geratene URL ist kein *Negativ*befund — als **positiver** Fund trägt sie, weil das Dokument seine Identität selbst ausweist (Datum 19.12.2024 · Az. 20 W 37/24 · ECLI:DE:OLGD:2024:1219.20W37.24.00). Kontrollen: `j2025` = 404, Namensform ohne Unterstriche = 404 |
| Positivkontrolle des Dokument-Kanals | LG-Abzug `38_O_243_23_…` = 200 / 192.187 B | byte-gleich zum R09-A-Bestand |

**(b) EuGH C-621/22, deutsche Sprachfassung**, Volltext, 38.320 Zeichen.
`sensibel/rohbelege-R17-A/eugh-c-621-22-DE-volltext.txt`, SHA-256
`95311d8e…`.

⭐ **Der R09-A-Befund „über den amtlichen Kanal nicht abrufbar" ist
überholt — und er war ein Werkzeug-, kein Quellenbefund.** Ohne `-L`
antwortet `publications.europa.eu` mit **303** und leerem Body, auch für
Englisch; erst mit `-L` folgt der Abruf auf das Cellar-Sprachsegment
(DE `.0009.05`, EN `.0011.05`). **Ob der R09-A-Lauf ohne `-L` lief oder
die Quelle sich geändert hat, ist von hier aus nicht feststellbar** —
belegt ist nur der heutige 200er. Der Alt-Befund wird deshalb als
*überholt* geführt, nicht als *Fehler*.

Reproduzierte Kanalbefunde derselben Runde: curia/InfoCuria weiterhin
SPA (**130.226 B — exakt dieselbe Bytezahl wie am 12.08.2026**);
eur-lex weiterhin HTTP 202 mit leerem Body.

**Nicht beschafft, mit Suchweg (kein Negativbefund):** OLG Düsseldorf
**I-20 U 107/23** und **I-20 U 117/23** — die Verfahren, in denen die
Gegenauffassung nach Rn. 22 des Beschlusses **begründet** stehen dürfte.
Es fehlt das Entscheidungsdatum für die Dokument-URL; Jahresindex
(`…/olgs/duesseldorf/j2024/`) liefert 200, ist aber ein leeres Gerüst
ohne Trefferliste. **Posten für die nächste Runde.**

### 1.2 Teil 2: `handel/kanal-rechtsmatrix.md`

**Rn. 111 am Original gemessen.** Kernbefunde:

1. Der Beschluss ist ein **Ordnungsmittelverfahren nach § 890 ZPO**,
   kein Erkenntnisverfahren; aufgehoben wurde ein Ordnungsgeld über
   125.000 €.
2. **Tragend** ist die Kerngleichheit („Eine Prüfung der veränderten
   Gestaltung hat in einem (gesonderten) Erkenntnisverfahren zu
   geschehen").
3. Die abweichende Auffassung steht als **„Im Übrigen"-Zusatz**
   unmittelbar danach — **die Einordnung des Landgerichts („nicht
   tragende Erwägung") ist damit am Original bestätigt.**
4. ⭐ **Der Beschluss befasst sich nirgends mit Datenschutzrecht.**
   `DSGVO` = 0 · `Datenschutz` = 0 · `personenbezogen` = 0 ·
   `Art. 6` = 0 · `Art. 14` = 0 · `3a UWG` = 0 · `§ 3 Abs. 2` = 0 ·
   **`UWG` = 0**. Positivkontrollen im selben Lauf und derselben Datei:
   `§ 890` = 2 (⚠️ **dieselbe `§`-Zeichenklasse wie die Null-Muster** —
   damit ist `§ 3 Abs. 2` = 0 kein Entity-Artefakt), `Anlage K 7` = 6,
   `Schuldnerin` = 13, `kerngleich` = 1, `Irreführung` = 1. Zählweg
   durchgehend `grep -o … | wc -l`.
   **Folge:** Die abweichende Auffassung betrifft die
   **Irreführungs-Achse**, nicht den ersten Absagegrund des LG
   (Rn. 84/85).
5. **Prüfer-Fundort 3 („Gegenstand von 38 O 17/22 unbekannt") ist
   beantwortet:** Ordnungsmittelverfahren um Werbeschreiben aus
   Frühjahr und Juli/August 2023 (Anlagen AST 4), Titel war eine
   Beschlussverfügung vom 11.02.2022 (Anlage K 7). **Identität mit dem
   hier angegriffenen Schreiben bleibt offen** — andere Anlagenkürzel,
   andere Gegenseite; keine der beiden Entscheidungen stellt sie fest.
6. ⚠️ **Zitierwarnung im Bestand vermerkt:** Der Beschluss ist in sich
   datumsuneinheitlich (Tenor „06. Mai 2024" ↔ Rn. 5 „06. Mai **2023**";
   Tenor „27. Mai 2024" ↔ Rn. 6 „**25.** Mai 2024").

Zwei Belegstufen-Zeilen der Rn.-111-Tabelle korrigiert, Vorfassung
sichtbar (`~~durchgestrichen~~`).

**🔧 Die delegierte R16-Zahl ist widerlegt.** Auftragsgemäß selbst
reproduziert:

| | R16-Meldung | eigene Messung |
|---|---:|---:|
| genannt aus Block 79–155 | 65 | **63** |
| nicht genannt | 12 | **14** |
| zusätzlich fehlend | — | **149, 150** |

Zählweg: Muster `Rn\.` + Zahlenkette, mit Expansion der Spannen
(`–`, `-`, `bis`), Schrägstrich- und Komma-Ketten sowie `f.`/`ff.`.
Summenprobe 63 + 14 = 77. Positivkontrolle `Rn. 88` = genannt (true),
Gegenkontrolle `Rn. 9999` = false.
**Zweiter, unabhängiger Lesekanal für genau den Unterschied:** Die
reinen Ziffernfolgen `149` und `150` kommen im Dokumentstand `926ca3c`
**je 0-mal** vor — also in **keiner** Nennungsform, auch nicht in der
Tabellenzellen-Form `| **149** |`, die es im Dokument gibt.

**14 von 14 Randnummern gelesen und einzeln ausgewiesen** — je am
Rohbeleg im Block am Stück, Randnummer im Text gesucht (nie
ausgezählt). Einstufung: **8 ändern den Bestand** (123, 126, 138, 140,
149, 151, 152, 154), **6 nicht** (121, 122, 139, 150, 153, 155), je mit
Grund. ⚠️ Die Summenprobe 8 + 6 = 14 belegt nur die Vollzähligkeit,
nicht die Richtigkeit der Einstufung — im Dokument ausdrücklich
vermerkt. **Abdeckung Block 79–155 danach: 77 / 77.**

Die inhaltlich schwersten drei:

- **Rn. 138** — die § 3a-Schiene hat **drei** Achsen, nicht zwei:
  Anwendbarkeit (138) · Marktverhaltensregelung (139–142) ·
  Spürbarkeit (143–146).
- **Rn. 151/152** — „großangelegte, unter keinem Zeitdruck stehende
  Werbekampagne" als Verschärfungsgrund; und die zweite Stufe des § 3
  Abs. 2 UWG ist nach der dortigen Begründung **strukturell immer
  erfüllt**, weil die Aussendung ohne die Rechtswidrigkeit „insgesamt
  unterblieben wäre".
- **Rn. 149** — der Durchschnittsverbraucher-Maßstab gilt für die
  **gesamte** Prüfung des § 3 Abs. 2 UWG, nicht nur für seinen
  Wortlaut.

### 1.3 Leseraum Rn. 156–273 — vollständige Auswertung

Alle 118 Randnummern gelesen (Rohbeleg-Zeilen 440–674). Frage je
Abschnitt: „Ändert das eine Zeile der Rechtsmatrix oder des Briefings?"

| Rn.-Bereich | Inhalt in einem Satz | Wirkung |
|---|---|---|
| **156–158** | Die „Vertragszusammenfassung" ist eine eigenständige, formalisierte Information (§ 54 Abs. 3 TKG); Bereitstellung auf der Website genügt nur mit ausdrücklichem Download-Hinweis | **keine** — telekommunikationsspezifisch. *(Der Gedanke „ein Dokument, das der Kunde zurücksendet, kann keine Information dauerhaft bereitstellen" ist über Rn. 154 im Bestand)* |
| **159** | Antrag II: Vorenthalten der TKG-Pflichtinformationen ist unlauter gemäß **§§ 5a Abs. 1, 5b Abs. 4 UWG** | ⭐ **Bestand geändert** — hier taucht die dritte Schiene zuerst auf |
| **160–171** | Warum Art. 3 Abs. 4 UGPRL nicht sperrt: Art. 7 Abs. 5 UGPRL zieht unionsrechtliche Informationspflichten in den UGPRL-Anwendungsbereich; die Liste in Anhang II ist „ausdrücklich nicht erschöpfend" (Rn. 166) | **Bestand geändert** — die Konstruktion trägt auch für die DSGVO (Rn. 227) |
| **172–177** | § 5a Abs. 1 UWG im Wortlaut („Verbraucher **oder sonstigen Marktteilnehmer**"); ⭐ **Beweislastumkehr** (Rn. 176): Die Merkmale sind „im Regelfall erfüllt", der **Unternehmer** muss den Ausnahmefall aufzeigen | ⭐ **Bestand geändert** |
| **178–209** | Antrag III: Schadenersatz-Pauschalklausel im Abdruck der „Vertragszusammenfassung" — unlauter nach § 3 Abs. 2 UWG; Transparenzgebot (§ 307 Abs. 1 S. 2 BGB) und Überraschungsverbot (§ 305c Abs. 1 BGB) | **keine** für unser Vorhaben (AGB-Recht im Verbrauchervertrag). ⚠️ **Ein Satz mit Fernwirkung** (Rn. 187/188): Die Verwendung unwirksamer oder nicht einbezogener AGB gegenüber Verbrauchern ist „im Allgemeinen" schon deshalb unlauter — **Wiedervorlage, sobald unsere Angebots-/Vertragsdokumente Verbraucher erreichen können** |
| **210–220** | Antrag IV: Art.-14-Verstoß festgestellt; ausführliche Auslegung des Klageantrags (der Kläger hatte „nicht innerhalb eines Monats" formuliert) | **keine** — Prozessrecht. ⚠️ Ein Nebensatz ist sachlich relevant (Rn. 220): Art. 14 Abs. 3 lit. b DSGVO gewährt **keine Karenzfrist** zum Nachreichen |
| **221–234** | ⭐ **Antrag IV lauterkeitsrechtlich: §§ 5a Abs. 1, 5b Abs. 4 UWG** — die dritte, eigenständige Schiene; Begründung, warum DSGVO-Informationspflichten „kommerzielle Kommunikation" sind (Rn. 225) | ⭐ **Bestand geändert — der wichtigste Fund dieses Leseraums** |
| **235–246** | Antrag V: Auskunftsverlangen missachtet (Artt. 12 Abs. 3, 15 Abs. 1 DSGVO); **Rn. 237** — ein in der Abmahnung zitiertes Auskunftsverlangen ist „der Sache nach wiederholt"; **Rn. 243** — die Vermutungsregel des § 5b Abs. 4 UWG gilt **nur vor** der Vertragserklärung; **Rn. 244** — danach greifen die allgemeinen Grundsätze | ⭐ **Bestand geändert** (die Geltungsgrenze der Vermutungsregel). Rn. 237 selbst: **bestätigt**, s. u. |
| **247–250** | Wiederholungsgefahr als tatsächliche Vermutung für „identische und kerngleiche" Verstöße (249); Haftung auch über § 31 BGB und **§ 8 Abs. 2 UWG** (250) | ⭐ **Bestand geändert** — § 8 Abs. 2 UWG erfasst **Beauftragte** (Lettershop, Versanddienstleister). Die Dienstleisterfrage ist damit auch eine Lauterkeitsrechts-, nicht nur eine DSGVO-Frage |
| **251–262** | **Antrag VI abgewiesen** — Muster-Widerrufsformular unterhalb der Widerrufsbelehrung auf derselben Seite ist zulässig; Abgrenzung zu OLG Hamm 2 U 211/21 (dort Vorder-/Rückseite) | ⭐ **Bestand geändert (Zitierpraxis):** Das Urteil ist **keine Vollstattgabe**; Kosten nach § 92 Abs. 1 S. 1 ZPO (Rn. 271) |
| **263–269** | Abmahnkosten nach § 13 Abs. 3 UWG: Anwaltskosten sind für Verbände „grundsätzlich nicht erforderlich" — hier **Ausnahmefall**, weil die Fragen „überdurchschnittlich schwierig" waren (Rn. 267) | **Bestand geändert** — ergänzt B2/B3 |
| **270–273** | Ordnungsmittelandrohung § 890 Abs. 2 ZPO; vorläufige Vollstreckbarkeit § 709 ZPO; **Streitwert 74.000 €** (Antrag I nur 22.000 €); Unterschrift | **keine** — bereits im Briefing § 7 geführt |

**Nenner:** 12 Bereiche ausgewiesen, davon **7 mit Bestandsänderung**,
**5 ohne** (davon 2 mit ausdrücklich vermerkter Teil-Relevanz).

**Rn. 237 — Gegenlesung wie beauftragt, kein Bauposten.** Die
Briefing-Aussage („nach Rn. 237 genügt, dass ein Auskunftsverlangen in
einer Abmahnung **zitiert** wird; ein erneutes Verlangen ist nicht
nötig") ist am Rohbeleg **bestätigt**: „Zwar ist in der Abmahnung kein
erneutes Auskunftsverlangen enthalten. Das in dem Schreiben vom
8. August 2023 geäußerte Auskunftsverlangen wird aber in der Abmahnung
- durch Fettdruck hervorgehoben - zitiert und damit zugleich der Sache
nach wiederholt." Rn. 236 und 238 mitgelesen, **kein Gegenbeleg**.
**Prüfstand-Anker dieser Gegenlesung: Rohbeleg-Zeile 602 in
`sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.txt`,
Repo-Stand `af92adb`.** Damit ist die Kette geschlossen: R15-A-Prüfer
(`protokolle/R15-A-pruefer.md` Z. 694) → Prüf-Subagent 17.08. →
R17-A. Der R16-A-Prüfer-Vermerk „nicht geprüft" ist **gegenstandslos**.

### 1.4 Teil 3: Ableitungen nachgezogen

| Posten | Datei | Ergebnis |
|---|---|---|
| 6 | `akquise/interessenabwaegung-o8.md` § 6.2 | Nachtrags-Kasten in vier Ziffern; **Original unverändert stehen gelassen**. Doppelbegründung (Rn. 136/137/147) ergänzt, dritte Schiene ergänzt, Rn.-111-Kurzfassung ergänzt |
| 6 | derselbe, § 11.2 Nr. 7 | Nachtrag: „bzw." ist zu schwach — das Urteil sagt „sowohl … als auch"; die Verbraucherbindung entlastet nur **eine** von drei Schienen |
| 7 | `handel/preismodell-optionen.md` | Rn.-87-Bestandsvermerk als **Zitat** aus dem Rechtsmatrix-Vermerk R16-A (auftragsgemäß nicht neu formuliert), mit dem ausdrücklichen Zusatz, dass der Sperr-Befund als Vorsichtsannahme **in Kraft bleibt** — geändert hat sich die Belegstufe, nicht die Betriebsfolge |
| 8 | `handel/angebotsarchitektur.md` Z. ~251 | O-2-Superlativ **durchgestrichen**, Reparaturkasten mit wörtlicher Vorfassung, Quelle § 6a.6 |
| 8 | derselbe, Träger-Tabelle | Die Bestandsaussage war **zur Hälfte falsch** — s. u. |

**🔧 § 6.2-Prüfauftrag „ist der Satz ‚nicht übertragbar' nach dem Urteil
haltbar?" — Antwort: JA, er hält.** Der Verdacht (Prüf-Subagent
17.08.) war, Rn. 136/147 könnten ihn kippen. Sie kippen ihn nicht: Der
Satz betrifft die **tatbestandliche** Verbraucherbindung, und die ist
für § 3 Abs. 2 UWG am Objekt bestätigt (Rn. 148 Tatbestandswortlaut,
Rn. 149 Durchschnittsverbraucher-Maßstab). Rn. 136/147 sagen nur, welche
Schienen das Gericht im dortigen Fall bejaht hat. **Nachgetragen wurde
deshalb der fehlende Kontext, nicht eine Streichung** — die Aufzählung
ist zusätzlich als **Mindestliste** gekennzeichnet.

**🔧 Zur Superlativ-Träger-Tabelle:** Sie behauptete, der Superlativ
stehe „so noch in `preismodell-optionen.md` § 5.3-Nachtrag **und** im
§ 6-Nachtrag dieses Dokuments". **Die erste Hälfte ist falsch** —
`git log -S "fortwirkt" -- handel/preismodell-optionen.md` = **0
Commits** (die Zeichenkette wurde dort nie eingefügt oder entfernt);
Gegenprobe am heutigen Stand: `grep -c "fortwirkt"` = 0,
`grep -c "nicht selbst verhindern"` = 0. **Positivkontrolle desselben
Zählwegs:** `git log -S "fortwirkt" -- handel/angebotsarchitektur.md`
= **3 Commits** — das Muster greift. Die Tabellenzeile ist korrigiert,
Vorfassung durchgestrichen sichtbar.

### 1.5 Teil 4 + Prüfer-Fundorte 1/6/8

**Briefing** (bleibt **ENTWURF**): § 2.3 zweimal nachgezogen
(Beschluss beschafft · EuGH-DE-Fassung, Sprachfassungs-Annahme am
Objekt geprüft und **bestätigt**), neue **Teilfrage 1c** zur dritten
Schiene, Statusblock um die R17-A-Zeile und den Prüfstand ergänzt.

**Fundort 6 — die sieben SP-Felder, am Objekt gezählt:**
`akquise/sperrdatei-struktur.md` (Abschnitt vor § 3a) nennt für
`ANL-3`-Einträge „**nur** `SP-02`, `SP-03`, `SP-05` bis `SP-08` und
`SP-10` — **niemals** `SP-04`". Das sind SP-02, SP-03, SP-05, SP-06,
SP-07, SP-08, SP-10 = **7**. ✅ **Die Zahl stimmt**, und § 4a Kandidat A
zählt dieselben sieben in Klartext auf (Betriebsname, Postanschrift,
Aufnahme-Anlass, Eingangsweg, Eingangs- und Eintragsdatum,
Beleg-Referenz).
🔧 **Falsch ist der Zusatz in der R16-A-Statuszeile:** „und schließt
**nur** SP-04 (Personenname) und das Grund-Feld aus". Die Quelle
formuliert eine **abschließende Positivliste**; aus ihr fallen auch
SP-01, SP-09 und SP-11 ff. heraus. Ein „schließt nur zwei aus" macht
aus einer engen Positivliste eine weite Erlaubnis. Korrigiert.

**Fundort 8 — Zeichen- und Zeilenenden-Messung vorher/nachher:**

| Datei | Umlaute vorher → nachher | U+00AD | U+00A0 | CR | `ls-files --eol` |
|---|---|---:|---:|---:|---|
| `handel/kanal-rechtsmatrix.md` | 1755 → 2016 | 0 → 0 | 0 → 0 | 0 → 0 | `i/lf w/lf` unverändert |
| `akquise/interessenabwaegung-o8.md` | 1040 → 1120 | 0 → 0 | 0 → 0 | 0 → 0 | dito |
| `handel/preismodell-optionen.md` | 1582 → 1602 | 0 → 0 | 0 → 0 | 0 → 0 | dito |
| `handel/angebotsarchitektur.md` | 1523 → 1543 | 0 → 0 | 0 → 0 | 0 → 0 | dito |
| `handel/anwalts-briefing-2026-08.md` | 1020 → 1106 | 0 → 0 | 0 → 0 | 0 → 0 | dito |

⚠️ **Ein U+2011 (non-breaking hyphen) war eingeschleppt** — aus dem
EuGH-Rohbeleg mitkopiert („C‑621/22" im Briefing-Statusblock, Messung
0 → 1). **Auf ASCII-Bindestrich zurückgesetzt**, weil das Briefing
sonst überall die ASCII-Form nutzt und ein Grep auf „C-621/22" die
Zeile nicht gefunden hätte. Endstand: 0.

**Fundort 1** — die Liste der „17 Zitate" aus `protokolle/R16-A-pruefer.md`
§ 3 ist als Nachtrag in § 6 dieses Protokolls geführt (nicht im alten
Protokoll).

### 1.6 Eigener Zitat-Abgleich (30 Zitate, mechanisch)

Alle in dieser Runde neu gesetzten Zitate wurden per Skript gegen die
Rohbelege geprüft (symmetrische Normalisierung beider Seiten:
NBSP-Varianten, Soft Hyphen, alle Strich-Zeichen → ASCII, typografische
Anführungszeichen, Blockquote-Präfixe je Zeile, Markdown-Fettung,
Whitespace).

**Ergebnis: 30 / 30 bestätigt · Gegenproben 2 / 2** (zwei absichtlich
verfälschte Fassungen wurden korrekt **nicht** bestätigt).

⭐ **Der Lauf hat einen echten Fehler gefangen:** Die Erstfassung des
Rn.-154-Zitats schrieb „nicht bei dem Verbraucher **verbleiben** soll" —
das Original schreibt „**verblieben** soll" (Grammatikfehler im
Original). Eine **stille Glättung**, genau die Klasse, die ein
Zitatabgleich fangen soll. Korrigiert mit sichtbarem
Original-Schreibweise-Hinweis.

⚠️ **Was dieser Abgleich NICHT prüft:** den Fließtext neben den Zitaten
(L-27) und die Zuordnung Zitat ↔ Randnummer. Beides ist dem Prüfer als
eigene Kategorie aufgegeben.

### 1.7 Löschungszählung

`git diff --numstat 926ca3c..af92adb`:

| Datei | + | − |
|---|---:|---:|
| `akquise/interessenabwaegung-o8.md` | 98 | **0** |
| `handel/preismodell-optionen.md` | 29 | **0** |
| `handel/angebotsarchitektur.md` | 25 | **3** |
| `handel/anwalts-briefing-2026-08.md` | 119 | **7** |
| `handel/kanal-rechtsmatrix.md` | 257 | **4** |

**Jede der 14 gelöschten Zeilen einzeln geprüft** (Skript-Gegenprobe:
kommt ihr Text im neuen Stand noch vor?): **13 sind als
durchgestrichene Vorfassung oder erweiterte Zeile erhalten**, **1 ist
bewusst präzisiert** — „Rn. 56 lautet dort:" → „Rn. 56 lautet in der
englischen Fassung:", weil daneben jetzt auch die deutsche steht.
**Kein Bestandssatz still entfernt.**

### 1.8 Zitat-Wächter — Delta je Datei

Beide Läufe an **eingefrorenen Snapshots** (`git archive` in den
Scratchpad), nicht am lebenden Arbeitsbaum — dort schreibt R17-B
parallel am Wächter selbst.

⚠️ **Werkzeugbefund vorab:** Der Wächter im **Arbeitsbaum** ist derzeit
fail-closed rot („Baseline-Gruppe fehlt: `r17-zielaufnahme`") — das ist
der Zwischenstand der laufenden R17-B-Arbeit an
`akquise/pruefe-zitate.js`. **Nicht angefasst** (fremder Scope). Meine
Läufe nutzen den **committeten** Skriptstand.

| Datei | vorher (`90254e1`) | nachher (`af92adb`) | Δ |
|---|---:|---:|---:|
| `handel/kanal-rechtsmatrix.md` | 51 NEU | 94 NEU | **+43** |
| `akquise/interessenabwaegung-o8.md` | 0 | 5 NEU | **+5** |
| `handel/angebotsarchitektur.md` | 0 | 2 NEU | **+2** |
| `handel/preismodell-optionen.md` | *(kein ZIEL)* | *(kein ZIEL)* | — |
| `akquise/akquiseplan.md` · `akquise/listenbau-regelwerk.md` · `fund/wettbewerbsbild.md` · `akquise/sperrdatei-struktur.md` · `akquise/wellenprotokoll-vorlage.md` | 0 | 0 | **0** |

Positivkontrolle 14/14, Gegenprobe 3/3, Blockzitate 3/3 — in **beiden**
Läufen unverändert.

**Einordnung des Deltas:** Der weit überwiegende Teil sind **Urteils-
und Beschlusszitate**, deren Quelltexte in `sensibel/rohbelege-*`
liegen (git-ignoriert, nie im Pool) — **Werkzeugbefund, kein
Belegbefund**; sie bestätigen sich automatisch, sobald R17-B den
Rohbeleg-Pool gebaut hat. **Sieben** Meldungen sind dagegen echte
**EIGEN-Kandidaten** aus meiner Arbeit (s. Block 3, N-5).

---

## Block 2 — Offen geblieben

1. **OLG Düsseldorf I-20 U 107/23 und I-20 U 117/23 nicht beschafft.**
   Dort steht die **begründete** Fassung der Gegenauffassung; der
   Beschluss verweist selbst darauf. Es fehlt das Entscheidungsdatum.
   Suchweg dokumentiert. **Träger: MKT-HANDEL, nächste Runde** — oder
   die Kanzlei über juris/beck-online (im Briefing ausdrücklich
   angeboten).
2. **Ob gegen 38 O 243/23 Berufung eingelegt wurde**, bleibt „nicht
   feststellbar" (unverändert). Der Beschluss von 2024 kann dazu nichts
   sagen.
3. **Die Rechtsfrage der dritten Schiene ist gestellt, nicht
   beantwortet** — Briefing Frage 3, Teilfrage 1c. Diese Session
   beantwortet sie ausdrücklich nicht.
4. **Der Rohbeleg-Pool des Zitat-Wächters** für die Urteilszitate ist
   R17-B-Arbeit; bis dahin bleiben die Rechtsmatrix-Meldungen rot.
   **Nicht mein Scope.**

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

**Pflichtfeld: Welchen benannten Posten erfüllt mein Ergebnis?**

| Benannter Posten | Träger laut Quelle | Status nach dieser Runde |
|---|---|---|
| **R16A-N-8** („zwölf Randnummern nie angekommen", `protokolle/R16-A-abschluss.md`) | MKT-HANDEL, nächste Runde | ✅ **erfüllt — mit Korrektur:** es waren **vierzehn**. Block 79–155 jetzt 77/77 |
| **R16-A-Prüfer-Fundort 3** („Gegenstand von 38 O 17/22 unbekannt") | R16-Nacharbeitsliste | ✅ **erfüllt** — Ordnungsmittelverfahren, Titel Anlage K 7 |
| **R16-A-Prüfer-Fundort 4** („Rn. 156–273 nicht ausgewertet") | dito | ✅ **erfüllt** — vollständige Tabelle in § 1.3 |
| **R16-A-Prüfer-Fundort 7** (C-621/22-Sprachfassung) | dito | ✅ **erfüllt** — DE-Volltext beschafft, Annahme am Objekt bestätigt |
| **R16-A-Prüfer-Fundort 1** („Liste der 17 Zitate") | dito | ✅ **erfüllt** — § 6 dieses Protokolls |
| **R16-A-Prüfer-Fundort 6** (sieben SP-Felder) | dito | ✅ **erfüllt** — Zahl bestätigt, Zusatz korrigiert |
| **R16-A-Prüfer-Fundort 8** (Zeichenmessung vor Massen-Edits) | dito | ✅ **erfüllt** — § 1.5 |
| **R15A-N-4** (Rn.-87-Bestandsvermerk in Ableitungen) | Leitsession | ✅ **erfüllt** für `handel/preismodell-optionen.md` |
| **R15B-N-4** (O-2-Superlative, „zwei Fremd-Dokumente") | Leitsession / Projektquelle § 6a | ⚠️ **teils erfüllt, teils gegenstandslos:** Die Stelle in `handel/angebotsarchitektur.md` ist repariert; **das Preismodell trug den Superlativ nie** (Zählweg oben). **Die Projektquellen-Formulierung „zwei Fremd-Dokumente" ist damit falsch und gehört von der Leitsession korrigiert** — ich darf die Projektquelle nicht anfassen |
| **R16A-N-5** (EIGEN-Ausnahmekandidaten des Zitat-Wächters) | R17-B | ➕ **erweitert um 7 neue Kandidaten** (s. N-5 unten) |

### Die acht Fundorte des R16-A-Prüfers — Bilanz mit Nenner: 8 von 8 disponiert

Der R16-A-Prüfer führte acht Fundorte unter „Nicht erhoben / nicht
prüfbar" — **eine Nacharbeits-Liste, kein Haftungsausschluss** (L-48).
Stand nach dieser Runde:

| # | Fundort | Disposition |
|---:|---|---|
| 1 | Grundgesamtheit „17 Zitate" nicht dokumentiert | ✅ **R17-A** — die R16-Auswahl bleibt nicht rekonstruierbar (das ist der Befund); eigene Erhebung mit offengelegtem Kriterium in § 6, **zwei echte Zitierfehler dabei gefunden und repariert** |
| 2 | Beschluss 20 W 37/24 nicht beschafft | ✅ **R17-A** — beschafft, Volltext, ausgewertet |
| 3 | Gegenstand von 38 O 17/22 unbekannt | ✅ **R17-A** — Ordnungsmittelverfahren, Titel Anlage K 7; Identität der Schreiben bleibt ausdrücklich offen |
| 4 | Rn. 156–273 nicht ausgewertet | ✅ **R17-A** — vollständige Tabelle § 1.3; **der wichtigste Fund der Runde stammt genau von dort** (dritte Schiene). Der R15-A-Prüfer hatte vorhergesagt, dass ungelesene Quellabschnitte Funde tragen (L-48) — **bestätigt** |
| 5 | `akquise/listenbau-regelwerk.md` § 7.1 trägt den Rn.-87-Satz ohne Bestandsvermerk (offener L-25-Fall) | ✅ **von R17-C erledigt, nicht von mir** — nachgeprüft am heutigen Stand: § 7.1 trägt seit `1804b1c` den Bestandsvermerk (Befund R16A-N-1). Die Datei war für mich Sperrgebiet |
| 6 | Sieben SP-Felder nicht am Objekt gezählt | ✅ **R17-A** — Zahl bestätigt, der Ausschluss-Zusatz korrigiert |
| 7 | Rn.-56-Aussage / Sprachfassungs-Annahme offen | ✅ **R17-A** — DE-Volltext beschafft, Annahme am Objekt bestätigt |
| 8 | Zeilenenden/Encoding nicht gemessen | ✅ **R17-A** — vorher/nachher je Datei, ein eingeschlepptes U+2011 dabei gefunden |

**Nenner: 8 von 8 disponiert — 7 durch diese Session, 1 durch R17-C.
Keiner bewusst verworfen, keiner ohne Träger.**

### N-1 · `core.autocrlf=true` ist repo-lokal gesetzt, ohne `.gitattributes`

`git config core.autocrlf` = **true** (lokal; global leer), und es gibt
**keine** `.gitattributes`. Jede Arbeitsbaum-Änderung erzeugt deshalb
die Warnung „LF will be replaced by CRLF the next time Git touches it".
**Nicht von mir verursacht** — die Warnung erscheint identisch bei der
fremden Datei `akquise/pruefe-zitate.js` (R17-B). Index und Arbeitsbaum
stehen aktuell überall auf `i/lf w/lf`.
**Warum das zählt:** Bei einem frischen Clone oder einem Checkout
bekämen die Arbeitskopien CRLF — und der Baustein
`windows-powershell` hält fest, dass CRLF Zeichen-Schwellen verschiebt
(derselbe Blob lieferte 143 vs. 144 Treffer) und dass ein
degeneriertes CR-Muster schon einmal einen Fehlbefund erzeugt hat.
**Empfehlung: `.gitattributes` mit `* text=auto eol=lf`.** Das ist eine
Repo-weite Konfigurationsentscheidung — **Träger: Leitsession**, nicht
diese Session.

### N-2 · Rn. 187/188 — eine Fernwirkung, die uns später trifft

Das Urteil hält fest, die Verwendung nach § 307 Abs. 1 BGB unwirksamer
**oder nicht wirksam einbezogener** AGB gegenüber Verbrauchern sei „im
Allgemeinen" schon deshalb nach § 3 Abs. 2 UWG unlauter, weil solche
Klauseln Verbraucher von berechtigten Ansprüchen abhalten können.
**Für die reine B2B-Aussendung ohne Belang** — aber unsere
Angebots- und Vertragsdokumente (`handel/angebotsarchitektur.md`,
`VK-O2`) sind auf dem Weg in den Kundenkontakt. **Wiedervorlage, sobald
ein Angebot Verbraucher erreichen kann.** Zielort:
`handel/angebotsarchitektur.md` § 6a. **Bewusst nicht selbst
eingearbeitet** — außerhalb meines Auftrags-Scopes für diese Datei
(dort war nur die O-2-Stelle freigegeben).

### N-3 · Rn. 220 — keine Karenzfrist für Art.-14-Informationen

Das Gericht verwirft ausdrücklich die Lesart, der Verantwortliche dürfe
fehlende Art.-14-Informationen binnen eines Monats nachreichen: Das
wäre eine „insoweit von der DSGVO **nicht vorgesehene** Karenzfrist".
**Für unsere Brief-Bauweise unmittelbar relevant** (die
Art.-14-Information muss **im** Brief stehen, nicht nachgereicht
werden). Der Bestand sagt das schon — Rn. 85/87 tragen es —, aber
**dieser Satz ist der klarste Beleg dafür und stand nirgends.**
Zielort: `handel/kanal-rechtsmatrix.md` A7, Abschnitt Art.-14-Pflichten.
**Bewusst nicht eingearbeitet** in dieser Runde: Er ändert keine
Aussage, er stärkt eine vorhandene — und der Kasten ist bereits sehr
lang. **Träger: nächste Rechtsmatrix-Pflege.**

### N-4 · Der EuGH-Rohbeleg trägt eine Werkzeugfalle für alle künftigen Greps

Die deutsche C-621/22-Fassung enthält **34× U+2011** (non-breaking
hyphen) und **306× U+00A0** (NBSP). Eine Suche nach `C-621/22` mit
gewöhnlichem Bindestrich liefert **0** — ein falsches Negativ. Im
Beschaffungsprotokoll vermerkt. **Wer aus dieser Datei zitiert oder in
ihr sucht, muss vorher normalisieren.**

### N-5 · Zitat-Wächter: sieben neue EIGEN-Ausnahmekandidaten aus meiner Arbeit

`akquise/pruefe-zitate.js` gehört R17-B; ich habe es nicht angefasst.
Diese sieben Meldungen sind **keine** Urteilszitate, sondern eigene
Formulierungen oder Selbstzitate — sie gehören in die **Ausnahmeliste**,
nicht in den Pool:

| Fundstelle (Stand `af92adb`) | Text | Art |
|---|---|---|
| `handel/kanal-rechtsmatrix.md` | „das Berufungsgericht sieht es anders" | **eigene Formulierung** (meine Kastenüberschrift, als Redewendung gesetzt) |
| dito | „das Berufungsgericht hält Briefwerbung dieser Art für zulässig" | **bewusst gesperrte Lesart** (der Satz, den man aus Rn. 111 *nicht* ableiten darf) |
| dito | „Doppelbegründung § 3a UWG und § 3 Abs. 2 UWG" | **eigene Bezeichnung** |
| `akquise/interessenabwaegung-o8.md` | „das LG stützt sich auf § 3a UWG" | **bewusst gesperrte Lesart** |
| dito | „über § 3a UWG bzw. § 3 Abs. 2 UWG" | **Selbstzitat aus derselben Datei** (die zitierte Vorfassung von § 11.2 Nr. 7) — der Selbstausschluss `poolTextFuer` verhindert die Bestätigung |
| `handel/angebotsarchitektur.md` | „Sie ist damit die einzige der fünf Bedingungen …" | **Selbstzitat der eigenen Vorfassung** im Reparaturkasten (L-26-Klasse: kann per Konstruktion nie im Pool stehen) |
| dito | „der Kunde — und wir beim Aufsetzen — ‚licensing, copyright, or other notices' nicht entfernen oder verdecken" | **Selbstzitat aus derselben Datei** (§ 6a.6) |

Alle übrigen +43 Meldungen sind Urteils-/Beschlusszitate mit
git-ignoriertem Rohbeleg → **Pool-Kandidaten**, nicht Ausnahmen.

### N-6 · Die Zählweg-Angabe des R16-Abdeckungskastens war korrekt — und trotzdem falsch

Der R16-Kasten beschreibt seinen Zählweg sauber (Ketten- und
Spannenformen, vier Positivkontrollen, Gegenkontrolle `Rn. 999` = 0) —
und kommt trotzdem auf eine falsche Zahl. **Das ist die interessante
Beobachtung:** Ein dokumentierter Zählweg belegt, dass gezählt wurde,
nicht dass richtig gezählt wurde. Die Abweichung betrifft ausgerechnet
**zwei** Randnummern, deren Ziffernfolgen im ganzen Dokument 0-mal
vorkamen — der billigste denkbare Gegencheck (`grep -c "149"`) hätte
sie gefunden. **Kandidat fürs Lehren-Register; Träger: Leitsession
(`/debrief`).**

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **Ein Werkzeug-Negativ überlebt in der Doku als Sachbefund.** Die
   R09-A-Quellenliste führte „deutsche EuGH-Fassung nicht abrufbar"
   als Quellen-Eigenschaft. Tatsächlich fehlte ein `curl -L`. Der
   Befund hat vier Runden lang eine Annahme im Briefing getragen
   („Randnummern-Gleichheit nicht am Objekt prüfbar"), die in fünf
   Minuten widerlegbar war. **Prüffrage: Welchen KANAL hat das Negativ
   gemessen — und hätte der Prüfweg einen vorhandenen Treffer
   überhaupt gefunden?**
2. **Eine delegierte Zahl mit dokumentiertem Zählweg wirkt geprüft.**
   „65 von 77" trug vier Positivkontrollen und eine Gegenkontrolle im
   Text — und war falsch. Der Zählweg belegt, **dass** gezählt wurde.
   (→ N-6.)
3. **Die stille Glättung eines Original-Grammatikfehlers.** „verblieben"
   → „verbleiben": Beim Abschreiben repariert man unbewusst. Nur der
   mechanische Abgleich hat es gefangen (29/30 im ersten Lauf). **Ein
   Zitat wird kopiert, nicht abgeschrieben.**
4. **Ein Zeichen aus dem Rohbeleg wandert mit.** Das U+2011 aus dem
   EuGH-Text landete unbemerkt im Briefing-Statusblock und hätte jeden
   Grep auf „C-621/22" an dieser Zeile scheitern lassen. **Die
   Zeichen-Baseline vorher/nachher hat es gefunden** — sie ist keine
   Formalie.
5. **`node -e` mit Windows-Pfaden unter Bash zerbricht an den
   Backslashes** (zweimal in dieser Session: `C:\Users\…` wurde zu
   `C:Users…`, ein Heredoc verschluckte die Trennzeichen). **Lösung:
   Skriptdatei statt inline, Forward-Slashes im Pfad.** Steht im
   Baustein `windows-powershell` — ich bin trotzdem zweimal
   hineingelaufen.
6. **Ein `cd` im Bash-Kanal verschiebt das Arbeitsverzeichnis für alle
   folgenden Aufrufe.** Nach dem Wechsel in den Rohbelege-Ordner
   scheiterten Repo-relative Greps mit „No such file or directory".
   Ebenfalls im Baustein dokumentiert.
7. **Ein Wächter, der fail-closed rot ist, sagt nichts über den
   Prüfgegenstand.** Der Arbeitsbaum-Lauf meldete „Baseline-Gruppe
   fehlt" — das war der Zwischenstand der Parallel-Session, nicht ein
   Befund über meine Dateien. Wer das als Rot über die eigene Arbeit
   liest, repariert am falschen Ort.
8. **⭐ Der eigene Superlativ in der eigenen Überschrift — im selben
   Commit, in dem ich einen fremden Superlativ repariert habe.** Ich
   schrieb über die dritte Schiene: „*sie ist die **einzige**, deren
   Tatbestand B2B ausdrücklich einschließt*" — an drei Stellen
   (Rechtsmatrix-Überschrift, o8-Nachtrag, Briefing-Teilfrage).
   **Widerlegt am selben Urteil, das ich gerade gelesen hatte:**
   § 3a UWG nennt „die Interessen von Verbrauchern, **sonstigen
   Marktteilnehmern** oder Mitbewerbern" (Rn. 143). Verbrauchergebunden
   ist von den drei Schienen **nur** § 3 Abs. 2 UWG.
   **Warum das lehrreich ist:** Der Superlativ machte den Fund größer,
   und genau deshalb stand er da. Die Runde hatte an Posten 8 einen
   **fremden** Superlativ derselben Bauart repariert („die einzige der
   fünf Bedingungen, die nach der Übergabe fortwirkt") — **die
   angewandte Regel schützt den Text, auf den man sie anwendet, nicht
   den, den man dabei schreibt** (L-49, hier am eigenen Objekt).
   Gefunden bei der Selbstprüfung **vor** dem Prüferlauf; an allen drei
   Stellen korrigiert, Vorfassung sichtbar. **Prüffrage, die es gefunden
   hat: „Steht in meinem eigenen neuen Text ein ‚einzige/nur/immer', und
   habe ich die anderen Fälle gezählt?"**

### (ii) Bewährte Muster

1. **Erst die Volltexte sichern, dann arbeiten.** Der eigene
   Quellen-Anker machte jeden der 30 Zitat-Belege in einem Skriptlauf
   prüfbar — und fing dabei einen echten Fehler. Ohne ihn wäre die
   Glättung durchgegangen.
2. **Die Positivkontrolle im selben Lauf entscheidet, ob ein Negativ
   ein Befund ist.** Bei der NRWE-Suchmaske war sie der ganze Unterschied
   zwischen „der Beschluss ist nicht veröffentlicht" (falsch, und der
   Auftrag hätte diese Antwort akzeptiert) und „der Kanal misst nichts"
   (richtig). Der Beschluss lag zwei Aufrufe später vor.
3. **Die Zeichenklasse in die Kontrolle nehmen.** `§ 3 Abs. 2` = 0 wäre
   für sich wertlos gewesen; erst `§ 890` = 2 **im selben Lauf**
   schließt das Entity-Artefakt aus.
4. **Zwei unabhängige Lesekanäle für ein überraschendes Negativ.** Dass
   Rn. 149/150 fehlten, kam aus dem Rn.-Muster — bestätigt wurde es
   durch die reine Ziffernsuche über das ganze Dokument. Erst der
   zweite Kanal macht daraus einen belastbaren Befund.
5. **Die Löschungszählung als Skript-Gegenprobe, nicht als Blick.** „13
   von 14 gelöschten Zeilen sind im neuen Stand noch auffindbar" ist
   eine Aussage, die man messen kann — und die genau eine Zeile übrig
   lässt, über die man dann nachdenkt.
6. **Werkzeugläufe an eingefrorenen Snapshots.** `git archive <hash>`
   in den Scratchpad kostet Sekunden und macht den Wächter-Lauf
   unabhängig davon, was zwei Parallel-Sessions gerade in den
   Arbeitsbaum schreiben.
7. **Den Auftrags-Prüfverdacht ergebnisoffen behandeln.** Der Auftrag
   fragte, ob der Satz „nicht übertragbar" nach dem Urteil noch hält,
   mit der Vorgabe „wenn nein: streichen". Er hält — und die richtige
   Antwort war, das zu belegen und den fehlenden Kontext zu ergänzen,
   statt der erwarteten Richtung zu folgen.

---

## Block 5 — Prüfer-Laufstatus

*(wird nach dem Prüferlauf ergänzt)*

---

## § 6 — Nachtrag zu Prüfer-Fundort 1: die Grundgesamtheit der R16-A-Zitate

Der R16-A-Prüfer beanstandete zu Recht: „Die Grundgesamtheit ‚17
Zitate' ist im eingefrorenen Prüfstand nicht dokumentiert … welche
Stellen als ‚Zitat' gezählt wurden, ist nicht feststellbar."
**Nacharbeit laut Fundort 1: Liste mit Datei, Randnummer und Achse.**

### 6.1 Was ich rekonstruieren konnte — und was nicht

⚠️ **Die R16-Auswahl selbst ist nachträglich NICHT rekonstruierbar.**
Das ist kein Formfehler, sondern der Kern des Befundes: Ohne
festgehaltene Liste lässt sich nicht feststellen, **welche** 17 Stellen
gemeint waren. Was ich stattdessen liefern kann, ist eine **eigene
Erhebung mit offengelegtem Kriterium** — sie beantwortet dieselbe
Sachfrage („sind die neu gesetzten Zitate byte-treu?"), ohne die
R16-Zahl zu bestätigen oder zu widerlegen.

**Kriterium (offengelegt, damit es prüfbar ist):** alle Textstellen in
deutschen Anführungszeichen mit **mindestens 25 Zeichen**, die im
R16-A-Delta der Rechtsmatrix (`git diff 4b5bcc2..ed9bbdf --
handel/kanal-rechtsmatrix.md`) **neu hinzugekommen** sind.
Normalisierung symmetrisch auf beide Seiten; Ellipsen (`…`) als
Teilstück-Trenner, jedes Teilstück ab 20 Zeichen muss einzeln treffen.

**Ergebnis: 35 Kandidaten · 21 am LG-Rohbeleg bestätigt · 14 nicht.**

⚠️ **Die Zahl 21 ist NICHT „die 17 plus vier".** Mein Kriterium ist
mechanisch und fängt auch Kurzzitate von 25–40 Zeichen, die R16-A
womöglich gar nicht als „Zitat" gezählt hat. **Ein Nenner-Vergleich
zwischen 17 und 21 ist deshalb unzulässig** — genau deswegen war die
fehlende Liste ein Befund.

### 6.2 Die 21 bestätigten Urteilszitate (Datei · Randnummer · Achse)

Alle in `handel/kanal-rechtsmatrix.md`; Quelle durchgehend
`sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.txt`. Achse:
**W** = Wortlaut am Rohbeleg bestätigt · **F** = Randnummer
**maschinell am Rohbeleg gesucht**, nicht aus dem Bau-Text übernommen
(Skript: Zitat im Volltext suchen, dann die Randnummer am Zeilenanfang
derselben Zeile lesen). **19 Zuordnungen geprüft, 19 bestätigt** — die
21 Zitate enthalten zwei Dubletten (#6/#14 Kurz- und Langfassung
desselben Rn.-136-Satzes, #16/#18 desselben Rn.-148-Satzes), die
zusammen geprüft wurden.

**Beleg der Zuordnungs-Methode (weil sie selbst ein Werkzeug ist):**
Das Skript liest die Randnummer am **Zeilenanfang** derselben Zeile.
Ob das trägt, ist messbar: Von **274** Zeilen mit führender Zahl bilden
**273** die **lückenlose, aufsteigende Folge 1…273** — genau die
Randnummern des Urteils. **Genau eine** Zeile ist eine
Pseudo-Randnummer: Zeile 55, das Aktenzeichen „38 O 243/23" im Rubrum,
das als „Rn. 38" gelesen würde. **Keine meiner 19 Zuordnungen liegt
dort.** Damit ist die Methode belegt *und* ihre einzige Fehlerquelle
benannt.

⚠️ **Drei Zitate sind im Urteil nicht eindeutig verortet** — der
Wortlaut kommt mehrfach vor. Die im Bau gewählte Zuordnung ist jeweils
die richtige, aber sie ist es nicht **allein durch den Wortlaut**:
#1 „spätestens mit diesem Schreiben" auch in **Rn. 211** ·
#16/#18 „geschäftliche Handlungen, die sich an Verbraucher richten oder
diese erreichen" auch in **Rn. 186** · #7 „zum Zwecke des
Providerwechsels" im **Tenor** und zusätzlich in **Rn. 13/14**. Wer
solche Zitate prüft, prüft die Fundstelle am Kontext, nicht am Treffer.

| # | Zitat (Anfang) | Rn. | Achse |
|---:|---|---|---|
| 1 | „spätestens mit diesem Schreiben" | 85 | W · F |
| 2 | „schon deshalb nicht erfüllt" | 84 | W · F |
| 3 | „Verstößen gegen Artt. 12,14 und 21 DSGVO" *(Schreibweise ohne Leerzeichen wie im Original)* | 86 | W · F |
| 4 | „in der gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden und deshalb rechtswidrigen Verarbeitung der Daten des Verbrauchers" | 125 | W · F |
| 5 | „Darüber hinaus liegen die Voraussetzungen von Art. 6 Abs. 1 Unterabs. 1 Buchstabe f DSGVO deshalb nicht vor …" | 88 | W · F |
| 6 | „Es kann offenbleiben, ob im Allgemeinen in erster Linie § 3a UWG … heranzuziehen ist …" *(gekürzte Fassung)* | 136 | W · F |
| 7 | „Verbraucher zum Zwecke des Providerwechsels … postalisch anzuschreiben" | Tenor | W · F |
| 8 | „auch in Ansehung der abweichenden Auffassung" | 111 | W · F |
| 9 | „beiläufig … nicht tragenden Erwägung" | 111 | W · F |
| 10 | „von dem Oberlandesgericht" | 111 | W · F |
| 11 | „Landgericht Düsseldorf 38 O 245/23 = Oberlandesgericht Düsseldorf 20 W 87/23" | 45 | W · F |
| 12 | „den von der Beklagten in ihrem Schriftsatz vom 5. November 2025 angeführten Äußerungen des Oberlandesgerichts Düsseldorf" | 47 | W · F |
| 13 | „mitgeteilt worden sein soll" | 111 | W · F |
| 14 | „Es kann offenbleiben … als nach dem nationalen Recht speziellere Norm …" *(Langfassung)* | 136 | W · F |
| 15 | „Die gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden geschäftlichen Handlungen sind außerdem gemäß § 3 Abs. 2 UWG unlauter." | 147 | W · F |
| 16 | „Nach § 3 Abs. 2 UWG sind geschäftliche Handlungen, die sich an Verbraucher richten oder diese erreichen, unlauter …" | 148 | W · F |
| 17 | „mehreren gegen die Beklagte geführten Verfügungsverfahren" | 124 | W · F |
| 18 | „geschäftliche Handlungen, die sich an Verbraucher richten oder diese erreichen" *(Kurzform von #16)* | 148 | W · F |
| 19 | „auch Verbraucher erreichende" | 130 | W · F |
| 20 | „bezwecken … auch den Schutz der betroffenen Person in ihrer Stellung als Marktteilnehmer" | 142 | W · F |
| 21 | „eine massenhaft verbreitete Werbeaussendung betroffen ist" | 146 | W · F |

### 6.3 Die 14 nicht bestätigten — und zwei davon sind echte Befunde

**Zwölf sind erwartbar und richtig so:** eigene Formulierungen
(„Belegkraft des Belegs selbst"), bewusst gesperrte Lesarten
(„das OLG Stuttgart liegt falsch", „bei B2B greift § 3a erst recht",
„trägt § 3a UWG auch ohne Verbraucherbezug?"), Selbstzitate der eigenen
Vorfassung („zu genau diesem Werbeschreiben", „Rechtskraft nicht
geprüft"), Überschriften, Messwert-Angaben und eine Paraphrase — sie
stehen fast alle bereits in der R16-A-Liste N-5 der EIGEN-Kandidaten.
Ein weiterer ist ein **Werkzeug**-Fall: „allein das Verhältnis zwischen
Mittbewerbern betreffende[…] Regelungen" nutzt `[…]` als
Auslassungszeichen, das mein Normalisierer nicht als Trenner kennt —
**kein Befund über das Dokument.**

**🔧 Zwei sind echte Zitierfehler und in dieser Runde repariert:**

1. **`handel/kanal-rechtsmatrix.md`, Rn.-111-Belegstufentabelle:**
   „vorläufig**en** Beratungsergebnis" — das Original schreibt
   „vorläufig**es** Beratungsergebnis" (Rn. 111). Die Endung war still
   an den eigenen Satzbau angepasst worden. **Repariert** zu
   „vorläufige[n]" mit sichtbarer Klammer und Vermerk.
   *Schwere: Hinweis* — die Aussage ändert sich nicht, die Zitatform
   schon.
2. **`handel/anwalts-briefing-2026-08.md`, § 2.3 Tenor-Absatz:**
   „**bei einem Dritten** erhoben" — im Original stehen dazwischen drei
   Wörter: „bei einem Dritten **zu dem Zweck** erhoben hat, diese
   personenbezogenen Daten … zur Anbahnung einer Geschäftsbeziehung mit
   dem Verbraucher zu verwenden". **Auslassung ohne Ellipse.**
   *Schwere: mittel* — und zwar in der unbequemen Richtung: Der
   vollständige Tenor knüpft an eine **Zweckrichtung** an, nicht nur an
   die Datenherkunft. Das ist für unsere eigene Frage („ist eigene
   Recherche ein Erheben ‚bei einem Dritten'?") ein zusätzlicher
   Prüfpunkt, den die verkürzte Fassung unsichtbar machte.
   **Repariert**, beide neuen Teilzitate am Rohbeleg bestätigt (3/3,
   Gegenproben 2/2).

⭐ **Das ist der eigentliche Wert von Fundort 1:** Nicht die Liste, die
der Prüfer wollte — sondern dass die Suche nach ihr zwei ungenaue
Zitate gefunden hat, von denen eines in einem Dokument steht, das an
einen Anwalt gehen soll.
