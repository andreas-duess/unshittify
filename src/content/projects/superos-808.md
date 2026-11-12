---
id: 124
title: "SuperOS-808"
seoTitle: "SuperOS-808: open replacement firmware for the Roland TR-808 CPU"
device: "Roland TR-808 drum machine (1980 to 1983)"
category: audio
ai: "claude (press report)"
evidence: public
aiRole: "Synth Anatomy reports that Bjorn Lustic developed the firmware with help from Claude. The README and changelog do not say so, so the credit rests on the press report."
caveats: "Version 0.4. A CPU replacement in a 45-year-old machine; the analog voices are untouched. Needs an ISP programmer for a fresh board, and the rotary controls need calibrating per machine. Stock behaviour needs a program dump from your own CPU. No licence file."
evidenceNote: "Public code, about 15 stars, first commit August 2026. The sibling OS-303 for the TB-303 is MIT, about 50 stars."
repo: "bjornlustic/SuperOS-808"
links:
  - { label: "repo", url: "https://github.com/bjornlustic/SuperOS-808" }
  - { label: "manual", url: "https://superos303.com/doc/808" }
  - { label: "OS-303 for the TB-303", url: "https://github.com/djphazer/OS-303" }
reviewed: 2026-11-12
submittedBy: unshittify
---

The 808's mask-ROM CPU is a single point of failure with no MIDI. SuperOS-808 runs on a small AVR board that sits in the original CPU socket and adds MIDI in, out and clock, 64-step patterns with probability and ratchets, and a browser editor over SysEx. A combined build can also boot the owner's own dump of the 1981 program for stock behaviour. Nicholas Michalek's OS-303 does the same job for the TB-303.
