---
title: 记一次koa2项目部署过程
---

## 准备

一台安装宝塔面板的`centOS`服务器,我的版本是 7.9

## 安装软件

之后在宝塔面板的软件商店：安装`mongodb`,`nginx`,`pm2管理器`

## 前端配置

在服务器`/www/wwwroot`目录下放入前端**打包后**代码

![wwwroot](https://zfh-oss.oss-cn-shanghai.aliyuncs.com/blog-images/wwwroot.png)

然后配置`nginx`，随便在那个文件夹(我是在`/www/wwwroot/nginx`下)，新建一个`.conf`配置文件，如下进行配置，我已经配置好了域名

一定要在`nginx`主配置文件中加上：`include /www/nginx/*.conf;`

![nginx主配置文件](https://zfh-oss.oss-cn-shanghai.aliyuncs.com/blog-images/nginx%E4%B8%BB%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.png)

```conf
server {
        listen 80;
        server_name message.zfhblog.top;

        location / {
                root /www/wwwroot/message;
                index index.html;
        }
}
```

现在前端页面已经可以访问了，我们对后端服务进行配置

## 后端配置

接着把后端代码，不要`node_modules`,传到服务器，在终端输入`npm i`,在这之前尽量更换淘宝源

在软件商店打开 `PM2`,如图进行添加项目，看下有没有出现停止重启，说明基本成功了，再看下有没有报错

![PM2配置](https://zfh-oss.oss-cn-shanghai.aliyuncs.com/blog-images/PM2%E9%85%8D%E7%BD%AE.png)

**我遇到了一个比较奇葩的报错，说找不到某个具体的模块，怀疑是相对路径的问题，于是我把相对路径，全部换成了服务器的文件绝对路径，最后可以了**

成功后,接下来,配置跨域 `Nginx `代理,还是来到 `Nginx` 的配置修改:

```conf
server {
        listen 80;
        server_name message.zfhblog.top;

        location / {
                root /www/wwwroot/message;
                index index.html;
        }
        location /api/ {
            proxy_pass http://localhost:3000/;
        }
}
```

修改后重启`Nginx`,最后一步还需要在前端项目中修改的`baseURL`,然后重新打包上传

```js
const instance = axios.create({
  baseURL: 'http://message.zfhblog.top/api/',
  withCredentials: true,
})
```

至此完成项目部署,上线成功
