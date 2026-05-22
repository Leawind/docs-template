---
title: Markdown 示例
---

# Markdown 示例

## 自定义容器

支持两种写法，**更推荐第一种**（GitHub 风格 callout）：

### GitHub 风格（推荐）

> [!NOTE]
> 用来展示补充信息。

> [!TIP]
> 用来提供使用建议。

> [!WARNING]
> 提醒用户注意潜在问题。

> [!CAUTION]
> 警告用户风险或后果。

> [!IMPORTANT]
> 强调重要信息。

### VitePress 容器语法

::: info 信息框
用来展示补充信息。
:::

::: tip 提示
用来提供使用建议。
:::

::: warning 警告
提醒用户注意潜在问题。
:::

::: danger 危险提示
警告用户风险或后果。
:::

## 分组代码标签

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

## 表格

| 语法         | 效果     |
| ------------ | -------- |
| `**粗体**`   | **粗体** |
| `*斜体*`     | _斜体_   |
| `` `代码` `` | `代码`   |
| `~~删除~~`   | ~~删除~~ |

## 代码差异

```diff
- const oldApi = '/v1/data'
+ const newApi = '/v2/data'
```
