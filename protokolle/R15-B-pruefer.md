# R15-B — Prüferbericht (unabhängiger Prüfer, frischer Kontext)

**Prüfstand: Commit `a57977a`** (`handel/angebotsarchitektur.md`,
432 Einfügungen / 0 Löschungen). **Datum: 14.08.2026.**
Alle Fundzahlen dieses Berichts sind gegen `a57977a` erhoben — bzw. gegen
`4fa530b` (Rohbeleg) und `4b84693` (Zwischenquelle), wo die Quelle in einem
anderen Repo bzw. an einem anderen Stand liegt. **Keine Zahl ist gegen den
wandernden Arbeitsbaum gemessen.**

Prüfgegenstand: neuer Abschnitt **§ 6a** (Z. 1375–1751 @`a57977a`), der
Nachtrag im § 6-Kasten (Z. 1354–1374), die drei Zeiger-Kästen an P-A/P-B/P-C
(Diff-Hunks bei Z. 649–664, 675–690, 699–712), der Zusatz im Kopfkasten
Punkt 3 (Z. 219–232) und die zwei Zeilen in § 8 (Z. 1887–1898).

---

## Was ich gelesen habe (mit Zeilenspannen)

**Rohbeleg** `heypensio/n8n-lizenz-z6-und-mcp-vorlage-2026-08.md` @`4fa530b`
(LF-Fassung aus `git show`, 1454 Zeilen) — **am Stück gelesen:**

| Spanne | Inhalt |
|---|---|
| Z. 16–135 | § 0.1 Belegstufen · § 0.2 „Was dieses Papier NICHT ist" · § 1 Ergebnis-Zeilen |
| Z. 373–441 | § 3.4 Frage (b) · § 3.5 Grenzziehung |
| Z. 443–530 | § 3.6 Auflagenkatalog · § 3.7 Anfang (OEM/Backend) |
| Z. 532–626 | § 3.7 Rest (Widerspruch · belegte Zahlen · ⭐-Regel W-A↔W-B) |
| Z. 626–724 | § 3.8 B-1/B-2 inkl. Formulierungsvorschlag |
| Z. 724–790 | § 4 Deutsches Recht (Nr. 1–5) |
| Z. 1249–1310 | § 9 Offene Posten O-1…O-12 + Nebenbefunde N-1…N-5 |
| Z. 1330–1358 | § 10 Ausschnitt (einfache Sprache) |

**Nicht gelesen** (und daher kein Negativ von mir über diese Räume):
Z. 121–372 (§ 2 Fassungsidentität, § 3.1–3.3), Z. 787–884 (§ 5 Klärweg),
Z. 885–1248 (Teil 2 MCP), Z. 1358–1454 (§ 11 Prüferlauf).

**Weiter gelesen:**
- `handel/angebotsarchitektur.md` @`a57977a` Z. 1354–1760 am Stück (§ 6a
  vollständig) + die genannten Diff-Hunks; Vergleichsstand `88ad1bf` (Parent).
- `handel/preismodell-optionen.md` @`4b84693` Z. 615–712 am Stück
  (§ 5.3-Nachtrag), zusätzlich Einzelzeilen 421 und 644.
- `handel/preisliste-vorlaeufig.md` @`a57977a` Z. 1040–1100 am Stück,
  zusätzlich Einzelzeilen 68 und 359.
- `protokolle/tagesplan-2026-08-13.md` Z. 1920–2029 (Prompt R15-B vollständig,
  selbst gelesen — nicht aus der Auftragszusammenfassung gearbeitet).

## Was ich NICHT prüfen konnte („nicht prüfbar" — nicht zu „unauffällig" geglättet)

1. **`quellen-n8n-lizenz/README.md` habe ich nur GEGREPPT** (Trefferzeilen
   23, 42, 52–57, 135), nicht am Stück gelesen. Die SHA-256-Werte habe ich
   deshalb **unabhängig selbst gemessen** (s. K-D) statt der README zu
   glauben. Ein Kontext-Negativ über diese Datei trage ich nicht.
2. **`protokolle/R15-B-abschluss.md` existiert am Prüfstand nicht** (auch
   nicht im Arbeitsbaum, Stand meiner Messung). Ob die Nebenbefunde des
   Abschnitts (Zählfehler im Rohbeleg, EE-Datei-Frage) über die
   Abschlussmeldung tatsächlich geroutet werden, ist **nicht feststellbar**.
   Nach CLAUDE.md Regel 3a gilt R15-B damit als **LAUFEND**.
3. **Kein Renderer gelaufen.** Ich habe die Markdown-Struktur mechanisch
   geprüft (Spaltenzahlen je Tabelle, Blockquote-Nähte, Löschungszählung).
   „Rendert korrekt" behaupte ich damit nicht — nur „strukturell konsistent".
4. **Keine Aussage zur heutigen n8n-Rechtslage.** Ich habe geprüft, dass der
   Rohbeleg-Arbeitsbaum inhaltlich == `4fa530b` ist (Differenz nur CRLF/LF;
   `git diff 4fa530b -- <datei>` leer). Ob n8n seine FAQ seit dem 13.08.
   geändert hat, ist **nicht erhoben**.
5. **Belegstufe meiner eigenen Rechtsaussagen: keine.** Wo ich unten sage,
   eine Klausel greife zu kurz, ist das eine Prüfer-Folgerung, keine
   Rechtsauskunft.

---

# Befunde

## F-1 · **schwer** · Der Vorbehalt „alle Stufe E" ist auf dem Weg in § 6a verlorengegangen — zugunsten der eigenen Aussage

**Fundstelle:** § 6a.1, Tabelle der vier Auflagen (Spaltenkopf) und
§ 6a.1, „Zwei Belegstufen-Grenzen", Punkt 1.

**Behauptung im Dokument:** Der Spaltenkopf lautet
„**Woran sie hängt (Belegstufe des Rohbelegs)**", die Zellen tragen
„L-1 „your own" (**Stufe A**, Lizenztext)", „FAQ … (**Stufe B**)",
„Klausel **`### Notices`** (**Stufe A**, Lizenztext)". Grenze 1 sagt:
„Die **Auslegung** aller vier Auflagen ist im Rohbeleg **Stufe E**
(„Keine Rechtsberatung")".

**Gegenbeleg:** Der Rohbeleg stuft **die Auflagen selbst** ein, nicht nur
ihre Auslegung — § 3.6, Einleitungssatz (Z. 445–446 @`4fa530b`, von mir
mechanisch bestätigt): „Sie gilt unter drei Gestaltungsauflagen
(**alle Stufe E**, jede an eine zitierte Klausel gebunden)." Die
Spalte, die § 6a kopiert, heißt im Rohbeleg schlicht „**Woran sie hängt**" —
die A/B-Angaben sind dort die *Ankerklausel*, ausdrücklich **nicht** die
Belegstufe der Auflage.
Auch die **Zwischenquelle hat es richtig**: `handel/preismodell-optionen.md`
§ 5.3-Nachtrag @`4b84693` (Z. 675 f.) schreibt „**Vier Auflagen**, unter
denen „A3 trägt" gilt (Quelle § 3.6, **Belegstufe E**, je an eine zitierte
Klausel gebunden)".
§ 6a ist damit **das erste Dokument der Kette, das den Vorbehalt verliert** —
und es verliert ihn in Richtung der stärkeren eigenen Position (A/B liest
sich als Vertragstext, E als Auslegung). Die Zuschreibung des E an § 0.2
(„Keine Rechtsberatung") ist zusätzlich eine *andere, schwächere* Fundstelle
als die, die den Satz trägt.

**Warum das teuer ist:** § 6a ist erklärtermaßen die Grundlage für
Angebots- und Vertragsbausteine. Ein Leser, der die Tabelle für die
Belegstufe hält, hält AU-1 und AU-4 für lizenztextfest. Sie sind es nach
der eigenen Quelle nicht.

**Reparatur:** Spaltenkopf zurück auf „**Woran sie hängt (Ankerklausel)**";
über der Tabelle ein eigener Satz: „**Die Auflagen selbst sind im Rohbeleg
durchgehend Stufe E** (§ 3.6 Einleitungssatz, wörtlich: „alle Stufe E, jede
an eine zitierte Klausel gebunden"); die A/B-Angaben der rechten Spalte
benennen die Klausel, an der sie hängen, **nicht** ihre eigene Belegstufe."
Grenze 1 entsprechend auf den § 3.6-Satz umhängen (§ 0.2 zusätzlich, nicht
statt).

**Ursachen-Diagnose (getrennt vom Befund):** Nicht Nachlässigkeit beim
Zitat — die Zellen sind byte-treu kopiert (s. K-E, 22/22). Der Verlust
entsteht an der **Spaltenüberschrift**, also an der Stelle, die beim
Kopieren einer Tabelle umformuliert wird, während die Zellen unangetastet
bleiben. Das ist die Klasse „Verdichten verliert den Vorbehalt", hier in der
Sonderform **Tabellen-Kopfzeile: die Zellen sind das Zitat, der Kopf ist die
eigene Behauptung darüber.**
**Klasse rückwirkend angewandt** — ich habe alle sieben Tabellen des § 6a
auf denselben Fehler geprüft (Kopfzeile behauptet mehr als die Zellen
tragen): § 6a.2 („Wovon sie etwas verlangt"), § 6a.3 („Anforderung"),
§ 6a.4 („Beleg"), § 6a.5 („Besonderheit dieser Form"), § 6a.7 („Fassung
steht in", „Stand"), § 6a.8 („Zielort"). **Ein weiterer Treffer: § 6a.7,
Spalte „Fassung steht in" → F-4.**

---

## F-2 · **schwer** · „Die einzige Pflicht, die den KUNDEN trifft" ist durch den Rohbeleg widerlegt — und VK-O2 fehlt deshalb eine Klausel

**Fundstelle:** Überschrift § 6a.6 („O-2 als Vertragsklausel (**VK-O2**) —
**die einzige Pflicht, die den KUNDEN trifft**"), der ⚠️-Kasten darunter
(„Es gibt **genau EINE** Kundenpflicht"; „vier Auflagen an **UNS** plus eine
Kundenpflicht") und der Absatz „Zwei Eigenschaften dieser Klausel"
(„die **einzige** der fünf Bedingungen, die nach der Übergabe fortwirkt",
„die **einzige**, deren Verletzung wir nicht selbst verhindern können").

**Gegenbeleg (Rohbeleg § 3.4, Z. 394–402 @`4fa530b`, wörtlich, dort
ausdrücklich **(Stufe A)** ausgewiesen):**
„⚠️ **Zwei Auflagen, die aus L-3 folgen und in einem Übergabemodell leicht
untergehen (Stufe A):** **Der Kunde — und wir beim Aufsetzen — dürfen**
„licensing, copyright, or other notices" nicht entfernen oder verdecken.
**Kein Rebranding der n8n-Oberfläche, kein Entfernen von Hinweisen** …
→ **Betriebsregel O-1 in § 7.**"
Bestätigt durch § 9, Posten **O-1** (Z. 1255): „Betriebsregel festhalten:
kein White-Labeling/Entfernen von n8n-Hinweisen **in einem
Kunden-Eigentums-Modell** (AU-3)". Beide Fundstellen mechanisch bestätigt.

**Damit fallen alle drei Superlative:**
- AU-3 trifft **auch den Kunden**, nicht nur uns → „vier Auflagen an UNS"
  ist falsch, „genau EINE Kundenpflicht" ist falsch.
- AU-3 **wirkt nach der Übergabe fort** — im A3-Modell gehört die Instanz
  dem Kunden, er ist es, der Hinweise entfernen könnte.
- Seine Verletzung **können wir ebenso wenig selbst verhindern** wie die
  von O-2. Der Rohbeleg sagt genau das voraus: „in einem Übergabemodell
  **leicht untergehen**".

**Sachfolge, nicht nur Formfehler:** `VK-O2` regelt in (2) nur die Öffnung
gegenüber Gästen. Eine Pflicht des Kunden, **n8n-Hinweise nicht zu entfernen
oder zu verdecken**, enthält der Klauselentwurf **nicht** — obwohl das im
Kunden-Eigentums-Modell die zweite fortwirkende, von uns nicht beherrschbare
Kundenpflicht ist. **Der Klauselentwurf ist unvollständig, nicht nur seine
Überschrift.**

**Reparatur:** (a) Superlative streichen — **nicht abschwächen**, streichen:
Überschrift auf „§ 6a.6 O-2 als Vertragsklausel (**VK-O2**)"; im ⚠️-Kasten
nur noch die Zählklarstellung, die trägt (O-2 ist **eine fünfte Bedingung**
neben AU-1…AU-4; eine „erste bis vierte Kunden-Pflicht" gibt es nicht).
(b) VK-O2 um einen Absatz ergänzen: der Kunde entfernt/verdeckt keine
Lizenz-, Urheber- oder sonstigen Hinweise in der Umgebung — mit
Belegteilung nach WG-AU3 (Entfernen/Verdecken = A; Rebranding = B).
(c) In § 6a.2 die AU-3-Zeile um den Adressaten **Kunde** ergänzen; heute
nennt sie nur „Wording der Außentexte + Bau".

**Ursachen-Diagnose:** Die Session hat AU-3 vollständig über § 3.6 gelesen
(dort ist AU-3 an *uns* adressiert) und den Adressatenkreis nie an der
**Nachbar-Rubrik § 3.4** geprüft, wo derselbe Sachverhalt mit dem Zusatz
„Der Kunde — und wir" steht. Klasse: **„Ein präziser Quellverweis benennt,
wo man ANFÄNGT, nicht, wo man aufhört" (L-34)** — der Auftrag nannte § 3.6,
die entscheidende Erweiterung stand eine Rubrik davor.
**Klasse rückwirkend angewandt:** Ich habe für **jede** der vier Auflagen
gesucht, ob eine Nachbar-Rubrik den Adressatenkreis erweitert. AU-1: § 3.5
(Tabelle W-B) — keine Erweiterung. AU-2: § 3.5 Z. 417 — keine Erweiterung.
AU-4: § 3.6 Z. 464–469 — Pflicht bleibt bei uns. **AU-3 ist der einzige
Treffer**, dafür der teuerste.

---

## F-3 · **mittel** · Die einzige Positivkontrolle des Abschnitts ist falsch gezählt — und prüft die falsche Mechanik

**Fundstelle:** § 6a.1, „Zwei Belegstufen-Grenzen", Punkt 2, Zählweg-Klammer.

**Behauptung:** „Zählweg: `grep -n "vier Auflagen"` im Rohbeleg →
**0 Treffer**, Positivkontrolle `grep -n "AU-1"` → **1 Treffer** (Z. 450,
die Tabellenzeile), gemessen 14.08.2026 @`4fa530b`."

**Gegenbeleg (eigene Messung @`4fa530b`):**
- `grep -c "vier Auflagen"` → **0** ✔ (die Nullaussage **stimmt**, ich habe
  sie reproduziert).
- `grep -n "AU-1"` → **2 Trefferzeilen, 2 Treffer** (`grep -o … | wc -l`):
  **Z. 450** (Tabellenzeile) **und Z. 719** — „> Klärweg + Auflagen
  AU-1…AU-3:".
- Gegenprobe: AU-2 → 2, AU-3 → 4, AU-4 → 4 Trefferzeilen. Negativkontrolle
  des Musters: `AU-9` → 0.

**Das Peinliche daran:** **Z. 719 ist genau die Zeile, die § 6a keine 30
Zeilen weiter oben selbst zitiert** („Der Formulierungsvorschlag § 3.8 endet
mit „Klärweg + Auflagen AU-1…**AU-3**""). Das Dokument widerspricht sich in
sich selbst; der Zählweg kann so nicht gelaufen sein (plausibel: gezählt
wurde nur innerhalb § 3.6).

**Zweiter, unabhängiger Mangel:** Die Kontrolle spiegelt die **Suchmechanik
des Nulltreffers nicht**. Der Nulltreffer ist eine **Zwei-Wort-Phrase**; die
Kontrolle ist ein **Einzel-Token**. Ein Phrasen-Nulltreffer kann aus
Zeilenumbruch oder NBSP entstehen — genau das prüft `AU-1` nicht. Ich habe
die fehlende Kontrolle nachgeholt: `grep "drei Auflagen"` → **1 Treffer
(Z. 443)** (gleiche Phrasenmechanik, muss treffen) · zeilenübergreifende
Gegenprobe `tr '\n' ' ' | grep -o "vier *Auflagen"` → **0** · NBSP-Zählung
(U+00A0) im Rohbeleg → **0**. **Ergebnis: die Nullaussage hält auch unter
der schärferen Prüfung.** Nur ihre Kontrolle hielt nicht.

**Reparatur:** Zahl auf „**2 Treffer** (Z. 450 Tabellenzeile, Z. 719
Formulierungsvorschlag § 3.8)" korrigieren und als Kontrolle die
Phrasen-Variante `"drei Auflagen"` → 1 Treffer aufnehmen, plus die
zeilenübergreifende Gegenprobe. Suchraum im Satz nennen („ganzer Rohbeleg",
nicht § 3.6).

**Ursachen-Diagnose:** Klasse **„Die Kontrolle gehört pro MUSTER, nicht pro
LAUF" + „delegierte Zahlen ohne Zählweg"**. Der Nulltreffer war korrekt,
also fühlte sich der Lauf richtig an; die Kontrollzahl wurde nie
nachgerechnet, weil sie plausibel war (1 Tabellenzeile = 1 Treffer).
**Klasse rückwirkend angewandt:** Ich habe **jede** Zahl in § 6a
nachgemessen (s. K-D). Der zweite Zählweg des Abschnitts (B1-Zeile,
„`grep -n "Onboarding\|Lizenz"` → 0 Treffer für „Lizenz"") **hält**:
`handel/preismodell-optionen.md` Z. 421 @`4b84693` enthält „Lizenz" 0×,
Positivkontrolle „Credentials" 2×.

---

## F-4 · **mittel** · Der K-1-Zeiger zeigt auf den falschen Abschnitt

**Fundstelle:** § 6a.7, Einleitungsabsatz und Gate-Tabelle, Spalte „Fassung
steht in".

**Behauptung:** Der K-1-Anker existiere „… und in
`preisliste-vorlaeufig.md` **§ 5** (Tabellenzeile)".

**Gegenbeleg (@`a57977a`):** Die K-1-Tabellenzeile steht in
`handel/preisliste-vorlaeufig.md` **Z. 1095**, und die letzte Überschrift
davor ist **Z. 1048 `## 6. Was diese Liste NICHT entscheidet`** (innerhalb
des NACHTRAG-Kastens R14-A, Z. 1079). § 5 endet bei
„### 5.5 Gegenprobe der Zahlen" (Z. 997). Generisch erhoben (letzte
`#{1,4}`-Überschrift vor der Fundzeile), nicht über eine Namensliste.
Die beiden anderen K-1-Fundstellen der Datei (Z. 68, Z. 359) liegen
ebenfalls **nicht** in § 5, sondern in NACHTRAG-Kästen (R13-A bzw. R14-A).
In § 5 gibt es **keine** K-1-Fundstelle.

**Warum das mehr ist als ein Tippfehler:** § 6a.7 begründet ausdrücklich,
dass es K-1 **nicht zweitfasst**, sondern zeigt — „jede Zeile ist ein
**Zeiger** auf die Fassung, die anderswo steht". Ein Zeiger auf einen
Abschnitt, der die Fassung nicht enthält, ist die Doku-Hygiene-Regel formal
erfüllt und sachlich verfehlt: Wer der Anweisung folgt, findet nichts und
legt im Zweifel doch eine Zweitfassung an.

**Reparatur:** „`preisliste-vorlaeufig.md` § 6 („Was diese Liste NICHT
entscheidet"), NACHTRAG-Kasten R14-A vom 13.08. abends".

**Ursachen-Diagnose:** Der Auftragsprompt nannte die Fundstelle als reine
**Zeilennummer** (`preisliste-vorlaeufig.md:1095`); die Abschnittsangabe
musste die Session selbst erzeugen und hat sie geraten. Klasse: **„In
Doku-Verweisen keine Zeilennummern" — der Schaden entsteht nicht beim
Schreiber, sondern beim EMPFÄNGER, der die Zeilennummer in einen
Abschnittsbezug übersetzen muss.**
**Klasse rückwirkend angewandt:** Die beiden anderen Zeilen-Anker des
Prompts habe ich gegengeprüft: `preismodell-optionen.md:644` (K-1-Anker) →
**korrekt**, Z. 644 @`4b84693` trägt die K-1-Zeile; `preismodell-optionen.md`
Z. 694–702 (O-2-Zitat) → **korrekt**, Wortlaut deckungsgleich;
`angebotsarchitektur.md:215-221` (Kopfkasten) → **korrekt**. **1 von 4
Zeilen-Ankern falsch übersetzt.**

---

## F-5 · **mittel** · Kollision der neuen Kurz-IDs `G-1…G-4` mit vergebenen IDs im Repo

**Fundstelle:** § 6a.7, Gate-Kette (`G-1`, `G-2`, `G-3`, `G-4`).

**Gegenbeleg (@`a57977a`, Suchraum alle `*.md` des marketing-Repos, Muster
mit Wortgrenze `(^|[^A-Za-z])G-N([^0-9]|$)`):** `G-1…G-4` sind bereits als
**Prüfer-Befund-IDs der Schwere „gering"** vergeben (R02-A, R03-A, R04-A) —
und sie sind aus den Prüferprotokollen **in Arbeitsdokumente gewandert**:

| Datei | Fundstelle | Bedeutung dort |
|---|---|---|
| `beleg/baseline-messplan.md` | Z. 215, 220, 229, 293 | „Prüfer-Befund G-2 / G-3 / G-4 / G-1" — **ohne** Rundenpräfix |
| `beleg/vorlagen/interviewleitfaden-baseline.md` | Z. 184, 191 | „Prüfer-Befund G-3 / G-2" — **ohne** Rundenpräfix |
| `beleg/vorlagen/tagesblatt-firzlaffs.md` u. a. | Z. 105, 95, 110 | „R03-A G-2 / G-4" — **mit** Präfix |
| `protokolle/R02-A-…`, `R03-A-…`, `R04-A-pruefer.md` | je mehrfach | Befundnummern |

`handel/angebotsarchitektur.md` trug vor `a57977a` **0** Treffer auf
`G-[1-4]` (gemessen an `88ad1bf`) — die IDs sind also neu und kollidieren.
Die übrigen neuen IDs sind **sauber**: `ON-L`, `ON-L1…ON-L4`, `WP-AU2`,
`WG-AU3`, `VK-O2` kommen repo-weit ausschließlich in
`handel/angebotsarchitektur.md` vor.

⚠️ **Werkzeug-Offenlegung:** Mein **erster** Lauf zählte ohne Wortgrenze und
meldete `G-1` in 11 Dateien — er hatte `FG-1…FG-4` aus
`akquise/interessenabwaegung-o8.md` mitgezählt. Die Zahlen oben stammen aus
dem korrigierten Lauf; Werkzeug-Gegenprobe: „nur FG-1 hier" → 0 Treffer,
„FG-1 und G-1 test" → 1 Treffer.
**Positivkontrolle mit unabhängig bekannten Kollisionskandidaten** (gefordert
und erfüllt): `O-2` → 23 Dateien, `Z-6` → 22 Dateien, `O-11` → 8 Dateien —
alle drei tauchen im Lauf auf, das Muster kann also Kollisionen finden.

**Reparatur:** Namensraum trennen — z. B. `GA-1…GA-4` („Gate
Angebotsausgang") oder `G-A1…G-A4`; im selben Zug die vier Verweise in
§ 6a.2, § 6a.7 und im Kopfkasten-Nachtrag („Gate-Kette § 6a.7 (G-1 … G-4)")
nachziehen.

**Ursachen-Diagnose:** CLAUDE.md verlangt das Kollisions-Grep **vor** der
Vergabe. Die Klasse ist bekannt (L-35, dreifach belegt) und reproduziert
sich hier ein viertes Mal. Verschärfend: **Der billigste Suchraum wäre die
eigene Nachbardatei gewesen** — `beleg/baseline-messplan.md` führt G-1…G-4
ohne Präfix, ist also für jedes Grep sofort sichtbar.
**Klasse rückwirkend angewandt:** deshalb die generische Erhebung über die
ID-FORM statt über die Liste des Auftrags — sie hat genau die vier
Kollisionen gefunden und die sieben sauberen IDs bestätigt.

---

## F-6 · **mittel** · Die Entwarnung „byte-gleich belegt" gilt nur für EINE der beiden Dateien, die ON-L1 verlangt

**Fundstelle:** § 6a.4, ⚠️-Warnkasten zu ON-L2.

**Behauptung:** „**Für die heutige Instanzversion 2.10.4 ist die Fassung
byte-gleich belegt** — die dortige Tabelle führt `LICENSE-tag-2.10.4.md`
mit demselben Kurzwert `d2f621f59aa4c10e`."

**Gegenbeleg (eigene Messung, `sha256sum` im Arbeitsbaum
`heypensio/quellen-n8n-lizenz/`):**
- `n8n-repo-LICENSE.md` → `d2f621f59aa4c10e…` ✔
- `LICENSE-tag-2.10.4.md` → `d2f621f59aa4c10e…` ✔ (identisch, Aussage trägt)
- `n8n-repo-LICENSE_EE.md` → `6110c69fd3b92928…` ✔ (Kurzwert stimmt)
- **Eine Datei `LICENSE_EE-tag-2.10.4.md` existiert nicht** (vollständiges
  Verzeichnis-Listing, 27 Dateien). Die README führt `LICENSE_EE.md`
  ausschließlich vom `master`-Abruf 13.08.2026 (Z. 55).

**Der Satz sagt „die Fassung" im Singular in einem Kasten, dessen Gegenstand
(ON-L1) ausdrücklich BEIDE Dateien sind.** Die Fassungsidentität für
Version 2.10.4 ist für `LICENSE.md` belegt und für `LICENSE_EE.md`
**gar nicht erhoben** — nicht „nicht identisch", sondern **nicht gemessen**.
Der Kasten warnt korrekt vor künftigen Versionen und verdeckt dabei die
Lücke bei der heutigen.

**Reparatur — streichen und ersetzen, nicht abschwächen:** „**Für
`LICENSE.md` ist die Fassung der Instanzversion 2.10.4 byte-gleich belegt**
(`LICENSE-tag-2.10.4.md`, gleicher SHA-256 `d2f621f5…`). **Für
`LICENSE_EE.md` liegt kein versions-getaggter Abzug vor** — die
Fassungsidentität zur ausgelieferten Version ist dort **nicht erhoben**;
ON-L3 verlangt den Fassungsstand deshalb für beide Dateien als Pflichtfeld."

**Ursachen-Diagnose:** Klasse **„Eine Entlastungsaussage über eine PHASE
gilt nur für den Teil, an dem sie entstand"** — der Beleg entstand an
`LICENSE.md` (dort ist die Fassungsfalle im Rohbeleg § 2 ausführlich
behandelt) und wanderte auf das Paar. **Klasse rückwirkend angewandt:**
Ich habe § 6a auf weitere Aussagen geprüft, die für ein Paar/eine Menge
gelten, aber an einem Element erhoben wurden — **zweiter Treffer:**
Der ⚠️-Kasten „Offene Sachfrage zu ON-L1" benennt die EE-Lücke sachlich
korrekt (Community vs. Enterprise) und ist **richtig ausgewiesen**; er ist
kein Befund, sondern der Beleg, dass die Session die Frage kannte — was
F-6 verschärft, nicht entschuldigt.

---

## F-7 · **mittel** · „Keine neue Sperre dieser Session" widerspricht dem eigenen Absatz zwei Absätze darüber

**Fundstelle:** § 6a.7, Schluss-⚠️ („**Kein Gate ist heute erfüllt**; die
Kette sperrt also derzeit **jedes** A3-Kundenangebot. Das ist eine
Feststellung des Bestands, **keine neue Sperre dieser Session**.") gegen
den Einleitungsabsatz desselben Unterabschnitts („**Was fehlte, ist die
Stelle, an der er greift** … dieses Dokument führte bisher **keinen** Schritt
„Angebot geht hinaus". **Die Kette unten ist dieser Schritt**").

**Gegenbeleg:** Im Bestand ist **nur K-1** an das Ereignis „Angebot mit
A3-Architektur geht hinaus" gebunden (Kopfkasten Punkt 3 @`88ad1bf`,
Z. 215–221: „fällig ist sie aber genau hier"; `preismodell-optionen.md`
§ 5.3 @`4b84693` Z. 644: „fällig, bevor ein Kunden-Angebot mit
A3-Architektur hinausgeht"). **G-2 (K04/Z-5), G-3 (F-7) und G-4
(Architektur-Entscheid) existieren im Bestand als Vorbehalte — aber nicht
als Sperren am Angebotsausgang.** Ihre Verknüpfung zu einer Kette, die
„derzeit **jedes** A3-Kundenangebot sperrt", ist eine **Festlegung dieser
Session**. Die Session sagt das im Einleitungsabsatz selbst und dementiert
es im Schlusskasten.

**Reparatur:** Den Entlastungssatz **streichen** und ersetzen: „**Die vier
Vorbehalte sind Bestand; ihre Bündelung zu einer Sperre am Angebotsausgang
ist eine Festlegung dieser Session** — bisher trug nur K-1 diese Bindung
(Kopfkasten Punkt 3). Sie ist dem User/der Leitsession vorzulegen, weil sie
den Angebotsausgang faktisch bis F-7 und bis zum Architektur-Entscheid
verschiebt."

**Ursachen-Diagnose:** Klasse **„Der gefährlichste Satz ist die
ENTWARNUNG"**, hier in der Sonderform **Entwarnung über die eigene
Handlung**: Der Satz entlastet nicht die Sache, sondern die Session vom
Vorwurf, im Alleingang festgelegt zu haben (CLAUDE.md: „Betriebs-Festlegungen
mit Außenwirkung NIE im Alleingang festigen"). **Klasse rückwirkend
angewandt:** Ich habe § 6a nach weiteren „das ist nur Bestand / nur
Zeiger"-Sätzen gesucht — § 6a.7 („Er wird hier NICHT zweitgefasst") ist
**sachlich richtig** (VK-O2/K-1 legen keine Zweitfassung an, s. K-H) und
kein Befund; § 6a.8 („Kein Edit an Quellen") ist am Diff **bestätigt**
(nur eine Datei geändert).

---

## F-8 · **mittel** · „ON-L ist nicht an F-7 gebunden" gegen das eigene G-3

**Fundstelle:** § 6-Nachtrag (R15-B): „⚠️ Der Satz „sobald die Firmierung
steht" … gilt **nicht** für den Onboarding-Schritt selbst: **ON-L braucht
keine Firmierung und ist nicht an F-7 gebunden.**"

**Gegenbeleg:** § 6a.7, **G-3**, im selben Commit: „**Firmierung steht
(F-7)** — ohne sie gibt es keinen Außentext und **keine Vertragspartei**."
ON-L ist nach § 6a.4 Zielort 1 ausdrücklich „Bestandteil des
Onboarding-Teils **jedes** Pakets — **sonst ist die Leistung nicht
geschuldet**". Eine Leistung wird aus einem Vertrag geschuldet; ohne
Vertragspartei gibt es keinen Vertrag. Die beiden Sätze können nicht beide
uneingeschränkt gelten.

**Was trägt und was nicht:** Richtig ist, dass ON-L als **Prozessschritt**
keinen Firmennamen braucht — der Vermerk im Onboarding-Protokoll funktioniert
ohne. Falsch ist die unbeschränkte Form „**ist nicht an F-7 gebunden**".

**Reparatur:** „**ON-L braucht für seine Durchführung keine Firmierung** —
der Protokollvermerk funktioniert ohne sie. **Als geschuldete Leistung hängt
er wie jede andere am Vertrag und damit an F-7** (G-3); der
Firmierungs-Vorbehalt verzögert nicht den Schritt, wohl aber seine
vertragliche Verankerung."

**Ursachen-Diagnose:** Der Nachtrag im § 6-Kasten und § 6a.7 sind an
verschiedenen Stellen desselben Commits entstanden; die Geltungsgrenze
(„Durchführung" vs. „geschuldete Leistung") wurde nie explizit gezogen.
Klasse: **Selbstwiderspruch zwischen Nachtrag und Hauptteil desselben
Commits** — die Selbstwiderspruchs-Probe nach L-37 (Achse 2:
Statusaussagen/Bindungsaussagen) hätte ihn gefunden. **Klasse rückwirkend
angewandt:** Ich habe die vier weiteren F-7-/Firmierungs-Aussagen des
Commits geprüft (VK-O2 (2) und (3) Platzhalter, § 6a.3 WG-AU3 „Heute ist
hier nichts zu formulieren", § 6a.8 „Kein Außentext", G-3) — **alle vier
konsistent, kein weiterer Treffer.**

---

## F-9 · **mittel** · K-A: Posten **O-12** (Gewährleistungs-Asymmetrie) ist nirgends im MKT-Repo angekommen

**Fundstelle:** § 6a.8, Tabelle „Offen an andere Träger" — fünf Posten, O-12
ist keiner davon; und § 6a.6, Platzhalter (4) „Rechtsfolge bei Verstoß →
Z-1…Z-7".

**Gegenbeleg (Rohbeleg § 4 Nr. 5, Z. 1265 f. bzw. Z. 776–787 @`4fa530b`):**
„**Der Gewährleistungsausschluss der Lizenz deckt UNSEREN
Dienstleistungsvertrag nicht** … **In einem A3-Modell (Kunde = Eigentümer,
wir = Dienstleister) ist das ein eigener Punkt für den Kundenvertrag:
Verfügbarkeits- und Fehlerbehebungszusagen sollten nicht weiter reichen als
das, was ein Upstream ohne Gewährleistung ermöglicht.**" Als **Posten O-12**
geführt (§ 9, Z. 1266), Träger „Leitsession → **Vertragsstrang**".

**Warum das in § 6a gehört:** § 6a ist die Stelle, an der dieses Repo
Vertragsposten sammelt und nach Z-1…Z-7 routet — VK-O2 (4) tut genau das.
O-12 betrifft dieselbe Vertragsgestaltung und dieselbe Angebotsseite:
§ 6a.3 verlangt, dass die laufenden Posten „eine **Leistung** (Einrichtung,
Betrieb, Betreuung, **Support**)" benennen — also genau die Zusagen, deren
Reichweite O-12 begrenzt sehen will.

**Messung (Suchraum: alle `*.md` im marketing-Repo, Arbeitsbaum):**
`Gewährleistungs-Asymmetrie` → **0 Dateien**.
**Positivkontrolle im selben Lauf — bewusst mit den NACHBAR-Posten derselben
Quelle**, die denselben Weg genommen haben müssten:
`Lizenzserver-Ping` (O-11) → **7 Dateien** · `Telemetrie` (O-11) → **5** ·
`Expertenprogramm` (N-5) → **6** · `unlimited instances` (§ 3.7 ⭐-Regel) →
**4** · `Dienstleistungsentgelt` → **5**. Der Suchweg findet also alles
andere aus derselben Quelle. **O-12 ist der einzige Ausfall.**

**Ausdrücklich KEIN Befund** (geprüft und im Bestand gefunden, entgegen der
Prüfauftrags-Vermutung): **O-11** und **N-5** sind über R14-A bereits im
MKT-Repo (u. a. `handel/anwalts-briefing-2026-08.md`, `projektquelle-mkt.md`);
die ⭐-Regel aus § 3.7 („unlimited number of instances") steht in
`handel/preisliste-vorlaeufig.md` Z. 359 unter einer eigenen
NACHTRAG-Überschrift („`R40-N-6`: EIN Lizenzschlüssel gilt für „unlimited
instances""). **O-1** ist sachlich über WG-AU3 angekommen — mit der
Adressaten-Lücke aus F-2.

**Reparatur:** Sechste Zeile in § 6a.8: „**Gewährleistungs-Reichweite
(Rohbeleg O-12 / § 4 Nr. 5)** — Verfügbarkeits-/Fehlerbehebungszusagen des
eigenen Vertrags dürfen nicht weiter reichen als ein Upstream ohne
Gewährleistung; berührt die Support-Position aus § 6a.3 → **Z-1…Z-7**".

**Ursachen-Diagnose:** Der Auftrag nannte § 3.6/§ 3.7/§ 3.8/§ 9 als
Leseraum; § 4 („Deutsches Recht") stand **nicht** im Auftrag, und O-12
verweist per „§ 4 Nr. 5" genau dorthin. Klasse wieder **L-34** — der
Posten war in § 9 sichtbar, sein Gehalt aber nur eine Rubrik weiter.
**Klasse rückwirkend angewandt:** Ich habe alle zwölf O-Posten und alle
fünf N-Nebenbefunde einzeln gegen das MKT-Repo geprüft (Messung oben);
**O-12 ist der einzige mit 0 Treffern.**

---

## F-10 · **mittel** · Eine Verbots-Feststellung ohne Quelle im Satz — und eine mittelbare Paketierungs-Festlegung

**Fundstelle:** § 6a.5, Schluss-⚠️: „**Keiner der beiden Bausteine ist ein
kostenpflichtiges Zusatzmodul.** ON-L ist Bestandteil der Einführungsleistung
(S4-Sphäre, § 3), WP-AU2 ist eine Formvorgabe ohne eigene Position.
**Ein Paket, das die Lizenzübergabe als Upgrade führt, verstößt gegen die
Auflage** — strukturell dieselbe Grenze, die § 6 für die Übergabedoku zieht."

**Was trägt:** Die Analogie ist belegt — § 6 @`88ad1bf` Z. 1231:
„Übergabedoku darf in **keiner** Paketoption ein kostenpflichtiges …";
und „S4-Sphäre, § 3" ist korrekt (§ 3 Z. 546: „Einführungsleistung →
**S4-Sphäre**"). Beides von mir nachgemessen.

**Was nicht trägt:** „**verstößt gegen die Auflage**" ist eine
Rechtsfolgen-Feststellung. AU-4 verlangt, dass der Kunde die Bedingungen
bei jeder Einrichtung nachweislich bekommt; **dass ein entgeltliches
Führen desselben Schritts die Auflage verletzt, sagt der Rohbeleg nicht** —
das ist eine Folgerung dieser Session. Der Abschnitt markiert sonst
sorgfältig mit **④**; genau hier nicht. Zusätzlich ist die Zuordnung
„ON-L gehört in die S4-Sphäre, WP-AU2 bekommt keine eigene Position" eine
**Paketierungs-Festlegung mit mittelbarer Preiswirkung** — sie schließt
eine Gestaltungsoption aus, ohne sie E-6/E-7 vorzulegen.

**Reparatur:** „**④ Folgerung dieser Session:** Ein Paket, das die
Lizenzübergabe als kostenpflichtiges Upgrade führt, würde die Auflage
aushöhlen — der Rohbeleg sagt das nicht ausdrücklich; die Analogie ist die
Übergabedoku-Grenze aus § 6. **Die Zuordnung von ON-L zur S4-Sphäre ist ein
Vorschlag an E-6/E-7, kein Entscheid dieser Session.**"

**Ursachen-Diagnose:** Klasse **Spiegelbild der Entwarnung — die
Verbots-Behauptung**. Sie fühlt sich sicher an, weil sie streng ist, und
entgeht deshalb der Belegstufen-Prüfung, die jede *entlastende* Aussage
durchläuft. **Klasse rückwirkend angewandt** (Suche nach unbelegten
„verstößt/untersagt/lizenzwidrig/darf nie"-Sätzen in § 6a): weitere Treffer
in den Zeiger-Kästen an **P-A** („genau das untersagt AU-2" — trägt, AU-2
ist wörtlich belegt), **P-C** („eine Stufe ohne sie wäre **lizenzwidrig**")
und § 6a.5 („ON-L darf **nie** ein Stufenmerkmal sein"). Die
P-C-Formulierung „wäre lizenzwidrig" ist **dieselbe unmarkierte Folgerung**
und gehört mitrepariert.

---

## F-11 · **Hinweis** · Binnenverweis zeigt auf den falschen Unterabschnitt

**Fundstelle:** § 6a.2, Tabelle, Zeile AU-1, Spalte „Baustein hier":
„**kein Textbaustein — ein GATE** (**6a.6**, **G-2**)".

**Gegenbeleg:** `G-2` steht in **§ 6a.7** (Gate-Tabelle). § 6a.6 ist
„O-2 als Vertragsklausel (VK-O2)" und enthält kein Gate. Generisch erhoben
(Zuordnung jeder `G-2`-Fundstelle zur letzten `### 6a.`-Überschrift): zwei
Treffer in 6a.2 (beides Verweise), zwei in 6a.7 (die Fassung).
Die drei übrigen Baustein-Verweise derselben Tabelle sind **korrekt**
(WP-AU2 → 6a.3 ✔, WG-AU3 → 6a.3 ✔, ON-L → 6a.4 ✔).

**Reparatur:** „(6a.7, **G-2**)".

**Ursachen-Diagnose:** Der Verweis wurde vergeben, als die Gate-Kette noch
in 6a.6 geplant war; die spätere Einfügung von § 6a.6 (VK-O2) hat alle
Folgenummern verschoben, der Verweis wurde nicht nachgezogen. Klasse:
**Nummern-Verweise altern durch Einfügungen im selben Commit.**
**Klasse rückwirkend angewandt:** Alle 25 `6a.N`-Binnenverweise des
Abschnitts geprüft — **24 korrekt, 1 falsch (dieser).**

---

## F-12 · **Hinweis** · „Wörtlich weiter" über eine unmarkierte Auslassung hinweg

**Fundstelle:** § 6a.6, erster Absatz.

**Behauptung:** „… „Gäste lösen über Terminal/WebUI Workflows aus, die wir
gebaut haben; sie bauen nichts." **Wörtlich weiter:** „⚠️ Und das bleibt so,
solange der Kunde n8n nicht seinerseits seinen Gästen öffnet. …""

**Gegenbeleg (Rohbeleg § 3.7, Z. 518–524):** Zwischen beiden Zitaten steht
ein Satz, der **nicht markiert ausgelassen** wurde: „Auch unter A3 ändert
sich das nicht — dann *besitzt* der Kunde die Instanz, aber die **Gäste**
sehen weiterhin kein n8n." Beide Zitate selbst sind byte-treu (mechanisch
bestätigt), der ausgelassene Satz ebenfalls (mechanisch bestätigt).

**Schwere-Begründung:** Der ausgelassene Satz wirkt **zugunsten** der
eigenen Position („ändert sich nicht"); die Auslassung schwächt die eigene
Aussage also nicht auf. Deshalb Hinweis, nicht mittel. Formal bleibt es ein
Zitat, das mehr Kontinuität behauptet, als es hat — und ausgerechnet in
diesem Rohbeleg steht ein eigener Prüferbefund (F11) zu genau dieser Klasse.

**Reparatur:** „**Wörtlich weiter (ein Satz ausgelassen: „Auch unter A3
ändert sich das nicht …"):**" oder ein `[…]`.

**Ursachen-Diagnose:** Klasse **„Ein richtiges Zitat kann das Gegenteil
belegen — Quellzeile GANZ lesen"**, hier in der harmlosen Richtung.
**Klasse rückwirkend angewandt:** Alle als wörtlich gesetzten Rohbeleg-
Zitate des Abschnitts auf Auslassungen geprüft (22 Ankerzeichenketten,
s. K-E) — **dies ist die einzige unmarkierte Auslassung.**

---

## F-13 · **Hinweis** · Der K-1-Widerspruch wird mit drei statt vier Quellen wiedergegeben

**Fundstelle:** § 6a.7, G-1, Spalte „Stand": „**streitig, kein Termin** —
FAQ „usually yes", Vertriebsseite „regular Enterprise license", **Lizenztext
schweigt**".

**Gegenbeleg (Rohbeleg § 3.7, Tabelle Z. 537–542):** Der Widerspruch hat
**vier** Zeilen. Die **OEM-Doku** („This is available on **all paid plans**
under the standard license, with no separate agreement needed.") fehlt.
Das ist eine der beiden **einschränkenden** Quellen — der Widerspruch sieht
dadurch kleiner aus, als er ist. Zusätzlich fehlt der Halbsatz der
Zwischenquelle „**nicht vor dem nächsten Preisentscheid**"
(`preismodell-optionen.md` Z. 644 @`4b84693`), der den Geltungsbereich des
Gates nach unten begrenzt.

**Ausdrückliches Lob im selben Atemzug (bewährtes Muster, gehört in den
Debrief):** Der **Auftragsprompt selbst** schrieb „die Vertriebsseite „all
paid plans"" — das ist falsch, „all paid plans" steht in der OEM-Doku, „a
regular Enterprise license" auf der Vertriebsseite. **Die Session hat die
Prompt-Angabe nicht übernommen, sondern an der Quelle korrigiert.** Genau
das verlangt CLAUDE.md („auch die Sach-/Stack-Angabe im Prompt wird
gemessen"). Der Befund ist die Unvollständigkeit, nicht ein Fehler.

**Reparatur:** vierte Quelle ergänzen: „OEM-Doku „all paid plans"".

---

## F-14 · **Hinweis** · Richtige Aussage, falsche Fundstelle (OEM-Kippfall)

**Fundstelle:** § 6a.6, erster Absatz: „Kippt der Fall, wird er zum
**OEM**-Fall, für den n8n „a separate commercial agreement" verlangt
(**Rohbeleg § 3.7, Stufe B**)."

**Gegenbeleg:** § 3.7 sagt, dass es beim Backend-Fall bleibt, „solange der
Kunde n8n nicht seinerseits seinen Gästen öffnet" — es sagt **nicht**, dass
der Fall dann zum OEM-Fall wird. Dieser Satz steht in **§ 9, Posten O-2**
(Z. 1256): „… **sonst kippt der Backend-Fall in den OEM-Fall**" (und in der
Zwischenquelle Z. 696 f.). Die zitierte Wendung „a separate commercial
agreement" steht in der § 3.7-Tabelle (Z. 494) — die Fundstelle ist also
für den Zitatteil richtig und für die Kipp-Aussage falsch.

**Reparatur:** „(Rohbeleg § 9, Posten O-2; die Wendung „a separate
commercial agreement" aus der § 3.7-Tabelle)".

---

## F-15 · **Hinweis** · Einfügenaht im Kopfkasten ohne Leerzeile — der Nachtrag verschmilzt beim Rendern

**Fundstelle:** Kopfkasten Punkt 3, Einfügung „📌 R15-B, 14.08.2026".

**Gegenbeleg (am Diff):** Die neue Zeile folgt unmittelbar auf
„… kein Preislisten-Posten." ohne trennende `> >`-Leerzeile. In Markdown
bilden aufeinanderfolgende Blockquote-Zeilen ohne Leerzeile **einen
Absatz** — der R15-B-Nachtrag rendert als Fortsetzung des R14-A-Textes und
ist als eigener, späterer Eintrag nicht mehr erkennbar. Die drei
Zeiger-Kästen an P-A/P-B/P-C und der § 6-Nachtrag sind korrekt getrennt
(je Leerzeile bzw. `>` davor) — **1 von 5 Nähten betroffen.**

**Löschungs-Gegenprobe (K-I b):** `git diff --numstat` @`a57977a` →
**432 / 0**. **0 Löschungen bestätigt**, keine Überschrift und keine
Folgezeile wurde von einem Edit-Anker konsumiert.

**Reparatur:** eine `> >`-Leerzeile vor die 📌-Zeile.

---

## F-16 · **Hinweis** · Der ausgewiesene Lesestand war zum Commit-Zeitpunkt überholt, der vorgeschriebene Nachlauf-Check ist nicht ausgewiesen

**Fundstelle:** § 6a, Kopfkasten: „**Lesestand:** Repo-HEAD `4b84693`".

**Gegenbeleg:** Der Parent von `a57977a` ist **`88ad1bf`** — zwischen Lesen
und Commit ist ein fremder Commit gelandet. CLAUDE.md verlangt vor dem
Commit eines abgeleiteten Dokuments `git log <lesestand>..HEAD -- <quelldatei>`.
Das Dokument weist diesen Lauf nicht aus.

**Entwarnung MIT Quelle (ich habe den Lauf nachgeholt):** `88ad1bf` änderte
`STATUS.md`, `projektquelle-mkt.md` und `protokolle/tagesplan-2026-08-13.md`
— **keine** der von § 6a gelesenen Quellen. `preismodell-optionen.md` ist
@`4b84693` und @`a57977a` md5-identisch (`fa563f89…`), `git log
4b84693..a57977a -- handel/preismodell-optionen.md` → leer. Die
Tagesplan-Änderung hat den **R15-B-Prompt nicht berührt** (sie hängte
einen Nachführungs-Abschnitt bei Z. 1761 an). **Sachlich ist nichts
passiert; der Beleg fehlte nur.**

**Reparatur:** „**Lesestand:** `4b84693`; **Nachlauf-Check vor dem Commit:**
`git log 4b84693..HEAD -- handel/preismodell-optionen.md
handel/preisliste-vorlaeufig.md` → 0 Commits (`88ad1bf` betraf nur
Wahrheits-Kanal-Dateien)."

---

## F-17 · **Hinweis** · Verdacht, als eigene Ableitung nicht gekennzeichnet: Infrastruktur-Vertragspartner ≠ Lizenznehmer

**Fundstelle:** § 6a.2, Zeile AU-1: „Ist **heyPensio** Vertragspartner der
Infrastruktur, ist **der Kunde nicht Lizenznehmer** und AU-1 fällt aus".

**Gegenbeleg / Grund des Verdachts:** AU-1 verlangt im Rohbeleg-Wortlaut,
dass „die Instanz auf einem Vertrag/Konto läuft, **das ihm zurechenbar**
ist". „Zurechenbar" ist schwächer als „Vertragspartner", und **Lizenznehmer
der SUL ist, wer die Software nutzt** — nicht notwendig, wer die
Serverrechnung trägt (§ 3.5, Zeile „Wer ist Lizenznehmer („you", Stufe A)?"
unterscheidet nach dem Nutzer, nicht nach dem Infrastrukturvertrag). Der
Satz zieht aus einer offenen Vertragspartner-Frage eine **kategorische**
Rechtsfolge und trägt keine ④-Markierung, während der Abschnitt sonst
sorgfältig markiert.

**Status: Verdacht, nicht belegt.** Ich kann nicht belegen, dass die
Folgerung falsch IST — nur, dass sie im Rohbeleg so nicht steht und dass
§ 3.5 eine andere Anknüpfung nahelegt. Eine Rechtsaussage treffe ich nicht.

**Reparatur:** „**④ Folgerung dieser Session:** Läuft der
Infrastrukturvertrag auf heyPensio, ist zweifelhaft, ob die Instanz dem
Kunden „zurechenbar" ist; ob das die Lizenznehmer-Stellung berührt, ist
**offen** und gehört in die Vertragsprüfung Z-1…Z-7 bzw. zu K04/Z-5."

---

## F-18 · **Hinweis** · Der Rohbeleg widerspricht sich zur Belegstufe des Rebranding-Verbots — WG-AU3 gibt nur eine Seite weiter

**Fundstelle:** § 6a.3, WG-AU3: „Das **Entfernen/Verdecken** von Hinweisen
verbietet der **Lizenztext (A)**; das **Rebranding gegenüber Kunden** trägt
nur die **FAQ (B)**. … sie ist **nicht** durchgehend Stufe A."

**Gegenbeleg:** § 3.6 sagt genau das (und § 6a gibt es korrekt wieder).
**§ 3.4 desselben Rohbelegs sagt etwas anderes** (Z. 394–398, dort
ausdrücklich „**(Stufe A)**"): „Kein **Rebranding der n8n-Oberfläche**,
kein Entfernen von Hinweisen, kein „heyPensio-Automationsstudio"-Etikett auf
dem n8n-Editor." Beide Fundstellen mechanisch bestätigt.

**Richtungsbewertung:** § 6a hat die **konservativere** Variante gewählt
(B statt A) — das ist die sichere Richtung und kein „Verdichten zugunsten
der eigenen Aussage". Der Befund ist, dass ein **Rohbeleg-interner
Widerspruch weitergereicht wird, ohne ihn zu benennen**, obwohl der
Abschnitt zwei andere Zählfehler desselben Papiers ausdrücklich als
Nebenbefund meldet.

**Reparatur:** In WG-AU3 ergänzen: „⚠️ **Der Rohbeleg ist hier nicht
einheitlich:** § 3.4 stuft das Rebranding-Verbot als **Stufe A** ein
(aus L-3), § 3.6 nur als **B**. WG-AU3 folgt der vorsichtigeren Fassung
(§ 3.6). **Dritte Fundstelle derselben Fehlklasse — mit an die
heypensio-Leitsession** (zu R14A-N-1)."

---

# Disposition mit Nenner (K-A … K-I)

| Kat. | Gegenstand | Ergebnis |
|---|---|---|
| **K-A** | Was ist aus der Quelle nicht angekommen? | **geprüft, 3 Befunde** (F-2, F-9, F-18); AU-1…AU-4 rückwärts Satz für Satz, plus Nachbar-Rubriken § 3.4, § 3.5, § 3.7, § 4, § 9, § 10 |
| **K-B** | Firmierungs-Behauptungen (F-7) | **geprüft, 1 Befund** (F-8). Gegenrichtung geprüft: **keine erfundene Firmierung** — beide Stellen tragen `<FIRMIERUNG — F-7 OFFEN, MKT-MARKE>` |
| **K-C** | Preis-/Höhen-Vorwegnahme | **geprüft, 1 Befund** (F-10, mittelbar). Auf der Zahlen-Achse **0 Befunde** |
| **K-D** | Zahlen und Zählwege | **geprüft, 1 Befund** (F-3). 4 von 5 Zählwegen halten |
| **K-E** | Zitattreue | **geprüft, 1 Befund** (F-12). 22 von 22 Ankerzeichenketten byte-treu bestätigt |
| **K-F** | Entwarnungen und Belegstufen | **geprüft, 4 Befunde** (F-1, F-6, F-7, F-16) |
| **K-G** | Vollständigkeit der Verankerung | **geprüft, 0 Befunde** |
| **K-H** | Dubletten / Kurz-ID-Kollisionen | **geprüft, 2 Befunde** (F-5, F-4). Zweitfassungs-Prüfung: **0 Befunde** |
| **K-I** | Struktur / Rendering | **geprüft, 1 Befund** (F-15); (a) 0 Befunde, (b) 0 Löschungen bestätigt, (c) **teilweise nicht prüfbar** |

**Summe: 18 Befunde — 2 schwer, 8 mittel, 8 Hinweis** (F-17 ausdrücklich als
*Verdacht, nicht belegt*). Kein Befund ist weggelassen worden.

### K-C im Einzelnen (Zahlen-Achse, 0 Befunde)
Suchraum § 6a (Z. 1375–1751 @`a57977a`), Muster
`[0-9]+ ?(€|EUR|%|Euro)` · `[0-9]+ (Tage|Wochen|Monate|Monaten|Stunden)` ·
`mindestens [0-9]` · `bis zum [0-9]` · `[0-9]{2}\.[0-9]{2}\.20[0-9]{2}`.
**Treffer ausschließlich Datumsangaben** (14.08.2026 ×4, 13.08.2026 ×2) —
alle Erhebungs-/Standdaten, keine Fristen. Vollständige Sichtung aller
Ziffernfolgen: nur Abschnittsnummern, Commit-Kurzhashes, SHA-256-Kurzwerte,
Version 2.10.4, Zeilennummern. **Die Zusage „keine Zahl, keine Höhe, keine
Frist neu erfunden" hält mechanisch.**
**Positivkontrolle des Musters:** dasselbe Muster trifft die vier
Datumsangaben — es kann also feuern.
**Was das NICHT sagt:** F-10 zeigt, dass eine Festlegung mit Preiswirkung
ohne eine einzige Zahl auskommen kann. Ein Zahlen-Negativ ist kein
Höhen-Negativ.

### K-G im Einzelnen (0 Befunde — am Text geprüft, nicht am Nenner-Satz)
Ich habe **nicht** § 6a.5 („3 von 3") geglaubt, sondern § 4 gelesen:
- Nenner generisch erhoben (`^### Option P-` → **3 Treffer**: P-A Z. 638,
  P-B Z. 662, P-C Z. 687). Gegenprobe auf eine vierte Form: `P-D` →
  **0 Fundstellen** im Repo außer einer Prüfer-Negativkontrolle in
  `R13-A-pruefer.md`. **Der Nenner 3 ist extern fixiert, nicht selbst
  gewählt.**
- Jede der drei Paketformen trägt einen eigenen Zeiger-Kasten, der **WP-AU2
  und ON-L namentlich** als „Bestandteil auch dieser Paketform" führt —
  **3 von 3, am Text**.
⚠️ **Einschränkung, die ich ausdrücklich stehen lasse:** Nach der
L-30-Prüffrage („könnte das Ergebnis anders ausfallen?") ist „3 von 3" hier
eine Aussage über **selbst erzeugte** Anker — sie kann nicht anders
ausfallen, weil dieselbe Session alle drei geschrieben hat. Das ist beim
Fertig-Kriterium *„verankern"* legitim (anders als bei einer Messung), aber
§ 6a.5 sollte es sagen, wie § 6a.2 es bei „4 von 4" vorbildlich tut
(„Die Zählung kann anders ausfallen"). **Kein eigener Befund, weil das
Fertig-Kriterium genau diese Selbst-Erzeugung verlangt hat.**

### K-H im Einzelnen (Zweitfassungs-Prüfung: 0 Befunde)
- **K-1:** § 6a.7 legt **keine** Zweitfassung an — die Gate-Zeile nennt die
  Bedingung und verweist auf `preismodell-optionen.md` § 5.3 (Fassung).
  Am Text bestätigt. *(Der Zeiger ist falsch adressiert → F-4, das ist ein
  anderer Befund als eine Dublette.)*
- **AU-Wortlaute:** § 6a.1 ist eine **Zweitfassung** der AU-Tabelle — aber
  mit **ausdrücklicher Vorrangklausel**: „Der Wortlaut unten ist deshalb
  ① GEMESSEN am Rohbeleg … § 3.6, Commit `4fa530b`", plus Begründung, warum
  die Zwischenquelle nicht genügt. **Zulässige Form (b) nach CLAUDE.md
  Doku-Hygiene.**
- **O-2:** § 6a.6 zitiert die Zwischenquelle mit Stand-Angabe und baut
  daraus eine Klausel — kein konkurrierender Regeltext.
- **ID-Sweep generisch** über die Form
  `\b(WP|WG|VK|ON|G|O|N|K|S|F|E|Z|B|AA|AU|P|R)-[A-Z]?[0-9]{1,2}\b`, Suchraum
  alle `*.md` @`a57977a`, **265 verschiedene IDs**; anschließend jede neue ID
  einzeln mit Wortgrenze nachgezählt. Ergebnis: **`G-1…G-4` kollidieren
  (F-5), 7 IDs sauber.**

### K-I im Einzelnen
- **(a) `|` im Fließtext:** **0 Befunde.** Alle **7** Tabellen des § 6a
  geprüft; Kontrolle ist die Trennzeile jeder Tabelle — jede Datenzeile
  trägt exakt dieselbe Pipe-Zahl wie ihre eigene `|---|`-Zeile
  (4/4/4/4/4, 5/5/5/5/5, 3/3/3/3/3/3, 4/4/4/4/4, 5/5/5/5, 5/5/5/5/5,
  4/4/4/4/4/4). Eine zerlegte Zeile wäre ein Ausreißer gewesen.
- **(b) Nähte / Löschungen:** **1 Befund (F-15).** `--numstat` → 432/0,
  **0 Löschungen mechanisch bestätigt**; 5 Einfügenähte einzeln gelesen,
  4 sauber.
- **(c) Verschachtelte Kästen rendern:** **nicht prüfbar** — ich habe die
  Blockquote-Tiefen gelesen (`>` / `> >` konsistent, jeweils mit
  Leerzeile eingeleitet außer bei F-15), aber **keinen Renderer laufen
  lassen**. „Strukturell konsistent" ja; „rendert" behaupte ich nicht.

---

# Positivkontrollen dieses Prüflaufs (je Negativ eine, Suchraum benannt)

| Negativ-Aussage | Suchraum | Positivkontrolle im selben Lauf |
|---|---|---|
| `"vier Auflagen"` → 0 im Rohbeleg | Rohbeleg @`4fa530b`, 1454 Z. | `"drei Auflagen"` → **1** (Z. 443) — gleiche Zwei-Wort-Phrasenmechanik; zusätzlich zeilenübergreifend `tr '\n' ' '` → 0 und NBSP-Zählung → 0 |
| „Gewährleistungs-Asymmetrie kommt im MKT-Repo nicht vor" | alle `*.md`, marketing-Repo | `Lizenzserver-Ping` → **7 Dateien**, `Expertenprogramm` → **6**, `unlimited instances` → **4**, `Dienstleistungsentgelt` → **5** — alles Nachbar-Posten derselben Quelle, alle treffen |
| „`ON-L*`, `WP-AU2`, `WG-AU3`, `VK-O2` kollidieren nicht" | alle `*.md` @`a57977a` | bekannte Doppelvergaben `O-2` → **23 Dateien**, `Z-6` → **22**, `O-11` → **8** tauchen im selben Lauf auf |
| „Zitate sind byte-treu" | Rohbeleg + Zwischenquelle + Eigendokument | **22 von 22** Ankerzeichenketten getroffen; Negativkontrolle „Der Kunde ist tatsächlich **Mieter**" → nicht getroffen |
| „keine Beträge/Fristen in § 6a" | § 6a Z. 1375–1751 | dasselbe Muster trifft die 4 Datumsangaben |
| „Rohbeleg-Arbeitsbaum == `4fa530b`" | heypensio-Repo | `git diff 4fa530b -- <datei>` leer + `git status` leer; md5-Abweichung allein durch CRLF/LF erklärt (Datei ist `with CRLF line terminators`) |
| SHA-256-Kurzwerte | `quellen-n8n-lizenz/` | **unabhängig selbst gemessen** (`sha256sum`), nicht aus der README übernommen: `d2f621f59aa4c10e`, `6110c69fd3b92928`, Tag-Datei identisch — **3 von 3 bestätigt** |

⚠️ **Offengelegter eigener Werkzeugfehler:** Mein erster ID-Sweep zählte
ohne Wortgrenze und meldete `FG-1…FG-4` als `G-1…G-4`. Aufgefallen, weil die
Trefferzahl (11 Dateien für eine brandneue ID) **nicht sein konnte** — die
Zahl lieferte eine erkennbare Unmöglichkeit. Alle F-5-Zahlen stammen aus dem
korrigierten Lauf mit dokumentierter Werkzeug-Gegenprobe.
⚠️ **Zweiter offengelegter Werkzeugfehler:** Mein automatischer
Zitat-Extraktor meldete zuerst 16, dann 19 „nicht gefundene" Zitate. Die
Analyse ergab **Normalisierungsfehler** (Blockquote-Präfixe mitten im Zitat,
deutsche Zitat-im-Zitat-Schachtelung, überlaufende `„…"`-Spannen über
Tabellenzellen) — also die MKT-R9-Klasse. Ich habe den Extraktor **nicht**
weiter repariert, sondern auf 22 handverlesene Ankerzeichenketten
umgestellt. **Was der Zitat-Lauf damit NICHT prüft:** Normbegriffe,
Belegstufen-Angaben und Rechtsfolgen im **Fließtext** neben den Zitaten —
genau dort sitzen F-1, F-2 und F-10, und sie wurden durch **Lesen**
gefunden, nicht durch das Werkzeug.

---

# Zusatzfragen

## 1. Welche Verfälschung hätte mein Verfahren NICHT gefangen?

**Eine falsche Rechtsfolge in korrekt zitiertem Kontext.** Mein
mechanischer Kanal prüft, ob ein Zitat in der Quelle steht, und mein
Lesekanal prüft, ob der Rahmen um das Zitat zur Quelle passt. Beides
versagt bei einer Aussage, die die Quelle korrekt wiedergibt und daraus
eine juristisch falsche Folge zieht — etwa: hätte VK-O2 (2) den Gästen
das bloße **Auslösen** von Workflows verboten (statt nur das Anlegen/
Bearbeiten und Hinterlegen eigener Credentials), wäre die Klausel gegen den
eigenen Geschäftszweck gerichtet und **jedes** meiner Prüfmittel wäre grün
geblieben: Die Zitate stimmen, die Belegstufen stimmen, keine Zahl bewegt
sich. Ich habe diese Achse nur durch Lesen abgedeckt und trage dafür keine
Belegstufe.

**Zweitens: eine Verfälschung im ungelesenen Teil des Rohbelegs.** Ich habe
§ 2, § 3.1–3.3, § 5 und Teil 2 (zusammen ~640 der 1454 Zeilen) **nicht**
gelesen. Behauptet § 6a irgendwo etwas, dessen Gegenbeleg dort steht, habe
ich es nicht. Namentlich die Belegkette L-1/L-2/L-3 (§ 3.2) und die vier
FAQ-Belege (§ 3.3) kenne ich nur aus Zweitverweisen — **F-1 und F-18 legen
nahe, dass genau dort weitere Belegstufen-Differenzen liegen könnten.**

**Drittens: eine schweigende Auslassung im § 6-Nachtrag.** Ich habe die
0 Löschungen mechanisch belegt, also *dass* nichts entfernt wurde. Ob der
Nachtrag alles benennt, was durch ihn überholt ist, ist eine
Vollzähligkeits-Frage; die habe ich nur für AU-2/AU-4 geprüft.

## 2. Hätte ich diese Funde auch ohne die Kategorien-Hinweise gefunden?

**Teils ja, teils nachweislich nein.**
- **Ohne Hinweis gefunden** (sie fielen beim Rückwärtslesen von selbst an):
  F-3 (die Zahl widersprach dem Dokument zwei Absätze weiter oben), F-11,
  F-12, F-15, F-16, F-4.
- **Nur durch den Kategorien-Hinweis gefunden:** **F-5.** Ohne die
  ausdrückliche Aufforderung, generisch über die ID-Form zu erheben *und
  eine Positivkontrolle mit bekannten Kollisionskandidaten mitzuführen*,
  hätte ich `G-1…G-4` für neu gehalten — sie sehen in ihrem Kontext
  vollkommen unauffällig aus. Der Hinweis „nimm `O-2`, `O-11`, `Z-6` als
  Kontrolle" hat außerdem meinen Wortgrenzen-Werkzeugfehler aufgedeckt.
- **Durch den Hinweis in die richtige Reihenfolge gebracht:** **F-1, F-2,
  F-9, F-18.** Die Anweisung „Rohbeleg **vor** Zwischenquelle" und „lies die
  **Nachbar-Rubriken**" hat den Fund erzwungen — F-2 hängt vollständig an
  § 3.4, einer Rubrik, die weder mein Auftrag noch der von R15-B nannte.
  Hätte ich nur § 3.6/§ 3.7 gelesen, wäre der schwerste Befund des Laufs
  ausgefallen. **Das ist zugleich die Bestätigung, dass L-34 die
  produktivste Regel dieses Prüflaufs war.**
- **Ehrlich zugestanden:** Die Kategorien haben mich auch **eingeengt**.
  Ich habe entlang K-A…K-I gearbeitet und keinen freien Gegen-Durchgang mit
  umgekehrter Frage („Was sagt § 6a, wonach niemand gefragt hat?")
  durchgeführt. Der stärkste Kandidat für einen solchen Durchgang wäre:
  **Was bedeutet es, dass § 6a die Gate-Kette faktisch zur Angebotssperre
  macht, während MKT-AKQ auf den ersten Abschluss bis Mitte November
  zuläuft?** Das ist eine Terminfrage, die keine meiner Kategorien stellt —
  s. Nachbemerkung.

## 3. Welche Prämisse meines Prüfauftrags habe ich ungeprüft übernommen?

**Drei, und ich habe zwei davon nachträglich geprüft:**

1. **„Der Bau ist ein einziger Commit `a57977a`."** — **Geprüft und
   bestätigt** (`git log`, `--numstat`: 432/0, eine Datei).
2. **„Rohbeleg-Stand `4fa530b`."** — **Geprüft und bestätigt**, inklusive
   der Frage, ob `4fa530b` überhaupt der neueste Stand der Datei ist
   (`git log -- <datei>`: ja, jüngster Commit).
3. **Ungeprüft übernommen: dass `handel/angebotsarchitektur.md` der
   richtige Ort für § 6a ist.** Mein Auftrag und der von R15-B setzen das
   voraus. Ich habe **nicht** gefragt, ob eine Vertragsklausel (VK-O2) und
   eine Onboarding-Prozessvorgabe (ON-L1…ON-L4) in ein Dokument gehören,
   dessen Kopfkasten „Vertragsarbeit" ausdrücklich als *nicht Teil dieses
   Dokuments* führt und nach Z-1…Z-7 verweist. § 6a legt damit
   Vertragstext in einem Dokument ab, das sich selbst für nicht zuständig
   erklärt — **das ist eine Zuschnitt-Frage für die Leitsession, kein
   Befund gegen R15-B**, weil der Auftrag es so verlangt hat. Ich weise es
   aus, statt es stillschweigend mitzutragen.

Eine vierte Prämisse habe ich **widerlegt** und entsprechend gehandelt: Der
Auftrag legte nahe, `O-11` und `Z-6` seien lediglich Kollisionskandidaten
für die ID-Prüfung. `O-11` ist zugleich ein **inhaltlicher** § 9-Posten,
und ich habe deshalb zusätzlich geprüft, ob sein Gehalt im MKT-Repo
angekommen ist — er ist es (s. F-9). Ohne diese Doppelnutzung wäre die
Aussage „O-12 ist der einzige Ausfall" nicht belegbar gewesen.

---

## Nachbemerkung an die Leitsession (außerhalb der Prüfkategorien)

**Zeitkritisch, deshalb hier und nicht nur in einer Fußnote:** Mit F-7 im
Blick sperrt § 6a.7 in seiner heutigen Fassung **jedes** A3-Kundenangebot,
bis vier Bedingungen erfüllt sind — darunter **F-7 (Firmierung)** und der
**Architektur-Entscheid**, die beide nicht bei MKT liegen. Das Projektziel
nennt den **ersten zahlenden Kunden bis Mitte November 2026**. Ob die
Gate-Kette in dieser Strenge gewollt ist, ist eine **User-Entscheidung**,
keine Redaktionsfrage — und sie sollte fallen, bevor die Kette als Regel im
Wahrheits-Kanal steht. **Ich habe nicht geprüft**, ob ein Angebot ohne
A3-Architektur (W-A) von der Kette unberührt bliebe; der Wortlaut legt es
nahe („Angebot **mit A3-Architektur**"), aber § 6a sagt es nicht ausdrücklich
— **eine Klarstellung dort wäre billig und würde die Terminfrage womöglich
ganz auflösen.**
