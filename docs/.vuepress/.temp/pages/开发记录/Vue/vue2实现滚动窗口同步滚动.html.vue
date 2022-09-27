<template><div><h1 id="vue2-实现滚动窗口同步滚动" tabindex="-1"><a class="header-anchor" href="#vue2-实现滚动窗口同步滚动" aria-hidden="true">#</a> vue2 实现滚动窗口同步滚动</h1>
<p>项目开发中，遇到一个比较两个表单差异的需求，但当<code v-pre>item</code>过多就需要滚动条，这里就用到了滚动条同步的地方。</p>
<p>这是实现效果：</p>
<CodePen
  link="https://codepen.io/zhangfanhang/pen/KKRdZJj"
  :theme="$isDarkMode? 'dark': 'light'"
/>
<p>虽然<code v-pre>demo</code>中是表格但是实现起来是一样的，其实主要是通过<code v-pre>ref</code>属性来操控两个<code v-pre>div</code>的<code v-pre>scrollTop</code>属性</p>
<p>因为对两个 div 都添加了<code v-pre>scroll</code>方法，一个区域滚动会改变另外一个区域的<code v-pre>scrollTop</code>,但是同时触发了另外一个区域自己的<code v-pre>scroll</code>方法，又会进行改变，这样就形成了两个<code v-pre>scroll</code>的无限回调。</p>
<p>解决思路：大致思路是添加一个<code v-pre>flag</code>属性，两个 scroll 事件分别传入不同的值，再根据这个值去判断是否设置<code v-pre>scrollTop</code>属性，这样就不会造成无线回调,这里的<code v-pre>flag</code>属性需要在<code v-pre>scroll</code>事件之前传入，所以这里通过<code v-pre>mouserover</code>事件传入该属性。</p>
<p>还要注意的是如果直接给<code v-pre>el</code>组件绑定原生时间需要加<code v-pre>native</code>修饰符。</p>
</div></template>


