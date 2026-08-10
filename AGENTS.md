# AGENTS.md — Marketingabteilung

> ⚠️ **Diese Datei ist ein ZEIGER, kein Regelwerk.**
>
> **Die verbindlichen Regeln dieses Repos stehen ausschließlich in
> `CLAUDE.md`.** Lies sie zuerst und vollständig; alles, was hier
> stünde, wäre eine Kopie und würde davon wegdriften.
>
> *(Entstanden 10.08.2026: Der Codex-Import hat die CLAUDE.md hierher
> dupliziert — auf dem damaligen Stand `50f00dc`, mit mechanischen
> Substitutionen und ohne eigene Codex-Einträge (vor dem Ersetzen
> vollständig gediffed, R8). Zwei Regeldateien nebeneinander sind zwei
> Wahrheits-Kanäle — genau das, was die Architektur dieses Unternehmens
> verhindert. Stub-Prinzip „Zeiger statt Kopie"; Firmen-Entscheid:
> `zentrale\rollen-charta.md`, Abschnitt „Codex".)*

## Pflichtlektüre vor der ersten Handlung

1. **`CLAUDE.md`** (dieses Verzeichnis) — Projekt, Stränge,
   Multi-Session-Modell, Arbeitsregeln, aktive Bausteine.
2. **`STATUS.md`** — aktueller Stand; danach
   `C:\Users\qwafa_2dwxzia\firma\zentrale\STATUS.md` (Firmen-Ebene).
3. **`.claude\rules\`** — aktive Regelmodule (gelten wie
   CLAUDE.md-Regeln).

## Kurzfassung der drei Regeln, die am häufigsten gebrochen werden

Diese drei stehen hier ausnahmsweise doppelt, weil ein Verstoß teuer
ist. Im Zweifel gilt der Wortlaut in `CLAUDE.md`:

- **Wahrheits-Kanal:** `projektquelle-mkt.md`, `STATUS.md`, `CLAUDE.md`
  und Skills/Commands ändert NUR die Leitsession. Zentrale-Kerndokumente
  ändert nie eine Marketing-Session — beschreibbar ist nur der Postkorb
  `zentrale\eingang\`.
- **Git-Disziplin:** committen nur mit explizit benannten Pfaden
  (`git commit -F <msgdatei> -- <pfade>`); Reihenfolge add → commit →
  `git pull --rebase --autostash` → push. Breitband-Kommandos blockiert
  der Hook `.claude\hooks\block-broad-git-add.js`.
- **Sensibel-Ablage:** Roh-Transkripte, persönliche Rahmenbedingungen
  und Freigabe-Erhebungsquellen gehören nach `sensibel\`
  (git-ignoriert) — nie ins Repo, aber auch nie gelöscht.

## Für Codex im Besonderen

Die Rolle von Codex in diesem Unternehmen ist in
`zentrale\rollen-charta.md` festgelegt (Abschnitt „Codex — Springer über
alle Abteilungen"). Kurz: **überall helfen, nirgends in Kerndokumente
schreiben.**
