---
title: 添加内容
---

# 添加内容

## 侧边栏生成逻辑

侧边栏是基于目录结构自动生成的，相关脚本位于 `docs/.vitepress/utils/sidebar.ts`。

### 目录结构

```
docs/
  <lang>/                 例如 zh_cn/, en_us/
    <section>/            例如 usage/, reference/
      index.md            板块首页。其 frontmatter 的 `title:` 字段决定侧边栏标签。
      **/                 任意子目录。
        index.md          子目录首页。标题规则同上。
      *.md                任意页面。
```

### 规则

- 根据目录结构递归构建侧边栏。
- **页面标题**：从 Markdown 文件的 frontmatter 中提取 `title` 字段作为侧边栏显示文本；如果未定义，则使用文件名（去除数字前缀和扩展名）。
- **板块标题**：由板块 `index.md` 的 frontmatter 中的 `title` 决定。

合法的 frontmatter 如下所示：

```md
---
title: 页面标题
---
```

### 排序

文件名可以以数字 + `-` 开头，用于指定在侧边栏中的排列顺序，数字越小排列越靠前，没有数字的排在最后。

例如：

1. `00-arch.md`
2. `10-usage.md`
3. `final.md`

> [!NOTE]
> 序号前缀仅用于控制排序，**不会出现在 URL 中**。
> 例如 `00-arch.md` 对应 URL 为 `/zh_cn/usage/arch`。

> [!CAUTION]
> 同一目录下，去掉前缀后 base-name 相同的文件（如 `10-start.md` 和 `15-start.md`）会导致 URL 冲突，**构建将会报错终止**。
