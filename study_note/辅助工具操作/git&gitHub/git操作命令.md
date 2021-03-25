[toc]
[参考链接](https://git-scm.com/book/zh/v2/)

### git 基础
#### git 配置信息

`git config --list` 检查配置信息
`git config <keyword>` 检查某一项配置信息
`git config --global --edit`编辑全局信息

#### 增删改git仓库内容
`git init`初始化仓库
`git add *.c`以.c结尾的文件添加到缓存区
`git commit -m 'initial project <file>'`初始版本提交
`git commit -m 'message'` 已追踪的文件修改后，跳过add直接commit

`git commit -a -m 'message'` 所有已追踪的文件修改后跳过add直接提交。

`git rm <file>`从已跟踪清单中移除，同时工作目录中删除。

* rm从工作区删除文件后，git rm 记录此次移除文件的操作。

`git rm --cached <file>`从暂存区删除，工作区还在。
`git mv file_from file_to`相当于三部：重命名，移除file_from，add file_to
`git commit amend`上一次提交，漏了文件或漏写了提交信息，通过这个弥补，且git只存入1次（新的）。
`git checkout --<file>`用最新提交的版本覆盖

#### 状态、历史版本查看切换 打标签
1.文件的托管状态查看
`git status` 
`git status -s` 或-short 
* ??表示未追踪，M 已修改，A 新添加到暂存区。有两栏，第一列表示暂存区状态，第二列表示工作区状态。

`git log`
`git reflog`
`git --pretty=oneline`
`git log --pretty=format:%h - %an,%ar :%s`以固定格式获取日志

2.历史版本切换
方式1
`git reset --hard hash索引`直接切换到对应的版本
方式3
`git reset --hard HEAD^`一个^符合表示后退一步
方式3
`git reset --hard HEAD~3`数字表示后退几步
> reset 的三个参数
> --soft 修改本地库，不修改暂存区和工作区
> --mixed 修改本地库和暂存区，不修改工作区
> --hard 修改本地库、暂存区和工作区

3.打标签，相当于给某一次版本起别名，不用记复杂的hash索引
`git tag -a [标签] -m “short message”` -a全部，不加-a表示轻量标签，show的时候信息少，-m后可选，用于简短说明。
`git tag -l` or --list 列出现有标签列表
`git show 标签1` 可查看标签1和对应的提交信息。
`git tag -a [标签] 某版本部分哈希值` 对历史提交打标签
`git push origin 标签1`标签不自动传到远程仓库，要单独push `git push origin --tags` 批量
`git tag -d 标签`删除标签
`git push orgin --delede <标签>`删除远程库标签

#### 忽略文件(不想git托管的文件)
`.gitignore`,向内添加忽略追踪的文件
```
*.[oa] #以.o,.a结尾的文件
.gitignore #该文件自己
.DS_Store #mac经常自己产生的文件
```

```
# 忽略所有的 .a 文件
*.a
# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
!lib.a
# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
/TODO
# 忽略任何目录下名为 build 的文件夹
build/
# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
doc/*.txt
# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
doc/**/*.pdf
```

#### 查看已暂存和未暂存的修改
`git diff [filename]` 版本库最新与工作区比较
`git diff --staged [filename]` or --cached 版本库最新与暂存区比较
* 文件名可选，如果不写则表示有改动的所有文件。

#### 远程仓库的使用(origin来代替远程库URL)
1.查看远程仓库
 `git remote`查看已配置的远程仓库服务器
 `git remote -v`显示已配置远程仓库服务器别名及其URL
 `git remote show origin`远程库更详细的信息

2.添加/删除/重命名远程仓库
`git remote add <alias> <url>`添加
`git remote remove <alias>`删除
`git remote rename <old_name> <new_name>` 重命名

3.克隆远程库
`git clone url [rename]`url 或 已保存的远程库的别名
`git clone -o remoteName1 url [rename]`把远程库的url保存为remoteName1
* clone后，会直接添加remote信息到本地
`git clone --bare path`在空文件夹下，clone路径对应的本地库。
* 此库为裸库，仅做远程推送，不做修改。一般克隆好后会出现XXX.git文件夹。两个实体库之间不能做推送，以防止覆盖对方的内容。所以，都以裸库做中介，通过裸库来pull和push。

4.fetch 远程库
`git fetch origin` 抓取

5.merge 分支
`git merge origin/master`切换到要保留的主线，merge origin/master

6.pull 远程分支
pull = fetch + merge ，建议分两步走，减少混乱
`git pull origin master`

7.push 到远程库
`git push origin master` 远程URL和要发到的分支名

#### git别名
给对应的命令起别名区别于之前给版本打tag。
`git config --global alias.br branch`将br设为branch命令的别名
`git config --global --unset alias.br`取消别名

### git分支
#### 查看分支状态
1.本地分支状态查看
`git log --oneline --decorate`查看各个分支所指的对象
`git log --oneline --decorate --graph --all`以图的方式查看所有分岔历史
`git branch` 显示分支列表（\*表示当前HEAD所指分支）
`git branch -v`显示分支列表和最新提交（含hash）
`git branch -vv`显示分支列表和最新提交（含hash）和跟踪的分支
`git branch --merged [branch1]`显示已合并到branch1分支的列表，不写默认branch1为当前分支
`git branch --no-merged [branch1]`显示未合并到当前分支的列表

2.远程分支查看
`git ls-remote <remote>`来获取远程引用完整列表
`git remote show <remote>`获得远程分支更多信息

#### 分支增、删
1.分支新建与切换
`git branch <newbranchname>`创建新分支
`git checkout -b <newbranchname>`创建新分支并切换到新分支
`git checkout -b <newbranch> <oldbranch>`在原分支的基础上创建分支
`git checkout testing`切换到testing分支

2.分支删除
`git branch -d <branchname>`删除本地分支（有未合并内容会报错，提示用-D）
`git push origin --delete <branchname>`删除远程分支

#### 分支的操作
1.分支融合
`git merge <branch2>`切换到保留的分支，融合branch2
PS:融合如果有冲突，会提示。需要手动太解决冲突
`git mergetool`用可视化工具来引导解决冲突（Mac中默认的是opendiff）

2.fetch分支
`git fetch <remote>`与远程仓库同步数据，并且移动远程指针（origin/master）到更新的位置。【远程版本更新，本地也更新，出现了分支。origin/master和本地master】
可以添加另外一个远程库，如果本地没有数据会抓取数据，如果有数据，仅设置远程跟踪分支。
`git checkout -b <branch> <remote>/<branch>`创建一个本地分支来跟踪远程分支，完成切换
* 快捷方式`git checkout --track <remote>/<branch>` `git checkout <remoteBranch>`

3.推送分支
`git push <remote> <branch>`简写，本地推送和远程接收分支同名
`git push <remote> localBranch:remoteBranch`给远程仓库的某分支推送的完整形式
`git push --set--upstream origin 要传分支名`将本地新建的分支以及修改的内容上传到远程仓库

8.跟踪分支
其他见“分支的操作->2.fetch分支”
切换到某个分支`git branch -u <remote>/<branch>`会将当前分支设置为跟踪远程的remote/branch
`git fetch --all;git branch -vv`更新所有远程跟踪的分支，并显示所有分支跟踪信息。
* 例如：ahead 2 表示有2个更新为提交；behind 3 表示有3个版本落后于远程

9.pull分支
> pull=fetch+merge

`git pull`会查找当前分支所跟踪的服务器与分支，并从服务器抓取数据然后尝试合并到本地分支。

#### 变基
1.切换到小分支，`git rebase 主分支`，把小分支上做的修改依次应用打主分支上（实际此时主分支内容没有变化）
直接`git rebase <主分支> <小分支>`，不用切换
2.切换到主分支，`git merge 小分支`，把小分支内容融合到主分支上（快进合并）
变基结果和直接merge是一样的，但是提交历史变基比直接merge整洁（没有分叉）

`git rebase --onto master server client`取出client分支，找出它从server分支分歧后的修改，在master上应用。

* server是master分支，client是server分支，想将client内的修改不在server的修改先合并到master