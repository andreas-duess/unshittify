---
id: 9
title: "pixma-rs"
device: "Canon G3010 scanner → macOS"
category: make
ai: "claude code"
evidence: public
aiRole: "Claude Code for protocol analysis and the Rust implementation. Owner supplied packet captures and tested."
caveats: "G3010 is the tested model. Other G-series machines are not automatically covered. Check current macOS requirements."
evidenceNote: "Public project + development write-up."
links:
  - { label: "repo", url: "https://github.com/pdrgds/pixma-rs" }
  - { label: "creator post", url: "https://www.reddit.com/r/ClaudeCode/comments/1sgqsug/i_used_claude_code_to_reverseengineer_a/" }
reviewed: 2026-10-28
submittedBy: unshittify
---

A Rust bridge from the G3010's scan protocol to something macOS understands. Scans from the usual Mac apps.
