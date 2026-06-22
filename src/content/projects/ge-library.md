---
name: "GE-Library"
description: "Open-source, cross-platform replacements for the closed-source Windows tools historically used to work with Granado Espada IPF archives, with Go production binaries and a Python reference implementation."
pubDate: 2025-12-10
tech:
  - "Go"
  - "Python"
status: active
featured: false
order: 40
repo: https://github.com/joao-paulo-santos/GE-Library
---

GE-Library is a small toolset that provides open-source, cross-platform replacements for the closed-source Windows binaries historically used in Granado Espada development and modding. Where the originals are Windows-only and single-threaded, these tools target Linux, Windows, and macOS, are written to take advantage of modern multi-core hardware, and keep byte-for-byte output compatibility with the original tools. The project is explicit that its goal is preservation and accessibility of the toolchain rather than anything beyond that scope.

Three tools are shipped today, all centered on the IPF archive format. `ipf-extractor` (covering the original `iz.exe` / `ez.exe` role) extracts IPF archives, with a Python reference implementation alongside the Go production binary, and reports 10x to 15x the original tools' speed under Wine. `ipf-optimizer` (the `oz.exe` role) removes duplicate files from an IPF archive to shrink it, with a 52% size reduction cited on test archives. `ipf-creator` (the `cz.exe` / `zi.exe` role) builds an IPF from a folder in a single pass with optional encryption and configurable compression, replacing the original two-step workflow. Output compatibility is validated through a hash-based testing framework that compares results against the original Windows tools.

What is there is the read / optimize / write loop for IPF archives. Planned tools listed in the README, including add-folder-to-IPF (`af.exe`) and IES-to-XML/PRN conversion (`ix3.exe`), are not yet implemented. So the library today is a focused, working replacement for the core archive operations rather than a complete swap for every tool in the original chain.
