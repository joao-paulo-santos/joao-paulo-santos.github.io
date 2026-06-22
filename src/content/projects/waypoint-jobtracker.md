---
name: "Waypoint JobTracker"
description: "A job-application pipeline tracker that drives a Waypoint Memory Kanban board through MCP, keeping every application and stage transition in a local SQLite database for funnel analytics."
pubDate: 2026-05-22
tech:
  - "JavaScript"
  - "Node.js"
  - "SQLite"
  - "MCP"
status: active
featured: false
order: 120
repo: https://github.com/joao-paulo-santos/Agentic-Waypoint-JobTracker
---

The Waypoint JobTracker is a job-hunting pipeline manager that drives a Waypoint Memory board through MCP. It is a thin JavaScript layer with zero external dependencies, just Node 22's built-in `node:sqlite`. The board is the visual workflow (six buckets: Tasks, Applied, Interviewing, Rejected, Done, Offer Made), while a local `pipeline.db` is the source of truth for analytics.

This started life as `Agentic-MCP-JobTracker`, which ran the same pipeline on top of Vikunja through a separate MCP sidecar. Once Waypoint Memory was ready I moved to it: setup got simpler (no Kanban view-ID indirection), and the board picked up built-in activity logging, contacts for recruiters, a calendar for interviews, and sprint archival along the way.

The integration is deliberately split. An MCP-connected client creates and moves tasks across the buckets, storing the Waypoint label IDs it discovers in `config.json` so it never re-queries them, and calls `pipeline.js` to log every transition. The SQLite layer then answers the questions the board cannot: `getStats()` for bucket counts and `getFunnel()` for conversion rates (applied to interview, interview to offer) grouped by any label, so channels and work arrangements can be compared side by side.
