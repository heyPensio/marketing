# R15-D — Unabhängiges Prüfprotokoll

> **Prüfer:** unabhängiger Subagent mit frischem Kontext, read-only.
>
> **Eingefrorener Prüfstand:** Marketing
> `a57977a6feab20e87fa6d80aaa0802aa67b3951c`; heyPensio
> `4fa530b0d0545a7dd3b5c48559817da959e552a9`.
>
> Das relevante Marketing-Quelldokument
> `handel/preismodell-optionen.md` hatte auf dem früheren Stand
> `4b84693`, dem Prüferstand `a57977a` und dem später gemessenen Stand
> `5f9930b` denselben Blob
> `be03b803debf5fa30b2c3a689adfa1751a452f1e`.
>
> Lizenzpapier und n8n-Quellen wurden ausschließlich per
> `git show 4fa530b:<pfad>` gelesen. Fremde R43-Arbeit und fremde
> uncommittete Marketing-Arbeit blieben außerhalb des Leseraums.

---

## 1. Ergebnis der Zitat-/Präzisionsprüfung

Der Nenner 30 ist für die klar abgegrenzte Prüfachse sachgerecht:

| Kategorie | Nenner | bestätigt | abweichend |
|---|---:|---:|---:|
| direkte SUL-/EE-Lizenztext-Zitatvorkommen | 20 | 19 | 1 |
| präzise Wortlaut-, Negativ- und Fassungsbehauptungen | 10 | 9 | 1 |
| **gesamt** | **30** | **28** | **2** |

Der Nenner misst Texttreue und präzise Quellenbehauptungen, nicht die
inhaltliche Tragfähigkeit aller Auslegungen. Die 13 semantischen Klassen
in Abschnitt 2 sind eine eigene Achse.

### Abweichung 1 — § 3.4/L-1

Papier:

> `You may use or modify the software only for your own internal business purposes.`

Rohquelle:

> `You may use or modify the software only for your own internal business purposes or for non-commercial or personal use.`

Der als „Stufe A, L-1, wörtlich“ markierte Satz ist nur ein Präfix des
Originals. Er setzt nach `purposes` einen künstlichen Schlusspunkt und
lässt den Rest ohne Auslassungszeichen weg.

### Abweichung 2 — § 11/Vollständigkeitsbehauptung

§ 11 behauptet, beide L-1-Stellen trügen wieder den vollständigen
Originalwortlaut einschließlich `or for non-commercial or personal
use`. Das stimmt für § 3.2, aber nicht für § 3.4.

### Zählweg und Positivkontrollen

- Die 20 direkten Stellen wurden als **Vorkommen** gezählt; derselbe
  Quellsatz an zwei Papierstellen zählt zweimal.
- Pro Vorkommen wurden Überschrift bzw. Absatz davor und danach
  mitgelesen.
- L-1-Positivkontrolle: vollständiger Satz in § 3.2 und der Rohquelle;
  verkürzte Fassung in § 3.4.
- Negativmuster wurden nur gewertet, wenn Positivmuster im selben
  Quelltext anschlugen. Die fünf Rechtswahlmuster treffen je 0;
  `law`, `licensor`, `internal business purposes`, `free of charge` und
  `Termination` treffen mit den erwarteten Sollwerten.
- Erstfassung gegen heutige Fassung: Limitations-Wortbestand gleich;
  Schlusspunkt, Überschriftsebene und Umbruch verschieden.

Unabhängiges Ergebnis: **28/30 bestätigt, 2/30 abweichend**.

---

## 2. Dreizehn Überdehnungs-/Abweichungsklassen

| Status | Nenner |
|---|---:|
| bestätigt | **9/13** |
| teilweise bestätigt | **4/13** |
| verworfen | **0/13** |

| Schwere | Nenner |
|---|---:|
| hoch | **7/13** |
| mittel | **5/13** |
| Hinweis | **1/13** |

### 2.1 L-2 gegen `Notices` — bestätigt, hoch

L-2 erlaubt Verteilen/Bereitstellen nur kostenlos für
nichtkommerzielle Zwecke. `Notices` verlangt zusätzlich, dass ein
Empfänger einer Kopie die Bedingungen erhält. `Notices` ist keine
Erlaubnis, die L-2-Beschränkung zu überschreiben. Die Aussage, die
Klausel mache einen entgeltlichen Übergabeweg erkennbar lizenzgemäß,
überdehnt den Text.

### 2.2 Zweites `you` für den Dienstleister — bestätigt, hoch

`You` ist die Person oder Einheit, die den Bedingungen zustimmt; `Use`
ist alles, was die Lizenz erfordert. Wer für einen Kunden kopiert,
einrichtet, ändert, wartet oder weitergibt, kann selbst ein weiterer
Lizenznehmer/Nutzer sein. Kundeneigentum beseitigt diese Perspektive
nicht automatisch.

### 2.3 Eigentum als Kriterium — bestätigt, hoch

Die Quellen nennen internen Geschäftszweck, Wertschöpfung, Zugang,
Entgelt, Credentials und Weitergabe. Eigentum an der Instanz erscheint
nicht als eigenständiges Erlaubniskriterium. Das Papier fügt dieses
Kriterium selbst hinzu.

### 2.4 Zugangskriterium — bestätigt, hoch

Die FAQ nennt ausdrücklich `Hosting n8n and charging people money to
access it` sowie die Grenze, n8n Kunden zum Kontoverknüpfen und
Workflowbau bereitzustellen. Zugang ist nicht das einzige, aber ein
ausdrückliches Kriterium; „keine Zugangs-Grenze“ ist zu kategorisch.

### 2.5 Pauschales „Betreiben“ — bestätigt, hoch

Die FAQ erlaubt Consulting, Einrichten und Warten auf einem internen
Unternehmensserver. Sie belegt nicht pauschal jedes entgeltliche
„Betreiben“. Diese Ergebnisformel ist breiter als der Rohbeleg.

### 2.6 Backend/Credentials/Rollen — teilweise bestätigt, hoch

Das Credential-Kriterium ist wörtlich belegt. Nicht belegt ist die
Rollenübersetzung Gäste = `users`, Hotel = bloßer Betreiber und deshalb
A3 automatisch Example 2. Die Aussage, unter A3 stelle sich diese Frage
gar nicht, ist zu kategorisch.

### 2.7 AU-1-Zusatzregeln — bestätigt, mittel

L-1 trägt den eigenen internen Geschäftszweck. Konto-/Vertragszurechnung
und die Pflicht, die Instanz nach Vertragsende behalten zu können,
stehen dort nicht. Das können sinnvolle Gestaltungsregeln sein; sie sind
aber nicht als Quellenwortlaut belegt.

### 2.8 AU-2 als Safe Harbor — bestätigt, hoch

Die FAQ verbietet Zugangsentgelt und erfasst Produkte/Dienste, deren
Wert ganz oder wesentlich aus n8n stammt. Getrennte Benennung als
Infrastruktur- oder Dienstleistungsentgelt beseitigt diese materiellen
Kriterien nicht. Angebot, Vertrag und Rechnung sind keine belegte
Freistellung.

### 2.9 AU-4 gegen `Notices` — bestätigt, mittel

`Notices` verlangt eine Kopie `of these terms`, wenn jemand eine
Softwarekopie erhält. Daraus folgen nicht wörtlich die separate Übergabe
von `LICENSE.md` und `LICENSE_EE.md` und ein Onboarding-Protokoll. Das
sind zusätzliche Nachweis-/Vorsichtsmaßnahmen.

### 2.10 Branding-Belegteilung — teilweise bestätigt, mittel

Das Papier trennt L-3-Hinweise und FAQ-White-Labeling inzwischen
grundsätzlich. Die absolute Betriebsregel, n8n bleibe überall sichtbar,
wo der Kunde es sieht, ist jedoch breiter als L-3 allein; FAQ und OEM
tragen sie nur in ihren jeweiligen Kontexten.

### 2.11 Drei gegen vier Auflagen — bestätigt, Hinweis

§ 3.6 heißt „Die drei Auflagen“, die Einleitung spricht erneut von drei,
die Tabelle enthält AU-1 bis AU-4.

### 2.12 Fassungssatz — teilweise bestätigt, mittel

Tag 2.10.4 und Master sind byte-identisch. Der Satz „Für den Kunden gilt
keine andere Fassung“ setzt aber Kundeninstallation, Zeitpunkt und
ausgelieferte Version voraus; diese wurden nicht kundenspezifisch
gemessen.

### 2.13 EE-Folgerung — teilweise bestätigt, mittel

Die Doku belegt: Ohne Lizenzschlüssel läuft Community; bezahlte
Funktionen werden durch einen Schlüssel freigeschaltet. Sie belegt nicht
in derselben Präzision, dass sämtliche im Container vorhandenen
`.ee.`-Dateien nicht ausgeführt werden. Das ist eine technische
Folgerung, keine wortgleiche Stufe-B-Aussage.

**Keine Folgerung dazu, ob „A3 trägt“, getroffen.**

---

## 3. melevo-Gegenprüfung

### 3.1 Vollsuchraum

Rekursive Dateisuche über den gesamten `sensibel/`-Baum:

- **27/27** melevo-Dateien gefunden;
- davon 8 in `rohbelege-R05-A/a3`;
- davon 19 in `rohbelege-R11-A`;
- Positivkontrolle desselben Dateinamensuchwegs `straiv` = 49 Treffer.

### 3.2 Acht ungenutzte logische R11-A-Abzüge

Sieben HTML/TXT-Paare und der separate
`agent1-melevo-preise-matrix-token.txt` tragen jeweils 0 direkte
Referenzen im versionierten Markdown-Bestand: Start, Hotelsoftware,
Hotelwebsite, Hotelberatung, Hotel-Online-Marketing, Konzept, Impressum
und Matrix-Token. Ergebnis: **8/8 ohne direkten Quellenverweis**.

Grenze: Das bestätigt fehlende direkte Nutzung/Traceability. Eine
unmarkierte Paraphrase kann eine reine Dateinamensuche nicht sicher
ausschließen.

### 3.3 10-€-Posten

In Alt- und Neu-Textabzug steht jeweils der Matrixkontext:

> `Cookie-Banner / 10€ / 10€ / 10€ / Anfrageformular / Integration Buchungsmaschine / 10€`

Erst andere Positionen tragen Sternchen mit Fußnote `* Einmalige
Gebühr`. Für die vier unmarkierten 10-€-Vorkommen steht weder monatlich
noch einmalig. Ergebnis:

- Cookie-Banner 10 €: **von der Quelle nicht bezeichnet**;
- Integration Buchungsmaschine 10 €: **von der Quelle nicht
  bezeichnet**.

Das Fehlen eines Sternchens ist kein belastbarer Umkehrschluss.

### 3.4 Alt/Neu

R05-A- und R11-A-Preise-HTML sind byte-identisch, SHA-256 jeweils
`44335B52EA1FDF97B013BC59AFD4B10093B11119CA7050D0A9933D71D4F03CF1`.
Die TXT-Extrakte wurden unterschiedlich erzeugt und sind deshalb nicht
byte-identisch; die Matrixaussage ist in beiden vorhanden.

---

## 4. MKT-Bestandsfehler — Sichtbarkeit und Status

1. Das historische Pseudo-Zitat „als Service anzubieten“ bleibt
   sichtbar. Unmittelbar darunter steht die Korrektur, dass die Wendung
   nicht in der Lizenz steht und Commons-Clause-Vokabular ist.
2. Alte Passagen wie „Z-6 kann A3 kippen“ bleiben als Vorfassung
   lesbar, sind aber unmittelbar als überholt bzw. widerlegt markiert.

Ergebnis: **beide Bestandsfehler sichtbar und disponiert; kein still
aktiver, unmarkierter Altstand.** Keine Reparatur durch den Prüflauf.

---

## 5. Offene Prüfschritte und Grenzen

- Keine Netzgegenprüfung des vorgeschriebenen Archivs.
- Keine Messung an einer laufenden n8n-Instanz.
- Keine juristische Wirksamkeitsprüfung der Lizenz oder ihrer
  Auslegung.
- Der 30er-Nenner misst Texttreue, nicht die 13 semantischen Klassen.
- Die 8/8 melevo-Abzüge sind als fehlende direkte Referenzen bestätigt;
  eine vollständige Paraphrasen-/Ähnlichkeitssuche bleibt offen.
- Die HTML-Preisseiten sind byte-identisch; dieser Befund darf nicht
  pauschal auf die unterschiedlich erzeugten TXT-Extrakte oder die
  gesamte Website übertragen werden.
- § 3.4 und die dadurch falsche §-11-Vollständigkeitsbehauptung bleiben
  im eingefrorenen heyPensio-Commit unrepariert.
