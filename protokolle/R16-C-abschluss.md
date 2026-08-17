# R16-C (Lucky Roux) — Abschlussmeldung: Planungskonflikt 300er-Schwelle · R14-Postkorb · H-1

**Token-Verbrauch: von der Session nicht erhebbar — seit der
`/cost`-Abschaffung existiert für die Hauptsession kein Messweg.**
Subagenten: **keine** (kein Prüfer beauftragt — Kurzraster durch die
Leitsession; der optionale Gegenfrage-Agent wurde **nicht** eingesetzt,
die Gegenfragen sind selbst gestellt und stehen als gesperrte
Entlastungen G-1…G-3 im Dokument).

**Modell dieser Session:** ⚠️ Nicht per Statuszeile belegt. Die
Umgebungsangabe beim Session-Start nennt **Opus 5 (1M context)**
(`claude-opus-5[1m]`); nach CLAUDE.md Regel 7 belegt nur die Statuszeile
oder `/cost` das tatsächliche Modell. Der Tagesplan-Nachtrag 14:50
(Punkt 3) hat Modell-Statuszeilen für R3-A…R15-E ausdrücklich als
entfallen erklärt — für R16 gilt sinngemäß dasselbe.

**Datum:** 17.08.2026 (Montag) · **Auftrag:**
`protokolle/tagesplan-2026-08-17.md`, Abschnitt „Session-Prompts R16",
Strang R16-C · **Prüfstand bei Start:** `0c4692f` (MKT) / `d751624`
(Zentrale).

---

## Block 1 — Gebaut und verifiziert

### Commits

| Repo | Hash | Inhalt | Push-Stand |
|---|---|---|---|
| marketing | **`5d7d78d`** | Teil 1 — Akquiseplan § 4.4 (Entscheidungsvorlage) + Entscheidungspunkt E-A4 in § 8. 156 Einfügungen / **0 Löschungen** | ✅ veröffentlicht (belegt: `git branch -r --contains` nach frischem `fetch` → `origin/main`) |
| marketing | **`686ff18`** | Teil 3 — Erstfassung H-1 *(inhaltlich überholt durch `b31f7f9`, s. u.)* | ✅ veröffentlicht |
| marketing | **`b31f7f9`** | Teil 3 KORRIGIERT — H-1 = Di 22.09.2026 eingetragen | ⏸️ **ZURÜCKGEHALTEN**, s. Push-Lage |
| zentrale | **`7cf1761`** | Teil 2 — Postkorb `eingang/2026-08-17-mkt-r14-nachmeldung.md`, 167 Zeilen | ✅ veröffentlicht (`d751624..7cf1761`, nach frischem `fetch` in `origin/main` enthalten) |

**⚠️ Push-Lage `b31f7f9` — bewusst zurückgehalten.** Unter meinem Commit
liegt ein **ungepushter Commit von R16-A** (`a495a0f`, Ben Beckman).
Auch der gezielte Refspec `git push origin b31f7f9:main` würde ihn als
**Vorfahre mitveröffentlichen** — der Refspec schützt nur nach oben.
Nach CLAUDE.md („dagegen hilft nur, nicht zu pushen und zu warten") und
Regel 3a **habe ich nicht gepusht**. Auflösung: R16-A pusht selbst und
nimmt meinen Commit als Nachfahren mit, oder die Leitsession pusht nach
deren Abschlussmeldung. **Der Commit ist lokal vollständig; es fehlt
allein die Veröffentlichung.**

### Teil 1 — Akquiseplan § 4.4: Planungskonflikt als Entscheidungsvorlage

**Die Kernfrage des Auftrags war die Herkunft der 300 — Ergebnis: eigene
Setzung ohne Quellenbindung.** Vier unabhängige Belege, alle am Objekt:

1. **R-K1** (`akquise/listenbau-regelwerk.md` § 8a) nutzt 300 als
   **Rechenbeispiel** für den Kostensprung bei Massenversand, nicht als
   Schwelle; die Quellen-Tabelle darüber nennt Massenaussendung **ohne
   Zahl**.
2. **o8 P-7** weist die Mengenangaben selbst als **eigenen Beleg-Typ**
   aus, ausdrücklich nicht von der ①-Stufe des EuGH-Zitats gedeckt.
3. **Suchlauf über fünf Primärquellen** (DSK-OH 2022 + Zweitkanal-Abzug,
   EuGH C-621/22 EN, EuGH C-621/22 DE-Amtsblatt, UWG-Volltext), Muster
   `300`, `grep -o | wc -l`: **0 Treffer in allen fünf.**
   **Positivkontrolle gleicher Zeichenklasse** (`[0-9]{3}`):
   111 / 111 / 119 / 22 / 130. **Reichweite ausgewiesen** (deckt diese
   fünf Dateien, nicht „keine Quelle kennt eine 300"); der
   Zweitkanal-Abzug ist als **nicht unabhängiger Lesekanal**
   gekennzeichnet.
4. **`git log -S`:** R-K1-Beispiel und A-8-Rechnung entstanden im
   **selben** Commit `6e4daa5` (11.08.), der Trigger einen Tag später
   (`3e83253`). ⭐ **Daraus folgt gerade NICHT „unabhängig hergeleitet"** —
   diese naheliegende und für uns günstige Formulierung steht deshalb
   nicht im Dokument.

**Kernbefund, der über den Auftrag hinausgeht:** Die 300 ist im Plan
zugleich **Boden** (A-8: Mindestgröße für eine auswertbare Quote) und
**Decke** (o8 § 11.3). Das erlaubte Fenster ist damit **ein einziger
Punkt** — und der liegt **unter** dem Bedarf von ≈ 337 für einen
Abschluss.

**Entlastender Gegenbefund, mit Fundstelle im Satz:** o8 § 11.3 nennt
als **ersten** Trigger den Bau der ersten realen Welle, ohne Mengenbezug
(abgebildet als `WP-34`). **Für Welle 1 — die einzige, die die
November-Frist tragen kann — ist die Neu-Führung ohnehin Pflicht; die
300er-Schwelle kostet dort nichts.**

**Vier Optionen mit Folgen** (A Deckeln · B Regelbetrieb · C Schwelle
anpassen · D Umfang zuerst definieren), **drei ausdrücklich gesperrte
Entlastungen**, **Empfehlung (D) dann (B) unter Vorbehalt**, „getragenes
Restrisiko" von „zulässig" getrennt. **Nichts entschieden** — E-A4 in § 8.

**Zu Option (C):** Sie ist **zulässig**, weil die 300 eigene Setzung ist
(Auftragsbedingung erfüllt). Gesperrt ist nicht die Option, sondern die
**Begründung**, die eigene Planung reiße die Schwelle.

**Nachgerechnet (nicht übernommen):** 0,99^300 = 0,0490 ✓ · kleinstes n
mit P(0) < 0,05 ist **299**, die 300 ist dessen Aufrundung ·
Trichter 336,7 / 606,1 / 1.600,0 ✓ · Wellenzahl bei Deckel 300:
2 / 3 / 6 · Kalender per `Get-Date`: 11.09. + 63 Tage = 13.11. ✓,
spätester noch tragender Versandtag **Fr 18.09.** (13.11. − 56 Tage).

**Dubletten-Vermeidung:** Der Konflikt ist in
`akquise/wellenprotokoll-vorlage.md` § 8a (`WP-35`) **bereits benannt** —
§ 4.4 verweist als **Zeiger** darauf, statt eine dritte Fundstelle
anzulegen.

**Löschungszählung, zwei Nenner:** gegen Rundenstart `0c4692f`
**0 Löschungen** · gegen den eigenen Bau-Commit ebenfalls 0 (reiner
Einschub). **Kein Bestandstext angetastet.**

### Teil 2 — Postkorb an die Zentrale

**Prämisse des Auftrags am Objekt geprüft und präzisiert:** Der Auftrag
sagt, der Befund lebe in der Zentrale „nur im Chat". Tatsächlich führt
`zentrale\STATUS.md` den Sachverhalt seit 14.08. — dort aber ausdrücklich
mit der Belegstufe *Abschlussbericht im Chat, sinngemäß, von der Zentrale
nicht gegengelesen*, samt eigenem Posten „R14 per Postkorb nachmelden".
**Die Meldung ersetzt also die Belegstufe, nicht den Sachverhalt** — und
sagt das im Kopf, damit sie nicht als Doppelmeldung gelesen wird. Die
ausstehende **inhaltliche Gegenlesung** durch die Zentrale ist als
weiterhin offen ausgewiesen.

**Inhalt aus den Rohprotokollen** (`R14-A-abschluss.md`,
`R14-B-abschluss.md`, `R14-B-pruefer.md`), nicht aus STATUS-Fassungen —
Kernbefunde **mit Nennern**: Rechtsmatrix **6/6** · Wettbewerbsbild
**4/4** · Prüfer **17/17 disponiert** (16 repariert, 1 mit Träger,
0 stillschweigend offen) · Z-6 **28/28** · Belegstufen-Hebung
**27 geprüft / 26 gehoben / 1 begründet nicht / 0 inhaltlich falsch**.
Zur Z-6-Zeile gehört mitgemeldet, was **nicht** mit aufgelöst wurde
(sonst liest sich 28/28 als Gesamtklärung).

**Der § 3a-Befund — alle drei Zahlen selbst reproduziert**, statt die
delegierten Zahlen zu übernehmen (L-15): Rohbeleg
`sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.txt` (696 Zeilen),
`grep -o | wc -l`: **UWG 148 · § 3a UWG 21 · § 7 UWG 0** — identisch mit
R14-B. **Positivkontrolle gleicher Zeichenklasse:** `§` = 241 Treffer;
der Nulltreffer bei § 7 UWG ist belastbar, weil das strukturgleiche
Nachbarmuster `§ 3a UWG` im selben Lauf 21-mal trifft.

**Die zwei Zentrale-Posten selbst nachgemessen** (nicht aus dem Prompt
übernommen):

| Posten | Stand laut Zentrale | Gemessen 17.08. (R16-C) | Werkzeug + Positivkontrolle |
|---|---|---|---|
| **F10** | offen | **erledigt** | `git check-ignore -v` → `.gitignore:17` greift; PK: `CLAUDE.md` → Exit 1 (das Werkzeug unterscheidet wirklich) |
| **M1** Rückstand | 18 Commits | **2** (`cfdd5db`, `5020bc2`) | `git log 8d80a64..HEAD` im Blueprint, nur lesend; PK: 82 Commits gesamt zählbar |
| **M1** Drift | „6+ Kopien DRIFT" | **0 DRIFT**, 12 synchron | `node tools/pruefe-kopien.js <marketing>`, Exit 0 |

⭐ Der Auftrag nannte nur „18 Commits" — die **zweite Hälfte derselben
Posten-Zeile** („6+ Kopien DRIFT") wäre sonst als einzig verbliebener
Teil stehen geblieben und hätte den Posten am Leben gehalten.

### Teil 3 — H-1 (mit eigener Korrektur, s. Block 4)

**H-1 = Di 22.09.2026 eingetragen**, mit Quelle (User-Chat 17.08.
~14:50 MESZ), Form (Kurzantwort) und **Belegstufe Nutzerangabe** —
ausdrücklich **kein** Betreiber-Dokument. **Abweichung zum Planungsanker
22.09.: 0 Tage → kein Planumbau**, wie vom Auftrag verlangt geprüft.

**Was aus „0 Abweichung" NICHT folgt und deshalb im Plan steht:** Der
Anker war als *frühester plausibler* Termin gesetzt, damit eine
Vorverlegung das Messfenster nicht trifft. **Dieser Puffer ist
aufgebraucht** — Messfenster-Ende So 20.09., Einsammlung Mo 21.09.,
Livegang Di 22.09.: ein Tag Abstand. Zusätzlich ausgewiesen: Die
Nutzerangabe steht neben einem Nachbar-Repo, das durchgehend nur das
**Ziel „Ende September"** führt (E-T4) — vereinbar, aber das Tagesdatum
ist dort nicht dokumentiert; Betreiber-Bestätigung wäre die stärkere
Stufe.

**Löschungszählung, zwei Nenner:** gegen Rundenstart `0c4692f`
45 Einfügungen / **5 Löschungen**, alle fünf einzeln geprüft (H-1-Zeile
+ vier Zeilen des umformulierten § 5-Absatzes) · gegen den eigenen
Bau-Commit `686ff18` 44/20 (davon 18 Zeilen meine eigene, ersetzte
Vorfassung). **Nahtstelle gelesen:** der Klammervermerk
„*(Wochentags-Etiketten … Prüfer-Befund G-1.)*" ist vollständig
erhalten — geprüft, weil die numstat-Zeile zunächst nach einer
konsumierten Zeile aussah.

### Wächter-Lauf — Fertig-Kriterium „0 neue nicht im Pool"

| Lauf | Werkzeugstand | Ergebnis `akquise/akquiseplan.md` |
|---|---|---|
| vorher | Fassung bei Rundenstart | 29 geprüft / 25 bestätigt / 4 eigene / **0 nicht im Pool** |
| nachher | dieselbe Fassung | 30 / 26 / 4 / **0 nicht im Pool** |
| nachher | **umgebaute Fassung (Strang B)** | 30 / 26 / 4 / 0 Bestand / **0 NEU**, Exit **0** |

**Delta meiner Arbeit: +1 geprüftes Zitat, +1 bestätigt, 0 neue
Verstöße.** Das eine neue Zitat ist `„Nächster konkreter Schritt"`
(26 Zeichen, aus `STATUS.md`, im Pool → bestätigt).

⚠️ **Das Lauf-Delta ist je Datei zugeordnet, nicht pauschal der eigenen
Arbeit** (L-40): Die gleichzeitige Veränderung bei
`handel/kanal-rechtsmatrix.md` (168 → 195 geprüft) stammt aus **R16-A**,
nicht von mir. Der dritte Lauf lief bereits gegen das von Strang B
umgebaute Werkzeug — **gemeldet, nicht angepasst**, wie im Prompt
verlangt; er misst gegen die Baseline `0c4692f`, also exakt meinen
Rundenstart, und ist damit die stärkere Bestätigung.

---

## Block 2 — Offen geblieben

| # | Punkt | Träger |
|---|---|---|
| **E-A4** | **Der Planungskonflikt selbst ist nicht entschieden** — das war Auftrag (Vorlage, kein Entscheid). Vier Optionen liegen vor | **User** |
| **Umfang „neu führen"** | Weder o8 § 11.3 noch die Wellenprotokoll-Vorlage definieren, ob eine Neu-Führung Vollrevision oder Delta-Abgleich meint. **Solange das offen ist, ist Option (B) nicht bezifferbar.** Suchweg dokumentiert (4 Treffer, keiner definiert den Umfang) | **MKT-HANDEL / Träger von o8** (nicht dieser Plan) |
| **Push `b31f7f9`** | Zurückgehalten wegen fremdem Vorfahren `a495a0f` | R16-A oder Leitsession |
| **Gegenlesung Postkorb** | Die Zentrale hat den § 3a-Befund nach eigener Angabe **nicht** gegengelesen; die Meldung liefert die Belege, ersetzt die Lesung aber nicht | Zentrale |
| **Betreiber-Beleg H-1** | Das Tagesdatum ist eine Nutzerangabe; im heypensio-Repo steht durchgehend nur „Ende September" | User / heypensio-Leitsession |

**Nicht angefasst (auftragsgemäß):** `akquise/interessenabwaegung-o8.md`
· `akquise/listenbau-regelwerk.md` · `handel/kanal-rechtsmatrix.md` ·
Anwalts-Briefing · `akquise/pruefe-zitate.js` (nur gelesen und
ausgeführt) · Projektquelle · STATUS.md · CLAUDE.md · Skills/Commands ·
Zentrale-Kerndokumente. **Fremde uncommittete Arbeit im geteilten
Arbeitsbaum** (`handel/kanal-rechtsmatrix.md`,
`akquise/pruefe-zitate.js`, `akquise/selbsttest-zitate.md`,
`akquise/listenbau-regelwerk.md`, `akquise/zitat-baseline-2026-08-17.md`,
`protokolle/R16-B-bericht.md`, `.r16b-scratch-0c4692f/`) und in der
Zentrale (`.claude/settings.json`, `tools/`, Codex-Meldung im `eingang/`)
**gesichtet, nie mit-committet, nie gestasht.** Keine Außenhandlung,
keine Web-Recherche, kein neuer Rohbeleg-Ordner, kein Subagent.

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

### ⭐ Pflichtfeld: Welche benannten Posten mein Ergebnis ERFÜLLT

| Posten | Wo er steht | Status durch R16-C |
|---|---|---|
| **R15E-N-5** (Planungskonflikt 300 vs. 337–1.600) | Tagesplan Ziel 4; Projektquelle/STATUS als Nebenbefund | **erfüllt** — aufbereitet als § 4.4 + E-A4. Die Träger-Zeile kann auf „aufbereitet, Entscheid offen (E-A4)" umgestellt werden |
| **Ziel 7 — R14 per Postkorb nachmelden** | Tagesplan; `zentrale\STATUS.md` „An Shanks (NEU 14.08. nachts)" (1) | **erfüllt** — `7cf1761`, veröffentlicht. Der Zentrale-Posten kann geschlossen werden |
| **H-1 Livegang-Tagesdatum** | Tagesplan Zeile 56 + 184; Messplan § 6 | **erfüllt** — 22.09.2026 eingetragen. Der Tagesplan-Satz „`beleg/baseline-messplan.md` Z. 322 trägt weiter ‚16.08.'" ist damit überholt |
| **F10** (Zentrale-Posten an Shanks) | `zentrale\STATUS.md` | **war bereits erfüllt** — durch R16-C nur gemessen und zurückgemeldet |
| **M1-Zahlen** (18 Commits / 6+ DRIFT) | `zentrale\STATUS.md` | **überholt** — korrigierte Messwerte zurückgemeldet (2 / 0); die Disposition der 2 Deltas bleibt bei der Leitsession |

### Weitere Nebenbefunde

- **R16C-N-1 — Der Akquiseplan trägt eine Annahme, die STATUS.md
  ausdrücklich für gekippt erklärt.** § 3.2 sagt, Liste und Bausteine
  seien „sofort baubar" und „nur der Versand hängt am Namen";
  `STATUS.md` „Nächster konkreter Schritt" Punkt 0 hält dagegen fest,
  nach LG Rn. 87 sperre das Gate **schon den ersten Datensatz**, und
  nennt wörtlich, der Akquiseplan sei „entsprechend nachzuziehen".
  **Die Stelle liegt in meiner Datei, das Nachziehen war aber nicht
  beauftragt** — ich habe sie deshalb nicht angefasst und melde sie
  statt zu handeln. ⚠️ Sie berührt § 4.4 nicht (dort ist die Kette
  ohnehin als „optimistisch gerechnet" ausgewiesen), wohl aber § 3.2
  und die Terminlogik. → **Leitsession / nächster AKQ-Strang.**
- **R16C-N-2 — Textbruch in § 4.3 seit dem Erststand.** Nach „…und die
  Terminarithmetik (§ 3)." endet das Blockquote, und der Folgesatz
  „Er ist der Kanal, mit dem die Pipeline **nach** dem ersten Abschluss
  trägt" schließt an einen anderen Bezug an als das „er" davor (dort:
  der Persona-Befund; gemeint: K1). Offenbar fehlt ein Zwischentext.
  Entstanden mit `d11535f` (11.08., Erststand) — **kein Schaden dieser
  Runde**; nicht repariert, weil der verlorene Text nicht rekonstruierbar
  ist und jede Ergänzung Erfindung wäre. → **Leitsession.**
- **R16C-N-3 — H-2 im Messplan trägt dieselbe verstrichene Frist
  (16.08.)** wie H-1 („Plan-Freigabe inkl. Entscheid BM-4/BM-5"), ebenso
  die Zeile „bis So 16.08." in § 5. **Nicht in meinem Scope** (nur
  H-1-Zeile/Anker), deshalb unverändert. Verstrichene Anker sichtbar zu
  machen ist laut Tagesplan Block-2-Aufgabe des Debriefs. → **Leitsession.**
- **R16C-N-4 — Das erlaubte Wellenfenster ist rechnerisch ein Punkt.**
  Falls E-A4 auf (A) oder (B) fällt, sollte o8 § 11.3 klarstellen, ob
  eine Welle von **genau** 300 gemeint ist (der Trigger sagt
  „überschreitet") — sonst entsteht ein Streit über eine Einzelstück-
  Grenze. → **Träger von o8.**

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **⭐ Der teuerste Fehler dieser Session war meiner: Ein
   Abschnitts-Ausschnitt trägt kein Negativ über eine Datei.** Ich habe
   „kein H-1-Datum nachgetragen" auf den Tagesplan-Abschnitt
   „Nachträge" gestützt (`sed -n '/## Nachträge/,/## ⚠️ Prüfer/p'`) —
   die Antwort stand in einem **neuen Abschnitt am Dateiende**, den mein
   Bereich per Konstruktion nicht erreichen konnte. Der Auftrag hatte
   den Nachträge-Abschnitt sogar namentlich genannt; genau das machte
   den engen Suchraum plausibel (L-34: ein präziser Quellverweis sagt,
   wo man **anfängt**). **Kosten:** ein veröffentlichter Commit mit
   falscher Aussage, korrigiert 20 Minuten später.
2. **⭐ Gefunden hat es nicht die Prüfung, sondern die Ausgabe eines
   ganz anderen Werkzeugs:** Die `git push`-Zeile nannte
   `ebe68dd..686ff18`, und weil `ebe68dd` nicht mein Rundenstart war,
   habe ich die Commit-Betreffs dazwischen gelesen — dort stand
   „User-Antworten (H-1 = 22.09., …)". **Lehre: Eine unerwartete
   Referenz in einer Werkzeugausgabe ist ein Prüfauftrag, kein
   Rauschen.** Ich hatte sie zunächst nur auf die Frage hin gelesen, ob
   mein Push fremde Commits mitveröffentlicht (Antwort: nein, sie waren
   bereits gepusht) — die eigentliche Information war eine andere.
3. **Eine Datei kann zwischen Lesen und Prüfen wachsen.** Der Tagesplan
   hatte bei meinem ersten Read 694 Zeilen, bei der Prüfung 730. Im
   Multi-Session-Betrieb ist der Auftragstext selbst ein wandernder
   Stand — der Doppel-Messstand-Vertrag gilt auch für ihn.
4. **Die naheliegende, für uns günstige Formulierung war die falsche.**
   „Zwei unabhängig hergeleitete Rechnungen kommen beide auf 300" wäre
   eine starke Bestätigung der Schwelle gewesen — `git log -S` zeigt,
   dass beide Zahlen aus **einem** Commit derselben Session stammen.
   Ohne die Messung wäre der Satz plausibel und unbelegt ins Dokument
   gegangen.
5. **Ein Auftragspunkt kann eine halbe Posten-Zeile treffen.** Der
   Prompt nannte für M1 nur „18 Commits Rückstand"; dieselbe Zeile trug
   „6+ Kopien DRIFT". Hätte ich nur den genannten Teil gemessen, wäre
   die Rückmeldung formal richtig und in der Wirkung wertlos gewesen —
   der Posten wäre über seine zweite Hälfte am Leben geblieben.

### (ii) Bewährte Muster

1. **⭐ Die Herkunftsfrage einer Zahl über `git log -S` statt über den
   Text.** Der Text sagt, woher eine Zahl **angeblich** stammt; `-S`
   sagt, wann sie **entstanden** ist. Erst beides zusammen trug den
   Befund „eigene Setzung" — und widerlegte nebenbei die bequeme
   Unabhängigkeits-These.
2. **Positivkontrolle in der Zeichenklasse des Musters.** Für das
   Negativ „300 kommt in keiner Primärquelle vor" war die Kontrolle
   `[0-9]{3}` (dreistellige Ziffernfolgen) aussagekräftig, ein
   Wort-Treffer wie „Werbung" dagegen nicht — bei der
   EuGH-Amtsblattmitteilung lieferte die Wort-Kontrolle **0** und hätte
   das Negativ für diese Datei ungedeckt gelassen. Der Fehlschlag der
   ersten Kontrolle war das eigentliche Ergebnis.
3. **Delegierte Zahlen selbst reproduzieren, bevor sie in eine
   Firmen-Meldung gehen.** 148 / 21 / 0 waren in zwei Minuten
   nachgemessen — und der Beleg ist jetzt reproduzierbar dokumentiert,
   statt auf ein Protokoll zweiter Hand zu verweisen.
4. **Vor dem Melden prüfen, ob der Empfänger die Sache schon führt.**
   Die Zentrale führte den § 3a-Befund bereits; erst diese Prüfung hat
   die Meldung von „wir melden Neues" auf „wir heben die Belegstufe"
   gedreht — inhaltlich derselbe Text, aber eine Meldung, die nicht als
   Dublette gelesen wird.
5. **Ein Zeiger statt einer dritten Fundstelle.** `WP-35` benannte den
   Konflikt schon; § 4.4 verweist darauf. Eine dritte selbständige
   Beschreibung hätte ohne Wächter und ohne Vorrangklausel auseinander-
   laufen können.
6. **Die eigene Reparatur sichtbar machen.** Der Korrektur-Kasten im
   Messplan nennt die falsche Vorfassung und den Grund. Ohne ihn stünde
   dort ein sauberes ✅, und niemand könnte je sehen, dass die Aussage
   eine Stunde lang das Gegenteil behauptet hat.
