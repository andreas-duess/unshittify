---
id: 140
title: "Polyend Tracker Community Edition"
seoTitle: "Polyend Tracker CE: the maker open-sourced the firmware after owners started a clean-room rewrite"
device: "Polyend Tracker (2020), Tracker+ and Tracker Mini"
category: audio
ai: "none documented"
evidence: public
aiRole: "No AI use documented in Tracker CE. The open letter behind RETracker-REWrite argued that AI tools made a clean-room firmware feasible."
caveats: "MIT for the source, SDKs and open synth engines, with a restriction on wholesale commercial clones; the precompiled PolySynth and PolyDSP libraries stay proprietary. Polyend provides no support for CE builds. RETracker-REWrite itself stopped at one commit and ships no binaries."
evidenceNote: "Public code from the maker, about 350 stars within three weeks of release in November 2026."
repo: "polyend/tracker-ce"
links:
  - { label: "Tracker CE repo", url: "https://github.com/polyend/tracker-ce" }
  - { label: "RETracker-REWrite", url: "https://github.com/00xZEROx00/RETracker-REWrite" }
reviewed: 2026-11-12
submittedBy: unshittify
---

In July 2025 a Tracker owner published an open letter to Polyend about slow bug fixes, no firmware archive and no SDK, and started RETracker-REWrite, a clean-room firmware. The rewrite went nowhere. In November 2026 Polyend published the full firmware source for all three Trackers as a Community Edition, with build instructions, a plugin SDK and the bootloader's recovery button to fall back on. Listed because the ending is the point: pressure from owners produced an open firmware.
