# R14-A — Prüfprotokoll (unabhängiger Prüf-Subagent, frischer Kontext)

> **Prüfstand (eingefroren):** Commit **`8b46e64`**
> („R14-A: Z-6 aufgeloest (A3 traegt) + R40-N-6 + Belegstufen-Hebung auf
> Wortlaut-Archiv"). Vorgänger: `af9909f` (R14-B), davor `95fe3f1`
> (= Ausgangsstand der R14-A-Edits).
> **Prüfgegenstand:** `handel/preismodell-optionen.md` ·
> `handel/preisliste-vorlaeufig.md` · `handel/angebotsarchitektur.md` ·
> `protokolle/R14-A-protokoll.md` — alle ausschließlich über
> `git show 8b46e64:<pfad>` bzw. `git show 95fe3f1:<pfad>` gelesen.
> **Der Arbeitsbaum-Diff wurde auftragsgemäß NICHT gesichtet**
> (Parallel-Session R14-B schreibt in `handel/kanal-rechtsmatrix.md`
> und `fund/`). Einzige Ausnahme mit Begründung: der Wächter-Lauf
> (§ Kategorie 7) liest bauartbedingt den Arbeitsbaum.
> **Schreibrecht dieser Prüfung:** nur diese Datei.

---

## 0. Lesestände (mit Datum und ZEILENSPANNE)

| Quelle | gelesen | Stand |
|---|---|---|
| `zentrale\briefings\briefing-2026-08-13.md` | **vollständig, Z. 1–573** | 13.08.2026 abends |
| `zentrale\sensibel\entscheide-erhebungen-2026-08-13-wortlaut.md` (git-ignoriert, außerhalb von git — per Read) | **vollständig, Z. 1–102** | **Lesestand 13.08.2026** |
| `heypensio\n8n-lizenz-z6-und-mcp-vorlage-2026-08.md` (1.454 Z.) | Gliederung vollständig (34 `#`-Köpfe, per grep); **gelesen: Z. 1–120 (§ 0, § 1), Z. 440–734 (§ 3.6, § 3.7, § 3.8, § 4-Anfang), Z. 787–886 (§ 5), Z. 1249–1328 (§ 9, § 10)** | 13.08.2026 |
| `akquise/pruefe-zitate.js` @ `8b46e64` | Z. 1–70 (POOL-/ZIEL-/norm-Definition) + Ausgabezeilen | 13.08.2026 |
| Prüfgegenstand | Nachträge vollständig (Diff `95fe3f1..8b46e64`, 578 Zeilen), dazu Kopfkästen, Vorbehalts-Abschnitte, § 11 / § 6 / § 2 / § 4 und **jede Trefferumgebung** der unten genannten Muster. **NICHT vollständig gelesen** (3 Dateien, 4.454 Zeilen im Neustand) | — |

**Nicht gelesen / nicht prüfbar (ausdrücklich, keine Glättung):**
n8n-Papier §§ 2, 3.1–3.5, 4 (ab Z. 735), 6–8, 11 · die
Lizenz-Rohquellen unter `heypensio\quellen-n8n-lizenz\` · die
Wortlaut-Datei ist **selbstbestätigend** (dieselbe Session, die die
Erhebung führte, hat sie erstellt) — sie kann von mir gegen nichts
gegengeprüft werden.

## 0.1 Mein Zählweg (an jeder Zahl)

- **Extraktion:** `git show <hash>:<pfad>` in getrennte ALT-/NEU-Dateien
  im Scratchpad; alle Zählungen per Node-Skript über diese Dateien.
- **Flach-Zählung:** Blockquote-Präfixe (`> `) am Zeilenanfang entfernt,
  danach **alle** Zeilenumbrüche und Mehrfach-Leerzeichen zu einem
  Leerzeichen kollabiert — fängt umbrochene Phrasen. Wo Zeilen- und
  Flachzählung auseinandergehen, stehen beide Zahlen da.
- **Zählschlüssel getrennt:** *Zeile* ≠ *Vorkommen* ≠ *Fundstelle*
  (Fundstelle = eine sachliche Stelle, ggf. mehrere Vorkommen).
- **Positivkontrolle je Lauf** (musste treffen): `Nachtrag`
  (49/44/54 · case-sensitiv), `Startgebühr` (41/33/21), `A3`
  (36/12/10), repo-weit `Preismodell` (20 Dateien).
  **Gegenprobe** (durfte nicht treffen): `Zxx-99-erfunden` → 0 in allen
  drei Dokumenten; repo-weit genau **1** Treffer, nämlich im
  R14-A-Protokoll selbst, wo die Zeichenkette als Kontrollmuster
  dokumentiert ist — die Gegenprobe misst also nachweislich.
- **Suchraum je Negativ** ist unten an jedem Negativ genannt.

---

## Kategorie 1 — Z-6-Disposition: eigene Zählung, jede Stelle einzeln

**Eigene Zählung am Ausgangsstand `95fe3f1`** (Muster `Z-6`, roh und
flach identisch — kein Vorkommen war umbrochen):

| Datei | Zeilen | Vorkommen | flach | Fundstellen (meine Bündelung) |
|---|---|---|---|---|
| `preismodell-optionen.md` | **9** | **9** | **9** | **9** (8 mit Bezeichner + § 5.3 ohne Bezeichner; § 11 E-3 Punkt 4 = 2 Vorkommen, 1 Fundstelle) |
| `preisliste-vorlaeufig.md` | **14** | **16** | **16** | **11** |
| `angebotsarchitektur.md` | **9** | **10** | **10** | **8** |

**Ergebnis: die Zahlen des Protokolls sind reproduziert** — 9/14/9
Zeilen (= die Leitsessions-Messung), 9/16/10 Vorkommen, 9/11/8
disponierte Fundstellen, Summe **28**. Auch die Auflösung der
Abweichung zur heypensio-Angabe („8 Fundstellen + § 5.3 = 9") ist am
Quelltext bestätigt (n8n-Papier § 3.8 B-2, dort ausdrücklich als
**MINDESTliste** ausgewiesen).

**Disposition, Stelle für Stelle nachgeprüft: 28 von 28 disponiert,
0 unbehandelt.** Jede der 35 Vorkommen-Stellen trägt entweder einen
markierten Nachtrag, einen Zeiger auf den § 5.3-Wurzelkasten oder ist
ein sachlich richtiger Nicht-Edit (5 Stellen: Historie einer früheren
Reparatur bzw. Aussagen über die StB-Fragenliste — alle drei
Formulierungen „nicht als eigene StB-Frage geführt sind Z-3, Z-5, Z-6"
bleiben richtig, weil sie eine Aussage über die *Fragenliste* treffen,
nicht über den Klärungsstand).

**Wurde K04/Vapi oder der Architektur-Entscheid fälschlich
mitaufgelöst? — Nein, an keiner der 28 Stellen.** Gegenprobe über die
Muster `K04` (NEU 8/9/18), `Z-5` (15/14/13) und `nicht gefallen`
(case-insensitiv 4/5/2): Beide Vorbehalte werden in jedem einzelnen
neuen Kasten ausdrücklich ausgenommen; die W-B-Zeilen-Warnung in § 5.4
und die Überschrift „Vorbehalt 3" bleiben stehen. **Ein Teilbefund
bleibt: K03** — s. **PR-08**.

## Kategorie 2 — Was aus Nachtrag 6/8 + der Quelle NICHT angekommen ist

*(rückwärts von den Quellen gelesen, nicht vorwärts vom Dokument)*

| Quellen-Posten | Fundstelle | angekommen? |
|---|---|---|
| „Z-6 ist aufgelöst: A3 TRÄGT" | Briefing Nachtrag 6 Nr. 1 | **ja**, in allen drei Dokumenten |
| „offen aus dem Bündel bleibt nur noch Z-5/K04" | ebd. | **ja**, 3/3 |
| R40-N-6 „unlimited instances", gemeinsame Quota | ebd. Nr. 2 / Papier § 3.7 | **ja**, an beiden K7-Zeilen |
| **Quota-Grenze: die Regel gilt dem „Business or Enterprise plan license key"** | Papier § 3.7, Zitat wörtlich geprüft | **ja** — als Grenze (1) ausdrücklich mitgeschrieben; **Zitat-Deckung stimmt**: der Wortlaut deckt „unlimited number of instances" + „count toward your quota", **nicht** die Community-Edition, **keinen** Preis, **keine** Aussage über den kostenlosen Schlüssel |
| Keine Preiszahlen übernehmen („Steuerbasis offen", Betriebsart-Scope) | Papier § 3.7 | **ja**, als Grenze (3) |
| Auflagen **AU-1…AU-4** inkl. F3-Nachtrag | Papier § 3.6 | **ja**; die Unvollständigkeit des Formulierungsvorschlags (dort „AU-1…AU-3") ist erkannt und als R14A-N-1 gemeldet — **am Objekt bestätigt** |
| Restpunkt **K-1** (streitig, B gegen B, trifft W-A und W-B gleich) | § 1 / § 5.1 | **ja**, 3/3 |
| **Fälligkeitsregel** „bevor ein Kunden-Angebot mit A3-Architektur hinausgeht" | § 5.3 | **ja**, 3/3, wörtlich korrekt |
| Klärweg/Adressat `license@n8n.io` statt n8n-Sales + Begründung | § 5.2 | **ja** |
| „Ist die Rechenbasis A3/W-B damit freigegeben? **Nein**" | § 1 Tabelle | **sinngemäß ja** („Was aus dieser Auflösung NICHT folgt") |
| **„Keine Rechtsberatung. Die Auslegung ist Stufe E."** (§ 0.2) und **„passt zu dem, was die Lizenz erlaubt" ≠ „von der Lizenz gedeckt"; ob eine FAQ im Streitfall bindet, ist offen** (§ 10, Prüferbefund F5) | § 0.2 · § 10 | **NEIN → PR-03.** Suchraum: alle drei Dokumente im Neustand, Muster `Rechtsberatung` → **0/0/0**, `Stufe E` → **0/0/0** |
| **Betriebsregel O-2:** der Kunde öffnet n8n nicht seinerseits seinen Gästen — sonst kippt der Backend-Fall in den OEM-Fall | § 3.7 / § 9 O-2 | **NEIN → PR-10.** Muster `Gäste` → 0/0/0, `OEM` → 1/0/0 |
| AU-3-Belegteilung (Rebranding-Verbot trägt die FAQ (B), nicht die Klausel allein) | § 3.6 | **nein**, verkürzt zu „kein White-Labeling" (Hinweis, in PR-03 mitgeführt) |
| N-5 Expertenprogramm (bewusst nicht verfolgt) | Nachtrag 6 Nr. 3 / § 9 N-5 | **nur im Protokoll** (R14A-N-5), kein Zielort im Wahrheits-Kanal — Leitsessions-Posten |
| O-11 Lizenzserver-Ping/Telemetrie (DSGVO-Rolle im A3-Modell) | § 9 O-11 | **nur im Protokoll**, als „nicht verfolgt" markiert — regelkonform |
| Nachtrag 8: Regel für KÜNFTIGE Erhebungen entscheidet der User (Wiedervorlage Garp) | Briefing Nachtrag 8 | **nirgends vermerkt** — Hinweis, Zentrale-Posten |

## Kategorie 3 — Hebung ohne Wortlaut-Deckung / still korrigierte Abweichung

**Nenner selbst erhoben** (Muster `Wortlaut nicht archiviert`, Stand
`95fe3f1`): zeilenweise **2 / 3 / 11**, flach **3 / 5 / 11** — der vom
Protokoll berichtete Umbruch-Befund (drei verdeckte Vorkommen, davon
zwei in der Preisliste) ist **exakt reproduziert**. Die Zuordnung
stimmt ebenfalls: alle 3 Preismodell-Vorkommen liegen in § 11; die 5
Preislisten-Vorkommen sind Kopf-Nachtrag, Kopfkasten-Vermerk und die
Nachträge in §§ 3/4/5; die 11 Angebots-Vorkommen sind Kopf-Nachtrag,
Quellenliste, § 1-Sammelangabe und AA-1…AA-8. Auch die **9 ✅-Kästen**
des § 11 sind nachgezählt (`^> ### (✅|⬜|☐)` → genau 9: E-1, E-2a,
E-2, E-3, E-4, E-5+E-5a, E-6, E-7, E-8).

**Deckung je Vermerk gegen die Wortlaut-Datei: 25 von 25 inhaltlich
gedeckt, 0 inhaltlich falsch.** Ich habe jede der neun E-Entscheide und
jeden der acht AA-Punkte einzeln gegen die archivierte Antwort gelesen;
kein Vermerk behauptet etwas, das der Wortlaut widerlegt.

**Aber der Nenner trägt nicht, wie er behauptet:**

1. **Er ist beim Preismodell an einen ABSCHNITT gebunden, bei den
   anderen beiden an das DOKUMENT.** Der Kasten sagt „Der Nenner ist die
   Zahl **aller** ✅-Vermerke dieses Abschnitts" — auf Dokumentebene gibt
   es eine **weitere**, tragende Belegstufen-Angabe, und sie ist
   ungehoben: **PR-02**.
2. Das Suchmuster war die **Zeichenkette** „Wortlaut nicht archiviert" —
   es trifft die Varianten „**der Wortlaut ist nicht archiviert**"
   (Preismodell-Kopf) und „**der User-Wortlaut ist nicht archiviert**"
   (Angebot, § Status/Vorbehalte Punkt 1) nicht. Genau die Klasse, die
   das Protokoll bei der Umbruch-Variante selbst gefunden hat, schlägt
   bei der **Wortvariante** erneut zu (→ PR-02, PR-11).
3. Zwei Deckungs-Aussagen sind stärker formuliert, als der Rohbeleg
   trägt: **PR-06** (AA-8) und **PR-07** (Zitate ohne „(Recommended)").

**Still korrigiert statt als Befund geführt: nichts gefunden.** Die drei
Präzisierungen sind sichtbar als Präzisierungen ausgewiesen, mit
Beleg-Zitat, und ändern keinen Entscheid-Inhalt (am Wortlaut
nachgelesen: E-2 „pro Haus macht schon Sinn außer der Betreiber ist
sehr preissensibel …", E-3 „Zugänge und alles gehören ihm" / „bin mir
nicht schlüssig", die beiden User-Rückfragen — alle vier Zitate sind
**zeichengenau** aus der Rohquelle übernommen).

## Kategorie 4 — Vorbehaltsverlust

**5 von 5 geprüften Vorbehalten stehen — kein Verlust.**

| Vorbehalt | Befund |
|---|---|
| **Firmierungs-Vorbehalt** | steht; im Angebots-Kopfnachtrag ausdrücklich als „unverändert" wiederholt |
| **K04 / Z-5** | steht in allen drei Dokumenten, in jedem neuen Kasten einzeln ausgenommen |
| **Höhe bleibt F-III / bis E-6/E-7** | unberührt; zwei neue Kästen sagen ausdrücklich „keine Zahl ändert sich" |
| **AA-4 bleibt offen** | ⬜-Kasten unverändert, die Hebung betrifft nur die Belegstufe der Nicht-Entscheidung — am Wortlaut geprüft („Habe Kayhan hierzu gefragt und warte auf seine Antwort") |
| **Architektur-Entscheid nicht gefallen** | steht 4/5/2-mal (Wortformen, case-insensitiv), in jedem Kern-Nachtrag wiederholt |

Ein **hinzugekommener** Vorbehaltsverlust betrifft nicht die eigenen,
sondern die **fremden** Vorbehalte der Quelle: **PR-03** und **PR-10**.

## Kategorie 5 — Stille Neufassung statt markiertem Nachtrag

**Keine Auffälligkeit — mechanisch belegt.** `git diff --numstat
95fe3f1 8b46e64` über die drei Dateien: **254/158/166 Einfügungen bei
je 0 Löschungen**; Gegenprobe `git diff … | grep -c "^-[^-]"` → **0**.
Zeilenzahl-Kreuzprobe (unabhängiges zweites Strukturmerkmal):
1.733→1.987 (+254), 925→1.083 (+158), 1.218→1.384 (+166) — beide
Messungen stimmen überein, ein Nachher-Delta wäre bei stiller Glättung
nicht deckungsgleich. Damit ist ausgeschlossen, dass irgendeine
Bestandszeile verändert, geglättet oder von einem Edit-Anker zerlegt
wurde (L-38). Stichprobe der Tabellen-Integrität in den neuen Kästen:
alle neuen Tabellenzeilen haben je Tabelle konstante Pipe-Zahl, kein
unmaskiertes `|` in einer Zelle.

## Kategorie 6 — Widersprüche in und zwischen den Dokumenten

- **Innerhalb `preismodell-optionen.md`:** ja → **PR-02** (Kopfkasten
  sagt „Wortlaut ist nicht archiviert" und verbietet wörtliche
  User-Zitate; § 11 hebt genau das auf und zitiert wörtlich).
- **Zwischen den drei Dokumenten:** kein Widerspruch gefunden. Alle
  drei sagen übereinstimmend: Z-6 aufgelöst · K04/Z-5 offen ·
  Architektur-Entscheid offen · K-1 streitig · Höhe offen. Das
  Zeiger-Modell (Fassung nur in § 5.3, sonst Zeiger + Vorrangklausel
  „bei Widerspruch gewinnt die Quelle") ist sauber durchgehalten —
  regelkonform nach der Duplikat-Doktrin.
- **Zwischen Prüfgegenstand und Wahrheits-Kanal:** ja → **PR-09**
  (`STATUS.md` 2 Fundstellen, `projektquelle-mkt.md` 3 Fundstellen mit
  „unter Z-6-Vorbehalt"; Suchraum: `git grep -c "Z-6" 8b46e64 -- "*.md"`,
  18 Dateien, Positivkontrolle `Preismodell` traf 20 Dateien).
- **Gegen fremde Träger:** ja → **PR-08** (K03).

## Kategorie 7 — Wächter-Stand und Löschungszählung

**Löschungszählung: bestätigt** (s. Kategorie 5) — 254/158/166 bei
**0** Löschungen, jede Richtung einzeln gemessen. Es gibt keine
gelöschte Zeile, die einzeln zu bewerten wäre.

**Wächter-Lauf (von mir ausgeführt, 13.08.2026 abends):**
`node akquise/pruefe-zitate.js`, Exit-Code unmittelbar danach per
`$LASTEXITCODE` gelesen (**nicht** über cmd-`%ERRORLEVEL%`):
**Exit 0**. Ausgabe: 144 Zitate · Ausnahmeliste **25/25** (26
Fundstellen) · Quellenzitate **118/118** · Blockzitate 3/3 +
Gegenproben 3/3 · Positivkontrolle **11/11** · Gegenprobe **3/3** —
**in jeder Zeile identisch** zum protokollierten Nachher-Lauf,
**außer** der Quellenpool-Größe (ich messe **375.030**, Protokoll
374.428). ⚠️ **Dieser Lauf misst den ARBEITSBAUM, nicht den Prüfstand**
— er ist damit kein Beleg über `8b46e64`, sondern über den heutigen
Baum inkl. R14-B.

**Die Poolgröße habe ich stattdessen commit-genau nachgerechnet**
(Node-Skript, Normalisierung 1:1 aus `pruefe-zitate.js` nachgebaut,
je Pool-Datei `git show <rev>:<pfad>`):

| Stand | Poolgröße normalisiert | davon `handel/kanal-rechtsmatrix.md` |
|---|---|---|
| `95fe3f1` | **361.183** | 91.686 |
| `af9909f` (R14-B committet) | **375.030** | 105.533 |
| `8b46e64` (Prüfstand) | **375.030** | 105.533 |

Die Baseline-Zahl des Protokolls (361.183) ist damit **exakt
bestätigt**. Die Nachher-Zahl (374.428) liegt **zwischen** den beiden
Ständen — sie hat einen Zwischenstand der Parallel-Session gemessen.
Daraus folgt **PR-01**. Die Aussage „0 neue Meldungen, Exit 0" ist
richtig, aber inhaltsleer (s. dort).

---

# Befundliste

## PR-01 — Wächter: Blindstelle falsch begründet, Fremd-Delta der eigenen Arbeit zugeschrieben · **schwer**

**Fundstelle:** `protokolle/R14-A-protokoll.md`, § 4.1 („Wächter",
Blindstellen-Kasten und Tabellenzeile „Nachher (final)").

**Beleg (mechanisch):**
1. `akquise/pruefe-zitate.js` @ `8b46e64` definiert
   `ZIEL = ['akquise/akquiseplan.md','akquise/listenbau-regelwerk.md']`
   und `POOL = [kanal-rechtsmatrix, regionalstatistik-groessenklassen,
   positionierungspapier, R00-planpruefung, projektquelle-mkt, STATUS,
   baseline-messplan, CLAUDE.md]` — **acht Dateien, keine davon ist
   eines der drei R14-A-Dokumente.** Der Protokollsatz „meine drei
   Dokumente liegen im **Quellenpool**" ist falsch: sie sind **weder**
   Prüfgegenstand **noch** Pool.
2. Damit ist auch die Erklärung des Deltas falsch: „Quellenpool
   374.428 Zeichen (+13.245 — **meine Nachträge sind Teil des Pools**)".
   Nachgerechnet stammt das gesamte Delta aus
   `handel/kanal-rechtsmatrix.md` (91.686 → 105.533 = **+13.847**), also
   aus der **Parallel-Session R14-B**. R14-As eigene Edits können die
   Poolgröße per Konstruktion um **0** Zeichen verändert haben.

**Warum schwer:** (a) Eine Bestandsaussage über das eigene Prüfwerkzeug,
falsch und in Richtung der eigenen Vollständigkeit (L-36-Klasse).
(b) Der Blindstellen-Kasten liest sich dadurch als „der Wächter hat
meine Dokumente wenigstens als Quellen gesehen" — er hat sie **gar
nicht gelesen**. „Baseline und Nachher identisch, 0 neue Meldungen"
ist über R14-As Arbeit **trivial wahr** und trägt keinerlei Aussage;
die L-26-Schärfung „Baseline vor den Edits ziehen" wurde formal
befolgt, hat hier aber nichts messen können. (c) Der Nachher-Lauf lief
gegen einen **wandernden** Stand (fremde Session schreibt in eine
Pool-Datei) — der Doppel-Messstand-Vertrag (Hash zu Beginn UND vor dem
Commit) wurde auf die Wächter-Läufe nicht angewandt.

**Reparatur:** § 4.1 korrigieren: Prüfgegenstand `akquise/` **und**
Quellenpool (8 Dateien, namentlich) benennen, ausweisen, dass **keines**
der drei Dokumente in beiden vorkommt, das Delta R14-B zuschreiben und
den Satz „0 neue Meldungen" ausdrücklich als *nicht aussagekräftig für
diese Runde* kennzeichnen. Der bereits richtige Teil („wer die neuen
Zitate stattdessen verifiziert hat: R14-A selbst, am Rohbeleg") bleibt.

## PR-02 — Kopfkasten des Preismodell-Papiers nicht gehoben; er widerspricht dem § 11-Nachtrag · **schwer**

**Fundstelle:** `handel/preismodell-optionen.md`, Kopfkasten
„🟢 NACHTRAG 13.08.2026 — die acht Entscheidungspunkte sind
beantwortet" (die Stelle, an der jeder Leser ankommt).

**Beleg (Wortlaut, unverändert im Prüfstand):**
> „**Belegstufe aller acht Entscheide — sie gilt für jeden einzelnen
> ✅-Vermerk und wird dort nicht abgeschwächt:** Briefing-Dialog vom
> 13.08.2026, Dropdown-Abfrage + Freitext, **sinngemäß — der Wortlaut
> ist nicht archiviert**. … Das ist eine **schwächere Belegstufe als ein
> archiviertes Zitat** — kein Satz dieses Papiers darf einen Entscheid
> als wörtliche Äußerung des Users ausgeben."

Drei Probleme auf einmal: die Tatsachenaussage ist **überholt**; sie
erklärt sich selbst für **jeden einzelnen ✅-Vermerk** für maßgeblich
(also auch für die neun gehobenen); und ihre Regel („kein Satz … als
wörtliche Äußerung") steht im Widerspruch zum neuen § 11-Kasten, der
den User wörtlich zitiert. Ein Leser, der oben einsteigt, nimmt die
schwächere Belegstufe mit.

**Ursache (zwei zusammenwirkende):** (1) Suchmuster
„Wortlaut nicht archiviert" trifft die Variante „der Wortlaut **ist**
nicht archiviert" nicht — *ein Muster ist eine Annahme über die Form*;
(2) der Nenner wurde beim Preismodell an den **Abschnitt § 11** gebunden
(„alle neun ✅-Vermerke **dieses Abschnitts**"), bei den beiden anderen
Dokumenten dagegen an das **Dokument** — die Auswahl war hier die
Aussage (L-30).

**Reparatur:** Markierten Nachtrag am Kopfkasten setzen (Zeiger auf den
§ 11-Hebungskasten, Vorfassung stehen lassen) und die Regel
nachschärfen: Entscheide bleiben als *bestätigte Fassungen* zu führen,
**archiviert sind Antwort-Wortlaute und Freitexte** — der Satz „kein
Satz darf einen Entscheid als wörtliche Äußerung ausgeben" ist in dieser
Form nicht mehr haltbar. Zugleich den Nenner auf Dokumentebene
umstellen (dann: 4 statt 3 Belegstufen-Angaben).

## PR-03 — Belegstufen-Vorbehalt der Quelle nicht angekommen: „Auslegung ist Stufe E", FAQ-Bindung offen · **mittel**

**Fundstelle:** alle drei Dokumente, jeweils in den neuen
Z-6-Auflösungskästen (Wurzelkasten § 5.3; Preisliste Kopf-Nachtrag,
Vorbehalt 3, § 6-Tabelle „✅ **GEKLÄRT**"; Angebot Vorbehalt 3, § 6).

**Beleg:** Die Quelle trägt zwei ausdrückliche Vorbehalte, die nirgends
mitgereist sind (Suchraum: alle drei Dokumente im Neustand):
- § 0.2: „**Keine Rechtsberatung. Die Auslegung ist Stufe E.** Für einen
  Preisentscheid, der Geld bindet, ist der Klärweg in § 5 zu gehen."
- § 10 (nach Prüferbefund F5): „‚passt zu dem, was die Lizenz erlaubt'
  ist bewusst nicht ‚von der Lizenz **gedeckt**'. Der Kern der Erlaubnis
  steht in einer **FAQ**, nicht im Vertragstext — und **ob eine FAQ im
  Streitfall bindet, ist offen** (§ 4 Nr. 4)."

Gemessen: `Rechtsberatung` → **0/0/0**, `Stufe E` → **0/0/0**.
Die Dokumente führen die Auflösung als **Entwarnung mit A+B-Beleg** und
einmal als **„✅ GEKLÄRT"** — ein Status-Symbol, das nach der eigenen
Regel von der **schwächsten** Prämisse erben müsste. Die entgeltliche
Dienstleistung — der für ein Preismodell entscheidende Teil — hängt
gerade an der **FAQ** (Stufe B), nicht am Lizenztext.
*(Nicht prüfbar von mir: § 4 Nr. 4 selbst, ich habe § 4 nur bis Z. 734
gelesen; ich stütze mich auf die wörtliche Wiedergabe in § 10.)*

**Nicht betroffen:** Die Kernaussage „A3 trägt" **ist** quellengedeckt
(§ 1-Überschrift), ebenso „Blockiert Z-6 einen Preisentscheid? Nein".
Es fehlt die Belegstufe der Auslegung, nicht das Ergebnis.

**Reparatur:** In den § 5.3-Wurzelkasten einen Satz aufnehmen: „Die
Auslegung der Quelle ist **Stufe E** (keine Rechtsberatung); tragend für
den Entgelt-Teil ist eine **FAQ (Stufe B)**, nicht der Vertragstext —
ob eine FAQ im Streitfall bindet, ist offen." Die Zeiger in Preisliste
und Angebot erben das über die Vorrangklausel; das „✅ GEKLÄRT" der
Preislisten-§-6-Tabelle auf „geklärt, Belegstufe E/B" herabstufen.

## PR-04 — Selbstwiderspruchs-Probe wurde nach der eigenen Reparatur nicht wiederholt; die Zahlen sind als „nach den Edits" ausgewiesen · **mittel**

**Fundstelle:** `protokolle/R14-A-protokoll.md`, § 4.2 („Treffer **nach
den Edits**, je Datei").

**Beleg:** Sechs Muster weichen für `angebotsarchitektur.md` um exakt
den Inhalt des **A4-Blocks** ab — jenes Nachtrags, den die Probe selbst
ausgelöst hat („Ein echter Fang (danach repariert)"):

| Muster | Protokoll | meine Messung (`8b46e64`) | A4-Block enthält |
|---|---|---|---|
| `Z-6` | 16 | **17** | 1 |
| `n8n` | 14 | **15** | 1 |
| `ungeklärt` | 12 | **13** | 1 |
| `erledigt` | 1 | **2** | 1 |
| `AU-1…AU-4` (Summe) | 9 | **10** | 1 |
| `Nachtrag` (case-sens.) | 52 | **54** | 2 („📌 Nachtrag" + „§ 5.3-Nachtrag") |

Sechs unabhängige Muster, jedes exakt um die Vorkommen des A4-Blocks
daneben — das ist kein Zufall, sondern der Beleg, dass die Messung
**vor** dem letzten Edit lief. Alle übrigen Achsen-Zahlen für die beiden
anderen Dateien habe ich nachgemessen und **bestätigt**
(`Sustainable Use|SUL` 3/4/1 · `K.-o.-Punkt` 2/0/0 ·
`Wortlaut nicht archiviert` 4/6/12 · `Belegstufe` 22/12/13 · `W-B`
34/16/9 · `Lizenzkost|Lizenzschlüssel` 3/4/0 · `K-1` 6/3/1 ·
`nicht übergeben` 0/4/9 · `teilübergeben` 1/3/2 · `beantwortet`
19/9/19 · `E-4` 18/11/10 · „nicht gefallen" 4/5/2 · `Startgebühr`
41/33/21).

**Die sachliche Folge wiegt schwerer als die Zahlen:** Der **A4-Text
selbst ist nie durch die Probe gelaufen** — genau die Klasse „wer eine
Reparatur dokumentiert, verändert den Prüflauf".

**Reparatur:** Probe auf dem committeten Stand einmal wiederholen (oder
den A4-Block einzeln durch beide Achsen ziehen) und die Zahlen mit
**Commit-Hash** statt „nach den Edits" ausweisen.

## PR-05 — Zwei Achsen-Zahlen sind unter keinem Zählweg reproduzierbar · **mittel**

**Fundstelle:** § 4.2, Achse 2: `offen` 39/34/33 und
„steht aus|wartet" 5/5/6.

**Beleg:** `offen` — ich messe **52/42/44** (Teilwort, Vorkommen),
**34/33/30** (`\boffen\b`, Vorkommen), **52/42/43** (Teilwort,
zeilenweise), **34/33/29** (`\boffen\b`, zeilenweise). Keiner der vier
Zählwege ergibt 39/34/33. `steht aus|wartet` — ich messe **5/5/5**
(„steht aus" 3/5/4 + „wartet" 2/0/1); der Protokollwert 6 für
`angebotsarchitektur.md` reproduziert nicht. (Beide Muster sind reine
Kontroll-/Suchmuster, keine tragenden Aussagen — deshalb mittel und
nicht schwer.)

**Reparatur:** Zählweg (das exakte Muster + Zeile-oder-Vorkommen) an die
Zahl schreiben oder die beiden Zeilen streichen. Regel steht bereits im
Bestand: *für jede Zahl den Zählweg benennen* — im selben Protokoll wird
sie bei der Z-6-Tabelle vorbildlich eingehalten.

## PR-06 — AA-8 als „wörtlich gedeckt" ausgewiesen, obwohl der Rohbeleg die S4-Erstreckung nicht selbst trägt · **mittel**

**Fundstelle:** `handel/angebotsarchitektur.md`, Hebungs-Nachtrag
(„Jeder der sieben Entscheide ist wörtlich gedeckt … *‚Ja, Rabatt ab
Haus 2'*"), gleichlautend im Preislisten-Hebungskasten.

**Beleg:** Der Entscheid AA-8 lautet im Dokument „**JA — der Rabatt
wirkt AUCH auf die Startgebühr S4**, ab dem 2. Haus desselben
Betreibers". Der archivierte Wortlaut lautet vollständig:
„AA-8 (gegen Empfehlung): **‚Ja, Rabatt ab Haus 2'**" — er ist
**wortgleich mit der AA-5-Antwort** („Ab dem 2. Haus") und enthält kein
Wort zur Startgebühr. Das Archiv hält ausdrücklich nur **Antworten**
fest, **nicht die Fragen** — die S4-Erstreckung ergibt sich also aus der
nicht archivierten Frage, nicht aus dem Zitat. Das trifft ausgerechnet
den einzigen Entscheid, der **gegen die Session-Empfehlung** fiel und
Geld kostet.

*(Die daneben stehende Aussage „zu S2 und den durchgereichten
§ 2-Zeilen schweigt das Protokoll" ist dagegen korrekt am Rohbeleg
belegt — das Schweigen ist gemessen.)*

**Reparatur:** In beiden Hebungs-Kästen ausweisen: „AA-8: die **Zustimmung**
ist wörtlich belegt; die **Reichweite auf S4** ergibt sich aus der
gestellten Frage, die nicht archiviert ist (Belegstufe:
Briefing-Nachtrag 4 + Antwort-Wortlaut)."

## PR-07 — Dropdown-Zitate durchgehend ohne „(Recommended)"; die E-3-Präzisierung gilt nach dem Rohbeleg für fast alle Entscheide · **mittel**

**Fundstelle:** Hebungs-Kästen in `angebotsarchitektur.md` und
`preisliste-vorlaeufig.md` (die Zitatketten *„Je Betreiber"* · *„P-B als
Zielbild, fix nach E-7"* · *„Ab dem 2. Haus"* · *„Fester Prozentsatz"* ·
*„Ohne Deckel, Prüfposten nach E-6"* · *„Je Haus"*).

**Beleg:** Die Wortlaut-Datei stellt im Formatvermerk klar: „‚Antwort:'
ist die **exakt gewählte Dropdown-Option**". Diese Optionen lauten dort
„Je Haus **(Recommended)**", „Je Betreiber **(Recommended)**", „P-B als
Zielbild, fix nach E-7 **(Recommended)**", „Ab dem 2. Haus
**(Recommended)**", „Fester Prozentsatz **(Recommended)**", „Ohne
Deckel, Prüfposten nach E-6 **(Recommended)**" — ebenso E-5/E-7/E-8 und
E-4/E-6. Der weggelassene Zusatz ist genau das Merkmal, das die
Belegstufe **relativiert**: die Option war der Vorschlag der Session.
R14-A hat diese Präzisierung („eine **bestätigte Session-Fassung**, keine
User-Formulierung — wer sie ändert, ändert eine niedrigere Schwelle")
korrekt gezogen, aber **nur für E-3**. Nach dem Rohbeleg gilt sie für
alle „(Recommended)"-Entscheide; **nicht** für AA-8 (dort steht
„gegen Empfehlung") und nicht für die reinen Freitexte.

**Reparatur:** Entweder die Optionen mit „(Recommended)" zitieren oder in
beiden Hebungs-Kästen einen Satz ergänzen: „Alle mit ‚(Recommended)'
markierten Antworten sind **von der Session vorgeschlagene und vom User
bestätigte Fassungen**; ausdrücklich gegen die Empfehlung entschieden
wurde nur AA-8."

## PR-08 — K03 pauschal als „erledigt" verbucht · **mittel**

**Fundstelle:** `handel/angebotsarchitektur.md` § 4 („K03 … ist mit der
Z-6-Auflösung **erledigt**") und § 6 („Widerspruch 1 (K03/n8n) ist
AUFGELÖST"); ebenso `preisliste-vorlaeufig.md` § 2 („K03/n8n ist damit
erledigt").

**Beleg:** Widerspruch 1 hat im Bestand **zwei** Teile: „Der Bestand
hält fest ‚Kunde erhält keinen n8n-Zugang'" **und** „die
Lizenz-Argumentation … **ruht** auf genau diesem fehlenden Zugang".
Aufgelöst ist der **zweite** Teil. Der erste ist eine Aussage über den
heutigen Bau (W-A) und steht weiter im Widerspruch zur E-3-Rechenbasis
(Kunde = Eigentümer mit Zugang) — auflösen kann ihn nur der
**Architektur-Entscheid**, den dieselben Kästen als „nicht gefallen"
führen. Zusätzlich ist die Bestandsstelle im heypensio-Blueprint
unverändert: ihre Korrektur ist Posten **O-5**, den R14-A selbst als
offen meldet (R14A-N-2). „K03 ist erledigt" ist damit eine
**Statusaussage über einen fremden Träger ohne Vollzugsbeleg** — die
L-37-Achse-2-Klasse.

**Reparatur:** In beiden Stellen trennen: „Die **Lizenz-Begründung** des
Widerspruchs ist entfallen; der **Zugangs-/Eigentumswiderspruch** selbst
hängt am nicht gefallenen Architektur-Entscheid, und die Bestandsstelle
im Blueprint ist bis O-5 unverändert."

## PR-09 — Wahrheits-Kanal steht mit den drei Dokumenten im Widerspruch, ohne Übergabe an die Leitsession · **mittel**

**Fundstelle:** `STATUS.md` (2 Fundstellen) und `projektquelle-mkt.md`
(3 Fundstellen), Prüfstand `8b46e64`.

**Beleg** (`git grep -c "Z-6" 8b46e64 -- "*.md"`, 18 Dateien;
Positivkontrolle `Preismodell` traf 20 Dateien; Gegenprobe
`Zxx-99-erfunden` traf nur das Protokoll):
- `STATUS.md`: „… getrennte Servicegebühr **unter Z-6-Vorbehalt**" ·
  „Frage der Durchreichung (**K04 gleichrangig zu Z-6**)".
- `projektquelle-mkt.md`: „Kosten-Durchreichung **unter
  Z-6-Vorbehalt**" · „Servicegebühr getrennt, **Z-6-Vorbehalt**" ·
  „(K04 **gleichrangig zu Z-6**)".

R14-A durfte diese Dateien nicht anfassen (Wahrheits-Kanal =
Leitsession) — **das ist richtig**. Aber sie tauchen in keiner der fünf
Nebenbefund-Meldungen R14A-N-1…N-5 auf, obwohl die Doku-Hygiene-Regel
genau diesen Suchraum vorschreibt („wer hat aus dieser Datei
abgeleitet?") und Regel 8b einen benannten Zielort verlangt.

**Reparatur:** Als Nebenbefund **R14A-N-6** aufnehmen: Zielort
`STATUS.md` + `projektquelle-mkt.md`, Aktion „Z-6-Vorbehalt durch
K04/Z-5-Vorbehalt ersetzen, Zeiger auf § 5.3-Nachtrag", Träger
Leitsession, fällig im R14-Debrief.

## PR-10 — Betriebsregel O-2 (Kunde öffnet n8n nicht seinen Gästen) nicht angekommen · **Hinweis**

**Fundstelle:** fehlt in allen drei Dokumenten (Suchraum: Neustand der
drei Dateien; `Gäste` → 0/0/0, `OEM` → 1/0/0).

**Beleg:** Die Quelle bindet „A3 trägt" ausdrücklich an eine weitere
Bedingung: „**Und das bleibt so, solange der Kunde n8n nicht seinerseits
seinen Gästen öffnet.** Das ist keine hypothetische Grenze, sondern die
Betriebsregel **O-2**" (§ 3.7); als Posten O-2 in § 9 geführt. Im
A3-Modell **gehört dem Kunden die Instanz** — die Bedingung ist damit
gerade dort einschlägig und gehört, wie AU-1…AU-4, in Angebot und
Vertrag (sie ist eine Nutzungsgrenze für den Eigentümer).

**Reparatur:** Als fünften Punkt neben AU-1…AU-4 im § 5.3-Wurzelkasten
und im Angebots-Vorbehalt 3 aufnehmen — mit dem Vermerk, dass sie eine
**Kunden**-Pflicht ist (Vertragsklausel), keine eigene.

## PR-11 — Zwölfte Belegstufen-Angabe im Angebotsdokument, vom „Überall" nicht erfasst · **Hinweis**

**Fundstelle:** `handel/angebotsarchitektur.md`, „⚠️ Status und
Vorbehalte", Punkt 1: „… ohne Außenversand (sinngemäß nach
`preismodell-optionen.md` § 11 E-8; **der User-Wortlaut ist nicht
archiviert**)".

**Beleg und Bewertung:** Diese Angabe ist **inhaltlich weiter richtig** —
das Archiv hält zu E-8 nur „**Ja (Recommended)**" fest, der Satz „intern,
unter Firmierungs-Vorbehalt, ohne Außenversand" ist eine
Session-Fassung. Sie steht aber im selben Dokument, dessen
Hebungs-Kasten sagt „**Überall** ist ‚sinngemäß — Wortlaut nicht
archiviert' überholt" — und sie wurde vom Suchmuster nicht gefunden
(Variante „der User-Wortlaut ist nicht archiviert").

**Reparatur:** Einen Ausschluss-Satz in den Hebungs-Kasten: „Nicht
betroffen ist die Belegstufen-Angabe in § Status/Vorbehalte Punkt 1 —
dort geht es um den **Wortlaut der E-8-Formulierung**, der weiterhin
nicht archiviert ist." (Zugleich der beste Beleg für PR-07.)

## PR-12 — AA-3: mitgeführter „User-Wortlaut" weicht vom Rohbeleg ab; eigene Zitate mit gesetztem Schlusspunkt · **Hinweis**

**Fundstelle:** `handel/angebotsarchitektur.md`, ✅-Kasten AA-3
(„Mitgeführter User-Wortlaut …: ‚auch **S**achen, die geplant, aber noch
in der Entwicklung sind, dürfen angeboten werden.'").

**Beleg:** Rohbeleg wörtlich: „**auch sachen die geplant aber noch in der
Entwicklung sind dürfen angeboten werden**" — Kleinschreibung, keine
Kommata, kein Schlusspunkt („Tippfehler des Originals sind belassen",
Formatvermerk der Archivdatei). Solange die Belegstufe „sinngemäß" war,
war die Glättung ausgewiesen; nach der Hebung liest sich der Kasten als
wortlautbelegt. Auch die neuen R14-A-Zitate setzen durchgängig einen
Schlusspunkt innerhalb der Anführungszeichen, den der Rohbeleg nicht
hat (u. a. AA-3, AA-8, AA-4).

**Reparatur:** Im AA-3-Kasten die **Rohfassung** danebenstellen und
vermerken, dass die geglättete Fassung eine Lesefassung ist; in den
Hebungs-Kästen Satzzeichen zitatgetreu setzen.

## PR-13 — Kopfkasten-Aussagen des Preismodells sind durch den R14-A-Commit veraltet · **Hinweis**

**Fundstelle:** `handel/preismodell-optionen.md`, Kopfkasten:
„**Mechanischer Beleg:** Der Commit, der diese Nachträge einbrachte,
enthält über alle drei berührten Dateien **0 gelöschte Zeilen** bei
**1.078** hinzugefügten" und „unterhalb stehen aber **15** weitere
Nachtragskästen vom 13.08.".

**Beleg:** Der R14-A-Commit fügt über dieselben drei Dateien **578**
Zeilen bei 0 Löschungen hinzu und bringt **mindestens 16** weitere
markierte Kästen. Beide Zahlen sind als Bestandsaussagen über den
aktuellen Dateizustand lesbar und stimmen nicht mehr. *(Klasse: ein
Dokument, das seinen eigenen Prüfstand dokumentiert, veraltet durch
genau die Edits, die es beschreibt.)*

**Reparatur:** Im selben Zug wie PR-02 nachtragen: „Stand `8b46e64`:
1.078 + 578 Einfügungen, 0 Löschungen; Kästen entsprechend mehr."

## PR-14 — Kurz-ID `Z-6` ist im eigenen Repo doppelt belegt · **Hinweis**

**Fundstelle:** `fund/erhebung/brandnamic-partner-vollerhebung.md`
führt eine Befundzeile **Z-6** („Check-in als PMS-Standardmodul, ≥ 9 von
23") — dieselbe Kurz-ID wie der Zentrale-Zulieferungspunkt Z-6
(n8n-Lizenz). Nicht von R14-A verursacht, aber jede repo-weite
Z-6-Zählung und jeder spätere Nachzug läuft darauf zu (L-35-Klasse:
Sachschlüssel-Namensräume je Domäne trennen).

**Reparatur:** Leitsessions-Posten — die FUND-Befund-IDs mit
Runden-/Domänenpräfix führen.

---

# Zusammenfassung

| Schwere | Anzahl | Kürzel |
|---|---|---|
| **schwer** | **2** | PR-01, PR-02 |
| **mittel** | **7** | PR-03, PR-04, PR-05, PR-06, PR-07, PR-08, PR-09 |
| **Hinweis** | **5** | PR-10, PR-11, PR-12, PR-13, PR-14 |
| **Summe** | **14** | |

**Was gut gehalten hat (damit die Disposition nicht nur Mängel liest):**
die Z-6-Zählung samt Zählschlüssel (28/28 disponiert, von mir
unabhängig reproduziert) · der Umbruch-Befund bei den
Belegstufen-Phrasen (2/3/11 → 3/5/11, exakt bestätigt) · **0
Löschungen** bei 578 Einfügungen, doppelt gemessen · die drei
ausdrücklich mitgeschriebenen Grenzen von R40-N-6 (die Quota-Regel wird
nirgends über ihren Wortlaut hinaus verwendet) · die Trennung von
K04/Z-5, K-1 und Architektur-Entscheid an **jeder** Fundstelle · das
Zeiger-Modell mit Vorrangklausel statt Zweitfassungen · der Fang R14A-N-1
(AU-4 fehlt im Formulierungsvorschlag der Quelle) — am Objekt bestätigt.

---

# Zusatzfragen

**(a) Welche Verfälschung hätte mein Verfahren NICHT gefangen?**

1. **Einen Fehler eine Ebene tiefer.** Ich habe die Kette
   *heypensio-Papier → MKT-Dokumente* geprüft, nicht die Kette
   *Lizenz-Rohquelle → heypensio-Papier*. Hätte das Papier die
   SUL-Klausel oder die FAQ falsch zitiert, hätte ich es bestätigt —
   exakt der Weg, den das Pseudo-Zitat „als Service anzubieten"
   historisch genommen hat. Die Rohbelege unter
   `heypensio\quellen-n8n-lizenz\` habe ich **nicht** geöffnet.
2. **Eine Verfälschung im Wortlaut-Archiv selbst.** Es wurde von
   derselben Session erstellt, die die Erhebung führte; es ist gegen
   nichts prüfbar. Wäre dort eine Antwort geglättet, wäre meine
   „25/25 gedeckt"-Aussage genau so falsch wie die geprüfte.
3. **Inhaltliche Fehler im nicht angefassten Bestandstext.** Ich habe
   die drei Dokumente **nicht vollständig** gelesen (4.454 Zeilen),
   sondern die Nachträge plus alle Trefferumgebungen. Eine falsche Zahl
   in einer Preistabelle, die R14-A nicht berührt hat, wäre mir
   entgangen — meine Prüfung ist eine Delta-Prüfung mit Musterraster,
   keine Volllektüre.
4. **Rendering-Schäden.** Ich habe die Rohfassung gelesen. Ein
   verschachtelter Blockquote, der im gerenderten Markdown bricht (oder
   ein Kasten, der optisch mit dem Bestandstext verschmilzt), wäre nicht
   aufgefallen; die 0-Löschungen-Messung schließt das ausdrücklich
   **nicht** aus.
5. **Eine falsche AUSWAHL statt einer falschen Aussage.** Hätte R14-A
   einen quellenrelevanten Abschnitt des n8n-Papiers gar nicht gelesen
   (§§ 2, 3.1–3.5, 4, 6–8), hätte ich es nur dort gemerkt, wo mein
   eigener Leseauftrag hinreichte — PR-03 und PR-10 habe ich gefunden,
   weil sie in meinen Leseabschnitten standen. Was in den ungelesenen
   Abschnitten für MKT relevant ist, ist **nicht erhoben**.

**(b) Hätte ich die Funde auch OHNE die Kategorien-Hinweise gefunden?**

Ehrlich getrennt:
- **Ja, ohne Hinweis:** PR-01, PR-04, PR-05 — sie fallen jedem an, der
  die Zahlen des Protokolls selbst nachrechnet, und PR-01 kam erst
  daraus, dass ich das Wächter-**Skript** gelesen habe; danach fragt
  keine Kategorie. PR-09 ebenso (repo-weites grep), obwohl keine
  Kategorie danach fragte. PR-06, PR-07, PR-12 kamen aus dem
  Zeile-für-Zeile-Vergleich mit dem Rohbeleg.
- **Nur mit Hinweis (oder deutlich später):** PR-03 und PR-10 verdanke
  ich der Anweisung „**von den QUELLEN RÜCKWÄRTS**". Wäre ich vom
  Dokument vorwärts gelesen, hätte ich beide Kästen für vollständig
  gehalten — sie lesen sich geschlossen und nennen ihre Grenzen selbst
  („ein Dokument, das seine Schwäche ehrlich, aber unvollständig
  einräumt, ist schwerer zu prüfen als eines, das schweigt").
- **Beschleunigt durch den Hinweis:** PR-02 — die Nenner-Frage der
  Kategorie 3 hat mich direkt auf die Muster-Variante gestoßen; ohne sie
  hätte ich die Phrase gezählt und die Wortvariante vermutlich erst über
  den Kopfkasten-Volldurchgang gefunden.
- **Der Hinweis hat mich auch einmal fast in die falsche Richtung
  geschickt:** Die Kategorie legte nahe, den Z-6-Dispositionen zu
  misstrauen — dort war 28/28 sauber. Die Ausbeute lag in den
  Prüf-AUSSAGEN über die eigene Arbeit, nicht in der Arbeit.

---

**Laufstatus:** Alle sieben Pflicht-Kategorien durchlaufen. **Offen
geblieben — einzeln ausgewiesen, nicht zu „keine Auffälligkeit"
geglättet:**
1. **Nicht prüfbar:** die Protokollzahl „Quellenpool 374.428" am
   eingefrorenen Stand (der Wächter liest den Arbeitsbaum) — ersatzweise
   commit-genau nachgerechnet (361.183 / 375.030), s. PR-01.
2. **Nicht erhoben:** n8n-Papier §§ 2, 3.1–3.5, § 4 ab Z. 735, §§ 6–8,
   § 11 — dort können weitere MKT-relevante Vorbehalte stehen.
3. **Nicht erhoben:** die Lizenz-Rohquellen (`quellen-n8n-lizenz/`) und
   damit die Zitat-Kette unterhalb des heypensio-Papiers.
4. **Nicht erhoben:** Volllektüre der drei Zieldokumente außerhalb der
   Nachträge und Trefferumgebungen.
5. **Nicht erhoben:** Rendering-Prüfung der verschachtelten Kästen.
6. **Auftragsgemäß unterlassen:** jede Sicht auf den Arbeitsbaum-Diff
   der Parallel-Session R14-B.
