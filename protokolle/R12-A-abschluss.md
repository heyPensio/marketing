# R12-A — Abschlussmeldung (Ben Beckman)

> **Token-Verbrauch:** von der Session nicht erhebbar — Subagenten-Zahlen
> soweit bekannt: **Prüfer-Subagent 289.291 Tokens** (39 Werkzeugaufrufe,
> ~16,5 Min. Laufzeit). Weitere Subagenten wurden nicht eingesetzt.
>
> **Modell:** ⚠️ **nicht per Statuszeile verifizierbar** — die
> Statuszeile ist von der Session aus nicht lesbar, und die
> Selbstauskunft des Modells gilt nach CLAUDE.md Regel 7 ausdrücklich
> **nicht** als Beleg. Die Umgebungsangabe lautet **Opus 5 (1M
> context)**; die Bestätigung ist ein **User-Handgriff** (steht bereits
> als offener Posten im Tagesplan).
>
> **Runde:** R12 · **Datum:** 13.08.2026 · **Auftrag:**
> `protokolle/tagesplan-2026-08-13.md`, Strang R12-A ·
> **Rohbelege:** `sensibel/rohbelege-R12-A/` (git-ignoriert, 5 Dateien)

---

## Block 1 — Gebaut und verifiziert

### Commits

| Hash | Inhalt | Pfade |
|---|---|---|
| **`9a0b0bd`** | Erststand aller vier Teile (**eingefrorener Prüfstand**) | `handel/preismodell-optionen.md` · `handel/preisliste-vorlaeufig.md` (neu) · `handel/foerderarchitektur-beraterrolle.md` |
| **`<Reparatur-Commit>`** | Disposition aller 19 Prüferbefunde + Prüferprotokoll + diese Meldung | dieselben drei Dateien · `protokolle/R12-A-pruefer.md` · `protokolle/R12-A-abschluss.md` |

*(Der zweite Hash wird beim Commit dieser Datei eingesetzt — s. Nachtrag
am Ende.)*

### Teil 1 — Entscheide E-1…E-8 in § 11

**9 ✅-Kästen für 10 Entscheidungspunkte** (E-5 und E-5a teilen sich
einen Kasten): E-1 · E-2a · E-2 · E-3 · E-4 · E-5+E-5a · E-6 · E-7 ·
E-8. Jeder mit Entscheid-Inhalt, Quelle, Datum und Form.

**Belegstufe einheitlich und nirgends abgeschwächt:** „Briefing-Dialog
13.08.2026, Dropdown + Freitext, **sinngemäß — Wortlaut nicht
archiviert**". **Kein Entscheid ist als wörtliches Zitat gesetzt.**

Die drei im Auftrag als heikel benannten Stellen:
- **E-3** als sichtbarer **Neufassungs-Kasten** — die ursprüngliche
  Frage („dürfen wir vorläufig von W-A ausgehen?") bleibt stehen, die
  Neufassung (W-B/A3, Durchreichung, getrennte Servicegebühr,
  Z-6-Vorbehalt) steht daneben. Die Grenze „Rechenbasis entschieden ≠
  Architektur entschieden" trägt der Kasten im Wortlaut, dazu
  Vorwärtsverweise an **§ 5.4** und **§ 4.1**.
- **Reihenfolge-Kasten (P-14 der Vorrunde):** Nachtrag „E-1 bewusst vor
  E-6 entschieden, in Kenntnis der schwächeren Beleggrundlage" — **der
  alte Warntext bleibt stehen**, die Höhe bleibt Hypothese bis E-6.
- **§ 12 (Empfehlung):** Verweis statt Umschrift — Ergebnis
  übereinstimmend, **Begründung abweichend** (Markt/USP vs. Liquidität),
  die Einschränkung „wenn E-6 klein ist, wäre (i) besser" ist
  **nicht** ausgeräumt.

**16 Nachtragskästen** insgesamt, Vorwärtsverweise in Kopfkasten, § 2.3,
§ 3, § 4.1, § 5.4, § 6.3.2, § 6.4, § 7.2, § 7.5, § 8, § 9, § 10, § 11,
§ 12, § 13.

### Teil 2 — Startgebühr-Spanne (④ Hypothese)

**Arbeitshypothese: rund 1.500–2.500 €** je Objekt/Haus für die
Pilot-Größenklasse (10–25 Einheiten), obere Orientierung **bis rund
4.200 €** für größere Häuser. Ort: `handel/preisliste-vorlaeufig.md`,
Abschnitt „Startgebühr — Herleitung der Hypothesen-Spanne".

Mitgeliefert: **Auswahlregel** (drei Nähe-Klassen, Ausschluss der
Projektbau-Anker W4/W6 samt Hinweis, dass dieser Ausschluss die Spanne
**gegen** das eigene Interesse senkt), **Zählweg** (15 Einzelwerte,
Fensterzählung per Skript), **vier Vorbehalte** (Untergrenzen-Spanne ·
uneinheitliche Steuerbasen · kein Anker misst unser Leistungsbild ·
keine Zahlungsbereitschafts-Deckung) und eine **Kreuzprobe** gegen die
Kostenseite (1,5–4,2 Personentage zum Marktsatz).

### Teil 3 — `handel/preisliste-vorlaeufig.md` (neu)

Alle sechs beauftragten Bausteine: Kopfkasten mit vier Vorbehalten +
„Nicht Teil dieser Datei" · Durchreichungs-Zeilen **K1–K7** aus § 4.1
übernommen (**K5/K6 bleiben sichtbar offen, nicht 0 €**; Vapi-Zeile mit
Nutzungsrisiko-Vermerk) · **Servicegebühr getrennt** mit sprechenden
Platzhaltern (`<GRUNDGEBUEHR-JE-HAUS — NICHT FESTGELEGT>` u. a., keine
plausiblen Dummys) · **Mehrhaus-Rabatt** als Stellschraube · Startgebühr
· Verweis-Block „Was diese Liste NICHT entscheidet".

### Teil 4 — N-10 in `handel/foerderarchitektur-beraterrolle.md`

Nachtragskasten in **§ 3.1** (die einzige Stelle des Dokuments, die mit
Sätzen je Zeiteinheit rechnet): Marktband **125–160 €/h**, drei Quellen
je mit eigener Belegstufe, drei Einschränkungen, Spiegelung am
**IFB-Beratertagessatz-Deckel 1.100 €** (Band × 8 h = 1.000–1.280 €/Tag,
die 8 h als Annahme gekennzeichnet).

### Eigene Verifikation (vor dem Prüfer)

| Kontrolle | Ergebnis | Beleg |
|---|---|---|
| Einmalbeträge am Rohbeleg | **20 von 20 Einzelbeträgen** mit eigener Fundzeile (13 Klasse A/B am Rohbeleg, 7 Klasse C an der Ur-Quelle) | `gegenprobe-einmalbetraege-2026-08-13.txt` |
| Positivkontrolle je Datei | Anbietername trifft 5–17× **je Datei** (pro Kanal, nicht im Sammellauf) | ebd. |
| Gegenkontrolle | zwei erfundene Beträge (1.921 €, 7.001 €) → **0 Treffer** ✔ | ebd. |
| Zahlen-Übernahme Quelle → Preisliste | **29 von 29** Werten wiedergefunden; Positiv- und Gegenkontrolle greifen | `uebernahme-kontrolle-ausgabe-2026-08-13.txt` |
| Fenster-/Clusterzählung | per Skript, nicht im Kopf | `cluster-zaehlweg.js` + Ausgabe |
| Keine stille Neufassung | **1.078 Einfügungen, 0 Löschungen** über alle drei Dateien | `git show --numstat 9a0b0bd` |

⚠️ **Grenze der Übernahme-Kontrolle, ausdrücklich:** Sie prüft die
**Anwesenheit** eines Betrags in der Quelle, **nicht** seine Zuordnung
zum richtigen Schlüssel. Eine Vertauschung Betrag ↔ Schlüssel hätte sie
**nicht** gefangen; dagegen half nur zeilenweises Lesen.

### Prüfer-Disposition — 19 von 19 Befunden, kategorienweise mit Nenner

**Prüfstand:** `9a0b0bd`, unabhängiger Subagent mit frischem Kontext,
Protokoll `protokolle/R12-A-pruefer.md` (1.002 Zeilen).

| Schwere | Anzahl | Disposition |
|---|---|---|
| **schwer** | **0 von 19** | — |
| **mittel** | **7 von 7 repariert** | P-01 · P-02 · P-03 · P-04 · P-05 · P-06 · P-07 |
| **niedrig** | **7 von 7 repariert** | P-08 · P-09 · P-10 · P-11 · P-12 · P-13 · P-14 |
| **Hinweis** | **5 von 5 repariert** | P-15 · P-16 · P-17 · P-18 · P-19 |
| **Summe** | **19 von 19 repariert** | **0 verworfen, 0 an einen Träger abgegeben** |

**Die sieben mittleren im Einzelnen:**

| ID | Befund | Reparatur |
|---|---|---|
| **P-01** | Das Fenster 1.920–2.320 € war als „zweitdichtestes" ausgewiesen — es ist **Rang 4**; zwei 5er-Fenster liegen dazwischen. Beide Fehler dieser Stelle gingen in dieselbe Richtung (Band der Hypothese dichter belegt aussehen lassen) | Rangaussage korrigiert, Rang 2/3 ergänzt, **beide** Korrekturen als sichtbare Kette dokumentiert |
| **P-02** | Die Spanne 1.500–2.500 € fällt zahlengleich mit Bandgrenzen der in § 2.2 **gesperrten** ⑤-ChatGPT-Zahl zusammen — ohne Offenlegung (§ 7.5 hatte dafür eigens 1.200 € statt 1.500 € gewählt) | Eigener Offenlegungs-Kasten: Koinzidenz benannt, entschärfende Gründe (andere Größe: Monatspreis ↔ Einmalbetrag; eigener Zählweg) **und** die verbleibende Lesbarkeitsgefahr |
| **P-03** | Der Belegstufen-Vorbehalt zu **W1** („Ratgeber-Artikel, eine Stufe unter einer Preisliste") fehlte — ausgerechnet beim tragenden Anker. Ursache: Er stand in der Quelle im **Fließtext unter** der Tabelle, die analoge W5-Schwäche **in** der Zeile | In Tabellenzeile W1 **und** in Vorbehalt 3 ergänzt |
| **P-04** | Die selbst gefundene Präzisierung „**ab** 1.920 €" wurde nicht in die Quelle zurückgezogen (4 Stellen) — und die Vorrangklausel der Preisliste ließ die unpräzisere Fassung gewinnen | Sammelnachtrag in § 6.3.2 der Quelle, alle vier Stellen benannt. Repoweite Gegenprobe: kein weiterer Zielort (FoxifAI steht nicht im Wettbewerbsbild); Protokolle bleiben als historische Stände unberührt |
| **P-05** | Die **Startgebühr-HÖHE** steht im Briefing unter „Offene **User**-Entscheide" — beide Dokumente nannten nur Zulieferer (E-6/E-7), keinen Entscheider | Entscheider **User** in beiden Dokumenten ergänzt, mit der Reihenfolge „MKT-Schätzung → E-6 → User entscheidet"; am Rohbeleg (Briefing) selbst nachgelesen ✔ |
| **P-06** | Die Durchreichung setzt voraus, dass **wir** Vertragspartner sind — E-3 will zugleich den Kunden als Eigentümer. Der Bestandsbefund **K04** (Vapi, „Konten-/Vertragswiderspruch, sofern Vapi zur Eigentumsumgebung zählt") fehlte vollständig; der Kopfkasten deckte nur n8n/Z-6 ab | Eigener Kasten in § 2: Vertragspartner-Frage gestellt, beide Auflösungen durchgerechnet, K03/K04 benannt, Anschluss an **Z-5** und **E-4** |
| **P-07** | **M6** (399/849/1.599 €) ohne Größen-Scope (20/75/100 Zi.) und ohne den Quellen-Vorbehalt „keine Tarife, sondern Preisbeispiele" — Verzerrung zugunsten einer höheren Servicegebühr | Scope je Wert und Charakter-Vorbehalt ergänzt; Hinweis, dass nur der unterste Wert in unserer Zielgröße liegt |

**Vollzähligkeits-Kontrolle der Disposition:** grep über die drei
Fachdateien — **P-01 bis P-19 sind sämtlich referenziert**, keine Lücke.
⚠️ **Das belegt Anwesenheit, nicht Wirksamkeit** — die inhaltliche
Richtigkeit jeder Reparatur trägt diese Session, nicht der grep.

### Lauf-Status des Prüfers (nicht zu „unauffällig" geglättet)

**Der Prüfer lief vollständig durch** — kein Abbruch, alle sieben
Pflicht-Kategorien mit Ergebnis, beide Zusatzfragen beantwortet. Er hat
folgende Prüfschritte **selbst** als begrenzt ausgewiesen:

- **3 Schritte „nicht prüfbar":** (a) der **Wortlaut** der User-Entscheide
  (nicht archiviert — die ✅-Vermerke konnten nur gegen das Briefing
  geprüft werden, nicht gegen die Erhebungsquelle); (b) die
  **Aktualität** der Rohbelege (Abzüge vom 12.08.); (c) **M1, M3, M5,
  M7** — als ② BESTAND übernommen, **nicht nachgemessen** (für M1/M7
  existiert kein Rohbeleg-Abzug).
- **1 Schritt offen:** Der Satz-für-Satz-Abgleich der 13 Anker lief
  vollständig für **Betrag, Scope, Steuerbasis**, aber nur für W1, W2,
  W5, W6 auch für die **Leistungsbild-Spalte**. Für **M2, M4, M6, W3,
  W4** ist die Leistungsbeschreibung **ungeprüft**.
- **Selbst benannte Blindstellen:** eine falsche Zahl in M1/M3/M5/M7
  hätte er reproduziert statt gefunden; eine Verfälschung **im Briefing
  selbst** wäre grün durchgelaufen (keine zweite Quelle); und die
  „0 Löschungen"-Prüfung fängt keine inhaltliche Umdeutung durch einen
  **hinzugefügten** Kasten — die hat er nur an drei Risikostellen von
  Hand durchargumentiert, an den übrigen 13 gelesen, aber nicht
  durchargumentiert.

---

## Block 2 — Offen geblieben

| Punkt | Stand | Warum offen |
|---|---|---|
| **Preishöhe F-III** (Grundgebühr, Zimmeranteil, konkrete Startgebühr) | offen — **Entscheider ist der User** | braucht E-6 (Aufwand) und möglichst E-7; die Platzhalter S1–S3 sind bewusst leer |
| **E-6 Einführungsaufwand (B1)** | Träger benannt (Ruffy/heypensio), **kein Kalendertermin** | hängt am nächsten Pilot-Onboarding-Schritt |
| **E-4 / Z-6 n8n-Lizenz** | Träger benannt (Ruffy/heypensio), **kein Kalendertermin** | gebündelt mit der n8n-MCP-Entscheidungsvorlage |
| **K5, K6** (Cloudflare Pages, Domain/DNS) | **nicht erhoben**, sichtbar offen geführt | nicht im Auftrag; wäre eigene Messung |
| **Leistungsbild-Spalte für M2, M4, M6, W3, W4** | **vom Prüfer ungeprüft** | s. Lauf-Status oben |
| **Zentrale-Zulieferung Z-1…Z-7** | **nicht übergeben** | keine Meldedatei im Postkorb — nicht im Scope dieser Session, läuft über die Leitsession |
| **Modell-Statuszeile** | unbestätigt | User-Handgriff |

**Ausdrücklich nicht getan (Auftragsgrenzen eingehalten):** nichts nach
außen · nichts neu entschieden (wo das Protokoll schweigt, steht
„offen") · fremde Repos nur gelesen · kein eigener Debrief · keine
Dateien außerhalb des Scope angefasst.

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

Jeder mit Zielort; geprüft, ob der Zielort existiert.

| ID | Befund | Zielort |
|---|---|---|
| **N-1** | ⚠️ **Vertragspartner-Frage der Durchreichung** (K03/K04): Ist der Kunde Eigentümer und Zugangshalter, ist unklar, wer Vertragspartner von Hetzner/Supabase/Vapi ist — **ist er es selbst, gibt es nichts durchzureichen** und die Kostenzeilen sind gar keine Zeilen unserer Liste. Das ist eine Strukturfrage, keine Zahl | **heypensio/Ruffy** (E-4, zusammen mit Z-6) **und** Zentrale (**Z-5** führt die Frage bereits) — in der Preisliste § 2 ausgewiesen |
| **N-2** | **Die Break-even-Formel in § 7.5 gilt unter Durchreichung anders:** Der Nenner ist nicht mehr „Monatspreis − laufende Kosten", sondern „Servicegebühr − Arbeitszeit". Zwei gegenläufige Folgen (kürzerer Break-even ↔ optisch höhere Kundenrechnung) | **MKT-HANDEL / R12-B** — als Nachtrag in § 7.5 und in der Preisliste § 1 bereits eingearbeitet |
| **N-3** | **Zuordnungsfrage des Mehrhaus-Rabatts: Betreiber oder Firmierung?** Der eigene Pilot ist ein Kunde mit drei Objekten in **drei Firmierungen** — je nach Antwort bekäme er den Rabatt oder nicht. Muss **vor** der Höhe geklärt werden | **R12-B** (`handel/angebotsarchitektur.md`, existiert noch nicht — wird gerade gebaut) |
| **N-4** | **Kurz-ID-Kollision „N-10":** In `protokolle/R11-A-abschluss.md` ist N-10 der Marktstundensatz, in `handel/kanal-rechtsmatrix.md` ein DSGVO-Befund (Art. 6 Abs. 4) aus R09-A. Zwei getrennt nummerierte Abschlussmeldungen kollidieren im gemeinsamen Repo. Im N-10-Kasten nur **benannt**, nicht aufgelöst | **Leitsession** (Doku-Hygiene / ID-Vergabe) |
| **N-5** | **Die in E-1 vorgesehene spätere Verschiebung** (Startgebühr runter, Monatsanteil rauf) ist eine **Preisänderung im laufenden Vertrag** und fällt damit unter **Z-4** — obwohl Z-4 formal an der nicht gewählten Option (iv) hängt und dadurch als nachrangig erscheint | **Zentrale** (Z-4) — in § 10 als Nachtrag ausgewiesen |
| **N-6** | **E-5a wirft eine Folgefrage auf, die niemand hat:** Der Entscheid sagt „LEANE ist kostenloses Pilotobjekt" — nicht, **wie** die unentgeltliche Leistung gegenüber einer **dritten Rechtsträgerin** dokumentiert wird | **Zentrale / StB** — in § 11 E-5 und in der Preisliste § 6 vermerkt |
| **N-7** | **Marktbefund zum Stundensatz:** Derselbe Anbieter, der „160 €/h netto" listet (W4), verkauft **einen Tag als Festpreis ab 600 € netto**. Ein Listen-Stundensatz kann die real gezahlte Tagesvergütung um bis zu Faktor 2 nach oben verzerren — relevant überall, wo mit dem Band 125–160 €/h kalkuliert wird | **MKT-HANDEL** — in beiden betroffenen Dateien eingearbeitet |
| **N-8** | **Zwei Terminanker ohne Datum:** E-4 und E-6 haben Träger, aber kein Kalenderdatum. Für E-6 ist das kritisch — es ist die Zahl, ohne die die Startgebühr-Höhe nicht entscheidbar wird, und E-1 ist bereits **ohne** sie gefallen | **Leitsession** (Terminposten / Rundenplanung) |

**Bewusst nicht verfolgt:** Die vom Prüfer genannte Blindstelle
„M1/M3/M5/M7 nicht am Rohbeleg nachgemessen" — für M1 und M7 existiert
im Bestand kein Abzug, eine Neuerhebung wäre eine eigene Recherche und
war nicht beauftragt. Die Anker sind als ② BESTAND geführt, ihre
Belegstufe ist damit korrekt ausgewiesen.

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **⭐ Die maschinelle Zählung war richtig — die von Hand formulierte
   RANGAUSSAGE darüber war zweimal falsch.** Ich habe die Fenster per
   Skript gezählt, das Protokoll gesichert — und dann *über* die
   Ausgabe einen Satz geschrieben, den die Ausgabe nicht deckte
   („kein anderes Fenster hat mehr als drei Werte"; danach
   „zweitdichtestes"). Der zweite Fehler überlebte die eigene
   Korrektur des ersten. **Beide gingen in dieselbe Richtung: Sie
   ließen das Band der eigenen Hypothese dichter belegt aussehen.**
   Lehre: **Wer eine Zählung maschinisiert, maschinisiert auch die
   Aussage darüber** — oder liest die Ausgabe Zeile für Zeile gegen den
   geschriebenen Satz. Die Zeilen, die zwischen „Sieger" und „gesuchtem
   Wert" standen, habe ich schlicht nicht gelesen.
2. **Eine Gegenprobe mit dem falschen NENNER sieht vollständig aus.**
   „6 von 6 Anbietern bestätigt" kann gar nicht anders ausfallen,
   sobald je Anbieter ein Treffer genügt — während der Satz daneben
   „jeder Einmalbetrag" behauptete. Der Prüfgegenstand war der
   **Betrag**, der Nenner der **Anbieter**. Zwei Werte hatten deshalb
   keine Fundzeile. Lehre: **Der Nenner gehört an den Prüfgegenstand,
   nicht an das Auswahlkriterium.**
3. **`grep` ist case-sensitiv — und das erzeugt lautlose Negative.**
   `grep "Tagessatz"` findet **„Beratertagessatz" nicht**. Hätte ich
   nur diesen Lauf gemacht, wäre die einzige Stelle des Zieldokuments,
   die mit Tagessätzen arbeitet, „nicht gefunden" gewesen — und der
   N-10-Kasten wäre an der falschen Stelle gelandet. Gefangen nur, weil
   ein zweiter Lauf über `1\.100` dieselbe Zeile fand.
4. **Kontextfenster-Muster verfehlen kurze Zeilen.**
   `grep -o ".\{160\}1\.920.\{160\}"` lieferte **0 Treffer** für einen
   Betrag, der elfmal in der Datei steht — in entmarkuptem Text stehen
   Phrasen zeilengetrennt. Ein Negativ, das nicht passen kann, ist
   zuerst ein Werkzeugfehler; hier hätte es fast den bauformnächsten
   Anker als „nicht belegbar" ausgewiesen.
5. **Ein Nachtrag kann den Satz mitreißen, den er kommentiert.** Beim
   Einfügen des § 7.2-Kastens ist der Beschreibungssatz „Wie (i),
   zusätzlich eine einmalige Einrichtungsgebühr zu Beginn" aus dem
   `old_string` gefallen und verschwunden. Sofort per grep gefunden und
   wiederhergestellt — aber genau so entsteht eine stille Neufassung in
   einem Zug, der sie verhindern soll. **Nach jedem Kasten-Edit prüfen,
   ob der kommentierte Text noch dasteht.**
6. **Ein Verifikationsvermerk altert durch den eigenen späteren
   Nachtrag.** Der Kopfblock der Preisliste nannte den Lesestand-Hash
   `e112845` und im selben Satz „in der Fassung mit den ✅-Nachträgen" —
   die es zu diesem Hash noch nicht gab, weil beides im selben Commit
   entstand.
7. **Der präzise adressierte Quellverweis wird zur Scheuklappe.** Der
   Auftrag nannte den Unterabschnitt „Preismodell E-1…E-8"; die Rubrik
   „**Offene User-Entscheide**" desselben Briefings — die den
   Entscheider der Startgebühr-Höhe benennt — stand daneben und wurde
   nicht gelesen (P-05). **Ein Quellverweis benennt, wo man anfängt,
   nicht, wo man aufhört.**
8. **Späte Erkenntnisse finden den Rückweg in „fertige" Dokumente
   nicht.** Die „ab 1.920 €"-Präzisierung entstand bei der Gegenprobe,
   als die Nachträge in der Quelle schon standen — sie blieb in der
   Ableitung stecken, und die Vorrangklausel hätte sie sogar umgekehrt
   (P-04). **Wer eine Ableitung schärft, zieht die Quelle im selben Zug
   nach.**
9. **Bei Tabelle→Tabelle-Übernahme fällt der Fließtext-Absatz weg.**
   Die W1-Belegstufen-Warnung stand in der Quelle **unter** der
   Tabelle, die analoge W5-Warnung **in** der Zeile — nur die zweite kam
   mit (P-03). Dieselbe Klasse wie „ein Zitatabgleich prüft, was als
   Zitat markiert ist, nicht den Fließtext daneben".
10. **Der Klassifikator blockierte den Push zweimal, der dritte Versuch
    lief** — bei unverändertem Kommando, unverändertem Kanal und
    identischem Commit. Bestätigt L-05 in der korrigierten Fassung:
    **zeitpunkt-/kontextgebunden, nicht kanalgebunden.**

### (ii) Bewährte Muster

1. **⭐ Der eigene Rohbeleg-Anker macht die eigene Arbeit prüfbar — und
   fängt die Fehler der Vorrunde mit.** Weil ich die Einmalbeträge
   selbst am Rohbeleg gelesen habe statt sie aus dem Vorgängerdokument
   zu übernehmen, fiel „Pakete **starten bei** 1.920 Euro" auf. Das war
   nicht gesucht — es fiel beim Lesen der Zeile an.
2. **Der maschinelle Beleg „0 Löschungen bei 1.078 Einfügungen"** ist
   der billigste denkbare Nachweis der Nachtrags-Disziplin. Er kostet
   einen `git show --numstat` und beantwortet die Kategorie „stille
   Neufassung" für ein ganzes Dokument. ⚠️ **Mit bekannter Grenze:** Er
   fängt keine inhaltliche Umdeutung durch einen *hinzugefügten* Kasten.
3. **Die Ausschluss-Entscheidung sichtbar gegen das eigene Interesse
   begründen.** Der Ausschluss der Projektbau-Anker (W4/W6) senkt die
   Startgebühr-Spanne erheblich — das im Dokument auszuweisen („wer die
   Spanne anheben will, muss diese Klassengrenze angreifen, nicht die
   Rechnung") macht die Auswahl angreifbar und damit erst prüfbar.
4. **Den unbequemen Befund an die Stelle setzen, wo der Leser ankommt.**
   Dass die *häufigste* Einmalzahlung bei 399–799 € liegt — deutlich
   unter der eigenen Hypothese — steht als eigener Kasten direkt unter
   der Spanne, nicht in einer Fußnote. Der Prüfer hat daran anschließen
   können, statt es zu finden.
5. **Sprechende Platzhalter statt plausibler Dummys.**
   `<GRUNDGEBUEHR-JE-HAUS — NICHT FESTGELEGT>` kann niemand
   versehentlich als Preis zitieren; „450 €" könnte es.
6. **Die Prüfer-Kategorie „was ist gar nicht erst angekommen?" mit der
   Anweisung ‚vom Protokoll RÜCKWÄRTS lesen'** hat 27 von 27
   Teilaussagen erfasst — und der Prüfer hat selbst berichtet, dass
   genau diese Kategorie ihn zu einer Entwarnung geführt hätte, wenn er
   den Suchraum nicht **über** den benannten Abschnitt hinaus erweitert
   hätte. **Die Kategorie war richtig, ihr Suchraum zu eng** — beides
   gehört in den nächsten Prüfauftrag.
7. **Zwei Selbstfänge vor dem Prüfer.** Die eigenen Zahlen per Skript
   nachzurechnen, statt sie zu behaupten, hat zwei Fehler vor dem
   Commit gefunden. Der Prüfer fand an derselben Stelle den dritten —
   was zeigt: **Selbstprüfung senkt die Zahl der Befunde, sie ersetzt
   den Prüfer nicht.**

---

## Nachtrag: Commit-Hash dieser Meldung

*(Wird unmittelbar nach dem Commit ergänzt — die Datei kann ihren
eigenen Hash nicht enthalten.)*
