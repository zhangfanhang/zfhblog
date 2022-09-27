<template><div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'I'</span><span class="token punctuation">,</span> <span class="token string">'go'</span><span class="token punctuation">,</span> <span class="token string">'home'</span><span class="token punctuation">]</span>

<span class="token keyword">delete</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// remove "go"</span>

<span class="token function">alert</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span>

<span class="token comment">// now arr = ["I",  , "home"];</span>
<span class="token function">alert</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 delete 删除指定索引号的数组元素后会发生什么？</p>
<ul>
<li>数组元素值消失</li>
<li>通过索引号访问，得到 undefined</li>
<li>数组长度不变</li>
</ul>
</div></template>


