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
- Zeilenzahl-Kontrollen nie per `Measure-Object -Line` (zählt Leerzeilen
  nicht); belastbar ist `git diff --stat`.
- `grep -c` zählt ZEILEN, nicht Treffer (minifizierte Dateien: immer 1);
  belastbar ist `grep -o … | wc -l`.
- `node -e` mit Git-Bash-Pfaden (`/c/Users/…`) findet keine Module —
  Windows-Pfade oder Skript als Datei.
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
