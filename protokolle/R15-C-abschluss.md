# R15-C — Abschluss Lucky Roux: Wächter-Reichweite + Hygiene

**Session:** R15-C · **Rolle:** Lucky Roux · **Datum:** 14.08.2026
**Scope geschrieben:** `akquise/pruefe-zitate.js`,
`akquise/selbsttest-zitate.md`, dieses Protokoll. Die geprüften Dokumente
und der Wahrheits-Kanal wurden nicht angefasst.

## 1. Gebaut und verifiziert

### 1.1 Prüfstände und Baseline

Der vorgeschriebene `git pull --ff-only` lief real und meldete „Already up
to date". Die **Baseline vor meinem Edit** ist
`4b846935d09130c294e82ba9d2bf94fbf9c3621f`. An diesem Commit liefen beide
alten Strecken real, Ausgabe jeweils in eine Datei umgeleitet und vollständig
gelesen:

| Lauf an `4b84693` | Exit | Ergebnis |
|---|---:|---|
| Hauptlauf vor R15-C | **0** | ZIEL 2 · POOL 8 · 144 Zitate · 25/25 Ausnahmen (26 Fundstellen) · **118/118 bestätigt** · Blockzitate 3/3 + Gegenproben 3/3 · MUSS 11/11 · Gegenrichtung 3/3 |
| Selbsttest vor R15-C | **0** | **8 extrahiert / 4 bestätigt / 4 gemeldet** |

Der Wächter-Code ist im Commit **`2d9680c`** eingefroren. Der Erstlauf unten
verwendet exakt diesen Code gegen die aus Git rekonstruierte Datenfassung
`4b84693`; dadurch kann kein paralleler Arbeitsbaum-Edit in die Fundzahl
rutschen.

### 1.2 Reichweite

**ZIEL wurde von 2 auf 6 erweitert:**

1. `akquise/akquiseplan.md`
2. `akquise/listenbau-regelwerk.md`
3. `akquise/interessenabwaegung-o8.md` **(neu)**
4. `fund/wettbewerbsbild.md` **(neu)**
5. `handel/kanal-rechtsmatrix.md` **(neu als ZIEL, war schon POOL)**
6. `handel/angebotsarchitektur.md` **(neu)**

**POOL wurde von 8 auf 11 erweitert:** neu sind
`akquise/interessenabwaegung-o8.md`, `fund/wettbewerbsbild.md` und
`handel/preismodell-optionen.md`. Jeder neue POOL-Kanal hat einen eigenen
`MUSS`-Anker; Endstand **14/14**. Für Dateien, die zugleich ZIEL und POOL
sind, wird der eigene Pool-Anteil beim Vergleich entfernt. Ohne diesen
Selbstausschluss würde eine Datei jedes eigene Zitat selbst bestätigen.

Der Ablauf-Schnitt ist absichtlich enger als „alle Markdown-Dateien": Er
deckt die vier im Prompt bezeichneten lebenden Arbeitsdokumente ab. Auf
`4b84693` lagen **113** versionierte `.md`-Dateien vor; nur **14** stehen nach
dem Ausbau in `ZIEL ∪ POOL`, **99** werden vom Wächter weiterhin gar nicht
gelesen. Der generische Vorabscan fand unter dem exakten Wächter-Muster in
100 Dateien außerhalb der alten Listen Treffer; nach dem Ausbau bleiben
**96 solche Dateien außerhalb**. Historische Protokolle wurden nicht
pauschal zu ZIEL erklärt, weil der zu sichernde Ablauf sie nicht fortschreibt.

### 1.3 Selbsttest in beide Richtungen

Für jedes neue ZIEL-Dokument gibt es eine eigene Positivzeile T5–T8 und eine
eigene Gegenzeile F5–F8. Realer Lauf mit Code `2d9680c`:

| Prüfstrecke | Ergebnis |
|---|---|
| Syntax | `node --check akquise/pruefe-zitate.js` → Exit **0** |
| Selbsttest | Exit **0** · **16 extrahiert / 8 bestätigt / 8 gemeldet** |
| Zeilenenden-Gegenprobe | derselbe Grenzfall unter LF und CRLF → **invariant: JA** |
| POOL-Kanäle | **14/14 MUSS** (je neuem Kanal eigener Anker) |
| allgemeine Gegenrichtung | **3/3** darf nicht treffen |
| feste Blockzitate | **3/3 bestätigt**, Rückbau-Gegenproben **3/3** |

Der irreführende Selbsttest-Hinweis auf „verwaiste" produktive Ausnahmen
wurde entfernt: Verwaisung wird nur noch im Hauptlauf über die echten
Zieldokumente beurteilt.

### 1.4 Eingefrorener Erstlauf — erwartbar ROT

**Code:** `2d9680c` · **Daten:**
`4b846935d09130c294e82ba9d2bf94fbf9c3621f` · **Hauptlauf Exit: 1
(erwartet)**. Das vollständige Log hat **871 Zeilen / 100.300 Bytes** und
wurde bis zum letzten Block gelesen.

| Zieldatei | geprüft | bestätigt | eigene | Erstfunde |
|---|---:|---:|---:|---:|
| `akquise/akquiseplan.md` | 29 | 25 | 4 | **0** |
| `akquise/listenbau-regelwerk.md` | 114 | 101 | 13 | **0** |
| `akquise/interessenabwaegung-o8.md` | 143 | 30 | 0 | **113** |
| `fund/wettbewerbsbild.md` | 494 | 27 | 0 | **467** |
| `handel/kanal-rechtsmatrix.md` | 168 | 24 | 0 | **144** |
| `handel/angebotsarchitektur.md` | 104 | 22 | 0 | **82** |
| **Summe** | **1.052** | **229** | **17 Fundstellen / 16 Einträge** | **806** |

Zählweg für den Nenner: je Datei `git show 4b84693:<datei> | rg -U -o
--json '„([^"„]{25,})"'` und **Summe aller `data.submatches`** (nicht
Zeilen, nicht `grep -c`) = 29 + 114 + 143 + 494 + 168 + 104 = **1.052**.
Zählweg Erstfunde: jede vollständige Logzeile mit
`^[<repo-pfad>:<zeile>] ` einzeln gezählt = **806**; Gegenprobe:
113 + 467 + 144 + 82 = **806**.

### 1.5 Wandernder Messstand je Datei

Der spätere Daten-Commit `2d9680c` enthält zusätzlich **R15-B**
(`a57977a`) und **R15-E** (`5f9930b`). Der aus genau diesem Commit
rekonstruierte Lauf liefert **1.085 geprüft / 237 bestätigt / 17 eigene /
831 Erstfunde**, Hauptlauf Exit 1, Selbsttest Exit 0. Das Delta ist je Datei
zugeordnet:

- `handel/angebotsarchitektur.md` (R15-B): **104 → 136 geprüft,
  22 → 29 bestätigt, 82 → 107 Erstfunde**; also **+32 / +7 / +25**.
- `akquise/listenbau-regelwerk.md` (R15-E): **114 → 115 geprüft,
  101 → 102 bestätigt, 0 → 0 Erstfunde**; also **+1 / +1 / 0**.
- Die anderen vier Zieldateien sind in ihren Laufzahlen unverändert.

`handel/anwalts-briefing-2026-08.md` (R15-A) war in `4b84693` und
`2d9680c` noch nicht versioniert. Die in R15-E neu entstandenen Dateien
`akquise/sperrdatei-struktur.md` und `akquise/wellenprotokoll-vorlage.md`
existieren in `2d9680c`, stehen aber nicht in ZIEL oder POOL. Alle drei sind
**nicht im eingefrorenen Erst-Prüfstand enthalten** und werden in keine
n-von-n-Reichweitenaussage eingerechnet.

### 1.6 Erst-Fundmenge — 806 von 806 einzeln disponiert

Disposition gilt für **jede** folgende Zeile: **ungewertet an die
Leitsession zurück**. R15-C entscheidet weder „echtes Fehlzitat" noch
„eigene Formulierung" und hebt die Baseline nicht an. Fundstelle ist immer
`datei:Startzeile#Zitatordinal-auf-der-Zeile` in Datenstand `4b84693`.

#### O-8 — 113 Zeilen

```text
R15C-F0001 | akquise/interessenabwaegung-o8.md:63#1
R15C-F0002 | akquise/interessenabwaegung-o8.md:68#1
R15C-F0003 | akquise/interessenabwaegung-o8.md:70#1
R15C-F0004 | akquise/interessenabwaegung-o8.md:114#1
R15C-F0005 | akquise/interessenabwaegung-o8.md:123#1
R15C-F0006 | akquise/interessenabwaegung-o8.md:132#1
R15C-F0007 | akquise/interessenabwaegung-o8.md:150#1
R15C-F0008 | akquise/interessenabwaegung-o8.md:152#1
R15C-F0009 | akquise/interessenabwaegung-o8.md:219#1
R15C-F0010 | akquise/interessenabwaegung-o8.md:228#1
R15C-F0011 | akquise/interessenabwaegung-o8.md:248#1
R15C-F0012 | akquise/interessenabwaegung-o8.md:254#1
R15C-F0013 | akquise/interessenabwaegung-o8.md:270#1
R15C-F0014 | akquise/interessenabwaegung-o8.md:277#1
R15C-F0015 | akquise/interessenabwaegung-o8.md:283#1
R15C-F0016 | akquise/interessenabwaegung-o8.md:286#1
R15C-F0017 | akquise/interessenabwaegung-o8.md:287#1
R15C-F0018 | akquise/interessenabwaegung-o8.md:292#1
R15C-F0019 | akquise/interessenabwaegung-o8.md:299#1
R15C-F0020 | akquise/interessenabwaegung-o8.md:314#1
R15C-F0021 | akquise/interessenabwaegung-o8.md:326#1
R15C-F0022 | akquise/interessenabwaegung-o8.md:336#1
R15C-F0023 | akquise/interessenabwaegung-o8.md:361#1
R15C-F0024 | akquise/interessenabwaegung-o8.md:368#1
R15C-F0025 | akquise/interessenabwaegung-o8.md:388#1
R15C-F0026 | akquise/interessenabwaegung-o8.md:389#1
R15C-F0027 | akquise/interessenabwaegung-o8.md:390#1
R15C-F0028 | akquise/interessenabwaegung-o8.md:391#1
R15C-F0029 | akquise/interessenabwaegung-o8.md:391#2
R15C-F0030 | akquise/interessenabwaegung-o8.md:392#1
R15C-F0031 | akquise/interessenabwaegung-o8.md:392#2
R15C-F0032 | akquise/interessenabwaegung-o8.md:393#1
R15C-F0033 | akquise/interessenabwaegung-o8.md:393#2
R15C-F0034 | akquise/interessenabwaegung-o8.md:393#3
R15C-F0035 | akquise/interessenabwaegung-o8.md:400#1
R15C-F0036 | akquise/interessenabwaegung-o8.md:401#1
R15C-F0037 | akquise/interessenabwaegung-o8.md:401#2
R15C-F0038 | akquise/interessenabwaegung-o8.md:402#1
R15C-F0039 | akquise/interessenabwaegung-o8.md:403#1
R15C-F0040 | akquise/interessenabwaegung-o8.md:404#1
R15C-F0041 | akquise/interessenabwaegung-o8.md:405#1
R15C-F0042 | akquise/interessenabwaegung-o8.md:405#2
R15C-F0043 | akquise/interessenabwaegung-o8.md:406#1
R15C-F0044 | akquise/interessenabwaegung-o8.md:407#1
R15C-F0045 | akquise/interessenabwaegung-o8.md:407#2
R15C-F0046 | akquise/interessenabwaegung-o8.md:408#1
R15C-F0047 | akquise/interessenabwaegung-o8.md:415#1
R15C-F0048 | akquise/interessenabwaegung-o8.md:416#1
R15C-F0049 | akquise/interessenabwaegung-o8.md:425#1
R15C-F0050 | akquise/interessenabwaegung-o8.md:425#2
R15C-F0051 | akquise/interessenabwaegung-o8.md:434#1
R15C-F0052 | akquise/interessenabwaegung-o8.md:435#1
R15C-F0053 | akquise/interessenabwaegung-o8.md:436#1
R15C-F0054 | akquise/interessenabwaegung-o8.md:454#1
R15C-F0055 | akquise/interessenabwaegung-o8.md:464#1
R15C-F0056 | akquise/interessenabwaegung-o8.md:496#1
R15C-F0057 | akquise/interessenabwaegung-o8.md:526#1
R15C-F0058 | akquise/interessenabwaegung-o8.md:532#1
R15C-F0059 | akquise/interessenabwaegung-o8.md:539#1
R15C-F0060 | akquise/interessenabwaegung-o8.md:582#1
R15C-F0061 | akquise/interessenabwaegung-o8.md:586#1
R15C-F0062 | akquise/interessenabwaegung-o8.md:587#1
R15C-F0063 | akquise/interessenabwaegung-o8.md:668#1
R15C-F0064 | akquise/interessenabwaegung-o8.md:675#1
R15C-F0065 | akquise/interessenabwaegung-o8.md:678#1
R15C-F0066 | akquise/interessenabwaegung-o8.md:690#1
R15C-F0067 | akquise/interessenabwaegung-o8.md:693#1
R15C-F0068 | akquise/interessenabwaegung-o8.md:703#1
R15C-F0069 | akquise/interessenabwaegung-o8.md:741#1
R15C-F0070 | akquise/interessenabwaegung-o8.md:755#1
R15C-F0071 | akquise/interessenabwaegung-o8.md:764#1
R15C-F0072 | akquise/interessenabwaegung-o8.md:768#1
R15C-F0073 | akquise/interessenabwaegung-o8.md:773#1
R15C-F0074 | akquise/interessenabwaegung-o8.md:776#1
R15C-F0075 | akquise/interessenabwaegung-o8.md:782#1
R15C-F0076 | akquise/interessenabwaegung-o8.md:787#1
R15C-F0077 | akquise/interessenabwaegung-o8.md:792#1
R15C-F0078 | akquise/interessenabwaegung-o8.md:795#1
R15C-F0079 | akquise/interessenabwaegung-o8.md:800#1
R15C-F0080 | akquise/interessenabwaegung-o8.md:803#1
R15C-F0081 | akquise/interessenabwaegung-o8.md:811#1
R15C-F0082 | akquise/interessenabwaegung-o8.md:839#1
R15C-F0083 | akquise/interessenabwaegung-o8.md:855#1
R15C-F0084 | akquise/interessenabwaegung-o8.md:858#1
R15C-F0085 | akquise/interessenabwaegung-o8.md:869#1
R15C-F0086 | akquise/interessenabwaegung-o8.md:883#1
R15C-F0087 | akquise/interessenabwaegung-o8.md:891#1
R15C-F0088 | akquise/interessenabwaegung-o8.md:897#1
R15C-F0089 | akquise/interessenabwaegung-o8.md:905#1
R15C-F0090 | akquise/interessenabwaegung-o8.md:915#1
R15C-F0091 | akquise/interessenabwaegung-o8.md:917#1
R15C-F0092 | akquise/interessenabwaegung-o8.md:922#1
R15C-F0093 | akquise/interessenabwaegung-o8.md:928#1
R15C-F0094 | akquise/interessenabwaegung-o8.md:933#1
R15C-F0095 | akquise/interessenabwaegung-o8.md:965#1
R15C-F0096 | akquise/interessenabwaegung-o8.md:981#1
R15C-F0097 | akquise/interessenabwaegung-o8.md:981#2
R15C-F0098 | akquise/interessenabwaegung-o8.md:982#1
R15C-F0099 | akquise/interessenabwaegung-o8.md:983#1
R15C-F0100 | akquise/interessenabwaegung-o8.md:983#2
R15C-F0101 | akquise/interessenabwaegung-o8.md:984#1
R15C-F0102 | akquise/interessenabwaegung-o8.md:985#1
R15C-F0103 | akquise/interessenabwaegung-o8.md:987#1
R15C-F0104 | akquise/interessenabwaegung-o8.md:987#2
R15C-F0105 | akquise/interessenabwaegung-o8.md:987#3
R15C-F0106 | akquise/interessenabwaegung-o8.md:1013#1
R15C-F0107 | akquise/interessenabwaegung-o8.md:1058#1
R15C-F0108 | akquise/interessenabwaegung-o8.md:1075#1
R15C-F0109 | akquise/interessenabwaegung-o8.md:1096#1
R15C-F0110 | akquise/interessenabwaegung-o8.md:1107#1
R15C-F0111 | akquise/interessenabwaegung-o8.md:1114#1
R15C-F0112 | akquise/interessenabwaegung-o8.md:1213#1
R15C-F0113 | akquise/interessenabwaegung-o8.md:1217#1
```

#### Wettbewerbsbild — 467 Zeilen

```text
R15C-F0114 | fund/wettbewerbsbild.md:11#1
R15C-F0115 | fund/wettbewerbsbild.md:15#1
R15C-F0116 | fund/wettbewerbsbild.md:22#1
R15C-F0117 | fund/wettbewerbsbild.md:48#1
R15C-F0118 | fund/wettbewerbsbild.md:80#1
R15C-F0119 | fund/wettbewerbsbild.md:80#2
R15C-F0120 | fund/wettbewerbsbild.md:96#1
R15C-F0121 | fund/wettbewerbsbild.md:179#1
R15C-F0122 | fund/wettbewerbsbild.md:183#1
R15C-F0123 | fund/wettbewerbsbild.md:184#1
R15C-F0124 | fund/wettbewerbsbild.md:191#1
R15C-F0125 | fund/wettbewerbsbild.md:216#1
R15C-F0126 | fund/wettbewerbsbild.md:220#1
R15C-F0127 | fund/wettbewerbsbild.md:221#1
R15C-F0128 | fund/wettbewerbsbild.md:272#1
R15C-F0129 | fund/wettbewerbsbild.md:274#1
R15C-F0130 | fund/wettbewerbsbild.md:281#1
R15C-F0131 | fund/wettbewerbsbild.md:282#1
R15C-F0132 | fund/wettbewerbsbild.md:285#1
R15C-F0133 | fund/wettbewerbsbild.md:300#1
R15C-F0134 | fund/wettbewerbsbild.md:303#1
R15C-F0135 | fund/wettbewerbsbild.md:343#1
R15C-F0136 | fund/wettbewerbsbild.md:361#1
R15C-F0137 | fund/wettbewerbsbild.md:362#1
R15C-F0138 | fund/wettbewerbsbild.md:362#2
R15C-F0139 | fund/wettbewerbsbild.md:365#1
R15C-F0140 | fund/wettbewerbsbild.md:365#2
R15C-F0141 | fund/wettbewerbsbild.md:366#1
R15C-F0142 | fund/wettbewerbsbild.md:368#1
R15C-F0143 | fund/wettbewerbsbild.md:370#1
R15C-F0144 | fund/wettbewerbsbild.md:378#1
R15C-F0145 | fund/wettbewerbsbild.md:382#1
R15C-F0146 | fund/wettbewerbsbild.md:386#1
R15C-F0147 | fund/wettbewerbsbild.md:404#1
R15C-F0148 | fund/wettbewerbsbild.md:406#1
R15C-F0149 | fund/wettbewerbsbild.md:409#1
R15C-F0150 | fund/wettbewerbsbild.md:413#1
R15C-F0151 | fund/wettbewerbsbild.md:418#1
R15C-F0152 | fund/wettbewerbsbild.md:423#1
R15C-F0153 | fund/wettbewerbsbild.md:448#1
R15C-F0154 | fund/wettbewerbsbild.md:464#1
R15C-F0155 | fund/wettbewerbsbild.md:465#1
R15C-F0156 | fund/wettbewerbsbild.md:479#1
R15C-F0157 | fund/wettbewerbsbild.md:484#1
R15C-F0158 | fund/wettbewerbsbild.md:486#1
R15C-F0159 | fund/wettbewerbsbild.md:489#1
R15C-F0160 | fund/wettbewerbsbild.md:510#1
R15C-F0161 | fund/wettbewerbsbild.md:544#1
R15C-F0162 | fund/wettbewerbsbild.md:544#2
R15C-F0163 | fund/wettbewerbsbild.md:545#1
R15C-F0164 | fund/wettbewerbsbild.md:546#1
R15C-F0165 | fund/wettbewerbsbild.md:547#1
R15C-F0166 | fund/wettbewerbsbild.md:548#1
R15C-F0167 | fund/wettbewerbsbild.md:548#2
R15C-F0168 | fund/wettbewerbsbild.md:549#1
R15C-F0169 | fund/wettbewerbsbild.md:549#2
R15C-F0170 | fund/wettbewerbsbild.md:549#3
R15C-F0171 | fund/wettbewerbsbild.md:550#1
R15C-F0172 | fund/wettbewerbsbild.md:550#2
R15C-F0173 | fund/wettbewerbsbild.md:567#1
R15C-F0174 | fund/wettbewerbsbild.md:573#1
R15C-F0175 | fund/wettbewerbsbild.md:577#1
R15C-F0176 | fund/wettbewerbsbild.md:583#1
R15C-F0177 | fund/wettbewerbsbild.md:599#1
R15C-F0178 | fund/wettbewerbsbild.md:605#1
R15C-F0179 | fund/wettbewerbsbild.md:608#1
R15C-F0180 | fund/wettbewerbsbild.md:621#1
R15C-F0181 | fund/wettbewerbsbild.md:628#1
R15C-F0182 | fund/wettbewerbsbild.md:641#1
R15C-F0183 | fund/wettbewerbsbild.md:646#1
R15C-F0184 | fund/wettbewerbsbild.md:651#1
R15C-F0185 | fund/wettbewerbsbild.md:652#1
R15C-F0186 | fund/wettbewerbsbild.md:653#1
R15C-F0187 | fund/wettbewerbsbild.md:654#1
R15C-F0188 | fund/wettbewerbsbild.md:655#1
R15C-F0189 | fund/wettbewerbsbild.md:656#1
R15C-F0190 | fund/wettbewerbsbild.md:679#1
R15C-F0191 | fund/wettbewerbsbild.md:684#1
R15C-F0192 | fund/wettbewerbsbild.md:686#1
R15C-F0193 | fund/wettbewerbsbild.md:689#1
R15C-F0194 | fund/wettbewerbsbild.md:699#1
R15C-F0195 | fund/wettbewerbsbild.md:700#1
R15C-F0196 | fund/wettbewerbsbild.md:701#1
R15C-F0197 | fund/wettbewerbsbild.md:702#1
R15C-F0198 | fund/wettbewerbsbild.md:704#1
R15C-F0199 | fund/wettbewerbsbild.md:709#1
R15C-F0200 | fund/wettbewerbsbild.md:709#2
R15C-F0201 | fund/wettbewerbsbild.md:724#1
R15C-F0202 | fund/wettbewerbsbild.md:731#1
R15C-F0203 | fund/wettbewerbsbild.md:731#2
R15C-F0204 | fund/wettbewerbsbild.md:732#1
R15C-F0205 | fund/wettbewerbsbild.md:735#1
R15C-F0206 | fund/wettbewerbsbild.md:741#1
R15C-F0207 | fund/wettbewerbsbild.md:745#1
R15C-F0208 | fund/wettbewerbsbild.md:748#1
R15C-F0209 | fund/wettbewerbsbild.md:786#1
R15C-F0210 | fund/wettbewerbsbild.md:794#1
R15C-F0211 | fund/wettbewerbsbild.md:806#1
R15C-F0212 | fund/wettbewerbsbild.md:809#1
R15C-F0213 | fund/wettbewerbsbild.md:812#1
R15C-F0214 | fund/wettbewerbsbild.md:812#2
R15C-F0215 | fund/wettbewerbsbild.md:866#1
R15C-F0216 | fund/wettbewerbsbild.md:892#1
R15C-F0217 | fund/wettbewerbsbild.md:896#1
R15C-F0218 | fund/wettbewerbsbild.md:911#1
R15C-F0219 | fund/wettbewerbsbild.md:930#1
R15C-F0220 | fund/wettbewerbsbild.md:960#1
R15C-F0221 | fund/wettbewerbsbild.md:962#1
R15C-F0222 | fund/wettbewerbsbild.md:987#1
R15C-F0223 | fund/wettbewerbsbild.md:1000#1
R15C-F0224 | fund/wettbewerbsbild.md:1011#1
R15C-F0225 | fund/wettbewerbsbild.md:1011#2
R15C-F0226 | fund/wettbewerbsbild.md:1029#1
R15C-F0227 | fund/wettbewerbsbild.md:1031#1
R15C-F0228 | fund/wettbewerbsbild.md:1043#1
R15C-F0229 | fund/wettbewerbsbild.md:1052#1
R15C-F0230 | fund/wettbewerbsbild.md:1055#1
R15C-F0231 | fund/wettbewerbsbild.md:1056#1
R15C-F0232 | fund/wettbewerbsbild.md:1057#1
R15C-F0233 | fund/wettbewerbsbild.md:1072#1
R15C-F0234 | fund/wettbewerbsbild.md:1073#1
R15C-F0235 | fund/wettbewerbsbild.md:1088#1
R15C-F0236 | fund/wettbewerbsbild.md:1107#1
R15C-F0237 | fund/wettbewerbsbild.md:1118#1
R15C-F0238 | fund/wettbewerbsbild.md:1120#1
R15C-F0239 | fund/wettbewerbsbild.md:1123#1
R15C-F0240 | fund/wettbewerbsbild.md:1138#1
R15C-F0241 | fund/wettbewerbsbild.md:1144#1
R15C-F0242 | fund/wettbewerbsbild.md:1151#1
R15C-F0243 | fund/wettbewerbsbild.md:1155#1
R15C-F0244 | fund/wettbewerbsbild.md:1162#1
R15C-F0245 | fund/wettbewerbsbild.md:1169#1
R15C-F0246 | fund/wettbewerbsbild.md:1178#1
R15C-F0247 | fund/wettbewerbsbild.md:1179#1
R15C-F0248 | fund/wettbewerbsbild.md:1186#1
R15C-F0249 | fund/wettbewerbsbild.md:1246#1
R15C-F0250 | fund/wettbewerbsbild.md:1247#1
R15C-F0251 | fund/wettbewerbsbild.md:1260#1
R15C-F0252 | fund/wettbewerbsbild.md:1301#1
R15C-F0253 | fund/wettbewerbsbild.md:1315#1
R15C-F0254 | fund/wettbewerbsbild.md:1335#1
R15C-F0255 | fund/wettbewerbsbild.md:1337#1
R15C-F0256 | fund/wettbewerbsbild.md:1338#1
R15C-F0257 | fund/wettbewerbsbild.md:1340#1
R15C-F0258 | fund/wettbewerbsbild.md:1344#1
R15C-F0259 | fund/wettbewerbsbild.md:1348#1
R15C-F0260 | fund/wettbewerbsbild.md:1369#1
R15C-F0261 | fund/wettbewerbsbild.md:1372#1
R15C-F0262 | fund/wettbewerbsbild.md:1372#2
R15C-F0263 | fund/wettbewerbsbild.md:1373#1
R15C-F0264 | fund/wettbewerbsbild.md:1374#1
R15C-F0265 | fund/wettbewerbsbild.md:1378#1
R15C-F0266 | fund/wettbewerbsbild.md:1381#1
R15C-F0267 | fund/wettbewerbsbild.md:1383#1
R15C-F0268 | fund/wettbewerbsbild.md:1395#1
R15C-F0269 | fund/wettbewerbsbild.md:1399#1
R15C-F0270 | fund/wettbewerbsbild.md:1401#1
R15C-F0271 | fund/wettbewerbsbild.md:1401#2
R15C-F0272 | fund/wettbewerbsbild.md:1401#3
R15C-F0273 | fund/wettbewerbsbild.md:1409#1
R15C-F0274 | fund/wettbewerbsbild.md:1410#1
R15C-F0275 | fund/wettbewerbsbild.md:1425#1
R15C-F0276 | fund/wettbewerbsbild.md:1486#1
R15C-F0277 | fund/wettbewerbsbild.md:1515#1
R15C-F0278 | fund/wettbewerbsbild.md:1525#1
R15C-F0279 | fund/wettbewerbsbild.md:1532#1
R15C-F0280 | fund/wettbewerbsbild.md:1590#1
R15C-F0281 | fund/wettbewerbsbild.md:1608#1
R15C-F0282 | fund/wettbewerbsbild.md:1645#1
R15C-F0283 | fund/wettbewerbsbild.md:1654#1
R15C-F0284 | fund/wettbewerbsbild.md:1656#1
R15C-F0285 | fund/wettbewerbsbild.md:1666#1
R15C-F0286 | fund/wettbewerbsbild.md:1681#1
R15C-F0287 | fund/wettbewerbsbild.md:1737#1
R15C-F0288 | fund/wettbewerbsbild.md:1765#1
R15C-F0289 | fund/wettbewerbsbild.md:1767#1
R15C-F0290 | fund/wettbewerbsbild.md:1771#1
R15C-F0291 | fund/wettbewerbsbild.md:1772#1
R15C-F0292 | fund/wettbewerbsbild.md:1772#2
R15C-F0293 | fund/wettbewerbsbild.md:1773#1
R15C-F0294 | fund/wettbewerbsbild.md:1805#1
R15C-F0295 | fund/wettbewerbsbild.md:1813#1
R15C-F0296 | fund/wettbewerbsbild.md:1814#1
R15C-F0297 | fund/wettbewerbsbild.md:1815#1
R15C-F0298 | fund/wettbewerbsbild.md:1815#2
R15C-F0299 | fund/wettbewerbsbild.md:1818#1
R15C-F0300 | fund/wettbewerbsbild.md:1819#1
R15C-F0301 | fund/wettbewerbsbild.md:1826#1
R15C-F0302 | fund/wettbewerbsbild.md:1832#1
R15C-F0303 | fund/wettbewerbsbild.md:1837#1
R15C-F0304 | fund/wettbewerbsbild.md:1840#1
R15C-F0305 | fund/wettbewerbsbild.md:1841#1
R15C-F0306 | fund/wettbewerbsbild.md:1842#1
R15C-F0307 | fund/wettbewerbsbild.md:1843#1
R15C-F0308 | fund/wettbewerbsbild.md:1849#1
R15C-F0309 | fund/wettbewerbsbild.md:1851#1
R15C-F0310 | fund/wettbewerbsbild.md:1853#1
R15C-F0311 | fund/wettbewerbsbild.md:1854#1
R15C-F0312 | fund/wettbewerbsbild.md:1855#1
R15C-F0313 | fund/wettbewerbsbild.md:1857#1
R15C-F0315 | fund/wettbewerbsbild.md:1876#1
R15C-F0316 | fund/wettbewerbsbild.md:1898#1
R15C-F0317 | fund/wettbewerbsbild.md:1906#1
R15C-F0318 | fund/wettbewerbsbild.md:1911#1
R15C-F0319 | fund/wettbewerbsbild.md:1913#1
R15C-F0320 | fund/wettbewerbsbild.md:1914#1
R15C-F0321 | fund/wettbewerbsbild.md:1918#1
R15C-F0322 | fund/wettbewerbsbild.md:1921#1
R15C-F0323 | fund/wettbewerbsbild.md:1924#1
R15C-F0324 | fund/wettbewerbsbild.md:1926#1
R15C-F0325 | fund/wettbewerbsbild.md:1941#1
R15C-F0326 | fund/wettbewerbsbild.md:1957#1
R15C-F0327 | fund/wettbewerbsbild.md:1963#1
R15C-F0328 | fund/wettbewerbsbild.md:1968#1
R15C-F0329 | fund/wettbewerbsbild.md:1978#1
R15C-F0330 | fund/wettbewerbsbild.md:1980#1
R15C-F0331 | fund/wettbewerbsbild.md:1980#2
R15C-F0332 | fund/wettbewerbsbild.md:2017#1
R15C-F0333 | fund/wettbewerbsbild.md:2026#1
R15C-F0334 | fund/wettbewerbsbild.md:2029#1
R15C-F0335 | fund/wettbewerbsbild.md:2031#1
R15C-F0336 | fund/wettbewerbsbild.md:2040#1
R15C-F0337 | fund/wettbewerbsbild.md:2068#1
R15C-F0338 | fund/wettbewerbsbild.md:2096#1
R15C-F0339 | fund/wettbewerbsbild.md:2097#1
R15C-F0340 | fund/wettbewerbsbild.md:2098#1
R15C-F0341 | fund/wettbewerbsbild.md:2128#1
R15C-F0342 | fund/wettbewerbsbild.md:2133#1
R15C-F0343 | fund/wettbewerbsbild.md:2139#1
R15C-F0344 | fund/wettbewerbsbild.md:2148#1
R15C-F0345 | fund/wettbewerbsbild.md:2153#1
R15C-F0346 | fund/wettbewerbsbild.md:2158#1
R15C-F0347 | fund/wettbewerbsbild.md:2160#1
R15C-F0348 | fund/wettbewerbsbild.md:2165#1
R15C-F0349 | fund/wettbewerbsbild.md:2167#1
R15C-F0350 | fund/wettbewerbsbild.md:2177#1
R15C-F0351 | fund/wettbewerbsbild.md:2182#1
R15C-F0352 | fund/wettbewerbsbild.md:2186#1
R15C-F0354 | fund/wettbewerbsbild.md:2195#1
R15C-F0355 | fund/wettbewerbsbild.md:2201#1
R15C-F0356 | fund/wettbewerbsbild.md:2202#1
R15C-F0358 | fund/wettbewerbsbild.md:2205#1
R15C-F0359 | fund/wettbewerbsbild.md:2210#1
R15C-F0360 | fund/wettbewerbsbild.md:2227#1
R15C-F0361 | fund/wettbewerbsbild.md:2233#1
R15C-F0362 | fund/wettbewerbsbild.md:2236#1
R15C-F0363 | fund/wettbewerbsbild.md:2238#1
R15C-F0364 | fund/wettbewerbsbild.md:2243#1
R15C-F0365 | fund/wettbewerbsbild.md:2244#1
R15C-F0366 | fund/wettbewerbsbild.md:2246#1
R15C-F0367 | fund/wettbewerbsbild.md:2253#1
R15C-F0368 | fund/wettbewerbsbild.md:2257#1
R15C-F0369 | fund/wettbewerbsbild.md:2263#1
R15C-F0370 | fund/wettbewerbsbild.md:2277#1
R15C-F0371 | fund/wettbewerbsbild.md:2281#1
R15C-F0372 | fund/wettbewerbsbild.md:2282#1
R15C-F0373 | fund/wettbewerbsbild.md:2285#1
R15C-F0374 | fund/wettbewerbsbild.md:2317#1
R15C-F0375 | fund/wettbewerbsbild.md:2345#1
R15C-F0376 | fund/wettbewerbsbild.md:2363#1
R15C-F0377 | fund/wettbewerbsbild.md:2371#1
R15C-F0378 | fund/wettbewerbsbild.md:2376#1
R15C-F0379 | fund/wettbewerbsbild.md:2380#1
R15C-F0380 | fund/wettbewerbsbild.md:2396#1
R15C-F0381 | fund/wettbewerbsbild.md:2398#1
R15C-F0382 | fund/wettbewerbsbild.md:2400#1
R15C-F0383 | fund/wettbewerbsbild.md:2422#1
R15C-F0384 | fund/wettbewerbsbild.md:2445#1
R15C-F0385 | fund/wettbewerbsbild.md:2446#1
R15C-F0386 | fund/wettbewerbsbild.md:2451#1
R15C-F0387 | fund/wettbewerbsbild.md:2473#1
R15C-F0388 | fund/wettbewerbsbild.md:2500#1
R15C-F0389 | fund/wettbewerbsbild.md:2502#1
R15C-F0390 | fund/wettbewerbsbild.md:2507#1
R15C-F0391 | fund/wettbewerbsbild.md:2519#1
R15C-F0392 | fund/wettbewerbsbild.md:2521#1
R15C-F0393 | fund/wettbewerbsbild.md:2524#1
R15C-F0394 | fund/wettbewerbsbild.md:2533#1
R15C-F0395 | fund/wettbewerbsbild.md:2536#1
R15C-F0396 | fund/wettbewerbsbild.md:2542#1
R15C-F0397 | fund/wettbewerbsbild.md:2546#1
R15C-F0398 | fund/wettbewerbsbild.md:2570#1
R15C-F0399 | fund/wettbewerbsbild.md:2574#1
R15C-F0400 | fund/wettbewerbsbild.md:2584#1
R15C-F0401 | fund/wettbewerbsbild.md:2586#1
R15C-F0402 | fund/wettbewerbsbild.md:2588#1
R15C-F0403 | fund/wettbewerbsbild.md:2595#1
R15C-F0404 | fund/wettbewerbsbild.md:2604#1
R15C-F0405 | fund/wettbewerbsbild.md:2605#1
R15C-F0406 | fund/wettbewerbsbild.md:2605#2
R15C-F0407 | fund/wettbewerbsbild.md:2617#1
R15C-F0408 | fund/wettbewerbsbild.md:2620#1
R15C-F0409 | fund/wettbewerbsbild.md:2624#1
R15C-F0410 | fund/wettbewerbsbild.md:2633#1
R15C-F0411 | fund/wettbewerbsbild.md:2648#1
R15C-F0412 | fund/wettbewerbsbild.md:2651#1
R15C-F0413 | fund/wettbewerbsbild.md:2652#1
R15C-F0414 | fund/wettbewerbsbild.md:2652#2
R15C-F0415 | fund/wettbewerbsbild.md:2657#1
R15C-F0416 | fund/wettbewerbsbild.md:2661#1
R15C-F0417 | fund/wettbewerbsbild.md:2663#1
R15C-F0418 | fund/wettbewerbsbild.md:2664#1
R15C-F0419 | fund/wettbewerbsbild.md:2670#1
R15C-F0420 | fund/wettbewerbsbild.md:2693#1
R15C-F0421 | fund/wettbewerbsbild.md:2694#1
R15C-F0422 | fund/wettbewerbsbild.md:2695#1
R15C-F0423 | fund/wettbewerbsbild.md:2697#1
R15C-F0424 | fund/wettbewerbsbild.md:2703#1
R15C-F0425 | fund/wettbewerbsbild.md:2713#1
R15C-F0426 | fund/wettbewerbsbild.md:2726#1
R15C-F0427 | fund/wettbewerbsbild.md:2748#1
R15C-F0428 | fund/wettbewerbsbild.md:2749#1
R15C-F0429 | fund/wettbewerbsbild.md:2750#1
R15C-F0430 | fund/wettbewerbsbild.md:2751#1
R15C-F0431 | fund/wettbewerbsbild.md:2752#1
R15C-F0432 | fund/wettbewerbsbild.md:2753#1
R15C-F0433 | fund/wettbewerbsbild.md:2754#1
R15C-F0434 | fund/wettbewerbsbild.md:2755#1
R15C-F0435 | fund/wettbewerbsbild.md:2756#1
R15C-F0436 | fund/wettbewerbsbild.md:2781#1
R15C-F0437 | fund/wettbewerbsbild.md:2801#1
R15C-F0438 | fund/wettbewerbsbild.md:2803#1
R15C-F0439 | fund/wettbewerbsbild.md:2804#1
R15C-F0440 | fund/wettbewerbsbild.md:2817#1
R15C-F0441 | fund/wettbewerbsbild.md:2820#1
R15C-F0442 | fund/wettbewerbsbild.md:2821#1
R15C-F0443 | fund/wettbewerbsbild.md:2825#1
R15C-F0444 | fund/wettbewerbsbild.md:2829#1
R15C-F0445 | fund/wettbewerbsbild.md:2829#2
R15C-F0446 | fund/wettbewerbsbild.md:2841#1
R15C-F0447 | fund/wettbewerbsbild.md:2850#1
R15C-F0448 | fund/wettbewerbsbild.md:2863#1
R15C-F0449 | fund/wettbewerbsbild.md:2866#1
R15C-F0450 | fund/wettbewerbsbild.md:2882#1
R15C-F0451 | fund/wettbewerbsbild.md:2884#1
R15C-F0452 | fund/wettbewerbsbild.md:2889#1
R15C-F0453 | fund/wettbewerbsbild.md:2890#1
R15C-F0454 | fund/wettbewerbsbild.md:2893#1
R15C-F0455 | fund/wettbewerbsbild.md:2893#2
R15C-F0456 | fund/wettbewerbsbild.md:2906#1
R15C-F0457 | fund/wettbewerbsbild.md:2908#1
R15C-F0458 | fund/wettbewerbsbild.md:2915#1
R15C-F0459 | fund/wettbewerbsbild.md:2922#1
R15C-F0460 | fund/wettbewerbsbild.md:2923#1
R15C-F0461 | fund/wettbewerbsbild.md:2932#1
R15C-F0462 | fund/wettbewerbsbild.md:2960#1
R15C-F0463 | fund/wettbewerbsbild.md:2966#1
R15C-F0464 | fund/wettbewerbsbild.md:2974#1
R15C-F0465 | fund/wettbewerbsbild.md:2974#2
R15C-F0466 | fund/wettbewerbsbild.md:2987#1
R15C-F0467 | fund/wettbewerbsbild.md:3022#1
R15C-F0468 | fund/wettbewerbsbild.md:3024#1
R15C-F0469 | fund/wettbewerbsbild.md:3027#1
R15C-F0470 | fund/wettbewerbsbild.md:3036#1
R15C-F0471 | fund/wettbewerbsbild.md:3048#1
R15C-F0472 | fund/wettbewerbsbild.md:3060#1
R15C-F0473 | fund/wettbewerbsbild.md:3064#1
R15C-F0474 | fund/wettbewerbsbild.md:3065#1
R15C-F0475 | fund/wettbewerbsbild.md:3065#2
R15C-F0476 | fund/wettbewerbsbild.md:3072#1
R15C-F0477 | fund/wettbewerbsbild.md:3080#1
R15C-F0478 | fund/wettbewerbsbild.md:3099#1
R15C-F0479 | fund/wettbewerbsbild.md:3107#1
R15C-F0480 | fund/wettbewerbsbild.md:3111#1
R15C-F0481 | fund/wettbewerbsbild.md:3111#2
R15C-F0482 | fund/wettbewerbsbild.md:3115#1
R15C-F0483 | fund/wettbewerbsbild.md:3116#1
R15C-F0484 | fund/wettbewerbsbild.md:3119#1
R15C-F0486 | fund/wettbewerbsbild.md:3134#1
R15C-F0487 | fund/wettbewerbsbild.md:3136#1
R15C-F0488 | fund/wettbewerbsbild.md:3148#1
R15C-F0489 | fund/wettbewerbsbild.md:3158#1
R15C-F0490 | fund/wettbewerbsbild.md:3167#1
R15C-F0491 | fund/wettbewerbsbild.md:3168#1
R15C-F0492 | fund/wettbewerbsbild.md:3182#1
R15C-F0493 | fund/wettbewerbsbild.md:3183#1
R15C-F0494 | fund/wettbewerbsbild.md:3187#1
R15C-F0495 | fund/wettbewerbsbild.md:3195#1
R15C-F0496 | fund/wettbewerbsbild.md:3205#1
R15C-F0497 | fund/wettbewerbsbild.md:3234#1
R15C-F0498 | fund/wettbewerbsbild.md:3236#1
R15C-F0499 | fund/wettbewerbsbild.md:3240#1
R15C-F0500 | fund/wettbewerbsbild.md:3246#1
R15C-F0501 | fund/wettbewerbsbild.md:3256#1
R15C-F0502 | fund/wettbewerbsbild.md:3264#1
R15C-F0503 | fund/wettbewerbsbild.md:3268#1
R15C-F0504 | fund/wettbewerbsbild.md:3274#1
R15C-F0505 | fund/wettbewerbsbild.md:3278#1
R15C-F0506 | fund/wettbewerbsbild.md:3284#1
R15C-F0507 | fund/wettbewerbsbild.md:3291#1
R15C-F0508 | fund/wettbewerbsbild.md:3294#1
R15C-F0509 | fund/wettbewerbsbild.md:3298#1
R15C-F0510 | fund/wettbewerbsbild.md:3311#1
R15C-F0511 | fund/wettbewerbsbild.md:3316#1
R15C-F0512 | fund/wettbewerbsbild.md:3342#1
R15C-F0513 | fund/wettbewerbsbild.md:3353#1
R15C-F0514 | fund/wettbewerbsbild.md:3375#1
R15C-F0515 | fund/wettbewerbsbild.md:3375#2
R15C-F0516 | fund/wettbewerbsbild.md:3377#1
R15C-F0517 | fund/wettbewerbsbild.md:3382#1
R15C-F0518 | fund/wettbewerbsbild.md:3386#1
R15C-F0519 | fund/wettbewerbsbild.md:3398#1
R15C-F0520 | fund/wettbewerbsbild.md:3417#1
R15C-F0521 | fund/wettbewerbsbild.md:3422#1
R15C-F0522 | fund/wettbewerbsbild.md:3436#1
R15C-F0523 | fund/wettbewerbsbild.md:3445#1
R15C-F0524 | fund/wettbewerbsbild.md:3470#1
R15C-F0525 | fund/wettbewerbsbild.md:3551#1
R15C-F0526 | fund/wettbewerbsbild.md:3553#1
R15C-F0527 | fund/wettbewerbsbild.md:3557#1
R15C-F0528 | fund/wettbewerbsbild.md:3563#1
R15C-F0529 | fund/wettbewerbsbild.md:3571#1
R15C-F0530 | fund/wettbewerbsbild.md:3571#2
R15C-F0531 | fund/wettbewerbsbild.md:3572#1
R15C-F0532 | fund/wettbewerbsbild.md:3572#2
R15C-F0533 | fund/wettbewerbsbild.md:3572#3
R15C-F0534 | fund/wettbewerbsbild.md:3573#1
R15C-F0535 | fund/wettbewerbsbild.md:3574#1
R15C-F0536 | fund/wettbewerbsbild.md:3577#1
R15C-F0537 | fund/wettbewerbsbild.md:3579#1
R15C-F0538 | fund/wettbewerbsbild.md:3585#1
R15C-F0539 | fund/wettbewerbsbild.md:3618#1
R15C-F0540 | fund/wettbewerbsbild.md:3618#2
R15C-F0541 | fund/wettbewerbsbild.md:3633#1
R15C-F0542 | fund/wettbewerbsbild.md:3634#1
R15C-F0543 | fund/wettbewerbsbild.md:3660#1
R15C-F0544 | fund/wettbewerbsbild.md:3661#1
R15C-F0545 | fund/wettbewerbsbild.md:3667#1
R15C-F0546 | fund/wettbewerbsbild.md:3669#1
R15C-F0547 | fund/wettbewerbsbild.md:3671#1
R15C-F0548 | fund/wettbewerbsbild.md:3680#1
R15C-F0549 | fund/wettbewerbsbild.md:3696#1
R15C-F0550 | fund/wettbewerbsbild.md:3714#1
R15C-F0551 | fund/wettbewerbsbild.md:3727#1
R15C-F0552 | fund/wettbewerbsbild.md:3736#1
R15C-F0553 | fund/wettbewerbsbild.md:3741#1
R15C-F0554 | fund/wettbewerbsbild.md:3750#1
R15C-F0555 | fund/wettbewerbsbild.md:3760#1
R15C-F0556 | fund/wettbewerbsbild.md:3760#2
R15C-F0557 | fund/wettbewerbsbild.md:3764#1
R15C-F0558 | fund/wettbewerbsbild.md:3775#1
R15C-F0559 | fund/wettbewerbsbild.md:3792#1
R15C-F0560 | fund/wettbewerbsbild.md:3800#1
R15C-F0561 | fund/wettbewerbsbild.md:3801#1
R15C-F0562 | fund/wettbewerbsbild.md:3802#1
R15C-F0563 | fund/wettbewerbsbild.md:3830#1
R15C-F0564 | fund/wettbewerbsbild.md:3830#2
R15C-F0565 | fund/wettbewerbsbild.md:3831#1
R15C-F0566 | fund/wettbewerbsbild.md:3856#1
R15C-F0567 | fund/wettbewerbsbild.md:3882#1
R15C-F0568 | fund/wettbewerbsbild.md:3892#1
R15C-F0569 | fund/wettbewerbsbild.md:3894#1
R15C-F0570 | fund/wettbewerbsbild.md:3908#1
R15C-F0571 | fund/wettbewerbsbild.md:3942#1
R15C-F0572 | fund/wettbewerbsbild.md:3942#2
R15C-F0573 | fund/wettbewerbsbild.md:3943#1
R15C-F0574 | fund/wettbewerbsbild.md:3944#1
R15C-F0575 | fund/wettbewerbsbild.md:3946#1
R15C-F0576 | fund/wettbewerbsbild.md:3948#1
R15C-F0577 | fund/wettbewerbsbild.md:3949#1
R15C-F0578 | fund/wettbewerbsbild.md:3950#1
R15C-F0579 | fund/wettbewerbsbild.md:3951#1
R15C-F0580 | fund/wettbewerbsbild.md:3952#1
R15C-F0581 | fund/wettbewerbsbild.md:3952#2
R15C-F0582 | fund/wettbewerbsbild.md:3992#1
R15C-F0583 | fund/wettbewerbsbild.md:3999#1
R15C-F0584 | fund/wettbewerbsbild.md:4058#1
```

#### Rechtsmatrix — 144 Zeilen

```text
R15C-F0585 | handel/kanal-rechtsmatrix.md:103#1
R15C-F0586 | handel/kanal-rechtsmatrix.md:107#1
R15C-F0587 | handel/kanal-rechtsmatrix.md:181#1
R15C-F0588 | handel/kanal-rechtsmatrix.md:182#1
R15C-F0589 | handel/kanal-rechtsmatrix.md:211#1
R15C-F0590 | handel/kanal-rechtsmatrix.md:217#1
R15C-F0591 | handel/kanal-rechtsmatrix.md:226#1
R15C-F0592 | handel/kanal-rechtsmatrix.md:228#1
R15C-F0593 | handel/kanal-rechtsmatrix.md:228#2
R15C-F0594 | handel/kanal-rechtsmatrix.md:228#3
R15C-F0595 | handel/kanal-rechtsmatrix.md:234#1
R15C-F0596 | handel/kanal-rechtsmatrix.md:234#2
R15C-F0597 | handel/kanal-rechtsmatrix.md:236#1
R15C-F0598 | handel/kanal-rechtsmatrix.md:242#1
R15C-F0599 | handel/kanal-rechtsmatrix.md:249#1
R15C-F0600 | handel/kanal-rechtsmatrix.md:255#1
R15C-F0601 | handel/kanal-rechtsmatrix.md:259#1
R15C-F0602 | handel/kanal-rechtsmatrix.md:276#1
R15C-F0603 | handel/kanal-rechtsmatrix.md:278#1
R15C-F0604 | handel/kanal-rechtsmatrix.md:278#2
R15C-F0605 | handel/kanal-rechtsmatrix.md:278#3
R15C-F0606 | handel/kanal-rechtsmatrix.md:282#1
R15C-F0607 | handel/kanal-rechtsmatrix.md:284#1
R15C-F0608 | handel/kanal-rechtsmatrix.md:286#1
R15C-F0609 | handel/kanal-rechtsmatrix.md:286#2
R15C-F0610 | handel/kanal-rechtsmatrix.md:289#1
R15C-F0611 | handel/kanal-rechtsmatrix.md:290#1
R15C-F0612 | handel/kanal-rechtsmatrix.md:292#1
R15C-F0613 | handel/kanal-rechtsmatrix.md:296#1
R15C-F0614 | handel/kanal-rechtsmatrix.md:304#1
R15C-F0615 | handel/kanal-rechtsmatrix.md:304#2
R15C-F0616 | handel/kanal-rechtsmatrix.md:306#1
R15C-F0617 | handel/kanal-rechtsmatrix.md:306#2
R15C-F0618 | handel/kanal-rechtsmatrix.md:310#1
R15C-F0619 | handel/kanal-rechtsmatrix.md:315#1
R15C-F0620 | handel/kanal-rechtsmatrix.md:316#1
R15C-F0621 | handel/kanal-rechtsmatrix.md:333#1
R15C-F0622 | handel/kanal-rechtsmatrix.md:335#1
R15C-F0623 | handel/kanal-rechtsmatrix.md:335#2
R15C-F0624 | handel/kanal-rechtsmatrix.md:339#1
R15C-F0625 | handel/kanal-rechtsmatrix.md:341#1
R15C-F0626 | handel/kanal-rechtsmatrix.md:347#1
R15C-F0627 | handel/kanal-rechtsmatrix.md:349#1
R15C-F0628 | handel/kanal-rechtsmatrix.md:351#1
R15C-F0629 | handel/kanal-rechtsmatrix.md:351#2
R15C-F0630 | handel/kanal-rechtsmatrix.md:353#1
R15C-F0631 | handel/kanal-rechtsmatrix.md:355#1
R15C-F0632 | handel/kanal-rechtsmatrix.md:359#1
R15C-F0633 | handel/kanal-rechtsmatrix.md:361#1
R15C-F0634 | handel/kanal-rechtsmatrix.md:371#1
R15C-F0635 | handel/kanal-rechtsmatrix.md:373#1
R15C-F0636 | handel/kanal-rechtsmatrix.md:373#2
R15C-F0637 | handel/kanal-rechtsmatrix.md:394#1
R15C-F0638 | handel/kanal-rechtsmatrix.md:401#1
R15C-F0639 | handel/kanal-rechtsmatrix.md:402#1
R15C-F0640 | handel/kanal-rechtsmatrix.md:404#1
R15C-F0641 | handel/kanal-rechtsmatrix.md:404#2
R15C-F0642 | handel/kanal-rechtsmatrix.md:408#1
R15C-F0643 | handel/kanal-rechtsmatrix.md:432#1
R15C-F0644 | handel/kanal-rechtsmatrix.md:438#1
R15C-F0645 | handel/kanal-rechtsmatrix.md:438#2
R15C-F0646 | handel/kanal-rechtsmatrix.md:439#1
R15C-F0647 | handel/kanal-rechtsmatrix.md:439#2
R15C-F0648 | handel/kanal-rechtsmatrix.md:441#1
R15C-F0649 | handel/kanal-rechtsmatrix.md:445#1
R15C-F0650 | handel/kanal-rechtsmatrix.md:475#1
R15C-F0651 | handel/kanal-rechtsmatrix.md:503#1
R15C-F0652 | handel/kanal-rechtsmatrix.md:504#1
R15C-F0653 | handel/kanal-rechtsmatrix.md:505#1
R15C-F0654 | handel/kanal-rechtsmatrix.md:510#1
R15C-F0655 | handel/kanal-rechtsmatrix.md:520#1
R15C-F0656 | handel/kanal-rechtsmatrix.md:522#1
R15C-F0657 | handel/kanal-rechtsmatrix.md:528#1
R15C-F0658 | handel/kanal-rechtsmatrix.md:528#2
R15C-F0659 | handel/kanal-rechtsmatrix.md:530#1
R15C-F0660 | handel/kanal-rechtsmatrix.md:546#1
R15C-F0661 | handel/kanal-rechtsmatrix.md:548#1
R15C-F0662 | handel/kanal-rechtsmatrix.md:548#2
R15C-F0663 | handel/kanal-rechtsmatrix.md:550#1
R15C-F0664 | handel/kanal-rechtsmatrix.md:554#1
R15C-F0665 | handel/kanal-rechtsmatrix.md:556#1
R15C-F0666 | handel/kanal-rechtsmatrix.md:558#1
R15C-F0667 | handel/kanal-rechtsmatrix.md:564#1
R15C-F0668 | handel/kanal-rechtsmatrix.md:568#1
R15C-F0669 | handel/kanal-rechtsmatrix.md:581#1
R15C-F0670 | handel/kanal-rechtsmatrix.md:607#1
R15C-F0671 | handel/kanal-rechtsmatrix.md:609#1
R15C-F0672 | handel/kanal-rechtsmatrix.md:611#1
R15C-F0673 | handel/kanal-rechtsmatrix.md:613#1
R15C-F0674 | handel/kanal-rechtsmatrix.md:619#1
R15C-F0675 | handel/kanal-rechtsmatrix.md:629#1
R15C-F0676 | handel/kanal-rechtsmatrix.md:657#1
R15C-F0677 | handel/kanal-rechtsmatrix.md:657#2
R15C-F0678 | handel/kanal-rechtsmatrix.md:658#1
R15C-F0679 | handel/kanal-rechtsmatrix.md:659#1
R15C-F0680 | handel/kanal-rechtsmatrix.md:659#2
R15C-F0681 | handel/kanal-rechtsmatrix.md:674#1
R15C-F0682 | handel/kanal-rechtsmatrix.md:676#1
R15C-F0683 | handel/kanal-rechtsmatrix.md:678#1
R15C-F0684 | handel/kanal-rechtsmatrix.md:686#1
R15C-F0685 | handel/kanal-rechtsmatrix.md:698#1
R15C-F0686 | handel/kanal-rechtsmatrix.md:708#1
R15C-F0687 | handel/kanal-rechtsmatrix.md:716#1
R15C-F0688 | handel/kanal-rechtsmatrix.md:717#1
R15C-F0689 | handel/kanal-rechtsmatrix.md:743#1
R15C-F0690 | handel/kanal-rechtsmatrix.md:747#1
R15C-F0691 | handel/kanal-rechtsmatrix.md:749#1
R15C-F0692 | handel/kanal-rechtsmatrix.md:751#1
R15C-F0693 | handel/kanal-rechtsmatrix.md:753#1
R15C-F0694 | handel/kanal-rechtsmatrix.md:765#1
R15C-F0695 | handel/kanal-rechtsmatrix.md:774#1
R15C-F0696 | handel/kanal-rechtsmatrix.md:775#1
R15C-F0697 | handel/kanal-rechtsmatrix.md:775#2
R15C-F0698 | handel/kanal-rechtsmatrix.md:776#1
R15C-F0699 | handel/kanal-rechtsmatrix.md:777#1
R15C-F0700 | handel/kanal-rechtsmatrix.md:778#1
R15C-F0701 | handel/kanal-rechtsmatrix.md:779#1
R15C-F0702 | handel/kanal-rechtsmatrix.md:780#1
R15C-F0703 | handel/kanal-rechtsmatrix.md:803#1
R15C-F0704 | handel/kanal-rechtsmatrix.md:827#1
R15C-F0705 | handel/kanal-rechtsmatrix.md:858#1
R15C-F0706 | handel/kanal-rechtsmatrix.md:873#1
R15C-F0707 | handel/kanal-rechtsmatrix.md:877#1
R15C-F0708 | handel/kanal-rechtsmatrix.md:878#1
R15C-F0709 | handel/kanal-rechtsmatrix.md:879#1
R15C-F0710 | handel/kanal-rechtsmatrix.md:883#1
R15C-F0711 | handel/kanal-rechtsmatrix.md:887#1
R15C-F0712 | handel/kanal-rechtsmatrix.md:891#1
R15C-F0713 | handel/kanal-rechtsmatrix.md:891#2
R15C-F0714 | handel/kanal-rechtsmatrix.md:895#1
R15C-F0715 | handel/kanal-rechtsmatrix.md:896#1
R15C-F0716 | handel/kanal-rechtsmatrix.md:899#1
R15C-F0717 | handel/kanal-rechtsmatrix.md:903#1
R15C-F0718 | handel/kanal-rechtsmatrix.md:905#1
R15C-F0719 | handel/kanal-rechtsmatrix.md:920#1
R15C-F0720 | handel/kanal-rechtsmatrix.md:938#1
R15C-F0721 | handel/kanal-rechtsmatrix.md:938#2
R15C-F0722 | handel/kanal-rechtsmatrix.md:979#1
R15C-F0723 | handel/kanal-rechtsmatrix.md:981#1
R15C-F0724 | handel/kanal-rechtsmatrix.md:983#1
R15C-F0725 | handel/kanal-rechtsmatrix.md:983#2
R15C-F0726 | handel/kanal-rechtsmatrix.md:1053#1
R15C-F0727 | handel/kanal-rechtsmatrix.md:1097#1
R15C-F0728 | handel/kanal-rechtsmatrix.md:1119#1
```

#### Angebotsarchitektur — 82 Zeilen

```text
R15C-F0729 | handel/angebotsarchitektur.md:21#1
R15C-F0730 | handel/angebotsarchitektur.md:40#1
R15C-F0731 | handel/angebotsarchitektur.md:43#1
R15C-F0732 | handel/angebotsarchitektur.md:51#1
R15C-F0733 | handel/angebotsarchitektur.md:80#1
R15C-F0734 | handel/angebotsarchitektur.md:82#1
R15C-F0735 | handel/angebotsarchitektur.md:88#1
R15C-F0736 | handel/angebotsarchitektur.md:95#1
R15C-F0737 | handel/angebotsarchitektur.md:97#1
R15C-F0738 | handel/angebotsarchitektur.md:106#1
R15C-F0739 | handel/angebotsarchitektur.md:111#1
R15C-F0740 | handel/angebotsarchitektur.md:123#1
R15C-F0741 | handel/angebotsarchitektur.md:124#1
R15C-F0742 | handel/angebotsarchitektur.md:124#2
R15C-F0743 | handel/angebotsarchitektur.md:145#1
R15C-F0744 | handel/angebotsarchitektur.md:146#1
R15C-F0745 | handel/angebotsarchitektur.md:153#1
R15C-F0746 | handel/angebotsarchitektur.md:155#1
R15C-F0747 | handel/angebotsarchitektur.md:188#1
R15C-F0748 | handel/angebotsarchitektur.md:212#1
R15C-F0749 | handel/angebotsarchitektur.md:214#1
R15C-F0750 | handel/angebotsarchitektur.md:247#1
R15C-F0751 | handel/angebotsarchitektur.md:344#1
R15C-F0752 | handel/angebotsarchitektur.md:373#1
R15C-F0753 | handel/angebotsarchitektur.md:392#1
R15C-F0754 | handel/angebotsarchitektur.md:392#2
R15C-F0755 | handel/angebotsarchitektur.md:393#1
R15C-F0756 | handel/angebotsarchitektur.md:404#1
R15C-F0757 | handel/angebotsarchitektur.md:421#1
R15C-F0758 | handel/angebotsarchitektur.md:423#1
R15C-F0759 | handel/angebotsarchitektur.md:435#1
R15C-F0760 | handel/angebotsarchitektur.md:463#1
R15C-F0761 | handel/angebotsarchitektur.md:478#1
R15C-F0762 | handel/angebotsarchitektur.md:514#1
R15C-F0763 | handel/angebotsarchitektur.md:570#1
R15C-F0764 | handel/angebotsarchitektur.md:572#1
R15C-F0765 | handel/angebotsarchitektur.md:579#1
R15C-F0766 | handel/angebotsarchitektur.md:584#1
R15C-F0767 | handel/angebotsarchitektur.md:625#1
R15C-F0768 | handel/angebotsarchitektur.md:645#1
R15C-F0769 | handel/angebotsarchitektur.md:659#1
R15C-F0770 | handel/angebotsarchitektur.md:675#1
R15C-F0771 | handel/angebotsarchitektur.md:676#1
R15C-F0772 | handel/angebotsarchitektur.md:706#1
R15C-F0773 | handel/angebotsarchitektur.md:740#1
R15C-F0774 | handel/angebotsarchitektur.md:765#1
R15C-F0775 | handel/angebotsarchitektur.md:779#1
R15C-F0776 | handel/angebotsarchitektur.md:806#1
R15C-F0777 | handel/angebotsarchitektur.md:809#1
R15C-F0778 | handel/angebotsarchitektur.md:824#1
R15C-F0779 | handel/angebotsarchitektur.md:830#1
R15C-F0780 | handel/angebotsarchitektur.md:836#1
R15C-F0781 | handel/angebotsarchitektur.md:839#1
R15C-F0782 | handel/angebotsarchitektur.md:848#1
R15C-F0783 | handel/angebotsarchitektur.md:853#1
R15C-F0784 | handel/angebotsarchitektur.md:904#1
R15C-F0785 | handel/angebotsarchitektur.md:949#1
R15C-F0786 | handel/angebotsarchitektur.md:952#1
R15C-F0787 | handel/angebotsarchitektur.md:965#1
R15C-F0788 | handel/angebotsarchitektur.md:970#1
R15C-F0789 | handel/angebotsarchitektur.md:1023#1
R15C-F0790 | handel/angebotsarchitektur.md:1036#1
R15C-F0791 | handel/angebotsarchitektur.md:1043#1
R15C-F0792 | handel/angebotsarchitektur.md:1047#1
R15C-F0793 | handel/angebotsarchitektur.md:1053#1
R15C-F0794 | handel/angebotsarchitektur.md:1063#1
R15C-F0795 | handel/angebotsarchitektur.md:1126#1
R15C-F0796 | handel/angebotsarchitektur.md:1169#1
R15C-F0797 | handel/angebotsarchitektur.md:1179#1
R15C-F0798 | handel/angebotsarchitektur.md:1217#1
R15C-F0799 | handel/angebotsarchitektur.md:1227#1
R15C-F0800 | handel/angebotsarchitektur.md:1243#1
R15C-F0801 | handel/angebotsarchitektur.md:1303#1
R15C-F0802 | handel/angebotsarchitektur.md:1311#1
R15C-F0803 | handel/angebotsarchitektur.md:1313#1
R15C-F0804 | handel/angebotsarchitektur.md:1354#1
R15C-F0805 | handel/angebotsarchitektur.md:1360#1
R15C-F0806 | handel/angebotsarchitektur.md:1381#1
R15C-F0807 | handel/angebotsarchitektur.md:1396#1
R15C-F0808 | handel/angebotsarchitektur.md:1414#1
R15C-F0809 | handel/angebotsarchitektur.md:1421#1
R15C-F0810 | handel/angebotsarchitektur.md:1425#1
```

### 1.7 Kurz-ID-Kollisionen — generisch erhoben, nicht umbenannt

Mechanischer Lauf auf allen 113 versionierten `.md` in `4b84693` mit dem
Formmuster `(?<![A-Z0-9])(?:[A-Z]{1,4}-\d{1,3}|[A-Z]\d{1,3})(?![A-Z0-9])`:
**1.341 verschiedene ID-Formen**; Filter „mindestens zwei Dateien und
mindestens zwei unterschiedliche Restzeilen nach Ersetzung der ID" ergibt
**566 Kandidaten**. Das ist eine Kandidatenmenge, keine automatische
Semantikentscheidung.

Die unabhängigen Sollwerte lagen in dieser generischen Ausgabe:

| ID | Vorkommen | Dateien | unterschiedliche Kontexte | bestätigte Kollision / Trennvorschlag |
|---|---:|---:|---:|---|
| `Z-6` | 226 | 22 | 208 | n8n-Lizenzposten ↔ FUND-Zeile „Check-in als PMS-Standardmodul" (`brandnamic-partner-vollerhebung.md:585`) → `HP-LIZ-Z-6` / `MKT-FUND-Z-6` |
| `O-11` | 19 | 8 | 17 | Lizenzserver-Ping (`projektquelle-mkt.md:580`) ↔ DSK-Ziff. 4.3 Beipack-Werbung (`listenbau-regelwerk.md:1137`) → `HP-LIZ-O-11` / `MKT-AKQ-O-11` |
| `O-4` | 22 | 12 | 21 | Zielmengengröße (`listenbau-regelwerk.md:1133`) ↔ anwaltliche Durchsicht ↔ n8n-K-1-Klärweg (`preismodell-optionen.md:644`) → `MKT-AKQ-O-4-ZIELMENGE` / `MKT-LEGAL-O-4-DURCHSICHT` / `HP-LIZ-O-4-ANFRAGE` |
| `O-2` | 94 | 20 | 83 | Kaltkontakt-Löschfrist (`listenbau-regelwerk.md:1131`) ↔ Lizenz-Kundenpflicht (`preismodell-optionen.md:699`) → `MKT-AKQ-O-2-LOESCHFRIST` / `HP-LIZ-O-2-KUNDENZUGANG` |
| `K-2` | 13 | 6 | 13 | n8n-Lizenzfrage (`heypensio/n8n-lizenz-z6-und-mcp-vorlage-2026-08.md:802`) ↔ wiedervergebene Prüfer-IDs, z. B. R05 BAFA (`R05-A-pruefer.md:112`) und R06 Umsatzsteuer (`R06-A-pruefer.md:146`) → `HP-LIZ-K-2` / rundenbezogen `MKT-R05-K-2`, `MKT-R06-K-2`, … |

**Positivkontrolle bestanden:** `Z-6` und `O-11` sind beide erschienen.
Kein Bezeichner wurde in R15-C selbst umbenannt.

### 1.8 Rendering der Nachtragskästen

Echter Parserlauf mit dem gebündelten `marked`-Renderer, GFM-Modus, gegen
`4b84693`:

| Datei | Quellzeilen mit Tiefe ≥3 | geparste Maximaltiefe | `<blockquote>` auf/zu | HTML-Bytes |
|---|---:|---:|---:|---:|
| `handel/angebotsarchitektur.md` | 0 | 2 | 24/24 | 107.564 |
| `handel/preisliste-vorlaeufig.md` | 0 | 2 | 18/18 | 88.132 |
| `akquise/interessenabwaegung-o8.md` | 0 | 2 | 23/23 | 105.403 |

Renderer-Exit **0**, alle Blockquote-Tags balanciert. Die Prompt-Prämisse
„teils dreifach verschachtelt" ließ sich am eingefrorenen Markdown nicht
reproduzieren: im Quelltext stehen **0** Zeilen mit drei `>`-Ebenen, der
Parser erreicht maximal Tiefe 2. Geprüft ist die GFM-Struktur/HTML-Erzeugung,
nicht das CSS eines bestimmten Viewers.

## 2. Offen geblieben

1. **806 Erstfunde** aus `4b84693` sind absichtlich **nicht bewertet**;
   Träger ist die Leitsession. Der rote Hauptlauf ist daher der korrekte
   Zielzustand, kein Reparaturfehler.
2. Die drei während R15 neu entstehenden Dokumente sind ausdrücklich nicht
   im Prüfstand. Vor einer späteren Vollständigkeitsbehauptung müssen sie
   nach ihrer Versionierung gesondert klassifiziert werden.
3. Der Wächter ist kein Repo-Vollscanner: 99/113 versionierte Markdown-Dateien
   liegen außerhalb `ZIEL ∪ POOL`; 96 davon tragen sogar das heutige
   Zitatmuster. Der operative Schnitt ist dokumentiert, nicht als
   Vollständigkeit ausgegeben.
4. Die vorgeschlagenen Kurz-ID-Trennungen sind nicht vollzogen. Das würde
   fremde Dokumente und parallele Stränge berühren.

## 3. Nebenbefunde außerhalb des Auftrags

| Befund | Zielort / nächste Aktion |
|---|---|
| Das in R15-A entstehende Anwalts-Briefing ist zitat- und Rn.-dicht, konnte aber im eingefrorenen Stand konstruktionsbedingt nicht existieren. | Leitsession: nach Versionierung als eigenes ZIEL-/POOL-Klassifikationsobjekt prüfen; nicht rückwirkend in diese 806 einrechnen. |
| Die neue R15-E-Sperrdatei- und Wellenprotokoll-Vorlage erschienen unversioniert im Arbeitsbaum. | Leitsession/R15-E: erst nach Commit entscheiden, ob sie Quellenzitate führen; bis dahin keine Reichweitenaussage. |
| Das Marketing-Muster `K-2` kollidiert zusätzlich mit weiteren heypensio-Namensräumen (u. a. BCC-Entscheid, Onboarding-SK-2 ist dagegen syntaktisch getrennt). | Leitsession/Blueprint: Namensraumregel projekt- und rundenpräfixiert fassen. |

## 4. Stolpersteine und Learnings

### Fallen

1. **Eine Datei in ZIEL und POOL bestätigt sich selbst.** Reichweite einfach
   durch Anhängen an beide Arrays zu erweitern hätte den neuen Kanal grün und
   blind gemacht. Der Vergleich braucht den Selbstausschluss je Zieldatei.
2. **CRLF darf die 25-Zeichen-Schwelle nicht verändern.** Derselbe Git-Blob
   lieferte vor der Härtung im LF-Arbeitsbaum 143, im CRLF-Archiv 144
   O-8-Treffer, weil `\r` als Zeichen mitzählte. `zitate()` vereinheitlicht
   jetzt vor der Extraktion auf LF; der Selbsttest vergleicht beide Formen.
3. **Ein Arbeitsbaum ist kein Prüfstand.** Zwischen Baseline und Endlauf kamen
   R15-B-Änderungen hinzu; ohne Commit-Rekonstruktion wären 25 fremde Funde
   meiner Änderung zugerechnet worden.
4. **Der Extraktor bleibt eng:** nur `„…"`, mindestens 25 Zeichen. Er sieht
   typografisches `„…“`, `‚…‘`, Guillemets und gewöhnliche Blockzitate nicht;
   nur drei fest verdrahtete Blockzitate haben einen Sondervergleich.
5. **Der Selbsttest erbt weitere Blindstellen:** Normalisierung entfernt
   Anführungszeichen/Markdown und kollabiert Whitespace; ein Zitat darf als
   Teilstring irgendwo im Gesamtpool stehen. Der Test beweist deshalb weder
   die angegebene Quellen-Provenienz noch Satzgrenzen, Formatierung oder
   Rohbelege außerhalb des Repos.
6. **Ein Parser-Erfolg ist keine visuelle Freigabe.** Balanciertes HTML belegt
   die Struktur, nicht Viewer-CSS, Seitenumbruch oder Lesbarkeit.

### Bewährte Muster

1. **Baseline vor dem Edit + Commit-Rekonstruktion nach dem Edit** trennt
   Wächterwirkung und parallele Inhaltsänderung sauber je Datei.
2. **Je neuem POOL-Kanal ein eigener MUSS-Anker** verhindert den stillen
   Totalausfall eines einzelnen Kanals hinter einer grünen Sammelzahl.
3. **Positive und negative Fixture-Zeile je neuem ZIEL** macht die
   Gegenrichtung sichtbar: 8/8 Treffer und 8/8 bewusste Nichttreffer.
4. **Generische ID-Form zuerst, bekannte Kollisionen nur als Sollwerte** hat
   beide Kontrollen gefunden, ohne aus der bekannten Fünferliste die Suche zu
   bauen.
