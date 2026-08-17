# Kanal-Rechtsmatrix — Akquisekanäle nach § 7 UWG und DSGVO

**Strang:** MKT-HANDEL · **Arbeitspaket:** HANDEL3 · **Runde:** R07-C
(Session Lucky Roux) · **Stand der ERHEBUNG:** 10.08.2026

> **Pflegestand (nicht Erhebungsstand).** *(⚠️ In der Kopfzeile stand
> bis 13.08.2026 nur „**Stand:** 10.08.2026". Nach zwei
> Nachtrags-Runden las sich das wie „Stand des Dokuments" — geändert
> wurde allein diese Beschriftung zu „Stand der ERHEBUNG", das Datum
> ist unverändert.)* Die Erhebung stammt vom
> 10.08.2026 und wurde seitdem **nicht wiederholt**; die Negative und
> Fassungsstände tragen deshalb weiter dieses Datum — **mit einer
> ausdrücklichen Ausnahme:** Die Zählungen am LG-Düsseldorf-Rohbeleg in
> A7 (199 / 187 / 109 / „§ 7 UWG" 0) und die UWG-Trefferzahlen im
> PB-1-Kasten sind am **13.08.2026** neu gemessen und tragen dieses
> Datum. *(Korrigiert nach Prüferbefund PB-11: Die Erstfassung sagte
> „alle" ohne Ausnahme und widersprach damit den Nachmessungen im
> selben Commit.)* Ergänzt wurde das
> Dokument danach ausschließlich durch **markierte Nachträge** —
> vollständige Liste, erhoben per `git log -- handel/kanal-rechtsmatrix.md`
> am 13.08.2026 (fünf Commits nach dem Erhebungs-Commit `a2e3e97`):
>
> | Datum | Runde | Was |
> |---|---|---|
> | 11.08.2026 | M1-Nachzug (`2e1b8e7`) | F-15 eingearbeitet, D3-Entscheide nachgetragen |
> | 11.08.2026 | R8-Leitsession (`474b95e`) | N-6-Geltungsvermerk in D3.1, N-7-Vorwärtsverweise an fünf gekippten Impressums-Stellen |
> | 12.08.2026 | R9-Debrief Teil 2 (`c42d32c`) | Nebenbefunde an ihren Zielorten verankert (u. a. der Merker-Kasten unten) |
> | 13.08.2026 | R13-B (`63a995e`, `6bd4a9e`) | **O-9** als offener Posten geführt + Prüfer-Disposition |
> | 13.08.2026 | **R14-B** *(dieser Stand)* | die fünf offenen Befunde **R9A-N-9 / N-11 / N-12 / N-13 / N-14** an ihren Sachstellen eingearbeitet (C4 · A7 zweimal · Teil B), Merker-Kasten disponiert |
>
> **Kein Nachtrag ersetzt eine Bestandsaussage** — alte Fassungen
> bleiben lesbar.

---

## ⚠️ Geltungsgrenze

**Dieses Dokument ist eine eigene Recherche zur betrieblichen
Orientierung. Es ist KEINE Rechtsberatung** und ersetzt sie nicht. Es
ist von einer Marketing-Session erstellt worden, nicht von einem
Rechtsanwalt. Wo es „unzulässig" sagt, heißt das: Nach den hier
belegten Normen und Entscheidungen spricht das Ergebnis dafür — nicht,
dass ein Gericht im Einzelfall so entscheiden wird.

**Was das Dokument leisten soll:** Es soll verhindern, dass wir einen
Akquisekanal aufbauen, der uns eine Abmahnung einträgt, und es soll
sagen, welche Kanäle wir ohne Einwilligung benutzen dürfen. **Vor dem
ersten scharfen Massenversand über einen als „unzulässig" oder
„streitig" markierten Kanal ist anwaltlicher Rat einzuholen** — nicht
danach.

**Wo die Rechtslage streitig oder ungeklärt ist, steht „streitig" in der
Zeile.** Das Dokument glättet nicht zum bequemeren Pol. Wo eine
Recherche nichts gefunden hat, steht „nicht gefunden" mit dem Suchraum —
das ist etwas anderes als „gibt es nicht".

---

## Erhebungsstand und Methode

| Punkt | Angabe |
|---|---|
| **Erhebungsdatum** | 10.08.2026 (alle Abrufe dieses Tages) |
| **Fassungsstand UWG** | Bekanntmachung v. 3.3.2010 (BGBl. I S. 254), **zuletzt geändert durch Art. 6 G v. 12.5.2026 (BGBl. 2026 I Nr. 139)** — Vollzitat der Gesamtausgabe, selbst gelesen |
| **Gesetzestexte** | `gesetze-im-internet.de`, je Einzelnorm per `curl` geholt (ISO-8859-1, latin1-dekodiert): UWG §§ 1, 2, 3, 7, 7a, 8, 8b, 8c, 9, 12, 13, 13a, 14, 20 + Gesamtausgabe · DDG §§ 5, 6 · TDDDG § 25 · BDSG §§ 38, 40 · BGB §§ 823, 1004. **21 Abrufe, alle HTTP 200 im ersten Versuch.** Ein weiterer Abruf (UWG-Anhang) gab 404 — der Pfad war **geraten**; das ist eine Aussage über die Vermutung, nicht über den Anhang, dessen Text über die Gesamtausgabe vorliegt |
| **EU-Recht** | DSGVO (CELEX 32016R0679), ePrivacy-RL konsolidiert (02002L0058-20091219), RL 2006/114/EG (32006L0114) — **deutsche Sprachfassung**, über das Cellar-Repository des Amts für Veröffentlichungen der EU |
| **Rechtsprechung** | Volltexte, soweit erreichbar, an amtlichen Quellen (NRWE, EuGH-Sprachfassung) bzw. an Volltext-Dokumentationsdiensten — **Leseweg je Aussage einzeln ausgewiesen**. Die Leit-Session hat **vier** Entscheidungen selbst im Volltext gegengelesen: OLG Hamm 18 U 110/21 und 18 U 154/22, LG Düsseldorf 38 O 243/23 (alle NRWE) sowie EuGH C-654/23 |
| **Vorgehen** | Recherche-Fan-out mit neun Subagenten, je Kanal einer; danach ein eigener Nachprüfdurchgang der Leit-Session, in dem **Aussage und Fundstelle getrennt** geprüft wurden |
| **Prüfskripte** | Mechanischer Zitatabgleich gegen **29 selbst beschaffte Volltexte** (25 Normen, 4 Entscheidungen): **64 von 65 geprüften Fundstellen bestätigt**; die eine Abweichung war ein fehlerhafter Prüfstring der Leit-Session, kein Agentenfehler. Dazu ein Selbsttest der Negativ-Aussagen über § 7 UWG mit 35 Mustern (15 `MUSS`, 20 `TREFFEN-NICHT`) — **0 Abweichungen** |

### Zwei Werkzeugbefunde, die den Erhebungsstand einschränken

- **`eur-lex.europa.eu` ist über `curl` und über WebFetch nicht
  erreichbar** — die Domain antwortet mit HTTP 202 und leerem Body bzw.
  einer JavaScript-Challenge (mehrfach reproduziert, auch von mehreren
  Agenten unabhängig). **Das ist ein Kanalbefund, kein Quellen-Negativ.**
  Der Weg über `publications.europa.eu/resource/celex/<CELEX>` liefert
  dieselbe amtliche Fassung mit HTTP 200.
- **Das Bundesgesetzblatt-Archiv (`bgbl.de`) ist ein JavaScript-Viewer**;
  der Volltext steht nicht im ausgelieferten HTML. Angaben zu
  Änderungsgesetzen konnten daher **nicht am BGBl. selbst** verifiziert
  werden — wo sie vorkommen, ist die Belegstufe ausgewiesen.

---

## ⚠️ Zitierfalle: Die Nummerierung des § 7 Abs. 2 UWG hat sich verschoben

**Wer Rechtsprechung oder Kanzleitexte zu diesem Thema liest, liest fast
immer die alte Zählung.** Das betrifft praktisch die gesamte verfügbare
Literatur und ist die häufigste Fehlerquelle beim Zitieren:

| Kanal | Alte Zählung (bis 27.05.2022) | **Heute geltend** |
|---|---|---|
| Telefonwerbung | § 7 Abs. 2 **Nr. 2** | **§ 7 Abs. 2 Nr. 1** |
| Elektronische Post (E-Mail, Fax, Anrufmaschine) | § 7 Abs. 2 **Nr. 3** | **§ 7 Abs. 2 Nr. 2** |
| Absenderverschleierung / fehlende Abmeldeadresse | § 7 Abs. 2 **Nr. 4** | **§ 7 Abs. 2 Nr. 3** |
| Hartnäckiges Ansprechen (nur ggü. Verbrauchern) | § 7 Abs. 2 **Nr. 1** | **Anhang zu § 3 Abs. 3 Nr. 26** |

**Wie das hier belegt ist** — vier voneinander unabhängige Beine, weil
das BGBl. nicht abrufbar war (s. o.):

1. **Systematik des heutigen Textes, selbst gelesen:** § 7 Abs. 3 UWG
   beginnt mit „Abweichend von **Absatz 2 Nummer 2**" — und die
   Bestandskunden-Ausnahme betrifft unstreitig elektronische Post. Also
   ist elektronische Post heute Nr. 2.
2. **Der Inhalt der weggefallenen alten Nr. 1 ist auffindbar geblieben:**
   „hartnäckiges und unerwünschtes Ansprechen des Verbrauchers mittels
   Telefonanrufen, unter Verwendung eines Faxgerätes, elektronischer Post
   oder sonstiger für den Fernabsatz geeigneter Mittel der kommerziellen
   Kommunikation" steht heute im **Anhang zu § 3 Abs. 3 Nr. 26 UWG**
   (selbst im UWG-Gesamttext gefunden und gezählt).
3. **Eigener Rechtsprechungsfund als Zeitanker:** OLG Hamm, Beschl. v.
   **23.12.2021** – 18 U 110/21 (von der Leit-Session im Volltext am
   amtlichen NRWE gelesen) zitiert Telefonwerbung als „§ 7 Abs. 2 Nr. 2
   UWG" und elektronische Post als „§ 7 Abs. 2 Nr. 3 UWG". Ende 2021 galt
   also noch die alte Zählung — was den Umstellungszeitpunkt nach hinten
   eingrenzt.
4. **Zwei Subagenten unabhängig voneinander** datieren die Umstellung auf
   den **28.05.2022** (Änderungsgesetz v. 10.08.2021). ⚠️ **Belegstufe:
   Drittquelle** — am Bundesgesetzblatt nicht gegengelesen.

> **Merksatz:** Jedes Zitat „§ 7 Abs. 2 Nr. 3 UWG" aus einer Quelle vor
> Mai 2022 meint die heutige **Nr. 2** (E-Mail). Wer es ungeprüft
> übernimmt, zitiert heute die Verschleierungs-Vorschrift — und wer
> heute nach Rechtsprechung zu „§ 7 Abs. 2 Nr. 1 UWG" (Telefon) sucht,
> findet die ganze BGH-Linie **nicht**, weil sie unter „Nr. 2" steht.

---

## Die drei Achsen — jede Kontaktaufnahme muss alle drei bestehen

Ein Kanal ist erst benutzbar, wenn er auf **allen drei** Achsen sauber
ist. Sie sind unabhängig voneinander; eine grüne Achse heilt keine rote.

| Achse | Frage | Rechtsfolge bei Verstoß |
|---|---|---|
| **1 · UWG** (§ 7) | Dürfen wir über diesen Kanal ansprechen? | Unterlassung, Abmahnkosten, Vertragsstrafe, in engen Fällen Bußgeld |
| **2 · DSGVO** | Dürfen wir die Kontaktdaten dafür verarbeiten — und haben wir informiert? | Aufsichtsverfahren, Bußgeld (Art. 83), Schadensersatz (Art. 82) |
| **3 · Herkunft der Adresse** | Erlaubt die Quelle, aus der die Adresse stammt, ihre Nutzung zu Werbezwecken? | Vertrags-/AGB-Verstoß, Plattform-Sperre, ggf. Wettbewerbsverstoß |

**Achse 3 wird regelmäßig vergessen und ist bei uns bereits konkret
belastet:** Die IHK-Designkontor-Anbieterliste (~159 Einträge, Zielgruppe
Beherbergung), die in R05-A als Zielkundenquelle erfasst wurde, trägt den
ausdrücklichen Vermerk **„Die Daten dürfen nicht zu Werbezwecken genutzt
werden"** (Fundstelle: `fund/wettbewerbsbild.md`, Befund R05-A).
Eintragskanal ja — Adressquelle nein. **Diese Liste darf nicht in die
Zielkundenliste einfließen.**

---

## Belegstufen-Legende

Leseweg und Quellenart werden **getrennt** geführt, weil eine sauber
zitierte Anbieter- oder Sekundärquelle beim Verdichten sonst wie ein
geprüfter Fakt wirkt.

| Zeichen | Leseweg |
|---|---|
| **①** | Volltext selbst gelesen (Leit-Session, mit URL und Datum) |
| **②** | Volltext durch Subagenten gelesen, Fundstelle von der Leit-Session mechanisch gegengeprüft |
| **③** | Nur in einer Sekundärquelle referenziert — Volltext **nicht** gelesen |
| **④** | Annahme / nicht erhoben — **kein Beleg** |

| Zeichen | Quellenart |
|---|---|
| **A** | Amtliche Primärquelle (Gesetzestext, amtliche Sprachfassung, amtliche Rechtsprechungsdatenbank) |
| **B** | Volltext-Dokumentationsdienst / Fachzeitschrift |
| **C** | Kanzlei-Blog, Übersicht, Pressemitteilung |
| **D** | Selbstsetzung eines Privaten (Plattform-AGB) |

---

---

# Die Matrix auf einen Blick

Grundfall jeder Zeile: **ein Hotelbetrieb, den wir nicht kennen, ohne Vorbeziehung, ohne Einwilligung.** Die Detailbegründung steht im jeweils verlinkten Abschnitt.

| Kanal | Ohne Einwilligung | Norm | Voraussetzung / Grenze | Was das für die Zielkundenliste heißt |
|---|---|---|---|---|
| **[E-Mail-Kaltakquise](#a1--e-mail-kaltakquise-b2b)** | ⛔ **unzulässig** | § 7 Abs. 2 **Nr. 2** UWG | „vorherige **ausdrückliche** Einwilligung des Adressaten" — **keine** B2B-Ausnahme, **keine Interessenabwägung** | Scheidet als Akquisekanal aus. Kein Zuschnitt, keine Formulierung, keine Passung ändert das |
| **[Telefon-Kaltakquise](#a2--telefon-kaltakquise-b2b)** | ⚠️ **unzulässig, wenn nur auf die Branche gestützt** | § 7 Abs. 2 Nr. 1 Alt. 2 UWG | „zumindest **mutmaßliche** Einwilligung" — verlangt einen **konkreten, aus dem Interessenbereich des Angerufenen herzuleitenden Grund** | Nur bei belegbarem persönlichem Vorkontakt oder protokollierter Rückrufzusage. Rufnummer immer anzeigen |
| **[Post / Brief](#a7--postalische-werbung-brief)** | ✅ **zulässig** | **kein** Tatbestand in § 7 Abs. 2; es gilt § 7 Abs. 1 UWG | Unzulässig erst bei **Hartnäckigkeit** bzw. erkennbarem Widerspruch. Das Risiko liegt in **Aufmachung** und **DSGVO-Pflichtinhalten**, nicht im Kanal | **Unser tragfähigster Erstkontakt-Kanal.** An die Firma adressieren; sobald personalisiert wird, gehören Art.-14-Information und Widerspruchshinweis **in den Brief** |
| **[LinkedIn-Direktnachricht](#a3--linkedin-direktnachricht-und-die-elektronische-post-frage)** | ⛔ **unzulässig** | § 7 Abs. 2 Nr. 2 UWG (Plattform-Postfach = „elektronische Post"); zusätzlich Nr. 3 | Vernetzung, Profil und Plattform-AGB sind **keine** Einwilligung | Kein Versandkanal. Nutzbar für Sichtbarkeit und Recherche — Werbetext in der Kontaktanfrage ist doppelt verboten |
| **[Newsletter mit Double-Opt-in](#a6--newsletter-mit-double-opt-in)** | ✅ **zulässig** | § 7 Abs. 2 Nr. 2 UWG · Art. 4 Nr. 11, 7 DSGVO · **§ 25 TDDDG** | Nur mit **selbst angemeldeten** Adressen; Tracking braucht eine **eigene** Einwilligung | Kein Weg, eine recherchierte Liste zu bespielen. Tool muss Tracking pro Empfänger abschalten können |
| **[Messe-/Veranstaltungskontakte](#a4--messe--und-veranstaltungskontakte)** | ✅ **zulässig bei ausdrücklicher Zusage** | § 7 Abs. 2 Nr. 2 UWG · Art. 13 DSGVO | Visitenkarte **allein trägt nicht**; die Zusage bestimmt die **Reichweite** | Lead-Bogen mit abgesetztem Einwilligungsfeld ist Pflichtwerkzeug — **vor** der Internorga fertig |
| **[Bestandskunden-Ausnahme](#a5--bestandskunden-ausnahme--7-abs-3-uwg)** | ✅ **zulässig bei allen vier Voraussetzungen** | § 7 Abs. 3 Nr. 1–4 UWG | **Nur elektronische Post** — nie Telefon, nie Fax. Alle vier Punkte **kumulativ** | Für Kaltakquise irrelevant. Ab dem ersten Kunden sofort richtig aufsetzen — der Erhebungs-Hinweis ist nachträglich nicht heilbar |

**Ist eine Plattform-Nachricht „elektronische Post" i. S. d. Norm?** → **Ja**, nach richtlinienkonformer Auslegung (Art. 2 lit. h RL 2002/58/EG) und nach der Rechtsprechung. Die im Auftrag erwartete Einstufung „streitig" hat sich **nicht bestätigt**; eine Gegenposition wurde gesucht und nicht gefunden (Suchraum in A3 benannt). Details und Belegkraft: [A3](#a3--linkedin-direktnachricht-und-die-elektronische-post-frage).

**Zusätzlich für JEDEN Kanal, bei dem personenbezogene Daten im Spiel sind** ([Teil C](#teil-c--die-dsgvo-achse-was-mit-den-daten-selbst-passiert)):

| Pflicht | Kern |
|---|---|
| **Rechtsgrundlage** | Art. 6 Abs. 1 lit. f — Abwägung dokumentieren. **Ist der Kanal nach UWG gesperrt, fehlt bereits das berechtigte Interesse** |
| **Adressquelle** | ⛔ **Impressumsdaten dürfen nach Aufsichtsauffassung nicht für Werbung genutzt werden** — trifft die naheliegendste Quelle. *(Betriebsfolge überholt durch D3-Entscheid 2 v. 11.08.2026, Weg b: Nutzung mit dokumentiertem Restrisiko + Bau-Pflichten — die Aufsichtsauffassung bleibt gegenläufig; s. D3-Kasten)* |
| **Information (Art. 14)** | 13 Pflichtangaben; **die Monatsfrist läuft ab Listenaufbau**, nicht ab Kontaktaufnahme |
| **Widerspruch (Art. 21)** | absolut, ohne Abwägung; abgesetzter Hinweis in jeder Aussendung; Sperrdatei statt Löschung |
| **Organisation** | Verarbeitungsverzeichnis (KMU-Ausnahme greift **nicht**), AVV, Löschkonzept, Auskunftsprozess |

---

# Teil A — Die Kanäle einzeln

## A1 · E-Mail-Kaltakquise B2B

| | |
|---|---|
| **Einstufung** | **UNZULÄSSIG** — ohne Wenn und Aber, und **ohne Interessenabwägung** |
| **Norm** | § 7 Abs. 2 **Nr. 2** UWG |
| **Voraussetzung** | „vorherige **ausdrückliche** Einwilligung des **Adressaten**" — konkludent, mutmaßlich und branchenbezogen genügen alle nicht |

### Der Wortlautvergleich, der die B2B-Frage entscheidet

Beide Nummern stehen in **demselben Absatz** und sind deshalb unmittelbar vergleichbar (① A, selbst geprüft):

- **Nr. 1 (Telefon)** unterscheidet ausdrücklich: „gegenüber einem **Verbraucher** ohne dessen vorherige ausdrückliche Einwilligung **oder gegenüber einem sonstigen Marktteilnehmer** ohne dessen zumindest mutmaßliche Einwilligung".
- **Nr. 2 (elektronische Post)** kennt diese Unterscheidung **nicht**. Dort steht nur „**des Adressaten**" — ohne jede Differenzierung.

**Daraus folgt: Es gibt keine B2B-Erleichterung bei E-Mail.** Dass unser Gegenüber ein gewerblicher Hotelbetrieb und kein Verbraucher ist, hilft nicht.

### ⭐ Die schärfste Aussage: Es findet keine Abwägung statt

Der BGH hat genau unsere Konstellation entschieden — ein Unternehmen schickt einem anderen, **mit dem zuvor kein geschäftlicher Kontakt bestand**, ein sachlich passendes Angebot per E-Mail (BGH, Beschl. v. 10.12.2009 – I ZR 201/07, amtliches PDF vom Agenten im Volltext gelesen, ② A):

> Rn. 10: „Der deutsche Gesetzgeber hat in der Regelung des § 7 Abs. 2 Nr. 3 UWG 2004 indes **keinen Gebrauch von der ihm in Art. 13 Abs. 5 der Richtlinie 2002/58/EG eröffneten Möglichkeit gemacht, für den geschäftlichen Bereich ein niedrigeres Schutzniveau vorzusehen** […]. **Damit scheidet auch in diesem Bereich eine Interessenabwägung aus.**"

> **Das ist die operativ wichtigste Erkenntnis des ganzen Dokuments für diesen Kanal:** Argumente der Bauart „unser Angebot passt doch perfekt zu diesem Hotel", „wir schreiben nur wenige, sorgfältig ausgewählte Betriebe an", „die Mail ist kurz und höflich" sind nicht *schwach* — sie sind **unerheblich**. Es gibt keine Waagschale, in die sie gelegt werden könnten.

Damit ist zugleich die EU-Ebene geklärt: Art. 13 Abs. 5 der ePrivacy-Richtlinie **erlaubt** den Mitgliedstaaten, für juristische Personen ein anderes Schutzniveau vorzusehen — **Deutschland hat davon keinen Gebrauch gemacht** und schützt „Marktteilnehmer" einheitlich.

### Gilt die Telefon-Regel analog? — Ausdrücklich verworfen

Der BGH hat die Analogie nicht bloß im Ergebnis abgelehnt, sondern sie ausdrücklich erörtert (BGH, Urt. v. 17.07.2008 – I ZR 197/05, ② A): Für die telefonische Erstansprache genüge das mutmaßliche Einverständnis — „**Demgegenüber kann nach § 7 Abs. 2 Nr. 3 UWG E-Mail-Werbung nicht durch ein mutmaßliches, sondern nur durch ein ausdrückliches oder konkludentes Einverständnis gerechtfertigt werden.**" Der Gesetzgeber habe „das Schutzniveau für natürliche Personen und andere Marktteilnehmer **einheitlich** bestimmt".

⚠️ **Und selbst „konkludent" ist heute überholt:** Das Wort „ausdrückliche" kam erst mit dem UWG 2008 in die Norm. Bis dahin genügte eine konkludente Einwilligung, seither nicht mehr (BGH, Urt. v. 11.03.2010 – I ZR 27/08, ② A: „anders als nunmehr gemäß § 7 Abs. 2 Nr. 3 UWG 2008, der eine ‚vorherige ausdrückliche Einwilligung' erfordert"). **Wer ältere Rechtsprechung zur konkludenten Einwilligung liest, liest überholtes Recht.** Eine bloß mutmaßliche Einwilligung genügte im Übrigen auch damals nie.

### ⚠️ Die veröffentlichte Adresse — die Falle liegt in der Richtung

Hier steht eine Passage, die in eine Richtung für uns spricht und in die andere gegen uns. Sie gehört vollständig ins Dokument, weil ihre Verkürzung genau der Fehler wäre, vor dem dieses Papier warnen soll (BGH I ZR 197/05, Rn. 22, ② A):

> „**Die Angabe einer E-Mail-Adresse auf der Internetseite eines Unternehmens bringt zwar dessen konkludentes Einverständnis damit zum Ausdruck, Anfragen potentieller Kunden zu dem üblichen Waren- und Dienstleistungsangebot des Unternehmens unter dieser Adresse zu empfangen** […]."

| Richtung | Gedeckt? |
|---|---|
| **Eingehend:** Ein potentieller Gast fragt beim Hotel nach Zimmern oder Tagungsräumen | **ja** — konkludentes Einverständnis |
| **Abgehend:** Wir bewerben beim Hotel **unser eigenes** Angebot | **nein** — der Kontakthinweis betrifft das Angebot **des Adressaten**, nicht unseres |

**Wer einem Hotel etwas verkaufen will, ist nicht der „potentielle Kunde, der nach dem Hotelangebot fragt."** Die Passage hilft uns also nicht — aber wer sie nur halb kennt, hält sie fälschlich für einen Freibrief.

**Und der Adresstyp ändert nichts:** `info@` statt `vorname.nachname@` bringt keine andere Bewertung; der Unterlassungsanspruch gilt **domainweit** für alle gegenwärtig und künftig geschäftlich genutzten Adressen (BGH VI ZR 721/15, ③ — vom Agenten nicht selbst gelesen).

### Auch die Gestaltung der Mail ist reguliert — unabhängig von der Einwilligung

§ 7 Abs. 2 **Nr. 3** UWG trifft jede Werbenachricht zusätzlich (① A): verschleierte Absenderidentität (lit. a), Verstoß gegen § 6 Abs. 1 **DDG** (lit. b — ⚠️ nicht mehr TMG, Sekundärquellen sind hier veraltet), und das Fehlen einer „gültigen Adresse …, an die der Empfänger eine Aufforderung zur Einstellung solcher Nachrichten richten kann" (lit. c). **Auch die allererste Kaltmail braucht also einen funktionierenden Abmeldeweg.**

### Die Gegenposition — benannt, aber nicht verwendbar

**OLG Frankfurt a. M., Urt. v. 24.11.2016 – 6 U 33/16** soll eine konkludente Einwilligung angenommen haben, wo ein Adressat auf seiner Website ausdrücklich zur Kontaktaufnahme wegen Auftragsarbeiten aufforderte. ⚠️ **Belegstufe ④/C: Volltext von niemandem beschafft**, bekannt nur über einen Kanzleibeitrag — also Aussagen *über* das Urteil, keine Urteilszitate. **In dieser Form nicht verwertbar.** Praktisch relevant bliebe der Gedanke nur dort, wo ein Hotel auf seiner Seite ausdrücklich **Anbieter** zur Kontaktaufnahme auffordert („Sie sind Dienstleister? Schreiben Sie uns"). Vor jeder Berufung darauf: Volltext beschaffen.

### Was das für unsere Zielkundenliste heißt

- **Kalte Werbe-E-Mails an Hotelbetriebe scheiden als Akquisekanal aus.** Kein Zuschnitt der Liste, keine Formulierung und keine noch so gute Passung ändert daran etwas — es gibt keine Abwägung.
- **Kein Ausweichen über die Adressform** (`info@` ↔ personalisiert) und keines über die Betreffzeile.
- **Ein Kontaktformular des Hotels** ist rechtlich nicht geklärt: Zu Kontaktformularen als (Nicht-)Einwilligung wurde **kein Beleg gefunden**, bei nachweislich funktionierendem Suchkanal (Positivkontrolle traf andere Entscheidungen). „Nicht gefunden" ist nicht „zulässig".
- **Was bleibt:** Post (A7), Telefon bei belegbarem konkretem Anlass (A2), Messe- und Empfehlungskontakte (A4), Newsletter mit eigener Anmeldung (A6) — und Sichtbarkeit, die eingehende Anfragen erzeugt. Genau die deckt Rn. 22 nämlich ab.

---

## A2 · Telefon-Kaltakquise B2B

| | |
|---|---|
| **Einstufung** | **UNZULÄSSIG**, wenn allein auf die Branchenzugehörigkeit gestützt |
| **Norm** | § 7 Abs. 2 **Nr. 1** Alt. 2 UWG (Marktteilnehmer) · § 7 Abs. 1 S. 2 UWG |
| **Voraussetzung** | „zumindest **mutmaßliche** Einwilligung" — niedrigere Schwelle als bei Verbrauchern, aber **nicht** null |

**Der Wortlaut, an dem alles hängt** (① A): § 7 Abs. 2 Nr. 1 UWG erfasst Werbung mit einem Telefonanruf „gegenüber einem Verbraucher ohne dessen vorherige ausdrückliche Einwilligung **oder gegenüber einem sonstigen Marktteilnehmer ohne dessen zumindest mutmaßliche Einwilligung**". Ein Hotelbetrieb ist „sonstiger Marktteilnehmer" (§ 2 Abs. 1 Nr. 3 UWG: „jede weitere Person, die als Anbieter oder Nachfrager von Waren oder Dienstleistungen tätig ist", ① A).

### ⚠️ Die entscheidende Aussage: Branchenpassung genügt nicht

Das ist exakt unsere Konstellation — „ist ein Hotel, wir verkaufen Hotel-Software". Der BGH hat sie entschieden (② A, BGH, Urt. v. 16.11.2006 – I ZR 191/03, amtliches PDF vom Agenten im Volltext gelesen):

> „**Der allgemeine Sachbezug mit den von dem angerufenen Unternehmen angebotenen Dienstleistungen reichte für die Annahme einer mutmaßlichen Einwilligung nicht aus.** Anderenfalls wäre Telefonwerbung gegenüber Gewerbetreibenden mit seinen belästigenden und deshalb nicht generell hinnehmbaren Folgen nahezu unbeschränkt zulässig."

Verlangt ist stattdessen ein „**aufgrund konkreter tatsächlicher Umstände** … sachliches Interesse des Anzurufenden" (BGH, Urt. v. 05.02.2004 – I ZR 87/02) und die Prognose, „der Anzurufende **erwarte einen solchen Anruf oder werde ihm jedenfalls positiv gegenüberstehen**" (BGH, Urt. v. 20.09.2007 – I ZR 88/05). Das mutmaßliche Einverständnis muss sich dabei **auch auf das Medium** erstrecken — der Angerufene muss gerade mit einem *Anruf* einverstanden sein, nicht nur am Angebot interessiert.

**Zwei Verschärfungen aus jüngerer Zeit** (② A, BVerwG, Urt. v. 29.01.2025 – 6 C 3.23, Volltext vom Agenten gelesen):
- Die veröffentlichte Rufnummer trägt keine Einwilligung. Das BVerwG stellt fest, die Veröffentlichung in öffentlich zugänglichen Verzeichnissen diene „**ausschließlich dazu, die Erreichbarkeit für Patienten zu gewährleisten**" — übertragen: Die Hotel-Rufnummer auf der Website ist für **Gäste** da, nicht für Softwareanbieter.
- Amtlicher Leitsatz 2: Bei der Prüfung des berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO „**sind die Wertungen des § 7 Abs. 2 Nr. 1 UWG … zu berücksichtigen**". Der UWG-Verstoß schlägt damit auf die DSGVO durch — und öffnet den Aufsichtsweg dort, wo die Bundesnetzagentur nicht zuständig ist (s. u.).

Auch **Branchenüblichkeit** hilft nicht (BGH, Urt. v. 11.03.2010 – I ZR 27/08, ② A): Wenn viele Unternehmen einer Branche so werben, „besagt dieser Umstand nichts darüber, ob der Durchschnittsmarktteilnehmer mit dieser Werbemethode einverstanden ist. **Das Gegenteil dürfte vielmehr anzunehmen sein.**"

### Was trägt: persönlicher Vorkontakt

Dieselbe Entscheidung I ZR 27/08 ist die einzige der Leitentscheidungen, die die mutmaßliche Einwilligung **bejaht** — und sie öffnet die Kategorie: „**Die bereits bestehende Geschäftsbeziehung stellt lediglich einen Beispielsfall dar** … Der **persönliche Kontakt** … deutet ebenso wie die bereits bestehende Geschäftsbeziehung darauf hin, dass diese Kunden gegen einen Telefonanruf nichts einzuwenden haben." Für uns ist das der praktisch gangbare Weg: Messe, Empfehlung, früherer Austausch.

### STREITIG — die Gegenposition, ausdrücklich benannt

**LG Kleve, Urt. v. 28.09.2022 – 6 S 81/20** hat die mutmaßliche Einwilligung bei einem strukturgleichen Fall (Anruf bei einem Rechtsanwalt wegen kostenpflichtigem Portal-Eintrag) **bejaht**. ⚠️ **Belegstufe ③ C** — Volltext nicht gelesen, Einordnung als „absolute Mindermeinung" stammt aus zwei Kanzlei-Blogs. Die Lage ist streitig, aber stark asymmetrisch: Eine Kampagne auf ein einzelnes Landgerichtsurteil gegen BGH-Linie und BVerwG zu stützen, wäre nicht vertretbar.

### Kein Bußgeld — aber das ist die kleinere Sorge

**§ 20 Abs. 1 Nr. 1 UWG erfasst den B2B-Anruf nicht.** Die Norm verweist zwar auf „Absatz 2 Nummer 1 oder 2", beschreibt die Tathandlung aber als Werbung „mit einem Telefonanruf oder unter Verwendung einer automatischen Anrufmaschine **gegenüber einem Verbraucher**" (① A, selbst am Volltext geprüft). Auch § 7a UWG (Dokumentations- und Fünfjahres-Aufbewahrungspflicht) gilt nur „gegenüber einem Verbraucher" (① A).

> ⚠️ **Die verbreitete Aussage „Telefonwerbung kostet bis zu 300.000 € Bußgeld" gilt ausschließlich für Verbraucheranrufe.** Das ist die Stelle, an der Sekundärquellen falsch verkürzen. Die Bundesnetzagentur bestätigt das selbst: „Werbeanrufe gegenüber Unternehmern, Gewerbetreibenden und Freiberuflern kann die Bundesnetzagentur hingegen nicht mit einem Bußgeld belegen." (② A, Behörden-Selbstauskunft)
>
> **Daraus folgt keine Entwarnung.** Die Sanktion kommt über Abmahnung, Unterlassung und Vertragsstrafe (Teil B) — und seit BVerwG 6 C 3.23 zusätzlich über die Landesdatenschutzaufsicht.

**Ein Bußgeld trifft B2B doch** — bei unterdrückter oder manipulierter Rufnummernanzeige, nach Angabe der Bundesnetzagentur bis 300.000 €, „sowohl für Werbung gegenüber Verbraucherinnen und Verbrauchern als auch für Werbung gegenüber anderen Personen". ⚠️ Rechtsgrundlage (TDDDG) **nicht am Wortlaut verifiziert** (③ C). **Operativ zwingend: Rufnummer bei jedem Akquiseanruf anzeigen.**

### Was das für unsere Zielkundenliste heißt

- **Ein Hotel anzurufen, weil es ein Hotel ist, trägt nicht.** Wir brauchen je Kontakt einen konkreten, aus dessen Interessenbereich herzuleitenden Grund — und müssen ihn belegen können.
- **Der belastbare Weg ist die protokollierte Zusage** („rufen Sie mich nächste Woche an") aus einem persönlichen Vorkontakt. Dann brauchen wir die streitige Mutmaßungsfrage gar nicht zu entscheiden.
- **Die Beweislast liegt bei uns** (BGH, Urt. v. 11.03.2004 – I ZR 81/01, amtlicher Leitsatz b: „Ein die Wettbewerbswidrigkeit ausschließendes Einverständnis des Empfängers der E-Mail hat **der Werbende darzulegen und gegebenenfalls zu beweisen**"). ⚠️ Diese Entscheidung erging zu **E-Mail** und zu § 1 UWG a. F.; eine Beweislastaussage **speziell zu § 7 Abs. 2 Nr. 1 UWG** wurde in keiner der geprüften höchstrichterlichen Quellen gefunden (Suchraum: vier BGH-Volltexte + BVerwG-Volltext, Beweislast-Muster je 0 Treffer, Positivkontrolle „Einwilligung" 4–39 Treffer je Dokument). Die Verteilung folgt der allgemeinen Regel — **normidentisch belegt ist sie nicht**.
- **Rufnummer immer mitsenden.**

---

## A3 · LinkedIn-Direktnachricht (und die „elektronische Post"-Frage)

| | |
|---|---|
| **Einstufung** | **UNZULÄSSIG** ohne vorherige ausdrückliche Einwilligung — die im Auftrag erwartete Einstufung „streitig" hat sich **nicht bestätigt** |
| **Norm** | § 7 Abs. 2 Nr. 2 UWG (Einwilligung) · zusätzlich § 7 Abs. 2 Nr. 3 UWG (Absender, Abmeldeweg) |
| **Zweite Achse** | LinkedIn-Nutzungsbedingungen — Rechtsfolge Accountsperre, **nicht** Abmahnung |

### Ist eine Plattform-Nachricht „elektronische Post"?

**Der Begriff ist im deutschen Recht nicht legaldefiniert.** § 2 UWG definiert elf Begriffe, „elektronische Post" ist nicht darunter (① A, selbst geprüft). Maßgeblich ist deshalb die richtlinienkonforme Auslegung nach **Art. 2 lit. h der Richtlinie 2002/58/EG**, die ich selbst im amtlichen Volltext gelesen habe (① A):

> „‚elektronische Post' jede über ein öffentliches Kommunikationsnetz verschickte Text-, Sprach-, Ton- oder Bildnachricht, **die im Netz oder im Endgerät des Empfängers gespeichert werden kann, bis sie von diesem abgerufen wird**."

Die Definition ist bewusst technikoffen. Das Merkmal „**im Netz** … gespeichert … bis sie … abgerufen wird" beschreibt exakt ein serverseitiges Plattform-Postfach. Der naheliegende Einwand („die Nachricht verlässt LinkedIn nie") wird durch dieses Tatbestandsmerkmal gerade entkräftet.

**Die Rechtsprechung geht denselben Weg.** OLG Hamm, Hinweisbeschl. v. 03.05.2023 – 18 U 154/22, Rn. 45 — von mir selbst am amtlichen NRWE im Volltext gelesen (① A):

> „Daher fallen unter den Begriff der elektronische Post im Sinne des § 7 Abs. 2 Nr. 3 UWG a.F. neben E-Mails, SMS und MMS **auch sämtliche Nachrichten über Social Media-Dienste wie Xing, Facebook, LinkedIn oder WhatsApp**".

**Ein Zusatzbefund meines eigenen Durchgangs, der über die Aufzählung hinausträgt:** Rn. 46 derselben Entscheidung stellt nicht auf die Einordnung als „Social-Media-Dienst" ab, sondern auf die **Funktionsweise des Postfachs** — „Auch hier werden Nachrichten asynchron übermittelt und auf dem Server des jeweiligen Portalbetreibers … gespeichert, bis dieser sie abruft." Das ist die Subsumtion unter Art. 2 lit. h und trägt für **jedes** Plattform-Postfach.

⚠️ **Einordnung der Belegkraft, ehrlich:** 18 U 154/22 ist ein **Hinweisbeschluss** nach § 522 Abs. 2 ZPO (Tenor von mir gelesen), das Verfahren endete durch **Berufungsrücknahme** am 17.05.2023 — eine Sachentscheidung ist nie ergangen. Streitgegenstand waren **Kontaktformulare von Immobilienportalen**, nicht LinkedIn; die LinkedIn-Nennung ist *obiter dictum*. Mehrere verbreitete Sekundärquellen datieren die Entscheidung falsch auf den 17.05.2023.

### Die Vernetzung ist keine Einwilligung

**OLG Hamm, Beschl. v. 23.12.2021 – 18 U 110/21**, Rn. 15 — von mir selbst am NRWE im Volltext gelesen (① A), und anders als 18 U 154/22 eine **echte Sachentscheidung** (Tenor: „Die Berufung der Klägerin … wird zurückgewiesen"):

> „Eine solche Einwilligung ist **in der etwaigen Akzeptanz von Klauselwerken der Plattformbetreiber nicht zu sehen**".

Das schneidet das Argument „wer ein LinkedIn-Profil anlegt, willigt in Nachrichten ein" direkt ab. ⚠️ **Drei Übertragbarkeitsgrenzen, die ich beim Gegenlesen gefunden habe und die im Agenten-Rücklauf fehlten:** Der Streitgegenstand war eine **Vertragsklage** (Nichtigkeit einer Akquise-Vereinbarung), die Angeschriebenen waren **Verbraucher** (Rn. 12: „der angerufenen Verbraucher"), und der Kanal waren **Portal-Kontaktformulare**. Für die E-Mail-Achse ist das unschädlich — § 7 Abs. 2 Nr. 2 unterscheidet nicht nach Verbraucher/Unternehmer —, für Telefon-Aussagen wäre es eine Grenze.

**Ein Fund aus derselben Entscheidung, der eine offene Frage schließt** (Rn. 17, ① A): „Damit fehlt es an einer in informierter Weise erklärten Einwilligung, die im Rahmen des § 7 Abs. 2 Nr. 2 UWG wegen des **zu seiner Auslegung heranzuziehenden Art. 4 Nr. 11 DSGVO** vorliegen muss." Damit ist obergerichtlich belegt, dass der DSGVO-Einwilligungsbegriff den Maßstab des § 7 Abs. 2 UWG bestimmt — ein Punkt, den ein anderer Agent noch als unbelegt markiert hatte.

**Ergänzend** AG Düsseldorf, Urt. v. 20.11.2025 – 23 C 120/25 (② B, Volltext vom Agenten gelesen, Leitsätze redaktionell): Aus einer Vernetzung auf LinkedIn kann „ohne Weiteres **keine ausdrückliche Einwilligung** in E-Mail-Werbung abgeleitet werden"; eine konkludente oder mutmaßliche Einwilligung genügt bei § 7 Abs. 2 Nr. 2 UWG nicht. ⚠️ Der dortige Kanal war **E-Mail**, nicht die Direktnachricht.

### Warum auch der Bestreiter nicht durchkommt: § 7 Abs. 2 Nr. 3 UWG

**Eigenbefund am Primärtext (① A):** § 7 Abs. 2 knüpft in Nr. 2 an „elektronische**r** Post" an, in **Nr. 3 aber an „eine Nachricht"** — und „Nachricht" **ist** legaldefiniert (§ 2 Abs. 1 Nr. 5 UWG: „jede Information, die zwischen einer endlichen Zahl von Beteiligten über einen öffentlich zugänglichen elektronischen Kommunikationsdienst ausgetauscht oder weitergeleitet wird"). Eine LinkedIn-DM erfüllt diese Definition zweifelsfrei.

**Folge:** Selbst wer die Nr.-2-Einordnung bestreitet, unterliegt der Nr. 3 — also dem Verbot verschleierter Absenderidentität (lit. a), dem Verweis auf § 6 Abs. 1 DDG (lit. b) und der Pflicht zu einer „gültigen Adresse …, an die der Empfänger eine Aufforderung zur Einstellung solcher Nachrichten richten kann" (lit. c). Der Bestreitensweg führt nicht ins Freie.

### Die Gegenposition wurde gesucht und nicht gefunden

Der Auftrag ging von „voraussichtlich streitig" aus. **Diese Prämisse hat sich nicht bestätigt.** Vier unterschiedlich formulierte Suchläufe, gezielt auf die Gegenansicht gerichtet („verneint", „nicht anwendbar", „Kritik", „umstritten"), lieferten ausschließlich die bejahenden Entscheidungen; die Kommentarliteratur (Köhler/Bornkamm/Feddersen, Ohly/Sosnitza, Mankowski, Büscher) wird in den gelesenen Entscheidungen durchweg für die Einbeziehung zitiert, eine Gegenfundstelle wird in keiner genannt. **Belegstufe des Negativs: „nicht gefunden", nicht „existiert nicht"** — Suchraum waren Websuche und die gelesenen Entscheidungen; Kommentar- und Aufsatzliteratur wurden nicht im Original durchsucht.

### Die zweite Achse: LinkedIn-Nutzungsbedingungen

Getrennt zu führen, weil die Rechtsfolge eine andere ist (Accountsperre statt Abmahnung) — und weil Einhaltung der Plattformregeln eine Nachricht **nicht** UWG-konform macht. Aus den Professional Community Policies (② D, Abruf 10.08.2026):

> „**Do not use our invitation feature to send promotional messages to people you don't know** or to otherwise spam people."

Das User Agreement (Fassung „Effective on November 3, 2025", ② D) untersagt zusätzlich ausdrücklich Scraping von Profildaten sowie „bots or other unauthorized automated methods to access the Services, add or download contacts, **send or redirect messages**".

### Was das für unsere Zielkundenliste heißt

- **Werbliche LinkedIn-Direktnachrichten an unbekannte Hoteliers sind kein zulässiger Akquisekanal.** Weder die Vernetzung noch das Profil noch „Open Profile" ersetzen die ausdrückliche Einwilligung.
- **Werbetext in der Kontaktanfrage ist doppelt getroffen** — rechtlich und plattformseitig ausdrücklich verboten.
- **Was bleibt:** LinkedIn als Recherche- und Sichtbarkeitskanal (eigene Inhalte, Profilpflege, Reaktion auf eingehende Anfragen) — nicht als Versandkanal.
- **Automatisierungstools und Profil-Scraping scheiden aus** (Plattformvertrag; zusätzlich Art. 14 DSGVO, s. Teil A6).
- **Die reine Kontaktanfrage ohne Werbetext** ist rechtlich nicht abschließend geklärt (keine Entscheidung gefunden, Suchraum benannt) — sie bleibt als **offene Rechtsfrage mit Restrisiko** markiert, nicht als grüner Kanal.

---

## A4 · Messe- und Veranstaltungskontakte

| | |
|---|---|
| **Einstufung** | **ZULÄSSIG bei ausdrücklicher Zusage** — aber die Visitenkarte allein trägt **nicht** |
| **Norm** | § 7 Abs. 2 Nr. 2 UWG (E-Mail) · § 7 Abs. 2 Nr. 1 UWG (Telefon) · Art. 13 DSGVO (Information) |

**Es gibt keine Messe-Ausnahme.** Suchraum: Volltext § 7 UWG (2.050 Zeichen); „Messe", „Visitenkarte", „Veranstaltung" je 0 Treffer, bei Positivkontrollen „Einwilligung" 3×, „Telefonanruf" 1×, „elektronischer Post" 2×; Teilwort-Gegenprobe „esse" trifft 8× (in „Adresse") — der Suchweg findet Teilzeichenketten dieser Form, das Fehlen von „Messe" ist also echt und kein Werkzeugartefakt (① A, eigener Selbsttest).

**Und § 7 Abs. 3 UWG hilft auf der Messe nicht:** Er verlangt, dass der Unternehmer die Adresse „im Zusammenhang mit dem **Verkauf** … von dem **Kunden**" erhalten hat. Ein Messebesucher ist kein Kunde, und es gab keinen Verkauf.

### Die drei Fälle — und nur zwei tragen

| Fall | Trägt? | Warum |
|---|---|---|
| **(a)** Visitenkarte kommentarlos übergeben | **nein** | Kontaktdatenmitteilung ist keine Willensbekundung; § 7 Abs. 2 Nr. 2 verlangt eine **ausdrückliche** Einwilligung, konkludent genügt nicht. Rechtsprechungsbeleg: LG Baden-Baden, Urt. v. 18.01.2012 – 5 O 100/11 KfH — ⚠️ **Belegstufe ③**, Volltext nicht gelesen, Az./Datum am Registereintrag verifiziert, Inhalt nur aus Referaten |
| **(b)** Visitenkarte + Bitte „schicken Sie mir Unterlagen" | **ja, aber eng** | Ausdrückliche Willensbekundung „für den bestimmten Fall" (Art. 4 Nr. 11 DSGVO, ① A). Sie deckt **genau die angefragte Zusendung** — nicht den Newsletter, nicht die dritte Nachfassmail, nicht eine Kampagne ein halbes Jahr später |
| **(c)** Unterschriebenes Einwilligungsfeld am Stand | **ja, am weitesten** | Nur dieser Fall erzeugt einen **Nachweis** (Art. 7 Abs. 1 DSGVO: „muss der Verantwortliche nachweisen können", ① A) |

**Wichtig — die naheliegende Ausrede trägt nicht:** „Das ist keine Werbung, das sind nur die angefragten Unterlagen" ist falsch. Werbung ist „jede Äußerung bei der Ausübung eines Handels, Gewerbes, Handwerks oder freien Berufs mit dem Ziel, den Absatz von Waren oder die Erbringung von Dienstleistungen … zu fördern" (Art. 2 lit. a RL 2006/114/EG, ① A). Der BGH zieht die Grenze bewusst weit — sogar eine Kundenzufriedenheitsbefragung neben einer Rechnung ist Werbung (BGH, Urt. v. 10.07.2018 – VI ZR 225/17, amtlicher Leitsatz, ② B). **Der tragfähige Anker ist deshalb die Einwilligung, nicht die Behauptung „keine Werbung".**

### Die Informationspflicht am Stand: Art. 13 DSGVO, ohne Nachfrist

Die Erhebung am Stand ist eine Erhebung **bei der betroffenen Person** — also Art. 13, nicht Art. 14. Der Wortlaut ist eindeutig: „so teilt der Verantwortliche der betroffenen Person **zum Zeitpunkt der Erhebung** dieser Daten Folgendes mit" (① A). **Es gibt keine Nachreichfrist.** Suchraum Art. 13 DSGVO: „innerhalb eines Monats" 0 Treffer, Positivkontrolle „zum Zeitpunkt der Erhebung" 2 Treffer. Die vielzitierte Monatsfrist steht in **Art. 14** und gilt hier gerade nicht.

### Was das für unsere Zielkundenliste heißt

- **Wer nur eine Visitenkarte hinterlässt, bekommt keine Mail.** Der Datensatz wird angelegt und als Fall (a) markiert.
- **Der Lead-Bogen ist Pflichtwerkzeug**, nicht Kür: abgesetztes, unangekreuztes Einwilligungsfeld (Art. 7 Abs. 2 DSGVO, Trennungsgebot) + Datenschutzhinweis zum Mitnehmen + Widerrufshinweis vor der Unterschrift (Art. 7 Abs. 3 DSGVO).
- **Protokolliert wird am Stand, nicht abends im Hotel** — und zwar: Datum/Uhrzeit (die „Vorherigkeit" der Einwilligung muss belegbar sein), Veranstaltung, Name unseres Mitarbeiters als Zeuge, **Version des Einwilligungstextes**, Erfassungsart (a)/(b)/(c) als Ankreuzfeld, **Wortlaut des Zugesagten** (er bestimmt die Reichweite), Rückruf-Zusage ja/nein.
- **Der Einwilligungstext ist Kanon** — einmal festgelegt, byte-gleich verwendet, versioniert (`v1-<Datum>`).
- **Für die Internorga (März)**, die MKT-AKQ als Rückwärts-Anker führt, heißt das: Der Lead-Prozess muss **vor** der Messe stehen, nicht danach.

---

## A5 · Bestandskunden-Ausnahme (§ 7 Abs. 3 UWG)

| | |
|---|---|
| **Einstufung** | **ZULÄSSIG nur bei allen vier Voraussetzungen kumulativ** |
| **Norm** | § 7 Abs. 3 Nr. 1–4 UWG |
| **Reichweite** | **Nur elektronische Post.** Nicht Telefon, nicht Fax, nicht Anrufmaschine |

### ⚠️ Die praktisch wichtigste Aussage zuerst

> **Die Bestandskunden-Ausnahme erlaubt niemals einen Werbeanruf.** Wer einen Bestandskunden anruft, kann sich auf § 7 Abs. 3 UWG unter keinen Umständen berufen — auch dann nicht, wenn alle vier Voraussetzungen vorliegen.

Doppelt am Wortlaut belegt (① A): Abs. 3 nimmt ausdrücklich nur auf „**Absatz 2 Nummer 2**" Bezug — Telefonwerbung steht in Nr. 1. Und Abs. 3 begrenzt sich zusätzlich selbst auf „eine Werbung unter Verwendung **elektronischer Post**", schneidet also auch Fax und Anrufmaschinen aus dem in Bezug genommenen Abs. 2 Nr. 2 heraus.

### Die vier Voraussetzungen einzeln

| Nr. | Wortlaut (verkürzt) | Was daran scheitert |
|---|---|---|
| **1** | Adresse „im Zusammenhang mit dem **Verkauf** … von dem **Kunden**" erhalten | Es muss zu einem **Vertrag** gekommen sein. Eine stornierte Bestellung trägt nicht (LG Nürnberg-Fürth, Urt. v. 21.09.2022 – 4 HK O 655/21, ② A: „Ein Verkauf kam unstreitig nicht zustande. Die Bestellung wurde storniert."). Bloße Anfrage oder Angebot genügen nicht |
| **2** | „für **eigene ähnliche** Waren oder Dienstleistungen" | „Ähnlich" wird **eng** ausgelegt: gleicher typischer Verwendungszweck oder Bedarf. **Ein Newsletter, der pauschal das Gesamtsortiment bewirbt, sprengt Nr. 2** (LG Nürnberg-Fürth a. a. O., ② A). „Eigene" heißt **derselbe Rechtsträger** — Konzernmutter, Schwestergesellschaft und Kooperationspartner sind ausgeschlossen (ErwG 41 RL 2002/58/EG: „dies gilt jedoch nur für **dasselbe Unternehmen**", ② A) |
| **3** | Kunde hat „nicht widersprochen" | Der Widerspruch ist **formlos** möglich und nicht an den Abmeldelink gebunden — auch ein Anwaltsschreiben genügt (LG Paderborn, Urt. v. 12.03.2024 – 2 O 325/23, ② A). Umsetzung **unverzüglich**; eine laufende Kampagne ist keine Ausrede, und die Monatsfrist des Art. 12 Abs. 3 DSGVO gilt hier nicht |
| **4** | Hinweis „bei Erhebung der Adresse **und** bei jeder Verwendung" | **Der Engpass.** Der Hinweis bei der Erhebung wird fast immer vergessen und ist nachträglich nicht heilbar. Ein Verweis in einer verlinkten Datenschutzerklärung genügt nicht; nach LG Paderborn genügt selbst ein blanker „Abmelden"-Link in der Mail nicht — es braucht einen **erklärenden** Widerspruchshinweis plus Kontaktadresse |

**Kumulativ** — die Aufzählung verbindet Nr. 3 und Nr. 4 mit „**und**", ein „oder" fehlt an jeder Stelle (① A). Fällt eine Voraussetzung weg, greift die Regel des Abs. 2 („ist **stets** anzunehmen").

**Der BGH zur Nr. 4** (BGH, Urt. v. 10.07.2018 – VI ZR 225/17, Rn. 24, ② B): Die Erleichterung „setzt jedoch voraus, dass **bereits bei der Erhebung der E-Mail-Adresse des Kunden (und bei jeder weiteren Verwendung)** ein klarer und deutlicher Hinweis darauf erfolgt ist, dass er der Verwendung jederzeit widersprechen kann".

### Keine gesetzliche Verfallsfrist

Suchraum Volltext § 7 UWG: „Jahr", „Monat", „Frist", „spätestens" je 0 Treffer bei greifenden Positivkontrollen (① A, eigener Selbsttest bestätigt: `Frist`, `Monat`, `Jahre` je 0). Die Grenze zieht stattdessen das ungeschriebene Merkmal der **bestehenden** Kundenbeziehung (ErwG 41) und datenschutzrechtlich Art. 5 Abs. 1 lit. e DSGVO.

⚠️ **Verbreitetes Missverständnis:** Die kursierende „Zwei-Jahres-Regel" stammt aus der DSK-Orientierungshilfe und betrifft **ungenutzte Einwilligungen**, nicht die Bestandskundeneigenschaft.

**→ Entscheidung für den User** (Außenwirkung, nicht im Alleingang zu setzen): eine selbst gesetzte, dokumentierte Verfallsfrist. **Vorschlag: 24 Monate** nach letztem Vertragsschluss, danach Einwilligung einholen. Sie erfüllt zugleich die Löschfrist-Anforderung des Verarbeitungsverzeichnisses.

### Was das für unsere Zielkundenliste heißt

- **Für Kaltakquise ist § 7 Abs. 3 UWG irrelevant** — er setzt eine bestehende Verkaufsbeziehung voraus, die es bei einem unbekannten Hotel per Definition nicht gibt.
- **Relevant wird er ab dem ersten Kunden.** Dann aber sofort richtig: Der Erhebungs-Hinweis muss von Anfang an im Bestell-/Vertragsformular stehen, sonst ist die Ausnahme für diesen Kunden dauerhaft verbrannt.
- **Ähnlichkeit wird pro Empfänger geprüft, nicht pro Kampagne.** Segmentierung nach gekauftem Produkt ist Tatbestandsvoraussetzung, keine Optimierung.
- **Beim Rebrand beachten:** Träger der Kundenbeziehung ist der **Rechtsträger**, nicht der Name. Ein Namenswechsel bei identischem Rechtsträger berührt Nr. 2 nicht — ein Rechtsträgerwechsel schon.

---

## A6 · Newsletter mit Double-Opt-in

| | |
|---|---|
| **Einstufung** | **ZULÄSSIG** — der einzige E-Mail-Kanal, der für unbekannte Empfänger sauber trägt |
| **Norm** | § 7 Abs. 2 Nr. 2 UWG · Art. 4 Nr. 11, Art. 7 DSGVO · § 6 DDG · **§ 25 TDDDG (Tracking, eigene Einwilligung)** |

### „Double-Opt-in" steht nirgends im Gesetz

Suchraum: Volltext § 7 UWG **und** DSGVO-Volltext; „double" und „opt-in" je 0 Treffer, bei greifenden Positivkontrollen („Einwilligung" 3× bzw. 71×) und feuerndem Teilwort-Kanal (② A). **DOI ist kein gesetzliches Verfahren, sondern ein Beweismittel-Standard.** Er folgt aus der Kette: ausdrückliche Einwilligung (§ 7 Abs. 2 Nr. 2 UWG) → Einwilligungsbegriff (Art. 4 Nr. 11 DSGVO) → Nachweispflicht (Art. 7 Abs. 1, Art. 5 Abs. 2 DSGVO).

**Der BGH stützt DOI bei E-Mail ausdrücklich** (BGH, Urt. v. 10.02.2011 – I ZR 164/09, Rn. 40, ② A): Der bestätigte Eingang eines Online-Formulars kann „auch bei Telefonwerbung, **anders als bei E-Mail-Werbung**, für sich allein keine Beweiserleichterung zugunsten des Werbenden begründen." ⚠️ Die verbreitete Lesart, der BGH stehe dem DOI kritisch gegenüber, überträgt die **Telefon**-Aussage dieser Entscheidung fälschlich auf E-Mail.

### Was protokolliert werden muss — nach Belegstärke getrennt

| Element | Belegstufe |
|---|---|
| Vollständige Einzeldokumentation je Empfänger; Speicherung + jederzeitige Ausdruckmöglichkeit | **Rechtsprechung, tragend** (BGH I ZR 164/09 Rn. 31) |
| **Ausdruck der unter der konkreten Adresse abgesandten Bestätigungsmail** | **Rechtsprechung, tragend** (Rn. 32) |
| Wortlaut des Einwilligungstextes im Zeitpunkt der Erteilung | **Behördenauffassung** (DSK-Orientierungshilfe Direktwerbung, Feb. 2022, Ziff. 3.3) |
| Zeitstempel | **abgeleitet**, in den gelesenen Urteilen nicht als eigene Pflicht ausgesprochen |
| IP-Adresse | trägt **allein nicht** — BGH I ZR 164/09 Rn. 32/33 ausdrücklich |

⚠️ **§ 7a UWG (fünf Jahre Aufbewahrung) gilt nicht für Newsletter** — er betrifft nur Telefonwerbung gegenüber Verbrauchern (① A). Sekundärquellen, die „fünf Jahre" auf Newsletter übertragen, dehnen die Norm über ihren Wortlaut.

### STREITIG: Ist die Bestätigungsmail selbst schon Werbung?

| Position | Fundstelle | Charakter |
|---|---|---|
| **ist Werbung** | OLG München, Urt. v. 27.09.2012 – 29 U 1682/12 | tragend, Revision zugelassen |
| **ist keine Werbung** | OLG Düsseldorf, Urt. v. 17.03.2016 – I-15 U 64/15, Rn. 23 | tragend, aber doppelt begründet |
| tendenziell keine Werbung | OLG Celle, Urt. v. 15.05.2014 – 13 U 15/14 | ⚠️ **obiter dictum** |

Höchstrichterlich ungeklärt (keine BGH-Entscheidung aufgefunden; Suchraum benannt). **Klar entschieden ist dagegen der Nebenfall:** Werbliche Zusätze in einer Bestätigungs- oder Transaktionsmail machen sie unzulässig — der transaktionale Anteil „entwerblicht" nichts (BGH VI ZR 225/17, amtl. Leitsatz b; BGH VI ZR 134/15, amtl. Leitsatz 2; ② B).

> **Betriebsregel:** Die Bestätigungsmail bleibt inhaltlich nackt — Bestätigungslink, Absenderidentität, Wortlaut der Einwilligung. Kein Claim, kein „übrigens", kein Social-Link. Und sie darf die Einwilligung nur **verifizieren**, nicht **einholen** (OLG Düsseldorf Rn. 22).

### Pflichtinhalte jedes Newsletters

- **Absenderidentität und kommerzieller Charakter** dürfen „in der Kopf- und in der Betreffzeile weder … verschleiert oder verheimlicht werden" (§ 6 Abs. 2 DDG, ① A).
- **Gültige Abmeldeadresse ohne Mehrkosten** über die Basistarif-Übermittlungskosten hinaus (§ 7 Abs. 2 Nr. 3 lit. c UWG, ① A); der Widerruf muss „so einfach wie die Erteilung" sein (Art. 7 Abs. 3 DSGVO).
- **Impressum** nach § 5 Abs. 1 DDG — Informationen, „die leicht erkennbar und unmittelbar erreichbar sein müssen, ständig verfügbar zu halten" (① A).
- ⭐ **§ 7 Abs. 2 Nr. 3 lit. b UWG verweist auf § 6 Abs. 1 **DDG**, nicht mehr auf das TMG** (① A, selbst geprüft). Sekundärquellen mit TMG-Verweis sind veraltet.

### ⚠️ Öffnungs- und Klick-Tracking braucht eine EIGENE Einwilligung

Das ist der Punkt, der die Tool-Auswahl bestimmt. § 25 Abs. 1 TDDDG erlaubt „die Speicherung von Informationen in der Endeinrichtung des Endnutzers oder den Zugriff auf Informationen, die bereits in der Endeinrichtung gespeichert sind" nur mit Einwilligung (① A).

Die **BfDI** vertritt ausdrücklich, dass die Newsletter-Einwilligung das Zählpixel **nicht** mitdeckt und der Versand ohne Tracking erfolgen muss, wenn die Tracking-Einwilligung fehlt (② A, Behördendokument). Der **EDSA** (Guidelines 2/2023, Version 2.0 v. 07.10.2024, Rn. 50 f.) ordnet Tracking-Pixel und Tracking-Links als „storage" und „gaining of access" i. S. d. Art. 5 Abs. 3 ePrivacy ein — ⚠️ schränkt aber selbst ein (Rn. 56), dass Anwendbarkeit nicht automatisch Einwilligungspflicht bedeutet.

**STREITIG**, ohne deutsche Rechtsprechung: Gegenposition ist u. a. die Stellungnahme des Zentralverbands der deutschen Werbewirtschaft v. 18.01.2024 — ⚠️ Interessenvertreterstellungnahme mit Eigeninteresse, kein neutraler Beleg. Zwei kursierende Bußgeld-Behauptungen (Saarland, Baden-Württemberg) ließen sich an der Primärquelle **nicht** verifizieren und werden hier nicht übernommen.

> **K.-o.-Kriterium bei der Tool-Auswahl:** Das Newsletter-Tool muss Tracking **pro Empfänger abschaltbar** können. Ein Tool, das nur „Tracking an/aus für alle" kennt, erfüllt die Anforderung nicht.

### Auftragsverarbeitung und US-Anbieter

- **Das Newsletter-Tool ist Auftragsverarbeiter.** Der AVV ist Pflicht des **Verantwortlichen** — „so arbeitet **dieser** nur mit Auftragsverarbeitern, die hinreichend Garantien dafür bieten" (Art. 28 Abs. 1 DSGVO, ① A). Er ist keine Gefälligkeit des Dienstleisters.
- **Drittland ist ein eigener Prüfpunkt** neben dem AVV (Art. 44, Art. 45 Abs. 1 DSGVO, ① A).
- **EU-US Data Privacy Framework:** Durchführungsbeschluss (EU) 2023/1795 v. 10.07.2023, ABl. L 231 v. 20.09.2023, S. 118. Er gilt **nur für Anbieter, die einzeln auf der „Data Privacy Framework List" aktiv zertifiziert sind** — „US-Anbieter" genügt nicht. ⚠️ **Geltungsstand: in Kraft, aber Rechtsmittel anhängig.** Die Klage gegen den Beschluss wurde vom EuG abgewiesen (Urt. v. 03.09.2025 – T-553/23, *Latombe*), dagegen läuft das Rechtsmittel **C-703/25 P** (② A, amtliche Metadaten). **→ Wiedervorlage setzen.**

### Was das für unsere Zielkundenliste heißt

- **Der Newsletter ist der einzige E-Mail-Kanal, den wir gegenüber unbekannten Hotelbetrieben sauber betreiben können** — aber nur mit Adressen, die sich **selbst angemeldet** haben. Er ist kein Weg, eine gekaufte oder recherchierte Liste zu bespielen.
- **B2B senkt nichts.** § 7 Abs. 2 Nr. 2 UWG kennt keine B2B-Erleichterung.
- **Der Einwilligungstext muss Firma, Produkte und Kanal benennen** (BGH VI ZR 721/15, amtl. Leitsatz 2: „welche Produkte oder Dienstleistungen welcher Unternehmen"; Kanal-Anforderung aus der DSK-Orientierungshilfe). Und: „Eine vorformulierte Einwilligungserklärung ist an den §§ 305 ff. BGB zu messen."
- **Kein Kopplungsgeschäft:** Whitepaper nur gegen Newsletter-Einwilligung ist der klassische Verstoß gegen Art. 7 Abs. 4 DSGVO.
- **Keine vorangekreuzten Kästchen** (EuGH, Urt. v. 01.10.2019 – C-673/17 *Planet49*, Tenor 1; ErwG 32 DSGVO: „Stillschweigen, bereits angekreuzte Kästchen oder Untätigkeit … sollten daher keine Einwilligung darstellen", ① A).
- **Alterung aktiv steuern** — ein Instanzgericht hält Einwilligungen nach vier Jahren für unwirksam (AG Bonn, Urt. v. 10.05.2016 – 104 C 227/15, ③; Amtsgericht, keine höchstrichterliche Bestätigung). Reaktivierungs- oder Bereinigungsroutine einplanen.

---

## A7 · Postalische Werbung (Brief)

| | |
|---|---|
| **Einstufung** | **ZULÄSSIG** — der lauterkeitsrechtlich offenste Kanal, aber nicht schrankenlos |
| **Norm** | **kein** Tatbestand in § 7 Abs. 2 UWG · es gilt die Generalklausel § 7 Abs. 1 UWG · DSGVO je nach Personenbezug |

### Warum Brief nicht in § 7 Abs. 2 UWG steht

**Negativ-Aussage mit Suchraum und Positivkontrolle** (① A, eigener Selbsttest): Suchraum ist der Volltext des § 7 UWG (2.050 Zeichen, alle drei Absätze — Gliederungs-Vollzähligkeit geprüft: „(1)", „(2)", „(3)" je einmal, „(4)" null). Die Begriffe **„Brief" · „Postsendung" · „Briefkasten" je 0 Treffer.** Positivkontrollen im selben Lauf, die treffen mussten: „Telefonanruf" 1× · „elektronischer Post" 2× · „Faxger" 1× · „Anrufmaschine" 1×. **Der Prüfweg findet die anderen Kanäle — Brief fehlt tatsächlich.**

**Ein zweiter, belastbarerer Weg für Nr. 3:** Diese Nummer knüpft an „eine **Nachricht**" an — und „Nachricht" ist legaldefiniert als Information, die „über einen **öffentlich zugänglichen elektronischen Kommunikationsdienst** ausgetauscht oder weitergeleitet wird" (§ 2 Abs. 1 Nr. 5 UWG, ① A). Ein Papierbrief läuft nicht über einen elektronischen Kommunikationsdienst. Nr. 3 ist auf ihn also **tatbestandlich** nicht anwendbar — das trägt weiter als das bloße Fehlen des Wortes „Brief".

Der Anhang zu § 3 Abs. 3 Nr. 26 UWG („hartnäckiges und unerwünschtes Ansprechen … mittels Telefonanrufen, unter Verwendung eines Faxgerätes, elektronischer Post oder sonstiger für den Fernabsatz geeigneter Mittel", ① A) gilt ausdrücklich nur **gegenüber Verbrauchern** — § 3 Abs. 3 UWG: „Die im Anhang dieses Gesetzes aufgeführten geschäftlichen Handlungen **gegenüber Verbrauchern** sind stets unzulässig." Im gesamten Anhang kommt „Marktteilnehmer" **kein einziges Mal** vor, bei 27 Treffern für „Verbraucher" (② A, Positivkontrolle des Agenten). **Der Anhang kennt den B2B-Adressaten schlicht nicht.**

**Und kein Bußgeld:** § 20 Abs. 1 Nr. 1 UWG verweist auf „§ 7 Absatz 1 **Satz 1** in Verbindung mit Absatz 2 Nummer 1 oder 2" — ein Verstoß gegen § 7 Abs. 1 **Satz 2** (die für den Brief einschlägige Variante) ist damit **nicht bußgeldbewehrt** (① A).

### Was stattdessen gilt: die Generalklausel

§ 7 Abs. 1 UWG (① A): „Eine geschäftliche Handlung, durch die ein Marktteilnehmer in unzumutbarer Weise belästigt wird, ist unzulässig. **Dies gilt insbesondere für Werbung, obwohl erkennbar ist, dass der angesprochene Marktteilnehmer diese Werbung nicht wünscht.**"

**Der BGH stuft die Belastung durch Briefwerbung ausdrücklich als gering ein** (BGH, Urt. v. 03.03.2011 – I ZR 167/09 „Kreditkartenübersendung", Rn. 19, ② A): „Der Grad der Belästigung ist bei einer **Werbung per Post jedoch gering.** Diese Belästigung kann gegenüber den Interessen der werbenden Wirtschaft an einer gezielten Individualwerbung … regelmäßig vernachlässigt werden … **Dies gilt jedenfalls dann, wenn der Werbecharakter — wie im Streitfall — nach dem Öffnen des Briefs sofort und unmissverständlich erkennbar ist.**" Ebenso der amtliche Leitsatz von BGH, Urt. v. 22.04.2010 – I ZR 29/09 („Grabmalwerbung"): Postwerbung zwei Wochen nach einem Todesfall ist keine unzulässige Belästigung.

**Der Erstkontakt ist also zulässig.** Unzulässig wird es bei **Hartnäckigkeit** — namentlich beim Zweitanschreiben nach einer Beschwerde (LG Köln, Urt. v. 26.04.2019 – 84 O 82/18, ③: „Bei Briefwerbungen ist indes in der Regel von einer mutmaßlichen Einwilligung auszugehen. ‚Unerwünscht' ist diese erst dann, wenn der Werbende davon ausgehen muss, dass der Empfänger damit nicht einverstanden ist"). Ein erklärter Widerspruch bindet uns **kanalübergreifend**.

⚠️ **Die Robinsonliste hilft nicht als Maßstab:** Die Brief-Robinsonliste des DDV ist eine reine **Verbraucher**-Einrichtung, ihr Abgleich ist freiwillig und in Deutschland nicht verpflichtend — ein Eintrag ist deshalb keine Garantie und begründet kein „erkennbar" i. S. d. § 7 Abs. 1 S. 2 UWG gegenüber Gewerbetreibenden.

### ⚠️ Wo das Risiko beim Brief wirklich liegt: die Aufmachung

Nicht der Kanal, sondern die **Gestaltung** ist die klassische Abmahnfalle — und hier gibt es einen einschlägigen **B2B**-Fall: BGH, Urt. v. 30.06.2011 – I ZR 157/10 („Branchenbuch Berg"), amtlicher Leitsatz (② A): Ein „**formularmäßig aufgemachtes Angebotsschreiben**", das bei flüchtigem Lesen den Eindruck erweckt, es gehe nur um die Aktualisierung von Daten in einem bestehenden Vertragsverhältnis, verstößt gegen das Verschleierungs- und das Irreführungsverbot. Die Schreiben richteten sich dort **an Gewerbetreibende**.

⚠️ **Normverschiebung beim Zitieren beachten:** Die Entscheidung erging zu § 4 Nr. 3 UWG **a. F.** Der heutige § 4 UWG regelt in Nr. 3 die **Nachahmung** — etwas völlig anderes. Das Verschleierungsverbot steht heute in **§ 5a Abs. 4 UWG**, und das gilt ausdrücklich auch gegenüber „sonstigen Marktteilnehmern", also B2B.

**Zu vermeiden sind daher:** rechnungs-, formular- oder vertragsverlängerungsähnliche Aufmachung · fingierte Persönlichkeitsanmutung (handschriftliche Haftnotiz, „Empfehlung eines Bekannten") · falsche Dringlichkeits- oder Vertraulichkeitsaufdrucke. *(Die beiden letzten Punkte sind nur über eine institutionelle Sekundärquelle belegt — KG Berlin 5 U 7/14, Volltext nicht verifiziert.)*

> 🔴 **Nachtrag 17.08.2026 (R16-A), Befund R15A-N-5 — Rn. 115: Die
> FEHLENDE Herkunftsangabe wird zum Irreführungsargument. Diese Stelle
> fehlte in diesem Dokument, und sie trifft uns direkt.**
>
> ⚠️ **Zuerst die Richtung, weil sie sich leicht verdreht:** Nicht die
> Herkunftsangabe ist das Problem — **ihr Fehlen** ist es. Wer die
> Kurzfassung „Rn. 115: Herkunftsangabe wird zum Irreführungsargument"
> liest, kann sie genau falsch herum verstehen.
>
> **Der Rahmen gehört dazu** (Prüferbefund M-8 aus R15-A: Rn. 115 wurde
> anderswo ohne ihn zitiert). Rn. 114 leitet ein: „Das auf
> **Verschleierung** angelegte Bestreben der Beklagten tritt außer in
> der Aufmachung des Anschreibens und den darin gewählten
> Formulierungen in **weiteren Umständen** zu Tage." Rn. 115 nennt den
> ersten dieser Umstände (① A, Wortlaut):
>
> > „Diese liegen **zunächst** darin, dass die Beklagte … ihre
> > datenschutzrechtlichen Pflichten missachtet hat. **Hätte sie** (wie
> > es gemäß Art. 14 Abs. 1 Abs. 2 Buchst. f und Abs. 3 Buchst. b DSGVO
> > erforderlich gewesen wäre) in dem Schreiben angegeben, die Daten
> > des Adressaten **aus öffentlichen Quellen entnommen** oder von
> > einem Adresshändler erworben zu haben, **hätte das den aufgebauten
> > Eindruck** … **zerstört** und dem Adressaten einen Hinweis darauf
> > gegeben, dass es sich um das Werbeschreiben eines mit dem
> > Adressaten **nicht verbundenen Unternehmens** handelt."
>
> **Warum uns das direkt trifft — drei Punkte:**
> 1. **Unsere Adressquelle ist genau die im Zitat genannte:** „aus
>    öffentlichen Quellen entnommen" beschreibt die Impressums-/
>    Website-Erhebung wörtlich (D3-Entscheid 2 vom 11.08.2026, Weg b).
> 2. **Die beiden Achsen verstärken einander.** Ein Verstoß gegen
>    Art. 14 Abs. 2 lit. f DSGVO bleibt nicht in der DSGVO: Er wird im
>    selben Urteil zum **Baustein der lauterkeitsrechtlichen**
>    Irreführungsbegründung. Wer die Quellenangabe weglässt, riskiert
>    beide Schienen zugleich — nicht die eine oder die andere.
> 3. **Die Umkehrung ist der Bau-Auftrag, nicht die Entwarnung:** Aus
>    „hätte sie angegeben …, hätte das den Eindruck zerstört" folgt,
>    dass die Quellenangabe im Brief den Verschleierungsvorwurf
>    entkräften *kann* — **nicht**, dass sie ihn ausschließt. Das
>    Urteil sagt zur Wirkung einer *vorhandenen* Angabe nichts; es
>    beurteilt einen Fall, in dem sie fehlte.
>
> **Bestandsbezug in diesem Dokument:** Die Pflicht selbst ist unter
> „Was das für unsere Zielkundenliste heißt" bereits geführt
> („Datenherkunft je Adresse dokumentieren — Art. 14 Abs. 2 lit. f
> verlangt die Quellenangabe im Brief"). **Neu ist nicht die Pflicht,
> sondern ihre zweite Rechtsfolge** — deshalb steht der Nachtrag hier
> im Aufmachungs-Abschnitt und nicht dort.
>
> *(Herkunft: `projektquelle-mkt.md` § 6a, R15A-N-5; Rahmen-Befund
> M-8 aus `protokolle/R15-A-pruefer.md`; am Rohbeleg gegengeprüft
> 17.08.2026.)*

### Wer kann überhaupt angreifen — und wer nicht

**Die BGB-Schiene trägt beim Brief nach derzeitigem Erkenntnisstand nicht.** Die Rechtsprechung zum Eingriff in den eingerichteten und ausgeübten Gewerbebetrieb betrifft durchgehend **Fax und E-Mail**, wo der **Ressourcenverbrauch beim Empfänger** den Eingriff begründet. Beim Papierbrief trägt der Werbende die Kosten selbst. **Es wurde keine Entscheidung gefunden, die einen Werbebrief an einen Gewerbetreibenden als Eingriff in den Gewerbebetrieb einstuft** — Suchraum: BGH-Datenbank ab 2000, NRWE, gesetze-bayern.de, je mit greifender Positivkontrolle. ⚠️ **Nicht durchsucht: juris und beck-online**, wo der Großteil der OLG-/LG-Rechtsprechung liegt. Das Negativ kann dort kippen.

### ⭐ Der Angriffsweg, der 2026 tatsächlich gegriffen hat: die DSGVO

> ⛔ **Nachtrag 13.08.2026 (R14-B), Prüferbefund PB-1 — der erste Satz
> des folgenden Absatzes trägt in dieser Form nicht.**
> **→ ERLEDIGT 17.08.2026 (R16-A): Der Satz ist neu gefasst; die
> Vorfassung steht wörtlich im Reparatur-Kasten unmittelbar unter
> diesem Kasten. Der Befund PB-1 ist damit abgearbeitet, dieser Kasten
> bleibt als Historie stehen.** Er sagt, das LG
> Düsseldorf habe untersagt „gestützt **ausschließlich** auf Art. 6
> Abs. 1 lit. f und die Art. 12–14, 21 DSGVO". **Dasselbe Urteil prüft
> die lauterkeitsrechtliche Schiene durch und bejaht sie** (s. Teil B,
> Nachtrag R9A-N-14): „Die gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1
> Unterabs. 1 DSGVO verstoßenden geschäftlichen Handlungen sind gemäß
> **§ 3a UWG** unlauter" (Rn. 137), und die Absage in Rn. 88 wird
> ausdrücklich lauterkeitsrechtlich begründet (§ 3 Abs. 1, §§ 5, 5a UWG).
> **Eigene Messung am Rohbeleg (13.08.2026):** „UWG" **148** Treffer,
> davon „§ 3a UWG" **21**, „§ 3 Abs. 1 UWG" **5** — Zählweg
> `grep -o "<muster>" <datei> | wc -l`. Die daneben stehende Zahl
> „§ 7 UWG = 0" bleibt richtig; **„kein § 7 UWG" ist aber nicht „kein
> UWG"**, und genau diese Verwechslung steckt im Wort „ausschließlich".
>
> ⚠️ **Zweiter Punkt am selben Satz (Quelle: `akquise/interessenabwaegung-o8.md`
> § 11.2 Nr. 3, dort seit R9 unerledigt):** „**Art. 21 Abs. 4 ist im
> Tenor des Urteils nicht enthalten** — er trägt dort die
> Art.-6-Prüfung (Rn. 85), untersagt wurde nach Art. 14 (Tenor Nr. 4).
> Wer ein ‚tenoriertes Art.-21-Verbot' zitiert, zitiert zu weit." Die
> Aufzählung „Art. 12–14, 21" im Satz unten legt genau diese Lesart nahe.
>
> **Was damals NICHT entschieden wurde:** wie der Satz richtig zu fassen
> ist. Die materielle Anknüpfung ist die DSGVO, die Anspruchsgrundlage
> das UWG (Kläger war ein Verband nach § 8 Abs. 3 Nr. 3 UWG, Rn. 34/64)
> — welche Formulierung das sauber abbildet, war eine
> **Rechts-Bewertung** und damit außerhalb des Auftrags jener Session
> (harte Grenze: keine neuen Rechtsbewertungen). *(→ Die Neufassung
> unten bildet nur den **Aufbau des Urteils** ab — welche Schiene für
> eine B2B-Aussendung trägt, entscheidet weiterhin nicht dieses
> Dokument, sondern der anwaltliche Rat; s. Anwalts-Briefing Frage 3.)*
> Träger: MKT-HANDEL, zusammen mit dem O-9-Rechtsrat.

> 🔧 **REPARATUR-KASTEN 17.08.2026 (R16-A) — was hier vorher stand und
> warum es fiel.** Vorfassung des ersten Satzes des folgenden Absatzes,
> wörtlich:
>
> > „**LG Düsseldorf, Urt. v. 06.02.2026 – 38 O 243/23** … hat eine
> > **Briefpost**-Werbesendung untersagt — gestützt ausschließlich auf
> > Art. 6 Abs. 1 lit. f und die Art. 12–14, 21 DSGVO."
>
> **Warum sie fiel — zwei Gründe, beide am Rohbeleg nachgemessen
> (Randnummern generisch aus der amtlichen NRWE-Auszeichnung
> extrahiert: 273 **nummerierte** Absätze, lückenlos 1–273, zwei unabhängige
> Strukturmerkmale liefern dieselbe Zahl — **dazu Rubrum und Tenor, die
> außerhalb dieser Nummerierung stehen und am Textabzug gelesen werden**
> *(Prüfraum präzisiert 17.08.2026 nach Prüferbefund H-2: Zwei Aussagen
> dieses Abschnitts — „vorläufig vollstreckbar" und der Inhalt des
> Tenors — liegen genau dort und wären vom Randnummern-Prüfraum nicht
> gedeckt gewesen)*):**
> 1. **„ausschließlich" ist falsch.** Dasselbe Urteil prüft die
>    lauterkeitsrechtliche Schiene durch und bejaht sie **zweifach**
>    (Rn. 136/137/147, s. Neufassung und Teil B).
> 2. **„Art. 12–14, 21" ist zu weit für den Tenor.** Art. 21 Abs. 4
>    trägt die Art.-6-Prüfung in Rn. 85, steht aber nicht im Tenor
>    (Vorbehalt aus `akquise/interessenabwaegung-o8.md` § 11.2 Nr. 3,
>    dort seit R9 unerledigt — hiermit eingelöst).
>    ⚠️ **Präzisierung 17.08.2026 nach Prüferbefund M-4 — hier stand
>    „der Tenor untersagt unter Nr. 4 die unterlassene
>    Art.-14-Information", und das liest nur die Artikelnummer, nicht
>    den Verbotsinhalt.** Tenoriert ist unter Nr. 4 die Verletzung der
>    **Monatsfrist** („nicht innerhalb einer angemessenen Frist,
>    spätestens innerhalb eines Monats", also Art. 14 Abs. 3 **lit. a**)
>    und ausdrücklich nur für Daten, die „**bei einem Dritten** erhoben"
>    wurden. **Die Pflicht, auf der unser Bestand tragend aufbaut —
>    „spätestens mit diesem Schreiben" (Art. 14 Abs. 3 lit. b, Rn. 85)
>    und die Quellenangabe IM Brief (Rn. 115) — folgt aus den GRÜNDEN,
>    nicht aus dem Tenor.** Das schwächt sie nicht (Gründe sind Gründe),
>    aber wer „tenoriert" schreibt, schreibt zu stark. Das Verhältnis
>    lit. a / lit. b für unseren Fall ist als Frage im Anwalts-Briefing
>    ergänzt.
>
> ⚠️ **Was die Neufassung NICHT repariert:** Ob und wie diese Schienen
> auf eine **reine B2B**-Aussendung durchschlagen, sagt das Urteil
> nicht und sagt dieses Dokument nicht. Das bleibt offen (s. die
> „nicht erhoben"-Zeile am Dokumentende und Teil B).

**LG Düsseldorf, Urt. v. 06.02.2026 – 38 O 243/23** (von der Leit-Session **selbst** am amtlichen NRWE im Volltext gegengelesen, ① A) hat eine **Briefpost**-Werbesendung untersagt. **Materielle Anknüpfung ist die DSGVO, Anspruchsgrundlage das UWG** — der Kläger war ein in die Liste qualifizierter Einrichtungen nach § 4 UKlaG eingetragener Verband (Rn. 2, 34, 64), klagebefugt nach § 8 Abs. 3 Nr. 3 UWG. Der Aufbau des Urteils in drei Schritten, je mit Randnummer:

> 🔧 *(Tabelle korrigiert 17.08.2026 nach den Prüferbefunden M-2, M-3
> und H-1. **Die Erstfassung führte die Irreführung als eigenständigen
> dritten Schritt „unabhängig davon"** — das kehrt die Begründung des
> Urteils um: Rn. 88 ist die Gliederungsziffer **cc)** INNERHALB der
> lit.-f-Prüfung, die Unlauterkeit ist dort die **Prämisse** des
> zweiten DSGVO-Absagegrundes, keine zusätzliche Schiene. Außerdem
> übersprang eine Ellipse in Zeile 2 eine Satzgrenze samt dem
> Vorbehalt „Bezogen auf … Antrag I", und Zeile 1 schrieb die
> Artikelaufzählung Rn. 84 zu, die sie nicht nennt.)*

| Schritt | Wo | Was das Gericht feststellt |
|---|---|---|
| **1. DSGVO-Verstoß, erster Absagegrund** | Rn. 84/85, 125 | Die Voraussetzungen von Art. 6 Abs. 1 Unterabs. 1 lit. f DSGVO sind „schon deshalb nicht erfüllt" (Rn. 84), weil die Beklagte ihre übrigen DSGVO-Pflichten verletzt hat — die Artikel selbst nennt **Rn. 85** (Artt. 12, 14 Abs. 3 lit. b, 21 Abs. 4), zusammengefasst in Rn. 86 als „Verstößen gegen Artt. 12,14 und 21 DSGVO". Rn. 125: das Verhalten liegt „in der gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden und deshalb rechtswidrigen Verarbeitung der Daten des Verbrauchers" |
| **2. DSGVO-Verstoß, zweiter Absagegrund — und er ist lauterkeitsrechtlich** | Rn. 88 (Ziffer cc), gestützt auf Rn. 89–120 | ⚠️ **Keine unabhängige dritte Schiene, sondern eine Stufe INNERHALB derselben lit.-f-Prüfung:** „**Darüber hinaus** liegen die Voraussetzungen von Art. 6 Abs. 1 Unterabs. 1 Buchstabe f DSGVO deshalb nicht vor, weil das … verfolgte Interesse **nicht rechtmäßig** ist. Die … Werbung ist gemäß § 3 Abs. 1 UWG unzulässig, weil sie gemäß §§ 5 Abs. 1 und Abs. 2, 5a Abs. 1 bis Abs. 3 UWG unlauter ist" (Rn. 88). Die Kette lautet: **unlauter → Interesse nicht rechtmäßig → lit. f scheitert.** ⭐ **Folge, die man sehen muss:** Trägt die §§-5/5a-Bewertung in einer reinen B2B-Aussendung nicht, fällt **dieser** Absagegrund weg — der aus Rn. 84/85 bliebe |
| **3. Der DSGVO-Verstoß ist zugleich unlauter — Doppelbegründung** | Rn. 136, 137, 147 | Rn. 136: „Es kann offenbleiben, ob im Allgemeinen in erster Linie § 3a UWG … heranzuziehen ist, oder § 3 Abs. 2 UWG, der auf einer unionsrechtlichen Grundlage beruht. **Bezogen auf die von dem Kläger mit seinem Antrag I angegriffenen Verstöße** liegen **sowohl** die Voraussetzungen von § 3a UWG vor (dazu aa) **als auch** diejenigen von § 3 Abs. 2 UWG (dazu bb)." Rn. 137 bejaht § 3a UWG, Rn. 147 bejaht § 3 Abs. 2 UWG — **beide Schienen tragen, keine ist die gewählte.** ⚠️ **Geltungsgrenze im Zitat:** ausdrücklich nur für **Antrag I**; der Tenor umfasst fünf Verbote (Einzelheiten in Teil B) |

**§ 7 UWG spielt in diesem Urteil keine Rolle** — aber „kein § 7 UWG" ist nicht „kein UWG". **Eigene Kontrollmessung: „§ 7 UWG" kommt im gesamten Urteil 0-mal vor**, bei 109 Treffern für „DSGVO". *(Zählweg — nachgetragen 13.08.2026, R14-B, Befund R9A-N-13: `grep -o "DSGVO" <datei> | wc -l` = **109**; case-insensitive derselbe Wert, die Zahl ist also nicht case-abhängig. Für das Negativ: `grep -o "§ 7 UWG" <datei> | wc -l` = **0** bei case-**sensitiver** Positivkontrolle „Werbung" = **14** im selben Lauf, dazu die Gegenprobe `grep -o "§ 7"` = **1** (einziger Treffer: „§ 709 S. 1 und S. 2 ZPO", Teilwort) — der Suchweg findet Treffer dieser Form, das Negativ ist echt. *(⚠️ Korrigiert 13.08.2026 nach Prüferbefund PB-4: Hier stand „Positivkontrolle ‚Werbung' = 35 im selben Lauf". Die 35 ist nur **case-insensitiv** erreichbar; case-sensitiv sind es 14. Eine case-insensitive Kontrolle beglaubigt einen case-sensitiven Nulltreffer nicht — die Kontrolle muss die **Suchmechanik** des Negativs spiegeln.)* Gezählt werden Fundstellen, nicht Zeilen — `grep -c` wäre hier falsch. Prüfgegenstand ist der Textabzug `sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.txt` (git-ignoriert). Nachgemessen 13.08.2026.)*

> ⚠️ **KORREKTUR 17.08.2026 (R16-A) nach Prüferbefund M-7 — hier stand:
> „der HTML-Abzug derselben Beschaffung liefert dieselben Werte". Für
> §-Muster ist das messbar falsch, und es trifft ausgerechnet die
> Positivkontrolle.** Der HTML-Abzug trägt **1.359** geschützte
> Leerzeichen (U+00A0), im Textabzug sind es **0** — im HTML steht hinter
> jedem `§` ein NBSP. Gemessen im selben Lauf, `.txt` / `.html`:
>
> | Muster | `.txt` | `.html` |
> |---|---:|---:|
> | `§ 7` (Gegenprobe des Negativs) | **1** | **0** |
> | `§ 3a UWG` (§-Positivkontrolle) | **21** | **0** |
> | `DSGVO` | 109 | 109 |
> | `Werbung` (cs) | 14 | 14 |
>
> **Folge:** Über den HTML-Abzug liefert *jedes* §-Phrasenmuster mit
> gewöhnlichem Leerzeichen 0 — auch die beiden Kontrollen, die das
> Negativ „§ 7 UWG = 0" überhaupt erst tragen. Dort wäre es ein
> **Werkzeugartefakt ohne greifende Positivkontrolle**. Die
> Buchstaben-Zahlen stimmen dagegen in beiden Abzügen überein — genau
> das Muster aus L-43: reine Buchstaben-Kontrollen laufen sauber durch,
> während die Zeichenklasse `§` still ausfällt. **Das Sachergebnis
> bleibt:** Am `.txt` ist das Negativ echt und mit greifender
> §-Positivkontrolle belegt. Falsch war nur die Gleichwertigkeits-Aussage
> über die Abzüge. *(Wer aus dem HTML arbeitet — wie die
> Randnummern-Extraktion dieser Session —, muss NBSP vor der Suche
> normalisieren; dann stimmen die Werte wieder.)* Die Beklagte war daran gescheitert, dass sie

> „es versäumt [hat], den Adressaten des Schreibens **spätestens mit diesem Schreiben** (wie es gemäß Art. 14 Abs. 3 Buchst. b DSGVO geboten war) die … Informationen … zur Verfügung zu stellen. Ferner hat sie es unterlassen, den Adressaten … **spätestens mit diesem Schreiben ausdrücklich in einer verständlichen und von anderen Informationen getrennten Form** darauf hinzuweisen, dass er gemäß Art. 21 Abs. 2 DSGVO das Recht hat, jederzeit Widerspruch … einzulegen."

Und zur Belästigungsschwelle: Die geringere Belästigungswirkung der Briefpost „gilt **nur, wenn die Briefwerbung spätestens nach dem Öffnen des Briefs sofort und unmissverständlich erkennbar ist**".

⚠️ **Reichweite ehrlich begrenzt — meine eigene Prüfung:** Der Tenor betrifft ausdrücklich **Verbraucher** („Verbraucher zum Zwecke des Providerwechsels … postalisch anzuschreiben"); „Verbraucher" kommt 199-mal vor. *(Zählweg — nachgetragen 13.08.2026, R14-B, Befund R9A-N-13: `grep -o -i "Verbraucher" <datei> | wc -l` = **199**; **case-sensitiv nur 187** — die Differenz von 12 sind kleingeschriebene Fundstellen. Die Zahl zählt **Teilwort**-Treffer, Komposita eingeschlossen (u. a. „Verbrauchers" 33 · „Verbrauchern" 22 · „Verbraucherzentrale" 3 · „Verbraucherschutzrecht" 3). Datei wie bei der DSGVO-Zahl oben; nachgemessen 13.08.2026.)* **Es ist kein B2B-Präzedenzfall**, und der Sachverhalt ist telekommunikationsrechtlich eingefärbt (beigefügtes Auftragsformular, Pflichten aus der Richtlinie (EU) 2018/1972). Die tragende Argumentation zu Art. 14 Abs. 3 lit. b und Art. 21 Abs. 4 DSGVO knüpft aber allein an die Eigenschaft als **betroffene Person** an — sie trägt deshalb für jeden namentlich angeschriebenen Geschäftsführer genauso. Instanzgericht, Rechtskraft ungeklärt (s. Kasten).

> ⚠️ **Präzisierung 17.08.2026 (R16-A) — Rechtskraft.** Hier stand
> „Rechtskraft nicht geprüft"; Teil B hatte die Präzisierung als
> Posten für MKT-HANDEL vermerkt (Nachtrag R9A-N-14, Anstrich
> „Belegkraft des Belegs selbst"). **Sie lautet:** Es ist ein Urteil
> **erster Instanz**, „vorläufig vollstreckbar" (Tenor). Ein
> Rechtsmittelhinweis oder eine Rechtskraftangabe **steht nicht im
> Text** — Suchlauf `berufung|rechtsmittel|rechtskräftig`
> case-insensitiv je **0** Treffer, **mit Positivkontrollen im selben
> Lauf: „Urteil" = 118 · „Kammer" = 18 · „Beschwerde" (ci) = 6**
> *(Kontrollzahlen ergänzt 17.08.2026 nach Prüferbefund H-5 — der Satz
> delegierte den Zählweg vorher an `akquise/interessenabwaegung-o8.md`
> § 6.2, ohne eine eigene Kontrolle zu nennen; eine delegierte Zahl
> ohne Zählweg ist nicht übernehmbar, L-15).* **Das ist „nicht
> prüfbar", kein Negativbefund: Die Rechtskraft ist ungeklärt, nicht
> verneint** — und ein Nulltreffer im Urteilstext könnte sie ohnehin
> nicht klären, weil ein Urteil seine eigene spätere Rechtskraft nicht
> dokumentiert.
>
> ⭐ **Zur Belegkraft gehört noch eine Angabe, die hier fehlte**
> *(ergänzt nach Prüferbefund H-9)*: Der Verband ist **nicht
> vollständig durchgedrungen.** Der Tenor schließt mit „**Im Übrigen
> wird die Klage abgewiesen**", die Kosten tragen „**der Kläger zu
> einem Fünftel** und die Beklagte zu vier Fünfteln". Fünf Verbote
> wurden ausgesprochen, ein Teil der Anträge blieb erfolglos. Für ein
> Dokument, das dieses Urteil als Warnung führt, gehört das dazu.
>
> Der Posten aus Teil B ist damit erfüllt.

> 🔴 **Nachtrag 17.08.2026 (R16-A), Befund R15A-N-1 (Teil 2) —
> Rn. 111: Das Berufungsgericht sieht es offenbar anders. Diese Stelle
> fehlte in diesem Dokument vollständig.**
>
> In Rn. 111 hält die Kammer an ihrer Beurteilung fest — und zwar
> ausdrücklich gegen eine gegenläufige Äußerung der nächsten Instanz.
> Wortlaut (① A, eigener Volltext-Abgleich am NRWE-Abzug, Zitat
> gekürzt mit sichtbaren Ellipsen):
>
> > „(2) An dieser Beurteilung des Werbeschreibens der Beklagten hält
> > die Kammer weiterhin fest, und zwar auch in Ansehung der
> > **abweichenden Auffassung**, die nach den Angaben der Beklagten von
> > dem Oberlandesgericht in mehreren mündlichen Verhandlungen als
> > vorläufiges Beratungsergebnis mitgeteilt worden sein soll und die
> > in dem (von der Beklagten als Anlage B9 vorgelegten) **Beschluss
> > vom 19. Dezember 2024 - 20 W 37/24** (= Landgericht Düsseldorf
> > 38 O 17/22) **beiläufig in einer die dort getroffene Entscheidung
> > nicht tragenden Erwägung** geäußert worden ist. …"
>
> **Was daran belastbar ist — und was Ableitung:**
>
> | Aussage | Belegstufe |
> |---|---|
> | Es gibt eine abweichende Auffassung eines Obergerichts, an der die Kammer sich nicht hindern lässt | ① A — steht wörtlich in Rn. 111 |
> | **Sie betraf dasselbe Werbeschreiben** | ⚠️ **eigene ABLEITUNG, weiterhin nicht belegt** *(korrigiert 17.08.2026 nach Prüferbefund M-1 — hier stand „zu genau diesem Werbeschreiben" mit Belegstufe ① A).* Rn. 111 sagt nur, die Kammer halte an ihrer Beurteilung fest „auch in Ansehung der abweichenden Auffassung". **Was Gegenstand des Verfahrens 38 O 17/22 war, teilt das Urteil nicht mit** — ⭐ *seit 17.08.2026 (R17-A) sagt es der **Beschluss selbst**: Ordnungsmittelverfahren um Werbeschreiben aus Frühjahr und Juli/August 2023 (Anlagen AST 4). Das schließt Identität mit dem hier angegriffenen Schreiben (Anlage K 2) **nicht aus und belegt sie nicht** — verschiedene Anlagenkürzel, verschiedene Gegenseiten. Einzelheiten im Nachtrags-Kasten unten* |
> | Sie ist **nicht tragend** („beiläufig … nicht tragenden Erwägung") und stammt aus einem **Beschluss**, teils sogar nur aus einem mündlich mitgeteilten „vorläufige[n] Beratungsergebnis" **nach Angaben der Beklagten** *(🔧 Zitatform korrigiert 17.08.2026, R17-A: Hier stand „vorläufigen Beratungsergebnis" ohne Klammer — das Original schreibt „vorläufige**s** Beratungsergebnis"; die Endung war still an den eigenen Satzbau angepasst worden. Gefunden bei der Rekonstruktion der Zitat-Grundgesamtheit für Prüfer-Fundort 1)* | ① A — steht wörtlich in Rn. 111 |
> | Das Obergericht ist das **OLG Düsseldorf** und damit das für dieses Urteil **zuständige Berufungsgericht** | ⚠️ **eigene ABLEITUNG, keine Quellenaussage.** Rn. 111 sagt nur „von dem Oberlandesgericht". Die Zuordnung stützt sich auf **zwei unabhängige Merkmale** *(das zweite ergänzt 17.08.2026 nach Prüferbefund H-4; das erste präzisiert nach H-3)*: **(1) Aktenzeichen-Muster** — Rn. 45 nennt „Landgericht Düsseldorf 38 O 245/23 = **Oberlandesgericht Düsseldorf 20 W 87/23**", derselbe 20er-Senat für Beschwerden gegen dieselbe Kammer 38 O. ⚠️ Rn. 45 ist dabei selbst ein **Zitat** (aus LG Düsseldorf, Urt. v. 09.02.2024 – 38 O 271/23, eingeleitet in Rn. 44), nicht Text der vorliegenden Entscheidung. **(2) Dieselbe Zuschreibungsfigur an anderer Stelle** — Rn. 47 nennt „den von der Beklagten in ihrem Schriftsatz vom 5. November 2025 angeführten **Äußerungen des Oberlandesgerichts Düsseldorf**"; dort beruft sich dieselbe Beklagte in demselben Rechtsstreit auf dasselbe Gericht wie in Rn. 111. Das ist die engere Brücke. **Zählweg:** `grep -oE "Oberlandesgericht[a-zä]* Düsseldorf"` = **5** Fundstellen in **4** Randnummern (Rn. 43 · 45 ×2 · 46 · 47) — **keine davon in Rn. 111.** ⚠️ Die Flexionsform gehört ins Muster: Ohne sie meldet der Lauf **1** statt 5 (nur der Nominativ in Rn. 45 trifft), und `grep -c` meldete sogar nur die Zeilenzahl. Positivkontrolle derselben Mechanik im selben Lauf: `Oberlandesgericht[a-zä]* Stuttgart` = 1 (Genitiv, trifft) · Gegenkontrolle `Oberlandesgericht Köln` = 0. Gegenrichtung: `"dem Oberlandesgericht"` ohne Ortsangabe = **2**, eine davon ist genau die Stelle in Rn. 111 |
> | ~~**Den Beschluss 20 W 37/24 haben wir nicht beschafft** — sein Inhalt ist nur über die Wiedergabe des LG bekannt (Belegstufe ③, Zitat zweiter Hand)~~ → ⭐ **ÜBERHOLT 17.08.2026 (R17-A): Der Beschluss ist beschafft** (NRWE-Volltext, `sensibel/rohbelege-R17-A/olg-duesseldorf-20-W-37-24.txt`, SHA-256 `53b0117…`). Sein Inhalt ist damit **① A** statt ③ | ① A (Volltext gelesen, Rn. 1–27 vollständig) |
>
> **Folge für die A7-Einstufung — und was hier ausdrücklich NICHT
> entschieden wird:** Die Einstufung „ZULÄSSIG" oben bleibt
> unverändert; sie beruht auf § 7 UWG und dem BGH-Leitsatz zur
> geringen Belästigungswirkung, nicht auf diesem Urteil. Was sich
> ändert, ist die **Belegkraft des Düsseldorfer Urteils als Warnung**:
> Es ist ein **erstinstanzliches** Urteil, und das übergeordnete
> Oberlandesgericht hat sich **nach den Angaben der dortigen Beklagten**
> abweichend geäußert — beiläufig, in einer nicht tragenden Erwägung
> **eines anderen Verfahrens** (20 W 37/24 = LG Düsseldorf 38 O 17/22).
>
> > 🔧 **REPARATUR 17.08.2026 (R16-A), Prüferbefunde S-1 und S-2 —
> > dieser Absatz war in seiner Erstfassung an zwei Stellen schärfer als
> > die Quelle. Beide Vorfassungen wörtlich:**
> >
> > 1. „*Es ist ein erstinstanzliches Urteil, dessen **Berufungsgericht
> >    in derselben Sache erkennbar** zu einer anderen Beurteilung
> >    neigt*". **Zwei Fehler:** (a) **Nicht dieselbe Sache** — Rn. 111
> >    verortet die Äußerung im Beschluss 20 W 37/24 „(= Landgericht
> >    Düsseldorf **38 O 17/22**)", also einem anderen Verfahren als dem
> >    hiesigen 38 O 243/23. Ob es dasselbe Werbeschreiben betraf, sagt
> >    das Urteil nicht. (b) **„erkennbar" gegen „soll"** — die Quelle
> >    schreibt „mitgeteilt worden sein **soll**"; sie referiert
> >    Parteivortrag und macht ihn sich nicht zu eigen.
> > 2. „*und dasselbe LG **weicht** von der ‚ständigen Rechtsprechung'
> >    desselben OLG auch an anderer Stelle **ausdrücklich ab**
> >    (Rn. 43, TKG/UWG)*". **Gestrichen, nicht abgeschwächt.** Rn. 43
> >    lautet: „Bei dieser Sichtweise **verbleibt** die Kammer auch in
> >    Ansehung der **von der Beklagten angeführten** ‚ständigen
> >    Rechtsprechung' des Oberlandesgerichts Düsseldorf, der zufolge
> >    ‚das TKG lex specialis zum UWG' sei." Zählweg: `verbleibt` = 1
> >    (genau diese Stelle), `weicht` in Rn. 43 = 0. Die Kammer
> >    **verbleibt** bei ihrer Sichtweise — das ist keine
> >    Abweichungs-Feststellung; und die „ständige Rechtsprechung" ist
> >    dort in Anführungszeichen als **Vortrag der Beklagten** geführt,
> >    unsere Fassung machte daraus eine Bestandsaussage über das OLG.
> >
> > **Warum das hier steht:** Es ist dieselbe Fehlerklasse, die diese
> > Session 90 Zeilen weiter oben als R15A-N-1 repariert hat („weicht
> > ab" schärfer als die konditionale Quelle) — im selben Commit erneut
> > begangen, im **Fließtext** unter einer Belegstufen-Tabelle, die es
> > richtig machte. Der Zitat-Wächter meldete 17/17: **er prüft, was als
> > Zitat markiert ist, nicht den Satz daneben** (L-27).
>
> **Der Eintrag für die Rechtslage ist damit „streitig", nicht „geklärt"**
> — und zwar in **beide** Richtungen: Wer aus dem Urteil ableitet, wir
> dürften nicht, überdehnt es; wer aus Rn. 111 ableitet, wir dürften,
> überdehnt eine nicht tragende Erwägung aus einem ungelesenen
> Beschluss. **Welche der beiden Linien für eine B2B-Briefaussendung
> gilt, entscheidet dieses Dokument nicht — Frage an den Anwalt, s.
> `handel/anwalts-briefing-2026-08.md` Frage 2 (§ 2.2/§ 2.3).**
>
> *(Herkunft: `protokolle/R15-A-pruefer.md` S-1 und
> `projektquelle-mkt.md` § 6a, dort ohne eigene ID geführt; am
> Rohbeleg gegengeprüft 17.08.2026.)*

> 🟢 **Nachtrag 17.08.2026 (R17-A) — der Beschluss 20 W 37/24 ist
> BESCHAFFT und im Volltext gelesen. Er sagt etwas anderes, als die
> Formel „das Berufungsgericht sieht es anders" nahelegt.**
>
> **Fundstelle:** OLG Düsseldorf, Beschl. v. 19.12.2024 – 20 W 37/24,
> 20. Zivilsenat, ECLI:DE:OLGD:2024:1219.20W37.24.00, amtliche
> Rechtsprechungsdatenbank NRWE (① A, eigener Volltext, Rn. 1–27
> vollständig; Beschaffungsprotokoll mit Kanalbefunden und
> Positivkontrollen: `sensibel/rohbelege-R17-A/00-quellenliste.md`).
>
> **1. Was für ein Verfahren das war — die entscheidende Einordnung.**
> Es ist **kein Erkenntnisverfahren**, sondern ein
> **Ordnungsmittelverfahren nach § 890 ZPO** (Zwangsvollstreckung aus
> einer Beschlussverfügung vom 11. Februar 2022). Tenor:
>
> > „Auf die sofortige Beschwerde der Schuldnerin vom 27. Mai 2024 wird
> > der Ordnungsgeldbeschluss der 8. Kammer für Handelssachen des
> > Landgerichts Düsseldorf vom 06. Mai 2024 - Az.: 38 O 17/22 –
> > abgeändert und der auf seinen Erlass gerichtete Antrag der
> > Gläubigerin vom 14. Juni 2023 zurückgewiesen."
>
> Aufgehoben wurde damit ein Ordnungsgeld über **125.000 €** (Rn. 5).
> **Prüfungsmaßstab war die Reichweite des Titels**, nicht die
> Zulässigkeit der Werbung: „Umstände, die außerhalb des Titels liegen,
> sind bei der Auslegung wegen der Formalisierung des
> Vollstreckungsverfahrens grundsätzlich nicht zu berücksichtigen.
> Insbesondere ist es ohne Bedeutung, welche sachlich-rechtlichen
> Ansprüche der Gläubigerin zustehen" (Rn. 15).
>
> **2. Der tragende Grund** steht in Rn. 22 und ist die
> **Kerngleichheit**: Die 2023er Schreiben enthielten die vom
> Landgericht 2022 beanstandeten Textpassagen nicht mehr. „Die
> streitbefangene Gestaltung unterscheidet sich deutlich von der
> ursprünglich beanstandeten Gestaltung und stellt sich daher nicht
> mehr als im Kern gleichartige Verletzungshandlung dar. **Eine Prüfung
> der veränderten Gestaltung hat in einem (gesonderten)
> Erkenntnisverfahren zu geschehen.**"
>
> **3. Die „abweichende Auffassung" selbst** — der Satz, auf den sich
> Rn. 111 des Urteils bezieht, im Wortlaut (Rn. 22, unmittelbar nach
> dem eben zitierten Satz):
>
> > „Im Übrigen hat der Senat bereits darauf hingewiesen, dass das
> > streitgegenständliche Kundenanschreiben (Anlagen AST 4) nicht zur
> > Irreführung geeignet ist. Von dieser Rechtsauffassung haben die
> > Parteien aufgrund der unter den Az.: I-20 U 107/23 sowie
> > I-20 U 117/23 geführten Verfahren Kenntnis; daran wird auch nach
> > nochmaliger Überprüfung festgehalten."
>
> **4. Die Einordnung des Landgerichts ist am Original bestätigt.**
> Rn. 111 nennt die Äußerung „beiläufig in einer die dort getroffene
> Entscheidung nicht tragenden Erwägung" — und genau so steht sie da:
> eingeleitet mit „Im Übrigen", nach dem Satz, der die materielle
> Prüfung ausdrücklich einem gesonderten Erkenntnisverfahren zuweist.
> **Der Beschluss hätte ohne diesen Satz denselben Tenor.** Das ist
> keine Bewertung, sondern die Struktur der Entscheidung.
>
> **5. Was der Beschluss NICHT sagt — mit Zählweg.** Er befasst sich
> **an keiner Stelle** mit Datenschutzrecht oder mit den Normen, auf
> denen der Absagegrund des Landgerichts beruht. Gemessen am eigenen
> Volltext (8.297 Zeichen, Zählweg `grep -o … | wc -l`):
> `DSGVO` = **0** · `Datenschutz` = **0** · `personenbezogen` = **0** ·
> `Art. 6` = **0** · `Art. 14` = **0** · `3a UWG` = **0** ·
> `§ 3 Abs. 2` = **0** · und sogar `UWG` = **0**. Positivkontrollen
> **im selben Lauf und derselben Datei**: `§ 890` = 2 (dieselbe
> `§`-Zeichenklasse wie die Null-Muster, also kein Entity-Artefakt) ·
> `Anlage K 7` = 6 · `Schuldnerin` = 13 · `kerngleich` = 1 ·
> `Irreführung` = 1.
> ⭐ **Folge: Die abweichende Auffassung betrifft die
> IRREFÜHRUNGS-Achse (§ 5 UWG), nicht die DSGVO-Achse.** Der zweite
> Absagegrund des Landgerichts (Rn. 88 — unlautere Werbung macht das
> verfolgte Interesse unrechtmäßig) hängt an genau dieser Achse; der
> **erste** (Rn. 84/85 — Art.-14-/Art.-21-Pflichten nicht erfüllt)
> **wird von dem Beschluss überhaupt nicht berührt.**
>
> **6. Was der Beschluss über den Gegenstand von 38 O 17/22 sagt.** Die
> Beschlussverfügung vom 11.02.2022 untersagte, „mit dem als Anlage K 7
> in Fotokopie vorgelegten Schreiben zu werben" (Rn. 3); der
> Ordnungsmittelantrag betraf zwei Schreiben aus **Frühjahr 2023** und
> **Juli/August 2023** (Anlagen AST 4, Rn. 4). Der Antrag der
> Gläubigerin datiert vom 14. Juni 2023 (Tenor). **Gläubigerin ist eine
> andere Partei als der Kläger des hiesigen Verfahrens** (dort ein nach
> § 4 UKlaG eingetragener Verband, Rn. 2/34/64 des Urteils; das Urteil
> nennt in Rn. 44/89 daneben Verfahren „einer Mitbewerberin"). **Ob es
> um dasselbe Schreiben ging wie hier, bleibt damit offen** — die
> Anlagenkürzel unterscheiden sich (AST 4 dort, K 2 hier), und keine
> der beiden Entscheidungen stellt die Identität fest.
>
> ⚠️ **Zitierwarnung: Der Beschluss ist in sich datumsuneinheitlich.**
> Tenor „Ordnungsgeldbeschluss … vom 06. Mai 2024" ↔ Rn. 5 „mit
> Beschluss vom 06. Mai **2023**"; Tenor „sofortige Beschwerde … vom
> 27. Mai 2024" ↔ Rn. 6 „sofortige Beschwerde der Schuldnerin vom
> **25.** Mai 2024" ↔ Rn. 22 „Beschwerdeschrift vom 27. Mai 2024". Wer
> aus diesem Beschluss zitiert, nimmt die **Tenor-Daten** und weist die
> Abweichung aus; ein Datum aus einer einzelnen Randnummer trägt hier
> nicht.
>
> **7. Was das für unseren Eintrag ändert — und was nicht.** Die
> A7-Einstufung „ZULÄSSIG" bleibt unverändert (sie beruht auf § 7 UWG
> und dem BGH-Leitsatz, nicht auf diesem Urteil). Der Eintrag bleibt
> **„streitig"** — aber der Streit ist jetzt **schmaler und genauer
> beschrieben**: Ein Obergericht hat in einem Vollstreckungsverfahren
> beiläufig gesagt, ein bestimmtes geändertes Kundenanschreiben sei
> nicht zur Irreführung geeignet. Das ist **keine Aussage über die
> DSGVO-Schiene** und **keine tragende Entscheidung**. Wer aus Rn. 111
> ableitet, „das Berufungsgericht hält Briefwerbung dieser Art für
> zulässig", überdehnt den Beschluss — **jetzt belegbar, vorher nur
> vermutbar.**
>
> **8. Offen geblieben:** Der Senat verweist für die **begründete**
> Fassung seiner Auffassung auf **I-20 U 107/23** und **I-20 U 117/23**.
> Diese beiden Entscheidungen sind **nicht beschafft** — es fehlt das
> Entscheidungsdatum für die NRWE-Dokument-URL; Web-Suche und
> Jahresindex blieben ohne Treffer (Suchweg im Beschaffungsprotokoll).
> **Das ist ein Posten, kein Negativbefund.** Wer die Gegenauffassung
> in ihrer tragenden Form braucht, muss dort hin.
>
> **Frage an den Anwalt:** unverändert `handel/anwalts-briefing-2026-08.md`
> **Frage 2** — jetzt mit dem Beschluss als Anlage statt mit einer
> Leerstelle.

> ⭐ **Nachtrag 13.08.2026 (R14-B), Befund R9A-N-11 — was dieses Urteil
> NICHT liefert.** Die Darstellung oben ließ offen, auf welcher
> Prüfungsstufe das Gericht absagt. Belegt ist: **Beide Absagegründe
> liegen auf Stufe 1, nicht in der Abwägung.** *(⚠️ Präzisiert nach
> Prüferbefund PB-13: Hier stand zunächst „Stufe 1 **(berechtigtes
> Interesse)**". Der Klammerzusatz ist ein eigener und trifft nur für
> Rn. 88 genau; Rn. 84 sagt die **lit.-f-Voraussetzungen insgesamt** ab,
> nicht speziell das Tatbestandsmerkmal „berechtigtes Interesse". Die
> Quellen sagen beide nur „Stufe 1".)*
> - **Rn. 84 (① A, eigener Volltext-Abgleich am NRWE-Abzug):** „Die
>   dargestellten Voraussetzungen von Art. 6 Abs. 1 Unterabs. 1
>   Buchstabe f DSGVO sind schon deshalb nicht erfüllt, weil die
>   Beklagte nicht … allen anderen ihr nach der DSGVO obliegenden
>   Pflichten nachkommen ist." *(Grammatikfehler im Original.)*
> - **Rn. 88 (① A):** „Darüber hinaus liegen die Voraussetzungen von
>   Art. 6 Abs. 1 Unterabs. 1 Buchstabe f DSGVO deshalb nicht vor, weil
>   das von der Beklagten mit der Werbung verfolgte Interesse nicht
>   rechtmäßig ist. **Die von der Beklagten betriebene Werbung ist gemäß
>   § 3 Abs. 1 UWG unzulässig, weil sie gemäß §§ 5 Abs. 1 und Abs. 2,
>   5a Abs. 1 bis Abs. 3 UWG unlauter ist.**" *(⚠️ Der zweite Satz war
>   in der Erstfassung dieses Nachtrags abgeschnitten — Prüferbefund
>   PB-2. Er trägt die Absage und ist **lauterkeitsrechtlich**, nicht
>   datenschutzrechtlich; ohne ihn stützt die Stelle die überholte
>   „ausschließlich DSGVO"-Lesart, s. Kasten am Abschnittsanfang.)*
>
> **Folge für die Verwendung dieses Urteils:** Es liefert **keinen
> Abwägungstopos** — die Stufe-3-Abwägung hat das Gericht nie erreicht.
> Wer daraus „die Abwägung fällt bei Briefwerbung negativ aus" macht,
> überdehnt es; es liefert **Ausschlusskriterien vor der Abwägung**.
> (Herleitung: `akquise/interessenabwaegung-o8.md` § 6.2; Herkunft des
> Befundes: `protokolle/R09-A-abschluss.md` Block 3, dort N-11.)

> ⭐ **Nachtrag 13.08.2026 (R14-B), Befund R9A-N-12 — die Gegenansicht,
> die hier fehlte. Die Rechtslage ist an diesem Punkt STREITIG.** Bis zu
> diesem Nachtrag stand das Düsseldorfer Urteil hier ohne Gegenposition;
> das ließ die Rechtslage **eindeutiger aussehen, als sie ist**. Das
> Gericht setzt sich in **Rn. 79–83** ausdrücklich mit einer
> großzügigeren Sichtweise auseinander und **weicht von ihr ab** (alle
> Fundstellen aus dem Volltext kopiert, ① A):
>
> > 🔧 **REPARATUR 17.08.2026 (R16-A), Befund R15A-N-1 — der Satz
> > „weicht von ihr ab" ist SCHÄRFER als die Quelle.** Er bleibt oben
> > sichtbar stehen; hier steht, was daran nicht trägt.
> >
> > **Rn. 79 ist KONDITIONAL formuliert.** Wortlaut (① A, Anfang und
> > Ende des Satzes, Mitte mit sichtbarer Ellipse gekürzt):
> > „**Sollten** demgegenüber die Ausführungen unter B I der Gründe des
> > von der Beklagten angeführten Beschlusses des Oberlandesgerichts
> > Stuttgarts … dahin zu verstehen sein, dass an die Zulässigkeit
> > einer zum Zwecke der Direktwerbung vorgenommenen Datenverarbeitung
> > weniger strenge Anforderungen zu stellen sind …, **könnte** dem …
> > **nicht gefolgt werden** …"
> >
> > *(⚠️ Der Satz endet im Original nicht hier: Es folgen ein
> > Literaturbeleg in Klammern und ein **Doppelpunkt**, weil Rn. 80–82
> > die drei Gründe anschließen. Die Erstfassung dieses Zitats setzte
> > den Doppelpunkt direkt hinter „nicht gefolgt werden" und erzeugte
> > damit einen künstlichen Satzabschluss — gefangen vom eigenen
> > Zitatabgleich, 16 von 17 Zitaten trafen byte-treu, dieses nicht.)*
> >
> > Das Gericht sagt also **nicht** „das OLG Stuttgart liegt falsch",
> > sondern: **falls** die OLG-Ausführungen so zu verstehen sein
> > sollten, **könnte** ihnen nicht gefolgt werden. Das LG lässt
> > ausdrücklich offen, ob der Beschluss überhaupt so gemeint war.
> > **Ein „weicht ab" behauptet eine Divergenz, die die Quelle nur
> > bedingt formuliert.**
> >
> > **Was unverändert trägt:** Die drei Gegengründe in Rn. 80–82 sind
> > **nicht** konditional — sie stehen im Indikativ und gelten
> > unabhängig davon, wie man den Stuttgarter Beschluss liest.
> > **Richtige Fassung also:** Das LG stellt der großzügigeren
> > Sichtweise drei eigene Gründe entgegen (Rn. 80–82) und erklärt,
> > einer großzügigeren Lesart des OLG-Beschlusses **nicht folgen zu
> > können, falls er so zu verstehen sein sollte** (Rn. 79). Für die
> > Einstufung ändert das nichts — der Eintrag bleibt **„streitig"**;
> > es ändert die Belegkraft der Formulierung.
> >
> > *(Herkunft: `projektquelle-mkt.md` § 6a, R15A-N-1; am Rohbeleg
> > gegengeprüft 17.08.2026.)*
>
> | Gegenposition | Fundstelle (wie im Urteil zitiert) | Kern |
> |---|---|---|
> | **OLG Stuttgart** | „OLG Stuttgart, Beschluss vom 2. Februar 2024 - 2 U 63/22, GRUR-RS 2024, 3802" (Rn. 79, erneut Rn. 83) | Ausführungen unter B I der Gründe, vom LG referiert als möglicherweise dahin zu verstehen, „dass an die Zulässigkeit einer zum Zwecke der Direktwerbung vorgenommenen Datenverarbeitung weniger strenge Anforderungen zu stellen sind" |
> | **Eckhardt, ZD 2024, 399** | Rn. 79, mit Fazit-Zitat [S. 401] | „die Neukundengewinnung mittels Briefpostwerbung […] grundsätzlich gerechtfertigt ist, es sei denn, die betroffene Person hat widersprochen" |
> | **Eckhardt, ZD 2025, 443** | Rn. 79 (Grundsatz), Rn. 83 [444] (geringere Belästigungswirkung), Rn. 83 [447] (Lettershopverfahren) | „Direktwerbung wurde durch Erwägungsgrund 47 […] als berechtigtes Interesse […] klargestellt"; die Vertreter dieser Sichtweise **setzen aber voraus**, dass „die datenschutzrechtlichen Vorgaben eingehalten und die Betroffenen gemäß Artt. 13,14, 21 DSGVO in der Werbesendung transparent informiert werden" |
>
> **Warum das LG nicht folgt (Rn. 80–82, sinngemäß zusammengefasst —
> Wortlaut im Rohbeleg):** Direktwerbung *kann* ein berechtigtes
> Interesse sein, muss es aber nicht (Rn. 80) · auch dann müssen alle
> weiteren Voraussetzungen des Art. 6 Abs. 1 Unterabs. 1 lit. f erfüllt
> sein (Rn. 81) · aus einem **fehlenden Widerspruch** lässt sich keine
> Zulässigkeit ableiten, weil das Widerspruchsrecht eine rechtmäßige
> Verarbeitung bereits voraussetzt (Rn. 82).
>
> ⚠️ **Belegstufen-Grenze:** OLG-Beschluss und beide
> Eckhardt-Fundstellen sind **nur im Volltext des LG-Urteils gelesen**
> (Belegstufe ③ — Zitat zweiter Hand); GRUR-RS und ZD liegen hinter
> Bezahlschranken, es wurde **kein Original beschafft**. Ob die
> Ausführungen des OLG Stuttgart wirklich so zu verstehen sind, lässt
> **das LG selbst offen** („Sollten … dahin zu verstehen sein"). Für
> unsere Zwecke ist der Eintrag deshalb **„streitig"** — nicht „das LG
> hat recht" und nicht „Briefwerbung ist großzügig zu behandeln".
> ⛔ *(**Gestrichen 13.08.2026 nach Prüferbefund PB-3.** Hier stand:
> „⭐ Und der praktische Gleichlauf beider Pole: Selbst die großzügigere
> Ansicht verlangt die transparente Information nach Artt. 13, 14, 21
> DSGVO in der Werbesendung (Rn. 83) — **an unseren Bau-Pflichten ändert
> der Streitstand nichts.**" Drei Gründe, und die Reparatur ist
> **Streichen, nicht Abschwächen**: (1) Der Satz ist eine **Entwarnung**
> und wird von der Tabelle drei Zeilen darüber widerlegt — das dort
> zitierte Eckhardt-Fazit (ZD 2024, 399) kennt diese Voraussetzung
> gerade nicht. (2) Rn. 83 belegt die Voraussetzung mit **einer**
> Fundstelle und ausdrücklich „für das **Lettershopverfahren**" — ein
> Sonderfall, kein Gleichlauf. (3) Es ist eine **neue
> Rechtsbewertung**; sie steht in keiner der beiden Quellen und war
> dieser Session ausdrücklich untersagt.)*
> (Herkunft des Befundes: `protokolle/R09-A-abschluss.md` Block 3, dort
> N-12; Rohbeleg `sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.txt`,
> gelesen 13.08.2026.)
>
> 📌 **Rückwirkung auf ein Nachbardokument (Klasse N-10/O-9):**
> `akquise/interessenabwaegung-o8.md` schreibt an seiner
> LG-Düsseldorf-Stelle „**Gegenansicht, die in der Rechtsmatrix
> fehlt**" — das war zum Stand `b2cfa12` richtig und ist **mit diesem
> Nachtrag überholt**. Dasselbe gilt für den dortigen Q-05-Vermerk „die
> Lücke ist aus `handel/kanal-rechtsmatrix.md` C4 geerbt — dort steht
> dieselbe Aufzählung ohne die Empfänger-Angabe" (jetzt geschlossen,
> s. C4). **Beide Stellen liegen außerhalb des Scopes dieser Session**
> und sind als Nebenbefund an MKT-AKQ / die Leitsession gemeldet.

### Keine Impressumspflicht im Brief — aber möglicherweise Geschäftsbrief-Pflichtangaben

Die Impressumspflicht des § 5 DDG hängt am **digitalen Dienst**, nicht am Werbemittel; ein Papierbrief ist keiner (② A). **Es gibt also keine DDG-Impressumspflicht für den Brief.**

Davon zu trennen sind die **Geschäftsbrief-Pflichtangaben** (§ 35a GmbHG: „auf allen Geschäftsbriefen gleichviel welcher Form, die an einen bestimmten Empfänger gerichtet werden" — Rechtsform, Sitz, Registergericht, Registernummer, Geschäftsführer; parallel § 37a HGB, § 125 HGB). ⚠️ **STREITIG**, ob ein Werbebrief ein Geschäftsbrief ist: Werbeschriften an einen *unbestimmten* Personenkreis sind es nicht — ein **personalisiertes** Akquise-Anschreiben an einen bestimmten Betrieb erfüllt aber die gängige Definition des ersten schriftlichen Kontakts. **Belegstufe ③: institutionelle Sekundärquelle (IHK-Merkblatt), keine Rechtsprechung erhoben.** Da die Angaben ohnehin in den Briefbogen gehören, ist die sichere Wahl, sie aufzunehmen.

### Die DSGVO-Seite ist beim Brief die eigentliche Schranke

Hier entscheidet der Personenbezug (Details in Teil C):

| Adressierung | DSGVO? |
|---|---|
| „Hotel Seeblick GmbH, Seestr. 1" — **ohne** Personennamen | **nein** für diese Felder (ErwG 14 S. 2: Name, Rechtsform und Kontaktdaten der **juristischen** Person sind ausgenommen) |
| „Hotel Seeblick, Inh. Maria Berger e.K." · GbR · OHG · KG | **ja, vollständig** — die Firma *ist* die Person |
| „Frau Berger, Direktorin" | **ja** |

> ⭐ **Das macht den Brief an die Firmenanschrift ohne Personennamen zum einzigen Kanal, der bei einer Kapitalgesellschaft weder § 7 Abs. 2 UWG auslöst noch die DSGVO.** Bei inhabergeführten Häusern — dem typischen Zuschnitt unserer Zielgruppe — gilt das gerade **nicht**.

Wo die DSGVO greift, gelten **Art. 14** (Informationspflicht, Frist ab Listenaufbau) und **Art. 21 Abs. 2–4** (absolutes Widerspruchsrecht, abgesetzter Hinweis) unverändert — der Brief ist datenschutzrechtlich **nicht** privilegiert.

⚠️ **Und die Adressquelle schlägt durch:** Die Aufsichtsbehörden halten das Auslesen von **Impressumsdaten** zu Werbezwecken für unzulässig (Teil C) — das gilt für den Briefkanal genauso wie für E-Mail.

### Was das für unsere Zielkundenliste heißt

- **Der Brief ist unser tragfähigster Erstkontakt-Kanal in die Kaltakquise.** Er ist der einzige, der ohne Einwilligung auskommt — mit einem amtlichen BGH-Leitsatz zu seinen Gunsten und ohne ein einziges auffindbares Verbotsurteil zu B2B-Kaltpost.
- **Adressiert wird an die Firma, nicht an eine namentlich benannte Person** — das hält bei Kapitalgesellschaften die DSGVO aus dem Spiel. Bei Einzelunternehmen und Personengesellschaften greift sie trotzdem.
- **Sobald personalisiert wird, müssen Art.-14-Information und Art.-21-Abs.-4-Widerspruchshinweis IN den ersten Brief** — optisch vom Werbetext getrennt. Genau daran ist die Beklagte im Düsseldorfer Verfahren gescheitert. Das ist kein Formalismus, sondern der einzige Punkt, an dem Briefwerbung 2026 nachweislich untersagt wurde.
- **Die Adressen dürfen nicht aus Impressen stammen** (Teil C) und nicht aus Quellen mit Werbenutzungsverbot (Achse 3). *(→ ÜBERHOLT durch D3-Entscheid 2 v. 11.08.2026, Weg b: Impressumsdaten werden mit dokumentiertem Restrisiko genutzt — Bau-Pflichten im D3-Kasten; das Werbenutzungsverbot fremder Quellen [Achse 3] bleibt unberührt.)*
- **Die Aufmachung ist das eigentliche UWG-Risiko**, nicht der Kanal: keine Formular-, Rechnungs- oder Vertragsverlängerungs-Anmutung, kein fingierter Persönlichkeitseindruck, keine falschen Dringlichkeitsaufdrucke. Der Werbecharakter muss nach dem Öffnen sofort erkennbar sein.
- **Datenherkunft je Adresse dokumentieren** — Art. 14 Abs. 2 lit. f verlangt die Quellenangabe im Brief; ohne Herkunftsprotokoll ist die Pflicht nicht erfüllbar.
- **Ein Sperrregister ist Pflicht**, sobald der erste Widerspruch eingeht — kanalübergreifend. Nach einem Widerspruch dürfen **keine neuen Druckaufträge** mehr starten.
- **Kein Rückschluss auf andere Kanäle:** Dass der Brief zulässig war, macht die Nachfass-E-Mail nicht zulässig.

---

# Teil B — Rechtsfolgen: Wer kann was, und was kostet es

## B1 · Wer kann gegen uns vorgehen

**§ 8 Abs. 3 UWG ist abschließend** (① A): Mitbewerber „der Waren oder Dienstleistungen **in nicht unerheblichem Maße und nicht nur gelegentlich** vertreibt oder nachfragt" (Nr. 1 — die 2021 eingefügte Verschärfung), gelistete Wirtschaftsverbände (Nr. 2), qualifizierte Verbraucherverbände (Nr. 3), IHK/Kammern/Gewerkschaften (Nr. 4).

### ⭐ Der angeschriebene Hotelier ist kein Mitbewerber — und trotzdem der wahrscheinlichste Gegner

Er hat **keinen** UWG-Anspruch. Der BGH ist deutlich (BGH, Urt. v. 10.07.2018 – VI ZR 225/17, ② B): § 8 Abs. 3 UWG gewährleistet „lediglich einen Kollektivschutz … **Einen Individualschutz von Verbrauchern und sonstigen Marktteilnehmern sehen sie nicht vor.**"

**Sein Weg läuft über §§ 823 Abs. 1, 1004 Abs. 1 S. 2 BGB analog** — Eingriff in den eingerichteten und ausgeübten Gewerbebetrieb. Amtlicher Leitsatz BGH, Urt. v. 14.03.2017 – VI ZR 721/15 (② A): „Die ohne wirksame Einwilligung an eine **geschäftliche** E-Mail-Adresse versandte Werbe-E-Mail stellt einen Eingriff in das Recht am eingerichteten und ausgeübten Gewerbebetrieb dar." Und schon **eine einzige** Mail genügt (BGH, Beschl. v. 20.05.2009 – I ZR 218/07, amtlicher Leitsatz).

Die dogmatische Brücke wirkt gegen uns: „Hier kommen die **Maßstäbe des § 7 UWG** zur Vermeidung von Wertungswidersprüchen auch im Rahmen der Prüfung eines Eingriffs in den eingerichteten und ausgeübten Gewerbebetrieb gemäß § 823 Abs. 1 BGB zur Anwendung" (BGH VI ZR 721/15, ② A).

> ⚠️ **Die wichtigste Einzelaussage dieses Teils:** **Auf der BGB-Schiene greifen die UWG-Schutzvorschriften für kleine Abgemahnte nicht.** Nicht § 13 Abs. 4, nicht § 13a Abs. 2, nicht die Formanforderungen des § 13 Abs. 2, und auch die Gerichtsstandsbeschränkung des § 14 Abs. 2 S. 3 nicht — denn § 14 gilt nur für Ansprüche „auf Grund dieses Gesetzes" (① A). Die Abmahnkosten laufen dort über Geschäftsführung ohne Auftrag (§§ 677, 683 S. 1, 670 BGB). **Die Reform von 2021 schützt uns gegen den häufigsten Angreifer also gerade nicht.**

### ⭐ Nachtrag 13.08.2026 (R14-B), Befund R9A-N-14: Die dritte Schiene — ein DSGVO-Verstoß kann über § 3a UWG abgemahnt werden

> ⚠️ **Überschrift-Präzisierung 17.08.2026 (R16-A), Befund R15A-N-2:
> „über § 3a UWG" ist zu eng.** Das Urteil führt an dieser Stelle eine
> **Doppelbegründung** und lässt ausdrücklich offen, welcher der beiden
> Wege der vorrangige ist (Rn. 136). Vollständig lautet die Überschrift
> daher: **„… kann über § 3a UWG ODER über § 3 Abs. 2 UWG abgemahnt
> werden"**. Die alte Überschrift bleibt als Anker stehen — der Zusatz
> steht hier, weil ein Vorbehalt, der nur in den Zellen und nicht im
> Kopf steht, beim Weiterverdichten als Erstes verlorengeht.

**Teil B behandelte bisher zwei Schienen: den UWG-Verstoß (§ 7) und die
BGB-Schiene des angeschriebenen Betriebs. Es gibt eine dritte:** Ein
Verstoß gegen datenschutzrechtliche Vorschriften kann als
**Rechtsbruch nach § 3a UWG** verfolgt werden — und damit von genau dem
Kreis des § 8 Abs. 3 UWG, **einschließlich Mitbewerbern**. *(→ Und
nicht nur über § 3a UWG: s. die Überschrift-Präzisierung oben und die
Zeilen Rn. 136/147/148 der Tabelle.)*

⚠️ **Das ist keine neue Rechtsfrage in diesem Dokument, sondern ein
neuer BELEG dafür.** Die Frage steht am Ende dieses Dokuments seit R07-C
als „**§ 3a UWG und DSGVO-Abmahnbarkeit — Streitstand nicht abschließend
erhoben**"; dieser Status bleibt. Neu ist, dass dasselbe LG-Urteil, das
die Rechtsmatrix in A7 ohnehin führt, die Schiene ausdrücklich
durchprüft (alle Fundstellen aus dem Volltext kopiert, ① A, Rohbeleg
`sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.txt`, gelesen
13.08.2026):

| Rn. | Aussage im Urteil |
|---|---|
| **127** | „Unter solchen Umständen kann die Lauterkeit einer datenschutzrechtliche Vorschriften verletzenden Geschäftspraxis vom Grundsatz her gemäß § 3a UWG oder gemäß § 3 Abs. 2 UWG beurteilt werden." |
| **128** | „Regelmäßig wird … anhand von § 3a UWG geprüft, ob ein geschäftliches Handeln, das gegen datenschutzrechtliche Vorschriften verstößt, unlauter ist" — mit BGH-Belegen (Urteile v. 27.03.2025 – I ZR 186/17 „App-Zentrum III"; I ZR 222/19 und I ZR 223/19 „Arzneimittelbestelldaten III/II") |
| **129** | Grenze: Weil die UGPRL das B2C-Lauterkeitsrecht vollharmonisiert, tragen Rechtsverstöße § 3a UWG nur, wenn die verletzte Vorschrift **außerhalb** des UGPRL-Anwendungsbereichs liegt „wie das etwa bei allein das Verhältnis zwischen Mittbewerbern betreffenden Regelungen der Fall ist" *(Schreibweise „Mittbewerbern" wie im Original)* oder einen von der UGPRL unberührten Bereich betrifft |
| **130** | ⭐ **Auflösung der Grenze aus Rn. 129 durch das Gericht** *(ergänzt nach Prüferbefund PB-17 — die Erstfassung sprang von 129 auf 134 und ließ die Rn.-129-Grenze offener wirken, als das Urteil sie lässt)*: „In Bezug auf den … gerügten Verstoß kann auf **Art. 3 Abs. 4 UGPRL** zurückgegriffen werden … was im Grundsatz die Beurteilung einer **auch Verbraucher erreichenden** Geschäftspraxis anhand von § 3a UWG ermöglicht" |
| **134** | Der EuGH hat „die im deutschen Recht für **Mitbewerber des Verletzers** und Verbraucherschutzverbände vorgesehene Möglichkeit, datenschutzrechtliche Verstöße als unlauterere Geschäftspraktik … zu ahnden, gebilligt" (EuGH C-21/23 „ND/DR"/„Lindenapotheke" Rn. 73; C-319/20 „Meta Platforms Ireland" Rn. 79) |
| **135** | ⚠️ **Kein Automatismus:** „führt … keiner der beiden Wege dazu, dass im Sinne eines Automatismus jeder Verstoß gegen die DSGVO eine unlautere Handlung darstellt" |
| **136** | ⭐ **Die Weiche wird ausdrücklich offengelassen — und BEIDE Wege werden bejaht** *(ergänzt 17.08.2026, R16-A, Befund R15A-N-2)*: „Es kann offenbleiben, ob im Allgemeinen in erster Linie § 3a UWG als nach dem nationalen Recht speziellere Norm heranzuziehen ist, oder § 3 Abs. 2 UWG, der auf einer unionsrechtlichen Grundlage beruht. Bezogen auf die von dem Kläger mit seinem Antrag I angegriffenen Verstöße liegen **sowohl** die Voraussetzungen von § 3a UWG vor (dazu aa) **als auch** diejenigen von § 3 Abs. 2 UWG (dazu bb)." |
| **137** | Im entschiedenen Fall bejaht: „Die gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden geschäftlichen Handlungen sind gemäß § 3a UWG unlauter." |
| **147** | ⭐ **Und die zweite Schiene ebenso** *(ergänzt 17.08.2026, R16-A, Befund R15A-N-2)*: „Die gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO verstoßenden geschäftlichen Handlungen sind **außerdem gemäß § 3 Abs. 2 UWG** unlauter." |
| **148** | Der Tatbestand der zweiten Schiene im Wortlaut — **und seine Adressatengrenze**: „Nach § 3 Abs. 2 UWG sind geschäftliche Handlungen, die sich **an Verbraucher richten oder diese erreichen**, unlauter, wenn sie nicht der unternehmerischen Sorgfalt entsprechen und dazu geeignet sind, das wirtschaftliche Verhalten des Verbrauchers wesentlich zu beeinflussen." |

**Was das für die Risikolage heißt — und was ausdrücklich NICHT belegt
ist:**

- **Belegt:** Ein DSGVO-Verstoß beim Werbeversand kann lauterkeitsrechtlich
  verfolgt werden; die Anspruchsberechtigung richtet sich dann nach
  § 8 Abs. 3 UWG. Damit fällt die Entlastung weg, die B1 für die
  BGB-Schiene beschreibt (dort ist der Hotelier der Angreifer) — hier
  wären **Mitbewerber und Verbände** die Angreifer.
- **Belegt:** Kläger im entschiedenen Verfahren war ein **Verband** nach
  § 8 Abs. 3 Nr. 3 UWG (Rn. 34, 64) — Rn. 2: „Der Kläger ist in die
  Liste qualifizierter Einrichtungen nach § 4 UKlaG eingetragen." Die
  Mitbewerber-Aussage stützt sich auf Rn. 134 (Billigung durch den EuGH),
  nicht auf den Streitgegenstand.
  > 🔧 **REPARATUR 17.08.2026 (R16-A), Befund R15A-N-3.** Hier stand
  > zusätzlich: „**kein Mitbewerber.**" Das ist **gestrichen**, weil es
  > eine **Ableitung** aus der Verbandseigenschaft ist und keine
  > Quellenaussage: Der Zählweg `grep -o "kein Mitbewerber"` über das
  > Urteil ergibt **0** Treffer bei greifender Positivkontrolle
  > (`grep -oE "Mitbewerber[a-zä]*"` = **8** Fundstellen in den Formen
  > Mitbewerber/Mitbewerbern/Mitbewerberin, verteilt auf 8
  > Randnummern). ⚠️ **Nachbarform:** Das Urteil schreibt in Rn. 129
  > zusätzlich „Mittbewerbern" mit Tippfehler — `Mit**t**+bewerber`
  > liefert **9**. Wer nur die korrekte Schreibweise sucht, zählt eine
  > Fundstelle zu wenig; es ist dieselbe Klasse wie beim
  > Genitiv-`s` in der OLG-Zählung oben. Die Ableitung ist
  > naheliegend und vermutlich richtig — aber sie ist unsere, nicht die
  > des Gerichts, und dieses Dokument trennt beides.
  > **⚠️ Und die Gegenrichtung, die dabei fast untergegangen wäre:**
  > Dieselben Fundstellen zeigen, dass **Mitbewerberinnen gegen dieselbe
  > Beklagte sehr wohl vorgegangen sind** — Rn. 89 nennt das „von einer
  > **Mitbewerberin** der Beklagten gegen die Beklagte geführten
  > einstweiligen Verfügungsverfahren 38 O 88/23", Rn. 44 ein weiteres,
  > Rn. 124 „mehreren gegen die Beklagte geführten Verfügungsverfahren",
  > in denen eine Mitbewerberin Unterlagen vorlegte. *(Zitate hier im
  > Kasus des Originals wiedergegeben; die Erstfassung hatte
  > Flexionsänderungen mit `[…]` markiert — das Zeichen steht für
  > Auslassungen, nicht für Beugung, und ein maschineller Zitatabgleich
  > behandelt beides gleich. Korrigiert 17.08.2026, Prüferbefund H-7.)* **Für die Risikolage ist das die wichtigere Aussage als
  > die Verbandseigenschaft des hiesigen Klägers:** Der Sachverhalt hat
  > Mitbewerber-Angriffe tatsächlich ausgelöst, sie liefen nur in
  > anderen Verfahren.
- ⚠️ **Belegkraft des Belegs selbst** *(ergänzt nach Prüferbefund PB-8 —
  die Erstfassung dieses Abschnitts nannte weder Instanz noch
  Rechtskraft, obwohl Teil B gerade der Teil zur Angriffs- und
  Kostenlage ist)*: Es ist ein **Urteil erster Instanz**, „vorläufig
  vollstreckbar". Ein Rechtsmittelhinweis oder eine Rechtskraftangabe
  **steht nicht im Text** — gemessen in `akquise/interessenabwaegung-o8.md`
  § 6.2 (Suchlauf `berufung|rechtsmittel|rechtskräftig`: 0 Treffer).
  **Das ist „nicht prüfbar", kein Negativbefund** — die Rechtskraft ist
  damit ungeklärt, nicht verneint. *(Dieselbe Präzisierung ist in A7
  fällig, wo bisher nur „Rechtskraft nicht geprüft" steht; sie ist als
  Posten für MKT-HANDEL vermerkt.)*
- ⚠️ **Nicht erhoben — und deshalb hier auch nicht behauptet:** Der Fall
  ist **B2C**. Ob und wie die UGPRL-Grenze aus Rn. 129 bei einer reinen
  **B2B**-Aussendung wirkt, ist eine eigene Frage; sie wurde von dieser
  Session **nicht** geprüft und ist auch nicht Gegenstand des Urteils.
  Der Streitstand bleibt „nicht abschließend erhoben".
  > ⭐ **Nachtrag 17.08.2026 (R16-A), Befund R15A-N-2 — die
  > Doppelbegründung macht diese offene Frage GRÖSSER, nicht kleiner.**
  > Solange hier nur § 3a UWG stand, war die B2B-Frage eine einzige:
  > „trägt § 3a UWG auch ohne Verbraucherbezug?" Mit der zweiten
  > Schiene sind es **zwei Fragen mit gegenläufiger Richtung**, und
  > beide gehören dem Anwalt:
  >
  > | Schiene | Was an ihr B2B-abhängig ist | Richtung |
  > |---|---|---|
  > | **§ 3 Abs. 2 UWG** (Rn. 147) | Der Tatbestand nennt selbst „geschäftliche Handlungen, die sich **an Verbraucher richten oder diese erreichen**" (Rn. 148, Gesetzeswortlaut) | Die **Adressatengrenze steht im Tatbestand** — bei einer reinen B2B-Aussendung stellt sich die Anwendungsfrage unmittelbar |
  > | **§ 3a UWG** — Anwendbarkeit (Rn. 129/130) | Die Grenze ist die **UGPRL-Vollharmonisierung**, die gerade nur den **B2C**-Bereich erfasst; das Gericht löst sie über Art. 3 Abs. 4 UGPRL für eine „auch Verbraucher erreichende" Praxis (Rn. 130) | **Umgekehrt:** Die Sperre, die § 3a UWG hier begründungsbedürftig macht, greift bei B2B womöglich gar nicht erst — Rn. 129 nennt „allein das Verhältnis zwischen Mittbewerbern betreffende[…] Regelungen" ausdrücklich als Beispiel für das, was **außerhalb** der UGPRL liegt |
  > | **§ 3a UWG** — Marktverhaltensregelung (Rn. 141/142) *(ergänzt 17.08.2026, Prüferbefund M-6)* | Das Gericht bejaht sie, bindet sie im selben Absatz aber an die **Verbrauchereigenschaft** zurück: die Grenzen „bezwecken … auch den Schutz der betroffenen Person **in ihrer Stellung als Marktteilnehmer**" | **Dieselbe Richtung wie § 3 Abs. 2 UWG** — nicht die entgegengesetzte. Die zwei Achsen derselben Schiene zeigen also selbst nicht gleich |
  > | **§ 3a UWG** — Spürbarkeit (Rn. 143–146) *(ergänzt 17.08.2026, Prüferbefund M-6)* | Eigenständiges Tatbestandsmerkmal. Das Gericht stützt es u. a. darauf, dass „eine **massenhaft verbreitete** Werbeaussendung betroffen ist" (Rn. 146); Rn. 110 misst „millionenfach" am Wortsinn ab **1.000.000 Briefen** | ⭐ **Für uns die praktisch nächstliegende Achse — und sie war im ganzen Bestand nirgends gestellt.** Unsere Planung rechnet mit Wellen im **dreistelligen** Bereich. Ob die Spürbarkeitsschwelle dort erreicht wird, ist offen und als Frage ans Briefing gegeben |
  >
  > **Was daraus NICHT folgt:** weder „bei B2B greift keine der beiden
  > Schienen" noch „bei B2B greift § 3a erst recht". Beides wären
  > Rechtsbewertungen, die dieses Dokument nicht vornimmt —
  > **ausdrücklich auch nicht die bequemere.** Der Punkt ist allein,
  > dass die B2B-Frage **je Schiene UND je Tatbestandsmerkmal** getrennt
  > zu beantworten ist. *(🔧 Korrigiert 17.08.2026 nach Prüferbefund
  > M-6: Hier stand „je Schiene getrennt … und die Antworten zeigen in
  > entgegengesetzte Richtungen". Das war zu grob — schon **innerhalb**
  > der § 3a-Schiene zeigen die Achsen Anwendbarkeit und
  > Marktverhaltensregelung nicht in dieselbe Richtung, und die
  > Spürbarkeit ist eine dritte, davon unabhängige Frage. Die
  > Erstfassung nannte nur die für uns günstigste der drei.)*
  >
  > ⚠️ **Abdeckungs-Lücke, gemessen und ehrlich benannt** *(ausgelöst
  > durch Prüferbefund M-6, nach den Ergänzungen dieser Runde neu
  > erhoben)*: ~~Dieses Dokument nennt aus dem Urteilsblock 79–155
  > jetzt **65 von 77** Randnummern. **Nicht genannt bleiben zwölf:
  > 121, 122, 123, 126, 138, 139, 140, 151, 152, 153, 154, 155**~~ —
  > darunter die Anwendung des § 3 Abs. 2 UWG auf den Fall (151 ff.)
  > und die Anwendbarkeitsprüfung des § 3a UWG (138–140). **Das ist
  > keine Entwarnung, sondern eine Nacharbeits-Liste.**
  > *(Zählweg: Muster `Rn\.\s*N` einschließlich der Ketten- und
  > Spannenformen `Rn. 141/142`, `Rn. 143–146`, `Rn. 136, 137, 147`.
  > ⚠️ **Ein Muster nur auf die Grundform meldete 13 statt 12 fehlende
  > Randnummern** — es zählte „Rn. 141/142" als bloße 141. Vier
  > Positivkontrollen des Zählwegs mit bekanntem Sollwert laufen im
  > selben Lauf mit; Gegenkontrolle `Rn. 999` = 0.)*
  >
  > 🔧 **KORREKTUR 17.08.2026 (R17-A) — die Zahl oben war falsch, die
  > Liste unvollständig. Gemessen: 63 von 77, und vierzehn fehlten.**
  > Die R16-Zahl ist eine **delegierte Zahl**, die diese Session
  > auftragsgemäß selbst reproduziert hat — mit abweichendem Ergebnis:
  > **nicht genannt waren 121, 122, 123, 126, 138, 139, 140, 149, 150,
  > 151, 152, 153, 154, 155.** Zusätzlich zur R16-Liste fehlten
  > **Rn. 149** (richtlinienkonforme Auslegung des § 3 Abs. 2 UWG nach
  > Art. 5 Abs. 2 UGPRL, mit dem zweistufigen Prüfprogramm) und
  > **Rn. 150** (Übergang zur Subsumtion).
  > **Zählweg dieser Korrektur:** dasselbe Muster `Rn\.` + Zahlenkette
  > mit Expansion der Spannen (`–`, `-`, `bis`), Schrägstrich- und
  > Komma-Ketten sowie `f.`/`ff.`; Summenprobe **63 + 14 = 77**;
  > Positivkontrolle `Rn. 88` = genannt (true), Gegenkontrolle
  > `Rn. 9999` = nicht genannt (false).
  > **Zweiter, unabhängiger Lesekanal für genau den Unterschied** (weil
  > ein Negativ einen zweiten Kanal braucht): Die reinen Ziffernfolgen
  > `149` und `150` kamen im **gesamten Dokument je 0-mal** vor — also
  > in **keiner** Nennungsform, auch nicht in einer Tabellenzelle
  > `| **149** |` (diese Zellform existiert im Dokument, s. die
  > Wortlaut-Tabelle zu Rn. 127–148, und wird vom Rn.-Muster nicht
  > erfasst; genau darin lag der Unterschied nicht — geprüft).
  > **Neuer Stand nach dieser Runde: 77 von 77.** Die vierzehn
  > Randnummern sind unten einzeln ausgewiesen.
  > **Frage an den Anwalt: `handel/anwalts-briefing-2026-08.md`
  > Frage 3** (§ 3a UWG in einer reinen B2B-Aussendung).
- ⚠️ **Nicht erhoben:** die Kostenfolge dieser Schiene. § 13 Abs. 4 Nr. 2
  UWG schließt den Aufwendungsersatz bei **DSGVO-/BDSG-Verstößen** unter
  250 Mitarbeitern aus (s. B2) — ob dieser Ausschluss einen über § 3a UWG
  verfolgten DSGVO-Verstoß erfasst, ist eine Auslegungsfrage, die hier
  **offen** bleibt. Wer sie beantwortet haben will, braucht anwaltlichen
  Rat (Geltungsgrenze des Dokuments).

*(Herkunft des Befundes: `protokolle/R09-A-abschluss.md` Block 3, dort
N-14. Eingearbeitet in R14-B; die „nicht erhoben"-Zeile am Dokumentende
trägt einen Vorwärtsverweis hierher.)*

### ⭐ Nachtrag 17.08.2026 (R17-A), Befund R16A-N-8: Die vierzehn nachgeholten Randnummern — Block 79–155 jetzt 77/77

Jede der vierzehn ist am Rohbeleg
`sensibel/rohbelege-R09-A/lg-duesseldorf-38-O-243-23.txt` **im Block am
Stück** gelesen (Randnummer steht in **dieser** Extraktion am
Zeilenanfang **vor** ihrem Absatz — gemessen, nicht angenommen; die
Zahlen wurden im Text gesucht, nie ausgezählt). Alle Zitate ① A.
**Auch die Randnummern, die nichts ändern, stehen hier** — mit dem
Satz, warum.

| Rn. | Inhalt | Wirkung auf den Bestand |
|---|---|---|
| **121** | Der Kläger hatte das dem Werbeschreiben beiliegende **Auftragsformular nicht vorgelegt**; das steht der Irreführungs-Feststellung nicht entgegen | **keine** — reine Beweisfrage des dortigen Prozesses, unser Vorhaben legt keine Formulare bei |
| **122** | Warum der Kläger es nicht vorlegen konnte (die beschwerdeführenden Verbraucher hatten es zurückgesandt); „Es wäre daher Sache der **Beklagten** gewesen, das Formular … spätestens im Rechtsstreit vorzulegen" | **keine für die Rechtslage** — aber siehe 123 |
| **123** | ⭐ **Darlegungslast:** „Unabhängig von der fehlenden tatsächlichen Möglichkeit des Klägers zur Vorlage des Formulars ist es **Sache des Unternehmers**, dem eine irreführende geschäftliche Handlung vorgehalten wird, **von sich aus** zu außerhalb oder im Umfeld der angegriffenen geschäftlichen Handlung liegenden Faktoren vorzutragen wenn er geltend machen will, diese wirkten sich konkret auf den … Gesamteindruck aus" *(Schreibweise wie im Original, fehlendes Komma vor „wenn")* | **Bestand ergänzt:** Wer sich im Streitfall auf entlastende Beilagen, Website-Inhalte oder Kontextinformationen berufen will, **muss sie selbst vortragen**. Betriebsfolge: Was uns entlasten soll, muss **dokumentiert und auffindbar** sein — sonst existiert es im Prozess nicht |
| **126** | Der Verstoß erfüllt **keinen** der speziellen Unlauterkeitstatbestände der §§ 4a ff. UWG (nicht aggressiv, nicht irreführend, kein Vorenthalten) | ⭐ **wichtig für das Verständnis der Doppelbegründung:** § 3a UWG und § 3 Abs. 2 UWG kommen im Urteil **erst zum Zug, nachdem die Spezialtatbestände verneint sind**. Sie sind der Auffangweg, nicht der erste Zugriff |
| **138** | ⭐ **Anwendbarkeitsprüfung des § 3a UWG — zwei Voraussetzungen:** (a) Art. 4 UGPRL steht über Art. 3 Abs. 4 UGPRL „nicht von vorneherein entgegen"; (b) „dass nämlich die entsprechende Vorschrift **entweder selbst dem unmittelbar geltenden Unionsrecht angehört oder unionsrechtskonform ist**" — erfüllt, weil Art. 5/6 DSGVO „Teil des gemäß Art. 288 Abs. 2 AEUV unmittelbar geltenden Unionsrechts" sind | **Bestand ergänzt:** Die § 3a-Schiene hat damit **drei** Achsen, nicht zwei — Anwendbarkeit (138), Marktverhaltensregelung (139–142), Spürbarkeit (143–146). Die Anwendbarkeit ist die **einzige**, die im dortigen Fall glatt durchlief |
| **139** | Überleitung: Art. 5/6 DSGVO müssen „dazu bestimmt sein, im Interesse der Marktteilnehmer das Marktverhalten zu regeln" | **keine eigenständige** — Scharnier zu 140/141 |
| **140** | ⭐ **Der Maßstab für „Marktverhaltensregelung":** Die Norm darf „sich **nicht lediglich reflexartig** zu Gunsten von Marktteilnehmern auswirken, sondern muss jedenfalls auch — dieser Zweck muss nicht der einzige und nicht einmal der primäre sein — die Funktion haben, die wettbewerblichen Belange … zu schützen, wobei das geschützte Interesse **gerade durch die Marktteilnahme** … berührt werden muss" | **Bestand ergänzt:** Das ist der Prüfsatz, an dem sich die B2B-Frage entscheidet — die Rechtsmatrix führte bisher nur das **Ergebnis** (141) und den Verbraucher-Rückbezug (142), nicht den Maßstab |
| **149** | ⭐ **§ 3 Abs. 2 UWG ist richtlinienkonform auszulegen** (Art. 5 Abs. 2 UGPRL) — zweistufig: erstens Verstoß gegen die **berufliche Sorgfalt**, zweitens **wesentliche Beeinflussung** des wirtschaftlichen Verhaltens; Maßstab durchgehend der „normal informierte, angemessen aufmerksame und verständige **Durchschnittsverbraucher**" | ⭐ **Bestand ergänzt und in der R16-Lücken-Liste gar nicht enthalten.** Verstärkt die Adressatengrenze: Der Maßstab dieser Schiene ist **normativ an den Verbraucher gebunden**, nicht nur der Wortlaut des § 3 Abs. 2 UWG |
| **150** | Übergang zur Subsumtion („erfüllt diese Voraussetzungen") | **keine** — Satzbrücke; ⚠️ der Satz ist im Original grammatisch unvollständig („Das … gegen Artt. 5 Abs. 1 Buchstabe a, 6 Abs. 1 Unterabs. 1 DSGVO erfüllt diese Voraussetzungen") |
| **151** | ⭐ **Berufliche Sorgfalt:** „Ein Durchschnittsverbraucher kann von einem Unternehmer billigerweise erwarten, dass er die in Art. 5 DSGVO festgelegten … Grundsätze **kennt** und sie bei seiner unternehmerischen Tätigkeit **anwendet**." Verschärfend: „wenn dies bei der Verarbeitung persönlicher Daten im Rahmen einer **großangelegten, unter keinem Zeitdruck stehenden Werbekampagne** geschieht" | ⭐ **Bestand ergänzt.** Zwei Betriebsfolgen: (1) Unkenntnis der DSGVO entlastet nicht. (2) Der Verschärfungsgrund knüpft an **Größe und Vorbereitungszeit** an — dieselbe Achse wie die Spürbarkeit (Rn. 146, „massenhaft verbreitete Werbeaussendung"). **Was „großangelegt" heißt, sagt das Urteil nicht** |
| **152** | ⭐ **Die Schwelle der „wesentlichen Beeinflussung":** Sie „ergibt sich … **schon daraus, dass** sie bei Beachtung der Sorgfalt mangels eines mit ihr verfolgten rechtmäßigen Interesses **insgesamt unterblieben wäre** und die Adressaten keiner werblichen Ansprache ausgesetzt gewesen wären" | ⭐ **Bestand ergänzt — die praktisch schärfste der vierzehn.** Nach dieser Begründung ist die zweite Stufe des § 3 Abs. 2 UWG bei einer rechtswidrigen Werbeaussendung **strukturell immer erfüllt**, weil sie ohne die Rechtswidrigkeit gar nicht stattgefunden hätte. **Ob das ein tragfähiger allgemeiner Satz oder eine Einzelfallformulierung ist, entscheidet dieses Dokument nicht — Frage an den Anwalt, s. `handel/anwalts-briefing-2026-08.md` Frage 3** |
| **153** | Antrag II: Verstoß gegen die **TKG-Informationspflichten** (§§ 54, 55 TKG, Umsetzung von Art. 102 der Richtlinie (EU) 2018/1972) | **keine** — telekommunikationsspezifische Pflichten, die uns tatbestandlich nicht treffen. *(Der Weg, auf dem das Gericht daraus Unlauterkeit ableitet, trifft uns sehr wohl — s. den Nachtrag zu Rn. 156–273 unten)* |
| **154** | Was zur „Werbeaussendung" zählte (Anschreiben, „Vertragszusammenfassung", Widerrufsbelehrung, Auftragsformular); auf das **rückzusendende** Formular kommt es nicht an, „weil das Auftragsformular bestimmungsgemäß nicht bei dem Verbraucher **verblieben** soll und deshalb nicht geeignet ist, ihm Informationen **dauerhaft** zur Verfügung zu stellen" *(Schreibweise „verblieben" wie im Original; die Erstfassung dieses Kastens hatte still „verbleiben" daraus gemacht — vom eigenen Zitat-Abgleich gefangen, 29/30)* | ⭐ **Bestand ergänzt (kleiner, aber betriebsrelevanter Satz):** Pflichtangaben auf einem Rückantwort-Element zählen **nicht**. Für unsere Briefgestaltung: Was rechtlich zählen soll, gehört auf das Blatt, **das beim Empfänger bleibt** |
| **155** | Auf den Inhalt der „Vertragszusammenfassung" kommt es für die TKG-Informationspflicht nicht an | **keine** — Fortsetzung von 154 im TKG-Kontext |

**Nenner:** 14 von 14 gelesen und ausgewiesen — **8 ändern den Bestand**
(123, 126, 138, 140, 149, 151, 152, 154), **6 ändern ihn nicht**
(121, 122, 139, 150, 153, 155), je mit Grund. Summenprobe 8 + 6 = 14.
⚠️ **Die Summenprobe belegt nur die Vollzähligkeit, nicht die
Richtigkeit der Einstufung** — die Einstufungs-Achse ist einzeln
nachzulesen, jede Zeile trägt ihren Grund. Abdeckung Block 79–155 nach
diesem Nachtrag: **77 / 77**.

### 🔴 Nachtrag 17.08.2026 (R17-A), aus Rn. 156–273: Es gibt eine DRITTE Unlauterkeits-Schiene — und sie ist die einzige, deren Tatbestand B2B ausdrücklich einschließt

Der Urteilsblock ab Rn. 156 war im ganzen Bestand nie gelesen. Er trägt
einen Befund, der die bisherige Darstellung „Doppelbegründung § 3a UWG
**und** § 3 Abs. 2 UWG" **erweitert**: Für den **Art.-14-Verstoß**
(Klageantrag IV) stützt das Gericht die Unlauterkeit auf einen dritten,
eigenständigen Weg — **§ 5a Abs. 1 in Verbindung mit § 5b Abs. 4 UWG**
(Vorenthalten wesentlicher Informationen), Rn. 221–234.

| Baustein | Fundstelle | Wortlaut / Inhalt (① A) |
|---|---|---|
| Die Schiene selbst | **Rn. 221** | „In dem mit Antrag IV angegriffenen Verhalten … liegt **zugleich ein Verstoß gegen das lauterkeitsrechtliche Vorenthaltungsverbot**, weshalb das Verhalten gemäß §§ 5a Abs. 1, 5b Abs. 4 UWG in Verbindung mit den gerade genannten Vorschriften der DSGVO unlauter ist." |
| Der Tatbestand | **Rn. 223** | „Nach § 5a Abs. 1 UWG handelt unlauter, wer **einen Verbraucher oder sonstigen Marktteilnehmer** irreführt, indem er ihm eine wesentliche Information vorenthält …" |
| Warum DSGVO-Informationen „kommerzielle Kommunikation" sind | **Rn. 225** | Die Art.-14-Pflichten sind „spätestens mit dem Versand des Werbebriefs zu erfüllen, mithin **im Rahmen der auf die Förderung ihres Produktabsatzes gerichteten** gewerblichen Tätigkeit der Beklagten. Damit fallen sie unter den Begriff der kommerziellen Kommunikation." |
| Dass die DSGVO nicht in Anhang II UGPRL steht, schadet nicht | **Rn. 227**, i. V. m. **166** | Die Liste ist „ausdrücklich nicht erschöpfend" |
| ⚠️ **Die Grenze der Vermutungsregel** | **Rn. 243** | § 5b Abs. 4 UWG „gilt … **nur für Informationen, die im Rahmen der auf die Förderung des Produktabsatzes gerichteten gewerblichen Tätigkeit — also vor Abgabe der Vertragserklärung des Verbrauchers — zu erteilen sind**" |
| Und was gilt, wenn sie nicht greift | **Rn. 244** | „Die Wesentlichkeit der Informationen ergibt sich jedoch aus den **allgemeinen, zu § 5a Abs. 1 entwickelten Grundsätzen**" |
| ⭐ **Beweislast** | **Rn. 176** (für Antrag II, in Rn. 234 auf Antrag IV übertragen) | Die Merkmale des § 5a Abs. 1 Nr. 1 und 2 UWG „sind **im Regelfall erfüllt**, wenn dem Verbraucher wesentliche Informationen vorenthalten werden, und **es obliegt dem Unternehmer aufzuzeigen**, dass der Informationserfolg bereits auf anderem Wege erreicht worden ist oder sonst ein Ausnahmefall vorliegt" — in Rn. 234: „Die Beklagte hat … **keine Umstände aufgezeigt**" |

**Warum das für uns anders liegt als die beiden bekannten Schienen.**
Der Bestand führt (zu Recht) als Entlastungslinie, dass § 3 Abs. 2 UWG
tatbestandlich an Verbraucher gebunden ist („die sich an Verbraucher
richten oder diese erreichen", Rn. 148) und dass der
Durchschnittsverbraucher-Maßstab dort durchgängig gilt (Rn. 149).
**§ 5a Abs. 1 UWG trägt diese Grenze nicht:** Sein Tatbestand nennt
„einen Verbraucher **oder sonstigen Marktteilnehmer**". Dieselbe
Feststellung steht bereits an anderer Stelle in unserem Bestand —
`akquise/interessenabwaegung-o8.md` § 6.2 hält fest, die in Rn. 88
genannten Normen „§§ 5 Abs. 1 und Abs. 2, 5a Abs. 1 bis Abs. 3 UWG"
seien „nicht auf Verbraucher beschränkt" — **dort aber im Kontext der
Aufmachung/Irreführung, nicht als eigene Anspruchsschiene für den
Informationsverstoß.**

⚠️ **Was hier ausdrücklich NICHT entschieden wird.** Dass § 5a Abs. 1
UWG „sonstige Marktteilnehmer" nennt, heißt **nicht**, dass unsere
Konstellation darunter fällt: Die **Vermutungsregel** des § 5b Abs. 4
UWG spricht von „dem Verbraucher" (Rn. 223 a. E.), und ob die
Art.-14-Information gegenüber einem **gewerblichen** Empfänger eine
„wesentliche Information" nach den allgemeinen Grundsätzen (Rn. 244)
ist, sagt keine der gelesenen Stellen. **Das ist eine Rechtsfrage —
Frage an den Anwalt, s. `handel/anwalts-briefing-2026-08.md`
Frage 3, Teilfrage 1c** (neu in dieser Runde ergänzt).

**Vier weitere Feststellungen aus demselben Block, ohne Bewertung:**

- **Rn. 249 — Wiederholungsgefahr:** „Ein unzulässiges Verhalten
  begründet eine tatsächliche **Vermutung für die Wiederholung
  identischer und kerngleicher Verstöße**." Betriebsfolge: Ein
  einzelner Fehlversand begründet die Vermutung für die ganze Welle;
  widerlegbar praktisch nur über eine strafbewehrte
  Unterlassungserklärung.
- **Rn. 250 — Zurechnung:** Haftung auch für Personen, „deren Verhalten
  … gemäß § 8 Abs. 2 UWG einen Unterlassungsanspruch auch gegen die
  Beklagte begründet". Betriebsfolge: **Beauftragte** (Lettershop,
  Versanddienstleister, Freelancer) fallen darunter. → Die
  AVV-/Dienstleisterfrage ist damit **auch** eine
  Lauterkeitsrechts-Frage, nicht nur eine DSGVO-Frage.
- **Rn. 251–262 — der Kläger ist mit Antrag VI unterlegen** (Muster-
  Widerrufsformular auf derselben Seite wie die Widerrufsbelehrung ist
  zulässig). Die Kostenentscheidung beruht folgerichtig auf § 92
  Abs. 1 S. 1 ZPO (Rn. 271). ⚠️ **Für unsere Zitierpraxis:** Das Urteil
  ist **keine Vollstattgabe**; wer es als „das Landgericht hat der
  Klage stattgegeben" zitiert, zitiert zu weit.
- **Rn. 266/267 — Abmahnkosten:** Anwaltskosten sind für Verbände
  „grundsätzlich nicht erforderlich"; hier bejaht als **Ausnahmefall**,
  weil die Fragen „für einen mit der wettbewerbsrechtlichen
  Durchsetzung von Verbraucherschutzrecht befassten Juristen
  **überdurchschnittlich schwierig**" waren. → Ergänzt B2/B3, dort als
  Kostenposten geführt.

*(Vollständige Auswertung Rn. 156–273 mit Wirkung je Abschnitt:
`protokolle/R17-A-abschluss.md`, Abschnitt „Leseraum Rn. 156–273".)*

## B2 · Der Kostenausschluss hilft uns nicht

**§ 13 Abs. 4 UWG** schließt den Aufwendungsersatz nur aus bei (Nr. 1) Verstößen gegen **Informations- und Kennzeichnungspflichten** im elektronischen Geschäftsverkehr und (Nr. 2) **DSGVO-/BDSG-Verstößen** bei unter 250 Mitarbeitern (① A).

**Ein § 7-Verstoß ist keins von beidem.** § 7 Abs. 2 Nr. 2 UWG ist ein **Belästigungsverbot**, keine Informations- oder Kennzeichnungspflicht; und ein UWG-Verstoß ist kein DSGVO-Verstoß. Hinzu kommt: Der Ausschluss gilt ohnehin nur gegenüber **Mitbewerbern** (§ 8 Abs. 3 Nr. 1) — **Wirtschaftsverbände können Aufwendungsersatz immer verlangen.**

**Und § 13a Abs. 2 UWG (Vertragsstrafen-Ausschluss bei Erstabmahnung, unter 100 Mitarbeitern) hängt tatbestandlich an „Verstößen nach § 13 Absatz 4"** (① A, selbst geprüft) — greift bei § 7 also ebenfalls **nicht**.

> ⚠️ Die verbreitete Vorstellung, das Abmahnmissbrauchs-Gesetz von 2020 schütze kleine Unternehmen hier, ist für unseren Fall **falsch**. Wir tragen die Abmahnkosten.

**⭐ Was uns dagegen wirklich hilft: § 13a Abs. 3 UWG** — der Deckel von 1.000 € für Vertragsstrafen bei nur unerheblicher Beeinträchtigung und unter 100 Mitarbeitern. Er ist **nicht** an § 13 Abs. 4 gekoppelt und **nicht** auf Mitbewerber beschränkt (① A). Bei einer einzelnen Werbe-Mail ist „unerheblich" gut vertretbar. Dazu § 13a Abs. 4 (unangemessen hohe Vertragsstrafe wird auf das angemessene Maß reduziert) und Abs. 5 (der Abgemahnte kann die Einigungsstelle **einseitig** anrufen; danach erhobene Klage ist unzulässig).

**Unsere Gegenwaffe ist § 13 Abs. 5 UWG:** Ist die Abmahnung unberechtigt **oder entspricht sie nicht den fünf Pflichtangaben des § 13 Abs. 2**, haben wir einen Anspruch auf Ersatz unserer Rechtsverteidigungskosten. **→ Jede eingehende Abmahnung zuerst gegen § 13 Abs. 2 prüfen.**

## B3 · Was es kostet

**Streitwert-Arbeitsannahme: 3.500 – 6.000 € je Verstoß** gegenüber einem gewerblichen Empfänger; Randwerte 1.000 € (einmaliger Irrläufer, OLG Hamm, Urt. v. 09.12.2014 – I-9 U 73/14) bis 6.000 € (BGH I ZR 218/07). ⚠️ **Einen Regelstreitwert gibt es nicht** — der BGH hält seine Festsetzung sogar für unvereinbar mit § 3 ZPO und § 51 Abs. 2 GKG (Beschl. v. 22.01.2015 – I ZR 95/14, ② B).

| Gegenstandswert | 1,3-Geschäftsgebühr | + Auslagen | netto | **brutto (19 %)** |
|---|---|---|---|---|
| 3.500 € | 383,50 | 20,00 | 403,50 | **480,17 €** |
| 5.000 € | 460,85 | 20,00 | 480,85 | **572,21 €** |
| 6.000 € | 538,20 | 20,00 | 558,20 | **664,26 €** |
| 10.000 € | 847,60 | 20,00 | 867,60 | **1.032,44 €** |

*Rechenweg: Anlage 2 zu § 13 RVG → Nr. 2300 VV RVG (1,3) → Nr. 7002 VV RVG (20 €) → Nr. 7008 VV RVG. Die Tabelle wurde vom Agenten gegen die Berechnungsformel des § 13 Abs. 1 S. 2 RVG nachgerechnet (5/5 Stichwerte identisch) und stimmt mit der Rechnung eines Urteils überein (AG Düsseldorf, Urt. v. 30.04.2026 – 38 C 135/25: 3.500 € → 383,50 € + 20,00 €).*

⚠️ **Ein vorsteuerabzugsberechtigter Abmahner kann die Umsatzsteuer nicht liquidieren** — dann gilt die Netto-Spalte. Bei einer Abmahnung, die sie trotzdem fordert, ist das ein Prüfpunkt.

**Realistischer Erwartungswert für den ersten E-Mail-Verstoß bei sofortiger modifizierter Unterlassungserklärung: 500 – 1.700 €** (Abmahnkosten + eigene Prüfung). Der Sprung kommt nicht beim ersten Verstoß, sondern (a) wenn wir eine unmodifizierte Unterlassungserklärung mit 5.100-€-Klausel unterschreiben und danach **ein einziger** Altkontakt erneut angeschrieben wird, oder (b) bei einer **Massenaussendung** — dann multipliziert sich die Abmahnstufe über viele Betroffene, und § 8c Abs. 2 Nr. 6 UWG schützt nur gegen denselben Abmahner, nicht gegen viele verschiedene.

## B4 · Bußgeld

| Kanal | § 20 UWG | Grund |
|---|---|---|
| Telefon **an Verbraucher** | bis **300.000 €** | § 20 Abs. 1 Nr. 1, Abs. 2 |
| Verstoß gegen die Dokumentationspflicht des § 7a UWG | bis **50.000 €** | § 20 Abs. 1 Nr. 2 |
| **Telefon an Unternehmer (B2B)** | **kein Bußgeld** | Nr. 1 verlangt „gegenüber einem Verbraucher" |
| **E-Mail / Fax** | **kein Bußgeld** | Tathandlung ist auf Telefonanruf und Anrufmaschine begrenzt |

Zuständig ist in beiden bußgeldbewehrten Fällen die **Bundesnetzagentur** (§ 20 Abs. 3 UWG, ① A).

**Der DSGVO-Kanal steht dagegen offen:** Verstöße gegen Art. 5, 6, 7 (Grundsätze, Rechtsgrundlage, Einwilligung) und gegen die Betroffenenrechte der Art. 12–22 — darunter das Werbewiderspruchsrecht des Art. 21 — fallen in den **oberen** Bußgeldrahmen des Art. 83 Abs. 5 DSGVO: bis 20 Mio. € oder 4 % des weltweiten Jahresumsatzes (① A). Aufsicht ist die Behörde am Sitz des Verantwortlichen (§ 40 BDSG, ① A): für Schleswig-Holstein das **ULD** in Kiel, für Hamburg der **Hamburgische Beauftragte für Datenschutz und Informationsfreiheit**.

---

# Teil C — Die DSGVO-Achse: Was mit den Daten selbst passiert

Diese Achse läuft **unabhängig** vom UWG. Ein lauterkeitsrechtlich zulässiger Kanal kann datenschutzrechtlich gesperrt sein — und umgekehrt heilt eine saubere DSGVO-Grundlage keinen unzulässigen Kanal.

## C1 · Sind Hotel-Firmendaten überhaupt personenbezogen?

**ErwG 14 Satz 2 DSGVO** (① A, selbst im amtlichen Volltext gelesen): „Diese Verordnung gilt nicht für die Verarbeitung personenbezogener Daten juristischer Personen und insbesondere als juristische Person gegründeter Unternehmen, **einschließlich Name, Rechtsform oder Kontaktdaten der juristischen Person**."

| Fall | Beispiel | DSGVO? |
|---|---|---|
| **(a)** Kapitalgesellschaft, keine Person genannt | „Hotel Seeblick GmbH … info@hotel-seeblick.de" | **nein** — für diese Felder |
| **(b)** Einzelunternehmen / Personengesellschaft | „Hotel Seeblick, Inh. Maria Berger e.K." · GbR · OHG · KG | **ja, vollständig** — die Firma *ist* die Person |
| **(c)** Benannte natürliche Person | „Frau Berger, Direktorin, m.berger@…" | **ja** |

**Funktionsadressen** (`info@`, `reservierung@`) sind im Regelfall nicht personenbezogen; `vorname.nachname@` ist es.

> ⭐ **Der Punkt, der Fall (a) in der Praxis fast immer auflöst:** § 5 Abs. 1 Nr. 1 DDG verlangt im Impressum „bei juristischen Personen zusätzlich die Rechtsform, **den Vertretungsberechtigten**" (① A). **Jedes pflichtgemäße Impressum einer Hotel-GmbH nennt namentlich den Geschäftsführer.** Sobald die Liste aus Websites gespeist wird, enthält sie praktisch immer ein personenbezogenes Datum. Ein reiner Fall (a) besteht nur, wenn die Liste strikt auf Firmenname, Anschrift, Zentralrufnummer und Funktionspostfach beschränkt bleibt und **keinen Personennamen mitführt**.

Zwei unabhängige Recherchewege kamen zum selben Befund: Bei **inhabergeführten Häusern — dem typischen Zuschnitt unserer Zielgruppe** — sind die Daten regelmäßig personenbezogen. **Das ist ein Zuschnittsproblem der Liste selbst, nicht erst ihrer Nutzung.**

⚠️ **Kein Umkehrschluss:** „Kein Personenbezug" ist keine Freigabe des Kanals. Art. 13 Abs. 5 der ePrivacy-Richtlinie verlangt, dass auch „die berechtigten Interessen **anderer Teilnehmer als natürlicher Personen** … ausreichend geschützt werden" — in Deutschland umgesetzt über § 7 UWG, der „Marktteilnehmer" schützt.

## C2 · Rechtsgrundlage der Liste: Art. 6 Abs. 1 lit. f DSGVO

Die anderen Erlaubnistatbestände scheiden aus — insbesondere lit. b, weil „vorvertragliche Maßnahmen" nach dem Wortlaut „**auf Anfrage der betroffenen Person**" erfolgen müssen; bei Kaltakquise geht die Anfrage von uns aus (① A).

**Drei kumulative Voraussetzungen** (EuGH, Urt. v. 04.10.2024 – C-621/22, Rn. 37, ② A): berechtigtes Interesse · Erforderlichkeit · Abwägung.

- **Stufe 1 trägt:** Kommerzielle Interessen taugen; der EuGH führt ErwG 47 an, der „die Zwecke der Direktwerbung im Allgemeinen als Beispiel für berechtigte Interessen anführt". **Die Grenze ist die Rechtmäßigkeit** — das geltend gemachte Interesse muss „rechtmäßig" sein (Rn. 40 und Tenor).
- **Stufe 2 ist die scharfe:** Zu prüfen ist, ob das Ziel nicht „in zumutbarer Weise ebenso wirksam mit anderen Mitteln erreicht werden kann, die weniger stark eingreifen", gemeinsam mit der **Datenminimierung** (Art. 5 Abs. 1 lit. c). **Jedes Datenfeld über die Kontaktzeile hinaus muss diese Prüfung einzeln bestehen.** Anreicherung (Umsatz, Zimmerzahl, mehrere Mitarbeiternamen, Social-Profile) fällt hier zuerst.
- **Stufe 3 ist offen, mit Argumenten auf beiden Seiten.** *Dafür:* rein berufliche Sphäre, geringe Eingriffstiefe, kein Profiling; die Aufsicht behandelt B2B-Ansprache nicht als pauschal unzulässig. *Dagegen:* ErwG 47 Satz 2 verlangt für das Regelbeispiel eine „maßgebliche und angemessene Beziehung" (Kunde/Beschäftigter) — die beim Kaltkontakt **fehlt**; der EuGH wertet dieses Fehlen ausdrücklich als Negativfaktor (C-621/22 Rn. 56).

> ⚠️ **Eine Asymmetrie, die man kennen muss:** Nach Auffassung der Datenschutzkonferenz können die Erwartungen der Betroffenen „**nicht durch die … Pflichtinformationen (Art. 13, 14 DS-GVO) erweitert werden**"; die Schlechterfüllung beeinflusst die Abwägung negativ, die **ordnungsgemäße Erfüllung hat keine Auswirkung**. **Wer meint, sich mit einem guten Datenschutzhinweis freizukaufen, irrt.**

## C3 · ⛔ Der Befund, der unsere geplante Adressquelle direkt trifft

**Datenschutzkonferenz, Orientierungshilfe zur Direktwerbung, Stand Februar 2022, Ziff. 4.2 „Keine Verwendung der Daten aus dem Impressum"** (② A, vom Agenten im Volltext gelesen):

> „**Nicht zulässig ist hingegen das Auslesen der Daten aus einem Online-Impressum zum Zweck der werblichen Nutzung.** Zwar sind diese Daten allgemein zugänglich, sie werden jedoch **nicht freiwillig, sondern aufgrund der gesetzlichen Verpflichtung** zur Anbieterkennzeichnung … veröffentlicht. **Mangels Freiwilligkeit der Veröffentlichung führt die Interessenabwägung … regelmäßig dazu, dass die werbliche Nutzung so erhobener Daten unzulässig ist.**"

Das trifft die naheliegendste Quelle für eine Hotel-Zielkundenliste frontal — und zwar **kanalunabhängig**, also auch für den Brief.

**STREITIG:** In der Literatur wird vertreten, die Pflichtangabe betreffe nur den Veröffentlichungs*grund*, nicht die Zweckbindung beim Empfänger. ⚠️ Diese Gegenposition wurde **nicht an einer Primärquelle verifiziert**. Für uns zählt: **Die Aufsichtsbehörden teilen sie nicht — und sie sind es, die prüfen.**

**Konsequenz für den Listenbau:**

| Quelle | Bewertung |
|---|---|
| **Impressum einer Hotelwebsite** | ⛔ nach Aufsichtsauffassung für Werbezwecke gesperrt *(Betriebsfolge: D3-Entscheid 2, Weg b — Nutzung mit dokumentiertem Restrisiko, s. D3-Kasten)* |
| Freiwillige Kontakt-/Partnerseite, Branchen- und Verbandsverzeichnisse | ✅ deutlich tragfähiger — Achse 3 (Nutzungsbedingungen) separat prüfen |
| **IHK-Designkontor-Anbieterliste** | ⛔ trägt ausdrücklich „Die Daten dürfen nicht zu Werbezwecken genutzt werden" (Befund R05-A) |
| Anreicherung, Werbescores aus externen Quellen | ⛔ scheitert an der Erforderlichkeit; die Aufsicht sieht darin „in der Regel" ein Überwiegen der Betroffeneninteressen |

**Und die Kopplung schließt den Kreis:** Ist der Kanal nach § 7 UWG gesperrt, fehlt es nach Auffassung der Datenschutzkonferenz „**bereits an einem berechtigten Interesse**". Der EDSA formuliert es in den Leitlinien 1/2024 (Konsultationsfassung v. 08.10.2024) gleichsinnig: „**Article 6(1)(f) GDPR may not be relied on if the direct marketing at issue is unlawful.**"

> **Merksatz: Rechtswidrige Werbung ist kein berechtigtes Interesse. Die UWG-Prüfung steht VOR der Abwägung, nicht daneben.**

## C4 · Die Informationspflicht nach Art. 14 — der am häufigsten übersehene Punkt

Weil wir die Daten **nicht bei der betroffenen Person** erheben, gilt Art. 14 — mit **13 Pflichtangaben** (Abs. 1 lit. a–f, Abs. 2 lit. a–g).

**Die Fristen** (Art. 14 Abs. 3, ① A): „innerhalb einer angemessenen Frist nach Erlangung der personenbezogenen Daten, **längstens jedoch innerhalb eines Monats**" (lit. a) bzw. „**spätestens zum Zeitpunkt der ersten Mitteilung**" (lit. b). **Es gilt, was zuerst eintritt.**

> ⚠️ **Die Falle, die fast jeder übersieht: Die Monatsfrist läuft ab LISTENAUFBAU, nicht ab Kontaktaufnahme.** Eine im August gebaute Liste, die erst im Oktober angeschrieben wird, ist **bereits im September rechtswidrig**. Wer Listen auf Vorrat baut, hat eine tickende Frist im Bestand. Konsequenz: entweder zeitnah kontaktieren **oder** unmittelbar nach dem Listenaufbau separat informieren.

**Es gibt keinen Ausweg über Art. 14 Abs. 5:** lit. a scheidet aus (der Hotelier weiß nichts von der Liste), lit. b („unmöglich oder unverhältnismäßiger Aufwand") gerade nicht — weil ohnehin ein Anschreiben erfolgt und die Information ihm beigefügt werden kann; lit. c und d liegen nicht vor.

**Was ins Anschreiben gehört** (Mindestumfang, Rest über eine verlinkte, eigene Seite „Datenschutzinformation für Geschäftskontakte" — **nicht** die allgemeine Website-Datenschutzerklärung):
- Verantwortlicher mit **ladungsfähiger Anschrift und E-Mail** (Kurzbezeichnungen und Postfachanschriften genügen nach Aufsichtsauffassung nicht)
- Zweck **und Rechtsgrundlage** (Art. 6 Abs. 1 lit. f)
- **das konkret verfolgte berechtigte Interesse, ausformuliert** — nicht „Marketingzwecke"
- **die Datenquelle** (Art. 14 Abs. 2 lit. f) — „Ihre öffentlich zugängliche Unternehmenswebsite", „Mitgliederverzeichnis des Verbands X"
- **Empfänger oder Kategorien von Empfängern** (Art. 14 Abs. 1 lit. e — bei uns: Druck-/Lettershop und CRM, konkret zu benennen, sobald O-6 entschieden ist) *(ergänzt 13.08.2026, R14-B — s. Nachtrag unten)*
- Speicherdauer oder deren Kriterien · Betroffenenrechte · **Beschwerderecht bei einer Aufsichtsbehörde**

> ⭐ **Nachtrag 13.08.2026 (R14-B), Befund R9A-N-9 — hier fehlte eine
> Pflichtangabe.** Bis zu diesem Nachtrag nannte die Aufzählung sieben
> Punkte und ließ die **Empfänger-Angabe** aus, obwohl das eigene
> Vorhaben sie auslöst: Druck-/Lettershop und CRM sind Empfänger
> i. S. d. Art. 4 Nr. 9 DSGVO. Die Lücke wurde in der Abwägungsarbeit
> gefunden (Prüferbefund Q-05 der Runde R9) und ist im O-8-Dokument
> bereits geschlossen; **die Formulierung oben ist von dort übernommen**,
> nicht neu erfunden (Quelle: `akquise/interessenabwaegung-o8.md`
> § „Was" zur Art.-14-Pflicht; Herkunft des Befundes:
> `protokolle/R09-A-abschluss.md` Block 3, dort N-9). ⚠️ **Diese
> Aufzählung bleibt der Mindestumfang IM BRIEF** — sie ist nicht die
> volle Art.-14-Pflicht (13 Angaben, s. Absatz oben); der Rest gehört
> auf die eigene Seite „Datenschutzinformation für Geschäftskontakte".
>
> ⚠️ **Vorrangklausel (eingezogen 13.08.2026 nach Prüferbefund PB-14 —
> die Aufzählung steht jetzt in ZWEI Dateien).** Dieselbe achtteilige
> Liste steht in `akquise/interessenabwaegung-o8.md` (dort im
> Art.-14-Abschnitt). Ein Wächter deckt sie nicht ab: `pruefe-zitate.js`
> führt weder das O-8-Dokument noch diese Aufzählung als Blockzitat.
> Die Doku-Hygiene lässt eine Dublette über Dateigrenzen nur mit
> Wächter **oder** Vorrangklausel zu — deshalb gilt ab jetzt:
> **Bei Widerspruch zwischen dieser Aufzählung und der in
> `akquise/interessenabwaegung-o8.md` gewinnt das O-8-Dokument** (dort
> ist die Liste am Quellwortlaut der DSK-Orientierungshilfe und an
> Art. 14 entwickelt, hier steht sie als Betriebs-Kurzfassung). Wer eine
> der beiden ändert, zieht die andere im selben Zug nach.
> ⚠️ Zugleich ist der **Zirkel** aufzulösen: O-8 leitet seine Liste mit
> „Mindestumfang im Brief **nach Rechtsmatrix C4** + DSK Ziff. 2.1" ein,
> während der Kasten oben sagt, die Formulierung sei **von dort**
> übernommen. Jede Datei nennt die andere als Quelle. Die Auflösung
> gehört ins O-8-Dokument und ist als Nebenbefund gemeldet (außerhalb
> des Scopes dieser Session).

Und: Information und Werbetext sind **klar voneinander zu trennen** und die Information deutlich herauszustellen (Aufsichtsauffassung).

## C5 · Widerspruch: absolut, ohne Abwägung

**Art. 21 Abs. 3 DSGVO** (① A): „Widerspricht die betroffene Person der Verarbeitung für Zwecke der Direktwerbung, so werden die personenbezogenen Daten **nicht mehr** für diese Zwecke verarbeitet."

Der Kontrast steht im Wortlaut: Abs. 1 kennt den Vorbehalt „es sei denn, er kann zwingende schutzwürdige Gründe … nachweisen" — **in Abs. 3 fehlt jeder Vorbehalt.** Kein Ermessen, keine Abwägung, keine Begründungsmöglichkeit.

**Art. 21 Abs. 4** verlangt den Hinweis „spätestens zum Zeitpunkt der ersten Kommunikation … ausdrücklich … in einer **verständlichen und von anderen Informationen getrennten Form**". Praktisch: ein optisch abgesetzter Block mit **eigener Überschrift** („Widerspruch gegen Werbung") in **jeder** Aussendung — nicht im Fließtext, nicht nur im verlinkten Dokument.

**Der Widerspruch darf nicht zur Vollöschung führen** — sonst steht der Betrieb bei der nächsten Listenrunde wieder im Verteiler. Richtig ist eine **Werbesperrdatei**, gegen die vor jedem Versand abgeglichen wird. Sie muss formlos eingehende Widersprüche erfassen (Mail, Telefon, Anwalt), nicht nur Abmeldelink-Klicks.

## C6 · Die organisatorischen Pflichten

| Pflicht | Gilt für uns? |
|---|---|
| **Verzeichnis von Verarbeitungstätigkeiten** (Art. 30) | **ja.** Die KMU-Ausnahme des Abs. 5 greift **nicht** — sie entfällt schon, wenn „die Verarbeitung **nicht nur gelegentlich** erfolgt", und eine dauerhaft geführte Akquiseliste ist per Definition nicht gelegentlich. Die drei Rückausnahmen stehen alternativ |
| **AVV** (Art. 28) | **ja** für CRM, Newsletter-Tool, Mailversand, Hosting. ⚠️ Bei **Lead-/Anreicherungsanbietern**, die auf eigenen Datenbeständen arbeiten, ist der AVV oft der **falsche Vertragstyp** — nach Art. 28 Abs. 10 sind sie dann eigene Verantwortliche, und es geht um eine Übermittlung mit eigener Rechtsgrundlage. Vor Vertragsschluss klären |
| **Löschkonzept** (Art. 5 Abs. 1 lit. e, Abs. 2) | **ja** — eigene Frist festlegen und dokumentieren. „Wir behalten das mal" ist kein Löschkonzept |
| **Auskunftsprozess** (Art. 15, Art. 12 Abs. 3) | **ja** — Antwort binnen eines Monats, unentgeltlich; eine Fristverlängerung ist **nicht stillschweigend** möglich, sie muss innerhalb des ersten Monats mitgeteilt und begründet werden |
| **Datenschutzbeauftragter** (Art. 37 DSGVO, § 38 BDSG) | **nein**, solange unter 20 Personen ständig automatisiert verarbeiten. ⚠️ **Die Schwelle, die man unbeabsichtigt reißt:** Wer „geschäftsmäßig zum Zweck der **Übermittlung**" verarbeitet — also Adressbestände an Dritte weitergibt oder für Dritte aufbaut —, ist **unabhängig von jeder Kopfzahl** benennungspflichtig |

⚠️ **Ein Versionsfund mit Praxisfolge:** Art. 30 Abs. 5 DSGVO wurde durch die Berichtigung im ABl. L 314 v. 22.11.2016 korrigiert; die Erstveröffentlichung formulierte sprachlich das Gegenteil des Gemeinten. **Wer Art. 30 Abs. 5 aus einer nicht nachgeführten Quelle zitiert, zitiert eine sinnverkehrte Norm.**

## C7 · Achse 3: Woher die Adressen stammen dürfen

Neben UWG und DSGVO steht die Frage, ob die **Quelle** ihre Nutzung erlaubt. Drei Unterachsen:

- **Datenbankherstellerrecht (§§ 87a ff. UrhG).** Ein gepflegtes Branchen- oder Verbandsverzeichnis ist regelmäßig geschützt. ⭐ **Die rote Linie ist § 87b Abs. 1 S. 2 UrhG:** Erfasst sind Handlungen, die durch ihre kumulative Wirkung darauf hinauslaufen, die Datenbank **ganz oder in wesentlichen Teilen wiederherzustellen**. Genau das ist aber der Zweck einer Zielkundenliste — den relevanten Ausschnitt eines Verzeichnisses vollständig nachzubilden. **Der Schutz, den Einzelabfragen ohne Rekonstruktionsabsicht genießen, trägt hier nicht.** Umsortieren macht einen wesentlichen Teil nicht unwesentlich.
- **Nutzungsbedingungen.** Ohne Vertragsschluss keine AGB (§ 305 Abs. 1 BGB) — ein Scraping-Verbot in den AGB eines frei abrufbaren Verzeichnisses ohne Registrierungszwang und ohne technische Sperre läuft weitgehend leer. **Sobald aber eine Registrierung dazwischentritt**, ist der Vertrag geschlossen und das Verbot wirksam.
- **Technische Sperren.** Das Umgehen von Login, Paywall, API-Key, IP-Sperre oder CAPTCHA ist die klare rote Linie — lauterkeitsrechtlich und nach § 202a StGB.

**Betriebsregel in einem Satz:** Frei zugängliche Seiten ohne Registrierung und ohne Umgehung technischer Sperren auslesen ist vertretbar — unzulässig wird es, sobald ein Verzeichnis in seinem relevanten Ausschnitt **rekonstruiert** wird, eine **Registrierung** einen Vertrag begründet oder eine **technische Sperre** umgangen wird. Die DSGVO-Achse läuft zusätzlich und sperrt Impressumsdaten unabhängig davon *(Betriebsfolge der Impressums-Sperre seit 11.08.2026: D3-Entscheid 2, Weg b — s. D3-Kasten)*.

---

# Teil D — Was daraus für MKT-HANDEL und MKT-AKQ folgt

## D1 · Der Kanalmix, der übrig bleibt

Die Matrix schließt genau die Kanäle, die eine Zielkundenliste am schnellsten skalieren würden — und lässt die, die Aufwand pro Kontakt kosten. Das ist kein Nebenbefund, sondern **die zentrale Aussage für die Akquiseplanung**:

| Rang | Kanal | Warum |
|---|---|---|
| **1** | **Brief an die Firmenanschrift** | Einziger Kaltkanal ohne Einwilligungserfordernis; bei Kapitalgesellschaften ohne Personennamen zusätzlich außerhalb der DSGVO |
| **2** | **Persönlicher Vorkontakt → Telefon** | Messe, Empfehlung, Verbandsveranstaltung schaffen den „konkreten Grund", den § 7 Abs. 2 Nr. 1 verlangt |
| **3** | **Fremde Verteiler statt eigener** | Ein Fachartikel oder eine Anzeige im **DEHOGA-Newsletter** (über 1.400 Adressaten, Befund R05-A) erreicht dieselben Betriebe, ohne dass **wir** Empfänger anschreiben — der Verband versendet an seine eigenen Einwilligungen |
| **4** | **Eingehende Anfragen erzeugen** | Website, Sichtbarkeit, Verzeichniseinträge. Der BGH deckt genau diese Richtung ausdrücklich (A1) |
| **5** | **Newsletter mit eigener Anmeldung** | Wirkt erst mit Reichweite — als Nurture-Kanal, nicht als Akquise-Einstieg |

**Was ausscheidet:** kalte E-Mail, LinkedIn-Direktnachrichten mit Werbetext, gekaufte oder gescrapte Listen, ~~Impressumsdaten als Adressquelle~~ *(ÜBERHOLT durch D3-Entscheid 2 v. 11.08.2026, Weg b — Impressumsdaten werden mit dokumentiertem Restrisiko und Bau-Pflichten genutzt, s. D3-Kasten)*, Anreicherung und Scoring.

⚠️ **Terminbezug:** Der Zielkorridor „erster zahlender Kunde bis Mitte November 2026" muss mit diesem Kanalmix erreicht werden. **Brief und persönlicher Kontakt haben längere Vorlaufzeiten als E-Mail** — das gehört in die Kapazitätsplanung von MKT-AKQ, bevor der Zielkundenlisten-Bau startet.

## D2 · Was gebaut werden muss, bevor der erste Kontakt rausgeht

1. **Datenschutzinformation für Geschäftskontakte** — eigene, dauerhaft erreichbare Seite mit allen 13 Art.-14-Angaben. **Nicht** die Website-Datenschutzerklärung.
2. **Werbesperrdatei**, kanalübergreifend, mit definiertem Erfassungsweg für formlos eingehende Widersprüche. Abgleich vor jedem Versand.
3. **Verarbeitungsverzeichnis-Eintrag** für die Zielkundenliste inkl. begründeter Löschfrist.
4. **Dokumentierte Abwägung** nach Art. 6 Abs. 1 lit. f — je Datenfeld die Erforderlichkeit.
5. **Lead-Bogen für Messen** mit abgesetztem, unangekreuztem Einwilligungsfeld, Widerrufshinweis und Datenschutzhinweis zum Mitnehmen.
6. **Quellenprotokoll je Adresse** — aus welcher Quelle sie stammt (Art. 14 Abs. 2 lit. f verlangt die Angabe) und ob deren Nutzungsbedingungen Werbung erlauben.

## D3 · Entscheidungen, die der User treffen muss

Diese Punkte haben Außenwirkung und werden nicht von der Session festgelegt (CLAUDE.md: Festlegungen mit Außenwirkung nie im Alleingang):

1. **Verfallsfrist für die Bestandskundeneigenschaft** — Vorschlag: **24 Monate** nach letztem Vertragsschluss. Es gibt keine gesetzliche Frist; eine selbst gesetzte, dokumentierte Frist ist die belastbare Lösung und erfüllt zugleich die Löschfrist-Anforderung.
   > ✅ **ENTSCHIEDEN (Nachtrag 11.08.2026): 24 Monate** nach letztem
   > Vertragsschluss — zugleich die dokumentierte Löschfrist fürs
   > Verarbeitungsverzeichnis (D2 Punkt 3). Quelle: User-Entscheid
   > 11.08.2026, strukturierte Abfrage (AskUserQuestion) im
   > R8-Tagesstart der Leitsession; Erhebungsform im Tagesplan
   > `protokolle/tagesplan-2026-08-11.md` dokumentiert. Wirksam ab dem
   > ersten Kunden; der Erhebungs-Hinweis nach § 7 Abs. 3 Nr. 4 UWG
   > gehört ab sofort in jedes Bestell-/Vertragsformular (A5).
   >
   > ⚠️ *Geltungsvermerk nachgeschärft (11.08.2026 nachmittags, Befund
   > R08-A/N-6 — Vorfassung oben bleibt sichtbar): Der Satz „zugleich
   > die dokumentierte Löschfrist fürs Verarbeitungsverzeichnis" gilt
   > NUR für die BESTANDSKUNDEN-Schiene (§ 7 Abs. 3 UWG). Die
   > Löschfrist der KALT-Zielkundenliste ist ein eigener Posten des
   > VVT-Eintrags (D2 Punkt 3, Maßstab Art. 5 Abs. 1 lit. e DSGVO) und
   > wird im Listenbau-Regelwerk begründet — die 24 Monate dürfen
   > nicht als pauschale Kaltkontakt-Aufbewahrungsfrist gelesen
   > werden.*
2. **Umgang mit der Impressums-Sperre.** Die Aufsichtsauffassung schließt die naheliegendste Adressquelle. Drei Wege: (a) konservativ — nur freiwillig veröffentlichte Kontaktseiten und Verzeichnisse nutzen; (b) Risiko bewusst tragen und dokumentieren; (c) anwaltlich klären lassen. **Empfehlung: (a)**, weil der Aufwandsunterschied gering und das Risiko real ist.
   > ✅ **ENTSCHIEDEN (Nachtrag 11.08.2026): Weg (b) — Risiko bewusst
   > tragen und dokumentieren.** Der User hat sich GEGEN die
   > Empfehlung (a) dieses Dokuments entschieden; die
   > Aufsichtsauffassung (DSK-Orientierungshilfe Ziff. 4.2, s. C3)
   > bleibt unverändert gegenläufig — das Restrisiko besteht fort und
   > wird getragen, nicht bestritten. Quelle: User-Entscheid
   > 11.08.2026, strukturierte Abfrage (AskUserQuestion) im
   > R8-Tagesstart, nach Klartext-Vorlage beider Optionen samt
   > Risikohinweis; Erhebungsform im Tagesplan
   > `protokolle/tagesplan-2026-08-11.md`. **Bau-Pflichten daraus für
   > den Listenbau (MKT-AKQ, nicht verhandelbar):** dokumentierte
   > Interessenabwägung nach Art. 6 Abs. 1 lit. f je Datenfeld (D2
   > Punkt 4) · Quellenprotokoll je Adresse inkl. „Impressum"-
   > Kennzeichnung (D2 Punkt 6) · Werbesperrdatei vor dem ersten
   > Versand (D2 Punkt 2) · Restrisiko-Vermerk im
   > Verarbeitungsverzeichnis-Eintrag (D2 Punkt 3). Die
   > UWG-Kanalregeln (Teil A) bleiben unberührt — der Entscheid
   > betrifft NUR die Adressquelle, nicht die Kanalwahl.
3. **Wortlaut des Einwilligungstextes** für Messe und Newsletter — er wird Kanon und danach byte-gleich verwendet.
   > ⏳ **OFFEN (Stand 11.08.2026):** steht erst beim Bau der Messe-/
   > Newsletter-Texte an; wird dem User dann als Entwurf vorgelegt.

---

# Offene Punkte und Belegstufen-Grenzen

> ⭐ **Nachtrag 12.08.2026 (R9): Sechs Befunde AUS der Abwägungsarbeit,
> die dieses Dokument betreffen** — eingetragen von der Leitsession,
> damit sie nicht nur im Abschlussprotokoll stehen (Herkunft:
> `protokolle/R09-A-abschluss.md` Block 3, dort N-9…N-14; belegt gegen
> `akquise/interessenabwaegung-o8.md`). **Träger: MKT-HANDEL, nächste
> Runde** — hier bewusst als Merker, nicht als stille Korrektur:
>
> | # | Befund an DIESEM Dokument |
> |---|---|
> | **N-9** | **C4 lässt eine Pflichtangabe aus:** Der „Mindestumfang, der zusätzlich ins Anschreiben gehört" nennt die **Empfänger-Angabe** (Art. 14 Abs. 1 lit. e) nicht — obwohl jeder Druck-/Lettershop und jedes CRM Empfänger i. S. d. Art. 4 Nr. 9 ist. Im O-8-Dokument bereits ergänzt |
> | **N-10** | **Art. 6 Abs. 4 DSGVO (Zweckänderung) fehlt vollständig** (0 Treffer bei greifender Positivkontrolle, Stand `b2cfa12~1`). Die Aufsicht verlangt die Kompatibilitätsprüfung ausdrücklich → offener Punkt **O-9** |
> | **N-11** | **Die A7-Darstellung des LG-Urteils lässt offen, dass beide Absagegründe auf Stufe 1 liegen** (Rn. 84, Rn. 88) — das Urteil liefert **keinen Abwägungstopos** |
> | **N-12** | **Die Gegenansicht fehlt:** OLG Stuttgart 2 U 63/22 und Eckhardt (ZD 2024, 399; ZD 2025, 443) sehen Briefwerbung großzügiger; das LG weicht ausdrücklich ab (Rn. 79–83). Ihr Fehlen lässt die Rechtslage **eindeutiger aussehen, als sie ist** |
> | **N-13** | **Zwei Zahlen ohne Zählweg:** „199 Treffer für Verbraucher" ist nur **case-insensitive** reproduzierbar (case-sensitiv: 187); „109 für DSGVO" ist case-sensitiv. Zählweg an die Zahl schreiben |
> | **N-14** | **Neu gegenüber Teil B:** DSGVO-Verstöße bei Werbung sind über § 3a UWG abmahnfähig — auch durch **Mitbewerber**. Teil B behandelt nur UWG-Verstöße und die BGB-Schiene (die Frage selbst steht unten als „Streitstand nicht abschließend erhoben"; neu ist der Beleg) |
>
> ⭐ **Disposition 13.08.2026 (R14-B) — der Merker ist abgearbeitet.**
> Der Kasten oben bleibt unverändert als Historie stehen; hier steht je
> Befund, was mit ihm geschehen ist:
>
> | # | Disposition | Wo |
> |---|---|---|
> | **N-9** | **eingearbeitet** — Empfänger-Angabe (Art. 14 Abs. 1 lit. e) in die Aufzählung ergänzt, Formulierung aus dem O-8-Dokument übernommen | Teil C, **C4**, mit Nachtragskasten |
> | **N-10** | **erledigt durch R13-B** — O-9 wird seit dem Nachtrag 13.08.2026 direkt unter diesem Kasten als offener Posten geführt. Hier bewusst **nicht** ein zweites Mal eingetragen (Dubletten-Grundsatz). ⚠️ **Geführt heißt weiter nicht entschieden:** O-9 ist offen, Gate ist anwaltlicher Rat vor dem ersten Datensatz | O-9-Kasten unten |
> | **N-11** | **eingearbeitet** — beide Absagegründe des LG-Urteils auf Stufe 1 (Rn. 84, Rn. 88), kein Abwägungstopos | Teil A, **A7**, Nachtragskasten |
> | **N-12** | **eingearbeitet** — Gegenansicht OLG Stuttgart 2 U 63/22 + Eckhardt ZD 2024, 399 und ZD 2025, 443; Abweichung des LG in Rn. 79–83. Eintrag ist **„streitig"**, Belegstufe ③ (Zitat zweiter Hand) ausgewiesen | Teil A, **A7**, Nachtragskasten |
> | **N-13** | **eingearbeitet** — Zählwege an beide Zahlen geschrieben, am Rohbeleg nachgemessen. ⚠️ **Präzisierung gegenüber dem Merker:** Die DSGVO-Zahl (109) ist **nicht** case-abhängig — case-sensitiv und case-insensitiv liefern denselben Wert; case-abhängig ist nur die Verbraucher-Zahl (199 / 187) | Teil A, **A7**, an beiden Zahlen |
> | **N-14** | **eingearbeitet** — eigener Unterabschnitt zur § 3a-UWG-Schiene mit Rn. 127–137; die „nicht erhoben"-Zeile am Dokumentende trägt jetzt einen Vorwärtsverweis. **Der Streitstand bleibt offen** — neu ist der Beleg, nicht die Antwort | **Teil B**, nach B1 |

> ⭐ **Nachtrag 13.08.2026 (R13-B) — O-9 wird hiermit auch in DIESEM
> Dokument als offener Posten geführt.** Bis zu diesem Nachtrag stand
> er hier nur als Befund-Merker (N-10 oben); Aussagen der Klasse „in
> der Rechtsmatrix nirgends geführt" (O-8 § 5.5/§ 11.1, Regelwerk
> § 10 O-9 — je zum Messstand `b2cfa12~1` korrekt) sind damit für den
> heutigen Stand überholt. **Geführt heißt nicht entschieden.**
>
> | Posten | Inhalt | Stand | Träger / Fälligkeit |
> |---|---|---|---|
> | **O-9** | **Kompatibilitätsprüfung nach Art. 6 Abs. 4 DSGVO** — Zweckänderung: Impressumsdaten sind zur **Anbieterkennzeichnung** veröffentlicht, nicht zu Werbezwecken; ob die Weiterverwendung zu Werbezwecken mit dem Ursprungszweck vereinbar ist, verlangt die Aufsicht ausdrücklich zu prüfen (DSK-Orientierungshilfe Ziff. 1.5 — Volltext-Zitat in `akquise/interessenabwaegung-o8.md` § 5.2, Prüfpunkt C-8; als offener Posten geführt dort in § 5.5/§ 11.1) | **OFFEN — weder entschieden noch geprüft.** Die Prüfung nimmt keine Marketing-Session selbst vor; anwaltlicher Rat ist das Gate. Solange O-9 offen ist, steht neben der Impressums-Fallgruppe (FG-4 der Abwägung) ein **zweiter** ungeklärter Rechtsgrund — das verschärft das Risikobild, es entlastet nicht (O-8 § 5.5) | **MKT-HANDEL / anwaltlicher Rat vor dem ersten Massenversand.** ⭐ Fällig **vor dem ERSTEN DATENSATZ** (Listenaufbau), nicht erst vor dem Versand — LG Düsseldorf Rn. 87, Herleitung O-8 § 9.1/§ 11.1 (Rn.-87-Verschärfung, R9) |

> 🔴 **BESTANDSVERMERK 17.08.2026 (R16-A), Befund R15A-N-4 — wo der
> Satz aus Rn. 87 im Urteil wirklich steht.** Die Fälligkeit „vor dem
> ERSTEN DATENSATZ" in der Tabellenzeile darüber ruht auf **einem
> einzigen Satz** aus Rn. 87: „Die Erfüllung dieser Verpflichtung
> erfordert letztlich **Vorkehrungen, die bereits vor dem ersten
> Verarbeitungsschritt in die Wege geleitet sein müssen**." Dieser
> Satz steht **nicht in der tragenden Absagebegründung.**
>
> - **Tragend ist Rn. 84/85:** Die lit.-f-Voraussetzungen sind „schon
>   deshalb nicht erfüllt", weil die Beklagte die Artt. 12, 14, 21
>   DSGVO verletzt hat.
> - **Rn. 86** referiert einen **Literatureinwand** (Brandt/Dienst,
>   GRUR-Prax 2025, 152: ob die Verletzung „nachgelagerter"
>   Informationspflichten die Datenverarbeitung rückwirkend
>   rechtswidrig macht) — und beantwortet ihn bereits.
> - ⚠️ **Rn. 86 verschärft die Frage zusätzlich, und das fehlte hier**
>   *(ergänzt 17.08.2026 nach Prüferbefund M-5)*: Dieselbe Randnummer
>   ordnet „die Entgegennahme der von ihr ‚angekauften' Adressen und ihr
>   Speichern für den Einsatz bei der Erstellung der Schreiben"
>   ausdrücklich dem Vorfeld zu — sie seien Schritte, „**die nicht Teil
>   des von dem Kläger angegriffenen geschäftlichen Handelns sind,
>   sondern in dessen Vorfeld stattgefunden haben**". **Das ist genau
>   unser Schritt:** der Listenaufbau, auf den wir die Fälligkeit
>   vorziehen. Das Gericht schiebt ihn aus dem Streitgegenstand heraus.
>   Wer die Belegkraft der Rn.-87-Ableitung dokumentiert, ohne das zu
>   nennen, dokumentiert die schwächere Hälfte. **Die Vorsichtsannahme
>   bleibt trotzdem in Kraft — ihre Belegkraft ist nur noch schwächer
>   als der Rest dieses Vermerks nahelegt.**
> - **Rn. 87** beginnt mit „**Unabhängig davon** erscheinen die
>   Bedenken im Ausgangspunkt allenfalls … erwägenswert" — es ist die
>   **zweite, hilfsweise Abwehr desselben Einwands**, nicht der
>   Absagegrund.
>
> **Was das ändert und was nicht:** Der Satz ist echt, richtig zitiert
> und steht in einem veröffentlichten Urteil. Aber er trägt die
> Entscheidung nicht — und **auf ihm ruht die gesamte Terminlage**
> (F-7, O-9, die Bau-Pflichten, die Sperrung des ersten Datensatzes).
> Ob er die Betriebsfolge trägt, die wir daraus abgeleitet haben, ist
> **keine Frage, die dieses Dokument beantwortet** — sie steht als
> Teilfrage 6 zu Frage 2 im Anwalts-Briefing. **Bis dahin bleibt die
> Fälligkeit „vor dem ersten Datensatz" die vorsichtigere Annahme, und
> sie bleibt in Kraft** — eine unbelegte Verschärfung kostet Zeit, eine
> unbelegte Entwarnung kostet den Fall. *(Derselbe Vermerk steht in
> `akquise/interessenabwaegung-o8.md` an der Q-04-Stelle, die die
> Fälligkeitsverschiebung herleitet.)*
>
> *(Herkunft: `projektquelle-mkt.md` § 6a, R15A-N-4; am Rohbeleg
> gegengeprüft 17.08.2026.)*

> *(Reparaturvermerk 13.08.2026, R13-B, Prüferbefund PB-1: Beim
> Einfügen des O-9-Kastens war die nachfolgende Kennzeichnungszeile der
> „nicht erhoben"-Tabelle versehentlich zerteilt worden — ihr Anfang
> gelöscht, ihr Rest an die O-9-Tabellenzeile geklebt. Die Zeile ist
> unten im Originalwortlaut wiederhergestellt.)*

Ausdrücklich als **nicht erhoben** gekennzeichnet — „nicht gefunden" ist hier nirgends als „existiert nicht" zu lesen:

| Punkt | Stand |
|---|---|
| **Rechtsprechung zu B2B-Briefwerbung** | In den frei zugänglichen amtlichen Beständen (BGH ab 2000, NRWE, gesetze-bayern.de) **kein Verbotsurteil zu B2B-Kaltpost gefunden**, Positivkontrollen greifen. ⚠️ juris und beck-online nicht durchsucht — dort liegt der Großteil der OLG-/LG-Rechtsprechung, das Negativ kann kippen |
| **BGH „Briefwerbung" (1973), BGHZ 60, 296** | Stammentscheidung zur geringen Belästigungswirkung; Volltext **nicht beschaffbar** (BGH-Datenbank führt Entscheidungen vor 2000 nicht online). Liegt nur als Zitat im Volltext von I ZR 167/09 vor |
| **Werbebrief als „Geschäftsbrief"** (§ 35a GmbHG) | **STREITIG**, keine Rechtsprechung erhoben; die Position stützt sich auf ein IHK-Merkblatt |
| **KG Berlin 5 U 7/14, LG Lüneburg 4 S 44/11** | Az. und Datum nur aus einer IHK-Seite, **nicht am Volltext verifiziert** |
| **§ 3a UWG und DSGVO-Abmahnbarkeit** | Streitstand **nicht abschließend erhoben**. *(Ergänzt 13.08.2026, R14-B: Ein BELEG liegt seit R9 vor — LG Düsseldorf 38 O 243/23 Rn. 127–137 prüft die Schiene durch und bejaht sie im dortigen B2C-Fall; s. Teil B, Nachtrag R9A-N-14. **Der Streitstand bleibt trotzdem nicht abschließend erhoben** — insbesondere die UGPRL-Grenze für B2B und die Kostenfolge sind offen.)* |
| **Änderungsgesetz der Umnummerierung** | Datum 28.05.2022 nur über Drittquellen; das BGBl-Archiv ist ein JS-Viewer und war nicht auslesbar. Die **Sachaussage** ist vierfach anders belegt (Kopf des Dokuments) |
| **Kommentarliteratur** (Köhler/Bornkamm/Feddersen, Ohly/Sosnitza, Mankowski, Büscher) | Hinter Bezahlschranken, **kein Original gelesen** — überall nur als Zitat zweiter Hand. Abweichende Auffassungen sind damit nicht ausgeschlossen |
| **juris / beck-online** | Kein Zugang. Instanzrechtsprechung ist nur stichprobenhaft erfasst |
| **LG Kleve 6 S 81/20** (Gegenposition Telefon) | Volltext nicht beschafft; Einordnung als Mindermeinung nur aus Kanzleiblogs |
| **OLG Frankfurt 6 U 33/16** (Gegenposition E-Mail) | Volltext von niemandem beschafft — **in dieser Form nicht verwertbar** |
| **LG Baden-Baden 5 O 100/11** (Visitenkarte) | Az./Datum am Register verifiziert, **Inhalt nur aus Referaten** |
| **Kontaktformulare** als (Nicht-)Einwilligung | **Kein Beleg gefunden** bei nachweislich funktionierendem Suchkanal |
| **Beweislast speziell zu § 7 Abs. 2 Nr. 1 UWG** | In keiner der geprüften höchstrichterlichen Quellen ausgesprochen; die Verteilung folgt der allgemeinen Regel |
| **Newsletter-Tracking** | Aufsichtsauffassung eindeutig, aber **keine deutsche Gerichtsentscheidung** dazu aufgefunden |
| **EDSA-Leitlinien 1/2024** | Zitiert ist die **Konsultationsfassung** v. 08.10.2024, nicht die Endfassung |
| **DPF-Angemessenheitsbeschluss** | In Kraft, aber **Rechtsmittel C-703/25 P anhängig** → Wiedervorlage |
| **OVG Saarland 2 A 355/19** | Volltext hinter JS-Gate; die Aussage steht unabhängig davon in der Orientierungshilfe selbst |

**Kanalbefunde, die andere Sessions sich sparen können:** `eur-lex.europa.eu` blockt curl **und** WebFetch (HTTP 202, leerer Body) — der Weg über `publications.europa.eu/resource/celex/<CELEX>` mit `Accept: application/xhtml+xml` und `Accept-Language: deu` liefert dieselbe amtliche Fassung. Das BGBl-Archiv und `recht.saarland.de` sind JS-Viewer ohne Nutzlast im HTML. Das TDDDG liegt weiterhin unter dem **alten** Pfad `/ttdsg/` — `/tdddg/` gibt 404.

---

*Erstellt in Runde R07-C (Session Lucky Roux), MKT-HANDEL. Prüfweg: neun Recherche-Agenten je Kanal, danach ein eigener Nachprüfdurchgang der Leit-Session mit mechanischem Fundstellenabgleich gegen 28 selbst beschaffte Normen- und Entscheidungs-Volltexte.*
