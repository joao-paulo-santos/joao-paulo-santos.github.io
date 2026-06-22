---
name: "Waypoint Hub"
description: "A clean-architecture .NET social game-backlog organizer for couples and friends, with Steam library sync, shared ranked lists, and group ownership checks. Currently paused."
pubDate: 2026-03-29
tech:
  - ".NET 10"
  - "C#"
  - "ASP.NET Core"
  - "Entity Framework Core"
  - "PostgreSQL"
  - "React"
  - "TypeScript"
status: paused
featured: false
order: 130
repo: https://github.com/joao-paulo-santos/waypoint-hub
---

Waypoint Hub is a social game-backlog organizer aimed at couples and friend groups. The pitch is that existing game trackers are single-player: none offer a shared backlog with an arbitrary play order, easy Steam library sync, or a quick way to cross-check who actually owns a given game. The goal was joint ranked lists (backlogs, replayables, party picks) with role-based access (Owner, Editor, Viewer), per-user ratings, progress tracking, and an ownership check that tells you instantly whether everyone in a group owns a title.

The backend is a .NET 10 clean-architecture solution split into Core, Application, Infrastructure, and Api projects, with EF Core and Npgsql over PostgreSQL, JWT auth, Steam OpenID login and library import, and RAWG for game metadata. The frontend is React with TypeScript and shadcn/ui, with pages sketched for the catalog, library, friends, and list views.

It is paused, and honestly only the skeleton exists: repositories, interfaces, DTOs, controllers, and migration scaffolding across two commits, last touched in April 2026. The architecture is laid out and the integrations are scoped, but none of it is wired into a running product. It is dormant rather than abandoned, sitting where I left it.
