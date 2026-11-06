---
id: 82
title: "OpenNeato"
seoTitle: "OpenNeato: an ESP32 web interface for Neato vacuums after the cloud shutdown"
device: "Neato Botvac D3 to D7 + ESP32-C3"
category: home
ai: "claude (agent files)"
evidence: public
aiRole: "The README doesn't mention AI. The repo has had an AGENTS.md for AI agents since day one, and 1 of 204 commits carries a Claude co-author line."
caveats: "Early beta. D8, D9 and D10 aren't supported because their serial port is locked. Needs wiring to the robot's debug port. Separate from Vacuula, which covers the same robots in software."
evidenceNote: "Public code (211 stars) with releases and a demo."
repo: "renjfk/OpenNeato"
links:
  - { label: "repo", url: "https://github.com/renjfk/OpenNeato" }
reviewed: 2026-10-31
submittedBy: unshittify
---

Neato shut down its cloud and app. OpenNeato puts an ESP32 on the robot's debug port and serves a local web page with manual drive, schedules, cleaning history and the LiDAR map.
