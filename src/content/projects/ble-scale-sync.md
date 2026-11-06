---
id: 96
title: "ble-scale-sync"
seoTitle: "ble-scale-sync: Bluetooth bathroom scales to Garmin, Strava and Home Assistant without the app"
device: "Bluetooth body scales: Xiaomi, Renpho, Eufy, Yunmai, Beurer, Sanitas, Medisana and 20+ more brands"
category: home
ai: "claude (commits)"
evidence: public
aiRole: "Recent commits carry a Co-authored-by: Claude trailer and a Generated with Claude Code line."
caveats: "Needs Node 22+ and a Bluetooth adapter; Docker needs a Linux host with BlueZ. Body composition is computed locally from weight and impedance, so numbers can differ from the vendor app. Check your model on the supported-scales list."
evidenceNote: "Public GPL-3.0 repo, docs site, CI and tagged releases. Actively maintained."
repo: "KristianP26/ble-scale-sync"
links:
  - { label: "repo", url: "https://github.com/KristianP26/ble-scale-sync" }
  - { label: "docs", url: "https://blescalesync.dev" }
  - { label: "supported scales", url: "https://blescalesync.dev/guide/supported-scales" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Every scale brand wants its own phone app. KristianP26's ble-scale-sync reads the scale over Bluetooth instead, either by connecting or by listening to its broadcasts, and computes body composition locally. Each reading goes to any of 13 targets, including Garmin Connect, Strava, MQTT and Home Assistant, InfluxDB, webhooks, ntfy and plain CSV or JSONL files.

It handles several people on one scale, pulls readings stored in the scale's memory, and runs on a Pi, a desktop, Docker or as a Home Assistant add-on. An ESP32 can act as the Bluetooth radio.
