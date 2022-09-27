---
title: TS进阶
---

## 类型别名

类型别名用来给一个类型起个新名字。

```typescript
type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}
```

上例中，我们使用 `type` 创建类型别名。

类型别名常用于联合类型。

### 类型别名与接口的区别

#### 相同点

都可以描述一个对象或者函数：

interface

```typescript
interface User {
  name: string
  age: number
}

interface SetUser {
  (name: string, age: number): void
}
```

type

```ts
type User = {
  name: string
  age: number
}

type SetUser = (name: string, age: number) => void
```

都允许拓展（extends）：

terface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 **虽然效果差不多，但是两者语法不同**。

interface extends interface

```ts
interface Name {
  name: string
}
interface User extends Name {
  age: number
}
```

type extends type

```ts
type Name = {
  name: string
}
type User = Name & { age: number }
```

interface extends type

```ts
type Name = {
  name: string
}
interface User extends Name {
  age: number
}
```

type extends interface

```ts
interface Name {
  name: string
}
type User = Name & {
  age: number
}
```

#### 不同点

type 可以而 interface 不行：

- type 可以声明基本类型别名，联合类型，元组等类型

```ts
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
  wong()
}
interface Cat {
  miao()
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]
```

- type 语句中还可以使用 typeof 获取实例的 类型进行赋值

```ts
// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div')
type B = typeof div
```

interface 可以而 type 不行：

interface 能够声明合并

```ts
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string 
}
*/
```

用 interface 描述**数据结构**，用 type 描述**类型关系**

## 类型保护

[typescript-typeguard](https://www.wenjiangs.com/doc/typescript-typeguard)

is 是 TypeScript 中的一个关键字，一般用于函数返回值类型中，判断参数是否属于某一类型，并根据结果返回对应的布尔类型

```ts
type Square = {
  size: number
}
type Rectangle = {
  width: number
  height: number
}

function isSquare(shape: Shape): shape is Square {
  return 'size' in shape
}

function isRectangle(shape: Shape): shape is Rectangle {
  return 'width' in shape
}

type Shape = Square | Rectangle

function area(shape: Shape) {
  if (isSquare(shape)) return shape.size * shape.size
  if (isRectangle(shape)) return shape.width * shape.height
}
```

## 函数重载

[TS 中几种函数重载](https://www.jianshu.com/p/98a4291d7ff4)

重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。

比如，我们需要实现一个函数 `reverse`，输入数字 `123` 的时候，输出反转的数字 `321`，输入字符串 `'hello'` 的时候，输出反转的字符串 `'olleh'`。

利用联合类型，我们可以这么实现：

```ts
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}
```

**然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。**

这时，我们可以使用重载定义多个 `reverse` 的函数类型：

```ts
function reverse(x: number): number // 重载签名
function reverse(x: string): string // 重载签名
function reverse(x: number | string): number | string | void {
  // 实现签名
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('')
  }
}
```

上例中，我们重复定义了多次函数 `reverse`，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。

注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。

## 方法重载

下面来实现一个方法重载 以 ArrayList 为例,可以查看数据,可以删除数据,删除可以通过 id 或者对象删除可以获取数据

```ts
class ArrayList {
  constructor(public element: object[]) {}
  /**
   * 获取某一个值
   * @param index
   * @returns
   */
  get(index: number) {
    return this.element[index]
  }
  // 显示值
  show() {
    this.element.forEach(i => console.log(i))
  }

  remove(val: number): number
  remove(val: Object): Object // 实现删除方法重载

  remove(val: number | Object) {
    this.element = this.element.filter((e, index) => {
      if (typeof val === 'number') {
        return val !== index
      } else {
        return val !== e
      }
    })
    return val
  }
}
let a = { name: 'zixia', age: 12 },
  b = { name: 'selfsummer', age: 88 },
  c = { name: '自夏', age: 18 }

let newAr = new ArrayList([a, b, c])

newAr.remove(1)
newAr.remove(c)
console.log(newAr)
```

## 构造器重载

```ts
// 类型别名
type TypeWowen = {
  name: string
  age: number
}

class Wowen {
  name: string
  age: number
  constructor(age: number, name?: string)
  constructor(paramObj: TypeWowen)
  constructor(paramObj: any, name = '未知') {
    if (typeof paramObj === 'object') {
      const { name, age } = paramObj
      this.name = name
      this.age = age
    } else {
      this.age = paramObj
      this.name = name
    }
  }
}
const w1 = new Wowen({ name: 'frank', age: 123 })
const w2 = new Wowen(123, 'frank')
// const w3 = new Wowen({ name: 'frank', age: 123 }, 123)

console.log(w1)
console.log(w2)
console.log(w3)
```

## 调用签名

### 函数类型表达式

最简单描述一个函数的方式是使用**函数类型表达式（function type expression）。**它的写法有点类似于箭头函数：

```typescript
function greeter(fn: (a: string) => void) {
  fn('Hello, World')
}

function printToConsole(s: string) {
  console.log(s)
}

greeter(printToConsole)
```

语法 `(a: string) => void` 表示一个函数有一个名为 `a` ，类型是字符串的参数，这个函数并没有返回任何值。

如果一个函数参数的类型并没有明确给出，它会被隐式设置为 `any`。

当然了，我们也可以使用类型别名 定义一个函数类型：

```typescript
type GreetFunction = (a: string) => void
function greeter(fn: GreetFunction) {
  // ...
}
```

在 JavaScript 中，函数除了可以被调用，自己也是可以有属性值的。然而函数类型表达式并不能支持声明属性，如果我们想描述一个带有属性的函数，我们可以在一个对象类型中写一个调用签名（call signature）

```typescript
type DescribableFunction = {
  description: string
  (someArg: number): boolean
}
const fn: DescribableFunction = someArg => {
  return someArg > 0
}

fn.description = '是否大于0'

function doSomething(fn: DescribableFunction) {
  console.log(`${fn.description},returned:${fn(6)}`)
}

doSomething(fn)
```

注意这个语法跟函数类型表达式稍有不同，在参数列表和返回的类型之间用的是 `:` 而不是 `=>`。

## 构造签名

JavaScript 函数也可以使用 `new` 操作符调用，当被调用的时候，TypeScript 会认为这是一个构造函数( constructors (构造函数) )，因为他们会产生一个新对象。你可以写一个构造签名，方法是在调用签名前面加一个 `new` 关键词：

```ts
type SomeConstructor = {
  new (s: string): SomeObject
}
function fn(ctor: SomeConstructor) {
  return new ctor('hello')
}
```

## 索引签名

有的时候，你不能提前知道一个类型里的所有属性的名字，但是你知道这些值的特征。

这种情况，你就可以用一个索引签名 (index signature) 来描述可能的值的类型，举个例子：

```typescript
interface StringArray {
  [index: number]: string
}

const myArray: StringArray = getStringArray()
const secondItem = myArray[1] // const secondItem: string
```

这样，我们就有了一个具有索引签名的接口 `StringArray`，这个索引签名表示当一个 `StringArray` 类型的值使用 `number` 类型的值进行索引的时候，会返回一个 `string`类型的值。

## 双重断言

利用双重断言可以完成一些不可能的类型转换，虽然没什么卵用

```ts
let x = '123' as any as number // x:number
```

## 常量断言

常量断言，可以用于断言任何一个类型：

```ts
const frank = {
  age: 22,
  hobby: 'js',
} as const

interface Isetting {
  align: 'center' | 'left' | 'right'
  padding: number
}

function layout(setting: Isetting) {
  console.log('Layout', setting)
}

const paramer = {
  align: 'left' as const,
  padding: 0,
}
layout(paramer)
```

在大部分的代码中，元组只是被创建，使用完后也不会被修改，所以尽可能的将元组设置为 `readonly` 是一个好习惯。

```ts
let t1: readonly [string, number] = ['123', 123]
```

## typeof 操作符

TypeScript 添加的 `typeof` 方法可以在类型上下文（type context）中使用，用于获取一个变量或者属性的类型

```typescript
let s = 'hello'
let n: typeof s
// let n: string
```

## keyof 操作符

对一个对象类型使用 `keyof` 操作符，会返回该对象属性名组成的一个字符串或者数字字面量的联合。这个例子中的类型 P 就等同于 "x" | "y"：

```typescript
type Point = { x: number; y: number }
type P = keyof Point
```

## 类型查找

我们可以使用**类型查找** 查找另外一个类型上的特定属性：

```typescript
type Person = { age: number; name: string; alive: boolean }
type Age = Person['age']
// type Age = number
```

复制代码

因为索引名本身就是一个类型，所以我们也可以使用联合、`keyof` 或者其他类型：

```typescript
type I1 = Person['age' | 'name']
// type I1 = string | number

type I2 = Person[keyof Person]
// type I2 = string | number | boolean

type AliveOrName = 'alive' | 'name'
type I3 = Person[AliveOrName]
// type I3 = string | boolean
```

## 类型映射

有的时候，一个类型需要基于另外一个类型，但是你又不想拷贝一份，这个时候可以考虑使用映射类型。

```ts
type Point2D = {
  x: number
  y: number
}

type Point3D = {
  [key in keyof Point2D]: number
} & {
  z: number
}

let p2: Point3D = { x: 1, y: 2, z: 3 }
```

## 映射修饰符

在使用类型映射时，有两个额外的修饰符可能会用到，一个是 `readonly`，用于设置属性只读，一个是 `?` ，用于设置属性可选。

你可以通过前缀 `-` 或者 `+` 删除或者添加这些修饰符，如果没有写前缀，相当于使用了 `+` 前缀。

```typescript
// 删除属性中的只读属性
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property]
}

type LockedAccount = {
  readonly id: string
  readonly name: string
}

type UnlockedAccount = CreateMutable<LockedAccount>

// type UnlockedAccount = {
//    id: string;
//    name: string;
// }
```

```typescript
// 删除属性中的可选属性
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property]
}

type MaybeUser = {
  id: string
  name?: string
  age?: number
}

type User = Concrete<MaybeUser>
// type User = {
//    id: string;
//    name: string;
//    age: number;
// }
```
