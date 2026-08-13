# Wellenprotokoll — Vorlage und Ausfüll-Disziplin

> **Was das hier ist:** Das **Werkzeug** zur Bau-Pflicht **B-6** aus
> `akquise/interessenabwaegung-o8.md` § 10 („Wellenprotokoll mit
> Fallgruppen-Anteil") und damit zugleich die Umsetzung des offenen
> Punktes **O-3** des Regelwerks („Nachvollziehbarkeit der Auswahl ohne
> gespeicherte Auswahlmerkmale"). Es trägt außerdem das
> **Abgleich-Journal** zur Sperrdatei (B-4-Werkzeug:
> `akquise/sperrdatei-struktur.md`).
>
> **Warum es existiert — nicht als Formalie:** Die Aufsicht verlangt
> die Abwägung „im konkreten Einzelfall"; ein „bloßes Abstellen auf
> abstrakte oder auf vergleichbare Fälle ohne Beachtung der
> Besonderheiten des Einzelfalls (das konkrete Werbevorhaben) genügt den
> Anforderungen der DS-GVO nicht" (DSK-OH Ziff. 1.3.1, ① A — zitiert
> nach `interessenabwaegung-o8.md` § 1.3). O-8 räumt dort selbst ein,
> dass es als Abwägung über eine **Gruppe** angreifbar bleibt, und
> benennt dieses Protokoll als **die Gegenmaßnahme**: „je Welle die
> konkreten Auswahlkriterien und Mengen dokumentieren, damit für jede
> Aussendung ein konkretes Vorhaben belegt ist."
>
> **Vorrangklausel: Bei Widerspruch gewinnt `akquise/listenbau-regelwerk.md`**
> (und bei Widerspruch zwischen Regelwerk und
> `handel/kanal-rechtsmatrix.md` die Rechtsmatrix, Regelwerk § 11).
>
> **Erstellt:** Freitag, 14.08.2026 (R15-E / Limejuice), Stand des
> Regelwerks beim Bau: Commit `4b84693`.

---

## ⛔ GATE — es darf noch keine Welle geben

Dieselben Gates wie in `akquise/sperrdatei-struktur.md` (dort § „GATE"
mit Begründung je Zeile): **F-7** (Firmierung) · **O-9** (Art. 6
Abs. 4, fällig vor dem ersten Datensatz) · **B-2** (elektronischer
Widerspruchsweg + Art.-24-TOM) · **O-6** (Werkzeugwahl). Dazu
**wellenspezifisch**:

| Gate | Woran es hängt |
|---|---|
| **Beileger-Text (B-7)** | Das berechtigte Interesse muss ausformuliert im Beileger stehen (Regelwerk § 3 Pflicht 1). **Nicht gebaut** — braucht Firmierung und den anwaltlichen Rat. Ohne ihn gibt es keine Textversion, die `WP-21` tragen könnte |
| **Widerspruchs-Kasten** | Art. 21 Abs. 4: Hinweis „in einer verständlichen und von anderen Informationen getrennten Form" (o8 § 7.2, ① A). Ebenfalls nicht gebaut |
| **Datenschutzinformation (D2 Pflicht 1)** | „Status: nicht gebaut" (Regelwerk § 3 Pflicht 1) |
| **VVT-Eintrag (D2 Pflicht 3)** | „Status: nicht gebaut" (Regelwerk § 3 Pflicht 3) |

> ⚠️ **Sprechende Platzhalter, keine Dummys.** `<<FIRMIERUNG — F-7
> OFFEN>>`, `<<BEILEGER-VERSION — TEXT NICHT GEBAUT>>`. Eine
> Versionsnummer wird **nie** vorab vergeben: Eine Version bezeichnet
> einen existierenden Text, sonst belegt das Protokoll etwas, das es
> nicht gibt.

---

## 1. Die tragende Ausfüll-Regel: das Protokoll entsteht VORHER

**Die Wellengröße wird vorab festgelegt und protokolliert** — das ist
in O-8 ausdrücklich „eine Auflage, kein Ist-Zustand" (§ 5.1, P-7; dort
mit der Korrektur Q-10 vom 12.08.2026, weil die Vorfassung eine
Prognose in Präsensform als Tatsache geführt hatte).

**Daraus die Betriebsform dieses Werkzeugs:**

| Zeitpunkt | Was ausgefüllt wird | Warum genau dann |
|---|---|---|
| **Vor der Auswahl** | Block A · Block B · `WP-10` (geplante Menge) | Ein nachträglich notiertes Auswahlkriterium belegt nichts — es beschreibt das Ergebnis |
| **Nach der Auswahl, vor dem Druck** | Block C · Block D (erster Abgleich) · Block F · Block G | Die Fallgruppen-Anteile und die Fristen stehen erst mit der Auswahl fest — `WP-26` ist das älteste `F-09` der Welle |
| **Vor **jedem** Druckauftrag** | Block D (weitere Zeile) | R-B6: vor jedem Versand **und** vor jedem Druckauftrag |
| **Vor der Freigabe** | Block E (Summenproben) · Block H | Die Proben sind die Freigabebedingung, nicht der Abschlussbericht — deshalb stehen sie in der Ausfüll-Vorlage (§ 12) **hinter** Block G und **vor** Block H |

> ⛔ **Ein Wellenprotokoll, das erst nach dem Versand entsteht, ist kein
> Wellenprotokoll.** Es belegt die Auflage aus P-7 gerade nicht. Wer
> eine Welle vorfindet, deren Block B nach dem Versanddatum
> geschrieben wurde, meldet das als Befund.

---

## 2. Block A — Wellenkopf

| # | Feld | Pflicht | Inhalt |
|---|---|---|---|
| **WP-01** | Wellen-ID | ✅ | `W-<jjjj>-<nn>`, fortlaufend |
| **WP-02** | Angelegt am / von | ✅ | Datum + Person. Belegt zusammen mit `WP-31` die Vorher-Reihenfolge aus § 1 |
| **WP-03** | Kanal | ✅ | `K1 Brief`. ⚠️ **Ein anderer Wert ist ein Stopp, kein Feldwert** — für K2 (Telefon) ist die Abwägung „hier nicht abschließend" geführt (o8 § 5.4, FG-5), E-Mail und LinkedIn-DM sind gesperrt (Regelwerk § 9 Nr. 1 und 2) |
| **WP-04** | Zweck der Welle, konkret | ✅ | Kein „Marketing". Der Zweck ist der aus `interessenabwaegung-o8.md` § 2.3 — abweicht er, ist die Abwägung neu zu führen (o8 § 11.3) |
| **WP-05** | Verantwortliche Person | ✅ | Wer die Freigabe in Block H erteilt |

---

## 3. Block B — Auswahlkriterien (aggregiert, ohne Personenbezug)

**Das ist der Kern von B-6 und die Antwort auf O-3.** Die
Auswahl-vor-Aufnahme-Regel des Regelwerks (§ 6.1, R-F1) verbietet, die
Auswahlmerkmale je Datensatz zu speichern — „gespeichert wird nur die
Tatsache der Aufnahme". Die Nachvollziehbarkeit entsteht deshalb
**hier**, auf Wellenebene.

| # | Feld | Pflicht | Inhalt |
|---|---|---|---|
| **WP-06** | Angewandte Auswahlkriterien | ✅ | Aggregierte Beschreibung. Musterform aus Regelwerk § 6.1: „Welle 1: inhabergeführte Hotels in NF/OH, keine Ketten" |
| **WP-07** | Gebietszuschnitt | ✅ | Kreise/Regionen nach Regelwerk § 8 |
| **WP-08** | Bewusste Ausschlüsse | ✅ | Was **nicht** hineinkam und warum (z. B. Ketten-/Konzern-/Franchise-Betriebe nach Positionierungspapier § 3.3) |
| **WP-09** | Herangezogene Quellen | ✅ | Quellenarten nach Regelwerk § 5.1 Ampel — **nicht** die Einzeladressen |

> ⛔ **Kein Personenbezug in Block B.** Keine Namen, keine Anschriften,
> keine Einzelbetriebe. Das Protokoll beschreibt die **Auswahl**, nicht
> die Ausgewählten — sonst baut es genau den Bestand wieder auf, den
> R-F1 verhindert.

> ⚠️ **R-Q1 mitprüfen (Rekonstruktionsgrenze, Regelwerk § 5.2):** Wenn
> `WP-09` faktisch auf **eine** Quelle hinausläuft und `WP-06` deren
> relevanten Ausschnitt beschreibt, ist die Grenze berührt — „auch
> dann, wenn er umsortiert". Das ist ein Stopp, keine Fußnote.

---

## 4. Block C — Mengen und Fallgruppen

| # | Feld | Pflicht | Inhalt |
|---|---|---|---|
| **WP-10** | Geplante Wellengröße | ✅ | **Vorab** festgelegt (§ 1). Die spätere Ist-Menge ersetzt sie nicht — beide bleiben stehen |
| **WP-11** | Kandidatenmenge (geprüfte Betriebe) | ✅ | Ausgangswert der Summenprobe |
| **WP-12** | Ausgesteuert · Quelle ⛔ (Regelwerk § 5.1) | ✅ | Zahl |
| **WP-13** | Ausgesteuert · Impressums-Werbewiderspruch (B-1) | ✅ | Zahl. ⭐ **Damit ist die offene Umsetzungsfrage aus Regelwerk § 7.1 beantwortet** — s. § 7 Nr. 1 |
| **WP-14** | Ausgesteuert · Sperrdatei-Treffer | ✅ | Summe aus Block D |
| **WP-15** | Ausgesteuert · Q-4 = `ungeprüft` | ✅ | Zahl. Regelwerk § 5.3: `ungeprüft` sperrt den Datensatz für den Versand |
| **WP-16** | Ausgesteuert · sonstige (mit Grund) | ✅ | Zahl + Gründe |
| **WP-17** | **Versandmenge (Ist)** | ✅ | Die tatsächlich angeschriebenen Adressen |
| **WP-18** | Anteil **FG-4** (inhabergeführt / benannte Person, Quelle Online-Impressum) | ✅ | Zahl **und** Prozent von `WP-17`. **Das ist das Maß des getragenen Risikos** (o8 § 5.4, FG-4) |
| **WP-19** | Anteil **FG-2** (Kapitalgesellschaft, kein Personenname, Quelle Impressum) | ✅ | Zahl und Prozent. ⭐ **Von der Quelle ebenfalls verlangt**, s. § 7 Nr. 2 |
| **WP-20** | Anteile **FG-1** und **FG-3** | ✅ | Zahl und Prozent je Gruppe — nötig für die Summenprobe |
| **WP-20a** | Anteile **FG-5** / **FG-6** | ✅ | **Sollwert: 0.** FG-5 ist Telefon, FG-6 ist E-Mail/LinkedIn-DM. Ein Wert > 0 im Kanal K1 ist ein Einordnungsfehler oder ein Kanalverstoß — in beiden Fällen ein Stopp |
| **WP-20b** | davon Erst-Disposition nach **O-2b** | 🔶 | Zahl der nie kontaktierten Datensätze, die mit dieser Welle disponiert werden (Regelwerk § 7.4: Disposition binnen 3 Monaten ab Aufnahme, einmal um 3 Monate verlängerbar, „kein Datensatz verfällt ohne Disposition") |

---

## 5. Block D — Abgleich-Journal (Sperrdatei)

**R-B6 (Regelwerk § 7.3):** Abgleich „**Vor jedem Versand** und **vor
jedem Druckauftrag** … Der Abgleich wird protokolliert (Datum, Welle,
Zahl der aussortierten Einträge) — ein Abgleich ohne Protokoll ist
später nicht belegbar."

⭐ **Deshalb mehrzeilig, nicht ein Feld.** Eine Welle kann mehrere
Druckaufträge haben (Nachdruck, geteilte Auflage, korrigierte Charge);
ein Abgleich am Wellenanfang deckt einen späteren Druckauftrag nicht.
Siehe § 7 Nr. 3.

| Lfd. | Anlass | Datum | Abgeglichene Menge | Treffer (ausgesteuert) | Sperrdatei-Stand | Wer |
|---|---|---|---|---|---|---|
| 1 | `Wellenfreigabe` / `Druckauftrag <n>` / `Versand <n>` | | | | letzte `SP-01` im Bestand | |
| 2 | | | | | | |
| … | | | | | | |

**Regeln zum Journal:**

- **Ein Abgleich mit null Treffern wird genauso eingetragen** wie einer
  mit Treffern. Eine fehlende Zeile ist ununterscheidbar von einem
  unterlassenen Abgleich.
- Die Spalte **Sperrdatei-Stand** (höchste vergebene `SP-01`) macht
  nachprüfbar, gegen **welchen** Bestand abgeglichen wurde. Ohne sie
  ist „abgeglichen" eine Behauptung ohne Bezugsgröße.
- **`WP-14` ist die Summe der Treffer-Spalte** — nicht der Wert der
  ersten Zeile.
- Neue Sperreinträge zwischen zwei Druckaufträgen sind der Regelfall,
  nicht die Ausnahme: „Nach einem Widerspruch dürfen keine neuen
  Druckaufträge mehr starten" (Regelwerk § 3 Pflicht 2, nach A7).

---

## 6. Block E — Die Summenprobe (Freigabebedingung)

**Ohne aufgehende Probe keine Freigabe.** Die Probe ist so gebaut, dass
ein Fehler ein **unmögliches** Ergebnis liefert, nicht ein knapp
danebenliegendes.

### Probe 1 · Mengen, ohne Rest

```text
WP-11  Kandidatenmenge
 −  WP-12  Quelle ⛔
 −  WP-13  Impressums-Werbewiderspruch (B-1)
 −  WP-14  Sperrdatei-Treffer
 −  WP-15  Q-4 ungeprüft
 −  WP-16  sonstige
 =  WP-17  Versandmenge (Ist)          →  Rest muss exakt 0 sein
```

### Probe 2 · Fallgruppen, ohne Rest

```text
WP-20 (FG-1) + WP-19 (FG-2) + WP-20 (FG-3) + WP-18 (FG-4)
 + WP-20a (FG-5 + FG-6, Sollwert 0)
 =  WP-17  Versandmenge (Ist)          →  Rest muss exakt 0 sein
```

### Probe 3 · Journal

```text
Summe der Treffer-Spalte in Block D  =  WP-14      → identisch
Zahl der Zeilen in Block D           ≥  Zahl der Druckaufträge + 1
```

> ⚠️ **Warum drei Proben und nicht eine:** Probe 1 misst den Weg von
> der Kandidaten- zur Versandmenge, Probe 2 denselben Endwert über ein
> **unabhängiges** Strukturmerkmal (die Fallgruppen-Einordnung). Beide
> müssen auf dieselbe Zahl `WP-17` laufen. Stimmt eine und die andere
> nicht, ist die Einordnung falsch — was eine einzelne Probe nie
> zeigen würde.

**Geht eine Probe nicht auf:** Welle **nicht freigeben**. Der Rest wird
gesucht, nicht ausgeglichen. Eine Korrektur „damit es aufgeht" ist
genau der Fehler, den die Probe finden soll.

---

## 7. Block F — Textversionen (B-5)

**B-5 verlangt die Versionierung der Informationstexte:** „Der
Art.-14-Beileger **und der Widerspruchs-Kasten** bekommen eine
Versionsnummer; je Welle wird protokolliert, welche Version an welche
Adressen ging — ‚revisionsfeste Dokumentation der tatsächlich genutzten
Texte mit Versionsnummer'" (DSK Ziff. 2.1, ① A — zitiert nach
Regelwerk § 3 Pflicht 1, dieses nach `interessenabwaegung-o8.md` § 10
B-5).

⭐ **Das sind ZWEI Texte, also zwei Versionsfelder** — siehe § 7 Nr. 4.

| # | Feld | Pflicht | Inhalt |
|---|---|---|---|
| **WP-21** | Version **Art.-14-Beileger** | ✅ | Schema `v<n>-<jjjj-mm-tt>` (Kanon-Versionsschema, Baustein `freigabe-vorlagen`). Heute: `<<BEILEGER-VERSION — TEXT NICHT GEBAUT>>` |
| **WP-22** | Version **Widerspruchs-Kasten** (Art. 21 Abs. 4) | ✅ | dito. Heute: `<<WIDERSPRUCHS-KASTEN — TEXT NICHT GEBAUT>>` |
| **WP-23** | Gingen beide an **alle** Adressen der Welle? | ✅ | `ja` / `nein`. Bei `nein`: Aufteilung je Version mit Menge — B-5 verlangt „welche Version an **welche Adressen**" |
| **WP-24** | Trennung von Information und Werbetext geprüft | ✅ | `ja` / `nein`. Trennungsgebot: Information und Werbetext sind „klar voneinander zu trennen und die Information deutlich herauszustellen" (Regelwerk § 3 Pflicht 1, nach Rechtsmatrix C4); Art. 21 Abs. 4 verlangt „von anderen Informationen getrennte Form" |
| **WP-25** | Ablage-Referenz der tatsächlich gedruckten Fassung | ✅ | „revisionsfest" heißt: die versandte Fassung ist archiviert, nicht nur ihre Nummer |

---

## 8. Block G — Fristen

| # | Feld | Pflicht | Inhalt |
|---|---|---|---|
| **WP-26** | Frühestes `F-09` der Welle | ✅ | Aufnahmedatum des ältesten Datensatzes — **startet die Art.-14-Monatsuhr** (Regelwerk § 6, F-09) |
| **WP-27** | Geplantes Versanddatum | ✅ | |
| **WP-28** | **R-B1-Probe:** `WP-27 − WP-26 ≤ 28 Tage`? | ✅ | `erfüllt` / `nicht erfüllt`. R-B1: „Es wird **nicht auf Vorrat gelistet.** Eine Welle wird nur angelegt, wenn ihr Versand **innerhalb von vier Wochen** nach dem frühesten F-09 der Welle vorgesehen ist" |
| **WP-29** | Bei `nicht erfüllt`: gewählter Weg | 🔶 | Genau einer der beiden aus R-B2: `zeitnah kontaktieren` **oder** `unmittelbar nach dem Listenaufbau separat informieren`. ⛔ **„Abwarten" existiert nicht** — „Ein dritter Weg — abwarten — existiert nicht" |
| **WP-30** | Art.-14-Information erfolgt am / wie | ✅ | Nach R-B3 ist maßgeblich, „**was zuerst eintritt**": längstens ein Monat nach Erlangung (lit. a) bzw. spätestens zum Zeitpunkt der ersten Mitteilung (lit. b) |

> ⚠️ **Kein Ausweg über Art. 14 Abs. 5** (R-B4) — insbesondere nicht
> über lit. b („unverhältnismäßiger Aufwand"): „gerade nicht — weil
> ohnehin ein Anschreiben erfolgt und die Information ihm beigefügt
> werden kann". Ein Feld dafür existiert bewusst nicht.

---

## 9. Block H — Freigabe

| # | Feld | Pflicht | Inhalt |
|---|---|---|---|
| **WP-31** | Freigabe erteilt am / von | ✅ | Datum + Person. **Muss nach `WP-02` liegen** und nach allen Block-D-Zeilen |
| **WP-32** | Freigabe-Checkliste | ✅ | s. unten — **alle** Zeilen `ja`, sonst keine Freigabe |
| **WP-33** | Abweichungen / Befunde dieser Welle | 🔶 | Alles, was in den Blöcken auffiel; leer nur, wenn nichts auffiel |

**Freigabe-Checkliste (`WP-32`) — jede Zeile einzeln:**

```text
[ ] Alle Gates oben geschlossen (F-7 · O-9 · B-2 · O-6 · Beileger · Kasten · VVT)
[ ] Block B vor der Auswahl geschrieben (WP-02 < Auswahldatum)
[ ] Summenprobe 1 geht ohne Rest auf
[ ] Summenprobe 2 geht ohne Rest auf
[ ] Summenprobe 3 stimmt (Journal = WP-14, Zeilenzahl ausreichend)
[ ] WP-20a (FG-5 + FG-6) = 0
[ ] Sperrdatei-Abgleich für JEDEN Druckauftrag im Journal (Block D)
[ ] WP-21 und WP-22 tragen echte Versionen, keine Platzhalter
[ ] WP-28 erfüllt — oder WP-29 mit einem der zwei zulässigen Wege belegt
[ ] Kein Personenbezug in Block B
[ ] R-Q1 geprüft: die Welle rekonstruiert kein einzelnes Verzeichnis
```

> ⛔ **Eine Zeile mit `nein` ist kein Vorbehalt, sondern ein Stopp.**
> Die Checkliste kennt kein „mit Anmerkung freigegeben".

---

## 10. Vier Punkte, an denen diese Vorlage über den Regelwerks-Nachtrag hinausgeht

Beim Bau am Rohbeleg gegengelesen — jeweils **von der Quelle rückwärts**,
nicht vom Auftrag vorwärts. Alle vier sind in der Vorlage bereits
umgesetzt; die **Quellen** ändert diese Session nicht (Wahrheits-Kanal
bzw. fremder Scope) — sie sind als Nebenbefunde gemeldet.

1. **B-1-Aussteuerungen bekommen ein Feld (`WP-13`).** Regelwerk § 7.1
   lässt das ausdrücklich offen: „Ob das Prüfergebnis als eigenes
   Protokollfeld geführt wird, ist Umsetzungsfrage beim ersten
   Wellenbau." Diese Vorlage entscheidet die Umsetzungsfrage — ohne die
   Zahl geht die Summenprobe nicht auf, und eine ausgesteuerte Adresse
   wäre von einer nie geprüften nicht unterscheidbar.

2. ⭐ **Der FG-2-Anteil ist ebenfalls zu protokollieren (`WP-19`).**
   B-6 und der § 6.1-Nachtrag des Regelwerks nennen nur **FG-4**. Die
   FG-2-Zeile in `interessenabwaegung-o8.md` § 5.4 verlangt es aber
   ausdrücklich für ihre Fallgruppe: „Zulässig nur mit derselben
   Vorsicht wie FG-4: Q-2 = `Impressum` protokollieren, **Anteil im
   Wellenprotokoll ausweisen** (B-6)". Wer nur FG-4 ausweist, lässt
   **die zweite Impressums-Fallgruppe** unsichtbar — und genau der
   Impressums-Anteil ist das Maß des getragenen Risikos.

3. ⭐ **Das Abgleich-Journal ist mehrzeilig (Block D).** R-B6 nennt
   **zwei** Anlässe („vor jedem Versand **und** vor jedem
   Druckauftrag"); der § 6.1-Nachtrag verkürzt das zu einem einzelnen
   Pflichtfeld „**Datum** des Sperrdatei-Abgleichs" (Singular). Ein
   Einzelfeld kann eine Welle mit zwei Druckaufträgen nicht abbilden —
   und der zweite Druckauftrag ist genau der Fall, den die Regel
   „keine neuen Druckaufträge nach einem Widerspruch" adressiert.

4. ⭐ **Zwei Textversionen, nicht eine (`WP-21` + `WP-22`).** B-5
   nennt „**Der Art.-14-Beileger und der Widerspruchs-Kasten**"; der
   § 6.1-Nachtrag führt als Pflichtfeld nur „**Textversion**"
   (Singular). Das sind zwei getrennte Texte mit zwei Rechtsgrundlagen
   (Art. 14 bzw. Art. 21 Abs. 4) und — nach dem Trennungsgebot — auch
   in der Darstellung getrennt. Eine gemeinsame Versionsnummer würde
   verdecken, wenn nur einer der beiden geändert wurde.

> ⚠️ **Belegstufe dieser vier Punkte:** Sie sind **Lesarten der
> vorhandenen Quellen**, keine neuen Rechtsaussagen. Punkt 2 und 4
> stehen wörtlich in den Quellen und sind nur beim Verdichten
> abgefallen; Punkt 1 ist eine Quelle, die die Frage offen lässt und
> hier beantwortet wird; Punkt 3 ist eine Folgerung aus zwei Anlässen
> in einem Satz. **Keiner davon ändert eine Rechtsbewertung.**

---

## 11. Zuordnung der Bau-Pflichten B-1…B-7 zu den beiden Werkzeugen

**Zählweg:** Grundgesamtheit ist die Tabelle in
`akquise/interessenabwaegung-o8.md` § 10 — dort **acht** Zeilen
B-1…B-8, **B-8 ist ersatzlos gestrichen** (Prüferbefund Q-09,
12.08.2026). Nenner sind daher die **sieben aktiven Pflichten
B-1…B-7**, wie auch der Index-Kasten in Regelwerk § 3 zählt.

**Gemessen 14.08.2026 am Stand `4b84693`:**
`grep -c "^| \*\*B-[1-8]\*\*" akquise/interessenabwaegung-o8.md` = **8**.
Die stärkere Kontrolle ist die Auflistung statt der Summe — `grep -o`
auf dasselbe Muster gibt **B-1 · B-2 · B-3 · B-4 · B-5 · B-6 · B-7 ·
B-8**, lückenlos: eine fehlende Zeile wäre als Lücke sichtbar, eine
bloße Zahl „8" wäre es nicht. Positivkontrolle: das engere Muster
`^| \*\*B-8\*\* | ⛔ \*\*GESTRICHEN` trifft **1**× — die gestrichene
Zeile ist also im Zähler enthalten und wird bewusst abgezogen.
Gegenrichtung: `B-9` / `B-1[0-9]` = **0 Treffer**, der Nenner endet
tatsächlich bei 8.

| # | Pflicht | Werkzeug | Umfang |
|---|---|---|---|
| **B-1** | Impressums-Werbewiderspruch prüfen und aussteuern | Sperrdatei (`ANL-3`) + Wellenprotokoll (`WP-13`) | **teilweise** — die **Prüfpflicht** selbst bleibt im Regelwerk § 7.1 / § 9 Nr. 13. Offen: Zulässigkeit der `ANL-3`-Speicherung (Sperrdatei P-1, anwaltlicher Rat) |
| **B-2** | Elektronischer Widerspruchsweg + gekoppelte TOM-Pflicht | Sperrdatei (`SP-06`) | **teilweise** — erfasst wird der Eingangsweg. Der **Bau** von E-Mail-Weg und Art.-24-TOM ist **nicht hier**: Träger F-7 (Adresse) und MKT-OPS (TOM) |
| **B-3** | Individuelles Antwortschreiben auf jeden Widerspruch | Sperrdatei (`SP-11`…`SP-13`, § 4 Schritt 5) | **teilweise** — Nachweisfelder und Ablauf stehen. Der **Text** ist **nicht hier**: Träger F-7 |
| **B-4** | Löschwunsch ≠ Widerspruch (enger Sperrdatei-Fall) | Sperrdatei § 6 (`SP-14`) | ✅ **vollständig** — Abgrenzungsfrage, Ablauf, Klärungsfall, Unterblock |
| **B-5** | Versionierung der Informationstexte | Wellenprotokoll Block F (`WP-21`…`WP-25`) | **teilweise** — die Protokollierung je Welle steht. Die **Texte** und die Vergabe der ersten Versionsnummern sind **nicht hier**: Träger F-7 + anwaltlicher Rat |
| **B-6** | Wellenprotokoll mit Fallgruppen-Anteil | Wellenprotokoll (ganze Datei) | ✅ **vollständig** — inkl. der beiden Ergänzungen aus § 10 Nr. 2 und 3 |
| **B-7** | Berechtigtes Interesse im Brief ausformuliert | — | ⛔ **ausdrücklich NICHT hier.** Das ist der **Beileger-Text**; er ist dieser Session untersagt (F-7 offen, O-9 offen). Träger: MKT-AKQ nach dem anwaltlichen Rat |

**Summenprobe der Zuordnung:**

```text
vollständig in einem Werkzeug umgesetzt ....... 2   (B-4, B-6)
teilweise umgesetzt, Rest mit benanntem Träger  4   (B-1, B-2, B-3, B-5)
ausdrücklich "nicht hier" ..................... 1   (B-7)
                                              ----
                                                7   = Nenner   ✅ ohne Rest
```

> ⚠️ **Was diese 7 von 7 NICHT behauptet:** Sie zählt die **Zuordnung**
> der Pflichten zu Werkzeugen, nicht ihre **Erfüllung**. Erfüllt ist
> heute **keine** — alle Gates sind offen. Die Zahl beantwortet die
> Frage „ist jede Pflicht bedacht?", nicht „ist jede Pflicht
> gebaut?".

---

## 12. Ausfüll-Vorlage

**Kopiervorlage je Welle.** Die Reihenfolge der Blöcke ist die
Ausfüll-Reihenfolge aus § 1 — nicht umsortieren.

```text
════ BLOCK A · Wellenkopf ═══════════════ (vor der Auswahl)
WP-01 Wellen-ID ................. W-2026-__
WP-02 Angelegt am / von ......... ____.____.2026 · ______________
WP-03 Kanal ..................... K1 Brief        [anderer Wert = STOPP]
WP-04 Zweck, konkret ............ _______________________________
WP-05 Verantwortlich ............ _______________________________

════ BLOCK B · Auswahl ══════════════════ (vor der Auswahl)
WP-06 Auswahlkriterien (aggregiert, OHNE Personenbezug)
      _______________________________________________________
WP-07 Gebietszuschnitt .......... _______________________________
WP-08 Bewusste Ausschlüsse ...... _______________________________
WP-09 Quellenarten .............. _______________________________
      [ ] R-Q1 geprüft: kein Verzeichnis wird rekonstruiert

════ BLOCK C · Mengen ═══════════════════ (nach der Auswahl)
WP-10 Geplante Größe (vorab) .... ______
WP-11 Kandidatenmenge ........... ______
WP-12 − Quelle ⛔ ............... ______
WP-13 − Impressums-Widerspruch .. ______   (B-1)
WP-14 − Sperrdatei-Treffer ...... ______   (= Summe Block D)
WP-15 − Q-4 ungeprüft ........... ______
WP-16 − sonstige ................ ______   Gründe: ______________
WP-17 = Versandmenge (Ist) ...... ______
WP-18 davon FG-4 ................ ______ = ____ %
WP-19 davon FG-2 ................ ______ = ____ %
WP-20 davon FG-1 / FG-3 ......... ______ / ______
WP-20a davon FG-5 / FG-6 ........ ______ / ______   [Sollwert 0 / 0]
WP-20b davon O-2b-Erstdisposition ______

════ BLOCK D · Abgleich-Journal ═════════ (vor JEDEM Druck/Versand)
  Lfd · Anlass · Datum · Menge · Treffer · Sperrdatei-Stand · Wer
   1   · ________ · ____ · _____ · _______ · SPD-2026-___ · ______
   2   · ________ · ____ · _____ · _______ · SPD-2026-___ · ______

════ BLOCK F · Textversionen ════════════
WP-21 Beileger .................. <<BEILEGER-VERSION — TEXT NICHT GEBAUT>>
WP-22 Widerspruchs-Kasten ....... <<WIDERSPRUCHS-KASTEN — TEXT NICHT GEBAUT>>
WP-23 Beide an alle Adressen? ... ja / nein → Aufteilung: ___________
WP-24 Trennung geprüft .......... ja / nein
WP-25 Ablage gedruckte Fassung .. _______________________________

════ BLOCK G · Fristen ══════════════════
WP-26 Frühestes F-09 ............ ____.____.2026
WP-27 Geplanter Versand ......... ____.____.2026
WP-28 R-B1-Probe (≤ 28 Tage) .... erfüllt / nicht erfüllt
WP-29 Falls nicht: Weg .......... zeitnah kontaktieren /
                                  unmittelbar separat informieren
                                  [ein dritter Weg existiert nicht]
WP-30 Art.-14-Info am / wie ..... ____.____.2026 · ______________

════ BLOCK E · Summenproben ═════════════ (vor der Freigabe)
Probe 1  WP-11 − (WP-12+13+14+15+16) − WP-17 = ______   [muss 0 sein]
Probe 2  (FG-1+FG-2+FG-3+FG-4+FG-5+FG-6) − WP-17 = ______ [muss 0 sein]
Probe 3  Σ Treffer Block D = WP-14 ?  ja / nein
         Zeilen Block D ≥ Druckaufträge + 1 ?  ja / nein

════ BLOCK H · Freigabe ═════════════════
WP-31 Freigabe am / von ......... ____.____.2026 · ______________
WP-32 Checkliste (§ 9) .......... alle Zeilen ja?  ja / nein
WP-33 Abweichungen / Befunde .... _______________________________

Absender / Verantwortlicher im Brief: <<FIRMIERUNG — F-7 OFFEN>>
```

---

## 13. Bestand

| Welle | Status | Bemerkung |
|---|---|---|
| *(keine)* | — | **Es existiert noch keine Welle und kein Datensatz.** Die Gates oben sind offen |

> ⚠️ **Der leere Bestand ist ein Befund, kein Formfehler** — solange die
> Gates offen sind, **darf** es keine Welle geben. Wer hier später
> nichts findet, prüft zuerst die Gates, nicht die Sorgfalt.

---

## 14. Quellen und Belegstufen

**Diese Datei erhebt keine eigenen Primärquellen.**

| Herkunft | Was daraus kommt |
|---|---|
| `akquise/interessenabwaegung-o8.md` § 1.3 | Zweck des Protokolls („das konkrete Werbevorhaben"), DSK-OH Ziff. 1.3.1 |
| `akquise/interessenabwaegung-o8.md` § 5.1 (P-7) | Wellengröße vorab festlegen — Auflage, kein Ist-Zustand |
| `akquise/interessenabwaegung-o8.md` § 5.4 (FG-1…FG-6) | Fallgruppen, FG-4- **und** FG-2-Anteil |
| `akquise/interessenabwaegung-o8.md` § 7.2 / § 7.4 | Art. 21 Abs. 4, Trennungsgebot, Ablaufkette |
| `akquise/interessenabwaegung-o8.md` § 10 (B-1…B-7) | Wortlaut der Bau-Pflichten, Zählweg für den Nenner |
| `akquise/listenbau-regelwerk.md` § 5.1 / § 5.2 / § 5.3 | Quellen-Ampel, R-Q1, Q-4 `ungeprüft` |
| `akquise/listenbau-regelwerk.md` § 6 / § 6.1 | Feldregister, R-F1, B-6-Nachtrag |
| `akquise/listenbau-regelwerk.md` § 7.1 / § 7.2 / § 7.3 / § 7.4 | B-1-Prüfschritt, R-B1…R-B4, R-B6, O-2b |
| `akquise/sperrdatei-struktur.md` | `SP-01`-Referenzen, Abgleichbegriff |

> ⚠️ **Belegstufe: zweite Hand durchgehend.** Die ① A-Stufen der DSK-
> und Normzitate stehen an ihren Ursprungsstellen; **diese Datei hat
> sie nicht selbst nachgemessen.** Sie liegt zudem **außerhalb** der
> `ZIEL`-Liste von `akquise/pruefe-zitate.js` — am Skript gemessen
> 14.08.2026, Stand `3067361`; Einzelheiten und der zugehörige
> Reparaturvermerk in `akquise/sperrdatei-struktur.md` § 8 (P-5) und
> § 11.
