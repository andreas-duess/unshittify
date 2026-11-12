---
id: 120
title: "MDX firmware and MCL"
seoTitle: "MDX: extended firmware for the Elektron Machinedrum, with Elektron's permission"
device: "Elektron Machinedrum SPS-1 and SPS-1UW (2001 to 2016, last official OS 1.63)"
category: audio
ai: "none documented"
evidence: public
aiRole: "No AI use documented in either repo."
caveats: "X.14 is the stable build; X.20 is a preview and one owner reports crashes on an MK1 UW. The MDX repo has no licence file. MCL needs the open MegaCommand or RP2040 hardware. Elektron has said MDX is the one mod it authorises."
evidenceNote: "Public code. MCL is BSD-3-Clause, about 90 stars; MDX about 65 stars, releases September and November 2026."
repo: "jmamma/MDX"
links:
  - { label: "MDX repo", url: "https://github.com/jmamma/MDX" }
  - { label: "MCL repo", url: "https://github.com/jmamma/MCL" }
reviewed: 2026-11-12
submittedBy: unshittify
---

Elektron discontinued the Machinedrum in 2016 and stopped OS work at 1.63. Justin Mammarella and Yatao Li have kept it going since: MDX adds a new machine class, lower MIDI latency and an extended SysEx mode, and MCL is companion firmware for an open controller board that turns the Machinedrum into a sequencing hub. Elektron's September 2026 statement on mods names MDX as the project it allows.
