<template><div><h1 id="vue2-实现滚动窗口同步滚动" tabindex="-1"><a class="header-anchor" href="#vue2-实现滚动窗口同步滚动" aria-hidden="true">#</a> vue2 实现滚动窗口同步滚动</h1>
<p>项目开发中，遇到一个比较两个表单差异的需求，但当<code v-pre>item</code>过多就需要滚动条，这里就用到了滚动条同步的地方。</p>
<p>这是实现效果：</p>
<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="html,result" data-slug-hash="KKRdZJj" data-user="zhangfanhang" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/zhangfanhang/pen/KKRdZJj">
  element-ui-tree-demo-自动定位已选项</a> by zhangfanhang (<a href="https://codepen.io/zhangfanhang">@zhangfanhang</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<p>虽然<code v-pre>demo</code>中是表格但是实现起来是一样的，其实主要是通过<code v-pre>ref</code>属性来操控两个<code v-pre>div</code>的<code v-pre>scrollTop</code>属性</p>
<p>因为对两个div都添加了<code v-pre>scroll</code>方法，一个区域滚动会改变另外一个区域的<code v-pre>scrollTop</code>,但是同时触发了另外一个区域自己的<code v-pre>scroll</code>方法，又会进行改变，这样就形成了两个<code v-pre>scroll</code>的无限回调。</p>
<p>解决思路：大致思路是添加一个<code v-pre>flag</code>属性，两个scroll事件分别传入不同的值，再根据这个值去判断是否设置<code v-pre>scrollTop</code>属性，这样就不会造成无线回调,这里的<code v-pre>flag</code>属性需要在<code v-pre>scroll</code>事件之前传入，所以这里通过<code v-pre>mouserover</code>事件传入该属性。</p>
<p>还要注意的是如果直接给<code v-pre>el</code>组件绑定原生时间需要加<code v-pre>native</code>修饰符。</p>
</div></template>


