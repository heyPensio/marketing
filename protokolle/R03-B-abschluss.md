# R03-B (Yasopp) — Abschlussmeldung

> **Token-Verbrauch:** von der Session nicht erhebbar — Subagenten-Zahlen
> soweit bekannt: **keine** (auftragsgemäß kein Prüf-Subagent beauftragt;
> die Session lief durchgehend sequentiell).
>
> **Auftrag:** FUND2-Fortsetzung — regionalstatistik.de (GENESIS-
> Regionaldatenbank der Länder) als dritten Kanal für
> Beherbergungs-Größenklassen auf Länderebene prüfen und ggf. erheben,
> Ziel Schleswig-Holstein; Prämisse unter Test war Negativbefund N1.
>
> **⚠️ Modell-Verifikation nicht erbracht:** Der Auftrag verlangte die
> Verifikation des tatsächlichen Modells „NUR per Statuszeile". Die
> Statuszeile ist für die Session selbst nicht lesbar; eine
> Selbstauskunft des Modells gilt laut CLAUDE.md ausdrücklich **nicht**
> als Beleg. Die Prüfung ist damit **offen**, nicht „bestanden" — sie
> ist ein User-Handgriff.

## 1. Gebaut / verifiziert

| Ergebnis | Pfad | Commit |
|---|---|---|
| Prüf- und Erhebungsbericht dritter Kanal (neu, 387 Zeilen) | `fund/erhebung/regionalstatistik-groessenklassen.md` | `2f133f6` |
| Verweis-Nachtrag im Hauptbericht (§ 4 Nicht-geprüft-Block) + Vorwärtsverweis auf § 7 Punkt 4 | `fund/erhebung/strang2-strukturdaten.md` | `2f133f6` |
| Diese Abschlussmeldung | `protokolle/R03-B-abschluss.md` | Folge-Commit (Hash entsteht mit diesem Commit) |

**Fertig-Kriterium erfüllt — in beiden Zweigen zugleich:**

**(a) Dokumentiertes Negativ.** Drei Negative mit Datum, Methode,
Suchraum und Positivkontrolle im selben Lauf (N6/N7/N8, Bericht § 3):
Die Statistik 45412 der Regionaldatenbank hat genau drei sachliche
Merkmale (Betriebsart · Herkunft der Gäste · Unter-/Obergrenze) — kein
Größenklassen-Merkmal, und damit auf **keiner** Regionalebene. Der
Suchbegriff „Gästezimmer" existiert in der gesamten Datenbank nicht;
„Größenklassen" trifft nur in Landwirtschaft, Unternehmensdemografie und
Steuerstatistik. Eine zweite Tourismus-Statistik existiert nicht.
**Das Negativ ist zweikanalig belegt** (Merkmalskatalog der Statistik vs.
Volltextindex der Gesamtdatenbank) und daher **bestätigt**, nicht „nicht
bestätigt". Ausdrücklich nicht mitbehauptet: dass die Ämter die
Schneidung nicht als Sonderauswertung liefern könnten.

**(b) Positiv-Befund mit erhobenen Daten.** Aus Tabelle 45412-02-02-4-B
(Flat-File-CSV, ohne Anmeldung) erhoben:
- SH-Hotellerie **Zeitreihe 2018–2024**: Betriebe 1.139 → 1.038
  (**−8,9 %**, monoton in jedem Jahresschritt), Schlafgelegenheiten
  62.881 → 66.378 (**+5,6 %**), mittlere Betriebsgröße 55,2 → 63,9
  (**+15,8 %**).
- SH **alle 15 Kreise/kreisfreien Städte 2024**, Hotellerie und
  Insgesamt — Spanne der mittleren Betriebsgröße 32,7 (Herzogtum
  Lauenburg) bis 144,0 (Kiel), **Faktor 4,4**.
- Bundesvergleich 2024: SH-Hotellerie liegt **6,9 % unter** dem
  Bundesschnitt und konsolidiert langsamer als der Bund.

**Verifikation:** Zeilen-Scope an der Merkmals-Erläuterung der Datenbank
**wörtlich belegt** („die im Juli geöffneten Beherbergungsbetriebe";
Betten „Stand von Ende Juli") — damit sind die Werte mit Q1/Q3 des
Hauptberichts vergleichbar, obwohl der Tabellentitel „Jahressumme" sagt.
Summenproben: **A 4/4** (Betriebsarten → Insgesamt, SH 2024, alle vier
Wertmerkmale), **B 14/14** (dieselbe Probe je Jahr 2018–2024 × zwei
Merkmale), **C 4/4** (15 Kreise → Landeszeile) — alle exakt, Nenner
jeweils genannt. Die Proben decken **alle** im Bericht verwendeten
SH-Werte ab. Zweitkanal-Plausibilität gegen Q1/Q3 (2025) widerspruchsfrei.

## 2. Offen geblieben

1. **Modell-Verifikation** (s. Kopf) — User-Handgriff.
2. **Ursache der Abweichung Länder ↔ Deutschland** in derselben Tabelle
   (Bericht § 6): Länder-Summe minus Deutschland-Zeile = −391.312
   Schlafgelegenheiten, davon −390.632 in einer einzigen Betriebsart, bei
   nur 273 Betrieben Differenz; Geheimhaltung scheidet als Erklärung aus
   (kein Länderwert unterdrückt), und bei der Hotellerie liegt die
   Länder-Summe sogar **über** der Bundeszeile. Als **gemessen, nicht
   erklärt** dokumentiert; Anfrage an die RDB-Hotline nicht gestellt. Für
   die SH-Aussagen ohne Folgen — der Bundeswert im Bericht ist deshalb
   bewusst als Länder-Summe gerechnet, mit Zählweg an der Zahl.
3. **Kein RDB-Konto angelegt.** Der REST-Webservice antwortet mit
   HTTP 401/Fehlercode 15 ohne registriertes Konto (Gastkennung reicht
   nur für `helloworld`). Registrierung ist kostenlos; für diesen Auftrag
   nicht nötig, für wiederkehrende Regionalauswertungen der bessere Weg —
   Entscheid Leitsession.
4. **Aufwand/Nutzen Sonderauswertung Statistikamt Nord** — nach diesem
   Bericht der einzige verbliebene amtliche Weg zur SH-Schneidung.
   Entscheid und Anfrage-Entwurf gehören der Leitsession
   (Hauptbericht § 7 Punkt 2).
5. **Zeitreihe vor 2018 nicht erhoben.** Die Tabelle weist 1995–2024 aus,
   ihr Titel sagt aber „ab 2018" (Betriebsart-Schneidung wechselt 2018,
   Vorgängertabelle ist 45412-02-01-4-B „bis 2017"). Ein längerer
   Rückblick wäre nur mit Bruch-Prüfung zulässig — bewusst nicht gemacht.

## 3. Nebenbefunde außerhalb des Auftrags

1. **Gebietspriorisierung für die Zielkundenliste (→ MKT-AKQ/MKT-HANDEL):**
   Nordfriesland (246) und Ostholstein (170) stellen zusammen **40,1 %**
   aller SH-Hotelleriebetriebe (416 von 1.038). Die Kreistabelle im
   Bericht § 4.4 ist unmittelbar als Priorisierungsraster verwendbar.
   **Zielort nachgesehen: existiert noch nicht** — die Zielkundenlisten-
   Arbeit steht laut CLAUDE.md hinter der Kanal-Rechtsmatrix (UWG § 7).
   Deshalb im Bericht **geparkt** statt übergeben (§ 8 Punkt 4).
2. **Der Kapazitätszuwachs in SH ist stark camping-getrieben.** Der
   Hauptbericht § 1.4 nennt +31,5 % Schlafgelegenheiten (2012–2025,
   inkl. Camping). Ohne Camping sind es +10,6 % (2018–2024), für die
   Hotellerie allein nur +5,6 %. Die § 1.4-Aussage bleibt richtig, ihre
   Wucht stammt aber überwiegend aus dem Camping-Segment — relevant,
   sobald jemand daraus eine Aussage über Hotel-Investitionen ableitet.
   **Kein Umbau von § 1.4 vorgenommen** (fremder Scope, Leitsession).
3. **Die RDB liegt für Jahresdaten ein Jahr hinter dem SH-Jahresbericht**
   (RDB: 2024, Q3: 2025). Sie ist der ältere, aber der tiefer
   gegliederte Kanal — bei künftigen Regionalfragen daher nicht als
   „aktuellste Quelle" behandeln.
4. **Ein Merkmal sah wie ein Treffer aus und war keiner:** `UOGRENZE`
   („Unter- und Obergrenze") klingt nach Größenklasse, ist aber das
   Streuungsband des Rasterdaten-Indikators (Ausprägungen
   `OBERGRENZE`/`UNTERGRENZE`). Einzeln geöffnet und ausgeschlossen —
   ein Negativ, das ohne diesen Einzelabruf angreifbar gewesen wäre.

## 4. Stolpersteine und Learnings

### (i) Fallen

1. **Die Zuteilung „exklusiv: Chrome-Automation" war eine Annahme über
   die Seite, keine Eigenschaft der Seite.** Die Erwartung „Behördenseite
   ⇒ SPA ⇒ Browser nötig" traf nicht zu: regionalstatistik.de ist ein
   klassisches Formular-/POST-Frontend und ließ sich vollständig per
   `curl` bedienen — inklusive Zeitraum-Assistent, Regionalebenen-Wechsel
   und CSV-Download. **Die Chrome-Automation wurde nicht ein einziges Mal
   gebraucht.** Lehre für Start-Prompts: Ein zugeteiltes exklusives System
   ist eine Erlaubnis, keine Vorgabe — der billigste Kanal wird zuerst
   gemessen, nicht der zugeteilte.
2. **Eine Fehlseite ist nicht dasselbe wie ein Systemausfall.** Ein
   falsch geratener URL-Parameter lieferte die Seite „Wegen einer
   technischen Störung ist unser Angebot vorübergehend nicht erreichbar" —
   während im selben Zeitraum andere Abrufe derselben Domain sauber
   antworteten. Wäre das ungeprüft als Negativbefund („Quelle nicht
   erreichbar") ins Dokument gegangen, hätte es den ganzen Kanal
   fälschlich geschlossen. Prüffrage: Antwortet die Domain **parallel**
   noch? Dann ist der Fehler meiner.
3. **Ein Katalog-401 ist ein Kanal-Negativ, kein Quellen-Negativ.** Der
   REST-Webservice antwortete auf `catalogue/tables` mit „nicht
   berechtigt" — obwohl die Gastkennung bei `helloworld` funktioniert.
   Daraus „die Daten sind nicht zugänglich" zu schließen, wäre falsch
   gewesen; über die Weboberfläche waren dieselben Daten **anonym**
   abrufbar. Ein Werkzeug-Negativ misst einen Kanal, keine
   Systemeigenschaft.
4. **Die Summenprobe hat einen echten Datenfehler gefangen, den kein
   Plausibilitätsblick gefunden hätte.** Die Deutschland-Zeile geht
   gegen die Summe ihrer eigenen 16 Länderzeilen nicht auf (§ 6). Beide
   Ebenen sind **je für sich** in sich stimmig — nur die Kreuzprobe
   zwischen den Ebenen zeigt es. Ohne die Probe wäre eine falsche
   Bundeszahl in einen Vergleich eingegangen.
5. **Der Tabellentitel log über den Zeilen-Scope.** „Jahressumme" im
   Titel, aber Betriebe und Betten sind **Juli-Stichtagswerte** — belegt
   nur durch die separat geöffnete Merkmals-Erläuterung. Wer den Titel
   für den Scope nimmt, vergleicht Jahres- mit Stichtagswerten und merkt
   es nie.
6. **Der verführerischste Fehler dieses Berichts wäre der Mittelwert
   gewesen.** „Ø 63,9 Schlafgelegenheiten je Betrieb" liest sich wie ein
   Ersatz für die fehlende Größenklassen-Verteilung — ist aber keiner:
   Bundesweit liegt der Mittelwert bei 68,7 und trotzdem haben 53,0 %
   der Betriebe unter 20 Zimmer. Der Bericht führt die Nicht-Aussage
   deshalb als eigenen Abschnitt (§ 4.5), nicht als Fußnote.

### (ii) Bewährte Muster

1. **Übersichtsblatt zuerst** (Baustein `quellen-beschaffung`) hat sich
   exakt so bewährt, wie die Regel es verspricht: Der Tabellenkatalog der
   Statistik 45412 (15 Tabellen) und die Merkmalsliste (40 Merkmale)
   beantworteten „Gibt es die Schneidung überhaupt?" in zwei Abrufen —
   **vor** jeder teuren Suche.
2. **Positivkontrolle im selben Lauf, und zwar auf die
   Suchmechanik gemünzt.** Dass `Zimmer` 146 Tabellen trifft, `Gästezimmer`
   aber null, belegt: Die Suche findet Teilwörter — der Nulltreffer ist
   ein echter Nulltreffer, kein Suchsyntax-Fehler. Eine Positivkontrolle
   mit einem *garantiert vorhandenen* Begriff hätte das nicht gezeigt.
3. **Das verdächtige Merkmal einzeln öffnen, statt am Namen zu urteilen**
   (`UOGRENZE`). Kostet einen Abruf, macht das Negativ unangreifbar.
4. **Zwei getrennte Lesekanäle für ein Negativ, bevor es ins Dokument
   geht** — hier Merkmalskatalog (strukturell) und Volltextindex
   (lexikalisch). Erst dadurch durfte „bestätigt" statt „nicht
   bestätigt" im Bericht stehen.
5. **Abweichungen dokumentieren statt wegzuglätten.** Die Probe D
   (§ 6) wäre als „Rundungsdifferenz" schnell erledigt gewesen. Die
   Gegenrechnung (273 Betriebe können keine 390.632 Betten tragen) zeigt,
   dass es keine ist — und macht aus einem Ärgernis eine Warnung für
   jeden, der diese Tabelle später benutzt.
6. **Den Reproduktionsweg ins Dokument schreiben statt die Rohdaten ins
   Repo.** Die Abrufkette (Bericht § 7) stellt jede Zahl in Minuten
   wieder her, ohne 1,7 MB CSV zu versionieren — und die
   Scratchpad-Pfade bleiben draußen (Baustein `windows-powershell`:
   Skripte mit Scratchpad-Pfaden sind im Repo tot).
7. **Der Nebenbefund-Zielort wurde NACHGESEHEN, nicht behauptet.** Die
   Gebietspriorisierung gehört MKT-AKQ/MKT-HANDEL — dort existiert noch
   kein Zieldokument, und die Kanal-Rechtsmatrix geht ihm voraus. Deshalb
   „geparkt mit Begründung" statt „übergeben an" (CLAUDE.md Regel 8b).
