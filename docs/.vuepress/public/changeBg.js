/**
 * 随机背景图
 */
const mask = document.querySelector('.mask')
const num = Math.floor(Math.random() * 5) + 1
mask.style.backgroundImage = `url('https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/bg${num}.jpg')`
