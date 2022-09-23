<template>
  <div></div>
</template>
<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
export default {
  name: 'logo',
  mounted() {
    this.init()
  },
  methods: {
    // 初始化
    init() {
      const camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        10000
      )
      camera.position.set(0, 0, 900)
      const scene = new THREE.Scene()
      const loader = new FontLoader()
      const lineText = new THREE.Object3D()
      loader.load(
        'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json',
        function (font) {
          const color = 0x000000
          const matDark = new THREE.LineBasicMaterial({
            color: color,
            side: THREE.DoubleSide,
          })
          const matLite = new THREE.MeshBasicMaterial({
            color: color,
            transparent: true,
            opacity: 0.4,
            side: THREE.DoubleSide,
          })
          const message = "ZFH's Blog"
          const shapes = font.generateShapes(message, 100)
          const geometry = new THREE.ShapeGeometry(shapes)
          geometry.computeBoundingBox()
          const xMid =
            -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
          geometry.translate(xMid, 0, 0)
          const text = new THREE.Mesh(geometry, matLite)
          text.position.z = -150
          scene.add(text)
          const holeShapes = []
          for (let i = 0; i < shapes.length; i++) {
            const shape = shapes[i]
            if (shape.holes && shape.holes.length > 0) {
              for (let j = 0; j < shape.holes.length; j++) {
                const hole = shape.holes[j]
                holeShapes.push(hole)
              }
            }
          }
          shapes.push.apply(shapes, holeShapes)
          for (let i = 0; i < shapes.length; i++) {
            const shape = shapes[i]
            const points = shape.getPoints()
            const geometry = new THREE.BufferGeometry().setFromPoints(points)
            geometry.translate(xMid, 0, 0)
            const lineMesh = new THREE.Line(geometry, matDark)
            lineText.add(lineMesh)
          }
          scene.add(lineText)
          render()
        }
      )
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      document
        .getElementsByClassName('home')[0]
        .insertBefore(
          renderer.domElement,
          document.getElementsByClassName('hero')[0]
        )
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.target.set(0, 0, 0)
      controls.enableZoom = false
      controls.enableDamping = true
      window.addEventListener('resize', onWindowResize)
      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        render()
      }
      function render() {
        requestAnimationFrame(render)
        controls.update()
        renderer.render(scene, camera)
      }
    },
  },
}
</script>
