---
id: 89
title: "Huawei AH100"
seoTitle: "Huawei AH100 scale in Home Assistant over Bluetooth, no Huawei Health account"
device: "Huawei AH100 / CH100 smart scale"
category: home
ai: "none documented"
evidence: experimental
aiRole: "No AI use documented in the repo or commits. The protocol code is a GPL port of openScale's Huawei handler."
caveats: "Version 0.3.0. One real scale reading has gone through the manual profile flow; profile confirmation, household automations and the SparkyFitness export are not yet validated on hardware. Bluetooth proxies unverified. The scale takes one connection, so keep Huawei Health disconnected. Needs Home Assistant 2026.10 or newer. Gives weight, body fat and impedance only; no derived metrics."
evidenceNote: "Public GPL-3.0 repo, installable via HACS. Builder's X post."
links:
  - { label: "repo", url: "https://github.com/frankbrg/huawei-ah100" }
  - { label: "openscale", url: "https://github.com/oliexdev/openScale" }
  - { label: "post", url: "https://x.com/Frank_Brg/status/2114407624829530378" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Frank Berge wanted his weight data on his own server, not in Huawei Health. His Home Assistant integration talks to the scale over Bluetooth, handling its authentication and AES-encrypted frames, and gives each person in the house a profile with weight, body fat, impedance and last-measurement sensors. Readings can also sync to SparkyFitness. No cloud, no MQTT, no Docker.
