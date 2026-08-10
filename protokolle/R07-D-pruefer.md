# R07-D — Unabhängiges Prüfprotokoll (Förderarchitektur + zwei Anfrage-Entwürfe)

> **Datum:** 10.08.2026 · **Prüfer:** unabhängige Session, kein Anteil an der
> geprüften Arbeit · **Schreibrecht:** ausschließlich diese Datei. Es wurde
> kein git-Kommando abgesetzt, keine Datei geändert, kein Postfach angefasst.
>
> **Messstände (Doppel-Messstand-Vertrag):**
> - Beginn der Prüfung: `0ea39bb` (Arbeitsbaum), Erstlesestand der drei
>   Prüfdateien = Commit `131b9b3`.
> - Ende der Prüfung: HEAD `b34bea0`. **Der Prüfgegenstand hat sich während
>   der Prüfung verändert** (`handel/foerderarchitektur-beraterrolle.md`
>   478 → 548 Zeilen, zwei Commits `a14cb4a`, `b34bea0`). Alle Befunde unten
>   sind gegen `b34bea0` nachgezogen; siehe **P07D-30**.
> - `fund/wettbewerbsbild.md` war während der gesamten Prüfung uncommitted
>   verändert (` M`, Arbeit von R07-A). Zeilenbezüge auf diese Datei sind
>   deshalb doppelt geführt: @`0ea39bb` und Arbeitsbaum.

## Geprüfte Dateien und Leseweg

| Datei | Leseweg |
|---|---|
| `handel/foerderarchitektur-beraterrolle.md` | vollständig gelesen (478 Z. @`131b9b3`), danach Differenz `131b9b3…b34bea0` vollständig gelesen |
| `handel/entwurf-anfrage-ifb-hamburg.md` | vollständig gelesen (163 Z.), unverändert über die Prüfung |
| `handel/entwurf-anfrage-wtsh.md` | vollständig gelesen (171 Z.), unverändert über die Prüfung |

**Gegengelesene Rohquellen (alle selbst im Rohtext geöffnet, Leseweg BYTE):**

| Quelle | Umfang |
|---|---|
| `sensibel\…\a5\foerder\hh-digitalcheck-rl.txt` | 218 Z., vollständig |
| `sensibel\…\a5\foerder\sh-ab190.txt` | 646 Z., vollständig |
| `sensibel\…\a5\foerder\sh-dku-rl.txt` (Altfassung) | 494 Z., Kopf + Ziffern 2.2, 3, 5.2 gezielt |
| `sensibel\…\a5\bafa\richtlinie.txt` | Kopf, Ziffern 4.2, 5.1, 5.2, 7.2, 8 |
| Scratchpad `r07d\dku_posneg.txt` | 3 Seiten, vollständig |
| Scratchpad `r07d\hdc_selbsterkl.txt` | 2 Seiten, vollständig |
| Scratchpad `r07d\dku_live.txt` / `dku_live.html` | Programmteil Z. 760–925 vollständig + Link-Extraktion |
| `sensibel\…\a5\foerder\sh-dku.html` (R05-A) | Link-Extraktion + Downloadbox-Kontext |
| `sensibel\…\a5\foerder\hh-digitalcheck.txt/.html` | Link-Extraktion + Kontaktblock |
| Scratchpad `r07d\vp.html` (Verkündungsportal) | Kopfzeilen entmarkupt |
| Scratchpad `r07d\ctrl_*.html`, `start_*.html`, `*.pdf` | Größen + SHA-256 selbst berechnet |
| `fund/wettbewerbsbild.md` § B9.4 | vollständig, @`0ea39bb` **und** Arbeitsbaum |
| `fund/positionierungspapier.md` Säule 5 | gezielt |

**Eigene Werkzeugfalle, die ich beinahe zu einem Falschbefund gemacht hätte:**
Der Grep auf „einschließlich Umsatzsteuer" in der BAFA-Rohquelle lieferte 0 —
das Zitat in Abschnitt 5.1 sah damit wie ein Pseudo-Zitat aus. Ursache war
die **Zeilentrennung** („einschließlich" / „Umsatzsteuer") im entmarkupten
Text. Nach Auflösung ist das Zitat **wörtlich korrekt**. Der Fall ist der
Beleg dafür, dass ein Phrasen-Grep über entmarkupten Text kein Negativ trägt.

---

## (a) Adressaten-Prüfung

**Nenner: 8 von 8 Fragen einzeln geprüft (4 IFB · 4 WTSH), dazu die beiden
Rollen-Absätze und die beiden internen Prüfvermerke.** Ergebnis: **4 Fragen
ohne Befund** (IFB 1, IFB 4, WTSH 1, WTSH 2), **4 mit Befund** (IFB 2, IFB 3,
WTSH 3, WTSH 4). Die Grundanlage ist richtig: Keine der acht Fragen fragt die
Förderstelle nach unserer Vertrags-, Umsatz- oder Qualifikationslage, und
beide Mails setzen den Rollenstand korrekt als **Feststellung mit
Widerspruchsmöglichkeit** („Antragsteller wäre in allen Fällen das beratene
Unternehmen, nicht wir. … Sollten Sie diese Rollenverteilung anders sehen,
sagen Sie uns das bitte."). Die Beweislast wird an keiner Stelle offen
umgedreht. Die vier Befunde betreffen die **Signalwirkung** und die
**Reihenfolge**, nicht die Form.

### P07D-01 · MITTEL · IFB-Mail Frage 2, zweiter Teil offenbart die eigene Lage
> „Und werden Projekte anerkannt, die die handelnden Personen vor Gründung
> des heutigen Beratungsunternehmens durchgeführt haben?"

Formal eine Auslegungsfrage über die IFB — inhaltlich teilt sie der Behörde
mit, dass das Beratungsunternehmen neu ist und eigene Referenzprojekte
möglicherweise nicht hat. Genau diese Tatsache ist nach der Selbsterklärung
**subventionserheblich nach § 264 StGB**. Der Prüfvermerk der Session sagt
ausdrücklich, es werde „bewusst **nicht** gefragt: ob wir die
Referenzanforderung erfüllen" — der Satz fragt das nicht, aber er beantwortet
es implizit und aktenkundig, bevor F-1 (Referenz-Inventur) gelaufen ist.

**Reparatur:** Frage 2 auf den ersten Teil kürzen („Worauf bezieht sich der
direkte Bezug: Branche, fachlicher Gegenstand oder beides?"). Die
Personen-/Gründungsfrage nach F-1 stellen — dann kennt man den eigenen
Bestand und kann sie als Feststellung mit Widerspruchsmöglichkeit setzen.

### P07D-02 · MITTEL · IFB-Mail Frage 3 holt eine bindende Negativauskunft, bevor wir eine Haltung haben
> „…, oder ist die geförderte Beratung in solchen Fällen von vornherein
> ausgeschlossen?"

Die Frage lädt die IFB ein, den Ausschluss schriftlich zu erklären — zu einem
Zeitpunkt, an dem das Trägerdokument selbst festhält, dass wir **noch keine
ausformulierte Haltung** zu Wettbewerbsneutralität und Provisionsoffenlegung
haben (**F-5**, offen). Eine schriftliche „von vornherein ausgeschlossen"-
Antwort ist danach schwer wieder aufzumachen; ein späterer Gestaltungs-
vorschlag (getrennte Beauftragung, dokumentierte Alternativenprüfung,
Offenlegung) müsste gegen die eigene Aktenlage anlaufen.

**Reparatur:** Reihenfolge umdrehen — F-5 zuerst, dann die Frage als
Gestaltungsvorschlag stellen: „Wir sehen folgende Absicherungen vor (…).
Genügen diese aus Ihrer Sicht?" Das holt dieselbe Information, ohne die
Ablehnung als bequemste Antwortmöglichkeit anzubieten.

### P07D-03 · HINWEIS · Der Prüfvermerk „Adressaten-Prüfung ✔" ist überschießend
„Alle vier Fragen betreffen die **Auslegung durch die IFB**, keine unserer
eigenen Tatsachen." — Das trifft für Frage 1 und 4 zu, für Frage 2 und 3 nur
formal (P07D-01/-02). Ein ✔-Vermerk mit dieser Reichweite ist eine
Entwarnung; sie gehört auf das eingeschränkt, was geprüft wurde.

**Reparatur:** Vermerk umformulieren: „Keine Frage verlangt von der IFB eine
Aussage über unsere Rechts- oder Umsatzlage. ⚠️ Frage 2 (zweiter Teil) und
Frage 3 offenbaren gleichwohl unsere eigene Lage — bewusst in Kauf genommen,
weil …" — oder die Fragen ändern.

### P07D-04 · MITTEL · WTSH-Mail Frage 4 fragt nach Anforderungen, die in der gelesenen Fassung stehen
> „…, und gibt es stattdessen andere Anforderungen an Qualifikation,
> Registrierung oder Nachweise, die ein externes Beratungsunternehmen erfüllen
> muss?"

Amtsbl. 2026/190 enthält solche Anforderungen — und zwar in genau den
Ziffern, die das Trägerdokument als gelesen ausweist:
- **Ziffer 5.2.1**, vierter Block: vier ausdrückliche Berater-Ausschlüsse
  (Angehörige · Inhaber/Gesellschafter/Mitarbeiter des beratenen oder eines
  verbundenen Unternehmens · Berater in Insolvenz/Vermögensauskunft ·
  gemeinnützige Unternehmen ohne wirtschaftlich organisierten Teilbetrieb).
- **Ziffer 4.1**, Auswahlkriterium Modul 1: „Plausibilität des Angebots **und
  der Anforderungen an das Beratungsunternehmen**".
- **Ziffer 7.1**: einzureichen sind „Angebote beziehungsweise Nachweise über
  eine Markt-/Preisrecherche und Anforderungen an das Beratungsunternehmen".

Keine dieser Regelungen steht im Trägerdokument. Die Frage ist damit nicht
falsch, aber sie liest sich bei der Bewilligungsstelle wie eine Frage nach
etwas, das im Text steht — und der zweite Berater-Ausschluss („verbundenes
Unternehmen") ist zugleich der einzige Punkt in 2026/190, der unser
Beratung-plus-Umsetzung-Modell direkt berührt.

**Reparatur:** Trägerdokument um eine Zeile „Berater-Voraussetzungen (Ziffer
5.2.1/4.1/7.1)" ergänzen; Frage 4 präzisieren: „Neben den Ausschlüssen in
Ziffer 5.2.1 finden wir keine Qualifikationsanforderung mehr — trifft das zu,
und wie prüfen Sie das Auswahlkriterium ‚Anforderungen an das
Beratungsunternehmen' aus Ziffer 4.1 in der Praxis?"

---

## (b) Zeitpunkt-Prüfung

**Nenner: 8 von 8 Fragen auf Beauftragungs-/Bestellungsprämisse geprüft,
beide Mails zusätzlich als Ganzes.** Ergebnis: **keine Frage ist
förderschädlich formuliert** — beide Mails erklären ausdrücklich „Es gibt
derzeit keinen konkreten Fall und keinen erteilten Auftrag", und keine Frage
setzt einen bereits geschlossenen Leistungsvertrag voraus. Das ist die
richtige Anlage und die Regel „nur nicht begonnene Vorhaben" ist damit
gewahrt. **Drei Befunde**, alle in der Gegenrichtung: was **fehlt**.

### P07D-05 · SCHWER · „Antrag vor Auftrag" ist absolut gesetzt — SH kennt den vorzeitigen Maßnahmebeginn
Trägerdokument Abschnitt 7 Nr. 2:
> „Beide Landesprogramme fördern nur nicht begonnene Vorhaben … **Wer
> unterschreibt, bevor der Bescheid da ist, hat die Förderung des Kunden
> vernichtet.**"

Amtsbl. 2026/190 **Ziffer 7.2** sagt etwas anderes:
> „Mit dem Vorhaben darf vor Erteilung eines Zuwendungsbescheides
> **beziehungsweise einer Zustimmung zum vorzeitigen Maßnahmebeginn** nicht
> begonnen werden. … Eine Zustimmung zum vorzeitigen Maßnahmebeginn begründet
> keinen Rechtsanspruch auf eine spätere Förderung."

Der Satz des Trägerdokuments ist damit für Schleswig-Holstein **falsch in der
Absolutheit** und lässt zugleich den Vorbehalt weg, der ihn wieder scharf
macht (kein Rechtsanspruch). Das ist kein Detail: Der Satz ist ausdrücklich
als Baustein für **Angebotsarchitektur und Auftragsbestätigung** vorgesehen
(**F-4**) — eine unnötig absolute Klausel kostet Aufträge, eine
missverstandene Ausnahme kostet die Förderung des Kunden. Für den Hamburg
Digital Check ist der Satz nach Ziffer 6 zutreffend; die Richtlinie kennt dort
keine Zustimmung zum vorzeitigen Maßnahmebeginn.

**Reparatur:** (1) Satz programmspezifisch trennen. (2) Ziffer 7.2 in die
SH-Konditionentabelle aufnehmen. (3) Es ist die stärkste heute wirksame Frage
an die WTSH — als **neue Frage** in den Entwurf: Verfahren, Zeitpunkt und
Wirkung der Zustimmung zum vorzeitigen Maßnahmebeginn im Modul 1.

### P07D-06 · SCHWER · Die WTSH-Programmseite entwertet Beraterkosten bei Mitwirkung an der Antragstellung
Auf `dku_live.txt` (von der Session selbst abgerufen, Abschnitt „Hinweise zur
Antragstellung") steht wörtlich:
> „**Kosten, die von einem Dienstleistungsunternehmen in Rechnung gestellt
> werden, welches bei der Antragstellung aktiv mitgewirkt hat, können keine
> zuwendungsfähigen Kosten in einem Fördervorhaben sein und werden nicht
> anerkannt.**"

und ergänzend:
> „Im Antrag sind zwingend Ihre Unternehmensdaten anzugeben; die Angabe von
> Daten anderer Unternehmen – insbesondere von Beratungs- oder
> Dienstleistungsunternehmen in den Antragsfeldern – ist unzulässig."

Das trifft die Frage, die das Trägerdokument in seiner Einleitung stellt
(„was muss dafür an UNS wahr sein?"), unmittelbar: Eine „Förder-Begleitung",
die dem Kunden beim Antrag hilft, macht die eigene Rechnung nicht
zuwendungsfähig. Im Trägerdokument, in beiden Entwürfen und in F-4 kommt
diese Regel **nicht vor**, obwohl die Quelle gelesen wurde.

**Reparatur:** Als eigenen Punkt in Abschnitt 4 und in die Grundregel
(Abschnitt 7) aufnehmen, gemeinsam mit **F-4**; Wortlaut aufnehmen, weil
„aktiv mitgewirkt" auslegungsbedürftig ist — und genau dafür ist der
WTSH-Kanal offen (Kandidat für eine fünfte Frage: Wo endet zulässige
Information des Kunden, wo beginnt „aktive Mitwirkung"?).

### P07D-07 · MITTEL · Der Hamburger Antragsschluss kann früher liegen als 16.11.2026 — Frage fehlt
Ziffer 8 der HDC-Richtlinie endet **nicht** mit dem Fristsatz:
> „… Anträge müssen vollständig bis 16.11.2026 bei der IFB Hamburg gestellt
> sein. **Sofern vor Ablauf dieses Termins alle Fördermittel vergeben wurden,
> tritt die Richtlinie mit dem Tag der Erstellung des letzten
> Zuwendungsbescheids außer Kraft.**"

Ziffer 1.2 doppelt: „Sofern es zu einer Kontingentausschöpfung vor Ablauf
dieser Frist kommt, kann der Antrag keine Berücksichtigung mehr finden."
Ziffer 6: „Dabei ist der Zeitpunkt des Eingangs der vollständigen
Antragsunterlagen maßgebend."

Trägerdokument und Entwurf führen nur den Termin (Tabelle „Antragsfrist",
Kopfblock „Zeitkritisch: Antragsschluss 16.11.2026"). Damit ist der
Vorbehalt beim Verdichten verlorengegangen — in der Richtung, die die eigene
Planung entlastet. **Was die Antwort HEUTE ändert:** Ob das Kontingent noch
offen ist, entscheidet, ob sich der Aufbau des HH-Angebots überhaupt noch
lohnt. Genau das fragt die Mail nicht.

**Reparatur:** Scope-Vermerk in der Tabelle („⚠️ endet früher bei
Mittelerschöpfung, Ziffer 8 Satz 3 / Ziffer 1.2"); im Entwurf eine kurze
Frage nach dem aktuellen Mittelstand ergänzen — sie ist unverfänglich, betrifft
ausschließlich die Gegenseite und ist die einzige Frage des Sets mit
sofortiger Planungswirkung.

---

## (c) Entwarnungen

**Nenner: 18 entwarnende bzw. bestätigende Aussagen identifiziert und einzeln
gegen ihre Quelle geprüft — 11 tragen, 7 mit Befund.**

Geprüfte Aussagen (Kurzform): 1. „Kein Wildcard-Redirect" · 2. HDC-Richtlinie
„Unverändert geltend" · 3. „byte-identisch … SHA-256 `8e11dcf0…`" ·
4. Programmseite „byte-identisch … `cca8a79f…`" · 5. WTSH-Seite „inhaltlich
unverändert … einziger Unterschied Cache-Zeitstempel" · 6. „2026/190 … ist die
geltende Fassung" · 7. „Die inhaltliche Kernaussage von B9.4 … bleibt
unberührt und richtig" · 8. „B9.4 ist damit bestätigt" (4.2) · 9. „Die
Wort-Zählung ist damit bestätigt" (3.2) · 10. „Damit ist die B9.4-Kernaussage
an der Rohquelle bestätigt" (5.1) · 11. „Es fehlt keine Seite." ·
12. „Dieser Ausschluss ist im gesamten Repo bisher nicht dokumentiert" ·
13. „Anforderungen, die im Repo bisher **nirgends** dokumentiert sind" ·
14. „Ein Partner-Bezug besteht nicht" (2×) · 15. „Kanal-Prüfung ✔" (2×) ·
16. „Adressaten-Prüfung ✔" (2×) · 17. „Zeitpunkt-Prüfung ✔" (2×) ·
18. „Informationshygiene ✔" (2×).

**Selbst nachgemessen und bestätigt (5 von 5 messbaren Entwarnungen):**

| Aussage | Meine Gegenprobe | Ergebnis |
|---|---|---|
| HDC-Richtlinien-PDF byte-identisch, `8e11dcf0…` | SHA-256 über `hdc_rl_live.pdf` und `hh-digitalcheck-rl.pdf` | identisch, Präfix stimmt ✔ |
| HDC-Programmseite `cca8a79f…` | dito über `hdc_live.html` / `hh-digitalcheck.html` | identisch ✔ |
| WTSH-Seite: einziger Unterschied Cache-Zeitstempel | `diff` über HTML **und** entmarkupten Text | genau eine Zeile, `1786298695` → `1786360653` ✔, beide Werte korrekt zugeordnet |
| Redirect-Gegenprobe, 4 Byte-Zahlen | Dateigrößen `ctrl_*`/`start_*` | 5.748 · 118.858 · 64.252 · 84.286 ✔, **keine Vertauschung** (das ist genau die Falle „stimmende Summe ist kein Zuordnungsbeleg" — sie ist hier vermieden) |
| Zähltabelle 3.2 (9 Muster) | eigene Läufe `grep -oi … \| wc -l` | **9 von 9 Werten exakt** ✔ |

Diese Entwarnungen tragen ihre Quelle im Satz und halten der Nachmessung
stand. Das ist überdurchschnittlich sauber und soll so gesagt sein.

### P07D-08 · MITTEL · „Unverändert geltend" trägt weiter als der Beleg
Byte-Identität des verlinkten PDF belegt: **die Fassung ist unverändert** und
wird von der ausgebenden Stelle weiter geführt. Sie belegt **nicht**, dass die
Richtlinie noch anwendbar ist — nach Ziffer 8 endet sie vorzeitig mit dem
letzten Zuwendungsbescheid bei Mittelerschöpfung (P07D-07). „Unverändert
geltend" verbindet beides in einem Wort.

**Reparatur:** „Fassung unverändert (Hash-Vergleich); Geltung bis 31.12.2026,
⚠️ vorzeitiges Ende bei Mittelerschöpfung nicht geprüft."

### P07D-09 · MITTEL · Die Positivkontrolle in Abschnitt 9 prüft die Quelle, obwohl sie das Gegenteil ankündigt
Der Absatz sagt richtig: „prüft die Kontrolle die **Vollständigkeit des
Ergebnisses**, nicht die Erreichbarkeit der Quelle" — und beschreibt dann
ausschließlich Quellenmerkmale: Seitenzahl per `pdf-parse`, lückenlose
Seitenmarker, Schlussvermerk mitgelesen, „Es fehlt keine Seite."

Die Seitenzahlen habe ich bestätigt (3 bzw. 2 Seiten ✔). Die **Ergebnis**-
Vollständigkeit ist dagegen an zwei Stellen verletzt — P07D-10 und P07D-11.
Die Kontrolle hat also genau den Fehler nicht gefangen, gegen den sie
angetreten ist.

**Reparatur:** Kontrolle umbauen: vorab bekannte Elemente benennen (z. B.
„jeder mit [§] markierte Verpflichtungspunkt muss in der Extraktion
erscheinen"; „jede Rubrik der Positivliste muss auftauchen") und die
Extraktion dagegen zählen — generisch über das Strukturmerkmal, nicht gegen
eine vorher notierte Namensliste.

### P07D-10 · MITTEL · Selbsterklärung: 3 von 4 [§]-Verpflichtungen wiedergegeben, ein Zitat still gekürzt
Das Formular enthält **vier** mit `[§]` markierte Verpflichtungen des
Beratungsunternehmens. Abschnitt 3.3 führt drei und schließt mit „**Alle drei
Punkte** sind mit [§] gekennzeichnet". Nicht wiedergegeben:
> „• meine Arbeit auf die Bedürfnisse von KMU auszurichten [§]."

Zusätzlich ist Punkt 3 **ohne Auslassungszeichen gekürzt**:
- Trägerdokument: „einschlägige Qualitätsstandards und Normen (z.B. BSI
  IT-Grundschutz, ISO 27001) **anzuerkennen**".
- Original: „… anzuerkennen, **mich fortwährend daran zu orientieren und die
  Einhaltung sicherzustellen** [§]."

Die Kürzung fällt in die entlastende Richtung: aus einer Dauerpflicht mit
Sicherstellungspflicht wird ein einmaliges „anerkennen". Bei einer
strafbewehrten Erklärung ist das die falsche Richtung.

**Reparatur:** Vierten Punkt ergänzen, Nenner auf „alle vier" korrigieren,
Punkt 3 vollständig zitieren.

### P07D-11 · MITTEL · „spiegelt in ihren Überschriften **exakt** die Modul-1-Kategorien" — es sind 4 von 5
Ziffer 2.1 nennt **fünf** Kategorien: IT-Sicherheit/Cybersicherheit ·
Verbesserung digitaler Geschäftsmodelle · Digitalisierung von Prozessen ·
Digitalisierung von Produkten und Verfahren · **Verbesserung der digitalen
Souveränität**. Die Positivliste (Stand 05.06.2026) führt **vier** Rubriken —
„digitale Souveränität" fehlt.

Das ist doppelt relevant: Es widerlegt das Wort „exakt", **und** es ist ein
sachliches Argument für die eigene Frage 3 (eine Liste, die eine Kategorie der
neuen Richtlinie nicht kennt, ist möglicherweise nicht auf sie zugeschnitten)
— das Argument geht durch die Fehlbehauptung verloren.

Zweiter Teil desselben Befunds: Die Tabelle in 4.3 zeigt **6 Zeilen** aus
Positiv- und Negativliste **ohne Auswahlkriterium** und ohne
„Auszug"-Kennzeichnung (L-03). Nicht übernommen wurde u. a. der für
Beherbergung einschlägigste Positiveintrag:
> „Einführung digitaler 3D-Visualisierungen (z.B. Messestände, **virtueller
> Rundgang**, Panorama- oder 360°-Ansichten)"

sowie negativseitig „Kassensysteme inkl. Barcodescanner und Bondrucker" —
letzterer im direkten Widerspruch zum Auslegungs-**Beispiel** der IFB
(P07D-28) und damit ein starkes Programm-Kontrastargument.

**Reparatur:** „exakt" streichen und durch „vier der fünf Kategorien aus
Ziffer 2.1; ‚digitale Souveränität' fehlt" ersetzen; Tabelle als Auszug
kennzeichnen mit benanntem Auswahlkriterium; die beiden genannten Zeilen
aufnehmen.

### P07D-12 · MITTEL · „im Repo bisher **nirgends** dokumentiert" — ohne Suchbeleg und teilweise unzutreffend
Für die Selbsterklärungs-Anforderungen (3.3) ist **keine** Suche protokolliert
(das Negativ-Protokoll führt nur die `Werbung`-Suche). Meine Gegenprobe über
alle `*.md` außerhalb von `sensibel/`, `handel/`, `protokolle/` findet:
> `fund/positionierungspapier.md`, Säule 5 „Förder-Begleitung":
> „heyPensio erscheint in keinem Förderantrag, Verflechtungen werden
> offengelegt (**WTSH-Leitplanke, § 264 StGB**; Quelle Extraktion A/B6,
> B/F3.3); ein ‚Förderantrags-Service' als Angebot ist **GEPARKT**"

Damit sind § 264 StGB, die Offenlegungspflicht bei Verflechtungen **und** die
Parkung des Antrags-Services im Repo bereits geführt. Drei Folgen:
1. Die Neuheits-Behauptung in 3.3 ist zu weit.
2. **F-5** („Haltung zu Wettbewerbsneutralität/Provisionsoffenlegung
   ausformulieren") ist teilweise schon beantwortet — die vorhandene
   Leitplanke gehört als Ausgangspunkt zitiert, nicht neu erfunden.
3. Säule 5 ist ein **betroffenes Alt-Dokument**: Sie erklärt das
   Förder-Detailwissen ausdrücklich für „SH-spezifisch … bei Kunden außerhalb
   SH je Land neu zu erheben". Genau diese Erhebung hat R07-D für Hamburg
   geliefert — ein Vorwärtsverweis fehlt, und `positionierungspapier.md` steht
   in Abschnitt 10 („Zugehörige Dokumente") nicht.

Die geparkte Modul-Idee „Förderantrags-Service" verschärft P07D-06: Sie ist
bei SH-DKU nicht nur geparkt, sondern kostenschädlich.

**Reparatur:** Suche nachholen und protokollieren; Neuheits-Aussage auf den
tatsächlich neuen Teil (Referenzpflicht, Qualitätsstandards) beschränken;
Vorwärtsverweis in `fund/positionierungspapier.md` Säule 5 als Zielort in
F-6 aufnehmen.

### P07D-13 · MITTEL · Nebenbefund aus dem eigenen Messwerkzeug: zwei R05-A-Rohbelege sind die 404-Seite
Die Redirect-Gegenprobe hat den 404-Antwortkörper von `www.ifbhh.de`
archiviert (`ctrl_www.ifbhh.de.html`, 5.748 Byte). Derselbe Byte-Bestand liegt
im R05-A-Rohbelegordner unter zwei Namen, die dort als Belege geführt werden:

```
c558af99…  ctrl_www.ifbhh.de.html   (R07-D, Kontrollpfad)
c558af99…  hh-programme.html        (R05-A)
c558af99…  hh-bcw.html              (R05-A)
```

(`hh-sitemap.xml` hat dieselbe Größe.) Das heißt: **Zwei „Rohbelege" des
R05-A-Laufs sind in Wahrheit die 404-Seite** und tragen keine Aussage. Die
Messung, die das aufdeckt, lag dieser Session vor; die Nachbarfrage wurde
nicht gestellt.

**Reparatur:** Als Nebenbefund an R07-A/Leitsession weitergeben (Zielort
B9.4-Beleglage); bei künftigen Kontrollabrufen die Kontroll-Antwort einmal
gegen den vorhandenen Rohbelegbestand hashen — kostet einen Befehl.

### P07D-14 · HINWEIS · Belegstufe der 404-Aussage
„`www.ifbhh.de` antwortet **HTTP 404**" — archiviert sind die
**Antwortkörper**, nicht die Statuszeilen. Die Körper enthalten „404 - File
not found" bzw. „404 - Seite nicht gefunden - WTSH", der Befund ist also **am
Seiteninhalt** belegt. R06-A hat genau diese Einschränkung ausdrücklich
ausgewiesen (B10.1), R07-D nicht.

**Reparatur:** Halbsatz ergänzen: „404 am Antwortkörper belegt, Statuszeile
nicht archiviert."

---

## (d) Zahlen

**Nenner: 45 Zahlenaussagen ausgezählt und einzeln gegen die Quelle geprüft**
(Zählweg: HDC-Konditionen 8 · SH-Konditionen 11 · BAFA-Konditionen 9 ·
Mess-/Zählwerte 17 — Byte-Größen 4, Hash-Präfixe 2, Cache-Zeitstempel 2,
Seitenzahlen 2, Zähltabelle 9 ⇒ 19, davon 2 mit den Konditionen doppelt
gezählt und hier einmal geführt). **41 ohne Befund, 4 mit Befund.**

**Nachgerechnet:**
- 40 % × 20.000 € = **8.000 €** ✔ — als `EIGEN`/gerechnet gekennzeichnet, die
  Richtlinie nennt den Wert tatsächlich nicht ✔.
- 7.500 € ÷ 50 % = **15.000 €**; 15.000 ÷ 1.100 = **13,636…** ✔ — Zählweg im
  Satz genannt ✔.
- Steuerbasis überall geführt: HDC 1.100 € „(ohne Umsatzsteuer)" ✔ · SH
  Nettoausgaben nur bei Vorsteuerabzugsberechtigung (Ziffer 5.2) ✔ · BAFA
  netto **und** der gegenläufige Auszahlungssatz („einschließlich
  Umsatzsteuer") ausdrücklich getrennt geführt ✔ — das ist die Fußnoten-Falle
  richtig behandelt.
- Alle Zahlen stehen in Tabellen **mit Schlüsselspalte**, nicht in
  Prosareihenfolge ✔; die vier Byte-Werte der Redirect-Probe sind korrekt
  ihren Domains zugeordnet ✔.

### P07D-15 · SCHWER · Die 2.500-€-Bagatellgrenze steht wörtlich in der Quelle — F-2 ist ein Fehlalarm
Trägerdokument (unverändert auch bei `b34bea0`):
> „Diese Session hat die Bagatellgrenze im Amtsblatt 2026/190 **nicht
> wiedergefunden** … Die Suche war gezielt (**Ziffern 2.1, 4, 5.2.1, 5.3.1
> gelesen**) …"

Amtsbl. SH 2026/190, **Ziffer 4.4**, wörtlich:
> „Für Förderungen nach Ziffer 2.1 müssen die kalkulierten Beraterkosten
> mindestens **2.500 Euro (zuzüglich Mehrwertsteuer)** betragen, für
> Förderungen nach Ziffer 2.2 müssen zudem die … Kosten … mindestens
> 10.000 Euro (zuzüglich Mehrwertsteuer) betragen."

Der Wert steht in **Ziffer 4**, also im ausdrücklich als gelesen bezeichneten
Abschnitt. `grep -o '2.500' sh-ab190.txt | wc -l` = **1** — ein einziger
Suchlauf hätte ihn gefunden. Er steht **zusätzlich** auf der von derselben
Session abgerufenen WTSH-Programmseite:
> „Die kalkulierten Beraterkosten betragen mindestens 2.500 Euro und maximal
> 20.000 Euro."

Damit ist die B9.4-Angabe „Beraterkosten mind. 2.500 € netto" **an der
Primärquelle bestätigt**, einschließlich der Steuerbasis. Die „Korrektur zur
B9.4-Zeile" ist keine Korrektur, sondern eine unnötige Verunsicherung einer
richtigen Angabe; **F-2** bindet Arbeit von R07-A/Leitsession an eine
Nicht-Frage, und die Warnung „vor Verwendung in Kundendokumenten" blockiert
einen belastbaren Wert.

Formal ist der Vermerk vorbildlich als Nicht-Erhebung markiert („nicht
geprüft", nicht „falsch") — das ist die richtige Form für einen echten
Negativbefund. Hier war es aber keiner.

**Reparatur:** Abschnitt 4.1 („⚠️ Korrektur zur B9.4-Zeile") ersetzen durch
eine Konditionenzeile „Bagatellgrenze Modul 1: mind. 2.500 € netto (Ziffer
4.4), zugleich Höchstgrenze 20.000 € (Ziffer 5.3.1)"; **F-2 schließen** mit
Beleg; die Zeile im Negativ-Protokoll auf „gefunden, Ziffer 4.4" korrigieren
und den Anlass als Lehre führen: Eine als „gelesen" bezeichnete Ziffer ist
kein Suchraumbeleg.

Miterfasst und ebenfalls nicht geführt: **Ziffer 4.5** (Modul 1 soll binnen
**acht Monaten** nach Antragstellung beendet sein) und **Ziffer 4.6** (je
Modul nur **einmal** während der Richtlinienlaufzeit). Beide gehören in die
Angebotsarchitektur.

### P07D-16 · MITTEL · Grep-Protokoll: „1 Treffer" — es sind 2, und drei Muster liefen tot mit
Protokollzeile: „Grep-Tool über alle `*.md` im Marketing-Repo … Außerhalb von
`sensibel/`-Rohbelegen **1 Treffer**, sachfremd".

Meine Gegenprobe am **Messstand `0ea39bb`**, Muster
`Werbung|gewöhnliche[nr]? Betriebskosten|Art\. 18|Artikel 18`, ohne
`sensibel/`, `handel/`, `protokolle/`:
- `fund/wettbewerbsbild.md:2508` — „bezahlte Werbung" (DEHOGA-BW) ✔ vom
  Dokument genannt
- `beleg/vorlagen/referenzvereinbarung-pilotobjekte.md:427` — „Namensnennung
  und Werbung mit Ihrer Referenz" ✗ **nicht genannt**

Also **2 statt 1**. Die Schlussfolgerung („der SH-DKU-Werbe-Ausschluss war
nicht dokumentiert") bleibt richtig — beide Treffer sind sachfremd. Der Nenner
ist es nicht. Zweiter Teil: Der Lauf ist ein **Sammellauf über vier Muster**
mit einer Summenzahl. `Art. 18` / `Artikel 18` / `gewöhnliche Betriebskosten`
haben je 0 getroffen; das ist im Ergebnis unsichtbar. Genau das ist die
Konstellation „ein Sammellauf mit Treffern sieht aus wie ein funktionierender
Prüfweg". In Abschnitt 3.2 hat dieselbe Session es (nach `b34bea0`)
vorbildlich anders gemacht — die Kontrolle je Muster fehlt nur hier.

**Reparatur:** Zeile auf Treffer **je Muster** umstellen und die
Referenzvereinbarungs-Fundstelle nennen.

### P07D-17 · HINWEIS · „rund 13,6 Beratertage" ist eine Untergrenze, nicht eine Entsprechung
1.100 € ist der **maximal anerkennungsfähige** Tagessatz. Bei jedem
niedrigeren Satz braucht es **mehr** Tage, um 15.000 € auszuschöpfen. Die
Prämisse ist im Satz genannt („bei 1.100 € Tagessatz-Obergrenze"), die
Richtung nicht.

**Reparatur:** „… entspricht das **mindestens** rund 13,6 Beratertagen".

### P07D-18 · HINWEIS · Zeilenanker ohne Commit-Stand — er ist innerhalb der Runde bereits gewandert
`fund/wettbewerbsbild.md:2508` ist am Messstand `0ea39bb` **richtig** (selbst
verifiziert). Im Arbeitsbaum steht dieselbe Stelle bereits bei **2805**, weil
R07-A die Datei uncommitted verändert. Der Verweis trägt keinen `@<hash>`.

**Reparatur:** `fund/wettbewerbsbild.md` § B9.1 (DEHOGA-BW-Leistungskatalog)
statt der Zeilennummer, oder `@0ea39bb` anhängen.

---

## (e) Geltungsstand der zitierten Fassungen

**Nenner: 6 zitierte Quelldokumente einzeln auf (i) Fundstelle und (ii)
Geltung geprüft; zusätzlich 6 protokollierte Negativ-/Nichterhebungs-Zeilen.**
Ergebnis: **1 Quelle vorbildlich behandelt** (BAFA), **1 ohne Befund**
(Positiv-/Negativliste in der Fundstelle), **4 mit Befund**. Von den 6
Negativzeilen sind **4 sauber als Nicht-Erhebung mit Suchraum markiert**, 1
ist sachlich falsch (P07D-15), 1 unvollständig (P07D-16).

**Selbst verifiziert:**

| Fassung | Fundstelle | Geltung |
|---|---|---|
| HDC-Richtlinie, „Gültig ab 1. August 2025" | ✔ von der IFB-Programmseite verlinkt (`foerderrichtlinie-hamburg-digital-check-data.pdf`), byte-identisch | ⚠️ s. P07D-08 |
| Amtsbl. SH 2026/190 | ✔ Verkündungsportal-Kopf „Amtsblatt 2026/190 vom 5. Juni 2026" selbst gelesen; Ziffer 9 „Zugleich tritt die Richtlinie … vom 20. April 2023 … außer Kraft" wörtlich ✔ | ⚠️ s. P07D-19 |
| SH-Altfassung 20.04.2023 | ✔ go-digital-Satz wörtlich bestätigt (`sh-dku-rl.txt`, Ziffer 5.2.1); Gegenprobe: `go-digital` in 2026/190 = **0**, `lizenz` = 1 (Nutzungslizenz), Kontrolle `Beratung` = 20 ✔ | ⚠️ s. P07D-20 |
| BAFA-Richtlinie i. d. F. 12.12.2024 | ✔ Kopf und Ziffern 4.2.1/5.1/5.2/8 wörtlich bestätigt | ✔ **ausdrücklich als nicht geprüft markiert, mit F-10** — vorbildlich |
| Positiv-/Negativliste, Stand 05.06.2026 | ✔ Datum, 3 Seiten und alle 6 zitierten Zeilen wörtlich bestätigt | ⚠️ s. P07D-21 |
| Selbsterklärung Digitalisierungsberatung | ✔ 2 Seiten, Zitate wörtlich inkl. Original-Tippfehler | ⚠️ Formularversion nicht erfasst, s. P07D-28 |

### P07D-19 · MITTEL · „2026/190 ist die geltende Fassung" ruht auf der Norm selbst, nicht auf einer Änderungs-Gegenprobe
Belegt ist: 2026/190 ist am 05.06.2026 in Kraft getreten und hat die Fassung
2023 aufgehoben (Ziffer 9, selbst gelesen ✔), und das Dokument ist am
10.08.2026 an der ausgebenden Stelle abrufbar ✔. **Nicht** belegt ist, dass
zwischen dem 05.06. und dem 10.08.2026 keine Änderungs-Bekanntmachung
ergangen ist — und genau das ist der zweite Teil der Prüfung „Fundstelle und
Geltungsstand sind zwei Prüfungen". Die Altfassung zeigt, dass das der
Regelfall ist: Sie wurde binnen zehn Monaten **zweimal** geändert (30.11.2023,
14.02.2024). Ein Suchraum ist nicht genannt.

**Reparatur:** Entweder eine Suche im Verkündungsportal nach jüngeren
DKU-Bekanntmachungen (mit Positivkontrolle) und Protokollzeile — oder die
Aussage auf „Fassung 2026/190, Stand des Abrufs 10.08.2026; spätere
Änderungsbekanntmachungen nicht geprüft" einschränken.

### P07D-20 · MITTEL · Die Altfassung ist eine konsolidierte Lesefassung — Dokument und Mail führen sie als „Fassung vom 20.04.2023"
`sh-dku-rl.txt` trägt im Kopf:
> „Konsolidierte Lesefassung / Bekanntmachung … vom 20. April 2023 /
> **Geändert durch Verwaltungsvorschrift vom 30.11.2023** (Amtsbl. Schl.-H.
> 2023 Nr. 52, S. 3000) / **Geändert durch Verwaltungsvorschrift vom
> 14.02.2024** (Amtsbl. Schl.-H. 2024 Nr. 18, S. 641)"

Das Trägerdokument nennt sie „die 2023er konsolidierte Lesefassung" und
erklärt zugleich: „**Nicht belegt ist, über welchen Weg R05-A sie erreicht
hat.**" Die WTSH-Mail behauptet ihren Inhalt gegenüber der ausgebenden Stelle
als Feststellung:
> „Die bis zum 5. Juni 2026 geltende Fassung verlangte, dass beauftragte
> Beratungsunternehmen für eine go-digital-Beratung des Bundes lizenziert
> sind."

Der Inhalt ist richtig (selbst geprüft), die Belegkette aber schwächer als der
Satz: eine Lesefassung unbekannter Herkunft, deren maßgebliche Gestalt die
Fassung **i. d. F. vom 14.02.2024** ist — nicht „vom 20. April 2023".
Gegenüber der Behörde, die diese Fassungen selbst herausgibt, ist eine
Abweichung im Fassungsdatum unnötig angreifbar.

**Reparatur:** In der Mail konkretisieren: „die bis zum 5. Juni 2026 geltende
Fassung (Bekanntmachung vom 20. April 2023 in der Fassung vom 14. Februar
2024, Ziffer 5.2.1)". Im Trägerdokument den Änderungsstand aufnehmen und den
offenen Beschaffungsweg als eigenen Punkt führen.

### P07D-21 · MITTEL · Befund 2.1 prüft den Link — die Seite führt gleichwohl einen Altstand
Der Befund selbst ist **richtig und von mir unabhängig bestätigt**: Im
R05-A-Rohbeleg `sh-dku.html` gibt es genau **einen** Link auf das
Verkündungsportal, und er zeigt auf `…/2026/06_2026/2026-190`; die
Downloadbox trägt `downloadbox_slim_name` = „Richtlinie
Digitalisierungsmaßnahmen kleine Unternehmen (DKU)" ✔ — das Zitat im
Trägerdokument stimmt. Die B9.4-Warnung ist an **diesem** Link nicht belegt,
und der Vorbehalt („Ein Negativ an einer Seite schließt nicht aus …") ist
korrekt gesetzt.

Die Session hat aber nur den **Link** gemessen, nicht den **Inhalt** derselben
Seite. Dort steht:
> „Unternehmen aus den Bereichen Fischerei, Aquakultur und der Landwirtschaft
> (Primärerzeugung, Verarbeitung und Vermarktung landwirtschaftlicher
> Produkte) sind nicht antragsberechtigt."

Das ist die Ausschlussliste der **Altfassung** (Ziffer 3.1 von 2023). Die
geltende Ziffer 3.1.1 nennt zusätzlich „freie Berufe nach § 18 EStG …;
Krankenhäuser, Kliniken, Medizinische Versorgungszentren, **Sanatorien oder
ähnliche Einrichtungen**". Die WTSH-Programmseite gibt den geltenden Stand
also **unvollständig** wieder — ausgerechnet um den Posten, der Frage 1 der
Mail trägt.

Damit ist die Richtung der B9.4-Warnung („wer nur der Programmseite folgt,
liegt falsch") an derselben Seite in anderer Gestalt belegt. Wird der Befund
2.1 als „B9.4-Warnung an dieser Seite unbelegt" nach R07-A weitergegeben,
besteht die Gefahr, dass die Warnung **als Ganzes** verworfen wird.

**Reparatur:** Befund 2.1 um diesen Absatz ergänzen: „Der **Link** ist
aktuell; die **Seiteninhalte** sind es nicht durchgehend (Ausschlussliste auf
Altfassungsstand)." In der Mail Frage 1 einen Halbsatz ergänzen, dass die
Programmseite die Aufzählung kürzer führt als Ziffer 3.1.1 — das macht die
Frage konkret und ist zugleich ein nützlicher Hinweis an die Stelle.

### P07D-22 · SCHWER · Zwei zwingende Modul-1-Anforderungen fehlen vollständig
Amtsbl. 2026/190, **Ziffer 2.1** letzter Absatz:
> „**Jede geförderte Beratung muss einen Abschnitt zur Bewertung und Stärkung
> der IT- und Informationssicherheit enthalten, einschließlich einer
> Risikoanalyse und konkreter Handlungsempfehlungen zur Umsetzung technischer
> und organisatorischer Schutzmaßnahmen.**"

**Ziffer 4.2**: gefördert werden Vorhaben, „die in einem **schriftlichen
Beratungsbericht** individuelle Lösungen und Handlungsempfehlungen … erarbeiten".
Die WTSH-Programmseite wiederholt beides im Modul-1-Block.

Beides steht weder im Trägerdokument noch in einem Entwurf — obwohl Ziffer 2.1
als gelesen ausgewiesen ist und obwohl das Dokument für den Hamburg Digital
Check die Deliverable-Pflicht (Realisierungskonzept) sehr wohl führt
(„prägt unser Beratungs-Deliverable"). Für SH ist die Pflicht **härter**: Ohne
IT-Sicherheitsabschnitt mit Risikoanalyse ist die Beratung nicht förderfähig —
unabhängig davon, wie gut die Abgrenzungsfrage 2 ausgeht. Das ist eine
Fähigkeits-Voraussetzung an uns, also genau die Frage, die das Dokument in
seiner Einleitung stellt.

**Reparatur:** Zeile in die SH-Konditionentabelle („Deliverable-Pflicht:
schriftlicher Beratungsbericht + Pflichtabschnitt IT-/Informationssicherheit
mit Risikoanaloge, Ziffern 2.1/4.2"); neuer offener Punkt: Wer liefert den
IT-Sicherheitsabschnitt (eigene Kompetenz, Partner, Unterauftrag)? Der Punkt
gehört in dieselbe Reihe wie F-1 und ist die realistischere Eintrittshürde für
SH als die Abgrenzungsfrage.

---

## Zusatzprüfungen

### Wörtlichkeit aller als Zitat gesetzten Passagen
**Nenner: 22 als Zitat gesetzte Passagen Zeichen für Zeichen gegen die
Rohquelle gelesen** (HDC 6 · SH 2026/190 7 · SH-Altfassung 1 · BAFA 5 ·
Posneg-Liste 6 → 25 minus 3 Kurzbelege, die nur Werte übernehmen).
**19 wörtlich korrekt, 3 mit Befund.**

Besonders geprüft und **korrekt**:
- Die als Original markierten Tippfehler der Selbsterklärung: „**im den**
  letzten drei Jahren **mindesten** drei Referenzprojekte" — beide stehen so
  im Formular ✔, die Kennzeichnung „*(Tippfehler im Original)*" ist richtig.
- Ziffer 5.2.1 (Werbe-Ausschluss) — wörtlich ✔, und die Zuordnung „**im
  Abschnitt zum Modul Beratung**" trifft zu: 5.2.1 regelt die Ausgaben für
  Vorhaben nach Ziffer 2.1 ✔.
- Alle sechs Zeilen aus Positiv-/Negativliste ✔ wörtlich.
- BAFA Ziffer 4.2.1 (Beratereigenschaft) inkl. Ausnahmeklausel ✔ wörtlich —
  die L-01-Reparatur (Zitat an der Rohquelle statt am Verdichtungsbericht) ist
  sauber ausgeführt.
- „Artikel 18 KMU-Beihilfen …" (Ziffer 1.2) ✔; die Abgrenzung „**nicht**
  Art. 18 AGVO" für Hamburg ist ebenfalls richtig — die HDC-Richtlinie nennt
  die AGVO nur für die KMU-Definition und für „Art. 2 **Nr.** 18"
  (Unternehmen in Schwierigkeiten). Die Verwechslungsgefahr ist erkannt und
  vermieden.

Befunde: **P07D-10** (Kürzung ohne Auslassungszeichen), **P07D-23**,
**P07D-24**.

#### P07D-23 · MITTEL · WTSH-Mail Frage 3 zitiert eine Überschrift, die so nicht existiert
> „Die Negativliste ist mit ‚**nicht förderfähige Ausgaben**' überschrieben
> und in der Richtlinie unter Ziffer 5.2.3 verankert, also im Abschnitt zu den
> Ausgaben nach Ziffer 2.2."

Zwei Ungenauigkeiten gegenüber dem Adressaten, der beide Dokumente selbst
verfasst hat:
1. Die **Überschrift** lautet „Negativliste nicht-förderwürdiger
   **Vorhaben**". „Nicht förderfähige Ausgaben" ist die **Zeilenbeschriftung**
   der linken Spalte. Das Wort „Vorhaben" ist der Oberbegriff aus Ziffer 2 und
   gilt für Modul 1 und 2 gleichermaßen — das eigene Argument kippt damit.
2. Ziffer 5.2.3 ist **nicht** rein modul-2-bezogen: Sie enthält zusätzlich
   „Förderfähige Kosten für Maßnahmen nach **Modul 3**" sowie die allgemeine
   Vorsteuerregel. Die Ankündigung selbst lautet „Ein Katalog an förderfähigen
   und nicht förderfähigen **Gegenständen**" — die Identifikation dieses
   Katalogs mit der Positiv-/Negativliste („Sie ist die in Ziffer 5.2.3
   angekündigte Veröffentlichung", 4.3) ist eine **Schlussfolgerung**, die als
   Feststellung gesetzt ist, während Frage 3 sie gleichzeitig anzweifelt.

**Ungenutzt blieb der stärkste verfügbare Beleg** — auf der Programmseite, die
die Session gelesen hat, steht der Verweis auf die Liste **nur** im
Modul-2-Block („Bitte beachten Sie auch die von der WTSH veröffentlichte
Positiv- und Negativliste."; „Beachten Sie die Positiv-/Negativliste …"), im
Modul-1-Block **gar nicht**. Das ist genau die gesuchte Indizienlage.

**Reparatur:** Satz umbauen: „Ihre Negativliste ist als ‚Negativliste
nicht-förderwürdiger Vorhaben' überschrieben, führt aber die Rubrik ‚Nicht
förderfähige Ausgaben' und ist in der Richtlinie in Ziffer 5.2.3 angekündigt;
auf Ihrer Programmseite verweisen Sie darauf nur im Modul-2-Abschnitt. Gilt
sie auch für Modul 1?" Im Trägerdokument die Identifikation als Schluss
kennzeichnen.

#### P07D-24 · HINWEIS · Das HDC-Zitat lässt per „…" genau die Gruppe weg, die den Programmkontrast trägt
Rollenklärung: „rechtlich selbstständige kleine und mittlere Unternehmen (KMU
gem. EU-Definition) der gewerblichen Wirtschaft **…** mit einer Betriebsstätte
in Hamburg". Das Original nennt an der Auslassungsstelle „**des Handwerks
sowie freie Berufe**". Freie Berufe sind in SH nach Ziffer 3.1.1 **nicht**
antragsberechtigt — der Kontrast ist inhaltlich wertvoll und geht im Zitat
verloren. Ebenfalls nicht geführt: Ziffer 2 Satz 2 („Die Beratung muss sich
auf die Hamburger Betriebsstätte beziehen und die Umsetzung … muss für die
Hamburger Betriebsstätte geplant sein").

**Reparatur:** Zitat vervollständigen, Kontrast als eigene Zeile.

### Umlaute, Orthographie, Betreffzeilen, Gedankenstriche
**Nenner: 2 Betreffzeilen + 2 Mailtexte + alle Feldbeschriftungen der
Kopfblöcke geprüft. Kein Befund.**
- Keine ASCII-Transliteration; Umlaute und ß durchgehend korrekt, auch in den
  Betreffzeilen („Fördergegenstand", „Auslegungsfragen zur DKU-Richtlinie").
- Deutsche Anführungszeichen „…" durchgehend.
- Gedankenstriche im Mailtext: **0** in beiden Entwürfen. Die je 5 Vorkommen
  liegen ausschließlich im Platzhalter-Signaturblock, der vor dem Versand
  ersetzt wird. Die Regel „externe Anschreiben mit möglichst wenigen
  Gedankenstrichen" ist damit erfüllt.
- Sprache: Deutsch, Empfängersitz DE ✔ in beiden Kopfblöcken belegt.

### CC, Status, Versandvermerke
**Nenner: 2 Kopfblöcke × 5 Felder = 10 Felder geprüft. Kein Befund.**
- Status **ENTWURF** in beiden ✔ — **nicht** verfrüht auf VERSENDET gesetzt.
- Versanddatum und Versandkanal leer, mit ausdrücklichem Hinweis „nie beim
  Schreiben der Vorlage" ✔ — die Falle wirkt in beide Zeitrichtungen und ist
  hier richtig behandelt.
- **CC bewusst leer** mit Begründung ✔ — nicht vorbelegt.
- „Der User versendet. Diese Session versendet nicht und hat kein Postfach
  angefasst" ✔. Die Nacharbeit-Blöcke verlangen den Postfach-Beleg für
  VERSENDET und den Abgleich gegen den Gesendet-Body ✔.
- WTSH: „Eine Adresse wählen, nicht beide anschreiben" ✔ mit Zweitadresse für
  den Nachfass — entspricht der Regel zur zweiten Adresse.

### Informationshygiene
**Nenner: 2 Mailtexte auf 4 Kriterien geprüft (8 Prüfungen). Kein Befund im
Mailtext.**
- **Kein konkreter Kunde** genannt ✔ (beide Mails schließen ihn ausdrücklich
  aus).
- **Keine harten Förderzahlen oder -quoten** im Mailtext ✔ — kein Betrag, kein
  Prozentsatz, keine Tagessatzangabe.
- **Kein Wettbewerber** genannt oder bewertet ✔.
- **Keine parallel laufende Anfrage** erwähnt ✔ — die IFB erfährt nicht von der
  WTSH-Anfrage und umgekehrt.
Zwei begleitende Beobachtungen ohne Befundcharakter: Beide Mails offenbaren,
dass wir im Aufbau sind und noch keine Kunden haben — das ist Folge der
Zeitpunkt-Regel und in Kauf zu nehmen. Die Zielgruppenangabe ist korrekt
differenziert („kleine **und mittlere**" gegenüber der IFB, „**kleine**"
gegenüber der WTSH) und spiegelt den Unterschied zwischen HDC Ziffer 2 und
DKU Ziffer 3.1.1 ✔ — sauber gemacht.

### Widersprüche zwischen den drei Dokumenten
**Nenner: 10 Aussagen quergelesen** (Antragstellerrolle · Zielgruppen-Größe ·
Fristen 16.11.2026 / 30.06.2027 · Ziffernverweise 5.2.1, 3.1.1, Ziffer 6 ·
Negativlisten-Anker · Stand der Positiv-/Negativliste · Rücklauf-Zielorte ·
F-7-Platzhalter · Status/CC · Kanal). **Kein Widerspruch zwischen den
Dokumenten.** Die Entwürfe geben das Trägerdokument konsistent wieder; die
Rücklauf-Zielorte (Abschnitt 3 bzw. 4) stimmen mit F-8 überein.

Die in (a)–(e) genannten Fehler sind durchweg **gemeinsame** Fehler beider
Ebenen — das Trägerdokument trägt sie in die Entwürfe weiter (P07D-23,
P07D-20). Das ist die gefährlichere Bauform: Ein Querlesen der drei Dokumente
gegeneinander findet sie nicht, nur der Gang an die Rohquelle.

Eine innere Spannung, kein Widerspruch: Abschnitt 4.3 setzt „Sie ist die in
Ziffer 5.2.3 angekündigte Veröffentlichung" als Feststellung und stellt
denselben Punkt drei Absätze später als offene Frage 3.

### Weitere Einzelbefunde

#### P07D-25 · MITTEL · „Für dasselbe Vorhaben ist also genau ein Programm wählbar" — der Vorbehalt ist hinzugefügt, nicht belegt
Die HDC-Richtlinie (Ziffer 5) sagt ohne Einschränkung: „Eine Kombination der
Zuwendung mit anderen nicht rückzahlbaren Zuschüssen aus EU-, Bundes oder
Landesprogrammen ist nicht möglich." Trägerdokument-Tabelle und Abschnitt 6
ergänzen „**für dasselbe Vorhaben**". Das ist eine plausible, aber
unmarkierte **Auslegung**, und sie geht in die für uns günstige Richtung
(mehrere Vorhaben nacheinander in verschiedenen Programmen). Zweitens fehlt
der unmittelbar folgende Satz der Quelle, der eine Kombination mit einem
**Förderdarlehen** ausdrücklich zulässt (gedeckelt auf Gesamtkosten abzüglich
Zuschuss) — eine Gestaltungsmöglichkeit, die zugunsten des Kunden fehlt.
Drittens ist die Schlussfolgerung nur aus der **Hamburger** Norm gezogen und
dann als beidseitige Aussage formuliert; 2026/190 wurde dazu nicht ausgewertet
(dort einschlägig u. a. Ziffer 4.6).

**Reparatur:** Vorbehalt als Auslegung kennzeichnen oder streichen;
Förderdarlehen-Satz ergänzen; die Aussage auf „aus Hamburger Sicht" begrenzen,
bis die SH-Seite geprüft ist.

#### P07D-26 · HINWEIS · Quellverweis „Richtlinie Ziffer 6 und 1.2" ist mehrdeutig
Die HDC-Richtlinie hat **zwei** Nummernkreise: Ziffern 1–9 („Was ist das Ziel
…" bis „Wo kann man die Förderung beantragen?") und anschließend erneut
„1. Wie ist das Verfahren" mit 1.1–1.5. „Ziffer 1.2" meint hier ersichtlich
den Verfahrensteil (Antragstellung) — für einen Leser der Richtlinie ist das
nicht auflösbar. Im Mailtext selbst wird korrekt nur „Ziffer 6" zitiert.

**Reparatur:** „Ziffer 6 und Verfahrensteil 1.2 (Antragstellung)".

#### P07D-27 · HINWEIS · Zwei ✔-Kanal-Aussagen ohne Suchraum, zweiter interner Kanal nicht abgewogen
„Ein Partner-Bezug besteht nicht" (beide Entwürfe) ist ein Existenz-Negativ
ohne genannten Suchraum. Zudem gibt es in beiden Fällen einen **zweiten
programmnahen Kanal**, der nicht abgewogen wird:
- IFB: Ziffer 1.1 und die Programmseite nennen die „Förderlotsen im IFB
  Beratungscenter Wirtschaft" (`foerderlotsen@ifbhh.de`), ausdrücklich für
  „Fragen zu den Förderbedingungen".
- WTSH: die Programmseite empfiehlt „Vor Antragstellung … eine kostenfreie
  Beratung durch die **Innovationsberatung**".
Die getroffene Wahl (`digital@ifbhh.de` bzw. das fachliche Projektcontrolling)
ist begründbar und die Kanal-Prüfung ist im Kern richtig — beide Adressen habe
ich an der Quelle bestätigt (Richtlinie Ziffer 9 bzw. Programmseite mit
Funktion „Fachliches Projektcontrolling Innovationsförderung" und Durchwahl
✔). Die Alternative gehört aber genannt, schon weil sie der Nachfassweg ist.

**Reparatur:** Halbsatz je Kanal-Prüfung: „Suchraum: Richtlinie + Programmseite;
alternativer Kanal <X> bewusst nicht gewählt, weil …"

#### P07D-28 · HINWEIS · Formularversion und das IFB-eigene Auslegungsbeispiel nicht erfasst
Die Selbsterklärung trägt oben und unten die Kennung **`WDIG029F0126 LCD`**.
Da wir dieses Formular unterschreiben und sein Text für uns Kanon wird, gehört
die Version ins Dokument (spätere Fassungen ändern die Erklärung, ohne dass es
auffällt). Zweitens enthält das Formular ein **Beispiel**, das im
Trägerdokument fehlt:
> „Beispiel: Für ein Einzelhandelsgeschäft wurde ein Digitalisierungskonzept
> erarbeitet. Das Digitalisierungskonzept umfasst die Einführung eines
> integrierten Warenwirtschafts- und Kassensystems mit digitaler
> Lagerverwaltung, elektronischer Zahlungsabwicklung und zentraler
> Kundendatenpflege."

Das ist der einzige **IFB-eigene** Auslegungsanker für Frage 1 — prozess- und
transaktionsseitig, nicht sichtbarkeitsseitig — und er stützt den gewählten
Zuschnitt („digitale Buchungs- und Kommunikationsstrecke, Anbindung an PMS und
Gästedatenhaltung") unmittelbar. Bemerkenswert im Programmvergleich:
Kassensysteme stehen bei der WTSH auf der **Negativ**liste.

**Reparatur:** Beispiel in Abschnitt 3.2 aufnehmen und in Frage 1 der Mail als
Referenz nutzen („Ihr Beispiel in der Selbsterklärung beschreibt … — liegt
unser Vorhaben auf derselben Linie?"). Das macht aus einer offenen Frage eine
Einordnungsfrage mit hoher Antwortwahrscheinlichkeit.

#### P07D-29 · HINWEIS · Zwei kleinere Genauigkeiten
1. **BAFA-Kopfzitat** trägt einen Quellwiderspruch unkommentiert: „in der
   geänderten Fassung vom 12. Dezember 2024 (…, **gültig ab 1. Januar 2024**)"
   — ein Geltungsbeginn vor der Änderung. Das Zitat ist wörtlich richtig ✔;
   an anderer Stelle markiert dasselbe Dokument Originalfehler ausdrücklich
   („*Tippfehler im Original*"). **Reparatur:** gleich behandeln.
2. **Abschnitt 7 Nr. 1**, Klammer: „*(Deckt zugleich die Regel ‚jede
   Entwarnung trägt ihre Quelle im Satz'.)*" — die Regel verlangt eine
   Quellenangabe im Satz; ein Verzicht auf Förderzusagen deckt sie nicht.
   **Reparatur:** Klammer streichen oder auf „vermeidet Entwarnungen, für die
   wir keine Quelle haben" umformulieren.

#### P07D-30 · HINWEIS · Der Prüfgegenstand hat sich während der Prüfung geändert
`handel/foerderarchitektur-beraterrolle.md` wuchs von 478 auf 548 Zeilen
(Commits `a14cb4a`, `b34bea0`), nachdem die Prüfung begonnen hatte. Die
Änderungen sind Verbesserungen (BAFA auf Rohquellen-Belegstufe, Zähltabelle
mit Kontrolle je Muster) und sind in diesem Protokoll berücksichtigt. Für
künftige Prüfläufe: Der Prüfauftrag sollte einen **eingefrorenen Stand**
(Commit-Hash) benennen, sonst prüft der Prüfer teilweise gegen einen
verschwundenen Text — und ein Befund kann bereits repariert sein, ohne dass es
jemand merkt.

---

## Was ich NICHT prüfen konnte („nicht prüfbar", nicht geglättet)

| Gegenstand | Grund |
|---|---|
| Ob 2026/190 nach dem 05.06.2026 geändert wurde | Kein Netzzugriff in diesem Lauf; das Verkündungsportal liegt nur als Einzelseite `vp.html` vor. **Nicht erhoben** — Grundlage von P07D-19 |
| Ob die HDC-Fördermittel noch verfügbar sind (Kontingent) | Nicht aus den vorliegenden Artefakten ableitbar. **Nicht erhoben** — Grundlage von P07D-07 |
| Geltungsstand der BAFA-Richtlinie an der ausgebenden Stelle | Wie die geprüfte Session: nur der Abzug vom 09.08.2026. **Nicht erhoben** (F-10 ist korrekt gesetzt) |
| Ob andere WTSH-/Landesseiten die Altfassung verlinken | Nur `sh-dku.html`/`dku_live.html` lagen vor. **Nicht erhoben** — die Einschränkung im Trägerdokument ist zutreffend |
| HTTP-Statuszeilen der Kontrollabrufe | Nur Antwortkörper archiviert; 404 ist am Inhalt belegt, nicht am Header (P07D-14) |
| Herkunft/Abrufweg der SH-Altfassung (`sh-dku-rl.pdf`) | Im R05-A-Bestand ist kein Abrufprotokoll enthalten. **Nicht erhoben** — die Session sagt das selbst |
| Ob das Trägerdokument die Fragen des Auftrags vollständig abbildet | Der ursprüngliche Start-Prompt lag mir nicht vor; ich habe gegen den im Dokument selbst genannten Auftrag geprüft |

---

## Übersichtstabelle aller Befunde

| ID | Schwere | Kategorie | Gegenstand | Datei |
|---|---|---|---|---|
| **P07D-15** | **SCHWER** | (d)/(e) | 2.500-€-Bagatellgrenze steht wörtlich in Ziffer 4.4 **und** auf der Programmseite — F-2 ist ein Fehlalarm | Trägerdok. 4.1, 8, 9 |
| **P07D-22** | **SCHWER** | (e) | Pflicht-IT-Sicherheitsabschnitt mit Risikoanalyse + schriftlicher Beratungsbericht (Ziffern 2.1/4.2) fehlen vollständig | Trägerdok. 4 |
| **P07D-06** | **SCHWER** | (b) | „Aktive Mitwirkung bei der Antragstellung" macht unsere Kosten nicht zuwendungsfähig (WTSH-Programmseite) — fehlt | Trägerdok. 4/7, beide Entwürfe |
| **P07D-05** | **SCHWER** | (b)/(c) | „Wer unterschreibt, bevor der Bescheid da ist …" absolut gesetzt; Ziffer 7.2 (vorzeitiger Maßnahmebeginn) fehlt | Trägerdok. 7, WTSH-Entwurf |
| **P07D-01** | MITTEL | (a) | IFB-Frage 2, zweiter Teil offenbart die eigene Referenzlage | IFB-Entwurf |
| **P07D-02** | MITTEL | (a)/(b) | IFB-Frage 3 holt eine bindende Negativauskunft vor F-5 | IFB-Entwurf |
| **P07D-04** | MITTEL | (a)/(e) | Berater-Anforderungen der geltenden Fassung (5.2.1/4.1/7.1) ungeführt, Frage 4 dadurch unscharf | Trägerdok. 4, WTSH-Entwurf |
| **P07D-08** | MITTEL | (c) | „Unverändert geltend" trägt weiter als der Hash-Beleg | Trägerdok. 2 |
| **P07D-09** | MITTEL | (c) | Positivkontrolle prüft die Quelle statt des Ergebnisses | Trägerdok. 9 |
| **P07D-10** | MITTEL | (c)/Zitat | 3 von 4 [§]-Pflichten; Zitat 3 ohne Auslassungszeichen gekürzt | Trägerdok. 3.3 |
| **P07D-11** | MITTEL | (c)/(e) | Positivliste = 4 von 5 Kategorien, „exakt" falsch; Tabellenauszug ohne Kriterium | Trägerdok. 4.3 |
| **P07D-12** | MITTEL | (c) | „nirgends dokumentiert" ohne Suchbeleg; Säule 5 des Positionierungspapiers führt § 264 + Leitplanke | Trägerdok. 3.3, 8 |
| **P07D-13** | MITTEL | (c) | Zwei R05-A-Rohbelege sind byte-identisch die 404-Seite | Nebenbefund an R07-A |
| **P07D-16** | MITTEL | (d) | Grep-Protokoll „1 Treffer" — es sind 2; kein Nenner je Muster | Trägerdok. 9 |
| **P07D-19** | MITTEL | (e) | Geltung von 2026/190 ohne Änderungs-Gegenprobe und ohne Suchraum | Trägerdok. 2 |
| **P07D-20** | MITTEL | (e) | Altfassung ist konsolidierte Lesefassung i. d. F. 14.02.2024; Mail behauptet ihren Inhalt als Feststellung | Trägerdok. 2.1, WTSH-Entwurf |
| **P07D-21** | MITTEL | (e) | Befund 2.1 misst nur den Link; die Seite führt die Ausschlussliste auf Altfassungsstand | Trägerdok. 2.1, WTSH-Entwurf |
| **P07D-23** | MITTEL | Zitat/(a) | Negativlisten-„Überschrift" falsch zitiert; 5.2.3 nicht rein Modul 2; bester Beleg ungenutzt | WTSH-Entwurf, Trägerdok. 4.3 |
| **P07D-25** | MITTEL | (c)/(d) | „für dasselbe Vorhaben" unbelegt ergänzt; Förderdarlehen-Satz fehlt | Trägerdok. 3.1, 6 |
| **P07D-03** | HINWEIS | (a) | „Adressaten-Prüfung ✔ … keine unserer eigenen Tatsachen" überschießend | IFB-Entwurf |
| **P07D-07** | MITTEL | (b) | Mittelerschöpfung als vorgezogenes Fristende; Frage danach fehlt | Trägerdok. 3.1, IFB-Entwurf |
| **P07D-14** | HINWEIS | (c) | 404 am Antwortkörper belegt, Statuszeile nicht archiviert | Trägerdok. 2 |
| **P07D-17** | HINWEIS | (d) | „rund 13,6 Beratertage" ist eine Untergrenze | Trägerdok. 3.1 |
| **P07D-18** | HINWEIS | (d) | Zeilenanker `:2508` ohne `@hash` — im Arbeitsbaum schon bei 2805 | Trägerdok. 4.3 |
| **P07D-24** | HINWEIS | Zitat | HDC-Zitat lässt „des Handwerks sowie freie Berufe" weg | Trägerdok. 1 |
| **P07D-26** | HINWEIS | Doku | „Ziffer 6 und 1.2" mehrdeutig (zwei Nummernkreise) | IFB-Entwurf |
| **P07D-27** | HINWEIS | (a) | „Ein Partner-Bezug besteht nicht" ohne Suchraum; zweiter Kanal nicht abgewogen | beide Entwürfe |
| **P07D-28** | HINWEIS | (e) | Formularversion `WDIG029F0126` und IFB-eigenes Auslegungsbeispiel nicht erfasst | Trägerdok. 3.2/3.3 |
| **P07D-29** | HINWEIS | Zitat/Doku | BAFA-Kopfwiderspruch unkommentiert; irreführende Regel-Klammer in Abschnitt 7 | Trägerdok. 5.1, 7 |
| **P07D-30** | HINWEIS | Verfahren | Prüfgegenstand während der Prüfung verändert (478 → 548 Z.) | Verfahren |

**Summe: 30 Befunde — 4 SCHWER · 16 MITTEL · 10 HINWEIS.**
„Hinweis" ist eine Schwere-Angabe, keine Erledigungs-Kategorie: Jeder der 30
Befunde braucht eine ausdrückliche Disposition (repariert / bewusst verworfen /
benannter Träger), kategorienweise mit Nenner.

**Vier Befunde sind vor dem Versand zu erledigen** (sie betreffen den
Mailtext): P07D-01, P07D-02, P07D-20, P07D-23 — dazu P07D-05/-06/-07 als
inhaltliche Ergänzungen, wenn die Fragen erweitert werden.

---

## Pflicht-Zusatzabschnitt: Hätte ich diese Funde auch OHNE den Kategorien-Hinweis gefunden?

Ehrliche Antwort, je Gruppe:

**Ja, auch ohne den Hinweis — weil sie beim Gegenlesen der Rohquelle
zwangsläufig auffallen (10 Befunde):**
P07D-15 (2.500 €), P07D-22 (IT-Sicherheitsabschnitt), P07D-06 (Mitwirkung an
der Antragstellung), P07D-05 (Ziffer 7.2), P07D-10 (viertes [§]),
P07D-11 (fünfte Kategorie), P07D-21 (Ausschlussliste der Programmseite),
P07D-16 (zweiter Grep-Treffer), P07D-20 (konsolidierte Lesefassung),
P07D-24 (Auslassung im HDC-Zitat). Diese entstehen aus der schlichten
Operation „Quelle vollständig lesen und Zeile für Zeile gegen das Dokument
halten". Der Kategorien-Hinweis hat hier nur die Reihenfolge bestimmt.

**Nein — der Hinweis war ursächlich (5 Befunde):**
- **P07D-01 und P07D-02** hätte ich ohne die ausdrückliche Frage „fragt etwas
  über UNS?" bzw. „was ändert die Antwort HEUTE?" wahrscheinlich durchgewinkt.
  Beide Fragen sind formal einwandfrei; nur die Prüffrage nach der
  **Signalwirkung** und der **Reihenfolge** macht sie sichtbar. Ich hätte den
  ✔-Vermerk der Session gegengelesen und ihm zugestimmt.
- **P07D-09** (Positivkontrolle prüft die Quelle statt des Ergebnisses) hätte
  ich ohne die Kategorie „Entwarnungen" nicht als Befund geführt — der Absatz
  benennt die richtige Regel und liest sich deshalb wie ihre Erfüllung. Genau
  darin liegt seine Tarnung.
- **P07D-08** und **P07D-07** (Mittelerschöpfung) hätte ich vermutlich
  gefunden, aber nicht als Entwarnungs-Befund eingeordnet, sondern als
  Randnotiz abgelegt.

**Teilweise — der Hinweis hat den Fund beschleunigt, nicht ermöglicht
(2 Befunde):**
P07D-19 (Änderungs-Gegenprobe) und P07D-23 (Überschrift der Negativliste). Die
Kategorie (e) hat mich gezwungen, Fundstelle und Geltung **getrennt**
aufzuschreiben; erst dabei fiel auf, dass für die Geltung nur die Norm selbst
zitiert wird. Bei P07D-23 war der Auslöser der Vergleich von Zitat und PDF —
den hätte ich ohnehin gemacht.

**Ein Fund war reines Werkzeug-Glück (1 Befund):**
P07D-13 (zwei R05-A-Rohbelege sind die 404-Seite). Er entstand, weil ich die
Kontrolldatei zufällig mit dem R05-A-Ordner in einem Verzeichnislisting
nebeneinander sah und die identische Byte-Größe 5.748 mehrfach auffiel. Keine
Kategorie hat danach gefragt; keine hätte ihn erzwungen. Das ist zugleich der
Beleg für die Schwesterregel, die ihn beschreibt: Die Messung, die eine
Prämisse klärt, klärt oft eine Nachbar-Prämisse mit — man muss nur fragen.

**Was mir beinahe passiert wäre — und was das über den Prüfweg sagt:**
Ich hätte fast einen falschen SCHWER-Befund erhoben („Pseudo-Zitat in der
BAFA-Passage"), weil mein Phrasen-Grep an einem Zeilenumbruch im entmarkupten
Text scheiterte. Der Befund wäre plausibel gewesen, gut belegt aussehend und
falsch. Die Rettung war die Regel, dass ein Negativ, das nicht passen kann,
zuerst ein Werkzeugfehler ist. Umgekehrt gilt dieselbe Warnung für dieses
Protokoll: Die Befunde P07D-19 und die Zeilen der Tabelle „Was ich nicht
prüfen konnte" sind **Nicht-Erhebungen**, keine Nichtexistenzen.
