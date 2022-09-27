<template><div><div class="custom-container tip">
<p class="custom-container-title">官方网站</p>
<p><a href="https://ant-design.gitee.io/index-cn" target="_blank" rel="noopener noreferrer">国内镜像<ExternalLinkIcon/></a></p>
</div>
<p>AntDesign ，简称 antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。</p>
<p>中后台的产品 属于<strong>工具性产品</strong>，很多优秀的设计团队通过自身的探索和积累，形成了自己的设计体系。</p>
<p>AntDesign 的兼容性：现代浏览器和 IE11（需要 polyfills）,支持服务端渲染,Electron</p>
<h2 id="antdesign-的安装" tabindex="-1"><a class="header-anchor" href="#antdesign-的安装" aria-hidden="true">#</a> AntDesign 的安装</h2>
<ol>
<li>
<p><code v-pre>yarn add antd</code></p>
</li>
<li>
<p>我们需要在 index.js 中引入全局的 Antd 样式：<code v-pre>import &quot;antd/dist/antd.css&quot;;</code></p>
</li>
<li>
<p>在 App.js 中就可以使用一些组件了</p>
</li>
</ol>
<h2 id="craco" tabindex="-1"><a class="header-anchor" href="#craco" aria-hidden="true">#</a> craco</h2>
<p>上面的使用过程是无法对主题进行配置的，好像对主题等相关的高级特性进行配置，需要修改 create-react-app 的默认配置。</p>
<p>如何修改 create-react-app 的默认配置呢？craco；（目前 antd 推荐的方案）</p>
<h3 id="使用-craco" tabindex="-1"><a class="header-anchor" href="#使用-craco" aria-hidden="true">#</a> 使用 craco</h3>
<ol>
<li><code v-pre>yarn add @craco/craco</code></li>
<li>修改 package.json 文件</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token operator">-</span> <span class="token string">"start"</span><span class="token operator">:</span> <span class="token string">"react-scripts start"</span><span class="token punctuation">,</span>
<span class="token operator">-</span> <span class="token string">"build"</span><span class="token operator">:</span> <span class="token string">"react-scripts build"</span><span class="token punctuation">,</span>
<span class="token operator">-</span> <span class="token string">"test"</span><span class="token operator">:</span> <span class="token string">"react-scripts test"</span><span class="token punctuation">,</span>
<span class="token operator">+</span> <span class="token string">"start"</span><span class="token operator">:</span> <span class="token string">"craco start"</span><span class="token punctuation">,</span>
<span class="token operator">+</span> <span class="token string">"build"</span><span class="token operator">:</span> <span class="token string">"craco build"</span><span class="token punctuation">,</span>
<span class="token operator">+</span> <span class="token string">"test"</span><span class="token operator">:</span> <span class="token string">"craco test"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>在根目录下创建 craco.config.js 文件用于修改默认配置</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">// 配置文件 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置主题" tabindex="-1"><a class="header-anchor" href="#配置主题" aria-hidden="true">#</a> 配置主题</h3>
<p><a href="https://ant-design.gitee.io/docs/react/use-with-create-react-app-cn#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
<h3 id="配置别名" tabindex="-1"><a class="header-anchor" href="#配置别名" aria-hidden="true">#</a> 配置别名</h3>
<p>配置别名也需要修改 webpack 的配置，当然我们也可以借助于 craco 来完成：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token parameter">dir</span> <span class="token operator">=></span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">webpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">'@'</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"src"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在导入时就可以按照下面的方式来使用了：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> HYCommentInput <span class="token keyword">from</span> <span class="token string">'@/components/comment-input'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


