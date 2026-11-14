---
id: 146
title: "Akai S2000 Rosetta OS"
seoTitle: "Rosetta OS: effects for the Akai S2000 sampler without the EB16 board"
device: "Akai S2000 sampler, stock OS 2.0"
category: audio
ai: "claude"
evidence: experimental
aiRole: "From the README: \"Made by JunkSmithWizard (JSW) together with Claude (Anthropic's AI). Claude wrote the code and did the reverse engineering: NEC V53 disassembly, a whole-OS emulator, and the hidden delay engine measured over MIDI. JSW ran every build on a real S2000, built the measurement rig, and made the calls by ear.\" All 30 commits carry a Claude Co-Authored-By trailer."
caveats: "The README calls it work in progress: \"Expect rough edges.\" Known issue: the moving effects (CHORUS, FLANGER, JUNO, TAPE) crackle on held chords. Some features are marked as tested in the emulator only. The reverbs use one delay line and the README describes them as metallic. You build the boot disk yourself from your own OS 2.0 floppy and need Python, NASM and a Gotek floppy emulator with FlashFloppy; no Akai code is in the repo and there are no releases. Nothing is written to ROM or flash, and booting the stock disk returns the sampler to stock. From the README: \"Build at your own risk; always keep your stock OS disk.\" A feature project on an old sampler."
evidenceNote: "Public code, MIT, about 5 stars, created 13 October 2026, last commit 6 November 2026."
repo: "yuyoi/Akai-S2000-Rosetta-OS"
links:
  - { label: "repo", url: "https://github.com/yuyoi/Akai-S2000-Rosetta-OS" }
  - { label: "landing page", url: "https://yuyoi.github.io/Akai-S2000-Rosetta-OS/" }
reviewed: 2026-11-14
submittedBy: unshittify
---

An Akai S2000 has no effects unless the EB16 effects board is fitted. JunkSmithWizard (yuyoi on GitHub) and Claude found that the sampler's voice chip has a delay engine that the stock OS barely uses, and mapped it from a PC over MIDI. Rosetta OS is a patch kit for the stock OS 2.0 that boots from a Gotek floppy emulator and turns that engine into reverb, echo and reverse delay, for played notes and for the live input. It also adds new menus, one-button sampling and a synth layer.
