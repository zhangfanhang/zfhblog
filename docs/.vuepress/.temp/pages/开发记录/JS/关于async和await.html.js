export const data = JSON.parse("{\"key\":\"v-59859497\",\"path\":\"/%E5%BC%80%E5%8F%91%E8%AE%B0%E5%BD%95/JS/%E5%85%B3%E4%BA%8Easync%E5%92%8Cawait.html\",\"title\":\"关于async和await\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"关于async和await\",\"summary\":\"发现问题 某天在牛客上刷到这样一道题： 问输出结果是什么？我想这也太简单了，肯定是返回一个成功状态的 Promise 啊，一看答案我傻了，居然是一个未解决的 Promise. 最后我好好想了想，之前的理解一直是错的。看了几篇大牛的文章，我学废了 问题分析 看回上面那段代码，async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zfhblog.top/%E5%BC%80%E5%8F%91%E8%AE%B0%E5%BD%95/JS/%E5%85%B3%E4%BA%8Easync%E5%92%8Cawait.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ZFH's Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"关于async和await\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"发现问题\",\"slug\":\"发现问题\",\"link\":\"#发现问题\",\"children\":[]},{\"level\":2,\"title\":\"问题分析\",\"slug\":\"问题分析\",\"link\":\"#问题分析\",\"children\":[]},{\"level\":2,\"title\":\"备注\",\"slug\":\"备注\",\"link\":\"#备注\",\"children\":[]},{\"level\":2,\"title\":\"参考文章\",\"slug\":\"参考文章\",\"link\":\"#参考文章\",\"children\":[]}],\"readingTime\":{\"minutes\":2.98,\"words\":895},\"filePathRelative\":\"开发记录/JS/关于async和await.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
