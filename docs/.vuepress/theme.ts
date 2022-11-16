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
  iconAssets: '//at.alicdn.com/t/c/font_3677319_531c2t2i8w.css',
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
    description: `前端菜鸡,目前在南京工作。<br>
    💻开发工具:<br>
    <img src='https://img.shields.io/badge/-MacBookPro2020-000?style=flat-square&logo=Apple&logoColor=white'/>
    <img src='https://img.shields.io/badge/-WebStorm-000?style=flat-square&logo=WebStorm&logoColor=white'/>
    <br>
    👌正在使用:<br>
    <img src='https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white'/>
    <img src='https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white'/>
    <img src='https://img.shields.io/badge/-Vue-4FC08D?style=flat-square&logo=Vue.js&logoColor=white'/>
    <img src='https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white'/>
    <img src='https://img.shields.io/badge/-Markdown-000?style=flat-square&logo=Markdown&logoColor=white'/>
    <br>
    💪正在学习:<br>
    <img src='https://img.shields.io/badge/-Nest-E0234E?style=flat-square&logo=NestJS&logoColor=white'/>
    <img src='https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white'/>
    <img src='https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=Docker&logoColor=white'/>
    <img src='https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=Git&logoColor=white'/>
    <img src='https://img.shields.io/badge/-Java-yellow?style=flat-square'/>
    `,
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
      '/杂记/二二年八月总结.html': '0049003914',
      '/杂记/二二年九月总结.html': '0049003914',
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
      mark: true,
      tabs: true,
    },
  },
})
