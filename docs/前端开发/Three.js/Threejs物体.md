---
title: Threejs物体
tag:
 - Threejs
category: 前端图形
---

# Threejs 物体

## 几何体顶点

attributes.position代表顶点的位置

控制台输出物体的attributes.position属性发现一个四面体有24个顶点

四面体不是只有8个顶点吗？

在threejs中顶点代表的是组成一个面的两个三角形的顶点，一个三角形有3个顶点，所以一个面有6个顶点

```js
const geometry = new THREE.BufferGeometry();
// 创建一个简单的矩形. 在这里我们左上和右下顶点被复制了两次。
// 因为在两个三角面片里，这两个顶点都需要被用到。
const vertices = new Float32Array( [
	-1.0, -1.0,  1.0,
	 1.0, -1.0,  1.0,
	 1.0,  1.0,  1.0,

	 1.0,  1.0,  1.0,
	-1.0,  1.0,  1.0,
	-1.0, -1.0,  1.0
] );

// itemSize = 3 因为每个顶点都是一个三元组。
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const mesh = new THREE.Mesh( geometry, material );
```

## uv

三维建模中的"UV"可理解为立体模型的“皮肤”，将“皮肤”展开然后进行二维平面上的绘制并赋予物体

"UV"这里是指u,v纹理贴图坐标的简称(它和空间模型的X, Y, Z轴是类似的)

它定义了图片上每个点的位置的信息. 这些点与3D模型是相互联系的, 以决定表面纹理贴图的位置.

 UV就是将图像上每一个点精确对应到模型物体的表面. 在点与点之间的间隙位置由软件进行图像光滑插值处理. 这就是所谓的UV贴图

## 法向

在几何中，法向是指垂直于某种元素的方向

## 酷炫三角形科技物体

## 常用网格几何体
