<template><div><h1 id="vue2-echarts-数据报表项目学习心得" tabindex="-1"><a class="header-anchor" href="#vue2-echarts-数据报表项目学习心得" aria-hidden="true">#</a> vue2+echarts 数据报表项目学习心得</h1>
<div class="custom-container tip">
<p class="custom-container-title">项目演示地址</p>
<p><a href="https://datav.zfhblog.top/" target="_blank" rel="noopener noreferrer">演示地址<ExternalLinkIcon/></a></p>
</div>
<h2 id="echarts-在-vue-的使用" tabindex="-1"><a class="header-anchor" href="#echarts-在-vue-的使用" aria-hidden="true">#</a> echarts 在 vue 的使用</h2>
<p><a href="https://echarts.apache.org/v4/zh/option.html#title" target="_blank" rel="noopener noreferrer">echarts 4.x 文档<ExternalLinkIcon/></a></p>
<ul>
<li>定义</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> ECharts <span class="token keyword">from</span> <span class="token string">'echarts'</span>

<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$echarts <span class="token operator">=</span> ECharts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>消费</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> chartDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'today-users-chart'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> chart <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span>
chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-vue-echarts-简化配置" tabindex="-1"><a class="header-anchor" href="#使用-vue-echarts-简化配置" aria-hidden="true">#</a> 使用 vue-echarts 简化配置</h2>
<p><a href="https://github.com/ecomfe/vue-echarts/blob/5.x/README.zh_CN.md" target="_blank" rel="noopener noreferrer">官方文档 vue2.x,echarts4<ExternalLinkIcon/></a></p>
<ul>
<li>默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样</li>
<li>把尺寸设为百分比值（同时请记得为容器设置尺寸）。</li>
</ul>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.echarts</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在模板中使用：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-chart</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chartOption<span class="token punctuation">"</span></span> <span class="token attr-name">::autoresize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-chart</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>options：ECharts 实例的数据。修改这个 prop 会触发 ECharts 实例的 setOption 方法。</li>
<li>autoresize:这个 prop 用来指定 ECharts 实例在组件根元素尺寸变化时是否需要自动进行重绘。</li>
</ul>
<h2 id="几种常见图表的配置" tabindex="-1"><a class="header-anchor" href="#几种常见图表的配置" aria-hidden="true">#</a> 几种常见图表的配置</h2>
<h3 id="折线图" tabindex="-1"><a class="header-anchor" href="#折线图" aria-hidden="true">#</a> 折线图</h3>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>在没有使用任何模块系统的情况下，组件将通过 window.VueECharts 变量暴露接口：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 注册组件后即可使用</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'v-chart'</span><span class="token punctuation">,</span> VueECharts<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>
<CodePen
  link="https://codepen.io/zhangfanhang/pen/MWrqmeg"
  :theme="$isDarkMode? 'dark': 'light'"
/>
<h3 id="柱状图" tabindex="-1"><a class="header-anchor" href="#柱状图" aria-hidden="true">#</a> 柱状图</h3>
<CodePen
  link="https://codepen.io/zhangfanhang/pen/popxjXr"
  :theme="$isDarkMode? 'dark': 'light'"
/>
<h3 id="饼状图" tabindex="-1"><a class="header-anchor" href="#饼状图" aria-hidden="true">#</a> 饼状图</h3>
<CodePen
  link="https://codepen.io/zhangfanhang/pen/ZEvmzMz"
  :theme="$isDarkMode? 'dark': 'light'"
/>
<h2 id="v-charts" tabindex="-1"><a class="header-anchor" href="#v-charts" aria-hidden="true">#</a> v-charts</h2>
<p>在使用 echarts 生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts 的出现正是为了解决这个痛点。基于 Vue2.0 和 echarts 封装的 v-charts 图表组件，只需要统一提供一种对前后端都友好的数据格式设置简单的配置项，便可轻松生成常见的图表。</p>
<p><a href="https://v-charts.js.org/#/" target="_blank" rel="noopener noreferrer">文档<ExternalLinkIcon/></a></p>
<p>本示例中的词云图，水球图，地图使用 v-charts 开发</p>
<h2 id="element-ui-相关问题" tabindex="-1"><a class="header-anchor" href="#element-ui-相关问题" aria-hidden="true">#</a> element-UI 相关问题</h2>
<h3 id="使用-element-ui-的-row-和-col-组件完成布局" tabindex="-1"><a class="header-anchor" href="#使用-element-ui-的-row-和-col-组件完成布局" aria-hidden="true">#</a> 使用 element-ui 的 row 和 col 组件完成布局</h3>
<p>通过基础的 24 分栏，迅速简便地创建布局</p>
<p><a href="https://element.eleme.cn/#/zh-CN/component/layout" target="_blank" rel="noopener noreferrer">more<ExternalLinkIcon/></a></p>
<h3 id="表格数据分页功能" tabindex="-1"><a class="header-anchor" href="#表格数据分页功能" aria-hidden="true">#</a> 表格数据分页功能</h3>
<CodePen
link="https://codepen.io/zhangfanhang/pen/ExoOYzy"
:theme="$isDarkMode? 'dark': 'light'"
/>
<h2 id="vue2-相关" tabindex="-1"><a class="header-anchor" href="#vue2-相关" aria-hidden="true">#</a> vue2 相关</h2>
<h3 id="mixin-的实际运用" tabindex="-1"><a class="header-anchor" href="#mixin-的实际运用" aria-hidden="true">#</a> mixin 的实际运用</h3>
<p>// TODO 这周末查</p>
</div></template>


