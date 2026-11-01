---
id: 76
title: "Local BGH Smart Control"
seoTitle: "BGH Smart Control air conditioners after the cloud shutdown"
device: "BGH Smart HVAC with the HPA4911 Smart Control kit"
category: home
ai: "none documented"
evidence: public
aiRole: "No AI involvement documented."
caveats: "Units must already be on your Wi-Fi; early setup needed the vendor app, a later tool handles it locally. Some kits had trouble configuring the IR module, which has limited range."
evidenceNote: "Public code + HA forum thread with user reports."
links:
  - { label: "repo", url: "https://github.com/arpena/hpa4911" }
  - { label: "ha forum", url: "https://community.home-assistant.io/t/bgh-smart-control-is-dead-long-life-to-local-bgh-smart-control/974020" }
reviewed: 2026-10-31
submittedBy: unshittify
---

BGH shut down the Smart Control cloud on 31 December 2025. Alfredo Peña reverse-engineered the kit's local protocol, and his Home Assistant integration controls mode, fan, swing and temperature without it.
