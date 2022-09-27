<template><div><h2 id="变量类型和计算" tabindex="-1"><a class="header-anchor" href="#变量类型和计算" aria-hidden="true">#</a> 变量类型和计算</h2>
<h3 id="聊聊-javascript-中的数据类型" tabindex="-1"><a class="header-anchor" href="#聊聊-javascript-中的数据类型" aria-hidden="true">#</a> 聊聊 JavaScript 中的数据类型</h3>
<div class="custom-container tip">
<p class="custom-container-title">参考</p>
<p><a href="https://segmentfault.com/a/1190000019300557" target="_blank" rel="noopener noreferrer">【Step-By-Step】一周面试题 &amp;&amp; 答案汇总 / 01<ExternalLinkIcon/></a></p>
<p><a href="https://juejin.cn/post/6918892282192068622" target="_blank" rel="noopener noreferrer">【面试说】聊聊 JavaScript 中的数据类型<ExternalLinkIcon/></a></p>
</div>
<p>目前，JS 原始类型有六种，分别为:</p>
<ul>
<li>Boolean</li>
<li>String</li>
<li>Number</li>
<li>Undefined</li>
<li>Null</li>
<li>Symbol(ES6 新增)</li>
</ul>
<p>ES10 新增了一种基本数据类型：BigInt</p>
<p>复杂数据类型只有一种: Object</p>
<p>null 不是一个对象，尽管 typeof null 输出的是 object，这是一个历史遗留问题，JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，null 表示为全零，所以将它错误的判断为 object</p>
<h3 id="js-值类型和引用类型的区别" tabindex="-1"><a class="header-anchor" href="#js-值类型和引用类型的区别" aria-hidden="true">#</a> js 值类型和引用类型的区别</h3>
<div class="custom-container tip">
<p class="custom-container-title">参考</p>
<p><a href="https://segmentfault.com/a/1190000019300557" target="_blank" rel="noopener noreferrer">【Step-By-Step】一周面试题 &amp;&amp; 答案汇总 / 01<ExternalLinkIcon/></a></p>
</div>
<p>内存的分配不同</p>
<ul>
<li>基本数据类型存储在栈中</li>
<li>复杂数据类型存储在堆中，栈中存储的变量，是指向堆中的引用地址。</li>
</ul>
<p>访问机制不同</p>
<ul>
<li>基本数据类型是按值访问</li>
<li>复杂数据类型按引用访问，JS 不允许直接访问保存在堆内存中的对象，在访问一个对象时，首先得到的是这个对象在堆内存中的地址，然后再按照这个地址去获得这个对象的值</li>
</ul>
<p>复制变量时不同(a=b)</p>
<ul>
<li>基本数据类型：a=b;是将 b 中保存的原始值的副本赋值给新变量 a,a 和 b 完全独立，互不影响</li>
<li>复杂数据类型：a=b;将 b 保存的对象内存的引用地址赋值给了新变量 a;a 和 b 指向了同一个堆内存地址，其中一个值发生了改变，另一个也会改变</li>
</ul>
<p>比较变量时不同(== , ===)</p>
<ul>
<li>
<p>基本数据类型：==比较值是否相等(<strong>先进行类型转换再确定操作数是否相等</strong>---<strong><em>引自 js 高级程序设计（第四版） P71</em></strong>)，===不仅比较值是否相等，还会比较数据类型是否相同</p>
</li>
<li>
<p>引用数据类型：不管是 == 还是 === ，都是比较内存地址是否相同，即比较是否都指向同一个对象</p>
</li>
</ul>
<p>参数传递的不同(实参/形参)</p>
<p>函数传参都是按值传递(栈中的存储的内容)：基本数据类型，拷贝的是值；复杂数据类型，拷贝的是引用地址</p>
<h3 id="typeof-和-instanceof-的区别" tabindex="-1"><a class="header-anchor" href="#typeof-和-instanceof-的区别" aria-hidden="true">#</a> typeof 和 instanceof 的区别？</h3>
<div class="custom-container tip">
<p class="custom-container-title">拓展-参考</p>
<p><a href="https://juejin.cn/post/6991653255847772167" target="_blank" rel="noopener noreferrer">手写实现 typeof 和 instanceof，并了解原理<ExternalLinkIcon/></a></p>
</div>
<p>typeof 对于<code v-pre>string</code>,<code v-pre>boolean</code>,<code v-pre>number</code>,<code v-pre>undefined</code>,<code v-pre>function</code>,<code v-pre>symbol</code>等类型可正确判断</p>
<p>对于<code v-pre>null</code>,<code v-pre>array</code>,<code v-pre>object</code>判断结果均为 object</p>
<p>instanceof 代码形式为<code v-pre>object instanceof constructor</code>（<strong>object 是否是 constructor 的实例</strong>），该操作符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上</p>
<h3 id="变量计算-注意某些类型转换的坑" tabindex="-1"><a class="header-anchor" href="#变量计算-注意某些类型转换的坑" aria-hidden="true">#</a> 变量计算，注意某些类型转换的坑</h3>
<ol>
<li>字符串拼接</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">10</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">'10'</span> <span class="token comment">// 只要有一个不是数字，就是字符串拼接</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">+</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment">// 110 10010 11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>== 运算符</li>
</ol>
<p><strong>除了 == null 之外 其它地方一律用===</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span>b <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 相当于 if(obj.b===null||obj.b===undefined)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'b'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>if 语句和逻辑运算</li>
</ol>
<p>truly 变量:!!a===true 的变量</p>
<p>falsy 变量:!!a===false 的变量</p>
<p>以下是 falsy 变量。除此之外都是 truly 变量</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">!</span><span class="token operator">!</span><span class="token number">0</span> <span class="token operator">==</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token number">NaN</span> <span class="token operator">==</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token string">''</span> <span class="token operator">==</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token keyword">undefined</span> <span class="token operator">==</span> <span class="token boolean">false</span>
<span class="token operator">!</span><span class="token operator">!</span><span class="token boolean">false</span> <span class="token operator">==</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>if 语句:判断该变量是 truly 变量还是 falsy 变量</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逻辑判断:短路计算</p>
<h3 id="和-有什么区别" tabindex="-1"><a class="header-anchor" href="#和-有什么区别" aria-hidden="true">#</a> == 和 === 有什么区别？</h3>
<p>对于 == 来说，如果对比双方的类型不一样的话，就会进行类型转换</p>
<p>假如我们需要对比 x 和 y 是否相同，就会进行如下判断流程：</p>
<ol>
<li>
<p>首先会判断两者类型是否相同。相同的话就是比大小了</p>
</li>
<li>
<p>类型不相同的话，那么就会进行类型转换</p>
</li>
<li>
<p>会先判断是否在对比 <code v-pre>null</code> 和 <code v-pre>undefined</code>，是的话就会返回 <code v-pre>true</code></p>
</li>
<li>
<p>判断两者类型是否为 <code v-pre>string</code> 和 <code v-pre>number</code>，是的话就会将字符串转换为 <code v-pre>number</code></p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token number">1</span> <span class="token operator">==</span> <span class="token string">'1'</span>
      ↓
<span class="token number">1</span> <span class="token operator">==</span>  <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>判断其中一方是否为 <code v-pre>boolean</code>，是的话就会把 <code v-pre>boolean</code> 转为 <code v-pre>number</code> 再进行判断</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'1'</span> <span class="token operator">==</span> <span class="token boolean">true</span>
        ↓
<span class="token string">'1'</span> <span class="token operator">==</span>  <span class="token number">1</span>
        ↓
 <span class="token number">1</span>  <span class="token operator">==</span>  <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>判断其中一方是否为 <code v-pre>object</code> 且另一方为 <code v-pre>string</code>、<code v-pre>number</code>或者 <code v-pre>symbol</code>，是的话就会把 object 转为原始类型再进行判断</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'1'</span> <span class="token operator">==</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'yck'</span> <span class="token punctuation">}</span>
        ↓
<span class="token string">'1'</span> <span class="token operator">==</span> <span class="token string">'[object Object]'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">扩展：[] == ![] 和 {} == !{}</p>
<ul>
<li>[] == ![]</li>
</ul>
<p>ECMAScript 中规定，逻辑非 (!) 的优先级高于相等操作符 ( == )</p>
<p>在比较 [] == ![] 的时候，先计算 ![] 得到布尔值 false</p>
<p>所以实际上比较的是 [] == false</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Number</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// ->  0 == 0  ->  true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>{} == !{}</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">==</span> <span class="token operator">!</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token operator">-</span><span class="token operator">></span>  <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">==</span> <span class="token boolean">false</span>  <span class="token operator">-</span><span class="token operator">></span>  <span class="token function">Number</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>  <span class="token operator">-</span><span class="token operator">></span>  <span class="token number">NaN</span> <span class="token operator">==</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有一个操作数是 NaN，相等操作符返回 false</p>
<p>所以 {} == !{} 的结果是 false</p>
</div>
<h2 id="如何理解-js-原型-隐式原型和显式原型-和原型链" tabindex="-1"><a class="header-anchor" href="#如何理解-js-原型-隐式原型和显式原型-和原型链" aria-hidden="true">#</a> 如何理解 JS 原型（隐式原型和显式原型）和原型链</h2>
<p>在 JavaScript 中是使用<code v-pre>构造函数</code>来新建一个<code v-pre>对象</code>的，每一个构造函数的内部都有一个 <code v-pre>prototype</code> 属性，这个就是<code v-pre>显式原型</code>，它的属性值是一个<strong>对象</strong>，这个对象包含了可以由该构造函数的<strong>所有实例共享的属性和方法</strong>。当使用构造函数新建一个对象后，在这个对象的内部将包含一个指针(<strong>proto</strong>)，这个指针指向构造函数的 prototype 属性对应的值，这个就是<code v-pre>隐式原型__proto__</code>。ES5 中新增了一个 <code v-pre>Object.getPrototypeOf()</code> 方法，可以通过这个方法来获取对象的原型。</p>
<p>当访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是<code v-pre>原型链</code>的概念。所以这就是新建的对象为什么能够使用 toString() 等方法的原因。</p>
<p><strong>原型链的终点是 <code v-pre>null</code></strong>,因为 <code v-pre>Object.prototype.__proto__</code>指向 null</p>
<h2 id="作用域和闭包" tabindex="-1"><a class="header-anchor" href="#作用域和闭包" aria-hidden="true">#</a> 作用域和闭包</h2>
<h3 id="什么是作用域-什么是自由变量" tabindex="-1"><a class="header-anchor" href="#什么是作用域-什么是自由变量" aria-hidden="true">#</a> 什么是作用域？什么是自由变量？</h3>
<div class="custom-container tip">
<p class="custom-container-title">参考</p>
<p><a href="https://blog.csdn.net/weixin_40387601/article/details/80515665" target="_blank" rel="noopener noreferrer">函数的作用域是什么？js 的作用域有几种？<ExternalLinkIcon/></a></p>
</div>
<p><strong>全局作用域</strong></p>
<p>声明在任何函数之外的顶层作用域的变量就是<code v-pre>全局变量</code>，这样的变量拥有<code v-pre>全局作用域</code></p>
<p>所有未定义直接赋值的变量自动声明为<code v-pre>全局作用域</code>=&gt; <code v-pre>a=100</code></p>
<p>所有 window 对象的属性拥有全局作用域</p>
<p>全局作用域有很大的弊端，过多的全局作用域变量会污染全局命名空间，容易引起命名冲突。</p>
<p><strong>函数作用域</strong></p>
<p>在函数内部定义的变量(<code v-pre>局部变量</code>)，拥有<code v-pre>函数作用域</code></p>
<p>只有函数被调用的时候才会形成<code v-pre>函数作用域</code></p>
<p>内层作用域可以访问外层作用域，反之不行</p>
<p><strong>块级作用域</strong></p>
<p>使用 ES6 中新增的 let 和 const 指令可以声明<code v-pre>块级作用域</code></p>
<p>块作用域内的变量只要出了自己被定义的那个代码块，那么就无法访问了。</p>
<p>在循环中比较适合绑定块级作用域，这样就可以把声明的计数器变量限制在循环内部。</p>
<p><strong>自由变量</strong></p>
<p><strong>一个变量</strong>在当前作用域没有定义，但被使用了；向上级作用域，一层一层依次寻找，直至找到为止；如果到全局作用域都没找到，则报错 xx is not defined</p>
<p><strong>作用域链</strong></p>
<p>在当前作用域中查找所需变量，但是该作用域没有这个变量，那这个变量就是<strong>自由变量</strong>。如果在自己作用域找不到该变量就去<strong>父级作用域查找</strong>，依次向上级作用域查找，<strong>直到访问到 window 对象就被终止</strong>，这一层层的关系就是<code v-pre>作用域链</code>。</p>
<h3 id="什么是闭包-闭包会用在哪里" tabindex="-1"><a class="header-anchor" href="#什么是闭包-闭包会用在哪里" aria-hidden="true">#</a> 什么是闭包？闭包会用在哪里？</h3>
<p><a href="https://juejin.cn/post/6844903474212143117" target="_blank" rel="noopener noreferrer">破解前端面试（80% 应聘者不及格系列）：从闭包说起<ExternalLinkIcon/></a></p>
<p>在函数中被使用，但它既不是函数参数、也不是函数的局部变量，而是一个不属于当前作用域的变量，此时它相对于当前作用域来说，就是一个自由变量。而引用了<code v-pre>自由变量</code>的函数，就叫<code v-pre>闭包</code></p>
<p>闭包有两个常用的用途：</p>
<ul>
<li>闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量，可以使用这种方法来<strong>创建私有变量</strong>如：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      data<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token function">createCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
c<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>闭包的另一个用途是使已经运行结束的函数上下文中的变量对象(<code v-pre>每个上下文都有一个关联的变量对象，而这个上下文中定义的所有变量和函数都存在于这个对象上</code>)继续留在内存中，因为闭包函数保留了这个变量对象的引用，<strong>所以这个变量对象不会被回收</strong></li>
</ul>
<p><code v-pre>🌟闭包经典面试题</code>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先因为 setTimeout 是异步的，所以会先把循环全部执行完毕，这时候 i 就是 6 了，所以会输出一堆 6。那如果我们要正确输出 1 ～ 6,该如何处理呢？解决办法有三种：</p>
<ul>
<li>第一种是使用闭包的方式</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> j <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上述代码中，首先使用了立即执行函数将 i 传入函数内部，这个时候值就被固定在了参数 j 上面不会改变，当下次执行 timer 这个闭包的时候，就可以使用外部函数的变量 j，从而达到目的</p>
<ul>
<li>第二种就是使用 setTimeout 的第三个参数，这个参数会被当成 timer 函数的参数传入。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span>
    <span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token parameter">j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
    i
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>第三种就是使用 let 定义 i 了来解决问题了，这个也是最为推荐的方式</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> i <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="this-有几种赋值情况" tabindex="-1"><a class="header-anchor" href="#this-有几种赋值情况" aria-hidden="true">#</a> this 有几种赋值情况</h3>
<p><strong>this 取什么值函数执行时确认的，不是在函数定义时确认的</strong></p>
<ul>
<li>
<p>作为普通函数使用</p>
</li>
<li>
<p>call apply bind</p>
</li>
<li>
<p>作为对象方法被调用</p>
</li>
</ul>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/作为对象方法被调用.png" alt="作为对象方法被调用" loading="lazy"></p>
<ul>
<li>
<p>在 class 方法中调用</p>
</li>
<li>
<p><strong>箭头函数的<code v-pre>this</code>永远取它上层作用域的<code v-pre>this</code></strong></p>
</li>
<li>
<p>原型中的 this</p>
</li>
</ul>
<p><a href="https://mp.weixin.qq.com/s/hYm0JgBI25grNG_2sCRlTA" target="_blank" rel="noopener noreferrer">前端面试之彻底搞懂 this 指向<ExternalLinkIcon/></a></p>
<h3 id="手写-bind-函数" tabindex="-1"><a class="header-anchor" href="#手写-bind-函数" aria-hidden="true">#</a> 手写 bind 函数</h3>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。</p>
</div>
<p>bind 的用法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'this'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token string">'this is fn1'</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fn2 <span class="token operator">=</span> <span class="token function">fn1</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手写 bind</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">bind1</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">self</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-10-个-a-点击弹出序号" tabindex="-1"><a class="header-anchor" href="#创建-10-个-a-点击弹出序号" aria-hidden="true">#</a> 创建 10 个 a,点击弹出序号</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span>
        a<span class="token punctuation">.</span>innerText <span class="token operator">=</span> i
        a<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'block'</span>
        root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      root<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>innerText<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h2>
<h3 id="异步和同步的区别" tabindex="-1"><a class="header-anchor" href="#异步和同步的区别" aria-hidden="true">#</a> 异步和同步的区别？</h3>
<p>基于 JS 是单线程语言，异步不会阻塞代码执行，同步会阻塞代码执行</p>
<h3 id="手写-promise-加载图片" tabindex="-1"><a class="header-anchor" href="#手写-promise-加载图片" aria-hidden="true">#</a> 手写 promise 加载图片</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>promise加载图片<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>root<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> <span class="token constant">URL</span> <span class="token operator">=</span> <span class="token string">'https://zfhblog.top/titlelogo.png'</span>
      <span class="token keyword">const</span> root <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>

      <span class="token keyword">function</span> <span class="token function">loadImg</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span>
          <span class="token comment">// 加载完</span>
          img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// 加载失败</span>
          img<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> err <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">图片加载失败了,图片地址为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
          img<span class="token punctuation">.</span>src <span class="token operator">=</span> url
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token function">loadImg</span><span class="token punctuation">(</span><span class="token constant">URL</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">img</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          root<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我第二个执行then'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我第一个执行，同步代码'</span><span class="token punctuation">)</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我第三个执行setTimeout'</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="settimeout" tabindex="-1"><a class="header-anchor" href="#settimeout" aria-hidden="true">#</a> setTimeout</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>输出结果</code>: 1 , 3 , 5 , 4 , 2</p>
<h3 id="下面代码的输出结果是-async-函数" tabindex="-1"><a class="header-anchor" href="#下面代码的输出结果是-async-函数" aria-hidden="true">#</a> 下面代码的输出结果是（async 函数）？</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'I made it!'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异步函数始终返回一个 promise. await 仍然需要等待 promise 的解决：当我们调用 getData（）并将其赋值给 data，此时 data 为 getData 方法返回的一个<code v-pre>挂起的 promise</code>，该 promise 并没有解决。
如果我们想要访问已解决的值 ' I made it！'，可以在 data 上使用 then（）方法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>data<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="js-web-api-dom" tabindex="-1"><a class="header-anchor" href="#js-web-api-dom" aria-hidden="true">#</a> JS-Web-API-DOM</h2>
<h3 id="dom-是那种数据结构-树" tabindex="-1"><a class="header-anchor" href="#dom-是那种数据结构-树" aria-hidden="true">#</a> DOM 是那种数据结构？---树</h3>
<h3 id="dom-操作常见的-api" tabindex="-1"><a class="header-anchor" href="#dom-操作常见的-api" aria-hidden="true">#</a> DOM 操作常见的 API</h3>
<ul>
<li>
<p>DOM 节点操作</p>
</li>
<li>
<p>DOM 结构操作</p>
</li>
</ul>
<h3 id="property-和-attribute-的区别" tabindex="-1"><a class="header-anchor" href="#property-和-attribute-的区别" aria-hidden="true">#</a> property 和 attribute 的区别</h3>
<ul>
<li>
<p>property : 修改对象属性，不会体现到 html 结构中</p>
</li>
<li>
<p>attribute : 修改 html 属性，会改变 html 结构</p>
</li>
</ul>
<p>两者都有可能引起 DOM 重新渲染</p>
<h3 id="如何优化-dom-性能的性能" tabindex="-1"><a class="header-anchor" href="#如何优化-dom-性能的性能" aria-hidden="true">#</a> 如何优化 DOM 性能的性能</h3>
<p>DOM 查询做缓存</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/DOM查询做缓存.png" alt="DOM查询做缓存" loading="lazy"></p>
<p>将频繁操作改为一次性操作(一次性插入多个节点，考虑性能)</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/将频繁操作改为一次性操作.png" alt="将频繁操作改为一次性操作" loading="lazy"></p>
<h2 id="js-web-api-事件" tabindex="-1"><a class="header-anchor" href="#js-web-api-事件" aria-hidden="true">#</a> JS-Web-API-事件</h2>
<h3 id="编写一个通用的事件监听函数" tabindex="-1"><a class="header-anchor" href="#编写一个通用的事件监听函数" aria-hidden="true">#</a> 编写一个通用的事件监听函数</h3>
<div class="custom-container tip">
<p class="custom-container-title">Element.matches()</p>
<p><strong>如果元素被指定的选择器字符串选择，Element.matches()方法返回 true; 否则返回 false。</strong></p>
<p>语法：<code v-pre>let result = element.matches(selectorString)</code></p>
<ul>
<li>result 的值为 true 或 false.</li>
<li>selectorString 是个 css 选择器字符串.</li>
</ul>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bindEvent</span><span class="token punctuation">(</span><span class="token parameter">elem<span class="token punctuation">,</span> type<span class="token punctuation">,</span> selector<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fn <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fn <span class="token operator">=</span> selector
    selector <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  elem<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> target <span class="token operator">=</span> event<span class="token punctuation">.</span>target
    <span class="token keyword">if</span> <span class="token punctuation">(</span>selector<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 代理绑定</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> event<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 普通绑定</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> event<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 普通绑定</span>
<span class="token keyword">const</span> btn1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'btn1'</span><span class="token punctuation">)</span>
<span class="token function">bindEvent</span><span class="token punctuation">(</span>btn1<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(event.target) // 获取触发的元素</span>
  event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 阻止默认行为</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 代理绑定</span>
<span class="token keyword">const</span> div3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'div3'</span><span class="token punctuation">)</span>
<span class="token function">bindEvent</span><span class="token punctuation">(</span>div3<span class="token punctuation">,</span> <span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="描述事件冒泡的流程" tabindex="-1"><a class="header-anchor" href="#描述事件冒泡的流程" aria-hidden="true">#</a> 描述事件冒泡的流程</h3>
<ul>
<li>
<p>基于 DOM 树形结构</p>
</li>
<li>
<p>事件会顺着触发元素向上冒泡</p>
</li>
<li>
<p>应用场景：代理(<strong><em>利用事件冒泡机制，将后代元素事件代理(事件委托)给祖先元素</em></strong>)=&gt;<code v-pre>event.target</code></p>
</li>
</ul>
<h3 id="无限下拉的图片列表-如何监听每个图片的点击" tabindex="-1"><a class="header-anchor" href="#无限下拉的图片列表-如何监听每个图片的点击" aria-hidden="true">#</a> 无限下拉的图片列表，如何监听每个图片的点击</h3>
<ul>
<li>
<p>事件代理</p>
</li>
<li>
<p>用 e.target 获取触发元素</p>
</li>
<li>
<p>用 matches 来判断是否是触发元素</p>
</li>
</ul>
<h2 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h2>
<h3 id="说说-var、let、const-之间的区别" tabindex="-1"><a class="header-anchor" href="#说说-var、let、const-之间的区别" aria-hidden="true">#</a> 说说 var、let、const 之间的区别？</h3>
<ul>
<li>
<p>变量提升: var 会提升的变量的声明到当前作用域的顶部 let const 不会</p>
</li>
<li>
<p>暂时性死区：在代码块内，使用 let、const 命令声明变量或常量之前，该变量或常量都是不可用的。这在语法上，称为“<code v-pre>暂时性死区</code>”</p>
</li>
<li>
<p>块级作用域：var 没有块级作用域，let const 有块级作用域</p>
</li>
<li>
<p>重复声明： var 允许重复声明，let,const 不允许不允许在相同作用域内，重复声明同一个变量。</p>
</li>
<li>
<p>修改声明的变量： var 和 let 可以修改;const 声明一个只读的常量，并且 const 声明时，必须立即初始化</p>
</li>
<li>
<p>window 对象的属性和方法:全局作用域中，<code v-pre>var声明的变量和通过function声明的函数</code>，会自动变成
window 对象的属性或方法，<strong>let、 const 不会</strong>。</p>
</li>
</ul>
<h3 id="箭头函数和普通函数的区别" tabindex="-1"><a class="header-anchor" href="#箭头函数和普通函数的区别" aria-hidden="true">#</a> 箭头函数和普通函数的区别？</h3>
<div class="custom-container danger">
<p class="custom-container-title">不懂的点</p>
<p><code v-pre>yield命令</code>,<code v-pre>Generator函数</code></p>
</div>
<ul>
<li>箭头函数没有 prototype (原型)，所以箭头函数本身没有 this​​​​​​​</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 箭头函数</span>
<span class="token keyword">let</span> <span class="token function-variable function">a</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// undefined</span>

<span class="token comment">// 普通函数</span>
<span class="token keyword">function</span> <span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// {constructor:f}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>箭头函数不会创建自己的 this</li>
</ul>
<p>箭头函数没有自己的 this，箭头函数的 this 指向在定义（注意：是定义时，不是调用时）的时候继承自外层第一个普通函数的 this。所以，箭头函数中 this 的指向在它被定义的时候就已经确定了，之后永远不会改变。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token function-variable function">b</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">c</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token comment">// 10</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token comment">// {a: 10, b: ƒ, c: ƒ}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
obj<span class="token punctuation">.</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span><span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>call | apply | bind 无法改变箭头函数中 this 的指向</li>
</ul>
<p>call | apply | bind 方法可以用来动态修改函数执行时 this 的指向，但由于箭头函数的 this 定义时就已经确定且永远不会改变。所以使用这些方法永远也改变不了箭头函数 this 的指向。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">let</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>
<span class="token function">fun</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>
<span class="token function">fun</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>
<span class="token function">fun</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>箭头函数不能作为构造函数使用</li>
</ul>
<p>我们先了解一下构造函数的 new 都做了些什么？简单来说，分为四步： ① JS 内部首先会先生成一个对象； ② 再把函数中的 this 指向该对象； ③ 然后执行构造函数中的语句； ④ 最终返回该对象实例。但是！！因为箭头函数没有自己的 this，它的 this 其实是继承了外层执行环境中的 this，且 this 指向永远不会随在哪里调用、被谁调用而改变，所以箭头函数不能作为构造函数使用，或者说构造函数不能定义成箭头函数，否则用 new 调用时会报错！</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">Fun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>
<span class="token comment">// 报错</span>
<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fun</span><span class="token punctuation">(</span><span class="token string">'dingFY'</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>箭头函数不绑定 arguments，<strong>取而代之用 rest 参数</strong>...代替 arguments 对象，来访问箭头函数的参数列表</li>
</ul>
<p>箭头函数没有自己的 arguments 对象。在箭头函数中访问 arguments 实际上获得的是外层局部（函数）执行环境中的值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 普通函数</span>
<span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token constant">A</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token comment">//  [1, 2, 3, 4, 5, 8, callee: ƒ, Symbol(Symbol.iterator): ƒ]</span>

<span class="token comment">// 箭头函数</span>
<span class="token keyword">let</span> <span class="token function-variable function">B</span> <span class="token operator">=</span> <span class="token parameter">b</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token constant">B</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">92</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token comment">// Uncaught ReferenceError: arguments is not defined</span>

<span class="token comment">// rest参数...</span>
<span class="token keyword">let</span> <span class="token function-variable function">C</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>c</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token constant">C</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">82</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">11323</span><span class="token punctuation">)</span> <span class="token comment">// [3, 82, 32, 11323]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>箭头函数不能用作 Generator 函数，不能使用 yield 关键字</li>
</ul>
<h3 id="不适用箭头函数的场景" tabindex="-1"><a class="header-anchor" href="#不适用箭头函数的场景" aria-hidden="true">#</a> 不适用箭头函数的场景?</h3>
<p>作为构造函数：因为箭头函数没有 this</p>
<p>需要 this 指向调用对象的时候：如事件处理函数</p>
<p>需要使用 arguments 的时候</p>
<h2 id="map-与-weakmap-的区别与使用" tabindex="-1"><a class="header-anchor" href="#map-与-weakmap-的区别与使用" aria-hidden="true">#</a> Map 与 WeakMap 的区别与使用</h2>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap" target="_blank" rel="noopener noreferrer">WeakMap<ExternalLinkIcon/></a></p>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet" target="_blank" rel="noopener noreferrer">WeakSet<ExternalLinkIcon/></a></p>
<p>1、WeakMap<strong>只接受对象作为 key</strong>，如果设置其他类型的数据作为 key，会<strong>报错</strong>。</p>
<p>2、WeakMap 的 key 所引用的对象都是<strong>弱引用</strong>，<strong>只要对象的其他引用被删除，垃圾回收机制就会释放该对象占用的内存，从而避免内存泄漏。</strong></p>
<p>3、由于 WeakMap 的成员<strong>随时可能被垃圾回收机制回收</strong>，成员的数量不稳定，<strong>所以没有 size 属性</strong>。</p>
<p>4、<strong>没有</strong><code v-pre>clear()</code>方法</p>
<p>5、<strong>不能遍历</strong></p>
<h2 id="输出题-脑瘫题" tabindex="-1"><a class="header-anchor" href="#输出题-脑瘫题" aria-hidden="true">#</a> 输出题&amp;脑瘫题</h2>
<h3 id="如何让-a1-a2-a-3-为-true" tabindex="-1"><a class="header-anchor" href="#如何让-a1-a2-a-3-为-true" aria-hidden="true">#</a> 如何让 a<mark>1 &amp;&amp; a</mark>2 &amp;&amp; a==3 为 true</h3>
<div class="custom-container tip">
<p class="custom-container-title">参考</p>
<p><a href="https://blog.csdn.net/m0_37890289/article/details/109472696" target="_blank" rel="noopener noreferrer">「前端面试题」(a <mark>1 &amp;&amp; a</mark> 2 &amp;&amp; a==3) 有可能是 true 吗？<ExternalLinkIcon/></a></p>
</div>
<p>涉及考点：<code v-pre>隐式类型转换</code></p>
<p>1.重写默认属性方法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function-variable function">toString</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>i<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// valueOf</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function-variable function">valueOf</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>i<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> b <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> b <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment">// [Symbol.toPrimitive]</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>toPrimitive<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>i<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> c <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> c <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三个方法的<code v-pre>优先级</code>： <strong>Symbol.toPrimitive &gt; valueOf &gt; toString</strong></p>
<ol start="2">
<li>数据劫持</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> tmp <span class="token operator">=</span> <span class="token number">1</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tmp<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">===</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>es6 proxy</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">tmp</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>tmp<span class="token operator">++</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>重写 Number 对象的 valueOf</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Number</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>valueOf <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> i<span class="token operator">++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-3-map-parseint-会输出什么" tabindex="-1"><a class="header-anchor" href="#_1-2-3-map-parseint-会输出什么" aria-hidden="true">#</a> ['1','2','3'].map(parseInt)会输出什么？</h3>
<div class="custom-container tip">
<p class="custom-container-title">参考</p>
<p><a href="https://www.cnblogs.com/sinosaurus/p/13215052.html" target="_blank" rel="noopener noreferrer">['1','2','3'].map(parseInt)<ExternalLinkIcon/></a>
<a href="https://blog.csdn.net/weixin_44135121/article/details/88050214" target="_blank" rel="noopener noreferrer">[‘1‘,‘2‘,‘3‘].map(parseInt)结果讲解<ExternalLinkIcon/></a></p>
</div>
<details class="custom-container details"><summary>答案</summary>
<p><code v-pre>[ 1, NaN, NaN ]</code></p>
</details>
<ol>
<li>map 函数</li>
</ol>
<p><code v-pre>['1','2','3'].map(parseInt)</code>可以看作：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// 细节</span>
index <span class="token operator">=</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token function">parsetInt</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">1</span>
index <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token function">parsetInt</span><span class="token punctuation">(</span><span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">NaN</span>
index <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token function">parsetInt</span><span class="token punctuation">(</span><span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">NaN</span> <span class="token comment">// 因为 2进制必须是 0，1数字表示</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将数组的每个元素传递给指定的函数处理，并返回处理后的数组，所以 ['1','2','3'].map(parseInt) 就是将字符串 1，2，3 作为元素；0，1，2 作为下标分别调用 parseInt 函数。即分别求出 parseInt('1',0), parseInt('2',1), parseInt('3',2)的结果。</p>
<ol start="2">
<li>parseInt 函数（重点）</li>
</ol>
<p>概念：以第二个参数为基数来解析第一个参数字符串，通常用来做十进制的向上取整（省略小数）如：parseInt(2.7) //结果为 2</p>
<p>特点：接收两个参数 parseInt(string,radix)</p>
<p>string：字母（大小写均可）、数组、特殊字符（不可放在开头,特殊字符及特殊字符后面的内容不做解析）的任意字符串，如 '2'、'2w'、'2!'</p>
<p>radix：解析字符串的基数，基数规则如下：</p>
<p>1） 区间范围介于 2~36 之间；</p>
<p>2） 当参数为 0，parseInt() 会根据十进制来解析；</p>
<p>3） 如果忽略该参数，默认的基数规则：</p>
<ul>
<li>
<p>如果 string 以 &quot;0x&quot; 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数；parseInt(&quot;0xf&quot;) //15</p>
</li>
<li>
<p>如果 string 以 0 开头，其后的字符解析为八进制或十六进制的数字；parseInt(&quot;08&quot;) //8</p>
</li>
<li>
<p>如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数；parseInt(&quot;88.99f&quot;) //88</p>
</li>
<li>
<p>只有字符串中的第一个数字会被返回。parseInt(&quot;10.33&quot;) //返回 10；</p>
</li>
<li>
<p>开头和结尾的空格是允许的。parseInt(&quot; 69 10 &quot;) //返回 69</p>
</li>
<li>
<p>如果字符串的第一个字符不能被转换为数字，返回 NaN。parseInt(&quot;f&quot;) //返回 NaN 而 parseInt(&quot;f&quot;，16) //返回 15</p>
</li>
</ul>
<ol start="3">
<li>再来分析一下结果</li>
</ol>
<p><code v-pre>['1','2','3'].map(parseInt)</code>即:</p>
<p>parseInt('1',0);radix 为 0，parseInt() 会根据十进制来解析，所以结果为 1；</p>
<p>parseInt('2',1);radix 为 1，超出区间范围，所以结果为 NaN；</p>
<p>parseInt('3',2);radix 为 2，用 2 进制来解析，应以 0 和 1 开头，所以结果为 NaN。</p>
<ol start="4">
<li>parseInt 方法解析的运算过程</li>
</ol>
<p>parseInt('101.55',10); //以十进制解析，运算过程：向上取整数(不做四舍五入，省略小数)，结果为 101。</p>
<p>parseInt('101',2); //以二进制解析，运算过程：1<em>2 的 2 次方+0</em>2 的 1 次方+1*2 的 0 次方=4+0+1=5，结果为 5。</p>
<p>parseInt('101',8); //以八进制解析，运算过程：1<em>8 的 2 次方+0</em>8 的 1 次方+1*8 的 0 次方=64+0+1=65，结果为 65。</p>
<p>parseInt('101',16); //以十六进制解析，运算过程：1<em>16 的 2 次方+0</em>16 的 1 次方+1*16 的 0 次方=256+0+1=257，结果为 257。</p>
<div class="custom-container tip">
<p class="custom-container-title">扩展</p>
<p>map 和 forEach
<a href="https://blog.csdn.net/weixin_46837985/article/details/112211133" target="_blank" rel="noopener noreferrer">数组中 forEach() 和 map() 的区别<ExternalLinkIcon/></a></p>
</div>
<h2 id="js-原理-机制" tabindex="-1"><a class="header-anchor" href="#js-原理-机制" aria-hidden="true">#</a> JS 原理&amp;机制</h2>
<h3 id="说一下-js-的垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#说一下-js-的垃圾回收机制" aria-hidden="true">#</a> 说一下 js 的垃圾回收机制</h3>
<p><a href="https://juejin.cn/post/6981588276356317214" target="_blank" rel="noopener noreferrer">「硬核 JS」你真的了解垃圾回收机制吗<ExternalLinkIcon/></a></p>
<p>javaScript 具有自动垃圾收集机制</p>
<p><code v-pre>标记清除</code>,主流的垃圾收集算法，给不使用的值加上标记，然后回收其内存。</p>
<p><code v-pre>引用计数</code>，这种算法是跟踪记录所有值被引用的次数，不在使用这种算法。(存在<strong>循环引用</strong>的问题)</p>
<div class="custom-container tip">
<p class="custom-container-title">循环引用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
  <span class="token keyword">let</span> <span class="token constant">B</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>

  <span class="token constant">A</span><span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token constant">B</span> <span class="token comment">// 2</span>
  <span class="token constant">B</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token constant">A</span> <span class="token comment">// 2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示，<strong>对象 A 和 B 通过各自的属性相互引用着，按照上文的引用计数策略，它们的引用数量都是 2，但是，在函数 test 执行完成之后，对象 A 和 B 是要被清理的，但使用引用计数则不会被清理，因为它们的引用数量不会变成 0，假如此函数在程序中被多次调用，那么就会造成大量的内存不会被释放</strong></p>
<p>我们再用<code v-pre>标记清除</code>的角度看一下，<strong>当函数结束后，两个对象都不在作用域中，A 和 B 都会被当作非活动对象来清除掉，相比之下，引用计数则不会释放，也就会造成大量无用内存占用，这也是后来放弃引用计数，使用标记清除的原因之一</strong></p>
</div>
<h3 id="new-的原理" tabindex="-1"><a class="header-anchor" href="#new-的原理" aria-hidden="true">#</a> new 的原理？</h3>
<ul>
<li>new 的工作流程：</li>
</ul>
<p>1）在内存中创建一个新对象</p>
<p>2）将新对象与构造函数<strong>通过原型链</strong>连接起来</p>
<p>3）将构造函数中的<strong>this 绑定</strong>到新对象上</p>
<p>4）执行构造函数内部的代码</p>
<p>5）如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象</p>
<ul>
<li>手写 new</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token parameter">Func<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.创建一个新对象</span>
  <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// 2.新对象原型指向构造函数原型对象</span>
  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Func</span><span class="token punctuation">.</span>prototype
  <span class="token comment">// 3.将构建函数的this指向新对象</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">Func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
  <span class="token comment">// 4.根据返回值判断</span>
  <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">age<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">myNew</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token string">'frank'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


