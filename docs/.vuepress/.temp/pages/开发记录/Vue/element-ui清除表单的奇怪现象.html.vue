<template><div><h1 id="element-ui-清除表单的奇怪现象" tabindex="-1"><a class="header-anchor" href="#element-ui-清除表单的奇怪现象" aria-hidden="true">#</a> element-ui 清除表单的奇怪现象</h1>
<p><code v-pre>element-ui </code>中<code v-pre> form</code> 中有个清空表单的方法，即假如给表单一个 <code v-pre>ref='form'</code>, 则清空表单的方法为 <code v-pre>this.$refs.form.resetFields()</code></p>
<p>可当在 <code v-pre>dialog</code> 组件中用这个方法的时候，这就出现问题了，居然清空不了</p>
<p>问题的本质是因为你第一次打开 <code v-pre>dialog</code> 的时候给表单绑定的 <code v-pre>form </code>赋值了，这时候这个 <code v-pre>form</code> 的初始值就变成了你所赋的值。 <code v-pre>resetFields </code>的时候，会将<code v-pre> form</code> 对应的每个值重置到初始值，这时候的初始值就是你第一次打开 <code v-pre>dialog</code> 的时候赋的那个值, 而不是在 <code v-pre>data</code> 里声明的初始值</p>
<p>如表单绑定的值为：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
 <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
 <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但在你打开 dialog 的时候，你又对它进行赋值,如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>form <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'frank'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候 <code v-pre>form </code>表单会默认这个新赋的值为初始值</p>
<p>解决方式是，等 <code v-pre>dialog</code> 已经初始化之后再给 <code v-pre>form </code>赋值，也就是:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 这里开始赋值</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>form<span class="token punctuation">.</span>xxx <span class="token operator">=</span> xxx
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>this.$refs.xxx.resetFields()</code>会将所有的表单信息清楚，如果你只想清除验证消息：<code v-pre> this.$refs.xxx.clearValidate()</code></p>
</div></template>


