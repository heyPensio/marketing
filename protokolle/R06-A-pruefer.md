# R06-A — Unabhängiger Prüferlauf (10.08.2026, Prüfgegenstand `cd90fb9`)

> **Rolle:** unabhängiger Prüfer mit frischem Kontext. Die geprüfte Arbeit
> stammt nicht von dieser Session; nichts wurde auf Zusage übernommen.
> **Schreibrechte:** ausschließlich diese Datei. `fund/wettbewerbsbild.md`
> wurde **nicht** verändert, die Rohbelege **nicht** angefasst, nichts
> committet.
>
> **Ergebnis in einem Satz:** Die Substanz von B10/B11 trägt — die Antwort
> auf P15 („Funktion besetzt, Kategorie existiert nicht") und der
> Strukturbefund aus P19 halten der Nachprüfung stand. **Zwei Befunde
> müssen vor dem Weiterverwenden repariert werden** (falsche
> Kategorien-Tabelle in B10.1, unbelegte Steuerbasis bei den
> iiQ-Check-Tarifen), acht weitere sind wichtig.

---

## 0. Was ich gelesen und wie ich geprüft habe

**Dokument:** `fund/wettbewerbsbild.md` **vollständig** gelesen (3.120
Zeilen, in sechs Leseblöcken) — nicht nur der Diff. Damit abgedeckt:
Kopf · § 0 / § 0.0 · §§ 1–6 · § 7 (Punkteliste) · § 8
(Änderungsprotokoll) · Teil-B-Kopf · B1 · B2 (inkl. L-B1…L-B8) ·
B3–B9 · B10 · B11.

**Rohbelege (selbst gelesen, nie über eine Zusammenfassung):**
- `sensibel\rohbelege-R05-A\a2\raw_partner.html` (Brandnamic-Partnerkreis)
- `sensibel\rohbelege-R05-A\a2\` (112 Dateien mit Kohl-&-Partner-/Belvita-Treffern, u. a. `uniq_kooperationsgruppen.txt`)
- `sensibel\rohbelege-R06-A\p15\` (alle Dateien zu straiv, flexipass, hoteldoor, iiq check)
- `sensibel\rohbelege-R06-A\p19\` (alle Dateien zu AKZENT, IHA, IDM, Strafinger, SHH, PCH, GastroSuisse, hotelier.de, Wikipedia, TMA)

**Werkzeuge und Zählwege.** Eigene Node-Skripte im Scratchpad (nicht im
Repo), Windows-Pfade, jede Zählung an der Rohdatei — nicht am
`.txt`-Derivat, wo die Markup-Struktur die Aussage trägt. Konkret:
- Partnerkreis: **eigene** Extraktion über `MOD-Partner__title` /
  `MOD-Partner__item` / `data-gtm-label` mit Zuordnung nach
  Dokumentposition (nicht die Regex aus B10.1 nachgespielt).
- Tarif-Merkmale iiQ: Segmentierung an `<h3 class="iiq-plan-name">`,
  Zählung von `<li class="yes">` / `<li class="no">` **je Plan**.
- AKZENT-Summen: alle 21 Einzelposten aus dem Rohtext übernommen und
  **selbst addiert** (nicht die Probe des Papiers nachgelesen).
- Dubletten-Prüfung der Rohbelege per SHA-256 über alle `p15`-HTML-Dateien.
- Repo-weite Greps auf `P15`, `P19`, `flexipass`, `hoteldoor`, `iiq`,
  `Kooperation`, `Belvita`, `Familienhotels`, `Heim Hotelmarketing`,
  `AKZENT`, `Strafinger`, `L-B8`, `~70`, `Branchenpartner`,
  `Institutionelle`.

**Positivkontrollen** liefen je Prüfkanal mit einem Begriff, der treffen
MUSS (Tabelle in § 4). Bei Extraktionen prüfte die Kontrolle die
**Vollständigkeit des Ergebnisses**, nicht die Erreichbarkeit der Quelle.

### Was ich NICHT prüfen konnte (eigenes Ergebnis, nicht zu „unauffällig" geglättet)

1. **Die HTTP-Statuszeilen der vier Kontrollabrufe** (`/zzz-r06a-kontrollpfad`)
   sind nicht archiviert — es gibt `ctrl404_*.html`, aber keine
   `hdr_ctrl404_*`-Dateien. Prüfbar war nur der **Body** und die
   **Byte-Länge** (siehe § 3, Befund K-15).
2. **Ob die Live-Seiten heute noch so aussehen.** Alle Befunde sind gegen
   die archivierten Rohabzüge geprüft, nicht gegen das Netz — auftrags-
   und regelkonform (Rohbelege sind der Nachprüfweg, P20).
3. **Die Trägerschaft der fünf Südtiroler Verbünde** außer Belvita/
   Familienhotels — dazu liegt kein Rohbeleg vor; das Papier führt sie
   selbst als „nicht erhoben" (B11.6). Kein Befund gegen das Papier.
4. **Die R05-A-Belege außerhalb von `a2`** (B4–B9) habe ich nicht
   nachgezählt — sie waren nicht Prüfgegenstand. Die Entlastung in § 6
   gilt ausdrücklich **nicht** für B1–B9.
5. **`protokolle/R05-A-fundstellen.md` und der Papier-Kasten
   `positionierungspapier.md` § 6** wurden nicht gegengelesen; die
   Einstufungen in B10.3/B11.6 stützen sich auf L-B1/L-B4-Verweise
   dorthin, die ich nicht an der Quelle geprüft habe.

---

## 1. Kritisch — vor dem Weiterverwenden zu reparieren

### K-1 · B10.1 — Die Kategorien-Tabelle ist falsch: sieben Kategorien, nicht sechs

**Fundstelle:** B10.1 Punkt 2 (Tabelle „Kategorie (Wortlaut Brandnamic) |
Einträge") sowie **B10.2 Punkt 1** und der Korrektur-Absatz „**Korrektur
an R05-A**" darunter.

**Was behauptet wird:** „78 Logo-Einträge / 76 verschiedene
Anbieter-Domains … in **sechs** Kategorien mit diesen **wörtlichen**
Überschriften", darunter „Branchenpartner | **8**". Und im Absatz
darunter als Entwarnung: „**Die Kategorien stimmen**, die Zahl ist mit
78/76 zu präzisieren." B10.2 Punkt 1 baut darauf auf: „Die **sechs**
Kategorien sind technische Schnittstellen-Klassen (PMS, CM/BE, Zahlung,
POS, Weitere, Branchenpartner)."

**Was der Rohbeleg sagt** (`sensibel\rohbelege-R05-A\a2\raw_partner.html`,
eigene Extraktion): Das Partner-Modul enthält **sieben**
`MOD-Partner__title`-Blöcke:

| # | Wortlaut der Überschrift | Einträge (eigene Zählung) |
|---|---|---|
| 1 | `PMS Schnittstellen` | 25 |
| 2 | `CM &amp; Booking Engine Schnittstellen` | 13 |
| 3 | `Zahlungsanbieter Schnittstellen` | 18 |
| 4 | `POS Schnittstellen` | 2 |
| 5 | `Weitere Schnittstellenpartner` | 12 |
| 6 | `Branchenpartner` | **6** |
| 7 | **`Institutionelle Partner `** (mit Leerzeichen am Ende) | **2** (`hds-bz.it`, `hgj.it`) |

Summe 78 ✔. Die im Papier ausgewiesene Zeile „Branchenpartner | 8" ist
die **Addition zweier getrennter Kategorien** — eine siebte Überschrift
existiert im Markup und fehlt in der als „wörtlich" ausgewiesenen
Tabelle.

**Warum das kritisch ist — drei Gründe:**
1. Die Tabelle ist ausdrücklich als **nachgezählt und positivkontrolliert**
   ausgewiesen („Der Partnerkreis selbst wurde am Rohbeleg nachgezählt,
   nicht aus der R05-A-Prosa übernommen"). Eine Messung, die eine
   Alt-Angabe **bestätigt** und dabei selbst falsch ist, ist gefährlicher
   als eine unterlassene Messung.
2. **„Die Kategorien stimmen" ist eine Entwarnung ohne Deckung** — genau
   die Fehlerklasse, die CLAUDE.md benennt („bestätigt"/„unverändert"
   sind Entwarnungen mit voller Belegpflicht). Sie stimmen nicht.
3. **Dasselbe Papier trägt diesen Fehler schon einmal:** Der
   R05-A-Prüferlauf korrigierte in B8.4 die Apaleo-Store-Kategorien
   **7 → 9**, Ursache laut Änderungsprotokoll „eine Positivkontrolle, die
   nur prüfte, **ob** die Nutzlast gefunden wurde, nicht **ob die Liste
   vollständig extrahiert** war". Hier wiederholt sich die Klasse — die
   Positivkontrolle in B10.1 prüft die vier **gesuchten Namen**, nicht
   die Vollzähligkeit der **Kategorienliste**.

**Erschwerend:** Die R05-A-Prosa in **B4.3 (Zeile „~70 Partner in sechs
Kategorien")** nennt die letzte Rubrik selbst „Branchen-/**institutionelle**
Partner" — der Doppelname stand also bereits im eigenen Bestand und hätte
die Prüffrage ausgelöst.

**Reparaturvorschlag:**
- Tabelle in B10.1 um die siebte Zeile ergänzen, `Branchenpartner` auf
  **6** korrigieren, `Institutionelle Partner` **2** aufnehmen.
- „sechs" → „**sieben** Kategorien" in B10.1 **und** B10.2 Punkt 1.
- Den Satz „Die Kategorien stimmen" ersetzen durch: „Die
  Kategorie-**Namen** von R05-A stimmen bis auf die letzte Rubrik: R05-A
  fasst `Branchenpartner` (6) und `Institutionelle Partner` (2) zu
  ‚Branchen-/institutionelle Partner' zusammen; am Markup sind es zwei
  getrennte Überschriften."
- Sachlich unberührt bleibt die Antwort auf P15: auch die siebte Rubrik
  ist **keine** Check-in-/Zutritts-Kategorie. Diesen Satz ausdrücklich so
  stehen lassen, damit die Korrektur nicht mehr entwertet als nötig.

---

### K-2 · B10.4 — „alle zzgl. MwSt." bei den iiQ-Check-Tarifen ist am Rohbeleg nicht belegt

**Fundstelle:** B10.4 Punkt 1 („⭐ Ein harter Preisanker für MKT-HANDEL").
Weitergereicht nach **B11.8 → MKT-HANDEL** und **§ 7 P19/P17**.

**Was behauptet wird:** „iiQ-Check veröffentlicht vier Tarife
(`iiq-check.de/preise`, Stand 10.08.2026, **alle zzgl. MwSt.**)".

**Was der Rohbeleg sagt** (`sensibel\rohbelege-R06-A\p15\sub_www_iiq-check_de_preise.html`
und `.txt`): Auf der Preisseite kommen **`MwSt` 0 · `Mehrwertsteuer` 0 ·
`Umsatzsteuer` 0 · `netto` 0 · `brutto` 0 · `USt` 0 · `Steuer` 0**
Treffer vor. Das einzige „zzgl." auf der Seite steht **viermal** und
bezieht sich ausschließlich auf die Einrichtungsgebühr:
`zzgl. <strong>399,00 €</strong> einmalige Einrichtung` (analog 599/799/799).

**Gegenprobe über den ganzen iiQ-Bestand** (5 Seiten, je mit
Positivkontrolle „iiQ" 7–14 Treffer): `MwSt`/`Mehrwertsteuer`/
`Umsatzsteuer` **0 Treffer auf allen Seiten**. Der einzige Steuerbezug
im gesamten Bestand steht im Impressum („USt-ID-Nr.: DE266379115",
„Steuernummer: 21/204/42309") — eine Registerangabe, keine Preisangabe.

**Warum das kritisch ist:**
1. **Es ist eine hinzugefügte Kondition, keine übernommene.** Die Zahl
   geht als „harter Preisanker" an MKT-HANDEL; eine falsch angenommene
   Netto-Basis verschiebt jeden darauf gebauten Vergleich um 19 %.
2. **Doppelmaßstab im eigenen Papier.** B6.1 rügt exakt diesen Fehlertyp
   („Eine Dossier-Zeile ‚Smart Host: 399 €/M' **ohne** Zimmerzahl-,
   Modul- und **Steuerbezug** ist irreführend") und weist dort die
   Steuerbasis korrekt als „öffentlich nicht bestimmbar" aus, mit
   Zählweg. B9.1 zog denselben Vorbehalt für die DEHOGA-BW-Eigenanteile
   nach (Prüferbefund R05-A). Bei iiQ-Check läuft es umgekehrt: Der
   Vorbehalt wird nicht weggelassen, sondern **durch eine Angabe
   ersetzt, die die Quelle nicht macht.**
3. Der **AKZENT**-Anker in B11.5 trägt „zzgl. MwSt." zu Recht — die
   Quelle sagt dort wörtlich „Monatlich (zzgl. MwSt.)". Die Nachbarschaft
   der beiden Anker macht die Verwechslungsgefahr größer, nicht kleiner.

**Vermutliche Auslösung** (Hypothese, § 7): Das seitenweit vorhandene
„zzgl." (Einrichtungsgebühr) wurde zu „zzgl. MwSt." vervollständigt.

**Reparaturvorschlag:** In B10.4 Punkt 1 ersetzen durch: „**Die
Steuerbasis nennt die Quelle nicht** (Zählweg: `MwSt`/`Mehrwertsteuer`/
`Umsatzsteuer`/`netto`/`brutto` je 0 Treffer über fünf iiQ-Seiten;
Positivkontrolle „iiQ" 7–14 je Datei ✔). Das ‚zzgl.' der Seite bezieht
sich auf die **Einrichtungsgebühr**, nicht auf Umsatzsteuer." Denselben
Vorbehalt in **B11.8** an die MKT-HANDEL-Zeile hängen.

---

## 2. Wichtig

### W-3 · B10.2 — Pseudo-Zitat bei flexipass (aus zwei Sätzen zusammengesetzt)

**Fundstelle:** B10.2, Tabellenzeile **flexipass**, Spalte „Was er laut
eigener Primärquelle verkauft".

**Was behauptet wird** (in Anführungszeichen, also als wörtlich gesetzt):
„Wallet Keys, Webkeys and Mobile Keys in a single platform".

**Was der Rohbeleg sagt** (`…\p15\raw_flexipass_tech.html`, ein Treffer
für „single platform"):
> „FlexiPass enables **Web Keys, Wallet Keys, and Mobile Keys** in a
> single platform, with seamless integration into your existing hotel
> infrastructure."

Die zitierte Reihenfolge **und** die Schreibweise „Webkeys" stammen aus
einem **anderen** Satz derselben Seite (Headline: „…OUR WALLET KEYS,
WEBKEYS AND MOBILE KEYS OFFER A SEAMLESS AND SECURE CHECK-IN
EXPERIENCE."). Das gesetzte Zitat ist die Verschmelzung beider —
Reihenfolge getauscht („Web Keys" steht in der Quelle **vorn**),
Schreibweise gewechselt, Oxford-Komma entfernt.

**Warum das zählt:** Das Papier markiert den *anderen* Splice auf
derselben Domain ausdrücklich („Der Satz steht im Markup auf zwei
Textknoten verteilt …") — hier fehlt jede Markierung. Nach CLAUDE.M
gilt: jedes als wörtlich gesetzte Zitat trägt seinen Anker an der
Rohquelle; ein aus zwei Sätzen gefügtes Zitat ist für jeden Prüfer ein
Pseudo-Zitat (L-01). Sachlich ist die Aussage richtig — das macht es
nicht besser, sondern erklärt nur, warum es niemandem auffiel.

**Reparatur:** wörtlich übernehmen — „FlexiPass enables Web Keys, Wallet
Keys, and Mobile Keys in a single platform" — oder ohne
Anführungszeichen paraphrasieren.

---

### W-4 · B2 / B10.3 — L-B8 wurde eingeführt, aber der Bestand nicht rückwirkend dagegen geprüft

**Fundstelle:** B2, Vergabelinie **L-B8 (Geografie-Linie)**; erstmals
vergeben in B10.3 (hoteldoor → N).

**Was fehlt:** CLAUDE.md-Kernregel: „⭐ Eine frisch geschriebene Regel
schützt nur künftigen Code — der **BESTAND** wird im selben Zug
rückwirkend gegen sie durchsucht, beginnend mit dem Artefakt, das die
Regel ausgelöst hat." Weder B2 noch B10.3 noch das Änderungsprotokoll
dokumentieren einen solchen Rücklauf. Das Papier führt diesen
Prüfschritt an anderer Stelle vorbildlich durch (L-B7 → „Zwei Anbieter
sind deshalb auf ‚—' korrigiert", B5.1) — hier fehlt er ersatzlos.

**Konkreter Kandidat, den ich beim Durchgehen gefunden habe:**
**Roommatik (ES)** in **B7.2**, dort eingestuft als **W1 + K**. Das ist
der einzige Eintrag im gesamten Teil B mit Sitz außerhalb DACH/Südtirol.
An L-B8 gemessen wäre zu prüfen, ob sein **eigener Marktauftritt**
(Sprachfassungen, Reichweiten-Aussage, Referenz-/Partnerlisten) auf den
DACH-Raum zielt. **Mein Prüfergebnis dazu ist offen, nicht negativ:**
B7.2 vermerkt ein an uns gerichtetes „offenes **Vertriebs-Angebot**
(Agent/Distributor)" — das ist ein Indiz für einen DACH-Auftritt und
würde die Einstufung eher **halten** als kippen. Aber die Prüfung ist
nicht dokumentiert, und L-B8(b) („ein N nach L-B8 ist kippbar") verlangt
genau diese Sichtbarkeit.

Die Südtirol-Fälle der Bestandstabellen (Plaschke, 99tales in B4.1;
flexipass in B10.3) sind durch L-B8(a) ausdrücklich gedeckt — dort
besteht **kein** Widerspruch.

**Reparatur:** In B2 unter L-B8 einen Satz ergänzen: „Rückwirkende
Bestandsprüfung 10.08.2026: Einziger Kandidat außerhalb DACH/Südtirol im
Teil-B-Bestand ist **Roommatik (ES, B7.2, W1 + K)**; die Einstufung
bleibt, weil ein an DACH gerichtetes Vertriebsangebot belegt ist
(B7.2) — Südtiroler Anbieter sind nach L-B8(a) ohnehin nicht betroffen."

---

### W-5 · Fehlender Vorwärtsverweis: Teil A § 5.4 „von zwei Seiten getroffen" — flexipass ist die dritte

**Fundstelle:** Teil A **§ 5.4** (Überschrift: „Säule 4 ‚Individuelle
Zutrittswege ohne Kartensystem-Zwang' — **von zwei Seiten getroffen**")
gegen **B10.3** („flexipass | Technik-Wettbewerber (Zutritt; **trifft
USP-Säule 4 direkt**)").

**Befund:** `grep -in flexipass` über die ganze Datei liefert **keinen
einzigen Treffer vor Zeile 1259** — flexipass kommt in Teil A nirgends
vor. B10.3 stuft ihn aber als Technik-Wettbewerber auf genau der Säule
ein, deren Teil-A-Abschnitt eine **abzählbare** Aussage in der
Überschrift trägt („von zwei Seiten"). Die Zahl ist durch den neuen
Befund überholt, und der Leser, der bei § 5.4 ankommt, erfährt es nicht.

Der Nachtrag in § 0.0 deckt das **nicht** ab: Er sagt, B10 erhebe vier
Anbieter des Partnerkreises und zwei davon gehörten nicht ins
Technik-Segment — nicht, dass einer davon ein **neuer**
Säule-4-Wettbewerber ist.

**Reparatur:** Vorwärtsverweis-Kasten an § 5.4: „➡️ **Ergänzt durch B10.3
(R06-A, 10.08.2026):** Ein dritter Anbieter trifft diese Säule —
**flexipass** (Meran/IT), digitale Schlüssel für **bestehende**
Schließanlagen (‚Works with existing door locks'), Check-in ausdrücklich
nur über Partner. Die Überschrift ‚von zwei Seiten' beschreibt den Stand
R03-D." Zusätzlich erwägen, flexipass in § 3.4 als Neufund zu führen —
sonst bleibt ein Technik-Wettbewerber dauerhaft nur im Beratungsteil
dokumentiert.

---

### W-6 · Verdichtungsverlust über drei Stufen: der Strukturbefund verliert seinen Vorbehalt

**Fundstellen:** B11.3 → § 7 (P19-Zeile) → § 8 (Änderungsprotokoll).
Geprüft wurde **gegen das Detailkapitel derselben Datei**, nicht gegen
die Erinnerung.

| Stufe | Wortlaut | Vorbehalt |
|---|---|---|
| **B11.3 (Detail)** | „in **drei von vier geprüften Fällen**"; dazu ⚠️ „**Geltungsgrenze dieses Satzes:** Er gilt für die drei geprüften Fälle. Ob er für Ringhotels, Flair, GreenLine usw. gilt, ist **nicht erhoben** (P21). Und AKZENT zeigt sofort die Gegenvariante" | vollständig |
| **§ 7, P19-Zeile** | „in drei von vier geprüften Fällen führt eine Marketing-Agentur/Beratung den Verbund … — **der Kanal gehört überwiegend dem Wettbewerb**" | Nenner ja, Geltungsgrenze **weg** |
| **§ 8, Änderungsprotokoll** | „Strukturbefund **‚Verbünde werden von Wettbewerbern geführt'**" | **kein Vorbehalt, kein Nenner** — eine universelle Aussage |

Die dritte Stufe ist eine Aussage über *Verbünde* schlechthin, gestützt
auf n=4 mit einer Gegenvariante darin. Das ist der in CLAUDE.md
markierte Mechanismus („Verdichten verliert den Vorbehalt — systematisch
zugunsten der eigenen Aussage"), hier sauber in drei Schritten
beobachtbar. Das Änderungsprotokoll wird beim nächsten Einstieg gelesen,
B11.3 nicht.

**Reparatur:** § 8 → „Strukturbefund ‚**in drei von vier geprüften
Fällen** werden die Verbünde von Leistungs-Wettbewerbern geführt
(Geltungsgrenze in B11.3)'". § 7 P19 → den Halbsatz „der Kanal gehört
überwiegend dem Wettbewerb" um „**im geprüften Ausschnitt**" ergänzen
(so steht er in B11.3 auch).

---

### W-7 · „drei von vier geprüften Fällen" — der Nenner schließt PrivateCityHotels stillschweigend aus

**Fundstelle:** B11.3 (Einleitung + Geltungsgrenze) und B11.8 („in drei
von vier geprüften Fällen … der vierte (AKZENT) betreibt den
Leistungsstapel selbst").

**Befund:** Die vier gezählten Fälle sind Belvita/Familienhotels
(Brandnamic + Kohl & Partner), Strafinger-Gruppen, Swiss Historic Hotels
(Heim) und AKZENT. **PrivateCityHotels.** ist aber ebenfalls geprüft —
B11.2(d) führt ihn mit Zitat, B11.6 stuft ihn ein (**K**). Für ihn ist
die Trägerschaft **unbekannt** („Träger nicht auf der
Mitgliedschaftsseite ausgewiesen"). Er fällt aus dem Nenner, ohne dass
das Auswahlkriterium genannt wird.

Nach CLAUDE.md („Eine Liste mit Quellenangabe erhebt einen stillen
Vollständigkeits-Anspruch — vollständig abbilden oder das
Auswahlkriterium nennen", L-03; „Verifikationsgrad immer mit Nenner")
ist das ein Nenner ohne Kriterium. Korrekt wäre entweder „3 von **5**
geprüften Verbund-Fällen" oder „3 von 4 Fällen **mit bestimmbarer
Trägerschaft** (PCH: Träger nicht ausgewiesen)".

**Reparatur:** zweite Formulierung wählen — sie ist die stärkere und
nennt das Kriterium.

---

### W-8 · B11.7 Punkt 2 — falsches Negativ zu Mitgliederzahlen, plus innerer Widerspruch

**Fundstelle:** B11.7, „Ausdrücklich nicht getan / nicht erhoben",
Punkt 2.

**Was behauptet wird:** „**Keine Mitgliederzahlen** außer den **beiden**
zitierten Selbstauskünften („über 60" bei SHH). AKZENT nennt auf den
geprüften Seiten **keine** Hotelzahl."

**Zwei Probleme:**
1. **Innerer Widerspruch:** „den **beiden** zitierten Selbstauskünften" —
   genannt wird nur **eine** („über 60" bei SHH). Die zweite existiert im
   Papier nicht.
2. **Falsches Negativ am eigenen Rohbeleg:** Der zitierte PCH-Rohbeleg
   `…\p19\pch_mitgliedschaft.txt` — genau die Seite, aus der B11.2(d)
   das „dynamischer Verbund"-Zitat zieht — trägt im Seitenfuß:
   > „**42** Hotels in **18** Städten"
   
   gefolgt von der vollständigen Städteliste. Das ist eine
   Mitgliederzahl, und zwar die einzige **bezifferte** der ganzen
   Erhebung (SHH sagt nur „über 60").

Die Aussage über AKZENT („nennt keine Hotelzahl") habe ich gegengeprüft
und **bestätigt gefunden** — `akzent_start.txt` und `akzent_kosten.txt`
enthalten keine Hotelzahl (Positivkontrolle: „AKZENT" trifft auf beiden
Seiten vielfach).

**Reparatur:** Punkt 2 neu fassen: „**Zwei** Mitgliederzahlen als
Selbstauskunft: **PrivateCityHotels. ‚42 Hotels in 18 Städten'**
(Seitenfuß der Mitgliedschaftsseite) und **SHH ‚über 60'**. AKZENT nennt
auf den geprüften Seiten keine Hotelzahl." Die 42 gehört zusätzlich in
die PCH-Zeile in B11.2(d) — sie macht den einzigen DACH-weiten Verbund
der Erhebung erst greifbar.

---

### W-9 · B11.2(d)/B11.3 — das Strafinger-Zitat trägt nur EINE der fünf Gruppen

**Fundstelle:** B11.2(d), Zeile „Health Spa Premium Hotels (AT) +
KulturEvents Austria, Abenteuer Fischwasser, Kärnten/Österreich
Radreisen, Allergie Profis"; identisch in der B11.3-Tabelle („Health Spa
Premium Hotels (AT) **u. a. 4 Gruppen**").

**Was behauptet wird:** Träger aller genannten Gruppen sei Strafinger —
belegt mit dem wörtlichen Zitat „Die STRAFINGER TOURISMUSWERKSTATT ist
die betreuende Agentur und hat seit der Gründung die Geschäftsführung
inne."

**Was der Rohbeleg sagt** (`…\p19\strafinger_angebotsgruppen.txt`, von
mir am Stück gelesen): Der Satz kommt **genau einmal** vor und steht
**mitten im Abschnitt „HEALTH SPA Premium Hotels"**, direkt hinter „Seit
über 30 Jahren präsentieren sich unter diesem Dach ausgewählte
österreichische Gesundheits- und Wellnessbetriebe…". Er ist damit eine
Aussage über **eine** Gruppe. Die Abschnitte zu KulturEvents Austria,
Abenteuer Fischwasser und Allergie Profis enthalten keinen
Trägerschafts-Satz.

**Der Befund ist trotzdem rettbar** — auf derselben Seite steht ein
allgemeiner Satz, den das Papier nicht zitiert:
> „Die Strafinger Tourismuswerkstatt verfügt über jahrzehntelange
> Erfahrung in der **Führung** von touristischen Angebotsgruppen und
> Hotelkooperationen."

Das ist die Quelle, die die Aussage über alle fünf Gruppen trägt. Der
Strukturbefund in B11.3 bleibt damit stehen; nur der **Zitat-Scope** ist
zu eng für die Behauptung, die er belegen soll (CLAUDE.md: „Ein
richtiges Zitat kann das Gegenteil belegen — Quellzeile GANZ lesen,
Überschrift/Geltungsbereich mitlesen").

**Reparatur:** Das „Geschäftsführung inne"-Zitat ausdrücklich an **Health
Spa Premium Hotels** binden und den allgemeinen Führungs-Satz als Beleg
für die übrigen vier Gruppen danebenstellen.

---

### W-10 · B11.4 — „genau drei Partner" sind am Markup vier

**Fundstelle:** B11.4, erster Aufzählungspunkt: „Die AKZENT-Startseite
führt **genau drei** ‚Partner des AKZENT Hotels e.V.': **DIRS21**,
**iiQ-Check** und **tourismus-agentur.de** (= TMA)."

**Was der Rohbeleg sagt** (`…\p19\akzent_start.html`, Segment ab der
Überschrift „Partner des AKZENT Hotels e.V." bis zum Kontaktblock,
5.367 Zeichen, vier `elementor-col-25`-Spalten): **vier** Logo-Kacheln:

| # | Ziel | Logodatei |
|---|---|---|
| 1 | `https://www.iiq-check.de/` | `iiQ-Check_consultiiq-300x127.png` |
| 2 | `https://www.dirs21.de/` | `DIRS21_Logo-300x123.png` |
| 3 | `https://www.tourismus-agentur.de/` | `TMA_Logo-300x173.png` |
| 4 | **`/interne-weiterbildungsakademie/`** | **`q-akademie-logo…-300x152.jpg`** |

Die vierte Kachel ist die **Q-Akademie** — ein internes AKZENT-Angebot,
kein externer Partner. Sie wegzulassen ist vertretbar; sie **ohne
genanntes Kriterium** wegzulassen und das Ergebnis mit „genau drei" zu
härten, ist es nicht (L-03: stiller Vollständigkeits-Anspruch).

**Und es ist nicht folgenlos:** Die Q-Akademie ist zugleich eine
**Position im Mitgliedsbeitrag** (40,00 €/Monat, B11.5) und stützt damit
denselben Leistungsstapel-Befund, den B11.4 aufmacht („Marketingagentur
+ Buchungsstrecke + Bewertungsmanagement + Beratung + **Weiterbildung**").
Die vierte Kachel ist ein Argument **für** die These, kein Störfall.

**Reparatur:** „führt vier Kacheln unter ‚Partner des AKZENT Hotels
e.V.' — drei externe Rechtsträger (DIRS21, iiQ-Check, TMA) und die
**eigene Q-Akademie** (Link auf `/interne-weiterbildungsakademie/`), die
zugleich Beitragsposition ist (B11.5)."

---

## 3. Kleinere Befunde / Präzisierungen

**K-11 · „Neunter Anbieter dieser Art im Papier" ist nicht reproduzierbar.**
B11.6, Zeile TMA. Kein Zählweg genannt. Meine Gegenrechnung: In B4.1
stehen **16** Agenturen, davon **7** mit Sitz in Deutschland (Echtzeitlos,
48 concepts, Hotelmarketing Gruppe, Anders und Seim, Agentur M&P, JMC,
TC Hotel Marketing) — TMA wäre die **achte** deutsche bzw. die
**siebzehnte** insgesamt. Neun ergibt sich auf keinem der beiden Wege.
→ Zählweg nennen oder die Zahl streichen (CLAUDE.md: „Für jede Zahl, die
in ein Dokument geht, den Zählweg benennen").

**K-12 · In B4.3 steht „~70" noch an einer zweiten, unmarkierten Stelle.**
Der Fließtext-Absatz trägt den Vorwärtsverweis („‚~70 Partner' → 78
Einträge / 76 Domains") ✔ — die **Einstufungstabelle** darunter sagt
weiterhin „Partnerprogramm mit **~70 Partnern** belegt (L-B3 erfüllt)",
ohne Verweis. Das Änderungsprotokoll meldet „‚~70' präzisiert" und deckt
damit nur eine der beiden Stellen. Die Tabelle ist genau der Ort, an dem
ein Leser die Kanal-Einstufung nachschlägt.
→ Dort „78 Einträge / 76 Domains (B10.1)" setzen.

**K-13 · „auf zwei Textknoten verteilt" ist knapp danebengezählt.**
B10.2, Erläuterung zum Certified-Partners-Satz. Am Markup
(`…\p15\sub_flexipass_tech_online-checkin.html`) sind es **drei**
Knoten — der Schlusspunkt steht hinter `</a>`:
`Check-In services are provided through our <a href="/marketplace">Certified Partners</a>.`
Der Trenner ist ein **Link auf `/marketplace`** — und das ist die
inhaltlich stärkere Beobachtung, weil er die Aussage („Partner leisten
das") direkt auf den Marktplatz zeigt.
→ „durch einen Link auf `/marketplace` getrennt, Schlusspunkt als
dritter Knoten".

**K-14 · TMA: „HRB" ist ergänzt, nicht abgelesen.**
B11.4, Tabellenzeile TMA („HRB Braunschweig **111371**"). Das Impressum
(`…\p19\tma_impressum.txt`) sagt nur: „Eintragung im Handelsregister. /
Registergericht: Braunschweig / Registernummer: 111371" — die
Registerart „HRB" steht dort **nicht**. Bei ConsultiiQ steht sie
ausdrücklich („HRB Braunschweig: 201943" ✔), bei AKZENT ebenfalls
korrekt als Vereinsregister ✔. In einer Tabelle, die Registerangaben
nebeneinanderstellt, sollte die eine ergänzte Angabe gekennzeichnet sein.
→ „Handelsregister Braunschweig 111371 (Registerart im Impressum nicht
benannt)".

**K-15 · Redirect-Gegenprobe: belegt ist der Body, nicht der Statuscode.**
B10.1 Punkt 1 nennt für alle vier Domains „**404**". Archiviert sind nur
die Bodies (`ctrl404_*.html`) — **keine** `hdr_ctrl404_*`-Dateien; die
vorhandenen `hdr_*.txt` gehören zu den **Startseiten** (straiv: 301 → /de
→ 200; die anderen 200). Der Sache nach trägt der Befund trotzdem:
- `hoteldoor` → 328 Bytes, Volltext „Page not found … No umbraco
  document matches the url '/zzz-r06a-kontrollpfad'" ✔ (nennt den
  Kontrollpfad sogar wörtlich — stärkster Einzelbeleg)
- `straiv` → `<title>Seite nicht gefunden (404) | Straiv`, „404" 4× ✔
- `iiq-check` → `<title>Seite nicht gefunden – iiQ-Check`, „404" 1× ✔
- `flexipass` → `<title>FLEXIPASS | Wallet Keys | …` (Squarespace liefert
  den normalen Seitentitel), „404" 8× / „not found" 1× ✔
Keine der vier Kontrolldateien ist mit ihrer Startseite identisch
(SHA-256 geprüft) → **kein Wildcard-Redirect** ✔, die Schlussfolgerung
hält.
→ Belegstufe im Satz präzisieren: „404 laut **Antwortkörper** und
abweichender Byte-Länge; die Statuszeilen der Kontrollabrufe sind nicht
archiviert."

**K-16 · hoteldoor: „alle 69" enthält einen Nicht-Portal-Eintrag, und
eine Deutung ist als Beleg gesetzt.** B10.3, hoteldoor-Zeile. Die Liste
unter „Portali pubblicitari" (`…\p15\sub_www_hoteldoor_it_integrazioni.txt`)
hat tatsächlich **69** Einträge ✔ — Zeile 37 lautet allerdings „Network
Portali Adrias Online", also ein Netzwerkname, kein Portal. Zweitens ist
der Satz „Sie vermarkten italienische Häuser an deutschsprachige Gäste"
für `familienhotels.de`, `italien.de`, `riminiurlaub.it` eine
**Deutung** — keines der drei Portale wurde an der Quelle geprüft. Das
Papier markiert die Einstufung selbst als „die schwächste dieses
Abschnitts", was die Sache entschärft, aber die Belegstufe des Satzes
nicht ersetzt.
→ „68 Portal-Domains + ein Netzwerk-Eintrag"; und „(Zuordnung aus dem
Listenkontext erschlossen, die drei Portale selbst nicht geprüft)".

**K-17 · AKZENT-Leistungszitat ohne Auslassungszeichen gekürzt.**
B11.5, „Was dafür enthalten ist": „Durchführung von anerkannten
**Mystery Checks**". Die Quelle (`akzent_kosten.txt`) sagt: „Durchführung
von anerkannten Mystery Checks **im Rahmen der deutschen
Hotelklassifizierung**". Die weggefallene Hälfte ist eine
Scope-Einschränkung — und „Mystery Checks" trägt in **B11.6** die
W1-Begründung für AKZENT mit.
→ Zitat vervollständigen oder „…" setzen.

**K-18 · Ungenutzte Personenidentität im Goslar-Cluster.**
B11.4 nennt in der Tabelle „Vorsitzender **Mario Peschke**" (AKZENT) und
weiter unten getrennt „Die iiQ-Check-Startseite führt als Referenz den
**Vorstandsvorsitzenden des AKZENT Hotels e.V.**". Am Rohbeleg
(`…\p15\raw_www_iiq-check_de.txt`) steht die Referenz **namentlich**:
„Mario Peschke — Vorstandsvorsitzender des AKZENT Hotels e.V." Es ist
dieselbe Person. Der Befund wird also schwächer dargestellt, als er ist.
→ Personenidentität ausschreiben.

**K-19 · PCH-Städteauswahl unterschlägt genau die Lücke, die B1 benennt.**
B11.2(d) nennt „Städte u. a. Graz, Innsbruck, Klagenfurt, Salzburg,
Wien, Zürich" — sechs AT/CH-Städte. Der Rohbeleg listet 18 Städte,
darunter **Berlin, Hamburg, Köln, Nürnberg, Bonn, Freiburg, Ingolstadt,
Passau, Speyer, Tübingen**. „u. a." rettet die Formulierung formal, aber
die Auswahl kippt das Bild: **B1 Punkt 2 und B4 führen als bekannte
Sample-Schwäche „kein einziger Treffer aus Berlin, Hamburg, Leipzig oder
Dresden"** — PrivateCityHotels. deckt Berlin und Hamburg ab. Das ist ein
Querbefund für einen anderen Abschnitt (Leitsession-Regel 8b), der hier
liegen bleibt.
→ Deutsche Städte mitnennen und in B1 Punkt 2 / B4.5 einen Verweis
setzen.

**K-20 · Zwei flexipass-PMS-Zahlen stehen unversöhnt nebeneinander.**
B10.2 zitiert „Integrates with 100+ PMS platforms" (am Rohbeleg
bestätigt ✔), B10.4 Punkt 2 nennt „28 PMS" aus der veröffentlichten
Liste (von mir nachgezählt: **28** ✔). Die Auflösung („Contact us for
the full list of PMS providers!") steht in B10.4 Punkt 3, aber nicht am
100+-Zitat.
→ Halbsatz an B10.2: „(‚100+' ist Selbstauskunft; namentlich
veröffentlicht sind 28 — B10.4)".

**K-21 · § 7, P15-Zeile: „die übrigen 74 Partner".** B10.5 und P22 sagen
korrekt „74 der 78 **Einträge**". Bei 76 Domains und vier geprüften
Anbietern sind es 74 Einträge, aber 72 Domains. „Partner" vermischt
beide Größen.
→ „die übrigen 74 Einträge".

---

## 4. Extraktions-Positivkontrolle

Geprüft wurde die **Vollständigkeit des Ergebnisses**, nicht die
Erreichbarkeit der Quelle.

| Kontrollkandidat | Rohbeleg-Pfad | erwartet | gefunden | ✔/✘ |
|---|---|---|---|---|
| Sechs Kategorie-Überschriften im Wortlaut | `sensibel\rohbelege-R05-A\a2\raw_partner.html` | 6 Überschriften | **7** Überschriften; die sechs genannten stimmen wörtlich, `Institutionelle Partner ` fehlt | **✘** (K-1) |
| Einträge-Zahlen 25/13/18/2/12/8 | ebd. | 25/13/18/2/12/8 | 25/13/18/2/12/**6** + **2** (7. Kategorie) | **✘** (K-1) |
| Gesamtzahl 78 Einträge | ebd. | 78 | 78 `MOD-Partner__item` mit 78 `data-gtm-label` | ✔ |
| Gesamtzahl 76 Domains | ebd. | 76 | 76 (Dubletten: `weareplanet.com`, `simplify-hospitality.com` je 2×) | ✔ |
| `straiv` unter „Zahlungsanbieter Schnittstellen" | ebd. | ja | ja — Position zwischen `sparkasse.it` und `stripe.com`, Kategorie alphabetisch sortiert | ✔ |
| Zitat „Check-In services are provided through our Certified Partners." | `…\p15\sub_flexipass_tech_online-checkin.html` | zeichengenau | zeichengenau ✔; Splice durch `<a href="/marketplace">`, Schlusspunkt = 3. Knoten | ✔ (K-13) |
| Zitat „Wallet Keys, Webkeys and Mobile Keys in a single platform" | `…\p15\raw_flexipass_tech.html` | zeichengenau | **aus zwei Sätzen zusammengesetzt** | **✘** (W-3) |
| Zitat „Works with existing door locks … Vingcard (ASSA ABLOY), dormakaba, Salto" | ebd. | zeichengenau | „compatible with leading lock brands, including Vingcard (ASSA ABLOY), dormakaba, Salto, and more" ✔ | ✔ |
| Zitat „Integrates with 100+ PMS platforms" | ebd. | zeichengenau | zeichengenau ✔ | ✔ |
| Zitat hoteldoor „è il CRM utilizzato dalle principali strutture alberghiere per curare la relazione con il cliente" | `…\p15\raw_www_hoteldoor_it.html` | zeichengenau | zeichengenau ✔ (nur der Schlusspunkt der Quelle fehlt im Zitat) | ✔ |
| Zitat iiQ „Bewertungsmanagement für Hotellerie & Camping" | `…\p15\raw_www_iiq-check_de.txt` | zeichengenau | zeichengenau ✔ | ✔ |
| Vier iiQ-Preise 79/109/139/169 | `…\p15\sub_www_iiq-check_de_preise.html` | 4 Preise | 79,00 / 109,00 / 139,00 / 169,00 € je „/ Monat" | ✔ |
| Vier Einrichtungsbeträge 399/599/799/799 | ebd. | 4 Beträge | 399,00 / 599,00 / 799,00 / 799,00 € | ✔ |
| Ja/Nein-Zählung 14/11 · 24/1 · 25/0 · 25/0 | ebd. | wie angegeben | Basic 14/11 · Premium 24/1 · Premium+KI 25/0 · Premium+KI+ACSM 25/0; Summe je 25; Gesamt 88 ja / 12 nein | ✔ |
| „alle zzgl. MwSt." bei iiQ | ebd. + 4 weitere iiQ-Seiten | Steuerangabe | **0 Treffer** für MwSt/Mehrwertsteuer/Umsatzsteuer/netto/brutto | **✘** (K-2) |
| 21 AKZENT-Einzelposten | `…\p19\akzent_kosten.txt` | 21 Beträge | alle 21 wörtlich bestätigt | ✔ |
| Drei Monatssummen | ebd. | 781,67 / 925,07 / 996,77 | selbst nachgerechnet, alle drei gehen auf (§ 5) | ✔ |
| AKZENT „zzgl. MwSt." | ebd. | Steuerangabe | „Monatlich (zzgl. MwSt.)" 3× + „Monatsbeitrag (zzgl. MwSt.)" | ✔ |
| Impressum AKZENT (Anschrift/GF/Register) | `…\p19\akzent_impressum.txt` | Spitalstraße 1, 38640 Goslar · Peschke · Hummel · VR AG Braunschweig 200518 | alle vier bestätigt | ✔ |
| Impressum ConsultiiQ | `…\p15\sub_www_iiq-check_de_impressum.txt` | Spitalstraße 1, 38640 Goslar · Hummel · HRB Braunschweig 201943 | alle drei bestätigt | ✔ |
| Impressum TMA | `…\p19\tma_impressum.txt` | Spitalstraße 1, 38640 Goslar · Hummel · HRB 111371 | Anschrift ✔ · GF ✔ · Nummer ✔, Registerart „HRB" **ergänzt** | ✔/K-14 |
| Telefonblock -40 / -70 / -60 | drei Impressen | wie angegeben | AKZENT 7591-40 ✔ · ConsultiiQ 75 91 70 ✔ · TMA 759160 ✔ | ✔ |
| „genau drei" AKZENT-Partner | `…\p19\akzent_start.html` | 3 Kacheln | **4** Kacheln (4. = Q-Akademie) | **✘** (W-10) |
| IDM-Liste: genau sieben Verbünde | `…\p19\suedtirol_b2b_koop.txt` | 7 Namen | genau 7, Namen wörtlich identisch | ✔ |
| IHA-Blockzitat zeichengenau | `…\p19\iha_beitragsordnung.html` | wörtlich | wörtlich identisch; **Soft Hyphen U+00AD** in „min­destens" der Quelle korrekt zu „mindestens" normalisiert | ✔ (§ 6) |
| IHA: KP-Staffel-Auflösung | ebd. | Selbstauflösung der Quelle | „bemisst sich nicht nach der Zahl der zur Kooperation, sondern der jeweils zu Beginn eines Beitragsjahres zum Verband gehörenden Hotels" ✔ | ✔ |
| flexipass-Marktplatz 13 / 28 / 40+ | `…\p15\sub_flexipass_tech_marketplace.txt` | 13 / 28 / 40+ | **13** Schlossanbieter · **28** PMS · **41** Guest-App-Anbieter | ✔ |
| Apaleo fehlt in flexipass-PMS-Liste | `…\p15\sub_flexipass_tech_marketplace.html` | 0 Treffer | 0 (case-insensitiv); Positivkontrolle Mews ✔ Cloudbeds ✔ Ibelsa ✔ | ✔ |
| flexipass: drei Firmierungen auf `/terms` | `…\p15\fp_terms.txt` | 3 Angaben | 4 Varianten: SRLS/Mainardo · „vereinfachte GMBH"/Meinhardstr. · MOBILE ACCESS GMBH/Goethestrasse 7 · VISION SRL/Venosta 3 | ✔ |
| hoteldoor: 69 Portale | `…\p15\sub_www_hoteldoor_it_integrazioni.txt` | 69 | 69 Zeilen, davon 1 Netzwerkname | ✔/K-16 |
| `lang`/`hreflang` der drei Domains | drei Rohdateien | it / de / en-US, keine hreflang | `lang="it"` · `lang="de"` · `lang="en-US"`, hreflang je 0 | ✔ |
| Kohl & Partner führt Belvita/Familienhotels | `sensibel\rohbelege-R05-A\a2\uniq_kooperationsgruppen.txt` | wörtlich belegt | „gemeinsam mit der Beratungsagentur Kohl & Partner die Geschäftsführung von zwei etablierten Kooperationsgruppen" ✔ | ✔ |
| Strafinger-Trägerschaft für 5 Gruppen | `…\p19\strafinger_angebotsgruppen.txt` | 5 Gruppen | Zitat gilt **nur** für Health Spa | **✘** (W-9) |
| SHH „über 60" + Heim im Impressum | `…\p19\shh_ueberuns.txt`, `shh_impressum.txt` | beides | „Seit 2004 … über 60 historische Hotels … Marketing-Kooperation" ✔; Rubrik „Marketingberatung und -betreuung / Heim Hotelmarketing" ✔ | ✔ |
| hotelier.de: 8 Namen + Datum 05.01.2021 | `…\p19\hotelier_liste.txt` | 8 Namen, 2021 | genau 8, Reihenfolge identisch; Artikeldatum „05.01.2021" ✔ | ✔ |
| PCH-Mitgliederzahl | `…\p19\pch_mitgliedschaft.txt` | (laut Papier: keine) | **„42 Hotels in 18 Städten"** vorhanden | **✘** (W-8) |
| GastroSuisse: kein Verzeichnis | `…\p19\gastrosuisse_koop.txt` | Systematik statt Liste | „fit-together" 7× · horizontal/vertikal/lateral; keine Verbundliste ✔ | ✔ |
| Wikipedia global + 2013–2015 | `…\p19\wiki_hotelkooperation.txt` | wie angegeben | Hotusa/Preferred/Worldhotels ✔; „2013" 4× / „2015" 2× ✔ | ✔ |
| iiQ „Partner werden" → app.iiq-check.de | `…\p15\raw_www_iiq-check_de.html` | Login-Weg | Footer-`href="https://app.iiq-check.de"`, Text „Partner werden" ✔ (Nachbar-Link „Partner-Login" auf dasselbe Ziel) | ✔ |

---

## 5. Nachgezählte Werte

| Aussage im Dokument | Rohbeleg-Pfad | mein Zählweg | mein Ergebnis | ✔/✘ |
|---|---|---|---|---|
| „78 Logo-Einträge" | `…R05-A\a2\raw_partner.html` | Regex `class="MOD-Partner__item…"` im Modulsegment, Zuordnung per Dokumentposition | **78** | ✔ |
| „76 verschiedene Anbieter-Domains" | ebd. | `new URL(label).hostname`, `www.`-normalisiert, Set-Größe | **76** (mit und ohne Normalisierung identisch) | ✔ |
| „sechs Kategorien" | ebd. | Zählung der `MOD-Partner__title`-Blöcke | **7** | ✘ |
| „Branchenpartner 8" | ebd. | Items zwischen 6. und 7. Überschrift | **6** (+2 unter der 7.) | ✘ |
| iiQ Basic „14 ja / 11 nein" | `…\p15\sub_www_iiq-check_de_preise.html` | Segment ab `<h3 class="iiq-plan-name">Basic`, `<li class="yes">` / `<li class="no">` | 14 / 11 (Summe 25) | ✔ |
| iiQ Premium „24/1" | ebd. | ebd. | 24 / 1 (Summe 25) | ✔ |
| iiQ Premium+KI „25/0" | ebd. | ebd. | 25 / 0 | ✔ |
| iiQ Premium+KI+ACSM „25/0" | ebd. | ebd. | 25 / 0 | ✔ |
| Quersumme aller Merkmale | ebd. | `<li class="yes">` / `<li class="no">` seitenweit | 88 ja / 12 nein = 4×25 ✔ (schließt die Vier-Plan-Zuordnung) | ✔ |
| AKZENT 20 Zi. = 781,67 € | `…\p19\akzent_kosten.txt` | 571,67 + 0,00 + 50,00 + 30,00 + 40,00 + 50,00 + 40,00 | **781,67** | ✔ |
| AKZENT 40 Zi. = 925,07 € | ebd. | 571,67 + 103,40 + 50,00 + 30,00 + 80,00 + 50,00 + 40,00 | **925,07** | ✔ |
| AKZENT 50 Zi. = 996,77 € | ebd. | 571,67 + 155,10 + 50,00 + 30,00 + 100,00 + 50,00 + 40,00 | **996,77** | ✔ |
| „781,67–996,77 €/M" (Spanne, § 7 + B11.8) | ebd. | Min/Max der drei Summen | ✔ — Spanne gilt für 20–50 Zimmer, größere Häuser liegen darüber (im Papier korrekt nicht behauptet) | ✔ |
| „13 Schlossanbieter" | `…\p15\sub_flexipass_tech_marketplace.txt` | Namensliste zwischen Überschrift und „Can't find your lock provider?" | **13** | ✔ |
| „28 PMS" | ebd. | Namensliste bis „Can't find your PMS in the list?" | **28** | ✔ |
| „40+ Guest-App-Anbieter" | ebd. | Namensliste bis „Contact us for the full list of providers." | **41** | ✔ |
| „über 40 solcher Anbieter" (§ 7, P17) | ebd. | dieselbe Liste | 41 | ✔ |
| „69 Werbeportale" | `…\p15\sub_www_hoteldoor_it_integrazioni.txt` | Zeilen zwischen „Portali pubblicitari" und „Porta la tua Comunicazione" | **69** (davon 1 Netzwerkname) | ✔/K-16 |
| „genau sieben" Südtiroler Verbünde | `…\p19\suedtirol_b2b_koop.txt` | Namensliste unter „Südtirols Hotelkooperationen" | **7** | ✔ |
| „acht" hotelier.de-Kandidaten | `…\p19\hotelier_liste.txt` | Liste unter „Bekannte Hotelkooperationen" | **8** | ✔ |
| „74 ungeprüfte Einträge" (P22) | Rechnung | 78 − 4 | 74 Einträge (aber 72 Domains) | ✔/K-21 |
| „genau drei" AKZENT-Partner | `…\p19\akzent_start.html` | Logo-Links im Segment ab der Überschrift | **4** | ✘ |
| „Neunter Anbieter dieser Art" (TMA) | `fund/wettbewerbsbild.md` B4.1 | Zeilen der Agenturtabelle, DE-Teilmenge | 16 gesamt / 7 DE → 17. bzw. 8. | ✘ |

---

## 6. Geprüft und unauffällig — damit die Entlastung einen Geltungsbereich hat

Diese Punkte habe ich **aktiv gesucht und nicht gefunden**; sie sind
damit im genannten Umfang entlastet:

1. **Die Antwort auf P15 trägt.** Zwei Treffer (straiv, flexipass) und
   zwei Namensfallen (hoteldoor, iiq check) sind an den Primärquellen
   belegt — die Modulnamen bei straiv, die Certified-Partners-Klausel bei
   flexipass, das CRM-Selbstbild bei hoteldoor, das
   Bewertungsmanagement-Selbstbild bei iiq check. **Auch mit der
   siebten Kategorie (K-1) bleibt richtig: eine Rubrik
   „Check-in/Zutritt" existiert im Brandnamic-Raster nicht.**
2. **Der Goslar-Cluster ist sauber belegt und sauber begrenzt.** Drei
   getrennt gelesene Impressen ergeben dieselbe Anschrift, denselben
   Geschäftsführer und einen zusammenhängenden Telefonblock; die
   Belegstufen-Trennung in B11.4 („belegt: Anschrift/Person/Telefon —
   nicht belegt: die gesellschaftsrechtliche Verflechtung, kein
   Registerauszug") ist genau richtig gezogen und wird auch in der
   § 7-Verdichtung **nicht** überdehnt. Das ist die methodisch beste
   Stelle der beiden neuen Abschnitte.
3. **Die AKZENT-Beitragstabelle ist vollständig und rechnet auf.** Alle
   21 Einzelposten stimmen wörtlich, alle drei Summen habe ich selbst
   nachgerechnet, „zzgl. MwSt." ist hier korrekt belegt, die Fußnote
   „Preise gültig ab 2026" steht so in der Quelle. Auch die Lesegrenze
   („Mitgliedsbeitrag, kein Agentur-Honorar … ein direkter
   Preisvergleich ist nicht zulässig") ist richtig gesetzt und wird in
   B11.8 mitgegeben.
4. **Das IHA-Blockzitat ist wörtlich korrekt** — einschließlich der
   Falle: Die Quelle trägt in „min­destens" ein **Soft Hyphen
   (U+00AD)**, das im Papier korrekt zu „mindestens" normalisiert ist.
   Auch die Kettendefinition und die selbstauflösende KP-Staffel-
   Randnotiz (B11.1) sind an der Quelle bestätigt.
5. **Die iiQ-Tarif-Extraktion ist die stärkste Einzelleistung des
   Laufs.** Die Zählweg-Warnung („die Unterscheidung steckt allein in der
   CSS-Klasse … Wer solche Tarifseiten als Text extrahiert, erzeugt vier
   gleiche Tarife mit vier verschiedenen Preisen") ist am Markup exakt
   nachvollziehbar; alle acht Zahlen und alle vier Ja/Nein-Paare stimmen.
   Nur die Steuerbasis daneben stimmt nicht (K-2).
6. **Alle vier Kontrollpfade sind echte Fehlseiten** — keine
   Kontrolldatei ist mit ihrer Startseite identisch (SHA-256), die
   hoteldoor-Antwort nennt den Kontrollpfad sogar wörtlich. Der Schluss
   „kein Wildcard-Redirect, die Seitenbefunde sind keine Artefakte"
   hält.
7. **Kein Klartext-Secret, kein Zugangsdatum, keine Personendaten** über
   das hinaus, was Pflichtimpressen ohnehin veröffentlichen. Die
   Rohbelege liegen git-ignoriert unter `sensibel\`; ich habe sie nur
   gelesen.
8. **Die auftragsgemäßen Nicht-Zuständigkeiten sind eingehalten:** Die
   Kanalbewertung ist in B11.7/B11.8 ausdrücklich an MKT-AKQ
   abgegeben, die Portfolio-Fragen (Buchungsstrecke, Bewertungs-
   management) an MKT-FUND, die Preisanker an MKT-HANDEL. Kein
   Alleingang bei außenwirksamen Festlegungen.
9. **Die Negativ-Tabellen B10.5 und B11.7 tragen durchgehend Suchraum +
   Positivkontrolle**, und die Formulierungen bleiben bei „im geprüften
   Suchraum nicht gefunden" statt „existiert nicht" (Apaleo bei
   flexipass, Check-in bei hoteldoor/iiq check, Verbundliste Schweiz).
   Die Positivkontrollen habe ich stichprobenhaft nachgezählt
   (flexipass: „keyless" 4–16 und „check-in" 1–5 auf allen sechs
   Seiten ✔).
10. **Der Zusatz „aus der R05-A-Prosa nicht übernommen"** stimmt: Die
    78/76-Zahlen sind tatsächlich neu am Markup erhoben; der Fehler in
    K-1 ist kein übernommener, sondern ein eigener.
11. **Die B4.3-Vorwärtsverweise sind gesetzt** (Fließtext-Absatz,
    „AUFGELÖST in B10"), ebenso der Nachtrag in § 0.0, im Teil-B-Kopf,
    in B1 Punkt 1b und in der B1-Erhebungstabelle. Nur zwei Stellen
    fehlen (W-5, K-12).
12. **Keine Widersprüche zu B1–B9 gefunden**, die nicht markiert wären.
    Insbesondere: die iiq-check-Einstufung **W2** in B10.3/B11.6 ist
    konsistent mit der Alt-Zeile in **B7.2** („MARA, iiQ-Check, Customer
    Alliance → W2 + K"); die Heim-Hotelmarketing-Zeile in B4.1 (W1) wird
    in B11.6 korrekt nur um **K** erweitert, nicht neu vergeben; die
    Brandnamic-Doppelrolle in B4.3 bleibt unverändert.

**Geltungsbereich dieser Entlastung:** Sie gilt für **B10, B11** und die
in R06-A geänderten Bestandsstellen (§ 0.0, § 7, § 8, Teil-B-Kopf, B1,
B2, B4.3). Sie gilt **nicht** für B1–B9 im Übrigen und **nicht** für
Teil A — beides war nicht Prüfgegenstand und ist gegen die R05-A-/
R03-D-Belege zu messen.

---

## 7. Ursachen-Diagnosen (Hypothesen, getrennt von den Befunden)

> Alles in diesem Abschnitt ist **Vermutung**. Die Befunde in §§ 1–3
> stehen unabhängig davon; keine Diagnose ist gemessen.

**D-1 zu K-1 (sieben statt sechs Kategorien) — Hypothese:** Die
Extraktion lief korrekt über die Logo-Kacheln (78 stimmt exakt), aber die
**Kategorienliste** wurde beim Übertragen in die Tabelle gegen die
R05-A-Prosa abgeglichen statt gegen die eigene Ausgabe. R05-A sagt
„sechs Kategorien" mit dem Sammelnamen „Branchen-/institutionelle
Partner" — wer die eigene Ausgabe daraufhin liest, sieht sechs
Zeilen bestätigt und addiert die siebte stillschweigend hinzu. Verstärkt
haben dürfte das die Positivkontrolle: Sie war auf die **vier gesuchten
Namen** gerichtet (alle in Kategorie 3 und 5), also auf einen Bereich, in
dem die Zuordnung stimmte. **Das ist die exakt gleiche Mechanik wie beim
R05-A-Prüferbefund zu B8.4** (7 → 9 Apaleo-Kategorien): eine
Positivkontrolle, die die Nutzlast prüft, aber nicht die Vollzähligkeit
der Liste. Die Lehre aus R05-A steht im Änderungsprotokoll — sie war
formuliert, aber nicht auf den neuen Fall angewandt.

**D-2 zu K-2 („zzgl. MwSt.") — Hypothese:** Die Preisseite enthält
viermal die Zeichenfolge „zzgl." — jeweils vor der Einrichtungsgebühr.
Beim Verdichten in einen Tabellensatz wurde das häufige „zzgl." zum
vertrauten Muster „zzgl. MwSt." ergänzt. Dass unmittelbar daneben in
B11.5 ein Anker steht, der **tatsächlich** „zzgl. MwSt." trägt (AKZENT),
dürfte die Plausibilität zusätzlich gestützt haben. Typisch ist auch:
Die Angabe macht den Befund **stärker** (ein Nettopreis ist der
verwendbarere Anker) — das ist die Richtung, in die Verdichtungsfehler
laut CLAUDE.md systematisch fallen.

**D-3 zu W-3 (Pseudo-Zitat flexipass) — Hypothese:** Auf der Startseite
stehen beide Formulierungen nah beieinander: die Headline in Versalien
(„WALLET KEYS, WEBKEYS AND MOBILE KEYS…") und der Fließtext („Web Keys,
Wallet Keys, and Mobile Keys in a single platform"). Beim Lesen der
entmarkupten `.txt`-Fassung stehen sie **vier Zeilen auseinander**; die
Versalien-Zeile liefert die Reihenfolge und Schreibweise, der Fließtext
den prägnanten Schluss. Ein Zitat aus zwei benachbarten Sätzen fühlt sich
beim Schreiben wie eine Kürzung an, nicht wie eine Konstruktion.

**D-4 zu W-4 (L-B8 ohne Rückprüfung) — Hypothese:** L-B8 entstand
**während** der Einstufung eines einzelnen Kandidaten (hoteldoor) und
wurde nachträglich in B2 eingetragen. Regeln, die aus einem Einzelfall
herauswachsen, tragen ihren Auslöser als impliziten Geltungsbereich —
der Blick auf den Bestand entsteht erst, wenn die Regel als Regel
gelesen wird. Bei L-B7 war das anders: Sie entstand aus einem
Prüferbefund über **eine ganze Tabelle**, und die Rückprüfung war Teil
des Auftrags.

**D-5 zu W-6/W-7 (Nenner und Vorbehalt) — Hypothese:** B11.3 ist der
Abschnitt mit dem stärksten Erzählwert des ganzen Laufs („der Kanal
gehört dem Wettbewerb"). Je griffiger ein Befund, desto stärker der Sog,
ihn in der Kurzfassung ohne Bedingungssatz zu wiederholen — und das
Änderungsprotokoll ist die kürzeste Fassung im Dokument. Der
PCH-Ausschluss aus dem Nenner (W-7) dürfte keine Entscheidung gewesen
sein, sondern eine Folge davon, dass PCH in B11.2(d) unter „Österreich
und Schweiz" mitläuft und in der Trägerschafts-Tabelle B11.3 schlicht
keine Zeile bekam, weil es nichts einzutragen gab. Ein leeres Feld ist
schwerer zu sehen als ein falsches.

**D-6 zu W-8 (PCH „42 Hotels") — Hypothese:** Die Zahl steht im
**Seitenfuß**, nach dem Kontaktblock, optisch weit unterhalb des
inhaltlichen Teils der Mitgliedschaftsseite. Wer eine Seite auf ihre
Kernaussage liest, hört vor dem Footer auf — dieselbe Mechanik, die die
Rohbeleg-Regel „am STÜCK auswerten, nie absatzweise nach Bedarf"
adressiert. Der innere Widerspruch („den **beiden** … Selbstauskünften"
bei nur einer genannten) deutet zusätzlich darauf hin, dass hier eine
zweite Zahl einmal vorlag und beim Kürzen verlorenging.

**D-7 zu W-9 (Strafinger-Zitat) — Hypothese:** Die Seite
`/angebotsgruppen/` bündelt fünf Gruppen unter **einer** URL. Ein Zitat,
das auf dieser Seite steht, wirkt beim Zurückschreiben wie eine Aussage
**der Seite** — nicht wie eine Aussage eines ihrer Abschnitte. Der
allgemeine Führungs-Satz („jahrzehntelange Erfahrung in der Führung
von…") steht weiter oben und hätte die Behauptung sogar besser getragen;
er wurde vermutlich als Marketing-Floskel überlesen, während der
konkrete Satz als „der Beleg" hervorstach.

**D-8 zu W-10 (vier statt drei Partnerkacheln) — Hypothese:** Die vierte
Kachel ist die einzige mit einem **relativen** Link
(`/interne-weiterbildungsakademie/`) statt einer externen Domain. Wer die
Partnerliste über externe Ziel-URLs extrahiert — der naheliegende Weg,
und derselbe, der beim Brandnamic-Partnerkreis richtig war —, verliert
sie automatisch. Die Zahl „drei" wäre dann kein Zählfehler, sondern ein
Filterartefakt, das mit „genau" gehärtet wurde.

---

## 8. Was ich der Leitsession empfehle

1. **K-1 und K-2 vor jeder Weiterverwendung reparieren** — beide wandern
   sonst weiter: K-1 in jede künftige Aussage über den
   Brandnamic-Partnerkreis (P22 hängt daran), K-2 über B11.8 direkt in
   die MKT-HANDEL-Preisarbeit.
2. **W-4 und W-5 sind Regel- und Doku-Hygiene**, nicht Sachfehler — aber
   genau die Sorte, die später teuer wird: eine Vergabelinie ohne
   Bestandsprüfung und ein Technik-Wettbewerber, der nur im
   Beratungsteil steht.
3. **W-6/W-7 im selben Zug** anfassen — es ist eine
   Formulierungsänderung an drei Stellen, und der Änderungsprotokoll-
   Eintrag ist die am häufigsten gelesene davon.
4. **Der Lehren-Kandidat aus diesem Lauf** (Zielort `lehren-register.md`,
   Pflege über `/debrief`): *Eine Extraktions-Positivkontrolle, die auf
   die **gesuchten** Elemente zielt, prüft den Suchtreffer — nicht die
   Vollzähligkeit der **Gliederung**, in der er steht. Für Listen mit
   Überschriften gehört die Zahl der Überschriften selbst in die
   Kontrolle.* Das ist die zweite Reproduktion derselben Klasse in
   diesem Papier (B8.4 in R05-A, B10.1 in R06-A) — nach der Regel
   „⭐ Eine frisch geschriebene Regel … der BESTAND wird im selben Zug
   rückwirkend durchsucht" wäre bei der R05-A-Lehre zu prüfen gewesen,
   wo im Papier noch Listen mit Kategorien-Überschriften stehen.
