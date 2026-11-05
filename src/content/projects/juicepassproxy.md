---
id: 112
title: "JuicePass Proxy"
seoTitle: "JuicePass Proxy: local control of JuiceBox EV chargers after Enel X left North America"
device: "Enel X JuiceBox EV chargers (protocols v07 and v09u; v09u tested on JuiceBox 2.x)"
category: vehicle
ai: "none documented"
evidence: public
aiRole: "No AI use documented."
caveats: "The maintainers can't assure it works on every JuiceBox version, and not every firmware has telnet. Charger and proxy need static IPs. The offline max current is written to EEPROM, so don't change it often, and setting 0 A repeatedly may wear the contactor. Stay within your circuit's limits."
evidenceNote: "Public Apache-2.0 repo + coverage of the shutdown."
links:
  - { label: "repo", url: "https://github.com/JuiceRescue/juicepassproxy" }
  - { label: "insideevs", url: "https://insideevs.com/news/736041/enel-x-juicebox-discontinued/" }
  - { label: "canary media", url: "https://www.canarymedia.com/articles/ev-charging/enel-x-way-abandoned-its-us-ev-charging-customers-what-happens-next" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Enel X Way announced on October 2, 2024 that it was leaving North America nine days later. JuiceBox chargers kept charging, but the app, scheduling and monitoring went with the servers.

JuicePass Proxy sits between the charger and where its cloud used to be. You redirect the charger's UDP traffic with a DNS override, a NAT rule or a telnet command, and the proxy turns it into Home Assistant entities over MQTT. With the Enel X connection ignored, control stays local.
