---
typora-root-url: ../HTML&JS
---

[参考尚硅谷视频](http://www.atguigu.com/download_detail.shtml?v=63)

[官方文档1](https://developer.mozilla.org/zh-CN/docs/Web/HTML)

[官网文档2](https://www.w3school.com.cn/html/index.asp)

# HTML简介

基本的HTML页面：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8'>
    <title>网页标题</title>
  </head>
  <body>
    <h1>
      网页正文
    </h1>
  </body>
</html>
```

## 标签和元素

HTML中的标记指的就是标签，用来描述网页。

我们还将一个完整的标签称为元素，在这里可以将元素和标签认为是同义词。

## 属性

可以为HTML标签设置属性，为HTML元素提供附加信息。属性需要设置在开始标签或自结束标签中。属性总是以名称/值对的形式出现，比如：name=“value”。有些属性可以是任意值，有些则必须是指定值。

### 常见的属性

- id：作为标签的唯一标识，在同一个网页中不能出现相同的id属性值；
- class：用来为标签分组，拥有相同class属性的标签我们认为就是一组，可以出现相同的class属性，可以为一个元素指定多个class，多个class之间**空格**隔开。
- title：用来指定标签的标题，指定title以后，鼠标移入到元素上方时，会出现提示文字。

## 注释与实体(转义)

注释格式：<!--注释内容-->

网页中编写的多个空格默认情况会自动被浏览器解析为一个空格，一些特殊字符需要转义字符来表示**(有分号)**：

- \&nbsp;   空格
- \&gt;     大于号
- \&lt; 小于号
- \&copy; 版权符号

## 基本网页标签

### doctype文档声明

HTML常用的有三个版本，我们需要添加doctype声明来告知浏览器使用的HTML版本。

```html
//html4 严格版
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
//xhtml 1.0严格版
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
//html5 常用
<!DOCTYPE html>
```

### html标签

html标签属于网页的根标签，里面有lang属性告知网页解析的语言。

```html
<html lang="en">
```

### meta标签

meta主要用于设置网页中的一些元数据，元数据不是给用户看

- charset：指定网页的字符集；
- name：指定的数据的名称
- content：指定的数据的内容
- http-equiv：指定http协议。http-equiv='refresh' content="3;http//XXX"，3秒后重定向到http//XXX网页

```html
//keywords：表示网站的关键字，可以同时指定多个关键字，关键字间使用,隔开
<meta name="Keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东"/>
//description：用于指定网站的描述，网站的描述会显示在搜索引擎的搜索的结果中
<meta name="description" content="京东JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!"/>
```

### title标签

title标签的内容会作为搜索引擎结果的超链接上的文字显示，和网页的标题。

```html
<title>hello</title>
```

# HTML常用标签

块元素（block element）：一般通过块元素来对页面进行布局

行内元素（inline element）：主要用来包裹文字。

- 一般情况下会在块元素中放行内元素，而不会在行内元素中放块元素；
- 块元素中基本上什么都能放，但p元素除外，p元素中不能放任何的块元素。

替换元素：块和行内元素之间，具有两种元素的特点。

| 标签       | 含义                               | 块元素 | 行内元素 |
| ---------- | ---------------------------------- | ------ | -------- |
| h1-h6      | 标题                               | 是     |          |
| p          | 段落                               | 是     |          |
| em         | 语音语调加重，斜体                 |        | 是       |
| strong     | 表强调，加粗                       |        | 是       |
| blockquote | 长引用，效果换行                   |        |          |
| q          | 短引用，效果为加双引号             |        |          |
| br         | 页面中的换行                       |        | 是       |
| hr         | 水平线                       |        |        |
| div        | 没有语义，仅表示区块               | 是     |          |
| span       | 没有语义，一般用于在网页中选中文字 |        | 是       |
|            |                                    |        |          |

## 列表标签

### 无序列表

效果：每行前为点。

```htm
<ul>
    <li>结构</li>
    <li>表现</li>
    <li>行为</li>
</ul>
```

### 有序列表

效果：每行前为有序数字。

```htm
<ol>
    <li>结构</li>
    <li>表现</li>
    <li>行为</li>
</ol>
```

### 定义列表

效果：有等级之分。

使用dt来表示定义的内容，使用dd来对内容进行解释说明

```htm
<dl>
    <dt>结构</dt>
    <dd>结构表示网页的结构1</dd>
    <dd>结构表示网页的结构2</dd>
</dl>
```

## a标签(超链接)

a标签表示超链接，是行内元素，在a标签中可以嵌套除它自身外的任何元素

属性：

- href：指定跳转的目标路径(内部或外部地址)
- > #可最为路径的占位符使用
  >
  > href='#'返回当前页顶端
  >
  > href='#和标签id'时，定位到该id标签处

- target：用来指定超链接打开的位置，

- > \_self 默认值 在当前页面中打开超链接；\_blank 在一个新的要么中打开超链接

```html
<a href='http://www.baidu.com' target='_blank'>新页面打开</a>
```

## img标签(图片)

img图片标签用于向当前页面中引入一个外部图片，自结束标签，属于替换元素。

- src：指定的是外部图片的路径（路径规则和超链接是一样的）
- alt：图片的描述，默认情况下不会显示，有些浏览器会图片无法加载时显示。搜索引擎会根据alt中的内容来识别图片
- width：图片的宽度 (单位是像素)
- height：图片的高度【宽或高修改了一个，另外一个等比例缩放】

```html
<img src="node1.jpg" height="200px" alt="node1">
```

PS：图片的格式

| 格式      | 特点                                                     | 一般用途                               |
| --------- | -------------------------------------------------------- | -------------------------------------- |
| jpeg(jpg) | 支持的颜色比较丰富，不支持透明效果，不支持动图           | 照片                                   |
| gif       | 支持的颜色比较少，支持简单透明，支持动图                 | 颜色单一图片，动图                     |
| png       | 支持的颜色丰富，支持复杂透明，不支持动图                 | 颜色丰富，复杂透明图片（专为网页而生） |
| webp      | 具备其他图片格式的所有优点，文件还特别的小，但兼容性不好 |                                        |

## audio/video标签(音视频)

audio(video)用来向页面中引入一个外部的音(视)频文件，音(视)频文件引入时，默认情况下不允许用户自己控制播放停止。

- controls 是否允许用户控制播放，没有这个不显示播放条
- autoplay 音频文件是否自动播放，safari和chrome都没自动播放
- loop 音乐是否循环播放 ，safari和chrome都没循环播放

```html
//方式1
<audio src="./audio/Glay - 疾走れ!ミライ.mp3" controls></audio>
//方式2
<audio controls autoplay loop>
    <source src="./audio/love.mp3">
    <source src="./audio/Glay - 疾走れ!ミライ.mp3">
</audio>
```

# CSS(Cascading Style Sheets)

层叠样式表(CSS)：为网页创建样式表，通过样式表对网页进行修饰。

CSS的样式表由一个一个的样式构成，一个样式又由选择器和声明块构成。

语法：选择器{样式名:样式值；样式名:样式值; }

- 行内样式：将样式属性写到标签内部，通过style属性设置，各简直对间分号分隔。这种方式结构与表现耦合，不推荐。
- 内部样式表：将样式编写到head中的style标签里
- 外部样式表：CSS样式写到外部CSS文件中，通过link标签引入。

```html
<p style='color:red; font-size:60px;'>行内样式</p> <!--方式1-->

/*方式2*/
<head>
  <style type='text/css'>
    #innerCSS{
      color:green;
      font-size:50px;
    }
  </style>
</head>
<body>
   <p id='innerCSS'>内部样式表</p>
</body>
 
/*方式3*/
<head>
  <link rel='stylesheets' href='./style.css'>
</head>
<body>
  <p id='outterCSS'>外部样式表</p>
</body>

//style.css
#outterCSS{
	color:yellow;
	font-size:40px;
}
```

## 选择器

### 常用选择器

元素选择器：标签名{}

id选择器：#id属性值{}

类选择器：.class属性值{}

通配选择器：*{}

### 复合选择器

**交集选择器**：为满足多个选择器条件的元素设定样式，各选择器间<font color='red'>无分隔符</font>。如果有元素选择器，则必须**元素选择器开头**。

**并集选择器**：为满足其中之一条件的元素设定样式，各选择器间<font color='red'>逗号</font>分隔，逗号间可以有空格。

```html
//有id='p1' class='text'和id='p2'
//交集选择器
#p1.text{
	color:green;
}
//并集选择器
#p1, #p2{
	color:yellow;
}
```

### 关系选择器

**子元素选择器**：父元素>子元素{}

**后代元素选择器**：祖先 后代{}	祖先和后代间有空格

**下一个兄弟元素选择器**：本元素 + 下一个兄弟元素{} 【兄弟元素和邻接下一个两条件必须满足，+前后可有空格】

**下面所有兄弟元素选择器**：本元素 ~ 元素代表的下面所有元素【特定某一兄弟元素，~前后可有标签】

```html
<style type='text/css'>
  p + span{
    color:red;
  }/*没反应，因为span不是邻接的下一个兄弟*/
  p ~ span{
    color:green;
  }/*span1~4都变绿*/
</style>

<p>
    我是div中的p元素
    <span>我是p元素中的span</span>
</p>
<div></div>
<span>我是span1</span>
<span>我是span2</span>
<span>我是span3</span>
<span>我是span4</span>
```

### 属性选择器

[属性名]：选择含有指定属性的元素

[属性名=属性值]：选择含有指定属性和属性值的元素

[属性名^=属性值]：选择属性值以指定值开头的元素

[属性名$=属性值]：选择属性值以指定值结尾的元素

[属性名*=属性值] 选择属性值中含有某值的元素的元素

```html
p[title]{
	color='red';
}
p[title=abc]{
	color='green';
}
p[title^=abc]{
	color:'yellow';
} 
p[title$=abc]{
	color:'blue';
}
p[title*=e]{
	color:'orange';
}
```

### 伪类选择器

伪类：特殊的类，虚拟不存在的类。例如：第一个子元素、最后一个子元素、被点击的元素、鼠标移入的元素等。

**位置伪类**：

```html
//子元素位置伪类
//所有子元素进行排序，要求元素和位置要都满足要求，li:first-child，选择子元素且第一个是li的元素
:first-child 第一个子元素
:last-child 最后一个子元素
:nth-child(n) 选中第n个子元素,从1开始
    特殊值：
        n 第n个 n的范围0到正无穷
        2n 或 even 表示选中偶数位的元素
        2n+1 或 odd 表示选中奇数位的元素
//同类元素位置伪类，在满足元素要求下去找相应位置。li:first-of-type，选择子元素中li元素的第一个
:first-of-type
:last-of-type
:nth-of-type()

<head>
<style type='text/css'>
#p1 span:nth-child(2){
    color:red;
}
</style>
</head>
<body>
<p id="p1">
    我是div中的p元素
    <span>我是p元素中的span1</span>
    <span>我是p元素中的span2</span>
    <span>我是p元素中的span3</span>
    <span>我是p元素中的span4</span>
</p>
 </body>
```

**:not()**：否定伪类，将符合条件的元素从选择器中去除。

**a元素的伪类**

- :link：用来表示没访问过的链接（正常的链接）
- :visited：用来表示访问过的链接。因隐私问题，visited这个伪类只能修改链接的颜色，其他属性设置无效。
- :hover：用来表示鼠标移入的状态
- :active：用来表示鼠标点击

### 伪元素选择器

伪元素：特殊的元素，虚拟不存在的。例如：开头第一个字母，页面中选中的内容，元素的开始等。

::first-letter 表示第一个字母
::first-line 表示第一行
::selection 表示选中的内容
::before 元素的开始 
::after 元素的最后

before 和 after 必须结合content属性来使用

```html
p::first-letter{
    font-size: 50px;
}

p::first-line{
    background-color: yellow; 
}

p::selection{
    background-color: greenyellow;
}
<!--在div标签的内容区的开头添加『-->
div::before{
    content: '『';
 }
<!--在div标签的内容区的结尾添加』-->
div::after{
    content: '』';
}
```

### 选择器间的优先级

内联样式        1,0,0,0
id选择器        0,1,0,0
类和伪类选择器   0,0,1,0
元素选择器       0,0,0,1
通配选择器       0,0,0,0
继承的样式       没有优先级

当选择的同一个元素且设置同一属性不同值时，优先级先后规则：

- 将所有选择器优先级按上述向量相加，先比较第一位，第一位比较高的优先显示，第一位相同比较第二位...
- 分组选择器单独计算，满足其中的最高优先级的条件为计算结果
- 优先级相同时，会按序执行，后面的样式会覆盖前面的样式；
- 样式后加!important 是最高级样式，优先显示

## 样式的继承

样式的继承：为一个元素设置的样式同时也会应用到它的后代元素上

注意：并不是所有的样式都会被继承：比如 背景相关的，布局相关等的这些样式都不会被继承。

## 默认样式

通常浏览器有默认样式且不同浏览器会有不同的样式设计，这样会影响我们的布局，一般会将浏览器默认样式去除或者将样式统一(reset.css或normalize.css百度可下载)。

```html
<!--方式1：简单页面-->
*{
	margin:0;
	padding:0;
	/*去除列表符号*/
	list-style:none;
}

<!--方式2:因方式1不可避免有残留，引入外部reset.css表重制-->
<link rel="stylesheet" href="reset.css路径" >

<!--方式3:引入normalize.css将样式统一-->
<link rel="stylesheet" href="normalize.css路径" >
```

## 字体与背景

# HTML各类结构

## 文档流

网页是一个多层的结构，一层摞着一层，最底下的一层称为文档流，文档流是网页的基础。元素主要有两个状态：在文档流中或脱离文档流。

元素在文档流中特点：

- 块元素

- > 在页面中独占一行(自上向下垂直排列)
  >
  > 默认宽度是父元素的全部（会把父元素撑满）
  >
  > 默认高度是被内容撑开（子元素）

- 行内元素

- > 不会独占一行，只占自身的大小，从左向右水平排列，会自动换行
  >
  > 默认宽度和高度都是被内容撑开

## CSS盒模型

<img src="/HTML%E7%AC%94%E8%AE%B0.assets/CSS%E6%A1%86%E6%A8%A1%E5%9E%8B%E5%9B%BE.png" alt="CSS框模型图" style="zoom:30%;" />

默认情况下，盒子可见框的大小由内容区、内边距和边框共同决定，当设置box-sizing属性时有所变化：

- content-box 默认值，宽度和高度为内容区的大小
- border-box 宽度和高度为整个盒子可见框的大小

### 块元素的盒模型

element(content内容区)：元素中的所有的子元素和文本内容都在内容区中排列。

- width 设置内容区的宽度
- height 设置内容区的高度 

padding(内边距)：内容区和边框之间的距离是内边距，会改变盒子大小。为块设定的背景颜色会延伸到内边距上。

- 通过padding设置属性，上下左右对应关系同border-width
- 也可通过padding-top、padding-left等单独设置。

border(边框)：边框属于盒子边缘，边框的大小会影响到整个盒子的大小。

- border-width 边框的宽度，有默认值(border才有默认值)，3px。可通过border-right-width【top、right、bottom、left】等单独设置某边宽度。

- > 四个值：上 右 下 左  border-width: 5px 10px 15px 20px; 
  >
  > 三个值：上 左右 下
  >
  > 两个值：上下 左右
  >
  > 一个值：上下左右

- border-color 边框的颜色，有默认值，默认值为块的color值(内容区的颜色)。可多值，多值的对应关系同border-width。可通过border-right-color等单独设置某边颜色。

- border-style 边框的样式

- > solid 表示实线
  >
  > dotted 点状虚线
  >
  > dashed 虚线
  >
  > dashed 虚线

- **综合**：通过border将三种属性写在一起，空格隔开，也可通过border-top等为某边设置三种属性。

margin(外边距)：盒子可见框外与父元素的位置关系。不会影响盒子可见框的大小，影响盒子位置。

- 通过margin设定属性值，上下左右对应关系同border-width
- 也可通过margin-top、margin-right等单独设定
- 元素在页面中是按照自左向右的顺序排列的，默认情况下如果我们设置的左和上外边距则会移动元素自身，而设置下和右外边距会移动其他元素。

### 行内元素的盒模型

element(content内容区)：行内元素不支持设置宽度和高度

padding(内边距)：行内元素可以设置padding，但是垂直方向padding不会影响页面的布局(相邻元素不移动，仅发生重叠)

border(边框)：垂直方向的border不会影响页面的布局

margin(外边距)：垂直方向的margin不会影响布局

### 页面布局

#### 盒模型的水平布局

元素在其父元素中水平方向的位置由以下几个属性共同决定：margin-left border-left padding-left width padding-right border-right margin-right

上述和 == 其父元素内容区宽度，当设置不满足时，会自动调整。调整规则如下：

- 7个属性值没有auto时，浏览器自动调整margin-right；
- width margin-left margin-right 其中一属性为auto时，调整该属性使等式满足；
- width和margin-left、width和margin-right为auto时，优先width，宽度会最大，当margin-left和margin-right为auto时，两者均分剩余宽度；
- 三属性都为auto时，优先width。

#### 外边距的折叠

相邻元素垂直方向会发生重叠现象

- 兄弟元素外边距重叠规则

- > 同号，取绝对值大者
  >
  > 异号，求和

- 父子元素相邻外边距，子元素会传递给父元素。处理：

- > 方式1:给父元素设置border-top(一定要设线性)，将子元素和父元素的边分离，然后设置子元素的margin；
  >
  > 方式2:给父元素设置padding-top，修改父元素内容区位置，从而达到移动子元素的目的；

#### 其他属性

##### overflow溢出

子元素在父元素的内容区排列，若子元素的大小超过了父元素，则子元素会从父元素中溢出。可用overflow设置父元素如何处理子元素【写在父元素的样式里】。

overflow、overflow-x、overflow-y：

- visible 默认值，子元素允许溢出
- hidden 溢出内容被裁剪
- scroll 生成滚动条，通过滚动条显示完整内容
- auto 根据需要是否需要生成滚动条

```html
#outer{
    width: 100px;
    height: 100px;
    background-color: coral;
    overflow: scroll;
}
#inner{
    width:200px;
    height: 200px;
    background-color: #bfa;
    margin-left: auto;
    margin-right: auto;
}

<div id="outer">
    <div id="inner"></div>
</div>
```

##### display陈列

display 用来设置元素显示的类型

- inline 将元素设置为行内元素
- block 将元素设置为块元素
- inline-block 将元素设置为行内块元素 (行内块，既可以设置宽度和高度又不会独占一行)
- table 将元素设置为一个表格
- none 元素不在页面中显示

##### visibility显示

visibility 用来设置元素的显示状态

- visible 默认值，元素在页面中正常显示
- hidden 元素在页面中隐藏 不显示，但是依然占据页面的位置

##### box-shadow阴影

box-shadow 用来设置元素的阴影效果，阴影不会影响页面布局 

- 第一个值 水平偏移量 设置阴影的水平位置 正值向右移动 负值向左移动
- 第二个值 垂直偏移量 设置阴影的水平位置 正值向下移动 负值向上移动
- 第三个值 阴影的模糊半径，越大越模糊
- 第四个值 阴影的颜色

##### outline轮廓线

outline 用来设置元素的轮廓线，用法和border一样，与border区别是，outline不影响可见框大小，不影响布局。

##### border-radius圆角

border-radius: 用来设置圆角 圆角设置的圆的半径大小(border-top-left-radius、border-top-right-radius、border-bottom-left-radius、border-bottom-right-radius)

- 设置4值时，从左上顺时针
- 设置3值时，右上/左下共用
- 设置2值时，左上/右下 右上/左下 
- 设置1值为50%时，即以父元素长、宽为半径，成椭圆形

## 表格

### 基本元素

table：表格

th：表头(加粗居中)

tr：行

td：单元格

- rowspan：纵向向后合并单元格``<td rowspan="2">A</td>``，数字为合并的数量
- colspan：横向向下合并单元格，用法同rowspan

### 表格布局

thead：表头

tbody：表格体。当代码中没有写tbody时，浏览器会默认在table下添加tbody包裹表格内容

tfoot：表尾。thead tbody tfoot不管在代码中什么位置，浏览器总是head、body、foot的顺序布局。

### 表格样式

table

- width 宽度
- border 边，仅为外边框
- border-spacing 指定边框之间的距离，如果设为0，边框紧贴，感觉向加粗了
- border-collapse:collapse 边框合并，与单元格之间的边框合并

td

- height：高度
- border:单元格边框
- vertical-align【baseline top middle bottom sub text-top】用来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方
- text-align  文字对齐方式

## 表单

网页中的表单用于将本地的数据提交给远程的服务器。

form标签：表示文档中的一个区域，此区域包含交互控件，用于向 Web 服务器提交信息。

- action 处理表单提交的URL

- method 使用HTTP提交表单的方式。

- > post:跳转url上不可见提交内容
  >
  > get:跳转url上可见提交内容

- target 提交表单后在哪里显示响应信息

- > _self:当前页面响应
  >
  >  _blank:新标签页响应
  >
  >  _parent _top

selection标签：下拉列表。下拉选项通过option子标签设置，添加selected为默认选项。

input标签：用于为基于Web的表单创建交互式控件，以便接受来自用户的数据; 可以使用各种类型的输入数据和控件小部件。

input的工作方式一定程度上取决于type属性。

### input的type属性

| type     | 作用                   | 注意事项                           |
| -------- | ---------------------- | ---------------------------------- |
| button   | 没有默认行为的按钮     |                                    |
| text     | 默认值，单行的文本区域 | 输入中的换行会被自动去除。         |
| password | 密码框，不明文显示     | 单行文本      |
| radio    | 单选按钮               | 多个拥有相同name值的选项只能选一个 |
| checkbox | 复选框                 | 可设置为选中或未选中checked        |
| color | 颜色选择 | value颜色需要#十六进制格式，HTML5 |
| date | 日期 |                                    |
| file | 文件选择 | 可以设定文件格式 |
| image | 图片选择 | |
| reset | 重置上述表单内容 | 慎用！ |
| submit | 提交按钮 | |

### input其他常用标准属性

| 通用属性     | 作用               | 注意事项                                             |
| ------------ | ------------------ | ---------------------------------------------------- |
| autocomplete | 表单自动补全on/off | 可用于form，使form下的表单统一开启或关闭             |
| autofocus    | 页面加载时自动聚焦 | **无值**                                             |
| disabled     | 禁用               | **无值**，表单项的数据不会提交                       |
| readonly     | 只读               | **无值**，表单项只读，数据会提交                     |
| name         | 表单控件名字       | 表单数据提交到服务器，需要name，以name=value形式传输 |
| required     | 必填此表单         | **无值**,表单提交前会检查标记required的元素          |
| value        | 表单项的值         | 以 名/值 对的形式随表单提交，提前写的表示默认值      |

| 属性        | 适用type               | 作用                               | 注意                                                         |
| ----------- | ---------------------- | ---------------------------------- | ------------------------------------------------------------ |
| accept      | file                   | 规定上传文件的类型                 | 值为逗号分隔列表，".jpg,.png"，或audio/\*,image/\*,video/\*  |
| alt         | image                  | 注释                               | 当图片没法显示时出现                                         |
| checked     | radio, checkbox        | 用于控件是否被选中                 | **无值**                                                     |
| height      | image                  | 设置高度                           |                                                              |
| max         | 数字type               | 最大值                             | min                                                          |
| maxlength   | password, search,tel等 | value的最大长度(字符数)            | minlength                                                    |
| pattern     | password, text, tel    | 匹配有效value的模式                | pattern="[a-z]{1,8}"                                         |
| placeholder | password,search等      | 当表单内容为空时，控件中显示的内容 | value和placeholder同时存在时，优先显示value，且placeholder不会自动赋值给value |
| size        | email, password等      | 控件大小                           | 显示框的大小，值表示字符长度                                 |
| src         | image                  | 图像源地址                         |                                                              |
| step        | 数字type               | 有效的递增值                       | 当为any时，表示任意粒度                                      |
| width       | image                  | image的宽度                        |                                                              |

# 页面布局

## 浮动

## 定位



# 其他相关知识

## 长度单位

像素：

- 屏幕（显示器）实际上是由一个一个的小点点构成的；
- 不同屏幕的像素大小是不同的，像素越小的屏幕显示的效果越清晰
- 所以同样的200px在不同的设备下显示效果不一样

百分比：

- 可将属性值设置为相对于其父元素属性的百分比
- 设置百分比可以使子元素跟随父元素的改变而改变

em：

- em是相对于元素的字体大小来计算的
- 1em = 1font-size
- m会根据字体大小的改变而改变

rem：

- rem是相对于根元素的字体大小来计算

## 颜色单位

颜色名：

- CSS可直接使用颜色名来设置各种颜色，red、orange、yellow、blue、green

RGB值：

- 通过三种颜色(red，Green，Blue)的不同浓度来调配出不同的颜色
- 每一种颜色的范围在 0 - 255 (0% - 100%) 之间
- 语法：RGB(红色,绿色,蓝色)

RGBA：

- 在rgb的基础上增加了一个a表示不透明度
- 第四个表示不透明度(0~1)间，1表示完全不透明   0表示完全透明  .5半透明

十六进制的RGB值：

- 同RGB，但是用16进制来表示颜色的取值，00-ff
- 语法：#红色绿色蓝色
- 如果颜色两位两位重复可以进行简写 ，#aabbcc -->#abc

HSL值 HSLA值：

- H 色相(0 - 360)
- S 饱和度，颜色的浓度 0% - 100%
- L 亮度，颜色的亮度 0% - 100%



input/button，disabled属性设置为disabled，会变成无法响应状态。disabled属性设为false，会重新激活。

