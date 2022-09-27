<template><div><h2 id="react-的组件化" tabindex="-1"><a class="header-anchor" href="#react-的组件化" aria-hidden="true">#</a> React 的组件化</h2>
<div class="custom-container tip">
<p class="custom-container-title">render 函数的返回值</p>
<p>当 <code v-pre>render</code> 被调用时，它会检查 <code v-pre>this.props</code> 和 <code v-pre>this.state</code> 的变化并返回以下类型之一:</p>
<ul>
<li><strong><code v-pre>React </code>元素</strong>：
<ul>
<li>通常通过 <code v-pre>JSX</code> 创建</li>
<li>例如，<code v-pre>&lt;div /&gt;</code> 会被 <code v-pre>React</code> 渲染为 <code v-pre>DOM</code> 节点，<code v-pre>&lt;MyComponent /&gt;</code>会被 <code v-pre>React</code> 渲染为自定义组件</li>
<li>无论是 <code v-pre>&lt;div /&gt;</code> 还是 <code v-pre>&lt;MyComponent /&gt;</code> 均为 <code v-pre>React</code> 元素</li>
</ul>
</li>
<li><strong>数组或 <code v-pre>fragments</code></strong>: 使得 <code v-pre>render</code> 方法可以返回多个元素</li>
<li><strong><code v-pre>Portals</code></strong>：可以渲染子节点到不同的 DOM 子树中</li>
<li><strong>字符串或数值类型</strong>：它们在 DOM 中会被渲染为文本节点</li>
<li><strong>布尔类型或 <code v-pre>null</code></strong>:什么都不渲染</li>
<li>从 react17 开始 render 禁止返回 undefined</li>
</ul>
</div>
<h3 id="类组件" tabindex="-1"><a class="header-anchor" href="#类组件" aria-hidden="true">#</a> 类组件</h3>
<p>类组件的定义有如下要求：</p>
<ul>
<li>组件的名称是大写字符开头（无论类组件还是函数组件）</li>
<li>类组件需要继承自 <code v-pre>React.Component</code></li>
<li>类组件必须实现 <code v-pre>render</code> 函数</li>
</ul>
<p>使用 <code v-pre>class</code> 定义一个组件：</p>
<ul>
<li><code v-pre>constructor</code> 是可选的，我们通常在 <code v-pre>constructor</code> 中初始化一些数据</li>
<li><code v-pre>this.state</code> 中维护的就是我们组件内部的数据</li>
<li><code v-pre>render()</code> 方法是 <code v-pre>class</code> 组件<strong>中唯一必须实现</strong>的方法</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'我是app组件'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>msg<span class="token punctuation">}</span><span class="token plain-text">,啊这</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数组件" tabindex="-1"><a class="header-anchor" href="#函数组件" aria-hidden="true">#</a> 函数组件</h3>
<p>函数组件是使用 <code v-pre>function</code> 来进行定义的函数，<strong>只是这个函数会返回和类组件中 render 函数返回一样的内容</strong>。</p>
<p>函数组件有自己的特点（当然，<code v-pre>hooks</code>，就不一样了）：</p>
<ul>
<li>没有生命周期，也会被更新并挂载，但是没有生命周期函数</li>
<li>没有 <code v-pre>this</code>(组件实例)</li>
<li>没有内部状态<code v-pre>state</code></li>
</ul>
<p>定义函数组件：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">我是function组件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<p>生命周期是一个抽象的概念，在生命周期的整个过程，分成了很多个阶段:</p>
<ul>
<li>比如装载阶段<code v-pre>Mount</code>，组件第一次在 DOM 树中被渲染的过程</li>
<li>比如更新过程<code v-pre>Update</code>，组件状态发生变化，重新更新渲染的过程</li>
<li>比如卸载过程<code v-pre>Unmount</code>，组件从 DOM 树中被移除的过程</li>
</ul>
<p><code v-pre>React</code> 内部为了告诉我们当前处于哪些阶段，会对我们组件内部实现的某些函数进行回调，这些函数就是生命周期函数：</p>
<ul>
<li>比如实现 <code v-pre>componentDidMount</code> 函数：组件已经挂载到 <code v-pre>DOM </code>上时，就会回调</li>
<li>比如实现<code v-pre>componentDidUpdate</code>函数：组件已经发生了更新时，就会回调</li>
<li>比如实现 <code v-pre>componentWillUnmount</code> 函数：组件即将被移除时，就会回调</li>
<li>我们可以在这些回调函数中编写自己的逻辑代码，来完成自己的需求功能</li>
</ul>
<p><strong>我们说到 <code v-pre>React</code> 生命周期时，主要谈的是类的生命周期，因为函数式组件是没有生命周期函数的(后面我们可以通过 <code v-pre>hooks</code> 来模拟一些生命周期的回调)</strong></p>
<h3 id="生命周期函数" tabindex="-1"><a class="header-anchor" href="#生命周期函数" aria-hidden="true">#</a> 生命周期函数</h3>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/生命周期解析.png" alt="生命周期解析" loading="lazy"></p>
<h4 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h4>
<p>如果不初始化 <code v-pre>state</code> 或不进行方法绑定，则不需要为 <code v-pre>React</code>组件实现构造函数</p>
<p><code v-pre>constructor</code> 中通常只做两件事情：</p>
<ul>
<li>通过给 <code v-pre>this.state</code>赋值对象来初始化内部的 <code v-pre>state</code></li>
<li>为事件绑定实例<code v-pre>this</code>：<code v-pre>this.xxx.bind(this)</code></li>
</ul>
<h4 id="componentdidmount" tabindex="-1"><a class="header-anchor" href="#componentdidmount" aria-hidden="true">#</a> componentDidMount</h4>
<p><code v-pre>componentDidMount()</code>会在组件挂载后（插入 <code v-pre>DOM</code> 树中）立即调用</p>
<p><code v-pre>componentDidMount</code>中通常进行哪里操作呢？</p>
<ul>
<li>依赖于 <code v-pre>DOM</code>的操作可以在这里进行</li>
<li>在此处发送网络请求就最好的地方（官方建议）</li>
<li>可以在此处添加一些订阅（会在 <code v-pre>componentWillUnmount</code> 取消订阅）</li>
</ul>
<h4 id="componentdidupdate" tabindex="-1"><a class="header-anchor" href="#componentdidupdate" aria-hidden="true">#</a> componentDidUpdate</h4>
<p><code v-pre>componentDidUpdate()</code> 会在更新后会被立即调用，首次渲染不会执行此方法</p>
<ul>
<li>当组件更新后，可以在此处对 <code v-pre>DOM</code> 进行操作</li>
<li>如果你对更新前后的<code v-pre>props</code>进行了比较，也可以选择在此处进行网络请求（例如，当 <code v-pre>props</code>未发生变化时，则不会执行网络请求）</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token parameter">prevProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 典型用法（不要忘记比较 props）：</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>userID <span class="token operator">!==</span> prevProps<span class="token punctuation">.</span>userID<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>userID<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="componentwillunmount" tabindex="-1"><a class="header-anchor" href="#componentwillunmount" aria-hidden="true">#</a> componentWillUnmount</h4>
<p><code v-pre>componentWillUnmount()</code> 会在组件卸载及销毁之前直接调用</p>
<ul>
<li>在此方法中执行必要的清理操作</li>
<li>例如，清除 <code v-pre>timer</code>，取消网络请求或清除在 <code v-pre>componentDidMount()</code>中创建的订阅等</li>
</ul>
<h2 id="组件的嵌套" tabindex="-1"><a class="header-anchor" href="#组件的嵌套" aria-hidden="true">#</a> 组件的嵌套</h2>
<p>组件化的核心思想应该是对组件进行拆分，拆分成一个个小的组件，再将这些组件组合嵌套在一起，最终形成我们的应用程序</p>
<p>一个简单的组件嵌套的例子 🌰：</p>
<center>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/组件的嵌套.png" alt="组件的嵌套" loading="lazy"></p>
</center>
<CodePen
  link="https://codepen.io/zhangfanhang/pen/qBpQegw"
  :theme="$isDarkMode? 'dark': 'light'"
/>
<h2 id="组件间的通信" tabindex="-1"><a class="header-anchor" href="#组件间的通信" aria-hidden="true">#</a> 组件间的通信</h2>
<h3 id="父组件传递子组件" tabindex="-1"><a class="header-anchor" href="#父组件传递子组件" aria-hidden="true">#</a> 父组件传递子组件</h3>
<div class="custom-container tip">
<p class="custom-container-title">super(props),super()以及不写 super 的区别</p>
<ul>
<li>如果用到了 <code v-pre>constructor</code> 就必须写 <code v-pre>super()</code>,是用来初始化 <code v-pre>this</code> 的</li>
<li>如果你在 <code v-pre>constructor</code> 中要使用 <code v-pre>this.props</code>,就必须给 <code v-pre>super</code> 加参数：<code v-pre>super(props)</code></li>
<li><strong>无论有没有 <code v-pre>constructor</code>，在 <code v-pre>render</code> 中 <code v-pre>this.props</code> 都是可以使用的，这是 React 默认实现的</strong></li>
<li>如果没用到 <code v-pre>constructor</code>,是可以不写的；React 会默认添加一个空的 <code v-pre>constructor</code>。</li>
</ul>
</div>
<p>父组件在展示子组件，可能会传递一些数据给子组件：</p>
<ul>
<li>父组件通过<strong>属性=值</strong>的形式来传递给子组件数据；</li>
<li>子组件通过<code v-pre>props</code>参数获取父组件传递过来的数据；</li>
</ul>
<details class="custom-container details"><summary>父传子:类组件</summary>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">class</span> <span class="token class-name">ChildCom</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我的名字是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChildCom</span></span> <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ChildCom</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="custom-container details"><summary>父传子:函数组件</summary>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">ChildCom</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> props
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我的名字是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChildCom</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>frank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ChildCom</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="参数-proptypes" tabindex="-1"><a class="header-anchor" href="#参数-proptypes" aria-hidden="true">#</a> 参数 propTypes</h3>
<p>对于传递给子组件的数据，有时候我们可能希望进行验证，特别是对于大型项目来说：</p>
<p>当然，如果你项目中集成了 <code v-pre>Flow</code> 或者 <code v-pre>TypeScript</code>，那么直接就可以进行类型验证；但是，<strong>即使我们没有使用 Flow 或者 TypeScript，也可以通过 prop-types 库来进行参数验证</strong>；</p>
<p>从 <code v-pre>React v15.5</code>开始，<code v-pre>React.PropTypes</code> 已移入另一个包中：<code v-pre>prop-types</code> 库</p>
<p>更多的验证方式，可以<a href="https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html" target="_blank" rel="noopener noreferrer">参考官网<ExternalLinkIcon/></a></p>
<ul>
<li>比如验证数组，并且数组中包含哪些元素；</li>
<li>比如验证对象，并且对象中包含哪些 <code v-pre>key</code> 以及 <code v-pre>value</code> 是什么类型；</li>
<li>比如某个<code v-pre>prop</code>是必须的，使用 <code v-pre>requiredFunc: PropTypes.func.isRequired</code></li>
</ul>
<p>如果没有传递，我们希望有默认值呢？<strong>我们使用 <code v-pre>defaultProps</code>就可以了</strong></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">'prop-types'</span>

<span class="token keyword">class</span> <span class="token class-name">ChildCom</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我的名字是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,今年</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁了</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ChildCom<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

ChildCom<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'null'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChildCom</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>frank<span class="token punctuation">"</span></span> <span class="token attr-name">age</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">22</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ChildCom</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChildCom</span></span> <span class="token attr-name">age</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ChildCom</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChildCom</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ChildCom</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>这样写也是可以的</summary>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">'prop-types'</span>

<span class="token keyword">class</span> <span class="token class-name">ChildCom</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'null'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我的名字是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,今年</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁了</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChildCom</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>frank<span class="token punctuation">"</span></span> <span class="token attr-name">age</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">22</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ChildCom</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChildCom</span></span> <span class="token attr-name">age</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ChildCom</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ChildCom</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ChildCom</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>如果你在常规开发中使用函数组件，那你可能需要做一些适当的改动，以保证 <code v-pre>PropsTypes</code>应用正常。</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">HelloWorldComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要添加<code v-pre>PropTypes</code>，你可能需要在导出之前以单独声明的一个函数的形式，声明该组件，具体代码如下：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">HelloWorldComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HelloWorldComponent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，可以直接在 <code v-pre>HelloWorldComponent</code> 上添加 <code v-pre>PropTypes</code>：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">'prop-types'</span>

<span class="token keyword">function</span> <span class="token function">HelloWorldComponent</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">Hello, </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

HelloWorldComponent<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HelloWorldComponent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子组件传递父组件" tabindex="-1"><a class="header-anchor" href="#子组件传递父组件" aria-hidden="true">#</a> 子组件传递父组件</h3>
<p>在 <code v-pre>React </code>中是通过 <code v-pre>props </code>传递消息，只是让父组件给子组件传递一个回调函数，在子组件中调用这个函数即可；</p>
<details class="custom-container details"><summary>子传父</summary>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">class</span> <span class="token class-name">Ibutton</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          传递
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Ibutton</span></span>
          <span class="token attr-name">increment</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="在-react-中实现-slot" tabindex="-1"><a class="header-anchor" href="#在-react-中实现-slot" aria-hidden="true">#</a> 在 React 中实现 slot</h3>
<p><code v-pre>children</code>(即：标签(组件)内的内容)被默认添加到<code v-pre>props</code>上，可以通过<code v-pre>this.props.children</code>访问，如果存在多个<code v-pre>children</code>，那么被添加到<code v-pre>props</code>上的是一个<code v-pre>children</code>数组</p>
<p>App.js</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">import</span> NavBar <span class="token keyword">from</span> <span class="token string">'./NavBar'</span>
<span class="token keyword">import</span> NavBar2 <span class="token keyword">from</span> <span class="token string">'./NavBar2'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">aaa</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">bbb</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">ccc</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavBar</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NavBar2</span></span>
          <span class="token attr-name">leftSlot</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">aaa</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>
          <span class="token attr-name">centerSlot</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">bbb</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>
          <span class="token attr-name">rightSlot</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">ccc</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">NavBar2</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一种方式(这种方式传递过去的 <code v-pre>html </code>结构不能混乱)</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">NavBar</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> children <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav_item nav_left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav_item nav_center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav_item nav_right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>children<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种方式(<strong>推荐</strong>)：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">NavBar</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> leftSlot<span class="token punctuation">,</span> centerSlot<span class="token punctuation">,</span> rightSlot <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav_item nav_left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>leftSlot<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav_item nav_center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>centerSlot<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav_item nav_right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>rightSlot<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果图：</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/在React中实现Slot.jpg" alt="在React中实现Slot" loading="lazy"></p>
<h3 id="context-跨组件通信" tabindex="-1"><a class="header-anchor" href="#context-跨组件通信" aria-hidden="true">#</a> Context(跨组件通信)</h3>
<p><a href="https://zh-hans.reactjs.org/docs/jsx-in-depth.html#spread-attributes" target="_blank" rel="noopener noreferrer">知识点扩充：属性展开<ExternalLinkIcon/></a></p>
<p><a href="https://zh-hans.reactjs.org/docs/context.html" target="_blank" rel="noopener noreferrer">官方文档：Context<ExternalLinkIcon/></a></p>
<h4 id="context-应用场景" tabindex="-1"><a class="header-anchor" href="#context-应用场景" aria-hidden="true">#</a> Context 应用场景</h4>
<p>非父子组件数据的共享：</p>
<ul>
<li>在开发中，比较常见的数据传递方式是通过 <code v-pre>props</code>属性自上而下（由父到子）进行传递</li>
<li>但是对于有一些场景：比如一些数据需要在多个组件中进行共享（地区偏好、UI 主题、用户登录状态、用户信息等）</li>
<li>如果我们在顶层的 <code v-pre>App</code> 中定义这些信息，之后一层层传递下去，那么对于一些中间层不需要数据的组件来说，是一种冗余的操作</li>
</ul>
<p>但是，如果层级更多的话，一层层传递是非常麻烦，并且代码是非常冗余的：</p>
<ul>
<li><code v-pre>React</code> 提供了一个 <code v-pre>API</code>：<code v-pre>Context</code></li>
<li><code v-pre>Context</code> 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 <code v-pre>props</code></li>
<li><code v-pre>Context</code> 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，例如当前认证的用户、主题或首选语言</li>
</ul>
<h4 id="context-相关-api" tabindex="-1"><a class="header-anchor" href="#context-相关-api" aria-hidden="true">#</a> Context 相关 API</h4>
<p><strong><code v-pre>React.createContext</code></strong></p>
<ul>
<li>创建一个需要共享的 <code v-pre>Context</code> 对象</li>
<li>当 <code v-pre>React</code> 渲染一个订阅了这个 <code v-pre>Context</code> 对象的组件，这个组件会从离自身最近的那个匹配的 <code v-pre>Provider</code> 中读取到当前的 <code v-pre>context</code> 值</li>
<li>当组件没有匹配到 <code v-pre>Provider</code> 时，其 <code v-pre>defaultValue</code> 参数才会生效（只要匹配到就不会生效，即使不传递 value）</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token string">'null'</span><span class="token punctuation">,</span> <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token comment">//默认值)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong><code v-pre>Context.Provider</code></strong></p>
<ul>
<li>每个 <code v-pre>Context</code> 对象都会返回一个 <code v-pre>Provider React</code> 组件，它允许消费组件订阅 <code v-pre>context </code>的变化</li>
<li><code v-pre>Provider</code> 接收一个 <code v-pre>value</code> 属性，传递给消费组件</li>
<li>一个 <code v-pre>Provider</code> 可以和多个消费组件有对应关系</li>
<li>多个 <code v-pre>Provider</code> 也可以嵌套使用，里层的会覆盖外层的数据(如需使用多个 context 请使用<code v-pre>Context.Consumer</code>)</li>
<li>当 <code v-pre>Provider </code>的 <code v-pre>value</code> 值发生变化时，它内部的所有消费组件都会重新渲染</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                 </span><span class="token punctuation">{</span><span class="token comment">/*这是子组件(消费组件)*/</span><span class="token punctuation">}</span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyContext.Provider</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>从 Provider 到其内部消费组件的传播不受制于 <code v-pre>shouldComponentUpdate</code> 函数，因此当消费组件在其祖先组件跳过更新的情况下也能更新:</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent<span class="token punctuation">,</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token comment">// 创建context对象</span>
<span class="token keyword">const</span> MyContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token string">'null'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">List</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'list render'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserInfo</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">首页</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">购物车</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">我的</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// context不受shouldComponentUpdate的控制</span>
  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span> nextState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// userInfo 组件</span>
<span class="token keyword">class</span> <span class="token class-name">UserInfo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'render,userinfo'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>color <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>nickName<span class="token punctuation">}</span><span class="token plain-text">,等级</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>level<span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span> nextState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 挂载contextType(这是无法使用多个context的原因)</span>
UserInfo<span class="token punctuation">.</span>contextType <span class="token operator">=</span> MyContext

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span> <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">1212299</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'red'</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'app render'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyContext.Provider</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps<span class="token punctuation">,</span> nextState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>Class.contextType</code></strong></p>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>函数式组件无法使用<code v-pre>Class.contextType</code></p>
</div>
<ul>
<li>挂载在 <code v-pre>class</code> 上的<code v-pre>contextType</code>属性会被赋值为一个由 <code v-pre>React.createContext()</code> 创建的 <code v-pre>Context</code> 对象</li>
<li>这能让你使用 <code v-pre>this.context</code> 来消费最近 <code v-pre>Context</code> 上的那个值</li>
<li>你可以在任何生命周期中访问到它，包括 <code v-pre>render</code> 函数中</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>UserInfo<span class="token punctuation">.</span>contextType <span class="token operator">=</span> MyContext
<span class="token comment">// 这是孙组件</span>
<span class="token keyword">class</span> <span class="token class-name">UserInfo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>color <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          用户名：</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>nickName<span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">等级:</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>level<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>Context.Consumer</code></strong></p>
<div class="custom-container tip">
<p class="custom-container-title">什么时候使用 Context.Consumer 呢？</p>
<ul>
<li>当使用 value 的组件是一个函数式组件时</li>
<li>或者当组件中需要使用多个 Context 时</li>
</ul>
</div>
<p>这里需要函数作为子元素<a href="https://zh-hans.reactjs.org/docs/jsx-in-depth.html#functions-as-children" target="_blank" rel="noopener noreferrer">function as child<ExternalLinkIcon/></a>这种做法；传递给函数的 <code v-pre>value</code> 值等价于组件树上方离这个 context 最近的 Provider 提供的 <code v-pre>value</code> 值</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">UserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyContext.Consumer</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">用户名：</span><span class="token punctuation">{</span>value<span class="token punctuation">.</span>nickName<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">等级:</span><span class="token punctuation">{</span>value<span class="token punctuation">.</span>level<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyContext.Consumer</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多个-context" tabindex="-1"><a class="header-anchor" href="#多个-context" aria-hidden="true">#</a> 多个 Context</h4>
<details class="custom-container details"><summary>具体编码</summary>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token comment">// 创建context对象</span>
<span class="token keyword">const</span> MyContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token string">'null'</span><span class="token punctuation">,</span> <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> themeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">List</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserInfo</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">UserInfo</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">首页</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">购物车</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">我的</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">UserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyContext.Consumer</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>themeContext.Consumer</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token punctuation">{</span><span class="token parameter">theme</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> theme<span class="token punctuation">.</span>color <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                    用户名：</span><span class="token punctuation">{</span>value<span class="token punctuation">.</span>nickName<span class="token punctuation">}</span><span class="token plain-text">
                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
                  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">等级:</span><span class="token punctuation">{</span>value<span class="token punctuation">.</span>level<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>themeContext.Consumer</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyContext.Consumer</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>themeContext.Provider</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'blue'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">List</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>themeContext.Provider</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MyContext.Provider</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="全局事件传递" tabindex="-1"><a class="header-anchor" href="#全局事件传递" aria-hidden="true">#</a> 全局事件传递</h3>
<p>前面通过 Context 主要实现的是数据的共享，但是在开发中如果有跨组件之间的事件传递，应该如何操作呢？</p>
<ul>
<li>在 Vue 中我们可以通过 Vue 的实例，快速实现一个事件总线（EventBus），来完成操作</li>
<li>在 React 中，我们可以依赖一个使用较多的库 events 来完成对应的操作</li>
</ul>
<p>安装：<code v-pre>yarn add events</code></p>
<p>events 常用的 API：</p>
<ul>
<li>创建 EventEmitter 对象:const eventBus =new EventEmitter()</li>
<li>发出事件：eventBus.emit(&quot;事件名称&quot;, 参数列表)</li>
<li>监听事件：eventBus.addListener(&quot;事件名称&quot;, 监听函数)</li>
<li>移除事件：eventBus.removeListener(&quot;事件名称&quot;, 监听函数)</li>
</ul>
<details class="custom-container details"><summary>events 案例</summary>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EventEmitter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'events'</span>

<span class="token keyword">const</span> eventBus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MainBanner</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MainBanner</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>num<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    eventBus<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">'helloMainBanner'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        num<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> num2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    eventBus<span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span><span class="token string">'helloMainBanner'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">88888</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Main</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">helloMainBanner</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          helloMainBanner
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">helloMainBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    eventBus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'helloMainBanner'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>num<span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="setstate" tabindex="-1"><a class="header-anchor" href="#setstate" aria-hidden="true">#</a> setState</h2>
<p><a href="https://zh-hans.reactjs.org/docs/react-component.html#setstate" target="_blank" rel="noopener noreferrer">setState API<ExternalLinkIcon/></a></p>
<h3 id="为什么使用-setstate" tabindex="-1"><a class="header-anchor" href="#为什么使用-setstate" aria-hidden="true">#</a> 为什么使用 SetState</h3>
<p>开发中我们并不能直接通过修改 <code v-pre>state</code> 的值来让界面发生更新:</p>
<ul>
<li>因为我们修改了 <code v-pre>state </code>之后，希望 <code v-pre>React</code> 根据最新的 <code v-pre>State</code> 来重新渲染界面，但是这种方式的修改 <code v-pre>React</code> 并不知道数据发生了变化</li>
<li><code v-pre>React</code> 并没有实现类似于 <code v-pre>Vue2</code> 中的 <code v-pre>Object.defineProperty</code> 或者 <code v-pre>Vue3</code> 中的 <code v-pre>Proxy </code>的方式来监听数据的变化</li>
<li>我们必须通过 <code v-pre>setState</code> 来告知 <code v-pre>React</code> 数据已经发生了变化</li>
</ul>
<p>在组件中并没有实现 <code v-pre>setState</code> 的方法，为什么可以调用呢? 原因很简单，<code v-pre>setState</code> 方法是从 <code v-pre>Component</code> 中继承过来的</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token class-name">Component</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setState</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">partialState<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// React源🐎</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setstate-异步更新" tabindex="-1"><a class="header-anchor" href="#setstate-异步更新" aria-hidden="true">#</a> setState 异步更新</h3>
<p><code v-pre>setState</code> 的更新是异步的?</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'hello'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">改变文本</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'hello,world'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">)</span> <span class="token comment">// hello</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>最终打印结果是 <code v-pre>hello</code></li>
<li>可见 <code v-pre>setState</code> 是异步的操作，我们并不能在执行完 <code v-pre>setState</code> 之后<strong>立马拿到</strong>最新的 <code v-pre>state</code> 的结果</li>
</ul>
<p>为什么 <code v-pre>setState</code> 设计为异步呢?</p>
<ul>
<li><code v-pre>setState</code> 设计为异步，可以显著的提升性能:如果每次调用 <code v-pre>setState</code> 都进行一次更新，那么意味着 <code v-pre>render</code> 函数会被频繁调用，界面重新渲染，这样效率是很低的;最好的办法应该是获取到多个更新，之后进行批量更新</li>
<li>如果同步更新了 <code v-pre>state</code>，但是还没有执行 <code v-pre>render</code> 函数，那么 <code v-pre>state</code> 和 <code v-pre>props</code> 不能保持同步。<strong><code v-pre>state</code> 和 <code v-pre>props</code> 不能保持一致性，会在开发中产生很多的问题</strong></li>
</ul>
<h3 id="如何获取异步的结果" tabindex="-1"><a class="header-anchor" href="#如何获取异步的结果" aria-hidden="true">#</a> 如何获取异步的结果</h3>
<p>方式一:<code v-pre>setState</code> 的回调</p>
<ul>
<li><code v-pre>setState</code> 接受两个参数:第二个参数是一个回调函数，这个回调函数会在更新后会执行</li>
<li>格式如下:<code v-pre>setState(partialState, callback)</code></li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'hello,world'</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二：生命周期函数<code v-pre>componentDidUpdate</code></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>    <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token parameter">prevProps<span class="token punctuation">,</span> prevState</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'componentDidUpdate'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setstate-一定是异步吗" tabindex="-1"><a class="header-anchor" href="#setstate-一定是异步吗" aria-hidden="true">#</a> setState 一定是异步吗?</h3>
<p><a href="https://www.jianshu.com/p/8d8f9aa4b033" target="_blank" rel="noopener noreferrer">扩展阅读：React 合成事件和原生事件的区别<ExternalLinkIcon/></a></p>
<ul>
<li>在组件生命周期或 <code v-pre>React</code> 合成事件中，<code v-pre>setState</code> 是异步的</li>
<li>在 <code v-pre>setTimeout</code> 或者原生 <code v-pre>dom</code> 事件中，<code v-pre>setState</code> 是同步的</li>
</ul>
<h3 id="数据的合并" tabindex="-1"><a class="header-anchor" href="#数据的合并" aria-hidden="true">#</a> 数据的合并</h3>
<p>当调用<code v-pre>setState</code>时，并不会覆盖之前的<code v-pre>state</code>,<code v-pre>React</code>底层通过<code v-pre>Object.assign</code>进行合并</p>
<p>比如：{name:'zhang',age:23},修改 age 并不会对 name 造成影响</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用setState改变age</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 底层调用：Object.assign({},prevState,partialStatte)</span>
<span class="token comment">// 即相当于：</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'zhang'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多个-state-的合并" tabindex="-1"><a class="header-anchor" href="#多个-state-的合并" aria-hidden="true">#</a> 多个 state 的合并</h3>
<p>如下代码，<code v-pre>count</code>并不会累加,后调用的 <code v-pre>setState()</code> 将覆盖同一周期内先调用 <code v-pre>setState</code> 的值,因此<code v-pre>count</code>只增加 1</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//    相当于:</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>
  previousState<span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">count</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果后续状态取决于当前状态，可以使用<code v-pre>updater</code>函数的形式代替：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">num</span><span class="token operator">:</span> state<span class="token punctuation">.</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">num</span><span class="token operator">:</span> state<span class="token punctuation">.</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">num</span><span class="token operator">:</span> state<span class="token punctuation">.</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// +3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-的更新机制" tabindex="-1"><a class="header-anchor" href="#react-的更新机制" aria-hidden="true">#</a> React 的更新机制</h2>
<ul>
<li>
<p><code v-pre>react</code>的渲染流程：<code v-pre>jsx</code>---&gt;虚拟<code v-pre>DOM</code>---&gt;真实<code v-pre>DOM</code></p>
</li>
<li>
<p><code v-pre>react</code>的更新流程：</p>
</li>
</ul>
<p><code v-pre>props</code>/<code v-pre>state</code>的改变---&gt;<code v-pre>render</code>函数重新执行----&gt;产生新的虚拟 DOM---&gt;新旧虚拟<code v-pre>DOM</code>进行<code v-pre>diff</code>---&gt;计算出差异进行更新（patch）----&gt;更新到真实的<code v-pre>DOM</code></p>
<h2 id="react-性能优化" tabindex="-1"><a class="header-anchor" href="#react-性能优化" aria-hidden="true">#</a> React 性能优化</h2>
<h3 id="列表中-keys-的作用" tabindex="-1"><a class="header-anchor" href="#列表中-keys-的作用" aria-hidden="true">#</a> 列表中 keys 的作用</h3>
<p>在遍历列表时，总是会提示一个警告，让我们加入一个<code v-pre>key</code>属性</p>
<h4 id="方式一-在最后位置插入数据" tabindex="-1"><a class="header-anchor" href="#方式一-在最后位置插入数据" aria-hidden="true">#</a> 方式一:在最后位置插入数据</h4>
<p>这种情况，有无 <code v-pre>key</code> 意义并不大</p>
<h4 id="方式二-在前面插入数据" tabindex="-1"><a class="header-anchor" href="#方式二-在前面插入数据" aria-hidden="true">#</a> 方式二:在前面插入数据</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;ul>
&lt;li key='333'>333&lt;/li>
&lt;li key='111'>111&lt;/li>
&lt;li key='222'>222&lt;/li>
&lt;/ul>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>这种做法，在没有 <code v-pre>key</code> 的情况下，列表中所有的子元素都需要进行修改</li>
<li>当子元素拥有 <code v-pre>key</code> 时，<code v-pre>React</code> 使用 <code v-pre>key</code> 来匹配原有树上的子元素以及最新树上的子元素,<code v-pre>key</code> 为 111 和 222 的元素仅仅进行位移，不需要进行任何的修改;将 <code v-pre>key</code> 为 333 的元素插入到最前面的位置即可</li>
</ul>
<h4 id="key-的注意事项" tabindex="-1"><a class="header-anchor" href="#key-的注意事项" aria-hidden="true">#</a> key 的注意事项</h4>
<ul>
<li><code v-pre>key</code> 应该是唯一的</li>
<li><code v-pre>key</code> 不要使用随机数(随机数在下一次 <code v-pre>render</code> 时，会重新生成一个数字)</li>
<li>使用 <code v-pre>index</code> 作为 <code v-pre>key</code>，对性能是没有优化的</li>
</ul>
<h3 id="shouldcomponentupdate" tabindex="-1"><a class="header-anchor" href="#shouldcomponentupdate" aria-hidden="true">#</a> shouldComponentUpdate</h3>
<p>只要是修改了 App 中的数据，所有的组件都需要重新 render，进行 diff 算法，性能必然是很低的</p>
<p>事实上，很多的组件没有必须要重新 render；它们调用 render 应该有一个前提，就是依赖的数据（state、 props）发生改变时，再调用自己的 render 方法</p>
<p>如何来控制 render 方法是否被调用呢？通过 shouldComponentUpdate 方法即可</p>
<p>该方法有两个参数：</p>
<ul>
<li>参数一：nextProps ，修改之后，最新的 props 属性</li>
<li>参数二：nextState ，修改之后，最新的 state 属性</li>
</ul>
<p>该方法返回值是一个 boolean 类型：</p>
<ul>
<li>返回值为 true，那么就需要调用 render 方法</li>
<li>返回值为 false，那么就不需要调用 render 方法</li>
<li>默认返回的是 true，也就是只要 state 发生改变，就会调用 render 方法</li>
</ul>
<h3 id="purecomponent" tabindex="-1"><a class="header-anchor" href="#purecomponent" aria-hidden="true">#</a> PureComponent</h3>
<p>如果所有的类，我们都需要手动来实现 shouldComponentUpdate，这样做是很麻烦的</p>
<p>我们来设想一下 shouldComponentUpdate 中的各种判断的目的是什么？</p>
<p><strong>props 或者 state 中的数据是否发生了改变，来决定 shouldComponentUpdate 返回 true 或者 false</strong></p>
<p>事实上 React 已经考虑到了这一点，所以 React 已经默认帮我们实现好了，如何实现呢？ 将 class 继承自 PureComponent</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">movie</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'流浪地球'</span><span class="token punctuation">,</span> <span class="token string">'长津湖'</span><span class="token punctuation">,</span> <span class="token string">'信条'</span><span class="token punctuation">,</span> <span class="token string">'肖生客的救赎'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// shouldComponentUpdate(nextProps, nextState, nextContext) {</span>
  <span class="token comment">//     return nextState.movie !== this.state.movie</span>
  <span class="token comment">// }</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>movie<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">++++</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 直接修改数据</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>movie<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'奇迹笨小孩'</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">movie</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>movie<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 正确做法（新数据替换旧数据）</span>
    <span class="token comment">// this.setState({</span>
    <span class="token comment">//     movie: [...this.state.movie,'奇迹笨小孩'],</span>
    <span class="token comment">// })</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当点击按钮时，电影列表并没有更新。问题在于 <code v-pre>PureComponent</code> 仅仅会对新老 <code v-pre>this.state.movie</code> 的值进行简单的对比。由于代码中 <code v-pre>add</code> 方法改变了同一个 <code v-pre>movie</code> 数组，使得新老 <code v-pre>this.state.movie</code> 比较的其实还是同一个数组。即便实际上数组中的内容已经变了，但是比较结果是相同的。 所以<a href="https://zh-hans.reactjs.org/tutorial/tutorial.html#why-immutability-is-important" target="_blank" rel="noopener noreferrer">不可变性在 React 中非常重要<ExternalLinkIcon/></a></p>
<h3 id="高阶组件-memo" tabindex="-1"><a class="header-anchor" href="#高阶组件-memo" aria-hidden="true">#</a> 高阶组件 memo</h3>
<p>如何让函数组件实现和<code v-pre>PureComponent</code>相同的功能呢？此时需要使用一个高阶组件 memo</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> memo<span class="token punctuation">,</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token comment">// header</span>
<span class="token keyword">const</span> MemoHeader <span class="token operator">=</span> <span class="token function">memo</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">Header</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'header'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">这是header</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// main</span>
<span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MainBanner</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MainProductList</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//  main banner</span>
<span class="token keyword">function</span> <span class="token function">MainBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'mainbanner'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">轮播图组件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token comment">// main productList</span>
<span class="token keyword">function</span> <span class="token function">MainProductList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'mainproductlist'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// footer</span>
<span class="token keyword">function</span> <span class="token function">Footer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'footer'</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">这是footer组件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MemoHeader</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Main</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Footer</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>num<span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">numplus</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">num+++</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">numplus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">num</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>num <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>header 组件使用 memo 进行了包裹，而 footer 组件没有</p>
<p>当我们改变 APP 中的 num 的值时，footer 组件重新 render 了，而 header 组件并没有重新 render
MainBanner、MainProductList 组件没有使用 memo 进行包裹，为什么也没有重新 render？引文他们的父组件 Main 继承自 PureComponent</p>
<h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> refs</h2>
<p><a href="https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#gatsby-focus-wrapper" target="_blank" rel="noopener noreferrer">details<ExternalLinkIcon/></a></p>
<p>在 React 的开发模式中，通常情况下不需要、也不建议直接操作 DOM，但是某些特殊的情况，确实需要获取到 DOM 进行某些操作</p>
<p>如何创建 refs 来获取对应的 DOM 呢？目前有三种方式：</p>
<ul>
<li>
<p>方式一(废弃)：传入字符串，使用时通过 this.refs 传入的字符串格式获取对应的元素</p>
</li>
<li>
<p>方式二(推荐)：传入一个对象,对象是通过 React.createRef() 方式创建出来的；使用时获取到创建的对象其中有一个 current 属性就是对应的元素</p>
</li>
<li>
<p>方式三：传入一个函数，该函数会在 DOM 被挂载时进行回调，这个函数会传入一个元素对象，我们可以自己保存；使用时，直接拿到之前保存的元素对象即可</p>
</li>
</ul>
<p>ref 的值根据节点的类型而有所不同：</p>
<ul>
<li>
<p>当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性</p>
</li>
<li>
<p>当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性</p>
</li>
<li>
<p>你不能在函数组件上使用 ref 属性，因为他们没有实例。</p>
</li>
</ul>
<CodePen
  link="https://codepen.io/zhangfanhang/pen/KKZrOev"
  :theme="$isDarkMode? 'dark': 'light'"
/>
<h3 id="ref-的转发" tabindex="-1"><a class="header-anchor" href="#ref-的转发" aria-hidden="true">#</a> ref 的转发</h3>
<p>如果要在函数组件中使用 <code v-pre>ref</code>，你可以使用 <a href="https://zh-hans.reactjs.org/docs/forwarding-refs.html" target="_blank" rel="noopener noreferrer"><code v-pre>forwardRef</code><ExternalLinkIcon/></a>来转发<code v-pre>ref</code></p>
<p>不管怎样，你可以<strong>在函数组件内部使用 <code v-pre>ref</code> 属性</strong>，只要它指向一个 DOM 元素或 class 组件：</p>
<details class="custom-container details"><summary>详情</summary>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRef<span class="token punctuation">,</span> forwardRef<span class="token punctuation">,</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> EnHome <span class="token operator">=</span> <span class="token function">forwardRef</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">我是Home</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>myRef <span class="token operator">=</span> <span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EnHome</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>myRef<span class="token punctuation">}</span></span> <span class="token attr-name">copName</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">'fuck'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>myRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="react-表单处理" tabindex="-1"><a class="header-anchor" href="#react-表单处理" aria-hidden="true">#</a> React 表单处理</h2>
<p><a href="https://zh-hans.reactjs.org/docs/forms.html#controlled-components" target="_blank" rel="noopener noreferrer">官方文档:表单<ExternalLinkIcon/></a></p>
<h3 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h3>
<ul>
<li>select:React 并不会使用 selected 属性，而是在根 select 标签上使用 value 属性,表示默认选中</li>
<li>处理多个输入官网案例注意 checkbox 的处理逻辑</li>
</ul>
<h2 id="高阶组件" tabindex="-1"><a class="header-anchor" href="#高阶组件" aria-hidden="true">#</a> 高阶组件</h2>
<ul>
<li>首先， 高阶组件本身不是一个组件，而是一个函数；其次，这个函数的参数是一个组件，返回值也是一个组件</li>
<li>高阶组件并不是 React API 的一部分，它是基于 React 的组合特性而形成的设计模式</li>
<li>用途：</li>
</ul>
<h3 id="应用-1-props-的增强" tabindex="-1"><a class="header-anchor" href="#应用-1-props-的增强" aria-hidden="true">#</a> 应用 1:props 的增强</h3>
<p>不修改原有代码的情况下，添加新的 props:</p>
<details class="custom-container details"><summary>code</summary>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">enhanceProps</span><span class="token punctuation">(</span><span class="token parameter">Comp<span class="token punctuation">,</span> otherProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token parameter">props</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Comp</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>otherProps<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        昵称：</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>nickName<span class="token punctuation">}</span><span class="token plain-text">,等级：</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>level<span class="token punctuation">}</span><span class="token plain-text">,区域：
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>region<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">About</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        昵称：</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>nickName<span class="token punctuation">}</span><span class="token plain-text">,等级：</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>level<span class="token punctuation">}</span><span class="token plain-text">,区域：
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>region<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> EnhanceHome <span class="token operator">=</span> <span class="token function">enhanceProps</span><span class="token punctuation">(</span>Home<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token string">'china'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> EnhanceAbout <span class="token operator">=</span> <span class="token function">enhanceProps</span><span class="token punctuation">(</span>About<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token string">'US'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EnhanceHome</span></span> <span class="token attr-name">nickName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>frank<span class="token punctuation">"</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>999<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EnhanceAbout</span></span> <span class="token attr-name">nickName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zhang<span class="token punctuation">"</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<p>利用高阶组件来共享 Context:</p>
<details class="custom-container details"><summary>code</summary>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createContext<span class="token punctuation">,</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token comment">//创建context</span>

<span class="token keyword">const</span> UserContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//定义高阶组件</span>

<span class="token keyword">function</span> <span class="token function">withUser</span><span class="token punctuation">(</span><span class="token parameter">Comp</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token parameter">props</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserContext.Consumer</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Comp</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>value<span class="token punctuation">}</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">UserContext.Consumer</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        昵称：</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>nickName<span class="token punctuation">}</span><span class="token plain-text">,等级：</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>level<span class="token punctuation">}</span><span class="token plain-text">,区域：
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>region<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">About</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        昵称：</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>nickName<span class="token punctuation">}</span><span class="token plain-text">,等级：</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>level<span class="token punctuation">}</span><span class="token plain-text">,区域：
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>region<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> EnhanceHome <span class="token operator">=</span> <span class="token function">withUser</span><span class="token punctuation">(</span>Home<span class="token punctuation">)</span>
<span class="token keyword">const</span> EnhanceAbout <span class="token operator">=</span> <span class="token function">withUser</span><span class="token punctuation">(</span>About<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">UserContext.Provider</span></span>
          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span> <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">'999'</span><span class="token punctuation">,</span> <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token string">'CN'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EnhanceHome</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EnhanceAbout</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">UserContext.Provider</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="应用-2-渲染判断鉴权" tabindex="-1"><a class="header-anchor" href="#应用-2-渲染判断鉴权" aria-hidden="true">#</a> 应用 2:渲染判断鉴权</h3>
<p>在开发中，我们可能遇到这样的场景：</p>
<ul>
<li>某些页面是必须用户登录成功才能进行进入</li>
<li>如果用户没有登录成功，那么直接跳转到登录页面；</li>
</ul>
<p>这个时候，我们就可以使用高阶组件来完成鉴权操作：</p>
<CodePen
  link="https://codepen.io/zhangfanhang/pen/mdXEpdr"
  :theme="$isDarkMode? 'dark': 'light'"
/>
<h3 id="应用-3-生命周期劫持" tabindex="-1"><a class="header-anchor" href="#应用-3-生命周期劫持" aria-hidden="true">#</a> 应用 3:生命周期劫持</h3>
<p>利用高阶函数来劫持生命周期，在生命周期中完成自己的逻辑：</p>
<details class="custom-container details"><summary>code</summary>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">function</span> <span class="token function">handleRenderTime</span><span class="token punctuation">(</span><span class="token parameter">Cop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">RenderTimeCop</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">UNSAFE_componentWillMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>beginTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>endTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> renderTime <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>endTime <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>beginTime
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>copName <span class="token operator">+</span> <span class="token string">'组件渲染用了'</span> <span class="token operator">+</span> renderTime <span class="token operator">+</span> <span class="token string">'ms'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// props 转发下层</span>
    <span class="token comment">/**
     * 高阶组件==> 返回 Xxxx  组件 ===> 返回了组件
     */</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cop</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Home</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token number">19999999999999999999999999999999999</span> <span class="token operator">*</span> <span class="token number">123</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
          asdaskdnasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjaasndjasndjasndjasndjasndjasnsjdnjnjasn
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">About</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">table</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'海底捞'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">9816</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">8972</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'成都'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">8988</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">8437</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'炭烤'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">9876</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">7622</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'常州'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">9595</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">6981</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'麦乐鸡'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">8136</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">5779</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">6789</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">5677</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'苏州'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">8070</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">5261</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'沈阳'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">8266</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">4925</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'大连'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">8407</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">4819</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'水果'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">6137</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">4769</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'商超'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">7251</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">4393</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'面条'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">8320</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">4188</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'广州'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">6525</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">4184</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'麦当劳'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">6927</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">3820</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'杭州'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">5505</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">3377</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'呼和浩特'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">6687</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">2909</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'重庆'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">2973</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">2155</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'济南'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">2457</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">1691</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'美食'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">6080</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">1641</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'温州'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1899</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">1486</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'麻辣'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">3515</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">1046</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'肯德基'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1823</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">808</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'长春'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">8549</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">806</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'小龙虾'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">2243</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">628</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'全家桶'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1951</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">564</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'拉萨'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">699</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">548</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'北京'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">4917</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">545</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'鸡腿'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1710</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">506</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'南京'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1709</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">458</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'送药'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">5384</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">344</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">'跑腿'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1224</span><span class="token punctuation">,</span>
          <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token number">319</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>table<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>user<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>word<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> EnHome <span class="token operator">=</span> <span class="token function">handleRenderTime</span><span class="token punctuation">(</span>Home<span class="token punctuation">)</span>
<span class="token keyword">const</span> EnAbout <span class="token operator">=</span> <span class="token function">handleRenderTime</span><span class="token punctuation">(</span>About<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EnHome</span></span> <span class="token attr-name">copName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EnAbout</span></span> <span class="token attr-name">copName</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">'about'</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h3 id="高阶组件的意义" tabindex="-1"><a class="header-anchor" href="#高阶组件的意义" aria-hidden="true">#</a> 高阶组件的意义</h3>
<p>我们会发现利用高阶组件可以针对某些 React 代码进行更加优雅的处理。</p>
<p>其实早期的 React 有提供组件之间的一种复用方式是 mixin，目前已经不再建议使用：</p>
<ul>
<li>Mixin 可能会相互依赖，相互耦合，不利于代码维护</li>
<li>不同的 Mixin 中的方法可能会相互冲突</li>
<li>Mixin 非常多时，组件是可以感知到的，甚至还要为其做相关处理，这样会给代码造成滚雪球式的复杂性</li>
</ul>
<p>当然，HOC 也有自己的一些缺陷：</p>
<ul>
<li>HOC 需要在原组件上进行包裹或者嵌套，如果大量使用 HOC，将会产生非常多的嵌套，这让调试变得非常困难；</li>
<li>HOC 可以劫持 props，在不遵守约定的情况下也可能造成冲突；</li>
</ul>
<p><strong>Hooks 的出现，是开创性的，它解决了很多 React 之前的存在的问题</strong> 比如 this 指向问题、比如 hoc 的嵌套复杂度问题等等</p>
<h2 id="portals-的使用" tabindex="-1"><a class="header-anchor" href="#portals-的使用" aria-hidden="true">#</a> Portals 的使用</h2>
<p>某些情况下，我们希望渲染的内容独立于父组件，甚至是独立于当前挂载到的 DOM 元素中（默认都是挂载到 id 为 root 的 DOM 元 素上的）</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// createPortal是ReactDOM的API而不是React的API</span>
<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createPortal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span>domName<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例-modal" tabindex="-1"><a class="header-anchor" href="#案例-modal" aria-hidden="true">#</a> 案例：Modal</h3>
<p>开发一个 Modal 组件，它可以将它的子组件渲染到屏幕的中间位置</p>
<details class="custom-container details"><summary>code</summary>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPortal <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom'</span>

<span class="token keyword">function</span> <span class="token function">Modal</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token function">createPortal</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'modal'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Modal</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">我是傻逼</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Modal</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="fragment" tabindex="-1"><a class="header-anchor" href="#fragment" aria-hidden="true">#</a> fragment</h2>
<p>在之前的开发中，我们总是在一个组件中返回内容时包裹一个 div 元素</p>
<p>使用 Fragment 后，无需向 DOM 添加额外节点</p>
<p>React 还提供了 Fragment 的短语法</p>
<p>它看起来像空标签<code v-pre> &lt;&gt; &lt;/&gt;</code></p>
<p>但是，如果我们需要在 Fragment 中添加 key，那么就不能使用短语法</p>
<h2 id="strictmode" tabindex="-1"><a class="header-anchor" href="#strictmode" aria-hidden="true">#</a> StrictMode</h2>
<p>StrictMode 是一个用来突出显示应用程序中潜在问题的工具</p>
<p>与 Fragment 一样，StrictMode 不会渲染任何可见的 UI；</p>
<p>它为其后代元素触发额外的检查和警告</p>
<p>严格模式检查仅在开发模式下运行；它们不会影响生产构建</p>
<h3 id="严格模式检查什么" tabindex="-1"><a class="header-anchor" href="#严格模式检查什么" aria-hidden="true">#</a> 严格模式检查什么？</h3>
<ol>
<li>
<p>识别不安全的生命周期：</p>
</li>
<li>
<p>使用过时的 ref API</p>
</li>
<li>
<p>使用废弃的 findDOMNode 方法 ： 在之前的 React API 中，可以通过 findDOMNode 来获取 DOM，不过已经不推荐使用</p>
</li>
<li>
<p>检查意外的副作用：这个组件的 constructor 会被调用两次（ 这是严格模式下故意进行的操作，让你来查看在这里写的一些逻辑代码被调用多次时，是否会产生一些副作用 在生产环境中，是不会被调用两次的,在 react17 中 console.log 只调用一次）</p>
</li>
<li>
<p>检测过时的 context API：早期的 Context 是通过 static 属性声明 Context 对象属性，通过 getChildContext 返回 Context 对象等方式来使用 Context 的； 目前这种方式已经不推荐使用</p>
</li>
</ol>
<h2 id="render-props" tabindex="-1"><a class="header-anchor" href="#render-props" aria-hidden="true">#</a> render Props</h2>
<p><a href="https://zh-hans.reactjs.org/docs/render-props.html" target="_blank" rel="noopener noreferrer">RenderProps<ExternalLinkIcon/></a>，顾名思义就是将组件的 props 渲染出来。实际上是让组件的 props 接收函数，由函数来渲染内容。将通用的逻辑抽象在该组件的内部，然后依据业务逻辑来调用函数（props 内渲染内容的函数），从而达到重用逻辑的目的。</p>
<p>renderProps 不是新的 API，而是利用 React 自身特点的编码技巧，演化而成的固定模式</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mouse <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>mouse
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K<span class="token punctuation">"</span></span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100px'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">'absolute'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">left</span><span class="token operator">:</span> mouse<span class="token punctuation">.</span>x<span class="token punctuation">,</span>
          <span class="token literal-property property">top</span><span class="token operator">:</span> mouse<span class="token punctuation">.</span>y<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Mouse</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>handleMouseMove <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleMouseMove</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleMouseMove</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">x</span><span class="token operator">:</span> event<span class="token punctuation">.</span>clientX<span class="token punctuation">,</span>
      <span class="token literal-property property">y</span><span class="token operator">:</span> event<span class="token punctuation">.</span>clientY<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'100vh'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">onMouseMove</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleMouseMove<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token comment">/*
          使用 `render`prop 动态决定要渲染的内容，
          而不是给出一个 &lt;Mouse> 渲染结果的静态表示
        */</span><span class="token punctuation">}</span><span class="token plain-text">
        </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">MouseTracker</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">移动鼠标!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mouse</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">mouse</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cat</span></span> <span class="token attr-name">mouse</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>mouse<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="render-props-与-react-purecomponent-同时使用" tabindex="-1"><a class="header-anchor" href="#render-props-与-react-purecomponent-同时使用" aria-hidden="true">#</a> Render props 与 React.PureComponent 同时使用</h3>
<p>如果在<code v-pre>render</code>方法中创建函数，那么使用<code v-pre>render prop</code>会抵消使用<code v-pre>React.PureComponent</code>带来的优势</p>
<p>因为每次调用<code v-pre>render()</code>进行渲染时都会创建一个新的函数，这将导致浅比较<code v-pre>props</code>的时候<code v-pre>prevProps === nextProps</code>始终为<code v-pre>false</code></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Mouse</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
  <span class="token comment">// 与上面相同的代码......</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MouseTracker</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mouse</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">mouse</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cat</span></span> <span class="token attr-name">mouse</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>mouse<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，由于<code v-pre>Mouse</code>组件的<code v-pre>render prop</code>传输的函数是在<code v-pre>render()</code>中定义的，这将导致每次<code v-pre>MouseTracker</code>渲染时生成一个新的函数作为<code v-pre>Mouse</code>组件的<code v-pre>render prop</code>，因而抵消了继承自<code v-pre>React.PureComponent</code>的效果</p>
<h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h3>
<p>为了解决这一问题，可以定义一个实例方法传给<code v-pre>render prop</code></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MouseTracker</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义为实例方法，当我们在渲染中使用它时，它指的是相同的函数</span>
  <span class="token function">renderTheCat</span><span class="token punctuation">(</span><span class="token parameter">mouse</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Cat</span></span> <span class="token attr-name">mouse</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>mouse<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">Move the mouse around!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Mouse</span></span> <span class="token attr-name">render</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>renderTheCat<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


