# R06-A — Abschlussmeldung (Ben Beckman, 10.08.2026)

> **Token-Verbrauch: von der Session nicht erhebbar — Subagenten-Zahlen
> soweit bekannt:** Prüferlauf (ein Subagent, `general-purpose`):
> **369.255 Tokens**, 65 Tool-Aufrufe, ~21,8 Minuten Laufzeit. Die
> Erhebung selbst lief **ohne Subagenten** (auftragsgemäß, wenige
> Quellen).
>
> **Auftrag:** P15 (Brandnamic-Partnerkreis) und P19 (Hotelkooperationen)
> aus `fund/wettbewerbsbild.md` § 7 auflösen.
> **Scope:** `fund/wettbewerbsbild.md` · `protokolle/R06-A-*.md` ·
> `sensibel/rohbelege-R06-A/`. Keine exklusiven Systeme, Web nur lesend,
> **kein Chrome**. Repo-Messstand zu Beginn `2098daf`, vor dem ersten
> Commit unverändert `2098daf`.

---

## 1. Gebaut und verifiziert

**Commits (nur eigene Pfade, je mit `-- <pfad>`):**

| Commit | Inhalt | Pfade |
|---|---|---|
| `cd90fb9` | P15/P19 aufgelöst — neue Abschnitte **B10** und **B11**, Bestand nachgezogen | `fund/wettbewerbsbild.md` |
| `45bc282` | Prüfprotokoll + Reparatur aller Prüferbefunde | `fund/wettbewerbsbild.md`, `protokolle/R06-A-pruefer.md` |
| *(dieser)* | Abschlussmeldung | `protokolle/R06-A-abschluss.md` |

### P15 — aufgelöst (→ B10)

Alle vier Anbieter an ihren **Primärquellen** gelesen (Leseweg BYTE,
curl + eigene Rohtext-Lektüre), **nicht** aus der
Brandnamic-Kategorisierung abgeleitet:

- **straiv** und **flexipass** besetzen die Funktion. Straiv: Online
  Check-in/Check-out, digitaler Meldeschein, Self-Service-Kiosk,
  digitale Türöffnung. Flexipass: digitale Schlüssel auf vorhandener
  Schließhardware — **Check-in ausdrücklich nicht selbst**
  („Check-In services are provided through our Certified Partners.",
  der Trenner ist ein Link auf den eigenen Marktplatz).
- **hoteldoor** (CRM/Marketing/E-Commerce, BRG Communication S.r.l.,
  Cesenatico) und **iiq check** (Bewertungsmanagement, ConsultiiQ GmbH,
  Goslar) sind **Namensfallen** — sie treffen nicht unsere Technik,
  sondern unsere Teil-B-Flanke.
- **Eine Kategorie „Check-in/Zutritt" existiert im Brandnamic-Raster
  nicht.** Der Partnerkreis wurde am Rohbeleg nachgezählt: **78
  Einträge / 76 Domains in sieben Kategorien** (R05-A: „~70 in sechs").
- **Für die Kanalfrage heißt das:** keine leere Kategorie anzubieten,
  sondern Antreten gegen den Anbieter, der uns in Teil A ohnehin am
  nächsten steht. **Die Entscheidung selbst gehört MKT-AKQ.**

Straiv wurde auftragsgemäß **nicht neu aufgebaut** — Teil A § 3.1 bleibt
unverändert; ergänzt ist dort nur die Partnerkreis-Frage (Vorwärtsverweis
in § 5.4).

### P19 — aufgelöst (→ B11)

- **Definition** normativ belegt (IHA-Beitragsordnung, wörtlich) — und
  ausdrücklich als **enger als unsere Fragestellung** markiert
  (Themen-/Angebotsgruppen fallen aus ihr heraus).
- **Vier Länder-Zugänge:** DE (AKZENT primär erhoben, 7 weitere nur
  namentlich aus einer Fachmedienliste) · **Südtirol 7 Verbünde** laut
  IDM-Landesagentur — Erweiterung des R05-A-Vorbefunds von 2 auf 7 ·
  AT (Strafinger mit fünf Angebotsgruppen) · CH (Swiss Historic Hotels;
  **für die Schweiz existiert keine Verbundliste** — GastroSuisse
  liefert nur eine Systematik).
- **⭐ Strukturbefund:** In **drei von vier Fällen mit belegter
  Trägerschaft** führt eine Marketing-Agentur/Beratung den Verbund
  (Brandnamic + Kohl & Partner · Strafinger · Heim Hotelmarketing). Der
  Kanal gehört überwiegend dem Wettbewerb. Nenner ausgeschrieben.
- **⭐ Goslar-Cluster:** AKZENT Hotels e.V., ConsultiiQ GmbH (iiQ-Check)
  und TMA TourismusMarketing Agentur GmbH — gleiche Anschrift, gleicher
  Geschäftsführer, gleicher Telefonblock; iiQ-Check ist eine Position im
  Mitgliedsbeitrag, der Verbandsvorsitzende ist die Referenz auf der
  Produktseite. **Belegstufe sauber getrennt:** Anschrift/Person/Telefon
  aus drei Impressen belegt, **gesellschaftsrechtliche Verflechtung
  nicht** (kein Registerauszug).
- **Preisanker AKZENT:** 781,67 € (20 Zi) / 925,07 € (40 Zi) /
  996,77 € (50 Zi) pro Monat zzgl. MwSt., ab 2026 — **alle drei Summen
  selbst nachgerechnet**, alle drei gehen auf. Mit ausgeschriebener
  Lesegrenze (Verbandsbeitrag ≠ Agenturhonorar).
- **Kanalbewertung auftragsgemäß NICHT vorgenommen** — „mit MKT-AKQ zu
  bewerten"; MKT-AKQ ist nicht gestartet.

### Methodisch verifiziert

- **Redirect-Gegenprobe je Domain** vor allen Web-Negativen (Kontrollpfad
  auf allen vier P15-Domains → 404-Seiten, keine Wildcard-301).
- **Positivkontrolle je Prüfkanal**, bei Extraktionen auf die
  **Vollständigkeit des Ergebnisses** gerichtet.
- **Summenproben** bei allen zusammengesetzten Zahlen.
- **Beleg-Typen zweiachsig** geführt (Leseweg BYTE/ROH getrennt von
  Quellenart SELBST/DRITT); Anbieter-Selbstauskünfte gekennzeichnet.
- **Rohbelege gesichert** nach `sensibel/rohbelege-R06-A/` (git-ignoriert,
  `p15/` und `p19/`) — Nachprüfweg für den Prüfer und für später.
- **Unabhängiger Prüferlauf** mit frischem Kontext, Schreibrecht genau
  `protokolle/R06-A-pruefer.md`: **2 Kritisch, 8 Wichtig, 11 kleinere**
  Befunde. **Alle von der Session selbst an den Rohbelegen nachgeprüft
  und repariert** (`45bc282`).

**Bestand nachgezogen:** neue Vergabelinie **L-B8 (Geografie)** in B2
inkl. rückwirkender Bestandsprüfung · Erhebungstabelle und Punkt 1b in
**B1** · Vorwärtsverweise in **B4.3**, **§ 5.4** und **B4.5** ·
Nachtragskasten im Teil-B-Kopf · Nachtrag in **§ 0.0** · Punkteliste
(P15/P19 erledigt, **P21/P22** neu, P17 verschärft) ·
Änderungsprotokoll zweizeilig (Erhebung + Prüferlauf).

---

## 2. Offen geblieben

1. **P21 — die Verbund-Kategorie ist aufgemacht, aber nicht
   vollerhoben.** Sieben deutsche Kandidaten nur namentlich (City
   Partner · Flair · GreenLine · Landidyll · Leading Hotels of the
   World · Ringhotels · Wellness-Hotels-Deutschland), Österreich nur
   über einen Träger, **für die Schweiz keine Liste**. Offen außerdem:
   Beitragsmodelle (2 von 3 nicht veröffentlicht) und die Trägerschaft
   von fünf der sieben Südtiroler Verbünde.
2. **P22 — 74 der 78 Einträge des Brandnamic-Partnerkreises sind
   ungeprüft.** Unter ihnen Namen mit erkennbarer Nähe zu unserem Feld
   (`chatlyn`, `customer-alliance`, `guest.net`, `reguest.io`,
   `mergeport`). Der Rohbeleg liegt vor.
3. **Kanalbedingt unerreichbar** (kein Negativ): das
   iiQ-Check-Partnerprogramm hinter `app.iiq-check.de` (Login) · alle
   Preise von flexipass, hoteldoor und straiv · die vollständigen
   Schloss-/PMS-Listen von flexipass.
4. **Die schwächste Einstufung dieses Laufs ist hoteldoor = N**
   (L-B8). Ein DACH-Berührungspunkt über Südtirol ist nicht
   ausgeschlossen, nur nicht belegt.
5. **Nicht prüfbar geblieben** (eigenes Ergebnis, nicht geglättet): Die
   HTTP-Statuszeilen der vier Kontrollabrufe sind nicht archiviert — der
   404 ist am Antwortkörper belegt, nicht am Header. Steht als
   Belegstufen-Vermerk im Papier.

---

## 3. Nebenbefunde außerhalb des Auftrags (mit Zielort)

| Befund | Gehört wem | Zielort / nächste Aktion |
|---|---|---|
| **Zwei veröffentlichte Zahlungsbereitschaften:** AKZENT-Mitgliedsbeitrag 781,67–996,77 €/M (zzgl. MwSt.) und iiQ-Check 79–169 €/M + 399–799 € Einrichtung (**Steuerbasis unbekannt**) | **MKT-HANDEL** | Steht in **B11.8** mit ausgeschriebenen Lesegrenzen. Die beiden Anker sind **nicht direkt vergleichbar** |
| **TMA TourismusMarketing Agentur GmbH** ist eine bisher unbekannte Hotelmarketing-Agentur (W1) und gehört sachlich ins Feld **B4** | MKT-FUND (Wettbewerbsbild) | In **B11.6** eingestuft, in B4 **nicht** nachgetragen — B4 ist R05-A-Bestand und wurde auftragsgemäß nicht umgebaut |
| **Zwei Portfolio-Fragen, die diese Erhebung nicht entscheiden darf:** (a) Gehört eine **Buchungsstrecke/IBE** zum Portfolio? Im Papier-Kasten § 6 nicht belegt (deshalb ist DIRS21 nicht eingestuft). (b) Bleibt **Bewertungsmanagement** „im Aufbau", bei zwei belegten Anbietern in unmittelbarer Nachbarschaft? | **MKT-FUND** | Steht in **B11.8**; entscheidbar nur mit dem Papier-Kasten § 6 |
| **Der Suchraum für P17** (reine Gästemappen-/Guest-App-Anbieter) liegt fertig vor: die flexipass-Marktplatzliste nennt über 40 namentlich, darunter Brandnamics eigene **Carlito**-App | MKT-FUND | P17-Zeile in § 7 entsprechend verschärft |
| **Brandnamic ist über flexipass mit dem Zutritts-Ökosystem verbunden** (Carlito steht in dessen Guest-App-Liste) | MKT-AKQ / MKT-FUND | In **B10.4** vermerkt |
| **PrivateCityHotels. führt Mitgliedshäuser in Berlin, Hamburg, Köln, Nürnberg** — genau die Städte, deren Fehlen B1 Punkt 2 / B4.5 als Sample-Schwäche ausweisen | MKT-FUND (Wettbewerbsbild) | Verweis in **B4.5** gesetzt; bestätigt, dass das Negativ die Suchbegriffe misst, nicht den Markt |
| **⚠️ Firmierungs-Widerspruch bei flexipass auf EINER Seite** (drei verschiedene Rechtsträger/Anschriften in DE-/IT-/EN-Fassung von `/terms`) | Grundsatz-Erinnerung für alle außenwirksamen Texte | In **B10.4** dokumentiert; die Regel „Firmierung nur per Registerauszug" gilt hier besonders |
| **AKZENT-Leistungsbündel deckt fast unser gesamtes Teil-B-Portfolio ab** (Marketing-Analysen, Beratung, PR, Mystery Checks, Weiterbildung, Buchungsstrecke) — für unter 1.000 €/M | MKT-FUND / MKT-HANDEL | In **B11.4/B11.5** ausgeführt |

Kein Befund gehört in den Postkorb `zentrale\eingang\` — alle bleiben in
der Marketing-Ebene.

---

## 4. Stolpersteine und Learnings

### (i) Fallen

1. **⭐ Eine Suchliste, die nur Bekanntes kennt, ist eine Positivliste in
   Verkleidung — und meine Positivkontrolle hat sie nicht gefangen.**
   Mein Zähllauf über den Brandnamic-Partnerkreis suchte nach **sechs
   vorher notierten Kategorienamen** und fand deshalb genau sechs; die
   siebte Rubrik („Institutionelle Partner") wurde still zur sechsten
   addiert. Die Positivkontrolle prüfte, ob die **gesuchten vier
   Anbieter** in der Extraktion erscheinen — sie zielte auf die
   **Nutzlast**, nicht auf die **Vollzähligkeit der Gliederung**, in der
   die Nutzlast steht. **Das ist die zweite Reproduktion derselben
   Klasse in diesem Papier** (R05-A: Apaleo-Kategorien 7 → 9, B8.4).
   **Lehren-Kandidat für `/debrief`:** *Bei Listen mit Überschriften
   gehört die Zahl der Überschriften selbst in die Positivkontrolle —
   und die Extraktion holt die Gliederung generisch (CSS-Klasse,
   Strukturmerkmal), nie über eine vorher notierte Namensliste.* Zweiter
   Teil derselben Lehre: Nach der Regel „eine frisch geschriebene Regel
   wird rückwirkend gegen den Bestand geprüft" hätte der R05-A-Fang
   auslösen müssen, im Papier nach **weiteren** Listen mit
   Kategorien-Überschriften zu suchen. Genau da lag die nächste.
2. **Eine Text-Extraktion frisst die Unterscheidung, nicht nur die
   Formatierung — zweimal in einem Lauf.** Bei den iiQ-Check-Tarifen
   sehen alle vier Pakete im entmarkupten Text **identisch** aus; die
   Ja/Nein-Unterscheidung steckt allein in `class="yes"`/`"no"`. Bei
   PrivateCityHotels ging die Mitgliederzahl verloren, weil sie als
   `<span class="hotel-count">42</span> Hotels` ausgezeichnet ist — ich
   habe daraufhin ein **falsches Negativ** („keine Mitgliederzahlen")
   geschrieben. **Merksatz: Wo eine Aussage in der Auszeichnung steckt
   und nicht im Text, prüft eine Textprüfung sie nicht.**
3. **Eine Preisangabe ohne Steuerbasis wird beim Aufschreiben
   stillschweigend ergänzt.** Ich habe „alle zzgl. MwSt." an die
   iiQ-Check-Tarife geschrieben — die Quelle sagt das **nirgends**
   (0 Treffer über fünf Seiten). Vermutlich, weil die AKZENT-Tabelle im
   selben Lauf „zzgl. MwSt." trägt. **Zwei Preisquellen im selben
   Arbeitsschritt vermischen ihre Fußnoten.** Der Fehler wäre über
   B11.8 direkt in die MKT-HANDEL-Preisarbeit gewandert.
4. **Zwei Sätze werden beim Zitieren zu einem.** Mein
   flexipass-„Zitat" („Wallet Keys, Webkeys and Mobile Keys in a single
   platform") war aus zwei verschiedenen Sätzen gefügt, mit veränderter
   Reihenfolge und Schreibweise. Ein Pseudo-Zitat ist für jeden Prüfer
   ununterscheidbar von einer Erfindung.
5. **Ein Nenner ohne Kriterium ist eine Behauptung.** „In drei von vier
   geprüften Fällen" — welche vier? PrivateCityHotels war betrachtet,
   aber ohne Trägerbefund, und fiel deshalb still aus dem Nenner. Beim
   Verdichten in § 7 und ins Änderungsprotokoll verlor derselbe Satz
   dann auch noch seinen Vorbehalt („Verbünde werden von Wettbewerbern
   geführt").
6. **Eine neue Vergabelinie verlangt sofort die Bestandsprüfung.** Ich
   habe L-B8 eingeführt und **nicht** gefragt, welche Bestandseinträge
   sie kippen würde. (Ergebnis nachgeholt: genau ein Kandidat,
   Roommatik/ES, Einstufung bleibt — aber das musste geprüft, nicht
   vermutet werden.)
7. **Der Vorwärtsverweis in die NACHBAR-Achse wird vergessen.**
   flexipass ist ein Technik-Wettbewerber und trifft USP-Säule 4 — die
   Erhebung lief aber im Beratungsteil, und Teil A § 5.4 („von zwei
   Seiten getroffen") wäre unverändert stehen geblieben. Wer in einem
   zweiteiligen Papier arbeitet, muss beim Fund fragen: **In welchen
   ANDEREN Teil gehört das?**
8. **Eine geratene URL ist kein Negativbefund.** `swisshistorichotels.com`
   löste nicht auf (DNS), `/impressum` gab 404 — beides waren **meine
   Pfadvermutungen**, nicht Aussagen der Seite. Der Weg über den
   `href`-Wert aus der bereits geladenen Seite kostete Sekunden.

### (ii) Bewährte Muster

1. **Die Redirect-Gegenprobe VOR den Befunden.** Vier Kontrollabrufe auf
   einen Unsinnspfad haben zehn Sekunden gekostet und machen jedes
   spätere „steht dort nicht" belastbar. Der Baustein
   `quellen-beschaffung` verlangt sie zu Recht — sie gehört an den
   **Anfang** des Laufs, nicht ans Ende.
2. **Die Quelldatei von oben lesen, bevor man einen Widerspruch
   meldet.** Die IHA-Beitragsstaffel beginnt bei „5–10 Hotels", die
   Definition verlangt „mindestens zehn" — sah nach Quellenfehler aus.
   Vier Zeilen weiter oben löst die Datei es selbst auf (die Staffel
   zählt Verbandsmitglieder, nicht Kooperationsmitglieder).
3. **Ein Fund aus Strang A trägt Strang B.** Die AKZENT-Spur kam nicht
   aus der P19-Suche, sondern aus der **P15-Referenzliste** von
   iiQ-Check. Der wertvollste Fund des Laufs (Goslar-Cluster) hing an
   einem Testimonial, das sachlich zu einer ganz anderen Frage gehörte.
   **Beim Lesen einer Quelle lohnt der Blick auf das, wonach niemand
   gefragt hat.**
4. **Institutionelle Listen schlagen Anbieterlisten.** Die
   IDM-Südtirol-B2B-Seite lieferte sieben Verbünde in einem Abruf —
   sauberer, vollständiger und neutraler als jede Anbieterrecherche. Für
   Kategorien-Fragen zuerst die **Landesagentur/den Verband** suchen,
   nicht die Anbieter.
5. **Summenproben rechnen sich sofort.** Drei AKZENT-Spalten mit je
   sieben Posten selbst nachgerechnet — alle drei gehen auf. Das kostet
   eine Minute und gibt jedem Prüfer einen harten Anker.
6. **Der Prüfer mit frischem Kontext ist das schärfste Werkzeug des
   Laufs — wenn er die Rohbelege bekommt.** Er hat 21 Befunde geliefert,
   davon zwei, die sonst in andere Stränge weitergewandert wären. Der
   Unterschied zum Selbst-Nachlesen: Er kannte meinen Fragenkatalog
   nicht und hat **die Gliederung nachgezählt, nicht den Treffer**.
7. **Befund und Ursachen-Diagnose getrennt prüfen zahlt sich beim
   Reparieren aus.** Jeder Prüferbefund wurde vor der Reparatur selbst
   am Rohbeleg nachgemessen — **alle bestätigten sich**, aber erst die
   eigene Messung machte die Ursache (hartcodierte Kategorienliste)
   sichtbar, und die Ursache ist der eigentliche Lehren-Kandidat.
