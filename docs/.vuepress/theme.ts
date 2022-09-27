import { hopeTheme } from 'vuepress-theme-hope'
import Navbar from './configs/navbar.js'
import Sidebar from './configs/sidebar.js'
export default hopeTheme({
  hostname: 'https://zfhblog.top',
  editLink: false,
  author: {
    name: 'Frank',
    url: 'https://zfhblog.top',
  },
  repoDisplay: false,
  iconAssets: 'iconfont',
  logo: '/logo.jpg',
  // 文章信息展示项目
  //https://vuepress-theme-hope.github.io/v2/zh/config/frontmatter/layout.html#pageinfo
  pageInfo: [
    'Author',
    'Original',
    'Date',
    'Category',
    'Tag',
    'ReadingTime',
    'Word',
  ],
  navbar: Navbar,
  sidebar: Sidebar,
  footer: '做难而正确的事',
  displayFooter: true,
  encrypt: {
    config: {
      '/小记/二一年八月总结.html': ['1234'],
    },
  },
  plugins: {
    components: ['Badge', 'CodePen'],
    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
      stylize: [
        {
          matcher: 'Recommanded',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommanded',
              }
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true,
    },
    pwa: {
      favicon: '/logo.jpg',
    },
  },
})
