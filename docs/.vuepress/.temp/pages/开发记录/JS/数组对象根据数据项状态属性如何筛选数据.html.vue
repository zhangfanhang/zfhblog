<template><div><p>比如一个<code v-pre>小功能</code>:需要计算当前<code v-pre>已完成</code>的项的数量？ 这时我们就需要数组中每一项的某个状态属性值去<code v-pre>筛选</code></p>
<p>在 vue 中往往使用计算属性去完成，这里使用数组三种不同的方法完成：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 统计当前已完成的数据项</span>
    <span class="token function">doneSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ``````reduce`````</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> acc <span class="token operator">+</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>done <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// ``````filter`````</span>
      <span class="token keyword">const</span> done  <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> todo<span class="token punctuation">.</span>done<span class="token operator">==</span><span class="token boolean">true</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> done<span class="token punctuation">.</span>length
      <span class="token comment">// ````forEach`````</span>
        <span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>done<span class="token operator">==</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
              i<span class="token operator">++</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> i
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


