---
title:iterm2
date: 2022/09/05 08:36:15
---

iterm2 替换mac系统自带终端配合ohmyZsh 打造个性终端

[ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)

## 安装ohmyzsh

1. 安装：

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

2. 修改主题：

```
ZSH_THEME="agnoster" 
```

3. 安装主题需要`powerline`字体：

```shell
# clone
git clone https://github.com/powerline/fonts.git --depth=1
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts
```

在iterm，vscode等软件添加后缀带有`powerline`的字体

然后可以删除其他字体,在用户文件下的`Fonts`文件夹保留你要使用的字体，删除其他你不需要使用的字体

或者你可以运行`powerline`自带的删除脚本,在此之前请保留你正在使用的字体

```shell
# powerline fonts
sudo chmod 777 ./uninstall.sh 
```

原来的`.zshrc`将重命名为`.zshrc .pre-oh-my-zsh `。在安装之后，你可以将你原来的终端配置移到新的`.zshrc`中

## 效果图

![iterm2界面截图](https://zfh-oss.oss-cn-shanghai.aliyuncs.com/blog-images/iterm2%E7%95%8C%E9%9D%A2%E6%88%AA%E5%9B%BE.png)
