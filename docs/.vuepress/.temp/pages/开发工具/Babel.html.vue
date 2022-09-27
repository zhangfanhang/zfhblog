<template><div><div class="custom-container tip">
<p class="custom-container-title">参考</p>
<p><a href="https://juejin.cn/post/6844904065223098381" target="_blank" rel="noopener noreferrer">【建议改成】读完这篇你还不懂 Babel 我给你寄口罩<ExternalLinkIcon/></a></p>
<p><a href="https://www.babeljs.cn/docs/" target="_blank" rel="noopener noreferrer">Babel 中文文档<ExternalLinkIcon/></a></p>
</div>
<h2 id="babel-简介" tabindex="-1"><a class="header-anchor" href="#babel-简介" aria-hidden="true">#</a> Babel 简介</h2>
<p>Babel 是 JavaScript 的编译器，用来将 ES6 的代码，转换成 ES6 之前的代码</p>
<p>Babel <strong>本身可以编译 ES6 的大部分语法</strong>，比如 let、const、箭头函数、类</p>
<p>但是对于 ES6 新增的 API，比如 Set、Map、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign/Array.from）都不能直接编译，<strong>需要借助其它的模块</strong></p>
<p>Babel 一般需要配合 webpack 来编译模块语法</p>
<h2 id="使用-babel-前的准备工作" tabindex="-1"><a class="header-anchor" href="#使用-babel-前的准备工作" aria-hidden="true">#</a> 使用 Babel 前的准备工作</h2>
<ol>
<li>
<p>安装 Node.js 和 npm</p>
</li>
<li>
<p>初始化项目：<code v-pre>npm init</code></p>
</li>
<li>
<p>安装 Babel</p>
</li>
</ol>
<p><code v-pre>npm install --save-dev @babel/core @babel/cli</code></p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>@babel/core 是 Babel 的核心模块.</p>
<p>@babel/cli, 它是一个终端运行工具, 内置的插件,运行你从终端使用 babel 的工具.</p>
</div>
<ol start="4">
<li>在 package.json 文件中添加执行 babel 的命令</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span><span class="token string">"babel src -d dist"</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这段语句的意思是</strong>: 它使用我们设置的解析方式来解析<code v-pre>src</code>目录下的所有 JS 文件, 并将转换后的每个文件都输出到<code v-pre>dist</code>目录下.</p>
<h2 id="插件-plugins" tabindex="-1"><a class="header-anchor" href="#插件-plugins" aria-hidden="true">#</a> 插件 plugins</h2>
<p><code v-pre>插件plugins</code>, 它的本质就是一个 JS 程序, 指示着 Babel 如何对代码进行转换.</p>
<p>如果你是要将 ES6+转成 ES5, 可以依赖官方插件, 例如:</p>
<p><strong>@babel/plugin-transform-arrow-functions</strong>:<code v-pre>npm i --save-dev @babel/plugin-transform-arrow-functions</code></p>
<p>这个插件的作用是将箭头函数转换为 ES5 兼容的函数</p>
<p>虽然我们已经实现了箭头函数转换的功能, 但是 ES6+其它的语法却并不能转换, 这是因为我们只使用了<code v-pre>@babel/plugin-transform-arrow-functions</code>这个功能插件, 没有使用其它的了.</p>
<h2 id="presets" tabindex="-1"><a class="header-anchor" href="#presets" aria-hidden="true">#</a> Presets</h2>
<p>如果想要转换 ES6+的其它代码为 ES5, 我们可以使用&quot;preset&quot;来代替预先设定的<code v-pre>一组插件</code>, 而不是逐一添加我们想要的所有插件.</p>
<p><strong>这里可以理解为一个 preset 就是一组插件的集合.</strong></p>
<p><strong>@babel/preset-env</strong></p>
<p>例如, 我们使用<code v-pre>env preset</code>，<code v-pre>env preset</code>这个 preset 包括支持现代 JavaScript(ES6+)的所有插件.</p>
<p>安装： <code v-pre>npm i --save-dev @babel/preset-env</code></p>
<p>所以也就是说你安装使用了<code v-pre>env preset</code>之后, 就可以看到其它 ES6+语法的转换了.</p>
<p>现在让我们来用用 ES7 中的求幂运算符和函数参数支持尾部逗号这两个功能吧:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token number">1</span> <span class="token comment">// ES6箭头函数, 返回值为1</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">**</span> <span class="token number">2</span> <span class="token comment">// ES7求幂运算符</span>
<span class="token keyword">let</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ES7参数支持尾部逗号</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a:'</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'b:'</span><span class="token punctuation">,</span> b<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'c:'</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="babel-config-js-配置文件" tabindex="-1"><a class="header-anchor" href="#babel-config-js-配置文件" aria-hidden="true">#</a> babel.config.js 配置文件</h2>
<p><a href="https://juejin.cn/post/6844904065223098381#heading-11" target="_blank" rel="noopener noreferrer">配置<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> presets <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
    <span class="token string">'@babel/env'</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">'17'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">'64'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">'60'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">'11.1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> presets <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加上这个配置的作用是:</p>
<ul>
<li>使用了<code v-pre>env preset</code>这个 preset</li>
<li><code v-pre>env preset</code>只会为<code v-pre>目标浏览器</code>中<strong>没有</strong>的功能加载转换插件</li>
</ul>
<h2 id="polyfill" tabindex="-1"><a class="header-anchor" href="#polyfill" aria-hidden="true">#</a> Polyfill</h2>
<p>Plugins 是提供的插件, 例如箭头函数转普通函数<code v-pre>@babel/plugin-transform-arrow-functions</code></p>
<p>Presets 是一组 Plugins 的集合.</p>
<p><strong>而 Polyfill 是对执行环境或者其它功能的一个补充.</strong></p>
<p>就像现在你想在 edge10 浏览器中使用 ES7 中的方法<code v-pre>includes()</code>, 但是我们知道这个版本的浏览器环境是不支持你使用这个方法的, 所以如果你强行使用并不能达到预期的效果.</p>
<p>而 polyfill 的作用正是如此, 知道你的环境不允许, 那就帮你引用一个这个环境, 也就是说此时编译后的代码就会变成这样:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 原来的代码</span>
<span class="token keyword">var</span> hasTwo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">// 加了polyfill之后的代码</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'core-js/modules/es7.array.includes'</span><span class="token punctuation">)</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'core-js/modules/es6.string.includes'</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> hasTwo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@babel/polyfill</code>用来模拟完成 ES6+环境:</p>
<ul>
<li>
<p>可以使用像 Promise 或者 WeakMap 这样的新内置函数</p>
</li>
<li>
<p>可以使用像 Array.from 或者 Object.assign 这样的静态方法</p>
</li>
<li>
<p>可以使用像 Array.prototype.includes 这样的实例方法</p>
</li>
<li>
<p>还有 generator 函数</p>
</li>
</ul>
<p>安装： <code v-pre>npm i --save @babel/polyfill</code> (注意 --save 选项而不是 --save-dev，因为这是一个需要在源代码之前运行的 polyfill。)</p>
<p>由于我们使用的是 envpreset, 这里个配置中有一个叫做 &quot;useBuiltIns&quot;的选项</p>
<p>如果将这个选择设置为&quot;usage&quot;, 就只包括你需要的 polyfill</p>
<p>安装配置了<code v-pre>@babel/polyfill</code>, Babel 将检查你的所有代码, 然后查找目标环境中缺少的功能, 并引入仅包含所需的 polyfill</p>
<p>使用 Edge17 中没有的 Promise.prototype.finally:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> presets <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
    <span class="token string">'@babel/env'</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">'17'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">'64'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">'67'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">'11.1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">'usage'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> presets <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>@babel/polyfill 的 polypill, 其实它在 Babel7.4.0 以上已经不被推荐使用了.</strong></p>
<p>而是推荐使用<code v-pre>core-js@3</code>+<code v-pre>@babel/preset-env</code>然后设置<code v-pre>@babel/preset-env</code>的<code v-pre>corejs</code>选项为<code v-pre>3</code>.</p>
<p>安装：<code v-pre>npm i --save core-js@3</code></p>
<p>添加<code v-pre>corejs</code>选项:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> presets <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
    <span class="token string">'@babel/env'</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">edge</span><span class="token operator">:</span> <span class="token string">'17'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">'64'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">'67'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">safari</span><span class="token operator">:</span> <span class="token string">'11.1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">'usage'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> presets <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


