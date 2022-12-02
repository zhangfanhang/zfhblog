---
title: React中的CSS
category:
  - 前端框架
  - React
order: 3
---

目前来看，整个前端已经是组件化的天下。而`css`的设计就不是为组件化而生的，所以在目前组件化的框架中都在需要一种合适的`css`解决方案 	

事实上，`css` 一直是 `React` 的痛点，也是被很多开发者吐槽、诟病的一个点

在这一点上，`Vue` 做的要确实要好于 `React`

相比而言，`React` 官方并没有给出在 `React` 中统一的样式风格

以下介绍几种 `React` 中的 `CSS` 解决方案

## 内联样式

内联样式是官方推荐的一种 `css` 样式的写法：

- `style` 接受一个采用小驼峰命名属性的 `JavaScript` 对象
- 并且可以引用 `state` 中的状态来设置相关的样式

内联样式的优点:

- 内联样式, 样式之间不会有冲突
- 可以动态获取当前 `state` 中的状态

内联样式的缺点：

- 写法上都需要使用驼峰标识
- 某些样式没有提示
- 大量的样式, 代码混乱
- 某些样式无法编写(比如伪类/伪元素)

所以官方依然是希望内联样式和普通的` css` 来结合编写

## 普通的 css

普通的 css 我们通常会编写到一个单独的文件，之后再进行引入

这样的编写方式和普通的网页开发中编写方式是一致的

组件化开发中我们总是希望组件是一个独立的模块，即便是样式也只是在自己内部生效，不会相互影响。但是普通的 css 都属于全局的 css，**样式之间会相互影响**

这种编写方式最大的问题是样式之间会相互层叠掉

## css modules

`css modules`并不是`React`特有的解决方案，而是所有使用了类似于`webpack`配置的环境下都可以使用的

`React`的脚手架已经内置了`css modules`的配置：`.css/.less/.scss `等样式文件都修改成 `.module.css/.module.less/.module.scss` ，之后就可以引用并且进行使用了

`css modules`确实解决了局部作用域的问题，也是很多人喜欢在`React`中使用的一种方案

但是这种方案也有自己的缺陷：

- 引用的类名，不能使用连接符`(.home-title)`，在`JavaScript`中是不识别的
- 所有的`className`都必须使用`{style.className} `的形式来编写
- 不方便动态来修改某些样式，依然需要使用内联样式的方式

如果你觉得上面的缺陷还算 OK，那么你在开发中完全可以选择使用`css modules`来编写，并且也是在 React 中很受欢迎的一种方式

```jsx
import style from 'app.moudle.css'

// 单个
<div className={style.fz20}></div>
// 多个
<span className={[style.fz20,style.red].join('')}></span>
// 多个 优雅的写法 composes
参考: https://www.ruanyifeng.com/blog/2016/06/css_modules.html
```

## CSS in JS

“CSS-in-JS” 是指一种模式，其中 CSS 由 JavaScript 生成而不是在外部文件中定义；注意此功能并不是 React 的一部分，而是由第三方库提供。 React 对样式如何定义并没有明确态度

React 的思想中认为逻辑本身和 UI 是无法分离的，所以才会有了 JSX 的语法。样式呢？样式也是属于 UI 的一部分。 事实上 CSS-in-JS 的模式就是一种将样式（CSS）也写入到 JavaScript 中的方式，并且可以方便的使用 JavaScript 的状态。所以 React 有被人称之为 All in JS

styled-components 是社区最流行的 CSS-in-JS 库

安装 styled-components：`yarn add styled-components`

## styled-components 的基本使用

styled-components 的本质是通过函数的调 用，最终创建出一个组件：

- 这个组件会被自动添加上一个不重复的 class
- styled-components 会给该 class 添加相关的样式

另外，它支持类似于 CSS 预处理器一样的特性：

- 支持样式嵌套，如嵌套后代选择器

- 可以通过&符号获取当前元素

```jsx
const Panel = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex: 0.5;
  height: 80vh;
  border-radius: 50px;
  margin: 10px;
  transition: all 300ms ease-in;

  &.active {
    flex: 5;
  }
`
```

- 使用伪类选择器、伪元素等

### props、attrs 属性

#### props 可以穿透

props 可以被传递给 styled 组件,**并映射到组件 html 结构最外层的标签上**

```jsx
<Panel
  onClick={this.changeCurrentNum.bind(this, num)}
  className={classNames({ active: this.state.currentNum === num })}
  key={num}
></Panel>
```

- 获取 props 需要通过`${}`传入一个插值函数，props 会作为该函数的参数,这种方式可以有效的解决动态样式的问题

```jsx
import { PureComponent } from 'react'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  color: ${props => props.color};
`

function Home() {
  return (
    <HomeWrapper color="red">
      <h1>我是home组件</h1>
    </HomeWrapper>
  )
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}
```

#### 添加 attrs 属性

```jsx
const Wrapper = styled.div.attrs(
    {
        padding-left:props=>props.pleft || '5px'
    }
)`
 padding-left:${props=>props.pleft}
`
```

### styled 高级特性

#### 支持样式的继承

```jsx
const MainButtion = styled.div`
  color: #000;
  font-size: 30px;
  padding: 8px 30px;
`
const MenuButton = styled(MainButton)`
  background-color: red;
`
```

#### styled 设置主题

```jsx
import { PureComponent } from 'react'

import styled, { ThemeProvider } from 'styled-components'

const HomeWrapper = styled.div`
  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.color};
`

const MenuWrapper = styled.div`
  font-size: ${props => props.theme.fontSize};
`

function Home() {
  return <HomeWrapper>我是home组件</HomeWrapper>
}

function Menu() {
  return <MenuWrapper>我是menu组件</MenuWrapper>
}

export default class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{ fontSize: '30px', color: 'yellow' }}>
        <Home />
        <Menu />
      </ThemeProvider>
    )
  }
}
```
