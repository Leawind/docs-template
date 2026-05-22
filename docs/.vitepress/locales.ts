import { defineLocale } from './utils/locale.ts'

export default {
  zh_cn: defineLocale({
    lang: 'zh_cn',
    translation: {
      label: '简体中文 (中国大陆)',
      title: '文档模板',
      description: '用 vitepress 构建的静态网站模板',
      themeConfig: {
        nav: [
          { text: '使用说明', link: '/zh_cn/usage/' },
          { text: '示例', link: '/zh_cn/examples/' },
        ],
        editLink: {
          text: '在 Github 上编辑此页',
        },
        lastUpdated: { text: '上次更新' },
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
    },
  }),
  en_us: defineLocale({
    lang: 'en_us',
    translation: {
      label: 'English (US)',
      title: 'Docs Template',
      description: 'A documentation template build by vitepress',
      themeConfig: {
        nav: [
          { text: 'Usage', link: '/en_us/usage/' },
          { text: 'Examples', link: '/en_us/examples/' },
        ],
        editLink: {
          text: 'Edit this page on GitHub',
        },
        lastUpdated: { text: 'Last updated' },
      },
    },
  }),
}
