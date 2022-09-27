<template><div><p>Homebrew 是一款 Mac OS 平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷。例如 homebrew 可以快速安装 git,nvm,mysql,mongodb 等开发工具</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p><code v-pre>homebrew</code>使用脚本安装:</p>
<ol>
<li>国内脚本：🈶️ 莫名其妙的 BUG</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/bin/zsh <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh<span class="token variable">)</span></span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>科学环境推荐官方脚本：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>mac 国内第三方卸载脚本：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/bin/zsh <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh<span class="token variable">)</span></span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>mac 官方卸载脚本：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> /bin/bash <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh<span class="token variable">)</span></span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="报错" tabindex="-1"><a class="header-anchor" href="#报错" aria-hidden="true">#</a> 报错</h2>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>使用国内脚本安装，可能会遇到此问题。使用官方脚本无此问题</p>
</div>
<p>fatal: not in a git directory Error: Command failed with exit 128: git</p>
<p><strong>解决办法</strong>：执行 brew -v 命令看看是不是有两个提示，你的 homebrew-core 和 homebrew-cask 目录被 git 认为不是一个安全的目录，需要手动添加
git config --global --add safe.directory 你的 homebrew-core 路径
git config --global --add safe.directory 你的 homebrew-cask 路径</p>
<h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h2>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>使用 brew uninstall git 卸载软件只会卸载软件本身而不会同时卸载其依赖包，使用以下命令可完全卸载，并且不会影响到其他软件。需要科学上网！</p>
<p><code v-pre>brew tap beeftornado/rmtree</code></p>
<p>结束后执行如下命令即可完全卸载软件。</p>
<p><code v-pre>brew rmtree git</code></p>
</div>
<h2 id="目前在使用的软件包" tabindex="-1"><a class="header-anchor" href="#目前在使用的软件包" aria-hidden="true">#</a> 目前在使用的软件包</h2>
<ul>
<li><code v-pre>mysql</code>:<a href="https://blog.csdn.net/x123089/article/details/79729563" target="_blank" rel="noopener noreferrer">安装教程<ExternalLinkIcon/></a></li>
<li><code v-pre>git</code>:<code v-pre>brew install git</code></li>
<li><code v-pre>nvm</code>: <code v-pre>brew install nvm</code>, <code v-pre>node</code> 版本管理工具,配置见<strong>node 入门-&gt;node 基础</strong>,如何<a href="https://blog.csdn.net/longgege001/article/details/114067242" target="_blank" rel="noopener noreferrer">安装低版本 node<ExternalLinkIcon/></a></li>
<li><code v-pre>mongoDB</code>:<a href="https://www.jianshu.com/p/8db0b29a931d" target="_blank" rel="noopener noreferrer">安装教程<ExternalLinkIcon/></a></li>
<li><code v-pre>fd</code>:检索文件工具，速度较快，比<code v-pre>everything</code>还是差一点,<a href="https://github.com/sharkdp/fd" target="_blank" rel="noopener noreferrer">github<ExternalLinkIcon/></a></li>
</ul>
</div></template>


