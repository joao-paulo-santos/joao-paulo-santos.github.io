---
name: "Bloqedex"
description: "A full-stack, offline-first Pokedex built for the Bloqit Frontend Engineering Challenge, pairing a React 19 + IndexedDB frontend with a .NET 8 clean-architecture backend."
pubDate: 2025-08-06
tech:
  - "React 19"
  - "TypeScript"
  - "Vite"
  - "Tailwind CSS"
  - "Zustand"
  - "IndexedDB"
  - ".NET 8"
  - "Entity Framework Core"
  - "SQLite"
  - "JWT"
  - "Vitest"
status: finished
featured: true
order: 30
repo: https://github.com/joao-paulo-santos/bloqedex
cover: /projects/bloqedex.png
---

Bloqedex is the project that got me into my current company. It is a full-stack Pokedex built as a response to the [Bloqit Frontend Engineering Challenge](https://github.com/bloqit/fe-engineering-challenge), and the headline requirement was offline-first: a Pokemon Trainer should be able to browse the full Pokedex, catch and release Pokemon, attach notes, and manage their collection with limited or no internet connectivity, then sync transparently when the connection comes back.

![Bloqedex browse interface](/projects/bloqedex-ui.png)

The frontend is React 19 + TypeScript on Vite 7 with Tailwind 4 and Zustand for state. The interesting part is the data layer: I wrote a `BaseDataSource` abstraction with local and remote implementations behind a single repository interface, backed by an IndexedDB wrapper with dedicated stores for Pokemon, caught Pokemon, users, and a pending-actions queue. A `SyncManager` replays queued catch, release, bulk, and update actions in timestamp order when connectivity returns, with retry on failure, action cleanup, and migration of pending actions when an offline account is later upgraded to an online one. There is also CSV export of filtered views, a table mode alongside the grid, bulk selection, smart filtering, and a sharing system that produces public viewable links without authentication.

![Frontend offline-first architecture](/projects/bloqedex-frontend.png)

The backend is a .NET 8 clean-architecture API (Core / Application / Infrastructure / BloqedexApi) on EF Core with SQLite, JWT auth, and Serilog. It caches and serves PokeAPI data behind a custom rate limiter so the frontend never gets throttled, and exposes controllers for auth, Pokemon, the Pokedex, and sharing. Both sides have tests: Vitest on the frontend and an xUnit suite with over 100 test methods on the backend. Building it taught me how much hidden complexity lives in a real offline-first sync flow (conflict ordering, retry policy, action cleanup, account migration) and that the clean-architecture habits from my .NET days translate cleanly to a typed React codebase.

![Backend clean architecture](/projects/bloqedex-backend.png)
