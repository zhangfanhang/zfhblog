<template><div><h1 id="element-ui-树控件自动定位到当前选择项" tabindex="-1"><a class="header-anchor" href="#element-ui-树控件自动定位到当前选择项" aria-hidden="true">#</a> element-ui 树控件自动定位到当前选择项</h1>
<h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h2>
<p>做业务遇到了需要在树空间中回显示当前操作的的数据项，因为树空间的高度有限，如果当前选择项是比较靠后的，就无法出现在树的滚动视窗范围之内。</p>
<p>所以就要在树展示的时候自动滚动到当前的选择项，好在<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element" target="_blank" rel="noopener noreferrer">Element<ExternalLinkIcon/></a> 接口提供了这样一个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView" target="_blank" rel="noopener noreferrer">scrollIntoView()<ExternalLinkIcon/></a>方法,该方法会滚动元素的父容器，使被调用 <code v-pre>scrollIntoView() </code>的元素对用户可见。</p>
<h2 id="具体思路" tabindex="-1"><a class="header-anchor" href="#具体思路" aria-hidden="true">#</a> 具体思路</h2>
<p>那么现在我们只需要知道当前选择项是哪一个 DOM 元素，接着调用这个方法就好，省去了繁琐的高度计算环节。</p>
<p>因为树中的每个数据项都有一个独一无二的 id，所以我们可以使用自定义节点，给每个数据项加上以数据项中的 id 为值的 ID 属性，这样我们通过当前选择项的 id 就可以获得当前对应的 DO M 元素。</p>
<h2 id="实现-demo" tabindex="-1"><a class="header-anchor" href="#实现-demo" aria-hidden="true">#</a> 实现 demo</h2>
<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="html,result" data-slug-hash="eYMwpBg" data-user="zhangfanhang" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/zhangfanhang/pen/eYMwpBg">
  element-ui-tree-demo-自动定位已选项</a> by zhangfanhang (<a href="https://codepen.io/zhangfanhang">@zhangfanhang</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
<div class="custom-container tip">
<p class="custom-container-title">说明</p>
<p>方法来自<a href="https://blog.csdn.net/qq_14993591/article/details/125223004" target="_blank" rel="noopener noreferrer">[element-ui] el-tree 滚动到指定选中的位置<ExternalLinkIcon/></a></p>
</div>
</div></template>


