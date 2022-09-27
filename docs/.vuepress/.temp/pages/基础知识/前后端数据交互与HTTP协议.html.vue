<template><div><h2 id="前后端数据交互" tabindex="-1"><a class="header-anchor" href="#前后端数据交互" aria-hidden="true">#</a> 前后端数据交互</h2>
<h3 id="初始前后端通信" tabindex="-1"><a class="header-anchor" href="#初始前后端通信" aria-hidden="true">#</a> 初始前后端通信</h3>
<p>前后端通信方式什么？</p>
<p>前端和后端数据交互的过程&lt;=&gt;浏览器和服务器交互的过程</p>
<p>前端向后端发送数据：</p>
<p>1.登录功能</p>
<p>2.搜索功能</p>
<p>后端向前端发送数据：</p>
<p>页面上的图、文字等内容</p>
<h3 id="前后端通信的过程与概念解释" tabindex="-1"><a class="header-anchor" href="#前后端通信的过程与概念解释" aria-hidden="true">#</a> 前后端通信的过程与概念解释</h3>
<ol>
<li>
<p>前后端通信的过程<br>
前后端通信是在 <code v-pre>请求-响应</code> 中完成的</p>
</li>
<li>
<p>概念解释</p>
</li>
</ol>
<ul>
<li>前端：<code v-pre>浏览器端</code></li>
<li>客户端：只要能和通信的就叫<code v-pre>客户端</code></li>
<li>后端：<code v-pre>服务器端</code></li>
</ul>
<h3 id="前后端的通信方式" tabindex="-1"><a class="header-anchor" href="#前后端的通信方式" aria-hidden="true">#</a> 前后端的通信方式</h3>
<ol>
<li>使用浏览器访问网页</li>
</ol>
<p>在浏览器地址栏输入网址，按下回车</p>
<ol start="2">
<li>Html 的标签</li>
</ol>
<p>浏览器在解析 Html 标签的时候，遇到一些特殊的标签( <code v-pre>link</code> <code v-pre>img</code> <code v-pre>script</code> <code v-pre>iframe</code> )，会再次向服务器发送请求</p>
<p>还有一些标签(<code v-pre>a</code>,<code v-pre>from(表单)</code>)，浏览器解析的时候，不会向服务器发送请求，但是用户可以使用他们向服务器发送请求</p>
<ol start="3">
<li>Ajax Fetch</li>
</ol>
<h2 id="服务端职责" tabindex="-1"><a class="header-anchor" href="#服务端职责" aria-hidden="true">#</a> 服务端职责</h2>
<ul>
<li>处理 <code v-pre>HTTP</code> 请求(<code v-pre>req</code>,<code v-pre>res</code>)</li>
<li>定义路由,供前端 <code v-pre>Ajax</code> 访问</li>
<li>使用数据库，存储和查询数据</li>
</ul>
<h2 id="服务端处理数据-路由" tabindex="-1"><a class="header-anchor" href="#服务端处理数据-路由" aria-hidden="true">#</a> 服务端处理数据:路由</h2>
<div class="custom-container tip">
<p class="custom-container-title">路由和 URL 的关系</p>
<p><code v-pre>GET /api/list 路由 ---&gt; axios.get('api/list?a=1')</code></p>
<p><strong>路由是规则，url 是具体的形式</strong>两者不同</p>
</div>
<p>路由是<strong>服务端的入口规则</strong>，也是与前端的“约定”</p>
<p>路由主要包含：</p>
<ul>
<li>定义 <code v-pre>method</code>，如 <code v-pre>GET</code>,<code v-pre>POST</code> 等</li>
<li>定义 <code v-pre>url</code> 规则，如<code v-pre>/api/list</code> 和<code v-pre>/api/create</code></li>
<li>定义输入<code v-pre>Request body</code>和输出<code v-pre>Response body</code>格式</li>
</ul>
<h2 id="http-协议" tabindex="-1"><a class="header-anchor" href="#http-协议" aria-hidden="true">#</a> HTTP 协议</h2>
<h3 id="初识-http" tabindex="-1"><a class="header-anchor" href="#初识-http" aria-hidden="true">#</a> 初识 HTTP</h3>
<p><code v-pre>http</code>协议规定了客户端和服务端如何通讯</p>
<ul>
<li><code v-pre>url</code>：后端接口的地址，即前端 <code v-pre>Ajax</code> 请求时的地址</li>
<li><code v-pre>method</code>：请求方法，如 <code v-pre>GET</code> <code v-pre>POST</code> <code v-pre>PUT</code> <code v-pre>DELETE</code> 等</li>
<li>状态码：接口返回的状态，如 <code v-pre>200</code> <code v-pre>302</code> <code v-pre>404</code> <code v-pre>500</code> 等</li>
<li><code v-pre>Request</code>：请求</li>
<li><code v-pre>Request Body</code>：请求时发送给后端的数据</li>
<li><code v-pre>Request Content-type</code>：发送数据的格式，如 <code v-pre>json</code></li>
<li><code v-pre>Response</code>：响应</li>
<li><code v-pre>Response Body</code>：后端返回给前端的数据</li>
<li><code v-pre>Response Content-type</code>：返回数据的格式，如 <code v-pre>json</code></li>
</ul>
<ol>
<li>HTTP (<code v-pre>hypeText Transfer Protocol</code>:超文本传输协议)</li>
</ol>
<p><code v-pre>HTML</code>:超文本标记语言，超文本：原先一个个单一的文本，通过超链接将其联系起来。由原先的单一的文本变成了可无限伸、扩展的超級文本、立体文本</p>
<p>HTML、JS、CSS、图片、字体、音频、视频等等文件，都是通过<code v-pre>HTTP</code>在服务器和浏览器之间传输</p>
<p>每一次前后端通信，前端需要主动向后端发岀请求，后端接收到前端的请求后，可以给出响应</p>
<p><code v-pre>HTTP</code>是一个请求-响应协议</p>
<ol start="2">
<li>HTTP 请求响应的过程</li>
</ol>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/HTTP请求响应的过程.png" alt="HTTP请求响应的过程" loading="lazy"></p>
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
<h3 id="http-报文" tabindex="-1"><a class="header-anchor" href="#http-报文" aria-hidden="true">#</a> http 报文</h3>
<ol>
<li>HTTP 报文是什么</li>
</ol>
<ul>
<li>浏览器向服务器发送请求的时候，请求本身就是信息，叫<code v-pre>请求报文</code></li>
<li>服务器向浏览器发送响应时传输的信息，叫<code v-pre>响应报文</code></li>
</ul>
<ol start="2">
<li>HTTP 报文格式
// TODO：复查 2022.3.22</li>
</ol>
<ul>
<li>请求</li>
</ul>
<ol>
<li>请求头：起始行(黄色高亮部分)+首部（剩余部分为首部）</li>
</ol>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/起始行.png" alt="起始行" loading="lazy"></p>
<ol start="2">
<li>请求体</li>
</ol>
<p>GET 请求没有请求体，数据是通过请求头携带</p>
<p>POST 请求，有请求体，数据通过请求体携带</p>
<ul>
<li>响应</li>
</ul>
<ol>
<li>响应头：起始行+首部</li>
<li>响应体</li>
</ol>
<h3 id="http-方法" tabindex="-1"><a class="header-anchor" href="#http-方法" aria-hidden="true">#</a> HTTP 方法</h3>
<ol>
<li>常用的 HTTP 方法</li>
</ol>
<p>浏览器发送<strong>请求</strong>时采用的方法。和响应<strong>无关</strong></p>
<p><code v-pre>GET</code> <code v-pre>POST</code> <code v-pre>PUT</code> <code v-pre>DELETE</code></p>
<p>用来定义对于资源采取什么样的操作的，有各自的语义</p>
<ol start="2">
<li>HTTP 方法的语义</li>
</ol>
<ul>
<li><code v-pre>GET</code> 获取数据 -<code v-pre>POST</code> 创建数据</li>
<li><code v-pre>PUT</code> 更新数据(修改个人信息 修改密码) -<code v-pre>DELETE</code> 删除数据</li>
</ul>
<p>这些方法虽然有各自的语义，但是并不是强制性的</p>
<p>3.RESTful 接口设计</p>
<p>一种接口设计风格， 充分利用 HTTP 方法的语义</p>
<ul>
<li>普通方法：</li>
</ul>
<p>① 通过用户 ID 获取用户个人信息，使用 GET 方法<code v-pre>https://www.xxx.com/api/http/getUser?id=1</code></p>
<p>② 注册新用户，使用 POST 方法<code v-pre>https://www.xxx.com/api/http/addUser</code></p>
<p>③ 修改一个用户，使用 POST 方法<code v-pre>https://www.xxx.com/api/http/modifuUser</code></p>
<p>③ 删除一个用户，使用 POST 方法 <code v-pre>https://www.xxx.com/api/http/deleteUser</code></p>
<ul>
<li>RESTful 接口风格</li>
</ul>
<p>只需要定义一个接口：<code v-pre>https://www.xxx.com/api/http/User</code></p>
<p>分别通过四种语义的方法：GET(获取信息)、POST(注册用户)、PUT(修改信息)、DELETE(删除信息)</p>
<h3 id="get-和-post-方法的对比" tabindex="-1"><a class="header-anchor" href="#get-和-post-方法的对比" aria-hidden="true">#</a> GET 和 POST 方法的对比</h3>
<ol>
<li>
<p>语义：<code v-pre>GET</code>：获取数据,<code v-pre>POST</code>:创建数据</p>
</li>
<li>
<p>发送数据</p>
</li>
</ol>
<p>GET 通过地址在请求头中携带数据,能携带的数据和地址的长度有关，一般最多就几 K</p>
<p>POST 既可以通过地址在请求头中携带数据，也可以通过请求体携带数据,能携带的数据理论上是无限量的</p>
<p><strong><em>携带少量数据，可以使用 GET 请求。大量的数据可以使用 POST 请求</em></strong></p>
<ol start="3">
<li>
<p>缓存：Get 可以被缓存，post 不会被缓存</p>
</li>
<li>
<p>安全性：<strong>GET 和 POST 都不安全</strong></p>
</li>
</ol>
<h3 id="http-状态码" tabindex="-1"><a class="header-anchor" href="#http-状态码" aria-hidden="true">#</a> HTTP 状态码</h3>
<p><a href="https://www.runoob.com/http/http-status-codes.html" target="_blank" rel="noopener noreferrer">HTTP 状态码<ExternalLinkIcon/></a></p>
<p><strong><em>定义服务器对请求的处理结果，是服务器返回的</em></strong></p>
<p><code v-pre>100-199</code>=&gt;<strong>消息</strong>:代表请求已经被接受，需要继续处理</p>
<p><code v-pre>200-299</code>=&gt;<strong>成功</strong>:200</p>
<p><code v-pre>300-399</code>=&gt;<strong>重定向</strong>:301<code v-pre>永久重定向</code>，除非用户手动清除缓存;302<code v-pre>临时重定向</code>,不会缓存;304<code v-pre>没有修改</code>,所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。</p>
<p><code v-pre>400-499</code>=&gt;<strong>请求错误</strong>:404<code v-pre>Not Found(没有找到)</code></p>
<p><code v-pre>500-599</code>=&gt;<strong>服务器错误</strong>:500<code v-pre>服务器内部错误，无法完成请求</code></p>
</div></template>


