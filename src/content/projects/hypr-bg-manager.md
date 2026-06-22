---
name: "hypr-bg-manager"
description: "A POSIX shell wallpaper manager for Hyprland that abstracts five backends (swww, awww, hyprpaper, swaybg, mpvpaper) behind one CLI, with per-workspace, global, and timer-driven wallpaper switching."
pubDate: 2025-10-12
updatedDate: 2026-05-05
tech:
  - "Shell"
  - "Hyprland"
  - "socat"
status: active
featured: false
order: 90
repo: https://github.com/joao-paulo-santos/hypr-bg-manager
---

hypr-bg-manager is a wallpaper manager for Hyprland, written as a single POSIX shell script (~320 lines, no dependencies beyond coreutils, socat, and whichever backend you pick). The main differentiator from other wallpaper tools is the backend abstraction: instead of locking you into one daemon, it fronts five of them (`swww`, `awww`, `hyprpaper`, `swaybg`, `mpvpaper`) behind a uniform `-s` flag. Each service has its own quirks (hyprpaper needs preloading, swaybg needs old instances killed, mpvpaper handles video, swww handles GIFs), and the script knows how to drive all of them, including per-service supported file formats.

The other headline feature is per-workspace wallpapers. The script connects to Hyprland's `socket2` event stream and, on every workspace change, picks a random image from a folder matching the workspace name (`~/wallpapers/work/`, `~/wallpapers/gaming/`, etc.), with a `shared/` fallback. Three trigger modes cover the rest: `socket` (react to workspace changes), `timer` (rotate on an interval), or `both`. Output targeting can be the active monitor or all monitors, and nested subfolders are supported for organizing large wallpaper collections. It is distributed as an AUR package (`hypr-bg-manager`) and stays intentionally small: it owns no daemon of its own, it just orchestrates whichever wallpaper backend you already run.
