---
title: Three开发入门与调试设置
tags:
  - 2022/09/13 17:29:19
  - Three入门
  - 调试
---

# Three 开发入门与调试设置

## 创建第一个场景

一个场景能被渲染出来需要：场景、相机和渲染器

```js
import * as THREE from 'three'
// 1、创建场景
const scene = new THREE.Scene()

// 2、创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

// 设置相机位置
camera.position.set(0, 0, 10)
scene.add(camera)

// 添加物体
// 创建几何体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
// 将几何体添加到场景中
scene.add(cube)

// 初始化渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)

// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement)

// 使用渲染器，通过相机将场景渲染进来
renderer.render(scene, camera)
```

### 透视相机（PerspectiveCamera）示意图

这一投影模式被用来模拟人眼所看到的景象，它是3D场景的渲染中使用得最普遍的投影模式。

![透视相机示意图](https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/%E9%80%8F%E8%A7%86%E7%9B%B8%E6%9C%BA%E7%A4%BA%E6%84%8F%E5%9B%BE.png)

1. 摄像机视锥体垂直视野角度 也就是图中的**「a」**

2. 摄像机视锥体近端面 也就是图中的 **「near plane」**

3. 摄像机视锥体远端面 也就是图中的**「far plane」**

4. 摄像机视锥体长宽比 **「表示输出图像的宽和高之比」**

5. 对应的 three 中的照相机：

6. ```js
   const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
   ```

### 轨道控制器查看物体

轨道控制器：`new OrbitControls( object : Camera, domElement : HTMLDOMElement )`

- 参数 1:`object`: 将要被控制的相机
- 参数 2:`domElement`: 用于事件监听的 `HTML `元素

```js
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// 1、创建场景
const scene = new THREE.Scene()

// 2、创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

// 设置相机位置
camera.position.set(0, 0, 10)
scene.add(camera)

// 添加物体
// 创建几何体
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
// 根据几何体和材质创建物体
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
// 将几何体添加到场景中
scene.add(cube)

// 初始化渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)
// console.log(renderer);

// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement)

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)

function render() {
  renderer.render(scene, camera)
  //   渲染下一帧的时候就会调用render函数
  requestAnimationFrame(render)
}

render()
```

### 关于坐标系

WebGL 和 Three.js 使用的坐标系是右手坐标系，即右手伸开，拇指为 X，四指为 Y，手心为 Z。

![threejs坐标系](https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/threejs%E5%9D%90%E6%A0%87%E7%B3%BB.jpeg)

### requestAnimationFrame

[`window.requestAnimationFrame()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。在大多数遵循 W3C 建议的浏览器中，回调函数执行次数通常与浏览器屏幕刷新次数相匹配。

### 添加坐标轴辅助器

```js
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)
```

![坐标轴辅助器](https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/%E5%9D%90%E6%A0%87%E8%BD%B4%E8%BE%85%E5%8A%A9%E5%99%A8.gif)

红色代表 X 轴. 绿色代表 Y 轴. 蓝色代表 Z 轴

## 设置物体移动

```js
function render() {
  cube.position.x += 0.01
  if (cube.position.x > 5) {
    cube.position.x = 0
  }
  renderer.render(scene, camera)
  //   渲染下一帧的时候就会调用render函数
  requestAnimationFrame(render)
}
```

打印之前创建的物体`cube`其属性`positon`为一个三维向量对象，通过`set`进行设置，当然也可以通过更改对象属性值更改物体的位置

## 物体的缩放与旋转

`scale`缩放;`rotation`旋转两者使用和位置差不多,通过`set`进行设置，当然也可以通过更改对象属性值更改物体的位置

旋转有第四个参数代表表示旋转顺序的字符串，默认为`"XYZ"`
