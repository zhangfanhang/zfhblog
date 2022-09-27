<template><div><h1 id="vue3-elementplus-koa2-全栈开发后台系统学习记录" tabindex="-1"><a class="header-anchor" href="#vue3-elementplus-koa2-全栈开发后台系统学习记录" aria-hidden="true">#</a> vue3+ElementPlus+Koa2 全栈开发后台系统学习记录</h1>
<h2 id="前端部分" tabindex="-1"><a class="header-anchor" href="#前端部分" aria-hidden="true">#</a> 前端部分</h2>
<h2 id="vite-环境变量" tabindex="-1"><a class="header-anchor" href="#vite-环境变量" aria-hidden="true">#</a> vite 环境变量</h2>
<p><a href="https://cn.vitejs.dev/guide/env-and-mode.html#env-variables" target="_blank" rel="noopener noreferrer">环境变量和模式<ExternalLinkIcon/></a></p>
<h2 id="axios-的使用" tabindex="-1"><a class="header-anchor" href="#axios-的使用" aria-hidden="true">#</a> axios 的使用</h2>
<h3 id="二次封装" tabindex="-1"><a class="header-anchor" href="#二次封装" aria-hidden="true">#</a> 二次封装</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * axios 二次封装
 */</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token comment">// 引入路由实例</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'../router'</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">'../config/environmentConfig.js'</span>
<span class="token keyword">import</span> storage <span class="token keyword">from</span> <span class="token string">'@/utils/storage.js'</span>

<span class="token comment">// 错误消息</span>
<span class="token keyword">const</span> <span class="token constant">TOKEN_INVALID</span> <span class="token operator">=</span> <span class="token string">'Token认证失败，请重新登陆'</span>
<span class="token keyword">const</span> <span class="token constant">NETWORK_ERROR</span> <span class="token operator">=</span> <span class="token string">'网络请求异常，请稍后重试'</span>
<span class="token comment">// 创建axios对象</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> config<span class="token punctuation">.</span>baseApi<span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 请求拦截</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">req</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// JWT</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>storage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'userInfo'</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> token <span class="token punctuation">}</span> <span class="token operator">=</span> storage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'userInfo'</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> headers <span class="token operator">=</span> req<span class="token punctuation">.</span>headers
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>headers<span class="token punctuation">.</span>Authorization<span class="token punctuation">)</span> headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> req
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 响应拦截</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> code<span class="token punctuation">,</span> data<span class="token punctuation">,</span> msg <span class="token punctuation">}</span> <span class="token operator">=</span> res<span class="token punctuation">.</span>data
  <span class="token comment">// 状态码判断</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 请求成功</span>
    <span class="token keyword">return</span> data
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>code <span class="token operator">===</span> <span class="token number">500001</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// token认证失败</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token constant">TOKEN_INVALID</span><span class="token punctuation">)</span>
    <span class="token comment">// 路由跳转到登陆页面</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token constant">TOKEN_INVALID</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 网络异常(其他情况）</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>msg <span class="token operator">||</span> <span class="token constant">NETWORK_ERROR</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>msg <span class="token operator">||</span> <span class="token constant">NETWORK_ERROR</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 请求核心函数
 * <span class="token keyword">@param</span> <span class="token parameter">options</span> 请求配置
 */</span>
<span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 默认为get</span>
  options<span class="token punctuation">.</span>method <span class="token operator">=</span> options<span class="token punctuation">.</span>method <span class="token operator">||</span> <span class="token string">'get'</span>
  <span class="token comment">// 无论是get还是post 数据字段均为data</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">'get'</span><span class="token punctuation">)</span> options<span class="token punctuation">.</span>params <span class="token operator">=</span> options<span class="token punctuation">.</span>data
  <span class="token comment">// 确保生产环境调取线上地址</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>env <span class="token operator">===</span> <span class="token string">'prod'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    service<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> config<span class="token punctuation">.</span>baseApi
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// mock 开关 控制 开发测试环境api地址切换</span>
    service<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> config<span class="token punctuation">.</span>mock <span class="token operator">?</span> config<span class="token punctuation">.</span>mockApi <span class="token operator">:</span> config<span class="token punctuation">.</span>baseApi
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">service</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件中使用" tabindex="-1"><a class="header-anchor" href="#组件中使用" aria-hidden="true">#</a> 组件中使用</h3>
<p>不同页面的 api 请求放在不同的 js 文件中，如登陆相关的接口放在<code v-pre>/api/login.js</code>下,引入我们定义好的 axios 实例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'../utils/request.js'</span>

<span class="token doc-comment comment">/**
 * 登陆接口
 */</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/users/login'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> params<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件中使用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> login <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/api/login.js'</span>
<span class="token comment">// other code ...</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>userInfo <span class="token punctuation">}</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
<span class="token comment">// 存储用户信息</span>
userStore<span class="token punctuation">.</span><span class="token function">saveUserInfo</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy-代理配置" tabindex="-1"><a class="header-anchor" href="#proxy-代理配置" aria-hidden="true">#</a> proxy 代理配置</h2>
<p>// TODO: 看尚硅谷</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"/api"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">"http://api-manager.marsview.cc/"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="storage-二次封装" tabindex="-1"><a class="header-anchor" href="#storage-二次封装" aria-hidden="true">#</a> storage 二次封装</h2>
<p>cookie，localStorage，sessionStorage 的区别？</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * storage类封装
 */</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">'../config/index.js'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取storage下项目命名空间的值</span>
  <span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>namespace<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'{}'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 设置数据</span>
  <span class="token function">setItem</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> storage <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    storage<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>namespace<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>storage<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 获取数据</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 删除数据</span>
  <span class="token function">clearItem</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> storage <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">delete</span> storage<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>namespace<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>storage<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 清空所有数据</span>
  <span class="token function">clearAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite-项目index-html中使用变量" tabindex="-1"><a class="header-anchor" href="#vite-项目index-html中使用变量" aria-hidden="true">#</a> vite 项目<code v-pre>index.html</code>中使用变量</h2>
<p><a href="https://www.jianshu.com/p/77cceaaa4723" target="_blank" rel="noopener noreferrer">vite-plugin-html 插件<ExternalLinkIcon/></a></p>
<h2 id="响应式语法糖" tabindex="-1"><a class="header-anchor" href="#响应式语法糖" aria-hidden="true">#</a> $响应式语法糖</h2>
<p>一般的我们通过 ref 声明响应式数据，在 js 中访问需要加.value</p>
<p>通过响应式语法糖，我们可以省去 value</p>
<p>通过配置开启：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">reactivityTransform</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://cn.vuejs.org/guide/extras/reactivity-transform.html" target="_blank" rel="noopener noreferrer">更多细节<ExternalLinkIcon/></a></p>
<h2 id="css-中绑定变量" tabindex="-1"><a class="header-anchor" href="#css-中绑定变量" aria-hidden="true">#</a> css 中绑定变量</h2>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>如果需要动态变更，请创建响应式数据</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> leftNavWidth <span class="token operator">=</span> <span class="token function">$ref</span><span class="token punctuation">(</span><span class="token string">"220px"</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span>left<span class="token operator">-</span>nav <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> v<span class="token operator">-</span><span class="token function">bind</span><span class="token punctuation">(</span>leftNavWidth<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
    overflow<span class="token operator">-</span>y<span class="token operator">:</span> auto<span class="token punctuation">;</span>
    <span class="token literal-property property">transition</span><span class="token operator">:</span> width <span class="token punctuation">.</span>5s<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路径别名" tabindex="-1"><a class="header-anchor" href="#路径别名" aria-hidden="true">#</a> 路径别名</h2>
<p><a href="https://notes.zfhblog.top/%E5%BC%80%E5%8F%91%E8%AE%B0%E5%BD%95/Vue/vite3.0%E6%94%AF%E6%8C%81%E8%B7%AF%E5%BE%84%E5%88%AB%E5%90%8D.html" target="_blank" rel="noopener noreferrer">vite3.0 支持路径别名<ExternalLinkIcon/></a></p>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'menuList'</span><span class="token punctuation">,</span> <span class="token string">'isCollapse'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用 <code v-pre>&lt;script setup&gt;</code> 的单文件组件中，props 可以使用 <code v-pre>defineProps()</code> 来声明</p>
<p>模板中直接使用，无需<code v-pre>props.xxx</code></p>
<h2 id="动态组件" tabindex="-1"><a class="header-anchor" href="#动态组件" aria-hidden="true">#</a> 动态组件</h2>
<p><code v-pre>&lt;component is='string | Component'&gt;</code></p>
<ul>
<li>当 <code v-pre>is</code> 是字符串，它既可以是 HTML 标签名也可以是组件的注册名</li>
<li>或者，<code v-pre>is</code> 也可以直接绑定到组件的定义</li>
</ul>
<h2 id="递归组件" tabindex="-1"><a class="header-anchor" href="#递归组件" aria-hidden="true">#</a> 递归组件</h2>
<p>项目中的菜单列表并不是静态数据，而是从接口取数据进行动态渲染。</p>
<p>那么此时就需要递归组件，即自己调用自己</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu</span> <span class="token attr-name">:collapse</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isCollapse<span class="token punctuation">"</span></span> <span class="token attr-name">default-active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/system/menu<span class="token punctuation">"</span></span> <span class="token attr-name">router</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu in menuList<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-sub-menu</span>
        <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>
          menu.children &amp;&amp;
          menu.children.length > 0 &amp;&amp;
          menu.children[0].menuType == 1
        <span class="token punctuation">"</span></span>
        <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu.path<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-icon</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu.icon.split('-')[2]<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-icon</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ menu.menuName }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!--        递归组件--></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>menu-tree</span> <span class="token attr-name">:menuList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu.children<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-sub-menu</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-menu-item</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu.menuType == 1<span class="token punctuation">"</span></span> <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu.path<span class="token punctuation">"</span></span>
        <span class="token punctuation">></span></span>{{ menu.menuName }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-menu</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'menuList'</span><span class="token punctuation">,</span> <span class="token string">'isCollapse'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jwt" tabindex="-1"><a class="header-anchor" href="#jwt" aria-hidden="true">#</a> JWT</h2>
<p>登陆不需要携带<code v-pre>token</code>,其他接口需要<code v-pre>token</code></p>
<h2 id="面包屑导航" tabindex="-1"><a class="header-anchor" href="#面包屑导航" aria-hidden="true">#</a> 面包屑导航</h2>
<p>// TODO 24 号早上 check</p>
<h2 id="重置-element-颜色主题" tabindex="-1"><a class="header-anchor" href="#重置-element-颜色主题" aria-hidden="true">#</a> 重置 element 颜色主题</h2>
<p>// TODO 24 号早上 check</p>
<h2 id="公共表格封装" tabindex="-1"><a class="header-anchor" href="#公共表格封装" aria-hidden="true">#</a> 公共表格封装</h2>
<p><a href="/%E5%BC%80%E5%8F%91%E8%AE%B0%E5%BD%95/Vue/elementPlus%E5%85%AC%E5%85%B1%E8%A1%A8%E6%A0%BC%E5%B0%81%E8%A3%85">查看</a></p>
</div></template>


