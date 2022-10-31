import { hopeTheme } from 'vuepress-theme-hope'
import Navbar from './bar/Navbar'
import Sidebar from './bar/Sidebar'
export default hopeTheme({
  hostname: 'https://zfhblog.top',
  contributors: false,
  editLink: false,
  author: {
    name: 'Frank',
    url: 'https://zfhblog.top',
  },
  repoDisplay: false,
  iconAssets: '//at.alicdn.com/t/c/font_3677319_tmmkzuptpps.css',
  logo: '/logo.jpg',
  pageInfo: [
    'Author',
    'Original',
    'Date',
    'Category',
    'Tag',
    'ReadingTime',
    'Word',
    'PageView',
  ],
  navbar: Navbar,
  sidebar: Sidebar,
  displayFooter: false,
  breadcrumb: false,
  blog: {
    roundAvatar: true,
    avatar:
      'https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/avatar.jpg',
    description: '练习时长2.1年的前端菜🐔一枚，目前在南京工作。',
    medias: {
      Email: 'mailto:zhangfanhang@znv.com',
      Github: 'https://github.com/zhangfanhang',
      Gitee: 'https://gitee.com/zhangfanhang',
      Zhihu: 'https://www.zhihu.com/people/zhang-Fan-Hang',
      Steam: 'https://steamcommunity.com/profiles/76561198815093167/',
      Weibo: 'https://weibo.com/u/6568313173',
      Wechat: '微信',
    },
  },
  encrypt: {
    config: {
      '/小记/二二年八月总结.html': '0049003914',
      '/小记/二二年九月总结.html': '0049003914',
    },
  },
  plugins: {
    blog: true,
    comment: {
      dark: 'auto',
      provider: 'Waline',
      serverURL: 'https://waline.zfhblog.top',
    },
    components: ['Badge', 'CodePen', 'PDF'],
    mdEnhance: {
      codetabs: true,
      container: true,
      demo: true,
      imageSize: true,
      imageTitle: true,
      lazyLoad: true,
      mark: true,
      tabs: true,
    },
  },
})
