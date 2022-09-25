/**
 * @name 前端快速部署服务器
 * @author Frank
 */
const scpClient = require('scp2')
const ora = require('ora')
const server = {
  host: '47.242.159.58', //服务器IP
  port: 22, //服务器端口
  username: 'root', //服务器ssh登录用户名
  password: 'BTzfh4670', //服务器ssh登录密码
  path: '/www/wwwroot/zfhblog.top', //服务器web目录
}
const loading = ora('正在部署至 ' + server.host)
loading.start()
const start = Date.now()
scpClient.scp('dist/', server, err => {
  loading.stop()
  if (err) {
    console.log('部署失败')
    throw err
  } else {
    const end = Date.now()
    console.log(`部署成功,用时${(end - start) / 60 / 1000}分钟`)
  }
})
