---
title: vue2+echarts数据报表项目学习心得
tags:
  - 2022/09/07 16:50:11
  - echarts
  - 数据报表
---

# vue2+echarts 数据报表项目学习心得

::: tip 项目演示地址
[演示地址](https://datav.zfhblog.top/)
:::

## echarts 在 vue 的使用

[echarts 4.x 文档](https://echarts.apache.org/v4/zh/option.html#title)

- 定义

```js
import ECharts from 'echarts'

Vue.prototype.$echarts = ECharts
```

- 消费

```js
const chartDom = document.getElementById('today-users-chart')
const chart = this.$echarts.init(chartDom)
chart.setOption({
  // ...
})
```

## 使用 vue-echarts 简化配置

[官方文档 vue2.x,echarts4](https://github.com/ecomfe/vue-echarts/blob/5.x/README.zh_CN.md)

- 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
- 把尺寸设为百分比值（同时请记得为容器设置尺寸）。

```css
.echarts {
  width: 100%;
  height: 100%;
}
```

在模板中使用：

```html
<v-chart :options="chartOption" ::autoresize="true"></v-chart>
```

- options：ECharts 实例的数据。修改这个 prop 会触发 ECharts 实例的 setOption 方法。
- autoresize:这个 prop 用来指定 ECharts 实例在组件根元素尺寸变化时是否需要自动进行重绘。

## 几种常见图表的配置

### 折线图

::: tip 提示

在没有使用任何模块系统的情况下，组件将通过 window.VueECharts 变量暴露接口：

```js
// 注册组件后即可使用
Vue.component('v-chart', VueECharts)
```

:::

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="html,result" data-slug-hash="MWrqmeg" data-user="zhangfanhang" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/zhangfanhang/pen/MWrqmeg">
  vue-echarts折线图</a> by zhangfanhang (<a href="https://codepen.io/zhangfanhang">@zhangfanhang</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### 柱状图

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="html,result" data-slug-hash="popxjXr" data-user="zhangfanhang" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/zhangfanhang/pen/popxjXr">
  vue-echarts柱状图</a> by zhangfanhang (<a href="https://codepen.io/zhangfanhang">@zhangfanhang</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### 饼状图

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="html,result" data-slug-hash="ZEvmzMz" data-user="zhangfanhang" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/zhangfanhang/pen/ZEvmzMz">
  v-charts饼状图</a> by zhangfanhang (<a href="https://codepen.io/zhangfanhang">@zhangfanhang</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## v-charts

在使用 echarts 生成图表时，经常需要做繁琐的数据类型转化、修改复杂的配置项，v-charts 的出现正是为了解决这个痛点。基于 Vue2.0 和 echarts 封装的 v-charts 图表组件，只需要统一提供一种对前后端都友好的数据格式设置简单的配置项，便可轻松生成常见的图表。

[文档](https://v-charts.js.org/#/)

本示例中的词云图，水球图，地图使用 v-charts 开发

## element-UI 相关问题

### 使用 element-ui 的 row 和 col 组件完成布局

通过基础的 24 分栏，迅速简便地创建布局

[more](https://element.eleme.cn/#/zh-CN/component/layout)

### 表格数据分页功能

<p class="codepen" data-height="500" data-theme-id="light" data-default-tab="html,result" data-slug-hash="ExoOYzy" data-user="zhangfanhang" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/zhangfanhang/pen/ExoOYzy">
  element-ui表格分页</a> by zhangfanhang (<a href="https://codepen.io/zhangfanhang">@zhangfanhang</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## vue2 相关

### mixin 的实际运用

// TODO 这周末查
