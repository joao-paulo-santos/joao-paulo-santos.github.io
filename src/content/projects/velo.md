---
name: "velo"
description: "A plugin-extensible Wayland launcher in C. Every mode (calculator, app launcher, tmux manager, wifi connector) is a plain TOML file rather than compiled code or shell scripts."
pubDate: 2026-02-15
updatedDate: 2026-06-20
tech:
  - "C"
  - "Wayland"
  - "Meson"
  - "Cairo"
  - "Pango"
  - "wlr-layer-shell"
  - "TOML"
status: active
featured: true
order: 80
repo: https://github.com/joao-paulo-santos/velo
cover: /projects/velo.png
---

velo is a Wayland launcher I have been actively developing. The goal is an instant-on single static binary (LTO-built C against the layer-shell and xdg-shell protocols, no runtime deps beyond system libraries, roughly 2 to 6ms startup) where every feature is a plain TOML file. No compiled modes, no C plugins, no scripts: a calculator, an app launcher, a tmux manager, a wifi connector are all just config.

![velo UI showing the app launcher plugin](/projects/velo-example.jpg)

The design revolves around five plugin types (`list`, `select`, `input`, `preview`, `exec`) composed through a stack-based navigation model. Plugins nest arbitrarily: ESC pops one level, values accumulate through the stack via `{key}` template substitution (the "dictionary flow"), and plugins can chain into each other with `next` and `return`. A `teleport` prefix (`calc:`, `tmux:`, `url:`) jumps straight to any plugin. On top of that it ships pipe modes (`--pick` as a dmenu replacement, `--input` and `--sensitive` as zenity replacements) so the same binary serves scripts, plus 61 bundled color palettes that are drop-in compatible with the noctalia palette format.

It is still early (v0.0.1 was tagged recently), but the architecture is in place: fuzzy search with score-ranked matching, dependency checking that auto-hides plugins whose required binaries are missing, autosize windows that grow to fit results, and a plugin safety model that is upfront about the fact that TOML plugins run arbitrary shell commands. The roadmap from here is more bundled plugins and refining the authoring ergonomics.
