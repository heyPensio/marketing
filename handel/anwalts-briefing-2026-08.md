# Briefing an einen Rechtsanwalt — vier Fragen zur B2B-Kaltakquise per Brief und zur n8n-Lizenzarchitektur

**Stand:** 14.08.2026 · **Vertraulich** · **Nur für den Empfänger
bestimmt** · Übermittelt zum Zweck der Mandatsanbahnung

> **Zu diesem Dokument:** Es enthält interne Vorüberlegungen,
> Bewertungen und offene Punkte unseres Hauses. Wir bitten um
> vertrauliche Behandlung auch für den Fall, dass es nicht zu einer
> Beauftragung kommt.

---

## ⚠️ Statusblock — **vor dem Versand entfernen**, zusammen mit den beiden Zeilen darunter

**Strang:** MKT-HANDEL · **Runde:** R15-A (Session Ben Beckman) ·
**Status: ENTWURF — noch nicht versendet**

| Feld | Eintrag |
|---|---|
| **Status** | **ENTWURF.** Der Versand macht der User; erst danach wird hier „VERSENDET" mit Postfach-Beleg gesetzt (Baustein `aussenkorrespondenz`: ein Status-Feld wird NACH dem Vorgang ausgefüllt, nie beim Schreiben) |
| **Anlass** | Vier offene Rechtsfragen sperren den Start der Zielkundenlisten-Arbeit (drei davon vor dem **ersten Datensatz**) bzw. das erste Kundenangebot in der Architekturvariante mit kundeneigener Instanz |
| **Empfänger** | **⛔ NOCH NICHT BESTIMMT.** Im Repo ist keine Kanzlei benannt; die Auswahl trifft der User / die Firmen-Ebene. Bis dahin steht überall `[KANZLEI]` |
| **Absender** | **⛔ FIRMIERUNG OFFEN (interner Posten F-7).** Der Rebrand ist entschieden, der neue Name steht noch nicht fest. Überall `[FIRMIERUNG — offen, F-7]`. **Keine erfundene Firmierung**, auch nicht als Beispiel |
| **Quell-Abgleich gelaufen** | `handel/kanal-rechtsmatrix.md` · `akquise/interessenabwaegung-o8.md` · `akquise/listenbau-regelwerk.md` · `akquise/sperrdatei-struktur.md` · `projektquelle-mkt.md` § 5 · `protokolle/R14-B-abschluss.md`, je gegen die **Rohbelege** (s. § 7), 14.08.2026 — **zweiter Durchgang nach dem Prüferlauf** (Befund S-2: der erste hatte die Fallgruppen-Tabelle des O-8-Dokuments auf ihrer eigenen Achse nicht gefangen) |
| **Repo-Stand beim Bau** | `4b84693` (R15-A, eingefroren zu Beginn jener Session; zweiter Messstand vor dem Commit in `protokolle/R15-A-abschluss.md`). **Nachtrag R16-A, 17.08.2026:** Prüfstand dieser Session `0c4692f`, eingefroren zu Sessionbeginn. ⚠️ **Zweiter Messstand vor dem Commit: `686ff18`** — der geteilte Arbeitsbaum ist während der Arbeit gewandert (Parallel-Session R16-C hat committet), der Bau-Commit `a495a0f` sitzt deshalb auf `686ff18`. **Gemessen und folgenlos:** `git diff 0c4692f 686ff18` berührt keine der hier bearbeiteten Dateien; die Löschungszählung gegen beide Stände ist identisch |
| **Änderungen R16-A (17.08.2026)** | **Status bleibt ENTWURF.** Vier Eingriffe: (1) § 2.1 nachgezogen — der A7-Kernsatz der Rechtsmatrix ist inzwischen **neu gefasst**, der Abschnitt beschrieb ihn noch als „nur markiert"; (2) § 3.2 um **Teilfrage 1a** ergänzt (zweite Schiene § 3 Abs. 2 UWG im B2B-Fall) samt Fundstellen Rn. 136/147/148 in § 3.3 — ohne sie hätte die Antwort auf Frage 3 nur die Hälfte der Doppelbegründung erfasst; (3) **ID-Zeiger** an § 4a Kandidat A (`ANL-3` / `PS-1` / `R15E-N-4`), damit ein Grep auf die Kürzel künftig trifft; (4) 🔧 **Reparatur in § 4a Kandidat A:** Dort stand „ohne Personennamen **und ohne jede weitere Angabe**" — das war eine unzutreffende Bestandsaussage. `akquise/sperrdatei-struktur.md` § 3 führt für `ANL-3` **sieben** Felder (SP-02, SP-03, SP-05 bis SP-08, SP-10) und schließt nur SP-04 (Personenname) und das Grund-Feld aus. Der Satz ist auf den gemessenen Stand gebracht |
| **Was dieses Dokument NICHT tut** | Es **entscheidet nichts** und nimmt keine Antwort vorweg. Wo unsere eigene Vorarbeit einen Streitstand gefunden hat, steht „streitig" — nicht der bequemere Pol |
| **⚠️ Offene User-Entscheidung vor dem Versand** | § 0 Satz 7 offenbart, dass wir das Impressums-Risiko **bewusst und gegen die eigene Empfehlung** tragen. Das ist der ehrlichste und zugleich der angreifbarste Satz des Dokuments: Er geht an einen Empfänger, der zu diesem Zeitpunkt noch nicht mandatiert ist. **Drei Möglichkeiten:** (a) so lassen — der Anwalt kann ohne diese Angabe nicht sinnvoll beraten; (b) erst nach Mandatserteilung nachreichen; (c) neutraler fassen („wir haben uns nach Abwägung für die Nutzung entschieden"). **Empfehlung dieser Session: (a)**, weil Weg B in § 1.5 sonst nicht bewertbar ist — die Entscheidung trifft der User |

---

## 0. Wer fragt, und worum es geht

`[FIRMIERUNG — offen, F-7]` baut die Marketing- und Vertriebsseite für
ein KI-gestütztes Assistenzprodukt für Beherbergungsbetriebe (Hotels,
Pensionen, Ferienwohnungsvermieter). Der Vertrieb soll über
**Direktansprache** laufen; nach unserer eigenen Vorprüfung ist der
**Werbebrief an den Betrieb** der tragfähigste Kanal für den
Erstkontakt ohne vorherige Einwilligung. E-Mail-Kaltakquise haben wir
für uns als gesperrt eingestuft, Telefon-Kaltakquise als nur mit
konkretem Anlass zulässig. Bei der **Plattform-Direktnachricht**
(LinkedIn) ist unsere eigene Einstufung: die reine Kontaktanfrage ohne
Werbetext ist „rechtlich nicht abschließend geklärt … eine **offene
Rechtsfrage mit Restrisiko**, **nicht** ein grüner Kanal". Wir geben
das so wieder, wie es bei uns steht — nicht als erledigt.

**Was wir bereits selbst erarbeitet haben** (und was wir Ihnen als
Anlage geben können, s. § 6):

- eine Kanal-Rechtsmatrix zu § 7 UWG und DSGVO über sieben Kanäle,
- eine dokumentierte Interessenabwägung nach Art. 6 Abs. 1 lit. f DSGVO
  für die geplante Zielkundenliste, gegliedert nach Fallgruppen,
- ein Listenbau-Regelwerk mit Feldregister (jedes Datenfeld einzeln an
  der Erforderlichkeit gemessen), Quellenprotokoll je Adresse,
  Werbesperrdatei und Fristenüberwachung für Art. 14 DSGVO.

**Diese Vorarbeit ist keine Rechtsberatung und versteht sich nicht als
solche.** Sie stammt aus unserem eigenen Haus. Wir legen sie offen, weil
sie die Fragen unten konkret macht — nicht, um eine Antwort
vorzuzeichnen. **Wo wir uns irren, ist uns die Korrektur lieber als die
Bestätigung.**

**Der geplante Sachverhalt in sieben Sätzen:**

1. Wir bauen eine Zielkundenliste von Beherbergungsbetrieben, zunächst
   regional (Schleswig-Holstein/Hamburg), in Wellen von wenigen hundert
   Adressen.
2. Adressquellen sind Unternehmenswebsites (einschließlich der
   **Online-Impressen**), freiwillige Kontakt- und Partnerseiten sowie
   Branchen- und Verbandsverzeichnisse.
3. Erhoben werden Betriebsname, Rechtsform, Postanschrift, Gebietskennzeichen,
   Website-URL, Quellenherkunft, Aufnahmedatum, Kontakthistorie und
   Sperrvermerk. **Nicht** erhoben werden Zimmerzahl, Umsatz,
   Mitarbeiterzahl, Social-Profile, Scores oder der eingesetzte
   Technikstack.
4. Angeschrieben wird **postalisch**, adressiert an die Firma; ein
   Personenname wird nur geführt, wenn personalisiert wird.
5. Ein erheblicher Teil unserer Zielgruppe ist **inhabergeführt**
   (Einzelunternehmen, GbR, e. K.) — dort ist die Firma zugleich die
   natürliche Person, die DSGVO gilt also vollständig.
6. Der Werbebrief soll die Art.-14-Information und den
   Art.-21-Abs.-4-Widerspruchshinweis in optisch abgesetzter Form
   enthalten; eine Werbesperrdatei wird vor dem ersten Versand
   aufgebaut.
7. Wir haben uns am 11.08.2026 ausdrücklich dafür entschieden, die
   Nutzung von Impressumsdaten mit dokumentiertem Restrisiko zu
   betreiben — **gegen die Empfehlung unserer eigenen Vorprüfung** und
   in Kenntnis der gegenläufigen Aufsichtsauffassung. Die Entscheidung
   ist mit Datum und Erhebungsform festgehalten.

**Zeitliche Lage:** Nach unserer Lesart von LG Düsseldorf, Urt. v.
06.02.2026 – 38 O 243/23, Rn. 87 müssen die datenschutzrechtlichen
Vorkehrungen **vor dem ersten Verarbeitungsschritt** stehen; der erste
Verarbeitungsschritt ist bei uns der **Listenaufbau**, nicht der
Versand. Die Fragen 1 bis 3 sperren daher bereits den ersten Datensatz.
Frage 4 sperrt kein Datum, sondern das erste Kundenangebot in einer
bestimmten Architekturvariante.

**Zwei Umstände, die Ihre Antwort beeinflussen könnten und die wir
deshalb nicht in eine Fußnote stellen:**

- **Wir stehen unter Termindruck.** Unser eigenes Ziel ist der erste
  zahlende Kunde bis Mitte November 2026; der Listenaufbau ist der
  vorgelagerte Schritt. **Das ist keine Bitte um eine schnellere
  Antwort, sondern die Information, warum wir die Fragen jetzt stellen
  und nicht nach dem ersten Versand.** Eine belastbare Antwort in drei
  Wochen ist uns lieber als eine schnelle in drei Tagen.
- **Die Rechtsform und der Sitz des Verantwortlichen stehen noch nicht
  abschließend fest** (Rebrand und Gründungsformalitäten laufen). Das
  wirkt sich darauf aus, wer Verantwortlicher im Sinne der DSGVO ist und
  welche Aufsichtsbehörde zuständig wäre. Wenn eine Ihrer Antworten
  davon abhängt, sagen Sie es uns bitte — wir liefern den Stand nach.

⚠️ **Ein Vorbehalt zu dieser Lesart, den wir selbst gefunden haben und
nicht verschweigen:** Der Satz aus Rn. 87 steht nicht in der tragenden
Absagebegründung, sondern in dem Absatz, mit dem das Gericht einen in
Rn. 86 referierten **Literatureinwand** zurückweist (Brandt/Dienst,
GRUR-Prax 2025, 152 — ob eine Verletzung „nachgelagerter"
Informationspflichten rückwirkend die Datenverarbeitung rechtswidrig
macht). Er beginnt mit „Unabhängig davon erscheinen die Bedenken im
Ausgangspunkt allenfalls … erwägenswert". **Ob dieser Satz die
Betriebsfolge trägt, die wir daraus abgeleitet haben — alle Vorkehrungen
vor dem ersten Datensatz —, ist eine der Fragen, die wir Ihnen stellen**
(Frage 2, Teilfrage 6). Unsere gesamte Terminplanung hängt daran.

---

## 1. Frage 1 — Zweckänderung nach Art. 6 Abs. 4 DSGVO bei Adressen aus Online-Impressen

*(intern geführt als offener Punkt „O-9". **Achtung: unser Kürzel „O-11"
ist im eigenen Bestand doppelt belegt, „O-4" dreifach** — deshalb steht
in diesem Briefing durchgehend der Gegenstand im Klartext, das Kürzel
nur in Klammern.)*

### 1.1 Sachverhalt

Die Daten im Impressum einer Unternehmenswebsite sind dort aufgrund
**gesetzlicher Pflicht** (§ 5 DDG) und zum Zweck der
**Anbieterkennzeichnung** veröffentlicht. Wir wollen sie für einen
**anderen** Zweck verwenden, nämlich für die postalische Erstansprache.
Bei inhabergeführten Betrieben sind es personenbezogene Daten.

### 1.2 Konkrete Fragestellung

1. Ist die Verwendung von Impressumsdaten für die postalische
   Erstansprache eine **Zweckänderung** im Sinne des Art. 6 Abs. 4
   DSGVO — und wenn ja: Ist eine **Kompatibilitätsprüfung** nach Art. 6
   Abs. 4 lit. a bis e durchzuführen, obwohl wir uns auf Art. 6 Abs. 1
   lit. f stützen und nicht selbst der Ersterheber sind?
2. Wenn eine Kompatibilitätsprüfung erforderlich ist: **Kann sie in
   unserer Konstellation überhaupt positiv ausfallen** — und woran
   entscheidet sich das?
3. Falls sie negativ ausfällt oder ergebnisoffen bleibt: **Welche
   Rechtsfolge** hat das für den Listenaufbau, und welche für einen
   bereits aufgebauten Bestand?
4. Praktisch: Genügt es, die Prüfung zu **dokumentieren** und das
   Ergebnis im Verarbeitungsverzeichnis zu vermerken, oder ist die
   Impressumsquelle für uns unbrauchbar?
5. **Auslesen oder Speichern — woran knüpft die Beurteilung an?** Die
   Aufsicht formuliert ihr Verdikt über das **Auslesen** der Daten; das
   Auslesen ist bereits Verarbeitung nach Art. 4 Nr. 2 DSGVO. Beim
   Auslesen liegt der Name des Vertretungsberechtigten regelmäßig vor,
   weil § 5 Abs. 1 Nr. 1 DDG ihn im Impressum verlangt — auch dann, wenn
   er nicht in unsere Liste übernommen wird. **Ändert das etwas daran,
   ob wir bei Kapitalgesellschaften ohne Personennamen außerhalb der
   DSGVO bleiben?**
6. **Die Monatsfrist bei Wellenbetrieb.** Nach der Orientierungshilfe
   (Ziff. 2.2, Wortlaut in 1.3 b) läuft die Frist ab **Erhalt der
   Daten**, und es zählt, welche Bedingung zuerst eintritt. Wir bauen
   die Liste in Wellen und wollen die Information **mit dem Brief**
   erteilen. **Was gilt, wenn zwischen Erhebung und Versand mehr als ein
   Monat liegt — und wie informiert man postalisch eine Adresse, die man
   noch nicht anschreiben will?**

### 1.3 Quellenlage mit Fundstelle

**a) Der Normtext.** Art. 6 Abs. 4 DSGVO, amtliche deutsche
Sprachfassung (Verordnung (EU) 2016/679, ABl. L 119), Volltext selbst
gelesen:

> „Beruht die Verarbeitung zu einem anderen Zweck als zu demjenigen, zu
> dem die personenbezogenen Daten erhoben wurden, nicht auf der
> Einwilligung der betroffenen Person oder auf einer Rechtsvorschrift
> der Union oder der Mitgliedstaaten, die in einer demokratischen
> Gesellschaft eine notwendige und verhältnismäßige Maßnahme zum Schutz
> der in Artikel 23 Absatz 1 genannten Ziele darstellt, so berücksichtigt
> der Verantwortliche — um festzustellen, ob die Verarbeitung zu einem
> anderen Zweck mit demjenigen, zu dem die personenbezogenen Daten
> ursprünglich erhoben wurden, vereinbar ist — unter anderem
> a) jede Verbindung zwischen den Zwecken, für die die personenbezogenen
> Daten erhoben wurden, und den Zwecken der beabsichtigten
> Weiterverarbeitung,
> b) den Zusammenhang, in dem die personenbezogenen Daten erhoben
> wurden, insbesondere hinsichtlich des Verhältnisses zwischen den
> betroffenen Personen und dem Verantwortlichen,
> c) die Art der personenbezogenen Daten, insbesondere ob besondere
> Kategorien personenbezogener Daten gemäß Artikel 9 verarbeitet werden
> oder ob personenbezogene Daten über strafrechtliche Verurteilungen und
> Straftaten gemäß Artikel 10 verarbeitet werden,
> d) die möglichen Folgen der beabsichtigten Weiterverarbeitung für die
> betroffenen Personen,
> e) das Vorhandensein geeigneter Garantien, wozu Verschlüsselung oder
> Pseudonymisierung gehören kann."

**Damit Sie nicht nach Tatsachen fragen müssen: unser Sachverhalt
entlang der fünf Kriterien.** Die rechte Spalte enthält **nur
Tatsachen**, keine Bewertung — die Bewertung ist Ihre Frage.

| Kriterium | Unser Sachverhalt (Tatsachen) |
|---|---|
| **lit. a** Verbindung der Zwecke | Ursprungszweck: gesetzliche Anbieterkennzeichnung, damit Dritte den Anbieter identifizieren und erreichen können. Unser Zweck: Anbahnung einer Geschäftsbeziehung durch postalische Erstansprache |
| **lit. b** Zusammenhang der Erhebung, insbesondere Verhältnis Betroffener ↔ Verantwortlicher | Zwischen uns und dem Betrieb besteht **kein Vorkontakt und keine Geschäftsbeziehung**. Wir erheben aus einer öffentlich abrufbaren Quelle, die der Betrieb nicht freiwillig, sondern aufgrund gesetzlicher Pflicht vorhält |
| **lit. c** Art der Daten | Firmenkontaktdaten und, bei inhabergeführten Betrieben, der Name des Inhabers. **Keine besonderen Kategorien nach Art. 9, keine Daten nach Art. 10** |
| **lit. d** mögliche Folgen für die betroffene Person | Ein postalisches Werbeschreiben an die Geschäftsanschrift; kein Profiling, keine Weitergabe an Dritte außer Druck- und Versanddienstleister, kein automatisiertes Scoring |
| **lit. e** geeignete Garantien | Werbesperrdatei mit Abgleich vor jedem Versand · Quellenprotokoll je Adresse · Art.-14-Information und Art.-21-Abs.-4-Hinweis im ersten Brief · dokumentierte Löschfrist · Aussteuerung von Betrieben, die einen Werbewiderspruch im Impressum vermerkt haben · **keine** Anreicherung um Umsatz, Größe, Scores oder Profile. ⚠️ **Wir wissen, dass die erste dieser Garantien in einem Zirkel steht:** Nach Ziff. 5.1 der Orientierungshilfe kann eine Werbesperrdatei „letztlich nur rechtmäßig sein, wenn die zu verhindernde Verarbeitung zu Werbezwecken auf Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO beruht" — sie hängt also an derselben Rechtsgrundlage, die hier geprüft wird |

**b) Die Aufsichtsauffassung.** Datenschutzkonferenz, Orientierungshilfe
zur Verarbeitung personenbezogener Daten für Zwecke der Direktwerbung,
**Stand Februar 2022** — Volltext selbst gelesen. Sie liegt uns über
zwei unabhängige Behörden-Domains vor, deren Textextrakte md5-identisch
sind; *das belegt die **Fassung**, nicht die Negativbefunde weiter unten
— die laufen über einen Text, also einen Leseweg.*

**Ziff. 1.5 „Zweckänderung", vollständig** (im Original zwei Absätze):

> „Sofern personenbezogene Daten für Werbezwecke verwendet werden sollen,
> die ursprünglich nicht (auch) zu Zwecken der Werbung erhoben worden
> sind, sind zusätzlich die Regelungen des Art. 6 Abs. 4 DS-GVO
> (Zweckänderung) zu beachten.
>
> Um herauszufinden, ob der Werbezweck mit der ursprünglichen
> Zweckbestimmung vereinbar ist, müssen Verantwortliche eine sog.
> Kompatibilitätsprüfung durchführen, es sei denn, es liegt eine
> Einwilligung in die zweckändernde Nutzung vor."

**Ziff. 4.2 „Keine Verwendung der Daten aus dem Impressum",
vollständig:**

> „Nicht zulässig ist **hingegen** das Auslesen der Daten aus einem
> Online-Impressum zum Zweck der werblichen Nutzung. Zwar sind diese
> Daten allgemein zugänglich, sie werden jedoch nicht freiwillig,
> sondern aufgrund der gesetzlichen Verpflichtung zur
> Anbieterkennzeichnung **gem. § 5 TMG bzw. § 18 MStV** veröffentlicht.
> Mangels Freiwilligkeit der Veröffentlichung führt die
> Interessenabwägung gem. Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO
> **regelmäßig** dazu, dass die werbliche Nutzung so erhobener Daten
> unzulässig ist. Zur Vermeidung einer werblichen Ansprache mit diesen
> Daten kann ein Anbieter einer Internetseite vorsorglich einen
> Werbewiderspruch in sein Impressum aufnehmen."

Drei Beobachtungen zum Wortlaut, die wir **nicht** bewerten:

1. Die Aufsicht knüpft am **Auslesen** an, nicht erst am Anschreiben.
2. Der Ausgangspunkt ist die **Freiwilligkeit der Veröffentlichung**.
3. Die Fassung ist von Februar 2022 und nennt noch **§ 5 TMG**; die
   Impressumspflicht steht heute in § 5 DDG.

**Ziff. 4.1 — die Ziffer davor, auf die sich das „hingegen" bezieht,
vollständig (drei Sätze):**

> „Eine Verarbeitung von Postadressdaten für Zwecke der eigenen
> Direktwerbung aus der Durchführung von Preisausschreiben und
> Gewinnspielen sowie aufgrund von Katalog- und Prospektanforderungen
> ist nach Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO **zulässig**.
> **Spätestens bei der Datenerhebung ist über die werbliche
> Datenverarbeitung zu informieren**; eine Einwilligung der betroffenen
> Personen ist bei solchen Sachverhalten sodann nicht erforderlich. Die
> Anforderungen aus Ziffer 2.1 sind zu beachten."

4. Auch der permissive Gegenpol ist **bedingt**: Er verlangt die
   Information „spätestens bei der Datenerhebung".

**Ziff. 2.2 „Zeitpunkt der Information nach Art. 14 DS-GVO" — der
operative Fristmaßstab der Aufsicht:**

> „Eine unverzügliche Information fordert das Gesetz nicht. Die
> Information muss jedoch innerhalb einer angemessenen Frist, jedenfalls
> zum Zeitpunkt der ersten Kommunikation (Aussendung einer Werbung),
> **spätestens aber innerhalb eines Monats nach Erhalt der Daten**
> erfolgen. **Es kommt also darauf an, welche Bedingung zuerst
> eintritt.** Erfolgt die Information in Verbindung mit der ersten
> Werbezusendung, sind beide Bestandteile (Information und Werbetext)
> **klar voneinander zu trennen** und die Information (einschließlich
> des Hinweises auf das Werbewiderspruchsrecht) entsprechend deutlich
> herauszustellen."

Das betrifft unsere Planung unmittelbar (Frage 1.2 Nr. 6): Wir bauen die
Liste in Wellen, und die Erhebung läuft dem Versand voraus.

⚠️ **Geltungsgrenze der Orientierungshilfe, die sie selbst zieht**
(Fußnote 1): Sie „thematisiert **nicht das Thema Adresshandel**". Der
vom LG entschiedene Fall ist ein Adresshändler-Fall.

**Unser eigener Stand dazu:** Wir führen die Frage seit dem 12.08.2026
als **offen** und haben sie ausdrücklich **nicht** selbst beantwortet.
Unsere Interessenabwägung sagt dazu: „Solange sie offen ist, steht neben
der Impressums-Fallgruppe ein **zweiter** ungeklärter Rechtsgrund — das
verschärft das Risikobild, es entlastet nicht."

### 1.3a Drei Argumente, die wir uns selbst gesperrt haben

Wir legen sie offen, damit sie nicht versehentlich Grundlage Ihrer
Antwort werden. Alle drei liegen nahe, und wir halten alle drei für
nicht tragfähig:

- **„Wir informieren doch vorbildlich nach Art. 14."** Die
  Orientierungshilfe sagt in Ziff. 1.3.1 das Gegenteil: „Die Erwartungen
  der betroffenen Person können dabei nicht durch die nach der DS-GVO
  vorgesehenen Pflichtinformationen (Art. 13, 14 DS-GVO) erweitert
  werden. Während die Nicht- oder Schlechterfüllung der
  Informationspflicht das Abwägungsergebnis also aus Sicht des
  Verantwortlichen negativ beeinflusst, hat die ordnungsgemäße Erfüllung
  der Informationspflichten **keine Auswirkung** auf die Abwägung der
  Interessen." Die Art.-14-Erfüllung ist für uns Pflicht, kein Pluspunkt.
- **„Es hat ja niemand widersprochen."** LG Düsseldorf, Rn. 82: „Drittens
  schließlich kann eine grundsätzliche Zulässigkeit der Direktwerbung per
  Briefpost keinesfalls aus einem fehlenden Widerspruch der betroffenen
  Person abgeleitet werden. Das etwaige Bestehen eines
  Widerspruchsrechts setzt nämlich das Vorliegen einer rechtmäßigen
  Verarbeitung voraus."
- **„Die Aufsicht hält B2B ohnehin für unproblematisch."** Das sagt sie
  nicht (Einzelheiten in 3.3 c).

### 1.4 Gegenansicht

- In der Literatur wird vertreten, die gesetzliche Pflicht zur
  Anbieterkennzeichnung betreffe nur den **Veröffentlichungsgrund**,
  nicht eine Zweckbindung beim Empfänger der Information. **Wir haben
  diese Gegenposition nicht an einer Primärquelle verifiziert** und
  führen sie deshalb nur als benannte, unbelegte Gegenansicht.
- Für die Zweckänderungsfrage im Besonderen ist uns **keine**
  veröffentlichte Entscheidung bekannt, die Art. 6 Abs. 4 DSGVO auf
  Impressumsdaten anwendet. Das ist ein **Nichtfinden**, kein
  Nichtvorhandensein: Wir haben juris und beck-online nicht durchsucht.
- Die Orientierungshilfe der Datenschutzkonferenz ist eine
  **Aufsichtsauffassung**, kein Gesetz und keine Rechtsprechung.

### 1.5 Entscheidungsalternativen, zwischen denen wir stehen

| Weg | Was er bedeutet | Was wir dafür brauchen |
|---|---|---|
| **A — Impressumsquelle fallenlassen** | Nur freiwillig veröffentlichte Kontaktseiten und Verzeichnisse. Kleinere Liste, geringeres Risiko | Nichts weiter; wir kennen die Alternativquellen |
| **B — Impressumsquelle nutzen, Risiko dokumentiert tragen** | Der heutige Entscheid des Geschäftsführers (11.08.2026) | Ihre Einschätzung, wie groß dieses Risiko tatsächlich ist, und ob eine dokumentierte Kompatibilitätsprüfung es messbar senkt |
| **C — Nach Betriebsform trennen** | Impressumsdaten nur bei Kapitalgesellschaften, bei inhabergeführten Betrieben nur freiwillige Quellen. ⚠️ **Diese Trennlinie führen wir selbst als „vertretbar, nicht gesichert":** *dafür* spricht ErwG 14 S. 2 DSGVO (ohne personenbezogenes Datum in der Liste ist die Verordnung für diese Felder nicht anwendbar); *dagegen*, dass das Verdikt der Aufsicht am **Auslesen** anknüpft, das Auslesen bereits Verarbeitung ist (Art. 4 Nr. 2 DSGVO) und beim Auslesen der Vertretungsberechtigte regelmäßig vorliegt, weil § 5 Abs. 1 Nr. 1 DDG ihn im Impressum verlangt. **Der Unterschied zwischen Auslesen und Speichern ist bei uns nicht geklärt** | Ihre Bestätigung oder Korrektur, ob diese Trennlinie trägt |

**Wir bitten nicht um eine Empfehlung „für B", sondern um die
Einschätzung, welche dieser Wege rechtlich tragen.**

---

## 2. Frage 2 — Wie ist die Reichweite von LG Düsseldorf 38 O 243/23 zutreffend zu beschreiben?

*(intern: die Neufassung eines Kernsatzes unserer Kanal-Rechtsmatrix,
Abschnitt A7 — „A7-Kernsatz")*

### 2.1 Sachverhalt

Unsere Kanal-Rechtsmatrix stützt die Aussage „Briefwerbung ist
lauterkeitsrechtlich der offenste Kanal, das Risiko liegt auf der
DSGVO-Seite" unter anderem auf dieses Urteil. Der tragende Satz lautete
dort **bis zum 17.08.2026**:

> „**LG Düsseldorf, Urt. v. 06.02.2026 – 38 O 243/23** … hat eine
> **Briefpost**-Werbesendung untersagt — gestützt ausschließlich auf
> Art. 6 Abs. 1 lit. f und die Art. 12–14, 21 DSGVO."

**Dieser Satz ist durch unsere eigene Nachmessung am Volltext
widerlegt.** Er stand zunächst nur als überholungsbedürftig markiert im
Dokument; die Neufassung hatten wir uns versagt, weil sie eine
Rechtsbewertung gewesen wäre. **Inzwischen haben wir ihn ersetzt** —
allerdings bewusst so, dass die Neufassung **nur den Aufbau des Urteils
abbildet** und keine Bewertung enthält. Sie lautet jetzt: *materielle
Anknüpfung ist die DSGVO, Anspruchsgrundlage das UWG; der Kläger war ein
nach § 4 UKlaG eingetragener Verband (Rn. 2, 34, 64); das Gericht
stellt einen Verstoß gegen Artt. 5 Abs. 1 Buchst. a, 6 Abs. 1 Unterabs. 1
DSGVO fest (Rn. 125) und bejaht dessen Unlauterkeit **doppelt** — nach
§ 3a UWG (Rn. 137) **und** nach § 3 Abs. 2 UWG (Rn. 147), wobei es
ausdrücklich offenlässt, welcher Weg vorrangig ist (Rn. 136).*
**Ob diese Beschreibung trägt, ist genau die Frage unten** — die
Vorfassung steht in unserem Dokument in einem sichtbaren
Reparatur-Kasten weiter daneben, damit erkennbar bleibt, was korrigiert
wurde.

**Was die Messung ergeben hat** (eigener Lauf am amtlichen
NRWE-Volltext, 13.08.2026, in dieser Runde am selben Abzug
reproduziert):

| Suchmuster | Treffer | Zählweg |
|---|---:|---|
| `DSGVO` | 109 | `grep -o "DSGVO" <datei> \| wc -l` |
| `UWG` | 148 | ebenso |
| `§ 3a UWG` | 21 | ebenso |
| `§ 3 Abs. 1 UWG` | 5 | ebenso |
| `§ 7 UWG` | **0** | ebenso, case-sensitiv; Positivkontrolle im selben Lauf `Werbung` = 14 (case-sensitiv), Gegenprobe `§ 7` = 1 (einziger Treffer „§ 709 S. 1 und S. 2 ZPO", Teilwort) |

Die Null bei „§ 7 UWG" ist also echt. **Aus ihr wurde aber „gestützt
ausschließlich auf die DSGVO" — und das ist etwas anderes.** Dasselbe
Urteil prüft die lauterkeitsrechtliche Schiene durch und bejaht sie.

### 2.2 Konkrete Fragestellung

1. **Wie beschreibt man die Entscheidung zutreffend?** Unsere Lesart
   nach der Korrektur lautet: *materielle Anknüpfung ist die DSGVO, die
   Anspruchsgrundlage ist das UWG.* Trägt diese Formulierung — oder
   verfehlt sie die Struktur der Entscheidung?
2. Welche der beiden Absagegründe (Rn. 84 und Rn. 88) trägt die
   Entscheidung, und welche Bedeutung hat es für die Übertragbarkeit,
   dass **beide vor der Interessenabwägung** liegen?
3. Ist die Entscheidung auf eine **B2B**-Briefkampagne übertragbar? Der
   Tenor betrifft ausdrücklich Verbraucher, und der Sachverhalt ist
   telekommunikationsrechtlich eingefärbt (beigefügtes Auftragsformular,
   Informationspflichten aus der Richtlinie (EU) 2018/1972). Unsere
   eigene Einschätzung: Die tragende Argumentation zu Art. 14 Abs. 3
   lit. b und Art. 21 Abs. 4 DSGVO knüpft allein an die Eigenschaft als
   **betroffene Person** an, träfe also auch den namentlich
   angeschriebenen Inhaber. **Ist das richtig?**
4. Welche Bedeutung hat es, dass es sich um ein **erstinstanzliches**
   Urteil handelt und die Rechtskraft ungeklärt ist (dazu 2.3)? **Und
   welches Gewicht hat es, dass das zuständige Berufungsgericht nach den
   Angaben der dortigen Beklagten bereits eine abweichende Auffassung
   als vorläufiges Beratungsergebnis mitgeteilt haben soll und sie in
   einer nicht tragenden Erwägung eines Beschlusses geäußert hat**
   (Rn. 111, Wortlaut in 2.3)?
5. **Die Datenquelle im Brief — Rn. 115.** Art. 14 Abs. 2 lit. f DSGVO
   verlangt die Angabe der Datenherkunft. Das Gericht macht daraus in
   Rn. 115 ein **Irreführungs**-Argument: Hätte die Beklagte angegeben,
   „die Daten des Adressaten **aus öffentlichen Quellen entnommen** oder
   von einem Adresshändler erworben zu haben", hätte das den erweckten
   Eindruck einer laufenden Geschäftsbeziehung „**zerstört**".
   **Wir planen genau diese Angabe** („Ihre öffentlich zugängliche
   Unternehmenswebsite"). Ist damit die Irreführungsgefahr ausgeräumt —
   oder entsteht daraus ein neues Problem, wenn ein Brief trotz
   korrekter Herkunftsangabe persönlich adressiert ist?
   ⚠️ **Zum Einordnen:** Im Urteil ist die fehlende Herkunftsangabe
   **ein Umstand unter mehreren**. Rn. 114 leitet den Block ein mit „Das
   auf Verschleierung angelegte Bestreben der Beklagten tritt außer in
   der Aufmachung des Anschreibens und den darin gewählten
   Formulierungen in **weiteren Umständen** zu Tage", und Rn. 115
   beginnt „Diese liegen **zunächst** darin, dass …". **Deshalb die
   umfassendere Frage: Welche Gestaltungsmerkmale muss unser Brief
   erfüllen, damit er nicht als Geschäftspost aus einer laufenden
   Beziehung erscheint?** Genügt die Herkunftsangabe, oder ist die
   Vorstellung des Absenders der eigentliche Punkt?
5a. **Art. 14 Abs. 3 lit. a oder lit. b — welche Frist gilt für uns?**
   Der **Tenor** untersagt unter Nr. 4, die Informationen „nicht
   innerhalb einer angemessenen Frist, spätestens innerhalb eines
   Monats" zu erteilen — das ist die **Monatsfrist des Art. 14 Abs. 3
   lit. a**. Die Pflicht, auf der unsere gesamte Briefgestaltung
   aufbaut („spätestens **mit diesem Schreiben**", Art. 14 Abs. 3
   lit. b), steht dagegen in den **Gründen** (Rn. 85), nicht im Tenor.
   **Welche der beiden Varianten greift, wenn die Erstansprache selbst
   die Offenlegung gegenüber der betroffenen Person ist?** Wir haben
   uns für die strengere entschieden (alles in den ersten Brief) —
   **ist das richtig, oder genügte die Monatsfrist?** Die Antwort
   entscheidet, ob die Art.-14-Information zwingend im Werbebrief
   stehen muss oder nachgereicht werden darf; davon hängt die
   Gestaltung jedes Briefes ab.
6. **Trägt Rn. 87 die Betriebsfolge, die wir daraus ziehen?** Wir haben
   daraus abgeleitet, dass sämtliche Vorkehrungen (Sperrdatei,
   Informationstexte, Quellenprotokoll) **vor dem ersten Datensatz**
   stehen müssen, nicht erst vor dem Versand. Der Satz steht in einer
   Passage, die einen Literatureinwand zurückweist (s. § 0). **Ist
   unsere Ableitung tragfähig, oder überdehnen wir sie?**
7. **Eine zweite Stelle derselben Art, die wir bei uns gefunden
   haben:** Unsere Rechtsmatrix sagt zur Interessenabwägung, der
   Erwägungsgrund 47 DSGVO verlange für das Regelbeispiel Direktwerbung
   eine „maßgebliche und angemessene Beziehung", die beim Kaltkontakt
   fehle, und „der EuGH wertet dieses Fehlen **ausdrücklich als
   Negativfaktor** (C-621/22 Rn. 56)". Am Volltext gelesen steht dort
   etwas Engeres (Wortlaut in 2.3). **Trägt unsere Zuspitzung — und
   welche Bedeutung hat Rn. 56 für eine B2B-Kaltansprache per Brief?**

### 2.3 Quellenlage mit Fundstelle

Alle Randnummern sind am Volltext des amtlichen NRWE-Abzugs im Original
gelesen, den Absatz davor und danach jeweils mit.

| Rn. | Wortlaut (Auszug) |
|---|---|
| **84** | „Die dargestellten Voraussetzungen von Art. 6 Abs. 1 Unterabs. 1 Buchstabe f DSGVO sind schon deshalb nicht erfüllt, weil die Beklagte nicht … allen anderen ihr nach der DSGVO obliegenden Pflichten nachkommen ist." *(Grammatikfehler im Original)* |
| **85** | „Die Beklagte hat es versäumt, den Adressaten des Schreibens spätestens mit diesem Schreiben (wie es gemäß Art. 14 Abs. 3 Buchst. b DSGVO geboten war) die in Art. 14 Abs. 1 und Abs. 2 Buchst. a bis c, e und f DSGVO genannten Informationen … zur Verfügung zu stellen. Ferner hat sie es unterlassen, den Adressaten (wie in Art. 21 Abs. 4 DSGVO vorgeschrieben) spätestens mit diesem Schreiben ausdrücklich in einer verständlichen und von anderen Informationen getrennten Form darauf hinzuweisen …" |
| **87** | „Die Erfüllung dieser Verpflichtung erfordert letztlich Vorkehrungen, die bereits vor dem ersten Verarbeitungsschritt in die Wege geleitet sein müssen. Ansonsten bestünde nämlich die Gefahr, dass mit der Datenverarbeitung begonnen wird, obwohl nach den objektiven Umständen die Voraussetzungen einer rechtmäßigen Datenverarbeitung nicht vorliegen." |
| **88** | „Darüber hinaus liegen die Voraussetzungen von Art. 6 Abs. 1 Unterabs. 1 Buchstabe f DSGVO deshalb nicht vor, weil das von der Beklagten mit der Werbung verfolgte Interesse nicht rechtmäßig ist. **Die von der Beklagten betriebene Werbung ist gemäß § 3 Abs. 1 UWG unzulässig, weil sie gemäß §§ 5 Abs. 1 und Abs. 2, 5a Abs. 1 bis Abs. 3 UWG unlauter ist.**" |
| **115** | „Hätte sie (wie es gemäß Art. 14 Abs. 1 Abs. 2 Buchst. f und Abs. 3 Buchst. b DSGVO erforderlich gewesen wäre) in dem Schreiben angegeben, die Daten des Adressaten **aus öffentlichen Quellen entnommen** oder von einem Adresshändler erworben zu haben, hätte das den aufgebauten Eindruck, bei dem Schreiben handele es sich um Geschäftspost im Rahmen einer laufenden Geschäftsbeziehung …, **zerstört** und dem Adressaten einen Hinweis darauf gegeben, dass es sich um das Werbeschreiben eines mit dem Adressaten nicht verbundenen Unternehmens handelt." |
| **136** | „**Es kann offenbleiben**, ob im Allgemeinen in erster Linie § 3a UWG … heranzuziehen ist, oder § 3 Abs. 2 UWG … Bezogen auf die … angegriffenen Verstöße liegen **sowohl** die Voraussetzungen von § 3a UWG vor … **als auch** diejenigen von § 3 Abs. 2 UWG" |
| **137** | „Die gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden geschäftlichen Handlungen sind gemäß § 3a UWG unlauter." |
| **141** | „Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO sind **Marktverhaltensregelungen** in diesem Sinn, weil und soweit sie die Zulässigkeit der Datenverarbeitung zum Zwecke der Werbung regeln" |
| **142** | „Beruft sich **ein Marktteilnehmer** auf einen Erlaubnistatbestand um die Nutzung personenbezogener Daten bei seiner Werbung zu rechtfertigen, bezwecken die einem solchen Marktverhalten … gesetzten Grenzen auch den Schutz **der betroffenen Person in ihrer Stellung als Marktteilnehmer**" — der Satz davor bindet das allerdings an den Verbraucher zurück („wobei dem Erfordernis der Einwilligung **des Verbrauchers** eine zentrale Bedeutung zukommt") |
| **147** | „Die gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden geschäftlichen Handlungen sind **außerdem** gemäß § 3 Abs. 2 UWG unlauter." |

⚠️ **Das Urteil trägt an dieser Stelle eine Doppelbegründung.** Rn. 136
lässt ausdrücklich offen, welcher der beiden Wege vorrangig ist, und
bejaht beide. Ein Satz „das LG stützt sich auf § 3a UWG" wäre also
schon wieder verkürzt — richtig ist „auf § 3a UWG **und** § 3 Abs. 2
UWG, nebeneinander". Wir haben das bei uns nachgezogen.

**Drei Sachverhaltsunterschiede zu unserem Vorhaben, die wir selbst am
Volltext festgestellt haben:**

- **Rn. 3:** Die Beklagte hatte die Daten „nebst Namen und Anschrift der
  Adressaten **von einem Adresshändler erworben**". Unser Fall ist
  eigene Recherche in öffentlich zugänglichen Quellen.
- **Rn. 86:** Das Gericht trennt ausdrücklich die Entgegennahme und
  Speicherung der angekauften Adressen — sie waren „**nicht Teil des von
  dem Kläger angegriffenen geschäftlichen Handelns** …, sondern in
  dessen Vorfeld" — von Erstellung und Versand der Schreiben.
- **Rn. 44 und Rn. 89:** Dieselbe Werbung war zusätzlich Gegenstand
  zweier Verfahren, die „**von einer Mitbewerberin der Beklagten**"
  geführt wurden (38 O 271/23 und 38 O 88/23, letzteres ein
  einstweiliges Verfügungsverfahren). Das ist für Frage 3 erheblich: Der
  Mitbewerber-Angriff ist in diesem Sachverhalt kein theoretischer Fall.
  *(Hinweis für die Lektüre: Rn. 90 bis 110 sind ein wörtliches Zitat aus
  dem Urteil 38 O 88/23, nicht Text dieser Entscheidung — die Kammer
  macht sich diese Passage in Rn. 111 aber ausdrücklich zu eigen.)*

⭐ **Rn. 111 — für die Belastbarkeit dieses Urteils die wichtigste
Stelle:**

> „An dieser Beurteilung des Werbeschreibens der Beklagten hält die
> Kammer weiterhin fest, und zwar auch **in Ansehung der abweichenden
> Auffassung, die nach den Angaben der Beklagten von dem
> Oberlandesgericht in mehreren mündlichen Verhandlungen als vorläufiges
> Beratungsergebnis mitgeteilt worden sein soll** und die in dem (von
> der Beklagten als Anlage B9 vorgelegten) **Beschluss vom 19. Dezember
> 2024 - 20 W 37/24** (= Landgericht Düsseldorf 38 O 17/22) beiläufig in
> einer die dort getroffene Entscheidung nicht tragenden Erwägung
> geäußert worden ist."

Zwei Feststellungen dazu, ohne Bewertung: Das Oberlandesgericht
Düsseldorf ist für dieses Landgericht das **Berufungsgericht**.
*(Belegstufen-Hinweis, ergänzt 17.08.2026: Dass mit „dem
Oberlandesgericht" in Rn. 111 das OLG Düsseldorf gemeint ist, sagt die
Randnummer selbst nicht — sie nennt keinen Ort. Wir leiten es aus dem
Aktenzeichen ab: Rn. 45 desselben Urteils führt „Landgericht Düsseldorf
38 O 245/23 = **Oberlandesgericht Düsseldorf 20 W 87/23**", also
denselben 20er-Senat für Beschwerden gegen dieselbe Kammer. Wir halten
die Zuordnung für sicher, weisen sie aber als **unsere Ableitung** aus
und nicht als Aussage des Urteils.)* Und die
Passage steht im Abschnitt zur **lauterkeitsrechtlichen** Würdigung des
Schreibens, nicht in der DSGVO-Prüfung — sie wirkt aber auf den zweiten
Absagegrund zurück, weil Rn. 88 die Rechtmäßigkeit des verfolgten
Interesses gerade an der lauterkeitsrechtlichen Zulässigkeit misst.
**Den Beschluss 20 W 37/24 haben wir nicht beschafft.**

**Tenor:** Untersagt wurden fünf Verhaltensweisen gegenüber
**Verbrauchern**; Nr. 4 knüpft an die Informationspflicht nach „Art. 14
Abs. 1 und Abs. 2 DSGVO" an — und zwar ausdrücklich nur für Daten, die
„**bei einem Dritten** erhoben" wurden. *(Ob eigene Recherche in
öffentlich zugänglichen Quellen ein Erheben „bei einem Dritten" ist,
wäre für uns eine eigene Frage; wir stellen sie hier mit.)* **Nr. 5**
betrifft die verspätete Auskunft nach Art. 15 DSGVO — nach Rn. 237
genügt dafür, dass ein Auskunftsverlangen in einer Abmahnung **zitiert**
wird; ein erneutes Verlangen ist nicht nötig. Für uns ist das ein
Bau-Posten neben der Sperrdatei, keine Rechtsfrage. **Ein Art.-21-Abs.-4-Verbot ist im Tenor
nicht enthalten** — Art. 21 Abs. 4 trägt dort die Art.-6-Prüfung
(Rn. 85). Wer ein „tenoriertes Art.-21-Verbot" zitiert, zitiert zu weit.
Auch das war ein Fehler in unserem Bestand; er ist korrigiert.

**Zu Teilfrage 5 — EuGH, Urt. v. 04.10.2024 – C-621/22
(Koninklijke Nederlandse Lawn Tennisbond), Rn. 56.** Der deutsche
Volltext ist über den amtlichen Kanal nicht abrufbar; wir haben die
**englische** Sprachfassung gelesen und dazu die amtliche deutsche
Amtsblatt-Mitteilung mit dem Tenor. *(Dass die Randnummern über die
Sprachfassungen hinweg übereinstimmen, konnten wir mangels deutscher
Volltextfassung **nicht am Objekt prüfen** — wir führen es als Annahme.
Verfahrenssprache war Niederländisch; auch die englische Fassung ist
eine Übersetzung, und eine eigene Übersetzung haben wir nicht
angefertigt.)* Rn. 56 lautet dort:

> „In addition, the referring court will have to take account of the
> fact that the data in question are transmitted, inter alia, to a
> provider of games of chance and casino games, such as the NLO, the
> promotional and marketing activities of which, although legitimate,
> are carried out in a context which, **contrary to what follows from
> recital 47 of the GDPR, does not appear to be characterised by a
> relevant and appropriate relationship between the data subjects and
> the controller**. Moreover, in certain circumstances, the processing
> of such data could have harmful effects on the members of the tennis
> associations concerned since those activities may expose those
> members to the risks associated with the development of gambling
> addiction."

**Was wir daran selbst festgestellt haben, ohne es zu bewerten:** Die
Passage ist an das **vorlegende Gericht** gerichtet („will have to take
account"), sie betrifft einen besonders gelagerten Sachverhalt
(Weitergabe an einen Glücksspielanbieter, Suchtrisiko), und das fehlende
Näheverhältnis erscheint dort als **ein** zu berücksichtigender Umstand
neben anderen. Der Erwartungshorizont der Betroffenen ist bereits in
Rn. 55 behandelt. **Und Rn. 54 nennt die Abwägungsfaktoren
vollständiger, als wir sie zunächst wiedergegeben hatten:** Das
vorlegende Gericht müsse „insbesondere" berücksichtigen „the reasonable
expectations of the data subject **as well as the scale of the
processing at issue and its impact on that person**" — also auch
**Umfang und Auswirkung** der Verarbeitung. Bei uns: wenige hundert
Adressen je Welle, ein Brief, kein Profiling, kein Scoring, keine
Weitergabe außer an den Versanddienstleister. **Welches Gewicht dieser
Faktor in unserer Konstellation hat — und ab welcher Skalierung er
kippt —, ist Teil der Frage.** Der Tenor (amtliche deutsche Fassung) beschränkt sich
darauf, dass die Verarbeitung „**absolut notwendig**" sein muss und das
geltend gemachte Interesse „rechtmäßig". Zum dreistufigen Aufbau nennt
das Urteil Rn. 37 (drei kumulative Voraussetzungen), Rn. 39 (ErwG 47,
Direktwerbung als Beispiel eines berechtigten Interesses), Rn. 40
(Rechtmäßigkeit) und Rn. 42/43 (Erforderlichkeit zusammen mit der
Datenminimierung). **Ob unsere Zuspitzung „ausdrücklich als
Negativfaktor" trägt, entscheiden wir nicht** — sie steht seit einer
internen Gegenprüfung vom 13.08.2026 als offener Bewertungsposten in
unserem Bestand und ist deshalb hier enthalten.

**Instanz und Rechtskraft — eigene Messung, 14.08.2026:** Das Urteil ist
erstinstanzlich und „vorläufig vollstreckbar". Ein Rechtsmittelhinweis
oder eine Rechtskraftangabe **steht nicht im Text**: Suchlauf
`berufung|rechtsmittel|rechtskräftig|rechtskraft|revision`,
case-insensitiv, **0 Treffer**, bei greifenden Positivkontrollen im
selben Lauf: `vorläufig vollstreckbar` = 1 · `Urteil` = 118
(case-sensitiv; case-insensitiv 144, die Differenz sind Binnentreffer
wie „Beurteilung") · `gemäß` = 80 · und, weil der Suchbegriff
„rechtskräftig" einen Umlaut trägt, als Kontrolle desselben
Zeichenkanals `ä` = **911**. Teilwortprobe `rechtskr` = 0. **Das ist
„nicht feststellbar", kein Negativbefund** — die Rechtskraft ist
ungeklärt, nicht verneint. Was der Text dagegen enthält: vorläufige
Vollstreckbarkeit nach § 709 S. 1 und S. 2 ZPO (Rn. 271),
Sicherheitsleistungen und eine Streitwertfestsetzung (Rn. 272). Ob
Berufung eingelegt wurde, konnten wir mit unseren Mitteln nicht
ermitteln; **das wäre eine Frage, die Sie mit Ihrem Datenbankzugang in
Minuten klären können und die für die Belastbarkeit des ganzen Punktes
erheblich ist.**

### 2.4 Gegenansicht

Das Gericht setzt sich in Rn. 79 bis 83 ausdrücklich mit einer
**großzügigeren** Sichtweise auseinander. **Die Rechtslage ist an diesem
Punkt streitig**, und wir tragen den Streitstand hier bewusst mit, statt
uns die günstigere Seite auszusuchen:

⚠️ **Wie das Gericht abweicht, ist genauer zu fassen, als wir es zuerst
getan hatten.** Rn. 79 ist **konditional** formuliert: „**Sollten**
demgegenüber die Ausführungen unter B I der Gründe des … Beschlusses des
Oberlandesgerichts Stuttgarts … dahin zu verstehen sein, dass an die
Zulässigkeit einer zum Zwecke der Direktwerbung vorgenommenen
Datenverarbeitung weniger strenge Anforderungen zu stellen sind …,
**könnte dem** mit Blick auf die … Vorgaben zur Auslegung der DSGVO
**nicht gefolgt werden**." Das LG lässt also offen, ob der
OLG-Beschluss überhaupt so zu lesen ist, und erklärt für diesen Fall,
ihm nicht folgen zu können. „Das LG weicht vom OLG Stuttgart ab" wäre
schärfer als der Text. *(In unserem eigenen Bestand stand die schärfere
Fassung; sie ist korrigiert.)*

| Gegenposition | Fundstelle (wie im Urteil zitiert) | Kern |
|---|---|---|
| **OLG Stuttgart** | „OLG Stuttgart, Beschluss vom 2. Februar 2024 - 2 U 63/22, GRUR-RS 2024, 3802" (Rn. 79, erneut Rn. 83) | Vom LG referiert als möglicherweise dahin zu verstehen, „dass an die Zulässigkeit einer zum Zwecke der Direktwerbung vorgenommenen Datenverarbeitung weniger strenge Anforderungen zu stellen sind" |
| **Eckhardt, ZD 2024, 399** | Rn. 79, mit Fazit-Zitat [S. 401] | „die Neukundengewinnung mittels Briefpostwerbung […] grundsätzlich gerechtfertigt ist, es sei denn, die betroffene Person hat widersprochen" |
| **Eckhardt, ZD 2025, 443** | Rn. 79, Rn. 83 [444] und [447] | Direktwerbung als berechtigtes Interesse nach ErwG 47; die Vertreter dieser Sicht setzen aber voraus, dass die Betroffenen nach Artt. 13, 14, 21 DSGVO in der Werbesendung transparent informiert werden |
| ⭐ **OLG Düsseldorf**, Beschl. v. 19.12.2024 – 20 W 37/24 | Rn. 111 | **Abweichende Auffassung des zuständigen Berufungsgerichts**, geäußert in einer nicht tragenden Erwägung; dazu ein von der dortigen Beklagten behauptetes vorläufiges Beratungsergebnis aus mehreren mündlichen Verhandlungen. **Original nicht beschafft** |
| **Ziebarth, VuR 2024, 379 [383 ff.]** | Rn. 79, Rn. 77 | Vom Gericht auf der **strengeren** Seite angeführt — der Vollständigkeit halber genannt, damit die Tabelle nicht nur die großzügigere Literatur führt. **Original nicht beschafft** |

Die drei Gegengründe (Rn. 80 bis 82): Direktwerbung *kann* ein
berechtigtes Interesse sein, muss es aber nicht (Rn. 80); auch dann
müssen alle weiteren Voraussetzungen des Art. 6 Abs. 1 Unterabs. 1
lit. f erfüllt sein (Rn. 81); aus einem fehlenden Widerspruch lässt sich
keine Zulässigkeit ableiten, weil das Widerspruchsrecht eine rechtmäßige
Verarbeitung bereits voraussetzt (Rn. 82).

⭐ **Rn. 83 ist für uns der praktisch wichtigste Absatz**, weil das
Gericht dort die Bedingungen benennt, unter denen **selbst nach der
großzügigeren Ansicht** Briefwerbung getragen würde: die geringere
Belästigungswirkung gilt „**nur, wenn die Briefwerbung spätestens nach
dem Öffnen des Briefs sofort und unmissverständlich erkennbar ist**",
und die Vertreter dieser Sichtweise „**setzen … voraus, dass bei der
konkreten Briefwerbung die datenschutzrechtlichen Vorgaben eingehalten
und die Betroffenen gemäß Artt. 13,14, 21 DSGVO in der Werbesendung
transparent informiert werden**" (dort mit Verweis auf Eckhardt, ZD
2025, 443 [447], ausdrücklich „für das **Lettershopverfahren**").
**Wir haben daraus keine Entwarnung abgeleitet** — die zuerst zitierte
Eckhardt-Fundstelle (ZD 2024, 399) kennt diese Voraussetzung gerade
nicht, und die zweite betrifft einen Sonderfall. Ob die Bedingungsliste
aus Rn. 83 für uns eine belastbare Handlungsanleitung ist, ist Teil
unserer Frage.

⚠️ **Zwei Verwechslungsfallen im Umgang mit diesem Urteil**, die wir
bei der Prüfung selbst getroffen haben und weitergeben: Das Urteil
zitiert **zwei verschiedene** OLG-Stuttgart-Entscheidungen — den
Beschluss 2 U 63/22 (Rn. 79/83, als möglicherweise großzügigere
Gegenansicht) und das Urteil vom 27.02.2020 – 2 U 257/19, GRUR-RR 2020,
442 (Rn. 130, **zustimmend** zur § 3a-Schiene). Und es schreibt
durchgehend „**Artt.** 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1
DSGVO" mit Doppel-t; eine Suche nach „Art. 5 Abs. 1 Buchstabe a" liefert
im Volltext **0** Treffer, obwohl die Stelle **13**-mal vorkommt
(Zählweg `grep -o "<muster>" <datei> | wc -l`, case-sensitiv).

⚠️ **Belegstufen-Grenze, die wir offenlegen:** OLG-Beschluss und beide
Eckhardt-Fundstellen haben wir **nur in der Wiedergabe des LG-Urteils**
gelesen. GRUR-RS und ZD liegen hinter Bezahlschranken; **wir haben kein
Original beschafft.** Ob die Ausführungen des OLG Stuttgart wirklich so
zu verstehen sind, lässt **das LG selbst offen** („Sollten … dahin zu
verstehen sein"). Falls diese Fundstellen für Ihre Antwort tragend
werden, bitten wir um den Hinweis; wir würden sie dann über Sie
beziehen.

### 2.5 Entscheidungsalternativen

Es geht hier nicht um eine Handlungsalternative, sondern um die
**Formulierung, die künftig in unseren Betriebsunterlagen steht**. Drei
Fassungen stehen zur Wahl; wir bitten Sie, eine zu bestätigen, zu
korrigieren oder zu ersetzen:

- **Fassung 1 (eng):** „Untersagt wurde eine Briefwerbung an Verbraucher
  wegen Verstoßes gegen Art. 6 Abs. 1 lit. f DSGVO; die Absage stützt
  sich auf Informations- und Hinweispflichten sowie darauf, dass das
  verfolgte Interesse lauterkeitsrechtlich nicht rechtmäßig war."
- **Fassung 2 (weit):** „Ein DSGVO-Verstoß bei Briefwerbung ist zugleich
  lauterkeitsrechtlich angreifbar; die Anspruchsberechtigung folgt dann
  § 8 Abs. 3 UWG."
- **Fassung 3 (Ihre).**

---

## 3. Frage 3 — § 3a UWG als Angriffsweg bei einem DSGVO-Verstoß in einer reinen B2B-Aussendung

*(intern: „Streitstand § 3a UWG", einschließlich der UGPRL-Grenze und
der Kostenfolge)*

### 3.1 Sachverhalt

Bisher haben wir zwei Angriffswege betrachtet: den UWG-Verstoß nach § 7
und die deliktische Schiene des angeschriebenen Betriebs (§§ 823 Abs. 1,
1004 BGB analog). Das Düsseldorfer Urteil hat uns auf eine **dritte**
gestoßen: den **Rechtsbruchtatbestand § 3a UWG**, über den ein
DSGVO-Verstoß von **Mitbewerbern und Verbänden** verfolgt werden kann.
Das ist für uns die unangenehmste Variante, weil sie die Entlastung
aushebelt, die wir für die deliktische Schiene angenommen hatten.

**Unser Fall unterscheidet sich vom entschiedenen in einem Punkt, auf
den es hier ankommen könnte: Wir schreiben ausschließlich Unternehmer
an, keine Verbraucher.**

### 3.2 Konkrete Fragestellung

1. **Kann ein DSGVO-Verstoß bei einer reinen B2B-Werbeaussendung über
   § 3a UWG verfolgt werden?** Das Urteil qualifiziert Artt. 5 Abs. 1
   lit. a, 6 Abs. 1 Unterabs. 1 DSGVO als **Marktverhaltensregelungen**,
   die auch den Schutz der betroffenen Person „in ihrer Stellung als
   Marktteilnehmer" bezwecken (Rn. 141/142) — bindet das aber im selben
   Absatz an die Verbrauchereigenschaft zurück. **Trägt diese Brücke
   auch, wenn der Adressat Unternehmer ist?**
1a. **Dieselbe Frage für die ZWEITE Schiene, die dasselbe Urteil
   bejaht:** Rn. 136 lässt ausdrücklich offen, ob § 3a UWG oder § 3
   Abs. 2 UWG vorrangig ist, und bejaht **beide** — Rn. 137 den § 3a
   UWG, Rn. 147 den § 3 Abs. 2 UWG. Dessen Tatbestand nennt in Rn. 148
   allerdings selbst „geschäftliche Handlungen, **die sich an
   Verbraucher richten oder diese erreichen**". **Bleibt bei einer
   Aussendung, die ausschließlich Unternehmer erreicht, von der
   Doppelbegründung eine, keine oder beide Schienen übrig?** Uns fällt
   auf, dass die beiden Schienen in unterschiedliche Richtungen zeigen
   könnten: Die Adressatengrenze des § 3 Abs. 2 UWG steht in seinem
   Tatbestand, während die Sperre, die § 3a UWG überhaupt erst
   begründungsbedürftig macht (die UGPRL-Vollharmonisierung, Rn. 129),
   gerade nur den B2C-Bereich betrifft. **Wir legen das als Beobachtung
   vor, nicht als Ergebnis** — auch deshalb, weil die für uns
   günstigere Lesart hier die naheliegendere ist und wir ihr gerade
   deswegen misstrauen.
1b. **Die Spürbarkeit — für uns vermutlich die praktisch wichtigste
   Teilfrage, und wir haben sie bisher nirgends gestellt.** § 3a UWG
   verlangt zusätzlich, dass der Verstoß geeignet ist, Interessen
   **spürbar** zu beeinträchtigen (Rn. 143–146). Das Gericht bejaht das
   dort unter anderem deshalb, weil „eine **massenhaft verbreitete**
   Werbeaussendung betroffen ist" (Rn. 146) — und misst „millionenfach"
   an anderer Stelle ausdrücklich ab **1.000.000 Briefen** (Rn. 110).
   **Wir planen Wellen von wenigen hundert Adressen, regional
   begrenzt.** Ist die Spürbarkeitsschwelle bei dieser Größenordnung
   erreicht? Und ändert sich die Antwort, wenn wir über mehrere Wellen
   hinweg insgesamt einige tausend Betriebe anschreiben — kommt es auf
   die einzelne Aussendung an oder auf die Kampagne? *(Wir fragen das
   ausdrücklich nicht, um eine Schwelle zu unterschreiten, sondern weil
   wir die Größenordnung planen müssen und heute nicht wissen, ob sie
   rechtlich überhaupt eine Rolle spielt.)*
2. Wie wirkt die Grenze, die das LG in Rn. 129 aus der
   **Vollharmonisierung durch die UGPRL** ableitet, wenn die
   Geschäftspraxis **überhaupt keine Verbraucher erreicht**? Nach dem
   Wortlaut von Art. 3 Abs. 1 UGPRL gilt die Richtlinie für unlautere
   Geschäftspraktiken „zwischen Unternehmen und Verbrauchern".
   **Führt das dazu, dass § 3a UWG im B2B-Bereich leichter greift als im
   entschiedenen Fall — oder greift es aus anderen Gründen gar nicht?**
   Wir stellen die Frage bewusst offen: Beide Richtungen erscheinen uns
   vertretbar, und wir wollen nicht die uns genehme wählen.
3. Das LG löst die Rn.-129-Grenze in Rn. 130 über **Art. 3 Abs. 4
   UGPRL** auf und beruft sich dafür auf den letzten Satz des
   Erwägungsgrundes 14 der UGPRL. **Dieser letzte Satz betrifft nach
   seinem Wortlaut Art. 13 Abs. 3 der Richtlinie 2002/58/EG, also
   elektronische Kommunikation** (Beleg unten). Trägt die Begründung
   auch für die DSGVO und für Briefpost?
4. **Kostenfolge:** § 13 Abs. 4 Nr. 2 UWG schließt den
   Aufwendungsersatzanspruch für Anspruchsberechtigte nach § 8 Abs. 3
   Nr. 1 (Mitbewerber) aus bei „sonstigen Verstößen gegen die
   [DSGVO] und das Bundesdatenschutzgesetz durch Unternehmen …, sofern
   sie in der Regel weniger als 250 Mitarbeiter beschäftigen".
   **Greift dieser Ausschluss auch dann, wenn der DSGVO-Verstoß über
   § 3a UWG geltend gemacht wird** — also die Anspruchsgrundlage das UWG
   ist, die verletzte Vorschrift aber die DSGVO? Und wie verhält sich
   das zu § 13a Abs. 2 UWG, der tatbestandlich an „Verstöße nach § 13
   Absatz 4" anknüpft?
5. Praktisch: **Wer wird uns realistischerweise angreifen** — ein
   Mitbewerber, ein Wirtschaftsverband nach § 8 Abs. 3 Nr. 2, oder
   niemand von beiden? Und ändert sich Ihre Einschätzung, wenn die
   Aussendung ausschließlich B2B ist?

### 3.3 Quellenlage mit Fundstelle

**a) Aus dem Urteil** (Volltext selbst gelesen, Rn.-Blöcke am Stück):

| Rn. | Wortlaut (Auszug) |
|---|---|
| **127** | „Unter solchen Umständen kann die Lauterkeit einer datenschutzrechtliche Vorschriften verletzenden Geschäftspraxis vom Grundsatz her gemäß § 3a UWG oder gemäß § 3 Abs. 2 UWG beurteilt werden." |
| **128** | „Regelmäßig wird … anhand von § 3a UWG geprüft, ob ein geschäftliches Handeln, das gegen datenschutzrechtliche Vorschriften verstößt, unlauter ist" — mit Belegen auf BGH, Urteile v. 27.03.2025 – I ZR 186/17 „App-Zentrum III", I ZR 222/19 „Arzneimittelbestelldaten III", I ZR 223/19 „Arzneimittelbestelldaten II" |
| **129** | „Eine Anwendung von § 3a UWG … könnte insofern Bedenken begegnen, als die UGPRL zu einer vollständigen Harmonisierung des Lauterkeitsrechts geführt hat (vgl. Art. 4 UGPRL) **und die Frage der Unlauterkeit von Geschäftspraktiken im Geschäftsverkehr zwischen Unternehmen und Verbrauchern abschließend regelt ohne einen § 3a UWG entsprechenden Rechtsbruchtatbestand vorzusehen.** Vor diesem Hintergrund können Rechtsverstöße eine Unlauterkeit nach § 3a UWG **nur** begründen, wenn die verletzte Vorschrift - wie das etwa bei **allein das Verhältnis zwischen Mittbewerbern betreffenden Regelungen** der Fall ist - **außerhalb des Anwendungsbereiches der UGPRL** liegt … oder sie einen Bereich betrifft, der von der UGPRL - etwa gemäß deren Art. 3 Abs. 2 bis Abs. 10 - unberührt bleibt". Der Schlusssatz nennt als Beispiel des zweiten Falls die **Arzneimittelbestelldaten**-Entscheidungen, die „in die Bereichsausnahme des **Art. 3 Abs. 3 UGPRL** fielen" *(Schreibweise „Mittbewerbern" wie im Original)* |
| **130** | „In Bezug auf den von dem Kläger in diesem Rechtsstreit gerügten Verstoß kann auf Art. 3 Abs. 4 UGPRL zurückgegriffen werden. Datenschutzrechtliche Bestimmungen können, wie der letzte Satz von Erwägungsgrund 14 zur UGPRL zeigt, besondere Aspekte unlauterer Geschäftspraktiken regeln, und wären insoweit als gegenüber der UGPRL speziellere Regelungen vorrangig anwendbar, **was im Grundsatz die Beurteilung einer auch Verbraucher erreichenden Geschäftspraxis anhand von § 3a UWG ermöglicht**" (Hervorhebung von uns) |
| **134** | Der EuGH habe „die im deutschen Recht für **Mitbewerber des Verletzers** und Verbraucherschutzverbände vorgesehene Möglichkeit, datenschutzrechtliche Verstöße als unlauterere Geschäftspraktik … zu ahnden, gebilligt" (EuGH C-21/23 „ND/DR"/„Lindenapotheke" Rn. 73; C-319/20 „Meta Platforms Ireland" Rn. 79). **⚠️ Dieselbe Randnummer nimmt das zwei Sätze später wieder ein Stück zurück:** Im Fall „ND/DR" seien „zugleich die Voraussetzungen von **Art. 3 Abs. 3** der [UGPRL] erfüllt" gewesen, „was das in der Sache ‚Meta Platforms Ireland Limited' **nicht** der Fall. Zwar musste der Gerichtshof angesichts der ihm vorgelegten Fragen **nicht entscheiden, ob der deutsche Rechtsbruchtatbestand unter diesen Umständen angewandt werden kann. Immerhin hat er dies aber auch nicht ausgeschlossen.**" |
| **135** | „führt … keiner der beiden Wege dazu, dass im Sinne eines Automatismus jeder Verstoß gegen die DSGVO eine unlautere Handlung darstellt" |
| **136** | ⭐ **Die Weiche bleibt offen, beide Wege werden bejaht:** „Es kann offenbleiben, ob im Allgemeinen in erster Linie § 3a UWG als nach dem nationalen Recht speziellere Norm heranzuziehen ist, oder § 3 Abs. 2 UWG, der auf einer unionsrechtlichen Grundlage beruht. Bezogen auf die von dem Kläger mit seinem Antrag I angegriffenen Verstöße liegen **sowohl** die Voraussetzungen von § 3a UWG vor (dazu aa) **als auch** diejenigen von § 3 Abs. 2 UWG (dazu bb)." |
| **147** | „Die gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden geschäftlichen Handlungen sind **außerdem gemäß § 3 Abs. 2 UWG** unlauter." |
| **148** | ⭐ **Der Tatbestand der zweiten Schiene — mit seiner Adressatengrenze:** „Nach § 3 Abs. 2 UWG sind geschäftliche Handlungen, **die sich an Verbraucher richten oder diese erreichen**, unlauter, wenn sie nicht der unternehmerischen Sorgfalt entsprechen und dazu geeignet sind, das wirtschaftliche Verhalten des Verbrauchers wesentlich zu beeinflussen." *(Rn. 149 ergänzt: § 3 Abs. 2 UWG „dient der Umsetzung von Art. 5 Abs. 2 UGPRL in nationales Recht und ist daher richtlinienkonform auszulegen".)* |

**b) Normtexte** (eigene Abzüge, 14.08.2026):

- **Art. 3 Abs. 1 UGPRL** (Richtlinie 2005/29/EG, deutsche
  Sprachfassung, ABl. L 149/22 v. 11.06.2005; konsolidierte Fassung
  Stand 28.05.2022 gegengelesen): „Diese Richtlinie gilt für unlautere
  Geschäftspraktiken im Sinne des Artikels 5 zwischen Unternehmen und
  Verbrauchern vor, während und nach Abschluss eines auf ein Produkt
  bezogenen Handelsgeschäfts." *(Die konsolidierte Fassung trägt hier
  die Berichtigung „von Unternehmen gegenüber Verbrauchern".)*
- **Art. 3 Abs. 3 UGPRL** — die Bereichsausnahme, auf die Rn. 129 und
  Rn. 134 abstellen: „Diese Richtlinie lässt die Rechtsvorschriften der
  Gemeinschaft oder der Mitgliedstaaten in Bezug auf die Gesundheits-
  und Sicherheitsaspekte von Produkten unberührt."
- **Art. 3 Abs. 4 UGPRL** (in beiden Fassungen wortgleich): „Kollidieren
  die Bestimmungen dieser Richtlinie mit anderen Rechtsvorschriften der
  Gemeinschaft, die besondere Aspekte unlauterer Geschäftspraktiken
  regeln, so gehen die Letzteren vor und sind für diese besonderen
  Aspekte maßgebend."
- **Erwägungsgrund 14 UGPRL, letzter Satz** — der Satz, auf den sich
  Rn. 130 stützt: „Die vorliegende Richtlinie sollte insbesondere
  Artikel 13 Absatz 3 der Richtlinie 2002/58/EG des Europäischen
  Parlaments und des Rates vom 12. Juli 2002 über die Verarbeitung
  personenbezogener Daten und den Schutz der Privatsphäre in der
  elektronischen Kommunikation unberührt lassen." *(Am Objekt
  strukturell extrahiert: Textblock zwischen den Marken „(14)" und
  „(15)" der amtlichen Fassung.)*
- **§ 3a UWG** (Stand: zuletzt geändert durch Art. 6 G v. 12.05.2026):
  „Unlauter handelt, wer einer gesetzlichen Vorschrift zuwiderhandelt,
  die auch dazu bestimmt ist, im Interesse der Marktteilnehmer das
  Marktverhalten zu regeln, und der Verstoß geeignet ist, die Interessen
  von Verbrauchern, sonstigen Marktteilnehmern oder Mitbewerbern
  spürbar zu beeinträchtigen."
- **§ 13 Abs. 4 UWG:** „Der Anspruch auf Ersatz der erforderlichen
  Aufwendungen nach Absatz 3 ist **für Anspruchsberechtigte nach § 8
  Absatz 3 Nummer 1** ausgeschlossen bei 1. im elektronischen
  Geschäftsverkehr oder in digitalen Diensten … begangenen Verstößen
  gegen gesetzliche Informations- und Kennzeichnungspflichten oder
  2. sonstigen Verstößen gegen die Verordnung (EU) 2016/679 … und das
  Bundesdatenschutzgesetz durch Unternehmen sowie gewerblich tätige
  Vereine, sofern sie in der Regel weniger als 250 Mitarbeiter
  beschäftigen."
- **§ 8 Abs. 3 UWG** — anspruchsberechtigt sind Mitbewerber (Nr. 1),
  gelistete Wirtschaftsverbände (Nr. 2), qualifizierte
  Verbraucherverbände (Nr. 3), Kammern und Gewerkschaften (Nr. 4).

**c) Was die Aufsicht zu B2B sagt — und was nicht.** Wir haben die
DSK-Orientierungshilfe daraufhin durchsucht (Zählweg durchgehend
`grep -o -i "<muster>" <datei> | wc -l`):

| Suchmuster | Treffer |
|---|---:|
| `Geschäftskontakt` · `Ansprechpartner` · `GmbH` · `Handelsregister` · `Hotel` · `Kaltakquise` | je **0** |
| `B2B` | **3** |
| `Unternehmer` | 1 |
| Positivkontrollen im selben Lauf: `Direktwerbung` **26** · `Interessenabwägung` 11 · `ä` 224 | — |

*(Zur Zahl 26: Sie ist der case-insensitive Wert des deklarierten
Zählwegs — 21 Treffer in normaler Schreibweise, 5 in Versalien
(`DIREKTWERBUNG`) im Inhaltsverzeichnis. Wir führen sie ausdrücklich als
Kontrollpaar cs=21 / ci=26, weil alle übrigen Kontrollen dieser Tabelle
in beiden Kanälen dieselbe Zahl liefern und den Kanal deshalb nicht
prüfen können.)*

**Alle drei B2B-Treffer stehen im selben Abschnitt — und der betrifft
Telefonanrufe**, nicht Briefe: Ziff. 1.4.2 lit. b „Bei sonstigen
Marktteilnehmern (B2B)". Dort heißt es:

> „Bei Werbung mit einem Telefonanruf gegenüber einem sonstigen
> Marktteilnehmer (B2B) kommt es für die Interessenabwägung nach Art. 6
> Abs. 1 UAbs. 1 lit. f DS-GVO ebenso auf die wettbewerbsrechtliche
> Zulässigkeit gemäß § 7 Abs. 2 Nr. 2 UWG **und somit darauf an, dass
> von dessen zumindest mutmaßlicher Einwilligung ausgegangen werden
> kann. Im B2B-Bereich stehen deshalb bei einem Nutzen von
> Telefonnummern für Werbeanrufe nicht von vorneherein überwiegende
> schutzwürdige Interessen der telefonisch anzusprechenden
> Gewerbetreibenden nach Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO
> entgegen.**
>
> Eine bloße Sachbezogenheit (z. B. Werbung für Büroartikel, Telefon-
> und Stromanbieter oder auch die entgeltliche Vermittlung von
> Aufträgen) genügt jedoch nicht, um von einem Einverständnis des
> angerufenen Unternehmers auszugehen (vgl. BGH, Urteil vom 16.11.2006
> – I ZR 191/03). Vielmehr ist es jedenfalls notwendig, dass für den
> Anruf ein konkreter und aus dem Interessenbereich des Anzurufenden
> herzuleitender Grund vorliegt **(dies kann z. B. ein geschäftlicher
> Vorkontakt sein)**."

⚠️ **Der fett gesetzte Satz steht unter einer Bedingung, und die
Bedingung erfüllen wir nicht:** Er setzt die mutmaßliche Einwilligung
voraus, und der Folgeabsatz verlangt dafür einen konkreten Grund aus dem
Interessenbereich des Angesprochenen — als Beispiel nennt die Aufsicht
den geschäftlichen **Vorkontakt**. Zwischen uns und den Betrieben
besteht keiner (§ 1.3, lit. b).

**Wir ziehen daraus ausdrücklich keinen Schluss für den Briefkanal.**
Die Frage, ob der erste Satz eine übertragbare Grundhaltung der Aufsicht
zum B2B-Bereich ausdrückt oder eine reine Telefon-Aussage ist, gehört zu
den Punkten, bei denen wir Ihre Einschätzung brauchen.

### 3.4 Gegenansicht

- **Kläger im entschiedenen Verfahren war ein Verband** nach § 8 Abs. 3
  Nr. 3 UWG (Rn. 34: „Bei dem Kläger handelt es sich um einen Verband im
  Sinne von § 8 Abs. 3 Nr. 3 UWG"; Rn. 64: anspruchsberechtigt nach
  derselben Vorschrift). Die Aussage, es habe sich um **keinen
  Mitbewerber** gehandelt, steht so **nicht im Urteil** — sie ist eine
  Ableitung; wir kennzeichnen sie als solche (Zählweg: „kein
  Mitbewerber" = 0 Treffer, Wortstamm `Mitt?bewerber` = **9** — nämlich
  Mitbewerber 3 · Mitbewerberin 3 · Mitbewerbern 2 · **Mittbewerbern 1**,
  die Tippfehlerform aus Rn. 129; eine Suche nur nach „Mitbewerber"
  liefert 8 und übersieht sie. Positivkontrolle „Kläger" = 119). Die Mitbewerber-Aussage in Rn. 134
  stützt sich auf Rn. 134, nicht auf den Streitgegenstand — **und Rn. 134
  trägt sie nur eingeschränkt**: Das Gericht stellt dort selbst fest,
  der EuGH habe für die Konstellation **ohne** die Bereichsausnahme des
  Art. 3 Abs. 3 UGPRL „nicht entscheiden [müssen], ob der deutsche
  Rechtsbruchtatbestand unter diesen Umständen angewandt werden kann",
  und dies lediglich „auch nicht ausgeschlossen". Unser Fall —
  Briefwerbung, keine Gesundheits- oder Sicherheitsaspekte von
  Produkten — liegt außerhalb des Art. 3 Abs. 3 UGPRL.
  ⚠️ **Aber:** Dieselbe Werbung war Gegenstand zweier weiterer Verfahren
  derselben Kammer, die eine **Mitbewerberin** der Beklagten geführt hat
  (Rn. 44, Rn. 89). Der Mitbewerber-Angriff ist hier also real
  vorgekommen — nur nicht in diesem Verfahren.
- Rn. 135 stellt ausdrücklich klar, dass es **keinen Automatismus** gibt:
  Nicht jeder DSGVO-Verstoß ist eine unlautere Handlung; das
  Spürbarkeitskriterium ist eigenständig zu prüfen.
- Der entschiedene Fall ist **B2C**; Rn. 130 spricht ausdrücklich von
  einer „auch Verbraucher erreichenden Geschäftspraxis". **Ob und wie die
  Rn.-129-Grenze bei einer reinen B2B-Aussendung wirkt, ist im Urteil
  nicht entschieden** und von uns nicht geprüft. Wir haben den Punkt
  intern als „nicht abschließend erhoben" geführt und tun das weiter.
- Zur Kostenfolge haben wir **keine** Rechtsprechung erhoben. Die Frage,
  ob § 13 Abs. 4 Nr. 2 UWG einen über § 3a UWG verfolgten DSGVO-Verstoß
  erfasst, ist für uns eine offene Auslegungsfrage, keine erledigte.
- **Was das entschiedene Verfahren gekostet hat** (aus dem Urteil, zur
  Einordnung der Größenordnung — nicht als Prognose für unseren Fall):
  Streitwert **74.000 €** bei sechs Anträgen (Rn. 272); „Die Kosten des
  Rechtsstreits tragen der Kläger zu einem Fünftel und die Beklagte zu
  vier Fünfteln" (Tenor); zugesprochene Abmahnpauschale **243,51 €**
  (Tenor, Rn. 9 und Antrag VIII). Der
  Aufwendungsersatz war überhaupt nur zuzusprechen, weil das Gericht
  einen **Ausnahmefall** annahm: Verbände müssen typische Abmahnungen
  selbst aussprechen können (Rn. 266), hier seien die Fragen aber
  „**überdurchschnittlich schwierig**" gewesen (Rn. 267). ⚠️ **Der
  Folgesatz nennt den Grund und relativiert den Anker:** „Das ergibt
  sich schon daraus, dass **im Zeitpunkt der Abmahnung unklar war, ob
  Verbraucherschutzverbände nach Inkrafttreten der DSGVO befugt sind,
  Verstöße gegen sie zu verfolgen.**" Diese Unklarheit dürfte heute
  ausgeräumt sein. Vorläufige Vollstreckbarkeit nach **§ 709 ZPO**
  (Rn. 271).
- ⚠️ **Der eigentliche Kostenhebel steht nicht im Streitwert, sondern im
  Tenor:** „Für jeden Fall der Zuwiderhandlung wird der Beklagten ein
  **Ordnungsgeld bis zu € 250.000**, ersatzweise Ordnungshaft, oder
  Ordnungshaft bis zu sechs Monaten angedroht, wobei die Ordnungshaft an
  ihren **organschaftlichen Vertretern** zu vollziehen ist." Dazu
  Rn. 249: Ein unzulässiges Verhalten begründe eine tatsächliche
  Vermutung für die Wiederholung „**identischer und kerngleicher**"
  Verstöße. **Für uns heißt das: Nicht die erste Abmahnung ist das
  Risiko, sondern der zweite Verstoß nach einer Unterlassungserklärung
  bei einer Aussendung in Wellen.**

### 3.5 Entscheidungsalternativen

| Weg | Was er bedeutet |
|---|---|
| **A — unverändert weiter** | Die Bau-Pflichten (Art.-14-Information im Brief, Art.-21-Hinweis, Sperrdatei, Quellenprotokoll) erfüllen; das § 3a-Risiko als getragenes Restrisiko führen |
| **B — Zuschnitt ändern** | Nur Kapitalgesellschaften ohne Personennamen anschreiben, **in der Absicht**, für die Kontaktzeile außerhalb der DSGVO zu bleiben und damit auch dem § 3a-Anknüpfungspunkt den Boden zu entziehen. **Ob beides trägt, ist gerade Gegenstand von Frage 1 (Teilfrage 5) und dieser Frage.** Der Weg verkleinert die Zielgruppe erheblich, weil sie überwiegend inhabergeführt ist |
| **C — Vorsorge gegen die Kostenfolge** | Unabhängig von der Auslegung: Prüfroutine für eingehende Abmahnungen gegen § 13 Abs. 2 UWG, Einigungsstelle nach § 13a Abs. 5 UWG einplanen |

Wir bitten um Ihre Einschätzung des **realistischen Risikos** (nicht nur
der dogmatischen Lage) und um einen Hinweis, ob Sie eine der drei
Varianten für unvertretbar halten.

---

## 4. Frage 4 — Täglicher Lizenzserver-Ping einer Automatisierungssoftware in einer Architektur mit kundeneigener Instanz

*(intern: „Lizenzserver-Ping/Telemetrie", geparkter Posten in unserer
Projektquelle. **Das Kürzel „O-11" ist bei uns doppelt belegt** und wird
deshalb hier nicht als Bezeichner verwendet.)*

### 4.1 Sachverhalt

Unser Produkt setzt auf der Automatisierungssoftware **n8n** auf.
Anbieter ist nach dessen eigener Anbieterkennzeichnung die n8n GmbH,
Novalisstr. 10, 10115 Berlin, HRB 212509 B *(Selbstauskunft aus dem
Impressum; ein Registerauszug liegt uns nicht vor)*. Für die Auslieferung an
Kunden stehen zwei Architekturvarianten zur Wahl; eine davon — intern
„A3" — sieht vor, dass **der Kunde Eigentümer seiner eigenen
Serverumgebung ist und den Zugang hält**. In dieser Variante wäre nach
unserem Verständnis **der Kunde der datenschutzrechtlich
Verantwortliche** für die Instanz, und wir wären Dienstleister.

Der Hersteller beschreibt für lizenzpflichtige Ausbaustufen einen
**täglichen Ping an seinen Lizenzserver**:

> „To access Business or Enterprise features on your self-hosted
> instance, you receive a license key that must ping our license server
> daily to stay active. This ping includes data like the number of
> production executions, which helps us track usage. We also collect
> telemetry data by default, though you can choose to disable it."

⚠️ **Grenze dieses Belegs, die wir ausdrücklich offenlegen:** Der Satz
betrifft nach seinem Wortlaut **„Business or Enterprise features"**. Ob
auch der **kostenlose** Lizenzschlüssel der registrierten
Community-Edition täglich pingt, **ist in den uns vorliegenden Quellen
nicht belegt** — die Herstellerdokumentation zur registrierten
Community-Edition erwähnt keinen Ping. *(Zählweg: rekursive Suche mit
Wortgrenze `grep -r -o -i -E "(^|[^a-z])ping([^a-z]|$)"` über alle 62
Dateien unseres Herstellerquellen-Bestands — Treffer in genau drei
Dateien: der Preisseite in beiden Formaten, beide im zitierten Satz, und
einem Changelog-Eintrag ohne Lizenzbezug. Positivkontrolle im selben
Lauf: `license` trifft in 41 der 62 Dateien; Gegenprobe mit einem
erfundenen Begriff: 0. Ohne Wortgrenze liefert dieselbe Suche Treffer in
rund der Hälfte der Dateien — `prototyping`, `mapping`, `scoping`; der
Befund hängt also am Zählweg.)* Wir klären das technisch selbst beim Hersteller und liefern das
Ergebnis nach. **Für Ihre Antwort bitten wir, beide Fälle zu
unterscheiden.**

### 4.2 Konkrete Fragestellung

Wir fragen ausschließlich die **rechtliche** Seite; die technische
Klärung (ob, was und wohin genau gesendet wird) machen wir selbst.

1. Wenn der Kunde Verantwortlicher der Instanz ist und die Software
   täglich Nutzungsdaten an den Hersteller sendet: **Wie ist dieser
   Datenfluss datenschutzrechtlich einzuordnen** — Auftragsverarbeitung,
   eigene Verantwortlichkeit des Herstellers, oder gemeinsame
   Verantwortlichkeit? Und ändert sich das, wenn die übermittelten Daten
   (Zahl der Ausführungen, Instanzkennung) für sich genommen keinen
   Personenbezug aufweisen?
2. **Welche Pflichten treffen uns als denjenigen, der die Umgebung
   einrichtet und betreibt?** Insbesondere: Müssen wir den Kunden vor
   Inbetriebnahme über den Ping aufklären, und muss er ihn in seinem
   Verarbeitungsverzeichnis führen?
3. Wenn im Ping personenbezogene Daten enthalten sein können: **Braucht
   der Kunde einen Auftragsverarbeitungsvertrag mit dem
   Softwarehersteller**, oder ist das eine Übermittlung an einen eigenen
   Verantwortlichen mit eigener Rechtsgrundlage?
4. Ist die standardmäßig aktive, abschaltbare **Telemetrie** anders zu
   beurteilen als der Lizenz-Ping — und wären wir verpflichtet, sie bei
   der Einrichtung abzuschalten?
5. Verändert sich die Antwort, wenn wir statt der kundeneigenen die
   **betreibereigene** Architektur wählen, in der wir selbst
   Verantwortlicher für die Instanz sind?

### 4.3 Quellenlage mit Fundstelle

| Quelle | Aussage | Belegstufe |
|---|---|---|
| Herstellerseite „Pricing", Abschnitt „How does n8n monitor my usage on a self-hosted instance?" | der oben zitierte Ping-Satz | **Anbieter-Selbstauskunft**, Volltext im eigenen Bestand |
| Herstellerdokumentation „Compare editions" | beschreibt die registrierte Community-Edition und den kostenlosen Lizenzschlüssel; **kein Ping-Hinweis** | Anbieter-Selbstauskunft; **Negativbefund über EINE Quelle**, keine Aussage über das Verhalten der Software |
| Impressum des Herstellers | n8n GmbH, Berlin | Selbstauskunft |

⚠️ **Was wir NICHT wissen und nicht behaupten:** wohin der Ping
technisch geht (der Sitz des Herstellers in Berlin sagt nichts über den
Standort des Lizenzservers), welche Felder er genau enthält, und ob die
Telemetrie personenbezogene Daten umfasst. Auch die Angabe, die
Telemetrie sei **abschaltbar**, stützt sich allein auf den zitierten
Satz der Preisseite; die uns vorliegende Auszugsfassung der
Konfigurationsdokumentation enthält dazu **keine Angabe** (eigener
Suchlauf über `diagnostics` und `telemetr`: 0 Treffer bei greifender
Positivkontrolle — 57 Treffer für Konfigurationsvariablen desselben
Namensraums). **Diese Punkte erheben wir selbst und reichen sie nach.**

### 4.4 Gegenansicht

- Man kann die Auffassung vertreten, der Vorgang sei
  datenschutzrechtlich unerheblich, weil ein Zähler von
  Workflow-Ausführungen und eine Instanzkennung keine personenbezogenen
  Daten sind. **Wir haben das nicht geprüft** und wollen es nicht
  voraussetzen, weil in der Instanz Gästedaten verarbeitet werden und
  Kennungen zusammen mit Vertragsdaten des Herstellers zuordenbar sein
  können.
- Ebenso vertretbar erscheint uns, den Punkt als reine
  Betriebsdokumentationsfrage zu behandeln (Eintrag im
  Verarbeitungsverzeichnis, fertig). **Auch das setzen wir nicht
  voraus.**

### 4.5 Entscheidungsalternativen

| Weg | Was er bedeutet |
|---|---|
| **A — kundeneigene Architektur beibehalten** | Kunde ist Eigentümer und Verantwortlicher; wir dokumentieren den Ping in der Betriebsunterlage und im Onboarding |
| **B — Architektur wechseln** | Wir betreiben die Instanzen und sind selbst Verantwortlicher; der Kunde wird Auftraggeber |
| **C — lizenzfreie Ausbaustufe** | Verzicht auf lizenzpflichtige Funktionen, damit die Ping-Frage in der belegten Form nicht entsteht — **abhängig davon, ob auch der kostenlose Schlüssel pingt** (offen, s. 4.1) |

⚠️ **Nicht Teil dieser Frage:** ob die Lizenzbedingungen des Herstellers
den Einsatz der kostenlosen Edition als Backend eines entgeltlichen
Produkts erlauben. Das ist eine **Lizenzfrage an den Hersteller**, die
wir dort schriftlich klären; sie steht hier nur, damit Sie sie nicht
versehentlich mitbeantworten.

---

## 4a. ⚠️ Zwei weitere Kandidaten für dieselbe Beauftragung — Entscheidung des Users vor dem Versand

**Dieser Abschnitt ist eine Vorlage, keine Festlegung.** Er steht hier,
weil unser eigener Bestand beide Punkte für **denselben** anwaltlichen
Rat vorsieht und ein zweiter Termin sonst unvermeidlich wäre. Ob sie
mitgehen, entscheidet der User; wenn nicht, wird der Abschnitt vor dem
Versand ersatzlos gestrichen. **Beide sind bewusst kurz gehalten** — sie
sollen die vier Hauptfragen nicht verdrängen.

### Kandidat A — Speicherung eines fremden Impressums-Werbewiderspruchs

> 🔖 **Interner ID-Zeiger (nicht Teil des Versandtexts — steht im
> Statusblock-Bereich mit, s. dort):** Dieser Kandidat **ist** die
> Rechtsfrage `ANL-3` aus `akquise/sperrdatei-struktur.md` (dort als
> offener Posten **`PS-1`** in § 8 geführt) und zugleich der
> Nebenbefund **R15E-N-4** der Runde R15. Der Zeiger ist am
> 17.08.2026 (R16-A) gesetzt worden, weil ein Grep auf die Kürzel
> `ANL-3` / `PS-1` / `R15E-N-4` dieses Briefing vorher **nicht** traf
> — die Frage stand hier vollständig, nur unter anderem Namen. Genau
> daraus entstand in R15-E die Fehlmeldung „im Briefing nicht
> enthalten". **Es ist ein Zeiger, kein zweiter Eintrag** — die Frage
> wird hier nicht ein zweites Mal gestellt.

Die Aufsicht empfiehlt Websitebetreibern, „vorsorglich
einen Werbewiderspruch in sein Impressum" aufzunehmen (DSK-OH Ziff. 4.2,
letzter Satz). Wir prüfen jedes Ziel-Impressum darauf und steuern solche
Betriebe aus. **Frage: Dürfen wir das Ergebnis dieser Prüfung
speichern** — also einen im fremden Impressum vorgefundenen
Werbewiderspruch in unserer eigenen Sperrdatei führen, damit er nicht
bei jeder Welle neu geprüft werden muss und nicht verlorengeht? Uns
gegenüber ist nichts erklärt worden; es gibt keinen Erklärenden, dem wir
antworten könnten.

Bis zur Klärung führen wir solche Einträge in der **engeren**
Handhabung: **ohne Personennamen** und ohne den Grund des Widerspruchs;
geführt werden Betriebsname, Postanschrift, Aufnahme-Anlass,
Eingangsweg, Eingangs- und Eintragsdatum sowie eine Beleg-Referenz.
Unser Bestand vermerkt dazu: „Ob der Eintrag
eines fremden Impressumsvermerks in einen eigenen Sperrbestand
seinerseits eine zulässige Verarbeitung ist, ist **nicht erhoben**."

**Die Aufsicht sagt zu Werbesperrdateien dies** (Ziff. 5.1): Sie können
„aufgrund von Art. 21 Abs. 3, Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO
i. V. m. Art. 17 Abs. 3 lit. b DS-GVO … zulässig sein", aber „nur
rechtmäßig …, wenn die zu verhindernde Verarbeitung zu Werbezwecken auf
Art. 6 Abs. 1 UAbs. 1 lit. f DS-GVO beruht". Und weiter: „**Die
betroffenen Personen müssen im Zusammenhang mit der Unterrichtung
(Art. 12 Abs. 3 DS-GVO) über die Beachtung ihres Werbewiderspruchs auch
über den Sinn und Zweck der Aufnahme ihrer Daten in eine Sperrdatei
unterrichtet werden.**" **Diese Unterrichtung setzt einen Adressaten
voraus — im Impressums-Fall hat uns gegenüber niemand etwas erklärt.
Wie ist die Pflicht dann zu erfüllen?**

### Kandidat B — Telefonischer Nachfass auf den eigenen Werbebrief

Nach unserer Vorprüfung ist die Telefon-Kaltakquise gegenüber
Unternehmern nur zulässig, wenn eine mutmaßliche Einwilligung nach § 7
Abs. 2 Nr. 1 UWG angenommen werden kann; bloße Branchenpassung genügt
dafür nicht, ein persönlicher Vorkontakt trägt. **Ungeklärt ist die
Konstellation dazwischen: Ist ein von uns selbst versandter Werbebrief
ein solcher Vorkontakt, der einen Nachfass-Anruf trägt?** Unsere eigene
Kanal-Rechtsmatrix behandelt diese Konstellation nicht und schließt
zugleich jeden Rückschluss von einem zulässigen Kanal auf einen anderen
aus. Der Punkt ist bei uns als offener Befund geführt; er betrifft den
Kanal, den unsere Planung auf Rang 1 setzt.

---

## 5. Was wir ausdrücklich NICHT fragen

Damit der Auftragszuschnitt klar ist:

- **Keine Lizenz- oder Vertragsauslegung gegenüber dem
  Softwarehersteller** (s. 4.5) — das klären wir dort.
- **Keine Prüfung unserer Vertragsmuster** und keine Durchsicht der
  Referenzvereinbarung mit den Pilotbetrieben. *(Intern ist dafür ein
  eigener offener Punkt geführt; ob er in denselben Auftrag soll,
  entscheidet die Firmen-Ebene, nicht dieses Briefing.)*
- **Keine Steuerfragen** und keine Fragen zur Rechtsform.
- **Keine Markenrecherche**; der Rebrand läuft in einem eigenen Strang.
- **Keine Bewertung unserer Texte** (Anschreiben, Website) — die liegen
  noch nicht vor.

---

## 6. Was wir Ihnen mitliefern können

Auf Wunsch, in dieser Reihenfolge sinnvoll:

1. **Kanal-Rechtsmatrix** — Einstufung von sieben Akquisekanälen nach
   § 7 UWG und DSGVO, mit Belegstufen je Aussage.
2. **Interessenabwägung nach Art. 6 Abs. 1 lit. f** für die geplante
   Zielkundenliste, nach Fallgruppen getrennt, mit ausdrücklich
   gesperrten Entlastungsargumenten.
3. **Listenbau-Regelwerk** mit Feldregister, Quellenprotokoll,
   Sperrdatei-Konzept und Fristenlogik.
4. Die **Rohbelege**, an denen wir gearbeitet haben: NRWE-Volltext des
   LG-Urteils, EuGH-Volltext C-621/22, DSGVO-Volltext,
   DSK-Orientierungshilfe Februar 2022, UWG- und UGPRL-Abzüge — je mit
   Abrufweg, Datum und Prüfsumme.

**Bitte sagen Sie uns, was Sie brauchen, statt alles zu lesen.** Wir
liefern gezielt zu.

---

## 7. Belegstufen, Zählwege und Grenzen dieses Briefings

**Grundsatz:** Jede Zahl in diesem Dokument trägt ihren Zählweg; jeder
Randnummern-Anker ist am Rohbeleg gelesen, und zwar der Absatz davor und
danach mit. Ein Grep auf ein Zitat bestätigt das Zitat und verbirgt
seinen Kontext.

**Einheitlicher Zählweg aller Trefferzahlen:**
`grep -o "<muster>" <datei> | wc -l` — gezählt werden **Fundstellen,
nicht Zeilen** (`grep -c` wäre falsch, weil es eine Zeile mit zwei
Treffern einmal zählt). Wo case-insensitiv gemessen wurde, steht es an
der Zahl. Teilworttreffer sind, wo sie vorkommen können, aufgeschlüsselt.

### 7.1 Verwendete Rohbelege

| Kurzname | Quelle | Abruf | Prüfstand |
|---|---|---|---|
| LG-Volltext | LG Düsseldorf 38 O 243/23, amtliche Rechtsprechungsdatenbank NRWE | 12.08.2026, HTTP 200, 168.616 Zeichen Text | in dieser Runde erneut gelesen |
| EuGH-Volltext | EuGH, Urt. v. 04.10.2024 – C-621/22, englische Sprachfassung (die deutsche ist über den amtlichen Kanal nicht abrufbar), dazu die amtliche deutsche Amtsblatt-Mitteilung mit dem Tenor im Wortlaut | 12.08.2026, HTTP 200 | in dieser Runde erneut gelesen |
| DSGVO | Verordnung (EU) 2016/679, amtliche deutsche Sprachfassung | 12.08.2026, HTTP 200 | in dieser Runde erneut gelesen |
| DSK-Orientierungshilfe | Datenschutzkonferenz, Direktwerbung, Stand Februar 2022; über zwei unabhängige Behörden-Domains belegt, Textextrakte md5-identisch | 12.08.2026, HTTP 200 | unverändert |
| UWG | gesetze-im-internet.de, Fassung „zuletzt geändert durch Art. 6 G v. 12.05.2026" | **14.08.2026**, HTTP 200 | **in dieser Runde neu beschafft** |
| UGPRL | Richtlinie 2005/29/EG, Ursprungsfassung ABl. L 149/22 und konsolidierte Fassung Stand 28.05.2022 | **14.08.2026**, HTTP 200 | **in dieser Runde neu beschafft** |

*(Die Rohbelege liegen in einer git-ignorierten Ablage mit
Beschaffungsprotokoll, Prüfsummen und Positivkontrollen.)*

### 7.2 Was wir NICHT erhoben haben

- **juris und beck-online wurden nicht durchsucht.** Dort liegt der
  Großteil der OLG- und LG-Rechtsprechung. Alle unsere Negativbefunde
  („keine Entscheidung gefunden, die …") können dort kippen.
- **Die Originale von OLG Stuttgart 2 U 63/22 und der beiden
  Eckhardt-Aufsätze liegen uns nicht vor** (Bezahlschranken); sie sind
  nur in der Wiedergabe des LG-Urteils gelesen.
- **Die Rechtskraft des LG-Urteils ist ungeklärt**, nicht verneint
  (Messung s. 2.3).
- **Die Inhalte der vom LG zitierten EuGH- und BGH-Entscheidungen haben
  wir nicht am Original geprüft** — nur ihre Wiedergabe im LG-Volltext.
  Vollständig sind das: **C-21/23** · **C-319/20** · **I ZR 186/17** ·
  **I ZR 222/19** · **I ZR 223/19** · **OLG Düsseldorf 20 W 37/24**
  (Rn. 111, die abweichende Auffassung des Berufungsgerichts) · **BGH
  I ZR 167/09 „Kreditkartenübersendung"** (Rn. 83, trägt die Bedingung
  „sofort und unmissverständlich erkennbar") · **EuGH C-394/23
  „Mousse"** (Rn. 82, trägt das Widerspruchs-Argument) · **Ziebarth,
  VuR 2024, 379** (Rn. 79) · **BGH I ZR 191/03** (aus der
  Orientierungshilfe, Ziff. 1.4.2 b).
- **Zur Kostenfolge des § 13 Abs. 4 Nr. 2 UWG bei § 3a-Verfolgung haben
  wir keine Rechtsprechung erhoben.**
- **Zum technischen Verhalten des Lizenz-Pings** liegen uns nur
  Herstellerangaben vor, keine eigene Messung.
- **Ob sich die für uns zuständige Aufsichtsbehörde je geäußert hat, ist
  nicht erhoben.** Träger der zitierten Gegenposition ist die
  Datenschutzkonferenz als gemeinsames Gremium, nicht die im Einzelfall
  zuständige Behörde — und welche das ist, steht erst mit dem Sitz des
  Verantwortlichen fest, der von der offenen Firmierung abhängt
  (Schleswig-Holstein: ULD Kiel; Hamburg: HmbBfDI). Das macht das Risiko
  nicht kleiner; es benennt nur, wessen Auffassung belegt ist.
- **Wir haben die Anlagen des Verfahrens nicht** (Werbeschreiben,
  Auftragsformular, Auskunftskorrespondenz). Alle Aussagen über die
  konkrete Briefgestaltung sind im Urteil referiert.

### 7.3 Eine Fehlerklasse, die wir bei uns selbst gefunden haben

Wir legen das offen, weil es die Belastbarkeit unserer Unterlagen
betrifft: Der in Frage 2 behandelte Kernsatz war über Wochen falsch, und
zwar **zugunsten unserer eigenen Lesart**. Aus einer korrekt gemessenen
Null („§ 7 UWG kommt im Urteil nicht vor") war eine
Reichweitenbehauptung geworden („gestützt ausschließlich auf die
DSGVO"). Gefunden hat ihn eine interne Gegenprüfung, nicht der
Verfasser. Wir haben daraufhin sämtliche Zahlen dieses Briefings neu am
Rohbeleg gemessen. *(Das gilt auch für die am 17.08.2026 ergänzten
Stellen: Sie sind gegen einen aus der amtlichen Auszeichnung generisch
erzeugten Randnummern-Auszug geprüft — 273 Absätze, lückenlos, zwei
unabhängige Strukturmerkmale mit gleichem Ergebnis; alle neu gesetzten
Zitate wurden getrennt auf **Wortlaut** und auf die behauptete
**Randnummer** geprüft. Dabei fiel eines durch: Es endete auf einem
Doppelpunkt, den das Original an dieser Stelle nicht trägt. Es ist
korrigiert.)* **Sollte Ihnen eine weitere Stelle dieser Art auffallen,
ist uns der Hinweis willkommen.**

---

## 8. Was wir von Ihnen brauchen — und in welcher Reihenfolge

| Priorität | Frage | Warum diese Reihenfolge |
|---|---|---|
| **1** | Frage 1 (Zweckänderung Art. 6 Abs. 4) | Sperrt den **ersten Datensatz** |
| **2** | Frage 2 (Reichweite des LG-Urteils) | Bestimmt, was in allen unseren Betriebsunterlagen steht |
| **3** | Frage 3 (§ 3a UWG **und § 3 Abs. 2 UWG** bei B2B, Kostenfolge) | Bestimmt das Risikoprofil, nicht den Start |
| **4** | Frage 4 (Lizenzserver-Ping) | Sperrt kein Datum, sondern das erste Angebot in einer bestimmten Architektur; hier fehlt uns außerdem noch eine technische Angabe |
| *(offen)* | Abschnitt 4a, Kandidaten A und B | **Nur falls sie im Auftrag bleiben** — die Entscheidung darüber fällt vor dem Versand |

**Form der Antwort:** Uns hilft eine schriftliche Einschätzung mehr als
ein Telefonat, weil wir die Aussagen in Betriebsunterlagen übernehmen
und dort die Quelle angeben. Wo Sie ein Restrisiko sehen, bitten wir um
die Angabe, **wie groß** Sie es halten und **wovon** es abhängt.

**Zum Angebot:** Bitte nennen Sie uns Ihren Kostenrahmen für die vier
Fragen, gern getrennt nach Frage, damit wir bei Bedarf zuschneiden
können.

Mit freundlichen Grüßen

`[NAME]`
`[FIRMIERUNG — offen, F-7]`
`[ANSCHRIFT]`
