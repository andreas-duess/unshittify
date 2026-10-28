---
id: 8
title: "SmartThings washer driver"
device: "Samsung WW10H9400EW washing machine"
category: home
ai: "claude"
evidence: public
aiRole: "Claude helped develop the driver. Running on the creator's own machine."
caveats: "One confirmed model; other generations use other protocols. Smart Control still has to be enabled on the machine. The washer link is local, but the rest of SmartThings may still use the cloud."
evidenceNote: "Public project + creator account."
links:
  - { label: "repo", url: "https://github.com/McArhony/smartthings-samsung-drc-washer" }
  - { label: "creator post", url: "https://www.reddit.com/r/ClaudeAI/comments/1xemw8i/samsung_decided_to_cut_my_washing_machine_from/" }
reviewed: 2026-10-28
submittedBy: unshitify
---

The old app workflow was discontinued. The owner wrote a SmartThings Edge driver that talks to the washer locally through a compatible hub.
