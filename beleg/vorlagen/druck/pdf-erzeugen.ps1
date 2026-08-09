# Erzeugt die Druck-PDFs der BELEG1-Erhebungsvorlagen aus den HTML-Druckfassungen.
# Aufruf:  powershell -ExecutionPolicy Bypass -File beleg\vorlagen\druck\pdf-erzeugen.ps1
# Werkzeug: Chrome headless (--print-to-pdf); die Seitengroesse kommt aus dem
# CSS-@page der HTML-Dateien (Tagesblaetter A5 quer, Leitfaden A4).
# Pfade sind relativ zum Skriptverzeichnis — kein Scratchpad, kein absoluter Pfad.

$ErrorActionPreference = "Stop"

$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
if (-not (Test-Path $chrome)) {
    $chrome = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
}
if (-not (Test-Path $chrome)) {
    throw "Weder Chrome noch Edge gefunden - Werkzeugweg neu klaeren."
}

$druckDir   = $PSScriptRoot                         # beleg\vorlagen\druck
$vorlagenDir = Split-Path $druckDir -Parent          # beleg\vorlagen

$paare = @(
    @{ html = "tagesblatt-firzlaffs.html";            pdf = "tagesblatt-firzlaffs.pdf" },
    @{ html = "tagesblatt-rabes.html";                pdf = "tagesblatt-rabes.pdf" },
    @{ html = "tagesblatt-hostel-boninstrasse.html";  pdf = "tagesblatt-hostel-boninstrasse.pdf" },
    @{ html = "interviewleitfaden-baseline.html";     pdf = "interviewleitfaden-baseline.pdf" }
)

foreach ($p in $paare) {
    $htmlPfad = Join-Path $druckDir $p.html
    $pdfPfad  = Join-Path $vorlagenDir $p.pdf
    if (-not (Test-Path $htmlPfad)) { throw "HTML fehlt: $htmlPfad" }
    $uri = "file:///" + ($htmlPfad -replace "\\", "/")
    & $chrome --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="$pdfPfad" $uri | Out-Null
    if (-not (Test-Path $pdfPfad)) { throw "PDF nicht erzeugt: $pdfPfad" }
    $kb = [math]::Round((Get-Item $pdfPfad).Length / 1KB, 1)
    Write-Output ("OK  {0}  ({1} KB)" -f $p.pdf, $kb)
}
Write-Output "Fertig. PDFs liegen in $vorlagenDir"
