<template><div><div class="custom-container tip">
<p class="custom-container-title">努力学习中</p>
<p>敬请期待...</p>
</div>
<h2 id="node-js-架构" tabindex="-1"><a class="header-anchor" href="#node-js-架构" aria-hidden="true">#</a> Node.js 架构</h2>
<p>我们编写的 JavaScript 代码会经过 V8 引擎，再通过 Node.js 的 Bindings，将任务放到 Libuv 的事件循环中；</p>
<p><code v-pre>libuv</code>（Unicorn Velociraptor—独角伶盗龙）是使用 C 语言编写的库；</p>
<p><code v-pre>libuv</code> 提供了事件循环、文件系统读写、网络 IO、线程池等等内容；</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/node架构.png" alt="node架构" loading="lazy"></p>
</div></template>


