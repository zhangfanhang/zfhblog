<template><div><h2 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> ajax</h2>
<h3 id="ajax-简介" tabindex="-1"><a class="header-anchor" href="#ajax-简介" aria-hidden="true">#</a> Ajax 简介</h3>
<p><code v-pre>Ajax</code>即“<code v-pre>Asynchronous Javascript And XML</code>”（异步 JavaScript 和 XML），是指一种创建交互式、快速动态网页应用的网页开发技术，无需重新加载整个网页的情况下，能够更新部分网页的技术。</p>
<p><code v-pre>Ajax</code>中的异步：可以异步地向服务器发送请求，在等待响应的过程中，不会阻塞当前页面，浏览器可以做自己的事. 直到成功获取响应后，浏览器才开始处理响应数据。</p>
<p><code v-pre>XML</code> 可扩展标记语言，是前后端数据通信时传输数据的一种格式</p>
<p><code v-pre> XML</code> 现在已经不怎么用了，<strong>现在比较常用的时<code v-pre>JSON </code></strong></p>
<p><code v-pre>Ajax</code>其实就是浏览器与服务器之间的一种 <code v-pre>异步通信方式 </code></p>
<p>使用<code v-pre>Ajax</code>可以在不重新加载整个页面的情况下， <strong>对页面的某部分进行更新</strong></p>
<h3 id="ajax-的基本用法" tabindex="-1"><a class="header-anchor" href="#ajax-的基本用法" aria-hidden="true">#</a> Ajax 的基本用法</h3>
<p><code v-pre>Ajax</code>想要实现浏览器与服务器之间的异步通信，需要依靠<code v-pre>XMLHttpRequest</code>,它是一个<strong>构造函数</strong></p>
<ol>
<li>创建 xhr 对象</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>监听事件,处理响应</li>
</ol>
<p>当获取到响应后，会触发 xhr 对象的<code v-pre>readystatechange</code>事件，可以在该事件中对响应进行处理</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">!==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token comment">//HTTP CODE</span>
  <span class="token comment">//获取响应后，响应的内容会自动填充xhr对象的属性</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token operator">||</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'正常使用'</span><span class="token punctuation">)</span>
    <span class="token comment">//数据</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>readystatechange</code>事件监听<code v-pre>readyState</code>这个状态的变化
一共有 5 个状态</p>
<ul>
<li>0：未初始化，尚未调用<code v-pre>open()</code></li>
<li>1：启动，已经调用<code v-pre>open()</code>,但尚未调用<code v-pre>send()</code></li>
<li>2：发送，已经调用<code v-pre>send()</code>,当尚未接收到响应</li>
<li>3：接收，已经接收到部分响应数据</li>
<li>4：完成，已经接收到全部响应数据，并且可以在浏览器中使用</li>
</ul>
<ol start="3">
<li>准备发送请求<br>
调用<code v-pre>open()</code>并不会真正发送请求，而只是做好发送请求前的准备工作</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr
  <span class="token punctuation">.</span>open
  <span class="token comment">//'http方法',</span>
  <span class="token comment">//"地址url",true或false:是否为异步请求，一般肯定true</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>发送请求</li>
</ol>
<p>调用<code v-pre>send()</code>正式发送请求</p>
<p><code v-pre>send()</code>的参数是通过请求体携带的数据</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">//GET请求一般填null，因为GET不能通过请求体携带数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>eg:使用<code v-pre>Ajax</code>来完成前后端通信</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'https://www.imooc.com/api/http/search/suggest?words=js'</span>
<span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">!==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token operator">||</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="get-请求" tabindex="-1"><a class="header-anchor" href="#get-请求" aria-hidden="true">#</a> GET 请求</h3>
<ol>
<li>携带数据<br>
<code v-pre>GET</code>请求不能通过请求体携带数据，但可以通过请求头携带，
在 url 对应的接口下添加名值对</li>
<li>数据编码<br>
如果携带的数据时非英文字母的话，比如说汉字，<strong>就需要编码之后再发送给后端</strong>，不然会造成乱码问题</li>
</ol>
<h3 id="post-请求" tabindex="-1"><a class="header-anchor" href="#post-请求" aria-hidden="true">#</a> POST 请求</h3>
<ol>
<li>携带数据<br>
<code v-pre>POST</code>请求主要通过请求体携带数据，同时也可以通过请求头携带</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'https://www.imooc.com/api/http/search/suggest?words=js'</span>
<span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">!==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token operator">||</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
<span class="token comment">//如果想发送数据，直接写在 send()的参数位置，一般是字符串</span>
<span class="token comment">// 不能直接传递对象，需要先将对象转换成字符串的形式</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'username=alex&amp;age=18'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>数据编码:如果携带的数据时非英文字母的话，比如说汉字，<strong>就需要编码之后再发送给后端</strong>，不然会造成乱码问题</li>
</ol>
<h2 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h2>
<h3 id="初识-json" tabindex="-1"><a class="header-anchor" href="#初识-json" aria-hidden="true">#</a> 初识 JSON</h3>
<ol>
<li>
<p><code v-pre>javascript object notation</code>,<code v-pre>Ajax</code>发送和接受的一种数据格式</p>
</li>
<li>
<p>为什么需要 JSON</p>
</li>
</ol>
<p>JSON 有 3 种形式，每种形式的写法都和<code v-pre>JS</code>中的数据类型很像，可以很轻松的和<code v-pre>JS</code>中的数据类型互相转换</p>
<h3 id="json-的三种形式" tabindex="-1"><a class="header-anchor" href="#json-的三种形式" aria-hidden="true">#</a> JSON 的三种形式</h3>
<ol>
<li>简单值形式</li>
</ol>
<p>文件名：<code v-pre>xxx.json</code><br>
JSON 的简单值形式就对应着 JS 中的基础数据类型,数字，字符串，布尔值，null</p>
<ol start="2">
<li>对象形式</li>
</ol>
<p><code v-pre>JSON</code>的对象形式就对应着<code v-pre>JS</code>中的对象</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span>
  <span class="token property">"age"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token property">"hobby"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"足球"</span><span class="token punctuation">,</span> <span class="token string">"乒乓球"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>数组形式</li>
</ol>
<p><code v-pre>JSON</code>的数组形式就对应着 JS 中的数组</p>
<div class="custom-container warning">
<p class="custom-container-title">注意事项</p>
<ol>
<li>JSON 中没有<code v-pre>underfined</code>值</li>
<li>JSON 中的字符串必须使用双引号</li>
<li>JSON 中是不能注释的</li>
<li>JSON 中对象的属性名必须使用双引号，属性值如果是字符串也必须用双引号。</li>
</ol>
</div>
<h3 id="json-的常用方法" tabindex="-1"><a class="header-anchor" href="#json-的常用方法" aria-hidden="true">#</a> JSON 的常用方法</h3>
<ol>
<li><code v-pre>JSON.parse()</code><br>
可以将<code v-pre>JSON</code>格式的字符串解析成 JS 中的对应值<br>
一定要是合法的<code v-pre>JSON</code>字符串，否则会报错</li>
<li><code v-pre>JSON.stringify()</code>
可以将<code v-pre>JS</code>的<strong>基本数据类型，对象或者数组</strong>转换成<code v-pre>JSON</code>格式的字符串</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>
  <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'足球'</span><span class="token punctuation">,</span> <span class="token string">'乒乓球'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>使用 JSON.parse()和 JSON.stringify()封装 localStorage</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> storage <span class="token operator">=</span> window<span class="token punctuation">.</span>localStorage
<span class="token comment">// 设置</span>
<span class="token keyword">const</span> <span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  storage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 获取</span>
<span class="token keyword">const</span> <span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>storage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 删除</span>
<span class="token keyword">const</span> <span class="token function-variable function">remove</span> <span class="token operator">=</span> <span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  storage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 清空</span>
<span class="token keyword">const</span> <span class="token function-variable function">clear</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  storage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2>
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3>
<p>向一个域发送请求，如果要请求的域和当前域是不同域，就叫<code v-pre>跨域</code></p>
<p>不同域之间的请求，就是跨域请求</p>
<h3 id="什么是不同域-什么是同域" tabindex="-1"><a class="header-anchor" href="#什么是不同域-什么是同域" aria-hidden="true">#</a> 什么是不同域，什么是同域</h3>
<p><code v-pre>https(协议)：// www.imooc.com (域名) ：443 (端口号) /course/list (路径)</code></p>
<ul>
<li><strong>协议 域名 端口号 任何一个不一样 就是不同域</strong></li>
<li>与路径无关，路径不一样无所谓</li>
</ul>
<h3 id="跨域请求为什么会被阻止" tabindex="-1"><a class="header-anchor" href="#跨域请求为什么会被阻止" aria-hidden="true">#</a> 跨域请求为什么会被阻止</h3>
<ul>
<li>阻止跨域请求，其实是浏览器本身的一种安全策略---<code v-pre>同源策略</code></li>
<li>其他客户端或者服务器不存在跨域被阻止的问题</li>
</ul>
<h3 id="跨域解决方案" tabindex="-1"><a class="header-anchor" href="#跨域解决方案" aria-hidden="true">#</a> 跨域解决方案</h3>
<ul>
<li><code v-pre>CORS</code> 跨域资源共享</li>
<li><code v-pre>JSONP </code></li>
<li>优先使用<code v-pre>CORS</code> ，如果浏览器不支持，使用<code v-pre>JSONP </code></li>
</ul>
<h4 id="cors-跨域资源共享" tabindex="-1"><a class="header-anchor" href="#cors-跨域资源共享" aria-hidden="true">#</a> CORS 跨域资源共享</h4>
<p><a href="http://www.ruanyifeng.com/blog/2016/04/cors.html" target="_blank" rel="noopener noreferrer">跨域资源共享 CORS 详解<ExternalLinkIcon/></a></p>
<p>使用 CORS 跨域的过程</p>
<p>① 浏览器发送请求</p>
<p>② 后端在响应头中添加 <code v-pre>Access-Control-Allow-Origin </code>头信息</p>
<p>③ 浏览器接收到响应</p>
<p>④ 如果是同域下的请求，浏览器不会额外做什么，这次前后端通信就圆满完成了</p>
<p>⑤ 如果是跨域请求，浏览器会从响应头中查找是否允许跨域访问</p>
<p>⑥ 如果允许跨域，通信圆满完成</p>
<p>⑦ 如果没找到或不包含想要跨域的域名，就丢弃响应结果</p>
<p><code v-pre>CORS</code>兼容性：IE10 及以上可以正常使用</p>
<h3 id="jsonp" tabindex="-1"><a class="header-anchor" href="#jsonp" aria-hidden="true">#</a> JSONP</h3>
<ol>
<li>原理<br>
<code v-pre>script</code> 标签跨域不会被浏览器阻止<br>
<code v-pre>JSONP</code>主要就是利用<code v-pre>SCRIPT</code>标签，加载跨域文件</li>
<li>使用<code v-pre>JSONP </code>实现跨域<br>
服务器端准备好<code v-pre>JSONP</code>接口<br>
手动加载<code v-pre>JSONP</code>标签或</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> <span class="token function-variable function">handleResponse</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.imooc.com/api/http/jsonp?callback=handleResponse<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态加载<code v-pre>JSONP</code>接口</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 动态加载JSONP接口</span>
<span class="token keyword">const</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'script'</span><span class="token punctuation">)</span>
script<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'https://www.imooc.com/api/http/jsonp?callback=handleResponse'</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleResponse</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xhr-对象" tabindex="-1"><a class="header-anchor" href="#xhr-对象" aria-hidden="true">#</a> XHR 对象</h2>
<h3 id="xhr-的属性" tabindex="-1"><a class="header-anchor" href="#xhr-的属性" aria-hidden="true">#</a> XHR 的属性</h3>
<ol>
<li><code v-pre>responseType</code> 和<code v-pre>response</code>属性</li>
</ol>
<ul>
<li><code v-pre>responseText</code>只能在没有设置<code v-pre>responseType</code>或者<code v-pre>responseType=''</code>或<code v-pre>responseType='text'</code> 的时候才能使用</li>
<li><code v-pre>response</code>可以替代<code v-pre>responseText</code>，默认返回字符串，可以通过<code v-pre>responseType</code>设置返回形式(如果设置为<code v-pre>JSON</code>，浏览器默认调用<code v-pre>JSON.parse()</code>解析成 JS 中的对应值，但服务器还是返回的是<code v-pre>JSON</code>格式的字符串)</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'json'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>
<p><code v-pre>timeout</code>属性:设置请求的超时时间（单位：ms）</p>
</li>
<li>
<p><code v-pre>withCredentitals</code> 属性</p>
</li>
</ol>
<ul>
<li>指定使用<code v-pre>Ajax</code>发送请求时是否携带<code v-pre>Cookie </code></li>
<li>使用<code v-pre>Ajax</code>发送请求，默认情况下，<strong>同域时，会携带<code v-pre>Cookie</code>,跨域时，不会</strong></li>
<li><strong>最终是否能成功跨域携带<code v-pre>Cookie</code>，还要看服务器同不同意</strong></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span>withCredentials <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="xhr-方法" tabindex="-1"><a class="header-anchor" href="#xhr-方法" aria-hidden="true">#</a> XHR 方法</h3>
<ol>
<li><code v-pre>abort()</code>:终止当前请求,一般配合 abort 事件一起使用</li>
<li><code v-pre>setRequestHeader()</code>:可以设置请求头信息</li>
</ol>
<p><a href="https://www.runoob.com/http/http-content-type.html" target="_blank" rel="noopener noreferrer">HTTP content-type<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//  请求头中的`Content-Type`字段用来告诉服务器，浏览器发送的数据是什么格式的。</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/x-www-form-urlencoded'</span><span class="token punctuation">)</span> <span class="token comment">// 对应的数据格式：'username=ased&amp;password=asd'</span>

xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/json'</span><span class="token punctuation">)</span> <span class="token comment">// JSON格式的数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xhr-的事件" tabindex="-1"><a class="header-anchor" href="#xhr-的事件" aria-hidden="true">#</a> XHR 的事件</h3>
<ol>
<li><code v-pre>load</code> 事件:响应数据可用时触发
<strong>推荐使用<code v-pre>onload</code>代替<code v-pre>onreadystatechange</code></strong></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'https://www.imooc.com/api/http/search/suggest?words=js'</span>
<span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">'load'</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token operator">||</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span>
<span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'json'</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>error 事件<br>
请求发生错误时触发</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'https://www.imooc1.com/api/http/search/suggest?words=js'</span>
<span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">'load'</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token operator">||</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span>
<span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'访问出错拉！'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'json'</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>abort 事件<br>
调用 abort()终止请求时触发</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'https://www.imooc.com/api/http/search/suggest?words=js'</span>
<span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">'abort'</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'543629463'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span>
<span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'访问出错拉！'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'json'</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>timeout 事件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'json'</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">!==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token operator">||</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'https://www.imooc.com/api/http/search/suggest?words=js'</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">10</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">ontimeout</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Timeout!!'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="formdata" tabindex="-1"><a class="header-anchor" href="#formdata" aria-hidden="true">#</a> FormData</h2>
<p>使用 Ajax 提交表单(避免直接提交表单跳转)</p>
<p>FormData 可用于发送表单数据</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>login<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户名<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提交<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> login <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'login'</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'https://www.imooc.com/api/http/search/suggest?words=js'</span>
    btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
      <span class="token string">'click'</span><span class="token punctuation">,</span>
      <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 阻止表单跳转</span>
        e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
          <span class="token string">'load'</span><span class="token punctuation">,</span>
          <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token operator">||</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token boolean">false</span>
        <span class="token punctuation">)</span>
        xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'json'</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span>login<span class="token punctuation">)</span>
        xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token boolean">false</span>
    <span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FormData 的基本用法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 通过 HTML 表单元素创建 FormData 对象</span>
<span class="token keyword">const</span> fd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span>表单元素<span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>fd<span class="token punctuation">)</span>

<span class="token comment">// 通过 自身的append() 方法添加数据</span>
<span class="token keyword">const</span> fd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span>表单元素<span class="token punctuation">)</span>
fd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
fd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'sex'</span><span class="token punctuation">,</span> <span class="token string">'male'</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>fd<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装-ajax" tabindex="-1"><a class="header-anchor" href="#封装-ajax" aria-hidden="true">#</a> 封装 Ajax</h2>
<p>1、<code v-pre>ajax</code>的原理需要掌握一下。即<code v-pre>ajax</code>这门技术是使用<code v-pre>XMLHttpRequest</code>这个对象实现的，该对象有一些方法和属性，比如<code v-pre>open()</code>、<code v-pre>send()</code>、<code v-pre>responseType</code>......它们的含义是什么要知道。
2、<code v-pre>ajax</code>的具体实现不需要自己手动封装。
3、实际开发中会使用现成的插件，我们只需要按照插件的文档使用即可</p>
<p>源代码：</p>
<p><a href="https://github.com/zhangfanhang/hand-tear-code/tree/master/ajax_%E5%B0%81%E8%A3%85" target="_blank" rel="noopener noreferrer">hand-tear-code<ExternalLinkIcon/></a></p>
<h2 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> axios</h2>
<ol>
<li>
<p>基于 Promise 的 HTTP 库</p>
</li>
<li>
<p><a href="http://www.axios-js.com/zh-cn/docs/" target="_blank" rel="noopener noreferrer">axios 中文官方文档<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.kancloud.cn/yunye/axios/234845" target="_blank" rel="noopener noreferrer">axios 中文说明<ExternalLinkIcon/></a></p>
</li>
</ol>
<h2 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> Fetch</h2>
<p><a href="https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html" target="_blank" rel="noopener noreferrer">Fetch API 教程<ExternalLinkIcon/></a></p>
<ol>
<li>也是前后端通信的一种方式</li>
<li>是<code v-pre>Ajax</code>的一种替代方案，它是基于<code v-pre>Promise</code>的</li>
<li><strong><code v-pre>Ajax</code>的兼容性比 <code v-pre>Fetch</code> 好</strong></li>
<li><code v-pre>Fetch</code>没有<code v-pre>abort</code> <code v-pre>timeout</code></li>
</ol>
</div></template>


