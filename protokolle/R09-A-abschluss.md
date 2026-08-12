# R09-A — Abschlussmeldung (Ben Beckman, MKT-AKQ, O-8)

**Token-Verbrauch: von der Session nicht erhebbar — Subagenten-Zahlen
soweit bekannt:** Recherche-Fan-out 4 Agenten (≈ 101.700 · 112.000 ·
122.300 · 165.700), Prüfer ≈ 310.300 (in zwei Läufen, siehe Block 4).
Für die Hauptsession existiert seit der `/cost`-Abschaffung kein Messweg.

**Modell dieser Session:** ⚠️ **nicht erhoben.** Die Statuszeile ist aus
der Session heraus nicht ablesbar, und die Selbstauskunft des Modells ist
laut CLAUDE.md kein Beleg. Wie bei R08-A/R08-B bleibt das ein
User-Handgriff — oder es ist, wie dort entschieden, endgültig nicht
erhebbar.

**Datum:** 12.08.2026 · **Auftrag:** Tagesplan 12.08.2026, Strang R09-A

---

## Block 1 — Gebaut und verifiziert

### Commits

| Hash | Inhalt |
|---|---|
| **`b2cfa12`** | `akquise/interessenabwaegung-o8.md` (neu, 951 Zeilen) + zwei Nachträge in `akquise/listenbau-regelwerk.md`. Gepusht (`git push origin b2cfa12:main`), Enthaltensein nach frischem `git fetch` mit `git branch -r --contains b2cfa12` belegt |
| **(dieser Commit)** | Disposition **aller** Prüferbefunde in beiden Dateien + `protokolle/R09-A-pruefer.md` + diese Meldung |

### Das Dokument

`akquise/interessenabwaegung-o8.md` — dokumentierte Interessenabwägung
nach Art. 6 Abs. 1 lit. f DSGVO (Stufe 3) für die
Kaltakquise-Zielkundenliste. Schließt **O-8**, **D2 Pflicht 4** und
**W-b1** aus `akquise/listenbau-regelwerk.md`.

Aufbau: Eingangsschranke als Filter (UWG **vor** der Abwägung, mit
Kanaltabelle) · Geltungsbereich sachlich/persönlich/zeitlich ·
Prüfgegenstand (Verantwortlicher, Datenkategorien, Zweck, Herkunft,
Empfänger, Speicherdauer) · Stufe 1 · Stufe 2 (verankert im
Feldregister, nicht doppelt geführt) · **Stufe 3 mit Ergebnis je
Fallgruppe** · Risikoteil · Betroffenenrechte-Kette · VVT-Block ·
O-2-Optionen · Bau-Pflichten · offene Punkte · Quellen und Prüfweg.

**Das Ergebnis ist bewusst kein Pauschalurteil:**

- **FG-1/FG-2** (Kapitalgesellschaft ohne Personenname): DSGVO für diese
  Felder nicht anwendbar — FG-2 (Impressumsquelle) nach dem Prüflauf auf
  „vertretbar, nicht gesichert" abgesenkt, weil das Verdikt der Aufsicht
  am **Auslesen** anknüpft und dabei der Personenname regelmäßig vorliegt.
- **FG-3** (freiwillige Quelle, personenbezogen): Abwägung fällt zu
  unseren Gunsten aus — **vertretbar, nicht gesichert**, und nach
  Einarbeitung von ErwG 47 Satz 4 **knapper** als in der Erstfassung.
- **FG-4** (Impressumsquelle, personenbezogen): **keine
  Zulässigkeitsfeststellung, sondern ein dokumentiert getragenes
  Restrisiko** gegen die Auffassung der Datenschutzkonferenz.
- **FG-5** (Telefon) ausdrücklich **nicht** abgewogen, **FG-6** (E-Mail,
  LinkedIn) vor der Eingangsschranke — kein Ergebnis, auch kein negatives.

**Drei Argumente sind als unbenutzbar gesperrt** (§ 5.3), weil sie
naheliegen und das Papier bei der ersten Prüfung kippen würden — allen
voran: Die **ordnungsgemäße Art.-14-Erfüllung verbessert die Abwägung
nicht** (DSK Ziff. 1.3.1: nur ihre Verletzung wirkt, und zwar negativ).

### Quellenlage — eigener Anker vor dem Fan-out

Fünf Primärquellen **selbst** beschafft (Rohbelege in
`sensibel/rohbelege-R09-A/`, git-ignoriert, nie committet;
Beschaffungsprotokoll `00-quellenliste.md`): DSGVO (amtliche dt.
Sprachfassung) · DSK-Orientierungshilfe Direktwerbung Feb. 2022 (über
**zwei** Behörden-Domains) · EuGH C-621/22 (EN-Volltext + amtlicher
deutscher Tenor) · LG Düsseldorf 38 O 243/23 (NRWE) · BfDI-INFO1 als
Kontrollquelle. Erst danach lief der Recherche-Fan-out (ein Agent je
Quelldokument) auf den lokalen Dateien — dadurch waren alle Fundstellen
mechanisch prüfbar.

### Verifikation

| Prüfmittel | Ergebnis |
|---|---|
| Mechanischer Zitatabgleich `pruefe-zitate-o8.js` | **131 Zitate: 102 wörtlich im Pool bestätigt, 29 deklarierte Ausnahmen mit Einzelbegründung, 0 gemeldet** — Exit 0 |
| Positivkontrolle **je Pooldatei** (nicht je Lauf) | **10/10** |
| Gegenrichtung (Muster, die nicht treffen dürfen) | 3/3 |
| Selbsttest des Prüfwegs (`--selbsttest`) | **bestanden** — 4 müssen bestätigt, 4 müssen gemeldet werden; der Erfolgsfall ist je Modus im Skript hinterlegt |
| **Rückbau-Gegenprobe 1** (vor dem Prüflauf) | **4 von 4** Verfälschungen gefangen; Testaufbau kontrolliert (ein erster Versuch hatte nur 3 von 4 gesetzt — ein Test, der nichts verändert, prüft nichts) |
| **Rückbau-Gegenprobe 2** (nach den Reparaturen, an den reparierten Stellen) | **4 von 5** gefangen — die fünfte deckt eine echte Blindstelle auf, siehe Block 2 |

**Vier echte Zitatabweichungen** hat der Abgleich schon vor dem Prüflauf
selbst gefunden und ich habe sie korrigiert: zwei Kürzungen ohne
Auslassungszeichen, zwei flektierte Zitate.

### Prüferbefunde — Disposition mit Nenner

Prüfer: unabhängiger Subagent, frischer Kontext, eingefrorener Prüfstand
`b2cfa12`, Schreibrecht nur auf `protokolle/R09-A-pruefer.md` (1.322
Zeilen). **24 Befunde: 4 SCHWER, 13 MITTEL, 7 HINWEIS**, dazu 7 innere
Widersprüche.

> **24 von 24 disponiert — davon 23 repariert, 1 als Streichung
> ausgeführt, 0 stillschweigend offen.** Jede Reparatur steht als
> **sichtbarer Korrekturkasten** im Dokument („hier stand X, das war
> falsch, weil …"), nie als stille Neufassung.

| Kategorie | Anzahl | Disposition |
|---|---|---|
| **SCHWER** | 4 von 4 | Q-01 Behauptete Abweichung zu curia **existiert nicht** (0 Treffer in der Rechtsmatrix, Positivkontrolle „eur-lex" 2) → zu „Ergänzung" umformuliert, in `00-quellenliste.md` nachgezogen · Q-02 Entwarnung „UWG-Teil nicht übertragbar" → **eingeengt**, §§ 5/5a UWG erfassen B2B (Rechtsmatrix A7 sagt es ausdrücklich) · Q-03 **ErwG 47 Satz 4 fehlte** → als **C-9** aufgenommen, FG-3 dagegen neu gelesen · Q-04 **LG Rn. 87 fehlte** → aufgenommen, **verschiebt die Fälligkeit von O-2 vom Versand auf den Listenaufbau** |
| **MITTEL** | 13 von 13 | Q-05 Empfänger-Angabe (Art. 14 I e) ergänzt + geerbte C4-Lücke als § 11.2 Nr. 8 gemeldet · Q-06 gekoppelte Art.-24-TOM ergänzt (B-2 + VVT lit. g) · Q-07 B-4 auf den Quellwortlaut zurückgeführt · Q-08 drei Vorbehalte zurückgeholt, Superlativ **gestrichen** · Q-09 **B-8 ersatzlos gestrichen** · Q-10 P-7 auf eine Auflage umgestellt, Trigger-Schwelle 300 eingesetzt · Q-11 E-Mail-Scope der Zahl wiederhergestellt · Q-12 Messstand an die Zahl (Vorher-Stand `b2cfa12~1`) · Q-13 FG-2 abgesenkt · Q-14 Zuschreibung auf die DSK präzisiert · Q-15 „alle Zitate" → „stichprobenhaft, folgende" + Liste vervollständigt · Q-16 auf Rn. 85 gestützt, „insoweit" zurück · Q-17 F-10 ergänzt, P-2 umformuliert |
| **HINWEIS** | 7 von 7 | Q-18 Rn. 75 ergänzt · Q-19 Anführungszeichen gerückt · Q-20 § 7 Abs. 1 UWG in den Filter · Q-21 Tenor-Scope sichtbar gemacht · Q-22 Zitatzuordnung präzisiert · Q-23 Zitat vervollständigt · Q-24 Kategorie korrigiert |
| **Innere Widersprüche** | 7 | mit den zugehörigen Befunden erledigt (W-Nummern verweisen auf Q-02/Q-08/Q-10/Q-13/Q-15/Q-17) |

**Ein Prüferbefund war teilweise falsch:** Q-03 belegt sich unter
anderem damit, „Rn. 45 wird im gesamten Dokument nirgends genannt
(0 Treffer)". Eigene Nachmessung: **1 Treffer** (§ 11.2 Nr. 4;
Positivkontrolle „Rn. 48" 3 Treffer). **Der Kern des Befundes stimmt
trotzdem** — ErwG 47 Satz 4 fehlte tatsächlich (0 Treffer), und Rn. 45
war nur beiläufig erwähnt, nicht als Contra-Faktor verwertet. Befund und
Ursachen-Diagnose sind zwei Prüfungen; hier trug die Diagnose nicht ganz.

**Laufstatus des Prüfers — offene Prüfschritte einzeln, nicht geglättet:**

1. **Der Prüfer brach beim ersten Lauf an einem Session-Limit ab**,
   unmittelbar vor dem Schreiben („All sources verified. Writing the
   protocol now."). Er wurde **aus dem Transkript fortgesetzt**, nicht neu
   gestartet, mit der Auflage „zuerst schreiben, Unfertiges als unfertig
   kennzeichnen". Das Protokoll war beim Wiederaufsetzen bereits
   vollständig; nichts blieb als „nicht geschrieben".
2. **`pruefe-zitate-o8.js` und der Selbsttest wurden vom Prüfer weder
   gelesen noch ausgeführt** — er weist die fünf Werkzeug-Aussagen in
   § 12.4 ausdrücklich als **von ihm unbestätigt** aus und nennt das
   selbst den wichtigsten offenen Prüfschritt. **Ich habe ihn geschlossen,
   aber in eigener Sache** (Rückbau-Gegenprobe 2, siehe oben) — eine
   unabhängige Prüfung des Werkzeugs steht weiter aus.
3. **Stichprobenhaft, nicht vollständig:** Rechtsmatrix ohne A1–A6,
   Regelwerk ohne §§ 1/2/4/8/9, Akquiseplan an vier Stellen,
   Positionierungspapier nur die Gliederung.
4. **Gar nicht geprüft:** § 11.2 Nr. 3 (Tenor nicht ziffernweise),
   `R09-A-abschluss.md` (existierte noch nicht), md5-Identität der beiden
   OH-Extrakte.

Alle Zahlen des Dokuments hat der Prüfer selbst nachgezählt und
reproduziert; die einzige nicht reproduzierbare war Q-12 — und die war
durch die eigenen Nachträge derselben Runde veraltet.

---

## Block 2 — Offen geblieben

| # | Punkt | Träger |
|---|---|---|
| **O-2** | **Löschfrist für Kaltkontakte — User-Entscheid.** Drei Optionen liegen entscheidungsfähig vor (6 / 12 / 24 Monate, je mit Frist, Begründung, Folge für die Abwägung, Gegenargument; Empfehlung A oder B, leichte Präferenz B; **24 Monate ausdrücklich nicht empfohlen**, weil sie die für Bestandskunden hergeleitete Frist auf Kaltkontakte spiegeln würden). Dazu eine Zusatzfrage (nie angeschriebene Datensätze früher löschen?). **Nicht selbst entschieden** | **User** |
| **O-9** *(neu)* | **Kompatibilitätsprüfung nach Art. 6 Abs. 4 DSGVO** — von der Aufsicht verlangt, in Rechtsmatrix und Regelwerk vorher nirgends geführt (0 Treffer am Stand `b2cfa12~1`, Positivkontrolle greift) | MKT-HANDEL / anwaltlicher Rat |
| **O-10** *(neu)* | Abwägung für den **Telefonkanal K2** (FG-5) | MKT-AKQ, wenn K2 scharf gestellt wird |
| — | **Die acht Bau-Pflichten** (B-1…B-8, davon B-8 gestrichen → sieben wirksame) sind **nicht** in die §§ 3/7 des Regelwerks eingearbeitet | MKT-AKQ, nächste Runde |
| — | **Unabhängige Prüfung des Prüfskripts** — vom Prüfer ausdrücklich nicht geleistet, von mir nur in eigener Sache geschlossen | nächster Prüflauf |
| — | **F-7 Firmierung** sperrt weiterhin jeden Versand (Art.-14-Pflichtangabe „konkrete juristische Person mit ladungsfähiger Anschrift") | MKT-MARKE / Zentrale |

**Nicht angefasst (auftragsgemäß):** `handel/`, `fund/`,
`akquise/akquiseplan.md`, Projektquelle, STATUS.md, CLAUDE.md,
Skills/Commands. Kein Versand, keine Adress-Erhebung, kein Listenbau,
keine Anbieterauswahl. D3.3 nicht mitentschieden.

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

### An MKT-HANDEL (`handel/kanal-rechtsmatrix.md`)

| # | Befund |
|---|---|
| **N-9** | **Geerbte Lücke in C4:** Der „Mindestumfang, der zusätzlich IN das Anschreiben gehört" nennt die **Empfänger-Angabe** (Art. 14 Abs. 1 lit. e) nicht — obwohl jeder Druck-/Lettershop und jedes CRM Empfänger i. S. d. Art. 4 Nr. 9 DSGVO ist. Hier ergänzt, dort nachzuziehen |
| **N-10** | **Art. 6 Abs. 4 DSGVO (Zweckänderung) fehlt vollständig** — 0 Treffer bei greifender Positivkontrolle. Die Aufsicht verlangt die Kompatibilitätsprüfung ausdrücklich (= O-9) |
| **N-11** | **Die Darstellung des LG-Urteils in A7 lässt offen, dass beide Absagegründe auf Stufe 1 liegen** (Rn. 84, Rn. 88) und das Urteil **keinen Abwägungstopos** liefert |
| **N-12** | **Die Gegenansicht fehlt:** OLG Stuttgart 2 U 63/22 und Eckhardt (ZD 2024, 399; ZD 2025, 443) sehen Briefwerbung großzügiger; das LG weicht ausdrücklich ab (Rn. 79–83). Ihr Fehlen lässt die Rechtslage eindeutiger aussehen, als sie ist |
| **N-13** | **Zwei Zahlen ohne Zählweg:** „199 Treffer für Verbraucher" ist nur **case-insensitive** reproduzierbar (case-sensitiv: 187), „109 für DSGVO" ist case-sensitiv. Ohne Zählweg an der Zahl nicht nachvollziehbar |
| **N-14** | **Neu gegenüber Teil B:** DSGVO-Verstöße bei Werbung sind über § 3a UWG abmahnfähig — auch durch **Mitbewerber**. Teil B behandelt nur UWG-Verstöße und die BGB-Schiene. ⚠️ In der Rechtsmatrix als „Streitstand nicht abschließend erhoben" geführt — neu ist der Beleg, nicht die Frage |

### An MKT-OPS

| # | Befund |
|---|---|
| **N-15** | **Der Zielort des VVT-Eintrags existiert nicht** — kein `ops/`-Verzeichnis im Repo (geprüft 12.08.2026). § 8 des Dokuments ist als 1:1 übernehmbarer Block gebaut; er braucht einen Träger |

### An MKT-AKQ (eigener Strang, nächste Runde)

| # | Befund |
|---|---|
| **N-16** | **Eigener Rückwärts-Fund, unabhängig vom Prüfer:** Von 29 Gliederungspunkten der DSK-Orientierungshilfe (über **zwei unabhängige Strukturmerkmale** gezählt — Inhaltsverzeichnis und Textteil-Überschriften, Differenz in beide Richtungen leer) sind 18 im Dokument adressiert. Die 11 nicht adressierten betreffen ganz überwiegend die Einwilligungs-Schiene (3.1–3.7) und damit einen anderen Geltungsbereich. **Ausnahme: Ziff. 4.3 („Beipack-Werbung")** — die einzige Stelle, an der die Aufsicht Briefwerbung per lit. f für zulässig erklärt (Prämisse: Vertragspartner). Tatbestandlich nicht unser Fall, aber sie stützt P-4 und gehört beim nächsten Durchgang erwähnt |

### An die Zentrale (Werkzeug-/Kanalbefunde, keine Postkorb-Meldung nötig)

- **`curia.europa.eu`/`infocuria` sind seit einem Relaunch eine
  JavaScript-SPA** ohne Nutzlast im HTML (drei URL-Formen, identische
  Byte-Zahl, 0 Treffer für den Parteinamen).
- **`eur-lex.europa.eu` blockt curl** (HTTP 202, leerer Body, 6 Versuche
  über 3 URL-Formen mit und ohne Browser-User-Agent) — **bestätigt** den
  Kanalbefund der Rechtsmatrix unabhängig.
- **Die deutsche Sprachfassung eines EuGH-Volltextes ist über
  `publications.europa.eu` teils nicht abrufbar** (404 bei `deu`/`de`/
  `de-DE`, 200 nur bei `eng`; vier Varianten gemessen). Ausweg: die
  **Amtsblatt-Mitteilung** (`…/celex/<Jahr>CA<Nr>`) trägt den amtlichen
  deutschen **Tenor**.

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **⭐ Ein Prüfskript, das seinen Erfolgsfall nicht kennt, meldet
   ausgerechnet nach geglückter Arbeit falsch rot.** Der Selbsttest
   erwartet **4 bestätigt / 4 gemeldet** — mit der Erfolgsbedingung des
   Hauptlaufs („0 gemeldet") ist dieser Zielzustand **nie erreichbar**.
   Das Skript meldete „NICHT bestanden", obwohl es exakt das tat, was es
   sollte. Pflichtform: **die Erfolgsbedingung je Modus im Werkzeug
   hinterlegen.** (Herkunft heyPensio R36, hier unabhängig reproduziert.)
2. **⭐ Die Rückbau-Gegenprobe braucht ihre eigene Positivkontrolle.** Der
   erste Durchlauf setzte nur **3 von 4** Verfälschungen — die vierte
   scheiterte still an einem Zeilenumbruch im Suchmuster. Ohne die
   Zählung „gesetzt: n von m" hätte ich „3 von 3 gefangen" gemeldet und
   damit einen **wirkungslosen Testaufbau** als bestandene Prüfung
   verbucht.
3. **⭐ Eine mechanische Prüfung, die zu viel meldet, wird abgeschaltet —
   und ihre Fehlalarme sind fast alle WERKZEUGFEHLER.** Von 37 zunächst
   gemeldeten „Abweichungen" waren **33 Werkzeugfehler in fünf Klassen**:
   Blockquote-Präfixe mitten im Zitat (die Normalisierung griff nur am
   Zeilenanfang), PDF-Silbentrennung, PDF-Seitenmarken mitten im Satz,
   Umbruch an Bindestrich/Schrägstrich („DS-⏎GVO", „Belästigung/⏎Störung")
   und deutsche Zitat-im-Zitat-Schachtelung (`„…"` → `‚…'`). Nur **4**
   waren echte Zitatabweichungen. **Bei Auszeichnungs-Parsing ist „nicht
   gefunden" fast immer das Muster** — die Regel gilt auch für die
   eigenen Prüfwerkzeuge.
4. **⭐ Eine Normalisierungsstufe muss SYMMETRISCH auf beide Seiten
   wirken.** Silbentrennung nur auf dem Pool aufzuheben machte aus
   „Telefon- und Stromanbieter" ein „Telefonund" und **verlor ein zuvor
   gefundenes Zitat**. Reihenfolge zählt zusätzlich: `dehyph` macht aus
   „DS- GVO" ein „DSGVO" und entzieht der nächsten Stufe die Bruchstelle.
5. **⭐ Eine Bestandsmessung, die in der Datei steht, die sie beschreibt,
   altert im selben Commit.** „Art. 6 Abs. 4: 0 Treffer in beiden
   Dokumenten" war nach meinen eigenen Nachträgen nicht mehr
   reproduzierbar (jetzt 4). Der **Vorher-Stand gehört an die Zahl**
   (`git show <hash>~1:<datei>`) — sonst liest ein Prüfer eine falsche
   Null. (Prüferbefund Q-12.)
6. **Der Dateiname einer Quelle ist keine Standangabe.** Die
   BfDI-URL trägt `20181107` im Namen und liefert inhaltlich die Fassung
   **Februar 2022** — beide Textextrakte sind md5-identisch. Umgekehrt
   heißt das: **Zwei Bezugsquellen sind nicht zwei Lesewege.** Der
   „Zweitkanal" stützt die Fassungsangabe, aber **keinen** Negativbefund
   über den Text; das hat der Recherche-Agent selbst als ersten Punkt
   gemeldet und ich habe es im Beschaffungsprotokoll so ausgewiesen.
7. **Eine behauptete Abweichung, die es nicht gibt, ist teurer als keine
   Abweichung.** Q-01: „Die Rechtsmatrix führt curia" — 0 Treffer.
   Solche Falschmeldungen kosten beim Empfänger Prüfzeit und beschädigen
   die übrigen Punkte derselben Liste.
8. **Die naheliegendste Entlastung war die gefährlichste.** „Wir
   informieren doch vorbildlich nach Art. 14" ist von der Aufsicht
   ausdrücklich als abwägungsneutral bezeichnet. Wäre das Argument als
   Pluspunkt ins Papier gewandert, hätte eine Behörde es mit einem Satz
   **aus ihrer eigenen Handreichung** gekippt.
9. **Ein Auslassungsfehler erzeugt keine auffällige Textstelle.** ErwG 47
   Satz 4 fehlte — der einzige Satz des Erwägungsgrundes mit nachteiliger
   Rechtsfolge, in der Quelle **exakt zwischen den beiden Zeilen, die das
   Dokument zitiert**. Gefunden hat ihn nur die Prüfrichtung „von der
   Quelle rückwärts". Kein Zitatabgleich der Welt hätte ihn gefunden.

### (ii) Bewährte Muster

1. **⭐ Eigener Quellen-Anker VOR dem Fan-out — mit einer Erweiterung.**
   Erst die fünf Volltexte selbst beschaffen, dann die Agenten darauf
   laufen lassen. Neu gelernt: **Der Anker macht auch die
   Negativbefunde der Agenten prüfbar** — ich konnte die 15er-Nullliste
   und die Positivkontrollen unabhängig reproduzieren, ohne die Quelle
   erneut zu beschaffen.
2. **⭐ Vier Recherche-Agenten, einer je Quelldokument, mit der Auflage
   „Aussage und Fundstelle getrennt".** Jeder lieferte mindestens einen
   Befund, den ich nicht gesucht hatte — darunter die Asymmetrie der
   Art.-14-Erfüllung, die Übertragungsgrenze zu EuGH Rn. 51 und die
   Erkenntnis, dass das LG-Urteil die Abwägung nie erreicht hat. **Und
   einer meldete ungefragt einen Fehler in meiner eigenen
   Auftrags-Prämisse** (die Interessenabwägung steht in Ziff. 1.3, nicht
   in Ziff. 2.x).
3. **⭐ Ergebnis JE FALLGRUPPE statt eines Pauschalurteils.** Zwei Achsen
   (Personenbezug × Adressquelle) machen sichtbar, wo die Abwägung trägt
   und wo ein Risiko getragen wird. Ein einziges Gesamturteil hätte
   entweder die tragfähigen Fälle mit heruntergezogen oder das
   Impressums-Risiko zugedeckt.
4. **⭐ Eine Liste ausdrücklich GESPERRTER Argumente** (§ 5.3). Sie kostet
   drei Absätze und verhindert, dass beim nächsten Redigieren jemand das
   plausibelste Gegenargument einbaut, das die Quelle gerade widerlegt.
5. **⭐ Vollzähligkeit über ZWEI unabhängige Strukturmerkmale.** Die
   DSK-Gliederung einmal über das Inhaltsverzeichnis (Punktführung +
   Seitenzahl), einmal über die Textteil-Überschriften: **29 = 29,
   Differenz in beide Richtungen leer.** Ein erster, generischer
   Extraktor hatte Fußnotenziffern mitgezählt und einen unbrauchbaren
   Nenner geliefert — die Kreuzprobe machte das sofort sichtbar.
6. **Abgebrochene Prüfer FORTSETZEN, nicht neu starten.** Der Prüfer
   brach am Session-Limit ab, unmittelbar vor dem Schreiben. Ein Neustart
   hätte ≈ 310.000 Token verbrannt; die Fortsetzung aus dem Transkript
   lieferte das vollständige Protokoll in 56 Sekunden.
7. **Reparaturen sichtbar machen zahlt sich sofort aus.** Jede der 23
   Reparaturen trägt einen Kasten „hier stand X". Beim Zitatabgleich
   wurden **genau diese Vorfassungen** als „nicht in der Quelle" gemeldet
   — was korrekt ist und sie zwang, einzeln als deklarierte Ausnahme mit
   Begründung erfasst zu werden. Die Doku-Hygiene-Regel und der
   mechanische Prüfweg greifen ineinander.

### (iii) Die Blindstelle des eigenen Prüfwegs — ehrlich benannt

Die zweite Rückbau-Gegenprobe fing **4 von 5** Verfälschungen. Die
fünfte — der Tausch des Normbegriffs „Kategorien von **Empfängern**" zu
„Kategorien von **Adressaten**" — blieb unentdeckt, **weil die Stelle im
Dokument als Fließtext steht, nicht in Anführungszeichen**. Der
Extraktor sieht sie nie.

> **Daraus die Regel: Der Zitatabgleich prüft, was als Zitat markiert
> ist — er prüft NICHT die Normbegriffe, Paragraphenangaben und
> Rechtsfolgen im Fließtext daneben.** Genau dort sitzt die
> gefährlichste Klasse: eine falsche Absatz- oder Buchstabenangabe
> („Art. 14 Abs. 2 lit. f" statt „lit. b") ist von keinem der
> eingesetzten Prüfmittel zu fangen und liest sich vollkommen plausibel.
> Der Prüfer nennt in seiner eigenen Antwort dieselbe Klasse.

Damit ist der Prüfweg dieses Dokuments an **drei** Stellen offen: die
Fließtext-Normangaben (hier), die unabhängige Prüfung des Prüfskripts
(Block 2) und die vom Prüfer nur stichprobenhaft gelesenen
Nachbardokumente (Block 1, Laufstatus).

---

*R09-A, Session Ben Beckman. Kein eigener Debrief — die Einarbeitung in
den Wahrheits-Kanal macht die Leitsession.*
