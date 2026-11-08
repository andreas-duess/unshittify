---
id: 117
title: "Cat printer from the command line"
seoTitle: "catprinter: print to a cheap Bluetooth cat thermal printer from Python, no app"
device: "Bluetooth thermal \"cat printers\" (GT01, GB02, GB03 and similar)"
category: make
ai: "none documented"
evidence: public
aiRole: "Reverse-engineered by hand in 2021 from the official Android app. One 2026 contributor fix for macOS carries a Claude Co-Authored-By trailer."
caveats: "Python command-line tool, no GUI. Cat printers are sold under many names with different internals, so not every one will work. Prints images only; turn text into an image first."
evidenceNote: "Public code, MIT licence, about 860 stars. Maintained since 2021."
repo: "rbaron/catprinter"
links:
  - { label: "repo", url: "https://github.com/rbaron/catprinter" }
reviewed: 2026-11-08
submittedBy: unshittify
---

The roughly $20 thermal "cat printer" from AliExpress only prints through its vendor's phone app. rbaron reverse-engineered the app's Bluetooth protocol and wrote a Python script that prints any image straight from Linux or macOS, with a choice of dithering algorithms and print darkness. It finds the printer on its own.

For a printer variant this script doesn't match, [Mertol Kasanan's write-up](/p/cat-printer-no-stock-app/) shows how to work out the protocol yourself.
