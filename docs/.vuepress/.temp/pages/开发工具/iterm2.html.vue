<template><div><p><code v-pre>iterm2</code> 替换 <code v-pre>mac</code> 系统自带终端配合<a href="https://github.com/ohmyzsh/ohmyzsh" target="_blank" rel="noopener noreferrer">ohmyzsh<ExternalLinkIcon/></a> 打造个性终端</p>
<h2 id="安装-ohmyzsh" tabindex="-1"><a class="header-anchor" href="#安装-ohmyzsh" aria-hidden="true">#</a> 安装 ohmyzsh</h2>
<ol>
<li>安装：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sh</span> <span class="token parameter variable">-c</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh<span class="token variable">)</span></span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>修改主题：</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ZSH_THEME="agnoster"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>安装主题需要<code v-pre>powerline</code>字体：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># clone</span>
<span class="token function">git</span> clone https://github.com/powerline/fonts.git <span class="token parameter variable">--depth</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment"># install</span>
<span class="token builtin class-name">cd</span> fonts
./install.sh
<span class="token comment"># clean-up a bit</span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> fonts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>iterm2</code>，<code v-pre>vscode</code> 等软件添加后缀带有<code v-pre>powerline</code>的字体</p>
<p>然后可以删除其他字体,在用户文件下的<code v-pre>Fonts</code>文件夹保留你要使用的字体，删除其他你不需要使用的字体</p>
<p>或者你可以运行<code v-pre>powerline</code>自带的删除脚本,在此之前请保留你正在使用的字体</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># powerline fonts</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">777</span> ./uninstall.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>原来的<code v-pre>.zshrc</code>将重命名为<code v-pre>.zshrc .pre-oh-my-zsh </code>。在安装之后，你可以将你原来的终端配置移到新的<code v-pre>.zshrc</code>中</p>
<h2 id="效果图" tabindex="-1"><a class="header-anchor" href="#效果图" aria-hidden="true">#</a> 效果图</h2>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/iterm2界面截图.png" alt="iterm2界面截图" loading="lazy"></p>
<h2 id="其他插件" tabindex="-1"><a class="header-anchor" href="#其他插件" aria-hidden="true">#</a> 其他插件</h2>
<ul>
<li>
<p><a href="https://github.com/wting/autojump" target="_blank" rel="noopener noreferrer">autojump<ExternalLinkIcon/></a>,快速跳转目录(只能跳转已经 cd 的目录)</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/autojump.gif" alt="autojump" loading="lazy"></p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># .zshrc</span>
 <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> /opt/homebrew/etc/profile.d/autojump.sh <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">.</span> /opt/homebrew/etc/profile.d/autojump.sh
<span class="token assign-left variable">fpath</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token variable">$fpath</span> <span class="token string">"/Users/frank/.zfunctions"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><a href="https://github.com/zsh-users/zsh-syntax-highlighting" target="_blank" rel="noopener noreferrer">zsh-syntax-highlighting<ExternalLinkIcon/></a>:高亮终端的代码</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># .zshrc</span>
<span class="token builtin class-name">source</span> /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


