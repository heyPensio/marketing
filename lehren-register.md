# Lehren-Register — Marketingabteilung

> **Zweck (Kern/Beleg-Trennung):** CLAUDE.md trägt je Regel den
> HANDLUNGSKERN + einen Anker hierher; die Herleitungs- und
> Fallgeschichten (mit Runden-, Commit- und Zitat-Belegen) stehen VERBATIM
> in diesem Register. Es wird GEZIELT gelesen (grep auf `L-NN`), nie
> auto-geladen. **Pflege:** `/debrief` schreibt neue Herleitungen und
> Zweitbelege HIERHER (neue L-Nummer oder datierter Nachtrag am
> Eintragsende — Einträge werden nie umgeschrieben) und in CLAUDE.md nur
> den Regelkern + Anker. Beleg-Typen und Rundenbezüge aus der Quelle
> übernehmen (Verdichtungs-Regel).
>
> Die Methodik-Grundregeln der CLAUDE.md stammen aus dem
> projektgerüst-Blueprint (Herkunftsvermerke „heyPensio R<n>" dort); ihre
> vollen Herleitungen liegen im heyPensio-Repo
> (`blueprint/lehren-register.md`) und werden hier nicht dupliziert.
> Dieses Register beginnt leer und trägt die Lehren DIESES Projekts.

---

## L-01 — Als wörtlich gesetzte Zitate tragen ihren Anker an der ROHQUELLE (MKT R1, 09.08.2026)

**Fall:** FUND1-Entwurf zitierte die User-Rüge zur Fassung 5→6 als
„heyPensio zu flach dargestellt" — mit Anführungszeichen, aber mit den
Extraktionsberichten als einziger Referenz; die tragen nur „viel zu
flach" (A/A2) bzw. „zu flach" (B/F4.1). Für den unabhängigen Prüfer war
das ein Pseudo-Zitat (Befund 2), obwohl die Formulierung in der
Rohquelle tatsächlich stand — ohne präzisen Rohquellen-Anker ist das
nicht unterscheidbar. Gefahr: Das Pseudo-Zitat wird als Kanon
weiterzitiert. Kosten: 1 Prüfbefund + Nacharbeit.
Quelle: `protokolle/R01-A-pruefer.md` Befund 2,
`protokolle/R01-A-abschluss.md` Fallen (i).

## L-02 — Eigene Verifikations-Aussagen tragen Belegstufen-Pflicht (MKT R1, 09.08.2026)

**Fall:** R01-A schrieb „byte-gleich gegengelesen" über den
Fassung-6-Kanon — eine Lese-Gegenprobe belegt aber nur Wortlaut-, nie
Byte-Ebene (Apostroph-Falle, heyPensio C/B3). Die Verifikations-AUSSAGE
war damit selbst eine überschießende Behauptung derselben Klasse, die
sie ausschließen sollte. Korrektur: „auf Wortlaut-Ebene gegengelesen;
Skript-Byte-Vergleich steht aus" (Papier § 2/§ 7.8).
Quelle: `protokolle/R01-A-abschluss.md` Fallen (i).

## L-03 — Eine Liste mit Quellenangabe erhebt stillen Vollständigkeits-Anspruch (MKT R1, 09.08.2026)

**Fall:** FUND1 § 6 nannte „Quelle A/A11" und ließ vier A11-Positionen
weg (Gastprofil-Merge, Rezeptions-Tablet, Pre-Stay, Lost&Found) — wer
die Quellenangabe liest, versteht die Liste als Abbildung und die
Lücken als Nichtexistenz. Pikant: Gerade zwei der fehlenden Module
stützten die eigene Portfolio-These. Regel: vollständig abbilden ODER
das Auswahlkriterium nennen (Prüfer-Befund 3; eingearbeitet inkl.
Vollständigkeits-Vermerk zum offenen „u. a." der Quelle).
Quelle: `protokolle/R01-A-pruefer.md` Befund 3 + Kategorie 2.

## L-04 — Befangenheits-Symmetrie: „Welchen Vermerk trüge diese Quelle, wäre sie ein Fremder?" (MKT R1, 09.08.2026)

**Fall:** Der FUND2-Plan kennzeichnete Apaleo- und
Store-Anbieter-Auskünfte sauber als interessierte Selbstauskünfte —
beim eigenen Kronzeugen (Pilot-Betreiber: künftig bezahlter Berater
UND Cousin, A/A7) fehlte jeder Vermerk. Der Befangenheits-Maßstab wird
systematisch nur nach außen angelegt. Betrifft auch MKT-BELEG
(Case-Study-O-Töne desselben Zeugen → Offenlegungsfrage).
Quelle: `protokolle/R01-A-pruefer.md` Befund 4.

## L-05 — Klassifikator-Blockaden: Ketten zerlegen; Negativ ist zeitpunkt-/kontextgebunden (MKT R1, 09.08.2026)

**Fall 1 (Leitsession):** Bei der Remote-Anlage wurden
Credential-Script, `git remote add` und `git push` blockiert — später
in DERSELBEN Session lief `git push` normal durch. Ein
Blockade-Negativ misst den Moment/Kontext, keinen Dauerzustand.
**Fall 2 (R01-A):** Eine VERKETTETE Befehlszeile wurde blockiert,
deren Einzelbefehle (pull/log) erlaubt waren — vor dem Melden einmal
zerlegen. Quelle: Session-Verlauf Leitsession R1;
`protokolle/R01-A-abschluss.md` Nebenbefund 5.

## L-06 — Verfahrens-Positivkontrolle: User VOR dem Einbau im Chat vorwarnen (MKT R1, 09.08.2026)

**Fall:** Der User sah die beauftragte, bewusst verfälschte
Terminal-Kernaussage mid-turn im Arbeitsbaum und hielt sie für einen
echten Fehler. Vorwarnung gehört in den CHAT (nie in die Datei — das
würde den Prüfer kontaminieren). Träger: tagesstart-Command,
Abschnitt Verfahrens-Positivkontrolle (nachgezogen 09.08.2026).
Quelle: `protokolle/R01-A-abschluss.md` Fallen (i) + Verifikationen.

## L-07 — Kalender-Etiketten und Prüf-Prämissen: nie aus dem Kopf, und Prämissen sind Prüfgegenstand (MKT R2, 09.08.2026)

**Fall:** R02-A vergab Wochentags-Etiketten aus dem Kopf („Sa 09.08." —
der 09.08.2026 ist ein Sonntag) und gab die falsche Prämisse an den
Prüfer weiter, der sie regelkonform als Prämisse übernahm. Die Etiketten
waren teils richtig, teils falsch (24.08./21.09. stimmten,
16.08./22.09. u. a. nicht) — plausibel gemischt, dadurch schwer
auffällig. Gefangen wurde der Fehler NUR durch den Pflichtteil „Grenzen
des eigenen Verfahrens", in dem der Prüfer die bürgerliche Kalenderlage
gegen die Prämisse hielt. Zwei Kerne: (1) Kalender-Etiketten per
`Get-Date`, nie aus dem Kopf (CLAUDE.md Doku-Hygiene); (2)
Tatsachen-Prämissen im Prüfauftrag sind selbst Prüfgegenstand —
belegen oder als Annahme kennzeichnen (tagesstart, Prüfer-Muster).
Quelle: `protokolle/R02-A-abschluss.md` Block 3/4,
`R02-A-pruefer.md` G-1 + Grenzen Punkt 6.

## L-08 — Verfahrens-Positivkontrolle: Diff-Sichtung explizit verbieten (MKT R2, 09.08.2026)

**Fall:** Der R02-A-Prüfer entschied SELBST, den Arbeitsbaum-Diff nicht
zu sichten („die Prüfung sollte inhaltlich tragen, nicht forensisch")
und fing die Verfälschung über vier Quellen; der R02-B-Prüfer ZOG den
Diff (sah dadurch die Änderungsstelle) und widerlegte sie dann
inhaltlich an der Quelle. Beide fingen die Kontrolle — aber nur die
erste Variante misst das Inhalts-Verfahren. Ohne explizite Anweisung
ist es Zufall, welche Variante läuft. Kern: Der Prüfauftrag weist das
Diff-Sichtungs-Verbot ausdrücklich an (tagesstart, Positivkontrolle).
Quelle: `protokolle/R02-A-pruefer.md` Kopf + Grenzen 7,
`R02-B-pruefer.md` Kopf.

## Zweitbelege R2 zu bestehenden Regeln (09.08.2026, Sammelvermerk)

- **L-05 (Klassifikator):** `git push` in R02-A auch als Einzelbefehl
  blockiert, später in derselben Session durchgelaufen —
  Zeitpunktbindung zweifach neu belegt (R02-A Block 2 Nachtrag).
- **`grep -c`-Falle (Baustein windows-powershell):** erneut real —
  Prüfbefund P3 an den eigenen Positivkontroll-Zahlen von R02-B;
  Schärfung „Zählweg an die Zahl" in den Baustein übernommen.
- **WebFetch-/Zusammenfasser-Regel (Baustein quellen-beschaffung):**
  Zusammenfasser-Zahlen erst nach Roh-Gegenlesen zitierfähig (R02-B —
  Zahlen stimmten, aber erst das Gegenlesen machte sie belastbar).
- **Regel e (Ist-Stand-Gegenprobe des Auftrags):** R02-A verifizierte
  „kein Messplan existiert" selbst mit Positivkontrolle — zwei greps
  gegen Doppelbau.
- **Grenzen-Pflichtteil als eigener Fundkanal:** lieferte in R02-A den
  einzigen Fang außerhalb des Kategorienkatalogs (Kalender-Prämisse,
  s. L-07).
- **Beleg-Typ-Dreiteilung Rohprotokoll/Systemauszug/Selbstauskunft**
  (Messplan § 1) als operative L-04-Umsetzung — bewährt, wurde durch
  den User-Entscheid „Schätzwerte" (H-2-Nachtrag) sofort tragend.
- **Push-Veröffentlichungs-Regeln (R17/R30):** R02-B korrigierte die
  eigene Fehldeutung „mein Push veröffentlicht 1a67bca mit" selbst am
  `git log origin/main..HEAD`-Beleg (Nachtrag in Block 3) — die Regel
  fing den Fehler im Meldungstext, bevor er zur Aussage wurde.
- **Konservativer Planungsanker + Erfragungs-Handgriff** bei nur
  monatsgenau belegten Terminen (R02-A, 22.09. + H-1) — bewährtes
  Muster für Termin-Rückwärtsrechnungen.
- **Rückbau-Falle `git checkout` (R02-A Falle 5, Nachfang aus der
  Debrief-Gegenprobe):** Nach einem checkout ist der Session-Kontext
  der Datei stale („modified on disk") — vor weiteren Edits neu lesen;
  in die tagesstart-Rückbau-Mechanik übernommen.

## Zweitbelege R1 zu Blueprint-Regeln (09.08.2026, Sammelvermerk)

- **Rohquelle holen bei Berichts-Widerspruch (Regel g):** löste die
  03./04.08.-Datumsdrift VOR dem Zitieren (A/A2 widerlegt durch
  Rohquelle + B/F4.1).
- **Vorbehalt-zuerst-Verdichten (⭐):** messbar wirksam — Prüfer fand
  außer der absichtlichen Verfälschung keinen mittleren/kritischen
  Vorbehalts-Verlust („Kategorie 3 auffällig sauber").
- **Kategorienkatalog mit Pflicht-Ergebnis:** erzeugte belastbare
  „keine Auffälligkeit"-Aussagen (Kategorie 4 Zahlen/Zählweg).
- **Gmail-5-Nachrichten-Falle + Volldump-Arbeitsmodus (Baustein
  gmail-mcp):** erneut bestätigt (masunt-Thread: Liste zeigte 5 von 17
  Nachrichten; Volldump + Skript-Extraktion trug).
- **Verfahrens-Positivkontrolle (tagesstart):** vom Prüfer über genau
  die beauftragte Mechanik gefunden (drei Widerspruchs-Ebenen);
  Blindstellen-Sektion dadurch kalibriert.
Quellen: `protokolle/R01-A-abschluss.md` (ii), `R01-A-pruefer.md`,
Session-Verlauf Leitsession.
