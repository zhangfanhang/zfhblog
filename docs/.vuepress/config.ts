import { defineUserConfig } from 'vuepress'
import theme from './theme.js'
export default defineUserConfig({
  base: '/',
  dest: './dist',
  lang: 'zh-CN',
  title: "ZFH's Blog",
  description: '一个菜鸟前端的知识库博客',
  theme,
  shouldPrefetch: false,
  head: [['link', { rel: 'icon', href: '/logo.jpg' }]],
})
