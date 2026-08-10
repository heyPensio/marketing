# R07-D — Abschlussmeldung (Rockstar, MKT-HANDEL)

**Token-Verbrauch:** von der Session nicht erhebbar — Subagenten-Zahlen
soweit bekannt: Prüfer (`R07-D-pruefer.md`) 272.226 Tokens, 42 Tool-Aufrufe,
Laufzeit ~21 Minuten. Weitere Subagenten wurden nicht eingesetzt.

**Modell:** ⚠️ **nicht verifiziert.** Der Start-Prompt verlangte die
Verifikation an der Statuszeile. Diese Session kann sie nicht leisten —
nach CLAUDE.md belegt nur die Statuszeile oder `/cost` das laufende
Modell, **nie die Selbstauskunft** (die hat nachweislich Abweichungen samt
Begründung erfunden, R24-B). An den User zurückgegeben, unbeantwortet zum
Zeitpunkt dieser Meldung. **Nicht** zu „Modell bestätigt" geglättet.

**Auftrag:** Förderarchitektur + IFB-/WTSH-Vorabklärung
**Repo-Messstand zu Beginn:** `0ea39bb` · **bei Abgabe:** siehe Commits unten

---

## Block 1 — Gebaut und verifiziert

### Deliverables

| Datei | Inhalt | Commit |
|---|---|---|
| `handel/foerderarchitektur-beraterrolle.md` | Trägerdokument, Fassung 3: drei Programme mit zweiachsiger Belegstufe je Aussage, Rollenklärung, Geltungsstandprüfung, 14 offene Punkte, Negativ-/Nichterhebungs-Protokoll | `131b9b3`, `a14cb4a`, `b34bea0`, `d0a79f7` |
| `handel/entwurf-anfrage-ifb-hamburg.md` | Anfrage IFB Hamburg, Fassung 3, Status ENTWURF, **4 Fragen** | `131b9b3`, `d0a79f7` |
| `handel/entwurf-anfrage-wtsh.md` | Anfrage WTSH, Fassung 3, Status ENTWURF, **4 Fragen**, ⚠️ **Versand gesperrt bis F-15** | `131b9b3`, `d0a79f7` |
| `protokolle/R07-D-pruefer.md` | Unabhängiges Prüfprotokoll, 30 Befunde | `d0a79f7` |

**Fertig-Kriterium erfüllt**, mit einer benannten Einschränkung: Zwei
Anfrage-Entwürfe im Status ENTWURF mit nummeriertem Fragenkatalog
(K.-o.-Fragen zuerst, 4 statt 10) plus Trägerdokument mit Belegstufe je
Aussage, offenen Punkten und dem geforderten Hinweis auf die
BAFA-Umsatzstrukturfrage als **Frage 11** der StB-Liste
(`zentrale\stb-termin-fragenliste-2026-08.md`; Aufnahme als User-Entscheid
belegt in `zentrale\briefings\briefing-2026-08-10.md`). **Einschränkung:**
Die WTSH-Anfrage ist versandfertig, aber nicht versandfähig — der Zuruf
der Leitsession hat eine Versand-Vorbedingung erzeugt (F-15).

### Prämissen-Prüfung — drei Funde, die den Auftrag verändert haben

1. **SH-DKU schließt Werbung ausdrücklich aus.** Ziffer 5.2.1, im Abschnitt
   zum Modul Beratung: Beratung darf nicht zu den „gewöhnlichen
   Betriebskosten … wie laufende Steuerberatung, regelmäßige Rechtsberatung
   oder **Werbung**" gehören (Art.-18-AGVO-Umsetzung). Die
   Positiv-/Negativliste (Stand 05.06.2026) nennt zusätzlich „gängige
   Online-Marketing-Maßnahmen" und Websites „zur reinen Unternehmens- oder
   Produktdarstellung", führt aber digitale Vertriebskanäle, CRM, CMS und
   virtuelle Rundgänge als förderfähig. **Trennlinie wörtlich in der
   Quelle: „Verknüpfung mit den betrieblichen Abläufen".** Im Repo war
   nichts davon dokumentiert (Suchbeleg im Trägerdokument 9). Der
   Auftrag nannte die Antragsberechtigung als WTSH-Kernfrage; die
   Abgrenzung ist die größere.
2. **Die IFB-Selbsterklärung ist keine niedrige Hürde.** Formular
   `WDIG029F0126 LCD` verlangt drei Referenzprojekte aus drei Jahren „mit
   direktem Bezug" und wettbewerbsneutrale Beratung mit
   Provisionsoffenlegung — **alle vier [§]-Punkte sind subventionserhebliche
   Tatsachen nach § 264 StGB**. B9.4 führt das Programm als „niedrigste
   Hürde aller geprüften Programme".
3. **Eine B9.4-Warnung trägt ihre Quelle nicht — aber in der Sache hat sie
   recht.** Die Warnung, die WTSH-Programmseite verlinke die veraltete
   Fassung 2023, ist am Link **nicht belegt** (er zeigt live und im
   R05-A-Rohbeleg auf Amtsbl. 2026/190). Der Prüfer fand die Fehlwirkung an
   anderer Stelle derselben Seite: Die dort wiedergegebene **Ausschlussliste
   ist auf Altfassungsstand** und lässt genau die Posten weg, die unsere
   Frage 1 tragen. Die Richtung dreht sich um: nicht „hält sich fälschlich
   für ausgeschlossen", sondern „hält sich fälschlich für berechtigt".

### Geltungsstand — an der ausgebenden Stelle geprüft (10.08.2026)

Redirect-Gegenprobe je Domain **vorab** (Kontrollpfad, beide 404 mit
abweichender Byte-Länge) → keine Artefakte. HDC-Richtlinie live
byte-identisch zum R05-A-Stand (SHA-256 `8e11dcf0…`); SH-DKU 2026/190 am
Verkündungsportal ausgeliefert. **Nicht geprüft und so markiert:** spätere
Änderungsvorschriften zu 2026/190, Geltungsstand der BAFA-Richtlinie,
De-minimis-VO, andere WTSH-/Landesseiten.

### Prüferbefunde — Disposition ALLER 30, kategorienweise mit Nenner

Der Prüfer meldete **30 Befunde: 4 SCHWER · 16 MITTEL · 10 HINWEIS.**
Die vier schweren habe ich vor der Reparatur **selbst an der Rohquelle
nachgeprüft** — alle vier bestätigt, keiner war ein Fehlalarm des Prüfers.

| Schwere | Nenner | Repariert | Bewusst verworfen | Träger benannt |
|---|---|---|---|---|
| **SCHWER** | 4 | **4** | 0 | 0 |
| **MITTEL** | 16 | **16** | 0 | 0 |
| **HINWEIS** | 10 | **9** | 0 | **1** (P07D-30, Verfahren → Leitsession) |
| **Summe** | **30** | **29** | **0** | **1** |

**SCHWER (4/4 repariert):**
- **P07D-15** — Bagatellgrenze 2.500 € netto steht in Ziffer 4.4 und auf
  der Programmseite. **Mein offener Punkt F-2 war ein Fehlalarm** aus einer
  abgeschnittenen Leseausgabe (Ausschnitt endete bei Zeile 175, Ziffer 4.4
  steht bei 230) — und ich hatte behauptet, „Ziffer 4" gelesen zu haben.
  F-2 ersatzlos gestrichen, Fehler im Dokument sichtbar stehen gelassen.
- **P07D-22** — Ziffer 2.1 verlangt in **jeder** geförderten Beratung einen
  IT-/Informationssicherheitsabschnitt **mit Risikoanalyse**, Ziffer 4.2
  einen schriftlichen Beratungsbericht. Fehlte vollständig. Neuer
  Abschnitt 4.1a, neuer offener Punkt **F-11**.
- **P07D-06** — WTSH-Programmseite: Kosten eines Dienstleisters, der „bei
  der Antragstellung aktiv mitgewirkt" hat, sind nicht zuwendungsfähig.
  Neuer Abschnitt 4.1b, neuer offener Punkt **F-12**.
- **P07D-05** — „Antrag vor Auftrag" war absolut gesetzt und sollte laut
  F-4 in Angebot und Auftragsbestätigung. SH Ziffer 7.2 kennt die
  Zustimmung zum vorzeitigen Maßnahmebeginn. Jetzt **je Programm getrennt**
  formuliert.

**MITTEL (16/16 repariert):** P07D-01 (IFB-Frage 2 gekürzt) · P07D-02
(IFB-Frage 3 zurückgestellt an F-5) · P07D-04 (WTSH-Frage 4 alt → in eine
Feststellung überführt) · P07D-07 (neue IFB-Frage 3 zur
Mittelverfügbarkeit) · P07D-08 (Hash belegt Unverändertheit, nicht
Geltung) · P07D-09 (Positivkontrolle auf Ergebnis-Ebene umgebaut) ·
P07D-10 (4 von 4 [§]-Pflichten, Kürzung rückgängig) · P07D-11 („exakt" →
4 von 5 Rubriken; Tabelle als Auszug mit Kriterium) · P07D-12
(Positionierungspapier Säule 5 führt § 264 und die WTSH-Leitplanke
bereits → F-5 startet nicht bei null, neuer Vorwärtsverweis **F-13**) ·
P07D-13 (zwei R05-A-Rohbelege sind die 404-Seite → Nebenbefund) ·
P07D-16 (Grep-Protokoll auf Treffer **je Muster**, 2 statt 1) · P07D-19
(Suchraum-Grenze der Geltungsaussage) · P07D-20 (Altfassung ist
konsolidierte Lesefassung i. d. F. 14.02.2024) · P07D-21 (Programmseite
führt Altstand → Gegenrichtung in 2.1) · P07D-23 (Negativlisten-Überschrift
korrekt zitiert, Indizien jetzt beidseitig) · P07D-25 („für dasselbe
Vorhaben" als Auslegung markiert, Förderdarlehen-Satz ergänzt).

**HINWEIS (9/10 repariert, 1 mit Träger):** P07D-03 · P07D-14 · P07D-17 ·
P07D-18 · P07D-24 · P07D-26 · P07D-27 · P07D-28 · P07D-29 (beide Teile)
repariert. **P07D-30 nicht repariert, Träger benannt:** Der Prüfgegenstand
hat sich **während** der Prüfung geändert (478 → 548 Zeilen, Commits
`a14cb4a`, `b34bea0`) — das ist mein Verfahrensfehler, kein Dokumentfehler.
→ **Träger: Leitsession**, siehe Block 4.

---

## Block 2 — Offen geblieben

**Der Zuruf der Leitsession hat einen Entwurf gekippt — Meldung wie
verlangt:**

Der WTSH-Entwurf enthielt den Satz „Es gibt derzeit keinen konkreten Fall
und keinen erteilten Auftrag". Nach dem Verflechtungsbefund ist er
**gegenüber genau dieser Behörde unrichtig**: Von uns beschaffte
Anbieter-Angebote dienen als Anlage zu laufenden WTSH-Förderanträgen. Eine
unrichtige Entlastungsaussage gegenüber der Bewilligungsstelle, deren
Unrichtigkeit im dortigen Aktenbestand sichtbar wäre. **Satz entfernt.**
Derselbe Satz stand im IFB-Entwurf — dort **ebenfalls ersatzlos
gestrichen**, weil diese Session nicht belegen kann, dass bei der IFB kein
Vorgang existiert; ein wahrscheinlich zutreffender Entlastungssatz ohne
Quelle bleibt ein Entlastungssatz ohne Quelle.

Zusätzlich **Frage 5 der WTSH-Anfrage zurückgestellt** (Mitwirkung an der
Antragstellung): Sie war als Vorsorgefrage gedacht, betrifft nach dem
Befund aber möglicherweise bereits eingetretene Vorgänge. Eine Frage nach
einer Regel, gegen die wir eventuell schon verstoßen haben, an die Stelle
zu richten, die darüber entscheidet, dreht die Beweislast um.

**Offene Punkte (14 geführt, F-2 gestrichen):**

| ID | Punkt | Träger |
|---|---|---|
| **F-15** | ⚠️ **Stand der laufenden WTSH-Förderanträge** — gestellt, beschieden, offen? Im Marketing-Repo nicht geführt. **Versand-Vorbedingung der WTSH-Anfrage** | User/Zentrale |
| **F-14** | ⚠️ Bewertung der Verflechtung gegen SH Ziffer 5.2.1 („Beratung durch Angehörige", verbundene Unternehmen) und die Negativliste | **Zentrale/StB** |
| **F-7** | Firmierung für den Versand (GbR in Gründung, Gewerbeanmeldung ~14.08., Rebrand-Name offen) — **Versand-Vorbedingung beider Anfragen** | User/Zentrale |
| F-1 | Referenzlage gegen die drei IFB-Kriterien inventarisieren, vor Unterzeichnung der Selbsterklärung | MKT-HANDEL |
| F-3 | Nach StB-Rückmeldung zu Frage 11 über eine BAFA-Anfrage entscheiden | Zentrale → MKT-HANDEL |
| F-4 | „Antrag vor Auftrag" **je Programm getrennt** in Angebot/Auftragsbestätigung | MKT-HANDEL |
| F-5 | Haltung zu Wettbewerbsneutralität/Provisionsoffenlegung — Ausgangspunkt ist die vorhandene Leitplanke in Säule 5 | MKT-HANDEL + Zentrale |
| F-6 | B9.4-Korrekturen einarbeiten | R07-A / Leitsession |
| F-8 | Rückläufe einarbeiten | MKT-HANDEL |
| F-9 | Qualitätssicherungsinstrument (BAFA Ziffer 4.2.1) | MKT-HANDEL + Zentrale |
| F-10 | Geltungsstand der BAFA-Richtlinie an der ausgebenden Stelle | MKT-HANDEL |
| F-11 | IT-Sicherheitsabschnitt selbst leisten oder zukaufen | MKT-HANDEL |
| F-12 | Förder-Begleitung unterhalb der Mitwirkungsschwelle zuschneiden | MKT-HANDEL |
| F-13 | Vorwärtsverweis in `fund/positionierungspapier.md` Säule 5 | Leitsession |

**Nicht erhoben (bewusst, außerhalb des Auftrags):** De-minimis-Grenzen auf
Kundenseite · andere Bundesländer · Geltungsstand BAFA · spätere
Änderungsvorschriften zu 2026/190.

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

**An R07-A / Leitsession (`fund/wettbewerbsbild.md` § B9.4 — nur lesend
angefasst, wie beauftragt):**

1. **B9.4-Warnung zum WTSH-Richtlinien-Link ist am Link nicht belegt**,
   in der Sache aber berechtigt (Programmseite führt die Ausschlussliste
   auf Altfassungsstand). Zuschreibung korrigieren, Warnung behalten,
   Richtung umdrehen.
2. **Der SH-DKU-Werbe-Ausschluss fehlt in B9.4.** Die Formulierung „weder
   benannt noch ausgeschlossen" gilt für den Hamburg Digital Check; für
   SH-DKU ist Werbung **benannt und ausgeschlossen**.
3. **„Niedrigste Hürde aller geprüften Programme"** ist für den Hamburg
   Digital Check erklärungsbedürftig (drei Referenzprojekte, § 264 StGB).
4. **SH-DKU verlangt *kleine* Unternehmen** (< 50 Beschäftigte, ≤ 10 Mio. €)
   — wirkt auf die MKT-FUND-Portfolio-Erweiterung „auf größere Häuser".
5. **Freie Berufe: in Hamburg antragsberechtigt, in SH nicht** — relevant
   bei Mischbetrieben.
6. **Zwei R05-A-Rohbelege sind wertlos:** `hh-programme.html` und
   `hh-bcw.html` sind byte-identisch die 404-Seite von `ifbhh.de`
   (SHA-256 `c558af99…`). Wer sie zitiert, zitiert eine Fehlerseite.
7. **`fund/positionierungspapier.md` Säule 5 braucht einen
   Vorwärtsverweis** (F-13): Sie erklärt das Förderwissen für
   „SH-spezifisch, bei Kunden außerhalb SH je Land neu zu erheben" — für
   Hamburg ist die Erhebung jetzt geliefert.

**An die Zentrale (nicht als Postkorb-Meldung abgesetzt, weil die
Leitsession den Sachverhalt bereits gemeldet hat — nicht doppeln, aber
auch nicht dagegen arbeiten):**

8. **BAFA Ziffer 4.2.1: „Die Beraterinnen und Berater dürfen nicht schon
   als Antragstellender im Förderprogramm aufgetreten sein."** Eine eigene
   BAFA-geförderte Beratung schlösse uns dauerhaft als BAFA-Berater aus.
   Weichenstellung, die vor einer eigenen Inanspruchnahme bekannt sein muss.

---

## Block 4 — Stolpersteine und Learnings

### Fallen (eigene, teuer belegt)

1. **⭐ Eine abgeschnittene Werkzeugausgabe erzeugt einen Negativbefund,
   der wie ein Fund aussieht — und die Behauptung, den Abschnitt gelesen
   zu haben, macht ihn unauffindbar.** Ich las `sed -n '135,175p'`, notierte
   „Ziffer 4 gelesen" und legte für die vermisste 2.500-€-Grenze einen
   offenen Punkt an. Die Grenze stand bei Zeile 230. **Zwei Fehler in
   einem:** das Negativ aus dem abgeschnittenen Fenster, und der zu weite
   Leseumfang im Protokoll, der jeden Prüfer beruhigt hätte. Der Prüfer fand
   es nur, weil er die Rohquelle selbst öffnete. Merksatz: **Wer einen
   Leseumfang protokolliert, protokolliert die Zeilenspanne mit.**
   (Verwandt: derselbe Ausschnitt verschluckte den IT-Sicherheits-Satz aus
   Ziffer 2.1, der mitten entzwei brach — P07D-22. **Ein Fehler, zwei
   schwere Befunde.**)
2. **Eine behauptete Nachmessung ist eine Entwarnung.** Ich schrieb, die
   B9.4-Wortzählung sei „von dieser Session nachvollzogen" — sie war es
   nicht. Selbst gefangen, aber erst beim Gegenlesen des eigenen Textes.
   Der Satz hätte jeden Prüfer davon abgehalten, selbst zu zählen.
3. **⭐ Ein wörtliches Zitat, das am Verdichtungsbericht hängt, ist ein
   Pseudo-Zitat (L-01).** Die BAFA-Ausnahmeklausel stand als Zitat im
   Dokument, belegt war sie nur über B9.4. Selbst gefangen, Rohquelle
   nachgezogen — und dabei drei weitere Voraussetzungen gefunden, die im
   Repo fehlten (Qualitätssicherungsinstrument, Zuverlässigkeit,
   Antragsteller-Sperre). **Der Gang an die Rohquelle zahlt sich doppelt:
   Er belegt das Zitat und findet, was daneben steht.**
4. **Den Prüfgegenstand während der Prüfung ändern (P07D-30).** Ich
   committete zwei Verbesserungen, während der Prüfer las. Er hat es
   gemerkt und selbst gemeldet. **Regel für künftige Prüfaufträge: einen
   eingefrorenen Commit-Hash in den Prüfauftrag schreiben** — der
   Doppel-Messstand-Vertrag gilt auch gegenüber dem eigenen Prüfer.
5. **Ein Entlastungssatz wird nicht durch einen schwächeren ersetzt.** Nach
   dem Zuruf ersetzte ich „keinen konkreten Fall" zunächst durch „ein
   Antrag liegt bei Ihnen derzeit nicht vor" — dieselbe unbelegte
   Behauptung in kleiner. Erst der zweite Durchgang strich sie ganz.
   **Beim Reparieren einer Entwarnung ist der Reflex, sie abzuschwächen;
   richtig ist meist, sie zu streichen.**

### Bewährte Muster

6. **⭐ Die Adressaten-Prüfung ist im Förderrecht ein Sicherheits-, kein
   Stilmittel.** Sie hat hier drei Fragen aus dem Versand genommen, die
   alle formal zulässig waren: die Referenz-Herkunftsfrage (hätte die
   eigene Lage aktenkundig offenbart), die Neutralitätsfrage (hätte eine
   schriftliche Ablehnung eingeladen, bevor wir einen Gestaltungsvorschlag
   haben) und die Mitwirkungsfrage (hätte nach einer Regel gefragt, gegen
   die wir möglicherweise schon verstoßen haben). **Keine davon hätte ein
   Stil-Review gefunden.**
7. **Positivkontrolle je MUSTER statt je Lauf — und die Teilwort-Probe.**
   Der Sammellauf über vier Muster meldete „1 Treffer"; es waren 2, und
   drei Muster liefen tot mit. In Abschnitt 3.2 habe ich es richtig gemacht
   (Kontrolle je Muster plus `markt`-Teilwortprobe, die die
   Nulltreffer-Mechanik spiegelt) — **im selben Dokument, wenige Absätze
   entfernt.** Ein richtig angewandtes Muster an einer Stelle beweist
   nichts über die andere.
8. **Die Ergebnis-Positivkontrolle ist eine andere Prüfung als die
   Quellen-Positivkontrolle.** Meine Kontrolle sagte „es fehlt keine
   Seite" — und übersah, dass 3 von 4 [§]-Pflichten im Dokument standen.
   **Die Quelle vollständig zu lesen und sie vollständig zu übernehmen
   sind zwei Behauptungen mit zwei Belegen.**
9. **Vorfassungs-Fehler sichtbar stehen lassen.** Alle korrigierten Fehler
   stehen als markierte Kästen im Dokument. Das kostet Länge und ist der
   einzige Weg, auf dem ein späterer Leser erkennt, welcher Prüfweg
   gegriffen hat — und welche Sätze ohne ihn heute falsch dort stünden.
10. **Der billigste Kanal zuerst, mit Gegenprobe an den Anfang.** Die
    gesamte Live-Prüfung lief über `curl`, kein Browser-Kanal nötig. Die
    Redirect-Gegenprobe **vor** den Abrufen kostete Sekunden; der
    Hash-Vergleich gegen die R05-A-Rohbelege beantwortete „hat sich etwas
    geändert?" in einem Befehl statt in einem Lesedurchgang.
11. **Ein Prüfer, der die Rohquelle selbst öffnet, findet anderes als ein
    Prüfer, der den Text prüft.** 4 von 4 schweren Befunden stammen aus dem
    Gegenlesen an der Quelle, nicht aus der Textlogik. Sein eigener
    Schlusssatz trifft es: die Fehler waren „gemeinsame Fehler, die nur der
    Gang an die Rohquelle findet". **Der Kategorienkatalog hat ihn nicht
    dorthin geführt — die Rohbeleg-Pfade im Auftrag haben es.**
