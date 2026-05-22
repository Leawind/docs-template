---
title: Usage
---

# Usage

This documentation is built with [VitePress](https://vitepress.dev/) and deployed via [Github Pages](https://docs.github.com/en/pages).

## Adding Content

Sidebars are auto-generated from the directory structure — just add Markdown files under the language directory.

See the [Adding Content](./10-content) guide, or visit the [Examples section](../examples/) for live examples of extended syntaxes and nested sidebars. Also check out:

- [Project Architecture](./00-arch)
- [Multi-language](./20-translate)

## Development Environment

- [Deno](https://deno.land/) for building
- [Git](https://git-scm.com/) — [VS Code](https://code.visualstudio.com/) recommended

## Getting Started

1. Fork this repository to your GitHub account
2. Clone locally

```sh
git clone https://github.com/<user>/<repo>.git
```

3. Start the dev server

```sh
deno task docs:dev
```

Default port 5173, with hot reload.

Build for production:

```sh
deno task docs:build
```

Preview the build (port 4173):

```sh
deno task docs:preview
```

## Code Style

Format before committing:

```sh
deno fmt
```
