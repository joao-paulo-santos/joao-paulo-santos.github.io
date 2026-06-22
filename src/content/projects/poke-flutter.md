---
name: "Poke Flutter"
description: "A small Flutter app that authenticates against mocked credentials and browses Pokemon from PokeAPI, built as a proof of skill using BLoC state management."
pubDate: 2024-11-15
tech:
  - "Flutter"
  - "Dart"
  - "flutter_bloc"
  - "go_router"
  - "Dio"
  - "cached_network_image"
  - "mocktail"
status: finished
featured: false
order: 20
repo: https://github.com/joao-paulo-santos/poke-flutter
---

Poke Flutter was a take-home assignment I used as proof of Flutter skill when applying for a mobile role. The brief was deliberately narrow: a latest-stable Flutter app with an authentication screen (login info can be mocked), a dashboard that consumes a public API, separation of concerns, BLoC for state management, `go_router` for navigation, and Dio for HTTP. I picked PokeAPI as the data source.

The app has two screens. The login screen validates against a hardcoded `AuthService` (username `Luis`, password `123`); on success, `go_router` redirects to the Pokemon screen, which fetches a page of Pokemon and renders them as a responsive grid with cached images. Everything flows through BLoC: auth and Pokemon blocs emit explicit loading, success, and error states, and the presentation layer listens for state changes to show alerts or loading indicators. The grid is reactive to orientation and runs on web, Android, and desktop.

Coming from a .NET clean-architecture background, my first instinct was a full domain/data/presentation split, but I followed the assignment's recommended Core + Presentation split and kept it lean. Tests use `mocktail` to fake Dio responses and verify that the Pokemon bloc emits the correct states, that image URLs are generated correctly, and that the parser handles the API payload. It is a small project, but it got me the job, and it forced me to actually understand BLoC rather than cargo-cult it.
