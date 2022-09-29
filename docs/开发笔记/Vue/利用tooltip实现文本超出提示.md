---
title: 利用tooltip实现文本超出提示
isOriginal: true
tag:
  - elementUI
  - vue2
category: 开发笔记
---

# 利用 tooltip 实现文本超出提示

写业务碰到需要固定容器判断文字是否超出，超出部分使用省略号隐藏，鼠标悬浮显示 tip。

html 结构：

```html
<el-tooltip effect="dark" :content="title" placement="top" :disabled="!show">
  <div class="context" ref="text">{{ title }}</div>
</el-tooltip>
```

省略号使用 css 完成：

```css
.context {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

判断是否超出逻辑：

```js
const el = this.$refs.text
// 大于即超出可视区
this.show = el && el.scrollWidth > el.offsetWidth
```

`scrollWidth`:对象的实际内容的宽度，不包边线宽度，会随对象中内容超过可视区后而变大。

`offsetWidth`:对象整体的实际宽度，包括滚动条等边线，会随对象显示大小的变化而改变。

::: tip 各种 width

[scrollWidth、clientWidth、offsetWidth、width 的区别](https://www.jianshu.com/p/76ba0d71bd7c)

:::
