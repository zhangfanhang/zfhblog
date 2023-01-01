import { navbar } from 'vuepress-theme-hope'

export default navbar([
  {
    text: '首页',
    link: '/',
    icon: 'home',
  },
  {
    text: '前端开发',
    link: '/前端开发/',
    icon: 'html',
  },
  {
    text: '后端开发',
    link: '/后端开发/node/node基础知识以及常用库.html',
    icon: 'node',
  },
  {
    text: '开发工具',
    link: '/开发工具/git.html',
    icon: 'gongju',
  },
  {
    text: '基础知识',
    link: '/基础知识/本地存储.html',
    icon: 'study',
  },
  {
    text: '开发日志',
    link: '/开发日志/CSS/CSS文本溢出处理方式.html',
    icon: 'biji',
  },
  {
    text: '书签收藏',
    icon: 'shuqian',
    link: '/书签收藏',
  },
  {
    text: '总结记录',
    link: '/总结记录/菜鸟前端的22年总结',
    icon: 'jilu',
  },
])
