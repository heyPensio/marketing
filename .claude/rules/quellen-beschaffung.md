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
