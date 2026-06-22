---
name: "Waypoint Memory"
description: "A self-hosted project-management and memory server that pairs a Kanban web UI with a Model Context Protocol interface, exposing projects, tasks, contacts, events, and an append-only activity log as a shared, queryable store."
pubDate: 2026-05-19
tech:
  - "Go"
  - "MCP"
  - "PostgreSQL"
  - "Svelte 5"
  - "Docker"
status: active
featured: true
order: 110
repo: https://github.com/joao-paulo-santos/waypoint-memory
---

Waypoint Memory is a single Go binary that serves two things at once: a Kanban-style project-management web UI and a Model Context Protocol server over the same data. The web app is a Svelte 5 SPA embedded into the binary with `go:embed`, backed by PostgreSQL through pgx and a chi router. MCP access is bearer-token based, with tokens SHA-256 hashed and stored in an `api_tokens` table.

The MCP server runs in its own goroutine on a second port (SSE transport via `mark3labs/mcp-go`) and exposes 25 tools that mirror the REST API: project and board CRUD, task moves, sprint archival, contacts, calendar, and read-only context helpers like `get_project_context`, which collapses a project to its board summary, overdue and due-soon tasks, and recent activity in a single call.

The memory model is the interesting part. It is not embeddings or semantic search; it is structured, relational memory. There is working memory (the live board state), episodic memory (an append-only `activity_log` recording every mutation with actor, entity, and JSON details, plus archivable sprint snapshots), entity memory (contacts and recurring events), and reference memory (per-project wiki pages).

I built it to replace Vikunja in my own toolchain. I wanted one self-hosted store that is pleasant to use as a UI and also machine-queryable, so external tools can pull context and write progress back without scraping a web app. It is still in active development, built up in numbered phases through to project renaming and bulk task operations.
