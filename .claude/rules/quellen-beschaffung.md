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
