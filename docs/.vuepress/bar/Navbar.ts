import { navbar } from 'vuepress-theme-hope'

export default navbar([
  /**
   * 首页
   */
  {
    text: '首页',
    link: '/',
    icon: 'home',
  },
  /**
   * 前端开发
   */
  {
    text: '前端开发',
    icon: 'html',
    children: [
      {
        text: '前端基石',
        children: [
          {
            text: 'HTML5',
            icon: 'html',
            link: '/前端基石/HTML5',
          },
          {
            text: 'CSS3',
            icon: 'css',
            link: '/前端基石/CSS3/基础与盒模型',
          },
          {
            text: 'JS基础',
            icon: 'javascript',
            link: '/前端基石/JS基础/变量与数据类型',
          },
        ],
      },
      {
        text: '前端框架',
        children: [
          {
            text: 'Vue',
            icon: 'vue',
            link: '/前端框架/Vue/Vue核心',
          },
          {
            text: 'React',
            icon: 'react',
            link: '/前端框架/React/',
          },
        ],
      },
      {
        text: '前端图形',
        icon: 'tupian',
        children: [
          {
            text: 'Flex布局',
            icon: 'flex',
            link: '/前端图形/Flex布局',
          },
          {
            text: 'Sass',
            icon: 'sass',
            link: '/前端图形/Sass',
          },
          {
            text: 'Canvas',
            icon: 'canvas',
            link: '/前端图形/canvas/Canvas基础',
          },
          {
            text: 'Three.js',
            icon: 'three',
            link: '/前端图形/Three.js/开发环境搭建',
          },
          {
            text: '玩转CSS艺术之美',
            icon: 'css',
            link: '/前端图形/玩转CSS艺术之美/浏览器',
          },
          {
            text: 'CSS世界阅读笔记',
            icon: 'css',
            link: '/前端图形/CSS世界阅读笔记/概述',
          },
        ],
      },
      {
        text: '前端进阶',
        icon: 'jinjie',
        children: [
          {
            text: 'TypeScript',
            icon: 'typescript',
            link: '/前端进阶/TypeScript/',
          },
          {
            text: 'ES6',
            icon: 'six',
            link: '/前端进阶/ES6/let和const',
          },
          {
            text: 'JS进阶',
            icon: 'javascript',
            link: '/前端进阶/JS进阶/深入理解javascript原型和闭包',
          },
          {
            text: '移动开发',
            icon: 'shouji',
            link: '/前端进阶/移动开发/移动Web开发入门',
          },
          {
            text: '微信小程序',
            icon: 'xiaochengxu',
            link: '/前端进阶/微信小程序',
          },
          {
            text: 'Webpack',
            icon: 'webpack',
            link: '/前端工程化/Webpack',
          },
        ],
      },
      {
        text: '前端知识体系',
        icon: 'm-siweidaotu',
        link: '/前端知识体系',
      },
    ],
  },
  /**
   * 后端开发
   */
  {
    text: '后端开发',
    icon: 'be',
    children: [
      {
        text: 'node技术栈',
        children: [
          {
            text: 'node基础知识以及常用库',
            icon: 'node',
            link: '/node/node基础知识以及常用库',
          },
          {
            text: 'Nest',
            icon: 'nest',
            link: '/node/nest/开发环境搭建',
          },
        ],
      },
    ],
  },
  /**
   * 基础知识
   */
  {
    text: '基础知识',
    icon: 'study',
    children: [
      {
        text: '计算机通识',
        children: [
          {
            text: '计算机网络',
            icon: 'wangluo',
            link: '/基础知识/计算机网络/概述篇',
          },
        ],
      },
      {
        text: '前端相关',
        children: [
          {
            text: '浏览器工作原理与实践',
            icon: 'liulanqi',
            link: '/基础知识/浏览器工作原理与实践/01',
          },
          {
            text: '本地存储',
            icon: 'storage',
            link: '/基础知识/本地存储',
          },
          {
            text: '前后端数据交互',
            icon: 'http',
            link: '/基础知识/前后端数据交互',
          },
        ],
      },
    ],
  },
  /**
   * 开发工具
   */
  {
    text: '开发工具',
    icon: 'gongju',
    children: [
      {
        text: 'git',
        icon: 'git',
        link: '/开发工具/git',
      },
      {
        text: 'homebrew',
        icon: 'gongju',
        link: '/开发工具/homebrew',
      },
    ],
  },
  /**
   * 开发笔记
   */
  {
    text: '开发笔记',
    icon: 'biji',
    children: [
      {
        text: 'CSS',
        icon: 'css',
        link: '/开发笔记/CSS/CSS文本溢出处理方式',
      },
      {
        text: 'JS',
        icon: 'javascript',
        link: '/开发笔记/JS/数组对象对比找出差异项',
      },
      {
        text: 'Vue',
        icon: 'vue',
        link: '/开发笔记/Vue/vue2如何实现界面刷新',
      },
      {
        text: 'React',
        icon: 'react',
        link: '/开发笔记/React/React中引入图片',
      },
    ],
  },
  /**
   *  算法
   */
  {
    text: '数据结构算法',
    icon: 'suanfa',
    link: '/数据结构算法/',
  },
  /**
   * 书签
   */
  {
    text: '书签',
    icon: 'shuqian',
    link: '/书签',
  },
  /**
   * 杂记
   */
  {
    text: '杂记',
    icon: 'note',
    link: '/杂记/',
  },
])
