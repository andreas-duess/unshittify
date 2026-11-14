---
id: 148
title: "MIDISTOMP"
seoTitle: "MIDISTOMP: MIDI control, routing and a looper for Zoom MultiStomp pedals"
device: "Zoom MS-50G, MS-60B and MS-70CDR MultiStomp pedals (the original models)"
category: audio
ai: "claude (commits)"
evidence: public
aiRole: "The README does not mention AI. 83 of the latest 100 commits carry a Co-Authored-By trailer for Claude Opus 5.5."
caveats: "From the README: \"Not affiliated with or supported by Zoom. Flashing modified firmware can brick a pedal.\" The release contains no Zoom firmware. It is a builder for Windows and Mac: the owner downloads Zoom's official MS-70CDR 2.10 updater, and the builder writes a modified updater from that copy. The README says the updater never rewrites the bootloader and that Zoom's original updater restores the stock firmware. One build runs on all three pedals, so each reports itself as an MS-70CDR over USB afterwards. The MS-60B is listed as tested with v1.2. The MS-50G+, MS-70CDR+, MS-200D+ and the Four series are not supported. The README describes the project as \"made by one person with one pedal\". A feature project; MIDI runs over USB only."
evidenceNote: "Public code, MIT, about 40 stars, repo created October 2026, release v2.0.3 on 13 November 2026."
repo: "matujuice/zoom-ms-midistomp"
links:
  - { label: "repo", url: "https://github.com/matujuice/zoom-ms-midistomp" }
  - { label: "user guide", url: "https://github.com/matujuice/zoom-ms-midistomp/blob/main/docs/user-guide.md" }
  - { label: "custom effects pack", url: "https://github.com/matujuice/zoom-ms-zdl-effects-pack" }
reviewed: 2026-11-14
submittedBy: unshittify
---

matujuice's MIDISTOMP replaces the operating system of the original Zoom MS-50G, MS-60B and MS-70CDR pedals. It adds MIDI control over USB (program change, control change for every knob, clock sync), parallel effect routing, a tempo-synced looper, a Perform mode and level meters, and raises the DSP limit from 225 to 300. Patches and installed effects are kept, and the pedal can be returned to stock with Zoom's own updater.
