---
title: 邂逅Node
---

::: tip 努力学习中
敬请期待...
:::

## Node.js 架构

我们编写的 JavaScript 代码会经过 V8 引擎，再通过 Node.js 的 Bindings，将任务放到 Libuv 的事件循环中；

`libuv`（Unicorn Velociraptor—独角伶盗龙）是使用 C 语言编写的库；

`libuv` 提供了事件循环、文件系统读写、网络 IO、线程池等等内容；

![node架构](https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/node%E6%9E%B6%E6%9E%84.png)
