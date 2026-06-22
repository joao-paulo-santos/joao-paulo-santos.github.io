---
name: "hypr-greet"
description: "A custom Wayland greeter for greetd that renders its login UI as HTML/CSS/JS inside a WebKit2 WebView, running on a minimal Hyprland compositor config with multi-monitor and NVIDIA support."
pubDate: 2026-06-15
updatedDate: 2026-06-16
tech:
  - "Python"
  - "WebKit2"
  - "GTK"
  - "HTML/CSS/JS"
  - "greetd"
  - "Hyprland"
status: active
featured: false
order: 100
repo: https://github.com/joao-paulo-santos/hypr-greet
---

hypr-greet is a custom greeter for [greetd](https://git.sr.ht/~kennylevinsen/greetd), the display manager. greetd takes care of the privileged side (PAM authentication, session spawning, running as a dedicated unprivileged system user) and exposes a UNIX socket speaking a small JSON protocol; hypr-greet is the UI half that talks to it. The auth client (`greetd_auth.py`) implements that protocol directly, with a `MockGreetdClient` so the UI can be iterated on inside an existing Hyprland session without touching the real socket.

The unusual design decision is the frontend. Instead of building the login screen in GTK or Qt, it embeds a WebKit2 WebView and renders the whole thing as HTML, CSS, and vanilla JS. That makes the UI trivially themeable (standard CSS, Catppuccin-inspired defaults) and lets it play video wallpaper backgrounds inside an HTML5 `<video>` element, with per-user wallpaper folders, per-user avatars, and a random-selection fallback chain. The greeter itself runs inside Hyprland using a minimal `hyprland-greeter.conf` that handles mirrored multi-monitor output and the NVIDIA-specific `WEBKIT_DISABLE_DMABUF_RENDERER=1` workaround.

Beyond password auth, it handles a user carousel (discovered from `/etc/passwd`), a session picker (auto-discovered from `/usr/share/wayland-sessions` and `/usr/share/xsessions`), ephemeral guest sessions that wipe and restore `/home/guest` from a skel directory on each login, volume control with a vertical slider, and power buttons for shutdown, reboot, and suspend.
