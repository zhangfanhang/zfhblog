<template><div><h1 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> Vue3</h1>
<div class="custom-container tip">
<p class="custom-container-title">注意</p>
<p><strong>vue3 向下兼容 vue2</strong></p>
</div>
<h2 id="使用-vite-创建-vue3-0-工程" tabindex="-1"><a class="header-anchor" href="#使用-vite-创建-vue3-0-工程" aria-hidden="true">#</a> 使用 vite 创建 Vue3.0 工程</h2>
<div class="custom-container danger">
<p class="custom-container-title">警告</p>
<p>在 <code v-pre>vite</code> 项目中，引入组件时，<code v-pre>.vue</code> 不能省略
<code v-pre>import xxx from './xxx.vue'</code></p>
</div>
<p><a href="https://cn.vitejs.dev/" target="_blank" rel="noopener noreferrer">vite 官网<ExternalLinkIcon/></a></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">## 创建vue项目</span>
<span class="token function">npm</span> create vite@latest my-vue-app <span class="token parameter variable">--template</span> vue
<span class="token comment">## 按提示操作</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2>
<p><a href="https://v3.cn.vuejs.org/guide/composition-api-introduction.html" target="_blank" rel="noopener noreferrer">Composition API<ExternalLinkIcon/></a></p>
<h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref()</h2>
<ul>
<li>作用: 创建可以使用任何值类型的响应式 <code v-pre> ref</code></li>
<li>语法:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> xxx <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>initValue<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>js</code>中操作数据： <code v-pre>xxx.value</code></p>
</li>
<li>
<p>一般的我们通过 <code v-pre>ref </code>声明响应式数据，在<code v-pre> js</code> 中访问需要加<code v-pre>.value</code></p>
<p>通过响应式语法糖，我们可以省去 <code v-pre>value</code></p>
<p>通过配置开启：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">reactivityTransform</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>模板中读取数据: 不需要<code v-pre>.value</code>，直接<code v-pre>xxx</code>使用</p>
</li>
<li>
<p>备注：</p>
<ul>
<li>接收的数据可以是：<code v-pre>基本类型</code>、也可以是<code v-pre>对象类型</code></li>
<li>基本类型的数据：响应式依然是靠<code v-pre>Object.defineProperty()</code>的<code v-pre>get</code>与<code v-pre>set</code>完成的</li>
<li>对象类型的数据：内部使用了<code v-pre>Vue3.0</code> 中的一个新函数—— <code v-pre>reactive</code>函数，模板中读取：<code v-pre>obj.xxx</code>,<code v-pre>js</code>中读取数据:<code v-pre>obj.value.xxx</code></li>
</ul>
</li>
</ul>
<h2 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive()</h2>
<ul>
<li>
<p>作用: 创建一个响应式对象或数组</p>
</li>
<li>
<p>语法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">const</span> xxx <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>内部基于 <code v-pre>ES6 </code>的 <code v-pre>Proxy</code> 实现，通过代理对象操作源对象内部数据进行操作</p>
</li>
<li>
<p>操作数据与读取数据：均不需要<code v-pre>.value</code></p>
</li>
</ul>
<h2 id="reactive-对比-ref" tabindex="-1"><a class="header-anchor" href="#reactive-对比-ref" aria-hidden="true">#</a> reactive 对比 ref</h2>
<ul>
<li>从定义数据角度对比：
<ul>
<li><code v-pre>ref</code> 用来定义：基本数据类型</li>
<li><code v-pre>reactive</code> 用来定义：对象（或数组）类型数据</li>
<li>备注：<code v-pre>ref</code> 也可以用来定义对象（或数组）类型数据 , 它内部会自动通过<code v-pre>reactive</code>转为代理对象</li>
</ul>
</li>
<li>从原理角度对比：
<ul>
<li><code v-pre>ref </code>通过<code v-pre>Object.defineProperty()</code>的<code v-pre>get</code>与<code v-pre>set</code>来实现响应式（数据劫持）</li>
<li><code v-pre>reactive</code> 通过使用<code v-pre>Proxy</code>来实现响应式（数据劫持）, 并通过<code v-pre>Reflect</code>操作源对象内部的数据</li>
</ul>
</li>
<li>从使用角度对比：
<ul>
<li><code v-pre>ref</code> 定义的数据：操作数据需要 <code v-pre>.value</code>，读取数据时模板中直接读取不需要<code v-pre>.value</code></li>
<li><code v-pre>reactive</code> 定义的数据：操作数据与读取数据均不需要<code v-pre>.value</code></li>
<li><code v-pre>reactive</code>存在局限性：一个包含对象类型值的<code v-pre>ref</code>可以响应式地替换整个对象,<code v-pre>ref </code>被传递给函数或是从一般对象上被解构时，不会丢失响应性;不可以随意地“替换”用<code v-pre>reactive</code>创建的响应式对象，将响应式对象的属性赋值或解构至本地变量时，或是将该属性传入一个函数时，会失去响应性</li>
</ul>
</li>
</ul>
<h2 id="vue3-的响应式原理" tabindex="-1"><a class="header-anchor" href="#vue3-的响应式原理" aria-hidden="true">#</a> Vue3 的响应式原理</h2>
<h3 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2" aria-hidden="true">#</a> vue2</h3>
<ul>
<li>
<p>实现原理：</p>
<ul>
<li>
<p>对象类型：通过<code v-pre>Object.defineProperty()</code>对属性的读取、修改进行拦截（数据劫持）。</p>
</li>
<li>
<p>数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹）。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">'count'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>存在问题：</p>
<ul>
<li><strong>新增对象属性、删除属性, 界面不会更新</strong></li>
<li><strong>直接通过下标修改数组, 界面不会自动更新</strong></li>
</ul>
</li>
</ul>
<h3 id="vue3-1" tabindex="-1"><a class="header-anchor" href="#vue3-1" aria-hidden="true">#</a> Vue3</h3>
<ul>
<li>
<p>实现原理:</p>
<ul>
<li>
<p>通过<code v-pre>Proxy</code>（代理）: 拦截对象中任意属性的变化, 包括：属性值的读写、属性的添加、属性的删除等</p>
</li>
<li>
<p>通过<code v-pre>Reflect</code>（反射）: 对源对象的属性进行操作</p>
</li>
</ul>
</li>
</ul>
<h4 id="模拟-vue3-的响应式实现" tabindex="-1"><a class="header-anchor" href="#模拟-vue3-的响应式实现" aria-hidden="true">#</a> 模拟 vue3 的响应式实现</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 读取</span>
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">有人读取了b身上的</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">属性</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 修改</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">有人修改了b身上的</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">值为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,需要更新界面</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 删除</span>
  <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> propName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">有人删除了b身上的</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>propName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,需要更新界面</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propName<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
b<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'zhang'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">delete</span> b<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">//{ name: 'zhang' }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">//{ name: 'zhang' }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>MDN 文档中描述的 Proxy 与 Reflect： <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank" rel="noopener noreferrer">Proxy<ExternalLinkIcon/></a> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect" target="_blank" rel="noopener noreferrer">Reflect<ExternalLinkIcon/></a></li>
<li>阮一峰<a href="https://es6.ruanyifeng.com/#docs/proxy" target="_blank" rel="noopener noreferrer">Proxy<ExternalLinkIcon/></a>教程，<a href="https://es6.ruanyifeng.com/#docs/reflect" target="_blank" rel="noopener noreferrer">Reflect<ExternalLinkIcon/></a>教程</li>
</ul>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2>
<p><a href="https://cn.vuejs.org/guide/components/props.html#props-declaration" target="_blank" rel="noopener noreferrer">更多细节<ExternalLinkIcon/></a></p>
<p>在使用 <code v-pre>&lt;script setup&gt;</code> 的单文件组件中，<code v-pre>props </code>使用 <code v-pre>defineProps()</code> 宏来声明：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'foo'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> computed</h2>
<ul>
<li>
<p>与 Vue2.x 中 computed 配置功能一致</p>
</li>
<li>
<p>写法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>computed<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
	<span class="token comment">//计算属性——简写</span>
    <span class="token keyword">let</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> person<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">'-'</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//计算属性——完整</span>
    <span class="token keyword">let</span> fullName <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> person<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">'-'</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>lastName
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">const</span> nameArr <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span>
            person<span class="token punctuation">.</span>firstName <span class="token operator">=</span> nameArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            person<span class="token punctuation">.</span>lastName <span class="token operator">=</span> nameArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> watch<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> msg1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> msg2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'456'</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">job</span><span class="token operator">:</span> <span class="token string">'fe'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fun</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//情况一：单个ref</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  sum<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'sum变化了'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">//情况二：多个来源组成的数组</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>sum<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> msg1<span class="token punctuation">.</span>value <span class="token operator">+</span> msg2<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'sum或msg1+msg2变化了'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 情况三：一个getter 函数</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> msg1<span class="token punctuation">.</span>value <span class="token operator">+</span> msg2<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'msg1+msg2变化了'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// 情况四： reactive</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  person<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 强制开启深层侦听器</span>
    <span class="token comment">// 在嵌套的属性变更时触发</span>
    <span class="token comment">// 注意：`newValue` 此处和 `oldValue` 是相等的,因为它们是同一个对象！</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'person变化了'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span> <span class="token comment">//此处的deep配置失效</span>

<span class="token comment">//情况五：监视reactive定义的响应式中的某个属性</span>
<span class="token comment">// 不能直接侦听响应式对象的属性值;错误，因为 watch() 得到的参数是一个string</span>
<span class="token function">watch</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>job<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'person的job变化了'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 正确</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> person<span class="token punctuation">.</span>job<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'person的job变化了'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// 当属性也是响应式对象</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> person<span class="token punctuation">.</span>fun<span class="token punctuation">.</span>a<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 仅当person.fun.a被替换触发</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'person的fun的a变化了'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// 监视 reactive 定义的响应式对象中某个属性时：deep 配置有效</span>
<span class="token function">watch</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> person<span class="token punctuation">.</span>fun<span class="token punctuation">.</span>a<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 注意：`newValue` 此处和 `oldValue` 是相等的</span>
    <span class="token comment">// *除非* person.fun.a 被整个替换了</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'person的fun的a变化了'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="watcheffect" tabindex="-1"><a class="header-anchor" href="#watcheffect" aria-hidden="true">#</a> watchEffect</h2>
<ul>
<li>
<p><code v-pre>watch</code> 的套路是：既要指明监视的属性，也要指明监视的回调</p>
</li>
<li>
<p><code v-pre>watchEffect</code> 的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性</p>
</li>
<li>
<p><code v-pre>watchEffect </code>有点像 <code v-pre>computed</code>：</p>
<ul>
<li>但<code v-pre>computed</code>注重的计算出来的值（回调函数的返回值），所以必须要写返回值</li>
<li>而 <code v-pre>watchEffect</code> 更注重的是过程（回调函数的函数体），所以不用写返回值</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。</span>
<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> x1 <span class="token operator">=</span> sum<span class="token punctuation">.</span>value
  <span class="token keyword">const</span> x2 <span class="token operator">=</span> person<span class="token punctuation">.</span>age
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'watchEffect配置的回调执行了'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<h3 id="vue2-1" tabindex="-1"><a class="header-anchor" href="#vue2-1" aria-hidden="true">#</a> Vue2</h3>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/vue2生命周期.png" alt="vue2生命周期" loading="lazy"></p>
<h3 id="vue3-2" tabindex="-1"><a class="header-anchor" href="#vue3-2" aria-hidden="true">#</a> Vue3</h3>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/vue3生命周期.png" alt="vue3生命周期" loading="lazy"></p>
<ul>
<li>Vue3.0 中可以继续使用 Vue2.x 中的生命周期钩子，但有有两个被更名：
<ul>
<li><code v-pre>beforeDestroy</code>改名为 <code v-pre>beforeUnmount</code></li>
<li><code v-pre>destroyed</code>改名为 <code v-pre>unmounted</code></li>
</ul>
</li>
<li>Vue3.0 也提供了 Composition API 形式的生命周期钩子，与 Vue2.x 中钩子对应关系如下：
<ul>
<li><code v-pre>beforeCreate</code>===&gt;<code v-pre>setup()</code></li>
<li><code v-pre>created</code>=======&gt;<code v-pre>setup()</code></li>
<li><code v-pre>beforeMount</code> ===&gt;<code v-pre>onBeforeMount</code></li>
<li><code v-pre>mounted</code>=======&gt;<code v-pre>onMounted</code></li>
<li><code v-pre>beforeUpdate</code>===&gt;<code v-pre>onBeforeUpdate</code></li>
<li><code v-pre>updated</code> =======&gt;<code v-pre>onUpdated</code></li>
<li><code v-pre>beforeUnmount</code> ==&gt;<code v-pre>onBeforeUnmount</code></li>
<li><code v-pre>unmounted</code> =====&gt;<code v-pre>onUnmounted</code></li>
</ul>
</li>
</ul>
<h2 id="组合式函数" tabindex="-1"><a class="header-anchor" href="#组合式函数" aria-hidden="true">#</a> 组合式函数</h2>
<p>// TODO 学习官方文档 <a href="https://cn.vuejs.org/guide/reusability/composables.html" target="_blank" rel="noopener noreferrer">https://cn.vuejs.org/guide/reusability/composables.html<ExternalLinkIcon/></a></p>
<ul>
<li>“组合式函数” 是一个利用 Vue 组合式 API 来封装和复用<strong>有状态逻辑</strong>的函数</li>
<li>类似于 vue2.x 中的 mixin</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 外部</span>
<span class="token comment">// import xxx from 'xxx'</span>
<span class="token comment">// 内部</span>
<span class="token keyword">function</span> <span class="token function">xxx</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// ....</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> yyy<span class="token punctuation">,</span>zzz <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span>yyy<span class="token punctuation">,</span>zzz<span class="token punctuation">}</span> <span class="token operator">=</span><span class="token function">xxx</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>yyy<span class="token punctuation">,</span>zzz<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> toRef</h2>
<ul>
<li>
<p>作用：创建一个 ref 对象，其 value 值指向另一个对象中的某个属性。</p>
</li>
<li>
<p>语法：<code v-pre>const name = toRef(person,'name')</code></p>
</li>
<li>
<p>应用: 要将响应式对象中的某个属性单独提供给外部使用时。</p>
</li>
<li>
<p>扩展：<code v-pre>toRefs</code> 与<code v-pre>toRef</code>功能一致，但可以批量创建多个 ref 对象，语法：<code v-pre>const { name,age }=toRefs(person)</code></p>
</li>
</ul>
<h2 id="provide-与-inject" tabindex="-1"><a class="header-anchor" href="#provide-与-inject" aria-hidden="true">#</a> provide 与 inject</h2>
<p><a href="https://cn.vuejs.org/guide/components/provide-inject.html" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
<ul>
<li>
<p>作用：实现祖与后代组件间通信</p>
</li>
<li>
<p>套路：父组件有一个 <code v-pre>provide</code> 选项来提供数据，后代组件有一个 <code v-pre>inject</code> 选项来开始使用这些数据</p>
</li>
<li>
<p>具体写法：</p>
</li>
</ul>
<ol>
<li>祖组件中：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
     <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     	<span class="token operator">...</span><span class="token operator">...</span>
         <span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'奔驰'</span><span class="token punctuation">,</span><span class="token literal-property property">price</span><span class="token operator">:</span><span class="token string">'40万'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
         <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">,</span>car<span class="token punctuation">)</span>
         <span class="token operator">...</span><span class="token operator">...</span>
     <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>后代组件中：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

     <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span>context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     	<span class="token operator">...</span><span class="token operator">...</span>
         <span class="token keyword">const</span> car <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">)</span>
         <span class="token keyword">return</span> <span class="token punctuation">{</span>car<span class="token punctuation">}</span>
     	<span class="token operator">...</span><span class="token operator">...</span>
     <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


