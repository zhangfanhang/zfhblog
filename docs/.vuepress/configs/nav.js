// 导航栏配置
module.exports = [
  /**
   * 首页
   */
  {
    text: '首页',
    link: '/',
  },
  /**
   * 前端开发
   */
  {
    text: '前端开发',
    items: [
      {
        text: '前端基础',
        items: [
          {
            text: 'HTML5',
            link: '/前端开发/HTML5',
          },
          {
            text: 'CSS3',
            link: '/前端开发/CSS3/基础与盒模型',
          },
          {
            text: 'JS基础',
            link: '/前端开发/JS基础/变量与数据类型',
          },
        ],
      },
      {
        text: '前端进阶-框架',
        items: [
          {
            text: 'Vue',
            link: '/前端开发/Vue/Vue核心',
          },
          {
            text: 'React',
            link: '/前端开发/React/JSX核心语法',
          },
        ],
      },
      {
        text: '前端进阶-移动端',
        items: [
          {
            text: '移动开发',
            link: '/前端开发/移动开发/移动Web开发入门',
          },
        ],
      },
      {
        text: '前端进阶-语言',
        items: [
          {
            text: 'TypeScript',
            link: '/前端开发/TypeScript/TS基础',
          },
          {
            text: 'ES6',
            link: '/前端开发/ES6/let和const',
          },
          {
            text: 'JS进阶',
            link: '/前端开发/JS进阶/深入理解javascript原型和闭包',
          },
        ],
      },
      {
        text: '前端进阶-图形',
        items: [
          {
            text: 'Flex布局',
            link: '/前端开发/Flex布局',
          },
          {
            text: 'Sass',
            link: '/前端开发/Sass',
          },
          {
            text: 'Canvas',
            link: '/前端开发/canvas/Canvas基础',
          },
          {
            text: 'Three.js',
            link: '/前端开发/Three.js/开发环境搭建',
          },
          {
            text: '玩转CSS艺术之美',
            link: '/前端开发/玩转CSS艺术之美/浏览器',
          },
        ],
      },
    ],
  },
  /**
   * 后端开发
   */
  {
    text: '后端开发',
    items: [
      {
        text: 'node.js',
        items: [
          {
            text: 'node入门',
            link: '/后端开发/node入门/node.js基础',
          },
          {
            text: '深入node',
            link: '/后端开发/深入node/邂逅node',
          },
          {
            text: 'koa2',
            link: '/后端开发/Koa2',
          },
        ],
      },
      {
        text: '数据库',
        items: [
          {
            text: 'MySQL',
            link: '/后端开发/数据库/MySQL',
          },
          {
            text: 'mongoDB',
            link: '/后端开发/数据库/mongoDB',
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
    items: [
      {
        text: '计算机通识',
        items: [
          {
            text: '计算机网络',
            link: '/基础知识/计算机网络/概述篇',
          },
        ],
      },
      {
        text: '前端相关',
        items: [
          {
            text: '浏览器工作原理与实践',
            link: '/基础知识/浏览器工作原理与实践/01',
          },
          {
            text: '本地存储',
            link: '/基础知识/本地存储',
          },
          {
            text: '前后端数据交互与HTTP协议',
            link: '/基础知识/前后端数据交互与HTTP协议',
          },
          {
            text: 'Ajax&Fetch与跨域请求',
            link: '/基础知识/Ajax&Fetch与跨域请求',
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
    items: [
      { text: '面试题总结', link: '/前端面试/面试题总结/html面试题' },
      { text: '面试复盘', link: '/前端面试/面试复盘/21.9.14一面复盘' },
    ],
  },
  /**
   * 开发工具
   */
  {
    text: '开发工具',
    items: [
      {
        text: '前端工具',
        items: [
          {
            text: 'Babel',
            link: '/开发工具/Babel',
          },
          {
            text: 'Mock.js',
            link: '/开发工具/Mock.js',
          },
          {
            text: 'Webpack',
            link: '/开发工具/Webpack',
          },
        ],
      },
      {
        text: '其他工具',
        items: [
          {
            text: 'git',
            link: '/开发工具/git',
          },
          {
            text: 'homebrew',
            link: '/开发工具/homebrew',
          },
          {
            text: 'Docker',
            link: '/开发工具/Docker',
          },
          {
            text: 'iterm2',
            link: '/开发工具/iterm2',
          },
        ],
      },
    ],
  },
  /**
   * 开发记录
   */
  {
    text: '开发记录',
    items: [
      {
        text: 'CSS',
        link: '/开发记录/CSS/CSS文本溢出处理方式',
      },
      {
        text: 'JS',
        link: '/开发记录/JS/数组对象对比找出差异项',
      },
      {
        text: 'Node',
        link: '/开发记录/Node/在Vuekoa项目中如何解决跨域和cookie问题',
      },
      {
        text: 'Vue',
        link: '/开发记录/Vue/vue2如何实现界面刷新',
      },
      {
        text: 'React',
        link: '/开发记录/React/开发流程管理平台学习心得',
      },
    ],
  },
  /**
   *  算法
   */
  {
    text: '算法',
    link: '/算法/时间空间复杂度',
  },
  /**
   * 杂记
   */
  {
    text: '杂记',
    link: '/杂记',
  },
  /**
   * 书签
   */
  {
    text: '书签',
    link: '/书签',
  },
  /**
   * 项目
   */
  {
    text: '项目',
    items: [
      {
        text: 'Vue',
        items: [
          {
            text: 'todolist',
            link: 'https://todo.zfhblog.top',
          },
          {
            text: 'Vue3 admin',
            link: 'https://v3admin.zfhblog.top',
          },
          {
            text: '生鲜到家',
            link: 'https://fresh.zfhblog.top',
          },
          {
            text: '外卖数据可视化',
            link: 'https://datav.zfhblog.top',
          },
        ],
      },
      {
        text: '其他',
        items: [
          {
            text: '泛家居',
            link: 'https://fanjiaju.zfhblog.top',
          },
          {
            text: 'demo',
            link: 'https://demo.zfhblog.top',
          },
        ],
      },
    ],
  },
]
