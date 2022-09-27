<template><div><h2 id="javascript-纯函数" tabindex="-1"><a class="header-anchor" href="#javascript-纯函数" aria-hidden="true">#</a> JavaScript 纯函数</h2>
<p><a href="https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/" target="_blank" rel="noopener noreferrer">函数式编程指北<ExternalLinkIcon/></a></p>
<p>函数式编程中有一个概念叫纯函数，JavaScript 符合函数式编程的范式，所以也有纯函数的概念</p>
<p>在 React 中，纯函数的概念非常重要，React 要求所有组件都必须像纯函数一样保护它们的 props 不被修改。在 Redux 中也非常重要，所以有必须来回顾一下纯函数。</p>
<p>纯函数的维基百科定义：</p>
<p>在程序设计中，若一个函数符合以下条件，那么这个函数被称为纯函数：</p>
<ul>
<li>此函数在相同的输入值时，需产生相同的输出。函数的输出和输入值以外的其他隐藏信息或状态无关，也和由 I/O 设备产生的 外部输出无关</li>
<li>该函数不能有语义上可观察的函数副作用，诸如“触发事件”，使输出设备输出，或更改输出值以外物件的内容等</li>
</ul>
<p>当然上面的定义会过于的晦涩，所以简单总结一下：</p>
<ul>
<li><strong>确定的输入，一定会产生确定的输出</strong></li>
<li><strong>函数在执行过程中，不能产生副作用</strong></li>
</ul>
<p>为什么纯函数在函数式编程中非常重要呢？</p>
<ul>
<li>因为你可以安心的写和安心的用</li>
<li>你在写的时候保证了函数的纯度，只是但是实现自己的业务逻辑即可，不需要关心传入的内容或者依赖其他的外部变量</li>
<li>你在用的时候，你确定你的输入内容不会被任意篡改，并且自己确定的输入，一定会有确定的输出</li>
</ul>
<h2 id="为什么需要-redux" tabindex="-1"><a class="header-anchor" href="#为什么需要-redux" aria-hidden="true">#</a> 为什么需要 redux</h2>
<p>JavaScript 开发的应用程序，已经变得越来越复杂了：</p>
<ul>
<li>JavaScript 需要管理的状态越来越多，越来越复杂</li>
<li>这些状态包括服务器返回的数据、缓存数据、用户操作产生的数据等等，也包括一些 UI 的状态，比如某些元素是否被选中， 是否显示加载动效，当前分页</li>
</ul>
<p>管理不断变化的 state 是非常困难的：</p>
<ul>
<li>状态之间相互会存在依赖，一个状态的变化会引起另一个状态的变化，View 页面也有可能会引起状态的变化</li>
<li>当应用程序复杂时，state 在什么时候，因为什么原因而发生了变化，发生了怎么样的变化，会变得非常难以控制和追踪</li>
</ul>
<p>React 是在视图层帮助我们解决了 DOM 的渲染过程，但是 State 依然是留给我们自己来管理：</p>
<ul>
<li>无论是组件定义自己的 state，还是组件之间的通信通过 props 进行传递；也包括通过 Context 进行数据之间的共享；</li>
<li>React 主要负责帮助我们管理视图，state 如何维护最终还是我们自己来决定</li>
</ul>
<p>Redux 就是一个帮助我们管理 State 的容器：Redux 是 JavaScript 的状态容器，提供了可预测的状态管理</p>
<p>Redux 除了和 React 一起使用之外，它也可以和其他界面库一起来使用（比如 Vue），并且它非常小（包括依赖在内，只有 2kb）</p>
<h2 id="redux-的核心理念-action" tabindex="-1"><a class="header-anchor" href="#redux-的核心理念-action" aria-hidden="true">#</a> Redux 的核心理念-action</h2>
<p>Redux 要求我们通过 action 来更新数据：</p>
<ul>
<li>
<p>所有数据的变化，必须通过派发（dispatch）action 来更新</p>
</li>
<li>
<p>action 是一个普通的 JavaScript 对象，用来描述这次更新的 type 和 content</p>
</li>
</ul>
<p>强制使用 action 的好处是可以清晰的知道数据到底发生了什么样的变化，所有的数据变化都是可跟追、可预测的</p>
<h2 id="redux-的核心理念-reducer" tabindex="-1"><a class="header-anchor" href="#redux-的核心理念-reducer" aria-hidden="true">#</a> Redux 的核心理念 - reducer</h2>
<p>但是如何将 state 和 action 联系在一起呢？答案就是 reducer</p>
<ul>
<li>reducer 是一个<strong>纯函数</strong></li>
<li>reducer 做的事情就是将传入的 state 和 action 结合起来生成一个新的 state</li>
</ul>
<h2 id="redux-的三大原则" tabindex="-1"><a class="header-anchor" href="#redux-的三大原则" aria-hidden="true">#</a> Redux 的三大原则</h2>
<h3 id="单一数据源" tabindex="-1"><a class="header-anchor" href="#单一数据源" aria-hidden="true">#</a> 单一数据源</h3>
<ul>
<li>整个应用程序的 state 被存储在一颗 object tree 中，并且这个 object tree 只存储在一个 store 中</li>
<li>Redux 并没有强制让我们不能创建多个 Store，但是那样做并不利于数据的维护</li>
<li>单一的数据源可以让整个应用程序的 state 变得方便维护、追踪、修改</li>
</ul>
<h3 id="state-是只读的" tabindex="-1"><a class="header-anchor" href="#state-是只读的" aria-hidden="true">#</a> State 是只读的</h3>
<ul>
<li>唯一修改 State 的方法一定是触发 action，不要试图在其他地方通过任何的方式来修改 State</li>
<li>这样就确保了 View 或网络请求都不能直接修改 state，它们只能通过 action 来描述自己想要如何修改 state</li>
<li>这样可以保证所有的修改都被集中化处理，并且按照严格的顺序来执行，所以不需要担心 race condition（竟态）的问题</li>
</ul>
<h3 id="使用纯函数来执行修改" tabindex="-1"><a class="header-anchor" href="#使用纯函数来执行修改" aria-hidden="true">#</a> 使用纯函数来执行修改</h3>
<ul>
<li>通过 reducer 将 旧 state 和 actions 联系在一起，并且返回一个新的 State</li>
<li>随着应用程序的复杂度增加，我们可以将 reducer 拆分成多个小的 reducers，分别操作不同 state tree 的一部分</li>
<li>但是所有的 reducer 都应该是纯函数，不能产生任何的副作用</li>
</ul>
<h2 id="redux-使用流程" tabindex="-1"><a class="header-anchor" href="#redux-使用流程" aria-hidden="true">#</a> Redux 使用流程</h2>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/redux使用流程.png" alt="redux使用流程" loading="lazy"></p>
<h2 id="在-react-项目中使用-redux" tabindex="-1"><a class="header-anchor" href="#在-react-项目中使用-redux" aria-hidden="true">#</a> 在 react 项目中使用 redux</h2>
<ol>
<li>创建 store 文件夹，创建 4 个文件：actionCreators.js（创建 action 的文件），constants.js（定义 action 名称常量),reducer.js(将 aciton 和 state 联系在一起)，index.js(导出创建好的 store)</li>
</ol>
<p>这里实现一个简单的 couter 案例：</p>
<details class="custom-container details"><summary>actionCreators.js</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">JIA_ACTION</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./constants'</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token constant">JIAA_ACTION</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">JIA_ACTION</span><span class="token punctuation">,</span>
    num<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="custom-container details"><summary>constants.js</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">JIA_ACTION</span> <span class="token operator">=</span> <span class="token string">'JIA_ACTION'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<details class="custom-container details"><summary>reducer.js</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">JIA_ACTION</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./constants'</span>

<span class="token keyword">const</span> defaultStore <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultStore<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">JIA_ACTION</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">counter</span><span class="token operator">:</span> action<span class="token punctuation">.</span>num <span class="token operator">+</span> state<span class="token punctuation">.</span>counter <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="custom-container details"><summary>index.js</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">'./reducer'</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<ol start="2">
<li>接着创建 utils 文件夹，这里编写 connect 工具函数。创建 connect.js(抽象 react 与 redux 连接逻辑的工具函数)，context.js(利用 context 全局共享 store)</li>
</ol>
<details class="custom-container details"><summary>connect.js</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> storeContext <span class="token keyword">from</span> <span class="token string">'./context'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token parameter">mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">enhanceHOC</span><span class="token punctuation">(</span><span class="token parameter">WrapperComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">class</span> <span class="token class-name">ReduxConnect</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
      <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">storeState</span><span class="token operator">:</span> context<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>WrapperComponent
              <span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">}</span>
              <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">mapStateToProps</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
              <span class="token punctuation">{</span><span class="token operator">...</span><span class="token function">mapDispatchToProps</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>dispatch<span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log(this.context)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>unsubscribe <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// { counter:1}</span>
            <span class="token literal-property property">storeState</span><span class="token operator">:</span> <span class="token function">mapStateToProps</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>

      <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    ReduxConnect<span class="token punctuation">.</span>contextType <span class="token operator">=</span> storeContext
    <span class="token keyword">return</span> ReduxConnect
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<details class="custom-container details"><summary>context.js</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">const</span> StoreContext <span class="token operator">=</span> react<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> StoreContext
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<ol start="3">
<li>在项目 index.js 文件中引入 store，利用 StoreContext 的 Provider 组件，让 App 组件共享 store</li>
</ol>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./redux/store'</span>
<span class="token keyword">import</span> StoreContext <span class="token keyword">from</span> <span class="token string">'./redux/utils/context'</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">StoreContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">StoreContext.Provider</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>在想要使用 store 的组件中定义 mapStateToProps,mapDispatchToProps。把需要的 state 和 dispatch 映射到想要使用 store 的组件的 props 中</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">import</span> connect <span class="token keyword">from</span> <span class="token string">'./utils/connect'</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">JIAA_ACTION</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./store/actionCreators'</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">counter</span><span class="token operator">:</span> state<span class="token punctuation">.</span>counter<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token parameter">dispatch</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token constant">JIAA_ACTION</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> App <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">extends</span> PureComponent <span class="token punctuation">{</span>
  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>counter<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">></span>
          <span class="token operator">+</span><span class="token number">3</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> EnApp <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> EnApp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然已经实现了 connect、Provider 这些帮助我们完成连接 redux、react 的辅助工具，但是实际上 redux 官方提供了 react-redux 的库，可以直接在项目中使用，并且实现的逻辑会更加的严谨和高效</p>
<ol>
<li>安装：yarn add react-redux</li>
<li>在 index.js 中将 Provider 组件替换成 react-redux 中的 Provider 组件</li>
</ol>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Provider</span></span> <span class="token attr-name">store</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Provider</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>组件中将 connect 替换成 react-redux 中 connect</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-redux'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="redux-中异步操作" tabindex="-1"><a class="header-anchor" href="#redux-中异步操作" aria-hidden="true">#</a> redux 中异步操作</h2>
<p>​ 事实上，网络请求到的数据也属于我们状态管理的一部分，更好的一种方式应该是将其也交给 redux 来管理</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/redux-异步操作.png" alt="redux-异步操作" loading="lazy"></p>
<p>但是在 redux 中如何可以进行异步的操作呢？</p>
<ul>
<li>答案就是使用中间件（Middleware）</li>
<li>学习过 Express 或 Koa 框架的童鞋对中间件的概念一定不陌生</li>
<li>在这类框架中，Middleware 可以帮助我们在请求和响应之间嵌入一些操作的代码，比如 cookie 解析、日志记录、文件压缩等操作</li>
</ul>
<h3 id="理解中间件" tabindex="-1"><a class="header-anchor" href="#理解中间件" aria-hidden="true">#</a> 理解中间件</h3>
<p>redux 也引入了中间件（Middleware）的概念：</p>
<ul>
<li>
<p>这个中间件的目的是在 dispatch 的 action 和最终达到的 reducer 之间，扩展一些自己的代码。比如日志记录、调用异步接口、添加代码调试功能等等</p>
</li>
<li>
<p>我们现在要做的事情就是发送异步的网络请求，所以我们可以添加对应的中间件。官网推荐的、包括演示的网络请求的中间件是使用 redux-thunk</p>
</li>
</ul>
<p>redux-thunk 是如何做到让我们可以发送异步的请求呢？</p>
<ul>
<li>
<p>我们知道，默认情况下的 dispatch(action)，action 需要是一个 JavaScript 的对象</p>
</li>
<li>
<p>redux-thunk 可以让 dispatch(action 函数)，action 可以是一个函数</p>
</li>
<li>
<p>该函数会被调用，并且会传给这个函数一个 dispatch 函数和 getState 函数：</p>
<ul>
<li>dispatch 函数用于我们之后再次派发 action</li>
<li>getState 函数考虑到我们之后的一些操作需要依赖原来的状态，用于让我们可以获取之前的一些状态</li>
</ul>
</li>
</ul>
<h3 id="使用-redux-thunk" tabindex="-1"><a class="header-anchor" href="#使用-redux-thunk" aria-hidden="true">#</a> 使用 redux-thunk</h3>
<ol>
<li>
<p>安装 redux-thunk:<code v-pre>yarn add redux-thunk</code></p>
</li>
<li>
<p>在创建 store 时传入应用了 middleware 的 enhance 函数</p>
<ul>
<li>通过 applyMiddleware 来结合多个 Middleware, 返回一个 enhancer</li>
<li>将 enhancer 作为第二个参数传入到 createStore 中</li>
</ul>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> thunkMiddleware <span class="token keyword">from</span> <span class="token string">'redux-thunk'</span>
<span class="token keyword">const</span> storeEnhancer <span class="token operator">=</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunkMiddleware<span class="token punctuation">)</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> storeEnhancer<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>在 actionCreators.js 定义一个返回函数的 action：</li>
</ol>
<ul>
<li>注意：这里不是返回一个对象了，而是一个函数</li>
<li>该函数在 dispatch 之后会被执行</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getbannerDataAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token parameter">dispath</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'react-thuck数据接受成功'</span><span class="token punctuation">)</span>
      axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'http://123.207.32.32:8000/home/multidata'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log(res)</span>
        <span class="token comment">// console.log(res.data.data.banner.list)</span>
        <span class="token function">dispath</span><span class="token punctuation">(</span><span class="token function">bannerAction</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>banner<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>映射该 action 的 dispatch 操作,和相关的 store 中的 state：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">banner</span><span class="token operator">:</span> state<span class="token punctuation">.</span>banner<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token parameter">dispatch</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">getbanner</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">getbannerDataAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>在 componentDidMount 调用，就可以拿到数据</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">getbanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>banner<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redux-devtools" tabindex="-1"><a class="header-anchor" href="#redux-devtools" aria-hidden="true">#</a> redux-devtools</h2>
<p>利用这个工具，我们可以知道每次状态是如何被修改的，修改前后的状态变化等等</p>
<ol>
<li>在对应的浏览器中安装相关的插件（Chrome 浏览器扩展商店中搜索 Redux DevTools 即可</li>
<li>对 store 的 index.js 进行改造</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware<span class="token punctuation">,</span> compose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">'./reducer'</span>
<span class="token keyword">import</span> thunkMiddleware <span class="token keyword">from</span> <span class="token string">'redux-thunk'</span>
<span class="token comment">// 应用中间件</span>
<span class="token keyword">const</span> storeEnhancer <span class="token operator">=</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunkMiddleware<span class="token punctuation">)</span>
<span class="token comment">// 合并多个enhancer</span>
<span class="token keyword">const</span> composeEnhancers <span class="token operator">=</span>
  window<span class="token punctuation">.</span><span class="token function">__REDUX_DEVTOOLS_EXTENSION_COMPOSE__</span><span class="token punctuation">(</span>tra<span class="token punctuation">)</span> <span class="token operator">||</span> compose
<span class="token comment">// 官方不推荐createStore 需要使用redux工具包🔧</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token function">composeEnhancers</span><span class="token punctuation">(</span>storeEnhancer<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于基本的 redux,只需要添加：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>
  reducer <span class="token comment">/* preloadedState, */</span><span class="token punctuation">,</span>
  <span class="token operator">+</span>window<span class="token punctuation">.</span>__REDUX_DEVTOOLS_EXTENSION__ <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span><span class="token function">__REDUX_DEVTOOLS_EXTENSION__</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redux-代码文件拆分" tabindex="-1"><a class="header-anchor" href="#redux-代码文件拆分" aria-hidden="true">#</a> Redux 代码文件拆分</h2>
<p>随着项目的不断扩大，可能导致 store 结构越来越复杂，action 越来越多。所有有必要对代码结构进行拆分</p>
<p>代码结构如下：</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/redux代码拆分.png" alt="redux代码拆分" loading="lazy"></p>
<p>主目录 reducer.js:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> counterReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./counter'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> bannerReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./banner'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">counterInfo</span><span class="token operator">:</span> <span class="token function">counterReducer</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>counterInfo<span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bannerInfo</span><span class="token operator">:</span> <span class="token function">bannerReducer</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>bannerInfo<span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Banner.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">GET_BANNER_DATA</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./constants'</span>
<span class="token comment">// banner默认数据</span>
<span class="token keyword">const</span> defaultBannerState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">banner</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token comment">// banner独有的reducer逻辑</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">bannerReducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> defaultBannerState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">GET_BANNER_DATA</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">banner</span><span class="token operator">:</span> action<span class="token punctuation">.</span>banner <span class="token punctuation">}</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="combinereducers-函数" tabindex="-1"><a class="header-anchor" href="#combinereducers-函数" aria-hidden="true">#</a> combineReducers 函数</h2>
<p>目前我们合并的方式是通过每次调用 reducer 函数自己来返回一个新的对象</p>
<p>事实上，redux 给我们提供了一个 combineReducers 函数可以方便的让我们对多个 reducer 进行合并：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> counterReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./counter'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> bannerReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./banner'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'redux'</span>

<span class="token keyword">const</span> reducer <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">counterInfo</span><span class="token operator">:</span> counterReducer<span class="token punctuation">,</span>
  <span class="token literal-property property">bannerInfo</span><span class="token operator">:</span> bannerReducer<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> reducer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


