---
id: 27
title: "Dell webcam and Elgato light on Linux"
device: "Dell UltraSharp Webcam 4K (WB7022) and Elgato Key Light"
category: computer
ai: "claude"
evidence: public
aiRole: "Claude rebuilt the webcam app from screenshots of the Windows app and pulled the USB property values out of the Windows binaries. For the light, Claude updated an old extension for current GNOME and wrote the settings app."
caveats: "Dell's software features such as background removal are not implemented. The Elgato app covers most of what the Windows app does."
evidenceNote: "Public code + write-up."
links:
  - { label: "write-up", url: "https://blogs.gnome.org/uraeus/2026/03/23/using-ai-to-create-some-hardware-tools-and-bring-back-the-past/" }
  - { label: "webcam app", url: "https://gitlab.com/cschalle/appfordellwebcam" }
  - { label: "elgato extension", url: "https://gitlab.com/cschalle/gnome-shell-elgato-light-controller" }
reviewed: 2026-10-28
submittedBy: unshittify
---

Christian Schaller rebuilt Dell's Windows-only webcam settings app for Linux, integrated with PipeWire, and wrote a GNOME Shell extension with a settings app for his Elgato Key Light.
