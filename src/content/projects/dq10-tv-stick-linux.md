---
id: 77
title: "DQ10 stick, malware out"
seoTitle: "A malware-laden Android TV stick wiped and running Armbian, done by Claude Code"
device: "No-name DQ10 Android TV stick (Allwinner H618)"
category: computer
ai: "claude code"
evidence: public
aiRole: "Claude Code ran the job: an Opus session drove the hardware, a Sonnet subagent built the code, and separate Opus subagents audited each step. Nothing was flashed until an audit passed. The README says so."
caveats: "Proven on one unit. Bluetooth, audio, IR, microSD and video decoding are not verified. Memory settings are hard-coded for this board; other H616 boxes aren't supported. One failure state has no software recovery."
evidenceNote: "Public code + Reddit post."
links:
  - { label: "repo", url: "https://github.com/itsmeorestis/dq10-h616-linux" }
  - { label: "reddit", url: "https://www.reddit.com/r/ClaudeCode/comments/1xjtuwx/" }
reviewed: 2026-10-31
submittedBy: unshittify
---

Sold as Android 13, the stick ran an older Android with open root access, a remote-command system and a hidden reverse-tunnel binary. itsmeorestis had Claude Code back it up, wipe it and install mainline U-Boot and Armbian over USB, with no soldering. The repo lists the malware's fingerprints.
