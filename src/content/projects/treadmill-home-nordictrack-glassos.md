---
id: 87
title: "Treadmill Home"
seoTitle: "Treadmill Home: Netflix and Crunchyroll on a NordicTrack treadmill without iFit"
device: "NordicTrack Commercial 2250 treadmill (GlassOS \"Gen 6\" console, Android 9 tablet)"
category: home
ai: "claude code"
evidence: public
aiRole: "Built with Claude Code over about a day and a half, with a CLAUDE.md file as the project's running memory. The builder credits the QZ (qdomyos-zwift) project for the GlassOS motor-service access the app relies on."
caveats: "Tested on one Commercial 2250 only; older iFit/ERU consoles won't work. Getting ADB on needs iFit's privileged mode, and recent builds ask for a customer-care response code. iFit's motor service listens on the whole Wi-Fi with a public client certificate, so anyone on the network can start the belt; keep the treadmill on a network you control. Removing iFit's eru app keeps ADB on after restarts. Netflix plays in SD (Widevine L3), the tablet is slow and there is no Google Play, so apps are sideloaded. Can void the warranty, and a factory reset or iFit update can undo it. The safety key and Stop button stay the real way to stop."
evidenceNote: "Public MIT repo with setup, safety notes and an undo section + builder's Reddit post. One machine."
repo: "Crawler757/treadmill-home"
links:
  - { label: "repo", url: "https://github.com/Crawler757/treadmill-home" }
reviewed: 2026-11-03
submittedBy: unshittify
---

The treadmill's big screen was the selling point, until it turned out Netflix and everything else beyond basic workout controls sat behind an iFit subscription, with ads and a slow load in front of every run. The screen is an Android 9 tablet, so Crawler757 replaced the home screen: big tiles for sideloaded streaming apps, a top bar with speed, incline, time and distance over every app, on-screen start, stop, speed and incline controls, and a quarter-mile lap tracker. iFit's own motor service keeps driving the belt, so nothing talks to the motor board directly.

The build doesn't replace iFit's console app the way [STRIDE](/p/stride-nordictrack-without-ifit/) does. It keeps GlassOS underneath and goes through the same gRPC motor service the QZ app uses. The repo has a "lessons learned" list worth reading before you try it: disabling `com.ifit.rivendell` killed the motor service, and hiding iFit apps the wrong way got the motor service disabled on the next boot.
