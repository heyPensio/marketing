---
description: Leitsession-Werkzeug — FOLGERUNDE mitten am Tag oder spätabends starten (Runde fertig → nächste; Tagesplan erfüllt → doch noch weiter). Für das Morgen-Ritual /tagesstart nutzen; dieser Command trägt nur das Folgerunden-Spezifische und verweist für alles andere dorthin.
argument-hint: "(optional: Stichworte zur gewünschten nächsten Runde)"
---

# /runde — Folgerunde starten (kleiner Einstieg der Leitsession)

Wer diesen Command tippt, ist die Leitsession. User-Wunsch: `$ARGUMENTS`.

**Vorbedingung:** Für heute existiert bereits
`protokolle/tagesplan-<datum>.md`. Existiert KEINER → Stopp und auf
**`/tagesstart`** verweisen (der Tagesrahmen — Wochentag, Kalender,
Wochen-Budget, Blöcke — wird nur dort erhoben).

**Substanz-Regel: Dieser Command dupliziert NICHTS.** Runden-Schnitt,
Prompt-Bausteine, Review-Regime und Ausgabeform stehen ausschließlich in
`.claude/commands/tagesstart.md` — die dortigen Abschnitte werden GELESEN
und BEFOLGT, nie hier nachgebaut (zwei Träger derselben Regeln sind die
Vorwärtsverweis-Falle).

## Ablauf

1. **Debrief-Gate (hart):** Ist die LAUFENDE Runde geschlossen? Alle
   Abschlussmeldungen da, Leitsession-Reviews gefahren, **Debrief der
   Runde gelaufen** (Debrief ist PRO RUNDE, nie ans Tagesende gebündelt).
   Fehlt etwas → erst schließen (Reviews nach `/tagesstart` Abschnitt 1
   Punkt 2, Debrief per `/debrief`), dann weiter. Ausnahme nur auf
   ausdrücklichen User-Entscheid — dann als Schuld im Tagesplan vermerken.
2. **Tagesrahmen-KURZCHECK (nicht neu erheben):** Uhrzeit ziehen und gegen
   den Tagesplan halten — Erreichbarkeitsfenster ändern sich
   (abends/Wochenende: nur Innen-Stränge); Wochen-Budget-Feld auf Stand?
   User-Zuruf: Was ist seit dem letzten Block passiert?
3. **Neue Runde schneiden** nach `/tagesstart` Abschnitt 1 Punkte 4–5
   (Ist-Stand-Prüfung je Strang durch die Leitsession SELBST; bei ≥ 3
   Strängen der Prüf-Subagent), Prompts nach Abschnitt 2, Ausgabe nach
   Abschnitt 4 (inkl. `/model`-Handgriff-Zeile über jedem Prompt).
4. **Tagesplan FORTSCHREIBEN, nie neu anlegen:** Neuer Block-Abschnitt mit
   Uhrzeit im heutigen `tagesplan-<datum>.md`; spätere Blöcke bleiben
   PROGNOSE. Committen (nur der Tagesplan-Pfad).

**Merksatz:** `/runde` ist der Türgriff, `/tagesstart` ist das Haus — wer
am Haus baut, baut dort.
