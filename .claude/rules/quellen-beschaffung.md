# Baustein: Externe Quellen beschaffen und auswerten

*(Aktivieren, wenn das Projekt externe Quellen liest — Gesetze,
Datenblätter, Register, Angebote, PDFs. Herkunft: heyPensio.)*

- **⚠️ Der WebFetch-Zusammenfasser halluziniert bei Datenblättern** —
  technische Werte NIE zusammenfassen lassen; die gefährlichste Form ist
  die erfundene Zahl, die einen bestehenden Verdacht BESTÄTIGT.
  Datenblätter, Angebote, Spec-Seiten selbst lesen.
- **PDFs:** Das Read-Tool scheitert an PDFs außerhalb des Viewers. Weg:
  Node + `pdf-parse` v2 als KLASSE (`new PDFParse({data: buffer})` →
  `await parser.getText()`); `getScreenshot()` rendert Seiten als PNG —
  bei Zeichnungen/Maßangaben Pflicht (Text liefert Zahlen ohne Bezug).
  **Auch bei GRAFIK-Wertereihen Pflicht:** Die Textextraktion einer
  Balken-/Liniengrafik liefert nackte Zahlenfolgen — welche Reihe
  welche ist, ist aus der Textreihenfolge NIE belastbar; Zuordnung nur
  per Sichtprüfung am gerenderten Bild. (Herkunft: MKT R2.)
  Seitenzahlen nur über pdf-parse (`total`) — ein Marker-Grep
  (`/Type/Page`) liefert auch bei korrekten Dateien falsche Werte.
  (Herkunft: MKT R3.)
- **⚠️ KI-Format-Konvertierung (PDF→Markdown u. ä.) ist Lese-Hilfe,
  keine byte-genaue Quelle** — das Modell „repariert" beim Konvertieren
  unauffällig: belegt ist ein Platzhalter („Fehlen noch"), der als
  ausformulierter Gliederungspunkt erfunden wurde. Für Arbeits-Kontext
  gut; für Kanon-Texte, Belege und Knowledge-Bases nur mit
  Satz-für-Satz-Quell-Abgleich (dieselbe Regel wie im
  freigabe-vorlagen-Baustein: beim Abgleich gewinnt die QUELLE).
  Grenzen zusätzlich: Scans, Tabellen, Aussagen in der Auszeichnung.
  (Herkunft: Weiterbildung 10.08.2026, am Beispiel belegt.)
- **Amtliche Statistik als XLSX/CSV ziehen, nicht als PDF** — die
  Roh-Tabellenblätter sind maschinenlesbar sauber; das
  Übersichts-/Inhaltsblatt der Datei beantwortet „Gibt es die
  Schneidung überhaupt?" vor jeder teuren Suche. Übernommene
  Zahlentabellen mit **Summenproben** selbst verifizieren (Teilzeilen
  gegen Insgesamt-Zeile) — deckt Übertragungsfehler sofort auf und
  gibt jedem Prüfer einen harten Anker; eine Kreuzprobe ZWISCHEN den
  Ebenen fängt auch echte Quellen-Datenfehler, die jede Ebene für sich
  verbirgt. (Herkunft: MKT R2; Kreuzproben-Fang MKT R3.) **Der
  TABELLENTITEL ist keine Scope-Quelle** — den Zeilen-Scope an der
  Merkmals-/Fußnoten-Erläuterung belegen; ein Titel „Jahressumme" kann
  Stichtagswerte tragen. (Herkunft: MKT R3.)
- **Vor einem „Quelle enthält X nicht" die Ausgaben-Logik der Reihe
  prüfen:** Stichtags-/Sondertabellen erscheinen oft nur in bestimmten
  Ausgaben (z. B. Jahres-Stichtag nur im Juli-Bericht) — die neueste
  Ausgabe ist nicht die datenreichste. (Herkunft: MKT R2.)
- **Wörterbuch-Negative (Wiktionary u. ä.) sind case-sensitiv** — ein
  Klein-404 ist für deutsche Substantive ein falsches Negativ:
  Groß-/Klein-DOPPELLAUF Pflicht, und die Positivkontrolle spiegelt die
  Nulltreffer-Mechanik des jeweiligen Laufs (kleines unauffälliges Wort
  für den Klein-Kanal, Substantiv für den Groß-Kanal).
  (Herkunft: MKT R4.)
- **Ein TIMEOUT ist kein Negativbefund** — Primärquellen, die in einen
  Rechtstext eingehen: Abruf wiederholen oder in den Hintergrund, nie auf
  Zweitquellen ausweichen, solange die Quelle nur langsam ist.
- **Web-Such-Negative (Herkunft MKT R5; Punkte 6–7 MKT R6):** (1) Ein
  Nulltreffer aus
  einer LIMITIERTEN/abgeschnittenen Ausgabe (head_limit, gekürzte
  Trefferliste) ist kein Negativ — er sieht wie ein Quellenfehler aus;
  Suchläufe für Zitatprüfungen so eng fassen, dass die Ausgabe
  vollständig ist. (2) **Vor Web-Negativen das Redirect-Ziel prüfen:**
  Ein Wildcard-301 macht mit `curl -L` JEDE Unterseite byte-identisch
  zur Startseite — „Inhalt vorhanden, Begriff nicht gefunden" ist dann
  ein Artefakt; die Gegenprobe (Kontrollpfad-Abruf je Domain, Sekunden)
  gehört an den ANFANG des Laufs, nicht ans Ende. (3) **Das Suchmuster
  ist Teil des Negativs:** Enge
  Muster (`self-check-in|online-check-in`) übersehen vorhandene
  Varianten („Pre-Check-in") — Negativ-Behauptungen brauchen den
  bewusst breiten Oberbegriff. (4) **Anbietergenerierte
  KI-Zusammenfassungen** (`llms.txt`-/`.md`-Fassungen der eigenen
  Seiten, teils mit Kürzungsvermerk) sind eine Stufe UNTER der
  Selbstauskunft — Navigation ja, Zitatquelle nie. (5) **Fundstelle und
  Geltungsstand sind zwei Prüfungen:** Eine verlinkte
  Richtlinien-Fassung kann veraltet sein und den eigenen Ausschluss
  vortäuschen — die geltende Fassung an der ausgebenden Stelle prüfen.
  (6) **Eine geratene URL/Pfadvermutung ist kein Negativbefund** —
  DNS-Fehler und 404 unter selbst konstruierten Pfaden sind Aussagen
  über die eigene Vermutung, nicht über die Seite; Pfade aus den
  `href`-Werten der bereits geladenen Seite nehmen. (7) **In
  entmarkuptem Text stehen Phrasen oft ZEILENGETRENNT** (Span-/
  Div-Grenzen werden Zeilenumbrüche: „42" / „Hotels in" / „18" /
  „Städten") — ein Phrasen-Grep ohne zeilenübergreifende Variante ist
  kein Negativ; auch Kontextfenster-Muster (`.{40}X.{40}`) verfehlen
  kurze Zeilen, und Teilwort-Treffer („ust" in „Lust") sind vor der
  Wertung am Kontext aufzulösen.
- **Wo eine Aussage in der AUSZEICHNUNG steckt und nicht im Text,
  prüft eine Textprüfung sie nicht** — Ja/Nein-Matrizen
  (`class="yes"/"no"`), Zahlen in benannten Spans
  (`<span class="hotel-count">42</span>`) und Link-Ziele verschwinden
  beim Entmarkupen spurlos; zweimal in einem Lauf ein falsches Negativ
  erzeugt. Bei Matrix-/Vergleichs- und Zahlenseiten das Roh-HTML
  MITARCHIVIEREN und die Extraktion daran gegenlesen; bei gegliederten
  Quellen die Rubriken GENERISCH über das Strukturmerkmal extrahieren
  (CSS-Klasse, Überschriften-Ebene), nie über eine vorher notierte
  Namensliste. (Herkunft: MKT R6.)
- **⭐ Eigener Quellen-Anker VOR dem Fan-out: erst die Volltexte
  beschaffen, dann die Agenten laufen lassen.** Wer die Primärquellen
  selbst gesichert hat, kann die Fundstellen der Agenten hinterher
  MECHANISCH prüfen statt sie einzeln nachzulesen — in MKT R7 ließen
  sich so 64 von 65 Fundstellen per Skript gegen 29 eigene Volltexte
  bestätigen. Das ist die billigste Absicherung gegen driftende
  Fundstellen. ⚠️ Der mechanische Abgleich prüft nur die
  Fundstellen-Achse: Alle inhaltlichen Zusatzbefunde kamen erst aus dem
  LESEN — Aussage und Fundstelle bleiben zwei Prüfungen.
  (Herkunft: MKT R7.) **Erweiterung MKT R9: Der eigene Anker macht auch
  die NEGATIVBEFUNDE der Agenten prüfbar** — Nulllisten und
  Positivkontrollen lassen sich unabhängig reproduzieren, ohne die
  Quellen erneut zu beschaffen.
- **⭐ Fehlalarme eines Zitat-/Textabgleichs sind fast alle
  NORMALISIERUNGSFEHLER** (Herkunft: MKT R9, gemessen: von 37 gemeldeten
  „Abweichungen" waren **33** Werkzeugfehler in fünf Klassen, nur 4
  echt): Blockquote-/Zeilenpräfixe mitten im Zitat (die Normalisierung
  griff nur am Zeilenanfang) · PDF-Silbentrennung · PDF-Seitenmarken
  mitten im Satz · Umbruch an Bindestrich/Schrägstrich · deutsche
  Zitat-im-Zitat-Schachtelung. Zwei Folgen: **(1) Jede
  Normalisierungsstufe muss SYMMETRISCH auf beide Seiten wirken, und die
  REIHENFOLGE der Stufen zählt** — Silbentrennung nur auf der Quellseite
  aufzuheben machte aus „Telefon- und Stromanbieter" ein „Telefonund"
  und verlor ein zuvor gefundenes Zitat; eine Dehyphenierung vor der
  nächsten Stufe entzieht dieser die Bruchstelle. **(2) Eine mechanische
  Prüfung, die zu viel meldet, wird abgeschaltet** — die
  Fehlalarm-Analyse gehört in den Werkzeugbau, nicht in die Nacharbeit.
- **⭐ Der DATEINAME einer Quelle ist keine Standangabe — und zwei
  Bezugsquellen sind nicht zwei Lesewege** (Herkunft: MKT R9): Eine
  Behörden-URL trug ein Datum von 2018 im Dateinamen und lieferte
  inhaltlich die Fassung von 2022 (beide Textextrakte md5-identisch).
  Umgekehrt gilt: Ein „Zweitkanal", der dieselbe Datei liefert, stützt
  die Fassungsangabe, aber **keinen** Negativbefund über den Text — dafür
  braucht es eine unabhängige Quelle, nicht einen zweiten Abrufweg.
- **⭐ Ein Muster über AUSZEICHNUNG ist eine Annahme über deren FORM —
  und ein Prüfmuster, das nicht treffen KANN, sieht im Log wie ein
  sauberes Negativ aus** (Herkunft: MKT R7, drei unabhängige Belege):
  (1) **Attributreihenfolge:** Ein Anker-Muster erwartete
  `rel="canonical"` vor `href`; HTML schreibt keine Reihenfolge vor — 24
  von 65 Dateien trugen die umgekehrte, das Muster meldete 35 ankerlose
  statt 11 und ließ zwei Einträge ganz aus der Ergebnistabelle fallen.
  (2) **`\b` im JS-String ist ein Backspace-Zeichen, nicht die
  Wortgrenze** — der Selbsttest meldete „bestanden" für ein Muster, das
  nie treffen konnte. (3) **NBSP (U+00A0) in amtlichen Texten** lässt
  Phrasensuchen ins Leere laufen („Art. 95", „1 000 Euro"). Bei
  Auszeichnungs-Parsing ist „nicht gefunden" fast immer das Muster.
- **Randnummern aus PDFs nie selbst auszählen** — in der Textextraktion
  steht die Randnummer HINTER ihrem Absatz; zwei Zählungen gingen
  nacheinander plausibel daneben. Belastbar ist erst ein EXTERNER Anker
  (die Zitierweise derselben Stelle in einem anderen Dokument).
  **Und „letzter Header davor" taugt nicht zur Abschnitts-Zuordnung in
  Normtexten** — Querverweise sehen aus wie Überschriften; belastbar ist
  der Kontrast der Absatz-Einleitungen. (Herkunft: MKT R7.)
- **⭐ Bestandslisten-Erhebung (Herkunft: MKT R8, je am Objekt belegt):**
  (1) **Eine Domain-Zählung ist keine Firmenzählung** — die
  Redirect-Gegenprobe findet Host-Redirects, aber keine
  Konzern-/Produktverbünde ohne Redirect (eine von zwei Dubletten fiel
  nur beim Titel-Lesen auf); nach der Domain-Frage IMMER die
  Firmen-Frage stellen und den Zählschlüssel (Eintrag ≠ Domain ≠ Firma)
  an jede Zahl schreiben. (2) **Ein Fehlercode ist kein Sachbefund** —
  jede nicht-200-Antwort braucht einen zweiten Versuch (Root-Domain,
  anderer Pfad), bevor die Zeile gewertet wird: Ein 404 auf der
  hinterlegten URL hätte sonst einen Kernbefund gekostet. (3) **Eine
  Namensliste altert lautlos** — das Artikeldatum der Quelle ist Teil
  des Befunds; Re-Verifikation läuft über die DOMAIN, nie über eine
  erneute Namenssuche (zwei Verbünde einer 2021er-Liste waren 2026
  fusioniert bzw. umbenannt — unter dem Altnamen unauffindbar).
  (4) **Ein BEZEICHNER ist kein Aussagetext:** Die Auflösung einer
  Abkürzung/Domain zu einem Namen ist eine EIGENE Vermutung, keine
  Quellenaussage (eine Domain wurde zu einem plausiblen Verbandsnamen
  „aufgelöst", der nirgends in der Quelle stand — selbst gefangen per
  Rohbeleg-Gegenprobe); JS-Variablen und CSS-Klassen (`sbb…`) sind
  Namensräume und taugen als Indiz, nie als Trägerbefund. Und: Trägt
  ein vorgegebener Dateiname einen Anspruch, den der Inhalt nicht
  erfüllt („vollerhebung" bei Teilerhebung), gehört der Widerspruch
  als Warnkasten AN DEN ANFANG der Datei — an die Stelle, wo der
  Leser ankommt.
- **Für Kategorien-/Bestandsfragen zuerst die INSTITUTIONELLE Quelle
  suchen** (Landesagentur, Verband, Register), dann Anbieter — eine
  Landesagentur-B2B-Seite lieferte sieben Verbünde in einem Abruf,
  vollständiger und neutraler als jede Anbieterrecherche.
  (Herkunft: MKT R6.)
- Datenblätter/Handbücher tragen oft MEHRERE Versionstabellen — Werte
  immer der Zeile der GELIEFERTEN Version entnehmen; die
  Familien-Highlights-Seite ist kein modellspezifischer Beleg.
- **Beleg-Typen zweiachsig führen: LESEWEG getrennt von QUELLENART**
  (z. B. „selbst im Rohtext gelesen" vs. „durch Agenten gelesen" NEBEN
  „Selbstauskunft/Drittquelle/Review/Register") — eine sauber zitierte
  Anbieter-Selbstauskunft wirkt beim Verdichten sonst wie ein geprüfter
  Fakt. (Herkunft: MKT R3.)
- Fähigkeits-POSITIVE aus Store-/Anbieter-Selbstauskünften sind
  Hypothesen, bis an der Primärquelle belegt. Ein im ANBIETER-SCREENSHARE
  gezeigter Zustand ist kein Zustand des EIGENEN Kontos — „gezeigt" von
  „bei uns entstanden" trennen.
- Fallbezogene dokumentierte Behördenauskunft schlägt die veröffentlichte
  Liste/Richtlinie — vor Aussagen zum Rechts-/Förderstand erst die eigene
  Korrespondenz greppen, dann die Richtlinie lesen.
- **Eine zu ⅔ ausgewertete Quelle fühlt sich vollständig an** —
  Vertrags-/Registrierungs-/Bedingungsseiten am STÜCK auswerten
  (Volldump in Datei, dann Extraktion), nie absatzweise nach Bedarf:
  Die Marketing-Einwilligung im selben Absatz blieb ungelesen, während
  Vertragsverhandlungen liefen. (Herkunft: heyPensio L-25.)
- **Eine Aussage ÜBER ein zitiertes Dokument braucht dieselbe Lektüre
  der Stelle wie ein Zitat daraus** — die LEHRE über einen Text ersetzt
  nie den Text; vor jeder Weiterverwendung die Originalstelle öffnen.
  (Herkunft: heyPensio L-25.)
- Bei API-Fehlern erst die aufgelöste Anfrage im Result lesen, nur eine
  Variable pro Versuch ändern, Schreibweise an der echten Doku prüfen.
  Fehlermeldungen von Drittsystemen auch als ERKENNTNISQUELLE lesen.

- **Behörden-Website-Fallen (Herkunft: heyPensio R37, BAFA-Fall):**
  (1) Die **Linkbeschriftung einer Fundstelle kann falsch sein**
  (Richtliniendatum statt Amtsblatt-Fundstelle) — Fundstellen aus dem
  Dokument selbst zitieren, nie von der Website abschreiben. (2) Die
  maßgebliche Fassung kann **nur hinter einer Viewer-URL ohne
  Dateiendung** liegen, die per curl in eine Redirect-Schleife läuft —
  während die ÜBERHOLTE Fassung als direkter PDF-Link daneben steht
  (Fassungsfalle). (3) **Dateinamen lügen** (Merkblatt unter
  `formular_….pdf`) — Auffindbarkeit über den Linktext, nie über
  Pfad-Suche nach dem Dokumenttyp.
- **Aus Formeln abgeleitete Beträge auf numerische AUSLÖSCHUNG prüfen**
  (Herkunft: heyPensio R37): Bildet eine amtliche Formel die Differenz
  zweier großer, nah beieinanderliegender Werte, sehen die Ergebnisse
  exakt aus und sind es nicht — als Größenordnung ausweisen und die
  verbindliche Stelle (z. B. den amtlichen Rechner) benennen.
- **Gegen case-sensitive Wörterbuch-Negative hilft der KOPF-VOLLDUMP**,
  nicht ein weiterer Grep (Herkunft: heyPensio R37 — „vom" vs. „Vom"
  ergab 0 Treffer und hätte fast eine falsche Fassungsidentität
  gemeldet). Und Tabellen ohne Textebene werden von der Textextraktion
  STILL übersprungen — Screenshot-Rendering ist dort der einzige Weg.
