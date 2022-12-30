import { navbar } from 'vuepress-theme-hope'

export default navbar([
  {
    text: '首页',
    link: '/',
    icon: 'home',
  },
  {
    text: '知识管理',
    link: '/LIBRARY',
    icon: 'zhishiku',
  },
  {
    text: '书签收藏',
    icon: 'shuqian',
    link: '/书签收藏',
  },
  {
    text: '总结记录',
    link: '/总结记录/菜鸟前端的22年总结',
    icon: 'note',
  },
])
