---
title: MySQL
date: 2022/04/15 14:02:17
sidebar: auto
---

## 安装

### MacOS

通过 homebrew 安装：

```bash
brew install mysql
```

启动 mysql 服务：

```bash
mysql.server start
```

设置 mysql:

```bash
mysql_secure_installation
```

,出现以下提示:

```bash
Securing the MySQL server deployment.

Connecting to MySQL using a blank password.
//验证密码插件可以用来测试密码和提高安全性。它检查密码的强度，并允许用户只设置那些足够安全的密码。你愿意安装验证密码插件吗?
VALIDATE PASSWORD PLUGIN can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?
//在下边的问题中输入y或者Y,输入其他的都表示为否
Press y|Y for Yes, any other key for No:y

// 密码验证策略有三个级别:
// 低长度> = 8
// 中长度>= 8，数字，混合情况，和特殊字符。
// 强长度>= 8，数字，混合情况，特殊字符和字典文件。

There are three levels of password validation policy:

LOW    Length >= 8
MEDIUM Length >= 8, numeric, mixed case, and special characters
STRONG Length >= 8, numeric, mixed case, special characters and dictionary file

// 0,1,2分别代表3个不同的级别,看自己的生产环境需要的密码需求

Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG:0

// 请在这里设置root的密码。
// 新密码:
// 重新输入新密码:
// 估计密码强度:50。

// 您希望继续提供密码吗?(请按y| y为Yes，任何其他关键字):


Please set the password for root here.

New password:

Re-enter new password:

Estimated strength of the password: 50
Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) :y

// 默认情况下，MySQL安装有匿名用户，
// 允许任何人在不需要的情况下登录MySQL。
// 为它们创建的用户帐户。这仅仅是为了。
// 测试，并使安装更加顺利。
// 在开始生产之前，你应该把它们去掉。
// 环境。
// 删除匿名用户?(请按y| y为Yes，任何其他关键字):

By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) :y

// 成功。
// 通常，根应该只允许连接。
// “localhost”。这确保了某人无法猜测。
// 来自网络的根密码。
// 不允许远程root登录吗?(请按y| y为Yes，任何其他关键字):
// 这里表示是否允许远程登录root用户,我这里是测试环境,选择键入Y

Success.

Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) :y

成功。

// 默认情况下，MySQL附带一个名为“test”的数据库。
// 任何人都可以访问。这也只用于测试，
// 在开始生产之前应该将其移除。
// 环境。
// 这里提示是否删除mysql的test数据库


删除测试数据库并访问它?(请按y| y为Yes，任何其他关键字):

Success.

By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) :y


// ——删除测试数据库……
// 成功。
// -删除测试数据库上的特权…
// 成功。
// 重新加载特权表将确保所有更改。
// 到目前为止，将立即生效。
// 现在重新加载权限表吗?(请按y| y为Yes，任何其他关键字):
- Dropping test database...
Success.

 - Removing privileges on test database...
Success.

Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) :y


Success.
//出现此消息,说明mysql设置成功,请牢记输入的mysql密码
All done!
```

登录mysql进行测试:

```shell
mysql -u root -p
```

