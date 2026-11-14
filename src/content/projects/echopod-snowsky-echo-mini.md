---
id: 154
title: "EchoPod"
seoTitle: "EchoPod: replacement firmware with Cover Flow for the Snowsky Echo Mini"
device: "Snowsky (FiiO) Echo Mini 8 GB music player"
category: audio
ai: "claude"
evidence: experimental
aiRole: "From CREDITS.md, on the interface translations: \"The other language files were written by Claude and no native speaker has reviewed them.\" From the release notes for 0.9.1: \"Most of this comes from a comparison with FiiO's 4.0.0 firmware that velppa's Claude Code made (issue 12).\" The README does not mention AI, none of the roughly 420 commits carries a Co-Authored-By trailer, and the repo has no agent files. The sources do not say whether AI wrote firmware code."
caveats: "From the known issues file: \"EchoPod is early firmware made by one person and tested on one player. It comes with no warranty: use it at your own risk.\" Custom firmware left Echo Mini players unable to start during development; all were recovered through the chip's maskrom mode, which needs a patched tool. A power cut during an install is a risk. Installing from a Mac is unproven. The 512 MB Echo Mini is not supported. FiiO's firmware can be put back by file copy, checked with FiiO's 3.7.0 to 4.0.0 images. EchoPod is a feature project: the sources do not describe the Echo Mini as abandoned, and the release notes compare against FiiO firmware 4.0.0. Not made or supported by FiiO."
evidenceNote: "Public code, GPL-3.0-or-later, about 100 stars, 17 releases from v0.1.0 on 24 October 2026 to v0.12.0 on 11 November 2026."
repo: "BasilSkyWalk/echopod"
links:
  - { label: "repo", url: "https://github.com/BasilSkyWalk/echopod" }
  - { label: "known issues", url: "https://github.com/BasilSkyWalk/echopod/blob/main/docs/known-issues.md" }
  - { label: "rechord (hardware research)", url: "https://github.com/brnomt/ReChord" }
reviewed: 2026-11-14
submittedBy: unshittify
---

The Snowsky Echo Mini is a small music player from FiiO that runs FiiO's own closed firmware. BasilSkyWalk's EchoPod replaces that firmware on the 8 GB model. It adds an iPod-style Cover Flow browser, a music library that the player builds itself, favorites, M3U playlists, an Up Next queue, and separate shelves for audiobooks and podcasts. The hardware knowledge comes largely from the ReChord project, and the player can go back to FiiO's firmware by file copy.
