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
  },
  theme,
  shouldPrefetch: false,
})
