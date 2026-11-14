---
id: 156
title: "Petlibro Local"
seoTitle: "Petlibro Local: Petlibro feeders and fountains in Home Assistant, no cloud"
device: "Petlibro pet feeders and fountains: Dockstream 2, Dockstream 2 Cordless and Dockstream RFID fountains; One RFID, Granary, Granary Camera and Polar feeders"
category: home
ai: "claude"
evidence: experimental
aiRole: "From the changelog for 2026.10.2: \"I ran Claude's ultra code review over the add-on and fixed the issues it found\". One of the repo's 38 commits carries a \"Co-Authored-By: Claude Sonnet 5.5\" trailer. The README does not mention AI."
caveats: "From the README: \"this is still a young project, though it has been running my own devices since mid-August.\" It also says the redirect \"may void your device warranty\" and that owners must keep a care routine for their pets that does not depend on the software. A new device still needs the official Petlibro app and an account once, to join Wi-Fi. Setup needs Home Assistant OS or Supervised, the Mosquitto broker and a local DNS override. Some firmware falls back to Petlibro's cloud unless the device is blocked from the internet. Restarting Mosquitto reboots the feeders and fountains. Several models are marked beta. The Polar feeder is early beta and the author does not own one. The Granary Camera Feeder has no camera video. Petlibro's cloud is still running, so this is a local-control project on supported gear."
evidenceNote: "Public code, MIT, about 30 stars, 25 releases from v2026.08.1 on 21 August 2026 to v2026.11.2 on 10 November 2026."
repo: "smcneece/petlibro-local"
links:
  - { label: "repo", url: "https://github.com/smcneece/petlibro-local" }
  - { label: "ha_petlibro (cloud integration it builds on)", url: "https://github.com/jjjonesjr33/ha_petlibro" }
reviewed: 2026-11-14
submittedBy: unshittify
---

Petlibro's smart feeders and fountains are controlled through Petlibro's app and cloud. Shawn McNeece's Petlibro Local is a Home Assistant app that keeps them on the local network. The devices connect to Petlibro's MQTT server by name, so a local DNS override sends them to the owner's Mosquitto broker, and the app captures each device's login during setup. After that it offers feeding schedules, Feed Now, water level, pump and light controls, pet profiles and Home Assistant entities with no Petlibro cloud traffic.
