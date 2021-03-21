[TOC]

[参考尚硅谷python教程](https://www.bilibili.com/video/BV1hW41197sB?p=24)

[官方文档](https://docs.python.org/zh-cn/3/)

ps: 本博客内容一般用sublime text编辑，编译系统为python3

# 变量和标识符

python的变量不需要声明，直接为变量赋值后使用。未赋值的变量不能使用。

python属于动态类型的语言，可以赋任意类型的值，也可以任意修改变量的值

标识符，如：变量名、函数名、类名。起名规则与其他编程语言一样



# 数据类型

## 1.整数

int类型，无限大，十进制不能以0开头。二进制0b开头，八进制0o，十六进制0x。输出数字皆为10进制

```python
# 二进制 八进制 十六进制的赋值
num2 = 0b10
num8 = 0o10
num16 = 0x10
print(num2) # 2
print(num8) # 8
print(num16) # 16

# 数字长度过长，可以用下划线作为分隔符
num = 123_456_789
print(num) #输出结果为123456789
```

## 2.浮点数

小数，皆为float，运算有可能得到不精确数

```python
num = 0.1 + 0.2
print(num) # 0.30000000000000004
```

## 3.字符串 

要用引号包裹，单引号双引号都可以。相同引号不能嵌套。不能跨行，可用\跨行，字符串内容不保留换行符。用三重引号（'''hello''',或"""hello"""）可以含格式跨行

(1)字符串拼接 ：可以通过变量相加来拼接，或者打印函数输入两个参数，或者用占位符%s。

```python
# 拼接方式1，其他数据类型不能通过相加来拼接
str = 'tom' + 'hello'
print(str)
print("a = "+a)

# 拼接方式2
print('hello','world') # 输出结果为：hello world ，两个参数间有空格

# 拼接方式3
# 在创建字符串时，可以在字符串中指定占位符。%s 在字符串中表示任意字符,%f浮点数占位符 %d整数占位符。%ms[f/d]，m为整数，当结果长度小于m时，左补空格输出
b = 'hello %s' %'孙悟空'
c = 'hello %s and %s.' %('tom','jerry')
b = 'hello %3.5s'%'abcdefg' # %3.5s字符串的长度限制在3-5之间
b = 'hello %s'%123.456
b = 'hello %.2f'%123.456 # 123.46四舍五入，保留两位小数
b = 'hello %d'%123.95 # 123仅保留整数部分
b = 'hello %.5d'%123.123456 # 00123左补0

# 拼接方式4
# 格式化字符串，可以通过在字符串前添加一个f来创建一个格式化字符串，可以直接嵌入变量。
a = 'tom'
b = 'jerry'
c = f'hello {a} {b}'
print(c) # hello tom jerry
print(f'a = {a}') # a = tom
```

(2).字符串复制

```python
str = 'hello'
str_cpy = str * 5
print(str_cpy) # hellohellohellohellohello
```

## 4.布尔值和空值

布尔值主要用来做逻辑判断(True/False)，空值(None)专门用来表示不存在

**python中布尔值实际上也属于整型，True就相当于1，False就相当于0**

## 类型检查

type()用来检查值的类型，该函数会将检查的结果作为返回值返回，可以通过变量来接收函数的返回值

```python
print(type(1)) # <class 'int'>
print(type(1.5)) # <class 'float'>
print(type(True)) # <class 'bool'>
print(type('hello'))  # <class 'str'>
print(type(None)) # <class 'NoneType'>
```

## 类型转换

1.类型转换四个函数 int() float() str() bool()
2.int() 可以用来将其他的对象转换为整型
	int() 规则：
	  布尔值：True -> 1   False -> 0
  	浮点数：直接取整，省略小数点后的内容
  	字符串：合法的**整数字符串**，直接转换为对应的数字
       	   如果不是一个合法的整数字符串，则报错 ValueError: invalid literal for int() with base 10: '11.5'
 	 对于其他不可转换为整型的对象，直接抛出异常 ValueError
3.float() 和 int()基本一致，不同的是它会将对象转换为浮点数
4.str() 可以将对象转换为字符串
	 True -> 'True'
	 False -> 'False'
	 123 -> '123' 
 5.bool() 可以将对象转换为布尔值，任何对象都可以转换为布尔值
  规则：对于所有表示空性的对象都会转换为False，其余的转换为True
      哪些表示的空性：0 、 None 、 '' 

# 运算符(操作符)

## 算数运算符

注意点：1./除法，得到浮点型；2.// 整除，舍去小数位；3.\**幂运算；4.\*可用于字符串与数字相乘，即重复次数(如:a = 2 * “a”,表示a=“aa")；5.没有自加自减

## 关系运算符

**注意点**

1.字符串间可以比较，实际上是逐位比较字符串的Unicode编码。'2' > '11' 为真，如果不希望比较其Unicode编码，则需要将其转换为数字。
2. 2 和'1' 不能比，数值型可以和布尔型直接比较，但是不能和其他类型直接比较
3.is 和 is not 用于比较两个对象是否是同一个对象，即比较对象的id

## 逻辑运算符

not 逻辑非，and 逻辑与（短路与），or 逻辑或（短路或）。**and优先级高于or**
1.当非布尔值进行逻辑运算时，会当成布尔值运算，但不返回True或False，而是返回原值。返回原值看最后判断的是哪个值

```python
# True and True
result = 1 and 2 # 2
# True and False
result = 1 and 0 # 0
# False and True
result = 0 and 1 # 0
# False and False
result = 0 and None # 0

# True or True
result = 1 or 2 # 1
# True or False
result = 1 or 0 # 1
# False or True
result = 0 or 1 # 1
# False or False
result = 0 or None # None
```
2.可以连着使用，如result=1<2<3,为True（即1 < 2 and 2 < 3）与其他语言中不同

## 条件运算符

  (语句1) if 条件表达式 else (语句2) --先判断，如果真执行语句1，否则执行语句2

```python
a = 1
b = 2 
print('a的值比较大！') if a > b else print('b的值比较大！') # b的值比较大！

max = a if a > b else b # 比较后取两值的最大值
```

# 流程控制

1.if 条件表达式：语句 （默认情况下值控制随后的那条语句，换行后缩进会形成一个代码块，受if控制）

2.while循环控制

3.代码块：以缩进开始到上一级缩进结束。缩进两种方式：Tab键、4个空格(首选项设置中将"translate_tabs_to_spaces": true,可以通过tab键来输入代码块的缩进空格 )

```python
# if
if True:print("hello")

# if-else
if 条件表达式:
  代码块
else：
  代码块

# if-elif-else
if 条件表达式 :
      代码块
  elif 条件表达式 :
      代码块
  elif 条件表达式 :
      代码块
  else :
      代码块
#  while循环，else可省
while 条件表达式 :
      代码块
else :
      代码块

# 求三位数的水仙花数
i = 100

while i < 1000:
    temp = i
    amount = 0
    while(temp > 0):
        num = temp % 10
        temp = temp // 10
        amount += num ** 3
    if amount == i :
        print(i)
    i += 1
```

PS:break 跳出当前循环, continue跳出本次循环，pass 代码块暂时未完成，属于占位

# 序列(Sequence)

可变序列（序列中的元素可以改变）：

​      \> 列表（list）【可变的意思是，固定索引的元素id不变，可以修改元素的值】

​    不可变序列（序列中的元素不能改变）：

​      \> 字符串（str）  

​      \> 元组（tuple）

**序列可以解包，详见序列解包**

## 列表(list)

是Python中的一个对象,可以通过list(s1) 将s1序列转化为list

`有点类似于数组，但是元素没有数据类型的限制`

```python
my_list = [10,'hello',True,None,[1,2,3],print]
my_list[5]("hello") # 相当于print("hello")
```

### 创建列表

```python
my_list = [] # 创建了一个空列表
print(my_list , type(my_list)) # [] <class 'list'>

# 通过list()函数创建
```

### 改/查元素

```python
# 列表元素按顺序存储，通过索引(从0开始)获取元素。
# 索引超过了最大的范围，会抛出异常；可以是负数，从后向前数,-1为倒数第一个元素
my_list = [1,2,3,4,5]
my_list[0] #查询，1

my_list[0] = 6 #修改，将第一个元素从原来的1赋值为6
my_list[1:3] = [6,7,8,9] #切片，修改多元素，将索引1-2的元素改为[6，7，8，9]，结果为[1,6,7,8,9,4,5]

my_list = [1,2,3,4,5]
my_list[::2]= "abc" #切片，修改多元素，从开始到结尾，每隔一个元素修改['a', 2, 'b', 4, 'c']，因设置了步长，所以要求新元素和切片中的元素个数一致
```

### 增加元素

```python
my_list[0:0] = [值]    #向索引为0位置插入切片
my_list[1:1] = [值]    #向索引为1位置插入切片

# 通过 append() 或 insert()方法 或 extend()方法
```

### 删除元素

```python
del my_list[2]  # 删除元素
del my_list[0:2] # 通过切片删除多元素

# 通过pop() 或 remove() 方法
```

### 清空列表

```python
# 通过clear()方法
```

### 相关函数

```python
# list()创建列表
my_list = list("hello") # ['h','e','l','l','o']
# len()获取列表长度
my_list = [1,2,3,4,5]
print(len(my_list)) # 5
# min() 获取最小值；max() 获取最大值。前提是列表中的元素能比较
my_list = [1,2,3,4,5]
print(min(my_list)) # 1
```

### 相关方法

```python
my_list.append("hello")    # 在list后添加元素
my_list.insert(2,"hehe")   # 在指定索引位置插入元素
my_list.extend([1,2])  # 在列表后添加切片

my_list.remove("hehe") # 删除指定值元素，有多个时仅删首个。如果不存在报错：x not in list
my_list.pop(3)    # 删除指定索引位置元素，并返回该元素。不写索引时，默认-1

my_list.clear() # 清空列表

my_list.reverse()    # 颠倒列表

my_list.sort( )    # 把列表排序(默认升序) my_list.sort(reverse = True ):降序

my_list.index(XX,i,j) # 元素XX首次出现的索引，i开始查的索引，j结束索引，i,j可省；没有则报异常 is not in list 
my_list.count()  # 指定元素在列表中出现的次数
```

### 遍历列表

```python
# 通过while循环和列表长度(len函数获取)来遍历列表
i = 0
while i < len(stus):
    print(stus[i])
    i += 1

# 通过for循环来遍历列表
for 变量 in 序列 :
      代码块
# for循环的代码块会执行多次，序列中有几个元素就会执行几次
#   没执行一次就会将序列中的一个元素赋值给变量，
#   所以我们可以通过变量，来获取列表中的元素
```

### 其他（in 和 not in，+ 和 *）

in 和 not in用来检查指定元素是否在列表中，返回值为True或False

+可以将两个列表拼接为一个列表，* 可以将列表重复指定次数

### 切片

切片指从列表中获取一个子列表：列表[起始索引(含):终止索引(不含)]

a[1:]  截取索引1到最后；a[：3]  截取索引0到索引2；a[ : ]  相当于复制一遍

a[0:5:2]  按步长为2截取（可以是负数，负数代表从后向前按步长取）

切片可以用序列赋值

## 元组(tuple)

如同C语言中的枚举，不能增删改。

### 创建元组

```python
my_tuple = () # 创建了一个空元组
my_tuple = (1,2,3)  # 创建元组
my_tuple = 1,2,3 # 创建元组
my_tuple = 1, # 创建元组，逗号不能省
```

### 查询元素(同list)

```python
my_tuple = 1,2,3 
print(my_tuple[1]) # 结果 2 查询指定索引元素
```

### 不可增、删、改

```python
# 不可变对象，不能增加元素
my_tuple.insert(2,5) # AttributeError: 'tuple' object has no attribute 'insert'

# 元组是不可变对象，不能尝试为元组中的元素重新赋值
my_tuple[3] = 10  # TypeError: 'tuple' object does not support item assignment

# 不可变对象，不能删除元素
del my_tuple[1] # TypeError: 'tuple' object doesn't support item deletion
my_tuple.clear() # AttributeError: 'tuple' object has no attribute 'clear'
```

## 序列解包

解包指就是将序列当中每一个元素都赋值给一个变量，以元组为例。

```python
# 解构方式1:变量数与元素数量一致
my_tuple = 10 , 20 , 30 , 40
a,b,c,d = my_tuple
print("a = ",a) # a = 10

# 解构方式2:变量数少于元素数，带*的变量只能有一个，用来承接剩余的元素，且类型为list。
my_tuple = 10 , 20 , 30 , 40
a , b , *c = my_tuple
a , *b , c = my_tuple
*a , b , c = my_tuple

# 用途：两变量值互换
a = 1
b = 2
a , b = b, a
print("a = ",a ) # a =  2
print("b = ",b) # b = 1
```

# 字典(dict) 

字典属于一种新的数据结构，称为映射。

**程序书写过程中注意别漏掉参数的引号。**

## 字典创建

```python
my_dict = {} # 创建了一个空字典
my_dict = {k1:v1,k2:v2} # 创建了一个新的字典

# 通过dict()函数创建
```

## 查询值

```python
# 根据键来获取对应值
my_dict = {'name':"tang",'age':18,'gender':'f'}
print(my_dict['name']) # tang,如果键不存在，会抛出异常 KeyError

# 通过get()方法
```

## 增加元素

```python
d[key] = value # 如果key存在则覆盖，不存在则添加

# 通过setdefault() 或 update()方法
```

## 修改元素

```python
d[key] = value # 如果key存在则覆盖，不存在则添加

# 通过 update()方法
```

## 删除元素

```python
del my_dict['name'] # 删除键及对应的value，key不存在则报错

# 通过popitem() 或 pop()方法
```

## 清空字典

```python
# clear()方法
```

## 相关函数

```python
# dict()函数：创建字典
my_dict = dict(k1=v1,k2=v2)    # 这种方式创建的字典key会自动转化为字符串
d = dict([('name','孙悟饭'),('age',18)]) # 通过双值子序列转化为字典

# len()函数：获取字典中键值对的个数
my_dict = dict(name="tang",age=18,gender='f')
print(len(my_dict)) # 3
```

**双值序列**：序列中只有两个值，[1,2] ('a',3) 'ab'

**子序列**：如果序列中的元素也是序列，那么我们就称这个元素为子序列

## 相关方法

```python
# get(key[, default]) :用来根据键来获取字典中的值,不存在，会返回None；或不存在该键时，指定返回默认值
my_dict = dict(name="tang",age=18,gender='f')
print(my_dict.get('hello','没有hello键')) # 没有hello键

# setdefault(key[, default])：用来向字典中添加key-value，如果key已经存在，则返回对应的value；不存在则添加key:value，返回value
result = my_dict.setdefault('school','hnu') 

# update([other])：将其他的字典中的key-value添加到当前字典中，有重复key会替换
my_dict = {'a':1,'b':2,'c':3}
d2 = {'d':4,'e':5,'f':6, 'a':7}
my_dict.update(d2) # {'a': 7, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6}

# popitem()：随机删除字典中的一个键值对，一般都会删除最后一个键值对。返回值为元组（key,value），删除空字典会报错。
my_dict = {'a': 7, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6}
print(my_dict.popitem()) # ('f',6)

# pop(key[, default]) ：根据key删除字典中的key-value，返回值为对应的value。如果不存在该key，可以指定返回默认值。
result = my_dict.pop('z','这是默认值')

# clear():清空字典
my_dict.clear()

# copy():用于对字典进行浅复制。浅复制会简单复制对象内部的值，修改一个不会影响另一个。如果值也是一个可变对象，这个可变对象不会被复制，是同一个id，修改一个会影响另一个。
d = {'a':{'name':'A','age':18},'b':2}
d2 = d.copy()
d2['b'] = 6
d2['a']['name'] = 'B'
print('d = ',d , id(d))      # d =  {'a': {'name': 'B', 'age': 18}, 'b': 2} 4502268992
print('d2 = ',d2 , id(d2))  # d2 =  {'a': {'name': 'B', 'age': 18}, 'b': 6} 4502269312
print("d['a'] = ",type(d['a']),id(d['a']))    # d['a'] =  <class 'dict'> 4502268928
print("d2['a'] = ",type(d2['a']),id(d2['a'])) # d2['a'] =  <class 'dict'> 4502268928

# keys() ：返回字典的所有key的序列,返回类型dict_keys。
d = {1:'h',2:'b'}
print(d.keys()) # dict_keys([1, 2])

# values()：返回字典中所有的值的序列，返回值类型dict_values
d = {1:'h',2:'b'}
print(d.values()) # dict_values(['h', 'b'])

# items()：返回字典中所有的项，返回值类型dict_items
d = {1:'h',2:'b'}
print(d.items()) # dict_items([(1, 'h'), (2, 'b')])
```

## 遍历字典

```python
# keys()方法遍历
for k in my_dict.keys()：
		print(k,d[k])
# values()方法遍历
for v in my_dict.values():
    print(v)
# items()方法遍历
for k,v in my_dict.items():
  	print(k,"=",v)
```

## 其他(in和not in)

in和not in 用来检查字典中是否包含指定的键

# 集合(set)

集合里面元素一般无序，且元素唯一。

## 集合创建

```python
my_set = {6,2,4,3} # 创建集合

# 通过set()函数 创建
```

## 增加元素

```python
# 通过add() 或 update()方法
```

## 删除元素

```python
# 通过 pop() 或 remove()方法
```

## 清空集合

```python
# 通过clear()方法
```

## 相关函数

```python
# set()函数：用来创建集合。可以将序列和字典转换为集合，⚠️字典转换为集合时，只包含键
my_set = set() # 空集合
my_set = set([1,2,3,4,5,1,1,2,3,4,5]) # {1, 2, 3, 4, 5}
my_set = set("hello") # {'o', 'e', 'h', 'l'}
my_set = set((1,5,3,4,2,3)) # {1, 2, 3, 4, 5}
my_set = set({'a':1,'b':2,'c':3}) # {'c', 'b', 'a'}

# len()函数：获取集合中元素的数量
my_set = set((1,5,3,4,2,3))
len(my_set) # 5
```

## 相关方法

```python
# add()方法 ：向集合中添加元素。
my_set.add(10)
# update()方法：将一个集合中的元素添加到当前集合中。传递序列或字典作为参数
my_set.update('hello')

# pop()方法：随机删除并返回一个集合中的元素
my_set.pop()
# remove()方法：删除集合中的指定元素
my_set.remove(3)

# clear()方法：清空集合
my_set.clear()

# copy()方法：对集合进行浅复制
my_set.copy()
```

## 集合运算

```python
s = {1,2,3,4,5}
s2 = {3,4,5,6,7}
# & 交集运算
result = s & s2 # {3, 4, 5}
# | 并集运算
result = s | s2 # {1,2,3,4,5,6,7}
# - 差集
result = s - s2 # {1, 2}
# ^ 异或集 获取只在一个集合中出现的元素
result = s ^ s2 # {1, 2, 6, 7}

# <= 检查一个集合是否是另一个集合的子集
result = {1,2,3} < {1,2,3,4,5} # True
result = {1,2,3} <= {1,2,3} # True
result = {1,2,3,4,5} <= {1,2,3} # False
# < 检查一个集合是否是另一个集合的真子集
result = {1,2,3} < {1,2,3,4,5} # True
result = {1,2,3} < {1,2,3} # False
# >= 和 > 参考 <= 和 <
```



## 其他(in和not in)

in和not in 用来检查集合中的元素

# 函数

## 函数定义

```python
# 定义
def fn(a,b):
  	print("a + b =",a+b)
# 调用
fn(1,2)
```

## 函数参数

```python
# 函数定义时可为形参指定默认值，如果传来实参值则默认值无任何作用
def fn(a = 5 , b = 10 , c = 20):
    print('a =',a)

# 实参传递方式：位置参数，关键字参数
def fn(a = 5 , b = 10 , c = 20):
    print('a =',a)
fn(1,2,3) # 位置参数：一一对应传给形参
fn(b=1 , c=2 , a=3) # 关键字参数，可以不按顺序，而直接根据参数名去传递参数
fn(1,c=30) # 混合使用关键字和位置参数时，必须将位置参数写到前面,好像没什么用？

# 形参和实参相互作用：直接修改形参，不影响实参；如果参数是可变对象，修改可变对象形参的内容时会影响实参
def fn(a):
    a[0] = 10
    print(id(a)) # 4331256064
b = [1,2,3]
fn(b)
print(b) # [10, 2, 3]
print(id(b)) # 4331256064

# 不定长参数
# *形参只有一个，可用来接收未确定的位置实参，以元组的形式存储。带* 的形参位置可以不定
def fn(a,*b):
  for n in b:
    print(n)
fn(1,2,3,4)  # b为(2,3,4)
def fn2(a,*b,c):
    for n in b:
    	print(n)
fn2(1,2,3,4,5,c=6) # *后的参数要以关键字参数形式传递

# **形参只有一个，可以用来接收其他的关键字参数，以字典的形式存储。带** 的形参必须在最后。
def fn3(b,c,**a) :
    print('a =',a,type(a))
    print('b =',b)
    print('c =',c)
fn3(b=1,d=2,c=3,e=10,f=20)

# 参数的拆（解）包
# * 解包。序列类型，要求序列元素个数和形参个数一致
def fn4(a,b,c):
  。。。
t = (1,2,3)
fn4(*t)
# ** 解包。字典类型，
d = {'a':100,'b':200,'c':300}
fn4(**d) # 相当于关键字参数传递
```

## 返回值

返回值就是函数执行以后返回的结果

```python
def fn():
    def fn2() :
        print('hello')
    return fn2 # 返回值也可以是一个函数
fn()() # 相当于fn2()

# 仅写return相当于return None
```

## 函数说明

在定义函数时，可以在函数内部编写文档字符串，文档字符串就是函数的说明，可以通过help()函数查看。

```python
def fn(a:int,b:bool,c:str='hello') -> int: # 类型说明和默认值，返回值。这里仅做提醒，没有强行限制
    '''
    这是一个文档字符串的示例

    函数的作用：。。。。。
    函数的参数：
        a，作用，类型，默认值。。。。
        b，作用，类型，默认值。。。。
        c，作用，类型，默认值。。。。
    '''
    return 10

help(fn) # 这个函数的执行结果就是它的返回值
print(fn(1,2,3)) 
```

## 变量作用域&命名空间（namespace）

1.函数内部可以直接用全局变量，但是如果在函数内部修改全局变量的话，要用global关键字。先声明**global 变量名**，如果函数内声明了global变量，又在声明前直接使用的语句，则会报错。

2.命名空间指的是变量存储的位置，每一个变量都需要存储到指定的命名空间当中

* 每一个作用域都会有一个它对应的命名空间
* 全局命名空间，用来保存全局变量。函数命名空间用来保存函数中的变量
* 命名空间实际上就是一个字典，是一个专门用来存储变量的字典

3.查看命名空间：ocals()用来获取当前作用域的命名空间，globals() 函数可以用来在任意位置获取全局命名空间

# 面向对象



# 文件

## 打开文件

通过open()函数来打开文件

```python
open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
参数：
	file:要打开的文件的名字（路径）
  encoding：打开文件编码类型。文件分两种：纯文本文件和二进制文件。open()打开时默认文本文件打开，但是编码为None，需要指定文件编码。如：encoding='utf-8'
  mode:文件操作。r,只读;w,覆盖写，文件不存在时创建文件;a,追加写，文件不存在创建文件;x,新建文件，不存在时创建，存在则报错;+,增加功能。r+,w+,a+。**读取模式**：t文本文件（默认）；b二进制文件 rb,wb,ab等
  
返回值：
	返回一个对象，对象代表当前打开的文件
  
# 在windows系统使用路径时，可以使用/来代替 \,或者可以使用 \\ 来代替 \,者也可以使用原始字符串
file_name = 'hello\\demo.txt'
file_name = r'hello\demo.txt'

# 表示路径，可以使用..来返回一级目录(相对路径)
file_name = '../hello/demo.txt'

file_obj = open(filename) # 得到打开文件的对象
```

## 读取文件内容

通过read()方法，用来读取文件中的内容，它会将内容全部保存为一个字符串返回。缺点：一次性读取全部内容，遇到大文件容易导致内存泄露。

```python
content = file_obj.read() # 文件对象调用read()方法来读取内容

content = file_obj.read(1024) # size读取字符数量，默认-1为全读。读到最后返回空串''
```

readline() 方法，可以用来读取一行内容。**问题：**怎么知道行数量？

```python
file_name = 'hehe/hehe.txt'

with open(file_name , encoding='utf-8') as file_obj:
  r = file_obj.readline()
  print(r)
  print(file_obj.readline(),end='')
  print(file_obj.readline())
  print(file_obj.readline())
```

readlines()方法，用于一行一行的读取内容，它会一次性将读取到的内容封装到一个列表中返回。带换行符\n

```python
import pprint
import os
file_name = 'hehe/hehe.txt'

with open(file_name , encoding='utf-8') as file_obj:  
    r = file_obj.readlines()
    print(r)
    pprint.pprint(r[0])
    for text in r:
        print(text)
```

通过for循环遍历输出

```python
file_name = 'hehe/hehe.txt'
with open(file_name , encoding='utf-8') as file_obj:
  for t in file_obj:
        print(t,end='')
```

## 修改文件内容

write()方法：向文件中写入内容。可以多次写入，返回值为写入字符个数(含换行)。

```python
file_name = 'demo.txt'
with open(file_name , 'x' , encoding='utf-8') as file_obj:
  file_obj.write('aaa\n')
  r = file_obj.write(str(123)+'123123\n')
  print(r)
```

## 文件内容定位

seek() 方法可以修改当前文件定位。tell()方法查看当前文件定位。

```python
# seek()需要两个参数
#   第一个 是要切换到的位置
#   第二个 计算位置方式
#       可选值：
#           0 从头计算，默认值
#           1 从当前位置计算
#           2 从最后位置开始计算

# tell() 方法用来查看当前读取的位置
print('当前读取到了 -->',file_obj.tell())
```

## 关闭文件

通过close()函数关闭文件

```python
file_obj.close() # 文件对象调用close()方法关闭文件
```

## 文件系列操作

```python
# with ... as 语句
with open(file_name) as file_obj :
    # 在with语句中可以直接使用file_obj来做文件操作
    # 此时这个文件只能在with中使用，一旦with结束则文件会自动close()
    print(file_obj.read())
   
# 文件操作优化1:避免文件打开异常
try:
    with open(file_name) as file_obj :
        print(file_obj.read())
except FileNotFoundError:
    print(f'{file_name} 文件不存在。')
    
# 文件操作优化2:读取大文件
file_name = 'demo.txt'
try:
    with open(file_name,encoding='utf-8') as file_obj:
        # 定义一个变量，来保存文件的内容
        file_content = ''
        # 定义一个变量，来指定每次读取的大小
        chunk = 100
        # 创建一个循环来读取文件内容
        while True:
            # 读取chunk大小的内容
            content = file_obj.read(chunk)
            # 检查是否读取到了内容
            if not content:
                # 内容读取完毕，退出循环
                break
            # 输出内容
            # print(content,end='')
            file_content += content
except FileNotFoundError :
    print(f'{file_name} 这个文件不存在！')
print(file_content)
```

## 其他操作



# 输入输出

input()函数：用来获取键盘输入，返回值是一个字符串。可以设置一个字符串作为参数，这个字符串将会作为提示文字显示。(⚠️：Sublime text3 用command+B运行后无法程序无法继续进行，解决办法：安装SublimeREPL才能使用input函数，用F5快捷键编译运行。其他问题见后面内容“报错及解决办法”)

```python
name = input("please input your name:")
print(type(name))

程序：输入 糖
please input your name:糖
<class 'str'>
糖

***Repl Closed***
```

# 常用函数

```python
# range()是一个函数，可以用来生成一个自然数的序列。通常和for循环联用，用于指定循环次数
# 需要三个参数:1.起始位置（可以省略，默认是0）;2.结束位置;3.步长（可以省略，默认是1）
r = range(5)
print(r) # range(0, 5)
print(type(r)) # <class 'range'>
print(list(r)) # [0, 1, 2, 3, 4]

# help()函数:可以查询python中的函数的用法
help(print) # 获取print()函数的使用说明

```











