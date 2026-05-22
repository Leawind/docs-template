---
title: Adding Content
---

# Adding Content

## Sidebar Generation Logic

The sidebar is automatically generated based on the directory structure. The relevant scripts are located in `docs/.vitepress/utils/sidebar.ts`.

### Directory Structure

```
docs/
  <lang>/                  e.g. zh_cn/, en_us/
    <section>/             e.g. usage/, reference/
      index.md             Section home page. Its frontmatter `title:` sets the sidebar label.
      **/                  Any subdirectory.
        index.md           Subdirectory home page. Same title rule as above.
      *.md                 Any page.
```

### Rules

- The sidebar is built recursively from the directory structure.
- **Page title**: Extracted from the `title` field in Markdown frontmatter. If absent, falls back to filename (stripping number prefix and extension).
- **Section title**: Determined by the `title` in the section's `index.md` frontmatter.

Example frontmatter:

```md
---
title: Page Title
---
```

### Sorting

Filenames can start with a number followed by `-` to control sidebar order. Lower numbers come first. Files without a number prefix are placed last.

Example:

1. `00-arch.md`
2. `10-usage.md`
3. `final.md`
