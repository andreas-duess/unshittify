---
id: 114
title: "Thingino"
seoTitle: "Thingino: open firmware for Wyze and other Ingenic IP cameras, local RTSP and ONVIF"
device: "Ingenic-based IP cameras incl. Wyze Cam v2, v3 and Pan v1, v2, v3"
category: home
ai: "coding agent (agent files)"
evidence: public
aiRole: "The repo has an AGENTS.md with instructions for coding agents. No AI use is claimed for the firmware itself."
caveats: "Back up the stock firmware first. Use the stable branch unless you're a developer; master uses an experimental bootloader. UART access and unbricking skills are highly recommended. Check your exact camera, SoC and sensor variant on the supported-hardware list."
evidenceNote: "Public MIT repo, about 2,300 stars, very active."
links:
  - { label: "site", url: "https://thingino.com/" }
  - { label: "repo", url: "https://github.com/themactep/thingino-firmware" }
  - { label: "supported hardware", url: "https://github.com/themactep/thingino-firmware/blob/master/docs/hardware/supported-hardware.md" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Cheap IP cameras ship with firmware that phones home to the vendor's cloud. Thingino replaces it with open firmware built on Buildroot for cameras with Ingenic chips, Wyze's included. The camera serves RTSP and ONVIF on your network, so any NVR or Home Assistant can use it with no vendor account.

[docker-wyze-bridge](/p/docker-wyze-bridge) keeps Wyze's firmware and still needs a Wyze login. Thingino removes both.
