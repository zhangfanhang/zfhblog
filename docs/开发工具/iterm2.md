---
title: iterm2
tags:
  - iterm2
  - 终端插件
  - ohmyzsh
---

`iterm2` 替换 `mac` 系统自带终端配合[ohmyzsh](https://github.com/ohmyzsh/ohmyzsh) 打造个性终端

## 安装 ohmyzsh

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

在 `iterm2`，`vscode` 等软件添加后缀带有`powerline`的字体

然后可以删除其他字体,在用户文件下的`Fonts`文件夹保留你要使用的字体，删除其他你不需要使用的字体

原来的`.zshrc`将重命名为`.zshrc .pre-oh-my-zsh `。在安装之后，你可以将你原来的终端配置移到新的`.zshrc`中

## 效果图

![iterm2界面截图](https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/iterm2%E7%95%8C%E9%9D%A2%E6%88%AA%E5%9B%BE.png)

## 其他插件

- [autojump](https://github.com/wting/autojump),快速跳转目录(只能跳转已经 cd 的目录)

  ![autojump](https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/autojump.gif)

```shell
# .zshrc
 [ -f /opt/homebrew/etc/profile.d/autojump.sh ] && . /opt/homebrew/etc/profile.d/autojump.sh
fpath=($fpath "/Users/frank/.zfunctions")
```

- [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting):高亮终端的代码

```shell
# .zshrc
source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```
