/**
 * @name 静态资源上传阿里云OSS
 * @author zhangfanhang
 */
const WebpackAliyunOss = require('webpack-aliyun-oss')
// 完美可用 切勿修改
new WebpackAliyunOss({
  from: './dist/assets',
  dist: 'blog-assets/',
  region: 'oss-cn-shanghai',
  accessKeyId: 'LTAI5tG9FP7DXeJFj4krraLB',
  accessKeySecret: 'G5ZzWfxAFpxqwn729nS3wfiRJVau4d',
  bucket: 'zfh-oss',
  setOssPath(filePath) {
    let index = filePath.lastIndexOf('dist')
    let Path = filePath.substring(index + 4, filePath.length)
    console.log(Path)
    return Path.replace(/\\/g, '/')
  },
  setHeaders() {
    return {
      'Cache-Control': 'max-age=31536000',
    }
  },
}).apply()
