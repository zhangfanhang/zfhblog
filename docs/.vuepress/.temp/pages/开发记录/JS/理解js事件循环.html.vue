<template><div><ul>
<li>
<p><a href="https://juejin.cn/post/6844903512845860872" target="_blank" rel="noopener noreferrer">这一次，彻底弄懂 JavaScript 执行机制<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://segmentfault.com/a/1190000039971920" target="_blank" rel="noopener noreferrer">一次搞懂- JS 事件循环之宏任务和微任务<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://segmentfault.com/a/1190000012806637#1" target="_blank" rel="noopener noreferrer">10 分钟理解 JS 引擎的执行机制<ExternalLinkIcon/></a></p>
</li>
</ul>
<hr>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/浏览器完整流程图.png" alt="浏览器完整流程图" loading="lazy"></p>
<p><strong>任务队列</strong>的执行过程是：先执行一个<code v-pre>宏任务</code>，执行过程中如果产出新的<code v-pre>宏/微任务</code>，就将他们推入相应的<code v-pre>任务队列</code>，之后在执行一队<code v-pre>微任务</code>，之后再执行<code v-pre>宏任务</code>，如此循环。以上不断重复的过程就叫做 <code v-pre>Event Loop(事件循环)</code>。</p>
<div class="custom-container tip">
<p class="custom-container-title">那些是宏任务？那些是微任务？</p>
<ul>
<li>宏任务主要包括：包括整体代码 script、setTimeout、setInterval...</li>
<li>微任务主要包括：Promise.then...</li>
</ul>
</div>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/宏任务微任务.png" alt="宏任务微任务" loading="lazy"></p>
</div></template>


