---
id: 126
title: "Nord Modular G2 Editor"
seoTitle: "NordModularG2-Editor: a new editor for the Clavia Nord Modular G2 on current Macs and Windows"
device: "Clavia Nord Modular G2, G2X and G2 Engine (2004 to 2009)"
category: audio
ai: "claude (agent files)"
evidence: public
aiRole: "The repo has a CLAUDE.md with coding rules for the agent, and the project site says donations help cover coding-agent subscriptions. No vendor is named in the README."
caveats: "Version 0.8.0. Some parts of the sound engine are still being investigated. Windows needs a USB driver step. No Linux build yet."
evidenceNote: "Public code, AGPL-3.0, about 1,450 commits since April 2026."
repo: "JanBurp/NordModularG2-Editor"
links:
  - { label: "repo", url: "https://github.com/JanBurp/NordModularG2-Editor" }
  - { label: "site", url: "https://janburp.github.io/NordModularG2-Editor/" }
reviewed: 2026-11-12
submittedBy: unshittify
---

Clavia's last G2 editor is an old 32-bit application that no longer runs on current macOS, and without an editor a Nord Modular is a very expensive preset player. Jan den Besten rewrote the editor from scratch: a C USB daemon and an Electron front end, editing patches offline or live on the synth, with builds for macOS 11 and later and Windows 10.
