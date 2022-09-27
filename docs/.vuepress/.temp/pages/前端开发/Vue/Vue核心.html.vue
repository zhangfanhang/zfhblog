<template><div><h2 id="vue-简介" tabindex="-1"><a class="header-anchor" href="#vue-简介" aria-hidden="true">#</a> vue 简介</h2>
<p>一套用于<strong>构建用户界面</strong>的<strong>渐进式</strong> <code v-pre>JavaScript</code>框架</p>
<p><code v-pre>Vue</code>可以自底向上逐层的应用</p>
<ul>
<li>
<p>简单应用：只需一个轻量小巧的核心库</p>
</li>
<li>
<p>复杂应用：可以引入各式各样的<code v-pre>Vue</code>插件 <code v-pre>vue-router</code>,<code v-pre>vuex</code>.....</p>
</li>
</ul>
<h3 id="vue-的特点" tabindex="-1"><a class="header-anchor" href="#vue-的特点" aria-hidden="true">#</a> vue 的特点</h3>
<p>⭐ 组件化，提高代码复用率。且让代码更好维护</p>
<p>⭐ 声明式编码,无需直接操作<code v-pre>DOM</code>(命令式编码关心的是”how to do“，声明式编码关心的是“what to do”，how 的部分由框架完成)</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/声明式编码.png" alt="声明式编码" loading="lazy"></p>
<p>⭐ 使用<code v-pre>虛拟DOM</code>+优秀的<code v-pre>Diff算法</code>，尽量复用<code v-pre>DOM</code>节点。</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/真实DOM.png" alt="真实DOM" loading="lazy"></p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/虚拟DOM.png" alt="虚拟DOM" loading="lazy"></p>
<h2 id="初识-vue" tabindex="-1"><a class="header-anchor" href="#初识-vue" aria-hidden="true">#</a> 初识 Vue</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>初识Vue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 引入Vue --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.bootcdn.net/ajax/libs/vue/2.6.14/vue.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello,{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">//阻止 vue 在启动时生成生产提示。</span>
      Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token comment">//创建Vue实例</span>
      <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#root'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'world'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>想让<code v-pre>Vue</code>工作，就必须创建一个<strong>Vue 实例</strong>，且要传入一个<strong>配置对象</strong></li>
<li><code v-pre>root</code>容器里的代码依然符合<code v-pre>html</code>规范，只不过混入了一些特殊的<code v-pre>Vue</code>语法</li>
<li><code v-pre>root</code>容器里的代码被称为<strong>Vue 模板</strong></li>
<li><code v-pre>Vue</code>实例和容器是一一对应的</li>
<li>真实开发中只有一个<code v-pre>Vue</code>实例，并且会配合着组件一起使用</li>
<li>双花括号中的<code v-pre>xxx</code>要写 js 表达式，且<code v-pre>xxx</code>可以自动读取到 data 中的所有属性</li>
<li><strong>一旦 data 中的数据发生改变，那么页面中用到该数据的地方也会自动更新</strong></li>
</ol>
<div class="custom-container warning">
<p class="custom-container-title">注意区分</p>
<p><code v-pre>js</code>表达式 和 <code v-pre>js</code>代码(语句)</p>
<ol>
<li>表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：</li>
</ol>
<p>(1). a</p>
<p>(2). a+b</p>
<p>(3). demo(1)</p>
<p>(4). x === y ? 'a' : 'b'</p>
<ol start="2">
<li>js 代码(语句):</li>
</ol>
<p>(1). if(){}</p>
<p>(2). for(){}</p>
</div>
<h2 id="模板语法" tabindex="-1"><a class="header-anchor" href="#模板语法" aria-hidden="true">#</a> 模板语法</h2>
<h3 id="插值语法" tabindex="-1"><a class="header-anchor" href="#插值语法" aria-hidden="true">#</a> 插值语法</h3>
<ul>
<li>功能：用于解析标签体内容。</li>
<li>写法：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token punctuation">{</span>
    xxx
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>xxx 是 js 表达式，且可以直接读取到 data 中的所有属性</p>
<h3 id="指令语法" tabindex="-1"><a class="header-anchor" href="#指令语法" aria-hidden="true">#</a> 指令语法</h3>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>Vue 中有很多的指令，且形式都是：v-????，此处只是拿 v-bind 举个例子。</p>
</div>
<ul>
<li>功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）。</li>
<li>举例：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>v<span class="token operator">-</span>bind<span class="token operator">:</span>href<span class="token operator">=</span><span class="token string">"xxx"</span> <span class="token comment">//或简写为 `:href="xxx"`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>xxx 同样要写 js 表达式，且可以直接读取到 data 中的所有属性。</p>
<h2 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h2>
<ul>
<li>
<p>单向绑定 <code v-pre>v-bind</code> :数据只能从 data 流向页面</p>
</li>
<li>
<p>双向绑定 <code v-pre>v-model</code> :数据不仅能从 data 流向页面，还可以从页面流向 data。</p>
</li>
</ul>
<h2 id="el-与-data-的两种写法" tabindex="-1"><a class="header-anchor" href="#el-与-data-的两种写法" aria-hidden="true">#</a> el 与 data 的两种写法</h2>
<h3 id="el-有-2-种写法" tabindex="-1"><a class="header-anchor" href="#el-有-2-种写法" aria-hidden="true">#</a> el 有 2 种写法</h3>
<ul>
<li><code v-pre>new Vue</code>时候配置 <code v-pre>el</code> 属性</li>
<li>先创建<code v-pre>Vue</code>实例，随后再通过<code v-pre>vm.$mount('#root')</code>指定 el 的值</li>
</ul>
<h3 id="data-有-2-种写法" tabindex="-1"><a class="header-anchor" href="#data-有-2-种写法" aria-hidden="true">#</a> data 有 2 种写法</h3>
<ul>
<li>对象式</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// ......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>函数式</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何目前哪种写法都可以，使用脚手架开发时，<strong>data 必须使用函数式</strong>，否则必会报错。</p>
<h2 id="mvvm-模型" tabindex="-1"><a class="header-anchor" href="#mvvm-模型" aria-hidden="true">#</a> MVVM 模型</h2>
<ol>
<li><code v-pre>M</code>：模型<code v-pre>Model</code>=&gt;<code v-pre>data</code>:主要存的是页面中的数据</li>
<li><code v-pre>V</code>：视图<code v-pre>View</code> =&gt;<code v-pre>templete</code>:MVVM 中的 View 通过使用模板语法来声明式的将数据渲染进 DOM，当 ViewModel 对 Model 进行更新的时候，会通过数据绑定更新到 View</li>
<li><code v-pre>VM</code>：视图模型<code v-pre>ViewModel</code>=&gt;<code v-pre>Vue</code>实例:它是连接 view 和 model 的桥梁。它有两个方向：</li>
</ol>
<ul>
<li>
<p>将 Model 转化成 View，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。</p>
</li>
<li>
<p>将 View 转化成 Model，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。</p>
</li>
</ul>
<p>这两个方向都实现的，我们称之为数据的双向绑定。</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/MVVM.png" alt="MVVM" loading="lazy"></p>
<h2 id="事件处理" tabindex="-1"><a class="header-anchor" href="#事件处理" aria-hidden="true">#</a> 事件处理</h2>
<div class="custom-container tip">
<p class="custom-container-title">两个重要的小原则</p>
<ol>
<li><strong>所有被 Vue 管理的函数，最好写成普通函数，这样 this 的指向才是 vm 或 组件实例对象。</strong></li>
<li><strong>所有不被 Vue 所管理的函数（定时器的回调函数、ajax 的回调函数等、Promise 的回调函数），最好写成箭头函数，这样 this 的指向才是 vm 或 组件实例对象。</strong></li>
</ol>
</div>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<ol>
<li></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>v<span class="token operator">-</span>on<span class="token operator">:</span>xxx
<span class="token comment">// 或</span>
@xxx <span class="token comment">// 简写</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 xxx 是事件名</p>
<ol start="2">
<li>事件的回调需要配置在 methods 对象中，最终会在 vm 上</li>
<li>methods 中配置的函数，<strong>不要用箭头函数</strong>，否则 this 就不是 vm 了</li>
<li>methods 中配置的函数，都是被 Vue 所管理的函数，this 的指向是 vm 或 <strong>组件实例对象</strong></li>
<li></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@click<span class="token operator">=</span><span class="token string">"demo"</span>
@click<span class="token operator">=</span><span class="token string">"demo($event)"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两种写法效果一致，前者已经默认传入 event 事件对象，后者可以传参；（$event 事件对象占位符）</p>
<h3 id="事件修饰符" tabindex="-1"><a class="header-anchor" href="#事件修饰符" aria-hidden="true">#</a> 事件修饰符</h3>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>主要记住前三条</p>
<p>修饰符可以连续写：@click.prevent.stop</p>
</div>
<ol>
<li><code v-pre>prevent</code>：阻止默认事件（常用）</li>
<li><code v-pre>stop</code>：阻止事件冒泡（常用）</li>
<li><code v-pre>once</code>：事件只触发一次（常用）</li>
<li><code v-pre>capture</code>：使用事件的捕获模式</li>
<li><code v-pre>self</code>：只有 event.target(触发此事件最早元素)是当前元素自身<strong>时</strong>才触发事件</li>
<li><code v-pre>passive</code>：事件的默认行为立即执行，无需等待事件回调执行完毕</li>
</ol>
<h3 id="键盘事件" tabindex="-1"><a class="header-anchor" href="#键盘事件" aria-hidden="true">#</a> 键盘事件</h3>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>主要记住第一条，后两条不太会用到</p>
</div>
<ol>
<li>Vue 中常用的按键别名：</li>
</ol>
<ul>
<li>回车 =&gt; <code v-pre>enter</code></li>
<li>删除 =&gt; <code v-pre>delete</code> (捕获“删除”和“退格”键)</li>
<li>退出 =&gt; <code v-pre>esc</code></li>
<li>空格 =&gt;<code v-pre>space</code></li>
<li>换行 =&gt;<code v-pre>tab</code> (特殊，必须配合 keydown 才可以正常使用**)</li>
<li>上 =&gt;<code v-pre>up</code></li>
<li>下 =&gt;<code v-pre>down</code></li>
<li>左 =&gt;<code v-pre>left</code></li>
<li>右 =&gt; <code v-pre>right</code></li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>按下回车提示输入<span class="token punctuation">"</span></span> <span class="token attr-name">@keydown.enter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showInfo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>Vue 未提供别名的按键，可以使用按键原始的<code v-pre>key</code>值<code v-pre>event.key</code>去绑定，但注意要转为<code v-pre>kebab-case</code>（短横线命名）</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>按下大小写切换键提示输入<span class="token punctuation">"</span></span>
  <span class="token attr-name">@keydown.caps-lock</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showInfo<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>系统修饰键（用法特殊）：<code v-pre>ctrl</code>、<code v-pre>alt</code>、<code v-pre>shift</code>、<code v-pre>meta(徽标键)</code></li>
</ol>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p><code v-pre>keyup</code>:当某个按键被松开，<code v-pre>keydown</code>当某个按键被按下</p>
</div>
<p>(1).配合<code v-pre>keyup</code>使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。</p>
<p>(2).配合<code v-pre>keydown</code>使用：正常触发事件</p>
<ol start="4">
<li>也可以使用<code v-pre>keyCode</code>去指定具体的按键 <Badge text='不推荐' type="error"/></li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>按下回车提示输入<span class="token punctuation">"</span></span> <span class="token attr-name">@keydown.13</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showInfo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/keycode不推荐MDN.png" alt="keycode不推荐MDN" loading="lazy"></p>
<ol start="5">
<li>
<p>键盘事件同样可以连写<Badge text='不常用' type="error"/>===&gt;<code v-pre>@keydown.ctrl.67</code>（Ctrl + C）</p>
</li>
<li>
<p><code v-pre>Vue.config.keyCodes.自定义键名 = 键码</code>，可以去定制按键别名</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>keyCodes<span class="token punctuation">.</span>huiche <span class="token operator">=</span> <span class="token number">13</span> <span class="token comment">//定义了一个别名按键</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="计算属性与监视" tabindex="-1"><a class="header-anchor" href="#计算属性与监视" aria-hidden="true">#</a> 计算属性与监视</h2>
<h3 id="计算属性-computed" tabindex="-1"><a class="header-anchor" href="#计算属性-computed" aria-hidden="true">#</a> 计算属性-computed</h3>
<ol>
<li>定义：要用的属性不存在，要通过<strong>已有属性</strong>计算得来</li>
<li>原理：底层借助了 <code v-pre>Objcet.defineproperty</code> 方法提供的 <code v-pre>getter </code>和 <code v-pre>setter</code></li>
<li>get 函数什么时候执行？</li>
</ol>
<ul>
<li>初次读取时会执行一次</li>
<li>当依赖的数据发生改变时会被再次调用</li>
</ul>
<ol start="4">
<li>
<p>优势： <code v-pre>methods</code>和计算属性两种方式的最终结果确实是完全相同的。然而，不同的是<strong>计算属性是支持缓存</strong>。只在依赖数据发生改变时它们才会重新求值。这就意味着只要依赖的数据不改变，多次访问计算属性会立即返回之前的计算结果，而不必再次执行函数，效率更高</p>
</li>
<li>
<p>备注：</p>
</li>
</ol>
<ul>
<li>计算属性最终会出现在 vm 上，在模板中<strong>直接读取</strong>使用即可。</li>
<li>如果计算属性要被修改，那必须写 set 函数去响应修改，且 set 中要引起计算时依赖的数据发生改变。</li>
</ul>
 <p class="codepen" data-height="300" data-theme-id="light" data-default-tab="html,result" data-slug-hash="rNJyRKe" data-user="zhangfanhang" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/zhangfanhang/pen/rNJyRKe">
  vue2-姓名案例_计算属性实现</a> by zhangfanhang (<a href="https://codepen.io/zhangfanhang">@zhangfanhang</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<ol start="6">
<li>计算属性的简写（计算属性只读不改的前提下）：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>			<span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">'-'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监视属性-watch" tabindex="-1"><a class="header-anchor" href="#监视属性-watch" aria-hidden="true">#</a> 监视属性-watch</h3>
<ol>
<li>
<p>当被监视的属性变化时, 回调函数自动调用, 进行相关操作</p>
</li>
<li>
<p>监视的属性必须存在，才能进行监视！！</p>
</li>
<li>
<p>监视的两种写法：</p>
</li>
</ol>
<p>(1)new Vue 时传入 watch 配置</p>
<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="html,result" data-slug-hash="MWQpZJp" data-user="zhangfanhang" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/zhangfanhang/pen/MWQpZJp">
  vue2-watch案例</a> by zhangfanhang (<a href="https://codepen.io/zhangfanhang">@zhangfanhang</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<p>(2)通过 <code v-pre>vm.$watch</code> 监视</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vm<span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">'isHot'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'isHot被修改了'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>深度监视</li>
</ol>
<p>(1)Vue 中的 watch 默认不监测对象内部值的改变,比如 numbers 为对象{a:1,b:2},默认监视 numbers,改变 a,b 的值是不会触发回调函数的</p>
<p>(2)配置 deep:true 可以监测对象内部值改变</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>			<span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token literal-property property">numbers</span><span class="token operator">:</span><span class="token punctuation">{</span>
					<span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
					<span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
						console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'numbers改变了'</span><span class="token punctuation">)</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注：</p>
<p>(1)Vue 自身可以监测对象内部值的改变，但 Vue 提供的 watch 默认不可以！</p>
<p>(2)使用 watch 时根据数据的具体结构，决定是否采用深度监视。</p>
<ol start="5">
<li>监视的简写方式(前提是没有 deep,immediate)：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1</span>
<span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token function">isHot</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'isHot被修改了'</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token comment">// 2</span>
vm<span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">'isHot'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'isHot被修改了'</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>可以单独监测对象中的某个值：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">"dialogForm.ybExpression.value"</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch-对比-computed" tabindex="-1"><a class="header-anchor" href="#watch-对比-computed" aria-hidden="true">#</a> watch 对比 computed</h3>
<p><a href="https://notes.zfhblog.top/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95/%E9%9D%A2%E8%AF%95%E9%A2%98%E6%80%BB%E7%BB%93/Vue%E9%9D%A2%E8%AF%95%E9%A2%98.html#computed-%E5%92%8C-watch-%E7%9A%84%E5%8C%BA%E5%88%AB" target="_blank" rel="noopener noreferrer">computed 和 watch 的区别<ExternalLinkIcon/></a></p>
<h2 id="class-与-style-绑定" tabindex="-1"><a class="header-anchor" href="#class-与-style-绑定" aria-hidden="true">#</a> class 与 style 绑定</h2>
<h3 id="class-样式" tabindex="-1"><a class="header-anchor" href="#class-样式" aria-hidden="true">#</a> class 样式</h3>
<p>写法<code v-pre>:class=&quot;xxx&quot;</code> <code v-pre>xxx</code> 可以是<strong>字符串、对象、数组</strong>。</p>
<ul>
<li>字符串写法适用于：类名不确定，要动态获取。</li>
<li>数组写法适用于：要绑定多个样式，个数不确定，名字也不确定。</li>
<li>对象写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 字符串写法 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isColor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{list}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 这种写法可以规定那个class类名是否生效，可以使用三目运算符进行判断 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>isColor?"red":"black"<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>{{list}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 对象写法 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ docker_item: true, 'docker_item-active': index === currentIndex}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  {{list}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 数组写法 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>['docker_item', 'docker_item-active']<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{list}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="style-样式-行内样式" tabindex="-1"><a class="header-anchor" href="#style-样式-行内样式" aria-hidden="true">#</a> style 样式(行内样式)</h3>
<ul>
<li>
<p><code v-pre>:style=&quot;{fontSize: '30px'}&quot;</code>(或者这样写<code v-pre>:style=&quot;{'font-size': '30px'}&quot;</code>)</p>
</li>
<li>
<p>直接绑定到一个样式对象(样式对象的 <code v-pre>key</code> 必须是<code v-pre>css</code>中的属性)通常更好，这会让模板更清晰：</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span><span class="token punctuation">{</span>
		<span class="token literal-property property">styleObj</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token literal-property property">fontSize</span><span class="token operator">:</span><span class="token string">'40px'</span><span class="token punctuation">,</span>
			<span class="token literal-property property">color</span><span class="token operator">:</span><span class="token string">'red'</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>:style=&quot;[a,b]&quot;</code>其中 <code v-pre>a</code>、<code v-pre>b</code> 是样式对象，这样可以将多个样式对象应用到同一个元素上。</li>
</ul>
<h2 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h2>
<h3 id="v-if" tabindex="-1"><a class="header-anchor" href="#v-if" aria-hidden="true">#</a> v-if</h3>
<p>写法：</p>
<p>(1).v-if=&quot;表达式&quot;</p>
<p>(2).v-else-if=&quot;表达式&quot;</p>
<p>(3).v-else</p>
<p>适用于：切换频率较低的场景</p>
<p>特点：不展示的 DOM 元素直接被移除</p>
<p>注意：v-if 可以和:v-else-if、v-else 一起使用，但要求结构不能被“打断”</p>
<h3 id="v-show" tabindex="-1"><a class="header-anchor" href="#v-show" aria-hidden="true">#</a> v-show</h3>
<p>写法：v-show=&quot;表达式&quot;</p>
<p>适用于：切换频率较高的场景</p>
<p>特点：不支持 template，不展示的 DOM 元素未被移除，仅仅是使用样式(display:none)隐藏掉</p>
<h3 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h3>
<p>使用 v-if 的时，元素可能无法获取到，而使用 v-show 一定可以获取到。</p>
<p>如果需要同时控制多个 DOM 元素的隐藏，可以使用 template 占位符，不影响 DOM 结构</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span>
<span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染</h2>
<h3 id="v-for-指令" tabindex="-1"><a class="header-anchor" href="#v-for-指令" aria-hidden="true">#</a> v-for 指令</h3>
<p>1.用于展示列表数据</p>
<p>2.语法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"(item, index) in xxx"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"yyy"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少,指定 xxx 为一个数字）</p>
<div class="custom-container danger">
<p class="custom-container-title">特别注意</p>
<p>如果在 template 上进行列表渲染，可能会报错(v-for 可以在 template 使用但是不能使用 key 属性)：</p>
<p><strong><code v-pre>&lt;template&gt;</code> cannot be keyed. Place the key on real elements instead.</strong></p>
<p>原因：vue 不支持在 template 元素上绑定属性。比如这里想绑定 key 属性就不行</p>
</div>
<h3 id="key-的作用和原理" tabindex="-1"><a class="header-anchor" href="#key-的作用和原理" aria-hidden="true">#</a> key 的作用和原理</h3>
<div class="custom-container warning">
<p class="custom-container-title">面试题</p>
<p>react、vue 中的 key 有什么作用？（key 的内部原理）</p>
</div>
<h4 id="虚拟-dom-中-key-的作用" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-中-key-的作用" aria-hidden="true">#</a> 虚拟 DOM 中 key 的作用</h4>
<p><code v-pre>key</code>是<code v-pre>虚拟DOM</code>对象的标识，当数据发生变化时，<code v-pre>Vue</code>会根据 <code v-pre>新数据</code> 生成 <code v-pre>新的虚拟DOM</code> , 随后<code v-pre>Vue</code>进行 <code v-pre>新虚拟DOM</code> 与 <code v-pre>旧虚拟DOM</code> 的差异比较，比较规则如下：</p>
<h4 id="对比规则" tabindex="-1"><a class="header-anchor" href="#对比规则" aria-hidden="true">#</a> 对比规则</h4>
<ol>
<li><strong>旧虚拟 DOM 中找到了与新虚拟 DOM 相同的 key</strong>：</li>
</ol>
<p>①. 若虚拟 DOM 中内容没变, 直接使用之前的真实 DOM</p>
<p>②. 若虚拟 DOM 中内容变了, 则生成新的真实 DOM，随后替换掉页面中之前的真实 DOM。</p>
<ol start="2">
<li><strong>旧虚拟 DOM 中未找到与新虚拟 DOM 相同的 key</strong>：
创建新的真实 DOM，随后渲染到到页面。</li>
</ol>
<h4 id="用-index-作为-key-可能会引发的问题" tabindex="-1"><a class="header-anchor" href="#用-index-作为-key-可能会引发的问题" aria-hidden="true">#</a> 用 index 作为 key 可能会引发的问题</h4>
<p>①. 若对数据进行：逆序添加、逆序删除等破坏顺序操作:<strong>会产生没有必要的真实 DOM 更新</strong> ==&gt; 界面效果没问题, 但效率低.(<strong>DOM 没办法复用</strong>)</p>
<p>②. 如果结构中还包含输入类的 DOM：<strong>产生错误 DOM 更新</strong> ==&gt; 界面有问题。</p>
<h4 id="开发中如何选择-key" tabindex="-1"><a class="header-anchor" href="#开发中如何选择-key" aria-hidden="true">#</a> 开发中如何选择 key?</h4>
<p>①. 最好使用每条数据的唯一标识作为 key, 比如 id、手机号、身份证号、学号等唯一值。</p>
<p>②. 如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用 index 作为 key 是没有问题的。</p>
<ol start="5">
<li>图示：</li>
</ol>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/遍历列表时key的作用-index为key.png" alt="遍历列表时key的作用-index为key" loading="lazy"></p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/遍历列表时key的作用-id为key.png" alt="遍历列表时key的作用-id为key" loading="lazy"></p>
<h3 id="列表过滤" tabindex="-1"><a class="header-anchor" href="#列表过滤" aria-hidden="true">#</a> 列表过滤</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank" rel="noopener noreferrer">Array.prototype.filter()<ExternalLinkIcon/></a></p>
<h4 id="watch-实现" tabindex="-1"><a class="header-anchor" href="#watch-实现" aria-hidden="true">#</a> watch 实现</h4>
<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="html,result" data-slug-hash="xxYqBmr" data-user="zhangfanhang" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/zhangfanhang/pen/xxYqBmr">
  vue2-列表过滤-computed实现</a> by zhangfanhang (<a href="https://codepen.io/zhangfanhang">@zhangfanhang</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<h4 id="computed-实现" tabindex="-1"><a class="header-anchor" href="#computed-实现" aria-hidden="true">#</a> computed 实现</h4>
 <p class="codepen" data-height="300" data-theme-id="light" data-default-tab="html,result" data-slug-hash="gOvmEQQ" data-user="zhangfanhang" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/zhangfanhang/pen/gOvmEQQ">
  vue2-姓名案例_计算属性实现</a> by zhangfanhang (<a href="https://codepen.io/zhangfanhang">@zhangfanhang</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<h3 id="列表排序" tabindex="-1"><a class="header-anchor" href="#列表排序" aria-hidden="true">#</a> 列表排序</h3>
<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="html,result" data-slug-hash="ExQWMrW" data-user="zhangfanhang" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/zhangfanhang/pen/ExQWMrW">
  vue2-列表排序</a> by zhangfanhang (<a href="https://codepen.io/zhangfanhang">@zhangfanhang</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<h2 id="vue-监测数据变化的原理" tabindex="-1"><a class="header-anchor" href="#vue-监测数据变化的原理" aria-hidden="true">#</a> Vue 监测数据变化的原理</h2>
<h3 id="对于对象" tabindex="-1"><a class="header-anchor" href="#对于对象" aria-hidden="true">#</a> 对于对象</h3>
<p><strong>通过 setter 实现监视</strong>，data 数据一改变，就会引起 vue 重新解析模板。且要在 new Vue 时就传入要监测的数据</p>
<p>(1).对象中后追加的属性，Vue 默认不做响应式处理</p>
<div class="custom-container warning">
<p class="custom-container-title">特别注意</p>
<p>Vue.set() 和 vm.$set() 不能给 vm 或 vm 的根数据对象 添加属性</p>
</div>
<p>(2).如需给后添加的属性做响应式，请使用如下 API：</p>
<p><code v-pre>Vue.set(target,propertyName,value)</code> 或 <code v-pre>this.$set(target,propertyName,value)</code></p>
<p>(3). 移除一个响应式对象属性，请使用如下 API：</p>
<p><code v-pre>Vue.delete(target,propertyName)</code>或 <code v-pre>this.$delete(target,propertyName)</code></p>
<div class="custom-container tip">
<p class="custom-container-title">vue 比我们完善</p>
<p>vue 中可以通过 <a href="http://vm.name" target="_blank" rel="noopener noreferrer">vm.name<ExternalLinkIcon/></a> 直接获取到 name 的值，是因为这里做了<strong>数据代理</strong>；对象的嵌套 vue 可以处理，我们处理不了</p>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 模拟一个简单的数据监测_对象 --></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Frank'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'江苏南京'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>

      <span class="token comment">//创建一个监视的实例对象，用于监视data中属性的变化</span>
      <span class="token keyword">const</span> obs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      <span class="token comment">// console.log(obs)</span>

      <span class="token comment">//准备一个vm实例对象</span>
      <span class="token keyword">let</span> vm <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token comment">// 加工data,然后赋给vm._data</span>
      vm<span class="token punctuation">.</span>_data <span class="token operator">=</span> data <span class="token operator">=</span> obs

      <span class="token keyword">function</span> <span class="token function">Observer</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//汇总对象中所有的属性形成一个数组</span>
        <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
        <span class="token comment">//遍历</span>
        keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">k</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> k<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 关键 数据劫持</span>
            <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
                <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>k<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">被改了，我要去解析模板，生成虚拟DOM.....我要开始忙了</span><span class="token template-punctuation string">`</span></span>
              <span class="token punctuation">)</span>
              obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> val
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对于数组" tabindex="-1"><a class="header-anchor" href="#对于数组" aria-hidden="true">#</a> 对于数组</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// persons是一个数组</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>persons<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span> <span class="token comment">// 通过数组下标修改数组的项，vue无法监测到。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过包裹数组更新元素的方法实现，本质就是做了两件事：</p>
<p>(1).调用原生对应的方法对数组进行更新。</p>
<p>(2).重新解析模板，进而更新页面。</p>
<p>在 Vue 修改数组中的某个元素一定要用如下方法：</p>
<p>使用这些 API:<code v-pre>push()</code>、<code v-pre>pop()</code>、<code v-pre>shift()</code>、<code v-pre>unshift()</code>、<code v-pre>splice()</code>、<code v-pre>sort()</code>、<code v-pre>reverse()</code>=&gt;均是变更方法</p>
<p>非变更方法，例如 <code v-pre>filter()</code>、<code v-pre>concat()</code> 和 <code v-pre>slice()</code>。它们不会变更原始数组，而总是返回一个新数组。<strong>当使用非变更方法时，可以用新数组替换旧数组</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 左边旧数组</span>
 items <span class="token operator">=</span>  items<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span>  <span class="token operator">...</span><span class="token operator">...</span> <span class="token comment">// 返回一个新数组</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2). 新增一个响应式数组元素，请使用如下 API：</p>
<p><code v-pre>Vue.set(target,index,value)</code> 或 <code v-pre>this.$set(target,index,value)</code></p>
<p>(3). 移除一个响应式数组元素，请使用如下 API：</p>
<p><code v-pre>Vue.delete(target,index)</code>或 <code v-pre>this.$delete(target,index)</code></p>
<h2 id="数据代理" tabindex="-1"><a class="header-anchor" href="#数据代理" aria-hidden="true">#</a> 数据代理</h2>
<h3 id="object-defineproperty" tabindex="-1"><a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a> Object.defineProperty</h3>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" target="_blank" rel="noopener noreferrer">更多细节:Object.defineProperty()<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'男'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// value:18,</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//控制属性是否可以枚举(遍历)，默认值是false</span>
  <span class="token comment">// writable:true, //控制属性是否可以被修改，默认值是false</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//当且仅当该属性的 configurable 键值为 true 时,该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除，默认值是false</span>

  <span class="token comment">//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'有人读取age属性了'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> number
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值</span>
  <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'有人修改了age属性，且值是'</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    number <span class="token operator">=</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="何为数据代理" tabindex="-1"><a class="header-anchor" href="#何为数据代理" aria-hidden="true">#</a> 何为数据代理</h3>
<p>通过一个对象代理对另一个对象中属性的操作（读/写）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span>

Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> obj<span class="token punctuation">.</span>x
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    obj<span class="token punctuation">.</span>x <span class="token operator">=</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-中的数据代理" tabindex="-1"><a class="header-anchor" href="#vue-中的数据代理" aria-hidden="true">#</a> Vue 中的数据代理</h3>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/数据代理图示.jpg" alt="数据代理图示" loading="lazy"></p>
<ol>
<li>
<p><code v-pre>Vue中的数据代理</code>：通过 vm 对象来代理 data 对象中属性的操作（读/写）</p>
</li>
<li>
<p><code v-pre>Vue中数据代理的好处</code>：更加方便的操作 data 中的数据</p>
</li>
<li>
<p><code v-pre>基本原理</code>：通过 Object.defineProperty()把 data 对象中所有属性添加到 vm 上。为每一个添加到 vm 上的属性，都指定一个 getter/setter。在 getter/setter 内部去操作（读/写）data 中对应的属性。</p>
</li>
</ol>
<h2 id="收集表单数据" tabindex="-1"><a class="header-anchor" href="#收集表单数据" aria-hidden="true">#</a> 收集表单数据</h2>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>现在不会使用 form 中的 action 提交数据，更多的是使用 ajax</p>
</div>
<p>若：input type=&quot;text&quot;，则 v-model 收集的是 value 值，<strong>用户输入的就是 value 值</strong>。</p>
<p>若：input type=&quot;radio&quot;，（单选）则 v-model 收集的是 value 值，<strong>且要给标签配置 value 值</strong>。</p>
<p>若：input type=&quot;checkbox&quot;(多选)</p>
<ol>
<li>
<p>单个复选框，绑定到布尔值</p>
</li>
<li>
<p>多个复选框，绑定到同一个数组( value 组成的数组)</p>
</li>
</ol>
<p>若 input type=&quot;select&quot;：绑定到字符串(option 的 value 值)</p>
 <p class="codepen" data-height="300" data-theme-id="light" data-default-tab="html,result" data-slug-hash="qBxrGgO" data-user="zhangfanhang" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/zhangfanhang/pen/qBxrGgO">
  vue2-数据监视总结</a> by zhangfanhang (<a href="https://codepen.io/zhangfanhang">@zhangfanhang</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<div class="custom-container tip">
<p class="custom-container-title">v-model 的修饰符</p>
<p>lazy：失去焦点再收集数据</p>
<p>number：输入字符串转为有效的数字,.number 底层调用了 parseFloat(),即无法输入 0 开头的数字</p>
<p>trim：输入首尾空格过滤</p>
</div>
<h2 id="内置指令" tabindex="-1"><a class="header-anchor" href="#内置指令" aria-hidden="true">#</a> 内置指令</h2>
<p>回顾,之前学过的指令：</p>
<ul>
<li>v-bind : 单向绑定解析表达式, 可简写为 :xxx</li>
<li>v-model : 双向数据绑定</li>
<li>v-for : 遍历数组/对象/字符串</li>
<li>v-on : 绑定事件监听, 可简写为@</li>
<li>v-if : 条件渲染（动态控制节点是否存存在）</li>
<li>v-else : 条件渲染（动态控制节点是否存存在）</li>
<li>v-show : 条件渲染 (动态控制节点是否展示)</li>
</ul>
<h3 id="v-text" tabindex="-1"><a class="header-anchor" href="#v-text" aria-hidden="true">#</a> v-text</h3>
<ol>
<li>作用：向其所在的节点中渲染文本内容</li>
<li>与插值语法的区别：v-text 会替换掉节点中的内容，插值语法则不会</li>
</ol>
<h3 id="v-html" tabindex="-1"><a class="header-anchor" href="#v-html" aria-hidden="true">#</a> v-html</h3>
<div class="custom-container danger">
<p class="custom-container-title">严重注意:v-html 有安全性问题</p>
<p>(1).在网站上动态渲染任意 HTML 是非常危险的，容易导致<a href="https://juejin.cn/post/6844903685122703367" target="_blank" rel="noopener noreferrer">XSS 攻击<ExternalLinkIcon/></a>。</p>
<p>XSS，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如 Cookie、SessionID 等，进而危害数据安全。</p>
<p>(2).一定要在可信的内容上使用 v-html，<strong>永远不要用在用户提交的内容上</strong>！</p>
</div>
<ol>
<li>
<p>作用：向指定节点中渲染包含 html 结构的内容</p>
</li>
<li>
<p>与插值语法的区别：</p>
</li>
</ol>
<p>(1).v-html 会替换掉节点中所有的内容，插值语法则不会</p>
<p>(2).v-html 可以识别 html 结构</p>
<h3 id="v-cloak" tabindex="-1"><a class="header-anchor" href="#v-cloak" aria-hidden="true">#</a> v-cloak</h3>
<p>v-cloak 指令没有值 1.本质是一个特殊属性，Vue 实例创建完毕并接管容器后，会删掉 v-cloak 属性。</p>
<p>2.使用 css<code v-pre>属性选择器</code>([v-clock]{display:none;})配合 v-cloak 可以解决网速慢时页面展示的问题。</p>
<h3 id="v-once" tabindex="-1"><a class="header-anchor" href="#v-once" aria-hidden="true">#</a> v-once</h3>
<p>1.<code v-pre>v-once</code>所在节点在初次动态渲染后，就视为静态内容了。</p>
<p>2.以后数据的改变不会引起<code v-pre>v-once</code>所在结构的更新，<strong>可以用于优化性能</strong>。</p>
<h3 id="v-pre" tabindex="-1"><a class="header-anchor" href="#v-pre" aria-hidden="true">#</a> v-pre</h3>
<p>v-pre 指令是没有值的</p>
<p>1.跳过其所在节点的编译过程。</p>
<p>2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，<strong>会加快编译</strong>。</p>
<h2 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令" aria-hidden="true">#</a> 自定义指令</h2>
<p>// TODO 自定义指令</p>
<h3 id="定义局部指令" tabindex="-1"><a class="header-anchor" href="#定义局部指令" aria-hidden="true">#</a> 定义局部指令</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 对象式</span>
 <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	 <span class="token literal-property property">directives</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">指令名</span><span class="token operator">:</span>配置对象<span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//  函数式</span>
  <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
 directives<span class="token punctuation">{</span><span class="token literal-property property">指令名</span><span class="token operator">:</span>回调函数<span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义全局指令" tabindex="-1"><a class="header-anchor" href="#定义全局指令" aria-hidden="true">#</a> 定义全局指令</h3>
<p><code v-pre>Vue.directive(指令名,配置对象)</code> 或 <code v-pre>Vue.directive(指令名,回调函数)</code></p>
<p>配置对象中常用的 3 个回调：</p>
<p>(1).<code v-pre>bind</code>：指令与元素成功绑定时调用。</p>
<p>(2).<code v-pre>inserted</code>：指令所在元素被插入页面时调用。</p>
<p>(3).<code v-pre>update</code>：指令所在模板结构被重新解析时调用。</p>
<h3 id="备注-1" tabindex="-1"><a class="header-anchor" href="#备注-1" aria-hidden="true">#</a> 备注</h3>
<p>1.指令定义时不加 v-，但使用时要加 v-；</p>
<p>2.指令名如果是多个单词，要使用 kebab-case(短横线命名)命名方式，不要用 camelCase(驼峰)命名。</p>
<details class="custom-container details"><summary>demo</summary>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>自定义指令<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 准备好一个容器--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>当前的n值是：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- &lt;h2>放大10倍后的n值是：&lt;span v-big-number="n">&lt;/span> &lt;/h2> --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>放大10倍后的n值是：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-big</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我n+1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">v-fbind:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token comment">//定义全局指令</span>
    <span class="token comment">/* Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		}) */</span>

    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#root'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'尚硅谷'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">n</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">directives</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//big函数何时会被调用？1.指令与元素成功绑定时（一上来）。2.指令所在的模板被重新解析时。</span>
        <span class="token comment">/* 'big-number'(element,binding){
					// console.log('big')
					element.innerText = binding.value * 10
				}, */</span>
        <span class="token function">big</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'big'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">//注意此处的this是window</span>
          <span class="token comment">// console.log('big')</span>
          element<span class="token punctuation">.</span>innerText <span class="token operator">=</span> binding<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">10</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">fbind</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">//指令与元素成功绑定时（一上来）</span>
          <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            element<span class="token punctuation">.</span>value <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">//指令所在元素被插入页面时</span>
          <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            element<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token comment">//指令所在的模板被重新解析时</span>
          <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            element<span class="token punctuation">.</span>value <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/生命周期.png" alt="生命周期" loading="lazy"></p>
<ol>
<li>是什么：<code v-pre>Vue</code> 在关键时刻帮我们调用的一些特殊名称的函数</li>
<li>生命周期函数中的 this 指向是<code v-pre>vm</code> 或 组件实例对象</li>
</ol>
<h3 id="常用的生命周期钩子" tabindex="-1"><a class="header-anchor" href="#常用的生命周期钩子" aria-hidden="true">#</a> 常用的生命周期钩子</h3>
<p>1.<strong>mounted</strong>: 发送<code v-pre>ajax</code>请求、启动定时器、绑定自定义事件、订阅消息等<strong>初始化操作</strong></p>
<p>2.<strong>beforeDestroy</strong>: 清除定时器、解绑自定义事件、取消订阅消息等<strong>收尾工作</strong></p>
<h3 id="关于销毁-vue-实例" tabindex="-1"><a class="header-anchor" href="#关于销毁-vue-实例" aria-hidden="true">#</a> 关于销毁 Vue 实例</h3>
<p>(1)销毁后借助<code v-pre>Vue开发者工具</code>看不到任何信息</p>
<p>(2)销毁后自定义事件会<strong>失效</strong>，但原生<code v-pre>DOM</code>事件依然<strong>有效</strong></p>
<p>(3)一般不会在<code v-pre>beforeDestroy</code><strong>操作数据</strong>，因为即便操作数据，也<strong>不会</strong>再触发更新流程了</p>
<h3 id="关于-beforecreate-和-created" tabindex="-1"><a class="header-anchor" href="#关于-beforecreate-和-created" aria-hidden="true">#</a> 关于 beforeCreate 和 created</h3>
<p>指的不是<code v-pre>vm</code>的创建之前，而是<code v-pre>数据监测</code>，<code v-pre>数据代理</code>初始化之前。created 指的是它两初始化之后。</p>
<p>因为此时<code v-pre>beforeCreate</code>生命周期钩子中<code v-pre>this</code>指向<code v-pre>vm</code>,如果<code v-pre>beforeCreate</code>指的是<code v-pre>vm</code>创建之前，<code v-pre>vm</code>还没有被创建，它怎么指向<code v-pre>vm</code></p>
</div></template>


