---
title: 项目结构
---

# 文档项目结构

## 目录结构

- `docs/`
  - `.vitepress/`：VitePress 配置目录，包含配置脚本和工具函数。
  - `public/`：静态资源目录，例如 favicon、图片等。
  - `<lang>`：各语言目录，例如 `zh_cn/`、`en_us/`。
  - `index.md`：根重定向页面。
- `dist/`：构建输出目录。
- `scripts/`：工具脚本（例如创建软链接）。
- `deno.json`：Deno 配置和任务定义。

## 构建脚本

文档的构建使用 Deno 任务脚本，这些任务定义在 `deno.json` 文件中，使用 `deno task <task>` 命令执行。

常用脚本：

- `docs:dev`：启动开发服务器，支持热更新。
- `docs:build`：构建生产环境静态站点。
- `preview`：本地预览构建结果。
