---
id: 25
title: "Audeze Maxwell parametric EQ"
device: "Audeze Maxwell gaming headset (PlayStation version)"
category: audio
ai: "claude code"
evidence: public
aiRole: "Claude Code and Codex for the reverse engineering and the app, per the creator."
caveats: "Shelf and pass filters are experimental. Editing doesn't work over Bluetooth, and the Audeze app must be closed. Xbox and Maxwell 2 versions are untested; Maxwell 2 ANC is not supported. Builds are unsigned."
evidenceNote: "Public project + creator account."
links:
  - { label: "repo", url: "https://github.com/Aquaspaces/maxwell-peq" }
  - { label: "creator post", url: "https://www.reddit.com/r/Audeze/comments/1x4swd2/" }
reviewed: 2026-10-28
submittedBy: unshittify
---

Aquaspaces writes a full parametric EQ, up to 10 filters, into the headset's own custom preset slots. It stays on the headset over the dongle, USB-C and Bluetooth, with no firmware flash.
