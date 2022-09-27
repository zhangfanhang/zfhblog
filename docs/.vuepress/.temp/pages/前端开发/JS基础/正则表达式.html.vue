<template><div><p>// TODO 重新学习</p>
<p>正则表达式(regular expression)描述了字符串的“构成模式”，经常被用于检查字符串是否符合预定的格式要求</p>
<p>正则表达式“按位”描述规则，是指<strong>它是一位一位的描述字符串的构成形式</strong></p>
<p>正则表达式可以调用 test()方法，检查某字符串是否符合正则表达式规定的规则</p>
<h2 id="正则表达式的创建" tabindex="-1"><a class="header-anchor" href="#正则表达式的创建" aria-hidden="true">#</a> 正则表达式的创建</h2>
<ul>
<li>使用<code v-pre>/内容/</code>的语法形式，可以快速创建正则表达式</li>
<li>也可以使用 new RegExp('内容')的形式，创建正则表达式(这种写法有坑！)<div class="custom-container danger">
<p class="custom-container-title">警告</p>
<p>如果使用 new RegExp() 写法，反斜杠需要多写一个，比如<code v-pre>/^\d$/</code>和 <code v-pre>new RegExp（'^\\d$'）</code>是相同的意思</p>
</div>
</li>
<li>使用 typeof 运算符检查正则表达式的类型，结果是 object</li>
</ul>
<h2 id="元字符" tabindex="-1"><a class="header-anchor" href="#元字符" aria-hidden="true">#</a> 元字符</h2>
<p>&quot;元字符”是指 <strong>一位</strong> 指定类型的字符</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/元字符.png" alt="元字符" loading="lazy"></p>
<p>开头和结尾</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/元字符2.png" alt="元字符2" loading="lazy"></p>
<p>元字符：|</p>
<p>正则中使用<strong>竖线</strong>&quot; | &quot;表示或，表示只匹配指定几项之间的一项</p>
<p><strong>eg</strong>:只匹配纯数字或纯字母</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string">'1111'</span>
<span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string">'imooc'</span>
<span class="token keyword">var</span> str3 <span class="token operator">=</span> <span class="token string">'1111imooc'</span>
<span class="token keyword">var</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\d+$|^[a-zA-Z]+$</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>反斜杠用来在文本字符串中插入省略号、换行符、引号和其他特殊字符。在 JavaScript 中，<strong>字符串使用单引号或者双引号来起始或者结束</strong>。</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> txt<span class="token operator">=</span><span class="token string">"We are the so-called "</span>Vikings<span class="token string">" from the north."</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>txt<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这意味着上面的字符串将被截为：We are the so-called。要解决这个问题，就必须把在 &quot;Viking&quot; 中的<strong>引号前面加上反斜杠</strong>。这样就可以把每个双引号<strong>转换为字面上的字符串</strong>。</p>
<p>下面的表格列出了其余的特殊字符，这些特殊字符都可以使用反斜杠来添加到文本字符串中：</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/特殊字符.png" alt="特殊字符" loading="lazy"></p>
<div class="custom-container tip">
<p class="custom-container-title">最佳实践</p>
<p>不管一个符号有没有特殊意义，都可以在其之前加上一个\以确保它表达的是这个符号本身</p>
</div>
<p><strong>eg</strong> 某产品批号形式为：123.45^67#89，请使用正则表达式检查某字符串是否符合此格式</p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p><strong>.(点)必须前加\，因为在正则表达式中元字符.代表匹配任意字符</strong></p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^123\.45\^67\#89$</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">const</span> n1 <span class="token operator">=</span> <span class="token string">'123.45^67#19'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>n1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方括号表示法" tabindex="-1"><a class="header-anchor" href="#方括号表示法" aria-hidden="true">#</a> 方括号表示法</h2>
<p>使用方括号，比如<code v-pre>[xyz]</code>，可以创建个字符集合，表示匹配方括号中的任意字符</p>
<p>eg:比如某学校的学号规定：第 1 位是一个字母，b 表示本科生， y 表示研究生，后面是 7 位数字，用正则表示为:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[by]\d{7}$</span><span class="token regex-delimiter">/</span></span> <span class="token comment">//{7}为量词</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p>可以使用短横-来指定一个字符范围，^表示否定</p>
</div>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/方括号表示法.png" alt="方括号表示法" loading="lazy"></p>
<h2 id="量词" tabindex="-1"><a class="header-anchor" href="#量词" aria-hidden="true">#</a> 量词</h2>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/量词.png" alt="量词" loading="lazy"></p>
<p><strong>eg</strong>
请验证字符串是否符合手机号码的规则：11 位数字，并且肯定以 1 开头</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1\d{10}$</span><span class="token regex-delimiter">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h2>
<p>修饰符也叫作标志（flags），用于使用正则表达式实现高级搜索</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/修饰符.png" alt="修饰符" loading="lazy"></p>
<p>修饰符的使用：</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/修饰符的使用.png" alt="修饰符的使用" loading="lazy"></p>
<h2 id="正则表达式的相关方法" tabindex="-1"><a class="header-anchor" href="#正则表达式的相关方法" aria-hidden="true">#</a> 正则表达式的相关方法</h2>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/正则式方法.png" alt="正则式方法" loading="lazy"></p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/exec().png" alt="exec()" loading="lazy"></p>
<div class="custom-container warning">
<p class="custom-container-title">注意</p>
<p>只有一个结果原因：没有加 g 修饰符</p>
</div>
<p>exec()方法最有趣的是，有&quot;g′修饰符的正则表达式将自动成为“有状态”的，这意味着可以对单个字符串中的多次匹配结果进行逐条的遍历</p>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/exec遍历.png" alt="exec遍历" loading="lazy"></p>
<h2 id="字符串的相关方法" tabindex="-1"><a class="header-anchor" href="#字符串的相关方法" aria-hidden="true">#</a> 字符串的相关方法</h2>
<p><img src="https://zfh-nanjing-bucket.oss-cn-nanjing.aliyuncs.com/blog-images/字符串的相关正则方法.png" alt="字符串的相关正则方法" loading="lazy"></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">'abc123def4567ghi89'</span>
<span class="token comment">// search()方法，很像indexOf()，返回查找到的第一个下标，如果找不到就是-1</span>
<span class="token keyword">var</span> result1 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>
<span class="token keyword">var</span> result2 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">m</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span> <span class="token comment">// 3</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span> <span class="token comment">// -1</span>
<span class="token comment">// match()方法，返回查找到的数组，找不到就是null</span>
<span class="token keyword">var</span> result3 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result3<span class="token punctuation">)</span> <span class="token comment">// ["123", "4567", "89"]</span>
<span class="token comment">// replace()方法，进行替换</span>
<span class="token keyword">var</span> result4 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span> <span class="token comment">// 注意+表示贪婪的，尽可能多的连续匹配小写字母</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result4<span class="token punctuation">)</span> <span class="token comment">// *123*4567*89</span>

<span class="token comment">// split()方法，进行字符串拆为数组</span>
<span class="token keyword">var</span> result5 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result5<span class="token punctuation">)</span> <span class="token comment">// ["abc", "def", "ghi", ""]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="正则的应用" tabindex="-1"><a class="header-anchor" href="#正则的应用" aria-hidden="true">#</a> 正则的应用</h2>
<p>实际上，很多正则表达式不需要我们自己写，可以通过搜索引擎查找，可以拿来即用</p>
<p><strong>表单验证 DEMO</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
      <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.form</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 520px<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 20px 50px<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 50px auto<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 2px solid orange<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.form p</span> <span class="token punctuation">{</span>
        <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.form input</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 180px<span class="token punctuation">;</span>
        <span class="token property">margin-right</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.form .required</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.form .nameField</span> <span class="token punctuation">{</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.form .tips</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.form .strength</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>209<span class="token punctuation">,</span> 207<span class="token punctuation">,</span> 207<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.form .warning</span> <span class="token punctuation">{</span>
        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.form .submit</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>
        <span class="token property">margin-left</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
        <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #ff6500<span class="token punctuation">;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
        <span class="token property">border-radius</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
        <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token selector">.form .submit:hover</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> #ff9900<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>required<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>用<span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>户<span class="token entity named-entity" title="&nbsp;">&amp;nbsp;</span>名：
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span>
          <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nameField<span class="token punctuation">"</span></span>
          <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nameField<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>用户名设置成功后不可修改<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tips<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tips<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>6-30位字母、数字或“_”，字母开头<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>required<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>登陆密码：
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>passWord<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6-20位字母或数字<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>strength<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>level1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>strength<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>level2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>strength<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>level3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>6-20位字母或数字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>required<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>确认密码：
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
          <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>confirmPsw<span class="token punctuation">"</span></span>
          <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>再次输入您的登录密码<span class="token punctuation">"</span></span>
        <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>注册<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">// 用户名输入框</span>
      <span class="token keyword">var</span> nameField <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'nameField'</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> tips <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'tips'</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> verifyName <span class="token operator">=</span> <span class="token boolean">false</span>

      nameField<span class="token punctuation">.</span><span class="token function-variable function">onblur</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-zA-Z]\w{5,29}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>nameField<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 正确</span>
          tips<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'用户名输入正确'</span>
          tips<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">'green'</span>
          verifyName <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 错误</span>
          tips<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'6-30位字母、数字或“_”，字母开头'</span>
          tips<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">'red'</span>
          verifyName <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 密码输入框</span>
      <span class="token keyword">var</span> passWord <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'passWord'</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> level1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'level1'</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> level2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'level2'</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> level3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'level3'</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> warning <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'warning'</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> verifyPsw <span class="token operator">=</span> <span class="token boolean">false</span>

      passWord<span class="token punctuation">.</span><span class="token function-variable function">onblur</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-zA-Z0-9]{6,20}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>passWord<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 正确</span>
          warning<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span>
          verifyPsw <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>
            <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[0-9]{6,20}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>passWord<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">||</span>
            <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-z]{6,20}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>passWord<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">||</span>
            <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[A-Z]{6,20}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>passWord<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
          <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 密码强度低</span>
            level1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'red'</span>
            level2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'rgb(209, 207, 207)'</span>
            level3<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'rgb(209, 207, 207)'</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
            <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[0-9a-z]{6,20}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>passWord<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">||</span>
            <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[0-9A-Z]{6,20}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>passWord<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token operator">||</span>
            <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[a-zA-Z]{6,20}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>passWord<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
          <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 密码强度一般</span>
            level1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'red'</span>
            level2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'orange'</span>
            level3<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'rgb(209, 207, 207)'</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 密码强度高</span>
            level1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'red'</span>
            level2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'orange'</span>
            level3<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'green'</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 错误</span>
          verifyPsw <span class="token operator">=</span> <span class="token boolean">false</span>
          warning<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'inline'</span>
          level1<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'rgb(209, 207, 207)'</span>
          level2<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'rgb(209, 207, 207)'</span>
          level3<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'rgb(209, 207, 207)'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 密码确认框</span>
      <span class="token keyword">var</span> confirmPsw <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'confirmPsw'</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> dif <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'dif'</span><span class="token punctuation">)</span>
      <span class="token keyword">var</span> verifyConfirm <span class="token operator">=</span> <span class="token boolean">false</span>

      confirmPsw<span class="token punctuation">.</span><span class="token function-variable function">onblur</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>confirmPsw<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 空</span>
          dif<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'输入框不能为空'</span>
          dif<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">'red'</span>
          verifyConfirm <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>confirmPsw<span class="token punctuation">.</span>value <span class="token operator">!=</span> passWord<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 不一致</span>
          dif<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'两次密码输入不一致，请重新输入'</span>
          dif<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">'red'</span>
          verifyConfirm <span class="token operator">=</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 一致</span>
          dif<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'两次输入一致'</span>
          dif<span class="token punctuation">.</span>style<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">'green'</span>
          verifyConfirm <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 注册按钮</span>
      <span class="token keyword">var</span> submit <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">)</span>

      submit<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>verifyName <span class="token operator">&amp;&amp;</span> verifyPsw <span class="token operator">&amp;&amp;</span> verifyConfirm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 满足条件</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'信息填写正确'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 不满足条件</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'请填写正确的信息'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


