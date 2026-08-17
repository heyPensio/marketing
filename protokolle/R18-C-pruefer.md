# R18-C — Gegenlese (unabhängiger Prüfer)

**Prüfstand (eingefroren):** `106dc0e` · **Rundenstart:** `a7fca1c` ·
**Zwischencommit im Bereich:** `0e94e59` (Tagesplan, Leitsession, +4/0 — nicht
Gegenstand dieser Prüfung)
**Datum/Uhrzeit der Prüfung:** Mo 17.08.2026, 20:08–20:20 MESZ (per `date`
erhoben; Positivkontrolle 01.01.2026 = Donnerstag ✔)
**Prüfer:** unabhängige Gegenlese-Session, frischer Kontext, kein Zugriff auf
den Arbeitsbaum — alle Lesungen ausschließlich über `git show 106dc0e:<pfad>`
bzw. `git show a7fca1c:<pfad>` in Scratchpad-Kopien.
**Schreibrecht dieser Session:** ausschließlich diese Datei. Kein `git add`,
kein Commit, kein Push, keine Änderung an anderen Dateien.

---

## Leseumfang MIT ZEILENSPANNE

| Datei (Stand `106dc0e`) | Gesamtzeilen | gelesen |
|---|---|---|
| `akquise/akquiseplan.md` | 1.153 | Z. 1–64 (Kopf/Sequenz-Vorbehalt/Geltungsgrenze/Belegstufen) · Z. 107–142 (§ 2 K1) · **Z. 277–596 (§ 3 vollständig, inkl. § 3.1 und § 3.2)** · Z. 870–889 (§ 4.4-Schluss/§ 5-Kopf) · **Z. 919–1098 (§ 6, § 7, § 8 vollständig)** · Z. 1097–1153 (§ 9, § 10, Fußblock). Zusätzlich maschinell über die **ganze** Datei: Muster-Suchen (H-2, Namens-/Firmierungs-/Versand-Muster, unsichtbare Zeichen). |
| `beleg/baseline-messplan.md` | 580 | Z. 257–376 (§ 4, § 5 vollständig, § 6-Kopf mit H-1/H-2/H-3) · **Z. 507–580 (§ 8-Schluss und § 9 vollständig)**. |
| `akquise/interessenabwaegung-o8.md` | 1.385 | Z. 985–1074 (**§ 9.1 vollständig**) · Z. 1105–1126 (**§ 10 vollständig**) · Z. 1124–1163 (§ 11.1 vollständig + § 11.2-Kopf). Gliederung der ganzen Datei erhoben. |
| `STATUS.md` | 391 | Z. 254–391 (**„Nächster konkreter Schritt" vollständig, Punkte 0–6**). Gliederung der ganzen Datei erhoben. |
| `handel/kanal-rechtsmatrix.md` | (nicht gezählt) | Z. 1880–1925 (O-9-Kasten + Bestandsvermerk R15A-N-4) — als Quelle der § 3.2-Zitate. |
| `projektquelle-mkt.md` | (nicht gezählt) | Z. 188–194, Z. 714 — als Quelle der Messplan-§ 9-Zitate. |
| `akquise/akquiseplan.md` @ `a7fca1c` | 1.023 | vollständiger Diff `a7fca1c..106dc0e`, jede der 20 gelöschten Zeilen einzeln. |
| `beleg/baseline-messplan.md` @ `a7fca1c` | 529 | vollständiger Diff (51/0). |

**Nicht gelesen** (bewusst, s. „Meine Blindstelle"): o8 §§ 1–9 und §§ 11.2–12,
`akquise/listenbau-regelwerk.md`, `akquise/sperrdatei-struktur.md`,
`akquise/wellenprotokoll-vorlage.md`, `handel/anwalts-briefing-2026-08.md`,
die Rohbelege des LG-Urteils, sämtliche Wächter-Skripte.

---

## Ergebnis je Kategorie (mit Nenner)

| # | Kategorie | Nenner | Befunde |
|---|---|---|---|
| **Kern** | Ein-Gate-Logik / verkürzter § 3.2-Vorbehalt in § 6/§ 7/§ 8 | 3 Abschnitte, 13 tragende Einzelaussagen | **3** (G-1, G-5, G-9) |
| **1** | Zitat-Treue | 13 als wörtlich gesetzte Zitate maschinell geprüft (2× o8, 5× STATUS, 2× Messplan § 4, 2× Projektquelle, 2× Rechtsmatrix) | **3** — 0 Wortlaut-Fehler, 1 Fundstelle falsch (G-6), 1 Zuschreibung falsch (G-7), 1 Verschärfung im Fließtext (G-13) |
| **2** | Vorbehalt vollständig nachgezogen | 4 Vorbehalts-Hälften aus § 3.2 (Rn. 87 nicht tragend · Rn. 86 Vorfeld · „Belegkraft nur noch schwächer" · Pfad (a) notwendig ≠ hinreichend) × 3 Ankunftsstellen | **2** (G-5, G-9) |
| **3** | Neue Entwarnungen ohne Quelle im Satz | 8 Entwarnungs-Kandidaten im neuen Text | **5** (G-1, G-3, G-4, G-8, G-12) |
| **4** | Löschungen | 20 gelöschte Zeilen (Akquiseplan), 0 (Messplan) — jede einzeln geprüft | **1** (G-15, leicht) — **0 ersatzlos entfernt** |
| **5** | Kurz-ID `H-2` → `AKQ-H-2` | 7 Fundstellen im Dokument + repo-weite Gegenprobe über 27 `*.md` | **2** (G-3, G-7) — 0 übersehene Verweise, 0 fremde H-2 fälschlich mit umbenannt |
| **6** | Messplan § 9 | 6 Prüfpunkte (Commit-Beleg · Verzeichnis-Beleg · Nicht-Abhaken · 3 Lesarten gegen § 4/STATUS/PQ) | **3** (G-8, G-10, G-11) |
| **7** | Rückwärts: Was aus § 3.2 kam nicht an? | 4 § 3.2-Posten mit Nachzieh-Pflicht | **1 schwerer** (G-2, drei Teilstellen) |

**Gesamt: 16 Befunde** (2 schwer, 6 mittel, 8 leicht/Nebenbefund) — Zählweg
unten am Ende, jede ID genau einmal.

---

## Antwort auf die Kernfrage

**§ 6 und § 8 sind in der Sache nachgezogen; § 6 trägt den Vorbehalt in EINER
Zeile halbiert (G-5) und in einer zweiten ohne Belegstufe (G-9). Die eigentliche
Ein-Gate-Stelle liegt jedoch NICHT in § 6/§ 7/§ 8, sondern in § 2 (K1) — und der
Suchweg, mit dem die Session eine sechste Stelle ausgeschlossen hat, konnte sie
per Konstruktion nicht finden (G-1).**

§ 7 ist sachlich nachgezogen, hat aber im selben Zug eine Frist verschoben und
diese Verschiebung mit einer Quelle etikettiert, die sie nicht setzt (G-4).

---

## Befunde einzeln

### G-1 · **schwer** · Der Negativbefund „keine sechste Ein-Gate-Stelle" ruht auf einem Suchweg, der die Klasse nicht finden kann — § 2/K1 trägt sie

**Aussage im Prüfling** (`akquise/akquiseplan.md` § 6, Reparaturkasten, Z. 984–987):
> „**Gezählt: 5 von 5 gemeldeten Stellen repariert** — drei hier, H-8 in § 7,
> E-A1 in § 8; eine sechste wurde gesucht (Grep über die ganze Datei nach
> *ohne Namensbindung* / *sofort baubar* / *hängt am Namen*) und **nicht
> gefunden**."

**Beleg.** Ich habe den Suchweg nachgestellt (`grep -ni "ohne
Namensbindung\|sofort baubar\|hängt am Namen"` über die ganze Datei): **9
Treffer, alle in § 3.2 oder in den beiden Reparaturkästen** — das Muster kann
außerhalb von § 3.2 strukturell nichts finden, weil es die **Wortlaute des
gekippten Absatzes** sucht, nicht die **Sache**. Positivkontrolle des Musters:
Treffer 364/368 (der Originalabsatz) — das Muster ist funktionsfähig, sein
Suchraum ist die Frage.

Die breitere Suche (`grep -niE "nur der versand|erst der versand|namensentscheid|
firmierung|namensfrei|ohne namen|vor dem ersten (brief|versand)|S5"` über die
Datei **ohne** § 3, damit die bekannte Stelle das Ergebnis nicht dominiert)
liefert in **§ 2 · K1** drei Zeilen, die genau die alte Logik tragen:

| Fundstelle | Wortlaut | warum Ein-Gate |
|---|---|---|
| Z. 112 | „**Vorlauf bis Versandfähigkeit** \| **3–5 Wochen nach dem Firmierungs-Entscheid**" | Die Vorlaufuhr des tragenden Kanals startet **allein** mit dem Namensentscheid. Nach dem Bestand (§ 3.2) startet sie erst, wenn F-7 **und** O-9 **und** die sieben Bau-Pflichten stehen — denn der Listenaufbau ist Teil dieses Vorlaufs (Z. 132: „**Zielkundenliste** nach dem Regelwerk"). |
| Z. 118 | Überschrift „**Was gebaut sein muss, bevor der erste Brief rausgeht**" | verankert die gesamte Pflichtenliste am **Brief**, nicht am **ersten Datensatz** — das ist wörtlich die Formel, die o8 § 11.1 kippt („nicht erst vor dem ersten Brief"). |
| Z. 121–124 | „Sperrposten **F-7** (Projektquelle § 7 Punkt 0a: „Firmierung … — **sperrt den Versand**"). ① Derselbe Sperrposten trifft den Werbebrief" | F-7 wird ausdrücklich als **Versand**-Sperre eingeführt und auf den Brief bezogen — die Aussage, die § 3.2 unter „⛔ gesperrt" führt („die Aussage *Nur der Versand hängt am Namen*"). |

Kein Vorbehalt deckt das ab: Der „Sequenz-Vorbehalt" (Z. 9–33) betrifft den
Kanalmix, die „Geltungsgrenze" (Z. 35–48) den Entscheid-Charakter, § 10
(Z. 1116–1140) nennt vier andere Grenzen. Ich habe alle drei vollständig
gelesen.

**Warum das schwer wiegt:** § 2/K1 ist der Ort, an dem ein Leser die
**Vorlaufzeit** des Rang-1-Kanals holt — die Zahl, aus der § 3.1 die ganze
Rückwärtsrechnung baut. Und die Reparatur hat ausgerechnet dort nichts geändert,
während sie ihre Vollständigkeit ausdrücklich behauptet („5 von 5 … eine sechste
… nicht gefunden"). CLAUDE.md: *„der Suchweg bestimmt das Ergebnis"* und *„ein
Prüfmuster, das nicht treffen KANN, sieht im Log wie ein sauberes Negativ aus"*.

**Reparaturvorschlag.** (a) Den Negativsatz streichen oder auf den tatsächlich
gemessenen Suchraum einschränken („drei Wortlaut-Muster des gekippten Absatzes;
eine Suche nach der SACHE ist nicht gelaufen"). (b) § 2/K1 als **sechste Stelle**
aufnehmen: Vorlauf-Zeile mit dem Zusatz „nach dem Firmierungs-Entscheid **und**
den übrigen zwei Gates (O-9, sieben Bau-Pflichten) — § 3.2"; Überschrift Z. 118
auf „bevor der erste **Datensatz** entsteht" ziehen (mit sichtbarer Vorfassung);
am F-7-Zitat einen Vorwärtsverweis setzen, dass die Projektquellen-Formulierung
„sperrt den Versand" durch die Rn.-87-Verschärfung überholt ist. (c) Nicht
stillschweigend: Der Zählsatz „5 von 5" bleibt richtig — er zählt die von R17-C
GEMELDETEN Stellen; der Nenner gehört an den Prüfgegenstand („5 von 5 der
gemeldeten; die Frage, ob die Meldung vollzählig war, ist eine andere").

---

### G-2 · **schwer** · Die erfüllten § 3.2-Posten sind an ihrem Träger nicht geschlossen — § 3.2 behauptet weiterhin fünf offene Ein-Gate-Stellen

**Fundstelle:** `akquise/akquiseplan.md` § 3.2, Z. 570–588 (unverändert seit
`a7fca1c` — durch `git diff a7fca1c..106dc0e` belegt: zwischen den Hunks
`@@ -305,16 +305,38 @@` und `@@ -581,8 +603,8 @@` liegt **keine** Änderung).

Der Schlussabsatz des R17-C-Nachtrags lautet weiter im Präsens:
> „**Unverändert tragen die alte Ein-Gate-Logik:** § 6 Terminplan (…) · § 7 H-8
> (…) · § 8 E-A1 (…). **Diese fünf Stellen liegen außerhalb des Dateiscope von
> R17-C** … und sind als **offener Posten an die Leitsession** gemeldet."

Alle fünf sind von **derselben Session, in derselben Datei, im selben Commit**
repariert. § 3.2 war im Dateiscope. Zwei weitere Stellen desselben Kastens
tragen denselben Fehler:

| Teilstelle | Zeile | steht weiter | ist aber |
|---|---|---|---|
| (a) Schlussabsatz „Unverändert tragen die alte Ein-Gate-Logik" | 575–588 | offener Posten an die Leitsession | erledigt in `106dc0e` |
| (b) Aussagen-Tabelle, Zeilen 5 und 6 | 525–526 | „Nebenbefund (alternde Relativangabe)" | repariert (§ 3.1-Kasten, `106dc0e`) |
| (c) „Präzisierung zu Aussage 6" | 556–565 | „ist **hier nicht entschieden** und gehört zur Leitsession; der Kasten oben ist damit nicht einfach ‚überfällig', sondern **unklar**" | in STATUS.md beantwortet — der § 7-Kasten der eigenen Session stellt genau das fest („ist dort beantwortet") |

**Warum das schwer wiegt.** Das ist wörtlich die Fehlerklasse, gegen die
CLAUDE.md die dritte Kategorie **ERFÜLLEN** eingezogen hat: *„Wer einen benannten
OFFEN-Posten erfüllt, schließt ihn an seinem TRÄGER"* — und: *„die Zeile bleibt
stehen und wird von der nächsten Ebene KORREKT zitiert, die daraus einen
gegenstandslosen Auftrag schneidet."* § 3.2 ist genau die Stelle, aus der
R18-C selbst ihren Auftrag geschnitten hat; die nächste Runde wird ihn erneut
schneiden. Der Zeiger läuft zusätzlich in die falsche Richtung: § 6/§ 7/§ 8
verweisen auf § 3.2 als Vorbehalts-Quelle, während § 3.2 die drei Abschnitte als
kaputt beschreibt.

**Reparaturvorschlag.** In § 3.2 drei kurze Nachtrags-Marken, ohne den
Originalwortlaut anzutasten: (a) hinter dem Schlussabsatz „✅ **Alle fünf Stellen
repariert in R18-C (`106dc0e`)** — Reparaturkästen in § 6, § 7 und § 8; der
Posten an die Leitsession ist damit erledigt, die Meldungs-Vollzähligkeit bleibt
offen (s. G-1)."; (b) in der Tabelle bei 5 und 6 „→ repariert R18-C"; (c) an der
Präzisierung zu Aussage 6 „→ von STATUS.md (Punkt 1, Klarstellung R17)
beantwortet, s. § 7-Kasten".

---

### G-3 · **mittel** · Der Kollisions-Zählweg unterzählt: „3 vergebende Dokumente" ist falsch, es sind mindestens 6

**Aussage im Prüfling** (§ 7, Reparaturkasten, Z. 1018–1027):
> „Der Handgriff hieß bis heute `H-2` und kollidierte mit **zwei** gleichnamigen
> IDs anderer Träger — `beleg/baseline-messplan.md` § 6 … und dem Prüferbefund
> `H-2` aus `protokolle/R05-A-pruefer.md`. … **Zählweg:** … dann repo-weit über
> `*.md`; Positivkontrolle mit dem unabhängig bekannten Sollwert **3 vergebende
> Dokumente** — gefunden wurden genau diese drei. **Nachher: 2.**"

**Beleg** (Zählweg reproduzierbar, Suchraum `106dc0e -- "*.md"`, Muster auf die
**Vergabe**-Form beschränkt, nicht auf jede Erwähnung:
`git grep -lnE "^#+ \*{0,2}H-2\b|^\| \*\*H-2\*\* \||^- \*\*H-2\b|^\*\*H-2\b"`):

| Dokument | Vergabestelle | Gegenstand |
|---|---|---|
| `akquise/akquiseplan.md` | § 7-Tabelle | Handgriff (jetzt AKQ-H-2) |
| `beleg/baseline-messplan.md` | § 6-Tabelle Z. 375 | Handgriff (drei Teile) |
| `protokolle/R05-A-pruefer.md` | Z. 918 | Befund DEHOGA-Beitragsstufen |
| `protokolle/R15-A-pruefer.md` | Z. 680 (`## H-2 · …`) | Befund Rn.-267-Kontext |
| `protokolle/R16-A-pruefer.md` | Z. 385 | Befund Zitate außerhalb des Prüfraums |
| `protokolle/R17-A-pruefer.md` | Z. 734 | Befund nackte Zeilennummer |

= **6 vergebende Dokumente**, nicht 3 (zzgl. `R06-nacharbeit-R05A-befunde.md`
und `R17-A-abschluss.md`, die fremde H-2 in Tabellenform weiterführen).
**Positivkontrolle des Musters:** `R05-A-pruefer.md` — die im Prüfling selbst
genannte, unabhängig bekannte Kollision — ist im Ergebnis enthalten ✔.
**Gegenkontrolle mit anderem Sollwert (cs ≠ ci-Analogon):** dasselbe Muster für
`H-9` liefert 3 Dateien, also einen **anderen** Wert — das Muster zählt, es
bestätigt nicht.

Der Suchraum ist eindeutig: Der Kasten nennt `protokolle/R05-A-pruefer.md` selbst
als einen der drei, `protokolle/` ist also **im** Suchraum. Damit ist der
Sollwert 3 nicht durch eine Suchraum-Einschränkung erklärbar.

**Warum das zählt.** Der Satz ist als **Positivkontrolle mit unabhängig
bekanntem Sollwert** ausgewiesen — die stärkste Form, die CLAUDE.md kennt
(L-24). Ein falscher Sollwert, der die Kontrolle „bestehen" lässt, ist
schlechter als keine Kontrolle: Er entlastet den nächsten Leser davon,
nachzuzählen, und lässt „Nachher: 2" wie eine fast gelöste Kollision aussehen,
während tatsächlich **5** Träger die ID weiter vergeben.

**Reparaturvorschlag.** Zahlen ersetzen („mindestens 6 vergebende Dokumente,
davon 4 Prüferprotokolle; nachher 5"), Zählweg als Muster in den Kasten
schreiben (nicht als Prosa) und den Sollwert der Positivkontrolle an einer
Kollision festmachen, die **unabhängig vom Lauf** bekannt ist — z. B. dem im
Lehren-Register unter L-35 dokumentierten Fall.

---

### G-4 · **mittel** · § 7 H-8 zieht eine verstrichene Frist auf ein neues Datum und etikettiert es „(Stand STATUS.md)" — STATUS setzt diese Frist nicht

**Fundstelle:** `akquise/akquiseplan.md` § 7, H-8-Zeile, Spalte „bis" (Z. 1007):
> `~~Do 13.08.~~ **Di 18.08.** (Stand STATUS.md)`

**Beleg.** STATUS.md Punkt 1 (Z. 331–333) lautet: „(Zentrale, User-Handgriff
~~Mo 10.08.~~ → **User-Zusage Di 18.08.**; Punkt 0 „~KW 34/35" ist derselbe
Vorgang, kein zweiter Termin — Klarstellung R17)". Die Zusage **Di 18.08.**
gilt dem **StB-Anruf** (Handlung der Zentrale/des Users). H-8 ist ein anderer
Handgriff: „**Stand** des StB-Termins klären". STATUS setzt für H-8 keine Frist.
Aus einer Zusage der Gegenseite wird hier eine eigene Erledigungsfrist gemacht —
und die alte, **verstrichene** Frist (Do 13.08.) damit ersetzt.

**Dazu zwei eigene Aussagen der Session, die dem widersprechen:**
1. Commit-Betreff/-Body `106dc0e`: „**Kein Termin neu gesetzt**, keine neue
   Rechtsaussage" — unter Punkt 1, der ausdrücklich alle fünf Stellen inkl. H-8
   umfasst.
2. § 3.1-Reparaturkasten (Z. 339): „**Kein Termin wurde neu gesetzt.**"
   (Der § 6-Kasten, Z. 970–979, beschränkt seine gleichlautende Aussage korrekt
   auf die drei § 6-Zeilen — dort ist sie richtig.)
3. **Dieselbe Session hält es im Messplan umgekehrt** (§ 9, Z. 565–568): „**Kein
   Anker wird hier ersatzweise gesetzt** — ein selbstgesetzter Termin sähe wie
   eine Zusage aus, die niemand gegeben hat". Zwei Dokumente, eine Session,
   entgegengesetzte Handhabung desselben Falls (verstrichene Frist ohne neuen
   Anker).

**Reparaturvorschlag.** Entweder (a) die „bis"-Spalte auf `~~Do 13.08.~~
**Frist verstrichen — neuer Anker offen (User/Leitsession)**` setzen, mit dem
Hinweis „StB-Anruf laut STATUS zugesagt für Di 18.08.; H-8 ist die Klärung
DANACH" — das ist die zur Messplan-Haltung konsistente Form; oder (b) den
gesetzten Termin als **eigene Ableitung** kennzeichnen („abgeleitet aus der
User-Zusage Di 18.08., nicht von STATUS als H-8-Frist gesetzt") und die
Entlastung „Kein Termin neu gesetzt" in Commit und § 3.1-Kasten entsprechend
einschränken. Der Vorfassungs-Strich `~~Do 13.08.~~` ist vorbildlich und bleibt
in beiden Varianten.

---

### G-5 · **mittel** · § 6 S5-Zeile trägt den Vorbehalt halbiert: nur die Pfad-(b)-Hälfte, nicht die Pfad-(a)-Hälfte

**Fundstelle:** § 6-Tabelle, S5-Zeile (Z. 927):
> „**S5:** Firmierungs-/Namensstand geklärt ODER Entscheid E-A1 (Arbeitstitel) —
> ⚠️ **die beiden Wege sind nicht gleichwertig:** Pfad (b) trägt eine offene
> Rechtsfrage (§ 3.2, Nachtrag 17.08.)"

**Quelle (§ 3.2, Z. 477–491)** trägt **zwei** Hälften, und die unbequemere ist
die zu Pfad (a):
> „Der Namensentscheid ist eine **notwendige, keine hinreichende** Bedingung.
> Nach ihm bleibt der Listenaufbau gesperrt, solange **O-9** offen ist — und
> O-9 ist „**OFFEN — weder entschieden noch geprüft**"…"

In der S5-Zeile kommt nur die (b)-Hälfte an. Ein Leser, der § 6 als Terminplan
benutzt und den Namensstand geklärt sieht, hakt die S5-Zeile ab und liest
daraus: Gate erledigt. Genau diesen Schluss („Name steht → Bau läuft") benennt
§ 3.2 als den zu verhindernden.

**Milderung (fairerweise):** Die Zielkundenlisten-Zeile zwei Zeilen darunter
trägt „Regelwerk **UND F-7 + O-9 + die sieben Bau-Pflichten**" — der aufmerksame
Leser findet die (a)-Hälfte dort. § 8 E-A1 trägt beide Hälften vollständig. Der
Befund ist deshalb mittel, nicht schwer.

**Reparaturvorschlag.** In der S5-Zeile ergänzen: „⚠️ Auch Pfad (a) ist mit S5
nicht frei — der Namensentscheid ist **notwendig, nicht hinreichend** (O-9 und
die sieben Bau-Pflichten sperren den Listenaufbau weiter, § 3.2)." Ein Satz,
symmetrisch zur (b)-Warnung.

---

### G-6 · **mittel** · Fundstelle des zweiten o8-Zitats ist falsch: § 11.1, nicht „§ 10-Nachtrag" — die neue Fassung reproduziert den Fehler

**Aussage im Prüfling:** § 6-Reparaturkasten Z. 955–960 — „**Der Bestand, auf
den die drei Zeilen jetzt gezogen sind** (Zitate aus
`akquise/interessenabwaegung-o8.md`, dort § 9.1 bzw. **§ 10-Nachtrag**)".
Dieselbe Angabe geerbt in § 3.2 Z. 412 („(o8 § 10-Nachtrag)").

**Beleg — Aussage und Fundstelle getrennt geprüft:**
- **Wortlaut ✔ byte-treu.** Maschineller Abgleich nach symmetrischer
  Normalisierung (Blockquote-Präfix, Zeilenumbruch, Fett-Auszeichnung, U+00AD,
  NBSP): das Zitat „Es gilt einheitlich: F-7 (Firmierung), O-9 (Art. 6 Abs. 4)
  und die Bau-Pflichten des § 10 sind vor dem ERSTEN DATENSATZ fällig, nicht
  erst vor dem ersten Brief." **trifft** in o8. Positivkontrolle im selben Lauf:
  ein absichtlich verdrehtes Kontrollzitat („…ist der VERSAND, nicht der
  Listenaufbau") **fehlt** ✔; ein garantiert vorhandenes Kontrollzitat
  („Nächster konkreter Schritt") **trifft** ✔.
- **Fundstelle ✘.** Der Satz steht in o8 **Z. 1144–1146**. § 10 („Bau-Pflichten,
  die aus dieser Abwägung folgen") reicht von Z. 1105 bis Z. 1121 und enthält
  **keinen** Nachtrag dieses Inhalts — ich habe § 10 vollständig gelesen. Z. 1144
  liegt in **§ 11.1 „Offene Punkte"**, im ⭐-Kasten „Fälligkeit dieser Posten —
  nachgetragen 12.08.2026". Repo-weite Gegenprobe: `git grep "Es gilt
  einheitlich"` = 3 Treffer (2× Akquiseplan, 1× o8 Z. 1144) — es gibt keine
  zweite Fundstelle in § 10.

Das erste Zitat („Der erste Verarbeitungsschritt ist der LISTENAUFBAU, nicht der
Versand", o8 Z. 1012) ist mit „§ 9.1" **korrekt** belegt ✔.

**Warum das zählt.** Die drei reparierten § 6-Zeilen ruhen auf genau diesem
Zitat. Ein Prüfer, der § 10 aufschlägt, findet dort die Bau-Pflichten-Tabelle
(B-1…B-8) und den Satz nicht — und muss die Reparatur als unbelegt einstufen.
Zusätzlich: § 10 nennt B-8 als **gestrichen**, § 11.1 ist der Ort, an dem die
Fälligkeit einheitlich gesetzt wird; die Verwechslung der beiden ist genau die
Stelle, an der auch der „sieben vs. acht"-Nenner hängt.

**Reparaturvorschlag.** In § 6 (Z. 956) und in § 3.2 (Z. 412) „§ 10-Nachtrag" →
„**§ 11.1, ⭐-Kasten ‚Fälligkeit dieser Posten' (12.08.2026)**". Die Korrektur
gehört an beide Stellen im selben Zug (L-25/L-51: wer eine Fundstelle kippt,
kippt ihre Kopien).

---

### G-7 · **mittel** · Die fremde H-2-Fundstelle in der Rechtsmatrix wird „(R18-A)" zugeschrieben — sie stammt aus R16-A

**Fundstelle:** § 7-Reparaturkasten Z. 1034–1036: „Ebenfalls gemeldet, außerhalb
des eigenen Scope: „Prüferbefund H-2" ohne Rundenpräfix in
`handel/kanal-rechtsmatrix.md` **(R18-A)** und `handel/angebotsarchitektur.md`."

**Beleg.**
- Die Stelle steht **bereits im Rundenstart**: `git grep -c "Prüfraum
  präzisiert 17.08.2026 nach Prüferbefund H-2" a7fca1c --
  handel/kanal-rechtsmatrix.md` → **1**. Sie kann also nicht aus einer R18-Session
  stammen.
- Herkunft: `git log -S "Prüfraum präzisiert 17.08.2026 nach Prüferbefund H-2"`
  → **`ed9bbdf` „BENBECKMAN | R16-A Reparatur: 18 von 18 Prueferbefunden
  disponiert"**. Passend dazu vergibt `protokolle/R16-A-pruefer.md` Z. 385 einen
  eigenen Befund H-2 („Zwei neue Aussagen zitieren außerhalb des selbst
  deklarierten Prüfraums").
- Die zweite genannte Stelle (`handel/angebotsarchitektur.md`) stammt aus
  `8664f3f` = **R17-A** (dort passend R17-A-pruefer H-2 „nackte Zeilennummer").
- **Positivkontrolle/Gegenprobe:** `git ls-tree -r 106dc0e -- protokolle/ | grep
  -i R18` → **leer**. Im Prüfstand existiert **kein einziges R18-Protokoll** —
  eine R18-A-Zuschreibung ist aus dem Bestand nicht belegbar.

**Warum das zählt.** CLAUDE.md, Regel 1: *„Die Historie kennt KEINE
Session-Identität … aus einem Commit ist NIE ablesbar, welche Session ihn
schrieb"* — und Regel 3a: der Zustand einer Parallel-Session wird nicht aus
Indizien geschlossen. Hier ist einer **laufenden** Parallel-Session fremde,
ältere Arbeit zugeschrieben worden; die Leitsession würde den Posten an den
falschen Träger routen.

**Reparaturvorschlag.** „(R18-A)" → „(eingebracht mit `ed9bbdf`, R16-A —
Herkunft am Commit belegt)"; für die zweite Stelle „(`8664f3f`, R17-A)". Falls
die Session die Zuordnung aus dem Chat/Tagesplan hatte: als Annahme kennzeichnen
statt als Feststellung.

---

### G-8 · **mittel** · Messplan § 9: „der Termin steht ohne Wochentags-Etikett im Plan" — § 5 führt ihn mit Etikett

**Fundstelle:** `beleg/baseline-messplan.md` § 9-Nachtrag, Lesarten-Tabelle
Zeile (b), Z. 555:
> „(H-3 Betreiber-Briefing, **bis 23.08.** — ⚠️ das ist ein **Sonntag**, per
> `date` erhoben; **der Termin steht ohne Wochentags-Etikett im Plan**)"

**Beleg.** § 5-Zeitfenster-Tabelle, Z. 342: „| **bis So 23.08.** |
Betreiber-Briefing (Kayhan + Klärung Rabe's/Hostel; …) | User |" — **mit**
Wochentag. Ohne Etikett steht er nur in der **§ 6-Handgriff-Tabelle** (Z. 376:
„| H-3 | Betreiber-Briefing … | User | 23.08. |"). Positivkontrolle des
Suchlaufs: `grep -n "23.08."` über die ganze Datei liefert beide Zeilen — die
Suche findet, was das Negativ bestreitet.

Die Sachaussage „23.08.2026 ist ein Sonntag" ist **richtig** (`date -d 2026-08-23`
→ Sunday; Positivkontrolle 01.01.2026 = Donnerstag ✔) und ein guter Fang. Falsch
ist nur die Bestandsaussage über den Plan.

**Warum das zählt.** CLAUDE.md: *„Eine BESTANDSAUSSAGE in neu geschriebenem Text
braucht dieselbe Messung wie eine Zahl"* — und der Belegfall dort ist wörtlich
derselbe: ein Gedächtnis-Zusatz als Kontext neben einem sauber gemessenen
Befund.

**Reparaturvorschlag.** „…; **in der Handgriff-Tabelle § 6 ohne
Wochentags-Etikett, in § 5 als ‚bis So 23.08.' korrekt etikettiert** — die
§ 6-Zeile ist nachzuziehen." Damit wird aus der falschen Bestandsaussage ein
konkreter Nachzieh-Auftrag.

---

### G-9 · **leicht/mittel** · § 6 Pflichtbausteine-Zeile lässt die Belegstufe des Rests weg

**Fundstelle:** § 6, Z. 928: „⚠️ **namensfrei nur teilweise:** Pflicht 1
(Datenschutzinformation) ist ohne Namen nur als **Rohtext** baubar, nicht fertig;
VVT-Eintrag ohne F-7 nicht abschließend (§ 3.2)".

**Quelle (§ 3.2, Z. 464–469)** sagt zum **Rest** derselben Pflichtenliste:
> „**Lead-Bogen für Messen** (D2 Pflicht 5) und **Gesprächsleitfaden**: im
> Bestand ist keine Namens- oder Listen-Abhängigkeit dokumentiert. ⚠️
> **Belegstufe: Negativ aus Aktenlage** … — kein positiver Beleg, dass sie
> namensfrei sind, sondern kein Gegenbeleg. Wer sie baut, prüft die Namensfrage
> am Werkstück."

„Namensfrei nur teilweise" mit zwei benannten Ausnahmen liest sich als: der Rest
ist **positiv** namensfrei. Die Quelle sagt: der Rest ist ein **Negativ aus
Aktenlage**. Das ist die klassische Verkürzung beim Nachziehen (Vorbehalt fällt,
Aussage bleibt).

**Reparaturvorschlag.** Ergänzen: „für die übrigen Pflichten ist die
Namensfreiheit nur ein **Negativ aus Aktenlage** (§ 3.2) — am Werkstück prüfen".

---

### G-10 · **leicht** · Messplan § 9: „Drei Lesarten, jede mit einem anderen Fälligkeitszeitpunkt" — (b) und (c) fallen auf denselben Termin

**Fundstelle:** Z. 550 („Drei Lesarten, jede mit einem anderen
Fälligkeitszeitpunkt") gegen die eigene Tabelle: (a) „vor der Übergabe", (b)
„mit H-3", (c) „mit dem Briefing". **H-3 *ist* das Betreiber-Briefing** (§ 6
Z. 376). Der Text sagt es zwölf Zeilen später selbst: „**(b)** hängt am selben
Termin". Damit trägt die Unterscheidungs-Behauptung nicht — und sie ist genau
das Kriterium, mit dem die Tabelle ihre Existenz begründet.

**Reparaturvorschlag.** „Drei Lesarten mit **zwei** verschiedenen
Fälligkeitszeitpunkten: (a) vor der Übergabe, (b) und (c) mit dem Briefing
(H-3)."

---

### G-11 · **leicht** · Messplan § 9: Die Positivkontrolle prüft die falsche Achse

**Fundstelle:** Z. 543–546. Behauptet wird ein Negativ über eine **Definition**
(„Was ‚beauftragt' heißt, definiert kein Dokument des Repos"); die
Positivkontrolle belegt, dass der Suchweg einen **Posten** findet
(„`A5-Probedruck` trifft in STATUS.md, projektquelle-mkt.md und den
Tagesplänen").

Das ist eine Kontrolle auf der **Erreichbarkeit der Quelle**, nicht auf der
**Vollständigkeit des Ergebnisses** (V17-1). Sie kann nicht zeigen, dass eine
Definition, die anders formuliert wäre (z. B. „Vorlagen in Auftrag gegeben",
„Druckauftrag", „Vorlagen bestellt"), gefunden worden wäre — und der Suchweg
nennt nur vier Muster, alle nah am eigenen Wortlaut. Ich habe das Negativ nicht
widerlegt (mein eigener Suchraum war derselbe), aber es trägt die behauptete
Reichweite nicht.

**Reparaturvorschlag.** Kontrollkandidat auf die Definitionsachse legen: ein im
Repo **bekannt definierter** Nachbarbegriff (z. B. „freigegeben" oder
„VERSENDET", beide im Bestand ausdrücklich definiert) muss vom selben Suchweg
als Definition gefunden werden; erst dann trägt „für ‚beauftragt' findet
derselbe Weg nichts". Suchmuster zusätzlich um Sachvarianten erweitern.

---

### G-12 · **leicht** · Entwarnung über die eigene Brief-Zeile ohne Beleg im Satz

**Fundstelle:** § 6-Kasten Z. 977–979: „Ebenso unverändert: die Brief-Zeile
(*Hängt ab von: S5*) — **sie war schon vorher mit der Zwei-Gate-Logik
vereinbar**."

Die Aussage ist plausibel und ich habe keinen Gegenbeleg gefunden — aber sie ist
eine **Entwarnung über die eigene Arbeit** („keine Reparatur nötig") ohne Quelle
und ohne Belegstufe, in einem Kasten, der sonst durchgehend Fundstellen führt.
CLAUDE.md, L-45: solche Sätze entlasten nicht die Sache, sondern die Session, und
entgehen der Prüfung, weil sie streng klingen.

**Reparaturvorschlag.** Begründung in den Satz: „…vereinbar, **weil der
Brieftext den Namen im Briefkopf trägt und damit ohnehin an F-7 hängt; die
vorgelagerten Gates wirken über die Zielkundenlisten-Zeile**".

---

### G-13 · **leicht** · „Rn. 86 ordnet den **Listenaufbau** ausdrücklich dem Vorfeld zu" — „ausdrücklich" hängt in der Quelle an anderen Worten

**Fundstelle:** § 6-Kasten Z. 947–948. Die Quelle (Rechtsmatrix-Bestandsvermerk,
Z. 1901–1906; o8 Z. 1036–1041) sagt: Rn. 86 ordnet „**die Entgegennahme der von
ihr ‚angekauften' Adressen und ihr Speichern für den Einsatz bei der Erstellung
der Schreiben**" ausdrücklich dem Vorfeld zu — und **die Quelle selbst** zieht
daraus den Schluss „Das ist genau unser Schritt: der Listenaufbau". § 3.2
(Z. 383–393) gibt beides sauber getrennt wieder; § 6 verkürzt es zu „ordnet den
Listenaufbau ausdrücklich … zu". Das Wort „ausdrücklich" wandert damit auf einen
Begriff, den das Gericht nicht verwendet.

Richtung: Die Verkürzung macht den Vorbehalt **stärker**, nicht schwächer — sie
schadet der Sache nicht. Die Belegpflicht kennt aber keine Richtung (L-45).

**Reparaturvorschlag.** „…ordnet Entgegennahme und Speichern der angekauften
Adressen ausdrücklich dem Vorfeld zu — **nach dem Bestandsvermerk ist das genau
unser Listenaufbau**".

---

### G-14 · **Nebenbefund (nicht von R18-C eingeführt)** · Kopf-Stand des Akquiseplans

`akquise/akquiseplan.md` Z. 5 trägt weiterhin „**Stand:** 11.08.2026", obwohl
das Dokument am 17.08. zweimal (R17-C, R18-C) substanziell erweitert wurde
(+150 Zeilen allein heute). Ein Leser, der oben ankommt, datiert den ganzen Plan
sechs Tage zu alt. Träger: Leitsession bzw. die jeweils schreibende Session.

---

### G-15 · **leicht** · Die sichtbare Vorfassung des Gate-Kastens ist unvollständig

Von den fünf gelöschten Zeilen des ⚠️-Gate-Kastens (§ 3.1) zitiert der
Reparaturkasten (Z. 330–333) nur „*STATUS.md führt ihn als „User-Handgriff
Mo 10.08." — das war gestern*". **Nicht** mitzitiert ist der Kopfsatz der
Vorfassung: „⚠️ **Und dieser Gate-Termin ist bereits überfällig:**". Das ist
genau die Wertung, die § 3.2 („nicht einfach ‚überfällig', sondern **unklar**")
korrigiert — sie steht jetzt nur noch im Git-Verlauf und in § 3.2s Beschreibung
eines Textes, den es nicht mehr gibt. Kein Substanzverlust (der Sinn ist
ersetzt), aber die Vorfassungs-Wiedergabe ist ein Satzpräfix ohne Ellipse
(L-39).

**Reparaturvorschlag.** Vorfassungs-Zitat um den Kopfsatz ergänzen oder mit
sichtbarer Ellipse abschließen.

---

### G-16 · **leicht** · Die Umlaut-/Zeichen-Zahlen der Commit-Message tragen keinen Bezugsstand

Commit `106dc0e`: „U+00AD 1 -> 0, U+00A0 0 -> 0, Umlaut-Zaehlung vorher =
nachher (798), Datei -1 Zeichen."

**Was ich bestätigen konnte** (eigenes Zählskript mit Selbsttest — Kontrollstring
`a­b` → 1, `a b` → 1, `äöü` → 3 ✔):

| Stand | U+00AD | U+00A0 | Umlaute | Zeichen |
|---|---|---|---|---|
| `a7fca1c` Akquiseplan | **1** | 0 | 729 | 67.671 |
| `106dc0e` Akquiseplan | **0** | 0 | 803 | 76.850 |

U+00AD 1→0 ✔ und U+00A0 0→0 ✔ **bestätigt**. Die Zahlen **798** und
**−1 Zeichen** beziehen sich erkennbar auf den unmittelbaren Vorher/Nachher-Stand
des Skriptlaufs (nicht auf den Rundenstart) — das ist die methodisch richtige
Messung, aber der **Bezugsstand fehlt im Text**, und der Zwischenstand ist nie
committet worden, also von außen **nicht reproduzierbar** (s. „nicht prüfbar").
Gegen den Rundenstart gemessen sind es 729 → 803 Umlaute und +9.179 Zeichen.

**Reparaturvorschlag.** Bezugsstand an die Zahl schreiben („vor/nach dem
Skriptlauf, Arbeitsbaum-Stand, nicht gegen `a7fca1c`").

---

## Bewertung der zwei Kalibrierungs-Behauptungen

### (A) „20 gelöschte Zeilen im Akquiseplan, jede davon eine ersetzte Zeile — keine ersatzlos entfernt."

**BESTÄTIGT.** Zwei Nenner erhoben (L-38):

| Nenner | Ergebnis |
|---|---|
| gegen Rundenstart `a7fca1c` | `akquise/akquiseplan.md` **150/20**, `beleg/baseline-messplan.md` **51/0** |
| gegen den Parent des Bau-Commits (`0e94e59..106dc0e`) | identisch **150/20** und **51/0** |

Beide Nenner fallen hier zusammen, weil R18-C genau **einen** Commit gesetzt hat
(dazwischen liegt nur `0e94e59`, ein Tagesplan-Commit der Leitsession, der die
beiden Dateien nicht berührt). Das ist kein Mangel, gehört aber als Satz in die
Meldung, sonst liest sich der eine Nenner wie eine Auswahl.

**Jede der 20 Zeilen einzeln geprüft** — Zuordnung Löschung → Ersatz:

| # | gelöschte Zeile(n) | Ersatz | Vorfassung sichtbar? |
|---|---|---|---|
| 1–2 | § 3.1 ⭐-Kasten „S5 liegt **drei Tage nach heute**" | absolutes Datum + Standvermerk | ✔ Z. 330–331 |
| 3–7 | § 3.1 ⚠️-Gate-Kasten (5 Z., „überfällig / Mo 10.08. / das war gestern") | neuer Stand-Kasten Di 18.08. | ✔ teilweise (s. G-15) |
| 8–9 | § 4.1 A-5/A-6-Zeilen (`H-2`) | `AKQ-H-2` | ✔ § 7-Kasten benennt die Umbenennung |
| 10 | § 4.3 „(H-2)" | `AKQ-H-2` | ✔ ebd. |
| 11 | § 4.4 Option-(A)-Zeile „Handgriff H-2" | `AKQ-H-2` | ✔ ebd. |
| 12 | § 5 KPI-5-Zeile (Soft-Hyphen) | identische Zeile ohne U+00AD | ✔ eigener Reparaturkasten |
| 13 | § 6 S5-Zeile | + Ungleichwertigkeits-Warnung | ✔ Vorfassungstabelle Z. 966 |
| 14 | § 6 Pflichtbausteine-Zeile | + „namensfrei nur teilweise" | ✔ Z. 967 |
| 15 | § 6 Zielkundenlisten-Zeile | + F-7/O-9/sieben Bau-Pflichten | ✔ Z. 968 |
| 16 | § 6 S3-Zeile (`H-2b`) | `AKQ-H-2b` | ✔ § 7-Kasten Z. 1023 |
| 17 | § 7 H-8-Zeile | neue Zeile mit zwei Inline-Vorfassungen | ✔ in der Zeile selbst |
| 18 | § 7 H-2-Zeile | `AKQ-H-2` | ✔ |
| 19 | § 8 E-A1-Schlusssatz | + Vorbehalts-Ergänzung | ✔ Z. 1070–1072 |
| 20 | § 8 E-A2 „Wenn H-2 (a)" | `AKQ-H-2` | ✔ |

Summe 2+5+2+1+1+1+1+1+1+1+1+1+1+1 = **20** ✔. **Null ersatzlose Löschungen.**
Der Messplan hat 0 Löschungen (Positivkontrolle: 50 Additions im selben Diff —
der Zähler zählt).

Einschränkung: Die Behauptung „jede davon ist eine ersetzte Zeile" ist erfüllt;
die schwächere Nachbaraussage „jede Vorfassung ist **vollständig** sichtbar"
gilt bei einer Löschung nur teilweise (G-15).

### (B) „Die H-8-Zeile in § 7 führt den Termin `Do 13.08.` unverändert weiter."

**WIDERLEGT.** Die H-8-Zeile (§ 7, Z. 1007) führt in der Spalte „bis":
`~~Do 13.08.~~ **Di 18.08.** (Stand STATUS.md)` — der alte Termin ist
**durchgestrichen** und durch **Di 18.08.** ersetzt. Beleg zusätzlich aus dem
Diff: die Vorfassungszeile @ `a7fca1c` (Z. 927) endete auf „| **Do 13.08.** |"
und wurde gelöscht.

Das ist zugleich der Ausgangspunkt von **G-4**: Die Änderung ist nicht nur
erfolgt, sie widerspricht der Entlastung „Kein Termin neu gesetzt" in der
Commit-Message und im § 3.1-Reparaturkasten und der gegenläufigen Handhabung
derselben Session im Messplan („Kein Anker wird hier ersatzweise gesetzt").

---

## Meine Blindstelle

Was ich **mit diesem Prüfweg nicht hätte finden können**:

1. **Alles außerhalb des eingefrorenen Commits.** Ich habe ausschließlich
   `106dc0e` und `a7fca1c` gelesen. Uncommittete Arbeit im Arbeitsbaum, Stände
   paralleler Sessions (R18-A/R18-B) und alles, was nach `106dc0e` entstanden
   ist, ist mir strukturell unsichtbar. Meine Aussage „kein R18-Protokoll
   existiert" (G-7) gilt **für den Prüfstand**, nicht für die Platte.
2. **Die Rechtsfrage selbst.** Ich habe die Rn.-86/87-Aussagen ausschließlich
   gegen `handel/kanal-rechtsmatrix.md` und `akquise/interessenabwaegung-o8.md`
   geprüft — **Quellen zweiter Hand**. Das LG-Urteil im Rohbeleg habe ich nicht
   geöffnet. Wäre der Bestandsvermerk selbst falsch (falsche Randnummer, falsch
   abgegrenzter Satz), hätte mein Abgleich das bestätigt statt gefangen.
3. **Aussagen, für die es im Repo keine Soll-Fassung gibt.** Was nur mündlich
   oder im Chat entschieden wurde („Auftrag Tagesplan Punkt 1/6", der Sollwert
   „3 vergebende Dokumente", die Zwischenstände des Soft-Hyphen-Skripts), kann
   ich nur auf innere Widersprüchlichkeit prüfen, nicht auf Richtigkeit. Ein
   Prüfweg schlägt nur, wo eine Soll-Aussage existiert.
4. **Die Vollzähligkeit meiner eigenen „sechste Stelle"-Suche.** Ich habe mit
   einem breiteren Muster gesucht als die Session (Sach- statt Wortlaut-Muster)
   und § 2/K1 gefunden — aber mein Muster ist auch nur ein Muster. Eine
   Ein-Gate-Aussage, die weder „Firmierung", „Name", „Versand", „S5" noch
   „Brief" enthält (z. B. rein über Termine formuliert), hätte ich übersehen.
   Ich habe § 1, § 2 K2–K5, § 4.1–4.4 und § 9 **nicht Satz für Satz** gelesen.
5. **Wirkung statt Anwesenheit.** Ich habe kein Prüfwerkzeug ausgeführt (weder
   den Zitat-Wächter noch `tools/pruefe-budget.js`). Die Wächter-Zahlen der
   Commit-Message („36 = 36, PK 33/33, Gegenprobe 3/3") habe ich **nicht**
   nachgemessen — ein Marker-Grep hätte ohnehin nur Text geprüft, kein Verhalten.
6. **Die Gegenrichtung der Umbenennung außerhalb `*.md`.** Meine H-2-Gegenprobe
   lief mit Include-Filter auf `*.md`. Verweise auf `H-2` in Skripten,
   JSON-Konfigurationen oder Selbsttest-Dateien (`akquise/selbsttest-zitate.md`
   habe ich nur indirekt gestreift) sind nicht erfasst.

---

## Nicht erhoben / nicht prüfbar

Eigenständiges Ergebnis — **nicht** zu „unauffällig" geglättet:

1. **Umlaut-Zahl 798 und „Datei −1 Zeichen" (Commit-Message):** **nicht
   prüfbar.** Der Zwischenstand zwischen den Edits und dem Soft-Hyphen-Lauf
   wurde nie committet; von außen existiert er nicht. Plausibel ist er (mein
   Vorher/Nachher 729/803 klammert 798 ein, und eine U+00AD-Entfernung ändert
   die Umlautzahl nicht) — belegt ist er nicht.
2. **Wächter-Läufe** (Zitat-Wächter vorher/nachher 36 = 36, PK 33/33,
   Gegenprobe 3/3; „sieben zunächst neu gemeldete Selbstzitate auf die
   R17-C-Konvention umgestellt"): **nicht erhoben.** Ich habe kein Werkzeug
   ausgeführt.
3. **Ob die Vorlagen jemals gedruckt, übergeben oder gesehen wurden**
   (Messplan § 9): **nicht prüfbar** — der Prüfling weist das selbst korrekt so
   aus, und ich habe keinen Kanal, der es klären könnte.
4. **Die Definition von „beauftragt":** Ich habe das Negativ des Prüflings
   **nicht widerlegt**, aber auch **nicht bestätigt** — mein Suchraum war
   derselbe, und ein zweiter unabhängiger Lesekanal fehlt (CLAUDE.md: ein
   Negativ aus einer Gegenprobe braucht einen zweiten Kanal oder die
   Kennzeichnung „nicht bestätigt"). Ergebnis: **nicht bestätigt.**
5. **Ob die R17-C-Meldung der fünf Stellen vollzählig war:** teilweise
   beantwortet (G-1 zeigt eine sechste), aber ich kann nicht ausschließen, dass
   es eine siebte gibt — s. Blindstelle 4.
6. **Sachliche Richtigkeit der Termin-Rückwärtsrechnung** (S0–S5, 63/56 Tage,
   die 300er-Schwelle): **nicht Gegenstand dieses Auftrags**, nicht nachgerechnet.
7. **`akquise/listenbau-regelwerk.md` § 3 Pflicht 4** — im § 3.2 als „weitere
   Fundstelle derselben Aussage" genannt: **nicht gelesen**, die Angabe ist von
   mir **nicht verifiziert**.
8. **STATUS.md-Nachzug:** Ob R18-C den in STATUS Punkt 0 stehenden Auftrag
   („der Akquiseplan ist entsprechend nachzuziehen") in ihrer Abschlussmeldung
   als erfüllten benannten Posten führt (V17-10, Pflichtfeld), ist **nicht
   prüfbar** — `protokolle/R18-C-abschluss.md` existiert im Prüfstand nicht.

---

## Zählung meiner Befunde je Kategorie

| Kategorie | Befunde | IDs |
|---|---|---|
| Kern (Ein-Gate / verkürzter Vorbehalt in § 6/7/8) | **3** | G-1, G-5, G-9 |
| 1 Zitat-Treue | **3** | G-6, G-7, G-13 |
| 2 Vorbehalt vollständig | **2** | G-5, G-9 |
| 3 Neue Entwarnungen | **5** | G-1, G-3, G-4, G-8, G-12 |
| 4 Löschungen | **1** | G-15 |
| 5 Kurz-ID-Umbenennung | **2** | G-3, G-7 |
| 6 Messplan § 9 | **3** | G-8, G-10, G-11 |
| 7 Rückwärts-Kategorie | **1** | G-2 |
| ohne Kategorie (Nebenbefunde) | **2** | G-14, G-16 |

**Verschiedene Befunde insgesamt: 16** (G-1 … G-16). Mehrfachnennungen oben sind
gewollt — mehrere Befunde erfüllen zwei Kategorien (G-1: Kern **und**
Entwarnung; G-3/G-7: Kurz-ID **und** Entwarnung/Zitat; G-5/G-9: Kern **und**
Vorbehalt; G-8: Messplan **und** Entwarnung). Zählweg der Eindeutigkeit:
G-1, G-2, G-3, G-4, G-5, G-6, G-7, G-8, G-9, G-10, G-11, G-12, G-13, G-14,
G-15, G-16 — jede genau einmal vergeben, **Summe 16**.

**Schweregrade:** 2 schwer (G-1, G-2) · 6 mittel (G-3, G-4, G-5, G-6, G-7, G-8)
· 8 leicht/Nebenbefund (G-9 … G-16).

**Was ausdrücklich unauffällig ist:**
- **Wortlaut** aller 13 geprüften Zitate: byte-treu, 0 Abweichungen (mit
  Positivkontrolle und Negativkontrolle im selben Lauf).
- **Kurz-ID-Umbenennung:** 7 von 7 Fundstellen nachgezogen, `H-2b` → `AKQ-H-2b`
  eingeschlossen; **keine** fremde H-2 fälschlich mit umbenannt; **kein**
  Verweis aus einem anderen Dokument zeigt auf die Akquiseplan-`H-2` (repo-weite
  Gegenprobe über `*.md`, Positivkontrolle: der Lauf findet die Messplan- und
  R05-A-Träger ✔). Die Nichtbehebung von `H-1` ist ausdrücklich gemeldet statt
  still gelassen — vorbildlich.
- **Messplan § 9 Vorlagen-Stand:** am Objekt belegt. `9858ef1` existiert
  (09.08.2026 15:13:30 +0200, Betreff wie zitiert), `beleg/vorlagen/` enthält
  Interviewleitfaden und drei A5-Tagesblätter je als `.md` und `.pdf` plus
  Druck-HTML (14 Dateien), `protokolle/R03-A-abschluss.md` existiert, beide
  Projektquellen-Zitate byte-treu.
- **Der Punkt „Vorlagen beauftragt" wird tatsächlich NICHT abgehakt** — die
  ⛔-Zeile ist eindeutig, kein Ersatz-Anker gesetzt, Rückfrage an den User
  formuliert. Die Lesarten (b) und (c) sind durch § 4 wörtlich gedeckt, (a)
  durch STATUS Punkt 3 und die Projektquelle („Probedruck = User-Handgriff").
  **Keine Lesart, die die Quelle nicht hergibt.**
- **Löschungen:** 0 ersatzlos, zwei Nenner erhoben.
- **U+00AD 1 → 0, U+00A0 0 → 0** im Akquiseplan: unabhängig nachgemessen,
  bestätigt.
- **Kein neuer Termin in § 6**, kein neuer Sachvortrag in § 8, keine neue
  Rechtsaussage in einem der drei Kästen — soweit ich es gegen § 3.2, o8 und die
  Rechtsmatrix prüfen konnte.

---

*Erstellt von der unabhängigen Gegenlese-Session R18-C am Mo 17.08.2026,
20:20 MESZ. Prüfstand `106dc0e`, Rundenstart `a7fca1c`. Diese Session hat
ausschließlich diese Datei geschrieben und keine git-Operation ausgeführt.*
