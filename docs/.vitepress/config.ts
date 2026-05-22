import 'jsr:@std/dotenv@0.225.6/load'
import { DefaultTheme, defineConfig, UserConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import locales from './locales.ts'

const BASE = '/'
const isDev = Deno.args.includes('dev')

let config: UserConfig = {
  base: BASE,
  srcDir: '.',
  outDir: '../dist',
  cleanUrls: true,

  title: 'docs-template',
  description: 'A documentation template build by vitepress',

  markdown: {
    math: true,
  },
  vite: {
    server: {
      allowedHosts: [
        '.local',
      ],
    },
  },
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/WaiJiao.jpg' }],
  ],

  lastUpdated: true,

  themeConfig: {
    externalLinkIcon: true,
    logo: '/WaiJiao.jpg',
    search: {
      provider: 'local',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/LEAWIND/docs-template',
      },
    ],
    footer: {
      message: 'License: MIT',
    },
  },
  locales,
} satisfies UserConfig<DefaultTheme.Config>

if (!isDev) {
  config = withMermaid(config)
}

export default defineConfig(config)
