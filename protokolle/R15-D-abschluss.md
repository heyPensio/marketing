# R15-D — Abschlussmeldung (Rockstar)

> **Token-Verbrauch:** von dieser Session nicht verlässlich erhebbar;
> die drei Quellenagenten und der unabhängige Prüfer haben keine
> einheitliche Verbrauchszahl geliefert.
>
> **Auftrag:** `protokolle/tagesplan-2026-08-13.md`, Abschnitt
> „Session-Prompts R15“, Strang D — Belegketten nachprüfen.
>
> **Entscheidungsgrenze:** Diese Session entscheidet ausdrücklich
> **nicht**, ob „A3 trägt“. Sie liefert Texttreue, Quellenreichweite,
> Abweichungen und Auslegungsrisiken an die zuständigen Träger.

---

## Block 1 — Gebaut und verifiziert

### 1.1 Träger und Schreibumfang

Angelegt wurden ausschließlich:

- dieses Abschlussprotokoll;
- `protokolle/R15-D-pruefer.md`;
- der neue Postkorb-Eintrag
  `zentrale/eingang/2026-08-14-mkt-n8n-lizenz-belegkette.md`.

`handel/preismodell-optionen.md`, `fund/wettbewerbsbild.md`, der
Wahrheits-Kanal und das heyPensio-Repo wurden **nicht geändert**.
Fremde parallele Marketing-Arbeit wurde weder gestaget noch committet.

`sensibel/rohbelege-R15-D/` wurde bewusst **nicht angelegt**: Es gab
keine Neubeschaffung. Der spezifische, korrigierte Auftrag verlangt den
Abgleich gegen die bereits versionierten, gehashten Blobs aus heyPensio
`4fa530b`; eine neue unversionierte Kopie hätte die Belegstufe gesenkt.
Damit wird das allgemeine Fertig-Kriterium „Rohbelege im R15-D-Ordner“
durch die ausdrücklich speziellere Korrektur (a) erfüllt: der
Belegträger ist der eingefrorene Commit, nicht eine neue Dublette.

### 1.2 Eingefrorener Quellenstand

Vollständiger heyPensio-Prüfstand:
`4fa530b0d0545a7dd3b5c48559817da959e552a9`.

| Objekt | Blob / Umfang | SHA-256 |
|---|---|---|
| `quellen-n8n-lizenz/n8n-repo-LICENSE.md` | `f85f59b…`, 4.445 Byte | `d2f621f59aa4c10eab79b6333e59d9d3d5b53307dcfd16dbd75e40e679e84965` |
| `quellen-n8n-lizenz/LICENSE-tag-2.10.4.md` | derselbe Blob, 4.445 Byte | derselbe Hash |
| `quellen-n8n-lizenz/LICENSE-2022-03-17-erstfassung-SUL.md` | `b798f03…`, 3.628 Byte | `21bc54375cc3e2dd2c69e3c71cdab4bc89407d206f3a14c7dd4d9bc673d72ac0` |
| `quellen-n8n-lizenz/n8n-repo-LICENSE_EE.md` | `b47966a…`, 1.879 Byte | `6110c69fd3b92928328a89e863dc2c862ea449f2335c352a9c4a137a36b13040` |
| Lizenzpapier | `2c3909c…`, 86.522 Byte | `4095060d3a01f4dd124d5f0f8e495313529f8eb169e4854eb593cda5b30fbd8d` |

Die vier archivierten Doku-Lesewege wurden vollständig geprüft. Sechs
Kernmuster — Hosting, Consulting, Support/Setup/Maintenance, Backend und
Credentials, interne Nutzung sowie kommerzielles Consulting/Support —
trafen in **4 von 4** Fassungen. Das HTML enthält je zwei semantische
Treffer wegen Hydration-Duplikaten; der Nenner bleibt deshalb 4 Dateien,
nicht 5 Texttreffer.

Master und Tag `n8n@2.10.4` sind byte-identisch. Die Erstfassung trägt
denselben Wortbestand der drei Limitations, aber beim ersten Satz fehlt
der Schlusspunkt; außerdem unterscheiden sich Überschriften, Umbruch und
der heutige Scope-Vorspann. Belastbar ist daher „gleicher Wortbestand
der Limitations bis auf Satzzeichen/Format“, nicht pauschal „Text
identisch“.

### 1.3 Zitat- und Präzisionsprüfung: **28 von 30 bestätigt**

Der Nenner umfasst:

- **20** direkte Vorkommen von SUL-/EE-Lizenztext im Papier;
- **10** präzise Wortlaut-, Negativ- oder Fassungsbehauptungen.

Ergebnis:

| Achse | bestätigt | abweichend | Nenner |
|---|---:|---:|---:|
| direkte Zitatvorkommen | 19 | 1 | 20 |
| präzise Quellenbehauptungen | 9 | 1 | 10 |
| **gesamt** | **28** | **2** | **30** |

Die beiden Abweichungen sind zwei Manifestationen derselben Ursache:

1. § 3.4 bezeichnet L-1 als „Stufe A, L-1, wörtlich“, beendet den Satz
   aber unmarkiert nach `own internal business purposes.`. Die Quelle
   fährt fort: `or for non-commercial or personal use.`
2. § 11 behauptet daraufhin, **beide** L-1-Stellen in § 3.2 und § 3.4
   trügen wieder den vollständigen Originalwortlaut. § 3.2 stimmt;
   § 3.4 nicht.

Die zwei historischen Vorkommen des ausdrücklich erfundenen
Positivkontrollsatzes `or for the internal business purposes of your
clients` sind nicht in den Nenner eingerechnet. Sie geben sich im Papier
selbst als Testmanipulation zu erkennen und sind keine Lizenzzitate.

#### Reproduzierbarer Zählweg

Das Papier wurde vollständig gelesen; zu jeder Einheit wurden
Überschrift bzw. Absatz davor und danach mitgelesen. Drei überlappende
Locator-Muster wurden anschließend manuell nach der oben festgelegten
Einschlussregel dedupliziert:

- P1 `Stufe A|L-[123]|LICENSE(?:_EE)?\.md|### (?:Limitations|Termination|Notices|No Liability)`
  → 63 Vorkommen auf 48 Zeilen; Positivanker: § 3.2/L-2.
- P2 `internal business purposes|licensing, copyright|copy of any part|provide it to others only|software comes as is|By using the software`
  → 16 Vorkommen auf 15 Zeilen; Positivanker: Acceptance-Satz in § 2.
- P3 `byte-identisch|inhaltlich unverändert|schweigt|kennt weder|enthält **keine|steht so nicht|Originalwortlaut|ersten 14 Zeilen|reiner SUL-Text`
  → 12 Vorkommen auf 10 Zeilen; Positivanker: `byte-identisch` in § 2.

Normalisiert wurden auf **beiden** Seiten Blockquote-Präfixe,
Markdown-Fettdruck, Zeilenumbrüche sowie gerade/typografische
Anführungszeichen und Apostrophe. Auslassungen galten nur mit sichtbarer
Ellipse als markiert.

Negativkontrollen:

- `governing law`, `jurisdiction`, `venue`, `choice of law`, `courts`
  je 0; Positivkontrollen `law` 2, `licensor` 9,
  `internal business purposes` 1, `free of charge` 1, `Termination` 1.
- `as a service` 0 und `als Service` 0; Positivkontrolle `service` 1,
  ausschließlich in `service marks`.
- Im eigentlichen SUL-Teil `plan`, `edition`, `Enterprise`, `Community`,
  `backend`, `back-end` je 0; Positivkontrolle
  `internal business purposes` 1.

### 1.4 Semantische Gegenprüfung: **9 von 13 bestätigt, 4 teilweise**

Diese Achse misst Auslegung und Quellenreichweite; sie wird nicht in den
30er-Texttreue-Nenner hineingerechnet. Der unabhängige Prüfer hat keinen
Kandidaten verworfen.

| Nr. | Befundklasse | Status | Schwere |
|---:|---|---|---|
| 1 | L-2 wird durch `Notices` nicht erweitert | bestätigt | hoch |
| 2 | Dienstleister kann ein zweites `you` sein | bestätigt | hoch |
| 3 | Eigentum ist kein ausdrückliches Quellenkriterium | bestätigt | hoch |
| 4 | Zugang ist ausdrücklich ein FAQ-Kriterium | bestätigt | hoch |
| 5 | pauschales entgeltliches „Betreiben“ ist breiter als die Quelle | bestätigt | hoch |
| 6 | Backend-/Credentials-Rollen sind nicht automatisch durch A3 erledigt | teilweise | hoch |
| 7 | AU-1 enthält zusätzliche Gestaltungsregeln | bestätigt | mittel |
| 8 | AU-2 ist keine von n8n formulierte Safe-Harbor-Regel | bestätigt | hoch |
| 9 | AU-4 geht über den Wortlaut von `Notices` hinaus | bestätigt | mittel |
| 10 | Branding-Belegteilung ist nur teilweise sauber | teilweise | mittel |
| 11 | Überschrift/Einleitung sagen drei, Tabelle führt vier Auflagen | bestätigt | Hinweis |
| 12 | Fassungsaussage setzt kundenspezifisch nicht gemessene Umstände voraus | teilweise | mittel |
| 13 | EE-Ausführungsfolgerung ist technische Doku-Folgerung, kein EE-Wortlaut | teilweise | mittel |

Schwere-Nenner: **7/13 hoch**, **5/13 mittel**, **1/13 Hinweis**.
Einzelbelege und Grenzen stehen im unabhängigen Prüfprotokoll sowie im
Postkorb-Eintrag. Auch daraus wird **keine** A3-Entscheidung gezogen.

### 1.5 MKT-Bestandsfehler am Rohbeleg

Der relevante Blob von `handel/preismodell-optionen.md` blieb zwischen
den untersuchten Marketing-Ständen `4b84693`, `a57977a` und `5f9930b`
identisch (`be03b803debf5fa30b2c3a689adfa1751a452f1e`).

**Pseudo-Zitat:** § 5.3 enthält historisch weiterhin die als
„wörtlich“ übernommene Wendung, die SUL verbiete n8n „als Service
anzubieten“. Im SUL-Rohtext trifft diese Wendung 0-mal. Direkt darunter
steht heute jedoch sichtbar die Korrektur **PSEUDO-ZITAT**. Auch im
heyPensio-Blueprint blieb der historische Satz stehen und wurde
unmittelbar als `ÜBERHOLT / GEPRÜFT` annotiert. O-5 ist daher nicht als
Streichung vollzogen, aber der aktuelle Lesestand ist **kein still
aktiver, unmarkierter Fehler**.

**Z-6 „falsch herum“:** Im aktuellen Marketing-Dokument stehen 21
`Z-6`-Vorkommen auf 20 Trefferzeilen in fünf Abschnittsankern (§§ 5.3,
5.4, 10, 11 und „So läuft es weiter“). Historische Sätze wie „kann A3
kippen“ sind noch lesbar, werden an den zugeordneten Stellen aber als
überholt, beantwortet oder widerlegt markiert. Die alte Angabe des
heyPensio-Papiers „8 in 4 Abschnitten“ misst den Stand vor diesen
Nachträgen. Keine Reparatur vorgenommen; Disposition bleibt bei der
Leitsession.

**R14A-N-1:** § 3.8 des Lizenzpapiers nennt im Ersatzvorschlag nur
AU-1…AU-3. § 3.6 führt tatsächlich AU-1 bis AU-4. Schon Überschrift und
Einleitung von § 3.6 sagen weiterhin „drei Auflagen“. Eine wörtliche
Übernahme des Ersatzvorschlags verliert AU-4. Zusätzlich ist AU-4 nicht
wörtlich aus `Notices` ableitbar: Die Quelle verlangt `these terms` mit
einer übergebenen Softwarekopie und die Kennzeichnung von Änderungen;
die konkrete Übergabe von `LICENSE.md` **und** `LICENSE_EE.md` samt
Onboarding-Protokoll ist eine zusätzliche Vorsichts-/Nachweisregel.

### 1.6 Meldung an heyPensio

Die Befunde wurden ausschließlich über den vorgesehenen neuen
Zentral-Postkorb gemeldet. Am fremden heyPensio-Papier wurde nichts
geändert. Der Postkorb bittet um Disposition von Q13/W10,
Auflagenzählung, Belegstufen und den neun bestätigten bzw. vier teilweise
bestätigten Auslegungsrisiken — ohne Ergebnisvorgabe zu A3.

---

## Block 2 — Offen geblieben

1. **heyPensio-Disposition:** § 3.4/Q13 und die darauf beruhende
   §-11-Vollständigkeitsbehauptung W10 sind im eingefrorenen Commit
   unrepariert.
2. **A3-Bewertung:** Die rechtliche/geschäftliche Folgerung aus den
   13 semantischen Befundklassen ist auftragsgemäß offen und gehört zur
   Leitsession bzw. rechtlichen Prüfung.
3. **Keine Netzgegenprüfung:** Geprüft wurde der vorgeschriebene,
   versionierte Archivstand. Vollständigkeit des Archivs gegenüber dem
   heutigen Netz war nicht Teil dieses Laufs.
4. **Keine Laufzeitmessung:** Nicht geprüft wurde, welcher `.ee`-Code in
   einer konkreten laufenden Kundeninstallation tatsächlich geladen
   oder ausgeführt wird.
5. **melevo-Paraphrasen:** 8/8 fehlen als direkte Quellenreferenz. Eine
   nicht markierte Paraphrase lässt sich durch Dateinamensuche allein
   nicht vollständig ausschließen.
6. **MKT-Historie:** Pseudo-Zitat und alte Z-6-Logik sind sichtbar
   korrigiert, aber als historischer Text weiter vorhanden. Ob sie
   gestrichen oder als Historie behalten werden, disponiert die
   Leitsession.

### Grenze des früheren R40-C-Prüferlaufs

R40-C hat einen 1.055-Zeilen-Stand geprüft; das heutige Papier hat 1.454
Zeilen. Die dortige Zahl von 58 Zitaten gehört zum Vor-Reparatur-Korpus.
Später hinzugekommene Teile wie Backend-Beleg 4, `Notices`/AU-4,
`No Liability` und § 11 wurden nicht noch einmal als kompletter
Endstand unabhängig geprüft. R40-C verglich Papier gegen lokales Archiv,
nicht Archiv gegen Netz. Seine Positivkontrolle belegt die Fehlerklasse
„erfundene Einfügung“, aber nicht die Vollständigkeit eines späteren
Rückbaus — genau dort liegen Q13/W10.

---

## Block 3 — Nebenbefund melevo

### 3.1 Vollsuchraum und acht ungenutzte Abzüge

Rekursive Dateinamensuche über den gesamten `marketing/sensibel/`-Baum:

- **27** Dateien mit `melevo` im Namen;
- davon **19** in `rohbelege-R11-A` = 9 HTML/TXT-Seitenpaare plus
  1 separater Matrix-Token-Text;
- davon **8** in `rohbelege-R05-A/a3` = 4 HTML/TXT-Seitenpaare;
- Positivkontrolle desselben Suchwegs `straiv` = **49** Dateien,
  darunter der bekannte AGB-Rohbeleg.

„Ungenutzt“ bedeutet hier: nicht als Quelle in einem versionierten
Marketing-Träger oder Abschluss-/Prüfprotokoll referenziert. Ein
HTML/TXT-Paar zählt logisch als ein Abzug; der Token-Text als einer.
Nachweislich verwendet sind das Preise-Paar und das AGB-Paar. Übrig:

| Nr. | logischer R11-A-Abzug | direkter Quellenverweis |
|---:|---|---:|
| 1 | `agent1-melevo-start.html/.txt` | 0 |
| 2 | `agent1-melevo-hotelsoftware.html/.txt` | 0 |
| 3 | `agent1-melevo-hotelwebsite.html/.txt` | 0 |
| 4 | `agent1-melevo-hotelberatung.html/.txt` | 0 |
| 5 | `agent1-melevo-hotel-online-marketing.html/.txt` | 0 |
| 6 | `agent1-melevo-konzept.html/.txt` | 0 |
| 7 | `agent1-melevo-impressum.html/.txt` | 0 |
| 8 | `agent1-melevo-preise-matrix-token.txt` | 0 |

Ergebnis: **8 von 8** ungenutzte logische Abzüge identifiziert. Die Zahl
folgt nicht aus `19 - 8`, sondern aus Paarbildung plus belegter
Nutzungsprüfung. Fehlende Referenz beweist nicht inhaltliche
Wertlosigkeit.

### 3.2 Sämtliche monetären Positionen

Die Steuerbasis ist bei **allen** melevo-Preisen von der Quelle nicht
angegeben. Das Muster `netto|brutto|zzgl…MwSt|inkl…MwSt|…enthalten`
trifft über alle 14 melevo-TXT-Rohbelege 0-mal; Positivkontrolle im
AngelStone-Rohbeleg: `netto` 23-mal.

| Schlüssel / Position | Betrag | Laufend/einmalig laut Quelle |
|---|---|---|
| M3 Marketing & Digitalisierung Starter / Profi / Premium | 603 / 1.150 / 2.200 € pro Monat | laufend/Monat; 12 Monate Mindestlaufzeit |
| M3 Startgebühr je Paket | 0 € | als `Startgebühr` bezeichnet; nicht zusätzlich ausdrücklich `einmalig` |
| M4 Website Starter / Profi / Premium | 95 / 145 / 275 € pro Monat | laufend/Monat; 12 Monate Mindestlaufzeit |
| M4 Website-Startgebühr | 1.495 / 2.295 / 4.195 € | ausdrücklich einmalig |
| Cookie-Banner | 10 / 10 / 10 € | **von der Quelle nicht bezeichnet** |
| Integration Buchungsmaschine | 10 € | **von der Quelle nicht bezeichnet** |
| Google Analytics Setup | 260 €* | ausdrücklich einmalig über Sternfußnote |
| neue Website-Texte | 1.050 / 1.950 / 3.250 €* | ausdrücklich einmalig |
| einmalige On-Site SEO | 650 / 950 / 1.580 €* | ausdrücklich einmalig |
| Projektberatung | ab 130 € pro Stunde | Einheit Stunde; Laufend-/Einmalig-Achse nicht bezeichnet |
| Datenschutz/AGB/Impressum; Eventmanagement; Foto/Video; Branding; Offline-Marketing; Revenue Management; Personalvermittlung; Rechtsberatung | auf Anfrage | kein numerischer Betrag, Laufend-/Einmalig-Achse nicht bezeichnet |

`€1,8k` niedrigere Lohnkosten je Mitarbeiter und Monat auf Start/Home
ist ein Werbe-/Einsparungsclaim, kein Angebotspreis. „Kostenlose
Erstberatung“ wird mangels numerischer Preisangabe nicht in eine
erfundene 0-€-Position umgerechnet.

Vollständigkeitskontrolle: Geldmuster über die 14 melevo-TXT-Dateien =
**74 Tokens**: je 24 im alten Preisauszug, neuen Preisauszug und
Matrix-Token (= 72) plus je einmal `€1,8k` in Alt-/Neu-Start (= 2).
Positivkontrolle `603€` = 3 Treffer (Alt, Neu, Token).

### 3.3 Alt/Neu-Grenze

Die Preis-HTML-Seiten vom 09.08. und 12.08. sind byte- und
SHA-256-identisch:
`44335B52EA1FDF97B013BC59AFD4B10093B11119CA7050D0A9933D71D4F03CF1`.
Alle 24 Geldtokens und ihre Kontextpositionen sind identisch. Die
Zusatzposten sind daher **nicht neu am 12.08.**; sie waren bereits am
09.08. vorhanden, wurden aber bislang nicht vollständig ausgewertet.

Hotelsoftware- und Impressum-HTML sind ebenfalls jeweils byte-identisch.
Home/Start unterscheidet sich nur in dynamischen Nonces/UUIDs und
Extraktionslayout; der sichtbare Inhalt einschließlich `€1,8k` ist
gleich. Daraus folgt **nicht**, dass die gesamte Website unverändert war.
Für Seiten, die im alten Archiv fehlen, ist nur „damals nicht erhoben“
zulässig, nicht „damals noch nicht veröffentlicht“.

---

## Block 4 — Stolpersteine und Learnings

1. **Ein 30er Texttreue-Nenner ist kein 30er Auslegungs-Nenner.** Die
   Zitate können fast vollständig stimmen und die daraus gezogenen
   Regeln dennoch den Quellenwortlaut überdehnen. Beide Achsen müssen
   getrennt berichtet werden.
2. **„Wörtlich“ braucht eine strengere Auslassungsregel.** Ein korrektes
   Satzpräfix wird durch einen künstlichen Punkt nicht zum vollständigen
   Zitat. Sichtbare Ellipsen verhindern genau diese Fehlerklasse.
3. **Eine Verfahrens-Positivkontrolle altert mit ihrem Korpus.** Der
   frühere R40-C-Test fing eine erfundene Einfügung, konnte aber eine
   spätere unvollständige Rücknahme nicht bescheinigen.
4. **`Notices` ist keine materielle Erlaubnisklausel.** Eine
   Übergabepflicht darf nicht still als Erweiterung von L-2 oder als
   Safe Harbor für ein Geschäftsmodell gelesen werden.
5. **Praktische Schutzmaßnahmen und Quellenpflichten trennen.** AU-1,
   AU-2 und Teile von AU-4 können vernünftige Vertrags-/Nachweisregeln
   sein; gerade deshalb müssen sie als zusätzliche Gestaltung statt als
   n8n-Wortlaut gekennzeichnet werden.
6. **Dateizahl ist nicht Quellenzahl.** Die 8/8 melevo-Abzüge entstehen
   erst aus HTML/TXT-Paarbildung und Nutzungsprüfung. `19 - 8` wäre ein
   falscher Nenner.
7. **Fehlendes Sternchen ist Schweigen, keine Gegenregel.** Für die
   10-€-Posten ist nur „von der Quelle nicht bezeichnet“ belegt.
8. **Alt/Neu-Aussagen brauchen den ganzen rekursiven Bestand.** Erst der
   R05-A-Abzug kippt „nicht feststellbar“ zu „am 09.08. bereits
   vorhanden“ — ohne die gesamte Website pauschal für unverändert zu
   erklären.

---

## Anhang A — 30 Prüfeinheiten

| ID | Abschnitt | Einheit | Ergebnis |
|---|---|---|---|
| Q01 | § 1 | `for your own internal business purposes` | bestätigt |
| Q02 | § 2 | Acceptance-Satz `By using the software…` | bestätigt |
| Q03 | § 3.1 | vierteilige Aufteilungsregel | bestätigt; Auslassung markiert |
| Q04 | § 3.1 | EE-Produktion nur mit gültiger Enterprise-Lizenz | bestätigt |
| Q05 | § 3.2 | Überschrift `### Limitations` | bestätigt |
| Q06 | § 3.2 | L-1 vollständig | bestätigt |
| Q07 | § 3.2 | L-2 vollständig | bestätigt |
| Q08 | § 3.2 | L-3, beide Sätze | bestätigt |
| Q09 | § 3.2 | Definition `You` | bestätigt |
| Q10 | § 3.2 | Definition `Use` | bestätigt |
| Q11 | § 3.2 | Definition `Your company` | bestätigt; Auslassung markiert |
| Q12 | § 3.2 | `Termination`, drei Sätze | bestätigt |
| Q13 | § 3.4 | als wörtlich bezeichnetes L-1 | **abweichend: unmarkiert verkürzt** |
| Q14 | § 3.4 | `licensing, copyright, or other notices` | bestätigt |
| Q15 | § 3.6 | `Notices`, beide Sätze | bestätigt |
| Q16 | § 3.6 | `a copy of any part of the software` | bestätigt |
| Q17 | § 3.8 | L-1-Teilspanne | bestätigt |
| Q18 | § 4 | L-2-Teilspanne bis `free of charge` | bestätigt; Auslassung markiert |
| Q19 | § 4 | `No Liability`-Auszug | bestätigt; Auslassung markiert |
| Q20 | § 11 | Original-L-1 in F1-Disposition | bestätigt |
| W01 | § 1 | SUL schweigt zu Community-Backend/Plan | bestätigt |
| W02 | § 2 | Tag 2.10.4 und Master byte-identisch | bestätigt |
| W03 | § 2 | Limitations inhaltlich gleich, Satzzeichen/Format anders | bestätigt |
| W04 | § 3.1 | `LICENSE.md` hat vorgeschaltete Aufteilungsregel | bestätigt |
| W05 | § 3.7 | SUL kennt Plan/Enterprise-Bedingung für Backend-Fall nicht | bestätigt |
| W06 | § 3.8 | `as a service` steht nicht in der Lizenz | bestätigt |
| W07 | § 3.8 | Lizenztext schweigt zum bezahlte-Pläne-Restpunkt | bestätigt |
| W08 | § 4 | keine Rechtswahl-/Gerichtsstandsklausel | bestätigt |
| W09 | § 10 | Lizenztext sagt zu bezahltem Plan/Community-Backend nichts | bestätigt |
| W10 | § 11 | beide L-1-Stellen vollständig zurückgebaut | **abweichend wegen Q13** |

## Anhang B — Git-Belege

Die pfadgenauen Commit- und Push-Belege werden nach dem ersten
Trägercommit und dem separaten Zentral-Commit in einem abschließenden
Git-Nachtrag ergänzt. Ein Commit kann seinen eigenen Hash nicht
selbstreferenziell enthalten.
