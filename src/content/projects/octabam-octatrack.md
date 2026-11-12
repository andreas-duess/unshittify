---
id: 119
title: "Octabam"
seoTitle: "Octabam: a community operating system for the Elektron Octatrack"
device: "Elektron Octatrack MKI (2010) and MKII (2017), OS 1.40C"
category: audio
ai: "claude (commits)"
evidence: public
aiRole: "The README does not mention AI. Recent commits carry a Claude Co-Authored-By trailer or \"claude\" as committer, and the repo has CLAUDE.md and AGENTS.md files."
caveats: "From the README: writing an unofficial OS to an Octatrack can leave it unusable and puts the warranty in question. Many modules are tested only in an emulator. Coverage differs between MKI and MKII. Built images must not be shared; each owner builds from their own 1.40C. Elektron banned sharing modified firmware on its forum in September 2026."
evidenceNote: "Public code, MIT for the project's own code, about 300 stars, over 4,000 commits since August 2026."
repo: "sambanks/octabam"
links:
  - { label: "repo", url: "https://github.com/sambanks/octabam" }
reviewed: 2026-11-12
submittedBy: unshittify
---

Elektron's Octatrack OS is closed and 1.40C is the last version. Sam Banks's Octabam takes the owner's own OS file and composes a new image from about ninety modules: send-bus reverb and delay, per-track inserts, parameter locks on MIDI tracks, bug fixes. Many of the modules are ports of earlier community mods, and the effects are written in the machine's own DSP assembly.
