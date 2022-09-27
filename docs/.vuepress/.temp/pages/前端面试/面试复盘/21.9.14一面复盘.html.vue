<template><div><h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h2>
<h3 id="html5-新增了那些标签" tabindex="-1"><a class="header-anchor" href="#html5-新增了那些标签" aria-hidden="true">#</a> html5 新增了那些标签？</h3>
<p><code v-pre>header</code>,<code v-pre>nav</code>,<code v-pre>footer</code>,<code v-pre>aside</code>,<code v-pre>article</code>,<code v-pre>section</code>,<code v-pre>audio</code>,<code v-pre>video</code></p>
<p><a href="https://www.cnblogs.com/progor/p/8945071.html" target="_blank" rel="noopener noreferrer">html5 常见新增标签<ExternalLinkIcon/></a></p>
<h3 id="html5-提供了两种在客户端存储数据的新方法-说一下它们的区别" tabindex="-1"><a class="header-anchor" href="#html5-提供了两种在客户端存储数据的新方法-说一下它们的区别" aria-hidden="true">#</a> html5 提供了两种在客户端存储数据的新方法,说一下它们的区别？</h3>
<ul>
<li>
<p><code v-pre>localStorage</code> 长期存储数据，<strong>浏览器关闭后数据不丢失</strong> ,作用域在所有<code v-pre>同源窗口</code>中共享</p>
</li>
<li>
<p><code v-pre>sessionStorage</code> 的数据在<strong>浏览器关闭后自动删除</strong>,作用域当前会话窗口</p>
</li>
</ul>
<h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h2>
<h3 id="垂直水平居中怎么实现" tabindex="-1"><a class="header-anchor" href="#垂直水平居中怎么实现" aria-hidden="true">#</a> 垂直水平居中怎么实现？</h3>
<ul>
<li>absolute 元素：利用 top:50%,left:50%和 margin-top,margin-left (<strong>元素尺寸已知可用</strong>)</li>
<li>absolute 元素：利用 top:50%,left:50%和利用 transfrom:translate(-50%,-50%)(<strong>元素尺寸不知道也可以用</strong>)</li>
<li>absolute 元素： top,left,bottom,right=0 和 margin:auto(<strong>元素尺寸不知道也可以用</strong>)</li>
<li>flex：align-items:center;justify-content:center;</li>
</ul>
<h3 id="定位有那几种-绝对和相对的区别" tabindex="-1"><a class="header-anchor" href="#定位有那几种-绝对和相对的区别" aria-hidden="true">#</a> 定位有那几种，绝对和相对的区别?</h3>
<p>相对定位，绝对定位，固定定位</p>
<p><a href="https://zfhblog.top/qian-duan-kai-fa/css/css3/fu-dong-yu-ding-wei.html#%E5%AE%9A%E4%BD%8D" target="_blank" rel="noopener noreferrer">定位<ExternalLinkIcon/></a></p>
<h3 id="如何清除浮动" tabindex="-1"><a class="header-anchor" href="#如何清除浮动" aria-hidden="true">#</a> 如何清除浮动？</h3>
<p><a href="https://zfhblog.top/qian-duan-kai-fa/css/css3/fu-dong-yu-ding-wei.html#%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8" target="_blank" rel="noopener noreferrer">清除浮动<ExternalLinkIcon/></a></p>
<h2 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> js</h2>
<h3 id="数组如何转为字符串-字符串转数组呢" tabindex="-1"><a class="header-anchor" href="#数组如何转为字符串-字符串转数组呢" aria-hidden="true">#</a> 数组如何转为字符串，字符串转数组呢？</h3>
<p>数组的<code v-pre>join()</code>方法可以使数组转为字符串；字符串的<code v-pre>split()</code>方法可以使字符串转为数组。</p>
<ul>
<li>join()的参数表示以什么字符作为连接符，如果留空则默认以逗号分隔，如同调用 tostring()方法</li>
<li>split()的参数表示以什么字符拆分字符串，一般不能留空=&gt;(str.split(''))</li>
</ul>
<p>数组调用 <code v-pre>toString()</code> 和<code v-pre>String()</code>也可以转为字符串</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 1,2,3,4,1,2,3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// 1,2,3,4,1,2,3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组字符串相关方法" tabindex="-1"><a class="header-anchor" href="#数组字符串相关方法" aria-hidden="true">#</a> 数组字符串相关方法</h3>
<ul>
<li>
<p><a href="https://zfhblog.top/qian-duan-kai-fa/javascript/jsji-chu/bian-liang-yu-shu-ju-lei-xing.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95" target="_blank" rel="noopener noreferrer">字符串常用方法<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://zfhblog.top/qian-duan-kai-fa/javascript/jsji-chu/shu-zu.html#%E6%95%B0%E7%BB%84%E7%9A%84%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95" target="_blank" rel="noopener noreferrer">数组常用方法<ExternalLinkIcon/></a></p>
</li>
</ul>
<h3 id="const-和-let-的区别" tabindex="-1"><a class="header-anchor" href="#const-和-let-的区别" aria-hidden="true">#</a> const 和 let 的区别？</h3>
<p>const 和 let 的最大区别是：<strong>const 一旦声明必须立即初始化</strong></p>
<h3 id="数组-es6-新增方法" tabindex="-1"><a class="header-anchor" href="#数组-es6-新增方法" aria-hidden="true">#</a> 数组 es6 新增方法</h3>
<p><a href="https://zfhblog.top/qian-duan-kai-fa/javascript/es6/es6de-xin-zeng-fang-fa.html#%E6%95%B0%E7%BB%84%E7%9A%84%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95" target="_blank" rel="noopener noreferrer">ES6_数组的新增方法<ExternalLinkIcon/></a></p>
<h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h2>
<h3 id="v-if-和-v-show-的区别" tabindex="-1"><a class="header-anchor" href="#v-if-和-v-show-的区别" aria-hidden="true">#</a> v-if 和 v-show 的区别</h3>
<p><a href="https://zfhblog.top/qian-duan-kai-fa/qian-duan-kuang-jia/vue.js/vuehe-xin.html#%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93" target="_blank" rel="noopener noreferrer">条件渲染<ExternalLinkIcon/></a></p>
<p>两者都可用来控制 DOM 元素的显示和隐藏，区别在于</p>
<p>v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件被适当地销毁和重建；v-if 也是惰性的，就是初始条件为假的话什么也不做，直到条件第一次变为真时才开始渲染条件块。相比之下，v-show 就简单得多，无论初始条件是什么都会进行渲染，只是简单地基于 CSS 进行切换，隐藏的话就加入 display:none 的属性值。所以 v-if 具有较高的切换开销，适用于运行时条件很少改变的场景，而 v-show 具有较高的初始化渲染开销，适用于需要频繁切换的场景。</p>
<h3 id="说几个生命周期钩子" tabindex="-1"><a class="header-anchor" href="#说几个生命周期钩子" aria-hidden="true">#</a> 说几个生命周期钩子</h3>
<p><a href="https://zfhblog.top/qian-duan-kai-fa/qian-duan-kuang-jia/vue.js/vuehe-xin.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F" target="_blank" rel="noopener noreferrer">生命周期<ExternalLinkIcon/></a></p>
<h3 id="watch-和-computed-的区别" tabindex="-1"><a class="header-anchor" href="#watch-和-computed-的区别" aria-hidden="true">#</a> watch 和 computed 的区别？</h3>
<p><a href="https://zfhblog.top/qian-duan-kai-fa/qian-duan-kuang-jia/vue.js/vuehe-xin.html#watch%E5%AF%B9%E6%AF%94computed" target="_blank" rel="noopener noreferrer">watch 对比 computed<ExternalLinkIcon/></a></p>
<ul>
<li>
<p>computed
1、 computed 是计算属性，也就是依赖某个值或者 props 通过计算得来得数据；
2、 computed 的值是在 getter 执行之后进行缓存的，只有在它依赖的数据发生变化，会重新调用 getter 来计算；
3、 不支持异步，当 computed 内有异步操作时无效，无法监听数据的变化；</p>
</li>
<li>
<p>watch
1、watch 是监听器，可以监听某一个数据，然后执行相应的操作；
2、不支持缓存，数据变直接会触发相应的操作；
3、监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；
4、支持异步操作；</p>
</li>
</ul>
<p>什么时候用 computed 什么时候用 watch 比较合适？</p>
<p>当多个属性影响一个属性的时候，建议用 computed，比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">fullName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>secondName
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fullName 是由 firstName 和 secondName 影响的，这种情况就适合 computed；</p>
<p>当一个值发生变化之后，会引起一系列的操作，这种情况就适合用 watch；</p>
<h3 id="说一下-vue-组件通讯" tabindex="-1"><a class="header-anchor" href="#说一下-vue-组件通讯" aria-hidden="true">#</a> 说一下 Vue 组件通讯</h3>
<ul>
<li>
<p><code v-pre>props</code> 和 <code v-pre>$emit</code>:父组件向子组件传递数据是通过 <code v-pre>props</code> 传递的，子组件给父组件传递数据是通过<code v-pre>$emit</code> 触发事件来做到的</p>
</li>
<li>
<p><code v-pre>$parent</code>,<code v-pre>$children</code> 获取当前组件的父组件和当前组件的子组件</p>
</li>
<li>
<p><code v-pre>$attrs</code> 和<code v-pre>$listeners</code> A-&gt;B-&gt;C (孙传爷)。Vue 2.4 开始提供了<code v-pre>$attrs</code> 和<code v-pre>$listeners</code> 来解决这个问题</p>
</li>
<li>
<p>父组件中通过 <code v-pre>provide</code> 来提供变量，然后在子组件中通过<code v-pre>inject</code>来注入变量。(官方不推荐在实际业务中使用，但是写组件库时很常用)</p>
</li>
<li>
<p><code v-pre>$refs</code> 获取组件实例</p>
</li>
<li>
<p><code v-pre>envetBus</code> 兄弟组件数据传递 这种情况下可以使用事件总线的方式</p>
</li>
<li>
<p>vuex 状态管理</p>
</li>
</ul>
</div></template>


