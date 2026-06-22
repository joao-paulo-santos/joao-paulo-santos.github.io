---
name: "Dockdoser"
description: "A Docker container watchdog dashboard that polls the Engine API for per-container CPU, memory, and network stats and renders them in a React UI, with network throughput as the idle-signal baseline."
pubDate: 2025-07-08
tech:
  - "Node.js"
  - "Express"
  - "React 19"
  - "Chart.js"
  - "Docker"
status: finished
featured: false
order: 70
repo: https://github.com/joao-paulo-santos/Dockdoser
---

Dockdoser is a container watchdog dashboard, pairing an Express backend that polls the Docker Engine API with a React frontend that plots CPU, memory, and network throughput per container. The backend hits `/containers/json` and `/containers/{id}/stats?stream=false` on a 30-second interval, derives CPU percent from the `cpu_usage` delta against `system_cpu_usage`, sums per-interface RX and TX bytes, and keeps a rolling 30-minute window (180 samples) in memory. Everything is exposed through a single `/api/stats` endpoint as JSON, which the React dashboard renders through Chart.js cards.

The intended idle-signal is network throughput: the deltas are collected precisely so that containers without traffic can be flagged for shutdown, which is the watchdog angle in the repo description. In the shipped code the monitoring and visualization layer is complete, but the auto-shutdown path was never wired up. What is there is the data collection half of the idea rather than the full loop.

The build is a multi-stage Dockerfile that compiles a Vite + React 19 frontend and bundles it with the Express backend, plus a dev override that runs the frontend through Vite and the backend through nodemon. It was a short exploration of what the Docker stats API exposes and how cleanly it maps onto a small dashboard, and it stopped where most weekend projects do.
