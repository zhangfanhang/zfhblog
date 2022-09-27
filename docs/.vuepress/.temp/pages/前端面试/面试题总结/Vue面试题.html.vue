<template><div><p><a href="https://juejin.cn/post/6961222829979697165" target="_blank" rel="noopener noreferrer">最全的 Vue 面试题+详解答案<ExternalLinkIcon/></a></p>
<h2 id="vue-和-原生-js-jquery-的区别" tabindex="-1"><a class="header-anchor" href="#vue-和-原生-js-jquery-的区别" aria-hidden="true">#</a> Vue 和 原生 js(jquery) 的区别？</h2>
<p>原生 js、jQuery：jQuery 只是对原生 js 的 API 进行了封装，操作更加方便，但是数据和视图层没有分开，本质上还是要操作 DOM 实现逻辑。</p>
<p>vue：不仅对 js 的 API 实现了封装，还实现了其他功能，使数据和视图层分开，通过数据驱动，操作的是数据，而不是 DOM，能让开发者更加关注到数据上</p>
<h2 id="说说-vue-的优点和缺点-或者项目为什么选择使用-vue" tabindex="-1"><a class="header-anchor" href="#说说-vue-的优点和缺点-或者项目为什么选择使用-vue" aria-hidden="true">#</a> 说说 Vue 的优点和缺点(或者项目为什么选择使用 Vue)?</h2>
<p><strong>优点</strong>：</p>
<ol>
<li>
<p>视图数据分离，<code v-pre>声明式编码</code>，让操作者<strong>不再直接操作 DOM 对象</strong>，有更多的去时间思考业务逻辑</p>
</li>
<li>
<p>传统方式编写，依赖关系混乱，代码复用率不高。<code v-pre>组件化</code>可以<strong>提高代码可阅读性以及代码复用率</strong></p>
</li>
<li>
<p><code v-pre>虚拟DOM</code>+优秀的<code v-pre>diff算法</code>，尽量<strong>复用 DOM 节点</strong></p>
</li>
</ol>
<p>4.<code v-pre>渐进式框架</code>，只需一个轻量小巧的<code v-pre>核心库</code>，可以引入各式各样的<code v-pre>Vue插件</code>进行扩展。</p>
<p><strong>缺点</strong>：</p>
<p>Vue 是<code v-pre>单页面应用</code>对于搜索引擎不友好，影响<code v-pre>SEO</code>，比如两个 Vue 页面(路由)它的路径是：index.html#aaa 和 index.html#bbb，但对于搜索引擎来说就是一个页面 index.html,这时搜索引擎就无法收录你的页面</p>
<h2 id="vue2-和-vue3-的响应式区别" tabindex="-1"><a class="header-anchor" href="#vue2-和-vue3-的响应式区别" aria-hidden="true">#</a> Vue2 和 Vue3 的响应式区别？</h2>
<p><strong>Vue2</strong>:</p>
<p>基于<code v-pre>Object.defineProperty</code>，<strong>不具备监听数组的能力</strong>，需要<strong>重新定义数组的原型</strong>来达到响应式</p>
<p><code v-pre>Object.defineProperty</code> <strong>无法检测到对象属性的添加和删除</strong></p>
<p>由于 Vue 会在<strong>初始化实例时</strong>对属性执行<code v-pre>getter</code>/<code v-pre>setter</code>转化，所有属性必须在 data 对象上存在才能让 Vue 将它转换为响应式</p>
<p><code v-pre>深度监听</code>需要一次性递归，对性能影响比较大</p>
<p><strong>Vue3</strong>:</p>
<p>基于<code v-pre>Proxy</code>和<code v-pre>Reflect</code>，<strong>可以原生监听数组，可以监听对象属性的添加和删除</strong></p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<ul>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank" rel="noopener noreferrer">Proxy<ExternalLinkIcon/></a>对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。</p>
</li>
<li>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect" target="_blank" rel="noopener noreferrer">Reflect<ExternalLinkIcon/></a>是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 proxy handlers (en-US)的方法相同。Reflect 不是一个函数对象，因此它是不可构造的。</p>
</li>
</ul>
</div>
<p>不需要一次性遍历<code v-pre>data</code>的属性，可以显著提高性能</p>
<p>因为<code v-pre>Proxy</code>是<code v-pre>ES6</code>新增的属性，有些浏览器还不支持,只能兼容到<code v-pre>IE11</code></p>
<div class="custom-container tip">
<p class="custom-container-title">参考</p>
<p><a href="https://juejin.cn/post/6982001553540382733" target="_blank" rel="noopener noreferrer">你真的了解 vue2.0 和 vue3.0 响应式原理区别吗？<ExternalLinkIcon/></a></p>
</div>
<h2 id="vue-router-有几种路由方式-区别" tabindex="-1"><a class="header-anchor" href="#vue-router-有几种路由方式-区别" aria-hidden="true">#</a> vue-router 有几种路由方式？区别？</h2>
<p><code v-pre>hash</code>：url#后面的东西就是 hash，hash 虽然出现再 URL 中，但不会被包含再 HTTP 中，对后端完全没有影响，因此改变 hash 不会重新加载页面（兼容性好，但不美观）</p>
<p><code v-pre>history</code>:利用 HTML5 History 中新增的 pushState()和 replaceState()当调用它们修改浏览器的历史记录栈后，虽然当前 url 改变了，但浏览器不会刷新页面。这就为单页面应用前端路由“更新视图但不重新请求页面”提供了基础，虽然美观，但是刷新会出现 404，需要后端进行配置</p>
<h2 id="讲一下-vuex-的工作原理" tabindex="-1"><a class="header-anchor" href="#讲一下-vuex-的工作原理" aria-hidden="true">#</a> 讲一下 VueX 的工作原理？</h2>
<ol>
<li>Vuex 本质是一个对象</li>
<li>Vuex 对象有两个属性，一个是 install 方法，一个是 Store 这个类</li>
<li>install 方法的作用是将 store 这个实例挂载到所有的组件上，注意是同一个 store 实例。</li>
<li>Store 这个类拥有 commit，dispatch 这些方法，Store 类里将传入的 state 包装成 data，作为 new Vue 的参数，从而实现了 state 值的响应式。</li>
</ol>
<div class="custom-container tip">
<p class="custom-container-title">参考</p>
<p><a href="https://juejin.cn/post/6855474001838342151" target="_blank" rel="noopener noreferrer">手写 Vuex 核心原理，再也不怕面试官问我 Vuex 原理<ExternalLinkIcon/></a></p>
</div>
<h2 id="vue-里面-v-if、v-show-的区别" tabindex="-1"><a class="header-anchor" href="#vue-里面-v-if、v-show-的区别" aria-hidden="true">#</a> Vue 里面 v-if、v-show 的区别</h2>
<ul>
<li>v-if 在编译过程中会被转化成三元表达式,条件不满足时不渲染此节点。</li>
<li>v-show 会被编译成指令，条件不满足时控制样式将对应节点隐藏 （display:none）</li>
</ul>
<p>使用场景</p>
<p>v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景
v-show 适用于需要非常频繁切换条件的场景</p>
<h2 id="computed-和-watch-的区别" tabindex="-1"><a class="header-anchor" href="#computed-和-watch-的区别" aria-hidden="true">#</a> computed 和 watch 的区别</h2>
<h3 id="计算属性-computed" tabindex="-1"><a class="header-anchor" href="#计算属性-computed" aria-hidden="true">#</a> 计算属性 computed</h3>
<ol>
<li><code v-pre> 支持缓存</code>，只有<code v-pre>依赖数据发生改变</code>，才会重新进行计算</li>
<li><code v-pre>不支持异步</code>，当 computed 内有异步操作时无效，无法监听数据的变化</li>
<li>computed 属性值会<code v-pre>默认走缓存</code>，计算属性是基于它们的响应式依赖进行缓存的，也就是<code v-pre>基于data中</code>声明过或者<code v-pre>父组件传递的props中的数据</code>通过计算得到的值，只在相关响应式依赖发生改变时它们才会重新求值。</li>
<li>如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用 computed</li>
<li>如果 computed 属性属性值是函数，那么默认会走 get 方法；函数的<code v-pre>返回值就是属性的属性值</code>；在 computed 中的，属性都有一个 get 和一个 set 方法，当数据变化时，调用 set 方法</li>
</ol>
<h3 id="侦听属性-watch" tabindex="-1"><a class="header-anchor" href="#侦听属性-watch" aria-hidden="true">#</a> 侦听属性 watch</h3>
<ol>
<li><code v-pre>不支持缓存，数据发生改变，会直接触发</code>相应的操作</li>
<li><code v-pre>watch支持异步</code></li>
<li>监听的函数接收<code v-pre>两个参数，第一个参数是最新的值；第二个参数是输入之前的值</code></li>
<li>当一个属性发生变化时，需要执行对应的操作；<code v-pre>一对多</code></li>
<li>监听数据必须是<code v-pre>data中声明过</code>或者父组件传递过来的<code v-pre>props中的数据</code>，当数据变化时，触发其他操作，函数有两个参数，
<ol>
<li><code v-pre>immediate</code>：组件加载立即触发回调函数执行</li>
<li><code v-pre>deep</code>: 深度监听，为了发现<strong>对象内部值</strong>的变化，复杂类型的数据时使用，例如数组中的对象内容的改变，注意监听数组的变动不需要这么做。注意：deep 无法监听到数组的变动(通过数字下标修改数组中元素的值)和对象的新增，参考 vue 如何监测数据的表动,只有以响应式的方式触发才会被监听到</li>
</ol>
</li>
</ol>
<p>作者：小只前端攻城狮
链接：<a href="https://juejin.cn/post/6977363418273562660" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6977363418273562660<ExternalLinkIcon/></a>
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p>
<h2 id="vue-组件通讯有哪几种方式" tabindex="-1"><a class="header-anchor" href="#vue-组件通讯有哪几种方式" aria-hidden="true">#</a> Vue 组件通讯有哪几种方式</h2>
<ul>
<li>
<p><code v-pre>props</code> 和 <code v-pre>$emit</code>:父组件向子组件传递数据是通过 <code v-pre>props</code> 传递的，子组件给父组件传递数据是通过<code v-pre>$emit</code> 触发事件来做到的</p>
</li>
<li>
<p><code v-pre>$parent</code>,<code v-pre>$children</code> 获取当前组件的父组件和当前组件的子组件</p>
</li>
<li>
<p><code v-pre>$attrs</code> 和<code v-pre>$listeners</code>,适用于爷孙组件通讯，具体用法参考： <a href="https://zfhblog.top/qian-duan-kai-fa/qian-duan-kuang-jia/vue.js/vuezu-jian-hua-bian-cheng.html#inheritattrs-attrs-listeners" target="_blank" rel="noopener noreferrer">inheritattrs-attrs-listeners<ExternalLinkIcon/></a></p>
</li>
<li>
<p>父组件中通过 <code v-pre>provide</code> 来提供变量，然后在子组件中通过<code v-pre>inject</code>来注入变量。(官方不推荐在实际业务中使用，但是写组件库时很常用)</p>
</li>
<li>
<p><code v-pre>$refs</code> 获取组件实例</p>
</li>
<li>
<p><code v-pre>envetBus</code> 任意组件数据传递 这种情况下可以使用全局事件总线的方式</p>
</li>
<li>
<p><code v-pre>vueX</code>状态管理</p>
</li>
</ul>
<h2 id="谈一下对-vuex-的理解" tabindex="-1"><a class="header-anchor" href="#谈一下对-vuex-的理解" aria-hidden="true">#</a> 谈一下对 vuex 的理解</h2>
<p>vuex 是专门为 vue 提供的<code v-pre>全局状态管理系统</code>，用于多个组件中<code v-pre>数据共享</code>、<code v-pre>数据缓存</code> （无法持久化、内部核心原理是通过创造一个全局实例 new Vue）</p>
<p>主要包括以下几个模块：</p>
<ul>
<li>
<p>State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。</p>
</li>
<li>
<p>Getter：getters 可以认为是 store 的计算属性,就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。</p>
</li>
<li>
<p>Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。</p>
</li>
<li>
<p>Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。</p>
</li>
<li>
<p>Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。(<code v-pre>命名空间</code>)</p>
</li>
</ul>
<h2 id="vuex-中-mapstate、mapgetters、mapmutations、mapactions" tabindex="-1"><a class="header-anchor" href="#vuex-中-mapstate、mapgetters、mapmutations、mapactions" aria-hidden="true">#</a> Vuex 中 mapState、mapGetters、mapMutations、mapActions</h2>
<p><a href="https://zfhblog.top/qian-duan-kai-fa/qian-duan-kuang-jia/vue.js/vuex.html#%E5%9B%9B%E4%B8%AAmap%E6%96%B9%E6%B3%95%E7%9A%84%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">四个 map 方法的使用<ExternalLinkIcon/></a></p>
<h2 id="vue-set-和-vm-set" tabindex="-1"><a class="header-anchor" href="#vue-set-和-vm-set" aria-hidden="true">#</a> Vue.set()和 vm.$set()</h2>
<p>可以使原来<code v-pre>对象</code>和<code v-pre>数组</code>的<strong>无法监听</strong>变的可监听，<strong>使数据正常渲染</strong>。</p>
<h2 id="nexttick-是怎么可以获取到更新后的-dom-的" tabindex="-1"><a class="header-anchor" href="#nexttick-是怎么可以获取到更新后的-dom-的" aria-hidden="true">#</a> $nexttick 是怎么可以获取到更新后的 dom 的?</h2>
<p>vue 是依靠数据驱动视图更新的，该更新的过程是异步的。即：当侦听到你的数据发生变化时， Vue 将开启一个队列(该队列被 Vue 官方称为异步更新队列)。视图需要等队列中所有数据变化完成之后，再统一进行更新。</p>
<p>$nextTick(callback),这里的回调函数( callback)将在数据更新完成，视图更新完毕之后被调用</p>
<h2 id="vue-router-中-push-和-replace-的区别" tabindex="-1"><a class="header-anchor" href="#vue-router-中-push-和-replace-的区别" aria-hidden="true">#</a> vue-router 中 push 和 replace 的区别</h2>
<p>1.this.$router.push()</p>
<p>描述：跳转到不同的 url，但这个方法<strong>会向 history 栈添加一个记录</strong>，点击后退会<strong>返回到上一个页面</strong>。</p>
<p>2.this.$router.replace()</p>
<p>描述：同样是跳转到指定的 url，但是这个方法<strong>不会向 history 里面添加新的记录</strong>，点击返回，<strong>会跳转到上上一个页面</strong>。<strong>上一个记录是不存在的</strong>。</p>
<p>3.this.$router.go(n)</p>
<p>相对于当前页面向前或向后跳转多少个页面,类似 window.history.go(n)。n 可为正数可为负数。正数返回上一个页面</p>
<h2 id="项目中-vue-router-设置的是-history-模式-部署到服务器上要怎么处理" tabindex="-1"><a class="header-anchor" href="#项目中-vue-router-设置的是-history-模式-部署到服务器上要怎么处理" aria-hidden="true">#</a> 项目中 vue-router 设置的是 history 模式，部署到服务器上要怎么处理</h2>
<p>我在 koa2 项目中,使用中间件 <a href="https://www.npmjs.com/package/koa2-connect-history-api-fallback" target="_blank" rel="noopener noreferrer">koa2-connect-history-api-fallback <ExternalLinkIcon/></a>,它用于处理 vue-router 使用 history 模式返回 404 的问题</p>
<h2 id="mvvm-和-mvc-区别" tabindex="-1"><a class="header-anchor" href="#mvvm-和-mvc-区别" aria-hidden="true">#</a> mvvm 和 mvc 区别？</h2>
<p>几乎所有的 App 都只干这么一件事：将数据展示给用户看，并处理用户对界面的操作。
MVC 的思想：一句话描述就是 Controller 负责将 Model 的数据用 View 显示出来，换句话说就是在 Controller 里面把 Model 的数据赋值给 View。</p>
<div class="custom-container tip">
<p class="custom-container-title">参考</p>
<ul>
<li>
<p><a href="https://blog.csdn.net/qq_42068550/article/details/89480350" target="_blank" rel="noopener noreferrer">MVC 和 MVVM 的区别<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.jianshu.com/p/ad159a153c3c" target="_blank" rel="noopener noreferrer">MVC、MVP、MVVM 的区别及联系<ExternalLinkIcon/></a></p>
</li>
</ul>
</div>
</div></template>


