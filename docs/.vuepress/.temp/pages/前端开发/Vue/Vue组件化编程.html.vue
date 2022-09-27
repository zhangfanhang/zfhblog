<template><div><div class="custom-container warning">
<p class="custom-container-title">传统方式的缺点</p>
<p>传统方式编写应用，依赖关系混乱，代码复用率不高</p>
</div>
<h2 id="几个概念" tabindex="-1"><a class="header-anchor" href="#几个概念" aria-hidden="true">#</a> 几个概念</h2>
<h3 id="模块" tabindex="-1"><a class="header-anchor" href="#模块" aria-hidden="true">#</a> 模块</h3>
<p>向外提供特定功能的 js 程序，一般就是一个 js 文件</p>
<p>为什么？js 文件很多很复杂。</p>
<p>作用：可以复用 js，简化 js 的编写，提高 js 的运行效率</p>
<h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3>
<p>实现应用中<strong>局部</strong>功能的代码（(html,css,js)和资源(mp3,mp4,字体....)的<strong>集合</strong></p>
<p>为什么？一个界面的功能很复杂</p>
<p>作用：复用编码，简化项目编码，提高运行效率</p>
<h3 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h3>
<p>当应用中的 js 都以模块来编写的，那这个应用就是一个模块化的应用。</p>
<h3 id="组件化" tabindex="-1"><a class="header-anchor" href="#组件化" aria-hidden="true">#</a> 组件化</h3>
<p>当应用中的功能都是多组件的方式来编写的，那这个应用就是一个组件化的应用。</p>
<h2 id="组件-1" tabindex="-1"><a class="header-anchor" href="#组件-1" aria-hidden="true">#</a> 组件</h2>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>非单文件组件和单文件组件的区别：“非单文件组件一个文件中包含有 n 个组件，单文件组件一个文件只包含一个组件“</p>
</div>
<p>Vue 中使用组件的步骤：</p>
<ol>
<li>
<p>定义组件(创建组件)</p>
</li>
<li>
<p>注册组件</p>
</li>
<li>
<p>使用组件(写组件标签)</p>
</li>
</ol>
<p>如何定义一个组件？</p>
<p>使用 <code v-pre>Vue.extend(options)</code>创建，其中 <code v-pre>options</code> 和 <code v-pre>new Vue(options)</code>时传入的那个 <code v-pre>options </code>几乎一样，但也有点区别；</p>
<p>区别如下：</p>
<p>1.<code v-pre>el </code>不要写，为什么？ ——— 最终所有的组件都要经过一个 <code v-pre>vm</code> 的管理，由 <code v-pre>vm</code> 中的 <code v-pre>el</code> 决定服务哪个容器</p>
<p>2.<code v-pre>data</code> 必须写成函数，为什么？ ———— <strong>避免组件被复用时，数据存在引用关系</strong>。</p>
<p>备注：使用 <code v-pre>template</code> 可以配置组件结构</p>
<p>如何注册组件？</p>
<ol>
<li>
<p>局部注册：靠 <code v-pre>new Vue</code> 的时候传入 <code v-pre>components</code> 选项</p>
</li>
<li>
<p>全局注册：靠 <code v-pre>Vue.component('组件名',组件)</code></p>
</li>
</ol>
<p>编写组件标签：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>school</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>school</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一个例子：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>非单文件组件基本使用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      {{msg}}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hello</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hello</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      {{msg2}}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hello</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hello</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token keyword">const</span> hello <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>hello!
            &lt;button @click='alertHello'>点我点我&lt;/button>
            &lt;/div>
        </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token function">alertHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token comment">// 全局注册</span>
      Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">,</span> hello<span class="token punctuation">)</span>
      <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#root'</span><span class="token punctuation">,</span>
        <span class="token comment">//  components:{</span>
        <span class="token comment">//     //  局部注册</span>
        <span class="token comment">//      hello:hello</span>
        <span class="token comment">//  },</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'frank你好！'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#root2'</span><span class="token punctuation">,</span>
        <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">msg2</span><span class="token operator">:</span> <span class="token string">'alex你好！'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件的几个注意点" tabindex="-1"><a class="header-anchor" href="#组件的几个注意点" aria-hidden="true">#</a> 组件的几个注意点</h3>
<p>1.关于组件名:</p>
<p>第一种写法(<code v-pre>kebab-case </code>命名)：<code v-pre>my-school</code></p>
<p>第二种写法(<code v-pre>CamelCase</code> 命名)：<code v-pre>MySchool</code>,在模板中一样可以使用<code v-pre>my-school</code>这种写法</p>
<p>备注：</p>
<p>(1).组件名尽可能回避 <code v-pre>HTML</code> 中已有的元素名称，例如：<code v-pre>h2</code>、<code v-pre>H2</code> 都不行。</p>
<p>(2).可以使用 <code v-pre>name</code> 配置项指定组件在开发者工具中呈现的名字。</p>
<p>2.关于组件标签:</p>
<p>第一种写法：<code v-pre>&lt;school&gt;&lt;/school&gt;</code></p>
<p>第二种写法：<code v-pre>&lt;school/&gt;</code></p>
<p>3.一个简写方式：</p>
<p><code v-pre>const school = Vue.extend(options)</code> 可简写为：<code v-pre>const school = options</code></p>
<h3 id="组件的嵌套" tabindex="-1"><a class="header-anchor" href="#组件的嵌套" aria-hidden="true">#</a> 组件的嵌套</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>组件的嵌套<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 引入Vue --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 准备好一个容器--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">//阻止 vue 在启动时生成生产提示。</span>

    <span class="token comment">//定义student组件</span>
    <span class="token keyword">const</span> student <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'student'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
				&lt;div>
					&lt;h2>学生姓名：{{name}}&lt;/h2>	
					&lt;h2>学生年龄：{{age}}&lt;/h2>	
				&lt;/div>
			</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//定义school组件</span>
    <span class="token keyword">const</span> school <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'school'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
				&lt;div>
					&lt;h2>学校名称：{{name}}&lt;/h2>	
					&lt;h2>学校地址：{{address}}&lt;/h2>	
					&lt;student>&lt;/student>
				&lt;/div>
			</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'SNUT'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">'HAN ZHONG'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">//注册组件（局部）</span>
      <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        student<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//定义hello组件</span>
    <span class="token keyword">const</span> hello <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;h1>{{msg}}&lt;/h1></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'欢迎来到SNUT学习！'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//定义app组件</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
				&lt;div>	
					&lt;hello>&lt;/hello>
					&lt;school>&lt;/school>
				&lt;/div>
			</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        school<span class="token punctuation">,</span>
        hello<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">//创建vm</span>
    <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;app>&lt;/app>'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#root'</span><span class="token punctuation">,</span>
      <span class="token comment">//注册组件（局部）</span>
      <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> app <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vuecomponent-构造函数" tabindex="-1"><a class="header-anchor" href="#vuecomponent-构造函数" aria-hidden="true">#</a> VueComponent 构造函数</h3>
<p>1.<code v-pre>school</code> 组件本质是一个名为 <code v-pre>VueComponent</code> 的构造函数，且不是程序员定义的，是 <code v-pre>Vue.extend</code> 生成的</p>
<p>2.我们只需要写<code v-pre>&lt;school/&gt;</code>或<code v-pre>&lt;school&gt;&lt;/school&gt;</code>，Vue 解析时会帮我们创建 <code v-pre>school</code> 组件的实例对象，即 <code v-pre>Vue</code> 帮我们执行的：<code v-pre>new VueComponent(options)</code>。</p>
<p>3.<strong>特别注意</strong>：每次调用 <code v-pre>Vue.extend</code>，返回的都是一个全新的 <code v-pre>VueComponent</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Vue.extend源码</span>
Vue<span class="token punctuation">.</span><span class="token function-variable function">extend</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">extendOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ......</span>
  <span class="token keyword">var</span> <span class="token function-variable function">Sub</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">VueComponent</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// ......</span>
  <span class="token keyword">return</span> Sub
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.关于<code v-pre> this</code> 指向：</p>
<p>(1).组件配置中：</p>
<p><code v-pre>data</code> 函数、<code v-pre>methods</code> 中的函数、<code v-pre>watch</code> 中的函数、<code v-pre>computed</code> 中的函数 它们的 <code v-pre>this</code> 均是<code v-pre>VueComponent </code>实例对象</p>
<p>(2).<code v-pre>new Vue(options)</code>配置中：</p>
<p><code v-pre>data </code>函数、<code v-pre>methods </code>中的函数、<code v-pre>watch </code>中的函数、<code v-pre>computed</code> 中的函数 它们的 <code v-pre>this</code> 均是<code v-pre>Vue </code>实例对象</p>
<p>5.<code v-pre>VueComponent </code>的实例对象，以后简称 <code v-pre>vc</code>（也可称之为：组件实例对象）。<code v-pre>Vue</code> 的实例对象，简称 <code v-pre>vm</code>。</p>
<p><strong>一个重要的内置关系</strong></p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/重要的内置关系 .png" alt="重要的内置关系 " loading="lazy"></p>
<p>1.一个重要的内置关系：<code v-pre>VueComponent.prototype.__proto__=== Vue.prototype</code></p>
<p>2.为什么要有这个关系：让组件实例对象（vc）可以访问到 Vue 原型上的属性、方法。</p>
<h2 id="vue-脚手架" tabindex="-1"><a class="header-anchor" href="#vue-脚手架" aria-hidden="true">#</a> vue 脚手架</h2>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>最新版本 4.x</p>
</div>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<ol>
<li>
<p>全局安装 vue 脚手架:<code v-pre>npm i -g @vue/cli</code></p>
</li>
<li>
<p>创建项目:<code v-pre>vue create xxx</code></p>
</li>
</ol>
<h3 id="脚手架文件结构" tabindex="-1"><a class="header-anchor" href="#脚手架文件结构" aria-hidden="true">#</a> 脚手架文件结构</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>	├── node_modules
	├── public
	│   ├── favicon.ico: 页签图标
	│   └── index.html: 主页面
	├── src
	│   ├── assets: 存放静态资源
	│   │   └── logo.png
	│   │── component: 存放组件
	│   │   └── HelloWorld.vue
	│   │── App.vue: 汇总所有组件
	│   │── main.js: 入口文件
	├── .gitignore: git版本管制忽略的配置
	├── babel.config.js: babel的配置文件
	├── package.json: 应用包配置文件
	├── README.md: 应用描述文件
	├── package-lock.json：包版本控制文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="render-函数" tabindex="-1"><a class="header-anchor" href="#render-函数" aria-hidden="true">#</a> render 函数</h2>
<p><strong>vue 工程中的<code v-pre>main.js</code>中的<code v-pre>render</code>函数</strong></p>
<ol>
<li>vue.js 与 vue.runtime.xxx.js 的区别：</li>
</ol>
<p>(1).vue.js 是完整版的 Vue，包含：核心功能+模板解析器。</p>
<p>(2).vue.runtime.xxx.js 是运行版的 Vue，只包含：核心功能；没有<code v-pre>模板解析器</code>。</p>
<ol start="2">
<li>因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要使用<code v-pre>render函数</code>接收到的<code v-pre>createElement</code>函数去指定具体内容。</li>
</ol>
<h2 id="vue-config-js-配置文件" tabindex="-1"><a class="header-anchor" href="#vue-config-js-配置文件" aria-hidden="true">#</a> vue.config.js 配置文件</h2>
<ol>
<li>使用<code v-pre>vue inspect &gt; output.js</code>可以查看到 Vue 脚手架的默认配置。</li>
<li>使用 vue.config.js 可以对脚手架进行个性化定制，详情见：<a href="https://cli.vuejs.org/zh" target="_blank" rel="noopener noreferrer">https://cli.vuejs.org/zh<ExternalLinkIcon/></a></li>
</ol>
<h2 id="ref-属性" tabindex="-1"><a class="header-anchor" href="#ref-属性" aria-hidden="true">#</a> ref 属性</h2>
<ol>
<li>被用来给元素或子组件注册引用信息（id 的替代者）</li>
<li>应用在 html 标签上获取的是真实 DOM 元素，应用在组件标签上是组件实例对象（vc）</li>
<li>使用方式：
<ol>
<li>打标识：<code v-pre>&lt;h1 ref=&quot;xxx&quot;&gt;.....&lt;/h1&gt;</code> 或 <code v-pre>&lt;School ref=&quot;xxx&quot;&gt;&lt;/School&gt;</code></li>
<li>获取：<code v-pre>this.$refs.xxx</code></li>
</ol>
</li>
</ol>
<h2 id="props-配置项" tabindex="-1"><a class="header-anchor" href="#props-配置项" aria-hidden="true">#</a> props 配置项</h2>
<ol>
<li>
<p>功能：让组件接收外部传过来的数据</p>
</li>
<li>
<p>传递数据：<code v-pre>&lt;Demo name=&quot;xxx&quot;/&gt;</code></p>
</li>
<li>
<p>接收数据：</p>
<pre><code>1. 第一种方式（只接收）：```props:['name'] ```

2. 第二种方式（限制类型）：```props:{name:String}```

3. 第三种方式（限制类型、限制必要性、指定默认值）：

    ```js
    props:{
    	name:{
    	type:String, //类型
    	required:true, //必要性
    	default:'老王' //默认值
    	}
    }
    ```
</code></pre>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制 props 的内容到 data 中一份，然后去修改 data 中的数据。</p>
</div>
</li>
</ol>
<h2 id="mixin-混入" tabindex="-1"><a class="header-anchor" href="#mixin-混入" aria-hidden="true">#</a> mixin 混入</h2>
<ol>
<li>
<p>功能：可以把多个组件共用的配置提取成一个混入对象</p>
</li>
<li>
<p>使用方式：</p>
<p>第一步在 js 文件中定义混合：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
    <span class="token operator">...</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步使用混入：</p>
<p>在 mian.js 中全局混入：<code v-pre>Vue.mixin(xxx)</code>
​ 在组件中局部混入：<code v-pre>mixins:[xxx]</code></p>
</li>
</ol>
<h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2>
<ol>
<li>
<p>功能：用于增强 Vue</p>
</li>
<li>
<p>本质：包含 install 方法的一个对象，install 的第一个参数是 Vue，第二个以后的参数是插件使用者传递的数据。</p>
</li>
<li>
<p>定义插件：
xxx.js</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
		<span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 添加全局过滤器</span>
        Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">)</span>

        <span class="token comment">// 2. 添加全局指令</span>
        Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">)</span>

        <span class="token comment">// 3. 配置全局混入(合)</span>
        Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">)</span>

        <span class="token comment">// 4. 添加实例方法</span>
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$myMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$myProperty <span class="token operator">=</span> xxxx
    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>使用插件：<code v-pre>Vue.use(xxx)</code></li>
</ol>
<h2 id="scoped-样式" tabindex="-1"><a class="header-anchor" href="#scoped-样式" aria-hidden="true">#</a> scoped 样式</h2>
<ol>
<li>作用：<strong>让样式在局部生效，防止冲突</strong>。</li>
<li>写法：<code v-pre>&lt;style scoped&gt;</code></li>
</ol>
<h2 id="总结-todolist-案例" tabindex="-1"><a class="header-anchor" href="#总结-todolist-案例" aria-hidden="true">#</a> 总结 TodoList 案例</h2>
<ol>
<li>组件化编码流程：</li>
</ol>
<p>(1).拆分静态组件：组件要按照功能点拆分，命名不要与 html 元素冲突。</p>
<p>(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：</p>
<pre><code>1).一个组件在用：放在组件自身即可。

​2). 一些组件在用：放在他们共同的父组件上（这种行为被称为状态提升）
</code></pre>
<p>(3).实现交互：从绑定事件开始。</p>
<ol start="2">
<li>
<p>props 适用于：</p>
<p>(1).父组件 ==&gt; 子组件 通信</p>
<p>(2).子组件 ==&gt; 父组件 通信（要求父先给子一个函数）</p>
</li>
<li>
<p>使用 v-model 时要切记：v-model 绑定的值不能是 props 传过来的值，因为 props 是不可以修改的！</p>
</li>
<li>
<p>props 传过来的若是对象类型的值，修改对象中的属性时 Vue 不会报错，但不推荐这样做。</p>
</li>
<li>
<p>oninput 事件类似于 onchange 事件。不同之处在于 oninput 事件在元素值发生变化是立即触发， onchange 在元素失去焦点时触发。另外一点不同是 onchange 事件也可以作用于 <code v-pre>&lt;keygen&gt;</code> 和 <code v-pre>&lt;select&gt;</code> 元素。</p>
</li>
</ol>
<ul>
<li><a href="https://www.runoob.com/jsref/event-oninput.html" target="_blank" rel="noopener noreferrer">oninput 事件<ExternalLinkIcon/></a></li>
<li><a href="https://www.runoob.com/jsref/event-onchange.html" target="_blank" rel="noopener noreferrer">onchange 事件<ExternalLinkIcon/></a></li>
</ul>
<h2 id="webstorage" tabindex="-1"><a class="header-anchor" href="#webstorage" aria-hidden="true">#</a> webStorage</h2>
<p>// TODO 删除合并</p>
<ol>
<li>
<p>存储内容大小一般支持 5MB 左右（不同浏览器可能还不一样）</p>
</li>
<li>
<p>浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。</p>
</li>
<li>
<p>相关 API：</p>
<ol>
<li>
<p><code v-pre>xxxxxStorage.setItem('key', 'value');</code>
该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。</p>
</li>
<li>
<p><code v-pre>xxxxxStorage.getItem('person');</code></p>
<p>该方法接受一个键名作为参数，返回键名对应的值。</p>
</li>
<li>
<p><code v-pre>xxxxxStorage.removeItem('key');</code></p>
<p>该方法接受一个键名作为参数，并把该键名从存储中删除。</p>
</li>
<li>
<p><code v-pre>xxxxxStorage.clear()</code></p>
<p>该方法会清空存储中的所有数据。</p>
</li>
</ol>
</li>
<li>
<p>备注：</p>
<ol>
<li><code v-pre>SessionStorage</code> 存储的内容会随着浏览器窗口关闭而消失。</li>
<li><code v-pre>LocalStorage </code>存储的内容，需要手动清除才会消失。</li>
<li><code v-pre>xxxxxStorage.getItem(xxx)</code>如果 <code v-pre>xxx</code> 对应的 <code v-pre>value</code> 获取不到，那么 <code v-pre>getItem </code>的返回值是 <code v-pre>null</code>。</li>
<li><code v-pre>JSON.parse(null)</code>的结果依然是 <code v-pre>null</code>。</li>
</ol>
</li>
</ol>
<h2 id="组件的自定义事件" tabindex="-1"><a class="header-anchor" href="#组件的自定义事件" aria-hidden="true">#</a> 组件的自定义事件</h2>
<ol>
<li>
<p>一种组件间通信的方式，适用于：<strong style="color:red">子组件 ===&gt; 父组件</strong></p>
</li>
<li>
<p>使用场景：A 是父组件，B 是子组件，B 想给 A 传数据，那么就要在 A 中给 B 绑定自定义事件（<span style="color:red">事件的回调在 A 中</span>）。</p>
</li>
<li>
<p>绑定自定义事件：</p>
<ol>
<li>
<p>第一种方式，在父组件中：<code v-pre>&lt;Demo @getData=&quot;getData&quot;/&gt;</code> 或 <code v-pre>&lt;Demo v-on:getData=&quot;getData&quot;/&gt;</code></p>
</li>
<li>
<p>第二种方式，在父组件中：</p>
</li>
</ol>
</li>
</ol>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
// .....
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>child<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'getData'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>getData<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>触发自定义事件：<code v-pre>this.$emit('getData',数据)</code></p>
</li>
<li>
<p>若想让自定义事件只能触发一次，可以使用<code v-pre>once</code>修饰符，或<code v-pre>$once</code>方法。</p>
</li>
<li>
<p>解绑自定义事件<code v-pre>this.$off('getData')</code>;解绑多个自定义事件<code v-pre>this.$off(['getData','demo'])</code>;解绑所有的自定义事件：<code v-pre>this.$off()</code></p>
</li>
<li>
<p>组件上也可以绑定原生 <code v-pre>DOM </code>事件，需要使用<code v-pre>native</code>修饰符</p>
</li>
<li>
<p>注意：通过<code v-pre>this.$refs.xxx.$on('getData',回调)</code>绑定自定义事件时，回调<span style="color:red">要么配置在 <code v-pre>methods</code> 中</span>，<span style="color:red">要么用箭头函数</span>，否则 <code v-pre>this </code>指向会出问题(该回调中的 <code v-pre>this</code> 指向触发自定义事件的组件实例对象)</p>
</li>
</ol>
<h2 id="全局事件总线-globaleventbus" tabindex="-1"><a class="header-anchor" href="#全局事件总线-globaleventbus" aria-hidden="true">#</a> 全局事件总线（GlobalEventBus）</h2>
<div class="custom-container tip">
<p class="custom-container-title">实现全局事件总线的前提</p>
<ul>
<li>所有组件都可以看到</li>
<li>可以调用<code v-pre>$on</code>,<code v-pre>$off</code>,<code v-pre>$emit</code></li>
</ul>
</div>
<ol>
<li>
<p>一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。</p>
</li>
<li>
<p>安装全局事件总线：</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ......</span>
  <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">this</span> <span class="token comment">//安装全局事件总线，$bus 就是当前应用的 vm</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ......</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>使用事件总线：</p>
<ol>
<li>
<p>接收数据：A 组件想接收数据，则在 A 组件中给$bus 绑定自定义事件，事件的<span style="color:red">回调留在 A 组件自身。</span></p>
</li>
<li>
<p>提供数据：<code v-pre>this.$bus.$emit('xxxx',数据)</code></p>
</li>
<li>
<p>最好在<code v-pre> beforeDestroy</code> 钩子中，用 <code v-pre>$off</code> 去解绑<span style="color:red">当前组件所用到的</span>事件。</p>
</li>
</ol>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ......</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 给bus绑定自定义事件</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'getData'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>getData<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">'getData'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消息订阅与发布-pubsub" tabindex="-1"><a class="header-anchor" href="#消息订阅与发布-pubsub" aria-hidden="true">#</a> 消息订阅与发布（pubsub）</h2>
<div class="custom-container danger">
<p class="custom-container-title">警告</p>
<p>经本人测试 订阅消息<code v-pre>数据参数</code>只能有<strong>一个</strong> 如果存在多个参数 请将参数包装成<code v-pre>对象</code>传递</p>
<p>最好在 <code v-pre>beforeDestroy</code> 钩子中，用<code v-pre>pubsub.unsubscribe(this.pid)</code>去<span style="color:red">取消订阅。</span></p>
</div>
<ol>
<li>
<p>一种组件间通信的方式，适用于<span style="color:red">任意组件间通信</span>。</p>
</li>
<li>
<p>使用步骤：</p>
<ol>
<li>
<p>安装 pubsub：<code v-pre>npm i pubsub-js</code></p>
</li>
<li>
<p>引入: <code v-pre>import pubsub from 'pubsub-js'</code></p>
</li>
<li>
<p>接收数据（订阅消息）：A 组件想接收数据，则在 A 组件中订阅消息，订阅的<span style="color:red">回调留在 A 组件自身。</span></p>
</li>
<li>
<p>提供数据(发布消息)：<code v-pre>pubsub.publish('消息名',数据)</code></p>
</li>
</ol>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 接受数据</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">sub</span><span class="token punctuation">(</span><span class="token parameter">msgName<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果不想接收msgName(消息的名字),可以使用"_"占位</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msgName<span class="token punctuation">,</span> data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>pid <span class="token operator">=</span> pubsub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">'getData'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sub<span class="token punctuation">)</span> <span class="token comment">//订阅消息</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//   取消订阅</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    pubsub<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>pid<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 发布数据</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">pub</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      pubsub<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">'getData'</span><span class="token punctuation">,</span> <span class="token string">'数据'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h2>
<ol>
<li>语法：<code v-pre>this.$nextTick(回调函数)</code></li>
<li>作用：在下一次 DOM 更新结束后执行其指定的回调。</li>
<li>什么时候用：当改变数据后，要基于更新后的新 DOM 进行某些操作时，要在 nextTick 所指定的回调函数中执行。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 修改数据</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">'Hello'</span>
<span class="token comment">// DOM 还没有更新</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// DOM 更新了</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-封装的过度与动画" tabindex="-1"><a class="header-anchor" href="#vue-封装的过度与动画" aria-hidden="true">#</a> Vue 封装的过度与动画</h2>
<p><a href="https://cn.vuejs.org/v2/guide/transitions.html" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
<ol>
<li>
<p>作用：在插入、更新或移除 DOM 元素时，在合适的时候给元素添加样式类名。</p>
</li>
<li>
<p>写法：</p>
<ol>
<li>
<p>准备好样式(class)：</p>
<ul>
<li>元素进入的样式：
<ol>
<li>v-enter：进入的起点</li>
<li>v-enter-active：进入过程中</li>
<li>v-enter-to：进入的终点</li>
</ol>
</li>
<li>元素离开的样式：
<ol>
<li>v-leave：离开的起点</li>
<li>v-leave-active：离开过程中</li>
<li>v-leave-to：离开的终点</li>
</ol>
</li>
</ul>
</li>
<li>
<p>使用<code v-pre>&lt;transition&gt;</code>包裹要过度的元素，并配置 name 属性：</p>
</li>
</ol>
</li>
</ol>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>给 transition 加上 name 属性 xxx,就需要将类名 v-...改成 xxx-...</p>
<p>对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 <code v-pre>&lt;transition&gt;</code>，则 v- 是这些类名的默认前缀。如果你使用了 <code v-pre>&lt;transition name=&quot;my-transition&quot;&gt;</code>，那么 v-enter 会替换为 my-transition-enter</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>transition name<span class="token operator">=</span><span class="token string">"hello"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">"isShow"</span><span class="token operator">></span>你好啊！<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>transition<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>备注：若有多个元素需要过度，则需要使用：<code v-pre>&lt;transition-group&gt;</code>，且每个元素都要指定<code v-pre>key</code>值。</p>
</li>
<li>
<p>可以通过 appear attribute 设置节点在初始渲染的过渡</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>transition appear<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">...</span> <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>transition<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>使用第三方动画库 animate.css</li>
</ol>
<p><a href="https://animate.style/" target="_blank" rel="noopener noreferrer">animate.css<ExternalLinkIcon/></a>是强大的跨平台的预设 css3 动画库</p>
<p>安装:<code v-pre>npm install animate.css --save</code></p>
<p>引入:<code v-pre>import &quot;animate.css&quot;</code></p>
<p>使用第三方动画库需要通过以下 attribute 来自定义过渡类名</p>
<ul>
<li>enter-class</li>
<li>enter-active-class</li>
<li>enter-to-class (2.1.8+)</li>
<li>leave-class</li>
<li>leave-active-class</li>
<li>leave-to-class (2.1.8+)</li>
</ul>
<p><strong>一个栗子:</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>transition<span class="token operator">-</span>group
  appear
  <span class="token comment">// 必须</span>
  name<span class="token operator">=</span><span class="token string">"animate__animated animate__bounce"</span>
  <span class="token comment">// 自定义过渡类名</span>
  enter<span class="token operator">-</span>active<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"animate__swing"</span>
  leave<span class="token operator">-</span>active<span class="token operator">-</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"animate__backOutUp"</span>
<span class="token operator">></span>
  <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">"!isShow"</span> key<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span>
    你好啊！
  <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
  <span class="token operator">&lt;</span>h1 v<span class="token operator">-</span>show<span class="token operator">=</span><span class="token string">"isShow"</span> key<span class="token operator">=</span><span class="token string">"2"</span><span class="token operator">></span>
    尚硅谷！
  <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>transition<span class="token operator">-</span>group<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue-脚手架配置代理" tabindex="-1"><a class="header-anchor" href="#vue-脚手架配置代理" aria-hidden="true">#</a> vue 脚手架配置代理</h2>
<p>// TODO 查 changeOrigin</p>
<h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h3>
<p>在 vue.config.js 中添加如下配置：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token string">'http://localhost:5000'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p>
<ol>
<li>优点：配置简单，请求资源时直接发给前端（8080）即可。</li>
<li>缺点：不能配置多个代理，不能灵活的控制请求是否走代理。</li>
<li>工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）</li>
</ol>
<h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h3>
<p>编写 vue.config.js 配置具体代理规则：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'/api1'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 匹配所有以 '/api1'开头的请求路径</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://localhost:5000'</span><span class="token punctuation">,</span> <span class="token comment">// 代理目标的基础路径</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'^/api1'</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">'/api2'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 匹配所有以 '/api2'开头的请求路径</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'http://localhost:5001'</span><span class="token punctuation">,</span> <span class="token comment">// 代理目标的基础路径</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'^/api2'</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">/*
   changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
   changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
   changeOrigin默认值为true
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p>
<ol>
<li>优点：可以配置多个代理，且可以灵活的控制请求是否走代理。</li>
<li>缺点：配置略微繁琐，请求资源时必须加前缀。</li>
</ol>
<h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2>
<p><a href="https://v2.cn.vuejs.org/v2/guide/components-slots.html" target="_blank" rel="noopener noreferrer">官方文档:插槽<ExternalLinkIcon/></a></p>
<div class="custom-container warning">
<p class="custom-container-title">废弃的语法</p>
<p>在 Vue 2.6.0 中，为具名插槽和作用域插槽引入了一个新的统一的语法 (即 <code v-pre>v-slot</code> 指令)。它取代了 <code v-pre>slot</code> 和 <code v-pre>slot-scope</code> 这两个目前已被废弃但未被移除的 API，在接下来所有的 2.x 版本中 <code v-pre>slot</code> 和 <code v-pre>slot-scope</code> attribute 仍会被支持，但已经被官方废弃且不会出现在 Vue 3 中。</p>
</div>
<ol>
<li>
<p>作用：让父组件可以向子组件指定位置插入 <code v-pre>html</code> 结构，也是一种组件间通信的方式，适用于 <strong style="color:red">父组件 ===&gt; 子组件</strong>;父级模板里的所有内容都是在父级作用域中编译的,子模板里的所有内容都是在子作用域中编译的，也就说插槽可以访问父组件中的数据，但不能访问子组件中的数据</p>
</li>
<li>
<p>分类：<code v-pre>默认插槽</code>、<code v-pre>具名插槽</code>、<code v-pre>作用域插槽</code></p>
</li>
</ol>
<h3 id="默认插槽" tabindex="-1"><a class="header-anchor" href="#默认插槽" aria-hidden="true">#</a> 默认插槽</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 父组件中： --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Category</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>this is a div<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Category</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 子组件中： --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 定义插槽 --></span>
    <span class="token comment">&lt;!-- 如果提供内容则会取代后备内容--></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span>我是后备内容，没有提供内容，我会被渲染～<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="具名插槽" tabindex="-1"><a class="header-anchor" href="#具名插槽" aria-hidden="true">#</a> 具名插槽</h3>
<p>一个不带 <code v-pre>name</code> 的 <code v-pre>&lt;slot&gt;</code> 出口会带有隐含的名字:<code v-pre>default</code></p>
<p><code v-pre>v-slot</code>一般只能定义在<code v-pre>template</code>上 <em>注：特殊情况见<code v-pre>作用域插槽</code></em></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 父组件中： --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HelloWorld</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>header</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>this is header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 默认插槽：任何没有被包裹在带有 v-slot 的 &lt;template> 中的内容都会被视为默认插槽的内容。 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>this is default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 如果你希望更明确一些，仍然可以在一个 &lt;template> 中包裹默认插槽的内容 --></span>
      <span class="token comment">&lt;!-- &lt;template v-slot:default>&lt;div>this is default&lt;/div>&lt;/template> --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>main</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>this is main<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>footer</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>this is footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HelloWorld</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 子组件中： --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 定义插槽 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>插槽默认内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 插槽默认内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>插槽默认内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>使用“#“缩写</summary>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 父组件中： --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HelloWorld</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>this is header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#main</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>this is main<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>this is footer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HelloWorld</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 子组件中： --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 定义插槽 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>插槽默认内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 插槽默认内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>插槽默认内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="作用域插槽" tabindex="-1"><a class="header-anchor" href="#作用域插槽" aria-hidden="true">#</a> 作用域插槽</h3>
<ol>
<li>
<p>理解：<span style="color:red">数据定义在子组件，父组件想要访问定义在子组件中的数据</span></p>
</li>
<li>
<p>具体编码（父组件通过插槽能够访问子组件中才有的数据）：</p>
</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 父组件中 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 特殊情况，被提供的内容只有默认插槽 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HelloWorld</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slotProps<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ slotProps.msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HelloWorld</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 子组件中： --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'HelloWorld'</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'frank chang is handsome man'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><code v-pre>v-slot </code>只能添加在 <code v-pre>&lt;template&gt;</code>的例外情况：<strong>当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样就可以把 <code v-pre>v-slot</code> 直接用在组件上</strong>:</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!--  `v-slot` 直接用在组件上 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slotProps<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  {{ slotProps.userName }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 就像假定未指明的内容对应默认插槽一样，不带参数的 v-slot 被假定对应默认插槽 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slotProps<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{ slotProps.userName }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 默认插槽的缩写语法(上面👆的写法)不能和具名插槽混用，无效会导致警告 --></span>
<span class="token comment">&lt;!-- 所以只要出现多个插槽，请始终为所有的插槽使用完整的基于 `&lt;template>` 的语法👇 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slotProps<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    {{ slotProps.user.firstName }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>other</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>otherSlotProps<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>使用“#“缩写</li>
</ol>
<p>和其它指令一样，该缩写只在其有参数的时候才可用。这意味着以下语法是无效的：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 这样会触发一个警告 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name">#</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slotProps<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{ slotProps.userName }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用缩写的话，必须始终明确插槽名：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>current-user</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slotProps<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> {{ slotProps.userName }} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>current-user</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5">
<li>解构插槽 Prop</li>
</ol>
<p>适用情况:插槽提供了多个 <code v-pre>prop</code> 的时候</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 父组件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vue logo<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./assets/logo.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HelloWorld</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ user, msg }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ user.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HelloWorld</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 子组件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:user</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token attr-name">:msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'HelloWorld'</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'frank is a man'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>定义后备内容，用于插槽 `prop` 是 `undefined `的情形</summary>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 父组件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Vue logo<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./assets/logo.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HelloWorld</span>
      <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ user={name:'not a found' age:'null'}, msg='not a found' }<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ user.name}},{{user.age }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>{{ msg }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HelloWorld</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token comment">&lt;!-- 子组件 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:user</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user<span class="token punctuation">"</span></span> <span class="token attr-name">:msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'HelloWorld'</span><span class="token punctuation">,</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'frank is a man'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="inheritattrs-attrs-listeners" tabindex="-1"><a class="header-anchor" href="#inheritattrs-attrs-listeners" aria-hidden="true">#</a> <code v-pre>inheritAttrs</code> + <code v-pre>$attrs</code> + <code v-pre>$listeners</code></h2>
<ul>
<li><code v-pre>inheritAttrs</code></li>
</ul>
<p>当我们在使用组件时，为其传递的参数要在组件的<code v-pre>props</code>中进行定义，才能够使用。如果没有定义，则这个属性会作为这个 DOM 结构<code v-pre>根节点</code>的<code v-pre>attribute</code>被渲染。</p>
<p>1.当设置<code v-pre>inheritAttrs: true</code>（默认）时，子组件的顶层标签元素中<strong>会渲染出父组件传递过来的且未在 props 中定义的属性</strong></p>
<p>2.当设置<code v-pre>inheritAttrs: false</code>时，子组件的顶层标签元素中<strong>不会渲染出父组件传递过来的且未在 props 中定义的属性</strong></p>
<ul>
<li><code v-pre>$attrs</code></li>
</ul>
<p><code v-pre>$attrs</code> 是一个内置属性，指父组件传递的、除了自己定义的 props 属性之外的所有属性。</p>
<ul>
<li><code v-pre>$listeners</code>(<strong><span style="color:red">在 Vue 3 中已被移除,事件监听器现在是 $attrs 的一部分</span></strong>)</li>
</ul>
<p><code v-pre>$listeners</code> 包含了作用在这个组件上所有的监听器，即父组件绑定的全部监听事件，通过 v-on=&quot;$listeners&quot;，可以将这些事件绑定给它自己的子组件。</p>
<ul>
<li>
<p><code v-pre>$attrs</code> + <code v-pre>$listeners</code>实现爷孙组件事件通信</p>
<ul>
<li>
<p>爷传孙：把想要传给孙组件的数据先传给父组件，在父组件中通过<code v-pre>v-bind='$attrs'</code>把数据传给孙子组件,<strong>在父组件不要定义 props</strong></p>
</li>
<li>
<p>孙传爷：</p>
<ol>
<li>
<p>在爷组件中,给父组件绑定自定义事件</p>
</li>
<li>
<p>在父组件中,通过:<code v-pre>v-on=&quot;$listeners&quot;</code>,可以将这些事件绑定给它孙组件(vue3 通过<code v-pre>v-bind=$attrs</code>)</p>
</li>
<li>
<p>在孙组件中通过<code v-pre>this.$emit</code>触发自定义事件</p>
</li>
</ol>
</li>
</ul>
</li>
</ul>
<h2 id="挂载全局变量" tabindex="-1"><a class="header-anchor" href="#挂载全局变量" aria-hidden="true">#</a> 挂载全局变量</h2>
<p>如果需要设置全局变量，可以通过在 <code v-pre>main.js</code> 中，在 Vue 原型上添加属性实现全局变量</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$appName <span class="token operator">=</span> <span class="token string">'My App'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


