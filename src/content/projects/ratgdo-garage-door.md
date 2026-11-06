---
id: 45
title: "ratgdo"
seoTitle: "ratgdo: the MyQ alternative for local garage door control"
device: "Chamberlain / LiftMaster / Merlin garage door openers (Security+ 1.0 and 2.0)"
category: home
ai: "none documented"
evidence: public
aiRole: "No AI involvement documented. The project predates coding agents (2022) and credits its human contributors."
caveats: "Needs a small board wired to the opener's terminals: follow the wiring docs, and it may affect the opener warranty. The board is a purchase (about $45 as a kit) or a DIY build. Check the compatibility docs for your opener."
evidenceNote: "Public firmware and open hardware."
repo: "PaulWieland/ratgdo"
links:
  - { label: "repo", url: "https://github.com/PaulWieland/ratgdo" }
  - { label: "docs", url: "https://paulwieland.github.io/ratgdo/" }
reviewed: 2026-10-29
submittedBy: unshittify
---

In 2023 Chamberlain blocked third-party access to myQ, breaking Home Assistant and Homebridge control. Paul Wieland's ratgdo board restores local control with full status over MQTT, ESPHome or HomeKit. No cloud and no subscription; the myQ app can keep running.
