---
title: AntDesgin组件库
---

::: tip 官方网站

[国内镜像](https://ant-design.gitee.io/index-cn)

:::

AntDesign ，简称 antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。

中后台的产品 属于**工具性产品**，很多优秀的设计团队通过自身的探索和积累，形成了自己的设计体系。

AntDesign 的兼容性：现代浏览器和 IE11（需要 polyfills）,支持服务端渲染,Electron

## AntDesign 的安装

1. `yarn add antd`
2. 我们需要在 index.js 中引入全局的 Antd 样式：`import "antd/dist/antd.css";`

3. 在 App.js 中就可以使用一些组件了

## craco

上面的使用过程是无法对主题进行配置的，好像对主题等相关的高级特性进行配置，需要修改 create-react-app 的默认配置。

如何修改 create-react-app 的默认配置呢？craco；（目前 antd 推荐的方案）

### 使用 craco

1. `yarn add @craco/craco`
2. 修改 package.json 文件

```js
"scripts": {
- "start": "react-scripts start",
- "build": "react-scripts build",
- "test": "react-scripts test",
+ "start": "craco start",
+ "build": "craco build",
+ "test": "craco test",
}
```

3. 在根目录下创建 craco.config.js 文件用于修改默认配置

```js
module.exports = { // 配置文件 }
```

### 配置主题

[官方文档](https://ant-design.gitee.io/docs/react/use-with-create-react-app-cn#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98)

### 配置别名

配置别名也需要修改 webpack 的配置，当然我们也可以借助于 craco 来完成：

```js
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            '@': resolve("src")
        }
    }
```

在导入时就可以按照下面的方式来使用了：

```js
import HYCommentInput from '@/components/comment-input'
```
