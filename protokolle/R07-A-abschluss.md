# R07-A — Abschlussmeldung

> **Session:** R07-A · Rolle **Ben Beckman** · Strang **MKT-FUND** ·
> Auftrag: Nacharbeit der offenen R05-A-Prüferbefunde in
> `fund/wettbewerbsbild.md`. Datum 10.08.2026.
>
> **Token-Verbrauch: von der Session nicht erhebbar — Subagenten-Zahlen
> soweit bekannt:** Zitat-Agent DEHOGA/BW+HH 135.729 · Zitat-Agent
> Dittlmann 113.487 · Zitat-Agent 42 GmbH 184.884 · Zitat-Agent Bräu
> 134.962 · Prüfer 314.058 → **Summe der gemeldeten Subagenten 883.120
> Token**. Der Verbrauch der Hauptsession selbst ist der Session nicht
> zugänglich; belastbar wäre nur `/cost`.
>
> ⚠️ **Modell dieser Session: nicht selbst verifizierbar.** Die
> Verifikation läuft laut CLAUDE.md ausschließlich über die Statuszeile
> oder `/cost` — beides ist der Session nicht zugänglich, und die
> Selbstauskunft des Modells ist ausdrücklich **kein** Kanal. Die Angabe
> im Start-Prompt („dein tatsächliches Modell an der Statuszeile
> verifizieren und melden") konnte deshalb **nicht** erfüllt werden.
> Das ist ein Ergebnis eigener Art, kein Versehen — der User kann es in
> einem Blick nachtragen.

---

## Block 1 — Gebaut und verifiziert

**Commits (alle gepusht, Gegenprobe `git branch -r --contains` nach
frischem `git fetch`):**

| Commit | Inhalt | Pfade |
|---|---|---|
| `1c9118d` | Teil 1 — B4.4, B8.3–B8.6, B9.1 am Rohbeleg | `fund/wettbewerbsbild.md` |
| `54f9593` | Teil 2 — zitatkritische Befunde | `fund/wettbewerbsbild.md` |
| `95bc3cc` | Teil 3 — Einstufung, Kanal, Preis-Scope, Beleg-Anhang B12 | `fund/wettbewerbsbild.md` |
| `b3e67ae` | Träger fortgeschrieben (TEIL 2, Bilanz mit Nenner) | `protokolle/R06-nacharbeit-R05A-befunde.md` |
| `1921c8d` | Teil 4 — eigener Prüferlauf eingearbeitet | `fund/wettbewerbsbild.md` · `protokolle/R06-nacharbeit-R05A-befunde.md` · `protokolle/R07-A-pruefer.md` |

### 1a. Disposition der R05-A-Befunde — kategorienweise MIT NENNER

Nenner ist der Auftragsumfang aus dem Träger (die in R5 liegen
gebliebenen Posten), **nicht** die Gesamtliste:

| Kategorie | Nenner | repariert | bewusst offen | Träger benannt |
|---|---|---|---|---|
| WICHTIG, nicht eingearbeitet | **10** | **10** | 0 | 0 |
| HINWEIS, nicht eingearbeitet | **10** | **10** | 0 | 0 |
| Restposten aus TEILWEISE | **5** | **4** | 0 | **1** (W-17) |
| Verdacht V-1 | **1** | 0 | 0 | **1** |
| **Summe** | **26** | **24** | **0** | **2** |

V-2/V-3 waren nicht Auftrag und bleiben wie in R05-A ausdrücklich nicht
verfolgt. Status je Einzelbefund mit Fundstelle und Rohbeleg-Datei:
`protokolle/R06-nacharbeit-R05A-befunde.md`, T2.2.

**Verfahren:** Jede Reparatur wurde **am Rohbeleg** gemessen
(`sensibel/rohbelege-R05-A/`), nicht aus dem Papier heraus
umformuliert. Damit ist die in § 5 des Trägers benannte Grenze („die
R5-Reparaturen wurden NICHT am Rohbeleg gegengeprüft") für die
bearbeiteten Befunde geschlossen. Für die vier zitatkritischen Befunde
lief je ein Subagent mit frischem Kontext auf dem jeweiligen
Quelldokument; Aussage und Fundstelle wurden getrennt geprüft.

### 1b. Disposition der Befunde des eigenen Prüfers — MIT NENNER

| Kategorie | Nenner | repariert | bewusst verworfen | Träger benannt |
|---|---|---|---|---|
| KRITISCH | **1** | **1** | 0 | 0 |
| WICHTIG | **4** | **4** | 0 | 0 |
| HINWEIS | **5** | **5** | 0 | 0 |
| Verdacht | **2** | 0 | 0 | **2** |
| nicht geprüft / nicht prüfbar | **3** | — | — | **3** |
| **Summe** | **15** | **10** | **0** | **5** |

Die 3 „nicht geprüft" sind: **W-15** (liegt in
`protokolle/R05-A-fundstellen.md`, außerhalb des Prüfauftrags) ·
die Abschnitte **B10, B11, B3, B7.1, B9.3, B9.4-Fließtext** ·
**Teil A §§ 1–4 und 5.3–6.5**. Alle drei sind als „nicht geprüft"
ausgewiesen, **nicht** als unauffällig.

### 1c. Verfahrens-Positivkontrolle — bestanden

Nach sauberem Commit + Push wurde **eine** bewusst falsche Kernaussage
in den Arbeitsbaum gebaut: „Mindestlaufzeit **12** Monate" statt
„3 Monate", samt der daraus gerechneten Einstiegssumme **11.548** statt
3.637 EUR/CHF — intern konsistent, sodass nur der Rohbeleg sie
widerlegt. Der Prüfauftrag untersagte ausdrücklich, den
Arbeitsbaum-Diff zu sichten.

**Ergebnis:** Der Prüfer hat den Fund als **KRITISCH (K-A)** gemeldet,
allein aus `a4/rrise_rm.txt` begründet, den Faktor 3,2 und die
Fehlerrichtung benannt — und zusätzlich bemerkt, dass Träger und Papier
an dieser Stelle auseinanderliefen. Rückbau per
`git checkout -- fund/wettbewerbsbild.md`; der Rückbau ist belegt
(„Mindestlaufzeit 3 Monate" und „3.637" wieder in der Datei), und die
Datei wurde vor allen weiteren Edits neu gelesen.

### 1d. Was sachlich am Papier hängt

Reparaturen mit Folgen über die Formulierung hinaus:
- **TC Hotel Marketing** von „—" auf **W1 (Teilleistung)** — der
  Anbieter adressiert wörtlich „Privathotels" und war als einziger des
  Strangs gar nicht eingestuft. Dazu die bisher **implizite**
  Vergabelinie **L-B1b** ausformuliert und der Bestand rückwirkend
  geprüft.
- **„Die Hotelberater" auf VORLÄUFIG** — das maßgebliche
  Zielgruppenkriterium ist unerhoben.
- **MEET THE EXPERTS auf W1 + K** — es ist zugleich ein
  Mitgliederkanal; neuer Prüfpunkt **P23**.
- **Preisuntergrenze DEHOGA BW** jetzt aus dem **Nettotagessatz 985 €**
  statt aus dem Eigenanteil — die alte Fassung wäre direkt in eine
  Preisentscheidung gewandert.
- **„in aller Regel straiv" / „De-facto-Standard" gestrichen**,
  Nenner 5 von 17.
- **Beleg-Anhang B12** neu — Fundstellen-Anker je Strang.
- Neue Prüfpunkte **P23, P24, P25**; **P8** zurückgeschnitten.

---

## Block 2 — Offen geblieben

1. **W-17-Rest — Einzelanker je Zitat.** B12 liefert Rohbeleg-Ordner,
   HTML-Zahl und Domains je Strang. Einzelanker (Datei + Zeile) stehen
   nur an den zitatkritischen Stellen (B5.2, B5.3, B8.3, B8.4, B8.5,
   B9.1, B9.2). Die übrigen Teil-B-Zitate tragen weiter nur den
   Anbieternamen. **In B12 Punkt 4 ausdrücklich als offen benannt.**
   **Träger: MKT-FUND, vor jeder außenwirksamen Weiterverwendung eines
   Teil-B-Zitats.**
2. **V-1-Rest — drei ungezählte B8-Zahlen.** Nachgezählt und bestätigt
   wurde die **15** (Mews-Beraterverzeichnis). **Nicht** nachgezählt:
   „17 betrachtete Anbieter", „genau zwei verkaufen die volle Kette",
   „3 von 17 nennen Beträge". Träger: MKT-FUND.
3. **W-15 ungeprüft** — liegt in `protokolle/R05-A-fundstellen.md`,
   außerhalb des Scopes dieser Session und des Prüfauftrags.
   „Nicht geprüft", nicht „in Ordnung".
4. **P20-Bestandszahl ungeklärt.** Der Rohbeleg-Ordner enthält nach
   eigener Messung **2134** Dateien (2128 in a1–a6 + 6 `msg*.txt`);
   P20 führt **2132** als Identitätsbeleg der Kopie. Welche zwei
   Dateien die Differenz ausmachen, ist **nicht entschieden**. Bis zur
   Klärung ist die Kopie-Identität nicht als belegt zu lesen — der
   Bestand selbst ist vollständig und war in dieser Session
   durchgehend benutzbar.
5. **Prüfer-Verdachtspunkte (2)** — als Verdacht geführt, nicht
   verifiziert; keine Handlung abgeleitet.
6. **Nicht geprüfte Abschnitte** (Prüferauftrag): B10, B11, B3, B7.1,
   B9.3, B9.4-Fließtext, Teil A §§ 1–4 / 5.3–6.5.

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

**An andere Stränge — mit Zielort:**

1. **→ MKT-HANDEL:** Der **Einstieg bei RevenueRise** kostet mindestens
   **879 × 3 + 1.000 = 3.637 EUR/CHF**, nicht 879. Ein „Korridor" ohne
   Einmalkosten und Bindung ist als Preisorientierung unbrauchbar.
   Zielort: Preismodell/Angebotsarchitektur. Der Zielort existiert und
   wird gerade bearbeitet (`handel/` ist in dieser Runde in fremder
   Session in Arbeit) — **Übergabe über die Leitsession**, nicht direkt.
2. **→ MKT-HANDEL:** **Zwei getrennte Größen** statt einer:
   Marktuntergrenze = **Nettotagessatz 985 € zzgl. MwSt je
   Beratungstag**; wahrgenommene Zahlungsschwelle beim Kunden =
   **250–635 €/Tag** (geförderter Eigenanteil). Wer beides vermischt,
   kalkuliert falsch.
3. **→ MKT-AKQ:** **P23 — Arbeitskreis ITK und Digitalisierung der IHK
   zu Lübeck.** Wer dort mitwirkt, sitzt auf der Beraterseite eines
   kostenlosen Angebots, das sonst unsere Zahlungsbereitschaft drückt.
   Kanal **und** Wettbewerbsentschärfung zugleich.
4. **→ MKT-AKQ:** **Designkontor SH** ist ein Eintragskanal **unter
   Vorbehalt** — die Quelle definiert den Kreis der „in Frage
   kommenden" Unternehmen über die **Wohlfühlatmosphäre**; ob unser
   Leistungsbild akzeptiert wird, ist zu **erfragen**, nicht
   anzunehmen.
5. **→ MKT-FUND:** **P25 — Brandnamics IT-/EN-Fassungen.** Das
   Nullergebnis „kein Wettbewerber in der Self-Check-in-/Meldeschein-/
   Zutritts-Technik" beruht allein auf der deutschen Fassung. Bei einem
   Südtiroler Anbieter könnte ein `alloggiati`-Produkt zuerst italienisch
   stehen — der Lauf könnte eine **Neu-Einstufung** auslösen.
6. **→ MKT-FUND:** **P24 — ADDITIVE** ist im eigenen Text zitiert, aber
   nicht erhoben und nicht eingestuft.

**Zum Papier selbst (bereits eingearbeitet, hier nur gemeldet):** acht
Befunde, die in **keinem** R05-A-Befund standen — darunter zwei harte
Zitatabweichungen in § 5.2 **in tragender Beweisführung** (fehlendes
„wir" mit Bedeutungsumkehr; „Hotels aller Größen" in Zitatform, obwohl
die Formulierung im ganzen Archiv nicht vorkommt). Vollständig in
`R06-nacharbeit-R05A-befunde.md` T2.3.

**Zwei R05-A-Befunde trugen selbst nicht** (T2.4): **W-3/Plaschke**
(Impressum-403 ist kein Preiskanal) und **H-9/Mews** („nicht prüfbar"
war ein zu enger Suchraum — der Punkt ist auflösbar und aufgelöst).

**Betriebs-/Git-Befunde:**
- Zwei eigene Pushes haben **fremde Commits mitveröffentlicht**
  (`99c45c1` R07-B, `b34bea0` R07-D, `a2e3e97` R07-C). Jeweils gesichtet
  und als bewusster Entscheidungspunkt behandelt; bei R07-D zusätzlich
  geprüft, ob mein Scope betroffen war (`git show --stat`: nur
  `handel/…`, keine Überschneidung). Im Repo unschädlich, aber die
  Sichtung muss ein **eigener Befehl** bleiben — in einer `&&`-Kette
  sichtet sie nichts.
- Uncommittete Fremdarbeit im `git status` (`handel/`, `.codex/`,
  `AGENTS.md`) durchgehend ignoriert.

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **⭐ Ein Regex über HTML ist eine Annahme über die
   Attributreihenfolge.** Mein Anker-Muster erwartete
   `rel="canonical"` **vor** `href`. HTML schreibt die Reihenfolge nicht
   vor: In einem Strang trugen **24 von 65** Dateien die umgekehrte.
   Das Muster meldete 35 ankerlose Dateien statt 11 **und ließ zwei
   Domains ganz aus der Tabelle fallen** — darunter ausgerechnet
   `smart-host.com`, den Gegenstand eines eigenen Kapitels. Der Fund kam
   erst durch den Prüfer. **Merksatz: Ein Negativ, das nicht passen
   kann, ist zuerst ein Werkzeugfehler — und bei Auszeichnungs-Parsing
   ist „nicht gefunden" fast immer das Muster.**
2. **⭐ `grep -c` zählt Zeilen, nicht Treffer — und das kollidiert mit
   dem Bestand.** Drei von mir gesetzte Positivkontrollen (11/30/50)
   waren Zeilenzählungen, während das Dokument sonst Treffer führt
   („13–284"). Dieselbe Datei trug dadurch zwei verschiedene Zahlen.
   Die Regel steht in CLAUDE.md — sie zu **kennen** genügt nicht, der
   Zählweg muss **an die Zahl**.
3. **⭐ Eine delegierte Zahl ohne Zählweg ist nicht übernehmbar.** Ein
   Zitat-Agent meldete „Positivkontrolle Hotel 65 Treffer". Der Wert
   reproduziert unter **keinem** Zählweg und über **keine** der Dateien
   einzeln (gemessen: 47/71/11/57/82). Der Nulltreffer, um den es ging,
   war unabhängig reproduzierbar — die Zahl daneben war es nicht.
   **Subagenten liefern Fundstellen zuverlässiger als Zahlen.**
4. **Ein `|` im Fließtext einer Markdown-Tabellenzelle zerlegt die
   Zeile.** Ausgerechnet in einer Fußnote, die einen Zählweg
   (`grep -oi … | wc -l`) dokumentieren sollte. Aufgefallen erst beim
   maschinellen Nachzählen der Einstufungen.
5. **Kurz-IDs kollidieren im eigenen Dokument.** `P22` war seit R06-A
   vergeben; ich habe sie erneut ausgegeben. Die Regel verlangt ein grep
   über die **Nachbardokumente** — hier hätte ein grep im **eigenen**
   gereicht.
6. **Eine Reparatur kann einen anderen Befund verschärfen.** Die
   TC-Heraufstufung (W-2) beseitigte die letzte „—"-Vergabe in B4.1 —
   und machte damit genau die Verteilung einseitiger, vor der K-3
   gewarnt hatte. Der K-3-Restposten war zudem nie eingearbeitet worden
   und stand in **keiner** Auftragsliste, weil K-3 als „eingearbeitet"
   geführt war. **Ein „eingearbeitet" im Träger ist kein Beleg.**
7. **Der Träger rechnete falsch** (44 statt 34/40, 37 statt 31, 24 statt
   20) — die Detaillisten waren richtig, nur die Summenzeile nicht.
   Derselbe Nenner-Verlust, den R05-A am Papier gerügt hat, eine Ebene
   höher. Auch meine eigene Korrektur war im ersten Anlauf falsch
   zusammengesetzt (K-4 doppelt) — **Summenproben ziehen, auch bei
   der Korrektur einer Summe**.
8. **Das persistente Arbeitsverzeichnis von Bash und PowerShell** hat
   zweimal zugeschlagen: Ein `cd` in den Rohbeleg-Ordner ließ einen
   späteren `grep` auf die Repo-Datei mit „No such file or directory"
   scheitern — die Datei existierte. Absolute Pfade sind Pflicht.
9. **Shell-Heredoc für Textdateien** brach an einem Anführungszeichen
   und riss den ganzen Befehl mit. CLAUDE.md sagt es für
   Commit-Messages; es gilt für **jeden** längeren Text — Write-Tool,
   dann `cat >>`.
10. **Der Klassifikator blockierte eine `&&`-Kette**, deren
    Einzelbefehle erlaubt waren (L-05). Zerlegen in Einzelbefehle löste
    es sofort.

### (ii) Bewährte Muster

1. **⭐ Die Verfahrens-Positivkontrolle hat gehalten — und sie hat mehr
   belegt als „der Prüfer ist wach".** Der Prüfer fand den Einbau
   inhaltlich, ohne Diff, **und** stellte fest, dass Träger und Papier
   auseinanderliefen. Das beglaubigt genau die Fähigkeit, auf die es bei
   dieser Nacharbeit ankam: Widersprüche zwischen zwei Dokumenten zu
   sehen, statt nur eines zu lesen.
2. **⭐ Ein Agent je Quelldokument, mit dem Auftrag „Absatz davor und
   danach mitlesen", schlägt einen Agenten je Befund.** Alle vier
   Zitat-Agenten haben mehr gefunden, als der Befund behauptete: der
   Dittlmann-Spleiß war ein Sektionssprung, nicht ein Absatzsprung; das
   42-GmbH-Zitat hatte zusätzlich einen **eingefügten Punkt**; das
   Bräu-Zitat stammt zur Hälfte aus einem geschlossenen Overlay. Wer
   nur die Behauptung prüft, findet nur die Behauptung.
3. **⭐ Am Rohbeleg messen deckt Fehler in der BEFUNDLISTE auf.** Zwei
   R05-A-Befunde trugen selbst nicht (W-3/Plaschke, H-9/Mews). Ein
   Prüferbefund ist eine Behauptung wie jede andere — die
   Belegpflicht gilt in **beide** Richtungen.
4. **⭐ Die Positivkontrolle bei Extraktionen prüft das ERGEBNIS.** Bei
   der Designkontor-Liste habe ich geprüft, ob die namentlich bekannten
   Einträge **in den extrahierten Datenzeilen** erscheinen — nicht, ob
   die Quelle erreichbar war. Genau daran ist die Apaleo-Kategorienliste
   in R5 gescheitert.
5. **Strukturmerkmal statt Namensliste — und Doppellauf Groß/Klein.**
   Die Mews-Zählung ergab mit versalienempfindlichem Muster **7**, mit
   case-insensitivem **15**; acht Überschriften stehen in VERSALIEN. Ein
   Muster, das in Summe anschlägt, verdeckt genau diesen Fall.
6. **Auszeichnung mitlesen.** Das 42-GmbH-Partnerkarussell trägt **11
   Logos**, die in **keinem** Text erscheinen (`<img>` gestrippt, alle
   `alt=""`) — die Partnerliste war als Bestandsaussage um ein Drittel
   zu kurz. Eine reine Textprüfung hätte das nie gefunden.
7. **Zahlen an ihren Schlüssel binden.** Die RevenueRise-Monatszahl
   (4.500–8.000) stammt aus einer Vergleichstabelle; ihre Bedeutung
   ergibt sich erst aus Zeile **und** Spalte („Kosten monatlich" ×
   „Eigener Revenue Manager"). Aus der Prosareihenfolge wäre sie
   falsch zugeordnet worden.
8. **Reparaturen sichtbar machen statt still glätten.** Jede geänderte
   Stelle trägt, was vorher dastand und warum es fiel. Das kostet
   Zeilen — aber es ist der einzige Grund, warum der Prüfer die
   K-3-Lücke und die P22-Kollision überhaupt finden konnte.
9. **Mitlaufendes Committen in vier Blöcken** hat die
   Multi-Session-Lage entschärft: Als der Prüferlauf Änderungen nötig
   machte, war der Bestand sauber und der Rückbau des Einbaus ein
   einzelner `git checkout`.
