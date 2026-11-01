---
id: 86
title: "Briturn bulbs in Google Home"
seoTitle: "Briturn bulbs in Google Home via a no-name Android TV box"
device: "Briturn Wi-Fi RGBCW bulbs (Zengge/Magic Home protocol), hosted on a no-name 32-bit Android 9 TV box"
category: home
ai: "claude code"
evidence: public
aiRole: "Claude Code did the protocol research, wrote the CLI, gateway code and tests, drove the TV box over SSH and helped through the Google console. The owner handled the box physically and approved each step that touched the network, Google or a light."
caveats: "Nothing starts automatically: after a restart, SSH, the gateway and the tunnel have to be started by hand. The free Cloudflare Quick Tunnel hostname changes on every restart, so the URLs in the Google console must be updated each time; a named tunnel on your own domain would fix this. Personal test integration without Report State, so changes made elsewhere show up late. You run a public OAuth endpoint on a home device. Tested on one box and two bulbs. The repo has no licence."
evidenceNote: "Public code + write-up. One box, two bulbs."
links:
  - { label: "repo", url: "https://github.com/MichaelBruck/briturn-google-home" }
  - { label: "tv box write-up", url: "https://github.com/MichaelBruck/briturn-google-home/blob/HEAD/docs/TV-BOX-HOME-HUB.md" }
reviewed: 2026-11-01
submittedBy: unshittify
---

Linking the Briturn cloud to Google Home failed with OAuth errors, so the bulbs only worked from the vendor app. There was no Google hub for Matter, and current Home Assistant no longer runs on 32-bit ARM. Michael Bruck controls the bulbs over the LAN with flux_led and runs a small Google Home cloud-to-cloud gateway in Termux on a spare TV box, behind a Cloudflare tunnel. The Google Home app handles on/off, brightness, colour and white temperature, with no Briturn cloud, hub or subscription.
