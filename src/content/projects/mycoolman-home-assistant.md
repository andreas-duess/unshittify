---
id: 41
title: "myCOOLMAN for Home Assistant"
seoTitle: "myCOOLMAN fridge: local Bluetooth control in Home Assistant"
device: "myCOOLMAN MCMR43 portable fridge/freezer"
category: home
ai: "claude"
evidence: public
aiRole: "The creator, an enthusiast rather than a professional programmer, says he built it with a lot of help from Claude. The protocol came from an open-source Android app plus probing the real fridge."
caveats: "Confirmed on the MCMR43; other models untested. Battery-voltage scaling is a best guess. It holds a permanent Bluetooth connection, using one of an ESP32 proxy's three slots. Setup needs the fridge's pairing PIN."
evidenceNote: "Public repo + creator post."
repo: "HeapsGoodTom/mycoolman-ha"
links:
  - { label: "repo", url: "https://github.com/HeapsGoodTom/mycoolman-ha" }
  - { label: "creator post", url: "https://community.home-assistant.io/t/custom-integration-mycoolman-mcmr-fridge-freezer-local-ble-control/1016431" }
reviewed: 2026-10-29
submittedBy: unshittify
---

The fridge was only controllable from its vendor app. Tom's integration brings temperature, power, turbo, battery protection and display settings into Home Assistant over Bluetooth, with no cloud and no account.
