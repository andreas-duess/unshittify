---
id: 43
title: "Vacuula"
seoTitle: "Vacuula: Neato robot vacuums after the cloud shutdown"
device: "Neato robot vacuums D3 to D7, D800, D8 to D10"
category: home
ai: "none documented"
evidence: public
aiRole: "No AI involvement documented."
caveats: "The replacement server must stay online; dedicated always-on hardware is recommended. Gen2 Botvac Connected not yet supported. Setup differs by model and host system; check the README's tables. Notifications and a Home Assistant entity are still in progress."
evidenceNote: "Public repo + press coverage."
links:
  - { label: "repo", url: "https://github.com/vacuula/vacuula" }
  - { label: "installer", url: "https://github.com/vacuula/installer" }
  - { label: "coverage", url: "https://www.opensourceforu.com/2026/10/vacuula-revives-disconnected-neato-robot-vacuums/" }
reviewed: 2026-10-29
submittedBy: unshittify
---

Vorwerk began shutting Neato's cloud in October 2025, taking away app control, schedules and maps. Vacuula is a self-hosted replacement server with an installer that points the robot at it: maps, schedules, zones and no-go lines work again.
