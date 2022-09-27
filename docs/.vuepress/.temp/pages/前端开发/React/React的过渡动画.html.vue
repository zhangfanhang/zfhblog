<template><div><p><a href="https://mp.weixin.qq.com/s/14HneI7SpfrRHKtqgosIiA" target="_blank" rel="noopener noreferrer">React 系列十四 - React 过渡动画<ExternalLinkIcon/></a></p>
<p><a href="https://juejin.cn/post/6844904068125573133" target="_blank" rel="noopener noreferrer">React 之 react-transition-group<ExternalLinkIcon/></a></p>
<h2 id="react-transition-group" tabindex="-1"><a class="header-anchor" href="#react-transition-group" aria-hidden="true">#</a> react-transition-group</h2>
<p>在开发中，我们想要给一个组件的显示和消失添加某种过渡动画，可以很好的增加用户体验。</p>
<p>当然，我们可以通过原生的 CSS 来实现这些过渡动画，但是 React 社区为我们提供了 react-transition-group 用来完成过渡动画。</p>
<p>React 曾为开发者提供过动画插件 react-addons-css-transition-group，后由社区维护，形成了现在的 react-transition-group。</p>
<p>这个库可以帮助我们方便的实现组件的 入场 和 离场 动画，使用时需要进行额外的安装：</p>
<p><code v-pre>yarn add react-transition-group</code></p>
<h2 id="csstransition" tabindex="-1"><a class="header-anchor" href="#csstransition" aria-hidden="true">#</a> CSSTransition</h2>
<p>CSSTransition 执行过程中，有三个状态：appear、enter、exit；</p>
<p>它们有三种状态，需要定义对应的 CSS 样式：</p>
<ul>
<li>第一类,开始状态：对于的类是-appear、-enter、-exit；</li>
<li>第二类,执行动画：对应的类是-appear-active、-enter-active、-exit-active；</li>
<li>第三类,执行结束：对应的类是-appear-done、-enter-done、-exit-done；</li>
</ul>
<h3 id="csstransition-常见属性" tabindex="-1"><a class="header-anchor" href="#csstransition-常见属性" aria-hidden="true">#</a> CSSTransition 常见属性</h3>
<h4 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h4>
<p>触发进入或者退出状态</p>
<ul>
<li>如果添加了 <code v-pre>unmountOnExit</code>，那么该组件会在执行退出动画结束后被移除掉；</li>
<li>当 in 为 true 时，触发进入状态，会添加-enter、-enter-acitve 的 class 开始执行动画，当动画执行结束后，会移除两个 class，并且添加-enter-done 的 class；</li>
<li>当 in 为 false 时，触发退出状态，会添加-exit、-exit-active 的 class 开始执行动画，当动画执行结束后，会移除两个 class，并且添加-enter-done 的 class；</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">比如说，一个 div 的显示/隐藏动画</p>
<ol>
<li>div 显示:对应的 class 为 card-enter card-enter-active 动画走完为 card-enter-done</li>
<li>div 消失:对应的 class 为 card-exit card-exit-active 动画走完为 card-exit-done</li>
</ol>
</div>
<h4 id="classnames" tabindex="-1"><a class="header-anchor" href="#classnames" aria-hidden="true">#</a> classNames</h4>
<p>动画 class 的名称</p>
<p>决定了在编写 css 时，对应的 class 名称：比如 card-enter、card-enter-active、card-enter-done；</p>
<h4 id="timeout" tabindex="-1"><a class="header-anchor" href="#timeout" aria-hidden="true">#</a> timeout</h4>
<p>类添加删除的时间</p>
<h4 id="appear" tabindex="-1"><a class="header-anchor" href="#appear" aria-hidden="true">#</a> appear</h4>
<p>是否在初次进入添加动画（需要和 in 同时为 true）</p>
<h4 id="unmountonexit" tabindex="-1"><a class="header-anchor" href="#unmountonexit" aria-hidden="true">#</a> unmountOnExit</h4>
<p>退出后卸载组件(移除 DOM 节点)</p>
<h4 id="csstransition-的钩子函数" tabindex="-1"><a class="header-anchor" href="#csstransition-的钩子函数" aria-hidden="true">#</a> CSSTransition 的钩子函数</h4>
<p>主要为了检测动画的执行过程，来完成一些 JavaScript 的操作</p>
<ul>
<li>onEnter：在进入动画之前被触发(对应 onExit)</li>
<li>onEntering：在应用进入动画时被触发(对应 onExiting)</li>
<li>onEntered：在应用进入动画结束后被触发(对应 onEntered)</li>
</ul>
<h2 id="switchtransition" tabindex="-1"><a class="header-anchor" href="#switchtransition" aria-hidden="true">#</a> SwitchTransition</h2>
<p>SwitchTransition 可以完成两个组件之间切换的炫酷动画：</p>
<ul>
<li>比如我们有一个按钮需要在 on 和 off 之间切换，我们希望看到 on 先从左侧退出，off 再从右侧进入</li>
<li>这个动画在 vue 中被称之为 vue transition modes(过渡模式)</li>
<li>react-transition-group 中使用 SwitchTransition 来实现该动画</li>
</ul>
<p>SwitchTransition 中主要有一个属性：mode，有两个值</p>
<ul>
<li>in-out：表示新组件先进入，旧组件再移除</li>
<li>out-in：表示就组件先移除，新组建再进入</li>
</ul>
<p>如何使用 SwitchTransition 呢？</p>
<ul>
<li>SwitchTransition 组件里面要有 CSSTransition 组件，不能直接包裹你想要切换的组件</li>
<li>SwitchTransition 里面的 CSSTransition 组件不再像以前那样接受 in 属性来判断元素是何种状态，取而代之的是 key 属性</li>
</ul>
<details class="custom-container details"><summary>coolCode</summary>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CSSTransition<span class="token punctuation">,</span> SwitchTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-transition-group'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Card<span class="token punctuation">,</span> Avatar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  EditOutlined<span class="token punctuation">,</span>
  EllipsisOutlined<span class="token punctuation">,</span>
  SettingOutlined<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">'styled-components'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token operator">=</span> Card

<span class="token keyword">const</span> BtnWrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  text-align: center;
  width: 100%;
</span><span class="token template-punctuation string">`</span></span>

<span class="token keyword">const</span> CardWrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .card-enter {
    opacity: 0;
    transform: scale(0.7);
  }

  .card-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms;
  }

  .card-exit {
    opacity: 1;
    transform: scale(1);
  }

  .card-exit-active {
    opacity: 0;
    transform: scale(0.7);
    transition: all 300ms;
  }

  .btn-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .btn-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 1000ms;
  }

  .btn-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .btn-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 1000ms;
  }
</span><span class="token template-punctuation string">`</span></span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">showControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isShow<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CardWrapper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BtnWrapper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SwitchTransition</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>out-in<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CSSTransition</span></span>
              <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isShow <span class="token operator">?</span> <span class="token string">'on'</span> <span class="token operator">:</span> <span class="token string">'off'</span><span class="token punctuation">}</span></span>
              <span class="token attr-name">classNames</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span>
              <span class="token attr-name">timeout</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">}</span></span>
            <span class="token punctuation">></span></span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span>
                <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token string">'20px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
                <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showControl</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isShow <span class="token operator">?</span> <span class="token string">'隐藏'</span> <span class="token operator">:</span> <span class="token string">'显示'</span><span class="token punctuation">}</span><span class="token plain-text">
              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CSSTransition</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SwitchTransition</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">BtnWrapper</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CSSTransition</span></span>
          <span class="token attr-name">in</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isShow<span class="token punctuation">}</span></span>
          <span class="token attr-name">classNames</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>card<span class="token punctuation">"</span></span>
          <span class="token attr-name">timeout</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">300</span><span class="token punctuation">}</span></span>
          <span class="token attr-name">unmountOnExit</span>
        <span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Card</span></span>
            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
            <span class="token attr-name">cover</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>
                <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example<span class="token punctuation">"</span></span>
                <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.runoob.com/wp-content/uploads/2013/07/js-logo.png<span class="token punctuation">"</span></span>
              <span class="token punctuation">/></span></span>
            <span class="token punctuation">}</span></span>
            <span class="token attr-name">actions</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SettingOutlined</span></span>
                <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'打开设置'</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EditOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">EllipsisOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">}</span></span>
          <span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Meta</span></span>
              <span class="token attr-name">avatar</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Avatar</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqmVbQu2VMVVpfj2vg9PeXQNw1wy3tn3oZlWyD6O6nTSxkKZkEOX9aDyAMV2fWCm9Ce5GXho5HmsA/132?imageView2/1/w/80/h/80<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
              <span class="token punctuation">}</span></span>
              <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>frank zhang<span class="token punctuation">"</span></span>
              <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>love fe,love life<span class="token punctuation">"</span></span>
            <span class="token punctuation">/></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Card</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CSSTransition</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">CardWrapper</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="transitiongroup" tabindex="-1"><a class="header-anchor" href="#transitiongroup" aria-hidden="true">#</a> TransitionGroup</h2>
<p>当我们有一组动画时，需要将这些 CSSTransition 放入到一个 TransitionGroup 中来完成动画</p>
</div></template>


