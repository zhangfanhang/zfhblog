<template><div><h2 id="node-程序传递参数" tabindex="-1"><a class="header-anchor" href="#node-程序传递参数" aria-hidden="true">#</a> Node 程序传递参数</h2>
<p>在某些情况下执行<code v-pre>node</code> 程序的过程中，我们可能希望给 <code v-pre>node</code>传递一些参数：<code v-pre>node index.js env=development</code></p>
<p>如果我们这样来使用程序，就意味着我们需要在程序中获取到传递的参数：</p>
<ul>
<li>获取参数其实是在 <code v-pre>process</code> 的内置对象中的；</li>
<li><code v-pre>process.argv</code>（<code v-pre>argument vector</code>的缩写，传入的具体参数）是一个数组，里面包含了我们需要的参数；</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 终端输入：`node index.js env=development`运行</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hello node'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="特殊的全局对象" tabindex="-1"><a class="header-anchor" href="#特殊的全局对象" aria-hidden="true">#</a> 特殊的全局对象</h2>
<p>这些全局对象可以在模块中任意使用，但是在命令行交互中是不可以使用的</p>
<p>包括：<code v-pre>__dirname</code>、<code v-pre>__filename</code>、<code v-pre>exports</code>、<code v-pre>module</code>、<code v-pre>require()</code></p>
<p><code v-pre>__dirname</code>：获取当前文件所在的路径;注意：不包括后面的文件名</p>
<p><code v-pre>__filename</code>：获取当前文件所在的路径和文件名称;注意：包括后面的文件名称</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__filename<span class="token punctuation">)</span>
<span class="token comment">// D:\myProject\gitProject\node_study\特殊的全局对象</span>
<span class="token comment">// D:\myProject\gitProject\node_study\特殊的全局对象\index.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见的全局对象" tabindex="-1"><a class="header-anchor" href="#常见的全局对象" aria-hidden="true">#</a> 常见的全局对象</h2>
<h3 id="process-对象" tabindex="-1"><a class="header-anchor" href="#process-对象" aria-hidden="true">#</a> process 对象</h3>
<p><code v-pre>process</code> 提供了<code v-pre>Node</code> 进程中相关的信息;比如 <code v-pre>Node</code> 的运行环境、参数信息等；</p>
<h3 id="console-对象" tabindex="-1"><a class="header-anchor" href="#console-对象" aria-hidden="true">#</a> console 对象</h3>
<p>提供了简单的调试控制台</p>
<h3 id="定时器函数" tabindex="-1"><a class="header-anchor" href="#定时器函数" aria-hidden="true">#</a> 定时器函数</h3>
<ul>
<li><code v-pre>setTimeout(callback, delay[, ...args])</code>：callback 在 delay 毫秒后执行一次；</li>
<li><code v-pre>setInterval(callback, delay[, ...args])</code>：callback 每 delay 毫秒重复执行一次；</li>
<li><code v-pre>setImmediate(callback[, ...args])</code>：callback I / O 事件后的回调的“立即”执行；</li>
<li><code v-pre>process.nextTick(callback[, ...args])</code>：添加到下一次 tick 队列中；</li>
</ul>
<h2 id="global-对象" tabindex="-1"><a class="header-anchor" href="#global-对象" aria-hidden="true">#</a> global 对象</h2>
<p><code v-pre>global</code> 是一个全局对象，事实上 <code v-pre>process</code>、<code v-pre>console</code>、<code v-pre>setTimeout</code> 等都有被放到<code v-pre>global</code> 中</p>
<p>在浏览器中，全局变量都是在<code v-pre>window</code> 上的，比如有<code v-pre>document</code>、<code v-pre>setInterval</code>、<code v-pre>setTimeout</code>、<code v-pre>alert</code>、<code v-pre>console</code>等等</p>
<p>在 <code v-pre>Node</code> 中，我们也有一个 <code v-pre>global</code> 属性，并且看起来它里面有很多其他对象。</p>
<p>但是在浏览器中执行的 <code v-pre>JavaScript</code> 代码，如果我们在顶级范围内通过 <code v-pre>var</code> 定义的一个属性，默认会被添加到 <code v-pre>window</code>对象上</p>
<p>但是在<code v-pre>node</code>中，我们通过 <code v-pre>var</code>定义一个变量，它只是在当前模块中有一个变量，不会放到全局中</p>
<h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h2>
<ul>
<li>事实上模块化开发最终的目的<strong>是将程序划分成一个个小的结构</strong>；</li>
<li>这个结构中编写属于自己的逻辑代码，有自己的<strong>作用域</strong>，不会影响到其他的结构；</li>
<li>这个结构可以将自己希望暴露的变量、函数、对象等导出给其结构使用；</li>
<li>也可以通过某种方式，导入另外结构中的变量、函数、对象等；</li>
</ul>
<p>上面说提到的结构，就是模块；按照这种结构划分开发程序的过程，就是模块化开发的过程；</p>
<p>JavaScript 本身，直到 ES6（2015）才推出了自己的模块化方案；</p>
<p>为了让 JavaScript 支持模块化，涌现出了很多不同的模块化规范：AMD、CMD、CommonJS 等；</p>
<h3 id="没有模块化带来很多的问题" tabindex="-1"><a class="header-anchor" href="#没有模块化带来很多的问题" aria-hidden="true">#</a> 没有模块化带来很多的问题</h3>
<p>早期没有模块化带来了很多的问题：比如<strong>命名冲突的问题</strong></p>
<p>当然，我们有办法可以解决上面的问题：<strong>立即函数调用表达式 <code v-pre>IIFE</code></strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> module1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'frank'</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        name<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，我们其实带来了新的问题：</p>
<ul>
<li>第一，我必须记得<strong>每一个模块中返回对象的命名</strong>，才能在其他模块使用过程中正确的使用；</li>
<li>第二，代码写起来<strong>混乱不堪</strong>，每个文件中的代码都需要<strong>包裹在一个匿名函数中来编写</strong>；</li>
<li>第三，在<strong>没有合适的规范</strong>情况下，每个人、每个公司都可能会任意命名、甚至出现模块名称相同的情况；</li>
</ul>
<p>所以，我们会发现，虽然实现了模块化，但是我们的实现过于简单，并且是没有规范的。</p>
<ul>
<li>我们需要制定一定的规范来约束每个人都<strong>按照这个规范去编写模块化的代码</strong>；</li>
<li>这个规范中应该包括核心功能：<strong>模块本身可以导出暴露的属性，模块又可以导入自己需要的属性</strong>；</li>
<li>JavaScript 社区为了解决上面的问题，涌现出<strong>一系列好用的规范</strong>，接下来我们就学习具有代表性的一些规范。</li>
</ul>
<h3 id="commonjs-和-node" tabindex="-1"><a class="header-anchor" href="#commonjs-和-node" aria-hidden="true">#</a> CommonJS 和 Node</h3>
<p>我们需要知道 <strong><code v-pre>CommonJS</code> 是一个规范</strong>，最初提出来是在浏览器以外的地方使用，并且当时被命名为 <code v-pre>ServerJS</code>，后来为了 体现它的广泛性，修改为<code v-pre>CommonJS</code>，平时我们也会简称为 <code v-pre>CJS</code>。</p>
<ul>
<li><code v-pre>Node</code> 是<code v-pre>CommonJS</code> 在服务器端一个具有代表性的实现；</li>
<li><code v-pre>Browserify</code> 是 <code v-pre>CommonJS</code> 在浏览器中的一种实现；</li>
<li><code v-pre>webpack</code>打包工具具备对 <code v-pre>CommonJS</code> 的支持和转换；</li>
</ul>
<p>所以，<code v-pre>Node</code>中对 <code v-pre>CommonJS</code>进行了支持和实现，让我们在开发 <code v-pre>node</code> 的过程中可以方便的进行模块化开发：</p>
<ul>
<li>在 Node 中<strong>每一个 <code v-pre>js</code> 文件都是一个单独的模块</strong>；</li>
<li>这个模块中包括 <strong><code v-pre>CommonJS</code>规范的核心变量</strong>：<code v-pre>exports</code>、<code v-pre>module.exports</code>、<code v-pre>require</code>；</li>
<li>我们可以使用这些变量来方便的进行<strong>模块化开发</strong>；</li>
</ul>
<p>模块化的核心是导出和导入，<code v-pre>Node</code>中对其进行了实现：</p>
<ul>
<li><code v-pre>exports</code> 和 <code v-pre>module.exports</code> 可以负责对模块中的内容进行导出</li>
<li><code v-pre>require</code> 函数可以帮助我们导入其他模块（自定义模块、系统模块、第三方库模块）中的内容；</li>
</ul>
</div></template>


