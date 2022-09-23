/**
 * @name 静态资源上传阿里云OSS
 * @author zhangfanhang
 */
const WebpackAliyunOss = require('webpack-aliyun-oss')
// 完美可用 切勿修改
new WebpackAliyunOss({
  from: './dist/assets',
  dist: 'blog-assets/',
  region: 'oss-cn-nanjing',
  accessKeyId: 'LTAI5tSHVrtRFSs8KU4vu4ZG',
  accessKeySecret: '7EHmkGIGvQiZUmV3EBp6Jk62Ty4B0q',
  bucket: 'zfh-nanjing-bucket',
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
