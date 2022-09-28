import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
import { searchPlugin } from '@vuepress/plugin-search'
export default defineUserConfig({
  base: '/',
  dest: './dist',
  plugins: [searchPlugin({})],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "ZFH's Blog",
      description: '一个菜鸟前端的知识库博客',
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "文档演示",
    //   description: "vuepress-theme-hope 的文档演示",
    // },
  },
  theme,
  shouldPrefetch: false,
})
