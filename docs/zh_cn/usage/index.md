---
title: 使用说明
---

# 使用说明

本文档使用 [VitePress](https://vitepress.dev/) 构建，通过 [Github Pages](https://docs.github.com/en/pages) 部署。

## 添加内容

侧边栏根据目录结构自动生成，只需在对应语言目录下添加 Markdown 文件即可。

详情参见 [添加内容](./10-content)，或访问 [示例页面](../examples/) 查看扩展语法和嵌套侧边栏的实际效果。还可以参考以下内容：

- [项目结构](./00-arch)
- [多语言](./20-translate)

## 开发环境

- [Deno](https://deno.land/) 用于构建文档
- [Git](https://git-scm.com/) — 建议使用 [VS Code](https://code.visualstudio.com/)

## 开始

1. fork 本仓库到你的 Github 账号
2. 克隆到本地

```sh
git clone https://github.com/<user>/<repo>.git
```

3. 启动开发服务器

```sh
deno task docs:dev
```

默认端口 5173，支持热更新。

构建生产环境：

```sh
deno task docs:build
```

预览构建结果（端口 4173）：

```sh
deno task docs:preview
```

## 代码风格

提交前请格式化：

```sh
deno fmt
```
