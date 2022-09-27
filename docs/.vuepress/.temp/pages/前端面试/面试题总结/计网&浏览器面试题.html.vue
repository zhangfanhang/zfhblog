<template><div><h2 id="说一下-http-和-https-的区别" tabindex="-1"><a class="header-anchor" href="#说一下-http-和-https-的区别" aria-hidden="true">#</a> 说一下 http 和 https 的区别？</h2>
<p>https=http+ssl</p>
<p>https 有 CA 证书，http 一般没有</p>
<p>http 是超文本传输协议，信息是明文传输的。https 则是具有安全性的 SSL 加密传输协议。</p>
<p>http 默认 80 端口，https 默认 443 端口</p>
<h2 id="tcp-和-udp-的区别" tabindex="-1"><a class="header-anchor" href="#tcp-和-udp-的区别" aria-hidden="true">#</a> tcp 和 udp 的区别？</h2>
<ol>
<li>基于连接与无连接；</li>
<li>对系统资源的要求（TCP 较多，UDP 少）；</li>
<li>UDP 程序结构较简单；</li>
<li>流模式与数据报模式 ；</li>
<li>TCP 保证数据正确性，UDP 可能丢包，TCP 保证数据顺序，UDP 不保证。</li>
</ol>
<p><a href="https://www.cnblogs.com/fundebug/p/differences-of-tcp-and-udp.html" target="_blank" rel="noopener noreferrer">一文搞懂 TCP 与 UDP 的区别<ExternalLinkIcon/></a></p>
<h2 id="如何解决跨域问题" tabindex="-1"><a class="header-anchor" href="#如何解决跨域问题" aria-hidden="true">#</a> 如何解决跨域问题?</h2>
<p><a href="https://zfhblog.top/qian-duan-kai-fa/qi-ta-zhi-shi/ajax-fetchyu-kua-yu-qing-qiu.html#%E8%B7%A8%E5%9F%9F" target="_blank" rel="noopener noreferrer">跨域<ExternalLinkIcon/></a></p>
<p>同源策略</p>
<ul>
<li>JSONP</li>
<li>CORS</li>
</ul>
<h2 id="手写一个简易的-ajax" tabindex="-1"><a class="header-anchor" href="#手写一个简易的-ajax" aria-hidden="true">#</a> 手写一个简易的 ajax</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'json'</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">404</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'404 not found'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> <span class="token string">'https://www.imooc.com/api/http/search/suggest?words=js'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token comment">// promise版</span>
<span class="token keyword">function</span> <span class="token function">ajax</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span>responseType <span class="token operator">=</span> <span class="token string">'json'</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">404</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'404 not Found'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'GET'</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">'https://www.imooc.com/api/http/search/suggest?words=js'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cookie、localstorage、sessionstorage-区别" tabindex="-1"><a class="header-anchor" href="#cookie、localstorage、sessionstorage-区别" aria-hidden="true">#</a> Cookie、LocalStorage、SessionStorage 区别</h2>
<div class="custom-container tip">
<p class="custom-container-title">参考</p>
<ul>
<li>
<p><a href="https://juejin.cn/post/6916157109906341902/#heading-44" target="_blank" rel="noopener noreferrer">浏览器本地存储<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="http://blog.haoji.me/cookie-scope.html" target="_blank" rel="noopener noreferrer">谨记：Cookie 的作用域不区分协议和端口<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://segmentfault.com/a/1190000010419598" target="_blank" rel="noopener noreferrer">cookie 的 domain 属性<ExternalLinkIcon/></a></p>
</li>
</ul>
</div>
<p><strong>同源：协议相同/域名相同/端口相同</strong></p>
<ol>
<li>存储大小</li>
</ol>
<p><code v-pre>cookie</code>：4k</p>
<p><code v-pre>sessionStorage</code>：5M</p>
<p><code v-pre>localStorage</code>：5M</p>
<ol start="2">
<li>生命周期</li>
</ol>
<p><code v-pre>cookie</code>:一般由服务器生成，可以设置失效时间；若没有设置时间，关闭浏览器 cookie 失效，如果设置了时间,过期后失效</p>
<p>Web Storage 的目的是为了克服由 cookie 带来的一些限制，当数据需要被严格控制在客户端上时，无须持续地将数据发回服务器。Web Storage 的两个主要目标是：</p>
<ul>
<li>提供一种在 cookie 之外存储会话数据的途径。</li>
<li>提供一种存储大量可以跨会话存在的数据的机制。</li>
</ul>
<p><code v-pre>sessionStorage</code>：仅在当前浏览器窗口关闭之前有效，关闭页面或者浏览器会被清除</p>
<p><code v-pre>localStorage</code>：永久有效，窗口或者浏览器关闭也会一直保存，除非手动永久删除</p>
<ol start="3">
<li>作用域</li>
</ol>
<p><code v-pre>cookie</code>：Cookie 的作用域仅仅由 domain(cookie 的作用域是 domain 本身以及 domain 下的所有子域名。例如设置<code v-pre>xxx.com</code>为 domain 的 cookie 时，<strong>只有该域名或者其子域名才能获取到这个 cookie</strong>)和 path 决定(<code v-pre>path</code>限定了访问<code v-pre>cookie</code>的范围（同一域名），<strong>使用 JS 只能读写当前路径和上級路径的 Cookie，无法读写下级路径的 Cookie</strong> )，与协议和端口无关</p>
<p>在访问子路径时，会包含其父路径的 Cookie，而在访问父路径时，不包含子路径的 Cookie</p>
<p><code v-pre>sessionStorage</code>：当前会话窗口</p>
<p><code v-pre>localStorage</code>：在所有<code v-pre>同源窗口</code>中共享</p>
<ol start="4">
<li>通信</li>
</ol>
<p><code v-pre>cookie</code>：cookie 在浏览器和服务器之间来回传递，如果使用 cookie 保存过多数据会造成性能问题</p>
<p><code v-pre>sessionStorage</code>：仅在客户端（浏览器）中保存，不参与服务器的通信</p>
<p><code v-pre>localStorage</code>：仅在客户端（浏览器）中保存，不参与服务器的通信</p>
<ol start="5">
<li>应用场景</li>
</ol>
<p><code v-pre>cookie</code>：保存用户登录状态；跟踪用户行为</p>
<p><code v-pre>sessionStorage</code>：敏感账号一次性登录，单页面用的较多</p>
<p><code v-pre>localStorage</code>：用于长期登录，适于长期保存在本地的数据</p>
<h2 id="从输入-url-到看到页面发生了什么" tabindex="-1"><a class="header-anchor" href="#从输入-url-到看到页面发生了什么" aria-hidden="true">#</a> 从输入 URL 到看到页面发生了什么？</h2>
<ul>
<li>浏览器地址栏输入 URL 并回车</li>
<li>浏览器查找当前 URL 是否存在缓存，并比较缓存是否过期</li>
<li>DNS 解析 URL 对应的 IP</li>
<li>根据 IP 建立 TCP 连接（三次握手）</li>
<li>发送 http 请求</li>
<li>服务器处理请求，浏览器接受 HTTP 响应</li>
<li>浏览器解析并渲染页面</li>
<li>关闭 TCP 连接（四次挥手）</li>
</ul>
<h2 id="get-和-post-请求有什么区别" tabindex="-1"><a class="header-anchor" href="#get-和-post-请求有什么区别" aria-hidden="true">#</a> get 和 post 请求有什么区别?</h2>
<p>Post 和 Get 是 HTTP 请求的两种方法，其区别如下：</p>
<ul>
<li>
<p>应用场景： GET 请求是一个幂等(<strong>是指可以使用相同参数重复执行，并能获得相同结果的函数。</strong>)的请求，一般 Get 请求用于对服务器资源不会产生影响的场景，比如说请求一个网页的资源。而 Post 不是一个幂等的请求，一般用于对服务器资源会产生影响的情景，比如注册用户这一类的操作。</p>
</li>
<li>
<p>是否缓存： 因为两者应用场景不同，浏览器一般会对 Get 请求缓存，但很少对 Post 请求缓存。</p>
</li>
<li>
<p>发送的报文格式： Get 请求的报文中实体部分为空，Post 请求的报文中实体部分一般为向服务器发送的数据。</p>
</li>
<li>
<p>安全性： Get 请求可以将请求的参数放入 url 中向服务器发送，这样的做法相对于 Post 请求来说是不太安全的，因为请求的 url 会被保留在历史记录中。</p>
</li>
<li>
<p>请求长度： 浏览器由于对 url 长度的限制，所以会影响 get 请求发送数据时的长度。这个限制是浏览器规定的，并不是 RFC 规定的。</p>
</li>
<li>
<p>参数类型： post 的参数传递支持更多的数据类型。</p>
</li>
</ul>
</div></template>


