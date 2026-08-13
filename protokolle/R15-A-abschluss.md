# R15-A (Ben Beckman) — Abschlussmeldung: Anwalts-Briefing mit vier Fragen

**Datum:** 14.08.2026 (Freitag, Nacht-Slot) · **Auftrag:**
`protokolle/tagesplan-2026-08-13.md`, Abschnitt „Session-Prompts R15",
Strang R15-A (korrigierte Fassung vom 14.08. 00:15).

**Modell dieser Session:** ⚠️ **Nicht per Statuszeile belegt.** Die
Umgebungsangabe beim Session-Start nennt **Opus 5 (1M context)**
(`claude-opus-5[1m]`). Nach CLAUDE.md Regel 7 belegt nur die Statuszeile
oder `/cost` das tatsächliche Modell; die Selbstauskunft des Modells
gilt ausdrücklich nicht. **Bestätigung durch den User steht aus.**

**Token-Verbrauch:** Für die Hauptsession seit der `/cost`-Abschaffung
nicht erhebbar. Subagenten: LG-Rohbeleg-Agent **194.475 Tokens / 49
Tool-Aufrufe** · O-8-Agent **189.572 / 23** · Prüfer siehe Block 1.

---

## Block 1 — Gebaut und verifiziert

### Commits

| Hash | Inhalt |
|---|---|
| **`cca1919`** | `handel/anwalts-briefing-2026-08.md` (997 Zeilen). Zugleich der **eingefrorene Prüfstand** |
| **(dieser Commit)** | Nacharbeit nach eigener Konsequenz-Probe + Prüfer-Disposition + Prüferprotokoll + diese Meldung |

**⚠️ Push-Lage — bewusst ZURÜCKGEHALTEN.** Gemessen nach frischem
`git fetch` zu **zwei** Ständen (Doppel-Messstand):

| Messzeitpunkt | ungepushte Commits unter dem eigenen | davon fremd |
|---|---:|---:|
| nach `cca1919` | 6 | **5** (ROCKSTAR · ROUX · LIMEJUICE · ROUX · YASOPP) |
| nach `ba5a059` (Abschluss) | 14 | **13** (zusätzlich 3× YASOPP, 3× ROUX, 1× ROCKSTAR) |

Ein Push — auch der gezielte Refspec `git push origin <mein-hash>:main` —
würde sie als **Vorfahren mitveröffentlichen**; der Refspec schützt nur
nach oben. Nach CLAUDE.md („dagegen hilft nur, nicht zu pushen und zu
warten") **habe ich nicht gepusht.** Beide Commits sind lokal
vollständig; es fehlt allein die Veröffentlichung. **R15-B hat dieselbe
Entscheidung getroffen** (Commit `2dd212e`, „Push ZURUECKGEHALTEN"), was
die Lage bestätigt, sie aber nicht auflöst. Auflösung durch die
Leitsession oder durch den Push einer Session, die alle darunter
liegenden Stände als abgeschlossen kennt.

### Das Deliverable

`handel/anwalts-briefing-2026-08.md` — ein Briefing, vier Fragen, je mit
den fünf Pflichtteilen (Sachverhalt · konkrete Fragestellung ·
Quellenlage mit Fundstelle · Gegenansicht · Entscheidungsalternativen):

1. **Zweckänderung nach Art. 6 Abs. 4 DSGVO** bei Adressen aus
   Online-Impressen (intern O-9) — mit dem vollständigen Normtext
   lit. a bis e und einer Tatsachen-Zeile je Kriterium, damit der Anwalt
   die Grundstruktur nicht selbst rekonstruieren muss.
2. **Reichweite von LG Düsseldorf 38 O 243/23** — der widerlegte
   Kernsatz wird VORGELEGT, die Neufassung ausdrücklich nicht
   vorgenommen; drei Formulierungsvarianten zur Auswahl.
3. **§ 3a UWG bei reiner B2B-Aussendung** — UGPRL-Grenze aus Rn. 129,
   ihre Auflösung in Rn. 130, Kostenfolge § 13 Abs. 4 Nr. 2 UWG.
4. **Täglicher Lizenzserver-Ping** im Modell mit kundeneigener Instanz —
   getrennt nach rechtlicher Frage (an den Anwalt) und technischer
   Klärung (bei uns).

Dazu: ein markierter Kasten mit **zwei weiteren Kandidaten** für
dieselbe Beauftragung als **Vorlage, nicht als Festlegung** (§ 4a) · ein
Abschnitt „Was wir ausdrücklich NICHT fragen" · die Belegstufen- und
Grenzenliste · Firmierung und Empfänger als sichtbare Platzhalter mit
Gate-Vermerk.

**Kurz-IDs:** Im Anwaltsdokument steht durchgehend der Gegenstand im
Klartext, das interne Kürzel höchstens in Klammern — mit ausdrücklichem
Hinweis im Text, dass `O-11` und `O-4` im eigenen Bestand mehrfach
belegt sind.

### Die drei delegierten Prüfer-Hinweise — jeder am Objekt geprüft

Der Auftrag nannte drei Kandidaten, „die im Bestand als offen geführt
sein sollen", ausdrücklich als **delegierte** Angaben. Ergebnis:

| Kandidat | Auftragsannahme | Befund am Objekt |
|---|---|---|
| **EuGH C-621/22 Rn. 56** | „von R14-B als unbearbeitet gemeldet — **braucht den Volltext**" | **Prämisse trifft nur zur Hälfte zu.** Der Posten ist unbearbeitet ✔ — aber der Volltext **liegt seit 12.08.2026 vor** (`sensibel/rohbelege-R09-A/eugh-c-621-22-EN.txt`, englische Fassung; die deutsche ist über den amtlichen Kanal nicht abrufbar, dazu die amtliche deutsche Amtsblatt-Mitteilung mit dem Tenor). Es fehlte keine Beschaffung, sondern die Auswertung. Rn. 56 ist jetzt im Wortlaut im Briefing, mit der Feststellung, dass die Passage an das vorlegende Gericht gerichtet und einzelfallgebunden ist |
| **Rechtskraft/Instanz LG Düsseldorf** | „nie geprüft" | **Trifft zu.** Selbst gemessen: `berufung\|rechtsmittel\|rechtskräftig\|rechtskraft\|revision` case-insensitiv **0 Treffer**, bei greifenden Positivkontrollen (`vorläufig vollstreckbar` 1 · `Urteil` 118 case-sensitiv / 144 case-insensitiv · `gemäß` 80 · **`ä` 911** als Kontrolle desselben Zeichenkanals, weil der Suchbegriff einen Umlaut trägt). Ergebnis ist **„nicht feststellbar", kein Negativbefund**. Im Briefing als eigene Frage an den Anwalt gestellt, der sie mit Datenbankzugang in Minuten klären kann |
| **Rn. 130 (Art. 3 Abs. 4 UGPRL)** | „soll die Rn.-129-Grenze im eigenen Beleg auflösen" | **Prämisse „offen" trifft nicht zu:** Rn. 130 ist seit R14-B (Prüferbefund PB-17) in `handel/kanal-rechtsmatrix.md` Teil B eingearbeitet — Wiedergabe am Rohbeleg geprüft, sie stimmt. **Sachlich ist der Punkt aber schärfer, als die Einarbeitung erkennen lässt:** Rn. 130 löst die Grenze ausdrücklich für „eine **auch Verbraucher erreichende** Geschäftspraxis" auf, und der herangezogene letzte Satz des Erwägungsgrundes 14 UGPRL betrifft nach seinem Wortlaut **Art. 13 Abs. 3 der Richtlinie 2002/58/EG** (elektronische Kommunikation). Beides steht jetzt im Briefing als Frage, nicht als Schluss |

### Eigener Quellen-Anker: zwei Normtexte neu beschafft

Die Rechtsmatrix zitiert UWG- und UGPRL-Wortlaute mit Belegstufe ① A,
**ohne dass ein Volltext im Rohbelege-Bestand lag** (`find sensibel
-iname "*uwg*"` → 0). Neu in `sensibel/rohbelege-R15-A/`, mit
Beschaffungsprotokoll, SHA-256 und Positivkontrollen:

- **UWG**, gesetze-im-internet.de, Fassung „zuletzt geändert durch
  Art. 6 G v. 12.5.2026" (HTTP 200, 108.898 B → 69.640 B Text),
- **UGPRL** Richtlinie 2005/29/EG in **Ursprungsfassung** (ABl. L 149/22)
  **und konsolidierter Fassung** Stand 28.05.2022 (je HTTP 200).

Damit sind § 3a UWG, § 8 Abs. 3 UWG, § 13 Abs. 4 UWG, Art. 3 Abs. 1 und
Abs. 4 UGPRL sowie der letzte Satz des Erwägungsgrundes 14 im Wortlaut
belegt statt zitiert.

### Prüferbefunde — kategorienweise MIT NENNER

Prüfer: unabhängiger Subagent, frischer Kontext, eingefrorener Stand
`cca1919` (über `git show` bezogen, nicht aus dem wandernden
Arbeitsbaum), Schreibrecht nur auf `protokolle/R15-A-pruefer.md`.
**293.253 Tokens / 43 Tool-Aufrufe**, ein Lauf, kein Abbruch.
**22 Befunde: 5 SCHWER · 11 MITTEL · 6 HINWEIS.**

> **22 von 22 disponiert — 19 vollständig repariert, 2 teilweise
> (Rest ausgewiesen), 1 bewusst verworfen mit benanntem Träger, 0
> stillschweigend offen.** **Jeder tragende Befund wurde vor der
> Reparatur selbst am Rohbeleg nachgemessen**, nicht am Prüferwort.

| Kategorie | Anzahl | Disposition |
|---|---|---|
| **SCHWER** | **5 von 5 repariert** | **S-1** Rn. 111 — abweichende Auffassung des **Berufungsgerichts** (OLG Düsseldorf, Beschl. 20 W 37/24) fehlte vollständig; am Rohbeleg bestätigt (Z. 350, „20 W 37/24" 1 Treffer). Aufgenommen in § 2.3 im Wortlaut, in die Gegenansichts-Tabelle § 2.4, in die Grenzenliste § 7.2, als Teilfrage in § 2.2 Nr. 4; die Lesehilfe zu Rn. 90–110 sagt jetzt, dass die Kammer sich die Passage in Rn. 111 zu eigen macht. **Eigene Präzisierung gegenüber dem Prüfer:** Die abweichende Auffassung betrifft die **lauterkeitsrechtliche** Würdigung, nicht die DSGVO-Prüfung — sie wirkt über Rn. 88 zurück; so steht es jetzt im Text · **S-2** § 1.5 Weg C behauptete „kein Personenbezug" als Tatsache, die eigene Quelle (O-8 FG-2) führt „vertretbar, nicht gesichert"; Fassung der Quelle übernommen, zusätzlich als Teilfrage 1.2 Nr. 5 gestellt, Quell-Abgleich wiederholt und der Vermerk im Statusblock präzisiert · **S-3** Rn. 134 nimmt das zitierte „gebilligt" zwei Sätze später zurück („nicht entscheiden [müssen] … auch nicht ausgeschlossen"); Tabellenzeile ergänzt, der Satz „ruht auf der Billigung durch den EuGH" **gestrichen statt abgeschwächt**, Art. 3 Abs. 3 UGPRL in die Normtextliste aufgenommen · **S-4** DSK Ziff. 2.2 (Monatsfrist **ab Erhalt der Daten**, „welche Bedingung zuerst eintritt") fehlte; als Fundstelle in § 1.3 b und als Teilfrage 1.2 Nr. 6 aufgenommen · **S-5** kein Mandats-/Vertraulichkeitsrahmen: Kopf trägt jetzt Vertraulichkeitsvermerk und Zweckangabe; der offenbarende Satz 7 ist als **ausdrückliche User-Entscheidung vor dem Versand** in den Statusblock gehoben, mit drei Optionen und Empfehlung |
| **MITTEL** | **9 von 11 vollständig, 2 teilweise** | **M-1** `Direktwerbung` ist unter dem deklarierten case-insensitiven Zählweg **26**, nicht 21 (5 Versalien-Treffer) — selbst nachgemessen, korrigiert und als Kontrollpaar cs=21/ci=26 ausgewiesen · **M-2** Wortstamm `Mitt?bewerber` = **9**, nicht 8 (die Tippfehlerform aus Rn. 129) — korrigiert, Formen aufgeschlüsselt · **M-3** DSK Ziff. 4.1 endete vor ihrem eigenen Vorbehalt; jetzt vollständig (drei Sätze) mit der Bedingung „spätestens bei der Datenerhebung ist zu informieren" als vierter Beobachtung · **M-4** die Ellipse im DSK-B2B-Zitat verschluckte dessen Bedingung; Zitat vollständig, dazu der Klammerzusatz „(dies kann z. B. ein geschäftlicher Vorkontakt sein)" und die ausdrückliche Feststellung, dass wir die Bedingung nicht erfüllen · **M-5** Rn. 129 vollständig wiedergegeben (die elidierte Hälfte trägt die B2C-Beschränkung, auf die Frage 3.2 Nr. 2 zielt) · **M-6** DSK Ziff. 5.1 — die Sperrdatei hängt an derselben Rechtsgrundlage wie die zu prüfende Verarbeitung; Zirkel in § 1.3 lit. e offengelegt, die Unterrichtungspflicht nach Art. 12 Abs. 3 in § 4a aufgenommen · **M-7** EuGH Rn. 54 (Umfang und Auswirkung — der einzige Faktor, der für uns spricht) ergänzt · **M-9** § 3.5 Weg B trug zwei Rechtsfolgen im Indikativ; auf „in der Absicht … ob beides trägt, ist gerade Gegenstand" umgestellt · **M-10** Plattform-Kanal auf den Quellenstand zurückgeführt („offene Rechtsfrage mit Restrisiko, nicht ein grüner Kanal"), Superlativ „der einzige Kanal" relativiert · **M-11** Grenzenliste § 7.2 um sechs Positionen ergänzt. **Teilweise: M-8** — Rn. 114 („weitere Umstände") und die Einordnung als *ein* Indiz sind aufgenommen, ebenso die erweiterte Teilfrage nach den Gestaltungsmerkmalen; **Rn. 99 ist nicht im Wortlaut zitiert** (das Briefing hätte sonst einen ganzen Absatz Fremdzitat aus 38 O 88/23 getragen). **Teilweise: siehe H-4** |
| **HINWEIS** | **5 von 6 repariert, 1 bewusst verworfen mit Träger** | **H-1** Ordnungsgeld bis 250.000 € je Zuwiderhandlung, Vollziehung an den organschaftlichen Vertretern, und Rn. 249 („identische und **kerngleiche** Verstöße") ergänzt — der Kostenanker war einseitig nach unten · **H-2** Folgesatz zu Rn. 267 ergänzt (die „überdurchschnittliche Schwierigkeit" beruhte auf einer inzwischen ausgeräumten Unklarheit) · **H-3** Tenor Nr. 5 (Art. 15) und die Beschränkung „bei einem Dritten" in Tenor Nr. 4 aufgenommen, letztere als eigene Frage · **H-4 teilweise:** Rn. 141/142 (Marktverhaltensregelung, „in ihrer Stellung als Marktteilnehmer") sind aufgenommen und tragen jetzt Frage 3.2 Nr. 1; **die zweite Hälfte — Art. 5 Abs. 1 lit. a DSGVO als selbständiger Verstoßgrund neben Art. 6 — ist NICHT eingearbeitet**: Das Briefing behandelt die Sache durchgehend als lit.-f-Frage, und eine zusätzliche Achse hätte den Zuschnitt der vier Fragen verschoben. **Ausgewiesen als offener Posten, Träger MKT-HANDEL** · **H-5 bewusst verworfen:** die vier weiteren DSK-Ziffern (4.6 Nutzungsdauer · 5.2/5.3 Ausgestaltung des Widerspruchsrechts · 5.4 Umsetzungsfrist) sind **Betriebsvorgaben, keine Rechtsfragen** — sie gehören in den Bau von Sperrdatei und Informationstexten, nicht in ein Anwaltsbriefing. **Träger: MKT-AKQ** (s. Block 3) · **H-6** alle fünf Unterpunkte repariert: interne Bezeichner unter die Löschanweisung gezogen und der letzte Kurz-Anker aufgelöst · „sprachfassungsgleich" als **Annahme** gekennzeichnet · Geltung des DSK-Zweitkanals auf die **Fassungsangabe** eingegrenzt · n8n-Firmierung als Selbstauskunft ausgewiesen · Zählweg samt Positivkontrolle für den Ping-Negativbefund nachgetragen (selbst reproduziert: Treffer in 3 von 62 Dateien, Positivkontrolle `license` 41/62) |

### Was der Prüfer ausdrücklich bestätigt hat

- **29 von 29 geprüften Zitaten byte-genau, Fundstelle korrekt.**
- **20 von 21 Zahlen exakt reproduziert** (die eine Abweichung ist M-1).
  Summenprobe des Streitwerts (22.000 + 2×7.500 + 2×11.000 + 15.000 =
  74.000) geht ohne Rest auf.
- **Auftragstreue 4/4 Fragen, 20/20 Pflichtteile**; keine
  ASCII-Transliteration, kein Mojibake, 13/13 Tabellen konsistent.
- **In den Fragestellungen selbst nimmt das Dokument nichts vorweg** —
  die beanstandeten Vorwegnahmen (S-2, M-9) standen ausnahmslos in den
  **Alternativen-Tabellen**, nicht in den Fragen.
- Die Randnummern-Formel des Extrakts (Rn. n = Zeile 128 + 2·n) hat er
  über alle 273 Randnummern verifiziert, zusätzlich über ein zweites,
  unabhängiges Strukturmerkmal (CSS-Klassenpaare im HTML, 273/273 ohne
  Rest).

### LAUF-STATUS des Prüfers — offene Prüfschritte einzeln, nicht geglättet

Kein Abbruch, Protokoll vollständig. **Vier ausgewiesene Grenzen:**

1. **Die zitierten Fremdquellen selbst** (OLG Stuttgart, OLG Düsseldorf,
   Eckhardt, Ziebarth, die EuGH- und BGH-Entscheidungen) hat er **nicht
   gelesen** — nur ihre Wiedergabe. Das ist dieselbe Grenze, die das
   Briefing für sich selbst ausweist.
2. **Rund 180 der 273 Randnummern** hat er nur im Umriss gelesen (erste
   115–150 Zeichen). Für die geprüften Anker ist das unerheblich, für
   die Kategorie „was fehlt" ist seine Liste eine **Auswahl aus
   teilweise gelesenem Bestand**, keine Vollerhebung.
3. **Die Anlagen des Verfahrens** (K 2, K 3, B 9) liegen niemandem vor.
4. **Sein eigener Werkzeugfehler, den er offenlegt:** Seine
   Tabellenprüfung meldete einen Renderfehler in § 2.1, der keiner war —
   der Pipe ist im Rohtext korrekt als `\|` maskiert, sein
   `awk -F"|"` sieht die Maskierung nicht. **Werkzeugfehler, kein
   Befund** — von ihm selbst so ausgewiesen.

**Auf die Frage „Hättest Du diese Funde auch ohne den
Kategorien-Hinweis gefunden?"** antwortet er: 17 von 22 ja. Die fünf
anderen (S-2, M-6, M-10, anteilig S-4 und M-7) sind die, die am
weitesten von dem wegführen, was das Briefing selbst thematisiert — und
zwei davon treffen tragende Aussagen. **Das ist derselbe Befund wie in
R14-B: Die Pflicht-Kategorie „von der Quelle rückwärts" trägt genau die
Funde, die kein Vorwärts-Verfahren erzeugt.**

---

## Block 2 — Offen geblieben

| # | Punkt | Träger |
|---|---|---|
| **Push** | `cca1919` und der Folge-Commit sind **nicht veröffentlicht** (fremde Vorfahren, s. Block 1) | Leitsession |
| **Empfänger** | Es ist **keine Kanzlei ausgewählt** — im Repo ist keine benannt (`grep -rin "anwalt\|kanzlei\|rechtsanwalt"`, alle Treffer betreffen die Rolle, keinen Kandidaten). Das Briefing trägt durchgehend `[KANZLEI]` | User / Firmen-Ebene |
| **Firmierung** | `[FIRMIERUNG — offen, F-7]` an drei Stellen. Der Versand ist ohne Firmierung möglich, aber der Absender muss vor dem Versand gesetzt werden | User (F-7) |
| **§ 4a** | Ob die **zwei zusätzlichen Kandidaten** (Speicherung eines fremden Impressums-Werbewiderspruchs · telefonischer Nachfass auf den eigenen Werbebrief) mitbeauftragt werden, ist eine **Entscheidung mit Außenwirkung** und wurde nicht von dieser Session getroffen | User / Leitsession |
| **Kostenrahmen** | Das Briefing bittet um ein Angebot je Frage; ein Budget ist nicht gesetzt | User |
| **Technische Klärung Ping** | Ob auch der **kostenlose** Lizenzschlüssel der registrierten Community-Edition täglich pingt, ist in den vorliegenden Herstellerquellen **nicht belegt** — der einzige Ping-Beleg betrifft „Business or Enterprise features" | heypensio-Leitsession (so schon in Projektquelle § 5 vorgesehen) |

**Nicht angefasst (auftragsgemäß):** `handel/kanal-rechtsmatrix.md` (die
Neufassung ist gesperrt — der widerlegte Satz bleibt dort unverändert
stehen und ist im Briefing nur VORGELEGT) · `handel/angebotsarchitektur.md`
(R15-B) · `fund/wettbewerbsbild.md` (R15-E) · `akquise/*` (R15-C/R15-E,
nur gelesen) · Projektquelle, STATUS.md, CLAUDE.md, Skills/Commands.
Keine Außenhandlung, kein Versand, kein eigener Debrief.

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

*(Nummerierung mit Rundenpräfix nach der Kollisionsregel: `R15A-N-…`)*

### An MKT-HANDEL (`handel/kanal-rechtsmatrix.md` — gesperrt, deshalb gemeldet statt geändert)

> **R15A-N-1 ⭐ — Der A7-Nachtragskasten schreibt „weicht von ihr ab",
> das Urteil ist konditional.** Rn. 79 lautet: „**Sollten** demgegenüber
> die Ausführungen … dahin zu verstehen sein …, **könnte dem** … **nicht
> gefolgt werden**." Das LG lässt offen, ob der OLG-Beschluss überhaupt
> so zu lesen ist. Die Formulierung „weicht ausdrücklich ab" ist
> schärfer als die Quelle. Zielort existiert (A7, Kasten R9A-N-12).

> **R15A-N-2 ⭐ — Die § 3a-Schiene ist im Urteil eine DOPPELbegründung,
> im Bestand steht nur die Hälfte.** Rn. 136: „Es kann offenbleiben, ob
> … in erster Linie § 3a UWG … heranzuziehen ist, oder § 3 Abs. 2 UWG …
> liegen **sowohl** die Voraussetzungen von § 3a UWG vor … **als auch**
> diejenigen von § 3 Abs. 2 UWG"; Rn. 147 bejaht § 3 Abs. 2 UWG
> ausdrücklich. Der Teil-B-Nachtrag R9A-N-14 führt Rn. 127 (die beide
> Wege nennt), 128, 129, 130, 134, 135, 137 — **Rn. 136 und Rn. 147
> fehlen**. Wer die Tabelle liest, hält § 3a UWG für den gewählten Weg.

> **R15A-N-3 — „Der Kläger war kein Mitbewerber" ist eine Ableitung,
> keine Quellenaussage**, und die Nachbarstellen verschärfen sie:
> Zählweg `grep -o "kein Mitbewerber"` = **0** bei Positivkontrolle
> `Kläger` = 119. Dieselbe Werbung war zusätzlich Gegenstand zweier
> Verfahren, die „**von einer Mitbewerberin der Beklagten**" geführt
> wurden (Rn. 44: 38 O 271/23; Rn. 89: 38 O 88/23). Für Teil B ist das
> erheblich — der Mitbewerber-Angriff ist in diesem Sachverhalt kein
> theoretischer Fall.

> **R15A-N-4 ⭐ — Die tragende „Rn.-87-Verschärfung" des ganzen
> Repo-Bestands steht in der Abwehr eines Literatureinwands.** Rn. 86
> referiert den Einwand (Brandt/Dienst, GRUR-Prax 2025, 152), Rn. 87
> beginnt „**Unabhängig davon erscheinen die Bedenken im Ausgangspunkt
> allenfalls** … erwägenswert" und weist ihn zurück; erst darin steht
> der Satz „Vorkehrungen, die bereits vor dem ersten Verarbeitungsschritt
> in die Wege geleitet sein müssen". Der tragende Absagegrund selbst
> steht in Rn. 84/85. **Auf diesem einen Satz ruht die Fälligkeit „vor
> dem ersten Datensatz"** — und damit die gesamte Terminlage von
> F-7/O-9/Bau-Pflichten. Im Briefing ist er als eigene Teilfrage
> gestellt; der Bestand sollte die Stellung des Satzes ausweisen.

> **R15A-N-5 — Rn. 115 fehlt im Bestand und trifft uns direkt.** Das
> Gericht macht dort aus der Art.-14-Abs.-2-lit.-f-Herkunftsangabe ein
> **Irreführungs**-Argument: Hätte die Beklagte angegeben, die Daten
> „aus öffentlichen Quellen entnommen oder von einem Adresshändler
> erworben zu haben", hätte das den Eindruck einer laufenden
> Geschäftsbeziehung „**zerstört**". Wir planen genau diese Angabe.
> Weder Rechtsmatrix noch O-8 führen Rn. 115.

> **R15A-N-6 — Sachverhaltsunterschied, der im Bestand nirgends steht:**
> Rn. 3 — die Beklagte hatte die Adressen „**von einem Adresshändler
> erworben**". Rn. 86 trennt Ankauf und Speicherung ausdrücklich vom
> angegriffenen Handeln („nicht Teil des von dem Kläger angegriffenen
> geschäftlichen Handelns …, sondern in dessen Vorfeld"). Wer das Urteil
> als „Adressbeschaffung ist rechtswidrig" liest, liest daneben.

### An MKT-AKQ (`akquise/interessenabwaegung-o8.md`)

> **R15A-N-7 — Fristen-Widerspruch, dreifach in derselben Datei.**
> § 5.5 Fließtext, § 11.1 Träger-Spalte und die Dokument-Fußzeile sagen
> weiter „anwaltlicher Rat **vor dem ersten Massenversand**", während der
> Fälligkeits-Kasten in § 11.1 und der § 5.5-Nachtrag „**vor dem ERSTEN
> DATENSATZ**" sagen. Der Nachtrag nennt das Gate zusätzlich
> „unverändert" — gegenüber dem Fließtext desselben Abschnitts ist es
> gerade verändert. **Die Ableitung (Listenbau-Regelwerk) ist an dieser
> Stelle präziser als die Quelle**; sie trägt den Nachtrag inline. Das
> Briefing folgt der schärferen Fassung.

> **R15A-N-8 — Die fünf Kriterien des Art. 6 Abs. 4 lit. a bis e stehen
> nirgends im Bestand**, obwohl der Normtext seit dem 12.08. im
> Rohbelege-Ordner liegt. Suchlauf über O-8: „Verbindung zwischen" 0 ·
> „geeignete Garantien" 0 · „Verschlüsselung" 0 · „Pseudonymisierung" 0,
> bei Positivkontrollen „Art. 6 Abs. 4" 9 · „Zweckänderung" 5 ·
> „Kompatibilitätsprüfung" 5. Das Briefing liefert die Achse jetzt mit;
> für die spätere Einarbeitung der Antwort gehört sie in O-8.

> **R15A-N-9 — DSK Ziff. 4.1 ist der Kontrastfall zu Ziff. 4.2 und fehlt
> im Bestand.** Ziff. 4.2 beginnt mit „Nicht zulässig ist **hingegen**"
> — das Bezugsobjekt ist Ziff. 4.1: Postadressdaten aus Preisausschreiben
> und Kataloganforderungen sind „nach Art. 6 Abs. 1 UAbs. 1 lit. f
> DS-GVO **zulässig**". Die Aufsicht zieht ihre Trennlinie damit an der
> **Freiwilligkeit der Preisgabe** — genau die Achse des Art. 6 Abs. 4
> lit. a. Zählweg im O-8-Dokument: „Preisausschreiben" 0, „Katalog" 0.

### An die Leitsession (Bündelung)

> **R15A-N-10 — Zwei weitere offene Rechtsfragen im Bestand gehören in
> denselben Rat, eine davon mit ausdrücklichem Bündelungsvermerk.**
> (a) `akquise/sperrdatei-struktur.md` P-1: „Zulässigkeit der
> `ANL-3`-Führung … | Anwaltlicher Rat — **mit O-9 bündeln**". (b)
> `akquise/akquiseplan.md` N-1: „Der Nachfass-Anruf nach eigenem
> Werbebrief ist rechtlich ungeklärt … ggf. in den anwaltlichen
> Klärungsbedarf". Beide stehen im Briefing als **§ 4a-Kandidaten zur
> Entscheidung**, nicht als beschlossene fünfte und sechste Frage — eine
> Auftragserweiterung wäre nicht meine.
> ⚠️ `akquise/sperrdatei-struktur.md` ist **heute in dieser Runde**
> entstanden (Commit `5f9930b`, Session LIMEJUICE) — der Posten war beim
> Schnitt des R15-A-Prompts noch nicht im Bestand.

### An MKT-AKQ (Bau-Vorgaben, bewusst NICHT ins Briefing)

> **R15A-N-12 — Vier Ziffern der DSK-Orientierungshilfe mit
> unmittelbarem Betriebsbezug sind im Bestand nicht ausgewertet**
> (Prüferbefund H-5, von mir an der Gliederung nachgeprüft):
> **Ziff. 4.6** „Zulässige Nutzungsdauer von Kontaktdaten … für Zwecke
> der Direktwerbung" — Maßstab für unsere Löschfrist · **Ziff. 5.2/5.3**
> Unterrichtung über und Ausgestaltung des Werbewiderspruchsrechts —
> Prüfmaßstab für „optisch abgesetzt" und für die Frage, ob der Hinweis
> in **jede** Sendung gehört (unser Bestand legt ihn auf den ERSTEN
> Brief) · **Ziff. 5.4** Umsetzungsfrist des Werbewiderspruchs.
> **Bewusst nicht ins Anwaltsbriefing genommen:** Das sind
> Betriebsvorgaben der Aufsicht, keine streitigen Rechtsfragen — sie
> gehören in den Bau von Sperrdatei und Informationstexten. Zielorte
> existieren (`akquise/listenbau-regelwerk.md` § 3/§ 7,
> `akquise/sperrdatei-struktur.md`).

> **R15A-N-13 — Die Sperrdatei-Zusage „Abgleich vor jedem Versand" ist
> am falschen Ereignis aufgehängt.** Unser eigener Bestand sagt an
> anderer Stelle „nach einem Widerspruch dürfen **keine neuen
> Druckaufträge** mehr starten" — das ist der frühere und damit
> schärfere Zeitpunkt. Beim Bau am Maßstab „vor jedem **Druckauftrag**"
> prüfen.

### An MKT-HANDEL (offener Rest aus der Prüfer-Disposition)

> **R15A-N-14 — Art. 5 Abs. 1 lit. a DSGVO ist im Urteil durchgehend
> ein SELBSTÄNDIGER Verstoßgrund neben Art. 6 Abs. 1** (Rn. 137 und
> Rn. 147 je „Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO"),
> und auch die Orientierungshilfe führt ihn eigenständig. **Unser
> gesamter Bestand — Rechtsmatrix, O-8, Regelwerk und dieses Briefing —
> behandelt die Sache als reine Art.-6-Abs.-1-lit.-f-Frage.** Ich habe
> die Achse bewusst nicht in das Briefing gezogen, weil sie den
> Zuschnitt der vier Fragen verschoben hätte; sie bleibt als Posten
> offen (Prüferbefund H-4, zweite Hälfte).

### An MKT-MARKE / die Zentrale (nur Hinweis, kein Auftrag)

> **R15A-N-11 — Zwei weitere Posten warten auf anwaltlichen Rat in
> ANDEREN Rechtsgebieten**, die bewusst NICHT in dieses Briefing gehören
> und dort ausdrücklich ausgeschlossen sind: die anwaltliche Durchsicht
> der Referenzvereinbarung Teil B (O-4, Träger Zentrale) und die
> markenrechtliche Bewertung zweier Namenskandidaten („K1 nicht prüfbar
> … ohne Anwalt nicht entscheidbar"). Wenn ohnehin eine Kanzlei
> beauftragt wird, ist die Frage, ob es **dieselbe** sein soll, eine
> Entscheidung der Firmen-Ebene.

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **⭐ Numerische HTML-Entities lassen ein Suchmuster tot aussehen,
   während die Positivkontrolle durchläuft.** Mein erster
   Extraktionslauf über den UWG-Volltext dekodierte nur benannte
   Entities (`&auml;`), nicht die numerischen (`&#167;`, `&#228;`,
   `&#160;`), die gesetze-im-internet.de durchgängig verwendet.
   Ergebnis: „§ 3a" = **0** Treffer, „§ 13" = **0** — bei „Rechtsbruch"
   = 1 und „Marktteilnehmer" = 22. **Die Kontrollen liefen durch, weil
   sie aus reinen Buchstaben bestanden; das Negativ hing am
   `§`-Zeichen.** Aufgefallen ist es nur, weil die Null direkt neben der
   Überschrift des gesuchten Paragraphen stand. **Lehre: Eine
   Positivkontrolle spiegelt die Suchmechanik nur, wenn sie dieselbe
   ZEICHENKLASSE prüft** — für ein Muster mit `§` oder Umlaut braucht es
   eine Kontrolle mit `§` oder Umlaut, nicht irgendeinen garantierten
   Treffer. (Dieselbe Klasse traf mich ein zweites Mal bei
   „rechtskräftig"; dort habe ich die Umlaut-Kontrolle `ä` = 911
   von vornherein gezogen.)
2. **⭐ Zwei Zahlen können beide stimmen und trotzdem widersprechen.**
   Ein Agent meldete „Urteil = 144", ich hatte 118 gemessen. Kein Fehler
   auf beiden Seiten: 118 case-sensitiv, 144 case-insensitiv (Differenz
   sind Binnentreffer wie „Beurteilung"). **Eine gemeldete Zahl ohne
   Zählweg ist nicht übernehmbar** — und die Auflösung kostet drei
   Sekunden, wenn man sie sofort selbst misst, statt sie zu übernehmen
   oder zu verwerfen.
3. **⭐ Der Auftrag nannte „braucht den Volltext" — der Volltext lag seit
   zwei Tagen im eigenen Rohbelege-Ordner.** Hätte ich die Prämisse
   übernommen, wäre eine Beschaffung gelaufen, die die Belegstufe nicht
   verbessert hätte. Der billigste erste Schritt bei jedem „X fehlt" ist
   ein `find` über den eigenen Bestand — und zwar **rekursiv über ALLE
   Rundenordner**, nicht nur den der eigenen Runde.
4. **⭐ Eine Rollenzuschreibung ist eine Bestandsaussage.** Ich hatte
   „Der Geschäftsführer hat sich entschieden" geschrieben. Der Bestand
   sagt „der User hat sich entschieden"; dass der User Geschäftsführer
   ist, steht nirgends belegt — und die Firma ist in Gründung. In einem
   Dokument an einen Anwalt wäre das eine erfundene Organstellung
   gewesen. Ersetzt durch „Wir haben uns … entschieden".
5. **⭐ Eine Positivkontrolle, die den Kanal nicht wechseln kann, prüft
   den Kanal nicht.** Der Prüfer fand in meiner DSK-Tabelle
   `Direktwerbung` = 21 unter einem als **case-insensitiv** deklarierten
   Zählweg — richtig sind dort 26 (fünf Versalien-Treffer im
   Inhaltsverzeichnis). Das Bittere daran: **Keine** meiner drei
   Positivkontrollen hätte den Fehler finden können, weil alle drei in
   beiden Groß-/Kleinkanälen dieselbe Zahl liefern. Eine Kontrolle
   spiegelt die Suchmechanik erst, wenn ihr Sollwert **je Kanal
   verschieden** ist. Reparatur: Kontrollpaar cs=21 / ci=26.
6. **⭐ Die eigene Warnung schützt nicht vor der eigenen Klasse.** Mein
   Briefing warnt an zwei Stellen vor Tippfehler- und
   Schreibvarianten („Artt." mit Doppel-t, „Mittbewerbern" wie im
   Original) — und zählt zwei Absätze weiter „Mitbewerber" mit einem
   Muster, das genau die Tippfehlerform übersieht (8 statt 9). Bei einem
   **Negativ** ist eine untererfassende Stammsuche das falsche Werkzeug.
7. **Der Arbeitsbaum wandert während der Lektüre.** Zwischen meinem
   Session-Start (`4b84693`) und dem eigenen Commit sind vier fremde
   Commits eingegangen, einer davon in eine meiner Quellen
   (`akquise/listenbau-regelwerk.md`). Der Diff-Check gegen den
   Lesestand war nicht Ritual, sondern hat einen neuen Posten sichtbar
   gemacht (R15A-N-10a), den es beim Prompt-Schnitt noch nicht gab.

### (ii) Bewährte Muster

1. **⭐ Ein Agent je QUELLDOKUMENT statt je Befund — und beide mit dem
   Auftrag „Absatz davor und danach mitlesen".** Beide Agenten haben
   ihren stärksten Fund **außerhalb** der Frageliste gemacht: der
   LG-Agent die konditionale Fassung von Rn. 79 und die Doppelbegründung
   Rn. 136/147, der O-8-Agent den Kontrastfall DSK Ziff. 4.1. Ein Agent
   je Befund hätte genau den Befund bestätigt und nichts daneben
   gesehen.
2. **⭐ Den eigenen Quellen-Anker VOR dem Fan-out setzen — und die
   Lücken darin messen, statt sie anzunehmen.** Die Rechtsmatrix zitiert
   UWG-Wortlaute mit der höchsten Belegstufe, obwohl kein UWG-Volltext
   im Bestand lag. Erst der Abzug machte § 13 Abs. 4 Nr. 2 UWG im
   Wortlaut prüfbar — und damit die Kostenfrage überhaupt präzise
   stellbar.
3. **⭐ Delegierte Befunde am Rohbeleg gegenprüfen zahlt sich sofort
   aus.** Von den übernommenen Agenten-Aussagen hielten drei der
   Nachmessung nicht in der gemeldeten Form stand: die Kostenquote
   („1/5 zu 4/5" hat 0 Treffer als Ziffernform, der Tenor schreibt sie
   aus), die Zahl „Urteil = 144" (Zählweg-Differenz) und der Umfang der
   DSK-B2B-Negative (die Handreichung enthält sehr wohl drei
   B2B-Treffer — alle im **Telefon**-Abschnitt). Der dritte Fall ist der
   teuerste: „kein B2B" wäre falsch gewesen, richtig ist „keine Aussage
   zur B2B-**Briefwerbung**".
4. **⭐ Die eigene Schwäche ins außenwirksame Dokument schreiben, statt
   sie zu glätten.** Das Briefing legt offen, dass ein Kernsatz des
   eigenen Bestands wochenlang falsch war, in welche Richtung er falsch
   war (zugunsten der eigenen Lesart) und wer ihn gefunden hat. Das
   kostet zwei Absätze und ist der einzige Grund, warum der Anwalt die
   übrigen Angaben belastbar einordnen kann.
5. **⭐ Den Prüfer auf den eingefrorenen Stand per `git show` setzen,
   nicht auf den Arbeitsbaum.** Während seines Laufs habe ich
   weitergearbeitet; ohne diese Vorgabe hätte er einen wandernden Stand
   gemessen und Befunde gegen Sätze erhoben, die es nicht mehr gab. Die
   Löschungszählung gegen `cca1919` (304 Einfügungen / 63 Löschungen,
   jede Löschung als Ersetzung erklärbar, Überschriften-Bestand 36 → 38)
   macht den Nachher-Stand zuordenbar.
6. **Was der Anwalt beantworten kann, sauber von dem trennen, was er
   nicht kann.** Frage 4 zerfällt in eine Rechtsfrage (an ihn) und eine
   technische Frage (an den Hersteller); die Lizenzfrage K-1 gehört
   ausdrücklich nicht in dieses Briefing. Ohne diese Trennung hätte er
   Fragen beantwortet, die niemand gestellt hat, und die Rechnung
   getragen hätte der Auftraggeber.

---

*R15-A, Session Ben Beckman. Kein eigener Debrief — die Einarbeitung in
den Wahrheits-Kanal macht die Leitsession.*
