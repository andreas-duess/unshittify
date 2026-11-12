---
id: 139
title: "emu3fs and emu3bm"
seoTitle: "emu3fs: mount E-mu Emulator III, ESI and EIV sampler disks on Linux"
device: "E-mu Emulator III, ESI and Emulator IV samplers (1987 to the late 1990s)"
category: audio
ai: "none documented"
evidence: public
aiRole: "No AI use documented."
caveats: "Linux only, and the kernel module must be built against the tag for your kernel. SD cards are limited to 14 GB by the ESI OS. The sampler allows duplicate filenames, which confuses a directory listing. Non-SCSI CD drives need a loop device."
evidenceNote: "Public code, GPL-3.0, maintained since 2014, last pushes February and August 2026."
repo: "dagargo/emu3fs"
links:
  - { label: "emu3fs repo", url: "https://github.com/dagargo/emu3fs" }
  - { label: "emu3bm repo", url: "https://github.com/dagargo/emu3bm" }
reviewed: 2026-11-12
submittedBy: unshittify
---

E-mu never documented the disk format its samplers use, so the only way to manage their banks from a computer was a Windows tool. David García Goñi's emu3fs is a Linux kernel module that mounts EIII, ESI and EIV media, including SD cards behind a SCSI2SD adapter, for reading and writing. emu3bm is the companion command-line bank manager for presets and sample import and export.
