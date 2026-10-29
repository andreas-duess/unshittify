---
id: 37
title: "CBE DS-300 ESPHome panel"
seoTitle: "A touchscreen replacement for a CBE motorhome control panel"
device: "CBE PC-100 / PC-200 / PC220 panel with DS-300 unit (2009 Elnagh motorhome)"
category: make
ai: "claude code"
evidence: public
aiRole: "Built with Claude Code, which found the connector pinout in CBE documentation and forums, planned the measurements, wrote the firmware and CAD scripts and drafted the docs. The owner did every measurement and wire on the real van."
caveats: "Pinout validated on one vehicle; measure yours first. This is 12 V vehicle wiring: fuse every +12 V wire. The replacement loses the original panel's low-voltage cut-off. Most screens need Home Assistant running in the van."
evidenceNote: "Public repo with firmware, pinout and build guide."
links:
  - { label: "repo", url: "https://github.com/danderik88/cbe-ds300-esphome-panel" }
reviewed: 2026-10-29
submittedBy: unshittify
---

The original seven-button panel is hard to find and expensive to replace. danderik88 built a 10-inch ESPHome touch panel that plugs into the same cable: 12 V main switch, water pump, temperatures, grey-water alarm and a Home Assistant dashboard. The distribution unit stays untouched.
