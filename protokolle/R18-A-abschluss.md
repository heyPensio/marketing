# R18-A — Abschlussmeldung (Ben Beckman)

> **Token-Verbrauch:** von der Session nicht erhebbar — Subagenten-Zahlen
> soweit bekannt: **1 Prüf-Subagent** (Voll-Review, Ergebnis in
> `protokolle/R18-A-pruefer.md`); eigene Zahl liegt der Session nicht vor.

**Runde:** R18 · **Strang:** A (MKT-HANDEL — Rechtsmatrix und
Anwalts-Briefing auf den Stand von R17) · **Datum:** Montag, 17.08.2026
(Wochentag und alle Uhrzeiten per `date` erhoben, nicht geschätzt).

## Prüfstände (Doppel-Messstand-Vertrag)

| Marke | Hash | Bemerkung |
|---|---|---|
| Rundenstart | `86afceb` | Sollwert aus dem Auftrag |
| Session-Start (eingefroren) | `a7fca1c` | `git diff --stat 86afceb..a7fca1c` = **1 Datei** (Tagesplan) — die Zeilenangaben des Auftrags galten also unverändert |
| Zweiter Messstand vor dem Commit | `106dc0e` | ⚠️ Der Arbeitsbaum ist **während** der Arbeit gewandert: `0e94e59` (Tagesplan) und `106dc0e` (R18-C). **Gemessen und folgenlos:** `git diff --stat a7fca1c..106dc0e` berührt `akquise/akquiseplan.md`, `beleg/baseline-messplan.md`, `protokolle/tagesplan-…` — **keine** meiner sechs Dateien |
| **Bau-Commit** | **`8fe60d8`** | 6 Dateien, 348 Einfügungen, 32 Löschungen |

⛔ **Der Push ist offen.** `git push origin 8fe60d8:main` wurde vom
**Sicherheits-Klassifikator geblockt**. Nach L-05 gemeldet statt umgangen;
kein Ersatzkanal gesucht. Der Commit liegt lokal vollständig vor.

---

# Block 1 — Gebaut und verifiziert

Alle acht Teile erledigt. Reihenfolge wie beauftragt: **Teil 3 zuerst
gemessen**, weil er entscheidet, was Teil 5 zitieren darf.

## Teil 3 — Die acht Aufnahmebefunde, je Fundstelle eingeordnet (**8/8**)

Jede Stelle **am Rohbeleg als Absatzblock am Stück** gelesen, nicht per
Grep auf das Zitat. Die Messung des Prüf-Subagenten der Leitsession (19:40)
wurde **gegengeprüft, nicht übernommen** — sie hat sich in allen acht
Fällen bestätigt.

| # | Zeile @`86afceb` | Text | Klasse (am Rohbeleg gemessen) | Disposition | **Listen-Empfehlung für `ROHBELEG_OFFEN_R17`** |
|---|---|---|---|---|---|
| 1 | 691 | „der Tenor untersagt unter Nr. 4 die unterlassene Art.-14-Information" | **Vorfassungs-Selbstzitat** in einem Korrekturvermerk („hier stand …") | **bleibt** (L-26) | **bleibt mit Begründung:** „Reparaturvermerk-Selbstzitat, per Konstruktion in keiner Quelle; Verifizierer: R16-A-Prüfer, Befund M-4" |
| 2 | 696 | „bei einem Dritten erhoben" | ⭐ **echtes offenes Zitat** — verkürztes Tenor-Zitat **ohne Ellipse** *und* stiller Aktiv→Passiv-Wechsel | **REPARIERT** | **umformulieren zu** „und ausdrücklich nur für Daten, die ‚bei einem Dritten erhoben' wurden" — der Eintrag bleibt nötig, wandert aber von der Fließtext- in die **Reparaturkasten**-Klasse (L-26) |
| 3 | 731 | „der HTML-Abzug derselben Beschaffung liefert dieselben Werte" | Vorfassungs-Selbstzitat im Korrekturvermerk | bleibt (L-26) | bleibt mit Begründung; Verifizierer: R16-A-Prüfer, Befund M-7 |
| 4 | 815 | „zu genau diesem Werbeschreiben" | Vorfassungs-Selbstzitat im Korrekturvermerk | bleibt (L-26) | bleibt mit Begründung; Verifizierer: R16-A-Prüfer, Befund M-1 |
| 5 | 816 | „vorläufigen Beratungsergebnis" | Vorfassungs-Selbstzitat; **von R17-A bereits repariert** — der laufende Text zitiert korrekt „vorläufige[n] Beratungsergebnis" mit Anpassungsklammer, das Original schreibt „vorläufige**s**" | bleibt (L-26) | bleibt mit Begründung; Verifizierer: R17-A am Rohbeleg |
| 6 | 834 | „*Es ist ein erstinstanzliches Urteil, dessen Berufungsgericht > in derselben Sache erkennbar …*" | Vorfassungs-Selbstzitat im REPARATUR-Kasten | bleibt (L-26) | bleibt mit Begründung; Verifizierer: R16-A-Prüfer, Befund S-1. ⚠️ **Der Eintragstext trägt das `> >`-Residuum selbst** — nach dem R18-B-Fix ändert sich seine Gestalt |
| 7 | 843 | „*und dasselbe LG weicht von der ständigen Rechtsprechung > desselben OLG …*" | Vorfassungs-Selbstzitat im REPARATUR-Kasten | bleibt (L-26) | bleibt mit Begründung; Verifizierer: R16-A-Prüfer, Befund S-2. ⚠️ dito `> >`-Residuum |
| 8 | 1335 | „je Schiene getrennt … und die Antworten zeigen in entgegengesetzte Richtungen" | Vorfassungs-Selbstzitat im Korrekturvermerk | bleibt (L-26) | bleibt mit Begründung; Verifizierer: R16-A-Prüfer, Befund M-6 |

**Ergebnis: 7 von 8 sind L-26-Selbstzitate und bleiben; genau 1 war ein
echtes offenes Zitat.** Die Konstante `ROHBELEG_OFFEN_R17` wurde **nicht
angefasst** (Sperre; Leitsession nach R18-B).

### Die Reparatur von Nr. 2 im Einzelnen

Rohbeleg-Wortlaut, **Tenor Nr. 4** (liegt außerhalb der
Randnummern-Zählung, am Textabzug gelesen):

> „einem Verbraucher, in Bezug auf den sie personenbezogene Daten **bei
> einem Dritten zu dem Zweck erhoben hat**, diese personenbezogenen Daten
> … zu verwenden, nicht innerhalb einer angemessenen Frist, spätestens
> innerhalb eines Monats, die in Art. 14 Abs. 1 und Abs. 2 DSGVO genannten
> Informationen zu erteilen …"

Der Bestand schrieb „nur für Daten, die ‚**bei einem Dritten** erhoben'
wurden". **Zwei Eingriffe in einem Fünf-Wort-Zitat:** (a) drei
ausgelassene Wörter („zu dem Zweck") **ohne Ellipse**; (b) das Aktiv des
Tenors („erhoben **hat**", Subjekt: die Beklagte) war ins Passiv gewendet
(„erhoben **wurden**", Subjekt: die Daten) — damit verschiebt sich die
Beschränkung von der **Person** auf die **Daten**. Die Aussage des
Bestandssatzes ändert sich dadurch nicht; die Zitatform schon.

**L-25/L-51-Gegenlauf:** `grep -rn "bei einem Dritten" --include="*.md"`
→ **14 Fundstellen**, Positivkontrolle „einem Dritten" = 15 im selben Lauf.
Im **aktiven** Bestand trugen die Verkürzung nur diese Stelle und — dort
bereits von R17-A repariert — das Anwalts-Briefing; die übrigen 12 sind
Protokolle (Historie, nicht nachzuziehen). **Eine dritte Stelle gibt es
nicht.**

**Dazu (L-35):** Rechtsmatrix zitierte „Prüferbefund H-2" ohne
Rundenpräfix → auf **`R16A-H-2`** präzisiert. Kollision am Objekt
gemessen: H-2 ist in **drei** Prüferprotokollen vergeben
(`R15-A-pruefer.md` Rn.-267-Kontext · `R16-A-pruefer.md` Z. 385, der
gemeinte · `R17-A-pruefer.md` L-49) plus einem H-2 im **anderen
Namensraum** des Baseline-Messplans.

## Teil 1 — Rn. 220 → Rechtsmatrix (Dubletten-Entscheidung: **ZEIGER**)

**Die Auftrags-Prämisse war bereits gekippt und ist am Objekt bestätigt:**
`akquise/interessenabwaegung-o8.md` § 7.1 führt Rn. 220 seit dem 12.08.
(Q-16) — **mit** dem einschränkenden „insoweit" und mit der Einordnung als
Erwägung zur Auslegung des Klägervortrags. Der N-3-Befund („stand
nirgends") ist damit widerlegt.

**Entscheidung: Zeiger, kein zweites Zitat.** Ein Satz mit Rn. 220 und
o8-Anker steht jetzt im C4-Fristenabsatz der Rechtsmatrix.
**Begründung der Ortswahl:** Die Rechtsmatrix-Stelle trägt ohne den
Wortlaut — sie führt die Fristen bereits richtig; Rn. 220 nimmt ihnen nur
den letzten vermeintlichen Ausweg. **Wie beauftragt ausgeschrieben: Der
Punkt STÄRKT den Bestand (Rn. 85/87), er ändert keine Aussage.**
⚠️ Gemessen und im Text vermerkt: Die in C4 bereits vorhandene
**Vorrangklausel deckt ausdrücklich nur die achtteilige
Mindestumfangs-Aufzählung**, nicht den Fristen-Absatz — deshalb Zeiger und
nicht die zweite zulässige Dubletten-Form.

## Teil 2 + Teil 8 — Rn. 187/188 und der Klauselblock → `angebotsarchitektur.md` § 6a

Der Wiedervorlage-Posten heißt **`PV-1`** und steht als neuer § 6a.7a.
**ID-Kollisions-Grep vor der Vergabe** (die Regel, an der § 6a.7 selbst
schon einmal gescheitert war): `PV-1` repo-weit **0** Treffer,
Positivkontrolle `GA-1` = 15, Gegenprobe `ZZ-99` = 0.

**Die konditionale Warnung ist an einen Auslöser gebunden, nicht an
„später":** *Bevor das erste Angebots-, Preis- oder Vertragsdokument an
einen Adressaten geht, der Verbraucher sein kann* — mit drei
Prüffragen, **Träger MKT-HANDEL** (gemeinsam mit dem Vertrags-/AVV-Strang)
und Anschluss an dasselbe Anwaltsmandat.
⚠️ **Ausdrücklich KEIN fünftes GA-Gate:** Die GA-Kette hängt am Ereignis
„Angebot mit A3-Architektur geht hinaus" und ist selbst noch ein
Vorschlag (Prüferbefund F-7). `PV-1` sperrt nichts — eine Sperre daraus zu
machen wäre eine Betriebs-Festlegung mit Außenwirkung, die eine
Arbeits-Session nicht allein trifft.

### Teil 8 — Klauselblock Rn. 178–209, klauselweise gelesen (Vermerk mit Nenner)

**32 Randnummern gelesen** (Rn. 178–209, Rohbeleg-Zeilen 484–547), gegliedert
in **11 Prüfungsschritte** (178 · 179–181 · 182–185 · 186 · 187/188 · 189 ·
190–192 · 193–198 · 199–202 · 203–205 · 206–209).

**3 Wirkungen auf den Bestand, 1 Bestätigung, 1 Nebenbefund ohne
Bestandswirkung:**

| Fundstelle | Wirkung | Wohin |
|---|---|---|
| **Rn. 187/188** | Zwei Wege in dieselbe Haftung: unwirksame Klausel **oder** wirksame Klausel ohne wirksame **Einbeziehung** („Nichts anderes kann gelten …") | `PV-1` |
| **Rn. 202** | ⭐ Ein AGB-Hinweis auf dem Auftragsformular („Es gelten die Allgemeinen Geschäftsbedingungen …") war zur Einbeziehung **ungeeignet**, weil der Hinweis **selbst** unwirksam ist (BGH III ZR 59/24). **Genau diese Hinweisform ist der Standard in Angebots-PDFs** | `PV-1` |
| **Rn. 206–209** | ⭐ Klausel an unerwarteter Stelle eines **Übersichtsdokuments** → **Überraschungsverbot** § 305c Abs. 1 BGB, **nicht Vertragsbestandteil**. Unsere Paketübersichten und Preisblätter sind solche Dokumente | `PV-1` |
| **Rn. 186** | § 3 Abs. 2 UWG im Wortlaut („die sich an Verbraucher richten oder diese erreichen") | **bestätigt** Bestand (Rechtsmatrix führt denselben Wortlaut über Rn. 148) — keine Änderung |
| **Rn. 180 / Rn. 194** | Die vom Kläger gewählte Anspruchsgrundlage begrenzt die Prüfung des Gerichts nicht (Streitgegenstandslehre; gilt auch für die Transparenzkontrolle) | **keine Bestandswirkung** — es ist eine Rechtsbewertung, und die Rechtsmatrix hat an dieser Stelle die harte Grenze „keine neuen Rechtsbewertungen". **Als Nebenbefund geführt** (Block 3, N-3) |

**Geltungsgrenze, im Dokument ausgewiesen:** Alle drei tragenden
Randnummern sprechen von **Verbrauchern**; für reine B2B-Ansprache ist die
Frage offen und hängt an derselben Achse wie Briefing-Frage 3. `PV-1` ist
deshalb an die **Verbraucher-Berührung** gebunden, nicht an jede
Angebotsabgabe.

## Teil 4 — Zweiter Beschaffungsversuch + Briefing-Sichtbarkeit

**(a) Beschaffung: dokumentiertes NEGATIV** (das vom Fertig-Kriterium
zugelassene Alternativergebnis). Timebox 19:56:45–20:00:47, also **4 von 30
Minuten** — abgebrochen nicht wegen Zeitablauf, sondern weil vier Kanäle
mit greifender Positivkontrolle gemessen waren.

| Kanal | Aufruf | Ergebnis | Positivkontrolle im selben Lauf |
|---|---|---|---|
| **K1** NRWE-Volltextsuche per **GET** (R17-A hatte nur POST) | `curl -sL`, `?q="20 U 107/23"&method=stem` | 200, 227.645 B, kein Ergebnisblock | `20 W 37/24` → 227.644 B, **ebenfalls kein Ergebnisblock** → **Kanal tot** |
| **K2** openJur | geratener Pfad `/suche.html?q=` | 404 | — **kein Negativ**, eine Pfadvermutung ist kein Befund; nicht gewertet |
| **K3** Web-Suche, domänenbeschränkt | `"20 U 107/23"` auf `nrwe.justiz.nrw.de` | kein Treffer zur Sache | `20 W 37/24` **ebenfalls kein Treffer**, obwohl vorhanden → **Index deckt die Dokumente nicht ab**. Zusatzlauf mit der **anderen Schreibweise** (`I-20 U …`, von R17-A nie gesucht): ebenfalls ohne Treffer |
| **K4** dejure-Vernetzungsdienst | URL-Form aus einem Suchergebnis, **ohne** Datum | 200 | ⭐ Antwort für gesuchtes **und** Kontroll-Aktenzeichen **byte-identisch** (SHA-256 beide `3bae1de6…`); **mit** Datum liefert derselbe Dienst die echte Trefferseite (45.662 B) → **der Aktenzeichen-Parameter wirkt ohne Datum nachweislich nicht** |

**Alle vier Nulltreffer sind Kanalbefunde, keiner ist ein Sachbefund.** Es
fehlt weiterhin genau eine Angabe: das **Entscheidungsdatum**. Belege mit
Hashes: `sensibel/rohbelege-R18-A/` samt `00-quellenliste.md` (dort auch,
was bewusst **nicht** versucht wurde und warum).

⭐ **Der wichtigere Fund kam beim Lesen der Nennstelle selbst.** Rn. 22 des
Beschlusses sagt, die Parteien hätten aus den beiden Verfahren
**„Kenntnis"** — **nicht**, dass die Auffassung dort *begründet* worden
wäre; im Beschluss selbst steht sie zudem nur als „Im Übrigen hat der Senat
bereits darauf hingewiesen". Der Bestand behauptete an **zwei** Stellen das
Zweite und ist an beiden repariert (s. Teil 7a). **Damit ist auch die
Auftragsfrage beantwortet:** *Trägt die Entscheidung die zitierte
Irreführungs-Auffassung begründet?* → **Aus dem Beschluss nicht
feststellbar** — er behauptet es nicht; ob die Parallelverfahren sie
tragen, bleibt offen (Träger MKT-HANDEL, Anschluss über die neue
Teilfrage 4a).

**(b) Briefing:** Das Angebot an die Kanzlei war bisher nur ein Satz im
§ 2.3-Nachtragskasten und damit **keine gestellte Bitte**. Jetzt als
**Teilfrage 4a** in § 2.2 (ein Satz, kein neuer Sachvortrag) und als
eigene **Zulieferungs-Zeile** in § 8 („keine Rechtsfrage, sondern ein
Beschaffungswunsch").

## Teil 5 — Arbeitstitel-Rechtsfrage als **Kandidat C** in § 4a

**Ortswahl begründet im Dokument:** Die Frage berührt zwar das
Art.-14-Umfeld der Frage 2, hängt aber an einem noch offenen **eigenen**
Entscheid (**E-A1** „Warten oder Arbeitstitel?") — in Frage 2 wäre sie eine
fünfte Achse in einem abgeschlossenen Fragenzuschnitt; genau daran ist in
R15 schon einmal ein Zuschnitt verschoben worden (Befund H-4). § 4a ist der
Ort, den das Dokument für Kandidaten vorsieht, über die **der User vor dem
Versand** entscheidet. Fällt E-A1 auf „Warten", ist Kandidat C
gegenstandslos.

**Eingetragen als „streitig/ungeklärt", nicht als der bequemere Pol.**
Nichts entschieden, nichts beantwortet. Kopfblock „Änderungen R18-A"
ergänzt, **Status bleibt ENTWURF**.

**Die tragende Verneinung selbst geprüft** (Pflichtform: Verneinung mit
Auftrag → am Objekt, mit Suchweg): `grep -rn "Arbeitstitel"` über `handel/`
und `akquise/` → **0 Treffer in `handel/`**, alle 11 im Akquiseplan;
zusätzlich über den **Sachbegriff** gesucht (Firmierung/F-7/Verantwortlicher).
Positivkontrollen im selben Lauf: „Verantwortlich" = 17, „Rebrand" = 3 im
Briefing. Die nächstliegende Bestandsstelle (§ 7.2, Zuständigkeit der
Aufsichtsbehörde) betrifft eine andere Frage. **Verneinung bestätigt.**

## Teil 6 — o8 § 5.4 ↔ § 10 B-6 (R17C-N-1)

**Die strengere Stelle gewinnt:** o8 § 10 **B-6** führt jetzt den
**FG-2-Anteil** neben FG-4 (Vorbehalt zuerst, dann der Satz), mit
byte-treuem Zitat der § 5.4-FG-2-Zeile und sichtbarem Grund.

⭐ **Befund zur Auftrags-Prämisse:** Die Ableitung war **nicht** offen — sie
war die Fundstelle des Fehlers. `akquise/listenbau-regelwerk.md` § 6.1
(Feld 4) und `akquise/wellenprotokoll-vorlage.md` (WP-19/WP-19a) hatten die
Lücke bereits gemeldet und der strengeren Lesart folgend nachgezogen; beide
durften die Quelle nicht selbst ändern. **Offen war die QUELLE** — genau die
Spiegelrichtung aus MKT R12/P-04: Sonst kehrt die Vorrangklausel die
Präzisierung wieder um.

**Folgesatz nachgezogen (L-51):** In `listenbau-regelwerk.md` § 6.1 stand
„**Die Quelle ist an dieser Stelle in sich inkonsistent**" — durch meinen
Edit falsch geworden. ERLEDIGT-Kasten davor gesetzt; der Originalabsatz
bleibt stehen, weil er dokumentiert, dass die Lücke von der **Ableitung**
gefunden wurde. **Grep vorher:** wer zitiert „B-6"? → 6 aktive Fundstellen
(o8 3 ×, listenbau 2 ×, wellenprotokoll 3 ×, akquiseplan 1 ×),
Positivkontrolle o8 § 10 selbst.

## Teil 7 — Sperrdatei-Positivliste (R17A-N-7)

Die Liste ließ **zwei Pflichtfelder der eigenen Feldtabelle** fallen:
**`SP-01`** (Sperr-ID) und **`SP-09`** (Reichweite — ausgerechnet das Feld,
das die Kanalübergreifendheit trägt und schon einmal gegen eine Teil-Sperre
verteidigt werden musste, PE-12). Neu: **`SP-01` bis `SP-03`, `SP-05` bis
`SP-10` — niemals `SP-04`.**

**Gegenprobe zur Vollzähligkeit im Dokument ausgewiesen:** `SP-01`–`SP-10`
sind in der Feldtabelle **alle** ✅ Pflicht mit der einzigen Ausnahme
`SP-04` (🔶); die neue Liste ist deckungsgleich mit *alle Pflichtfelder
außer `SP-04`*. `SP-11`–`SP-13` bleiben bei `ANL-3` leer (kein
Antwortschreiben), `SP-14`/`SP-15` sind bedingt — sie fehlen nicht, sie
greifen nicht.

**Zwei Ableitungen nachgezogen, historische Zeilen im Originalwortlaut:**
(1) Briefing-Kopfblock — die R17-A-Änderungszeile zitiert die alte
Positivliste; sie bleibt wörtlich stehen und bekommt einen **Nachtrag
daneben** („maßgeblich ist der neue Stand"). (2) Briefing § 4a Kandidat A
zählte dieselben sieben Felder in Klartext auf → jetzt neun.
**Grep `SP-02` repo-weit:** außerhalb der Sperrdatei nur diese beiden
Briefing-Stellen; Protokolle sind Historie.

## Teil 7a — Folgesätze der OLG-Beschaffung (L-51), Nenner am Dokument

Suchraum: `grep -rn "nicht beschafft"` + `"20 W 37/24"` repo-weit.
**Nenner: 6 Fundstellen „20 W 37/24" im Briefing, 6 in der Rechtsmatrix.**

| Stelle | Befund | Erledigt |
|---|---|---|
| Briefing § 2.3, Quellentabelle | „**Original nicht beschafft**" — seit R17-A überholt | ✅ Vorwärtsverweis, Vorfassung durchgestrichen sichtbar |
| Briefing § 7.2 („Was wir NICHT erhoben haben") | 20 W 37/24 stand in der Liste „nicht am Original geprüft" | ✅ gestrichen mit sichtbarer Begründung |
| Briefing § 2.3, Nachtragskasten | „wäre das die Stelle, an der die Gegenauffassung **tragend begründet** ist" | ✅ repariert (Rn. 22 sagt „Kenntnis") |
| Rechtsmatrix, Beschluss-Kasten Punkt 8 | „Der Senat verweist für die **begründete** Fassung …" | ✅ repariert + zweiter Beschaffungsversuch nachgetragen |
| `projektquelle-mkt.md` Z. 948 | Parallelverfahren, „Original nicht beschafft" | **bleibt korrekt** — mein Negativ bestätigt es |
| `projektquelle-mkt.md` Z. 1200 · `STATUS.md` Z. 80 | „Rn. 111 …, Original nicht beschafft" | **kein Befund** — beides sind **datierte R16-A-Rückblicke**, die den Stand ihres Datums tragen; der aktuelle Stand steht im selben Dokument prominenter (STATUS.md Z. 37 „im Volltext", Z. 309 „im Original gelesen"). Wahrheits-Kanal ohnehin tabu |

⭐ **Klasse dieses Fundes:** Die Überdehnung entstand beim **Verdichten**.
Das Beschaffungsprotokoll R17-A schrieb korrekt „dort **dürfte** sie
begründet stehen"; in beiden Zieldokumenten wurde daraus eine
Bestandsaussage über den Senat — in einem Satz, der an einen **Anwalt**
geht.

---

# Block 1b — Prüfer-Disposition (ALLE Befunde, kategorienweise MIT NENNER)

Ein unabhängiger Prüf-Subagent mit frischem Kontext, eingefrorenem Hash
`8fe60d8` im Auftrag; Bericht: `protokolle/R18-A-pruefer.md` (807 Zeilen,
einzige von ihm geschriebene Datei). **Lauf-Status: vollständig
durchgelaufen, kein Abbruch.** Er hat seine Blindstellen in einem eigenen
Abschnitt mit **9 Punkten** ausgewiesen (u. a.: Rn. 227–273 nicht am
Stück gelesen · Zitat-Wächter nicht gelesen · Wächter-Delta nicht
reproduziert · Teile der L-51/L-25-Liste delegiert und nur an drei
Stichproben nachgeprüft).

**Alle Befunde wurden am ROHBELEG gegengeprüft, nicht aus dem Bericht
übernommen** (L-42). Sie haben sich ausnahmslos bestätigt.

| Kategorie | Nenner | Disposition |
|---|---|---|
| **SCHWER** | **3 von 3 repariert** | S-1 · S-2 · S-3 — alle drei in `handel/angebotsarchitektur.md` § 6a.7a |
| **MITTEL** | **8 von 9 repariert, 1 teilweise mit Träger** | repariert: M-1 · M-2 · M-3 · M-4 · M-5 · M-6 · M-7 · M-9. **M-8 teilweise:** Die zu weite Entwarnung in o8 B-6 ist eingeschränkt; der eigentliche Nachzug betrifft `akquise/wellenprotokoll-vorlage.md` und liegt **außerhalb meines Scopes** → **Träger MKT-AKQ** (Block 3, N-2) |
| **HINWEIS** | **9 von 11 repariert, 1 erledigt sich, 1 bewusst offen mit Träger** | repariert: H-1 · H-2 · H-3 · H-4 (alle drei Glättungen) · H-5 · H-6 · H-9 · H-10 · H-11. **H-8** (toter Verweis auf `protokolle/R18-A-abschluss.md`) **erledigt sich mit dem Commit dieses Protokolls**. **H-7 bewusst offen:** Die Aussage „ein Wächter deckt die Aufzählung nicht ab" steht in einem **R14-B**-Kasten, ist seit der R17-B-Prüfraum-Erweiterung ungemessen — fremder Text, nicht mein Eingriff → **Träger Leitsession nach R18-B** |
| **RÜCKWÄRTS** | **5 von 8 eingearbeitet, 2 als Nebenbefund, 1 ohne Befund** | eingearbeitet: **R-1** (Adressatengrenze Rn. 186/148 — über die S-2-Reparatur), **R-2** (fachliche Sorgfalt → neue Prüffrage (4)), **R-3** (Rn. 189/191 — die gesperrte Entlastung, eigene Tabellenzeile), **R-4** (Rn. 205 — die stärkste Stelle, eigene Zeile), **R-5** (Rn. 208 erster Grund). Als Nebenbefund geführt: **R-6** (= N-3, Rn. 180/194) und **R-7** (= N-4, Rn. 184/185). **R-8** (OLG-Kernbereichsdogmatik): vom Prüfer ausdrücklich **ohne Befund** |

## Die drei schweren Befunde im Einzelnen — was sie waren und was daraus wurde

**S-1 — eine erfundene Bestandsaussage in meinem eigenen neuen Text.**
Ich hatte geschrieben, o8 § 5.4 führe „Einzelunternehmer und
Privatvermieter ohne Unternehmereigenschaft" als eigene Fallgruppen.
**Selbst nachgemessen: beide Wörter kommen in o8 0-mal vor**
(Positivkontrolle „inhabergeführt" = 3). Die Fallgruppen FG-1…FG-6
schneiden nach **Personenbezug und Datenquelle**, nicht nach
Verbrauchereigenschaft. Der ganze Prüfposten hing an diesem Satz.
**Gestrichen, nicht abgeschwächt** — die Frage „erreicht unsere
Aussendung Verbraucher?" ist jetzt als **offene Vorfrage** ausgewiesen.
⚠️ **Das ist exakt L-36**, und zwar in derselben Runde, in der ich
dieselbe Klasse bei anderen repariert habe.

**S-2 — die Geltungsgrenze war falsch und übersah die schärfere eigene
Stelle.** „Alle **drei** Randnummern sprechen von Verbrauchern" —
zitiert waren **vier** Fundstellen, und am Rohbeleg gemessen: Rn. 206
und 207 nennen „Verbraucher" **0-mal**, Rn. 202 nur als Teilwort
(„**Verbraucher**zentrale" = die klagende Stelle). Zugleich verweist
Rn. 187 selbst auf „II 6 c bb (1)" = **Rn. 148** — und die Rechtsmatrix
führt dort seit R16-A die **Adressatengrenze** „an Verbraucher richten
**oder diese erreichen**". Die Hälfte des Tatbestands, die über die
B2B-Frage entscheidet, fehlte in meinem Abschnitt. Neu: Geltungsgrenze
**je Randnummer gemessen** (Tabelle im Dokument), § 3 Abs. 2-Schiene und
AGB-Recht **getrennt** ausgewiesen.

**S-3 — eine Entwarnung über meine eigene Arbeit.** „Dieser Posten stellt
sicher, dass die Klauselprüfung vor dem ersten Dokument gestellt wird."
**Selbst nachgemessen im Briefing:** `PV-1` · `305c` · „Überraschung" ·
„Einbeziehung" · `Rn. 187` · `Rn. 202` — **je 0 Treffer**
(Positivkontrolle „Frage 3" = 4). Die Frage ist im Briefing **nirgends
gestellt** — und ich habe dieselbe Datei im selben Commit an acht Stellen
angefasst. **Der Satz ist gestrichen**; stattdessen steht dort ein
offener Posten (Kandidat D für § 4a/§ 8) mit Träger. **Bewusst NICHT
selbst eingebaut:** Das Briefing ist ENTWURF mit fünf offenen
User-Entscheiden — eine Arbeits-Session fügt ihm keine fünfte Frage
hinzu.

---

# Block 2 — Offen geblieben

1. ⛔ **Push blockiert** (Klassifikator). Bau-Commit `8fe60d8` liegt lokal.
   **Handgriff User/Leitsession:** `git push origin 8fe60d8:main`.
2. **I-20 U 107/23 / I-20 U 117/23 weiterhin nicht beschafft** — Posten,
   kein Negativbefund. Es fehlt genau das **Entscheidungsdatum**. Wege:
   juris/beck-online (jetzt als Teilfrage 4a im Briefing gestellt) oder
   Anfrage bei der Geschäftsstelle (wäre Außenkontakt, außerhalb meines
   Auftrags). Bewusst **unterlassen**: Datums-Brute-Force über die
   NRWE-URL (mehrere hundert Abrufe gegen Justiz-Infrastruktur).
3. **`ROHBELEG_OFFEN_R17` nicht angepasst** (Sperre) — die
   Listen-Empfehlungen stehen oben in Teil 3, 8/8. Träger: Leitsession
   nach R18-B.
4. **Die fünf offenen User-Entscheide und die zwei R17-C-Fragen** sind
   unberührt; das Briefing bleibt **ENTWURF**.

---

# Block 3 — Nebenbefunde außerhalb des Auftrags

**PFLICHTFELD — welchen benannten Posten erfüllt mein Ergebnis?**
Projektquelle § 7 Punkt 0 „R17 — was jetzt oben liegt", **Posten (2) und
(6)** (mein Auftragstext im Wahrheits-Kanal) sind mit diesem Commit
erfüllt. Zusätzlich erfüllt: **R17A-N-2** (Rn. 187/188 → AA § 6a),
**R17A-N-3** (Rn. 220 → Rechtsmatrix), **R17A-N-7** (Sperrdatei-Positivliste),
**R17C-N-1** (o8 § 5.4 ↔ § 10 B-6), **R17-C Block 2 Nr. 2**
(Arbeitstitel-Frage ins Briefing). **Nicht** erfüllt und weiter offen:
der Posten „OLG-Parallelverfahren beschaffen" — er ist nur **enger**
geworden (es fehlt das Datum).

| # | Befund | Zielort / Träger |
|---|---|---|
| **N-1** | ⚠️ **Die Prompt-Prämisse „das Werkzeug am Arbeitsbaum ist der abgenommene R17-Stand; R18-B arbeitet AUSSERHALB des Repos" ist WIDERLEGT.** `akquise/pruefe-zitate.js` (+208 Zeilen) und `akquise/selbsttest-zitate.md` (+57) liegen **uncommittet verändert** im geteilten Arbeitsbaum; zusätzlich existiert `protokolle/R18-B-bericht.md` als untracked Datei. Ein naiver Wächter-Lauf hätte mir fremde Deltas als eigene zugeschrieben (die `> >`-Fälle in `angebotsarchitektur.md` Z. 257/261 und `preismodell-optionen.md` verschwinden durch **R18-Bs** Fix, nicht durch meine Arbeit) | **Leitsession** — Zuschnittfrage: Schreibt R18-B nun doch in den Arbeitsbaum? Ich habe nichts davon angefasst |
| **N-2** | `akquise/wellenprotokoll-vorlage.md` (Z. ~399) sagt „**B-6 und der § 6.1-Nachtrag des Regelwerks nennen nur FG-4**" — durch meinen o8-Edit **überholt**. Außerhalb meines Scopes, deshalb nicht angefasst | **MKT-AKQ** — L-51-Nachzug, eine Zeile |
| **N-3** | **Rn. 180 / Rn. 194 des LG-Urteils:** Die vom Kläger gewählte Anspruchsgrundlage begrenzt die gerichtliche Prüfung nicht („Die verschiedenen Unlauterkeitstatbestände des UWG stellen nur unterschiedliche rechtliche Gesichtspunkte … eines einheitlichen Streitgegenstandes dar"). Für die Risikoeinschätzung erheblich — **wenn eine Schiene im B2B-Fall nicht trägt, ist damit nicht die Prüfung erledigt**. Nicht eingearbeitet: Es ist eine Rechtsbewertung, und die Rechtsmatrix zieht dort ihre harte Grenze | **MKT-HANDEL** — Kandidat für Briefing-Frage 3 (Teilfrage), Entscheid Leitsession/User |
| **N-4** | **Rn. 184:** Im Wettbewerbsprozess (anders als im Verbandsklageverfahren nach §§ 1, 2 UKlaG) kann auch die **Einbeziehung** von AGB angegriffen werden — das erweitert den Angriffsraum gegen eigene Vertragsdokumente über die reine Inhaltskontrolle hinaus | **MKT-HANDEL** — gehört sachlich zu `PV-1`, dort bewusst nicht aufgenommen (hätte den Posten zur Rechtsbewertung gemacht) |
| **N-5** | Rechtsmatrix, Reparaturkasten zu Tenor Nr. 4: Die Einordnung der Monatsfrist als „**also Art. 14 Abs. 3 lit. a**" ist eine eigene Ableitung — der Tenor nennt nur „Art. 14 Abs. 1 und Abs. 2 DSGVO". Sie ist im Text durch „also" als Einordnung erkennbar und sachlich plausibel; **nicht angefasst**, weil sie außerhalb der acht Aufnahmebefunde liegt | **MKT-HANDEL** — beim nächsten Durchgang als Ableitung kennzeichnen |
| **N-6** | Der Beschluss 20 W 37/24 ist **in sich datumsuneinheitlich** (im Briefing § 2.3 bereits vermerkt). Beim zweiten Lesen bestätigt; kein neuer Handlungsbedarf, aber relevant, falls die Entscheidung je zitiert wird | — (nur Bestätigung) |
| **N-7** | ⭐ **Struktureller Wächter-Befund:** `handel/angebotsarchitektur.md` ist dem **LG-Rohbeleg nicht zugeordnet** — schon am Rundenstart „0 bestätigt (Rohbeleg, lokal)". Jedes korrekte Urteilszitat in dieser Datei erscheint dadurch dauerhaft als NEU; vier meiner Einträge sind genau das. Ein Wächter, der bei korrektem Verhalten rot wird, wird abgeschaltet (CLAUDE.md) | **Leitsession / R18-B** — Zieldatei-↔-Rohbeleg-Zuordnung um `angebotsarchitektur.md` erweitern, dann Delta neu erheben |
| **N-8** | Prüferbefund **H-7**: Der C4-Kasten (R14-B, 13.08.) behauptet „Ein Wächter deckt sie nicht ab: `pruefe-zitate.js` führt weder das O-8-Dokument noch diese Aufzählung als Blockzitat" — seit der R17-B-Prüfraum-Erweiterung (19 neue Zieldateien) ist das **ungemessen**. Fremder Text, den ich nicht angefasst habe; meine Dubletten-Begründung stützt sich mittelbar darauf | **Leitsession nach R18-B** — Aussage nachmessen oder Belegstufe herabsetzen |

---

# Block 4 — Stolpersteine und Learnings

## (i) Fallen

1. ⭐⭐ **Eine Positivkontrolle mit EINEM Ausreißer entwertet den ganzen
   Lauf — nicht nur die eine Zahl.** Meine erste Zeichen-Messung
   (Umlaute/U+00AD/NBSP/U+2011 per `grep -o`) lief im **Byte-Modus**: Die
   Kontrolle meldete `Umlaut=2` statt 1, die anderen drei Muster je 1. Ich
   habe den Ausreißer erkannt, als „byte-basiert, aber als Vorher/Nachher
   brauchbar" abgetan — **und die drei anderen Zahlen weiterverwendet.**
   Sie waren ebenfalls Byte-Artefakte: gemeldet wurden 44 Soft-Hyphen und
   156 NBSP in der Rechtsmatrix, **tatsächlich sind es 0 und 0** (`[äöüÄÖÜß]`
   zerfällt im Byte-Modus in eine Klasse aus UTF-8-Folgebytes, unter denen
   `AD` und `A0` vorkommen). Erst der Nachher-Lauf zeigte die Absurdität
   (156 → 26.392). **Regel: Wenn eine Kontrolle an EINER Stelle nicht
   passt, ist der Lauf tot — nicht die Stelle.** Reparatur: Zählung als
   **Skriptdatei mit eingebautem Selbsttest**, der bei Abweichung
   abbricht (`zeichen.js`, 4 Muster je 1 Treffer + Gegenprobe 0).
2. ⭐ **Das Grep-TOOL erbt das geteilte Arbeitsverzeichnis des
   Bash-Kanals.** Ein `cd sensibel/rohbelege-R09-A` im Bash-Kanal ließ
   einen anschließenden Grep-Tool-Aufruf **ohne `path`-Parameter** 0
   Treffer melden — bei 14 tatsächlichen Fundstellen. Der bekannte
   `cd`-Fall war bisher nur für `git add` belegt; er trifft das
   **Suchwerkzeug** genauso, und dort sieht das Ergebnis wie ein sauberes
   Negativ aus. **Konsequenz: Grep-Tool immer mit explizitem `path`.**
3. ⭐ **Ein Wächter-Delta im Parallelbetrieb ist ohne Snapshot-Konstruktion
   nicht zuordenbar (L-40).** Der Zitat-Wächter war unter mir von R18-B
   verändert worden; mein „Nachher"-Lauf lief mit dem neuen Werkzeug, die
   Baseline mit dem alten. Das Delta hätte mir **fremde** Verbesserungen
   als eigene gutgeschrieben. Tragfähig wurde es erst über **zwei
   Snapshots, die sich nachweislich GENAU um die eigene Arbeit
   unterscheiden** (`diff -rq` = exakt 6 Dateien, Werkzeug-md5 identisch)
   — beide Läufe mit demselben Werkzeugstand.
4. **Der Löschungs-Diff fängt fremde Arbeit ein.** `git diff 86afceb --
   handel/ akquise/` zeigte gelöschte Zeilen aus dem **Akquiseplan**
   (R18-C, uncommittet). Eine Löschungszählung muss auf die **eigenen
   Pfade** eingeschränkt werden, sonst prüft man fremden Text.
5. **Verschachtelte Kursiv-Klammern zerlegen Markdown.** Mein erster
   L-35-Nachtrag setzte `*(…)*` **innerhalb** eines bestehenden `*(…)*`.
   Beim Nahtstellen-Gegenlesen gefunden und als eigener Block neu gebaut.
   Die L-38-Pflicht (Nahtstelle nach dem Edit erneut lesen) hat hier
   konkret etwas gefangen.
6. **Auftrags-Prämissen halten auch in dieser Runde nicht durchgängig:**
   drei von acht Teilen trafen auf eine bereits erledigte oder gekippte
   Prämisse (Teil 1 „stand nirgends" → widerlegt; Teil 6 „Ableitung
   nachziehen" → war bereits nachgezogen, offen war die Quelle; Teil 4
   „Werkzeug ist der abgenommene Stand" → widerlegt).
7. ⭐⭐ **Alle drei schweren Prüferbefunde lagen im einzigen Stück, das
   ich NEU gebaut habe — und zwar genau in den Sätzen, die den Bau
   rechtfertigen.** Die reparierende Arbeit an fremdem Text (Tenor-Zitat,
   Rn.-22-Überdehnung, Sperrdatei-Positivliste, Beschaffungsprotokoll)
   hat der Prüfer am Original bestätigt; falsch waren **meine eigenen
   Begründungssätze**: eine erfundene Bestandsaussage über o8 (S-1), eine
   ungemessene Geltungsgrenze (S-2), eine Entwarnung über die eigene
   Wirkung (S-3). **Beim Prüfen fremden Textes ist man wach; beim
   Begründen des eigenen Neubaus nicht.** L-49 sagt, die frisch
   angewandte Regel schütze den Text nicht, den man dabei schreibt — hier
   ist es dreifach am selben Abschnitt belegt.
8. ⭐ **Eine Verneinung erbt den Suchraum, aus dem man sie abschreibt.**
   Kandidat C übernahm die Formulierung „nirgends gestellt" **samt
   Suchweg** (`handel/` + `akquise/`) aus dem Akquiseplan — und der
   Suchraum schloss ausgerechnet den **Wahrheits-Kanal** aus, der die
   Frage als Posten führt („gestellt, unbeantwortet"). Dazu kam ein
   zweiter Fehler im selben Lauf: **case-sensitiv**, während die
   Projektquelle „**ARBEITSTITEL**" in Großbuchstaben schreibt. Zwei zu
   enge Achsen zugleich ergaben ein Negativ, das nicht passen konnte.
   ⚠️ Und eine **Fremdmeldung hatte den weiteren Suchraum bereits
   benannt** (`R17-C-abschluss.md`: „mit repo-weitem Grep statt nur
   `akquise/`+`handel/`") — ungelesen (L-50).
9. **Eine „x von y"-Erledigung ohne Nenner liest sich als vollständig.**
   Mein ✅-Kasten in `listenbau` § 6.1 sagte „die Abweichung besteht
   nicht mehr" — erledigt war **1 von 3**, und der Absatz „3 von 3 offen"
   stand fünf Zeilen darüber, im eigenen Scope (L-13 + L-51 in einem).
10. **Der eigene Reparaturtext erzeugt neue Fehlerklassen:** eine
   fehlende Leerzeile zog per *lazy continuation* einen Vorbehalt in
   einen internen Kasten, der vor dem Versand entfernt werden soll
   (M-4) — in einem Dokument, das an einen Anwalt geht. **Das ist die
   Einfüge-Variante des Edit-Anker-Fehlers; L-38 kennt bisher nur die
   Löschungs-Variante, und die Löschungszählung ist dagegen blind.**

## (ii) Bewährte Muster

1. ⭐ **Der Umweg über die Nennstelle schlug die Beschaffung.** Der
   wertvollste Fund von Teil 4 kam nicht aus einem der vier Kanäle,
   sondern daraus, **Rn. 22 im bereits vorliegenden Beschluss am Stück zu
   lesen**: Der Senat sagt „Kenntnis", nicht „begründet" — was zwei
   Bestandssätze kippte, darunter einen, der an einen Anwalt gegangen
   wäre. **Bevor man eine Quelle beschafft, liest man, was die vorhandene
   Quelle über sie sagt.**
2. ⭐ **Byte-Identität als Positivkontrolle.** Bei K4 war das
   überzeugendste Ergebnis nicht „kein Treffer", sondern dass die Antwort
   für das gesuchte **und** für ein bekanntes Kontroll-Aktenzeichen
   **denselben SHA-256** trägt. Das ist eine Kontrolle, deren Ergebnis
   eine **Unmöglichkeit** anzeigen kann — und genau das tut sie hier.
3. **Die Ableitung als Fundstelle des Quellenfehlers.** Zweimal in dieser
   Runde (Teil 6, Teil 7) stand der Fehler in der **Quelle**, während die
   **Ableitung** ihn bereits korrekt gemeldet hatte und nur nicht
   reparieren durfte. Beim Bearbeiten eines L-25-Postens lohnt zuerst die
   Frage: *Hat die Ableitung ihn schon gefunden?*
4. **Die Konventions-Anpassung senkt das Wächter-Delta messbar.** Vier
   eigene Formulierungen von Anführungszeichen auf **kursiv** umgestellt
   (Konvention C-F4) → Delta von **+16 auf +12** NEU, mit
   Trefferkontrolle je Muster (4/4, Abbruch bei Abweichung).
5. **Der externe Randnummern-Anker trägt.** `Rn. 156 = Zeile 440` /
   `Rn. 273 = Zeile 674` aus R17-A § 1.3 ließ sich byte-genau bestätigen
   und machte jedes Selbst-Auszählen überflüssig — Randnummern waren
   danach per `grep -n "^ 220 "` direkt ansteuerbar.
6. ⭐ **Die Rückwärts-Kategorie des Prüfers war die produktivste Stelle
   der ganzen Runde.** Fünf ihrer acht Funde sind eingearbeitet, und die
   zwei wichtigsten stärken die eigene Position, statt sie zu schwächen:
   **Rn. 205** (Übersichtsdokumente scheitern schon an ihrer
   **Überschrift** — die stärkste Stelle für unseren Fall, und sie stand
   im ungelesenen Teil) und **Rn. 189/191** (die naheliegendste
   Entlastung „war ja nie einbezogen" ist im Urteil **ausdrücklich
   gesperrt**). L-48 sagt, der „nicht erhoben"-Abschnitt eines Prüfers
   sei die erste Nacharbeits-Liste — hier war es der ungelesene Teil des
   Urteils, und er trug den besten Fund.
7. **Eine Trefferkontrolle je Muster mit Abbruch fängt real.** Von 12
   skriptgesteuerten Ersetzungen meldeten **6 beim ersten Anlauf ROT**
   (0 Treffer statt 1) — Ursache jedes Mal die Repo-Eigenheit
   *öffnend `„` typografisch, schließend ASCII `"`*, dazu
   Zeilenumbrüche und Fettungen im Muster. Ohne die Kontrolle wären
   sechs Stellen still liegen geblieben und die Meldung hätte
   „repariert" gelautet.
8. **Byte-Gleichheit maschinell belegen, nicht behaupten.** Nach der
   Zitat-Reparatur in o8 B-6 wurde die Deckungsgleichheit mit der
   § 5.4-Quelle per Skript-Vergleich geprüft (`IDENTISCH: true`) — eine
   Lese-Gegenprobe hätte nur die Wortlaut-Ebene belegt (L-02).

---

# Anhang — Messungen im Überblick

**Wächter-Delta (zwei Snapshots, gleicher Werkzeugstand, Kontrollen in
beiden Läufen 33/33 und Gegenprobe 3/3):**

**Stand nach Bau UND Prüfer-Reparaturen** (beide Läufe mit demselben
Werkzeugstand, Kontrollen je 33/33 und Gegenprobe 3/3):

| Datei | NEU vorher | nach Bau | **nach Reparatur** | Delta gesamt |
|---|---:|---:|---:|---:|
| `handel/kanal-rechtsmatrix.md` | 22 | 25 | **29** | **+7** |
| `handel/anwalts-briefing-2026-08.md` | 3 | 7 | **9** | **+6** |
| `handel/angebotsarchitektur.md` | 2 | 4 | **11** | **+9** |
| `akquise/interessenabwaegung-o8.md` | 3 | 4 | **5** | **+2** |
| `akquise/listenbau-regelwerk.md` | 0 | 1 | **5** | **+5** |
| `akquise/sperrdatei-struktur.md` | 0 | 1 | **1** | **+1** |
| **Summe** | | +12 | | **+30** |

**Der Anstieg von +12 auf +30 ist der Preis der Prüfer-Reparaturen** und
war unvermeidbar: Jede sichtbare Reparatur zitiert ihre Vorfassung, und
jedes neu eingearbeitete Urteilszitat kommt hinzu. **Alle 30 sind
einzeln klassifiziert:**

| Klasse | Anzahl | Warum der Wächter sie melden MUSS |
|---|---:|---|
| **Vorfassungs-Selbstzitat im Reparaturkasten** (L-26) | **19** | Der Vermerk zitiert die alte Fassung — sie kann per Konstruktion in keiner Quelle stehen |
| **Eigenzitat aus einem anderen Repo-Dokument** | **7** | Quelle liegt nicht im Rohbeleg-Pool (Akquiseplan, R17-C-Protokoll, o8, GA-Kette) |
| **Echtes Urteilszitat aus Rn. 189/191/202** | **4** | ⚠️ **struktureller Werkzeugbefund, s. Block 3 N-7:** `handel/angebotsarchitektur.md` ist dem LG-Rohbeleg **gar nicht zugeordnet** („0 bestätigt (Rohbeleg, lokal)" schon am Rundenstart) — korrekte Urteilszitate können dort **nie** grün werden |

**Aufnahmebefunde 8 → 8** über alle Läufe stabil: Der reparierte Eintrag
Nr. 2 ist vom Fließtext in den Reparaturkasten gewandert — die erwartete
Umwandlung in die L-26-Klasse, keine neue Lücke.

**Löschungszählung, zwei Nenner** (nur eigene Pfade):

| Nenner | Insertions | Deletions | Bedeutung |
|---|---:|---:|---|
| gegen **Rundenstart** `86afceb` | 508 | **32** | **unverändert 32, auch nach den Reparaturen** — der harte Beleg, dass kein fremder Bestandstext angetastet wurde |
| gegen **Bau-Commit** `8fe60d8` | 252 | **92** | das reine Reparatur-Delta; die 92 sind **ausschließlich eigener Text aus `8fe60d8`**, ersetzt durch die Prüfer-Fassungen |

**Jede gelöschte Zeile einzeln geprüft** (beide Nenner): ausnahmslos eigene
Edit-Anker. **Kein fremder Bestandstext angetastet, keine überstimmte
Passage geglättet** — die Vorfassungen kehren in Reparaturkästen bzw. als
~~durchgestrichener~~ Text sichtbar wieder. ⚠️ **Die Löschungszählung ist
gegen eine Fehlerklasse blind**, die der Prüfer gefunden hat: eine
fehlende Leerzeile, die per *lazy continuation* Folgetext in ein
Blockzitat zieht (M-4). Dort wird nichts gelöscht — die Wirkung entsteht
erst beim Rendern.

**Zeichen-Integrität** (Skript mit Selbsttest, 4 Muster je 1 Treffer,
Gegenprobe 0):

| Datei | Umlaute vorher → nachher | U+00AD | NBSP | U+2011 |
|---|---|---:|---:|---:|
| `kanal-rechtsmatrix.md` | 2148 → 2210 | 0 → 0 | 0 → 0 | 0 → 0 |
| `anwalts-briefing-2026-08.md` | 1146 → 1234 | 0 → 0 | 0 → 0 | 0 → 0 |
| `angebotsarchitektur.md` | 1546 → 1602 | 0 → 0 | 0 → 0 | 0 → 0 |
| `interessenabwaegung-o8.md` | 1129 → 1142 | 0 → 0 | 0 → 0 | 0 → 0 |
| `listenbau-regelwerk.md` | 970 → 976 | 0 → 0 | 0 → 0 | 0 → 0 |
| `sperrdatei-struktur.md` | 394 → 412 | 0 → 0 | 0 → 0 | 0 → 0 |

Umlautzahlen **nur gewachsen** (durch neuen Text), nie gesunken → kein
Encoding-Schaden. Zeilenenden per `git ls-files --eol` geprüft: durchgehend
`i/lf w/lf`, unverändert.
