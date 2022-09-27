<template><div><h2 id="发现问题" tabindex="-1"><a class="header-anchor" href="#发现问题" aria-hidden="true">#</a> 发现问题</h2>
<p>某天在牛客上刷到这样一道题：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'I made it!'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问输出结果是什么？我想这也太简单了，肯定是返回一个成功状态的 Promise 啊，一看答案我傻了，居然是一个未解决的 Promise.</p>
<p>最后我好好想了想，之前的理解一直是错的。看了几篇大牛的文章，我学废了</p>
<h2 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析" aria-hidden="true">#</a> 问题分析</h2>
<p>看回上面那段代码，async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。 当函数执行的时候，一旦遇到 await 就会<strong>先返回</strong>，等到触发的异步操作完成，再接着执行函数体内后面的语句。但是最重要的一点是<strong>异步函数 async 始终返回一个 promise</strong>。其实这段代码这样写可能更好理解：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'I made it!'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当调用<code v-pre>getData()</code>的时候，遇到了<code v-pre>await</code>那么就会暂停在这一行，等待后面的<code v-pre>Promise</code>返回结果，<code v-pre>getData()</code>会先返回，此时返回的肯定是一个<code v-pre>Promise</code>，<strong><em>而且是等待状态的</em></strong>。接着执行调用<code v-pre>getData()</code>之后（<code v-pre>async </code>函数调用不会造成阻塞，它内部所有的阻塞都被封装在一个<code v-pre> Promise</code> 对象中异步执行）的代码，那么这行代码<code v-pre>console.log(data)</code>便会紧跟着执行,此时打印的结果肯定是一个<code v-pre>处于等待状态的Promise</code>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>data<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// I made it!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这段代码可能也会让人困惑：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async执行开始'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 这里也打印的是一个等待状态的Promise</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实是一样的，分析以下这段代码的执行顺序：调用 getData(),打印<code v-pre>async执行开始</code>,遇到 await，先返回。打印 data,一个等待状态的 Promise，先执行同步代码，打印 c,结果一样。返回去执行异步任务，先清掉所有微任务，async 返回了成功状态的 Promise 且参数为<code v-pre>123</code>,接着执行 then 里面的代码，打印出<code v-pre>123</code></p>
<h2 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h2>
<p><code v-pre>async</code> 函数和普通 函数没有什么不同，他只是表示这个函数里有异步操作的方法，并返回一个<code v-pre> Promise</code> 对象
翻译过来其实就是：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// async/await 写法</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 start'</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 end'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// Promise 写法</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 start'</span><span class="token punctuation">)</span>
  <span class="token comment">// 如果传入的参数是Promise对象，则参数的结果决定了Promise.resolve()的结果</span>
  Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async1 end'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">async2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'async2'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显然，<code v-pre>await</code>后面的代码，实际上相当于<code v-pre>Promise</code>中<code v-pre>then</code>里面的代码</p>
<p><code v-pre>await</code> 会暂停代码在该行上，直到 <code v-pre>promise</code> 完成，然后返回结果值。在暂停的同时，其他正在等待执行的代码就有机会执行了。</p>
<p>如果在函数中 <code v-pre>return</code> 一个直接量，<code v-pre>async</code> 会把这个直接量通过 <code v-pre>Promise.resolve()</code> 封装成 <code v-pre>Promise</code> 对象。</p>
<p>还有一点就是如果 async 函数没有返回值，又该如何？很容易想到，它会返回 <code v-pre>Promise.resolve(undefined)</code></p>
<h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>
<ul>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await" target="_blank" rel="noopener noreferrer">await MDN 文档<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await" target="_blank" rel="noopener noreferrer">async 和 await:让异步编程更简单<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://segmentfault.com/a/1190000007535316" target="_blank" rel="noopener noreferrer">理解 JavaScript 的 async/await<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://blog.csdn.net/MFWSCQ/article/details/105109727" target="_blank" rel="noopener noreferrer">每日一题（五）async<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="http://www.ruanyifeng.com/blog/2015/05/async.html" target="_blank" rel="noopener noreferrer">async 函数的含义和用法(阮一峰)<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://segmentfault.com/a/1190000039971920" target="_blank" rel="noopener noreferrer">一次搞懂- JS 事件循环之宏任务和微任务<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


