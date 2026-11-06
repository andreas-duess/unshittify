---
id: 91
title: "Tesserae"
seoTitle: "Tesserae: self-hosted dashboards for e-ink panels, Kindles and TRMNL, no cloud"
device: "E-ink panels: Seeed reTerminal, Pimoroni, Waveshare, M5Stack, TRMNL, jailbroken Kindle Paperwhite 2, Xteink"
category: tv
ai: "claude code"
evidence: public
aiRole: "The README says it was built with Claude Code; the builder owns architecture, code review, hardware testing and what ships. Commits carry Claude co-author trailers. Tesserae also has an MCP API so an agent can build and push pages."
caveats: "25 panels verified on hardware; check yours first. Its own firmware covers the reTerminal E-Series and XIAO ePaper, flashed from Chrome or Edge. The hosted cloud isn't open yet, and dashboards made there would need recreating on a self-hosted server. Seeed supplied sample hardware and some Seeed links are affiliate links."
evidenceNote: "Public AGPL-3.0 repo, docs, firmware repo + builder's X post."
repo: "dmellok/tesserae"
links:
  - { label: "site", url: "https://tesserae.ink/" }
  - { label: "repo", url: "https://github.com/dmellok/tesserae" }
  - { label: "docs", url: "https://docs.tesserae.ink/" }
  - { label: "firmware", url: "https://github.com/dmellok/tesserae-device-firmware" }
  - { label: "post", url: "https://x.com/xDaftTurtle/status/2077291281026523342" }
reviewed: 2026-11-04
submittedBy: unshittify
---

E-ink panels and old Kindles tend to do one job, or none. dmellok's Tesserae is a local server: you compose dashboards in the browser as a grid, a freeform canvas or raw HTML, and it renders them and pushes them to the panels over REST or MQTT. Widgets cover Home Assistant, calendars, weather, transit, GitHub and news, with community plugins on top.

It runs in Docker, as a Home Assistant app, or on Windows or LXC. "Five e-ink panels. One server. No cloud."
