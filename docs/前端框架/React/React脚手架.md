---
title: React脚手架
tag: 脚手架
category:
  - 前端框架
  - React
---

## 安装脚手架

`npm install -g create-react-app`

## 创建 React 项目

创建 React 项目的命令如下：

注意：项目名称<span style="color:red">不能包含大写字母</span>

`create-react-app 项目名称`

运行：`yarn start`

## 目录结构分析

脚手架版本：4.0.3

```
├── node_modules
├── public
│   ├── favicon.ico # 网站或者项目图标
│   ├── index.html #  首页模板文件。可以在此引入一些静态的资源。
│   ├── logo192.png #  在manifest.json中使用
│   ├── logo512.png #  在manifest.json中使用
│   ├── manifest.json # 和web app配置相关
│   └── robots.txt # 指定搜索引擎可以或者无法爬取那些文件
├── src
│   ├── App.css # App组件相关的样式
│   ├── App.js # App组件代码
│   ├── App.test.js # App组件的测试代码文件
│   ├── index.css # 全局的样式文件
│   ├── index.js # 整个应用程序的入口文件
│   ├── logo.svg # logo
│   ├── reportWebVitals.js # 谷歌新出的关于浏览器性能优化的库。(新增的文件)
│   └── setupTests.js # 测试初始化文件
├──.gitignore
├── package.json
├── README.md
└── yarn.lock
```
