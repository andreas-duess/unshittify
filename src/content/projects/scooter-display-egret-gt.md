---
id: 155
title: "scooter-display"
seoTitle: "scooter-display: custom Rust display firmware for the Egret GT e-scooter"
device: "Egret GT and GTS e-scooter, display unit (AT32F415 microcontroller)"
category: vehicle
ai: "none documented"
evidence: public
aiRole: "No AI use documented in the README, the blog post or the commits."
caveats: "From the blog post: \"The update mechanism directly writes over the application image in flash, so a failed update will brick the display.\" The post adds that the bootloader checks for update packets at every power-up, so a new update can be started even when the application does not run. Flashing needs an ESP32 wired to two CAN transceivers, with the firmware compiled into the flasher; the flasher repo has no licence file. The features include a speed limit control and an arbitrary speed limit; the README does not discuss road rules. The post reports that the stock update process accepts firmware without authentication. This is one owner's project on his own scooter; the sources name no other tested units."
evidenceNote: "Public code, GPL-3.0, about 18 stars, 93 commits from March to October 2026; blog post dated 9 August 2026."
repo: "simmsb/scooter-display"
links:
  - { label: "repo", url: "https://github.com/simmsb/scooter-display" }
  - { label: "blog post", url: "https://bensimms.moe/reverse-engineering-scooter/" }
  - { label: "can flasher", url: "https://github.com/simmsb/egret-can-flasher" }
  - { label: "hacker news", url: "https://news.ycombinator.com/item?id=49638071" }
reviewed: 2026-11-14
submittedBy: unshittify
---

Ben Simms found that holding a button while powering on his Egret GT e-scooter opened a firmware update menu, and that leaving the menu let him ride without entering the PIN. He also found that the Egret app sends driving time, odometer and charge history to the manufacturer. Over more than six months he traced the scooter's CAN bus, which runs over two pins of the display's USB-C port, dumped the firmware of the display and motor controller, and wrote replacement display firmware in Rust. His firmware closes the PIN bypass and shows battery voltage, current and the time on a new HUD. He published the code, documentation of the scooter's components and a flasher that sends the firmware over CAN.
