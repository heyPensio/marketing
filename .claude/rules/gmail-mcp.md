# Baustein: Gmail-MCP-Werkzeugfallen

*(Aktivieren, wenn das Projekt das Gmail-MCP für Korrespondenz nutzt.
Herkunft: heyPensio, je mit realem Beinahe-Schaden belegt.)*

- **⛔ VERSAND-VERBOT (User-Entscheid 18.08.2026, Zentrale — absolut, ohne
  Rückfrage-Ausnahme): Sessions VERSENDEN NIE E-Mails.** Jede Antwort,
  Weiterleitung oder neue Mail wird als ENTWURF angelegt
  (`create_draft`, bei Fäden mit `replyToMessageId`); der User liest,
  kürzt und versendet selbst. Auch ein „Ja, so versenden" im Dropdown
  hebt das nicht auf — Belegfall 18.08.: zwei per Dropdown freigegebene
  Antworten an einen künftigen Kooperationspartner (Apaleo) gingen
  „KI-lastig" raus, unwiderruflich. Technischer Träger: `send_message`,
  `reply`, `forward` stehen in `settings.json` unter `permissions.deny`
  (Zentrale seit 18.08.; Abteilungen ziehen nach). Dazu Ton-Regel für
  Entwürfe: kurz, direkt, im Ton der eigenen Sent-Mails des Users — kein
  Fließtext-Aufsatz.
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
  plausible, falsche Differenzen). **Die Umrechnung nie als Festformel
  führen** („MESZ = UTC + 2" wird zur Winterzeit still falsch): Zone
  aktuell bestimmen (Sommer +2 / Winter +1, Wechsel Ende Okt./März)
  und im Text nennen. (Herkunft: Architektur-Prüflauf 11.08.2026 —
  die Festformel stand an drei Zentrale-Stellen.)
- **Label-Zähler in `list_labels` sind nach Umbenennungen/Umzügen
  CACHE-STAND** — direkt nach einer Label-Umstrukturierung meldeten alle
  umbenannten Labels 0 Nachrichten, obwohl die Fäden dranhingen; die
  Gegenprobe `label:<name>`-SUCHE fand 42 Fäden. Bestandsaussagen nach
  Label-Arbeit nie am Zähler, immer an der Suche messen. (Herkunft:
  Zentrale 18.08.2026, Postfach-Neusortierung.)
- **Anhänge:** „gelesen" ist nicht „archiviert" — der Weg zur Datei ist
  der native Download-Button (zuerst versuchen) oder der User-Handoff;
  abgelesene Werte am Original gegenlesen. Beides im Dokument getrennt
  ausweisen (Wert belastbar ≠ Datei-Beleg vorhanden).
- Links mit Wirkung (Abmeldung, Bestätigung, Widerruf) NIE als
  One-Click-GET — Mail-Scanner rufen jeden Link ab. Immer Zwei-Schritt:
  GET zeigt Bestätigungsseite, erst der POST wirkt.
- **Konto-Wechsel-Falle (belegt 10.08.2026, Zentrale):** Die
  Konnektor-Anmeldung hängt am KONTO, der Verbindungs-Handle an der
  laufenden SESSION. Nach einem Konto-Wechsel melden Tools „session
  expired", während die Verbindungs-ANZEIGE „connected" zeigen kann —
  die Anzeige ist kein Beleg, Beleg ist ein Test-Call je Konnektor.
  Hilft der Reconnect nicht, braucht die laufende Session einen
  NEUSTART (frisch gestartete Sessions verbinden sauber). Eine
  Mail-Pflichtaufgabe ohne funktionierende Anbindung wird als LÜCKE
  ausgewiesen (Rückfallregel), nie aus älterem Stand ergänzt.
