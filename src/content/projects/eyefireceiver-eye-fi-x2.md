---
id: 157
title: "EyeFiReceiver"
seoTitle: "EyeFiReceiver: a local photo receiver for Eye-Fi X2 Wi-Fi SD cards"
device: "Eye-Fi X2 Wi-Fi SD cards"
category: computer
ai: "none documented"
evidence: public
aiRole: "No AI use documented in the README or the four commits."
caveats: "Almost no adoption: one star and no forks. Windows only, with Python 3.12 or newer. The README lists 40 offline unit tests that run without a physical card and does not say which cards were tested. Cards on firmware 5.0 and older do not reveal their upload key; the app then looks for the key in an old Eye-Fi Center or X2 Utility install, and a card whose key cannot be found works through a card reader only. Eye-Fi's update server is gone, so card firmware can no longer be updated. The LICENSE file is MIT with a note that a bundled protocol reference (eyefi-config by Dave Hansen) is GPLv2; GitHub does not recognise the licence because of that note."
evidenceNote: "Public code, MIT with a bundled GPLv2 reference archive, 1 star, 4 commits from 19 to 22 September 2026, no releases."
repo: "MSClub-smart/Eyefi-x2-receiver"
links:
  - { label: "repo", url: "https://github.com/MSClub-smart/Eyefi-x2-receiver" }
  - { label: "eyefi-config (protocol reference)", url: "https://github.com/hansendc/eyefi-config" }
  - { label: "wikipedia: eye-fi", url: "https://en.wikipedia.org/wiki/Eye-Fi" }
reviewed: 2026-11-14
submittedBy: unshittify
---

Eye-Fi announced on 30 June 2016 that its software would stop supporting X2 and older cards after 16 September 2016, and the company ceased business that year. Without Eye-Fi's servers the official software could no longer activate a card or receive its photos. Minsik Choi's EyeFiReceiver is a Python program for Windows that registers an X2 card through a card reader, sets the card's Wi-Fi network and receives its photos over Wi-Fi on the owner's PC.
