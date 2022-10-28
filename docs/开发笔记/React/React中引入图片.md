---
title: React中引入图片
category:
  - 开发笔记
  - React
---

## img

```jsx
import { Component } from 'react'
import logo from './asset/logo.jpg'

export default class Login extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="logo" />
      </div>
    )
  }
}
```

 

## background

```jsx
import logo from './asset/logo.jpg'

// ....
background-image:url(${logo});
```

