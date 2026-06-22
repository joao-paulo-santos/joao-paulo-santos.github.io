---
name: "Bapi"
description: "A small library API built as a .NET clean architecture proof of skill, with JWT authentication, role-based access control, and PostgreSQL persistence."
pubDate: 2024-04-17
tech:
  - ".NET 8"
  - "C#"
  - "ASP.NET Core"
  - "Entity Framework Core"
  - "PostgreSQL"
  - "JWT"
  - "Serilog"
  - "xUnit"
  - "Docker"
status: finished
featured: false
order: 10
repo: https://github.com/joao-paulo-santos/bapi
---

Bapi was my first proper dive into .NET after spending a long time in other ecosystems. It is a small library API requested as a proof of skill: users can search for books, while managers and admins can create, update, and delete them. I treated the small scope as an excuse to over-invest in the architecture rather than ship the cheapest thing that worked.

The solution is split into the classic clean architecture layers (Core, Application, Infrastructure, and the web API project) with strict dependency direction. I leaned hard on the patterns I kept reading about at the time: repositories, a service layer, a Unit of Work, dependency injection, an adapter that bridges Serilog to Microsoft's `ILogger`, and mappers that translate between entities and DTOs. Authentication is JWT-based with three roles (Admin, Manager, User) whose permissions differ across the user and book endpoints, and Serilog is wired up with environment-specific minimum levels plus HTTP logging that only runs in development.

The database is PostgreSQL hosted on Neon, accessed through EF Core and Npgsql. The Testing project covers `UserService` and `BookService` with xUnit and Moq, validating creation, retrieval, pagination, password hashing, and update logic. Looking back, some choices (like the `CHAR(32)` MD5 password column) were driven by the assignment, but the overall structure is the template I still reach for on .NET backends today.
