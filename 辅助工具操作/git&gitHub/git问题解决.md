[TOC]

## 问题1:中文乱码(显示不友好)

问题描述：git status查看文件状态时，默认情况下中文显示为八进制字符，例如：

```markdown
1.Ubuntu18.04安装/

$git status
"1.Ubuntu18.04\345\256\211\350\243\205/"
```

问题解决：core.quotepath 引用路径项设为false。终端输入

```markdown
git config --global core.quotepath false
```

## 问题2:忽略所有.DS_Store文件

问题描述：Mac的所有文件夹下会默认有.DS_Store文件，当不想git跟踪时，需要将其忽略。

问题解决方式1:在仓库目录下创建.gitignore文件(与.git同级)，添加忽略文件

```js
//.gitignore文件
.gitignore #该文件本身
.DS_Store #根目录下的.DS_Store
*/.DS_Store #子目录下的.DS_Store

//或者
.gitignore #该文件本身
/**/.DS_Store #根目录及子目录下的.DS_Store
```

问题解决方式2:为所有的仓库设置忽略文件，在全局设置忽略文件目录。

```
//在当前用户根目录下(cd ~)创建一个全局要忽略的文件列表，可命名为.gitignore_global，写入要忽略的内容
.gitignore
/**/.DS_Store
.idea/

//将外部文件添加到git config全局中去。
//终端输入
git config --global core.excludesfile '外部文件绝对路径'
```

