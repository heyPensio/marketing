# R09 — Disposition der Codex-C1-Befunde (Leitsession-Review)

> **Gegenstand:** `protokolle/R09-codex-restpruefung-R08A.md` (Codex,
> 12.08.2026, 862 Z., Prüfstand `2110083`).
> **Reviewer:** Shanks (Leitsession), 12.08.2026 ~10:40 MESZ.
> **Regel:** CLAUDE.md Regel 8 — jeder Befund ist repariert,
> ausdrücklich verworfen oder hat einen benannten Träger. Delegierte
> Zahlen und Fundstellen wurden an der Quelle nachgemessen, nicht
> übernommen.

## A. Eigene Nachmessung der delegierten Aussagen

| Codex-Aussage | Eigene Messung | Ergebnis |
|---|---|---|
| Basislauf: 129 Zitate, 114/115 bestätigt, Exit 1, Positivkontrolle 11/11, Gegenprobe 3/3 | Skript selbst gefahren (`node akquise/pruefe-zitate.js`, Ausgabe in Datei, Exit separat gelesen) | **exakt reproduziert** |
| Zahlen-Inventur 256 + 393 = 649 | Summenprobe geht auf; Zählweg im Bericht genannt (`\d` je physischer Zeile) | **schlüssig** (Stichprobe, nicht Vollnachzählung — s. § D) |
| Rechtsmatrix hat 866 Zeilen, Dokumente behaupten 856 | `git show HEAD:handel/kanal-rechtsmatrix.md \| wc -l` = 866; `git show d11535f:…` = **856** | **bestätigt — mit anderer Ursache**, s. B-1 |
| § 7.4 verkürzt „unter 20 Personen" um „ständig automatisiert verarbeiten" | Regelwerk § 7.4 im Wortlaut gelesen | **bestätigt** |
| § 2.1 trägt den Bestandskunden-Geltungsvermerk nicht | § 2.1 im Wortlaut gelesen | **bestätigt**, Ursache s. B-3 |
| 6 von 6 Reparaturen vorgefunden | Stichprobe Z-1/Z-4 am Objekt | **bestätigt** |

⚠️ **Eigener Werkzeugfehler, protokolliert:** Mein erster Gegenprobe-Grep
auf „20 Personen" fand die Regelwerk-Stelle **nicht** und legte einen
Fehlzitat-Verdacht gegen Codex nahe. Ursache: Der Satz bricht zwischen
„20" und „Personen" um — die zeilengetrennte Phrase ist genau die im
Baustein `quellen-beschaffung` belegte Falle. **Das Negativ war mein
Werkzeug, nicht Codex' Fundstelle.**

## B. Befunde mit Disposition

| # | Befund | Schwere | Disposition |
|---|---|---|---|
| **B-1** | Beide akquise-Dokumente führen den Verifikationsvermerk „Rechtsmatrix vollständig gelesen, **856 Zeilen**"; die Datei hat heute 866 | mittel | **REPARIEREN.** Die Angabe war zum Lesestand `d11535f` **korrekt** — die 10 Zeilen kamen erst durch meinen eigenen Nachtrag `474b95e`. Kein Fehler von R08-A. Fix: Zeilenzahl durch **Commit-Stand** ersetzen (`@d11535f`), wie es die Doku-Hygiene-Regel für alternde Zeilenanker vorschreibt. Träger: Leitsession, nach R09-A |
| **B-2** | § 7.4: „nicht benennungspflichtig unter 20 Personen" — die Bedingung „**ständig automatisiert verarbeiten**" fehlt | **hoch** | **REPARIEREN.** Echter Vorbehaltsverlust: Ohne die Bedingung liest sich eine Kopfzahl-Grenze, die so nicht gilt. Bedingung aus C6 ergänzen. Träger: Leitsession, nach R09-A |
| **B-3** | § 2.1-Kasten („24 Monate … zugleich Löschfrist fürs VVT") trägt den Geltungsvermerk „**nur Bestandskunden-Schiene**" nicht; das Regelwerk korrigiert erst in § 3 und § 7.4 | **hoch** | **REPARIEREN.** Ursache geklärt und sie ist meine: Den Geltungsvermerk habe ich am 11.08. (`474b95e`, N-6) in die **Rechtsmatrix** geschrieben — nachdem R08-A das Regelwerk daraus gebaut hatte. Die abgeleiteten Dokumente habe ich nicht nachgezogen. Fix: Geltungsvermerk in den § 2.1-Kasten, **an der Stelle, wo der Leser ankommt**. Träger: Leitsession, nach R09-A. ⭐ **Debrief-Kandidat**, s. § C |
| **B-4** | § 12 dokumentiert den Skriptstand „128 Zitate, 114/114, Exit 0"; real sind es 129, 114/115, Exit 1 | mittel | **REPARIEREN — Ursache selbst gefunden, über Codex hinaus:** Der 129. „Zitat"-Treffer ist das Selbstzitat „je Quelldatei einer — 7/7", mit dem § 12 den reparierten Befund P-04 **dokumentiert**. Die Dokumentation der Reparatur hat den Prüflauf verändert. Fix: Eintrag in die Ausnahmeliste des Skripts (eigene Formulierung) **und** § 12-Zahlen nachziehen; danach muss der Lauf wieder 114/114 + Exit 0 zeigen. Träger: Leitsession, nach R09-A |
| **B-5** | R-A6.6: Der in der Quelle ausgewiesene **Streitstand** („höchstrichterlich ungeklärt", drei Positionen) fehlt im Zielblock; ebenso der zulässige Mindestinhalt | **hoch** | **REPARIEREN.** Ein weggefallener Streitstand ist die gefährlichste Richtung (er macht aus „ungeklärt" eine Festlegung). Träger: Leitsession, nach R09-A |
| **B-6** | R-A6.2: „Speicherung + jederzeitige Ausdruckmöglichkeit" und die Bedingung „**unter der konkreten Adresse**" entfallen | mittel | **REPARIEREN** (beides sind Nachweis-Bedingungen, keine Erläuterungen). Träger: Leitsession, nach R09-A |
| **B-7** | R-A6.4: „Whitepaper nur gegen **Newsletter**-Einwilligung" zu „gegen Einwilligung" verallgemeinert; Art. 7 Abs. 4 DSGVO entfällt | gering | **VERWORFEN als Verlust — bewusste Operationalisierung.** Das Verbot bleibt in der schärferen Form (verallgemeinert = weiter, nicht enger); die Norm steht im Quelldokument. Kein Fix |
| **B-8** | § 7.4 AVV: Bedingung „auf eigenen Datenbeständen" und die Folge „eigene Verantwortliche / eigene Rechtsgrundlage" entfallen | mittel | **REPARIEREN.** Die Folge ist die eigentliche Aussage; ohne sie bleibt ein Vertragstyp-Hinweis ohne Konsequenz. Träger: Leitsession, nach R09-A |
| **B-9** | Art.-30-Abs.-5-Versionswarnung (Berichtigung 22.11.2016) fehlt in § 7.4 | gering | **VERWORFEN mit Grund:** Die Warnung betrifft die Lektüre der **Norm**, nicht den Betrieb der Liste; sie steht am richtigen Ort in der Rechtsmatrix. Vermerk genügt |
| **B-10** | Baseline-Muster: **3 von 15** Elementen nicht übernommen — eigenes Mindestfenster, gestaffelter Start mit eigenem Nenner, **Saisonalitätsvorbehalt** | mittel | **TRÄGER: MKT-AKQ, nächste Akquise-Runde.** Der Saisonalitätsvorbehalt ist inhaltlich der stärkste (Hotellerie-Zyklus trifft die Rückwärtsrechnung direkt) und wird dort als eigener Posten geführt. Nicht in R9 nachgeschoben, weil die Rückwärtsrechnung sonst ohne FUND2-Persona-Befund weiter verfestigt wird |
| **B-11** | Codex' `git status`-Aussage („zeigt Bericht **und** `.claude/settings.local.json`") deckt sich nicht mit meiner Messung — die Datei ist global git-ignoriert (`~/.config/git/ignore`) und erscheint hier nicht | Verfahren | **KEIN Sachbefund, aber protokollpflichtig:** Codex sieht den Arbeitsbaum in einem anderen Benutzer-/Konfigurationskontext. Folge für künftige Aufträge: **Ein `git status`-Befund von Codex ist nicht ohne eigene Gegenmessung übernehmbar.** Datei unverändert (Zeitstempel 11.08. 15:08), nichts committet — die Verhaltensauflagen wurden eingehalten |

**Nenner:** 11 Befunde — **7 repariert (Träger Leitsession, nach
R09-A)** · 1 Träger MKT-AKQ · 2 ausdrücklich verworfen mit Grund ·
1 Verfahrensbefund protokolliert. Keiner ohne Disposition.

## C. Debrief-Kandidaten

1. ⭐ **Wer eine Quelle nachträglich schärft, zieht die abgeleiteten
   Dokumente im selben Zug nach.** Die Vorwärtsverweis-Regel ist bisher
   auf die *alte Stelle* gerichtet („überholt durch X"). B-3 zeigt die
   Gegenrichtung: Ich habe den Geltungsvermerk in die Rechtsmatrix
   geschrieben und das bereits daraus gebaute Regelwerk stehen lassen —
   die Schärfung erreichte den Leser nie. Suchraum ist „wer hat aus
   dieser Datei abgeleitet?", nicht „wo steht der alte Wert?".
2. **Ein Verifikationsvermerk mit ZEILENZAHL altert automatisch** (B-1):
   Die Zahl war korrekt und wurde durch die eigene Nacharbeit falsch.
   Belegstände gehören als Commit-Hash ins Dokument.
3. **Die Dokumentation einer Reparatur kann den Prüflauf verändern**
   (B-4): Das zitierte Fundstück wurde selbst zum Prüfgegenstand. Nach
   jedem Doku-Nachtrag über ein Prüfwerkzeug den Lauf erneut messen.
4. **Codex-Zuschnitt hat getragen** (bewährtes Muster): Die Trennung
   „Codex inventarisiert und misst, Leitsession bewertet" hat 11
   belastbare Befunde geliefert, keinen davon mit Belegstufen-Urteil;
   die Prüfweg-Blindstellen hat der Bericht selbst benannt.

## D. Grenzen dieser Disposition

- Die 649-Zeilen-Vollinventur (Anhang A) habe ich **nicht Zeile für
  Zeile nachgezählt** — geprüft sind Summenprobe, Zählweg und die
  14 scope-gepaarten Übernahmen M-01…M-14. Das ist eine Stichprobe,
  keine Vollprüfung.
- Die Reparaturen B-1…B-6, B-8 sind **disponiert, nicht ausgeführt** —
  die Dateien liegen im Schreibscope von R09-A. Ausführung nach dessen
  Abschlussmeldung.
- Nicht geprüft: ob die Rechtsmatrix selbst inhaltlich richtig ist
  (war weder Codex' noch dieser Auftrag).

---

## E. Ausführung (12.08.2026, nach der R09-A-Abschlussmeldung)

**Alle sieben Reparaturen ausgeführt**, jede mit sichtbarem
Vorfassungs-Vermerk (keine stille Neufassung):

| # | Ausgeführt | Ort |
|---|---|---|
| B-1 | Zeilenzahl → **Commit-Stand `@d11535f`** in beiden Dokumenten, mit Hinweis auf das Wachstum auf 866 | `listenbau-regelwerk.md` Schlussvermerk · `akquiseplan.md` Schlussvermerk |
| B-2 | Bedingung „**ständig automatisiert verarbeiten**" ergänzt | Regelwerk § 7.4, DSB-Punkt |
| B-3 | **Geltungsvermerk** „nur Bestandskunden-Schiene" **vor** den D3.1-Kasten gesetzt — an die Stelle, wo der Leser ankommt | Regelwerk § 2.1 |
| B-4 | Ausnahmeliste des Skripts um **4 begründete Einträge** ergänzt; § 12-Zahlen nachgezogen (**134 / 18 / 116 von 116 / Exit 0**, Selbsttest bestanden); Fehlerklassen-Kasten ergänzt | `pruefe-zitate.js` · Regelwerk § 12 |
| B-5 | **Streitstand** („höchstrichterlich ungeklärt", drei Positionen) + zulässiger Mindestinhalt ergänzt | Regelwerk R-A6.6 |
| B-6 | „Speicherung + jederzeitige Ausdruckmöglichkeit" und „unter der konkreten Adresse" ergänzt | Regelwerk R-A6.2 |
| B-8 | Bedingung „auf eigenen Datenbeständen" + Rechtsfolge „eigene Verantwortliche / eigene Rechtsgrundlage" ergänzt | Regelwerk § 7.4, AVV-Punkt |

**Nachtrag zur eigenen Disposition — Lücke im Abschnitt B, offen
ausgewiesen:**

| # | Befund | Disposition |
|---|---|---|
| **B-12** | R-A6.1: „B2B senkt nichts" ohne die Normbegründung „§ 7 Abs. 2 Nr. 2 UWG kennt keine B2B-Erleichterung" | **REPARIERT.** Diese Codex-Differenz hatte ich in § B **nicht disponiert** — sie fiel erst beim Ausführen auf. Meine eigene Dispositionsliste war also unvollständig (11 statt 12 Befunde). Genau die Fehlerklasse, gegen die die Nenner-Pflicht steht |

## F. Zwei neue Befunde aus dem R09-A-Review (Leitsession)

| # | Befund | Disposition |
|---|---|---|
| **R-1** | **Q-04 verschiebt die Fälligkeit von O-2/F-7/O-9 vom Versand auf den Listenaufbau** — hergeleitet im O-8-Dokument, aber an drei Ankunftsstellen nicht nachgezogen (O-8 § 9.3 und § 11.1, Regelwerk-Nachtragskasten, Regelwerk § 10) | **REPARIERT** an allen vier Stellen. ⭐ **Dieselbe Fehlerklasse wie B-3 — zweiter Beleg an einem Tag:** Eine Schärfung erreicht die abgeleitete Stelle nicht. Debrief-Kandidat, jetzt doppelt belegt |
| **R-2** | **`akquise/interessenabwaegung-o8.md` liegt außerhalb des Prüfraums von `pruefe-zitate.js`** — das Skript prüft nur Akquiseplan und Regelwerk. Das risikotragende Dokument hat damit **kein dauerhaftes Prüfmittel im Repo**; R09-A hat es „in eigener Sache" verifiziert (eigene Meldung, Block 2) | **TRÄGER: nächste AKQ-/HANDEL-Session.** Nicht heute nachgezogen, weil die Pool-Erweiterung die Primärquellen bräuchte, die in `sensibel/` liegen (git-ignoriert) — das ist ein eigener Zuschnitt, kein Nebenbei-Fix. Bis dahin gilt die Verifikation von R09-A, ausgewiesen als Selbstprüfung |

**Gesamt-Nenner nach Ausführung:** 14 Befunde — **9 repariert**
(B-1…B-6, B-8, B-12, R-1) · **2 mit Träger** (B-10 MKT-AKQ, R-2
nächste Session) · **2 verworfen mit Grund** (B-7, B-9) · **1
Verfahrensbefund** (B-11). Keiner ohne Disposition.

**Beleg nach der Reparatur:** `node akquise/pruefe-zitate.js` →
**Exit 0**, 134 Zitate, 18/18 Ausnahmen, **116/116 bestätigt**;
`--selbsttest` → **bestanden** (8 extrahiert / 4 bestätigt / 4
gemeldet), Exit 0. Beide Läufe nach dem letzten Edit gefahren, nicht
davor.
