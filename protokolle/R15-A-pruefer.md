# R15-A — Unabhängige Prüfung des Anwalts-Briefings

**Prüfgegenstand:** `handel/anwalts-briefing-2026-08.md` im Stand des Commits
**`cca1919`** (997 Zeilen, 60.947 Bytes), bezogen über
`git show cca1919:handel/anwalts-briefing-2026-08.md` — **nicht** aus dem
Arbeitsbaum.
**Prüfdatum:** 14.08.2026 · **Prüfer:** unabhängige Session mit frischem
Kontext, Schreibrecht ausschließlich auf diese Datei.

---

## Kopfblock — was ich gelesen habe, mit Zeilenspannen

| Quelle | Gelesene Zeilenspanne | Umfang |
|---|---|---|
| Briefing `cca1919` | 1–500, 500–997 | **1–997, vollständig** |
| `sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.txt` (696 Z.) | Tenor Z. 100–133; Rn. 3, 34, 44, 64, 66, 72, 78–89, 99, 111, 114–116, 123, 126–137, 141, 142, 146, 147, 151, 152, 176, 237, 249, 250, 265–267, 271, 272 (je Z. 128+2n, Absatz davor und danach mit); Zitat-Existenzproben `grep -o -F` über die Gesamtdatei | **gezielt, nicht vollständig** — die Volllektüre 1–696 hat ein Nebenläufer übernommen, ich habe dessen Funde einzeln am Rohbeleg nachgemessen |
| `sensibel/rohbelege-R09-A/dsk-oh-werbung-2022.txt` (726 Z.) | 1–70 (Gliederung vollständig), 112–140, 168–176, 195–215, 241–248, 310–324, 518–548, 600–616 | gezielt + **Gliederung generisch** über `grep -n "^4\.[0-9]"` und das Inhaltsverzeichnis |
| `sensibel/rohbelege-R09-A/eugh-c-621-22-EN.txt` (1415 Z.) | 930–936, 1214–1345; Rn.-Struktur über `grep -n "^ *5[0-9] *$"` | gezielt |
| `…/eugh-c-621-22-DE-amtsblattmitteilung.txt` | 1–Ende | **vollständig** |
| `sensibel/rohbelege-R09-A/dsgvo-cellar.txt` | 4629–4720 (Art. 6 Abs. 4 lit. a–e) | gezielt |
| `sensibel/rohbelege-R15-A/ugprl-2005-29-cellar.txt` | 102–109 (Art. 3), ErwG 14 vollständig via `awk '/^\(14\)/,/^\(15\)/'` | gezielt |
| `sensibel/rohbelege-R15-A/ugprl-konsolidiert.txt` | 75–81 | gezielt |
| `sensibel/rohbelege-R15-A/uwg-gii.txt` | 51–55, 169–173 | gezielt |
| `..\heypensio\quellen-n8n-lizenz\` (63 Dateien) | `n8n-io-pricing.txt` Z. 469 und Umfeld; `docs-community-edition-features.md`, `docs-env-vars.md`, `n8n-io-oem.txt`, `docs-release-notes-2x.md`, `r43c-version-2.29-beleg.json` je gezielt; **Wortgrenzen-Vollsuche rekursiv über alle 63 Dateien** | gezielt + Vollsuche |
| Bestand `cca1919`: `handel/kanal-rechtsmatrix.md`, `akquise/interessenabwaegung-o8.md`, `akquise/listenbau-regelwerk.md`, `akquise/sperrdatei-struktur.md`, `projektquelle-mkt.md` | gezielte Verifikation der von einem Nebenläufer gemeldeten Fundstellen (Z. 381, 572, 704–708, 700–705, 451, 1140) | **nicht vollständig durch mich** |

**Verfahrenshinweis:** Für die drei Rückwärts-Leserichtungen (LG-Volltext ·
DSK-OH + EuGH · Bestandsdokumente) habe ich Nebenläufer mit frischem Kontext
eingesetzt. **Jeder übernommene Fund ist von mir am Rohbeleg nachgemessen**
(Zeile geöffnet, Zitat per `grep -o -F` gegengeprüft). Zwei gemeldete Funde
habe ich dabei nicht 1:1 reproduziert (s. „Grenzen meines Laufs"); nicht
reproduzierte Funde stehen unten **nicht** als Befund.

**Randnummern-Formel verifiziert:** Rn. n = Zeile 128 + 2·n. Gegenprobe an
Rn. 83/84/85 (Z. 294/296/298) und Rn. 86/87/88 (Z. 300/302/304) — trägt.
Höchste Randnummer ist **272** (Z. 672), nicht 284.

---

## Zusammenfassung mit Nenner

| Prüfachse | Ergebnis |
|---|---|
| **Zahlen (Prüfauftrag 2)** | **20 von 21** Zahlen exakt reproduziert. **1 Abweichung** (M-1), **1 Untererfassung** (M-2). |
| **Zitate LG-Urteil** | **17 von 17** geprüfte Zitate byte-genau, **17 von 17** Fundstellen korrekt. **3 Kontexte relativieren** (S-3, M-5, M-8). |
| **Zitate DSK / DSGVO / EuGH / UGPRL / UWG / n8n** | **12 von 12** byte-genau, **12 von 12** Fundstellen korrekt. **2 Auslassungen ohne Markierung bzw. mit sinnentstellender Ellipse** (M-3, M-4). |
| **Was aus der Quelle nicht ankam (Prüfauftrag 3)** | **11 Befunde** (S-1, S-4, M-6 bis M-8, H-1 bis H-5 sowie S-3 anteilig). |
| **Vorwegnahme (Prüfauftrag 4)** | **3 Befunde** (S-2, M-9, M-10) — alle drei in Tabellen bzw. am Übergang Zitat → Folgerung, keiner in einem Zitat. |
| **Belegstufen/Grenzen-Vollzähligkeit (Prüfauftrag 5)** | § 7.2 listet **7** Grenzen; **mindestens 4 weitere** sind nach demselben Maßstab fällig (M-11). |
| **Außenwirksamkeit (Prüfauftrag 6)** | Umlaute **0 Beanstandungen**, Mojibake **0**, Tabellen **13 von 13 konsistent**, Platzhalter **sauber**. **2 Befunde** (S-5, H-6). |
| **Auftragstreue (Prüfauftrag 7)** | **4 von 4** Fragen · **20 von 20** Pflichtteilen strukturell vorhanden · Kurz-IDs **im Wesentlichen aufgelöst**, 1 Rest (H-6). Inhaltlich entschieden wird — bis auf S-2/M-9/M-10 — nichts. |

**Gesamt: 5 SCHWER · 11 MITTEL · 6 HINWEIS.**

---

# SCHWER (5 von 22)

## S-1 · Die abweichende Auffassung des **Berufungsgerichts** fehlt vollständig — und die eigene Lesehilfe lenkt von ihr weg

**Fundstelle im Briefing:** § 2.3 (Quellenlage), letzter Spiegelstrich der
„Drei Sachverhaltsunterschiede"; § 2.4 (Gegenansicht); § 7.2 (Grenzen).

**Sachverhalt.** Das Briefing führt als Gegenansicht **ausschließlich das OLG
Stuttgart** (2 U 63/22). Rn. 111 des Urteils enthält jedoch eine abweichende
Auffassung des **OLG Düsseldorf** — also des für dieses LG zuständigen
Berufungsgerichts:

> „An dieser Beurteilung des Werbeschreibens der Beklagten hält die Kammer
> weiterhin fest, und zwar auch in Ansehung der abweichenden Auffassung, die
> nach den Angaben der Beklagten von dem Oberlandesgericht **in mehreren
> mündlichen Verhandlungen als vorläufiges Beratungsergebnis** mitgeteilt
> worden sein soll und die in dem (von der Beklagten als Anlage B9
> vorgelegten) **Beschluss vom 19. Dezember 2024 - 20 W 37/24** (= Landgericht
> Düsseldorf 38 O 17/22) beiläufig in einer die dort getroffene Entscheidung
> nicht tragenden Erwägung geäußert worden ist."

**Beleg + Zählweg.** Rohbeleg Z. 350 (= Rn. 111, Formel 128+2·111). Existenz im
Urteil: `grep -o -F "20 W 37/24" <urteil> | wc -l` = **1**. Im Briefing:
`grep -o -F "20 W 37/24" <briefing> | wc -l` = **0**, `"OLG Düsseldorf"` = **0**,
`"Oberlandesgericht Düsseldorf"` = **0**, `"Rn. 111"` = **0** — bei
Positivkontrolle im selben Lauf `"OLG Stuttgart"` = **5** (der Suchweg über die
Briefing-Datei trifft) und Gegenprobe `"Zahnarztstuhl"` = **0**.

**Warum das schwer wiegt.** Es trifft drei Stellen des Briefings zugleich:
Frage 2.2 Nr. 4 fragt ausdrücklich nach der Bedeutung der Erstinstanzlichkeit
und der ungeklärten Rechtskraft — die Antwort hängt maßgeblich daran, dass das
Berufungsgericht bereits eine Gegenposition signalisiert hat. § 2.4 stellt den
Streitstand dar und lässt genau die Gegenstimme aus, die für die
Belastbarkeit dieses Urteils die größte praktische Bedeutung hat. Und § 7.2
listet die nicht beschafften Fundstellen, ohne 20 W 37/24 zu nennen.

**Verschärfend:** Das Briefing gibt in § 2.3 die Lesehilfe *„(Hinweis für die
Lektüre: Rn. 90 bis 110 sind ein wörtliches Zitat aus dem Urteil 38 O 88/23,
nicht Text dieser Entscheidung.)"* — sie ist zutreffend, führt den Leser aber
an dem Block vorbei, der **unmittelbar** in Rn. 111 mündet. Rn. 111 beginnt
zudem mit „An dieser Beurteilung … hält die Kammer weiterhin fest": die Kammer
macht sich die zitierten Rn. 90–110 ausdrücklich zu eigen, die Lesehilfe wirkt
also in zwei Richtungen entlastend, ohne das zu sagen.

**Disposition:** Rn. 111 in § 2.3 aufnehmen, 20 W 37/24 in die
Gegenansichts-Tabelle in § 2.4 und in die Grenzenliste § 7.2 (Original nicht
beschafft). Frage 2.2 Nr. 4 um die Teilfrage ergänzen, welches Gewicht ein in
einer nicht tragenden Erwägung geäußertes Beratungsergebnis des
Berufungsgerichts hat. Die Lesehilfe um den Satz ergänzen, dass die Kammer die
zitierte Passage in Rn. 111 zu ihrer eigenen macht.

---

## S-2 · § 1.5 Weg C behauptet „kein Personenbezug" als Tatsache — die eigene Quelle führt genau das als ungeklärt, und der Quell-Abgleich ist als gelaufen ausgewiesen

**Fundstelle im Briefing:** § 1.5, Tabelle „Entscheidungsalternativen", Zeile
**C**; Statusblock, Feld „Quell-Abgleich gelaufen".

**Sachverhalt.** Das Briefing schreibt in der Alternativen-Tabelle:

> **C — Nach Betriebsform trennen** | Impressumsdaten nur bei
> Kapitalgesellschaften (**dort nach ErwG 14 S. 2 DSGVO kein Personenbezug der
> Firmendaten**), bei inhabergeführten Betrieben nur freiwillige Quellen

Das ist eine Rechtsaussage im Indikativ, ohne Vorbehalt, in einer Spalte, die
laut Briefing beschreibt, „was der Weg bedeutet". Die eigene Quelle sagt zu
derselben Fallgruppe (FG-2) etwas deutlich Schwächeres:

> „| **FG-2** | Kapitalgesellschaft, kein Personenname, Quelle: **Impressum** |
> **Vertretbar, nicht gesichert** — und schwächer als FG-1. *Für* die
> Einstufung: Ohne personenbezogenes Datum in der Liste ist die DSGVO für diese
> Felder nicht anwendbar (ErwG 14 S. 2). ⚠️ **Dagegen (nachgetragen
> 12.08.2026, Q-13):** … das Auslesen ist bereits Verarbeitung (Art. 4 Nr. 2).
> Beim Auslesen liegt der Personenname regelmäßig **vor**, weil § 5 Abs. 1
> Nr. 1 DDG den Vertretungsberechtigten verlangt … **Der Unterschied zwischen
> Auslesen und Speichern ist hier nicht geklärt** |"

**Beleg + Zählweg.** `git show cca1919:akquise/interessenabwaegung-o8.md`,
Zeile 451, per `grep -n -F "Der Unterschied zwischen Auslesen und Speichern ist
hier nicht geklärt"` → **1 Treffer**. ErwG 14 S. 2 erscheint dort ausdrücklich
als *eine* Seite eines dokumentierten Streits, nicht als Feststellung.

**Warum das schwer wiegt.** Erstens ist der Vorbehalt genau in die Richtung
verlorengegangen, die die Freigabe-Regel voraussagt: die schwächere Fassung
steht im Außendokument. Zweitens ist Weg C eine der drei Handlungsalternativen,
über die der Anwalt entscheiden soll — die Trennlinie wird ihm als tragfähig
präsentiert, obwohl das eigene Haus sie als offen führt. Drittens behauptet der
Statusblock ausdrücklich: „**Quell-Abgleich gelaufen** |
… `akquise/interessenabwaegung-o8.md` … 14.08.2026". Der als gelaufen
ausgewiesene Prüfschritt hat den Fall auf genau seiner Achse nicht gefangen —
das entwertet die Zusage für jeden Leser, der sich darauf verlässt.

**Disposition:** Die Klammer in Weg C ersetzen durch die Fassung der Quelle:
„vertretbar, nicht gesichert; das *Für* stützt sich auf ErwG 14 S. 2, dagegen
spricht, dass bereits das Auslesen Verarbeitung ist und dabei der
Vertretungsberechtigte nach § 5 Abs. 1 Nr. 1 DDG regelmäßig vorliegt — der
Unterschied zwischen Auslesen und Speichern ist bei uns nicht geklärt". Diese
Abgrenzung zusätzlich als **eigene Teilfrage** in § 1.2 aufnehmen (sie ist
heute nirgends als Frage gestellt: `"Art. 4 Nr. 2"` im Briefing = **0**).
Den Quell-Abgleich für § 1.5 wiederholen und den Vermerk erst danach stehen
lassen.

---

## S-3 · Rn. 134: Das zitierte „gebilligt" wird zwei Sätze später für genau unsere Konstellation zurückgenommen

**Fundstelle im Briefing:** § 3.3 a, Tabellenzeile **Rn. 134**; § 3.4,
erster Spiegelstrich („Die Mitbewerber-Aussage in Rn. 134 ruht auf der
Billigung durch den EuGH").

**Sachverhalt.** Das Zitat ist **byte-genau** und die Fundstelle **korrekt**.
Der Kontext derselben Randnummer relativiert es jedoch erheblich. Nach dem
zitierten Halbsatz heißt es weiter:

> „Während in dem Fall, der dem Urteil des Gerichtshofs in der Sache „ND/DR"
> (auch „Lindenapotheke" genannt) zugrunde lag, zugleich die Voraussetzungen
> von **Art. 3 Abs. 3** der Richtlinie … (UGPRL) erfüllt waren …, was das in
> der Sache „Meta Platforms Ireland Limited" **nicht** der Fall. Zwar musste
> der Gerichtshof angesichts der ihm vorgelegten Fragen **nicht entscheiden,
> ob der deutsche Rechtsbruchtatbestand unter diesen Umständen angewandt
> werden kann. Immerhin hat er dies aber auch nicht ausgeschlossen.**"

**Beleg + Zählweg.** Rohbeleg Z. 396 (= Rn. 134). Vollständige Zeile gelesen;
das Briefing-Zitat endet mit „gebilligt", der Rest der Randnummer ist nicht
wiedergegeben und in § 3.4 auch nicht referiert.

**Warum das schwer wiegt.** Frage 3 ist die Frage, **ob § 3a UWG trägt**. Das
Briefing stützt die bejahende Seite auf eine „Billigung durch den EuGH" und
führt als Gegengewicht nur Rn. 135 („kein Automatismus") an. Der stärkere
Gegenpunkt steht in derselben Randnummer: Der EuGH hat die Frage für die
Konstellation ohne Art.-3-Abs.-3-Bereichsausnahme gerade **nicht** entschieden.
Damit ist „gebilligt" für unseren Fall — Briefwerbung, keine Gesundheits- oder
Sicherheitsaspekte von Produkten, also kein Art. 3 Abs. 3 — die schwächere,
nicht die stärkere Aussage. Der Satz „ruht auf der Billigung durch den EuGH"
ist in dieser Form nicht gedeckt.

**Zusatzbefund derselben Klasse:** **Art. 3 Abs. 3 UGPRL** kommt im Briefing
nicht vor, obwohl die Normtext-Liste in § 3.3 b Art. 3 Abs. 1 und Art. 3
Abs. 4 abdruckt und das eigene Rn.-129-Zitat auf „Art. 3 Abs. 2 bis Abs. 10"
verweist. Wortlaut (Rohbeleg `ugprl-2005-29-cellar.txt` Z. 104): „Diese
Richtlinie lässt die Rechtsvorschriften … in Bezug auf die Gesundheits- und
Sicherheitsaspekte von Produkten unberührt."

**Disposition:** Die Rn.-134-Tabellenzeile um die beiden Schlusssätze
ergänzen. In § 3.4 den Satz „ruht auf der Billigung durch den EuGH" streichen
(nicht abschwächen) und durch die Feststellung ersetzen, dass der EuGH die
Frage für die hiesige Konstellation offengelassen hat. Art. 3 Abs. 3 UGPRL in
die Normtextliste § 3.3 b aufnehmen und in Frage 3.2 Nr. 3 mitfragen, ob der
Weg über Art. 3 Abs. 4 trägt, wo der über Art. 3 Abs. 3 verschlossen ist.

---

## S-4 · DSK-OH Ziff. 2.2: Die Art.-14-Monatsfrist läuft **ab Erhalt der Daten** — das kippt das Wellenmodell und ist im Briefing nicht enthalten

**Fundstelle im Briefing:** § 0 Satz 6 („Der Werbebrief soll die
Art.-14-Information … enthalten"); § 0 „Zeitliche Lage"; § 1.3 Tabelle lit. e;
§ 8 (Reihenfolge/Termindruck).

**Sachverhalt.** Die Orientierungshilfe, die das Briefing als Aufsichtsquelle
führt, enthält in Ziff. 2.2 einen operativen Fristmaßstab, den das Briefing
nicht wiedergibt:

> „Eine unverzügliche Information fordert das Gesetz nicht. Die Information
> muss jedoch innerhalb einer angemessenen Frist, jedenfalls zum Zeitpunkt der
> ersten Kommunikation (Aussendung einer Werbung), **spätestens aber innerhalb
> eines Monats nach Erhalt der Daten** erfolgen. **Es kommt also darauf an,
> welche Bedingung zuerst eintritt.** Erfolgt die Information in Verbindung mit
> der ersten Werbezusendung, sind beide Bestandteile (Information und
> Werbetext) **klar voneinander zu trennen** und die Information (einschließlich
> des Hinweises auf das Werbewiderspruchsrecht) entsprechend deutlich
> herauszustellen."

**Beleg + Zählweg.** Rohbeleg `dsk-oh-werbung-2022.txt` Z. 312–322, am Stück
gelesen (Seitenumbruch „-- 9 of 20 --" liegt mitten im Absatz). Im Briefing:
`grep -o -F "innerhalb eines Monats" <briefing> | wc -l` = **0**,
`"eines Monats"` = **0**, `"Monat"` = **0** — bei Positivkontrolle im selben
Lauf `"Art. 14"` = mehrfach vorhanden (der Suchweg trifft) und `"Direktwerbung"`
= 11.

**Warum das schwer wiegt.** Das Briefing plant ausdrücklich den Listenaufbau
„in Wellen von wenigen hundert Adressen" (§ 0 Satz 1) und die Erfüllung der
Art.-14-Pflicht **durch den Brief** (§ 0 Satz 6). Nach dem Aufsichtsmaßstab
greift die Monatsfrist ab **Erhalt der Daten** und die frühere der beiden
Bedingungen zählt: Wer heute erhebt und in sechs Wochen anschreibt, muss
**vorher gesondert** informieren — was postalisch gegenüber einer noch nicht
angeschriebenen Adresse praktisch nicht geht. Das berührt nicht nur eine
Rechtsfrage, sondern unmittelbar die Terminplanung, deren Belastbarkeit das
Briefing in § 0 selbst zum Thema macht. Und es ist die Aufsichtsantwort auf
genau die Frage, die das Briefing in Frage 2 Teilfrage 6 aus Rn. 87 herzuleiten
versucht — sie stand die ganze Zeit in der zweiten Hauptquelle.

**Disposition:** Ziff. 2.2 als eigene Fundstelle in § 1.3 b aufnehmen. Eine
Teilfrage ergänzen: Wie ist die Monatsfrist ab Erhalt der Daten bei einem
Wellenmodell einzuhalten, wenn die Erhebung dem Versand vorausläuft — und
genügt der Brief als Informationsträger, wenn zwischen Erhebung und Versand
mehr als ein Monat liegt? Das Trennungsgebot in § 0 Satz 6 als Anforderung der
Aufsicht kenntlich machen (heute steht dort nur die eigene Absicht „in optisch
abgesetzter Form").

---

## S-5 · Der Satz über den Geschäftsführer-Entscheid ist die stärkste Angriffsfläche des Dokuments — und wird nirgends adressiert; das Dokument hat keinen Vertraulichkeits- oder Mandatsrahmen und keinen bestimmten Empfänger

**Fundstelle im Briefing:** § 0, „Der geplante Sachverhalt in sieben Sätzen",
Satz 7; Statusblock, Feld „Empfänger"; § 8, letzter Absatz.

**Sachverhalt.** Das Briefing enthält den Satz:

> „7. Der Geschäftsführer hat sich am 11.08.2026 ausdrücklich dafür
> entschieden, die Nutzung von Impressumsdaten mit dokumentiertem Restrisiko zu
> betreiben — **gegen die Empfehlung unserer eigenen Vorprüfung und in Kenntnis
> der gegenläufigen Aufsichtsauffassung.**"

Dieser Satz ist inhaltlich richtig und die Offenheit ist gegenüber dem eigenen
Anwalt fachlich vernünftig. Das Problem ist der **Rahmen**, in dem er steht:

- Der Empfänger ist ausweislich des Statusblocks **„⛔ NOCH NICHT BESTIMMT"**.
- § 8 bittet um einen **Kostenrahmen** — das legt nahe, dass das Dokument an
  **mehrere** Kanzleien geht, die noch kein Mandat haben.
- Das Dokument enthält **keinen** Vertraulichkeits-, Mandats- oder
  Verschwiegenheitsvermerk. Gemessen: `grep -o -F "<muster>" <briefing> | wc -l`
  für `vertraulich` = **0**, `Vertraulich` = **0**, `Mandat` = **0**,
  `Verschwiegenheit` = **0**, `§ 203` = **0**,
  `anwaltliche Schweigepflicht` = **0** — bei Positivkontrolle im selben Lauf
  `KANZLEI` = **1** (der Suchweg über die Datei trifft).
- § 5 („Was wir ausdrücklich NICHT fragen") und § 7.2 (Grenzen) sprechen den
  Punkt nicht an.

**Warum das schwer wiegt.** Der Satz dokumentiert schriftlich, dass der
Geschäftsführer eine als riskant erkannte Verarbeitung **wissentlich** gegen
internen Rat und **in Kenntnis** der gegenläufigen Aufsichtsauffassung
betreibt. Genau diese beiden Merkmale sind die Anknüpfungspunkte, an denen sich
Vorsatz und Bußgeldbemessung entscheiden. Solange kein Mandat besteht, greift
die anwaltliche Verschwiegenheit noch nicht in vollem Umfang; ein Dokument, das
in dieser Fassung als Angebotsunterlage an mehrere unbestimmte Empfänger geht,
verlässt den geschützten Raum, bevor er entstanden ist. Der Prüfauftrag fragt,
ob ein Satz existiert, den die Gegenseite gegen uns verwenden könnte, ohne dass
wir ihn adressieren — dies ist er.

**Disposition (Reihenfolge ist hier das Sicherheitsmerkmal).** Nicht den Satz
streichen — er gehört inhaltlich in das Briefing. Stattdessen: (a) Kopfblock um
einen Vertraulichkeitsvermerk und die Klarstellung ergänzen, dass das Dokument
zum Zweck der Mandatsanbahnung übergeben wird und der anwaltlichen
Verschwiegenheit unterliegen soll. (b) Für die **Angebotsphase** eine gekürzte
Fassung ohne § 0 Satz 7 vorsehen und den vollständigen Sachverhalt erst nach
Mandatserteilung übergeben — oder vorab eine NDA-/Mandatsanbahnungserklärung
einholen. (c) Die Entscheidung darüber ist eine Festlegung mit Außenwirkung und
gehört vor den Versand zum User, nicht in die Session.

---

# MITTEL (11 von 22)

## M-1 · Der angegebene Zählweg und die angegebene Zahl passen nicht zusammen: `Direktwerbung` ist 26, nicht 21 — Ursache sind Versalien

**Fundstelle:** § 3.3 c, Zeile „Positivkontrollen im selben Lauf".

**Sachverhalt.** Das Briefing erklärt den Zählweg für die gesamte Tabelle
verbindlich: „(Zählweg **durchgehend** `grep -o -i "<muster>" <datei> | wc -l`)"
— also **case-insensitiv**. Angegeben ist `Direktwerbung` = **21**.

**Beleg + eigener Zählweg.**

| Lauf | Ergebnis |
|---|---:|
| `grep -o -i "Direktwerbung" dsk-oh-werbung-2022.txt \| wc -l` (der deklarierte Weg) | **26** |
| `grep -o "Direktwerbung" dsk-oh-werbung-2022.txt \| wc -l` (case-sensitiv) | **21** |
| `grep -o -i "Direktwerbung" … \| sort \| uniq -c` | 21 × `Direktwerbung`, **5 × `DIREKTWERBUNG`** |

Die fünf Zusatztreffer sind Versalien-Schreibweisen im Inhaltsverzeichnis
(Z. 22, 36, 45, 49, 51). Die genannte Zahl 21 ist also der **case-sensitive**
Wert unter einem als case-insensitiv deklarierten Zählweg. Alle übrigen Zahlen
derselben Tabelle sind in beiden Kanälen identisch (`Interessenabwägung` 11/11,
`ä` 224/224, `B2B` 3/3, `Unternehmer` 1/1) — die Nullbefunde und die
B2B-Kernaussage sind davon **nicht** berührt.

**Verschärfend (Prüfauftrag 2, Spiegelungsfrage):** **Keine** der drei
angegebenen Positivkontrollen hätte diesen Fehler finden können, weil alle drei
in beiden Groß-/Kleinkanälen dieselbe Zahl liefern. Es fehlt genau eine
Kontrolle, die die Suchmechanik des Laufs spiegelt — ein Begriff mit
bekanntermaßen unterschiedlichem Ergebnis je Kanal.

**Disposition:** Zahl auf 26 korrigieren oder den Zählweg dieser Zeile als
case-sensitiv ausweisen; in beiden Fällen die Versalien-Variante benennen. Eine
vierte Positivkontrolle mit kanalabhängigem Sollwert ergänzen (z. B.
`Direktwerbung` cs=21 / ci=26 als Kontrollpaar).

---

## M-2 · `Mitbewerber` als Wortstamm ist 9, nicht 8 — die Zählung fällt auf genau die Tippfehler-Klasse herein, vor der dasselbe Dokument warnt

**Fundstelle:** § 3.4, erster Spiegelstrich, Klammer „(Zählweg: „kein
Mitbewerber" = 0 Treffer, „Mitbewerber" als Wortstamm = 8, bei
Positivkontrolle „Kläger" = 119)".

**Beleg + eigener Zählweg.**

| Lauf | Ergebnis |
|---|---:|
| `grep -o "Mitbewerber" <urteil> \| wc -l` | 8 |
| `grep -o "Mittbewerber" <urteil> \| wc -l` | **1** (Rn. 129, „Mittbewerbern") |
| `grep -o -E "Mitt?bewerber" <urteil> \| wc -l` | **9** |
| Formen: `Mitbewerber` 3 · `Mitbewerberin` 3 · `Mitbewerbern` 2 · `Mittbewerbern` 1 | |

`"kein Mitbewerber"` = 0 und `"Kläger"` = 119 reproduzieren exakt.

**Warum das mehr als eine Zahlenkorrektur ist.** Das Briefing kennzeichnet den
Tippfehler in seinem **eigenen** Rn.-129-Zitat zwei Abschnitte vorher
(*„(Schreibweise „Mittbewerbern" wie im Original)"*) und baut in § 2.4 eine
eigene Warnung um genau diese Fehlerklasse auf („Artt." mit Doppel-t, Suche
liefert 0 statt 13). Dieselbe Klasse schlägt dann in der eigenen Zählung zu.
Zudem ist die Zählung hier tragend für ein **Negativ** („kein Mitbewerber" kommt
nicht vor) — für Negative ist eine untererfassende Stammsuche das falsche
Werkzeug. Die Sachaussage selbst hält stand: der übersehene Treffer steht in
Rn. 129 und sagt nichts über die Parteirolle.

**Disposition:** Zahl auf 9 korrigieren, Zählweg auf `Mitt?bewerber` umstellen
und die Formenaufstellung als Beleg mitgeben.

---

## M-3 · DSK Ziff. 4.1 wird eine Zeile vor ihrem eigenen Vorbehalt abgeschnitten — und der abgeschnittene Satz beantwortet eine Frage des Briefings

**Fundstelle:** § 1.3 b, Block „Ziff. 4.1 — der Satz unmittelbar davor, auf den
sich das „hingegen" bezieht".

**Sachverhalt.** Das Briefing zitiert aus Ziff. 4.1 **einen** Satz („… ist nach
Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO **zulässig**.") — byte-genau, Fundstelle
korrekt. Die Ziffer besteht aber aus **drei** Sätzen; die beiden folgenden
fehlen ohne Auslassungszeichen:

> „**Spätestens bei der Datenerhebung ist über die werbliche Datenverarbeitung
> zu informieren**; eine Einwilligung der betroffenen Personen ist bei solchen
> Sachverhalten sodann nicht erforderlich. Die Anforderungen aus Ziffer 2.1
> sind zu beachten."

**Beleg.** Rohbeleg Z. 518–523, am Stück gelesen.

**Warum das zählt.** Das Zitat endet exakt am Satzpunkt vor seinem eigenen
Vorbehalt. Der weggefallene Satz ist die Aufsichtsantwort auf die
Zeitpunkt-Frage, die das Briefing in Frage 2 Teilfrage 6 mühsam aus Rn. 87
herzuleiten versucht — und die Ziffer wird im Briefing gerade als der
**permissive Gegenpol** zu Ziff. 4.2 präsentiert, wodurch die Bedingtheit der
Erlaubnis verlorengeht. § 7 des Briefings sagt zugleich zu: „jeder
Randnummern-Anker ist am Rohbeleg gelesen, und zwar der Absatz davor und danach
mit" — hier fehlt nicht der Nachbarabsatz, sondern der Rest desselben Absatzes.

**Disposition:** Ziff. 4.1 vollständig zitieren (drei Sätze) und die Bedingung
„spätestens bei der Datenerhebung ist zu informieren" ausdrücklich als
unbewertete Beobachtung Nr. 4 aufnehmen.

---

## M-4 · Die Ellipse im DSK-B2B-Zitat entfernt dessen Bedingung — und die anschließend fett gesetzte Aussage ruht auf ihr

**Fundstelle:** § 3.3 c, Blockzitat aus Ziff. 1.4.2 lit. b.

**Sachverhalt.** Das Briefing zitiert:

> „… kommt es für die Interessenabwägung … ebenso auf die
> wettbewerbsrechtliche Zulässigkeit gemäß § 7 Abs. 2 Nr. 2 UWG **… an …**
> **Im B2B-Bereich stehen deshalb** … nicht von vorneherein überwiegende
> schutzwürdige Interessen … **entgegen.**"

Der Rohbeleg (Z. 204–207) lautet an der Ellipsenstelle:

> „… gemäß § 7 Abs. 2 Nr. 2 UWG **und somit darauf an, dass von dessen
> zumindest mutmaßlicher Einwilligung ausgegangen werden kann.**"

Die Ellipse „… an …" verschluckt also nicht eine Fundstelle, sondern die
**Bedingung**, aus der das folgende „deshalb" folgt. Zweite, **unmarkierte**
Auslassung im selben Block: Das zitierte Schlusswort „… herzuleitender Grund
vorliegt." endet vor dem Klammerzusatz des Originals
„**(dies kann z. B. ein geschäftlicher Vorkontakt sein)**" — und das Briefing
stellt in § 1.3 selbst fest, dass zwischen uns und dem Betrieb „**kein
Vorkontakt und keine Geschäftsbeziehung**" besteht.

**Warum das zählt.** Das Briefing setzt die verbleibende Aussage **fett** und
baut darauf die Frage, ob sie „eine übertragbare Grundhaltung der Aufsicht zum
B2B-Bereich ausdrückt". Beide Auslassungen wirken in dieselbe Richtung — die
für uns günstigere. Entlastend: Der zweite Absatz („Eine bloße Sachbezogenheit
… genügt jedoch nicht") ist mitzitiert und stellt einen Teil des Gleichgewichts
wieder her.

**Disposition:** Beide Auslassungen schließen; die Bedingung „mutmaßliche
Einwilligung" und den Vorkontakt-Klammerzusatz in das Zitat aufnehmen. Die
Frage danach präzisieren: Kann die Aussage überhaupt übertragen werden, wenn
ihre Bedingung (mutmaßliche Einwilligung, konkreter Anlass aus dem
Interessenbereich, typischerweise Vorkontakt) bei uns nicht vorliegt?

---

## M-5 · Das Rn.-129-Zitat elidiert genau den Satz, der die eigene Frage 3.2 Nr. 2 trägt

**Fundstelle:** § 3.3 a, Tabellenzeile **Rn. 129**; Frage 3.2 Nr. 2.

**Sachverhalt.** Das Briefing zitiert Rn. 129 byte-genau, ersetzt aber die
zweite Hälfte des ersten Satzes durch „…". Der Rohbeleg (Z. 386) lautet dort:

> „… als die UGPRL zu einer vollständigen Harmonisierung des Lauterkeitsrechts
> geführt hat (vgl. Art. 4 UGPRL) **und die Frage der Unlauterkeit von
> Geschäftspraktiken im Geschäftsverkehr zwischen Unternehmen und Verbrauchern
> abschließend regelt ohne einen § 3a UWG entsprechenden Rechtsbruchtatbestand
> vorzusehen.**"

**Warum das zählt.** Frage 3.2 Nr. 2 fragt, wie die Rn.-129-Grenze wirkt, wenn
die Praxis „überhaupt keine Verbraucher erreicht", und belegt die
B2C-Beschränkung mit dem **Wortlaut der Richtlinie** (Art. 3 Abs. 1 UGPRL). Die
Beschränkung steht wörtlich in dem Urteilsabsatz, den das Briefing selbst
zitiert — und ist genau die Stelle, die weggekürzt wurde. Ebenfalls elidiert:
der Schlusssatz zu Art. 3 Abs. 3 UGPRL und den Arzneimittelbestelldaten-Fällen
(s. S-3).

**Disposition:** Rn. 129 vollständig wiedergeben und in Frage 3.2 Nr. 2 auf den
Urteilswortlaut statt auf den Richtlinienwortlaut abstellen.

---

## M-6 · Die Werbesperrdatei ist im Briefing die tragende Garantie — die Aufsicht knüpft ihre Rechtmäßigkeit an genau die Frage, die noch offen ist

**Fundstelle:** § 1.3 Tabelle lit. e; § 0 Satz 6; § 3.5 Weg A; **§ 4a**.

**Sachverhalt.** DSK-OH Ziff. 5.1 (Rohbeleg Z. 602–614, am Stück gelesen):

> „Solche Werbesperrdateien können aufgrund von Art. 21 Abs. 3, Art. 6 Abs. 1
> UAbs. 1 lit. f DS-GVO i. V. m. Art. 17 Abs. 3 lit. b DS-GVO … zulässig sein.
> **Voraussetzung hierfür ist allerdings eine Verarbeitung zu Werbezwecken nach
> Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO.** … **Eine Werbesperrdatei kann daher
> letztlich nur rechtmäßig sein, wenn die zu verhindernde Verarbeitung zu
> Werbezwecken auf Art. 6 Abs. 1 UAbs.1 lit. f DS-GVO beruht.**
> **Die betroffenen Personen müssen im Zusammenhang mit der Unterrichtung
> (Art. 12 Abs. 3 DS-GVO) über die Beachtung ihres Werbewiderspruchs auch über
> den Sinn und Zweck der Aufnahme ihrer Daten in eine Sperrdatei unterrichtet
> werden.**"

**Beleg + Zählweg.** Im Briefing: `Art. 21 Abs. 3` = **0** · `Art. 17` = **0** ·
`Art. 12 Abs. 3` = **0** · `Ziff. 5` = **0**; die 7 `Sperrdatei`-Treffer sind
sämtlich eigene Beschreibungen ohne Rechtsgrundlage (Positivkontrolle
`Sperrdatei` = 7 belegt, dass der Suchweg trifft).

**Warum das zählt.** Zweifach. Erstens hängt die Garantie, mit der das Briefing
die Abwägung stützt (lit. e), an derselben Rechtsgrundlage wie die zu prüfende
Verarbeitung — trägt lit. f die Impressumsnutzung nicht, trägt es die
Sperrdatei ebenso wenig. Das ist ein Zirkel, den das Briefing als Garantie
präsentiert. Zweitens ist der zweite Absatz die einschlägigste Fundstelle für
**§ 4a**: Er verlangt eine **Unterrichtung** des Betroffenen über die Aufnahme
in die Sperrdatei — während § 4a die eigene Lage mit „es gibt **keinen
Erklärenden, dem wir antworten könnten**" beschreibt. Die Aufsicht liefert die
Gegenposition zu genau diesem Satz.

**Disposition:** Ziff. 5.1 als Fundstelle in § 4a aufnehmen und die Frage dort
umformulieren: Wie ist die Unterrichtungspflicht nach Art. 12 Abs. 3 zu
erfüllen, wenn der Eintrag ohne Erklärung gegenüber uns entsteht? In § 1.3
lit. e den Zirkel offenlegen, statt die Sperrdatei unbedingt als Garantie zu
führen.

---

## M-7 · Die EuGH-Abwägungsfaktoren sind unvollständig übernommen — der einzige Faktor, der für uns spricht, fehlt

**Fundstelle:** § 2.3, Block „Zu Teilfrage 5 — EuGH … Rn. 56", insbesondere die
abschließende Aufzählung „Rn. 37 … Rn. 39 … Rn. 40 … Rn. 42/43".

**Sachverhalt.** Das Briefing zitiert Rn. 56 (byte-genau, Fundstelle korrekt,
Z. 1308) und verweist auf Rn. 55 („Der Erwartungshorizont der Betroffenen ist
bereits in Rn. 55 behandelt"). **Rn. 54** — die Randnummer, in der der EuGH die
Abwägungsfaktoren benennt — fehlt:

> „Third, as regards the balancing of interests …, that court must take account,
> in particular, of the reasonable expectations of the data subject **as well as
> the scale of the processing at issue and its impact on that person**."

**Beleg.** Rohbeleg Z. 1278 (Rn. 54, Marke auf Z. 1274). Im Briefing
`Rn. 54` = **0**, `Umfang` = **0**.

**Warum das zählt.** Übernommen sind mit Rn. 55 und Rn. 56 genau die beiden
Faktoren, die **gegen** das Vorhaben sprechen (Erwartungshorizont, fehlendes
Näheverhältnis); ausgelassen ist der dritte, der **dafür** spricht (Umfang und
Auswirkung: wenige hundert Adressen je Welle, ein Brief, kein Profiling, kein
Scoring, keine Weitergabe außer an den Versanddienstleister — alles in § 0 und
§ 1.3 dokumentiert). Bei einem Dokument, das ausdrücklich beansprucht, sich
nicht die günstigere Seite auszusuchen, ist die einseitige Auslassung in die
**un**günstige Richtung trotzdem ein Vollständigkeitsmangel — und sie kostet
das stärkste eigene Argument.

**Disposition:** Rn. 54 in die Aufzählung und in den Fundstellenblock
aufnehmen. Frage ergänzen, welches Gewicht Umfang und Auswirkung in unserer
Konstellation haben und ab welcher Skalierung sich das ändert.

---

## M-8 · Rn. 115 wird ohne seinen Verschleierungs-Rahmen zitiert; die Fragestellung wirkt dadurch enger, als der Urteilsaufbau hergibt

**Fundstelle:** § 2.2 Teilfrage 5; § 2.3, Tabellenzeile **Rn. 115**.

**Sachverhalt.** Zitat byte-genau, Fundstelle korrekt (Z. 358). Der Kontext
fehlt: Rn. 114 (Z. 356) leitet den Block ein mit „**Das auf Verschleierung
angelegte Bestreben der Beklagten** tritt außer in der Aufmachung des
Anschreibens und den darin gewählten Formulierungen in **weiteren Umständen**
zu Tage", und Rn. 115 beginnt „Diese liegen **zunächst** darin, dass …". Die
fehlende Herkunftsangabe ist im Urteil also **ein Indiz unter mehreren** für
eine als Gesamtbild gewürdigte Verschleierungsabsicht — nicht der tragende
Irreführungsgrund für sich.

**Warum das zählt.** Teilfrage 5 fragt, ob „damit die Irreführungsgefahr
ausgeräumt" ist, wenn wir die Herkunft angeben. Die Frage ist zwar offen
gestellt (das ist gut), setzt aber implizit voraus, die Herkunftsangabe sei der
Hebel. Nach dem Urteilsaufbau ist sie einer von mehreren. Was das Urteil
konkret als irreführend würdigt, steht in Rn. 99 (Z. 326): „Seiner Aufmachung
nach handelt es sich nicht um Werbung, sondern um schlichte Geschäftspost,
nämlich ein persönliches Anschreiben, verfasst auf nüchternem Geschäftspapier"
und der Verzicht auf „eine **Vorstellung** der Antragsgegnerin, wie man sie bei
dem werblichen Erstkontakt eines im angesprochenen Kundenkreis unbekannten
Unternehmens erwarten würde" (beide per `grep -o -F` = 1 Treffer im Volltext).
Das sind Merkmale, die ein normaler B2B-Werbebrief regelmäßig aufweist —
also Gestaltungsvorgaben für unser eigenes Anschreiben.

**Disposition:** Rn. 114 und Rn. 99 in § 2.3 aufnehmen. Teilfrage 5 erweitern:
Welche Gestaltungsmerkmale muss der Brief erfüllen, damit er nicht als
Geschäftspost erscheint — genügt die Herkunftsangabe, oder ist die
Absendervorstellung der eigentliche Punkt?

---

## M-9 · Die Alternativen-Tabelle in § 3.5 enthält eine Rechtsfolge im Indikativ auf genau der Frage, die gestellt wird

**Fundstelle:** § 3.5, Tabellenzeile **B**.

**Sachverhalt.** Die Spalte „Was er bedeutet" lautet: „Nur Kapitalgesellschaften
ohne Personennamen anschreiben, **damit die DSGVO für die Kontaktzeile nicht
greift** und damit auch **der § 3a-Anknüpfungspunkt entfällt**." Das ist zweimal
eine Rechtsfolge im Indikativ — und beide sind Gegenstand von Frage 1
(Personenbezug bei Kapitalgesellschaften, s. S-2) und Frage 3 (§-3a-Anknüpfung).
Das Briefing beansprucht in § 1.3, die Tabellenspalten enthielten „**nur
Tatsachen**, keine Bewertung"; für § 3.5 gilt dieselbe Erwartung, ohne dass sie
eingehalten wird.

**Disposition:** In den Konjunktiv setzen und die Prämisse ausweisen: „soll
erreichen, dass … — ob das trägt, ist Gegenstand von Frage 1 und Frage 3."

---

## M-10 · § 0 stuft die Plattform-Kaltakquise als „gesperrt bzw. streitig" ein, während die eigene Quelle sie als offene Rechtsfrage führt

**Fundstelle:** § 0, dritter Absatz.

**Sachverhalt.** Das Briefing schreibt gegenüber dem Anwalt: „nach unserer
eigenen Vorprüfung ist der **Werbebrief an den Betrieb der einzige Kanal**, der
ohne vorherige Einwilligung trägt. E-Mail-, Telefon- und Plattform-Kaltakquise
haben wir für uns als **gesperrt bzw. streitig** eingestuft." Die eigene Quelle
sagt zum Plattform-Kanal:

> „- **Die reine Kontaktanfrage ohne Werbetext** ist rechtlich nicht
> abschließend geklärt (keine Entscheidung gefunden, Suchraum benannt) — sie
> bleibt als **offene Rechtsfrage mit Restrisiko** markiert, **nicht als grüner
> Kanal**."

**Beleg + Zählweg.** `git show cca1919:handel/kanal-rechtsmatrix.md`, Z. 381,
per `grep -n -F "offene Rechtsfrage mit Restrisiko"` → **1 Treffer**. Im
Briefing: `LinkedIn` = **0**, `Kontaktanfrage` = **0**, `Plattform` = **1** (nur
die Selbsteinstufung).

**Warum das zählt.** „Gesperrt bzw. streitig" ist eine Erledigungs-Aussage; die
Quelle führt eine **offene** Rechtsfrage. Der Superlativ „der einzige Kanal, der
trägt" ruht auf dieser Glättung. Die Wirkung ist doppelt: gegenüber dem Anwalt
wird ein Prüfgegenstand zurückgehalten, und intern wird ein offener Punkt als
entschieden weitergereicht.

**Disposition:** Den Satz auf den Quellenstand zurückführen und entscheiden, ob
die Kontaktanfrage-Frage als weitere Teilfrage mitgeht (sie ist billig
mitzunehmen). Der Superlativ „der einzige Kanal" ist dann zu relativieren.

---

## M-11 · Die eingeräumten Grenzen in § 7.2 sind unvollständig — mindestens vier weitere Quellen sind nur zweiter Hand gelesen

**Fundstelle:** § 7.2 („Was wir NICHT erhoben haben"), 7 Spiegelstriche.

**Sachverhalt.** § 7.2 nennt namentlich als nur im LG-Volltext gelesen:
C-21/23, C-319/20, I ZR 186/17, I ZR 222/19, I ZR 223/19 sowie OLG Stuttgart
2 U 63/22 und die beiden Eckhardt-Aufsätze. Nach demselben Maßstab fehlen
mindestens:

| Fundstelle | Fundort im Urteil | Warum sie zählt |
|---|---|---|
| **OLG Düsseldorf, Beschl. v. 19.12.2024 – 20 W 37/24** | Rn. 111 | abweichende Auffassung des Berufungsgerichts (s. S-1) |
| **BGH, Urt. v. 03.03.2011 – I ZR 167/09 „Kreditkartenübersendung"** | Rn. 83 | trägt die Bedingung „sofort und unmissverständlich erkennbar", die das Briefing seinen „praktisch wichtigsten Absatz" nennt |
| **EuGH, Urt. v. 09.01.2025 – C-394/23 „Mousse"** | Rn. 82, Rn. 66 | trägt das vom Briefing in § 1.3a zitierte Widerspruchs-Argument |
| **Ziebarth, VuR 2024, 379 [383 ff.]** | Rn. 79 | Literaturbeleg der **strengeren** Seite; die Gegenansichts-Tabelle nennt nur die großzügigere Literatur |
| **BGH, Urt. v. 16.11.2006 – I ZR 191/03** | DSK-OH Ziff. 1.4.2 b | trägt den mitzitierten Sachbezogenheits-Satz |
| **DSK-OH, Fußnote 1** (Rohbeleg Z. 15) | — | ausdrückliche Geltungsgrenze der Hauptquelle: „Diese Orientierungshilfe thematisiert **nicht das Thema Adresshandel** …" — relevant, weil der entschiedene Fall ein Adresshändler-Fall ist |

**Warum das zählt.** Ein Dokument, das seine Schwächen ehrlich, aber
unvollständig einräumt, ist schwerer zu prüfen als eines, das schweigt: Die
sorgfältige Liste in § 7.2 signalisiert Vollständigkeit. Geprüft gehört die
**Vollzähligkeit** der eingeräumten Fälle, nicht nur ihre Richtigkeit — und sie
ist hier nicht gegeben.

**Disposition:** § 7.2 um die sechs Positionen ergänzen; die DSK-Fußnote
zusätzlich an der Stelle vermerken, an der die OH erstmals als Aufsichtsquelle
eingeführt wird (§ 1.3 b), nicht nur in der Grenzenliste.

---

# HINWEIS (6 von 22)

## H-1 · § 3.4 verankert die Größenordnung an den kleinsten Zahlen des Urteils; der Tenor nennt eine um drei Größenordnungen höhere

§ 3.4 letzter Spiegelstrich nennt „Streitwert **74.000 €**" und „Abmahnpauschale
**243,51 €**" ausdrücklich „zur Einordnung der Größenordnung". Der Tenor
(Rohbeleg Z. 76) enthält: „Für jeden Fall der Zuwiderhandlung wird der
Beklagten ein **Ordnungsgeld bis zu € 250.000**, ersatzweise Ordnungshaft, oder
Ordnungshaft bis zu sechs Monaten angedroht, wobei die Ordnungshaft an ihren
**organschaftlichen Vertretern** zu vollziehen ist." Dazu Rn. 249 (Z. 626): „Ein
unzulässiges Verhalten begründet eine tatsächliche Vermutung für die
Wiederholung **identischer und kerngleicher** Verstöße". Im Briefing:
`Ordnungsgeld` = 0, `250.000` = 0, `kerngleich` = 0.
**Disposition:** beide Angaben ergänzen — die Größenordnungs-Aussage ist sonst
einseitig nach unten. Alle Zahlen des Briefings selbst (74.000 als Summe aus
22.000 + 2×7.500 + 2×11.000 + 15.000; 243,51 in Tenor, Rn. 9 und Antrag VIII;
Kostenquote 1/5 zu 4/5) reproduzieren am Rohbeleg **exakt**.

## H-2 · Der Kontext von Rn. 267 entwertet die 243,51 € als Anker

Das Briefing führt die Abmahnpauschale als Ausnahmefall wegen
„überdurchschnittlich schwieriger" Fragen (Rn. 267, Zitat byte-genau,
Fundstelle korrekt, Z. 662). Der Folgesatz nennt den Grund: „Das ergibt sich
schon daraus, dass **im Zeitpunkt der Abmahnung unklar war, ob
Verbraucherschutzverbände nach Inkrafttreten der DSGVO befugt sind, Verstöße
gegen sie zu verfolgen.**" Diese Unklarheit ist seit Meta Platforms /
Lindenapotheke ausgeräumt — die Ausnahme dürfte sich heute nicht wiederholen,
was den Anker nach oben verschiebt. **Disposition:** Folgesatz ergänzen.

## H-3 · Tenor Nr. 5 (Art.-15-Auskunft) und die „bei einem Dritten"-Beschränkung von Nr. 4 kommen nicht vor

Der Tenor untersagt unter Nr. 5 die verspätete Auskunft nach Art. 15 DSGVO
(eigene Sicherheitsleistung 11.000 €); Rn. 237 (Z. 602) zeigt, dass der
Monatszähler bereits durch ein in einer Abmahnung **zitiertes**
Auskunftsverlangen ausgelöst wird und es keiner Fristsetzung bedarf. Im
Briefing: `Art. 15` = **0**. Ebenfalls unerörtert: Tenor Nr. 4 gilt nur für
Daten, die „**bei einem Dritten**" erhoben wurden — ob eigene Recherche auf
einer Unternehmenswebsite darunter fällt, ist eine offene Reichweitenfrage.
**Disposition:** beide Punkte in § 2.2 als Teilfragen aufnehmen; der
Art.-15-Antwortprozess ist zudem ein Bau-Posten neben der Sperrdatei.

## H-4 · Die B2B-Brücke, nach der Frage 3 sucht, steht im Urteil selbst

Rn. 141/142 (Z. 410/412) qualifizieren Artt. 5 Abs. 1 lit. a, 6 Abs. 1 UAbs. 1
DSGVO als **Marktverhaltensregelungen**, die „auch den Schutz der betroffenen
Person **in ihrer Stellung als Marktteilnehmer**" bezwecken — und § 5a Abs. 1
UWG erfasst nach seinem Wortlaut (Rn. 172, Z. 472) ausdrücklich den „sonstigen
Marktteilnehmer". Im Briefing: `Marktverhaltensregel` = 0, `Rn. 141`/`Rn. 142`
= 0. **Disposition:** in § 3.3 a aufnehmen; Frage 3.2 Nr. 1 wird dadurch
präziser stellbar. — Verwandt, ebenfalls fehlend: **Art. 5 Abs. 1 lit. a DSGVO**
ist im Urteil durchgehend selbständiger Verstoßgrund neben Art. 6 (Rn. 137/147,
vom Briefing wörtlich zitiert) und auch im EuGH-Tenor-Stichwort und in DSK
Ziff. 4.4 präsent — das Briefing behandelt die Sache ausschließlich als
Art.-6-Abs.-1-lit.-f-Frage.

## H-5 · Vier weitere DSK-Ziffern mit unmittelbarem Betriebsbezug sind nicht ausgewertet

Aus der Gliederung, generisch über `grep -n "^4\.[0-9]"` und das
Inhaltsverzeichnis (Z. 22–56) erhoben, nicht über eine Namensliste:
**Ziff. 2.2** (s. S-4) · **Ziff. 4.6** „Zulässige Nutzungsdauer von Kontaktdaten
… für Zwecke der Direktwerbung" — Maßstab für die vom Briefing als Garantie
geführte „dokumentierte Löschfrist" · **Ziff. 5.2/5.3** — Prüfmaßstab für
„optisch abgesetzt" und Empfehlung, den Hinweis bei **jeder** Werbesendung
anzubringen (das Briefing legt ihn auf den **ersten** Brief fest) ·
**Ziff. 5.4** — Widersprüche sperren neue **Druckaufträge**, formlose
Widersprüche sind unverzüglich zu bearbeiten. **Disposition:** Die Ziffern
sichten und entscheiden, welche als Fundstelle bzw. Teilfrage mitgehen; die
Sperrdatei-Zusage „Abgleich vor jedem Versand" am Maßstab „vor jedem
Druckauftrag" prüfen.

## H-6 · Kleinere Außenwirksamkeits- und Belegstufen-Punkte

- **Interne Bezeichner oberhalb des löschbaren Blocks.** Die Anweisung „vor dem
  Versand entfernen" gilt ausweislich der Überschrift nur für den
  **Statusblock** (ab Z. 8). Zeile 3 trägt aber „**Runde:** R15-A (Session Ben
  Beckman)" und „**Strang:** MKT-HANDEL" außerhalb davon. Ein Rollenname aus
  dem internen Namensschema auf einem Anwaltsbriefing ist erklärungsbedürftig.
  **Disposition:** Löschanweisung auf Z. 3–4 ausdehnen. Ebenso `R14-B` in § 2.3
  (einziger nicht in Klartext aufgelöster Kurz-Anker).
- **„Randnummern sind sprachfassungsgleich"** (§ 2.3) ist eine Entwarnung ohne
  Quelle im Satz — und nach eigener Angabe nicht überprüfbar, weil die deutsche
  Fassung „über den amtlichen Kanal nicht abrufbar" ist. **Disposition:** als
  Annahme kennzeichnen oder Beleg nennen.
- **Zwei Behörden-Domains ≠ zwei Lesewege.** § 1.3 b und § 7.1 führen die
  md5-Identität beider DSK-Abzüge als Stärkung. Ich habe sie bestätigt
  (`md5sum` beider Dateien identisch: `f53cbe4ac13874e9e991a2194f05116f`) —
  gerade deshalb stützt sie die **Fassungsangabe**, nicht die Negativbefunde in
  § 3.3 c, die über **einen** Text laufen. **Disposition:** Geltung des
  Zweitkanals im Satz eingrenzen.
- **n8n-Firmierung aus einer Quelle.** „n8n GmbH, Novalisstr. 10, 10115 Berlin,
  HRB 212509 B" steht in § 4.1 im Fließtext ohne Belegstufe; die
  Belegstufen-Tabelle in § 4.3 stuft die Impressumszeile als „Selbstauskunft"
  ein. Gemessen: beide Angaben stehen ausschließlich in
  `n8n-io-impressum.html`. **Disposition:** Registerauszug oder zweite
  unabhängige Stelle, oder Belegstufe an die Angabe selbst schreiben.
- **Der einzige Negativbefund ohne Zählweg** ist der in § 4.1: „eigener Suchlauf
  über alle vorliegenden Herstellerquellen; einziger Ping-Treffer ist der
  zitierte Satz". Jede andere Zahl im Briefing trägt ihren Zählweg. **Ich habe
  ihn nachgemessen und er hält:** rekursive Wortgrenzen-Suche
  `grep -r -o -i -E "(^|[^a-z])ping([^a-z]|$)"` über alle **63** Dateien in
  `..\heypensio\quellen-n8n-lizenz\` ergibt Treffer in genau drei Dateien —
  `n8n-io-pricing.html` (4), `n8n-io-pricing.txt` (2, beide im zitierten Satz)
  und `r43c-version-2.29-beleg.json` (1, aufgelöst am Kontext: „Release database
  ping connection when the health check times out", ein Changelog-Eintrag ohne
  Lizenzbezug). Positivkontrolle im selben Lauf: `license` trifft in **41** der
  63 Dateien; Gegenprobe `Zahnarztstuhl` = 0. Eine reine Teilwortsuche ohne
  Wortgrenze liefert dagegen Treffer in ~30 Dateien (`prototyping`, `mapping`,
  `scoping`) — der Befund hängt also am Zählweg. **Disposition:** den Zählweg
  samt Positivkontrolle in § 4.1 nachtragen.

---

# Was ich geprüft habe und **nicht** beanstande

Damit die Befundliste nicht als Gesamturteil gelesen wird:

- **Alle 21 Zahlen am LG-Volltext reproduzieren exakt** unter dem angegebenen
  Zählweg: `DSGVO` 109 · `UWG` 148 · `§ 3a UWG` 21 · `§ 3 Abs. 1 UWG` 5 ·
  `§ 7 UWG` **0** · `Werbung` 14 · `§ 7` 1 · `vorläufig vollstreckbar` 1 ·
  `Urteil` 118 cs / 144 ci · `gemäß` 80 · `ä` 911 · `rechtskr` 0 ·
  `berufung|rechtsmittel|rechtskräftig|rechtskraft|revision` (ci) **0** ·
  `Art. 5 Abs. 1 Buchstabe a` 0 gegen `Artt. 5 Abs. 1 Buchstabe a` **13** ·
  `kein Mitbewerber` 0 · `Kläger` 119 · Streitwert-Summenprobe
  22.000+7.500+7.500+11.000+11.000+15.000 = **74.000** ✓. Ich habe auch den
  Teilworttreffer `§ 7` einzeln aufgelöst — er ist tatsächlich der einzige und
  lautet „§ 709 S. 1 und S. 2 ZPO", wie das Briefing angibt.
- **Die Positivkontrollen des Rechtskraft-Laufs sind vorbildlich gebaut:** Für
  ein Negativ mit Umlaut (`rechtskräftig`) ist `ä` = 911 als
  Zeichenkanal-Kontrolle mitgeführt, dazu die Teilwortprobe `rechtskr` = 0 und
  für `§ 7 UWG` die mechanikspiegelnde Gegenprobe `§ 7` = 1. Das ist die
  Bauform, die M-1 fehlt.
- **Jedes geprüfte Zitat ist byte-genau**, einschließlich der im Original
  fehlerhaften Stellen, die das Briefing korrekt als solche kennzeichnet
  („nachkommen ist", „Mittbewerbern", „Artt." mit Doppel-t).
- **Art. 6 Abs. 4 DSGVO lit. a–e** stimmt Wort für Wort mit der amtlichen
  Fassung (Rohbeleg Z. 4629–4641 ff.).
- **UGPRL Art. 3 Abs. 1, Art. 3 Abs. 4 und ErwG 14 letzter Satz** stimmen; die
  Aussage „in beiden Fassungen wortgleich" für Art. 3 Abs. 4 ist verifiziert
  (Ursprungsfassung Z. 105, konsolidiert Z. 80); die Berichtigung „von
  Unternehmen gegenüber Verbrauchern" ist korrekt als solche ausgewiesen
  (Marken ►C1/◄ im konsolidierten Abzug).
- **EuGH Rn. 56** ist byte-genau und liegt tatsächlich auf Rn. 56 (Marke Z. 1304,
  Text Z. 1308); der deutsche Tenor („absolut notwendig", „rechtmäßig") stimmt
  mit der Amtsblatt-Mitteilung.
- **DSK Ziff. 1.5 ist tatsächlich vollständig zitiert** („im Original zwei
  Absätze" trifft zu), ebenso **Ziff. 4.2** (alle fünf Sätze).
- **Auftragstreue:** 4 von 4 Fragen; 20 von 20 Pflichtteilen als eigene
  Abschnitte vorhanden (`### n.1 Sachverhalt` bis `### n.5
  Entscheidungsalternativen`, je 1 Treffer). Kurz-IDs sind bis auf `R14-B`
  durchgehend im Klartext geführt; `O-11` wird ausdrücklich als unbrauchbarer
  Bezeichner benannt statt verwendet.
- **Außenwirksamkeit:** keine ASCII-Transliteration (die `ue`/`oe`-Treffer sind
  sämtlich echte Wörter wie „Quelle", „zuerst", „neues" sowie ein Dateiname);
  Mojibake-Marker `Ã`/`â€` = **0**; Platzhalter durchgehend und ohne erfundene
  Firmierung (`[KANZLEI]` 1, `[FIRMIERUNG — offen, F-7]` 3, `[NAME]`,
  `[ANSCHRIFT]` je 1); die einzige genannte Firmierung ist die eines Dritten
  (n8n GmbH) und am Impressum belegt.
- **Tabellen:** 13 Blöcke, **13 von 13 spaltenkonsistent** — s. dazu die
  Werkzeugkorrektur unten.
- **Der schwerste denkbare Vorwurf trifft nicht zu:** Das Briefing nimmt in den
  eigentlichen Fragestellungen (§§ 1.2, 2.2, 3.2, 4.2) **keine** Antwort vorweg.
  Die drei Vorwegnahme-Befunde S-2, M-9 und M-10 sitzen sämtlich außerhalb der
  Fragenblöcke — in Alternativen-Tabellen und in der Einleitung.

---

# Grenzen meines Laufs

1. **Ich habe den LG-Volltext nicht selbst vollständig gelesen.** Ich habe
   gezielt rund 40 Randnummern plus Tenor geöffnet; die Volllektüre 1–696 lag
   bei einem Nebenläufer. Jeder von dort übernommene Fund ist von mir am
   Rohbeleg nachgemessen — aber ich kann **nicht** ausschließen, dass in den von
   mir nicht geöffneten Randnummern weiteres Erhebliches steht, das auch der
   Nebenläufer nicht gemeldet hat. Gleiches gilt für die Bestandsdokumente
   (`kanal-rechtsmatrix.md`, `listenbau-regelwerk.md`,
   `interessenabwaegung-o8.md`, `sperrdatei-struktur.md`, `projektquelle-mkt.md`)
   — dort habe ich **nur** die gemeldeten Fundstellen verifiziert.
2. **Zwei gemeldete Funde habe ich nicht 1:1 reproduziert.** Der eine
   (Nachfass-Anruf, `listenbau-regelwerk.md`) scheiterte an meinem
   Exact-String-Grep, weil die Passage über einen Zeilenumbruch läuft; per
   `grep -i "nachfass"` ist sie in Z. 701–705 belegt — das war mein
   Werkzeugfehler, nicht ein Meldefehler. Der andere Meldeblock zu
   § 35a GmbHG (H-nicht vergeben) ist am Bestand verifiziert (Z. 708), aber ich
   habe ihn nicht als eigenen Befund geführt, weil die Quelle ihn als
   Betriebsregel mit gewählter sicherer Variante führt und nicht als offene
   Frage an den Anwalt. Diese Einordnung ist mein Urteil, nicht die Aussage der
   Quelle — sie ist angreifbar.
3. **Eine Werkzeugkorrektur an meinem eigenen Lauf.** Meine
   Tabellen-Spaltenprüfung meldete zunächst Block 4 (§ 2.1, Z. 303) als
   defekt: 4 Felder statt 3. Prüfung am Rohtext ergab
   `` | `DSGVO` | 109 | `grep -o "DSGVO" <datei> \| wc -l` | `` — der Pipe ist
   korrekt als `\|` maskiert, wie es die Doku-Hygiene-Regel verlangt. Mein
   `awk -F"|"` sieht die Maskierung nicht. **Das war ein Werkzeugfehler, kein
   Befund**; korrigiert lautet das Ergebnis 13 von 13 konsistent. Ich habe die
   Tabellen nicht gerendert, sondern nur die Feldzahl gezählt — ein
   Render-Defekt anderer Art (z. B. fehlende Trennzeile) wäre mir entgangen.
4. **Nicht prüfbar, ausdrücklich nicht zu „unauffällig" geglättet:** Ob
   inhaltlich richtig ist, was das Briefing als Rechtslage referiert, habe ich
   **nicht** geprüft — ich habe ausschließlich Quellentreue, Kontexttreue,
   Zählwege und Vollständigkeit gemessen. Ob die Rechtskraft des LG-Urteils
   inzwischen eingetreten ist, ob eine Berufung läuft und was in juris /
   beck-online steht, konnte ich mit meinen Mitteln ebenso wenig ermitteln wie
   das Briefing selbst; das bleibt „nicht erhoben".
5. **Die Rohbelege selbst habe ich als gegeben genommen.** Ich habe nicht
   nachgeprüft, ob die Abzüge dem heutigen Stand der jeweiligen Quelle
   entsprechen (die DSK-Abzüge sind vom 12.08., die UWG-/UGPRL-Abzüge vom
   14.08.2026). Ein Fassungswechsel an der Quelle wäre mir entgangen.

---

# Die beiden Pflichtfragen

## 1. Welche Verfälschung hätte mein Verfahren NICHT gefangen?

Vier Klassen, konkret:

- **Eine erfundene oder verschobene Randnummer bei richtigem Zitat in einer
  Quelle, die ich nur gezielt geöffnet habe.** Ich habe die Rn.-Formel
  verifiziert und jedes geprüfte Zitat an seiner behaupteten Zeile gefunden.
  Hätte das Briefing aber ein echtes Zitat aus Rn. 200 als „Rn. 87" ausgegeben
  und ich hätte diese Stelle nicht geöffnet, hätte mein Verfahren es nur
  gefunden, wenn ich zusätzlich einen **rückwärtigen** Lauf gemacht hätte
  („welche Zeile trägt dieses Zitat?"). Für die geprüften Zitate habe ich das
  getan (`grep -o -F` über die Gesamtdatei), für ungeprüfte nicht.
- **Eine sachlich falsche Rechtsaussage in korrekt belegter Verpackung.** Wenn
  das Briefing aus einem byte-genau zitierten, richtig zugeordneten und im
  Kontext gedeckten Satz eine juristisch **falsche** Schlussfolgerung zieht,
  fängt mein Verfahren das nicht — ich messe Quellentreue, nicht
  Rechtsrichtigkeit. Genau deshalb ist S-2 nur deshalb aufgefallen, weil die
  eigene Quelle den Vorbehalt dokumentiert; hätte es diesen internen Beleg nicht
  gegeben, wäre die Aussage durchgegangen.
- **Eine Auslassung in einer Quelle, die ich nur gezielt gelesen habe.** Die
  Befunde S-4, M-6 und H-5 habe ich nur, weil ich die **Gliederung** der DSK-OH
  generisch erhoben habe. Für den EuGH-Volltext und den DSGVO-Volltext habe ich
  das nicht getan — dort habe ich keinen Gliederungs-Vollzähligkeitscheck
  gefahren, sondern mich auf gezielte Läufe und den Nebenläufer verlassen. Eine
  Auslassung in einem EuGH-Abschnitt, den weder ich noch er geöffnet hat, wäre
  unentdeckt geblieben.
- **Eine Verfälschung in den Bestandsdokumenten selbst.** Das Briefing ist
  gegen die Rohbelege geprüft; die Bestandsdokumente habe ich nur punktuell
  angefasst. Stünde in `kanal-rechtsmatrix.md` eine falsche Aussage, die das
  Briefing getreu übernimmt, hätte ich sie nur zufällig gefunden.

## 2. Hätte ich diese Funde auch ohne den Kategorien-Hinweis gefunden? — Fund für Fund

| Fund | Ohne Hinweis? | Ehrliche Einschätzung |
|---|---|---|
| **S-1** OLG Düsseldorf 20 W 37/24 | **Ja** | Gefunden beim Öffnen von Rn. 111 zur Kontextprüfung eines anderen Punktes. Die Zitatachse allein hätte gereicht — Rn. 111 lag im Nachbarbereich der ohnehin geprüften Rn. 115. |
| **S-2** „kein Personenbezug" in Weg C | **Nein, nicht in dieser Schärfe** | Die Vorwegnahme in der Tabelle wäre mir wohl aufgefallen. Dass die **eigene Quelle** sie als „vertretbar, nicht gesichert" mit dokumentiertem Gegenargument führt, kam aus dem ausdrücklich beauftragten Bestands-Rückwärtslauf. Ohne ihn hätte ich „Wertung in der Alternativen-Spalte" gemeldet — ohne den Beleg, der daraus einen SCHWER-Befund macht. |
| **S-3** Rn.-134-Kontext | **Ja** | Der Auftrag verlangte ohnehin, bei jeder Randnummer den Absatz davor und danach mitzulesen. Hier stand die Relativierung sogar in derselben Randnummer. |
| **S-4** DSK Ziff. 2.2 Monatsfrist | **Teilweise** | Ich bin über die Gliederung darauf gestoßen — aber die Gliederung habe ich nur erhoben, weil M-1 (die 26-statt-21-Abweichung) mich ins Inhaltsverzeichnis geführt hat. Der Zahlen-Prüfauftrag hat den Fund also mitgetragen; der Kategorien-Hinweis hat ihn zusätzlich abgesichert. Ohne beides: unsicher. |
| **S-5** GF-Satz ohne Vertraulichkeitsrahmen | **Ja** | Prüfauftrag 6 fragt wörtlich danach. Aber auch ohne ihn wäre die Kombination „Empfänger noch nicht bestimmt" + „Kostenrahmen erbeten" + dieser Satz beim Lesen des Statusblocks aufgefallen. |
| **M-1** `Direktwerbung` 26 statt 21 | **Ja** | Reine Nachrechnung nach dem angegebenen Zählweg. Kein Hinweis nötig. |
| **M-2** `Mitbewerber` 9 statt 8 | **Ja** | Ebenso — und der Auftrag nennt „Teilworttreffer" ausdrücklich, was geholfen hat; die Tippfehlerform hätte ich aber ohnehin gesucht, weil das Briefing sie selbst zwei Abschnitte vorher kennzeichnet. |
| **M-3** Ziff. 4.1 abgeschnitten | **Ja** | Beim Aufschlagen der Ziffer im Rohbeleg unmittelbar sichtbar. |
| **M-4** Ellipse im B2B-Zitat | **Ja** | Klassische Zitatprüfung. |
| **M-5** Rn.-129-Elision | **Ja** | Fiel beim Vollständig-Lesen der Randnummer auf. |
| **M-6** Sperrdatei-Zirkel (Ziff. 5.1) | **Nein** | Kam vollständig aus dem beauftragten Rückwärtslauf. Ich hätte Ziff. 5 der DSK-OH ohne den Auftrag nicht geöffnet — das Briefing zitiert die OH nur aus Ziff. 1 und 4. |
| **M-7** EuGH Rn. 54 | **Wahrscheinlich ja** | Der Auftrag verlangte, bei Rn. 56 den Absatz davor und danach zu lesen; Rn. 54 liegt zwei Absätze davor. Ich habe 1274–1345 gelesen, also den Bereich getroffen. Aber ohne die ausdrückliche Frage „was sagt der EuGH über die Abwägung, das fehlt?" hätte ich Rn. 54 womöglich nur als Kontext abgehakt, statt die Auslassung zu melden. |
| **M-8** Rn.-115-Rahmen (Rn. 114 „Verschleierung") | **Ja** | Direkt aus der Nachbarabsatz-Regel. |
| **M-9 / M-10** Wertungen in Tabellen, Plattform-Glättung | **M-9 ja, M-10 nein** | M-9 ist beim Lesen sichtbar. M-10 brauchte den Bestands-Rückwärtslauf, um die Quellenfassung dagegenzuhalten. |
| **M-11** Grenzen unvollständig | **Ja** | Ergab sich aus den beim Zitatprüfen mitgelesenen Fundstellen (Kreditkartenübersendung in Rn. 83, Mousse in Rn. 82). Der Prüfauftrag „Vollzähligkeit der eingeräumten Grenzen" hat es zugespitzt, aber die Fundstellen lagen ohnehin auf dem Weg. |
| **H-1 bis H-5** | **gemischt** | H-1 (Ordnungsgeld) und H-3 (Tenor Nr. 5) hätte ich beim Tenor-Lesen ohnehin gefunden — ich habe den Tenor vollständig gelesen. H-2 (Rn.-267-Folgesatz) ja. H-4 und H-5 kamen aus dem Rückwärtslauf. |
| **H-6** Außenwirksames | **Ja** | Mechanische Prüfungen. |

**Bilanz, unbequem formuliert:** Von 22 Befunden hätte ich **17** auch ohne den
Kategorien-Hinweis gefunden — im Wesentlichen alles auf der Zitat-, Zahlen- und
Kontextachse. Die **fünf**, die ich ohne ihn nicht oder nicht in dieser Schärfe
gehabt hätte (S-2, M-6, M-10 sowie anteilig S-4 und M-7), sind zugleich die,
die am weitesten von dem wegführen, was das Briefing selbst thematisiert — und
zwei davon (S-2, M-6) treffen tragende Aussagen. Das ist der empirische Beleg
dafür, dass der Rückwärtslauf von der Quelle her eine **eigene** Fangkategorie
ist und nicht durch noch sorgfältigeres Vorwärtsprüfen ersetzt werden kann:
Wer vom Briefing ausgeht, findet, was falsch ist — nicht, was fehlt.
