<template><div><center>
<p><img src="https://www.runoob.com/wp-content/uploads/2019/01/typescript-logo.jpg" alt="ts" loading="lazy"></p>
</center>
<h2 id="typescript-environment" tabindex="-1"><a class="header-anchor" href="#typescript-environment" aria-hidden="true">#</a> TypeScript Environment</h2>
<ol>
<li>
<p>安装 ts:<code v-pre>npm i -g typescript</code>,编译 ts: <code v-pre>tsc xxx.ts</code>,得到 js 文件执行</p>
</li>
<li>
<p>直接使用 <code v-pre>ts-node</code> 运行 ts 文件:</p>
<ul>
<li><code v-pre>npm i ts-node -g</code></li>
<li><code v-pre>npm i typescript -g</code></li>
<li><code v-pre>ts-node xxx.ts</code></li>
</ul>
</li>
</ol>
<h2 id="typescript-type" tabindex="-1"><a class="header-anchor" href="#typescript-type" aria-hidden="true">#</a> TypeScript type</h2>
<h3 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> boolean</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> bool1 <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token keyword">const</span> bool2<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> number</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> num1<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">const</span> num2 <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token string">'frank'</span>
<span class="token keyword">const</span> str2<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'frank'</span>
<span class="token keyword">const</span> str3 <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我叫</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h3>
<p>数组的几种声明方式：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">list1</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> <span class="token literal-property property">list3</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>number<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token comment">// 泛型</span>
<span class="token keyword">let</span> <span class="token literal-property property">list4</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'ddd'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tuple" tabindex="-1"><a class="header-anchor" href="#tuple" aria-hidden="true">#</a> tuple</h3>
<p>元组类型是另一种类型 Array，它确切地知道它包含多少个元素，以及它在特定位置包含哪些类型（官方文档元组定义翻译）</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> person<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">]</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> tom<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span>
tom <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Tom'</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">]</span>
tom<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'male'</span><span class="token punctuation">)</span>
tom<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// Argument of type 'true' is not assignable to parameter of type 'string | number'.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="union" tabindex="-1"><a class="header-anchor" href="#union" aria-hidden="true">#</a> union</h3>
<p>联合类型 <code v-pre>Union Types</code> 表示取值可以为多种类型中的一种</p>
<p>联合类型使用 <code v-pre>|</code>分隔每个类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> union1<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
union1 <span class="token operator">=</span> <span class="token number">123</span>
union1 <span class="token operator">=</span> <span class="token string">'456'</span>

<span class="token keyword">let</span> union2<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token builtin">boolean</span>

<span class="token keyword">let</span> union3<span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="literal" tabindex="-1"><a class="header-anchor" href="#literal" aria-hidden="true">#</a> literal</h3>
<p>字面量 <code v-pre>Literal</code> 类型的<strong>特定数据</strong>就是 它自己的类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">// 与联合类型结合</span>
<span class="token keyword">let</span> nums<span class="token operator">:</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span>
nums <span class="token operator">=</span> <span class="token number">2</span>
nums <span class="token operator">=</span> <span class="token number">4</span> <span class="token comment">// 报错 nums只能是 1,2,3 中的其中一个</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="enum" tabindex="-1"><a class="header-anchor" href="#enum" aria-hidden="true">#</a> enum</h3>
<p>使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript 支持数字的和基于字符串的枚举。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">enum</span> Color <span class="token punctuation">{</span>
    red<span class="token punctuation">,</span>
    green<span class="token punctuation">,</span>
    blue<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>red<span class="token punctuation">)</span> <span class="token comment">// 2</span>
<span class="token comment">// 给枚举项手动赋值</span>
<span class="token keyword">enum</span> Color2 <span class="token punctuation">{</span>
    red <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>
    green<span class="token punctuation">,</span>
    blue<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Color2<span class="token punctuation">.</span>red<span class="token punctuation">)</span> <span class="token comment">// 7</span>
<span class="token keyword">enum</span> Color3 <span class="token punctuation">{</span>
    red <span class="token operator">=</span> <span class="token string">'red'</span><span class="token punctuation">,</span>
    green <span class="token operator">=</span> <span class="token string">'green'</span><span class="token punctuation">,</span>
    blue <span class="token operator">=</span> <span class="token string">'blue'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Color3<span class="token punctuation">.</span>red<span class="token punctuation">)</span> <span class="token comment">// 'red'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结合 <code v-pre>switch</code> 语句使用</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 使用枚举</span>
<span class="token keyword">enum</span> Sex <span class="token punctuation">{</span>
    <span class="token constant">MALE</span><span class="token punctuation">,</span>
    <span class="token constant">FEMALE</span><span class="token punctuation">,</span>
    <span class="token constant">UNKNOWN</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> member_sex<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> Sex<span class="token punctuation">.</span><span class="token constant">FEMALE</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>member_sex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> Sex<span class="token punctuation">.</span><span class="token constant">MALE</span><span class="token operator">:</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'男'</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token keyword">case</span> Sex<span class="token punctuation">.</span><span class="token constant">FEMALE</span><span class="token operator">:</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'女'</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token keyword">case</span> Sex<span class="token punctuation">.</span><span class="token constant">UNKNOWN</span><span class="token operator">:</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'未知'</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">break</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="any" tabindex="-1"><a class="header-anchor" href="#any" aria-hidden="true">#</a> any</h3>
<p>任意值 <code v-pre>Any</code> 用来表示允许赋值为任意类型</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> result<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">555</span>
result <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
result <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unknown" tabindex="-1"><a class="header-anchor" href="#unknown" aria-hidden="true">#</a> unknown</h3>
<p><code v-pre>unknown</code> 不保证类型，但保证类型安全(类型安全的 <code v-pre>any</code>)，只有确定了变量类型以后，才能正常使用</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> res<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">123</span>
<span class="token function-variable function">res</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'res'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> res <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">res</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
res <span class="token operator">=</span> <span class="token number">123</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> res <span class="token operator">===</span> <span class="token string">'number'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token operator">++</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="void" tabindex="-1"><a class="header-anchor" href="#void" aria-hidden="true">#</a> void</h3>
<div class="custom-container tip">
<p class="custom-container-title">void 和 undefined</p>
<p><code v-pre>void</code> 代表变量本身就不存在，<code v-pre>undefined</code>代表应该此处应该有一个变量，但是没有没有定义</p>
</div>
<p>在 <code v-pre>TypeScript</code> 中，可以用 <code v-pre>void</code> 表示没有任何返回值的函数:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">printRes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'string'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printRes2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'string'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="never" tabindex="-1"><a class="header-anchor" href="#never" aria-hidden="true">#</a> never <Badge text='不常用' type="warning"/></h3>
<p>一个函数永远执行不完，这就是 <code v-pre>never</code> 的本质</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throwErr</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">mes</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">errCode</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> never <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token punctuation">{</span>
        mes<span class="token punctuation">,</span>
        errCode<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">throwErr</span><span class="token punctuation">(</span><span class="token string">'not fonund'</span><span class="token punctuation">,</span> <span class="token number">404</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">whileLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> never <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> function</h3>
<p><a href="https://blog.csdn.net/weixin_43131046/article/details/121696924" target="_blank" rel="noopener noreferrer">ts 函数，可选参数，默认参数，剩余参数<ExternalLinkIcon/></a></p>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<ul>
<li>
<p>默认参数和可选参数无法同时使用</p>
</li>
<li>
<p>三种参数都应定义在参数列表的末尾</p>
</li>
</ul>
</div>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 可选参数</span>
<span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// 1 undefined</span>
<span class="token punctuation">}</span>

<span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 默认参数</span>
<span class="token keyword">function</span> <span class="token function">fun2</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span> <span class="token comment">//3</span>
<span class="token punctuation">}</span>

<span class="token function">fun2</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// 剩余参数</span>
<span class="token keyword">function</span> <span class="token function">fun3</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token operator">...</span>c<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> cur<span class="token punctuation">)</span> <span class="token operator">=></span> pre <span class="token operator">+</span> cur<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//16</span>
<span class="token punctuation">}</span>

<span class="token function">fun3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type-assertions" tabindex="-1"><a class="header-anchor" href="#type-assertions" aria-hidden="true">#</a> Type Assertions</h2>
<p>类型断言<code v-pre>Type Assertions</code>可以用来手动指定一个值的类型。</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">any</span>
x <span class="token operator">=</span> <span class="token string">'123'</span> <span class="token comment">// 仍然是any类型</span>
<span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span>x<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">//  1</span>
<span class="token keyword">let</span> s2 <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type-inference" tabindex="-1"><a class="header-anchor" href="#type-inference" aria-hidden="true">#</a> Type Inference</h2>
<p>如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。</p>
<p>以下代码虽然没有指定类型，但是会在编译的时候报错：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> myFavoriteNumber <span class="token operator">=</span> <span class="token string">'seven'</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span>
<span class="token comment">// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，它等价于：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'seven'</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span>

<span class="token comment">// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">let</span> myFavoriteNumber
myFavoriteNumber <span class="token operator">=</span> <span class="token string">'seven'</span>
myFavoriteNumber <span class="token operator">=</span> <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


