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
    icon: 'be',
    link: '/后端开发/',
  },
  {
    text: '基础知识',
    icon: 'study',
    link: '/基础知识/',
  },
  {
    text: '开发日志',
    icon: 'biji',
    link: '/开发日志/',
  },
  {
    text: '我的收藏',
    icon: 'shuqian',
    link: '/我的收藏',
  },
  {
    text: '杂七杂八',
    icon: 'shuqian',
    link: '/杂七杂八/',
  },
])
