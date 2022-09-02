---
title: mongoDB
sidebar: auto
---

// TODO: 2022-5-25 查

## 安装

### windows

`windows`下的安装比较简单，不赘述

### macOS

建议使用`homebrew`进行安装

第一步：`brew tap mongodb/brew`

第二步：`brew install mongodb-community`

接着启动 mongodb 服务：`brew services start mongodb-community`

在终端下输入`mongo`进行测试

## 概念

数据库 `database`--->集合 `collection`--->文档 `document`

### NoSQL

关系型数据库需要学习 `SQL` 语言

`NoSQL` 数据库无需用 `SQL`语句查询

## node.js 连接 mongodb

安装 `mongodb` 插件,当前版本`@4.0.2`,具体用法参考：[mongodb-npm](https://www.npmjs.com/package/mongodb)

```js
npm i mongodb --save
```

### 查询

```js
const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
// 数据库名称
const dbName = 'comments'

async function main() {
  await client.connect()
  console.log('数据库连接成功!')
  // 切换数据库
  const db = client.db(dbName)
  // 切换到指定的集合
  const collection = db.collection('message')
  // 返回查询结果
  return await collection.find({}).toArray()
}

main()
  .then(res => console.log('查询结果：', res))
  .catch(err => console.error('出错：', err))
  .finally(() => client.close())
```

### 查询条件

```js
collection.find({ city: 'shanghai' }).toArray()
```

### 排序

```js
// -1逆序  1顺序
collection.find().sort({ _id: -1 }).toArray()
```

### 新增

`insertMany`同时新增多条文档，**需要传入一个数组对象**

```js
const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
// 数据库名称
const dbName = 'comments'

async function main() {
  await client.connect()
  console.log('数据库连接成功!')
  // 切换数据库
  const db = client.db(dbName)
  // 切换到指定的集合
  const collection = db.collection('message')
  //  插入一条文档
  return await collection.insertOne({
    name: 'zhangfanhang',
    message: 'this is a message!',
  })
  // return await collection.insertMany([
  //     {
  //         name: 'frank',
  //         message: '这是第1个message',
  //     },
  //     {
  //         name: 'frank',
  //         message: '这是第2个message',
  //     },
  //     {
  //         name: 'frank',
  //         message: '这是第2个message',
  //     },
  // ])
}

main()
  .then(res => console.log('插入成功！', res))
  .catch(err => console.error('插入出错！', err))
  .finally(() => client.close())
```

### 修改

```js
const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
// 数据库名称
const dbName = 'comments'

async function main() {
  await client.connect()
  console.log('数据库连接成功!')
  // 切换数据库
  const db = client.db(dbName)
  // 切换到指定的集合
  const collection = db.collection('message')
  // 返回查询结果
  return await collection.updateOne(
    // 修改的条件
    { name: 'fuvke' },
    // 要修改的属性和属性值,或者要新增的属性和属性值
    { $set: { message: 'change', age: 12 } }
  )
}

main()
  .then(res => console.log('修改成功！', res))
  .catch(err => console.error('修改出错！', err))
  .finally(() => client.close())
```

### 删除

`deleteMany` 删除所有符合条件的文档，`deleteOne` 删除一条最先添加到集合中的文档

```js
const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
// 数据库名称
const dbName = 'comments'

async function main() {
  await client.connect()
  console.log('数据库连接成功!')
  // 切换数据库
  const db = client.db(dbName)
  // 切换到指定的集合
  const collection = db.collection('message')
  // 返回结果
  return await collection.deleteMany({ name: 'frank' })
  // return await collection.insertMany([
  //     {
  //         name: 'frank',
  //         message: '这是第1个frank message',
  //     },
  //     {
  //         name: 'frank',
  //         message: '这是第2个frank message',
  //     },
  //     {
  //         name: 'frank',
  //         message: '这是第2个frank message',
  //     },
  // ])
}

main()
  .then(res => console.log('删除成功！', res))
  .catch(err => console.error('删除出错！', err))
  .finally(() => client.close())
```

## mongoose

### 为什么要用 mongoose?

`mongodb` 的数据格式过于灵活，可以插入任何数据，不受限制。实际开发中，要有数据格式的规范(重要)。

`mongoose` 可以提供**规范**，

- Schema 可以定义数据格式的规范
- 以 Model 规范 Collection（集合）
- 规范数据操作的 API

### 安装 mongoose

> 以下代码测试环境为 mongose@5.9.9 node.js v12.16.1

```js
npm i mongoose@5.9.9 --save
```

### 连接数据库

db/db.js

```js
// 连接数据库（mongodb的服务端）

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'commentDB'

// 将 mongoose 发送到 MongoDB 的操作打印到控制台
mongoose.set('debug', true)
// 写上就完了
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', true)

// 开始连接
mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const conn = mongoose.connection

conn.on('error', err => {
  console.error('mongoose 连接出错', err)
})

module.exports = mongoose // commonjs
```

### 定义 Schema

db/model.js

```js
// 数据模型（规范数据格式）

const mongoose = require('./db')

// 定义 User Schema （数据规范）
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true, // 必需
      unique: true, // 唯一，不重复
    },
    password: String,
    age: Number,
    city: String,
    // 性别
    gender: {
      type: Number,
      default: 0, // 0 - 保密，1 男，2 女
    },
  },
  {
    timestamps: true, // 时间戳，自动添加文档的创建时间、更新时间
  }
)

// 定义 User Model
const User = mongoose.model('user', UserSchema)

// 定义 Comment Schema
const CommentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true, // 必需
    },
    username: String, // 用户名
  },
  { timestamps: true }
)

// 定义 Comment Model
const Comment = mongoose.model('comment', CommentSchema)

module.exports = {
  User,
  Comment,
}
```

### 新增

```js
const { User } = require('./model')
!(async () => {
  const zhangsan = new User({
    username: '李四2',
    password: 'bbbb',
    age: 18,
    city: '上海',
    gender: 2,
  })
  zhangsan.save()
})()
```

create()方法返回的是 promise 对象，里面包含返回值，使用 await 可以直接拿到值，输出比较方便，所以这里添加了 await 。具体情况具体分析，如果不输出也不一定要加 await 。

```js
const { User } = require('./model')
!(async () => {
  const wangwu = await User.create({
    username: '王五',
    password: '123456',
    age: 21,
    city: '南京',
  })
  console.log('王五创建完成', wangwu)
})()
```

### 查询

db/test.js

查询列表数据，返回的是数组

```js
const { User } = require('./model')
!(async () => {
  const useList = await User.find()
  console.log('查询结果', useList)
})()
```

查询单条数据，返回的是对象

```js
const { User } = require('./model')
!(async () => {
  const user = await User.findOne({ username: '王五' })
  console.log('查询结果', user)
})()
```

### 查询条件

db/test.js
查询列表数据，返回的是数组

```js
const { User } = require('./model')
!(async () => {
  const useList = await User.find({ age: '21' })
  console.log('查询结果', useList)
})()
```

### 排序

查询列表数据，返回的是数组

```js
const { User } = require('./model')
!(async () => {
  const useList = await User.find().sort({ _id: -1 })
  console.log('查询结果', useList)
})()
```

### 更新

```js
const { User } = require('./model')
// 定义一个 async 的匿名函数，并执行。为了里面能用 await
!(async () => {
  // 更新
  const updateResult = await User.findOneAndUpdate(
    { username: 'zhangsan' }, // 条件
    { age: 30 }, // 更新的内容
    {
      new: true, // 返回更新后的数据,不写返回的是更新前的数据
    }
  )
  console.log('更新的返回结果', updateResult)
})()
```

### 删除

```js
const { User } = require('./model')
// 定义一个 async 的匿名函数，并执行。为了里面能用 await
!(async () => {
  // 删除
  const removeResult = await User.remove({ username: 'lisi' })
  console.log('删除的返回结果', removeResult)
})()
```

### 对接 nodejs 路由

以获取留言列表，创建留言为例
routes/comments.js

```js
const router = require('koa-router')()
const { Comment } = require('../db/model')

router.prefix('/api')

// 定义路由：模拟获取留言板列表
router.get('/list', async (ctx, next) => {
  const query = ctx.query // req 功能
  console.log('query', query)
  // ctx.body = 'api list' // res 功能

  // 获取数据库的列表
  const commentList = await Comment.find().sort({ _id: -1 })

  ctx.body = {
    errno: 0,
    data: commentList,
  }
})

// 定义路由：模拟创建留言
router.post('/create', async ctx => {
  const body = ctx.request.body // request body
  console.log('body', body)

  // 获取数据
  const { content, username } = body
  // 插入到数据库
  const newComment = await Comment.create({
    content,
    username,
  })

  ctx.body = {
    errno: 0,
    message: '成功',
    data: newComment,
  }
})

module.exports = router // 输出
```

##

【
