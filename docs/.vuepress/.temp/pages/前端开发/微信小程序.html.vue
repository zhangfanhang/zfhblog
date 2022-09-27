<template><div><h2 id="小程序文件类型及代码结构介绍" tabindex="-1"><a class="header-anchor" href="#小程序文件类型及代码结构介绍" aria-hidden="true">#</a> 小程序文件类型及代码结构介绍</h2>
<p>一个页面由 4 个文件组成：<code v-pre>xx.js</code>,<code v-pre>xx.json</code>,<code v-pre>xx.wxml</code>,<code v-pre>xx.wxss</code></p>
<p>项目根目录下，也有这样的 3 个文件<code v-pre>app.js</code>,<code v-pre>app.json</code>,<code v-pre>app.wxss</code>，为全局的逻辑，配置，样式</p>
<h2 id="全局配置文件的使用" tabindex="-1"><a class="header-anchor" href="#全局配置文件的使用" aria-hidden="true">#</a> 全局配置文件的使用</h2>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html" target="_blank" rel="noopener noreferrer">全局配置<ExternalLinkIcon/></a></p>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#pages" target="_blank" rel="noopener noreferrer">pages<ExternalLinkIcon/></a></p>
<h2 id="使用全局配置制作菜单栏" tabindex="-1"><a class="header-anchor" href="#使用全局配置制作菜单栏" aria-hidden="true">#</a> 使用全局配置制作菜单栏</h2>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabBar" target="_blank" rel="noopener noreferrer">tapbar<ExternalLinkIcon/></a></p>
<h2 id="页面级别的配置项" tabindex="-1"><a class="header-anchor" href="#页面级别的配置项" aria-hidden="true">#</a> 页面级别的配置项</h2>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html" target="_blank" rel="noopener noreferrer">页面配置<ExternalLinkIcon/></a></p>
<h2 id="全局逻辑中的生命周期-全局方法及数据的定义及调用方式" tabindex="-1"><a class="header-anchor" href="#全局逻辑中的生命周期-全局方法及数据的定义及调用方式" aria-hidden="true">#</a> 全局逻辑中的生命周期&amp;全局方法及数据的定义及调用方式</h2>
<p>app.js:全局生命周期+全局可以调用的方法和数据（页面中使用 getApp()可以拿到 app 实例，可以调用全局方法和数据）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建一个小程序</span>
<span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 生命周期函数指的是在某一时刻会自动执行的函数</span>
    <span class="token comment">// 在小程序启动的时候，自动执行的函数</span>
    <span class="token function">onLaunch</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onLaunch'</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 在小程序重新展示的时候，自动执行的函数</span>
    <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onShow'</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 在小程序取消展示的时候，自动执行的函数</span>
    <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onHide'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 当脚本执行错误时，自动执行的函数</span>
    <span class="token function">onError</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onError'</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//  自定义的全局方法</span>
    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'say hello'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 全局数据，也可以单独列出。</span>
    <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面级别的生命周期函数" tabindex="-1"><a class="header-anchor" href="#页面级别的生命周期函数" aria-hidden="true">#</a> 页面级别的生命周期函数</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 在页面运行的某个时刻会自动执行的函数</span>
    <span class="token comment">// 是页面被加载到内存里的时候，或者说页面第一次启动的时候</span>
    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onLoad'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 是页面被加载到内存里的时候，或者说页面第一次启动的时候</span>
    <span class="token comment">// 并且，页面被渲染完成之后自动执行</span>
    <span class="token function">onReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onReady'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 页面每次被展示的时候自动执行</span>
    <span class="token function">onShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onShow'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 页面每次被取消展示的时候自动执行</span>
    <span class="token function">onHide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onHide'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 每次下拉刷新时执行</span>
    <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onPullDownRefresh'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 页面到最底部时会自动执行</span>
    <span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onReachBottom'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 当你点击分享时自动执行的函数</span>
    <span class="token function">onShareAppMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onShareAppMessage'</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'share'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'pages/index/index'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 当页面滚动时自动执行的函数</span>
    <span class="token function">onPageScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onPageScroll'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面逻辑层数据的定义及与页面的串联" tabindex="-1"><a class="header-anchor" href="#页面逻辑层数据的定义及与页面的串联" aria-hidden="true">#</a> 页面逻辑层数据的定义及与页面的串联</h2>
<ul>
<li>bindtap='xxx' <code v-pre>当用户点击该组件的时候会在该页面对应的Page中找到相应的事件处理函数</code>
<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html#%E4%BA%8B%E4%BB%B6%E5%88%86%E7%B1%BB" target="_blank" rel="noopener noreferrer">事件<ExternalLinkIcon/></a></li>
<li>改变数据：this.setData({
xxx:xxx,
})</li>
</ul>
<h2 id="逻辑层中的-api" tabindex="-1"><a class="header-anchor" href="#逻辑层中的-api" aria-hidden="true">#</a> 逻辑层中的 api</h2>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/api/" target="_blank" rel="noopener noreferrer">api<ExternalLinkIcon/></a></p>
<h2 id="视图层的数据绑定" tabindex="-1"><a class="header-anchor" href="#视图层的数据绑定" aria-hidden="true">#</a> 视图层的数据绑定</h2>
<p><code v-pre>wx:if</code> 与 <code v-pre>hidden</code> 的区别</p>
<p><code v-pre>wx:if</code> 删除了 <code v-pre>DOM</code>，而 <code v-pre>hidden</code> 只是做了样式的隐藏， <code v-pre>DOM</code> 依然存在</p>
<p>还有不要直接写 <code v-pre>xxx=&quot;false&quot;</code>，其计算结果是一个字符串 要这样写:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xxx <span class="token operator">=</span> <span class="token string">'{{false}}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="视图层循环展示内容" tabindex="-1"><a class="header-anchor" href="#视图层循环展示内容" aria-hidden="true">#</a> 视图层循环展示内容</h2>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/list.html" target="_blank" rel="noopener noreferrer">wx:for<ExternalLinkIcon/></a>
wx:key='*this'</p>
<p>block 占位符</p>
<h2 id="视图层的代码拆分" tabindex="-1"><a class="header-anchor" href="#视图层的代码拆分" aria-hidden="true">#</a> 视图层的代码拆分</h2>
<p>import 和 include
<a href="https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/import.html" target="_blank" rel="noopener noreferrer">引用<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 如果想在模板中使用外层的数据需要这样写。</span>
<span class="token operator">&lt;</span>template is<span class="token operator">=</span><span class="token string">"item"</span> data<span class="token operator">=</span><span class="token string">"{{text: 'forbar'}}"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件-样式" tabindex="-1"><a class="header-anchor" href="#组件-样式" aria-hidden="true">#</a> 组件&amp;样式</h2>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/component/" target="_blank" rel="noopener noreferrer">组件<ExternalLinkIcon/></a></p>
<p>rpx 单位</p>
<p><strong>wxcss：默认屏幕宽度为 750rpx</strong></p>
<h2 id="踩坑备忘" tabindex="-1"><a class="header-anchor" href="#踩坑备忘" aria-hidden="true">#</a> 踩坑备忘</h2>
<h3 id="image-组件" tabindex="-1"><a class="header-anchor" href="#image-组件" aria-hidden="true">#</a> image 组件</h3>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/component/image.html" target="_blank" rel="noopener noreferrer">image<ExternalLinkIcon/></a></p>
<p>注意图片裁剪、缩放的模式<code v-pre>mode</code></p>
<h3 id="swiper-组件" tabindex="-1"><a class="header-anchor" href="#swiper-组件" aria-hidden="true">#</a> swiper 组件</h3>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html" target="_blank" rel="noopener noreferrer">swiper<ExternalLinkIcon/></a></p>
<p>轮播图直接使用 <code v-pre>swpier</code>,其中放置<code v-pre>swpier-item</code></p>
<p>常用配置项：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>autoplay <span class="token operator">=</span> <span class="token string">'{{true}}'</span> <span class="token comment">// 自动播放</span>
circular <span class="token operator">=</span> <span class="token string">'{{true}}'</span> <span class="token comment">// 是否采用衔接滑动</span>
indicator <span class="token operator">-</span> dots <span class="token operator">=</span><span class="token string">'{{true}}'</span> <span class="token comment">// 是否显示面板指示点</span>
interval <span class="token operator">=</span> <span class="token string">'3000'</span> <span class="token comment">// 自动切换时间间隔</span>
duration <span class="token operator">=</span> <span class="token string">'1500'</span> <span class="token comment">// 滑动动画时长</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning">
<p class="custom-container-title">⚠️ 注意</p>
<p>以下内容未订正！！！</p>
</div>
<h3 id="rpx" tabindex="-1"><a class="header-anchor" href="#rpx" aria-hidden="true">#</a> rpx</h3>
<p>素材的页面宽度为 375px,那么在微信小程序中页面的宽度为 750rpx，为两倍的关系，那么在设置样式的时候应该乘以 2 （比如：搜索栏宽度为 340px,微信小程序中就应该设置 680rpx）</p>
<h3 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h3>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/data.html" target="_blank" rel="noopener noreferrer">数据绑定<ExternalLinkIcon/></a></p>
<p>不要直接写 xxx=&quot;false&quot;，其计算结果是一个字符串, 要加双括号</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xxx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="text-iamge" tabindex="-1"><a class="header-anchor" href="#text-iamge" aria-hidden="true">#</a> text iamge</h3>
<p>text 里面<strong>直接</strong>写 image 标签加载不出来</p>
<h3 id="远程数据获取" tabindex="-1"><a class="header-anchor" href="#远程数据获取" aria-hidden="true">#</a> 远程数据获取</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取数据写在onLoad()生命周期函数中</span>
wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://www.fastmock.site/mock/929c195d9002940292c129ee5a38cdf4/mooc/data'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span> <span class="token operator">=</span> res
        <span class="token keyword">const</span> <span class="token punctuation">{</span> swiperList<span class="token punctuation">,</span> courses <span class="token punctuation">}</span> <span class="token operator">=</span> data
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            swiperList<span class="token punctuation">,</span>
            courses<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据双向绑定" tabindex="-1"><a class="header-anchor" href="#数据双向绑定" aria-hidden="true">#</a> 数据双向绑定</h3>
<p><code v-pre>model:value=&quot;{{Ivalue}}</code></p>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/view/two-way-bindings.html" target="_blank" rel="noopener noreferrer">简易双向绑定<ExternalLinkIcon/></a></p>
<h3 id="页面跳转" tabindex="-1"><a class="header-anchor" href="#页面跳转" aria-hidden="true">#</a> 页面跳转</h3>
<p>标签实现页面跳转
<a href="https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html" target="_blank" rel="noopener noreferrer">navigator<ExternalLinkIcon/></a>
js 实现页面跳转
<a href="https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html" target="_blank" rel="noopener noreferrer">wx.redirectTo <ExternalLinkIcon/></a>
<a href="https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html" target="_blank" rel="noopener noreferrer">wx.navigateTo<ExternalLinkIcon/></a></p>
<h3 id="icon-的使用" tabindex="-1"><a class="header-anchor" href="#icon-的使用" aria-hidden="true">#</a> icon 的使用</h3>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/component/icon.html" target="_blank" rel="noopener noreferrer">icon<ExternalLinkIcon/></a></p>
<h3 id="页面背景颜色的修改" tabindex="-1"><a class="header-anchor" href="#页面背景颜色的修改" aria-hidden="true">#</a> 页面背景颜色的修改</h3>
<p>当我们在微信小程序 json 中设置 backgroundColor 时，实际在电脑的模拟器中根本看不到效果。</p>
<p>这是因为 backgroundColor 指的窗体背景颜色，而不是页面的背景颜色</p>
<p>如果要设置页面背景颜色，得在 wxss 中自定义样式，如下：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">page</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #eee<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


