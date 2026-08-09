# R02-A — Prüfprotokoll: BELEG1-Baseline-Messplan (unabhängiger Prüfer)

**Datum:** 09.08.2026
**Prüfgegenstand:** `beleg/baseline-messplan.md` (Status ENTWURF) in der
**Arbeitsbaum-Fassung** — die Datei ist gegenüber ihrem Anlage-Commit
`39fd48a` lokal verändert (`git status`: M, uncommittet). Geprüft wurde
der Arbeitsbaum-Stand; der Diff zum Commit wurde **bewusst nicht
gesichtet** (eine angekündigte Verfahrens-Positivkontrolle im
Arbeitsbaum wäre darüber trivial auffindbar gewesen — die Prüfung sollte
inhaltlich tragen, nicht forensisch).
**Prüfer:** unabhängige Prüf-Session mit frischem Kontext (R02-A-Auftrag
der beauftragenden Session). Keine Änderung am Prüfgegenstand, kein
Commit durch den Prüfer.

**Vollständig gelesene Quellen:**

1. `beleg/baseline-messplan.md` (ganz)
2. `projektquelle-mkt.md` § 2 „STRÄNGE UND ARBEITSPAKETE" (kompletter
   Abschnitt inkl. MKT-BELEG/BELEG1–BELEG4 und Offenlegungs-Vermerk
   Kayhan; zusätzlich Treffer-Sichtung der übrigen BELEG-Nennungen der
   Datei per grep)
3. `fund/positionierungspapier.md` § 5 „Beleg-Basis" (ganz)
4. `protokolle/R00-extraktion-projektquelle.md` (ganz, inkl. A/A7, A/A8,
   A/A11, A/A13, B/B4, B/B7, Abschnitt (d), Grenzen-Abschnitt)
5. Gezielt zur Zitatprüfung: `protokolle/R00-planpruefung-2026-08-09.md`
   (Abschnitt „Mindestens die Hälfte von AKQ braucht keinen Namen") und
   `fund/persona-validierungsplan.md` (Baustein 1,
   Kayhan-Konventionen)

**Kalender-Prämisse:** Die Rückwärtsrechnung (Kategorie 3) wurde unter
der im Auftrag gesetzten Prämisse „heute ist **Sa** 09.08.2026"
nachgerechnet (Projektkonvention; deckt sich mit den Etiketten
„Sa 16.08."/„Sa 23.08." im Plan). Siehe dazu auch „Grenzen des eigenen
Verfahrens", Punkt 6.

---

## Befund-Übersicht

| Schweregrad | Anzahl | Nummern |
|---|---|---|
| kritisch | 1 | K-1 |
| mittel | 3 | M-1, M-2, M-3 |
| gering | 6 | G-1 … G-6 |

---

## Kategorie 1 — Messgrößen ohne Zählweg

**Ergebnis: 2 Befunde (M-3, G-4); der Katalog ist im Kern sauber.**
Prüfweg: Für BM-1, BM-2a, BM-2b, BM-3a, BM-3b, BM-3c, BM-4, BM-5 wurde
je einzeln geprüft, ob Zählweg (Einheit, Definition), Erhebungsweg
(wer erhebt, womit), Zeitraum und Beleg-Typ benannt sind. BM-1, BM-2a,
BM-2b, BM-3a, BM-3b, BM-4 und BM-5 tragen alle vier Elemente; BM-3a
weist die Nicht-Prüfbarkeit der Systemauszüge korrekt als eigenes
mögliches Ergebnis aus.

### M-3 · BM-2-Modus-Teilerhebung ohne Zählweg/Erhebungsweg (mittel)

- **Fundstelle im Plan:** § 3, BM-2, Unterpunkt
  „Bemannt/unbemannt/fernbedient".
- **Aussage:** Der Plan kündigt an, je Objekt „AUCH den heutigen Modus
  je Vorgangstyp (Check-in tagsüber / Check-in spät / Anfrage /
  Störung)" zu erheben, und erklärt diese Daten zur „Vorher-Datenbasis
  für das Kernversprechen".
- **Begründung:** Anders als bei allen übrigen (Teil-)Messgrößen fehlen
  hier Zählweg, Erhebungsweg, Erheber und Beleg-Typ vollständig. Wird
  der Modus im Briefing-Interview erfragt, ist das eine Selbstauskunft
  einer interessierten Quelle (L-04) — genau die Kategorie, für die der
  Plan sonst überall Kennzeichnungspflicht setzt. E-4 deckt nur den
  Teilaspekt „Anreisen außerhalb besetzter Zeiten" ab, nicht die
  Vorgangstypen Anfrage/Störung. Eine „Vorher-Datenbasis für das
  Kernversprechen" ohne definierten Beleg-Typ ist später
  außenverwendungs-gefährdet.
- **Quellen-Gegenstelle:** Plan § 1 (eigene Messlatte: „jede Zahl
  außenverwendungsfähig — mit Zählweg, Nenner, Erhebungsdatum, Erheber
  und Beleg-Typ").

### G-4 · BM-3c ohne expliziten Erhebungsweg (gering)

- **Fundstelle im Plan:** § 3, BM-3c „Erlösausfall".
- **Aussage:** BM-3c nennt Zähleinheit (€ je Fall) und Beleg-Typ
  („voraussichtlich Selbstauskunft/Einzelbeleg"), aber keinen
  Erhebungsweg und keinen Erheber (Interview? Live-Fall-Protokoll?
  Rechnungs-/Folio-Auszug? wer sammelt die Einzelbelege?).
- **Begründung:** Die Kennzeichnungsregel („jede €-Zahl nur mit
  Einzelfall-Beleg, sonst Schätzung") fängt das Schlimmste ab, deshalb
  nur gering — aber ohne benannten Weg wird die Größe im Messfenster
  voraussichtlich schlicht nicht erhoben.
- **Quellen-Gegenstelle:** Plan § 1 (Messlatte, s. o.); § 4 Rollentabelle
  (BM-3c taucht in keiner Rollenzeile auf; die Erheber-Zeilen nennen nur
  „Tages-Strichlisten BM-1/BM-2b (+BM-4/5 …), Systemauszüge").

---

## Kategorie 2 — Pilotobjekt-Lücken

**Ergebnis: 2 Befunde (G-3, G-6); die Objektdaten selbst stimmen mit den
Quellen überein.** Prüfweg: Alle drei Objekte wurden durch jeden
Planteil verfolgt (§ 2 Messobjekte, § 3 je Messgröße, § 4 Rollen, § 5
Zeitplan, § 6 Handgriffe/E-Fragen, § 7 Dateiliste); die Objektdaten
wurden einzeln gegen Extraktion A/A8, B/B4, B/B7 gelesen.

**Verifiziert (Objektdaten):** Firzlaff's 23 Units mit Zählweg
21 Zimmer + 2 Apartments ✓ (A/A8); Garni, ~60 % OTA ✓ (A/A8); HANSE
Hotelbetriebsgesellschaft mbH mit ZWEI GF Husnia Rasuly-Mardanzai und
Kayhan Rasuly ✓ (B/B7); Rabe's ~25 Einheiten als Circa-Angabe erhalten ✓
(A/A8), Einzelunternehmen, USt-ID DE314335437 ✓ (B/B7); Hostel
Boninstraße 10–11 Einheiten, Langzeitgäste ✓ (A/A8), via LEANE (Leane
Mardanzai) ✓ (B/B4). Alle drei Objekte sind in Messgrößen („je
Objekt"), Rollen (drei Erheber-Zeilen), Zeitplan (Briefing-Zeile nennt
„Kayhan + Klärung Rabe's/Hostel") und § 7 (drei Messwerte-Dateien)
vertreten; die BM-5-Beschränkung auf Firzlaff's ist als bewusste
Empfehlung ausgewiesen, keine Lücke.

### G-3 · Systemlandschaft still auf alle drei Objekte generalisiert (gering)

- **Fundstelle im Plan:** Zweck-Block („Was gemessen wird: … HS/3 als
  Alt-PMS …, DIRS21 ohne PMS-Anbindung …") sowie § 3 BM-3a und § 5/H-4
  („HS/3-/DIRS21-/OTA-Auszüge" als Erhebungsweg für alle Objekte).
- **Quellen-Gegenstelle:** Extraktion A/A8 nennt HS/3/DIRS21 als
  Kern-Schmerz des Betreiber-Umfelds ohne Zuordnung je Objekt; ob das
  Hostel (Langzeitgäste, via LEANE) überhaupt HS/3 oder DIRS21 nutzt,
  ist im Repo nirgends belegt.
- **Begründung:** Der Plan behandelt die Systemlandschaft implizit als
  für alle drei Objekte gleich. E-3 fragt, OB die Systeme Exporte
  liefern — nicht, WELCHES Objekt welche Systeme nutzt. Gering, weil
  E-3 die Antwort faktisch miterzwingen dürfte; sauber wäre die
  Systemzuordnung je Objekt als eigene Briefing-Frage.

### G-6 · Ein-Briefing-Annahme für drei Ansprechwege (gering)

- **Fundstelle im Plan:** § 5 Zeitplan (eine Briefing-Zeile bis
  Sa 23.08. für „Kayhan + Klärung Rabe's/Hostel") und § 6 H-3.
- **Quellen-Gegenstelle:** B/B4 und B/B7 — drei verschiedene
  Rechtsträger (HANSE mbH · Einzelunternehmen Rabe's · via LEANE, Leane
  Mardanzai); für Rabe's ist laut Plan selbst (§ 2, E-1) nicht einmal
  belegt, wer dort die Rezeption besetzt.
- **Begründung:** Der Messstart 24.08. für ALLE drei Objekte hängt
  daran, dass ein einziges Briefing bis 23.08. auch die beiden Objekte
  klärt, deren Ansprechperson selbst erst Erhebungsfrage ist. Ein
  Ausweichpfad je Objekt (z. B. „Firzlaff's startet 24.08., Rabe's/
  Hostel starten nachlaufend mit eigenem kleinerem Nenner") fehlt; das
  Risiko-Register § 8 kennt nur den globalen Verzugsfall. Zusätzlich
  setzt der als „fernbedient" deklarierte Wochen-Check (H-5, Messenger)
  still voraus, dass auch die noch unbestimmten Erheber Rabe's/Hostel
  einen Messenger-Kanal zum User haben.

---

## Kategorie 3 — Machbarkeit im Zeitfenster vor Livegang

**Ergebnis: 1 kritischer Befund (K-1), 1 mittlerer (M-2), 1 geringer
(G-1).** Prüfweg: Rückwärtsrechnung selbst nachgerechnet (Prämisse
Sa 09.08.2026), Livegang-Anker gegen alle vier Quellen gelesen
(Projektquelle § 2, Positionierungspapier § 5, Extraktion Abschnitt (d),
Planprüfung Abschnitt „Mindestens die Hälfte von AKQ …"), Verzugs- und
Minimalfenster-Logik geprüft.

**Verifiziert:** Das Kern-Messfenster 24.08.–20.09. umfasst exakt
28 Tage = 4 volle Wochen ✓. Die Verzugslogik hält: Selbst bei zwei
Wochen Freigabe-Verzug (Start ~07.09.) bleiben die als Minimum
deklarierten 2 vollen Wochen bis 20.09. erhalten ✓. Der konservative
Planungsanker 22.09. als frühester plausibler „Ende
September"-Termin plus H-1 (Datum erfragen, Plan nachziehen) ist eine
saubere Behandlung des Umstands, dass im Repo kein Tagesdatum belegt
ist ✓. Die H-4-Vorziehung der Altdaten-Sicherung auf 07.09. (Schutz der
Alt-Historie vor dem Systemwechsel) ist quellenkonform begründet
(HS/3-Support-Ende 2026, A/A8 und Abschnitt (d)) ✓.

### K-1 · Zweck-Block nennt Livegang „Ende Oktober 2026" — mit falscher Quellenangabe (kritisch)

- **Fundstelle im Plan:** Zweck-Block der Präambel: „VOR dem
  PMS-Livegang (**Ende Oktober 2026**; Quelle Projektquelle § 2
  MKT-BELEG — danach unwiederbringlich)".
- **Quellen-Gegenstellen (vier, einstimmig):**
  1. Projektquelle § 2, BELEG1 — die im Satz benannte Quelle:
     „Baseline-Messung VOR PMS-Livegang (**Ende September**, danach
     unwiederbringlich)".
  2. Positionierungspapier § 5: „**PMS-Livegang Ende September 2026**".
  3. Extraktion Abschnitt (d) und A/A8: „**PMS-Livegang Ende
     September**".
  4. Planprüfung, Abschnitt „Mindestens die Hälfte von AKQ braucht
     keinen Namen": „Der PMS-Livegang **Ende September** ist der
     wichtigste Marketing-Termin des Jahres".
- **Zusätzlich interner Widerspruch:** Der Plan widerspricht sich
  selbst — § 5 („Anker: PMS-Livegang ‚Ende September 2026'
  (Projektquelle § 2; Extraktion A, Abschnitt d)", Planungsanker
  22.09.) und die gesamte Rückwärtsrechnung stehen auf Ende September.
  Auffällig außerdem: Das BELEG1-Zitat in § 1 elidiert per „[…]" exakt
  die Klammer „(Ende September, danach unwiederbringlich)" — also genau
  das Datum, dem der Zweck-Block widerspricht.
- **Begründung des Schweregrads:** Der Zweck-Block ist die Stelle, die
  ein eiliger Leser (User, Leitsession, Folge-Session) als
  Zusammenfassung liest. Wer ihm folgt, glaubt an einen Monat
  Zeitreserve, der nicht existiert — und eine auf Oktober verschobene
  Messung läge NACH dem realen Livegang: Die Baseline wäre nach allen
  Quellen unwiederbringlich verloren. Verschärfend trägt der Satz eine
  Quellenangabe, die das Gegenteil sagt (Pseudo-Beleg): Die Entwarnung
  „wir haben bis Ende Oktober" beglaubigt sich mit einer Quelle, die
  „Ende September" sagt. Vor jeder Freigabe zu korrigieren.

### M-2 · Übertrags-Schritt „bis Livegang" hat beim eigenen Anker null Puffer (mittel)

- **Fundstelle im Plan:** § 5 Zeitplan, letzte Zeile („bis Livegang |
  Übertrag in Messwerte-Dokumente (§ 7), BELEG1-Fertig-Kriterium
  ‚Messwerte dokumentiert'") in Verbindung mit dem Planungsanker
  22.09. und dem Einsammel-Termin 21.09. (H-6).
- **Quellen-Gegenstelle:** Projektquelle § 2, BELEG1: Unwiederbringlich
  ist die **Messung** vor dem Livegang; das Fertig-Kriterium „Messwerte
  dokumentiert" trägt keine Vor-Livegang-Frist.
- **Begründung:** Zwischen Rohprotokoll-Einsammlung (21.09.) und dem
  konservativen Anker (22.09.) liegt genau ein Tag für den kompletten
  Übertrag in drei Messwerte-Dokumente nach dem anspruchsvollen
  Feld-Set des § 7. Der Plan koppelt damit einen Schritt an die harte
  Livegang-Frist, der sachlich nicht daran hängt: Sind die Rohprotokolle
  gesichert, ist die Baseline gerettet — dokumentieren kann man auch
  nach dem Livegang. So wie geschrieben erzeugt die Zeile entweder
  unnötigen Termindruck oder (wahrscheinlicher) einen scheinbar
  gerissenen Termin. Die Trennung „Erhebung MUSS vor Livegang /
  Übertrag SOLL zeitnah" fehlt.

### G-1 · Wochentags-Etiketten intern inkonsistent (gering)

- **Fundstelle im Plan:** § 5 Zeitplan-Tabelle („Mo 24.08. – So
  20.09.", „Mo 21.09.") gegen § 5 Fließtext („22.09.2026 (Montag)")
  und die Sa-Etiketten (16.08., 23.08., Wochen-Check „jeden Sa").
- **Begründung:** Die Etiketten können nicht gleichzeitig stimmen —
  zwischen dem 24.08. und dem 22.09. liegen 29 Tage; ist der 22.09. ein
  Montag, ist der 24.08. ein Sonntag (und der 20.09. ein Samstag, der
  21.09. ein Sonntag). Unter der Projektprämisse Sa 09.08.2026 sind
  die Sa-Etiketten und „22.09. = Montag" konsistent, „Mo 24.08.",
  „So 20.09." und „Mo 21.09." je einen Tag daneben. Diese interne
  Unvereinbarkeit gilt unabhängig davon, welche Kalenderlesart man
  ansetzt (siehe Grenzen, Punkt 6). Fensterlänge (28 Tage) und
  Reihenfolge sind davon nicht berührt — deshalb gering; vor Freigabe
  glattziehen, weil Wochen-Checks auf „Sa" terminiert sind.

---

## Kategorie 4 — Verlorene Vorbehalte

**Ergebnis: 1 mittlerer Befund (M-1), 1 geringer (G-2); die großen
Quellen-Vorbehalte sind vollständig und teils vorbildlich übernommen.**
Prüfweg: Jeder Vorbehalt der Quellen (L-04/Kayhan, Circa-Angaben,
Terminal-Vertagung, „Bau ≠ Beleg ≠ Kundeneinsatz", Beleg-Typ-Systematik,
Offenlegungs-Vermerk) wurde einzeln im Plan gesucht; umgekehrt wurde
jede Faktenbehauptung des Plans daraufhin geprüft, ob die Quelle sie nur
als Vermutung/Zielbild trägt.

**Verifiziert (Vorbehalte erhalten):** L-04/Kayhan als „Quellen-Vorbehalt
über allem" mit operativer Beleg-Typ-Trennung und Nie-Aufwerten-Regel ✓;
Offenlegungsfrage korrekt bei BELEG2/BELEG4 belassen (deckungsgleich mit
dem Offenlegungs-Vermerk der Projektquelle) ✓; Rabe's ~25 als
Circa-Angabe mit Nacherhebungsauftrag erhalten ✓; Terminal-Vertagung
~2027 übernommen und richtig zur Abgrenzung „PMS-/Betriebs-Story, NICHT
Terminal-Story" verarbeitet ✓; „Bau ≠ Beleg ≠ Kundeneinsatz" samt
⚠️-nie-zu-✅-Regel in § 1/§ 7 ✓; Hostel-No-Show-Annahme ausdrücklich als
Vermutung mit Prüffrage E-2 markiert ✓; die 30er-Stichproben-Plausibilität
trägt ihren „nicht prüfbar bis Briefing"-Vorbehalt im Satz ✓.
Hervorzuheben: Die A/A13-Behandlung (Plan § 3, BM-2) VERSCHÄRFT den
Quellenstand sogar — „Kayhan checkt vom Handy ein" wird ausdrücklich
nicht als Ist-Beleg übernommen, sondern der Ist-Modus wird erhoben.

*(K-1 gehört sachlich auch in diese Kategorie — die verlorene bzw.
umgedrehte Kernaussage „Ende September, danach unwiederbringlich" —
ist aber oben unter Kategorie 3 ausgewiesen.)*

### M-1 · Beobachtungseffekt: unbelegte Richtungs-Entwarnung (mittel)

- **Fundstelle im Plan:** § 8 Risikotabelle, Zeile „Beobachtungseffekt
  bei Selbst-Stoppung": „Richtung des Effekts (eher schneller
  gearbeitet) macht die Vorher-Zahl konservativ — das ist für die
  spätere Story die unschädliche Richtung."
- **Quellen-Gegenstelle:** Keine — die Richtungsaussage hat keine Quelle
  im Repo; § 3/BM-1 selbst nennt den Effekt nur als „nicht heilbar",
  ohne Richtung.
- **Begründung:** Die Richtung ist gerade NICHT gesichert: Wer je
  Vorgang Uhrzeit-Start/Ende, Gasttyp und Besonderheit auf einen
  Strichzettel schreibt, verlängert den Vorgang auch (Protokollier-
  Mehraufwand steckt in der gemessenen Spanne, wenn das Ende erst nach
  der Notiz gestoppt wird). Dann wäre die Vorher-Zahl ÜBERzeichnet —
  für die spätere Vorher/Nachher-Story die schädliche Richtung
  (angreifbar überhöhte Baseline). Der Satz ist eine Entwarnung
  zugunsten der eigenen Aussage ohne Beleg — exakt das Muster, vor dem
  CLAUDE.md („der gefährlichste Satz ist die Entwarnung"; „Verdichten
  verliert den Vorbehalt … zugunsten der eigenen Aussage") warnt.
  Minimal-Fix: Richtung als offen ausweisen und im Zählweg festlegen,
  dass das Ende VOR der Notiz gestoppt wird.

### G-2 · OTA-No-Show-Meldungen als Fakt ohne Primärquelle (gering)

- **Fundstelle im Plan:** § 3, BM-3a: „OTA-Extranet-Auszüge
  (Booking.com/Expedia führen No-Show-Meldungen)".
- **Quellen-Gegenstelle:** Keine im Repo; die Aussage stammt aus
  Weltwissen des Verfassers.
- **Begründung:** Ein Fähigkeits-Positiv über ein Drittsystem ohne
  Primärquelle (CLAUDE.md-Regel: solche Positive sind Hypothesen, bis an
  der Primärquelle belegt). Gering, weil der unmittelbar folgende Satz
  Existenz/Exportierbarkeit ausdrücklich für „nicht prüfbar" erklärt und
  nach E-3 verweist — der Klammerzusatz sollte aber als Erwartung, nicht
  als Fakt formuliert sein.

---

## Kategorie 5 — Bemannt/unbemannt-Prämissen der Erhebungswege

**Ergebnis: 1 geringer Befund (G-5); die Kategorisierung ist ansonsten
konsistent und quellenkonform.** Prüfweg: Jeder Erhebungsschritt
(Tages-Strichliste, Systemauszüge, Wochen-Check, Briefing,
Rückwirkend-Sicherung H-4) wurde gegen seine im Plan behauptete
Kategorie und gegen die stillen Zugangs-/Anwesenheits-Prämissen geprüft.

**Verifiziert:** Tages-Strichliste = bemannt, deckungsgleich mit dem
Messgegenstand BM-1 (der ohnehin eine anwesende Person misst) ✓;
unbemannte Anreisen werden nicht in die Dauer-Stichprobe gemischt,
sondern als eigene Kategorie geführt — saubere Trennung des leeren
Zustands ✓; Systemauszüge = bemannt beim Betreiber ODER fernbedient
durch User, wobei der Zugangsweg je Handlung im Briefing zu klären ist
und ausdrücklich nicht als „geklärt" übernommen wird (E-3) —
deckungsgleich mit der CLAUDE.md-Regel-4-Logik ✓; die Aussage „Kein
Erhebungsschritt setzt unbemannten Betrieb voraus" hält der
Einzeldurchsicht stand ✓. Die Prämisse „Wochen-Check fernbedient setzt
einen Messenger-Kanal auch zu den noch unbestimmten Erhebern voraus"
ist als Teil von G-6 (Kategorie 2) ausgewiesen.

### G-5 · Zählung unbemannter Anreisen ohne Erhebungsweg/Beleg-Typ (gering)

- **Fundstelle im Plan:** § 3, BM-1, Erhebungsweg: Anreisen ohne
  anwesende Person „werden … als eigene Kategorie gezählt (Anzahl +
  heutiger Behelfsweg als Freitext)".
- **Quellen-Gegenstelle:** Plan § 1 (Beleg-Typ-Pflicht je Messwert);
  E-4 (fragt nur den heutigen Umgang + Häufigkeit im Briefing ab).
- **Begründung:** WER zählt diese Vorgänge WIE? Die anwesende
  Rezeptionsperson erfährt von einer unbemannten Anreise naturgemäß
  erst nachträglich — die Zählung ist damit faktisch eine
  rückblickende Selbstauskunft, kein Rohprotokoll, und braucht den
  entsprechenden Beleg-Typ-Vermerk. Der Plan lässt Erhebungsweg und
  Beleg-Typ dieser Nebenkategorie offen, obwohl gerade sie die
  Ortsunabhängigkeits-Story stützen soll.

---

## Grenzen des eigenen Verfahrens

Klassen von Verfälschungen, die diese Prüfung strukturell NICHT gefangen
hätte:

1. **Verfälschungen, die bereits in den Pflichtquellen stehen oder mit
   ihnen konsistent sind.** Ich habe den Plan gegen die Repo-Quellen
   gemessen, nicht gegen deren Rohquellen: Die Objektzahlen (23 Units,
   ~25, 10–11, ~60 % OTA), Firmierungen und Termine habe ich nur bis
   zur Extraktion bzw. zum Positionierungspapier zurückverfolgt — nicht
   bis `heypensio\firzlaff\projektquelle-heypensio.md` oder gar externe
   Belege (Register, Verträge). Die Extraktion warnt selbst („fast
   alles aus Changelog-Verdichtungen … Zahlen vor Außenverwendung an
   der jeweiligen Quelldatei gegenlesen"). Eine Zahl, die schon in der
   Extraktion falsch wäre — oder eine Verfälschung, die Plan UND eine
   Quelle gleichermaßen träfe — bliebe unentdeckt.
2. **Aussagen ohne Repo-Gegenstelle.** Weltwissen-Behauptungen
   (OTA-No-Show-Meldungen, Plausibilität von 30 Check-ins in 2 Wochen,
   Verfügbarkeit der Betreiber für ein Briefing bis 23.08.) konnte ich
   nur auf Kennzeichnung und Plausibilität prüfen, nicht auf Wahrheit —
   ich habe keine externen Quellen abgerufen und keine Systeme (HS/3,
   DIRS21, OTA-Extranets, Apaleo) befragt.
3. **Auslassungen jenseits des BELEG1-Solls.** Vollständigkeit habe ich
   gegen den BELEG1-Dreiklang (Check-in-Dauer, Personalaufwand,
   No-Show-Handling) und die genannten Quellen geprüft. Eine Messgröße,
   die KEINE Quelle fordert, die aber für die spätere Case Study
   sachlich fehlen würde, hätte ich nur zufällig bemerkt — dasselbe
   gilt für ein komplett fehlendes Thema (z. B. wäre mir eine ersatzlos
   gestrichene Datenschutz-Grenze aufgefallen, ein fehlender einzelner
   Unterpunkt darin eher nicht).
4. **Nicht gelesene Quellen.** Von der Projektquelle habe ich § 2
   vollständig und weitere Stellen nur treffergeleitet (grep) gelesen;
   vom Positionierungspapier nur § 5 (plus Überschriftenbild); von
   Planprüfung und Persona-Validierungsplan nur die zitatrelevanten
   Abschnitte. Ein Widerspruch des Plans zu einem NICHT zitierten
   Abschnitt dieser Dokumente (oder zu STATUS.md, Tagesplan,
   zentrale-Repo) läge außerhalb meines Suchraums.
5. **Rechts- und Fachprüfung.** Die Datenschutz-Grenze (§ 7) und die
   Meldeschein-/Gastdaten-Behandlung habe ich auf Konsistenz mit den
   Projektregeln geprüft, nicht auf Rechtskonformität (DSGVO-Bewertung
   von Zettel-Fotos mit Gastdaten in `sensibel/`, Messenger-Transport
   von Fotos mit Personenbezug). Eine dort eingebaute fachliche
   Verfälschung könnte ich nicht von einer echten Rechtsfrage
   unterscheiden.
6. **Kalender-Prämisse.** Die Wochentagsprüfung (G-1) steht auf der
   Auftrags-/Projektprämisse „Sa 09.08.2026". Nach bürgerlichem
   Kalender fällt der 09.08.2026 auf einen Sonntag — dann wären
   spiegelbildlich die Sa-Etiketten und „22.09. (Montag)" die falschen
   und „Mo 24.08."/„So 20.09."/„Mo 21.09." die richtigen. Der Kern des
   Befunds (interne Unvereinbarkeit beider Etikett-Gruppen) gilt unter
   beiden Lesarten; WELCHE Gruppe zu korrigieren ist, habe ich nicht
   entschieden — das sollte die Leitsession an einem echten Kalender
   festmachen.
7. **Bewusst nicht gezogener Diff.** Der Arbeitsbaum weicht vom Commit
   `39fd48a` ab; ich habe den Diff absichtlich nicht gelesen (s. Kopf).
   Preis dieser Entscheidung: Eine Verfälschung, die inhaltlich
   plausibel bleibt und keiner gelesenen Quelle widerspricht, hätte ich
   nicht gefunden, obwohl sie im Diff sofort sichtbar wäre.
8. **Einzelprüfer ohne zweiten Lesekanal.** Alle Negativ-Aussagen dieses
   Protokolls („keine weitere Fundstelle", „keine Quelle im Repo")
   stammen aus je einem Leseweg (Read/grep) ohne unabhängige
   Gegenprobe durch einen zweiten Agenten; als Positivkontrolle des
   Verfahrens dienten die verifizierten Übereinstimmungen (Objektdaten,
   Kayhan-Konventionen, Zitat der Planprüfung), die der gleiche Prüfweg
   korrekt als Treffer erkannt hat.
