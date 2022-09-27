<template><div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<ul>
<li>
<p>一个<strong>先进先出</strong>的数据结构</p>
</li>
<li>
<p>JavaScript 中<strong>没有</strong>队列，但可以用 Array 实现队列的所有功能。</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> item1 <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> item2 <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2>
<p>需要先进先出的场景，比如：食堂排队打饭、JS 异步中的任务队列、计算最近请求次数。</p>
<h3 id="最近的请求次数" tabindex="-1"><a class="header-anchor" href="#最近的请求次数" aria-hidden="true">#</a> 最近的请求次数</h3>
<p><a href="https://leetcode-cn.com/problems/number-of-recent-calls/" target="_blank" rel="noopener noreferrer">LeetCode：933. 最近的请求次数<ExternalLinkIcon/></a></p>
<ul>
<li>解题思路</li>
</ul>
<p>越早发出的请求越早不在最近 3000ms 内的请求里</p>
<p>满足先进先出，考虑用队列</p>
<ul>
<li>解题步骤</li>
</ul>
<ol>
<li>有新请求就入队，3000ms 前发出的请求出队。</li>
<li>队列的长度就是最近请求次数。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */</span>

<span class="token comment">// @lc code=start</span>

<span class="token keyword">var</span> <span class="token function-variable function">RecentCounter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>q <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">t</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">RecentCounter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">ping</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 先进先出 用队列！</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
  <span class="token comment">//    3000ms前的请求出队</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>q<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> t <span class="token operator">-</span> <span class="token number">3000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>q<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>q<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */</span>
<span class="token comment">// @lc code=end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端与队列-js-异步中的任务队列" tabindex="-1"><a class="header-anchor" href="#前端与队列-js-异步中的任务队列" aria-hidden="true">#</a> 前端与队列：js 异步中的任务队列</h3>
<p>事件循环与任务队列</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/事件循环与任务队列.png" alt="事件循环与任务队列" loading="lazy">!</p>
</div></template>


