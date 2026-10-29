---
id: 62
title: "Xiaomi humidifier, local"
seoTitle: "A Xiaomi humidifier freed from the cloud"
device: "Xiaomi Mi Smart Antibacterial Humidifier (ZNJSQ01DEM)"
category: home
ai: "none documented"
evidence: public
aiRole: "No AI involvement documented."
caveats: "Open the unit, remove the Wi-Fi module and solder to its serial pins; flash with the module disconnected, at 3.3 V. One creator, one unit; the post does not list which features work."
evidenceNote: "Public code + creator post."
links:
  - { label: "creator post", url: "https://0l.de/blog/2025/11/xiaomi-humidifier/" }
  - { label: "code", url: "https://codeberg.org/stv0g/esphome-config/src/master/components/xiaomi_deerma_humidifier" }
reviewed: 2026-10-29
submittedBy: unshittify
---

Xiaomi changed the humidifier's internal protocol and broke the earlier open firmware. Steffen Vogel wrote a new ESPHome component for its Wi-Fi module, so it runs locally in Home Assistant with no Xiaomi cloud.
