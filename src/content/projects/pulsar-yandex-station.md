---
id: 151
title: "pulsar"
seoTitle: "pulsar: Yandex Station speakers as local Home Assistant voice satellites"
device: "Yandex Station Midi, Station 2, Lite 2, Mini 2, Mini 3, Mini 3 Pro and first-generation Mini smart speakers"
category: home
ai: "coding agents"
evidence: public
aiRole: "The README does not say which tools wrote the code. Its developer section points to AGENTS.md and .agents/skills/ as the repository rules and procedures for developers and agents (the text is in Russian). AGENTS.md mentions Codex and Claude Code, and a .claude/skills link exists for Claude Code. AGENTS.md forbids AI names in commit authors and trailers, so the commits show none."
caveats: "The README and docs are in Russian. The speaker must already have root access over adb; the README says rooting is not part of the project. No Yandex libraries are in the repository: the daemon loads Yandex's proprietary libraries from the speaker at run time. From the README's limits section: the speaker still uses the firmware's DNS and NTP, which point at Yandex servers, and stays tied to the Yandex account; pulsar does not block Yandex firmware updates, and an update can remove pulsar's autostart; the Windows and macOS installer is untested on real computers; optional SSH logs in as root with no password. Only the Midi and the Lite 2 (plum board) are tested by the maintainer; the other models are experimental or rest on contributors' reports. Zigbee on the Midi is experimental. The README says the project is not connected to Yandex and use is at the owner's risk. Yandex's software can be restored with one command."
evidenceNote: "Public code, AGPL-3.0, about 110 stars, repo created October 2026, release v0.6.1 on 10 November 2026."
repo: "Morvex885/pulsar"
links:
  - { label: "repo", url: "https://github.com/Morvex885/pulsar" }
  - { label: "agents.md", url: "https://github.com/Morvex885/pulsar/blob/main/AGENTS.md" }
reviewed: 2026-11-14
submittedBy: unshittify
---

Yandex Station speakers run Yandex's own software and depend on Yandex's cloud. Morvex885's pulsar is a small Rust daemon that runs on a rooted speaker in place of that software and speaks the ESPHome native API, so Home Assistant sees the speaker as a voice satellite and media player, and Music Assistant sees a Sendspin player. It keeps the "Alisa" and "Yandex" wake words and drives the speaker's LEDs, clock, buttons and microphone switch. On the Station Midi the built-in Zigbee radio can work as a coordinator or router.
