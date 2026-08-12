# R09-A — Unabhängiges Prüfprotokoll zu `akquise/interessenabwaegung-o8.md`

**Prüfgegenstand:** `akquise/interessenabwaegung-o8.md` (952 Zeilen),
eingefroren auf Commit **`b2cfa12`**
**Datum der Prüfung:** 12.08.2026
**Prüfer:** unabhängige Session mit frischem Kontext, ohne Kenntnis der
Entstehung des Dokuments
**Schreibumfang dieser Session:** ausschließlich diese Datei. Kein
anderer Pfad angefasst, kein git-Kommando, kein Commit. Der
Arbeitsbaum-Diff wurde ausdrücklich **nicht** gesichtet (geprüft wurde
der Text, nicht die Änderung).

**Prüfumfang (was tatsächlich gelesen wurde):**

- Prüfgegenstand vollständig (Z. 1–952).
- Rohbelege in `sensibel/rohbelege-R09-A/`, jeweils am Volltext:
  `dsk-oh-werbung-2022.txt` (726 Z.), `eugh-c-621-22-EN.txt` (1.415 Z.),
  `eugh-c-621-22-DE-amtsblattmitteilung.txt` (112 Z.),
  `lg-duesseldorf-38-O-243-23.txt` (696 Z.), `dsgvo-cellar.txt`
  (13.597 Z., gezielt), `00-quellenliste.md`.
- Repo-Quellen: `handel/kanal-rechtsmatrix.md`,
  `akquise/listenbau-regelwerk.md`, `akquise/akquiseplan.md`,
  `fund/positionierungspapier.md` (Gliederung + § 3),
  `CLAUDE.md`.
- **Alle Zahlen des Dokuments wurden selbst nachgezählt** (Zählwege
  unten in §  B), **alle Negativ-Aussagen mit eigener Positivkontrolle**
  im selben Suchraum gemessen.

Zeilenangaben zum Prüfgegenstand beziehen sich auf den eingefrorenen
Stand `b2cfa12`. Zeilenangaben zu Rohbelegen sind Zeilen der jeweiligen
`.txt`-Extraktion.

---

## A. Befunde

### Q-01 · SCHWER · Falsche Abweichungs-Behauptung: „Die Rechtsmatrix führt curia"

**Fundstelle:** § 11.2 Nr. 6 (Z. 818–821): *„Die Rechtsmatrix führt curia
noch als nutzbare amtliche Quelle."* — gleichlautend im
Beschaffungsprotokoll `sensibel/rohbelege-R09-A/00-quellenliste.md`
Z. 30–32 („**Neuer Kanalbefund gegenüber der Rechtsmatrix**, die curia
noch als nutzbaren amtlichen Weg führt").

**Beleg:** `handel/kanal-rechtsmatrix.md` enthält **0 Treffer** für
„curia" (`grep -oi "curia" | wc -l` = 0, ganze Datei, 866 Zeilen).
Repo-weite Gegenprobe (`grep -rin "curia" --include="*.md" .`): Treffer
ausschließlich in `akquise/interessenabwaegung-o8.md` Z. 818/820 und in
der eigenen Quellenliste Z. 26/32.
**Positivkontrolle im selben Suchraum:** „eur-lex" trifft in der
Rechtsmatrix 2× — der Kanalbefunde-Absatz existiert dort und ist
durchsuchbar (`handel/kanal-rechtsmatrix.md`, Abschnitt „Kanalbefunde,
die andere Sessions sich sparen können": nennt eur-lex,
publications.europa.eu, BGBl-Archiv, recht.saarland.de, TDDDG — curia
nicht).

**Warum das zählt:** § 11.2 ist die Liste der ausgewiesenen
*Abweichungen*. Eine Abweichung, die es nicht gibt, wird an MKT-HANDEL
als Korrekturbedarf gemeldet und kostet dort Prüfzeit; zugleich
beschädigt sie die Glaubwürdigkeit der übrigen sechs Punkte derselben
Liste (Q-04 · Rn. 56 und Q-05 · Gegenansicht sind sachlich richtig).

**Zu tun:** Punkt streichen oder zu einer **Ergänzung** umformulieren
(„Die Rechtsmatrix führt zu curia keinen Kanalbefund; hier einer") —
und dieselbe Formulierung in `00-quellenliste.md` nachziehen.

---

### Q-02 · SCHWER · Entwarnung ohne Quelle im Satz **und** unausgewiesener Widerspruch zur Rechtsmatrix

**Fundstelle:** § 6.2 „Übertragbarkeitsgrenzen, ehrlich" (Z. 523–526):
*„Der gesamte UWG-Unlauterkeitsteil — der Grund 2 trug — beruht auf dem
Verbraucherleitbild und ist auf einen gewerblichen Adressaten nicht
übertragbar."*

**Beleg gegen die Aussage:**
1. `lg-duesseldorf-38-O-243-23.txt` Z. 304 (Rn. 88): Die Unlauterkeit
   wird auf **„§ 3 Abs. 1 UWG … §§ 5 Abs. 1 und Abs. 2, 5a Abs. 1 bis
   Abs. 3 UWG"** gestützt. Diese Normen sind nicht auf Verbraucher
   beschränkt; verbraucherbeschränkt ist nach der Rechtsmatrix selbst
   nur der Anhang zu § 3 Abs. 3 UWG.
2. `handel/kanal-rechtsmatrix.md`, A7, Abschnitt „Wo das Risiko beim
   Brief wirklich liegt: die Aufmachung": *„Das Verschleierungsverbot
   steht heute in § 5a Abs. 4 UWG, und das gilt ausdrücklich auch
   gegenüber ‚sonstigen Marktteilnehmern', also B2B."* — belegt dort mit
   BGH „Branchenbuch Berg" (I ZR 157/10), dessen Schreiben sich
   **an Gewerbetreibende** richteten.

**Innerer Widerspruch dazu:** § 3.2 Vorbehalt 2 (Z. 258–261) führt genau
dieses Risiko als lebendig: *„Die Rechtmäßigkeitsschranke ist erfüllt,
solange … die Aufmachung nicht irreführend ist … Genau hier ist das LG
Düsseldorf gescheitert."*

**Zu tun:** Satz streichen oder auf den tatsächlich
verbraucherbeschränkten Teil einengen (Anhang zu § 3 Abs. 3; das
Verbraucherleitbild bei § 5 Abs. 2). Der Abschnitt braucht den
Gegensatz-Hinweis, dass §§ 5, 5a UWG B2B erfassen — sonst liest ein
Bau-Team „Aufmachung ist kein Thema für uns".

---

### Q-03 · SCHWER · Fehlender Vorbehalt: ErwG 47 **Satz 4** ist die eine Stelle, die nicht angekommen ist

*(Kategorie 2 — von der Quelle rückwärts gelesen.)*

ErwG 47 besteht aus sieben Sätzen (`dsgvo-cellar.txt` Z. 1018). Das
Dokument verwertet **Satz 1/2** (C-3, Z. 378), **Satz 3** (C-4, Z. 379)
und **Satz 7** (§ 3.3, Z. 269–271). **Satz 4 fehlt vollständig:**

> „Insbesondere dann, wenn personenbezogene Daten in Situationen
> verarbeitet werden, in denen eine betroffene Person vernünftigerweise
> nicht mit einer weiteren Verarbeitung rechnen muss, könnten die
> Interessen und Grundrechte der betroffenen Person das Interesse des
> Verantwortlichen überwiegen."
> *(`dsgvo-cellar.txt` Z. 1018, ErwG 47 Satz 4)*

Das ist der einzige Satz des Erwägungsgrundes mit einer **nachteiligen
Rechtsfolge** — und genau der Satz, der auf einen Kaltkontakt passt.

**Warum die Auslassung nicht zufällig aussieht:** Sie steht in der
DSK-Quelle **zwischen den beiden Stellen, die das Dokument zitiert**:

| Rohbeleg | Inhalt | im Dokument |
|---|---|---|
| `dsk-oh-werbung-2022.txt` Z. 107–109 | objektive Erwartungsschiene | **zitiert** (P-6, Z. 368) |
| `dsk-oh-werbung-2022.txt` Z. 110–112 | **ErwG 47 S. 4 — Interessen können überwiegen** | **fehlt** |
| `dsk-oh-werbung-2022.txt` Z. 112–116 | Pflichtinformationen erweitern Erwartungen nicht | **zitiert** (S-1, Z. 394–397) |

Dieselbe Aussage steht ein drittes Mal in der dritten Quelle:
`eugh-c-621-22-EN.txt` Z. 1143 (**Rn. 45**): *„recital 47 … states that
the interests and fundamental rights of the data subject may in
particular override the interest of the data controller where personal
data are processed in circumstances where data subjects do not
reasonably expect such processing"*. **Rn. 45 wird im gesamten Dokument
nirgends genannt** (`grep -o "Rn\. 45"` = 0 Treffer im Prüfgegenstand;
Positivkontrolle: „Rn. 48" trifft 2×, „Rn. 54" trifft 1×).

**Wirkung:** Die Contra-Seite (§ 5.2) führt die fehlende Beziehung
(C-3) und den Erhebungszeitpunkt (C-4) als *Kriterien*. Der Satz, der
daraus die *Rechtsfolge* macht, fehlt. Für FG-3 („Abwägung fällt zu
unseren Gunsten aus") ist das der Unterschied zwischen „ein Faktor
spricht dagegen" und „die Verordnung selbst sagt, dass in dieser
Situation die Gegenseite überwiegen kann".

**Zu tun:** Als **C-9** in § 5.2 aufnehmen, mit allen drei Fundstellen,
und FG-3 dagegen erneut lesen.

---

### Q-04 · SCHWER · Fehlende Pflicht: LG Rn. 87 („Bloße Absichten … können eine Datenverarbeitung nicht rechtfertigen")

*(Kategorie 2.)*

**Fundstelle:** fehlt im gesamten Dokument. Rn. 87 steht **nur** in der
Gegenlesungs-Liste § 12.4 (Z. 931) — verwertet ist sie nirgends
(`grep -o "Rn\. 87"` im Prüfgegenstand: 1 Treffer, ausschließlich diese
Liste).

**Beleg:** `lg-duesseldorf-38-O-243-23.txt` Z. 302 (Rn. 87):

> „Die Erfüllung dieser Verpflichtung erfordert letztlich Vorkehrungen,
> die **bereits vor dem ersten Verarbeitungsschritt** in die Wege
> geleitet sein müssen. Ansonsten bestünde nämlich die Gefahr, dass mit
> der Datenverarbeitung begonnen wird, obwohl nach den objektiven
> Umständen die Voraussetzungen einer rechtmäßigen Datenverarbeitung
> nicht vorliegen. Sollte der Verantwortliche den inneren Willen haben,
> solche Maßnahmen im weiteren Verlauf zu implementieren, könnte es
> darauf nicht ankommen. **Bloße Absichten des Verantwortlichen können,
> wie sich aus Art. 5 Abs. 2 DSGVO ergibt, eine Datenverarbeitung nicht
> rechtfertigen.**"

**Warum erheblich:** Das ist die Quellenstelle, die genau den Zustand
trifft, in dem sich dieses Vorhaben befindet — O-2 offen (Speicherdauer
ist Art.-14-Pflichtangabe, das Dokument sagt es selbst in § 9.1,
Z. 700–705), Firmierung offen (F-7), acht Bau-Pflichten noch nicht
eingearbeitet. § 9.2 und § 11.1 behandeln das als Reihenfolge-Frage
(„vor dem VVT-Eintrag und vor dem ersten Versand"); Rn. 87 sagt, dass
die **Vorkehrungen vor dem ersten Verarbeitungsschritt**, also vor dem
Listenaufbau, stehen müssen — und der Listenaufbau ist der erste
Verarbeitungsschritt (so auch § 7.1 des Dokuments: „Die Frist läuft ab
LISTENAUFBAU").

**Ebenfalls ungenutzt, gleiche Kategorie:** Rn. 78
(`lg-…txt` Z. 284): *„Bei dieser Prüfung sind grundsätzlich alle
Umstände des Einzelfalls zu berücksichtigen, weshalb eine
Datenverarbeitung **auch für rechtmäßige Werbemaßnahmen unzulässig sein
kann**"* — steht ebenfalls nur in der Gegenlesungs-Liste.

**Zu tun:** Rn. 87 in § 9.1 (O-2-Auswirkung) und in § 11.3 (Trigger
„vor dem ersten realen Wellenbau") aufnehmen; Rn. 78 in § 5.2.

---

### Q-05 · MITTEL · Der Art.-14-„Mindestumfang im Brief" lässt eine Pflichtangabe aus, die das Vorhaben selbst auslöst

*(Kategorie 2.)*

**Fundstelle:** § 7.1 „Was" (Z. 599–608). Genannt: Verantwortlicher +
E-Mail · Zweck und Rechtsgrundlage · berechtigtes Interesse ·
Datenquelle · Speicherdauer/Kriterien · Betroffenenrechte ·
Beschwerderecht. **Sieben Punkte.**

**Beleg:** `dsk-oh-werbung-2022.txt` Z. 249 nennt in der
Mindestinformations-Liste der Ziff. 2.1 ausdrücklich **„Empfänger oder
Kategorien von Empfängern der personenbezogenen Daten"** (Art. 14 Abs. 1
lit. e). Das Dokument plant selbst Auftragsverarbeiter — § 2.5 (Z. 189–190:
„Auftragsverarbeiter (Druck/Lettershop, CRM) erst nach AVV") und § 8
lit. d (Z. 686). Auftragsverarbeiter sind Empfänger i. S. d. Art. 4
Nr. 9 DSGVO. Die Angabe fehlt damit in der Liste, obwohl der eigene
Sachverhalt sie auslöst.

**Zweiter, verstärkender Punkt:** Die Rechtsmatrix C4 stellt den
Mindestumfang ausdrücklich unter den Vorbehalt *„Rest über eine
verlinkte, eigene Seite ‚Datenschutzinformation für Geschäftskontakte'
— **nicht** die allgemeine Website-Datenschutzerklärung"*
(`handel/kanal-rechtsmatrix.md`, C4). Dieser Vorbehalt fehlt im
Dokument. Da der Absatz mit „Die **13 Angaben** des Art. 14 Abs. 1
lit. a–f und Abs. 2 lit. a–g" eröffnet und dann sieben nennt, liest
sich die Siebener-Liste als abschließend; wo die übrigen sechs
hingehen, steht nirgends.

**Anmerkung:** Die Siebener-Liste ist aus der Rechtsmatrix C4
übernommen — die Lücke ist also **geerbt**, nicht neu erfunden. Sie ist
trotzdem hier zu schließen, weil dieses Dokument der Träger der
Art.-14-Kette ist (§ 7) und die Rechtsmatrix von dieser Session nicht
angefasst wird.

**Zu tun:** „Empfänger/Kategorien von Empfängern (Druck-/Lettershop,
CRM — konkret, sobald O-6 entschieden ist)" ergänzen; den
Rest-über-verlinkte-Seite-Mechanismus benennen; als achten Punkt an
MKT-HANDEL (§ 11.2) melden, dass C4 dieselbe Lücke trägt.

---

### Q-06 · MITTEL · B-2 übernimmt die Pflicht, nicht die daran gekoppelte TOM-Pflicht

*(Kategorie 2.)*

**Fundstelle:** § 10, B-2 (Z. 761) — „Elektronischer Widerspruchsweg
trotz reinem Briefkanal … Der Brief muss also eine E-Mail-Adresse für
Datenschutzbelange tragen".

**Beleg:** Die zitierte Quellenziffer (DSK 5.3) koppelt daran im selben
Abschnitt eine eigene Pflicht — `dsk-oh-werbung-2022.txt` Z. 669–674:

> „Beim Einsatz von Spam-Filtern u. ä. … ist zu beachten, dass auch
> solche E-Mails zugegangen sind, die zwar vom zuständigen Mail-Server
> angenommen, aber als vermeintlicher Spam in einen Spam-Ordner
> verschoben oder gelöscht wurden. **Wer eine E-Mail-Adresse
> bereitstellt, muss durch technisch-organisatorische Maßnahmen
> gewährleisten**, dass E-Mails, die sich auf Betroffenenrechte
> beziehen, entweder nicht im Spam-Ordner landen oder dort jedenfalls
> dennoch umgehend zur Kenntnis genommen werden (**Art. 24 DS-GVO**)."

Das Dokument erzeugt mit B-2 die Vorbedingung (E-Mail-Adresse im Brief)
und lässt die daran hängende Pflicht weg. § 8 lit. g („TOM ⚠️ noch nicht
festgelegt") nennt drei Mindest-TOM — diese ist nicht darunter.

**Zu tun:** B-2 um den Satz erweitern; in § 8 lit. g als vierte
Mindest-TOM aufnehmen.

---

### Q-07 · MITTEL · B-4 verallgemeinert die Quelle: „Löschung aller Daten" statt „aus der Werbesperrdatei"

**Fundstelle:** § 10, B-4 (Z. 763): *„**Löschwunsch ≠ Widerspruch.** Wer
die Löschung aller Daten verlangt, wird darauf hingewiesen, dass er dann
‚eventuell wieder Werbung erhalten kann'."*

**Beleg:** `dsk-oh-werbung-2022.txt` Z. 613–614: *„Wünscht eine
betroffene Person ausdrücklich und allein eine Löschung aller Daten
**aus der Werbesperrdatei**, sollte sie darauf hingewiesen werden, dass
sie eventuell wieder Werbung erhalten kann."*

Die Quelle regelt den engen Fall „Löschung des Sperrdatei-Eintrags";
das Dokument macht daraus den allgemeinen Fall „Löschung aller Daten"
— das ist ein Art.-17-Verlangen und etwas anderes. In der
Betriebsanleitung führt das dazu, dass auf ein reguläres
Löschverlangen mit einem Hinweis geantwortet wird, den die Quelle dafür
nicht hergibt.

**Zu tun:** Wortlaut der Quelle übernehmen („aus der Werbesperrdatei").

---

### Q-08 · MITTEL · § 7.2: drei Vorbehalte der Quelle verloren, plus unbelegter Superlativ

*(Kategorie 4.)*

**Fundstelle:** § 7.2 „Umsetzung" (Z. 648–650): *„Für den Brief gilt die
**einzige Erleichterung der ganzen Handreichung** — ein bereits
adressierter Brief **muss nicht** aus dem Stapel gezogen werden"*.

**Beleg:** `dsk-oh-werbung-2022.txt` Z. 703–707: *„Wenn konkrete
Werbeaktionen angelaufen sind …, **kann** es **im Einzelfall** für das
Unternehmen unzumutbar sein, einen zwischenzeitlich eingegangenen
Werbewiderspruch noch mit erheblichem Aufwand umzusetzen, z. B. einen
bestimmten bereits adressierten Brief **aus einer großen Menge** heraus
zu sortieren."*

Verloren: „kann" · „im Einzelfall" · „aus einer großen Menge". Aus einer
Einzelfall-Möglichkeit wird eine Regel. Der dritte Vorbehalt beißt sich
zusätzlich mit der eigenen Prämisse P-7 („Unsere Wellen sind klein"):
bei kleinen Wellen greift die Erleichterung nach dem Wortlaut der
Quelle gerade nicht.

**Superlativ:** „die einzige Erleichterung der ganzen Handreichung" ist
eine Negativaussage über den Gesamttext ohne Suchraum/Kontrolle.
Gegenkandidaten im selben Text: Ziff. 4.1 (Preisausschreiben-/
Katalogdaten sind „nach Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO zulässig",
Z. 519–523), Ziff. 1.4.1 (Bestandskunden-E-Mail, Z. 177–186); Ziff. 4.3
spricht selbst von „**die dortigen Erleichterungen**" (Z. 538–539).

**Zu tun:** Vorbehalte in den Satz zurücknehmen; Superlativ streichen
oder mit Suchraum belegen.

---

### Q-09 · MITTEL · B-8 (Robinsonliste): die Auflösung der Spannung zu R-A7.7 trifft den Grund nicht

**Fundstelle:** § 10, B-8 (Z. 767): *„⚠️ Steht in Spannung zu Regelwerk
R-A7.7 (‚Die Robinsonliste ist kein Maßstab") — dort geht es um das
**UWG**-Merkmal ‚erkennbar', hier um einen **DSGVO**-Abwägungsfaktor.
Beide Aussagen gelten nebeneinander."*

**Beleg:** `akquise/listenbau-regelwerk.md` Z. 555–558 im Volltext:

> „**R-A7.7** ⚠️ **Die Robinsonliste ist kein Maßstab** — **reine
> Verbraucher-Einrichtung**, begründet gegenüber Gewerbetreibenden kein
> ‚erkennbar' i. S. d. § 7 Abs. 1 S. 2 UWG. Ihr Nicht-Abgleich ist kein
> Verstoß, **ihr Abgleich keine Absicherung**."

Der erste und tragende Grund der Regelwerks-Zeile ist **nicht** das
UWG-Merkmal, sondern der **Adressatenkreis**: Die Brief-Robinsonliste
des DDV ist eine Verbraucher-Einrichtung. Eine B2B-Hotelliste dagegen
abzugleichen kann strukturell nichts aussteuern. Damit ist B-8 kein
„kostenloses Abwägungsargument auf der objektiven Erwartungsschiene",
sondern ein Leerlauf — und die Behauptung „Beide Aussagen gelten
nebeneinander" ist keine Auflösung, sondern eine Zudeckung.

Hinzu kommt die Adressatenrichtung der zitierten Quelle:
`dsk-oh-werbung-2022.txt` Z. 619–627 nennt die Robinsonliste als Hinweis
**an die betroffene Person** („kann ein ergänzender Hinweis auf die
sogenannten Robinsonlisten … für die betroffene Person hilfreich sein"),
nicht als Maßnahme des Werbenden; der zitierte Halbsatz „freiwillig und
in Deutschland nicht verpflichtend" steht dort als **Begründung dafür,
dass ein Eintrag keine Garantie ist**.

**Zu tun:** B-8 entweder streichen oder auf „Prüfen, ob es überhaupt
eine B2B-Sperrliste gibt" umstellen; die Abweichungs-Begründung
korrigieren.

---

### Q-10 · MITTEL · P-7 „Unsere Wellen sind klein" — die Prämisse tragen die zitierten Quellen nicht

**Fundstelle:** § 5.1, P-7 (Z. 369): *„**Geringe Skalenwirkung.** … Unsere
Wellen sind klein und ausgewertet (Akquiseplan; Regelwerk R-K1), es gibt
keinen Millionenversand"*, Belegspalte „① A + Regelwerk § 8a".

**Beleg gegen die Prämisse:**
- `akquise/akquiseplan.md` (Abschnitt „Der harte Befund"): *„Selbst das
  optimistische Szenario verlangt **≈ 337 personalisierte Briefe**,
  sämtlich in **einer** Welle bis 11.09."*
- `akquise/akquiseplan.md` § 4.3: *„Damit ist die zunächst gesetzte
  Schwelle ‚~100' nicht begründet und wird ersetzt: **Erst ab ~300
  Stück** ist ein Null-Ergebnis ein Befund"* — samt der ausdrücklich
  „unbequemen" Folge, dass eine auswertbare Welle bereits in der als
  unrealistisch ausgewiesenen Größenordnung liegt.
- `akquise/listenbau-regelwerk.md` R-K1 (Z. 871–876) benutzt exakt diese
  Zahl als **Risiko**-Beispiel: *„Eine Welle von **300** gleichartigen
  Briefen mit demselben Fehler ist nicht 300 × 500 €, aber auch nicht
  1 × 500 €."*
- Es wurde noch keine Welle versandt; A-6 (Wochenkapazität) ist
  „nicht erhoben", O-4 (Zielmenge) unbekannt — das Dokument sagt Letzteres
  in § 4.3 selbst.

„Klein und ausgewertet" ist damit eine **Prognose in Präsensform**, kein
Ist-Zustand. Zusätzlich: Die Belegstufe „① A" der Zeile deckt das
EuGH-Zitat (Rn. 54), nicht die Tatsachenbehauptung daneben — zwei
Beleg-Typen in einer Zelle.

**Folgefehler:** § 11.3 nennt als Nachprüf-Trigger *„Wenn die Menge je
Welle die Größenordnung des Akquiseplans verlässt"* — ohne Zahl. Ein
Trigger ohne Schwellenwert ist nicht bedienbar; der Akquiseplan liefert
mit ~300 / ≈337 die Zahlen.

**Zu tun:** P-7 auf „Wellenobergrenze wird festgelegt und protokolliert
(B-6)" umstellen und die Zahl in § 11.3 einsetzen.

---

### Q-11 · MITTEL · Zahl aus der Rechtsmatrix im Scope verschoben (R-3)

**Fundstelle:** § 6.3, Zeile R-3 (Z. 546): *„Rechtsmatrix B3:
Streitwert-Arbeitsannahme 3.500–6.000 € je Verstoß, **Erwartungswert
erster Verstoß** bei sofortiger modifizierter Unterlassungserklärung
500–1.700 €"*.

**Beleg:** `handel/kanal-rechtsmatrix.md`, B3: *„Realistischer
Erwartungswert für den ersten **E-Mail**-Verstoß bei sofortiger
modifizierter Unterlassungserklärung: 500 – 1.700 €"*.

Das Wort **E-Mail** fällt weg; die Zahl wandert in eine Tabelle, deren
Gegenstand der **Brief**- und **DSGVO**-Fall ist. Die
Streitwert-Spanne 3.500–6.000 € ist dagegen korrekt übernommen (dort
ausdrücklich „gegenüber einem gewerblichen Empfänger").

**Zu tun:** entweder „(dort für den E-Mail-Fall hergeleitet)"
dazuschreiben oder die Zahl weglassen.

---

### Q-12 · MITTEL · Die 0-Treffer-Messung zu „Art. 6 Abs. 4" ist am geprüften Stand nicht mehr reproduzierbar

**Fundstelle:** § 5.5 (Z. 441–445): *„Er ist in
`handel/kanal-rechtsmatrix.md` und im Listenbau-Regelwerk **nirgends**
enthalten (grep über beide Dokumente, 12.08.2026: ‚Art. 6 Abs. 4'
0 Treffer, ‚Zweckänderung' 0 Treffer …)"* — gleichlautend § 11.1, O-9
(Z. 778) und, mit Zahlen, in der Nachtrags-Zeile O-9 des Regelwerks
selbst (`akquise/listenbau-regelwerk.md` Z. 927).

**Eigene Messung am selben Stand** (`grep -o … | wc -l`):

| Datei | „Art. 6 Abs. 4" | „Zweckänderung" | „Kompatibilit" | Positivkontrolle „Art. 6 Abs. 1" |
|---|---:|---:|---:|---:|
| `handel/kanal-rechtsmatrix.md` | **0** ✓ | 0 ✓ | 0 ✓ | 7 |
| `akquise/listenbau-regelwerk.md` | **4** ✗ | **2** ✗ | **2** ✗ | 7 |

Die vier Treffer im Regelwerk stehen in Z. 291–293 (Nachtrags-Kasten
§ 3 Pflicht 4), Z. 926 (O-8-Zeile) und Z. 927 (neue O-9-Zeile) — also
sämtlich in den in derselben Runde gesetzten Nachträgen. Die
Nachtrags-Zeile O-9 behauptet in sich selbst „0 Treffer in beiden
Dokumenten" und enthält den Suchbegriff. Ihre Positivkontroll-Angabe
„7 bzw. 6" beschreibt den **Vorher**-Stand des Regelwerks (heute 7).

**Warum das zählt:** Eine Messung, die in der Datei steht, die sie
beschreibt, altert im Moment des Commits. Ein späterer Prüfer, der sie
nachvollzieht, findet einen Widerspruch und muss die ganze Messreihe
neu bewerten — obwohl die Sachaussage (der Punkt war bis zum 12.08.2026
nirgends geführt) stimmt.

**Zu tun:** Beide Stellen auf „bis zum 12.08.2026 nirgends geführt;
seither als O-9 im Regelwerk (§ 10) und hier (§ 5.5)" umstellen und die
Zahlen mit Stichtag versehen.

---

### Q-13 · MITTEL · FG-2 („Impressumsquelle ohne Personenname → zulässig") steht gegen den Wortlaut des eigenen C-1-Zitats

**Fundstelle:** § 5.4, FG-2 (Z. 426): *„wie FG-1 — **kein Personenbezug,
keine Abwägung.** Die Impressums-Frage ist eine DSGVO-Frage; ohne
personenbezogenes Datum stellt sie sich nicht | **Zulässig**, aber Q-2 =
`Impressum` trotzdem protokollieren"*.

**Beleg:** Das im selben Dokument (C-1, Z. 376) wörtlich zitierte
Verdikt der Aufsicht knüpft an das **Auslesen**, nicht an das
Speichern: *„Nicht zulässig ist hingegen **das Auslesen der Daten aus
einem Online-Impressum** zum Zweck der werblichen Nutzung"*
(`dsk-oh-werbung-2022.txt` Z. 525). Das Auslesen ist die Verarbeitung
(Art. 4 Nr. 2). Hinzu kommt `handel/kanal-rechtsmatrix.md` C1: *„§ 5
Abs. 1 Nr. 1 DDG verlangt im Impressum … **den Vertretungsberechtigten**
… **Jedes pflichtgemäße Impressum einer Hotel-GmbH nennt namentlich den
Geschäftsführer.**"* — beim Auslesen liegt der Personenname also
regelmäßig vor, auch wenn er nicht in die Liste wandert.

Die Einstufung mag im Ergebnis vertretbar sein; sie ist aber eine
eigene, tragende Rechtsauffassung, die **im Widerspruch zum Wortlaut
der einzigen Quelle steht, die den Sachverhalt direkt trifft**, und die
im Ergebnisfeld als schlichtes **„Zulässig"** erscheint — eine
Entwarnung ohne Quelle im Satz. FG-1 zieht die Linie ausdrücklich bei
„sobald der Name in die Liste wandert"; FG-2 überträgt das auf die
Impressumsquelle, ohne den Unterschied zwischen Auslesen und Speichern
zu adressieren.

**Zu tun:** FG-2 mit dem Auslesen-Argument als Gegenposition versehen
und das Ergebnis auf „vertretbar, nicht gesichert" absenken — oder die
Fallgruppe unter den Weg-(b)-Vorbehalt ziehen wie FG-4.

---

### Q-14 · MITTEL · Zuständige Aufsicht: Zuschreibung, die das Dokument selbst als ungeprüft ausweist

**Fundstellen:** § 5.4, FG-4 (Z. 428): *„**Die zuständige Aufsicht**
kommt nach **ihrer** veröffentlichten Auffassung zum gegenteiligen
Ergebnis (C-1)"*; Zusammenfassung (Z. 435): *„gegen die erklärte
Auffassung der **zuständigen Aufsichtsbehörden**"*.

**Beleg gegen die Zuschreibung:** Grundlage ist ausschließlich die
DSK-Orientierungshilfe — ein Papier der Konferenz, nicht eine Äußerung
des ULD oder des HmbBfDI. Das Dokument räumt selbst ein
(§ 12.2, Erhebungsgrenze 3, Z. 887–889): *„**Nicht erhoben:** Ob andere
Aufsichtsveröffentlichungen (LDA-Bayern-FAQ, DSK-Kurzpapiere,
**ULD-Stellungnahmen**) die B2B-Frage beantworten. Das ist **nicht
geprüft**."* Hinzu kommt: Der Sitz des Verantwortlichen ist offen
(F-7, § 2.1) — welche Behörde zuständig ist, steht damit nicht fest;
die Rechtsmatrix B4 formuliert deshalb korrekt „**Aufsicht ist die
Behörde am Sitz des Verantwortlichen** (§ 40 BDSG) … für
Schleswig-Holstein das ULD …, für Hamburg der …". Das Dokument
verkürzt in § 6.3, R-1 (Z. 544) zu „Zuständig: **ULD Kiel** (SH) bzw.
**HmbBfDI** (Hamburg)".

**Zu tun:** „die Datenschutzkonferenz — das gemeinsame Gremium der
deutschen Aufsichtsbehörden — kommt in ihrer veröffentlichten
Orientierungshilfe zum gegenteiligen Ergebnis; eine Äußerung der im
Einzelfall zuständigen Behörde wurde nicht erhoben".

---

### Q-15 · MITTEL · § 12.4 „Alle tragenden Zitate … nachgelesen" wird von der eigenen Liste widerlegt

**Fundstelle:** § 12.4 (Z. 927–931).

Die Liste nennt DSK 1.3.1/1.3.2/1.4/1.4.2 b/2.2/4.2/4.4/4.6/5.2/5.3/5.4 ·
EuGH Rn. 31/37/40/48/49/50/54/56 · LG Rn. 74/76/78/82/84/85/87/88.

**Im Dokument zitiert, in der Liste nicht enthalten:**

| Quelle | zitiert in |
|---|---|
| DSK Ziff. **1.2** | § 3.3 (Z. 277) |
| DSK Ziff. **1.5** | C-8 (Z. 383), § 5.5 |
| DSK Ziff. **2.1** | § 2.1 (Z. 151), B-5 (Z. 764), B-7 (Z. 766) |
| DSK Ziff. **5.1** | B-3, B-4, B-8 (Z. 762/763/767) |
| DSK **Fn. 1** | § 11.3 (Z. 834) |
| EuGH Rn. **38/39/42/43/51/53/55** | § 3.1, § 4.1, § 4.2, C-4 |
| LG Rn. **48/135/141/220/238** | § 6.1, § 6.2, § 7.1, § 7.3 |

**Umgekehrt** stehen Rn. 74/78/87 in der Liste, ohne im Dokument
irgendwo verwertet zu sein (siehe Q-04).

Damit trägt § 12.4 weder eine Vollständigkeits- noch eine
Deckungsaussage: Der Maßstab der Erforderlichkeit (Rn. 42) und die
Firmierungs-Sperre (DSK 2.1) — beide tragend — fehlen in der Liste der
selbst gegengelesenen Stellen.

*(Ich habe alle genannten Stellen selbst am Rohtext geprüft; sie sind
inhaltlich korrekt. Der Befund betrifft die Belegaussage, nicht die
Zitate.)*

**Zu tun:** Liste vervollständigen oder die Formulierung auf
„stichprobenhaft, folgende Stellen" absenken.

---

### Q-16 · MITTEL · Rn. 220 trägt kein „ausdrücklich verworfen"; im Zitat fehlt „insoweit"

**Fundstelle:** § 7.1 (Z. 595–597): *„**Keine Karenzfrist:** Das LG
Düsseldorf hat eine ‚von der DSGVO nicht vorgesehene - Karenzfrist für
eine Nachlieferung der geschuldeten Informationen' **ausdrücklich
verworfen** (Rn. 220)."*

**Beleg:** `lg-duesseldorf-38-O-243-23.txt` Z. 568 (Rn. 220). Die Randnummer
behandelt die **Auslegung des Klägervortrags** (Reichweite des
Klageantrags). Die zitierte Wendung ist ein Einschub im Konjunktiv:
*„…würde sie dem Kläger den Willen unterstellen, … der Beklagten eine -
**insoweit** von der DSGVO nicht vorgesehene - Karenzfrist für eine
Nachlieferung der geschuldeten Informationen zuzugestehen."*

Zwei Punkte: (a) ein Einschub in einer Auslegungserwägung ist kein
„ausdrückliches Verwerfen"; (b) das einschränkende **„insoweit"** ist
aus dem Zitat entfernt, der zugehörige Gedankenstrich stehen geblieben —
ein sichtbarer Rest der Kürzung ohne Auslassungszeichen.

*(Die Wirkung geht hier zu Lasten des Dokuments, nicht zu seinen
Gunsten — die Aussage bleibt trotzdem falsch belegt.)*

**Zu tun:** Auf Rn. 85 i. V. m. Art. 14 Abs. 3 lit. b stützen (dort
steht die Sache tragend) und Rn. 220 höchstens als Bestätigung
nennen; „insoweit" ins Zitat zurück.

---

### Q-17 · MITTEL · § 2.2 nennt die Felder „abschließend" und lässt eines aus — mit Wirkung auf P-1/P-2

**Fundstelle:** § 2.2 (Z. 157–164): *„Die geführten Felder stehen
**abschließend** im Feldregister … Zusammengefasst: …"* — aufgezählt
werden 10 ✅-Felder, 2 🔶-Felder (F-06, F-07) und 5 ⛔-Felder.

**Beleg:** `akquise/listenbau-regelwerk.md` Z. 660 führt ein drittes
bedingtes Feld: **F-10 · Anlassnachweis (Freitext + Datum + wer), 🔶**.
Es fehlt in der Zusammenfassung — obwohl das Dokument es in § 5.4, FG-5
(Z. 429) selbst benutzt.

**Warum das nicht nur Buchhaltung ist:** P-1 (Z. 363) argumentiert
„keine … Verhaltensdaten", P-2 (Z. 364) „in der **Menge der
Kontaktzeile**". Beide stützen sich auf diese Feldliste. Tatsächlich
enthält das Register über die Kontaktzeile hinaus mindestens
**F-10** (Freitext über die betroffene Person), **F-11**
(Kontakt-/Versandhistorie) und **F-12** (Art.-14-Status) — allesamt
selbst erzeugte, nicht vom Betrieb veröffentlichte Daten. „In der Menge
der Kontaktzeile" ist damit eine Verdichtung zugunsten der eigenen
Position.

**Zu tun:** F-10 ergänzen; P-2 auf „Kontaktzeile plus Nachweis- und
Fristenfelder, die selbst der Rechtskonformität dienen" umformulieren.

---

### Q-18 · HINWEIS · Falsche Randnummer: „acte claire" ist Rn. 75

**Fundstelle:** § 3.3 (Z. 282–284) — der Satz *„Das Gericht hat die
Gegenauffassung (‚acte claire', ErwG 47 erlaube Briefwerbung generell)
ausdrücklich verworfen"* schließt unmittelbar an das mit **Rn. 76**
belegte Zitat an und liest sich als dessen Fortsetzung.
**Beleg:** `lg-duesseldorf-38-O-243-23.txt` Z. 278 = **Rn. 75**: *„Entgegen
der Auffassung der Beklagten handelt es sich bei Erwägungsgrund 47 zur
DSGVO nicht um einen ‚acte claire', demzufolge ‚Direktwerbung per Brief
[…] grundsätzlich ausdrücklich zulässig [ist] …'."* Sache und Wortlaut
stimmen, die Randnummer fehlt.

---

### Q-19 · HINWEIS · Verschobenes Anführungszeichen im Rechtsmatrix-Zitat

**Fundstelle:** § 1.2 (Z. 98–101): *„Bei „inhabergeführten Häusern — dem
typischen Zuschnitt unserer Zielgruppe — sind die Daten regelmäßig
personenbezogen. …""*
**Beleg:** `handel/kanal-rechtsmatrix.md` C1: *„**Bei** inhabergeführten
Häusern …"*. Das öffnende Anführungszeichen steht hinter „Bei"; der so
markierte Zitatkörper ist kein zusammenhängender Quellstring und liest
sich grammatisch gebrochen. Inhaltlich korrekt.

---

### Q-20 · HINWEIS · § 1.1-Tabelle verkürzt die A7-Einstufung

**Fundstelle:** § 1.1, Zeile K1 (Z. 80): *„✅ zulässig, kein Tatbestand in
§ 7 Abs. 2 UWG"*; § 5.4, FG-1/FG-2 Folgespalte: *„Zulässig."*
**Beleg:** `handel/kanal-rechtsmatrix.md` A7, Einstufungszeile:
*„**ZULÄSSIG** — der lauterkeitsrechtlich offenste Kanal, **aber nicht
schrankenlos**"*, Norm-Zeile: *„kein Tatbestand in § 7 Abs. 2 UWG · **es
gilt die Generalklausel § 7 Abs. 1 UWG** · DSGVO je nach Personenbezug"*.
Der Zusatz und § 7 Abs. 1 (Hartnäckigkeit, „erkennbar nicht gewünscht")
fehlen an beiden Stellen. Da § 1.1 der Filter ist, durch den alles
Weitere läuft, gehört der Vorbehalt dorthin.

---

### Q-21 · HINWEIS · Tenor-Zitat ohne sichtbaren Sachverhaltsbezug

**Fundstelle:** § 4.2 (Z. 313–319) — das Zitat beginnt mit „…" und setzt
bei „nur dann als … erforderlich angesehen werden kann" ein.
**Beleg:** `eugh-c-621-22-DE-amtsblattmitteilung.txt` Z. 96. Weggeschnitten
ist der Scope: *„eine Verarbeitung personenbezogener Daten, die darin
besteht, personenbezogene Daten der **Mitglieder eines Sportverbands** in
Verfolgung des wirtschaftlichen Interesses des Verantwortlichen **gegen
Entgelt offenzulegen**"*. Die Wirkung geht zu Lasten des Dokuments
(strengerer Maßstab als nötig), die Kürzung ist aber für den Leser nicht
erkennbar — und die Frage, ob „absolut notwendig" über den
Offenlegungs-gegen-Entgelt-Fall hinaus gilt, ist genau die, die § 4.2
offenlässt.

---

### Q-22 · HINWEIS · C-6: Zitatzuordnung zu weit

**Fundstelle:** C-6 (Z. 381): *„Beide Praxisfälle der Ziff. 1.3.2 setzen
‚im Nachgang zu einer Bestellung' voraus."*
**Beleg:** `dsk-oh-werbung-2022.txt` Z. 141 — die Wendung steht nur in
Praxisfall a). Praxisfall b) trägt „nach Bestellung" nur in der
Überschrift (Z. 148). **Die Sachaussage stimmt**, das als wörtlich
markierte Zitat deckt aber nur einen der beiden Fälle.

---

### Q-23 · HINWEIS · C-8: Zitat endet vor der Ausnahme, ohne Auslassungszeichen

**Fundstelle:** C-8 (Z. 383) — endet mit „… eine sog.
Kompatibilitätsprüfung durchführen".
**Beleg:** `dsk-oh-werbung-2022.txt` Z. 221–222: *„… durchführen, **es sei
denn, es liegt eine Einwilligung in die zweckändernde Nutzung vor**."*
Die Ausnahme greift hier nicht (keine Einwilligung), das Weglassen wirkt
also nicht zu eigenen Gunsten — der Normwortlaut ist trotzdem
unvollständig wiedergegeben.

---

### Q-24 · HINWEIS · § 11.2 Nr. 7 „Neu gegenüber Teil B" überzeichnet

**Fundstelle:** § 11.2 Nr. 7 (Z. 822–825) und § 6.1 (Z. 480).
**Beleg:** `handel/kanal-rechtsmatrix.md`, Tabelle „Offene Punkte und
Belegstufen-Grenzen": *„**§ 3a UWG und DSGVO-Abmahnbarkeit** | Streitstand
**nicht abschließend erhoben**"*. Der Punkt ist der Rechtsmatrix also
bekannt und dort als **offen/streitig** markiert. Das Dokument stellt ihn
in § 6.1 als Ergebnis dar (*„Ein Datenschutzverstoß bei Werbung ist
**abmahnfähig**"*) — gestützt auf ein Urteil erster Instanz, dessen
Nicht-Rechtskraft es selbst als „nicht prüfbar" ausweist. Die
Einschränkungen daneben (Rn. 135, UGP-Richtlinie/B2C) sind vorhanden und
gut; die Kategorie „neu gegenüber der Rechtsmatrix" ist falsch, die
Kategorie „von der Rechtsmatrix als streitig geführt, hier mit einem
Urteil unterlegt" wäre richtig.

---

## B. Was ich nachgezählt habe (mit Zählweg)

Alle Zahlen des Dokuments, die ich reproduzieren konnte, mit dem Weg, auf
dem ich sie reproduziert habe. Kein Wert wurde aus dem Dokument oder aus
`00-quellenliste.md` übernommen.

**Aus `sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.txt`**
(§ 6.2, Z. 496, 518, 524, 535):

| Behauptung | Zählweg | Ergebnis |
|---|---|---:|
| „§ 7 UWG" 0-mal | `grep -o "§ 7 UWG" \| wc -l` | **0** ✓ |
| „DSGVO" 109-mal | `grep -o "DSGVO" \| wc -l` | **109** ✓ |
| „Verbraucher" 199 (case-insensitiv) | `grep -oi "Verbraucher" \| wc -l` | **199** ✓ |
| „Verbraucher" 187 (case-sensitiv) | `grep -o "Verbraucher" \| wc -l` | **187** ✓ |
| „hotel" 0-mal | `grep -oi "hotel" \| wc -l` | **0** ✓ |
| „b2b" 0-mal | `grep -oi "b2b" \| wc -l` | **0** ✓ |
| `berufung\|rechtsmittel\|rechtskräftig` 0 | `grep -oiE … \| wc -l` | **0** ✓ |

**Meine Positivkontrollen im selben Suchraum** (das Dokument nennt für
die letzte Zeile keine): „UWG" **148** Treffer · „vorläufig
vollstreckbar" **1** (Z. 118, im Tenor) — die Datei ist durchsuchbar,
enthält den UWG-Teil und die Vollstreckbarkeits-Angabe. Damit ist das
Nullergebnis zu Berufung/Rechtsmittel als **echtes Negativ** bestätigt,
und die Einordnung des Dokuments („nicht prüfbar, kein Negativbefund",
Z. 536) ist korrekt und sogar vorsichtiger als nötig.

**Zusatzkontrolle zur Kernaussage „Das Urteil liefert keinen einzigen
Abwägungstopos" (Z. 512–513):** „Abwägung" kommt im gesamten Urteil
**1×** vor — `grep -oin "abwägung"`, Treffer Z. 274 = **Rn. 73**, und
dort nur als abstrakte Beschreibung des dritten Prüfungsschritts
(*„… und schließlich dürfen bei der abschließenden Abwägung die Belange
der betroffenen Person gegenüber diesem Interesse nicht überwiegen"*).
„überwieg" 4 Treffer (Z. 268/270/274/348), keiner davon eine Subsumtion
zum Streitfall. **Die Behauptung ist damit unabhängig bestätigt** — das
ist der stärkste, belastbarste Teil des Dokuments.

**Aus `sensibel/rohbelege-R09-A/dsk-oh-werbung-2022.txt`** (§ 12.3,
Z. 901–911):

| Behauptung | Zählweg | Ergebnis |
|---|---|---:|
| Positivkontrolle „Direktwerbung" 26 | `grep -oi \| wc -l` (Rohfassung) | **26** ✓ |
| Positivkontrolle „Interessenabwägung" 11 | ebenso | **11** ✓ |
| Positivkontrolle „Werb" (Teilwort) 166 | ebenso | **166** ✓ |
| Positivkontrolle „ä" (Umlaut-Kanal) 224 | ebenso | **224** ✓ |
| 15 Begriffe je 0 Treffer, „in beiden Fassungen" | `grep -oi` roh **und** enthyphenierte Fassung (`perl -0777 -pe 's/-\n//g'`) | **je 0 in beiden** ✓ |
| „Geschäftsabschluss"/„Werbeschreiben" je 0 roh, je 1 enthyphenisiert | ebenso | **0 / 1** ✓ beide |
| Gegenrichtung „Zahnarztstuhl" 0 | `grep -oi` | **0** ✓ |
| Fn. 1 Adresshandel | `grep -n "Adresshandel"` | **1** Treffer, Z. 15, Fußnote 1 ✓ |

*Anmerkung ohne Befundcharakter:* Die vier Positivkontroll-Zahlen sind
**nur case-insensitiv** erreichbar (case-sensitiv: 21 / 11 / 94 / 224).
Das Dokument nennt den Zählweg `grep -o -i` — die Zahlen sind also
korrekt belegt. Wer sie ohne `-i` nachprüft, findet drei Abweichungen;
der Zählweg gehört deshalb an die Zahl, und dort steht er.

**Weitere eigene Kontrollen (Repo):**

| Behauptung des Dokuments | Ergebnis |
|---|---|
| § 8-Kopfzeile: „es gibt kein `ops/`-Verzeichnis im Repo (geprüft 12.08.2026)" (Z. 47) | ✓ bestätigt (`ls`: kein `ops`; vorhanden sind akquise, assets, beleg, fund, handel, marke, protokolle, sensibel) |
| Verhältnis-Tabelle: „für die Rechtsmatrix-Runde R07-C existiert kein Rohbeleg-Ordner" (Z. 43) | ✓ bestätigt (`ls sensibel/`: rohbelege-R05-A, -R06-A, -R08-B, -R09-A — Positivkontrolle: die Namenskonvention existiert vierfach) |
| § 5.5 / O-9: „Art. 6 Abs. 4" 0 Treffer in beiden Dokumenten | **teilweise falsch** → **Q-12** |
| § 11.2 Nr. 6: Rechtsmatrix führt curia | **falsch** → **Q-01** |

**Normtext-Zitate, die ich am `dsgvo-cellar.txt` byte-genau gegengelesen
habe** (je 1 Treffer, `grep -c`): Art. 14 Abs. 3 lit. a „innerhalb einer
angemessenen Frist nach Erlangung" · lit. b „spätestens zum Zeitpunkt der
ersten Mitteilung an sie" · Art. 14 Abs. 2 lit. f „aus welcher Quelle die
personenbezogenen Daten stammen" · Art. 14 Abs. 2 lit. a „die Dauer, für
die die personenbezogenen Daten gespeichert werden" · Art. 14 Abs. 2
lit. b „die berechtigten Interessen, die von dem Verantwortlichen oder
einem Dritten verfolgt werden" · Art. 21 Abs. 2 · Art. 21 Abs. 3 ·
Art. 21 Abs. 4 · ErwG 14 Satz 2 · ErwG 47 vollständig. **Alle korrekt.**

**EuGH-Randnummern, die ich einzeln aus `eugh-c-621-22-EN.txt`
extrahiert und gegen das Dokument gelesen habe:** Rn. 31, 37, 38, 39,
40, 42, 43, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56 sowie der deutsche
Tenor. **Alle im Dokument verwendeten Zitate sind wörtlich korrekt, die
Randnummern stimmen, die Auslassungszeichen sitzen an den richtigen
Stellen** — einschließlich der bemerkenswert sauberen Behandlung von
Rn. 48 („see, by analogy" ausdrücklich mitgeteilt), Rn. 49 („could
constitute", drei Vorbehalte benannt) und Rn. 51–53 (Übertragungsgrenze
samt Vorbehalt „which it is however for the referring court to
ascertain"). Die Aussage in § 4.2, „absolut notwendig"/„strictly
necessary" stehe weder im Normtext des Art. 6 Abs. 1 lit. f noch in
Rn. 42, ist zutreffend: `grep -c "strictly necessary"` = 2, beide
Treffer im Tenor (Z. 1323, 1384).

---

## C. Ergebnis je Pflicht-Kategorie

### 1. Zitat/Fundstelle stimmt nicht

**Ergebnis: wenige, überwiegend kleine Befunde — die Zitatarbeit ist
insgesamt überdurchschnittlich sauber.**

Geprüft wurden **alle** wörtlich markierten Zitate des Dokuments gegen
die fünf Rohbelege und die vier Repo-Dokumente: 11 DSK-Ziffern, 17
EuGH-Randnummern + Tenor, 20 LG-Randnummern, 10 DSGVO-Normstellen, 5
Repo-Stellen.

Befunde: **Q-16** (Rn. 220 trägt die Aussage nicht; „insoweit" aus dem
Zitat entfernt) · **Q-18** (acte claire = Rn. 75, nicht 76) · **Q-19**
(verschobenes Anführungszeichen im Rechtsmatrix-Zitat) · **Q-21**
(Tenor-Scope weggeschnitten) · **Q-22** (C-6: Zitat deckt nur einen der
beiden Praxisfälle) · **Q-23** (C-8 endet vor der Ausnahme, ohne
Auslassungszeichen).

**Keine** erfundenen Zitate, **keine** falsch zugeschriebenen Quellen,
**keine** grammatisch stillschweigend angepassten Zitate. Der
Grammatikfehler in LG Rn. 84 („nachkommen ist") ist im Dokument
ausdrücklich als Original gekennzeichnet und stimmt (`lg-…txt` Z. 296).
Bracket-Einschübe (`Zeitraum[s]`, `[führt]`, `[DSGVO]`) sind durchweg
korrekt markiert.

### 2. ⭐ Was aus der Quelle gar nicht erst angekommen ist

**Ergebnis: vier Auslassungen, davon zwei schwer.** Von der DSK-OH und
dem LG-Urteil rückwärts gelesen:

- **Q-03 (SCHWER):** ErwG 47 **Satz 4** — der einzige Satz des
  Erwägungsgrundes mit nachteiliger Rechtsfolge; er steht in der
  DSK-Quelle **zwischen** den zwei zitierten Stellen und ein zweites Mal
  in EuGH Rn. 45, die das Dokument nirgends nennt.
- **Q-04 (SCHWER):** LG **Rn. 87** — „Vorkehrungen bereits vor dem
  ersten Verarbeitungsschritt", „Bloße Absichten … rechtfertigen keine
  Datenverarbeitung". Trifft die O-2-Lücke direkt. Ebenso ungenutzt
  Rn. 78.
- **Q-05 (MITTEL):** Art.-14-Angabe **„Empfänger oder Kategorien von
  Empfängern"** (DSK Ziff. 2.1) im Mindestumfang des Briefs — obwohl das
  Vorhaben selbst Auftragsverarbeiter vorsieht.
- **Q-06 (MITTEL):** die an B-2 gekoppelte **Art.-24-TOM-Pflicht** aus
  DSK Ziff. 5.3 (Spam-Ordner/Betroffenenrechte-Mails).

Kleinere, nicht als eigener Befund geführte Auslassungen: die
Art.-5-Abs.-1-Grundsätze als ausdrücklicher Bestandteil der Abwägung
(DSK Ziff. 1.3.1, Z. 117–133, inkl. „Nennung der Quelle der Daten, wenn
Fremddaten verarbeitet werden") sind nur indirekt über C-5 und § 7.1
präsent; LG Rn. 83 (die großzügigere Ansicht setzt ihrerseits
Art.-13/14/21-Erfüllung **und** sofortige Erkennbarkeit voraus) taucht
inhaltlich in § 6.4 auf, aber ohne Fundstelle.

### 3. Entwarnung ohne Quelle im Satz

**Ergebnis: das Dokument ist hier auffallend diszipliniert — mit drei
Ausnahmen, davon eine schwer.**

- **Q-02 (SCHWER):** „Der gesamte UWG-Unlauterkeitsteil … ist auf einen
  gewerblichen Adressaten nicht übertragbar."
- **Q-13 (MITTEL):** FG-2, Ergebnisspalte „**Zulässig**" für die
  Impressumsquelle ohne Personennamen.
- **Q-20 (HINWEIS):** „✅ zulässig" / „Zulässig." ohne den
  A7-Vorbehalt „aber nicht schrankenlos" und ohne § 7 Abs. 1 UWG.

Grenzfall, den ich **nicht** als Befund führe, weil er in der
Risikorichtung wirkt: „Was **uneingeschränkt** trägt, ist der
DSGVO-Teil" (Z. 525–527). Der Satz überzeichnet in Richtung mehr Risiko
und steht in Spannung zu P-5 (§ 5.1: „B2B senkt das Schutzniveau nicht
auf null, **aber es senkt es**") und zum ⭐-Kasten direkt darüber (das
Urteil liefert nur Stufe-1-Ausschlusskriterien, „und die sind für uns
vollständig erfüllbar"). Als **innerer Widerspruch** ist er unten unter
D geführt.

**Ausdrücklich positiv:** Die Fallgruppen-Ergebnisse in § 5.4 tragen
ihre Belegstufe im Satz („vertretbar, nicht gesichert" · „Wir wägen hier
nicht ab — wir tragen ein Risiko"), die Zusammenfassung (Z. 432–437)
sagt das Unbequeme zuerst, und P-4/P-5/P-6 tragen jeweils eine eigene,
selbst formulierte Belegkraft-Grenze. Das ist die stärkste Eigenschaft
des Dokuments, und sie ist echt — ich habe sie an den Quellen geprüft,
nicht nur gelesen.

### 4. Vorbehaltsverlust beim Verdichten

**Ergebnis: vier Befunde.**

- **Q-08 (MITTEL):** DSK 5.4 — „kann / im Einzelfall / aus einer großen
  Menge" wird zu „muss nicht".
- **Q-10 (MITTEL):** P-7 — „Unsere Wellen sind klein" als Präsens-Tatsache,
  während die zitierten Quellen ~300/≈337 nennen und die eigene Kapazität
  „nicht erhoben" ist.
- **Q-17 (MITTEL):** P-2 — „in der Menge der Kontaktzeile", obwohl das
  Feldregister F-10/F-11/F-12 führt.
- **Q-16 (MITTEL):** „insoweit" aus dem Rn.-220-Zitat entfernt.

**Gegenprobe in die andere Richtung** — Stellen, an denen der Vorbehalt
korrekt mitgewandert ist und die ich einzeln geprüft habe: Rn. 49
(„could", nicht „is") · Rn. 48 („see, by analogy") · Rn. 53
(„which it is however for the referring court to ascertain") · Rn. 31
(restriktive Auslegung, ausdrücklich als „steht **gegen** uns" geführt) ·
DSK 1.2 („grundsätzlich … in Frage kommt", ausdrücklich abgegrenzt von
„ist zulässig") · DSK 4.6 („Für **zulässigerweise beim Betroffenen
erhobene** Kontaktdaten" — als Geltungsgrenze und als Analogie
gekennzeichnet) · DSK 4.4 („tatbestandlich **nicht** unser Fall") ·
DSK 1.4.2 b („Der Abschnitt heißt ‚Nutzen von Telefonnummern'"). In
diesen acht Fällen ist der Vorbehalt **vor** dem Satz übernommen worden,
nicht danach — genau die Reihenfolge, die die Regel verlangt.

### 5. Wird die Aufsichts-Gegenposition getragen oder weichgespült?

**Ergebnis: getragen — vollständig, an der richtigen Stelle, ohne
Abschwächung. Kein Befund gegen dieses Dokument; ein Randbefund an der
Zuschreibung.**

Im Einzelnen geprüft:

- **Wortlaut:** C-1 (Z. 376) gibt Ziff. 4.2 **vollständig und
  ungekürzt** wieder — vier Sätze, byte-genau gegen
  `dsk-oh-werbung-2022.txt` Z. 525–530 geprüft, einschließlich des für
  uns ungünstigen „Mangels Freiwilligkeit … regelmäßig … unzulässig".
  Nichts ist ausgelassen, nichts relativiert.
- **Platzierung:** Die Gegenposition steht nicht nur in § 5.2, sondern
  an **fünf** exponierten Stellen: in der Geltungsgrenze auf Seite 1
  (Z. 23–27: „An der zentralen Stelle steht die Aufsichtsauffassung
  ausdrücklich gegen uns"), als C-1 mit ⭐, als eigene Fallgruppe FG-4,
  in der Ein-Satz-Zusammenfassung (Z. 432–437), im Restrisiko-Vermerk
  für den VVT (§ 8) und in § 12.3 als Schlusssatz („Ziff. 4.2 ist der
  einzige Satz, der unseren Sachverhalt direkt trifft — und er trifft
  ihn **gegen uns**").
- **Kein Wegwischen:** Ich habe gezielt nach einer Argumentation
  gesucht, die Ziff. 4.2 im Ergebnis neutralisiert. Es gibt keine. Im
  Gegenteil: C-2 (Z. 377) schließt aktiv die zwei naheliegenden
  Ausweichargumente („wir schreiben ja nur Briefe" — kanalneutral; „gemeint
  sind nur Privatpersonen" — findet in der Quelle keine Stütze; ich habe
  Ziff. 4.1–4.3 im Volltext gelesen und bestätige beides). § 5.3
  sperrt drei weitere Argumente ausdrücklich. FG-4 formuliert:
  „**Wir wägen hier nicht ab — wir tragen ein Risiko.**"
- **Das „regelmäßig":** Das Dokument nutzt die Regel-Ausnahme-Formel
  nicht als Schlupfloch, sondern dreht die Beweislast korrekt um
  („deren Ausnahme **WIR** begründen müssten", Z. 428).

**Einziger Randbefund → Q-14:** Die Auffassung wird der „zuständigen
Aufsicht" zugeschrieben, obwohl Träger die DSK ist und das Dokument
selbst ausweist, ULD-Stellungnahmen nicht geprüft zu haben.

### 6. Ist die O-2-Lücke sichtbar und MIT AUSWIRKUNG geführt?

**Ergebnis: ja — sichtbar, mit Auswirkung, und das Dokument entscheidet
sie nicht selbst. Zwei Ergänzungen.**

- **Sichtbarkeit:** § 2.6 (Prüfgegenstand), § 8 lit. f („Bis zum
  Entscheid ist der VVT-Eintrag **unvollständig**"), § 9 als eigener
  Abschnitt, § 6.4 Ziffer 4 („ungemindert"), § 11.1 als offener Punkt,
  § 11.3 als Nachprüf-Trigger — sechs Stellen.
- **Auswirkung, alle drei geforderten:**
  (a) **VVT-Eintrag** — § 8 lit. f, ausdrücklich „unvollständig";
  (b) **Art.-14-Angabe** — § 9.1 mit dem Normwortlaut des Art. 14
  Abs. 2 lit. a (von mir am `dsgvo-cellar.txt` bestätigt) **und** mit
  der Rechtsfolge: „eine Art.-14-Verletzung ist genau der Punkt, an dem
  die lit.-f-Grundlage kippt (§ 6.2, Rn. 84)" — das ist die richtige
  Verknüpfung, Rn. 84 trägt sie;
  (c) **Abwägung** — § 9.1 mit DSK Ziff. 4.6, korrekt zitiert und
  korrekt als **Analogie** gekennzeichnet (die Ziffer gilt für
  „zulässigerweise beim Betroffenen erhobene Kontaktdaten", unser Fall
  ist Fremderhebung; das Dokument sagt das selbst).
- **Entscheidungsfähigkeit der Optionen:** Alle drei Optionen tragen
  Frist, Begründung, Folge für die Abwägung und Gegenargument — die vier
  geforderten Felder. Option C wird ⛔ nicht empfohlen, **mit Begründung
  aus dem Bestand** (Kollision mit dem D3.1-Geltungsvermerk); ich habe
  diesen Geltungsvermerk in `handel/kanal-rechtsmatrix.md` D3 Ziffer 1
  gelesen — er sagt exakt das, was das Dokument behauptet („Der Satz
  ‚zugleich die dokumentierte Löschfrist fürs Verarbeitungsverzeichnis'
  gilt NUR für die BESTANDSKUNDEN-Schiene … die 24 Monate dürfen nicht
  als pauschale Kaltkontakt-Aufbewahrungsfrist gelesen werden"). Die
  Zusatzfrage (nie angeschriebene Datensätze) ist sauber abgetrennt.
- **Entscheidet das Dokument sie doch selbst?** **Nein.** Die
  Empfehlungszeile („A oder B, leichte Präferenz für B") ist als
  Empfehlung ausgewiesen, der Kasten Z. 746–748 stellt ausdrücklich
  klar, dass der User entscheidet, und § 8 lit. f bleibt offen. Auch die
  Zusatzfrage endet mit „Vorschlag", nicht mit einer Setzung.

**Zwei Ergänzungen:**
1. Die Empfehlungszeile der Tabelle steht **in der Spalte von Option A**
   und lautet „A oder B — mit leichter Präferenz für **B**". Die
   B-Spalte ist leer. Wer die Tabelle spaltenweise liest (so werden
   Optionstabellen gelesen), findet die Empfehlung unter der falschen
   Option. Formsache, aber es ist eine Entscheidungsvorlage für den User
   → **HINWEIS**, keine eigene ID.
2. Die Auswirkung auf **Q-04** fehlt: LG Rn. 87 sagt, dass die
   Vorkehrungen vor dem ersten Verarbeitungsschritt stehen müssen. Für
   O-2 heißt das nicht nur „vor dem ersten Versand", sondern „vor dem
   Listenaufbau" — das ist strenger als das, was § 9 und § 11.1
   derzeit als Fälligkeit nennen („vor dem VVT-Eintrag und vor dem
   ersten Versand").

---

## D. Innere Widersprüche

| # | Stelle A | Stelle B | Schwere |
|---|---|---|---|
| **W-1** | § 6.2 (Z. 525–527): „Was **uneingeschränkt** trägt, ist der DSGVO-Teil, weil die DSGVO nicht zwischen B2B und B2C unterscheidet" | § 5.1, P-5 (Z. 367): „B2B senkt das Schutzniveau nicht auf null, **aber es senkt es**" — gestützt auf DSK 1.4.2 b, die genau im DSGVO-Rahmen B2B anders bewertet; sowie der ⭐-Kasten Z. 510–515, wonach der DSGVO-Teil nur Stufe-1-Ausschlusskriterien liefert, „und die sind für uns **vollständig erfüllbar**" | MITTEL |
| **W-2** | § 6.2 (Z. 523–526): UWG-Unlauterkeitsteil „nicht übertragbar" | § 3.2 Vorbehalt 2 (Z. 258–261): Rechtmäßigkeit nur, „solange … die Aufmachung nicht irreführend ist — genau hier ist das LG Düsseldorf gescheitert" | SCHWER → **Q-02** |
| **W-3** | § 5.4, FG-4 (Z. 428) / Zusammenfassung (Z. 435): „die **zuständige Aufsicht** … nach **ihrer** veröffentlichten Auffassung" | § 12.2, Erhebungsgrenze 3 (Z. 887–889): „ULD-Stellungnahmen … **nicht geprüft**"; § 2.1: Firmierung und damit Sitz offen | MITTEL → **Q-14** |
| **W-4** | § 5.1, P-7: „Unsere Wellen sind klein" | § 6.3, R-5 und § 4.3, O-4: Zielmenge „nicht erhoben"; Akquiseplan: auswertbare Welle ≈ 300–337 | MITTEL → **Q-10** |
| **W-5** | § 7.2: Erleichterung „ein bereits adressierter Brief muss nicht aus dem Stapel gezogen werden" | Quelle knüpft sie an „aus einer **großen Menge**" — bei kleinen Wellen (P-7) greift sie gerade nicht | MITTEL → **Q-08** |
| **W-6** | § 5.4, FG-2: Impressumsquelle ohne Personennamen = „Zulässig" | C-1 (eigenes Zitat): unzulässig ist „**das Auslesen** der Daten aus einem Online-Impressum" | MITTEL → **Q-13** |
| **W-7** | § 11.2 Nr. 1: die Rechtsmatrix-Formulierung „gestützt **ausschließlich** auf Art. 6 Abs. 1 lit. f und die Art. 12–14, 21 DSGVO" sei „**richtig**" | § 6.2 Grund 2 (Z. 507–508): der zweite Absagegrund ist ein **UWG**-Unlauterkeitsbefund (Rn. 88, §§ 3, 5, 5a UWG) | HINWEIS |

---

## E. Verhältnis zu `handel/kanal-rechtsmatrix.md` und `akquise/listenbau-regelwerk.md`

### E.1 Die sieben ausgewiesenen Abweichungen (§ 11.2) — einzeln geprüft

| Nr. | Behauptung | Prüfergebnis |
|---|---|---|
| 1 | LG-Urteil hat die Abwägung nie erreicht; beide Absagegründe auf Stufe 1 | **zutreffend.** Rn. 84 und Rn. 88 sind beide Ausschlüsse; Rn. 72 (`lg-…txt` Z. 272) ordnet beide der ersten der drei Voraussetzungen zu. Eigene Kontrolle: „Abwägung" 1 Treffer im ganzen Urteil, abstrakt (siehe § B). Einschränkung → **W-7** |
| 2 | Gegenansicht (OLG Stuttgart 2 U 63/22, Eckhardt ZD 2024, 399 / ZD 2025, 443) fehlt in der Rechtsmatrix | **zutreffend.** Rn. 79 (`lg-…txt` Z. 286) nennt alle drei Fundstellen wörtlich; Gegenprobe in der Rechtsmatrix: „Stuttgart" und „Eckhardt" je 0 Treffer. ⚠️ Kleine Ungenauigkeit: Das LG formuliert **konditional** („Sollten … dahin zu verstehen sein …, könnte dem … nicht gefolgt werden"), das Dokument sagt zweimal „weicht davon **ausdrücklich** ab" (Z. 532, 797) |
| 3 | Art. 21 Abs. 4 ist im Tenor nicht enthalten; untersagt wurde nach Art. 14 | **plausibel, von mir nur teilgeprüft** — ich habe den Tenor nicht Ziffer für Ziffer gegen die Antragsfassung gelesen. Als offener Prüfschritt unter G ausgewiesen |
| 4 | Rechtsmatrix C2 überdehnt EuGH Rn. 56 | **zutreffend und gut belegt.** Rn. 56 (`eugh-…EN.txt` Z. 1304) sagt „**does not appear to be** characterised by a relevant and appropriate relationship", nennt Glücksspiel/Suchtrisiko und bezeichnet die Marketingtätigkeit als „**although legitimate**". Die Rechtsmatrix C2 schreibt „wertet dieses Fehlen **ausdrücklich als Negativfaktor**" — das trägt Rn. 56 so nicht |
| 5 | Zwei Zahlen ohne Zählweg (199 / 109) | **zutreffend**, und die Zahlen reproduzieren exakt wie beschrieben (199 nur `-i`, 187 case-sensitiv, 109 case-sensitiv) — von mir unabhängig nachgezählt, siehe § B |
| 6 | Rechtsmatrix führt curia als nutzbare Quelle | **FALSCH** → **Q-01** |
| 7 | DSGVO-Abmahnbarkeit ist neu gegenüber Teil B | **überzeichnet** → **Q-24** |

### E.2 Nicht ausgewiesene Abweichungen und Spannungen

| Gegenstand | Fundstellen | ID |
|---|---|---|
| UWG-Unlauterkeit sei B2B nicht übertragbar ↔ Rechtsmatrix A7 (§ 5a Abs. 4 UWG gilt B2B; „Branchenbuch Berg" ist ein B2B-Fall) | § 6.2 ↔ A7 | **Q-02** |
| Robinsonliste als Abwägungsargument ↔ R-A7.7 („reine Verbraucher-Einrichtung", „ihr Abgleich keine Absicherung") — die im Dokument gegebene Auflösung trifft den Grund nicht | § 10 B-8 ↔ Regelwerk Z. 555–558 | **Q-09** |
| Erwartungswert 500–1.700 € ohne den Scope „E-Mail-Verstoß" | § 6.3 R-3 ↔ Rechtsmatrix B3 | **Q-11** |
| K1-Einstufung ohne „aber nicht schrankenlos" / § 7 Abs. 1 UWG | § 1.1, § 5.4 ↔ A7 | **Q-20** |
| Feldliste ohne F-10 | § 2.2 ↔ Regelwerk § 6 | **Q-17** |

**Ausdrücklich geprüft und ohne Befund:** Die Verankerung von Stufe 2 im
Regelwerk § 6 (§ 4.1) ist korrekt und das Zitat „beim ersten echten
Listenbau nochmals gegen den dann konkreten Zweck zu prüfen"
(§ 4.3) steht wörtlich in `akquise/listenbau-regelwerk.md` Z. 646–647
(zeilenübergreifend) · R-B1 „kein Listenaufbau auf Vorrat" steht in
§ 7.2 des Regelwerks (Z. 710) ✓ · R-A2.1, R-F1, R-B9, R-K1 existieren
und tragen die Aussagen ✓ · Q-1…Q-5 und die Q-2-Ausprägung `Impressum`
existieren (§ 5.3, Z. 621–625) ✓ · W-b1…W-b4 stimmen (Z. 147–150) ✓ ·
die Zuständigkeitsangabe ULD/HmbBfDI deckt sich mit Rechtsmatrix B4 und
Regelwerk § 8a ✓ · die KMU-Ausnahme-Formulierung in § 8 stimmt mit C6
überein ✓ · die D3.1- und D3.2-Wiedergaben stimmen wörtlich ✓.

### E.3 Die zwei Nachträge in `akquise/listenbau-regelwerk.md`

**Nachtrag 1 — Kasten bei § 3 Pflicht 4 (Z. 272–302): sachlich richtig,
Erledigt-Meldung überschießt NICHT.**

Der Kasten lässt die Vorfassung sichtbar stehen (richtig nach der
Doku-Hygiene-Regel), markiert „Stufe 3 OFFEN" als überholt und listet
unter „**Was der Nachtrag NICHT bedeutet — positiv aufgelistet, damit
die Entwarnung nicht überschießt**" fünf Punkte: kein „zulässig",
O-2 offen, Art. 6 Abs. 4 neu offen, anwaltlicher Rat nicht ersetzt,
acht Bau-Pflichten nicht eingearbeitet. Ich habe alle fünf gegen den
Prüfgegenstand geprüft — sie treffen zu. Die Zahl „acht" stimmt
(B-1…B-8). Die Aussage „D2 Pflicht 4 und W-b1 sind damit erfüllt" ist
korrekt konstruiert, weil beide Pflichten „je Datenfeld" verlangen und
der Kasten ausdrücklich sagt, dass die Erforderlichkeit je Feld
weiterhin aus § 6 kommt und nur Stufe 3 aus dem neuen Dokument.

**Zwei Einwände:**
1. Der eingebettete Satz „in diesem Regelwerk und in der Rechtsmatrix
   **bisher nirgends geführt**" (Z. 292–293) steht in der Datei, über die
   er eine Nullaussage macht → dieselbe Selbstwidersprüchlichkeit wie
   **Q-12**.
2. Rn. 87 (**Q-04**) hätte hier hingehört: Der Kasten sagt „Der erste
   Versand bleibt gesperrt" — nach Rn. 87 ist der kritische Zeitpunkt
   der **Listenaufbau**, nicht der Versand.

**Nachtrag 2 — Zeilen O-8/O-9 in § 10 (Z. 926–927): O-8 richtig,
O-9 trägt eine nicht mehr reproduzierbare Messung.**

- **O-8** ist durchgestrichen und mit „✅ **ERLEDIGT 12.08.2026
  (R09-A)**" versehen, **mit** dem Zusatz „**Kein Blankoscheck** — was
  damit NICHT erledigt ist, steht im Nachtrags-Kasten bei § 3 Pflicht 4
  (O-2 offen, Art. 6 Abs. 4 neu offen, acht Bau-Pflichten noch nicht
  eingearbeitet, anwaltlicher Rat unberührt)". Das ist die richtige Form
  — die Erledigt-Meldung **überschießt nicht**.
- **O-9** enthält die Messung „gemessen 12.08.2026: ‚Art. 6 Abs. 4'
  **0 Treffer in beiden Dokumenten**, Positivkontrolle ‚Art. 6 Abs. 1'
  **7 bzw. 6** Treffer" — in einer Zeile, die den Suchbegriff selbst
  viermal enthält. Am geprüften Stand: Regelwerk 4 Treffer, „Art. 6
  Abs. 1" 7/7 → **Q-12**.

---

## F. Was ich ausdrücklich als gut befunden habe

Weil ein Prüfprotokoll ohne diesen Teil die Disposition verzerrt:

1. **Die Kernaussage über das LG-Urteil ist unabhängig reproduziert.**
   „Die Abwägung hat das Gericht nie erreicht, das Urteil liefert keinen
   Abwägungstopos" — bestätigt durch eine Messung, die das Dokument
   selbst nicht angeboten hat („Abwägung" 1 Treffer im ganzen Urteil,
   abstrakt in Rn. 73).
2. **P-4 und P-6 tragen ihre eigene Belegkraft-Grenze im Satz** — „Das
   ist ein Schluss aus einer **Lücke**. Er trägt als Argument, **nicht**
   als Beleg" bzw. „Die Bewertung … ist **unsere** Einschätzung — die
   Quelle liefert das Kriterium, nicht das Ergebnis". Das sind genau die
   Sätze, die in solchen Papieren üblicherweise fehlen.
3. **§ 5.3 (drei gesperrte Argumente)** ist eine Selbstsperre gegen die
   drei naheliegendsten Fehlargumente, jedes mit Quelle. S-1 (Art.-14-
   Erfüllung ist kein Abwägungsplus) ist zusätzlich konsequent
   durchgezogen: die Art.-14-Kette taucht in § 5.1 tatsächlich nicht als
   Pluspunkt auf — ich habe es geprüft.
4. **C-5 steht da, obwohl sie tatbestandlich nicht passt** („Die Stelle
   steht hier, weil ein Prüfer sie sonst als ausgelassen findet"). Das
   ist die richtige Haltung, und sie hat funktioniert.
5. **§ 12.3** ist eine vorbildliche Negativbefund-Dokumentation:
   Suchraum, Methode, zwei Textfassungen wegen der PDF-Silbentrennung,
   vier Positivkontrollen, eine Gegenrichtung, eine
   Enthyphenierungs-Kontrolle mit belegter Blindstelle. **Alle Zahlen
   reproduzieren.** Das ist der methodisch stärkste Abschnitt.
6. **Die Übertragungsgrenze zu EuGH Rn. 51–53** (§ 4.2) adressiert ein
   Argument, das gegen das Vorhaben spricht, bevor es jemand vorbringt —
   samt des Vorbehalts, unter den der Gerichtshof seine eigene Erwägung
   stellt.
7. **§ 4.2 „absolut notwendig"** legt eine Verschärfung offen, die im
   Regelwerk fehlt, und entscheidet sie ausdrücklich nicht.

---

## G. Laufstatus dieser Prüfung

**Vollständig durchgeführt:**

- Prüfgegenstand vollständig gelesen (Z. 1–952, in zwei Leseblöcken
  1–589 und 589–952; keine Auslassung).
- **Alle** im Dokument zitierten DSK-Ziffern am Rohtext gelesen:
  Ziff. 1.2, 1.3.1, 1.3.2 (a und b), 1.4, 1.4.1, 1.4.2 (a und b), 1.5,
  2.1, 2.2, 2.3, 4.1–4.6, 5.1–5.4, Fn. 1 — dazu die Gliederung
  (Inhaltsverzeichnis Z. 22–56) gegen die Abschnittsüberschriften im
  Text geprüft (Vollzähligkeit der Ziffern).
- **Alle** im Dokument genannten EuGH-Randnummern einzeln aus dem
  Volltext extrahiert (31, 37, 38, 39, 40, 42, 43, 48, 49, 50, 51, 52,
  53, 54, 55, 56) plus die nicht genannte Rn. 45; deutscher Tenor
  vollständig.
- **Alle** im Dokument genannten LG-Randnummern gelesen (48, 74, 75, 76,
  77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 109, 110, 111, 135,
  141, 220, 238).
- **Alle** zitierten DSGVO-Normstellen am `dsgvo-cellar.txt` verifiziert
  (10 Stellen, siehe § B), ErwG 47 vollständig satzweise.
- **Alle** Zahlen des Dokuments selbst nachgezählt, jeweils mit
  genanntem Zählweg (13 Werte, siehe § B).
- **Alle** Negativ-Aussagen mit eigener Positivkontrolle im selben
  Suchraum: § 12.3-Nullliste (15 Begriffe × 2 Fassungen), § 6.2
  (§ 7 UWG / hotel / b2b / Rechtsmittel), § 5.5 (Art. 6 Abs. 4),
  § 11.2 Nr. 6 (curia), § 7.1 (Art. 14 Abs. 5 in der OH: 0 Treffer für
  „Abs. 5" im gesamten Text — die Aussage des Dokuments ist sogar zu
  schwach formuliert), Verhältnis-Tabelle (Rohbeleg-Ordner R07-C),
  § 8-Kopf (`ops/`).
- § 11.2 Ziffern 1, 2, 4, 5, 6, 7 einzeln an den Quellen geprüft.
- Beide Nachträge in `akquise/listenbau-regelwerk.md` im Volltext
  gelesen und gegen den Prüfgegenstand abgeglichen.

**Nur stichprobenhaft:**

- `handel/kanal-rechtsmatrix.md`: gelesen wurden Kopf/Geltungsgrenze,
  A7 vollständig, B1, B3, B4, C1–C7 vollständig, D1–D3 vollständig,
  Offene-Punkte-Tabelle. **Nicht gelesen:** A1–A6 (E-Mail, Telefon,
  LinkedIn, Messe, Bestandskunden, Newsletter) — für § 1.1 der
  Eingangsschranke habe ich die Einstufungen nur aus D1 und der
  Doku-eigenen Tabelle abgeglichen, nicht aus den A-Kapiteln selbst.
- `akquise/listenbau-regelwerk.md`: gelesen wurden § 3 Pflicht 4
  (Kasten + Nachtrag), § 5.3, § 6 (Feldregister vollständig), § 7.2,
  § 8a-Auszug, § 10 (offene Punkte), R-A7.5/R-A7.7/R-B1/R-B9/R-F1/R-K1.
  **Nicht gelesen:** §§ 1, 2, 4, 8, 9 sowie § 7.1/7.3/7.4 im Volltext.
- `akquise/akquiseplan.md`: nur die für P-7, O-4 und § 11.3 relevanten
  Abschnitte (§ 4.2 „harter Befund", § 4.3 Wellengröße, Annahmen A-1/
  A-6/A-8, KPI-5). **Nicht gelesen:** der Rest.
- `fund/positionierungspapier.md`: nur die Gliederung. Die
  Leistungsbeschreibung in § 2.3 des Prüfgegenstands
  („PMS-Einführung auf Apaleo, Self-/Pre-Check-in, digitaler
  Meldeschein, Payment, Zutritt, KI-Gästekommunikation") habe ich
  **nicht** Satz für Satz gegen § 2 des Positionierungspapiers gelesen.
  → **offener Prüfschritt.**

**Gar nicht geprüft (mit Grund):**

1. **§ 11.2 Nr. 3** (Art. 21 Abs. 4 nicht im Tenor, untersagt nach
   Art. 14, Tenor Nr. 4). Der Urteilstenor wurde von mir nicht Ziffer
   für Ziffer gegen die Untersagungsanträge gelesen. **Nicht als „keine
   Auffälligkeit" zu lesen — nicht erhoben.**
2. **`sensibel/rohbelege-R09-A/pruefe-zitate-o8.js` und
   `selbsttest-o8.md`.** Das Dokument macht in § 12.4 Aussagen über
   dieses Werkzeug („ein Anker je Pooldatei", „drei Muster in der
   Gegenrichtung", „vier müssen bestätigt, vier gemeldet werden", „Der
   Erfolgsfall ist im Skript hinterlegt"). Ich habe das Skript **weder
   gelesen noch ausgeführt** — mein Auftrag war der Text. Damit ist
   **keine** dieser fünf Aussagen von mir bestätigt. Gerade hier wäre
   die Prüfung wertvoll (Regel: ein Selbsttest, der denselben
   Extraktionspfad nutzt, erbt dessen Blindstellen). **Offener
   Prüfschritt für die Leitsession.**
3. **`protokolle/R09-A-abschluss.md`** — § 12.4 verweist für das
   Ergebnis des mechanischen Zitatabgleichs dorthin. Nicht gelesen
   (nicht im Prüfauftrag). Ob die dort gemeldeten Zahlen zum Dokument
   passen, ist **nicht geprüft**.
4. **`bfdi-info1-dsgvo-bdsg.txt`** (324 S.) — im Dokument als Quelle
   nicht zitiert, deshalb nicht ausgewertet.
5. **`dsk-oh-werbung-2022_zweitkanal-bfdi.txt`** — die md5-Identität der
   beiden Textextrakte habe ich **nicht** nachgerechnet. Die Angabe im
   Beschaffungsprotokoll ist damit von mir unbestätigt; da beide Dateien
   dieselbe Byte-Größe (58.565) haben, ist sie plausibel, mehr nicht.
6. **Rechtsprechungsrecherche jeder Art.** Ich habe keine externe Quelle
   abgerufen, nur die auf der Platte liegenden Volltexte. Ob es
   inzwischen weitere Entscheidungen zu B2B-Kaltpost gibt, ist hier
   **nicht erhoben** — die Erhebungsgrenzen in § 12.2 des Dokuments
   bleiben unwidersprochen, aber auch unbestätigt.
7. **Kein Abbruch** dieser Prüfung; kein Prüfschritt wurde begonnen und
   unfertig gelassen. Die sieben Punkte oben sind gar nicht erst
   begonnen worden.

---

## H. Die zwei Pflichtfragen

### (a) Welche Verfälschung hätte mein Verfahren NICHT gefangen?

**Vier Klassen, die ich benennen kann:**

1. **Eine erfundene Aussage über eine Quelle, die ich nicht auf der
   Platte habe.** Mein gesamtes Verfahren ruht auf fünf Rohbelegen im
   Ordner `rohbelege-R09-A`. Hätte das Dokument geschrieben „das OLG
   Stuttgart hat in 2 U 63/22 entschieden, dass X" — ich hätte es nur
   insoweit prüfen können, wie das LG-Urteil darüber referiert. Alle
   Sekundärzitate im Dokument (BGH I ZR 186/17, Eckhardt ZD 2024/2025,
   OLG Stuttgart) habe ich **ausschließlich über das LG-Urteil**
   verifiziert; über deren tatsächlichen Inhalt weiß ich nichts. Ein
   plausibel erfundener Inhalt dieser Entscheidungen wäre
   durchgerutscht.
2. **Eine falsche Übersetzung des englischen EuGH-Volltextes.** Das
   Dokument zitiert Rn. 31/37/38/40/42/43/48/49/50/53/54 auf Englisch
   und referiert sie auf Deutsch. Ich habe die englischen Zitate
   byte-genau geprüft — aber die **deutschen Referatssätze daneben**
   („Für Stufe 1 gilt: …", „Der EuGH hält in Rn. 51–53 für den dortigen
   Sachverhalt ein milderes Mittel für denkbar") habe ich als
   Übersetzungsleistung gelesen und für richtig gehalten, nicht Wort für
   Wort gegen eine amtliche deutsche Fassung geprüft — die es laut § 12.2
   nicht gibt. Eine subtile Bedeutungsverschiebung in der Übersetzung
   hätte mein Verfahren strukturell nicht fangen können.
3. **Eine Verfälschung, die zwischen zwei Quellen liegt.** Ich habe
   jedes Zitat gegen seine Quelle geprüft und die Quellen einzeln
   rückwärts gelesen. Eine falsche **Synthese** zweier korrekt zitierter
   Stellen — etwa die Behauptung, DSK Ziff. 1.4.2 b und EuGH Rn. 54
   ergäben zusammen einen Maßstab, den keine der beiden trägt — hätte
   ich nur gefunden, wenn sie mir beim Lesen aufgefallen wäre. Ein
   systematisches Verfahren dagegen hatte ich nicht.
4. **Eine falsche Zahl in einer Quelle, die ich für richtig genommen
   habe.** Ich habe die Zahlen des Dokuments gegen die Rohbelege gezählt.
   Ob die Rohbelege selbst die richtigen Fassungen sind (die
   Februar-2022-Fassung der OH, das richtige Urteil), habe ich **nicht**
   unabhängig geprüft — ich habe das Beschaffungsprotokoll gelesen und
   ihm geglaubt. Das ist genau die Stelle, an der ein
   Belege-schreibt-seine-eigene-Prüfung-Problem sitzt.

**Und ein fünfter, konkreter Punkt:** Q-01 (die falsche
curia-Behauptung) habe ich nur gefunden, weil ich zufällig als erstes
`grep -n "curia" handel/kanal-rechtsmatrix.md` laufen ließ, um die
Fundstelle zu **lesen**. Hätte ich die Aussage — wie die meisten
Prüfer — für eine triviale Randbemerkung gehalten und nicht
nachgeschlagen, wäre sie stehen geblieben. Die Lehre daraus gilt
allgemein: **Behauptungen über den INHALT eines Nachbardokuments werden
nicht plausibilitätsgeprüft, sondern gegriffen.**

### (b) Hätte ich meine Funde auch OHNE die Kategorien-Hinweise gefunden?

**Ehrlich: teils ja, teils klar nein.**

**Ohne die Hinweise gefunden hätte ich mit hoher Wahrscheinlichkeit:**
Q-01 (curia — fällt beim Nachschlagen sofort auf), Q-12 (die
0-Treffer-Messung — ich zähle Zahlen ohnehin nach), Q-11 (Scope
„E-Mail" — fällt beim Lesen der Quellzeile auf), Q-16/Q-18/Q-19/Q-22/Q-23
(die Zitat-Handwerksfehler — das ist Routine beim Gegenlesen).

**Ohne die Hinweise NICHT gefunden hätte ich:**

- **Q-03 (ErwG 47 Satz 4).** Das ist der Fund, den ich der
  Kategorie 2 verdanke — und zwar wörtlich ihrer Formulierung „von der
  QUELLE RÜCKWÄRTS lesen". Ich habe ihn gefunden, weil ich die
  DSK-Ziffer 1.3.1 **am Stück** gelesen habe, statt nur die beiden im
  Dokument zitierten Sätze aufzusuchen. Ohne diese Anweisung hätte ich
  die zitierten Zeilen bestätigt, abgehakt und wäre weitergegangen — die
  Auslassung erzeugt keine auffällige Textstelle, das stimmt genau so.
- **Q-04 (Rn. 87), Q-05 (Empfänger), Q-06 (Art.-24-TOM).** Dieselbe
  Mechanik. Alle drei sind Abwesenheiten.
- **Q-09 (Robinsonliste).** Die Aufforderung, ausgewiesene
  Abweichungs-Behauptungen zu prüfen, hat mich R-A7.7 im **Volltext**
  aufschlagen lassen. Beim bloßen Lesen des Dokuments wirkt die
  Auflösung „UWG hier, DSGVO dort" völlig überzeugend.
- **Q-10 (Wellengröße).** Ohne den Hinweis, Zahlen selbst nachzurechnen
  und Prämissen an der Quelle zu prüfen, hätte ich „unsere Wellen sind
  klein" als Selbstverständlichkeit gelesen.
- **Q-02 (UWG-Übertragbarkeit).** Grenzfall. Der Satz hat mich beim
  Lesen gestört; ob ich ohne die Kategorie „Entwarnung ohne Quelle" bis
  zu A7 zurückgegangen wäre, weiß ich nicht.

**Ein Nebeneffekt, der genannt gehört:** Die Kategorien 5 und 6 haben
mich auf Stellen gelenkt, an denen ich **nichts** gefunden habe — die
Aufsichts-Gegenposition wird tatsächlich getragen, und O-2 ist
tatsächlich mit Auswirkung geführt. Das war kein verschwendeter
Aufwand: Diese beiden Befunde („keine Auffälligkeit, hier ist warum")
sind für die Disposition genauso wichtig wie die 24 Befunde, weil sie
die beiden Stellen betreffen, an denen dieses Dokument überhaupt seinen
Zweck hat. Hätte ich sie nicht ausdrücklich prüfen müssen, hätte ich
über sie geschwiegen — und Schweigen wäre als „nicht geprüft" oder als
„unauffällig" gelesen worden, je nach Leser.

---

## I. Befundübersicht nach Schwere

| Schwere | Anzahl | IDs |
|---|---:|---|
| **SCHWER** | 4 | Q-01, Q-02, Q-03, Q-04 |
| **MITTEL** | 13 | Q-05, Q-06, Q-07, Q-08, Q-09, Q-10, Q-11, Q-12, Q-13, Q-14, Q-15, Q-16, Q-17 |
| **HINWEIS** | 7 | Q-18, Q-19, Q-20, Q-21, Q-22, Q-23, Q-24 |
| **Summe** | **24** | |

Dazu 7 innere Widersprüche (W-1…W-7), von denen 5 mit einer Q-ID
identisch sind; W-1 und W-7 haben keine eigene Q-ID und sind allein
unter § D geführt.

*„Hinweis" ist hier eine Schwere-Angabe, keine Erledigungs-Kategorie.
Jeder der 24 Befunde braucht eine Disposition: repariert, ausdrücklich
verworfen, oder mit benanntem Träger.*

---

*Erstellt am 12.08.2026 als unabhängige Prüfung zu Session R09-A
(MKT-AKQ). Diese Session hat außer dieser Datei nichts geschrieben und
keinen git-Befehl abgesetzt.*
