---
title: Babel
sidebar: auto
---

::: tip 参考
[【建议改成】读完这篇你还不懂 Babel 我给你寄口罩](https://juejin.cn/post/6844904065223098381)

[Babel 中文文档](https://www.babeljs.cn/docs/)
:::

## Babel 简介

Babel 是 JavaScript 的编译器，用来将 ES6 的代码，转换成 ES6 之前的代码

Babel **本身可以编译 ES6 的大部分语法**，比如 let、const、箭头函数、类

但是对于 ES6 新增的 API，比如 Set、Map、Promise 等全局对象，以及一些定义在全局对象上的方法（比如 Object.assign/Array.from）都不能直接编译，**需要借助其它的模块**

Babel 一般需要配合 webpack 来编译模块语法

## 使用 Babel 前的准备工作

1. 安装 Node.js 和 npm

2. 初始化项目：`npm init`

3. 安装 Babel

`npm install --save-dev @babel/core @babel/cli`

::: tip 提示
@babel/core 是 Babel 的核心模块.

@babel/cli, 它是一个终端运行工具, 内置的插件,运行你从终端使用 babel 的工具.
:::

4. 在 package.json 文件中添加执行 babel 的命令

```js
 "scripts": {
    "build":"babel src -d dist"
  }
```

**这段语句的意思是**: 它使用我们设置的解析方式来解析`src`目录下的所有 JS 文件, 并将转换后的每个文件都输出到`dist`目录下.

## 插件 plugins

`插件plugins`, 它的本质就是一个 JS 程序, 指示着 Babel 如何对代码进行转换.

如果你是要将 ES6+转成 ES5, 可以依赖官方插件, 例如:

**@babel/plugin-transform-arrow-functions**:`npm i --save-dev @babel/plugin-transform-arrow-functions`

这个插件的作用是将箭头函数转换为 ES5 兼容的函数

虽然我们已经实现了箭头函数转换的功能, 但是 ES6+其它的语法却并不能转换, 这是因为我们只使用了`@babel/plugin-transform-arrow-functions`这个功能插件, 没有使用其它的了.

## Presets

如果想要转换 ES6+的其它代码为 ES5, 我们可以使用"preset"来代替预先设定的`一组插件`, 而不是逐一添加我们想要的所有插件.

**这里可以理解为一个 preset 就是一组插件的集合.**

**@babel/preset-env**

例如, 我们使用`env preset`，`env preset`这个 preset 包括支持现代 JavaScript(ES6+)的所有插件.

安装： `npm i --save-dev @babel/preset-env`

所以也就是说你安装使用了`env preset`之后, 就可以看到其它 ES6+语法的转换了.

现在让我们来用用 ES7 中的求幂运算符和函数参数支持尾部逗号这两个功能吧:

```js
const fn = () => 1 // ES6箭头函数, 返回值为1
let num = 3 ** 2 // ES7求幂运算符
let foo = function (a, b, c) {
  // ES7参数支持尾部逗号
  console.log('a:', a)
  console.log('b:', b)
  console.log('c:', c)
}
foo(1, 3, 4)
console.log(fn())
console.log(num)
```

## babel.config.js 配置文件

[配置](https://juejin.cn/post/6844904065223098381#heading-11)

```js
const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        chrome: '64',
        firefox: '60',
        safari: '11.1',
      },
    },
  ],
]

module.exports = { presets }
```

加上这个配置的作用是:

- 使用了`env preset`这个 preset
- `env preset`只会为`目标浏览器`中**没有**的功能加载转换插件

## Polyfill

Plugins 是提供的插件, 例如箭头函数转普通函数`@babel/plugin-transform-arrow-functions`

Presets 是一组 Plugins 的集合.

**而 Polyfill 是对执行环境或者其它功能的一个补充.**

就像现在你想在 edge10 浏览器中使用 ES7 中的方法`includes()`, 但是我们知道这个版本的浏览器环境是不支持你使用这个方法的, 所以如果你强行使用并不能达到预期的效果.

而 polyfill 的作用正是如此, 知道你的环境不允许, 那就帮你引用一个这个环境, 也就是说此时编译后的代码就会变成这样:

```js
// 原来的代码
var hasTwo = [1, 2, 3].includes(2)

// 加了polyfill之后的代码
require('core-js/modules/es7.array.includes')
require('core-js/modules/es6.string.includes')
var hasTwo = [1, 2, 3].includes(2)
```

`@babel/polyfill`用来模拟完成 ES6+环境:

- 可以使用像 Promise 或者 WeakMap 这样的新内置函数

- 可以使用像 Array.from 或者 Object.assign 这样的静态方法

- 可以使用像 Array.prototype.includes 这样的实例方法

- 还有 generator 函数

安装： `npm i --save @babel/polyfill` (注意 --save 选项而不是 --save-dev，因为这是一个需要在源代码之前运行的 polyfill。)

由于我们使用的是 envpreset, 这里个配置中有一个叫做 "useBuiltIns"的选项

如果将这个选择设置为"usage", 就只包括你需要的 polyfill

安装配置了`@babel/polyfill`, Babel 将检查你的所有代码, 然后查找目标环境中缺少的功能, 并引入仅包含所需的 polyfill

使用 Edge17 中没有的 Promise.prototype.finally:

```js
const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        chrome: '64',
        firefox: '67',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
    },
  ],
]

module.exports = { presets }
```

**@babel/polyfill 的 polypill, 其实它在 Babel7.4.0 以上已经不被推荐使用了.**

而是推荐使用`core-js@3`+`@babel/preset-env`然后设置`@babel/preset-env`的`corejs`选项为`3`.

安装：`npm i --save core-js@3`

添加`corejs`选项:

```js
const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        chrome: '64',
        firefox: '67',
        safari: '11.1',
      },
      useBuiltIns: 'usage',
      corejs: 3,
    },
  ],
]

module.exports = { presets }
```
