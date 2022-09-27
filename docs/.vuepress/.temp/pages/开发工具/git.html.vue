<template><div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<h3 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> mac</h3>
<p>通过<code v-pre>homebrew</code>安装:<code v-pre>brew install git</code></p>
<h2 id="配置账户" tabindex="-1"><a class="header-anchor" href="#配置账户" aria-hidden="true">#</a> 配置账户</h2>
<p>1、设置用户名：<code v-pre>git config --global user.name '你git平台上的用户名'</code>;</p>
<p>2、设置用户邮箱：<code v-pre>git config --global user.email '注册时候的邮箱'</code>;</p>
<h2 id="配置-ssh-密钥" tabindex="-1"><a class="header-anchor" href="#配置-ssh-密钥" aria-hidden="true">#</a> 配置 SSH 密钥</h2>
<ul>
<li><a href="https://gitee.com/help/articles/4181" target="_blank" rel="noopener noreferrer">生成/添加 SSH 公钥<ExternalLinkIcon/></a></li>
<li><a href="https://gitee.com/help/articles/4229" target="_blank" rel="noopener noreferrer">Git 配置多个 SSH-Key<ExternalLinkIcon/></a></li>
</ul>
<p>以下命令 <code v-pre>win</code> 在 <code v-pre>git bash</code> 下执行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">'gitee'</span> <span class="token parameter variable">-f</span> ~/.ssh/gitee_id_rsa

ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">'github'</span> <span class="token parameter variable">-f</span> ~/.ssh/github_id_rsa

<span class="token comment"># 生成完去gitee，github设置添加公钥 pub文件</span>
<span class="token comment"># mac 操作 win忽略</span>
ssh-add ~/.ssh/github_id_rsa
ssh-add ~/.ssh/gitee_id_rsa
<span class="token comment"># 终端连接</span>
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@gitee.com
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>mac</code> 下每次开机后需要执行:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ssh-add ~/.ssh/gitee_id_rsa
ssh-add ~/.ssh/github_id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以自动添加，在每次开机后自动运行：<a href="https://www.jianshu.com/p/ada03bd51ed5" target="_blank" rel="noopener noreferrer">具体步骤<ExternalLinkIcon/></a></p>
<h2 id="墙内自救指南" tabindex="-1"><a class="header-anchor" href="#墙内自救指南" aria-hidden="true">#</a> 墙内自救指南</h2>
<p>git push<code v-pre>,</code>git clone<code v-pre>加速</code>github</p>
<h3 id="http-设置" tabindex="-1"><a class="header-anchor" href="#http-设置" aria-hidden="true">#</a> HTTP 设置</h3>
<p><code v-pre>.gitconfig</code> 配置文件写入：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>http <span class="token string">"https://github.com"</span><span class="token punctuation">]</span>
	proxy <span class="token operator">=</span> socks5://127.0.0.1:7890
<span class="token punctuation">[</span>https <span class="token string">"https://github.com"</span><span class="token punctuation">]</span>
	proxy <span class="token operator">=</span> socks5://127.0.0.1:7890
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者终端执行：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> http.https://github.com.proxy socks5://127.0.0.1:7890
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.https://github.com.proxy socks5://127.0.0.1:7890
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ssh-设置" tabindex="-1"><a class="header-anchor" href="#ssh-设置" aria-hidden="true">#</a> SSH 设置</h3>
<p><code v-pre>~/.ssh/config</code>（config 前面没有点） 配置文件写入：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># gitee</span>
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_id_rsa
<span class="token comment"># github</span>
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_id_rsa
ProxyCommand <span class="token function">nc</span> <span class="token parameter variable">-v</span> <span class="token parameter variable">-x</span> <span class="token number">127.0</span>.0.1:7890 %h %p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://gist.github.com/chuyik/02d0d37a49edc162546441092efae6a1" target="_blank" rel="noopener noreferrer">macOS 给 Git(Github) 设置代理（HTTP/SSH）<ExternalLinkIcon/></a></p>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<h3 id="生成版本" tabindex="-1"><a class="header-anchor" href="#生成版本" aria-hidden="true">#</a> 生成版本</h3>
<ul>
<li><code v-pre>git init</code>:在项目中初始化 Git，让 Git 管理当前项目</li>
<li><code v-pre> git status</code>:检查当前文件状态，需要经常使用 -<code v-pre> git add &lt;file1&gt; &lt;file2&gt;</code> ...:将工作区的指定内容添加到暂存区</li>
<li><code v-pre>git add .</code> :将工作区的内容一起添加到暂存区</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">git add</p>
<p>使用 <code v-pre>git add</code> 后，工作区和暂存区的内容是一致的</p>
<p>工作区和暂存区内容不一致的时候，需要通过 <code v-pre>git add</code>，让它们内容一致</p>
<p>只要工作区的文件有变动，就需要将工作区的变动添加到暂存区</p>
</div>
<ul>
<li><code v-pre>git commit -m '描述消息'</code>：将暂存区的内容提交到本地仓库，生成版本</li>
</ul>
<div class="custom-container tip">
<p class="custom-container-title">git commit</p>
<p><code v-pre>git commit</code> 后，暂存区和本地版本库的内容是一致的</p>
<p>暂存区和本地版本库内容不一致的时候，需要通过 <code v-pre>git commit</code> ，让它们内容一致</p>
</div>
<ul>
<li><code v-pre>git log</code> ：查看提交内容</li>
<li><code v-pre> git log --oneline</code>：以一行的方式查看提交记录</li>
</ul>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/git本地版本控制.png" alt="git本地版本控制" loading="lazy"></p>
<h3 id="重置版本" tabindex="-1"><a class="header-anchor" href="#重置版本" aria-hidden="true">#</a> 重置版本</h3>
<ul>
<li>
<p><code v-pre>git reset --soft 版本号</code>：仅重置本地仓库</p>
</li>
<li>
<p><code v-pre>git reset --mixed 版本号</code>：重置本地仓库和暂存区，默认行为</p>
</li>
<li>
<p><code v-pre>git reset --hard 版本号</code>：重置本地仓库、暂存区和工作目录
<code v-pre>--hard</code> 危险，会覆盖正在开发的代码</p>
</li>
<li>
<p><code v-pre>git reflog</code>:可以查看所有记录，包括被&quot;丢弃&quot;的版本</p>
</li>
<li>
<p><code v-pre>git log</code>:查看提交记录，不包括被&quot;丢弃&quot;的版本</p>
</li>
</ul>
<h3 id="git-忽略文件-gitignore" tabindex="-1"><a class="header-anchor" href="#git-忽略文件-gitignore" aria-hidden="true">#</a> git 忽略文件---.gitignore</h3>
<ul>
<li><code v-pre>#</code>：注释</li>
<li><code v-pre>test.html</code>:忽略指定文件，不让 Git 管理</li>
<li><code v-pre>test.*</code>：忽略所有文件名是 test 的文件，不管后缀是什么</li>
<li><code v-pre>*.tmp</code>：忽略所有后缀是.tmp 的文件，不管文件名是什么</li>
<li><code v-pre>node_modules/</code>:忽略<code v-pre>node_modules</code>目录下的所有文件</li>
<li>git 管理的是文件，空目录会自动忽略</li>
</ul>
<h2 id="git-分支" tabindex="-1"><a class="header-anchor" href="#git-分支" aria-hidden="true">#</a> git 分支</h2>
<h3 id="创建和切换分支" tabindex="-1"><a class="header-anchor" href="#创建和切换分支" aria-hidden="true">#</a> 创建和切换分支</h3>
<div class="custom-container tip">
<p class="custom-container-title">checkout</p>
<p>checkout=&gt;<strong>签出</strong>操作(webstrom)</p>
</div>
<ul>
<li><code v-pre>git branch</code>:查看分支</li>
<li><code v-pre>git branch-v</code>:查看分支（展示的信息多一些）</li>
<li><code v-pre>git branch 分支名</code>：在当前分支的节点上创建新的分支</li>
<li><code v-pre>git checkout 分支名</code>：切换分支，兼容性好</li>
<li><code v-pre>git switch 分支名</code>：切换分支，v2.23.0 版及以后可用</li>
</ul>
<h3 id="合并和删除分支" tabindex="-1"><a class="header-anchor" href="#合并和删除分支" aria-hidden="true">#</a> 合并和删除分支</h3>
</div></template>


