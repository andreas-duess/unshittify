---
id: 30
title: "TR-8S Studio"
device: "Roland TR-8S drum machine (firmware 2.51), on Linux"
category: make
ai: "claude code"
evidence: public
aiRole: "Most of the code was written with Claude Code, per the creator, who tested every claim against the real hardware."
caveats: "Linux only (ALSA raw MIDI). The tutor mode he cares about most isn't built yet. Protocol claims are marked as verified or unverified."
evidenceNote: "Public project + creator account."
links:
  - { label: "repo", url: "https://github.com/ideaCompany/tr8s-studio" }
  - { label: "creator post", url: "https://www.reddit.com/r/linuxaudio/comments/1w5adsp/" }
reviewed: 2026-10-28
submittedBy: unshittify
---

ideaCompany's web studio talks to the TR-8S over its reverse-engineered SysEx protocol, mirrors the machine live, and includes an assistant that builds grooves on the hardware using your own Claude subscription.
