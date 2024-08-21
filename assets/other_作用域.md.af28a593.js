import{_ as s,o as a,c as n,X as l}from"./chunks/framework.a911dc49.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/作用域.md","filePath":"other/作用域.md","lastUpdated":1693384609000}'),p={name:"other/作用域.md"},o=l(`<blockquote><p>学习JavaScript不是最终目标，而是一个过程。还不了解JavaScript，但终将做到这一点。</p></blockquote><h2 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a=2;</span></span></code></pre></div><p>1.遇到var a ,编译器会询问作用域是否已经有一个该名称的变量存在于同一个作用域的集合中。如果是，编译器忽略该声明，继续进行编译；否则它会要求作用域在当前作用域的集合中声明一个新的变量，并命名为a。</p><p>2.接下来编译器会为引擎生成运行时所需的代码，这些代码被用来处理a = 2 这个赋值操作。引擎运行时会首先询问作用域，在当前的作用域集合中是否存在一个叫作a 的变量。如果是，引擎就会使用这个变量；如果否，引擎会继续查找该变量</p><p>如果引擎最终找到了a 变量，就会将2 赋值给它。否则引擎就会举手示意并抛出一个异常！</p><p>总结：变量的赋值操作会执行两个动作，首先编译器会在当前作用域中声明一个变量（如果之前没有声明过），然后在运行时引擎会在作用域中查找该变量，如果能够找到就会对它赋值。</p><h3 id="作用域嵌套" tabindex="-1">作用域嵌套 <a class="header-anchor" href="#作用域嵌套" aria-label="Permalink to &quot;作用域嵌套&quot;">​</a></h3><p>考虑以下代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo(a) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( a + b );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">foo( 2 ); // 4</span></span></code></pre></div><p><em>引擎：foo 的作用域兄弟，你见过b 吗？我需要对它进行RHS 引用。</em><em>作用域：听都没听过，走开。</em></p><p><em>引擎：foo 的上级作用域兄弟，咦？有眼不识泰山，原来你是全局作用域大哥，</em><em>太好了。你见过b 吗？我需要对它进行RHS 引用。</em><em>作用域：当然了，给你吧。</em></p><p>遍历嵌套作用域链的规则很简单：引擎从当前的执行作用域开始查找变量，如果找不到，就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都会停止。</p><h3 id="异常" tabindex="-1">异常 <a class="header-anchor" href="#异常" aria-label="Permalink to &quot;异常&quot;">​</a></h3><p>考虑如下代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo(a) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( a + b );</span></span>
<span class="line"><span style="color:#A6ACCD;">   b = a;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo( 2 );</span></span></code></pre></div><p>第一次对b 进行RHS 查询时是无法找到该变量的。也就是说，这是一个“未声明”的变量，因为在任何相关的作用域中都无法找到它。报ReferenceError 异常。如果RHS 查询找到了一个变量，但是你尝试对这个变量的值进行不合理的操作，比如试图对一个非函数类型的值进行函数调用，或着引用null 或undefined 类型的值中的属性，那么引擎会抛出另外一种类型的异常，叫作TypeError。</p><p>ReferenceError 同作用域判别失败相关，而TypeError 则代表作用域判别成功了，但是对结果的操作是非法或不合理的。</p><blockquote><p>tips：LHS 和RHS 的含义，在概念上最好将其理解为“赋值操作的目标是谁（LHS）”以及“谁是赋值操作的源头 （RHS）”。</p></blockquote><h2 id="函数作用域" tabindex="-1">函数作用域 <a class="header-anchor" href="#函数作用域" aria-label="Permalink to &quot;函数作用域&quot;">​</a></h2><h3 id="隐藏内部实现" tabindex="-1">隐藏内部实现 <a class="header-anchor" href="#隐藏内部实现" aria-label="Permalink to &quot;隐藏内部实现&quot;">​</a></h3><p>对函数的传统认知就是先声明一个函数，然后再向里面添加代码。但反过来想也可以带来一些启示：从所写的代码中挑选出一个任意的片段，然后用函数声明对它进行包装，实际上就是把这些代码“隐藏”起来了（也就是常说的封装）。</p><p>实际的结果就是在这个代码片段的周围创建了一个作用域气泡，也就是说这段代码中的任何声明（变量或函数）都将绑定在这个新创建的包装函数的作用域中，而不是先前所在的作用域中。换句话说，可以把变量和函数包裹在一个函数的作用域中，然后用这个作用域来“隐藏”它们。</p><p>有很多原因促成了这种基于作用域的隐藏方法。它们大都是从最小特权原则中引申出来的，也叫最小授权或最小露原则。这个原则是指在软件设计中，应该最小限度地暴露必要内容，而将其他内容都“隐藏”起来，比如某个模块或对象的API 设计。另外就是规避冲突，“隐藏”作用域中的变量和函数所带来的另一个好处，是可以避免同名标识符之间的冲突，两个标识符可能具有相同的名字但用途却不一样，无意间可能造成命名冲突。冲突会导致 变量的值被意外覆盖。</p><p>例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   function bar(a) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      i = 3; // 修改for 循环所属作用域中的i</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log( a + i );</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">   for (var i=0; i&lt;10; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      bar( i * 2 ); // 糟糕，无限循环了！</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo();</span></span></code></pre></div><p>bar(..) 内部的赋值表达式i = 3 意外地覆盖了声明在foo(..) 内部for 循环中的i。在这个例子中将会导致无限循环，因为i 被固定设置为3，永远满足小于10 这个条件。</p><h3 id="函数声明和函数表达式" tabindex="-1">函数声明和函数表达式 <a class="header-anchor" href="#函数声明和函数表达式" aria-label="Permalink to &quot;函数声明和函数表达式&quot;">​</a></h3><p>虽然这种技术可以解决一些问题，但是它并不理想，因为会导致一些额外的问题。首先，必须声明一个具名函数foo()，意味着foo 这个名称本身“污染”了所在作用域（在这个例子中是全局作用域）。其次，必须显式地通过函数名（foo()）调用这个函数才能运行其中的代码。</p><p>幸好，JavaScript 提供了能够同时解决这两个问题的方案</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">(function foo(){ // &lt;-- 添加这一行</span></span>
<span class="line"><span style="color:#A6ACCD;">   var a = 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( a ); // 3</span></span>
<span class="line"><span style="color:#A6ACCD;">})(); // &lt;-- 以及这一行</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( a ); // 2</span></span></code></pre></div><p>首先，包装函数的声明以 (function... 而不仅是以 function... 开始。尽管看上去这并不是一个很显眼的细节，但实际上却是非常重要的区别。函数会被当作函数表达式而不是一个标准的函数声明来处理。</p><p>区分函数声明和表达式最简单的方法是看function 关键字出现在声明中的位置（不仅仅是一行代码，而是整个声明中的位置）。如果function 是声明中的第一个词，那么就是一个函数声明，否则就是一个函数表达式。</p><h3 id="匿名和具名" tabindex="-1">匿名和具名 <a class="header-anchor" href="#匿名和具名" aria-label="Permalink to &quot;匿名和具名&quot;">​</a></h3><p>对于函数表达式你最熟悉的场景可能就是回调参数了，比如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">setTimeout( function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log(&quot;I waited 1 second!&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 1000 );</span></span></code></pre></div><p>这叫作匿名函数表达式，因为function().. 没有名称标识符。函数表达式可以是匿名的，而函数声明则不可以省略函数名——在JavaScript 的语法中这是非法的。</p><p>匿名函数表达式书写起来简单快捷，很多库和工具也倾向鼓励使用这种风格的代码。但是它也有几个缺点需要考虑。</p><ol><li>匿名函数在栈追踪中不会显示出有意义的函数名，使得调试很困难。</li><li>如果没有函数名，当函数需要引用自身时只能使用已经过期的arguments.callee 引用，比如在递归中。另一个函数需要引用自身的例子，是在事件触发后事件监听器需要解绑自身。</li><li>匿名函数省略了对于代码可读性/ 可理解性很重要的函数名。一个描述性的名称可以让代码不言自明。</li></ol><p>行内函数表达式非常强大且有用——匿名和具名之间的区别并不会对这点有任何影响。给函数表达式指定一个函数名可以有效解决以上问题。始终给函数表达式命名是一个最佳实践：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">setTimeout( function timeoutHandler() { // &lt;-- 快看，我有名字了！</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( &quot;I waited 1 second!&quot; );</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 1000 );</span></span></code></pre></div><h3 id="立即执行函数表达式" tabindex="-1">立即执行函数表达式 <a class="header-anchor" href="#立即执行函数表达式" aria-label="Permalink to &quot;立即执行函数表达式&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">(function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   var a = 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( a ); // 3</span></span>
<span class="line"><span style="color:#A6ACCD;">})();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( a ); // 2</span></span></code></pre></div><p>由于函数被包含在一对( ) 括号内部，因此成为了一个表达式，通过在末尾加上另外一个( ) 可以立即执行这个函数，比如(function foo(){ .. })()。第一个( ) 将函数变成表达式，第二个( ) 执行了这个函数。社区给它规定了一个术语：IIFE，代表立即执行函数表达式（Immediately Invoked Function Expression）；</p><p>函数名对IIFE 当然不是必须的，IIFE 最常见的用法是使用一个匿名函数表达式。虽然使用具名函数的IIFE 并不常见，但它具有上述匿名函数表达式的所有优势，因此也是一个值得推广的实践。</p><p>相较于传统的IIFE 形式，很多人都更喜欢另一个改进的形式：(function(){ .. }())。仔细观察其中的区别。第一形式中函数表达式被包含在( ) 中，然后在后面用另一个() 括号来调用。第二种形式中用来调用的() 括号被移进了用来包装的( ) 括号中。这两种形式在功能上是一致的。选择哪个全凭个人喜好。</p><p>IIFE 的另一个非常普遍的进阶用法是把它们当作函数调用并传递参数进去。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">(function IIFE( global ) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   var a = 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( a ); // 3</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( global.a ); // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">})( window );</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( a ); // 2</span></span></code></pre></div><h3 id="块作用域" tabindex="-1">块作用域 <a class="header-anchor" href="#块作用域" aria-label="Permalink to &quot;块作用域&quot;">​</a></h3><p>for ，let，闭包</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">for (var i=0; i&lt;10; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( i );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>我们在for 循环的头部直接定义了变量i，通常是因为只想在for 循环内部的上下文中使用i，而忽略了i 会被绑定在外部作用域（函数或全局）中的事实。</p><p>块作用域是一个用来对之前的最小授权原则进行扩展的工具，将代码从在函数中隐藏信息扩展为在块中隐藏信息。</p><blockquote><p>提升是指声明会被视为存在于其所出现的作用域的整个范围内。</p></blockquote><p>但是使用let 进行的声明不会在块作用域中进行提升。声明的代码被运行之前，声明并不“存在”。</p><p>另一个块作用域非常有用的原因和闭包及回收内存垃圾的回收机制相关。这里简要说明一下，而内部的实现原理，也就是闭包的机制</p><p>一个let 可以发挥优势的典型例子就是之前讨论的for 循环。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">for (let i=0; i&lt;10; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( i );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( i ); // ReferenceError</span></span></code></pre></div><p>for 循环头部的let 不仅将i 绑定到了for 循环的块中，事实上它将其重新绑定到了循环的每一个迭代中，确保使用上一个循环迭代结束时的值重新进行赋值。</p><p>下面通过另一种方式来说明每次迭代时进行重新绑定的行为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   let j;</span></span>
<span class="line"><span style="color:#A6ACCD;">   for (j=0; j&lt;10; j++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      let i = j; // 每个迭代重新绑定！</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log( i );</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>小结</p><p>函数不是唯一的作用域单元。块作用域指的是变量和函数不仅可以属于所处的作用域，也可以属于某个代码块（通常指{ .. } 内部）。</p><h2 id="提升" tabindex="-1">提升 <a class="header-anchor" href="#提升" aria-label="Permalink to &quot;提升&quot;">​</a></h2><p>考虑以下代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">var a;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( a );</span></span></code></pre></div><p>考虑另外一段代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log( a );</span></span>
<span class="line"><span style="color:#A6ACCD;">var a = 2;</span></span></code></pre></div><p>结果分别是 2、undefined</p><p>只有声明本身会被提升，而赋值或其他运行逻辑会留在原地。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">foo();</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( a ); // undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">   var a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>foo 函数的声明（这个例子还包括实际函数的隐含值）被提升了，因此第一行中的调用可以正常执行。</p><p>因此这段代码实际上会被理解为下面的形式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   var a;</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( a ); // undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">   a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo();</span></span></code></pre></div><p>函数声明会被提升，但是函数表达式却不会被提升。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">foo(); // 不是ReferenceError, 而是TypeError!</span></span>
<span class="line"><span style="color:#A6ACCD;">var foo = function bar() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div><p>这段程序中的变量标识符foo() 被提升并分配给所在作用域（在这里是全局作用域），因此foo() 不会导致ReferenceError。但是foo 此时并没有赋值（如果它是一个函数声明而不是函数表达式，那么就会赋值）。foo() 由于对undefined 值进行函数调用而导致非法操作，因此抛出TypeError 异常。</p><p>同时也要记住，即使是具名的函数表达式，名称标识符在赋值之前也无法在所在作用域中使用：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">foo(); // TypeError</span></span>
<span class="line"><span style="color:#A6ACCD;">bar(); // ReferenceError</span></span>
<span class="line"><span style="color:#A6ACCD;">var foo = function bar() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div><p>这个代码片段经过提升后，实际上会被理解为以下形式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var foo;</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(); // TypeError</span></span>
<span class="line"><span style="color:#A6ACCD;">bar(); // ReferenceError</span></span>
<span class="line"><span style="color:#A6ACCD;">foo = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   var bar = ...self...</span></span>
<span class="line"><span style="color:#A6ACCD;">   // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="函数优先" tabindex="-1">函数优先 <a class="header-anchor" href="#函数优先" aria-label="Permalink to &quot;函数优先&quot;">​</a></h3><blockquote><p>函数声明和变量声明都会被提升。但是一个值得注意的细节（这个细节可以出现在有多个“重复”声明的代码中）是函数会首先被提升，然后才是变量。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">foo(); // 1</span></span>
<span class="line"><span style="color:#A6ACCD;">var foo;</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( 1 );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( 2 );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div><p>会输出1 而不是2 ！这个代码片段会被引擎理解为如下形式：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( 1 );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(); // 1</span></span>
<span class="line"><span style="color:#A6ACCD;">foo = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( 2 );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span></code></pre></div><p>注意，var foo 尽管出现在function foo()... 的声明之前，但它是重复的声明（因此被忽略了），因为函数声明会被提升到普通变量之前。</p><h2 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   var a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">   function bar() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log( a ); // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">   bar();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo();</span></span></code></pre></div><p>这段代码看起来和嵌套作用域中的示例代码很相似。基于词法作用域的查找规则，函数bar() 可以访问外部作用域中的变量a（这个例子中的是一个RHS 引用查询）。</p><p>这是闭包吗？</p><p>技术上来讲，也许是。但根据前面的定义，确切地说并不是。我认为最准确地用来解释bar() 对a 的引用的方法是词法作用域的查找规则，而这些规则只是闭包的一部分。（但却是非常重要的一部分！）</p><p>下面我们来看一段代码，清晰地展示了闭包：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   var a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">   function bar() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log( a );</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">   return bar;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var baz = foo();</span></span>
<span class="line"><span style="color:#A6ACCD;">baz(); // 2 —— 朋友，这就是闭包的效果。</span></span></code></pre></div><p>函数bar() 的词法作用域能够访问foo() 的内部作用域。然后我们将bar() 函数本身当作一个值类型进行传递。在这个例子中，我们将bar 所引用的函数对象本身当作返回值。</p><p>在foo() 执行后，其返回值（也就是内部的bar() 函数）赋值给变量baz 并调用baz()，实际上只是通过不同的标识符引用调用了内部的函数bar()。</p><p>bar() 显然可以被正常执行。但是在这个例子中，它在自己定义的词法作用域以外的地方执行。</p><p>在foo() 执行后，通常会期待foo() 的整个内部作用域都被销毁，因为我们知道引擎有垃圾回收器用来释放不再使用的内存空间。由于看上去foo() 的内容不会再被使用，所以很自然地会考虑对其进行回收。</p><p>而闭包的“神奇”之处正是可以阻止这件事情的发生。事实上内部作用域依然存在，因此没有被回收。谁在使用这个内部作用域？原来是bar() 本身在使用。</p><p>拜bar() 所声明的位置所赐，它拥有涵盖foo() 内部作用域的闭包，使得该作用域能够一直存活，以供bar() 在之后任何时间进行引用。</p><blockquote><p>bar() 依然持有对该作用域的引用，而这个引用就叫作闭包。</p><p>这个函数在定义时的词法作用域以外的地方被调用。闭包使得函数可以继续访问定义时的 词法作用域。</p></blockquote><p>无论使用何种方式对函数类型的值进行传递，当函数在别处被调用时都可以观察到 闭包。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   var a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">   function baz() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log( a ); // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">   bar( baz );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function bar(fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   fn(); // 这就是闭包！</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>传递函数当然也可以是间接的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var fn;</span></span>
<span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   var a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">   function baz() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log( a );</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">   fn = baz; // 将baz 分配给全局变量</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function bar() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   fn(); // 这就是闭包！</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo();</span></span>
<span class="line"><span style="color:#A6ACCD;">bar(); // 2</span></span></code></pre></div><p>无论通过何种手段将内部函数传递到所在的词法作用域以外，它都会持有对原始定义作用域的引用，无论在何处执行这个函数都会使用闭包。</p><p>通常认为IIFE 是典型的闭包例子，但根据先前对闭包的定义，我并不是很同意这个观点。</p><h3 id="iife和闭包" tabindex="-1">IIFE和闭包 <a class="header-anchor" href="#iife和闭包" aria-label="Permalink to &quot;IIFE和闭包&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">(function IIFE() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( a );</span></span>
<span class="line"><span style="color:#A6ACCD;">})();</span></span></code></pre></div><p>虽然这段代码可以正常工作，但严格来讲它并不是闭包。为什么？因为函数（示例代码中的IIFE）并不是在它本身的词法作用域以外执行的。它在定义时所在的作用域中执行（而外部作用域，也就是全局作用域也持有a）。a 是通过普通的词法作用域查找而非闭包被发现的。</p><p>尽管技术上来讲，闭包是发生在定义时的，但并不非常明显，就好像六祖慧能所说：“既非风动，亦非幡动，仁者心动耳。”。</p><p>尽管IIFE 本身并不是观察闭包的恰当例子，但它的确创建了闭包，并且也是最常用来创建可以被封闭起来的闭包的工具。因此IIFE 的确同闭包息息相关，即使本身并不会真的使用闭包。</p><h3 id="循环和闭包" tabindex="-1">循环和闭包 <a class="header-anchor" href="#循环和闭包" aria-label="Permalink to &quot;循环和闭包&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">for (var i=1; i&lt;=5; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   setTimeout( function timer() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log( i );</span></span>
<span class="line"><span style="color:#A6ACCD;">   }, i*1000 );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>正常情况下，我们对这段代码行为的预期是分别输出数字1~5，每秒一次，每次一个。</p><p>但实际上，这段代码在运行时会以每秒一次的频率输出五次6。</p><p>首先解释6 是从哪里来的。这个循环的终止条件是i 不再&lt;=5。条件首次成立时i 的值是6。因此，输出显示的是循环结束时i 的最终值。</p><p>仔细想一下，这好像又是显而易见的，延迟函数的回调会在循环结束时才执行。事实上，当定时器运行时即使每个迭代中执行的是setTimeout(.., 0)，所有的回调函数依然是在循环结束后才会被执行，因此会每次输出一个6 出来。</p><p>这里引伸出一个更深入的问题，代码中到底有什么缺陷导致它的行为同语义所暗示的不一致呢？</p><p>缺陷是我们试图假设循环中的每个迭代在运行时都会给自己“捕获”一个i 的副本。但是根据作用域的工作原理，实际情况是尽管循环中的五个函数是在各个迭代中分别定义的，但是它们都被封闭在一个共享的全局作用域中，因此实际上只有一个i。</p><p>这样说的话，当然所有函数共享一个i 的引用。循环结构让我们误以为背后还有更复杂的机制在起作用，但实际上没有。如果将延迟函数的回调重复定义五次，完全不使用循环，那它同这段代码是完全等价的。</p><p>下面回到正题。缺陷是什么？我们需要更多的闭包作用域，特别是在循环的过程中每个迭代都需要一个闭包作用域。</p><p>IIFE 会通过声明并立即执行一个函数来创建作用域。我们来试一下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">for (var i=1; i&lt;=5; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   (function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout( function timer() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log( i );</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, i*1000 );</span></span>
<span class="line"><span style="color:#A6ACCD;">   })();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>这样不行。但是为什么呢？我们现在显然拥有更多的词法作用域了。的确每个延迟函数都会将IIFE 在每次迭代中创建的作用域封闭起来。</p><p>如果作用域是空的，那么仅仅将它们进行封闭是不够的。仔细看一下，我们的IIFE 只是一个什么都没有的空作用域。它需要包含一点实质内容才能为我们所用。</p><p>它需要有自己的变量，用来在每个迭代中储存i 的值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">for (var i=1; i&lt;=5; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   (function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      var j = i;</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout( function timer() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log( j );</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, j*1000 );</span></span>
<span class="line"><span style="color:#A6ACCD;">   })();</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>可以对这段代码进行一些改进：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">for (var i=1; i&lt;=5; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   (function(j) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      setTimeout( function timer() {</span></span>
<span class="line"><span style="color:#A6ACCD;">         console.log( j );</span></span>
<span class="line"><span style="color:#A6ACCD;">      }, j*1000 );</span></span>
<span class="line"><span style="color:#A6ACCD;">   })( i );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>仔细思考我们对前面的解决方案的分析。我们使用IIFE 在每次迭代时都创建一个新的作用域。换句话说，每次迭代我们都需要一个块作用域。</p><p>本质上这是将一个块转换成一个可以被关闭的作用域。因此，下面这些代码就可以正常运行了：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">for (var i=1; i&lt;=5; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   let j = i; // 是的，闭包的块作用域！</span></span>
<span class="line"><span style="color:#A6ACCD;">   setTimeout( function timer() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log( j );</span></span>
<span class="line"><span style="color:#A6ACCD;">   }, j*1000 );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>for 循环头部的let 声明还会有一个特殊的行为。这个行为指出变量在循环过程中不止被声明一次，每次迭代都会声明。随后的每个迭代都会使用上一个迭代结束时的值来初始化这个变量。</p><h3 id="模块" tabindex="-1">模块 <a class="header-anchor" href="#模块" aria-label="Permalink to &quot;模块&quot;">​</a></h3><p>continue。。。</p><blockquote><p>当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时就产生了闭包。</p></blockquote><p>作用域似乎暗示有很好的理由让作用域作为一个在运行时就被动态确定的形式，而不是在写代码时进行静态确</p><h2 id="关于this" tabindex="-1">关于this <a class="header-anchor" href="#关于this" aria-label="Permalink to &quot;关于this&quot;">​</a></h2><p>太拘泥于“this”的字面意思就会产生一些误解。有两种常见的对于this 的解释，但是它们都是错误的。</p><ol><li>指向自身</li></ol><p>人们很容易把this 理解成指向函数自身，这个推断从英语的语法角度来说是说得通的。那么为什么需要从函数内部引用函数自身呢？常见的原因是递归（从函数内部调用这个函数）或者可以写一个在第一次被调用后自己解除绑定的事件处理器。</p><p>我们想要记录一下函数foo 被调用的次数，思考一下下面的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo(num) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		console.log( &quot;foo: &quot; + num );</span></span>
<span class="line"><span style="color:#A6ACCD;">		// 记录foo 被调用的次数</span></span>
<span class="line"><span style="color:#A6ACCD;">		this.count++;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	foo.count = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">	var i;</span></span>
<span class="line"><span style="color:#A6ACCD;">	for (i=0; i&lt;10; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">		if (i &gt; 5) {</span></span>
<span class="line"><span style="color:#A6ACCD;">			foo( i );</span></span>
<span class="line"><span style="color:#A6ACCD;">		}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;">	// foo: 6</span></span>
<span class="line"><span style="color:#A6ACCD;">	// foo: 7</span></span>
<span class="line"><span style="color:#A6ACCD;">	// foo: 8</span></span>
<span class="line"><span style="color:#A6ACCD;">	// foo: 9</span></span>
<span class="line"><span style="color:#A6ACCD;">	// foo 被调用了多少次？</span></span>
<span class="line"><span style="color:#A6ACCD;">	console.log( foo.count ); // 0</span></span></code></pre></div><p>console.log 语句产生了4 条输出，证明foo(..) 确实被调用了4 次，但是foo.count 仍然是0。显然从字面意思来理解this 是错误的。</p><p>执行foo.count = 0 时，的确向函数对象foo 添加了一个属性count。但是函数内部代码this.count 中的this 并不是指向那个函数对象，所以虽然属性名相同，根对象却并不相同，困惑随之产生。</p><p>如果我增加的count 属性和预期的不一样，那我增加的是哪个count ？实际上，这段代码在无意中创建了一个全局变量count</p><p>思考一下下面这两个函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   foo.count = 4; // foo 指向它自身</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout( function(){</span></span>
<span class="line"><span style="color:#A6ACCD;">   // 匿名（没有名字的）函数无法指向自身</span></span>
<span class="line"><span style="color:#A6ACCD;">}, 10 );</span></span></code></pre></div><p>第一个函数被称为具名函数，在它内部可以使用foo 来引用自身。</p><p>但是在第二个例子中，传入setTimeout(..) 的回调函数没有名称标识符（这种函数被称为 匿名函数），因此无法从函数内部引用自身。</p><p>所以，对于我们的例子来说，另一种解决方法是使用foo 标识符替代this 来引用函数对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo(num) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( &quot;foo: &quot; + num );</span></span>
<span class="line"><span style="color:#A6ACCD;">   // 记录foo 被调用的次数</span></span>
<span class="line"><span style="color:#A6ACCD;">   foo.count++;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo.count=0</span></span>
<span class="line"><span style="color:#A6ACCD;">var i;</span></span>
<span class="line"><span style="color:#A6ACCD;">for (i=0; i&lt;10; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   if (i &gt; 5) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      foo( i );</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo: 6</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo: 7</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo: 8</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo: 9</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo 被调用了多少次？</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( foo.count ); // 4</span></span></code></pre></div><p>然而，这种方法同样回避了this 的问题，并且完全依赖于变量foo 的词法作用域。另一种方法是强制this 指向foo 函数对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo(num) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( &quot;foo: &quot; + num );</span></span>
<span class="line"><span style="color:#A6ACCD;">   // 记录foo 被调用的次数</span></span>
<span class="line"><span style="color:#A6ACCD;">   // 注意，在当前的调用方式下（参见下方代码），this 确实指向foo</span></span>
<span class="line"><span style="color:#A6ACCD;">   this.count++;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo.count = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">var i;</span></span>
<span class="line"><span style="color:#A6ACCD;">for (i=0; i&lt;10; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   if (i &gt; 5) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 使用call(..) 可以确保this 指向函数对象foo 本身</span></span>
<span class="line"><span style="color:#A6ACCD;">      foo.call( foo, i );</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo: 6</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo: 7</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo: 8</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo: 9</span></span>
<span class="line"><span style="color:#A6ACCD;">// foo 被调用了多少次？</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( foo.count ); // 4</span></span></code></pre></div><p>这次我们接受了this，没有回避它。</p><p>​ 2.第二种常见的误解是，this 指向函数的作用域。这个问题有点复杂，因为在某种情况下它是正确的，但是在其 他情况下它却是错误的。</p><p>需要明确的是，this 在任何情况下都不指向函数的词法作用域。在JavaScript 内部，作用域确实和对象类似，可见的标识符都是它的属性。但是作用域“对象”无法通过JavaScript代码访问，它存在于JavaScript 引擎内部。</p><p>思考一下下面的代码，它试图（但是没有成功）跨越边界，使用this 来隐式引用函数的词法作用域：</p><h3 id="this到底是什么" tabindex="-1">this到底是什么 <a class="header-anchor" href="#this到底是什么" aria-label="Permalink to &quot;this到底是什么&quot;">​</a></h3><p>this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。</p><p>当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。this 就是记录的其中一个属性，会在函数执行的过程中用到。</p><h4 id="调用位置" tabindex="-1">调用位置 <a class="header-anchor" href="#调用位置" aria-label="Permalink to &quot;调用位置&quot;">​</a></h4><p>调用位置就是函数在代码中被调用的位置（而不是声明的位置）</p><h4 id="绑定规则" tabindex="-1">绑定规则 <a class="header-anchor" href="#绑定规则" aria-label="Permalink to &quot;绑定规则&quot;">​</a></h4><h5 id="默认绑定" tabindex="-1">默认绑定 <a class="header-anchor" href="#默认绑定" aria-label="Permalink to &quot;默认绑定&quot;">​</a></h5><p>首先要介绍的是最常用的函数调用类型：独立函数调用。可以把这条规则看作是无法应用其他规则时的默认规则。</p><p>思考一下下面的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( this.a );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(); // 2</span></span></code></pre></div><p>你应该注意到的第一件事是，声明在全局作用域中的变量（比如var a = 2）就是全局对象的一个同名属性。它们本质上就是同一个东西，并不是通过复制得到的，就像一个硬币的两面一样。</p><p>接下来我们可以看到当调用foo() 时，this.a 被解析成了全局变量a。为什么？因为在本例中，函数调用时应用了this 的默认绑定，因此this 指向全局对象。</p><p>那么我们怎么知道这里应用了默认绑定呢？可以通过分析调用位置来看看foo() 是如何调用的。在代码中，foo() 是直接使用不带任何修饰的函数引用进行调用的，因此只能使用默认绑定，无法应用其他规则。</p><p>如果使用严格模式（strict mode），那么全局对象将无法使用默认绑定，因此this 会绑定到undefined：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   &quot;use strict&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( this.a );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var a = 2;</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(); // TypeError: Cannot read property &#39;a&#39; of undefined</span></span></code></pre></div><p>这里有一个微妙但是非常重要的细节，虽然this 的绑定规则完全取决于调用位置，但是只有foo() 运行在非strict mode 下时，默认绑定才能绑定到全局对象；严格模式下与foo()的调用位置无关：</p><h5 id="隐式绑定" tabindex="-1">隐式绑定 <a class="header-anchor" href="#隐式绑定" aria-label="Permalink to &quot;隐式绑定&quot;">​</a></h5><p>思考下面的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( this.a );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">   foo: foo</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">obj.foo(); // 2</span></span></code></pre></div><p>首先需要注意的是foo() 的声明方式，及其之后是如何被当作引用属性添加到obj 中的。但是无论是直接在obj 中定义还是先定义再添加为引用属性，这个函数严格来说都不属于obj 对象。</p><p>然而，调用位置会使用obj 上下文来引用函数，因此你可以说函数被调用时obj 对象“拥有”或者“包含”它。</p><p>无论你如何称呼这个模式，当foo() 被调用时，它的落脚点确实指向obj 对象。当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this 绑定到这个上下文对象。因为调用foo() 时this 被绑定到obj，因此this.a 和obj.a 是一样的。</p><p>对象属性引用链中只有最顶层或者说最后一层会影响调用位置。举例来说：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( this.a );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj2 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a: 42,</span></span>
<span class="line"><span style="color:#A6ACCD;">   foo: foo</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj1 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">   obj2: obj2</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">obj1.obj2.foo(); // 42</span></span></code></pre></div><p>隐式丢失</p><p>一个最常见的this 绑定问题就是被隐式绑定的函数会丢失绑定对象，也就是说它会应用默认绑定，从而把this 绑定到全局对象或者undefined 上，取决于是否是严格模式。</p><p>思考下面的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( this.a );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">   foo: foo</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">var bar = obj.foo; // 函数别名！</span></span>
<span class="line"><span style="color:#A6ACCD;">var a = &quot;oops, global&quot;; // a 是全局对象的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">bar(); // &quot;oops, global&quot;</span></span></code></pre></div><p>虽然bar 是obj.foo 的一个引用，但是实际上，它引用的是foo 函数本身，因此此时的bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。</p><p>一种更微妙、更常见并且更出乎意料的情况发生在传入回调函数时：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( this.a );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">function doFoo(fn) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   // fn 其实引用的是foo</span></span>
<span class="line"><span style="color:#A6ACCD;">   fn(); // &lt;-- 调用位置！</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">   foo: foo</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">var a = &quot;oops, global&quot;; // a 是全局对象的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">doFoo( obj.foo ); // &quot;oops, global&quot;</span></span></code></pre></div><p>参数传递其实就是一种隐式赋值，因此我们传入函数时也会被隐式赋值，所以结果和上一个例子一样。</p><p>如果把函数传入语言内置的函数而不是传入你自己声明的函数，会发生什么呢？结果是一样的，没有区别：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( this.a );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">   foo: foo</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">var a = &quot;oops, global&quot;; // a 是全局对象的属性</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout( obj.foo, 100 ); // &quot;oops, global&quot;</span></span></code></pre></div><p>JavaScript 环境中内置的setTimeout() 函数实现和下面的伪代码类似：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function setTimeout(fn,delay) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   // 等待delay 毫秒</span></span>
<span class="line"><span style="color:#A6ACCD;">   fn(); // &lt;-- 调用位置！</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h5 id="显式绑定" tabindex="-1">显式绑定 <a class="header-anchor" href="#显式绑定" aria-label="Permalink to &quot;显式绑定&quot;">​</a></h5><p>就像我们刚才看到的那样，在分析隐式绑定时，我们必须在一个对象内部包含一个指向函数的属性，并通过这个属性间接引用函数，从而把this 间接（隐式）绑定到这个对象上。</p><p>那么如果我们不想在对象内部包含函数引用，而想在某个对象上强制调用函数，该怎么做呢？</p><p>JavaScript 中的“所有”函数都有一些有用的特性（这和它们的[[ 原型]] 有关——之后我们会详细介绍原型），可用来解决这个问题。具体点说，可以使用函数的call(..) 和apply(..) 方法。严格来说，JavaScript 的宿主环境有时会提供一些非常特殊的函数，它们并没有这两个方法。但是这样的函数非常罕见，JavaScript 提供的绝大多数函数以你自己创建的所有函数都可以使用call(..) 和apply(..) 方法。</p><p>这两个方法是如何工作的呢？它们的第一个参数是一个对象，它们会把这个对象绑定到this，接着在调用函数时指定这个this。因为你可以直接指定this 的绑定对象，因此我们称之为显式绑定。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( this.a );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a:2</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">foo.call( obj ); // 2</span></span></code></pre></div><p>可惜，显式绑定仍然无法解决我们之前提出的丢失绑定问题。</p><h6 id="硬绑定" tabindex="-1">硬绑定 <a class="header-anchor" href="#硬绑定" aria-label="Permalink to &quot;硬绑定&quot;">​</a></h6><p>但是显式绑定的一个变种可以解决这个问题。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( this.a );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a:2</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">var bar = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   foo.call( obj );</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">bar(); // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">setTimeout( bar, 100 ); // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">// 硬绑定的bar 不可能再修改它的this</span></span>
<span class="line"><span style="color:#A6ACCD;">bar.call( window ); // 2</span></span></code></pre></div><p>我们来看看这个变种到底是怎样工作的。我们创建了函数bar()，并在它的内部手动调用了foo.call(obj)，因此强制把foo 的this 绑定到了obj。无论之后如何调用函数bar，它总会手动在obj 上调用foo。这种绑定是一种显式的强制绑定，因此我们称之为硬绑定。</p><p>由于硬绑定是一种非常常用的模式，所以在ES5 中提供了内置的方法Function.prototype.bind，它的用法如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo(something) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( this.a, something );</span></span>
<span class="line"><span style="color:#A6ACCD;">   return this.a + something;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a:2</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">var bar = foo.bind( obj );</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = bar( 3 ); // 2 3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( b ); // 5</span></span></code></pre></div><p>bind(..) 会返回一个硬编码的新函数，它会把参数设置为this 的上下文并调用原始函数。</p><h6 id="api调用的-上下文" tabindex="-1">API调用的“上下文” <a class="header-anchor" href="#api调用的-上下文" aria-label="Permalink to &quot;API调用的“上下文”&quot;">​</a></h6><p>第三方库的许多函数，以及JavaScript 语言和宿主环境中许多新的内置函数，都提供了一个可选的参数，通常被称为“上下文”（context），其作用和bind(..) 一样，确保你的回调函数使用指定的this。</p><p>举例来说：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo(el) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( el, this.id );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   id: &quot;awesome&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// 调用foo(..) 时把this 绑定到obj</span></span>
<span class="line"><span style="color:#A6ACCD;">[1, 2, 3].forEach( foo, obj );</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1 awesome 2 awesome 3 awesome</span></span></code></pre></div><h5 id="new绑定" tabindex="-1">new绑定 <a class="header-anchor" href="#new绑定" aria-label="Permalink to &quot;new绑定&quot;">​</a></h5><p>在传统的面向类的语言中，“构造函数”是类中的一些特殊方法，使用new 初始化类时会调用类中的构造函数。通常的形式是这样的：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">something = new MyClass(..);</span></span></code></pre></div><p>JavaScript 也有一个new 操作符，使用方法看起来也和那些面向类的语言一样，绝大多数开发者都认为JavaScript 中new 的机制也和那些语言一样。然而，JavaScript 中new 的机制实际上和面向类的语言完全不同。</p><p>首先我们重新定义一下JavaScript 中的“构造函数”。在JavaScript 中，构造函数只是一些使用new 操作符时被调用的函数。它们并不会属于某个类，也不会实例化一个类。实际上，它们甚至都不能说是一种特殊的函数类型，它们只是被new 操作符调用的普通函数而已。</p><p>这里有一个重要但是非常细微的区别：实际上并不存在所谓的“构造函数”，只有对于函数的“构造调用”。</p><p>使用new 来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。</p><ol><li>创建（或者说构造）一个全新的对象。</li><li>这个新对象会被执行[[ 原型]] 连接。</li><li>这个新对象会绑定到函数调用的this。</li><li>如果函数没有返回其他对象，那么new 表达式中的函数调用会自动返回这个新对象。</li></ol><p>思考下面的代码：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo(a) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   this.a = a;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var bar = new foo(2);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( bar.a ); // 2</span></span></code></pre></div><h4 id="优先级" tabindex="-1">优先级 <a class="header-anchor" href="#优先级" aria-label="Permalink to &quot;优先级&quot;">​</a></h4><p>现在我们已经了解了函数调用中this 绑定的四条规则，你需要做的就是找到函数的调用位置并判断应当应用哪条规则。但是，如果某个调用位置可以应用多条规则该怎么办？为了解决这个问题就必须给这些规则设定优先级，这就是我们接下来要介绍的内容。</p><p>毫无疑问，默认绑定的优先级是四条规则中最低的，所以我们可以先不考虑它。</p><p>隐式绑定和显式绑定哪个优先级更高？我们来测试一下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   console.log( this.a );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj1 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a: 2,</span></span>
<span class="line"><span style="color:#A6ACCD;">   foo: foo</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj2 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a: 3,</span></span>
<span class="line"><span style="color:#A6ACCD;">   foo: foo</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">obj1.foo(); // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">obj2.foo(); // 3</span></span>
<span class="line"><span style="color:#A6ACCD;">obj1.foo.call( obj2 ); // 3</span></span>
<span class="line"><span style="color:#A6ACCD;">obj2.foo.call( obj1 ); // 2</span></span></code></pre></div><p>可以看到，显式绑定优先级更高，也就是说在判断时应当先考虑是否可以应用显式绑定。</p><p>现在我们需要搞清楚new 绑定和隐式绑定的优先级谁高谁低：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo(something) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   this.a = something;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj1 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   foo: foo</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj2 = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">obj1.foo( 2 );</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( obj1.a ); // 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">obj1.foo.call( obj2, 3 );</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( obj2.a ); // 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var bar = new obj1.foo( 4 );</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( obj1.a ); // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( bar.a ); // 4</span></span></code></pre></div><p>可以看到new 绑定比隐式绑定优先级高。但是new 绑定和显式绑定谁的优先级更高呢？</p><p>new 和call/apply 无法一起使用，因此无法通过new foo.call(obj1) 来直接进行测试。但是我们可以使用硬绑定来测试它俩的优先级。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo(something) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   this.a = something;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj1 = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var bar = foo.bind( obj1 );</span></span>
<span class="line"><span style="color:#A6ACCD;">bar( 2 );</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( obj1.a ); // 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var baz = new bar(3);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( obj1.a ); // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( baz.a ); // 3</span></span></code></pre></div><p>bar 被硬绑定到obj1 上，但是new bar(3) 并没有像我们预计的那样把obj1.a修改为3。相反，new 修改了硬绑定（到obj1 的）调用bar(..) 中的this。因为使用了new 绑定，我们得到了一个名字为baz 的新对象，并且baz.a 的值是3。</p><h4 id="判断this" tabindex="-1">判断this <a class="header-anchor" href="#判断this" aria-label="Permalink to &quot;判断this&quot;">​</a></h4><p>现在我们可以根据优先级来判断函数在某个调用位置应用的是哪条规则。可以按照下面的顺序来进行判断：</p><ol><li>函数是否在new 中调用（new 绑定）？如果是的话this 绑定的是新创建的对象。 var bar = new foo()</li><li>函数是否通过call、apply（显式绑定）或者硬绑定调用？如果是的话，this 绑定的是指定的对象。 var bar = foo.call(obj2)</li><li>函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this 绑定的是那个上下文对象。 var bar = obj1.foo()</li><li>如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到undefined，否则绑定到全局对象。 var bar = foo()</li></ol><h4 id="绑定例外" tabindex="-1">绑定例外 <a class="header-anchor" href="#绑定例外" aria-label="Permalink to &quot;绑定例外&quot;">​</a></h4><h5 id="被忽略的this" tabindex="-1">被忽略的this <a class="header-anchor" href="#被忽略的this" aria-label="Permalink to &quot;被忽略的this&quot;">​</a></h5><h5 id="间接引用" tabindex="-1">间接引用 <a class="header-anchor" href="#间接引用" aria-label="Permalink to &quot;间接引用&quot;">​</a></h5><h5 id="软绑定" tabindex="-1">软绑定 <a class="header-anchor" href="#软绑定" aria-label="Permalink to &quot;软绑定&quot;">​</a></h5><h4 id="this词法" tabindex="-1">this词法 <a class="header-anchor" href="#this词法" aria-label="Permalink to &quot;this词法&quot;">​</a></h4><p>箭头函数并不是使用function 关键字定义的，而是使用被称为“胖箭头”的操作符=&gt; 定义的。箭头函数不使用this 的四种标准规则，而是根据外层（函数或者全局）作用域来决定this。</p><p>我们来看看箭头函数的词法作用域：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   // 返回一个箭头函数</span></span>
<span class="line"><span style="color:#A6ACCD;">   return (a) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">      //this 继承自foo()</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log( this.a );</span></span>
<span class="line"><span style="color:#A6ACCD;">   };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj1 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a:2</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj2 = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a:3</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">var bar = foo.call( obj1 );</span></span>
<span class="line"><span style="color:#A6ACCD;">bar.call( obj2 ); // 2, 不是3 ！</span></span></code></pre></div><p>foo() 内部创建的箭头函数会捕获调用时foo() 的this。由于foo() 的this 绑定到obj1，bar（引用箭头函数）的this 也会绑定到obj1，箭头函数的绑定无法被修改。（new 也不行！）</p><p>箭头函数最常用于回调函数中，例如事件处理器或者定时器：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">   setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">   // 这里的this 在此法上继承自foo()</span></span>
<span class="line"><span style="color:#A6ACCD;">      console.log( this.a );</span></span>
<span class="line"><span style="color:#A6ACCD;">   },100);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">   a:2</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">foo.call( obj ); // 2</span></span></code></pre></div><h2 id="对象" tabindex="-1">对象 <a class="header-anchor" href="#对象" aria-label="Permalink to &quot;对象&quot;">​</a></h2><h3 id="类型" tabindex="-1">类型 <a class="header-anchor" href="#类型" aria-label="Permalink to &quot;类型&quot;">​</a></h3><p>简单基本类型（string、boolean、number、null 和undefined）本身并不是对象。null 有时会被当作一种对象类型，但是这其实只是语言本身的一个bug，即对null 执行typeof null 时会返回字符串&quot;object&quot;。1 实际上，null 本身是基本类型。</p><p>有一种常见的错误说法是“JavaScript 中万物皆是对象”，这显然是错误的。</p><h2 id="混合对象-类" tabindex="-1">混合对象“类” <a class="header-anchor" href="#混合对象-类" aria-label="Permalink to &quot;混合对象“类”&quot;">​</a></h2><h2 id="原型" tabindex="-1">原型 <a class="header-anchor" href="#原型" aria-label="Permalink to &quot;原型&quot;">​</a></h2><h2 id="行为委托" tabindex="-1">行为委托 <a class="header-anchor" href="#行为委托" aria-label="Permalink to &quot;行为委托&quot;">​</a></h2><h2 id="类型-1" tabindex="-1">类型 <a class="header-anchor" href="#类型-1" aria-label="Permalink to &quot;类型&quot;">​</a></h2><p>本书中，我们这样来定义“类型”（与规范类似）：对语言引擎和开发人员来说，类型 是值的内部特征，它定义了的行为，以使其区别于其他值。</p><p>换句话说，如果语言引擎和开发人员对 42 （数字）和 &quot;42&quot; （字符串）采取不同的处理方式，那就说明它们是不同的类型，一个是 number ，一个是 string 。通常我们对数字 42 进行数学运算，而对字符串 &quot;42&quot; 进行字符串操作，比输出到页面。它们是不同的类型。</p><h3 id="类型-2" tabindex="-1">类型 <a class="header-anchor" href="#类型-2" aria-label="Permalink to &quot;类型&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">typeof undefined === &quot;undefined&quot;; // true</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof true === &quot;boolean&quot;; // true</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof 42 === &quot;number&quot;; // true</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof &quot;42&quot; === &quot;string&quot;; // true</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof { life: 42 } === &quot;object&quot;; // true</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof Symbol() === &quot;symbol&quot;; // true</span></span></code></pre></div><p>你可能注意到 null 类型不在此列。它比较特殊 ，typeof 对它的处理有问题：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">typeof null === &quot;object&quot;; // true</span></span></code></pre></div><p>我们需要使用复合条件来检测 null 值的类型：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">(!a &amp;&amp; typeof a === &quot;object&quot;); // true</span></span></code></pre></div><p>null 是基本类型中唯一的一个“假值”类型，typeof 对它的返回值为 &quot;object&quot; 。</p><h3 id="值和类型" tabindex="-1">值和类型 <a class="header-anchor" href="#值和类型" aria-label="Permalink to &quot;值和类型&quot;">​</a></h3><p>JavaScript 中的变量是没有类型的，只有值才有 。变量可以随时持有任何类型的值。</p><p>换个角度来理解就是，JavaScript 不做“类型强制”；也就是说，语言引擎不要求变量 总是持有与其初始值同类型的值。一个变量可以现在被赋值为字符串类型值，随后又被赋值为数字类型值。</p><p>在对变量执行 typeof 操作时，得到的结果并不是该变量的类型，而是该变量持有的值的类型，因为 JavaScript 中的变量没有类型。</p><p>typeof 运算符总是会返回一个字符串：</p><h4 id="undefined-和-undeclared" tabindex="-1">undefined 和 undeclared <a class="header-anchor" href="#undefined-和-undeclared" aria-label="Permalink to &quot;undefined 和 undeclared&quot;">​</a></h4><p>变量在未持有值的时候为 undefined 。此时 typeof 返回 &quot;undefined&quot; ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a;</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof a; // &quot;undefined&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = 42;</span></span>
<span class="line"><span style="color:#A6ACCD;">var c;</span></span>
<span class="line"><span style="color:#A6ACCD;">// later</span></span>
<span class="line"><span style="color:#A6ACCD;">b = c;</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof b; // &quot;undefined&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof c; // &quot;undefined&quot;</span></span></code></pre></div><p>大多数开发者倾向于将 undefined 等同于 undeclared（未声明），但在 JavaScript 中它们完全是两回事。已在作用域中声明但还没有赋值的变量，是 undefined 的。相反，还没有在作用域中声明过的变量，是 undeclared的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a;</span></span>
<span class="line"><span style="color:#A6ACCD;">a; // undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">b; // ReferenceError: b is not defined</span></span></code></pre></div><p>浏览器对这类情况的处理很让人抓狂。上例中，“b is not defined”容易让人误以为是“b is undefined”。这里再强调一遍，“undefined”和“is not defined”是两码事。此时如果浏览器报错成“b is not found”或者“b is not declared”会更准确。</p><p>更让人抓狂的是 typeof 处理 undeclared 变量的方式。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a;</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof a; // &quot;undefined&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof b; // &quot;undefined&quot;</span></span></code></pre></div><p>对于 undeclared（或者 not defined）变量，typeof 照样返回 &quot;undefined&quot; 。请注意虽然 b 是一个 undeclared 变量，但typeof b 并没有报错。这是因为 typeof 有一个特殊的安全防范机制。此时 typeof 如果能返回 undeclared（而非 undefined）的话，情况会好很多。</p><h4 id="typeof-undeclared" tabindex="-1">typeof Undeclared <a class="header-anchor" href="#typeof-undeclared" aria-label="Permalink to &quot;typeof Undeclared&quot;">​</a></h4><p>该安全防范机制对在浏览器中运行的 JavaScript 代码来说还是很有帮助的，因为多个脚本文件会在共享的全局命名空间中加载变量。</p><p>举个简单的例子，在程序中使用全局变量 DEBUG 作为“调试模式”的开关。在输出调试信息到控制台之前，我们会检查 DEBUG变量是否已被声明。顶层的全局变量声明 var DEBUG = true 只在 debug.js 文件中才有，而该文件只在开发和测试时才被加载到浏览器，在生产环境中不予加载。</p><p>问题是如何在程序中检查全局变量 DEBUG 才不会出现 ReferenceError 错误。这时 typeof 的安全防范机制就成了我们的好帮手：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 这样会抛出错误</span></span>
<span class="line"><span style="color:#A6ACCD;">if (DEBUG) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log( &quot;Debugging is starting&quot; );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 这样是安全的</span></span>
<span class="line"><span style="color:#A6ACCD;">if (typeof DEBUG !== &quot;undefined&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log( &quot;Debugging is starting&quot; );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>这不仅对用户定义的变量（比如 DEBUG ）有用，对内建的 API 也有帮助：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">if (typeof atob === &quot;undefined&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  atob = function() { /*..*/ };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="值" tabindex="-1">值 <a class="header-anchor" href="#值" aria-label="Permalink to &quot;值&quot;">​</a></h3><h5 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-label="Permalink to &quot;数组&quot;">​</a></h5><h5 id="字符串" tabindex="-1">字符串 <a class="header-anchor" href="#字符串" aria-label="Permalink to &quot;字符串&quot;">​</a></h5><h5 id="数字" tabindex="-1">数字 <a class="header-anchor" href="#数字" aria-label="Permalink to &quot;数字&quot;">​</a></h5><h5 id="特殊数值" tabindex="-1">特殊数值 <a class="header-anchor" href="#特殊数值" aria-label="Permalink to &quot;特殊数值&quot;">​</a></h5><h6 id="不是值的值" tabindex="-1">不是值的值 <a class="header-anchor" href="#不是值的值" aria-label="Permalink to &quot;不是值的值&quot;">​</a></h6><p>undefined 类型只有一个值，即 undefined 。null 类型也只有一个值，即 null 。它们的名称既是类型也是值。</p><p>undefined 和 null 常被用来表示“空的”值或“不是值”的值。二者之间有一些细微的差别。例如： null 指空值（empty value） undefined 指没有值（missing value）</p><p>或者： undefined 指从未赋值 null 指曾赋过值，但是目前没有值</p><blockquote><p>null 是一个特殊关键字，不是标识符，我们不能将其当作变量来使用和赋值。然而 undefined 却是一个标识符，可以被当作变量来使用和赋值。</p></blockquote><h6 id="undefined" tabindex="-1">undefined <a class="header-anchor" href="#undefined" aria-label="Permalink to &quot;undefined&quot;">​</a></h6><p>在非严格模式下，我们可以为全局标识符 undefined 赋值（这样的设计实在是欠考虑！）：</p><p>永远不要重新定义 undefined 。</p><p>void 运算符</p><p>undefined 是一个内置标识符（除非被重新定义，见前面的介绍），它的值为 undefined ，通过 void 运算符即可得到该值。表达式 void 没有返回值，因此返回结果是 undefined 。void 并不改变表达式的结果，只是让表达式不返回值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = 42;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log( void a, a ); // undefined 42</span></span></code></pre></div><p>按惯例我们用 void 0 来获得 undefined （这主要源自 C 语言，当然使用 void true 或其他 void 表达式也是可以 的）。void 0 、void 1 和 undefined 之间并没有实质上的区别。</p><p>void 运算符在其他地方也能派上用场，比如不让表达式返回任何结果（即使其有副作用）。</p><p>例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function doSomething() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 注： APP.ready 由程序自己定义</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!APP.ready) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 稍后再试</span></span>
<span class="line"><span style="color:#A6ACCD;">        return void setTimeout( doSomething,100 );</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    var result;</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 其他</span></span>
<span class="line"><span style="color:#A6ACCD;">    return result;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 现在可以了吗？</span></span>
<span class="line"><span style="color:#A6ACCD;">if (doSomething()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 立即执行下一个任务</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>这里 setTimeout(..) 函数返回一个数值（计时器间隔的唯一标识符，用来取消计时），但是为了确保 if 语句不产生误报（false positive），我们要 void 掉它。 很多开发人员喜欢分开操作，效果都一样，只是没有使用 void 运算符：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">if (!APP.ready) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 稍后再试</span></span>
<span class="line"><span style="color:#A6ACCD;">    setTimeout( doSomething,100 );</span></span>
<span class="line"><span style="color:#A6ACCD;">    return;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>总之，如果要将代码中的值（如表达式的返回值）设为 undefined ，就可以使用 void 。这种做法并不多见，但在某些情况下却很有用。</p><h6 id="特殊的数字" tabindex="-1">特殊的数字 <a class="header-anchor" href="#特殊的数字" aria-label="Permalink to &quot;特殊的数字&quot;">​</a></h6><ol><li>不是数字的数字</li></ol><p>如果数学运算的操作数不是数字类型（或者无法解析为常规的十进制或十六进制数字），就无法返回一个有效的数字，这种情况下返回值为 NaN 。</p><p>NaN 意指“不是一个数字”（not a number），这个名字容易引起误会，后面将会提到。将它理解为“无效数值”“失败数值”或者“坏数值”可能更准确些。</p><p>例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = 2 / &quot;foo&quot;; // NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof a === &quot;number&quot;; // true</span></span></code></pre></div><p>换句话说，“不是数字的数字”仍然是数字类型。这种说法可能有点绕。</p><p>NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。</p><p>NaN 是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即 x === x 不成立）的值。而 NaN != NaN 为true ，很奇怪吧？</p><p>于是我们可以这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">if (!Number.isNaN) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    Number.isNaN = function(n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return n !== n;</span></span>
<span class="line"><span style="color:#A6ACCD;">    };</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>很多 JavaScript 程序都可能存在 NaN 方面的问题，所以我们应该尽量使用 Number.isNaN(..) 这样可靠的方法，无论是系统内置还是 polyfill。</p><p>如果你仍在代码中使用 isNaN(..) ，那么你的程序迟早会出现 bug。</p><h6 id="无穷数" tabindex="-1">无穷数 <a class="header-anchor" href="#无穷数" aria-label="Permalink to &quot;无穷数&quot;">​</a></h6><h6 id="零值" tabindex="-1">零值 <a class="header-anchor" href="#零值" aria-label="Permalink to &quot;零值&quot;">​</a></h6><h3 id="值和引用" tabindex="-1">值和引用 <a class="header-anchor" href="#值和引用" aria-label="Permalink to &quot;值和引用&quot;">​</a></h3><p>JavaScript 中没有指针，引用的工作机制也不尽相同。在 JavaScript 中变量不可能成为指向另一个变量的引用。</p><p>JavaScript 引用指向的是值。如果一个值有 10 个引用，这些引用指向的都是同一个值，它们相互之间没有引用 / 指向关系 。</p><p>JavaScript 对值和引用的赋值 / 传递在语法上没有区别，完全根据值的类型来决定。</p><p>简单值（即标量基本类型值，scalar primitive）总是 通过值复制的方式来赋值 / 传递，包括 null 、undefined 、字符串、数字、布尔和 symbol 。</p><p>复合值（compound value）——对象（包括数组和封装对象）和函数，则总是 通过引用复制的方式来赋值 / 传 递。</p><h2 id="原生函数-内建函数" tabindex="-1">原生函数（内建函数） <a class="header-anchor" href="#原生函数-内建函数" aria-label="Permalink to &quot;原生函数（内建函数）&quot;">​</a></h2><h3 id="内部属性-class" tabindex="-1">内部属性 [[Class]] <a class="header-anchor" href="#内部属性-class" aria-label="Permalink to &quot;内部属性 [[Class]]&quot;">​</a></h3><p>所有 typeof 返回值为 &quot;object&quot; 的对象（如数组）都包含一个内部属性 [[Class]] （我们可以把它看作一个内部的分 类，而非传统的面向对象意义上的类）。这个属性无法直接访问，一般通过 Object.prototype.toString(..) 来查 看。例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Object.prototype.toString.call( [1,2,3] );</span></span>
<span class="line"><span style="color:#A6ACCD;">// &quot;[object Array]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Object.prototype.toString.call( /regex-literal/i );</span></span>
<span class="line"><span style="color:#A6ACCD;">// &quot;[object RegExp]&quot;</span></span></code></pre></div><h3 id="封装对象包装" tabindex="-1">封装对象包装 <a class="header-anchor" href="#封装对象包装" aria-label="Permalink to &quot;封装对象包装&quot;">​</a></h3><p>封装对象（object wrapper）扮演着十分重要的角色。由于基本类型值没有 .length 和 .toString() 这样的属性和方法，需要通过封装对象才能访问，此时 JavaScript 会自动为基本类型值包装 （box 或者 wrap）一个封装对象：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = &quot;abc&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">a.length; // 3</span></span>
<span class="line"><span style="color:#A6ACCD;">a.toUpperCase(); // &quot;ABC&quot;</span></span></code></pre></div><p>如果需要经常用到这些字符串属性和方法，比如在 for 循环中使用 i &lt; a.length ，那么从一开始就创建一个封装对象也许更为方便，这样 JavaScript 引擎就不用每次都自动创建了。但实际证明这并不是一个好办法，因为浏览器已经为 .length 这样的常见情况做了性能优化，直接使用封装对象来“提前优化”代码反而会降低执行效率 。</p><p>一般情况下，我们不需要直接使用封装对象。最好的办法是让 JavaScript 引擎自己决定什么时候应该使用封装对象。换句话说，就是应该优先考虑使用 &quot;abc&quot; 和 42 这样的基本类型值，而非 new String(&quot;abc&quot;) 和 new Number(42) 。</p><h4 id="封装对象释疑" tabindex="-1">封装对象释疑 <a class="header-anchor" href="#封装对象释疑" aria-label="Permalink to &quot;封装对象释疑&quot;">​</a></h4><p>使用封装对象时有些地方需要特别注意。 比如 Boolean ：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = new Boolean( false );</span></span>
<span class="line"><span style="color:#A6ACCD;">if (!a) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log( &quot;Oops&quot; ); // 执行不到这里</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>我们为 false 创建了一个封装对象，然而该对象是真值（“truthy”，即总是返回 true ，参见第 4 章），所以这里使用封装对象得到的结果和使用 false 截然相反。</p><p>如果想要自行封装基本类型值，可以使用 Object(..) 函数（不带 new 关键字）：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = &quot;abc&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = new String( a );</span></span>
<span class="line"><span style="color:#A6ACCD;">var c = Object( a );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">typeof a; // &quot;string&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof b; // &quot;object&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof c; // &quot;object&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">b instanceof String; // true</span></span>
<span class="line"><span style="color:#A6ACCD;">c instanceof String; // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Object.prototype.toString.call( b ); // &quot;[object String]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Object.prototype.toString.call( c ); // &quot;[object String]&quot;</span></span></code></pre></div><h3 id="拆封" tabindex="-1">拆封 <a class="header-anchor" href="#拆封" aria-label="Permalink to &quot;拆封&quot;">​</a></h3><p>如果想要得到封装对象中的基本类型值，可以使用 valueOf() 函数：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = new String( &quot;abc&quot; );</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = new Number( 42 );</span></span>
<span class="line"><span style="color:#A6ACCD;">var c = new Boolean( true );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a.valueOf(); // &quot;abc&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">b.valueOf(); // 42</span></span>
<span class="line"><span style="color:#A6ACCD;">c.valueOf(); // true</span></span></code></pre></div><p>在需要用到封装对象中的基本类型值的地方会发生隐式拆封。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = new String( &quot;abc&quot; );</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = a + &quot;&quot;; // b的值为&quot;abc&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">typeof a; // &quot;object&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">typeof b; // &quot;string&quot;</span></span></code></pre></div><h3 id="原生函数作为构造函数" tabindex="-1">原生函数作为构造函数 <a class="header-anchor" href="#原生函数作为构造函数" aria-label="Permalink to &quot;原生函数作为构造函数&quot;">​</a></h3><p>关于数组（array ）、对象（object ）、函数（function ）和正则表达式，我们通常喜欢以常量的形式来创建它们。实际上，使用常量和使用构造函数的效果是一样的（创建的值都是通过封装对象来包装）。</p><p>如前所述，应该尽量避免使用构造函数，除非十分必要，因为它们经常会产生意想不到的结果。</p><h4 id="array" tabindex="-1">Array(..) <a class="header-anchor" href="#array" aria-label="Permalink to &quot;Array(..)&quot;">​</a></h4><h4 id="object-、function-和-regexp" tabindex="-1">Object(..) 、Function(..) 和 RegExp(..) <a class="header-anchor" href="#object-、function-和-regexp" aria-label="Permalink to &quot;Object(..) 、Function(..) 和 RegExp(..)&quot;">​</a></h4><h4 id="date-和-error" tabindex="-1">Date(..) 和 Error(..) <a class="header-anchor" href="#date-和-error" aria-label="Permalink to &quot;Date(..) 和 Error(..)&quot;">​</a></h4><p>相较于其他原生构造函数，Date(..) 和 Error(..) 的用处要大很多，因为没有对应的常量形式来作为它们的替代。 创建日期对象必须使用 new Date() 。Date(..) 可以带参数，用来指定日期和时间，而不带参数的话则使用当前的日期和时间。</p><h4 id="symbol" tabindex="-1">Symbol(..) <a class="header-anchor" href="#symbol" aria-label="Permalink to &quot;Symbol(..)&quot;">​</a></h4><h3 id="原生原型" tabindex="-1">原生原型 <a class="header-anchor" href="#原生原型" aria-label="Permalink to &quot;原生原型&quot;">​</a></h3><p>原生构造函数有自己的 .prototype 对象，如 Array.prototype 、String.prototype 等。这些对象包含其对应子类型所特有的行为特征。</p><p>例如，将字符串值封装为字符串对象之后，就能访问 String.prototype 中定义的方法。</p><h2 id="强制类型转换" tabindex="-1">强制类型转换 <a class="header-anchor" href="#强制类型转换" aria-label="Permalink to &quot;强制类型转换&quot;">​</a></h2><h3 id="值类型转换" tabindex="-1">值类型转换 <a class="header-anchor" href="#值类型转换" aria-label="Permalink to &quot;值类型转换&quot;">​</a></h3><p>将值从一种类型转换为另一种类型通常称为类型转换 （type casting），这是显式的情况；隐式的情况称为强制类型转换（coercion）。</p><p>JavaScript 中的强制类型转换总是返回标量基本类型值,如字符串、数字和布尔值，不会返回对象和函数。</p><p>然而在 JavaScript 中通常将它们统称为强制类型转换 ，我个人则倾向于用“隐式强制类型转换”（implicit coercion）和“显式强制类型转换”（explicit coercion）来区分。</p><p>二者的区别显而易见：我们能够从代码中看出哪些地方是显式强制类型转换，而隐式强制类型转换则不那么明显，通常是某些操作产生的副作用。</p><p>例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = 42;</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = a + &quot;&quot;; // 隐式强制类型转换</span></span>
<span class="line"><span style="color:#A6ACCD;">var c = String( a ); // 显式强制类型转换</span></span></code></pre></div><p>对变量 b 而言，强制类型转换是隐式的；由于 + 运算符的其中一个操作数是字符串，所以是字符串拼接操作，结果是数字 42被强制类型转换为相应的字符串 &quot;42&quot; 。</p><p>而 String(..) 则是将 a 显式强制类型转换为字符串。</p><p>两者都是将数字 42 转换为字符串 &quot;42&quot; 。然而它们各自不同的处理方式成为了争论的焦点。</p><h3 id="抽象值操作" tabindex="-1">抽象值操作 <a class="header-anchor" href="#抽象值操作" aria-label="Permalink to &quot;抽象值操作&quot;">​</a></h3><h4 id="tostring" tabindex="-1">ToString <a class="header-anchor" href="#tostring" aria-label="Permalink to &quot;ToString&quot;">​</a></h4><p>基本类型值的字符串化规则为：null 转换为 &quot;null&quot; ，undefined 转换为 &quot;undefined&quot; ，true 转换为 &quot;true&quot; 。数 字的字符串化则遵循通用规则</p><h4 id="json-字符串化" tabindex="-1">JSON 字符串化 <a class="header-anchor" href="#json-字符串化" aria-label="Permalink to &quot;JSON 字符串化&quot;">​</a></h4><p>工具函数 JSON.stringify(..) 在将 JSON 对象序列化为字符串时也用到了 ToString 。</p><p>请注意，JSON 字符串化并非严格意义上的强制类型转换，因为其中也涉及 ToString 的相关规则，所以这里顺带介绍一下。</p><p>对大多数简单值来说，JSON 字符串化和 toString() 的效果基本相同，只不过序列化的结果总是字符串：</p><p>所有安全的 JSON 值 （JSON-safe）都可以使用 JSON.stringify(..) 字符串化。安全的 JSON 值是指能够呈现为有效 JSON 格式的值。</p><p>为了简单起见，我们来看看什么是不安全的 JSON 值 。undefined 、function 、symbol （ES6+）和包含循环引用（对象之间相互引用，形成一个无限循环）的对象都不符合 JSON 结构标准，支持 JSON 的语言无法处理它们。</p><p>JSON.stringify(..) 在对象中遇到 undefined 、function 和 symbol 时会自动将其忽略，在数组中则会返回 null （以保证单元位置不变）。</p><p>例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">JSON.stringify( undefined ); // undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">JSON.stringify( function(){} ); // undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">JSON.stringify(</span></span>
<span class="line"><span style="color:#A6ACCD;">    [1,undefined,function(){},4]</span></span>
<span class="line"><span style="color:#A6ACCD;">); // &quot;[1,null,null,4]&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">JSON.stringify(</span></span>
<span class="line"><span style="color:#A6ACCD;">    { a:2, b:function(){} }</span></span>
<span class="line"><span style="color:#A6ACCD;">); // &quot;{&quot;a&quot;:2}&quot;</span></span></code></pre></div><p>对包含循环引用的对象执行 JSON.stringify(..) 会出错。</p><p>如果对象中定义了 toJSON() 方法，JSON 字符串化时会首先调用该方法，然后用它的返回值来进行序列化。</p><p>如果要对含有非法 JSON 值的对象做字符串化，或者对象中的某些值无法被序列化时，就需要定义 toJSON() 方法来返回一个安全的 JSON 值。</p><p>例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var o = { };</span></span>
<span class="line"><span style="color:#A6ACCD;">var a = {</span></span>
<span class="line"><span style="color:#A6ACCD;">    b: 42,</span></span>
<span class="line"><span style="color:#A6ACCD;">    c: o,</span></span>
<span class="line"><span style="color:#A6ACCD;">    d: function(){}</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">// 在a中创建一个循环引用</span></span>
<span class="line"><span style="color:#A6ACCD;">o.e = a;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 循环引用在这里会产生错误</span></span>
<span class="line"><span style="color:#A6ACCD;">// JSON.stringify( a );</span></span>
<span class="line"><span style="color:#A6ACCD;">// 自定义的JSON序列化</span></span>
<span class="line"><span style="color:#A6ACCD;">a.toJSON = function() {</span></span>
<span class="line"><span style="color:#A6ACCD;">// 序列化仅包含b</span></span>
<span class="line"><span style="color:#A6ACCD;">    return { b: this.b };</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">JSON.stringify( a ); // &quot;{&quot;b&quot;:42}&quot;</span></span></code></pre></div><h4 id="tonumber" tabindex="-1">ToNumber <a class="header-anchor" href="#tonumber" aria-label="Permalink to &quot;ToNumber&quot;">​</a></h4><p>有时我们需要将非数字值当作数字来使用，比如数学运算。</p><p>其中 true 转换为 1 ，false 转换为 0 。undefined 转换为 NaN ，null 转换为 0 。</p><h4 id="toboolean" tabindex="-1">ToBoolean <a class="header-anchor" href="#toboolean" aria-label="Permalink to &quot;ToBoolean&quot;">​</a></h4><p>关于这个主题存在许多误解和困惑，需要我们特别注意。</p><p>首先也是最重要的一点是，JavaScript 中有两个关键词 true 和 false ，分别代表布尔类型中的真和假。我们常误以为数值 1和 0 分别等同于 true 和 false 。在有些语言中可能是这样，但在 JavaScript 中布尔值和数字是不一样的。虽然我们可以将1 强制类型转换为 true ，将 0 强制类型转换为 false ，反之亦然，但它们并不是一回事。</p><ol><li><p>假值（falsy value） 我们再来看看其他值是如何被强制类型转换为布尔值的。 JavaScript 中的值可以分为以下两类： (1) 可以被强制类型转换为 false 的值 (2) 其他（被强制类型转换为 true 的值） JavaScript 规范具体定义了一小撮可以被强制类型转换为 false 的值。 ES5 规范 9.2 节中定义了抽象操作 ToBoolean ，列举了布尔强制类型转换所有可能出现的结果。 以下这些是假值： <em>undefined</em><em>null</em><em>false</em><em>+0 、-0 和 NaN</em><em>&quot;&quot;</em> 假值的布尔强制类型转换结果为 false 。 从逻辑上说，假值列表以外的都应该是真值（truthy）。但 JavaScript 规范对此并没有明确定义，只是给出了一些示例，例如规定所有的对象都是真值，我们可以理解为假值列表以外的值都是真值 。</p></li><li><p>假值对象（falsy object） 这个标题似乎有点自相矛盾。前面讲过规范规定所有的对象都是真值，怎么还会有假值对象呢？ 有人可能会以为假值对象就是包装了假值的封装对象（如 &quot;&quot; 、0 和 false ），实际不然。</p></li></ol><p>这只是规范开的一个小玩笑。 例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = new Boolean( false );</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = new Number( 0 );</span></span>
<span class="line"><span style="color:#A6ACCD;">var c = new String( &quot;&quot; );</span></span>
<span class="line"><span style="color:#A6ACCD;">var d = Boolean( a &amp;&amp; b &amp;&amp; c );</span></span>
<span class="line"><span style="color:#A6ACCD;">d; // true</span></span></code></pre></div><p>它们都是封装了假值的对象.d为 true ，说明 a 、b 、c 都为 true 。</p><ol start="3"><li>真值（truthy value）</li></ol><p>真值就是假值列表之外的值。 例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = &quot;false&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = &quot;0&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var c = &quot;&#39;&#39;&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var d = Boolean( a &amp;&amp; b &amp;&amp; c );</span></span>
<span class="line"><span style="color:#A6ACCD;">d;</span></span></code></pre></div><p>答案是 true 。上例的字符串看似假值，但所有字符串都是真值。不过 &quot;&quot; 除外，因为它是假值列表中唯一的字符串。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = []; // 空数组——是真值还是假值？</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = {}; // 空对象——是真值还是假值？</span></span>
<span class="line"><span style="color:#A6ACCD;">var c = function(){}; // 空函数——是真值还是假值？</span></span>
<span class="line"><span style="color:#A6ACCD;">var d = Boolean( a &amp;&amp; b &amp;&amp; c );</span></span>
<span class="line"><span style="color:#A6ACCD;">d;</span></span></code></pre></div><p>d 依然是 true 。还是同样的道理，[] 、{} 和 function(){} 都不在假值列表中，因此它们都是真值。</p><h3 id="显式强制类型转换" tabindex="-1">显式强制类型转换 <a class="header-anchor" href="#显式强制类型转换" aria-label="Permalink to &quot;显式强制类型转换&quot;">​</a></h3><h4 id="字符串和数字之间的显式转换" tabindex="-1">字符串和数字之间的显式转换 <a class="header-anchor" href="#字符串和数字之间的显式转换" aria-label="Permalink to &quot;字符串和数字之间的显式转换&quot;">​</a></h4><h5 id="日期显式转换为数字" tabindex="-1">日期显式转换为数字 <a class="header-anchor" href="#日期显式转换为数字" aria-label="Permalink to &quot;日期显式转换为数字&quot;">​</a></h5><h5 id="奇特的-运算符" tabindex="-1">奇特的 ~ 运算符 <a class="header-anchor" href="#奇特的-运算符" aria-label="Permalink to &quot;奇特的 ~ 运算符&quot;">​</a></h5><p>虽然严格说来并非强制类型转换（因为返回值类型并没有发生变化），但字位运算符（如 | 和 ~ ）和某些特殊数字一起使用时会产生类似强制类型转换的效果，返回另外一个数字。</p><p>-1 是一个“哨位值”，哨位值是那些在各个类型中（这里是数字）被赋予了特殊含义的值。在 C 语言中我们用 -1 来代表函数执行失败，用大于等于 0 的值来代表函数执行成功。</p><p>JavaScript 中字符串的 indexOf(..) 方法也遵循这一惯例，该方法在字符串中搜索指定的子字符串，如果找到就返回子字符串所在的位置（从 0 开始），否则返回 -1 。</p><p>indexOf(..) 不仅能够得到子字符串的位置，还可以用来检查字符串中是否包含指定的子字符串，相当于一个条件判断。 例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = &quot;Hello World&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">if (a.indexOf( &quot;lo&quot; ) &gt;= 0) { // true</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 找到匹配！</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">if(a.indexOf(&quot;lo&quot;) != -1) { // true</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 找到匹配！</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">if(a.indexOf(&quot;ol&quot;) &lt; 0) { // true</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 没有找到匹配！</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">if(a.indexOf(&quot;ol&quot;) == -1) { // true</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 没有找到匹配！</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>= 0 和 == -1 这样的写法不是很好，称为“抽象渗漏”，意思是在代码中暴露了底层的实现细节，这里是指用 -1 作为失败时的返回值，这些细节应该被屏蔽掉。</p><p>现在我们终于明白 ~ 有什么用处了！ ~ 和 indexOf() 一起可以将结果强制类型转换（实际上仅仅是转换）为真 / 假值：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = &quot;Hello World&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">~a.indexOf( &quot;lo&quot; ); // -4 &lt;-- 真值!</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if (~a.indexOf( &quot;lo&quot; )) { // true</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 找到匹配！</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">~a.indexOf( &quot;ol&quot; ); // 0 &lt;-- 假值!</span></span>
<span class="line"><span style="color:#A6ACCD;">!~a.indexOf( &quot;ol&quot; ); // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if (!~a.indexOf( &quot;ol&quot; )) { // true</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 没有找到匹配！</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>如果 indexOf(..) 返回 -1 ，~ 将其转换为假值 0 ，其他情况一律转换为真值。</p><h4 id="显式解析数字字符串" tabindex="-1">显式解析数字字符串 <a class="header-anchor" href="#显式解析数字字符串" aria-label="Permalink to &quot;显式解析数字字符串&quot;">​</a></h4><p>解析字符串中的数字和将字符串强制类型转换为数字的返回结果都是数字。但解析和转换两者之间还是有明显的差别。 例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = &quot;42&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = &quot;42px&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">Number( a ); // 42</span></span>
<span class="line"><span style="color:#A6ACCD;">parseInt( a ); // 42</span></span>
<span class="line"><span style="color:#A6ACCD;">Number( b ); // NaN</span></span>
<span class="line"><span style="color:#A6ACCD;">parseInt( b ); // 42</span></span></code></pre></div><p>解析允许 字符串中含有非数字字符，解析按从左到右的顺序，如果遇到非数字字符就停止。而转换不允许 出现非数字字符，否则会失败并返回 NaN 。</p><p>解析和转换之间不是相互替代的关系。它们虽然类似，但各有各的用途。如果字符串右边的非数字字符不影响结果，就可以使用解析。而转换要求字符串中所有的字符都是数字，像 &quot;42px&quot; 这样的字符串就不行。</p><h4 id="显式转换为布尔值" tabindex="-1">显式转换为布尔值 <a class="header-anchor" href="#显式转换为布尔值" aria-label="Permalink to &quot;显式转换为布尔值&quot;">​</a></h4><p>与前面的 String(..) 和 Number(..) 一样，Boolean(..) （不带 new ）是显式的 ToBoolean 强制类型转换：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = &quot;0&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">var c = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var d = &quot;&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var e = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">var f = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">var g;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean( a ); // true</span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean( b ); // true</span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean( c ); // true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean( d ); // false</span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean( e ); // false</span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean( f ); // false</span></span>
<span class="line"><span style="color:#A6ACCD;">Boolean( g ); // false</span></span></code></pre></div><p>在 if(..).. 这样的布尔值上下文中，如果没有使用 Boolean(..) 和 !! ，就会自动隐式地进行 ToBoolean 转换。建议 使用 Boolean(..) 和 !! 来进行显式转换以便让代码更清晰易读。</p><h3 id="隐式强制类型转换" tabindex="-1">隐式强制类型转换 <a class="header-anchor" href="#隐式强制类型转换" aria-label="Permalink to &quot;隐式强制类型转换&quot;">​</a></h3><p>隐式强制类型转换 指的是那些隐蔽的强制类型转换，副作用也不是很明显。换句话说，你自己觉得不够明显的强制类型转换都可以算作隐式强制类型转换。</p><p>显式强制类型转换旨在让代码更加清晰易读，而隐式强制类型转换看起来就像是它的对立面，会让代码变得晦涩难懂。</p><p>对强制类型转换的诟病大多是针对隐式 强制类型转换。</p><h4 id="字符串和数字之间的隐式强制类型转换" tabindex="-1">字符串和数字之间的隐式强制类型转换 <a class="header-anchor" href="#字符串和数字之间的隐式强制类型转换" aria-label="Permalink to &quot;字符串和数字之间的隐式强制类型转换&quot;">​</a></h4><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = &quot;42&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = &quot;0&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">var c = 42;</span></span>
<span class="line"><span style="color:#A6ACCD;">var d = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a + b; // &quot;420&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">c + d; // 42</span></span></code></pre></div><p>这里为什么会得到 &quot;420&quot; 和 42 两个不同的结果呢？通常的理解是，因为某一个或者两个操作数都是字符串，所以 + 执行的是字符串拼接操作。这样解释只对了一半，实际情况要复杂得多。</p><p>例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = [1,2];</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = [3,4];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a + b; // &quot;1,23,4&quot;</span></span></code></pre></div><p>a 和 b 都不是字符串，但是它们都被强制转换为字符串然后进行拼接。原因何在？</p><p>根据 ES5 规范 11.6.1 节，如果某个操作数是字符串或者能够通过以下步骤转换为字符串的话，+ 将进行拼接操作。如果其中一个操作数是对象（包括数组），则首先对其调用 ToPrimitive 抽象操作（规范 9.1 节），该抽象操作再调用[[DefaultValue]] （规范 8.12.8 节），以数字作为上下文。</p><p>你或许注意到这与 ToNumber 抽象操作处理对象的方式一样（参见 4.2.2 节）。因为数组的 valueOf() 操作无法得到简单基本类型值，于是它转而调用 toString() 。因此上例中的两个数组变成了 &quot;1,2&quot; 和 &quot;3,4&quot; 。+ 将它们拼接后返回&quot;1,23,4&quot; 。</p><p>简单来说就是，如果 + 的其中一个操作数是字符串（或者通过以上步骤可以得到字符串），则执行字符串拼接；否则执行数字加法。</p><p>对隐式强制类型转换来说，这意味着什么？</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = 42;</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = a + &quot;&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">b; // &quot;42&quot;</span></span></code></pre></div><p>a + &quot;&quot; 这样的隐式转换十分常见，一些对隐式强制类型转换持批评态度的人也不能免俗。</p><p>这本身就很能说明问题，无论怎样被人诟病，隐式强制类型转换 仍然有其用武之地。</p><h4 id="隐式强制类型转换为布尔值" tabindex="-1">隐式强制类型转换为布尔值 <a class="header-anchor" href="#隐式强制类型转换为布尔值" aria-label="Permalink to &quot;隐式强制类型转换为布尔值&quot;">​</a></h4><p>相对布尔值，数字和字符串操作中的隐式强制类型转换还算比较明显。下面的情况会发生布尔值隐式强制类型转换。</p><p>(1) if (..) 语句中的条件判断表达式。 (2) for ( .. ; .. ; .. ) 语句中的条件判断表达式（第二个）。 (3) while (..) 和 do..while(..) 循环中的条件判断表达式。 (4) ? : 中的条件判断表达式。 (5) 逻辑运算符 || （逻辑或）和 &amp;&amp; （逻辑与）左边的操作数（作为条件判断表达式）。 以上情况中，非布尔值会被隐式强制类型转换为布尔值，遵循前面介绍过的 ToBoolean 抽象操作规则。</p><h4 id="和" tabindex="-1">|| 和 &amp;&amp; <a class="header-anchor" href="#和" aria-label="Permalink to &quot;|| 和 &amp;&amp;&quot;">​</a></h4><p>逻辑运算符 || （或）和 &amp;&amp; （与）应该并不陌生，也许正因为如此有人觉得它们在 JavaScript 中的表现也和在其他语言中一样。</p><p>这里面有一些非常重要但却不太为人所知的细微差别。</p><p>我其实不太赞同将它们称为“逻辑运算符”，因为这不太准确。称它们为“选择器运算符”（selector operators）或者“操作数选择器运算符”（operand selector operators）更恰当些。</p><p>为什么？因为和其他语言不同，在 JavaScript 中它们返回的并不是布尔值。</p><p>它们的返回值是两个操作数中的一个（且仅一个）。即选择两个操作数中的一个，然后返回它的值。</p><blockquote><p>引述 ES5 规范 11.11 节： &amp;&amp; 和 || 运算符的返回值并不一定是布尔类型，而是两个操作数其中一个的值。</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = 42;</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = &quot;abc&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">var c = null;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">a || b; // 42</span></span>
<span class="line"><span style="color:#A6ACCD;">a &amp;&amp; b; // &quot;abc&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">c || b; // &quot;abc&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">c &amp;&amp; b; // null</span></span></code></pre></div><p>在 C 和 PHP 中，上例的结果是 true 或 false ，在 JavaScript（以及 Python 和 Ruby）中却是某个操作数的值。 || 和 &amp;&amp; 首先会对第一个操作数 （a 和 c ）执行条件判断，如果其不是布尔值（如上例）就先进行 ToBoolean 强制类型转换，然后再执行条件判断。</p><p>对于 || 来说，如果条件判断结果为 true 就返回第一个操作数（a 和 c ）的值，如果为 false 就返回第二个操作数（b ）的值。</p><p>&amp;&amp; 则相反，如果条件判断结果为 true 就返回第二个操作数（b ）的值，如果为 false 就返回第一个操作数（a 和 c ）的值。</p><p>|| 和 &amp;&amp; 返回它们其中一个操作数的值，而非条件判断的结果（其中可能涉及强制类型转换）。c &amp;&amp; b 中 c 为 null ，是一个假值，因此 &amp;&amp; 表达式的结果是 null （即 c 的值），而非条件判断的结果 false 。</p><p>换一个角度来理解：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">|| b;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 大致相当于(roughly equivalent to):</span></span>
<span class="line"><span style="color:#A6ACCD;">a ? a : b;</span></span>
<span class="line"><span style="color:#A6ACCD;">a &amp;&amp; b;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 大致相当于(roughly equivalent to):</span></span>
<span class="line"><span style="color:#A6ACCD;">a ? b : a;</span></span></code></pre></div><p>之所以说大致相当，是因为它们返回结果虽然相同但是却有一个细微的差别。在 a ? a : b 中，如果 a 是一个复杂一些的表达式（比如有副作用的函数调用等），它有可能被执行两次（如果第一次结果为真）。而在 a || b 中 a 只执行一次，其结果用于条件判断和返回结果（如果适用的话）。a b 和 a ? b : a 也是如此。</p><p>下面是一个十分常见的 || 的用法，也许你已经用过但并未完全理解：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo(a,b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    a = a || &quot;hello&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    b = b || &quot;world&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log( a + &quot; &quot; + b );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">foo(); // &quot;hello world&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">foo( &quot;yeah&quot;, &quot;yeah!&quot; ); // &quot;yeah yeah!&quot;</span></span></code></pre></div><p>a = a || &quot;hello&quot; （又称为 C# 的“空值合并运算符”的 JavaScript 版本）检查变量 a ，如果还未赋值（或者为假值），就赋予它一个默认值（&quot;hello&quot; ）。</p><p>再来看看 &amp;&amp; 。 有一种用法对开发人员不常见，然而 JavaScript 代码压缩工具常用。就是如果第一个操作数为真值，则 &amp;&amp; 运算符“选择”第二个操作数作为返回值，这也叫作“守护运算符”（guard operator），即前面的表达式为后面的表达式“把关”：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">function foo() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log( a );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var a = 42;</span></span>
<span class="line"><span style="color:#A6ACCD;">a &amp;&amp; foo(); // 42</span></span></code></pre></div><p>foo() 只有在条件判断 a 通过时才会被调用。如果条件判断未通过，a &amp;&amp; foo() 就会悄然终止（也叫作“短路”，short circuiting），foo() 不会被调用。这样的用法对开发人员不太常见，开发人员通常使用 if (a) { foo(); } 。但 JavaScript 代码压缩工具用的是 a &amp;&amp;foo() ，因为更简洁。以后再碰到这样的代码你就知道是怎么回事了。</p><p>|| 和 &amp;&amp; 各自有它们的用武之地，前提是我们理解并且愿意在代码中运用隐式强制类型转换。</p><p>你大概会有疑问：既然返回的不是 true 和 false ，为什么 a &amp;&amp; (b || c) 这样的表达式在 if 和 for 中没出过问题？</p><p>这或许并不是代码的问题，问题在于你可能不知道这些条件判断表达式最后还会执行布尔值的隐式强制类型转换。 例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var a = 42;</span></span>
<span class="line"><span style="color:#A6ACCD;">var b = null;</span></span>
<span class="line"><span style="color:#A6ACCD;">var c = &quot;foo&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if (a &amp;&amp; (b || c)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log( &quot;yep&quot; );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>这里 a &amp;&amp; (b || c) 的结果实际上是 &quot;foo&quot; 而非 true ，然后再由 if 将 foo 强制类型转换为布尔值，所以最后结果为 true 。</p><p>现在明白了吧，这里发生了隐式强制类型转换。如果要避免隐式强制类型转换就得这样：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">if (!!a &amp;&amp; (!!b || !!c)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log( &quot;yep&quot; );</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="符号的强制类型转换" tabindex="-1">符号的强制类型转换 <a class="header-anchor" href="#符号的强制类型转换" aria-label="Permalink to &quot;符号的强制类型转换&quot;">​</a></h3><p>目前我们介绍的显式和隐式强制类型转换结果是一样的，它们之间的差异仅仅体现在代码可读性方面。</p><p>但 ES6 中引入了符号类型，它的强制类型转换有一个坑，在这里有必要提一下。ES6 允许从符号到字符串的显式 强制类型转换，然而隐式 强制类型转换会产生错误，具体的原因不在本书讨论范围之内。 例如：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var s1 = Symbol( &quot;cool&quot; );</span></span>
<span class="line"><span style="color:#A6ACCD;">String( s1 ); // &quot;Symbol(cool)&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">var s2 = Symbol( &quot;not cool&quot; );</span></span>
<span class="line"><span style="color:#A6ACCD;">s2 + &quot;&quot;; // TypeError  Cannot convert a Symbol value to a string</span></span></code></pre></div><p>符号不能够被强制类型转换为数字（显式和隐式都会产生错误），但可以被强制类型转换为布尔值（显式和隐式结果都是true ）。</p><h3 id="宽松相等和严格相等" tabindex="-1">宽松相等和严格相等 <a class="header-anchor" href="#宽松相等和严格相等" aria-label="Permalink to &quot;宽松相等和严格相等&quot;">​</a></h3><p>宽松相等（loose equals）== 和严格相等（strict equals）=== 都用来判断两个值是否“相等”，但是它们之间有一个很重要的区别，特别是在判断条件上。</p><p>常见的误区是“== 检查值是否相等，=== 检查值和类型是否相等”。听起来蛮有道理，然而还不够准确。很多 JavaScript 的书籍和博客也是这样来解释的，但是很遗憾他们都错了。</p><h4 id="相等比较操作的性能" tabindex="-1">相等比较操作的性能 <a class="header-anchor" href="#相等比较操作的性能" aria-label="Permalink to &quot;相等比较操作的性能&quot;">​</a></h4><p>我们来看一看两种解释的区别。</p><p>根据第一种解释（不准确的版本），=== 似乎比 == 做的事情更多，因为它还要检查值的类型。第二种解释中 == 的工作量更大一些，因为如果值的类型不同还需要进行强制类型转换。</p><p>有人觉得 == 会比 === 慢，实际上虽然强制类型转换确实要多花点时间，但仅仅是微秒级（百万分之一秒）的差别而已。</p><p>如果进行比较的两个值类型相同，则 == 和 === 使用相同的算法，所以除了 JavaScript 引擎实现上的细微差别之外，它们之间并没有什么不同。</p><p>如果两个值的类型不同，我们就需要考虑有没有强制类型转换的必要，有就用 == ，没有就用 === ，不用在乎性能。</p><p>== 和 === 都会检查操作数的类型。区别在于操作数类型不同时它们的处理方式不同。</p><h4 id="抽象相等" tabindex="-1">抽象相等 <a class="header-anchor" href="#抽象相等" aria-label="Permalink to &quot;抽象相等&quot;">​</a></h4><h3 id="比较少见的情况" tabindex="-1">比较少见的情况 <a class="header-anchor" href="#比较少见的情况" aria-label="Permalink to &quot;比较少见的情况&quot;">​</a></h3>`,493),e=[o];function t(c,i,r,C,A,u){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{y as __pageData,h as default};
