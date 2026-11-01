---
id: 71
title: "Game Capture HD II, new firmware"
seoTitle: "AVerMedia Game Capture HD II revived with custom firmware written by Claude Code"
device: "AVerMedia Game Capture HD II (C285, TI DM368)"
category: computer
ai: "claude code"
evidence: report
aiRole: "Claude Code with Opus and Fable models did the firmware analysis and wrote the recording app, servers, web UI and build. The hardware work was manual. The write-up lists the AI's mistakes too, including once inventing evidence."
caveats: "Code is not published, by choice. One unit, bricked and recovered several times. 1080p needed codec memory freed. Each flash takes about 15 minutes."
evidenceNote: "Creator post + Reddit and HN threads."
links:
  - { label: "creator post", url: "https://chiptron.eu/reviving-old-unsupported-devices-with-ai-avermedia-game-capture-hd-ii/" }
  - { label: "reddit", url: "https://www.reddit.com/r/hardwarehacking/comments/1vp44wj/" }
  - { label: "hn", url: "https://news.ycombinator.com/item?id=49272650" }
reviewed: 2026-10-31
submittedBy: unshittify
---

The box's YouTube streaming, cloud and app are all gone, and its firmware refused 640×480 input. Vladimir Smitka got root over the serial port and had Claude Code write new firmware: H.264 over RTSP into OBS, recording, a web UI, any resolution, and 60 fps at 640×480 instead of 3.6.
