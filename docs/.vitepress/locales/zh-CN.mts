import { UserConfig } from "vitepress";
import { buildSidebar } from "../builders.mts";

const lang = 'zh-CN';

export default {
	label: '简体中文',
	lang: lang,
	title: "Leawind的文档模板",
	titleTemplate: ":title | Leawind的文档模板",
	description: "用 vitepress 构建的静态网站模板",
	themeConfig: {
		nav: [
			{
				text: '下拉菜单',
				items: [
					{ text: '文件结构示例', link: `/${lang}/Example/` },
					{ text: 'Markdown示例', link: `/${lang}/markdown-example` },
				]
			},
			{ text: '捐赠', link: 'https://leawind.github.io/zh-CN/donate' },
		],
		sidebar: {
			'/zh-CN/Example': buildSidebar(`/${lang}/Example`),
		},
		footer: {
			message: '这是页脚信息',
			copyright: '这是页脚版权信息',
		},
		editLink: {
			pattern: 'https://github.com/LEAWIND/docs-template/edit/main/docs/:path',
			text: '在 Github 上编辑此页',
		},
		lastUpdated: { text: "上次更新", },
	},
} as UserConfig;
