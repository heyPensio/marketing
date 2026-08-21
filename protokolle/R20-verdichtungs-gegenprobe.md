# R20 — Verdichtungs-Gegenprobe zum Debrief-Commit `4dd2ebd`

**Prüfer:** Verdichtungs-Prüfer mit frischem Kontext (kannte den
Debrief-Ablauf nicht, nur den Diff).
**Prüfgegenstand:** `git show 4dd2ebd -- CLAUDE.md` — alle 16 Hunks.
**Prüfstand:** Arbeitsbaum-HEAD zum Zeitpunkt des Laufs; Register-Stand
`lehren-register.md` nach `4dd2ebd`.
**Schreibrecht:** nur diese Datei. Kein `git add`, kein Commit.

---

## 0. Eigene Messungen (Zählweg genannt, nichts aus dem Commit-Text übernommen)

| Größe | Commit behauptet | Selbst gemessen | Zählweg | Urteil |
|---|---|---|---|---|
| Diff-Zeilen gelöscht | 42 | **42** | `awk` über den Diff, nur Zeilen nach dem ersten `@@`, Präfix `-` | ✅ deckt sich |
| Diff-Zeilen eingefügt | 47 | **47** | dito, Präfix `+` | ✅ deckt sich |
| Hunks | (nicht genannt) | **16** | `grep -c '^@@'` | — |
| CLAUDE.md vorher/nachher | 79.950 → 79.960 B | **79.950 → 79.960 B** | `git show 4dd2ebd~1:CLAUDE.md \| wc -c` bzw. `4dd2ebd:` | ✅ deckt sich |
| Netto-Delta | +10 B | **+10 B** | Byte-Summe aller `+`-Zeilen minus aller `-`-Zeilen (Node, LF) | ✅ deckt sich |
| Register-Zuwachs | +7.852 B | **+7.852 B** | `wc -c` vorher/nachher `lehren-register.md` | ✅ deckt sich |
| **Kerne-Zuwachs** | **+1.095 B** | **+991 B netto / +1.016 B brutto** | Hunk `-674,6` (+770 netto) + Hunk `-979,7` (+221 netto; brutto +246) | ⚠️ **nicht reproduzierbar** |
| **Kompensation** | **−1.085 B** | **−981 B netto / −3.394 B brutto** | Summe der übrigen 14 Hunks | ⚠️ **nicht reproduzierbar** |

**Befund Z-1 (gering, aber echt):** Die beiden Komponenten-Zahlen
`+1.095 / −1.085` lassen sich unter keinem von mir konstruierten Zählweg
reproduzieren — reproduzierbar ist nur ihre **Differenz** (+10 B), und
die stimmt. Beide Komponenten tragen keinen Zählweg im Commit-Text
(CLAUDE.md: „Für jede Zahl, die in ein Dokument geht, den Zählweg
benennen"). Die Budget-Aussage („unter Sollmarke") ist davon nicht
betroffen — sie hängt am Netto, und das Netto ist geprüft.

**Positivkontrollen meines eigenen Prüfkanals** (je Kanal ein Begriff,
der treffen MUSS — sonst wäre jedes meiner Negative ein Werkzeugbefund):
- Register-Grep-Kanal: `Zeichenklasse` in `lehren-register.md` = **3** ✅
- Repo-weiter Grep-Kanal (`--include="*.md"`): `Negative altern still`
  in CLAUDE.md = **1** ✅
- Register-Kanal, zweiter Sollwert: `Kontrollzahl` = **3** ✅

Alle drei trafen. Die unten gemeldeten Nulltreffer sind damit
Bestands-Negative, keine Kanal-Negative.

---

## 1. Hunk-Inventar: Was war Kompensation, was nicht?

*(Auftragsfrage 4)*

| # | Hunk | Art | Kompensation? |
|---|---|---|---|
| H1 | `-3,11` Gerüst-Stand | Straffung + Stand-Update | teils Kompensation, teils **Sach-Update** |
| H2 | `-36,11` Plan-Prüfung | reine Straffung | ja |
| H3 | `-58,7` **MKT-AKQ Strang-Zeile** | **Sach-Umformulierung** | **nein — Fertig-Kriterium eines Strangs** |
| H4 | `-73,9` Rollennamen | Fallgeschichte gestrichen | ja |
| H5 | `-267,9` Regel 8 / L-19 | Straffung | ja |
| H6 | `-357,15` ARBEITSVORRAT | Straffung + Zahl gestrichen | ja |
| H7 | `-467,8` Positivkontrolle | **Regelteil gestrichen** | formal ja, sachlich nein |
| H8 | `-501,9` V17-4 | Fallgeschichte gestrichen | ja |
| H9 | `-513,9` Summenprobe | Umformulierung | ja |
| H10 | `-617,8` L-48 | Zeiger gestrichen | ja |
| **H11** | `-674,6` | **NEU: L-53 + L-54** | Einfügung |
| H12 | `-687,9` Kontrollzahl | Kontrast gestrichen | ja |
| H13 | `-939,8` Zeiger-Fußnote | Begründung gestrichen | ja |
| **H14** | `-979,7` | **NEU: ERFÜLLEN-Gegenrichtung** | Einfügung |
| H15 | `-1169,7` regelwerk-waechter | Provenienz gestrichen | ja |
| H16 | `-1177,8` Bausteine-Fußnote | **Beleg gestrichen + Zahl neu beschriftet** | **nein — Sach-Update** |

**Antwort auf Frage 4: Nein.** Mindestens **H3** und **H16** sind
inhaltliche Änderungen an unbeteiligten Stellen (Strang-Fertigkriterium
bzw. Bestands-Fußnote), **H1** ist gemischt. Drei von sechzehn Hunks
sind nicht reine Kompensation.

---

## 2. Prüfung der drei NEU eingefügten Kerne gegen das Register

### 2.1 L-53 (H11) — gedeckt, mit einer Anmerkung

| Aussage in CLAUDE.md | Register `## L-53` (Z. 3223 ff.) | Urteil |
|---|---|---|
| „Ein Negativ über das GANZE ist kein Negativ über seine Teile" | wortgleich im Kern-Absatz | ✅ |
| „der tragende BESTANDTEIL … wird separat gemessen und am ROHBELEG ausgezählt" | wortgleich | ✅ |
| „Auch eine NIEDRIGE Trefferzahl ist nur eine Lesestelle" | Sekundär-Lehre 1: „Eine NIEDRIGE Zahl ist keine Entwarnung" | ✅ |
| **„der Kern mit 30 Treffern war belegt, der mit 338 frei"** | „Logio hatte 30 EUIPO-Treffer, der Bestandskern Pensio 338 … Pensio der freie Kern (0 exakte Identität), Logio der belegte" | ✅ **beide Zahlen belegt** |

**Anmerkung N-1 (gering):** Die Beispielliste weicht ab. CLAUDE.md:
„(Kern eines Zeichens, Präfix einer ID, Segment eines Pfades)" — drei
Elemente, ohne „z. B.", liest sich damit als **geschlossene** Liste.
Register: „(Name aus Vorsatz + Kern, ID aus Präfix + Nummer, Pfad,
**Konfig-Schlüssel**)" — vier Elemente. Der Fall *Konfig-Schlüssel*
fällt im Auto-Kanal weg, und die fehlende „z. B."-Öffnung verengt die
Klasse. Klein, aber genau das Pflicht-Muster „gestrichene ‚z. B.'".

### 2.2 L-54 (H11) — vollständig gedeckt

Alle vier Aussagen (Bauform statt Menge · Vorbild analysieren ·
Bildungsprinzip wird zur Suchvorgabe, nicht das Thema · „Eine Bauform
kann als Ganzes verbraucht sein") stehen wörtlich oder sinngleich in
`## L-54` (Z. 3262 ff.). CLAUDE.md behauptet **keine Zahl** — die
Registerzahlen (14/20 vs. 3/75, ~275 Namen, sieben Wellen) bleiben dort.
Sauber. ✅

### 2.3 ERFÜLLEN-Schärfung (H14) — ⚠️ **SCHWERER BEFUND: neue Zahl**

CLAUDE.md (neu):

> **Gegenrichtung: Eine AUFGEWORFENE Frage, die nicht als
> Entscheidungspunkt GEFÜHRT wird, existiert für die Folgearbeit
> nicht** — **fünf Folgerunden** schlossen die Antwort per Konstruktion
> aus (Sammelvermerk R20).

Register `## Sammelvermerk R20` (Z. 3297 ff.):

> Folge: **fünf weitere Wellen** (~200 Namen) liefen mit
> Kontaminationsschutz gegen den Vorsatz — die Schiene war per
> Konstruktion ausgeschlossen und wurde nie gemessen.

**Der Regelsatz ist wortgleich gedeckt. Die Zahl ist es nicht.**
Das Register sagt **Wellen**, CLAUDE.md sagt **Folgerunden**. In diesem
Projekt ist „Runde" ein **definierter Begriff** (`R<runde>-<buchstabe>`,
`/runde`, „Debrief bleibt PRO RUNDE"), „Welle" ist die Zähleinheit des
Naming-Sprints. Die Überschrift desselben Registereintrags sagt es
selbst: *„Sammelvermerk R20 … + **Wellen 7–12**"* — sechs Wellen
innerhalb **einer** Runde. Die fünf Wellen des Belegfalls fielen in
höchstens zwei Runden (R19/R20).

„Fünf Folgerunden" behauptet damit einen **fünffach größeren
Schadensumfang**, als der Beleg trägt, und zwar in der Projekt-eigenen
Vokabel für die größte Arbeitseinheit. Das ist genau das Pflicht-Muster
„neu abgeleitete Zahl, die so in keiner Quelle steht" — entstanden im
selben Commit, der Register-Deckung reklamiert.

**Reparaturvorschlag:** „fünf Folge-**Wellen**" (Register-Wortlaut),
oder „~200 Namen über fünf Wellen".

---

## 3. Kalibrierungs-Prüfung: hält „ausschließlich Fallgeschichten mit Register-Deckung"?

**Nein. Die Behauptung ist in zwei Richtungen widerlegt.**

**(A) Nicht alles Gestrichene war eine Fallgeschichte.** Gestrichen
wurden auch: eine **Funktionszuweisung** (H3, „als Rückwärts-Anker"),
eine **Vollzähligkeits-Bedingung** (H7, „erst wenn JEDER Kanal …"), ein
**Kontrast/Verbot** (H12, „nicht die Stelle"), eine **kausale
Mechanik** (H6, „weil das Ergebnis anderswo dokumentiert wird"), eine
**Begründung** (H5, „sonst zählt eine sachlich falsche Reparatur als
erledigt"), ein **Herkunftsbeleg einer ⭐-Regel** (H16, „Zentrale
14.08.2026") und ein **Aktivierungsstempel** (H15, „Aktiviert
R16-Debrief").

**(B) Nicht alles Gestrichene hat REGISTER-Deckung.** Fünf gestrichene
Aussagen sind in `lehren-register.md` überhaupt nicht auffindbar
(Zählung unten). Bei zwei weiteren liegt die Deckung anderswo
(`geruest-nachzug-protokoll.md`, `zentrale\rollen-charta.md`) — sachlich
in Ordnung, aber „Register-Deckung" ist es nicht.

---

## 4. Verlust-Liste (Fall c) — nach Schwere

### SCHWER

**V-1 · H6 · Die kausale Mechanik der stillen Alterung — repo-weit weg**
Alt: „…sie werden falsch in dem Moment, in dem jemand die Sache baut —
der Posten wird beim Erledigen nicht gestrichen, **weil das Ergebnis
anderswo dokumentiert wird**".
Neu: „…der Posten wird beim Erledigen nicht gestrichen".
Der `weil`-Satz ist der **Grund**, warum ein Arbeitsvorrats-Negativ
still altert — er sagt dem Leser, wo er nachsehen muss (an der Stelle,
an der das Ergebnis tatsächlich dokumentiert wurde). Ohne ihn bleibt die
Beobachtung ohne Suchrichtung.
Suchweg: `grep -rn "Posten wird beim Erledigen\|nicht gestrichen, weil\|Ergebnis anderswo" --include="*.md" .` → **1 Treffer**, und der ist die
gekürzte CLAUDE.md-Zeile 357 selbst. Register: 0.
→ **VERLOREN**, keine Deckung.

**V-2 · H6 · Die Zahl „4 von 5 Strängen" — keine Register-Deckung**
Alt: „(Herkunft: MKT R15 — **4 von 5 Strängen einer Runde trugen eine
widerlegte Verneinung**.)" → Neu: „(MKT R15.)"
Diese Zahl ist der **Dringlichkeitsbeleg** der ⭐-Regel: ohne sie liest
sich „Arbeitsvorrat = Verneinungen" wie eine Stilfrage.
Register: `grep -n "Arbeitsvorrat" lehren-register.md` → **1 Treffer**,
und das ist L-50s Handlungskern-Zeile, die den Fall **nicht** enthält.
Die Fallgeschichte lebt nur in `projektquelle-mkt.md:1508` (Changelog
14.08.2026) — einem **rotierenden** Kanal, nicht dem Register.
→ **ohne die behauptete Register-Deckung**; Deckung nur im Wahrheits-Kanal.

**V-3 · H7 · Die Vollzähligkeits-Bedingung der Positivkontrolle**
Alt: „Je PRÜFKANAL ein konkreter Kontrollkandidat — **erst wenn JEDER
Kanal seinen benannten Anker hat, ist „je Suchlauf" umgesetzt**; der
stärkste Kontrollbegriff …"
Neu: „Je PRÜFKANAL ein konkreter Kontrollkandidat; der stärkste …"
Gestrichen ist eine **„erst wenn"-Bedingung** — also genau die Klasse,
die das Pflicht-Muster als verlustanfällig benennt. Sie beantwortet die
Frage „Wann ist die Regel erfüllt?". Übrig bleibt eine Forderung ohne
Erfüllungskriterium; ein Lauf mit Kontrollen auf 2 von 3 Kanälen sieht
jetzt regelkonform aus.
Register: `grep -c "je Suchlauf" lehren-register.md` = **0**;
`grep -c "benannten Anker"` = **0**.
Herkunft lebt nur in `protokolle/R03-C-abschluss.md:96` („eine Regel
‚je Suchlauf' ist erst umgesetzt, wenn JEDER Kanal seinen konkreten
Kontrollkandidaten benannt hat") und `protokolle/R04-A-pruefer.md:146`.
→ **VERLOREN aus dem Auto-Kanal, keine Register-Deckung, kein
Fallgeschichten-Charakter.**

**V-4 · H3 · Internorga verliert ihre Funktionszuweisung**
Alt: „Internorga Hamburg (März) **als Rückwärts-Anker** — ⚠️ liegt
HINTER der November-Frist, trägt für Abschluss 1 nicht (R8/N-4)"
Neu: „Internorga Hamburg (März — ⚠️ HINTER der November-Frist, trägt für
Abschluss 1 nicht; R8/N-4)"
Die Warnung blieb ✅ — die **Rolle** fiel. Damit steht Internorga in
MKT-AKQ jetzt **nur noch als Kanal-Kandidat mit Warnhinweis**.
Das ist die Lesart, die `akquise/akquiseplan.md:1220` (Nebenbefund N-4)
ausdrücklich als falsch markiert und deren Reparatur er anders
vorschreibt: *„Formulierung schärfen: **Anker für den Lead-Prozess,
nicht Kanal für Abschluss 1**."* Der Commit hat die falsche Hälfte
behalten.
Zusätzlich **Ableitungs-Bruch (L-25-Klasse)**: zwei abgeleitete
Dokumente zitieren genau diese Zeile —
`handel/kanal-rechtsmatrix.md:416` („Für die Internorga (März), **die
MKT-AKQ als Rückwärts-Anker führt** …") und `fund/wettbewerbsbild.md:2002`
(„als Rückwärts-Anker führt"). Beide zeigen jetzt auf eine Quelle, die
das nicht mehr sagt.
→ **VERLOREN aus CLAUDE.md**; sachlich noch in Projektquelle/Akquiseplan,
aber die Ableitungen wurden nicht nachgezogen.

### MITTEL

**V-5 · H16 · Herkunftsbeleg einer ⭐-Regel gestrichen**
Alt: „[**Zentrale 14.08.2026**; Stand 17.08.: 8/8 aktiv]"
Neu: „[Stand 21.08.: 8/8 Rules-Bausteine + Skill `design-dna`]"
Die ⭐-Regel „Ein nicht aktivierter Baustein ist keine
Schlank-Entscheidung, sondern eine offene Falle" steht damit als einzige
⭐-Regel dieses Abschnitts **ohne Herkunftsangabe**. CLAUDE.md verlangt
für Aussagen mit Verbindlichkeit die Quelle im Satz.
Register: `grep -rn "Schlank-Entscheidung\|nicht aktivierter Baustein"` →
Treffer nur in CLAUDE.md selbst und `protokolle/tagesplan-2026-08-17.md:151`
(dort mit Commit `5020bc2`). Register: **0**.
→ **VERLOREN**, keine Register-Deckung.

**V-6 · H13 · Der Anwendungsfall der Dubletten-Regel**
Alt: „*(Beide Kerne **lebten hier doppelt ohne Wächter** — Zeiger seit
R16, Dubletten-Regel.)*" → Neu: „*(Zeiger seit R16, Dubletten-Regel.)*"
Gestrichen ist die **Begründung**, warum genau diese zwei Kerne zu
Zeigern wurden — also der Beleg, dass die Dubletten-Regel hier
tatsächlich angewandt wurde und nicht nur zitiert wird.
Register: `lehren-register.md:2164` führt die Dubletten-Regel, aber mit
einem **anderen** Fall (R16-C M-5, Zeiger auf WP-35); Z. 3090 mit einem
dritten (datei-interner Fall). Dieser Fall steht dort nicht.
→ **VERLOREN**, keine Register-Deckung.

### GERING / UNSICHER

**V-7 · H5 · „sonst zählt eine sachlich falsche Reparatur als erledigt"**
Register `## L-19` (Z. 690 ff.) belegt den Fall „**nie eingearbeitet**,
trotzdem als ‚eingearbeitet' geführt" — das ist ein **anderer**
Fehlermodus als „durchgeführt, aber **sachlich falsch**". Der
Registertext trägt die Klasse nicht ausdrücklich.
Die *Wirkung* bleibt erhalten: „die Reparatur wird am ROHBELEG gemessen"
fängt beide Modi. Verloren ist nur die Benennung des zweiten Modus.
→ **unsicher / Teilverlust** (Wirkung erhalten, Fehlermodus-Benennung weg).

**V-8 · H12 · Der Kontrast „nicht die Stelle"**
Alt: „ist der ganze LAUF tot, **nicht die Stelle**" → Neu: „ist der ganze
LAUF tot".
Klassisches „nicht X, sondern Y"-Paar; das **Verbot** (nur die eine
Zelle zu reparieren) fällt weg. Register Z. 2706 trägt „ist der ganze
LAUF tot", aber `grep -c "nicht die Stelle" lehren-register.md` = **0**;
die Formulierung lebt nur in `protokolle/R18-A-abschluss.md:392`.
Die *Wirkung* bleibt: „alle Zahlen desselben Laufs verwerfen" steht noch
in CLAUDE.md und im Register.
→ **unsicher / geringer Verlust** (Emphase weg, Operative erhalten).

**V-9 · H9 · Die konkrete Fehlerbenennung der Summenprobe**
Alt: „sie fängt eine **vergessene Zeile**, eine **FEHLEINSTUFUNG** nie;
sie belegt Vollzähligkeit, nie die Richtigkeit der Zuordnung."
Neu: „sie belegt Vollzähligkeit, nie die Richtigkeit der Zuordnung."
Der ⚠️-Vorbehalt selbst blieb ✅. Verloren sind die zwei konkreten
Handgriffe, an denen ein Leser die abstrakte Aussage wiedererkennt.
→ **erhalten in der Sache, verloren im Zugriff** (Retrieval-Verlust).

**V-10 · H15 · „Aktiviert R16-Debrief"**
Aktivierungsstempel des `regelwerk-waechter`-Bausteins gestrichen — der
Nachbareintrag `skill-bauweise` behält seinen („aktiviert im M1-Nachzug,
User-Entscheid 11.08.2026"), die Liste wird also uneinheitlich.
Deckung: `geruest-nachzug-protokoll.md:67` dokumentiert die Aktivierung
des Textbausteins, `projektquelle-mkt.md:1460` führt den R16-Debrief.
Der Stempel „R16-Debrief" als solcher steht dort nicht wörtlich.
→ **teilgedeckt / unsicher**, geringe Schwere.

**V-11 · H1 · „Nachzug NEUER METHODIK-LEHREN" → „Nachzug"**
Der Anwendungsbereich von `/projekt-init nachzug` ist jetzt unbenannt.
Keine Deckung nötig (der Command trägt seine eigene Beschreibung), aber
es ist eine Scope-Angabe, keine Fallgeschichte.
→ **geringer Verlust**, Verengung nicht erkennbar schädlich.

### Sauber ausgelagert (Fall b) — geprüft und bestätigt

| Gestrichen | Fundstelle | Inhalt dort? |
|---|---|---|
| „5 Kopien" (H1) | `geruest-nachzug-protokoll.md:285, 324` | ✅ „5 Kopien vom Master gezogen" |
| „Transit-Verbot" hinter G5 (H1) | `geruest-nachzug-protokoll.md:5, 111, 137` | ✅ — und CLAUDE.md nennt genau diese Datei als Ziel |
| „Charta-Ergänzung 14.08.2026" (H4) | `..\zentrale\rollen-charta.md:81` | ✅ „(Zentrale-Ergänzung 14.08.2026 …)" |
| „Namensmangel wurde in R15 zum Kapazitätsdeckel" (H4) | `..\zentrale\rollen-charta.md:84` | ✅ „**der Namensmangel wurde zum Kapazitätsdeckel.**" |
| „vor dem ein früherer Prüfer gewarnt hatte" (H5) | Register `## L-19`, Fall (a) | ✅ „vor der ein früherer Prüferbefund (K-3) gewarnt hatte" |
| V17-4-Fallgeschichte (H8) | Register Z. 2283–2287 | ✅ vollständig, inkl. „hätte jeden Prüfer beruhigt" und „EIN Lesefehler, ZWEI schwere Befunde" |
| „Fallgeschichte im Register" (H10) | Register `## L-48` Z. 1880 | ✅ Eintrag existiert und trägt den Fall |
| „(R18, Register)" (H12) | Register Z. 2698–2708 | ✅ Belegfall R18-A Falle 1 vollständig |

**Anker-Prüfung (alle im Diff berührten):** L-13 · L-19 · L-24 · L-30 ·
L-48 · L-50 · L-53 · L-54 · V17-4 · V17-10 · Sammelvermerk R18 ·
Sammelvermerk R20 → **alle im Register geführt UND inhaltlich belegt.**
`R8/N-4` → `protokolle/R08-A-abschluss.md:107` ✅. `G5` → nicht im
Register, aber in der im selben Satz genannten Zieldatei ✅.
**Kein Anker zeigt ins Leere.**

---

## 5. Zusatzbefund im NEUEN Text: die Bausteine-Zahl (H16)

Alt: „[Zentrale 14.08.2026; **Stand 17.08.: 8/8 aktiv**]"
Neu: „[**Stand 21.08.: 8/8 Rules-Bausteine** + Skill `design-dna`]"

Die Zahl blieb „8/8", ihre **Beschriftung** wurde geändert — und damit
ihre Aussage. Gemessen:

- `ls -1 .claude/rules/*.md | wc -l` → **9** Dateien
- Bausteine-Liste in CLAUDE.md selbst → **9** Einträge (`windows-powershell`
  … `regelwerk-waechter`)
- Blueprint-Katalog `..\projektgeruest\vorlage\bausteine\` → **10**
  Einträge (8 `.md` + die Ordner-Bausteine `design-dna` und
  `regelwerk-waechter`)

Zwei mögliche Lesarten, beide unbefriedigend:
1. „Rules-Bausteine" = die lokal aktiven Rules-Dateien → dann müsste dort
   **9/9** stehen, nicht 8/8.
2. „Rules-Bausteine" = die 8 `.md`-Bausteine des Katalogs → dann ist
   `regelwerk-waechter` (ein **Ordner**-Baustein, der als Rules-Datei
   gelandet ist) in der Fußnote ungezählt, obwohl aktiv und in der Liste
   darüber sichtbar. Ausgerechnet der Gerüst-Stand-Kasten desselben
   Commits warnt: „⚠️ Ordner-Bausteine misst er nicht."

**Urteil: UNSICHER, wahrscheinlich falsch.** Eine unveränderte Zahl mit
neuer Beschriftung ist eine **neue Bestandsaussage** und trägt volle
Messpflicht (L-36) — gemessen wurde sie erkennbar nicht, sonst wäre der
Widerspruch zur direkt darüberstehenden 9-Zeilen-Liste aufgefallen.

---

## 6. Nenner

Zählweg: Zerlegung des ALT-Texts aller 14 kürzenden Hunks in atomare
Aussagen (Typen REGEL · VORBEHALT · BELEG/Fallgeschichte · ANKER · ZAHL),
je Aussage genau eine Deckungsfrage. Die beiden reinen Einfüge-Hunks
(H11, H14) enthalten keinen Alt-Text und gehen nicht in den Nenner ein;
sie sind in § 2 separat geprüft.

> **42 von 42 atomaren Aussagen geprüft — 22 erhalten, 9 ins Register
> bzw. an den im Text benannten Zielort ausgelagert, 11 verloren oder
> ohne die behauptete Deckung.**

Von den 11: **4 schwer** (V-1 bis V-4), **2 mittel** (V-5, V-6),
**5 gering/unsicher** (V-7 bis V-11).

Dazu **3 Befunde im NEU eingefügten Text**, die nicht in den Nenner
gehören, weil sie keine Kürzung sind:
- **N-2 (schwer):** „fünf Folgerunden" statt „fünf Wellen" — Zahl steht
  so in keiner Quelle (§ 2.3).
- **N-3 (unsicher):** „8/8 Rules-Bausteine" gegen 9 Rules-Dateien (§ 5).
- **N-1 (gering):** L-53-Beispielliste ohne „z. B.", `Konfig-Schlüssel`
  entfallen (§ 2.1).
- **Z-1 (gering):** Komponenten-Byte-Zahlen des Commit-Texts nicht
  reproduzierbar (§ 0).

**Kalibrierungs-Antwort:** Die Behauptung „ausschließlich Fallgeschichten
mit Register-Deckung" ist **widerlegt** — durch V-1, V-3, V-4, V-5, V-6
(keine Register-Deckung) und durch H3/H7/H12/H15/H16 (keine
Fallgeschichten).

---

## 7. Welche Verlust-Art hätte mein Verfahren NICHT gefunden?

*(Pflicht-Selbstauskunft. Jede Zeile ist eine Grenze meines Laufs, kein
Haftungsausschluss — sie benennt Fundorte für die nächste Prüfung.)*

1. **Verluste durch UMSTELLUNG statt Streichung.** Ich habe je Hunk
   Alt gegen Neu gelesen. Wäre eine Aussage aus Hunk A gestrichen und in
   Hunk M in anderer Formulierung wieder aufgetaucht, hätte ich sie als
   „erhalten" gewertet — hätte aber nicht bemerkt, wenn sie dabei unter
   eine **falsche Überschrift** oder in einen falschen Geltungsbereich
   gerutscht ist. Der Diff zeigt Zeilen, nicht Kapitelzugehörigkeit.

2. **Bedeutungsverschiebung durch das, was STEHEN BLIEB.** Eine
   Streichung kann den Nachbarsatz umdeuten, ohne ihn anzufassen — der
   Nachbarsatz erscheint dann als unveränderte Kontextzeile und fällt aus
   meinem Prüfraum. V-4 habe ich nur gefunden, weil ein fremdes Dokument
   die Zeile zitierte; einen Fall ohne solchen Außenzeugen hätte ich
   übersehen.

3. **Verluste in den 47 EINGEFÜGTEN Zeilen, die nichts mit den drei
   Kernen zu tun haben.** Ich habe die Einfügungen primär als Ersatz für
   Gestrichenes und die drei Kerne gegen das Register geprüft. Eine
   sachlich falsche, aber unauffällig formulierte **neue** Nebenaussage
   in einer Umformulierungszeile hätte ich nur zufällig gefangen — N-3
   fiel mir nur auf, weil eine Zahl darin stand.

4. **Kaskaden aus früheren Runden — und die Kaskade IST belegt.** Mein
   Prüfraum war **ein** Commit. Wird dieselbe Aussage über mehrere
   Kompensationsläufe hinweg schrittweise abgeschliffen, sieht jeder
   Einzelschritt harmlos aus. Belegfall, den ich nur streifte:

   - Der L-48-Kern trug einmal die Fallgeschichte „ein als ungelesen
     ausgewiesener Quellabschnitt trug drei Funde, darunter eine Klausel,
     die **ein ganzes Gate milderte**; der Prüfer hatte sie vorhergesagt".
   - Sie fiel in **`c466c76`** (Suchweg: `git log -S"ganzes Gate milderte" -- CLAUDE.md`;
     Positivkontrolle mit `-S"Nacharbeits-Liste"` traf ✅) — also im
     **Gerüst-Nachzug DERSELBEN Runde R20**, dessen Commit-Text ebenfalls
     „6 CLAUDE.md-Kerne mit Kompensation unter Soll (79.950 B)" meldet.
   - Übrig blieb der Zeiger „(L-48, Fallgeschichte im Register)" — und
     genau den strich `4dd2ebd` (H10) als vermeintliche Restkosmetik.

   **R20 hat also ZWEI Kompensationsläufe, und meine Gegenprobe deckt nur
   den zweiten.** Was `c466c76` gekürzt hat, ist ungeprüft.
   → **Konkreter Nacharbeits-Auftrag, nicht nur eine Grenze:** dieselbe
   Gegenprobe über `c466c76` fahren, danach über die
   Kompensations-Commits von R17–R19.

5. **Register-Einträge, die es GIBT, aber inhaltlich zu schwach sind.**
   Ich habe je Anker geprüft, ob der Inhalt dort steht — nicht, ob er
   dort **vollständig** steht. Ein Registereintrag, der die Fallgeschichte
   selbst schon verkürzt übernommen hat, hätte bei mir als ✅ gezählt.
   Der Auftrag verlangte „Anker allein genügt nicht" — geprüft habe ich
   Existenz + einschlägiger Inhalt, nicht Vollzähligkeit gegen den
   Rohbeleg der jeweiligen Runde.

6. **Nicht geprüft: Umlaut-/Encoding-Integrität und Mojibake.** Der
   Commit behauptet „Umlaut-Zählung 893 → 892, Mojibake-Marker 0". Ich
   habe das **nicht nachgemessen** — nicht prüfbar im Rahmen dieses
   Laufs, also ausdrücklich **offen**, nicht „unauffällig".
