# Baustein: Windows-/PowerShell-Werkzeugfallen

*(Aktivieren, wenn das Projekt auf einem Windows-Rechner mit PowerShell
läuft. Herkunft aller Regeln: heyPensio, je teuer belegt.)*

## Encoding

- `Get-Content -Raw` liest UTF-8 ohne BOM als ANSI → Mojibake. Immer
  `[IO.File]::ReadAllText($pfad, [Text.Encoding]::UTF8)`.
- `Out-File -Encoding utf8` / `Set-Content -Encoding utf8` setzen unter
  PS 5.1 ein BOM — APIs lehnen solche JSON-Bodies ab. Alles, was eine API
  oder git liest, mit
  `[IO.File]::WriteAllText($pfad, $text, [Text.UTF8Encoding]::new($false))`
  schreiben.
- Ein Encoding-BEFUND über eine Datei (Mojibake „Ã¶") ist erst nach
  Byte-Prüfung (`ReadAllBytes`) ein Datei-Befund — sonst ist es der eigene
  Leseweg; eine „Reparatur" würde die gesunde Datei beschädigen.
- **⭐ Umlaut-Zählung VOR und NACH jedem `sed`/jeder Massenersetzung** —
  die billigste Absicherung gegen Encoding-Schaden; ein Vorher/Nachher
  mit identischer Zahl ist der Beleg, den sonst niemand nachliefern kann.
  (Herkunft: MKT R15, real angewandt.)
- **⭐ Zeilenenden misst `git ls-files --eol`, nicht ein Grep auf `\r`** —
  ein degeneriertes CRLF-Muster meldete „432 Zeilen mit CR" bei einer
  Datei mit 432 Zeilen. Eine Zahl, die exakt der Zeilenzahl entspricht,
  ist zuerst ein Werkzeugfehler. ⚠️ CRLF kann außerdem Zeichen-Schwellen
  verschieben (derselbe Blob lieferte 143 vs. 144 Treffer, weil `\r`
  gegen eine Mindestlänge mitzählte) — vor der Extraktion auf LF
  vereinheitlichen. (Herkunft: MKT R15.)
- **Python ist auf diesem Rechner NICHT verfügbar** — Skripte laufen über
  Node. (Herkunft: MKT R15.)
- Feldnamen NIE am geparsten Objekt einer case-insensitiven Sprache
  prüfen — PowerShell verschluckt Groß-/Klein-Asymmetrien, die in JS zu
  `undefined` führen. Bei Feldnamen-Fragen das Roh-JSON ansehen.

## Pipes und Zählungen

- `Select-Object -First N` hinter einem nativen Kommando bricht dessen
  Pipe (Exit 255, sieht aus wie Skriptfehler). Vor Aussagen über
  Exit-Codes den Lauf ohne Pipe-Abbruch wiederholen (Ausgabe in Datei).
- Die Pipe IN einen Node-Prozess (`$json | node script.js`) liefert stdin
  nicht zu — belastbar ist die Datei-Umleitung
  (`cmd /c "node script.js < datei"`). Ein Test, der in ALLEN Fällen
  dasselbe sagt, ist ein Werkzeugfehler, kein Ergebnis.
- `curl.exe`-Ausgabe kommt als ZEILEN-ARRAY zurück, nicht als String —
  Zeichen-/Marker-Zählungen darauf sind falsch; Weg über eine Datei.
- **Ein Exit-Code hinter einer Pipe ist der Exit-Code der PIPE** —
  `node script.js | grep …; echo $?` meldet den grep-Status (0),
  während das Skript mit 1 endete. Ausgabe in eine Datei, Exit-Code
  separat lesen. (Herkunft: MKT R8; Schwesterfall zum
  `| tail`-Exit-Code, heyPensio R33.)
- **`cmd /c "… & echo %ERRORLEVEL%"` meldet IMMER den Wert von VOR dem
  Lauf** — cmd expandiert `%ERRORLEVEL%` beim PARSEN der Zeile, nicht
  nach dem Kommando; ein roter Lauf sieht so grün aus, und die Zahl
  wirkt wie ein sauberer Messwert. Belastbar ist `$LASTEXITCODE` in
  PowerShell unmittelbar nach dem Aufruf (ohne Pipe dazwischen).
  (Herkunft: MKT R13 — die Ausgabe zeigte 7 fehlende Zitate, der
  „Exit-Code" 0; aufgefallen nur, weil beides nebeneinander lag.)
- Zeilenzahl-Kontrollen nie per `Measure-Object -Line` (zählt Leerzeilen
  nicht); belastbar ist `git diff --stat`.
- `grep -c` zählt ZEILEN, nicht Treffer (minifizierte Dateien: immer 1);
  belastbar ist `grep -o … | wc -l`. Wird eine Zeilen-Zählung bewusst
  verwendet, gehört der Zählweg an die Zahl („55 Zeilen, grep -c").
  Auch `-c` KOMBINIERT mit `-o` liefert je Datei dieselbe 1 — eine Zahl,
  die über viele verschiedene Quellen identisch ist, ist ein
  Werkzeugfehler, kein Befund. (Herkunft: MKT R5.)
- **PowerShell 5.1 kennt kein `grep`/`head`** — repo-weite Textsuchen
  laufen über das Grep-TOOL (mit Include-Filtern), nicht über die
  PowerShell; `grep`-Kommandos nur im Bash-Kanal. (Herkunft: MKT R2.)
- `node -e` mit Git-Bash-Pfaden (`/c/Users/…`) findet keine Module —
  Windows-Pfade oder Skript als Datei. Backslash-Regex in `node -e '…'`
  unter Bash zerbricht ebenfalls — Skriptdatei statt inline; und `| tail`
  hinter einem node-Aufruf liefert den Exit-Code des `tail`, nicht des
  Prozesses. (Herkunft: heyPensio R33.)
- **`git show <hash>^:<datei>` läuft unter Windows durch cmd.exe, wo `^`
  das ESCAPE-ZEICHEN ist** — die Referenz entschärft sich STILL zum
  Nachher-Stand und liefert plausible falsche Zahlen; in Skripten `~1`
  verwenden. Und eine NICHT-REKURSIVE Auflistung verliert genau die Datei
  im Unterverzeichnis — wer eine Bestandszahl „bestätigt", misst den
  SUCHWEG mit, nicht nur den Zähler. (Herkunft: heyPensio R33.)
- `[IO.File]`-/.NET-Aufrufe lösen relative Pfade gegen das PROZESS-CWD
  auf, nicht gegen das PowerShell-`cd` — immer absolute Pfade; nach
  Skriptläufen `git status` (stille Datei-Anlagen!).
- Im Array-Literal bindet das Komma stärker als `+` — jede Verkettung als
  Element KLAMMERN. `.ps1` scheitert ggf. an der ExecutionPolicy →
  prozess-lokaler Bypass (`powershell -ExecutionPolicy Bypass -File …`),
  nie die Systemeinstellung ändern.

## Git unter PowerShell

- Commit-Messages mit Anführungszeichen/Umlauten brechen als `-m`-Argument
  bzw. Here-String. **Message-Dateien mit dem Write-Tool anlegen** (nie
  Shell-Heredoc), BOM-frei, **im session-eigenen Scratchpad** (nie
  `$env:TEMP` — sessionübergreifend, erwischt fremde Dateien), dann
  `git commit -F <datei> -- <pfade>`.
- Commit-Betreffzeilen in ASCII-Transliteration („ae" statt „ä") —
  NUR dort; Datei-Inhalte tragen korrekte Umlaute.
- Ein Parser-Fehler (z. B. Bash-Heredoc) reißt die GANZE verkettete Zeile
  mit — nie annehmen, vordere Kommandos seien gelaufen; Zustand prüfen.
- `git add` bricht komplett ab, wenn EIN Pfad nicht existiert — die
  übrigen Pfade werden NICHT gestaged (klassisch nach `git mv`). Nach
  jedem Mehr-Pfad-Commit `git status --short` gegenlesen.
- Skripte, die Scratchpad-Pfade referenzieren, sind im Repo tot — Pfade
  vor dem Versionieren auf Repo-relative umstellen.
- **Der `!`-Direktkanal des Users läuft über Git Bash, nicht
  PowerShell:** Backslash-Pfade werden als Escapes geschluckt
  (`C:\Users\...` wird zu `C:Users...` — „No such file or directory").
  Kommandos, die man dem User zum Tippen vorgibt, immer mit
  Forward-Slashes schreiben. (Herkunft: MKT R1.)
- **Bash- und PowerShell-Kanal teilen EIN persistentes
  Arbeitsverzeichnis** — ein `cd` im Bash-Kanal verschiebt auch alle
  folgenden PowerShell-Aufrufe. Symptom: `git add <pfad>` scheitert mit
  „pathspec did not match any files" bei existierender Datei. Nach
  Analyse-Phasen mit Bash-`cd`s git-Kommandos robust mit
  `git -C <repo-pfad>` absetzen (kein eigenes `cd` nötig).
  (Herkunft: MKT R6.)
