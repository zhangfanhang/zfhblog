/**
 * @name 前端快速部署服务器
 * @author 张帆航
 */
const scpClient = require('scp2')
const ora = require('ora')
const server = {
    host: '103.212.34.78', //服务器IP
    port: 22, //服务器端口
    username: 'root', //服务器ssh登录用户名
    password: 'HKzfh4670.', //服务器ssh登录密码
    path: '/www/wwwroot/notes.zfhblog.top', //服务器web目录
}
const loading = ora('正在部署至 ' + server.host)
loading.start()
scpClient.scp('dist/', server, err => {
    loading.stop()
    if (err) {
        console.log('部署失败')
        throw err
    } else {
        console.log('部署成功')
    }
})
