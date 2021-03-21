[TOC]

[参考视频](https://www.bilibili.com/video/BV1bs411E7pD?p=3)

[参考文档](http://nodejs.cn/api/)

# 简介

NodeJS是一个能够在服务器端运行JavaScript的开放源代码、跨平台JavaScript运行环境。

Node采用Google开发的V8引擎运行js代码，使用事件驱动、非阻塞和异步I/O模型等技术来提高性能，可优化应用程序的传输量和规模。

Node大部分基本模块都用JavaScript编写。在Node出现之前，JS通常作为客户端程序设计语言使用，以JS写出的程序常在用户的浏览器上运行。

Node主要用于编写像Web服务器一样的网络应用，这和PHP和Python是类似的。但是Node与其他语言最大的不同之处在于，PHP等语言是阻塞的而Node是非阻塞

Node是事件驱动的。开发者可以在不使用线程的情况下开发出一个能够承载高并发的服务器。其他服务器端语言难以开发高并发应用，而且即使开发出来，性能也不尽人意。

# NodeJS下载安装

## 下载

[NodeJS官网下载](https://nodejs.org/en/)

选择LTS版，按照电脑操作系统下载相应版本。

## 安装

1.下载node-v14.16.0.pkg

2.双击node-v14.16.0.pkg

<img src="/Users/tangaihui/Documents/CSDN%E5%8D%9A%E5%AE%A2%E5%9B%BE%E7%89%87%E7%AD%89%E8%B5%84%E6%BA%90/11.0%20%E5%BF%AB%E9%80%9F%E5%AD%A6JS/NodeJS%E5%AE%89%E8%A3%851.png" alt="NodeJS安装1" style="zoom:50%;" />

安装提示一步一步安装。

## NodeJS与WebStorm整合

打开WebStorm，打开'首选项'，搜索'node'，选择Node.js and NPM，右边选择Node interpreter 解释器路径，点"OK"。

<img src="/Users/tangaihui/Documents/CSDN%E5%8D%9A%E5%AE%A2%E5%9B%BE%E7%89%87%E7%AD%89%E8%B5%84%E6%BA%90/11.0%20%E5%BF%AB%E9%80%9F%E5%AD%A6JS/NodeJS%E4%B8%8EWebStorm%E6%95%B4%E5%90%88.png" alt="NodeJS与WebStorm整合" style="zoom:50%;" />

勾选Coding assistance for Node.js, Package manager会勾选npm，在这里稍微等一会儿，会自动选定npm路径。

## JS文件运行

方式1:终端中输入 ``node 文件路径``运行js文件

方式2:Nodejs 的IDE可以直接点击文件，通过文件run选项运行，

方式3:webstorm或VScode有终端界面，在终端界面输入 ``node 文件``运行

# CommonJS规范

ECMAScript标准的缺陷：没有模块系统、标准库较少、没有标准接口、缺乏管理系统。

CommonJS规范的提出，主要是为了弥补当前JavaScript没有模块化标准的缺陷。其对模块的定义是：1.模块引用；2.模块定义；3.模块标识。

# 模块

JS模块分成两大类:

- 核心模块

- > 由node引擎提供的模块
  >
  > 核心模块的标识就是，模块的名字，如fs，require("fs");

- 文件模块

- > 由用户自己创建的模块
  >
  > 文件模块的标识就是文件的路径（绝对路径，相对路径），如require('./node.js');

## 模块化定义

- 在Node中，一个js文件就是一个模块；
- 在运行环境中，提供了exports对象用于导出当前模块的方法或者变量，并且它是唯的导出的出口；
- 在模块中还存在一个module对象，它代表模块自身，exports是module的属性。

## 模块引用

- 在node中，通过require()函数来引入外部的模块，文件路径字符串作为参数；
- 可以使用绝对路径或相对路径，相对路径中.(当前目录)或..(上级目录)不可省略，文件后缀可省；
- require()函数返回值是一个对象，代表引入的模块。

## 模块标识

模块标识其实就是模块的名字，也就是传递给require()方法的参数，它必须是符合驼峰命名法的字符串，或者是以.或..开头的相对路径、或者绝对路径。

## node中的对象

### global

node中有一个全局对象 global，它的作用和网页中window类似。在全局中创建的变量都会作为global的属性保存，函数都会作为global的方法保存。

当node在执行模块中的代码时，模块代码会被包裹在``function (exports, require, module, __filename, __dirname) {}``中。

- export：该对象用来将变量或函数暴露到外部；
- require：函数，用来引入外部的模块；
- module：代表的是当前模块本身，exports就是module的属性，模块的属性或方法可以使用 exports 导出，也可以使用module.exports导出；
- __filename：当前模块的完整路径；
- __dirname：当前模块所在文件夹的完整路径

### exports 和 module.exports

可以exports 或 module.exports暴露模块的属性或方法。

```javascript
//方式1
exports.name = 'Tom';
//方式2
module.exports.name = 'Tom';
//方式3
module.exports = {
  name:'Tom',
  age:8
};
//注，exports不能直接通过{}来赋值暴露的属性或方法
exports = {
  name:'Tom'
};//XXX.name引用的结果是undefined

```

## 属性方法引用

- 在Node中，每一个js文件中的js代码都是独立运行在一个函数中而不是全局作用域，所以模块中的变量和函数在其他模块中无法直接访问
- 通过 exports 来向外部暴露变量和方法

```javascript
//node1.js文件
exports.x = '暴露的x';
y = '非暴露的y';
exports.fn = function(){
  console.log("暴露的函数fn");
};//暴露的函数
console.log('模块的代码');

//node2.js
var node1_obj = require('./node1.js');//模块的代码
console.log(node1_obj);//{ x: '暴露的x', fn: [Function (anonymous)] }
console.log(node1_obj.x);//暴露的x
console.log(node1_obj.y);//undefined
node1_obj.fn();//add暴露的函数fn
```

[返回目录](#anchor)

# 包package

将一组相关的模块组合到一起，形成一组完整的工具，称作包(package)。

CommonJS的包规范由**包结构**和**包描述文件**两个部分组成。

包结构：用于组织包中的各种文件。(<font color = red>package.json 描述文件</font>、bin 可执行二进制、lib js代码、doc 文档、test 单元测试)

包描述文件：描述包的相关信息，以供外部读取分析。

## NPM(Node Package Manager)

NPM帮助Node完成了第三方模块的发布、安装和依赖等工作。借助NPM，Node与第三方模块之间形成了很好的一个生态系统。

### NPM命令

| 命令                | 作用             |
| ------------------- | ---------------- |
| npm -v              | 查看版本         |
| npm                 | 包装说明         |
| npm search 包名     | 搜索模块包       |
| npm install 包名    | 在当前目录安装包 |
| npm install 包名 -g | 全局模式安装包   |

## NPM包引用

<font color='red'>待补充</font>

# Nodejs核心模块

## Buffer模块

Buffer(缓冲区):对底层内存的直接操作，用来存储二进制数据。不需要引入，可直接使用。buffer中每一个元素的范围是从00 - ff

### buffer类方法

Buffer.from(str) 将一个字符串转换为buffer

Buffer.alloc(size) 创建一个指定大小的Buffer

Buffer.alloUnsafe(size) 创建一个指定大小的Buffer，但是可能空间上一次未删除数据

```js
var str = 'hello';
var buf1 = Buffer.from(str);

var buf2 = Buffer.alloc(10);//10字节的buffer
buf2[0] = 255;
buf2[1] = 0xaa;
buf2[2] = 256;//0，因为1字节是8bit，超过8bit的部分舍去

var buf3 = Buffer.alloUnsafe(12);//12字节的buffer
```

### buffer实例的属性/方法

buf1.toString():**buffer中的数据以二进制存储，打印到控制台为显示十六进制。要想转换成字符可用toString方法**

buf1.length:字节长度。与str.length【字符串长度】不一样。

## fs模块

fs (file-system):文件系统模块，用于文件操作。

```js
//使用 require 函数加载 fs 核心模块
const fs = require('fs');
```

### 打开文件

【同步】fs.openSync(path[, flags, mode])，返回值：文件描述符的整数

- path 字符串，要打开文件的路径
- flags 字符串，默认值"r"，打开文件要做的操作的类型，【'r'只读/'w'可写】
- mode 设置文件的操作权限，一般不传

```js
//打开文件，获取文件操作对象
var fd = fs.openSync("hello.txt" , "w");
```

【异步】fs.open(path, flags[, mode], callback)，callback函数有两个参数，error和fd，error为错误信息，fd为文件描述符。

```js
fs.open('hello.txt','w',function(err,fd){
  if(!err){
    console.log(fd);
  }else{
    console.log(err);
  }
});
```

### 文件读取

【同步】fs.readFileSync(path[, options])

【异步】fs.readFile(path[, options], callback)

- path 要读取的文件的路径

- options 对象或string 读取的选项 ，{encoding:'utf8'}

- > encoding 编码格式，string或null， 默认null
  >
  > flag 文件操作方式，string，默认'r'

- callback 回调函数，有两个参数，error和data

### 文件写入

【同步】fs.writeSync(fd, buffer[, offset[, length[, position]]])，返回值：写入的字节数

- fd 整数，文件描述符
- buffer buffer对象实例，缓冲的内容写入的内容
- offset 整数
- length 整数
- posisiton 整数

【同步】fs.writeSync(fd, string[, position[, encoding]])，返回值：写入的字节数

- fd 整数，文件描述符
- string 字符串或对象，写入的内容
- position 整数，写入位置
- encoding 字符串，写入编码格式

【异步】fs.write(fd, string[, position[, encoding]], callback)，callback函数有一个参数error

### 文件保存并关闭

fs.closeSync(fd)，返回值undefined

- fd 整数，文件描述符

### 简单文件写入

writeFile或writeFileSync包装了open、write、close等方法。

fs.writeFile(file, data[, options], callback)

fs.writeFileSync(file, data[, options])

- file 字符串，buffer URL等文件名或文件描述符

- data  字符串 buffer等 写入数据

- options 对象 字符串等，通过{flag:"w"}写入，或者直接写入

- > encoding 字符串或null，内容编码，默认utf8
  >
  > mode 整数，操作权限，默认0o666
  >
  > flag 字符串，文件操作方式，默认值'w'

- callback 有一个形参error

### 流式文件操作

流式文件操作可类比两个文件(水池)，中间连通管道data事件(管道)。

on(事件字符串,回调函数)，on(事件字符串,回调函数)

on(事件字符串,回调函数)，以为对象绑定一个一次性的事件，该事件将会在触发一次以后自动失效

方式一:通过读写操作

1.创建一个可读/可写流；2.监听流开启和关闭事件；3可读流:绑定data事件；4.1可写流  写入数据；4.2 可写流 end关闭

```js
var fs = require('fs');

var rs = fs.createReadStream('hello.txt');
var wr = fs.createWriteStream('hello.txt');

rs.once('open',function(){
  console.log('可读流打开～');
});
rs.once('close',function(){
  console.log('可读流关闭～');
  ws.end();//要可读流关闭了，才把可写流关闭，不然读取不完整。
});

ws.once('open',function(){
  console.log('可写流打开～');
});
ws.once('close',function(){
  console.log('可写流关闭～');
});

rs.on('data',function(data){
  ws.write(data);
});
```

方式二:通过pipe方法

1.创建一个可读/可写流；2.**可读流**调用通过pipe方法将内容写到可写流(写入完成后立即关闭)

```js
var fs = require('fs');

var rs = fs.createReadStream('hello.txt');
var ws = fs.createWriteStream('hello.txt');

rs.pipe(ws);
```

### fs的其他方法

fs.readdir(path[, options], callback)	读取目录内容

fs.readdirSync(path[, options])

- path 文件路径 string | Buffer | URL

- options 其他设置  string | Object

- > encoding 编码集 默认utf8
  >
  > widthFileTypes 读取的内容文件类型 默认值 false

- callback 有两个参数 errror 和 files，files为string数组



## http模块

### 简单的http服务

```js
//获取http模块对象
var http = require('http');

//创建一个http对象的Server实例
var server = http.createServer();

/*实例.on  启动实例。这里需要传入启动事件event，回调函数用于处理event.
回调函数参数request为客户端请求对象，包装了请求信息（url属性==端口号后的字符）。response为本服务器响应对象。
*/
server.on('request',function (request,response) {
    response.write('hello world');
    response.end();//end结尾，将响应信息提交。没有end则一直停在这。可简写为response.end
});

server.listen(8000,function () {
    console.log('服务器启动成功！');
});//绑定端口号后运行本文件即启动，这里可以把回调函数作为参数，用于启动时提示
```

### 不同的url返回内容

server.on持续监听requeset事件，要根据不同的request请求的url，response不同的内容，需要解析request的url信息。

一般会把url设计得跟本地项目路径相关，例如：

- /   项目根目录，一般访问网址什么都不写就是/
- /hello/test.html   项目下hello文件夹的test.html文件

```js
var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request',function(request,response){
  req_url = request.url;
  fs.readFile('全路径或相对路径 不变部分' + req_url,function(err,data){
    if(!err){
      response.setHeader('Content-Type','text/html;charset=utf-8');
      response.end(data);
    }else{
      return response.end('wrong');
    }
  });
});

server.listen(8000,function(){
  console.log('server start~');
});
```

### 练习

#### 1.简易Apache设计

将文件夹拖动到Chrome浏览器新标签页，浏览器页面可以直接出现相关目录。





## 注意点

1.同步方法和异步方法区别

同步：程序自上而下运行，如果过程中遇到阻塞，则会被阻塞等待

异步：程序不用等上面的执行完才执行下一步，如果遇到阻塞，则会先执行下面可执行操作。

同步方法运行后有返回值，异步方法运行后的返回值需要通过回调函数来实现。

```js
var fs = require('fs');
//同步
var fd = fs.openSync('hello.txt','r');//正确打开有返回值，否则报错

//异步
//如果打开成功，err为null，fd为文件描述符
//如果打开失败，err为错误信息，fd为undefined
fs.open('hello.txt','r',function(err,fd){
  console.log(err);
  console.log(fd);
});
```

2.回调函数(Callback)

回调函数是有程序员自行创建，由系统调用的函数。

打个比方，有一家旅馆提供叫醒服务，但是要求旅客自己决定叫醒的方法。可以是打客房电话，也可以是派服务员去敲门，睡得死怕耽误事的，还可以要求往自己头上浇盆水。这里，“叫醒”这个行为是旅馆提供的，相当于库函数，但是叫醒的方式是由旅客决定并告诉旅馆的，也就是回调函数。而旅客告诉旅馆怎么叫醒自己的动作，也就是把回调函数传入库函数的动作，称为**登记回调函数**（to register a callback function）。[参考](https://www.zhihu.com/question/19801131/answer/27459821)
Javascript回调函数参数可以通过arguments属性查看，一般报错参数的函数，回错误优先，arguments[0]为报错信息。

3.http服务器响应内容乱码

原因：在服务端默认发送的数据以utf8编码，但是浏览器会按照当前操作系统的默认编码去解析，中文操作系统默认是GBK编码。

解决方式1:response.setHeader('Content-Type', 'text/plain;charset=utf-8');

解决方式2:response.writeHead(200,{'Content-Type':'text/plain'});

200：状态码，表确定，其他常见状态码：

- 400 错误请求
- 401 访问被拒绝
- 404 未找到
- 500 内部服务器错误
- 504 网关超时

Content-Type 内容类型，text/plai表示普通文本[OS开源在线工具查找](https://tool.oschina.net/commons)

- text/html html文本
- text/js js文本













**问1**:如何说明模块中直接定义的变量属于局部变量？





















