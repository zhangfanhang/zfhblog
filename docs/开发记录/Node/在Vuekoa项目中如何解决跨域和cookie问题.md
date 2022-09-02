---
title: 在Vue+koa项目中如何解决跨域和cookie问题
---

Vue 中，要设置`withCredentials`请求中才能携带 cookie

```js
import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    // 当前请求为跨域类型时,在请求中协带cookie
    // 在做登录认证的时候，会出现请求未登录的情况，
    // 查看请求头的时候发现并没有把登录时的cookie设置到第二次的请求头里面。
    // 查看资料才知道跨域请求要想带上cookie，必须要在ajax请求里加上
    withCredentials: true,
})
export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        instance.get(url, { params }).then(
            res => {
                resolve(res.data)
            },
            err => {
                reject(err)
            }
        )
    })
}
export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        instance
            .post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(
                res => {
                    resolve(res.data)
                },
                err => {
                    reject(err)
                }
            )
    })
}
```

koa 中，安装`koa2-cors`中间件，

```js
// app.js
app.use(
    cors({
        // origin: 'http://localhost:8081', // 支持前端哪个域，可以跨域
        credentials: true, // 允许跨域的时候带着 cookie
    })
)
```

session 配置(安装`koa-generic-session`中间件)：

```js
// app.js
// session
app.keys = ['Frank@#%koa2%$test'] // 秘钥
app.use(
    session({
        // 配置 cookie
        cookie: {
            path: '/', // cookie 在根目录下有效
            httpOnly: true, // cookie 只允许服务端来操作
            maxAge: 24 * 60 * 60 * 1000, // cookie 的过期时间
        },
    })
)
```
