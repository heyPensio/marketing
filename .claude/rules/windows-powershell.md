*(Kanarienvogel G8: rules/windows-powershell geladen — Loader-Positivkontrolle)*

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
  (Herkunft: MKT R15, real angewandt.) **Unsichtbare Zeichen zählen
  mit** — Soft-Hyphen U+00AD und NBSP U+00A0 kommen mit kopiertem Text
  herein (MKT R16: zwei U+00AD, Vorher-Nenner 0) und lassen jeden
  späteren Grep auf das Wort ins Leere laufen; Nenner am Rundenstart,
  Prüfung vor dem Commit.
- **⭐ Zeilenenden misst `git ls-files --eol`, nicht ein Grep auf `\r`** —
  ein degeneriertes CRLF-Muster meldete „432 Zeilen mit CR" bei einer
  Datei mit 432 Zeilen. Eine Zahl, die exakt der Zeilenzahl entspricht,
  ist zuerst ein Werkzeugfehler. ⚠️ CRLF kann außerdem Zeichen-Schwellen
  verschieben (derselbe Blob lieferte 143 vs. 144 Treffer, weil `\r`
  gegen eine Mindestlänge mitzählte) — vor der Extraktion auf LF
  vereinheitlichen. (Herkunft: MKT R15.)
- **⭐ Der Bash-Kanal des Werkzeugs verschluckt Backslashes — in
  Heredocs UND in Inline-Skripten** (`\\|` kommt als `\|` an, `(?<!\\)`
  verliert die Maskierung; drei stille Fehlversuche, MKT R17). Skripte
  mit Backslash-Mustern per Write-Tool anlegen oder das Zeichen als
  `String.fromCharCode(92)` bauen. Ebenso verliert ein Literal-
  Sonderzeichen (NBSP) in `node -e` seine Kodierung und zählt alle
  Leerzeichen (0 → 8660): Zählungen als Skriptdatei MIT Selbsttest.
- **Ersetzungsskripte brauchen eine Trefferkontrolle JE MUSTER mit
  Abbruch** (Soll n, sonst Exit) — ein Lauf traf 0/11, weil das Repo
  öffnend `„` und schließend ASCII-`"` schreibt, der nächste 7/11 wegen
  Zeilenumbrüchen mit `> `-Präfix im Zitat; ohne Kontrolle wären 7
  Stellen geändert und 4 still liegen geblieben (MKT R17).
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

- **`core.autocrlf=true` ohne `.gitattributes` schreibt Code-/JSON-
  Artefakte beim FRISCHEN Checkout mit CRLF** — im Arbeitsbaum sehen die
  Dateien richtig aus, weil sie nie neu ausgecheckt wurden; ein Clone,
  Worktree oder `git checkout` bricht sie (Herkunft: heyPensio R36-C 4/22
  Code-Nodes tot bei grünen Tests, R45-C als Nebenbefund erneut).
  **Pflicht in jedem Repo mit ausgeführten Artefakten: `.gitattributes`
  mit `*.json text eol=lf`, `*.js text eol=lf` (+ weitere Code-Typen) und
  einmaliges `git add --renormalize .` in einem ruhigen Fenster** — nie im
  Parallelbetrieb.
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
  (Herkunft: MKT R6.) **Auch das Grep-TOOL erbt dieses Verzeichnis:**
  ein Aufruf ohne `path`-Parameter nach einem Bash-`cd` meldete 0
  statt 14 Treffer — ein sauber aussehendes Negativ. Suchwerkzeuge
  immer mit explizitem `path`; ein Nulltreffer nach einem Bash-`cd`
  ist zuerst ein Kanalfehler. (Herkunft: MKT R18.)
- **`git worktree add` reißt an der Windows-260-Zeichen-Grenze**
  („Could not reset index file"), sobald der Zielpfad tief liegt — das
  Session-Scratchpad ist regelmäßig zu tief. Clean-Checkout-/Worktree-
  Proben auf einen kurzen Temp-Pfad legen (z. B. direkt unter
  `%LOCALAPPDATA%\Temp\`). (Herkunft: heyPensio R52-A.)
- **Prozesse NIE nach Namen beenden (`taskkill /IM node.exe`,
  `Stop-Process -Name node`) — im Multi-Session-Betrieb trifft das die
  Vorschau-Server, Watcher und Skripte der PARALLELEN Sessions.** Immer
  gezielt per Port oder PID: `Get-NetTCPConnection -LocalPort <port>`
  → `OwningProcess` → `Stop-Process -Id <pid>`; eigene Server mit
  bekanntem Port starten und die PID protokollieren. (Herkunft:
  heyPensio R47-A — zwei Alt-Server der Nachbarsession mit beendet.)
- **Bash-Heredocs/`node -e`/Inline-Python mit typografischen Zeichen
  („…", ’), Umlauten oder Backslashes scheitern still oder verschlucken
  Zeichen** — auch mehrzeilige Markdown-Anhänge (Quoting-EOF). Text als
  DATEI schreiben (Write/Edit-Tool bzw. Datei im Scratchpad) und dann per
  `cat`/Node anhängen bzw. Skript aus Datei ausführen; typografische
  Anführungszeichen (`„…"`) beenden zudem in Python/JS einen mit `"`
  begonnenen String. (Herkunft: heyPensio R46/R47/R48/R49 — vierfach an
  zwei Tagen.) **Auch ein QUOTED Heredoc (`<<'EOF'`) schützt den
  Backslash nicht zuverlässig** — eine Regex-Zeichenklasse kam als
  `[^"\]` statt `[^"\\]` auf der Platte an, der Syntaxfehler sah wie ein
  Denkfehler aus (heyPensio R49-B; damit sechsfach belegt).
- **Secret-/Wert-Abfragen in Shell-Skripten:** (a) Der `!`-Direktkanal
  reicht KEINE verdeckte Tastatureingabe durch — `read -rs` bekommt
  sofort ein Dateiende, und mit `set -e` stirbt das Skript STUMM (ein
  Abbruch sieht wie ein Durchlauf aus). Vor jedem `read` eine
  TTY-Prüfung mit lesbarer Meldung (`[ -t 0 ] || { echo …; exit 1; }`).
  (b) **Ein CLI-Read in einer Kommandosubstitution
  (`VAR=$(op read …)`) braucht eine Ergebnisprüfung** — ein Lesefehler
  (abgelaufene CLI-Autorisierung) schreibt sonst einen LEEREN Wert
  weiter; real passiert (Benutzername leer, bemerkt nur an der
  Längenausgabe `user=0`). Nach jeder Substitution Exit-Code UND
  Nicht-Leere prüfen, bevor der Wert irgendwo landet. (Herkunft:
  heyPensio R49-C, zweifach.)

## Mess-Skript-Fallen (Nachzug R53, Herkunft: heyPensio R53-J/-F/-I/-D)

- **⭐ Ein HTTP-Fehlerstatus, der durch eine Auswertelogik läuft, wird
  zum Messwert:** Ein 404 auf geratenem Pfad wurde von einem
  Leere-Menge-Fallback zu „0 Treffer" — die Zahl bestätigte genau die
  Erwartung und fiel nur über einen Zweitkanal auf (real: 10).
  Mess-GETs werfen bei Status ab 400, glätten NIE zu leeren Mengen;
  eine 0 aus einem Fehlerpfad sieht aus wie ein Befund.
- **⭐ Unsichtbare-Zeichen-Zählung nur über CODEPOINTS, nie über
  Bytes:** `grep -P` auf das A0-Byte meldet NBSP in Emoji (⚠ = E2 9A
  A0, 🟠 = F0 9F 9F A0) — 21 falsche Treffer in einem sauberen
  Dokument. Belastbar ist die Codepoint-Prüfung in Node (Regex auf
  U+00A0/U+00AD/U+200B am String), mit Positivkontrolle (Umlaut- und
  Emoji-Zählung im selben Lauf). Ein Fehlalarm-Generator wird
  abgeschaltet — dann fehlt die Prüfung im Ernstfall.
- **`process.exit()` aus einem async-Zweig endet unter Windows mit
  Exit 127** statt des gesetzten Codes (Ausgabe bleibt korrekt) — wer
  den Exit-Code auswertet, misst das Artefakt; Exit-Codes nur aus
  synchronem Abschluss setzen oder die Ausgabe als Beleg nehmen.
- **Die Bash-Umlautprobe zählt BYTES, nicht Zeichen** (603 vs. Node
  284 am selben Text): Für Vorher/Nachher-SUMMENPROBEN tauglich (der
  Fehler ist linear), als Absolutzahl nicht zitierfähig — Zählweg an
  die Zahl.
