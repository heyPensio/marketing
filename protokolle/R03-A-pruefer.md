# R03-A — Unabhängiger Prüfdurchgang: BELEG1-Erhebungsvorlagen gegen den freigegebenen Messplan

**Datum:** 09.08.2026 · **Prüfer:** unabhängige Prüf-Session (R03-A), ohne Sichtung des Git-Arbeitsbaum-Diffs (Verfahrensvorgabe: nur Datei-Endstand auf Platte, inhaltlich gegen den Plan)

## Prüfauftrag

Frisch erstellte Erhebungsvorlagen der BELEG1-Baseline gegen `beleg/baseline-messplan.md` (freigegebene Fassung inkl. Nachtrags-Kasten mit Freigabe-Nachträgen 1–4 und Prüfer-Befund-Vermerken) prüfen auf: (a) Deckung BM-1–BM-5 / E-1–E-5 inkl. Teilgrößen, (b) Widerspruchsfreiheit inkl. Beleg-Typ-Führung und Umsetzung der Nachträge, (c) Laientauglichkeit der Betreiber-Texte, (d) DÜRFEN/WISSEN-Trennung, (e) Substanz-Sync Markdown ↔ HTML-Druckfassung. Keine Änderungen an den geprüften Dateien; einziges Schreibprodukt ist dieses Protokoll.

## Gelesene Dateien (Leseumfang)

| Datei | Umfang |
|---|---|
| `beleg/baseline-messplan.md` | vollständig (Maßstab, inkl. Nachtrags-Kasten und aller Prüfer-Befund-Vermerke) |
| `beleg/vorlagen/tagesblatt-firzlaffs.md` | vollständig |
| `beleg/vorlagen/tagesblatt-rabes.md` | vollständig |
| `beleg/vorlagen/tagesblatt-hostel-boninstrasse.md` | vollständig |
| `beleg/vorlagen/interviewleitfaden-baseline.md` | vollständig |
| `beleg/vorlagen/druck/tagesblatt-firzlaffs.html` | vollständig |
| `beleg/vorlagen/druck/tagesblatt-rabes.html` | vollständig |
| `beleg/vorlagen/druck/tagesblatt-hostel-boninstrasse.html` | vollständig |
| `beleg/vorlagen/druck/interviewleitfaden-baseline.html` | vollständig |
| `heypensio\firzlaff\wissensbasis\verifizierungsprotokoll-2026-06-ist.md` | gezielter Grep auf F9/F11/F13 (Zitat-Anker-Prüfung der Vorbelegungen, L-01) |

Zusatz-Werkzeugprüfung: Wochentags-Etiketten aller in den Vorlagen genannten Termine per `Get-Date` verifiziert (L-07) — 23.08. So · 24.08. Mo · 29.08. Sa · 05.09. Sa · 07.09. Mo · 12.09. Sa · 19.09. Sa · 20.09. So: **alle Etiketten korrekt.**

---

## Befunde

### KRITISCH

**K-1 · Interviewleitfaden erklärt pauschal alle Interview-Antworten zu „gemessen" und gibt sie ohne Vermerk für Case Study/Sales-Deck frei**

- **Fundstelle:** `beleg/vorlagen/interviewleitfaden-baseline.md`, Abschnitt „Protokoll-Pflichtinhalte (nach dem Gespräch)", Punkt 4.
- **Aussage:** „Beleg-Typ pauschal für alles aus diesem Interview: **gemessen** — da die Betreiber die Verbuchung freigegeben haben, gelten die Interview-Bandbreiten als Messwerte und können in Case Study und Sales-Deck ohne weiteren Vermerk als solche ausgewiesen werden".
- **Warum Befund:** Dreifacher direkter Widerspruch zum Maßstab:
  1. Messplan § 1 (L-04-Vorbehalt), Punkte 1–2: Beleg-Typ wird am Messwert vermerkt und beim Verdichten NIE aufgewertet; Selbstauskünfte werden „nicht als ‚gemessen' verdichtet".
  2. Freigabe-Nachtrag 1: „Beleg-Typ der Schiene B ist und bleibt **Selbstauskunft mit L-04-Vermerk**" — die Betreiber-Freigabe deckt die Verbuchung „als von den Betreibern getätigte Angaben", nicht die Umetikettierung zu „gemessen".
  3. Freigabe-Nachtrag 2: „Beleg-Typ-Führung intern unverändert"; die Außen-Formulierung („gemessen" in Case Study/Sales-Deck) ist ein **dokumentierter offener Dissens**, dessen Entscheid ausdrücklich erst bei BELEG4/HANDEL2 (~Oktober) fällt. Punkt 4 nimmt diesen Entscheid einseitig in User-Richtung vorweg und macht ihn zur Protokoll-PFLICHT des Erhebungsdokuments.
  Der Satz widerspricht zudem dem eigenen Dokumentkopf desselben Leitfadens („Jede Antwort aus diesem Interview ist **Selbstauskunft** und wird mit L-04-Vermerk geführt") und der Interviewer-Regel 6. Ein Prüfer, der nur die Protokoll-Pflichtinhalte liest (das ist der Abschnitt, nach dem das Gesprächsprotokoll gebaut wird), erzeugt einen Datenbestand, in dem die Aufwertung schon an der Quelle passiert ist — danach ist sie durch keine nachgelagerte Verdichtungsregel mehr fangbar.
- **Korrekturvorschlag:** Punkt 4 ersetzen durch die Fassung, die die HTML-Druckfassung bereits trägt: „Beleg-Typ pauschal für alles aus diesem Interview: **Selbstauskunft (L-04)**; zugesagte Systemauszüge als eigene Posten mit Frist." Die Verbuchungs-Freigabe der Betreiber gehört (wie im Kopf und im DÜRFEN/WISSEN-Kasten korrekt geführt) NICHT als Beleg-Typ-Änderung in die Protokollregeln.

### MITTEL

**M-1 · Substanz-Divergenz MD ↔ HTML an genau der K-1-Stelle — die deklarierte Wahrheitsquelle ist die falsche Fassung**

- **Fundstelle:** `interviewleitfaden-baseline.md`, „Protokoll-Pflichtinhalte" Punkt 4, gegen `druck/interviewleitfaden-baseline.html`, Abschnitt „Protokoll-Pflichtinhalte" Punkt 4.
- **Aussage:** MD sagt „gemessen … ohne weiteren Vermerk"; HTML sagt „Selbstauskunft (L-04); zugesagte Systemauszüge als eigene Posten mit Frist". Alle übrigen Substanzpunkte der vier Dokumentpaare sind deckungsgleich (Feldlisten, Fragen, Termine, Kästen — einzeln abgeglichen).
- **Warum Befund:** Der Rollen-Kasten beider Fassungen erklärt die Markdown-Datei zur Wahrheitsquelle: „Wer hier ändert, zieht die Druckfassung im selben Zug nach." Beim nächsten regulären Nachzieh-Zyklus würde also die messplanwidrige MD-Fassung (K-1) in die Druckfassung übertragen und die aktuell korrekte HTML-Zeile überschrieben. Die Divergenz ist damit nicht nur ein Sync-Fehler, sondern ein geladener Mechanismus, der K-1 in das Dokument trägt, das der User physisch in der Hand hält.
- **Korrekturvorschlag:** MD-Punkt 4 auf die HTML-Fassung korrigieren (siehe K-1) — NICHT die HTML an die MD „nachziehen". Fassungsnummer erhöhen (Rollen-Kasten-Regel).

**M-2 · Deckungslücke: Das Live-Protokoll real auftretender No-Shows im Messfenster (BM-3b/BM-3c) hat keinen Träger und keinen Briefing-Punkt**

- **Fundstelle:** Fehlstelle in allen vier Vorlagen; Maßstab: Messplan § 3 BM-3b („Live-Protokoll jedes im Messfenster real auftretenden Falls (Rohprotokoll)") und BM-3c („je real auftretendem No-Show im Messfenster der konkrete €-Wert samt Beleg (Rechnungs-/Buchungsauszug), eingesammelt vom User im Wochen-Check").
- **Aussage:** Die Tagesblätter kennen keinen Vorgangstyp/Hinweis für No-Show-Fälle (die Vorgangsliste deckt nur Rezeptions-Präsenzvorgänge); der Interviewleitfaden erhebt in BM-3.1–3.5 nur die rückblickenden Schätzungen und weist in Teil 3 (Übergabe) den Betreiber an keiner Stelle an, im Messfenster auftretende No-Shows zu notieren oder deren €-Beleg bereitzuhalten. Der Interviewer-Hinweis unter BM-3.5 SAGT zwar korrekt, dass belegte €-Werte „nur je real auftretendem Fall im Messfenster" entstehen — aber kein Dokument erzeugt diesen Fall-Datenpunkt.
- **Warum Befund:** BM-3b/3c sind Pflichtgrößen; ihre einzige Rohprotokoll-/Einzelbeleg-Schiene (und nach Nachtrag 2 die einzige „echte Messsubstanz" bei BM-3 neben Systemauszügen) fällt ersatzlos aus, wenn niemand im Briefing vereinbart, WIE ein No-Show-Fall gemeldet wird. Nach dem Messfenster ist das nicht nachholbar.
- **Korrekturvorschlag:** In Teil 3 des Leitfadens einen Übergabepunkt ergänzen (z. B.: „☐ Vereinbaren: Jeder No-Show im Messzeitraum wird mir zeitnah gemeldet — Datum, Portal/Direktbuchung, offener Betrag; Rechnungs-/Buchungsauszug als Foto. Abfrage zusätzlich in jedem Samstags-Check."). Alternativ/ergänzend eine No-Show-Zeile als Vorgangstyp aufs Tagesblatt; die Briefing-Vereinbarung ist der kleinere Eingriff und deckt beide Teilgrößen.

**M-3 · Hostel-Sammel-Anlage: die behauptete Erkennbarkeit nachgetragener Blätter trägt nicht, und das Blatt widerspricht sich selbst**

- **Fundstelle:** `tagesblatt-hostel-boninstrasse.md`, Abschnitte „Fußzeile des Blatts" (Sammel-Anlage-Hinweis) und „Herkunft der Felder" (Beleg-Typ-Folge); Anleitung Punkt 5 auf demselben Blatt; identisch in der HTML-Druckfassung.
- **Aussage:** Die Fußzeile erlaubt, „Blätter der Tage seit dem letzten Besuch gesammelt anlegen"; die Herkunfts-Notiz behauptet, die Auswertung „erkennt das am Verhältnis Blattdatum/Übergabedatum und stuft entsprechend ein". Gleichzeitig sagt Anleitung Punkt 5 desselben Blatts: „nichts aus dem Gedächtnis nachtragen. Lieber eine Lücke als eine geschätzte Uhrzeit."
- **Warum Befund:** Zweifach. (1) Der Erkennungsmechanismus ist überschießend behauptet: Übergabedatum ist der Samstags-Foto-Termin für ALLE Blätter der Woche — ein am Donnerstag rückwirkend für Montag angelegtes Blatt trägt das Montags-Datum und ist am Samstag von einem zeitnah geführten Blatt nicht unterscheidbar. Die Beleg-Typ-Einstufung (Rohprotokoll vs. rückblickende Selbstauskunft, Messplan § 1/§ 7) würde damit systematisch zu hoch vergeben — genau die Aufwertungs-Richtung, die der Plan verbietet. (2) Der Laie erhält auf einem Blatt zwei gegenläufige Anweisungen (nachtragen verboten vs. gesammelt anlegen erlaubt) ohne Auflösungsregel.
- **Korrekturvorschlag:** Auf dem Hostel-Blatt ein Zusatzfeld „angelegt am: ____" (neben „Datum") oder ein Ankreuzfeld „☐ nachträglich angelegt" in der Kopfzeile; Anleitung Punkt 5 für das Hostel um einen Halbsatz ergänzen („Ausnahme: siehe Fußzeile — gesammelt angelegte Blätter bitte als solche kennzeichnen"). Die Herkunfts-Notiz entsprechend auf den ehrlichen Mechanismus umstellen (Selbstdeklaration statt Datums-Inferenz).

### GERING

**G-1 · HTML-Tagesblätter: Spalte „Musste jemand da sein?" ohne die erklärende Klammer der MD-Fassung**

- **Fundstelle:** alle drei `druck/tagesblatt-*.html`, Tabellenkopf Spalte 5, gegen MD-Abschnitt „Tabellenspalten", Spalte 5 („☐ ja ☐ nein (ging auch ohne / per Telefon)").
- **Warum Befund:** Auf dem Druckblatt fehlt die Erläuterung, wann „nein" anzukreuzen ist, und keiner der fünf Anleitungspunkte erklärt die Spalte. Für BM-2b/BM-2c ist genau diese Unterscheidung die Story-Zahl (Messplan § 3); ein Laie ohne Erklärung kreuzt im Zweifel „ja" (er WAR ja da) — Verzerrung in die für die Story günstige Richtung. Substanz-Sync-Lücke, klein aber messrelevant.
- **Korrekturvorschlag:** Kurzform in den Spaltenkopf („nein = ging auch ohne / per Telefon") oder als Halbsatz in Anleitungspunkt 1.

**G-2 · Zählweg-Auflösung: Plan fordert „Minuten:Sekunden", das Blatt erfasst Uhrzeiten in HH:MM**

- **Fundstelle:** alle drei Tagesblätter, Spalten 1–2 (`__:__` als Uhrzeit), gegen Messplan § 3 BM-1 Zählweg („Minuten:Sekunden je Einzelvorgang; Erfassung per … Uhrzeit-Start/Ende je Vorgang").
- **Warum Befund:** Der Plan trägt beide Angaben selbst (Sekunden-Auflösung UND Uhrzeit-Erfassung); die Vorlage wählt nachvollziehbar die laienfreundliche Uhrzeit-Variante — damit ist die Dauer aber nur minutengenau, und bei typischen Check-ins von wenigen Minuten ist der Rundungsfehler relativ groß. Kein Widerspruch im engen Sinn, aber der spätere Zählweg-Vermerk darf dann nicht „Minuten:Sekunden" lauten.
- **Korrekturvorschlag:** Kein Blatt-Umbau (Sekunden-Stoppung ist für Laien unrealistisch und war erkennbar nicht gemeint); stattdessen im Messwerte-Dokument (§ 7) den Zählweg als „minutengenau aus Uhrzeit-Differenz" führen und die MD-Herkunftsabschnitte um diesen Satz ergänzen, damit die Abweichung vom Plan-Wortlaut dokumentiert ist.

**G-3 · Kayhan-Kommunikations-Konventionen stehen nur in der HTML-Fußzeile, nicht in der MD-Wahrheitsquelle**

- **Fundstelle:** `druck/interviewleitfaden-baseline.html`, Fußzeile („Kommunikations-Konventionen Kayhan: Du-Form, nie ‚Kay', CC hotel-firzlaff@web.de") — in `interviewleitfaden-baseline.md` nirgends vorhanden.
- **Warum Befund:** Sync-Abweichung in der Gegenrichtung: Die Druckfassung trägt Substanz, die die deklarierte Wahrheitsquelle nicht kennt. Inhaltlich ist der Zusatz richtig (Messplan § 4), aber beim nächsten Neuerzeugen der Druckfassung aus der MD fiele er stumm weg.
- **Korrekturvorschlag:** Konventionen in die MD aufnehmen (z. B. bei den Interviewer-Regeln oder als Fußnote), Fassungsnummer erhöhen.

**G-4 · Wörtliche Fragen durchgehend in Du-Form, obwohl die Erheber Rabe's/Hostel unbekannt sind**

- **Fundstelle:** `interviewleitfaden-baseline.md`, Teil 1 (z. B. BM-1.1 „Gast steht vor dir", BM-3.1 „den du erinnerst") und E-5 („schickst du mir") — dieselben Fragen gelten laut Teil 1 je Objekt für alle drei Häuser.
- **Warum Befund:** Die Du-Form ist als Kayhan-Konvention belegt (Messplan § 4); wer bei Rabe's/im Hostel antwortet, ist ausdrücklich offen (E-1/E-2). Eine als „wörtlich stellbar" ausgezeichnete Frage in falscher Anredeform ist für den Verwender eine kleine Stolperfalle im Gespräch. Kein Plan-Widerspruch, reine Verwendbarkeit.
- **Korrekturvorschlag:** Ein Satz in den Interviewer-Regeln („Anrede an die Person anpassen; Du-Form ist die Kayhan-Konvention").

---

## Geprüfte Negative (Suchweg, kein Befund)

- **(a) Deckung BM/E vollständig:** Frage-für-Frage-Abgleich Messplan § 3/§ 6 gegen Leitfaden Teil 1/Teil 2 und Tagesblatt-Spalten. BM-1 (Blatt + BM-1.1–1.3), BM-2a (BM-2.1: Dienstplan-Vorrang + Stunden-Schätzung), BM-2b (Blatt-Spalte 5 + BM-2.3), BM-2c (BM-2.4 mit exakt den vier Plan-Vorgangstypen + Gegenprobe-Hinweis M-3 des Plans), BM-3a (Teil 0-Definition wortgleich + BM-3.1/3.2 + E-3), BM-3b (BM-3.3/3.4 — Interview-Teil gedeckt; Live-Teil siehe Befund M-2), BM-3c (BM-3.5 + Schätzungs-Vorbehalt), BM-4 (4.1/4.2), BM-5 (5.1/5.2, nur als Schätzfragen gemäß Nachtrag 3), E-1 bis E-5 je vollständig inkl. „nicht prüfbar"-Zulässigkeit, Zugangsweg-je-Handlung (E-3) und Kanal-Test im Termin (E-5). **Überschüssiges** (im Plan nicht Vorgesehenes): nur die Vorbelegungen BM-2.2/E-4 — geprüft, siehe nächster Punkt; sonst nichts.
- **Vorbelegte Werte an der Rohquelle:** F9 („Rezeption ist bis 21 Uhr besetzt"), F11 (Schlüsselkasten nur nach telefonischer Absprache/Einschätzung), F13 (nachts grundsätzlich kein Check-in, Ausnahme nach telefonischer Einschätzung) per Grep im `heypensio`-Verifizierungsprotokoll gegengelesen — substanzgleich übernommen, als Selbstauskunft Stand Juni 2026 gekennzeichnet, Bestätigungs- statt Übernahme-Mechanik: kein Befund.
- **(b) Termine/Zeitfenster:** Alle Termine der Vorlagen (Messfenster 24.08.–20.09., Wochen-Checks 29.08./05.09./12.09./19.09., H-4 07.09., Briefing bis 23.08., Firzlaff's-Start 24.08. ohne „späterer Start"-Zusatz, Rabe's/Hostel mit Zusatz gemäß G-6 des Plans) gegen Messplan § 5/§ 6 abgeglichen und Wochentage per `Get-Date` verifiziert: kein Befund.
- **(c) Umlaute/ASCII:** Alle acht Dateien tragen korrekte Umlaute (Stichproben je Datei: „Ausgefüllt", „Schlüssel", „Störung", „Boninstraße", „höchstens"); keine ASCII-Transliteration im außenwirksamen Text: kein Befund. Fachjargon: „No-Show" wird vor der ersten Zahlenfrage definiert (Teil 0); „OTA" ist auf den Blättern zu „Portal" übersetzt; Messgrößen-Kürzel (BM-x) erscheinen auf den Betreiber-Blättern nicht: kein Befund über G-1 hinaus.
- **(d) DÜRFEN/WISSEN:** Alle Fragen der Teile 0–2 einzeln durchgesehen: keine Einwilligungs-/Freigabe-Erhebung zwischen Sachfragen; der Kasten „Was dieses Interview NICHT ist" verweist Referenz-Einwilligung und schriftliche Verbuchungs-Freigabe korrekt auf BELEG2 als eigene bewusste Akte und regelt spontane Betreiber-Zusagen (notieren, nicht als erledigt behandeln). Grenzfall geprüft: E-3 „Darf Qays das mit euch zusammen am Bildschirm ziehen?" ist eine Erlaubnisfrage, aber eine operative Zugangs-Absprache, die der Messplan (§ 4 Zugangsweg-je-Handlung, E-3) genau so beauftragt — kein rechtswirksamer Akt im Sinne der Regel: kein Befund.
- **(e) MD↔HTML-Substanz:** je Dokumentpaar Abschnitt für Abschnitt abgeglichen (Kopffelder, Ankreuzkasten „Heute keine Vorgänge", fünf Anleitungspunkte, sieben Spalten samt Kürzel-Legende, Fußzeilen inkl. Objekt-Differenzen, alle Interview-Fragen/Raster/Hinweise/Checklisten): über M-1, G-1 und G-3 hinaus keine Abweichung. Layout-Unterschiede (Kürzel statt ausgeschriebener Ankreuzfelder, Grid-Anleitung) sind in den MD-Dateien als beabsichtigt deklariert.
- **BM-2a-Ist-Abgleich der Messwochen** („wer stand tatsächlich wann da", Messplan § 3): hat keinen Vorlagen-Träger, ist aber im Plan dem Wochen-Check (User-Handgriff H-5) zugewiesen, nicht den hier beauftragten Vorlagen — als bewusst nicht verfolgt eingestuft, kein Befund gegen die Vorlagen.

---

## Zusatzfrage: Welche Art von Verfälschung hätte dieses Prüfverfahren NICHT gefangen?

Ehrliche Antwort — vier Klassen, je mit konkretem Beispiel:

1. **Verfälschungen im Maßstab selbst.** Ich habe die Vorlagen gegen den Messplan geprüft, wie er auf der Platte liegt — den Messplan selbst aber gegen nichts (Diff-Sichtung war mir verfahrensbedingt untersagt, und die Freigabe-Rohquelle liegt in `sensibel/` bzw. beim User). Wäre der Nachtrags-Kasten des Messplans nach der Freigabe manipuliert worden (z. B. Nachtrag 2 um den Dissens-Absatz gekürzt), hätte ich die Vorlagen für konsistent mit einem verfälschten Maßstab erklärt. Mein Verfahren findet Abweichungen VOM Plan, nicht Abweichungen DES Plans.
2. **Konsistente Verfälschung über MD und HTML hinweg.** K-1 wurde nur deshalb doppelt fangbar, weil MD und HTML divergieren. Hätte jemand dieselbe Beleg-Typ-Aufwertung in BEIDE Fassungen geschrieben, wäre sie mir nur über den Messplan-Abgleich aufgefallen — der bei subtileren Fällen versagt: z. B. eine still von „bis 21 Uhr" auf „bis 22 Uhr" verschobene Vorbelegung hätte ich ohne den (freiwilligen) Grep in die Rohquelle F9 nicht bemerkt; für Werte, deren Rohquelle ich nicht gelesen habe (z. B. „~60 % OTA", Unit-Zahlen aus A/A8), habe ich nur die Binnenkonsistenz mit dem Messplan geprüft, nicht die Extraktions-Kette bis zur Quelle.
3. **Wirkung des gedruckten Artefakts.** Ich habe die HTML-Dateien als Text gelesen, nicht gerendert. Ob die A5-Blätter tatsächlich auf eine Seite passen, Zeilenhöhen von 5,1–5,4 mm handschriftlich beschreibbar sind, die 6,5-pt-Anleitung lesbar ist oder ein Umbruch die Tabelle zerreißt — also die Frage, ob der Betreiber das Blatt real führen KANN — liegt außerhalb dieses Verfahrens (Anwesenheit ist nicht Wirksamkeit: mein Text-Abgleich prüft Substanz, kein Druckbild). Gleiches gilt für Encoding-Probleme, die erst der Druckweg erzeugt.
4. **Auslassungen, die der Plan nicht explizit macht.** Meine Deckungsprüfung lief entlang der Plan-Systematik (BM/E/H-Nummern). Eine Verfälschung durch Weglassen von etwas, das der Plan nur implizit trägt, fange ich nur, wenn ich die Implikation selbst ziehe — M-2 (No-Show-Live-Protokoll ohne Träger) habe ich gefunden, aber diese Klasse ist prinzipiell lückenhaft: z. B. habe ich NICHT systematisch geprüft, ob jeder der zehn eingearbeiteten R02-Prüfer-Befunde des Plans einen Vorlagen-Niederschlag braucht und hat (geprüft nur: M-1, M-3, G-5, G-6 — die im Vorlagen-Text referenzierten).

Zusammengefasst: Das Verfahren ist stark gegen Widersprüche zwischen den gelesenen Dokumenten und blind für Fehler, die außerhalb der gelesenen Dokumente oder unterhalb der Textebene liegen.
