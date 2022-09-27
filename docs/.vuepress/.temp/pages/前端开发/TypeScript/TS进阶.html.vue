<template><div><h2 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h2>
<p>类型别名用来给一个类型起个新名字。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token builtin">string</span>
<span class="token keyword">type</span> <span class="token class-name">NameResolver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span>
<span class="token keyword">type</span> <span class="token class-name">NameOrResolver</span> <span class="token operator">=</span> Name <span class="token operator">|</span> NameResolver
<span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span>n<span class="token operator">:</span> NameOrResolver<span class="token punctuation">)</span><span class="token operator">:</span> Name <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> n <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> n
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">n</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，我们使用 <code v-pre>type</code> 创建类型别名。</p>
<p>类型别名常用于联合类型。</p>
<h3 id="类型别名与接口的区别" tabindex="-1"><a class="header-anchor" href="#类型别名与接口的区别" aria-hidden="true">#</a> 类型别名与接口的区别</h3>
<h4 id="相同点" tabindex="-1"><a class="header-anchor" href="#相同点" aria-hidden="true">#</a> 相同点</h4>
<p>都可以描述一个对象或者函数：</p>
<p>interface</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">SetUser</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>type</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">SetUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>都允许拓展（extends）：</p>
<p>terface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 <strong>虽然效果差不多，但是两者语法不同</strong>。</p>
<p>interface extends interface</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>type extends type</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> Name <span class="token operator">&amp;</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>interface extends type</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>type extends interface</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> Name <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="不同点" tabindex="-1"><a class="header-anchor" href="#不同点" aria-hidden="true">#</a> 不同点</h4>
<p>type 可以而 interface 不行：</p>
<ul>
<li>type 可以声明基本类型别名，联合类型，元组等类型</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 基本类型别名</span>
<span class="token keyword">type</span> <span class="token class-name">Name</span> <span class="token operator">=</span> <span class="token builtin">string</span>

<span class="token comment">// 联合类型</span>
<span class="token keyword">interface</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
  <span class="token function">wong</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
  <span class="token function">miao</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Pet</span> <span class="token operator">=</span> Dog <span class="token operator">|</span> Cat

<span class="token comment">// 具体定义数组每个位置的类型</span>
<span class="token keyword">type</span> <span class="token class-name">PetList</span> <span class="token operator">=</span> <span class="token punctuation">[</span>Dog<span class="token punctuation">,</span> Pet<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>type 语句中还可以使用 typeof 获取实例的 类型进行赋值</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 当你想获取一个变量的类型时，使用 typeof</span>
<span class="token keyword">let</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> div
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>interface 可以而 type 不行：</p>
<p>interface 能够声明合并</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  sex<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用 interface 描述<strong>数据结构</strong>，用 type 描述<strong>类型关系</strong></p>
<h2 id="类型保护" tabindex="-1"><a class="header-anchor" href="#类型保护" aria-hidden="true">#</a> 类型保护</h2>
<p><a href="https://www.wenjiangs.com/doc/typescript-typeguard" target="_blank" rel="noopener noreferrer">typescript-typeguard<ExternalLinkIcon/></a></p>
<p>is 是 TypeScript 中的一个关键字，一般用于函数返回值类型中，判断参数是否属于某一类型，并根据结果返回对应的布尔类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Square</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  size<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Rectangle</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  width<span class="token operator">:</span> <span class="token builtin">number</span>
  height<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isSquare</span><span class="token punctuation">(</span>shape<span class="token operator">:</span> Shape<span class="token punctuation">)</span><span class="token operator">:</span> shape <span class="token keyword">is</span> Square <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'size'</span> <span class="token keyword">in</span> shape
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">isRectangle</span><span class="token punctuation">(</span>shape<span class="token operator">:</span> Shape<span class="token punctuation">)</span><span class="token operator">:</span> shape <span class="token keyword">is</span> Rectangle <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'width'</span> <span class="token keyword">in</span> shape
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Shape</span> <span class="token operator">=</span> Square <span class="token operator">|</span> Rectangle

<span class="token keyword">function</span> <span class="token function">area</span><span class="token punctuation">(</span>shape<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isSquare</span><span class="token punctuation">(</span>shape<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> shape<span class="token punctuation">.</span>size <span class="token operator">*</span> shape<span class="token punctuation">.</span>size
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRectangle</span><span class="token punctuation">(</span>shape<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> shape<span class="token punctuation">.</span>width <span class="token operator">*</span> shape<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数重载" tabindex="-1"><a class="header-anchor" href="#函数重载" aria-hidden="true">#</a> 函数重载</h2>
<p><a href="https://www.jianshu.com/p/98a4291d7ff4" target="_blank" rel="noopener noreferrer">TS 中几种函数重载<ExternalLinkIcon/></a></p>
<p>重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。</p>
<p>比如，我们需要实现一个函数 <code v-pre>reverse</code>，输入数字 <code v-pre>123</code> 的时候，输出反转的数字 <code v-pre>321</code>，输入字符串 <code v-pre>'hello'</code> 的时候，输出反转的字符串 <code v-pre>'olleh'</code>。</p>
<p>利用联合类型，我们可以这么实现：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">'number'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。</strong></p>
<p>这时，我们可以使用重载定义多个 <code v-pre>reverse</code> 的函数类型：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// 重载签名</span>
<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// 重载签名</span>
<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// 实现签名</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">'number'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例中，我们重复定义了多次函数 <code v-pre>reverse</code>，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。</p>
<p>注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。</p>
<h2 id="方法重载" tabindex="-1"><a class="header-anchor" href="#方法重载" aria-hidden="true">#</a> 方法重载</h2>
<p>下面来实现一个方法重载 以 ArrayList 为例,可以查看数据,可以删除数据,删除可以通过 id 或者对象删除可以获取数据</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">ArrayList</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> element<span class="token operator">:</span> object<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
   * 获取某一个值
   * <span class="token keyword">@param</span> <span class="token parameter">index</span>
   * <span class="token keyword">@returns</span>
   */</span>
  <span class="token function">get</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 显示值</span>
  <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>i <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">remove</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token function">remove</span><span class="token punctuation">(</span>val<span class="token operator">:</span> Object<span class="token punctuation">)</span><span class="token operator">:</span> Object <span class="token comment">// 实现删除方法重载</span>

  <span class="token function">remove</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> Object<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>element <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">'number'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> val <span class="token operator">!==</span> index
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> val <span class="token operator">!==</span> e
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> val
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'zixia'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  b <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'selfsummer'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">88</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  c <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'自夏'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span>

<span class="token keyword">let</span> newAr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span><span class="token punctuation">)</span>

newAr<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
newAr<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newAr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造器重载" tabindex="-1"><a class="header-anchor" href="#构造器重载" aria-hidden="true">#</a> 构造器重载</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 类型别名</span>
<span class="token keyword">type</span> <span class="token class-name">TypeWowen</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Wowen</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>paramObj<span class="token operator">:</span> TypeWowen<span class="token punctuation">)</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>paramObj<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> name <span class="token operator">=</span> <span class="token string">'未知'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> paramObj <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> paramObj
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> paramObj
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> w1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Wowen</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> w2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Wowen</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token string">'frank'</span><span class="token punctuation">)</span>
<span class="token comment">// const w3 = new Wowen({ name: 'frank', age: 123 }, 123)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>w1<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>w2<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>w3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用签名" tabindex="-1"><a class="header-anchor" href="#调用签名" aria-hidden="true">#</a> 调用签名</h2>
<h3 id="函数类型表达式" tabindex="-1"><a class="header-anchor" href="#函数类型表达式" aria-hidden="true">#</a> 函数类型表达式</h3>
<p>最简单描述一个函数的方式是使用**函数类型表达式（function type expression）。**它的写法有点类似于箭头函数：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">greeter</span><span class="token punctuation">(</span><span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token string">'Hello, World'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printToConsole</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">greeter</span><span class="token punctuation">(</span>printToConsole<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语法 <code v-pre>(a: string) =&gt; void</code> 表示一个函数有一个名为 <code v-pre>a</code> ，类型是字符串的参数，这个函数并没有返回任何值。</p>
<p>如果一个函数参数的类型并没有明确给出，它会被隐式设置为 <code v-pre>any</code>。</p>
<p>当然了，我们也可以使用类型别名 定义一个函数类型：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">GreetFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token keyword">function</span> <span class="token function">greeter</span><span class="token punctuation">(</span>fn<span class="token operator">:</span> GreetFunction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 JavaScript 中，函数除了可以被调用，自己也是可以有属性值的。然而函数类型表达式并不能支持声明属性，如果我们想描述一个带有属性的函数，我们可以在一个对象类型中写一个调用签名（call signature）</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">DescribableFunction</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  description<span class="token operator">:</span> <span class="token function">string</span>
  <span class="token punctuation">(</span>someArg<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fn<span class="token operator">:</span> <span class="token function-variable function">DescribableFunction</span> <span class="token operator">=</span> someArg <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> someArg <span class="token operator">></span> <span class="token number">0</span>
<span class="token punctuation">}</span>

fn<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">'是否大于0'</span>

<span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span>fn<span class="token operator">:</span> DescribableFunction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fn<span class="token punctuation">.</span>description<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,returned:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">doSomething</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意这个语法跟函数类型表达式稍有不同，在参数列表和返回的类型之间用的是 <code v-pre>:</code> 而不是 <code v-pre>=&gt;</code>。</p>
<h2 id="构造签名" tabindex="-1"><a class="header-anchor" href="#构造签名" aria-hidden="true">#</a> 构造签名</h2>
<p>JavaScript 函数也可以使用 <code v-pre>new</code> 操作符调用，当被调用的时候，TypeScript 会认为这是一个构造函数( constructors (构造函数) )，因为他们会产生一个新对象。你可以写一个构造签名，方法是在调用签名前面加一个 <code v-pre>new</code> 关键词：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">SomeConstructor</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">new</span> <span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> SomeObject
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>ctor<span class="token operator">:</span> SomeConstructor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ctor</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="索引签名" tabindex="-1"><a class="header-anchor" href="#索引签名" aria-hidden="true">#</a> 索引签名</h2>
<p>有的时候，你不能提前知道一个类型里的所有属性的名字，但是你知道这些值的特征。</p>
<p>这种情况，你就可以用一个索引签名 (index signature) 来描述可能的值的类型，举个例子：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">StringArray</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> myArray<span class="token operator">:</span> StringArray <span class="token operator">=</span> <span class="token function">getStringArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> secondItem <span class="token operator">=</span> myArray<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// const secondItem: string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，我们就有了一个具有索引签名的接口 <code v-pre>StringArray</code>，这个索引签名表示当一个 <code v-pre>StringArray</code> 类型的值使用 <code v-pre>number</code> 类型的值进行索引的时候，会返回一个 <code v-pre>string</code>类型的值。</p>
<h2 id="双重断言" tabindex="-1"><a class="header-anchor" href="#双重断言" aria-hidden="true">#</a> 双重断言</h2>
<p>利用双重断言可以完成一些不可能的类型转换，虽然没什么卵用</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token string">'123'</span> <span class="token keyword">as</span> <span class="token builtin">any</span> <span class="token keyword">as</span> <span class="token builtin">number</span> <span class="token comment">// x:number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常量断言" tabindex="-1"><a class="header-anchor" href="#常量断言" aria-hidden="true">#</a> 常量断言</h2>
<p>常量断言，可以用于断言任何一个类型：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> frank <span class="token operator">=</span> <span class="token punctuation">{</span>
  age<span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
  hobby<span class="token operator">:</span> <span class="token string">'js'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span>

<span class="token keyword">interface</span> <span class="token class-name">Isetting</span> <span class="token punctuation">{</span>
  align<span class="token operator">:</span> <span class="token string">'center'</span> <span class="token operator">|</span> <span class="token string">'left'</span> <span class="token operator">|</span> <span class="token string">'right'</span>
  padding<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">layout</span><span class="token punctuation">(</span>setting<span class="token operator">:</span> Isetting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Layout'</span><span class="token punctuation">,</span> setting<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> paramer <span class="token operator">=</span> <span class="token punctuation">{</span>
  align<span class="token operator">:</span> <span class="token string">'left'</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">,</span>
  padding<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token function">layout</span><span class="token punctuation">(</span>paramer<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在大部分的代码中，元组只是被创建，使用完后也不会被修改，所以尽可能的将元组设置为 <code v-pre>readonly</code> 是一个好习惯。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> t1<span class="token operator">:</span> <span class="token keyword">readonly</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'123'</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="typeof-操作符" tabindex="-1"><a class="header-anchor" href="#typeof-操作符" aria-hidden="true">#</a> typeof 操作符</h2>
<p>TypeScript 添加的 <code v-pre>typeof</code> 方法可以在类型上下文（type context）中使用，用于获取一个变量或者属性的类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token string">'hello'</span>
<span class="token keyword">let</span> n<span class="token operator">:</span> <span class="token keyword">typeof</span> s
<span class="token comment">// let n: string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="keyof-操作符" tabindex="-1"><a class="header-anchor" href="#keyof-操作符" aria-hidden="true">#</a> keyof 操作符</h2>
<p>对一个对象类型使用 <code v-pre>keyof</code> 操作符，会返回该对象属性名组成的一个字符串或者数字字面量的联合。这个例子中的类型 P 就等同于 &quot;x&quot; | &quot;y&quot;：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> y<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">P</span></span> <span class="token operator">=</span> <span class="token keyword">keyof</span> Point
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型查找" tabindex="-1"><a class="header-anchor" href="#类型查找" aria-hidden="true">#</a> 类型查找</h2>
<p>我们可以使用<strong>类型查找</strong> 查找另外一个类型上的特定属性：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> alive<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">Age</span> <span class="token operator">=</span> Person<span class="token punctuation">[</span><span class="token string">'age'</span><span class="token punctuation">]</span>
<span class="token comment">// type Age = number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制代码</p>
<p>因为索引名本身就是一个类型，所以我们也可以使用联合、<code v-pre>keyof</code> 或者其他类型：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I1</span></span> <span class="token operator">=</span> Person<span class="token punctuation">[</span><span class="token string">'age'</span> <span class="token operator">|</span> <span class="token string">'name'</span><span class="token punctuation">]</span>
<span class="token comment">// type I1 = string | number</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I2</span></span> <span class="token operator">=</span> Person<span class="token punctuation">[</span><span class="token keyword">keyof</span> Person<span class="token punctuation">]</span>
<span class="token comment">// type I2 = string | number | boolean</span>

<span class="token keyword">type</span> <span class="token class-name">AliveOrName</span> <span class="token operator">=</span> <span class="token string">'alive'</span> <span class="token operator">|</span> <span class="token string">'name'</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">I3</span></span> <span class="token operator">=</span> Person<span class="token punctuation">[</span>AliveOrName<span class="token punctuation">]</span>
<span class="token comment">// type I3 = string | boolean</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型映射" tabindex="-1"><a class="header-anchor" href="#类型映射" aria-hidden="true">#</a> 类型映射</h2>
<p>有的时候，一个类型需要基于另外一个类型，但是你又不想拷贝一份，这个时候可以考虑使用映射类型。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Point2D</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Point3D</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key <span class="token keyword">in</span> <span class="token keyword">keyof</span> Point2D<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  z<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p2<span class="token operator">:</span> Point3D <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="映射修饰符" tabindex="-1"><a class="header-anchor" href="#映射修饰符" aria-hidden="true">#</a> 映射修饰符</h2>
<p>在使用类型映射时，有两个额外的修饰符可能会用到，一个是 <code v-pre>readonly</code>，用于设置属性只读，一个是 <code v-pre>?</code> ，用于设置属性可选。</p>
<p>你可以通过前缀 <code v-pre>-</code> 或者 <code v-pre>+</code> 删除或者添加这些修饰符，如果没有写前缀，相当于使用了 <code v-pre>+</code> 前缀。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 删除属性中的只读属性</span>
<span class="token keyword">type</span> <span class="token class-name">CreateMutable<span class="token operator">&lt;</span>Type<span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">-</span><span class="token keyword">readonly</span> <span class="token punctuation">[</span>Property <span class="token keyword">in</span> <span class="token keyword">keyof</span> Type<span class="token punctuation">]</span><span class="token operator">:</span> Type<span class="token punctuation">[</span>Property<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">LockedAccount</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> id<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">UnlockedAccount</span> <span class="token operator">=</span> CreateMutable<span class="token operator">&lt;</span>LockedAccount<span class="token operator">></span>

<span class="token comment">// type UnlockedAccount = {</span>
<span class="token comment">//    id: string;</span>
<span class="token comment">//    name: string;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 删除属性中的可选属性</span>
<span class="token keyword">type</span> <span class="token class-name">Concrete<span class="token operator">&lt;</span>Type<span class="token operator">></span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>Property <span class="token keyword">in</span> <span class="token keyword">keyof</span> Type<span class="token punctuation">]</span><span class="token operator">-</span><span class="token operator">?</span><span class="token operator">:</span> Type<span class="token punctuation">[</span>Property<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">MaybeUser</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> Concrete<span class="token operator">&lt;</span>MaybeUser<span class="token operator">></span>
<span class="token comment">// type User = {</span>
<span class="token comment">//    id: string;</span>
<span class="token comment">//    name: string;</span>
<span class="token comment">//    age: number;</span>
<span class="token comment">// }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


