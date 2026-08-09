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
- **Amtliche Statistik als XLSX/CSV ziehen, nicht als PDF** — die
  Roh-Tabellenblätter sind maschinenlesbar sauber; das
  Übersichts-/Inhaltsblatt der Datei beantwortet „Gibt es die
  Schneidung überhaupt?" vor jeder teuren Suche. Übernommene
  Zahlentabellen mit **Summenproben** selbst verifizieren (Teilzeilen
  gegen Insgesamt-Zeile) — deckt Übertragungsfehler sofort auf und
  gibt jedem Prüfer einen harten Anker. (Herkunft: MKT R2.)
- **Vor einem „Quelle enthält X nicht" die Ausgaben-Logik der Reihe
  prüfen:** Stichtags-/Sondertabellen erscheinen oft nur in bestimmten
  Ausgaben (z. B. Jahres-Stichtag nur im Juli-Bericht) — die neueste
  Ausgabe ist nicht die datenreichste. (Herkunft: MKT R2.)
- **Ein TIMEOUT ist kein Negativbefund** — Primärquellen, die in einen
  Rechtstext eingehen: Abruf wiederholen oder in den Hintergrund, nie auf
  Zweitquellen ausweichen, solange die Quelle nur langsam ist.
- Datenblätter/Handbücher tragen oft MEHRERE Versionstabellen — Werte
  immer der Zeile der GELIEFERTEN Version entnehmen; die
  Familien-Highlights-Seite ist kein modellspezifischer Beleg.
- Fähigkeits-POSITIVE aus Store-/Anbieter-Selbstauskünften sind
  Hypothesen, bis an der Primärquelle belegt. Ein im ANBIETER-SCREENSHARE
  gezeigter Zustand ist kein Zustand des EIGENEN Kontos — „gezeigt" von
  „bei uns entstanden" trennen.
- Fallbezogene dokumentierte Behördenauskunft schlägt die veröffentlichte
  Liste/Richtlinie — vor Aussagen zum Rechts-/Förderstand erst die eigene
  Korrespondenz greppen, dann die Richtlinie lesen.
- Bei API-Fehlern erst die aufgelöste Anfrage im Result lesen, nur eine
  Variable pro Versuch ändern, Schreibweise an der echten Doku prüfen.
  Fehlermeldungen von Drittsystemen auch als ERKENNTNISQUELLE lesen.
