# R15-E — Abschlussmeldung (Limejuice)

**Strang:** Sperrdatei-Struktur + Wellenprotokoll-Vorlage (B-4 / B-6)
**Datum:** Freitag, 14.08.2026, Nacht-Slot · **Session:** `R15-E`
**Commits:** `5f9930b` (Bau) · `84a8651` (Prüfer-Disposition)
**Modell laut Statuszeile:** ⚠️ **nicht bestätigt** — die Selbstauskunft
des Modells ist kein Beleg (CLAUDE.md Regel 7); erhebbar nur über
Statuszeile oder `/cost` (User-Handgriff).

---

## Block 1 — Gebaut und verifiziert

### Die zwei Werkzeuge

| Datei | Inhalt | Umfang |
|---|---|---|
| `akquise/sperrdatei-struktur.md` | Geltungsgrenze · Gate-Tabelle (6 Gates) · Betriebsform · Feldschnitt `SP-01`…`SP-15` (+ `SP-11a`, `SP-14.1`–`.6`) · Aufnahme-Anlässe `ANL-1`…`ANL-4` · Setzungsliste § 3a · Eintrags-Ablauf · Abgleichspflicht · **der enge B-4-Fall** mit Abgrenzungsfrage, Ablauf und Klärungsfall · 7 rote Linien · Ablageregel · 8 offene Punkte `PS-1`…`PS-8` · Ausfüll-Vorlage | 599 Zeilen |
| `akquise/wellenprotokoll-vorlage.md` | Gate-Tabelle · Ausfüll-Reihenfolge (**vorher**, nicht nachher) · Blöcke A · B · C · D (Journal) · E (drei Summenproben) · F (Textversionen) · G (Fristen) · **G2 (Neu-Führungs-Trigger)** · H (Freigabe + 15-Zeilen-Checkliste) · Zuordnung B-1…B-7 · Ausfüll-Vorlage · Ablageregel | 719 Zeilen |

Dazu **drei Zeiger-Kästen** und **drei Vorwärtsverweise** im
`akquise/listenbau-regelwerk.md` (§ 3 Pflicht 2 · § 6.1 · § 7.1 · § 7.3 ·
§ 10/O-3 · § 10/O-12) — **keine inhaltliche Umschrift**, wie im
Start-Prompt vorgegeben.

### Fertig-Kriterium, Punkt für Punkt

| Kriterium | Stand |
|---|---|
| Beide Vorlagen liegen vor | ✅ |
| **Jede Pflicht B-1…B-7 zugeordnet oder als „nicht hier" ausgewiesen, n von 7, mit Zählweg** | ✅ **7 von 7** — 1 vollständig (B-6) · 5 teilweise mit benanntem Träger (B-1, B-2, B-3, B-4, B-5) · 1 ausdrücklich nicht hier (B-7). Summenprobe ohne Rest. Zählweg am Objekt gemessen (s. u.) |
| **Der Beileger-Text ist nachweislich NICHT geschrieben** | ✅ — vom Prüfer **vierfach positiv am Objekt** belegt (Dateiliste · 19 Fundstellen alle Meta · Textkörper-Marker mit Positivkontrolle · Platzhalter + Checklistensperre), nicht als Abwesenheitsvermutung. Auch keine Versionsnummer vorab vergeben |
| Regelwerk zeigt per Zeiger auf beide Dateien | ✅ (drei Zeiger + drei Vorwärtsverweise) |
| Prüferbefunde kategorienweise MIT NENNER disponiert | ✅ **23 von 23** (s. Block 1b) |

### Zählweg für den Nenner 7 (gemessen, nicht behauptet)

Grundgesamtheit ist die Tabelle in `interessenabwaegung-o8.md` § 10.
`grep -c "^| \*\*B-[1-8]\*\*"` = **8**; `grep -o` listet lückenlos
**B-1 · B-2 · B-3 · B-4 · B-5 · B-6 · B-7 · B-8** — die Auflistung ist
die stärkere Kontrolle als die Summe, weil eine Lücke sichtbar wäre.
Positivkontrolle `^| \*\*B-8\*\* | ⛔ \*\*GESTRICHEN` = **1** (die
gestrichene Zeile ist im Zähler und wird bewusst abgezogen).
Gegenrichtung `B-9`/`B-1[0-9]` = **0**. → Nenner **7**.
**Vom Prüfer unabhängig reproduziert.**

### Was über den Auftrag hinaus aus den Quellen kam

Vier Stellen, an denen der Regelwerks-Nachtrag hinter seiner eigenen
Quelle zurückblieb — alle am Rohbeleg am Stück gelesen, alle vom Prüfer
bestätigt:

1. **`WP-13`/`WP-13a`** — Regelwerk § 7.1 lässt ausdrücklich offen, ob
   das B-1-Prüfergebnis ein Protokollfeld bekommt. Beantwortet.
2. ⭐ **FG-2-Anteil** (`WP-19`) — o8 § 5.4 verlangt ihn wörtlich; B-6
   und der § 6.1-Nachtrag nennen nur FG-4.
3. ⭐ **Mehrzeiliges Abgleich-Journal** — R-B6 nennt **zwei** Anlässe,
   der § 6.1-Nachtrag verkürzt auf ein einzelnes Abgleichs-**Datum**.
4. ⭐ **Zwei Textversionen** (`WP-24`/`WP-25`) — B-5 nennt Beileger
   **und** Widerspruchs-Kasten; der Nachtrag führt „Textversion"
   (Singular).

Die **Nachführung der Quellen** liegt bei der Leitsession (Start-Prompt
gibt das Regelwerk nur für Zeiger frei) — s. Block 3.

---

## Block 1b — Prüfer-Disposition: 23 von 23

Prüfprotokoll: `protokolle/R15-E-pruefer.md` (Prüfstand `5f9930b`;
**beide Quellen vollständig gelesen**, Regelwerk 1–1345, o8 1–1239;
Drift-Kontrolle gegen den weitergelaufenen HEAD durchgeführt).

| Kategorie | Nenner | schwer | disponiert | bewusst offen | fremder Träger |
|---|---|---|---|---|---|
| **A** — nicht angekommen | 4 | 2 | **4** | 0 | 0 |
| **B** — Feld nicht ausfüllbar | 3 | 1 | **3** | 0 | 0 |
| **C** — behauptete Rechtssicherheit | 6 | 0 | **6** | 0 | 0 |
| Zusatz: Zuordnungstabelle | 2 | 0 | **2** | 0 | 0 |
| Zusatz: Summenproben | 3 | 1 | **3** | 0 | 0 |
| Zusatz: Dubletten / IDs / Verweise | 5 | 0 | **5** | 0 | 0 |
| **Summe** | **23** | **4** | **23** | **0** | **0** |

**Alle 23 sind repariert** — keiner verworfen, keiner weitergereicht.

### Die vier schweren im Einzelnen

- **PE-5 (der einzige, der sofort gewirkt hätte).** § 9 stellte eine
  Markdown-**Tabelle im Repo** als „tragfähige Erstform" für den
  laufenden Sperrbestand bereit (Firma · Anschrift · ggf. Personenname).
  Gegen o8 § 8 lit. g („**Ablage außerhalb des Repos**", eine
  Art.-24-TOM) und Regelwerk § 11 („Die Liste selbst gehört **nicht**
  ins Repo") — **beide am Rohbeleg gegengeprüft**. Wer die Tabelle
  befolgt hätte, hätte personenbezogene Daten unwiderruflich in die
  Git-Historie committet; die Gates hätten es nicht verhindert, weil ein
  Sperrfall **ohne Versand** entsteht, sobald jemand widerspricht.
  → **Ersatzlos entfernt**, Ablageregel gesetzt, Gate-Zeile korrigiert,
  Regel auch auf das Wellenprotokoll angewandt.
- **PE-1.** Das FG-2-Zitat brach **ohne Auslassungszeichen** vor der
  dritten Pflicht ab („die Einstufung ‚kein Personenbezug' muss je
  Datensatz belegbar sein"); der Abbruch fiel exakt mit der Grenze der
  eigenen Umsetzung zusammen — der zitierte Teil stützte den eigenen
  Befund, der weggelassene erzeugte Arbeit. → Zitat vollständig,
  Pflichtfeld `WP-19a` mit Stopp-Folge.
- **PE-2.** Die Neu-Führungs-Trigger aus o8 § 11.3 hatten kein Feld —
  darunter die **300er-Wellenschwelle**, während die eigenen Planzahlen
  (≈ 337–1.600 Briefe je Abschluss) darüber liegen. Die Vorlage hätte
  ausgerechnet die Welle, welche die Abwägung sprengt, ohne Alarm
  protokolliert. → **Neuer Block G2** (`WP-34`…`WP-36`), je mit Stopp.
- **PE-16.** Probe 3 und die Freigabe-Checkliste kontrollierten nur den
  **Druckauftrags**-Anlass; der **Versand**-Anlass des R-B6 fiel heraus
  — in genau dem Dokument, das die Zweizahl der Anlässe als eigenen
  Befund ausweist. Ein fehlender Abgleich vor dem Versand verstößt gegen
  rote Linie 9; die Checkliste hätte ihn durchgewinkt. → Probe und
  Checkliste auf „1 + Druckaufträge + Versände".

### Drei Eigenfunde (neben dem Prüfer)

- **`P-1`…`P-5` kollidierten** mit den Abwägungsfaktoren `P-1`…`P-8` in
  `interessenabwaegung-o8.md` — dem direkt zitierten Nachbardokument.
  → umbenannt zu `PS-1`…`PS-8`; Umlaut-Zählung vorher/nachher als
  Werkzeugkontrolle (779 / 414, identisch).
- **`WP-20` trug zwei Werte** (FG-1 *und* FG-3) und erschien zweimal in
  derselben Summenprobe — die Probe war so nicht ausführbar.
- **Zwei falsche Eigenverweise** (§ 7 Nr. 3/4 statt § 10) — vom Prüfer
  **nicht** gefunden.

---

## Block 2 — Offen geblieben

| # | Punkt | Warum offen | Träger |
|---|---|---|---|
| 1 | **Der Beileger-Text (B-7)** und der Widerspruchs-Kasten | ausdrücklich untersagt; braucht F-7 + O-9 | MKT-AKQ nach dem anwaltlichen Rat |
| 2 | **`PS-1`** Zulässigkeit der `ANL-3`-Führung (fremder Impressumsvermerk im eigenen Sperrbestand) | eigene Setzung, von keiner Quelle gedeckt | anwaltlicher Rat, **mit O-9 bündeln** |
| 3 | **`PS-6`** Kann ein Widerspruch wirksam auf EINEN Kanal begrenzt werden? | von keiner Quelle behandelt; die Erstfassung nahm die Antwort vorweg | anwaltlicher Rat, **mit O-9 bündeln** |
| 4 | **`PS-7`** Antwortfrist bei regulärem Art.-17-Löschverlangen | Regelwerk § 7.4 nennt die Monatsfrist nur für Art. 15 | anwaltlicher Rat, **mit O-9 bündeln** |
| 5 | **`PS-8`/`PS-3`** Belegablage und technische Form | hängen an O-6 / B-2 | MKT-OPS |
| 6 | **`PS-5`** Beide neuen Dateien stehen nicht in der `ZIEL`-Liste von `pruefe-zitate.js` | am Skript gemessen (Stand `3067361`) | R15-C / Leitsession |
| 7 | **Erschöpfung der Fallgruppen-Partition** FG-1…FG-6 | Probe 2 setzt sie voraus; o8 § 5.4 spricht sie nicht aus. **Als Annahme ausgewiesen, nicht als Beleg** | MKT-AKQ |

⚠️ **Nichts davon ist stillschweigend geparkt** — alle sieben stehen in
den Dateien selbst, sechs davon in `PS-1`…`PS-8`.

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

Kurz-IDs mit Rundenpräfix (L-35), damit sie im Wahrheits-Kanal nicht
kollidieren:

| # | Befund | Zielort |
|---|---|---|
| **R15E-N-1** | **Der § 6.1-Nachtrag des Regelwerks bleibt an drei Stellen hinter o8 zurück** (FG-2-Anteil · zwei Textversionen · zwei Abgleich-Anlässe). Die Vorlagen setzen es um; **die Quelle selbst ist nicht nachgezogen** — der Start-Prompt gibt das Regelwerk nur für Zeiger frei | Leitsession → Regelwerk § 6.1 + o8 § 10 |
| **R15E-N-2** | **Regelwerk § 10 / O-12 ist überholt.** Es behauptet, `pruefe-zitate.js` prüfe „nur Akquiseplan und dieses Regelwerk"; gemessen am Skript (Stand `3067361`) sind es **sechs** Dokumente — O-8 ist seither IM Prüfraum. Vorwärtsverweis gesetzt, **Neufassung offen** | Leitsession / R15-C |
| **R15E-N-3** | **Zwei neue Dateien ohne Zitat-Prüfmittel** — `sperrdatei-struktur.md` und `wellenprotokoll-vorlage.md` stehen nicht in `ZIEL`. Gleiche Klasse wie R14B-N-9 (Rechtsmatrix + Wettbewerbsbild) | R15-C / nächster Prüflauf |
| **R15E-N-4** | **`ANL-3` wirft eine Rechtsfrage auf, die im O-9-Bündel fehlt:** Darf ein im **fremden** Impressum vorgefundener Werbewiderspruch in einen eigenen Sperrbestand? Betrifft R15-A (Anwalts-Briefing) — **dort heute nicht enthalten** | MKT-AKQ → R15-A / Leitsession |
| **R15E-N-5** | **Die 300er-Schwelle aus o8 § 11.3 kollidiert mit der Akquiseplanung.** Der Plan rechnet mit ≈ 337–1.600 Briefen je Abschluss — **jede realistische Welle löst den Neu-Führungs-Trigger aus.** Das ist kein Formfehler, sondern ein Planungskonflikt: Entweder werden Wellen kleiner geschnitten, oder die Abwägung wird routinemäßig neu geführt | MKT-AKQ + Leitsession (Akquiseplan § 4.2) |
| **R15E-N-6** | **Der Prüfer benennt seine größte eigene Lücke:** Er hat `handel/kanal-rechtsmatrix.md` **nicht gelesen**, obwohl beide Prüflinge sie als vorrangige Quelle nennen. Die Vorrangklausel zeigt damit auf ein ungeprüftes Dokument | nächster Prüflauf |

---

## Block 4 — Stolpersteine und bewährte Muster

### Fallen (teuer belegt in dieser Runde)

1. **⭐ Die Ablageregel steht nicht dort, wo man sie sucht.** o8 § 8
   lit. g wurde als **VVT-Zulieferung** gelesen (Zielort MKT-OPS) — und
   damit als Aussage über ein anderes Dokument, nicht als Vorgabe an das
   eigene Werkzeug. Ergebnis war eine Repo-Tabelle für personenbezogene
   Daten. **Wer ein Betriebswerkzeug baut, liest die TOM-Zeile der
   Quelle als Anforderung an sich selbst.**
2. **⭐ Ein Zitat-Abbruch markiert verlässlich die Grenze der eigenen
   Umsetzung.** Bei PE-1 endete das Zitat exakt dort, wo zusätzliche
   Arbeit begonnen hätte — ohne Auslassungszeichen. **Prüfmuster: Endet
   ein Zitat mitten in einer Aufzählung, ist der Rest die
   unangenehmere Pflicht.**
3. **⭐ Ein präziser Quellverweis verengt den Leseraum — auch beim
   BAUEN, nicht nur beim Prüfen.** Der Auftrag nannte § 7.3/§ 6.1 und
   B-1…B-7; die 300er-Schwelle steht in o8 § 11.3, einem Kapitel, das
   kein Quellverweis nennt. Der Prüfer fand sie **nur**, weil seine
   Auflage lautete, das ganze Dokument als Leseraum zu nehmen —
   „sonst hätte ich dort aufgehört, wo die Prüflinge aufgehört haben"
   (sein Wortlaut). Bestätigt L-34 aus der **Bau**-Richtung.
4. **⭐ Ein Bewertungskriterium wandert zwischen zwei Zeilen derselben
   Tabelle — in Richtung der eigenen Leistung.** B-4 („✅ vollständig")
   und B-3 („teilweise") lagen in derselben Lage; B-4 war die im
   Commit-Betreff genannte Pflicht. **Prüffrage: Steht die eigene
   Vorzeigeleistung nach demselben Maßstab da wie ihr Nachbar?**
5. **⭐ Eine Summenprobe kann an genau der Achse blind sein, die sie zu
   sichern scheint.** „2+4+1=7" kann bei sieben Zeilen in drei
   Kategorien **nie** anders ausfallen — sie fängt eine vergessene
   Zeile, eine **Fehleinstufung** nie. Der ausgewiesene Vorbehalt
   („zählt Zuordnung, nicht Erfüllung") betraf eine andere Frage und
   las sich wie die Grenzangabe. (L-30, an eigener Arbeit.)
6. **L-26 am eigenen Text belegt:** Der Reparaturvermerk zitierte die
   alte Fassung — und erzeugte ein „Zitat", das per Konstruktion in
   keiner Pool-Quelle stehen kann; der Wächter wurde davon rot. Fix an
   der eigenen Seite (Anführungszeichen weg), **nicht** über die
   Ausnahmeliste — die gehört R15-C, und ein Pool-Zitat war es nie.
7. **Ein degeneriertes Suchmuster liefert exakt die Zeilenzahl.** Eine
   CRLF-Messung meldete „432 Zeilen mit CR" bei einer 432-Zeilen-Datei.
   Zahl, die nicht passen kann → **erst das Werkzeug verdächtigen**;
   belastbar war `git ls-files --eol` (Ergebnis: alle 118 `.md` im Index
   LF, keine Drift durch diesen Commit).

### Bewährte Muster

1. **⭐ Die Kategorien-Vorgabe an den Prüfer und die
   Ganzes-Dokument-Auflage fangen VERSCHIEDENE Befunde.** Der Prüfer hat
   das selbst aufgeschlüsselt: PE-5 verdankt sich allein der
   Kategorie-B-Frage („welches Feld setzt etwas voraus?" → „wo lebt der
   Bestand eigentlich?"), PE-2 allein der Leseraum-Auflage. **Beide
   Vorgaben zusammen, nicht die eine statt der anderen.**
2. **Erst die ID-Kollision greppen, dann schreiben** — und **zuerst im
   eigenen Dokument**. `SP-`/`WP-`/`ANL-` waren sauber, ausgerechnet die
   naheliegende `P-`-Serie kollidierte mit der Nachbarquelle.
3. **Verwendete IDs gegen definierte IDs zählen** ist eine Kontrolle,
   die fehlschlagen kann: 43 verwendete = 43 definierte, lückenlos —
   nach einer Umnummerierung über vier Blöcke der einzige belastbare
   Beleg, dass kein Verweis verwaist ist.
4. **Umlaut-Zählung vor und nach jedem `sed`** — die billigste
   Absicherung gegen Encoding-Schaden bei Massenersetzungen.
5. **Warten mit Reparaturen, bis der Prüfer gemessen hat.** Drei eigene
   Funde lagen ab Minute 20 fest; sie sofort einzubauen hätte dem
   Prüfer einen wandernden Messstand untergeschoben (L-40). Die
   Drift-Kontrolle in seinem Protokoll bestätigt: Prüflinge
   byte-identisch.
6. **Gates statt Platzhalter-Erfindungen.** Der Prüfer nennt die
   Gate-Kästen „das Beste an beiden Dateien" — je Gate eine benannte
   Abhängigkeit, eine Wirkung, ein Träger; keine erfundene Firmierung,
   keine vorab vergebene Versionsnummer.
7. **Die Leerzeilen-Vorsorge** („Der leere Bestand ist ein Befund, kein
   Formfehler — wer hier nichts findet, prüft zuerst die Gates") — sie
   verhindert den Fehlschluss einer späteren Session.

---

## Anhang — Messstände

| Größe | Wert |
|---|---|
| Stand bei Session-Start | `4b84693` |
| Stand des Regelwerks/o8 beim Bau | unverändert seit `4b84693` (gegengeprüft) |
| Bau-Commit | `5f9930b` — 960 Einfügungen, **0 Löschungen** |
| Prüfstand | `5f9930b` (Drift-Kontrolle durch den Prüfer: Prüflinge byte-identisch) |
| Disposition-Commit | `84a8651` — 1.377 Einfügungen, 150 Löschungen (Löschungen gewollt: PE-5-Tabelle, PE-19-Dublette, Umnummerierung) |
| Zitat-Wächter, eigenes Delta | **0** „nicht im Pool" in `listenbau-regelwerk.md` (zwischenzeitlich 2, dann 1 — alle drei eigene, alle repariert) |
| Zitat-Wächter, Positivkontrolle / Gegenprobe | **14 / 14** · **3 / 3** |
| Zitat-Wächter, Exit | **1** — durch die Prüfraum-Erweiterung von R15-C (835 Meldungen in vier fremden Dokumenten). **Fremdes Delta, je Datei zugeordnet** |
| Zeilenenden | alle 118 `.md` im Index **LF** (`git ls-files --eol`) |
