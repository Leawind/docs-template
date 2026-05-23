/**
 * All locale-related definitions — the single source of truth.
 *
 * Adding a new language: just add an entry to `locales`.
 * BCP47_MAP is auto-derived — no separate bcp47.ts needed.
 */

export type NavItem =
  | { text: string; link: string }
  | { text: string; items: NavItem[] }

export interface LocaleEntry {
  lang: string
  /** BCP 47 language tag (e.g. 'zh-CN', 'en-US') */
  bcp47: string
  label: string
  title: string
  description: string
  nav: NavItem[]
  editLinkText: string
  lastUpdatedText: string
  search?: Record<string, unknown>
}

const locales: Record<string, LocaleEntry> = {
  zh_cn: {
    lang: 'zh_cn',
    bcp47: 'zh-CN',
    label: '简体中文 (中国大陆)',
    title: '文档模板',
    description: '用 vitepress 构建的静态网站模板',
    nav: [
      { text: '使用说明', link: '/zh_cn/usage/' },
      { text: '示例', link: '/zh_cn/examples/' },
    ],
    editLinkText: '在 Github 上编辑此页',
    lastUpdatedText: '上次更新',
    search: {
      translations: {
        button: {
          buttonText: '搜索',
          buttonAriaLabel: '搜索',
        },
        modal: {
          displayDetails: '显示详细列表',
          resetButtonTitle: '重置搜索',
          backButtonTitle: '关闭搜索',
          noResultsText: '没有结果',
          footer: {
            selectText: '选择',
            selectKeyAriaLabel: '输入',
            navigateText: '导航',
            navigateUpKeyAriaLabel: '上箭头',
            navigateDownKeyAriaLabel: '下箭头',
            closeText: '关闭',
            closeKeyAriaLabel: 'Esc',
          },
        },
      },
    },
  },
  en_us: {
    lang: 'en_us',
    bcp47: 'en-US',
    label: 'English (US)',
    title: 'Docs Template',
    description: 'A documentation template build by vitepress',
    nav: [
      { text: 'Usage', link: '/en_us/usage/' },
      { text: 'Examples', link: '/en_us/examples/' },
    ],
    editLinkText: 'Edit this page on GitHub',
    lastUpdatedText: 'Last updated',
  },
}

export default locales
