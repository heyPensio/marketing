# R15-B (Yasopp) — Abschlussmeldung

**Runde:** R15 · **Strang:** B (Angebotsbausteine AU-2/AU-4 + O-2 +
K-1-Anker) · **Datum:** 14.08.2026 (Nacht-Slot) ·
**Lesestand bei Start:** `4b84693` · **Bau-Commit:** `a57977a` ·
**Prüfstand (eingefroren):** `a57977a` · **Reparatur-Commit:** `d4f23c8`
· **Nachtrags-Commit:** s. Block 1 Punkt 6.

> ## 🔴 PUSH ZURÜCKGEHALTEN — bewusst, nicht vergessen
>
> **Alle drei Commits liegen lokal, nichts ist verloren. Gepusht ist
> nichts.** Gemessen 14.08.2026 nach `git fetch`:
> - **Eingehend** `HEAD..origin/main` → **0 Commits**; ein Rebase entfällt
>   damit, und mit ihm das `--autostash`-Risiko für fremde unfertige
>   Stände.
> - **Ausgehend** `origin/main..HEAD` → **12 Commits, davon 9 FREMDE**
>   (ROUX/R15-C · ROCKSTAR/R15-D · BECKMAN/R15-A · LIMEJUICE). Sie
>   liegen **zwischen** meinem Bau-Commit `a57977a` und meinen beiden
>   späteren Commits.
>
> **Warum das nicht mit einem gezielten Refspec zu lösen ist:**
> `git push origin 1d538c1:main` schützt nur nach **oben** — die neun
> fremden Commits sind **Vorfahren** meiner beiden späteren und gingen
> mit. Ein Push von `a57977a` allein wäre technisch möglich (Parent
> `88ad1bf` liegt auf origin/main), würde aber genau den Stand
> veröffentlichen, der die **zwei schweren Prüferbefunde noch
> unrepariert** trägt — schlechter als gar kein Push.
>
> **Und die fremden Stände sind Zwischenstände:** `git status` zeigt
> uncommittete Arbeit in `handel/anwalts-briefing-2026-08.md` (R15-A) und
> `akquise/sperrdatei-struktur.md` (R15-E) — beide Sessions gelten nach
> CLAUDE.md Regel 3a als **LAUFEND** (keine Abschlussmeldung + offene
> Arbeit im Scope). Ihre Arbeit zu veröffentlichen ist nicht meine
> Entscheidung.
>
> **Posten für die Leitsession:** Sobald die Parallelstränge gemeldet
> haben, pusht die Leitsession (oder gibt R15-B frei). ⚠️ Vor dem Push
> gilt die Sichtung erneut — sie **altert** im geteilten Arbeitsbaum.

**Modell laut Statuszeile:** ⚠️ **nicht erhoben** — die Statuszeile ist
nur dem User sichtbar; die Selbstauskunft des Modells ist nach CLAUDE.md
kein Beleg. **Als offener Posten geführt**, nicht als Angabe.

---

## Block 1 — Gebaut und verifiziert

**Einziges geändertes Arbeitsdokument: `handel/angebotsarchitektur.md`**
(neuer **§ 6a** mit acht Unterabschnitten, drei Zeiger-Kästen an
P-A/P-B/P-C in § 4, je ein Nachtrag im § 6-Kasten und im Kopfkasten
Punkt 3, zwei neue Zeilen in § 8).

1. **§ 6a.1 — Wortlaut der vier Auflagen am ROHBELEG zurückgeholt.**
   Quelle: `<FIRMENWURZEL>\heypensio\n8n-lizenz-z6-und-mcp-vorlage-2026-08.md`
   § 3.6 **@`4fa530b`**; Arbeitsbaum == Commit gemessen
   (`git diff --stat 4fa530b -- <datei>` → leer). Leseweg: Block
   § 3.5–§ 3.7 **am Stück**, nach dem Prüferlauf zusätzlich § 3.2 und
   § 3.4. **Zählregel gesetzt: an der TABELLE zählen, nie an einer
   Überschrift** — der Rohbeleg trägt den Zählfehler an **zwei** Stellen
   (Überschrift + Einleitungssatz § 3.6 „drei Auflagen" bei vier
   Tabellenzeilen; § 3.8 „AU-1…AU-3").
2. **§ 6a.2 — Wirkung je Auflage: 4 von 4 geprüft.** **2** erzeugen
   einen Baustein (AU-2, AU-4), **1** eine Wording-Grenze ohne heutigen
   Text (AU-3), **1** keinen Textbaustein, sondern ein Gate (AU-1 hängt
   an K04/Z-5). *(Die Zählung kann anders ausfallen — sie zählt nicht
   ihr Auswahlkriterium: zwei der vier liefern gerade KEIN
   Textergebnis.)*
3. **§ 6a.3/6a.4 — die beiden beauftragten Bausteine gebaut.**
   `WP-AU2` (Bezeichnungspflicht in Angebot, Vertrag **und Rechnung**,
   fünf Prüfpunkte + Verbotsliste) und `ON-L1…ON-L4` (**Nachweisform
   zurückgebaut**: WELCHE Dateien · WELCHE Fassung · WO vermerkt · WANN).
   Zusätzlich `WG-AU3` als Wording-Grenze mit getrennter Belegstufe.
4. **§ 6a.5 — Verankerung 3 von 3 Paketformen**, am Text geprüft (nicht
   nur am Nenner-Satz), plus Zeiger-Kästen an P-A/P-B/P-C selbst. Die
   Bausteine sind so geschnitten, dass sie einen **Formwechsel
   überleben** (AA-2 ist Zielbild).
5. **§ 6a.6 — `VK-O2` als Klauselentwurf** (fünf Absätze), mit
   **sichtbarem Firmierungs-Platzhalter** `<FIRMIERUNG — F-7 OFFEN,
   MKT-MARKE>`; Rechtsfolge bei Verstoß bewusst als Zulieferungsbedarf
   offen. **§ 6a.7 — Gate-Kette `GA-1…GA-4`** vor dem Angebotsausgang;
   K-1 als **Zeiger**, keine Zweitfassung.
6. **Drei Nachträge aus einer Stelle, die weder Bau noch Prüfer gelesen
   hatten** (§ 3.2 des Rohbelegs, Z. 209–265, nach dem Prüfer-Hinweis
   selbst nachgelesen): die **`### Termination`-Klausel** (Heilung
   binnen 30 Tagen, rückwirkend — mildert die Härte von `GA-1`,
   **mit** der Grenze der Entwarnung und der nicht heilbaren
   Wiederholung); der **L-3-Wortlaut**, der F-18 am Primärtext auflöst
   (§ 3.6 stuft richtig ein, § 3.4 schießt über); die
   **„You"/„Use"-Definitionen**, die die F-17-Reparatur am Primärtext
   belegen.

**Verifikation (Zählwege an den Zahlen):**
- **Gegen den Rundenstart `4b84693`: 0 Löschungen** — kein
  Bestandstext angetastet, kein überstimmter Satz geglättet
  (`git diff --numstat`, jede gelöschte Zeile einzeln gezählt).
  *(Die Löschungen gegen `a57977a` sind ausschließlich eigene
  Reparaturen an eigenem Text derselben Runde.)*
- **Markdown-Struktur:** 19 Tabellen / 121 Zeilen / **0** Spalten-
  Abweichungen; **Positivkontrolle schlägt an** (künstlich zerlegte
  Zeile → 1 Treffer). Kein `|` in einer Tabellenzelle.
- **Selbstwiderspruchs-Probe nach den Reparaturen erneut gelaufen**
  (L-26: eine Probe, die eine Reparatur auslöst, ist danach veraltet) —
  **ein Restbefund selbst gefunden und behoben** (Superlativ ohne Quelle
  im Satz).
- **Keine Zahl, keine Höhe, keine Frist, kein Prozentsatz neu erfunden.**

### Prüfer — Disposition kategorienweise MIT NENNER

Ein unabhängiger Prüfer, frischer Kontext, eingefrorener Stand
`a57977a`, Bericht: `protokolle/R15-B-pruefer.md` (960 Zeilen).
**18 Befunde: 2 schwer · 8 mittel · 8 Hinweis — 18 von 18 disponiert,
18 repariert, 0 verworfen, 0 ohne Träger offen.**

| Kategorie | Gegenstand | Befunde | disponiert |
|---|---|---|---|
| K-A | Was ist aus der Quelle nicht angekommen? | 3 (F-2, F-9, F-18) | 3 repariert |
| K-B | Firmierungs-Behauptungen (F-7) | 1 (F-8) | 1 repariert |
| K-C | Preis-/Höhen-Vorwegnahme | 1 (F-10, mittelbar) | 1 repariert |
| K-D | Zahlen und Zählwege | 1 (F-3) | 1 repariert |
| K-E | Zitattreue | 1 (F-12) | 1 repariert |
| K-F | Entwarnungen und Belegstufen | 4 (F-1, F-6, F-7, F-16) | 4 repariert |
| K-G | Vollständigkeit der Verankerung | **0** | — |
| K-H | Dubletten / Kurz-ID-Kollisionen | 2 (F-4, F-5) | 2 repariert |
| K-I | Struktur / Rendering | 1 (F-15) | 1 repariert |

**Die beiden schweren — beide von R15-B am ROHBELEG selbst nachgemessen
(L-42), beide bestätigt, beide Korrekturen in die unbequemere
Richtung:**
- **F-1:** Der Vorbehalt der Quelle „**alle Stufe E**" (§ 3.6 Z. 445 f.)
  war verloren; der Spaltenkopf machte aus der **Klausel**-Stufe die
  **Auflagen**-Stufe, wodurch AU-1/AU-4 sich als lizenztextfest lasen.
  Kopf korrigiert, Vorfassung sichtbar. *(Klasse: beim Kopieren einer
  Tabelle sind die ZELLEN byte-treu und der KOPF umformuliert — der
  Vorbehalt fällt dort, wo geschrieben statt kopiert wird.)*
- **F-2:** „die **einzige** Pflicht, die den KUNDEN trifft" ist
  widerlegt. Rohbeleg § 3.4 (**Stufe A**): „Der **Kunde** — und wir beim
  Aufsetzen — dürfen ‚licensing, copyright, or other notices' nicht
  entfernen oder verdecken." Drei Superlative gestrichen (**zwei davon
  aus dem R14-A-Nachtrag übernommen, ohne sie am Rohbeleg zu prüfen** —
  genau die Quellen-zweiter-Hand-Klasse, vor der der eigene Auftrag
  warnt), und **`VK-O2` fehlte deshalb eine Klausel**: neuer Absatz (3)
  mit der Hinweis-Erhaltungspflicht des Kunden, Herkunft (L-3, nicht
  O-2) getrennt ausgewiesen. **Das war eine Sachlücke im
  Vertragsentwurf, nicht nur eine falsche Überschrift.**

**Lauf-Status des Prüfers — fünf Punkte ausdrücklich NICHT geprüft**
(einzeln ausgewiesen, nicht zu „keine Auffälligkeit" geglättet):
1. `quellen-n8n-lizenz/README.md` nur gegreppt, nicht am Stück gelesen
   (die SHA-256-Werte hat er stattdessen **selbst gemessen**).
2. **Kein Renderer gelaufen** — geprüft ist „strukturell konsistent",
   nicht „rendert korrekt".
3. Ob n8n seine FAQ seit dem 13.08. geändert hat: **nicht erhoben**.
4. **~640 der 1454 Rohbeleg-Zeilen ungelesen** (§ 2, § 3.1–3.3, § 5,
   Teil 2). ⚠️ **Teilweise geschlossen:** R15-B hat § 3.2 daraufhin
   selbst gelesen — mit drei Funden (Block 1 Punkt 6). **§ 2, § 3.1,
   § 3.3, § 5 und Teil 2 bleiben ungelesen.**
5. Keine Rechtsaussagen — weder vom Prüfer noch von dieser Session.

---

## Block 2 — Offen geblieben

1. 🔴 **Die Gate-Kette `GA-1…GA-4` ist ein VORSCHLAG, keine geltende
   Sperre.** Im Bestand war nur **K-1** an den Angebotsausgang gebunden;
   die Bündelung der vier Vorbehalte zu einer Sperre ist eine Festlegung
   dieser Session und **gehört dem User/der Leitsession vorgelegt** — sie
   verschiebt den Angebotsausgang faktisch bis F-7 und bis zum
   Architektur-Entscheid. **Das berührt das Ziel „erster Abschluss bis
   Mitte November" und ist eine User-Entscheidung, keine
   Redaktionsfrage.**
2. **AU-2 in der RECHNUNG hat keinen Träger.** Angebot und Vertrag
   liegen hier bzw. bei Z-1…Z-7; das Rechnungswesen bei keinem von
   beiden.
3. **`VK-O2` Absatz (5) — Rechtsfolge bei Verstoß** (Freistellung,
   Anpassungs-/Kündigungsrecht, Haftung): Vertragsarbeit, **Z-1…Z-7**.
4. **`ON-L` fehlt im ausführenden Prozess.** Der B1-Aufgabenkatalog
   (`preismodell-optionen.md` § 4.2 Z. 421) und die manuelle
   Einspiel-Folge der Blueprint-README führen **keinen**
   Lizenzübergabe-Schritt (Zählweg: „Lizenz" in der B1-Zeile → 0,
   Positivkontrolle „Credentials" → 2). **Ein Schritt, den nur das
   Angebot kennt und der Prozess nicht, erzeugt keinen Nachweis.**
5. **`LICENSE_EE.md` bei reiner Community-Installation:** Der Rohbeleg
   verlangt beide Dateien, sagt aber nicht, ob die EE-Datei dort
   mitgeht. Gehört in denselben Klärweg wie **K-1** (O-4).
6. **Fassungsidentität `LICENSE_EE.md`:** für die Instanzversion 2.10.4
   **nicht erhoben** (kein versions-getaggter Abzug im Haus) — für
   `LICENSE.md` ist sie byte-gleich belegt.
7. **Zahl der ON-L-Vorgänge je Kunde offen**, weil der
   **Architektur-Entscheid** offen ist (Auslöse-Einheit ist die
   **Instanz**, nicht das Haus).
8. **Rohbeleg-Restlektüre** (Block 1, Lauf-Status Punkt 4).
9. **Modell-Statuszeile R15-B** (Kopf dieses Protokolls).

---

## Block 3 — Nebenbefunde außerhalb des Auftrags

| Nr. | Befund | Zielort |
|---|---|---|
| **R15B-N-1** | **Rohbeleg-Zählfehler, zwei Fundstellen:** § 3.6-Überschrift **und** -Einleitungssatz sagen „**drei** Auflagen" bei **vier** Tabellenzeilen; § 3.8-Formulierungsvorschlag endet mit „AU-1…**AU-3**". **Verschärft R14A-N-1** — die Fehlklasse sitzt an mindestens **drei** Stellen desselben Papiers | heypensio-Leitsession, über die MKT-Leitsession |
| **R15B-N-2** | **Rohbeleg-interner Belegstufen-Widerspruch:** § 3.4 stuft das Rebranding-Verbot als **A** ein, § 3.6 als **B**. **Am Primärtext aufgelöst:** L-3 verbietet Verändern/Entfernen/Verdecken von Hinweisen und stellt Markennutzung unter das anwendbare Recht — **ein Rebranding-Verbot steht dort nicht**. § 3.6 stuft richtig ein, **§ 3.4 schießt über** | dito |
| **R15B-N-3** | **Rohbeleg-Posten O-12 (Gewährleistungs-Reichweite) ist im gesamten MKT-Repo nie angekommen.** Zählweg: `grep -ric "Gewährleistungs-Asymmetrie"` über alle `*.md` → **0**; Positivkontrolle mit Nachbar-Posten derselben Quelle: `Lizenzserver-Ping` (O-11) → **9** Dateien. Berührt unmittelbar die Support-Position aus § 6a.3 | **Z-1…Z-7** (Zentrale/StB) — als Zeile in § 6a.8 aufgenommen |
| **R15B-N-4** | **Die O-2-Superlative stehen unverändert in zwei Fremd-Dokumenten** (`preismodell-optionen.md` § 5.3-Nachtrag; § 6-Nachtrag dieses Dokuments) — durch Rohbeleg § 3.4 widerlegt. **Beide außerhalb des R15-B-Scopes** | Leitsession (Quellen-Nachzug) |
| **R15B-N-5** | **Kurz-ID-Kollision quer über Repos:** Der Rohbeleg führt ein **eigenes `O-9`** („Betriebsregel AU-4 festhalten") — im MKT-Repo ist `O-9` die **DSGVO-Kompatibilitätsprüfung** (Art. 6 Abs. 4). Gleiches Muster wie die von R15-C erhobenen Kollisionen, aber **repo-übergreifend**, also für ein Grep im eigenen Repo unsichtbar | R15-C / Leitsession |
| **R15B-N-6** | **`G-1…G-4` waren im eigenen Repo bereits vergeben** (Prüfer-Befund-IDs R02-A/R03-A/R04-A, **ohne Rundenpräfix** in `beleg/baseline-messplan.md` und `beleg/vorlagen/interviewleitfaden-baseline.md` gewandert). Hier durch `GA-1…GA-4` gelöst — **der Bestand bleibt** eine Kollisionsquelle für jede künftige `G-n`-Vergabe | R15-C / Leitsession |
| **R15B-N-7** | **Fehler im eigenen Auftragsprompt, an der Quelle korrigiert:** Der Tagesplan schreibt „die Vertriebsseite ‚all paid plans'" — richtig ist: „all paid plans" steht in der **OEM-Doku**, „a regular Enterprise license" auf der **Vertriebsseite**. Nicht übernommen, sondern gemessen | Leitsession (Prompt-Bestand) |

---

## Block 4 — Stolpersteine und bewährte Muster

### Fallen (was schiefging)

1. **⭐ Der Vorbehalt fällt in der TABELLEN-ÜBERSCHRIFT, nicht in den
   Zellen.** Beim Kopieren einer Quell-Tabelle werden die **Zellen**
   byte-treu übernommen und der **Kopf** neu formuliert — genau dort ging
   „alle Stufe E" verloren (F-1). Die Verdichtungs-Regel („Vorbehalt
   zuerst übernehmen, dann den Satz bauen") ist bisher auf Fließtext
   gemünzt; **sie gilt für Tabellenköpfe genauso, und dort ist sie
   unauffälliger**, weil daneben lauter byte-treue Zellen stehen.
2. **⭐ Eine Quelle zweiter Hand aus dem EIGENEN Haus wird genauso
   ungeprüft übernommen wie eine fremde — besonders, wenn sie einen
   SUPERLATIV trägt.** Zwei der drei gestrichenen Superlative stammten
   aus dem R14-A-Nachtrag desselben Dokuments; der eigene Auftrag
   verlangte ausdrücklich die Rohbeleg-Gegenprüfung, und sie ist bei
   AU-1…AU-4 gelaufen — **aber nicht bei dem Satz ÜBER O-2**, weil er
   nicht wie ein Zitat aussah, sondern wie eine Einordnung (F-2).
   Merksatz: **Der Superlativ ist die Stelle, an der die Quelle geprüft
   gehört, nicht der Anführungsstrich.**
3. **Kurz-ID vergeben, ohne vorher zu greppen** (F-5) — vierte
   Reproduktion der L-35-Klasse. Verschärfend: **Der billigste Suchraum
   wäre die eigene Nachbardatei gewesen.**
4. **Die Positivkontrolle war falsch gezählt und prüfte die falsche
   Mechanik** (F-3): gezählt wurde nur im Zielabschnitt statt im
   genannten Suchraum, und ein **Einzel-Token** kontrollierte einen
   **Phrasen**-Nulltreffer. Der zweite Treffer war ausgerechnet die
   Zeile, die derselbe Abschnitt 30 Zeilen höher selbst zitiert.
5. **⭐ Die Entwarnung über die EIGENE HANDLUNG** (F-7): „Das ist eine
   Feststellung des Bestands, keine neue Sperre dieser Session" —
   während zwei Absätze darüber steht, dass die Kette der neue Schritt
   ist. Diese Form entlastet nicht die Sache, sondern die Session vom
   Vorwurf, im Alleingang festgelegt zu haben, **und sie ist deshalb
   schwerer zu bemerken als eine sachliche Entwarnung.**
6. **Das Spiegelbild der Entwarnung: die VERBOTS-Behauptung** (F-10).
   „verstößt gegen die Auflage" / „wäre lizenzwidrig" fühlt sich sicher
   an, **weil es streng ist**, und entgeht deshalb der
   Belegstufen-Prüfung, die jede entlastende Aussage durchläuft — in
   einem Abschnitt, der sonst sorgfältig ④ markiert.
7. **Werkzeug:** Heredoc im Bash-Kanal frisst Backslashes — sowohl in
   Windows-Pfaden (`C:\Users\…` → unbrauchbar) als auch in JS-Regex
   (`!=='\'` → Syntaxfehler). **Skriptdateien mit dem Write-Tool
   anlegen**, nicht per Heredoc; Pfade relativ mit Forward-Slashes.
   *(Bekannte Regel, hier zweimal hintereinander real getroffen.)*
   Python ist auf diesem Rechner **nicht** verfügbar.

### Bewährte Muster (was trug)

1. **⭐⭐ Die „nicht prüfbar"-Liste des Prüfers als ARBEITSAUFTRAG lesen,
   nicht als Einschränkung.** Der Prüfer wies § 3.2 als ungelesen aus
   **und sagte voraus, dass dort weitere Belegstufen-Differenzen liegen
   könnten**. Genau dort lagen drei Funde: die `Termination`-Klausel
   (mildert ein Gate), der L-3-Wortlaut (löst F-18 am Primärtext auf)
   und die „You"/„Use"-Definitionen (belegen F-17). **Der Prüfer hat
   damit mehr geliefert als seine 18 Befunde — sein Eingeständnis war
   die produktivste Zeile des Berichts.**
2. **Die tragende Sach-Angabe des eigenen Prompts messen statt
   übernehmen** — der Prompt ordnete ein Zitat der falschen Quelle zu
   (R15B-N-7); an der Quelle korrigiert.
3. **Den Auftrag über seinen Wortlaut hinaus prüfen, wenn die Quelle es
   verlangt:** Beauftragt waren AU-2 und AU-4; die Zwischenquelle stellt
   **alle vier** Auflagen in Angebot/Vertrag/Onboarding. **4 von 4
   geprüft** — und zwei davon lieferten gerade **kein** Textergebnis, was
   die Zählung erst zu einer Zählung macht.
4. **Reparaturen sichtbar statt still:** Jede Korrektur trägt, was
   vorher dastand und warum es fiel. **0 Löschungen gegen den
   Rundenstart** ist der mechanische Beleg dafür.
5. **Nach den Reparaturen die eigene Probe ERNEUT laufen lassen**
   (L-26) — sie fand einen Restbefund, den der Prüfer nicht gemeldet
   hatte.
6. **Zwei Nenner statt einem bei der Löschungszählung:** gegen den
   **Rundenstart** (0 — der aussagekräftige) und gegen den
   **Bau-Commit** (45 — ausschließlich eigene Reparaturen). Ein
   einzelner Nenner hätte hier entweder Arbeit verschwiegen oder
   Löschungen an fremdem Text suggeriert.
