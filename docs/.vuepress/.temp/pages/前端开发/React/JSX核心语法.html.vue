<template><div><div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
&lt;!-- 使用jsx，并且希望script中的代码被解析，必须在script标签中添加一个属性 -->
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/babel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    const element = &lt;h2>hello world！&lt;/h2>
    ReactDOM.render(element, document.getElementById('app'));
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段 element 变量的声明右侧赋值的标签语法是什么呢？</p>
<ul>
<li>它不是一段字符串（因为没有使用引号包裹），它看起来是一段 <code v-pre>HTML </code>原生，但是我们能在 <code v-pre>js </code>中直接给一个变量赋值<code v-pre> html</code> 吗？其实是不可以的，如果我们将 <code v-pre>type=&quot;text/babel&quot;</code> 去除掉，那么就会出现语法错误</li>
<li>它到底是什么呢？其实它是一段<code v-pre>jsx</code>的语法</li>
</ul>
<h2 id="认识-jsx" tabindex="-1"><a class="header-anchor" href="#认识-jsx" aria-hidden="true">#</a> 认识 JSX</h2>
<ul>
<li><code v-pre>JSX</code>是一种<code v-pre>JavaScript</code>的语法扩展<code v-pre>extension</code>，也在很多地方称之为 <code v-pre>JavaScript XML</code>，因为看起就是一段<code v-pre> XML</code> 语法</li>
<li>它用于描述我们的 <code v-pre>UI </code>界面，并且其完全可以和 <code v-pre>JavaScript </code>融合在一起使用</li>
<li>它不同于 <code v-pre>Vue </code>中的模块语法，你不需要专门学习模板语法中的一些指令（比如 v-for、v-if、v-else、v-bind）</li>
</ul>
<p><strong>在这里，我们只需要知道，<code v-pre>JSX</code> 其实是嵌入到<code v-pre>JavaScript</code>中的一种结构语法</strong></p>
<h2 id="jsx-的书写规范" tabindex="-1"><a class="header-anchor" href="#jsx-的书写规范" aria-hidden="true">#</a> JSX 的书写规范</h2>
<ul>
<li>
<p><code v-pre>JSX </code>的顶层只能有一个根元素，所以我们很多时候会在外层包裹一个 <code v-pre>div</code> 原生</p>
</li>
<li>
<p>为了方便阅读，我们通常在 <code v-pre>jsx </code>的外层包裹一个小括号()，这样可以方便阅读，并且 <code v-pre>jsx </code><strong>可以进行换行书写</strong></p>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>            <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">'hello,world'</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>JSX 中的标签可以是单标签，也可以是双标签(注意：如果是单标签，必须以<code v-pre>/&gt;</code>结尾)</li>
</ul>
<h2 id="jsx-中的注释" tabindex="-1"><a class="header-anchor" href="#jsx-中的注释" aria-hidden="true">#</a> JSX 中的注释</h2>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token punctuation">{</span>
    <span class="token comment">/*我是一段注释*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jsx-嵌入变量" tabindex="-1"><a class="header-anchor" href="#jsx-嵌入变量" aria-hidden="true">#</a> JSX 嵌入变量</h2>
<ul>
<li>情况一：当变量是<code v-pre>Number</code>、<code v-pre>String</code>、<code v-pre>Array</code>类型时，可以直接显示</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>arr<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    )
}
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>情况二：当变量是<code v-pre>null</code>、<code v-pre>undefined</code>、<code v-pre>Boolean</code>类型时，内容为空；</p>
<ul>
<li>如果希望可以显示 <code v-pre>null</code>、<code v-pre>undefined</code>、<code v-pre>Boolean</code>，那么需要转成字符串；</li>
<li>转换的方式有很多，比如<code v-pre>toString</code> 方法、和空字符串拼接，<code v-pre>String(变量)</code>等方式</li>
</ul>
</li>
</ul>
<p>情况三：对象类型不能显示(<strong>Objects are not valid as a React child</strong>)</p>
<h2 id="jsx-嵌入表达式" tabindex="-1"><a class="header-anchor" href="#jsx-嵌入表达式" aria-hidden="true">#</a> JSX 嵌入表达式</h2>
<ul>
<li>运算表达式</li>
<li>三元运算符</li>
<li>执行一个函数</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">xing</span><span class="token operator">:</span> <span class="token string">'zhang'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">ming</span><span class="token operator">:</span> <span class="token string">'fanhang'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span> <span class="token comment">/*执行一个函数*/</span>
    <span class="token punctuation">}</span>
    <span class="token function">getFullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>xing <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>ming
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jsx-绑定属性" tabindex="-1"><a class="header-anchor" href="#jsx-绑定属性" aria-hidden="true">#</a> JSX 绑定属性</h2>
<ul>
<li>比如元素都会有 <code v-pre>title</code> 属性</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>title<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>比如 <code v-pre>img </code>元素会有 <code v-pre>src </code>属性(有坑注意 ⚠️)</li>
<li>比如 <code v-pre>a</code> 元素会有 <code v-pre>href</code> 属性</li>
<li>比如元素可能需要绑定 <code v-pre>class</code></li>
</ul>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>这里必须写<code v-pre>className</code>,不能写<code v-pre>class</code></p>
</div>
<p>绑定普通类名：</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>动态添加类名:</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>  <span class="token operator">...</span><span class="token operator">...</span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token plain-text">
        .active{
            color:red
        }
        .fz30{
            font-size:30px
        }
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

    <span class="token operator">...</span><span class="token operator">...</span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>  <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">'fz30 '</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token operator">?</span><span class="token string">'active'</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">'hello,world'</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React在JSX给了我们开发者足够多的灵活性，你可以像编写JavaScript代码一样，通过一些逻辑来决定是否添加某些class</p>
<p>这个时候我们可以借助于一个第三方的库：<code v-pre>classnames</code> 很明显，这是一个用于动态添加<a href="https://github.com/JedWatson/classnames" target="_blank" rel="noopener noreferrer">classnames<ExternalLinkIcon/></a>的一个库</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token function">classNames</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 'foo bar'</span>
<span class="token function">classNames</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 'foo bar'</span>
<span class="token function">classNames</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">'foo-bar'</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 'foo-bar'</span>
<span class="token function">classNames</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">'foo-bar'</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => ''</span>
<span class="token function">classNames</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 'foo bar'</span>
<span class="token function">classNames</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 'foo bar'</span>

<span class="token comment">// lots of arguments of various types</span>
<span class="token function">classNames</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">duck</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'baz'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">quux</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 'foo bar baz quux'</span>

<span class="token comment">// other falsy values are just ignored</span>
<span class="token function">classNames</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">baz</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 'bar 1'</span>

<span class="token comment">// Arrays will be recursively flattened (扁平化) as per the rules above:</span>
<span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">classNames</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => 'a b c'</span>

<span class="token comment">// If you're in an environment that supports computed (计算) keys (available in ES2015 and Babel) you can use dynamic class names</span>
<span class="token keyword">let</span> buttonType <span class="token operator">=</span> <span class="token string">'primary'</span><span class="token punctuation">;</span>
<span class="token function">classNames</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">btn-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>buttonType<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>比如原生使用内联样式<code v-pre>style</code><div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>在 <code v-pre>jsx </code>中书写<code v-pre> css</code> 属性时，必须使用小驼峰：<code v-pre>font-size</code> 必须写为 <code v-pre>fontSize</code>，且必须为<strong>JavaScript 样式对象</strong></p>
</div>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'140px'</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'140px'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="react-事件绑定" tabindex="-1"><a class="header-anchor" href="#react-事件绑定" aria-hidden="true">#</a> React 事件绑定</h2>
<p>如果原生 <code v-pre>DOM</code> 原生有一个监听事件，我们可以如何操作呢？</p>
<p>方式一：获取 <code v-pre>DOM </code>原生，添加监听事件:<code v-pre>object.onclick=function(){SomeJavaScriptCode}</code></p>
<p>方式二：在 <code v-pre>HTML </code>原生中，直接绑定 <code v-pre>onclick</code>:<code v-pre>&lt;element onclick=&quot;SomeJavaScriptCode&quot; /&gt;</code></p>
<p>在 <code v-pre>React </code>中是如何操作呢？</p>
<p>我们来实现一下 <code v-pre>React </code>中的事件监听，这里主要有两点不同</p>
<p><code v-pre>React </code>事件的命名采用小驼峰式<code v-pre>camelCase</code>，而不是纯小写</p>
<p>我们需要通过<code v-pre>{}</code>传入一个事件处理函数，这个函数会在事件发生时被执行</p>
<h3 id="this-的绑定问题" tabindex="-1"><a class="header-anchor" href="#this-的绑定问题" aria-hidden="true">#</a> this 的绑定问题</h3>
<p>在事件执行后，我们可能需要获取当前类的对象中相关的属性，这个时候需要用到<code v-pre>this</code></p>
<p>如果我们这里直接打印<code v-pre> this</code>，也会发现它是一个 <code v-pre>undefined</code></p>
<p><strong>为什么是 <code v-pre>undefined</code> 呢？</strong></p>
<p>原因是 <code v-pre>btnClick </code>函数并不是我们主动调用的，而且当 <code v-pre>button </code>发生改变时，<code v-pre>React </code>内部调用了 <code v-pre>btnClick</code> 函数</p>
<p>而它内部调用时，并不知道要如何绑定正确的 <code v-pre>this</code></p>
<p><strong>如何解决 <code v-pre>this</code> 的问题呢？</strong></p>
<p>方案一：<code v-pre>bind</code> 给 <code v-pre>btnClick</code> 显示绑定 <code v-pre>this</code></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">btnClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方案二：事件监听时传入箭头函数（推荐）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// this 为上一层render() 函数的this</span>
<span class="token operator">&lt;</span>button
    onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">btnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">></span>
    Click
<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件参数传递" tabindex="-1"><a class="header-anchor" href="#事件参数传递" aria-hidden="true">#</a> 事件参数传递</h3>
<p><a href="https://zh-hans.reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers" target="_blank" rel="noopener noreferrer">官方文档:向事件处理程序传递参数<ExternalLinkIcon/></a></p>
<p>在执行事件函数时，有可能我们需要获取一些参数信息：比如 <code v-pre>event</code> 对象、其他参数</p>
<p>情况一：获取 <code v-pre>event</code> 对象</p>
<ul>
<li>
<p>很多时候我们需要拿到 <code v-pre>event</code> 对象来做一些事情（比如阻止默认行为）</p>
</li>
<li>
<p>假如我们<strong>用不到<code v-pre>this</code></strong>，那么直接传入函数就可以获取到 <code v-pre>event</code> 对象</p>
</li>
</ul>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code>            <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
                        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">'hello,world'</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
                        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>btnClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
                    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token function">btnClick</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>情况二：获取更多参数
有更多参数时，我们最好的方式就是通过箭头函数的方式，此时事件对象必须显式的进行传递</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
    <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">btnClick</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> event<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="token punctuation">></span></span><span class="token plain-text">
    Click
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然下面这种方式也是可以的，注意这里不要显式传入<code v-pre>event</code>参数,通过 <code v-pre>bind</code> 的方式，事件对象会被作为最后一个参数隐式的进行传递</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">btnClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> item<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">Click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="react-条件渲染" tabindex="-1"><a class="header-anchor" href="#react-条件渲染" aria-hidden="true">#</a> React 条件渲染</h2>
<p>某些情况下，界面的内容会根据不同的情况显示不同的内容，或者决定是否渲染某部分内容：</p>
<ul>
<li>在 <code v-pre>vue </code>中，我们会通过指令来控制：比如<code v-pre> v-if</code>、<code v-pre>v-show</code></li>
<li>在 <code v-pre>React</code> 中，所有的条件判断都和普通的 <code v-pre>JavaScript</code> 代码一致</li>
</ul>
<p>常见的条件渲染的方式有哪些呢？</p>
<ol>
<li>条件判断语句:适合逻辑较多的情况</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> welcome <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    welcome <span class="token operator">=</span> <span class="token string">'欢迎回来'</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    welcome <span class="token operator">=</span> <span class="token string">'马上登录'</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>welcome<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>三元运算符:适合逻辑比较简单</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLogin <span class="token operator">?</span> <span class="token string">'欢迎回来'</span> <span class="token operator">:</span> <span class="token string">'马上登录'</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>与运算符&amp;&amp;: 适合如果条件成立，渲染某一个组件；如果条件不成立，什么内容也不渲染；</li>
</ol>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token comment">// ...</span>
<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> login <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>login
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>login <span class="token operator">&amp;&amp;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">IsLogin</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>v-show</code> 的效果:主要是控制 <code v-pre>display</code> 属性是否为 <code v-pre>none</code></p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">display</span><span class="token operator">:</span> isLogin <span class="token operator">?</span> <span class="token string">'block'</span> <span class="token operator">:</span> <span class="token string">'false'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">欢迎回来</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="react-列表渲染" tabindex="-1"><a class="header-anchor" href="#react-列表渲染" aria-hidden="true">#</a> React 列表渲染</h2>
<p>在 <code v-pre>React </code>中并没有像 <code v-pre>Vue</code>模版语法中的 <code v-pre>v-for</code>指令，而且需要我们通过<code v-pre>JavaScript</code>代码的方式组织数据，转成<code v-pre>JSX</code>：</p>
<p>在 <code v-pre>React</code> 中，展示列表最多的方式就是<strong>使用数组的 <code v-pre>map</code>高阶函数</strong>:</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">movie</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'流浪地球'</span><span class="token punctuation">,</span> <span class="token string">'长津湖'</span><span class="token punctuation">,</span> <span class="token string">'信条'</span><span class="token punctuation">,</span> <span class="token string">'肖生客的救赎'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
                    </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>movie<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很多时候我们在展示一个数组中的数据之前，需要先对它进行一些处理：</p>
<p>比如<strong>过滤掉一些内容：<code v-pre>filter</code> 函数</strong></p>
<p>比如<strong>截取数组中的一部分内容：<code v-pre>slice</code> 函数</strong></p>
</div></template>


