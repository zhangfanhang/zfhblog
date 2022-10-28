---
title: TS基础
tags:
  - TypeScript
category:
  - 前端进阶
  - TypeScript
---

<center>

![ts](https://www.runoob.com/wp-content/uploads/2019/01/typescript-logo.jpg)

</center>

## TypeScript Environment

1. 安装 ts:`npm i -g typescript`,编译 ts: `tsc xxx.ts`,得到 js 文件执行

2. 直接使用 `ts-node` 运行 ts 文件:

   - `npm i ts-node -g`
   - `npm i typescript -g`
   - `ts-node xxx.ts`

## TypeScript type

### boolean

```ts
const bool1 = true
const bool2: boolean = false
```

### number

```ts
const num1: number = 1
const num2 = 2
```

### string

```ts
const str1 = 'frank'
const str2: string = 'frank'
const str3 = `我叫${str2}`
```

### array

数组的几种声明方式：

```js
let list1: number[] = [1, 2, 3, 4]
let list2 = [1, 2, 3, '4']
let list3: Array<number> = [1, 2, 3, 4] // 泛型
let list4: any[] = [1, 'ddd', { a: 1 }, [1, 2, 3]]
```

### tuple

元组类型是另一种类型 Array，它确切地知道它包含多少个元素，以及它在特定位置包含哪些类型（官方文档元组定义翻译）

```ts
let person: [number, string] = [1, '123']

console.log(person)
```

当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型:

```ts
let tom: [string, number]
tom = ['Tom', 25]
tom.push('male')
tom.push(true)
// Argument of type 'true' is not assignable to parameter of type 'string | number'.
```

### union

联合类型 `Union Types` 表示取值可以为多种类型中的一种

联合类型使用 `|`分隔每个类型

```ts
let union1: number | string
union1 = 123
union1 = '456'

let union2: number | string | string[] | boolean

let union3: 1 | 2 | 3
```

### literal

字面量 `Literal` 类型的**特定数据**就是 它自己的类型

```ts
const num = 1
// 与联合类型结合
let nums: 1 | 2 | 3
nums = 2
nums = 4 // 报错 nums只能是 1,2,3 中的其中一个
```

### enum

使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript 支持数字的和基于字符串的枚举。

```ts
enum Color {
  red,
  green,
  blue,
}
console.log(Color.red) // 2
// 给枚举项手动赋值
enum Color2 {
  red = 5,
  green,
  blue,
}
console.log(Color2.red) // 7
enum Color3 {
  red = 'red',
  green = 'green',
  blue = 'blue',
}
console.log(Color3.red) // 'red'
```

结合 `switch` 语句使用

```ts
// 使用枚举
enum Sex {
  MALE,
  FEMALE,
  UNKNOWN,
}

let member_sex: number = Sex.FEMALE

switch (member_sex) {
  case Sex.MALE:
    console.log('男')
    break
  case Sex.FEMALE:
    console.log('女')
    break
  case Sex.UNKNOWN:
    console.log('未知')
    break
  default:
    break
}
```

### any

任意值 `Any` 用来表示允许赋值为任意类型

```ts
let result: any = 555
result = { a: 1 }
result = []
result = false
```

### unknown

`unknown` 不保证类型，但保证类型安全(类型安全的 `any`)，只有确定了变量类型以后，才能正常使用

```ts
let res: unknown = 123
res = function () {
  console.log('res')
}
if (typeof res === 'function') {
  res()
}
res = 123
if (typeof res === 'number') {
  console.log(res++)
}
```

### void

::: tip void 和 undefined
`void` 代表变量本身就不存在，`undefined`代表应该此处应该有一个变量，但是没有没有定义
:::

在 `TypeScript` 中，可以用 `void` 表示没有任何返回值的函数:

```js
function printRes(): void {
  console.log('string')
}

function printRes2(): undefined {
  console.log('string')
  return
}
```

### never <Badge text='不常用' type="warning"/>

一个函数永远执行不完，这就是 `never` 的本质

```js
function throwErr(mes: string, errCode: number): never {
  throw {
    mes,
    errCode,
  }
}
console.log(throwErr('not fonund', 404))

function whileLoop(): never {
  while (true) {
    console.log('1')
  }
}
```

### function

[ts 函数，可选参数，默认参数，剩余参数](https://blog.csdn.net/weixin_43131046/article/details/121696924)

::: warning 注意

- 默认参数和可选参数无法同时使用

- 三种参数都应定义在参数列表的末尾

:::

```ts
// 可选参数
function fun(a: number, b?: number) {
  console.log(a, b) // 1 undefined
}

fun(1)
// 默认参数
function fun2(a: number = 1, b: number = 2) {
  console.log(a + b) //3
}

fun2(1)
// 剩余参数
function fun3(a: number, b: number, ...c: number[]) {
  console.log(a + b + c.reduce((pre, cur) => pre + cur)) //16
}

fun3(1, 2, 3, 4, 6)
```

## Type Assertions

类型断言`Type Assertions`可以用来手动指定一个值的类型。

```ts
let x: any
x = '123' // 仍然是any类型
let s1 = (<string>x).charAt(1) //  1
let s2 = (x as string).charAt(2) // 2
```

## Type Inference

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

以下代码虽然没有指定类型，但是会在编译的时候报错：

```js
let myFavoriteNumber = 'seven'
myFavoriteNumber = 7
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

事实上，它等价于：

```ts
let myFavoriteNumber: string = 'seven'
myFavoriteNumber = 7

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：

```ts
let myFavoriteNumber
myFavoriteNumber = 'seven'
myFavoriteNumber = 7
```
