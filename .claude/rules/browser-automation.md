# Baustein: Browser-Automation-Werkzeugfallen

*(Aktivieren, wenn das Projekt die Chrome-Automation nutzt.
Herkunft: heyPensio.)*

- **Bei außenwirksamen Klicks entscheidet das NETZWERK, nie der DOM** —
  den Request sehen, nicht den Button; `read_network_requests` VOR dem
  Klick aktivieren (erfasst nicht rückwirkend).
- Modal-/Dialogtexte ungekürzt auslesen; Feldinhalte am DOM gegenlesen —
  Passwortmanager-Overlays schlucken Klicks, gleiche Platzhalter lassen
  das per JS gefundene ERSTE Feld das falsche sein.
- **Behörden-/Register-/Store-Seiten KÖNNEN SPAs sein — die Bauform wird
  je Seite GEMESSEN, nie angenommen:** Vor dem Browser-Weg den billigsten
  Kanal (curl/WebFetch) einmal selbst prüfen; der Test kostet Minuten.
  Gegenbeispiele (beide gemessen 09.08.2026, MKT R3): regionalstatistik.de
  (GENESIS) ist ein klassisches Formular-/POST-Frontend inkl. CSV-Download
  per curl; store.apaleo.com liefert die vollständigen Store-Daten in der
  Next.js-Nutzlast (`__NEXT_DATA__`) — sauberer als die gerenderte UI.
  Ist die Seite wirklich eine SPA: über den Browser, robust per hrefs aus
  dem Accessibility-Tree. Spiegelbildlich für Start-Prompts: Eine
  Chrome-Zuteilung ist eine ERLAUBNIS, keine Vorgabe — der billigste
  Kanal wird zuerst gemessen. Jede Negativ-Suche mit Positivkontrolle
  (gilt auch für UI-Suchfelder).
- Screenshot-/CDP-Timeouts auf schweren Dashboards: unmittelbar
  wiederholen; danach vor Zoom-/Koordinaten-Aktionen erst einen
  Voll-Screenshot. **Ein Zoom-Timeout kann den Screenshot-Kanal dauerhaft
  vergiften** — Ausweg: Klick per Element-Referenz statt Koordinaten;
  `resize_window` + Navigation erholt den Kanal.
- **Chromes nativer Basic-Auth-Dialog ist per Automation NICHT
  bedienbar** — solche Aktionen sind Hand-Schritte des Users oder laufen
  über curl mit `-u`.
- **Werkzeug vor System verdächtigen:** Scheitert eine Domain im
  Automations-Tab dauerhaft mit Sicherheitsfehler, während curl/openssl
  sauber antworten, liegt es am TAB — der User zieht einen
  funktionierenden Tab in die Automations-Gruppe. Die Falle wirkt JE
  DOMAIN (eine Gegenprobe mit anderer Domain schließt sie nicht aus) und
  JE SESSION neu. **Auch die DOMAIN-ERLAUBNIS der Automation kann
  MITTEN im Lauf kippen** — „Navigation to this domain is not allowed"
  nach zuvor erfolgreichen Abrufen derselben Domain (Facebook/YouTube/
  DDG binnen zwei Stunden; Herkunft: MKT R19). Ein Erlaubnis-Positiv
  vom Lauf-Anfang trägt das Lauf-Ende nicht.
- Chrome blockiert `fetch` von https-Seiten zu `localhost` und
  Mehrfach-Downloads je Seite. Funktionierende Transportwege:
  Base64-Chunks in den Seiten-Kontext, Blob-Download für Einzeldateien,
  SHA-256-Hashes statt Rohdaten.
- Browser-/Live-Aktionen nur im Rahmen des Session-Auftrags — ungefragte
  eigenständige Tests macht der User selbst.
