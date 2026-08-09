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

## L-09 — Quellen-Widerspruch: die these-stützende AUSWAHL ist verdächtig; ein „fraglich"-Vermerk ohne Klärungsauftrag verhindert nichts (MKT R3, 09.08.2026)

**Fall:** Das Juli-Wettbewerbs-Dossier hatte BEIDE Straiv-Zahlen („HTR
18 Mitarbeiter" und Store-Klasse „50+") und wählte die kleinere — die
die eigene These „Straiv ist verwundbar" stützte —, mit dem ehrlichen
Vermerk „damit fraglich". Der Vermerk dokumentierte die Fehlwahl,
verhinderte sie aber nicht: Der Satz „mit 18 Leuten … verwundbar"
wanderte bis ins verabschiedete Positionierungspapier § 4. R03-D
widerlegte die Zahl dreifach (LinkedIn 63, Store „50+", Fachbeitrag
07/2025 „von 43 auf rund 65"). Kern: Bei Quellen-Widerspruch richtet
sich der Verdacht gegen die eigene AUSWAHL, nicht gegen die unbequeme
Quelle; jeder „fraglich"-Vermerk braucht einen Klärungsauftrag (wer
löst auf, bis wann), sonst ist er ein Durchwink-Stempel.
Quelle: `protokolle/R03-D-abschluss.md` Falle F5 + Befund 2.

## L-10 — Eine Aktualisierung erbt den ZUSCHNITT der Vorgängerarbeit (MKT R3, 09.08.2026)

**Fall:** Der FUND3-Auftrag lautete „Wettbewerbsbild AKTUALISIEREN";
die Session erbte den Segment-Zuschnitt des Juli-Dossiers
(Apaleo-Store-Technik) ungeprüft und baute ein Papier, das sich wie
DAS Wettbewerbsbild las, obwohl es nur „Wer baut dieselbe Technik?"
misst — die Beratungs-/Agentur-Achse des real breiteren Portfolios
fehlte komplett. Vom User gefangen; Fix: Geltungsgrenze § 0.0 im
Werkstück + offene Portfolio-Klärung (N1). Kern: Bei jedem
Aktualisierungs-Auftrag zuerst „Stimmt der AUSSCHNITT noch?", dann
„Stimmen die Werte noch?" — und die geerbte Geltungsgrenze sichtbar
ins Dokument. Auch der Leitsession-Prompt hatte den Zuschnitt als
gegeben behandelt (Ist-Stand-Prüfung fand den Vorbestand, prüfte aber
nicht dessen Prämisse).
Quelle: `protokolle/R03-D-abschluss.md` Falle F6 + Nebenbefund N1;
`fund/wettbewerbsbild.md` § 0.0.

## Zweitbelege R4 zu bestehenden Regeln (09.08.2026, Sammelvermerk)

- **⭐ Verdichten-Familie, Meta-Aussagen-Facette (R04-A Falle 1,
  Prüfer-Fang):** Ein selbst formuliertes AUSWAHLKRITERIUM ist eine
  prüfbare Behauptung — die Erstfassung („sechs punktgleiche 18er",
  „einziger A5-Vertreter", „höchste W3-Dichte") war an der EIGENEN
  Tabelle dreifach widerlegbar. Superlative und Zählungen über die
  eigene Auswahl vor dem Hinschreiben an der Tabelle nachzählen, nie
  aus der Erinnerung an sie.
- **Status-Symbol-Regel (R04-A Falle 2):** „K6 ✅" trotz offenem
  EN-Muttersprachler-Teil — ⚠️→✅-Verdichtung trotz bekannter
  Kernregel; neue Facette: Der Teil-/Voll-Status gehört in die
  SPALTENÜBERSCHRIFT/Symbolzeile selbst, nicht in eine Fußnote
  daneben.
- **Vergabelinien-Drift (R04-A Falle 3 → CLAUDE-Schärfung + Gerüst
  `54439b9`):** Gleiche Sachlage (f/v-, c/k-Ambiguität) bekam
  ungleiche W2-Punkte, solange die Linie nur im Kopf existierte;
  materiell an der Shortlist-Grenze (Σ≥19). Erst das Ausformulieren
  fand den vierten Fall (Tektum). Bestandsscan nach der neuen Regel:
  Wertungstabelle § 5.2 war das auslösende Artefakt und ist repariert
  (`d769be1`); ältere Bewertungsraster der Runde R1–R3 tragen keine
  Mehrfach-Abzugsgründe ohne Linie (Planprüfungs-/Wettbewerbsraster
  arbeiten kriteriengebunden beschreibend, nicht punktbasiert).
- **Wiktionary case-sensitiv (R04-A Nebenbefund → Baustein
  quellen-beschaffung + Gerüst `54439b9`):** Klein-404 wäre für
  DE-Substantive ein falsches Negativ; Groß-/Klein-Doppellauf mit
  mechanik-spiegelnder Positivkontrolle je Lauf (talora/Einkehr).
- **L-05 (Klassifikator), Viertbeleg:** Push-KETTE in R04-A blockiert,
  Einzelbefehle liefen durch — Zerlegungs-Regel erneut bestätigt,
  keine neue Facette.
- **Push-Fenster-Sichtung entwertet sich in der Kette (Leitsession
  R4 → CLAUDE-Schärfung + Gerüst `54439b9`):** Zweimal lief
  `git log origin/main..HEAD && … push` als EINE Kette — die Sichtung
  zeigte fremde R04-A-Commits erst, als der Push schon durch war
  (glimpflich: Veröffentlichung dort gewollt). Eine Sichtung ohne
  Entscheidungspunkt sichtet nichts.
- **Prämissen-Stale-Facette (R04-A Nebenbefund 1):** Der Start-Prompt-
  Stand „Papier-Nachtrag steht aus" wurde 3 Minuten nach Prüfstand-
  Commit durch den Parallel-Commit der Leitsession (`8862831`)
  überholt — Zweitbeleg zur Regel „zwischen Lesen und Commit kann
  sich die Quelle ändern"; die Session fing es selbst per
  Vorwärtsverweis. Multi-Session-Zusatz: Wenn die LEITSESSION parallel
  im Themenraum eines laufenden Strangs committet, ist der
  Start-Prompt die alternde Quelle.
- **Bewährte Muster ohne Regelbedarf (dokumentiert):**
  Prüfer-Befunde vor der Reparatur getrennt an der Quelle verifiziert —
  alle drei trugen (Regel a, erneut) · mechanik-spiegelnde
  Positivkontrollen (Sammelvermerk-R3-Regel, dritter Beleg) ·
  **Kontaminationsschutz per Commit-REIHENFOLGE beweisbar gemacht**
  (Longlist-Commit VOR dem Ausschlusslisten-Read — kostenloser,
  später prüfbarer Nicht-Beeinflussungs-Beleg; neues Muster, bewusst
  ohne Regel-Träger, hier dokumentiert) · „blockiert ≠ ausgeschieden"
  als eigene Kategorie hielt das E-K5-Delta sauber durch („nicht
  prüfbar ist ein eigenes Ergebnis", operative Bestätigung) ·
  mitlaufende Everlast-Commits (5) statt Schlussakt.
- **(c)-Ablagen (bewusst ohne Handlung):** AskUserQuestion-Option
  „Weitere Sprachen" kam ohne Benennung zurück → Nachfassfrage löste
  es (Einzelfall, kein Regelbedarf) · R04-A-Modellverifikation über
  Harness-Environment sauber als „Belegstufe unter Statuszeile"
  deklariert — Statuszeilen-Handgriff bleibt der normierte Kanal ·
  Kunstwort-Robustheits-Befund (N-18/N-26) ist Sach-Info im
  Sprint-Dokument, kein Methodik-Learning.
Quellen: `protokolle/R04-A-abschluss.md`, `R04-A-pruefer.md`,
Session-Verlauf Leitsession R4 (Durchsprachen E11/E12/E13,
Erhebung `R04-erhebung-beratungsbestand.md`).

## Zweitbelege R3 zu bestehenden Regeln (09.08.2026, Sammelvermerk)

- **L-05 (Klassifikator), zwei neue Facetten:** (1) R03-A: `git push`
  auch als Einzelbefehl blockiert, ~30 min später in derselben Session
  durchgelaufen (Zeitpunktbindung erneut). (2) R03-C: zweimal im
  PowerShell-Kanal blockiert (Kette UND Einzelbefehl), unmittelbar
  danach im BASH-Kanal durchgelaufen — die Blockade ist auch
  KANAL-gebunden; Kanalwechsel gehört vor die Meldung.
- **L-03 (stiller Vollständigkeits-Anspruch):** R03-D schrieb
  „36/36 wiedergefunden" — die 36 waren die eigene Stichprobe, nicht
  die Grundgesamtheit des Dossiers; der NENNER einer
  Verifikationsquote ist selbst eine Behauptung (F3).
- **Suchraum-Regel (⭐ Positivkontrolle):** Agenten-Negativ
  „Meldeschein nicht gefunden" maß nur 3 Seiten; der wichtigste
  Einzelbefund der Runde (book your key nimmt Meldescheine am
  Automaten auf) stand auf der vierten (F4).
- **Befund/Diagnose-Trennung (Regel a):** zweimal ausgezahlt — Wavetec
  (Befund richtig, Diagnose falsch: Datei fehlte in der eigenen
  Prüfauftrags-Liste) und LIKE-MAGIC-Eurozeichen (eigene Byte-Lesung
  schlug das Prüfer-Soll) (M7).
- **Zählweg-Regel:** Marker-Zählungen ohne Etikett (Roh-HTML vs.
  gestrippter Text, wortgrenzen-gebunden oder nicht) sind nicht
  reproduzierbar und damit wertlos, auch wenn sie stimmen (F8);
  eine Zahl, die je Werkzeugeinstellung um Faktor 2 springt, ist ein
  Werkzeugartefakt (F2).
- **Preis-Zeilen-Regel:** byte-genaues Zitat schützt nicht vor
  falscher Einordnung — „ab 350 €" ohne die Frage „Preis WOFÜR?"
  (Auflösung stand im FAQ derselben Seite) (F10).
- **Klon-/Vorbestand-Regel:** R03-A übernahm Onboarding-Mechanik und
  ließ DSGVO-/Onboarding-Entwarnungen bewusst zurück (satzweise
  Klon-Prüfung); Gekippt-Abschnitt der Quelle VOR jeder Vorbelegung
  gegriffen — beide Muster trugen.
- **Verfahrens-Positivkontrolle (L-06/L-08-Mechanik):** dritter
  erfolgreicher Lauf; Zusatz-Ertrag: echte Deckungslücke M-2 (No-Show-
  Live-Protokoll ohne Träger) daneben gefunden. Der Prüfer benannte
  seine Blindstellen-Klassen (Maßstab-Manipulation · konsistente
  Doppel-Verfälschung MD+HTML · nur-PDF-Fehler) — dokumentiert als
  Kalibrierung, keine Regeländerung (Zusatzfrage existiert bereits).
- **Gegenprobe-gegen-die-Prämisse (Recherche-Regel):** „widerlege
  diese Behauptung" lieferte den Befund „USP hält, aber enger
  formulieren" — den eine bestätigende Recherche nie gefunden hätte
  (M3); Ausschlussliste als eingebaute Positivkontrolle (M4).
- **Exklusiv-Zuteilung ist Annahme (tagesstart-Nachzug):** beide
  Chrome-Zuteilungen der Runde (R03-B regionalstatistik, Baustein-
  SPA-Erwartung) blieben ungenutzt — Kanal-Messung schlägt
  Baustein-Erfahrungsregel (R03-B F1, R03-D F1).
- **Summenproben-Regel (quellen-beschaffung):** Kreuzprobe zwischen
  Ebenen fing einen echten Quellen-Datenfehler (Deutschland-Zeile ≠
  Ländersumme, −391.312), den kein Plausibilitätsblick findet
  (R03-B F4); Tabellentitel „Jahressumme" log über den Juli-Stichtags-
  Scope der Zeilen (R03-B F5).
- **Verdichten-Familie, Warnvermerk-Facette (R03-C F1-Prüferfang):**
  Zweiteilige Quellen-Pflichten halbieren sich beim Übernehmen — der
  Everlast-Warnvermerk trägt Zeitstempel- UND Vertragsklärungs-Pflicht,
  übernommen war zunächst nur die Terminschiene. Beim Übernehmen eines
  Warnvermerks die Pflichten erst ZÄHLEN, dann einarbeiten.
- **Zahlen-Zeilen-Regel, Register-Facette (R03-C A1-Prüferfang):**
  DPMA- (3 Monate ab EINTRAGUNG) und EUIPO-Widerspruchsfrist (ab
  Veröffentlichung der ANMELDUNG) in einer Tabellenzeile vermengt —
  bei Verfahrensfristen zweier Register nie eine gemeinsame Zeile,
  bevor beide Fristanker einzeln benannt sind.
- **Werkzeug-vor-System, Fehlseiten-Facette (R03-B F2):** Eine
  „technische Störung"-Fehlseite kam vom eigenen falschen
  URL-Parameter, während die Domain parallel sauber antwortete —
  Prüffrage vor jedem „Quelle nicht erreichbar": Antwortet die Domain
  PARALLEL noch? Dann ist der Fehler der eigene.
- **Negativ-Absicherung, Merkmals-Facette (R03-B M3):** Das verdächtige
  Merkmal (`UOGRENZE` — klingt nach Größenklasse, ist Streuungsband)
  EINZELN öffnen statt am Namen urteilen — ein Abruf, macht das
  Negativ unangreifbar.
- **Bewährte Muster ohne Regelbedarf (dokumentiert):**
  MD-Wahrheitsquelle + HTML-Druckfassung mit expliziter Nachzieh-Regel
  im Rollen-Kasten (macht Sync-Fehler diagnostizierbar — R03-A M4) ·
  Fassungsnummern v1/v2+Datum auf Erhebungsvorlagen (R03-A M5) ·
  Reproduktionsweg/Abrufkette ins Dokument statt Rohdaten (1,7 MB CSV)
  ins Repo (R03-B M6) · PDF-ERZEUGUNGS-Werkzeugweg etabliert:
  Chrome headless `--print-to-pdf` respektiert CSS-`@page`,
  wiederverwendbares Skript `beleg/vorlagen/druck/pdf-erzeugen.ps1`,
  Layout braucht Sichtprüfung je Iteration (R03-A F2).
- **(c)-Ablagen (bewusst ohne Handlung):** R03-A-Beobachtungen
  „fremder Commit bereits auf origin" und „fremde uncommittete Arbeit
  ignoriert" = Funktionsbestätigungen der Git-Regeln 3/3a ·
  Länder↔Deutschland-Differenz der RDB-Tabelle ist IM Bericht selbst
  als „gemessen, nicht erklärt" dokumentiert (R03-B Block 2).
Quellen: `protokolle/R03-A-abschluss.md`, `R03-B-abschluss.md`,
`R03-C-abschluss.md`, `R03-D-abschluss.md`, `R03-A-pruefer.md`,
`R03-C-pruefer.md`; Vollständigkeit gegen die Originalmeldungen
geprüft durch den Debrief-Gegenprobe-Subagenten (12 Nachfänge, alle
eingearbeitet — s. Debrief-Report R3).

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
