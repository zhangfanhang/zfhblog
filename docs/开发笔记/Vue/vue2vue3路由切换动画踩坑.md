---
title: vue3路由切换动画踩坑
isOriginal: true
tag:
  - vue-router
category:
  - 开发笔记
  - Vue
---

最近正在使用`vue3`开发一个后台管理系统。想要给菜单切换(路由切换)时加一个动画，坑点很多记录下

vue-router官网已经有示范代码：

```vue
<router-view v-slot="{ Component }">
  <Transition name="fade">
    <component :is="Component" />
  </Transition>
</router-view>
```

::: danger 特别注意

路由组件下必须只能有一个根节点，否则切换就会不正常，虽然vue3支持多个根节点的写法。

:::

这里结合`animate.css`实现过渡动画：

```vue
          <router-view v-slot="{Component}">
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

![vue3admin-路由切换动画](https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/vue3admin-%E8%B7%AF%E7%94%B1%E5%88%87%E6%8D%A2%E5%8A%A8%E7%94%BB.gif)