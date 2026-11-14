---
id: 150
title: "LANovo"
seoTitle: "LANovo: Lenovo Smart Displays as local Home Assistant voice panels"
device: "Lenovo Smart Display 7, 8 and 10, JBL Link View, Lenovo ThinkSmart View"
category: home
ai: "codex (commits)"
evidence: public
aiRole: "The README and the documentation site do not mention AI, and the maintainer's commits carry no AI trailers. Three of the latest 100 commits, from a contributor, end with \"Prepared with OpenAI Codex for ygelfand/LANovo#6.\""
caveats: "The display must be unlocked first. For the Smart Display 7, 8, 10 and JBL Link View the README points to community guides on XDA and says to flash the \"Android 8.1 Debug Firmware\"; the ThinkSmart View is flashed whole over EDL with LANovo's boot image. LANovo replaces Google Assistant on the device, and Home Assistant is required. The README calls its Chromecast receiver experimental. The Wi-Fi setup supports WPA2 or open networks, not WPA3-only or enterprise networks. The README does not say what Google has done to support for these displays. Version 0.0.7."
evidenceNote: "Public code, AGPL-3.0, about 50 stars, repo created October 2026, release 0.0.7 on 10 November 2026."
repo: "ygelfand/LANovo"
links:
  - { label: "repo", url: "https://github.com/ygelfand/LANovo" }
  - { label: "docs", url: "https://www.lanovo.link" }
  - { label: "echolocal (sister project)", url: "https://github.com/ygelfand/echolocal" }
reviewed: 2026-11-14
submittedBy: unshittify
---

Lenovo's Smart Displays and the JBL Link View were built around Google Assistant. ygelfand's LANovo replaces it with software that Home Assistant discovers through the ESPHome native API. The display becomes a voice satellite with on-device wake words, a dashboard for lights, cameras and alarms, a media player for Home Assistant and Music Assistant, a Bluetooth proxy and an RTSP camera, using the display's existing microphones, speakers, camera and sensors.
