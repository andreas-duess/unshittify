---
id: 135
title: "Animatek NME"
seoTitle: "Animatek NME: a current editor for the Clavia Nord Modular G1 and Micro Modular"
device: "Clavia Nord Modular G1 and Micro Modular (1998 to 2004)"
category: audio
ai: "claude (agent files)"
evidence: public
aiRole: "The repo contains CLAUDE.md and AGENTS.md files and an MCP bridge that lets AI assistants build and edit patches inside the editor. The README makes no statement about how the code was written."
caveats: "Version 0.26 beta. Prebuilt binaries come via Patreon or a small store fee; building from source is free. Linux MIDI may need JUCE patches, and the plugin build is experimental."
evidenceNote: "Public code, GPL-3.0, about 70 stars, active since February 2026."
repo: "animatek/Animatek-NME"
links:
  - { label: "repo", url: "https://github.com/animatek/Animatek-NME" }
reviewed: 2026-11-12
submittedBy: unshittify
---

Clavia's editor for the first Nord Modular is long gone, and the community's Java replacement, Nomad, needs an old Java runtime. Javier Melgar reimplemented Nomad in C++ with JUCE: patch and bank editing over SysEx, backups, module presets, DSP cost display and a patch mutator, on macOS, Windows and Linux.
