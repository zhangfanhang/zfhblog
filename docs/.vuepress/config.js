const sidebar = require('./configs/sidebar')
const nav = require('./configs/nav')
module.exports = {
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  ],
  // 静态资源从阿里云OSS加载
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV === 'production') {
  //     config.output.publicPath =
  //       'https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-assets/'
  //   }
  // },
  dest: './dist',
  title: `ZFH's Blog`,
  description: '一个菜鸟前端的知识库博客',
  themeConfig: {
    nav,
    sidebar,
    sidebarDepth: 2,
    lastUpdated: '上次更新',
    logo: '/logo.jpg',
  },
  plugins: [
    //标题下面显示标签
    [
      'vuepress-plugin-tags',
      {
        color: '#fff', // 标签字体颜色
        backgroundColor: '#000', // 标签背景颜色
      },
    ],
    // 平滑滚动
    'vuepress-plugin-smooth-scroll',
    // 代码复制
    '@xiaopanda/vuepress-plugin-code-copy',
    // 返回顶部
    '@vuepress/back-to-top',
    // 阅读进度条
    'reading-progress',
    // 上次更新
    [
      '@vuepress/last-updated',
      {
        transformer(timestamp) {
          const dayjs = require('dayjs')
          return dayjs(timestamp).format('YYYY年MM月DD日')
        },
      },
    ],
  ],
}
