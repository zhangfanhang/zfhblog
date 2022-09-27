---
title: css面试题
---

## 盒模型宽度的计算

```html
    <style>
        #div1 {
            width: 100px;
            padding: 10px;
            border: 1px solid red;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div id="div1"></div>
</body>
```

请问 div1 的**offsetWidth**是多大？
::: details 答案
122px
:::
如果要让**offsetWidth**的值等于 100px,怎么做？
::: details 答案
**box-sizing:border-box**,此时盒子的 width=内容的宽度+左右 padding+左右 border=offsetWidth。所以**内容的宽度会变小**。
:::

::: tip 扩展
元素视图属性

- **offsetWidth**
  水平方向 width + 左右 padding + 左右 border-width（边框）
- **offsetHeight**
  垂直方向 height + 上下 padding + 上下 border-width（边框）

- **clientWidth**
  水平方向 width + 左右 padding
- **clientHeight**
  垂直方向 height + 上下 padding

- **offsetTop**
  获取当前元素到 **定位父节点** 的 top 方向的距离 若祖宗都不符合条件，offsetParent 为**body**
- **offsetLeft**
  获取当前元素到 **定位父节点** 的 left 方向的距离 若祖宗都不符合条件，offsetParent 为**body**

- **scrollWidth**
  元素内容真实的宽度，内容不超出盒子高度时为盒子的 clientWidth
- **scrollHeight**
  元素内容真实的高度，内容不超出盒子高度时为盒子的 clientHeight

Window 视图属性

- **innerWidth**
  浏览器窗口可视区宽度（不包括浏览器控制台、菜单栏、工具栏）包含滚动条
- **innerHeight**
  浏览器窗口可视区高度（不包括浏览器控制台、菜单栏、工具栏）包含滚动条
- **outerWidth**
  浏览器窗口的外部高度 浏览器有非全屏下有边框
- **outerHeight**
  浏览器窗口的外部宽度 浏览器有非全屏下有边框

Document 文档视图

- **document.documentElement.clientWidth**
  浏览器窗口可视区宽度（不包括浏览器控制台、菜单栏、工具栏、滚动条）
- **document.documentElement.clientHeight**
  浏览器窗口可视区高度（不包括浏览器控制台、菜单栏、工具栏、滚动条）
- **document.documentElement.offsetHeight**
  获取整个文档的高度（包含 body 的 margin）
- **document.body.offsetHeight**
  获取整个文档的高度（不包含 body 的 margin） -**document.documentElement.scrollTop**
  返回文档的滚动 top 方向的距离（当窗口发生滚动时值改变）
- **document.documentElement.scrollLeft**
  返回文档的滚动 left 方向的距离（当窗口发生滚动时值改变）

:::

## 谈谈你对 CSS 盒模型的认识

标准盒子模型，即 box-sizing content-box，浏览器默认模型，我们所写的 width 和 height 并不是最终盒子的宽高，而是 content 的，盒子的宽高由我们的 content+padding+border 来组成的，但是这样在做项目时可能会遇到小问题，假如我想构建一个 100x100 的盒子大小，但是我发现我写的是 width 和 height 是 100，于是我需要加上 padding 及 border，但是加上去之后，盒子也会相应变大，这就造成改动麻烦。

后面 css3 中提供了 IE 盒子模型，能够直接控制盒子的大小。于是项目中大多数用上了 IE 盒子模型，以及我看过 bootstrap 以及 element-ui 源码中大部分也是用的 IE 盒子模型

## margin 纵向重叠问题

```html
   <style>
        p{
            font-size:16px;
            line-height:16px;
            margin-top: 10px;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <p>aaa</p>
    <p></p>
    <p></p>
    <p></p>
    <p>bbb</p>
</body>
```

aaa 和 bbb 之间的距离？
::: details 答案

- 相邻元素的 margin-top 和 margin-bottom 会发生重叠
- 空白内容的 p 也会重叠
- 所以答案为**15px**

:::

## margin 负值问题

- top，left 为负值，元素向上、向左移动
- right 负值 右侧元素左移，自身不受影响
- bottom 负值，下方元素上移，自身不受影响

## BFC 理解与应用

- 块级格式化上下文
- 一块独立渲染区域，内部元素的渲染不会影响边界以外的元素。
- 形成 BFC 的条件？

1. float 的值不是 none
2. positon 的值不是 static 或者 relative
3. display 的值是 inline-block,flex,或者 inline-flex

4. **overflow:hidden**

## float 布局：实现圣杯和双飞翼布局

> [CSS 布局中圣杯布局与双飞翼布局的实现思路差异在哪里？](https://www.zhihu.com/question/21504052)

### 圣杯和双飞翼布局的目的

- 三栏布局，中间一栏最先加载和渲染（内容最重要）
- 两侧内容固定，中间内容随着宽度自适应
- 一般用于 PC 网页

### 技术总结

- 使用 float 布局
- 两侧使用 margin 负值，以便和中间内容横向重叠
- 防止中间内容被两侧覆盖，一个用 padding 一个用 margin

### 圣杯布局

::: warning 特别注意
min-width 就是页面的最小宽度：要想保证该布局效果正常显示，由于两侧都具有固定的宽度，所以需要给定页面一个最小的宽度，但这并不只是简单的 200+150=350px。回想之前 left 使用了 position: relative，所以就意味着在 center 开始的区域，还存在着一个 left 的宽度。所以页面的最小宽度应该设置为 200+150+200=550px

css 中，min-width 是用来限制元素的最小宽度，max-width 用来限制元素的最大宽度，也就是说当元素的 width 大于 max-width,或者小于 min-width。就被它们的值所代替，尤其适用于网站的自适应。

[理解 css 中 min-width 和 max-width，width 与它们之间的区别联系](https://www.cnblogs.com/ypppt/p/13111087.html)
:::

<CodePen
  link="https://codepen.io/zhangfanhang/pen/WNdXamY"
  :theme="$isDarkMode? 'dark': 'light'"
/>

### 双飞翼布局

::: warning 注意
由于双飞翼布局没有用到 position:relative 进行定位，所以最小页面宽度应该为 200+150=350px。但是当页面宽度缩小到 350px 附近时，会挤占中间栏的宽度，使得其内容被右侧栏覆盖，因此在设置最小页面宽度时，应该适当增加一些宽度以供中间栏使用
:::

<CodePen
  link="https://codepen.io/zhangfanhang/pen/mdpqvqW"
  :theme="$isDarkMode? 'dark': 'light'"
/>

### 两者区别

双飞翼布局比圣杯布局多创建了一个 div，但不用相对布局了,终究还是 flex 布局舒服！（**flex 实现,代码见 flex 布局**）

## float 布局：手写 clearfix

```css
.clearfix:after {
  content: '';
  display: table;
  clear: both;
}
/* 兼容ie低版本 */
.clearfix {
  *zoom: 1;
}
```

## flex 布局

### 实现一个三点的色子

<CodePen
  link="https://codepen.io/zhangfanhang/pen/JjMOxmG"
  :theme="$isDarkMode? 'dark': 'light'"
/>

## display:none、visibility:hidden 和 opacity:0 之间的区别？

![dis区别](https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/dis%E5%8C%BA%E5%88%AB.png)

::: tip 扩展：visibility 还有哪些其他的属性值？

![visibility可能的值](https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/visibility%E5%8F%AF%E8%83%BD%E7%9A%84%E5%80%BC.png)

:::

## 居中的实现方式

[绝对定位+margin auto 垂直居中引发的思考](https://blog.csdn.net/qq_38164763/article/details/91360196)

### 水平居中

- inline 元素:text-align:center
- block 元素：margin: 0 auto（margin:auto）
- absolute 元素：left:50%+margin-left:-宽度的一半
- absolute 元素：各个方向为 0，margin:0 auto

### 垂直居中

- inline 元素:line-height 的值等于 height 值
- absolute 元素：top:50%+margin-top:-高度的一半
-

### 垂直水平居中

- absolute 元素：利用 top:50%,left:50%和 margin-top,margin-left (元素尺寸已知可用)
- absolute 元素：利用 top:50%,left:50%和利用 transfrom:translate(-50%,-50%)(元素尺寸不知道也可以用)
- absolute 元素： top,left,bottom,right=0+margin:auto(元素尺寸不知道也可以用)

- flex：align-items:center;justify-content:center;

## line-height 如何继承

![line-height 如何继承](https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/line-height%E5%A6%82%E4%BD%95%E7%BB%A7%E6%89%BF.png)

- 写具体数值，如 30px，则继承该值（比较好理解），
- 写比例，如 2/1.5，则继承该比例（比较好理解），
- 写百分比，如 200%，则继承计算出来的值（考点）

[line-height](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height)

## rem

rem 是一个长度单位，

- px，绝对长度单位，最常用
- em,相对长度单位，相对于父元素，不常用
- rem,相对长度单位，相对根元素，常用于**响应式布局**

```css
html {
  font-size: 100px; // 1rem等于html元素上字体设置的大小
}
div {
  font-size: 0.16rem;
}
```

## 用 css 画个三角形

```css
#box {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid red;
}
```
