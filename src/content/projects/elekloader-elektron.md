---
id: 149
title: "elekloader"
seoTitle: "elekloader: a mod loader that builds custom OS files for Elektron instruments"
device: "Elektron Digitakt and Digitone (mk1), Digitone Keys, Octatrack MKI and MKII, Model:Cycles, Model:Samples, Analog Rytm MKI and MKII, Analog Four MKII, Digitakt II, Digitone II"
category: audio
ai: "claude (commits)"
evidence: public
aiRole: "The README does not say AI was used; its documentation table links AGENTS.md for \"coding agents\". 63 of the latest 100 commits carry a Claude Co-Authored-By trailer, most of them for Claude Opus 5.5. The repo root has CLAUDE.md, AGENTS.md and a .claude folder."
caveats: "From the README: \"elekloader is not affiliated with Elektron. Flashing custom firmware is at your own risk.\" It also says \"Nothing from Elektron is distributed\": the owner supplies Elektron's stock OS file and the custom OS is built on their own machine or in their browser. The bootloader is not touched, and the stock OS file recovers the device; most devices need 5-pin DIN MIDI for that. Digitakt II, Digitone II, Analog Four MKII and Analog Rytm MKI are marked experimental, and the Octatrack core has not been tried on an MKI. The same devices are covered on this site by Octabam (Octatrack) and Modded Cycles (Model:Cycles), which are each one custom OS; elekloader is a loader that combines separate mods and credits Octabam for its Octatrack facts. A feature project."
evidenceNote: "Public code, GPL-2.0-or-later, about 130 stars, repo created September 2026, release 0.10.0 on 9 November 2026."
repo: "elekloader/elekloader"
links:
  - { label: "repo", url: "https://github.com/elekloader/elekloader" }
  - { label: "mod shop", url: "https://elekloader.github.io/shop/" }
  - { label: "browser builder", url: "https://elekloader.github.io/elekloader/" }
reviewed: 2026-11-14
submittedBy: unshittify
---

elekloader, by irpina and contributors, is a mod loader for Elektron firmware that covers the Digitakt, Digitone, Octatrack, Model:Cycles, Model:Samples and Analog Rytm, with experimental support for newer machines. The owner picks mods, supplies the stock OS file Elektron publishes for the device, and the tool builds a custom OS file that is flashed like any OS update. Mods are checked against each other before the build, and a shop lists mods that other authors publish from their own repositories.
