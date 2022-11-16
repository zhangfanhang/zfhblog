---
title: vue3开发RABC权限管理系统
tag:
  - vue3
  - Pinia
  - ElementPlus
  - vite
  - Vue-Router
  - RABC后台管理系统
category:
  - 开发笔记
  - Vue
---

## vite 环境变量

[环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html#env-variables)

## axios 的使用

### 二次封装

```js
/**
 * axios 二次封装
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 引入路由实例
import router from '../router'
import config from '../config/environmentConfig.js'
import storage from '@/utils/storage.js'

// 错误消息
const TOKEN_INVALID = 'Token认证失败，请重新登陆'
const NETWORK_ERROR = '网络请求异常，请稍后重试'
// 创建axios对象
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 10000,
})

// 请求拦截
service.interceptors.request.use((req) => {
  // JWT
  if (storage.getItem('userInfo') !== undefined) {
    const { token } = storage.getItem('userInfo')
    const headers = req.headers
    if (!headers.Authorization) headers.Authorization = `Bearer ${token}`
  }
  return req
})

// 响应拦截
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  // 状态码判断
  if (code === 200) {
    // 请求成功
    return data
  } else if (code === 500001) {
    // token认证失败
    ElMessage.error(TOKEN_INVALID)
    // 路由跳转到登陆页面
    router.push('/login')
    return Promise.reject(TOKEN_INVALID)
  } else {
    // 网络异常(其他情况）
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})

/**
 * 请求核心函数
 * @param options 请求配置
 */
function request(options) {
  // 默认为get
  options.method = options.method || 'get'
  // 无论是get还是post 数据字段均为data
  if (options.method.toLowerCase() === 'get') options.params = options.data
  // 确保生产环境调取线上地址
  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
  } else {
    // mock 开关 控制 开发测试环境api地址切换
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
  return service(options)
}

export default request
```

### 组件中使用

不同页面的 api 请求放在不同的 js 文件中，如登陆相关的接口放在`/api/login.js`下,引入我们定义好的 axios 实例

```js
import request from '../utils/request.js'

/**
 * 登陆接口
 */
export async function login(params) {
  return request({
    url: '/users/login',
    method: 'post',
    data: params,
  })
}
```

在组件中使用：

```js
import { login } from '@/api/login.js'
// other code ...
const res = await login({ ...userInfo })
router.push('/')
// 存储用户信息
userStore.saveUserInfo(res)
```

## storage 二次封装

cookie，localStorage，sessionStorage 的区别？

```js
/**
 * storage类封装
 */
import config from '../config/index.js'

export default {
  // 获取storage下项目命名空间的值
  getStorage() {
    return JSON.parse(localStorage.getItem(config.namespace) || '{}')
  },
  // 设置数据
  setItem(key, value) {
    const storage = this.getStorage()
    storage[key] = value
    localStorage.setItem(config.namespace, JSON.stringify(storage))
  },
  // 获取数据
  getItem(key) {
    return this.getStorage()[key]
  },
  // 删除数据
  clearItem(key) {
    let storage = this.getStorage()
    delete storage[key]
    localStorage.setItem(config.namespace, JSON.stringify(storage))
  },
  // 清空所有数据
  clearAll() {
    localStorage.clear()
  },
}
```

## vite 项目`index.html`中使用变量

[vite-plugin-html 插件](https://www.jianshu.com/p/77cceaaa4723)

## $响应式语法糖

一般的我们通过 ref 声明响应式数据，在 js 中访问需要加.value

通过响应式语法糖，我们可以省去 value

通过配置开启：

```js
// vite.config.js
export default {
  plugins: [
    vue({
      reactivityTransform: true,
    }),
  ],
}
```

[更多细节](https://cn.vuejs.org/guide/extras/reactivity-transform.html)

## css 中绑定变量

::: warning
如果需要动态变更，请创建响应式数据
:::

```js
let leftNavWidth = $ref("220px")
 .left-nav {
    width: v-bind(leftNavWidth);
    height: 100vh;
    background-color: #ffffff;
    overflow-y: auto;
    transition: width .5s;
 }
```

## 路径别名

[vite3.0 支持路径别名](https://notes.zfhblog.top/%E5%BC%80%E5%8F%91%E8%AE%B0%E5%BD%95/Vue/vite3.0%E6%94%AF%E6%8C%81%E8%B7%AF%E5%BE%84%E5%88%AB%E5%90%8D.html)

## props

```vue
<script setup>
const props = defineProps(['menuList', 'isCollapse'])
</script>
```

在使用 `<script setup>` 的单文件组件中，props 可以使用 `defineProps()` 来声明

模板中直接使用，无需`props.xxx`

## 动态组件

`<component is='string | Component'>`

- 当 `is` 是字符串，它既可以是 HTML 标签名也可以是组件的注册名
- 或者，`is` 也可以直接绑定到组件的定义

## 递归组件

项目中的菜单列表并不是静态数据，而是从接口取数据进行动态渲染。

那么此时就需要递归组件，即自己调用自己

```vue
<template>
  <el-menu :collapse="isCollapse" default-active="/system/menu" router>
    <template v-for="menu in menuList">
      <el-sub-menu
        v-if="
          menu.children &&
          menu.children.length > 0 &&
          menu.children[0].menuType == 1
        "
        :index="menu.path"
      >
        <template #title>
          <el-icon>
            <component :is="menu.icon.split('-')[2]" />
          </el-icon>
          <span>{{ menu.menuName }}</span>
        </template>
        <!--        递归组件-->
        <menu-tree :menuList="menu.children" />
      </el-sub-menu>
      <el-menu-item v-else-if="menu.menuType == 1" :index="menu.path"
        >{{ menu.menuName }}
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script setup>
const props = defineProps(['menuList', 'isCollapse'])
</script>
```

## JWT

登陆不需要携带`token`,其他接口需要`token`

## 面包屑导航

// TODO 17 号早上 check

## 重置 elementPlus 颜色主题

新建一个 scss 文件：

```scss
/*
* element样式重置
*/
// 修改主题色
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #00cf74,
    ),
  )
);

// 导入所有样式
@import 'element-plus/theme-chalk/src/index.scss';
```

然后在`main.js`文件中引入：

```js
import './style/elementReset.scss'
// import "element-plus/dist/index.css"
```

## 造轮子:公共表格封装

[查看](/开发记录/Vue/elementPlus公共表格封装)
