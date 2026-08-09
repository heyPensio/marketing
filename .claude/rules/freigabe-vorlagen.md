# Baustein: Freigabe-Vorlagen (Laien-Entscheider geben vor Bau/Versand frei)

*(Aktivieren, wenn das Projekt Freigabedokumente für Entscheider ohne
Fachhintergrund erzeugt — DSGVO-/Rechts-Freigaben, Text-Freigaben,
Konzept-Freigaben durch Kunden oder Gesellschafter. Herkunft:
heyPensio-Skill `freigabevorlage-kayhan`, mehrfach bewährt. Die
Freigabe-KERNREGELN — Originalwortlaut, Delta-Paare, ✅ mit
Quelle+Datum+Form, sensibel-Archiv, Nachtrags-Kasten — stehen in
CLAUDE.md; hier steht die VORLAGEN-Form.)*

- **Feste Struktur (nicht neu erfinden):** Kopf-Block mit Zweck (ein
  Absatz: was freigegeben wird und was danach passiert) + explizitem
  **„Nicht Teil dieser Freigabe"** · „Worum es geht, in N Sätzen" ohne
  ein einziges Fachwort · je Baustein ein Abschnitt: was passiert
  (Klartext) → Textentwurf (Blockquote) → Rechtsgrundlage/Abwägung in
  Klartext → Speicher-/Löschfrist MIT Begründung → „Was Du hier
  freigibst" · nummerierte ☐-Entscheidungspunkte, jeder einzeln mit
  Ja/Nein/Änderung beantwortbar (Punkte ohne Ja/Nein-Charakter — z. B.
  Personen/Adressen benennen — als konkrete Angabe-Anforderung
  formulieren) · „So läuft es weiter" mit Antwortweg (formlos reicht,
  wird dann schriftlich festgehalten) + Hinweis: Textänderungen VOR
  dem Bau sind am billigsten.
- **Klartext-Pflicht/Laienprüfbarkeit:** Jede technische Aussage so,
  dass der Empfänger sie ohne Fachhintergrund prüfen kann;
  Rechtsnormen nennen, aber immer mit Klartext-Übersetzung daneben.
- **Kanon-Texte byte-gleich:** Freigegebene Außentexte (Checkbox-/
  Hinweistexte) sind Kanon — existiert der Kanon schon, byte-gleich
  zitieren und per SKRIPT verifizieren (Apostroph-Falle `’` vs. `'`
  mehrfach unabhängig belegt); entsteht er neu, ist die Vorlage die
  Quelle und der Bau übernimmt byte-gleich. Versionsschema
  `v1-<freigabedatum>`; alte Fassungen nie löschen; „redaktionelle
  Glättung" freigegebener Texte gibt es nicht.
- **Mapping Vorlage ↔ Umsetzung 1:1:** Existiert ein Bauplan, führt er
  eine Mapping-Tabelle (Bauplan-§ ↔ Baustein + Entscheidungspunkt);
  ändert eine Seite Frist/Wortlaut/Verfahren, zieht die andere IM
  SELBEN COMMIT nach — sonst wird etwas freigegeben, das so nicht
  gebaut wird. **Schutz-Zusagen der Vorlage sind Bau-Pflichten** —
  sie dürfen beim Bau nicht wegoptimiert werden (im Bauplan als
  festes Prinzip markieren).
- **⚠️ AVV-/DSB-Pflichtprüfpunkt (Lücke sechsmal reproduziert):** Jede
  Vorlage prüft ausdrücklich: (a) Kommt ein **Auftragsverarbeiter**
  hinzu? Dann Art.-28-AVV als eigener Punkt — der AVV ist Pflicht des
  VERANTWORTLICHEN (Kunden), nicht eigene Fleißarbeit. (b) Ändert das
  Vorhaben die **DSB-Frage** (Benennungspflicht)? Beides mit Status +
  Begründung führen (liegt vor / angefordert / nicht erforderlich) —
  **„kommt nicht vor" ist kein Status.** Marketing-einschlägig:
  Newsletter-/Kampagnen-Tools und Analytics SIND Auftragsverarbeiter.
  Nachweise an einem benannten Sammelort (AVV-Akte).
- **⭐ Belegstufe als Kundentext + die unbequeme Grenze:** Die
  Belegstufe gehört IN den Satz („sag es, wenn ich Dich falsch
  verstanden habe"), nicht als interne Notation — besonders bei
  ✅-Vermerken aus nicht archivierten Sprachquellen. Eine
  Einschränkung, die die Entscheidung des Empfängers ändern würde,
  gehört in die Vorlage, nicht in Fußnoten — auch wenn sie den
  Vorschlag schwächer aussehen lässt. **Prüffrage vor jedem Versand:
  Welcher Satz würde die Antwort des Empfängers ändern, wenn er ihn
  läse — und steht er drin?**
- **⭐ Quell-Abgleich als EIGENER Prüfschritt:** Der Weg Textquelle →
  Kundendokument verliert systematisch zugunsten der eigenen Position
  (gemessen: 4/4 Abweichungen waren die schwächere Fassung beim
  Kunden — Vorbehalt verkürzt, Grenze geglättet, Entwarnung
  verstärkt). Vor dem Versand ein eigener Durchgang Quelldatei ↔
  Kundendokument, Satz für Satz; bei jeder Abweichung gewinnt die
  QUELLE (Vorbehalt zuerst übernehmen, dann den Satz bauen);
  Kopfblock-Vermerk „Quell-Abgleich gelaufen: <Dateien>, <Datum>" —
  nie ein Nebenprodukt des Redigierens (beim Redigieren liest man die
  eigene Formulierung, nicht die Quelle).
- **Nach der Freigabe (Pflicht-Nacharbeit):** ✅-Vermerk in den Kopf
  mit ALLEN konkreten Festlegungen (wer, welche Adresse, welche
  Frist), Quelle+Datum+Form, Erhebungsquelle nach `sensibel/`
  archiviert (CLAUDE.md-Kernregel); fehlt die Quelle, sichtbar
  **„sinngemäß, Wortlaut nicht archiviert"** (schwächere Belegstufe).
  Bauplan im selben Commit nachziehen; Folgezulieferungen mit
  Verantwortlichem festhalten; Zugangsdaten nie in Chat/Repo.
- **PDF-Versand (Anhang-Handoff):** Die Mail-Werkzeuge hängen keine
  Anhänge an — der User versendet. Erzeugungsweg (Windows):
  `npx -y marked --gfm` (MD→HTML) → HTML-Wrapper mit
  `<meta charset="utf-8">` + Druck-CSS → Chrome headless
  `--headless --print-to-pdf=… --no-pdf-header-footer` → PDF in den
  Downloads-Ordner (sprechender Dateiname = sichtbarer Anhangname).
  **Pflicht-Gegenprobe am ERZEUGTEN PDF** (pdf-parse: Seitenzahl,
  Anfang/Ende gegen die Quelle, Umlaut-Zählung, 0 Mojibake-Marker),
  nie am Quell-MD.
- **Anschreiben-Dramaturgie:** Freigabe-Bitten gebündelt statt
  Einzelmails; der Empfänger sieht zuerst, wo er wirklich gebraucht
  wird; Antwort-Kategorien getrennt ausweisen (braucht Antwort /
  Kenntnisnahme / Zuständigkeit Dritter — „das bewertet Dein
  Steuerberater, wir brauchen nur die Tatsache").
