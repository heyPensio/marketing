# R20-Prüfer — Nachtrags-Kasten „R20-Härtung" der Entscheidungsvorlage + schnellcheck.js

> **Unabhängiger Prüf-Subagent (frischer Kontext), 21.08.2026.**
> Prüfstand eingefroren: **`b0ba1a3`** — alle Repo-Dateien ausschließlich
> per `git show b0ba1a3:<pfad>` gelesen, nie aus dem Arbeitsbaum.
> Rohbelege (git-ignoriert) vom Dateisystem gelesen.
>
> **Leseumfang:** `entscheidungsvorlage-name-2026-08-19.md@b0ba1a3`
> vollständig (246 Zeilen) · `vertiefung-finalisten-2026-08-19.md@b0ba1a3`
> vollständig (802 Zeilen, in vier Blöcken 1–200/200–420/420–650/650–802) ·
> `schnellcheck.js@b0ba1a3` vollständig (49 Zeilen) und `@b0ba1a3~1`
> (42 Zeilen) samt vollem Diff · `sensibel/rohbelege-R20-leit/
> sechser-neumessung/` (alle 41 Dateien gesichtet, Werte je Kanal
> extrahiert) · `sensibel/rohbelege-R19-leit/beiname-lauf{,3,5,6}`
> (die sechs Kombinationen + Kontrolldateien des Laufs 1) ·
> `sensibel/rohbelege-R19-C/dpma-auskunft-…/004-auskunft-DE-3020232350773.body.html`
> und `…/lauf-…c23848/008-N-159-rdap-com.*` und
> `…/browser-2026-08-19/browser-protokoll.md` (Abschnitt 2.2).

---

## Kategorie A — Aussage und Fundstelle getrennt (Nenner: 18 Faktenaussagen geprüft)

**16 von 18 am Rohbeleg bzw. an der Quelle bestätigt, 1 nicht belegt,
1 nur mit Einschränkung gedeckt.** Einzeln:

| # | Aussage des Kastens | Ergebnis | Beleg/Zählweg |
|---|---|---|---|
| 1 | „40 Abrufe" | ✔ | `ls … \| wc -l` = 41 Dateien = 40 Antwortdateien + `hashes.txt`; Nummerierung 001–040 lückenlos; Soll-Rechnung 6 Wörter × 4 Kanäle + 2 Phasen × 2 Zeilen × 4 Kanäle = 24+16 = 40 |
| 2 | „21.08.2026, 14:06 MESZ (12:06 UTC)" | ✔ (Beleg: Datei-mtimes) | alle 41 Dateien mtime 21.08. 14:06 lokal; August ⇒ MESZ = UTC+2 ⇒ 12:06 UTC; Commit b0ba1a3 14:08:39 +0200 konsistent. Die Konsolen-Zeile „Abrufe: …; Zeit: …" ist nicht archiviert (s. „nicht erhoben") |
| 3 | alle sechs `.de` frei | ✔ | je Kombination Body `{"errorCode":404,"title":"No such domain."}` (Dateien 009/013/017/021/025/029) |
| 4 | alle sechs `.com` frei | ✔ mit Beleg-Lücke | alle sechs `.com`-Dateien sind **0 Bytes** — konsistent mit Verisign-404 (leerer Body), aber der HTTP-Status ist am Rohbeleg nicht nachvollziehbar (Befund M3) |
| 5 | DPMA 0 Treffer (alle sechs) | ✔ | `"marHits":"0"` in 011/015/019/023/027/031, je mit `queryString=Innsight-<Beiname>` (Bindestrich-Form) |
| 6 | EUIPO 0 Treffer, auch Kernklassen 9/35/42/43 | ✔ | `"total":0` in 012/016/020/024/028/032; bei total 0 sind die Klassenzähler trivial 0 |
| 7 | „unverändert gegenüber dem 19.08." | ✔ | 19.08.-Rohbelege je Kombination geöffnet (beiname-lauf: hospitality+hotelsysteme · lauf3: gastgewerbe · lauf5: hoteliers+hotelbetrieb · lauf6: hotelsolutions): überall `.de` 404-Body, `.com` 0 Bytes, marHits 0, total 0 — identisch zum 21.08. |
| 8 | Kontrollen Anfang UND Ende, je Kanal verschiedene Sollwerte, beide getroffen | ✔ | Dateien 001–008 (`-start`) und 033–040 (`-ende`): `.de` pos ldhName `hey-pensio.de` / neg 404-Body · `.com` pos ldhName `APALEO.COM` (2.732 B) / neg 0 B · DPMA pos marHits 1 / neg 0 (`queryString=qzx7w5usp33p`) · EUIPO pos total 965 / neg total 0 — in BEIDEN Phasen, pos ≠ neg je Kanal |
| 9 | Rohbelege + SHA-256 unter `sensibel/rohbelege-R20-leit/sechser-neumessung/` | ✔ | `hashes.txt` = 40 Zeilen; **alle 40 Hashes per `sha256sum` nachgerechnet: 40/40 OK, 0 Abweichungen** |
| 10 | Messform Bindestrich-Domain + Registersuche Wortform mit Bindestrich, „dieselbe Form wie am 19.08." | ✔ mit Einschränkung | Bindestrich-Form beidseitig belegt. ABER: DPMA-Query 19.08. `innsight-hospitality` (klein), 21.08. `Innsight-Hospitality` (groß) — die Schreibung wich ab; ob die Smartsearch case-insensitiv ist, ist nicht gemessen (Befund H1) |
| 11 | Inn:Sights DE 3020232350773, **Kl. 35/41/42**, eingetragene Wortmarke, Inn:Syn GmbH, Klassentext = unser Leistungsfeld | ✔ | Rohbeleg `004-auskunft-DE-3020232350773.body.html`: „Klasse(n) KL 35, 41, 42", „Marke eingetragen", Inhaber Inn:Syn GmbH (14055 Berlin); Kl.-42-Verzeichnis „Entwicklung, Programmierung und Implementierung von Software; IT-Beratungs-…" (Quelle § 3.2 wortgleich) |
| 12 | INNOSIGHT WO 972657, Kl. 9/16/35/41, eingetragen, Schutz u. a. DE | ✔ | Quelle § 3.2 Tabelle + Reparaturkasten P-03 (dort wörtlich „Schutz u. a. DE und EM") |
| 13 | INNsight.com, Inc., San Francisco, Hotel-Dienstleister mit US-Marken | ✔ (schwächere Belegstufe) | Quelle § 3.2 (US 90045083 Kl. 35/42/43, US 86861790 Kl. 35) + Browser-Protokoll 2.2 (Facebook: „INNsight, San Francisco … We help #hoteliers…"). Die Halter-/Ortszuordnung ist laut Quelle selbst Belegstufe (b): Browser-Sichtung ohne Hash — der Kasten weist das nicht aus (H4) |
| 14 | `innsight.com` nicht erwerbbar | ✔ als Quellen-Wiedergabe | Quelle § 4 wörtlich „nicht erwerbbar (aktiver Anbieter)"; RDAP-Rohbeleg 008-N-159: registriert seit 08.10.1997. Reichweite s. Kalibrierung K2 |
| 15 | K4-Verzicht durch User 19.08., dauerhaft | ✔ | Nachtrag ~14:30 im selben Dokument („das mit dem Diktat lassen wir das ist überflüssig") |
| 16 | Klangnähe Innsight/„Insight", Befund R19-C, beinamen-unabhängig | ✔ | Quelle § 3.2 (⚠️-Kasten, 21.910 Insight-Treffer) + § 8 N-159 K1 |
| 17 | Risikozeilen-Tabelle: 6 × „frei/frei · 0/0" | ✔ | identisch mit #3–#6; Sprachschienen-Spalte ist als „eigene Beschreibung, keine Messung" gekennzeichnet — korrekt deklariert |
| 18 | „Liste liegt bereit" (Alterungs-Regel) | ❌ **nicht belegt** | Befund M1 — kein Träger auffindbar (Suchweg unten) |

**Fundstellen-Prüfung getrennt von der Aussage:** Alle Quellverweise des
Kastens (Rohbelege-Pfad, Kasten 19.08. ~15:10, Freigabe-Regel,
R19-Lehre) führen an existierende Stellen; keine driftende Fundstelle
gefunden.

---

## Kategorie B — Von der Quelle rückwärts: Was ist nicht angekommen? (Nenner: ganze Vertiefung 802 Zeilen + alle vier Alt-Kästen der Vorlage gegen den neuen Kasten gehalten)

Der neue Kasten erklärt sich selbst plus den 19.08.-Kasten zur
alleinigen Entscheidungsgrundlage und den Hauptteil für überholt. Damit
müssen die entscheidungsrelevanten Vorbehalte der Quelle in den zwei
Kästen stehen. **Angekommen sind:** K2-Anwalts-Vorbehalt (mit den drei
nächsten Zeichen), K4-Verzicht, Klangnähe, Alterung/Front-Running,
Schnellcheck-Zuschnitt (Handles/Websuche/Halter ausgeklammert). **Nicht
angekommen sind (5 Punkte, absteigend nach Gewicht):**

1. **Handelsregister-Recherche nie erhoben** (Quelle § 7.10, Verfahren
   § 5.2) — gewählt wird ein FIRMENname; ob eine „Innsight …"-Firma im
   Handelsregister steht, wurde nie geprüft. Grep „Handelsregister" über
   die gesamte Vorlage@b0ba1a3: **0 Treffer** (Positivkontrolle des
   Suchlaufs: „Anwalts-Markenrecherche" = 2 Treffer). Verschärfend: Die
   Tabellenspalte „Register (21.08.) 0/0" kann ein Laie als „alle
   Register" lesen — gemeint sind nur DPMA/EUIPO. (M5)
2. **EN-Muttersprachler-Check offen** (Quelle § 5.1 Grenze 2, § 7.8,
   § 9.2) — steht in der Vorlage nur noch im für überholt erklärten
   Hauptteil (1 Treffer „Muttersprachler", Z.-Bereich „Für alle drei
   gilt"); in keinem der beiden geltenden Kästen. Der Kern und zwei
   Beinamen (Hospitality, Hotelsolutions) sind englisch. (M4)
3. **W9/Branchenverzeichnisse nie gesichtet** (Quelle § 7.12,
   Prüferbefund P-12): „Gerade bei Innsight, wo ein Branchen-Namensvetter
   bereits zufällig über den Facebook-Kanal aufgetaucht ist, wäre das der
   Kanal, der systematisch weitere fände." Grep „Branchenverzeichnis"/
   „App Store"/„W9" über die Vorlage: je 0 Treffer. Der
   Zuschnitts-Satz des Kastens („Websuche … außerhalb") deckt die
   NEUMESSUNG, benennt aber nicht, dass dieser Kanal auch am 19.08. nie
   lief. (M6)
4. **INN SIGHT (DE 3020242492945, Kl. 9/13, eingetragen,
   Zeitgeist-Geschenke GmbH)** — drittes nahes Zeichen (Quelle § 3.2 und
   § 7.7 als offene Verwechslungsfrage benannt); im Kasten nur durch
   „u. a." gedeckt. Ebenso fehlt die Dichte-Zahl (14 lebende Zeichen im
   Suchraum; Insight-Feld 21.910). „u. a." ist als Auswahlkriterium
   erkennbar → Hinweis, kein Fehler. (H4)
5. **Messform-Grenze der 0/0-Register-Spalte:** Die Quelle belegt selbst
   (§ 3.4 Nr. 1), dass die zusammengeschriebene EUIPO-Suche getrennt
   geschriebene Marken NICHT findet. Analog findet die
   Bindestrich-Suche `Innsight-Hospitality` eine (hypothetische) Marke
   „INNSIGHT HOSPITALITY" (Leerzeichen) nicht. Teilkompensiert durch die
   Kern-Vorbehalte — aber nur für den Registerstand vom 19.08. (→ C/M2).
   Der Kasten deklariert die Messform, nicht diese bekannte Fehlklasse. (H2)

Dazu die Doku-Hygiene-Beobachtung: Die Überholt-Erklärung des Hauptteils
listet nicht positiv, was WEITER gilt — im Hauptteil stehen u. a. der
„Nicht Teil dieser Freigabe"-Block (5 Gates vor öffentlicher Nennung,
P-11-Recherche-Achsen vor der Anmeldung, Cutover) und der
K4-Bogen-Pfad. (H3)

---

## Kategorie C — Entwarnungs-Prüfung (Nenner: 4 entwarnende Sätze des Kastens)

1. **„weiterhin `.de` UND `.com` frei (RDAP denic/verisign)"** — Quelle
   im Satz: ja (Kanal + Rohbelege-Pfad). Deckung: `.de` voll (404-Bodys);
   `.com` nur mittelbar — die Rohbelege sind leere Dateien, der
   404-Status ist nicht archiviert; ein leerer Fehler-/429-Body wäre am
   Rohbeleg nicht unterscheidbar (das ist exakt die R19-Fehlklasse, gegen
   die die Härtung gebaut wurde). Abgemildert: die `.com`-Positivkontrolle
   trug in beiden Phasen einen echten Body, und die Skriptlogik meldet
   nur bei Status 404 „frei". **Aussage plausibel, Beleg-Kette am
   Rohbeleg unvollständig.** (M3)
2. **„unverändert gegenüber dem 19.08."** — trägt Quelle (Vergleich der
   Läufe) und ist am Objekt bestätigt (Kat. A #7). Reichweite korrekt auf
   die sechs Kombinationen begrenzt. ✔
3. **„Kontrollen … trafen beide je Kanal mit verschiedenen Sollwerten"**
   — am Rohbeleg vollständig bestätigt (Kat. A #8). ✔
4. **Reichweiten-Prüfung des Gesamt-Frei:** Das präzise Negativ („alle
   sechs Kombinationen … 0") wird im Kasten NICHT auf den Kern
   verallgemeinert — sauber. ABER: Die 40 Abrufe enthalten **keinen
   einzigen Lauf auf den Kern** („Innsight", „Inn Sight" o. ä.; am
   Datei-Bestand nachgezählt). Die gesamte Risikolage (K2) hängt am Kern,
   und dessen Registerstand trägt den 19.08.; die **Alterungs-Regel mit
   Prüfschritt erneuert nur die sechs Kombinationen** — ein NEUER
   Kern-Treffer nach dem 19.08. würde vom vorgeschriebenen Prüfschritt
   nie gefangen. Die Alterungs-Regel liest sich als Frische-Garantie der
   Entscheidungsgrundlage, deckt aber nur deren unkritischste Achse. (M2)

---

## Kategorie D — Skript-Härtung (Ergebnis: keine Regression, Härtung real)

Diff `b0ba1a3~1..b0ba1a3` vollständig gesichtet, **jede gelöschte Zeile
einzeln**: Gelöscht wurden genau (1) die alte Kopfkommentar-Zeile 2,
(2) die Inline-Tabellenkopf-Zeile „| Kontrolle | …", (3) die
Positiv-Kontrollzeile, (4) die Negativ-Kontrollzeile. Alle vier kehren
inhaltlich in der neuen Funktion `kontrollen(phase, neg)` wieder
(Tabellenkopf jetzt mit `(${phase})`, Labels mit Suffix
`-start`/`-ende` → getrennte Dateinamen, kein Überschreiben). Aufrufe:
`await kontrollen('start', neg)` VOR und `await kontrollen('ende', neg)`
NACH der Wortschleife — die Kontrollen laufen nachweislich zweimal
(Rohbeleg: Dateien 001–008 und 033–040). Der Negativ-Token wird einmal
erzeugt und in beiden Phasen identisch verwendet (richtig: gleicher
Prüfling, zwei Zeitpunkte). `hashes.txt` wird NACH den Ende-Kontrollen
geschrieben und enthält sie (40/40). Abruf-Zähler `n` zählt Kontrollen
mit. Sonst ist das Skript zeichengleich unverändert (rdap/dpma/euipo/
req-Logik identisch). **Keine Auffälligkeit.**

*Grenze der Härtung (kein Befund, aber festzuhalten):* „grün nur, wenn
BEIDE Durchgänge treffen" steht im Kommentar — das Skript URTEILT
weiterhin nicht (Ausgabe „kein Urteil", so deklariert); ob beide
Durchgänge trafen, muss der Bediener an der Tabelle ablesen. Ein harter
Abbruch/Exit-Code bei gerissener Kontrolle wäre die nächste
Härtungsstufe.

---

## Kategorie E — Zielgruppen-Blick (Laien-Entscheider)

**Der Satz, der die Antwort ändern könnte und fehlt:** „**Ob eine Firma
‚Innsight …' bereits im Handelsregister steht, haben wir nie geprüft**
(kein maschineller Zugang; § 7.10 der Faktenbasis) — und die
Branchenverzeichnisse, über die uns der US-Namensvetter nur zufällig
auffiel, sind ebenfalls nie systematisch gesichtet worden." Ein
Entscheider, der einen Firmennamen wählt, würde bei diesem Satz
möglicherweise die Prüfung nachfordern statt sofort zu wählen.
Zweitkandidat: „Der Kern ‚Innsight' selbst wurde heute NICHT neu
gemessen — nur die sechs Kombinationen; die Registerlage am Kern trägt
den Stand 19.08." Drittkandidat: der offene EN-Muttersprachler-Check.

Positiv anzuerkennen: Der Kasten trennt Messung von Einschätzung
(Sprachschienen-Spalte deklariert), zieht die Anwaltsfrage ausdrücklich
NICHT auf die eigene Seite („nicht unsere Annahme") und macht aus der
Alterungs-Warnung einen Prüfschritt — das ist die richtige Form, nur
sein Prüfraum ist zu eng (M2).

---

## Kalibrierung (beide Behauptungen am Objekt geprüft)

- **K1 „Inn:Sights (DE 3020232350773) ist in den Klassen 9, 35 und 42
  eingetragen" — FALSCH.** Rohbeleg
  `sensibel/rohbelege-R19-C/dpma-auskunft-20260819T102552Z-941cbc/004-auskunft-DE-3020232350773.body.html`:
  „Klasse(n) KL **35, 41, 42**". Klasse 9 gehört zu anderen Zeichen des
  Suchraums (INN SIGHT: 9/13 · INNOSIGHT: 9/16/35/41). Die Quelle
  (§ 2-Tabelle, § 3.2 zweifach) und der geprüfte Kasten sagen
  übereinstimmend 35/41/42 — der Kasten ist hier korrekt, die
  Kalibrierungs-Behauptung nicht.
- **K2 „innsight.com ist nicht erwerbbar (aktiver Anbieter)" —
  GESTÜTZT, mit Reichweiten-Vermerk.** Quelle § 4 wörtlich; Rohbelege:
  RDAP (registriert 08.10.1997, exp. 07.10.2026, GoDaddy,
  client-transfer-prohibited) + Facebook-Sichtung (aktiver
  Internetmarketingservice für Hoteliers, San Francisco,
  sales@innsight.com, Post vom 10. Juli). Reichweite: „nicht erwerbbar"
  ist die Feststellung „aktiver Betrieb, kein Kaufangebot" — eine
  Halter-Anfrage wurde nie gestellt (§ 7.6: keine Halter-/
  Händleranfragen versendet). Als absolute Unmöglichkeits-Aussage wäre
  der Satz überschießend; im Sinn der Quelle („Erwerbslage:
  Feststellung") deckt der Beleg die Aussage. Belegstufe der
  Halter-Zuordnung: Browser-Protokoll ohne Hash (Quelle weist das selbst
  als schwächere Stufe (b) aus).

---

## Befundliste nach Schwere

**Schwer: 0** am Prüfgegenstand. *(Die falsche Kalibrierungs-Behauptung
K1 stammt aus dem Prüfauftrag, nicht aus dem geprüften Dokument.)*

**Mittel: 6**

- **M1** „Liste liegt bereit" (Alterungs-Regel) ist eine
  Bestandsaussage ohne auffindbaren Träger. Suchweg (mit
  Positivkontrolle): `git grep -il "innsight-hospitality" b0ba1a3`
  repo-weit → nur die Vorlage selbst; `git ls-tree -r b0ba1a3
  marke/live-welle/` → keine Sechser-Liste (nur welle4–6.txt,
  favoriten…); `grep -rli hotelsolutions` im Arbeitsbaum (alle
  Endungen, ohne sensibel/.git) → nur Vorlage, Projektquelle, Tagesplan
  19.08. (Fließtext, keine schnellcheck-taugliche Liste); `find` über
  `sensibel/rohbelege-R19-leit` + `-R20-leit` (Dateien auf
  Ordner-Ebene) → keine. Positivkontrolle der Suche: dieselben Muster
  fanden die Rohbeleg-Dateien und die Vorlage. Der Prüfschritt der
  Alterungs-Regel referenziert damit eine Datei, die neu gebaut werden
  müsste. Reparatur trivial: Liste committen oder Pfad nennen.
- **M2** Der Alterungs-Prüfschritt (und die Neumessung) deckt nur die
  sechs Kombinationen — **der Kern „Innsight", an dem laut Kasten alle
  Vorbehalte hängen, wurde am 21.08. nicht neu gemessen** (am
  Datei-Bestand nachgezählt: kein Kern-Lauf unter den 40 Abrufen); die
  K2-Registerlage trägt den Stand 19.08., und der vorgeschriebene
  Prüfschritt am Entscheidstag würde einen neuen Kern-Treffer nie
  fangen.
- **M3** Die `.com`-Frei-Belege sind 0-Byte-Dateien; der HTTP-Status
  (404 vs. Fehler) ist am Rohbeleg nicht nachvollziehbar, die
  Konsolen-Ausgabe des Laufs (Ergebnistabelle, „Abrufe: 40; Zeit: …")
  ist nicht archiviert (kein Pendant zu den meta.json der
  R19-C-Läufe). Gilt gleichermaßen für den 19.08.-Stand — keine
  Falschaussage, aber eine Lücke in der Beleg-Kette genau in der
  Fehlerklasse, gegen die die Härtung gebaut wurde.
- **M4** EN-Muttersprachler-Check (offenes K6-Teilkriterium) fehlt in
  beiden geltenden Kästen; er überlebt nur im für überholt erklärten
  Hauptteil.
- **M5** Handelsregister-Lücke (§ 7.10) nirgends in der Vorlage
  (0 Treffer, Positivkontrolle getroffen); Tabellenspalte
  „Register 0/0" für Laien als Voll-Register lesbar.
- **M6** W9-/Branchenverzeichnis-Lücke (§ 7.12, P-12) fehlt — der
  Fundweg des US-Namensvetters (Zufallsfund) macht sie gerade bei
  Innsight relevant.

**Hinweis: 4**

- **H1** „dieselbe Form wie am 19.08.": Bindestrich ja, Schreibung
  nein — DPMA-Query 19.08. klein, 21.08. groß; Case-Sensitivität der
  Smartsearch nicht gemessen (beide Läufe 0, Kontrolle `apaleo` klein
  traf).
- **H2** Bindestrich-Messform findet Leerzeichen-/Zusammenschreibungs-
  Marken nicht — Fehlklasse in der Quelle selbst belegt (§ 3.4 Nr. 1),
  im Kasten nicht deklariert.
- **H3** Überholt-Erklärung des Hauptteils ohne Positivliste des
  Weiter-Geltenden (u. a. „Nicht Teil dieser Freigabe"-Block mit den
  fünf Gates).
- **H4** Belegstufe der INNsight-Halter-Zuordnung (Facebook/Browser-
  Protokoll ohne Hash) nicht ausgewiesen; INN SIGHT (Kl. 9/13) und die
  14er-Dichte nur per „u. a." gedeckt.

---

## Pflicht-Schlussabschnitte

### 1 · Nicht erhoben / nicht prüfbar

- **HTTP-Status der `.com`-Abrufe 21.08.** — am Rohbeleg nicht prüfbar
  (leere Bodys, kein Status-Feld archiviert); Fundort:
  `sechser-neumessung/006/010/014/018/022/026/030/038-*.txt`.
- **Konsolen-Ausgabe des Neumessungs-Laufs** (Ergebnistabelle,
  „Abrufe: 40; Zeit: …") — nicht archiviert; die Uhrzeit-Aussage des
  Kastens ist nur über Datei-mtimes + Commit-Zeit belegt.
- **Case-Sensitivität der DPMA-Smartsearch** — nicht gemessen (weder
  von der Leitsession noch von mir); betrifft H1.
- **Live-Gegenmessung** (eigener frischer RDAP/DPMA/EUIPO-Abruf) —
  bewusst nicht durchgeführt; geprüft wurde die Beleg-Kette, nicht der
  heutige Live-Zustand. Die Frei-Aussagen altern seit 14:06 MESZ weiter.
- **Vollzähligkeit der 19.08.-Läufe** („43 Kombinationen", Kasten
  19.08.) — nicht nachgezählt; geprüft habe ich nur die sechs
  relevanten Kombinationen + Kontrollen des jeweiligen Laufs. Die
  43er-Zahl gehört zum Kasten vom 19.08., nicht zum Prüfgegenstand.
- **Browser-Belegstufe** (San Francisco, „aktiver Anbieter") — nicht
  unabhängig reproduzierbar (Browser-Protokoll ohne Hash; von der
  Quelle selbst so ausgewiesen).
- **Vollzähligkeit der 14er-Liste der Vertiefung** — gegen das Dokument
  geprüft, nicht gegen TMview neu erhoben.

### 2 · Welche Verfälschung hätte mein Verfahren NICHT gefangen?

- **Konsistent gefälschte Rohbelege:** Antwortdateien und `hashes.txt`
  liegen im selben git-ignorierten Ordner; meine 40/40-Nachrechnung
  beweist interne Konsistenz, nicht die Authentizität der Abrufe. Ein
  Lauf gegen einen Mock statt gegen die echten APIs, oder nachträglich
  editierte Dateien mit neu erzeugter Hashliste und gesetzten mtimes,
  wären unsichtbar — es gibt keinen unabhängigen Zweitkanal.
- **Selektives Weglassen eines siebten, NICHT freien Kandidaten:** Die
  Nummerierung 001–040 ist lückenlos, aber ein Neu-Lauf mit gekürzter
  Liste hinterlässt keine Lücke. Dass genau die sechs der User-Auswahl
  gemessen wurden, habe ich gegen den 19.08.-Kasten geprüft — nicht
  gegen eine unabhängige Quelle der Auswahl.
- **`.com`-Kanalkippen mit leerem Fehler-Body:** Hätte Verisign mitten
  im Lauf leere Nicht-404-Antworten geliefert, sähen die Rohbelege
  identisch aus (M3); nur das nicht archivierte Konsolen-Urteil
  unterschiede es.
- **Fehler in der Vertiefung selbst:** Ich habe den Kasten gegen die
  Vertiefung und punktuell gegen deren Rohbelege geprüft; wo ich den
  Rohbeleg nicht geöffnet habe (z. B. INNOSIGHT-Zeile, US-Marken des
  Namensvetters), erbt mein „✔" die Richtigkeit der Vertiefung.

### 3 · Hätte ich die Funde auch OHNE die Kategorien-Hinweise gefunden?

- M1 (Liste ohne Träger): **vielleicht** — die Bestandsaussagen-Regel
  des Projekts lenkt darauf, aber ohne den Auftrag, jede Faktenaussage
  einzeln zu prüfen, wäre der Nebensatz leicht durchgerutscht.
- M2 (Kern nicht neu gemessen): **ja** — fällt beim Nachzählen der 40
  Abrufe zwangsläufig auf.
- M3 (0-Byte-`.com`): **ja** — beim Öffnen der Rohbelege unübersehbar.
- M4/M5/M6 (fehlende Quell-Vorbehalte): **eher nein** — ohne den
  expliziten Auftrag B („von der Quelle rückwärts, ganzes Dokument als
  Leseraum") hätte ich vermutlich nur die drei genannten Vorbehalte
  (K2/K4/Klang) gegengelesen; der Handelsregister-Fund kam direkt aus
  dem erzwungenen §-7-Volldurchgang.
- H1 (Groß/Klein): **eher nein** — nur durch den Auftrag, die
  Formgleichheit am Rohbeleg beider Stände zu prüfen.
- K1-Widerlegung: **ja** — Klassenvergleich am Rohbeleg ist
  Routineprüfung der Kategorie A.

*Protokoll erstellt 21.08.2026, unabhängiger R20-Prüf-Subagent.
Kein git add, kein Commit, kein Push — Disposition bei der Leitsession.*
