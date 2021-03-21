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

## 问题3:本地仓库内容推送到无关联远程仓库

问题描述：当远程创建了github仓库以后，本地自行创建了仓库(非clone生成)，这时如果要把本地仓库的内容推送到远程仓库，会要求先fetch，fetch后融合时，报错"fatal: refusing to merge unrelated histories".

原因：因为不是clone生成的，本地仓库和远程仓库实际上是两个仓库，内容默认为不相关。

解决办法：使用`--allow-unrelated-history`选项来解决问题（该选项可以合并两个独立启动仓库的历史）

```
git pull origin master --allow-unrelated-histories

//或者fetch下来的分支，例如 远程别名remote_res 远程分支 remote_br
git merge remote_res/remote_br --allow-unrelated-history
```

