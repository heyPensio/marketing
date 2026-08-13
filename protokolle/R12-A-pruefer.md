# R12-A — Prüfprotokoll (unabhängiger Prüfer, frischer Kontext)

> **Stand: ABGESCHLOSSEN.** Alle sieben Pflicht-Kategorien tragen ein
> Ergebnis. Zwei Prüfschritte sind ausdrücklich als **nicht prüfbar**
> ausgewiesen (Abschnitt „Nicht prüfbar"), einer als **offen**
> (Abschnitt „Offen geblieben") — keiner davon ist zu „keine
> Auffälligkeit" geglättet.

## Kopf

| Feld | Wert |
|---|---|
| Prüfstand (eingefroren) | **`9a0b0bd`** — „R12-A: Entscheide E-1..E-8 nachgetragen + vorlaeufige Preisliste (W-B-Basis) + N-10" |
| Arbeitsbaum-Diff | **ausdrücklich NICHT gesichtet** (auftragsgemäß); gearbeitet wurde gegen die committeten Dateien |
| Umfang des Prüfgegenstands | `git show 9a0b0bd --numstat`: **60 / 515 / 503 Zeilen hinzugefügt, 0 Zeilen gelöscht** in drei Dateien |
| Schreibrecht des Prüfers | ausschließlich diese Datei. Keine Edits, keine Commits, keine Außenaktion |
| Datum | 13.08.2026 |

## Gelesene Quellen (Positivkontrolle)

**Prüfgegenstand (vollständig gelesen):**
- `handel/preisliste-vorlaeufig.md` — 515 Zeilen, **vollständig** (Read
  ohne offset/limit, Datei-Ende erreicht: § 7 „Zugehörige Dokumente").
- `handel/preismodell-optionen.md` — § 11 vollständig (Z. 1131–1510),
  § 4.1–4.4, § 5.1–5.4, § 6.1–6.4, § 7.1–7.5, § 8, § 9, § 10, § 12,
  § 13, § 2.2/§ 2.4 sowie **der vollständige Diff aller 16 Hunks** von
  `9a0b0bd`.
- `handel/foerderarchitektur-beraterrolle.md` — der N-10-Nachtragskasten
  vollständig (Diff), dazu § 3.1 und die Belegstufen-Legende der Datei.

**Maßgebliche Quelle:**
- `<FIRMENWURZEL>\zentrale\briefings\briefing-2026-08-13.md` —
  **vollständig gelesen** (371 Zeilen, `cat`), insbesondere
  „⭐ Entscheide-Protokoll 13.08.2026 / Preismodell E-1…E-8" **und**
  den Marketing-Einstiegs-Prompt sowie die Rubriken „Offene
  User-Entscheide" und „Abteilungs-Lagebild / Marketing".
  *Nur gelesen, fremdes Repo.*

**Soll-Maßstab:**
- `protokolle/tagesplan-2026-08-13.md` — vollständig (402 Zeilen),
  insbesondere „Session-Prompts R12 / Strang R12-A".

**Belegquellen für die Nachrechnung:**
- `fund/wettbewerbsbild.md` § B10.4 (M2) und § B5.3-Umfeld (M4) — Ur-Quelle.
- `sensibel/rohbelege-R12-A/` — alle drei Dateien
  (`gegenprobe-einmalbetraege-2026-08-13.txt`, `cluster-zaehlweg.js`,
  `cluster-zaehlweg-ausgabe-2026-08-13.txt`).
- `sensibel/rohbelege-R11-A/` — gelesen: `agent2-cstack-start.txt`,
  `agent2-angelstone-preisliste.txt`, `agent2-leanflow-preise.txt`,
  `agent1-melevo-preise.txt`.

**Positivkontrolle der Lesewege (je Kanal ein Anker, der treffen MUSS):**

| Kanal | Kontrollkandidat | Ergebnis |
|---|---|---|
| `git show` / Diff | Hunk-Header `@@` im Diff von `preismodell-optionen.md` | **16 Hunks** ✔ (eine ankerlose Ausgabe hätte 0 gezeigt) |
| Grep über `handel/*.md` | `1\.920` | **12 Zeilen** über beide Dateien ✔ |
| Grep über Rohbeleg cStack | `1\.980` (bekannt vorhanden) | **2 Zeilen** ✔ |
| Grep über `fund/wettbewerbsbild.md` | `1\.495\|2\.295\|4\.195` | Z. 2244/2245 ✔ |
| Gegenkontrolle (darf NICHT treffen) | `4050` ohne Tausenderpunkt in `agent2-cstack-start.txt` | **0 Treffer** ✔ — während `4\.050` **2 Treffer** liefert; belegt, dass ein Nulltreffer hier ein Muster- und kein Sachbefund sein kann |
| Gegenkontrolle 2 | „Zahnarzt" in `preisliste-vorlaeufig.md` | **0** ✔ |

## Vorgehen

1. **Diff-Struktur zuerst, nicht Text zuerst:** `--numstat` ergab
   **0 gelöschte Zeilen** über alle drei Dateien. Das ist der harte
   Beleg für Kategorie 6 (keine stille Neufassung durch Löschen) und
   verschiebt die Prüfung dort auf die Frage, ob ein *hinzugefügter*
   Kasten eine Vorfassung inhaltlich überschreibt, ohne es zu sagen.
2. **Rückwärts-Lesen für Kategorie 2:** Das Entscheide-Protokoll wurde
   in Einzelaussagen zerlegt (Ergebnis · Begründung · Vorbehalt ·
   Träger · Termin) und jede einzeln im Dokument gesucht — nicht
   umgekehrt. Zusätzlich wurden die Briefing-Rubriken **außerhalb** des
   Preismodell-Abschnitts einbezogen (dort sitzt P-05).
3. **Zahlen selbst nachgerechnet, keine gemeldete Zahl geglaubt:**
   Fenster-Analyse über die 15 Kernwerte von Hand reproduziert,
   „ab"-Zählung reproduziert, Break-even-Verschiebung für **alle drei**
   Monatspreis-Spalten gerechnet (nicht nur für die zitierte),
   § 13-Grenzen ausgezählt, Personentag-Rechnung geprüft.
4. **Werkzeug-Disziplin:** Keine Kontextfenster-Muster (`.{160}X.{160}`)
   — in entmarkuptem Text stehen die gesuchten Phrasen zeilengetrennt.
   Groß-/Kleinschreibung beachtet (Beispiel dieser Runde: „Tagessatz"
   findet „Beratertagessatz" nicht — deshalb wurde für § 3.1 der
   Volldump gelesen statt gegreppt). Zeilen-Zählungen sind als solche
   ausgewiesen (`grep -c` zählt Zeilen, nicht Treffer).
5. **Aussage und Fundstelle getrennt geprüft:** Bei jeder übernommenen
   Zahl wurde erst die Fundstelle in der genannten Quelle geöffnet, dann
   der Wert verglichen. Fundstellen werden hier mit Abschnittsbezug
   zitiert, nicht mit Zeilennummern.

---

## Kategorie 1 — ✅-Vermerk weicht inhaltlich vom Entscheide-Protokoll ab

**Ergebnis: 10 von 10 Entscheidungspunkten inhaltlich zutreffend
übertragen — keine Abweichung.** Geprüft wurden E-1, E-2a, E-2, E-3,
E-4, E-5, E-5a, E-6, E-7, E-8 (10 Punkte in 9 ✅-Kästen; E-5/E-5a teilen
einen Kasten). Je Punkt wurde die Protokollzeile gegen den Kastentext
gelesen:

| Punkt | Protokoll-Kern | Im Kasten | Befund |
|---|---|---|---|
| E-1 | Option (ii); Startgebühr verstärkt / Monatsgebühr geringer im ersten Jahr; Begründung Liquidität; spätere Verschiebung vorgesehen; Höhe sofort als Spanne, belastbar erst nach E-6 | alle fünf Bestandteile einzeln | ✔ |
| E-2a | je Objekt/Haus | ja, mit korrekter Ableitung „drei Häuser = drei Grundgebühren" | ✔ |
| E-2 | (c) Grundgebühr + Zimmeranteil; Mehrhaus-Rabatt auf die Grundgebühr; „Zentrale-Empfehlung, User bestätigt" | alle drei, inkl. der Herkunftsangabe der Empfehlung | ✔ |
| E-3 | Neufassung; W-B/A3; Kunde = Eigentümer, kein Lock-in; Infrastruktur separat zum Selbstkostenpreis; Vapi-Nutzungsrisiko beim Verursacher; Servicegebühr getrennt; Z-6-Vorbehalt → E-4 | alle sieben Bestandteile, nummeriert | ✔ |
| E-4 | Ruffy/heypensio; Bündelung mit n8n-MCP-Entscheidungsvorlage; Übergabe-Posten liegt dort bereits | ja, **plus** der eigene Hinweis „Angabe-Anforderung nur zur Hälfte erfüllt" | ✔ (Zusatz ist Bewertung, sauber als solche kenntlich) |
| E-5 | Ja, Pilot kostenlos, Folgekunden ab Kunde 1 | ja | ✔ |
| E-5a | Ja, Hostel Boninstraße/LEANE eingeschlossen | ja | ✔ |
| E-6 | Ruffy/heypensio; nächster Pilot-Onboarding-Schritt; grobe Blöcke; Zulieferung an MKT | ja | ✔ |
| E-7 | Ja, FUND2-Kayhan-Gespräch ~23.08. | ja, mit korrekter n=1-Reichweitengrenze | ✔ |
| E-8 | Ja; intern; Firmierungs-Vorbehalt; ohne Außenversand | ja | ✔ |

**Belegstufe:** Alle neun Kästen tragen „Briefing-Dialog 13.08.2026,
Dropdown + Freitext, **sinngemäß — Wortlaut nicht archiviert**" —
entweder ausgeschrieben (E-1) oder als „Quelle/Datum/Form: wie E-1".
Der Verweis „wie E-1" ist zulässig, weil § 11 zusätzlich einen
Kopf-Nachtrag mit der einheitlichen Belegstufe trägt. **Kein Kasten
setzt einen Entscheid als wörtliches Zitat.** ✔ (Muster `„` in
Verbindung mit „User" in den ✅-Kästen geprüft; die einzigen
Anführungszeichen dort umschließen Begriffe aus der *Vorlage*
(„verstärkt"/„geringer"), nicht Äußerungen des Users.)

**Ein Grenzfall, der kein Kategorie-1-Befund ist, aber genannt gehört:**
siehe **P-12** — im Mehrhaus-Rabatt-Abschnitt der Preisliste steht eine
eigene Ableitung im selben Satz wie „ausdrücklich entschieden".

---

## Kategorie 2 — Was aus dem Entscheide-Protokoll ist gar nicht erst angekommen?

**Gelesen wurde vom Protokoll rückwärts**, Aussage für Aussage,
einschließlich Begründungen und Vorbehalten.

**Ergebnis: Aus dem Unterabschnitt „Preismodell E-1…E-8" ist jede
einzelne Aussage angekommen — 27 von 27 zerlegten Teilaussagen** (E-1:
5 · E-2a: 1 · E-2: 3 · E-3: 7 · E-4: 3 · E-5/5a: 2 · E-6: 3 · E-7: 2 ·
E-8: 1). Auch die drei Teile, die beim Verdichten typischerweise fallen,
sind da: die **Begründung** (Liquiditätslage), die **spätere
Verschiebungsrichtung** als eigentliche Präferenz des Users, und die
**Herkunft der Rabatt-Idee** (Zentrale-Empfehlung, nicht User-Idee).

**Ein Befund aus dem übrigen Briefing:** → **P-05** (Startgebühr-HÖHE
als offener **User**-Entscheid ist nicht angekommen). Er stammt aus der
Briefing-Rubrik „Offene User-Entscheide (Rest nach dem heutigen
Abarbeiten)", nicht aus dem Preismodell-Unterabschnitt — genau deshalb
ist er beim Vorwärtslesen unsichtbar.

**Suchraum und Positivkontrolle dieser Kategorie:** Suchraum = der
vollständige Briefing-Text (371 Zeilen, `cat`, keine abgeschnittene
Ausgabe). Positivkontrolle: Die Marketing-Prompt-Prämisse 3 nennt
denselben Kern wie das Protokoll — beide Fassungen wurden gegeneinander
gelesen und stimmen überein; ein Auslassen wäre also in zwei
unabhängigen Briefing-Stellen sichtbar gewesen.

---

## Kategorie 3 — Eine Hypothese wirkt wie ein Beleg

**Ergebnis: Die Kennzeichnungs-Disziplin ist durchgehend hoch — mit
zwei Ausnahmen, die beide dieselbe Zahl betreffen: die
Startgebühr-Spanne.**

Was **trägt** (ausdrücklich als bestanden vermerkt, damit die Befunde
nicht als Gesamturteil gelesen werden): Der Spannen-Abschnitt steht
unter einem eigenen ④-Kasten („kein Preis, kein Anker"); die
Servicegebühr-Tabelle enthält **sprechende Platzhalter statt
plausibler Dummys**; K5/K6 bleiben sichtbar offen statt auf 0 € gesetzt;
der unbequeme Befund (häufigste Einmalzahlung 399–799 €, also **unter**
der Hypothese) steht als eigener Kasten im Haupttext und nicht in einer
Fußnote; die eigene Wertung wird ausdrücklich als angreifbar
gekennzeichnet („Wer diese Wertung nicht teilt, landet legitim bei einer
deutlich niedrigeren Spanne"). Die Hypothesen-Spanne ist zudem
**repoweit nur an einer einzigen Stelle** vorhanden (Grep über alle
`*.md`, Muster `1\.500 *– *2\.500` → 1 Treffer; Positivkontrolle:
`1\.500` allein trifft in 5 Dateien) — sie ist also noch nirgends
weiterverwendet worden.

Befunde: **P-01** (die Dichte-Aussage, die die Spanne stützt, ist
falsch) und **P-02** (die Spanne trifft die verworfene ⑤-Zahl in beiden
Rändern, ohne dass das offengelegt wird).

---

## Kategorie 4 — Vorbehaltsverlust beim Verdichten

Je Vorbehalt einzeln, mit Suchraum und Positivkontrolle:

| Vorbehalt | Suchraum | Ergebnis |
|---|---|---|
| **Firmierungs-Vorbehalt** | `preisliste-vorlaeufig.md` | ✔ vorhanden — Kopfkasten Punkt 2 *und* „Nicht Teil dieser Datei" (Außenkommunikation); zusätzlich im E-8-Kasten und im Kopfkasten der Vorlage („Unverändert") |
| **Z-6** | beide Dateien | ✔ vorhanden — Kopfkasten Punkt 3 der Preisliste (mit der Verschärfung „Kippt Z-6, kippt der **Aufbau** dieser Liste — nicht nur einzelne Zahlen"), K7-Zeile, § 6, E-3-Kasten, § 5.4-Nachtrag |
| **„belastbar erst nach E-6"** | beide Dateien | ✔ vorhanden — Kopfkasten Punkt 4, ④-Kasten § 5, S1/S2-Status, E-1-Kasten, E-6-Kasten, § 7.2-Nachtrag |
| **Architektur-Entscheid offen** | beide Dateien | ✔ vorhanden und **inhaltlich sauber getrennt** („Wir *rechnen* vorläufig W-B" ≠ „Wir *bauen* W-B" — in § 5.4, § 11 E-3, Kopfkasten und Preisliste je eigenständig formuliert) |
| **Pilot/LEANE kostenlos** | beide Dateien | ✔ vorhanden — „Nicht Teil dieser Datei", § 6-Tabelle, E-5-Kasten, § 2.3-Nachtrag; die offene Folgefrage („**wie** wird die unentgeltliche Leistung gegenüber der dritten Rechtsträgerin dokumentiert?") ist an **beiden** Orten mitgeführt |

**Ergebnis: 5 von 5 beauftragten Vorbehalten sind erhalten.**

**Aber zwei Vorbehalte, die nicht auf der Liste standen, sind
verlorengegangen:** → **P-03** (Belegstufen-Vorbehalt zu W1) und
**P-07** (Scope- und Charakter-Vorbehalt zu M6). Beide betreffen den
Weg `preismodell-optionen.md` → `preisliste-vorlaeufig.md` und beide
wirken in dieselbe Richtung: Sie lassen die Marktbasis der eigenen
Spanne fester aussehen, als sie ist.

---

## Kategorie 5 — Zahl ohne Zählweg/Scope/Steuerbasis oder vom Schlüssel gelöst

**Nachgerechnet, nicht geglaubt** — Ergebnis je behaupteter Zahl:

| Behauptung der Session | Selbst geprüft | Ergebnis |
|---|---|---|
| 15 Einzelwerte in der Kernmenge | Klassen A+C ausgezählt: M2 4 + M4 3 + W1 1 + W2 2 + W3 2 + W5 3 | **= 15 ✔** |
| davon 7 „ab"-Werte, 8 feste | W1 · W2-Setup · W3 (2) · W5 (3) = 7; M2 (4) + M4 (3) + W2-SmartAudit = 8 | **✔** (die im Commit vermerkte Selbstkorrektur „7 statt 9" ist die richtige Zahl) |
| Gesamtspanne 300 – 4.195 € | min/max der 15 Werte | **✔** |
| dichtestes 400-€-Fenster 399–799 € mit 6 Werten | alle 15 Fensterstarts von Hand durchgerechnet | **✔** — 6 ist das Maximum |
| Fenster 1.920–2.320 € mit 4 Werten | ebd. | Zahl **✔**, **Rang falsch** → **P-01** |
| 125 €/h × 8 h = 1.000 €/Personentag | Multiplikation; 1.920 ÷ 1.000 = 1,9; 4.200 ÷ 1.000 = 4,2 | **✔** |
| Break-even-Verschiebung „rund 0,9 %" (355 ÷ 352) | 400−45 = 355; 400−48 = 352; 355/352 = 1,0085 | Zahl **✔**, Zusatz „durchgängig" **falsch** → **P-08** |
| 125–160 €/h = 1.000–1.280 €/Beratertag (N-10) | 125×8, 160×8 | **✔**; IFB-Deckel 1.100 € netto liegt tatsächlich dazwischen |
| W6-Quotienten 150 / 130 / 125 €/h | am Rohbeleg: 150 €/bis 1 h · 390 €/bis 3 h · 750 €/bis 6 h | **✔** — inkl. der Untergrenzen-Eigenschaft (Deckel) |
| „drei von vierzehn" Grenzen berührt (§ 13) | § 13 hat **14** nummerierte Punkte ✔; die Tabelle führt **5** einzeln, davon **2** als berührt | **Nenner ✔, Zähler falsch** → **P-09** |

**Schlüsselbindung:** Die Werte-Tabelle in § 5.1 der Preisliste führt
eine **Schlüsselspalte** (W1…W6, M1…M6, Straiv) und ist zeilenweise
gegen § 6.2/§ 6.3.2 geprüft worden — **13 von 13 Zeilen mit korrekter
Zuordnung Schlüssel ↔ Betrag ↔ Scope ↔ Steuerbasis.** Keine
Reihenfolge-Verwechslung, kein von seinem Schlüssel gelöster Wert.

**Steuerbasis:** Vorbildlich geführt. Die uneinheitlichen Basen sind je
Anbieter der Kernmenge einzeln ausgewiesen (netto nur W3; unbekannt M2;
nicht angegeben M4/W1/W2; Kleinunternehmer W5 — **6 von 6
Kernmengen-Anbietern abgedeckt**), und die Regel „Fußnoten nicht
quellenübergreifend ergänzen" ist ausdrücklich befolgt (K3/K4 werden
nicht aus K1 mitgefüllt).

**Befunde dieser Kategorie:** P-08, P-09, dazu die Scope-Lücke **P-07**
und die Beleg-Lücke **P-10**.

---

## Kategorie 6 — Stille Neufassung statt markiertem Nachtrag

**Ergebnis: keine Auffälligkeit — und zwar hart belegt statt
eingeschätzt.** `git show 9a0b0bd --numstat` weist über alle drei
Dateien **0 gelöschte Zeilen** aus. Keine Vorfassung kann verändert
worden sein.

Die drei ausdrücklich benannten Risikostellen einzeln:

- **E-3:** Die ursprüngliche Ja/Nein-Frage („dürfen wir vorläufig von
  W-A ausgehen?") steht unverändert; der Kasten darunter beginnt mit
  „⚠️ Die Frage oben bleibt bewusst stehen, obwohl sie so nicht
  beantwortet wurde" und erklärt die Umkehrung W-A → W-B. **Vorbildlich
  gelöst.** ✔
- **Reihenfolge-Kasten (P-14):** Der Warntext bleibt wörtlich stehen;
  der Nachtrag formuliert die Differenz präzise als „**in Kenntnis
  seines Inhalts überstimmt**", nicht als „widerlegt", und trägt den
  fortgeltenden Satz noch einmal aus. ✔
- **§ 12:** Der Empfehlungstext bleibt unverändert; der Nachtrag trennt
  ausdrücklich **Ergebnis-Übereinstimmung** von **Begründungs-
  Übereinstimmung** („Eine Übereinstimmung im Ergebnis ist keine
  Bestätigung der Begründung") und stellt fest, dass die Einschränkung
  „wenn E-6 klein ist, wäre (i) besser" **nicht** ausgeräumt ist. ✔

Auch die ☐-Kästchen der Punkte E-1…E-8 stehen unverändert; der
§ 11-Kopfnachtrag erklärt das ausdrücklich („wer wissen will, worüber
entschieden wurde, muss die Frage lesen können, die gestellt war").

Ein **Formulierungs**-Nebenbefund, keine Neufassung: → **P-15**.

---

## Kategorie 7 — Widerspruch im Papier nach den Edits

Geprüft wurde in beide Richtungen: (a) alte Sätze, die den Entscheiden
jetzt widersprechen, ohne Vorwärtsverweis; (b) Widersprüche **zwischen**
den drei Dateien.

**(a) Innerhalb `preismodell-optionen.md`: keine Auffälligkeit.** Alle
Stellen, an denen der alte Text unter den Entscheiden schief wird,
tragen einen Vorwärtsverweis — Kopfkasten, § 2.3, § 3, § 4.1, § 5.4,
§ 6.4, § 7.2, § 7.5, § 8, § 9, § 10, § 11 (zweimal), § 11 „So läuft es
weiter", § 12, § 13: **16 Nachtragskästen**. *Zählweg: `git show
9a0b0bd -- handel/preismodell-optionen.md | grep -c "^+.*🟢"` →
**16**; derselbe Lauf mit `"^+.*### ✅"` → **9** ✅-Kästen. Beide
Zahlen decken sich mit der Commit-Message; die Kästen wurden zusätzlich
einzeln aufgelistet und den Abschnitten zugeordnet. Dazu kommt im
Kopfkasten ein inline gesetzter Vorwärtsverweis ohne eigenen Kasten.*
Gegenprobe über die
naheliegendsten Kollisionsstellen: § 7.1 (Option i, nicht gewählt) und
§ 7.3/§ 7.4 tragen **bewusst keinen** Verweis — sie beschreiben
Alternativen, die durch eine Wahl nicht falsch werden; § 8s
„Dagegen"-Spalte bleibt stehen und wird im Nachtrag ausdrücklich als
**offene Aufgabe für R12-B** umgedeutet statt entwertet. Das ist die
richtige Behandlung.

**Besonders korrekt gelöst:** Die Herkunfts-Kennzeichnung der Bemessung
(c) als ⑤-Struktur aus dem ChatGPT-Teil (§ 2.2) wird im § 8-Nachtrag
ausdrücklich **nicht** durch den Entscheid aufgewertet („die Belegstufe
der Struktur ändert sich durch einen Entscheid nicht"). Genau diese
Klasse ist in diesem Projekt als L-32 registriert.

**(b) Dokumentübergreifend: zwei Befunde** — **P-04** (die Preisliste
präzisiert W1 zu „ab 1.920 €", die Quelle behält an vier Stellen den
Festwert, und die Vorrangklausel lässt ausgerechnet die unpräzisere
Fassung gewinnen) und **P-06** (die Durchreichungs-Konstruktion und der
Bestandsbefund K03/K04 „Kunde pflegt nie ein Vapi-Konto" stehen
ungeklärt nebeneinander). Dazu die kleineren **P-11**, **P-13**,
**P-14**, **P-18**.

---

## Befunde einzeln

### P-01 · **mittel** · „Zweitdichtestes Fenster" ist das viertdichteste — und das eigene Rohbeleg-Protokoll sagt es

**Fundstelle:** `handel/preisliste-vorlaeufig.md`, § 5.3 „Die Spanne,
mit Zählweg", Tabellenzeile **„Zweitdichtestes Fenster (mit
Betriebsbezug) — 1.920 – 2.320 €"**.

**Sachverhalt:** Die Zeile bezeichnet das Fenster 1.920–2.320 € (4 von
15 Werten) als das zweitdichteste. Selbst nachgerechnet über alle 15
möglichen Fensterstarts — und im **eigenen Ergebnisprotokoll der
Session** (`sensibel/rohbelege-R12-A/cluster-zaehlweg-ausgabe-2026-08-13.txt`)
schwarz auf weiß — liegen **zwei** Fenster dazwischen:

```
6 Werte in [399..799]   ← korrekt als „dichtestes" ausgewiesen
5 Werte in [490..890]   ← im Dokument nicht erwähnt
5 Werte in [300..700]   ← im Dokument nicht erwähnt
4 Werte in [1920..2320] ← im Dokument als „zweitdichtestes" geführt
```

Der Zusatz „(mit Betriebsbezug)" rettet den Rang **nicht**: Beide
übersprungenen Fenster enthalten ebenfalls Werte der Klasse A
(Betriebsbezug) — `[490..890]` enthält W2 490 und W3 490, `[300..700]`
zusätzlich W2 300. Umgekehrt enthält das als „mit Betriebsbezug"
etikettierte Fenster mit M4 2.295 einen Klasse-**C**-Wert (Website,
per Auswahlregel ausdrücklich „andere Bauform").

**Warum das trägt und nicht kosmetisch ist:** Genau dieses Fenster ist
die Grundlage der Arbeitshypothese 1.500–2.500 € („Zählweg: Fenster
1.920–2.320 €, nach unten erweitert …"). Die Rangaussage lässt den
tragenden Anker dichter belegt aussehen, als er ist — und zwar in
Richtung der für uns günstigeren (höheren) Spanne.

**Ursachenvermutung (getrennt vom Befund):** Das Skript sortiert nach
Trefferzahl und gibt alle Fenster ab n ≥ 3 aus; die beiden 5er-Fenster
stehen unmittelbar unter dem Sieger. Vermutlich wurde beim Übertragen
in die Tabelle nur die *erste* Zeile (6er) und die *inhaltlich
gesuchte* Zeile (1920er) gelesen — die dazwischenliegenden Zeilen
enthielten keine Werte des interessierenden Bandes und fielen aus dem
Blick. Das ist derselbe Mechanismus wie beim bereits korrigierten
Erstentwurf („kein anderes Fenster enthält mehr als drei Werte"): Die
Zählung wurde maschinisiert, die **Rangaussage darüber** aber wieder
von Hand formuliert.

**Reparaturrichtung (nur als Hinweis, nicht als Auftrag):** Entweder
das Etikett streichen („Fenster mit Betriebsbezug: 1.920–2.320 €, 4 von
15") oder die beiden 5er-Fenster mit ausweisen — Letzteres wäre
konsistent mit dem unbequemen Befund direkt darunter, der ohnehin
schon sagt, dass die Häufigkeit unten liegt.

---

### P-02 · **mittel** · Die Arbeitshypothese trifft in beiden Rändern die als unbrauchbar verworfene ⑤-Zahl — ohne Offenlegung

**Fundstelle:** `handel/preisliste-vorlaeufig.md`, § 5.3, Zeile
„**⭐ Arbeitshypothese … rund 1.500 – 2.500 €**" — gegen
`handel/preismodell-optionen.md` § 2.2, zweiter ⑤-Spiegelstrich.

**Sachverhalt:** § 2.2 führt die verworfene ChatGPT-Zahl im Wortlaut:
„Preisrahmen **‚nicht unter ~1.500 €** netto/Monat', **1.500–2.000** für
kleines Setup, **2.500–4.000** bei mehreren Modulen" — mit dem Vermerk
„Sie steht hier **genau einmal** — an dieser Stelle, als das, was sie
ist." § 7.5 zieht daraus eine ausdrückliche Konsequenz (Prüferbefund
P-28 der Vorrunde): Die oberste Rechengrößen-Spalte lautet **bewusst
1.200 € und nicht 1.500 €**, „weil 1.500 € die … verworfene ⑤-Zahl ist,
und sie hier als Rechengröße zu führen hätte sie durch die Hintertür
zum Anker gemacht".

Die neue Arbeitshypothese lautet **1.500 – 2.500 €** — also exakt die
Untergrenze der verworfenen Zahl als Untergrenze und exakt deren
mittlere Bandgrenze als Obergrenze. Weder § 5.3 noch der ④-Kasten noch
§ 3 (der § 2.2 an anderer Stelle sehr wohl zitiert) erwähnen diese
Übereinstimmung.

**Was den Befund abschwächt — und das gehört ausdrücklich dazu, damit
er nicht überrepariert wird:** Die ⑤-Zahl bezeichnet einen
**Monatspreis**, die Arbeitshypothese einen **Einmalbetrag**. Das sind
verschiedene Größen; von einer Übernahme kann keine Rede sein. Die
Herleitung der 1.500 € ist unabhängig belegt (M4-Einstiegsstufe
1.495 €, Klasse C), der Zählweg steht im Dokument. Es geht hier
ausschließlich um die **Offenlegungspflicht** bei numerischer
Koinzidenz mit einer ausdrücklich gesperrten Zahl — die Regel, die
§ 7.5 für sich selbst schon einmal angewandt hat.

**Warum es trotzdem mittel ist:** Sobald die Spanne weiterverwendet
wird, ist die Deckungsgleichheit mit der ChatGPT-Zahl das erste, was
ein Leser bemerkt, der § 2.2 kennt — und sie wird dann als
**Bestätigung** gelesen („die Marktanalyse kommt auf dasselbe wie die
KI"). Genau diese Scheinbestätigung sollte P-28 verhindern.

**Ursachenvermutung:** Die Session hat § 2.2 gelesen (sie zitiert es in
§ 3 der Preisliste), aber als *Beispiel für Platzhalter-Gefahr*, nicht
als *Sperrliste konkreter Zahlen*. Die Sperre war an einen Wert (1.500)
in einer Rolle (Monatspreis-Rechengröße) gebunden; sie wurde nicht als
Zahlen-Sperre mitgeführt.

---

### P-03 · **mittel** · Der Belegstufen-Vorbehalt zu W1 ist beim Übertragen verlorengegangen — ausgerechnet beim tragenden Anker

**Fundstelle:** `handel/preisliste-vorlaeufig.md` § 5.1, Zeile **W1**
(Spalte „Belegstufe" existiert dort nicht; die Vorbemerkung setzt
pauschal „dortige Belegstufe ③ Selbstauskunft") — gegen
`handel/preismodell-optionen.md` § 6.3.2, Absatz „⚠️ **Belegstufe W1
(wichtig, weil W1 der nächste Nachbar ist)**".

**Sachverhalt:** Die Quelle schränkt W1 ausdrücklich ein: Der Satz mit
den 1.920 € steht „in einem **Ratgeber-/Vergleichs-Artikel des
Anbieters über sich selbst**, nicht in einem Tarifblatt … Belegstufe:
Selbstauskunft in eigenem Content — **eine Stufe unter einer
Preisliste**." In der Preisliste kommt dieser Vorbehalt **nicht vor**.

*Suchraum und Positivkontrolle:* Muster `Ratgeber|eigenem Content|
Tarifblatt|Stufe unter` über `preisliste-vorlaeufig.md` → **0
Treffer**. Positivkontrolle im selben Lauf: „W1" trifft in **10**
Zeilen derselben Datei ✔ (die Datei kennt W1 also sehr wohl), und die
**analoge** Schwäche bei W5 („⚠️ schwacher Beleg
(Placeholder-Testimonials)") **ist** übernommen ✔ — der Übertragungsweg
funktioniert grundsätzlich, hier hat er einen Fall ausgelassen.

**Warum das trägt:** W1 ist in der Preisliste als „**bauformnächster
Anker im ganzen Bestand**" ausgewiesen, bildet die Untergrenze des
Fensters, das die Arbeitshypothese trägt, und ist der einzige Anker,
der in § 5.4 namentlich in die Kreuzprobe eingeht. Von allen 13 Ankern
ist er derjenige, bei dem die Belegstufe am meisten Gewicht hat.

**Ursachenvermutung:** Die Schwäche von W5 steht **in der Tabellenzeile**
der Quelle (Spalte Steuerbasis/Leistungsbild-Umfeld bzw. als
nummerierte Einschränkung 3), die Schwäche von W1 dagegen in einem
**Absatz unterhalb** der Tabelle. Wer eine Tabelle in eine Tabelle
überträgt, nimmt die Zeilen mit und verliert die Fließtext-Absätze —
dieselbe Klasse wie „ein Zitatabgleich prüft, was als Zitat markiert
ist, nicht den Fließtext daneben".

---

### P-04 · **mittel** · Die Präzisierung „ab 1.920 €" wird nicht in die Quelle zurückgezogen — und die Vorrangklausel lässt die unpräzisere Fassung gewinnen

**Fundstelle:** `handel/preisliste-vorlaeufig.md` § 5.5, letzter Absatz
(„⚠️ Ein Präzisierungsbefund gegenüber dem Vorgängerdokument") und § 7
(„Bei Widerspruch zwischen beiden Dokumenten gewinnt
`preismodell-optionen.md`") — gegen `handel/preismodell-optionen.md`
§ 6.3.2 (Tabellenzeile W1), § 7.1 (Spalte „Dagegen"), § 7.5
(Schlussabsatz) und § 11 (Vorspann zu E-1).

**Sachverhalt:** Die Session stellt selbst fest, dass W1 ein
**„ab"-Wert** ist, und führt ihn deshalb in der Preisliste als „ab
1.920 €". In `preismodell-optionen.md` bleibt der Wert an **vier**
Stellen ein Festwert:

| Stelle | Wortlaut |
|---|---|
| § 6.3.2, Tabelle W1 | Spalte „Einmalig": **1.920 €** |
| § 7.1, Spalte „Dagegen" | „W1 … **verlangt 1.920 € Einrichtung** UND bindet auf ein Jahr" |
| § 7.5, Schlussabsatz | „nimmt **1.920 € Einrichtung** und bindet zusätzlich auf ein Jahr" |
| § 11, Vorspann E-1 | „**W1: 1.920 € ③**" |

Keine dieser Stellen hat einen Nachtrag bekommen, obwohl
`preismodell-optionen.md` im Scope der Session lag und der Auftrag
ausdrücklich sagt: „wo dir beim Nachtragen Formulierungen begegnen, die
… schief werden, korrigiere sie als markierten Nachtrag mit".

**Die Verschärfung:** § 7 der Preisliste setzt eine **Vorrangklausel**
(„bei Widerspruch gewinnt `preismodell-optionen.md`"). Damit gewinnt
genau in diesem Punkt die Fassung, die die Preisliste selbst als
ungenau bezeichnet hat. Der Leser, der den Widerspruch bemerkt und der
Klausel folgt, landet beim Festwert.

*(Die Quelle ist nicht durchgehend falsch: § 6.3.2 zitiert im
Belegstufen-Absatz den Wortlaut „Pakete starten bei 1.920 Euro"
korrekt. Genau das macht den Fall zäh — beide Dokumente sehen für sich
plausibel aus.)*

**Ursachenvermutung:** Der Befund entstand **spät**, nämlich erst bei
der Rohbeleg-Gegenprobe in § 5.5, als die Nachträge in
`preismodell-optionen.md` bereits geschrieben waren. Der Rückweg in
das schon „fertige" Dokument ist der Schritt, der bei später Erkenntnis
regelmäßig ausfällt.

---

### P-05 · **mittel** · Die Startgebühr-HÖHE ist ein offener **User**-Entscheid — in beiden Dokumenten fehlt der Entscheider

**Fundstelle:** `handel/preisliste-vorlaeufig.md` § 6 („Was diese Liste
NICHT entscheidet"), Zeile „Preishöhe (F-III)"; ferner
`handel/preismodell-optionen.md` § 11 E-1-Kasten („Was NICHT
entschieden ist: die Höhe") — gegen
`briefing-2026-08-13.md`, Rubrik **„Offene User-Entscheide (Rest nach
dem heutigen Abarbeiten)"**: „**Startgebühr-HÖHE (nach MKT-Schätzung +
E-6)**".

**Sachverhalt:** Das Briefing führt die Startgebühr-Höhe ausdrücklich
als **offenen Entscheid des Users**, mit der Reihenfolge
„MKT-Schätzung → E-6 → User entscheidet". Die R12-A-Dokumente nennen
für diese Zeile ausschließlich **Zulieferer**: „braucht **E-6**
(Aufwand, Ruffy/heypensio) und möglichst **E-7**
(Zahlungsbereitschaft, FUND2-Gespräch)". Wer die Höhe am Ende
**festlegt**, steht nirgends.

**Warum das trägt:** Eine Zeile in „Was diese Liste NICHT entscheidet"
ohne benannten Entscheider ist ein Posten ohne Träger — genau die
Konstruktion, die dieses Projekt anderswo (Z-1/Z-5/Z-7) ausdrücklich
als „kein Träger benannt" kennzeichnet. Hier entsteht zusätzlich der
Eindruck, mit E-6 und E-7 sei die Höhe *ermittelt* statt *entschieden*.
Der Umschlagspunkt „MKT liefert die Schätzung, danach ist der User am
Zug" ist der eigentliche nächste Schritt dieser Arbeitslinie und
verschwindet.

**Ursachenvermutung:** Der Auftrag verwies die Session auf den
Unterabschnitt „Preismodell E-1…E-8"; die Rubrik „Offene
User-Entscheide" steht mehrere Bildschirmseiten weiter unten im
Briefing und war nicht Teil des benannten Suchraums. Klassische Folge
eines präzise adressierten Quellverweises: Was daneben steht, wird
nicht gelesen.

---

### P-06 · **mittel** · Durchreichung und Eigentumsmodell stehen ungeklärt nebeneinander — der Bestandsbefund K04 (Vapi) fehlt vollständig

**Fundstelle:** `handel/preisliste-vorlaeufig.md` § 2 (Einleitung: „Sie
sind für uns ein **durchlaufender Posten**, für den Kunden ein eigener
Rechnungsblock" und die Vapi-Zeile K4) sowie Kopfkasten Punkt 3 — gegen
`handel/preismodell-optionen.md` § 5.3, Absatz „Zweite Kollision
derselben Art (K03/K04)".

**Sachverhalt:** Der Bestand führt zwei benannte Kollisionen des
A3-/Eigentumsmodells:
- **K03** „Kunde erhält keinen n8n-Zugang" — Klassifikation dort:
  „direkter Eigentums-/Zugangswiderspruch";
- **K04** „ein Vapi-Konto; **Kunde pflegt nie ein Vapi-Konto**" —
  Klassifikation dort: „direkter Konten-/**Vertrags**widerspruch,
  **sofern Vapi zur Eigentumsumgebung zählt**".

Die Preisliste reicht Vapi **an den Kunden durch** („Nutzungsrisiko
beim Verursacher") — womit Vapi genau in die Eigentums-/Kostensphäre
des Kunden rückt und die Bedingung von K04 erfüllt ist. K03/K04 kommen
in der Preisliste **nicht vor**.
*Suchraum/Positivkontrolle:* Muster `K03|K04|Vapi-Konto|Vertragspartner`
über `preisliste-vorlaeufig.md` → **0 Treffer**; Positivkontrolle
„Vapi" → **4 Zeilen** ✔.

Der Kopfkasten deckt nur **einen** der beiden Kanäle ab: Punkt 3 nennt
ausschließlich die **n8n**-Lizenz (Z-6). Die Frage, **wer
Vertragspartner von Hetzner/Supabase/Vapi ist**, wenn der Kunde
zugleich Eigentümer der Umgebung sein soll und wir die Kosten
„durchreichen", wird an keiner Stelle gestellt — dabei entscheidet sie,
ob es überhaupt etwas durchzureichen gibt (eigene Rechnung an den
Kunden) oder ob der Kunde direkt beim Anbieter Vertragspartner ist
(dann ist die Position keine Zeile unserer Preisliste).

**Warum das mittel und nicht niedrig ist:** Es ist eine
**Strukturfrage der ganzen Liste**, nicht eine Zahl in einer Zeile —
dieselbe Klasse wie der Z-6-Vorbehalt, der zu Recht im Kopfkasten
steht („kippt der Aufbau dieser Liste, nicht nur einzelne Zahlen").
Der Kopfkasten behandelt eine Kollision und schweigt zur zweiten.
Sinngemäß die Regel „ist der Kanal dicht — oder sind es **alle** Kanäle
derselben Klasse?"

**Ursachenvermutung:** Das Entscheide-Protokoll nennt für E-3 nur
**einen** Vorbehalt namentlich (Z-6/n8n). Die Session hat den Vorbehalt
korrekt und sogar verschärfend übernommen — und dabei den im eigenen
Bestand daneben liegenden zweiten Widerspruch nicht selbst
hinzugezogen, weil das Protokoll ihn nicht nannte.

---

### P-07 · **mittel** · M6 wird ohne Größen-Scope und ohne den Charakter-Vorbehalt der Quelle zitiert

**Fundstelle:** `handel/preisliste-vorlaeufig.md` § 3, Absatz
„Marktorientierung, nicht Preis": „Im Hotelmarkt liegen die belegten
Monatswerte höher (M1 781,67–996,77 € für 20/40/50 Zimmer ②; **M6
399/849/1.599 € ③**)" — gegen `handel/preismodell-optionen.md` § 6.2,
Zeile M6.

**Sachverhalt:** Die Quelle führt M6 mit zwei ausdrücklichen
Einschränkungen, die beide fehlen:
1. **⚠️ „keine Tarife, sondern ‚reale annäherungsweise Preisbeispiele' ③"**
   — also nicht einmal eine Preisliste;
2. der **Größen-Scope**: 399 € gilt für **20 Zi./3\***, 849 € für
   **75 Zi./4\***, 1.599 € für **100 Zi./5\***.

Der Satz belegt die Aussage „im Hotelmarkt liegen die Monatswerte
höher". Ohne den Scope liest sich das als Marktband für Häuser unserer
Art — die eigene Zielgröße ist aber „10–25 Einheiten je Objekt"
(§ 2.4). Von den drei M6-Werten liegt nur der **unterste** überhaupt in
der Nähe dieser Größenklasse. Bei M1 ist der Scope in derselben Zeile
korrekt mitgeführt („für 20/40/50 Zimmer") — die Auslassung ist also
inkonsistent innerhalb eines Satzes.

**Ursachenvermutung:** Beim Verdichten wurde die M6-Zeile auf ihre
Zahlenfolge reduziert, weil sie im Satz die Rolle „Vergleichswert nach
oben" spielt. Der Vorbehalt der Quelle steht in der Scope-Spalte, die
beim Zitieren einer Zahlenfolge nicht mitgelesen wird. Richtung der
Verzerrung: **zugunsten der eigenen Aussage** (höhere Marktwerte
stützen eine höhere Servicegebühr).

---

### P-08 · **niedrig** · „durchgängig 0,9 %" gilt nur für eine der drei Spalten

**Fundstelle:** `handel/preismodell-optionen.md` § 7.5, 🟢-Nachtrag
13.08.2026, erster Absatz.

**Sachverhalt:** Der Text sagt, die Break-even-Werte stiegen um „rund
0,9 % — **durchgängig**, weil sich nur der Nenner ändert (Zählweg:
355 ÷ 352 = 1,0085)". Selbst nachgerechnet für alle drei
Monatspreis-Spalten der Tabelle:

| Monatspreis | Nenner alt (−45 €) | Nenner neu (−48 €) | Verschiebung |
|---|---:|---:|---:|
| 400 € | 355 | 352 | **+0,85 %** |
| 800 € | 755 | 752 | **+0,40 %** |
| 1.200 € | 1.155 | 1.152 | **+0,26 %** |

Der Wechsel des Nenners ist ein **absoluter** Abzug von 3 €, seine
**relative** Wirkung sinkt mit steigendem Monatspreis. „Durchgängig"
ist damit falsch; richtig wäre „höchstens".

**Wirkung auf die Schlussfolgerung: keine.** Der gezogene Schluss („eine
Verschiebung unter einem Prozent … die Tabelle wird nicht neu
gerechnet") bleibt in allen drei Spalten richtig — 0,85 % ist der
Maximalwert. Der Befund betrifft die Aussage, nicht das Ergebnis.

**Ursachenvermutung:** Die Zahl wurde für die Spalte gerechnet, die in
der Tabelle fett gesetzt ist (400 €). Das Wort „durchgängig" sollte
vermutlich sagen „in allen zwölf Zellen wirkt derselbe Mechanismus" —
was stimmt — und wurde zur Aussage über die *Größe* der Wirkung.

---

### P-09 · **niedrig** · „drei von vierzehn" passt zu keiner Lesart der eigenen Tabelle

**Fundstelle:** `handel/preismodell-optionen.md` § 13, 🟢-Nachtrag:
„welche Grenzen der Entscheid berührt (**drei von vierzehn**), und
welche NICHT".

**Sachverhalt:** Der **Nenner stimmt** — § 13 führt 14 nummerierte
Grenzen (selbst ausgezählt: Punkte 1 bis 14 ✔). Der Zähler nicht: Die
Tabelle darunter führt **fünf** Grenzen einzeln auf (Nr. 1, 2, 3, 8,
14). Davon sind drei als „**unverändert offen**" gekennzeichnet — also
gerade **nicht** berührt — und zwei als berührt („Nr. 8 präzisiert",
„Nr. 14 verschärft"). Es gibt damit eine Lesart mit 5 (aufgeführt) und
eine mit 2 (tatsächlich berührt); **drei** ergibt sich unter keiner.

**Ursachenvermutung:** Vermutlich ein Zwischenstand: Der Kasten begann
mit den drei Grenzen 1/2/3 (die drei bekannten Beleglücken), die
Zeilen 8 und 14 kamen beim Schreiben dazu, die Überschrift wurde nicht
mitgezogen. Klassische Kopf-gegen-Tabelle-Drift.

---

### P-10 · **niedrig** · Die Gegenprobe behauptet „jeder Einmalbetrag", belegt aber je Anbieter — zwei Werte haben keine Fundzeile

**Fundstelle:** `handel/preisliste-vorlaeufig.md` § 5.5, erster Satz
(„**Jeder Einmalbetrag der Klassen A und B** wurde am Rohbeleg selbst
nachgelesen") und Aufzählungspunkt 1 („**6 von 6** Anbietern … am
Rohbeleg bestätigt") — gegen
`sensibel/rohbelege-R12-A/gegenprobe-einmalbetraege-2026-08-13.txt`.

**Sachverhalt:** Der Nenner der Gegenprobe ist der **Anbieter** (6 von
6), die Behauptung im Satz davor der **Betrag**. Das Protokoll listet
je Datei höchstens vier Fundzeilen; dabei fehlen:

- **W5 4.050 €** — im Protokoll erscheinen nur 900 · 900 · 1.980;
- **M2 599 / 799 / 799 €** — im Protokoll erscheint nur die
  Fundzeile zu 399 € („Basic 79,00 €/Monat + 399,00 € einmalige
  Einrichtung").

**Ich habe beide unabhängig nachgeholt — die Aussage stimmt sachlich:**
`agent2-cstack-start.txt` trägt „ab 4.050 €" (zwei Fundstellen, u. a.
„Full Stack Flow + Full Care (ab 4.050 €, 499 €/Monat)");
`fund/wettbewerbsbild.md` § B10.4 trägt die vier iiQ-Check-Stufen
vollständig (399 / 599 / 799 / 799). **Der Befund betrifft den Beleg,
nicht den Wert.**

**Warum es trotzdem zählt:** W5 4.050 € ist einer der beiden Werte, die
die Zeile „Obere Orientierung für größere Häuser — bis rund 4.200 €"
tragen. Eine Gegenprobe, deren Nenner am **Auswahlkriterium** (Anbieter)
statt am **Prüfgegenstand** (Betrag) hängt, ist genau die Konstruktion,
vor der die Projektregel zu „x von y" warnt: 6/6 kann gar nicht anders
ausfallen, sobald je Anbieter *ein* Treffer genügt.

**Ursachenvermutung:** Die Protokolldatei wurde offensichtlich mit
einer Kopfbegrenzung je Datei erzeugt (vier Zeilen bei W1, W2, W4, W5;
drei bei W3, W6 — dort gibt es nicht mehr). Die abgeschnittene Ausgabe
sieht vollständig aus, weil je Anbieter etwas dasteht.

---

### P-11 · **niedrig** · Die Quellstand-Angabe der Preisliste widerspricht sich selbst

**Fundstelle:** `handel/preisliste-vorlaeufig.md`, Kopfkasten,
Schlussblock: „**Quellstand:** Repo-HEAD `e112845`,
`handel/preismodell-optionen.md` **in der Fassung mit den
✅-Nachträgen vom 13.08.**"

**Sachverhalt:** Bei `e112845` (Tagesstart-Commit) existierten die
✅-Nachträge noch **nicht** — sie sind im selben Commit `9a0b0bd`
entstanden wie diese Datei (nachgewiesen: `9a0b0bd` fügt 503 Zeilen in
`preismodell-optionen.md` ein, darunter alle ✅-Kästen). Der Satz nennt
einen Hash und eine Fassung, die zu diesem Hash nicht gehört.

**Ursachenvermutung:** Der Hash wurde beim Anlegen der Datei aus
`git log` genommen (damals korrekt: HEAD = Lesestand), der Fassungssatz
beim Fertigstellen ergänzt. Genau die Konstellation, die die
Projektregel meint, wenn sie sagt, ein Verifikationsvermerk altert durch
den eigenen späteren Nachtrag.

---

### P-12 · **niedrig** · Eine eigene Ableitung steht im selben Satz wie „ausdrücklich entschieden"

**Fundstelle:** `handel/preisliste-vorlaeufig.md` § 4,
Mechanik-Tabelle, Zeile „Worauf wirkt der Rabatt?": „**Auf die
Grundgebühr S1 — ausdrücklich entschieden. Nicht** auf den
zimmerabhängigen Anteil S2, **nicht** auf die durchgereichte
Infrastruktur (§ 2) …"

**Sachverhalt:** Das Entscheide-Protokoll sagt nur: „Mehrhaus-Rabatt
**auf die Grundgebühr** als Stellschraube". Die beiden
Negativ-Abgrenzungen (nicht S2, nicht Infrastruktur) sind — sachlich
gut begründete — **Ableitungen dieser Session**, stehen aber ohne
④-Kennzeichnung unmittelbar hinter dem Wort „entschieden". Das Dokument
kann es besser: Bei S4 markiert es dieselbe Konstruktion sauber
(„Ableitung aus E-2a, **④** — der Entscheid sagt es für die Startgebühr
nicht ausdrücklich").

**Ursachenvermutung:** Der Satz ist als Argumentationskette geschrieben
(Entscheid → Konsequenz), nicht als Belegstufen-Liste. In einer
Tabellenzelle verschmelzen beide Teile optisch zu einer Aussage.

---

### P-13 · **niedrig** · Interner Fehlverweis auf die Gegenprobe

**Fundstelle:** `handel/preisliste-vorlaeufig.md` § 5.1, Vorbemerkung:
„… **plus** eine eigene Gegenprobe am Rohbeleg — **s. § 5.4**."

**Sachverhalt:** § 5.4 ist die *Kreuzprobe gegen die eigene
Kostenseite*. Die Gegenprobe am Rohbeleg steht in **§ 5.5**. Ein Leser,
der der Belegstufen-Angabe nachgehen will, landet im falschen
Abschnitt.

**Ursachenvermutung:** Abschnitt 5.5 ist erkennbar nachträglich
entstanden (er trägt Befunde, die erst bei der Gegenprobe auffielen);
der Verweis wurde vor der Einschiebung gesetzt und nicht nachgezogen.

---

### P-14 · **niedrig** · Der N-10-Kasten importiert eine Belegstufen-Notation, deren Legende in der Zieldatei fehlt

**Fundstelle:** `handel/foerderarchitektur-beraterrolle.md`,
🟢-Nachtrag 13.08.2026 (Posten N-10), Quellentabelle und Gegenbefund.

**Sachverhalt:** Die Datei führt eine **zweiachsige** Notation mit
eigener Legende: Leseweg `BYTE`/`AGENT`/`SEKUNDÄR` × Quellenart
`AMTL`/`FORM`/`ANBIETER-SELBST`/`EIGEN`. Der neue Kasten verwendet
diese Notation korrekt — **und zusätzlich** die Marken ①/③ aus
`preismodell-optionen.md` („`ANBIETER-SELBST` (③)", „① am Rohbeleg
selbst gelesen"). Die ①–⑤-Legende steht in dieser Datei **nicht**; wer
sie nicht auswendig kennt, kann die Stufe nicht auflösen.

Zweitens ist der Kasten in sich uneinheitlich: Der Kopf deklariert
„Leseweg `SEKUNDÄR`" für den Wert, während zwei Zeilen darunter „am
Rohbeleg gelesen" bzw. „① am Rohbeleg selbst gelesen" steht — das wäre
`BYTE`, nicht `SEKUNDÄR`. Sachlich ist beides richtig (das **Band**
stammt aus dem Repo-Dokument, die **W4-Zeile und der Gegenbefund** sind
selbst gelesen), aber der Kopf sagt es nicht.

**Ursachenvermutung:** Der Kasten wurde im Kontext von
`preismodell-optionen.md` formuliert (dort gilt ①–⑤) und in eine Datei
mit anderer Notation eingesetzt. Die Legendenfrage stellt sich beim
Schreiben nicht, weil beide Notationen der schreibenden Session
gleichzeitig präsent sind.

---

### P-15 · **Hinweis** · „Der gesamte Text unterhalb dieses Kastens ist die Fassung vom 12.08.2026"

**Fundstelle:** `handel/preismodell-optionen.md`, Kopf-Nachtragskasten,
zweiter Absatz.

Unterhalb des Kastens stehen **15 weitere Nachtragskästen vom
13.08.2026**. Gemeint ist offensichtlich „der fortlaufende Text", und
der nächste Satz stellt das klar. Als Einzelsatz ist die Aussage
falsch — und es ist ausgerechnet die Aussage, mit der das Dokument
seine eigene Nachtrags-Disziplin behauptet.

---

### P-16 · **Hinweis** · Der „Faktor ~2" rechnet einen „ab"-Preis gegen einen Listenpreis

**Fundstelle:** `handel/foerderarchitektur-beraterrolle.md`,
N-10-Kasten, Gegenbefund; wortgleich in
`handel/preisliste-vorlaeufig.md` § 5.4, letzter Absatz.

Der Gegenbefund stellt „160 € × 8 h = 1.280 €" gegen „**ab** 600 €
netto". Am Rohbeleg selbst gelesen und bestätigt
(`agent2-angelstone-preisliste.txt`: Rubrik „Technologieberatung /
01 Eintrittsangebot / Tech-Check / ab 600 € netto / 1 Tag ·
Festpreis") ✔. Der **„ab"-Charakter** der 600 € wird jedoch nicht
mitgeführt — obwohl § 5.3 Vorbehalt 1 derselben Datei genau diese
Eigenschaft zum eigenen Vorbehalt macht. Der Faktor ~2 ist damit eine
**Obergrenze** der Divergenz, keine gemessene Divergenz.

*Richtung: Der Befund arbeitet gegen das eigene Interesse (er macht die
Kreuzprobe pessimistischer). Die Ungenauigkeit ist also die
vorsichtige — sie bleibt eine.*

---

### P-17 · **Hinweis** · „Der Break-even wird kürzer" trägt eine ungenannte Ceteris-paribus-Prämisse

**Fundstelle:** `handel/preisliste-vorlaeufig.md` § 1, erster
Spiegelstrich („Für uns günstig"); gleichlautend im § 7.5-Nachtrag der
Vorlage.

Der Break-even wird nur dann kürzer, wenn die **Servicegebühr betraglich
dem bisherigen Monatspreis entspricht**. Bleibt das Budget des Kunden
gleich (was der zweite Spiegelstrich selbst nahelegt: die
Gesamtrechnung steigt optisch), sinkt die durchsetzbare Servicegebühr
um eben die 38–58 € und der Deckungsbeitrag bleibt gleich. Die Aussage
ist als **④** gekennzeichnet und beide Richtungen sind genannt — die
Prämisse selbst steht aber nicht da.

---

### P-18 · **Hinweis** · „Drei getrennte Dinge" vs. Startgebühr als S4 in der Servicegebühren-Tabelle

**Fundstelle:** `handel/preisliste-vorlaeufig.md` § 1 („drei getrennte
Dinge": Infrastruktur · Servicegebühr · Startgebühr) gegen § 3
(Tabelle „Servicegebühr (getrennt ausgewiesen)", die S1–S3 **und** S4
Startgebühr enthält).

Kleine Strukturinkonsistenz: Was § 1 als dritte, eigenständige Position
einführt, erscheint in § 3 als vierte Zeile der zweiten Position. Für
das Angebotsdokument (R12-B) ist die Zuordnung relevant, weil sie
darüber entscheidet, ob der Mehrhaus-Rabatt (der laut § 4 auf S1 wirkt)
die Startgebühr überhaupt berühren kann.

---

### P-19 · **Hinweis** · „Die ‚ab'-Werte sind genau die Anbieter mit Betriebsbezug" gilt nur in einer Richtung

**Fundstelle:** `handel/preisliste-vorlaeufig.md` § 5.3, Vorbehalt 1.

Alle 7 „ab"-Werte stammen aus Klasse A ✔ (selbst nachgezählt) — aber
nicht alle Klasse-A-Werte sind „ab"-Werte: **W2-SmartAudit 490 €** ist
ein Festpreis und wird im selben Absatz korrekt unter den 8 festen
geführt. Das Wort „genau" behauptet eine Äquivalenz, die der eigene
Satz zwei Zeilen weiter widerlegt.

---

## Nicht prüfbar (eigenes Ergebnis, nicht zu „unauffällig" geglättet)

1. **Der Wortlaut der User-Entscheide.** Die Belegstufe lautet
   ausdrücklich „sinngemäß — Wortlaut nicht archiviert". Ich konnte die
   ✅-Vermerke nur gegen das **Briefing** prüfen, nicht gegen die
   Erhebungsquelle. Ob das Briefing den Dialog korrekt wiedergibt, ist
   von hier aus **nicht feststellbar** — und damit auch nicht, ob eine
   Formulierung wie „Startgebühr VERSTÄRKT" im Gespräch genauso fiel.
   *Das ist keine Kritik an R12-A: Die Session hat die Belegstufe an
   jeder Stelle korrekt und sichtbar mitgeführt.*
2. **Aktualität der Rohbelege.** Alle Marktzahlen beruhen auf Abzügen
   vom **12.08.2026**. Ob sie den Live-Stand der Anbieterseiten
   wiedergeben, ist nicht prüfbar (kein Netzabruf im Prüfauftrag). Die
   Preisliste weist das in § 5.5 selbst aus ✔.
3. **M1, M3, M5, M7.** Diese Bestandsanker habe ich **nicht** am
   Rohbeleg gegengeprüft — für M1 (AKZENT) und M7 (Apaleo-Store) liegen
   in `rohbelege-R11-A/` keine Abzüge; M5 („ab 130 €") habe ich in
   `agent1-melevo-preise.txt` gefunden, den Stunden-Bezug aber nicht im
   Volltextumfeld verifiziert. Diese vier Anker sind in meiner Prüfung
   als **② BESTAND übernommen, nicht nachgemessen.**

## Offen geblieben (Prüfschritt nicht zu Ende geführt)

- **Ein vollständiger Satz-für-Satz-Abgleich `preismodell-optionen.md`
  § 6.2/§ 6.3 ↔ `preisliste-vorlaeufig.md` § 5.1** wurde **zeilenweise
  für alle 13 Anker** durchgeführt (Betrag, Scope, Steuerbasis) —
  **nicht** aber für die *Leistungsbild*-Beschreibungen in Spalte 2.
  Dort habe ich nur W1, W2, W5 und W6 gelesen. Für M2, M4, M6, W3 und
  W4 ist die Leistungsbeschreibung **ungeprüft**.

---

## Zusatzfrage 1 — Welche Verfälschung hätte mein Verfahren NICHT gefangen?

Drei Klassen, konkret benannt:

1. **Eine falsche Zahl in M1, M3, M5 oder M7.** Für diese vier Anker
   gibt es im zugänglichen Rohbelege-Bestand keinen Abzug; ich habe sie
   aus `fund/wettbewerbsbild.md` bzw. `preismodell-optionen.md`
   übernommen. Wäre der Fehler bereits in R5/R6 entstanden, hätte ich
   ihn reproduziert statt gefunden — mein Prüfweg deckt in diesem
   Bereich nur die **Übertragung**, nicht den **Ursprung**.
2. **Eine Verfälschung im Briefing selbst.** Mein gesamter
   Kategorie-1-Befund („10 von 10 korrekt") misst die Übereinstimmung
   `Briefing → Dokument`. Hätte das Briefing einen Entscheid falsch
   protokolliert, wäre meine Prüfung **grün** und die Aussage trotzdem
   falsch. Es gibt für diese Achse keine zweite Quelle — der Wortlaut
   ist nicht archiviert.
3. **Eine plausible Verfälschung im Fließtext einer Bewertung.** Ich
   habe Zahlen, Schlüssel und Vorbehalte systematisch gegengelesen; die
   **argumentativen Zwischensätze** (z. B. „Kein einziger dieser sechs
   Werte bepreist das Aufsetzen einer eigenen betriebenen Umgebung")
   habe ich nur auf innere Stimmigkeit geprüft, nicht jeden einzeln
   gegen das Leistungsbild des jeweiligen Anbieters. Genau in dieser
   Zone sitzt P-01 — und ich habe ihn nur gefunden, weil ein
   **maschinelles** Ergebnisprotokoll danebenlag. Ohne das Skript
   hätte ich die Rangaussage vermutlich passieren lassen.

Ein vierter, methodischer Punkt: Ich habe die Behauptung „0 gelöschte
Zeilen" als Beleg für Kategorie 6 genommen. Das ist korrekt für
*Löschungen* — eine **inhaltliche** Neufassung durch einen
hinzugefügten Kasten, der eine Vorfassung stillschweigend umdeutet,
hätte diese Prüfung passiert. Ich habe sie deshalb an den drei
benannten Risikostellen zusätzlich von Hand gelesen; an den übrigen 13
Nachtragsstellen habe ich sie **gelesen, aber nicht gegen die
Vorfassungs-Semantik durchargumentiert**.

## Zusatzfrage 2 — Hätte ich meine Funde auch OHNE die Kategorien-Hinweise gefunden?

**Teils — und die Antwort fällt je Befund deutlich verschieden aus.**

- **Ohne Hinweise sicher gefunden:** P-01, P-08, P-09, P-10. Alles
  Zahlen, die man beim bloßen Nachrechnen anstößt. Die Anweisung
  „rechne selbst nach, glaube keine gemeldete Zahl" war dafür der
  entscheidende Anstoß — aber sie ist keine Kategorie, sondern
  Grundhandwerk.
- **Nur wegen der Kategorien gefunden:** P-03 und P-07. Beides sind
  *Auslassungen*. Auslassungen findet man nicht beim Lesen des
  Dokuments, sondern nur, wenn man mit einer Liste zu prüfender
  Vorbehalte **rückwärts** in die Quelle geht. Kategorie 4 hat mich
  gezwungen, die Vorbehaltsliste zu bauen; erst dabei fiel auf, dass
  die Liste im Auftrag (5 Punkte) unvollständig ist und dass die beiden
  fehlenden Vorbehalte gerade nicht darauf stehen.
- **Wegen der Kategorien gefunden, aber gegen ihre Richtung:** P-05.
  Kategorie 2 sagt „lies vom Protokoll rückwärts". Genau das führt zum
  Ergebnis „27 von 27 angekommen" — also zu einer Entwarnung. Der Fund
  entstand erst, als ich den Suchraum **über** den benannten
  Unterabschnitt hinaus erweitert habe. Die Kategorie hat mir den
  richtigen Reflex gegeben (rückwärts) und zugleich einen zu engen
  Suchraum vorgegeben.
- **Wahrscheinlich auch ohne Hinweise:** P-02, P-04, P-06 — sie fallen
  auf, sobald man beide Dokumente **nacheinander vollständig** liest.
  Allerdings: P-02 setzt voraus, dass man § 2.2 der Vorlage gelesen hat
  (nicht Teil des Prüfgegenstands) und P-06, dass man § 5.3 gelesen hat.
  Beide standen nicht im Auftrag; ich habe sie nur geöffnet, weil die
  Preisliste auf sie verweist. **Das ist die eigentliche Lehre für den
  nächsten Prüfauftrag:** Der Prüfgegenstand ist der Diff, der Prüfraum
  ist das, worauf der Diff zeigt.

---

## Übersichtstabelle

| Schwere | Anzahl | Befunde |
|---|---:|---|
| **schwer** | **0 von 19** | — |
| **mittel** | **7 von 19** | P-01 (Dichte-Rang falsch) · P-02 (Spanne trifft die gesperrte ⑤-Zahl) · P-03 (W1-Belegstufe verloren) · P-04 („ab 1.920 €" nicht zurückgezogen, Vorrangklausel kehrt es um) · P-05 (Startgebühr-Höhe ohne Entscheider) · P-06 (Durchreichung ↔ K03/K04 ungeklärt) · P-07 (M6 ohne Scope/Charakter) |
| **niedrig** | **7 von 19** | P-08 · P-09 · P-10 · P-11 · P-12 · P-13 · P-14 |
| **Hinweis** | **5 von 19** | P-15 · P-16 · P-17 · P-18 · P-19 |
| **Summe** | **19** | |

**Ergebnis je Pflicht-Kategorie (keine Kategorie ohne Ergebnis):**

| Kategorie | Ergebnis |
|---|---|
| 1 — ✅-Vermerke vs. Protokoll | **10 von 10 korrekt, keine Abweichung** |
| 2 — nicht angekommen | **27 von 27 Teilaussagen des Preismodell-Abschnitts angekommen**; 1 Befund aus dem übrigen Briefing (**P-05**) |
| 3 — Hypothese wirkt wie Beleg | **2 Befunde** (P-01, P-02); Kennzeichnungs-Disziplin im Übrigen hoch |
| 4 — Vorbehaltsverlust | **5 von 5 beauftragten Vorbehalten erhalten**; **2 nicht beauftragte verloren** (P-03, P-07) |
| 5 — Zahlen | **10 von 10 nachgerechneten Kernzahlen bestätigt**, 2 Zusatzaussagen falsch (P-08, P-09); Schlüsselbindung 13/13 ✔; Befunde P-07, P-10 |
| 6 — stille Neufassung | **keine Auffälligkeit** — 0 gelöschte Zeilen über alle drei Dateien; die drei Risikostellen (E-3, Reihenfolge-Kasten, § 12) sind vorbildlich gelöst |
| 7 — Widersprüche nach den Edits | **innerhalb der Vorlage keine**; **dokumentübergreifend 2** (P-04, P-06) plus 4 kleinere (P-11, P-13, P-14, P-18) |

**Zwei Dinge, die ausdrücklich als bestanden vermerkt gehören** (weil
eine Befundliste sonst als Gesamturteil gelesen wird): (a) Die
Nachtrags-Disziplin dieser Runde ist die sauberste, die im Prüfstand
messbar ist — **0 Löschungen bei 1.078 hinzugefügten Zeilen**, jede
Vorfassung lesbar, jede Korrektur als Kasten. (b) Die Session hat
**zwei eigene Entwurfsfehler selbst gefunden und sichtbar korrigiert**
(„7 statt 9 ab-Werte"; „dichtestes Fenster liegt bei 399–799 €, nicht
beim Hypothesenband") — beide habe ich unabhängig nachgerechnet, beide
Korrekturen sind richtig. Der zweite dieser Selbstfänge ist zugleich
die Stelle, an der P-01 sitzt: Der Fehler wurde zur Hälfte repariert.
