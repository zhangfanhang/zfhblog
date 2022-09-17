---
title: React中引入图片
date: 2022/09/14 11:19:45
tags:
  - 2022/09/14 11:19:45
  - React
  - 图片
---

# import

```jsx
import {Component} from 'react'
import logo from './asset/logo.jpg'
 
export default class Login extends  Component {
    render() {
        return (<div>
            <img src={logo} alt="logo" />
        </div>)
    }
}
```

# require

::: danger 

测试react+vite环境不可用

webpack应该可以

:::

```jsx
<img src={require('../../assets/2.png').default} alt='' style={imgStyle}/>
```

可以使用此方法插入动态图片,require中不能有纯粹的代表图片地址的变量，但是可以通过变量和字符串拼接的方式来使用此方法。

