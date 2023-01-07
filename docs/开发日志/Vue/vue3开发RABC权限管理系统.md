---
title: vue3开发RABC权限管理系统
isOriginal: true
tag:
  - vue3
  - Pinia
  - ElementPlus
  - vite
  - Vue-Router
  - RABC后台管理系统
category:
  - 开发日志
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

不同页面的 `api` 请求放在不同的` js` 文件中，如登陆相关的接口放在`/api/login.js`下,引入我们定义好的` axios` 实例

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

`cookie`，`localStorage`，`sessionStorage` 的区别？

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

一般的我们通过 `ref` 声明响应式数据，在 js 中访问需要加`.value`

通过响应式语法糖，我们可以省去 `value`

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

[vite3.0 支持路径别名](https://zfhblog.top/%E5%BC%80%E5%8F%91%E7%AC%94%E8%AE%B0/Vue/vue3vite3.0%E9%A1%B9%E7%9B%AE%E6%94%AF%E6%8C%81%E8%B7%AF%E5%BE%84%E5%88%AB%E5%90%8D.html)

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

- 当 `is` 是字符串，它既可以是 `HTML` 标签名也可以是组件的注册名
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

利用 vue router 的`match`路由匹配数组和路由元数据`title`进行渲染:

```vue
<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item, index) in matched">
      <router-link
        to="/welcome"
        v-if="index === 0"
        style="color:#fff !important;"
        >{{ item.meta.title }}</router-link
      >
      <span v-else style="color:#fff">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from 'vue'

const router = useRoute()
const matched = computed(() => {
  return router.matched
})
</script>
```

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

## 路由切换动画踩坑

想要给菜单切换(路由切换)时加一个动画，坑点很多记录下

vue-router 官网已经有示范代码：

```vue
<router-view v-slot="{ Component }">
  <Transition name="fade">
    <component :is="Component" />
  </Transition>
</router-view>
```

::: danger 特别注意

路由组件下必须只能有一个根节点，否则切换就会不正常，虽然 vue3 支持多个根节点的写法

[解决 Component inside ＜ Transition ＞ renders non-element root node that cannot be animated 问题](https://blog.csdn.net/qq_40719787/article/details/125631055)

:::

这里结合`animate.css`实现过渡动画：

```vue
<router-view v-slot="{ Component }">
            <Transition
                mode="out-in"
                enter-active-class="animate__animated animate__flipX animate__faster"
                leave-active-class="animate__animated animate__flipOutX animate__faster"
            >
              <KeepAlive>
                <component :is="Component"/>
              </KeepAlive>
            </Transition>
          </router-view>
```

`mode`参数确保先执行离开动画，然后在其完成**之后**再执行元素的进入动画，这样使得切换显得更“正常”

![vue3admin-路由切换动画](https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/vue3admin-%E8%B7%AF%E7%94%B1%E5%88%87%E6%8D%A2%E5%8A%A8%E7%94%BB.gif '路由切换动画')

## 按钮权限控制实现

::: tip 前置知识

[自定义指令](https://cn.vuejs.org/guide/reusability/custom-directives.html)

:::

```js
// main.js
// 按钮权限判断自定义指令
app.directive('permission', {
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding) {
    let userAction = storage.getItem('userAction')
    if (!userAction.includes(binding.value)) {
      // 隐藏元素
      el.style.display = 'none'
      // 变成宏任务 防止元素未插入 DOM 删除元素报错
      setTimeout(() => {
        el.parentNode.removeChild(el)
      }, 0)
    }
  },
})
```

## 404 页面开发

::: tip 前置知识

[导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

`Vue Router 3` 和` Vue Router 4`的处理逻辑稍有[不同](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0037-router-return-guards.md#motivation)。指的是`next`

:::

现在不使用`next`，只需要判断不符合条件的情况

```js
// router/index.js
// 全局前置守卫
// 判断访问路径是否正确 不正确跳转404页面
// vue-router 4 建议不使用`next`写法
router.beforeEach((to, from) => {
  let hasPermission =
    router.getRoutes().filter((route) => route.path === to.path).length > 0
  if (!hasPermission) return { name: '404' }
})
```

## 动态路由

动态路由的实现释放了前端路由，根据后端返回的菜单列表动态加载路由列表。

1. 根据接口返回的菜单列表生成路由表

```js
/**
 * @description 生成动态路由
 * @param list
 * @returns {*[]}
 */
export function generateRoute(list) {
    const routes = []
    const deep = (list) => {
        list.forEach(item => {
            if (item.action) {
                routes.push({
                    name: item.component,
                    path: item.path,
                    component: item.component,
                    meta: {
                        title: item.menuName
                    }
                })
            }else if(item.children&&!item.action){
                deep(item.children)
            }
        })
    }
    deep(list)
    return routes
```

2. 在全局前置守卫中加载路由(不同于`webpack`,`vite`使用[Glob](<(https://cn.vitejs.dev/guide/features.html#glob-import)>)进行导入)

```js
import storage from '@/utils/storage.js'
import { getPermissionList } from '@/api/home.js'
import { generateRoute } from '@/utils/generateRoute.js'
import router from '@/router/index.js'

/**
 *
 * @returns {Promise<void>}
 * @description 加载路由
 */
export const loadAsyncRouter = async () => {
  const userInfo = storage.getItem('userInfo') || {}
  if (userInfo.token) {
    const { menuList } = await getPermissionList()
    const routes = generateRoute(menuList)
    const modules = import.meta.glob('../views/*.vue')
    routes.forEach((route) => {
      let url = `../views/${route.name}.vue`
      route.component = modules[url]
      router.addRoute('home', route)
    })
  }
}
```

```js
// route/index.js
/**
 *  全局前置守卫
 *  vue-router 4 建议不使用`next`写法
 */
router.beforeEach(async (to, from) => {
  console.log('全局前置守卫被触发!')
  // 判断访问路径是否正确 不正确跳转404页面
  // let hasPermission = router.getRoutes().filter(route => route.path === to.path).length > 0
  // if (!hasPermission) return {name: '404'}
  // 用户状态判断逻辑
  // 检查用户是否已登录 ❗️避免无限重定向
  if (!storage.getItem('isLogin') && to.name !== 'login') {
    return { name: 'login' }
    // 登录状态不允许访问login
  } else if (storage.getItem('isLogin') && to.name === 'login') {
    return { name: from.name }
  }
  //    页面标题
  if (router.hasRoute(to.name)) {
    document.title = `${to.meta.title}|HangFan-Vue`
  } else {
    await loadAsyncRouter()
    let curRoute = router.getRoutes().filter((item) => item.path === to.path)
    if (curRoute?.length) {
      return { name: curRoute[0].name }
    } else {
      return { name: '404' }
    }
  }
})
```

那为什么要在这里加载路由呢？全局前置守卫在每一次路由切换的时候都会被调用；当我们进行路由第一次切换(除了登录页、欢迎页)从线上进行菜单列表的拉取，那第二次就不需要从接口拉取了。还有一种特殊情况就是刷新页面，不加载路由就会找不到页面，因为我们的路由是动态生成的，所以必须要在全局前置守卫里加载路由。

## 实现全局标签页

![vue3-admin-全局标签页](https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/vue3-admin-%E5%85%A8%E5%B1%80%E6%A0%87%E7%AD%BE%E9%A1%B5.gif '全局标签页效果图')

监听路由变化，利用`Pinia`存储当前路由路径和页面标题

```js
// 监听路由变化
watch([() => route.path, () => route.meta.title], async (newValue) => {
  tabsStore.changeTab(newValue[0])
  tabsStore.saveTab({ path: newValue[0], title: newValue[1] })
})
```

路由变化时，改变当前路径，保存当前路数组(需要过滤，防止路径数组存在重复的路径)：

```js
// store/tabs.js
/**
 * 路由tab信息
 */

import { defineStore, acceptHMRUpdate } from 'pinia'

// 第一个参数是应用程序中 store 的唯一 id
export const useTabsStore = defineStore('tabs', {
  state: () => {
    return {
      tabs: [],
      currentTab: '',
      number: 1,
    }
  },
  actions: {
    clearTabs() {
      this.tabs = []
    },
    changeTab(tab) {
      this.currentTab = tab
    },
    //保存
    saveTab(tab) {
      const uniqueFunc = (arr, uniId) => {
        const res = new Map()
        return arr.filter(
          (item) => !res.has(item[uniId]) && res.set(item[uniId], 1)
        )
      }
      if (tab.path !== '/login') this.tabs.push(tab)
      this.tabs = uniqueFunc(this.tabs, 'path')
    },
    //  删除
    removeTab(tabPath) {
      this.tabs.forEach((item, index) => {
        if (tabPath === item.path) {
          this.tabs.splice(index, 1)
        }
      })
    },
  },
})
// 热更新支持
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTabsStore, import.meta.hot))
}
```

利用`elementUI`的`el-tabs`组件完成标签页组件：

```vue
<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    closable
    class="demo-tabs"
    @tab-remove="removeTab"
    @tab-click="clickTab"
  >
    <el-tab-pane
      v-for="item in tabs"
      class="tab-pane"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    >
    </el-tab-pane>
  </el-tabs>
</template>
<!--路由tab切换组件-->
<script setup>
import Sortable from 'sortablejs'
import { useTabsStore } from '@/store/tabs.js'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const tabsStore = useTabsStore()
const router = useRouter()
let editableTabsValue = computed(() => tabsStore.currentTab)
let tabs = computed(() => tabsStore.tabs)
// 实现拖拽
const rowDrop = async () => {
  const el = document.querySelector('.el-tabs__nav')
  Sortable.create(el, {
    onEnd({ newIndex, oldIndex }) {
      //oldIIndex拖放前的位置， newIndex拖放后的位置
      const currRow = tabsStore.tabs.splice(oldIndex, 1)[0] //鼠标拖拽当前的el-tabs-pane
      tabsStore.tabs.splice(newIndex, 0, currRow) //tableData 是存放所以el-tabs-pane的数组
    },
  })
}
onMounted(() => {
  rowDrop()
})
const removeTab = (targetName) => {
  if (targetName === '/welcome' && tabsStore.tabs.length === 1) return
  tabsStore.tabs.forEach((item, index) => {
    if (
      item.path === targetName &&
      tabsStore.tabs[index - 1] &&
      tabsStore.currentTab === targetName
    ) {
      router.push(tabsStore.tabs[index - 1].path)
    }
  })
  tabsStore.removeTab(targetName)
  if (tabsStore.tabs.length === 0) router.push('/welcome')
}
const clickTab = (v) => {
  router.push(v.props.name)
}
</script>

<style scoped lang="scss">
.demo-tabs {
  height: 40px;
}
</style>
```

给`el-tab`绑定当前路径，点击标签 🏷️ 进行路径跳转。

删除需要进行判断：

- 欢迎页(首页)不允许删除
- 不符合第一个条件，遍历当前路径数组，当遍历到要删除的数组时候进行判断：如果要删除的路径与当前路径相同且路径数组中它的上一个元素存在，删除当前路径，并跳转到它的上一个路径

利用`sortablejs`实现标签页的位置调换功能。这部分需求是第一次做所以还是有瑕疵的，动画比较僵硬，拖拽的时候标签是透明的，好在完成了功能。开始使用`vuedraggable`没有实现，后面看看有没有其他拖拽库

## 造轮子: Hangfan-Vue-Template

<center>
<img src='https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/hangfan-logo.png'/>
</center>

[点我立即体验](https://hangfan-vue-template.zfhblog.top)

[说明文档](https://hangfan-vue-docs.zfhblog.top)

这是一个 `vue3`开发的后台管理系统模板

致敬 🫡[vue-admin-tempate](https://panjiachen.github.io/vue-admin-template/#/dashboard)，本项目是对它的拙劣模仿

### 公共组件：公共大表哥

#### props

| 参数        | 含义       | 默认值 |
| ----------- | ---------- | ------ |
| tableData   | 表格数据   |        |
| columnData  | 表头数据   |        |
| loading     | 加载状态   | false  |
| pagination  | 是否分页   | false  |
| checkedData | 当前勾选项 |        |
| selectable  | 复选框     | true   |
| total       | 数据个数   |        |
| rowKey      | 列唯一 key | 'id'   |
|             |            |        |

#### columnData

#### 分页

#### 组件源码

### 脚手架开发
