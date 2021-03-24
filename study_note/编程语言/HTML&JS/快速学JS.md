[参考视频](https://www.bilibili.com/video/BV1YW411T7GX)

注：本博客代码内容是在2020版webstorm编写测试

# 历史

**起源**：JavaScript诞生于1995年，它的出现主要是用于处理网页中的前端验证。在带宽比较低时，如果表单验证交给后端服务器来校验会影响效率，所以出现了JavaScript来前端验证。

**简史**：网景公司开发了liveScript，Sun公司介入，改名为JavaScript。->1996年，微软发布JScript。后来，网景公司将JavaScript开源。->几大公司联合发布ECMAScript作为JS的标准。

**关系**：ECMAScript（ES）是标准，JavaScript（JS）是根据标准的具体实现。JS实现由ES、DOM(文档对象模型)、BOM(浏览器对象模型)三部分组成。

**特点**：1.解释型语言；2.类似C和Java的语法结构；3.动态语言；4.基于原型的语言。

# HelloWorld

**JS代码需要编写到script标签中**可以在写JS代码前写注释<!--JS代码注释-->

```javascript
<!--JS代码需要编写到script标签中-->
<script type="text/javascript">
    /** 控制浏览器弹出一个警告框 **/
    alert("Hello World!");
    /* 在页面中输出一个内容 */
    /* document.write()向文档中写内容。网页查看源代码时，body标签中没有内容，但是查看内存（F12查看元素）body中有内容 */
    /* console.log()向控制台输出内容。可以通过F12查看console看到*/
    document.write("Hello World");
    console.log("Hello World!");
</script>
```

## JS代码编写的位置

+ 可以在HTML的head标签或者body标签的script标签中直接编写代码。

+ 可以写在onclick 或者超链接的href属性中(onclick和href写法有差别，href需要写上javascript:) _结构与行为耦合，不推荐_

```javascript
<button onclick = "alert('Hello world');">按钮</button>
<a href = "javascript:alert('hello world');">Hyperlink</a>
<a href = "javascript:;">Hyperlink</a>   /*常用于点击超链接没反应*/
```

+ 可以将JS写在外边JS文件中，通过script标签的src属性引入HTML文件。

  **解耦，一处编写多处使用。可以利用浏览器的缓存机制**

  **一个script标签中一旦用了引用外部JS，在此标签中不能再写内部JS。如果要有，则可以用多个script标签**

  ```javascript
  <!--外部JS文件-->
    document.write("外部JS文件Hello World");
  
  <!--HTML文件-->
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>HelloWorld</title>
  </head>
  <body>
  <script  type="text/javascript" src="HelloWorld.js">
  </script>
  </body>
  </html>
  ```

# JS语法

## 注释

```javascript
/*
多行注释
*/

// 单行注释
```

## 符号

### 字面量和变量

**字面量**：不可改变的量或值，可直接使用。

**变量**：用于保存字面量。

#### 变量声明

使用关键字var来声明一个变量

```javascript
var a; //声明。如果没声明报错XXX is not defined
a = 100; //赋值。如果没赋值报错undifined
console.log(a);

var a = 100;//也可以声明和赋值同时进行。
var a = 1,b = 2;//多变量同时声明和赋值
```

### 标识符

+ 规则与其他编程语言差不多，但是可以有$符。

  _JS底层采用Unicode编码保存标识符，理论上可以是中文_

## 数据类型

JS有5种基本数据类型：字符串型(String)、数值型(Number)、布尔型(Boolean)、Null型(Null)和Undefined型(Undefined)，1种引用数据类型：对象(Object)。

使用typeof运算符检查数据类型。

### 字符串

+ 单引号或双引号包裹

+ 使用\来转义字符：\n  换行；\t 制表符；\u Unicode编码

+ EcmaScript 6中支持 反引号``包裹字符串，成为模版字符串，换行和字符串拼接很方便。

+ > \`\`号中，与变量的拼接不需要用`+变量+`来进行，只需要`${变量名}`

```javascript
console.log("\u1C00");//输出Unicode编码1C00的内容

var str= `
hello
world
`;
```

### 数值型

+ 包括整数和浮点数
+ 特殊的数字：Infinity 正无穷；NaN 非法数值(Not A Number)
+ 进制表示前缀：0b 二进制；0 八进制【2020版webstorm是0o】;0x 十六进制

### 布尔型

+ true 或 false

### Null型

+ 专门用来表示为空的对象，只有一个Null值
+ typeof进行类型检查时，返回object

### Undefined型

+ 变量仅声明未赋值则为undefined
+ typeof类型检查时，返回undefined

### Object型

除了基本数据类型以外，所有都是对象。属于复合的数据类型，类似与C语言中的结构体。

## 基本数据类型和引用数据类型内存结构

- JS中的变量都是保存到栈内存中的；
- 基本数据类型的值直接在栈内存中存储，值与值之间是独立存在，修改一个变量不会影响其他的变量；
- 对象是保存到堆内存中的，每创建一个新的对象，就会在堆内存中开辟出一个新的空间，而变量保存的是对象的内存地址（对象的引用），如果两个变量保存的是同一个对象引用，当一个通过一个变量修改属性时，另一个也会受到影响。

## 类型转换

### 转为String

+ 隐式转换：任意类型+''
+ 对象调用toString()方法。**不改变原变量数据类型；不适用于null和undefined**
+ 调用String()函数。**对于Number Boolean String相当于调用toString()方法，null和undefined直接转化为字符串;不改变原变量的数据类型**

```javascript
var a = null;
a = a+''; //方式一

var b = true;
b.toString();//方式二，有缺陷

var c = undefined;
String(c);//方式三
```

### 转为Number（数值）

**转换规则：null是0，undefined是NaN，true是1，false是0，String类型根据内容直接转化成数字或者NaN，空或纯空格字符串为0**

+ 隐式转换：+ **可用于任意基本数据类型**

+ 调用Number()函数。

+ 调用parseInt()或parseFloat()函数（一开始就是数值）

  **提取字符串中有效数值内容**

  **parseInt()提取整数内容，parseFloat()提取含小数内容**

  **非字符串类型用parseInt()或parseFloat()会先自动转化为String类型参数传入函数**

  **第二个参数是进制**

```javascript
var a = null;
a = +a; //方式一
Number(a);//方式二

var b = "90.80px";
parseInt(b);//方式三，90
parseFloat(b);//90.8

var c = "11";
parseInt(c,2);//以二进制输入，得到十进制输出，3
```

### 转为Boolean

**转换规则：空串、0、NaN、null、undefined，一次非运算后为true；其余为false**

+ 隐式转换：!
+ 调用Boolean()函数**转换规则同非运算**

```javascript
var a = '';
b = !a;//方式1，true
Boolean(a);//方式2，true
```

## 运算符

### 算数运算符

\+ \- \* / %

+ 除加法以外，对非Number类型的值进行运算时，都会先转换为Number然后在做运算。
+ 加法运算时，遇到字符串时会发生拼串，跟java类似。

### 一元运算符

一元运算符只需要一个操作数

+：即正号，不会对值产生任何影响，但是可以将一个非数字转换为数字

-：即负号，可以对一个数字进行符号位取反

++:自增，a++或++a

--:自减，a--或--a

### 逻辑运算符

!：非运算

&&：与运算，短路与

||：或运算，短路或

### 赋值运算符

=；+=；-=；*=；/=；%=

### 关系运算符

\>;\>=;\<;<=

+ 比较大小关系后返回布尔值；
+ 存在非数值（且不全是String类型）会先转换成Number型后比较
+ 如果两个都是String类型的会逐个比较字符的Unicode编码
+ 任何值和NaN比较，结果都为false
+ 比较字符串型的数字时，注意转型成数值，不然会按Unicode编码逐位比较

### 相等运算符

==：自动进行类型转换，将其转换为相同的类型后比较。

!=：自动进行类型转换，将其转换为相同的类型后比较。

===:全等。不自动类型转换，类型不同直接false

!==：不全等。不自动类型转换，类型不同直接true

**PS:1.null != 0；2.undefined == null;3.NaN !=NaN**

**基本数据类型比较值大小，引用数据类型比较对象的地址。**

__判断变量是否为NaN，可以用isNaN()函数判断__

### 条件运算符(三元运算符)

条件表达式?语句1:语句2;

如果该值为true，则执行语句1，并返回执行结果；否则执行语句2，并返回执行结果。

### 运算符优先级

可查看运算符优先级的表。

**注：&&优先级高于||**

### typeof运算符

用来检查一个变量的数据类型，返回一个用于描述类型的字符串作为结果。

```javascript
function Person(name){
    this.name = name;
}

var obj = new Object();
obj.name = 'Tom';
var person1 = new Person('Jerry');

console.log(typeof obj);//object
console.log(typeof person1);//object
console.log(obj);//{name:'Tom'}
console.log(person1);//Person {name:'Jerry'}
```

### in 运算符

用来检查某属性是否在该对象中。对象中没有但[原型](##原型)中有也会返回true。与[hasOwnProperty()](##hasOwnProperty())方法区别。

```javascript
var obj = new Object();
obj.name = 'Tom';

console.log('name' in obj);//true
console.log('age' in obj);//false
```

### instanceof运算符

用来检查一个对象是否是一个类的实例，返回true或false。

## 代码块

在JS中可以使用{}来为语句进行分组，只具有分组的的作用，没有其他的用途，外部完全可见。

```javascript
{
				var a = 10;	
				alert("hello");
				console.log("world");
				document.write("！");
}
```

## 流程控制

### 条件判断

```javascript
var flag = true;
if(flag){
  document.write("flag is true.");
}

var flag = true;
if(!flag){
  console.log("flag is true.");
}else{
  alert("flag is flase.");
}

var num = 10;
if(num > 20 ){
  alert("num is bigger than 20.");
}else if(num > 10){
  console.log("num is between 10 and 20.");
}else{
  document.write("num is smaller than 10.");
}
```

### 条件分支

```javascript
var num = '1';
switch(num){
    case 1:
        alert("开");
        break;
    case 2:
        alert("关");
        break;
    default:
        alert("wrong number.");
        break;
}//wrong number.
```

**注：每条case里都有一个break，不然会已进入就按序执行直到遇见break或结束；字符串"1"不能匹配数字1**，所以上述结果是"wrong number."

### 循环

```javascript
//while
var num = 5;
while(num){
    console.log(num+'\n');
    num--;
}

//do...while
var flag = flase;
do{
  console.log("do...while...");
}while(flag)

//for
for(var i = 0; i < 5; i++){
  console.log("i:"+i);
}
```

**break关键字用于退出最近的switch或循环语句**

**continue关键字用于跳过最近的当次循环**

**可以为循环语句创建一个label，来标识当前的循环。使用break和label结束指定循环。**

```javascript
outer:for(var i = 0;i < 5;i++ ){
    console.log("@外层循环"+i);
    inner:for(var j = 0;j < 5;j++ ){
        if(i > 3){
            break outer;
        }
        console.log("@内层循环"+j);
    }
}//i==3时，外循环停止，即整个循环结束。
```

## 注意事项

+ JS代码严格区分大小写
+ 以分号结尾（不写时浏览器会自动添加，但会消耗系统资源，有时浏览器会加错）
+ 忽略多个空格和换行

# 面向对象

对象的分类：

- 1.内建对象，由ES标准中定义的对象，在任何的ES的实现中都可以使用。如：Math String Number Boolean Function Object....
- 2.宿主对象，由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象，如：BOM DOM
- 3.自定义对象，由开发人员自己创建的对象。

## 对象创建

- 使用new关键字调用构造函数(constructor)，如：Object(), Function()等;
- 使用对象字面量来创建，即{};【注意分号，代码块不需要，这里需要】

```javascript
//方式1
var obj = new Object();

//方式2
var obj = {};
```

## 对象的属性

添加属性

- 对象.属性名 = 属性值  __注意这里属性名不能加引号__

- 对象["属性名" ] = 属性值   __注意这里属性名必须要加引号__

  **[]方式优点：属性名可以传递变量；当属性名比较复杂时必须通过这种方式**

- 对象创建时通过键值对添加属性，多个键值对之间 逗号 隔开，**最后一个不要**逗号

  **属性名可加引号也可不加，建议不加。如果特殊字符，必须加。**

```javascript
var obj = Object();
obj.name = "Tom";//方式1
obj["animal"] = "Cat";//方式2

var obj2 = {
  name:"Jerry",
  age:8,
  animal:"Rat"
};//方式3
```

**PS：如果一个函数作为一个对象的属性保存，称此函数是此对象的方法。**

```javascript
var obj = new Object();
obj.name = 'Tom';
obj.age = 9;
obj.Info = function(){
  return obj.name+"is"+age;
};

obj.Info();//调用obj的Info方法
```

读取属性

```javascript
var obj = Object();
obj.name = "Tom";
obj["animal"] = "Cat";

console.log(obj);//{name: "Tom", animal: "Cat"}
console.log(obj['name']);//Tom
console.log(obj.animal);//Cat
console.log(obj.gender);//没有的属性，结果显示undefined
```

修改属性

```javascript
var obj = Object();
obj.name = "Tom";
obj["animal"] = "Cat";

obj['name'] = "Jerry";
obj.animal = "Rat";
```

删除属性

```javascript
var obj = Object();
obj.name = "Tom";

delete obj.name;//删除属性
```

## 遍历对象属性

类似python的字典遍历。

```javascript
var obj = Object();
obj.name = "Tom";
obj["animal"] = "Cat";

for (var key in obj ){
  console.log(key + ":" + obj[key]);
}
```

# 函数

函数也是一个对象。

## 函数创建

- 使用 构造函数 创建函数对象（很少用）：需要封装的代码以字符串参数传递；
- 使用 函数声明 创建函数
- 使用 函数表达式 创建函数

```javascript
//方式1
var fun1 = new Function("console.log('hello world 1.');");

//方式2
function fun2(num1,num2){
  var sum = num1 + num2;
  console.log(sum);
  return sum;
}

//方式3
var fun3 = function(){
  console.log("hello world 3.");
};
```

## 函数调用

调用函数时解析器不会检查实参的类型。有可能会接收到非法的参数，如果可以的话，最好对参数进行类型的检查。

调用函数解析器不会检查实参的数量。多余实参不会被赋值，如果实参的数量少于形参的数量，则没有对应实参的形参将是undefined。

实参可以是一个对象，如果参数过多，可以将参数封装到一个对象arguments中传递。

```javascript
fun2(2,5);//函数名(实参)；
```

## 函数返回值

return 返回值；

- return语句后不跟任何值或不写return都返回一个undefined
- return后可以跟任意类型的值

## 匿名函数立即执行

```javascript
(function(a,b){
	console.log("a+b = "+(a+b);
})(3,4);
```

PS：把函数()包围，是为表示是一个整体，直接将整体当作函数句柄后调用。

## this关键字

解析器在调用函数每次都会向函数内部传递进一个隐含的参数——this，this指向调用此函数或方法的对象，全局作用域调用函数时，this指向window对象。

### 改变this指向

call()和apply()：通过函数对象来调用，传入参数作为this对象。

都是函数调用，但是函数对象如果用call()和apply()，可以强制改this指向。

call()和apply()：第一个参数是传入的this对象，后面是实参。apply()实参需要以数组形式传入。

```javascript
function f(a,b){
    console.log(this);
    console.log('a='+a);
    console.log('b='+b);
}

var obj = {
    name:'obj'
};

f(1,2);//Window {...} a=1 b=2
f.call(obj,3,4);//{name: "obj"} a=3 b=4
f.apply(obj,[5,6]);//{name: "obj"} a=5 b=6
```

# 作用域

JS中有两种作用域：全局作用域和局部作用域。

## 作用域分类

全局作用域：

- 直接编写在script标签中的JS代码，都在全局作用域

- 全局作用域在页面打开时创建，在页面关闭时销毁

- 在全局作用域中有一个**全局对象window**，代表一个浏览器的窗口，由浏览器创建可直接使用

  全局作用域的变量作为window对象的属性保存；函数作为window对象的方法保存

  全局作用域中的变量是全局变量，在页面的任意的部分都可以访问的到

```javascript
var a = 10;
window.a = 20;//window对象调用a属性
console.log(a);//20

function fun(){
  console.log("fun函数。");
}
window.fun();//window对象调用fun()方法
```

**PS：window对象调用属性与直接使用变量的区别是，如果该变量没有声明，window调用不报错，结果为undefined；直接使用则报错"变量未定义"。**

函数作用域：

- 调用函数时创建函数作用域，函数执行完毕以后，函数作用域销毁
- 每调用一次函数就会创建一个新的函数作用域，互相独立
- 在函数作用域中可以访问到全局作用域的变量，在全局作用域中无法访问到函数作用域的变量
- 当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用，如果没有则向上一级作用域中寻找，直到找到全局作用域。
- 在函数中要访问全局变量可以使用window对象
- 函数中变量没有使用var关键字声明，则会成为全局变量，**但声明没有提前**，如果在变量定义前使用则报错。
- 函数的形参也是在函数作用域

```javascript
function fun(){
  a = 10;
  var b = 20;
  
  console.log("a="+a);
  console.log("b="+b);
}

fun();//a=10 b=20
console.log("a="+a); //a=10
console.log("b="+b);//报错
```

## 声明提前

在全局作用域或函数作用域中都有声明提前的特性。

### 变量声明提前

使用var关键字声明的变量，会在所在作用域的代码执行前声明（但不会赋值），不使用var关键字声明，则不会被声明提前。

```javascript
//使用var,代码语句先使用后声明，不报错，但结果为undefined
console.log(a);
var a = 12;

//不使用var，代码语句先使用后声明，报错
console.log(a);//ReferenceError: Can't find variable: a
a = 12;
```

### 函数声明提前

使用 函数声明 形式创建的函数 function 函数(){}，会在所在作用域的代码执行前创建，可在函数声明前来调用。

其他方式（使用 Function()构造函数 或 使用 函数表达式  ）【有var】创建则不能提前。【因为此时虽然函数对象的变量通过var声明提前了，但值为undefined，所以不能调用】

```javascript
// 使用函数声明，没有var，可直接执行
fun1();
function fun1(){
  console.log("我是fun1函数");
}

//使用函数表达式创建，有var，报错
fun2();
var fun2 = function(){
  console.log("我是fun2函数");
}
//使用Function()创建，有var，报错
fun3();
var fun3 = new Function("console.log('我是fun3函数');");
```

# 创建对象

## 工厂方法创建对象

此方法创建的对象使用的构造函数是Object，所以对象的类型都是object类型。

```javascript
function createPerson(name ,age){
  //1.创建一个新的对象 
	var obj = new Object();
	//2.向对象中添加属性
	obj.name = name;
	obj.age = age;
  //2.1 可以添加方法
  obj.sayName = function(){
    console.log(this.name);
  }
  //3.将新对象返回
  return obj;
}

var person1 = createPerson('Tom',8);
```

## 构造函数创建对象1

避免了工厂方法创建对象都是object类型。

构造函数与普通函数

- 创建方式相同，构造函数名称习惯首字母大写
- 调用方式不同，普通函数直接调用，构造函数用new关键字调用
- 返回值不同，普通函数需要return关键字返回内容，构造函数自动返回新建对象

构造函数的执行流程：
 * 	1.立刻创建一个新的对象
 * 	2.将新建的对象设置为函数中this,在构造函数中可以使用this来引用新建的对象
 * 	3.逐行执行函数中的代码
 * 	4.将新建的对象作为返回值返回

使用同一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类。通过一个构造函数创建的对象，称为是该类的实例。

**可以类比Java的类、构造器、实例。JS的构造函数有点向Java类和构造器的混合模式。**

```javascript
function Person(name,age){
  this.name = name;
  this.age = age;
  this.sayName = function(){
    console.log(this.name);
  };
}

var person1 = new Person('Jerry',8);
```

## 构造函数创建对象2

上一个方式中每个对象的每一属性都是独立的，其中的方法也是，这样就造成了资源浪费。

```javascript
function Person1(name, age){
  this.name = name;
  this.age = age;
  this.sayName = function(){
    console.log('Person1'+this.name);
  };
}

var person1 = new Person1('p11',5);
var person2 = new Person1('p12',6);
console.log(person1.sayName == person2.sayName); //false,说明两个对象的方法地址不同
```

### 改进1

将对象的方法放到在构造函数外定义。

```javascript
function Person2(name, age){
  this.name = name;
  this.age = age;
  this.sayName = fun;
}
function fun(){
  console.log('Person2' + this.name);
}

var per1 = new Person2('p21',5);
var per2 = new Person2('p22',6);
console.log(per1.sayName == per2.sayName);//true，说明两个对象的方法地址相同
```

### 改进2

改进1虽然可以节约资源了，但是因为构造函数的方法在外部作为全局函数定义，污染了全局作用域的命名空间（指对象的方法像全局函数，全局函数不能与该方法同名），也不安全。

改进2，向[原型](##原型)中添加该方法。有点像Java的static关键字，使属性和方法成为类属性和类方法。

```javascript
function Person3(name){
  this.name = name;
}
Person3.prototype.sayName = function(){
  console.log('Person3'+this.name);
};

var p1 = new Person3('p31');
var p2 = new Person3('p32');
console.log(p1.sayName == p2.sayName);//true，说明两个对象的方法地址相同 
```

# 内置对象

## 数组(Array)

数组的存储性能比普通对象要好，可以直接通过索引来获取元素。

### 创建

- 使用 构造函数Array() 创建
- 使用[]字面量创建

```javascript
var arr1 = new Array();//方式1
var arr3 = new Array(1,'a',3,null,5);//创建时初始化元素

var arr2 = [];//方式2
var arr4 = [1,true,3,undefined];//创建时初始化元素
```

### 销毁

```javascript
arr = null;
```

### 查询

```javascript
console.log(arr[3]);
```

### 增加/修改

同一数组可以不同类型，可以跳着赋值，未赋值的中间索引的元素值为undefined。

```javascript
arr[0] = 10;
arr[2] = 'h';

arr(arr.length) = true;//向数组末尾添加元素
```

也可通过方法：[push()](####push())、[unshift()](####unshift())、[splice()](####splice())

### 删除元素

```javascript
delete a[0];
```

也可通过方法：[pop()](####pop())、[shift()](####shift())、[splice()](####splice())

### 内建属性

#### length

获取数组长度【无论连续还是非连续数组，length都是 最大索引值+1】

``console.log(arr.length);``

修改length

如果修改的length大于原长度，则多出部分会空出来；如果修改的length小于原长度，则多出的元素会被删除。

``arr.length = 10;``

### 内建方法

#### push()

向数组的末尾添加一个或多个元素，并返回数组的新的长度。

```javascript
var arr = ['a',2,3,true];

var newLength = arr.push('b',undefined);
console.log(arr[4]);//b
console.log(newLength);//6
```

#### pop()

删除数组的最后一个元素,并将被删除的元素作为返回值返回。

```javascript
var arr = ['a',2,3,true];
console.log(arr.pop());//true是删掉的元素
```

#### unshift()

向数组开头添加一个或多个元素，并返回新的数组长度。后面元素索引自动调整。

```javascript
var arr = ['a',2,3,true];
var newLength = arr.unshift('b',undefined);

console.log(newLength);//6
console.log(arr);//["b", undefined, "a", 2, 3, true] (6)
```

#### shift()

把数组开头元素删除，并返回删除元素。

```javascript
var arr = ['a',2,3,true];

console.log(arr.shift());//a
console.log(arr);//[2, 3, true] (3)
```

#### forEach()

遍历数组元素，需要一个函数作为参数。**函数声明如下：**

```javascript
forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
```

**callbackfn回调函数**：由我们创建，系统自动调用。

使用见[遍历方式3](###数组遍历)

#### slice()

用来从数组提取指定元素，不改变元素数组，而是将截取到的元素封装到一个新数组中返回。

```javascript
//函数声明
slice(start?: number, end?: number): T[];
//开始索引(含)～结尾索引(不含，可忽略)，返回数组T[]
//索引可以传递负数，负数表示从后往前数，从-1开始

//使用
var arr = ['a',2,3,true];
delete arr[2];

var result = arr.slice(1,3);
console.log(result);//[2] (2),因为索引2的元素已经被删除，所以不显示，但得到的数组长度还是为2
```

#### splice()

用于删除数组中的指定元素，会影响到原数组。将指定元素从原数组中删除后，被删除的元素作为返回值返回。

```javascript
//函数声明
splice(start: number, deleteCount: number, ...items: T[]): T[];
//start 开始删除的索引，deleteCount 删除的数量，...items 从删除位置的新增元素
//当deleteCount为0时，可用于新增元素

//使用
var arr = [0,1,2,3,4,5,6];
// delete arr[2];

var result = arr.splice(1,1,'7','8');
console.log(arr);//[0, "7", "8", 2, 3, 4, 5, 6] (8)
console.log(result);//[1] (1)
```

#### concat()

连接两个或多个数组，返回值为新的数组，原数组不变。

```javascript
var arr = [1,2,3];
var arr2 = ['4','5','6'];
var arr3 = [true,false];
var new_arr = arr.concat(arr2,arr3);
console.log(new_arr);//[1, 2, 3, "4", "5", "6", true, false] (8)
```

#### join()

将数组转换为一个字符串，不会对原数组产生影响，而是将转换后的字符串作为结果返回。

**可以指定一个字符串参数作为连接符。**

```javascript
var arr = [0,1,2,3];
var str = arr.join("#");
console.log(str);//0#1#2#3
```

#### reverse()

反转数组（元素按索引位置首尾对应一一，交换），**直接修改原数组**。

#### sort()

对数组中的元素进行排序。会**影响原数组**，默认会按照Unicode编码进行默认升序排序。

**PS：对于纯数字数组也会按Unicode编码来排序，所以有可能得到错误结果(编码 11 < 2)。**可以通过添加回调函数指定排序规则来解决。

```javascript
var arr = [5,4,2,1,3,6,3];
arr.sort(function(a,b){
    return a-b;//升序，b-a降序。
});
```

PPS：arr中数据两两传入回调函数，不同浏览器规则不同，传入顺序也可能不同。与视频讲解有出入。

### 数组遍历

```javascript
var arr = ['a',2,3,true];

//方式1
for(var i in arr){
  console.log(i+':'+arr[i]);
}//遍历所有元素，空索引跳过

//方式2
for(var i = 0 ; i < arr.length ;i++){
  console.log(arr[i]);
}//遍历所有索引的值，空索引不跳过

//方式3
arr.forEach(function(value , index , obj){
        console.log(value);
    });//遍历所有元素，空索引跳过 
```

## Date对象

在JS中使用Date对象来表示一个时间。

### Date对象创建

```javascript
var d = new Date();
console.log(d);//Tue Mar 02 2021 21:41:45 GMT+0800 (CST) 直接返回时间

//指定时间，传递字符串，格式月份/日/年 时:分:秒
var d2 = new Date("2/18/2021 11:10:30");
console.log(d2);//Thu Feb 18 2021 11:10:30 GMT+0800 (CST)
```

### Date对象方法

#### 获取指定时间信息

getDate()：获取当前日期对象是几日。d.getDate()

getDay()：获取当前日期对象时周几。0-6，从周日开始

getMonth()：获取当前时间对象的月份。0-11，从一月开始

getFullYear()：获取当前日期对象的年份。

getTime()：获取当前日期对象的时间戳。从格林威治标准时间的1970年1月1日，0时0分0秒到当前日期所花费的毫秒数（1秒 = 1000毫秒）。

```javascript
    var d = new Date("1/1/1970 0:0:0");
    time = d.getTime();
    console.log(time);//-28800000,目前系统在东八区，以东八区为0，则结果为-8h
```

## Eval()

eval()函数会将传入的字符串当做 JavaScript 代码进行执行。

```js
var num = eval("2+2");
console.log(num);//4
console.log(typeof(num));//number

var obj = eval(new String("2+2"));
console.log(obj);//[String: '2+2']
```

eval()可将特定字符串内容转换成JSON格式

```js
var str = `
    {
        "name": "LiLi",
        "age": 22,
        "sex": "F"
    },
    {
        "name": "LaLa",
        "age": 18,
        "sex": "F"
    }
`;
var json = eval('[' + str + ']');
//为了避免将其当成{}代码块运行，需要在{}外包裹符号，例如()。
//但又因为里面有两个{}，为了避免','运算符的运算，在{}包裹[]，使之成为两个json对象的数组
```

`eval()` 是一个危险的函数， 它使用与调用者相同的权限执行代码。如果`eval()` 运行的字符串代码被恶意方（不怀好意的人）修改，最终可能会在网页/扩展程序的权限下，在用户计算机上运行恶意代码。而且，运行性能较低(慢)。可以用[Function](#Function)替代。

使用Function构造一个函数，将字符串作为程序代码参数传入。

```js
var json2 = (new Function('jsObj=['+str+'];return jsObj'))();
console.log(json2);
```

- new Function('jsObj=['+str+'];return jsObj')，构造了一个函数，函数体内容为

      jsObj=[{
          "name": "LiLi",
          "age": 22,
          "sex": "F"
      },
      {
          "name": "LaLa",
          "age": 18,
          "sex": "F"
      }];
      return jsObj

- <font color='red'>(</font>new Function('jsObj=['+str+'];return jsObj')<font color='red'>)</font>将整个函数包裹，得到函数句柄**【原本 var fun1 = new Function(); 函数是有名的，如果函数只调用一次，为省命名空间或存储资源，用()包裹部分可理解为匿名函数的名】**
- (new Function('jsObj=['+str+'];return jsObj'))<font color='red'>()</font>调用函数

## Function

每个 JavaScript 函数实际上都是一个 `Function` 对象。运行 `(function(){}).constructor === Function // true` 便可以得到这个结论。

```js
new Function ([arg1[, arg2,...argN],]functionBody)
//[arg1[, arg2,...argN] 参数，逗号分隔
//functionBody：一个含有包括函数定义的 JavaScript 语句的字符串
```





# JS知识点

## 原型

每一个函数，解析器都会向函数中添加一个属性prototype，该属性指向一个对象，即原型对象。

如果函数作为普通函数调用prototype没有任何作用，当函数以构造函数的形式调用时，它所创建的对象中都会有一个隐含的属性，指向该构造函数的原型对象，可以通过\__proto__来访问该属性【前后各两个下划线】。

原型对象就相当于一个公共的区域，所有同一个类的实例都可以访问到这个原型对象，我们可以将对象中共有的内容，统一设置到原型对象中。

**访问顺序**：访问对象的一个属性或方法时，它会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到则直接使用。

**用途**：创建构造函数时，可以将这些对象共有的属性和方法，统一添加到构造函数的原型对象中。优点：1.不用每个对象的共有属性或方法独立，既浪费空间，也不方便统一修改；2.放到原型属性中，不会影响到全局作用域。

```javascript
function P(){
  console.log("Hello");
}
P.prototype.name = 'Tom';//向原型中添加属性
P.prototype.sayHei = function(){
  console.log("Hei")
};//向原型中添加方法

var p = new P();//Hello
console.log(p.__proto__);//P {name: "Tom", sayHei: function}
```

**PS:有点类似Java的static。共有的属性和方法——Java 中的类属性和类方法。不同的是，Java父类中的类方法和子类的同名方法不构成重写，但是JS的原型中的方法与子类的同名方法算重写。**

## 原型链

原型对象也是对象，它也有原型。

当我们使用一个对象的属性或方法时，访问顺序：

- 1.自身中寻找；
- 2.自身中没有，则去原型对象中寻找；
- 3.原型对象中没有，则去原型对象的原型中寻找
- 。。。
- 直到找到Object对象的原型对象，停止。
- 从而形成了一条原型链。

**Object对象的原型没有原型【一层原型，object原型对象的\_\_proto\_\_返回Null】，如果在Object原型中依然没有找到，则返回undefined**

```javascript
function Person(){
  
}
Person.prototype.name = 'Tom';

var p1 = new Person();
console.log(p1.__proto__.__proto__.__proto__);//null，第一层proto是p1对象所属类Person类的属性，第二层proto是Person类所属父类Object类的属性，因为Object是所有类的父类，所以第三层proto没有指向，值为null。
```

## 垃圾回收

垃圾：当一个对象没有任何的变量或属性对它进行引用，此时我们将永远无法操作该对象，这种对象就是垃圾。垃圾过多会占用内存空间，导致程序运行变慢。

JS中拥有自动的垃圾回收机制，会自动将这些垃圾对象从内存中销毁，我们不需要也不能进行垃圾回收的操作。我们能做的是**将不用的对象设置为null**

 

# 浏览器隐含参数

## arguments对象

是类数组对象（不是数组对象）,它也可以通过索引来操作数据，也可以获取长度。

- 作用：保存实参，实参超过形参的部分也可通过arguments[索引]获取
- 属性：callee，指向当前的函数对象

```javascript
function fun(a,b){
  console.log(arguments[0]);//hello
  console.log(arguments[1]);//world
  console.log(arguments.callee == fun);//true
}
fun('hello','world');
```

在调用函数时，浏览器每次都会传递进两个隐含的参数：[this](###this关键字)和arguments

# 包装类

在JS中提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象。String() Number() Boolean()

一般在实际应用中不会使用基本数据类型的对象，如果使用基本数据类型的对象，在做一些比较时可能会带来一些不可预期的结果，如：false转换成Boolean对象，用if判断为true。

**方法和属性之能添加给对象，不能添加给基本数据类型。当一些基本数据类型的值去调用属性和方法时，浏览器会临时使用包装类将其转换为对象，然后再调用对象的属性和方法，调用完成后，会立马转回基本数据类型。**

# 字符串属性/方法

字符串在底层是以字符数组的形式保存的，但不能等同于数组，有些数组方法<font color='red'>不能</font>直接用，需要**split("")拆分成字符数组，然后用完数组方法，在用join("")又转换成字符串**。例如要使用reverse()方法：

```javascript
var str = prompt('Plz input any words:');//输入hello world!
str = str.split('').reverse().join('');//!dlrow olleh
```

## 属性

### length属性

获取字符串的长度

## 对象方法

``str = 'abcd';``

### charAt()

返回字符串中指定索引位置的字符。从0开始。

``str.charAt(0);//a，str = 'abcd'``

### charCodeAt()

获取指定位置字符的字符编码（Unicode编码）。a:97，A:65，0:48。

``str.charCodeAt(0);//97，str = 'abcd'``

### concat()

用来连接两个或多个字符串，作用与+一致。

``str.concat("Hello","World");//abcdHelloWorld,str='abcd'时``

### indexof()

检索一个字符串中是否含有指定内容，含有，则返回其第一次出现的索引；否，则返回-1。

第二个参数是指定开始查找的位置（含）。

```javascript
//函数声明
indexOf(searchString: string, position?: number): number;
//实例
var str = 'abcdbbb';
console.log(str.indexOf('b',2));//4
console.log(str.lastIndexOf('b',5));//5
```

### lastIndexOf()

类似indexof()，从后往前找。

```javascript
var str = 'abcdbbb';
console.log(str.lastIndexOf('b',5));//5
```

### slice()

从字符串中截取指定索引的内容。可以是负数，可以省略第二个参数。

``str.slice(1,3);//bc``

### substring()

作用类似slice()，参数不能为负（负数默认为0），自动调整参数使第一个参数小于第二个参数。

```javascript
str.substring(2,-1);//ab
str.slice(2,-1);//c
```

### substr()

按长度截取字符串。参数1:其实索引，参数2:截取长度

``str.substr(1,2);//bc``

### split()

可以将一个字符串拆分为一个数组。如果传入空串，则每个字符都拆开。也可传入正则表达式【不加引号】。

```javascript
str.split('b');//['a','cd]
var result = str.split(/[A-z]/);//传入该正则表达式，安照任意字母拆分字符串
```

### search()

搜索字符串中是否含有指定内容，搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1。也可传入正则表达式【不加引号】。

**serach()只会查找第一个，即使正则表达式设置全局匹配也没用**

```javascript
str = "hello abc hello aec afc";
result = str.search(/a[bef]c/);//6,搜索字符串中是否含有abc 或 aec 或 afc
```

### match()

从一个字符串中将符合条件的内容提取出来，参数可以是正则表达式【不加引号】。返回匹配到的内容数组。

**正则表达式设置<font color='red'>全局匹配</font>会匹配到所有的内容，默认匹配到第一个就停止。**

```javascript
str = "1adf2ab36f7A8B9C";
result = str.match(/[a-z]/ig);//["a", "d", "f", "a", "b", "f", "A", "B", "C"] (9)
```

### replace()

将字符串中指定内容替换为新的内容,参数可以是正则表达式。返回替换后的字符串。

**正则表达式设置全局匹配会替换所有符合的内容，默认只替换第一个就停止。**

```javascript
str = "1adf2ab36f7A8B9C";
result = str.replace(/[a-z]/gi , "@");//1@@@2@@36@7@8@9@
result2 = str.replace(/[a-z]/gi , "");//1236789，用于删除某些元素
```

### toUpperCase() toLowerCase()

toUpperCase():将一个字符串转换为大写并返回

toLowerCase():将一个字符串转换为小写并返回

```javascript
str = str.toUpperCase();//ABCD
str = str.toLowerCase();//abcd
```

## 类方法

### formCharCode()

根据字符编码去获取字符，用String类去调用。``String.fromCharCode(0x61);//a，0x61=97（十进制）``

# DOM(Document Object Model)

DOM 文档对象模型。

- 文档：表示整个HTML网页文档；
- 对象：表示将网页中的每一个部分都转换为了一个对象；
- 模型：使用模型来表示对象之间的关系，方便获取对象。把文档、各级标签、文本内容提取成节点构成模型，形似树，成为DOM树。

JS通过DOM来对HTML文档进行操作，修改WEB页面。

## 节点

节点Node是HTML文档最基本的单元。

## 常用的节点

有四类：

- 文档节点：整个HTML文档；
- 元素节点：HTML文档中的HTML标签；
- 属性节点：元素的属性；
- 文本节点：HTML标签中的文本内容。

## 节点的属性

| 节点/属性 | nodeName| nodeType | nodeValue |
| --------- | --------- | -------- | --------- |
| 文档节点  | #document | 9        | null      |
| 元素节点  | 标签名    | 1        | null |
| 属性节点  | 属性名    | 2        | 属性值 |
| 文本节点  | #text     | 3        | <font color='red'>文本内容</font> |

### 文档节点(Document)

document对象是window对象的属性，不用获取可以直接使用。

通过document对象可以在整个文档访问内查找节点对象，创建各种节点对象。

### 元素节点(Element)

HTML中的各种标签都是元素节点。

可以通过document对象的方法来获取元素节点：

- getElementById():通过元素（标签）的id属性值来获取元素节点对象；

```javascript
<body>
	<button id="btn" onclick="alert('haha!')">按钮</button>
	<script type="text/javascript">
    	var btn = document.getElementById('btn');//通过id属性获取元素节点对象，标签对象script代码前
    	console.log(btn);//<button id="btn" onclick="alert('haha!')">按钮</button>
    	btn.innerHTML = 'hehe';//修改btn对象的文字，或用innerText属性
	</script>
</body>
```

## 事件

事件就是用户和浏览器之间的交互行为，比如：点击按钮，鼠标移动、关闭窗口等等。

| 名称     | 触发条件     |
| :------- | ------------ |
| onclick  | 单击         |
| ondblclick| 双击 |
| onload   | 用户进入页面，页面全部加载完成时 |
| onunload | 用户离开页面 |
| onchange | 改变字段内容时 |
| onmouseover | 鼠标移至HTML元素上方 |
| onmouseout | 鼠标移出HTML元素上方 |
| onmousedown | 鼠标点时 |
| onmouseup | 鼠标抬起时 |
| onfocus | 获得焦点时（常用于文本输入框等） |
| onscroll | 滚动条滑动时(W3School没找到) |
| onmousemove | 鼠标移动时触发 |

我们可以在标签的属性里设置js代码，事件触发代码执行，或者从事件处理器调用一个函数(需要传入事件对象this)。但这样结构和行为耦合，不便维护。

**改进**，为对象的对应事件绑定处理函数的形式来响应事件，事件触发时，对应的函数将会被调用。

```javascript
<!--方式1&2代码写到了标签里-->
  
<!--方式1-->
<button id="btn1" onclick="this.innerText = '按钮1';">button1</button>

<!--方式2-->
<button id="btn2" onmouseover='changeText(this)'>button2</button>
<script type="text/javascript">
  var changeText = function(x){
    x.innerText = '按钮2';
  };
  </script>

<!--方式3-->
<button id="btn3">button3</button>
<script type="text/javascript">
    var btn2 = document.getElementById('btn3');
    btn2.ondblclick = function(){
        btn2.innerText = '按钮3';
    };//这里写到了对象.属性的函数里
</script>
```

### 事件对象

当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数,在事件对象中封装了当前事件相关的一切信息，比如：鼠标的坐标 等，可以在W3School中DOM event的属性中查看事件对象包含的信息。

在IE8及以下，响应函数被触发时，浏览器不会传递事件对象，而是将事件对象作为window对象的属性保存，通过window.event获取

IE8及以上，通过arguments[0]获取，或者在function中声明形参event来承接。

```javascript
//解决事件对象兼容
XXX.onclick = function(){
  event = arguments[0] || window.event;//要放在对应的触发函数里，代表触发单击函数对象事件
}
```

### 事件的冒泡（Bubble）

所谓的冒泡指的就是事件的向上传导，当后代元素上的事件被触发时，其**祖先元素满足其事件**条件时也会被触发。如果取消可以在后代元素响应函数中添加``event.cancelBubble = true; ``将冒泡取消。



## 文档加载

浏览器在加载一个页面时，是按照自上向下的顺序加载的，JS代码直接写在所需对象前，代码执行时，页面还没有加载，页面没有加载DOM对象也没有加载，会导致无法获取到DOM对象。建议写后面，如果要写前面，则需要为页面绑定onload事件，使页面加载完成后执行JS代码。

```javascript
<head>
  <script type = 'text/javascript'>
    window.onload = function(){
    var btn = document.getElementById('btn');
    btn.onclick = function(){
      alert("hello~");
    };
  };
    </script>
  </head>
<body>
   <button id = 'btn'>I'm button<btn>
 </body>
```

## DOM查询

W3School手册查找，首页HTML DOM->DOM方法

```html
<body>
		<div id="total">
			<div class="inner">
				<p>
					你喜欢哪个城市?
				</p>

				<ul id="city">
					<li id="bj">北京</li>
					<li>上海</li>
					<li>东京</li>
					<li>首尔</li>
				</ul>
        
				<p>
					你喜欢哪款单机游戏?
				</p>

				<ul id="game">
					<li id="rl">红警</li>
					<li>实况</li>
					<li>极品飞车</li>
					<li>魔兽</li>
				</ul>
        
				<p>
					你手机的操作系统是?
				</p>

				<ul id="phone"><li>IOS</li><li id="android">Android</li><li>Windows Phone</li></ul>
			</div>

			<div class="inner">
				gender:
				<input type="radio" name="gender" value="male"/>
				Male
				<input type="radio" name="gender" value="female"/>
				Female
				<br>
				name:
				<input type="text" name="name" id="username" value="abcde"/>
			</div>
		</div>
		<div id="btnList">
			<div><button id="btn01">查找#bj节点</button></div>
			<div><button id="btn02">查找所有li节点</button></div>
			<div><button id="btn03">查找name=gender的所有节点</button></div>
			<div><button id="btn04">查找#city下所有li节点</button></div>
			<div><button id="btn05">返回#city的所有子节点</button></div>
			<div><button id="btn06">返回#phone的第一个子节点</button></div>
			<div><button id="btn07">返回#bj的父节点</button></div>
			<div><button id="btn08">返回#android的前一个兄弟节点</button></div>
			<div><button id="btn09">返回#username的value属性值</button></div>
			<div><button id="btn10">设置#username的value属性值</button></div>
			<div><button id="btn11">返回#bj的文本值</button></div>
		</div>
	</body>
```

### 获取元素节点

**通过document对象调用**

getElementById():通过**id**属性获取**一个**元素节点对象

getElementsByTagName():通过**标签名**获取**一组**元素节点对象

getElementdByName():通过**name**属性获取**一组**元素节点对象

```javascript
//getElementById(),查找#bj节点
var btn01 = getElementById('btn01');
var bj = getElementById('bj');
btn01.onclick = function(){
  alert(bj.innerHTML);
};

//getElementsByTagName(),查找所有li节点
var btn02 = getElementById('btn02');

btn02.onclick = function(){
  var lis = getElementsByTagName('li');
  var result_lis = [];
  for(var i=0;i<lis.length;i++){
    result_lis[i] = lis[i].innerText;
  }
  alert(result_lis);
};

//getElementdByName(),查找name=gender的所有节点
var btn03 = document.getElementById('btn03');

btn03.onclick = function(){
  var inputs = document.getElementByName('gender');
  var result_inputs = [];
  for (var i = 0 ;i < inputs.length; i++){
    result_inputs[i] = inputs[i].value;//了解input的属性，直接用.运算符
  }
  alert(result_inputs);
};
```

### 获取元素节点各关系节点

通过具体的元素节点调用。

getElementsByTagName():**方法**，返回当前节点的指定标签名后代节点

childNodes:**属性**，表示当前节点的所有子节点

firstChild:**属性**，表示当前节点的第一个子节点

lastChild:**属性**，表示当前节点的最后一个子节点。

parentNode:**属性**，表示当前节点的父节点

previousSibling:**属性**，表示当前节点的前一个兄弟节点

nextSibling:**属性**，表示当前节点的后一个兄弟节点

```javascript
function btn_event(btn, fun) {
  this.btn = document.getElementById(btn);
  this.btn.onclick = fun;
}

//查找#city下所有li节点
var city = document.getElementById('city');
btn_event('btn04',fuction(){
          var city_lis = city.getElementsByTagName('li');
					for (var i = 0; i < city_lis.length; i++) {
            alert(city_lis[i].innerHTML);
          });
};

//返回#city的所有子节点
btn_event('btn05',function(){
  var city_nodes = city.childNodes;//所有节点，包含文本，以及节点标签元素间的空格或回车
  for (var i = 0; i < city_nodes.length; i++) {
        console.log(city_nodes[i]);
    }
    var city_children = city.children;
    for (var i = 0; i < city_children.length; i++) {
        alert(city_children[i]);
    }
});

//返回#phone的第一个子节点
btn_event('btn06',function(){
  var phone = document.getElementById('phone');
  alert(phone.firstChild);//phone.childNodes[0]，含空白文本节点
  console.log(phone.firstElementChild);//第一个元素，IE8不支持
});

//返回#bj的父节点
btn_event('btn07',function(){
  var bj = document.getElementByIs('bj');
  var bj_parent = bj.parentNode;//父节点
  alert(bj_parent);
  console.log(bj.parentElement);
  console.log(bj_parent.innerText);//不含标签，只有文本
  console.log(bj_parent.innerHTML);//含标签，节点下的所有内容
});

//返回#android的前一个兄弟节点
btn_event('btn08', function () {
    var android = document.getElementById('android');
    alert(android.previousSibling);//前一个兄弟节点，含空白文本
    console.log(android.previousElementSibling);//前一个兄弟元素，不含空白文本,IE8及以下不支持
});

//读取#username的value属性值
var username = document.getElementById('username');
btn_event('btn09', function () {
    alert(username.value);
});

//设置#username的value属性值
btn_event('btn10', function () {
    var username_set = prompt('reset username');
    username.value = username_set;
});

//返回#bj的文本值
btn_event('btn11',function(){
    var bj = document.getElementById('bj');
    alert(bj.innerText);
    var bj_firchild = bj.firstChild;//bj的子节点是文本节点
    console.log(bj_firchild.nodeValue);//文本节点的nodeValue是其属性
});
```

### 获取元素节点属性

通过.运算符直接获取元素节点属性，例如：``<input name='gender' value='male'/>``，通过``input对象.value``得到'male'。

**特殊**：class属性不能直接通过  对象.class 获取，需要通过 对象.className 获取。

### 获取元素内部内容

.innerHTML ：**属性**，元素节点通过该属性获取元素内部的HTML代码，自结束标签此属性无意义。

.innerText： **属性**，用于获取元素内部文本内容

.nodeValue：**文本节点属性**，文本节点的节点属性可以直接改文本内容

### 其他查询方式

document.body：body标签对象

document.head：head标签对象

document.documentElement：HTML标签对象

### **通过CSS选择器查询**

通过document对象调用CSS选择器来查询，传递一个选择器字符串作为参数，根据选择器内容查找元素。

querySelector()：返回值为查找到的第一个元素

querySelectorAll()：返回值为所有符合条件的元素，数组

```javascript
var div = document.querySelector('.box1 div');//查找class为box1的第一个div
var box1 = document.querySelectorAll('.box1');//查找class为box1的所有对象,返回结果列表
var box2 = document.querySelectorAll('#box2');//查找id为box2的所有对象，返回结果列表(虽然id唯一，结果只有一个)
```

## DOM增删改

```javascript
<body>
	<div id="total">
		<div class="inner">
			<p>
				你喜欢哪个城市?
			</p>

			<ul id="city">
				<li id="bj">北京</li>
				<li>上海</li>
				<li>东京</li>
				<li>首尔</li>
			</ul>			
		</div>
	</div>
	<div id="btnList">
		<div><button id="btn01">创建一个"广州"节点,添加到#city下</button></div>
		<div><button id="btn02">将"广州"节点插入到#bj前面</button></div>
		<div><button id="btn03">使用"广州"节点替换#bj节点</button></div>
		<div><button id="btn04">删除#bj节点</button></div>
		<div><button id="btn05">读取#city内的HTML代码</button></div>
		<div><button id="btn06">设置#bj内的HTML代码</button></div>
	</div>
</body>
```

### 增加元素/节点

**document.createElement()**：创建一个元素节点对象，传入参数：标签名，返回值创建好的对象。

**document.createTextNode()**:创建文本节点，传入参数：文本内容，返回值：文本节点。

**父节点.appendChild()**：向父节点中添加一个新的子节点，传入参数，子节点对象。

```javascript
find_btn('btn01',function(){
		//document.createElement(),可以用于创建一个元素节点对象，需要一个标签名作为参数，将会根据该标签名创建元素节点对象，并将创建好的对象作为返回值返回
		var li = document.createElement('li');
		//document.createTextNode(),可以用来创建一个文本节点对象,需要一个文本内容作为参数，将会根据该内容创建文本节点，并将新的节点返回
		var text_gz = document.createTextNode('广州');
		//appendChild(),向一个父节点中添加一个新的子节点,用法：父节点.appendChild(子节点);
		li.appendChild(text_gz);

		var city = document.getElementById('city');
		city.appendChild(li);
	});
```

### 插入元素/节点

**父节点.insertBefore(新节点对象，旧节点对象)**：在指定子节点前插入新节点。

**兄弟节点.insertAdjacentElement(参数1,插入节点)**：参数1可以是"beforebegin", "beforeend", "afterbegin", "afterend"，分别是“前标签开始”，“前标签最后”，“后标签的开始”，“后标签的最后”

```javascript
  var li = document.createElement('li');
	li.id = 'gz';
	var gz_text = document.createTextNode('广州');
	li.appendChild(gz_text);
	var bj = document.getElementById('bj');
	var city = document.getElementById('city');
	// city.insertBefore(li,bj);
	// bj.insertAdjacentElement("beforebegin", li);//<li>广州</li> <li id="bj">北京</li>
	// bj.insertAdjacentElement("beforeend", li);//<li id="bj">北京<li>广州</li></li> <li>上海</li>
	// bj.insertAdjacentElement("afterbegin", li);//<li id="bj"><li>广州</li>北京</li> <li>上海</li>
	bj.insertAdjacentElement("afterend", li);//<li id="bj">北京</li> <li>广州</li> <li>上海</li>
```

### 元素/节点替换

**父节点.replaceChild(新节点，旧节点)**：使用指定的子节点替换已有的子节点

**旧节点.replace(新节点)**：使用指定的子节点替换已有的子节点

```javascript
//使用"广州"节点替换#bj节点
find_btn('btn03',function(){
	var li = document.createElement('li');
	var gz_text = document.createTextNode('广州');
	li.appendChild(gz_text);

	var city = document.getElementById('city');
	var bj = document.getElementById('bj');
	// city.replaceChild(li,bj);
	bj.replaceWith(li);
});
```

### 删除节点/元素

**父节点.removeChild()**：删除一个子节点。

不知父节点时：

​			子节点.parentNode.removeChild(子节点);

​			要删节点.remove()

```javascript
find_btn('btn04',function(){
	var bj = document.getElementById('bj');
	var city = document.getElementById('city');
	// city.removeChild(bj);
	// bj.parentElement.removeChild(bj);//我调我父亲删我自己。。。
	bj.remove();
});
```

### innerHTML增删改节点/元素

用innerHTML与节点方法调用增删改方法的区别是，innerHTML修改相当于将节点内容全部修改，对网页影响较大。一般还未添加到网页中前，用innerHTML方式修改，添加/影响网页中元素时，调用相应的方法。

```javascript
myClick("btn07",function(){		
					//向city中添加广州
					var city = document.getElementById("city");
					//city.innerHTML += "<li>广州</li>";//动静较大
					
					var li = document.createElement("li");
					//向li中设置文本
					li.innerHTML = "广州";//未影响网页的li元素用innerHTML属性的方式修改
					//将li添加到city中
					city.appendChild(li);
				});
```

**a标签点击会跳转，如果绑定了单击函数，希望不跳转，则将将单击函数返回值设为false，或者改变a标签的href属性为“javascript:;”**

```html
<table id="employeeTable">
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Salary</th>
			<th>&nbsp;</th>
		</tr>
    <tr>
			<td>Tom</td>
			<td>tom@tom.com</td>
			<td>5000</td>
			<td><a href="deleteEmp?id=001">Delete</a></td>
		</tr>
</table>
```



```javascript
var delete_a = document.getElementsByTagName('a');
for(var i = 0;i < delete_a.length;i++){
	delete_a[i].onclick = function(){
    var tr = this.parentNode.parentNode;//这里需要用this，因为循环绑定单击函数 在 单击函数响应 前，当点击时，i值已经跳出循环了，所以delete_a[i]的i不在索引范围内，不能用delete_a[i]代替this。
    var name = tr.children[0].innerHTML;
    var flag = confirm("确认删除"+name+"吗?");//弹出一个带有确认和取消按钮的提示框
    if(flag){
      //删除tr
      tr.parentNode.removeChild(tr);
    }
    return false;//取消超链接点击跳转的默认行为
  };
}
```

<font color='red'>注意！</font>:1.如果通过table标签增加信息时，其table下的所有内容会修改，那么最开始绑定的单击函数会失效；2.增加行时，还需要为新增的a标签绑定单击函数；3.table标签在网页中会自动增加<tbody></tbody>标签包裹table标签下的内容。

## DOM操作CSS

### DOM操作内联样式

通过 对象.style.属性 读取/修改对象的内联样式。**当遇到属性有-连接符时，用小驼峰命名法**

- 通过style修改的是内联样式，内联样式有较高的优先级，修改后页面会立即改变；
- 如果在css样式中的属性写了！important，那么style修改的优先级略低，不能生效;
- 宽度为auto或者未定义时，读取宽度时返回值为空（什么也没有）。

```javascript
<head>
    <meta charset="UTF-8">
    <title>Tang</title>
		<!--css样式-->
    <style type="text/css">
        #box1{
            width:auto;
            height:200px;
            background-color:red;
        }
    </style>
    <script type="text/javascript">
        window.onload = function(){
            var btn01 = document.getElementById('btn01');
            btn01.onclick = function(){
                var box1 = document.getElementById('box1');
                box1.style.width = "100px";
              	box1.style.backgroundColor = 'yellow';
            };

            var btn02 = document.getElementById('btn02');
            btn02.onclick = function(){
                var box1 = document.getElementById('box1');
                alert(box1.style.backgroundColor);
            };
        };
    </script>
</head>
<body>
	<button id="btn01">btn01</button>
	<button id="btn02">btn02</button>
	<div id="box1"></div>
</body>
```

IE8: 元素对象.currentStyle.样式名 ，读取当前样式(包括CSS样式)。**只能读取**

IE8以上及其他浏览器：通过window的方法getComputedStyle()获取元素当前的样式对象。

- 参数1:要获取样式的元素；
- 参数2:传递一个伪元素(作用？)，一般传null。
- **只能读取样式**，不能修改
- 返回值为元素的样式对象，通过 **返回值.样式名** 读取特定样式
- 宽度为atuo或者未定义时，读取宽度时，返回值为当前窗口元素宽度值

```javascript
var btn02 = document.getElementById('btn02');
btn02.onclick = function(){
    var box1 = document.getElementById('box1');
    var obj_css = window.getComputedStyle(box1,null);
    console.log(obj_css.width);
};
```

### 浏览器兼容

自定义函数，将不同浏览器使用的同操作方法或函数包装。例如上述获取样式的方法。

```javascript
function getStyle(obj , name){
	//用window.getComputedStyle代替直接的getComputedStyle，为了不报错，此处if-else简化为三元运算符
	if(window.getComputedStyle){
		//正常浏览器的方式，具有getComputedStyle()方法
		return getComputedStyle(obj , null)[name];
	}else{
		//IE8的方式，没有getComputedStyle()方法
		return obj.currentStyle[name];
	}
}
```

### 其他样式操作

通过W3School->Javascript->(JS参考手册)HTML DOM对象->(HTML DOM对象)DOM Element ，查阅元素/节点的属性和方法。

以下属性都只读不可改，除offsetParent都返回数值。

| 属性         | 作用                                                     |
| ------------ | -------------------------------------------------------- |
| clientWidth  | 获取元素的可见宽度，含内容区和内边距                     |
| clientHeight | 获取元素的可见高度，含内容区和内边距                     |
| offsetWidth  | 获取元素的整个的宽度，包括内容区、内边距和边框           |
| offsetHeight | 获取元素的整个的高度，包括内容区、内边距和边框           |
| offsetParent | 获取当前元素的定位父元素，就近原则，如果都没有则返回body |
| offsetLeft   | 当前元素相对于其定位父元素的水平偏移量                   |
| offsetTop    | 当前元素相对于其定位父元素的垂直偏移量                   |
| scrollWidth  | 获取元素整个滚动区域的宽度                               |
| scrollHeight | 获取元素整个滚动区域的高度                               |
| scrollLeft   | 获取水平滚动条滚动的距离                                 |
| scrollTop    | 获取垂直滚动条滚动的距离                                 |



练习1:设置内容必读后提交，具体描述：有一段较长内容，需要滚动条拖动阅读，在阅读未完成时，勾选和提交按钮才生效，提交后页面跳转到提交响应页面。

PS：scrollHeight - scrollTop == clientHeight 说明垂直滚动条滚动到底了

```javascript

```

练习2:页面有两个框，第一个框用于鼠标移动范围框定，第一个框用于显示鼠标定位(x:？,y:？)

练习3:页面中有一个方块(div)，当鼠标在任意位置移动时，方块跟随鼠标移动。



# 其他

## 编码

Unicode编码，是十六进制编号。在JS代码中如果需要使用需要加\u转义。

```javascript
console.log("\u1C00");
```

在HTML标签内容中使用，需要加&#，且编号需要转换成十进制。

```html
<h1>&#9760;</h1>
```

## 常用函数

### 测试计时console.time()和console.timeEnd()

```javascript
console.time("name");
{
  测试代码段
}
console.timeEnd("name");//结果控制台输出name:XXXms
```

### 数学函数Math.xxx()

```javascript
Math.PI;//表示的圆周率

Math.sqrt(3);//1.7320508075688772,对数开方，结果浮点数
Math.abs(-1);//计算一个数的绝对值
Math.ceil(3.1);//4,向上取整
Math.floor(3.1);//3,向下取整
Math.round(3.1);//3,进行四舍五入取整
Math.random();//生成一个0-1之间的随机数
Math.round(Math.random()*(y-x)+x)//x~y直接的随机数，可以用来生成x-y的随机数
Math.max(10,45,30,100);//100,获取多个数中的最大值
Math.min(10,45,30,100);//10,获取多个数中的最小值
Math.pow(3,2);//9,返回x的y次幂
```

### 输入函数prompt()

```javascript
//函数声明
prompt(message?: string, _default?: string): string | null;
//输入函数，从键盘输入，参数可以是输入提示，返回值为string或null
```

## 常用方法

### hasOwnProperty()

检查对象自身中是否含有该属性，只有自身含有该属性才返回true。与[in运算符](###in 运算符)区别。

```javascript
var obj = new Object();
Object.prototype.name = 'ObjName';

console.log('name' in obj);//true
console.log(obj.hasOwnProperty('name'));//false
```

## toString()

toString()方法一般返回[object Object]，很多对象所属的类都重写了toString()方法，所以显示不同。

~~在页面中打印一个对象时，实际上是输出对象.toString()的返回值~~[教程与现有实践结果不同]

toString()可以指定表示进制

```javascript
    function Person(name){
        this.name = name;
    }

    var per = new Person("Tom");

    per.toString = function(){
        return "hehe";
    };//toString在per.__proto__.__proto__中，现在相当于override

    console.log(per);//Person {name: "Tom", toString: function}，按视频结果应该是“hehe”
    console.log("result:" + per);//result:hehe
    console.log(per.toString());//hehe

var num = 15;
console.log(num.toString(16));//f
```

## Debug

Safari浏览器在页面右击“检查元素”出现导航条，选择“调试器”，在代码上添加断点。

可以通过在“监视表达式”新增要查看的变量或函数等，来看运行时它们的变化。

# 注意点

## 1:文字内容区设置横向和纵向滚动条

存在的问题，文字内容会自动换行，当内容过多时，父元素设置overflow:scroll;只出现纵向滚动条。

解决办法：子元素dispaly设为block，且取消自动换行white-space: nowrap;或word-break: keep-all;

```html
#info {
    margin: 0px auto;
    width: 150px;
    height: 150px;
    overflow: scroll;
}
p {
    display: block;
    word-break: keep-all;/*或white-space: nowrap;*/
}

<div id="info">
    <p>1内容内容内容内容内容内容</p>
    <p>2内容内容内容内容内容内容</p>
    <p>3内容内容内容内容内容内容</p>
    <p>4内容内容内容内容内容内容</p>
    <p>5内容内容内容内容内容内容</p>
    <p>6内容内容内容内容内容内容</p>
    <p>7内容内容内容内容内容内容</p>
    <p>8内容内容内容内容内容内容</p>
</div>
```

## 2.代码格式

[JS代码格式 standardjs可参考](https://standardjs.com/)

## 3.()、[]、{}的使用

()：放置函数的参数、调整运算优先级。

[]：1.表示定义一个数组，可理解为一个数组对象；2.用于数组读取元素

{}：1.表示定义一个对象，内含成对的属性和值。2.表示代码块

(){}：一般用于定义函数，例如function(形参){ 方法体 };

({}):一般用于指定对象，尤其是对象有多个子对象组成时，为了避免JS将{}解析成代码块，所以在外层加了()。

```js
var obj = ({
        "name": "A",
        "age": 22,
        "sex": "F"
    }
        , {
        "name": "B",
        "age": 33,
        "sex": "F"
    }
);
console.log(obj);//{ name: 'A', age: 33, sex: 'F' }，因为括号中先计算，','号运算符从左往右，所以obj == { name: 'A', age: 33, sex: 'F' }
//如果想要两个对象，则需要将obj编程数组对象，([{xxx},{xxx}])或者[{xxx},{xxx}]
```

[{}]：对象数组，该数组的元素是对象

```js
var arr = [{name:'Tom'},{name:'Jerry'}];//arr数组有两个元素{name:'Tom'}和{name:'Jerry'}
console.log(arr[0].name);//'Tom'
```

## 4.JSON和String转换

[JSON和String转换我的CSDN博客链接](https://blog.csdn.net/FightingTang/article/details/115141567)

### String转换成JSON (String内为单JSON对象)

```js
var querystring = require('querystring');
var str = "a=b&c=d&e=f&h=g";

var str1 = `
{
    "name": "11",
    "age": 22,
    "sex": "F"
}
`;
//方式1 注意：字符串的属性名必须有引号，且为双引号，否则报错。得到的结果：非特殊属性名的无引号
var json11 = JSON.parse(str1);

//方式2 结果：非特殊属性名的无引号
var json12 = eval('(' + str1 + ')');

//方式3 结果：非特殊属性名的无引号
var json13 = (function (obj) {
    return Function('return (' + obj + ')')();
})(str1);

//方式4，将含&和=的字符串转换成JSON对象，&替换为,，=替换为:，属性名无引号，属性值全为字符串
var json14 = querystring.parse(str);//需要导入querystring模块
```

### String转换成JSON (String内为多JSON对象)

```js
var str2 = `
    {
        "name": "LiLi",
        "age": 22,
        "sex": "F"
    },
    {
        "name": "LaLa",
        "age": 18,
        "sex": "F"
    }
`;
//方式1 注意：字符串的属性名必须有引号。得到的结果：非特殊属性名的无引号
var json21 = JSON.parse('['+str2+']');

//方式2 结果：非特殊属性名的无引号
var json22 = eval('[' + str2 + ']');

//方式3 结果：非特殊属性名的无引号
var json23 = (function (obj) {
    return Function('return [' + obj + ']')();
})(str2);
```

### JSON转换成String

```js
var querystring = require('querystring');
var str = "a=b&c=d&e=f&h=g";
var json1 = ({ name: '11', age: 22, sex: 'F' });
var json2 = querystring.parse(str);
var json3 = [
  { name: 'LiLi', age: 22, sex: 'F' },
  { name: 'LaLa', age: 18, sex: 'F' }
];
//方式1 所有属性名加""，json的最外层加""
var str11 = JSON.stringify(json1);
var str21 = JSON.stringify(json2);
var str31 = JSON.stringify(json3);
```

### 自定义函数

自己封装两者转换的函数，待补充。。。

