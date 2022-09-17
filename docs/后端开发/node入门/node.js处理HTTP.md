---
title: Node.js处理HTTP
---

## 监听 http 请求

### node.js 启动 web 服务

使用 http 模块，启动服务

```js
const http = require('http')

const server = http.createServer(() => {
  console.log('已经收到http请求')
})
server.listen(3000, () => {
  console.log('http请求已经被监听，3000端口')
})
```

## req 和 res

```js
const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  console.log('url is' + url) // http://localhost:3000/index.html url='/index.html'
  res.end('hello node.js!') // res返回信息给前端
})
server.listen(3000, () => {
  console.log('http请求已经被监听，3000端口')
})
```

## 路由

### 路由-定义 get 路由和 post 路由

```js
const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  const path = url.split('?')[0]
  const method = req.method
  // 定义一个get路由 获取留言板列表
  if (path === '/api/list' && method === 'GET') {
    res.end('this is list ')
  }
  // 定义一个POST路由 创建留言板
  else if (path === '/api/create' && method === 'POST') {
    res.end('create')
  } else {
    res.end('404')
  }
})
server.listen(3000, () => {
  console.log('http请求已经被监听，3000端口')
})
```

### 测试路由

- GET 请求，直接拿浏览器访问
- POST 请求，需要借助工具——postman

## querystring

### 介绍和使用

`http://xxx.com/index.html?keyword=123&lang=en`

- url 问号 后面的都是 querystring 也叫 url 参数
- & 分割 key=value 样式 可继续扩展
- 如何利用 querystring 实现动态网页

1.  服务端拿到 querystring
2.  根据不同的 querystring 返回不同的内容
3.  即变化 querystring 就是变换内容（只要服务端支持）

```js
const http = require('http')
const querystring = require('querystring')
const server = http.createServer((req, res) => {
  const url = req.url
  const path = url.split('?')[0]
  const method = req.method
  const queryStr = url.split('?')[1]
  // const query ={}
  // queryStr && queryStr.split('&').forEach(item => {
  //     const key =item.split('=')[0]
  //     const val =item.split('=')[1]
  //     query[key]=val
  // });
  const query = querystring.parse(queryStr)
  console.log(query)
  // 定义一个get路由 获取留言板列表
  if (path === '/api/list' && method === 'GET') {
    if (query.type === '1') {
      res.end('this is list,all')
    }
    if (query.type === '2') {
      res.end('this is list,only me')
    }
  }
  // 定义一个POST路由 创建留言板
  else if (path === '/api/create' && method === 'POST') {
    res.end('create' + path)
  } else {
    res.end('404')
  }
})
server.listen(3000, () => {
  console.log('http请求已经被监听，3000端口')
})
```

### hash 不能传到服务端

`http://xxx.com/index.html/#/user/zhangsan`

### 结构化与非结构化

- 结构化的数据，易于通过程序访问和分析，如对象和数组
- 非结构化的数据，不易通过程序分析，如字符串
- 编程中的数据，都尽量结构化

## res 返回数据

### 返回 JSON 数据

使用 res 设置返回的状态码， Content-type,Body

```js
const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  const path = url.split('?')[0]
  const method = req.method

  // 定义一个get路由 获取留言板列表
  if (path === '/api/list' && method === 'GET') {
    const result = {
      errno: 0,
      data: [
        { user: 'frank', content: 'messsage-1' },
        { user: 'dell', content: 'messsage-2' },
      ],
    }
    res.writeHead(200, { 'Content-type': 'application/json' })
    res.end(
      // 把对象转化为JSON字符串
      JSON.stringify(result)
    )
  }
  // 定义一个POST路由 创建留言板
  else if (path === '/api/create' && method === 'POST') {
    const result = {
      errno: 0,
      message: '留言创建成功！',
    }
    res.writeHead(200, { 'Content-type': 'application/json' })
    res.end(
      // 把对象转化为JSON字符串
      JSON.stringify(result)
    )
  } else {
    res.writeHead(404, { 'Content-type': 'text/plain' })
    res.end('404 not found')
  }
})
server.listen(3000, () => {
  console.log('http请求已经被监听，3000端口')
})
```

### 返回 html

浏览器会根据`Content-type`识别出`html`格式

```js
const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  const path = url.split('?')[0]
  const method = req.method

  // 定义一个get路由 获取留言板列表
  if (path === '/api/list' && method === 'GET') {
    const result = {
      errno: 0,
      data: [
        { user: 'frank', content: 'messsage-1' },
        { user: 'dell', content: 'messsage-2' },
      ],
    }
    res.writeHead(200, { 'Content-type': 'application/json' })
    res.end(
      // 把对象转化为JSON字符串
      JSON.stringify(result)
    )
  }
  // 定义一个POST路由 创建留言板
  else if (path === '/api/create' && method === 'POST') {
    const result = {
      errno: 0,
      message: '留言创建成功！',
    }
    res.writeHead(200, { 'Content-type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' })
    res.end(
      `
             <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>404 not found!!!!!!!!!</h1>
    <ul>
    <li>node.js</li>
    <li>vue.js</li>
    <li>koa2</li>
    <li>mongoDB</li>
    </ul>
</body>
</html>
             `
    )
  }
})
server.listen(3000, () => {
  console.log('http请求已经被监听，3000端口')
})
```

## 接收 request body

### 流

#### 流的表现

- 观看视频时，一边加载一边观看
- 上传文件时，有进度条
- 网速较慢时，打开网页会先显示-部分，然后继续加载

#### 浏览器能接收流（stream）数据

- 服务端 res end（…），会自动以流的形式返回
- 浏览器会识别到流，并持续接收信息（会有进度条）
- 待全部接收完，再做显示或处理（视频是一段一段的播放）

#### 服务端如何接收流（ stream）数据

- 前端使用 Ajax（或 Postman）提交数据 Request Body
- 服务端需要识别流，并接收数据
- 还要知道何时才能接收完成

```js
const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  const path = url.split('?')[0]
  const method = req.method
  //  定义路由 模拟创建留言
  if (path === '/api/create' && method === 'POST') {
    let bodyStr = ''
    req.on('data', chuck => {
      //服务端怎么去识别‘流’，并接收数据
      //    chuck,即流的每一段数据
      bodyStr += bodyStr + chuck.toString()
    })
    req.on('end', () => {
      //服务端怎么知道流完了
      const body = JSON.parse(bodyStr)
      console.log(body)
      res.end('接收完成')
    })
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' })
    res.end(
      `
             <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>404 not found!!!!!!!!!</h1>
</body>
</html>
             `
    )
  }
})
server.listen(3000, () => {
  console.log('http请求已经被监听，3000端口')
})
```

- 在 postman 中发送 json 数据

![服务端如何接收流](https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%A6%82%E4%BD%95%E6%8E%A5%E6%94%B6%E6%B5%81.png)
