| [English](./README.md) | 中文 |
| ---------------------- | ---- |

# docs-template

基于 VitePress + Deno 的文档模板。

## 特性

- **多语言** — 内置 `en_us` 和 `zh_cn`，便于扩展。
- **自动侧边栏** — 根据目录结构自动生成侧边栏。
- **Mermaid 图表** — 通过 `vitepress-plugin-mermaid` 内置支持。
- **数学公式** — KaTeX 渲染行内和块级公式。
- **本地搜索** — 带 i18n 支持的全文本搜索。

## 快速开始

```bash
# 安装 Deno: https://deno.com
deno task docs:dev
```

## 如何添加新的语言

例如，添加语言 `ru`：

1. 创建内容目录 `docs/ru/`
2. 在 `docs/.vitepress/locales.ts` 中使用 `defineLocale()` 添加语言条目

## 如何添加新的板块

例如，添加名为 `readme` 的板块：

1. 创建 `docs/en_us/readme/` 和 `docs/zh_cn/readme/`
2. 在每个目录中放置 `index.md`，并在 frontmatter 中写入 `title:`
3. 在 `docs/.vitepress/locales.ts` 中添加导航链接

侧边栏会自动生成——无需手动配置。

## 侧边栏生成规则

侧边栏由目录结构自动构建，你只需组织文件目录，无需编写侧边栏配置。

### 顶层扫描

语言根目录下的每个子目录（如 `en_us/guide/`）会成为一个侧边栏板块。语言根目录下的单独文件（如 `quickref.md`）不会产生侧边栏条目。

### 排序

文件按数字前缀排序。例如 `01-intro.md` 排在 `02-setup.md` 前面，它们都排在 `appendix.md`（无前缀）前面。数字前缀在显示标题时会被自动去除。

### 标题

每个页面的侧边栏标题来自 YAML frontmatter 中的 `title` 字段。如果未设置，则使用文件名（去掉扩展名和数字前缀）作为后备。

### 页面链接 vs. 纯分组

目录的 `index.md` 决定该分组的侧边栏条目是否可点击：

- 如果 frontmatter 中有 `title` — 用作分组标签。
- 如果正文不为空（有实际内容） — 分组条目变为可点击链接。
- 如果正文为空（仅有 frontmatter，无内容） — 分组为纯标签文件夹，不可点击。

### 嵌套目录

子目录会成为可折叠分组，并自动提升到侧边栏顶层（与父级并列），而非嵌套在内部。每个子目录遵循与父级相同的标题、链接和排序规则。

### 总结

| 规则             | 行为                                      |
| ---------------- | ----------------------------------------- |
| 什么会产生侧边栏 | 语言根目录下的子目录                      |
| 排序             | 按文件名中的数字前缀                      |
| 条目标题         | Frontmatter `title`，或去掉前缀后的文件名 |
| 嵌套分组         | 子目录作为顶层可折叠分组出现              |
| 可点击的分组     | `index.md` 有非空正文                     |

## 如何更改 Base 路径（默认为 `/`）

编辑 `docs/.vitepress/config.ts`：

```ts
const BASE = '/your-project'
```

## 如何更改源根目录（`.` 为默认值）

编辑 `docs/.vitepress/config.ts`：

```ts
srcDir: 'pages',
```

然后更新 `docs/.vitepress/utils/sidebar.ts` 中的 `base` 默认值。
