---
title: JS面试题
---

## 变量类型和计算

### 聊聊 JavaScript 中的数据类型

::: tip 参考

[【Step-By-Step】一周面试题 && 答案汇总 / 01](https://segmentfault.com/a/1190000019300557)

[【面试说】聊聊 JavaScript 中的数据类型](https://juejin.cn/post/6918892282192068622)

:::
目前，JS 原始类型有六种，分别为:

- Boolean
- String
- Number
- Undefined
- Null
- Symbol(ES6 新增)

ES10 新增了一种基本数据类型：BigInt

复杂数据类型只有一种: Object

null 不是一个对象，尽管 typeof null 输出的是 object，这是一个历史遗留问题，JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，null 表示为全零，所以将它错误的判断为 object

### js 值类型和引用类型的区别

::: tip 参考
[【Step-By-Step】一周面试题 && 答案汇总 / 01](https://segmentfault.com/a/1190000019300557)
:::

内存的分配不同

- 基本数据类型存储在栈中
- 复杂数据类型存储在堆中，栈中存储的变量，是指向堆中的引用地址。

访问机制不同

- 基本数据类型是按值访问
- 复杂数据类型按引用访问，JS 不允许直接访问保存在堆内存中的对象，在访问一个对象时，首先得到的是这个对象在堆内存中的地址，然后再按照这个地址去获得这个对象的值

复制变量时不同(a=b)

- 基本数据类型：a=b;是将 b 中保存的原始值的副本赋值给新变量 a,a 和 b 完全独立，互不影响
- 复杂数据类型：a=b;将 b 保存的对象内存的引用地址赋值给了新变量 a;a 和 b 指向了同一个堆内存地址，其中一个值发生了改变，另一个也会改变

比较变量时不同(== , ===)

- 基本数据类型：==比较值是否相等(**先进行类型转换再确定操作数是否相等**---**_引自 js 高级程序设计（第四版） P71_**)，===不仅比较值是否相等，还会比较数据类型是否相同

- 引用数据类型：不管是 == 还是 === ，都是比较内存地址是否相同，即比较是否都指向同一个对象

参数传递的不同(实参/形参)

函数传参都是按值传递(栈中的存储的内容)：基本数据类型，拷贝的是值；复杂数据类型，拷贝的是引用地址

### typeof 和 instanceof 的区别？

::: tip 拓展-参考

[手写实现 typeof 和 instanceof，并了解原理](https://juejin.cn/post/6991653255847772167)

:::

typeof 对于`string`,`boolean`,`number`,`undefined`,`function`,`symbol`等类型可正确判断

对于`null`,`array`,`object`判断结果均为 object

instanceof 代码形式为`object instanceof constructor`（**object 是否是 constructor 的实例**），该操作符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

### 变量计算，注意某些类型转换的坑

1. 字符串拼接

```js
const a = 100 + 10
const b = 100 + '10' // 只要有一个不是数字，就是字符串拼接
const c = true + 10
console.log(a, b, c) // 110 10010 11
```

2. == 运算符

**除了 == null 之外 其它地方一律用===**

```js
const obj = { a: 2 }
if (obj.b == null) {
  // 相当于 if(obj.b===null||obj.b===undefined)
  console.log('b')
}
```

3. if 语句和逻辑运算

truly 变量:!!a===true 的变量

falsy 变量:!!a===false 的变量

以下是 falsy 变量。除此之外都是 truly 变量

```js
!!0 == false
!!NaN == false
!!'' == false
!!null == false
!!undefined == false
!!false == false
```

if 语句:判断该变量是 truly 变量还是 falsy 变量

```js
const a = 100
if (a) {
  // ...
}
```

逻辑判断:短路计算

### == 和 === 有什么区别？

对于 == 来说，如果对比双方的类型不一样的话，就会进行类型转换

假如我们需要对比 x 和 y 是否相同，就会进行如下判断流程：

1. 首先会判断两者类型是否相同。相同的话就是比大小了

2. 类型不相同的话，那么就会进行类型转换

3. 会先判断是否在对比 `null` 和 `undefined`，是的话就会返回 `true`

4. 判断两者类型是否为 `string` 和 `number`，是的话就会将字符串转换为 `number`

```js
1 == '1'
      ↓
1 ==  1
```

5. 判断其中一方是否为 `boolean`，是的话就会把 `boolean` 转为 `number` 再进行判断

```js
'1' == true
        ↓
'1' ==  1
        ↓
 1  ==  1
```

6. 判断其中一方是否为 `object` 且另一方为 `string`、`number`或者 `symbol`，是的话就会把 object 转为原始类型再进行判断

```js
'1' == { name: 'yck' }
        ↓
'1' == '[object Object]'
```

::: tip 扩展：[] == ![] 和 {} == !{}

- [] == ![]

ECMAScript 中规定，逻辑非 (!) 的优先级高于相等操作符 ( == )

在比较 [] == ![] 的时候，先计算 ![] 得到布尔值 false

所以实际上比较的是 [] == false

```js
Number([]) == Number(false) // ->  0 == 0  ->  true
```

- {} == !{}

```js
{} == !{}  ->  {} == false  ->  Number({}) == Number(false)  ->  NaN == 0
```

如果有一个操作数是 NaN，相等操作符返回 false

所以 {} == !{} 的结果是 false

:::

## 如何理解 JS 原型（隐式原型和显式原型）和原型链

在 JavaScript 中是使用`构造函数`来新建一个`对象`的，每一个构造函数的内部都有一个 `prototype` 属性，这个就是`显式原型`，它的属性值是一个**对象**，这个对象包含了可以由该构造函数的**所有实例共享的属性和方法**。当使用构造函数新建一个对象后，在这个对象的内部将包含一个指针(**proto**)，这个指针指向构造函数的 prototype 属性对应的值，这个就是`隐式原型__proto__`。ES5 中新增了一个 `Object.getPrototypeOf()` 方法，可以通过这个方法来获取对象的原型。

当访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是`原型链`的概念。所以这就是新建的对象为什么能够使用 toString() 等方法的原因。

**原型链的终点是 `null`**,因为 `Object.prototype.__proto__`指向 null

## 作用域和闭包

### 什么是作用域？什么是自由变量？

::: tip 参考
[函数的作用域是什么？js 的作用域有几种？](https://blog.csdn.net/weixin_40387601/article/details/80515665)
:::
**全局作用域**

声明在任何函数之外的顶层作用域的变量就是`全局变量`，这样的变量拥有`全局作用域`

所有未定义直接赋值的变量自动声明为`全局作用域`=> `a=100`

所有 window 对象的属性拥有全局作用域

全局作用域有很大的弊端，过多的全局作用域变量会污染全局命名空间，容易引起命名冲突。

**函数作用域**

在函数内部定义的变量(`局部变量`)，拥有`函数作用域`

只有函数被调用的时候才会形成`函数作用域`

内层作用域可以访问外层作用域，反之不行

**块级作用域**

使用 ES6 中新增的 let 和 const 指令可以声明`块级作用域`

块作用域内的变量只要出了自己被定义的那个代码块，那么就无法访问了。

在循环中比较适合绑定块级作用域，这样就可以把声明的计数器变量限制在循环内部。

**自由变量**

**一个变量**在当前作用域没有定义，但被使用了；向上级作用域，一层一层依次寻找，直至找到为止；如果到全局作用域都没找到，则报错 xx is not defined

**作用域链**

在当前作用域中查找所需变量，但是该作用域没有这个变量，那这个变量就是**自由变量**。如果在自己作用域找不到该变量就去**父级作用域查找**，依次向上级作用域查找，**直到访问到 window 对象就被终止**，这一层层的关系就是`作用域链`。

### 什么是闭包？闭包会用在哪里？

[破解前端面试（80% 应聘者不及格系列）：从闭包说起](https://juejin.cn/post/6844903474212143117)

在函数中被使用，但它既不是函数参数、也不是函数的局部变量，而是一个不属于当前作用域的变量，此时它相对于当前作用域来说，就是一个自由变量。而引用了`自由变量`的函数，就叫`闭包`

闭包有两个常用的用途：

- 闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量，可以使用这种方法来**创建私有变量**如：

```js
function createCache() {
  const data = {}
  return {
    get: function (key) {
      return data[key]
    },
    set: function (key, val) {
      data[key] = val
    },
  }
}
const c = createCache()
c.set('a', 100)
console.log(c.get('a'))
```

- 闭包的另一个用途是使已经运行结束的函数上下文中的变量对象(`每个上下文都有一个关联的变量对象，而这个上下文中定义的所有变量和函数都存在于这个对象上`)继续留在内存中，因为闭包函数保留了这个变量对象的引用，**所以这个变量对象不会被回收**

`🌟闭包经典面试题`：

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
```

首先因为 setTimeout 是异步的，所以会先把循环全部执行完毕，这时候 i 就是 6 了，所以会输出一堆 6。那如果我们要正确输出 1 ～ 6,该如何处理呢？解决办法有三种：

- 第一种是使用闭包的方式

```js
for (var i = 1; i <= 5; i++) {
  ;(function (j) {
    setTimeout(function timer() {
      console.log(j)
    }, j * 1000)
  })(i)
}
```

在上述代码中，首先使用了立即执行函数将 i 传入函数内部，这个时候值就被固定在了参数 j 上面不会改变，当下次执行 timer 这个闭包的时候，就可以使用外部函数的变量 j，从而达到目的

- 第二种就是使用 setTimeout 的第三个参数，这个参数会被当成 timer 函数的参数传入。

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(
    function timer(j) {
      console.log(j)
    },
    i * 1000,
    i
  )
}
```

- 第三种就是使用 let 定义 i 了来解决问题了，这个也是最为推荐的方式

```js
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
```

### this 有几种赋值情况

**this 取什么值函数执行时确认的，不是在函数定义时确认的**

- 作为普通函数使用

- call apply bind

- 作为对象方法被调用

![作为对象方法被调用](https://zfh-oss.oss-cn-shanghai.aliyuncs.com/blog-images/%E4%BD%9C%E4%B8%BA%E5%AF%B9%E8%B1%A1%E6%96%B9%E6%B3%95%E8%A2%AB%E8%B0%83%E7%94%A8.png)

- 在 class 方法中调用

- **箭头函数的`this`永远取它上层作用域的`this`**

- 原型中的 this

[前端面试之彻底搞懂 this 指向](https://mp.weixin.qq.com/s/hYm0JgBI25grNG_2sCRlTA)

### 手写 bind 函数

::: tip 提示
bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
:::

bind 的用法

```js
function fn1(a, b, c) {
  console.log('this', this)
  console.log(a, b, c)
  return 'this is fn1'
}
const fn2 = fn1.bind({ x: 100 }, 10, 20, 30)
const res = fn2()
console.log(res)
```

手写 bind

```js
    Function.prototype.bind1=function(context,...args){
    const self = this
    return function (){
        return self.apply(context,args)
    }
```

### 创建 10 个 a,点击弹出序号

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript">
      const root = document.getElementById('root')
      for (let i = 1; i <= 10; i++) {
        const a = document.createElement('a')
        a.innerText = i
        a.style.display = 'block'
        root.appendChild(a)
      }
      root.onclick = function (e) {
        alert(e.target.innerText)
      }
    </script>
  </body>
</html>
```

## 异步

### 异步和同步的区别？

基于 JS 是单线程语言，异步不会阻塞代码执行，同步会阻塞代码执行

### 手写 promise 加载图片

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>promise加载图片</title>
  </head>

  <body>
    <div id="root"></div>
    <script type="text/javascript">
      const URL = 'https://zfhblog.top/titlelogo.png'
      const root = document.getElementById('root')

      function loadImg(url) {
        return new Promise((resolve, reject) => {
          const img = document.createElement('img')
          // 加载完
          img.onload = () => {
            resolve(img)
          }
          // 加载失败
          img.onerror = () => {
            const err = new Error(`图片加载失败了,图片地址为${url}`)
            reject(err)
          }
          img.src = url
        })
      }
      loadImg(URL)
        .then(img => {
          root.appendChild(img)
          console.log('我第二个执行then')
        })
        .catch(err => {
          console.log(err)
        })
      console.log('我第一个执行，同步代码')
      setTimeout(() => {
        console.log('我第三个执行setTimeout')
      }, 0)
    </script>
  </body>
</html>
```

### setTimeout

```js
console.log(1)
setTimeout(function () {
  console.log(2)
}, 1000)
console.log(3)
setTimeout(function () {
  console.log(4)
}, 0)
console.log(5)
```

`输出结果`: 1 , 3 , 5 , 4 , 2

### 下面代码的输出结果是（async 函数）？

```js
async function getData() {
  return await Promise.resolve('I made it!')
}
const data = getData()
console.log(data)
```

异步函数始终返回一个 promise. await 仍然需要等待 promise 的解决：当我们调用 getData（）并将其赋值给 data，此时 data 为 getData 方法返回的一个`挂起的 promise`，该 promise 并没有解决。
如果我们想要访问已解决的值 ' I made it！'，可以在 data 上使用 then（）方法：

```js
data.then(res => console.log(res))
```

## JS-Web-API-DOM

### DOM 是那种数据结构？---树

### DOM 操作常见的 API

- DOM 节点操作

- DOM 结构操作

### property 和 attribute 的区别

- property : 修改对象属性，不会体现到 html 结构中

- attribute : 修改 html 属性，会改变 html 结构

两者都有可能引起 DOM 重新渲染

### 如何优化 DOM 性能的性能

DOM 查询做缓存

![DOM查询做缓存](https://zfh-oss.oss-cn-shanghai.aliyuncs.com/blog-images/DOM%E6%9F%A5%E8%AF%A2%E5%81%9A%E7%BC%93%E5%AD%98.png)

将频繁操作改为一次性操作(一次性插入多个节点，考虑性能)

![将频繁操作改为一次性操作](https://zfh-oss.oss-cn-shanghai.aliyuncs.com/blog-images/%E5%B0%86%E9%A2%91%E7%B9%81%E6%93%8D%E4%BD%9C%E6%94%B9%E4%B8%BA%E4%B8%80%E6%AC%A1%E6%80%A7%E6%93%8D%E4%BD%9C.png)

## JS-Web-API-事件

### 编写一个通用的事件监听函数

::: tip Element.matches()

**如果元素被指定的选择器字符串选择，Element.matches()方法返回 true; 否则返回 false。**

语法：`let result = element.matches(selectorString)`

- result 的值为 true 或 false.
- selectorString 是个 css 选择器字符串.

:::

```js
function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }
  elem.addEventListener(type, event => {
    const target = event.target
    if (selector) {
      // 代理绑定
      if (target.matches(selector)) {
        fn.call(target, event)
      }
    } else {
      // 普通绑定
      fn.call(target, event)
    }
  })
}

// 普通绑定
const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', function (event) {
  // console.log(event.target) // 获取触发的元素
  event.preventDefault() // 阻止默认行为
  alert(this.innerHTML)
})

// 代理绑定
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', 'a', function (event) {
  event.preventDefault()
  alert(this.innerHTML)
})
```

### 描述事件冒泡的流程

- 基于 DOM 树形结构

- 事件会顺着触发元素向上冒泡

- 应用场景：代理(**_利用事件冒泡机制，将后代元素事件代理(事件委托)给祖先元素_**)=>`event.target`

### 无限下拉的图片列表，如何监听每个图片的点击

- 事件代理

- 用 e.target 获取触发元素

- 用 matches 来判断是否是触发元素

## ES6

### 说说 var、let、const 之间的区别？

- 变量提升: var 会提升的变量的声明到当前作用域的顶部 let const 不会

- 暂时性死区：在代码块内，使用 let、const 命令声明变量或常量之前，该变量或常量都是不可用的。这在语法上，称为“`暂时性死区`”

- 块级作用域：var 没有块级作用域，let const 有块级作用域

- 重复声明： var 允许重复声明，let,const 不允许不允许在相同作用域内，重复声明同一个变量。

- 修改声明的变量： var 和 let 可以修改;const 声明一个只读的常量，并且 const 声明时，必须立即初始化

- window 对象的属性和方法:全局作用域中，`var声明的变量和通过function声明的函数`，会自动变成
  window 对象的属性或方法，**let、 const 不会**。

### 箭头函数和普通函数的区别？

::: danger 不懂的点
`yield命令`,`Generator函数`
:::

- 箭头函数没有 prototype (原型)，所以箭头函数本身没有 this​​​​​​​

```js
// 箭头函数
let a = () => {}
console.log(a.prototype) // undefined

// 普通函数
function a() {}
console.log(a.prototype) // {constructor:f}
```

- 箭头函数不会创建自己的 this

箭头函数没有自己的 this，箭头函数的 this 指向在定义（注意：是定义时，不是调用时）的时候继承自外层第一个普通函数的 this。所以，箭头函数中 this 的指向在它被定义的时候就已经确定了，之后永远不会改变。

```js
let obj = {
  a: 10,
  b: () => {
    console.log(this.a) // undefined
    console.log(this) // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
  },
  c: function () {
    console.log(this.a) // 10
    console.log(this) // {a: 10, b: ƒ, c: ƒ}
  },
}
obj.b()
obj.c()
```

- call | apply | bind 无法改变箭头函数中 this 的指向

call | apply | bind 方法可以用来动态修改函数执行时 this 的指向，但由于箭头函数的 this 定义时就已经确定且永远不会改变。所以使用这些方法永远也改变不了箭头函数 this 的指向。

```js
var id = 10
let fun = () => {
  console.log(this.id)
}
fun() // 10
fun.call({ id: 20 }) // 10
fun.apply({ id: 20 }) // 10
fun.bind({ id: 20 })() // 10
```

- 箭头函数不能作为构造函数使用

我们先了解一下构造函数的 new 都做了些什么？简单来说，分为四步： ① JS 内部首先会先生成一个对象； ② 再把函数中的 this 指向该对象； ③ 然后执行构造函数中的语句； ④ 最终返回该对象实例。但是！！因为箭头函数没有自己的 this，它的 this 其实是继承了外层执行环境中的 this，且 this 指向永远不会随在哪里调用、被谁调用而改变，所以箭头函数不能作为构造函数使用，或者说构造函数不能定义成箭头函数，否则用 new 调用时会报错！

```js
let Fun = (name, age) => {
  this.name = name
  this.age = age
}
// 报错
let p = new Fun('dingFY', 24)
```

- 箭头函数不绑定 arguments，**取而代之用 rest 参数**...代替 arguments 对象，来访问箭头函数的参数列表

箭头函数没有自己的 arguments 对象。在箭头函数中访问 arguments 实际上获得的是外层局部（函数）执行环境中的值。

```js
// 普通函数
function A(a) {
  console.log(arguments)
}
A(1, 2, 3, 4, 5, 8) //  [1, 2, 3, 4, 5, 8, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// 箭头函数
let B = b => {
  console.log(arguments)
}
B(2, 92, 32, 32) // Uncaught ReferenceError: arguments is not defined

// rest参数...
let C = (...c) => {
  console.log(c)
}
C(3, 82, 32, 11323) // [3, 82, 32, 11323]
```

- 箭头函数不能用作 Generator 函数，不能使用 yield 关键字

### 不适用箭头函数的场景?

作为构造函数：因为箭头函数没有 this

需要 this 指向调用对象的时候：如事件处理函数

需要使用 arguments 的时候

## Map 与 WeakMap 的区别与使用

[WeakMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

[WeakSet](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)

1、WeakMap**只接受对象作为 key**，如果设置其他类型的数据作为 key，会**报错**。

2、WeakMap 的 key 所引用的对象都是**弱引用**，**只要对象的其他引用被删除，垃圾回收机制就会释放该对象占用的内存，从而避免内存泄漏。**

3、由于 WeakMap 的成员**随时可能被垃圾回收机制回收**，成员的数量不稳定，**所以没有 size 属性**。

4、**没有**`clear()`方法

5、**不能遍历**

## 输出题&脑瘫题

### 如何让 a==1 && a==2 && a==3 为 true

::: tip 参考

[「前端面试题」(a ==1 && a== 2 && a==3) 有可能是 true 吗？](https://blog.csdn.net/m0_37890289/article/details/109472696)

:::

涉及考点：`隐式类型转换`

1.重写默认属性方法

```js
let a = {
  i: 1,
  toString: function () {
    return this.i++
  },
}
console.log(a == 1 && a == 2 && a == 3)
// valueOf
let b = {
  i: 1,
  valueOf: function () {
    return this.i++
  },
}
console.log(b == 1 && b == 2 && b == 3)
// [Symbol.toPrimitive]
let c = {
  i: 1,
  [Symbol.toPrimitive]: function () {
    return this.i++
  },
}
console.log(c == 1 && c == 2 && c == 3)
```

三个方法的`优先级`： **Symbol.toPrimitive > valueOf > toString**

2. 数据劫持

```js
let tmp = 1
Object.defineProperty(window, 'a', {
  get: function () {
    return tmp++
  },
})
console.log(a === 1 && a === 2 && a === 3)
```

3. es6 proxy

```js
let a = new Proxy(
  {},
  {
    tmp: 1,
    get(target, key) {
      return () => this.tmp++
    },
  }
)
console.log(a == 1 && a == 2 && a == 3)
```

4. 重写 Number 对象的 valueOf

```js
Number.prototype.valueOf = (function () {
  let i = 1
  return () => {
    return i++
  }
})()
let a = new Number(1)
console.log(a == 1 && a == 2 && a == 3)
```

### ['1','2','3'].map(parseInt)会输出什么？

::: tip 参考
[['1','2','3'].map(parseInt)](https://www.cnblogs.com/sinosaurus/p/13215052.html)
[[‘1‘,‘2‘,‘3‘].map(parseInt)结果讲解](https://blog.csdn.net/weixin_44135121/article/details/88050214)
:::

::: details 答案
`[ 1, NaN, NaN ]`
:::

1. map 函数

`['1','2','3'].map(parseInt)`可以看作：

```js
['1', '2', '3'].map(function (value, index) {
	return parseInt(value, index)
})
// 细节
index = 0: parsetInt('1', 0) = 1
index = 1: parsetInt('2', 1) = NaN
index = 2: parsetInt('3', 2) = NaN // 因为 2进制必须是 0，1数字表示
```

将数组的每个元素传递给指定的函数处理，并返回处理后的数组，所以 ['1','2','3'].map(parseInt) 就是将字符串 1，2，3 作为元素；0，1，2 作为下标分别调用 parseInt 函数。即分别求出 parseInt('1',0), parseInt('2',1), parseInt('3',2)的结果。

2. parseInt 函数（重点）

概念：以第二个参数为基数来解析第一个参数字符串，通常用来做十进制的向上取整（省略小数）如：parseInt(2.7) //结果为 2

特点：接收两个参数 parseInt(string,radix)

string：字母（大小写均可）、数组、特殊字符（不可放在开头,特殊字符及特殊字符后面的内容不做解析）的任意字符串，如 '2'、'2w'、'2!'

radix：解析字符串的基数，基数规则如下：

1） 区间范围介于 2~36 之间；

2） 当参数为 0，parseInt() 会根据十进制来解析；

3） 如果忽略该参数，默认的基数规则：

- 如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数；parseInt("0xf") //15

- 如果 string 以 0 开头，其后的字符解析为八进制或十六进制的数字；parseInt("08") //8

- 如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数；parseInt("88.99f") //88

- 只有字符串中的第一个数字会被返回。parseInt("10.33") //返回 10；

- 开头和结尾的空格是允许的。parseInt(" 69 10 ") //返回 69

- 如果字符串的第一个字符不能被转换为数字，返回 NaN。parseInt("f") //返回 NaN 而 parseInt("f"，16) //返回 15

3. 再来分析一下结果

`['1','2','3'].map(parseInt)`即:

parseInt('1',0);radix 为 0，parseInt() 会根据十进制来解析，所以结果为 1；

parseInt('2',1);radix 为 1，超出区间范围，所以结果为 NaN；

parseInt('3',2);radix 为 2，用 2 进制来解析，应以 0 和 1 开头，所以结果为 NaN。

4. parseInt 方法解析的运算过程

parseInt('101.55',10); //以十进制解析，运算过程：向上取整数(不做四舍五入，省略小数)，结果为 101。

parseInt('101',2); //以二进制解析，运算过程：1*2 的 2 次方+0*2 的 1 次方+1\*2 的 0 次方=4+0+1=5，结果为 5。

parseInt('101',8); //以八进制解析，运算过程：1*8 的 2 次方+0*8 的 1 次方+1\*8 的 0 次方=64+0+1=65，结果为 65。

parseInt('101',16); //以十六进制解析，运算过程：1*16 的 2 次方+0*16 的 1 次方+1\*16 的 0 次方=256+0+1=257，结果为 257。

::: tip 扩展
map 和 forEach
[数组中 forEach() 和 map() 的区别](https://blog.csdn.net/weixin_46837985/article/details/112211133)
:::

## JS 原理&机制

### 说一下 js 的垃圾回收机制

[「硬核 JS」你真的了解垃圾回收机制吗](https://juejin.cn/post/6981588276356317214)

javaScript 具有自动垃圾收集机制

`标记清除`,主流的垃圾收集算法，给不使用的值加上标记，然后回收其内存。

`引用计数`，这种算法是跟踪记录所有值被引用的次数，不在使用这种算法。(存在**循环引用**的问题)

::: tip 循环引用

```js
function test() {
  let A = new Object() // 1
  let B = new Object() // 1

  A.b = B // 2
  B.a = A // 2
}
```

如上所示，**对象 A 和 B 通过各自的属性相互引用着，按照上文的引用计数策略，它们的引用数量都是 2，但是，在函数 test 执行完成之后，对象 A 和 B 是要被清理的，但使用引用计数则不会被清理，因为它们的引用数量不会变成 0，假如此函数在程序中被多次调用，那么就会造成大量的内存不会被释放**

我们再用`标记清除`的角度看一下，**当函数结束后，两个对象都不在作用域中，A 和 B 都会被当作非活动对象来清除掉，相比之下，引用计数则不会释放，也就会造成大量无用内存占用，这也是后来放弃引用计数，使用标记清除的原因之一**
:::

### new 的原理？

- new 的工作流程：

1）在内存中创建一个新对象

2）将新对象与构造函数**通过原型链**连接起来

3）将构造函数中的**this 绑定**到新对象上

4）执行构造函数内部的代码

5）如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象

- 手写 new

```js
function myNew(Func, ...args) {
  // 1.创建一个新对象
  const obj = {}
  // 2.新对象原型指向构造函数原型对象
  obj.__proto__ = Func.prototype
  // 3.将构建函数的this指向新对象
  let result = Func.apply(obj, args)
  // 4.根据返回值判断
  return result instanceof Object ? result : obj
}

function foo(age, name) {
  this.name = name
  this.age = age
}

const obj = myNew(foo, 14, 'frank')
console.log(obj)
```
