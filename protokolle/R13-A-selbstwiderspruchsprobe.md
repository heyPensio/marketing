# R13-A — Selbstwiderspruchs-Probe über beide Dokumente (Teil 3)

**Session:** R13-A (Ben Beckman), 13.08.2026 nachmittags
**Prüfgegenstand:** `handel/angebotsarchitektur.md` +
`handel/preisliste-vorlaeufig.md` nach Einarbeitung des
Entscheide-Protokolls 2 (S4 + AA-1…AA-8)
**Zweck:** Trägt nach den Nachträgen noch irgendeine Stelle in einem
der beiden Dokumente den **alten** Stand, ohne Vorwärtsverweis?

---

## 1. Zählweg und Werkzeug

Alle Zahlen unten stammen aus `grep -o` bzw. `grep -oi` (Bash-Kanal),
gezählt mit `| wc -l` — also **Treffer**, nicht Zeilen (die
`grep -c`-Falle ist damit vermieden). Erhoben am Arbeitsbaum-Stand
**nach** den Edits, vor dem Commit.

⚠️ **Werkzeugbefund im Lauf selbst — der erste Durchgang war blind für
einen Teil seines Suchraums.** Der erste Lauf suchte
**case-sensitiv** nach `Paket`. Ergebnis Preisliste: **5 Treffer**.
Derselbe Lauf mit `-i`: **9 Treffer**. Die vier fehlenden standen in
**Komposita mit klein geschriebenem Suchwort** —
„Leistungs**p**akete" — darunter ausgerechnet die Stelle im
**Kopfkasten** (Zeile 70), die eine überholte Abgrenzung trug
(„Diese Liste benennt den Rabatt nur als Stellschraube") und ohne
diesen Fang stehen geblieben wäre.

- **Erkannt wurde er nicht durch die Trefferzahl** (5 sah plausibel
  aus), sondern durch den **Abgleich gegen den eigenen Lesestand**:
  Ich hatte die Kopfkasten-Zeile beim Volltext-Lesen gesehen, der Grep
  meldete sie nicht — eine Zahl, die nicht sein KONNTE.
- **Gegenprobe mit einem zweiten Werkzeug** (Grep-Tool auf
  `Leistungspakete`): 4 Fundstellen in der Preisliste (Z. 70, 785,
  798, 814) → bestätigt, dass der Bash-Lauf sie hatte, aber das
  **Muster** sie nicht traf.
- **Konsequenz für diesen Lauf:** Alle Muster wurden mit `-i`
  wiederholt; die Tabelle in § 2 führt die `-i`-Zahlen.
- **Klasse:** Versalien-/Kompositum-Blindheit eines Suchmusters
  (CLAUDE.md „Positivkontrolle", heyPensio-R35-Fall „Versalien-
  Schreibweise nie getroffen"). **Ein Nulltreffer oder eine zu
  niedrige Zahl ist zuerst ein Musterfehler.**

## 2. Geprüfte Muster mit Trefferzahlen (Positivkontrolle)

Jedes Muster **musste** treffen (Positivkontrolle je Muster, nicht je
Lauf) — der Lauf hätte ein totes Muster also bemerkt.

| Muster (`-i`) | `angebotsarchitektur.md` | `preisliste-vorlaeufig.md` | Kontrolle |
|---|---:|---:|---|
| `S4` | 36 | 26 | ✔ trifft beidseits |
| `rabatt` | 64 | 33 | ✔ |
| `startgebühr` | 21 | 32 | ✔ |
| `paket` | 43 | 9 | ✔ (nach `-i`-Korrektur; sensitiv wären es 5 in der Preisliste) |
| `P-B` | 19 | 1 | ✔ — der eine Preislisten-Treffer ist der neue § 6-Nachtrag |
| `reifegrad` | 10 | **0** | ⚠️ **echter Nulltreffer, gegengeprüft** — s. u. |
| `staffel` | 11 | 3 | ✔ |
| `deckel` | 19 | 5 | ✔ |

**Gegenkontrolle (musste 0 ergeben — die Suche kann also scheitern):**
`AA-9` → 0/0 · `S9` → 0/0 · `Lesart C` → 0/0. ✔

**Der Nulltreffer `reifegrad` in der Preisliste ist ein Sachbefund,
kein Werkzeugbefund** — gegengeprüft mit vier Nachbarmustern:
`gebaut` 1 · `geplant` 0 · `geparkt` 0 · `Modul` 1. Die Preisliste
führt **keine** Reifegrad-Logik; sie ist eine Preis-, keine
Katalogdatei. **AA-3 hat dort folglich nichts nachzuziehen** — das ist
die richtige Lage, keine Lücke.

## 3. Befunde: Stellen, die den alten Stand trugen

Alle Trefferstellen wurden gelesen. **Vier Stellen trugen nach den
✅-Vermerken noch den überholten Stand ohne Vorwärtsverweis** — alle
vier sind mit markiertem Nachtrag geschlossen (keine stille
Neufassung, der alte Text steht jeweils weiter da):

| # | Datei / Stelle | Was dort stand | Nachgezogen |
|---|---|---|---|
| **SW-1** | Preisliste, Kopfkasten „Nicht Teil dieser Datei" | „Diese Liste benennt den Rabatt **nur als Stellschraube**" — seit § 4 trägt sie die entschiedene Mechanik | Kopf-Nachtrag, Abschluss-Absatz |
| **SW-2** | Preisliste § 3, Tabellenzeile **S3** | „⬜ offen — Mechanik § 4, Ausarbeitung R12-B" — die Mechanik ist entschieden, offen ist nur die **Höhe** | § 3-Nachtrag Punkt 4 |
| **SW-3** | Preisliste § 4, **Überschrift** | „Mehrhaus-Rabatt **auf die Grundgebühr**" — seit AA-8 zwei Wirkungsorte | § 4-Nachtrag, Schluss-Absatz |
| **SW-4** | Angebotsarchitektur § 5, **Überschrift** | „die **offenen** Fragen als Optionen" — die vier Fragen sind beantwortet | § 5-Nachtrag, Schluss-Absatz |

**Zusätzlich präzisiert (kein Widerspruch, aber Lesefalle):**
Angebotsarchitektur § 1, Zeile „Mehrhaus-Rabatt auf die Grundgebühr
S1" — als Wiedergabe von **E-2** richtig, als Beschreibung der
**heutigen** Rabattwirkung unvollständig; im § 1-Nachtrag jetzt
namentlich benannt.

## 4. Geprüft und bewusst NICHT geändert

| Stelle | Warum sie stehen bleibt |
|---|---|
| Beide **Lesart-Tabellen** (§ 2) samt Empfehlungsabsatz | Tragen die Abwägung, aus der AA-1 entstand. Vorwärtsverweis gesetzt („Lesart B verworfen"), Text unangetastet |
| **P-A-/P-C-Optionstabellen** (§ 4) | AA-2 ist **Zielbild**, keine endgültige Festlegung — die Optionen sind **lebend**, nicht überholt |
| **AA-8-Empfehlungspassagen** (§ 5) | Der Entscheid fiel bewusst **gegen** sie; Glätten würde den Dissens unsichtbar machen. Ausdrücklich so im ✅-Kasten vermerkt |
| Drei **„offen — AA-4"-Zeilen** (§ 3) | AA-4 ist unbeantwortet — die Zeilen sind der richtige Stand |
| ④-Ableitung „Rabatt wirkt nicht auf S2 / nicht auf § 2-Zeilen" | Das Protokoll **schweigt** dazu; Belegstufe bleibt ④, nicht durch AA-8 mitentschieden |
| **Spanne 1.500–2.500 €** und alle vier Vorbehalte (§ 5 Preisliste) | Keine Höhe war Gegenstand der Erhebung; die Spanne ist unberührt |

## 5. Ergebnis

**Kein verbleibender Selbstwiderspruch in oder zwischen beiden
Dokumenten gefunden** — Stand: Arbeitsbaum vor dem Commit,
Prüfumfang: die acht Muster oben über beide Dateien vollständig.

⚠️ **Was diese Probe NICHT leistet** (Geltungsgrenze, nicht
Entwarnung): Sie prüft die **entschiedenen Größen** an ihren
Suchmustern. Eine sachliche Abweichung, die **keines** dieser acht
Wörter enthält, findet sie nicht — und sie prüft **nicht** die
Nachbardokumente (`preismodell-optionen.md`,
`fund/positionierungspapier.md`), die außerhalb des R13-A-Scopes
liegen. Für die Quelle `preismodell-optionen.md` ist ein
Nachzieh-Bedarf ausdrücklich als Nebenbefund gemeldet
(Z-1…Z-7-Übergabestand).
