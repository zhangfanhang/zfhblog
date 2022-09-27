<template><div><h1 id="vue2-中的-css-深度选择器" tabindex="-1"><a class="header-anchor" href="#vue2-中的-css-深度选择器" aria-hidden="true">#</a> vue2 中的 css 深度选择器</h1>
<p>当 <code v-pre>&lt;style&gt;</code> 标签有 <code v-pre>scoped</code> 属性时，它的 CSS 只作用于当前组件中的元素，父组件的样式将不会渗透到子组件。 如果你希望 scoped 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用深度选择器。</p>
<p>使用较多的场景是去定制 elementUI 等组件库的样式</p>
<h2 id="写法" tabindex="-1"><a class="header-anchor" href="#写法" aria-hidden="true">#</a> 写法</h2>
<p>像<code v-pre>/deep/</code>，<code v-pre>&gt;&gt;&gt;</code>，<code v-pre>::v-deep</code>已被弃用，下面这种方式 vue2，vue3 均可使用：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">:deep(.title)</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> yellowgreen<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考：<a href="https://juejin.cn/post/6978781674070884366" target="_blank" rel="noopener noreferrer">vue 中的 css 深度选择器<ExternalLinkIcon/></a></p>
</div></template>


