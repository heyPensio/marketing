# AKQ1 — Akquiseplan: Kanal-Kapazitätsplan und Rückwärtsrechnung auf den ersten zahlenden Kunden

**Strang:** MKT-AKQ · **Arbeitspaket:** AKQ1 (Teil 1 von 2 — Teil 2 ist
`akquise/listenbau-regelwerk.md`) · **Erstellt:** R08-A (Session Ben
Beckman), Stand 11.08.2026 · **Zuletzt geändert:** 17.08.2026 (R17-C:
§ 3.2/§ 4.3 Zwei-Gate-Nachtrag · R18-C: § 2/§ 3.1/§ 5/§ 6/§ 7/§ 8)

---

## ⚠️ Sequenz-Vorbehalt — bitte zuerst lesen

> **Arbeitsgrundlage auf Rechtsmatrix-Basis; Festzurrung nach
> FUND2-Persona-Befund.**
>
> CLAUDE.md (Strang-Tabelle MKT-AKQ) und die Projektquelle (§ 2, AKQ1)
> legen fest, dass der Kanalmix **nach dem Persona-Befund** festgezurrt
> wird. `fund/persona-befund.md` **existiert nicht** — an der Platte und
> in der Git-Historie geprüft am 11.08.2026 (`ls fund/persona*` →
> nur `persona-validierungsplan.md`; `git log -- fund/persona-befund.md`
> → leer). Vorhanden ist bislang nur der **Validierungsplan**
> (`fund/persona-validierungsplan.md`, ausdrücklich „Methode, kein
> Befund").
>
> Die diesem Plan zugrunde liegende Kanal-Rangfolge (D1 der
> Kanal-Rechtsmatrix) ist damit **rechtlich hergeleitet, nicht
> persona-validiert**. Sie sagt, welche Kanäle offen sind — nicht, über
> welchen Kanal unsere Zielgruppe tatsächlich kauft. Diese zweite Frage
> beantwortet erst FUND2.
>
> **Dieser Plan hebt den Vorbehalt nicht auf** und darf nicht als
> Kanalmix-Entscheid gelesen werden. Er ist die Kapazitäts- und
> Terminarbeit, die unter dem Vorbehalt schon jetzt möglich ist —
> weil die Vorlaufzeiten der offenen Kanäle länger sind als die
> verbleibende Frist erlaubt (Begründung: § 3).

## Geltungsgrenze

- **Kein Kanalmix-Entscheid** (das ist AKQ1-Fertigkriterium *nach*
  FUND2), **keine Zielkundenliste** (AKQ2), **kein Erstansprache-Text**.
- **Keine Rechtsberatung.** Alle Rechtsaussagen sind aus
  `handel/kanal-rechtsmatrix.md` übernommen und tragen deren
  Geltungsgrenze mit — dort steht ausdrücklich, dass sie von einer
  Marketing-Session stammt, nicht von einem Rechtsanwalt.
- **Die Planungszahlen dieses Dokuments sind zum überwiegenden Teil
  ANNAHMEN, keine Messwerte.** Sie sind in § 4 einzeln als solche
  ausgewiesen und mit einem Erhebungs- oder Messhandgriff versehen. Wer
  eine Zahl von hier weiterverwendet, übernimmt ihre Belegstufe mit.
- Dieses Dokument entscheidet nichts mit Außenwirkung. Alle Punkte, die
  der User entscheiden muss, stehen gesammelt in § 8.

## Belegstufen dieses Dokuments

Übernommen aus `handel/kanal-rechtsmatrix.md` (Abschnitt
„Belegstufen-Legende"), damit beide Dokumente dieselbe Notation führen:

| Zeichen | Bedeutung hier |
|---|---|
| **①** | Im Repo-Bestand oder an der Primärquelle selbst gelesen (Datei + Stelle genannt) |
| **②** | Aus einem Repo-Dokument übernommen, das die Quelle selbst gelesen hat (Kette genannt) |
| **③** | Sekundär referenziert, Original nicht gelesen |
| **④** | **Annahme / nicht erhoben — kein Beleg** |

---

## 1. Das Ziel und sein Anker

**Zielsatz (E4, Projektquelle § 1):** *erster zahlender Kunde bis Mitte
November 2026* — die Frist gilt ausdrücklich **nur für den ABSCHLUSS**
(Präzisierung des Users 09.08.2026; ①, `STATUS.md` „Aktueller Stand" +
CLAUDE.md „Was dieses Projekt ist"). Fertig-Kriterium ist laut
Projektquelle § 2 (AKQ4) der **unterschriebene Vertrag**.

**Planungsanker (konservativ gesetzt, Muster: `beleg/baseline-messplan.md`
§ 5):**

| Punkt | Festlegung |
|---|---|
| Zielausdruck im Repo | „Mitte November 2026" — **ein Tagesdatum ist nirgends belegt** (①, grep über den Bestand) |
| **Planungsanker dieses Plans** | **Fr 13.11.2026** — letzter Werktag vor dem 15.11. |
| Warum konservativ | Der 15.11.2026 ist ein **Sonntag** (Wochentag per `Get-Date` erhoben 11.08.2026, nicht aus dem Kopf — L-07). Eine Unterschrift am Sonntag ist kein plausibler Termin; jede spätere Auslegung („bis 20.11.") würde das Fenster künstlich verlängern |
| Handgriff | **H-1 (§ 7):** Wenn der User „Mitte November" enger oder weiter meint, wird dieser Anker nachgezogen — Verschiebung nach VORN verkürzt alle Vorlaufketten 1:1 |

**Heute:** Di 11.08.2026 (per `Get-Date` erhoben). **Verbleibend bis zum
Anker: 13 Wochen und 3 Tage** (Zählweg: 11.08. → 13.11. = 94 Kalendertage
= 13,4 Wochen).

---

## 2. Die Kanäle einzeln — Vorlauf, Aufwand, Taktung, Bau-Voraussetzung

Grundlage der Reihenfolge ist **D1 der Kanal-Rechtsmatrix**
(`handel/kanal-rechtsmatrix.md`, „D1 · Der Kanalmix, der übrig
bleibt"). ② über die Rechtsmatrix, die ihrerseits an Primärquellen
belegt ist.

> ⚠️ **Zwei Rangfolgen, die man nicht verwechseln darf.** D1 rangiert
> nach **rechtlicher Offenheit** („welcher Kanal ist ohne Einwilligung
> benutzbar?"). Dieser Plan ergänzt eine zweite Achse: **Fristnähe**
> („welcher Kanal kann bis zum 13.11. noch einen Abschluss tragen?").
> Die beiden Achsen fallen auseinander — der rechtlich offenste Kanal
> (Brief) ist nicht der fristnächste (§ 4). Das ist **kein Widerspruch
> zur Rechtsmatrix**, sondern eine Frage, die sie nicht gestellt hat;
> ihre eigene Schlussbemerkung in D1 verlangt genau diese Ergänzung:
> „Brief und persönlicher Kontakt haben längere Vorlaufzeiten als
> E-Mail — das gehört in die Kapazitätsplanung von MKT-AKQ, bevor der
> Zielkundenlisten-Bau startet."

### K1 · Brief an die Firmenanschrift *(D1-Rang 1)*

| | |
|---|---|
| **Rechtsstand** | ✅ zulässig ohne Einwilligung; kein Tatbestand in § 7 Abs. 2 UWG, es gilt § 7 Abs. 1 UWG (② Rechtsmatrix A7). ⚠️ **Das ✅ ruht auf einem Negativ mit benannter Grenze:** „kein Verbotsurteil zu B2B-Kaltpost gefunden" — aber „⚠️ **Nicht durchsucht: juris und beck-online**, wo der Großteil der OLG-/LG-Rechtsprechung liegt. Das Negativ kann dort kippen." Der tragende Kanal dieses Plans steht damit auf einer nicht durchsuchten Rechtsprechungsquelle |
| **Vorlauf bis Versandfähigkeit** | **3–5 Wochen nach dem Firmierungs-Entscheid** (④ Annahme, Zusammensetzung unten) — ⚠️ **die Vorlaufuhr startet nicht mit dem Namen allein:** nach dem Nachtrag in § 3.2 (17.08.) hängt schon der Listenaufbau an **F-7 UND O-9 UND den sieben Bau-Pflichten**; der Namensentscheid ist notwendig, nicht hinreichend |
| **Aufwand je Kontakt** | Adressrecherche + Quellenprotokoll + Personalisierung + Druck + Kuvertierung + Porto (④ — Minutenwert und Portosatz **nicht erhoben**, H-3) |
| **Taktung** | Wellenweise, nicht als Dauerstrom: eine Welle = eine Nachfass-Kohorte = eine auswertbare Quote |
| **Skalierbar?** | Ja — der einzige der fünf Kanäle, dessen Menge wir selbst bestimmen |
| **Frist-tragend?** | ⚠️ **Nur bei hoher Stückzahl** — § 4 zeigt, warum |

**Was gebaut sein muss, bevor der erste DATENSATZ entsteht** (alles
Pflicht, keine Reihenfolge-Option):

> 📌 **REPARATUR 17.08.2026 (R18-C, Befund des Gegenlesers G-1) —
> sechste Ein-Gate-Stelle.** Vorfassung der Überschrift: *Was gebaut sein
> muss, bevor der erste Brief rausgeht*. Sie verankerte die ganze
> Pflichtenliste am **Brief** — wörtlich die Formel, die
> `akquise/interessenabwaegung-o8.md` § 11.1 kippt („**nicht erst vor dem
> ersten Brief**"). Punkt 3 dieser Liste ist die **Zielkundenliste**, und
> die ist nach dem Nachtrag in § 3.2 selbst der erste
> Verarbeitungsschritt. Mit repariert: die Vorlaufzeile oben und der
> F-7-Vorwärtsverweis in Punkt 1. **Warum das erst der Gegenleser fand:**
> Der Negativ-Suchlauf dieser Session (§ 6-Kasten) suchte die
> **Wortlaute** des gekippten § 3.2-Absatzes — er konnte außerhalb von
> § 3.2 strukturell nichts finden. Ein Prüfmuster, das nicht treffen
> kann, sieht im Log wie ein sauberes Negativ aus (CLAUDE.md).

1. **Firmierung und Name** — der Brief trägt beides sichtbar. Sperrposten
   **F-7** (Projektquelle § 7 Punkt 0a: „Firmierung für beide
   Förder-Anfrageentwürfe (GbR in Gründung, Rebrand-Name offen — sperrt
   den Versand)"). ⚠️ **Die zitierte Projektquellen-Formulierung „sperrt
   den Versand" ist durch die Rn.-87-Verschärfung überholt** — F-7 sperrt
   nach dem Bestand bereits den ersten Datensatz (§ 3.2, Nachtrag
   17.08.); das Zitat bleibt im Originalwortlaut stehen, weil es die
   Quelle wiedergibt. ① Derselbe Sperrposten trifft den Werbebrief;
   zusätzlich sind die **Geschäftsbrief-Pflichtangaben** streitig, aber
   nach Rechtsmatrix A7 sicherheitshalber aufzunehmen (② A7:
   „Da die Angaben ohnehin in den Briefbogen gehören, ist die sichere
   Wahl, sie aufzunehmen").
2. **Die sechs D2-Bau-Pflichten** der Rechtsmatrix + die vier
   Weg-b-Pflichten aus D3 Punkt 2 — operativ ausgeführt in
   `akquise/listenbau-regelwerk.md` § 3 (D2) und § 2.3 (Weg b).
3. **Zielkundenliste** nach dem Regelwerk (AKQ2, noch nicht begonnen).
4. **Briefbogen/Layout ohne Abmahnfallen** — keine Formular-,
   Rechnungs- oder Vertragsverlängerungs-Anmutung, keine fingierte
   Persönlichkeitsanmutung, Werbecharakter nach dem Öffnen sofort
   erkennbar (② A7, BGH I ZR 157/10 „Branchenbuch Berg" / heute
   § 5a Abs. 4 UWG).
5. **Art.-14-Information + Art.-21-Abs.-4-Widerspruchshinweis IM Brief**,
   optisch vom Werbetext getrennt — der Punkt, an dem Briefwerbung 2026
   nachweislich untersagt wurde (② A7, LG Düsseldorf 38 O 243/23).
6. **Rückkanal im Brief selbst** — siehe die Warnung direkt unten.

> ⛔ **Der Brief hat keinen eingebauten Nachfasskanal — das ist die
> gefährlichste Planungsfalle dieses Kanals.** Die Rechtsmatrix sagt
> ausdrücklich: „**Kein Rückschluss auf andere Kanäle:** Dass der Brief
> zulässig war, macht die Nachfass-E-Mail nicht zulässig" (② A7). Für
> den **Nachfass-Anruf** gilt dieselbe Logik: § 7 Abs. 2 Nr. 1 UWG
> verlangt einen „konkreten, aus dem Interessenbereich des Angerufenen
> herzuleitenden Grund" — ein **von uns** verschickter Brief ist kein
> Umstand aus dem Interessenbereich des Angerufenen.
> **Belegstand: Die Frage „trägt ein vorausgegangener eigener Werbebrief
> die mutmaßliche Einwilligung für den Nachfass-Anruf?" ist in der
> Rechtsmatrix nicht behandelt — sie ist damit für uns UNGEKLÄRT, nicht
> erlaubt.** Bis zur Klärung gilt die Vorsichtsregel: **kein
> Nachfass-Anruf ohne eigenständigen, belegten Anlass.** Als Nebenbefund
> an MKT-HANDEL übergeben (§ 9, N-1).
>
> **Konsequenz für den Bau:** Der Rücklauf muss **im Brief selbst**
> angelegt werden (Rückantwort-Weg, den der Empfänger von sich aus
> geht). Was für Welle 1 gebaut wird, entscheidet über die
> Antwortquote — und die Antwortquote entscheidet über die
> Stückzahlen in § 4.

### K2 · Persönlicher Vorkontakt → Telefon *(D1-Rang 2)*

| | |
|---|---|
| **Rechtsstand** | ⚠️ zulässig **nur** bei belegbarem konkretem Anlass; Branchenpassung genügt nicht (② A2, BGH I ZR 191/03). Rufnummer immer anzeigen |
| **Vorlauf** | **Kurz** — die Beziehungen, aus denen der Anlass entsteht, existieren teils schon |
| **Aufwand je Kontakt** | Hoch pro Stück (Anbahnung + Gespräch), aber mit der höchsten Trefferquote je Kontakt (④ Annahme) |
| **Taktung** | Einzelfall, nicht Welle |
| **Skalierbar?** | **Nein** — begrenzt durch das vorhandene Netzwerk |
| **Frist-tragend?** | ✅ **Ja — dies ist der einzige Kanal, der bis 13.11. plausibel einen Abschluss tragen kann** (§ 4) |

**Was der belastbare Weg ist:** die **protokollierte Rückrufzusage**
(„rufen Sie mich nächste Woche an") aus einem persönlichen Vorkontakt —
dann ist die streitige Mutmaßungsfrage gar nicht zu entscheiden (② A2).
Was protokolliert wird und wie, steht im Regelwerk (R-A2.1 in § 4.2 und Feld F-10 in § 6).

**Anlass-Quellen, die im Bestand belegt sind:**

- **Pilot-Umfeld / Betreiber-Netzwerk** (Kayhan Rasuly). ⚠️ **Mit
  Offenlegungspflicht:** Kayhan Rasuly ist Entscheider bei **zwei der
  drei** Pilotobjekte und zugleich Antragsteller der WTSH-Förderanträge;
  Offenlegung ist „Bau-Pflicht in BELEG4" (① `STATUS.md`, R7-Befund). Wer
  über diese Schiene akquiriert, trägt die Verflechtung in die
  Referenz-Erzählung.
- **DEHOGA-/Verbandsveranstaltungen, Tourismusvereine, Stammtische**
  (③ — als Kaufweg dieser Zielgruppe beschrieben in
  `protokolle/R00-planpruefung-2026-08-09.md` § (c) Punkt 3; **Rohbericht
  eines Prüf-Agenten, keine eigene Erhebung**).
- **Messen.** ⚠️ **Die Internorga fällt als Frist-Instrument aus:** Sie
  ist in CLAUDE.md und Projektquelle als „Internorga Hamburg (März)"
  geführt — der nächste März liegt **hinter** dem 13.11.2026. Sie ist
  Rückwärts-Anker für den Lead-Prozess (② A4: „Der Lead-Prozess muss
  **vor** der Messe stehen"), **kein Kanal für den ersten Abschluss**.
  Ein Messetermin 2027 ist im Repo nicht belegt (H-5).

### K3 · Fremde Verteiler statt eigener *(D1-Rang 3)*

| | |
|---|---|
| **Rechtsstand** | ⚠️ **in der Rechtsmatrix nicht als eigener Kanal geprüft.** Teil A hat keinen Abschnitt zu fremden Verteilern; D1 nennt ihn nur als Rangplatz mit der Begründung „der Verband versendet an **seine** eigenen Einwilligungen" (② D1 — Rangfolge-Tabelle, keine Zulässigkeitsprüfung). **Offene Frage, die niemand gestellt hat:** Deckt die Einwilligung der Verbandsempfänger Werbung **für uns**? Die Quelle verlangt in A6, dass ein Einwilligungstext „welche Produkte oder Dienstleistungen welcher Unternehmen" benennt. **Vor der ersten Platzierung klären** (Nebenbefund N-8) |
| **Vorlauf** | **Mittel bis lang** — Redaktions-/Anzeigenschluss, Verbandsentscheid; **nicht erhoben** (H-4) |
| **Aufwand** | Einmalig hoch (Beitrag/Anzeige), dann Streuwirkung ohne Stückkosten je Kontakt |
| **Skalierbar?** | Nein — Zahl der Verteiler ist begrenzt |
| **Frist-tragend?** | ⚠️ Nur indirekt: erzeugt eingehende Anfragen (→ K4), nicht selbst Abschlüsse |

**Konkrete Andockstellen im Bestand:**

- **DEHOGA-Newsletter, „über 1.400 Adressaten"** — ② über die
  Rechtsmatrix D1, die den Befund R05-A zitiert. ⚠️ **Die Zahl ist von
  hier aus zweite Hand; vor jeder Verwendung nach außen an der
  R05-A-Fundstelle prüfen.**
- **DEHOGA-HH-Digital-Lücke** als „konkreteste Andockstelle" und
  **IHA-Platzhirsch Online Birds** — beides Nebenbefunde aus R05-A, die
  die Projektquelle ausdrücklich an MKT-AKQ adressiert (①
  `projektquelle-mkt.md` § 7, Block (c2)).
- **Fach-/Regionalpresse** (AHGZ, Tophotel, Regionalblätter) — als
  AKQ1-Kandidat in der Projektquelle § 2 geführt, Konditionen nicht
  erhoben.

⚠️ **Nicht verwechseln:** Zu DEHOGA SH liegt bereits ein Entwurf
`fund/erhebung/entwurf-anfrage-dehoga-sh.md` vor — der betrifft
**Strukturdaten für FUND2**, nicht die Platzierung im Verteiler. Eine
Verteiler-Anfrage ist ein eigener Vorgang mit eigenem Adressaten
(Baustein `aussenkorrespondenz`: Kanal- und Adressaten-Prüfung vor dem
ersten Satz).

### K4 · Eingehende Anfragen erzeugen *(D1-Rang 4)*

| | |
|---|---|
| **Rechtsstand** | ✅ — der BGH deckt genau diese Richtung ausdrücklich (② A1, I ZR 197/05 Rn. 22) |
| **Vorlauf** | **Der längste von allen** — Website hängt am Namensentscheid (MKT-WEB startet laut CLAUDE.md erst danach) |
| **Aufwand** | Hoch im Aufbau, danach laufend gering |
| **Frist-tragend?** | ⚠️ Als Abschluss-Kanal bis 13.11. **unwahrscheinlich**; als Verstärker der anderen Kanäle ab sofort wertvoll |

**Bereits gesicherte Bausteine (kein Neubau nötig):** die
**masunt-Listungszusage** (Originalwortlaut im Referenz-Register,
Logo archiviert) und die **Telkon-Listungszusage** (Register, R07-B) —
① über `projektquelle-mkt.md` § 7 / STATUS.md. ⚠️ **Telkon ist
blockiert:** „Telkon-**Logo** anfordern (Außenpost, Versand User — ohne
Logo ist die Listungszusage nicht umsetzbar)" (① Projektquelle § 7 Punkt
0a). Das ist ein Ein-Handgriff-Posten mit sofortiger Kanalwirkung (H-6).

### K5 · Newsletter mit eigener Anmeldung *(D1-Rang 5)*

| | |
|---|---|
| **Rechtsstand** | ✅ nur mit **selbst angemeldeten** Adressen; Tracking braucht eine **eigene** Einwilligung; Tool muss Tracking **pro Empfänger** abschaltbar können (② A6, K.-o.-Kriterium) |
| **Vorlauf** | Aufbau ab sofort möglich, **Betriebsschwelle ~100+ relevante Kontakte** (③ `R00-planpruefung` § (c) Punkt 2 — Agenten-Einschätzung, keine Messung) |
| **Frist-tragend?** | ❌ **Nein.** In dieser Phase Infrastruktur, kein Akquisekanal |

**Was jetzt zählt:** die Einwilligungen ab dem **ersten** Kontakt
DSGVO-sauber einsammeln (Lead-Bogen, D2 Punkt 5) — nicht das Tool.
Die Tool-Auswahl ist ausdrücklich **nicht** Gegenstand dieser Session.

### Kanäle der AKQ1-Kandidatenliste, die in D1 nicht als eigener Rang stehen

Die Projektquelle (§ 2, AKQ1) führt eine **breitere** Kandidatenliste als
die fünf D1-Ränge. Damit nichts still verschwindet, hier die Zuordnung:

| Kandidat (Projektquelle § 2) | Verortung in D1 | Bemerkung |
|---|---|---|
| Founder-Direktvertrieb | teils **K2** (Telefon mit Anlass), teils **K1** (Brief) | ⚠️ Die R00-Fassung dieses Kandidaten nennt „Telefon, E-Mail, Vor-Ort" — **die E-Mail-Variante ist durch die Rechtsmatrix überholt** (A1) |
| Referenz-/Empfehlungsmechanik | **K2** (erzeugt den konkreten Anlass) + **K4** | Wichtigster Beschleuniger; hängt an MKT-BELEG |
| Apaleo-Ökosystem / App-Store / Partnerstatus | **K4** (eingehende Anfragen) | Eigener Kandidat ohne D1-Rang — Store-Listing ist ein Sichtbarkeits-, kein Versandkanal |
| DEHOGA / Verbände | **K3** | |
| Internorga Hamburg (März) | **K2** | ⚠️ Liegt hinter dem Fristanker (s. o.) |
| Fach-/Regionalpresse | **K3** | |
| LinkedIn | **K4** (Sichtbarkeit) | ⛔ **Nicht als Versandkanal** — werbliche DM unzulässig (② A3) |
| Newsletter-Aufbau | **K5** | |

---

## 3. Die Rückwärtsrechnung

**Muster:** `beleg/baseline-messplan.md` § 5 (Rückwärtsrechnung vom
Livegang mit konservativem Planungsanker + Erfragungs-Handgriff; im
`lehren-register.md` als bewährtes Muster geführt).

### 3.1 Die Kette rückwärts vom Abschluss

Jede Stufe trägt ihre Belegstufe. **Alle Dauerangaben der Stufen S1–S4
sind ④-Annahmen** — sie sind der Sinn der Rechnung, nicht ihr Ergebnis:

| Stufe | Was passiert | Dauer (④ Annahme) | Spätester Zeitpunkt |
|---|---|---|---|
| **S0** | **Unterschriebener Vertrag** | — | **Fr 13.11.2026** |
| **S1** | Angebot liegt vor → Prüfung/Rückfragen/Entscheidung beim Inhaber | 3 Wochen | Angebot raus bis **Fr 23.10.2026** |
| **S2** | Erstgespräch → Bedarf geklärt → Angebot erstellt (ggf. Demo) | 3 Wochen | Erstgespräch bis **Fr 02.10.2026** |
| **S3** | Erstkontakt → Reaktion → Termin | 2–3 Wochen | Erstkontakt-Welle 1 raus bis **Fr 11.09.2026** |
| **S4** | Liste + Pflichtbausteine gebaut, Brief produktionsfertig | 3–4 Wochen | Baustart spätestens **Fr 14.08.2026** (bei 4 Wochen) bzw. **Fr 21.08.2026** (bei 3 Wochen) — *Zählweg: 11.09. − 28 Tage = 14.08.; 11.09. − 21 Tage = 21.08.* |
| **S5** | Firmierung/Name steht (Voraussetzung von S4) | — | **spätestens Fr 14.08.2026** |

> ⚠️ **S4 und S5 fallen bei konservativer Lesart auf denselben Tag.** Das
> ist kein Rundungsproblem, sondern die eigentliche Aussage: Bei
> vierwöchiger Baudauer muss der Name **am selben Tag** stehen, an dem
> der Bau beginnt — es gibt zwischen beiden **null Tage Puffer**.
> *(Vorfassung nannte hier „Baustart spätestens Mo 17.08." — das war mit
> der eigenen Dauerangabe unvereinbar: 17.08. + 28 Tage = 14.09., also
> drei Tage NACH dem S3-Termin. Ein „spätestens" muss die längste Dauer
> der eigenen Spanne verwenden. Gefunden vom Prüfer R08-A, Befund P-12.)*

> ⭐ **Das Ergebnis der Rechnung ist nicht die Stückzahl, sondern eine
> Terminaussage: Der kritische Pfad läuft über den Namens- und
> Firmierungsentscheid, nicht über die Akquise-Kapazität.** S5 liegt auf
> **Fr 14.08.2026** — bei Erstellung dieses Absatzes (Di 11.08.2026) drei
> Tage später, **seither verstrichen** (Stand Mo 17.08.2026). Und der
> zugehörige Gate-Termin ist bereits
> als terminkritisch geführt: StB-Anruf zur GbR-Namensführung **vor der
> Gewerbeanmeldung ~Mitte August** (① STATUS.md „Nächster konkreter
> Schritt" Punkt 1; MKT-MARKE2 wartet darauf).
> ⚠️ **Stand dieses Gate-Termins am Mo 17.08.2026:** STATUS.md führt ihn
> als *User-Zusage Di 18.08.* und stellt zugleich klar, die zweite dort
> genannte Angabe („~KW 34/35") sei „derselbe Vorgang, kein zweiter
> Termin". Ob der Anruf stattgefunden hat, ist im Repo weiterhin nicht
> dokumentiert; ein Beleg trägt den Stand seines Datums. **Der Stand des
> StB-Termins ist damit die erste Frage des Tages** (H-8), nicht eine
> Randnotiz.
> ⚠️ **Und der Kernsatz dieses Kastens gilt nur auf der Namens-Achse:**
> Nach dem Bestand hat der Terminpfad **drei** Gates — F-7, O-9 und die
> sieben Bau-Pflichten —, und das schwerste (O-9) liegt beim
> anwaltlichen Rat. Der Scope-Vermerk dazu steht in § 3.2 (Nachtrag
> 17.08., Aussagen 2/4); wer nur diesen Kasten liest, entnähme sonst:
> Name steht → Bau läuft.
>
> > 📌 **REPARATUR 17.08.2026 (R18-C) — zwei alternde Relativangaben.**
> > Vorfassungen: *S5 liegt drei Tage nach heute* und, zum StB-Termin,
> > *⚠️ Und dieser Gate-Termin ist bereits überfällig: STATUS.md führt
> > ihn als „User-Handgriff Mo 10.08." — das war gestern* (Kopfsatz
> > ergänzt nach Gegenlese G-15; er trug die Wertung *überfällig*, die
> > § 3.2 zu *unklar* korrigiert hatte). Beide waren zum Erstellungsstand (Di 11.08.2026) richtig
> > und altern still mit jedem Tag; § 3.2 führt sie als Aussagen 5 und 6
> > unter *Nebenbefund (alternde Relativangabe)*. Ersetzt durch absolute
> > Daten mit Standvermerk, Wochentage per `date` erhoben
> > (Positivkontrolle: 01.01.2026 = Donnerstag). **Der Zeiger auf den
> > Scope-Vermerk** ist eine bewusste Zugabe dieser Session: § 3.2 hat
> > die Präzisierung, § 3.1 trug sie nicht — und § 3.1 ist die Stelle,
> > an der der Leser ankommt. **Kein Termin wurde neu gesetzt.**
>
> **Damit hat die November-Frist bereits heute keinen Puffer mehr im
> Kaltkanal.** Das ist ein Befund, keine Planungsschwäche — und er ist
> der Grund, warum § 4 die Kanäle nach Fristnähe neu sortiert.

### 3.2 Was passiert, wenn S5 reißt — zwei Pfade, Entscheid beim User

| Pfad | Beschreibung | Preis |
|---|---|---|
| **(a) Warten** | Kaltkanal-Aufbau startet erst nach dem Namensentscheid | Jede Woche Verzug geht **1:1** vom Fenster ab; ab ~4 Wochen Verzug ist K1 als Frist-Kanal rechnerisch erledigt |
| **(b) Arbeitstitel** | Akquise startet unter Arbeitstitel/bestehender Firmierung, Rebrand folgt | Doppelte Außenwirkung (zwei Namen bei denselben Empfängern), Nachzieh-Aufwand, Vertrauensfrage. **Als Notfallpfad in `R00-planpruefung` § Top-5 Punkt 2 vorgeschlagen** (③, Agenten-Empfehlung) — ⚠️ **dort an eine Bedingung gebunden**, die hier nicht verloren gehen darf: „**Notfallpfad nach 4 Wochen**: Akquise startet unter Arbeitstitel". Es ist also ein **gestufter** Rückfall, keine sofortige Entweder-oder-Wahl. ⚠️ **Nach der Rn.-87-Verschärfung trägt dieser Pfad eine zusätzliche offene Frage** — s. Nachtrags-Kasten unten, Abschnitt *Was der Nachtrag für die zwei Pfade bedeutet* |

⚠️ **Beides hat Außenwirkung — dieser Plan wählt nicht.** Entscheidung
**E-A1** in § 8.

> ⚠️ **ÜBERHOLT — den Nachtrags-Kasten darunter mitlesen (R17-C,
> 17.08.2026).** Der folgende Absatz ist in seinem Kern seit R9
> (12.08.2026) gekippt: Die Zielkundenliste ist **nicht** sofort baubar,
> und es hängt **nicht** nur der Versand am Namen. Der Absatz bleibt im
> **Originalwortlaut** stehen — er ist die Herkunft der Terminlogik
> dieses Abschnitts und wird in § 3 mehrfach vorausgesetzt. **Was von
> ihm weiter gilt, ist unten positiv aufgelistet** (eine
> ÜBERHOLT-Markierung ist kein Blankoscheck zum Weglassen).

**Was NICHT auf S5 wartet** (sofort baubar, ohne Namensbindung): die
gesamten D2-/Weg-b-Pflichtbausteine (Datenschutzinformation als Rohtext,
Werbesperrdatei, VVT-Eintrag, Abwägungsdokumentation, Quellenprotokoll,
Lead-Bogen), die Zielkundenliste selbst, der Gesprächsleitfaden und die
K2-Anlass-Anbahnung. Nur der **Versand** hängt am Namen.

> ### 📌 NACHTRAG 17.08.2026 (R17-C) — der Listenaufbau ist gesperrt, nicht erst der Versand
>
> **Zuerst die Belegkraft, dann die Folge** (der Vorbehalt darf beim
> Nachziehen nicht verloren gehen): Die Verschärfung ruht auf **einem
> einzigen Satz** aus LG Düsseldorf, 38 O 243/23 Rn. 87 — die Erfüllung
> der dort behandelten Verpflichtung erfordert „Vorkehrungen, die bereits
> vor dem ersten Verarbeitungsschritt in die Wege geleitet sein müssen"
> —, und dieser Satz steht nach dem Bestandsvermerk der Rechtsmatrix
> (Stand `926ca3c`, 17.08.2026, Befund R15A-N-4 mit Ergänzung M-5)
> **„nicht in der tragenden Absagebegründung"**: Tragend ist Rn. 84/85,
> Rn. 87 ist die „zweite, hilfsweise Abwehr desselben Einwands".
>
> **⚠️ Und die unbequemere Hälfte desselben Vermerks, die hier zuerst
> fehlte** *(ergänzt nach Gegenlese R17-C)*: **Rn. 86 verschärft die
> Frage zusätzlich.** Dieselbe Randnummer ordnet die Entgegennahme der
> angekauften Adressen und ihr Speichern für den Einsatz bei der
> Erstellung der Schreiben ausdrücklich dem **Vorfeld** zu — es seien
> Schritte, „die nicht Teil des von dem Kläger angegriffenen
> geschäftlichen Handelns sind, sondern in dessen Vorfeld stattgefunden
> haben". **Das ist genau unser Schritt: der Listenaufbau, auf den wir
> die Fälligkeit vorziehen** — das Gericht schiebt ihn aus dem
> Streitgegenstand heraus. Die Quelle sagt dazu ausdrücklich: „Wer die
> Belegkraft der Rn.-87-Ableitung dokumentiert, ohne das zu nennen,
> dokumentiert die schwächere Hälfte."
>
> Dieselbe Quelle hält gleichwohl fest — **vollständig zitiert, weil die
> zweite Hälfte des Satzes die Einschränkung trägt**: **„Die
> Vorsichtsannahme bleibt trotzdem in Kraft — ihre Belegkraft ist nur
> noch schwächer als der Rest dieses Vermerks nahelegt."** Der Grund für
> das Inkraftbleiben ist **nicht** eine zweite Fundstelle im Urteil,
> sondern die Risiko-Asymmetrie: „eine unbelegte Verschärfung kostet
> Zeit, eine unbelegte Entwarnung kostet den Fall". Ob ein nicht
> tragender Satz die Betriebsfolge trägt, ist **eine Frage an den
> Anwalt** (Teilfrage 6 zu Frage 2,
> `handel/anwalts-briefing-2026-08.md`) — dieser Plan beantwortet sie
> nicht.
>
> **Was daraus folgt (Stand des Bestands, nicht neue Rechtsauslegung):**
> „Der erste Verarbeitungsschritt ist der LISTENAUFBAU, nicht der
> Versand" (`akquise/interessenabwaegung-o8.md` § 9.1, Prüferbefund
> Q-04). Und einheitlich: „Es gilt einheitlich: F-7 (Firmierung), O-9
> (Art. 6 Abs. 4) und die Bau-Pflichten des § 10 sind vor dem ERSTEN
> DATENSATZ fällig, nicht erst vor dem ersten Brief." (o8 § 10-Nachtrag).
> Der Kurz-Einstieg führt es als Engpass: F-7, O-9 und die **sieben**
> Bau-Pflichten „sperren damit schon den ersten Datensatz" (STATUS.md
> „Nächster
> konkreter Schritt" Punkt 0). Weitere Fundstellen derselben Aussage:
> `akquise/listenbau-regelwerk.md` § 3 Pflicht 4 (R09-A-Nachtrag).
> *(Zum Nenner „sieben": Das Regelwerk führt B-1…B-7 als aktiv, B-8 ist
> in der Quelle gestrichen — Regelwerk § 12, O-8-Zeile, Nachtrag R13-B.
> Die Angabe „acht" in o8 § 10 und Regelwerk §§ 3/12 ist der Stand vor
> dieser Streichung; hier gilt der STATUS-Wortlaut.)*
>
> **⛔ Damit ist von der Aufzählung oben gesperrt:**
> - **die Zielkundenliste selbst** — sie ist der erste
>   Verarbeitungsschritt, nicht seine Vorbereitung. Der Satz „sofort
>   baubar" gilt für sie nicht mehr.
> - **die Aussage *Nur der Versand hängt am Namen*** — F-7 sperrt nach
>   dem Bestand oben bereits den ersten Datensatz, nicht erst den Brief.
>
> **✅ Was von der Aufzählung weiter gilt — positiv aufgelistet, je mit
> Bestandsbeleg.** ⚠️ **„Gebaut" heißt hier: das Werkzeug existiert und
> ist ohne Namensentscheid entstanden — es heißt NICHT „einsatzbereit".**
> Sowohl `akquise/sperrdatei-struktur.md` als auch
> `akquise/wellenprotokoll-vorlage.md` tragen im Kopf ein ausdrückliches
> **⛔ GATE** („diese Datei ist noch NICHT scharf zu stellen" bzw. „es
> darf noch keine Welle geben"). Bau und Scharfstellung sind zwei
> Zustände. *(Nachgemessen nach Gegenlese R17-C: 546 bzw. 667 Zeilen mit
> vollständiger Blockstruktur — „gebaut" ist belegt, nicht behauptet.)*
> - **Abwägungsdokumentation:** ohne Namen gebaut und abgeschlossen —
>   `akquise/interessenabwaegung-o8.md` (R9, 12.08.2026).
> - **Werbesperrdatei (Struktur/Ablauf):** ohne Namen gebaut —
>   `akquise/sperrdatei-struktur.md` (R15-E, 14.08.2026). ⚠️ Der
>   BESTAND der Sperrdatei ist personenbezogen und gehört nicht ins
>   Repo (dort § 3/CLAUDE.md L-44) — gebaut ist die Form, nicht der
>   Inhalt.
> - **Quellenprotokoll je Adresse (Form):** als Regel gesetzt —
>   `akquise/listenbau-regelwerk.md` § 5.3 (D2 Pflicht 6). Es füllt
>   sich erst mit dem Listenaufbau, der gesperrt ist.
> - **Wellenprotokoll:** ohne Namen gebaut —
>   `akquise/wellenprotokoll-vorlage.md` (R15-E). *(Im Original oben
>   nicht genannt; es ist nach o8 § 10 B-6 Pflicht und gehört in diese
>   Positivliste.)*
> - **VVT-Eintrag:** als Gerüst vorhanden, aber **nicht abschließend** —
>   o8 § 8 führt für „lit. a Verantwortlicher" ausdrücklich
>   *(Firmierung offen — F-7; ohne sie ist der Eintrag nicht
>   abschließend)*. Also: baubar ja, fertig nein.
> - **Datenschutzinformation:** als **Rohtext** ohne Namen baubar, die
>   Veröffentlichung nicht — die ladungsfähige Anschrift und die
>   Firmierung hängen an F-7 (`akquise/listenbau-regelwerk.md` § 3
>   Pflicht 1, Abschnitt „Abhängigkeit"; o8 § 10 F-7: ohne Firmierung
>   sind die Art.-14-Pflichtangaben nicht erfüllbar). Die
>   Original-Formulierung „als Rohtext" trifft es also — die
>   fertige Beileger-Fassung nicht.
> - **Lead-Bogen für Messen** (D2 Pflicht 5) und **Gesprächsleitfaden**:
>   im Bestand ist keine Namens- oder Listen-Abhängigkeit dokumentiert.
>   ⚠️ **Belegstufe: Negativ aus Aktenlage** (grep über
>   Regelwerk/o8/Akquiseplan, 17.08.2026) — kein positiver Beleg, dass
>   sie namensfrei sind, sondern kein Gegenbeleg. Wer sie baut, prüft
>   die Namensfrage am Werkstück.
> - **K2-Anlass-Anbahnung:** unberührt. K2 ist der persönliche
>   Vorkontakt, er läuft nicht über eine Adressliste aus fremder
>   Quelle — die Rn.-87-Sperre betrifft ihn nicht. *(Dass K2 dadurch
>   der einzige fristtragende Kanal ist, sagt § 4.3, nicht dieser
>   Kasten.)*
>
> **Was der Nachtrag für die zwei Pfade bedeutet:**
> - **Pfad (a) Warten** ist in seiner Reihenfolge unberührt: *Kaltkanal-
>   Aufbau startet erst nach dem Namensentscheid* widerspricht Rn. 87
>   nicht. **⚠️ Aber die Formulierung darf nicht als Freigabe gelesen
>   werden** *(präzisiert nach Gegenlese R17-C — die Erstfassung dieses
>   Kastens schrieb *genau die Reihenfolge, die Rn. 87 verlangt* und
>   stellte damit das Ein-Gate-Modell wieder her, das dieser Kasten
>   gerade abschafft)*: Der Namensentscheid ist eine **notwendige, keine
>   hinreichende** Bedingung. Nach ihm bleibt der Listenaufbau gesperrt,
>   solange **O-9** offen ist — und O-9 ist „**OFFEN — weder entschieden
>   noch geprüft**", das Gate ist anwaltlicher Rat, nicht eine
>   Marketing-Session (Rechtsmatrix O-9-Kasten; STATUS.md Punkt 0: „O-9
>   seit R13 GEFÜHRT, Rechtsprüfung offen"). Dazu die Bau-Pflichten.
>   Nur die Preisangabe verschiebt sich nach vorn — die Verzugsuhr läuft
>   ab dem gesperrten **Listenaufbau**, nicht ab einem gesperrten
>   Versand.
> - **Pfad (b) Arbeitstitel** trägt eine **zusätzliche offene Frage, die
>   dieser Plan nicht beantwortet:** Wenn F-7 bereits den ersten
>   Datensatz sperrt, muss ein Arbeitstitel die Rolle des
>   **Verantwortlichen** in der Art.-14-Information ausfüllen können.
>   Ob eine Firmierung, die kurz darauf wechselt, diese Pflichtangabe
>   erfüllt — und was der Rebrand für bereits informierte Adressaten
>   auslöst —, ist eine **Rechtsfrage: Frage an den Anwalt**
>   (`handel/anwalts-briefing-2026-08.md`; o8 § 10 F-7 hält fest, dass
>   ohne Firmierung die Art.-14-Pflichtangaben nicht erfüllbar sind).
>   ⚠️ Belegstufe dieses Hinweises: **eigene Ableitung aus dem
>   Bestand, keine Quellenaussage** — im Bestand ist die Frage nach
>   Suchweg vom 17.08.2026 (grep „Arbeitstitel" über
>   `akquise/`, `handel/`) nirgends gestellt. Sie ist damit ein
>   **Nebenbefund für MKT-HANDEL**, kein Ergebnis dieses Plans.
>
> **Gegengelesene Terminlogik § 3 — je AUSSAGE, nicht je Kasten**
> *(Zählschnitt korrigiert nach Gegenlese R17-C: Die Erstfassung zählte
> *11 Aussagen, 2 gekippt, 7 unberührt, 2 Nebenbefunde* — die Summe
> stimmte, aber der ⭐-Kasten war **doppelt** gezählt, einmal als
> unberührt und einmal als Träger eines Nebenbefunds, und der ⚠️-Gate-
> Kasten fehlte ganz. Eine Summenprobe, die nicht anders ausfallen kann,
> ist keine Zählung.)*
>
> **Prüfgegenstand sind die 12 tragenden Einzelaussagen des § 3.** Ein
> Kasten kann mehrere tragen — deshalb ist der Nenner an die Aussage
> gebunden, nicht an den Absatz:
>
> | # | Aussage (Fundort in § 3) | Einstufung |
> |---|---|---|
> | 1 | S4-Zeile „Liste + Pflichtbausteine gebaut" (§ 3.1) | unberührt |
> | 2 | S5-Zeile „Firmierung/Name steht (Voraussetzung von S4)" (§ 3.1) | **vereinbar nur auf der Namens-Achse** — s. Scope-Vermerk unten |
> | 3 | Null-Puffer-Kasten S4/S5 (§ 3.1) | unberührt |
> | 4 | ⭐-Kasten: kritischer Pfad läuft über den Namensentscheid (§ 3.1) | **vereinbar nur auf der Namens-Achse** — s. unten |
> | 5 | ⭐-Kasten: *S5 liegt drei Tage nach heute* (§ 3.1) | Nebenbefund (alternde Relativangabe) |
> | 6 | ⚠️-Gate-Kasten: StB-Termin überfällig, *das war gestern* (§ 3.1) | Nebenbefund (s. Präzisierung unten) |
> | 7 | *November-Frist hat im Kaltkanal keinen Puffer* (§ 3.1) | unberührt |
> | 8 | Pfad (a) Warten (§ 3.2, Tabelle) | unberührt in der Reihenfolge, **präzisiert** (notwendig ≠ hinreichend) |
> | 9 | Pfad (b) Arbeitstitel (§ 3.2, Tabelle) | **nachgezogen** (offene Rechtsfrage) |
> | 10 | *Beides hat Außenwirkung — dieser Plan wählt nicht*, E-A1 (§ 3.2) | unberührt |
> | 11 | Absatz *Was NICHT auf S5 wartet … sofort baubar* (§ 3.2) | **gekippt und nachgezogen** |
> | 12 | Muster-Verweis auf `beleg/baseline-messplan.md` § 5 (§ 3-Kopf) | unberührt |
>
> **Zählweg — jede Nummer genau einmal:** 12 Aussagen =
> **2 gekippt und nachgezogen** (9, 11) · **3 präzisiert** (2, 4, 8) ·
> **2 Nebenbefunde** (5, 6) · **5 unberührt** (1, 3, 7, 10, 12).
> Summe 2+3+2+5 = 12. ⚠️ **Die Aussagen 2 und 4 sind bewusst NICHT als
> „unberührt" geführt** — genau das war der Fehler der Erstfassung.
> *(Und diese Zeile ist beim zweiten Anlauf entstanden: der erste
> Korrekturversuch schrieb „6 unberührt" und nannte fünf Nummern. Die
> Einstufungs-Achse ist die Stelle, an der eine stimmende Summe nichts
> beweist.)*
>
> **Scope-Vermerk zu Aussage 2 und 4 (Aussagen 2/4):** § 3.1 führt S5 als
> „Voraussetzung von S4" und den Namensentscheid als *den* kritischen
> Pfad. Auf der **Namens-Achse** ist das richtig und mit der Verschärfung
> vereinbar. **Als Aussage über den kritischen Pfad insgesamt ist es ein
> Superlativ ohne Scope:** Nach dem Bestand hat der Pfad **drei** Gates —
> F-7, O-9 und die sieben Bau-Pflichten —, und das schwerste (O-9) liegt
> weder beim User noch bei MKT-AKQ, sondern beim anwaltlichen Rat. Ein
> Leser, der nur § 3.1 liest, entnimmt sonst: Name steht → Bau läuft.
> **Die Terminrechnung des § 3.1 bricht dadurch nicht** (sie rechnet
> Dauern, nicht Gates) — aber ihre Aussage über den Engpass ist nur
> vollständig, wenn O-9 mitgelesen wird.
>
> **Präzisierung zu Aussage 6 (StB-Termin):** Der Gate-Kasten stützt sich
> auf **eine** von **zwei** STATUS-Angaben. STATUS.md nennt den StB-Anruf
> in Punkt 1 als „User-Handgriff Mo 10.08." **und** in Punkt 0 als
> „(StB ~KW 34/35)". **KW 34/2026 beginnt am Mo 17.08.2026** (per
> Werkzeug erhoben, Positivkontrolle: 01.01.2026 = Donnerstag) — die
> zweite Angabe ist also nicht verstrichen, sondern beginnt heute. Ob
> STATUS zwei Termine für dieselbe Handlung führt oder zwei verschiedene
> Handlungen meint, ist **hier nicht entschieden** und gehört zur
> Leitsession; der Kasten oben ist damit **nicht** einfach „überfällig",
> sondern **unklar**.
>
> **Herkunft dieses Kastens:** R16C-N-1 (Nebenbefund der R16-C-Session),
> Auftrag Tagesplan 17.08.2026 Strang R17-C Punkt 1.
>
> ⚠️ **Was dieser Kasten NICHT erfüllt — Reichweite ausdrücklich
> ausgewiesen** *(Korrektur nach Gegenlese R17-C; die Erstfassung
> behauptete hier, der STATUS-Nachzug sei *mit diesem Kasten erfüllt*)*:
> STATUS.md Punkt 0 verlangt seit R9, „der Akquiseplan ist entsprechend
> nachzuziehen" — **der Plan, nicht dieser Abschnitt.** Nachgezogen sind
> § 3.2 und § 4.3. **Unverändert tragen die alte Ein-Gate-Logik:**
> § 6 Terminplan (Zeile *Zielkundenliste Welle 1 nach Regelwerk* nennt in
> der Spalte *Hängt ab von* **nur** das Regelwerk, während die
> Brief-Zeile darunter S5 führt · Zeile *D2-/Weg-b-Pflichtbausteine bauen
> — ohne Namensbindung* pauschal, obwohl für Pflicht 1 die Namensbindung
> oben festgestellt ist · S5-Zeile *geklärt ODER Entscheid E-A1
> (Arbeitstitel)* als gleichwertige Alternative, obwohl Pfad (b) oben
> eine offene Rechtsfrage trägt) · § 7 H-8 (*Er ist die Vorbedingung von
> S5 und damit des gesamten Terminpfads*) · § 8 E-A1 (*Die Kosten beider
> Wege stehen in § 3.2* — ohne Verweis auf den Vorbehalt hier).
> **Diese fünf Stellen liegen außerhalb des Dateiscope von R17-C** (§ 3.2,
> § 4.3 und die von § 3.2 abhängigen Sätze in § 3) und sind als
> **offener Posten an die Leitsession** gemeldet — sie sind die
> Ankunftsstellen, an denen ein Leser den Zeitplan holt.
>
> > ### ✅ ERLEDIGT-MARKE 17.08.2026 (R18-C, `106dc0e` + Nacharbeit)
> >
> > **Der Text oben bleibt im Originalwortlaut stehen** (er ist die
> > Quelle der Vorbehalte); diese Marke ergänzt nur seinen Stand — sie
> > streicht und ändert nichts. Auslöser: Gegenleser-Befund **G-2**
> > (ERFÜLLEN-Klasse, CLAUDE.md: wer einen benannten Offen-Posten
> > erfüllt, schließt ihn an seinem Träger — sonst schneidet die nächste
> > Runde daraus einen gegenstandslosen Auftrag).
> >
> > - **Alle fünf genannten Stellen sind repariert** — § 6 (drei Zeilen +
> >   Kasten), § 7 (H-8), § 8 (E-A1). Der Posten an die Leitsession ist
> >   damit **erledigt**; offen bleibt die **Vollzähligkeit der Meldung**:
> >   Der Gegenleser fand eine **sechste** Stelle in § 2 · K1 (repariert),
> >   eine siebte ist nicht ausgeschlossen.
> > - **Aussagen 5 und 6 der Tabelle oben** (*Nebenbefund — alternde
> >   Relativangabe*) sind ebenfalls **erledigt**: § 3.1 trägt jetzt
> >   absolute Daten mit Standvermerk.
> > - Die *Präzisierung zu Aussage 6* (StB-Termin: *hier nicht
> >   entschieden … sondern unklar*) ist von der Leitsession
> >   **beantwortet**: STATUS.md Punkt 1 führt seit dem 17.08. die
> >   Klarstellung „derselbe Vorgang, kein zweiter Termin" (Zusage für
> >   den Anruf: Di 18.08.). Der Terminplan-Handgriff H-8 bleibt davon
> >   unberührt ohne neuen Anker (§ 7).
> > - **Fundstellen-Korrektur (Gegenleser G-6):** Die Angabe *o8 § 10-
> >   Nachtrag* im Absatz oben ist falsch — der zitierte Satz steht in
> >   o8 **§ 11.1**, ⭐-Kasten „Fälligkeit dieser Posten" (12.08.2026).
> >   Der Originalwortlaut oben bleibt stehen; maßgeblich ist diese
> >   Korrektur.

---

## 4. Kapazität: was die Kanäle tatsächlich hergeben

### 4.1 Das Annahme-Register — alle ④ auf einen Blick

Jede Zahl dieses Abschnitts steht hier mit Herkunft und Handgriff. **Es
gibt in diesem Register keine belegte Konversionszahl** — wir haben noch
nie einen Kontakt gemacht:

| # | Annahme | Wert | Warum dieser Wert | Handgriff |
|---|---|---|---|---|
| **A-1** | Antwortquote Kaltbrief B2B | **1–3 %** | ④ **Erfahrungs-Spanne ohne Repo-Beleg.** Angesetzt als Spanne, nicht als Punktwert, gerade weil sie unbelegt ist | Ab Welle 1 messen (KPI-5) |
| **A-2** | Antwort → Erstgespräch | **50 %** | ④ Wer auf einen Kaltbrief antwortet, hat Interesse; die Hälfte davon als Termin ist konservativ-plausibel | messen |
| **A-3** | Erstgespräch → Angebot | **50–60 %** | ④ | messen |
| **A-4** | Angebot → Abschluss | **25–33 %** | ④ | messen |
| **A-5** | Sales-Zyklus gesamt (S1–S3) | **8–9 Wochen** | ④ gestützt auf die Beschreibung „Es ist ein Empfehlungsmarkt mit langsamen, aber loyalen Entscheidern." (③ R00 § (c)) — **Agenten-Einschätzung, keine Messung** | AKQ-H-2 |
| **A-6** | Eigene Wochenkapazität Briefe | **nicht erhoben** | Solo-Betrieb parallel zum Pilotprojekt; die Zahl kennt nur der User | **AKQ-H-2 (Pflicht vor jeder Wellenplanung)** |
| **A-7** | Portosatz / Stückkosten Brief | **nicht erhoben** | Keine Zahl aus dem Gedächtnis in ein Planungsdokument | H-3 |
| **A-8** | Mindest-Wellengröße für eine auswertbare Quote | **~300** | **Gerechnet, nicht angenommen:** P(0 Antworten) = (1 − p)^n; bei n = 300, p = 1 % ist P(0) = 0,049 (§ 4.3) | entfällt — Zählweg im Dokument |

### 4.2 Die Trichterrechnung — und was sie zeigt

**Rechenweg** (Kaltbrief allein, Ziel: **1** Abschluss):
Briefe = 1 ÷ (A-1 × A-2 × A-3 × A-4).

| Szenario | A-1 | A-2 | A-3 | A-4 | **Briefe für 1 Abschluss** |
|---|---|---|---|---|---|
| **pessimistisch** | 1 % | 50 % | 50 % | 25 % | **1.600** |
| **mittel** | 2 % | 50 % | 55 % | 30 % | **≈ 606** |
| **optimistisch** | 3 % | 50 % | 60 % | 33 % | **≈ 337** |

*(Zählweg je Zeile: Kehrwert des Produkts der vier Quoten, kaufmännisch
gerundet. Beispiel mittlere Zeile: 0,02 × 0,50 × 0,55 × 0,30 = 0,00165 →
1 ÷ 0,00165 = 606,1.)*

> ⭐ **Der harte Befund: Der Kaltbrief allein trägt die November-Frist
> nicht.** Selbst das optimistische Szenario verlangt **≈ 337
> personalisierte Briefe**, sämtlich in **einer** Welle bis 11.09. (S3)
> — und zwar zusätzlich zum Bau aller Pflichtbausteine im selben
> Zeitraum. Für einen Solo-Betrieb neben dem laufenden Pilotprojekt ist
> das nicht plausibel; die Größenordnung der eigenen Kapazität steht
> zwar als A-6 offen, aber die Lücke ist zu groß, als dass ihre
> Schließung von der Antwort abhinge.
>
> ⚠️ **Und die Zielgruppe deckelt die Menge zusätzlich:** In ganz
> Schleswig-Holstein gibt es **1.038 Hotelleriebetriebe** (① amtlich,
> `fund/erhebung/regionalstatistik-groessenklassen.md` § 4.4, 2024,
> vier Summenproben bestanden). Das pessimistische Szenario würde also
> **anderthalbmal den gesamten Landesbestand** verlangen — inklusive
> aller Betriebe, die nach § 3.3 des Positionierungspapiers gar nicht
> Zielgruppe sind. **Ein reiner Kaltbrief-Plan ist am eigenen Markt
> nicht durchrechenbar.**

### 4.3 Was daraus für die Kanalsteuerung folgt

**Die Frist und der Kanalaufbau sind zwei verschiedene Aufgaben — sie
werden getrennt geplant:**

| | **Fristaufgabe (bis 13.11.)** | **Aufbauaufgabe (ab jetzt, wirkt ab Q4/Q1)** |
|---|---|---|
| Trägt | **K2** (persönlicher Vorkontakt), gestützt durch **K4** (masunt/Telkon-Listungen) und **K3** (fremde Verteiler) | **K1** (Brief, wellenweise), **K4** (Website/Store), **K5** (Newsletter-Aufbau) |
| Menge | wenige Kontakte, hohe Qualität | viele Kontakte, gemessene Quoten |
| Engpass | vorhandenes Netzwerk (nicht vermehrbar) | Firmierung + Pflichtbausteine + Kapazität |
| Messgröße | Erstgespräche/Woche (KPI-1) | Reply-Quote je Welle (KPI-5) |

> ⚠️ **Auch diese Tabelle steht unter dem FUND2-Vorbehalt** (Kopf dieses
> Dokuments) — sie ist der Sache nach eine Kanal- und Aufgabenzuteilung
> und damit die Stelle, an der der Plan einer Mix-Entscheidung am
> nächsten kommt. **Was der Persona-Befund kippen kann:** die Zeile
> „Trägt" in beiden Spalten (wenn die Zielgruppe anders erreichbar ist
> als rechtlich hergeleitet), die Reihenfolge K1 ↔ K3 und die Annahme,
> dass K2 überhaupt genug Anlässe hergibt. **Was er nicht kippt:** die
> Rechtslage je Kanal (§ 2) und die Terminarithmetik (§ 3).

> 📌 **REPARATUR 17.08.2026 (R17-C), Befund R16C-N-2 — zwei Brüche an
> einer Naht, beide am git-Verlauf belegt**
>
> **Vorher stand hier:** die Blockquote-Zeile endete mit *… und die
> Terminarithmetik (§ 3). Er ist der*, und die Folgezeile *Kanal, mit
> dem die Pipeline nach dem ersten Abschluss trägt — und* lief **ohne
> `>`-Präfix** weiter. Zwei Fehler in einem:
> **(a) Formatbruch** — das Blockquote zerreißt beim Rendern mitten im
> Satz. **(b) Bezugsbruch** — grammatisches Subjekt von *Er* war der
> Persona-Befund; gemeint ist ein Kanal.
>
> **Was die Messung ergab (und was sie widerlegt):** Der Auftrag nahm
> an, das `>`-Präfix sei verloren gegangen und müsse ergänzt werden.
> **Das trägt nicht.** Im Erststand `d11535f` war die Passage überhaupt
> kein Blockquote, sondern Fließtext mit einem Vorspann, der das
> Subjekt nannte — *K1 wird deshalb nicht gestrichen, sondern
> umdatiert:* Ein `>`-Präfix hat an dieser Zeile **nie** gestanden; es
> zu ergänzen hätte den Fließtext (der zur Wellengrößen-Tabelle
> darunter führt) fälschlich in den FUND2-Vorbehaltskasten gezogen.
>
> **Ursache, mechanisch belegt:** Zwischen `d11535f` und `6e4daa5`
> (R08-A-Reparaturlauf) wurde der FUND2-Vorbehaltskasten hier
> eingefügt; sein Edit-Anker **konsumierte den Vorspann-Satz** und ließ
> das Fragment *Er ist der* am Kasten-Ende zurück. Das ist der
> CLAUDE.md-Fall L-38 (ein Edit-Anker, der den Anfang der Folgezeile
> konsumiert, zerlegt sie still) — der Bruch bestand seit `6e4daa5`
> durch `1da1327` und `5d7d78d` unbemerkt fort.
>
> **Reparatur:** Der Erststand-Vorspann ist byte-treu aus `d11535f`
> wiederhergestellt; das Fragment am Blockquote-Ende ist entfernt.
> Damit sind **(a) und (b) mit einem Griff behoben und beide belegt** —
> der Bezug von *Er* ist **nicht erschlossen, sondern die
> Original-Formulierung**: gemeint ist **K1** (Brief). Bestätigend am
> Kontext: die Tabelle oben führt K1 in der Spalte *Aufbauaufgabe (ab
> jetzt, wirkt ab Q4/Q1)*, die Messgröße dort ist die Reply-Quote je
> Welle (KPI-5), und der Folgesatz handelt von Welle 1.
> **Nichts erfunden, nichts abgeschwächt.**

**K1 wird deshalb nicht gestrichen, sondern umdatiert:** Er ist der
Kanal, mit dem die Pipeline **nach** dem ersten Abschluss trägt — und
Welle 1 ist zugleich die **Messwelle**, die A-1 bis A-4 zum ersten Mal
mit echten Zahlen belegt. Genau deshalb muss Welle 1 groß genug für eine
auswertbare Quote sein. **Wie groß, ist rechenbar** (A-8, Zählweg:
Wahrscheinlichkeit für null Antworten = (1 − p)^n):

| Wellengröße | P(0 Antworten) bei p = 1 % | bei p = 3 % | Aussagekraft eines Null-Ergebnisses |
|---:|---:|---:|---|
| 50 | 0,605 | 0,218 | **keine** — Null ist der wahrscheinlichste Ausgang |
| 100 | **0,366** | 0,048 | **gering** — Null bleibt fast so wahrscheinlich wie ein Treffer |
| 300 | 0,049 | ~0,000 | **belastbar** — Null spricht dann gegen die Botschaft |

> ⚠️ **Damit ist die zunächst gesetzte Schwelle „~100" nicht begründet**
> und wird ersetzt: Erst ab **~300 Stück** ist ein Null-Ergebnis ein
> Befund über die Botschaft statt ein Zufall. Zwischen 100 und 300 misst
> die Welle etwas, aber ein Nullwert bleibt uninterpretierbar.
> **Praktische Folge — die unbequeme:** Eine Welle, die groß genug für
> eine belastbare Messung wäre, liegt bereits in der Größenordnung, die
> § 4.2 als für einen Solo-Betrieb unrealistisch ausweist. Die
> Kaltbrief-Quote ist in diesem Zeitfenster **nicht sauber messbar** —
> das ist ein Befund, keine Aufforderung, die Schwelle zu senken.
> *(Vorfassung setzte „~100 Stück" ohne Zählweg und begründete sie mit
> dem 50er-Fall; Prüferbefund P-17.)*

> ⚠️ **Was dieser Abschnitt NICHT sagt:** Er sagt nicht, dass die Frist
> nicht erreichbar ist. Er sagt, dass sie **über K2 erreicht werden
> muss** und dass K2 nicht skalierbar ist. Ob genug tragfähige
> Vorkontakte existieren, ist eine Frage an den User (AKQ-H-2) — und die
> Antwort entscheidet, ob die Frist gehalten oder nachverhandelt wird.
> **Ein „wir schaffen das schon" ohne diese Zahl wäre eine Entwarnung
> ohne Quelle.**

### 4.4 Planungskonflikt 300er-Schwelle — Entscheidungsvorlage

> **Stand 17.08.2026 (R16-C), Prüfstand `0c4692f`.** Herkunft: Nebenbefund
> **R15E-N-5**. **Hier wird nichts entschieden** — dieser Abschnitt legt
> den Konflikt offen, prüft die Herkunft der Zahl und stellt vier
> Optionen mit ihren Folgen nebeneinander. Der Entscheid liegt beim
> User (neue Zeile in § 8). **Kein Rechtsrat.**

**Worum es geht, ohne Fachwörter:** Bevor wir Hotels anschreiben dürfen,
ohne dass die uns vorher gefragt haben, brauchen wir eine schriftliche
Begründung, warum unser Interesse schwerer wiegt als das Interesse der
Angeschriebenen. Diese Begründung existiert (`akquise/interessenabwaegung-o8.md`,
kurz o8). Sie enthält eine Selbstauflage: Sobald eine Versandwelle mehr
als 300 Briefe umfasst, muss die Begründung vor dem Versand noch einmal
neu durchgegangen und das Ergebnis festgehalten werden. Zugleich rechnet
dieser Plan damit, dass wir für **einen** Abschluss mehrere Hundert bis
über tausend Briefe brauchen. **Jede Welle, die für die Frist etwas
bringt, löst die Auflage also aus.**

**A. Der Sachverhalt — drei Zahlen aus drei Dokumenten**

| Rolle | Fundstelle | Zahl | Zählweg / Herleitung an der Fundstelle |
|---|---|---|---|
| **Decke** (Auflage) | `akquise/interessenabwaegung-o8.md` § 11.3, Spiegelstrich 4 | Menge je Welle **über 300 Stück** → Abwägung neu führen | Keine Rechnung. Verweis auf Skalenfaktor **P-7** (o8 § 5.1) und **R-K1** (`akquise/listenbau-regelwerk.md` § 8a). Vermerk dort: eingesetzt 12.08.2026, Prüferbefund **Q-10**, Begründung sinngemäß — ein Trigger ohne Schwellenwert ist nicht bedienbar |
| **Boden** (Messbarkeit) | § 4.1 Annahme **A-8**, ausgerechnet in § 4.3 | Mindest-Wellengröße **~300** | P(0 Antworten) = (1 − p)^n; bei n = 300 und p = 1 % ist P(0) = 0,049. Eigene Nachrechnung 17.08.2026: 0,99^300 = 0,0490 ✓; die kleinste ganze Zahl mit P(0) < 0,05 ist **n = 299** — die 300 ist deren Aufrundung |
| **Bedarf** | § 4.2, Trichterrechnung | **≈ 337** (optimistisch) · **≈ 606** (mittel) · **1.600** (pessimistisch) Briefe für **einen** Abschluss | Kehrwert des Produkts der vier Quoten A-1…A-4. Eigene Nachrechnung 17.08.2026: 336,7 / 606,1 / 1.600,0 ✓ |

> ⭐ **Die Zahl 300 steht in diesem Plan gleichzeitig als Untergrenze und
> als Obergrenze.** Unter ~300 ist eine Welle nicht auswertbar (A-8),
> über 300 löst sie die Neu-Führung aus (o8 § 11.3). Das erlaubte Fenster
> ist damit **ein einziger Punkt: genau 300** — die Auflage greift erst
> bei Überschreiten. Und dieser eine Punkt liegt **unter** der kleinsten
> Menge, die nach § 4.2 für einen Abschluss reicht (≈ 337). *(Zählweg:
> 337 − 300 = 37; die Differenz ist klein, die Richtung eindeutig.)*

**B. Die Kernfrage: Stammt die 300 aus einer Quelle — oder ist sie unsere
eigene Setzung?**

**Ergebnis: eigene Setzung, ohne Quellenbindung.** Belege, jeweils am
Objekt gelesen (Stand `0c4692f`):

1. Die Zahl in o8 § 11.3 verweist auf **R-K1** im Regelwerk § 8a. Dort
   ist sie ein **Rechenbeispiel** für den Kostensprung bei Massenversand
   (eine Welle von 300 gleichartigen Briefen mit demselben Fehler koste
   nicht das 300-Fache, aber auch nicht das Einfache) — **keine
   Schwelle, keine Ableitung aus einer Norm**. Die darüberliegende
   Quellen-Tabelle des Regelwerks § 8a nennt als Risikotreiber
   Massenaussendung **ohne Zahl**.
2. o8 weist die Herkunft selbst als schwach aus: In P-7 trägt das
   EuGH-Zitat die Belegstufe ① A, die **Mengenangaben** dagegen sind
   dort ausdrücklich als **eigener Beleg-Typ** gekennzeichnet, der von
   der ①-Stufe des Zitats **nicht gedeckt** ist.
3. **Suchlauf über die fünf einschlägigen Primärquellen** (Rohbelege
   `sensibel/rohbelege-R09-A/`: DSK-Orientierungshilfe Werbung 2022 und
   ihr Zweitkanal-Abzug, EuGH C-621/22 EN, EuGH C-621/22
   DE-Amtsblattmitteilung; `sensibel/rohbelege-R15-A/`: UWG-Volltext) —
   Muster `300` als Ziffernfolge, Werkzeug `grep -o … | wc -l`,
   17.08.2026: **0 Treffer in allen fünf Dateien.**
   **Positivkontrolle gleicher Zeichenklasse** (dreistellige Ziffern-
   folgen, `[0-9]{3}`): 111 / 111 / 119 / 22 / 130 Treffer — das Muster
   kann in jeder Datei treffen. ⚠️ **Reichweite dieses Negativs:** Es
   deckt genau diese fünf Dateien, nicht die Aussage, dass keine Quelle
   irgendwo eine 300er-Schwelle kennt. ⚠️ Der Zweitkanal-Abzug der
   DSK-Orientierungshilfe ist **kein unabhängiger Lesekanal** (gleiche
   Datei über zweiten Bezugsweg; identische Trefferzahlen 111/12).
4. **Zeitliche Herkunft** (`git log -S`, 17.08.2026): Beispielzahl in
   R-K1 **und** Rechnung zu A-8 entstanden im **selben** Commit
   `6e4daa5` (11.08.2026, Session R08-A); der Trigger in o8 kam einen
   Tag später mit `3e83253` (12.08.2026). ⚠️ **Daraus folgt nicht, dass
   beide Zahlen unabhängig voneinander hergeleitet wurden** — sie
   stammen aus einem Schreibvorgang; die Texte nennen unterschiedliche
   Herleitungen, ein Bezug zwischen ihnen ist nicht dokumentiert. Als
   Zufallstreffer zweier unabhängiger Rechnungen darf die Übereinstimmung
   **nicht** dargestellt werden.

**C. Was die Auflage NICHT sagt** (Klartext, weil hier der teuerste
Lesefehler droht): Sie verbietet **keine** Welle über 300. Sie verlangt,
dass die Abwägung vor dem Versand **neu geführt** wird. Eine Welle von
1.600 Briefen ist danach nicht unzulässig — sie ist an eine Arbeitsstufe
gebunden, deren **Ergebnis offen** ist.

**D. Was dazu bereits gebaut ist** (keine zweite Fundstelle anlegen —
dies ist ein Zeiger): `akquise/wellenprotokoll-vorlage.md` § 8a führt den
Block G2 mit **WP-34** (erste reale Welle → Stopp), **WP-35** (mehr als
300 → Stopp) und **WP-36** (neue Adressquelle → Stopp). WP-35 benennt
den Konflikt bereits mit denselben Planzahlen. **Der operative
Alarm existiert also schon; offen ist die Planungsentscheidung.**

> ⭐ **Der Befund, der den Konflikt für Welle 1 entschärft:** o8 § 11.3
> nennt als **ersten** Trigger den Bau der ersten realen Welle — ganz
> ohne Mengenbezug (abgebildet als WP-34). **Für Welle 1 ist die
> Neu-Führung damit ohnehin Pflicht; die 300er-Schwelle erzeugt dort
> keinen zusätzlichen Aufwand.** Der Zusatzaufwand entsteht erst ab
> Welle 2. *(Belegrichtung beachtet: Das ist eine Entlastung und trägt
> deshalb ihre Fundstelle im Satz — o8 § 11.3 Spiegelstrich 1, gelesen
> 17.08.2026.)*

**E. Die Optionen**

| | Was man tut | Folgen — belegt | Was offen bleibt |
|---|---|---|---|
| **(A)** | **Wellen auf höchstens 300 Stück deckeln** und mehrere Wellen fahren | Wellenzahl bei Deckel 300 (Zählweg: aufgerundeter Quotient): optimistisch **2**, mittel **3**, pessimistisch **6** Wellen. ⚠️ **Für die November-Frist trägt trotzdem nur Welle 1:** Die Kette § 3.1 verlangt Erstkontakt bis **Fr 11.09.2026** (11.09. + 63 Tage = 13.11.2026 ✓, per `Get-Date` erhoben). Eine zweite Welle am Fr 25.09. käme bei 8 Wochen Restkette am **20.11.**, bei 9 Wochen am **27.11.** an — beides **nach** dem Anker. Der späteste noch tragende Versandtag ist **Fr 18.09.2026** (13.11. − 56 Tage), und das nur in der kürzesten Lesart aller vier Stufen | Wie viele Wellen bis 11.09. überhaupt produzierbar sind, hängt an **A-6** (eigene Wochenkapazität, **nicht erhoben**, Handgriff AKQ-H-2). Ohne diese Zahl ist Option A **nicht bezifferbar** |
| **(B)** | **Neu-Führung als Regelbetrieb annehmen** — jede Welle über 300 durchläuft sie | Der Alarm ist gebaut (WP-35), das Ergebnis-Feld ebenfalls (**WP-39**). Für Welle 1 **kein** Zusatzaufwand (s. Kasten oben) | ⚠️ **Der Aufwand ist heute nicht bezifferbar, weil der Umfang nirgends definiert ist:** Weder o8 § 11.3 noch die Vorlage sagen, ob Neu-Führung eine Vollrevision des Dokuments (1.239 Zeilen, fünf Primärquellen, Zitatabgleich — s. o8 § 12.4) oder einen Delta-Abgleich der geänderten Größe meint. **Suchweg 17.08.2026:** `grep -rniE "neu zu führen\|neu geführt\|Neu-Führung"` über `akquise/*.md` und `handel/*.md` — 4 Treffer in der Sache, **keiner** definiert den Umfang |
| **(C)** | **Schwelle anpassen** (z. B. auf die Planzahl heben) | **Zulässig** — die 300 ist nach Abschnitt B eigene Setzung ohne Quellenbindung, also nicht durch eine Fremdquelle gesperrt. Eine Änderung trifft o8 (Scope MKT-HANDEL/Leitsession), nicht diesen Plan | ⚠️ **Zulässig ist die Option, nicht jede Begründung.** Eine Anhebung, die damit begründet wird, dass die eigene Planung die Schwelle reißt, ist genau die Bewegung, die ein Anwalt oder eine Aufsicht als Selbstbedienung liest — und P-7 trägt laut eigenem Wortlaut nur, solange die Auflage eingehalten wird. Eine Anhebung braucht eine **sachliche** Begründung (welche Menge welche Skalenwirkung hat), und die ist heute nicht erhoben |
| **(D)** | **Zuerst den Umfang der Neu-Führung definieren**, dann über A/B/C entscheiden | Kleinster Schritt: ein Satz in o8 § 11.3, der sagt, was neu zu führen heißt (Vollrevision / Delta-Abgleich / Ergebnisvermerk im Wellenprotokoll). Macht (B) bezifferbar und (C) begründbar | Zuständig ist der Träger von o8 — **nicht** dieser Plan und **nicht** diese Session |

**F. Empfehlung — mit Vorbehalt, nicht entschieden**

**Vorschlag: (D) zuerst, danach (B).** Begründung: Der Konflikt ist für
die einzige fristrelevante Welle bereits aufgelöst (Welle 1 löst die
Neu-Führung ohnehin über WP-34 aus), und die einzige unbekannte Größe
ist der Umfang dieser Arbeitsstufe. (D) kostet einen Satz und macht die
übrigen Optionen erst vergleichbar. **(A)** taugt als
Kapazitätsentscheidung, **nicht** als Antwort auf die Auflage (s. G-1).
**(C)** bleibt offen, sollte aber nicht als erste Bewegung gewählt
werden.

**Getragenes Restrisiko — getrennt von „zulässig":** Auch nach einer
Neu-Führung bleibt der Weg-(b)-Vorbehalt aus o8 § 5.4 bestehen; die
Fallgruppe FG-4 ist dort ausdrücklich als getragenes Risiko und nicht
als zulässig geführt. Dieser Abschnitt ändert daran **nichts** und darf
nicht als Entlastung gelesen werden.

**G. Drei Entlastungen, die hier ausdrücklich GESPERRT sind**

| # | Die naheliegende Entlastung | Warum sie nicht trägt |
|---|---|---|
| **G-1** | *Wir teilen 600 Briefe in zwei Wellen à 300 — dann greift die Auflage nie.* | Die Auflage kommt aus dem Skalenfaktor P-7, und der zielt auf den **Umfang der Verarbeitung**, nicht auf die Versandlogistik. Dieselbe Adressmenge in Tranchen zu zerlegen mindert die Skalenwirkung nicht; es umgeht nur den Zähler. Genau diese Lesart würde die Gegenseite mit dem eigenen o8-Satz kippen, dass der Faktor nur trägt, solange die Auflage eingehalten wird |
| **G-2** | *Die 300 ist ohnehin selbst gesetzt, also nicht bindend.* | Eine selbst gesetzte Auflage ist gegenüber Dritten **kein** schwächeres Argument, sondern ein dokumentierter Sorgfaltsmaßstab: Sie steht in einer versionierten Datei mit Datum. Sie später zu ignorieren ist schlechter als sie nie gesetzt zu haben |
| **G-3** | *Der Trigger verbietet nichts, also ändert er nichts.* | Richtig ist der erste Halbsatz (Abschnitt C). Der zweite nicht: WP-35 ist als **Stopp** gebaut, nicht als Vermerk — ohne durchgeführte Neu-Führung gibt es nach der Freigabe-Checkliste (WP-38) keine Freigabe |

**H. Was diese Vorlage nicht kann**

- Sie sagt **nicht**, ob die Abwägung eine Welle über 300 trägt — das ist
  das Ergebnis der Neu-Führung und offen.
- Sie ersetzt **nicht** den anwaltlichen Rat (O-9, F-7 und der A7-Streit-
  stand sind unverändert offen).
- Sie stützt sich auf **A-1** (Antwortquote 1–3 %), und diese Annahme ist
  nach § 4.1 ohne Repo-Beleg. Fällt A-1 anders aus, verschieben sich
  Boden **und** Bedarf — die Struktur des Konflikts bleibt, seine Zahlen
  nicht.
- ⚠️ Sie rechnet mit der Kette aus § 3.1, deren Stufen **S4/S5 seit
  Fr 14.08.2026 verstrichen** sind (heute Mo 17.08.2026, per `Get-Date`;
  Firmierung F-7 offen laut STATUS.md „Nächster konkreter Schritt"
  Punkt 0). Alle Kalenderaussagen oben sind damit **optimistisch
  gerechnet**.

---

## 5. KPIs — Vorschlag, nicht beschlossen

**Herkunft:** `protokolle/R00-planpruefung-2026-08-09.md` § (e), fünf
Funnel-KPIs mit Zielwertvorschlägen. ⚠️ **Belegstufe ③: Rohbericht eines
Prüf-Agenten (Bericht 2, „CMO-/B2B-Praxis"), verbatim im Protokoll — vom
User nicht beschlossen.** Die Projektquelle führt sie in OPS1 als
Arbeitspaket-Inhalt, ebenfalls ohne Beschlussvermerk. **Sie werden hier
als VORSCHLAG übernommen und sind mit der Verabschiedung von OPS1 zu
bestätigen (E-A3).**

| # | KPI | Zielwertvorschlag der Quelle | Bemerkung dieses Plans |
|---|---|---|---|
| **KPI-1** | Qualifizierte Erstgespräche mit Entscheidern pro Woche | „z. B. 3/Woche" | Die einzige Größe, die der Gründer direkt steuert. ⚠️ **Der Zielwert stammt aus der Quelle und ist dort selbst als Beispiel formuliert** („z. B.") — er ist kein erhobener Wert |
| **KPI-2** | Abgegebene Angebote / aktive Pipeline (Anzahl + €-Wert) | kein Zielwert | ⚠️ **Der €-Wert ist heute nicht bildbar** — ein Preismodell existiert nicht (MKT-HANDEL: `handel/` führt Rechtsmatrix und Förderarchitektur, **kein Pricing**; ① geprüft 11.08.2026). Bis dahin nur Anzahl |
| **KPI-3** | Zeit bis zum ersten zahlenden Kunden | North-Star | Gegen den Anker 13.11. gemessen |
| **KPI-4** | Referenz-Assets einsatzbereit (Referenzvereinbarungen, Case Study, Demo-Video) | binär | Hängt an MKT-BELEG; ⚠️ Referenzvereinbarungs-Vorlage trägt offene Punkte U-1…U-9/O-1…O-7 (① Projektquelle § 7 Punkt 0a) |
| **KPI-5** | Reply-/Terminquote im Outbound (je 10 Kontakte) | „fällt sie unter ~10 % Antworten, ist FUND nachzuschärfen, nicht das Volumen zu erhöhen" | ⚠️ **Diese Schwelle passt nicht auf den Briefkanal.** Sie stammt aus einem Bericht, der Outbound noch als E-Mail-/LinkedIn-Betrieb dachte (§ (c) Punkt 3 dort: „Founder-led Direktvertrieb (Telefon, E-Mail, Vor-Ort)" — die E-Mail-Variante ist seit der Rechtsmatrix zu). ⚠️ Nicht belegbar wäre die stärkere Behauptung, der Bericht habe LinkedIn-Betrieb propagiert: Er stuft LinkedIn in § (c) Punkt 1 ausdrücklich als „Fehlbesetzung" ein. Bei A-1 = 1–3 % läge der Kaltbrief **per Annahme dauerhaft unter der Schwelle** und würde einen FUND-Alarm auslösen, der nichts über die Positionierung aussagt. **Vorschlag: Schwelle je Kanal getrennt festlegen, sobald Welle 1 gemessen ist** |

> 📌 **REPARATUR 17.08.2026 (R18-C) — unsichtbares Zeichen in KPI-5.**
> Das Wort „Terminquote" trug ein **Soft-Hyphen (U+00AD)** zwischen
> „Termin" und „quote"; es kommt mit kopiertem Text herein und lässt
> jeden späteren Grep auf das Wort ins Leere laufen. Entfernt per
> Skriptdatei mit Trefferkontrolle und Abbruch (Soll 1, gefunden 1);
> Gegenmessung über die ganze Datei, **Bezugsstand: unmittelbar vor und
> nach dem Skriptlauf am Arbeitsbaum** (nicht gegen den Rundenstart —
> präzisiert nach Gegenlese G-16): **U+00AD 1 → 0, U+00A0 0 → 0,
> Umlaut-Zählung vorher = nachher (798), Dateilänge −1 Zeichen.** Gegen
> den Rundenstart `a7fca1c` gemessen sind es 729 → 803 Umlaute (der
> Zuwachs stammt aus den Reparaturkästen dieser Session).
> Sichtbar ist die Reparatur nicht — deshalb steht sie hier.

**Ausdrücklich nicht als Steuerungsgrößen** (aus derselben Quelle,
übernommen): Follower, Impressions, Website-Traffic,
Newsletter-Abonnenten, Anzahl produzierter Inhalte, „Agenten im
Betrieb".

---

## 6. Terminplan bis zum Anker

**Lesart:** Die Zeilen bis einschließlich S5 sind **scharf** (Vorbedingung
für alles Weitere), die späteren sind **Prognose** unter den Annahmen aus
§ 4.1. Wochentage per `Get-Date` erhoben.

| Zeitraum | Schritt | Hängt ab von | Wer |
|---|---|---|---|
| **bis Fr 14.08.** | **S5:** Firmierungs-/Namensstand geklärt ODER Entscheid E-A1 (Arbeitstitel) — ⚠️ **die beiden Wege sind nicht gleichwertig:** Pfad (b) trägt eine offene Rechtsfrage (§ 3.2, Nachtrag 17.08.). ⚠️ **Auch Pfad (a) ist mit S5 nicht frei** — der Namensentscheid ist *notwendig, keine hinreichende* Bedingung: O-9 und die sieben Bau-Pflichten sperren den Listenaufbau weiter (§ 3.2; ergänzt nach Gegenlese G-5) | StB-Termin, MARKE2 | **User** |
| ab sofort, parallel | D2-/Weg-b-Pflichtbausteine bauen (Regelwerk § 3 + § 2.3) — ⚠️ **namensfrei nur teilweise:** Pflicht 1 (Datenschutzinformation) ist ohne Namen nur als **Rohtext** baubar, nicht fertig; VVT-Eintrag ohne F-7 nicht abschließend; für die **übrigen** Pflichten (Lead-Bogen, Gesprächsleitfaden) ist die Namensfreiheit nur ein **Negativ aus Aktenlage** — am Werkstück prüfen (§ 3.2; ergänzt nach Gegenlese G-9) | — | Marketing-Session |
| ab sofort | **H-6:** Telkon-Logo anfordern (Außenpost) → K4 wird wirksam | — | **User** |
| ab sofort | K2-Anlässe anbahnen und protokollieren | — | **User** |
| bis Fr 21.08. | Zielkundenliste Welle 1 nach Regelwerk (Gebietsschnitt § 8 dort) | Regelwerk **UND F-7 + O-9 + die sieben Bau-Pflichten** — der Listenaufbau ist selbst der erste Verarbeitungsschritt (§ 3.2) | Marketing-Session |
| bis Fr 28.08. | Brief-Text + Layout + Art.-14-Beilage; Gesprächsleitfaden K2 | S5 | Marketing-Session + **User-Freigabe** |
| **bis Fr 11.09.** | **S3:** Welle 1 versandt (Größe nach § 4.3: unter ~300 Stück ist ein Null-Ergebnis nicht interpretierbar — die real erreichbare Größe hängt an AKQ-H-2b) | alles obige | User + Session |
| Sa 12.09. – Fr 02.10. | Rücklauf-Fenster Welle 1; **Quoten A-1…A-4 erstmals messen**; Erstgespräche | — | User |
| **bis Fr 02.10.** | **S2:** Erstgespräche geführt | Rücklauf | User |
| bis Fr 09.10. | **Entscheidungspunkt:** Reicht der Rücklauf? Wenn nein → Frist über K2/K3 tragen, K1 auf Aufbaupfad umstellen | Messwerte | Leitsession + User |
| **bis Fr 23.10.** | **S1:** Angebot(e) draußen | Pricing (MKT-HANDEL!) | User |
| **bis Fr 13.11.** | **S0:** Abschluss | — | User |

> ### 📌 REPARATUR 17.08.2026 (R18-C) — drei Zeilen dieser Tabelle trugen die Ein-Gate-Logik weiter
>
> **Zuerst die Belegkraft, dann die Folge** (der Vorbehalt darf beim
> Nachziehen nicht verloren gehen — er steht vollständig in § 3.2,
> Nachtrag 17.08.2026): Die Verschärfung ruht auf **einem einzigen Satz**
> (LG Düsseldorf, 38 O 243/23 Rn. 87), der nach dem Bestandsvermerk der
> Rechtsmatrix **nicht in der tragenden Absagebegründung** steht, und
> **Rn. 86 ordnet die Entgegennahme der angekauften Adressen und ihr
> Speichern für die Erstellung der Schreiben ausdrücklich dem Vorfeld des
> angegriffenen Handelns zu** — *dass das genau unser Listenaufbau ist,
> ist der Schluss des Bestandsvermerks, nicht das Wort des Gerichts
> (präzisiert nach Gegenlese G-13)*. Das ist die unbequemere Hälfte, und
> sie gehört mit hierher. Die Vorsichtsannahme bleibt gleichwohl in Kraft;
> ihre Belegkraft ist nur schwächer, als der Rest dieses Kastens
> nahelegt. Ob ein nicht tragender Satz die Betriebsfolge trägt, ist eine
> **Frage an den Anwalt** (`handel/anwalts-briefing-2026-08.md`) — dieser
> Plan beantwortet sie nicht.
>
> **Der Bestand, auf den die drei Zeilen jetzt gezogen sind** (Zitate aus
> `akquise/interessenabwaegung-o8.md`, dort § 9.1 bzw. **§ 11.1, ⭐-Kasten
> „Fälligkeit dieser Posten — nachgetragen 12.08.2026"** — *korrigiert
> nach Gegenlese G-6: die Erstfassung nannte hier „§ 10-Nachtrag" und
> hatte diese Fehlangabe aus § 3.2 geerbt; § 10 reicht nur bis zur
> Bau-Pflichten-Tabelle und enthält den Satz nicht*):
> „**Der erste Verarbeitungsschritt ist der LISTENAUFBAU, nicht der
> Versand**" und „**Es gilt einheitlich: F-7 (Firmierung), O-9 (Art. 6
> Abs. 4) und die Bau-Pflichten des § 10 sind vor dem ERSTEN DATENSATZ
> fällig, nicht erst vor dem ersten Brief.**"
>
> **Vorfassungen — je Stelle sichtbar** (Stand `86afceb`, Zeilen 896/897/900):
>
> | Zeile | Vorfassung (wörtlich) | Warum sie nicht mehr trägt |
> |---|---|---|
> | S5-Zeile | *… geklärt ODER Entscheid E-A1 (Arbeitstitel)* | „ODER" liest sich als gleichwertige Wahl; Pfad (b) trägt nach § 3.2 eine **offene Rechtsfrage** (kann ein Arbeitstitel die Art.-14-Angabe zum Verantwortlichen tragen?) |
> | Pflichtbausteine | *D2-/Weg-b-Pflichtbausteine bauen (Regelwerk § 3 + § 2.3) — ohne Namensbindung* | pauschal; für Pflicht 1 (Datenschutzinformation) ist die Namensbindung in § 3.2 positiv festgestellt — namensfrei ist nur der **Rohtext**, nicht die Veröffentlichung; der VVT-Eintrag ist ohne F-7 nicht abschließend |
> | Zielkundenliste | Spalte *Hängt ab von*: **Regelwerk** | nennt nur ein Gate, während die Brief-Zeile darunter S5 führt — der Listenaufbau ist selbst der erste Verarbeitungsschritt und hängt damit an **F-7, O-9 und den sieben Bau-Pflichten** |
>
> ⚠️ **Was diese Reparatur NICHT tut — Reichweite ausdrücklich
> ausgewiesen:** Sie ändert **keinen Termin**. Die Zeile *bis Fr 21.08.*
> bleibt unverändert stehen, obwohl ihre Vorbedingungen heute offen sind
> (O-9 ist nach Rechtsmatrix-Kasten und STATUS.md „**OFFEN — weder
> entschieden noch geprüft**", das Gate ist anwaltlicher Rat). Sie ist
> damit **Prognose unter offenen Vorbedingungen**, nicht Zusage — ob und
> wie der Terminplan nachgezogen wird, ist ein User-/Leitsession-Posten
> (E-A1, E-A2), keine Setzung dieser Session. Ebenso unverändert: die
> Brief-Zeile (*Hängt ab von: S5*) — sie war schon vorher mit der
> Zwei-Gate-Logik vereinbar, **weil sie den Brief an S5 bindet und die
> vorgelagerten Gates über die Zielkundenlisten-Zeile darüber wirken; die
> Liste ist Vorbedingung des Briefs** *(Begründung ergänzt nach Gegenlese
> G-12 — eine Entwarnung über die eigene Arbeit ohne Beleg im Satz ist
> keine)*.
>
> **Herkunft:** R17-C hat § 3.2/§ 4.3 nachgezogen und die fünf
> Ankunftsstellen des Zeitplans ausdrücklich als offenen Posten gemeldet
> (§ 3.2 am Ende); Auftrag Tagesplan 17.08.2026 Strang R18-C Punkt 1.
> **Gezählt: 5 von 5 der von R17-C GEMELDETEN Stellen repariert** — drei
> hier, H-8 in § 7, E-A1 in § 8. Der Nenner gehört an den Prüfgegenstand:
> Ob die Meldung vollzählig war, ist eine andere Frage — **sie war es
> nicht.**
> ⚠️ **KORREKTUR 17.08.2026 (Gegenleser G-1):** Der ursprüngliche Satz an
> dieser Stelle lautete *eine sechste wurde gesucht (Grep über die ganze
> Datei nach „ohne Namensbindung" / „sofort baubar" / „hängt am Namen")
> und nicht gefunden*. Dieses Negativ trug nicht: Die drei Muster sind die
> **Wortlaute des gekippten § 3.2-Absatzes**; alle neun Treffer lagen in
> § 3.2 und in den eigenen Kästen. Eine Suche nach der **Sache** fand die
> sechste Stelle in **§ 2 · K1** (Vorlaufzeile, Überschrift der
> Pflichtenliste, F-7-Zitat) — dort repariert, mit sichtbarer Vorfassung.
> **Stand jetzt: 6 von 6 gefundenen Stellen repariert** (5 gemeldet + 1
> vom Gegenleser gefunden). Ob es eine siebte gibt, ist offen; auch das
> breitere Muster des Gegenlesers ist nur ein Muster.

⚠️ **Sperrposten außerhalb dieses Strangs, ohne den S1 nicht stattfinden
kann:** Ein **Preismodell/Angebotsarchitektur existiert nicht**
(MKT-HANDEL, HANDEL1/2 — im `handel/`-Bestand am 11.08.2026 nicht
vorhanden). Ein Angebot bis 23.10. setzt es voraus. Als Nebenbefund
gemeldet (§ 9, N-2).

---

## 7. Handgriffe des Users (eigene Liste)

**Alle Termine mit Wochentag** — der 16.08.2026 wäre ein **Sonntag** und
scheidet als Handgriff-Termin aus (Wochentage per Werkzeug erhoben;
Prüferbefund P-11: vier Handgriffe standen zunächst auf diesem Sonntag,
und anders als die Termine in § 6 trugen sie kein Wochentags-Etikett,
wodurch der Fehler unsichtbar blieb).

| # | Handgriff | Warum er hier steht | bis |
|---|---|---|---|
| **H-8** | ⭐ **Stand des StB-Termins klären** (GbR-Namensführung) — Stand **Mo 17.08.2026**: STATUS.md führt ihn als „User-Zusage Di 18.08."; die zweite STATUS-Angabe („~KW 34/35") ist nach der dortigen Klarstellung „derselbe Vorgang, kein zweiter Termin" *(Vorfassung dieser Zelle: er ist in STATUS.md als User-Handgriff **Mo 10.08.** geführt, also bereits verstrichen; ob er stattgefunden hat, steht nirgends — zum Erstellungsstand 11.08. richtig, seither überholt)* | **Vorbedingung von S5 — aber S5 ist nur EINES der drei Gates** des Terminpfads (F-7, O-9, sieben Bau-Pflichten; § 3.2): notwendig, nicht hinreichend *(Vorfassung: Er ist die Vorbedingung von S5 und damit des gesamten Terminpfads)* | ~~Do 13.08.~~ **Frist verstrichen — neuer Anker offen (User/Leitsession)**. *(Der StB-Anruf selbst ist laut STATUS.md für Di 18.08. zugesagt; H-8 ist die Klärung DANACH. Korrigiert nach Gegenlese G-4: die Erstfassung setzte hier *Di 18.08.* mit dem Etikett *Stand STATUS.md* — STATUS setzt für H-8 keine Frist, und ein selbstgesetzter Termin sähe wie eine Zusage aus, die niemand gegeben hat.)* |
| **H-1** | Bestätigen oder korrigieren: Planungsanker **Fr 13.11.2026** für „Mitte November" | Der Anker trägt die gesamte Rückwärtsrechnung | **Fr 14.08.** |
| **AKQ-H-2** | Zwei Zahlen nennen: (a) **wie viele tragfähige persönliche Vorkontakte** ins Zielsegment heute existieren (K2), (b) **wie viele Briefe/Woche** realistisch machbar sind (A-6) | Ohne (a) ist nicht bewertbar, ob die Frist überhaupt erreichbar ist; ohne (b) ist keine Wellenplanung möglich | **Fr 14.08.** |
| **H-3** | Portosatz und Stückkosten je Brief erheben (Deutsche Post o. a., aktueller Tarif) | Keine Kostenzahl aus dem Gedächtnis in einen Plan (A-7) | vor Welle 1 |
| **H-4** | DEHOGA/Fachpresse: Konditionen und Redaktionsschluss für Verteiler-/Anzeigenplatzierung erfragen; **dabei N-8 mitklären** (deckt die Einwilligung der Verteiler-Empfänger Werbung für uns?) | K3-Vorlauf ist unbekannt und kann längste Leitzeit haben | **Fr 28.08.** |
| **H-5** | Internorga-Termin 2027 an der Quelle erheben (Repo-Beleg fehlt) | Rückwärts-Anker für den Lead-Prozess (A4) | unkritisch |
| **H-6** | **Telkon-Logo anfordern** (Außenpost, Versand User) | Ohne Logo ist die Listungszusage nicht umsetzbar — offener Posten aus R7, wirkt direkt auf K4 | **Fr 14.08.** |
| **H-7** | Entscheide E-A1 bis E-A3 (§ 8) treffen | Außenwirkung — nicht von der Session zu setzen | **Fr 14.08.** |

> ### 📌 REPARATUR 17.08.2026 (R18-C) — Kurz-ID `AKQ-H-2` und die H-8-Zeile
>
> **(1) Kurz-ID:** Der Handgriff hieß bis heute `H-2` und kollidierte mit
> gleichnamigen IDs anderer Träger. Er heißt jetzt **`AKQ-H-2`**
> (Dokument-/Strang-Präfix als Namensraum, CLAUDE.md L-35); der
> Teilverweis `H-2b` in § 6 heißt entsprechend `AKQ-H-2b`.
> **Zählweg:** Kollisions-Grep zuerst im eigenen Dokument (7 Fundstellen,
> alle umbenannt), dann repo-weit über `*.md`, Muster auf die
> **Vergabe**-Form beschränkt (Überschrift bzw. erste Tabellenspalte),
> nicht auf jede Erwähnung.
> ⚠️ **KORREKTUR 17.08.2026 (Gegenleser G-3): Der Sollwert dieser
> Positivkontrolle war falsch.** Die Erstfassung nannte — der
> Auftragsvorgabe folgend — *drei vergebende Dokumente* (Akquiseplan ·
> Messplan · `R05-A-pruefer.md`) und *nachher 2*. Tatsächlich vergeben
> **mindestens sechs** Dokumente eine eigene `H-2`: dazu
> `protokolle/R15-A-pruefer.md` (Z. 680), `R16-A-pruefer.md` (Z. 385) und
> `R17-A-pruefer.md` (Z. 734) — am Objekt nachgezählt. **Nachher also 5,
> nicht 2.** Ein falscher Sollwert, der die Kontrolle „bestehen" lässt,
> ist schlechter als keine Kontrolle: Er entlastet den nächsten Leser
> davon, nachzuzählen. **Die vier Prüferprotokolle sind Historie und
> werden nicht umbenannt** — die Klasse ist damit nicht gelöst, sondern
> im Namensraum der laufenden Dokumente entschärft; die
> Prüferbefund-Namensräume brauchen den Rundenpräfix (L-35), Träger
> Leitsession.
> ⚠️ **Nicht behoben, ausdrücklich gemeldet statt still gelassen:**
> **`H-1` trägt dieselbe Kollision** (hier: Planungsanker 13.11.; im
> Messplan: Livegang-Datum — und STATUS.md meint mit „H-1 ✅ 22.09." den
> Messplan-Posten). Die übrigen Handgriffe dieses Dokuments behalten ihre
> alte Form; der Auftrag dieser Session nannte nur `H-2`, und eine
> Voll-Umbenennung berührt fremde Träger. **Offener Posten für die
> Leitsession.** Ebenfalls gemeldet, außerhalb des eigenen Scope:
> „Prüferbefund H-2" ohne Rundenpräfix in `handel/kanal-rechtsmatrix.md`
> (**eingebracht mit `ed9bbdf`, R16-A** — Herkunft am Commit belegt; die
> Datei wird in dieser Runde von R18-A bearbeitet, das ist der Träger,
> nicht die Herkunft) und `handel/angebotsarchitektur.md`
> (**`8664f3f`, R17-A**). *(Zuschreibung präzisiert nach Gegenlese G-7:
> die Erstfassung schrieb nur „(R18-A)" und las sich als Herkunftsangabe
> — aus einem Commit ist die schreibende Session nicht ablesbar,
> CLAUDE.md Regel 1.)*
>
> **(2) H-8-Zeile:** Sie war die vierte der fünf Stellen, an denen der
> Leser den Zeitplan mit der alten **Ein-Gate-Logik** holt (§ 3.2,
> Nachtrag 17.08.). Vorfassungen stehen sichtbar in der Zeile selbst.
> Zusätzlich war ihre Datumsangabe überholt: Der StB-Termin ist im
> Wahrheits-Kanal seit heute als **Di 18.08.** geführt, und die Frage, ob
> STATUS.md zwei Termine für dieselbe Handlung führt — in § 3.2 als
> **unklar** ausgewiesen und der Leitsession überlassen —, ist dort
> beantwortet. Wochentage per `date` erhoben (Positivkontrolle:
> 01.01.2026 = Donnerstag).

---

## 8. Entscheidungen, die der User treffen muss

Nicht von dieser Session gesetzt (CLAUDE.md: Festlegungen mit
Außenwirkung nie im Alleingang).

1. **E-A1 — Warten oder Arbeitstitel?** Startet die Erstansprache erst
   nach dem Namensentscheid (Pfad a) oder unter Arbeitstitel/bestehender
   Firmierung (Pfad b)? **Dieser Plan empfiehlt nicht**, weil beide Wege
   Außenwirkung tragen und die Grundlage (Namensstand) außerhalb von
   MKT-AKQ liegt. Die Kosten beider Wege stehen in § 3.2 — **zusammen
   mit dem Nachtrag vom 17.08.2026, der mitzulesen ist:** Pfad (a) ist
   nach dem Namensentscheid **nicht** frei (er ist eine notwendige, keine
   hinreichende Bedingung — O-9 und die Bau-Pflichten sperren den
   Listenaufbau weiter), und Pfad (b) trägt eine **offene Rechtsfrage**
   (ob ein Arbeitstitel die Art.-14-Angabe zum Verantwortlichen tragen
   kann). Die Entscheidung ist damit nicht *schneller gegen langsamer*,
   sondern **eine Wahl zwischen zwei Wegen mit je eigenem offenen
   Posten**.

   > 📌 **REPARATUR 17.08.2026 (R18-C) — fünfte Ein-Gate-Stelle.**
   > Vorfassung des Schlusssatzes: *Die Kosten beider Wege stehen in
   > § 3.2.* Sie verwies auf den Abschnitt, **ohne** den dortigen
   > Nachtrag — ein Leser, der von hier springt, holt sonst die
   > Tabellenzeilen und nicht den Vorbehalt. **Kein neuer Sachvortrag:**
   > beide Ergänzungen sind aus § 3.2 übernommen, die Rechtsfrage bleibt
   > dort als **eigene Ableitung aus dem Bestand, keine Quellenaussage**
   > ausgewiesen. Der Entscheid selbst bleibt beim User; dieser Plan
   > empfiehlt weiterhin nicht.
2. **E-A2 — Fristhaltung oder Fristnachführung?** Wenn AKQ-H-2 (a) ergibt,
   dass zu wenige tragfähige Vorkontakte existieren, ist die Frage nicht
   „mehr Briefe", sondern ob die Zielmarke „Mitte November" bestehen
   bleibt. **Der Plan trifft diese Entscheidung nicht** — er legt nur
   offen, dass sie ansteht.
3. **E-A3 — KPI-Set und Zielwerte verabschieden** (§ 5), einschließlich
   der kanalgetrennten Reply-Schwelle statt der pauschalen 10 %.
4. **E-A4 — Planungskonflikt 300er-Schwelle** (📌 neu 17.08.2026, R16-C):
   Vier Optionen mit Folgen, gesperrten Entlastungen und einer Empfehlung
   unter Vorbehalt stehen in **§ 4.4**. Zu entscheiden ist, welcher Weg
   gegangen wird — (A) Wellen auf 300 deckeln · (B) Neu-Führung als
   Regelbetrieb · (C) Schwelle anpassen · (D) zuerst den Umfang der
   Neu-Führung definieren. **Dieser Plan empfiehlt (D), dann (B)** und
   entscheidet nicht. ⚠️ Die Umsetzung von (C) oder (D) berührt
   `akquise/interessenabwaegung-o8.md` § 11.3 — **anderer Träger**, nicht
   dieser Plan.

---

## 9. Nebenbefunde für andere Stränge

Aus der Arbeit an diesem Plan, **außerhalb des eigenen Auftrags** —
jeweils mit Zielort. Diese Session schreibt sie **nicht** selbst ein
(Scope: nur `akquise/**`).

| # | Befund | Zielort | Nächste Aktion |
|---|---|---|---|
| **N-1** | **Der Nachfass-Anruf nach eigenem Werbebrief ist rechtlich ungeklärt** — die Rechtsmatrix behandelt die Konstellation nicht, deckt aber ausdrücklich keinen Kanal-Rückschluss. Betrifft den Kanal, den D1 auf Rang 1 setzt | `handel/kanal-rechtsmatrix.md` (A2/A7) | Als offener Punkt aufnehmen; ggf. in den anwaltlichen Klärungsbedarf, den die Geltungsgrenze dort ohnehin vorsieht |
| **N-2** | **Preismodell/Angebotsarchitektur fehlt und sperrt S1 (Angebot bis 23.10.)** — sie ist in `R00-planpruefung` § Top-5 Punkt 3 als „größte Einzellücke" benannt und im `handel/`-Bestand nicht vorhanden | MKT-HANDEL (HANDEL1) | Priorisierung durch die Leitsession — der Terminpfad dieses Plans hängt daran |
| **N-3** | **KPI-5-Schwelle „unter 10 % Antworten"** stammt aus einem E-Mail-/Online-Kanalbild und erzeugt beim Briefkanal einen Dauer-Fehlalarm | MKT-OPS (OPS1) | Schwelle je Kanal trennen |
| **N-4** | **Internorga liegt hinter der November-Frist** — sie ist in CLAUDE.md und Projektquelle als Akquisekanal-Kandidat *und* als „Rückwärts-Anker" geführt; für den ersten Abschluss trägt sie nicht | Projektquelle § 2 (AKQ1) | Formulierung schärfen: Anker für den Lead-Prozess, nicht Kanal für Abschluss 1 |
| **N-5** | **K2 läuft überwiegend über das Netzwerk von Kayhan Rasuly**, der bei zwei der drei Pilotobjekte Entscheider und zugleich WTSH-Antragsteller ist — die Offenlegungspflicht aus R7 (BELEG4) wirkt damit auch in die Akquise-Ansprache hinein, nicht nur in die Case Study | MKT-BELEG (BELEG4) + MKT-AKQ (AKQ2) | Beim Bau der Ansprache-Texte mitführen |
| **N-6** | **Der D3-Kasten Punkt 1 setzt die 24 Monate „zugleich" als Löschfrist des VVT-Eintrags „für die Zielkundenliste" (D2 Punkt 3) — das trägt nicht:** Kaltkontakte haben keinen Vertragsschluss, an den eine Frist anknüpfen könnte. Außerdem kollidiert der nicht übernommene Zusatz „danach Einwilligung einholen" (A5) mit einer Löschung nach 24 Monaten | MKT-HANDEL (`handel/kanal-rechtsmatrix.md` D3 Punkt 1) | Kasten präzisieren: Frist gilt der **Kundenliste**; für die Zielkundenliste ist eine eigene Frist zu entscheiden |
| **N-7** | **In der Rechtsmatrix selbst fehlt am A7-Bullet („Die Adressen dürfen nicht aus Impressen stammen") der Vorwärtsverweis auf den späteren Weg-b-Entscheid.** Wer A7 liest und den D3-Kasten nicht kennt, handelt nach einer überholten Anweisung | MKT-HANDEL (A7, „Was das für unsere Zielkundenliste heißt") | Vorwärtsverweis nachtragen (Doku-Hygiene-Regel: an der Stelle, wo der Leser ankommt) |
| **N-8** | **Fremde Verteiler sind in der Rechtsmatrix nicht als eigener Kanal geprüft** — D1 führt sie als Rang 3, Teil A hat keinen Abschnitt dazu. Offen ist insbesondere, ob die Einwilligung der Verbandsempfänger Werbung **für uns** deckt (A6 verlangt, dass der Einwilligungstext „welche Produkte oder Dienstleistungen welcher Unternehmen" benennt) | MKT-HANDEL (Rechtsmatrix, neuer Teil-A-Abschnitt) | Vor der ersten Platzierung klären — mit H-4 gekoppelt |

---

## 10. Bewusste Grenzen dieses Plans

- **Keine gemessene Konversionszahl.** Alle Trichterwerte sind ④; der
  Plan ist so gebaut, dass Welle 1 sie ersetzt (§ 4.3).
- **Keine Kostenrechnung.** Weder Porto (A-7) noch Anzeigenpreise (H-4)
  noch ein Preismodell (N-2) liegen vor. Eine Budgetzeile wäre erfunden.
- **Kein Kanalmix-Entscheid** — der Vorbehalt oben gilt bis zum
  FUND2-Persona-Befund.
- **Die Zielgruppen-Untergrenze ist offen — und zwar unbeschrieben, nicht
  bewusst offengelassen.** Das Positionierungspapier setzt ausdrücklich
  keine harte **Obergrenze**: „Eine harte Obergrenze (Zimmerzahl,
  MA-Zahl) wird bewusst NICHT gesetzt, bevor FUND2 die Entscheiderfrage
  beantwortet hat" (§ 3.2 dort). ⚠️ **Zur UNTERgrenze sagt es nichts** —
  in §§ 3.1–3.3 steht dazu kein Satz. Das ist eine Lücke, keine
  Entscheidung; sie hier als „bewusst offen" zu führen wäre eine
  Aussage, die die Quelle nicht trägt (Prüferbefund P-18). Der
  Gebietsschnitt im Regelwerk (§ 8) ersetzt beide Grenzen **nicht**, er
  priorisiert nur innerhalb des Bestands.
- **Nicht geprüft:** ob die 1.038 SH-Hotelleriebetriebe nach Abzug der
  Konzern-/Ketten-/Franchise-Betriebe (Ausschluss nach
  Positionierungspapier § 3.3) noch eine Menge ergeben, die die
  Szenarien aus § 4.2 überhaupt zulässt. Dafür fehlt eine
  Betreiberstruktur-Schneidung — der Zugang dazu ist laut
  `regionalstatistik-groessenklassen.md` § 8 selbst ein offener Posten
  (Auskunftsweg Statistikamt Nord).

---

*Erstellt in Runde R08-A (Session Ben Beckman), MKT-AKQ. Quellenbasis:
`handel/kanal-rechtsmatrix.md` (vollständig gelesen im Stand
`@d11535f`, dort 856 Zeilen; seither auf 866 gewachsen — Belegstand als
Commit statt Zeilenzahl, Befund B-1) ·
`beleg/baseline-messplan.md` § 5 (Muster) ·
`protokolle/R00-planpruefung-2026-08-09.md` § (c)/(e) ·
`fund/erhebung/regionalstatistik-groessenklassen.md` § 4.4/§ 8 ·
`fund/positionierungspapier.md` § 3 · `projektquelle-mkt.md` § 2/§ 7 ·
`STATUS.md`. Kalenderangaben per `Get-Date` erhoben, nicht aus dem
Gedächtnis.*
