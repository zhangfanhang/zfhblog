---
title: Threejs物体
tag:
  - Threejs
category:
  - 前端开发
  - 前端图形
---

## 几何体顶点

attributes.position 代表顶点的位置

控制台输出物体的 attributes.position 属性发现一个四面体有 24 个顶点

四面体不是只有 8 个顶点吗？

在 threejs 中顶点代表的是组成一个面的两个三角形的顶点，一个三角形有 3 个顶点，所以一个面有 6 个顶点

```js
const geometry = new THREE.BufferGeometry()
// 创建一个简单的矩形. 在这里我们左上和右下顶点被复制了两次。
// 因为在两个三角面片里，这两个顶点都需要被用到。
const vertices = new Float32Array([
  -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0,

  1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0,
])

// itemSize = 3 因为每个顶点都是一个三元组。
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
```

## uv

三维建模中的"UV"可理解为立体模型的“皮肤”，将“皮肤”展开然后进行二维平面上的绘制并赋予物体

"UV"这里是指 u,v 纹理贴图坐标的简称(它和空间模型的 X, Y, Z 轴是类似的)

它定义了图片上每个点的位置的信息. 这些点与 3D 模型是相互联系的, 以决定表面纹理贴图的位置.

UV 就是将图像上每一个点精确对应到模型物体的表面. 在点与点之间的间隙位置由软件进行图像光滑插值处理. 这就是所谓的 UV 贴图

## 法向

在几何中，法向是指垂直于某种元素的方向

## 酷炫三角形科技物体

```js
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

// 设置相机位置
camera.position.set(3, 3, 3)
scene.add(camera)

// 随机创建50个三角形
for (let i = 0; i < 500; i++) {
  const geometry = new THREE.BufferGeometry()
  const positionArr = new Float32Array(9)
  for (let j = 0; j < 9; j++) {
    positionArr[j] = Math.random()
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positionArr, 3))
  const color = new THREE.Color(Math.random(), Math.random(), Math.random())
  const material = new THREE.MeshBasicMaterial({ color: color })
  const mesh = new THREE.Mesh(geometry, material)
  // 物体添加到添加场景
  scene.add(mesh)
}

// 初始化渲染器
const renderer = new THREE.WebGLRenderer()
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)
// 将webgl渲染的canvas内容添加到body
document.body.appendChild(renderer.domElement)

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)
// 阻尼效果
controls.enableDamping = true

// 添加坐标轴辅助器
const axesHelper = new THREE.AxesHelper(10)
// 将坐标轴辅助器添加到场景中
scene.add(axesHelper)

// 渲染函数
function render() {
  renderer.render(scene, camera)
  //   渲染下一帧的时候就会调用render函数
  requestAnimationFrame(render)
}
render()
```

## 常用网格几何体

官方文档搜索 🔍：`geometry`

BoxGeometry 和 BoxBufferGeometry 均是缓冲几何体

![BufferGeometry和Geometry有什么不同](https://blog.csdn.net/u014291990/article/details/91954333)

新版 three 估计进行了合并，查看了源码这两是一个东西
