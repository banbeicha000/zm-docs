
export const demoObj = {
    copyText: {
        dom: `<p>
              <button id="button" type="primary" is="ui-button">复制当前网址</button>
              <button id="button2" type="primary" is="ui-button">复制输入框里面的内容</button></p>
              <p>
                 <textarea id="output" cols="60" rows="5" placeholder="用来粘贴测试" is="ui-textarea"></textarea>
              </p>
              <p>直接复制内容：<button id="button3" type="primary" is="ui-button">不设置按钮参数</button>
          </p>`,
        script: `var copyText = function (button, content, success) {
    if (!button) {
        return
    }

    if (typeof content == 'function') {
        success = content
        content = null
    }

    success = success || function () {}

    // 是否降级使用
    var isFallback = !navigator.clipboard

    if (typeof button == 'string' && !content) {
        if (content === false) {
            isFallback = true
        }
        content = button
        button = null
    }

    var eleTextarea = document.querySelector('#tempTextarea')
    if (!eleTextarea && isFallback) {
        eleTextarea = document.createElement('textarea')
        eleTextarea.style.width = 0
        eleTextarea.style.position = 'fixed'
        eleTextarea.style.left = '-999px'
        eleTextarea.style.top = '10px'
        eleTextarea.setAttribute('readonly', 'readonly')
        document.body.appendChild(eleTextarea)
    }

    var funCopy = function (text, callback) {
        callback = callback || function () {}

        if (!isFallback) {
            navigator.clipboard.writeText(text).then(function () {
                callback()
                // 成功回调
                success(text)
            }, function() {
                // 禁止写入剪切板后使用兜底方法
                copyText(text, false)
                callback()
                // 成功回调
                success(text)
            })

            return
        }

        eleTextarea.value = text
        eleTextarea.select()
        document.execCommand('copy', true)

        callback()
        // 成功回调
        success(text)
    };

    if (!button) {
        funCopy(content)
        return
    }

    // 事件绑定
    button.addEventListener('click', function (event) {
        var strCopy = content
        if (content && content.tagName) {
            strCopy = content.textContent || content.value
        }
        // 复制的文字内容
        if (!strCopy) {
            return
        }

        funCopy(strCopy, function () {
            // 复制成功提示
            var eleTips = document.createElement('span')
            eleTips.className = 'text-popup'
            eleTips.innerHTML = '复制成功'
            document.body.appendChild(eleTips)
            // 事件
            eleTips.addEventListener('animationend', function() {
                eleTips.parentNode.removeChild(eleTips)
            })
            
            eleTips.style.left = (event.pageX - eleTips.clientWidth / 2) + 'px'
            eleTips.style.top = (event.pageY - eleTips.clientHeight) + 'px'
        })
    })

    var strStyle = '.text-popup { animation: textPopup 1s both; -ms-transform: translateY(-20px); color: #01cf97; user-select: none; white-space: nowrap; position: absolute; z-index: 99; }@keyframes textPopup {0%, 100% { opacity: 0; } 5% { opacity: 1; } 100% { transform: translateY(-50px); }}'

    var eleStyle = document.querySelector('#popupStyle')
    if (!eleStyle) {
        eleStyle = document.createElement('style')
        eleStyle.id = 'popupStyle'
        eleStyle.innerHTML = strStyle
        document.head.appendChild(eleStyle)
    }
}

copyText(button, location.href, function (text) {
    console.log('复制成功：' + text)
})
copyText(button2, output, function (text) {
    console.log('复制成功：' + text)
})

button3.onclick = function () {
    copyText('CSS demo', function (text) {
        console.log('复制成功：' + text)
    })
    // 改变按钮状态
    this.setAttribute('type', 'success')
}`,
        style: `:root {
    /* 基础颜色变量 */
    --ui-blue: #2a80eb;
    --ui-dark: #4c5161;
    --ui-white: #ffffff;
    --ui-green: #1cad70;
    --ui-orange: #f59b00;
    --ui-red: #eb4646;
    /* 边框颜色 */
    --ui-border: #d0d0d5;
    /* 圆角变量 */
    --ui-radius: 4px;
    /* 基础字号 */
    --ui-font: 14px;
    /* 动画时间 */
    --ui-animate-time: .2s;
    /* 基本尺寸单元 */
    --ui-line-height: 20px;
    --ui-component-height: 40px;
}

/* button基础变量 */
:root {
    --ui-button-height: var(--ui-component-height, 40px);
    --ui-button-line-height: var(--ui-line-height, 20px);
    --ui-button-color: var(--ui-dark, #4c5161);
    --ui-button-loading-img: url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cpath d='M512 1024q-104 0-199-40-92-39-163-110T40 711Q0 616 0 512q0-15 10.5-25.5T36 476t25.5 10.5T72 512q0 90 35 171 33 79 94 140t140 95q81 34 171 34t171-35q79-33 140-94t95-140q34-81 34-171t-35-171q-33-79-94-140t-140-95q-81-34-171-34-15 0-25.5-10.5T476 36t10.5-25.5T512 0q104 0 199 40 92 39 163 110t110 163q40 95 40 199t-40 199q-39 92-110 163T711 984q-95 40-199 40z' fill='%232a80eb'/%3E%3C/svg%3E") no-repeat;
}

.ui-button,
[is="ui-button"] {
    display: inline-block;
    line-height: var(--ui-button-line-height);
    font-size: var(--ui-font, 14px);
    text-align: center;
    color: var(--ui-white, #fff);
    border-radius: var(--ui-radius, 4px);
    border: 1px solid var(--ui-button-color);
    padding: calc((var(--ui-button-height) - var(--ui-button-line-height) - 2px) / 2) calc(var(--ui-button-height) / 2.5);
    min-width: 80px;
    background: var(--ui-button-color) no-repeat center;
    text-decoration: none;
    box-sizing: border-box;
    transition: border-color var(--ui-animate-time, .2s), box-shadow var(--ui-animate-time, .2s), opacity var(--ui-animate-time, .2s);
    fill: currentColor;
    font-family: inherit;
    cursor: pointer;
    overflow: visible;
}

@media (prefers-reduced-motion: reduce) {
    .ui-button,
    [is="ui-button"] {
        transition: none;
    }
}

.ui-button[width="100%"],
[is="ui-button"][width="100%"] {
    width: 100%;
}

div.ui-button,
div[is="ui-button"] {
    display: block;
}

/* Chrome/Firefox的outline会由Keyboard.js帮忙呈现 */
@supports (-webkit-mask: none) {
    button,
    [type="button"],
    [type="submit"],
    [tabindex] {
        outline: 0 none;
    }
}
::-moz-focus-inner {
    border: 0;
}

.ui-button:hover,
[is="ui-button"]:hover {
    color: var(--ui-white, #fff);
    text-decoration: none;
}
.ui-button:not(.disabled):not(.loading):not(:disabled):hover,
[is="ui-button"]:not(.disabled):not(.loading):not(:disabled):hover  {
    filter: brightness(1.05);
}

.ui-button:not(.disabled):not(.loading):active,
[is="ui-button"]:not(.disabled):not(.loading):active {
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1),
    inset 0 0 0 100px rgba(0, 0, 0, 0.1);
}
.ui-button[type="normal"],
.ui-button[data-type="normal"],
[is="ui-button"][type="normal"],
[is="ui-button"][data-type="normal"] {
    --ui-button-color: var(--ui-white, #fff);
    color: var(--ui-dark, #4c5161);
    border-color: var(--ui-border);
}

/* primary button */
.ui-button[data-type="primary"],
.ui-button[data-type="remind"],
.ui-button[type="primary"],
.ui-button[type="remind"],
[is="ui-button"][data-type="primary"],
[is="ui-button"][data-type="remind"],
[is="ui-button"][type="primary"],
[is="ui-button"][type="remind"] {
    --ui-button-color: var(--ui-blue, #2a80eb);
}

/* success button */
.ui-button[data-type="success"],
.ui-button[type="success"],
[is="ui-button"][data-type="success"],
[is="ui-button"][type="success"] {
    --ui-button-color: var(--ui-green, #1cad70);
}

/* warning button */
.ui-button[data-type^="warn"],
.ui-button[type^="warn"],
[is="ui-button"][data-type^="warn"],
[is="ui-button"][type^="warn"] {
    --ui-button-color: var(--ui-orange, #f59b00);
}

/* danger button */
.ui-button[data-type="danger"],
.ui-button[data-type="error"],
.ui-button[type="danger"],
.ui-button[type="error"],
[is="ui-button"][data-type="danger"],
[is="ui-button"][data-type="error"],
[is="ui-button"][type="danger"],
[is="ui-button"][type="error"] {
    --ui-button-color: var(--ui-red, #eb4646);
}

/* error */
.ui-button[is-error],
[is="ui-button"][is-error] {
    border-color: var(--ui-red, #eb4646) !important;
}`
    },
    bezierDrawLine: {
        dom: `<canvas id="canvas" width="2000" height="1200"></canvas>`,
        style: `canvas {
    display: block;
    width: 1000px;
    height: 600px;
    background: conic-gradient(#eee 25%, white 0deg 50%, #eee 0deg 75%, white 0deg) 0 / 20px 20px;
    margin-inline: auto;
  }
  @media (max-width: 640px) {
    canvas {
      width: 100vw;
      height: 60vw;
    }
  }`,
        script: `let canvas = document.getElementById('canvas')
  let context = canvas.getContext('2d')
  // 绘制尺寸
  let width = canvas.width
  let height = canvas.height

  // 两个方块的坐标、尺寸，颜色等数据
  let data = [{
    x: 800,
    y: 180,
    width: 300,
    height: 180,
    color: 'deepskyblue'
  }, {
    x: 600,
    y: 680,
    width: 320,
    height: 100,
    color: 'deeppink'
  }]

  // 拖拽数据存储
  let store = {}

  // 绘制矩形方法
  let drawRect = function () {
    data.forEach(function (obj) {
      context.beginPath()
      context.fillStyle = obj.color
      context.fillRect(obj.x, obj.y, obj.width, obj.height)
      context.closePath()
    })
  }

  // 绘制连接曲线方法
  let drawCurve = function () {
    // 按照坐标位置排序
    let dataSort = data.sort(function (objA, objB) {
      return (objA.y + objA.height) - (objB.y + objB.height)
    })
    // 知道上下数据
    let from = dataSort[0]
    let to = dataSort[1]

    // 曲线的起点终点
    let fromX = from.x + from.width / 2
    let fromY = from.y + from.height
    let toX = to.x + to.width / 2
    let toY = to.y

    // 曲线控制点坐标
    let cp1x = fromX
    let cp1y = fromY + (toY - fromY) / 2

    let cp2x = toX
    let cp2y = toY - (toY - fromY) / 2

    // 开始绘制曲线
    context.beginPath()
    context.lineWidth = 4
    context.strokeStyle = '#000'
    context.moveTo(fromX, fromY)
    // 绘制曲线点
    context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, toX, toY)
    context.stroke()
  }

  // 绘制方法
  let draw = function () {
    context.clearRect(0, 0, width, height)

    drawRect()
    drawCurve()
  }

  draw()

  // 是否在矩形内
  let isPointInSquare = function (x, y) {
    store.isPointInA = false
    store.isPointInB = false
    // 两个矩形的绘制数据
    data.some(function (obj, index) {
      if (!(x < obj.x || x > obj.x + obj.width || y < obj.y || y > obj.y + obj.height)) {
        return store['isPointIn' + ['A', 'B'][index]] = true
      }
    })
  }

  // 拖拽方块
  canvas.addEventListener('pointerdown', function (event) {
    // 判断坐标是否在图形之内
    let clientX = event.clientX
    let clientY = event.clientY
    // canvas 画布的偏移
    let bound = this.getBoundingClientRect()
    // 点击坐标
    let clickX = clientX - bound.left
    let clickY = clientY - bound.top
    // 缩放比例
    let scaleX = width / bound.width
    let scaleY = height / bound.height
    // 转换为canvas坐标
    let x = clickX * scaleX
    let y = clickY * scaleY

    // 此时可以判断是不是在范围内了
    // 这里的图形比较简单，就不使用 isPointInPath 方法判断了
    isPointInSquare(x, y)
    // 记住位置
    store.clientX = clientX
    store.clientY = clientY
    // 目标元素
    store.dataMatch = data[Number(store.isPointInB)]
    // 记住初始位置
    store.originX = store.dataMatch.x
    store.originY = store.dataMatch.y
    // 记住缩放比例
    store.scaleX = scaleX
    store.scaleY = scaleY
  })
  document.addEventListener('pointermove', function (event) {
    if (!store.isPointInA && !store.isPointInB) {
      return
    }

    event.preventDefault()
    // 需要移动的坐标
    let dataMatch = store.dataMatch
    // 此时的偏移大小
    let distanceX = (event.clientX - store.clientX) * store.scaleX
    let distanceY = (event.clientY - store.clientY) * store.scaleY

    dataMatch.x = store.originX + distanceX
    dataMatch.y = store.originY + distanceY

    // 边界判断
    if (dataMatch.x < 0) {
      dataMatch.x = 0
    } else if (dataMatch.x + dataMatch.width > width) {
      dataMatch.x = width - dataMatch.width
    }

    if (dataMatch.y < 0) {
      dataMatch.y = 0
    } else if (dataMatch.y + dataMatch.height > height) {
      dataMatch.y = height - dataMatch.height
    }
    // 重新绘制
    draw()
  }, {
    passive: false
  })
  document.addEventListener('pointerup', function () {
    store.isPointInA = store.isPointInB = false
  })`
    },
    meter: {
        dom: `<form class="form">
    <label for="un">用户名：</label>
    <p><input id="un" class="ui-input" value="user" readonly></p>
    <label for="pwd">密码：</label>
    <p><input id="pwd" type="password" class="ui-input" autocomplete="new-password" required></p>
    <p class="strong">
        <meter id="meter" min="0" max="12" low="4" high="8" optimum="10"
        value="0"></meter>
    </p>
    <p class="submit">
    <button type="primary" class="ui-button">提交</button>
    </p>
</form>`,
        style: `meter {
    width: calc(3 * var(--size));
    border: 0; /* Safari */
    position: relative;
    --size: 60px;
    --gradient: linear-gradient(to right, red calc(var(--size) - 1px),
    transparent 0 calc(var(--size) + 1px), orange 0 calc(var(--size) * 2 - 1px),
    transparent 0 calc(var(--size) * 2 + 1px), green 0);
}
meter::after {
    content: '弱 中 强 aaaaaaaaaaaaaaaaaaaaaa';
    position: absolute;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    overflow: hidden;
    left: calc(var(--size) / 2 - .5em);
    right: calc(var(--size) / 2 - .5em);
    text-align: justify;
    -webkit-text-fill-color: transparent;
    background: var(--gradient) calc(.5em - var(--size) / 2) / calc(3 * var(--
    size));
    -webkit-background-clip: text;
}
::-webkit-meter-bar {
    height: 12px;
    width: calc(3 * var(--size));
    border: 0;
    background: #eee;
    -webkit-mask: var(--gradient);
    mask: var(--gradient);
}
_::-moz-meter-bar, meter {
    height: 12px;
    background: #eee;
}
::-webkit-meter-even-less-good-value {
    background: red;
}
::-webkit-meter-suboptimum-value {
    background: linear-gradient(to right, red var(--size), orange 0);
}
::-webkit-meter-optimum-value {
    background: linear-gradient(to right, red var(--size), orange 0 calc(2 *
    var(--size)), green 0);
}`,
        script: ` pwd.addEventListener('input', function () {
    var value = this.value
    meter.value = zxcvbn(value).guesses_log10
})`,
        exLink: [{ type: 'script', url: 'https://cdn.bootcdn.net/ajax/libs/zxcvbn/4.4.2/zxcvbn.js'}]
    },
    wordCount: {
        dom: `<h1>Word count rating widget</h1>

<article contenteditable="">
  <h2>Sample heading</h2>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar sed justo sed viverra. Aliquam ac scelerisque tellus. Vivamus porttitor nunc vel nibh rutrum hendrerit. Donec viverra vestibulum pretium. Mauris at eros vitae ante pellentesque bibendum. Etiam et blandit purus, nec aliquam libero. Etiam leo felis, pulvinar et diam id, sagittis pulvinar diam. Nunc pellentesque rutrum sapien, sed faucibus urna sodales in. Sed tortor nisl, egestas nec egestas luctus, faucibus vitae purus. Ut elit nunc, pretium eget fermentum id, accumsan et velit. Sed mattis velit diam, a elementum nunc facilisis sit amet.</p>

  <p>Pellentesque ornare tellus sit amet massa tincidunt congue. Morbi cursus, tellus vitae pulvinar dictum, dui turpis faucibus ipsum, nec hendrerit augue nisi et enim. Curabitur felis metus, euismod et augue et, luctus dignissim metus. Mauris placerat tellus id efficitur ornare. Cras enim urna, vestibulum vel molestie vitae, mollis vitae eros. Sed lacinia scelerisque diam, a varius urna iaculis ut. Nam lacinia, velit consequat venenatis pellentesque, leo tortor porttitor est, sit amet accumsan ex lectus eget ipsum. Quisque luctus, ex ac fringilla tincidunt, risus mauris sagittis mauris, at iaculis mauris purus eget neque. Donec viverra in ex sed ullamcorper. In ac nisi vel enim accumsan feugiat et sed augue. Donec nisl metus, sollicitudin eu tempus a, scelerisque sed diam.</p>

  <p is="word-count"></p>
</article>`,
        script: '// Create a class for the element\n' +
            'class WordCount extends HTMLParagraphElement {\n' +
            '  constructor() {\n' +
            '    // Always call super first in constructor\n' +
            '    super()\n' +
            '\n' +
            '    // count words in element\'s parent element\n' +
            '    const wcParent = this.parentNode\n' +
            '\n' +
            '    function countWords(node){\n' +
            '      const text = node.innerText || node.textContent\n' +
            '      return text.trim().split(/\\s+/g).filter(a => a.trim().length > 0).length\n' +
            '    }\n' +
            '\n' +
            '    const count = `Words: ${countWords(wcParent)}`\n' +
            '\n' +
            '    // Create a shadow root\n' +
            '    const shadow = this.attachShadow({mode: \'open\'})\n' +
            '\n' +
            '    // Create text node and add word count to it\n' +
            '    const text = document.createElement(\'span\')\n' +
            '    text.textContent = count\n' +
            '\n' +
            '    // Append it to the shadow root\n' +
            '    shadow.appendChild(text)\n' +
            '\n' +
            '    // Update count when element content changes\n' +
            '    setInterval(function() {\n' +
            '      const count = `Words: ${countWords(wcParent)}`\n' +
            '      text.textContent = count\n' +
            '    }, 200)\n' +
            '  }\n' +
            '}\n' +
            '\n' +
            '// Define the new element\n' +
            'customElements.define(\'word-count\', WordCount, { extends: \'p\' })'
    },
    popUpInfo: {
        dom: `<h1>Pop-up info widget - web components</h1>

<form>
  <div>
    <label for="cvc">Enter your CVC <popup-info img="/zm-docs/imgs/img_info.png" data-text="Your card validation code (CVC) is an extra security feature — it is the last 3 or 4 numbers on the back of your card."></popup-info></label>
    <input type="text" id="cvc">
  </div>
</form>`,
        script: 'class PopUpInfo extends HTMLElement {\n' +
            '    constructor() {\n' +
            '      // Always call super first in constructor\n' +
            '      super()\n' +
            '\n' +
            '      // Create a shadow root\n' +
            '      const shadow = this.attachShadow({mode: \'open\'})\n' +
            '\n' +
            '      // Create spans\n' +
            '      const wrapper = document.createElement(\'span\')\n' +
            '      wrapper.setAttribute(\'class\', \'wrapper\')\n' +
            '\n' +
            '      const icon = document.createElement(\'span\')\n' +
            '      icon.setAttribute(\'class\', \'icon\')\n' +
            '      icon.setAttribute(\'tabindex\', 0)\n' +
            '\n' +
            '      const info = document.createElement(\'span\')\n' +
            '      info.setAttribute(\'class\', \'info\')\n' +
            '\n' +
            '      // Take attribute content and put it inside the info span\n' +
            '      const text = this.getAttribute(\'data-text\')\n' +
            '      info.textContent = text\n' +
            '\n' +
            '      // Insert icon\n' +
            '      let imgUrl\n' +
            '      if(this.hasAttribute(\'img\')) {\n' +
            '        imgUrl = this.getAttribute(\'img\')\n' +
            '      } else {\n' +
            '        imgUrl = \'/zm-docs/imgs/img_info.png\'\n' +
            '      }\n' +
            '\n' +
            '      const img = document.createElement(\'img\')\n' +
            '      img.src = imgUrl\n' +
            '      icon.appendChild(img)\n' +
            '\n' +
            '      // Create some CSS to apply to the shadow dom\n' +
            '      const style = document.createElement(\'style\')\n' +
            '      console.log(style.isConnected)\n' +
            '\n' +
            '      style.textContent = `\n' +
            '      .wrapper {\n' +
            '        position: relative;\n' +
            '      }\n' +
            '\n' +
            '      .info {\n' +
            '        font-size: 0.8rem;\n' +
            '        width: 200px;\n' +
            '        display: inline-block;\n' +
            '        border: 1px solid black;\n' +
            '        padding: 10px;\n' +
            '        background: white;\n' +
            '        border-radius: 10px;\n' +
            '        opacity: 0;\n' +
            '        transition: 0.6s all;\n' +
            '        position: absolute;\n' +
            '        bottom: 20px;\n' +
            '        left: 10px;\n' +
            '        z-index: 3;\n' +
            '      }\n' +
            '\n' +
            '      img {\n' +
            '        width: 1.2rem;\n' +
            '      }\n' +
            '\n' +
            '      .icon:hover + .info, .icon:focus + .info {\n' +
            '        opacity: 1;\n' +
            '      }\n' +
            '    `\n' +
            '\n' +
            '      // Attach the created elements to the shadow dom\n' +
            '      shadow.appendChild(style)\n' +
            '      console.log(style.isConnected)\n' +
            '      shadow.appendChild(wrapper)\n' +
            '      wrapper.appendChild(icon)\n' +
            '      wrapper.appendChild(info)\n' +
            '    }\n' +
            '  }\n' +
            '\n' +
            '// Define the new element\n' +
            'customElements.define(\'popup-info\', PopUpInfo)'
    },
    expandingList: {
        dom: `<h1>Expanding list web component</h1>
<ul is="expanding-list">
  <li>UK
    <ul>
      <li>Yorkshire
        <ul>
          <li>Leeds
            <ul>
              <li>Train station</li>
              <li>Town hall</li>
              <li>Headrow</li>
            </ul>
          </li>
          <li>Bradford</li>
          <li>Hull</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>USA
    <ul>
      <li>California
        <ul>
          <li>Los Angeles</li>
          <li>San Francisco</li>
          <li>Berkeley</li>
        </ul>
      </li>
      <li>Nevada</li>
      <li>Oregon</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Not</li>
  <li>an</li>
  <li>expanding</li>
  <li>list</li>
</ul>`,
        style: `ul {
    list-style-type: none;
  }

li::before {
display:inline-block;
width: 1rem;
height: 1rem;
margin-right: 0.25rem;
content:"";
}

.open::before, .closed::before {
background-size: 1rem 1rem;
position: relative;
top: 0.25rem;
opacity: 0.3;
}

.open::before {
background-image: url(/zm-docs/imgs/img_arrow_circle_right.png);
transform: rotateZ(90deg);
}

.closed::before {
background-image: url(/zm-docs/imgs/img_arrow_circle_right.png);
}

.closed .closed::before, .closed .open::before {
display: none;
}`,
        script: `class ExpandingList extends HTMLUListElement {
constructor() {
  // Always call super first in constructor
  // Return value from super() is a reference to this element
  self = super()
  console.log(self, this,'this')

  // Get ul and li elements that are a child of this custom ul element
  // li elements can be containers if they have uls within them
  const uls = Array.from(self.querySelectorAll('ul'))
  const lis = Array.from(self.querySelectorAll('li'))
  console.log(uls,lis)

  // Hide all child uls
  // These lists will be shown when the user clicks a higher level container
  uls.forEach(ul => {
    ul.style.display = 'none'
  })

  // Look through each li element in the ul
  lis.forEach(li => {
    // If this li has a ul as a child, decorate it and add a click handler
    if (li.querySelectorAll('ul').length > 0) {
      // Add an attribute which can be used  by the style
      // to show an open or closed icon
      li.setAttribute('class', 'closed')

      // Wrap the li element's text in a new span element
      // so we can assign style and event handlers to the span
      const childText = li.childNodes[0]
      const newSpan = document.createElement('span')

      // Copy text from li to span, set cursor style
      newSpan.textContent = childText.textContent
      newSpan.style.cursor = 'pointer'

      // Add click handler to this span
      newSpan.onclick = self.showul

      // Add the span and remove the bare text node from the li
      childText.parentNode.insertBefore(newSpan, childText)
      childText.parentNode.removeChild(childText)
    }
  })
}

// li click handler
showul = function (e) {
  // next sibling to the span should be the ul
  const nextul = e.target.nextElementSibling

  // Toggle visible state and update class attribute on ul
  if (nextul.style.display == 'block') {
    nextul.style.display = 'none'
    nextul.parentNode.setAttribute('class', 'closed')
  } else {
    nextul.style.display = 'block'
    nextul.parentNode.setAttribute('class', 'open')
  }
}
}

// Define the new element
customElements.define('expanding-list', ExpandingList, { extends: 'ul' })`
    },
    templateParagraph: {
        dom: `<template id="my-paragraph">
  <style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  </style>
  <p>My paragraph</p>
</template>

<my-paragraph></my-paragraph>`,
        script: `customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      super()
      let template = document.getElementById("my-paragraph")
      let templateContent = template.content

      const shadowRoot = this.attachShadow({ mode: "open" })
      shadowRoot.appendChild(templateContent.cloneNode(true))
    }
  },
)`
    },
    slotParagraph: {
        dom: `<h1>Simple template</h1>

  <template id="my-paragraph">
    <style>
      p {
        color: white;
        background-color: #666;
        padding: 5px;
      }
    </style>
    <p><slot name="my-text">My default text</slot></p>
  </template>

  <my-paragraph>
    <span slot="my-text">Let's have some different text!</span>
  </my-paragraph>

  <my-paragraph>
    <ul slot="my-text">
      <li>Let's have some different text!</li>
      <li>In a list!</li>
    </ul>
  </my-paragraph>`,
        script: `customElements.define('my-paragraph',
  class extends HTMLElement {
    constructor() {
      super()

      const template = document.getElementById('my-paragraph')
      const templateContent = template.content

      this.attachShadow({mode: 'open'}).appendChild(
        templateContent.cloneNode(true)
      )
    }
  }
)

const slottedSpan = document.querySelector('my-paragraph span')

console.log(slottedSpan.slot, slottedSpan.assignedSlot, slottedSpan)`
    },
    slotDetail: {
        dom: `<h1>element-details - web component using <code>&lt;template&gt;</code> and <code>&lt;slot&gt;</code></h1>

<template id="element-details-template">
  <style>
  details {font-family: "Open Sans Light",Helvetica,Arial}
  .name {font-weight: bold; color: #217ac0; font-size: 120%}
  h4 { margin: 10px 0 -8px 0; }
  h4 span { background: #217ac0; padding: 2px 6px 2px 6px }
  h4 span { border: 1px solid #cee9f9; border-radius: 4px }
  h4 span { color: white }
  .attributes { margin-left: 22px; font-size: 90% }
  .attributes p { margin-left: 16px; font-style: italic }
  </style>
  <details>
    <summary>
      <span>
        <code class="name">&lt;<slot name="element-name">NEED NAME</slot>&gt;</code>
        <i class="desc"><slot name="description">NEED DESCRIPTION</slot></i>
      </span>
    </summary>
    <div class="attributes">
      <h4><span>Attributes</span></h4>
      <slot name="attributes"><p>None</p></slot>
    </div>
  </details>
  <hr>
</template>

<element-details>
  <span slot="element-name">slot</span>
  <span slot="description">A placeholder inside a web
    component that users can fill with their own markup,
    with the effect of composing different DOM trees
    together.</span>
  <dl slot="attributes">
    <dt>name</dt>
    <dd>The name of the slot.</dd>
  </dl>
</element-details>

<element-details>
  <span slot="element-name">template</span>
  <span slot="description">A mechanism for holding client-
    side content that is not to be rendered when a page is
    loaded but may subsequently be instantiated during
    runtime using JavaScript.</span>
</element-details>`,
        style: `dl { margin-left: 6px; }
dt { font-weight: bold; color: #217ac0; font-size: 110% }
dt { font-family: Consolas, "Liberation Mono", Courier }
dd { margin-left: 16px }`,
        script: `customElements.define('element-details',
  class extends HTMLElement {
    constructor() {
      super()
      const template = document
        .getElementById('element-details-template')
        .content
      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(template.cloneNode(true))
  }
})`
    },
    attributeChangedCallback: {
        dom: `<button id="btnShow">显示loading</button>
<button id="btnHidden">隐藏loading</button>

<p><button id="btnToast">显示toast</button></p>
<my-toast id="toast">toast info</my-toast>`,
        style: `@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
my-toast:not([open]), my-loading:not([open]) {
    display: none;
}
my-toast {
    padding: 0.25rem 1rem;
}
my-toast, my-loading {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    background-color: #000a;
    border-radius: 0.25rem;
    color: #fff;
}
my-toast, my-loading {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    background-color: #000a;
    border-radius: 0.25rem;
    color: #fff;
}
my-loading {
    padding: 1rem;
    border-radius: 0.25rem;
}
my-loading .spin {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}`,
        script: `class MyToast extends HTMLElement {
  static get observedAttributes () {
    return ['open']
  }
  constructor () {
    super()
  }
  get open () {
    return this.hasAttribute('open')
  }

  set open (val) {
    this.toggleAttribute('open', val)
  }

  render () {
    setTimeout(() => {
      this.hide()
    }, 1500)
  }

  show () {
    this.open = true
  }

  hide () {
    this.open = false
  }

  attributeChangedCallback (name, oldVal, newVal) {
    if (name === 'open' && this.open) {
      this.render()
    }
  }
}

if (!customElements.get('my-toast')) {
  customElements.define('my-toast', MyToast)
}

/* loading 类 */
class MyLoading extends MyToast {
  render () {
    // 显示 loading 内容
    this.innerHTML = '<i class="spin"></i>'
  }
}

if (!customElements.get('my-loading')) {
  customElements.define('my-loading', MyLoading)
}

MyLoading.show = function () {
  if (!this.loading) {
    this.loading = new MyLoading()
    document.body.append(this.loading)
  }

  this.loading.open = true
  return this.loading
}
MyLoading.hide = function () {
  if (this.loading) {
    this.loading.open = false
  }
  return this.loading
}

/* 调用 */
btnToast.onclick = function () {
  toast.show()
}

btnShow.onclick = function () {
  MyLoading.show()
}
btnHidden.onclick = function () {
  MyLoading.hide()
}`
    },
    awaitOf: {
        dom: `<div id="box"></div>`,
        script: `let asyncIterable = {
    [Symbol.asyncIterator]() {
        return {
            i: 0,
            next() {
                if (this.i < 3) {
                    return Promise.resolve({ value: this.i++, done: false })
                }

                return Promise.resolve({ done: true })
            },
        }
    },
}

;(async function () {
    for await (num of asyncIterable) {
        console.log(num)
    }
})()
async function* streamAsyncIterator(stream) {
    const reader = stream.getReader()
    try {
        while (true) {
            const { done, value } = await reader.read()
            if (done) {
                return
            }
            yield value
        }
    } finally {
        reader.releaseLock()
    }
}
// 从 url 获取数据并使用异步 generator 来计算响应值的大小
async function getResponseSize(url) {
    const response = await fetch(url)
    // Will hold the size of the response, in bytes.
    let responseSize = 0
    // 使用 for-await-of 循环。异步 generator 会遍历响应值的每一部分
    for await (const chunk of streamAsyncIterator(response.body)) {
        // Incrementing the total response length.
        responseSize += chunk.length
    }

    console.log('Response Size: '+responseSize+' bytes')
    // expected output: "Response Size: 1071472"
    return responseSize
}
async function getContent() {
        box.textContent = await getResponseSize("https://jsonplaceholder.typicode.com/photos")
    }
    getContent()`
    },
    popover: {
        dom: `<button id="toggleBtn">Toggle popover help UI</button>

<p id="keyboard-help-para">Click the above button or press "h" to get help with using our awesome app.</p>

<div id="mypopover">
  <h2>Help!</h2>

  <p>You can use the following commands to control the app</p>

  <ul>
    <li>Press <ins>C</ins> to order cheese</li>
    <li>Press <ins>T</ins> to order tofu</li>
    <li>Press <ins>B</ins> to order bacon</li>
    <hr />
    <li>Say "Service" to summon the robot waiter to take your order</li>
    <li>Say "Escape" to engage the ejector seat</li>
  </ul>
</div>`,
        style: `:popover-open {
    position: absolute;
    inset: unset;
    bottom: 5px;
    right: 5px;
}

@media all and (max-width: 600px) {
    :popover-open {
      left: 5px;
    }
}`,
        script: `function supportsPopover() {
  return HTMLElement.prototype.hasOwnProperty("popover")
}

const popover = document.getElementById("mypopover")
const toggleBtn = document.getElementById("toggleBtn")

const keyboardHelpPara = document.getElementById("keyboard-help-para")

const popoverSupported = supportsPopover()

if (popoverSupported) {
  popover.popover = "auto"
  toggleBtn.popoverTargetElement = popover
  toggleBtn.popoverTargetAction = "toggle"

  document.addEventListener("keydown", (event) => {
    if (event.key === "h") {
      popover.togglePopover()
    }
  })
} else {
  toggleBtn.style.display = "none"
  keyboardHelpPara.style.display = "none"
}`
    },
    sinClock: {
        dom: `<div class="clock">
  <div class="clock-face" id="app">
    <time datetime="12:00">12</time>
    <time datetime="1:00">1</time>
    <time datetime="2:00">2</time>
    <time datetime="3:00">3</time>
    <time datetime="4:00">4</time>
    <time datetime="5:00">5</time>
    <time datetime="6:00">6</time>
    <time datetime="7:00">7</time>
    <time datetime="8:00">8</time>
    <time datetime="9:00">9</time>
    <time datetime="10:00">10</time>
    <time datetime="11:00">11</time>
    <span class="arm seconds"></span>
    <span class="arm minutes"></span>
    <span class="arm hours"></span>
  </div>
</div>`,
        style: `.clock {
  --clock-width: clamp(5rem, 60vw, 20rem);
  --face-width: 88cqi;
  --radius: calc((var(--face-width) - var(--time-size)) / 2);
  --time-size: 12cqi;

  background: #222;
  block-size: var(--clock-width);
  border-radius: 1rem;
  container-type: inline-size;
  display: grid;
  font-family: ui-sans-serif, system-ui, sans-serif;
  inline-size: var(--clock-width);
  margin-inline: auto;
  place-content: center;
}

.clock-face {
  aspect-ratio: 1;
  background: #fff;
  border-radius: 50%;
  block-size: var(--face-width);
  font-size: 6cqi;
  font-weight: 700;
  inline-size: var(--face-width);
  position: relative;
}

.clock-face time {
  --x: calc(var(--radius) + (var(--radius) * cos(var(--index) * 30deg)));
  --y: calc(var(--radius) + (var(--radius) * sin(var(--index) * 30deg)));
  display: grid;
  height: var(--time-size);
  left: var(--x);
  place-content: center;
  position: absolute;
  top: var(--y);
  width: var(--time-size);
}

.clock-face time:nth-child(1) { --index: 9; }
.clock-face time:nth-child(2) { --index: 10; }
.clock-face time:nth-child(3) { --index: 11; }
.clock-face time:nth-child(4) { --index: 0; }
.clock-face time:nth-child(5) { --index: 1; }
.clock-face time:nth-child(6) { --index: 2; }
.clock-face time:nth-child(7) { --index: 3; }
.clock-face time:nth-child(8) { --index: 4; }
.clock-face time:nth-child(9) { --index: 5; }
.clock-face time:nth-child(10) { --index: 6; }
.clock-face time:nth-child(11) { --index: 7; }
.clock-face time:nth-child(12) { --index: 8; }

.arm {
  background-color: var(--_abg);
  border-radius: calc(var(--_aw) * 2);
  display: block;
  height: var(--_ah);
  left: calc((var(--face-width) - var(--_aw)) / 2);
  position: absolute;
  top: calc((var(--face-width) / 2) - var(--_ah));
  transform: rotate(0deg);
  transform-origin: bottom;
  width: var(--_aw);
}
.seconds {
  --_abg: rgb(255, 140, 5);
  --_ah: 40cqi;
  --_aw: 1cqi;
  animation: turn 60s linear infinite;
  animation-delay: var(--indexs, 0ms);
}

.minutes {
  --_abg: #333;
  --_ah: 35cqi;
  --_aw: 2cqi;
  animation: turn 3600s steps(60, end) infinite;
  animation-delay: var(--minute, 0ms);
}

.hours {
  --_abg: #333;
  --_ah: 25cqi;
  --_aw: 2.5cqi;
  animation: turn 43200s linear infinite; /* 60 * 60 * 12 */
  animation-delay: var(--hour, 0ms);
  position: relative;
}

.hours::before {
  background-color: #fff;
  border: 1cqi solid #333;
  border-radius: 50%;
  content: "";
  display: block;
  height: 4cqi;
  position: absolute;
  bottom: -3cqi;
  left: -1.75cqi;
  width: 4cqi;
}


@keyframes turn {
  to {
    transform: rotate(1turn);
  }
}`,
        script: 'const time = new Date()\n' +
            'const hour = -3600 * (time.getHours() % 12)\n' +
            'const mins = -60 * time.getMinutes()\n' +
            'app.style.setProperty(\'--minute\', `${mins}s`)\n' +
            'app.style.setProperty(\'--hour\', `${(hour+mins)}s`)'
    },
    canvasWithLight: {
        dom: `<section class="wrapper">
    <video controls muted class="video" id="js-video" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    <canvas width="10" height="6" aria-hidden="true" class="canvas" id="js-canvas"></canvas>
</section>`,
        style: `:root {
    --color-background: rgb(15, 15, 15);
}

body {
    margin: 0 auto;
    padding: 0;
    background-color: var(--color-background);
    min-height: 100%;
}

/* Required styles */

*,
*::before,
*::after {
    box-sizing: border-box;
}

.video,
.canvas {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
}

.wrapper {
    position: relative;
    box-shadow: inset 0 0 4rem 4.5rem var(--color-background);
    max-width: 1600px;
    margin: 0 auto;
}

.canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.4;
}

.video {
    padding: 7rem;
}

@media (prefers-reduced-motion: reduce) {
    .canvas {
        display: none !important;
    }
}`,
        script: `class VideoWithBackground {
    video
    canvas
    step
    ctx

    constructor(videoId, canvasId) {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

        if (!mediaQuery.matches) {
            this.video = document.getElementById(videoId)
            this.canvas = document.getElementById(canvasId)

            window.addEventListener("load", this.init, false)
            window.addEventListener("unload", this.cleanup, false)
        }
    }

    draw = () => {
        this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height)
    }

    drawLoop = () => {
        this.draw()
        this.step = window.requestAnimationFrame(this.drawLoop)
    }

    drawPause = () => {
        window.cancelAnimationFrame(this.step)
        this.step = undefined
    }

    init = () => {
        this.ctx = this.canvas.getContext("2d")
        this.ctx.filter = "blur(1px)"

        this.video.addEventListener("loadeddata", this.draw, false)
        this.video.addEventListener("seeked", this.draw, false)
        this.video.addEventListener("play", this.drawLoop, false)
        this.video.addEventListener("pause", this.drawPause, false)
        this.video.addEventListener("ended", this.drawPause, false)
    }

    cleanup = () => {
        this.video.removeEventListener("loadeddata", this.draw)
        this.video.removeEventListener("seeked", this.draw)
        this.video.removeEventListener("play", this.drawLoop)
        this.video.removeEventListener("pause", this.drawPause)
        this.video.removeEventListener("ended", this.drawPause)
    }
}

const el = new VideoWithBackground("js-video", "js-canvas")`
    },
    sliderEnter: {
        dom: `<div class="slide-enter-content">
  <p>paragraphs 1</p>
  <p>paragraphs 2</p>
  <p>paragraphs 3</p>
</div>`,
        style: `@keyframes slide-enter {
    0% {
        transform: translateY(10px);
        opacity: 0
    }

    to {
        transform: translateY(0);
        opacity: 100
    }
}
.slide-enter-content > * {
    --stagger: 0;
    --delay: 150ms;
    --start: 0ms;
    animation: slide-enter 1s both 1;
    animation-delay: calc(var(--start) + var(--stagger) * var(--delay));
}

.slide-enter-content > *:nth-child(1) { --stagger: 1; }
.slide-enter-content > *:nth-child(2) { --stagger: 2; }
.slide-enter-content > *:nth-child(3) { --stagger: 3; }`
    },

}
