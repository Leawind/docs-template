import { UserConfig } from "vitepress";
import { buildSidebar } from "../builders.mts";

const lang = 'en-US';

export default {
	label: 'English',
	lang: lang,
	title: "Leawind's Docs Template",
	titleTemplate: ":title | Leawind's Doc Template",
	description: "A documentation template build by vitepress",
	themeConfig: {
		nav: [
			{
				text: 'Dropdown Menu',
				items: [
					{ text: 'File Structure Example', link: `/${lang}/Example/` },
					{ text: 'Markdown Example', link: `/${lang}/markdown-example` },
				]
			},
			{ text: 'Donate', link: 'https://leawind.github.io/en/donate' },
		],
		sidebar: {
			'/en-US/Example': buildSidebar(`/${lang}/Example`),
		},
		footer: {
			message: 'This is footer message',
			copyright: 'This is copyright',
		},
		editLink: {
			pattern: 'https://github.com/LEAWIND/docs-template/edit/main/docs/:path',
			text: 'Edit this page on Github',
		},
		lastUpdated: { text: "Last updated", },
	},
} as UserConfig;
