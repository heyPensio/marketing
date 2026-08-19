# eingang/ — Postkorb der Marketingabteilung (MKT)

**Angelegt 19.08.2026 durch die Zentrale (User-Entscheid im
Firmen-Briefing, Herkunft: Ideen-Eingang 18.08.).** Gegenstück zum
Postkorb `zentrale\eingang\` — bisher war der Meldeweg eine
Einbahnstraße (Abteilung → Zentrale); dieser Ordner trägt die
Gegenrichtung.

## Regeln

- **Hier legt die ZENTRALE (Garp) kurze Meldedateien ab:** Befunde,
  Weiterleitungen und Posten mit Abteilungswirkung (z. B. „Mail-Antwort
  eingetroffen", „Prämisse gekippt", „Posten X an Euch").
  Dateiname: `<jjjj-mm-tt>-zentrale-<thema>.md`. Inhalt: Was liegt an ·
  Woher (Quelle/Beleg) · Was die Abteilung tun soll · Terminbezug.
- **KEINE Einstiegs-Aufträge oder Tageszuschnitte über diesen Weg** —
  die laufen weiter über das Firmen-Briefing (Pull-Modell,
  Prämissen-Kasten). Der Postkorb ersetzt den STATUS-Sammelblock
  „Posten an die Abteilungen", nicht das Briefing.
- **Transportbehälter-Prinzip:** Die Leitsession arbeitet die Meldung
  in ihre Träger (Tagesplan/STATUS/Sachdokument) ein und **löscht sie
  im selben Commit**. Eine liegen gebliebene Meldung ist ein offener
  Posten, kein Archiv.
- **Schreibrecht:** Das Schreibrecht der Zentrale in diesem Repo
  beschränkt sich auf GENAU diesen Ordner (Kanal-Regel, zentrale
  CLAUDE.md „Austausch-Mechanik" 1b) — Kerndokumente ändert weiterhin
  nur die eigene Leitsession.
- **Lesepflicht:** Die Leitsession prüft diesen Ordner bei jedem
  Session-Start (Verdrahtung in der eigenen CLAUDE.md/`/tagesstart` —
  Posten der Leitsession, s. Ankündigungs-Meldung).
- Keine Klartext-Secrets, keine personenbezogenen Rohdaten (dafür:
  `sensibel/` im jeweiligen Repo).
