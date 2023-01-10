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
  iconAssets: '//at.alicdn.com/t/c/font_3677319_xkwnvn59wph.css',
  logo: '/logo.jpg',
  footer: '<span style="font-weight:bold">JS天下第一.</span>',
  copyright: 'Copyright © 2022-present Fanhang Zhang',
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
  displayFooter: true,
  breadcrumb: false,
  blog: {
    roundAvatar: true,
    avatar:
      'https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/avatar.jpg',
    description: `前端菜鸡,目前在南京工作。<br>
    <hr>
    ✍️自2021年10月16日写了:<br>
    <a href='https://wakatime.com/@b94342d7-a3b1-41c3-8455-342d836a7152'><img src='https://wakatime.com/badge/user/b94342d7-a3b1-41c3-8455-342d836a7152.svg'>的代码</a><br>
    <hr>
   💻开发工具:<br>
    <img src='https://img.shields.io/badge/-MacBookPro,2020,M1-000?style=flat-square&logo=Apple&logoColor=white'/>
    <img src='https://img.shields.io/badge/-WebStorm-000?style=flat-square&logo=WebStorm&logoColor=white'/>
    <img src='https://img.shields.io/badge/-Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white'/>
    <br>
    <hr>
    👌技术栈:<br>
    <img src='https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white'/>
    <img src='https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white'/>
    <img src='https://img.shields.io/badge/-Vue-4FC08D?style=flat-square&logo=Vue.js&logoColor=white'/>
    <img src='https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white'/>
    <br>
    <hr>
    `,
    medias: {
      Email: 'mailto:zhangfanhang@znv.com',
      Github: 'https://github.com/zhangfanhang',
      Gitee: 'https://gitee.com/zhangfanhang',
    },
  },
  encrypt: {
    config: {},
  },
  plugins: {
    copyright: true,
    blog: {
      excerpt: false,
    },
    comment: {
      dark: 'auto',
      provider: 'Waline',
      serverURL: 'https://waline.zfhblog.top',
      reaction: true,
    },
    components: {
      components: ['Badge', 'CodePen', 'PDF', 'BiliBili'],
    },
    mdEnhance: {
      // 启用流程图
      flowchart: true,
      codetabs: true,
      container: true,
      demo: {
        jsfiddle: false,
        codepen: false,
      },
      align: true,
      imageSize: true,
      figure: true,
      mark: true,
      tabs: true,
      tasklist: true,
    },
  },
})
