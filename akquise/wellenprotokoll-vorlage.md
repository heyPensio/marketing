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
| **Beileger-Text (B-7)** | Das berechtigte Interesse muss ausformuliert im Beileger stehen (Regelwerk § 3 Pflicht 1). **Nicht gebaut** — braucht Firmierung und den anwaltlichen Rat. Ohne ihn gibt es keine Textversion, die `WP-24` tragen könnte |
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
| **Nach der Auswahl, vor dem Druck** | Block C · Block D (erster Abgleich) · Block F · Block G | Die Fallgruppen-Anteile und die Fristen stehen erst mit der Auswahl fest — `WP-29` ist das älteste `F-09` der Welle |
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
| **WP-02** | Angelegt am / von | ✅ | Datum + Person. Belegt zusammen mit `WP-37` die Vorher-Reihenfolge aus § 1 |
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
| **WP-09a** | **Auswahldatum** — wann die Auswahl tatsächlich lief | ✅ | Datum. 🔧 *Ergänzt 14.08.2026 (Prüferbefund PE-7, MITTEL):* § 1 macht die Vorher-Entstehung zur tragenden Regel, `WP-02` behauptete den Beleg, und die Checkliste prüfte „`WP-02` < **Auswahldatum**" — **ein Auswahldatum gab es in der ganzen Vorlage nicht.** `WP-02 < WP-37` belegt nur, dass die Welle vor ihrer Freigabe angelegt wurde, nicht die Reihenfolge, um die es geht. Die Zeile war aus dem Protokoll heraus nicht ausführbar und die Zusage in `WP-02` eine **Entwarnung ohne Träger** |
| **WP-09b** | Commit-Hash beim Abschluss von Block A/B | 🔶 | Falls das Protokoll versioniert geführt wird. ⚠️ **Selbstdeklarierte Daten können eine Reihenfolge nie beweisen** — ein Repo-Zeitstempel schon. Solange das Protokoll außerhalb der Versionskontrolle lebt (Ablageregel, § 13), bleibt `WP-09a` eine Selbstauskunft; das ist ausgewiesen, nicht geheilt |

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
| **WP-11** | Kandidatenmenge (geprüfte Adressen) | ✅ | Ausgangswert der Summenprobe |
| **WP-12** | Ausgesteuert · Quelle ⛔ (Regelwerk § 5.1) | ✅ | Zahl |
| **WP-13** | Ausgesteuert · Impressums-Werbewiderspruch (B-1) | ✅ | Zahl der **Treffer**. ⭐ Beantwortet die offene Umsetzungsfrage aus Regelwerk § 7.1 — s. § 10 Nr. 1 |
| **WP-13a** | **B-1-Prüfung durchgeführt bei: n von `WP-11`** | ✅ | 🔧 *Ergänzt 14.08.2026 (Prüferbefund PE-3, MITTEL).* `WP-13` zählt nur die **getroffenen** Fälle — eine Welle, in der niemand ein Impressum geprüft hat, trägt `WP-13 = 0`, und die Summenprobe geht auf: **`0` wäre ununterscheidbar von „nicht geprüft"** — genau das Problem, das Block D für den Sperrdatei-Abgleich mit der Null-Treffer-Regel löst. **Sollwert: n = `WP-11`.** ⚠️ Die Prüfmenge ist die **Kandidaten**menge, nicht nur `Q-2 = Impressum`: Regelwerk § 7.1 sagt ausdrücklich, „Jedes Ziel-Impressum" hänge nicht an der Adressquelle |
| **WP-14** | Ausgesteuert · Sperrdatei-Treffer | ✅ | Summe aus Block D |
| **WP-15** | Ausgesteuert · Q-4 = `ungeprüft` | ✅ | Zahl. Regelwerk § 5.3: `ungeprüft` sperrt den Datensatz für den Versand |
| **WP-16** | Ausgesteuert · sonstige (mit Grund) | ✅ | Zahl + Gründe |
| **WP-17** | **Versandmenge (Ist)** | ✅ | Die tatsächlich angeschriebenen **Adressen**. ⚠️ **Unabhängig zu erheben** — aus dem Versand-/Druckbeleg (Auflage, Portoabrechnung), **nie** als Ergebnis von Probe 1 eingetragen. Ein aus der Probe abgeleiteter Wert macht die Probe zirkulär: sie könnte dann nicht mehr fehlschlagen |
| **WP-18** | Anteil **FG-4** (inhabergeführt / benannte Person, Quelle Online-Impressum) | ✅ | Zahl **und** Prozent von `WP-17`. **Das ist das Maß des getragenen Risikos** (o8 § 5.4, FG-4) |
| **WP-19** | Anteil **FG-2** (Kapitalgesellschaft, kein Personenname, Quelle Impressum) | ✅ | Zahl und Prozent. ⭐ **Von der Quelle ebenfalls verlangt**, s. § 10 Nr. 2 |
| **WP-19a** | **FG-2-Einstufung je Datensatz belegbar?** | ✅ | `ja` / `nein`. Bei `nein`: **Stopp**, die FG-2-Datensätze werden ausgesteuert oder als FG-4 geführt. 🔧 *Ergänzt 14.08.2026 (Prüferbefund PE-1, SCHWER):* Die Quelle verlangt neben Kennzeichnung und Anteil ausdrücklich, dass „die Einstufung ‚kein Personenbezug' **je Datensatz belegbar** sein" muss — ohne diesen Nachweis ist `WP-19` eine Zahl ohne prüfbare Grundlage |
| **WP-20** | Anteil **FG-1** | ✅ | Zahl und Prozent |
| **WP-21** | Anteil **FG-3** | ✅ | Zahl und Prozent. 🔧 *Eigene ID seit 14.08.2026 (Prüferbefund PE-18.3):* `WP-20` trug zuvor **zwei** Werte („Anteile FG-1 und FG-3") und erschien in Probe 2 zweimal in derselben Summe — als einziges Feld brach es die Ein-ID-ein-Feld-Konvention und machte die Probe unausführbar |
| **WP-22** | Anteile **FG-5** / **FG-6** | ✅ | **Sollwert: 0 / 0.** FG-5 ist Telefon, FG-6 ist E-Mail/LinkedIn-DM. Ein Wert > 0 im Kanal K1 ist ein Einordnungsfehler oder ein Kanalverstoß — in beiden Fällen ein Stopp |
| **WP-23** | davon Erst-Disposition nach **O-2b** | 🔶 | Zahl der nie kontaktierten Datensätze, die mit dieser Welle disponiert werden (Regelwerk § 7.4: Disposition binnen 3 Monaten ab Aufnahme, einmal um 3 Monate verlängerbar, „kein Datensatz verfällt ohne Disposition") |

> ⚠️ **Zählschlüssel — an jeder Zahl mitzuführen** *(ergänzt nach
> Prüferbefund PE-17, MITTEL).* `WP-11` zählt **Betriebe**, `WP-17`
> zählt **Adressen**. Trägt ein Betrieb zwei versandfähige Adressen,
> geht Probe 1 bei völlig korrekter Welle **nicht** auf — und die
> Versuchung, sie „passend zu machen", ist genau der Fehler, den § 6
> finden soll. **Verbindliche Auflösung:** Alle Felder `WP-11` bis
> `WP-17` werden in **Adressen** gezählt; ein Betrieb mit zwei Adressen
> liefert zwei Kandidaten. Die Betriebszahl wird, wo sie interessiert,
> **zusätzlich** in `WP-33` vermerkt, nie in der Probenkette.
> ⚠️ Zweite Lebensphase-Grenze, bewusst getragen: `WP-12`/`WP-13`
> fallen nach Regelwerk § 7.1 Schritt 2 **vor** der Datensatzanlage an,
> `WP-14`/`WP-15` betreffen **bestehende** Datensätze. Die Probe zählt
> beide als Abzug von der Kandidatenmenge — das ist zulässig, solange
> `WP-11` die **geprüften Kandidaten** meint, nicht die angelegten
> Datensätze.

---

## 5. Block D — Abgleich-Journal (Sperrdatei)

**R-B6 (Regelwerk § 7.3):** Abgleich „**Vor jedem Versand** und **vor
jedem Druckauftrag** … Der Abgleich wird protokolliert (Datum, Welle,
Zahl der aussortierten Einträge) — ein Abgleich ohne Protokoll ist
später nicht belegbar."

⭐ **Deshalb mehrzeilig, nicht ein Feld.** Eine Welle kann mehrere
Druckaufträge haben (Nachdruck, geteilte Auflage, korrigierte Charge);
ein Abgleich am Wellenanfang deckt einen späteren Druckauftrag nicht.
Siehe § 10 Nr. 3.

| Lfd. | Anlass | Datum | Abgeglichene Menge | Treffer (ausgesteuert) | Sperrdatei-Stand | Wer |
|---|---|---|---|---|---|---|
| 1 | `Wellenfreigabe` / `Druckauftrag <n>` / `Versand <n>` | | | | letzte `SP-01` im Bestand | |
| 2 | | | | | | |
| … | | | | | | |

**Regeln zum Journal:**

- ⭐ **Die Null-Treffer-Regel steht hier — und nur hier.** *(🔧 Nach
  Prüferbefund PE-19, MITTEL: Sie stand wortgleich auch in
  `akquise/sperrdatei-struktur.md` § 5. Beide Dateien tragen zwar die
  Vorrangklausel „bei Widerspruch gewinnt das Regelwerk" — aber diese
  Regel ist eine **Setzung von R15-E** und steht im Regelwerk gar
  nicht; zwischen den beiden neuen Dateien gibt es keine Rangfolge und
  keinen Kopien-Wächter, und beide liegen außerhalb des Prüfraums von
  `pruefe-zitate.js`. Prüffrage der Doku-Hygiene: „Wer merkt es, wenn
  die beiden auseinanderlaufen?" — niemand. Die Sperrdatei zeigt jetzt
  hierher.)*
  **Ein Abgleich mit null Treffern wird genauso eingetragen** wie einer
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

**Ohne aufgehende Probe keine Freigabe.** Die Proben sind so gebaut,
dass ein Fehler einen **Rest ≠ 0** erzeugt, der gesucht werden muss.
*(🔧 Formulierung entschärft 14.08.2026, Prüferbefund PE-18.1: Hier
stand „ein Fehler liefert ein **unmögliches** Ergebnis, nicht ein knapp
danebenliegendes". Ein Rest von 1 ist knapp danebenliegend und
erkennbar — die Proben sind gut, die Behauptung war eine Nummer zu
groß.)*

### Probe 1 · Mengen, ohne Rest

```text
WP-11  Kandidatenmenge          (Adressen, s. Zählschlüssel § 4)
 −  WP-12  Quelle ⛔
 −  WP-13  Impressums-Werbewiderspruch (B-1)
 −  WP-14  Sperrdatei-Treffer
 −  WP-15  Q-4 ungeprüft
 −  WP-16  sonstige
 =  WP-17  Versandmenge (Ist)          →  Rest muss exakt 0 sein
```

⚠️ **`WP-17` wird aus dem Versand-/Druckbeleg erhoben, nicht hier
ausgerechnet.** Wer den Wert aus der Probe übernimmt, macht sie
zirkulär — sie kann dann nicht mehr fehlschlagen.

### Probe 2 · Fallgruppen, ohne Rest

```text
WP-20 (FG-1) + WP-19 (FG-2) + WP-21 (FG-3) + WP-18 (FG-4)
 + WP-22 (FG-5 + FG-6, Sollwert 0)
 =  WP-17  Versandmenge (Ist)          →  Rest muss exakt 0 sein
```

⚠️ **Annahme, die diese Probe voraussetzt:** dass FG-1…FG-6 die
Versandmenge **lückenlos** partitionieren. Das folgt aus o8 § 5.4, ist
dort aber nicht als Erschöpfung ausgesprochen — als Annahme
ausgewiesen, nicht als Beleg *(ergänzt nach Prüferhinweis PE-18)*.

### Probe 3 · Journal

```text
Summe der Treffer-Spalte in Block D  =  WP-14           → identisch
Zahl der Zeilen in Block D  ≥  1 + Druckaufträge + Versände
```

> 🔧 **Repariert 14.08.2026 (Prüferbefund PE-16, SCHWER).** Die
> Erstfassung verlangte „≥ Zahl der **Druckaufträge** + 1" — und die
> Freigabe-Checkliste ebenso. Damit fiel **der zweite R-B6-Anlass
> heraus**: Die Regel lautet „vor jedem **Versand** und vor jedem
> Druckauftrag", und Block D kennt selbst drei Anlass-Typen. Eine Welle
> mit 1 Freigabe + 2 Druckaufträgen + 2 Versänden braucht **5** Zeilen;
> die alte Probe verlangte ≥ 3 und hätte grün gemeldet. **Ausgerechnet
> in dem Dokument, das die Zweizahl der Anlässe als eigenen Befund
> ausweist (§ 10 Nr. 3)** — und ausgerechnet in der Kontrolle vor einer
> Freigabe: Ein fehlender Abgleich vor dem Versand verstößt gegen rote
> Linie 9 des Regelwerks („Kein Versand ohne vorherigen
> Sperrdatei-Abgleich"), die die Checkliste durchgewinkt hätte.

> ⚠️ **Was die drei Proben leisten — und was nicht.** Probe 1 misst den
> Weg von der Kandidaten- zur Versandmenge, Probe 2 denselben Endwert
> über ein **unabhängiges** Strukturmerkmal (die
> Fallgruppen-Einordnung). Beide müssen auf dieselbe Zahl `WP-17`
> laufen; stimmt eine und die andere nicht, ist die Einordnung falsch.
> **Probe 3, erste Zeile, ist dagegen keine unabhängige Kontrolle:**
> Sie prüft `WP-14` gegen seine eigene Felddefinition („Summe aus
> Block D") und kann nur fehlschlagen, wenn jemand die Definition
> verletzt — ein Übertragungsfehler-Schutz, mehr nicht *(ausgewiesen
> nach Prüferbefund PE-18.2)*.

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

⭐ **Das sind ZWEI Texte, also zwei Versionsfelder** — siehe § 10 Nr. 4.

| # | Feld | Pflicht | Inhalt |
|---|---|---|---|
| **WP-24** | Version **Art.-14-Beileger** | ✅ | Schema `v<n>-<jjjj-mm-tt>` (Kanon-Versionsschema, Baustein `freigabe-vorlagen`). Heute: `<<BEILEGER-VERSION — TEXT NICHT GEBAUT>>` |
| **WP-25** | Version **Widerspruchs-Kasten** (Art. 21 Abs. 4) | ✅ | dito. Heute: `<<WIDERSPRUCHS-KASTEN — TEXT NICHT GEBAUT>>` |
| **WP-26** | Gingen beide an **alle** Adressen der Welle? | ✅ | `ja` / `nein`. Bei `nein`: Aufteilung je Version mit Menge — B-5 verlangt „welche Version an **welche Adressen**" |
| **WP-27** | Trennung von Information und Werbetext geprüft | ✅ | `ja` / `nein`. Trennungsgebot: Information und Werbetext sind „klar voneinander zu trennen und die Information deutlich herauszustellen" (Regelwerk § 3 Pflicht 1, nach Rechtsmatrix C4); Art. 21 Abs. 4 verlangt „von anderen Informationen getrennte Form" |
| **WP-28** | Ablage-Referenz der tatsächlich gedruckten Fassung | ✅ | „revisionsfest" heißt: die versandte Fassung ist archiviert, nicht nur ihre Nummer |

---

## 8. Block G — Fristen

| # | Feld | Pflicht | Inhalt |
|---|---|---|---|
| **WP-29** | Frühestes `F-09` der Welle | ✅ | Aufnahmedatum des ältesten Datensatzes — **startet die Art.-14-Monatsuhr** (Regelwerk § 6, F-09) |
| **WP-30** | Geplantes Versanddatum | ✅ | |
| **WP-31** | **R-B1-Probe:** `WP-30 − WP-29 ≤ 28 Tage`? | ✅ | `erfüllt` / `nicht erfüllt`. R-B1: „Es wird **nicht auf Vorrat gelistet.** Eine Welle wird nur angelegt, wenn ihr Versand **innerhalb von vier Wochen** nach dem frühesten F-09 der Welle vorgesehen ist" |
| **WP-32** | Bei `nicht erfüllt`: gewählter Weg | 🔶 | Genau einer der beiden aus R-B2: `zeitnah kontaktieren` **oder** `unmittelbar nach dem Listenaufbau separat informieren`. ⛔ **„Abwarten" existiert nicht** — „Ein dritter Weg — abwarten — existiert nicht" |
| **WP-33** | Art.-14-Information erfolgt am / wie | ✅ | Nach R-B3 ist maßgeblich, „**was zuerst eintritt**": längstens ein Monat nach Erlangung (lit. a) bzw. spätestens zum Zeitpunkt der ersten Mitteilung (lit. b) |

> ⚠️ **Kein Ausweg über Art. 14 Abs. 5** (R-B4) — insbesondere nicht
> über lit. b („unverhältnismäßiger Aufwand"): „gerade nicht — weil
> ohnehin ein Anschreiben erfolgt und die Information ihm beigefügt
> werden kann". Ein Feld dafür existiert bewusst nicht.

---

## 8a. Block G2 — Muss die Abwägung neu geführt werden? (o8 § 11.3)

> 🔧 **Block ergänzt 14.08.2026 (Prüferbefund PE-2, SCHWER).** Die
> Erstfassung kannte von den Neu-Führungs-Triggern der Abwägung **einen
> einzigen** (den Zweck-Trigger in `WP-04`). Das ist der gefährlichste
> Ausfall der ganzen Vorlage: Sie begründet ihre Existenz damit, die
> **Gegenmaßnahme** gegen den Einzelfall-Einwand der Aufsicht zu sein —
> und hätte ausgerechnet die Welle, welche die Abwägung sprengt,
> **ohne Alarm** protokolliert. **Ursache:** Der Bau lief entlang der
> Pflicht-Aufzählung B-6 / § 6.1, nicht entlang der Wirkungskette der
> Abwägung; § 11.3 steht in o8 in einem anderen Kapitel als B-6. Genau
> die L-34-Klasse — ein Quellverweis benennt, wo man **anfängt**.

`interessenabwaegung-o8.md` § 11.3 nennt Trigger, bei denen die
Abwägung **neu zu führen** ist. Drei davon sind auf Wellenebene
beobachtbar und deshalb hier Pflichtfelder:

| # | Feld | Pflicht | Inhalt |
|---|---|---|---|
| **WP-34** | Ist dies die **erste reale Welle**? | ✅ | `ja` / `nein`. Bei `ja`: **Stopp bis zum Abgleich der Abwägung gegen die dann konkrete Listenlogik** — o8 § 11.3 nennt „vor dem ersten realen Wellenbau" ausdrücklich als Trigger (§ 1.3/§ 4.3) |
| **WP-35** | **Überschreitet `WP-17` (oder `WP-10`) 300 Stück?** | ✅ | `ja` / `nein`. Bei `ja`: **Stopp — die Abwägung ist vor dem Versand neu zu führen.** o8 § 11.3: „Wenn die **Menge je Welle 300 Stück überschreitet** (Skalenfaktor P-7 / R-K1)". ⚠️ **Kein Randfall, sondern der Regelfall:** Der Akquiseplan rechnet je Abschluss mit ≈ 337–1.600 Briefen — die eigenen Planzahlen liegen **über** der Schwelle. Die Schwelle wurde am 12.08.2026 eigens eingesetzt, weil „ein Trigger ohne Schwellenwert nicht bedienbar ist" |
| **WP-36** | Kommt eine **neue Adressquelle** hinzu (gegenüber der letzten Welle)? | ✅ | `ja` / `nein` + welche. Bei `ja`: **Stopp** — o8 § 11.3. Prüfen gegen `WP-09` und die Quellen-Ampel des Regelwerks § 5.1 |

> ⚠️ **Ein `ja` in Block G2 ist kein Vermerk, sondern ein Stopp.** Die
> Welle wird erst freigegeben, nachdem die Abwägung nachgeführt wurde;
> das Ergebnis gehört in `WP-39`. Die übrigen Trigger des § 11.3 (u. a.
> Personalisierung, Kanalwechsel) sind nicht wellenweise beobachtbar
> und bleiben beim Träger von o8 § 11.3 — hier bewusst **nicht**
> abgebildet, damit die drei prüfbaren nicht in einer Sammelzeile
> untergehen.

---

## 9. Block H — Freigabe

| # | Feld | Pflicht | Inhalt |
|---|---|---|---|
| **WP-37** | Freigabe erteilt am / von | ✅ | Datum + Person. **Muss nach `WP-02` liegen** und nach allen Block-D-Zeilen |
| **WP-38** | Freigabe-Checkliste | ✅ | s. unten — **alle** Zeilen `ja`, sonst keine Freigabe |
| **WP-39** | Abweichungen / Befunde dieser Welle | 🔶 | Alles, was in den Blöcken auffiel, inkl. Ergebnis eines Block-G2-Stopps und der Betriebszahl aus dem Zählschlüssel (§ 4); leer nur, wenn nichts auffiel |

**Freigabe-Checkliste (`WP-38`) — jede Zeile einzeln:**

```text
[ ] Alle Gates oben geschlossen (F-7 · O-9 · B-2 · O-6 · Belegablage ·
    Beileger · Kasten · Datenschutzinformation · VVT)
[ ] Block B vor der Auswahl geschrieben (WP-02 < WP-09a Auswahldatum)
[ ] Summenprobe 1 geht ohne Rest auf   (WP-17 aus dem Versandbeleg, nicht gerechnet)
[ ] Summenprobe 2 geht ohne Rest auf
[ ] Summenprobe 3 stimmt (Journal = WP-14; Zeilen >= 1 + Druckauftraege + Versaende)
[ ] WP-22 (FG-5 + FG-6) = 0
[ ] Sperrdatei-Abgleich fuer JEDEN Druckauftrag UND JEDEN VERSAND im Journal
[ ] WP-13a: B-1-Pruefung bei n = WP-11 durchgefuehrt (nicht nur Treffer gezaehlt)
[ ] WP-19a: FG-2-Einstufung je Datensatz belegbar
[ ] WP-24 und WP-25 tragen echte Versionen, keine Platzhalter
[ ] WP-31 erfuellt — oder WP-32 mit einem der zwei zulaessigen Wege belegt
[ ] Block G2: WP-34 / WP-35 / WP-36 alle "nein" — sonst Abwaegung neu fuehren
[ ] Kein Personenbezug in Block B
[ ] R-Q1 geprueft: die Welle rekonstruiert kein einzelnes Verzeichnis
[ ] Der Bestand liegt NICHT im Repo (sensibel/ oder Werkzeug, O-6)
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

2. ⭐ **Der FG-2-Anteil ist ebenfalls zu protokollieren (`WP-19`) — und
   die FG-2-Einstufung muss je Datensatz belegbar sein (`WP-19a`).**
   B-6 und der § 6.1-Nachtrag des Regelwerks nennen nur **FG-4**. Die
   FG-2-Zeile in `interessenabwaegung-o8.md` § 5.4 verlangt für ihre
   Fallgruppe **drei** Dinge, hier vollständig zitiert:

   > „Zulässig nur mit derselben Vorsicht wie FG-4: Q-2 = `Impressum`
   > protokollieren, **Anteil im Wellenprotokoll ausweisen** (B-6), und
   > die Einstufung „kein Personenbezug" muss je Datensatz belegbar
   > sein"

   Wer nur FG-4 ausweist, lässt die zweite Impressums-Fallgruppe
   unsichtbar.

   > 🔧 **Repariert 14.08.2026 (Prüferbefund PE-1, SCHWER).** Die
   > Erstfassung zitierte diese Zeile **nur bis zum zweiten Punkt und
   > ohne Auslassungszeichen** — der Abbruch fiel exakt mit der Grenze
   > der eigenen Umsetzung zusammen: Der zitierte Teil **stützte** den
   > eigenen Befund, der weggelassene erzeugte **zusätzliche Arbeit**.
   > Das ist Verdichtungs-Drift zugunsten der eigenen Aussage, und die
   > dritte Pflicht kam in **keinem** der beiden Werkzeuge an. Ohne sie
   > wäre `WP-19` eine Zahl ohne prüfbare Grundlage — gerade FG-2 lebt
   > davon, dass kein Personenname in der Liste steht, während o8 im
   > Q-13-Nachtrag ausdrücklich offenlässt, ob schon das **Auslesen**
   > Verarbeitung ist. Umgesetzt als Pflichtfeld `WP-19a`.
   >
   > 🔧 **Zugleich repariert (PE-13, HINWEIS):** Hier stand „und genau
   > **der Impressums-Anteil** ist das Maß des getragenen Risikos". Die
   > Quelle sagt das über **FG-4** („Der Anteil **dieser Fallgruppe** …
   > er ist das Maß des getragenen Risikos"). FG-2 und FG-4 tragen
   > unterschiedliche Risiken — FG-2 argumentiert mit ErwG 14 S. 2,
   > FG-4 mit dem bewusst getragenen Weg-(b)-Restrisiko. Die
   > Zusammenfassung zu „der Impressums-Anteil" war eine Verdichtung,
   > die die Quelle nicht deckt; sie ist gestrichen.

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
| **B-1** | Impressums-Werbewiderspruch prüfen und aussteuern | Sperrdatei (`ANL-3`) + Wellenprotokoll (`WP-13`) | **teilweise** — die **Prüfpflicht** selbst bleibt im Regelwerk § 7.1 / § 9 Nr. 13. Offen: Zulässigkeit der `ANL-3`-Speicherung (Sperrdatei PS-1, anwaltlicher Rat) |
| **B-2** | Elektronischer Widerspruchsweg + gekoppelte TOM-Pflicht | Sperrdatei (`SP-06`) | **teilweise** — erfasst wird der Eingangsweg. Der **Bau** von E-Mail-Weg und Art.-24-TOM ist **nicht hier**: Träger F-7 (Adresse) und MKT-OPS (TOM) |
| **B-3** | Individuelles Antwortschreiben auf jeden Widerspruch | Sperrdatei (`SP-11`…`SP-13`, § 4 Schritt 5) | **teilweise** — Nachweisfelder und Ablauf stehen. Der **Text** ist **nicht hier**: Träger F-7 |
| **B-4** | Löschwunsch ≠ Widerspruch (enger Sperrdatei-Fall) | Sperrdatei § 6 (`SP-14`) | **teilweise** — Abgrenzungsfrage, Ablauf, Klärungsfall und Nachweisfeld `SP-14.4` stehen. Der **Hinweistext** („eventuell wieder Werbung erhalten kann") ist **nicht hier**: Träger F-7. 🔧 *Korrigiert 14.08.2026, s. Kasten unten* |
| **B-5** | Versionierung der Informationstexte | Wellenprotokoll Block F (`WP-24`…`WP-28`) | **teilweise** — die Protokollierung je Welle steht. Die **Texte** und die Vergabe der ersten Versionsnummern sind **nicht hier**: Träger F-7 + anwaltlicher Rat |
| **B-6** | Wellenprotokoll mit Fallgruppen-Anteil | Wellenprotokoll (ganze Datei) | ✅ **vollständig** — alle fünf B-6-Elemente abgebildet (`WP-06`…`WP-09` · `WP-10`/`WP-11`/`WP-17` · `WP-18` · Block D · `WP-24`/`WP-25`), inkl. der Ergänzungen aus § 10 |
| **B-7** | Berechtigtes Interesse im Brief ausformuliert | — | ⛔ **ausdrücklich NICHT hier.** Das ist der **Beileger-Text**; er ist dieser Session untersagt (F-7 offen, O-9 offen). Träger: MKT-AKQ nach dem anwaltlichen Rat |

**Summenprobe der Zuordnung:**

```text
vollständig in einem Werkzeug umgesetzt ....... 1   (B-6)
teilweise umgesetzt, Rest mit benanntem Träger  5   (B-1, B-2, B-3, B-4, B-5)
ausdrücklich "nicht hier" ..................... 1   (B-7)
                                              ----
                                                7   = Nenner   ✅ ohne Rest
```

> 🔧 **Korrigiert 14.08.2026 (Prüferbefund PE-14, MITTEL) — vorher
> „2 / 4 / 1".** B-4 stand als „✅ **vollständig**" da, obwohl die
> Quelle auch dort eine **Mitteilung an die betroffene Person**
> verlangt: Wer die Löschung aus der Sperrdatei verlangt, „wird darauf
> hingewiesen, dass er ‚eventuell wieder Werbung erhalten kann'".
> Dieser Hinweistext ist genauso wenig geschrieben wie das
> Antwortschreiben aus B-3 und hängt an derselben Firmierung — bei B-3
> führte exakt diese Lage zu „teilweise". **Das Kriterium wurde
> zwischen zwei Zeilen derselben Tabelle gewechselt, und der Wechsel
> ging in Richtung der eigenen Leistung** (B-4 ist die im
> Commit-Betreff genannte Pflicht). Ein Bewertungskriterium gilt für
> alle Kandidaten.

> ⚠️ **Was diese 7 von 7 NICHT behauptet — zwei Grenzen.**
> **(1)** Sie zählt die **Zuordnung** der Pflichten zu Werkzeugen, nicht
> ihre **Erfüllung**. Erfüllt ist heute **keine** — alle Gates sind
> offen.
> **(2)** 🔧 *Ergänzt nach Prüferbefund PE-15 (MITTEL):* Die Probe
> **kann an der Einstufungsachse nicht anders ausfallen**. Sie zählt
> sieben Tabellenzeilen in drei Kategorien; da jede Zeile genau eine
> Kategorie trägt, ist die Summe **immer** 7 — unabhängig davon,
> **welche** Kategorie eine Zeile bekommt. Sie fängt eine vergessene
> oder doppelt gezählte Zeile; eine **Fehleinstufung** (wie PE-14 eine
> war) sieht sie strukturell nicht. Der Vorbehalt (1) adressiert eine
> andere Frage und darf nicht als Grenzangabe der Probe gelesen werden.
> **Gegen Fehleinstufungen hilft nur die zeilenweise Prüfung am
> Kriterium, nicht die Summe.**

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
WP-09a Auswahldatum ............. ____.____.2026   [muss NACH WP-02 liegen]
WP-09b Commit-Hash Block A/B .... ____________  [nur wenn versioniert gefuehrt]
      [ ] R-Q1 geprüft: kein Verzeichnis wird rekonstruiert

════ BLOCK C · Mengen ═══════════════════ (nach der Auswahl)
WP-10 Geplante Größe (vorab) .... ______
WP-11 Kandidatenmenge ........... ______
WP-12 − Quelle ⛔ ............... ______
WP-13 − Impressums-Widerspruch .. ______   (B-1, Treffer)
WP-13a B-1 geprueft bei n von WP-11: ______  [Sollwert n = WP-11]
WP-14 − Sperrdatei-Treffer ...... ______   (= Summe Block D)
WP-15 − Q-4 ungeprüft ........... ______
WP-16 − sonstige ................ ______   Gründe: ______________
WP-17 = Versandmenge (Ist) ...... ______  [aus dem Versandbeleg, NICHT gerechnet]
WP-18 davon FG-4 ................ ______ = ____ %
WP-19 davon FG-2 ................ ______ = ____ %
WP-19a FG-2-Einstufung je Datensatz belegbar?  ja / nein   [nein = STOPP]
WP-20 davon FG-1 ................ ______ = ____ %
WP-21 davon FG-3 ................ ______ = ____ %
WP-22 davon FG-5 / FG-6 ......... ______ / ______   [Sollwert 0 / 0]
WP-23 davon O-2b-Erstdisposition  ______

════ BLOCK D · Abgleich-Journal ═════════ (vor JEDEM Druck UND JEDEM Versand)
  Lfd · Anlass · Datum · Menge · Treffer · Sperrdatei-Stand · Wer
   1   · ________ · ____ · _____ · _______ · SPD-2026-___ · ______
   2   · ________ · ____ · _____ · _______ · SPD-2026-___ · ______
  [Anlass: Wellenfreigabe / Druckauftrag <n> / Versand <n>]
  [Null Treffer wird EINGETRAGEN, nicht weggelassen]

════ BLOCK F · Textversionen ════════════
WP-24 Beileger .................. <<BEILEGER-VERSION — TEXT NICHT GEBAUT>>
WP-25 Widerspruchs-Kasten ....... <<WIDERSPRUCHS-KASTEN — TEXT NICHT GEBAUT>>
WP-26 Beide an alle Adressen? ... ja / nein → Aufteilung: ___________
WP-27 Trennung geprüft .......... ja / nein
WP-28 Ablage gedruckte Fassung .. _______________________________

════ BLOCK G · Fristen ══════════════════
WP-29 Frühestes F-09 ............ ____.____.2026
WP-30 Geplanter Versand ......... ____.____.2026
WP-31 R-B1-Probe (≤ 28 Tage) .... erfüllt / nicht erfüllt
WP-32 Falls nicht: Weg .......... zeitnah kontaktieren /
                                  unmittelbar separat informieren
                                  [ein dritter Weg existiert nicht]
WP-33 Art.-14-Info am / wie ..... ____.____.2026 · ______________

════ BLOCK G2 · Abwägung neu führen? ════ (o8 § 11.3)
WP-34 Erste reale Welle? ........ ja / nein      [ja = STOPP]
WP-35 Menge > 300 Stück? ........ ja / nein      [ja = STOPP]
WP-36 Neue Adressquelle? ........ ja / nein      [ja = STOPP] welche: ______

════ BLOCK E · Summenproben ═════════════ (vor der Freigabe)
Probe 1  WP-11 − (WP-12+13+14+15+16) − WP-17 = ______   [muss 0 sein]
Probe 2  (WP-20+WP-19+WP-21+WP-18+WP-22) − WP-17 = ______ [muss 0 sein]
Probe 3  Σ Treffer Block D = WP-14 ?  ja / nein
         Zeilen Block D ≥ 1 + Druckaufträge + Versände ?  ja / nein

════ BLOCK H · Freigabe ═════════════════
WP-37 Freigabe am / von ......... ____.____.2026 · ______________
WP-38 Checkliste (§ 9) .......... alle Zeilen ja?  ja / nein
WP-39 Abweichungen / Befunde .... _______________________________

Absender / Verantwortlicher im Brief: <<FIRMIERUNG — F-7 OFFEN>>
Ablageort dieses Protokolls: sensibel/ oder Werkzeug (O-6) — NIE im Repo
```

---

## 13. Bestand und Ablageregel

### ⛔ Wo ausgefüllte Wellenprotokolle liegen

*(Ergänzt 14.08.2026 in Anwendung von Prüferbefund PE-5, der die
gleichartige Stelle in `akquise/sperrdatei-struktur.md` betraf.)*

1. **Ausgefüllte Wellenprotokolle gehören nicht ins Repository** —
   `sensibel/` (git-ignoriert) oder das Werkzeug nach **O-6**.
   Grundlage: `interessenabwaegung-o8.md` § 8 lit. g („**Ablage
   außerhalb des Repos**", Projektquelle § 2 AKQ2) und Regelwerk § 11
   („Die Liste selbst gehört **nicht** ins Repo").
2. ⚠️ **Das gilt, obwohl Block B personenbezugsfrei ist.** Block C
   trägt Mengen und Fallgruppen-Anteile einer konkreten Aussendung,
   Block D den Sperrdatei-Stand — zusammen mit `WP-06`/`WP-07` ist der
   Adressatenkreis einer Welle rekonstruierbar genug, um die
   Ablageregel nicht auszureizen. **Die engere Handhabung ist die
   richtige**, solange O-9 offen ist.
3. **Diese Datei hier ist die leere Vorlage** — sie enthält keine
   Bestandsdaten und bleibt deshalb im Repo.

### Bestand

| Welle | Status | Bemerkung |
|---|---|---|
| *(keine)* | — | **Es existiert noch keine Welle und kein Datensatz.** Die Gates oben sind offen. Ein Bestand entstünde ohnehin am Ablageort, nicht hier |

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
> Reparaturvermerk in `akquise/sperrdatei-struktur.md` § 8 (PS-5) und
> § 11.
