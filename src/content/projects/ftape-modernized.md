---
id: 28
title: "ftape, modernised"
device: "QIC-80 floppy-controller and parallel-port tape drives"
category: computer
ai: "claude code"
evidence: public
aiRole: "Claude Code replaced outdated kernel APIs by feeding compiler output back into itself and helped diagnose hardware communication from dmesg logs. He says it would not have been possible without his own kernel knowledge, and it took several manual fixes."
caveats: "Works only with the same limited set of floppy-controller chipsets as the original driver. Verified on his own drives and still being tweaked."
evidenceNote: "Public code + write-up."
repo: "dbrant/ftape"
links:
  - { label: "write-up", url: "https://dmitrybrant.com/?p=2503" }
  - { label: "repo", url: "https://github.com/dbrant/ftape" }
reviewed: 2026-10-28
submittedBy: unshittify
---

Dmitry Brant brought the 25-year-old Linux ftape driver up to date as a loadable module, so his old tape drives run on Xubuntu 24.04 for data recovery instead of a CentOS 3.5 machine.
