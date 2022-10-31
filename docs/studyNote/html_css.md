# 前端课程

前端课程总共包括以下几个部分：

1. HTML + CSS 
2. JavaScript
3. node.js
4. Vue.js 

参考手册：

1. MDN ： https://developer.mozilla.org/zh-CN
2. w3school https://www.w3school.com.cn/
3. 菜鸟教程 ： https://www.runoob.com/html/html-tutorial.html

前端的地位：任何人，在使用的时候，永远先看的是前端，后端再说。前端就相当于一个人长的什么样子！后端是内在！

前端技术支撑 ： HTML + CSS + JavaScript ；

1. html 相当于一个人的骨骼 ， 就是页面的支架（结构）。
2. CSS 表示 这个页面 长什么样子 。
3. JavaScript 则 赋予了 页面动态的效果。

## 杂项

位 ： bit ， 在计算机中， 1byte（字节） = 8 bit 位 
字节 ：byte ， 在网络中，传输数据的形式一般是以字节为单位进行传递。
字符 ：char ， 在网络中， 传输文本类型的数据都一般以 字符为单位进行传输。

具体内容可以参看 ： 计算机网络中有描述、计算机组成原理中有描述、操作系统中有描述。

## HTML

下载 ： 谷歌、edge、firefox、欧鹏浏览器

要保证兼容性！

### 浏览器的私有前缀

出现这个前缀的目的是为了兼容老版本的浏览器

内核负责:

- 渲染部分

- js引擎

<mark>`-webkit-`前缀: 谷歌浏览器的内核兼容</mark>

-ms- 前缀:IE的私有属性

-o- 前缀:OpenGL

-moz- 前缀:火狐

### 绪论

HTML ： 超文本标记语言 （HyperText Markup Language），是构建页面的基础。

https: s 代表了一个加密

一般指代的是标签、标记等；形式上：由小于号和大于号组成。例如：```<html>``` .
通常是成对出现的：例如：```<html></html>``` ; <开始标签></结束标签> ;
通常的形式为：

```
<开始标签 属性1="值1" 属性2="值2"....></结束标签>
```

有时候，仅仅出现一个开始标签，没有结束标签，那么这种标签被成为 自封闭标签( 自己结束自己)。
例如：```<input>```

### HTML 注释 ：

注释 是给人看的，不参加整体浏览器中翻译工作。形式：

```
<!-- 这里是注释内容  --> 
```

### `<meta>`标签：元标签

charset属性：字符编码方案，一般是UTF-8，还有gbk（国标扩展），ASCII，Big5，UTF-16/32等

name属性：

- name="keywords" content="提供给搜索引擎的关键字"

- name="viewport" content="width=device-width", initial-scale=1.0

- name="author" content="写作者名字"

### `<maequee>`标签:滚动标签

设置width属性:例如设width="50%",表示从50%的屏幕开始滚动弹幕

设置loop属性:设置滚动次数.默认为-1(持续滚动)

### 元素

----

元素：由开始标记（开始标签） 、 中间内容 和 结束标记（结束标签）组成。
在HTML 中，元素一般分为：块级元素，行内元素。

#### 块级元素

块级元素占据其父元素（容器）的整个水平空间，垂直空间等于其内容高度，因此创建了一个“块“

> 典型块级元素: div / p / main / section / h1~h6 / form / body / table / tr / ul / ol / li / dl

- 粗暴的理解是：块级元素能够<u>单独</u>占用一行（不考虑CSS等内容，仅查看标签内容）
- 块元素可以嵌套行元素

#### 行内元素

行内元素：一个行内元素只占据它对应标签的边框所包含的空间 

> 典型行级元素: span / a / em / strong / img / code / td / font / u(下划线)

- 多个元素共用一行，且大小等于内容的大小
- 不能设置宽和高
- 行元素只能嵌套行元素

#### 行内元素与块级元素对比

- 内容
    一般情况下，行内元素只能包含数据和其他行内元素。(内容分散在多个line box中, 一行为一个line box)
    而块级元素可以包含行内元素和其他块级元素。这种结构上的包含继承区别可以使块级元素创建比行内元素更”大型“的结构。

- 格式
  默认情况下，行内元素不会以新行开始，而块级元素会新起一行。

<mark>最终决定盒子生成是块级元素还是行级元素的是display属性!!!</mark>

### 视觉格式化模型

----

e.g`<p>今天<p>天气</p>很好</p>`

在html里显示出来的结果跟正确写法没有区别

但审查元素时会发现: html自动变成了`<p>今天</p><p>天气</p>很好<p></p>`

**注意:** 这里`今天`和`天气`都被自动包裹到`<p>`里面, 但是`很好`没有; 此时内容产生了一个<u>溢出</u>

### 全局属性

全局属性是**所有 HTML 元素共有的**属性; 它们<mark>可以用于所有元素</mark>，即使属性可能对某些元素不起作用。

#### 属性的作用：

- 可以为元素增加一些附加信息
- 说明：是放在开始标签中的，具体形式为：属性名="属性值"

#### 常用的全局属性

- class ： 规定 元素中的 class 的名字 （class 不翻译，但是经常被译为类）； 可以有多个，之间使用 空格 隔开 

- contenteditable : 表示元素是否可以在浏览器中是可以编辑的。
  
  - 属性值有且仅有两个：true、false
  - 为了简略 通常只会存在 该属性名 ，而没有属性值。但是强烈建议 书写完整！
  - 如果该属性存在，那么其属性值就是true ；否则就是 false。

- data-* : 可以用来存储数据
  
  - data 后边的* 可以是任意字符串 ，那么就表示了具体的一个数据的名称，具体的属性值就是数据的值
  - 这种方案可以使用JavaScript 来进行获取指定的元素中的数据
  - 但是，这种方案容易存在数据安全隐患。
  - 在前端，经常采用 session、cookie、或 数据库的存储方案。

- dir ： 表示 文字的书写方向
  
  - 具体的值：ltr、rtl、auto

- draggable : 表示元素是否是可以拖拽的，通常与拖拽的功能一起使用

- hidden ： 表示元素是否是隐藏的，如果加上这个属性则表示隐藏。

- id :表示元素的id （全页面唯一）
  
  - 用途：经常用于 JavaScript 来进行获取页面元素的。
  - 建议：id 具有明确意义

- lang ： 指定语言，可以用于任何元素，但不保证有效。（了解）
  
  - 通常是在 html 标签中使用

- spellcheck ： 元素是否进行拼写检查，通常与contenteditable 一起连用。
  
  - 但是，更多的检查是通过 JavaScript 进行检查的。

- style ： 表示元素的具体的样式，行内样式（在元素的style 属性中书写CSS样式）

- tabindex : 表示键入 tab 键的时候， 具体的顺序是什么 ； 取值1 是第一。

- title ： 表示具体的标题 ； 表示鼠标移动到元素上产生的额外信息。

- name : 所有的标签都可以声明一个 name 属性，主要用来表示具体的名字，但是在 input 标签中如果使用名字，则作为表单提交中的key存在

### 标签的等级

#### 文本级标签：

只能在其元素内部存放 文字、图片、表单元素等内容。

- 例如：p

#### 容器级标签：

可以存放任何东西

- 标题标签
- div

### 基本的标签

#### p 标签：

表示一个段落 , 上下具有间距

- 在以前是存在属性：align ， 表示段落的位置，现在已经被废弃，建议使用CSS 中的 text-align 进行替代。
- p 标签是一个文本级的标签，只能放文字、图片、表单元素。
- p 标签在整个页面中，出现的频率比较低。

#### 标题标签：

hx 系列（h1 h2 h3 h4 h5 h6 ）<mark>一个页面只能出现一个h1</mark>

#### 水平线：hr

其中所有的属性都**不建议使用**。

- align ： 水平线的位置，默认是left；可选值 left、right、center
- size：粗细，以像素为单位。
- width：宽度，可以是绝对值或相对值。
- color：水平线的颜色
- noshade ： 不要阴影。

#### 强制换行：br

存在的原因：因为在HTML 中，换行意味着是空格组成的，而多个空格会进行重叠。

#### 超链接：a

可以通过点击，跳转到另一个页面。其中的内容可以是文字 

`herf="#"`时表示跳转到当前页面自身

##### 属性

- href ： 创建指向另一个文档的链接(引用了这个链接,这个网站的资源不需要加载到本机里面,与src的引入不同)
- target : 该属性定义了在什么地方打开新的连接
  - <mark>_blank</mark> ：新窗口打开
  - _parent ： 在父窗口中打开链接
  - _self ： 默认 ， 当前页面跳转 
  - _top ： 在当前窗体打开链接，并替换当前的整个窗体(框架页)。

在所有浏览器中，链接的默认外观是：

- 未被访问的链接带有下划线而且是蓝色的

- 已被访问的链接带有下划线而且是紫色的

- 活动链接带有下划线而且是红色的

##### 使用方式：锚点

通过超链接，可以定位到某一个锚点上。

#### iframe内联框架

能够将另一个 HTML 页面嵌入到当前页面中。

`<iframe src="想引用的页面的地址" name="框架标识名">`

----

#### 使用方式:与`<a>`标签联动

```html
<iframe src="https://www.bilibili.com" name="hello"></iframe>
<a href="https://www.baidu.com" target="hello">点击跳转</a>
```

结果: iframe原先内部网页是bilibili, 点击旁边的a标签后iframe里网页变成百度。

----

#### 图片 img

必须带有src ，否则 没有图片的展示效果

- 图片的类型可以是：jpg、png、gif等，不可以是：psd、ai等。
  
  > 注意：其实并不是在页面上直接插入图片，而是插入图片的引用地址，此时就需要将图片先传到服务器上。

- 属性：src 表示图片的路径（URL），src（source），这里有两种写法：
  
  - 绝对路径：
    - 写的是其他站点的图片
  - 相对路径：相对于当前页面所在的路径 
    - 经常使用的标记 ： `.` 表示当前路径 ； `..` 表示上一层目录
    - 注意：`.` 和 `..` 只会出现在开头 ，不会出现在中间等情况

- 其他属性：
  
  - alt ： 在图片没有加载出来的情况，显示的文字
  
  - width 和 height 表示图片的宽和高；但是不建议使用(会造成缩放、导致图片被拉伸变形)
    
    > 注意:src是引入!会把这个资源加载到本网页里面,资源加载越多网站越卡

#### div 、span (本身毫无意义)

- div 是一个块级元素 ， 可以把整个区域进行划分成单独的区域 ； 仅作为一个容器而存在。

- span : 是一个行内元素 , 可以将区域进行划分；依旧是作为一个容器而存在。

#### 字体标签 ：

仅仅做为了解，在某些场合十分适用

- 常用标记：下划线（u）、中划线或删除线（s、del）、斜体（i、em）、粗体（b）、上标（sup）、下标（sub）
- 已经废除的标记：font、strong ， 存在替代方案：CSS 中的 font 系列。

#### pre标签

预定义（预格式化），经常用于书写计算机的源码

#### code 标签

用于显示代码。但是具体的语义为：计算机的代码文本

#### 其他的具有语义的标签：

- em 经常用于强调
- strong 定义重要的文本
- samp 定义样本文本
- var  定义变量。您可以将此标签与 `<pre>` 及`<code>`标签配合使用。

#### 表格table

----

- 涉及到的标签：table、tr、td、th、caption、thead、tbody、tfoot、col、colgroup

- table 表示声明一个表格
  
  - table里有两个属性很好用:<mark>cellpadding和cellspacing</mark>,用来做表格内文字布局的一些效果(css也可以实现,但是非常麻烦! )

- tr 表格中的一行

- td 一行中的单元格

- tbody ： 表格的身体， 也就是具体表格中的内容的部分。 可以放在table 中的任何位置（不可以放在 tfoot 、 thead 标签内部 ）
  
  > <mark>系统会默认生成一个tbody在table和tr中间,也就是table>tbody>tr></mark>

- thead : 表格的头部信息 可以放在table 中的任何位置（不可以放在 tfoot 、 tbody 标签内部 ）

- th ： 表头的单元格，经常的格式是：thead > tr > th 

- tfoot ： 表格的底部内容 ， 可以放在table 中的任何位置（不可以放在 thead 、 tbody 标签内部 ）

- caption ： 表示表格的标题 ，在页面中的整个表格之上的一个位置

- col ( 了解 )： 定义表格中的列，并用于定义所有公共单元格上的公共语义； 放在 colgroup 标签内部 【比较鸡肋】
  
  - 有且仅有一个属性没有被废弃：span ： 表示 选中了几个单元格
  - col 中的样式的指定 仅可以是：
    - border : 仅当表格元素上的 'border-collapse' 设置为 'collapse' 时，各种边框属性才适用于列。
    - background : 背景属性为列中的单元格设置背景，但前提是单元格和行都具有透明背景
    - width : 给出了列的最小宽度
    - visibility : 如果列的“可见性”设置为“折叠”，则不会呈现列中的任何单元格，并且会剪切跨越到其他列的单元格

- td、th 的重要属性 ：<mark>跨越单元格(合并单元格)</mark>
  
  - colspan ： 跨列
  
  - rowspan ： 跨行 
    
    > 合并了几个格子后面就要去掉几个格子( 不然会被挤出去 )

#### 列表

----

- 具体的标签为：ul、ol、li

- 列表分为：有序列表（order List）、无序列表（unorder List）

- 针对于 ul、ol 中的type 属性，其中 ol 可以使用type 属性；而ul不建议使用，可以通过 CSS#list-style-type 这个样式来进行修改

- ol 中的属性（没有type 属性）
  
  - reversed ： 表示反转，默认是不添加的；ol中的顺序默认是升序，添加该属性之后，则变为降序
  - start : 表示从哪里开始

- dl、dt、dd : 也被成为自定义列表，但是使用的程度没有 ul、ol 高。
  
  - dd就是普通的列表,跟li没啥区别
  
  - dt可以理解为列表的头部,跟ul类似

- 具体的样式， 在CSS 中进行描述 

#### 表单 : form

用来收集信息

涉及到的标签有：form、input、select、option、button、textarea、label

#### label

用于提升用户友好度(比如绑定了label的checkbox可以点击字就选上,而不是非要点击checkbox才能选上)

需要在label的for属性里面填需要关联的id才能把二者关联上。

#### form

----

用来声明一个表单 ，其中存在属性

- action : 表示需要将 表单中收集的数据，提交到哪里去（Servlet、RequestMapping、其他的内容【PHP、ASP、Python】）

- autocomplete ： 规定表单是否应该启用自动填充功能。自动填充允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项

- enctype ： 可选的属性值：
  
  - application/x-www-form-urlencoded ： 默认的类型 ， 一般不考虑上传的内容是字节或字符。
  - multipart/form-data ： 在上传 字节 内容的时候 采用。（一般来说，指代的是上传文件）
  - text/plain ： 纯文本，没有任何格式，一般不会采用

- method : 表单提交的方式
  
  - 在HTML 中， 仅给出了两种 ： Get 、Post
  - 在 HTTP 协议中， 存在 8 种 提交数据的方式 ： Get、Post、Put、Delete、Head、Option、Trace、CONNECT
  - 有关于 HTTP 协议的相关内容，具体参看 《计算机网络》
  - 表单默认采用的提交方式是 get
  - 如果 enctype 的取值为 multipart/form-data ， 则 method 必须采用 post 方式提交 。

- name 表单的名称，基本不用

- novalidate 属性规定当提交表单时不对表单数据（输入）进行验证。有且仅有一个值；标志属性 ； 如果加上了这个属性，那么建议通过 JavaScript 来进行验证

- target ： 与 a 标签中的属性 target 的取值、效果 一致

#### input标签

用于收集信息。值有：

- autofocus : 自动获取光标 ， 使用场景是仅有一个输入框的时候，直接使用。

- disable ： 禁用

- readonly ： 只读 
  
  > 从效果上看:disable , readonly 效果一致；disable 修饰的内容，不会被提交到服务器

- height 、width ： 指定input 标签的宽和 高 (只针对type="image")

- min :  规定 `<input>`元素的最小值。

- max  :规定 `<input> `元素的最大值。min 与 max 经常用于 type=number 的 input 框

- maxLength : 规定 `<input>` 元素中允许的最大字符数。

- multiple : 可以选择多个输入；适用于image、file；更加适用于 文件的选择

- pattern  ： 用于验证 `<input>` 元素的值的正则表达式。 比较适用于：text、search、url、tel、email 和 password。

- placeholder ： 提示信息 , 节省空间

- required ： 依旧是一个标志属性 , 表示<mark>必须填写</mark>，如果不填写该字段，则表单不允许提交

- size : 以字符数计的 `<input>` 元素的可见宽度( 字符是英文字符)

- src ： 显示为提交按钮的图像的 URL ， 只针对于 image 有效。

- step ：  `<input> `元素的合法数字间隔； 经常用于number 中， 表示每次增加或减少 多少（step的值）

- value ： 表示 input 中输入的值 

- type ： input 框的 具体类型 ; 取值不一样，导致在页面上效果不一样 ； 以下具体的取值很有可能不被识别
  
  - text : 文本框， 其中输入的内容会原封不动的放在input 框内部
  
  - password ： 密码框， 其中输入内容，会被加密
  
  - placeholder : 显示文字提示，可以当占位符
  
  - radio ： 单选按钮
    
    > 注意：多个单选按钮需要有相同的name 属性，从而保证互斥的效果
  
  - checkbox : 复选框 ， 可以选择多个，每一个选项都互不影响。
    
    - type为checked时，可以给input加一个checked属性，表示默认为选中状态
  
  - submit : 提交按钮， 会提交表单到表单中的 action属性中的 URL 。
  
  - reset ：重置按钮 ， 是将标签中的内容恢复到初始状态。
  
  - button ： 普通按钮，仅仅是一个按钮，没有任何效果；如果想要出现指定的效果，则需要JavaScript 的配合。
  
  - email ： 是一个文本框，只不过是加上了邮箱格式的验证
  
  - file : 进行文件选择，注意：此时的表单中的method 属性必须是 post ；enctype 属性的取值必须是 multipart/form-data
  
  - hidden : 隐藏表单；通常是用来偷偷摸摸的传递一些数据
  
  - color ：可以进行选择颜色；如果浏览器不支持的话，就会变成文本框
  
  - date ： 选择日期，注意没有时间；如果浏览器不支持的话，就会变成文本框
  
  - time : 选择时间，没有日期；如果浏览器不支持的话，就会变成文本框
  
  - datetime-local : 根据具体的本地区域来进行选择的；如果浏览器不支持的话，就会变成文本框
  
  - week : 选择 周数 ；如果浏览器不支持的话，就会变成文本框
  
  - month ： 选择月份； 如果浏览器不支持的话，就会变成文本框
  
  - number ： 选择指定的数字，如果浏览器不支持就会变成文本框（移动端用的多）
    
    - 例如在手机输入验证码的时候，手机会<u>自动调取</u>数字键盘
  
  - search : 搜索框，效果不明显；如果浏览器不支持的话，就会变成文本框
  
  - tel ： 只能放电话号码 ；如果浏览器不支持的话，就会变成文本框
  
  - url ： 只能放URL  ；如果浏览器不支持的话，就会变成文本框
  
  - range ： 精确值, 不重要的输入数字的一个<mark>滑块控件</mark> ; 可以通过选择来选择一个数值 ； 通常结合 min 与 max 一起使用； 如果浏览器不支持的话，就会变成文本框
  
  - image ： 作用是负责提交表单 ， 通常与 src、width、height 一起使用；如果浏览器不支持的话，就会变成文本框
    
    - 说明 ： src 图片的URL、width 表示图片的宽度、height 表示图片的高度

input在HTML 5里里的新增属性，例如：

- step：跳步,`step="5"`表示每隔5个数增加/减少。

- placeholder：占位，提示信息

- required：必填项

- autofocus：自动获取光标，自动聚焦到一个地方

- multiple：是一个布尔属性，规定允许用户输入到` <input> `元素的多个值。用于提交多个文件(摁住ctrl加鼠标单击即可选择多个文件进行提交)

- autocomplete：自动补全；规定输入字段是否应该启用自动完成功能。
  
  - 允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。(其实就是记录了输入历史)
  
  - 适用于下面的` <input>` 类型：text、search、url、tel、email、password、datepickers、range 和 color。
  
  - 值：`autocomplete="on/off"`
  
  - 如果把这个属性放到form标签里面，那么这个form里面的所有input都可以有这个属性的效果。
  
  - 使用这个值时，input标签需要有name属性。

- preload：预加载，如果有autoplay则忽略这个属性。

#### select下拉框

可以在CSS里面用`appearance:none`来<mark>去除select默认的右侧下拉小三角图标</mark>

- 涉及的标签： select、option

- select 标签用于声明一个下拉框，其中填充的内容是 option

- select 会默认会显示第一个option

- select 中的属性：
  
  - multiple 多选
  - size：可以看见几个选项
  - form: 把form与select关联

- checked ： 表示默认选中，经常用在 单选按钮 或 复选框中

- selected ：表示默认选中，经常用在 下拉框中的option 中

#### textarea 文本域

可以在其中书写大量的文本内容

#### datalist

元素可能的选项列表

#### button按钮

- 属性 type ； 取值如下：
  
  - submit ： 提交表单 ;与` <input type="submit"/> `的效果一致
  
  - reset ： 重置表单;与 `<input type="reset"/> `的效果一致

- button ： 普通按钮;与`<input type="button"/> `的效果一致

#### 音频与视频

- 音频：audio ；存在属性：
  
  - src : 要播放的音乐的url
  - controls ： 显示 控制组件 （播放按钮、声音等内容）
  - autoplay : 页面加载完成之后，自动播放 ; 一般不会使用，有些浏览器会自动阻止。
  - loop ： 循环
  - muted ： 加上该属性，则表示静音 ； 一般使用较少 （HTML 5新增）
  - preload ： 可以被 autoplay 属性所忽略；较少使用，采用默认即可。

- 视频：video ; 存在属性
  
  - src ： 要播放的 视频路径
  - controls ： 控制组件
  - autoplay ： 自动播放
  - loop 循环
  - muted 加上该属性，则表示静音 ； 一般使用较少
  - preload ： 可以被 autoplay 属性所忽略；较少使用，采用默认即可。
  - poster ： 点击播放按钮之前，视频显示的图片（HTML 5新增）
  - width、height ： 视频所在的区域的宽和高

- source : 作为 audio、video或picture 三个标签的补充内容，是一个空元素(使用较少)
  
  - 如果audio 与 video 中的src 属性所存在的视频如果不支持，那么就采用这里的内容进行播放
    
    - 带有两个源文件的音频播放器。浏览器需要选择它所支持的源文件（如果都支持则任选一个）
  
  - 写法：
    
    ```html
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    ```
    
    > 注意 : 在页面上 存放 音频、视频、图片都会消耗大量的资源 ；

#### 转义字符

- 空格 ：`&nbsp`

- `&` : `&amp`

- `<` : `&lt`

- `>`:`&gt`

- © ： `&copy`

- 剩下的，自行查找。

### HTML布局方式

HTML 的默认布局方式 是 流内容布局方式，也就是从上到下，从左到右的方式 。（不能使用CSS进行布局的处理）

- 解决布局的方案: 更加关注语义信息
  
  - header 标签
  
  - footer 底部标签
  
  - nav 导航栏
  
  - main 主内容
  
  - aside 侧边栏

## CSS

### 参考：

- w3 ： https://www.w3school.com.cn/cssref/index.asp

- 菜鸟教程：https://www.runoob.com/cssref/css-reference.html

- MDN ： https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference

- 概念：CSS 指层叠样式表 (Cascading Style Sheets) ； 主要作用是：定义HTML元素的样式；样式通常存在于样式表中，而样式表有不同的表现形式；外部样式表（不在同一个文件中的样式表）通常存储在.css 文件中。

### 语法：

- 选择器 { 样式的声明1:具体的样式值1 ; 样式的声明2:具体的样式值2 ;....}

- 存在特殊情况 ： 没有选择器，样式的声明直接在 style 属性中声明

- 注释 ： CSS 中存在注释 ；`/* 这里是CSS 注释内容 */` ； 在不用的开发工具中（IDE），存在注释的快捷键 。
  
  <mark>注释一定不要注释错注释符号!!!!!不然代码不报错但是运行结果不对!!!!!!</mark>

### 引用CSS 的方式

1. 内联（行内） ： 在 元素内部使用 style 属性 决定其样式

2. 外链 ： 在 head 元素 中，使用标签 link 进行链接
   
   > 外链方式引入css时, link标签里面一定要有`rel="stylesheet"` !!!!!
   > 
   > (表示link标签引入的是css)

3. 导入 ： 在 style 元素 中，使用 `@import url("地址")` 来进行导入

4. 嵌入 ： 在 style 元素中，使用 选择器 进行 选择元素，并 添加样式

**注意:** 样式显示的优先级为"就近原则",谁距离代码近谁的样式就先显示(行内>嵌入>外链)

---

**为什么线上项目都使用外链式而不使用导入式?( 根本原因)**

外链式: 页面打开,css就开始加载

导入式: 页面运行完毕之后css才开始加载

----

### 单位

px：像素

em：相对的值，相对于父级元素

- 浏览器默认1em=16px

- 计算方式：n em 乘 16px = 最终的px

- 如果父级没设置font-size，那么就一直找，找到body为止

rem：基准值，基准于浏览器默认值（16px）

- 注意：可以通过在body样式里面设置font-size来设置基准值

vh：屏幕的百分比高

vw：屏幕的百分比宽

- <mark>如果出现一个很小的横向滚动条，那么可能是因为内容变多出现竖向滚动条</mark>

- <mark>滚动条也是占位置的！！所以会出现一个很小的横向滚动条！！！</mark>

- 可以选择给一个98vw或者99vw这种来避免这种情况

fr：份数

#### CSS函数

##### calc()函数：进行简单的加减运算。

例子：两个div，宽都是100vw，第一个div高200px，第二个div需要和第一个div一起组成一个满屏效果。

如果直接把第二个div的高设置为100vh，那么此时会出现一个横向滚动条，因为电脑以为你想让第二个div的高跟屏幕一样高，所以组合起来无法实现效果。

那么解决办法：给第二个div的高设置为`calc(100vh(-)200px);`

此时，不会出现横向滚动条！

##### minman(最小值，最大值)

可以用在grid布局里面的计算

#### 满屏效果

注意：如果单位不统一，那么一定会出现需要计算的情况。计算vh、vw的时候需要考虑，因为你没有办法计算每个用户的屏幕占比，所以需要用到计算函数calc()!!!!

### 选择器

#### id选择器

使用 元素中的 id 属性进行选择 ； 

使用规则是：#具体的id 

- 注意：在一个HTML 页面中，<mark>id 唯一</mark> ；

> 为了让js可以更好的工作，id必须是唯一的。因为id相当于在内存到cpu的过程开了一条捷径，如果id重复，那么cpu就不知道这条指令实际要给哪个对象。

- 如果在 外部的CSS 文件中使用了 id 选择器，请保证整个项目中的id 唯一。
- id 选择器一般使用在 当前页面中， 通常以内嵌的方式使用。

#### class 选择器

使用规则是 :  .className

> 注意class命名不能是数字开头也不能是全数字

#### 标签选择器

例如 :  p{...}   div{...}

----

前面三个都是CSS 2的选择器，下面是CSS 3选择器

----

#### 层次选择器

- 后代选择器 :  中间用空格隔开；选择在某个元素后面的所有..元素
  
  例如：`body p{...}`为  选中在body后的所有p标签

- 子选择器：中间用`>`隔开；在某个元素后面的第一代元素
  
  例如：`body>p{...}`为 选中在body后的第一代p标签

- 相邻兄弟选择器：中间用`+`连接；当前选中元素的<mark>向下相邻</mark>的<mark>一个</mark>元素
  
  例如：`.active+p{...}`为 选中在`active`类向下周围的第一个p标签

- 通配用兄弟选择器：中间用`~`连接；当前选中元素的<mark>向下的所有同级元素</mark>
  
  例如：`.active~p{...}`为 选中在`active`类向下周围的所有p标签

#### 属性选择器

根据是否含有该属性来选择，大项目用的多，小项目用的少（太麻烦了没必要）

- 例1：`[type]{...}`选中所有 有 `type`属性 的元素。

- 例2：`input[type="password"]`选中所有`input`中属性为`password`的元素

- 例3：`a[class *= "link"]`选中a中class<u>包含</u>“link”的元素
  
  - `*=`：包含……
  
  - `$=`：以……开头
  
  - `^=`：以……结尾，用来选整个网页的图片很方便。`[.jpg]`
  
  - `==`：绝对等于……
  
  - `~=value`：表示带有以……命名的属性的元素，并且该属性是一个<u>以空格作为分隔的值</u>列表，其中至少有一个值为 value。
  
  - `|=value`：表示带有以……命名的属性的元素，属性值为“value”或是以“value-”为前缀

#### 结构伪类选择器

可与层次选择器叠加使用

> : ... -child

- 例1：`p:first-child`指定<mark>只有</mark>当p元素是其父级的<mark>第一个子级</mark>的样式。

- 例2：`p:last-child`选择<u>每个</u>p元素是其父级的最后一个<mark>子级</mark>。

- 例3：`p:only-child`选择<u>每个</u>p元素是其父级的唯一<mark>子级</mark>
  
  > : nth- ... -child

- 例4：`p:nth-child(1) {...}`选择<u>每个</u>p元素是其父级的<mark>第1个子元素</mark>

- 例5：`p:nth-last-child(1) {...}`选择<u>每个</u>p元素的是其父级的<mark>最后1个子元素</mark>，<u>从最后一个子项计数</u>

- 例6：`p:nth-of-type(1) {...}`选中属于`p`父元素的第N个子元素`p`，这里是选第一个。（按类型选择）
  
  - 选择元素是父级的第n个元素
    
    > N可以是：数字(选择第几个)、关键字(奇数odd/偶数even)、
    > 
    > 公式(n从0开始计算，常见公式`2n`、`2n+1`、`5n`【5的倍数开始要】、`n+5`【从第五个开始往后全部都要】、`-n+5`【只要前五个】)
    > 
    > **注意：** 第0个元素和被超出的元素都是忽略不被计算的

- 例7：`p:nth-last-of-type(1) {...}`选中属于`p`父元素的倒数第N个子元素`p`，这里是选倒数第一个。（按类型选择）
  
  - 选择元素是父级的倒数第n个元素
  
  > 按<mark>类型</mark>选中<mark>每个</mark>

- 例8：`p:first-of-type {...}`选择<u>每个p元素</u>是其父级的<mark>第一个</mark>p元素。

- 例9：`p:last-of-type {...}`选择<u>每个p元素</u>是其父级的<mark>最后一个</mark>p元素。

- 例10：`p:only-of-type {...}`选择<u>每个p元素</u>是其父级的<mark>唯一</mark>p元素。

- target
  
  enable
  
  disable

- selection
  
  > 更多详见CSS Dinner、[CSS 选择器 | 菜鸟教程](https://www.runoob.com/cssref/css-selectors.html)

 

#### 状态伪类选择器

根据不同状态确定不同样式

- `:link`：默认状态，未被访问过且没有悬停。

- `:visited`：已被访问过；点击后变成……样式

- `:hover`：鼠标悬停在其上时，样式变为……

- `:active`：正在点击时；<u>按下（还没松开）</u>后，样式变为……

- `:focus`：输入框输入时，样式变为……

- `:checked`：是否点击

**注意：** 有书写顺序，顺序为`link->visited->hover->active`

> W3C规范使得浏览器无视`:link`和`:visited`样式规则，以此来保护用户隐私

- 多标签选择器（选择器组）：用逗号隔开即可

 

#### 伪元素选择器

`::before`：在……元素之前

`::after`：在……元素之后

如果用`::before`显示icon的时候需要旋转，直接写transform没有用，需要给`::before`设置成`inline-block`才可以让transform生效。

----

###### 小技巧：清除浮动

常用：在小组合作时，清除浮动 (用::after做出来一个透明的不占位置的块来清除浮动)

```css
.box::after{
    content: "";/*对于FF/Chrome/opera/IE8不能缺少，content可以为空*/
    display: block;/*对于FF/Chrome/opera/IE8不能缺少*/
    height: 0;/*写不写都行，如果想要两行之间有间距，可以调height*/
    width: 0;/*写不写都行*/
    clear: both; /*清除所有浮动*/
    visibility: hidden;/*允许浏览器渲染它，但是不显示出来，这样才能实现清除浮动*/
    /* visibility写不写都行*/
}
```

如果父级元素有固定宽高，那么就不需要这个方法。但flex布局没有固定的宽高，所以需要

----

 

#### 选择器的优先级(权重)

id选择器>类选择器>标签选择器>...

<mark>**注意:** 选择器的优先级可以相加 !!! </mark>

例如:`body>#p1`的权重大于`#p1`, 即 子选择器权重+id选择器权重 > id选择器权重

#### CSS的样式权重

CSS 中的 !important 规则用于增加样式的权重。!important 与优先级无关，但它与最终的结果直接相关，使用一个 !important 规则时，此声明将覆盖任何其他声明。

 

### 背景background

----

#### background

背景可以通过 background 这个属性进行简写所有的 background-* 的属性 ；具体为：

- background ：bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
- 一般的策略是：当复合属性超过3个的时候， 建议拆开写！

#### background-color背景色

可以使用颜色的英文名称（但是要注意是否支持)、可以使用rgb/rgba计算方式、可以使用 #+6位十六进制的数值作为颜色值。

#### background-image背景图片

> 注意: <mark>背景图片无法撑起元素大小</mark> (也就是说如果装在一个空div里面而没有指定这个div的大小, 那么图片不会显示 ! ! ! )

默认的情况：背景图片会 水平方向垂直方向一直平铺 。取值有

- url ：声明一个图片的具体的url；url可以是相对路径；也可以是网络上的资源（http://）
- linear-gradient() : 创建一个表示两种或多种颜色线性渐变的图片; 这种内容一般比较少见。
- radial-gradient() ： 函数用径向渐变创建 "图像"。
- repeating-linear-gradient(angle | to side-or-corner, color-stop1, color-stop2, ...);函数用于创建重复的线性渐变 "图像"。
- repeating-radial-gradient()函数用于创建重复的径向渐变 "图像"。

#### background-repeat背景平铺

背景图像如何重复(平铺)

取值如下：

- repeat ： 这个值是默认值
- no-repeat : 不重复；水平方向与垂直方向都不重复
- repeat-x ： 水平方向重复
- repeat-y : 垂直方向重复

#### background-position背景图像的起始位置

取值可以是：

- 关键字：center、top、bottom、left、right 的组合；两个为一组，例如：left center、right bottom

> 注意: 中间没有逗号 ! ! ! ! 是用空格隔开的 ! ! ! !

- 可以设置 x% , y% ; 一般不用
- 可以设置 xpos ypos; pos 表示单位的意思（可以是像素或其他单位）；如果仅仅指定了一个值，那么另一个值就是50%；
  - 默认图片的位置是在(0,0) ，表示 <mark>从左上角开始</mark>。

> **注意:** 因为网页的右下角坐标无法确定(网页可以无限拉长, 所以只能把零点固定在左上角)

可以使用position属性来处理精灵图。

需要注意的是，<mark>图像移动了多少位置不管在什么情况下都是相对于(0,0)点移动的 ! </mark>

#### background-attachment背景图片滚动方式

设置背景图像是否固定或者随着页面的其余部分滚动。

取值有：

- scroll ： 滚动的 ： 背景图片不会随着页面的滚动而滚动。
- fixed ： 固定的 ； 背景图片不会随着页面的滚动而滚动。
- local ： 背景图片会随着元素内容的滚动而滚动。

#### background-clip背景绘制区域

背景裁剪(绘制)区域 , 配合`no-repeat`使用

取值：

- border-box 默认值；看到的效果：从边框开始进行覆盖 （背景绘制在边框方框内）
- padding-box ：背景绘制在衬距方框内（剪切成衬距方框）。从 padding 开始进行覆盖背景色。
- content-box ： 背景绘制在内容方框内（剪切成内容方框） ; 背景色 仅仅覆盖内容。
- initial : 初始值
- inherit : 继承

----

##### 实用效果:<mark>按文本裁切</mark>

在css里加一行`-webkit-background-clip:text;` 可以按文本来裁切。

必须要给文字属性, 且文本颜色必须为透明`transparent`

在div内随便写文字,即可看到效果。实例如下

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        div{
            width: 500px;
            height: 500px;
            border: 2px solid red; <!--加个边框方便看div大小-->
            background-image: url("../js自学/src/Dio.png");
            background-size: 500px 500px;
            -webkit-background-clip: text;
            color: transparent;
            text-align: center;
            line-height: 500px;
            font-size: 500px;
        }
    </style>
</head>

<body>
<div>❤</div>
</body>
</html>
```

----

#### background-size背景图片的大小

css 3新增属性。

取值有：

- length ： 设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为 auto(自动)
- percentage : 将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"auto(自动)"
- cover : 此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。
- contain : 此时会保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。
- 建议：如果涉及到 大小的内容，建议直接使用 不同的单位进行设置，不要使用CSS样式中提供值。

 

#### background-origin背景图片起始位置

设置图片的起始位置(必须配合`no-repeat`)

- padding-box 背景图像填充框的相对位置
- border-box 背景图像边界框的相对位置
- content-box 背景图像的相对位置的内容框

---

#### CSS 3背景 新增属性

可以添加多个背景图片，更改属性时只需要继续写、中间用逗号隔开即可。

注意背景图片不能重复！（`background-repeat`为`no-repeat`）

> css所有效果都走GPU，js走CPU。现在尽量多使用css来减少cpu负担。

1. CSS 3里面的`background-image`属性里面可以添加多个url（即多个背景图片）

2. CSS 3里面的`background-position`属性可以一行控制多个背景图片的位置。
   
   - `background-position:left top,right bottom;`控制了两个图片的位置，中间使用逗号隔开。
   
   > 可以用这个方法做出例如“相册”的效果。
   > 
   > 原先在一个大的div里面做出4个排布位置不同的图片需要在里面写4个div，现在只需要一次添加多个图片再更改位置即可。

----

 

### linear-gradient渐变属性

语法：`linear-gradient:(方向[可选]，开始颜色，中间颜色、可以有多个，结尾颜色);`

- 如果加了方向，那就需要兼容（加前缀，如`-webkit-`）

- 方向可以上下左右自由组合，默认为top

- 方向可以写角度`30 deg`，角度默认为`0deg`，但是大部分浏览器默认起始角度为`-90deg`。旋转角度是逆时针。
  
  > 注意：可以写一遍background，为了兼容不支持渐变或更低版本的浏览器

还可以写带百分比的渐变: 从0~100逐步递增，百分比代表所占的位置，百分数写在颜色后面

 

### radial-gradient径向渐变

语法：`radial-gradient:(开始位置，形状，颜色、可以有多个);`

跟上面的liner-gradient类似。

 

### transition过渡

一个属性变换到另一个属性的缓慢的过程，是一个综合属性

除了下面介绍的还有很多属性，可以自己参阅手册

语法：`transition: 过渡的属性 , 过渡的样式 , 过渡的时间 ;`

- 过渡的属性，除了能写属性名，还能写`all`

可以做出  鼠标移动到图片上图片缓慢放大  的效果

下面这个例子就是鼠标移动到div上，div颜色从红变绿，从小变大的过程。

```css
div::hover{
    background:green;
    width:400px;
    height:400px;
}

div{
    transition: all 5s;
    background:red;
    width:200px;
    height:200px;
}
```

也可以拿来做照片之间的虚幻切换效果。

 

### transform变换

CSS 3中颠覆性的特征之一,可以实现元素位移/旋转/缩放等效果

同时使用多个转换，其格式为`transform:translateX(),rotate(),scale(),...`

当同时有位移和其他属性的时候，位移要放在最前面！！

可选值有:

- rotate旋转

- translate移动

- scale缩放

- skew扭曲（不常用）

transform是一个二维坐标系,好处:

- 沿着x轴和y轴移动

- 不会影响到其他元素(不脱离文档流)

#### 移动变换

`transform:translate`属性

- transform的百分比是相对于<mark>自身元素的宽高</mark>

- <mark>对行元素无效!</mark>

- 可以拿来解决设置一个div垂直水平居中

- 有`translateX()，translateY()，translateZ()`

- 如果写多个值，空格隔开
  
  - `transform:translateX(50%) transform:translateY(50%);`

#### 旋转变换

`transform:rotate`属性

语法:`transform:rotate(30 deg);`

旋转里面填角度`deg`,角度为正: 顺时针旋转 ; 角度为负: 逆时针旋转，角度填多少都行

- 默认旋转的起始点是元素的中心点

- 旋转中心点可以用`transform-origin:x y;`属性设置
  
  - x/y可以是上下左右关键字，也可以是百分比、像素

> 如果这个元素本身的transform属性里面还有其他的移动,记得也要加入到新的transform属性里面

#### 缩放变换

`transform:scale`属性

语法:`transform:scale(X,Y)`

> 注意：x和y之间用逗号隔开

放大倍数计算方式：放大后元素宽=放大前元素宽 × X；放大后元素高同理。

- 如果直接一个值，相当于写了两个一样的值。

- 如果XY为小数，那么就是缩小，计算方式一样。

要注意：放大或缩小会导致遮挡元素！

跟padding把元素撑大的区别在于：

- padding撑大的基准点在左上角，往其他方向扩大。

- scale的放大基准点在元素的正中心，往四周扩大。

也可以用`transform-origin`来设置缩放中心点

#### 中心点设置

`transform-origin`属性用来设置中心点

语法：`transform-origin:x y;`，xy为关键字。

#### 变换风格transform-style

- `preserve-3d`：让子元素保持3d立体状态

- `flat`：默认值

#### 3d变换

`transform:translate3d`属性

默认情况下，浏览器不会打开3d模式。最好可以加一下浏览器兼容

开启模式：在<mark>被观察者元素的父级盒子内</mark>写属性`perspective`(例如body)

- perspective距离一般为500px~1000px
  
  - `perspective-origin`属性调整：视觉到浏览器角度的设置，调整观感点。
    
    - 默认值为`perspective-origin:50% 50%`;
    
    - 写在舞台元素里面
    
    - 第一个值是水平轴，第二个值是垂直轴

实际上是在2D平面上产生<u>近大远小</u>的视觉效果，只是二维的。

特点：

- 近大远小

- 物体后面遮挡看不见

**注意：** xyz不可以被省略，如果没有就写0

语法：`transform:translate3d(x,y,z) rotate3d(x,y,z,30deg);`

- translate3d有x、y、z三个轴的状态；rotate也有

- rotate3d是综合属性，目前了解就行

##### 3d旋转实例

html

```html
<div id="stage">
    <div id="rotate">
        <div class="front"><img src="1.jpg" aly=""/></div>
        <div class="back"><img src="2.jpg" aly=""/></div>
    </div>
</div>
```

css

```css
/*设置舞台*/
#stage{
    width:400px;/* 设置舞台宽度，跟图片宽度一致*/
    heigth:600px;/* 图片高度*/
    margin:50px auto;/* 上下50px，左右实现水平居中*/ 
    perspective:800px;/* 设置舞台元素*/
    perspective-origin:50% 50%;
/* 舞台就是舞台，3d效果跟他没关系！*/
}

#rotate{
    width:100%;/*因为旋转只在舞台内出现，所以宽高100%就行*/
    height:100%;
    position:relative;
    left:0px;
    top:0px;/* 用relative定位时最好设置一下从哪里定位,即使不动*/
    transform-style:preserve-3d;
    transition:all 2s;/* 过渡*/
/* 让子元素保持3d状态，如果不加的画，子元素还在平面上，不在舞台上，没效果！*/
    /*因为子元素在rotate里面，所以最后两行写在这里最合适*/
}

#rotate div{
    position:absolute;
    left:0px;
    top:0px;/* 设置两张图片重叠*/
}

#rotate .front{
    transform:translateZ(1px);
}

#rotate .back{
    transform:rotateY(180deg);
/* 如果不加这个效果，那么图像在:hover之后会被镜像*/
/* 如果直接把:hover里面的旋转角度改成360，那就相当于没转！*/
/* 所以在看不见的地方再转180就可以把图片镜像回来*/
}

#rotate:hover{
    transform:rotateY(180deg);
}
```

> 可以自己试试更改`perspective`和`perspective-origin`属性的值，查看变化！

 

### 动画animation

是一个综合属性。必要属性：动画名称 动画时间

`animation: 动画名称 动画时间 动画样式 动画延迟时间 动画运行次数 动画播放方向;`

#### @keyframes 规则

`@keyframe`关键帧,可以加任意多个关键帧。`from`表示0，`to`表示100%。

如果您在 @keyframes 规则中指定了 CSS 样式，动画将在特定时间逐渐从当前样式更改为新样式。

要使动画生效，必须将动画<mark>绑定</mark>到某个元素。

下面的例子将 "example" 动画绑定到 `<div> `元素。动画将持续 4 秒钟，同时将 `<div> `的背景颜色从 "red" 逐渐改为 "yellow"：

```css
/* 动画代码 */
@keyframes example { 
 from {
    background-color: red;
    }
 to {
    background-color: yellow;
    } 
}

/* 向此元素应用动画效果 */
div { 
 width: 100px;
 height: 100px;
 background-color: red;
/*绑定*/
 animation-name: example;
 animation-duration: 4s; 
}
```

#### 动画完成时间

`animation-duration`属性定义需要多长时间才能完成动画。

如果未指定，则动画不会发生，因为默认值是 0s。

#### 延迟动画

`animation-delay`属性规定动画开始的延迟时间。

可以是负值。如果使用负值，则动画将开始播放，如同已播放 N 秒。

#### 设置动画应运行多少次

`animation-iteration-count`属性指定动画应运行的次数。

可以是数字，也可以是关键字（<mark>infinite永远持续动画</mark>）

#### 反向或交替运行动画

`animation-direction`属性指定是向前播放、向后播放还是交替播放动画。

可接受以下值：

- normal - 动画正常播放（向前）。默认值
- reverse - 动画以反方向播放（向后）
- alternate - 动画先向前播放，然后向后（<mark>反转也计算在动画的播放次数里！</mark>）
- alternate-reverse - 动画先向后播放，然后向前

#### 指定动画的速度曲线

`animation-timing-function`属性规定动画的速度曲线。

可接受以下值：

- ease - 指定从慢速开始，然后加快，然后缓慢结束的动画（默认）

- linear - 规定从开始到结束的速度相同的动画

- ease-in - 规定慢速开始的动画

- ease-out - 规定慢速结束的动画

- ease-in-out - 指定开始和结束较慢的动画

- cubic-bezier(n,n,n,n) - 运行您在三次贝塞尔函数中定义自己的值

- steps(int,start|end) - 指定了时间函数中的间隔数量（步长）
  
  - 有两个参数: 第一个参数指定函数的间隔数，该参数是一个正整数（大于 0）。 第二个参数是可选的，表示动画是从时间段的开头连续还是末尾连续。
  
  - start：表示直接开始。
  
  - end：默认值，表示戛然而止。
  
  - 有几帧就跳几步

用这个属性的steps()可以做出“走路”的动画效果（案例：西游记-动画）

 

#### 指定动画的填充模式

CSS 动画不会在第一个关键帧播放之前或在最后一个关键帧播放之后影响元素。`animation-fill-mode`属性能够覆盖这种行为。

在不播放动画时（在开始之前，结束之后，或两者都结束时）,`animation-fill-mode`属性规定目标元素的样式。

可接受以下值：

- none - 默认值。动画在执行之前或之后不会对元素应用任何样式。
- forwards - 元素将保留由最后一个关键帧设置的样式值（依赖 animation-direction 和 animation-iteration-count）。
- backwards - 元素将获取由第一个关键帧设置的样式值（取决于 animation-direction），并在动画延迟期间保留该值。
- both - 动画会同时遵循向前和向后的规则，从而在两个方向上扩展动画属性。

#### 动画是否运行

`animation--play-state`属性指定动画是否正在运行或已暂停。

可选值：running运行；paused暂停

###### CSS-用动画做轮播图

代码:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>轮播图</title>
    <style>
        *{margin: 0;padding: 0;list-style: none}

        .ppt{
            width: 400px;
            height: 400px;
            border: 5px solid red;
            margin: 50px auto;
            position: relative;
            left: 0;
            top: 0;

            overflow: hidden;
        }
        ul{
            width:2000px;
            height: 400px;
            position: absolute;
            left: 0;
            top: 0;

            animation: rotate 10s ease 0s 2;
            animation-timing-function:linear;/*线性播放*/
        }
        ul li{
            width: 400px;
            height: 400px;
            float: left;
        /*    让他们全部在一个横排*/
        }

        @keyframes rotate {
            from{
                left: 0px;
            }
            to{
                left:-1200px;
            }
        }
    </style>
</head>
<body>
<div class="ppt">
    <ul>
        <li><img src="../js自学/src/Dio.png" width="400px" height="400px"></li>
        <li><img src="../js自学/src/二乔.png" width="400px" height="400px"></li>
        <li><img src="../js自学/src/老二乔.png" width="400px" height="400px"></li>
        <li><img src="../js自学/src/花京院.png" width="400px" height="400px"></li>
    </ul>
</div>
</body>
</html>
```

此时出现一个问题: 

播到最后一张图的时候会从最后一张图闪回到第一张图, 如果继续往后走,那么会走出一个图片的空白位置 !

那么可以利用这个特点,在最后一个图的位置再加一张图,加上的图就是第一张图 !

这样就可以大致的实现轮播图,不使用js

也可以用改变背景图片的方式来做

代码:

```html
    <style>
        *{margin: 0;padding: 0;list-style: none}

        .ppt{
            width: 400px;
            height: 400px;
            border: 5px solid green;
            margin: 50px auto;
            background-image: url("../js自学/src/Dio.png");
            animation: rotate 10s linear infinite;
        }

        @keyframes rotate {
            from{
                background-image: url("../js自学/src/老二乔.png");
            }
            25%{
                background-image: url("../js自学/src/二乔.png");
            }
            75%{
                background-image: url("../js自学/src/Dio.png");
            }
            to{
                background-image: url("../js自学/src/花京院.png");
            }
        }
    </style>

<body>
<div class="ppt"></div>
</body>
```

这个方法有一个很大的缺陷: 第一遍运行的时候，网页刷新，图片会"闪"一下

> 原因:网页资源加载的问题。没有办法解决！第二遍播放之后就不会再闪烁了

 

### opacity不透明属性

设置<mark>div</mark>的透明度级别，从0.0（完全透明）到1.0（完全不透明）。

网站上一般0.4~0.7

特点：让这个div里面的<mark>所有内容都透明</mark>

- 所以如果只想背景颜色透明但是里面的内容不透明，只能用rgba做

 

### 轮廓outline

----

绘制于元素周围的一条线，位于border边框边缘的外围

- 涉及的属性是：outline、outline-color、outline-style、outline-width

- outline 是 轮廓中的 复合属性；具体语法为：outline: outline-color outline-style outline-width;

#### outline-color轮廓颜色

具体的取值是颜色的值（可以是十六进制数值、rgb、英文单词）

#### outline-style轮廓样式

- none ： 没有样式
- dotted ： 点线
- dashed ： 虚线
- solid ： 实线
- double ： 双线
- groove ： 3D 凹槽轮廓
- ridge ： 3D 凸槽轮廓
- inset ： 3D 凹边轮廓
- outset ： 3D 凸边轮廓

 

#### outline-width轮廓的宽度

可能的取值是：

- thin ： 细的
- medium ： 中等的， 是默认值
- thick ： 粗的
- length ： 可以通过CSS 中的 长度单位进行指定

> 如果不想指定轮廓或取消掉某些元素的轮廓，可以使用 outline:none ; 或 outline:0; 的形式来声明

#### outline-offset轮廓的偏移

在超出边框边缘的位置绘制轮廓

 

### text:文本

----

指在页面上的所有文字，包括英文、中文等。属性值有: 

- color ： 设置元素内文本的颜色

- direction ： 设置文本的方向 ； 可选取值：
  
  - ltr ： 默认值：从左到右
  - rtl : 从右到左

#### 字符间距letter-spacing

设置字符间距 ; <u>所有的</u>字符都会被添加指定的间距大小

#### 单词间距word-spacing

设置单词之间的间距；根据每一个单词之后添加指定的间距。<mark>对中文和符合无效</mark>

#### 换行word-break

设置是否在单词和文字中间换行。值有：

- normal：默认值，采用亚洲文字处理方式，即正常显示，单词不能换行。

- keep-all：不会打断单词，不会断开汉字（遇到符号才换行）

- break-all：可以打断单词和汉字

#### 单行文本行高line-height 用的最多的！

设置<mark>单行文本</mark>的行高 ; 经常与 height 一起使用，用来维护垂直居中。

- 遇到`<li>`不随li里面的子元素而高度自适应的时候,把li的行高设置的跟子元素高度一样。

> 父级元素多高，值就写多高，就可以达到垂直居中的效果。

#### 文本水平对齐text-align

指定文本的水平对齐方式 ; 取值有：

- left： 从左到右 ， 默认值 ； 建议参考word
- right ： 从右到左
- center ： 居中对齐
- justify ： 两端对齐
- justify-all ： 两端对齐，同时保证最后一行强制两端对齐

#### 文本垂直对齐vertical-align

指定文本的垂直对齐方式，<mark>只对行元素有效</mark>。一般用在表格,现在基本没用了。

取值有：

- top ：上
- middle ： 中间
- bottom ： 底部
- sub ： 下标
- super ： 上标

#### 文本修饰text-decoration

定义文本的修饰效果

- 该属性可以通过 内置的 属性值 直接指定 ； 取值分别是：
  
  - none ： 默认值
    
    > 可以给`<a>`标签设置`text-decoration:none`来取消下划线显示。
  
  - overline ： 上划线, 文本之上的一条线, 基本没人用
  
  - underline ： 下划线, 文本下的一条线
  
  - line-through ： 删除线, 穿过文本的一条线
  
  - blink :  闪烁文本(现在基本没浏览器支持了)

- 也可以通过 color、style、line 分别指定 ； 此时 text-decoration 修饰效果就是一个 复合样式
  
  > `text-decoration:line-through underline red;`
  
   显示效果为: 同时出现删除线和下划线,且线的颜色为红色。

#### 首行缩进text-indent

经常用于页面中的文字排版 ； 取值为具体的单位（50px、40%、60em）
>可以用`text-indent=-9999px`使文字缩进到视线外将其“隐藏”

#### 文本阴影text-shadow

- 具体语法：h-shadow( 水平阴影位置,可以为负) v-shadow( 垂直阴影位置,可以为负) blur(模糊距离 可选) color(颜色，可选);

- 阴影一行可以写多个,多个阴影中间用逗号隔开

- 可以用这个实现火焰字效果、发光字效果
  
  - 火焰字:阴影逐渐产生位移,颜色递增即可
  
  ```html
  火焰字效果<style>
     body{
          background-color: black;
      }
      div{
          font:bold 60px "微软雅黑";
          color:#fff;
          padding: 30px;
          /* 字体/文本 阴影  
   text-shadow:水平阴影位置(允许负值) 垂直阴影位置(允许负值) 模糊距离 阴影的颜色;
             阴影不是只可以写一个  多个阴影中间用逗号隔开
          */
          text-shadow:
              0 0 4px #fff,
              0 -5px 4px #ff3,
              2px -10px 6px #fd3,
              -2px -15px 10px #f80,
              2px -25px 20px #f20;   
      }
  </style>
  
  <body>
      <div>乾坤未定,你我皆是黑马</div>
  </body>
  ```

#### 文本变换text-transform

控制文本的大小写 ; 取值如下：

- none ： 默认值，不会控制 文中的大小写。
- capitalize ： 首字母大写
- lowercase : 所有的字母都变成小写
- uppercase ：所有的字母都变成大写
- full-width : 会将所有的字母都设置成相同的宽度

#### 空白处理white-space

指定文本中的空白应该如何处理 （ 自行测试 ）使用频率少

- normal 默认。空白会被浏览器忽略。

- pre 空白会被浏览器保留。其行为方式类似 HTML 中的
  
  标签。

- nowrap 文本不会换行，文本会在在同一行上继续，直到遇到  
  标签为止。

- pre-wrap 保留空白符序列，但是正常地进行换行。

- pre-line 合并空白符序列，但是保留换行符。

#### text-overflow设置文本超出部分省略

属性规定当文本溢出时的显示方式。取值：

- clip修剪文本

- ellipsis显示省略符号来代表被修建的文本

- string使用给定的字符串来代表被修剪的文本

##### 小技巧：文本超出屏幕时显示的省略号

需要三个条件：

- text-overflow:ellipsis;設置文本超出部分省略

- white-space:nowrap;强制在一行顯示

- overflow:hidden;超出部分隱藏

#### text-fill-color

设置字体的填充颜色。需要加浏览器内核兼容。

#### text-stroke

设置字体的描边颜色。语法：`text-stroke: 宽度 颜色;`

可以和`text-fill-color`一起使用，用来做“描边字”效果。

#### unicode-bidi（了解）

unicode-bidi 属性与 direction 属性一起使用，来设置或返回文本是否被重写，以便在同一文档中支持多种语言。

- normal : 默认值
- embed ：创建一个附加的嵌入层面
- bidi-override ： 创建一个附加的嵌入层面。重新排序取决于 direction 属性。
- 注意：该属性经常被用在 dtd 文件的书写中 ； 而 dtd 文件 其实就是一个约束文件，也就是说 html 中的dtd 文件约束了 html 文件的整体内容

### font字

----

`font` 属性可以用来作为 [`font-style`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style), [`font-variant`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant), [`font-weight`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight), [`font-size`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size), [`line-height`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height) 和 [`font-family`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family) 属性的简写，或将元素的字体设置为系统字体。

- 可以按顺序设置如下属性：
- font-style 、font-variant font-weight font-size/line-height font-family

如果 `font` 字体相关的属性的简写：

- 必须包含以下值：
  - [`<font-size>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)
  - [`<font-family>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)
- 可以选择性包含以下值：
  - [`<font-style>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-style)
  - [`<font-variant>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variant)
  - [`<font-weight>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)
  - [`<line-height>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height)
- `font-style`, `font-variant` 和 `font-weight` 必须在 `font-size` 之前
- 在 CSS 2.1 中 `font-variant` 只可以是 `normal` 和 `small-caps`
- `line-height` 必须跟在 `font-size` 后面，由 "/" 分隔，例如 "`16px/3`"
- `font-family` 必须最后指定

#### font-style字体风格

允许你选择 [`font-family`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family) 字体下的 `italic` 或 `oblique` 样式。

`normal`: 选择 [`font-family`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family) 的常规字体。

`italic`: 选择斜体，如果当前字体没有可用的斜体版本，会选用倾斜体`oblique` 替代。

`oblique`: 选择倾斜体，如果当前字体没有可用的倾斜体版本，会选用斜体`italic` 替代。

如果选择了关键字`oblique`,那么后面可以带一个角度大小。(`... deg`)

#### 字体大小font-size

指定字体的大小。因为该属性的值会被用于计算em和ex长度单位，定义该值可能改变其他元素的大小。

> 如果只有单个<mark>汉字</mark>，想要设置文字在正方形的div中居中，可以让font-size=div的宽高

值可以有:

- `xx-small, x-small, small, medium, large, x-large, xx-large`
  
  这套关键字是相对于用户的默认字体大小(medium)。是浏览器自设的大小，使用的较少。

- `larger, smaller`
  
  比父元素的字体大或小，使用与上面的关键字的相近缩放比率。

- `<length>`：正数[`<length>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/length)
  
  当单位为`em`或`ex`时，大小为相对于父元素的文字的大小。例如，0.5em就是当前元素的父元素的字体大小的一半。

- `<percentage>`：父元素字体大小的正数[`<percentage>`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/percentage)

**注意:** 最好使用用户默认字体大小的<u>相对大小</u>，避免使用除了`em`或`ex`的绝对大小单位。但是如果一定要使用绝对大小的话，px是众多单位中最好的选择，因为它的含义不会随着操作系统所认为的屏幕分辨率的大小（通常是不对的）改变而改变。

##### 小技巧:取消两个按钮之间的间距

用`font-size: 0;`可以设置取消两个按钮之间的间距,在按钮的父元素里加上即可。

原理详见[使用&lt;input&gt;标签做了两个按钮, 按钮之间间距如何去掉 - Timachine - 博客园](https://www.cnblogs.com/Timachine/p/5777226.html)

 

#### font-family : 字体库

通过给定一个有先后顺序的，由字体名或者字体族名组成的列表来为选定的元素设置字体。指定的是一个优先级从高到低的可选字体列表。

属性值用逗号隔开。浏览器会选择列表中第一个该计算机上有安装的字体，或者是通过 [`@font-face`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face) 指定的可以直接下载的字体。

##### 使用建议：

1. 应当<mark>至少</mark>在`font-family` 列表中<mark>添加一个通用的字体族名</mark>
   
   > 因为无法保证用户的计算机内已经安装了指定的字体，也不能保证使用 [`@font-face`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@font-face) 提供的字体移动能够正确地下载。提供通用的字体族使得浏览器可以在无法得到最佳字体的情况下使用一个相对接近的备选字体。

2. 英文字体放在中文字体前面

**注意：** 字体的选定**不是**在发现用户计算机上安装的列表中的第一个字体时停止。相反，对字体的选择是<mark>逐字进行</mark>的。也就是说即使某个字符周围都在某个字体中可以显示，但该字符在当前的字体文件中没有适合的图形，那么会继续尝试列表中靠后的字体。（不过这在 IE6 以及之前的版本的 IE 浏览器中不适用。）

##### 通用字体族

- serif：衬线体，例如 宋体 和 Georgia

- sans-serif：无衬线体，例如 Helvetica，Arial，黑体，微软雅黑

- Cursive：手写体，例如 楷体

- Monospace：等宽字体，例如 Courier，Consalas，中文字体；是代码常用字体。

- Fantasy

- Papyrus

##### 使用Web Fonts导入字体

语法：

```css
@font-face{
    font-family:"字体名";
    src: url("字体文件的地址") format(字体格式);
}
```

font-family：自己给这个字体取的名字。

src：引用的字体文件存放的位置

src后面可以接format()来帮助浏览器识别字体格式。

**什么是format属性？如何使用format属性？**

- format属性是帮助浏览器识别字体的。浏览器是不能根据字体url后缀去自动识别字体格式的，所以使用format属性来帮助浏览器识别字体格式。 
  
  例如：format(EmbeddedOpenType) 帮助浏览器识别.oet字体格式
  
  format(OpenType) 帮助浏览器识别.otf字体格式

- **字体格式如下：**
  
  - trueType格式(.ttf) -- Windows和Mac上常见的字体格式，是一种原始格式，因此它并没有为网页进行优化处理。 
    - 浏览器支持：IE9+,FireFox3.5+,Chrome4.0+,Safari3+,Opera10+,IOS Mobile Safari4.2+
  - OpenType格式(.otf) -- 以TrueType为基础，也是一种原始格式，但提供更多的功能。
    - 浏览器支持：FireFox3.5+,Chrome4.0+,Safari3.1+,Opera10.0+,IOS Mobile Safari4.2+
  - Web Open Font格式(.woff) -- 针对网页进行特殊优化，因此是Web字体中最佳格式，它是一个开放的TrueType/OpenType的压缩版，同时支持元数据包的分离.
    - 浏览器支持：IE9+, FireFox3.5+, Chrome6+, Safari3.6+,Opera11.1+
  - Embedded Open Type格式(.eot)  -- IE专用字体格式，可以从TrueType格式创建此格式字体。 
    - 浏览器支持：IE4+
  - SVG格式(.svg) -- *基于SVG字体渲染的格式。* 
    - 浏览器支持：Chrome4+, Safari3.1+, Opera10.0+, IOS Mobile Safari3.2+

 

#### font-class网络图标

可以从阿里的[iconfont](https://www.iconfont.cn/)下载一个css文件,具体的引用看[iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)

提倡装icon的标签<mark>都是行元素</mark>,如`<i>`

可以自己通过font属性来更改图标的样式(除font-family都可以)

用网络图标的话可以用`::before`和`content`联动使用(因为content里面可以直接写图标的代号,如果content里面装url的话是不能改变里面图标的大小的)

> 如果content里面没有内容,那么没有办法撑起`<i>`,而且因为行元素不能改宽高所以i会消失(没有被撑起来),这时可以选择用display:inline-block来设置宽高或者往i里面添加内容.

 

#### 字体粗细font-weight

取值可以是数字，也可以是关键字。数字取值在100~900之间，取整百为一个阶梯，效果由字体库效果支持

- `normal`：正常粗细。与数字`400`等值。

- `bold`：加粗。 与数字`700`等值。

- `lighter`：比从父元素继承来的值更细(处在字体可行的粗细值范围内)。

- `bolder`：比从父元素继承来的值更粗 (处在字体可行的粗细值范围内)。

- `<number>`：一个介于 1 和 1000 (包含) 之间的 [`<number>`](https://developer.mozilla.org/en-US/docs/Web/CSS/number) 类型值。更大的数值代表字体重量粗于更小的数值 (或一样粗)。

#### font-variant

以小型大写字体或者正常字体显示文本。 （比较少见）

- CSS2 的话，可以设置属性值：small-caps ； normal
- CSS3 : font-variant 属性是font-variant-caps, font-variant-numeric, font-variant-alternates, font-variant-ligatures, font-variant-east-asian (en-US)等属性的简写

#### font-variant-caps

大写字母特殊字符的使用

- 从表现形式上来看 ： 明确字母的大小写的规则
- 可选取值如下 ：
  - normal ： 正常的 ； 不使用 具体的规则
  - small-caps ： 允许小型大写字母的使用（OpenType特性：smcp）。小型大写字母：所有的字母变成大写，但是高度与小写字母一致。
  - all-small-caps : 将大小写字母全部转化为小型大写字母
  - petite-caps : 允许特小型大写字母的使用
  - all-petite-caps : 将大小写字母全部转化为特小型大写字母
  - unicase ： 允许将大写字母转化为小型大写字母与普通小写字母的混用 ;（将大写字母变得更小【高度】了）
  - titling-caps ： 允许首字母大写 ; 但是从效果上看，没有改变样式。

#### font-variant-numeric ： 针对于数字的使用 （ 了解）

#### font-variant-alternates ： 控制备用字体的使用 （了解）；

设计的内容要具有通用性！

 

### CSS3 多列

CSS3 可以将文本内容设计成像报纸一样的多列布局。

以下几个 CSS3 的多列属性:

- `column-count`
- `column-gap`
- `column-rule-style`
- `column-rule-width`
- `column-rule-color`
- `column-rule`
- `column-span`
- `column-width`：指定了列的宽度。
- `column-break-before`
- `column-break-after`
- `column-break-inside`

#### column-count

`column-count` 属性指定了需要分割的列数。

#### column-gap

`column-gap` 属性指定了列与列间的间隙。

#### column-rule-style

`column-rule-style` 属性指定了列与列间的边框样式：

#### column-rule-width

`column-rule-width` 属性指定了两列的边框厚度:

#### column-rule-color

`column-rule-color` 属性指定了两列的边框颜色：

#### column-rule

`column-rule` 属性是 column-rule-* 所有属性的简写。

#### column-break-inside

**column-break-inside**：auto | avoid | avoid-page | avoid-column

**默认值**：auto,既不强迫也不禁止在元素<mark>内部</mark>断行并产生新列

**适用于**：块级元素

可选值：avoid：避免在元素内部断行并产生新列

#### column-break-before

**column-break-before**：auto | always | avoid | left | right | page | column | avoid-page | avoid-column

**默认值**：auto，既不强迫也不禁止在元素<mark>之前</mark>断行并产生新列

**适用于**：块级元素

可选值：

- always：总是在元素之前断行并产生新列

- avoid：避免在元素之前断行并产生新列

#### column-break-after

**column-break-after**：auto | always | avoid | left | right | page | column | avoid-page | avoid-column

**默认值**：auto，既不强迫也不禁止在元素<mark>之后</mark>断行并产生新列

**适用于**：块级元素

可选值：

- always：总是在元素之后断行并产生新列

- avoid：避免在元素之后断行并产生新列

 

### 列表list

----

#### list-style

复合属性（简写属性) , 是 list-style-type, list-style-position, list-style-image缩写

- list-style 可以进行直接书写 ： 具体语法为 ；list-style:list-style-type list-style-position list-style-image
- <mark>如果使用列表但是不想要 序号</mark>, 那么就可以使用`none`进行操作：`list-style:none;`
  - 还可以把`li`变成`inline-block`来去除序号（但排版会变）

#### list-style-type : 可以指定编号的类型

#### list-style-position

可以指定编号 与 li 的位置关系。

- outside：默认值，标识在内容之外

- inside：标识在内容之内

用法：当鼠标停留在li上时，如果为`outside`，那么选中li的时候标识不会被选中；改成`inside`就标识就可以被选中了。

#### list-style-image

可以将 编号替换成指定的图片。用法：在 内容 前面标识该内容是 图片 还是 视频 。

`list-style-image:url("");`

### cursor设置光标

CSS 3新属性。设置光标的类型（如果有），在鼠标指针悬停在元素上时显示相应样式。

属性为零个或多个`<url>`[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor#%3Curl%3E)值，它们之间用逗号分隔，最后必填一个关键字值。每个`<url>`指向一个图像文件。浏览器将尝试加载指定的第一个图像，如果无法加载则返回下一个图像，如果无法加载图像或未指定图像，则使用关键字值代表的指针类型。

每个`<url>`后面都可选跟一对空格分隔的数字`<x>``<y>`表示偏移。它们用来设置指针的热点(即自定义图标的实际点击位置)，位置相对于图标的左上角。

例如，下面的例子使用`<url>`值指定两个图像，为第二个图像提供`<x>``<y>`坐标，如果两个图像都无法加载，则返回`progress`关键字值：

```js
cursor: url(one.svg), url(two.svg) 5 5, progress;
```

### 盒子模型

----

所有HTML元素可以看作盒子，在CSS中，"box model"这一术语是用来设计和布局时使用。

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距（外边距 margin），边框（border），填充（内边距 padding），和实际内容( content )。

#### 特点 ：

- 外边距是透明的 ， border 之外的距离就是外边距

- 边框（border） ： 具有大小等属性；是存在于 margin 与 padding 之间的内容，通常可以被看到

- 内边距是透明的 ， border 之内，内容之外的区域 就是 内边距。

- 内容，是实际存放东西的一个地方

- 当设置 width 与 height 的时候，其实是对 内容 进行设置了width 和 height ;

### padding内边距

----

`padding` 存在 四个方向，每个方向都可以有不同的值 ；所以可以通过如下样式设置：

```
padding-top : 设置 上padding

padding-right ;

padding-bottom ;

padding-left ;
```

可以使用`padding`来设置 上右下左 四个值，如果取百分数，那么相对于容器的宽度。

规则如下：

- padding : 10px ; 表示 四个方向都是 10px
- padding : 10px 20px ; 表示 上下的padding 是 10px ；而 左右的padding 是 20px;
- padding : 10px 20px 30px ; 表示 上的padding 是 10px ;而 左右的padding 是 20px; 下的padding 是 30px
- padding : 10px 20px 30px 40px ; 表示 按照顺时针的方向进行设置 padding 的值。
- 注意：一般情况下 ： 只会出现如下形式：
  - padding : 10px ; padding : 10px 20px ; padding: 10px 20px 30px 40px ;

> 注意：padding会把这个元素本身“撑大”

### border边框

----

border 存在 四个方向，同时又存在三个属性（ color、style 、width）； 合计基本样式为12个，如下所示：

```
border-top-color
border-top-style
border-top-width

border-bottom-color
border-bottom-style
border-bottom-width

border-left-color
border-left-style
border-left-width

border-right-color
border-right-style
border-right-width
```

- border-top 可以用来统一指定 top 方向上的 所有样式（color、style、width）

- border-bottom 可以用来统一指定 bottom 方向上的 所有样式（color、style、width）

- border-left 可以用来统一指定 left 方向上的 所有样式（color、style、width）

- border-right 可以用来统一指定 right 方向上的 所有样式（color、style、width）

- border-color : 可以通过设置多个值的方式来指定不同方向的边框颜色

- border-style : 可以通过设置多个值的方式来指定不同方向的边框样式

- border-width : 可以通过设置多个值的方式来指定不同方向的边框宽度

- border-image: 允许在元素的边框上绘制图像。
  
  - `border-image: url("/images/border.png") 30 30 repeat;`

- border-collapse: 用来决定表格的边框是分开的还是合并的。
  
  - 在分隔模式下，相邻的单元格都拥有独立的边框。在合并模式下，相邻单元格共享边框。
  
  > 如果四个方向上的样式都一样的话，那么就可以使用 : 
  > `broder: width style color ; `来直接声明
  
  如果四个方向上的样式 不同，建议分开写，为了方便阅读。

#### border-radius边框的圆角处理

CSS 3新增

- 因为有四个方向，所以构成了四个角，那么就有对应的半径 ：
  
  - border-top-left-radius ： 左上角的半径
  - border-top-right-radius ： 右上角的半径
  - border-bottom-left-radius ： 左下角的半径
  - border-bottom-right-radius ： 右下角的半径

- 同理；可以有一个简写属性 ：border-radius ， 说明如下：
  
  - border-radius : 50px ； 表示四个角都是50px;
  - border-radius : 50px 150px； 表示左上和右下是50px; 右上和左下是 150px
  - border-radius : 50px 150px 250px； 表示左上是50px; 右上和左下是 150px ; 右下是 250px;
  - border-radius : 50px 150px 250px 500px； 表示左上是50px; 右上是 150px ; 右下是 250px; 左下500px
  
  > `border-radius:10px 10px 10px 10px;`顺序为: 左上 右上 右下 左下 (顺时针)

border-radius最多可以写八个值：`border-radius:左上水平倾斜度 右上水平倾斜度 右下... 左下... / 左上垂直倾斜度 右上垂直倾斜度 右下... 左下...`

##### 画圆

用`border-radius: 50%; `来画圆。跟`border-radius`数值设置为宽高减半出来的结果是有略微的不一样的。

### margin ： 外边距

----

表示边框之外。

> **注意：** 可以用`margin:auto`来让元素水平居中

依旧存在四个方向，每个方向都可以有不同的值 ；所以可以通过如下样式设置：

```
margin-top : 设置 上padding

margin-right ;

margin-bottom ;

margin-left ;
```

可以使用 margin 一个样式来设置四个方向的值，如果取百分数，那么相对于<mark>容器的宽度</mark>。

规则如下：

- margin : 10px ; 表示 四个方向都是 10px

- margin : 10px 20px ; 表示 上下的padding 是 10px ；而 左右的padding 是 20px;

- margin : 10px 20px 30px ; 表示 上的padding 是 10px ;而 左右的padding 是 20px; 下的padding 是 30px

- margin : 10px 20px 30px 40px ; 表示 按照顺时针的方向进行设置 padding 的值。
  
  > 注意：一般情况下 ： 只会出现如下形式：
  > 
  > margin : 10px ; margin : 10px 20px ; margin: 10px 20px 30px 40px ;

#### margin边框塌陷问题

出现的原因：margin 会进行合并操作（水平方向不合并）；父级计算子级的margin时出现问题

当两个垂直外边距相遇时，它们将形成一个外边距。合并后的外边距的高度等于两个发生合并的外边距中的大的那个外边距。

- 情况1 ：当一个元素出现在另一个元素上面时，第一个元素的下外边距与第二个元素的上外边距会发生合并
- 情况2 ：当一个元素包含在另一个元素中时（假设没有内边距或边框把外边距分隔开），它们的上和/或下外边距也会发生合并
- 情况3 ：外边距甚至可以与自身发生合并
- 注意 ： 只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。

> margin属性含义：该元素与其他盒子<mark>最少保持多少距离</mark>。

##### 解决办法：

1. 为父级添加`padding`：但这样会导致左上跟(0,0)出现一个距离

2. 为父级添加`border`：可以把边框改成透明

3. 为父级添加`overflow`：overflow会重新计算元素大小，所以margin会恢复正常

4. 将`box-sizing`改成`border-box`

 

### overflow溢出边框

元素超出时的处理方式。可以重新计算子元素的宽度。可选值：

- `visable`：可见，默认值

- `hidden`：将溢出部分隐藏

- `scroll`：滚动，不溢出时也有滚动条。可以设置滚动条是横向还是纵向滚动

- `auto`：溢出时有滚动条，不溢出时没有


### box-sizing

设置盒模型的基本算法。

可选值：

- content-box：传统盒模型；宽度和高度的计算值都不包含内容的border和padding。
  
  - 尺寸计算公式：
    
    `width` = 内容的宽度
    
    `height` = 内容的高度

- border-box
  
  - 尺寸计算公式：
    
    *`width` = border + padding + 内容的宽度*
    
    *`height` = border + padding + 内容的高度*

传统盒子模型计算方式：

<img src="https://s2.loli.net/2022/03/03/nJiE4KDG9ZNdu15.png" title="" alt="" width="227">橙色部分为width、height属性设置的部分。

`box-sizing:border-box`盒子模型计算方式：

<img src="https://s2.loli.net/2022/03/03/SCGE7yoAa1Oj9pv.png" title="" alt="" width="224">红色部分为width、height属性设置的部分。

### box-reflect盒子倒影

语法：`box-reflect: 方向 间距 遮罩层（渐变/url/none）;`

- 方向值：上above/下below/左left/右right

- 用渐变的时候记得<u>如果加了方向那么要加上兼容！</u>

- 一般方向为below时渐变方向为bottom；

 

### 元素所占用的宽高计算公式：

- 最终元素的总宽度计算公式是这样的：总元素的宽度=width + padding-left + padding-right + border-left + border-right + margin-left + margin-right
- 元素的总高度最终计算公式是这样的：总元素的高度=height + padding-top + padding-bottom + border-top + border-bottom + margin-top + margin-bottom

### CSS布局相关：文档流

常规文档流：行级元素、块级元素、表格布局、FlexBox、Grid布局

非常规文档流：浮动float、绝对定位`position:absolute`

非常规脱离了文档流！脱离文档流的元素<mark>无法计算父级高度</mark>！

#### 常规流

布局规则：

- 根元素、浮动和绝对定位的元素会脱离文档流。（不遵循布局规则）

- 其他元素都在常规流之内

- 常规流中的盒子，在某种排版上下文中参与布局。

> 排版上下文：提供一种规则

通过display属性创建上下文

#### 行级排版上下文IFC

只包含行级盒子的容器会创建一个IFC

排版规则:

- 盒子在一行内水平摆放

- 一行放不下时换行显示

- text-align决定盒子在行内的水平对齐

- vertical-align决定盒子在行内的垂直对齐

- 会避开浮动元素

> 如果在IFC中出现了其他不属于行级盒子的盒子，则将IFC从不属于的部分截断，分成上下两个IFC

IFC为自动生成的，可以认为：一堆行级盒子放在一起会自动生成一个IFC把他们装起来。

#### 块级排版上下文BFC

块级盒子不一定会创建一个BFC，只有特定情况才会创建。

某些容器会创建一个BFC：

- 根元素，浮动，绝对定位，inline-block

- Flex子项、Grid子项

- overflow的值不是visable的块级盒子（可以用这个特性来清除浮动`overflow`）

- display:flow-root也可以创建一个BFC（这是啥啊）

排版规则：

- 盒子从上到下摆放，垂直margin要合并

如果不在同一个BFC内：

- BFC内盒子的margin不会与外面的合并

- BFC不会和浮动元素重叠

### display属性

取值：

- block：块元素

- inline：行元素

- inline-block：行内块元素/内联元素，一行显示多个块级元素。
	>在用ul-li实现横向栏的时候可以搭配`width:max-content`来使用，可以实现ul的宽度跟随li的宽度和个数来改变！[#important]

- none：不显示，会更改布局（不占位）

- flex：flex布局

- grid：grid布局

- ……

#### visibility属性

显示或隐藏元素而<mark>不更改文档的布局</mark>（占位）。该属性还可以隐藏[`<table>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/table)中的行或列。

取值：

- visible显示

- hidden隐藏

- collapse显示
  
  - 用于 [`<table>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/table) 行、列、列组和行组，隐藏表格的行或列，并且不占用任何空间（与将 `display: none`用于表格的行/列上的效果相 当）。但是，仍会计算其他行和列的大小，就好像折叠的行或列中的单元格一样。此值允许从表中快速删除行或列，而不强制重新计算整个表的宽度和高度。
  
  - 折叠的弹性项目被隐藏，他们将占用的空间被删除。
  
  - 对于 [XUL](https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XUL "This is a link to an unwritten page") 元素，元素的计算大小始终为零，而且通常会忽略影响大小的其他样式，尽管边距仍然有效。
  
  - 对于其他元素，折叠处理与隐藏相同。


### 浮动float

浮动的元素会脱离文档流。主要拿来做图文环绕。谁先浮动谁先占位。

取值：

- left

- right

- none

**注意1：** 如果上面的元素没有浮动，那么下面的元素不可能浮动上去。

**注意2：** 元素可以脱离文档流，但是文字不能脱离文档流（html不让）。

**注意3：** 浮动不可能让浮动叠加到一起。（两个浮动不能把两个元素叠在一起）

> 如果遇到错位的情况，检查一下想要的位置是不是被margin或者其他什么的占了

### 清除浮动clear

告诉浏览器哪个浮动不再浮动去原来的位置了，但是<mark>没有取消浮动</mark>。如果自身有`flex`，也可以在样式里写一个`clear`。取值：

- left

- right

- both

### position定位

用相对定位来约束绝对定位（子绝父相）

定位不能用来布局（因为页面的大小会改变）！但是可以解决问题的一个点

取值:

- static 非定位元素,默认值(静态定位)

- relative 相对于自身原本位置偏移,不脱离文档流(视觉上变了,实际位置没变)

- absolute 绝对定位,相对于非`static`祖先元素定位,脱离文档流

- fixed 相对于视口(屏幕)绝对定位
  
  - 例如给导航栏加一个`position:fixed`即可实现滚动时也固定在顶部

开启了定位之后会多四个可操作属性:

- left

- right

- top

- bottom

#### position:relative

- 在常规流里布局，不脱离文档流

- 相对于自己本来应该在的位置进行偏移

- 使用top、bottom、left、right设置偏移长度

- 流内其他元素没有`position:relative`时都不影响布局（加不加对整体没啥影响）

- 原来的位置会被保留

#### position:absolute

生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。

- 脱离文档流

- 相对于最近的非static祖先定位
  
  - 最多找到html的根元素，不在往上，此时相对于浏览器定位
  - 如果相对于浏览器定位,那么会随页面滚动移动

- 不会对流内元素布局造成影响

- 不能检测到滚动条之后的部分（页面滚动之后位置会变）

- 使用top、bottom、left、right设置偏移长度
  
  - 左上角：left: 0; top: 0;
  
  - 右上角：right: 0; bottom: 0;

> 如果想控制绝对定位的元素里面的一个元素，做不到，因为被绝对定位约束住了

#### position:fixed

生成<mark>绝对定位</mark>的元素，相对于浏览器窗口进行定位。

- 可以检测到滚动条之后的部分（页面滚动也不影响它）
- 用上下左右关键字来控制


## position: sticky;

`position: sticky; `的元素根据用户的滚动位置进行定位。

粘性元素根据滚动位置在相对（relative）和固定（fixed）之间切换。起先它会被相对定位，直到在视口中遇到给定的偏移位置为止 - 然后将其“粘贴”在适当的位置（比如 position:fixed）。

> 注意：Internet Explorer、Edge 15 以及更早的版本不支持粘性定位。 Safari 需要 -webkit- 前缀（请参见下面的实例）。您还必须至少指定 top、right、bottom 或 left 之一，以便粘性定位起作用。

在此例中，在到达其滚动位置时，sticky 元素将停留在页面顶部（top: 0）。

**实例:**

```css
div.sticky { 
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    background-color: green;
    border: 2px solid #4CAF50; 
}
```


### z-index重叠元素

在对元素进行定位时，它们可以与其他元素重叠。<mark>仅对css中的position修饰的元素有效</mark>

z-index 属性指定元素的堆栈顺序（哪个元素应放置在其他元素的前面或后面）。

- 元素可以设置正或负的堆叠顺序。

- 具有较高堆叠顺序的元素始终位于具有较低堆叠顺序的元素之前。

> 注意：如果两个定位的元素重叠而未指定 z-index，则位于 HTML 代码中最后的元素将显示在顶部。


### 网页布局方式

1. div+CSS布局（传统布局）：考虑到更多人可以正常看到网页，还是采取这种模式，兼容性更好

2. flex:最常用的布局方式。
   
   - 詳細可以看gitee/web2019

3. grid可以和flex配合使用，gird主外，flex主内
   
   - grid网格布局详见[网格布局的基本概念 - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
   
   - 网格布局单位尽量使用fr，如果用百分比可能会遇到溢出的问题
   
   - 可以给线起自定义名字
   
   - 詳細可以看gitee/web2019

#### 弹性盒子flex**

要想使用弹性盒子，必须要有一个容器（flex-container）。

<mark>如果父级定义成弹性盒子,子级所有的float会被自动取消</mark>

弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。

注意：

- `display:flex;`不会让容器本身取消它的块装的属性，但它的子元素会变成行内块的的属性

- `display: inline-flex;`父级是变成行内块元素，他的子元素也是行内块元素，并且自动换行

弹性容器内包含了一个或多个弹性子元素。

##### flex-direction排列方向

决定弹性盒子内部的子元素 按照什么方向进行排列。

这个属性<mark>指定的方向为“主轴”</mark>，与之垂直的方向就变为“侧轴”

- row ： 从左到右 水平方向， 是默认值
- row-reverse :从右到左 水平方向
- column ： 从上到下， 垂直方向
- column-reverse ： 从下到上， 垂直方向

##### flex-wrap换行规则

决定弹性盒子内部的子元素超出父元素容器时，是否换行。默认为`nowrap`

- nowrap : 不换行，如果容器的大小`<`内部元素的总大小，那么内部的元素会压缩
- wrap ： 换行，跟float效果没啥区别
- wrap-reverse : 反着换行，跟float差别很大

##### flex-flow复合属性

flex-flow = flex-wrap + flex-direction

语法 ： flex-flow ：flex-direction flex-wrap

具体参看 ： flex-03 ; 将03中的 flex-direction flex-wrap 替换成 flex-flow

##### 主轴与交叉轴

主轴是由 flex-direction 来确定的！

- flex-direction = row 或 row-reverse ， 此时主轴是 水平方向 ， 交叉轴是 垂直方向
- flex-direction = column 或 column-reverse ， 此时主轴是 垂直方向 ， 交叉轴是 水平方向

##### justify-content

设置 主轴 方向的对齐方式 , 可选取值：

- flex-start： 从行首开始排列。每行第一个弹性元素与行首对齐，同时所有后续的弹性元素与前一个对齐。
- flex-end： 从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。
- center： 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
- space-between : 均匀排列每个元素，<mark>首个元素放置于起点，末尾元素放置于终点</mark>。中间的<mark>元素之间的间距是相等</mark>的。
- space-evenly ： 均匀排列每个元素，每个元素之间的<mark>间隔相等</mark>。
- space-around : 均匀排列每个元素，每个元素周围分配相同的空间。

##### align-items

设置<mark>子元素</mark>在 侧轴 方向的对齐方式 ，可选取值：

- stretch 默认。项目被拉伸以适合容器。

- center 项目位于容器的中央。

- flex-start 项目位于容器的开头。

- flex-end 项目位于容器的末端。

- baseline 项目被定位到<mark>容器的基线</mark>。基线就是文字的下划线

- align-content : 与 align-items 类似 。

- order : 设置弹性盒子的子元素排列顺序。

##### align-content

效果跟align-items类似，但是是设置<mark>多行对齐</mark>，单行看不到效果

- 基本位置对齐：
  
  - `start`：所有行从容器的起始边缘开始填充。
  
  - `end`：所有行从容器的结束边缘开始填充。
  
  - `flex-start`：所有行从垂直轴<mark>起点</mark>开始填充。第一行的垂直轴起点边和容器的垂直轴起点边对齐。接下来的每一行紧跟前一行。
  
  - `flex-end`：所有行从垂直轴<mark>末尾</mark>开始填充。最后一行的垂直轴终点和容器的垂直轴终点对齐。同时所有后续行与前一个对齐。

- `center`：所有行朝向容器的中心填充。每行互相紧挨，<mark>相对于容器居中对齐</mark>。容器的垂直轴起点边和第一行的距离相等于容器的垂直轴终点边和最后一行的距离。

- `normal`：默认位置填充，默认值。

- 基线对齐：
  
  - baseline  
  
  - first baseline
  
  - last baseline

- 分布式对齐：
  
  - `space-between`：所有行在容器中平均分布。相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的边对齐。
  
  - `space-around`：所有行在容器中平均分布，相邻两行间距相等。容器的垂直轴起点边和终点边分别与第一行和最后一行的距离是相邻两行间距的一半。
  
  - `space-evenly`：所有行沿垂直轴均匀分布在对齐容器内。每对相邻的项之间的间距，主开始边和第一项，以及主结束边和最后一项，都是完全相同的。
  
  - `stretch`：<mark>拉伸</mark>所有行来<mark>填满</mark>剩余空间。剩余空间平均地分配给每一行。

- 溢出对齐：如`align-content: safe center;`(不知道咋用的，没讲)
  
  - `safe`：与对齐关键字一起使用。如果所选的关键字意味着项溢出对齐容器（data loss），则将采用备用策略对项进行对齐，就像启动了 `start` 对齐模式一样。
  
  - `unsafe`：与对齐关键字一起使用。无论元素和对齐容器的相对大小如何、是否会导致一些元素溢出可见范围（data loss），都使用给定的对齐值。



##### align-self

为自己单独设置 ， 具体取值 与 align-items 一致；<mark>可以覆盖align-items的设置！</mark>

align-items 、 align-self区别：

- align-items 通常用于所有的子元素， 是通用性较强
- align-self 经常用于自身的元素 ， 个性较强



##### flex-grow

占满<mark>剩余空间</mark>时的伸展能力。可以是任意正数。默认值为0。

这个属性规定了 `flex-grow` 项在 flex 容器中分配剩余空间的相对比例。 [主尺寸](https://www.w3.org/TR/css-flexbox/#main-size)是项的宽度或高度，这取决于[`flex-direction`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-direction)值。

剩余空间是 flex 容器的大小减去所有 flex 项的大小加起来的大小。如果所有的兄弟项目都有相同的 flex-grow 系数，那么所有的项目将剩余空间按相同比例分配，否则将根据不同的 flex-grow 定义的比例进行分配。

- 可以拿来做“圣杯布局”、“双飞翼布局”：中间内容可以任意伸缩，两边不变

##### flex-shrink

容器空间不足时收缩的能力。仅在默认width之和大于容器时才会发生收缩。

- 收缩大小的依据就是`flex-shrink`的值。

- 默认值为1，不允许有负值。

##### flex-basis

指定了flex元素在<mark>主轴方向</mark>上的<mark>初始大小</mark>。可以是数字、单位，也可以是百分比。

如果不使用box-sizing改变盒模型的画，那这个属性就决定了flex元素的内容盒子。

##### flex

设置或检索弹性盒模型对象的子元素如何分配空间

- 语法：flex：flex-grow flex-shrink flex-basis；
  
  - flex只有一个值：设置grow；有两个，设置grow和shrink；auto=1 1 auto；none=0 0 auto；
  
  - flex：0 0 calc(20% (-) 2rem)；

- flex-grow ： 扩展比率

- flex-shrink 指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值

- flex-basis ： 用于设置或检索弹性盒伸缩基准值。

##### order排序

通过设置order的大小来进行弹性盒子里面子元素的排序。

- 默认为0，可以为负值。

- 按从左到右从大到小进行排序



### HTML5的改变

1. 语法开始松散（比如写li标签可以不闭合）

2. 添加了新的语义化标签
   
   - `<header></header>`：头部标签
   
   - `<footer></footer>`：尾部标签
   
   - `<nav></nav>`：导航标签
   
   - `<article></article>`：内容标签
   
   - `<section></section>`：文档标签，定义某个区域
   
   - `<aside></aside>`：侧边栏标签

> 这种语义化标签主要也针对搜索引擎。可以多次使用。
> 
> 在IE 9中<mark>需要把这些标签转换为块元素</mark>。
> 
> 在移动端中更喜欢使用这些标签。

###### 把网站前面的www改成m就可以变成移动端

[HTML5 教程 | 菜鸟教程](https://www.runoob.com/html/html5-intro.html)

 

### 媒体查询@media

用来查询浏览设备是什么，你可以针对不同的媒体类型定义不同的样式。

- 不同大小,不同样式

@media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。

当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。

<mark>当且仅当该媒体查询与正在使用其内容的设备匹配时，该CSS块才能应用于该文档。</mark>

使用方法：

1. 在`<head>`里面加入`<meta>`viewport属性。
   
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
   ```

这段代码的几个参数解释：  

- width = device-width：宽度等于当前设备的宽度 

- initial-scale：初始的缩放比例（默认设置为1.0）  

- minimum-scale：允许用户缩放到的最小比例（默认设置为1.0）  

- maximum-scale：允许用户缩放到的最大比例（默认设置为1.0）  

- user-scalable：用户是否可以手动缩放（默认设置为no，因为我们不希望用户放大缩小页面）
2. `<head>`标签中引入（CSS2 media

```html
<link rel="stylesheet" type="text/css" media="自定义内容" ;href="style.css">
```

3. 在@media里面写样式

    需要使用非固定宽度（em、rem、……），优先考虑移动端！pc端可以不做响应

    语法：详见手册

```css
@media (max-width:500px){
    body{}
    h1{}
    ...    
}
```

    需要注意：

- 设置屏幕大小边界的时候，<mark>注意边界不要重合！</mark>不然会产生样式冲突！

- 竖屏切换到横屏的时候宽高会互换


### CSS分离

页面里面不能写太多需要加载的元素,超过7s的加载时间就会被用户关闭/刷新网页 ! 

可以把多个media的不同css样式进行分离,从而减少需要加载的css(如同媒体查询的第二步那样,向head标签里面link不同的对应的标签)

### reset.css格式化CSS

搜索这个,网页里提供了哪些css样式需要被重置。

>现在可以用 **Normalize.css** 来替代 reset.css

## Less

less是一門CSS预处理器，它扩充了CSS语言。

- 增加了例如：变量、函数、混合、运算等功能

- 让CSS更容易被维护
