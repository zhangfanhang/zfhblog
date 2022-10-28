---
title: React的过渡动画
tag: 过渡动画
category:
  - 前端框架
  - React
---

[React 系列十四 - React 过渡动画](https://mp.weixin.qq.com/s/14HneI7SpfrRHKtqgosIiA)

[React 之 react-transition-group](https://juejin.cn/post/6844904068125573133)

## react-transition-group

在开发中，我们想要给一个组件的显示和消失添加某种过渡动画，可以很好的增加用户体验。

当然，我们可以通过原生的 CSS 来实现这些过渡动画，但是 React 社区为我们提供了 react-transition-group 用来完成过渡动画。

React 曾为开发者提供过动画插件 react-addons-css-transition-group，后由社区维护，形成了现在的 react-transition-group。

这个库可以帮助我们方便的实现组件的 入场 和 离场 动画，使用时需要进行额外的安装：

`yarn add react-transition-group`

## CSSTransition

CSSTransition 执行过程中，有三个状态：appear、enter、exit；

它们有三种状态，需要定义对应的 CSS 样式：

- 第一类,开始状态：对于的类是-appear、-enter、-exit；
- 第二类,执行动画：对应的类是-appear-active、-enter-active、-exit-active；
- 第三类,执行结束：对应的类是-appear-done、-enter-done、-exit-done；

### CSSTransition 常见属性

#### in

触发进入或者退出状态

- 如果添加了 `unmountOnExit`，那么该组件会在执行退出动画结束后被移除掉；
- 当 in 为 true 时，触发进入状态，会添加-enter、-enter-acitve 的 class 开始执行动画，当动画执行结束后，会移除两个 class，并且添加-enter-done 的 class；
- 当 in 为 false 时，触发退出状态，会添加-exit、-exit-active 的 class 开始执行动画，当动画执行结束后，会移除两个 class，并且添加-enter-done 的 class；

::: tip 比如说，一个 div 的显示/隐藏动画

1. div 显示:对应的 class 为 card-enter card-enter-active 动画走完为 card-enter-done
2. div 消失:对应的 class 为 card-exit card-exit-active 动画走完为 card-exit-done

:::

#### classNames

动画 class 的名称

决定了在编写 css 时，对应的 class 名称：比如 card-enter、card-enter-active、card-enter-done；

#### timeout

类添加删除的时间

#### appear

是否在初次进入添加动画（需要和 in 同时为 true）

#### unmountOnExit

退出后卸载组件(移除 DOM 节点)

#### CSSTransition 的钩子函数

主要为了检测动画的执行过程，来完成一些 JavaScript 的操作

- onEnter：在进入动画之前被触发(对应 onExit)
- onEntering：在应用进入动画时被触发(对应 onExiting)
- onEntered：在应用进入动画结束后被触发(对应 onEntered)

## SwitchTransition

SwitchTransition 可以完成两个组件之间切换的炫酷动画：

- 比如我们有一个按钮需要在 on 和 off 之间切换，我们希望看到 on 先从左侧退出，off 再从右侧进入
- 这个动画在 vue 中被称之为 vue transition modes(过渡模式)
- react-transition-group 中使用 SwitchTransition 来实现该动画

SwitchTransition 中主要有一个属性：mode，有两个值

- in-out：表示新组件先进入，旧组件再移除
- out-in：表示就组件先移除，新组建再进入

如何使用 SwitchTransition 呢？

- SwitchTransition 组件里面要有 CSSTransition 组件，不能直接包裹你想要切换的组件
- SwitchTransition 里面的 CSSTransition 组件不再像以前那样接受 in 属性来判断元素是何种状态，取而代之的是 key 属性

::: details coolCode

```jsx
import { PureComponent } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Card, Avatar } from 'antd'
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'
import { Button } from 'antd'

const { Meta } = Card

const BtnWrapper = styled.div`
  text-align: center;
  width: 100%;
`

const CardWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .card-enter {
    opacity: 0;
    transform: scale(0.7);
  }

  .card-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms;
  }

  .card-exit {
    opacity: 1;
    transform: scale(1);
  }

  .card-exit-active {
    opacity: 0;
    transform: scale(0.7);
    transition: all 300ms;
  }

  .btn-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .btn-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 1000ms;
  }

  .btn-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .btn-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 1000ms;
  }
`

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isShow: false,
    }
  }

  showControl() {
    this.setState({
      isShow: !this.state.isShow,
    })
  }

  render() {
    return (
      <CardWrapper>
        <BtnWrapper>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={this.state.isShow ? 'on' : 'off'}
              classNames="btn"
              timeout={1000}
            >
              <Button
                type="primary"
                style={{ marginBottom: '20px' }}
                onClick={this.showControl.bind(this)}
              >
                {this.state.isShow ? '隐藏' : '显示'}
              </Button>
            </CSSTransition>
          </SwitchTransition>
        </BtnWrapper>
        <CSSTransition
          in={this.state.isShow}
          classNames="card"
          timeout={300}
          unmountOnExit
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://www.runoob.com/wp-content/uploads/2013/07/js-logo.png"
              />
            }
            actions={[
              <SettingOutlined
                onClick={() => {
                  console.log('打开设置')
                }}
              />,
              <EditOutlined />,
              <EllipsisOutlined />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqmVbQu2VMVVpfj2vg9PeXQNw1wy3tn3oZlWyD6O6nTSxkKZkEOX9aDyAMV2fWCm9Ce5GXho5HmsA/132?imageView2/1/w/80/h/80" />
              }
              title="frank zhang"
              description="love fe,love life"
            />
          </Card>
        </CSSTransition>
      </CardWrapper>
    )
  }
}
```

:::

## TransitionGroup

当我们有一组动画时，需要将这些 CSSTransition 放入到一个 TransitionGroup 中来完成动画
