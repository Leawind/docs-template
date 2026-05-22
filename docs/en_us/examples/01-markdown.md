---
title: Markdown Example
---

# Markdown Example

## Custom Containers

Two syntaxes are supported. **The first one (GitHub-style callout) is preferred**:

### GitHub Style (Recommended)

> [!NOTE]
> For displaying supplementary information.

> [!TIP]
> For providing usage advice.

> [!WARNING]
> For alerting users to potential issues.

> [!CAUTION]
> For warning about risks or consequences.

> [!IMPORTANT]
> For emphasizing important information.

### VitePress Container Syntax

::: info Information
For displaying supplementary information.
:::

::: tip Tip
For providing usage advice.
:::

::: warning Warning
For alerting users to potential issues.
:::

::: danger Danger
For warning about risks or consequences.
:::

## Grouped Code Tabs

::: code-group

```ts [TypeScript]
interface Config {
  name: string
  version: number
}
```

```json [JSON]
{
  "name": "docs-template",
  "version": 1
}
```

```py [Python]
config = {
    "name": "docs-template",
    "version": 1
}
```

:::

## Table

| Syntax       | Result     |
| ------------ | ---------- |
| `**bold**`   | **bold**   |
| `*italic*`   | _italic_   |
| `` `code` `` | `code`     |
| `~~strike~~` | ~~strike~~ |

## Code Diff

```diff
- const oldApi = '/v1/data'
+ const newApi = '/v2/data'
```
