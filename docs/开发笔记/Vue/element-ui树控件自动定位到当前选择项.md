---
title: element-ui树控件自动定位到当前选择项
tag:
  - elementUI
category: 开发记录
---

# element-ui 树控件自动定位到当前选择项

## 需求

做业务遇到了需要在树空间中回显示当前操作的的数据项，因为树空间的高度有限，如果当前选择项是比较靠后的，就无法出现在树的滚动视窗范围之内。

所以就要在树展示的时候自动滚动到当前的选择项，好在[Element](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 接口提供了这样一个 [scrollIntoView()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)方法,该方法会滚动元素的父容器，使被调用 `scrollIntoView() `的元素对用户可见。

## 具体思路

那么现在我们只需要知道当前选择项是哪一个 DOM 元素，接着调用这个方法就好，省去了繁琐的高度计算环节。

因为树中的每个数据项都有一个独一无二的 id，所以我们可以使用自定义节点，给每个数据项加上以数据项中的 id 为值的 ID 属性，这样我们通过当前选择项的 id 就可以获得当前对应的 DO M 元素。

## 实现 demo

<CodePen
  link="https://codepen.io/zhangfanhang/pen/eYMwpBg"
  :theme="$isDarkMode? 'dark': 'light'"
/>

::: tip 说明

方法来自[[element-ui] el-tree 滚动到指定选中的位置](https://blog.csdn.net/qq_14993591/article/details/125223004)

:::
