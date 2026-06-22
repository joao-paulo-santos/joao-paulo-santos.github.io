---
name: "tmux-fridge"
description: "A single-binary Go CLI for snapshotting, freezing, and restoring tmux sessions, with automatic cold-storage snapshots kept in sync on every freeze, attach, and unfreeze."
pubDate: 2026-05-16
tech:
  - "Go"
  - "tmux"
  - "YAML"
status: active
featured: true
order: 60
repo: https://github.com/joao-paulo-santos/tmux-fridge
cover: /projects/tmux-fridge.png
---

tmux-fridge is a small Go CLI for snapshotting, freezing, and restoring tmux sessions, shipped as a self-contained binary with zero runtime dependencies beyond tmux itself. The interesting design choice is the split between `snapshot` and `freeze`. `snapshot` writes the current session state to cold storage and leaves the session running, so it works as a passive backup. `freeze` does the same write but also drops a copy into `frozen/` and kills the live session, which is what you reach for before shutting the machine down.

Cold storage lives at `~/.config/tmux/tmux-workspaces/cold-storage/` and is rewritten on every freeze, attach, and unfreeze, so there is always a recent snapshot to recover from if tmux crashes or the box reboots. Sessions are plain YAML (windows, layouts, pane start directories, captured shell commands). An optional `resolve_interpreters` flag reads `/proc` to surface the real binary behind `node`, `python`, or `ruby` (for example, `opencode` running under `node`), and a `command_map` rewrites captured commands on freeze. The `list-frozen` and `list-cold` commands print one session per line, so they pipe cleanly into fzf, rofi, or dmenu.

It grew out of [rofi-tmux-fridge](https://github.com/joao-paulo-santos/rofi-tmux-fridge), a rofi menu I wrote first as quick UX for freezing and unfreezing sessions. That menu leaned on tmuxp and Node.js, and after living with it for a while I wanted the underlying mechanism as a standalone tool that did not pull a Python runtime with it. tmux-fridge is that tool: same workflow, single Go binary, and the rofi menu can drive it instead of tmuxp.

The motivation is simple: tmux sessions die on crashes and power loss, existing tools like tmuxp are heavy, and forgetting to save before shutdown means lost work. This keeps a rolling snapshot around with no daemon and no setup.
