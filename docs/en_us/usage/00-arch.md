---
title: Project Architecture
---

# Documentation Project Architecture

## Directory Structure

- `docs/`
  - `.vitepress/`: VitePress configuration directory, containing configuration scripts and utilities.
  - `public/`: Static asset directory, e.g., favicon, images, etc.
  - `<lang>`: Language directories, e.g., `zh_cn/`, `en_us/`.
  - `index.md`: Root redirect page.
- `dist/`: Build output directory.
- `scripts/`: Utility scripts (e.g., symlink creation).
- `deno.json`: Deno configuration and task definitions.

## Build Scripts

Documentation is built using Deno task scripts, defined in `deno.json` and executed with `deno task <task>`.

Common scripts:

- `docs:dev`: Start development server with hot reload.
- `docs:build`: Build static site for production.
- `preview`: Preview the built site locally.
