<template><div><h1 id="在输入框的光标处插入内容" tabindex="-1"><a class="header-anchor" href="#在输入框的光标处插入内容" aria-hidden="true">#</a> 在输入框的光标处插入内容</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//在光标处插入文字   field为文本框的DOM元素,value要插入的字符</span>
<span class="token keyword">function</span> <span class="token function">insertText</span><span class="token punctuation">(</span><span class="token parameter">field<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> startPos <span class="token operator">=</span> field<span class="token punctuation">.</span>selectionStart
  <span class="token keyword">const</span> endPos <span class="token operator">=</span> field<span class="token punctuation">.</span>selectionEnd
  <span class="token comment">// 保存光标所在处滚动高度</span>
  <span class="token keyword">const</span> restoreTop <span class="token operator">=</span> field<span class="token punctuation">.</span>scrollTop
  field<span class="token punctuation">.</span>value <span class="token operator">=</span>
    field<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> startPos<span class="token punctuation">)</span> <span class="token operator">+</span>
    value <span class="token operator">+</span>
    field<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>endPos<span class="token punctuation">,</span> field<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
  field<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token comment">// 让文本域卷动高度保持在光标所在处</span>
  field<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> restoreTop
  field<span class="token punctuation">.</span>selectionStart <span class="token operator">=</span> startPos <span class="token operator">+</span> value<span class="token punctuation">.</span>length
  field<span class="token punctuation">.</span>selectionEnd <span class="token operator">=</span> startPos <span class="token operator">+</span> value<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="html,result" data-slug-hash="QWrydNK" data-user="zhangfanhang" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/zhangfanhang/pen/QWrydNK">
  js实现在输入框的光标处插入内容</a> by zhangfanhang (<a href="https://codepen.io/zhangfanhang">@zhangfanhang</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h2>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLTextAreaElement" target="_blank" rel="noopener noreferrer">HTMLTextAreaElement<ExternalLinkIcon/></a></p>
<ul>
<li>
<p><code v-pre>selectionStart</code>返回/设置所选文本开头的索引。如果未选择文本，则返回光标后面的字符的索引。</p>
</li>
<li>
<p><code v-pre>selectionEnd</code>返回/设置所选文本结尾的索引。如果未选择文本，则返回光标后面的字符的索引。</p>
</li>
</ul>
<p>未选择文本，两个属性的值相同</p>
</div></template>


