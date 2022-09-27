<template><div><h2 id="如何理解-html-语义化" tabindex="-1"><a class="header-anchor" href="#如何理解-html-语义化" aria-hidden="true">#</a> 如何理解 HTML 语义化？</h2>
<ol>
<li>代码结构清晰，方便阅读，有利于团队合作开发。</li>
<li>方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以语义的方式来渲染网页。</li>
<li>有利于搜索引擎优化（SEO）。</li>
</ol>
<h2 id="默认情况下-哪些-html-元素是块级元素-哪些是内联元素-行内元素" tabindex="-1"><a class="header-anchor" href="#默认情况下-哪些-html-元素是块级元素-哪些是内联元素-行内元素" aria-hidden="true">#</a> 默认情况下，哪些 HTML 元素是块级元素，哪些是内联元素（行内元素）？</h2>
<h3 id="内联-行内-元素-display-inline" tabindex="-1"><a class="header-anchor" href="#内联-行内-元素-display-inline" aria-hidden="true">#</a> 内联（行内）元素（display:inline）</h3>
<ol>
<li>可以和其他元素处于一行，不用必须另起一行。</li>
<li>元素的高度、宽度及顶部和底部边距不可设置。<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>行内元素的 padding-top、 padding-bottom、 margin-top、 margin-bottom 属性设置是<strong>无效</strong>的;行内元素的 padding-left、 padding-right, margin-left、 margin-botton 属性设置是<strong>有效</strong>;行内元素的 padding-bottom(<strong>经过测试 padding-top 无论设置多大都没有任何效果,而 padding-bottom 在显示效果上确实增加了</strong>)从<code v-pre>显示的效果</code>上是增加的，但其实<strong>设置的是无效的。并不会对他周围的元素产生任何影响</strong>。</p>
</div>
</li>
<li>元素的宽度就是它包含的文字、图片的宽度。</li>
</ol>
<p>常见的行级元素有：<code v-pre>a</code>、<code v-pre>input</code>、<code v-pre>span</code>、<code v-pre>img</code>、<code v-pre>button</code></p>
<p><code v-pre>img</code>和<code v-pre>表单元素</code>是<strong>行内块</strong>（display:inline-block），他们既可以设置宽度高度，也能并排显示</p>
<h3 id="块级元素-display-block" tabindex="-1"><a class="header-anchor" href="#块级元素-display-block" aria-hidden="true">#</a> 块级元素（display:block）</h3>
<ol>
<li>每个块级元素都是独自占一行，其后的元素也只能另起一行，两个元素不能共用一行。</li>
<li>元素的高度、宽度、行高和顶底边距都是可以设置的。</li>
<li>元素的宽度如果不设置的话，默认为父元素的宽度。</li>
</ol>
<p>常见的块级元素有 <code v-pre>div</code>、<code v-pre>p</code>、<code v-pre>h1...h6</code>、<code v-pre>ol</code>、<code v-pre>ul</code>、<code v-pre>dl</code>、<code v-pre>dt</code>、<code v-pre>li</code>、<code v-pre>table</code>、<code v-pre>form</code></p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>无论是块级元素还是行内元素，height 属性如果不设置，他将自动被内容撑开，如果没有内容，则 height 默认为 0</p>
</div>
<h2 id="src-和-href-的区别" tabindex="-1"><a class="header-anchor" href="#src-和-href-的区别" aria-hidden="true">#</a> src 和 href 的区别</h2>
<ul>
<li>
<p>src： 表示对<code v-pre>资源的引用</code>，它指向的内容会嵌入到当前标签所在的位置。src 会将其指向的资源下载并应⽤到⽂档内，如请求 js 脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕。</p>
</li>
<li>
<p>href： 表示<code v-pre>超文本引用</code>，它指向一些网络资源，建立和当前元素或本文档的<strong>链接关系</strong>。当浏览器识别到它他指向的文件时，就会并行下载资源，不会停止对当前⽂档的处理。 常用在 a、link 等标签上。</p>
</li>
</ul>
<h2 id="script-标签中-defer-和-async-的区别" tabindex="-1"><a class="header-anchor" href="#script-标签中-defer-和-async-的区别" aria-hidden="true">#</a> script 标签中 defer 和 async 的区别</h2>
<p>如果没有 defer 或 async 属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/async.defer.png" alt="async.defer" loading="lazy"></p>
<p>defer 和 async 属性<strong>都是去异步加载外部的 JS 脚本文件</strong>，它们都不会阻塞页面的解析，其<code v-pre>区别</code>如下：</p>
<ol>
<li>执行顺序： 多个带 async 属性的标签，不能保证加载的顺序；多个带 defer 属性的标签，按照加载顺序执行；</li>
<li>脚本是否并行执行：async 属性，表示后续文档的加载和执行与 js 脚本的加载和执行是并行进行的，即异步执行；defer 属性，加载后续文档的过程和 js 脚本的加载(此时仅加载不执行)是并行进行的(异步)，<strong>js 脚本需要等到文档所有元素解析完成之后才执行</strong>，DOMContentLoaded 事件触发执行之前。</li>
</ol>
<h2 id="doctype-作用-严格模式与混杂模式如何区分-它们有何差异" tabindex="-1"><a class="header-anchor" href="#doctype-作用-严格模式与混杂模式如何区分-它们有何差异" aria-hidden="true">#</a> Doctype 作用？严格模式与混杂模式如何区分？它们有何差异？<Badge text="了解"/></h2>
<p><a href="https://www.cnblogs.com/wuqiutong/p/5986191.html" target="_blank" rel="noopener noreferrer">参考<ExternalLinkIcon/></a></p>
</div></template>


