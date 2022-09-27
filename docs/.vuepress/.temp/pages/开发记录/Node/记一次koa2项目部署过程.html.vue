<template><div><p>// TODO 有服务器改</p>
<h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2>
<p>一台安装宝塔面板的<code v-pre>centOS</code>服务器,我的版本是 7.9</p>
<h2 id="安装软件" tabindex="-1"><a class="header-anchor" href="#安装软件" aria-hidden="true">#</a> 安装软件</h2>
<p>之后在宝塔面板的软件商店：安装<code v-pre>mongodb</code>,<code v-pre>nginx</code>,<code v-pre>pm2管理器</code></p>
<h2 id="前端配置" tabindex="-1"><a class="header-anchor" href="#前端配置" aria-hidden="true">#</a> 前端配置</h2>
<p>在服务器<code v-pre>/www/wwwroot</code>目录下放入前端<strong>打包后</strong>代码</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/wwwroot.png" alt="wwwroot" loading="lazy"></p>
<p>然后配置<code v-pre>nginx</code>，随便在那个文件夹(我是在<code v-pre>/www/wwwroot/nginx</code>下)，新建一个<code v-pre>.conf</code>配置文件，如下进行配置，我已经配置好了域名</p>
<p>一定要在<code v-pre>nginx</code>主配置文件中加上：<code v-pre>include /www/nginx/*.conf;</code></p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/nginx主配置文件.png" alt="nginx主配置文件" loading="lazy"></p>
<div class="language-conf ext-conf line-numbers-mode"><pre v-pre class="language-conf"><code>server {
        listen 80;
        server_name message.zfhblog.top;

        location / {
                root /www/wwwroot/message;
                index index.html;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在前端页面已经可以访问了，我们对后端服务进行配置</p>
<h2 id="后端配置" tabindex="-1"><a class="header-anchor" href="#后端配置" aria-hidden="true">#</a> 后端配置</h2>
<p>接着把后端代码，不要<code v-pre>node_modules</code>,传到服务器，在终端输入<code v-pre>npm i</code>,在这之前尽量更换淘宝源</p>
<p>在软件商店打开 <code v-pre>PM2</code>,如图进行添加项目，看下有没有出现停止重启，说明基本成功了，再看下有没有报错</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/PM2配置.png" alt="PM2配置" loading="lazy"></p>
<p><strong>我遇到了一个比较奇葩的报错，说找不到某个具体的模块，怀疑是相对路径的问题，于是我把相对路径，全部换成了服务器的文件绝对路径，最后可以了</strong></p>
<p>成功后,接下来,配置跨域 <code v-pre>Nginx </code>代理,还是来到 <code v-pre>Nginx</code> 的配置修改:</p>
<div class="language-conf ext-conf line-numbers-mode"><pre v-pre class="language-conf"><code>server {
        listen 80;
        server_name message.zfhblog.top;

        location / {
                root /www/wwwroot/message;
                index index.html;
        }
        location /api/ {
            proxy_pass http://localhost:3000/;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后重启<code v-pre>Nginx</code>,最后一步还需要在前端项目中修改的<code v-pre>baseURL</code>,然后重新打包上传</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'http://message.zfhblog.top/api/'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此完成项目部署,上线成功</p>
</div></template>


