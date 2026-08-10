# R07-C — Abschlussmeldung (Session Lucky Roux, MKT-HANDEL)

> **Token-Verbrauch:** von der Session nicht erhebbar — Subagenten-Zahlen
> soweit bekannt: E-Mail 332.855 · DSGVO 284.765 + 301.625 (zwei Läufe) ·
> Newsletter 250.164 · Telefon 219.727 + 231.650 (zwei Läufe) ·
> Bestandskunden 217.724 · Rechtsfolgen 203.162 · LinkedIn 193.845 ·
> Messe 168.277 · Post (nicht zurückgekehrt, unbekannt). Summe der
> gemeldeten Werte **≈ 2,40 Mio**. ⚠️ Bei den zwei Agenten mit je zwei
> Läufen ist unklar, ob die zweite Zahl den ersten Lauf einschließt —
> die Summe kann insoweit doppelt zählen.
>
> **Modell:** an der Statuszeile **nicht verifizierbar** — die Statuszeile
> ist der Session nicht zugänglich, und die Selbstauskunft des Modells ist
> nach CLAUDE.md (Herkunft R24-B) kein Beleg. Die Angabe bleibt offen; sie
> ist an `/cost` oder der Statuszeile abzulesen.

---

## Block 1 — Gebaut und verifiziert

**`handel/kanal-rechtsmatrix.md`** (neu, 787 Zeilen), Commit **`5ef40c6`**.
⚠️ **Noch nicht gepusht** — Begründung in Block 2.

Aufbau: Kopf (Geltungsgrenze, Erhebungsstand, Zitierfalle, drei Achsen,
Belegstufen-Legende) · Übersichtsmatrix · Teil A (sieben Kanäle einzeln) ·
Teil B (Rechtsfolgen) · Teil C (DSGVO-Achse) · Teil D (Ableitung für
MKT-HANDEL/MKT-AKQ) · offene Punkte.

**Fertig-Kriterium erfüllt:** Für jeden der sieben beauftragten Kanäle steht
eine Zeile mit Einstufung, Norm-Fundstelle, Voraussetzung und der konkreten
Folge für den Zielkundenlisten-Bau. Der Kopf trägt Geltungsgrenze und
Erhebungsstand (Datum + Methode).

### Verifikation — kategorienweise mit Nenner

| Prüfung | Ergebnis |
|---|---|
| Mechanischer Zitatabgleich gegen selbst beschaffte Volltexte | **64 von 65 bestätigt.** Die eine Abweichung war ein fehlerhafter Prüfstring der Leit-Session (§ 5 DDG zu einer Wendung zusammengezogen), **kein Agentenfehler** |
| Selbsttest der Negativ-Aussagen über § 7 UWG | **35 Muster (15 `MUSS`, 20 `TREFFEN-NICHT`), 0 Abweichungen** |
| Primärquellen-Abrufe gesetze-im-internet.de | **21 von 21 HTTP 200 im ersten Versuch**; ein 22. Abruf (UWG-Anhang) gab 404 unter **geratenem** Pfad — als Aussage über die Vermutung gekennzeichnet, nicht über die Quelle |
| EU-Primärquellen | DSGVO, ePrivacy-RL (konsolidiert), RL 2006/114/EG, EuGH C-654/23 — je HTTP 200 über das Cellar-Repository, mit Positivkontrolle auf die deutsche Sprachfassung |
| Von der Leit-Session **selbst** im Volltext gegengelesene Entscheidungen | **4** — OLG Hamm 18 U 110/21, OLG Hamm 18 U 154/22, LG Düsseldorf 38 O 243/23 (alle NRWE), EuGH C-654/23 |
| Encoding des Dokuments | 0 Mojibake-Marker, 870 Umlaute als Positivkontrolle |
| Commit-Hygiene | `git show --stat`: nur `handel/kanal-rechtsmatrix.md`; fremde Arbeit (`fund/wettbewerbsbild.md`, `handel/foerderarchitektur-beraterrolle.md`, `protokolle/R07-A-pruefer.md`) unberührt |

### Eigenbefunde des Nachprüfdurchgangs (nicht von Agenten geliefert)

1. **Begriffsspaltung in § 7 Abs. 2 UWG.** Nr. 2 knüpft an „elektronische
   Post" an, Nr. 3 an „Nachricht" — und nur „Nachricht" ist legaldefiniert
   (§ 2 Abs. 1 Nr. 5 UWG). Folge: Wer die Nr.-2-Einordnung einer
   Plattform-Nachricht bestreitet, unterliegt trotzdem der Nr. 3.
2. **§ 20 Abs. 1 Nr. 1 UWG ist enger als seine Verweisung.** Der Verweis
   geht auf „Absatz 2 Nummer 1 oder 2", die Tathandlung ist aber auf
   Telefonanruf/Anrufmaschine **gegenüber einem Verbraucher** begrenzt.
   E-Mail, Fax und der B2B-Anruf fallen heraus. Wer nur die Verweisung
   liest, kommt zum falschen Ergebnis. *(Unabhängig auch von zwei Agenten
   gefunden.)*
3. **§ 13a Abs. 2 UWG hängt tatbestandlich an § 13 Abs. 4** und greift bei
   § 7-Verstößen daher **nicht** — der oft angenommene Kleinunternehmer-
   schutz trägt hier nicht. Der Deckel des Abs. 3 hängt dagegen **nicht**
   daran und kann greifen.
4. **OLG Hamm 18 U 110/21: drei Übertragbarkeitsgrenzen**, die im
   Agenten-Rücklauf fehlten — der Streitgegenstand war eine *Vertragsklage*,
   die Angeschriebenen waren *Verbraucher*, der Kanal waren
   *Portal-Kontaktformulare*.
5. **Fund, der eine als unbelegt markierte Lücke schließt:** Dieselbe
   Entscheidung sagt in Rn. 17, Art. 4 Nr. 11 DSGVO sei „zu seiner
   Auslegung heranzuziehen" bei § 7 Abs. 2 UWG. Ein Agent hatte die
   Übertragung des DSGVO-Einwilligungsbegriffs ausdrücklich als
   unbelegt/streitig geführt — sie steht jetzt auf einer obergerichtlichen
   Fundstelle.
6. **OLG Hamm 18 U 154/22 Rn. 46 trägt weiter als die Social-Media-Liste:**
   Die Begründung stellt auf die *Funktionsweise des Postfachs* ab
   (asynchron, serverseitig gespeichert bis Abruf) — das ist die Subsumtion
   unter Art. 2 lit. h ePrivacy und gilt für jedes Plattform-Postfach.
7. **EuGH C-654/23 selbst beschafft und gelesen.** Zwei Agenten hatten die
   Entscheidung als „nicht verifizierbar, nicht übernehmen" markiert, weil
   EUR-Lex blockt. Über das Cellar-Repository ging es. Wichtiger noch die
   **Reichweite**: Die Entwarnung (Art. 6 Abs. 1 DSGVO gilt nicht) betrifft
   ausschließlich den Bestandskunden-Fall des Art. 13 Abs. 2 ePrivacy — für
   Kaltakquise bleibt die Abwägung voll zu prüfen.
8. **LG Düsseldorf 38 O 243/23 selbst gegengelesen** — die Entscheidung,
   die den Postkanal neu bewertet. Eigene Kontrollmessung: **„§ 7 UWG"
   kommt im gesamten Urteil 0-mal vor** bei 109 Treffern für „DSGVO" —
   der Angriff auf Briefwerbung lief also rein datenschutzrechtlich. Und
   die Reichweitengrenze am Tenor selbst geprüft: Es betrifft
   **Verbraucher** (199 Treffer) in einem telekommunikationsrechtlich
   eingefärbten Sachverhalt — **kein B2B-Präzedenzfall**, auch wenn die
   Art.-14-Argumentation für jeden namentlich Angeschriebenen trägt.
9. **Umnummerierungs-Befund strukturell gehärtet.** Der Inhalt der
   weggefallenen alten Nr. 1 steht heute im Anhang zu § 3 Abs. 3 Nr. 26
   UWG (selbst im Gesamttext gefunden); und OLG Hamm zitiert im
   **Dezember 2021** noch die alte Zählung — das grenzt den
   Umstellungszeitpunkt selbst gelesen ein, ohne das BGBl.

---

## Block 2 — Offen geblieben

1. **⚠️ Der Commit ist NICHT gepusht — Entscheidung liegt beim User.**
   `git log origin/main..HEAD` zeigt **zwei** ungepushte Commits: meinen
   (`5ef40c6`) und einen fremden von R07-D (`d0a79f7`, der **ältere**).
   Sie sind linear verkettet — mein Commit lässt sich technisch nicht ohne
   den fremden pushen. Genau dieser Fall ist heute schon einmal als Fehler
   dokumentiert worden (`2aba3c6`, R07-B: „pauschaler Push nahm fremden
   Commit mit"). Ich habe deshalb **bewusst nicht gepusht**. Der lokale
   Arbeitsbaum ist geteilt, die Datei liegt also für alle Sessions vor.
   Auflösung: entweder R07-D pusht selbst (dann geht meiner mit), oder der
   User gibt den Mitnahme-Push frei.
2. **Der Postkanal-Agent kam erst nach Redaktionsschluss des ersten
   Commits** (Laufzeit gut 50 Minuten über den vorletzten). A7 wurde
   daraufhin vollständig überarbeitet und deutlich belastbarer — der
   Zwischenstand mit dünnerer Basis war rund eine Stunde lang im
   committeten Dokument. **Für die Zukunft:** Ein Kanal, dessen Recherche
   noch läuft, gehört entweder mit sichtbarem Vorbehalt hinein (so
   geschehen) oder der Commit wartet — die stille Variante wäre die
   gefährliche gewesen.
3. **Zwei Agenten lieferten nur ihren Nachtrag**, der Hauptbericht kam erst
   auf Nachforderung (Telefon, DSGVO). Beim E-Mail-Agenten kam **nur** der
   Nachtrag; die Substanz war darin enthalten, die Ziffern des
   Hauptberichts fehlen jedoch.
4. **Nicht erhoben** (im Dokument einzeln gelistet): Kommentarliteratur im
   Original · juris/beck-online · Volltexte LG Kleve 6 S 81/20, OLG
   Frankfurt 6 U 33/16, LG Baden-Baden 5 O 100/11 · Rechtsprechung zu
   Kontaktformularen · Beweislast speziell zu § 7 Abs. 2 Nr. 1 UWG ·
   deutsche Rechtsprechung zum Newsletter-Tracking · Änderungsgesetz der
   Umnummerierung am BGBl.

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

Jeder Befund mit Zielort; geprüft, ob der Zielort existiert.

1. **→ MKT-AKQ (Kanalmix), Zielort `fund/`-Strang bzw. Leitsession:** Die
   Matrix schließt genau die Kanäle, die eine Zielkundenliste am schnellsten
   skalieren würden. **Brief und persönlicher Vorkontakt haben längere
   Vorlaufzeiten als E-Mail** — das trifft den Terminkorridor „erster
   zahlender Kunde bis Mitte November 2026" unmittelbar und gehört in die
   Kapazitätsplanung, **bevor** der Zielkundenlisten-Bau startet.
2. **→ MKT-AKQ / Verbandsstrang:** Der **DEHOGA-Newsletter** (über 1.400
   Adressaten, Befund R05-A) ist rechtlich der sauberste Weg zu genau
   unserer Zielgruppe — der Verband versendet an seine **eigenen**
   Einwilligungen, wir liefern nur Inhalt. Das hebt den Partnerprogramm-
   Kanal aus R05-A von „Sichtbarkeit" zu „einziger skalierender
   E-Mail-Weg".
3. **→ MKT-AKQ, Internorga (März):** Der Lead-Bogen mit abgesetztem
   Einwilligungsfeld, Datenschutzhinweis und Erfassungsart-Ankreuzfeld muss
   **vor** der Messe stehen. Nachträglich ist an einem Messekontakt nichts
   zu heilen.
4. **→ MKT-OPS (VVT/AVV-Inventar, in CLAUDE.md als Deliverable geführt):**
   Die KMU-Ausnahme des Art. 30 Abs. 5 DSGVO **greift bei uns nicht** — sie
   entfällt schon bei „nicht nur gelegentlicher" Verarbeitung, und eine
   dauerhaft geführte Akquiseliste ist per Definition nicht gelegentlich.
   Das Verarbeitungsverzeichnis ist also Pflicht, unabhängig von der
   Mitarbeiterzahl.
5. **→ MKT-OPS / Zentrale:** Keine Benennungspflicht für einen
   Datenschutzbeauftragten unter 20 Personen — **aber** wer „geschäftsmäßig
   zum Zweck der Übermittlung" verarbeitet (Adressbestände an Dritte
   weitergibt oder für Dritte aufbaut), ist nach § 38 Abs. 1 S. 2 BDSG
   **unabhängig von jeder Kopfzahl** benennungspflichtig. Relevant, falls
   die Abteilung je Leadlisten für Kunden aufbaut.
6. **→ MKT-MARKE (Rebrand-Cutover):** Träger einer Kundenbeziehung im Sinne
   des § 7 Abs. 3 UWG ist der **Rechtsträger**, nicht der Name. Ein
   Namenswechsel bei identischem Rechtsträger berührt die
   Bestandskunden-Ausnahme nicht — ein Rechtsträgerwechsel schon.
7. **→ MKT-WEB:** Der BGH deckt ausdrücklich die *eingehende* Richtung
   (Anfragen potentieller Kunden an die veröffentlichte Adresse). Da der
   ausgehende Kaltkanal per E-Mail versperrt ist, verschiebt sich Gewicht
   auf die Website als Anfragen-Erzeuger.
8. **→ Zentrale-Postkorb (`zentrale/eingang/`) — bewusst NICHT geschrieben.**
   Geprüft, ob ein Befund die Firmen-Ebene betrifft: Die AVV-/VVT-Pflichten
   sind Abteilungssache und in CLAUDE.md bereits MKT-OPS zugeordnet; die
   DSB-Frage könnte firmenweit werden, ist aber erst bei Überschreiten der
   Schwelle entscheidungsreif. **Ausdrücklich als „bewusst nicht verfolgt"
   markiert**, damit die Leitsession es nachziehen kann, falls sie es
   anders sieht.

---

## Block 4 — Stolpersteine und bewährte Muster

### Fallen

1. **Backslash-Regex in `node -e` unter Bash zerbricht** — reproduziert die
   im Baustein `windows-powershell` dokumentierte Falle („Unterminated
   regexp literal"). Ausweg: Skriptdatei statt inline, und für einfache
   Zählungen `indexOf` statt Regex.
2. **`\b` im JS-String ist ein Backspace-Zeichen, nicht die Wortgrenze.**
   Ein Agent meldete, sein Selbsttest habe eine Zeile deshalb fälschlich als
   **bestanden** gemeldet — das Muster konnte nie treffen. Ein Prüfmuster,
   das nicht treffen kann, sieht im Log aus wie ein sauberes Negativ.
3. **NBSP (U+00A0) in amtlichen Texten** lässt Phrasensuchen ins Leere
   laufen („Art. 95", „1 000 Euro"). Ein Negativ, das nicht passen kann, ist
   zuerst ein Werkzeugfehler.
4. **„Letzter Artikel-Header davor" taugt nicht zur Artikelzuordnung** —
   Querverweise im Normtext (`Artikel 22` innerhalb von Art. 13 DSGVO) sehen
   aus wie Überschriften. Belastbar ist erst der Kontrast der
   Absatz-Einleitungen.
5. **Geratene URL-Pfade sind kein Negativbefund.** Dreimal belegt:
   `/tdddg/__25.html` → 404, richtig ist `/ttdsg/__25.html` (die Norm liegt
   weiter unter dem alten Pfad); `uwg_2004/anlage.html` → 404;
   `recht.bund.de/bgbl/1/2021/59/…` → 404.
6. **Kanal-Blockaden sind keine Quellen-Negative.** `eur-lex.europa.eu`
   antwortet curl **und** WebFetch mit HTTP 202 und leerem Body; das
   BGBl-Archiv und `recht.saarland.de` sind JS-Viewer ohne Nutzlast im HTML.
   Die amtlichen Inhalte waren über andere Kanäle vollständig erreichbar.
7. **Randnummern-Selbstauszählung aus PDFs ist keine belastbare
   Belegstufe.** Ein Agent zählte zweimal falsch — beide Male plausibel —,
   weil die Randnummer in der Textextraktion *hinter* ihrem Absatz steht.
   Entschieden hat erst ein **externer Anker** (die Zitierweise eines
   anderen Urteils).
8. **Die Prämisse des Auftrags war an zwei Stellen falsch.** (a) Der
   Start-Prompt sagte „handel/ gibt es noch nicht" — das Verzeichnis war bei
   Arbeitsbeginn bereits von R07-D angelegt. (b) Der Prompt erwartete für
   LinkedIn „voraussichtlich streitig" — die Recherche hat das mit
   dokumentiertem Suchraum widerlegt.
9. **Auch meine eigene Vorgabe an einen Agenten war falsch:** Ich hatte den
   Wortlaut von Art. 7 Abs. 1 DSGVO im Prompt zitiert — er entspricht nicht
   dem amtlichen deutschen Text. Der Agent hat es am Amtsblatt gefangen.
   **Ein im Prompt mitgeliefertes „Zitat" ist eine Annahme wie jede andere.**

### Bewährtes

1. **Eigener Normen-Anker vor dem Fan-out.** Die 28 selbst beschafften
   Volltexte haben den ganzen Nachprüfdurchgang mechanisch prüfbar gemacht —
   59 von 60 Fundstellen ließen sich per Skript bestätigen, statt sie einzeln
   nachzulesen. Das ist die billigste Absicherung gegen driftende Fundstellen.
2. **Aussage und Fundstelle getrennt prüfen.** Der mechanische Abgleich
   prüft nur die Fundstellen-Achse. Alle inhaltlichen Zusatzbefunde (Blöcke
   oben, Nr. 4–6) kamen erst aus dem **Lesen** der Entscheidungen — kein
   Skript hätte sie gefunden.
3. **Kontrollkandidat spiegelt die Suchmechanik.** Die Teilwort-Probe
   („esse" trifft 8× in „Adresse", während „Messe" 0× trifft) belegt, dass
   der Suchweg Teilzeichenketten findet — erst dadurch wird das Negativ
   belastbar.
4. **Agenten ausdrücklich auf den unbequemen Pol verpflichten.** Drei
   Agenten haben Auftrags-Prämissen widerlegt statt sie zu bestätigen. Der
   Satz „Wo die Rechtslage streitig ist, ist ‚streitig' der Eintrag, nicht
   der bequemere Pol" hat sichtbar gewirkt — einer schrieb ausdrücklich,
   „streitig" wäre hier der bequemere Pol gewesen.
5. **Querbefunde zwischen Agenten aktiv einsammeln.** Was ein Agent als
   unbelegt markierte, stand im Volltext, den ein anderer Strang lieferte
   (Block 1, Nr. 5). Die Lücken schließen sich erst beim Zusammenführen.
6. **Nachfordern statt rekonstruieren.** Bei zwei Agenten kam nur der
   Nachtrag an; die gezielte Nachforderung des Hauptberichts war billiger
   und belastbarer, als die fehlenden Teile aus dem Nachtrag zu erschließen.
