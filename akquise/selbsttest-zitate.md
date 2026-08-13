# Selbsttest-Datei für `pruefe-zitate.js`

Diese Datei ist **kein Projektdokument** — sie ist der Prüfgegenstand des
Selbsttests (`node akquise/pruefe-zitate.js --selbsttest`). Jede Zeile
unten ist ein Muster, das im Test ein bestimmtes Ergebnis erzeugen MUSS.
Wer das Skript ändert, ändert diese Datei im selben Zug mit.

## TREFFEN — müssen als bestätigtes Quellenzitat erkannt werden

T1 (Rechtsmatrix D2, Pflicht 1): „eigene, dauerhaft erreichbare Seite mit
allen 13 Art.-14-Angaben"

T2 (Rechtsmatrix D3-Kasten, über zwei Zeilen umbrochen — prüft den
Whitespace-Kollaps): „Risiko bewusst tragen und dokumentieren"

T3 (Regionalstatistik § 4.4, prüft Sonderzeichen ÷ und Ziffern):
„Summe beider Kreiszeilen ÷ Landeszeile"

T4 (Rechtsmatrix A7, prüft Bindestrich-über-Umbruch): „Der Grad der
Belästigung ist bei einer Werbung per Post jedoch gering."

T5 (neues ZIEL O-8, Quelle Rechtsmatrix): „Rechtswidrige Werbung ist
kein berechtigtes Interesse. Die UWG-Prüfung steht VOR der Abwägung,
nicht daneben."

T6 (neues ZIEL Wettbewerbsbild, Quelle Positionierungspapier): „Kein
Wettbewerber im untersuchten Feld bündelt das identisch"

T7 (neues ZIEL Rechtsmatrix, Quelle O-8): „Art. 21 Abs. 4 ist im Tenor
des Urteils nicht enthalten — er trägt dort die Art.-6-Prüfung"

T8 (neues ZIEL Angebotsarchitektur, Quelle Preismodell): „Einrichtung
Server/Instanz, Workflows importieren, Credentials, Property-Setup,
Raten, Tests, Schulung, Übergabedoku"

## TREFFEN-NICHT — müssen als NICHT gefunden gemeldet werden

F1 (verfälschte Zahl — eine Ziffer geändert): „eigene, dauerhaft
erreichbare Seite mit allen 14 Art.-14-Angaben"

F2 (verfälschte Aussage — Verneinung entfernt, der gefährlichste Fall):
„Risiko muss nicht dokumentiert werden, weil die Aufsicht zustimmt"

F3 (erfundenes Zitat, das plausibel klingt): „Die Aufsichtsbehörden
halten die Nutzung von Impressumsdaten für zulässig, wenn ein
berechtigtes Interesse dokumentiert ist."

F4 (echtes Zitat, aber aus einer Quelle AUSSERHALB des Pools — prüft,
dass der Pool nicht versehentlich das halbe Repo umfasst):
„Dieser Satz steht in keiner der elf Quellendateien des Pools."

F5 (Gegenrichtung für neues ZIEL O-8 — Rechtsfolge verkehrt):
„Rechtswidrige Werbung begründet stets ein berechtigtes Interesse"

F6 (Gegenrichtung für neues ZIEL Wettbewerbsbild — Alleinstellung
erfunden): „Jeder Wettbewerber im untersuchten Feld bündelt das identisch"

F7 (Gegenrichtung für neues ZIEL Rechtsmatrix — Tenor verfälscht):
„Art. 21 Abs. 4 ist als Verbot im Tenor des Urteils enthalten"

F8 (Gegenrichtung für neues ZIEL Angebotsarchitektur — Leistungsumfang
verfälscht): „Einrichtung ohne Tests, Schulung und Übergabedokumentation"
