<template><div><h1 id="react中的css" tabindex="-1"><a class="header-anchor" href="#react中的css" aria-hidden="true">#</a> React中的CSS</h1>
<p>事实上，css一直是React的痛点，也是被很多开发者吐槽、诟病的一个点</p>
<p>在这一点上，Vue做的要确实要好于React</p>
<p>相比而言，React官方并没有给出在React中统一的样式风格</p>
<p>以下介绍几种React中的CSS解决方案</p>
<h2 id="内联样式" tabindex="-1"><a class="header-anchor" href="#内联样式" aria-hidden="true">#</a> 内联样式</h2>
<p>内联样式是官方推荐的一种css样式的写法：</p>
<ul>
<li>style 接受一个采用小驼峰命名属性的 JavaScript 对象，而不是 CSS 字符串</li>
<li>并且可以引用state中的状态来设置相关的样式；</li>
</ul>
<p>内联样式的优点:</p>
<ul>
<li>内联样式, 样式之间不会有冲突</li>
<li>可以动态获取当前state中的状态</li>
</ul>
<p>内联样式的缺点：</p>
<ul>
<li>写法上都需要使用驼峰标识</li>
<li>某些样式没有提示</li>
<li>大量的样式, 代码混乱</li>
<li>某些样式无法编写(比如伪类/伪元素)</li>
</ul>
<p>所以官方依然是希望内联样式和普通的css来结合编写</p>
<h2 id="普通的css" tabindex="-1"><a class="header-anchor" href="#普通的css" aria-hidden="true">#</a> 普通的css</h2>
<p>普通的css我们通常会编写到一个单独的文件，之后再进行引入</p>
<p>这样的编写方式和普通的网页开发中编写方式是一致的</p>
<p>组件化开发中我们总是希望组件是一个独立的模块，即便是样式也只是在自己内部生效，不会相互影响。但是普通的css都属于全局的css，样式之间会相互影响</p>
<p>这种编写方式最大的问题是样式之间会相互层叠掉</p>
<h2 id="css-modules" tabindex="-1"><a class="header-anchor" href="#css-modules" aria-hidden="true">#</a> css modules</h2>
<p><code v-pre>css modules</code>并不是<code v-pre>React</code>特有的解决方案，而是所有使用了类似于<code v-pre>webpack</code>配置的环境下都可以使用的</p>
<p><code v-pre>React</code>的脚手架已经内置了<code v-pre>css modules</code>的配置：<code v-pre>.css/.less/.scss </code>等样式文件都修改成 <code v-pre>.module.css/.module.less/.module.scss</code> ，之后就可以引用并且进行使用了</p>
<p><code v-pre>css modules</code>确实解决了局部作用域的问题，也是很多人喜欢在<code v-pre>React</code>中使用的一种方案</p>
<p>但是这种方案也有自己的缺陷：</p>
<ul>
<li>引用的类名，不能使用连接符<code v-pre>(.home-title)</code>，在<code v-pre>JavaScript</code>中是不识别的</li>
<li>所有的<code v-pre>className</code>都必须使用<code v-pre>{style.className} </code>的形式来编写</li>
<li>不方便动态来修改某些样式，依然需要使用内联样式的方式</li>
</ul>
<p>如果你觉得上面的缺陷还算OK，那么你在开发中完全可以选择使用<code v-pre>css modules</code>来编写，并且也是在React中很受欢迎的一种方式</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> style <span class="token keyword">from</span> <span class="token string">'app.moudle.css'</span>

<span class="token comment">// 单个</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">.</span>fz20<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token comment">// 多个</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>style<span class="token punctuation">.</span>fz20<span class="token punctuation">,</span>style<span class="token punctuation">.</span>red<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
<span class="token comment">// 多个 优雅的写法 composes</span>
<span class="token literal-property property">参考</span><span class="token operator">:</span> https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>ruanyifeng<span class="token punctuation">.</span>com<span class="token operator">/</span>blog<span class="token operator">/</span><span class="token number">2016</span><span class="token operator">/</span><span class="token number">06</span><span class="token operator">/</span>css_modules<span class="token punctuation">.</span>html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-in-js" tabindex="-1"><a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a> CSS in JS</h2>
<p>“CSS-in-JS” 是指一种模式，其中 CSS 由 JavaScript 生成而不是在外部文件中定义；注意此功能并不是 React 的一部分，而是由第三方库提供。 React 对样式如何定义并没有明确态度</p>
<p>React的思想中认为逻辑本身和UI是无法分离的，所以才会有了JSX的语法。样式呢？样式也是属于UI的一部分。 事实上CSS-in-JS的模式就是一种将样式（CSS）也写入到JavaScript中的方式，并且可以方便的使用JavaScript的状态。所以React有被人称之为 All in JS</p>
<p>styled-components是社区最流行的CSS-in-JS库</p>
<p>安装styled-components：<code v-pre>yarn add styled-components</code></p>
<h2 id="styled-components的基本使用" tabindex="-1"><a class="header-anchor" href="#styled-components的基本使用" aria-hidden="true">#</a> styled-components的基本使用</h2>
<p>styled-components的本质是通过函数的调 用，最终创建出一个组件：</p>
<ul>
<li>这个组件会被自动添加上一个不重复的 class</li>
<li>styled-components会给该class添加相关的样式</li>
</ul>
<p>另外，它支持类似于CSS预处理器一样的特性：</p>
<ul>
<li>
<p>支持样式嵌套，如嵌套后代选择器</p>
</li>
<li>
<p>可以通过&amp;符号获取当前元素</p>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> Panel <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex: 0.5;
  height: 80vh;
  border-radius: 50px;
  margin: 10px;
  transition: all 300ms ease-in;

  &amp;.active {
    flex: 5;
  }
  </span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用伪类选择器、伪元素等</li>
</ul>
<h3 id="props、attrs属性" tabindex="-1"><a class="header-anchor" href="#props、attrs属性" aria-hidden="true">#</a> props、attrs属性</h3>
<h4 id="props可以穿透" tabindex="-1"><a class="header-anchor" href="#props可以穿透" aria-hidden="true">#</a> props可以穿透</h4>
<p>props可以被传递给styled组件,<strong>并映射到组件html结构最外层的标签上</strong></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Panel</span></span>
		<span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeCurrentNum</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">classNames</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>currentNum <span class="token operator">===</span> num<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>num<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Panel</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>获取props需要通过<code v-pre>${}</code>传入一个插值函数，props会作为该函数的参数,这种方式可以有效的解决动态样式的问题</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>PureComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> HomeWrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token parameter">props</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>color<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token template-punctuation string">`</span></span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">HomeWrapper</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>red<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">我是home组件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">HomeWrapper</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="添加attrs属性" tabindex="-1"><a class="header-anchor" href="#添加attrs属性" aria-hidden="true">#</a> 添加attrs属性</h4>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> Wrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token punctuation">.</span><span class="token function">attrs</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
        padding<span class="token operator">-</span><span class="token function-variable function">left</span><span class="token operator">:</span><span class="token parameter">props</span><span class="token operator">=></span>props<span class="token punctuation">.</span>pleft <span class="token operator">||</span> <span class="token string">'5px'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
 padding-left:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token parameter">props</span><span class="token operator">=></span>props<span class="token punctuation">.</span>pleft<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="styled高级特性" tabindex="-1"><a class="header-anchor" href="#styled高级特性" aria-hidden="true">#</a> styled高级特性</h3>
<h4 id="支持样式的继承" tabindex="-1"><a class="header-anchor" href="#支持样式的继承" aria-hidden="true">#</a> 支持样式的继承</h4>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">const</span> MainButtion<span class="token operator">=</span>styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
			color:#000;
			font-size:30px;
			padding:8px 30px;
</span><span class="token template-punctuation string">`</span></span>
<span class="token keyword">const</span> MenuButton<span class="token operator">=</span><span class="token function">styled</span><span class="token punctuation">(</span>MainButton<span class="token punctuation">)</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
		background-color:red;
</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="styled设置主题" tabindex="-1"><a class="header-anchor" href="#styled设置主题" aria-hidden="true">#</a> styled设置主题</h4>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>PureComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> styled<span class="token punctuation">,</span> <span class="token punctuation">{</span>ThemeProvider<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> HomeWrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  font-size: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token parameter">props</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>fontSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
  color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token parameter">props</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>color<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token template-punctuation string">`</span></span>

<span class="token keyword">const</span> MenuWrapper <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  font-size: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token parameter">props</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>fontSize<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
</span><span class="token template-punctuation string">`</span></span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">HomeWrapper</span></span><span class="token punctuation">></span></span><span class="token plain-text">我是home组件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">HomeWrapper</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">Menu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MenuWrapper</span></span><span class="token punctuation">></span></span><span class="token plain-text">我是menu组件</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MenuWrapper</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ThemeProvider</span></span> <span class="token attr-name">theme</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"30px"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'yellow'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Home</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ThemeProvider</span></span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


