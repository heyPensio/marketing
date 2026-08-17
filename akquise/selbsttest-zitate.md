# Selbsttest-Datei für `pruefe-zitate.js`

Diese Datei ist **kein Projektdokument**. Sie ist der Prüfgegenstand von
`node akquise/pruefe-zitate.js --selbsttest`. Der Selbsttest liest die
Abschnitte generisch und schickt alle Zitate durch dieselben Funktionen wie
der Produktivpfad (`zitate`, `norm`, dateigener Pool-Ausschluss,
Baseline-Multimenge und Status-Klassifikation). Wer ein Muster ergänzt,
ergänzt hier im selben Zug eine Zeile; ein Muster ohne Zeile kann nicht als
erzwungen gelten.

## Muster A — NEU / TREFFEN-NICHT

Diese neun Zitate stehen weder im Pool noch in der Test-Baseline und müssen
jeweils als **neuer Verstoß** feuern. Damit ist zugleich die verlangte
`TREFFEN-NICHT`-Richtung belegt.

A1 (verfälschte Zahl): „eigene, dauerhaft erreichbare Seite mit allen 14
Art.-14-Angaben"

A2 (Verneinung entfernt): „Risiko muss nicht dokumentiert werden, weil die
Aufsicht zustimmt"

A3 (plausibel erfunden): „Die Aufsichtsbehörden halten die Nutzung von
Impressumsdaten für zulässig, wenn ein berechtigtes Interesse dokumentiert
ist."

A4 (quellenfremd): „Dieser Satz steht in keiner der elf Quellendateien des
Pools."

A5 (Rechtsfolge verkehrt): „Rechtswidrige Werbung begründet stets ein
berechtigtes Interesse"

A6 (Alleinstellung erfunden): „Jeder Wettbewerber im untersuchten Feld
bündelt das identisch"

A7 (Tenor verfälscht): „Art. 21 Abs. 4 ist als Verbot im Tenor des Urteils
enthalten"

A8 (Leistungsumfang verfälscht): „Einrichtung ohne Tests, Schulung und
Übergabedokumentation"

A9 (gepflanztes falsches Randnummern-Zitat): „Rn. 999: Die Erhebung aus
öffentlichen Quellen macht jede Direktwerbung ohne weitere Prüfung zulässig."

## Muster B — BASELINE

Dieses Zitat wird im Test als eigener Baseline-Eintrag derselben Zieldatei
eingespeist. Es ist nicht im Pool, darf aber **nicht rot** werden.

B1: „Dieser absichtlich festgeschriebene Selbsttest-Altbestand bleibt
sichtbar, löst aber keinen neuen Verstoß aus."

## Muster C — POOL

Diese acht Zitate müssen als bestätigte Quellenzitate feuern.

C1 (Rechtsmatrix D2, Pflicht 1): „eigene, dauerhaft erreichbare Seite mit
allen 13 Art.-14-Angaben"

C2 (Whitespace-Kollaps): „Risiko bewusst tragen und dokumentieren"

C3 (Sonderzeichen und Ziffern): „Summe beider Kreiszeilen ÷ Landeszeile"

C4 (Rechtsmatrix A7): „Der Grad der Belästigung ist bei einer Werbung per
Post jedoch gering."

C5 (O-8): „Rechtswidrige Werbung ist kein berechtigtes Interesse. Die
UWG-Prüfung steht VOR der Abwägung, nicht daneben."

C6 (Wettbewerbsbild): „Kein Wettbewerber im untersuchten Feld bündelt das
identisch"

C7 (Rechtsmatrix aus O-8): „Art. 21 Abs. 4 ist im Tenor des Urteils nicht
enthalten — er trägt dort die Art.-6-Prüfung"

C8 (Angebotsarchitektur aus Preismodell): „Einrichtung Server/Instanz,
Workflows importieren, Credentials, Property-Setup, Raten, Tests, Schulung,
Übergabedoku"

## Muster D — SELBSTAUSSCHLUSS in beide Richtungen

Das folgende Zitat steht zunächst **nur in dieser eigenen Zieldatei**. Obwohl
die Selbsttest-Datei absichtlich auch in den Test-Pool gelegt wird, darf sie
sich nicht selbst bestätigen. In der Gegenrichtung legt der Test exakt
dasselbe Zitat zusätzlich in eine andere virtuelle Pool-Datei; dann muss es
bestätigt werden.

D1: „Dieses Selbstausschluss-Zitat darf sich in seiner eigenen Zieldatei
nicht selbst bestätigen."

## Muster E — EIGEN-Ausnahme in beide Richtungen

Das erste Zitat wird im Test als begründete EIGEN-Ausnahme registriert und
muss als **eigene Formulierung** klassifiziert werden. Zusätzlich registriert
der Test eine zweite, nirgends im Prüfbestand vorkommende Ausnahme; sie muss
in der Gegenrichtung als **verwaist** erkannt werden.

E1: „Diese eigene Selbsttest-Formulierung ist bewusst kein Quellenzitat und
trägt eine Begründung."

## Muster F — ROHBELEG in beide Richtungen

Das folgende bekannte Testzitat wird ausschließlich in einen virtuellen
lokalen Rohbeleg gelegt und muss als **bestätigt (Rohbeleg, lokal)**
klassifiziert werden. Die Gegenrichtung ist A9: Das plausible, aber im
virtuellen Rohbeleg fehlende Randnummern-Zitat muss **NEU** bleiben.

F1: „Rn. 87: Diese byte-treue Selbsttest-Fundstelle steht nur im lokalen
Rohbeleg und nicht im versionierten Pool."

## Muster G — fehlender ROHBELEG-POOL

Der Test wiederholt das folgende, sonst unbestätigte Zitat mit einem leeren
Rohbeleg-Ordner. Es muss als **nicht prüfbar** erscheinen, darf nicht als
NEU oder bestätigt gezählt werden und der Teillauf bleibt grün.

G1: „Ohne lokalen Rohbeleg-Pool ist diese Fundstelle nicht prüfbar, aber kein
neuer Verstoß."

## Muster H — sichtbar unbestätigter R17-Aufnahmebefund

Das erste Zitat wird im Test ausdrücklich als **vom vorhandenen Rohbeleg nicht
bestätigt** registriert: Es darf weder als bestätigt noch als EIGEN erscheinen,
bleibt aber als eigene sichtbare Kategorie statt als anonymer Rest erhalten.
In der Gegenrichtung registriert der Test einen nirgends vorkommenden Eintrag;
dieser muss als **verwaist** erkannt werden. Ein beliebiges anderes
unbestätigtes Zitat wie A9 bleibt weiterhin NEU.

H1: „Dieser benannte R17-Aufnahmebefund bleibt sichtbar, obwohl ihn der lokale
Rohbeleg nicht bestätigt."

## Muster I — sichtbar markierte Auslassungen in beide Richtungen

I1 und I3 stehen im virtuellen Rohbeleg mit zusätzlichem Text an der sichtbar
markierten Auslassung und müssen bestätigt werden. I2 und I4 tragen dieselbe
Form, ihre erhaltenen Wortlautsegmente fehlen aber im Rohbeleg und müssen NEU
bleiben. Zusätzlich prüft der Selbsttest, dass Segmente aus zwei verschiedenen
Rohbeleg-Dateien nicht zu einem scheinbaren Treffer zusammengesetzt werden.

I1 (Auslassung in der Mitte): „Der Anfang dieser Rohbeleg-Fundstelle steht
byte-treu … und am Ende geht sie ebenfalls byte-treu weiter."

I2 (beide Segmente erfunden): „Dieser erfundene Anfang steht in keinem
Rohbeleg … und auch dieses Ende fehlt dort vollständig."

I3 (Auslassung am Ende): „Diese Rohbeleg-Fundstelle beginnt byte-treu und der
Rest ist sichtbar ausgelassen …"

I4 (erfundener Anfang mit End-Auslassung): „Diese erfundene Rohbeleg-Fundstelle
beginnt nirgends byte-treu und bleibt deshalb neu …"

## Muster J — verschachtelte Blockquote-Präfixe und Stufenfolge

J1 (Präfix nur auf Zielseite): „R18-B Zielpräfix wird symmetrisch entfernt
> > und bleibt vollständig bestätigt."

J2 (Präfix nur auf Quellseite, mit Silbentrennung): „R18-B Quellpräfix wird
symmetrisch entfernt und die Silben-trennung bleibt bestätigt."

J3 (TREFFEN-NICHT, verfälschtes Wort): „R18-B Zielpräfix wird symmetrisch entfernt
> > und bleibt keinesfalls bestätigt."

## Muster K — EIGEN_R18 positiv, sieben begründete Kandidaten

K1: „das Berufungsgericht sieht es anders"

K2: „das Berufungsgericht hält Briefwerbung dieser Art für zulässig"

K3: „Doppelbegründung § 3a UWG und § 3 Abs. 2 UWG"

K4: „das LG stützt sich auf § 3a UWG"

K5: „über § 3a UWG bzw. § 3 Abs. 2 UWG"

K6: „*Sie ist damit die einzige der fünf Bedingungen, die nach der Übergabe
fortwirkt — und die einzige, deren Verletzung wir nicht selbst verhindern können.*"

K7: „der Kunde — und wir beim Aufsetzen — licensing, copyright, or other
notices nicht entfernen oder verdecken"

## Muster L — EIGEN_R18 Gegenrichtung, sieben Abweichungen bleiben NEU

L1: „das Berufungsgericht sieht es immer anders"

L2: „das Berufungsgericht hält Briefwerbung jeder Art für zulässig"

L3: „Dreifachbegründung § 3a UWG und § 3 Abs. 2 UWG"

L4: „das OLG stützt sich auf § 3a UWG"

L5: „über § 3a UWG oder § 3 Abs. 2 UWG"

L6: „*Sie ist damit die einzige der sechs Bedingungen, die nach der Übergabe
fortwirkt — und die einzige, deren Verletzung wir nicht selbst verhindern können.*"

L7: „der Kunde — und wir beim Aufsetzen — licensing, copyright, and other
notices nicht entfernen oder verdecken"

## Muster M — reparierter EIGEN_R17-Präfixeintrag in beide Richtungen

M1: „LG Düsseldorf, Urt. v. 06.02.2026 – 38 O 243/23 … hat eine
> > Briefpost-Werbesendung untersagt — gestützt ausschließlich auf
> > Art. 6 Abs. 1 lit. f und die Art. 12–14, 21 DSGVO."

M2 (verfälschte Gegenrichtung): „LG Düsseldorf, Urt. v. 06.02.2026 – 38 O
243/23 … hat jede Briefpost-Werbesendung untersagt — gestützt ausschließlich
auf Art. 6 Abs. 1 lit. f und die Art. 12–14, 21 DSGVO."
