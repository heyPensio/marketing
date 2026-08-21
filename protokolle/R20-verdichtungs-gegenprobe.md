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

---

## Lauf 1 — Nachzug-Commit `c466c76`

*(Nachtrag zur Gegenprobe, gleicher Prüfauftrag, früherer Prüfstand.
Angehängt; nichts oberhalb dieser Zeile geändert.)*

**Prüfgegenstand:** `git show c466c76 -- CLAUDE.md` — 24 Hunks,
70 gelöschte / 80 eingefügte Zeilen.
**Deckungs-Messstand:** `git show c466c76:lehren-register.md`
(195.243 B) — also der Register-Stand **zum Zeitpunkt des Commits**,
nicht der heutige. Das ist hier zwingend: Der Arbeitsbaum trägt
uncommittete Reparaturen aus Lauf 2 (`M CLAUDE.md`, `M lehren-register.md`),
und `81a65b2` hat Register-Text nachgetragen. Wer die Deckung am
heutigen Register misst, misst die Reparatur mit und bekommt ein
falsch-grünes Ergebnis.

### 0. Eigene Messungen

| Größe | Commit behauptet | Selbst gemessen | Urteil |
|---|---|---|---|
| CLAUDE.md vorher/nachher | 79.950 B (nachher) | **79.974 → 79.950 B** | ✅ |
| Netto-Delta | −24 B (implizit) | **−24 B** | ✅ |
| Zeilen gelöscht/eingefügt | (nicht genannt) | **70 / 80** | — |
| Hunks | (nicht genannt) | **24** | — |
| **Kerne** | **+2.074 B** | **+2.074 B** | ✅ **reproduziert** |
| **Kompensation** | **−2.098 B** | **−2.098 B** | ✅ **reproduziert** |

**Zählweg der Kern-Zahl** (rekonstruiert, weil der Commit ihn nicht
nennt): Hunk `-378,7` **netto** (+405 − 57 = 348) + die 22 Kern-Zeilen
in Hunk `-439,11` **brutto** (1.373) + Hunk `-953,6` **brutto** (353)
= **2.074**. Kompensation = 2.074 + 24 = 2.098. Beides trifft
exakt.

**Befund Z-2 (bemerkenswert):** Damit sind die Byte-Zahlen von **Lauf 1
reproduzierbar**, die von Lauf 2 (`4dd2ebd`, +1.095/−1.085) **nicht**
(§ 0 oben). Der Zählweg driftete zwischen den beiden Läufen desselben
Tages. Beide nennen ihn nicht.

**Befund Z-3 (schwer, strukturell):** **`c466c76` hat
`lehren-register.md` überhaupt nicht angefasst.**
Suchweg: `git show c466c76 --name-only` → 9 Dateien, `lehren-register.md`
ist keine davon. Der Commit-Text sagt aber „Kompensation NUR an
Fallgeschichten mit Anker" und „Register-Deckung jedes neuen Zeigers per
grep geprüft". Beides ist nur haltbar, wenn **jede** gestrichene
Fallgeschichte bereits vorher im Register stand — es gab keinen Zug, in
dem etwas hätte auslagern können. Genau daran scheitert er 14-mal.

**Positivkontrollen meines Prüfkanals:** `Zeichenklasse` im
Zeitstand-Register = **3** ✅ · `Positivkontrolle` = **50** ✅ ·
`R19` = **46** ✅ · repo-weit `Doku-Hygiene` in CLAUDE.md = **1** ✅.

**Zwei eigene Fehlnegative, im Lauf gefangen und korrigiert** (sie
gehören ins Protokoll, weil sie meinen Nenner verändert haben):
1. **Case-Falle.** `grep "vier Fehlerklassen"` → 0. Das Register
   schreibt „**V**ier Fehlerklassen" am Satzanfang. Case-insensitiv
   → Treffer. Ich habe daraufhin **alle** Literal-Negative mit `-i`
   neu gezogen.
2. **Wortlaut-Falle.** `grep "ganzes Gate"` am Zeitstand → 0, was wie
   ein harter Verlust aussah. Der Registereintrag `## L-48` trägt den
   Fall in anderen Worten („die `Termination`-Klausel (**mildert ein
   Gate** …)", „**drei** Funde", „sagte voraus"). Nach L-50 (Kürzel UND
   Sachbegriff) ist das eine **gedeckte** Auslagerung, kein Verlust.
   → Ohne diese zweite Achse hätte ich hier einen Fehlalarm gemeldet.

### 1. Verlust-Liste Lauf 1

#### SCHWER

**L1-1 · H11 · Die Bedingung fällt, die Aussage wird dadurch falsch (L-30)**
Alt: „„6 von 6 Anbietern bestätigt" kann nicht anders ausfallen,
**sobald je Anbieter ein Treffer genügt**; L-30 + Nachtrag R12"
Neu: „„6 von 6 Anbietern bestätigt" kann nicht anders ausfallen; L-30 …"
Das ist keine Straffung, sondern eine **Wahrheitswert-Änderung**: Eine
„6 von 6"-Aussage *kann* sehr wohl anders ausfallen — nur unter der
gestrichenen Bedingung nicht. Übrig bleibt ein Beispiel, das die eigene
Regel nicht mehr trägt.
Deckung: `grep -i "je Anbieter ein Treffer"` → Register **0**; der
Registereintrag `## L-30` führt einen **anderen** Fall („10 von 10
Ankern"). Die Bedingung lebt nur in `protokolle/R12-A-abschluss.md`
und `protokolle/R17-leit-verdichtung.md`.
→ **VERLOREN, keine Register-Deckung, keine Fallgeschichte.**

**L1-2 · H15 · Die Mechanik des Gegen-Durchgangs**
Alt: „Archivierung fühlt sich wie Auswertung an**; die stärkste
Fundstelle für die eigene These kann trotz Volltext-Lektüre liegen
bleiben, **weil die Auswertung entlang des Fragenkatalogs läuft**
(Herkunft: heyPensio R40)."
Neu: „Archivierung fühlt sich wie Auswertung an** (heyPensio R40)."
Gestrichen ist der **Grund** — und damit die Handlungsanweisung: Wer
weiß, dass der Fragenkatalog den Blick führt, liest gegen ihn. Wer nur
liest, dass Archivierung sich wie Auswertung anfühlt, hat eine Stimmung.
Deckung: `grep -ri "entlang des Fragenkatalogs\|Volltext-Lektüre"`
→ **0 repo-weit** (Positivkontrolle traf). Die drei `R40`-Treffer im
Register betreffen andere Sachverhalte (fetch-vor-Rebase, R40-N-6).
→ **VERLOREN.**

**L1-3 · H24 · Warum `git status` hier nicht schützt (V19-4)**
Alt: „… sagt im selben Zug, wohin ihre Beweisstücke gehören; **`git
status` kennt einen Nachbarordner nicht einmal als untracked.**"
Neu: „… sagt im selben Zug, wohin ihre Beweisstücke gehören."
Gestrichen ist der Satz, der erklärt, warum die Regel überhaupt nötig
ist: Das gewohnte Kontrollmittel schlägt hier **nicht** an. Ohne ihn
wirkt die Regel wie Ordnungsliebe.
Deckung: `grep -ri "nicht einmal als untracked\|Nachbarordner"`
→ **0 repo-weit**. Register `V19-4` trägt den Belegfall (49 Dateien,
6,5 h), aber **nicht** die Werkzeug-Mechanik.
→ **VERLOREN.**

**L1-4 · H3 · Der Ablösungsvermerk einer überholten Regel**
Alt: „(Herkunft: heyPensio R34, User-Entscheid für alle Abteilungen;
**ersetzt „Modellwahl trifft die Leitsession"**. Start-Prompts tragen
keine Modellvorgabe … — **eine Modellzeile im Prompt steuert ohnehin
nichts**)."
Neu: „(heyPensio R34, User-Entscheid; Start-Prompts tragen keine
Modellvorgabe …)."
Das gestrichene „ersetzt X" ist ein **Vorwärtsverweis** — genau das
Instrument, das die Doku-Hygiene desselben Dokuments zur Pflicht macht
(„Kippt ein neuer Stand eine ältere Festlegung, bekommt die ALTE Stelle
im selben Zug einen Vorwärtsverweis"). Ein Leser, der die alte Regel
noch kennt, erfährt nicht mehr, dass sie aufgehoben ist.
Zusätzlich fiel die Begründung „eine Modellzeile im Prompt steuert
ohnehin nichts" — die einzige Stelle, die sagt, **warum** Start-Prompts
keine Modellvorgabe tragen dürfen.
Deckung: `grep -i "modellwahl trifft die"` → **0 repo-weit**;
`Modellwahl` im Register → **0**.
→ **VERLOREN, beide Teile, keine Register-Deckung.**

**L1-5 · H16 · Wo der Widerspruch sich auflöst**
Alt: „… **und die Quelldatei von oben lesen: Ein Widerspruch ist erst
einer, wenn die Datei ihn nicht selbst auflöst** (**der Kopfblock kann
die Korrektur bereits tragen**; Sammelvermerk R5, **Prüferfang**)."
Neu: „… (Sammelvermerk R5)."
Gestrichen ist die **Fundortangabe** — „von oben lesen" bleibt als
Aufforderung ohne Ziel; der Kopfblock war die Antwort.
Deckung: `grep -i "kopfblock kann die korrektur"` → **0**. Der
Registerverweis „Sammelvermerk R5, Prüferfang" führt auf `V17-1`, das
einen **anderen** Sachverhalt trägt (Extraktions-Positivkontrolle). Der
Belegfall selbst steht in `protokolle/R05-A-abschluss.md:372–375`
(„… und daraus einen Widerspruch gemacht, ohne den Kopfblock
mitzulesen") — also im Protokoll, nicht im Register.
Mit dem „Prüferfang" fiel außerdem die **Belegtyp-Angabe** (fremdgefunden
statt selbstgefunden).
→ **VERLOREN aus dem Auto-Kanal, keine Register-Deckung.**

#### MITTEL

**L1-6 · H2 · Belegfall zur Session-Kennung.** Alt: „(Belegfall: eine
Abnahme-Session ordnete **zwei fremde Commits der falschen Session** zu)"
→ Neu: „(Belegfall Zentrale 13.08.)". `grep -i "der falschen Session"`
→ **0 repo-weit**. Die Regel bleibt, ihr einziger Beleg ist weg.

**L1-7 · H6 · „30 von 128 Zeilen" (Untracked-Regel).** Alt: „(Belegfall:
30 von 128 Zeilen gelesen, Rest überschrieben, **seitdem nicht mehr
feststellbar**)" → Neu: „(Belegfall Zentrale 10.08.2026)".
`grep -i "30 von 128"` → **0 repo-weit**; die `untracked`-Treffer im
Register (Z. 1165, 2195) sind andere Fälle (Codex-Settings,
Fremdagenten-Scratch). Verloren ist auch die Pointe „seitdem nicht mehr
feststellbar" — der Grund, warum es kein Undo gibt.

**L1-8 · H17 · Die Selbsttest-Fallgeschichte.** Alt: „eine
Selbsttest-Datei behauptete „jedes Muster muss feuern", **erzwungen war
es für eine Teilmenge; wer die Datei las, hielt die Regel für
durchgesetzt**" → Neu: nur noch die abstrakte Regel.
`grep -i "jedes muster muss feuern"` → **0**; `Teilmenge` im Register
→ **0**. `V17-2` trägt den benachbarten, aber anderen Fall (45 Muster,
3 wirkungslos). Damit steht die Regel „prüfen, für welche TEILMENGE die
Schranke greift" ohne den Fall, der ihre Nicht-Offensichtlichkeit zeigt.

**L1-9 · H23 · „geschätzte Blockzeiten lagen 1 h vor dem Rechner" (R17).**
`grep -i "blockzeiten\|1 h vor dem Rechner"` → **0 repo-weit**. Die
Schwesterhälfte (L-07, „teils richtig, teils falsch, dadurch schwer
auffällig") ist im Register sauber gedeckt (Z. 88–96) — die R17-Hälfte
nicht. Ein „nicht X, sondern Y"-Paar wurde halbiert: erhalten blieb der
Fall über **Datumsetiketten**, verloren der über **Uhrzeiten**.

#### GERING

- **L1-10 · H14:** „MKT R12" aus dem L-34-Anker gestrichen — die
  Rundenzuordnung der Lehre ist weg (`(L-34, MKT R12; … V18-1)` →
  `(L-34; … V18-1)`).
- **L1-11 · H19:** „beide beim Anwenden der Regeln selbst gefunden"
  gestrichen — Fundweg-Angabe (Selbstfund statt Prüferfund). Der
  Sachinhalt beider Fälle ist im Register gedeckt (Z. 1143–1153).
- **L1-12 · H20:** L-44-Anker vom Absatzende an den ersten Satz gezogen;
  die anschließende **Gate-Regel** („ein Gate schützt nur den Pfad, auf
  dem es liegt") steht seither **ohne Anker**. Anker-Reichweite still
  verengt, kein Textverlust.
- **L1-13 · H16:** „Prüferfang" (Belegtyp) — in L1-5 mitgezählt, hier nur
  als eigene Klasse benannt.

### 2. Sauber ausgelagert (Fall b) — 19 Aussagen, je am Zeitstand belegt

| Gestrichen (Hunk) | Fundstelle **zum Stand `c466c76`** |
|---|---|
| Gmail-Versand-deny „am Pool belegt" (H1) | `.claude/rules/gmail-mcp.md:13–14` + `.claude/settings.json:31–33` (drei deny-Einträge) |
| „Rückfluss 5 Lehren", „5 Kopien" (H1) | `geruest-nachzug-protokoll.md` |
| Quelle der ⚠️-Ordner-Warnung `f58f1c0` (H1) | `geruest-nachzug-protokoll.md:51`, `projektquelle-mkt.md:1517` u. a. |
| „gehört nicht in den auto-geladenen Kanal" (H1) | `geruest-nachzug-protokoll.md:135–139`, wörtlich |
| „vier Fehlerklassen … eine Runde später" (H4) | Register `## L-13`: „**V**ier Fehlerklassen haben sich dadurch in R6 wiederholt (Pseudo-Zitat, fehlender Vorwärtsverweis, unvollständige Extraktion, Nenner ohne Kriterium)" |
| Blueprint `cfdd5db` (H5) | `geruest-nachzug-protokoll.md`, `protokolle/R16-C-abschluss.md` |
| „Satzpunkt unmittelbar vor seinem Gegenbeleg" (H8) | Register Z. 1608: „Satzpunkt (Rn. 88) verbarg zusätzlich den Gegenbeleg (PB-2)" |
| „218/284 als 429" (H9) | Register (1 Treffer) + `protokolle/R19-A-abschluss.md` |
| L-46 „erfundene Organstellung an einen Anwalt" (H12) | Register `## L-46` |
| L-48 „drei Funde / mildert ein Gate / vorhergesagt" (H13) | Register `## L-48` Fall 1 — **in anderen Worten**, s. Fehlnegativ 2 |
| R17 „Vorprüfer hatte die Stelle am Rohbeleg geprüft" (H13) | Register Z. 2427–2430, inkl. Fundstelle `R15-A-pruefer.md` Z. 694 |
| R18 „Umlaut = 2 … 44/156 … tatsächlich 0/0" (H17) | Register Z. 2701–2706, vollständig |
| V19-2 „>100 grüne Prüfmittel" (H18) | Register Z. 3196–3199 |
| V19-3 „zufällig treffende Kontrolle / nie erreichbarer Zielzustand" (H18) | Register Z. 3200–3204, beide Fälle |
| „10/11 nach ganz regulärer Rotation" (H19) | Register Z. 1143–1149, wörtlich |
| „863 Altlast-Zitate" (H21) | Register (3 Treffer) |
| L-07 „teils richtig, teils falsch, dadurch schwer auffällig" (H23) | Register Z. 88–96 |
| „Zentrale 14.08.2026" bei V19-4 (H24) | Register `V19-4`: „(Ablageort-Belegfall, **Zentrale 14.08.2026**, Blueprint `5020bc2`)" |
| „Belegfall im Register" bei L-20 (H24) | Register führt `L-20` |

**Anker-Prüfung Lauf 1:** L-13 · L-20 · L-30 · L-34 · L-39 · L-44 ·
L-46 · L-48 · L-50 · L-07 · V17-3 · V18-1 · V18-4 · V19-2 · V19-3 ·
V19-4 · R17 · R18 · R19 · R40 · R43 — **alle im Register geführt.**
Inhaltlich gedeckt sind alle bis auf **L-30** (die gestrichene Bedingung
fehlt dort, s. L1-1). Kein Anker zeigt formal ins Leere.

### 3. Kalibrierungs-Prüfung Lauf 1

Behauptung: *„Kompensation NUR an Fallgeschichten mit Anker …
Register-Deckung jedes neuen Zeigers per grep geprüft."*

**Widerlegt, in beiden Hälften:**

- **„NUR an Fallgeschichten":** L1-1 ist eine **Tatbestands-Bedingung**,
  L1-2/L1-3/L1-5 sind **Mechaniken**, L1-4 ist ein **Vorwärtsverweis
  plus Begründung**, L1-10/L1-11/L1-12 sind **Anker- und
  Belegtyp-Angaben**. Keine davon ist eine Fallgeschichte.
- **„Register-Deckung … geprüft":** 14 der 39 Aussagen haben keine
  Register-Deckung, und der Commit hat das Register **nicht angefasst**
  (Z-3), konnte also nichts nachtragen. Bei L1-5 zeigt der mitgeschriebene
  Zeiger („Sammelvermerk R5") sogar auf einen Registereintrag mit
  **anderem Inhalt** — ein Zeiger, der eine Prüfung überstanden haben
  soll, die er nicht bestanden hätte.

**Positiv festzuhalten:** 19 von 39 Auslagerungen sind sauber und am
Zeitstand belegt, mehrere davon wörtlich. Lauf 1 ist deutlich sorgfältiger
als sein Kalibrierungssatz nahelegt — er ist nur nicht **ausnahmslos**
sorgfältig, und der Satz behauptet Ausnahmslosigkeit.

### 4. Zusatzfrage: Was ging erst in der KOMBINATION verloren?

Vier Stellen, an denen Lauf 1 und Lauf 2 **denselben Absatz** anfassten.
Drei davon sind erst zusammen ein Problem.

**K-1 · Der Positivkontroll-Kern — Beleg raus, dann Bedingung raus.**
- Ursprung: „… ein Rate-Limit kippt den Kanal MITTEN im Lauf; **218/284
  als 429 bei grünen Anfangs-Kontrollen**, R19 … Je PRÜFKANAL ein
  konkreter Kontrollkandidat — **erst wenn JEDER Kanal seinen benannten
  Anker hat, ist „je Suchlauf" umgesetzt**; …"
- Lauf 1 strich die **Zahl** (Register-gedeckt ✅).
- Lauf 2 strich die **Erfüllungsbedingung** (nicht gedeckt, s. V-3 oben).
- **Ergebnis:** Der Kern trägt heute weder den Beleg, dass Kanäle mitten
  im Lauf kippen, noch das Kriterium, wann die Regel erfüllt ist. Jeder
  Lauf für sich war vertretbar; zusammen bleibt eine Forderung ohne Maß
  und ohne Anlass.

**K-2 · Die Kontrollzahl-Regel — dreifach abgeschliffen.**
- Ursprung: „**Passt EINE Kontrollzahl nicht, ist der ganze LAUF tot,
  nicht die Stelle** — alle Zahlen desselben Laufs verwerfen (R18:
  „Umlaut = 2" abgetan, 44/156 Soft-Hyphen/NBSP gemeldet, tatsächlich
  0/0)."
- Lauf 1 strich die **Zahlen** → „(R18, Register)" (gedeckt ✅).
- Lauf 2 strich den **Kontrast „nicht die Stelle"** *und* den Zeiger
  **„Register"** → „(R18)".
- **Ergebnis:** Von einem Satz mit Verbot, Beleg und Wegweiser blieb der
  halbe Satz mit einem nackten Rundenkürzel. Der Inhalt ist im Register
  vollständig — nur weiß der Leser des Auto-Kanals das nicht mehr.

**K-3 · L-48 — Lauf 2 hat die Kompensation von Lauf 1 zurückgenommen.**
*(Das ist das lehrreichste Muster des Tages.)*
- Lauf 1 strich die Fallgeschichte **und setzte im selben Zug den
  Ersatz**: „(L-48, **Fallgeschichte im Register**)" — eine
  lehrbuchmäßige Auslagerung mit Wegweiser.
- Lauf 2 las „Fallgeschichte im Register" als Füllwort und strich es:
  „(L-48)".
- **Ergebnis:** Der Inhalt ist gedeckt, aber **der Schutzmechanismus, den
  Lauf 1 eigens gebaut hatte, ist weg.** Lauf 2 konnte nicht wissen, dass
  dieser Halbsatz kein Beiwerk war, sondern die Gegenleistung für eine
  Kürzung — er sah nur einen redundanten Hinweis.
  → **Regel-Vorschlag: Ein Auslagerungs-Zeiger, der als Kompensation
  gesetzt wurde, ist selbst geschützt.** Wer „Fallgeschichte im
  Register", „Belegfall im Register", „Register" o. Ä. streichen will,
  prüft zuerst per `git log -S`, ob dieser Zeiger die Bezahlung einer
  früheren Kürzung war. Sonst kostet dieselbe Passage zweimal — einmal
  den Beleg, einmal den Weg dorthin.
  *(Belegte Nachbarfälle desselben Musters: „(L-20, Belegfall im
  Register)" → „(L-20)" und „(L-34, MKT R12; Fallgeschichte im Register
  V18-1)" → „(L-34; Fallgeschichte V18-1)" — beide in Lauf 1 gesetzt bzw.
  gekürzt, in Lauf 2 weiter abgetragen.)*

**K-4 · Der ARBEITSVORRAT-Absatz — gewachsen und entkernt zugleich.**
Lauf 1 hängte an denselben Absatz zwei neue Kerne an (fetch-Pflicht,
Wahrheits-Kanal-Verneinung, +405 B); Lauf 2 strich daraus die Mechanik
(„weil das Ergebnis anderswo dokumentiert wird") und die Zahl („4 von 5
Strängen"). Netto blieb der Absatz gleich lang — und wirkt deshalb in
keiner Budget-Messung als Verlust auf. **Ein Absatz, der wächst und
gleichzeitig Belege verliert, ist für jede Byte-Bilanz unsichtbar.**

### 5. Nenner Lauf 1

Zählweg: Zerlegung des ALT-Texts aller 21 kürzenden Hunks (H7/H9 mit
Teil-Kürzungen eingeschlossen, H22 als reine Einfügung ausgenommen) in
atomare Aussagen; je Aussage eine Deckungsfrage gegen den Register-Stand
**`c466c76`** plus repo-weite Gegenprobe, Literal- **und**
Sachbegriff-Achse, case-insensitiv.

> **39 von 39 atomaren Aussagen geprüft — 6 erhalten, 19 ausgelagert
> (17 davon register-gedeckt, 2 an anderem benannten Ort), 14 verloren
> oder ohne die behauptete Deckung.**

Davon **5 schwer** (L1-1 bis L1-5), **4 mittel** (L1-6 bis L1-9),
**5 gering** (L1-10 bis L1-13 sowie die Reichweiten-Verkürzung
„User-Entscheid für alle Abteilungen" → „User-Entscheid" in H3, deren
Wortlaut in Regel 6 desselben Dokuments erhalten blieb).

**Beide Läufe zusammen (R20 gesamt):**
39 + 42 = **81 atomare Aussagen**, davon **25 verloren oder ungedeckt**
(14 + 11) — plus 3 Neu-Text-Befunde aus Lauf 2 und 3 Kombinationsschäden
(K-1 bis K-3), die in keiner der beiden Einzelbilanzen auftauchen.

### 6. Welche Verlust-Art hätte mein Verfahren auch hier NICHT gefunden?

Die sechs Grenzen aus § 7 gelten unverändert. Drei kommen für Lauf 1 hinzu:

1. **Verluste in den 80 EINGEFÜGTEN Zeilen der sechs neuen Kerne.** Ich
   habe geprüft, was verschwand, nicht ob die neuen Kerne ihre eigene
   Blueprint-Quelle korrekt wiedergeben. Ob „ANTWORT-REGISTER",
   „Fahrplan als Master-Referenz", „Einfrier-Anker" und „Bau→Plan-
   Rückfluss" gegenüber der heyPensio-R50/R52-Quelle vollständig sind,
   ist **nicht erhoben** — bei Lauf 2 war genau dort der schwerste
   Befund (N-2, „fünf Folgerunden"). → **Offener Prüfauftrag.**
2. **Der Zeitstand schneidet in beide Richtungen.** Ich habe am Register
   von `c466c76` gemessen, um die späteren Reparaturen auszuschließen.
   Damit sehe ich nicht, ob eine Aussage zwischen `c466c76` und
   `4dd2ebd` von einer dritten Stelle gedeckt wurde. Für die 14
   (c)-Fälle habe ich das repo-weit gegengeprüft, für die 19 (b)-Fälle
   nicht — dort hätte eine spätere **Löschung** im Register meine
   ✅-Wertung überholt.
3. **Kombinationsschäden über mehr als zwei Läufe.** Ich habe zwei
   Commits verglichen. Eine Passage, die in R17, R19, `c466c76` und
   `4dd2ebd` je ein Viertel verlor, erscheint in keinem der beiden
   Paar-Vergleiche als auffällig. K-3 zeigt, dass das Muster real ist —
   die Reichweite ist ungemessen.
