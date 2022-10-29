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
   * 前端基石
   */
  {
    text: '前端基石',
    icon: 'html',
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
  /**
   *  前端框架
   */
  {
    text: '前端框架',
    icon: 'kj',
    children: [
      {
        text: 'Vue',
        icon: 'vue',
        link: '/前端框架/Vue/Vue核心',
      },
      {
        text: 'React',
        icon: 'react',
        link: '/前端框架/React/JSX核心语法',
      },
    ],
  },
  /**
   *  前端图形
   */
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
    ],
  },
  /**
   *  前端进阶
   */
  {
    text: '前端进阶',
    icon: 'jinjie',
    children: [
      {
        text: 'TypeScript',
        icon: 'typescript',
        link: '/前端进阶/TypeScript/是否真的需要TS',
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
   * 前端面试
   */
  {
    text: '前端面试',
    icon: 'mianshi',
    children: [
      {
        text: '面试题总结',
        icon: 'zongjie',
        link: '/前端面试/面试题总结/html面试题',
      },
      {
        text: '面试复盘',
        icon: 'fupan',
        link: '/前端面试/面试复盘/21.9.14一面复盘',
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
      {
        text: 'ohmyzsh',
        icon: 'gongju',
        link: '/开发工具/ohmyzsh',
      },
      {
        text: 'node&npm',
        icon: 'node',
        link: '/开发工具/node&npm',
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
        link: '/开发笔记/React/开发流程管理平台学习心得',
      },
    ],
  },
  /**
   *  算法
   */
  {
    text: '算法',
    icon: 'suanfa',
    link: '/算法/',
  },
])
