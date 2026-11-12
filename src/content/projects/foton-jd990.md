---
id: 137
title: "foton-jd990"
seoTitle: "foton-jd990: a native macOS editor and librarian for the Roland JD-990"
device: "Roland JD-990 rack synthesizer (1993)"
category: audio
ai: "none documented"
evidence: public
aiRole: "The README does not mention AI. The release post tells owners with no build setup to let an agent such as Claude Code or Codex build the app for them."
caveats: "No prebuilt binaries. Linux untested, Windows not tried. The author says to expect rough edges. The editor never writes to the synth's internal memory."
evidenceNote: "Public code, AGPL-3.0, about 10 stars, started October 2026."
repo: "andremotz/foton-jd990"
links:
  - { label: "repo", url: "https://github.com/andremotz/foton-jd990" }
reviewed: 2026-11-12
submittedBy: unshittify
---

The JD-990's patch memory is battery-backed RAM from 1993, and the editors that once served it, Emagic's SoundDiver among them, are dead. André Motz's editor gives every SysEx parameter a native macOS interface: draggable envelopes, an effects page, a patch library and a performance view, built with JUCE and Rust.
