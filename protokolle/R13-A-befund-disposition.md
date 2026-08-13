# R13-A — Disposition ALLER Prüferbefunde (16 von 16)

**Session:** R13-A (Ben Beckman), 13.08.2026 nachmittags
**Prüferprotokoll:** `protokolle/R13-A-pruefer.md`
**Geprüfter Stand:** `d90edb3` · **Disposition eingearbeitet in:** den
Folgecommit (Hashes in der Abschlussmeldung)

> **Nenner: 16 von 16 disponiert — 16 repariert, 0 verworfen, 0 an
> einen Träger abgegeben.** Kein Befund blieb liegen; „Hinweis" ist
> eine Schwere-Angabe, keine Erledigungs-Kategorie (L-13).
>
> ⚠️ **Jede Reparatur ist am ROHBELEG gemessen, nicht am Prüfertext**
> (L-19). Wo der Befund von einer fremden Quelle abhing, steht die
> eigene Nachmessung in der Spalte „Nachgemessen".

## Zusammenfassung nach Schwere

| Schwere | Anzahl | repariert | verworfen | Träger |
|---|---:|---:|---:|---:|
| **schwer** | 1 | 1 | 0 | 0 |
| **mittel** | 8 | 8 | 0 | 0 |
| **Hinweis** | 7 | 7 | 0 | 0 |
| **Summe** | **16** | **16** | **0** | **0** |

---

## Disposition im Einzelnen

### P-01 — schwer — „Z-4 … nicht übergeben" im ✅-AA-6-Kasten

**Nachgemessen (nicht geglaubt):** Zwei eigene Messungen am Objekt.
(a) `zentrale\stb-termin-fragenliste-2026-08.md` Frage 13 — **(b)
führt Z-4** („Z-4 Preisänderung im laufenden Vertrag"), von R13-A
selbst gelesen. (b) `git show d90edb3:handel/preismodell-optionen.md`
§ 10 sagt zu Z-4 **„nachrangig — nicht erledigt, aber ohne Auslöser"**,
das Wort „nicht übergeben" steht dort **nicht**. **Der Prüferbefund
trifft doppelt zu: Aussage falsch UND Fundstelle falsch.**

**Disposition: REPARIERT — gestrichen, nicht abgeschwächt** (L-17: Der
Reflex bei einer falschen Entwarnung/Behauptung ist das Abschwächen;
richtig ist meist das Streichen). Der Satz ist ersatzlos entfallen; an
seine Stelle tritt die **belegte** Fundstelle aus § 10 („IST eine
solche Preisänderung, sobald sie den ersten Bestandskunden trifft"),
die den Z-4-Charakter tatsächlich trägt. Sichtbarer
Reparatur-Unterkasten im ✅-AA-6-Kasten.

**Warum der Fehler entstand — die Klasse, nicht die Ausrede:** Der
Zusatz stammte aus meinem Gedächtnis des Bestands („Z-Punkte sind nicht
übergeben"), nicht aus einer Messung. Genau zwischen dem Lesen des
Bestands und dem Schreiben des Kastens hatte **dieselbe Session** an
drei anderen Stellen festgestellt, dass der Bestand überholt ist.
**Eine Bestandsaussage in neu geschriebenem Text braucht dieselbe
Messung wie eine Zahl.**

### P-02 — mittel — Gelöschte Kopfkasten-Überschrift der Preisliste

**Nachgemessen:** `git diff --numstat d90edb3~1 d90edb3` → Preisliste
**198 Einfügungen / 1 Löschung**; die eine Löschung ist die Zeile
`> ## ⚠️ Status und vier Vorbehalte (bitte zuerst lesen)`. **Befund
bestätigt** — mein Edit hatte die Überschrift als Teil des
`old_string` ersetzt, statt sie im `new_string` wiederherzustellen.

**Disposition: REPARIERT.** Die Überschrift steht wieder an ihrem
Platz, der Nachtrag ist als eigener Blockquote davor abgesetzt; die
beiden Verweise auf „die vier Vorbehalte unten/oben" treffen wieder ihr
Ziel. Reparatur-Unterkasten gesetzt.

**Bemerkenswert:** Der Prüfer fand das **nicht am Text**, sondern über
die **Löschungszählung** (1 von 199 Zeilen). Bei 714 Einfügungen liest
niemand die Löschungen — außer, er zählt sie.

### P-03 — mittel — „Nur diese beiden Formulierungen sind überholt"

**Nachgemessen:** § 2, Lesart-A-Tabelle, Zeile „Konsequenz Terminpfad"
trägt „die Zentrale-Zulieferung (**bisher nicht übergeben**) wird
dringlicher" — ohne Vorwärtsverweis, während der ✅-Kasten darunter für
denselben Sachverhalt „bereits ERLEDIGT" sagt. **Bestätigt.**

**Disposition: REPARIERT.** Das Wort **„Nur" gestrichen** (es machte
aus einer unvollständigen Liste eine Vollständigkeitsaussage), die
Stelle als **(c)** ergänzt, und die korrigierte Liste erhebt
ausdrücklich **keinen** Vollständigkeitsanspruch mehr. Der eigene
§ 1-Nachtrag warnt vor genau dieser Klasse — sie hat trotzdem
zugeschlagen.

### P-04 — mittel — Derselbe Lesevorgang mit zwei Belegstufen (② vs. 3× ①)

**Nachgemessen an der Legende beider Dokumente:** ① = „An der
**Primärquelle** selbst erhoben"; ② = „Aus einem **eigenen, geprüften
Repo-Dokument** übernommen". Die StB-Fragenliste ist ein Repo-Dokument
des Nachbar-Repos → **②**. **Befund bestätigt, die höhere Stufe war
dreimal vergeben.**

**Disposition: REPARIERT** an allen vier Stellen (AA § 2, AA
§ 7-Nachtrag, PL § 4-Nachtrag, PL § 6-Nachtrag) — einheitlich **②
BESTAND**, und der **Leseweg** („von R13-A selbst am Original
gelesen") steht jetzt **getrennt** daneben. Das ist die zweiachsige
Führung, die der Baustein `quellen-beschaffung` verlangt (Leseweg ≠
Quellenart); sie war hier zusammengefallen.

### P-05 — mittel — Erfundener Terminanker im ✅-AA-6-Kasten

**Nachgemessen:** Protokoll AA-6 lautet vollständig „fester
Prozentsatz (Staffel bleibt spätere Option — Wechsel vor dem ersten
Bestandskunden frei, danach Z-4-Fall)". **Vom November-Anker steht dort
nichts.** Briefing-Terminposten führt „Fr 13.11. November-Anker …
(**Rückwärtsrechnung** MKT R08-A)", CLAUDE.md „erster zahlender Kunde
**bis** Mitte November" — ein **Ziel**, kein Zeitpunkt, zu dem der
erste Bestandskunde feststeht. **Bestätigt.**

**Disposition: REPARIERT — Satz gestrichen.** In einem ✅-Kasten, der
User-Entscheide führt, hat eine ④-Folgerung dieser Session nichts
verloren — erst recht nicht in Fettschrift und ohne Belegstufe.
**Zweiter Teil ebenfalls repariert:** Die Absatzüberschrift
„**Ausdrücklich mitentschieden** ist das Wechsel-FENSTER" ist
zurückgenommen — ob der Klammerinhalt des Protokolls User-Äußerung
oder Anmerkung der Briefing-Session ist, ist an der Quelle **nicht
unterscheidbar**.

### P-06 — mittel — „ganz überwiegend je Kunde/Projekt" ohne Zählweg

**Selbst nachgezählt an der Scope-Spalte § 5.1 (12 Zeilen):**
ausdrücklich **objektbezogen 2** (M4 „je Website", M3 „je Haus") ·
ausdrücklich **projekt-/kundenbezogen 3** (W1, W4, W6 — **W4/W6
gehören zur Klasse B**, die § 5.2 ausschließt) · **ohne Bezugsangabe
7**. **Befund bestätigt: „ganz überwiegend" ist unbelegt**, und zwei
Zeilen sagen das Gegenteil.

**Disposition: REPARIERT.** Die Mengenaussage ist durch den **Zählweg
und den richtigen Befund** ersetzt: Der Bezug ist bei **7 von 12 gar
nicht angegeben**. Die Folgerung bleibt — als ④ und jetzt mit
belegter Prämisse.

**Klasse:** Die ④-Marke stand an der **Folgerung**, nicht an der
**Prämisse**. Die Richtung war nicht eigennützig (das Argument spricht
gegen die eigene Spanne) — das macht sie nur schwerer auffindbar.

### P-07 — mittel — „unsere 2.000 €"

**Nachgemessen an der eigenen Regel derselben Datei (§ 3):** „Ein
plausibel aussehender Beispielbetrag … würde beim nächsten
Weiterverwenden als Preis gelesen — genau der Weg, auf dem in diesem
Projekt schon einmal eine unbelegte Zahl zum Anker wurde."
**Bestätigt:** Es wäre der erste konkrete eigene Preisbetrag der Datei
gewesen, ohne ④ an der Zahl, genau in der Mitte der Arbeitshypothese.

**Disposition: REPARIERT — Zahl gestrichen**, das Argument ohne
Beispielbetrag formuliert. Die Regel ist an eine Tabelle adressiert;
die Gefahr ist im Fließtext dieselbe.

### P-08 — mittel — Nachzieh-Bedarf in der Quelle nur zur Hälfte gemeldet

**Nachgemessen:** `git show d90edb3:handel/preismodell-optionen.md`
§ 11 ✅-E-2 führt weiterhin „Die **Höhe des Rabatts (Prozentsatz oder
Staffel)** ist **offen**". **Bestätigt** — die FORM ist seit AA-6
entschieden. Und beide Prüfgegenstände tragen eine **Vorrangklausel**
(„bei Widerspruch gewinnen die Quellen"), die den Entscheid für jeden
Leser wieder umkehrt.

**Disposition: REPARIERT (Meldung vervollständigt).** Der **zweite
Nachzieh-Bedarf** ist jetzt ausdrücklich als Nebenbefund an die
Leitsession ausgewiesen, mit dem Hinweis, dass er der **gefährlichere**
ist. Der Edit selbst liegt außerhalb des R13-A-Scopes. Der schwächere
Nachbarfall (Modulfrage A2) ist benannt, aber als „Quelle insoweit
nicht falsch" eingeordnet.

**Klasse:** L-25 / MKT-R12-P-04, Spiegelrichtung — wer in einer
ABLEITUNG präzisiert, zieht die QUELLE nach. Vorwerfbar war nicht das
Unterlassen des Edits, sondern dass **eine unvollständige Meldung wie
eine vollständige Liste aussah**.

### P-09 — mittel — „diese Session hat nichts entschieden"

**Nachgemessen an den eigenen Kästen:** Die AA-3-„Konsequenz bis zur
Klärung" (Sammelzeile bleibt geschlossen) **ist** eine gesetzte
Arbeitsregel dort, wo das Protokoll schweigt — korrekt gekennzeichnet,
aber eine Festlegung. **Bestätigt.**

**Disposition: REPARIERT.** Die Entwarnung ist durch zwei
ausdrückliche Einschränkungen ersetzt (AA-3-Arbeitsregel · gestrichener
P-05-Zusatz). **Nenner-Unschärfe mitrepariert:** „alle sieben
Antworten" stand neben „8 von 9" — jetzt steht der Bezug dabei
(7 AA-Punkte + S4-Klärfrage = 8 Antworten; 9. Punkt AA-4 offen).

### P-10 — Hinweis — Auslöser als „Träger" in der Zeiger-Tabelle

**Nachgemessen:** Der ✅-AA-7-Kasten sagt „Der Prüfposten braucht einen
Träger, **sonst verfällt er**. **Auslöser** ist der Rücklauf von E-6";
die § 7-Zeile schrieb „**Träger des Aufrufs:** E-6-Rücklauf".
**Bestätigt** — die Tabelle ließ den Posten versorgt aussehen.

**Disposition: REPARIERT.** Die Zeile unterscheidet jetzt: **Auslöser
E-6-Rücklauf, Träger nicht benannt.**

### P-11 — Hinweis — Zitat der StB-Frage 13 (f) mit veränderter Interpunktion

**Nachgemessen am Original:** „… als EIN Betreiber
**(**Gesellschafter-Identität? Familienverbund? faktische
Geschäftsführung?**)** — der Rabatt braucht …". Meine Fassung hatte
die Klammer zu einem Gedankenstrich umgeformt und ein „…" gesetzt, wo
nichts ausgelassen war. **Bestätigt.**

**Disposition: REPARIERT** an beiden Fundstellen — Zitat jetzt
**wortgleich mit Klammern**; in der Preisliste zusätzlich
vervollständigt (dort war die Klammer mit „…" weggekürzt).
Wörtlich gesetzte Zitate tragen ihren Anker an der Rohquelle **in
ihrer Form** (L-01-Nachbarschaft).

### P-12 — Hinweis — Herkunftsvermerk auf (f) bezogen

**Nachgemessen:** Frage 13 trägt im **Kopf** „NEU 13.08.,
MKT-R12-Postkorb" (deckt (a)–(e)); **(f)** trägt einen **eigenen**:
„NEU 13.08. **nachmittags**, AA-1-Entscheid ‚je Betreiber'".
**Bestätigt.**

**Disposition: REPARIERT** (PL § 6-Nachtrag). Der Unterschied ist
sachlich nicht folgenlos, sondern **stützt** den „erledigt"-Vermerk:
(f) ist **nach** dem AA-1-Entscheid entstanden.

### P-13 — Hinweis — Tabellenzelle über die Durchstreichung hinaus umformuliert

**Nachgemessen:** vorher „**zuerst beantworten** — vor AA-5…AA-8",
nachher „~~zuerst beantworten~~ ✅ erfüllt — AA-5…AA-8 konnten folgen".
Der zweite Halbsatz war **ersetzt, nicht durchgestrichen**, während
der Nachtrag darüber „kein Punkt wurde still umgeschrieben" behauptet.
**Bestätigt.**

**Disposition: REPARIERT.** Die **vollständige Vorfassung** steht
jetzt durchgestrichen in der Zelle.

### P-14 — Hinweis — AA-3-Randfrage ohne Wiedervorlage-Ort

**Nachgemessen:** Der AA-4-Kasten benennt die Lücke bei sich selbst
ausdrücklich („wer AA-4 braucht, muss ihn setzen") — der AA-3-Kasten
schrieb nur „gehört dem User vorgelegt (kein Träger außerhalb)".
**Bestätigt.**

**Disposition: REPARIERT.** Der Wiedervorlage-Ort ist benannt: **mit
den offenen Punkten dieser Runde an den User, zusammen mit AA-4**, und
in der Abschlussmeldung R13-A als offener Posten geführt. Zusätzlich
steht jetzt ausdrücklich, dass die vorsichtige Lesart **enger** ist als
der Protokollwortlaut und eine **Arbeitsregel, kein Entscheid**.

### P-15 — Hinweis — „Drei Zeilen" ist eine Zeile zu wenig

**Nachgemessen:** Auch die Z-7-Zeile hat einen neuen Übergabestand
(Frage 13 **(d)**). **Bestätigt.**

**Disposition: REPARIERT.** Überschrift auf **„vier Zeilen"**
geändert, die **Z-7-Zeile ergänzt** — mit der Trennung, die den Befund
erst sauber macht: **Der ÜBERGABE-Stand hat sich geändert, die
Steuerbasis bleibt inhaltlich offen.** Der „Unverändert"-Absatz führt
sie jetzt entsprechend präzisiert.

### P-16 — Hinweis — K04 fehlt im Kopf-Nachtrag der Preisliste

**Nachgemessen:** § 2 derselben Datei stellt fest: „Das ist **eine**
Kollision von zweien — die Vapi-Kollision (K04) ist **gleichrangig**
und ebenfalls ungeklärt." Der neue Kopf-Nachtrag nannte nur Z-6, die
Angebotsarchitektur führt K04 in ihrem Kopf. **Bestätigt — die beiden
Dokumente sagten denselben Vorbehalt verschieden.**

**Disposition: REPARIERT.** Der Kopf-Nachtrag führt jetzt **Z-6 UND
K04** (samt der daran hängenden Z-5-Vertragspartner-Frage, Träger
E-4). Der Kopf-Nachtrag war die Gelegenheit, die in R12 gefundene
Lücke an der **Ankunftsstelle** zu schließen — sie wäre sonst zum
zweiten Mal an derselben Stelle stehen geblieben.

---

## Ein eigener Fund über die Befunde hinaus

Beim Nachziehen des Prüfmusters, das P-01 gefehlt hatte (`übergeben`),
fand die Session eine **dritte** Stelle derselben Klasse, die in
keinem Prüferbefund stand: **Preisliste, Kopfkasten, Eintrag
„Vertrags-, Rechts- und Steuerfragen (Z-1…Z-7 … bislang nicht
übergeben)"**. Ebenfalls repariert; Protokoll im Nachtrag § 4a von
`R13-A-selbstwiderspruchsprobe.md`.

**Das ist der Beleg für den Wert des Prüferlaufs über den einzelnen
Befund hinaus:** Ein Befund liefert nicht nur eine Reparatur, sondern
ein **Suchmuster**, das die eigene Probe nicht hatte.
