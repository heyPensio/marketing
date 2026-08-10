# Baustein: Gmail-MCP-Werkzeugfallen

*(Aktivieren, wenn das Projekt das Gmail-MCP für Korrespondenz nutzt.
Herkunft: heyPensio, je mit realem Beinahe-Schaden belegt.)*

- **Threadlisten (`search_threads`) zeigen höchstens 5 Nachrichten je
  Thread.** Matcht ein Thread einen Zeitfilter, ohne dass die angezeigten
  Nachrichten das erklären, verbirgt er neuere → per `get_thread` voll
  nachladen. Arbeitsmodus für Auswertungen: Volldump in Datei +
  Extraktion, keine Häppchen-Zitate.
- **Ein vollständig gelesener FADEN ist nicht die vollständige
  KORRESPONDENZ.** Vor der Antwort an einen Absender ALLE Fäden derselben
  Adresse sichten (`from:`/`to:` statt Thread). **Pflichtform inklusive
  `in:anywhere`** — sonst fehlen Papierkorb und Archiv: Die Adressuche
  fand bei einem Anbieter FÜNF Fäden statt einem, drei davon zu drei
  Vierteln im Papierkorb und ohne `in:anywhere` unsichtbar. Ein
  gelöschter Faden ist gelesene Korrespondenz, keine Nicht-Korrespondenz.
  (Herkunft: MKT R7.)
- **`get_message` mit `messageFormat: MINIMAL` liefert KEINEN Body** —
  nur Snippet und Kopfdaten. Für Wortlaut-/Zitatfragen ist der Aufruf
  wertlos und sieht dabei wie ein erfolgreicher Abruf aus: immer
  `FULL_CONTENT`. (Herkunft: MKT R7.)
- **Entwürfe:** `update_draft` zerstört bei FADEN-Entwürfen die
  Thread-Bindung → Korrektur über Löschen + Neuanlegen; bei
  STANDALONE-Entwürfen ist Update zulässig. `create_draft` kennt
  `replyToMessageId`. Für Entwurfs-Bestand immer `list_drafts` — ein
  leeres `search_threads in:draft` ist ein falsches Negativ. Nach jedem
  `create_draft`-FEHLER erst den Bestand prüfen, dann neu anlegen.
  Betreff-Marker („korrigierte Fassung") gehen beim Versand MIT raus.
- **„Entwurf angelegt, Versand beim User" ist ein Zwischenzustand mit
  Verfallsdatum.** Vor jedem Versand aus einer Doku-Anweisung erst
  Postfach prüfen (`list_drafts` + Gesendet-Ordner). Der Doku-Status
  „VERSENDET" wird erst gesetzt, nachdem der Gesendet-BODY gegen den
  Entwurf gelesen wurde — der User streicht Absätze vor dem Versand.
  Lese-Richtung genauso: Aussagen über den INHALT versendeter Mails nur
  am Gesendet-Ordner prüfen, nie am Repo-Entwurfsstand.
- **Gmail-API-Zeitstempel sind UTC** — beim Übernehmen in lokale Zeit
  umrechnen und die Zone dazuschreiben. Bei Zeit-DIFFERENZEN beide
  Stempel in DERSELBEN Zone rechnen (einseitige Umrechnung erzeugt
  plausible, falsche Differenzen).
- **Anhänge:** „gelesen" ist nicht „archiviert" — der Weg zur Datei ist
  der native Download-Button (zuerst versuchen) oder der User-Handoff;
  abgelesene Werte am Original gegenlesen. Beides im Dokument getrennt
  ausweisen (Wert belastbar ≠ Datei-Beleg vorhanden).
- Links mit Wirkung (Abmeldung, Bestätigung, Widerruf) NIE als
  One-Click-GET — Mail-Scanner rufen jeden Link ab. Immer Zwei-Schritt:
  GET zeigt Bestätigungsseite, erst der POST wirkt.
