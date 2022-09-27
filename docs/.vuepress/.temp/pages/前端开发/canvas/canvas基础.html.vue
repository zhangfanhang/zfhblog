<template><div><div class="custom-container tip">
<p class="custom-container-title">参考</p>
<ul>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial" target="_blank" rel="noopener noreferrer">MDN<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.imooc.com/learn/133" target="_blank" rel="noopener noreferrer">慕课网:炫丽的倒计时效果 Canvas 绘图与动画基础<ExternalLinkIcon/></a></p>
</li>
</ul>
</div>
<h2 id="创建-canvas" tabindex="-1"><a class="header-anchor" href="#创建-canvas" aria-hidden="true">#</a> 创建 canvas</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tutorial<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1050<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>724<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过 DOM 指定宽度高度</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tutorial'</span><span class="token punctuation">)</span>
canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">'1050'</span>
canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token string">'724'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="渲染上下文" tabindex="-1"><a class="header-anchor" href="#渲染上下文" aria-hidden="true">#</a> 渲染上下文</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tutorial'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Canvas 公开了一个或多个<strong>渲染上下文</strong>，其可以用来绘制和处理要展示的内容。<strong>我们将会将注意力放在 2D 渲染上下文中</strong>。js 要找到渲染上下文，然后在它的上面绘制。<code v-pre>getContext</code>是用来获得渲染上下文和它的绘画功能。</p>
<h3 id="检查支持性" tabindex="-1"><a class="header-anchor" href="#检查支持性" aria-hidden="true">#</a> 检查支持性</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>canvas<span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span>
  <span class="token comment">// 使用context绘制</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// 提示不支持canvas</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


