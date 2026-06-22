---
name: "Homelab"
description: "Self-hosted infrastructure with DNS filtering, WireGuard VPN, and an nginx reverse proxy that lazy-wakes Docker services on demand via njs."
pubDate: 2025-09-10
tech:
  - "AdGuard Home"
  - "WireGuard"
  - "nginx"
  - "njs"
  - "Docker"
  - "Docker Compose"
  - "glance"
status: active
featured: false
order: 140
repo: https://github.com/joao-paulo-santos/nginx-conf
---

The homelab is the self-hosted infrastructure I run at home. It is built around three core pieces (AdGuard Home for DNS-level ad and tracker filtering, WireGuard for remote access, nginx as the TLS-terminating reverse proxy) and fronts a collection of internal services: a [glance](https://github.com/glanceapp/glance) dashboard, a Postgres plus pgAdmin pair, NocoDB, Vikunja, Portainer, Grafana, the discopanel, and Waypoint Memory. Each service gets its own subdomain on a custom internal TLD, with TLS terminated at nginx through an internal CA.

The interesting piece is the proxy itself. Every service subdomain runs through an njs (NGINX JavaScript) handler that queries the Docker Engine API for the target container: if the container is already running, the request proxies straight through; if not, the handler starts the entire Compose project the container belongs to and returns a short "waking up" page that auto-refreshes until the service is ready. The result is that services I rarely use stay stopped, cost nothing in idle RAM or CPU, and still come back on demand within a few seconds of the first request.

This lazy-wake pattern pairs with [Dockdoser](/projects/dockdoser), which handles the opposite end of the lifecycle: shutting down containers that have not seen traffic in a while. Together they give the homelab an on-demand lifecycle for personal services, with the reverse proxy controlling cold starts and Dockdoser controlling cold stops.

A detailed writeup covering topology, deploy workflow, and the rest of the stack is planned. Operational details live in private repos and are intentionally kept off this page; the nginx configuration itself is the only public footprint for now.
