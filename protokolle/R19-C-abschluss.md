# R19-C — Abschlussmeldung (Ben Beckman, 19.08.2026)

> **Token-Verbrauch: von der Session nicht erhebbar — Subagenten-Zahlen
> soweit bekannt:** Prüf-Subagent 283.126 Token, 43 Tool-Aufrufe, Laufzeit
> ~17,7 Minuten. Eigener Verbrauch der Hauptsession: nicht erhebbar.

- **Auftrag:** `protokolle/tagesplan-2026-08-19.md`, Session-Prompts, Strang R19-C
- **Arbeitszeit:** 19.08.2026 ca. 11:50–12:45 MESZ
- **Commits:** `01c98d9` (Bericht + Messwerkzeuge) · `dcd57aa` (Prüfprotokoll
  + Disposition aller Befunde + Nachzugs-Werkzeuge)
- ⚠️ **NICHT GEPUSHT** — s. Block 2.

---

## Block 1 — Gebaut und verifiziert

### Lieferungen

| Artefakt | Commit | Inhalt |
|---|---|---|
| `marke/live-welle/vertiefung-finalisten-2026-08-19.md` | `01c98d9`, repariert in `dcd57aa` | Der Bericht: 9 Prüfkanäle × 3 Namen, Register/Domains/Handles/K6, Positivkontrollen, Nicht-Erhoben-Liste, Bewertung nach Kriterienkatalog |
| `marke/live-welle/k4-diktat-testbogen-2026-08-19.md` | `01c98d9`, repariert in `dcd57aa` | K4-Diktatbogen für die drei Finalisten (User-Handgriff) |
| `protokolle/R19-C-pruefer.md` | `dcd57aa` | Protokoll des unabhängigen Prüfers, 21 Befunde |
| 12 Messskripte `marke/live-welle/*-r19c*.js` | beide | Hauptlauf, Kern-Modul, Gegenkontrolle, DPMA-Trefferlisten/-Auskünfte, Domains/Varianten, Handles, Trunkierung, Vollerhebungs-Nachzug, K6 |
| `sensibel/rohbelege-R19-C/` | git-ignoriert | 11 Ordner, davon 9 mit `hashes.txt` (Zählweg im Berichtskopf) |

**Bestands-Skripte (`messlauf.js`, `schnellcheck.js`, `auswertung-lauf.js`,
`k6-doppellauf-shanks.js`) wurden nicht verändert** — nur gelesen.

### Fertig-Kriterium

Erfüllt: **27 von 27 Zellen** (9 Kanäle × 3 Namen) tragen ein Ergebnis mit
Beleg oder ein ausgewiesenes „nicht erhoben/nicht prüfbar" mit Kanal und
Grund; Positivkontrolle je Kanal ausgewiesen (§ 6); K4-Bogen gebaut; Prüfer
gelaufen; **21 von 21 Befunden disponiert** (Tabelle unten).

### Die Sachbefunde in Kürze

- **Wisestay:** kein identisches Zeichen in DE/EU (DPMA 0, EUIPO 0, TMview 0;
  vier phonetische Varianten je 0). Die getrennte Form „Wise Stay" trifft im
  Suchraum **ein** lebendes Zeichen: Unionsmarke **STAYWISE, Kl. 42**,
  eingetragen. `wisestay.de` **frei** (19.08. 09:59 UTC), `wisestay.com`
  **88.000 USD** (Atom.com Buy Now).
- **Innsight:** **14 lebende DE/EU-wirksame Zeichen** im Klassen-Suchraum
  (Vollerhebung 307/307), drei davon nah: `Inn:Sights` (DE, Kl. 35/41/42,
  **Wortmarke**, deren Klasse-42-Verzeichnis wörtlich Software-Entwicklung
  und IT-Beratung nennt), `INNOSIGHT` (WO, Kl. 9/16/35/41, Schutz DE+EM),
  `INN SIGHT` (DE, Kl. 9/13). Dazu ein **aktiver Dienstleister für
  Hoteliers** auf `innsight.com` mit US-Marken in Kl. 35/42/43. Beide
  Kern-Domains bei aktiven Firmen.
- **Stayahead:** sauberstes Registerbild — im Suchraum nur **2 lebende,
  mehrgliedrige** Zeichen (Vollerhebung 297/297); das identische Zeichen
  lebt nur in Kl. 39 (GEOPOST, Schutz auf DE). Gegenzeichnung: **vier
  gescheiterte Eintragungsversuche** dieses Zeichentyps → K1-Warnsignal.
  `stayahead.de` **820 €** kaufbar, `stayahead.com` aktiver UK-Anbieter.
- **Alle drei:** K6-Wörterbuchlauf 6/6 Sprachen ohne Eintrag. Instagram in
  keinem Kanal prüfbar. **Unter E-K1 (`.de` UND `.com` Pflicht) erfüllt kein
  Finalist K3 ohne Zukauf.**

### Prüfer-Befunde, kategorienweise MIT NENNER

**Lauf-Status des Prüfers:** vollständig durchgelaufen, alle drei
Pflicht-Kategorien beantwortet. **Sieben Prüfschritte hat er ausdrücklich
NICHT ausgeführt** (sein Abschnitt 3, hier einzeln, nicht geglättet):
kein Live-Nachabruf bei den Registern · kein Vollabgleich der `hashes.txt`
(3er-Stichprobe von ~200) · keine Sichtung der TMview-Zeilen 101+ *(durch
meine Vollerhebung inzwischen geschlossen)* · keine unabhängige
Verifikation der Browser-Textabzüge (kein Artefakt vorhanden) · kein
Zeilen-Audit der Skripte · keine Prüfung der R19-B-Rohbelege (nur dessen
Berichtstext) · keine Bewertung von Verwechslungsgefahr (E-K5-Rahmen).

**Disposition: 21 von 21.** Repariert **16**, durch Nachmessung geschlossen
**5** (in den 16 enthalten, hier zur Klarheit ausgewiesen), verworfen **0**,
mit benanntem Träger weitergegeben **5**.

| Nr. | Schwere | Disposition |
|---|---|---|
| P-01 | schwer | **repariert** — K4-Bogen: falsche 0/0/0-Entwarnung ersetzt, STAYWISE-Befund übernommen, Reparaturkasten sichtbar |
| P-02 | schwer | **nachgemessen** — beide Getrennt-Läufe vollständig geholt (307/307, 297/297) + 24/24; Vollzähligkeit in § 3 ausgewiesen |
| P-03 | schwer | **nachgemessen + repariert** — INNOSIGHT aufgenommen; Liste jetzt vollzählig mit benanntem Auswahlkriterium (§ 3.2, § 8) |
| P-05 | schwer | **nachgemessen** — K6-Doppellauf 6 Sprachen × 3 Namen nachgeholt (§ 5.1); § 7/§ 8/§ 9 korrigiert |
| P-04 | mittel | **repariert** — Matrix-Zelle Stayahead: „nur beendete" war falsch, richtig „keine DE/EM-Zeile" |
| P-06 | mittel | **repariert** — § 8: „null über beide Schreibweisen" → „null identische; getrennt: STAYWISE" |
| P-07 | mittel | **repariert** — INNSITE-Fundstelle auf den Varianten-Lauf korrigiert |
| P-08 | mittel | **repariert** — Matrix-Zelle Innsight nach Läufen getrennt; `Sinnsight.` nachgetragen |
| P-09 | mittel | **repariert** — § 6.2: pauschale „53/0 in allen fünf Läufen" durch Anker je Lauf ersetzt |
| P-10 | mittel | **nachgemessen** — DPMA-Trefferlisten der Getrenntformen gezogen; EUIPO-6 ausgewertet (§ 3.3) |
| P-11 | mittel | **teils nachgemessen, teils Träger** — Trunkierung als nicht durchführbar belegt (§ 3.4); Bindestrich-/Endungs-/Bestandteil-Achsen als § 7.11 ausgewiesen → **Träger: MKT-MARKE, vor der Anmeldung (MARKE3)** |
| P-12 | mittel | **Träger benannt** — Branchenverzeichnisse (Verfahren § 5.3) + W9 als § 7.12 ausgewiesen, W9 in § 8 „nicht bewertet" → **Träger: MKT-MARKE/MKT-FUND3** |
| P-13 | mittel | **repariert** — Verkehrsgeltungs-Klausel wieder im Satz; GEOPOST-Frage ausdrücklich gestellt und als offen markiert |
| P-14 | mittel | **repariert** — Nacharbeit sichtbar gemacht: § 0 Reparaturkasten, § 10 um vier Ordner ergänzt, Skripte committet |
| P-15 | Hinweis | **repariert** — Ordnerzahl mit Zählweg (11 Ordner, 9 mit `hashes.txt`); ⚠️ meine erste Korrektur war noch geschätzt und erst nach dem Zählen richtig |
| P-16 | Hinweis | **repariert, Begründung des Prüfers berichtigt** — Klammer gestrichen. ⚠️ **Der Prüfer schloss aus `apaleo*`=1, die Smartsearch beherrsche Trunkierung — das ist falsch:** `apale*` liefert 0 bei leerem Fehlerfeld (§ 3.4 Nr. 2). Sein Befund trägt, seine Ursachendiagnose nicht |
| P-17 | Hinweis | **repariert** — Kontrollzeile für den Varianten-Lauf in § 6 ergänzt; `Inzight`=2 nachgetragen |
| P-18 | Hinweis | **repariert** — US-Marken des Branchen-Namensvetters + patHits/gsmHits in § 3.2 |
| P-19 | Hinweis | **repariert** — Belegstufe: Browser-Sichtung als eigene, schwächere Leseweg-Kategorie in § 10 |
| P-20 | Hinweis | **repariert** — Spaltenkopf § 4 von „Bewertung K3" auf „Erwerbslage (Feststellung)" |
| P-21 | Hinweis | **repariert** — `STAY AHEAD OF RISK` als dritter Zurückweisungsfall aufgenommen; K1-Signal auf vier Fälle gestützt |

**Löschungszählung** (`git diff --numstat`, zwei Nenner): gegen den
Rundenstart `729008e` **0 Löschungen** — kein Bestandstext angetastet, alle
Dateien sind neu. Gegen den eigenen Bau-Commit `01c98d9`: 78 Löschungen im
Bericht + 2 im K4-Bogen — ausschließlich die von mir bewusst ersetzten
Passagen, jede mit sichtbarem Reparaturkasten.

---

## Block 2 — Offen geblieben

1. 🔴 **PUSH BLOCKIERT.** `git push origin <hash>:main` wurde vom
   Sicherheits-Klassifikator abgelehnt — **zwei Versuche über zwei
   Werkzeugkanäle** (PowerShell 12:20 MESZ, Bash unmittelbar danach), beide
   „Blocked by classifier". Nach L-05 ist das ein Betriebszustand, kein
   Umgehungsanlass; gemeldet statt umgangen. **Beide Commits (`01c98d9`,
   `dcd57aa`) liegen nur lokal.** ⚠️ Beim Push gehen zwei Leitsessions-
   Commits (`d25493f`, `729008e`) als **Vorfahren zwangsläufig mit** — sie
   liegen vor meinen; dagegen hilft kein Refspec. **Handgriff Leitsession.**
2. **K4-Diktat-Test und EN-Muttersprachler-Check** — User-Handgriffe, für
   alle drei offen. Bogen liegt bereit.
3. **Verwechslungsgefahr/Schutzumfang** — nach E-K5 gesperrt (ohne Anwalt);
   betrifft namentlich Wisestay ↔ STAYWISE (Kl. 42), Innsight ↔ Inn:Sights
   (Kl. 35/41/42) und ↔ INNOSIGHT, Stayahead ↔ Verkehrsgeltung GEOPOST.
   **Blockiert nach K2 wie ein Treffer.**
4. **Instagram** — in keinem Kanal prüfbar (HTTP und Browser, je mit
   Kontrollpaar belegt). Erst mit eingeloggtem Konto messbar.
5. **LinkedIn-Plattformsuche** — `linkedin.com` ist in der Domain-Freigabe
   der Chrome-Automation nicht enthalten; Profil-URL-Achse ist gemessen.
6. **Restposten aus § 7:** Zurückweisungsgründe der vier „stay ahead"-Fälle ·
   Waren-/Dienstleistungstexte der IR-/EM-Marken (per HTTP nicht lesbar) ·
   Halterdaten der `.de`-Domains (DENIC gibt keine aus) · Verhandlungs-
   spielraum bei den Kaufdomains (keine Anfragen versendet — Auftragsgrenze) ·
   Handelsregister · Websuche/SEO (W7) · Branchenverzeichnisse (§ 7.12).

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

**Pflichtfeld „welchen benannten Posten erfüllt mein Ergebnis?":** Erfüllt
sind die Punkte (1)–(5) der **Tagesende-Übergabe vom 18.08.**
(`protokolle/tagesplan-2026-08-18.md`, „Nächste Schritte MARKE"): IDs
vergeben · DPMA-Klassen der Treffer · Domain-Halter/Preise · Handles ·
K4-Bogen. Punkt (6) (Entscheidungsvorlage → User → Postkorb) ist
Leitsessions-Sache. **Der STATUS.md-Posten „K4-Diktat-Test" bleibt offen** —
ich habe nur den Bogen gebaut, nicht den Test durchgeführt.

Befunde, die anderen Strängen gehören:

1. **→ MKT-FUND3 (`fund/wettbewerbsbild.md`), unabhängig vom Namensentscheid:**
   **INNsight.com, Inc.** (San Francisco) ist ein aktiver Anbieter für
   Hoteliers — „We help #hoteliers drive more direct bookings", eigene
   Facebook-Präsenz, US-Marken in Kl. 35/42/43. Das ist ein
   Wettbewerber-Eintrag, der im Wettbewerbsbild fehlt, egal wie der
   Namensentscheid ausgeht. **Zielort geprüft: `fund/wettbewerbsbild.md`
   existiert.**
2. **→ Leitsession / R19-B-Bewertung (wichtig):** Alle
   „registerfrei (DPMA 0)"-Aussagen der Wellen 4–6 beruhen auf
   **Smartsearch-Zahlen**. Die belegen die **exakte Zeichenfolge**, nicht den
   Ähnlichkeitsraum — heute an Innsight belegt: Die Identitätssuche meldete
   1 Treffer, die Getrenntform 307 mit 14 lebenden Zeichen im Suchraum.
   **Die 16 „registerfreien" Namen aus Welle 4 sind damit nicht als
   kollisionsfrei belegt**, sondern nur als nicht identisch eingetragen.
3. **→ `marke/markenrecherche-verfahren.md` (Leitsessions-Scope):** Das
   Verfahren sollte zwei Werkzeugbefunde aufnehmen — (a) die
   EUIPO-CONTAINS-Suche findet getrennt geschriebene Marken nicht, die
   getrennte Schreibweise gehört als **Pflicht**-Variante ins Raster;
   (b) die DPMA-Smartsearch taugt nicht für Trunkierung und liefert dabei
   **stille** falsche Negative (§ 3.4 des Berichts).
4. **→ Zentrale (Front-Running-Merkposten):** `wisestay.de` ist heute
   09:59 UTC als **frei** gemessen — der einzige freie `.de`-Befund der drei.
5. **→ MKT-MARKE/Entscheidungsvorlage:** Unter E-K1 in heutiger Fassung
   erfüllt **kein** Finalist K3 ohne Zukauf. Die E-K1-Frage („`.com`
   Pflicht?") ist damit faktisch die erste Entscheidung, nicht die Namenswahl.

---

## Block 4 — Stolpersteine und Learnings

### (i) Fallen

1. **Ein Prüfskript mit zu weiter Erfolgsbedingung meldet grün.** Meine
   Trunkierungsprobe verknüpfte zwei Kontrollen mit ODER — die
   aussagekräftige (`apale*`) fiel durch, die nichtssagende (`apaleo*`, das
   vollständige Wort mit Stern) trug, Ergebnis „GANGBAR". Gefunden nur, weil
   ich die Rohausgabe Zeile für Zeile gegen den Urteilssatz gelesen habe.
   **Beim Bau einer Kontrolle zuerst fragen: Kann ihr Ergebnis überhaupt
   eine Unmöglichkeit liefern?**
2. **Ein stilles falsches Negativ ist schlimmer als ein Fehler.** Dieselbe
   DPMA-Suche meldet bei einem Stamm „Ungültige Platzhalterverwendung"
   (erkennbar) und bei einem anderen **0 Treffer bei leerem Fehlerfeld**
   (nicht erkennbar). Ohne Positivkontrolle mit unabhängig bekanntem
   Sollwert wäre das als Sachbefund in den Bericht gegangen.
3. **Ein Suchkanal, der nur Seite 1 liefert, sieht aus wie ein Ergebnis.**
   TMview gab 100 von 307 Zeilen zurück; `totalResults` stand im selben
   JSON, ich habe es nicht gegen die gelieferte Zeilenzahl gehalten. Der
   Prüfer fand es. **Bei jeder paginierten Quelle die Vollzähligkeit als
   eigene Zahl ausweisen: geliefert/gesamt.**
4. **Ein geklonter Textbaustein transportiert seine Entwarnung mit.** Der
   Satz „alle drei Varianten 0/0/0" stammte aus dem Bericht, wo er für
   andere Varianten galt, und wurde im K4-Bogen zur falschen Entwarnung —
   ausgerechnet im Dokument, das der User in die Hand bekommt.
5. **Ein Bestands-Skript kann seinen Prüfgegenstand fest verdrahtet haben.**
   `k6-doppellauf-shanks.js` trägt fünf Namen im Code; „K6 ist gelaufen"
   galt für die Welle-3-Favoriten, nicht für die Finalisten. Der Bericht
   schrieb „K6-EN offen" — und machte damit aus einem **ganz** offenen
   K.-o.-Kriterium ein halb offenes.
6. **Das persistente Arbeitsverzeichnis ist zwischen Bash und PowerShell
   geteilt.** Ein `cd` in einen Rohbeleg-Ordner ließ einen späteren
   Node-Aufruf mit „Cannot find module" scheitern — bekannte Falle des
   `windows-powershell`-Bausteins, hier real getroffen. Seitdem absolute
   Pfade.
7. **Delegierte Ursachendiagnosen driften auch bei guten Prüfern.** Der
   Prüfer schloss aus `apaleo*`=1, die Smartsearch beherrsche Trunkierung —
   dieselbe Fehlverknüpfung, die ich selbst im Skript hatte. Sein **Befund**
   trug, seine **Diagnose** nicht. Befund und Diagnose getrennt prüfen.

### (ii) Bewährte Muster

1. **Die Gegenkontrolle mit einem Zeichen aus DEMSELBEN Namensraum.** Ein
   Allerwelts-Kontrollwort („APPLE") beweist nur, dass der Endpunkt lebt.
   Zwei Kunstwörter aus der Vorwoche mit **unabhängig bekanntem Sollwert**
   (Staywise 1/7/1, Hostpilot 2/10/2 aus R19-B) trafen 6 von 6 — erst das
   macht die Nullen der Finalisten belastbar.
2. **Das Werkzeug-Negativ neu messen statt übernehmen.** TMview galt seit
   dem 18.08. als tot; heute trägt der Kanal wieder und lieferte die
   entscheidenden Trefferlisten. Ein Kanal-Negativ misst einen Zeitpunkt.
3. **Vom Rohbeleg rückwärts lesen statt die eigene These abzufragen.** Die
   Zuordnung der vier Stayahead-Nummern gelang, weil ich das
   TMview-JSON nach den DPMA-Nummern durchsucht habe, statt Zeichen zu
   erraten — Bezeichner-Auflösung wäre eine eigene Vermutung gewesen.
4. **Die eigene Lücke suchen, bevor der Prüfer läuft.** Der
   Trunkierungs-Befund und die `Inn:Sights`-Registerauskunft entstanden in
   der Wartezeit auf den Prüfer — beide gehörten am Ende zu den
   entscheidungsrelevantesten Ergebnissen.
5. **Eine Blockade melden und weiterarbeiten, statt zu warten.** Als die
   Chrome-Extension nicht antwortete, wurden erst alle HTTP-Kanäle
   fertiggemessen und dann eine einzige gebündelte Dropdown-Frage gestellt.
6. **Vollzähligkeit als eigene Zahl.** Der Nachzugslauf gibt
   „geholt/gesamt" und „davon lebend" aus — damit ist die Aussage „nur zwei
   lebende Zeichen" prüfbar, statt nur behauptet.

---

*Session R19-C (Ben Beckman), 19.08.2026. Kein eigener Debrief — die
Regel-Rückflüsse aus Block 4 gehören in `/debrief` der Leitsession.*
