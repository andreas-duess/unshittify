---
id: 98
title: "Creality for Home Assistant"
seoTitle: "Creality printers in Home Assistant: local control on stock firmware, no Creality Cloud"
device: "Creality Ender 3 V3 KE (other stock Klipper-firmware Creality printers untested)"
category: make
ai: "none documented"
evidence: experimental
aiRole: "No AI use documented in the repo."
caveats: "Tested on the Ender 3 V3 KE only; K1 and K2 series untested, WebRTC on K1C/K2 untested. Controls for hardware your model lacks can still appear. Unofficial weekend project, not endorsed by Creality. Energy and cost tracking is unfinished."
evidenceNote: "Public MIT repo with tests. Very new."
links:
  - { label: "repo", url: "https://github.com/filipeamorimdev/home-assistant-creality" }
reviewed: 2026-11-04
submittedBy: unshittify
---

Creality's newer printers run Klipper underneath but steer owners to Creality Cloud. filipeamorimdev's integration skips the account: it uses the WebSocket, HTTP and camera endpoints the printer already serves on the LAN, with no root and no Moonraker install.

It ships dashboard cards with the camera, controls and a G-code preview, archives timelapses to a folder or NAS, keeps print history with a print-again button and looks up error codes from Creality's wiki.
