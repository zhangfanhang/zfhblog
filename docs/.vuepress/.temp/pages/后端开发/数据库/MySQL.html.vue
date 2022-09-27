<template><div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> MacOS</h3>
<p>通过 homebrew 安装：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>brew <span class="token function">install</span> mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 mysql 服务：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysql.server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置 mysql:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysql_secure_installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>,出现以下提示:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Securing the MySQL server deployment.

Connecting to MySQL using a blank password.
//验证密码插件可以用来测试密码和提高安全性。它检查密码的强度，并允许用户只设置那些足够安全的密码。你愿意安装验证密码插件吗?
VALIDATE PASSWORD PLUGIN can be used to <span class="token builtin class-name">test</span> passwords
and improve security. It checks the strength of password
and allows the <span class="token function">users</span> to <span class="token builtin class-name">set</span> only those passwords <span class="token function">which</span> are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?
//在下边的问题中输入y或者Y,输入其他的都表示为否
Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No:y

// 密码验证策略有三个级别:
// 低长度<span class="token operator">></span> <span class="token operator">=</span> <span class="token number">8</span>
// 中长度<span class="token operator">>=</span> <span class="token number">8</span>，数字，混合情况，和特殊字符。
// 强长度<span class="token operator">>=</span> <span class="token number">8</span>，数字，混合情况，特殊字符和字典文件。

There are three levels of password validation policy:

LOW    Length <span class="token operator">>=</span> <span class="token number">8</span>
MEDIUM Length <span class="token operator">>=</span> <span class="token number">8</span>, numeric, mixed case, and special characters
STRONG Length <span class="token operator">>=</span> <span class="token number">8</span>, numeric, mixed case, special characters and dictionary <span class="token function">file</span>

// <span class="token number">0,1</span>,2分别代表3个不同的级别,看自己的生产环境需要的密码需求

Please enter <span class="token number">0</span> <span class="token operator">=</span> LOW, <span class="token number">1</span> <span class="token operator">=</span> MEDIUM and <span class="token number">2</span> <span class="token operator">=</span> STRONG:0

// 请在这里设置root的密码。
// 新密码:
// 重新输入新密码:
// 估计密码强度:50。

// 您希望继续提供密码吗?<span class="token punctuation">(</span>请按y<span class="token operator">|</span> y为Yes，任何其他关键字<span class="token punctuation">)</span>:


Please <span class="token builtin class-name">set</span> the password <span class="token keyword">for</span> root here.

New password:

Re-enter new password:

Estimated strength of the password: <span class="token number">50</span>
Do you wish to <span class="token builtin class-name">continue</span> with the password provided?<span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> :y

// 默认情况下，MySQL安装有匿名用户，
// 允许任何人在不需要的情况下登录MySQL。
// 为它们创建的用户帐户。这仅仅是为了。
// 测试，并使安装更加顺利。
// 在开始生产之前，你应该把它们去掉。
// 环境。
// 删除匿名用户?<span class="token punctuation">(</span>请按y<span class="token operator">|</span> y为Yes，任何其他关键字<span class="token punctuation">)</span>:

By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created <span class="token keyword">for</span> them. This is intended only <span class="token keyword">for</span>
testing, and to <span class="token function">make</span> the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> :y

// 成功。
// 通常，根应该只允许连接。
// “localhost”。这确保了某人无法猜测。
// 来自网络的根密码。
// 不允许远程root登录吗?<span class="token punctuation">(</span>请按y<span class="token operator">|</span> y为Yes，任何其他关键字<span class="token punctuation">)</span>:
// 这里表示是否允许远程登录root用户,我这里是测试环境,选择键入Y

Success.

Normally, root should only be allowed to connect from
<span class="token string">'localhost'</span><span class="token builtin class-name">.</span> This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> :y

成功。

// 默认情况下，MySQL附带一个名为“test”的数据库。
// 任何人都可以访问。这也只用于测试，
// 在开始生产之前应该将其移除。
// 环境。
// 这里提示是否删除mysql的test数据库


删除测试数据库并访问它?<span class="token punctuation">(</span>请按y<span class="token operator">|</span> y为Yes，任何其他关键字<span class="token punctuation">)</span>:

Success.

By default, MySQL comes with a database named <span class="token string">'test'</span> that
anyone can access. This is also intended only <span class="token keyword">for</span> testing,
and should be removed before moving into a production
environment.


Remove <span class="token builtin class-name">test</span> database and access to it? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> :y


// ——删除测试数据库……
// 成功。
// -删除测试数据库上的特权…
// 成功。
// 重新加载特权表将确保所有更改。
// 到目前为止，将立即生效。
// 现在重新加载权限表吗?<span class="token punctuation">(</span>请按y<span class="token operator">|</span> y为Yes，任何其他关键字<span class="token punctuation">)</span>:
- Dropping <span class="token builtin class-name">test</span> database<span class="token punctuation">..</span>.
Success.

 - Removing privileges on <span class="token builtin class-name">test</span> database<span class="token punctuation">..</span>.
Success.

Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? <span class="token punctuation">(</span>Press y<span class="token operator">|</span>Y <span class="token keyword">for</span> Yes, any other key <span class="token keyword">for</span> No<span class="token punctuation">)</span> :y


Success.
//出现此消息,说明mysql设置成功,请牢记输入的mysql密码
All done<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录 mysql 进行测试:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysql <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


