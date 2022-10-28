import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
export default defineUserConfig({
  base: "/",
  dest: "./dist",
  lang: "zh-CN",
  title: "ZFH's Blog",
  description: "一个菜鸟前端的知识库博客",
  plugins: [
    docsearchPlugin({
      appId: "HDTORBOLNJ",
      apiKey: "5cc292fcb4b413686f662fc008a02ffa",
      indexName: "zfhtop",
      placeholder: "搜索",
      translations: {
        button: {
          buttonText: "🔍",
        },
        modal: {
          searchBox: {
            resetButtonTitle: "Clear the query",
            resetButtonAriaLabel: "Clear the query",
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "Cancel",
          },
          startScreen: {
            recentSearchesTitle: "搜索历史",
            noRecentSearchesText: "没有搜索历史",
            saveRecentSearchButtonTitle: "Save this search",
            removeRecentSearchButtonTitle: "Remove this search from history",
            favoriteSearchesTitle: "收藏",
            removeFavoriteSearchButtonTitle:
              "Remove this search from favorites",
          },
          errorScreen: {
            titleText: "Unable to fetch results",
            helpText: "You might want to check your network connection.",
          },
          footer: {
            selectText: "选择",
            selectKeyAriaLabel: "Enter key",
            navigateText: "切换",
            navigateUpKeyAriaLabel: "Arrow up",
            navigateDownKeyAriaLabel: "Arrow down",
            closeText: "关闭",
            closeKeyAriaLabel: "Escape key",
            searchByText: "搜索提供商:",
          },
          noResultsScreen: {
            noResultsText: "无法找到相关结果",
            suggestedQueryText: "你也可以尝试查询:",
            reportMissingResultsText:
              "Believe this query should return results?",
            reportMissingResultsLinkText: "Let us know.",
          },
        },
      },
    }),
  ],
  theme,
  shouldPrefetch: false,
  head: [["link", { rel: "icon", href: "/logo.jpg" }]],
});
