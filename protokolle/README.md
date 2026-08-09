# protokolle/ — Tagespläne, Abschlussmeldungen, Prüfer-Protokolle

**Zweck:** Abschlussmeldungen der Arbeits-Sessions und Protokolle
unabhängiger Prüfer sind **Repo-Dateien**, kein Copy-Paste-Transport über
den User. Damit werden (a) Fangquoten je Prüfschicht messbar
(`/debrief`-Pflichttabelle), (b) das Review-Gate der Leitsession prüfbar,
(c) User-Transportzeit gespart. Der Tagesplan ist das Übergabedokument
zwischen Leitsessions und überlebt die Kontext-Kompaktierung.

**Namenskonvention:**
- `tagesplan-<jjjj-mm-tt>.md` — Tagesrahmen + Blöcke (Träger: `/tagesstart`,
  fortgeschrieben von `/runde`).
- `R<runde>-<session>-abschluss.md` — Abschlussmeldung in den vier Blöcken
  aus `/tagesstart` (Vorlage Terminal-Session), mit Kopfzeile
  **`Token-Verbrauch:`** („von der Session nicht erhebbar (/cost
  interaktiv) — Subagenten-Zahlen soweit bekannt: …").
- `R<runde>-<session>-pruefer.md` — Prüfer-Protokoll: Funde mit
  Fundstellen, **Positivkontrolle des Suchwegs** (Pflicht — ohne sie gilt
  die Session als prüferlos), Grenze des eigenen Prüfwegs.
- `R<runde>-leitsession-review-<session>.md` — Reviews der Leitsession.
- `R00-<thema>.md` — Aufsetz-/Sonderprotokolle außerhalb des
  Runden-Rasters (z. B. Plan-Prüfung beim Projekt-Aufsetzen).

Die Dateien committet die jeweilige Session selbst (eigener Scope).
Inhalte sind Momentaufnahmen der Runde — sie werden nicht nachgepflegt;
der Wahrheits-Kanal bleibt Projektquelle/STATUS. Keine Klartext-Secrets,
keine personenbezogenen Rohdaten (Scan vor dem Commit).
