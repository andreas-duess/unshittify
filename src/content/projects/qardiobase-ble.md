---
id: 72
title: "qardiobase-ble"
seoTitle: "QardioBase 2 scale readings after Qardio shut down"
device: "QardioBase 2 scale (B200, firmware 2.04)"
category: home
ai: "claude (commits)"
evidence: public
aiRole: "The README doesn't mention AI. Both commits carry a Claude co-author line."
caveats: "One unit tested; not the original QardioBase. Some digits hadn't been seen yet, so the app asks you to label unknown ones."
evidenceNote: "Public code."
repo: "sanchescom/qardiobase-ble"
links:
  - { label: "repo", url: "https://github.com/sanchescom/qardiobase-ble" }
reviewed: 2026-10-31
submittedBy: unshittify
---

Qardio shut its servers and pulled the app. The scale never sends weight as a number; it streams a picture of its own display over Bluetooth. Aleksandr Efimov reads the digits off that picture and ships an iPhone app with Apple Health export, plus a tool to stop the scale's Wi-Fi error pauses.
