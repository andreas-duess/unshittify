---
id: 97
title: "Huawei Solar"
seoTitle: "Huawei Solar for Home Assistant: local Modbus control of SUN2000 inverters and batteries"
device: "Huawei SUN2000 inverters, LUNA batteries, power meters and optimizers"
category: home
ai: "claude (commits)"
evidence: public
aiRole: "Recent commits carry Co-authored-by: Claude trailers. The repo's AI_POLICY.md allows AI as a contributor's tool and bans autonomous agents."
caveats: "Needs inverter firmware from 2023 or later, and Modbus TCP enabled on the inverter. Modbus allows one connection at a time, so it can clash with other local tools. The port can change after a firmware update. Battery and export control need \"elevated permissions\" and change how the system runs."
evidenceNote: "Public AGPL-3.0 repo, in the HACS default store, about 940 stars, with a wiki."
links:
  - { label: "repo", url: "https://github.com/wlcrs/huawei_solar" }
  - { label: "wiki", url: "https://github.com/wlcrs/huawei_solar/wiki" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Huawei's home solar systems report to the FusionSolar cloud. wlcrs's integration talks to the inverter over Modbus instead, by RS485 on the COM port or over the network, and brings inverter, battery, meter and optimizer data into Home Assistant and its Energy dashboard.

With elevated permissions on, it can also limit grid export and force the battery to charge or discharge, locally.
