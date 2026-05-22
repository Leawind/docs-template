| English | [中文](./README-ZH.md) |
| ------- | ---------------------- |

# docs-template

A documentation template built with VitePress + Deno.

## Features

- **Multi-language** — `en_us` and `zh_cn` out of the box, easy to add more.
- **Auto sidebar** — Sidebar is generated automatically from directory structure.
- **Mermaid diagrams** — Built-in support via `vitepress-plugin-mermaid`.
- **Math formulas** — KaTeX rendering for inline and block math.
- **Local search** — Full-text search with i18n support.

## Quick Start

```bash
# Install Deno: https://deno.com
deno task docs:dev
```

## How to add a new language

For example, add language `ru`:

1. Create content directory `docs/ru/`
2. Add a locale entry in `docs/.vitepress/locales.ts` using `defineLocale()`

## How to add a new section

For example, a section called `readme`:

1. Create `docs/en_us/readme/` and `docs/zh_cn/readme/`
2. Put an `index.md` in each with a `title:` in frontmatter
3. Add nav links in `docs/.vitepress/locales.ts`

The sidebar is generated automatically — no manual config needed.

## Sidebar generation rules

The sidebar is built from directory structure. You only need to organize your
files — no sidebar config to write.

### Top-level scanning

Each directory directly under the language root (e.g. `en_us/guide/`) becomes
a sidebar section. Files at the language root (like `quickref.md`) do not get
sidebar entries.

### Ordering

Files are sorted by number prefix. A file named `01-intro.md` comes before
`02-setup.md`, which comes before `appendix.md` (no prefix). Number prefixes
are stripped from the displayed title.

### Titles

Each page's sidebar title comes from the `title` field in its YAML frontmatter.
If absent, the filename (minus extension and number prefix) is used as a
fallback.

### Page link vs. group-only

A directory's `index.md` determines whether the sidebar group is clickable:

- If it has a `title` in frontmatter — the title is used as the group label.
- If the body is non-empty (has actual content) — the group entry becomes a
  clickable link.
- If the body is empty (just frontmatter, no content) — the group is a
  label-only folder, not clickable.

### Nested directories

Subdirectories become collapsible groups. They are automatically promoted to
the top level of the sidebar (sibling to their parent), not nested inside. Each
subdirectory follows the same rules as above for title, link, and ordering.

### Summary

| Rule                   | Behavior                                              |
| ---------------------- | ----------------------------------------------------- |
| What becomes a sidebar | Directories under the language root                   |
| Order                  | By number prefix in filename                          |
| Item title             | Frontmatter `title`, or filename sans prefix          |
| Nested groups          | Subdirectories appear as top-level collapsible groups |
| Clickable group        | `index.md` has non-empty body                         |

## How to change base (`/` by default)

Edit `docs/.vitepress/config.ts`:

```ts
const BASE = '/your-project'
```

## How to change source root dir (`.` by default)

Edit `docs/.vitepress/config.ts`:

```ts
srcDir: 'pages',
```

Then update the `base` default in `docs/.vitepress/utils/sidebar.ts`.
