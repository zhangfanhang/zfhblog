---
title: homebrew
sidebar: auto
---

Homebrew 是一款 Mac OS 平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷。例如 homebrew 可以快速安装 git,nvm,mysql,mongodb 等开发工具

## 安装

`homebrew`使用脚本安装:

1. 国内脚本：🈶️ 莫名其妙的 BUG

```shell
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

2. 科学环境推荐官方脚本：

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. mac 国内第三方卸载脚本：

```shell
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```

4. mac 官方卸载脚本：

```shell
 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
```

## 报错

::: warning

使用国内脚本安装，可能会遇到此问题。使用官方脚本无此问题

:::

fatal: not in a git directory Error: Command failed with exit 128: git

**解决办法**：执行 brew -v 命令看看是不是有两个提示，你的 homebrew-core 和 homebrew-cask 目录被 git 认为不是一个安全的目录，需要手动添加
git config --global --add safe.directory 你的 homebrew-core 路径
git config --global --add safe.directory 你的 homebrew-cask 路径

## 注意

::: tip 提示

使用 brew uninstall git 卸载软件只会卸载软件本身而不会同时卸载其依赖包，使用以下命令可完全卸载，并且不会影响到其他软件。需要科学上网！

`brew tap beeftornado/rmtree`

结束后执行如下命令即可完全卸载软件。

`brew rmtree git`

:::

## 目前在使用的软件包

- `mysql`:[安装教程](https://blog.csdn.net/x123089/article/details/79729563)
- `git`:`brew install git`
- `nvm`: `brew install nvm`, `node` 版本管理工具,配置见**node 入门->node 基础**,如何[安装低版本 node](https://blog.csdn.net/longgege001/article/details/114067242)
- `mongoDB`:[安装教程](https://www.jianshu.com/p/8db0b29a931d)
- `fd`:检索文件工具，速度较快，比`everything`还是差一点,[github](https://github.com/sharkdp/fd)
