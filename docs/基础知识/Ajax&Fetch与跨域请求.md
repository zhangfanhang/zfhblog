---
title: Ajax&Fetch与跨域请求
sidebar: auto
---

## ajax

### Ajax 简介

`Ajax`即“`Asynchronous Javascript And XML`”（异步 JavaScript 和 XML），是指一种创建交互式、快速动态网页应用的网页开发技术，无需重新加载整个网页的情况下，能够更新部分网页的技术。

`Ajax`中的异步：可以异步地向服务器发送请求，在等待响应的过程中，不会阻塞当前页面，浏览器可以做自己的事. 直到成功获取响应后，浏览器才开始处理响应数据。

`XML` 可扩展标记语言，是前后端数据通信时传输数据的一种格式

` XML` 现在已经不怎么用了，**现在比较常用的时`JSON `**

`Ajax`其实就是浏览器与服务器之间的一种 `异步通信方式 `

使用`Ajax`可以在不重新加载整个页面的情况下， **对页面的某部分进行更新**

### Ajax 的基本用法

`Ajax`想要实现浏览器与服务器之间的异步通信，需要依靠`XMLHttpRequest`,它是一个**构造函数**

1. 创建 xhr 对象

```js
const xhr = new XMLHttpRequest()
```

2. 监听事件,处理响应

当获取到响应后，会触发 xhr 对象的`readystatechange`事件，可以在该事件中对响应进行处理

```js
xhr.onreadystatechange = () => {
  if (xhr.readyState !== 4) return
  //HTTP CODE
  //获取响应后，响应的内容会自动填充xhr对象的属性
  if ((xhr.status >= 200) & (xhr.status < 300) || xhr.status === 304) {
    console.log('正常使用')
    //数据
    console.log(xhr.responseText)
  }
}
```

`readystatechange`事件监听`readyState`这个状态的变化
一共有 5 个状态

- 0：未初始化，尚未调用`open()`
- 1：启动，已经调用`open()`,但尚未调用`send()`
- 2：发送，已经调用`send()`,当尚未接收到响应
- 3：接收，已经接收到部分响应数据
- 4：完成，已经接收到全部响应数据，并且可以在浏览器中使用

3. 准备发送请求  
   调用`open()`并不会真正发送请求，而只是做好发送请求前的准备工作

```js
xhr
  .open
  //'http方法',
  //"地址url",true或false:是否为异步请求，一般肯定true
  ()
```

4. 发送请求

调用`send()`正式发送请求

`send()`的参数是通过请求体携带的数据

```js
xhr.send(null) //GET请求一般填null，因为GET不能通过请求体携带数据
```

eg:使用`Ajax`来完成前后端通信

```js
const url = 'https://www.imooc.com/api/http/search/suggest?words=js'
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
  if (xhr.readyState !== 4) return
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    console.log(xhr.responseText)
  }
}
xhr.open('get', url)
xhr.send(null)
```

### GET 请求

1. 携带数据  
   `GET`请求不能通过请求体携带数据，但可以通过请求头携带，
   在 url 对应的接口下添加名值对
1. 数据编码  
   如果携带的数据时非英文字母的话，比如说汉字，**就需要编码之后再发送给后端**，不然会造成乱码问题

### POST 请求

1. 携带数据  
   `POST`请求主要通过请求体携带数据，同时也可以通过请求头携带

```js
const url = 'https://www.imooc.com/api/http/search/suggest?words=js'
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
  if (xhr.readyState !== 4) return
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    console.log(xhr.responseText)
    console.log(typeof xhr.responseText)
  }
}
xhr.open('POST', url)
//如果想发送数据，直接写在 send()的参数位置，一般是字符串
// 不能直接传递对象，需要先将对象转换成字符串的形式
xhr.send('username=alex&age=18')
```

2. 数据编码:如果携带的数据时非英文字母的话，比如说汉字，**就需要编码之后再发送给后端**，不然会造成乱码问题

## JSON

### 初识 JSON

1. `javascript object notation`,`Ajax`发送和接受的一种数据格式

2. 为什么需要 JSON

JSON 有 3 种形式，每种形式的写法都和`JS`中的数据类型很像，可以很轻松的和`JS`中的数据类型互相转换

### JSON 的三种形式

1. 简单值形式

文件名：`xxx.json`  
JSON 的简单值形式就对应着 JS 中的基础数据类型,数字，字符串，布尔值，null

2. 对象形式

`JSON`的对象形式就对应着`JS`中的对象

```json
{
  "name": "张三",
  "age": 18,
  "hobby": ["足球", "乒乓球"]
}
```

3. 数组形式

`JSON`的数组形式就对应着 JS 中的数组

::: warning 注意事项

1. JSON 中没有`underfined`值
2. JSON 中的字符串必须使用双引号
3. JSON 中是不能注释的
4. JSON 中对象的属性名必须使用双引号，属性值如果是字符串也必须用双引号。
   :::

### JSON 的常用方法

1. `JSON.parse()`  
   可以将`JSON`格式的字符串解析成 JS 中的对应值  
   一定要是合法的`JSON`字符串，否则会报错
2. `JSON.stringify()`
   可以将`JS`的**基本数据类型，对象或者数组**转换成`JSON`格式的字符串

```js
xhr.open('POST', url, true)
xhr.send(
  JSON.stringify({
    name: '张三',
    hobby: ['足球', '乒乓球'],
  })
)
```

3. 使用 JSON.parse()和 JSON.stringify()封装 localStorage

```js
const storage = window.localStorage
// 设置
const set = (key, value) => {
  storage.setItem(key, JSON.stringify(value))
}
// 获取
const get = key => {
  return JSON.parse(storage.getItem(key))
}
// 删除
const remove = key => {
  storage.removeItem(key)
}
// 清空
const clear = () => {
  storage.clear()
}
```

## 跨域

### 简介

向一个域发送请求，如果要请求的域和当前域是不同域，就叫`跨域`

不同域之间的请求，就是跨域请求

### 什么是不同域，什么是同域

`https(协议)：// www.imooc.com (域名) ：443 (端口号) /course/list (路径)`

- **协议 域名 端口号 任何一个不一样 就是不同域**
- 与路径无关，路径不一样无所谓

### 跨域请求为什么会被阻止

- 阻止跨域请求，其实是浏览器本身的一种安全策略---`同源策略`
- 其他客户端或者服务器不存在跨域被阻止的问题

### 跨域解决方案

- `CORS` 跨域资源共享
- `JSONP `
- 优先使用`CORS` ，如果浏览器不支持，使用`JSONP `

#### CORS 跨域资源共享

[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

使用 CORS 跨域的过程

① 浏览器发送请求

② 后端在响应头中添加 `Access-Control-Allow-Origin `头信息

③ 浏览器接收到响应

④ 如果是同域下的请求，浏览器不会额外做什么，这次前后端通信就圆满完成了

⑤ 如果是跨域请求，浏览器会从响应头中查找是否允许跨域访问

⑥ 如果允许跨域，通信圆满完成

⑦ 如果没找到或不包含想要跨域的域名，就丢弃响应结果

`CORS`兼容性：IE10 及以上可以正常使用

### JSONP

1. 原理  
   `script` 标签跨域不会被浏览器阻止  
   `JSONP`主要就是利用`SCRIPT`标签，加载跨域文件
2. 使用`JSONP `实现跨域  
   服务器端准备好`JSONP`接口  
   手动加载`JSONP`标签或

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <script type="text/javascript">
      const handleResponse = data => console.log(data)
    </script>
    <script src="https://www.imooc.com/api/http/jsonp?callback=handleResponse"></script>
  </body>
</html>
```

动态加载`JSONP`接口

```js
// 动态加载JSONP接口
const script = document.createElement('script')
script.src = 'https://www.imooc.com/api/http/jsonp?callback=handleResponse'
document.body.appendChild(script)
const handleResponse = data => {
  console.log(data)
}
```

## XHR 对象

### XHR 的属性

1. `responseType` 和`response`属性

- `responseText`只能在没有设置`responseType`或者`responseType=''`或`responseType='text'` 的时候才能使用
- `response`可以替代`responseText`，默认返回字符串，可以通过`responseType`设置返回形式(如果设置为`JSON`，浏览器默认调用`JSON.parse()`解析成 JS 中的对应值，但服务器还是返回的是`JSON`格式的字符串)

```js
xhr.responseType = 'json'
```

2. `timeout`属性:设置请求的超时时间（单位：ms）

3. `withCredentitals` 属性

- 指定使用`Ajax`发送请求时是否携带`Cookie `
- 使用`Ajax`发送请求，默认情况下，**同域时，会携带`Cookie`,跨域时，不会**
- **最终是否能成功跨域携带`Cookie`，还要看服务器同不同意**

```js
xhr.withCredentials = true
```

### XHR 方法

1. `abort()`:终止当前请求,一般配合 abort 事件一起使用
2. `setRequestHeader()`:可以设置请求头信息

[HTTP content-type](https://www.runoob.com/http/http-content-type.html)

```js
//  请求头中的`Content-Type`字段用来告诉服务器，浏览器发送的数据是什么格式的。
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded') // 对应的数据格式：'username=ased&password=asd'

xhr.setRequestHeader('Content-Type', 'application/json') // JSON格式的数据
```

### XHR 的事件

1. `load` 事件:响应数据可用时触发
   **推荐使用`onload`代替`onreadystatechange`**

```js
const url = 'https://www.imooc.com/api/http/search/suggest?words=js'
const xhr = new XMLHttpRequest()
xhr.addEventListener(
  'load',
  () => {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.response)
      console.log(typeof xhr.response)
    }
  },
  false
)
xhr.responseType = 'json'
xhr.open('GET', url, true)
xhr.send()
```

1. error 事件  
   请求发生错误时触发

```js
const url = 'https://www.imooc1.com/api/http/search/suggest?words=js'
const xhr = new XMLHttpRequest()
xhr.addEventListener(
  'load',
  () => {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.response)
      console.log(typeof xhr.response)
    }
  },
  false
)
xhr.addEventListener('error', () => {
  console.log('访问出错拉！')
})
xhr.responseType = 'json'
xhr.open('GET', url, true)
xhr.send()
```

3. abort 事件  
   调用 abort()终止请求时触发

```js
const url = 'https://www.imooc.com/api/http/search/suggest?words=js'
const xhr = new XMLHttpRequest()
xhr.addEventListener(
  'abort',
  () => {
    console.log('543629463')
  },
  false
)
xhr.addEventListener('error', () => {
  console.log('访问出错拉！')
})
xhr.responseType = 'json'
xhr.open('GET', url, true)
xhr.send()
xhr.abort()
```

4. timeout 事件

```js
var xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.onreadystatechange = () => {
  if (xhr.readyState !== 4) return
  if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
    console.log(xhr.response)
  }
}
xhr.open('GET', 'https://www.imooc.com/api/http/search/suggest?words=js')
xhr.timeout = 10
xhr.ontimeout = function (e) {
  console.log('Timeout!!')
}
xhr.send()
```

## FormData

使用 Ajax 提交表单(避免直接提交表单跳转)

FormData 可用于发送表单数据

```html
<body>
  <form id="login">
    <input type="text" name="username" placeholder="用户名" />
    <input type="password" name="password" placeholder="密码" />
    <input type="submit" id="submit" value="提交" />
  </form>
  <script>
    const login = document.getElementById('login')
    const btn = document.getElementById('submit')
    const url = 'https://www.imooc.com/api/http/search/suggest?words=js'
    btn.addEventListener(
      'click',
      e => {
        // 阻止表单跳转
        e.preventDefault()
        const xhr = new XMLHttpRequest()
        xhr.addEventListener(
          'load',
          () => {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
              console.log(xhr.response)
            }
          },
          false
        )
        xhr.open('POST', url, true)
        xhr.responseType = 'json'
        const data = new FormData(login)
        xhr.send(data)
      },
      false
    )
  </script>
</body>
```

FormData 的基本用法

```js
// 通过 HTML 表单元素创建 FormData 对象
const fd = new FormData(表单元素)
xhr.send(fd)

// 通过 自身的append() 方法添加数据
const fd = new FormData(表单元素)
fd.append('age', 18)
fd.append('sex', 'male')
xhr.send(fd)
```

## 封装 Ajax

1、`ajax`的原理需要掌握一下。即`ajax`这门技术是使用`XMLHttpRequest`这个对象实现的，该对象有一些方法和属性，比如`open()`、`send()`、`responseType`......它们的含义是什么要知道。
2、`ajax`的具体实现不需要自己手动封装。
3、实际开发中会使用现成的插件，我们只需要按照插件的文档使用即可

源代码：

[hand-tear-code](https://github.com/zhangfanhang/hand-tear-code/tree/master/ajax_%E5%B0%81%E8%A3%85)

## axios

1. 基于 Promise 的 HTTP 库

2. [axios 中文官方文档](http://www.axios-js.com/zh-cn/docs/)

3. [axios 中文说明](https://www.kancloud.cn/yunye/axios/234845)

## Fetch

[Fetch API 教程](https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html)

1. 也是前后端通信的一种方式
2. 是`Ajax`的一种替代方案，它是基于`Promise`的
3. **`Ajax`的兼容性比 `Fetch` 好**
4. `Fetch`没有`abort` `timeout`
